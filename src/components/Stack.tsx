const stackRows = [
  {
    name: 'ROAM',
    desc: 'Magic Minutes (call summaries that work), Magic Cast, Lobby Links, AI Assistants, and Co-workers for delegated workflow.',
    tag: 'AI Suite',
  },
  {
    name: 'MX',
    desc: 'Our CRM and operational system. Built around how loans actually move, not how a software company thinks loans should move.',
    tag: 'CRM',
  },
  {
    name: 'Google Workspace',
    desc: 'Gmail, Drive, Docs, Sheets, Calendar, and Gemini. Standard issue, fully provisioned.',
    tag: 'Productivity',
  },
  {
    name: 'Canva Pro',
    desc: "For the design work you'd otherwise be expensing — flyers, social, listings, marketing collateral.",
    tag: 'Design',
  },
  {
    name: 'Video & Graphic Tools',
    desc: "For your content, your social, and the realtor partners you're recruiting on the side.",
    tag: 'Content',
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section section-stack">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">The Stack</p>
          <h2>Day one, you log into this.</h2>
        </div>

        <div className="stack-table reveal">
          {stackRows.map((row) => (
            <div key={row.name} className="stack-row">
              <div>
                <h3>{row.name}</h3>
                <p>{row.desc}</p>
              </div>
              <span className="stack-tag">{row.tag}</span>
            </div>
          ))}
        </div>

        <p className="stack-fee reveal">
          Annual technology fee for licensed loan officers / <strong>$300 / yr</strong> · prorated
        </p>
      </div>
    </section>
  );
}
