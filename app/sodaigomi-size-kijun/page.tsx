import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sodaigomi-size-kijun/";
const TITLE = "粗大ごみになる大きさの基準｜自治体ごとの違いと、解体・切断して出す前に確認すること";
const DESC =
  "粗大ごみの大きさの基準は自治体ごとに異なります。世田谷区・横浜市・川崎市・名古屋市・仙台市の公式情報をもとに、一辺30cm・最長辺50cm・指定袋に入るかどうかといった基準の違い、解体しても元の形で判断する自治体と品目ごとに切って出す方法を示す自治体の違い、測り方、切断するときの安全上の注意を解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "粗大ごみかどうかは、多くの自治体で「大きさ」によって決まる",
    body: "粗大ごみとは、ふだんの燃やすごみや燃えないごみの収集では出せない大きさの家庭ごみのことで、申し込みと手数料が必要になるのが一般的です。どこからが粗大ごみかは自治体が決めており、一辺の長さ、最長辺の長さ、指定袋に入るかどうかなど、基準の決め方そのものが異なります。引っ越し前の地域のルールが、そのまま今の住まいで通用するとは限りません。片付けで大きな物が出てきたら、まずお住まいの自治体の基準を確認することが出発点です。",
  },
  {
    title: "同じ自治体の中でも、素材によって基準が変わることがある",
    body: "大きさの基準が一つだけとは限りません。横浜市は、金属製品は最長辺30cm以上、プラスチック製品や木製品などそのほかの物は最長辺50cm以上を粗大ごみとしています。川崎市の分別一覧でも、金属を含む物は最長辺30cm以上、布製品やプラスチック製品は50cm以上を粗大ごみとする品目が多く見られます。同じ大きさの物でも、金属製なら粗大ごみ、プラスチック製なら通常のごみ、という違いが生じます。素材の確認も、大きさと同じくらい大切です。",
  },
  {
    title: "基準は変わることがあるため、古い情報に頼らない",
    body: "名古屋市は、令和8年10月から粗大ごみの対象を「容量45リットルの指定袋に入らないもの」に変更しました。令和8年9月までは「30センチメートル角を超えるもの」が対象でした。このように、自治体の基準は見直されることがあります。以前に調べたメモや、家族から聞いた出し方、数年前の分別表をそのまま使うと、収集されずに残ってしまうおそれがあります。出す直前に、自治体の公式サイトやごみ分別アプリで最新の基準を確認してください。",
  },
];

const rules = [
  { city: "世田谷区（東京都）", rule: "一辺の長さが30センチメートルを超える耐久消費財を中心とする廃棄物", cut: "解体しても元の形・使用時の形状で判断するため、可燃ごみ・不燃ごみとしては出せない", src: "粗大ごみの出し方" },
  { city: "横浜市", rule: "金属製品は最長辺30cm以上、その他（プラスチック製品・木製品など）は最長辺50cm以上", cut: "大きさに満たない物は燃やすごみ・燃えないごみ・小さな金属類として扱う", src: "粗大ごみの種類・大きさを教えてほしい" },
  { city: "川崎市", rule: "品目ごとに定める。金属を含む物は最長辺30cm以上、布・プラスチック製品は50cm以上を粗大ごみとする品目が多い", cut: "剪定枝は太さ10cm程度・長さ50cm未満に切って束ねる、毛布は条件により50cm未満に切って普通ごみ、など品目ごとに案内", src: "ごみの分別に迷ったら" },
  { city: "名古屋市", rule: "令和8年10月から、容量45リットルの指定袋に入らないもの（令和8年9月までは30センチメートル角を超えるもの）", cut: "袋の口がしっかり結べることが条件。ガムテープで止めた物や袋を重ねてかぶせた物は粗大ごみになる", src: "令和8年10月から、粗大ごみの対象が変わりました" },
  { city: "仙台市", rule: "一番長い部分の長さがおおむね30cmを超え、重さが100kg以下の耐久消費財など", cut: "（公式ページに解体・切断についての記載は見当たらない）", src: "粗大ごみの出し方・受付" },
];

