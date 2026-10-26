import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/nihontou-hakken-tetsuzuki/";
const TITLE = "遺品や実家から日本刀が出てきたら｜登録証の確認、警察署への発見届と所有者変更の届出";
const DESC =
  "遺品整理や実家の片付けで日本刀が出てきたら、まず「銃砲刀剣類登録証」があるかを確認します。" +
  "登録証があれば相続から20日以内に登録証を発行した都道府県の教育委員会へ届け出、" +
  "無ければ発見場所を管轄する警察署へ発見届を出します。自治体のごみとしては回収されません。";
const PUBLISHED = "2026-10-26";
const CHECKED = "2026年10月26日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "刀剣類は、登録を受けた物だけを所持できます",
    body:
      "銃砲刀剣類所持等取締法（銃刀法）第14条は、美術品として価値のある刀剣類などを都道府県の教育委員会が登録すると定めています。" +
      "登録を受けた刀剣類には「銃砲刀剣類登録証」が交付され、この登録証が刀剣と一緒にあるかどうかで、その後の手続きが分かれます。",
  },
  {
    title: "登録証のない刀剣類を見つけたら、警察署へ届け出ます",
    body:
      "銃刀法第23条は、銃砲等や刀剣類を発見した者は、速やかに最寄りの警察署に届け出なければならないと定めています。" +
      "福島県は、発見場所を管轄する警察署（生活安全課（係）など）に電話で連絡したうえで発見届の手続きをするよう案内し、交番では受け付けないとしています。",
  },
  {
    title: "相続した登録済みの刀剣は、20日以内に届け出ます",
    body:
      "銃刀法第17条は、登録を受けた刀剣類を相続により取得した者は、20日以内に、その登録の事務を行った都道府県の教育委員会に届け出なければならないと定めています。" +
      "届出先は相続人の住所地ではなく、登録証を発行した都道府県です（埼玉県・福島県）。",
  },
];

const table: [string, string, string][] = [
  ["登録証が刀剣と一緒にある", "相続人などの新しい所有者が、20日以内に登録証を発行した都道府県の教育委員会へ所有者変更の届出をする", "銃刀法第17条・東京都教育委員会・福島県"],
  ["登録証が見当たらない・登録証のない刀剣が出てきた", "発見場所を管轄する警察署へ電話で連絡し、発見届を出す（交番は不可）", "銃刀法第23条・福島県・千葉県"],
  ["登録証が不鮮明・破損していて読めない", "速やかに登録証の再交付を受ける", "東京都教育委員会"],
  ["手元に置かず手放したい", "自治体のごみとしては回収されないため、最寄りの警察署に相談する", "埼玉県"],
];

const steps = [
  {
    title: "刀剣と一緒に登録証があるかを確かめる",
    body:
      "千葉県は、まず文化庁または都道府県の教育委員会が交付した「銃砲刀剣類登録証」があるかを確認するよう案内しています。" +
      "登録証は刀剣とは別の場所（書類の箱や金庫など）に保管されていることもあるため、遺品の書類もあわせて確認します。",
  },
  {
    title: "登録証がある場合は、所有者変更の届出をする",
    body:
      "相続・譲渡・売買などで所有者が変わった場合、新しい所有者が20日以内に、登録証を発行した都道府県の教育委員会へ所有者変更届出書を提出します（福島県）。" +
      "郵送で届け出る場合は登録証の写し（コピー）を添付するよう、東京都教育委員会・福島県が案内しています。" +
      "所有者変更の際に登録証は書き換えられないため、登録証は刀剣と一緒に保管します（福島県）。",
  },
  {
    title: "登録証がない場合は、警察署に連絡して発見届を出す",
    body:
      "発見場所を管轄する警察署に電話で連絡し、発見届の手続きをします（福島県）。" +
      "届出が受理されると「発見届出済証」が交付されます。千葉県は、この書類を登録審査会に持参する必要があるため、なくさずに持っておくよう求めています。",
  },
  {
    title: "登録審査会で鑑定を受け、登録証の交付を受ける",
    body:
      "警察から都道府県の文化財保護担当課に情報が伝えられ、登録審査会の案内が届きます（埼玉県）。" +
      "埼玉県は届出から案内が届くまで2〜3か月かかることがあるとし、千葉県は届出から審査・登録証交付まで約半年かかるとしています。" +
      "千葉県では、審査で登録が認められればその日に登録証が交付されます。",
  },
  {
    title: "登録しない・登録できない場合は、警察署の指示に従う",
    body:
      "審査で登録できなかった刀剣は所持できず、廃棄などは警察署の指示に従います（福島県）。" +
      "千葉県は、登録を希望しない場合は審査を受けずに警察署で廃棄の手続きができると案内しています。",
  },
];

