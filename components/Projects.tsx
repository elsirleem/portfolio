'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import type { Project, Track } from '@/data/projects';
import SectionHeader from '@/components/SectionHeader';

type Filter = 'all' | Track;

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Data Engineering', value: 'de' },
  { label: 'Software Engineering', value: 'se' },
  { label: 'Data Analysis', value: 'da' },
];

const TRACK_STYLE: Record<Track, { rgb: string; label: string; icon: React.ReactNode }> = {
  de: {
    rgb: '34,211,238',
    label: 'Data Engineering',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
  },
  se: {
    rgb: '167,139,250',
    label: 'Software Eng.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  da: {
    rgb: '52,211,153',
    label: 'Data Analysis',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
};

const BADGE_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  'MSc Thesis': { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  'Hackathon Winner': { bg: 'rgba(52,211,153,0.12)', text: '#34d399', border: 'rgba(52,211,153,0.25)' },
};

function ProjectCard({ project }: { project: Project }) {
  const primaryTrack = TRACK_STYLE[project.track[0]];

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header: real screenshot if available, otherwise gradient/icon placeholder */}
      <div
        style={{
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: project.image
            ? '#0b0f18'
            : `linear-gradient(135deg, rgba(${primaryTrack.rgb},0.22), rgba(${primaryTrack.rgb},0.05))`,
          color: `rgb(${primaryTrack.rgb})`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          primaryTrack.icon
        )}
        {project.badge && BADGE_STYLE[project.badge] && (
          <span
            className="pill"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: BADGE_STYLE[project.badge].bg,
              borderColor: BADGE_STYLE[project.badge].border,
              color: BADGE_STYLE[project.badge].text,
              fontSize: '0.68rem',
            }}
          >
            ✦ {project.badge}
          </span>
        )}
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: '2px',
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.78rem', color: 'var(--ink-faint)' }}>
            {project.subtitle}
          </p>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.85rem',
            fontWeight: 300,
            color: 'var(--ink-dim)',
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map((t) => (
            <span key={t} className="pill" style={{ fontSize: '0.7rem' }}>
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--accent-cyan)',
              textDecoration: 'none',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--accent-amber)',
                textDecoration: 'none',
              }}
            >
              Live
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.track.includes(activeFilter as Track);
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child) => {
              child.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Projects that <span className="gradient-text">move data</span>
          </>
        }
        subtitle={`${projects.length} projects across Data Engineering, Software Engineering, and Analysis.`}
      />

      {/* Filter pills */}
      <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '999px',
                border: isActive ? 'none' : '1px solid var(--border)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.85rem',
                fontWeight: isActive ? 600 : 400,
                background: isActive
                  ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-green))'
                  : 'rgba(255,255,255,0.03)',
                color: isActive ? '#04141a' : 'var(--ink-dim)',
                transition: 'all 0.2s ease',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        className="reveal"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://github.com/elsirleem"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.7rem 1.5rem',
            borderRadius: '999px',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--ink)',
            textDecoration: 'none',
          }}
        >
          View All on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
