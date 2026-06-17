import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { indianStates, getItemsByState } from "@/data/heritage";
import { useNavigate } from "react-router-dom";

interface StatesSidebarProps {
  selectedState: string | null;
  onSelectState: (state: string | null) => void;
}

export function StatesSidebar({ selectedState, onSelectState }: StatesSidebarProps) {
  const navigate = useNavigate();

  return (
    <div className="glass-card rounded-2xl p-4 h-fit sticky top-24 max-h-[70vh] overflow-y-auto scrollbar-thin">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 px-2">Explore by State</h3>
      <div className="space-y-0.5">
        {indianStates.map(state => {
          const count = getItemsByState(state).length;
          const isActive = selectedState === state;
          return (
            <button
              key={state}
              onClick={() => {
                if (count > 0) {
                  onSelectState(isActive ? null : state);
                  navigate(isActive ? "/" : `/state/${encodeURIComponent(state)}`);
                }
              }}
              disabled={count === 0}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-body transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : count > 0
                  ? "text-foreground hover:bg-muted"
                  : "text-muted-foreground/50 cursor-not-allowed"
              }`}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                {state}
              </span>
              {count > 0 && (
                <span className="flex items-center gap-1">
                  <span className={`text-xs ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {count}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
