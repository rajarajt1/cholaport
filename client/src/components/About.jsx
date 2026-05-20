const About = () => {
  const services = [
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      ),
      title: 'Business Websites',
      desc: 'Fast, responsive, SEO-ready websites for startups, brands, and local businesses.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Full-Stack Web Apps',
      desc: 'End-to-end MERN applications — authentication, REST APIs, databases.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Portals & Dashboards',
      desc: 'Admin panels, CRM tools, and dashboards built for real workflows.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'API & Integrations',
      desc: 'REST APIs, third-party integrations, and backend automation.',
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: Bio card */}
          <div className="card p-8">
            <div className="section-label">
              <span className="w-8 h-px bg-primary inline-block" />
              About Me
            </div>
            <h2 className="section-heading mb-6">MERN Stack Developer</h2>

            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-extrabold text-base">RRC</span>
              </div>
              <div>
                <h3 className="font-bold text-navy dark:text-white">RajaRajaChozhan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">MERN Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A results-driven full-stack developer who transforms ideas into polished, production-ready web applications. With 1 year of industry experience, I specialize in building clean, scalable MERN stack solutions — from sleek frontends to robust backends.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '4+', label: 'Projects Built' },
                { value: '100%', label: 'Commitment' },
                { value: 'Open', label: 'To Opportunities' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3 border border-gray-100 dark:border-dark-border">
                  <div className="text-xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full justify-center"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right: Services */}
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
              What I Build for You
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div key={i} className="card p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3">
                    {s.icon}
                  </div>
                  <h4 className="font-bold text-navy dark:text-white mb-1 text-sm">{s.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

