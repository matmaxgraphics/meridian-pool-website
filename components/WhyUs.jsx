import { whyItems } from '@/data/services';

export default function WhyUs() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Why Meridian</div>
          <h2>
            Built like a product,
            <br />
            not a contractor.
          </h2>
        </div>
        <div className="why-grid">
          {whyItems.map((w, i) => (
            <div key={w.num} className={`why rv ${i % 3 === 1 ? 'rv-d1' : i % 3 === 2 ? 'rv-d2' : ''}`}>
              <span className="num">{w.num}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
