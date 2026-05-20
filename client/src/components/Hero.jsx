const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-white dark:bg-dark-bg flex items-center pt-16 relative">

      {/* Social Sidebar */}
      <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition" aria-label="GitHub">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="mailto:raja@email.com" className="text-gray-400 hover:text-primary transition" aria-label="Email">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <div className="w-px h-16 bg-gray-300 dark:bg-gray-700 mt-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full py-16">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">

          {/* Left: Text */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-700 dark:text-green-400 text-xs font-semibold">Available for Opportunities</span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-lg mb-1">Hi, I'm</p>
            <h1 className="text-6xl sm:text-7xl font-extrabold leading-none tracking-tight mb-6">
              <span className="text-navy dark:text-white block">RajaRaja</span>
              <span className="text-primary block">Chozhan</span>
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy dark:text-white">MERN Stack Developer</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">React · Node.js · MongoDB · Express</p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-lg mb-8">
              I build fast, scalable full-stack web applications — clean code, modern UX, and robust backends delivered with precision.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                Hire Me
              </button>
              <button className="border border-gray-300 dark:border-dark-border text-gray-600 dark:text-gray-300 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition">
                View Resume
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { value: '1+', label: 'Years Exp.' },
                { value: '4+', label: 'Projects' },
                { value: '100%', label: 'Commitment' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code card */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              Hiring Open
            </div>
            <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Window bar */}
              <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-gray-400 text-xs font-mono">developer.js</span>
                <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs px-2 py-0.5 rounded">● live</span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div>
                  <span className="text-blue-400">const </span>
                  <span className="text-yellow-300">developer</span>
                  <span className="text-gray-300"> = {'{'}</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-[#9cdcfe]">name</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-[#ce9178]">"RajaRajaChozhan"</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">role</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-[#ce9178]">"MERN Stack Developer"</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">stack</span>
                    <span className="text-gray-300">: [</span>
                    <span className="text-[#ce9178]">"React"</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-[#ce9178]">"Node.js"</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#ce9178]">"MongoDB"</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-[#ce9178]">"Express"</span>
                    <span className="text-gray-300">],</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">experience</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-[#ce9178]">"1+ year"</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">available</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-blue-400">true</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">email</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-[#ce9178]">"raja@email.com"</span>
                  </div>
                </div>
                <div className="text-gray-300">{'}'}</div>
                <div className="text-[#6a9955] mt-2 text-xs">{'// Let\'s build something great together!'}</div>
                <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse mt-1" />
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 px-5 pb-5">
                {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'].map((t) => (
                  <span key={t} className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">
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

export default Hero;

