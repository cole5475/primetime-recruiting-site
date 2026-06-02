const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#book';

export default function FinalCTA() {
  return (
    <section id="book" className="section section-final-cta">
      <div className="container">
        <div className="final-cta-inner reveal">
          <p className="eyebrow">Take the call</p>
          <h2>
            30 minutes. <span className="text-gold">No pressure.</span>
          </h2>
          <p>
            Bring your last 12 months of production. We&apos;ll run the math live and you&apos;ll know
            inside half an hour whether the move makes sense for you.
          </p>

          <a className="btn btn-gold" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call →
          </a>

          <a className="final-cta-alt" href="mailto:cole@mpirefi.com">
            Prefer email? cole@mpirefi.com · Or text (813) 579-8812
          </a>
        </div>
      </div>
    </section>
  );
}
