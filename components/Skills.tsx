'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';

const skillCategories = [
  {
    icon: '⚡',
    title: 'Data Engineering',
    accentRgb: '34,211,238',
    skills: [
      'ETL / ELT',
      'Data Pipelines',
      'PySpark',
      'Delta Lake',
      'Data Modelling',
      'Data Quality',
      'Reconciliation',
      'Medallion Architecture',
    ],
  },
  {
    icon: '🐍',
    title: 'Programming',
    accentRgb: '52,211,153',
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript'],
  },
  {
    icon: '🗄️',
    title: 'Data Platforms',
    accentRgb: '251,191,36',
    skills: ['Databricks', 'Snowflake', 'PostgreSQL', 'MySQL', 'MongoDB', 'DBT', 'SQLite'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    accentRgb: '34,211,238',
    skills: ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'Airflow', 'CI/CD'],
  },
  {
    icon: '🔌',
    title: 'Backend & APIs',
    accentRgb: '52,211,153',
    skills: ['FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'Prisma ORM'],
  },
  {
    icon: '🌍',
    title: 'Languages',
    accentRgb: '251,191,36',
    skills: ['English (Fluent)', 'Dutch (Actively learning)', 'Yoruba (Native)'],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Skills &amp; <span className="gradient-text">Expertise</span>
          </>
        }
        subtitle="Technologies I use to build reliable, production-ready systems."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {skillCategories.map((cat) => (
          <div key={cat.title} className="reveal card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `rgba(${cat.accentRgb},0.1)`,
                  border: `1px solid rgba(${cat.accentRgb},0.2)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}
              >
                {cat.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                }}
              >
                {cat.title}
              </h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="pill"
                  style={{
                    background: `rgba(${cat.accentRgb},0.07)`,
                    borderColor: `rgba(${cat.accentRgb},0.18)`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
