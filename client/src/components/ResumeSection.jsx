const buildBullets = (text) => {
  if (!text) {
    return [];
  }

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
};

const ResumeSection = ({ resumeData, onEdit }) => {
  if (!resumeData) {
    return null;
  }

  const skillList = resumeData.skills
    ? resumeData.skills
      .split(',')
      .map((skill) => skill.trim())
      .filter(Boolean)
    : [];

  const experienceLines = buildBullets(resumeData.experience);
  const educationLines = buildBullets(resumeData.education);
  const projectLines = buildBullets(resumeData.projects);

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-dark-bg/60 border-y border-gray-200 dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="section-label">Generated Resume</p>
            <h2 className="section-heading !text-3xl sm:!text-4xl">{resumeData.fullName || 'Your Name'}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{resumeData.headline || 'Your Professional Headline'}</p>
          </div>
          <button
            onClick={onEdit}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition"
          >
            Edit Resume
          </button>
        </div>

        <article className="card p-7 sm:p-10">
          <header className="pb-6 border-b border-gray-200 dark:border-dark-border">
            <h3 className="text-2xl font-extrabold text-navy dark:text-white">{resumeData.fullName || 'Your Name'}</h3>
            <p className="text-primary font-semibold mt-1">{resumeData.headline || 'Role Title'}</p>
            <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-600 dark:text-gray-300">
              {resumeData.email && <span>{resumeData.email}</span>}
              {resumeData.phone && <span>{resumeData.phone}</span>}
              {resumeData.location && <span>{resumeData.location}</span>}
            </div>
          </header>

          {resumeData.summary && (
            <section className="pt-6">
              <h4 className="text-base font-bold text-navy dark:text-white mb-2 uppercase tracking-wider">Professional Summary</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{resumeData.summary}</p>
            </section>
          )}

          {skillList.length > 0 && (
            <section className="pt-6">
              <h4 className="text-base font-bold text-navy dark:text-white mb-3 uppercase tracking-wider">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border px-3 py-1 rounded-full text-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {experienceLines.length > 0 && (
            <section className="pt-6">
              <h4 className="text-base font-bold text-navy dark:text-white mb-3 uppercase tracking-wider">Experience</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {experienceLines.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {educationLines.length > 0 && (
            <section className="pt-6">
              <h4 className="text-base font-bold text-navy dark:text-white mb-3 uppercase tracking-wider">Education</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {educationLines.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {projectLines.length > 0 && (
            <section className="pt-6">
              <h4 className="text-base font-bold text-navy dark:text-white mb-3 uppercase tracking-wider">Projects</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {projectLines.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>
    </section>
  );
};

export default ResumeSection;
