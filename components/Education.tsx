'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

interface EducationEntry {
  id: number;
  badge: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  keyLearnings: string[];
  universities?: { flag: string; name: string; grade: string }[];
}

const educationEntries: EducationEntry[] = [
  {
    id: 1,
    badge: 'EM',
    degree: "Erasmus Mundus Joint Master's",
    institution: 'Software Engineering for the Green Deal',
    period: 'Aug 2024 – Jul 2026',
    location: 'Netherlands · Finland · Italy',
    description:
      'A joint master’s program across three universities focused on building sustainable, large-scale software systems, delivered through cross-border Agile teams.',
    keyLearnings: [
      'Sustainability-oriented software engineering for the Green Deal',
      'Cross-border Agile collaboration across three university teams',
      'Applied coursework in data engineering, backend architecture, and DevOps',
    ],
    universities: [
      { flag: '🇳🇱', name: 'VU Amsterdam', grade: '8.0 / 10' },
      { flag: '🇫🇮', name: 'LUT Finland', grade: '4.33 / 5' },
      { flag: '🇮🇹', name: "University of L'Aquila", grade: '27.6 / 30' },
    ],
  },
  {
    id: 2,
    badge: 'ABU',
    degree: 'B.Eng in Computer Engineering',
    institution: 'Ahmadu Bello University',
    period: '2014 – 2019',
    location: 'Zaria, Nigeria',
    description:
      'Foundational engineering degree covering computer systems, software development, and engineering mathematics.',
    keyLearnings: [
      'Programming in C++',
      'Software Engineering Application',
      'Software Architecture',
      'Engineering Design & Sustainability',
    ],
  },
];

function EducationCard({ entry }: { entry: EducationEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(52,211,153,0.18), rgba(251,191,36,0.18))',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading), sans-serif',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--ink)',
            flexShrink: 0,
          }}
        >
          {entry.badge}
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: '4px',
              lineHeight: 1.3,
            }}
          >
            {entry.degree}
          </h3>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--accent-cyan)',
            }}
          >
            🎓 {entry.institution}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.1rem' }}>
        <span className="pill" style={{ gap: '6px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {entry.period}
        </span>
        <span className="pill" style={{ gap: '6px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}>
            <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {entry.location}
        </span>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.88rem',
          fontWeight: 300,
          color: 'var(--ink-dim)',
          lineHeight: 1.7,
          minHeight: '4.6rem',
          marginBottom: '0.5rem',
        }}
      >
        {entry.description}
      </p>

      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          alignSelf: 'flex-start',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginBottom: open ? '1.1rem' : 0,
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--accent-cyan)',
        }}
      >
        {open ? 'Show Less' : 'Read More'}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div style={{ overflow: 'hidden', maxHeight: open ? '900px' : '0', transition: 'max-height 0.3s ease' }}>
        {entry.universities && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              paddingBottom: '1.25rem',
              marginBottom: '1.25rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {entry.universities.map((uni) => (
              <div
                key={uni.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'var(--ink-dim)' }}>
                  {uni.flag} {uni.name}
                </span>
                <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                  {uni.grade}
                </span>
              </div>
            ))}
          </div>
        )}

        <div>
          <p
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: '0.6rem',
            }}
          >
            Key Learnings:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', paddingLeft: 0 }}>
            {entry.keyLearnings.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'var(--ink-dim)',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: 'var(--accent-green)', flexShrink: 0 }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 90);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Academic <span className="gradient-text">Foundation</span>
          </>
        }
        subtitle="Academic foundation and continuous learning."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
        {educationEntries.map((entry) => (
          <EducationCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
