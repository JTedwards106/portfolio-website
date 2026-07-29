import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function FeaturedProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto px-8" id="portfolio">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-on-surface-variant mt-2">
            Selected projects demonstrating AI integration and real-time data
            handling.
          </p>
        </div>

        <button
          type="button"
          className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          onClick={() =>
            window.open("https://github.com/", "_blank", "noopener,noreferrer")
          }
        >
          View GitHub Repos{" "}
          <i
            className="fa-solid fa-arrow-up-right-from-square"
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            tags={p.tags}
            imageAlt={p.imageAlt}
            imageSrc={p.imageSrc}
            description={p.description}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}
