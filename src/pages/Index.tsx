import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { StatesSidebar } from "@/components/StatesSidebar";
import { HeritageCard } from "@/components/HeritageCard";
import { categories, getItemsByCategory } from "@/data/heritage";

const Index = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Categories */}
      <section className="heritage-section gradient-heritage">
        <div className="heritage-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-heritage-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Explore by</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Categories</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.name} {...cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* States + Featured Items */}
      <section className="heritage-section">
        <div className="heritage-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-heritage-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Journey through</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">States of India</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <StatesSidebar selectedState={selectedState} onSelectState={setSelectedState} />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {getItemsByCategory("Architecture").slice(0, 6).map((item, i) => (
                  <HeritageCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="heritage-container text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">Heritage AI</h3>
          <p className="text-muted-foreground text-sm font-body">Preserving India's cultural legacy through technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
