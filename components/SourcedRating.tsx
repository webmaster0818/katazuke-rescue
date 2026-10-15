import reviewsData from "@/data/reviews.json";

// 評価は reviews.json の ratingBlock（Googleマップで一次確認した値・取得日つき）がある社だけ表示する。
// 出典のない評価・件数は表示しない（既定値で埋めない）。
type RatingBlock = {
  rating: number;
  reviewCount: number;
  fetchedAt: string;
  mapsUri: string;
  sourceLabel: string;
};

export function getRatingBlock(slug: string): RatingBlock | null {
  const r = reviewsData.find((x) => x.slug === slug) as { ratingBlock?: RatingBlock | null } | undefined;
  const b = r?.ratingBlock;
  if (!b || typeof b.rating !== "number" || typeof b.reviewCount !== "number" || !b.fetchedAt || !b.mapsUri) return null;
  return b;
}

export default function SourcedRating({ slug, size = "sm" }: { slug: string; size?: "sm" | "md" }) {
  const b = getRatingBlock(slug);
  if (!b) return null;
  const star = size === "md" ? "text-base" : "text-sm";
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${size === "md" ? "text-sm" : "text-xs"} text-slate-500`}>
      <span className={`${star} font-bold text-slate-900`}>
        <span className="text-amber-500" aria-hidden="true">★</span> {b.rating}
      </span>
      <span>
        （
        <a href={b.mapsUri} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-blue-600">
          {b.sourceLabel}
        </a>
        ・{b.reviewCount.toLocaleString()}件・{b.fetchedAt}取得）
      </span>
    </p>
  );
}
