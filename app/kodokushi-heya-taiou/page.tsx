import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kodokushi-heya-taiou/";
const TITLE = "孤独死があった部屋はどうする？発見後の流れと部屋の対応手順";
const DESC =
  "親族の孤独死に直面したとき、発見後に何が起こり、部屋をどう対応すればよいのかを解説します。発見から引き渡しまでの一般的な流れ、特殊清掃が必要になる理由、遺族が自分で行うことと専門業者に任せることの線引き、賃貸の場合の大家・管理会社とのやり取り、業者選びの注意点までを整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "発見直後は警察の対応が最優先で、部屋には手を付けない",
    body: "一人暮らしの方が亡くなった状態で見つかった場合、まず警察による現場の確認や死因の調査が行われるのが一般的です。この間、部屋は警察の管理下に置かれ、遺族であっても自由に立ち入ったり物を動かしたりすることはできません。部屋の片付けや清掃について考えるのは、警察の手続きが終わり、部屋が遺族に引き渡されてからになります。焦って動く必要はない、というより、動けない期間があるのが通常だと知っておくと落ち着いて対応できます。",
  },
  {
    title: "部屋の状態によっては「特殊清掃」が必要になる",
    body: "発見までに時間が経過していた場合、体液や臭気が床材や壁に浸透し、市販の洗剤や通常のハウスクリーニングでは対応できない状態になっていることがあります。このようなケースで行われるのが、専用の薬剤や機材を使う特殊清掃です。原状回復には、清掃・消臭に加えて床材の撤去などの工事が必要になる場合もあります。特殊清掃がどのような作業なのかは特殊清掃とは何かの記事で詳しく解説しています。",
  },
  {
    title: "遺族が一人で抱え込まないことが何より大切",
    body: "親族の孤独死は、突然の悲しみに加えて、部屋の対応・各種手続き・関係者とのやり取りが短期間に重なる、心身の負担が非常に大きい出来事です。現場を自分の目で確認しようとして強いショックを受ける方も少なくありません。部屋の状態が深刻な場合、無理に自分で見たり作業したりせず、専門業者に状況確認から任せることは、決して薄情なことではなく、自分と家族を守る現実的な選択です。",
  },
];

const flows = [
  {
    title: "警察の手続きが終わり、部屋が引き渡されるまで",
    body: "発見後は、警察による確認・調査と並行して、葬儀や役所の手続きが進みます。部屋の鍵が遺族に引き渡されるまでの期間はケースによって異なります。この段階でできる準備は、賃貸であれば大家・管理会社への連絡と今後の相談、そして特殊清掃・遺品整理業者の情報収集です。引き渡し後の動きを先に描いておくと、その後が格段に進めやすくなります。",
  },
  {
    title: "賃貸の場合：大家・管理会社との連携が必須",
    body: "賃貸住宅では、部屋の原状回復や契約の終了について、大家・管理会社との話し合いが必要です。清掃や工事の範囲・費用負担・退去の期限などはケースにより異なり、契約内容や状況によって整理されるものなので、独断で工事や処分を進めず、必ず事前に相談しながら進めましょう。連帯保証人や相続に関わる論点が生じた場合は、弁護士など専門家や自治体の相談窓口の利用を検討してください。",
  },
  {
    title: "持ち家・実家の場合：時間をかけられるが放置は禁物",
    body: "持ち家の場合は退去期限がないぶん時間をかけられますが、臭気や害虫は放置するほど建物へのダメージが広がり、後の清掃・工事の負担が大きくなります。特殊清掃が必要な状態であれば、できるだけ早い段階で業者に現地を確認してもらい、緊急対応（消臭・害虫対策）と本格的な清掃・遺品整理の計画を分けて立てるのが現実的です。その後の家の扱いは空き家の片付けと管理の記事も参考になります。",
  },
];

