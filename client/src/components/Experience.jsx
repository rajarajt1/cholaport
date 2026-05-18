import { useState, useEffect } from 'react';
import { getExperience } from '../services/api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await getExperience();
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="section-container bg-gray-50 dark:bg-dark-card">
        <h2 className="section-title">Experience</h2>
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-dark-card">
      <h2 className="section-title">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={exp._id} className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
              </div>
              <span className="text-gray-600 dark:text-gray-400">{exp.duration}</span>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
