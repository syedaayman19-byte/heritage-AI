import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";

export function DidYouKnow({ facts }: { facts: string[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (facts.length <= 1) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [facts.length]);

  return (
    <div className="glass-card rounded-2xl p-5 relative overflow-hidden" aria-live="polite">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="p-1.5 rounded-lg bg-heritage-gold/15">
          <Lightbulb className="w-4 h-4 text-heritage-gold" />
        </div>
        <span className="text-sm font-display font-semibold text-foreground">Did You Know?</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="text-sm text-muted-foreground font-body leading-relaxed"
        >
          {facts[idx]}
        </motion.p>
      </AnimatePresence>
      {/* Progress dots */}
      <div className="flex gap-1.5 mt-3">
        {facts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "bg-heritage-gold w-4" : "bg-border"
            }`}
            aria-label={`Fact ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
