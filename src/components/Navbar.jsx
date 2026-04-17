import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <button
          onClick={() => scrollToSection('hero')}
          className="navbar-logo"
        >
          Port<span className="navbar-logo-accent">Folio</span>
        </button>

        {/* Desktop Nav */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`navbar-link ${activeSection === item.id ? 'navbar-link-active' : ''}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="navbar-link-indicator" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isOpen ? 'navbar-mobile-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`navbar-mobile-link ${activeSection === item.id ? 'navbar-link-active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}