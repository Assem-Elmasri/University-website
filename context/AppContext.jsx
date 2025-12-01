"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  // Read theme safely from localStorage only on client
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const saved = window.localStorage.getItem("theme");
    if (saved) return saved;

    window.localStorage.setItem("theme", "light");
    return "light";
  });

  // prevent hydration mismatch
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  // sync theme to localStorage (no setState here → clean)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (!hydrated) return null;

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);