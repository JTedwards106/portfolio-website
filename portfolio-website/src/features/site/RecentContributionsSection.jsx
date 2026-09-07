export default function RecentContributionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Recent Contributions</h2>
        <p className="text-on-surface-variant mt-2">
          Open-source repos and side projects from recent work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-6 p-6 bg-surface-container-high rounded-2xl border border-outline-variant/30 hover:border-primary/40 transition-all">
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center">
            <i className="fa-solid fa-folder text-primary text-xl" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-on-surface">api-aggregator</h4>
            <p className="text-xs text-on-surface-variant">
              A middleware for normalizing diverse fintech APIs into a unified JSON format.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[10px] px-2 py-0.5 border border-outline-variant/30 rounded font-bold uppercase">
              JavaScript
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 p-6 bg-surface-container-high rounded-2xl border border-outline-variant/30 hover:border-tertiary/40 transition-all">
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center">
            <i className="fa-solid fa-robot text-tertiary text-xl" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-on-surface">ai-filter-bot</h4>
            <p className="text-xs text-on-surface-variant">
              Discord bot using NLP to moderate community chats and categorize support tickets.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[10px] px-2 py-0.5 border border-outline-variant/30 rounded font-bold uppercase">
              Python
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

