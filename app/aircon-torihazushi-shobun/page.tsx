import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/aircon-torihazushi-shobun/";
const TITLE = "エアコンの取り外しと処分の流れ｜自分でやる範囲と業者に任せる範囲";
const DESC =
  "エアコンは家電リサイクル法の対象品目で、取り外しには冷媒ガスの回収作業（ポンプダウン）が必要なため、原則として専門業者への依頼が安全です。処分ルート（買い替え時の販売店引き取り・指定引取場所・取り外し込みの回収業者）の違い、依頼前に自分でできる準備の5ステップ、避けるべきNG行動、業者選びの注意点までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "エアコンは家電リサイクル法の対象。粗大ごみには出せない",
    body: "エアコンは、テレビ・冷蔵庫・洗濯機などと同じく家電リサイクル法（特定家庭用機器再商品化法）の対象品目です。この制度は、対象家電を粗大ごみとして廃棄するのではなく、メーカー等がリサイクルする仕組みで、処分する側はリサイクル料金と収集運搬の手続きを通じて引き渡します。料金や引き渡し方法の詳細は品目・メーカー・地域の窓口により異なるため、具体的な金額は必ず公式の案内や見積もりで確認してください。制度全体の枠組みは家電リサイクル法対象品目の処分方法の記事で解説しています。",
  },
  {
    title: "取り外しには冷媒ガスの回収作業（ポンプダウン）が必要",
    body: "エアコンの内部には冷媒ガスが循環しており、取り外しの際は「ポンプダウン」と呼ばれる作業で冷媒を室外機側に回収してから配管を外す必要があります。この手順を誤ると、冷媒ガスが大気中に放出されて環境負荷になるだけでなく、コンプレッサーの破裂・凍傷・感電といった事故につながる恐れがあります。電動工具や配管の知識も必要なため、取り外し工事は原則として専門業者に任せるのが安全です。この記事で「自分でやる」と位置づけるのは、工事ではなく依頼前の準備です。",
  },
  {
    title: "処分ルートは「買い替え時の販売店」「指定引取場所」「取り外し込みの回収業者」の3系統",
    body: "エアコンの主な手放し方は3つあります。1つ目は買い替え時に新しいエアコンを購入する販売店に引き取りを依頼する方法で、取り外し工事とセットで手配できることが多く手間が最小です。2つ目は、リサイクル券の手続きをして指定引取場所へ持ち込むなど、制度の一般的な枠組みに沿って自分で引き渡す方法ですが、取り外し工事は別途手配が必要です。3つ目は取り外しから収集・処分までを一括で任せられる回収業者への依頼です。それぞれ手間と費用のバランスが異なるため、状況に合わせて選びましょう。",
  },
];

const merits = [
  {
    title: "買い替えなら「販売店に取り外し・引き取りまで依頼」が基本",
    body: "新しいエアコンへの買い替えと同時に処分する場合は、購入する販売店に古いエアコンの取り外しと引き取りを依頼するのが最も手間の少ないルートです。家電リサイクル法では、対象品目を販売する小売業者に引き取りの役割が定められており、設置工事と同じタイミングで取り外しまで進められます。手続きや費用の内訳は販売店により異なるため、購入時に見積もりで確認しましょう。",
  },
  {
    title: "処分だけなら「取り外し工事の手配」を忘れずに",
    body: "買い替えを伴わず処分だけしたい場合は、取り外し工事を誰がやるかを先に決める必要があります。過去に購入した販売店に相談する、エアコン工事業者に取り外しのみを依頼する、取り外し込みの不用品回収業者に任せる、といった選択肢があります。リサイクルの引き渡しだけ自分で行う場合でも、壁に付いたままでは手続きが進まないため、「取り外し→引き渡し」の順番で段取りを組んでください。",
  },
  {
    title: "引っ越し・退去・部屋の片付けと重なるなら一括依頼が効率的",
    body: "退去期限が迫っている、部屋全体の不用品も処分したい、といった状況では、エアコンの取り外しと他の不用品の回収をまとめて依頼できる業者を選ぶと手配が1回で済みます。引っ越し前の荷物整理は引っ越し前の断捨離の記事、退去時の段取りは退去前の片付けの記事で詳しく解説しています。まとめて依頼する場合も、エアコンが家電リサイクル法の対象であることを踏まえ、適正に引き渡す業者かどうかを確認しましょう。",
  },
];

