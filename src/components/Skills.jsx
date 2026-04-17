import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
            >
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-list">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.15 + skillIndex * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates inline */}
        <CertificatesSection />
      </div>
    </section>
  );
}

/* ---- Certificates sub-section ---- */
import { certificates } from '../data/portfolioData';

function CertificatesSection() {
  const [activeImage, setActiveImage] = React.useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="certificates-area">
      <motion.h3
        className="subsection-title"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginTop: '4rem' }}
      >
        Certifications & Achievements
      </motion.h3>

      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            className="certificate-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            onClick={() => setActiveImage(cert.image)}
          >
            <div className="cert-image-wrapper">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
                loading="lazy"
              />
            </div>
            <div className="cert-info">
              <span className="cert-badge">{cert.badge}</span>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-description">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage} alt="Certificate" className="modal-image" />
            <button
              className="modal-close"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
