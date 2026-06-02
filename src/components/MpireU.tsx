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
          <h2>For LOs who are early, stuck, or rebuilding.</h2>
          <p className="lede">
            MpireU isn&apos;t for everyone. It&apos;s built for loan officers who are new to the
            business, struggling to find consistency, or ready to rebuild with the right system. If
            you&apos;re already producing at a high level, you&apos;ll skip this and go straight to
            work. If you&apos;re not — this is the roadmap.
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
