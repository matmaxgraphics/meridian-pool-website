export default function Stats() {
  return (
    <section className="trusted" aria-label="Company statistics">
      <div className="wrap trusted-row rv">
        <div className="trusted-label">
          Trusted across Greater Austin
          <br />
          since 2013
        </div>
        <div className="stats">
          <div className="stat"><b data-count="1200">0</b><span>Pools under care</span></div>
          <div className="stat"><b data-count="13">0</b><span>Years in service</span></div>
          <div className="stat"><b><em data-count="98">0</em>%</b><span>Retention rate</span></div>
          <div className="stat"><b data-count="4.9" data-dec="1">0</b><span>Average rating</span></div>
        </div>
      </div>
    </section>
  );
}
