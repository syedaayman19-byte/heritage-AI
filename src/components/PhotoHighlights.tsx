import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";
import { HeritageImage } from "@/components/HeritageImage";

export function PhotoHighlights({ name }: { name: string }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  // Generate search variants for gallery
  const variants = [
    name,
    `${name} architecture`,
    `${name} detail`,
    `${name} aerial view`,
  ];

  return (
    <section className="space-y-3" aria-label="Photo highlights">
      <div className="flex items-center gap-2.5">
        <Camera className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-display font-semibold text-foreground">Photo Highlights</h3>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
        {variants.map((v, i) => (
          <button
            key={i}
            onClick={() => setExpanded(i)}
            className="flex-shrink-0 rounded-xl overflow-hidden border border-border/30 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={`View photo ${i + 1}`}
          >
            <HeritageImage name={v} className="w-20 h-20" overlay={false} />
          </button>
        ))}
      </div>

      {/* Expanded view */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setExpanded(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(null)}
                className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-card border border-border shadow-lg"
                aria-label="Close photo"
              >
                <X className="w-4 h-4" />
              </button>
              <HeritageImage name={variants[expanded]} className="w-full h-[60vh] rounded-2xl" overlay={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
