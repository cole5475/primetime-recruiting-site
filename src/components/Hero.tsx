const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#book';

const stats = [
  { value: '200 bps', label: 'Up to LO comp' },
  { value: '130+', label: 'Investors' },
  { value: '2,700+', label: 'Loan products' },
  { value: 'W-2', label: 'Full benefits' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner reveal">
        <p className="eyebrow">For Retail Loan Officers</p>
        <h1>
          Retail backbone.
          <br />
          <span className="text-gold">Broker upside.</span>
        </h1>
        <p className="hero-subhead">
          PrimeTime is a broker shop built like a retail team. Close more deals, keep more comp,
          never lose the team around you.
        </p>

        <div className="hero-ctas">
          <a className="btn btn-gold" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a 30-min call →
          </a>
          <a className="btn btn-ghost" href="#math">
            See the comp math ↓
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
