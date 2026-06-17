import { useState, useRef } from "react";
import { Volume2, VolumeX, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ListenToStory({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggle = () => {
    if (playing) {
      speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onend = () => setPlaying(false);
    utter.onerror = () => setPlaying(false);
    utterRef.current = utter;
    speechSynthesis.speak(utter);
    setPlaying(true);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      className="gap-2 rounded-full border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card"
    >
      {playing ? (
        <>
          <Pause className="w-4 h-4 text-heritage-saffron" />
          <span className="text-xs font-body">Pause</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-primary" />
          <span className="text-xs font-body">Listen to Story</span>
        </>
      )}
    </Button>
  );
}
