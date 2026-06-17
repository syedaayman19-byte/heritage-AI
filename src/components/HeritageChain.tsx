import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeritageChain, type ChainNode } from "@/hooks/useHeritageChain";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, RefreshCw, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const nodeIcons = ["🏛️", "⚒️", "✨", "🔗", "🌍"];
const nodeLabels = ["Origin", "Development", "Zenith", "Connection", "Legacy"];

function ChainNodeCard({ node, index, total }: { node: ChainNode; index: number; total: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-start gap-0 flex-shrink-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 * index, duration: 0.45, ease: "easeOut" }}
        className="relative flex flex-col items-center w-44 md:w-48"
      >
        {/* Timeline dot & line */}
        <div className="flex items-center w-full mb-3">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-primary/20" />
          <button
            onClick={() => setExpanded(!expanded)}
            className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 border-2 border-primary/30 text-lg transition-all duration-300 hover:scale-110 hover:border-primary/60 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={`Step ${node.id}: ${node.title}`}
            aria-expanded={expanded}
          >
            {nodeIcons[index]}
          </button>
          <div className={`flex-1 h-0.5 ${index < total - 1 ? "bg-gradient-to-r from-primary/20 to-transparent" : "bg-transparent"}`} />
        </div>

        {/* Label */}
        <span className="text-[10px] text-muted-foreground font-body uppercase tracking-wider mb-1">
          {nodeLabels[index]}
        </span>

        {/* Card */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="glass-card rounded-2xl p-4 w-full text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer group"
        >
          <h4 className="font-display font-semibold text-foreground text-sm leading-snug mb-1 flex items-center justify-between">
            {node.title}
            <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </h4>

          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-xs text-muted-foreground font-body leading-relaxed overflow-hidden"
              >
                {node.description}
              </motion.p>
            )}
          </AnimatePresence>

          {!expanded && (
            <p className="text-[11px] text-muted-foreground/60 font-body">Click to expand</p>
          )}
        </button>
      </motion.div>
    </div>
  );
}

function ChainSkeleton() {
  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2 w-44">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-full h-24 rounded-2xl" />
        </div>
      ))}
    </div>
  );
}

export function HeritageChain({ siteName }: { siteName: string }) {
  const { data, loading, error, retry } = useHeritageChain(siteName);

  return (
    <section aria-labelledby="heritage-chain-heading" className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-heritage-saffron/10">
          <Sparkles className="w-5 h-5 text-heritage-saffron" />
        </div>
        <h2 id="heritage-chain-heading" className="text-2xl font-display font-bold text-foreground">
          Heritage Chain
        </h2>
        <span className="text-xs text-muted-foreground font-body bg-primary/10 px-2.5 py-0.5 rounded-full">
          AI-powered
        </span>
      </div>

      <p className="text-sm text-muted-foreground font-body max-w-2xl">
        Trace the evolution of this heritage — from its ancient origins to its modern-day legacy.
      </p>

      {loading && <ChainSkeleton />}

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card rounded-2xl p-6 flex items-center gap-4"
        >
          <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
          <p className="text-sm text-muted-foreground font-body flex-1">{error}</p>
          <Button variant="outline" size="sm" onClick={retry} className="shrink-0 gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </Button>
        </motion.div>
      )}

      {data && !loading && (
        <div
          className="flex items-start gap-0 overflow-x-auto pb-4 scrollbar-thin"
          role="list"
          aria-label="Heritage evolution timeline"
        >
          {data.chain.map((node, i) => (
            <div key={node.id} role="listitem">
              <ChainNodeCard node={node} index={i} total={data.chain.length} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
