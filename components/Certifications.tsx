'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { certifications, type CertStatus } from '@/data/certifications';

const STATUS_STYLE: Record<CertStatus, { color: string; bg: string }> = {
  Completed: { color: 'var(--accent-green)', bg: 'rgba(52,211,153,0.1)' },
  'In Progress': { color: 'var(--accent-cyan)', bg: 'rgba(34,211,238,0.1)' },
  Planned: { color: 'var(--ink-faint)', bg: 'rgba(255,255,255,0.05)' },
};

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('') || name.slice(0, 2).toUpperCase();
}

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 70);
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
    <section id="certifications" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Professional <span className="gradient-text">Certifications</span>
          </>
        }
        subtitle="Credentials backing up the data engineering and backend tracks I apply for."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {certifications.map((cert) => {
          const style = STATUS_STYLE[cert.status];
          return (
            <div key={cert.id} className="reveal card" style={{ padding: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: style.bg,
                  border: `1px solid ${style.color}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: style.color,
                  marginBottom: '1rem',
                }}
              >
                {initials(cert.name)}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {cert.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 300,
                  color: 'var(--ink-dim)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}
              >
                {cert.blurb}
              </p>

              <span
                className="pill"
                style={{ background: style.bg, borderColor: `${style.color}33`, color: style.color }}
              >
                {cert.status}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
