import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HeritageImage } from "./HeritageImage";
import type { Category } from "@/data/heritage";

interface CategoryCardProps {
  name: Category;
  subtitle: string;
  searchTerm: string;
  index: number;
}

export function CategoryCard({ name, subtitle, searchTerm, index }: CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => navigate(`/category/${encodeURIComponent(name)}`)}
      className="group relative overflow-hidden rounded-3xl w-full text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={`Explore ${name} — ${subtitle}`}
    >
      {/* Image stays fully visible */}
      <HeritageImage name={searchTerm} className="h-56 md:h-64 w-full" overlay={false} />

      {/* Separate frosted text panel below the image */}
      <div className="p-5 bg-card/90 backdrop-blur-sm border-t border-border/30">
        <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm font-body">{subtitle}</p>
      </div>
    </motion.button>
  );
}
