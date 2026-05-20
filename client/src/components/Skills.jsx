const Skills = () => {
  const stacks = [
    {
      title: 'Frontend Stack',
      subtitle: 'UI / UX Implementation',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3'],
    },
    {
      title: 'Backend Stack',
      subtitle: 'Server & Database',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Nodemailer'],
    },
    {
      title: 'Tools & DevOps',
      subtitle: 'Workflow & Collaboration',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Git / GitHub', 'VS Code', 'Postman', 'Vercel', 'npm / yarn'],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-[#0a0f1a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-primary inline-block" />
            Tech Stack
            <span className="w-8 h-px bg-primary inline-block" />
          </div>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm">
            The tools and technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  {stack.icon}
                </div>
                <div>
                  <h3 className="font-bold text-navy dark:text-white text-sm">{stack.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stack.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 text-xs px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

