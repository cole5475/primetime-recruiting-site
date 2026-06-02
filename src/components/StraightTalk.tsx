const blocks = [
  {
    title: 'The fees',
    subtitle: 'What it costs.',
    paragraphs: [
      '11% accounting fee on gross comp. Funds payroll, compliance, and operational backbone. Industry-standard for the broker channel.',
      '$300/year tech fee. Covers ROAM, MX, Google, Canva, and the design tools. Prorated. Non-refundable.',
      "What you don't pay for: long-term disability, basic life and AD&D, training, your CRM, your AI suite.",
    ],
  },
  {
    title: 'The bar',
    subtitle: "What's expected.",
    paragraphs: [
      "Production thresholds for staying. We'll set them with you, in writing, on day one.",
      'Weekly 1:1s. Monthly business reviews. Quarterly business plan check-ins. The cadence retail LOs are used to.',
      'If your retail manager skipped your weekly meeting half the time, this part will feel different.',
    ],
  },
  {
    title: 'The fit',
    subtitle: "Who isn't a fit.",
    paragraphs: [
      "Bonus-hungry. Won't engage with the team. Treats opportunity casually. Uses the market as an excuse.",
      "If you need a signing bonus to feel motivated, you're going to be the wrong fit by month three.",
      'We screen for this on the call. So should you.',
    ],
  },
];

export default function StraightTalk() {
  return (
    <section id="straight-talk" className="section section-straight">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Straight Talk</p>
          <h2>The honest bit.</h2>
        </div>

        <div className="straight-grid reveal">
          {blocks.map((block) => (
            <article key={block.title} className="straight-card">
              <h3>
                {block.title} <span>{block.subtitle}</span>
              </h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
