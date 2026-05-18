const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-bg dark:to-dark-card">
      <div className="text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6">
          MERN Stack Developer
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Building modern, scalable web applications with React, Node.js, Express, and MongoDB
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
