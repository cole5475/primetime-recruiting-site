const comparisonRows = [
  {
    label: 'Comp',
    retail: '100 bps',
    primeTime: '200 bps',
  },
  {
    label: 'Less accounting fee',
    retail: '—',
    primeTime: '11%',
  },
  {
    label: 'Net to LO',
    retail: '100 bps',
    primeTime: '~179 bps',
  },
  {
    label: 'On a $400,000 loan',
    retail: '$4,000',
    primeTime: '$7,120',
  },
];

export default function Math() {
  return (
    <section id="math" className="section section-math">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">The Math</p>
          <h2>Same loan. Different paycheck.</h2>
          <p className="lede">
            We pay up to 200 basis points to the loan officer. Out of that, 11% goes to a flat
            accounting fee that funds the operational backbone. We&apos;re going to show you the math
            the way you&apos;d run it yourself — on a real loan, with the fee already deducted.
          </p>
        </div>

        <div className="math-panel reveal">
          <article className="math-col">
            <h3>Your retail today</h3>
            <ul>
              {comparisonRows.map((row) => (
                <li key={`retail-${row.label}`}>
                  <span>{row.label}</span>
                  <strong>{row.retail}</strong>
                </li>
              ))}
            </ul>
          </article>

          <article className="math-col math-col-gold">
            <h3>PrimeTime</h3>
            <ul>
              {comparisonRows.map((row) => (
                <li key={`prime-${row.label}`}>
                  <span>{row.label}</span>
                  <strong>{row.primeTime}</strong>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="math-callout reveal">
          <p className="math-multiple text-gold">1.78×</p>
          <p>
            Same loan. Same closing. Different paycheck. And we haven&apos;t gotten to W-2 benefits,
            the tech, or the team yet.
          </p>
        </div>
      </div>
    </section>
  );
}
