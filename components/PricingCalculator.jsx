'use client';
import { useMemo, useState } from 'react';

const SIZES = [
  { name: 'Small', note: 'up to 12k gal', rate: 79 },
  { name: 'Medium', note: '12–20k gal', rate: 95 },
  { name: 'Large', note: '20–30k gal', rate: 119 },
  { name: 'Luxury', note: '30k+ / resort', rate: 159 },
];
const FREQUENCIES = [
  { name: 'Weekly', perMonth: 4.33 },
  { name: 'Biweekly', perMonth: 2.17 },
  { name: 'Monthly', perMonth: 1 },
];
const EXTRAS = [
  { name: 'Hot tub', price: 25 },
  { name: 'Salt system', price: 20 },
  { name: 'Equipment inspection', price: 30 },
];

const money = (n) => Math.round(n).toLocaleString('en-US');

export default function PricingCalculator() {
  const [size, setSize] = useState(SIZES[0]);
  const [freq, setFreq] = useState(FREQUENCIES[0]);
  const [extras, setExtras] = useState([]);

  const toggleExtra = (extra) =>
    setExtras((prev) =>
      prev.includes(extra.name)
        ? prev.filter((n) => n !== extra.name)
        : [...prev, extra.name]
    );

  const quote = useMemo(() => {
    const base = size.rate * freq.perMonth;
    const extrasPerVisit = EXTRAS.filter((e) => extras.includes(e.name)).reduce(
      (sum, e) => sum + e.price,
      0
    );
    const extrasMo = extrasPerVisit * freq.perMonth;
    const total = base + extrasMo;
    return { base, extrasMo, total, memberSavings: total * 0.12 };
  }, [size, freq, extras]);

  return (
    <section className="calc-sec" id="pricing">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Instant Pricing</div>
          <h2>
            Know your price before
            <br />
            you pick up the phone.
          </h2>
          <p className="lede">
            No hidden quotes, no callbacks. Configure your pool and watch the
            price update in real time.
          </p>
        </div>
        <div className="calc rv rv-d1">
          <div className="calc-panel">
            <div className="calc-step">
              <span className="calc-label">01 · Pool size</span>
              <div className="seg" role="radiogroup" aria-label="Pool size">
                {SIZES.map((s) => (
                  <button
                    key={s.name}
                    className={size.name === s.name ? 'on' : ''}
                    role="radio"
                    aria-checked={size.name === s.name}
                    onClick={() => setSize(s)}
                  >
                    {s.name} <small>{s.note}</small>
                  </button>
                ))}
              </div>
            </div>
            <div className="calc-step">
              <span className="calc-label">02 · Visit frequency</span>
              <div className="seg" role="radiogroup" aria-label="Visit frequency">
                {FREQUENCIES.map((f) => (
                  <button
                    key={f.name}
                    className={freq.name === f.name ? 'on' : ''}
                    role="radio"
                    aria-checked={freq.name === f.name}
                    onClick={() => setFreq(f)}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="calc-step">
              <span className="calc-label">03 · Extras</span>
              <div className="chk">
                {EXTRAS.map((e) => {
                  const on = extras.includes(e.name);
                  return (
                    <button
                      key={e.name}
                      className={on ? 'on' : ''}
                      aria-pressed={on}
                      onClick={() => toggleExtra(e)}
                    >
                      <span className="tick">✓</span> {e.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="quote" aria-live="polite">
            <span className="quote-label">Your estimate</span>
            <div className="quote-price">
              ${money(quote.total)}
              <span className="per">/ month</span>
            </div>
            <span className="save-chip">
              MEMBERS SAVE ${money(quote.memberSavings)} / MO
            </span>
            <div className="quote-lines">
              <div>
                <span>{freq.name} visits × {size.name} pool</span>
                <b>${money(quote.base)}</b>
              </div>
              <div>
                <span>Extras</span>
                <b>{quote.extrasMo ? `$${money(quote.extrasMo)}` : '$0'}</b>
              </div>
              <div>
                <span>Chemicals &amp; testing</span>
                <b>Included</b>
              </div>
            </div>
            <a href="#memberships" className="btn">
              See membership savings <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
