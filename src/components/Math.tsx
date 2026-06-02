'use client';

import { useMemo, useState } from 'react';

type VolumeMode = 'estimate' | 'actual';

const W2_MULTIPLIER = 0.89;
const VOLUME_1099_THRESHOLD = 10_000_000;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function parseDollarInput(raw: string): number {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return 0;
  return Number(digits);
}

export default function Math() {
  const [volumeMode, setVolumeMode] = useState<VolumeMode>('estimate');
  const [retailBps, setRetailBps] = useState(100);
  const [primeTimeBps, setPrimeTimeBps] = useState(175);
  const [loanAmount, setLoanAmount] = useState(400_000);
  const [loansPerMonth, setLoansPerMonth] = useState(4);
  const [totalVolume, setTotalVolume] = useState(0);
  const [totalVolumeInput, setTotalVolumeInput] = useState('');
  const [is1099, setIs1099] = useState(false);

  const primeMultiplier = is1099 ? 1 : W2_MULTIPLIER;

  const figures = useMemo(() => {
    let loansPerYear = 0;
    let annualVolume = 0;
    let annualRetail = 0;
    let annualPrime = 0;

    if (volumeMode === 'estimate') {
      loansPerYear = loansPerMonth * 12;
      annualVolume = loanAmount * loansPerYear;
      annualRetail = (retailBps / 10_000) * loanAmount * loansPerYear;
      annualPrime = (primeTimeBps / 10_000) * loanAmount * loansPerYear * primeMultiplier;
    } else {
      annualVolume = totalVolume;
      loansPerYear = loanAmount > 0 ? totalVolume / loanAmount : 0;
      annualRetail = (retailBps / 10_000) * totalVolume;
      annualPrime = (primeTimeBps / 10_000) * totalVolume * primeMultiplier;
    }

    const retailPerLoan = (retailBps / 10_000) * loanAmount;
    const primePerLoan = (primeTimeBps / 10_000) * loanAmount * primeMultiplier;
    const retailPerMonth = annualRetail / 12;
    const primePerMonth = annualPrime / 12;

    return {
      loansPerYear,
      annualVolume,
      annualRetail,
      annualPrime,
      retailPerLoan,
      primePerLoan,
      retailPerMonth,
      primePerMonth,
      retailPerYear: annualRetail,
      primePerYear: annualPrime,
      annualDifference: annualPrime - annualRetail,
    };
  }, [
    volumeMode,
    retailBps,
    primeTimeBps,
    loanAmount,
    loansPerMonth,
    totalVolume,
    primeMultiplier,
  ]);

  const show1099EligibilityNotice =
    !is1099 && figures.annualVolume > VOLUME_1099_THRESHOLD;

  const loanAmountDisplay = loanAmount.toLocaleString('en-US');

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

        <div className="math-calculator reveal">
          <div
            className="math-mode-toggle"
            role="tablist"
            aria-label="Volume input mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={volumeMode === 'estimate'}
              className={`math-mode-btn${volumeMode === 'estimate' ? ' math-mode-btn--active' : ''}`}
              onClick={() => setVolumeMode('estimate')}
            >
              Estimate
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={volumeMode === 'actual'}
              className={`math-mode-btn${volumeMode === 'actual' ? ' math-mode-btn--active' : ''}`}
              onClick={() => setVolumeMode('actual')}
            >
              Actual Volume
            </button>
          </div>

          <div className="math-calc-inputs">
            {volumeMode === 'estimate' ? (
              <div className="math-inputs-mode">
                <label className="math-field">
                  <span className="math-field-label">Loan amount ($)</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={loanAmountDisplay}
                    onChange={(e) => setLoanAmount(parseDollarInput(e.target.value))}
                    className="math-field-input"
                    aria-label="Average loan amount in dollars"
                  />
                </label>

                <label className="math-field">
                  <span className="math-field-label">Loans per month</span>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    value={loansPerMonth}
                    onChange={(e) => setLoansPerMonth(Number(e.target.value) || 0)}
                    className="math-field-input"
                  />
                </label>
              </div>
            ) : (
              <div className="math-inputs-mode math-inputs-mode--actual">
                <label className="math-field">
                  <span className="math-field-label">Last 12 months total volume ($)</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={totalVolumeInput}
                    placeholder="Enter total volume"
                    onChange={(e) => {
                      setTotalVolumeInput(e.target.value);
                      setTotalVolume(parseDollarInput(e.target.value));
                    }}
                    className="math-field-input"
                    aria-label="Last 12 months total volume in dollars"
                  />
                </label>
              </div>
            )}

            <label className="math-field">
              <span className="math-field-label">Current comp (bps)</span>
              <input
                type="number"
                min={0}
                max={500}
                value={retailBps}
                onChange={(e) => setRetailBps(Number(e.target.value) || 0)}
                className="math-field-input"
              />
            </label>

            <div className="math-field math-field-slider">
              <div className="math-field-slider-head">
                <span className="math-field-label">PrimeTime comp</span>
                <span className="math-slider-value">{primeTimeBps} bps</span>
              </div>
              <input
                type="range"
                min={150}
                max={200}
                step={1}
                value={primeTimeBps}
                onChange={(e) => setPrimeTimeBps(Number(e.target.value))}
                className="math-slider"
                aria-valuemin={150}
                aria-valuemax={200}
                aria-valuenow={primeTimeBps}
              />
              <div className="math-slider-ticks" aria-hidden="true">
                <span>150</span>
                <span>200</span>
              </div>
            </div>
          </div>

          <div className="math-panel math-panel-output">
            <article className="math-col">
              <h3>Your retail today</h3>
              <ul>
                <li>
                  <span>Per loan</span>
                  <strong className="math-output-retail">
                    {formatCurrency(figures.retailPerLoan)}
                  </strong>
                </li>
                <li>
                  <span>Per month</span>
                  <strong className="math-output-retail">
                    {formatCurrency(figures.retailPerMonth)}
                  </strong>
                </li>
                <li>
                  <span>Per year</span>
                  <strong className="math-output-retail">
                    {formatCurrency(figures.retailPerYear)}
                  </strong>
                </li>
              </ul>
            </article>

            <div className="math-col-divider" aria-hidden="true" />

            <article className="math-col math-col-gold">
              <h3>PrimeTime</h3>
              <ul>
                <li>
                  <span>Per loan</span>
                  <strong className="math-output-prime">
                    {formatCurrency(figures.primePerLoan)}
                  </strong>
                </li>
                <li>
                  <span>Per month</span>
                  <strong className="math-output-prime">
                    {formatCurrency(figures.primePerMonth)}
                  </strong>
                </li>
                <li>
                  <span>Per year</span>
                  <strong className="math-output-prime">
                    {formatCurrency(figures.primePerYear)}
                  </strong>
                </li>
              </ul>
              {!is1099 && (
                <p className="math-fee-note">11% accounting fee deducted</p>
              )}
            </article>
          </div>

          <div className="math-callout math-callout-diff">
            <p className="math-multiple text-gold">
              {figures.annualDifference >= 0 ? '+' : ''}
              {formatCurrency(figures.annualDifference)}
            </p>
            <p className="math-diff-label">ANNUAL DIFFERENCE</p>
          </div>

          <div className="math-calculator-extras">
            {!is1099 && (
              <p className="math-w2-benefits">
                W-2 package included: Medical via Gravie · Dental · Vision · Life · LTD/STD
              </p>
            )}

            {show1099EligibilityNotice && (
              <div className="math-volume-notice" role="status">
                This LO may be eligible for 1099 status depending on their state. Toggle below to
                compare.
              </div>
            )}

            <label className="math-1099-row">
              <span className="math-1099-label">10M+ Annual Volume — 1099 Eligible</span>
              <input
                type="checkbox"
                className="math-1099-switch"
                checked={is1099}
                onChange={(e) => setIs1099(e.target.checked)}
              />
              <span className="math-1099-switch-ui" aria-hidden="true" />
            </label>

            {is1099 && (
              <p className="math-1099-note">
                No accounting fee · 1099 structure · Eligibility varies by state
              </p>
            )}
          </div>

          <p className="math-calculator-tagline">
            No loan cap. Every basis point on every dollar, paid out.
          </p>
        </div>
      </div>
    </section>
  );
}
