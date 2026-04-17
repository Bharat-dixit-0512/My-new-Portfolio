import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

function TypingAnimation({ texts, speed = 100, pause = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    setDisplayText(currentText.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="hero" className="section hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="hero-image"
            />
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="hero-greeting">
          Hello, I'm
        </motion.p>

        <motion.h1 variants={itemVariants} className="hero-name">
          {personalInfo.name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
              className={char === ' ' ? 'hero-name-space' : ''}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-subtitle">
          <TypingAnimation texts={personalInfo.subtitles} />
        </motion.div>

        <motion.p variants={itemVariants} className="hero-bio">
          {personalInfo.longBio}
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn btn-primary"
          >
            <span className="btn-glow" />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="btn btn-secondary"
          >
            View Projects
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
