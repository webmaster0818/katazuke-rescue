import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/suigin-keikoutou-shobun/";
const TITLE = "蛍光灯・水銀体温計・水銀血圧計の処分｜割らずに出す方法と割れたときの対処";
const DESC =
  "片付けで出てきた蛍光灯（蛍光管）や水銀体温計・水銀血圧計の処分方法として、水銀を使った製品を分けて出す理由、一般照明用蛍光ランプの製造・輸出入禁止のスケジュール、割らずに保管・排出する手順、割れたときの換気と片付け方、自治体の回収方法の確かめ方を、環境省の資料にもとづいて解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "蛍光灯や水銀体温計は、水銀を含む製品として分けて扱う",
    body: "蛍光灯（蛍光管・蛍光ランプ）、水銀体温計、水銀温度計、水銀血圧計は、内部に水銀を使った製品です。環境省の資料では、こうした製品が廃棄された物を水銀使用廃製品と呼び、ほかのごみと混ぜずに分別して回収することが求められています。理由は、割れて水銀が飛散・流出することでほかの廃棄物が汚染されるのを防ぐこと、焼却によって水銀が大気へ出るのを防ぐこと、適正な処理を効率よく行うことにあります。片付けで見つかったら、燃やすごみや割れ物とは別の物として取り分けてください。",
  },
  {
    title: "体温計や血圧計は、1本・1台あたりの水銀の量が多い",
    body: "環境省のリーフレットでは、水銀使用廃製品の中でも、水銀を使った体温計・温度計・血圧計は特に注意が必要な物として挙げられています。同資料によると、水銀体温計は1本あたり約1.2gの水銀を使っており蛍光管約200本分に相当し、水銀血圧計は1台あたり約48gで蛍光管約8,000本分に相当するとされています（いずれも平成25年時点の値）。水銀血圧計は主に医療用ですが家庭でも使われており、現在も家庭に残っている可能性があると説明されています。実家の救急箱や押し入れの奥は、確認しておきたい場所です。",
  },
  {
    title: "回収の方法は市町村ごとに決められている",
    body: "水銀による環境の汚染の防止に関する法律（水銀汚染防止法）第17条では、市町村は区域内で廃棄された水銀使用製品を適正に回収するために必要な措置を講ずるよう努めなければならない、と定められています。環境省の資料では、市町村の回収方法の例として、ごみ集積所で集めるステーション回収、公共施設などに回収箱を置く拠点回収、日時を決めて回る移動拠点回収、薬局などの協力店に置く依頼拠点回収・店頭回収が紹介されています。どの方法を採っているかは自治体によって異なるため、お住まいの自治体の分別案内で確かめる必要があります。",
  },
];

const merits = [
  {
    title: "一般照明用の蛍光ランプは、種類ごとに製造・輸出入が禁止されていく",
    body: "環境省によると、水銀に関する水俣条約で一般照明用の蛍光ランプが製造・輸出入廃止の対象に加わったことを受け、日本でも段階的に製造・輸出入が禁止されます。電球形蛍光ランプは2026年1月1日から（30Wを超える物は2027年1月1日から）、コンパクト形蛍光ランプは2027年1月1日から、直管形と環形の蛍光ランプは2028年1月1日から禁止されます。直管形と環形のうち、ハロりん酸塩を主成分とする蛍光体を用いた物は2027年1月1日からです。片付けで買い置きの蛍光管がまとまって出てくる場合は、照明器具の今後の使い方とあわせて残す量を考えてください。",
  },
  {
    title: "蛍光ランプを使うこと、販売・購入することは禁止されない",
    body: "環境省の案内では、製造・輸出入が禁止されても、蛍光ランプの使用・販売・購入は禁止されないと明記されています。いま使っている蛍光灯を急いで外して捨てる必要はありません。一方で、今後は交換用のランプが手に入りにくくなることが考えられるため、照明器具ごと交換を検討する家庭もあります。環境省は、交換に工事が必要となる場合もあるとして、家電量販店や電器店などへの相談を案内しています。器具の取り外しや配線に関わる作業は、自分で判断せず専門の店や電気工事の業者に相談してください。",
  },
  {
    title: "蛍光ランプかどうかは、品番の頭文字が手がかりになる",
    body: "照明器具に付いているランプが蛍光ランプかどうか分からないときは、ランプに印字された品番を確認します。環境省の案内によると、蛍光灯の品番は「F」か「EF」で始まる物が多いとされています。海外製品などでは表記が異なる場合もあり、判断できないときは、近くの販売店や蛍光ランプのメーカーに問い合わせるよう案内されています。片付けで箱入りの買い置きや外したランプが出てきたら、箱や本体の品番を見て、蛍光ランプとLEDランプを分けておくと、出し方を調べる手間が減ります。",
  },
];

