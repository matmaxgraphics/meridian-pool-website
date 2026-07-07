import { plans } from '@/data/services';
import Check from './Check';

export default function Memberships() {
  return (
    <section id="memberships">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Memberships</div>
          <h2>
            Pool care you never
            <br />
            have to think about.
          </h2>
          <p className="lede">
            One subscription. Automatic visits, automatic billing, a full
            report after every service — cancel anytime.
          </p>
        </div>
        <div className="plans">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`plan ${p.featured ? 'plan-featured' : 'plan-basic'} rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : ''}`}
            >
              <div className="plan-name">
                {p.name}
                {p.featured && <span className="badge">Most popular</span>}
              </div>
              <div className="plan-price">
                ${p.price}
                <span>/mo</span>
              </div>
              <p className="plan-desc">{p.desc}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={p.featured ? 'btn btn-primary' : 'btn'}
                style={p.featured ? { background: '#fff', color: 'var(--ink)' } : undefined}
              >
                Subscribe Monthly
              </a>
            </div>
          ))}
        </div>
        <p className="mini-note rv">
          Members save an average of <b>$490 per year</b> versus one-time
          bookings — and never think about their pool again.
        </p>
      </div>
    </section>
  );
}
