type SlatProfileVariant =
  | 'roll-formed-foam'
  | 'roll-formed-resin'
  | 'double-wall'
  | 'single-wall'
  | 'single-wall-small-perf'
  | 'single-wall-large-perf'
  | 'polycarbonate'

type SlatProfileProps = {
  variant: SlatProfileVariant
}

export function SlatProfile({ variant }: SlatProfileProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className="h-28 w-full max-w-[200px] sm:h-32"
      aria-hidden
    >
      {variant === 'double-wall' && (
        <path
          d="M20 90 L20 30 L50 20 L150 20 L180 30 L180 90 L150 100 L50 100 Z M55 35 L55 85 L75 85 L75 35 Z M125 35 L125 85 L145 85 L145 35 Z"
          fill="#c4a574"
          stroke="#8b6914"
          strokeWidth="2"
        />
      )}
      {variant === 'single-wall' && (
        <path
          d="M30 95 Q30 25 100 15 Q170 25 170 95 Q100 110 30 95 Z"
          fill="#c4a574"
          stroke="#8b6914"
          strokeWidth="2"
        />
      )}
      {variant === 'single-wall-small-perf' && (
        <>
          <path
            d="M30 95 Q30 25 100 15 Q170 25 170 95 Q100 110 30 95 Z"
            fill="#c4a574"
            stroke="#8b6914"
            strokeWidth="2"
          />
          {[45, 65, 85, 105, 125, 145].flatMap((x) =>
            [40, 55, 70].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#9a7b4f" />
            )),
          )}
        </>
      )}
      {variant === 'single-wall-large-perf' && (
        <>
          <path
            d="M30 95 Q30 25 100 15 Q170 25 170 95 Q100 110 30 95 Z"
            fill="#c4a574"
            stroke="#8b6914"
            strokeWidth="2"
          />
          {[50, 90, 130].map((x) => (
            <rect key={x} x={x} y="40" width="22" height="35" rx="2" fill="#9a7b4f" />
          ))}
        </>
      )}
      {variant === 'roll-formed-foam' && (
        <>
          <rect x="25" y="35" width="150" height="55" rx="4" fill="#c4a574" stroke="#8b6914" strokeWidth="2" />
          <rect x="35" y="45" width="130" height="35" rx="2" fill="#d4b896" />
        </>
      )}
      {variant === 'roll-formed-resin' && (
        <>
          <rect x="25" y="35" width="150" height="55" rx="4" fill="#c4a574" stroke="#8b6914" strokeWidth="2" />
          <rect x="35" y="45" width="130" height="35" rx="2" fill="#a08050" />
        </>
      )}
      {variant === 'polycarbonate' && (
        <path
          d="M30 95 Q30 25 100 15 Q170 25 170 95 Q100 110 30 95 Z"
          fill="#b8d4e8"
          fillOpacity="0.7"
          stroke="#5a8ab0"
          strokeWidth="2"
        />
      )}
    </svg>
  )
}

export type { SlatProfileVariant }
