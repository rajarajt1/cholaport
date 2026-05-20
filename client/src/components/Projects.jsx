import { useState } from 'react';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'eKart',
    description: 'A full-featured e-commerce platform with product listings, cart management, user authentication, and order processing built with the MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: '#',
    category: 'personal',
  },
  {
    id: 2,
    num: '02',
    title: 'AI Chatbot App',
    description: 'Multi-model AI chatbot powered by Ollama, supporting various local AI models (LLaMA, Mistral, etc.) for intelligent, private conversations.',
    tech: ['React', 'Node.js', 'Ollama', 'Express', 'Tailwind'],
    github: '#',
    category: 'personal',
  },
  {
    id: 3,
    num: '03',
    title: 'CRM Dashboard',
    description: 'A personal life management dashboard combining CRM features, task tracking, notes, and productivity tools — all in one clean interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: '#',
    category: 'personal',
  },
  {
    id: 4,
    num: '04',
    title: 'Saturn — AI IoT System',
    description: 'An advanced JARVIS-like AI system integrating free AI models with IoT capabilities for smart home automation and intelligent voice interactions.',
    tech: ['React', 'Node.js', 'AI Models', 'IoT', 'Express'],
    github: '#',
    category: 'personal',
  },
];

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const filters = [
    { label: 'All', value: 'all', count: projects.length },
    { label: 'Personal', value: 'personal', count: projects.filter((p) => p.category === 'personal').length },
  ];

  return (
    <section id="projects" className="bg-[#0d1117] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="section-label">
              <span className="w-8 h-px bg-primary inline-block" />
              Selected Works
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Projects &{' '}
              <span className="text-primary">Work</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-md text-sm">
              Full-stack web applications built with clean architecture and modern tech.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="text-right">
              <div className="text-2xl font-extrabold text-white">{projects.length}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === f.value
                  ? 'bg-primary text-white'
                  : 'border border-gray-700 text-gray-400 hover:border-primary hover:text-primary'
              }`}
            >
              {f.label} {f.count}
            </button>
          ))}
          <span className="ml-auto text-gray-500 text-sm">{filtered.length} of {projects.length} projects</span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-[#161b22] border border-[#21262d] rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-primary font-bold text-sm font-mono">{project.num}</span>
                </div>
                <span className="border border-gray-700 text-gray-400 text-xs px-2.5 py-1 rounded-full capitalize">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, j) => (
                  <span key={j} className="border border-gray-700 text-gray-400 text-xs px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-primary transition text-sm font-medium"
              >
                <GitHubIcon />
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-700 text-gray-400 hover:border-primary hover:text-primary transition px-6 py-3 rounded-lg text-sm font-medium"
          >
            <GitHubIcon />
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

