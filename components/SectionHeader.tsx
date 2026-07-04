export default function SectionHeader({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <h2
        className="reveal section-title"
        style={{ marginBottom: subtitle ? '0.9rem' : 0 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--ink-dim)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