const steps = [
  {
    title: "水銀を使った製品を一か所に集め、割れない場所に置く",
    body: "片付けを始めたら、蛍光管、電球形の蛍光ランプ、水銀体温計、水銀温度計、水銀血圧計を見つけた時点で一か所に集めます。床に直接置くと踏んだり物を落としたりして割れるおそれがあるため、段ボール箱などに入れて、人が通らない場所に置いてください。ほかの割れ物やガラスくずと混ざらないように、箱の外側に中身を書いておくと、家族や手伝いの人も扱いを間違えません。数が多い場合は、品目ごとにおおよその本数を控えておくと、自治体への問い合わせがスムーズになります。",
  },
  {
    title: "購入時のケースや新聞紙で包み、破損を防ぐ",
    body: "環境省の分別回収のガイドラインでは、蛍光管や水銀体温計は割れやすいため、購入時のケースや保管用のケースに入れる、新聞紙で包むなど、破損しない出し方が望ましいとされています。蛍光管は買ったときの紙箱が残っていれば、そこに戻すのが確実です。水銀体温計は専用のケースに入れたうえで、さらに袋や箱に入れておくと安心です。水銀血圧計は本体を倒さないようにし、ふたを閉めた状態で保管してください。包む作業は、割れた物があっても気付けるように明るい場所で行います。",
  },
  {
    title: "お住まいの自治体の分別案内で、品目ごとの出し方を確認する",
    body: "次に、自治体の分別案内やごみ分別アプリで、蛍光管、水銀体温計、水銀血圧計の項目を検索します。ステーション回収の日に専用の区分で出すのか、公共施設や協力店の回収箱に持ち込むのか、自治体によって方法が異なります。蛍光管と体温計で出し先が違う自治体もあるため、品目ごとに確認してください。案内が見つからない、または製品が水銀を使った物か判断できない場合は、自治体の清掃担当の窓口に問い合わせると確実です。照明器具本体は、別の区分になることが一般的です。",
  },
  {
    title: "割れてしまった物は、密閉できる容器や袋に入れて分けておく",
    body: "保管や運搬の途中で割れてしまった物は、環境省のガイドラインにあるとおり、ポリ袋や密閉できる容器に入れて、水銀が飛散・流出しないようにします。同ガイドラインでは、水銀使用廃製品は割れた物も含めてほかの廃棄物と混ぜずに分別し、燃やすごみ（可燃物）の区分では出さないよう周知する必要があるとされています。割れた物と割れていない物は、処理の方法が異なる場合があるため、袋や容器を分けておいてください。出し方は、割れていない物と同じとは限らないため、自治体の案内で破損時の扱いを確認するか、清掃担当の窓口に問い合わせます。",
  },
  {
    title: "指定の日時や回収箱に、割れないように運んで出す",
    body: "出し方が分かったら、指定された日時や場所に、包んだ状態のまま運んで出します。回収箱に入れる場合は、投げ入れずに一本ずつ静かに入れてください。集積所に出す場合も、ほかのごみ袋の下敷きにならない置き方を心がけます。遺品整理や実家の片付けで数がまとまる場合は、一度に運ぼうとせず、回収の機会を分けるほうが安全です。車で運ぶときは箱が動かないように固定し、蛍光管は折れないように長さに合った箱に入れてください。",
  },
];

