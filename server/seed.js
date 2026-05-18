require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration',
    longDescription: 'A comprehensive e-commerce platform built with MERN stack featuring user authentication, product management, shopping cart, order tracking, and Stripe payment integration.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    image: 'https://via.placeholder.com/400x300?text=E-Commerce+Platform',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management tool for teams',
    longDescription: 'A real-time task management application with drag-and-drop functionality, team collaboration features, notifications, and project tracking capabilities.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    image: 'https://via.placeholder.com/400x300?text=Task+Manager',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/taskmanager',
    featured: true
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics',
    longDescription: 'A responsive dashboard that aggregates and visualizes social media metrics from multiple platforms with interactive charts and real-time updates.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    image: 'https://via.placeholder.com/400x300?text=Social+Dashboard',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/socialdashboard',
    featured: false
  },
  {
    title: 'Blog Platform',
    description: 'Content management system for blogging',
    longDescription: 'A full-featured blogging platform with rich text editor, image uploads, comments, categories, and SEO optimization.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
    image: 'https://via.placeholder.com/400x300?text=Blog+Platform',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/blog',
    featured: false
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting application',
    longDescription: 'A weather application that provides current weather conditions and forecasts using third-party APIs with location-based search and favorites.',
    techStack: ['React', 'Node.js', 'Express', 'OpenWeather API'],
    image: 'https://via.placeholder.com/400x300?text=Weather+App',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/weather',
    featured: false
  }
];

const skills = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'Redux', level: 'Intermediate' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Authentication (JWT)', level: 'Intermediate' }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Mongoose', level: 'Advanced' },
      { name: 'MySQL', level: 'Intermediate' }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Docker', level: 'Beginner' },
      { name: 'AWS', level: 'Beginner' }
    ]
  }
];

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'MERN Stack Developer',
    duration: 'May 2025 - Present',
    startDate: new Date('2025-05-01'),
    current: true,
    responsibilities: [
      'Developed and maintained full-stack web applications using MERN stack',
      'Collaborated with cross-functional teams to define and implement new features',
      'Optimized application performance and improved loading times by 40%',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in code reviews and mentored junior developers',
      'Used Git for version control and followed Agile methodologies'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS', 'Git']
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});

    // Insert sample data
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    await Experience.insertMany(experiences);

    console.log('Database seeded successfully!');
    console.log(`${projects.length} projects created`);
    console.log(`${skills.length} skill categories created`);
    console.log(`${experiences.length} experience entries created`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
