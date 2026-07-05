'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ParticleNetwork from '@/components/ParticleNetwork';

const ROLES = ['Data Engineer', 'Software Engineer'];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const speed = deleting ? 40 : 80;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return text;
}

const stats = [
  { value: '3', label: 'Countries' },
  { value: '2+', label: 'Years Exp.' },
  { value: '10+', label: 'Projects' },
  { value: '2', label: 'Tracks' },
];

export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero-bg"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParticleNetwork />

      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '120px 1.5rem 4rem',
          width: '100%',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.95rem',
              color: 'var(--accent-cyan)',
              marginBottom: '0.75rem',
            }}
          >
            Hi, I am
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: 'clamp(2.6rem, 5.4vw, 3.8rem)',
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1.08,
              color: 'var(--ink)',
              marginBottom: '1rem',
            }}
          >
            Lawal{' '}
            <span className="gradient-text">Salim</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: 'clamp(1.15rem, 2.3vw, 1.5rem)',
              fontWeight: 600,
              color: 'var(--accent-cyan)',
              marginBottom: '1.1rem',
              minHeight: '1.8rem',
            }}
          >
            {typedRole}
            <span style={{ opacity: 0.6 }}>|</span>
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.95rem',
              color: 'var(--ink-dim)',
              marginBottom: '1.25rem',
            }}
          >
            Based in Amsterdam, Netherlands 🇳🇱.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
              fontWeight: 300,
              color: 'var(--ink-dim)',
              lineHeight: 1.75,
              marginBottom: '1rem',
              maxWidth: '540px',
            }}
          >
            I&apos;m Salim, a data and software engineer who cares more about
            what happens after data arrives than how fast it gets there. I
            work on pipeline end to end: ingesting raw data from APIs and
            platforms, validating and modelling it into datasets people can
            trust, and shipping it through backend services and cloud
            infrastructure that turn it into decisions.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
              fontWeight: 300,
              color: 'var(--ink-dim)',
              lineHeight: 1.75,
              marginBottom: '2.25rem',
              maxWidth: '540px',
            }}
          >
            My core strenght and interest overlaps across three domains: data engineering
            solid enough to survive messy, real-world inputs; backend development to
            expose that data through clean APIs; and a sustainability lens,
            shaped by my Green Deal-focused Master&apos;s, that keeps the
            bigger picture in view. If there&apos;s one language fluent in all
            three, it&apos;s Python.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.75rem' }}>
            {[
              {
                href: 'https://github.com/elsirleem',
                label: 'GitHub',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
              {
                href: 'https://www.linkedin.com/in/lawal-salim/',
                label: 'LinkedIn',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: 'mailto:salim.lawal.it@gmail.com',
                label: 'Email',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={s.label}
                className="card"
                style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink-dim)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-dim)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <button
              onClick={scrollToProjects}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                background: 'var(--accent-cyan)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#04141a',
                boxShadow: '0 8px 24px rgba(34,211,238,0.25)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              View Projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <a
              href="/resume.pdf"
              className="card"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.25rem',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--ink)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              borderTop: '1px solid var(--border)',
              paddingTop: '1.5rem',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.78rem',
                    color: 'var(--ink-faint)',
                    marginTop: '0.3rem',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: photo frame */}
        <div
          className="hero-photo-col"
          style={{ position: 'relative', justifySelf: 'center' }}
        >
          <div
            style={{
              width: 'min(320px, 80vw)',
              height: 'min(320px, 80vw)',
              borderRadius: '28px',
              background: 'linear-gradient(155deg, #101a2c, #0a0e18)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src="/profile.png"
              alt="Lawal Salim"
              fill
              sizes="320px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Floating badge */}
          <div
            className="card"
            style={{
              position: 'absolute',
              bottom: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.55rem 1rem',
              background: '#0b0f18',
            }}
          >
            <span className="pulse-dot" />
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--ink)',
                whiteSpace: 'nowrap',
              }}
            >
              Open to Junior Data Engineer/Software Engineer Roles
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--ink-faint)',
          cursor: 'pointer',
        }}
        onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          scroll
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-photo-col {
            order: -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
