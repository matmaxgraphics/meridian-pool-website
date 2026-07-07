import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Services</div>
          <h2>
            Every service your water
            <br />
            will ever need.
          </h2>
          <p className="lede">
            From routine chemistry to full green-to-clean recovery — one team,
            one standard, one place to manage it all.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`svc rv ${i % 4 === 1 ? 'rv-d1' : i % 4 === 2 ? 'rv-d2' : i % 4 === 3 ? 'rv-d3' : ''}`}
              tabIndex={0}
            >
              <span className="go" aria-hidden="true">→</span>
              <div className="svc-icon">
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.7"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d={s.icon} />
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
