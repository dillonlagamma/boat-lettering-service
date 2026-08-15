const icons = [
  {
    label: "Facebook",
    path: "M15 8h-3V6c0-.6.4-1 1-1h2V2h-3C9.8 2 8 3.8 8 6v2H6v3h2v7h3v-7h2.2L14 8z",
  },
];

export function SocialIcons({ className = "text-white" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icons.map((icon) => (
        <span key={icon.label} aria-label={icon.label} className="opacity-80">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
            <path d={icon.path} />
          </svg>
        </span>
      ))}
    </div>
  );
}
