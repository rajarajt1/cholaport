import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary">Portfolio</div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Contact</button>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-card transition"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
