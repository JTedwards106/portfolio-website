import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm dark:shadow-none dark:border-outline-variant/10">
      <div class="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div class="flex items-center gap-3">
          <span
            class="material-symbols-outlined text-primary"
            data-icon="terminal"
          >
            terminal
          </span>
          <span class="text-xl font-bold tracking-tighter text-on-surface font-headline">
            Justin Edwards
          </span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a
            class="text-primary font-bold border-b-2 border-primary-container transition-all duration-300"
            href="#home"
          >
            Home
          </a>
          <a
            class="text-on-surface-variant font-medium hover:text-primary transition-all duration-300"
            href="#about"
          >
            About
          </a>
          <a
            class="text-on-surface-variant font-medium hover:text-primary transition-all duration-300"
            href="#services"
          >
            What I Do
          </a>
          <a
            class="text-on-surface-variant font-medium hover:text-primary transition-all duration-300"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            class="text-on-surface-variant font-medium hover:text-primary transition-all duration-300"
            href="#contact"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>

        <div class="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button type="button" class="p-2 text-primary" aria-label="Open menu">
            <span class="material-symbols-outlined" data-icon="menu">
              menu
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
