import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

// 市区ごとのゴミ屋敷対策ページ（2026-11-02 新設）。
// 本文はすべて各市の公式ページ・条例本文を 2026-11-02 に開いて確認した内容。
// 料金・手数料の金額は載せない（市のページで確認する案内のみ）。

export type Desk = { name: string; body: string };
export type Row = { label: string; value: string };

export type GomiyashikiCity = {
  path: string;
  city: string;
  title: string;
  desc: string;
  published: string;
  updated: string;
  checked: string;
  lead: string[];
  summary: string[];
  ordinance: Row[];
  ordinanceNote: string;
  flowIntro: string;
  flow: { title: string; body: string }[];
  money: { title: string; body: string }[];
  desks: Desk[];
  deskNote: string;
  selfIntro: string;
  self: { title: string; body: string }[];
  faqs: Faq[];
  sources: Source[];
  related: Related[];
  footer: string;
};

export function cityMetadata(d: GomiyashikiCity): Metadata {
  return {
    title: d.title,
    description: d.desc,
    alternates: { canonical: `${SITE}${d.path}` },
    openGraph: { title: d.title, description: d.desc, url: `${SITE}${d.path}`, type: "article", images: ["/og-default.png?v=20261014"] },
  };
}

export default function GomiyashikiCityPage({ d }: { d: GomiyashikiCity }) {
  const crumb = `${d.city}のゴミ屋敷対策`;
  const toc = [
    { href: "#jourei", label: `1｜${d.city}の条例の概要` },
    { href: "#nagare", label: "2｜相談から解消までの流れ" },
    { href: "#hiyou", label: "3｜片付けの費用と支援の扱い" },
    { href: "#madoguchi", label: "4｜相談窓口" },
    { href: "#dashikata", label: "5｜片付けで出たごみの出し方（市の案内）" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#shutten", label: "7｜出典・参考にした公式情報" },
    { href: "#related", label: "8｜関連記事" },
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
        crumbParent={{ name: "ゴミ屋敷の条例と自治体の相談窓口", path: "/gomiyashiki-jourei/" }}
      />
      <Breadcrumb items={[{ label: "ゴミ屋敷の条例と自治体の相談窓口", href: "/gomiyashiki-jourei/" }, { label: crumb }]} />

      <header className="mt-2">
        <ArticleHeader label="自治体のゴミ屋敷対策" title={d.title} published={d.published} updated={d.updated} />
        {d.lead.map((t) => (
          <P key={t}>{t}</P>
        ))}
      </header>

      <Summary points={d.summary} />
      <Toc items={toc} />

      <H2 id="jourei" num="1">{d.city}の条例の概要</H2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-border">
          <tbody>
            {d.ordinance.map((r) => (
              <tr key={r.label} className="border-b border-border">
                <th scope="row" className="w-1/3 bg-surface-alt text-left font-bold text-text-primary p-3 align-top">{r.label}</th>
                <td className="p-3 leading-7 text-text-secondary">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>{d.ordinanceNote}</P>

      <H2 id="nagare" num="2">相談から解消までの流れ</H2>
      <P>{d.flowIntro}</P>
      <Steps items={d.flow} />

      <H2 id="hiyou" num="3">片付けの費用と支援の扱い</H2>
      <Cards items={d.money} />

      <H2 id="madoguchi" num="4">相談窓口</H2>
      <Cards items={d.desks.map((x) => ({ title: x.name, body: x.body }))} />
      <P>{d.deskNote}</P>

      <H2 id="dashikata" num="5">片付けで出たごみの出し方（市の案内）</H2>
      <P>{d.selfIntro}</P>
      <Cards items={d.self} />
      <P>
        業者に依頼する場合の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>、無料回収をうたう業者への注意点は<A href="/muryou-kaishuu-chuui/">「無料回収」の注意点</A>で解説しています。条例のある他の自治体との違いは<A href="/gomiyashiki-jourei/">ゴミ屋敷の条例と自治体の相談窓口</A>にまとめています。
      </P>

      <H2 id="faq" num="6">よくある質問</H2>
      <FaqList faqs={d.faqs} />

      <H2 id="shutten" num="7">出典・参考にした公式情報</H2>
      <P>本記事の制度・窓口の記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={d.sources} checked={d.checked} />

      <H2 id="related" num="8">関連記事</H2>
      <RelatedGrid items={d.related} />

      <p className="text-xs text-text-muted">{d.footer}</p>
    </article>
  );
}