const cautions = [
  {
    title: "登録証のない刀剣を、売ったり譲ったりしない",
    body:
      "埼玉県は、登録証のついていない銃砲刀剣類の売買等は法律で禁止されている（銃刀法第17条・第18条）と案内しています。" +
      "東京都教育委員会は、所有者の変更は登録証が交付されている物のみ可能で、登録証だけを譲り渡すことは違法行為であるとしています。",
  },
  {
    title: "登録証を自分で書き換えない",
    body:
      "東京都教育委員会は、登録証を所有者などが書き換えることは違法行為で、登録証が無効になると説明しています。" +
      "住所が変わった場合や登録証が読めない場合は、教育委員会の手続き（住所変更の届出・再交付）を使います。",
  },
  {
    title: "ごみや不用品回収には出さない",
    body:
      "埼玉県は、一般のごみと違い銃砲刀剣類は自治体では回収していないとし、廃棄したい場合は最寄りの警察署に相談するよう案内しています。" +
      "片付けを業者に依頼する前に家族で取り分け、見積もりの際には刀剣が残っていないかを業者とも確認します。",
  },
  {
    title: "価値の判断は、都道府県には求められない",
    body:
      "埼玉県は、有名な刀工の銘が入っている刀剣について、県は市場価値を判断することはできないとしています。" +
      "登録審査は、美術品として登録できるかを鑑定するものです（千葉県）。",
  },
];

const faqs = [
  {
    q: "実家から日本刀が出てきました。まず何をすればよいですか？",
    a:
      "刀剣と一緒に「銃砲刀剣類登録証」があるかを確認します。登録証があれば、相続などで所有者になった人が20日以内に、登録証を発行した都道府県の教育委員会へ所有者変更の届出をします。" +
      "登録証がなければ、発見場所を管轄する警察署に電話で連絡し、発見届を出します（銃刀法第17条・第23条、福島県）。",
  },
  {
    q: "所有者変更の届出は、どこに出しますか？",
    a:
      "登録証を発行した都道府県の教育委員会です。相続人の住所地の教育委員会ではない点に注意してください（埼玉県）。" +
      "郵送の場合は登録証の写しを添付します（東京都教育委員会）。提出方法は都道府県の案内で確認します。",
  },
  {
    q: "日本刀を処分したい場合は、どうすればよいですか？",
    a:
      "自治体のごみとしては回収されません。埼玉県は、廃棄したい場合は最寄りの警察署に相談するよう案内しています。" +
      "登録証のない刀剣は売買等が禁止されているため、回収業者や買取店に渡す前に、登録証の有無と手続きを確認してください。",
  },
  {
    q: "発見届を出してから、登録証が届くまでどのくらいかかりますか？",
    a:
      "都道府県によって異なります。埼玉県は警察への届出から審査会の案内が届くまで2〜3か月かかることがあるとし、" +
      "千葉県は届出から審査・登録証交付まで約半年かかるとしています。",
  },
];

const sources = [
  { label: "銃砲刀剣類所持等取締法（第14条・第17条・第23条）", org: "e-Gov法令検索", url: "https://laws.e-gov.go.jp/law/333AC0000000006" },
  { label: "所有者変更や住所変更・貸付保管委託の手続", org: "東京都教育委員会", url: "https://www.kyoiku.metro.tokyo.lg.jp/ja/lifelong/cultural_property/registration/registration_01" },
  { label: "銃砲刀剣類の登録制度に関するよくある質問", org: "埼玉県", url: "https://www.pref.saitama.lg.jp/f2216/toukentouroku/faq.html" },
  { label: "銃砲刀剣類を発見した場合（銃砲刀剣類の登録について）", org: "千葉県", url: "https://www.pref.chiba.lg.jp/kyouiku/bunkazai/tetsuzuki/juuhou-01.html" },
  { label: "銃砲刀剣類", org: "福島県", url: "https://www.pref.fukushima.lg.jp/site/edu/bunkazai13.html" },
];

