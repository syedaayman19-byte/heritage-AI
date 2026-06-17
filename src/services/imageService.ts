const imageCache = new Map<string, string>();

export async function fetchWikimediaImage(searchTerm: string): Promise<string | null> {
  if (imageCache.has(searchTerm)) return imageCache.get(searchTerm)!;
  
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchTerm)}&gsrlimit=1&prop=pageimages&piprop=original&format=json&origin=*`;
    const res = await fetch(url);
    if (!res.ok) return null;
    
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;
    
    const firstPage = Object.values(pages)[0] as any;
    const imageUrl = firstPage?.original?.source;
    
    if (imageUrl) {
      imageCache.set(searchTerm, imageUrl);
      return imageUrl;
    }
    return null;
  } catch {
    return null;
  }
}

export function getSearchTerm(name: string): string {
  const overrides: Record<string, string> = {
    "Taj Mahal": "Taj Mahal Agra",
    "Hampi Ruins": "Hampi Vijayanagara",
    "Red Fort": "Red Fort Delhi",
    "Konark Sun Temple": "Konark Sun Temple",
    "Meenakshi Temple": "Meenakshi Amman Temple",
    "Ajanta Caves": "Ajanta Caves",
    "Ellora Caves": "Ellora Caves",
    "Gateway of India": "Gateway of India Mumbai",
    "Bharatanatyam": "Bharatanatyam dance",
    "Kathak": "Kathak dance India",
    "Kathakali": "Kathakali dance Kerala",
    "Banarasi Silk": "Banarasi saree",
    "Kanjeevaram Silk": "Kanchipuram saree",
    "Blue Pottery": "Jaipur blue pottery",
    "Madhubani Painting": "Madhubani painting Bihar",
    "Warli Art": "Warli painting",
    "Tanjore Painting": "Tanjore painting gold",
    "Phulkari": "Phulkari embroidery Punjab",
  };
  return overrides[name] || name;
}
