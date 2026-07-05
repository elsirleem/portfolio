'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';

const skillCategories = [
  {
    icon: '⚡',
    title: 'Data Engineering',
    accentRgb: '34,211,238',
    skills: [
      'ETL/ELT Pipelines',
      'Data Integration',
      'Data Transformation',
      'Data Modelling',
      'Data Quality',
      'Data Integrity',
      'Reconciliation',
      'Data Governance',
      'Data Catalog',
    ],
  },
  {
    icon: '🐍',
    title: 'Programming',
    accentRgb: '52,211,153',
    skills: ['Python', 'SQL', 'PySpark', 'FastAPI', 'REST APIs', 'JavaScript', 'TypeScript'],
  },
  {
    icon: '🗄️',
    title: 'Data Platforms',
    accentRgb: '251,191,36',
    skills: ['Databricks', 'Delta Lake', 'Snowflake', 'Redshift', 'Apache Spark', 'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'DBT Fundamentals'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    accentRgb: '34,211,238',
    skills: ['Azure', 'AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Git', 'CI/CD', 'Airflow', 'Dagster', 'Kafka'],
  },
  {
    icon: '📊',
    title: 'Analytics & Modelling',
    accentRgb: '52,211,153',
    skills: ['Dimensional Modelling Fundamentals', 'KPI Modelling', 'Reporting Automation', 'Financial Data'],
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
