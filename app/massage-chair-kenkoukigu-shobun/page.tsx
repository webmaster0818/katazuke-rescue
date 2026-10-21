import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/massage-chair-kenkoukigu-shobun/";
const TITLE = "マッサージチェアなど健康器具の処分方法｜家電リサイクル法の対象外・粗大ごみの手数料と重量物の搬出";
const DESC =
  "マッサージチェア、ランニングマシン、フィットネスバイクなどの健康器具を手放す方法として、家電リサイクル法の対象外であること、小型家電リサイクル法との関係、粗大ごみの重量区分と手数料の例、メーカー・販売店の案内、重量物を運び出す際の注意点を、法令・自治体・メーカーの公式情報をもとに解説します。";
const PUBLISHED = "2026-10-21";
const CHECKED = "2026年10月21日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "マッサージチェアは家電リサイクル法の対象ではありません",
    body: "家電リサイクル法（特定家庭用機器再商品化法）の対象は、施行令で定められたエアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の4品目です。マッサージチェアやランニングマシンはこの4品目に含まれないため、家電リサイクル券を使った引き渡しの対象になりません。パナソニックの公式通販の利用ガイドも、マッサージチェアはリサイクル対象外であり、お住まいの地域や自治体の廃棄方法に従って廃棄するよう案内しています。",
  },
  {
    title: "電気マッサージ器やランニングマシンは、小型家電リサイクル法の対象品目に含まれます",
    body: "小型家電リサイクル法の施行令は、対象となる電気機械器具として「電気マッサージ器」と「ランニングマシンその他の運動用電気機械器具」を挙げています。ただし、実際に小型家電として回収する品目と大きさは、自治体ごとに決められています。回収ボックスに入る大きさの小さなマッサージ器は小型家電として出せる場合がありますが、いす型のマッサージチェアは、新宿区・杉並区・名古屋市などでは粗大ごみとして扱われています。",
  },
  {
    title: "大型の健康器具は、自治体の粗大ごみとして収集されるのが一般的です",
    body: "新宿区は、粗大ごみの対象を「一辺の長さがおおむね30cmを超える家具、寝具、電気製品（家電リサイクル品以外）、自転車など」と定めています。マッサージチェア、ランニングマシン、フィットネスバイク、ぶら下がり健康器などはこの区分に当たり、有料で事前の申し込みが必要です。メーカーのフジ医療器も、マッサージチェアの本体と付属品は地方自治体の条例または規則に従って処理し、詳しくは各自治体に問い合わせるよう案内しています。",
  },
];

const routes = [
  {
    title: "自治体の粗大ごみ収集に申し込む",
    body: "費用を抑えやすい基本の方法です。申し込み、処理券の購入、収集日に指定の場所へ出す、という流れで進めます。マッサージチェアは重量によって手数料が変わる自治体や、一定の重量を超えると収集の対象外になる自治体があるため、申し込みの前に本体の重量を確認してください。自分で処理施設に持ち込める自治体もありますが、重量物の積み下ろしは負担が大きいため、運搬の手段と人手を確保できる場合に限って検討してください。",
  },
  {
    title: "小さなマッサージ器は、小型家電の回収や不燃ごみの区分を確認する",
    body: "ハンディタイプのマッサージ器、足もみ器、低周波治療器など小さな健康器具は、自治体によって小型家電の回収ボックス、不燃ごみ、粗大ごみのいずれかに分けられます。名古屋市の粗大ごみ手数料の例では「マッサージ器（いす型のものを除く）」と「マッサージチェア」を別の品目として扱っています。充電式の製品は内蔵電池の扱いも確認が必要です。",
  },
  {
    title: "買い替え時は販売店、手放すだけの場合は売却・譲渡も検討する",
    body: "マッサージチェアは家電リサイクル法の対象外のため、買い替えの際に古い製品を引き取るかどうかは販売店ごとの対応になります。購入前に、引き取りの可否、費用、搬出の範囲を販売店に確認してください。まだ使える製品は、リサイクルショップでの買取や知人への譲渡も選択肢です。売る・譲る前には、メーカーのリコール対象になっていないかを消費者庁のリコール情報サイトなどで確認してください。",
  },
];

