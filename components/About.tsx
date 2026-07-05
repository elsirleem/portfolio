'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

const journey = [
  { flag: '🇳🇬', country: 'Nigeria', label: 'Origin' },
  { flag: '🇮🇹', country: 'Italy', label: "L'Aquila" },
  { flag: '🇫🇮', country: 'Finland', label: 'LUT' },
  { flag: '🇳🇱', country: 'Netherlands', label: 'VU Amsterdam' },
];

const strengths = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    title: 'Data Engineering',
    desc: 'Ingestion, validation, and KPI pipelines that turn raw data into structured, trusted datasets.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Backend Development',
    desc: 'REST APIs and services with FastAPI and NestJS, backed by well-modelled relational databases.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    title: 'Clean Code',
    desc: 'Writing maintainable, well-documented, tested systems designed to stay reliable as they scale.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Problem Solver',
    desc: 'Breaking down complex systems into simple, dependable engineering decisions.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z" />
      </svg>
    ),
    title: 'Sustainability-Minded',
    desc: "Erasmus Mundus is built around the Green Deal — sustainability shapes how I design systems.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Cross-Cultural Collaboration',
    desc: 'Agile teams across the Netherlands, Finland, Italy, and Nigeria.',
  },
];

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Turning complex Data into <span className="gradient-text">decisions</span>
          </>
        }
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Left: bio + journey */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--ink-dim)',
              lineHeight: 1.8,
            }}
          >
            I&apos;m a data and software engineer completing an{' '}
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>
              Erasmus Mundus Joint Master&apos;s in Software Engineering for the Green Deal
            </span>{' '}
            across the Netherlands, Finland, and Italy — full details in{' '}
            <a href="#education" style={{ color: 'var(--accent-cyan)' }}>
              Education
            </a>
            . My work sits at the intersection of data engineering, backend systems,
            and sustainable technology — building pipelines that are reliable,
            validated, and decision-ready.
          </p>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '0.72rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--ink-faint)',
                marginBottom: '1rem',
              }}
            >
              My Journey
            </p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0' }}>
              {journey.map((stop, i) => (
                <div key={stop.country} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', width: '92px', flexShrink: 0 }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                      }}
                    >
                      {stop.flag}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-heading), sans-serif',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          color: 'var(--ink)',
                        }}
                      >
                        {stop.country}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontSize: '0.68rem',
                          color: 'var(--ink-faint)',
                        }}
                      >
                        {stop.label}
                      </div>
                    </div>
                  </div>
                  {i < journey.length - 1 && (
                    <div
                      style={{
                        width: '28px',
                        height: '1px',
                        margin: '0 4px',
                        marginBottom: '28px',
                        background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-green))',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: strengths grid */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        >
          {strengths.map((s) => (
            <div key={s.title} className="card" style={{ padding: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.85rem',
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '0.4rem',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'var(--ink-dim)',
                  lineHeight: 1.55,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
