import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sodaigomi-tesuryou-hikaku/";
const TITLE = "粗大ごみの手数料を主な自治体で比較｜ベッド・ソファ・たんすの例と申し込み方法、持ち込みの扱い";
const DESC =
  "粗大ごみの手数料は自治体ごとに決め方も金額も異なります。世田谷区・新宿区・横浜市・川崎市・名古屋市・仙台市の公式情報（2026年10月22日確認）をもとに、シングルベッド・ソファ・たんす・スプリング入りマットレス・自転車の手数料、申し込み方法、処理施設へ持ち込む場合の手数料の扱いを表で比較します。";
const PUBLISHED = "2026-10-22";
const CHECKED = "2026年10月22日";

const basics = [
  {
    title: "品目ごとに金額を決める自治体と、長さで区分する自治体がある",
    body: "粗大ごみの手数料の決め方は、自治体によって大きく二つに分かれます。名古屋市や仙台市、新宿区のように「シングルベッド」「2人掛けのソファ」など品目ごとに金額を定める方法と、川崎市のように最長辺の長さで300円・600円・1,200円の区分に当てはめる方法です。同じ品目でも、自治体が変われば金額も計算の仕方も変わるため、以前に住んでいた地域の金額は参考になりません。",
  },
  {
    title: "同じ品目でも、大きさや素材で金額が分かれる",
    body: "品目ごとに金額を決めている自治体でも、大きさによって区分が細かく分かれていることがあります。新宿区はたんすなどの箱物家具を「最長辺と2番目に長い辺の合計」で5段階に、世田谷区は同じ合計で4段階に分けています。名古屋市はたんすを最大の辺の長さ120センチで、仙台市は高さ・幅・奥行の合計2.5メートルで区分しています。申し込みの前にメジャーで寸法を測っておくと、手数料を正しく確認できます。",
  },
  {
    title: "解体しても手数料は変わらない自治体がある",
    body: "世田谷区は、粗大ごみの処理手数料は原則として解体前の大きさで決まり、スチール製の棚やベッド、たんす、テーブルなどを解体しても手数料は変わらないと案内しています。新宿区も、解体しても粗大ごみとして出すよう求めています。手数料を下げる目的で家具をばらしても、金額が変わらないうえに作業の手間とけがの危険が増えることがあります。大きさの基準と解体の扱いは、粗大ごみになる大きさの基準の記事で解説しています。",
  },
];

type Row = { city: string; bed: string; sofa: string; tansu: string; mattress: string; bike: string };

const feeRows: Row[] = [
  {
    city: "世田谷区（東京都）",
    bed: "1,300円（シングル。ベッドマットは別に申し込み）",
    sofa: "横幅70cm超150cm以下は1,300円（横幅により900円・1,300円・2,300円）",
    tansu: "最長辺と次に長い辺の合計で400円・900円・1,300円・2,300円",
    mattress: "ベッドマット1,300円（セミダブル以下・ダブル以上とも）",
    bike: "タイヤ径16インチ以下400円、16インチ超900円",
  },
  {
    city: "新宿区（東京都）",
    bed: "1,300円（シングル。ベッドマットを除く）",
    sofa: "2人掛け用1,300円（1人掛け用900円、3人掛け用2,300円）",
    tansu: "箱物家具として、最長辺と2番目に長い辺の合計で400円〜3,200円の5段階",
    mattress: "ベッドマット1,300円",
    bike: "16インチ未満400円、16インチ以上900円、電動アシスト式1,300円",
  },
  {
    city: "横浜市",
    bed: "1,000円（枠のみ。木・プラ製、金属製とも）",
    sofa: "2人以上用1,000円（1人用500円）",
    tansu: "長辺1m未満1,000円、1m以上1,500円（木製・金属製）",
    mattress: "スプリング付きベッドマットレス2,200円",
    bike: "500円（子供用自転車を含む）",
  },
  {
    city: "川崎市",
    bed: "最長辺50cm以上180cm未満600円、180cm以上1,200円（ベッド枠とマットレスのセットで1個）",
    sofa: "最長辺50cm以上180cm未満600円、180cm以上1,200円",
    tansu: "最長辺50cm以上180cm未満600円、180cm以上1,200円",
    mattress: "スプリングマットレス 最長辺50cm以上180cm未満600円、180cm以上1,200円",
    bike: "最長辺50cm以上180cm未満600円、180cm以上1,200円",
  },
  {
    city: "名古屋市",
    bed: "1,000円（シングルサイズ）",
    sofa: "2人用1,000円（1人用500円、3人以上用1,500円）",
    tansu: "最大の辺120cm以下1,500円、120cm超2,000円",
    mattress: "スプリング入り2,000円",
    bike: "1,000円",
  },
  {
    city: "仙台市",
    bed: "1,200円（シングル・セミダブル。スプリングマットレスを除く）",
    sofa: "2人掛け以上1,200円（1人掛け800円）",
    tansu: "高さ・幅・奥行の合計2.5m未満800円、2.5m以上1,600円",
    mattress: "スプリングマットレス（台込み）3,000円",
    bike: "400円",
  },
];