const steps = [
  {
    title: "部屋の状態を無理に確認しない。まず電話で状況を伝える",
    body: "発見時の状況（発見までの推定期間、臭いの有無など）は、警察や発見者、管理会社からの情報である程度把握できます。深刻な状態が予想される場合、遺族が室内を直接確認するのは心理的な負担が大きいため、無理をせず、把握できている情報をもとに特殊清掃業者へ電話で相談しましょう。多くの業者が現地確認からの対応に慣れています。",
  },
  {
    title: "貴重品・重要書類の捜索を業者に依頼するか、短時間で行う",
    body: "相続や解約の手続きには、通帳・印鑑・保険証券・契約書類・スマートフォンなどが必要になります。室内に入れる状態であれば短時間で書類関係だけを持ち出し、困難な場合は特殊清掃業者に貴重品の捜索を依頼できます。「何を探してほしいか」（書類の種類、思い出の品など）をリスト化して伝えると、捜索の精度が上がります。",
  },
  {
    title: "特殊清掃・消臭を先に、遺品整理はその後に計画する",
    body: "作業の順番は、原則として「特殊清掃・消臭が先、遺品整理があと」です。衛生状態が改善しないまま遺品の仕分けを行うのは、健康面でもリスクがあります。業者によっては特殊清掃と遺品整理を一括で請け負うため、見積もり時に作業範囲と順番を確認しましょう。遺品整理の進め方自体は遺品整理を自分で進める方法の記事で解説しています。",
  },
  {
    title: "複数社から見積もりを取り、作業範囲を書面で確認する",
    body: "特殊清掃の費用は、部屋の状態・広さ・必要な作業（清掃・消臭・害虫対策・解体工事の有無）によって大きく異なるため、複数社から見積もりを取り、作業範囲・追加費用の条件・完了の基準（臭気の確認方法など）を書面で確認することが重要です。曖昧な見積もりのまま着手し、後から高額な追加請求を受けるトラブルを避けるためです。",
  },
  {
    title: "形見・思い出の品の扱いを家族で決めてから作業に入る",
    body: "作業が始まると、物の仕分けは業者のペースで進みます。事前に「残してほしい物」（写真、手紙、形見の品など）を家族で話し合ってリスト化し、業者に共有しておきましょう。判断がつかない物は「保留ボックス」にまとめて後日ゆっくり確認する方法もあります。気持ちの整理がつかないうちに、すべてを一度に手放す必要はありません。",
  },
];

const ngActions = [
  {
    title: "自分たちだけで清掃しようとする",
    body: "発見まで時間が経過した部屋の清掃は、市販の洗剤や消臭剤では対応できないうえ、感染症などの健康リスクを伴います。臭気は床下や建材に浸透するため、表面だけ拭いても解決しません。体調面でも心理面でも負担が大きく、遺族が自力で行うことはおすすめできません。専用の装備と技術を持つ専門業者の領域と割り切りましょう。",
  },
  {
    title: "賃貸で管理会社に相談せず勝手に工事・処分を進める",
    body: "賃貸住宅の原状回復は、大家・管理会社との合意のうえで進めるものです。独断で床材を剥がしたり残置物を処分したりすると、後の話し合いがこじれる原因になります。作業前に必ず相談し、清掃・工事の範囲について認識を合わせてから業者に発注しましょう。",
  },
  {
    title: "1社の言い値で契約する",
    body: "特殊清掃は緊急性が高く、遺族が相場感を持ちにくい状況につけ込んで、不当に高額な請求をする業者が紛れ込みやすい分野でもあります。急いでいても、可能な限り複数社から見積もりを取り、作業範囲と金額の根拠を比較してください。会社情報や実績が確認できない業者、内訳を出さない業者は避けるのが安全です。",
  },
  {
    title: "重要書類の確認前に全部処分してしまう",
    body: "相続手続きに必要な書類や、資産・契約の手がかりが室内に残されていることがあります。「全部まとめて処分」を先に行うと、後の手続きで行き詰まるおそれがあります。書類・スマートフォン・パソコンなどは必ず確保してから、全体の処分に進んでください。デジタル関係の扱いはデジタル遺品の整理方法の記事で解説しています。",
  },
];

const judgeSigns = [
  "発見までに時間が経過しており、臭気や汚染が生じている",
  "室内を直接確認することへの心理的な負担が大きい",
  "賃貸で、原状回復と退去までの期限が意識される状況にある",
  "遠方に住んでおり、現地での作業時間が確保できない",
  "貴重品・重要書類の捜索から任せたい",
];

const faqs = [
  {
    q: "孤独死があった部屋の片付けは自分でできますか？",
    a: "発見が早く、部屋の汚染がない場合は、通常の遺品整理として自分たちで進めることも可能です。一方、発見まで時間が経過し臭気や汚染がある場合は、健康リスクと心理的負担の両面から、特殊清掃業者に任せることを強くおすすめします。「書類の確保は自分たち、清掃と搬出は業者」という分担が現実的です。",
  },
  {
    q: "特殊清掃の費用はどのくらいかかりますか？",
    a: "部屋の状態・広さ・必要な作業（清掃・消臭・害虫対策・建材の撤去の有無）によって大きく異なるため、一律にいくらとは言えません。現地確認のうえで複数社から見積もりを取り、作業範囲と内訳、追加費用の条件を比較して判断してください。費用の考え方は当サイトの費用相場ページでも解説しています。",
  },
  {
    q: "賃貸の場合、原状回復の費用は誰が負担するのですか？",
    a: "負担のあり方は、契約内容・保証人や相続の状況・部屋の状態などによってケースごとに異なり、一概には言えません。大家・管理会社と話し合いながら整理していくのが基本で、相続放棄を含む法律上の判断が関わる場合は、弁護士などの専門家や自治体の法律相談窓口に早めに相談することをおすすめします。",
  },
  {
    q: "臭いは完全に消えますか？",
    a: "臭気の除去は、原因箇所の特定と除去・専用機材による消臭・必要に応じた建材の撤去を組み合わせて行われ、状態によって必要な作業の深さが変わります。表面的な消臭で終わらせると再発することがあるため、見積もり時に「臭気の完了確認をどう行うか」を業者に確認しておくことが大切です。部屋の臭い対策の基礎は部屋の臭いが消えないときの対処の記事も参考になります。",
  },
];

