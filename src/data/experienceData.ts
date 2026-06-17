export interface ExperienceCard {
  title: string;
  description: string;
  searchTerm: string;
}

export interface ExperienceCategory {
  icon: string;
  label: string;
  items: ExperienceCard[];
}

export interface PlanVisitData {
  bestTime: string;
  foodToTry: string[];
  whatToBuy: string[];
}

// Map heritage site IDs to experience data
const experienceMap: Record<string, ExperienceCategory[]> = {
  default: [
    {
      icon: "🍛",
      label: "Famous Food",
      items: [
        { title: "Street Chaat", description: "Tangy, spicy street-side snacks bursting with flavor", searchTerm: "indian chaat street food" },
        { title: "Local Thali", description: "A complete meal showcasing regional specialties", searchTerm: "indian thali meal" },
        { title: "Lassi", description: "Cool, creamy yogurt drink in traditional clay cups", searchTerm: "indian lassi drink" },
      ],
    },
    {
      icon: "🛍️",
      label: "Local Shopping",
      items: [
        { title: "Handicraft Market", description: "Authentic handmade souvenirs from local artisans", searchTerm: "indian handicraft market" },
        { title: "Textile Bazaar", description: "Vibrant fabrics and traditional weaves", searchTerm: "indian textile bazaar" },
        { title: "Spice Market", description: "Aromatic spices packed fresh for travelers", searchTerm: "indian spice market" },
      ],
    },
    {
      icon: "🎨",
      label: "Handicrafts",
      items: [
        { title: "Pottery", description: "Hand-thrown terracotta pieces in traditional designs", searchTerm: "indian pottery craft" },
        { title: "Wood Carving", description: "Intricate carvings depicting local mythology", searchTerm: "indian wood carving" },
        { title: "Metal Work", description: "Brass and copper artistry passed through generations", searchTerm: "indian metal craft" },
      ],
    },
    {
      icon: "🎉",
      label: "Festivals",
      items: [
        { title: "Cultural Festival", description: "Annual celebration of local art and music", searchTerm: "indian cultural festival" },
        { title: "Temple Festival", description: "Grand processions with traditional performances", searchTerm: "indian temple festival" },
        { title: "Harvest Festival", description: "Community celebrations marking the harvest season", searchTerm: "indian harvest festival" },
      ],
    },
    {
      icon: "📍",
      label: "Nearby Attractions",
      items: [
        { title: "Heritage Walk", description: "Guided tour through historic lanes and landmarks", searchTerm: "india heritage walk tour" },
        { title: "Local Museum", description: "Curated exhibits on regional history and culture", searchTerm: "indian museum heritage" },
        { title: "Nature Trail", description: "Scenic paths through lush landscapes nearby", searchTerm: "india nature trail" },
      ],
    },
  ],
};

const planVisitMap: Record<string, PlanVisitData> = {
  "taj-mahal": { bestTime: "October – March (cool weather, clear skies)", foodToTry: ["Petha", "Mughlai Biryani", "Bedai & Jalebi"], whatToBuy: ["Marble inlay souvenirs", "Leather goods", "Zardozi embroidery"] },
  "hampi": { bestTime: "November – February (pleasant, dry)", foodToTry: ["Obbattu", "Jolada Rotti", "Mango Rice"], whatToBuy: ["Stone carvings", "Lambani jewelry", "Banana fiber crafts"] },
  "red-fort": { bestTime: "October – March", foodToTry: ["Parathewali Gali Parathas", "Jalebi", "Butter Chicken"], whatToBuy: ["Miniature paintings", "Meenakari jewelry", "Spices from Khari Baoli"] },
  default: { bestTime: "October – March (winter season)", foodToTry: ["Local Thali", "Street Snacks", "Regional Sweets"], whatToBuy: ["Local handicrafts", "Textiles", "Spices"] },
};

export function getExperienceData(siteId: string): ExperienceCategory[] {
  return experienceMap[siteId] || experienceMap.default;
}

export function getPlanVisitData(siteId: string): PlanVisitData {
  return planVisitMap[siteId] || planVisitMap.default;
}
