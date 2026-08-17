import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/oosouji-gyousha-hani/";
const TITLE = "大掃除を業者に頼む範囲の考え方｜自分でやる場所・任せる場所の分け方";
const DESC =
  "年末や引っ越し前の大掃除を全部自力でやるのは大変ですが、全部業者に任せると費用がかさみます。危険な場所・専門機材が必要な場所はプロ、日常の延長でできる場所は自分という振り分けの基準、家中の掃除場所のリスト化から予約・当日準備までの5ステップ、高所作業や洗剤の混用などのNG行動、依頼前に片付けを済ませるべき理由までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「全部自分で」も「全部業者に」も、どちらも最適ではない",
    body: "大掃除の悩みは、時間と体力が足りないことと、費用をかけたくないことの綱引きです。全部自力でやろうとすると、休日を何日つぶしても終わらず、高所や頑固な汚れで挫折しがちです。かといって家中をプロに任せれば、その分費用は積み上がります。現実的な最適解は、場所ごとに「自分でやる」「プロに任せる」を振り分けることです。プロにしか出せない成果がある場所に絞って依頼し、それ以外は自分でやる。この考え方に切り替えるだけで、費用対効果は大きく変わります。",
  },
  {
    title: "頼める業者は「ハウスクリーニング」と「片付け業者」で役割が違う",
    body: "大掃除の文脈で頼れる業者は大きく2種類あります。ハウスクリーニングは、エアコン・レンジフード・浴室などの「汚れを落とす」専門サービスで、箇所単位のメニューで依頼するのが一般的です。片付け業者・不用品回収業者は、物を減らす・運び出すことが本業で、大掃除の前段の「物のリセット」を担います。部屋に物があふれている状態でクリーニングを頼んでも、床や棚が物で覆われていては作業できません。自分の家の課題が「汚れ」なのか「物の量」なのかを見極めることが、依頼先選びの第一歩です。両者の違いはハウスクリーニングと片付け業者の違いで詳しく解説しています。",
  },
  {
    title: "大掃除は「今年の汚れを落とす日」から「仕組みを見直す機会」へ",
    body: "大掃除を単発のイベントとして頑張ると、翌年もまた同じ場所で同じ苦労をすることになります。おすすめは、大掃除を「どの場所を年に何回・誰が掃除するか」という年間の分担を見直す機会と捉えることです。例えば、エアコンやレンジフードのような専門性の高い場所は年1回プロに任せると決めてしまえば、日々の掃除は表面の手入れだけで済みます。自分でやる場所も、大掃除で一度リセットしておけば、あとは日常の掃除で維持する方がトータルの負担は軽くなります。",
  },
];

const merits = [
  {
    title: "基準1：高い場所・危険を伴う場所はプロに任せる",
    body: "脚立に乗っての高所窓・外壁面の掃除、2階の窓の外側、照明器具の高い位置の作業などは、転落のリスクを伴います。家庭内の事故は掃除中の転落・転倒も一因とされており、慣れない高所作業を年に一度の大掃除で無理に行うのは割に合いません。高所や足場の悪い場所は、道具と経験のあるプロに任せる場所の筆頭です。同様に、大型家具を動かしての裏側の掃除も、腰を痛めたり家具を倒したりするリスクがあるため、無理をしない判断が大切です。",
  },
  {
    title: "基準2：分解・専用機材が必要な場所はプロに任せる",
    body: "エアコンの内部洗浄、レンジフード（換気扇）の分解洗浄、浴室エプロン内部の清掃、洗濯機の分解洗浄などは、素人が分解すると故障や水漏れの原因になり得る領域です。これらは市販の道具では落とせない内部の汚れを、専用機材と洗剤で洗浄することに価値があるメニューで、プロに頼む効果が最も分かりやすい場所でもあります。逆に言えば、分解も機材も必要ない場所は自分でやれる可能性が高い、という判断軸になります。",
  },
  {
    title: "基準3：日常の掃除の延長でできる場所は自分でやる",
    body: "床の拭き掃除、棚のほこり取り、窓の内側、トイレ・洗面台、キッチンの表面の油汚れなどは、時間さえ確保すれば特別な技術なしでできる場所です。この範囲までプロに頼むと、費用の割に「自分でもできたな」という結果になりがちです。自力の掃除は、洗剤の性質（酸性・アルカリ性）と汚れの相性を知っているだけで効率が大きく変わります。キッチンの油汚れはキッチン・コンロ周りの掃除、水回りは浴室・水回りの清掃の記事で手順を解説しています。",
  },
];

