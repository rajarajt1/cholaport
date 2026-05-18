import { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.techStack.some(tech => tech.toLowerCase().includes(filter.toLowerCase())));

  if (loading) {
    return (
      <section id="projects" className="section-container bg-white dark:bg-dark-bg">
        <h2 className="section-title">Projects</h2>
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-container bg-white dark:bg-dark-bg">
      <h2 className="section-title">Projects</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'React', 'Node.js', 'MongoDB'].map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-lg transition ${
              filter === tech
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {tech === 'all' ? 'All' : tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-50 dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
