'use client';
import { useRef, useState } from 'react';

function PoolBefore() {
  return (
    <svg viewBox="0 0 800 425" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5A7B4A" /><stop offset=".55" stopColor="#48663E" /><stop offset="1" stopColor="#33503D" />
        </linearGradient>
        <radialGradient id="gAlgae" cx=".3" cy=".35" r=".8">
          <stop offset="0" stopColor="#7A9455" stopOpacity=".8" /><stop offset="1" stopColor="#33503D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="425" fill="#D8CBB6" />
      <rect x="60" y="55" width="680" height="315" rx="34" fill="#C4B49B" />
      <rect x="80" y="75" width="640" height="275" rx="24" fill="url(#gGreen)" />
      <ellipse cx="300" cy="180" rx="180" ry="90" fill="url(#gAlgae)" />
      <ellipse cx="560" cy="260" rx="140" ry="70" fill="url(#gAlgae)" opacity=".7" />
      <circle cx="200" cy="130" r="4" fill="#8CA063" opacity=".8" />
      <circle cx="240" cy="300" r="6" fill="#8CA063" opacity=".6" />
      <circle cx="640" cy="140" r="5" fill="#8CA063" opacity=".7" />
      <path d="M120 330 q40 -14 80 0 t80 0 t80 0" stroke="#2E4636" strokeWidth="6" fill="none" opacity=".4" strokeLinecap="round" />
    </svg>
  );
}

function PoolAfter() {
  return (
    <svg viewBox="0 0 800 425" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="gClean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4FD4E8" /><stop offset=".5" stopColor="#1893C4" /><stop offset="1" stopColor="#0E6BA8" />
        </linearGradient>
        <radialGradient id="gShine" cx=".32" cy=".28" r=".7">
          <stop offset="0" stopColor="#B8F0F8" stopOpacity=".9" /><stop offset="1" stopColor="#1893C4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="425" fill="#EDE4D3" />
      <rect x="60" y="55" width="680" height="315" rx="34" fill="#DCCFB6" />
      <rect x="80" y="75" width="640" height="275" rx="24" fill="url(#gClean)" />
      <ellipse cx="290" cy="160" rx="190" ry="85" fill="url(#gShine)" />
      <path d="M110 140 q60 -18 120 0 t120 0 t120 0 t120 0" stroke="#CFF6FB" strokeWidth="3.5" fill="none" opacity=".65" strokeLinecap="round" />
      <path d="M130 220 q60 -16 120 0 t120 0 t120 0 t110 0" stroke="#CFF6FB" strokeWidth="3" fill="none" opacity=".45" strokeLinecap="round" />
      <path d="M120 295 q60 -14 120 0 t120 0 t120 0" stroke="#A8E9F4" strokeWidth="3" fill="none" opacity=".35" strokeLinecap="round" />
      <rect x="360" y="75" width="12" height="70" rx="6" fill="#EDF7FA" opacity=".85" />
      <rect x="330" y="140" width="140" height="8" rx="4" fill="#EDF7FA" opacity=".7" />
    </svg>
  );
}

export default function BeforeAfter() {
  const [cut, setCut] = useState(50);
  const dragging = useRef(false);
  const boxRef = useRef(null);

  const clamp = (v) => Math.max(2, Math.min(98, v));

  const setFromClientX = (clientX) => {
    const r = boxRef.current.getBoundingClientRect();
    setCut(clamp(((clientX - r.left) / r.width) * 100));
  };

  return (
    <section className="ba-sec" id="results">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Results</div>
          <h2>Drag the line. See the difference.</h2>
          <p className="lede">
            A real green-to-clean recovery, completed in 4 days. Every job is
            documented with photos in your portal.
          </p>
        </div>
        <div
          ref={boxRef}
          className="ba rv rv-d1"
          style={{ '--cut': `${cut}%` }}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(cut)}
          tabIndex={0}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { setCut((c) => clamp(c - 4)); e.preventDefault(); }
            if (e.key === 'ArrowRight') { setCut((c) => clamp(c + 4)); e.preventDefault(); }
          }}
        >
          <div className="ba-side" aria-hidden="true"><PoolBefore /></div>
          <div className="ba-side ba-after" aria-hidden="true"><PoolAfter /></div>
          <span className="ba-tag b">Before · Day 0</span>
          <span className="ba-tag a">After · Day 4</span>
          <div className="ba-handle" aria-hidden="true" />
        </div>
        <div className="ba-stats rv rv-d2">
          <div className="stat"><b><em>4</em> days</b><span>Average recovery time</span></div>
          <div className="stat"><b>2,400+</b><span>Documented transformations</span></div>
          <div className="stat"><b><em>100</em>%</b><span>Photo-verified visits</span></div>
        </div>
      </div>
    </section>
  );
}
