export const personalInfo = {
  name: 'Bharat Dixit',
  title: 'Full Stack Developer',
  subtitles: [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Problem Solver',
    'UI/UX Designer',
  ],
  bio: "Hi, I'm Bharat—a passionate developer and tech enthusiast who loves crafting elegant solutions and exploring the latest in web technologies. Whether it's building sleek interfaces or diving deep into backend logic, I thrive on turning ideas into reality.",
  longBio:
    'Passionate Computer Science undergraduate eager to transform ideas into impactful tech solutions. Skilled in crafting innovative, responsive software with an eye for performance and user experience. Continuously evolving through hands-on development and forward-thinking collaboration.',
  location: 'Vrindavan, Uttar Pradesh',
  locationUrl:
    'https://www.google.com/maps/place/Vrindavan,+Uttar+Pradesh/',
  email: 'dixitbt0512@gmail.com',
  phone: '+91 941-265-9692',
  phoneRaw: '+919412659692',
  resumeUrl: '/BharatResume.pdf',
  profileImage: '/MeImage.png',
  formspreeEndpoint: 'https://formspree.io/f/meozpnko',
};

export const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/Bharat-dixit-0512',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bharat-dixit-/',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    url: 'https://x.com/BharatD263969',
    icon: 'twitter',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/__bharatdixit.0512/',
    icon: 'instagram',
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/BharatDixit0512/',
    icon: 'leetcode',
  },
];

export const stats = [
  { label: 'Projects Built', value: '10+', color: '#00f5ff' },
  { label: 'GitHub Commits', value: '400+', color: '#a855f7' },
  { label: 'Hours Coding/Day', value: '10+', color: '#3b82f6' },
  { label: 'Certifications', value: '4+', color: '#f472b6' },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'Java', level: 80 },
      { name: 'C# / .NET', level: 65 },
      { name: 'Python', level: 55 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'City Buddy',
    description:
      'A Travel Based Project to find places in an unfamiliar city with interactive maps and local recommendations.',
    image: '/City-Buddy.png',
    tags: ['React', 'Node.js', 'Maps API'],
    codeLink: 'https://github.com/Bharat-dixit-0512/City-Buddy',
    liveLink: 'https://github.com/Bharat-dixit-0512/City-Buddy',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    description:
      'A sleek e-commerce UI with category filtering, search debounce, and responsive product display.',
    image: '/E-commerce.png',
    tags: ['React', 'Tailwind', 'API'],
    codeLink: 'https://github.com/Bharat-dixit-0512/MY_E-Commerce',
    liveLink: 'https://my-ecommerce-0512.netlify.app/',
  },
  {
    id: 3,
    title: 'GitHub Fetcher',
    description:
      'Fetch and display user profiles from GitHub using dynamic API calls with a clean UI.',
    image: '/githubfetcher.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Bharat-dixit-0512/github_fetch',
    liveLink: 'https://github-fetch-detail.netlify.app/',
  },
  {
    id: 4,
    title: 'Password Generator',
    description:
      'A customizable password generator with strength indicators and copy-to-clipboard support.',
    image: '/Password Generator.png',
    tags: ['React', 'JavaScript'],
    codeLink: 'https://github.com/Bharat-dixit-0512/MyPasswordGenerator',
    liveLink: 'https://mypasswordgenerator1.netlify.app/',
  },
  {
    id: 5,
    title: 'iTask – Todo List',
    description:
      'A clean and intuitive task manager with add/delete functionality and persistent local storage.',
    image: '/todolist.png',
    tags: ['React', 'LocalStorage'],
    codeLink: 'https://github.com/Bharat-dixit-0512/Todo-List-App',
    liveLink: 'https://my-todo-itask.netlify.app/',
  },
  {
    id: 6,
    title: 'Portfolio v1',
    description:
      'Personal portfolio showcasing React skills, deployed projects, and design aesthetic.',
    image: '/PortFolioSite.png',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    codeLink: 'https://github.com/Bharat-dixit-0512/My-Portfolio',
    liveLink: 'https://my-portfolioisme.netlify.app/',
  },
];

export const certificates = [
  {
    id: 1,
    title: 'Deloitte Virtual Experience Program',
    description:
      'Completed Deloitte tech simulation with coding task expertise.',
    badge: 'Virtual Internship',
    image: '/deloite2.jpg',
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    description: 'Completed Coding Blocks course at GLA University, Mathura.',
    badge: 'Participation',
    image: '/certificate.jpg',
  },
  {
    id: 3,
    title: 'Postman API Fundamentals Student Expert',
    description: 'Official certification awarded by Postman.',
    badge: 'Achievement',
    image: '/postman.png',
  },
  {
    id: 4,
    title: 'Oracle Cloud AI Foundations Associate',
    description:
      'Certified in AI foundations on Oracle Cloud Infrastructure, 2025.',
    badge: 'Certification',
    image: '/oracle1.jpg',
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'GLA University',
    year: '2023 – 2027',
  },
  {
    degree: 'Senior Secondary (Science)',
    institution: 'Parmeshwari Devi Dhanuka School',
    year: '2022 – 2023',
  },
  {
    degree: 'High School',
    institution: 'Parmeshwari Devi Dhanuka School',
    year: '2020 – 2021',
  },
];

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
