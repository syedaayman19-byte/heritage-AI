import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getExperienceData, type ExperienceCategory, type ExperienceCard } from "@/data/experienceData";
import { HeritageImage } from "@/components/HeritageImage";

function CategoryTab({ cat, active, onClick }: { cat: ExperienceCategory; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body whitespace-nowrap transition-all duration-300 ${
        active
          ? "bg-primary text-primary-foreground shadow-md"
          : "bg-card/70 text-muted-foreground hover:bg-secondary border border-border/30"
      }`}
    >
      <span className="text-base">{cat.icon}</span>
      {cat.label}
    </button>
  );
}

function ExperienceCardItem({ card, index }: { card: ExperienceCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      className="flex-shrink-0 w-64 group"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1">
        <HeritageImage name={card.searchTerm} className="h-36 w-full" overlay={false} />
        <div className="p-4">
          <h4 className="font-display font-semibold text-foreground text-sm mb-1">{card.title}</h4>
          <p className="text-xs text-muted-foreground font-body leading-relaxed">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection({ siteId }: { siteId: string }) {
  const categories = getExperienceData(siteId);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = categories[activeIdx];

  return (
    <section className="space-y-6" aria-labelledby="experience-heading">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">✨</span>
        <h2 id="experience-heading" className="text-2xl font-display font-bold text-foreground">
          Experience Around This Heritage
        </h2>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin" role="tablist">
        {categories.map((cat, i) => (
          <CategoryTab key={cat.label} cat={cat} active={i === activeIdx} onClick={() => setActiveIdx(i)} />
        ))}
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.label}
          className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin"
          role="tabpanel"
          aria-label={activeCategory.label}
        >
          {activeCategory.items.map((card, i) => (
            <ExperienceCardItem key={card.title} card={card} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
