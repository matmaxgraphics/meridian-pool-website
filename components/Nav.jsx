'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a className="logo" href="#top" aria-label="Meridian Pools home">
        <Logo /> Meridian Pools
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#memberships">Memberships</a>
        <a href="#portal">Customer Portal</a>
        <a href="#areas">Service Area</a>
      </div>
      <a href="#pricing" className="btn btn-primary nav-cta">
        Book Inspection
      </a>
    </nav>
  );
}
