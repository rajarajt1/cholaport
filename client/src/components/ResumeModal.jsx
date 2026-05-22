import { useEffect, useState } from 'react';

const ROLES = [
  'React Specialist',
  'MERN Stack Developer',
  'Web Developer',
  'MERN Stack Engineer',
];

const SKILLS = {
  Frontend: 'React.js, Vite, JavaScript (ES6+), Tailwind CSS, HTML5 / CSS3',
  Backend: 'Node.js, Express.js',
  Database: 'MongoDB, Mongoose',
  'APIs & Real-Time': 'RESTful APIs, Axios, Socket.IO, Nodemailer',
  'Security & Tools': 'JWT Authentication, Rate Limiting, Git, GitHub, Postman',
  'OS & Platforms': 'Linux (Ubuntu), Windows',
  Other: 'MVC Architecture, Responsive Design, CRUD Workflows',
  'Soft Skills': 'Problem Solving · Communication · Teamwork · Project Management',
};

const EXPERIENCE = [
  {
    role: 'Analyst – Technology Services – MERN Stack Developer (ERP Systems)',
    company: 'SRM College',
    duration: '2024 – 2026',
    bullets: [
      'Developed full-stack MERN applications and ERP modules for academic and administrative users.',
      'Built role-based dashboards with secure authentication, integrating frontend components with backend APIs for real-time data handling.',
      'Implemented CRUD workflows, optimised database performance, and maintained clean, scalable code.',
      'Collaborated with cross-functional teams to deliver technical solutions and improve application efficiency.',
      'Analysed data to support business decisions and enhance user experience.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE)',
    institution: 'SRM Institute of Science and Technology',
    year: 'Graduated 2025',
  },
];

const PROJECTS = [
  {
    name: 'eKart',
    tech: 'React, Vite, Node.js, MongoDB, Express, Tailwind CSS',
    desc: 'Full-featured e-commerce platform with product listings, cart management, user authentication, and order processing.',
  },
  {
    name: 'AI Chatbot App',
    tech: 'React, Node.js, Ollama, Express, Tailwind CSS',
    desc: 'Multi-model AI chatbot powered by Ollama supporting LLaMA, Mistral and more for intelligent, private conversations.',
  },
  {
    name: 'CRM Dashboard',
    tech: 'React, Node.js, MongoDB, Express, Tailwind CSS',
    desc: 'Personal life-management dashboard combining CRM features, task tracking, notes, and productivity tools.',
  },
  {
    name: 'Saturn — AI IoT System',
    tech: 'React, Node.js, AI Models, IoT, Express',
    desc: 'Advanced JARVIS-like AI system integrating free AI models with IoT capabilities for smart-home automation and voice interactions.',
  },
];

const SectionHeading = ({ title }) => (
  <div className="flex items-center gap-3 mb-4">
    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">
      {title}
    </h2>
    <hr className="flex-1 border-gray-300 dark:border-dark-border" />
  </div>
);

const ResumeModal = ({ isOpen, onClose }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close resume"
      />

      {/* Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-2xl flex flex-col">

        {/* Sticky toolbar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-white/95 dark:bg-dark-card/95 backdrop-blur border-b border-gray-200 dark:border-dark-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Rajarajachozhan — Resume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-dark-border text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-bg transition"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Resume content */}
        <div id="resume-printable" className="px-8 py-8 sm:px-12 sm:py-10">

          {/* Centered header */}
          <header className="text-center pb-7 border-b border-gray-200 dark:border-dark-border mb-7">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-navy dark:text-white">
              Rajarajachozhan
            </h1>
            <p className="text-base font-medium text-gray-600 dark:text-gray-300 mt-2">
              {ROLES[roleIndex]}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Chennai, India
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                8610122050
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <a
                href="mailto:rajarajasozhan13@gmail.com"
                className="flex items-center gap-1 hover:text-primary transition"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rajarajasozhan13@gmail.com
              </a>
            </div>
          </header>

          <div className="space-y-7">

            {/* About Me */}
            <section>
              <SectionHeading title="About Me" />
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                I build web products clients love — fast, scalable MERN stack applications delivered on time, every time. Passionate about clean architecture, real-time systems, and crafting seamless user experiences from frontend to backend.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <SectionHeading title="Work Experience" />
              {EXPERIENCE.map((exp) => (
                <div key={exp.role}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <p className="font-bold text-navy dark:text-white">{exp.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center text-xs font-semibold text-primary border border-primary/50 px-3 py-0.5 rounded-full whitespace-nowrap self-start mt-0.5">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-primary mt-0.5 shrink-0">●</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Technical Skills — two-column grid */}
            <section>
              <SectionHeading title="Technical Skills" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm">
                {Object.entries(SKILLS).map(([category, items]) => (
                  <p key={category}>
                    <span className="font-semibold text-navy dark:text-white">{category}: </span>
                    <span className="text-gray-600 dark:text-gray-300">{items}</span>
                  </p>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionHeading title="Projects" />
              <div className="space-y-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.name}>
                    <p className="text-sm">
                      <span className="font-bold text-navy dark:text-white">{proj.name}</span>
                      <span className="text-gray-400 dark:text-gray-500 mx-1.5">–</span>
                      <span className="italic text-gray-500 dark:text-gray-400">{proj.tech}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeading title="Education" />
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5"
                >
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.degree}</p>
                    <p className="font-bold text-navy dark:text-white mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">{edu.year}</span>
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
