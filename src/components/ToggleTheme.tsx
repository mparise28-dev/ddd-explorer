import { useTheme } from "../hooks/useTheme";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={
        theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
      }
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
