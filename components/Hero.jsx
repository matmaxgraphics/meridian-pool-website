'use client';
import { useEffect, useRef, useState } from 'react';

function Caustics() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = ref.current;
    const ctx = c.getContext('2d');
    let w, h, t = 0, raf;

    const size = () => {
      w = c.width = window.innerWidth / 2;
      h = c.height = c.parentElement.offsetHeight / 2;
    };
    size();
    window.addEventListener('resize', size);

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.1;
      for (let i = 0; i < 14; i++) {
        ctx.beginPath();
        const yBase = (i / 14) * h;
        for (let x = 0; x <= w; x += 14) {
          const y =
            yBase +
            Math.sin(x * 0.012 + t * 2 + i) * 14 +
            Math.sin(x * 0.03 - t * 1.4 + i * 2) * 8;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(180,240,255,${0.05 + 0.05 * Math.sin(t + i)})`;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onVis = () =>
      document.hidden ? cancelAnimationFrame(raf) : draw();
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={ref} className="hero-caustics" aria-hidden="true" />;
}

function Bubbles() {
  // Generated client-side only, to avoid SSR hydration mismatch on random values.
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setBubbles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        size: 4 + Math.random() * 14,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 14,
        delay: -Math.random() * 18,
        opacity: 0.25 + Math.random() * 0.4,
      }))
    );
  }, []);

  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Caustics />
      <div className="hero-glow" aria-hidden="true" />
      <Bubbles />
      <div className="wrap">
        <h1>
          <span className="line"><span>Your Pool.</span></span>
          <span className="line"><span>Always Ready.</span></span>
        </h1>
        <p className="hero-sub">
          Weekly maintenance, equipment repair and emergency cleaning for
          homeowners who value peace of mind.
        </p>
        <div className="hero-ctas">
          <a href="#pricing" className="btn btn-primary">
            Book Inspection <span className="arr">→</span>
          </a>
          <a href="#portal" className="btn btn-ghost">
            <span className="play">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M3 1.5l7 4.5-7 4.5z" />
              </svg>
            </span>
            Watch How It Works
          </a>
        </div>
      </div>
      <div className="hero-surface" aria-hidden="true">
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
          <path
            d="M0,60 C240,110 420,10 720,55 C1020,100 1200,20 1440,65 L1440,110 L0,110 Z"
            fill="#F5FBFD"
          />
        </svg>
      </div>
      <div className="chem-ticker" aria-label="Live water chemistry from pools serviced today">
        <div className="chem-inner">
          <span><span className="dot-live" />LIVE FROM TODAY&apos;S ROUTES</span>
          <span>pH <b>7.4</b> <span className="ok">BALANCED</span></span>
          <span>CHLORINE <b>3.0 PPM</b> <span className="ok">OPTIMAL</span></span>
          <span>ALKALINITY <b>96 PPM</b> <span className="ok">IN RANGE</span></span>
          <span>WATER TEMP <b>82°F</b></span>
          <span>POOLS SERVICED TODAY <b>47</b></span>
          <span>NEXT AVAILABLE VISIT <b>TOMORROW 9:00 AM</b></span>
        </div>
      </div>
    </header>
  );
}
