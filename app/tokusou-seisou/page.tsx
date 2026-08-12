import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/tokusou-seisou/";
const TITLE = "特殊清掃とは｜通常清掃との違い・必要になる場面・依頼の流れ";
const DESC =
  "特殊清掃とは、孤独死や事故などが起きた部屋、強い汚損や臭気のある部屋を、専用の薬剤・機材で清掃・消毒・消臭する専門作業です。ハウスクリーニングとの違い、必要になる場面、依頼から作業完了までの流れ、自分でやってはいけない理由、業者選びのポイントを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "特殊清掃とは「原状の回復を目的とした専門的な清掃・消毒・消臭」",
    body: "特殊清掃とは、通常の掃除やハウスクリーニングでは対応できない状態の室内を、専用の薬剤・機材と専門知識を用いて清掃・消毒・消臭する作業の総称です。孤独死や事故のあった部屋の清掃が代表例ですが、長期間放置されたゴミ屋敷で体液・排泄物・腐敗した生ゴミなどによる強い汚損や臭気がある場合、害虫が大量発生している場合、ペットの多頭飼育で汚損が進んだ場合なども対象になります。見た目をきれいにするだけでなく、感染症のリスクに配慮した消毒や、建材に染み込んだ臭気への対処までを含むのが特徴です。",
  },
  {
    title: "ハウスクリーニングとの違い",
    body: "ハウスクリーニングは、生活に伴う汚れ（キッチンの油汚れ、浴室の水あか、床のくすみなど）を落とすサービスで、居住中の住まいの美化が主な目的です。一方、特殊清掃は衛生上のリスクがある汚損への対処が目的で、感染予防の装備、汚染物の適切な処理、オゾン脱臭機などによる消臭、状況によっては解体を伴う原状回復工事まで踏み込みます。「掃除しても臭いが取れない」「体液や腐敗による汚損がある」という状態は、ハウスクリーニングではなく特殊清掃の領域です。",
  },
  {
    title: "特殊清掃が必要になる主な場面",
    body: "代表的なのは、孤独死・事故・事件などで発見が遅れた部屋の原状回復です。このほか、ゴミ屋敷の片付けで床や壁に汚損・臭気が及んでいる場合、害虫・害獣の死骸や糞尿による汚染がある場合、火災後のすす・臭気が残る場合、浸水後の汚泥やカビが広がった場合などにも、特殊清掃の技術が使われます。賃貸物件では、原状回復や次の入居者への影響に関わるため、管理会社・大家と相談しながら専門業者に依頼するのが一般的です。",
  },
];

const steps = [
  {
    title: "現場の状態を保全し、立ち入りを最小限にする",
    body: "孤独死などの現場では、まず警察による対応が済んでいることが前提です。その後も、感染症や臭気拡散のリスクがあるため、むやみに立ち入ったり窓を開け放ったりせず、立ち入りを最小限にとどめます。賃貸の場合は管理会社・大家への連絡も早い段階で行いましょう。",
  },
  {
    title: "特殊清掃に対応する業者へ連絡し、現地見積もりを依頼する",
    body: "特殊清掃は現場の状態によって作業内容が大きく変わるため、電話やメールでの概算だけでなく、現地確認のうえでの見積もりが基本です。汚損の範囲、臭気の程度、遺品整理や残置物撤去の要否、原状回復工事の要否を確認してもらい、作業範囲と総額を書面で提示してもらいましょう。",
  },
  {
    title: "作業範囲と優先順位を決める（清掃・消臭・遺品整理・工事）",
    body: "特殊清掃は「汚染箇所の清掃・消毒→汚染物・残置物の撤去→消臭→必要に応じて内装の解体・原状回復工事」という段階で進むのが一般的です。遺品整理を伴う場合は、貴重品や思い出の品の捜索をどこまで行うかも事前にすり合わせます。予算に応じて、必須の衛生処理と、後回しにできる工事を切り分けて相談することもできます。",
  },
  {
    title: "作業実施と完了確認",
    body: "作業当日は、養生・感染対策のうえで汚染箇所の清掃・消毒、汚染物の搬出、消臭処理が行われます。臭気が建材に染みている場合は、オゾン脱臭などの処理に数日単位の期間がかかることもあります。完了時には、見積もり時の作業範囲どおりに実施されたか、臭気の残りがないかを立会いで確認しましょう。",
  },
  {
    title: "再発防止・その後の手続きへつなぐ",
    body: "賃貸なら管理会社・大家への報告と原状回復の協議、持ち家なら売却・リフォームなど次の用途への引き継ぎを行います。遺品整理や相続の手続きが続く場合は、遺品整理の進め方の記事も参考にしてください。",
  },
];