const cityFees = [
  {
    city: "東京都新宿区",
    items: "マッサージチェア（30kg以下）1,300円／マッサージチェア（30kg超）3,200円／マッサージ器（10kg以下）400円／ランニングマシン 2,300円／サイクリングマシン 1,300円／ぶらさがり健康器具 900円",
    note: "70kg超のマッサージチェアは収集できません。マッサージチェア（30kg超）はインターネット受付ではなく、粗大ごみ受付センターへの電話で申し込みます。",
  },
  {
    city: "東京都杉並区",
    items: "マッサージ機 10kg未満 400円／10kg超20kg未満 900円／20kg超30kg未満 1,300円／30kg超50kg未満 2,300円／50kg超70kg以下 3,200円",
    note: "70kgを超えるものは申し込みできず、管轄の清掃事務所への問い合わせが案内されています。重量により金額が変わるため、確認してから申し込むよう求められています。",
  },
  {
    city: "愛知県名古屋市",
    items: "マッサージチェア 2,500円／マッサージ器（いす型のものを除く）250円／ランニングマシン 2,500円／フィットネスバイク 1,500円",
    note: "粗大ごみ処理手数料の例として掲載されている金額です。名古屋市は令和8年10月から粗大ごみの対象を変更しているため、最新の案内をご確認ください。",
  },
];

const steps = [
  {
    title: "取扱説明書や製品表示で、型番・重量・大きさを確認する",
    body: "粗大ごみの手数料や収集の可否が重量で決まる自治体があるため、まず本体の重量を把握します。取扱説明書が見当たらない場合は、本体の銘板に記載された型番をもとにメーカーの公式サイトで仕様を確認できることがあります。大きさは、玄関や廊下を通せるかを判断する際にも必要になります。",
  },
  {
    title: "自治体の分別案内で、品目・手数料・重量の上限を調べる",
    body: "お住まいの自治体の分別案内や粗大ごみの手数料一覧で「マッサージチェア」「マッサージ器」「ランニングマシン」などの品目を確認します。同じマッサージチェアでも、重量の区分や収集できる上限は自治体によって異なります。一覧に品目がない場合や上限を超える場合は、粗大ごみの受付窓口や清掃事務所に問い合わせてください。",
  },
  {
    title: "室内から屋外までの搬出経路を確認する",
    body: "フジ医療器は、マッサージチェアを搬入する際の推奨通路幅を「商品の幅＋養生約6cm」として機種ごとに示しています。搬出の際も、本体の幅に加えて壁や床を守る養生の幅が必要になると考えてください。廊下の曲がり角、階段、エレベーターの有無も確認し、集合住宅の場合は共用部の利用ルールを管理会社に確認します。",
  },
  {
    title: "粗大ごみの申し込みと処理券の購入を済ませる",
    body: "電話またはインターネットで申し込み、案内された金額の粗大ごみ処理券を購入して本体に貼ります。新宿区のように、重いマッサージチェアはインターネットでは申し込めず電話受付になる自治体もあります。収集日は混み合う時期に先まで埋まることがあるため、退去や引き渡しの期限がある場合は早めに申し込んでください。",
  },
  {
    title: "収集日の朝、申し込んだ排出場所に出す",
    body: "新宿区は、粗大ごみを申し込んだ排出場所（一戸建ての玄関先や門前、集合住宅の1階の出口部分のスペースなど）に出すよう案内しています。粗大ごみの収集は、原則として指定の場所まで自分で運び出すことが前提です。運び出しが難しい場合は、次の章の注意点と自治体の支援制度を確認してください。",
  },
];

