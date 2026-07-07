export default function Logo({ size = 26 }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" width={size} height={size} aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 18c3-2.4 5.5-2.4 8.5 0s5.5 2.4 8.5 0 4.2-2.1 5-1.6"
        stroke="#29C6DA"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M8 12.5c2.2-1.8 4-1.8 6.2 0s4 1.8 6.2 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}