const ngActions = [
  {
    title: "燃やすごみや割れ物と一緒に袋へ入れて出す",
    body: "蛍光灯や水銀体温計を、燃やすごみや一般の割れ物、ガラスくずと同じ袋に入れて出すのは避けてください。環境省の資料では、水銀使用廃製品はほかの廃棄物と混合しないように分別して排出することが求められています。焼却されると水銀が大気中に出るおそれがあり、収集や処理の途中で割れると周りのごみが汚染されます。自治体によって区分の名前は異なりますが、水銀を使った製品には専用の出し方が設けられていることが一般的です。必ず品目ごとに確認してから出してください。",
  },
  {
    title: "割れた水銀体温計の水銀を、掃除機やほうきで集める",
    body: "水銀体温計が割れて水銀の粒が床に散らばったとき、掃除機で吸い取ったり、ほうきで掃いたりするのは避けてください。環境省のガイドラインでは、掃除機は水銀を拡散させてばく露を広げてしまうこと、ほうきは水銀を小さな塊に分けて散らばらせてしまうことから、禁止事項として挙げられています。水銀を排水口に流すこと、汚れたスリッパで歩き回ること、アクセサリーや時計を着けたまま掃除することも避けるよう示されています。下の対処の項を参考に、厚紙やガムテープで集めてください。",
  },
  {
    title: "換気をせずに、閉め切った部屋で片付ける",
    body: "環境省のガイドラインによると、割れた製品から出た金属水銀は、放置すると気化して水銀蒸気になります。水銀蒸気は低い濃度でも、ばく露によって神経系への影響などがあるとされており、密閉された空間では換気を行うことで健康への影響を低減できると説明されています。割れたことに気付いたら、まず窓を開け、ほかの部屋に通じるドアを閉めてから片付けに入ってください。体調に異変を感じた場合や、大量の水銀がこぼれた場合は、医療機関や自治体の窓口に相談してください。",
  },
  {
    title: "使わない水銀体温計を、いつか使うかもしれないと残し続ける",
    body: "電子体温計に切り替えた後も、古い水銀体温計を救急箱に入れたままにしている家庭は少なくありません。残しておくほど、落として割る機会が増え、家族が処分方法を知らないまま遺品整理の場面で見つかることにもなります。使う予定がない水銀体温計や水銀血圧計は、自治体の回収の機会に合わせて手放すのが安全です。救急箱全体の見直しは、薬や化粧品の扱いとあわせて進めると効率的です。詳しくは古い薬・化粧品の処分方法の記事も参考にしてください。",
  },
];

const breakageSteps = [
  {
    title: "蛍光管が割れたとき",
    items: [
      "人やペットを部屋から出し、エアコンなどの運転を止め、ほかの部屋や廊下に通じるドアを閉める",
      "窓や屋外に通じるドアを開けて、5〜10分間換気する",
      "硬い紙やボール紙でガラスの破片や粉をすくい取り、密閉できるガラス瓶やポリ袋に入れる",
      "残った細かい破片や粉は粘着テープで集め、湿ったペーパータオルなどで拭き取り、同じように密閉する",
      "掃除機は水銀蒸気を拡散させるおそれがあるため、使用は望ましくないとされている",
      "片付け後は破片や粘着テープなどを密閉したまま直ちに建物の外のごみ箱に入れ、手を洗い、処分方法を市町村に確認する。可能であれば数時間換気を続ける",
    ],
  },
  {
    title: "水銀体温計が割れたとき",
    items: [
      "人やペットを部屋から出し、すべての窓を開け、ほかの部屋や廊下に通じるドアを閉める",
      "ゴム製の手袋をはめ、ガラスの破片はペーパータオルの上に集めて、丈夫なポリ袋に入れて密封する",
      "滑らかな床では、厚紙やプラスチックの板で水銀の粒をゆっくり寄せ集め、懐中電灯を床と平行に当てて見逃しを探す",
      "スポイトで水銀を集めて湿ったペーパータオルの上に置き、残った粒はガムテープで拾い、いずれもポリ袋に入れる",
      "敷物やカーテンなど水銀を吸う素材に広がった場合は、その物ごと密閉できるポリ袋に入れる",
      "手を洗い、破片や水銀の処分方法を市町村に確認する。部屋の換気は最低24時間続ける",
    ],
  },
];

const judgeSigns = [
  "実家や空き家の片付けで、蛍光管や体温計を含む大量の不用品を期限までに処分する必要がある",
  "照明器具の取り外しや交換が必要で、高い場所の作業や配線に不安がある",
  "物置や倉庫に、水銀を使った製品のほかにも処分方法の分からない物が多く残っている",
  "遠方の家の片付けで、自治体の回収日や回収箱の利用に合わせて通うことができない",
  "体力や体調の事情で、割れ物を安全に包んで運ぶことが難しい",
];

