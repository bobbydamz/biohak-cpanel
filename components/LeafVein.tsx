export default function LeafVein() {
  return (
    <svg
      viewBox="0 0 900 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Central spine */}
      <path
        className="vein-path"
        d="M450 0 C 460 80, 440 160, 450 240 C 460 320, 440 400, 450 500"
        stroke="#7CB518"
        strokeOpacity="0.18"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left veins */}
      <path
        className="vein-path"
        d="M450 60 C 380 90, 320 80, 260 40"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="vein-path"
        d="M450 150 C 370 175, 300 170, 220 130"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="vein-path"
        d="M450 250 C 360 270, 280 268, 190 230"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="vein-path"
        d="M450 350 C 370 375, 300 372, 230 335"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Right veins */}
      <path
        className="vein-path"
        d="M450 60 C 520 90, 580 80, 640 40"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="vein-path"
        d="M450 150 C 530 175, 600 170, 680 130"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="vein-path"
        d="M450 250 C 540 270, 620 268, 710 230"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="vein-path"
        d="M450 350 C 530 375, 600 372, 670 335"
        stroke="#7CB518"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
