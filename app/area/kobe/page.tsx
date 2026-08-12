import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/kobe/";
const UPDATED = "2026年8月12日";
const UPDATED_ISO = "2026-08-12";

export const metadata: Metadata = {
  title: "神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "神戸でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・ゴミ屋敷専門パートナーズ（関西対応）・くらしのマーケット・ミツモア・生活110番の料金目安と特徴、坂・高台の住宅地の階段搬出・小運搬の段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "神戸でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。坂・高台の住宅地の階段搬出や小運搬の段取りも解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/hero-final.png"],
  },
};

// アフィリエイトリンク（提携開始後にURLを設定。nullの間は公式サイトへ）
const AFF: Record<string, string | null> = {
  "minna-ihinseiri": null,
  "gomiyashiki-partners": null,
  "kurashi-market": null,
  mitsumoa: null,
  seikatsu110: null,
  "sumai-hotline": null,
};

interface AreaCompany {
  slug: string;
  num: string;
  catch: string;
  name: string;
  officialUrl: string;
  image: string | null;
  imageAlt: string;
  intro: string[];
  recommend: string[];
  table: { k: string; v: string; note?: string }[];
  memo: string;
}

// 掲載データはすべて当サイトの data/companies.json・data/reviews.json（各レビューページ）掲載値の流用です
const companies: AreaCompany[] = [
  {
    slug: "minna-ihinseiri",
    num: "1-1",
    catch: "審査済み業者を最大3社比較",
    name: "みんなの遺品整理",
    officialUrl: "https://m-ihinseiri.jp/",
    image: "/images/hero-a.png",
    imageAlt: "みんなの遺品整理の紹介イメージ",
    intro: [
      "みんなの遺品整理は、株式会社LIFULL senior（LIFULLグループ）が運営する遺品整理・生前整理業者の紹介サービスです。遺品整理士認定協会と提携し、審査を通過した業者のみを掲載しているのが最大の特徴で、最大3社の一括見積もりを取り、支払金額や口コミを確認したうえで業者を選べます。",
      "対応エリアは全国47都道府県で、神戸からも利用できます。相談・見積もりは無料です。高台の住宅地にある親の家の生前整理や、遺品整理を伴う実家の片付けで「どの業者が信頼できるか分からない」という神戸の方が、審査を通過した業者の中から比較して選べる最初の相談先に向いています。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "複数社の見積もりを比較してから決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（神戸対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料の記載を確認しています（2026年8月12日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-2",
    catch: "ゴミ屋敷・汚部屋の片付け専門",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社（大阪府大阪市）が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、ゴミ屋敷を「片付けたあと住める状態に戻す」ところまで一括で依頼できます。",
      "対応エリアは関東・東海・関西の各府県で、神戸からも依頼できます。公式サイトでは「業界最安値に挑戦」「最短到着60分」を掲げており、見積もりは無料で買取査定にも対応します。運営会社が同じ関西圏の大阪市にあり、片付けから清掃・消臭までまとめて任せたい方の相談先候補になります。",
    ],
    recommend: [
      "ゴミ屋敷・汚部屋の片付けに特化した業者に頼みたい人",
      "清掃・消臭・害虫駆除までまとめて依頼したい人",
      "買取で費用を少しでも抑えたい人",
      "近所に知られないよう配慮して作業してほしい人",
    ],
    table: [
      { k: "料金目安", v: "5万円〜50万円", note: "当サイト掲載の目安。物量・作業範囲で変動" },
      { k: "対応スピード", v: "最短到着60分（公式表記）" },
      { k: "見積もり", v: "無料・買取査定あり" },
      { k: "対応エリア", v: "関東・東海・関西の各府県（神戸対応）" },
      { k: "運営会社", v: "TKC株式会社（大阪府大阪市）" },
    ],
    memo:
      "公式サイト（gomikaisyu-pro.com）で「業界最安値に挑戦」「最短到着60分」の表記と、見積もり無料・買取査定ありの記載を確認しています（2026年8月12日時点）。ゴミ屋敷の片付け費用は物量で大きく変わるため、写真見積もりや訪問見積もりで総額を確定させてから依頼しましょう。",
  },
  {
    slug: "kurashi-market",
    num: "1-3",
    catch: "口コミと料金で地域の業者を選べる",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/hero-c.png",
    imageAlt: "くらしのマーケットの紹介イメージ",
    intro: [
      "くらしのマーケットは、みんなのマーケット株式会社（東京都港区）が運営する、暮らしの出張・訪問サービスのオンラインマーケットプレイスです。不用品回収・粗大ゴミ回収・片付け・ハウスクリーニングなどのカテゴリで、地域の登録業者を料金と口コミを見ながら比較し、そのままオンラインで予約できます。",
      "対応エリアは日本全国で、神戸の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。地元の搬出条件に慣れた地域密着の業者を、口コミを読み比べながら自分の目で選びたい人に向いています。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "地域の複数業者を並べて比較したい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、料金の事前表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月12日時点）。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
  },
  {
    slug: "mitsumoa",
    num: "1-4",
    catch: "最大5社の見積もりを比較",
    name: "ミツモア",
    officialUrl: "https://meetsmore.com/",
    image: "/images/hero-a.png",
    imageAlt: "ミツモアの紹介イメージ",
    intro: [
      "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。不用品回収・片付け・遺品整理のカテゴリがあり、見積もり依頼は無料です。",
      "対応エリアは全国47都道府県です。坂の上や階段のある物件のように搬出の負担が読みにくい場合も、現地の状況をチャットで伝えたうえで、対応できる業者の見積もりだけを集めて比較できます。神戸で相場観をつかんでから業者を決めたい人にも向いています。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "坂・階段など搬出条件を相談してから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（神戸対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、最大5件の見積もり比較・見積もり依頼無料・チャット相談の仕組みを確認しています（2026年8月12日時点）。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
  },
  {
    slug: "seikatsu110",
    num: "1-5",
    catch: "提携業者を無料で紹介・手配",
    name: "生活110番",
    officialUrl: "https://www.seikatsu110.jp/",
    image: "/images/hero-b.png",
    imageAlt: "生活110番の紹介イメージ",
    intro: [
      "生活110番は、東証グロース上場のシェアリングテクノロジー株式会社（本社：愛知県名古屋市）が運営する、暮らしのお困りごとの業者紹介プラットフォームです。不用品回収・ゴミ屋敷・遺品整理を含む多数のカテゴリで、希望地域に対応できる提携専門業者を無料で紹介・手配します。",
      "受付は電話・LINEに対応しています。遠方に住んでいて神戸の実家周辺の業者事情が分からないときや、自分で一社ずつ探して回る時間がないときに、まず相談して手配まで任せたい人に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "不用品回収と他のお困りごとをまとめて相談したい人",
    ],
    table: [
      { k: "費用", v: "紹介・手配は無料", note: "作業料金は提携業者の見積もりで確定" },
      { k: "対応エリア", v: "日本全国", note: "地域・内容により手配不可の場合あり" },
      { k: "受付", v: "電話・LINE相談に対応" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社（東証グロース上場・愛知県名古屋市）" },
      { k: "特徴", v: "不用品回収・ゴミ屋敷・遺品整理など多カテゴリの業者紹介" },
    ],
    memo:
      "公式サイト（seikatsu110.jp）で、提携業者の無料紹介・手配の仕組みと、地域・内容により手配できない場合がある旨の記載を確認しています（2026年8月12日時点）。紹介型サービスのため、費用は紹介先業者の見積もりで必ず確認してください。",
  },
];

// 比較表（神戸から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西", price: "5万円〜50万円", point: "ゴミ屋敷専門・清掃・消臭まで一括対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 家から車までの「距離と高低差」を把握する",
    b: "神戸の片付けでは、玄関からトラックを停められる場所までの距離と高低差が費用と段取りを大きく左右します。家の前まで車が入るのか、階段や坂を挟むのか、挟むなら何段・何メートルほどかを確認しておきましょう。処分したい物の量と大きさ（特に大型家具・家電）もあわせてリスト化しておくと、見積もりの精度が上がります。",
  },
  {
    t: "② 複数の見積もりで総額と内訳を比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。みんなの遺品整理やミツモアのような一括見積もり、くらしのマーケットのような料金比較を使えば、神戸の相場観を効率よくつかめます。階段搬出・小運搬の追加費用が見積もりに含まれているかまで確認しましょう。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。階段や坂道での搬出は家財や建物、周囲に接触するリスクが上がるため、賠償保険・補償制度の有無も重要な確認ポイントです。運営会社名・所在地が明記されているかも信頼性の判断材料になります。",
  },
  {
    t: "④ 現地見積もりで作業人数と段取りをすり合わせる",
    b: "高低差のある搬出は、写真だけでは作業量を正確に見積もりにくいことがあります。条件が複雑な場合は現地見積もりを依頼し、作業人数・所要時間・車両の停め場所・搬出ルートを業者と一緒に確認しましょう。見積もり時に合意した条件と請求内容が変わらないか、作業前に最終確認することも大切です。",
  },
];

const faqs = [
  {
    q: "神戸のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円が目安です。くらしのマーケット・ミツモア・生活110番は業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "坂の上の家で、家の前まで車が入りません。それでも頼めますか？",
    a: "依頼は可能です。トラックが家の前に付けられない場合、下の道路に停めた車まで人力で運ぶ、または軽車両で往復する「小運搬」で対応するのが一般的で、その分の追加費用が設定されていることがあります。見積もりの際に「車を停められる場所から家までの距離」「坂・階段の有無と段数」を具体的に伝え、小運搬・階段搬出込みの総額を提示してもらいましょう。条件が複雑な場合は現地見積もりが確実です。",
  },
  {
    q: "階段しかない高台の実家から、大型家具だけ先に処分できますか？",
    a: "大型家具のみの回収に対応する業者・サービスは多くあります。婚礼タンスやベッドのような重量物は階段搬出の作業人数が増えることがあるため、品目・サイズ・階段の状況を伝えて見積もりを取りましょう。実家の片付け全体を見据えるなら、運び出しの大変な大型品だけ先に業者へ頼み、小物の仕分けは家族で進めるという分担も現実的です。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは神戸でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏が中心のため、神戸は対応エリア外です。一方、ゴミ屋敷専門パートナーズは関東・東海・関西対応で神戸から依頼できます。本記事では、神戸から利用できることを確認できたサービスのみを紹介しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。坂や階段のある家では、この「自分で指定場所まで運ぶ」ことが最大のハードルになります。自力で運べる少量は自治体、運び出せない大型品や大量の処分は業者への依頼が向いています。申し込み方法や対象品目は神戸市など自治体ごとに異なるため、お住まいの市区町村の案内をご確認ください。",
  },
  {
    q: "近所に知られずにゴミ屋敷を片付けてもらえますか？",
    a: "ゴミ屋敷専門パートナーズのように、プライバシーに配慮した対応を掲げる業者があります。見通しのよい坂の上の住宅地では作業が目立ちやすいこともあるため、作業時間帯の調整や車両・服装の配慮がどこまで可能かを、見積もり相談の際に具体的に伝えて確認するのがおすすめです。対応範囲は業者・状況により異なります。",
  },
];

function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      {num}｜{children}
    </h2>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 font-bold text-text-primary mt-7 mb-3">
      <span className="w-1.5 h-5 rounded-full bg-primary inline-block" />
      {children}
    </h4>
  );
}

