import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import { getItemsByState } from "@/data/heritage";
import { HeritageCard } from "@/components/HeritageCard";

const StatePage = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "");
  const items = getItemsByState(decodedName);

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-20">
        <div className="heritage-container">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-heritage-gold" />
              <p className="text-heritage-gold/80 font-body text-sm tracking-[0.2em] uppercase">State Heritage</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">{decodedName}</h1>
            <p className="text-primary-foreground/60 font-body text-lg mt-3">{items.length} heritage items to explore</p>
          </motion.div>
        </div>
      </div>

      <div className="heritage-container py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <HeritageCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body text-lg">Heritage data for {decodedName} is being curated.</p>
            <Link to="/" className="text-primary font-body hover:underline mt-4 inline-block">Explore other states</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatePage;