const steps = [
  {
    title: "家中の「今年きれいにしたい場所」を書き出す",
    body: "最初に、家の中を一周しながら「今年の大掃除でやりたい場所」をすべて書き出します。部屋ごとに、床・窓・照明・収納・水回り・換気扇と見ていくと漏れがありません。このとき、汚れ具合も「軽い・重い・手に負えない」の3段階でメモしておきます。リスト化の目的は、作業量を可視化して「全部は無理」という現実を早めに受け入れることです。全体が見えれば、優先順位と振り分けの判断ができるようになります。",
  },
  {
    title: "リストを「自分・家族・プロ」に振り分ける",
    body: "書き出した場所を、前章の3つの基準（危険・専門性・日常の延長）で振り分けます。高所と分解が必要な場所はプロ、軽い汚れの場所は家族で分担、重い汚れでも表面的な場所は道具を揃えて自分で、という具合です。プロに頼む場所は「今年はエアコンとレンジフードだけ」のように毎年絞り、年ごとにローテーションする方法も費用を平準化できます。家族で分担する場合は、場所単位で担当を決めると進捗が見えやすくなります。",
  },
  {
    title: "プロに頼む場所は早めに予約する（年末は混み合う）",
    body: "ハウスクリーニングは、大掃除シーズンの年末に予約が集中し、希望日が取りにくくなったり通常期より条件が悪くなったりする傾向が一般に知られています。プロに任せると決めた場所は、時期をずらせるなら秋口など早めの依頼を検討しましょう。エアコン洗浄は使用シーズン前、レンジフードは年末前など、場所ごとに適した時期に分けるのも一手です。予約時には、汚れの状態・築年数・設備の型式などを伝えると、見積もりと当日の作業がスムーズになります。",
  },
  {
    title: "業者が来る前に「物の片付け」を済ませておく",
    body: "クリーニングの作業当日までに、対象箇所の周りの物を片付けておくことが大切です。キッチンなら調理器具や調味料、浴室なら風呂用品、床清掃なら床置きの物を移動しておくと、作業時間が本来の清掃に使われます。この機会に「そもそも要らない物」を仕分けてしまえば、掃除のしやすい部屋に一歩近づきます。物の量が多くて片付け自体が進まない場合は、片付けの順番の記事を参考にするか、片付け業者に物の整理から依頼する方法もあります。",
  },
  {
    title: "自分でやる場所は「上から下・奥から手前」で一気に進める",
    body: "自力の掃除は、ほこりが上から下へ落ちることを踏まえて、照明・棚の上→壁・窓→床の順で進めるのが基本です。部屋の奥から手前へ進めば、きれいにした場所を踏み荒らさずに済みます。洗剤は用途表示を確認し、つけ置きで汚れを浮かせている間に別の場所を進めると時間効率が上がります。全体の段取りや自力清掃の基本は自力で部屋を片付け・清掃する方法のガイドにまとめています。1日で全部やろうとせず、週末2〜3回に分けるほうが結果的に完走しやすくなります。",
  },
];

