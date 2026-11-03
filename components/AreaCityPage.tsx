import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// 市区単位のエリアページ（2026-11-01〜）。
// 既存のエリアページ（app/area/kurume/page.tsx など）と同じ見た目・構成で、
// 自治体の公式ページで確認した事実（粗大ごみの申込・手数料・持ち込み・家電4品目など）と
// その市区を公式の対応エリアに含むことを確認できた業者だけを掲載する。

export const SITE = "https://katazuke-rescue.com";

export interface AreaVendor {
  slug: string;
  num: string;
  catch: string;
  name: string;
  officialUrl: string;
  image: string;
  imageAlt: string;
  intro: string[];
  recommend: string[];
  table: { k: string; v: string; note?: string }[];
  memo: string;
}

export interface AreaCompareRow {
  slug: string;
  name: string;
  area: string;
  price: string;
  point: string;
}

export interface AreaSource {
  label: string;
  org: string;
  url: string;
  updated?: string;
}

export interface AreaSection {
  id: string;
  title: string;
  body: ReactNode;
}

export interface AreaCityData {
  slug: string;
  name: string; // 例: 柏市
  title: string;
  description: string;
  ogDescription: string;
  h1: string;
  breadcrumb: string;
  tags: string[];
  checked: string; // 例: 2026年11月1日
  checkedIso: string; // 例: 2026-11-01
  lead: ReactNode[];
  vendorLead: ReactNode;
  vendors: AreaVendor[];
  compareRows: AreaCompareRow[];
  compareNote: ReactNode;
  factsTitle: string;
  factsLead: ReactNode;
  facts: { k: string; v: ReactNode; src: string }[];
  sections: AreaSection[];
  // 区の公式案内（家庭ごみの回収と業者）を記事冒頭の第1章に置く場合に指定（2026-11-01〜・板橋/江戸川/杉並/北/中野/墨田）。
  // 指定したページでは業者の見出しを「おすすめ・順位」ではなく「片付けを頼める業者」の表現にする。
  guidanceFirst?: AreaSection;
  steps: { t: string; b: string }[];
  faqs: { q: string; a: string }[];
  matome: ReactNode[];
  sources: AreaSource[];
}

export function buildAreaMetadata(d: AreaCityData): Metadata {
  const path = `/area/${d.slug}/`;
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: `${SITE}${path}` },
    openGraph: {
      title: d.title,
      description: d.ogDescription,
      url: `${SITE}${path}`,
      type: "article",
      images: ["/images/hero-final.png"],
    },
  };
}

export const linkCls = "text-primary underline underline-offset-2";

function H2({ id, num, children }: { id: string; num: string; children: ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      {num}｜{children}
    </h2>
  );
}

function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 font-bold text-text-primary mt-7 mb-3">
      <span className="w-1.5 h-5 rounded-full bg-primary inline-block" />
      {children}
    </h4>
  );
}

