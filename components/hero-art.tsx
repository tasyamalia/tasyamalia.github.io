export function HeroArt() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-screen -translate-x-1/2 overflow-hidden"
      aria-hidden="true"
    >
      <div className="hero-grid-field absolute inset-0" />
      <div className="hero-left-light absolute inset-0" />
      <div className="art-orbit-subtle absolute left-[16%] top-[18%] h-44 w-44 rounded-full border border-green/10" />
      <div className="art-orbit-subtle art-orbit-delay absolute right-[14%] top-[20%] h-72 w-72 rounded-full border border-blue/10" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 520" fill="none">
        <path
          className="art-path-drift"
          d="M84 366 C226 244 318 410 470 286 S726 148 888 260 1014 374 1128 218"
          stroke="url(#heroPathGreen)"
          strokeWidth="1.2"
          strokeDasharray="10 18"
          opacity="0.36"
        />
        <path
          className="art-path-drift art-path-drift-delay"
          d="M170 116 C330 54 436 174 556 132 S758 42 910 132 1012 210 1132 144"
          stroke="url(#heroPathGold)"
          strokeWidth="1"
          strokeDasharray="4 14"
          opacity="0.28"
        />
        {[
          [162, 320],
          [386, 250],
          [608, 168],
          [826, 242],
          [1040, 260]
        ].map(([cx, cy], index) => (
          <circle
            className="art-pulse-dot"
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill={index % 2 ? "#E4B15B" : "#52E58C"}
            opacity={index % 2 ? "0.72" : "0.82"}
          />
        ))}
        <defs>
          <linearGradient id="heroPathGreen" x1="80" y1="300" x2="1120" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52E58C" stopOpacity="0" />
            <stop offset="0.42" stopColor="#52E58C" />
            <stop offset="1" stopColor="#4DA8FF" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="heroPathGold" x1="170" y1="120" x2="1132" y2="144" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B36DFF" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#E4B15B" />
            <stop offset="1" stopColor="#52E58C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