const ngActions = [
  {
    title: "脚立や窓枠に乗っての無理な高所作業",
    body: "年に一度の大掃除で最も避けたいのが、高所作業中の転落事故です。安定しない脚立の最上段に立つ、窓枠や手すりに乗って外側を拭くといった行為は、プロでも安全装備なしには行わない危険な作業です。掃除の仕上がりと引き換えにできるリスクではありません。高所の窓・外壁面・高天井の照明などは、無理せず専門業者に任せるか、柄の長い道具で届く範囲までにとどめましょう。特に一人で作業している時の事故は発見が遅れるため、高所作業は絶対に単独で行わないでください。",
  },
  {
    title: "洗剤の「混ぜるな危険」を軽視する",
    body: "塩素系の洗剤・漂白剤と酸性タイプの洗剤が混ざると、有毒なガスが発生するおそれがあることは製品にも表示されています。大掃除では普段使わない洗剤を複数併用しがちで、浴室やトイレの狭い空間で連続使用すると意図せず混ざるリスクが上がります。異なる洗剤を同じ場所で使うときは、間で十分に水で流し、換気を続けることが大切です。製品の注意表示を必ず読み、「強力そうだから」と自己流でブレンドすることは絶対にやめてください。",
  },
  {
    title: "エアコンや洗濯機を自己流で分解する",
    body: "内部の汚れが気になるからと、エアコンのパネルの奥や洗濯機の槽を自己流で分解するのはやめましょう。電装部品に洗浄液がかかると故障や漏電の原因になり、組み戻しの不備は水漏れや異音につながります。メーカーも取扱説明書に記載された範囲を超える分解は推奨していません。フィルター掃除など説明書に書かれた手入れは自分で、内部洗浄は専門業者に、という線引きが安全です。エアコンは、買い替え・処分を検討している場合はエアコンの取り外しと処分の記事も参考にしてください。",
  },
  {
    title: "物を減らさないまま「掃除だけ」を頼む",
    body: "床や棚が物で覆われた部屋では、クリーニング業者は本来の清掃力を発揮できません。物をどかす作業に時間が取られたり、物のある場所は清掃範囲から外れたりして、費用に見合う仕上がりになりにくいのです。大掃除の効果を最大化する順番は、「物を減らす→汚れを落とす」です。物の量に課題がある場合は、まず不用品の処分から着手しましょう。不用品の処分ルートは不用品の処分ルートの使い分けで、物が多すぎて手に負えない場合は片付け業者への依頼も含めて検討してください。",
  },
];

const judgeSigns = [
  "エアコン・レンジフード・浴室など、分解や専用機材が必要な場所の汚れを落としたい",
  "高所の窓や照明など、自力では危険を伴う場所がある",
  "共働き・育児・介護などで、大掃除にまとまった時間を確保できない",
  "高齢の家族の家の大掃除で、本人にも家族にも作業の体力負担が大きい",
  "長年手を付けていない場所の汚れが、市販の洗剤では落ちなくなっている",
];

const faqs = [
  {
    q: "大掃除を業者に頼む場合、費用はどのくらいかかりますか？",
    a: "ハウスクリーニングは箇所単位のメニュー料金が一般的で、料金は業者・箇所・汚れの状態・設備の型式により異なります。当サイトでは特定の金額を断定せず、複数業者の見積もりやサービス内容の比較をおすすめしています。くらしのマーケットのように料金を表示して比較できるサービスや、ミツモアのような一括見積もりを使うと、相場観をつかみやすくなります。物の処分を伴う場合の費用の考え方は費用相場ページを参考にしてください。",
  },
  {
    q: "大掃除は業者に頼むならいつ予約すべきですか？",
    a: "年末は大掃除需要で予約が集中しやすいことが一般に知られており、希望日に頼みたいなら早めの予約が安全です。時期をずらせる箇所は、秋口や年明けなど閑散期に依頼する方法もあります。エアコンは冷房シーズン前後に需要が高まる傾向があるため、箇所ごとに時期を分散させると予約も取りやすく、費用の平準化にもつながります。具体的な予約可能日と条件は各業者・各サービスでご確認ください。",
  },
  {
    q: "掃除と一緒に不用品の処分も頼めますか？",
    a: "ハウスクリーニング業者は清掃が専門で、不用品の回収には対応しないか、対応しても別料金・別手配となるのが一般的です。物の量が多い場合は、片付け・不用品回収業者に整理と搬出を依頼し、その後にクリーニングを入れる二段構えが効率的です。ゴミ屋敷状態など物の量が課題の場合は、清掃まで一括対応する片付け専門業者もあります。依頼先の選び方はハウスクリーニングと片付け業者の違いの記事で解説しています。",
  },
  {
    q: "自分でやる大掃除を挫折せずに終えるコツはありますか？",
    a: "一日で家中を終わらせようとしないことが最大のコツです。場所のリストを作り、週末ごとに2〜3か所ずつ進める計画にすると、1回あたりの負担が減り完走しやすくなります。また、掃除の前にその場所の物を減らしておくと、作業時間は体感で大きく短くなります。順番は上から下へ、奥から手前へが基本です。片付けの進め方は片付けの順番の記事、日々の維持は片付けのリバウンド防止の記事が参考になります。",
  },
];

