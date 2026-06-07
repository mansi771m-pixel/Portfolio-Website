import { Project, Experience, Education, Skill, Certification } from './types';

export const personalInfo = {
  name: 'Mansi Ranjan',
  tagline: 'Aspiring Software Developer | Web Developer | Problem Solver',
  phone: '+91-7007877587',
  email: 'mansi.771m@gmail.com',
  location: 'Lucknow, Uttar Pradesh, India',
  github: 'https://github.com/mansiranjan',
  linkedin: 'https://linkedin.com/in/mansi-ranjan',
  avatar: '/src/assets/images/mansi_avatar_1780822984807.png',
  summary: 'Aspiring Full Stack Developer pursuing B.Tech in Computer Science Engineering with a strong foundation in modern web technologies and software patterns. Dedicated to building responsive, accessible, and high-performance applications. Experienced in developing robust full-stack solutions, mobile application development, database management, and structured problem-solving.'
};

export const skills: Skill[] = [
  // Languages
  { name: 'Java', level: 85, category: 'languages' },
  { name: 'Python', level: 80, category: 'languages' },
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'TypeScript', level: 80, category: 'languages' },
  { name: 'C / C++', level: 75, category: 'languages' },
  { name: 'Dart', level: 70, category: 'languages' },

  // Frontend
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Bootstrap', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'Firebase', level: 75, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },

  // Mobile
  { name: 'Flutter', level: 75, category: 'mobile' },
  { name: 'React Native', level: 70, category: 'mobile' },

  // Tools
  { name: 'Git & GitHub', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Postman', level: 85, category: 'tools' },

  // Soft Skills
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Communication', level: 85, category: 'soft' },
  { name: 'Team Collaboration', level: 90, category: 'soft' },
  { name: 'Time Management', level: 85, category: 'soft' },
  { name: 'Critical Thinking', level: 90, category: 'soft' },
  { name: 'Project Management', level: 80, category: 'soft' }
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Full-Stack Web Development Intern',
    company: 'SRDT PVT. LTD',
    duration: 'Jun 2025 - Present', // Assuming typical B.Tech internship timelines
    location: 'Lucknow, UP, India',
    description: [
      'Developed and maintained highly responsive, modern web applications from scratch.',
      'Designed and engineered scalable database structures using MongoDB and integrated secure CRUD APIs.',
      'Crafted interactive consumer-facing interfaces using React.js and leveraged Tailwind/CSS for eye-safe styling.',
      'Collaborated effectively in an agile development sprint system to deploy feature updates.'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'REST APIs']
  },
  {
    id: 'exp2',
    role: 'Mobile Application Development Intern',
    company: 'L&T EduTech',
    duration: 'Winter Intern', // Typical short-term winter internship or prior experience
    location: 'Remote, India',
    description: [
      'Assisted in developing and maintaining cross-platform native-performance mobile applications.',
      'Utilized modern state-management paradigms in Flutter and React Native framework.',
      'Identified and resolved memory leaks and user interface bottlenecks to enhance overall application responsive performance.'
    ],
    tags: ['Flutter', 'React Native', 'Dart', 'JavaScript', 'Git', 'Agile Principles']
  }
];

export const educationList: Education[] = [
  {
    id: 'edu1',
    degree: 'B.Tech',
    field: 'Computer Science and Engineering',
    school: 'SRMCEM (Shri Ramswaroop Memorial College of Engineering and Management)',
    location: 'Lucknow, Uttar Pradesh, India',
    duration: '2023 - 2027', // Approximate standard timeline based on status 'pursuing B.Tech'
    grade: '8.4 CGPA',
    details: 'Focused on core subjects including Algorithms, Data Structures, Operating Systems, Database Management Systems, and Advanced Web Engineering.'
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'College Campus Connect',
    description: 'A comprehensive educational management dashboard designed for colleges. Features include automated attendance tracking, customizable timetable structures, notices dashboard, and timely assignment reminders to foster a highly connected and paperless learning ecosystem.',
    image: '/src/assets/images/project_campus_1780823004603.png',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mansiranjan/college-campus-connect',
    liveUrl: 'https://campus-connect.mansi.dev',
    category: 'Full-Stack'
  },
  {
    id: 'proj2',
    title: 'DevPortfolio',
    description: 'An elegant, interactive portfolio template designed specifically for tech professionals. Engineered with glassmomorphic grids, performance-optimized micro-interactions, responsive fluid layouts, and smooth section transitions with persistent state-driven themes.',
    image: '/src/assets/images/project_portfolio_1780823021646.png',
    tags: ['React.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
    githubUrl: 'https://github.com/mansiranjan/devportfolio',
    liveUrl: 'https://portfolio.mansi.dev',
    category: 'Frontend'
  },
  {
    id: 'proj3',
    title: 'ShopSphere',
    description: 'A robust and scalable e-commerce infrastructure built to represent modern digital retailing. Features a comprehensive responsive product catalog, user authorization with persistent session states, interactive cart drawer, payment portal integrations, and order management dashboard services.',
    image: '/src/assets/images/project_shopsphere_1780823037485.png',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Stripe API', 'Redux Toolkit', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mansiranjan/shopsphere',
    liveUrl: 'https://shopsphere.mansi.dev',
    category: 'Full-Stack'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    title: 'Full Stack Web & Mobile App Development',
    issuer: 'L&T EduTech / SRDT Certified Trainer',
    date: '2025',
    description: 'Advanced certification covering database normalization, RESTful APIs design, secure server routing, and cross-platform mobile compilation.'
  },
  {
    id: 'cert2',
    title: 'TOP 100 Achiever - Google Cloud GenAI Study Jams',
    issuer: 'Google Developer Groups',
    date: '2025',
    description: 'Earned recognition as one of the peak performers nationwide in building Generative AI prompts, utilizing Gemini models, and orchestrating server-side AI integrations.'
  },
  {
    id: 'cert3',
    title: 'Cognizant Technoverse Hackathon Badge',
    issuer: 'Cognizant',
    date: '2024',
    description: 'Recognized for excellent active participation, innovative prototyping, and technical execution under rapid development deadlines.'
  }
];
