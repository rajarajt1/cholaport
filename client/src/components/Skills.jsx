import { useState, useEffect } from 'react';
import { getSkills } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="section-container bg-gray-50 dark:bg-dark-card">
        <h2 className="section-title">Skills</h2>
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-dark-card">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((category, index) => (
          <div key={index} className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
