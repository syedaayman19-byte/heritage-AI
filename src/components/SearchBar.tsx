import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchItems, heritageItems } from "@/data/heritage";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = query.length > 1 ? searchItems(query).slice(0, 6) : [];
  const suggestions = query.length === 0 && focused
    ? heritageItems.slice(0, 5).map(i => i.name)
    : [];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`glass-card flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 ${focused ? "ring-2 ring-primary/40 shadow-xl" : ""}`}>
        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          placeholder="Search heritage, art, states..."
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-body"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {(results.length > 0 || suggestions.length > 0) && focused && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            {suggestions.length > 0 && (
              <div className="p-3">
                <p className="text-xs text-muted-foreground px-2 mb-2 font-body">Popular searches</p>
                {suggestions.map(s => (
                  <button key={s} onClick={() => { setQuery(s); }} className="block w-full text-left px-3 py-2 rounded-xl hover:bg-muted transition-colors text-sm font-body text-foreground">
                    {s}
                  </button>
                ))}
              </div>
            )}
            {results.length > 0 && (
              <div className="p-3">
                {results.map(item => (
                  <button
                    key={item.id}
                    onClick={() => { navigate(`/heritage/${item.id}`); setQuery(""); setFocused(false); }}
                    className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground font-body">{item.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{item.origin} · {item.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
