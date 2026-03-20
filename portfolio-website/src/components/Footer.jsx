export default function Footer() {
  return (
    <footer className="bg-slate-950 tonal-shift-bg-surface-dim border-t border-slate-800/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto font-['Inter'] text-sm tracking-wide uppercase">
        <div className="text-slate-50 font-bold mb-8 md:mb-0">Justin Edwards</div>
        <div className="flex gap-8 mb-8 md:mb-0">
          <a
            className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Github
          </a>
          <a
            className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Resume
          </a>
        </div>
        <div className="text-slate-500 text-xs normal-case opacity-80">
          © 2024 Justin Edwards. Built with Precision Editorial.
        </div>
      </div>
    </footer>
  )
}

