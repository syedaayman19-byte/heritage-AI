import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { siteName } = await req.json();
    if (!siteName || typeof siteName !== "string") {
      return new Response(JSON.stringify({ error: "siteName is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Role: You are a Cultural Heritage Data Engine for an Indian Tourism App.

Task: Generate a 5-node "Heritage Chain" for a given heritage site showing its evolution from origin to modern legacy.

Constraints:
- Exactly 5 nodes
- Titles: 1–3 words, max 18 characters
- Descriptions: exactly ONE concise sentence

Structure:
1. Origin/Foundation (geography/material)
2. Development (architecture/craftsmanship)
3. Peak/Zenith (historical/artistic importance)
4. Cultural Connection (religion/trade/philosophy)
5. Modern Legacy (current relevance/conservation)

Return ONLY valid JSON with this exact structure:
{"heritage_site":"site name","chain":[{"id":1,"title":"...","description":"..."},{"id":2,"title":"...","description":"..."},{"id":3,"title":"...","description":"..."},{"id":4,"title":"...","description":"..."},{"id":5,"title":"...","description":"..."}]}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Generate a Heritage Chain for: ${siteName}`,
            },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "heritage_chain",
                description:
                  "Return a 5-node heritage evolution chain for the given site.",
                parameters: {
                  type: "object",
                  properties: {
                    heritage_site: { type: "string" },
                    chain: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "number" },
                          title: { type: "string" },
                          description: { type: "string" },
                        },
                        required: ["id", "title", "description"],
                        additionalProperties: false,
                      },
                      minItems: 5,
                      maxItems: 5,
                    },
                  },
                  required: ["heritage_site", "chain"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: {
            type: "function",
            function: { name: "heritage_chain" },
          },
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add funds." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error("No tool call in AI response");
    }

    const chainData = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(chainData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("heritage-chain error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
