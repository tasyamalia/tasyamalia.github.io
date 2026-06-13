export function FooterArt() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-16 -top-20 size-56 rounded-full border border-green/10"
      />
      <div
        className="absolute -bottom-24 right-10 size-72 rounded-full border border-blue/10"
      />
      <div
        className="absolute right-1/4 top-1/2 h-px w-64 bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />
      <div
        className="absolute left-1/2 top-8 size-2 rounded-full bg-green shadow-[0_0_28px_rgba(82,229,140,0.9)]"
      />
    </div>
  );
}
