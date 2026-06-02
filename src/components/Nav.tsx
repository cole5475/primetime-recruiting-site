const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#book';

const links = [
  { href: '#pitch', label: 'The Pitch' },
  { href: '#math', label: 'The Math' },
  { href: '#offer', label: 'The Offer' },
  { href: '#stack', label: 'The Stack' },
  { href: '#mpireu', label: 'MpireU' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" aria-label="PrimeTime Lending home">
          <span className="brand-wordmark">PrimeTime</span>
          <span className="brand-sub">LENDING</span>
          <span className="brand-micro">A branch powered by Mpire Financial LLC</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="btn btn-gold nav-cta"
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call →
        </a>
      </div>
    </nav>
  );
}
