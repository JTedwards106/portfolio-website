import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    //Navbar
    <nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-[#0b1326]/80 backdrop-blur-xl">
      <div class="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div class="flex items-center gap-3">
          <span
            class="material-symbols-outlined text-[#b4c5ff]"
            data-icon="terminal"
          >
            terminal
          </span>
          <span class="text-xl font-bold tracking-tighter text-[#b4c5ff] font-['Space_Grotesk']">
            Justin Edwards
          </span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a
            class="text-[#b4c5ff] font-bold border-b-2 border-[#2563eb] transition-all duration-300"
            href="#home"
          >
            Home
          </a>
          <a
            class="text-slate-400 font-medium hover:text-[#b4c5ff] transition-all duration-300"
            href="#about"
          >
            About
          </a>
          <a
            class="text-slate-400 font-medium hover:text-[#b4c5ff] transition-all duration-300"
            href="#services"
          >
            What I Do
          </a>
          <a
            class="text-slate-400 font-medium hover:text-[#b4c5ff] transition-all duration-300"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            class="text-slate-400 font-medium hover:text-[#b4c5ff] transition-all duration-300"
            href="#contact"
          >
            Contact
          </a>
          <button class="p-2 hover:bg-white/10 rounded-full transition-all active:scale-95 prototype-link-hover">
            <span
              class="material-symbols-outlined text-[#b4c5ff]"
              data-icon="light_mode"
            >
              light_mode
            </span>
          </button>
        </div>

        <button class="md:hidden p-2 text-[#b4c5ff]">
          <span class="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
