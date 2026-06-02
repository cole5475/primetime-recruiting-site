const phaseOne = [
  'Business Planning & Goal Setting',
  'Time Management & Accountability',
  'Social Media Strategy & Compliance',
  'AI Prompt Stacking & Marketing Tools',
  'Loan Programs: FHA, VA, Conv, USDA, HELOC',
];

const phaseTwo = [
  'Application & Scripts Mastery',
  'Social Selling & Referral',
  'Partner Strategy',
  'Branding & Business Media',
  'Loan Programs: DSCR, Non-QM, One-Time-Close',
  'Success Track Prep',
];

const accessChannels = [
  {
    name: 'MpireU Private Facebook Group',
    desc: 'Daily peer-to-peer learning, wins, and breakdowns.',
  },
  {
    name: 'Weekly ROAM Office Hours',
    desc: 'Live Q&A with instructors. Bring your real situations.',
  },
  {
    name: 'MpireU Group Chat',
    desc: 'Always-on coaching. Send a question, get an answer.',
  },
];

export default function MpireU() {
  return (
    <section id="mpireu" className="section section-mpireu">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Mpire University</p>
          <h2>
            From guesswork to <span className="text-gold">gameplan.</span>
          </h2>
          <p className="lede">
            A 4–6 week roadmap built by top producers and mortgage industry innovators.
            Self-paced, instructor-led, with accountability built in. The training that turns a
            struggling LO into a producer — and a producer into a top one.
          </p>
        </div>

        <div className="mpireu-grid reveal">
          <article className="curriculum-card">
            <p className="curriculum-phase">Phase 01 · Weeks 1-2</p>
            <h3>Foundation &amp; Structure</h3>
            <ul>
              {phaseOne.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="curriculum-card">
            <p className="curriculum-phase">Phase 02 · Weeks 3-4</p>
            <h3>Skills &amp; Brand Building</h3>
            <ul>
              {phaseTwo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mpireu-access reveal">
          <h3>Access</h3>
          <ul>
            {accessChannels.map((channel) => (
              <li key={channel.name} className="access-item">
                <strong>{channel.name}</strong>
                <p>{channel.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mpireu-footer reveal">
          <p>Self-paced, 1–2 hours/day · Built by top producers</p>
          <a href="https://mpireu.com" target="_blank" rel="noopener noreferrer">
            mpireu.com
          </a>
        </div>
      </div>
    </section>
  );
}
