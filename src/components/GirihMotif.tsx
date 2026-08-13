type GirihMotifProps = {
  className?: string
  opacity?: number
}

/**
 * A single repeat unit of an eight-point girih (Persian geometric star) tiling,
 * rendered as fine gold linework. Used sparingly as the site's one recurring
 * signature — hero backdrop and, at small scale, the section-divider node —
 * rather than as generic decoration.
 */
export default function GirihMotif({ className, opacity = 1 }: GirihMotifProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="girih-tile" width="80" height="80" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="var(--gold)" strokeWidth="0.7">
            <path d="M40 4 L52 20 L40 36 L28 20 Z" />
            <path d="M4 40 L20 28 L36 40 L20 52 Z" />
            <path d="M40 44 L52 60 L40 76 L28 60 Z" />
            <path d="M44 40 L60 28 L76 40 L60 52 Z" />
            <circle cx="40" cy="40" r="3.2" />
            <path d="M40 20 L60 40 L40 60 L20 40 Z" strokeWidth="0.4" opacity="0.6" />
          </g>
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#girih-tile)" />
    </svg>
  )
}
