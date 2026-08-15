const WAVE =
  "M0 50C240 30 480 30 720 50 960 70 1200 70 1440 50V80H0Z";

function waveImage(fill: string) {
  return `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none"><path fill="${fill}" d="${WAVE}"/></svg>`,
  )}")`;
}

export function WaveDivider({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 overflow-hidden md:h-24"
      aria-hidden
    >
      <div
        className="wave-track absolute bottom-0 left-0 h-full w-[200%]"
        style={{
          backgroundImage: waveImage(fill),
          backgroundRepeat: "repeat-x",
          backgroundPosition: "left bottom",
          backgroundSize: "12.5% 100%",
        }}
      />
    </div>
  );
}
