import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <a className="logo" href="#top"><Logo /> Meridian Pools</a>
            <p className="f-tag">
              Next-generation pool care for Greater Austin. Booking,
              memberships, live reports and a portal that keeps your water
              honest.
            </p>
          </div>
          <div className="f-col">
            <h4>Services</h4>
            <a href="#services">Weekly Maintenance</a>
            <a href="#services">Green-to-Clean Recovery</a>
            <a href="#services">Equipment Installation</a>
            <a href="#services">Pool Opening &amp; Closing</a>
            <a href="#services">Vacation Pool Care</a>
          </div>
          <div className="f-col">
            <h4>Company</h4>
            <a href="#why">Why Meridian</a>
            <a href="#reviews">Reviews</a>
            <a href="#areas">Service Area</a>
            <a href="#faq">FAQs</a>
            <a href="#cta">Careers</a>
          </div>
          <div className="f-col">
            <h4>Resources</h4>
            <a href="#faq">How often to clean your pool</a>
            <a href="#faq">Signs your pump is failing</a>
            <a href="#faq">Pool maintenance cost in Austin</a>
            <a href="#faq">Green pool recovery guide</a>
            <a href="#faq">Summer pool checklist</a>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2026 Meridian Pools · Austin, TX</span>
          <span className="chem">
            TODAY&apos;S ROUTE AVG — pH <b>7.4</b> · CL <b>3.0 PPM</b> · <b>ALL POOLS BALANCED</b>
          </span>
        </div>
      </div>
    </footer>
  );
}
