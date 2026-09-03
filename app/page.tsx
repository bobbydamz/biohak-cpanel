import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";

const INSTAGRAM_HANDLE = "@biohakwellness"; // STUB: update if different
const INSTAGRAM_URL = "https://instagram.com/biohakwellness"; // STUB: update if different

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-3 sm:gap-4 px-6 py-4">
      {/* Soft radial glow behind the logo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] max-w-[200vw] rounded-full opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 65%)",
        }}
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative z-10 fade-up shrink-0 scale-90 sm:scale-100">
        <Logo />
      </div>

      {/* Headline block */}
      <div className="relative z-10 text-center">
        <h1 className="fade-up [animation-delay:0.15s] font-display font-bold text-ink leading-[1.05] text-2xl sm:text-4xl md:text-5xl max-w-3xl">
          Clean Wellness, Made Simple.
        </h1>

        <p className="fade-up [animation-delay:0.3s] mt-2 sm:mt-3 text-sm sm:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed">
          Science-backed supplements with purposeful ingredients, meaningful
          doses and clear information — designed for everyday health and
          wellbeing.
        </p>
      </div>

      {/* Email signup */}
      <p className="relative z-10 fade-up [animation-delay:0.4s] text-sm sm:text-lg text-ink text-center">
        Something better for everyday wellness is coming.
      </p>
      <div className="relative z-10 fade-up [animation-delay:0.45s] w-full flex justify-center">
        <EmailSignup />
      </div>

      <p className="relative z-10 fade-up [animation-delay:0.55s] text-xs sm:text-base font-semibold text-ink/70 text-center">
        Thoughtful Science. Clean supplements. Better everyday wellness.
      </p>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 fade-up [animation-delay:0.6s] inline-flex items-center gap-2 text-ink hover:text-botanical-dark transition-colors text-sm sm:text-lg font-medium"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
        </svg>
        {INSTAGRAM_HANDLE}
      </a>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 text-center shrink-0">
        <p className="text-[0.65rem] sm:text-sm text-ink tracking-wide">
          Made with science. Inspired by wellbeing.
        </p>
      </footer>
    </main>
  );
}