const ngActions = [
  {
    title: "体液や腐敗による汚損を自分で掃除しようとする",
    body: "感染症のリスクがあるうえ、市販の洗剤では建材に染みた汚染や臭気に対処できません。表面だけ拭き取っても床下や壁内部に汚染が残り、かえって対応が長引くことがあります。汚損の程度が重い場合は、最初から専門業者に任せるのが安全です。",
  },
  {
    title: "臭気を消そうと芳香剤や換気だけで済ませる",
    body: "腐敗臭などの強い臭気は、発生源の除去と建材レベルの処理をしない限り消えません。芳香剤で上塗りしても混ざった臭いが残り、近隣への影響も続きます。臭いの元を断つ処理ができるのは、発生源を特定して除去する専門作業です。",
  },
  {
    title: "料金の内訳を確認せずに口頭見積もりで契約する",
    body: "特殊清掃は現場ごとに作業量が大きく異なるため、「一式いくら」の口頭見積もりでは、作業後に追加請求される余地が残ります。作業範囲・薬剤や機材の使用・残置物撤去・工事の有無を書面で確認し、追加が発生する条件も事前に聞いておきましょう。",
  },
  {
    title: "近隣や管理会社への連絡を後回しにする",
    body: "臭気や害虫は近隣にも影響します。賃貸で管理会社への報告を怠ると、原状回復の協議や保険の適用でも不利になりかねません。心情的につらい場面ですが、関係者への連絡は早いほど選択肢が残ります。",
  },
];

const judgeSigns = [
  "孤独死・事故などがあった部屋の清掃・原状回復が必要",
  "掃除をしても取れない腐敗臭・強い臭気が部屋に染み付いている",
  "体液・排泄物・腐敗した生ゴミなどによる汚損が床や壁に及んでいる",
  "害虫が大量発生しており、片付けと駆除・消毒をまとめて行う必要がある",
  "賃貸物件で、原状回復を前提とした対応を管理会社と進める必要がある",
];

const faqs = [
  {
    q: "特殊清掃とハウスクリーニングはどう違いますか？",
    a: "ハウスクリーニングは生活汚れを落とす美化が目的のサービスです。特殊清掃は、孤独死・事故・重度のゴミ屋敷などで生じた衛生上のリスクがある汚損・臭気に対し、消毒・消臭・汚染物処理まで行う専門作業です。「掃除では取れない臭いがある」「体液・腐敗による汚損がある」場合は特殊清掃の領域と考えてください。",
  },
  {
    q: "特殊清掃の費用はどのくらいかかりますか？",
    a: "汚損の範囲・臭気の程度・間取り・残置物の量・原状回復工事の有無によって大きく異なるため、一律の金額は言えません。現地確認のうえでの書面見積もりが前提となる分野です。複数社に現地見積もりを依頼し、作業範囲と総額、追加費用の条件を比較して判断してください。費用の考え方は当サイトの費用相場ページも参考になります。",
  },
  {
    q: "特殊清掃はどのくらいの期間で終わりますか？",
    a: "現場の状態によります。汚染箇所が限定的なら短期間で済むこともありますが、臭気が建材に染みている場合はオゾン脱臭などに数日単位の期間を要し、内装の解体・原状回復工事まで行う場合はさらに長くなります。見積もり時に、作業工程ごとのおおよその日程を確認しておきましょう。",
  },
  {
    q: "遺品整理と特殊清掃はまとめて頼めますか？",
    a: "特殊清掃と遺品整理・残置物撤去の両方に対応する業者であれば、まとめて依頼できます。当サイトで紹介しているブルークリーンのように、特殊清掃から遺品整理・原状回復工事まで一貫対応をうたう業者もあります。貴重品の捜索や形見分けの希望がある場合は、作業前に必ず伝えておきましょう。",
  },
];