const related = [
  { href: "/house-cleaning-chigai/", label: "ハウスクリーニングと片付け業者の違い", desc: "依頼先の選び方の基本" },
  { href: "/kitchen-konro-seisou/", label: "キッチン・コンロ周りの掃除", desc: "油汚れを自力で落とす手順" },
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水回りの徹底清掃", desc: "水あか・カビの落とし方" },
  { href: "/guide/self-cleanup/", label: "自力での片付け・清掃ガイド", desc: "自分でやる場合の基本手順" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "きれいな状態を維持する仕組み" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "処分方法の選び方を詳しく" },
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
    { "@type": "ListItem", position: 2, name: "大掃除を業者に頼む範囲の考え方" },
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
    { href: "#kiso", label: "1｜大掃除と業者依頼の基本の考え方" },
    { href: "#merit", label: "2｜自分とプロを振り分ける3つの基準" },
    { href: "#houshin", label: "3｜費用対効果を高める全体方針" },
    { href: "#steps", label: "4｜大掃除の計画5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に頼んだほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "大掃除を業者に頼む範囲の考え方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          大掃除を業者に頼む範囲の考え方｜自分でやる場所・任せる場所の分け方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          年末の大掃除、今年こそやり切りたいけれど時間も体力も足りない——そんなとき「業者に頼む」という選択肢が浮かびますが、どこまで頼むべきかは意外と難しい問題です。全部任せれば費用がかさみ、全部自力では終わらない。答えは、場所ごとの振り分けにあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、危険な場所・専門機材が必要な場所はプロ、日常の延長でできる場所は自分、という振り分けの3基準と、リスト化から予約・当日準備までの計画の立て方、大掃除でやりがちなNG行動を解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>大掃除は「全部自分」でも「全部プロ」でもなく、場所ごとに振り分けるのが最適</li>
          <li>高所など危険な場所、分解・専用機材が必要な場所（エアコン・レンジフード等）はプロへ</li>
          <li>日常の掃除の延長でできる場所は自分で。順番は上から下・奥から手前</li>
          <li>効果を出す順番は「物を減らす→汚れを落とす」。掃除の前に片付けを済ませる</li>
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

      <H2 id="kiso" num="1">大掃除と業者依頼の基本の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、大掃除で業者を使うことをどう捉えるか、基本の考え方を整理します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">自分とプロを振り分ける3つの基準</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「この場所はどっち？」と迷ったときに使える、シンプルな3つの判断基準です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">費用対効果を高める全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        限られた予算で満足度を最大にする方針は、「プロにしかできない場所に費用を集中させる」ことです。エアコン内部やレンジフードの分解洗浄は、自力では到達できない汚れが落ちるため、支払った費用の効果を実感しやすい場所です。逆に、床拭きや棚のほこり取りのような誰でもできる作業に費用を使うのは、時間を買う目的が明確な場合を除けばもったいない使い方です。また、掃除の前に物を減らしておくことも、費用対効果を左右します。物が少ない部屋は自力の掃除も業者の作業も速く終わるからです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物の量に課題を感じる場合は、大掃除の計画に「処分」の工程を組み込みましょう。処分ルートの選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルートの使い分け</Link>を、自治体の粗大ごみの一般的な流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">大掃除の計画5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        振り分けの基準が分かったら、実際の計画に落とし込みます。リスト化→振り分け→予約→前準備→実行の5ステップです。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のような状況に当てはまるなら、その場所は業者に任せる価値が高いと考えられます。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        清掃の依頼先は、<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>のように箇所別メニューの料金と口コミを比較して選べるサービスが便利です。物の整理・処分から必要な場合は、<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で片付け業者の見積もりを比較する方法もあります。いずれも、作業範囲と総額を予約・依頼前に確認することが失敗を防ぐ基本です。
      </p>
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
        本記事は一般的な知識の提供を目的としたものです。清掃・クリーニングの料金やメニュー、予約の条件は業者・時期・設備の状態により異なるため、各サービスの案内と見積もりでご確認ください。洗剤・機器の使用は製品の注意表示・取扱説明書に従ってください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