const howRows = [
  {
    city: "世田谷区（東京都）",
    apply: "インターネット（24時間）、電話（世田谷区粗大ごみ受付センター）、チャット。インターネット・チャットではオンライン決済が使える",
    carry: "可。船橋粗大ごみ中継所に、申し込み時に指定された土曜日・日曜日に持ち込む。手数料は収集の場合の半額程度（例 シングルベッド600円）。1世帯1日1回・10個まで",
  },
  {
    city: "新宿区（東京都）",
    apply: "インターネット（24時間）、電話（新宿区粗大ごみ受付センター）",
    carry: "公式で確認できず",
  },
  {
    city: "横浜市",
    apply: "インターネット、チャット、LINE（24時間）、電話（粗大ごみ受付センター）。インターネット・チャットからの収集申し込みでは電子決済が使える",
    carry: "可。市内4か所の粗大ごみ自己搬入ヤードに事前申し込みのうえ持ち込む。手数料は市が収集する場合と同じ。1日20個まで",
  },
  {
    city: "川崎市",
    apply: "インターネット（24時間）、電話（川崎市粗大ごみ受付センター）、FAX（電話・インターネットで申し込みができない方）",
    carry: "公式で確認できず",
  },
  {
    city: "名古屋市",
    apply: "インターネット、電話（粗大ごみ受付センター）",
    carry: "可。ごみが発生した区の環境事業所で受付をしてから処理施設に搬入する。処理手数料は計量して10キログラムまでごとに270円（現金）",
  },
  {
    city: "仙台市",
    apply: "インターネット（品目別表に載っている品目のみ）、電話（粗大ごみ受付センター）",
    carry: "可。今泉工場・葛岡工場に持ち込む。手数料は1回・1台につき100kgまで1,500円、100kg超は10kgごとに150円、スプリングマットレスは1枚2,000円（現金。粗大ごみ手数料納付券は使えない）",
  },
];

const points = [
  {
    title: "同じシングルベッドでも、1,000円から1,300円まで差がある",
    body: "シングルベッドの枠の手数料は、横浜市と名古屋市が1,000円、仙台市が1,200円、世田谷区と新宿区が1,300円です。川崎市は最長辺の長さで決まり、180cm以上なら1,200円です。さらに、世田谷区や新宿区ではベッドマットを別に申し込む必要があり、川崎市ではベッド枠とマットレスをセットで1個として出せるなど、数え方にも違いがあります。合計額は「枠」と「マットレス」をどう数えるかで変わるため、申し込み時に確認してください。",
  },
  {
    title: "スプリング入りマットレスは、別の区分で高めに設定されていることがある",
    body: "スプリング入りのマットレスは、仙台市が3,000円、横浜市が2,200円、名古屋市が2,000円と、ほかの寝具より高い区分になっています。仙台市では専用の3,000円券で納める決まりです。一方、川崎市はスプリングマットレスもほかの品目と同じく最長辺の長さで区分しています。マットレスの手放し方は布団・マットレスの処分方法の記事で解説しています。",
  },
  {
    title: "持ち込みの手数料は、安くなる自治体と変わらない自治体がある",
    body: "処理施設へ自分で持ち込む場合、世田谷区は収集の半額程度になると案内しています。一方、横浜市は市が収集する場合と同じ手数料が必要です。名古屋市と仙台市は、持ち込みの場合は品目ごとの金額ではなく重さで手数料を計算します。持ち込みは車の手配や積み下ろしを自分で行う必要があるため、手数料の差だけでなく手間と時間も含めて判断してください。自己搬入の進め方はごみ処理施設への自己搬入の記事で解説しています。",
  },
];

