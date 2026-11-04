import Link from "next/link";
import { regions, tokyo, allAreaSlugs, prefectureCount, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="kr-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {items.map((x) => (
        <li key={x.slug}>
          <Link
            href={`/area/${x.slug}/`}
            className="flex min-h-[48px] items-center justify-between gap-2 rounded-[3px] border border-[color:var(--kr-border)] bg-white px-3.5 text-[14px] font-bold text-[color:var(--kr-ink)] transition-colors hover:border-[color:var(--kr-navy)] hover:bg-[color:var(--kr-wash)]"
          >
            <span>{x.label}</span>
            <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--kr-navy)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><polyline points="9 6 15 12 9 18" /></svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const summaryCls = "flex min-h-[60px] items-center justify-between gap-3 px-4 md:px-5";

/** TOP「エリアから探す」。東京都は最上部の別枠（23区を並べる）、地方は折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  return (
    <div>
      <p className="mb-5 text-[14px] leading-relaxed text-[color:var(--kr-muted)]">
        {prefectureCount}都道府県・{allAreaSlugs.length}市区の業者まとめがあります。地方名を押すと市の一覧が開きます。
      </p>

      <div className="mb-4 overflow-hidden rounded-[3px] border-2 border-[color:var(--kr-navy)] bg-white" data-reveal="0">
        <div className={`${summaryCls} bg-[color:var(--kr-navy)] text-white`}>
          <span className="flex items-baseline gap-3">
            <span className="text-[18px] font-bold tracking-[0.06em]">東京都</span>
            <span className="text-[12px] text-white/80">23区・八王子市</span>
          </span>
          <span className="text-[12px] font-bold text-white/85">{1 + tokyo.wards.length + tokyo.cities.length}ページ</span>
        </div>
        <div className="grid gap-5 p-4 md:p-6">
          <Link href={`/area/${tokyo.top.slug}/`} className="kr-btn w-full sm:w-fit">
            東京都全体のまとめを見る
          </Link>
          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[color:var(--kr-muted)]">23区</p>
            <Tiles items={tokyo.wards} />
          </div>
          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[color:var(--kr-muted)]">多摩地域の市</p>
            <Tiles items={tokyo.cities} />
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        {regions.map((r, i) => {
          const n = r.prefectures.reduce((m, p) => m + p.areas.length, 0);
          return (
            <details key={r.name} className="kr-acc group overflow-hidden rounded-[3px] border border-[color:var(--kr-border-strong)] bg-white" data-reveal={String(i + 1)}>
              <summary className={`${summaryCls} bg-white group-open:border-b group-open:border-[color:var(--kr-border)]`}>
                <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--kr-navy-dark)]">{r.name}</span>
                <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--kr-muted)]">
                  {n}市
                  <span className="text-[color:var(--kr-navy)]"><Chevron /></span>
                </span>
              </summary>
              <div className="divide-y divide-[color:var(--kr-border)] bg-[color:var(--kr-paper)]">
                {r.prefectures.map((p) => (
                  <div key={p.name} className="px-4 py-4 md:grid md:grid-cols-[120px_minmax(0,1fr)] md:items-start md:gap-4 md:px-6">
                    <p className="mb-2.5 text-[14px] font-bold md:mb-0 md:flex md:min-h-[48px] md:items-center">{p.name}</p>
                    <div className="grid gap-2">
                      <Tiles items={p.areas} />
                      {p.extra?.map((x) => (
                        <Link key={x.href} href={x.href} className="inline-flex min-h-[44px] w-fit items-center text-[14px] font-bold text-[color:var(--kr-navy)] underline decoration-[color:var(--kr-border-strong)] underline-offset-4 hover:decoration-[color:var(--kr-navy)]">
                          {x.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