const steps = [
  {
    title: "メーカー・型番・設置年数を確認する",
    body: "室内機の下面や側面に貼られたシールで、メーカー名・型番・製造年を確認します。リサイクルの手続きではメーカー名が必要になり、回収業者への見積もり依頼でも型番があると話が早く進みます。まだ使える年式であれば、買取やリユースの対象になる可能性もあるため、動作状況（冷える・異音の有無など）もあわせてメモしておきましょう。",
  },
  {
    title: "買い替えか処分のみかを決め、依頼ルートを整理する",
    body: "「新しいエアコンに買い替える」のか「処分だけしたい」のかで、最適な依頼先が変わります。買い替えなら販売店への一括依頼が基本、処分のみなら取り外し工事と引き渡しの組み合わせを考えます。この方針が決まっていないまま問い合わせると、見積もりの前提が揃わず比較になりません。家族と共有している部屋であれば、この段階で処分の合意も取っておきましょう。",
  },
  {
    title: "室内機・室外機の設置状況を写真に撮る",
    body: "室内機の設置位置（高さ・周囲の家具）と、室外機の設置場所（ベランダ置き・壁掛け・屋根置き・地面置き）を写真に撮ります。特に室外機が壁掛けや屋根置きの場合は高所作業になり、作業内容が大きく変わるため、事前に伝わっているかどうかで見積もりの精度が変わります。配管が通っている壁の穴の位置や、室外機までの距離もわかる範囲で控えておくと確実です。",
  },
  {
    title: "依頼先を2〜3件比較する",
    body: "販売店・エアコン工事業者・不用品回収業者など、候補となる依頼先に型番と設置状況の写真を添えて見積もりを依頼し、2〜3件を比較します。確認すべきは、取り外し工事費・リサイクルに関わる費用・収集運搬の扱いが見積もりにどう含まれているか、追加費用が発生する条件（高所作業・配管の状況など）は何か、という内訳です。金額の総額だけでなく内訳の明確さで比較すると、信頼できる依頼先を選びやすくなります。",
  },
  {
    title: "作業当日の立ち会い準備をする",
    body: "取り外し当日は、作業者が室内機と室外機の両方にアクセスできるよう、周辺の物を片付けておきます。ベランダの室外機周りに植木鉢や物置がある場合は移動しておきましょう。作業には電源の確認が必要なため、ブレーカーの位置も把握しておくとスムーズです。作業後は、壁の配管穴の処理（キャップやパテ埋め）がされているか、その場で確認してください。",
  },
];

const ngActions = [
  {
    title: "知識のないまま配管を切断・取り外しする",
    body: "ポンプダウンをせずに配管を外したり切断したりすると、冷媒ガスが噴き出して凍傷を負ったり、オイルが飛散したりする危険があります。また、通電状態での作業は感電の恐れもあります。インターネット上には自力での取り外し手順を紹介する情報もありますが、冷媒の扱いを誤ったときのリスクが大きいため、専門業者への依頼を強くおすすめします。",
  },
  {
    title: "冷媒ガスを大気中に放出する",
    body: "エアコンの冷媒として使われるフロン類は、大気中に放出すると温室効果などの環境負荷が大きい物質です。取り外し時に冷媒を適切に回収することは、環境保護の観点からも重要な手順とされています。冷媒の回収を含めた適切な取り外しができるのが専門業者に依頼する大きな理由であり、「外れればよい」という作業とは別物だと考えてください。",
  },
  {
    title: "取り外した室外機・室内機を屋外に放置する",
    body: "「とりあえず外してベランダや庭に置いておく」と、雨風で劣化して買取やリユースの可能性がなくなるだけでなく、集合住宅では避難経路の妨げになることもあります。また、屋外に放置された家電は持ち去りのターゲットにもなりがちです。取り外しと引き渡しは間を空けず、一連の段取りとして計画しましょう。ベランダの安全確保についてはベランダ片付けの記事も参考になります。",
  },
  {
    title: "「無料回収」をうたう業者に安易に引き渡す",
    body: "エアコンは金属資源として価値があるため「無料で回収します」とうたう巡回業者も見られますが、無許可の業者に引き渡すと、不法投棄や不適正処理につながる恐れがあり、積み込み後に費用を請求される事例も注意喚起されています。廃棄物の処理に必要な許可を確認できる業者に依頼することが大前提です。不安を感じたら、消費者ホットライン188や自治体の窓口に相談できます。詳しくは無料回収の注意点の記事にまとめています。",
  },
];

const judgeSigns = [
  "エアコンの取り外しが必要だが、工事の経験がない",
  "室外機が壁掛け・屋根置きなど高所にあり、自分では手が出せない",
  "退去や引っ越しの期限までに、取り外しと処分を終える必要がある",
  "エアコン以外の不用品もまとめて処分したい",
  "古いエアコンが複数台あり、手配を1回で済ませたい",
];

