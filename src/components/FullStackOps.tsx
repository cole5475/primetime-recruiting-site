const opsPaths = [
  {
    label: '01 / Bring Your Own',
    title: 'Keep your processor',
    body: "Already have someone you trust? Bring them. We'll place them within our processing partner structure so they're properly set up, compliant, and ready to work your pipeline from day one.",
  },
  {
    label: '02 / We Place Yours',
    title: 'Hand them off',
    body: 'Have a processor but want them handled? We place them with a trusted partner in our network. They stay on your files. You stay focused on originating.',
  },
  {
    label: '03 / We Match You',
    title: 'Start fresh',
    body: "No processor? We'll match you with the right fit from our network based on how you work, your volume, and your market. No guessing, no solo figuring-it-out.",
  },
];

export default function FullStackOps() {
  return (
    <section id="ops" className="section section-ops">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Operations</p>
          <h2>Full-stack ops. Zero out of pocket.</h2>
          <p className="lede">
            Most broker shops hand you a login and a wholesale rep. We give you a complete ops layer
            built around how you close loans — processor, LOA support, and the flexibility to
            structure it however you work best. You pay none of it.
          </p>
        </div>

        <div className="pitch-grid reveal">
          {opsPaths.map((path) => (
            <article key={path.label} className="pitch-card">
              <p className="pitch-number">{path.label}</p>
              <h3>{path.title}</h3>
              <p>{path.body}</p>
            </article>
          ))}
        </div>

        <div
          className="stack-fee-note reveal"
          style={{
            marginTop: 18,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            textAlign: 'left',
            padding: 24,
            border: '1px solid var(--border)',
            background: 'var(--bg-elev)',
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 10 }}>
              LOA Support
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', margin: 0 }}>
              A loan officer assistant is available to every LO on the team — not gated by volume,
              not a reward for hitting a number. If you want one, you can have one.
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: 10 }}>
              How it&apos;s paid
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', margin: 0 }}>
              Processing is a client-paid fee charged by the processing company. It is not a lender
              charge, not in Box A, and it does not come out of your comp.
            </p>
          </div>
        </div>

        <p
          className="eyebrow reveal"
          style={{ textAlign: 'center', marginTop: 24, marginBottom: 0 }}
        >
          You sell. We handle the rest.
        </p>
      </div>
    </section>
  );
}
