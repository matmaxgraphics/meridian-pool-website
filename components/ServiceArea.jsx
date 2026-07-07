'use client';
import { useState } from 'react';
import { areas } from '@/data/services';

const HOODS = {
  hoodPflugerville: { cx: 290, cy: 70, rx: 56, ry: 34, label: 'Pflugerville' },
  hoodRoundRock: { cx: 200, cy: 96, rx: 58, ry: 36, label: 'Round Rock' },
  hoodAustin: { cx: 230, cy: 205, rx: 78, ry: 56, label: 'Austin', big: true },
  hoodWestlake: { cx: 132, cy: 238, rx: 46, ry: 30, label: 'Westlake' },
  hoodLakeway: { cx: 66, cy: 188, rx: 46, ry: 30, label: 'Lakeway' },
  hoodBeeCave: { cx: 92, cy: 302, rx: 46, ry: 28, label: 'Bee Cave' },
};

export default function ServiceArea() {
  const [active, setActive] = useState(null);

  return (
    <section id="areas">
      <div className="wrap area-grid">
        <div className="area-map rv" aria-hidden="true">
          <svg viewBox="0 0 420 386">
            <defs>
              <radialGradient id="mapGlow" cx=".5" cy=".4" r=".8">
                <stop offset="0" stopColor="#1893C4" stopOpacity=".25" />
                <stop offset="1" stopColor="#0B2A45" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="420" height="386" fill="url(#mapGlow)" />
            <path d="M30 300 q80 -40 130 -10 t130 -30 t100 20" stroke="rgba(41,198,218,.25)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <path d="M30 300 q80 -40 130 -10 t130 -30 t100 20" stroke="rgba(41,198,218,.5)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {Object.entries(HOODS).map(([id, h]) => (
              <g key={id} onClick={() => setActive(id)} style={{ cursor: 'pointer' }}>
                <ellipse
                  className={`hood ${active === id ? 'on' : ''}`}
                  cx={h.cx} cy={h.cy} rx={h.rx} ry={h.ry}
                />
                <circle className="hood-dot" cx={h.cx} cy={h.cy} r={h.big ? 3.6 : 3} />
                <text className="hood-name" x={h.cx} y={h.cy - (h.big ? 17 : 13)} textAnchor="middle">
                  {h.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="rv rv-d1">
          <div className="eyebrow">Service Area</div>
          <h2>Proudly serving Greater Austin.</h2>
          <p className="lede">
            Six service zones, routed daily. Tap your neighborhood to see local
            pricing, technicians and availability.
          </p>
          <div className="area-list">
            {areas.map((a) => (
              <button
                key={a.id}
                className={`area-item ${active === a.id ? 'on' : ''}`}
                onClick={() => setActive(a.id)}
              >
                {a.name} <span>{a.meta}</span>
                <span className="go2">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