const faqs = [
  {
    q: "蛍光灯は何ごみとして出せばよいですか？",
    a: "自治体により異なります。環境省は、家庭の蛍光ランプはお住まいの自治体のルールに従って分別・排出するよう案内しています。ステーション回収で専用の区分として出す自治体もあれば、公共施設や協力店の回収箱へ持ち込む自治体もあります。必ず自治体の分別案内で「蛍光管」「蛍光灯」の項目を確認し、割らないように購入時のケースや新聞紙で包んで出してください。",
  },
  {
    q: "蛍光灯は使い続けてもよいのですか？",
    a: "使い続けることはできます。環境省の案内では、一般照明用の蛍光ランプは種類ごとに2026年から2028年にかけて製造・輸出入が禁止されますが、使用・販売・購入は禁止されないと明記されています。今後は交換用のランプが手に入りにくくなることが考えられるため、照明器具の交換を検討する場合は、工事が必要になることもあるとして家電量販店や電器店などへの相談が案内されています。",
  },
  {
    q: "水銀体温計はどこに出せばよいですか？",
    a: "お住まいの自治体の案内に従います。環境省の資料では、市町村による回収方法として、集積所でのステーション回収、公共施設の回収箱による拠点回収、薬局などの協力店での回収などの例が紹介されており、自治体ごとに方法が異なります。自治体の分別案内で「体温計」「水銀体温計」の項目を確認し、ケースに入れたうえで袋や箱に入れ、割れないようにして出してください。",
  },
  {
    q: "水銀血圧計が実家から出てきました。どうすればよいですか？",
    a: "倒したり分解したりせず、ふたを閉めた状態で保管し、自治体の分別案内で出し方を確認してください。環境省の資料では、水銀血圧計は1台あたり約48gの水銀を使っているとされ（平成25年時点）、主に医療用ですが家庭に残っている可能性があると説明されています。自治体の案内に項目が見当たらない場合は、清掃担当の窓口に問い合わせて、回収の方法を確かめてください。",
  },
];

