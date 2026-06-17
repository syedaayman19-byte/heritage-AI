import { Compass, UtensilsCrossed, ShoppingBag, CalendarDays } from "lucide-react";
import { getPlanVisitData } from "@/data/experienceData";
import { motion } from "framer-motion";

export function PlanMyVisit({ siteId }: { siteId: string }) {
  const plan = getPlanVisitData(siteId);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-2xl p-6"
      aria-labelledby="plan-visit-heading"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-xl bg-heritage-saffron/10">
          <Compass className="w-5 h-5 text-heritage-saffron" />
        </div>
        <h3 id="plan-visit-heading" className="text-lg font-display font-semibold text-foreground">
          Plan My Visit
        </h3>
      </div>

      <div className="grid gap-4">
        <div className="flex items-start gap-3">
          <CalendarDays className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-body font-medium text-foreground">Best Time to Visit</p>
            <p className="text-xs text-muted-foreground font-body">{plan.bestTime}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <UtensilsCrossed className="w-4 h-4 text-heritage-terracotta mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-body font-medium text-foreground">What to Try</p>
            <p className="text-xs text-muted-foreground font-body">{plan.foodToTry.join(" · ")}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShoppingBag className="w-4 h-4 text-heritage-gold mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-body font-medium text-foreground">What to Buy</p>
            <p className="text-xs text-muted-foreground font-body">{plan.whatToBuy.join(" · ")}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
