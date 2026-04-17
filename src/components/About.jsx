import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, education, stats, socialLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  leetcode: SiLeetcode,
};

function CountUp({ target, duration = 2000 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);
  const numericTarget = parseInt(target);

  React.useEffect(() => {
    if (!isInView || isNaN(numericTarget)) return;
    let start = 0;
    const step = Math.ceil(numericTarget / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericTarget, duration]);

  if (isNaN(numericTarget)) return <span ref={ref}>{target}</span>;
  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="about-bio glass-card">
          <p>{personalInfo.bio}</p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card glass-card">
              <div className="stat-value" style={{ color: stat.color }}>
                <CountUp target={stat.value.replace('+', '')} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <h3 className="subsection-title">Education</h3>
          <div className="education-timeline">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="education-item glass-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="education-dot" />
                <h4>{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="social-row">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label={link.label}
              >
                {Icon && <Icon size={20} />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}