const steps = [
  {
    title: "出したい物の品目名・素材・寸法を書き出す",
    body: "手数料は品目と大きさで決まるため、出したい物の品目名、主な素材、いちばん長い辺と次に長い辺の長さを書き出します。ベッドなら枠とマットレスを分けて書き、マットレスはスプリングの有無も確認してください。書き出し方は不用品リストの作り方の記事が参考になります。",
  },
  {
    title: "自治体の手数料一覧や受付サイトで金額を確認する",
    body: "お住まいの自治体の手数料一覧、粗大ごみ受付サイトの品目一覧、ごみ分別アプリなどで、品目ごとの金額を確認します。一覧に載っていない品目や、大きさの区分に迷う物は、粗大ごみ受付センターに電話で問い合わせると確実です。",
  },
  {
    title: "申し込んでから、案内された金額の処理券を買う",
    body: "多くの自治体では、申し込みの際に手数料と収集日が案内されます。世田谷区や仙台市は、処理券（手数料納付券）を申し込みが完了してから購入するよう求めており、仙台市は払い戻しをしないと明記しています。先に処理券を買うと金額が合わないことがあるため、申し込みを先に済ませてください。申し込みの全体の流れは粗大ごみ収集の申し込みの流れの記事で解説しています。",
  },
  {
    title: "処理券を貼り、指定された日・場所に出す",
    body: "処理券に氏名または受付番号と収集日を書き、品物ごとに貼って、指定された日の朝に指定の場所へ出します。オンライン決済を使った場合は、世田谷区のように処理券の代わりに受付番号などを書いた紙を貼るよう案内している自治体もあります。自治体の案内に従ってください。",
  },
];

const ngActions = [
  {
    title: "申し込む前に処理券を買ってしまう",
    body: "手数料は品目と大きさで決まり、申し込みの際に初めて正確な金額が分かることが少なくありません。仙台市は手数料納付券の払い戻しをしないとしています。金額が合わない処理券を買ってしまうと、余った券が無駄になります。申し込みを済ませてから購入してください。",
  },
  {
    title: "手数料を下げるつもりで家具を解体する",
    body: "世田谷区は、解体しても手数料は変わらないと案内しています。解体の手間がかかるうえ、ばねやガラスを含む家具ではけがの危険もあります。手数料を下げる目的での解体は避け、解体の扱いは事前に自治体の案内で確認してください。",
  },
  {
    title: "ネットの古い金額や、ほかの自治体の金額をそのまま信じる",
    body: "新宿区は令和5年10月1日以降の申し込み分から粗大ごみ処理手数料を改定しています。手数料は見直されることがあり、数年前の記事や家族の記憶にある金額が今も同じとは限りません。必ずお住まいの自治体の最新の公式情報で確認してください。",
  },
];

const judgeSigns = [
  "粗大ごみの点数が多く、品目ごとの申し込みと処理券の購入を進めるのが難しい",
  "重い家具を指定の場所まで運び出せない、持ち込み用の車を用意できない",
  "引っ越しや退去の期限が近く、収集日を待てない",
  "粗大ごみと通常のごみ、自治体で収集しない物が大量に混在している",
];

