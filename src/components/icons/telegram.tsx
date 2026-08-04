/** Official-style Telegram paper-plane mark — Lucide doesn't ship one. */
export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M21.95 2.47a1.4 1.4 0 0 0-1.46-.2L2.6 9.7a1.4 1.4 0 0 0 .05 2.62l4.58 1.6 1.78 5.66a1.4 1.4 0 0 0 2.38.52l2.7-2.9 4.72 3.46a1.4 1.4 0 0 0 2.2-.84l2.9-16.08a1.4 1.4 0 0 0-.96-1.37ZM9.4 14.1l-.2 2.2-.9-2.86 9.8-7.2-8.7 7.86Z" />
    </svg>
  );
}