const sources = [
  { label: "一般照明用の蛍光ランプの規制について", org: "環境省", url: "https://www.env.go.jp/chemi/tmms/lamp.html" },
  { label: "水銀廃棄物関係（家庭から排出される水銀使用廃製品の分別回収ガイドライン等）", org: "環境省", url: "https://www.env.go.jp/recycle/waste/mercury-disposal/" },
  { label: "水銀使用廃製品の適切な分別回収について（リーフレット・令和5年度作成）", org: "環境省", url: "https://www.env.go.jp/content/000227931.pdf" },
  { label: "家庭から排出される水銀使用廃製品の分別回収ガイドライン（平成27年12月）", org: "環境省", url: "https://www.env.go.jp/content/900537050.pdf" },
  { label: "水銀に関する水俣条約と水銀対策", org: "環境省", url: "https://www.env.go.jp/chemi/tmms/" },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの出し方", desc: "スプレー缶・電池など危険物の考え方" },
  { href: "/kusuri-keshouhin-shobun/", label: "古い薬・化粧品の処分方法", desc: "救急箱と洗面所の見直し" },
  { href: "/furui-kaden-anzen-shobun/", label: "古い家電の安全確認と処分", desc: "長く使った家電の確認事項" },
  { href: "/shoukaki-shobun/", label: "家庭の消火器の処分方法", desc: "リサイクル窓口とシールの使い分け" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めない段取り" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルートの使い分け", desc: "自治体・買取・業者の選び方" },
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
    { "@type": "ListItem", position: 2, name: "蛍光灯・水銀体温計・水銀血圧計の処分" },
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
  dateModified: "2026-10-31",
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
    { href: "#kiso", label: "1｜水銀を使った製品を分けて出す理由" },
    { href: "#merit", label: "2｜蛍光ランプの規制で押さえる3つの点" },
    { href: "#houshin", label: "3｜割れたときの対処" },
    { href: "#steps", label: "4｜割らずに処分する5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
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

      <Breadcrumb items={[{ label: "蛍光灯・水銀体温計・水銀血圧計の処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          蛍光灯・水銀体温計・水銀血圧計の処分｜割らずに出す方法と割れたときの対処
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <time dateTime="2026-10-31">更新：2026年10月31日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れから出てきた買い置きの蛍光管、救急箱の奥に残った水銀体温計、実家の棚にしまわれた水銀血圧計は、片付けのたびに扱いに迷う物です。いずれも内部に水銀を使っており、ほかのごみと混ぜずに分けて出すことが求められています。割れやすく、割れたときの片付け方にも注意が必要です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、環境省の資料にもとづいて、水銀を使った製品を分けて出す理由、一般照明用蛍光ランプの製造・輸出入禁止のスケジュール、割らずに保管して出す手順、割れたときの換気と片付け方を順に解説します。具体的な出し方は自治体によって異なるため、お住まいの自治体の分別案内とあわせてお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>蛍光灯・水銀体温計・水銀血圧計は水銀使用廃製品として、ほかのごみと分けて出す</li>
          <li>一般照明用の蛍光ランプは2026年から種類ごとに製造・輸出入が禁止されるが、使用・販売・購入は禁止されない</li>
          <li>購入時のケースや新聞紙で包んで割れないように保管し、出し方は自治体の分別案内で品目ごとに確認する</li>
          <li>割れたときは換気を先に行い、掃除機やほうきを使わず、密閉できる袋や容器に入れて自治体に出し方を確認する</li>
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

      <H2 id="kiso" num="1">水銀を使った製品を分けて出す理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        出し方を調べる前に、なぜ水銀を使った製品だけ別の扱いになるのかを整理しておいてください。理由が分かると、保管や運び方で気を付ける点が明確になります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">蛍光ランプの規制で押さえる3つの点</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        蛍光灯は、製造・輸出入の禁止が段階的に始まっています。片付けで買い置きのランプが出てきたときに、残すか手放すかを判断する材料として、次の3点を確認してください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">割れたときの対処</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        環境省の分別回収のガイドラインでは、家庭で蛍光管や水銀体温計が割れた場合の対処の例として、日本照明工業会の資料と米国環境保護庁（EPA）の推奨する方法が紹介されています。主な内容は次のとおりです。慌てて素手で触ったり、掃除機をかけたりする前に、まず換気を行ってください。
      </p>
      <div className="space-y-4 mb-4">
        {breakageSteps.map((b) => (
          <div key={b.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{b.title}</h3>
            <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        集めた破片や水銀は、燃やすごみとして出さず、お住まいの自治体に出し方を確認してください。体調に異変を感じた場合は医療機関に相談してください。割れ物の扱い全般は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの出し方</Link>、救急箱の見直しは<Link href="/kusuri-keshouhin-shobun/" className="text-primary underline underline-offset-2">古い薬・化粧品の処分方法</Link>も参考にしてください。
      </p>

      <H2 id="steps" num="4">割らずに処分する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、一か所に集める→包んで破損を防ぐ→自治体の出し方を確認する→割れた物を分けておく→指定の方法で出す、の5ステップです。
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
        片付けでは、蛍光灯や体温計と一緒に、古い消火器が見つかることもあります。消火器は自治体のごみ収集に出せない物として扱われるため、<Link href="/shoukaki-shobun/" className="text-primary underline underline-offset-2">家庭の消火器の処分方法</Link>で手順を確認してください。照明器具本体や古い家電の扱いは<Link href="/furui-kaden-anzen-shobun/" className="text-primary underline underline-offset-2">古い家電の安全確認と処分</Link>、処分先全体の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルートの使い分け</Link>を参考にしてください。
      </p>

      <H2 id="ng" num="5">避けるべき4つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        蛍光灯や体温計が数本であれば、自治体の回収を利用して自力で処分できます。ただし、次のような状況では、片付け・不用品回収業者に家全体の片付けをまとめて相談することも選択肢になります。対応できる業者は<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        水銀を使った製品は業者によって取り扱いの可否が異なるため、見積もりの段階で蛍光管や体温計が含まれることを伝え、引き取れるか、どのように処分するかを確認してください。廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させることも大切です。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        本記事の制度・数値・手順の記述は、以下の公的機関の情報にもとづいています。
      </p>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・2026年10月31日確認）
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
        本記事は一般的な知識の提供を目的としたものです。蛍光灯・水銀体温計・水銀血圧計の分別区分や回収方法、割れた物の出し方は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。水銀にふれた、または水銀蒸気を吸い込んだおそれがあり体調に異変を感じる場合は、医療機関にご相談ください。照明器具の交換や取り外しに工事が必要な場合は、販売店や電気工事の業者にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
