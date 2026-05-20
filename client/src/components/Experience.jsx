const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-label">
          <span className="w-8 h-px bg-primary inline-block" />
          Career
        </div>
        <h2 className="section-heading mb-12">Work Experience</h2>

        <div className="max-w-3xl">
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-dark-bg" />

            <div className="card p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white">MERN Stack Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">Full-Stack Development · Industry Experience</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  1 Year
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                1 year of hands-on industry experience building full-stack web applications. Worked on real-world projects spanning e-commerce, AI integrations, CRM systems, and IoT automation — delivering production-ready solutions using the MERN stack.
              </p>

              <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-300 mb-5">
                {[
                  'Built and deployed full-stack MERN applications from scratch to production',
                  'Implemented secure REST APIs, JWT authentication, and MongoDB schemas',
                  'Integrated local AI models (Ollama) and built an IoT-based AI home system',
                  'Developed responsive React frontends with Tailwind CSS and clean UX',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-primary mt-0.5 text-base leading-tight">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'REST APIs', 'JWT'].map((t, i) => (
                  <span
                    key={i}
                    className="border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

