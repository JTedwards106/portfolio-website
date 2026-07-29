import profileImg from "../../assets/prof-portrait.png";
export default function AboutSection() {
  return (
    <section class="bg-surface-container-low py-24 px-6" id="about">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div class="relative group">
          <div class="aspect-square rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/20">
            <img
              alt="Justin Edwards Professional Portrait"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-alt="Professional headshot of a smiling young black man"
              src={profileImg}
            />
          </div>
        </div>
        <div>
          <span class="text-tertiary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            The Architect
          </span>
          <h2 class="text-4xl font-bold font-headline mb-8">
            Solving Real-World Problems Through Code
          </h2>
          <div class="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I'm Justin Edwards, a Full-Stack Software Developer specializing
              in React, Node.js, Java, and SQL.
            </p>
            <p>
              I enjoy creating responsive websites, web applications, and
              backend systems using modern technologies. I'm currently available
              for freelance work, internships, and junior software engineering
              roles.
            </p>
          </div>
          <div class="mt-12 flex gap-8 border-t border-outline-variant/20 pt-8">
            <div>
              <p class="font-headline font-bold text-xl">Jamaica</p>
              <p class="text-xs text-slate-500 uppercase tracking-widest">
                Location
              </p>
            </div>
            <div>
              <p class="font-headline font-bold text-xl">UTech</p>
              <p class="text-xs text-slate-500 uppercase tracking-widest">
                Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
