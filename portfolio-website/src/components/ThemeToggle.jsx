import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      class={`p-2 rounded-lg transition-all duration-300 hover:bg-surface-container active:scale-95 ${className}`}
    >
      <span
        class="material-symbols-outlined text-on-surface-variant"
        data-icon={isDark ? "light_mode" : "dark_mode"}
      >
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