const merits = [
  {
    title: "解体しても粗大ごみとして扱うと定めている自治体がある",
    body: "世田谷区は、解体しても元の形・使用時の形状で判断するため、可燃ごみ・不燃ごみとしては出せないと明記しています。こうした自治体では、棚やいすをばらして小さくしても、粗大ごみとして申し込む必要があります。手間をかけて解体したのに収集されない、という事態を避けるためにも、切る前に必ず自治体の基準を確認してください。粗大ごみの申し込み方法は、粗大ごみ収集の申し込みの流れの記事で解説しています。",
  },
  {
    title: "品目ごとに、切って通常のごみで出す方法を示している自治体もある",
    body: "一方で、川崎市の分別一覧には、剪定した枝は太さ10cm程度・長さ50cm未満に切って束ねて普通ごみに出す、毛布は資源集団回収での回収が難しい物や汚れた物について50cm未満に切って普通ごみに出す、といった品目ごとの案内があります。このように、切って出してよい品目と方法を自治体が具体的に示している場合は、その指示どおりに行えば通常の収集で出せます。案内のない品目まで同じ扱いになるとは限らない点に注意してください。",
  },
  {
    title: "測り方の決まりも確認しておく",
    body: "大きさをどこで測るかも、自治体によって決まりがあります。川崎市は掃除機について、ホースなどを含めて一番小さくまとめた状態で測るよう案内しています。名古屋市は指定袋に入るかどうかで判断し、袋の口がしっかり結べることを条件にしています。脚や取っ手を含めるのか、折りたたんだ状態で測ってよいのかといった点は、品目ごとの案内を確認するのが確実です。迷ったときは、自治体の清掃事務所やごみの相談窓口に問い合わせてください。",
  },
];

const steps = [
  {
    title: "出したい物を一覧にし、素材と大きさを書き出す",
    body: "片付けで出てきた大きな物を一覧にし、品目名、主な素材（金属・木・プラスチック・布など）、いちばん長い辺の長さを書き出します。メジャーで測った数字を記録しておくと、自治体の基準と照らし合わせるときに迷いません。一覧は不用品リストの作り方の記事の方法を応用すると作りやすくなります。家電リサイクル法の対象になるエアコン・テレビ・冷蔵庫・洗濯機は粗大ごみとは別の扱いになるため、この時点で分けておいてください。",
  },
  {
    title: "自治体の分別案内で、品目ごとの基準を調べる",
    body: "お住まいの自治体の公式サイトやごみ分別アプリで、品目名を一つずつ検索します。粗大ごみの一般的な基準だけでなく、品目ごとに「最長辺が30cm以上なら粗大ごみ」「たたんだ状態で測る」などの個別の案内があることも多いため、品目名での検索が確実です。調べた結果を一覧の横に書き込み、「粗大ごみ」「通常のごみ」「自治体では収集しない」に分けておくと、次の手順が進めやすくなります。",
  },
  {
    title: "切って出せるかどうかを、自治体の案内で確認する",
    body: "大きさの基準を少し超える物について、切ったり解体したりして通常のごみで出したいときは、その自治体が切って出すことを認めているかを確認します。世田谷区のように解体しても元の形で判断する自治体では、粗大ごみとして申し込みます。川崎市の剪定枝や毛布のように、品目ごとに切り方を示している場合は、その長さや束ね方に従ってください。案内が見当たらないときは、自己判断で切らず、清掃事務所などの窓口に問い合わせると確実です。",
  },
  {
    title: "切断や解体をするときは、安全と周囲への配慮を優先する",
    body: "自治体の案内に沿って切る場合でも、のこぎりや電動工具を使う作業には、けがの危険があります。軍手や保護眼鏡を着け、作業する場所を広く空け、子どもやペットを近づけないでください。金属や硬い木材、ばねが入った家具は、無理に切ろうとすると工具が跳ねたり、部材が飛んだりすることがあります。集合住宅では、作業音が近隣の迷惑にならないよう時間帯にも配慮が必要です。難しいと感じた物は、切らずに粗大ごみとして出すほうが安全です。",
  },
  {
    title: "粗大ごみは申し込み、それ以外は収集日に分けて出す",
    body: "粗大ごみと判断した物は、自治体の受付センターに電話かインターネットで申し込み、案内された方法で手数料を納めて、指定された日に出します。通常のごみで出せる物は、区分ごとの収集日に合わせて出します。量が多い場合は、一度に出せる数の上限や受付の混み具合も確認してください。申し込みが混み合う時期の対処は粗大ごみの予約が取れないときの対処、自分で処理施設に運ぶ方法はごみ処理施設への自己搬入の記事で解説しています。",
  },
];

