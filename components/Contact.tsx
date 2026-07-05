'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

const infoCards = [
  {
    label: 'Email',
    value: 'salim.lawal.it@gmail.com',
    href: 'mailto:salim.lawal.it@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Amsterdam, Netherlands',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: 'Available from July 2026 for full-time roles',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

const socials = [
  {
    href: 'https://github.com/elsirleem',
    label: 'GitHub',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/lawal-salim/',
    label: 'LinkedIn',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'mailto:salim.lawal.it@gmail.com',
    label: 'Email',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  borderRadius: '10px',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.9rem',
  outline: 'none',
};

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const formspreeValue = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const formEndpoint = formspreeValue
    ? formspreeValue.startsWith('http')
      ? formspreeValue
      : `https://formspree.io/f/${formspreeValue}`
    : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formEndpoint) {
      // Fallback if Formspree hasn't been configured yet
      const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name || 'a visitor'}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
      );
      window.location.href = `mailto:salim.lawal.it@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name || 'a visitor'}`,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section">
      <SectionHeader
        title={
          <>
            Let&apos;s build something <span className="gradient-text">worth talking about</span>
          </>
        }
        subtitle="I'm actively looking for Data Engineering and Software Engineering roles. If you're working on something interesting, I'd love to hear about it."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Left: info */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: '0.25rem',
            }}
          >
            Get in Touch
          </p>

          {infoCards.map((card) => {
            const content = (
              <>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading), sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: 'var(--ink-faint)',
                      marginBottom: '2px',
                    }}
                  >
                    {card.label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', color: 'var(--ink)' }}>
                    {card.value}
                  </p>
                </div>
              </>
            );
            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem', textDecoration: 'none' }}
              >
                {content}
              </a>
            ) : (
              <div key={card.label} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem' }}>
                {content}
              </div>
            );
          })}

          <div style={{ marginTop: '0.5rem' }}>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.78rem', color: 'var(--ink-faint)', marginBottom: '0.6rem' }}>
              Connect on social media
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  className="card"
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-dim)', textDecoration: 'none' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="reveal card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'var(--ink-dim)', marginBottom: '0.4rem' }}>
              Name
            </label>
            <input
              style={inputStyle}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'var(--ink-dim)', marginBottom: '0.4rem' }}>
              Email
            </label>
            <input
              type="email"
              style={inputStyle}
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'var(--ink-dim)', marginBottom: '0.4rem' }}>
              Subject
            </label>
            <input
              style={inputStyle}
              placeholder="Subject of your message"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'var(--ink-dim)', marginBottom: '0.4rem' }}>
              Message
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '0.8rem',
              borderRadius: '12px',
              background: 'var(--accent-cyan)',
              border: 'none',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: '#04141a',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            {status !== 'sending' && (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            )}
          </button>

          {status === 'success' && (
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.85rem', color: 'var(--accent-green)', textAlign: 'center' }}>
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.85rem', color: '#f87171', textAlign: 'center' }}>
              Something went wrong. Please email me directly at{' '}
              <a href="mailto:salim.lawal.it@gmail.com" style={{ color: '#f87171' }}>
                salim.lawal.it@gmail.com
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