export default function AreaCityPage({ d, otherAreas }: { d: AreaCityData; otherAreas: ReactNode }) {
  const path = `/area/${d.slug}/`;
  const n = d.vendors.length;
  const g = d.guidanceFirst;
  const off = g ? 1 : 0; // guidanceFirst がある場合: 1=区の公式案内, 2=業者, 3=市の公式情報, 4〜=解説
  const numVendor = String(1 + off);
  const numFacts = String(2 + off);
  const secBase = 3 + off; // 1=業者, 2=市の公式情報, 3〜=市区固有の解説
  const vendorH2 = g ? `${d.name}で片付けを頼める業者` : `${d.name}のゴミ屋敷片付け・不用品回収業者${n}社`;
  const hikakuH3 = g ? `${d.name}を対応エリアに含む業者の一覧` : `${d.name}を対応エリアに含む${n}社を一覧比較`;
  const vendorH3 = (c: AreaVendor) => (g ? `【${c.catch}】${c.name}` : `${c.num}｜【${c.catch}】${c.name}`);
  const numSel = secBase + d.sections.length;
  const numFaq = numSel + 1;
  const numMatome = numFaq + 1;
  const numSrc = numMatome + 1;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.title,
    description: d.description,
    image: `${SITE}/images/hero-final.png`,
    datePublished: `${d.checkedIso}T00:00:00+09:00`,
    dateModified: `${d.checkedIso}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "片付けレスキュー編集部", url: SITE },
    publisher: { "@type": "Organization", name: "片付けレスキュー", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${path}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "片付けレスキュー", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: d.h1, item: `${SITE}${path}` },
    ],
  };

  const toc = [
    ...(g ? [{ href: `#${g.id}`, label: `1｜${g.title}`, sub: undefined }] : []),
    {
      href: "#gyousha",
      label: `${numVendor}｜${vendorH2}`,
      sub: [
        { href: "#hikaku", label: hikakuH3 },
        ...d.vendors.map((c) => ({ href: `#${c.slug}`, label: vendorH3(c) })),
      ],
    },
    { href: "#shi-koushiki", label: `${numFacts}｜${d.factsTitle}` },
    ...d.sections.map((s, i) => ({ href: `#${s.id}`, label: `${secBase + i}｜${s.title}`, sub: undefined })),
    { href: "#erabikata", label: `${numSel}｜片付け業者を選ぶ際の確認事項` },
    { href: "#faq", label: `${numFaq}｜${d.name}の片付けでよくある質問` },
    { href: "#matome", label: `${numMatome}｜まとめ` },
    { href: "#shutten", label: `${numSrc}｜出典（${d.checked}確認）` },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: d.breadcrumb }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{d.h1}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
          <time dateTime={d.checkedIso}>最終更新：{d.checked}</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>

        {/* PR表記（サイト既存パターン） */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-500 mb-5">
          本記事はアフィリエイト広告（PR）を含みます。掲載業者から報酬を受け取る場合がありますが、掲載内容・順序は編集部が独自に決定しています。
        </div>

        <ul className="flex flex-wrap gap-2 mb-6">
          {d.tags.map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        {d.lead.map((p, i) => (
          <p key={i} className={`${i ? "mt-4 " : ""}text-[15px] leading-8 text-text-secondary`}>
            {p}
          </p>
        ))}
      </header>

      <nav aria-label="目次" className="my-10 rounded-2xl border border-border bg-surface-alt p-5 sm:p-6">
        <p className="font-bold text-primary mb-3">Contents</p>
        <ol className="space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-primary hover:underline font-medium">
                {item.label}
              </a>
              {item.sub && (
                <ol className="mt-2 space-y-2 pl-5">
                  {item.sub.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="text-primary hover:underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {g && (
        <section>
          <H2 id={g.id} num="1">{g.title}</H2>
          {g.body}
        </section>
      )}

      {/* 1｜業者 */}
      <H2 id="gyousha" num={numVendor}>{vendorH2}</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">{d.vendorLead}</p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        {hikakuH3}
      </h3>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">サービス名</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">{d.name}の対応</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">料金目安</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">特徴</th>
            </tr>
          </thead>
          <tbody>
            {d.compareRows.map((r, i) => (
              <tr key={r.slug} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border">
                  <Link href={`/review/${r.slug}/`} className={linkCls}>
                    {r.name}
                  </Link>
                </td>
                <td className="px-3 py-2.5 border-t border-border">{r.area}</td>
                <td className="px-3 py-2.5 border-t border-border">{r.price}</td>
                <td className="px-3 py-2.5 border-t border-border">{r.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-10">{d.compareNote}</p>

      {d.vendors.map((c) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-20 mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-text-primary border-b-2 border-primary pb-2 mb-5">
            {vendorH3(c)}
          </h3>

          <a href={c.officialUrl} target="_blank" rel="sponsored nofollow noopener" className="block mb-5">
            <img
              src={c.image}
              alt={c.imageAlt}
              width={1200}
              height={630}
              className="w-full rounded-2xl border border-border object-cover aspect-[1200/630]"
            />
          </a>

          {c.intro.map((p, i) => (
            <p key={i} className="text-[15px] leading-8 text-text-secondary mb-4">
              {p}
            </p>
          ))}

          <H4>{g ? "このような方に向いています" : "このような方におすすめです"}</H4>
          <ul className="rounded-2xl bg-surface-alt border border-border p-5 space-y-2">
            {c.recommend.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm leading-7 text-text-secondary">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <H4>料金・基本情報</H4>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {c.table.map((row, i) => (
                  <tr key={row.k} className={i % 2 ? "bg-surface-alt" : "bg-surface"}>
                    <th className="text-left align-top font-semibold text-text-primary px-4 py-3 w-32 whitespace-nowrap">{row.k}</th>
                    <td className="px-4 py-3 text-text-secondary leading-7">
                      <span className="font-bold text-text-primary">{row.v}</span>
                      {row.note && <span className="block text-xs text-text-muted mt-1">{row.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H4>{`編集部の一次確認メモ（${d.checked}）`}</H4>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm leading-7 text-text-secondary">{c.memo}</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <a
              href={c.officialUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
            >
              {c.name} 公式サイト
            </a>
            <Link
              href={`/review/${c.slug}/`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors"
            >
              口コミ・評判を詳しく見る
            </Link>
          </div>
        </section>
      ))}

      {/* 2｜市区の公式情報 */}
      <H2 id="shi-koushiki" num={numFacts}>{d.factsTitle}</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-5">{d.factsLead}</p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <tbody>
            {d.facts.map((f, i) => (
              <tr key={f.k} className={i % 2 ? "bg-surface-alt" : "bg-surface"}>
                <th className="text-left align-top font-semibold text-text-primary px-4 py-3 w-36 border-t border-border">{f.k}</th>
                <td className="px-4 py-3 text-text-secondary leading-7 border-t border-border">
                  {f.v}
                  <span className="block text-xs text-text-muted mt-1">出典：{f.src}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※{d.checked}に{d.name}の公式ページを開いて確認した内容です。出典ページのURLは本記事末尾の「出典」に掲載しています。手数料・受付方法は変わることがあるため、申し込みの前に公式ページでご確認ください。
      </p>

      {d.sections.map((s, i) => (
        <section key={s.id}>
          <H2 id={s.id} num={String(secBase + i)}>{s.title}</H2>
          {s.body}
        </section>
      ))}

      <H2 id="erabikata" num={String(numSel)}>片付け業者を選ぶ際の確認事項</H2>
      <div className="space-y-5 mb-4">
        {d.steps.map((s, i) => (
          <div key={s.t}>
            <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
              <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.t}</span>
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.b}</p>
          </div>
        ))}
      </div>

      <H2 id="faq" num={String(numFaq)}>{`${d.name}の片付けでよくある質問`}</H2>
      <div className="space-y-4">
        {d.faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="matome" num={String(numMatome)}>まとめ</H2>
      {d.matome.map((p, i) => (
        <p key={i} className="text-[15px] leading-8 text-text-secondary mb-4">
          {p}
        </p>
      ))}

      <H2 id="shutten" num={String(numSrc)}>{`出典（${d.checked}確認）`}</H2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-text-secondary mb-10">
        {d.sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className={linkCls}>
              {s.label}
            </a>
            （{s.org}
            {s.updated ? `・ページの更新日 ${s.updated}` : ""}・{d.checked}確認）
            <span className="block text-xs text-text-muted break-all">{s.url}</span>
          </li>
        ))}
      </ul>

      {otherAreas}

      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-10">
        <p className="text-sm text-text-secondary mb-4">全国の業者の比較と費用の目安は、以下のページでご確認いただけます。</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/ranking/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
          >
            {g ? "全国の片付け業者の比較を見る" : "片付け業者おすすめランキングを見る"}
          </Link>
          <Link
            href="/cost/price/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors"
          >
            片付け・回収の費用相場を見る
          </Link>
        </div>
      </div>

      <p className="text-xs text-text-muted">
        掲載情報は{d.checked}に編集部が{d.name}・各社の公式ページを確認した内容と、当サイトのレビューページ掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトで、ごみの分別区分・粗大ごみの申し込み方法・手数料は{d.name}の公式案内でご確認ください。
      </p>
    </article>
  );
}
