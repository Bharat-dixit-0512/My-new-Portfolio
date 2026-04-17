import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail, MdLocationPin } from 'react-icons/md';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  leetcode: SiLeetcode,
};

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(personalInfo.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  const contactCards = [
    {
      icon: <MdLocationPin size={28} />,
      label: 'Location',
      value: personalInfo.location,
      href: personalInfo.locationUrl,
    },
    {
      icon: <MdEmail size={28} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaPhone size={24} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phoneRaw}`,
    },
  ];

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Let's start the conversation — drop a hello and let's push forward.
        </motion.p>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card glass-card"
              >
                <div className="contact-card-icon">{card.icon}</div>
                <div>
                  <p className="contact-card-label">{card.label}</p>
                  <p className="contact-card-value">{card.value}</p>
                </div>
              </a>
            ))}

            <div className="contact-socials">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label={link.label}
                  >
                    {Icon && <Icon size={22} />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={submitted}>
              <span className="btn-glow" />
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {new Date().getFullYear()} {personalInfo.name} | Built with{' '}
            <span className="text-gradient">React + Three.js</span>
          </p>
        </motion.footer>
      </div>
    </section>
  );
}