const cautions = [
  {
    title: "重量物は一人で運び出さず、運ぶ人数と経路を先に決めます",
    body: "マッサージチェアは重量に加えて形状が複雑で持ちにくく、階段や曲がり角で無理に向きを変えると、腰や指のけが、壁・床・手すりの破損につながります。新宿区の運び出し収集も、作業員2名で運び出せない場合や、道路に面した場所まで十分な動線が確保できない場合は受けられないとしています。家族だけで運ぶ場合も、二人以上で持ち、経路の障害物を事前に片付けてください。",
  },
  {
    title: "取扱説明書にない分解は行いません",
    body: "マッサージチェアの内部には、モーターや配線、可動部品が組み込まれています。運びやすくするために取扱説明書に記載のない分解を行うと、けがや部品の脱落につながるおそれがあります。新宿区は、解体しても粗大ごみとして出すよう案内しています。分解できる範囲は機種ごとに異なるため、取扱説明書やメーカーの窓口で確認してください。",
  },
  {
    title: "自治体の運び出し支援は、対象と条件を確認してから申し込みます",
    body: "新宿区は、65歳以上の高齢者のみの世帯や障害者のみの世帯で、自ら運び出すことができず、近隣や身近な方の協力も得られない場合に、粗大ごみの運び出し収集を行っています。運び出しは無料ですが、品目に応じた処理券が必要で、1回の申し込みで3点までです。本人または代理人が立ち会えない場合や、取り外し・解体工事が必要な場合は対象外です。同様の制度の有無と条件は自治体ごとに異なります。",
  },
  {
    title: "「無料で回収」とうたう巡回車や空き地の回収には出しません",
    body: "家庭から出る廃棄物を回収するには、市区町村の一般廃棄物処理業の許可や委託が必要です。許可のない回収業者に渡すと、積み込み後に高額な料金を請求されたり、不法投棄されたりするおそれがあります。業者に依頼する場合は、許可の有無と見積もりの総額を確認してください。",
  },
];

const judgeSigns = [
  "70kgを超えるなど、自治体の粗大ごみで収集できない重量の健康器具がある",
  "階段しかない住まいや狭い廊下で、家族だけでは安全に運び出せない",
  "マッサージチェアのほかにも、大型家具や家電がまとめて出ている",
  "実家や空き家の片付けで、健康器具を含む家全体の不用品を処分したい",
  "退去や引き渡しの期限が近く、粗大ごみの収集日を待っていられない",
];

const faqs = [
  {
    q: "マッサージチェアは家電リサイクル法の対象ですか？",
    a: "対象ではありません。家電リサイクル法の対象は、施行令で定められたエアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の4品目です。マッサージチェアは、新宿区・杉並区・名古屋市などでは粗大ごみとして扱われています。パナソニックの公式通販の利用ガイドも、マッサージチェアはリサイクル対象外で、お住まいの地域や自治体の廃棄方法に従うよう案内しています。",
  },
  {
    q: "マッサージチェアを粗大ごみに出すと、費用はいくらかかりますか？",
    a: "自治体によって異なります。当サイトが2026年10月21日に確認した例では、新宿区は30kg以下1,300円・30kg超3,200円、杉並区は重量により400円〜3,200円、名古屋市は2,500円です。新宿区と杉並区は、70kgを超えるものを粗大ごみとして受け付けていません。お住まいの自治体の手数料一覧で最新の金額をご確認ください。",
  },
  {
    q: "メーカーにマッサージチェアを引き取ってもらえますか？",
    a: "マッサージチェアは家電リサイクル法の対象外のため、同法にもとづくメーカーの引き取りの仕組みは使えません。フジ医療器は、マッサージチェアの本体と付属品は地方自治体の条例または規則に従って処理し、詳しくは各自治体に問い合わせるよう案内しています。買い替えの場合は、購入する販売店に古い製品の引き取りの可否と費用を確認してください。",
  },
  {
    q: "小さなマッサージ器や低周波治療器はどう出せばよいですか？",
    a: "自治体によって、小型家電の回収ボックス、不燃ごみ、粗大ごみのいずれかに分けられます。小型家電リサイクル法の施行令は電気マッサージ器を対象品目に挙げていますが、回収する品目と大きさは自治体ごとに決められています。充電式の製品は内蔵電池の扱いも含めて、お住まいの自治体の分別案内をご確認ください。",
  },
];

