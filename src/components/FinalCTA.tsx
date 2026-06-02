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
            Bring your last 12 months of production and we&apos;ll map out what this could look like
            for your pipeline, your comp, and your day-to-day.
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
