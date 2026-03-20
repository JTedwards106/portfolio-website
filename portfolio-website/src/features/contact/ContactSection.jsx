import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function onSubmit(e) {
    e.preventDefault()
    // Placeholder UX; wire to a backend later.
    alert('Thanks for reaching out! (Demo form)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="max-w-7xl mx-auto px-8 pb-32" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* FAQ */}
        <div>
          <h2 className="text-4xl font-bold mb-12">Common Inquiries</h2>
          <div className="space-y-8">
            <div className="group">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                Are you available for internships?
                <i className="fa-solid fa-plus text-sm" aria-hidden="true" />
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Yes! As a final-year student, I am actively seeking full-time opportunities and internships
                starting Summer 2024.
              </p>
            </div>

            <div className="group">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                What is your primary tech stack?
                <i className="fa-solid fa-plus text-sm" aria-hidden="true" />
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                I am most proficient in Java, JavaScript (React/Node), and Python, though I am language-agnostic
                when solving architecture problems.
              </p>
            </div>

            <div className="group">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                Do you work on mobile applications?
                <i className="fa-solid fa-plus text-sm" aria-hidden="true" />
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                I specialize in progressive web apps and cross-platform solutions using React Native.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container rounded-3xl p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <h2 className="text-4xl font-bold mb-4 relative z-10">Let’s build something impactful</h2>
          <p className="text-on-surface-variant mb-12 relative z-10">
            Have a project in mind or just want to chat tech? Reach out below.
          </p>

          <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
            <div className="group">
              <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Name
              </label>
              <input
                className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors"
                placeholder="John Doe"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors"
                placeholder="john@example.com"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors resize-none"
                placeholder="Tell me about your project..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container font-bold py-5 rounded-xl hover:bg-primary transition-all duration-300 mt-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

