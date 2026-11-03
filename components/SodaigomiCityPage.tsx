import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

// 市ごとの粗大ごみ（手数料・申し込み・持ち込み）のページ（2026-11-03 新設：仙台・横浜・川崎・名古屋）。
// 手数料の金額はすべて各市の公式ページを 2026-11-03 に開いて確認した値。業者の料金相場は載せない。

export type Row = { label: string; value: string };
export type FeeRow = { item: string; fee: string };

export type SodaigomiCity = {
  path: string;
  city: string;
  areaPath: string;
  areaLabel: string;
  title: string;
  desc: string;
  published: string;
  updated: string;
  checked: string;
  lead: string[];
  summary: string[];
  basics: Row[];
  feeIntro: string;
  feeTiers: string;
  fees: FeeRow[];
  feeNote: string;
  steps: { title: string; body: string }[];
  carryIntro: string;
  carry: { title: string; body: string }[];
  support: { title: string; body: string }[];
  gyousha: string;
  faqs: Faq[];
  sources: Source[];
  related: Related[];
};

export function sodaigomiMetadata(d: SodaigomiCity): Metadata {
  return {
    title: d.title,
    description: d.desc,
    alternates: { canonical: `${SITE}${d.path}` },
    openGraph: { title: d.title, description: d.desc, url: `${SITE}${d.path}`, type: "article", images: ["/og-default.png?v=20261014"] },
  };
}

export default function SodaigomiCityPage({ d }: { d: SodaigomiCity }) {
  const crumb = `${d.city}の粗大ごみ`;
  const toc = [
    { href: "#kihon", label: `1｜${d.city}の粗大ごみの基本` },
    { href: "#tesuryou", label: "2｜品目別の手数料（市の公式ページの金額）" },
    { href: "#nagare", label: "3｜申し込みから収集までの流れ" },
    { href: "#mochikomi", label: "4｜自分で持ち込む場合・一度に大量に出る場合" },
    { href: "#shien", label: "5｜運び出しの支援と手数料の減免" },
    { href: "#gyousha", label: "6｜業者に頼む前に確認すること" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公式情報" },
    { href: "#related", label: "9｜関連記事" },
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd
        title={d.title}
        desc={d.desc}
        path={d.path}
        crumb={crumb}
        faqs={d.faqs}
        published={d.published}
        updated={d.updated}
        crumbParent={{ name: d.areaLabel, path: d.areaPath }}
      />
      <Breadcrumb items={[{ label: d.areaLabel, href: d.areaPath }, { label: crumb }]} />

      <header className="mt-2">
        <ArticleHeader label="自治体の粗大ごみ" title={d.title} published={d.published} updated={d.updated} />
        {d.lead.map((t) => (
          <P key={t}>{t}</P>
        ))}
      </header>

      <Summary points={d.summary} />
      <Toc items={toc} />

      <H2 id="kihon" num="1">{d.city}の粗大ごみの基本</H2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-border">
          <tbody>
            {d.basics.map((r) => (
              <tr key={r.label} className="border-b border-border">
                <th scope="row" className="w-1/3 bg-surface-alt text-left font-bold text-text-primary p-3 align-top">{r.label}</th>
                <td className="p-3 leading-7 text-text-secondary">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="tesuryou" num="2">品目別の手数料（市の公式ページの金額）</H2>
      <P>{d.feeIntro}</P>
      <P>{d.feeTiers}</P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[480px]">
          <thead>
            <tr className="bg-surface-alt">
              <th className="text-left p-3 font-bold text-text-primary border-b border-border">品目（市の表記）</th>
              <th className="text-left p-3 font-bold text-text-primary border-b border-border w-2/5">手数料</th>
            </tr>
          </thead>
          <tbody>
            {d.fees.map((r) => (
              <tr key={r.item} className="border-b border-border">
                <td className="p-3 leading-7 text-text-secondary">{r.item}</td>
                <td className="p-3 leading-7 text-text-secondary">{r.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">{d.feeNote}</p>

      <H2 id="nagare" num="3">申し込みから収集までの流れ</H2>
      <Steps items={d.steps} />

      <H2 id="mochikomi" num="4">自分で持ち込む場合・一度に大量に出る場合</H2>
      <P>{d.carryIntro}</P>
      <Cards items={d.carry} />

      <H2 id="shien" num="5">運び出しの支援と手数料の減免</H2>
      <Cards items={d.support} />

      <H2 id="gyousha" num="6">業者に頼む前に確認すること</H2>
      <P>{d.gyousha}</P>
      <P>
        {d.city}で片付けを頼める業者は<A href={d.areaPath}>{d.areaLabel}</A>、業者の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>、無料回収をうたう業者への注意点は<A href="/muryou-kaishuu-chuui/">「無料回収」の注意点</A>で解説しています。ほかの自治体との手数料の比べ方は<A href="/sodaigomi-tesuryou-hikaku/">粗大ごみの手数料を主な自治体で比較</A>にまとめています。
      </P>

      <H2 id="faq" num="7">よくある質問</H2>
      <FaqList faqs={d.faqs} />

      <H2 id="shutten" num="8">出典・参考にした公式情報</H2>
      <P>本記事の手数料・手続きの記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={d.sources} checked={d.checked} />

      <H2 id="related" num="9">関連記事</H2>
      <RelatedGrid items={d.related} />

      <p className="text-xs text-text-muted">
        本記事は、{d.city}の公式ページを{d.checked}に確認した内容にもとづく一般的な情報です。手数料や受付方法は変わることがあり、品目の大きさや材質によって金額が変わります。申し込みの際に案内される金額を必ずご確認ください。
      </p>
    </article>
  );
}