const faqs = [
  {
    q: "粗大ごみの手数料は全国で同じですか？",
    a: "同じではありません。本記事で比べた6自治体だけでも、シングルベッドの枠は1,000円から1,300円まで差があり、川崎市のように最長辺の長さで300円・600円・1,200円に区分する自治体もあります。お住まいの自治体の手数料一覧や粗大ごみ受付センターで確認してください。",
  },
  {
    q: "自分で処理施設に持ち込むと安くなりますか？",
    a: "自治体によって異なります。世田谷区は持ち込みの手数料を収集の場合の半額程度としていますが、横浜市は市が収集する場合と同じ手数料が必要です。名古屋市と仙台市は、持ち込みの場合は重さで手数料を計算します。持ち込みには事前の申し込みや受付が必要な自治体が多いため、各自治体の案内を確認してください。",
  },
  {
    q: "ベッドは枠とマットレスで別々に手数料がかかりますか？",
    a: "自治体によって数え方が異なります。世田谷区はベッドとベッドマットを別に申し込むよう案内し、新宿区もシングルベッドの手数料はベッドマットを除いた金額です。一方、川崎市はベッド枠とマットレスをセットで1個として出せるとしています。申し込みの際に、枠とマットレスの両方を伝えて確認してください。",
  },
  {
    q: "手数料の減免はありますか？",
    a: "世田谷区、横浜市、川崎市などは、手数料の減免制度について案内しています。横浜市は生活保護世帯などを対象に、一世帯あたり年間4個まで手数料を全額免除するとしています。対象者や申し込み方法は自治体ごとに異なるため、お住まいの自治体の清掃担当窓口に問い合わせてください。",
  },
];