const sources = [
  { label: "特定家庭用機器再商品化法施行令（家電リサイクル法の対象4品目）", org: "e-Gov法令検索", url: "https://laws.e-gov.go.jp/law/410CO0000000378" },
  { label: "使用済小型電子機器等の再資源化の促進に関する法律施行令（小型家電の対象品目）", org: "e-Gov法令検索", url: "https://laws.e-gov.go.jp/law/425CO0000000045" },
  { label: "家電リサイクル法", org: "環境省", url: "https://www.env.go.jp/recycle/kaden/" },
  { label: "粗大ごみの出し方", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00016.html" },
  { label: "粗大ごみの処理手数料一覧", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_05_00001.html" },
  { label: "粗大ごみの運び出し収集", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/kankyo/seiso01_000001_00032.html" },
  { label: "マッサージ機（70kg以下）【最大辺が30cm超】", org: "杉並区", url: "https://www.city.suginami.tokyo.jp/gomibunbetsu/ma/00812.html" },
  { label: "粗大ごみ処理手数料の例", org: "名古屋市", url: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html" },
  { label: "マッサージチェアの廃棄方法について", org: "フジ医療器", url: "https://www.fujiiryoki.co.jp/support/faq/mchair/c3/faq002.html" },
  { label: "マッサージチェアを搬入する際にどれくらいの通路幅が必要ですか？", org: "フジ医療器", url: "https://www.fujiiryoki.co.jp/support/faq/mchair/c2/faq008.html" },
  { label: "リサイクル対象商品（ご利用ガイド）", org: "パナソニック", url: "https://panasonic.jp/store/guide/recycle.html" },
  { label: "消費者庁リコール情報サイト", org: "消費者庁", url: "https://www.recall.caa.go.jp/" },
];

const related = [
  { href: "/piano-kinko-hanshutsu/", label: "ピアノ・金庫など重量物の搬出と処分", desc: "自力搬出を避けるべき理由と依頼の流れ" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "一般的な手順と出すときの注意点" },
  { href: "/sodaigomi-size-kijun/", label: "粗大ごみになる大きさの基準", desc: "自治体ごとの違いと解体前の確認" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "冷蔵庫・洗濯機・テレビ・エアコン" },
  { href: "/kogata-kaden-recycle/", label: "小型家電リサイクルの使い方", desc: "回収ボックスと認定事業者の回収" },
  { href: "/mansion-hanshutsu-dandori/", label: "マンションの不用品搬出の段取り", desc: "共用部の養生と管理規約の確認" },
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
    { "@type": "ListItem", position: 2, name: "マッサージチェアなど健康器具の処分方法" },
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
    { href: "#kiso", label: "1｜健康器具の処分に関わる法律と区分" },
    { href: "#route", label: "2｜健康器具を手放す3つの方法" },
    { href: "#jichitai", label: "3｜自治体ごとの粗大ごみ手数料の例" },
    { href: "#steps", label: "4｜マッサージチェアを粗大ごみに出す5ステップ" },
    { href: "#hanshutsu", label: "5｜重量物を運び出す際の注意点" },
    { href: "#gyousha", label: "6｜業者への依頼を検討すべき状況" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公的情報" },
    { href: "#related", label: "9｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "マッサージチェアなど健康器具の処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          マッサージチェアなど健康器具の処分方法｜家電リサイクル法の対象外・粗大ごみの手数料と重量物の搬出
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          マッサージチェア、ランニングマシン、フィットネスバイクなどの健康器具は、電気製品でありながら家電リサイクル法の対象外で、しかも大きく重い物が多いため、処分の方法に迷いやすい品目です。実家の片付けや引っ越しの際に、使わなくなった健康器具の扱いが最後まで決まらないこともあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、法令・自治体・メーカーの公式情報をもとに、健康器具の処分に関わる法律上の区分、粗大ごみ・小型家電回収・販売店引き取りの使い分け、自治体ごとの手数料と重量の上限の例、重量物を運び出す際の注意点を順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>マッサージチェアやランニングマシンは家電リサイクル法の4品目に含まれず、自治体の粗大ごみとして出すのが一般的</li>
          <li>粗大ごみの手数料は自治体ごとに異なり、重量で区分する自治体や、70kgを超えると収集しない自治体がある</li>
          <li>小さなマッサージ器は、小型家電の回収や不燃ごみの対象になる場合がある</li>
          <li>重量物は一人で運び出さず、搬出経路と人手を先に確保し、取扱説明書にない分解は行わない</li>
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

      <H2 id="kiso" num="1">健康器具の処分に関わる法律と区分</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        処分の方法を選ぶ前に、健康器具が家電の処分に関わる2つの法律でどう扱われているか、自治体ではどの区分になるかを確認してください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="route" num="2">健康器具を手放す3つの方法</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        健康器具の手放し方は、製品の大きさと状態、買い替えの予定によって変わります。代表的な方法は次の3つです。
      </p>
      <div className="space-y-4 mb-4">
        {routes.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        小さな電子機器の回収方法は<Link href="/kogata-kaden-recycle/" className="text-primary underline underline-offset-2">小型家電リサイクルの使い方</Link>、売れる物を活かす方法は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用</Link>で解説しています。
      </p>

      <H2 id="jichitai" num="3">自治体ごとの粗大ごみ手数料の例</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        各自治体の公式サイトで{CHECKED}に確認した内容です。手数料や収集の条件は変更されることがあるため、申し込みの前にお住まいの自治体の最新の案内をご確認ください。
      </p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">自治体</th>
              <th className="px-3 py-2.5 text-left">品目と手数料</th>
              <th className="px-3 py-2.5 text-left">重量の上限・申し込みの注意</th>
            </tr>
          </thead>
          <tbody>
            {cityFees.map((r, i) => (
              <tr key={r.city} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border align-top">{r.city}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.items}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典は各自治体の公式ページ（本記事の「出典・参考にした公的情報」に掲載）。品目名は各自治体の表記のとおりです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        同じマッサージチェアでも、重量の区分、手数料、収集できる上限は自治体によって異なります。粗大ごみになる大きさの考え方は<Link href="/sodaigomi-size-kijun/" className="text-primary underline underline-offset-2">粗大ごみになる大きさの基準</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">マッサージチェアを粗大ごみに出す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、重量と大きさを確認する→自治体の案内を調べる→搬出経路を確認する→申し込みと処理券の購入を済ませる→収集日に指定の場所へ出す、の5ステップです。
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
        申し込みの一般的な流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>、集合住宅での搬出の準備は<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの不用品搬出の段取り</Link>をご覧ください。
      </p>

      <H2 id="hanshutsu" num="5">重量物を運び出す際の注意点</H2>
      <div className="space-y-4 mb-4">
        {cautions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ピアノや金庫を含む重量物全般の搬出は<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫など重量物の搬出と処分</Link>、回収業者とのトラブルを避ける確認事項は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">「無料回収」をうたう業者の注意点</Link>で解説しています。
      </p>

      <H2 id="gyousha" num="6">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        健康器具は粗大ごみとして出せる場合が多いものの、次のような状況では片付け・不用品回収業者への依頼も検討してください。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>や<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、家庭の廃棄物の回収に必要な市区町村の許可や委託を確認できる業者を選び、作業前の見積もりで総額と搬出の範囲を確定させてください。重量物は、階段作業や養生の有無で費用が変わることがあるため、見積もりの段階で設置場所と搬出経路を伝えておくと正確な金額を確認しやすくなります。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
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

      <H2 id="shutten" num="8">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・{CHECKED}確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="9">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。健康器具の分別区分・粗大ごみの手数料・収集できる重量は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。販売店やメーカーの引き取りを利用する際は、各事業者の公式案内で費用と条件をご確認ください。不用品の処分を伴う依頼では、家庭の廃棄物の回収に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
