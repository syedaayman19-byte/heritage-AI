import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getItemsByCategory, type Category, categories } from "@/data/heritage";
import { HeritageCard } from "@/components/HeritageCard";

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "") as Category;
  const items = getItemsByCategory(decodedName);
  const category = categories.find(c => c.name === decodedName);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display text-foreground mb-4">Category not found</h2>
          <Link to="/" className="text-primary font-body hover:underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-20">
        <div className="heritage-container">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-heritage-gold/80 font-body text-sm tracking-[0.2em] uppercase mb-3">Category</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-3">{decodedName}</h1>
            <p className="text-primary-foreground/60 font-body text-lg">{category.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="heritage-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <HeritageCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