const ngActions = [
  {
    title: "基準を確かめずに家具を解体し、燃やすごみに混ぜて出す",
    body: "解体しても元の形で判断すると定めている自治体では、ばらした家具を燃やすごみや燃えないごみに混ぜて出すと、収集されずに残されたり、ルール違反として扱われたりするおそれがあります。手間をかけて解体したうえ、結局粗大ごみとして申し込み直すことにもなりかねません。切る前に、お住まいの自治体が解体・切断をどう扱っているかを確認してください。迷う物は粗大ごみとして申し込むのが確実です。",
  },
  {
    title: "以前住んでいた地域の基準のまま判断する",
    body: "粗大ごみの基準は自治体ごとに異なり、一辺30cmを基準にする自治体もあれば、素材によって30cmと50cmを使い分ける自治体、指定袋に入るかどうかで判断する自治体もあります。引っ越し前の地域で通常のごみとして出せた物が、今の地域では粗大ごみになることがあります。逆に、粗大ごみとして申し込む必要がない物に手数料を払ってしまうこともあります。今住んでいる自治体の最新の基準で判断してください。",
  },
  {
    title: "ばねやガラスを含む家具を、自己流で切断する",
    body: "スプリングの入ったマットレスやソファ、ガラスを使った棚や扉、金属の骨組みがある家具は、切断の途中でばねが跳ねたり、ガラスが割れて飛び散ったりすることがあり、大きなけがにつながります。こうした家具は、自治体の案内に従ってそのまま粗大ごみとして出すか、搬出と処分を業者に依頼する方法を検討してください。大型家具全般の出し方は大型家具の処分方法の記事で解説しています。",
  },
  {
    title: "指定袋に無理に詰め込み、テープで口を止めて出す",
    body: "指定袋に入るかどうかで判断する自治体では、袋の口がしっかり結べることが条件になっていることがあります。名古屋市は、ガムテープで止めた物や袋を2枚使って上から覆いかぶせた物は粗大ごみになると案内しています。無理に詰め込んだ袋は破れやすく、収集作業の負担にもなります。袋に収まらない物は、粗大ごみとして申し込んでください。",
  },
];

const judgeSigns = [
  "粗大ごみに当たる物が多く、申し込みや手数料の手続きを一つずつ進めるのが難しい",
  "家具が重くて大きく、指定された場所まで自力で運び出せない",
  "引っ越しや退去の期限が近く、粗大ごみの収集日を待てない",
  "ばねやガラスを含む家具が多く、安全に解体・搬出できる自信がない",
  "実家や空き家の片付けで、粗大ごみと通常のごみが大量に混在している",
];