export default function AreaKobePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "神戸でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
    image: `${SITE}/images/hero-final.png`,
    datePublished: `${UPDATED_ISO}T00:00:00+09:00`,
    dateModified: `${UPDATED_ISO}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "片付けレスキュー編集部", url: SITE },
    publisher: { "@type": "Organization", name: "片付けレスキュー", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "片付けレスキュー", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#kobe5",
      label: "1｜神戸のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "神戸から利用できる片付け・回収サービス6社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kobe-jijo", label: "2｜神戸で片付け業者の利用を検討する場面" },
    { href: "#takadai", label: "3｜坂・高台の住宅地は「小運搬・階段搬出」の段取りが決め手" },
    { href: "#jikka", label: "4｜高台の実家は大型家財から計画的に減らす" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜神戸の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "神戸の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED}</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>

        {/* PR表記（サイト既存パターン） */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-500 mb-5">
          本記事はアフィリエイト広告（PR）を含みます。掲載業者から報酬を受け取る場合がありますが、掲載内容・順序は編集部が独自に決定しています。
        </div>

        {/* タグchips */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {["神戸", "ゴミ屋敷片付け", "不用品回収", "高台・実家片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「坂の上の実家に大型の家具が残ったまま」「家の前まで車が入らないのに、量が多くて自分では運び出せない」「ゴミ屋敷状態の部屋を清掃までまとめて頼みたい」——神戸でこうした悩みを抱えたとき、どこに頼めばよいか迷う方は多いはずです。片付け・不用品回収の業者は、料金体系や対応範囲に加えて、坂道や階段を挟む搬出への対応力もそれぞれ異なるため、比較せずに選ぶと「当日に追加費用が発生した」「作業人数が足りず終わらなかった」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、神戸から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月12日時点）をもとに比較しました。坂・高台の住宅地で押さえておきたい小運搬・階段搬出の段取りや、高台の実家の家財を計画的に減らす考え方もまとめています。業者選びの参考にしてください。
        </p>
      </header>

      {/* Contents 目次 */}
      <nav aria-label="目次" className="my-10 rounded-2xl border border-border bg-surface-alt p-5 sm:p-6">
        <p className="font-bold text-primary mb-3">Contents</p>
        <ol className="space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-primary hover:underline font-medium">
                {item.label}
              </a>
              {item.sub && (
                <ol className="mt-2 space-y-2 pl-5">
                  {item.sub.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="text-primary hover:underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* 1｜おすすめ5社 */}
      <H2 id="kobe5" num="1">神戸のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        神戸から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月12日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・お助けうさぎは関東圏が中心の対応エリアのため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        神戸から利用できる片付け・回収サービス6社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        下で詳しく紹介する5社に加え、掲載業者ごとに対応エリアが異なる比較プラットフォームを含めた6社の一覧です。
      </p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">サービス名</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">対応エリア</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">料金目安</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">特徴</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((r, i) => (
              <tr key={r.slug} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border">
                  <Link href={`/review/${r.slug}/`} className="text-primary underline underline-offset-2">
                    {r.name}
                  </Link>
                </td>
                <td className="px-3 py-2.5 border-t border-border">{r.area}</td>
                <td className="px-3 py-2.5 border-t border-border">{r.price}</td>
                <td className="px-3 py-2.5 border-t border-border">{r.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-10">
        ※料金は当サイト掲載の目安（最低価格・幅）です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の詳しい口コミ・評判ページに移動できます。
      </p>

      {/* 各社カード */}
      {companies.map((c) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-20 mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-text-primary border-b-2 border-primary pb-2 mb-5">
            {c.num}｜【{c.catch}】{c.name}
          </h3>

          {c.image && (
            <a
              href={AFF[c.slug] ?? c.officialUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="block mb-5"
            >
              <img
                src={c.image}
                alt={c.imageAlt}
                width={1200}
                height={630}
                className="w-full rounded-2xl border border-border object-cover aspect-[1200/630]"
              />
            </a>
          )}

          {c.intro.map((p, i) => (
            <p key={i} className="text-[15px] leading-8 text-text-secondary mb-4">
              {p}
            </p>
          ))}

          <H4>こんな人におすすめ</H4>
          <ul className="rounded-2xl bg-surface-alt border border-border p-5 space-y-2">
            {c.recommend.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm leading-7 text-text-secondary">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <H4>料金・基本情報</H4>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {c.table.map((row, i) => (
                  <tr key={row.k} className={i % 2 ? "bg-surface-alt" : "bg-surface"}>
                    <th className="text-left align-top font-semibold text-text-primary px-4 py-3 w-32 whitespace-nowrap">
                      {row.k}
                    </th>
                    <td className="px-4 py-3 text-text-secondary leading-7">
                      <span className="font-bold text-text-primary">{row.v}</span>
                      {row.note && <span className="block text-xs text-text-muted mt-1">{row.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H4>編集部の一次確認メモ（2026年8月12日時点）</H4>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm leading-7 text-text-secondary">{c.memo}</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <a
              href={AFF[c.slug] ?? c.officialUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
            >
              {c.name} 公式サイト
            </a>
            <Link
              href={`/review/${c.slug}/`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors"
            >
              口コミ・評判を詳しく見る
            </Link>
          </div>
        </section>
      ))}

      {/* 2｜神戸の事情 */}
      <H2 id="kobe-jijo" num="2">神戸で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        神戸は海と山が近い地形の上に市街地が広がる街で、山手へ向かうほど坂や階段の多い住宅地が続きます。高台の住宅地には長く住み続けている世帯も多く、親の家の家財整理・生前整理・実家じまいといった相談が起こりやすい一方、市街地のマンション・アパートでは単身世帯の部屋の片付けやゴミ屋敷化した部屋の相談も発生します。同じ市内でも、立地によって片付けの段取りが大きく変わるのが神戸の特徴です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「量が多い」「家の前まで車が入らない」「自分で運び出せない」という状況では、搬出から処分（業者によっては清掃・消臭）までまとめて任せられる片付け業者が選択肢になります。逆に、自力で指定場所まで運べる少量の粗大ごみであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。神戸の場合、この「自力で運べるか」の判断に坂・階段という要素が大きく関わるため、まずは家から車までの距離と高低差を把握することから始めましょう。
      </p>

      {/* 3｜坂・高台の搬出 */}
      <H2 id="takadai" num="3">坂・高台の住宅地は「小運搬・階段搬出」の段取りが決め手</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高台の住宅地の片付けで費用と時間を左右するのは、部屋の中の物量だけでなく「家から車までの運び方」です。前面道路が狭い、傾斜がきつい、階段しかないといった立地では、大型トラックを離れた場所に停めて軽車両で往復する「小運搬」や、スタッフが階段を人力で往復する「階段搬出」が必要になることがあります。運ぶ距離・段数・往復回数が増えるほど作業人数と時間が必要になり、その分が費用に反映されるのが一般的です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        見積もりの精度を上げるには、「トラックを停められる場所から玄関までの距離」「坂・階段の有無とおおよその段数」「大型の家具・家電の品目とサイズ」を最初に伝えることが重要です。写真だけでは高低差が伝わりにくい場合もあるため、条件が複雑な家では現地見積もりを依頼し、搬出ルートと作業人数を業者と一緒に確認しておくと、当日の追加請求や作業の中断を防げます。狭い道での車両の停め方は近隣の通行にも関わるため、業者がどんな配慮をするかも確認しておきましょう。
      </p>

      {/* 4｜高台の実家 */}
      <H2 id="jikka" num="4">高台の実家は大型家財から計画的に減らす</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高台の住宅地にある実家の片付けは、家財の量が同じでも平地の家より搬出の負担が大きくなります。だからこそ、一度にまとめて片付けようとするのではなく、運び出しが大変な大型家財から計画的に減らしていく進め方が有効です。使わなくなった婚礼家具・ベッド・大型家電だけ先に業者へ依頼し、小物や書類の仕分けは家族のペースで進める、という分担なら、費用も労力も分散できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        親が元気なうちに進める生前整理は、「残す物を親自身が決められる」という点でも、将来の実家じまいの負担を減らすうえでも意味があります。何から手を付けるか迷ったら、まず大型家財のリストを作り、処分・譲渡・保留に分けるところから始めましょう。進め方の全体像は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理ガイド</Link>と<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家片付けガイド</Link>で詳しく解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        神戸市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ずお住まいの市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        坂や階段のある家では、「指定場所まで自分で運ぶ」ことが平地以上のハードルになります。自力で無理なく運べる少量は自治体、階段搬出が必要な大型品や大量の処分は業者、と使い分けるのが、費用と安全のバランスを取りやすい考え方です。無理に自分で運んでけがをしては本末転倒なので、大型品は業者への依頼を前向きに検討しましょう。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        神戸で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
      </p>
      <div className="space-y-5 mb-4">
        {steps.map((s, i) => (
          <div key={s.t}>
            <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
              <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.t}</span>
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.b}</p>
          </div>
        ))}
      </div>

      {/* 7｜FAQ */}
      <H2 id="faq" num="7">神戸の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜距離と高低差まで伝えて見積もりを比較しよう</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        神戸から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、ゴミ屋敷の片付けから清掃・消臭までまとめて頼むなら関西対応のゴミ屋敷専門パートナーズ、口コミと料金を見て地域の業者を自分で選ぶならくらしのマーケット、坂・階段の条件を相談しながら見積もりを比較するならミツモア、業者探しから手配まで任せたいなら生活110番と、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        神戸の片付けは、家から車までの距離と高低差という搬出条件をどれだけ正確に伝えられるかが見積もりの精度を決めます。小運搬・階段搬出の費用まで含めて複数の見積もりを比較し、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
      </p>

      {/* 他エリア */}
      <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
        <p className="font-bold text-text-primary mb-3">他エリアの業者比較</p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          <li>
            <Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/saitama/" className="text-primary underline underline-offset-2">さいたまのゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2">広島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2">北九州のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/okayama/" className="text-primary underline underline-offset-2">岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2">熊本のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/niigata/" className="text-primary underline underline-offset-2">新潟のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-10">
        <p className="text-sm text-text-secondary mb-4">全国の業者を総合評価で比較したい方、費用の目安を先に知りたい方はこちらもご覧ください。</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/ranking/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
          >
            片付け業者おすすめランキングを見る
          </Link>
          <Link
            href="/cost/price/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors"
          >
            片付け・回収の費用相場を見る
          </Link>
        </div>
      </div>

      <p className="text-xs text-text-muted">
        掲載情報は2026年8月12日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
