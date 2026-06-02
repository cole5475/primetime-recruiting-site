type OfferCard = {
  number: string;
  title: string;
  subtitle: string;
  copy: string;
  bullets: string[];
};

const cards: OfferCard[] = [
  {
    number: '01',
    title: 'Comp',
    subtitle: 'Up to 200 bps',
    copy: 'Performance-based. No bonuses, no automatic raises, no overpaying unproven LOs. Stack months, earn the next tier.',
    bullets: ['Paid as W-2', '11% accounting fee, disclosed', 'Comp ladder on request'],
  },
  {
    number: '02',
    title: 'Benefits',
    subtitle: 'Full W-2 package',
    copy: "The reason most brokers can't recruit retail talent. We can. Real medical, real benefits, real safety net.",
    bullets: ['Medical via Gravie', 'Dental, vision, life, LTD/STD', 'Pet insurance — yes, the dog'],
  },
  {
    number: '03',
    title: 'Tech',
    subtitle: 'The full stack',
    copy: "Day one access to the tools you'd otherwise be paying for out of pocket. Built for how loans actually move.",
    bullets: ['ROAM AI suite', 'MX CRM + Google Workspace', 'Canva Pro + design tools'],
  },
  {
    number: '04',
    title: 'Products',
    subtitle: 'Close more deals',
    copy: "Two reasons retail LOs lose deals: not having the product, can't service the file fast enough. We fix both.",
    bullets: ['130+ investors', '2,700+ loan products', 'Commercial via Janover'],
  },
  {
    number: '05',
    title: 'Training',
    subtitle: 'Mpire University',
    copy: '4–6 week roadmap built by top producers and mortgage industry innovators. Self-paced, instructor-led, with the accountability built in. From guesswork to gameplan.',
    bullets: [
      'Foundation in 2 weeks, skills in 2 more',
      'Private FB group + weekly ROAM office hours',
      'AI prompt stacking + scripts mastery',
    ],
  },
  {
    number: '06',
    title: 'Yours',
    subtitle: 'Brand freedom',
    copy: "Operate under PrimeTime, our parent Mpire Financial, or your own personal brand. The relationships you've built are yours.",
    bullets: ['No required marks', 'Your site, your name', 'We make it stronger, not absorb it'],
  },
];

export default function Offer() {
  return (
    <section id="offer" className="section section-offer">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">What you get</p>
          <h2>The whole offer. Six things, all real.</h2>
        </div>

        <div className="offer-grid reveal">
          {cards.map((card) => (
            <article key={card.number} className="offer-card">
              <p className="offer-number">{card.number}</p>
              <p className="offer-kicker">{card.title}</p>
              <h3>{card.subtitle}</h3>
              <p>{card.copy}</p>
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
