export default function Divider() {
  return (
    <div className="ledger-rule" role="presentation">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path
          d="M9 1 L14 9 L9 17 L4 9 Z"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
        />
        <circle cx="9" cy="9" r="1.4" fill="var(--gold)" />
      </svg>
    </div>
  )
}
