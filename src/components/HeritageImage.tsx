import { useHeritageImage } from "@/hooks/useHeritageImage";
import { motion } from "framer-motion";

interface HeritageImageProps {
  name: string;
  className?: string;
  overlay?: boolean;
}

export function HeritageImage({ name, className = "", overlay = true }: HeritageImageProps) {
  const { imageUrl, loading } = useHeritageImage(name);

  if (loading) {
    return (
      <div className={`bg-muted animate-shimmer bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%] ${className}`} />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageUrl ? (
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-heritage-gold/20 to-heritage-terracotta/20 flex items-center justify-center">
          <span className="font-display text-lg text-foreground/40">{name}</span>
        </div>
      )}
      {overlay && <div className="absolute inset-0 gradient-card-overlay" />}
    </div>
  );
}