const faqs = [
  {
    q: "粗大ごみの大きさは全国共通で30cmですか？",
    a: "全国共通の基準はありません。世田谷区や仙台市のように30cmを目安にする自治体がある一方、横浜市は金属製品は最長辺30cm以上、その他は最長辺50cm以上としています。名古屋市は令和8年10月から、容量45リットルの指定袋に入らないものを粗大ごみの対象としています。お住まいの自治体の公式サイトやごみ分別アプリで、品目ごとに確認してください。",
  },
  {
    q: "家具を小さく切れば、燃やすごみとして出せますか？",
    a: "自治体によって扱いが異なります。世田谷区は、解体しても元の形・使用時の形状で判断するため、可燃ごみ・不燃ごみとしては出せないとしています。一方で、川崎市のように剪定枝や毛布など品目を限って、切って普通ごみに出す方法を示している自治体もあります。案内が見当たらない品目は、切る前に自治体の窓口に問い合わせてください。",
  },
  {
    q: "大きさはどこを測ればよいですか？",
    a: "多くの自治体は、いちばん長い辺（最長辺）の長さで判断しています。ただし、たたんだ状態や、ホースなどを含めて一番小さくまとめた状態で測るよう案内している品目もあります（川崎市の掃除機など）。指定袋に入るかどうかで判断する自治体では、袋の口が結べるかどうかが条件になる場合もあります。品目ごとの案内を確認してください。",
  },
  {
    q: "粗大ごみが多すぎるときは、どうすればよいですか？",
    a: "自治体の粗大ごみは、一度に出せる数や受付の枠に限りがあることがあります。量が多い場合は、何回かに分けて申し込む、処理施設への自己搬入を利用する、片付け業者に搬出と処分をまとめて依頼する、といった方法を組み合わせると進めやすくなります。自治体と業者の使い分けは、自治体回収と業者回収の使い分けの記事で解説しています。",
  },
];

