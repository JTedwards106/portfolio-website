import { scrollToId } from "../../utils/scrollToId";

export default function HeroSection() {
  return (
    <section
      class="relative min-h-[707px] flex items-center px-6 max-w-7xl mx-auto mb-24"
      id="home"
    >
      <div class="z-10 w-full lg:w-2/3">
        <span class="inline-block px-3 py-1 bg-primary-container/20 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Available for Full-Time Employment
        </span>
        <h1 class="text-5xl md:text-7xl font-bold font-headline tracking-tighter mb-6 leading-[1.1]">
          <span class="text-primary">Full-Stack</span> Software Developer
        </h1>
        <p class="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
          Building intelligent systems and scalable web applications with a
          focus on AI &amp; API Integration.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary transition-all duration-300 scale-102 flex items-center gap-2"
            onClick={() => scrollToId("portfolio")}
          >
            View Portfolio
            <i className="fa-solid fa-arrow-right text-lg" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="border border-outline-variant/20 bg-surface-bright/5 hover:bg-surface-bright/10 text-on-surface px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            onClick={() => scrollToId("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
