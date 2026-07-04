'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 18, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          width: '100%',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Monogram logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="gradient-text"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '-0.5px',
            flexShrink: 0,
          }}
        >
          {'{ SL }'}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.1rem' }}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  position: 'relative',
                  padding: '0.5rem 0.85rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: 400,
                  color: isActive ? 'var(--ink)' : 'var(--ink-dim)',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-dim)';
                }}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '0.85rem',
                    right: '0.85rem',
                    height: '2px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-green))',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.25s ease',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNavClick('#contact')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.55rem 1.25rem',
            borderRadius: '999px',
            background: 'var(--accent-cyan)',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#04141a',
            flexShrink: 0,
          }}
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
}
