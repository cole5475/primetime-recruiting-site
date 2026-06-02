'use client';

import { useMemo, useState } from 'react';

const ACCOUNTING_FEE = 0.11;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function compPerLoan(bps: number, loanAmount: number): number {
  return (bps / 10_000) * loanAmount;
}

function parseLoanInput(raw: string): number {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return 0;
  return Number(digits);
}

export default function Math() {
  const [retailBps, setRetailBps] = useState(100);
  const [loanAmount, setLoanAmount] = useState(400_000);
  const [loansPerMonth, setLoansPerMonth] = useState(4);
  const [primeTimeBps, setPrimeTimeBps] = useState(175);

  const figures = useMemo(() => {
    const retailPerLoan = compPerLoan(retailBps, loanAmount);
    const primeGrossPerLoan = compPerLoan(primeTimeBps, loanAmount);
    const primePerLoan = primeGrossPerLoan * (1 - ACCOUNTING_FEE);

    const retailPerMonth = retailPerLoan * loansPerMonth;
    const primePerMonth = primePerLoan * loansPerMonth;

    const retailPerYear = retailPerMonth * 12;
    const primePerYear = primePerMonth * 12;

    const annualDifference = primePerYear - retailPerYear;

    return {
      retailPerLoan,
      retailPerMonth,
      retailPerYear,
      primePerLoan,
      primePerMonth,
      primePerYear,
      annualDifference,
    };
  }, [retailBps, loanAmount, loansPerMonth, primeTimeBps]);

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
          <div className="math-calculator-inputs">
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

            <label className="math-field">
              <span className="math-field-label">Average loan amount ($)</span>
              <input
                type="text"
                inputMode="numeric"
                value={loanAmountDisplay}
                onChange={(e) => setLoanAmount(parseLoanInput(e.target.value))}
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
                  <strong className="math-calc-value">{formatCurrency(figures.retailPerLoan)}</strong>
                </li>
                <li>
                  <span>Per month</span>
                  <strong className="math-calc-value">{formatCurrency(figures.retailPerMonth)}</strong>
                </li>
                <li>
                  <span>Per year</span>
                  <strong className="math-calc-value">{formatCurrency(figures.retailPerYear)}</strong>
                </li>
              </ul>
            </article>

            <div className="math-col-divider" aria-hidden="true" />

            <article className="math-col math-col-gold">
              <h3>PrimeTime</h3>
              <ul>
                <li>
                  <span>Per loan</span>
                  <strong className="math-calc-value">{formatCurrency(figures.primePerLoan)}</strong>
                </li>
                <li>
                  <span>Per month</span>
                  <strong className="math-calc-value">{formatCurrency(figures.primePerMonth)}</strong>
                </li>
                <li>
                  <span>Per year</span>
                  <strong className="math-calc-value">{formatCurrency(figures.primePerYear)}</strong>
                </li>
              </ul>
            </article>
          </div>

          <div className="math-callout math-callout-diff">
            <p className="math-diff-value text-gold">
              {figures.annualDifference >= 0 ? '+' : ''}
              {formatCurrency(figures.annualDifference)}
            </p>
            <p className="math-diff-label">Annual difference</p>
          </div>

          <p className="math-calculator-tagline">
            No loan cap. Every basis point on every dollar, paid out.
          </p>
        </div>
      </div>
    </section>
  );
}
