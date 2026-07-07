'use client';
import { useEffect } from 'react';

/** Wires up scroll-reveal (.rv) and animated counters ([data-count]) globally. */
export default function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));

    const fmt = (n, dec) =>
      n.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          const target = parseFloat(el.dataset.count);
          const dec = +(el.dataset.dec || 0);
          cio.unobserve(el);
          if (reduced) {
            el.textContent = fmt(target, dec);
            return;
          }
          const t0 = performance.now();
          const dur = 1600;
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / dur);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(target * ease, dec);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

    return () => {
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}
