export function FeaturedArticleArt() {
  return (
    <div
      className="relative min-h-[180px] overflow-hidden sm:min-h-[240px] lg:min-h-[320px]"
      style={{
        background: `
          radial-gradient(320px 220px at 30% 20%, rgba(255, 176, 32, 0.9), transparent 60%),
          linear-gradient(135deg, #e0400f 0%, #0b1d3d 78%)
        `,
      }}
    >
      <p className="absolute left-[26px] right-[26px] top-6 z-10 max-w-sm text-[1.05rem] font-extrabold leading-snug tracking-[0.3px] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] sm:top-[24px]">
        Your house doesn&apos;t lose at the walls. It loses at the windows.
      </p>

      <div
        className="absolute inset-0 flex flex-col justify-end gap-1.5 pb-[22px]"
        aria-hidden
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="block h-3 border-t border-white/14 bg-gradient-to-b from-white/16 to-white/[0.03]"
          />
        ))}
      </div>
    </div>
  )
}
