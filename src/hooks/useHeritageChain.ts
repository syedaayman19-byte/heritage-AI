import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ChainNode {
  id: number;
  title: string;
  description: string;
}

export interface HeritageChainData {
  heritage_site: string;
  chain: ChainNode[];
}

const cache = new Map<string, HeritageChainData>();

export function useHeritageChain(siteName: string) {
  const [data, setData] = useState<HeritageChainData | null>(
    cache.get(siteName) ?? null
  );
  const [loading, setLoading] = useState(!cache.has(siteName));
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (cache.has(siteName)) {
      setData(cache.get(siteName)!);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    supabase.functions
      .invoke("heritage-chain", {
        body: { siteName },
      })
      .then(({ data: result, error: fnError }) => {
        if (controller.signal.aborted) return;
        if (fnError) {
          setError("Unable to generate heritage chain. Try again.");
          setLoading(false);
          return;
        }
        if (result?.chain) {
          cache.set(siteName, result);
          setData(result);
        } else {
          setError("Unable to generate heritage chain. Try again.");
        }
        setLoading(false);
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setError("Unable to generate heritage chain. Try again.");
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [siteName]);

  const retry = () => {
    cache.delete(siteName);
    setData(null);
    setLoading(true);
    setError(null);
    supabase.functions
      .invoke("heritage-chain", { body: { siteName } })
      .then(({ data: result, error: fnError }) => {
        if (fnError || !result?.chain) {
          setError("Unable to generate heritage chain. Try again.");
        } else {
          cache.set(siteName, result);
          setData(result);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to generate heritage chain. Try again.");
        setLoading(false);
      });
  };

  return { data, loading, error, retry };
}
