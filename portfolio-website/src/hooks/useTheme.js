import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  function toggleTheme() {
    const nextDark = !getIsDark();
    applyTheme(nextDark);
    setIsDark(nextDark);
  }

  return { isDark, toggleTheme };
}