const related = [
  { href: "/tokusou-seisou/", label: "特殊清掃とは何か", desc: "通常清掃との違いと依頼の流れ" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "自分で行う範囲と業者に任せる線引き" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理方法", desc: "故人のスマホ・契約の扱い方" },
  { href: "/heya-shoushuu/", label: "部屋の臭いが消えないときの対処", desc: "臭いの原因の切り分けと消臭手順" },
  { href: "/akiya-katazuke/", label: "空き家の片付けと管理", desc: "その後の家の扱いを考える" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方", desc: "特殊清掃に対応する業者の選び方" },
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
    { "@type": "ListItem", position: 2, name: "孤独死があった部屋の対応" },
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
    { href: "#kiso", label: "1｜発見後にまず知っておきたい3つの前提" },
    { href: "#flow", label: "2｜引き渡しまでの流れと住まいの形態別の対応" },
    { href: "#houshin", label: "3｜対応の全体方針" },
    { href: "#steps", label: "4｜部屋の対応を進める5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜専門業者に任せたほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "孤独死があった部屋の対応" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          孤独死があった部屋はどうする？発見後の流れと部屋の対応手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          離れて暮らしていた親族が一人で亡くなっていた——その知らせを受けた遺族は、深い悲しみの中で、部屋の対応や各種の手続きという現実的な課題に、短期間で向き合うことになります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、発見後の一般的な流れ、特殊清掃が必要になる理由、遺族が自分で行うことと専門業者に任せることの線引き、賃貸の場合の管理会社とのやり取り、業者選びで失敗しないための注意点までを解説します。今まさに直面している方が、順番に読み進められる構成にしています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>発見直後は警察の手続きが最優先。部屋の対応を考えるのは引き渡し後でよい</li>
          <li>汚染や臭気がある部屋の清掃は自力で行わない。特殊清掃の専門業者の領域と割り切る</li>
          <li>順番は「書類・貴重品の確保 → 特殊清掃・消臭 → 遺品整理」。賃貸は管理会社との相談が先</li>
          <li>費用は状態により大きく異なるため、複数社見積もりと作業範囲の書面確認が必須</li>
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

      <H2 id="kiso" num="1">発見後にまず知っておきたい3つの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        具体的な手順の前に、状況を落ち着いて受け止めるための前提を3つお伝えします。「今すぐ全部やらなければ」と思い詰めないことが、この局面では何より大切です。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="flow" num="2">引き渡しまでの流れと住まいの形態別の対応</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        部屋の対応は、警察の手続きの終了と、住まいが賃貸か持ち家かによって進め方が変わります。それぞれのポイントを整理します。
      </p>
      <div className="space-y-4 mb-4">
        {flows.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">対応の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        部屋の対応の大原則は、「確保が先、清掃が次、整理は最後」です。手続きに必要な書類・貴重品を確保し、衛生状態を専門業者の手で回復させ、それから落ち着いて遺品と向き合う。この順番を守ることで、手続きの行き詰まりと健康リスクの両方を避けられます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        特殊清掃という作業の内容やどんな業者が行うのかを先に知っておくと、見積もりの比較がしやすくなります。<Link href="/tokusou-seisou/" className="text-primary underline underline-offset-2">特殊清掃とは何か</Link>の記事をあわせてお読みください。
      </p>

      <H2 id="steps" num="4">部屋の対応を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        引き渡し後の実務を5つのステップで整理します。すべてを遺族だけで行う必要はなく、各ステップで業者に任せられる部分があります。
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

      <H2 id="ng" num="5">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        悪質な業者を避けるための一般的なチェックポイントは、<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事にまとめています。
      </p>

      <H2 id="gyousha" num="6">専門業者に任せたほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、無理をせず特殊清掃・遺品整理の専門業者に相談しましょう。<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーンの口コミ・評判</Link>など特殊清掃に対応する業者のレビュー記事や、<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡の片付け業者おすすめ</Link>などエリア別の比較も参考にしてください。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          どの業者に相談すべきか迷ったら、編集部が特徴・口コミを比較したランキングと費用相場を参考にしてください。
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

      <H2 id="faq" num="7">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="8">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたもので、法律・相続等の個別の助言を行うものではありません。発見後の手続きの流れや費用負担はケースにより異なります。相続や契約に関わる判断は、弁護士・司法書士などの専門家や自治体の相談窓口にご相談ください。
      </p>
    </article>
  );
}
