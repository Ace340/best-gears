// ============================================================
// ⭐ Estrellas — rating visual (puro CSS, cero JS en cliente)
// ============================================================
export default function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating * 2) / 2;
  return (
    <span
      className="inline-flex items-center gap-0.5 text-amber-500"
      aria-label={`${rating} / 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden>
          {i <= full ? "★" : i - 0.5 === full ? "⯨" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-xs font-semibold text-stone-600">{rating.toFixed(1)}</span>
    </span>
  );
}
