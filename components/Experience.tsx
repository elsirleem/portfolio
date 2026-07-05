'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { experiences } from '@/data/experience';
import SectionHeader from '@/components/SectionHeader';

function ExperienceCard({ exp }: { exp: (typeof experiences)[number] }) {
  const [open, setOpen] = useState(false);
  const achievements = exp.bullets.slice(1);

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* Timeline node */}
      <div
        className="hidden md:flex"
        style={{ flexShrink: 0, flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}
      >
        <div
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            border: '2px solid var(--accent-cyan)',
            background: 'var(--bg)',
            boxShadow: '0 0 10px rgba(34,211,238,0.3)',
            flexShrink: 0,
          }}
        />
      </div>

      {/* Card */}
      <div className="card" style={{ flex: 1, padding: '1.75rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.1rem', marginBottom: '1.1rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '14px',
              background: '#fff',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <Image src={exp.logo} alt={exp.company} fill style={{ objectFit: 'contain', padding: '8px' }} />
          </div>

          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '3px',
              }}
            >
              {exp.role}
            </h3>
            <p className="gradient-text" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.6rem' }}>
              {exp.company}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.25rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8rem', color: 'var(--ink-faint)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {exp.period}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8rem', color: 'var(--ink-faint)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Summary line (always visible) */}
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.88rem',
            fontWeight: 300,
            color: 'var(--ink-dim)',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}
        >
          {exp.bullets[0]}
        </p>

        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--accent-cyan)',
          }}
        >
          {open ? 'Show Less' : 'Show More'}
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

        <div
          style={{
            overflow: 'hidden',
            maxHeight: open ? '700px' : '0',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
            {achievements.length > 0 && (
              <>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '0.85rem',
                  }}
                >
                  ⚡ Key Achievements
                </p>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    marginBottom: '1.5rem',
                    paddingLeft: 0,
                    listStyle: 'none',
                  }}
                >
                  {achievements.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '0.88rem',
                        fontWeight: 300,
                        color: 'var(--ink-dim)',
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--accent-cyan)',
                          flexShrink: 0,
                          marginTop: '9px',
                        }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '0.85rem',
              }}
            >
              💻 Technologies Used
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Where I&apos;ve <span className="gradient-text">built things</span>
          </>
        }
        subtitle="From data pipelines to backend systems and to the cloud, here's my journey delivering engineering impact."
      />

      <div style={{ position: 'relative' }}>
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            left: '8px',
            top: '18px',
            bottom: '18px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-green), transparent)',
            borderRadius: '2px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp) => (
            <div key={exp.id} className="reveal">
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
