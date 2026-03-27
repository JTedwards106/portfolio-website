import ProjectCard from './ProjectCard'

export default function FeaturedProjectsSection() {
  const projects = [
    {
      title: 'Intelligent Scholarship Hub',
      tags: ['React', 'Firebase', 'OpenAI'],
      imageAlt: 'Digital platform UI showing scholarship search results and filters',
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD84TCXpwIbME-t9Z50LoDerzEl7RFMxJ8CUXLytszrNk8_z9fzcqy6M85chPXVb1WCLFlTE4XNsadVIIgvmSiupbyfbE4UXYus3pnrUrtYa39EtORDlHLOKrj20E-lkCZ40SApvs_Y29vXcovpvjxS5RIcQKd7_m_KZHSJ5fBP-262B44uE4Wbz67GRIK6ukqXCf-aT6FS30IPhr9g6lrg-EocJXN-g0wxQ4Bxes7Qky9ANEfgpRC2mMDovJJEzs3eY4PBhmINw1c',
      feature: 'AI Enabled',
      description:
        'An AI-driven platform that matches students with Caribbean scholarships based on automated profile scanning.',
    },
    {
      title: 'Smart Water Dashboard',
      tags: ['Java', 'Spring Boot', 'Chart.js'],
      imageAlt: 'Modern analytics dashboard showing water consumption metrics and graphs',
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-IZwJmF_C5HYXfEt_G8EUSP1-hiBq9gbJ4b4_m3wm-vOKL3Y7qzX6sTFgyqH3gvrQyIMtAz72AzIvwfGD5VOnc5vNmi3CYgNgGvmnVjNsg8EhzxUnBJEr3TtnE6WvtTzvrvQ1xgdEC44tqPCcUQkCbpYgexh3aig9ze3sZjOElY4H21OnQATrlK7YpKezel1V-cGchPERHRBaVkFkkOzoA3P0VVW8jN9NKLCujAFpTEKFhWfciISREoiVRK1WrGlASKMBKBVuB00',
      feature: 'AI Enabled',
      description:
        'Real-time monitoring system for utility tracking with predictive maintenance alerts.',
    },
    {
      title: 'Route Optimization Pro',
      tags: ['Google Maps API', 'Node.js', 'PostgreSQL'],
      imageAlt: 'Map UI with optimized vehicle paths and logistics markers',
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBDcLy7Xh5wwgBOMBARWMyqvHAmW8kdvETvh3fnrVe5gs8BIpGRgTvt0Rwdy-5B3wGpB6icYCM_HEaTZ6lsimDtEget4ySISZaWuy0QHrrXDeQnp_73ebB_o9zl7x-urUC-kBUOBMKbKPf9mV2KfiPS54P0R0GHIEHJlIjaBvSKI_XvLoOagRr7AO3hlqyVuRuDWvIhkVaeA2icmRaUtZBGtUObVAT1drYMvYcuI7_C__1hy5sZMKWPLj_NAEEWN6M7JJYfmWRXcvU',
      feature: 'AI Enabled',
      description:
        'Logistics solution for courier services using graph algorithms to reduce travel time by 25%.',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-8" id="portfolio">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-on-surface-variant mt-2">
            Selected projects demonstrating AI integration and real-time data handling.
          </p>
        </div>

        <button
          type="button"
          className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          onClick={() => window.open('https://github.com/', '_blank', 'noopener,noreferrer')}
        >
          View GitHub Repos <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
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
          />
        ))}
      </div>
    </section>
    
  )
}

