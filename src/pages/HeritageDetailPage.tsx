import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, BookOpen, Star, Lightbulb } from "lucide-react";
import { getItemById, getRecommendations } from "@/data/heritage";
import { HeritageImage } from "@/components/HeritageImage";
import { HeritageCard } from "@/components/HeritageCard";
import { HeritageChain } from "@/components/HeritageChain";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ListenToStory } from "@/components/ListenToStory";
import { ViewOnMap } from "@/components/ViewOnMap";
import { PhotoHighlights } from "@/components/PhotoHighlights";
import { PlanMyVisit } from "@/components/PlanMyVisit";
import { DidYouKnow } from "@/components/DidYouKnow";
import { useEffect, useRef } from "react";

const sections = [
  { key: "history", icon: BookOpen, title: "Heritage Story" },
  { key: "speciality", icon: Star, title: "What Makes It Special" },
] as const;

const HeritageDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = getItemById(id || "");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (panelRef.current) panelRef.current.focus();
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display text-foreground mb-4">Item not found</h2>
          <Link to="/" className="text-primary font-body hover:underline">Return home</Link>
        </div>
      </div>
    );
  }

  const recommendations = getRecommendations(item);
  const storyText = `${item.history} ${item.significance}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-30">
        <button
          onClick={() => navigate(-1)}
          className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body text-foreground hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* ═══ TOP SECTION: Image left, Content right ═══ */}
      <div className="lg:flex lg:min-h-screen">
        {/* Image Panel */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen relative">
          <HeritageImage name={item.name} className="w-full h-[45vh] lg:h-full" overlay={false} />
          <div className="absolute bottom-4 left-4 z-10">
            <span className="bg-card/80 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-body border border-border/30 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-heritage-gold" />
              {item.origin}
            </span>
          </div>
        </div>

        {/* Content Panel */}
        <div
          ref={panelRef}
          tabIndex={-1}
          role="region"
          aria-label={`Details about ${item.name}`}
          className="lg:w-1/2 lg:overflow-y-auto lg:max-h-screen outline-none"
        >
          <div className="p-6 md:p-10 lg:p-12 space-y-6">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full text-xs font-body mb-3">
                {item.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-3">
                {item.name}
              </h1>
              <p className="text-base text-muted-foreground font-body leading-relaxed italic border-l-2 border-heritage-gold/40 pl-4 mb-4">
                "{item.description}"
              </p>
              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                <ListenToStory text={storyText} />
              </div>
            </motion.div>

            {/* Photo Highlights */}
            <PhotoHighlights name={item.name} />

            {/* Content Sections (Story + Special) */}
            {sections.map((section, i) => (
              <motion.section
                key={section.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="glass-card rounded-2xl p-6"
                aria-labelledby={`section-${section.key}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 id={`section-${section.key}`} className="text-xl font-display font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <p className="text-foreground/70 font-body leading-relaxed text-[0.95rem]">
                  {item[section.key]}
                </p>
              </motion.section>
            ))}

            {/* Did You Know - auto rotating */}
            <DidYouKnow facts={item.facts} />

            {/* Sidebar extras: Map + Plan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ViewOnMap name={item.name} />
              <PlanMyVisit siteId={item.id} />
            </div>

            {/* Interesting Facts full list */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
              aria-labelledby="section-facts"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-heritage-saffron/10">
                  <Lightbulb className="w-5 h-5 text-heritage-saffron" />
                </div>
                <h2 id="section-facts" className="text-xl font-display font-semibold text-foreground">
                  Interesting Facts
                </h2>
              </div>
              <ul className="space-y-3" role="list">
                {item.facts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-heritage-gold shrink-0" aria-hidden="true" />
                    <span className="text-foreground/70 font-body leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </div>

      {/* ═══ FULL-WIDTH SECTIONS BELOW ═══ */}
      <div className="bg-background border-t border-border">
        <div className="heritage-container py-12 space-y-16">
          {/* Heritage Chain — full width horizontal timeline */}
          <HeritageChain siteName={item.name} />

          {/* Experience Around This Heritage */}
          <ExperienceSection siteId={item.id} />
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="bg-secondary/30 border-t border-border">
          <div className="heritage-container py-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendations.map((rec, i) => (
                <HeritageCard key={rec.id} item={rec} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeritageDetailPage;
