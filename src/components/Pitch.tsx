const pillars = [
  {
    number: '01',
    title: 'Retail backbone',
    copy: "The team, training, structured cadence, and full W-2 benefits package retail uses to keep loan officers from leaving. We use it for the opposite reason — so the move doesn't cost you what you've been counting on.",
  },
  {
    number: '02',
    title: 'Broker upside',
    copy: 'Up to 200 bps in LO comp. 130+ investors. 2,700+ loan products. Commercial through Janover. Same loan you couldn\'t close at retail closes here at a paycheck that pays out.',
  },
  {
    number: '03',
    title: 'No corporate attitude',
    copy: "None of the meddling. None of the politics. None of the cold-feeling layers between you and your business. The brand on your customer-facing materials can stay yours, too.",
  },
];

export default function Pitch() {
  return (
    <section id="pitch" className="section section-pitch">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">The Pitch</p>
          <h2>Most broker shops weren&apos;t built to close more deals. We built one that is.</h2>
          <p className="lede">
            Retail brought structure, training, and a team that closes deals together. The broker
            channel brought better pricing, deeper product, and bigger comp. PrimeTime is what happens
            when you stop choosing between them.
          </p>
        </div>

        <div className="pitch-grid reveal">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="pitch-card">
              <p className="pitch-number">{pillar.number}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
