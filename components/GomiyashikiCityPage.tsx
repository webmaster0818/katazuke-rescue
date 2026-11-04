import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

// 市区ごとのゴミ屋敷対策ページ（2026-11-02 新設）。
// 本文はすべて各市の公式ページ・条例本文を 2026-11-02 に開いて確認した内容。
// 料金・手数料の金額は載せない（市のページで確認する案内のみ）。
// 2026-11-04：order・headings・extra で自治体ごとに章立てを変えられるようにした（既存13ページは未指定＝従来どおり）。

export type Desk = { name: string; body: string };
export type Row = { label: string; value: string };
export type SectionKey = "jourei" | "nagare" | "hiyou" | "madoguchi" | "dashikata" | string;
// 自治体固有の論点を独立した章にするための任意セクション（表・カード・手順のいずれか）
export type Extra = {
  id: string;
  heading: string;
  intro?: string;
  rows?: Row[];
  cols?: [string, string, string];
  table?: [string, string, string][];
  cards?: { title: string; body: string }[];
  steps?: { title: string; body: string }[];
  note?: string;
};

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
  selfIntro?: string;
  self?: { title: string; body: string }[];
  // 2026-11-04 追加：自治体ごとに構成を変えるための任意項目（未指定なら11/2〜11/3の構成のまま）
  order?: SectionKey[];
  headings?: Partial<Record<SectionKey, string>>;
  extra?: Extra[];
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
  const def: Record<string, string> = {
    jourei: `${d.city}の条例の概要`,
    nagare: "相談から解消までの流れ",
    hiyou: "片付けの費用と支援の扱い",
    madoguchi: "相談窓口",
    dashikata: "片付けで出たごみの出し方（市の案内）",
  };
  const extras = d.extra ?? [];
  const hasSelf = !!(d.self && d.self.length);
  const order = (d.order ?? ["jourei", "nagare", "hiyou", "madoguchi", "dashikata", ...extras.map((x) => x.id)]).filter(
    (k) => (k === "dashikata" ? hasSelf : true)
  );
  const title = (k: string) => d.headings?.[k] ?? def[k] ?? extras.find((x) => x.id === k)?.heading ?? k;
  const body: string[] = [...order, "faq", "shutten", "related"];
  const label = (k: string) => (k === "faq" ? "よくある質問" : k === "shutten" ? "出典・参考にした公式情報" : k === "related" ? "関連記事" : title(k));
  const num = (k: string) => String(body.indexOf(k) + 1);
  const toc = body.map((k) => ({ href: `#${k}`, label: `${num(k)}｜${label(k)}` }));

  const section = (k: string) => {
    if (k === "jourei")
      return (
        <div key={k}>
          <H2 id="jourei" num={num(k)}>{title(k)}</H2>
          <Table rows={d.ordinance} />
          <P>{d.ordinanceNote}</P>
        </div>
      );
    if (k === "nagare")
      return (
        <div key={k}>
          <H2 id="nagare" num={num(k)}>{title(k)}</H2>
          <P>{d.flowIntro}</P>
          <Steps items={d.flow} />
        </div>
      );
    if (k === "hiyou")
      return (
        <div key={k}>
          <H2 id="hiyou" num={num(k)}>{title(k)}</H2>
          <Cards items={d.money} />
        </div>
      );
    if (k === "madoguchi")
      return (
        <div key={k}>
          <H2 id="madoguchi" num={num(k)}>{title(k)}</H2>
          <Cards items={d.desks.map((x) => ({ title: x.name, body: x.body }))} />
          <P>{d.deskNote}</P>
        </div>
      );
    if (k === "dashikata")
      return (
        <div key={k}>
          <H2 id="dashikata" num={num(k)}>{title(k)}</H2>
          {d.selfIntro ? <P>{d.selfIntro}</P> : null}
          <Cards items={d.self ?? []} />
          <LinksNote />
        </div>
      );
    const x = extras.find((e) => e.id === k);
    if (!x) return null;
    return (
      <div key={k}>
        <H2 id={x.id} num={num(k)}>{x.heading}</H2>
        {x.intro ? <P>{x.intro}</P> : null}
        {x.rows ? <Table rows={x.rows} /> : null}
        {x.table && x.cols ? <Table3 cols={x.cols} rows={x.table} /> : null}
        {x.cards ? <Cards items={x.cards} /> : null}
        {x.steps ? <Steps items={x.steps} /> : null}
        {x.note ? <P>{x.note}</P> : null}
      </div>
    );
  };

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

      {order.map((k) => section(k))}
      {hasSelf ? null : <LinksNote />}

      <H2 id="faq" num={num("faq")}>よくある質問</H2>
      <FaqList faqs={d.faqs} />

      <H2 id="shutten" num={num("shutten")}>出典・参考にした公式情報</H2>
      <P>本記事の制度・窓口の記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={d.sources} checked={d.checked} />

      <H2 id="related" num={num("related")}>関連記事</H2>
      <RelatedGrid items={d.related} />

      <p className="text-xs text-text-muted">{d.footer}</p>
    </article>
  );
}

function LinksNote() {
  return (
    <P>
      業者に依頼する場合の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>、無料回収をうたう業者への注意点は<A href="/muryou-kaishuu-chuui/">「無料回収」の注意点</A>で解説しています。条例のある他の自治体との違いは<A href="/gomiyashiki-jourei/">ゴミ屋敷の条例と自治体の相談窓口</A>にまとめています。
    </P>
  );
}

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-border">
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-border">
              <th scope="row" className="w-1/3 bg-surface-alt text-left font-bold text-text-primary p-3 align-top">{r.label}</th>
              <td className="p-3 leading-7 text-text-secondary">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Table3({ cols, rows }: { cols: [string, string, string]; rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-border">
        <thead>
          <tr className="bg-surface-alt">
            {cols.map((c) => (
              <th key={c} scope="col" className="text-left font-bold text-text-primary p-3 border-b border-border">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-border">
              <th scope="row" className="bg-surface-alt text-left font-bold text-text-primary p-3 align-top">{r[0]}</th>
              <td className="p-3 leading-7 text-text-secondary align-top">{r[1]}</td>
              <td className="p-3 leading-7 text-text-secondary align-top">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
