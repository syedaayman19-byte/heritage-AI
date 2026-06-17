import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HeritageImage } from "./HeritageImage";
import type { HeritageItem } from "@/data/heritage";
import { MapPin } from "lucide-react";

interface HeritageCardProps {
  item: HeritageItem;
  index: number;
}

export function HeritageCard({ item, index }: HeritageCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/heritage/${item.id}`)}
      className="group glass-card rounded-2xl overflow-hidden text-left w-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={`View details about ${item.name} from ${item.origin}`}
    >
      {/* Image — no overlay, stays crisp */}
      <HeritageImage name={item.name} className="h-48 w-full" overlay={false} />

      {/* Text panel — completely separate from image */}
      <div className="p-5 bg-card border-t border-border/30">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-3.5 h-3.5 text-heritage-gold" />
          <span className="text-xs text-muted-foreground font-body">{item.origin}</span>
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed">
          {item.significance}
        </p>
      </div>
    </motion.button>
  );
}
