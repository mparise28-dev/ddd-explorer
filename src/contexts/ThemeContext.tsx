import { createContext, useState, useEffect, type ReactNode } from "react";

// Tipo do contexto
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Criar contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

// Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Carregar tema salvo ou preferência do sistema
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Aplicar tema no HTML
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
