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
  profileImage: '/me.jpeg',
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
    liveLink: 'https://city-buddy.vercel.app/',
    
  },
  {
    id: 2,
    title: 'Portfolio Website v2',
    description:
      'Modern portfolio showcasing projects, skills, and certifications with interactive animations, glowing cursor effects, and particle systems.',
    image: '/NewPortfolio.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite','Three js'],
    codeLink: 'https://github.com/Bharat-dixit-0512/My-new-Portfolio',
    liveLink: 'its-bharat-dixit.netlify.app',
  },
  {
    id: 3,
    title: 'Hostel Booking System',
    description:
      'React-based hostel booking system with Tailwind styling and Framer Motion animations for seamless reservations.',
    image: '/HostelBooking.png',
    tags: ['React JS', 'Node.js', 'MongoDB', 'Socket.io'],
    codeLink: 'https://github.com/Bharat-dixit-0512/Hostel-Booking-System',
    liveLink: 'https://hostel-booking-system-omega.vercel.app/',
  },
  {
    id: 4,
    title: 'Chatify',
    description:
      'Real-time chat application using React, Tailwind, and Framer Motion, delivering smooth messaging and UI.',
    image: '/Chatify.png',
    tags: ['React JS', 'Node.js', 'Socket.io', 'MongoDB'],
    codeLink: 'https://github.com/Bharat-dixit-0512/CHATIFY_APP',
    liveLink: 'https://chatify-app-green.vercel.app/',
  },
  
];

export const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Completed Coding Blocks course at GLA University, Mathura.',
    badge: 'Participation',
    image: '/certificate.jpg',
  },
  {
    id: 2,
    title: 'Postman API Fundamentals Student Expert',
    description: 'Official certification awarded by Postman.',
    badge: 'Achievement',
    image: '/postman.png',
  },
  {
    id: 3,
    title: 'Oracle Cloud AI Foundations Associate',
    description:
      'Certified in AI foundations on Oracle Cloud Infrastructure, 2025.',
    badge: 'Certification',
    image: '/oracle1.jpg',
  },
  {
    id: 4,
    title: 'GuideWire Certification',
    description: 'Certified in GuideWire platform for insurance software solutions.',
    badge: 'Certification',
    image: '/GuideWire.png',
  },
  {
    id: 5,
    title: 'Java Basics',
    description: 'Certified in Java fundamentals and core programming concepts.',
    badge: 'Achievement',
    image: '/java_basic.jpg',
  },
  {
    id: 6,
    title: 'JavaScript Fundamentals',
    description: 'Completed JavaScript course covering ES6 and modern web development.',
    badge: 'Achievement',
    image: '/JavaScript.jpg',
  },
  {
    id: 7,
    title: 'Problem Solving Basics',
    description: 'Certified in problem-solving techniques and algorithmic thinking.',
    badge: 'Achievement',
    image: '/problem_solving_basic.jpg',
  },
  {
    id: 8,
    title: 'React.js Mastery',
    description: 'Advanced certification in React.js and modern component-based architecture.',
    badge: 'Achievement',
    image: '/React.png',
  },
  {
    id: 9,
    title: 'C# Fundamentals',
    description: 'Certified in C# programming and .NET framework basics.',
    badge: 'Achievement',
    image: '/cSharp.png',
  },
  {
    id: 10,
    title: 'Deloitte Virtual Experience Program',
    description:
      'Completed Deloitte tech simulation with coding task expertise.',
    badge: 'Virtual Internship',
    image: '/deloite2.jpg',
  },
  {
    id: 11,
    title: 'NPTEL Environmental Engineering',
    description:
      'Completed 12-week NPTEL course on Introduction to Environmental Engineering and Science - Fundamental and Sustainability Concepts from IIT Kharagpur (Jan-Apr 2025).',
    badge: 'Certification',
    image: '/Nptel.jpg',
  },
  {
    id: 12,
    title: 'Python Zero to Hero',
    description:
      'Successfully completed 5-days Free Bootcamp on Python Zero to Hero by DevTown in collaboration with MSIT, MSC Chapter (Jun 2025).',
    badge: 'Participation',
    image: '/PythonZeroToHero.jpg',
  },
  {
    id: 13,
    title: 'Annual Leadership Summit 2024',
    description:
      'Certificate of Coordination for coordinating the Annual Leadership Summit 2024 on "Leading The Future: The Power of Reskilling And Upskilling" at GLA University in association with NHRDN Mathura Chapter (Oct 2024).',
    badge: 'Coordination',
    image: '/LeaderShip.jpg',
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
