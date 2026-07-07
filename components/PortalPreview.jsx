export default function PortalPreview() {
  return (
    <section className="dash-sec" id="portal" style={{ paddingTop: 110 }}>
      <div className="wrap dash-grid">
        <div className="rv">
          <div className="eyebrow">Customer Portal</div>
          <h2>Your pool&apos;s health, live on your phone.</h2>
          <p className="lede">
            After every visit, your technician uploads photos, chemical
            readings and notes — you get notified before they&apos;ve left the
            driveway.
          </p>
          <ul className="dash-points">
            <li>
              <span className="pt-ic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              See your next visit, technician and route ETA
            </li>
            <li>
              <span className="pt-ic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.8s-4.6 4.9-4.6 8a4.6 4.6 0 009.2 0c0-3.1-4.6-8-4.6-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              Track water quality and chemical balance over time
            </li>
            <li>
              <span className="pt-ic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="6" cy="6.5" r="1.4" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2.5 12l3.4-3.2 2.6 2.4 3-3.2 2 2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              Before &amp; after photos from every single visit
            </li>
            <li>
              <span className="pt-ic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2.5h10v11l-1.7-1.2L9.6 13.5 8 12.3l-1.6 1.2-1.7-1.2L3 13.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M5.5 6h5M5.5 8.5h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              View invoices and pay online in one tap
            </li>
          </ul>
        </div>
        <div className="portal rv rv-d1" aria-label="Customer portal preview">
          <div className="portal-top">
            <div className="hi">
              Hello, John <small>Barton Creek · Premium member</small>
            </div>
            <div className="avatar">JM</div>
          </div>
          <div className="portal-grid">
            <div className="pcard">
              <div className="k">Next visit</div>
              <div className="v">Tuesday <small>9:00 AM</small></div>
            </div>
            <div className="pcard">
              <div className="k">Technician</div>
              <div className="v">Michael R. <small>★ 4.9</small></div>
            </div>
            <div className="pcard wq">
              <div className="ring" style={{ position: 'relative' }}><b>98%</b></div>
              <div className="wq-meta">
                <div className="k" style={{ margin: 0 }}>Water quality</div>
                <b>Chemical balance: Excellent</b>
                <span className="chip-ok">● pH 7.4 · CL 3.0 PPM · ALK 96</span>
              </div>
            </div>
            <div className="pcard photos">
              <div className="k">Recent photos — Jul 3 visit</div>
              <div className="photos-row">
                <div className="ph ph-before"><span>Before</span></div>
                <div className="ph ph-after"><span>After</span></div>
              </div>
            </div>
            <div className="pcard inv">
              <div>
                <div className="k">Invoice #2193 · Weekly maintenance</div>
                <div className="v">$95.00</div>
              </div>
              <span className="paid">● PAID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
