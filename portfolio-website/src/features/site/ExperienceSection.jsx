export default function ExperienceSection() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Experience &amp; Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20" />

          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <i
                className="fa-solid fa-graduation-cap text-primary text-2xl"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold tracking-tight">
                Academic Background
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-primary-container/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-container" />
              <span className="text-sm font-medium text-primary block mb-1">
                2020 — PRESENT
              </span>
              <h4 className="text-xl font-bold">BSc in Computing</h4>
              <p className="text-on-surface-variant">
                University of Technology, Jamaica
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs uppercase tracking-wider font-bold">
                  AI Focus
                </span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs uppercase tracking-wider font-bold">
                  Software Engineering
                </span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs uppercase tracking-wider font-bold">
                  Data Structures and Algorithms
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <i
                className="fa-solid fa-briefcase text-tertiary text-2xl"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold tracking-tight">
                Professional Experience
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-tertiary-container/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-tertiary-container" />
              <span className="text-sm font-medium text-tertiary block mb-1">
                VARIOUS
              </span>
              <h4 className="text-xl font-bold">Freelance Developer</h4>
              <p className="text-on-surface-variant">Independent</p>
              <p className="text-sm mt-3 text-on-surface-variant/80">
                Open to collaborating with local businesses to digitize
                operations and implement data-driven solutions.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-tertiary-container/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-outline-variant" />
              <span className="text-sm font-medium text-tertiary block mb-1">
                2024
              </span>
              <h4 className="text-xl font-bold">
                Volunteer IT Support & Data Entry Assistant
              </h4>
              <p className="text-on-surface-variant">
                Wakefield Primary School and Infants
              </p>
              <p className="text-sm mt-3 text-on-surface-variant/80">
                Provided data entry, basic system administration, and document
                management support to improve daily administrative operations
                and staff efficiency.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-tertiary-container/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-outline-variant" />
              <span className="text-sm font-medium text-tertiary block mb-1">
                2021 — 2024
              </span>
              <h4 className="text-xl font-bold">Bank Teller</h4>
              <p className="text-on-surface-variant">Western Union</p>
              <p className="text-sm mt-3 text-on-surface-variant/80">
                Developed high-level attention to detail and security protocols
                while managing financial transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        href="/resume.pdf"
        download="Resume_J_E_2026.pdf"
        className="flex justify-center"
      >
        <button className="mt-20 px-8 py-4 bg-primary text-on-primary font-bold rounded-lg flex items-center gap-3 hover:shadow-lg transition-all">
          <span className="material-symbols-outlined" data-icon="download">
            download
          </span>
          Download Resume
        </button>
      </div>
    </section>
  );
}