const related = [
  { href: "/review/blue-clean/", label: "ブルークリーンの評判", desc: "特殊清掃に対応する東京の業者" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "遺品整理を伴う場合の手順" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃手順", desc: "害虫被害がある部屋の対処" },
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷片付け業者の選び方", desc: "重度の散らかりの片付け依頼" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "費用の考え方と見積もりのポイント" },
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
    { "@type": "ListItem", position: 2, name: "特殊清掃とは" },
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
    { href: "#kiso", label: "1｜特殊清掃の基礎知識（定義・違い・必要な場面）" },
    { href: "#steps", label: "2｜依頼から作業完了までの流れ5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜特殊清掃業者に相談すべきケースと選び方" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "特殊清掃とは" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">清掃の基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          特殊清掃とは｜通常清掃との違い・必要になる場面・依頼の流れ
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「特殊清掃」という言葉を、孤独死のニュースや遺品整理の情報の中で目にした方は多いと思います。しかし、実際にどんな作業なのか、ハウスクリーニングと何が違うのか、どんなときに必要で、どう依頼すればよいのかを知る機会はほとんどありません。多くの人にとっては、家族の身に何かが起きたとき、初めて直面する分野です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、特殊清掃の定義と通常清掃との違い、必要になる場面、依頼から作業完了までの流れ、自分で対処してはいけない理由、業者選びのポイントを、初めての方にもわかるよう順に解説します。いざというときに落ち着いて対応するための基礎知識としてお読みください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>特殊清掃は、衛生リスクのある汚損・臭気を専用の薬剤・機材で清掃・消毒・消臭する専門作業</li>
          <li>生活汚れの美化が目的のハウスクリーニングとは目的も技術も異なる</li>
          <li>体液・腐敗による汚損や取れない臭気は、感染リスクがあるため自分で対処しない</li>
          <li>費用は現場の状態で大きく変わるため、現地確認のうえ書面見積もりが原則</li>
          <li>遺品整理・原状回復工事まで一貫対応できる業者ならやり取りを一本化できる</li>
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

      <H2 id="kiso" num="1">特殊清掃の基礎知識（定義・違い・必要な場面）</H2>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">依頼から作業完了までの流れ5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        特殊清掃が必要になった場合の、依頼から完了までの一般的な流れです。突然の出来事で動転している状況が多いからこそ、全体像を知っておくことが助けになります。
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

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="4">特殊清掃業者に相談すべきケースと選び方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、通常の片付け・清掃業者ではなく、特殊清掃に対応する業者へ相談してください。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        業者選びでは、特殊清掃の実績、現地見積もりと書面提示の有無、消臭作業の方法（発生源除去とオゾン脱臭等の併用か）、遺品整理・原状回復工事までの対応範囲を確認しましょう。当サイトでは、特殊清掃から原状回復まで一貫対応をうたう<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>のレビューを掲載しています。東京エリアの業者比較は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け・清掃業者おすすめ</Link>も参考にしてください。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          特殊清掃を含む片付け・清掃業者の比較には、こちらのページをご活用ください。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/ranking/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors">
            片付け業者ランキングを見る
          </Link>
          <Link href="/cost/price/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors">
            費用相場を確認する
          </Link>
        </div>
      </div>

      <H2 id="faq" num="5">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="6">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。実際の作業内容・費用・期間は現場の状態により異なるため、必ず現地見積もりでご確認ください。賃貸物件では管理会社・大家との協議を前提に進めてください。
      </p>
    </article>
  );
}
