const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#book';
const branchNmls = process.env.NEXT_PUBLIC_BRANCH_NMLS || '';
const licensedStates = process.env.NEXT_PUBLIC_LICENSED_STATES || '';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <p className="brand-wordmark">PrimeTime</p>
          <p className="brand-sub">A branch powered by Mpire Financial LLC</p>
          <p>
            A broker shop built like a retail team. PrimeTime Lending operates as a branch of Mpire
            Financial LLC, which provides the licensing, infrastructure, and W-2 employment backing
            every loan we close.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Site</h3>
            <ul>
              <li>
                <a href="#pitch">The Pitch</a>
              </li>
              <li>
                <a href="#math">The Math</a>
              </li>
              <li>
                <a href="#offer">The Offer</a>
              </li>
              <li>
                <a href="#stack">The Stack</a>
              </li>
              <li>
                <a href="#mpireu">MpireU</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:cole@mpirefi.com">cole@mpirefi.com</a>
              </li>
              <li>
                <a href="tel:+18135798812">(813) 579-8812</a>
              </li>
              <li>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <a
                  href="https://www.nmlsconsumeraccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NMLS Consumer Access
                </a>
              </li>
              <li>
                <a
                  href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Equal Housing Lender
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © 2026 Mpire Financial LLC · DBA PrimeTime Lending · NMLS #{branchNmls} · Cole Brantley
            NMLS #1905939
          </p>
          <p>Licensed in {licensedStates}</p>
        </div>
      </div>
    </footer>
  );
}