const related = [
  { href: "/kichouhin-genkin-hakken/", label: "片付け中に貴重品・現金が見つかったら", desc: "見つけた物の扱いと確認先" },
  { href: "/shibougo-tetsuzuki-ihinseiri/", label: "家族が亡くなった後の手続きと遺品整理", desc: "手続きと片付けの順番" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親の家を片付けるときの段取り" },
  { href: "/souzoku-ie-katazuke/", label: "相続した家の片付け", desc: "相続した家の家財の扱い" },
  { href: "/muryou-kaishuu-chuui/", label: "「無料回収」をうたう業者の注意点", desc: "トラブルを避ける確認事項" },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "遺品や実家から日本刀が出てきたら" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  author: { "@type": "Organization", name: "片付けレスキュー編集部" },
  publisher: { "@type": "Organization", name: "片付けレスキュー" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: `${SITE}${PATH}`,
};

function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      <span className="mono text-primary mr-2">{num}</span>
      {children}
    </h2>
  );
}

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜日本刀の扱いで法律が定めていること" },
    { href: "#kubun", label: "2｜状況ごとの手続き" },
    { href: "#steps", label: "3｜日本刀が出てきたときの5ステップ" },
    { href: "#chui", label: "4｜売却・処分・登録証の注意点" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#shutten", label: "6｜出典・参考にした公的情報" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "遺品や実家から日本刀が出てきたら" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          遺品や実家から日本刀が出てきたら｜登録証の確認、警察署への発見届と所有者変更の届出
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月26日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          遺品整理や実家の片付けで日本刀が出てきたら、最初に「銃砲刀剣類登録証」が一緒にあるかを確認します。
          登録証があれば、相続した人が20日以内に、登録証を発行した都道府県の教育委員会へ所有者変更の届出をします。
          登録証がなければ、発見場所を管轄する警察署に連絡して発見届を出します。いずれも銃砲刀剣類所持等取締法（銃刀法）が定める手続きです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          日本刀は自治体のごみとしては回収されず、登録証のない刀剣の売買等は禁止されています。
          この記事では、法律の条文と東京都・埼玉県・千葉県・福島県の公式案内をもとに、片付けの中で日本刀が出てきたときの手続きを順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>登録証がある刀剣を相続したら、20日以内に登録証を発行した都道府県の教育委員会へ届け出る（銃刀法第17条）</li>
          <li>登録証のない刀剣を見つけたら、速やかに警察署へ届け出る（銃刀法第23条）。交番では受け付けない（福島県）</li>
          <li>発見届の後は、都道府県の登録審査会で鑑定を受け、登録が認められれば登録証が交付される</li>
          <li>自治体のごみとしては回収されない。手放したい場合は最寄りの警察署に相談する（埼玉県）</li>
        </ul>
      </div>

      <nav aria-label="目次" className="my-10 rounded-2xl border border-border bg-surface-alt p-5 sm:p-6">
        <p className="font-bold text-primary mb-3">Contents</p>
        <ol className="space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-primary hover:underline font-medium">{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <H2 id="kiso" num="1">日本刀の扱いで法律が定めていること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        日本刀などの刀剣類は、銃砲刀剣類所持等取締法の対象です。片付けを進める前に、法律と都道府県が示している扱いを確認してください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kubun" num="2">状況ごとの手続き</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        登録証の有無と、手元に置くかどうかで手続きが分かれます。提出方法や必要書類は都道府県によって異なるため、届出先の案内で確認してください。
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-border">
          <thead className="bg-surface-alt">
            <tr>
              <th className="text-left p-3 border-b border-border">状況</th>
              <th className="text-left p-3 border-b border-border">手続き</th>
              <th className="text-left p-3 border-b border-border">根拠・案内</th>
            </tr>
          </thead>
          <tbody>
            {table.map(([a, b, c]) => (
              <tr key={a} className="border-b border-border align-top">
                <td className="p-3 font-medium text-text-primary">{a}</td>
                <td className="p-3 text-text-secondary">{b}</td>
                <td className="p-3 text-text-secondary">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="steps" num="3">日本刀が出てきたときの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        進め方は、登録証を確かめる→登録証があれば所有者変更の届出→なければ発見届→登録審査→登録しない場合は警察署の指示に従う、の順です。
      </p>
      <div className="space-y-5 mb-4">
        {steps.map((s, i) => (
          <div key={s.title}>
            <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
              <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4 mt-6">
        刀剣以外に現金や通帳などが見つかったときの扱いは<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>、
        相続の手続きと片付けの順番は<Link href="/shibougo-tetsuzuki-ihinseiri/" className="text-primary underline underline-offset-2">家族が亡くなった後の手続きと遺品整理</Link>で解説しています。
      </p>

      <H2 id="chui" num="4">売却・処分・登録証の注意点</H2>
      <div className="space-y-4 mb-4">
        {cautions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ほかの家財の片付けを業者に依頼する場合は、家庭の廃棄物の回収に必要な市区町村の許可や委託を確認できる業者を選んでください。
        回収業者とのトラブルを避ける確認事項は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">「無料回収」をうたう業者の注意点</Link>で解説しています。
      </p>

      <H2 id="faq" num="5">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="shutten" num="6">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・{CHECKED}確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="7">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたもので、法的な助言ではありません。届出の方法・必要書類・審査の日程は都道府県により異なるため、
        必ず届出先の都道府県教育委員会と、発見場所を管轄する警察署の案内をご確認ください。
      </p>
    </article>
  );
}