const faqs = [
  {
    q: "エアコンは自分で取り外して粗大ごみに出せますか？",
    a: "エアコンは家電リサイクル法の対象品目のため、粗大ごみとしては出せません。また、取り外しには冷媒ガスの回収作業（ポンプダウン）が必要で、誤ると怪我や環境への悪影響につながるため、取り外し工事は専門業者への依頼をおすすめします。処分は販売店への引き取り依頼や、リサイクルの手続きをしたうえでの引き渡しなど、制度に沿ったルートで行ってください。",
  },
  {
    q: "処分費用はいくらかかりますか？",
    a: "リサイクルに関わる費用はメーカーや手続きの窓口により異なり、取り外し工事費も設置状況（高所作業や配管の状態など）で変わるため、一律の金額は示せません。買い替えなら販売店に、処分のみなら工事業者や回収業者に、型番と設置状況を伝えて見積もりを取るのが確実です。内訳（工事費・リサイクル関連費・収集運搬）が明確な見積もりを比較しましょう。費用の考え方は費用相場ページも参考にしてください。",
  },
  {
    q: "まだ使えるエアコンは売れますか？",
    a: "年式が新しく動作に問題がないエアコンは、リサイクルショップや買取業者で買取対象になる場合があります。ただし取り外し工事が必要な点は同じで、買取時の取り外し対応は業者により異なります。査定時に「設置中か取り外し済みか」を必ず伝えてください。買取と処分を組み合わせる考え方は、片付けと買取の併用の記事で解説しています。",
  },
  {
    q: "引っ越しでエアコンを移設するか処分するか迷っています。",
    a: "移設には取り外し・運搬・再設置の工事が必要で、年式が古い場合は移設後の不具合リスクもあります。使用年数・新居の設置環境・移設と買い替えの総費用を比較して判断するのが一般的です。判断に迷う場合は、引っ越し業者やエアコン工事業者に両方の見積もりを出してもらい比較しましょう。引っ越し前の荷物整理全体は引っ越し前の断捨離の記事が参考になります。",
  },
];

const related = [
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品目の処分", desc: "冷蔵庫・洗濯機など4品目の処分ルート" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売る・譲る・回収の使い分け" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収の注意点", desc: "無許可業者のリスクと相談先" },
  { href: "/service/hikkoshi/", label: "引っ越し時の不用品処分", desc: "退去までに間に合わせる段取り" },
  { href: "/review/kurashi-market/", label: "くらしのマーケットの評判", desc: "エアコン取り外し工事の比較にも" },
  { href: "/area/nagoya/", label: "名古屋の片付け業者比較", desc: "名古屋から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "エアコンの取り外しと処分の流れ" },
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
    { href: "#kiso", label: "1｜エアコン処分の基礎知識" },
    { href: "#merit", label: "2｜状況別・処分ルートの選び方" },
    { href: "#houshin", label: "3｜取り外し・処分の全体方針" },
    { href: "#steps", label: "4｜依頼前に自分でできる準備5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "エアコンの取り外しと処分の流れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          エアコンの取り外しと処分の流れ｜自分でやる範囲と業者に任せる範囲
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「引っ越しで古いエアコンを処分したいが、壁に付いたままでどうすればいいのかわからない」——エアコンの処分が他の家電と違って厄介なのは、「取り外し工事」というステップが必ず挟まるからです。しかも取り外しには冷媒ガスの回収という専門作業が伴い、家電リサイクル法の対象品目のため粗大ごみにも出せません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、エアコン処分の制度上の位置づけ、取り外しを業者に任せるべき理由、状況別の処分ルートの選び方、依頼前に自分でできる準備、避けるべきNG行動までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>エアコンは家電リサイクル法の対象品目。粗大ごみには出せず、制度に沿った引き渡しが必要</li>
          <li>取り外しは冷媒ガスの回収（ポンプダウン）を伴う専門作業。自力での工事は避け業者に任せる</li>
          <li>買い替えなら販売店へ一括依頼、処分のみなら「取り外し工事＋引き渡し」の段取りを組む</li>
          <li>自分でやるのは準備。型番の確認・設置状況の写真・依頼先の比較が失敗を防ぐ</li>
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

      <H2 id="kiso" num="1">エアコン処分の基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、エアコンの処分が制度上どう位置づけられているか、なぜ取り外しが専門作業なのかを押さえましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">状況別・処分ルートの選び方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「買い替えるのか」「処分だけなのか」「部屋全体の片付けと重なるのか」で最適なルートが変わります。自分の状況に当てはめて確認してください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">取り外し・処分の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「取り外し工事は専門業者に任せ、処分は家電リサイクル法の枠組みに沿って引き渡す。自分がやるのは情報整理と依頼先の比較」です。この順番さえ守れば、事故のリスクも制度上のトラブルも避けられます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家電リサイクル法の対象4品目（エアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機）に共通する処分の枠組みは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品目の処分方法</Link>で解説しています。エアコン以外の不用品も含めた処分ルート全体の整理は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>を、業者と自治体の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体回収と業者回収の使い分け</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">依頼前に自分でできる準備5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        取り外し工事そのものは業者に任せるとして、依頼前の準備は自分で進められます。この準備が見積もりの精度と当日のスムーズさを決めます。
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

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力にこだわらず業者への相談を検討してください。型番と設置状況の写真があれば、電話やフォームからでも具体的な相談ができます。
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
        エアコンの取り外し工事を単体で依頼したい場合は、地域の事業者を口コミで比較できる<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>が活用できます。部屋全体の不用品とまとめて処分したい場合は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方</Link>を参考に、対応範囲を確認して依頼しましょう。お住まいの地域の業者選びは<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡の片付け業者比較</Link>など各エリアページも参考になります。
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
        本記事は一般的な知識の提供を目的としたものです。家電リサイクル法に基づく手続き・費用や取り外し工事の内容は、メーカー・販売店・設置状況・地域により異なるため、依頼前に必ず公式の案内や見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
