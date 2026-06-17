import { useState, useEffect } from "react";
import { fetchWikimediaImage, getSearchTerm } from "@/services/imageService";

export function useHeritageImage(name: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    
    fetchWikimediaImage(getSearchTerm(name)).then(url => {
      if (!cancelled) {
        setImageUrl(url);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [name]);

  return { imageUrl, loading };
}
