import type { Project, SkillCategory, NavLink, SocialLink, Experience, Stat } from '../components/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:alex@example.com', icon: 'mail' },
];

export const stats: Stat[] = [
  { value: '5+', label: 'Years Experience', icon: 'calendar' },
  { value: '50+', label: 'Projects Completed', icon: 'folder' },
  { value: '30+', label: 'Happy Clients', icon: 'users' },
  { value: '10+', label: 'Technologies', icon: 'code' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'React / Next.js', level: 95, color: '#00d4ff' },
      { name: 'TypeScript', level: 90, color: '#3b82f6' },
      { name: 'Tailwind CSS', level: 92, color: '#06b6d4' },
      { name: 'Vue.js', level: 75, color: '#10b981' },
      { name: 'HTML / CSS', level: 98, color: '#f59e0b' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 92, color: '#10b981' },
      { name: 'Express / Fastify', level: 88, color: '#f59e0b' },
      { name: 'Python / Django', level: 80, color: '#3b82f6' },
      { name: 'PostgreSQL', level: 85, color: '#7b2ff7' },
      { name: 'MongoDB', level: 82, color: '#10b981' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: 'settings',
    skills: [
      { name: 'Docker', level: 85, color: '#3b82f6' },
      { name: 'AWS / GCP', level: 78, color: '#f59e0b' },
      { name: 'Git / GitHub', level: 95, color: '#ec4899' },
      { name: 'CI/CD', level: 80, color: '#7b2ff7' },
      { name: 'Linux', level: 88, color: '#10b981' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'CloudSync Dashboard',
    description: 'A real-time cloud infrastructure monitoring dashboard with interactive visualizations, alert management, and team collaboration features. Built for DevOps teams to track server health and performance metrics.',
    image: '/images/project1.jpg',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'EcoTrack Mobile',
    description: 'A sustainability tracking app that helps users monitor their carbon footprint, set eco-friendly goals, and connect with a community of environmentally conscious individuals.',
    image: '/images/project2.jpg',
    tech: ['React Native', 'Express', 'MongoDB', 'Chart.js', 'MapBox API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'DevFlow IDE',
    description: 'A browser-based collaborative code editor with real-time multiplayer editing, integrated terminal, Git support, and AI-powered code suggestions.',
    image: '/images/project3.jpg',
    tech: ['Next.js', 'WebRTC', 'Monaco Editor', 'Socket.io', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'PayStream API',
    description: 'A high-performance payment processing API with support for multiple currencies, subscription management, fraud detection, and comprehensive webhook system.',
    image: '/images/project4.jpg',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'ArtVault NFT Marketplace',
    description: 'A decentralized NFT marketplace for digital artists to mint, showcase, and sell their artwork with low gas fees and eco-friendly blockchain integration.',
    image: '/images/project5.jpg',
    tech: ['React', 'Solidity', 'Ethers.js', 'IPFS', 'Hardhat', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'HealthPulse Analytics',
    description: 'A healthcare analytics platform that aggregates patient data, provides predictive insights, and helps medical professionals make data-driven decisions.',
    image: '/images/project6.jpg',
    tech: ['Python', 'Django', 'React', 'TensorFlow', 'PostgreSQL', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechNova Solutions',
    period: '2023 – Present',
    description: 'Leading development of enterprise SaaS platforms, architecting microservices, and mentoring junior developers. Reduced API response times by 40% through optimization.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Craft Agency',
    period: '2021 – 2023',
    description: 'Built and maintained multiple client projects including e-commerce platforms, real-time dashboards, and content management systems.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Frontend Developer',
    company: 'StartupHub Inc.',
    period: '2020 – 2021',
    description: 'Developed responsive web applications and progressive web apps for various startup clients. Implemented design systems and component libraries.',
    technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest'],
  },
  {
    title: 'Junior Developer',
    company: 'WebForge Studios',
    period: '2019 – 2020',
    description: 'Started career building WordPress themes and custom plugins. Transitioned to modern JavaScript frameworks and contributed to open-source projects.',
    technologies: ['JavaScript', 'PHP', 'WordPress', 'MySQL', 'jQuery'],
  },
];

export const typingTexts = [
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Problem Solver',
  'Tech Explorer',
];
