import { MapPin } from "lucide-react";

const locationCoords: Record<string, string> = {
  "Taj Mahal": "27.1751,78.0421",
  "Hampi Ruins": "15.335,76.462",
  "Red Fort": "28.6562,77.2410",
  "Qutub Minar": "28.5245,77.1855",
  "Konark Sun Temple": "19.8876,86.0945",
  "Meenakshi Temple": "9.9195,78.1193",
  "Charminar": "17.3616,78.4747",
  "Ajanta Caves": "20.5519,75.7033",
  "Ellora Caves": "20.0269,75.1790",
  "Gateway of India": "18.9220,72.8347",
};

export function ViewOnMap({ name }: { name: string }) {
  const coords = locationCoords[name] || "20.5937,78.9629";
  const mapUrl = `https://maps.google.com/maps?q=${coords}&z=14&output=embed`;

  return (
    <section className="glass-card rounded-2xl overflow-hidden" aria-label="Location map">
      <div className="flex items-center gap-3 p-5 pb-0">
        <div className="p-2 rounded-xl bg-primary/10">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground">View on Map</h3>
      </div>
      <div className="p-5 pt-3">
        <iframe
          src={mapUrl}
          className="w-full h-48 rounded-xl border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing ${name}`}
        />
      </div>
    </section>
  );
}
