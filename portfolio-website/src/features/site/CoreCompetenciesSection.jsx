export default function CoreCompetenciesSection() {
  return (
    <section class="py-24 px-6 max-w-7xl mx-auto" id="services">
      <div class="mb-16">
        <h2 class="text-4xl font-bold font-headline mb-4">Core Competencies</h2>
        <div class="w-20 h-1 bg-primary"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div class="md:col-span-8 bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
          <span
            class="material-symbols-outlined text-primary text-4xl mb-6"
            data-icon="layers"
          >
            layers
          </span>
          <h3 class="text-2xl font-bold font-headline mb-4">
            Full-Stack Development
          </h3>
          <p class="text-on-surface-variant mb-6">
            Architecting robust frontends with React and scalable backends using
            Node.js and Flask. Expert in both relational SQL and NoSQL databases
            like MongoDB.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-surface-dim text-xs rounded-full border border-outline-variant/20">
              React
            </span>
            <span class="px-3 py-1 bg-surface-dim text-xs rounded-full border border-outline-variant/20">
              Node.js
            </span>
            <span class="px-3 py-1 bg-surface-dim text-xs rounded-full border border-outline-variant/20">
              Flask
            </span>
            <span class="px-3 py-1 bg-surface-dim text-xs rounded-full border border-outline-variant/20">
              MongoDB
            </span>
          </div>
        </div>

        <div class="md:col-span-4 bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-tertiary/30 transition-all group">
          <span
            class="material-symbols-outlined text-tertiary text-4xl mb-6"
            data-icon="psychology"
          >
            psychology
          </span>
          <h3 class="text-2xl font-bold font-headline mb-4">AI Solutions</h3>
          <p class="text-on-surface-variant">
            Integrating intelligent automation and predictive models into
            everyday software.
          </p>
        </div>

        <div class="md:col-span-4 bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
          <span
            class="material-symbols-outlined text-secondary text-4xl mb-6"
            data-icon="api"
          >
            api
          </span>
          <h3 class="text-2xl font-bold font-headline mb-4">API Mastery</h3>
          <p class="text-on-surface-variant">
            Seamlessly connecting third-party services via high-performance REST
            APIs.
          </p>
        </div>
        <div class="md:col-span-8 bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
          <span
            class="material-symbols-outlined text-primary text-4xl mb-6"
            data-icon="terminal"
          >
            terminal
          </span>
          <h3 class="text-2xl font-bold font-headline mb-4">Problem Solving</h3>
          <p class="text-on-surface-variant">
            Strong foundation in Data Structures and Algorithms, ensuring
            efficient and optimized code execution for complex logic
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
