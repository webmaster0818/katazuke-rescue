import Link from "next/link";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";
import servicesData from "@/data/services.json";
import { allAreaSlugs, prefectureCount } from "@/data/areaRegions";
import TaskIcon from "@/components/brand/TaskIcon";
import AreaFinder from "@/components/top/AreaFinder";
import ScrollReveal from "@/components/top/ScrollReveal";

export const metadata: Metadata = {
  title: "片付けレスキュー｜片付け・不用品回収業者の比較情報サイト",
  description: "ゴミ屋敷の片付け・遺品整理・不用品回収・引っ越し前の片付けを依頼できる業者を、料金目安・対応エリア・口コミで比較できる情報サイトです。",
  alternates: { canonical: "/" },
};

// 2026-11-04 TOP デザイン刷新（redesign-20261104）。本文・料金・業者情報・リンク先は変えず、見せ方だけを変えている。

const topCompanies = companiesData.slice(0, 3);

// 解説記事の本数：app 直下の記事ページ（運営者情報・規約・プライバシー・コンテンツポリシー・ランキングを除く）を数えた値（2026-11-04 時点）
const ARTICLE_COUNT = 149;

// サービスガイドの短い名前（フッターのサービスガイド欄と同じ呼び方）とアイコン
const SERVICE_META: Record<string, { label: string; icon: string }> = {
  gomiyashiki: { label: "ゴミ屋敷片付け", icon: "gomiyashiki" },
  fuyohin: { label: "不用品回収", icon: "fuyohin" },
  ihinseiri: { label: "遺品整理", icon: "ihinseiri" },
  hikkoshi: { label: "引っ越し前の片付け", icon: "hikkoshi" },
  "katazuke-daikou": { label: "片付け代行", icon: "katazuke-daikou" },
};

const SERVICE_MORE: [string, string][] = [
  ["費用相場", "/cost/price/"],
  ["費用を抑える方法", "/guide/cost-saving/"],
  ["違法業者の見分け方", "/guide/illegal-dumping/"],
  ["自治体サービスの活用方法", "/guide/municipal-service/"],
];

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/* ─── Hero ─── */
function HeroButtons() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <a href="#service" className="kr-btn kr-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <TaskIcon name="hikkoshi" size={30} className="text-white" />
          依頼内容から探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="kr-btn kr-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const HERO_LINKS: [string, string][] = [
  ["おすすめ業者ランキングを見る", "/ranking/"],
  ["費用相場を確認する", "/cost/price/"],
];

function HeroLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {HERO_LINKS.map(([label, href]) => (
        <li key={href}>
          <Link href={href} className="inline-flex min-h-[42px] items-center gap-1 rounded-[3px] border border-[color:var(--kr-border-strong)] bg-white px-3.5 text-[13px] font-bold text-[color:var(--kr-navy-dark)] hover:border-[color:var(--kr-navy)]">
            {label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const LEAD = "ゴミ屋敷の片付け、遺品整理、不用品回収などの依頼先を検討する方に向けて、7社の特徴・料金目安・口コミを比較して掲載しています。";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--kr-border)] bg-white">
      <div className="md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:min-h-[640px]">
        {/* 左：見出しと主導線 */}
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--kr-kraft)] md:text-[14px]">
            片付け・不用品回収業者の比較情報サイト
          </p>
          <h1 className="mt-3 text-[31px] font-bold leading-[1.34] tracking-[0.04em] text-[color:var(--kr-ink)] md:mt-4 md:text-[44px] lg:text-[52px]">
            片付け・不用品回収
            <br />
            <span className="text-[color:var(--kr-navy)]">業者</span>の比較
          </h1>

          {/* PC：見出しの直後に主導線。右の写真に少し重ねる */}
          <div className="relative mt-8 hidden md:block md:mr-[-70px] lg:mr-[-120px]">
            <div className="border border-[color:var(--kr-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>

          <p className="mt-6 hidden max-w-[33em] text-[15px] leading-[1.9] text-[color:var(--kr-muted)] md:block">{LEAD}</p>
          <div className="mt-5 hidden md:block">
            <HeroLinks />
          </div>
        </div>

        {/* 右（PC）：写真を見出しの下まで広げ、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-boxes-pc.jpg" alt="" width={2000} height={1325} className="absolute inset-0 h-full w-full object-cover object-[58%_50%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,#fff_8%,rgba(255,255,255,0.8)_26%,rgba(255,255,255,0.3)_44%,rgba(255,255,255,0)_60%)]" />
          <p className="absolute bottom-3 right-3 bg-black/45 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-boxes-sp.jpg" alt="段ボール箱と観葉植物が並ぶ部屋" width={1200} height={900} className="block h-[360px] w-full object-cover object-[50%_30%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/45 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <div className="px-4 pb-6 pt-5 md:hidden">
          <p className="text-[14px] leading-[1.85] text-[color:var(--kr-muted)]">{LEAD}</p>
          <div className="mt-4">
            <HeroLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 数字（サイト内のデータから数えた値） ─── */
function TrustBadges() {
  const badges: { k: string; v: string; u: string; desc: string }[] = [
    { k: "掲載業者数", v: String(companiesData.length), u: "社", desc: "ランキングに掲載" },
    { k: "サービスガイド", v: String(servicesData.length), u: "種類", desc: "サービス別に解説" },
    { k: "解説記事", v: String(ARTICLE_COUNT), u: "本", desc: "随時更新" },
    { k: "エリア別ページ", v: String(allAreaSlugs.length), u: "市区", desc: `${prefectureCount}都道府県・地域別に比較` },
  ];
  return (
    <section className="border-b border-[color:var(--kr-border)] bg-white">
      <div className="kr-container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.k}
              className={`px-3 py-5 md:px-6 md:py-7 ${i % 2 === 0 ? "border-r border-[color:var(--kr-border)]" : "md:border-r md:border-[color:var(--kr-border)]"} ${i < 2 ? "border-b border-[color:var(--kr-border)] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.06em] text-[color:var(--kr-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className="text-[30px] font-bold leading-none text-[color:var(--kr-navy)] md:text-[38px]">{b.v}</span>
                <span className="ml-1 text-[13px] font-bold md:text-[15px]">{b.u}</span>
                <span className="mt-1.5 block text-[12px] text-[color:var(--kr-muted)] md:text-[13px]">{b.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="kr-container pb-3 text-[11px] leading-relaxed text-[color:var(--kr-muted)]">
        ※ 数字は当サイトの掲載ページ・掲載データを数えた値です（2026年11月4日時点）。写真はイメージです（<a href="https://unsplash.com/photos/j7vbBmTHmjY" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>・撮影 Dina Badamshina・Unsplash License、2026年11月5日確認）。当サイトは片付け業者ではなく、依頼前の比較に使う情報サイトです。
      </p>
    </section>
  );
}

/* ─── 依頼内容から探す（旧「サービスから探す」） ─── */
function ServiceFinder() {
  return (
    <section id="service" className="kr-section scroll-mt-20">
      <div className="kr-container">
        <h2 className="kr-h2">サービスから探す</h2>
        <p className="kr-lead">ご依頼の内容に応じたサービスガイドをご確認ください</p>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {servicesData.map((service, i) => {
            const m = SERVICE_META[service.slug] ?? { label: service.title, icon: "" };
            return (
              <li key={service.slug} data-reveal={String(i)} className={i === servicesData.length - 1 && servicesData.length % 2 === 1 ? "col-span-2 md:col-span-1" : ""}>
                <Link href={`/service/${service.slug}/`} className="kr-card kr-card-link group flex h-full flex-col items-center px-3 pb-5 pt-6 text-center md:pt-8">
                  <TaskIcon name={m.icon} size={96} className="h-[76px] w-[76px] text-[color:var(--kr-navy)] md:h-[100px] md:w-[100px]" />
                  <span className="mt-3 text-[16px] font-bold tracking-[0.04em] md:mt-4 md:text-[17px]">{m.label}</span>
                  <span className="mt-1.5 text-[12px] leading-snug text-[color:var(--kr-muted)] md:text-[13px]">{service.title}</span>
                  <span className="mt-3 border-t border-[color:var(--kr-border)] pt-3 text-[12px] font-bold text-[color:var(--kr-navy-dark)] md:text-[13px]">
                    費用目安: {service.costRange}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 md:mt-4 md:grid-cols-4 md:gap-4" data-reveal="1">
          {SERVICE_MORE.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="kr-card kr-card-link flex min-h-[52px] items-center justify-between px-4 text-[14px] font-bold">
                {label}
                <span className="text-[color:var(--kr-navy)]"><ArrowRight /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── エリアから探す ─── */
function AreaSection() {
  return (
    <section id="area" className="kr-section kr-band scroll-mt-20">
      <div className="kr-container">
        <h2 className="kr-h2">エリアから探す</h2>
        <div className="mt-6 md:mt-8">
          <AreaFinder />
        </div>
      </div>
    </section>
  );
}

/* ─── おすすめ業者ランキング ─── */
function TopRanking() {
  return (
    <section id="ranking" className="kr-section scroll-mt-20">
      <div className="kr-container">
        <h2 className="kr-h2">おすすめ業者ランキング</h2>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="kr-lead !mb-6">編集部が特徴・料金・口コミを比較した業者</p>
          <Link href="/ranking/" className="mb-6 inline-flex items-center gap-1 text-[14px] font-bold text-[color:var(--kr-navy)] underline decoration-[color:var(--kr-border-strong)] underline-offset-4">
            すべて見る
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ol className="grid gap-3 md:gap-4">
          {topCompanies.map((company, index) => (
            <li key={company.slug} className="kr-card grid gap-4 p-4 md:grid-cols-[64px_minmax(0,1fr)_180px] md:items-center md:gap-6 md:p-6" data-reveal={String(index)}>
              <div className="flex items-center gap-3 md:block">
                <span className="flex h-12 w-12 items-center justify-center border-2 border-[color:var(--kr-navy)] text-[22px] font-bold text-[color:var(--kr-navy)] md:h-14 md:w-14 md:text-[24px]">
                  {index + 1}
                </span>
                <h3 className="text-[18px] font-bold md:hidden">{company.name}</h3>
              </div>
              <div className="min-w-0">
                <div className="mb-1 hidden flex-wrap items-center gap-3 md:flex">
                  <h3 className="text-[20px] font-bold">{company.name}</h3>
                  <span className="border border-[color:var(--kr-border-strong)] px-2 py-0.5 text-[12px] font-bold text-[color:var(--kr-navy-dark)]">{company.coverage}</span>
                </div>
                <span className="mb-2 inline-block border border-[color:var(--kr-border-strong)] px-2 py-0.5 text-[12px] font-bold text-[color:var(--kr-navy-dark)] md:hidden">{company.coverage}</span>
                <p className="text-[14px] text-[color:var(--kr-muted)]">{company.tagline}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {company.features.slice(0, 3).map((f) => (
                    <li key={f} className="kr-dot text-[13px] font-bold">{f}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/company/${company.slug}/`} className="kr-btn w-full">
                詳細を見る
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-8 text-center">
          <Link href="/ranking/" className="kr-btn w-full sm:w-auto sm:px-10">
            全7社のランキングを見る
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── 編集方針 ─── */
function Policy() {
  const items = [
    {
      title: "中立的な立場で比較します",
      description: "広告掲載の有無によって順位を変更することはありません。実績・料金・口コミをもとに評価した情報を掲載しています。",
    },
    {
      title: "許可の有無は業者ごとに公式で確認します",
      description:
        "許可・資格は、各社の公式サイトで確認できたものだけを記載しています。くらしのマーケット・ミツモアなどの仲介サービスでは作業する業者が依頼ごとに異なるため、依頼先の業者ごとに一般廃棄物収集運搬業の許可（または許可業者への委託）をご確認ください。",
    },
    {
      title: "費用相場を定期的に更新します",
      description: "費用相場のデータを定期的に更新し、適正な価格での依頼を支援します。",
    },
  ];
  return (
    <section className="kr-section kr-band">
      <div className="kr-container">
        <h2 className="kr-h2">片付けレスキューの編集方針</h2>
        <p className="kr-lead">中立的な立場で業者の情報を掲載します</p>
        <ol className="grid gap-3 md:grid-cols-3 md:gap-4">
          {items.map((item, i) => (
            <li key={item.title} className="border-t-[3px] border-[color:var(--kr-navy)] bg-[color:var(--kr-paper)] p-5 md:p-6" data-reveal={String(i)}>
              <p className="text-[13px] font-bold text-[color:var(--kr-kraft)]">方針 {i + 1}</p>
              <h3 className="mt-1.5 text-[17px] font-bold leading-snug">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.85] text-[color:var(--kr-muted)]">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function Cta() {
  return (
    <section className="kr-section">
      <div className="kr-container">
        <div className="border-2 border-[color:var(--kr-navy)] bg-white px-5 py-8 md:flex md:items-center md:justify-between md:gap-10 md:px-10 md:py-10" data-reveal="0">
          <div>
            <h2 className="text-[20px] font-bold leading-snug md:text-[24px]">依頼前に複数の業者から見積もりを取得することをおすすめします</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--kr-muted)] md:text-[15px]">同じ条件で複数の業者を比較すると、料金と作業内容が適正かどうかを判断しやすくなります。</p>
          </div>
          <Link href="/ranking/" className="kr-btn kr-btn--lg mt-6 w-full shrink-0 md:mt-0 md:w-auto">
            業者ランキングで比較する
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="kr-page">
      <Hero />
      <TrustBadges />
      <ServiceFinder />
      <AreaSection />
      <TopRanking />
      <Policy />
      <Cta />
      <ScrollReveal />
    </div>
  );
}