const sources = [
  { label: "粗大ごみの出し方", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/online_tetsuzuki/380.html" },
  { label: "粗大ごみの処理手数料について", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02239/382.html" },
  { label: "粗大ごみの持ち込みについて", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/online_tetsuzuki/381.html" },
  { label: "世田谷区粗大ごみインターネット受付 品目一覧", org: "世田谷区", url: "https://www.sodai-setagaya.jp/eco/view/setagaya/dustlistSearch.html" },
  { label: "粗大ごみの出し方", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00016.html" },
  { label: "粗大ごみの処理手数料一覧", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_05_00001.html" },
  { label: "粗大ごみの申込み", org: "横浜市", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/sodaigomi/dashikata/sodaigomi.html" },
  { label: "粗大ごみの手数料の減免について教えてほしい。", org: "横浜市", url: "https://www.city.yokohama.lg.jp/faq/kukyoku/shigen/shigen-gyomu/20211020170806692.html" },
  { label: "粗大ごみの持込みをしたい（自己搬入）", org: "横浜市", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/sodaigomi/dashikata/mochikomi.html" },
  { label: "横浜市粗大ごみインターネット受付 品目一覧", org: "横浜市", url: "https://www.sodai.city.yokohama.lg.jp/eco/view/yokohama/dustlistSearch.html" },
  { label: "粗大ごみの出し方について知りたい。", org: "川崎市", url: "https://www.city.kawasaki.jp/templates/faq/300/0000013341.html" },
  { label: "粗大ごみ処理手数料について", org: "川崎市", url: "https://www.city.kawasaki.jp/templates/faq/300/0000013379.html" },
  { label: "川崎市粗大ごみインターネット受付 品目一覧", org: "川崎市", url: "https://www.sodai.city.kawasaki.jp/eco/view/kawasaki/dustlistSearch.html" },
  { label: "粗大ごみの分け方・出し方について", org: "名古屋市", url: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1033988.html" },
  { label: "粗大ごみ処理手数料の例", org: "名古屋市", url: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html" },
  { label: "ご自分で処理施設に搬入する場合（自己搬入）", org: "名古屋市", url: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1033991.html" },
  { label: "粗大ごみの出し方・受付", org: "仙台市", url: "https://www.city.sendai.jp/haiki-kanri/kurashi/machi/genryo/gomi/wakekata/sodaigomi.html" },
  { label: "五十音で引くワケ方事典", org: "仙台市", url: "https://www.city.sendai.jp/haiki-shido/kurashi/machi/genryo/gomi/yobi/gojuon.html" },
  { label: "ごみをご自身で処理施設に持ち込む場合（自己搬入）", org: "仙台市", url: "https://www.city.sendai.jp/shisetsu-kanri/kurashi/machi/genryo/gomi/wakekata/shorishisetsu2.html" },
];

const related = [
  { href: "/sodaigomi-size-kijun/", label: "粗大ごみになる大きさの基準", desc: "自治体ごとの違いと解体・切断の扱い" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "一般的な手順と出すときの注意点" },
  { href: "/sodaigomi-konzatsu-taisaku/", label: "粗大ごみの予約が取れないときの対処", desc: "混み合う時期と期限に間に合わせる段取り" },
  { href: "/jiko-hannyu-shobun/", label: "ごみ処理施設への自己搬入", desc: "持ち込み処分が向く場面" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない家具の搬出と選択肢" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分方法", desc: "処理が難しい寝具類の手放し方" },
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
    { "@type": "ListItem", position: 2, name: "粗大ごみの手数料の自治体比較" },
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

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      <span className="mono text-primary mr-2">{num}</span>
      {children}
    </h2>
  );
}

const linkCls = "text-primary underline underline-offset-2";

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜粗大ごみの手数料の決まり方" },
    { href: "#hikaku", label: "2｜代表的な品目の手数料の比較" },
    { href: "#moushikomi", label: "3｜申し込み方法と持ち込みの扱いの比較" },
    { href: "#point", label: "4｜比較して分かる3つの違い" },
    { href: "#steps", label: "5｜手数料を確認して出す4ステップ" },
    { href: "#ng", label: "6｜避けるべき3つの行動" },
    { href: "#gyousha", label: "7｜業者への依頼を検討すべき状況" },
    { href: "#faq", label: "8｜よくある質問" },
    { href: "#shutten", label: "9｜出典・参考にした公的情報" },
    { href: "#related", label: "10｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "粗大ごみの手数料の自治体比較" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          粗大ごみの手数料を主な自治体で比較｜ベッド・ソファ・たんすの例と申し込み方法、持ち込みの扱い
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月22日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けで出た家具や寝具を粗大ごみとして出すとき、手数料がいくらかかるのかは、点数が多いほど気になる点です。ところが、粗大ごみの手数料は自治体ごとに金額だけでなく決め方そのものが異なり、ある地域の金額が別の地域でも通用するとは限りません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、世田谷区・新宿区・横浜市・川崎市・名古屋市・仙台市の公式情報を{CHECKED}に確認し、シングルベッド・ソファ・たんす・スプリング入りマットレス・自転車の手数料、申し込み方法、処理施設へ持ち込む場合の手数料の扱いを比較します。公式情報で確認できなかった項目は「公式で確認できず」と記載しています。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>手数料は、品目ごとに金額を定める自治体（名古屋市・仙台市・新宿区など）と、最長辺の長さで区分する自治体（川崎市）がある</li>
          <li>シングルベッドの枠は1,000円〜1,300円、スプリング入りマットレスは2,000円〜3,000円など、自治体によって差がある</li>
          <li>持ち込みの手数料は、収集の半額程度（世田谷区）、収集と同額（横浜市）、重さで計算（名古屋市・仙台市）と扱いが分かれる</li>
          <li>処理券は申し込みで金額を確認してから買い、解体しても手数料が変わらない自治体があることに注意する</li>
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

      <H2 id="kiso" num="1">粗大ごみの手数料の決まり方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        自治体ごとの金額を比べる前に、手数料がどのように決まるのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="hikaku" num="2">代表的な品目の手数料の比較</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        各自治体の手数料一覧・粗大ごみ受付サイトの品目一覧で{CHECKED}に確認した、自治体が収集する場合の手数料（1点あたり）です。品目の名前や区分は自治体ごとに異なるため、各自治体の表記に沿って記載しています。手数料は変更されることがあるため、出す前に必ず最新の案内をご確認ください。
      </p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">自治体</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">シングルベッド</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">ソファ（2人掛け）</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">たんす</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">スプリング入りマットレス</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">自転車</th>
            </tr>
          </thead>
          <tbody>
            {feeRows.map((r, i) => (
              <tr key={r.city} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border align-top">{r.city}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.bed}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.sofa}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.tansu}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.mattress}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.bike}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典（いずれも{CHECKED}確認）：世田谷区・横浜市・川崎市は各市区の粗大ごみインターネット受付の品目一覧、新宿区は「粗大ごみの処理手数料一覧」、名古屋市は「粗大ごみ処理手数料の例」、仙台市は「五十音で引くワケ方事典」。各ページのURLは本記事の「出典・参考にした公的情報」に掲載しています。世田谷区はベッドマットのスプリングの有無による区分を設けていないため、ベッドマットの金額を記載しています。家電リサイクル法の対象品（エアコン・テレビ・冷蔵庫・洗濯機など）は、いずれの自治体でも粗大ごみとしては収集しません。
      </p>

      <H2 id="moushikomi" num="3">申し込み方法と持ち込みの扱いの比較</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        申し込みの窓口と、処理施設に自分で持ち込む場合の手数料の扱いを、各自治体の公式ページで{CHECKED}に確認した内容です。
      </p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">自治体</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">申し込み方法</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">持ち込み（自己搬入）と手数料</th>
            </tr>
          </thead>
          <tbody>
            {howRows.map((r, i) => (
              <tr key={r.city} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border align-top">{r.city}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.apply}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.carry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典（いずれも{CHECKED}確認）：世田谷区「粗大ごみの出し方」「粗大ごみの処理手数料について」「粗大ごみの持ち込みについて」、新宿区「粗大ごみの出し方」、横浜市「粗大ごみの申込み」「粗大ごみの持込みをしたい（自己搬入）」、川崎市「粗大ごみの出し方について知りたい。」、名古屋市「粗大ごみの分け方・出し方について」「ご自分で処理施設に搬入する場合（自己搬入）」、仙台市「粗大ごみの出し方・受付」「ごみをご自身で処理施設に持ち込む場合（自己搬入）」。名古屋市は令和9年1月頃から自己搬入の受付方法が変わると案内しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        エリアごとの片付け業者の情報は、<Link href="/area/tokyo/" className={linkCls}>東京</Link>・<Link href="/area/yokohama/" className={linkCls}>横浜</Link>・<Link href="/area/kawasaki/" className={linkCls}>川崎</Link>・<Link href="/area/nagoya/" className={linkCls}>名古屋</Link>・<Link href="/area/sendai/" className={linkCls}>仙台</Link>の各エリアページで紹介しています。
      </p>

      <H2 id="point" num="4">比較して分かる3つの違い</H2>
      <div className="space-y-4 mb-4">
        {points.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="steps" num="5">手数料を確認して出す4ステップ</H2>
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
        大きさの基準は<Link href="/sodaigomi-size-kijun/" className={linkCls}>粗大ごみになる大きさの基準</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ収集の申し込みの流れ</Link>、混み合う時期の対処は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみの予約が取れないときの対処</Link>、持ち込みは<Link href="/jiko-hannyu-shobun/" className={linkCls}>ごみ処理施設への自己搬入</Link>、マットレスは<Link href="/futon-mattress-shobun/" className={linkCls}>布団・マットレスの処分方法</Link>、書き出し方は<Link href="/fuyohin-list-tsukurikata/" className={linkCls}>不用品リストの作り方</Link>を参考にしてください。
      </p>

      <H2 id="ng" num="6">避けるべき3つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="7">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自治体の粗大ごみ収集は手数料が定められている一方、申し込み・処理券の購入・運び出しを自分で行う必要があります。次のような状況では、片付け・不用品回収業者への依頼も検討してください。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可を確認できる業者を選び、作業前の見積もりで総額を確定させてください。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。依頼先は<Link href="/review/kurashi-market/" className={linkCls}>くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className={linkCls}>ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className={linkCls}>自治体と業者の使い分け</Link>の記事で解説しています。
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

      <H2 id="faq" num="8">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="shutten" num="9">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className={linkCls}>{s.label}</a>（{s.org}・{CHECKED}確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="10">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。粗大ごみの手数料、品目の区分、申し込み方法、持ち込みの扱いは自治体により異なり、変更されることがあるため、必ずお住まいの自治体の最新の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
