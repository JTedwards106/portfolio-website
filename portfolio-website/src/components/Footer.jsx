export default function Footer() {
  return (
    <footer class="bg-surface border-t border-outline-variant/40">
      <div class="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto font-body text-sm tracking-wide uppercase">
        <div class="text-on-surface font-bold mb-8 md:mb-0">Justin Edwards</div>
        <div class="flex gap-8 mb-8 md:mb-0">
          <a
            class="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Github
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            LinkedIn
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Twitter
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Resume
          </a>
        </div>
        <div class="text-on-surface-variant text-xs normal-case">
          © 2024 Justin Edwards. Built with Precision Editorial.
        </div>
      </div>
    </footer>
  );
}