const sources = [
  { label: "粗大ごみの出し方", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/online_tetsuzuki/380.html" },
  { label: "粗大ごみの種類・大きさを教えてほしい。（粗大ごみとは何か。）", org: "横浜市", url: "https://www.city.yokohama.lg.jp/faq/kukyoku/shigen/shigen-gyomu/20211020111557208.html" },
  { label: "ごみの分別に迷ったら", org: "川崎市", url: "https://www.city.kawasaki.jp/kurashi/category/261-1-10-2-0-0-0-0-0-0.html" },
  { label: "令和8年10月から、粗大ごみの対象が変わりました", org: "名古屋市", url: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1050522.html" },
  { label: "粗大ごみの出し方・受付", org: "仙台市", url: "https://www.city.sendai.jp/haiki-kanri/kurashi/machi/genryo/gomi/wakekata/sodaigomi.html" },
];

const related = [
  { href: "/sodaigomi-tesuryou-hikaku/", label: "粗大ごみの手数料の自治体比較", desc: "ベッド・ソファ・たんすの手数料と持ち込みの扱い" },
  { href: "/massage-chair-kenkoukigu-shobun/", label: "マッサージチェアなど健康器具の処分方法", desc: "家電リサイクル法の対象外・粗大ごみの手数料と搬出" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "一般的な手順と出すときの注意点" },
  { href: "/sodaigomi-konzatsu-taisaku/", label: "粗大ごみの予約が取れないときの対処", desc: "混み合う時期と期限に間に合わせる段取り" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない家具の搬出と選択肢" },
  { href: "/jiko-hannyu-shobun/", label: "ごみ処理施設への自己搬入", desc: "持ち込み処分が向く場面" },
  { href: "/fuyohin-list-tsukurikata/", label: "不用品リストの作り方", desc: "書き出す項目と見積もりへの活かし方" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体回収と業者回収の使い分け", desc: "どちらに依頼すべきかの判断基準" },
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
    { "@type": "ListItem", position: 2, name: "粗大ごみになる大きさの基準" },
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
    { href: "#kiso", label: "1｜粗大ごみの基準の考え方" },
    { href: "#hikaku", label: "2｜自治体ごとの基準の例" },
    { href: "#merit", label: "3｜解体・切断についての3つの確認事項" },
    { href: "#steps", label: "4｜大きな不用品を出し分ける5ステップ" },
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

      <Breadcrumb items={[{ label: "粗大ごみになる大きさの基準" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          粗大ごみになる大きさの基準｜自治体ごとの違いと、解体・切断して出す前に確認すること
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          カラーボックスや小さな棚、収納ケース、扇風機など、片付けで出てくる物の中には、粗大ごみとして申し込むべきか、燃やすごみや燃えないごみで出せるのか、判断に迷う大きさの物が少なくありません。「小さく切れば普通のごみで出せるのでは」と考える方も多いものの、その扱いも自治体によって異なります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、世田谷区・横浜市・川崎市・名古屋市・仙台市の公式情報をもとに、粗大ごみになる大きさの基準の違い、解体・切断して出すことの扱い、大きさの測り方、切断するときの安全上の注意を順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>粗大ごみの基準は自治体ごとに異なり、一辺30cm、素材別の30cm・50cm、指定袋に入るかどうか、などの決め方がある</li>
          <li>解体しても元の形で判断する自治体（世田谷区）と、品目ごとに切って出す方法を示す自治体（川崎市）がある</li>
          <li>名古屋市のように基準が見直されることがあるため、出す直前に最新の公式情報を確認する</li>
          <li>切断は自治体の案内がある品目に限り、ばね・ガラスを含む家具は無理に切らない</li>
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

      <H2 id="kiso" num="1">粗大ごみの基準の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        個別の自治体の基準を見る前に、粗大ごみかどうかがどのように決まるのか、どこで判断を誤りやすいのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="hikaku" num="2">自治体ごとの基準の例</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        各自治体の公式サイトで2026年10月17日に確認した内容です。基準や扱いは変更されることがあるため、実際に出す前に各自治体の最新の案内をご確認ください。
      </p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">自治体</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">粗大ごみの基準</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">解体・切断や出し方の扱い</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((r, i) => (
              <tr key={r.city} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border">{r.city}</td>
                <td className="px-3 py-2.5 border-t border-border">{r.rule}</td>
                <td className="px-3 py-2.5 border-t border-border">{r.cut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典は各自治体の公式ページ（本記事の「出典・参考にした公的情報」に掲載）。家電リサイクル法の対象品（エアコン・テレビ・冷蔵庫・洗濯機など）は、いずれの自治体でも粗大ごみとは別の扱いです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        エリアごとの片付け業者の情報は、<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜</Link>・<Link href="/area/kawasaki/" className="text-primary underline underline-offset-2">川崎</Link>・<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋</Link>・<Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台</Link>の各エリアページで紹介しています。
      </p>

      <H2 id="merit" num="3">解体・切断についての3つの確認事項</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        大きさの基準を少し超える物を切って出したいときは、作業を始める前に次の3点を確認してください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="steps" num="4">大きな不用品を出し分ける5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、一覧にする→品目ごとの基準を調べる→切って出せるか確認する→安全に作業する→区分ごとに出す、の5ステップです。
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
        申し込みから収集までの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>、混み合う時期の対処は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの予約が取れないときの対処</Link>、自分で運ぶ方法は<Link href="/jiko-hannyu-shobun/" className="text-primary underline underline-offset-2">ごみ処理施設への自己搬入</Link>、家電の4品目は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>を参考にしてください。
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
        粗大ごみは自治体の収集を使うと費用を抑えやすい一方、申し込みや運び出しは自分で行う必要があります。次のような状況では、片付け・不用品回収業者への依頼も検討してください。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可を確認できる業者を選び、作業前の見積もりで総額を確定させてください。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・2026年10月17日確認）
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
        本記事は一般的な知識の提供を目的としたものです。粗大ごみの基準、解体・切断の扱い、手数料、申し込み方法は自治体により異なり、変更されることがあるため、必ずお住まいの自治体の最新の案内をご確認ください。工具を使った作業は、安全に十分配慮して行ってください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
