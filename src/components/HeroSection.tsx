import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-heritage-gold/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-heritage-saffron/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-heritage-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-heritage-gold/5" />
      </div>

      <div className="relative z-10 heritage-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-heritage-gold/80 font-body text-sm tracking-[0.3em] uppercase mb-6">
            Explore • Experience • Preserve
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-primary-foreground">Discover India's</span>
            <br />
            <span className="text-gradient-gold">Living Heritage</span>
          </h1>
          <p className="text-primary-foreground/60 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Journey through centuries of art, architecture, music, and craftsmanship
            that define the soul of Indian civilization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SearchBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-primary-foreground/40 font-body text-sm"
        >
          <span>50+ Heritage Items</span>
          <span className="w-1 h-1 rounded-full bg-heritage-gold/40" />
          <span>30 States</span>
          <span className="w-1 h-1 rounded-full bg-heritage-gold/40" />
          <span>5 Categories</span>
        </motion.div>
      </div>
    </section>
  );
}
