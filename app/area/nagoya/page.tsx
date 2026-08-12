import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/nagoya/";
const UPDATED = "2026年8月12日";
const UPDATED_ISO = "2026-08-12";

export const metadata: Metadata = {
  title: "名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "名古屋でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・ゴミ屋敷専門パートナーズ・くらしのマーケット・ミツモア・生活110番（運営会社は名古屋市）の料金目安と特徴、実家・親の家の片付けや倉庫・物置の整理の進め方まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "名古屋でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。実家・親の家の片付けや倉庫・物置の整理の注意点も解説します。",
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
  "kataduke-nihonichi": null,
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
      "対応エリアは全国47都道府県で、名古屋からも利用できます。相談・見積もりは無料です。親の家の片付けや遺品整理・生前整理のように「家一軒分の家財をどう整理すればいいか分からない」という名古屋の方が、信頼できる業者を探す最初の窓口に向いています。",
    ],
    recommend: [
      "実家の片付け・遺品整理・生前整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "複数社の見積もりを比較してから決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（名古屋対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料の記載を確認しています（2026年8月12日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-2",
    catch: "ゴミ屋敷専門・東海エリア対応",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社（大阪府大阪市）が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、ゴミ屋敷を「片付けたあと住める状態に戻す」ところまで一括で依頼できます。",
      "対応エリアは関東・東海・関西の各府県で、名古屋を含む東海エリアも対応範囲です。公式サイトでは「業界最安値に挑戦」「最短到着60分」を掲げており、見積もりは無料で買取査定にも対応します。近所に知られたくないというプライバシー面の配慮を重視する方の相談先としても候補になります。",
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
      { k: "対応エリア", v: "関東・東海・関西の各府県（名古屋対応）" },
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
      "対応エリアは日本全国で、名古屋の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。物置の整理や庭先の不用品回収のような部分的な依頼から探しやすいのも、マーケットプレイス型の利点です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "物置の整理など部分的な依頼から頼みたい人",
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
      "対応エリアは全国47都道府県です。実家一軒分の片付けのように物量が多く費用の幅が出やすい依頼こそ、複数社の見積もりを並べて比較する意味が大きくなります。名古屋で相場観をつかんでから業者を決めたい人に向いています。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "実家の片付けなど物量の多い依頼で相場を知りたい人",
      "チャットで作業内容を相談してから決めたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（名古屋対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、最大5件の見積もり比較・見積もり依頼無料・チャット相談の仕組みを確認しています（2026年8月12日時点）。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
  },
  {
    slug: "seikatsu110",
    num: "1-5",
    catch: "運営会社は名古屋・無料で業者紹介",
    name: "生活110番",
    officialUrl: "https://www.seikatsu110.jp/",
    image: "/images/hero-b.png",
    imageAlt: "生活110番の紹介イメージ",
    intro: [
      "生活110番は、東証グロース上場のシェアリングテクノロジー株式会社が運営する、暮らしのお困りごとの業者紹介プラットフォームです。本社は愛知県名古屋市中村区（JPタワー名古屋）にあります。不用品回収・ゴミ屋敷・遺品整理を含む多数のカテゴリで、希望地域に対応できる提携専門業者を無料で紹介・手配します。",
      "受付は電話・LINEに対応しています。自分で業者を一社ずつ探して回るのが難しいときに、まず相談して手配まで任せたい人に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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

// 比較表（名古屋から利用できる・検討できるサービス。料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西", price: "5万円〜50万円", point: "ゴミ屋敷専門・消臭や害虫駆除まで対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配。運営会社は名古屋" },
  { slug: "kataduke-nihonichi", name: "お部屋片付け日本一", area: "関東、東海・中部の一部", price: "1万円〜15万円", point: "名古屋の対応可否は見積もり時に要確認" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 片付ける家・範囲と残す物を先に決める",
    b: "実家まるごとの片付けでは「全部処分」ではなく、貴重品・思い出の品・使う家具を残して仕分けるのが普通です。どの部屋を対象にするか、残す物の基準を家族で決めてから見積もりを取ると、作業当日の迷いと追加費用を減らせます。倉庫・物置だけ、といった部分依頼から始めるのも一つの方法です。",
  },
  {
    t: "② 複数の見積もりで総額と内訳を比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。家一軒分のように物量の多い依頼ほど見積もり金額の差が出やすいため、みんなの遺品整理やミツモアの一括見積もりを使って2〜3社以上を比較し、作業費・車両費・処分費の内訳を確認しましょう。",
  },
  {
    t: "③ 許可・保険・買取対応を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。搬出時の破損に備えた賠償保険・補償制度の有無も確認ポイントです。また、実家の片付けでは家具・家電・骨董品など買取対象になり得る品が出やすいため、買取査定に対応する業者なら費用を抑えられる可能性があります。",
  },
  {
    t: "④ 作業日・立ち会い・搬出条件をすり合わせる",
    b: "駐車スペースの位置、搬出経路、作業時間帯に加えて、実家の片付けでは誰が立ち会うか・仕分けの判断を誰がするかも事前に決めておきましょう。遠方に住んでいて立ち会いが難しい場合の対応（写真報告など）が可能かも、見積もり時に確認しておくと安心です。",
  },
];

const faqs = [
  {
    q: "名古屋のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円が目安です。くらしのマーケット・ミツモア・生活110番は業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "名古屋の実家（親の家）をまるごと片付けたい場合、どう進めればいいですか？",
    a: "まず貴重品・書類・思い出の品など残す物の基準を家族で決め、そのうえで業者の見積もりを取るのが基本の順序です。遺品整理・生前整理を伴うなら、審査済み業者を最大3社比較できるみんなの遺品整理が相談先の候補になります。一戸建てはマンションより物量が多くなりがちで費用の幅も出やすいため、複数社の訪問見積もりで総額を比較してから依頼しましょう。",
  },
  {
    q: "倉庫や物置だけの整理でも頼めますか？",
    a: "依頼できます。くらしのマーケットやミツモアでは不用品回収・片付けの範囲を指定して依頼でき、物置の中身の回収のような部分的な作業も相談可能です。長年使っていない倉庫・物置は、工具・タイヤ・古い家電など処分方法が分かれる品が出やすいため、見積もり時に中身の写真を送って回収可否と費用を確認しておくとスムーズです。",
  },
  {
    q: "東京版で紹介されていたお部屋片付け日本一や粗大ゴミ回収本舗は名古屋でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お助けうさぎも関東圏中心のため、名古屋は対応エリア外です。お部屋片付け日本一は関東に加えて東海・中部の一部に対応するとしていますが、名古屋の住所が対応範囲かは公表情報だけでは確定できないため、利用したい場合は見積もり時に直接確認してください。本記事のカードには、名古屋対応を確認できたサービスのみを掲載しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。少量を急がず処分するなら自治体、量が多い・自分で運び出せない・期限があるという場合は業者への依頼が向いています。申し込み方法や対象品目は名古屋市など自治体ごとに異なるため、お住まいの市区町村の案内をご確認ください。",
  },
  {
    q: "近所に知られずにゴミ屋敷を片付けてもらえますか？",
    a: "ゴミ屋敷専門パートナーズのように、プライバシーに配慮した対応を掲げる業者があります。作業時間帯の調整や車両・服装の配慮がどこまで可能かは業者・状況により異なるため、見積もり相談の際に「近隣に知られたくない」という希望を具体的に伝えて、対応可否を確認するのがおすすめです。",
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

export default function AreaNagoyaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "名古屋でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#nagoya5",
      label: "1｜名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "名古屋で検討できる片付け・回収サービス7社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#nagoya-jijo", label: "2｜名古屋で片付け業者の利用を検討する場面" },
    { href: "#jikka", label: "3｜実家・親の家の片付けは「残す物」を決めてから" },
    { href: "#souko", label: "4｜倉庫・物置の整理を頼むときのポイント" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜名古屋の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "名古屋の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["名古屋", "ゴミ屋敷片付け", "不用品回収", "実家の片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「親の家に家財がたまり、どこから手を付ければいいか分からない」「使っていない倉庫・物置の中身をまとめて処分したい」「部屋がゴミ屋敷状態になってしまった」——名古屋でこうした悩みを抱えたとき、どこに頼めばよいか迷う方は多いはずです。片付け・不用品回収の業者は、料金体系や対応範囲（回収のみか、清掃・買取まで対応するか）、対応エリアがそれぞれ異なるため、比較せずに選ぶと「思ったより高くついた」「頼みたい作業に対応していなかった」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、名古屋から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月12日時点）をもとに比較しました。実家・親の家の片付けの進め方や、倉庫・物置の整理を頼むときのポイントもまとめています。業者選びの参考にしてください。
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
      <H2 id="nagoya5" num="1">名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        名古屋から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月12日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お助けうさぎは関東圏が中心の対応エリアのため、本記事のカードには含めていません（お部屋片付け日本一は東海・中部の一部対応のため、比較表で注記しています）。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        名古屋で検討できる片付け・回収サービス7社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        下で詳しく紹介する5社に加え、対応可否の確認をおすすめするサービス・比較プラットフォームを含めた7社の一覧です。
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

      {/* 2｜名古屋の事情 */}
      <H2 id="nagoya-jijo" num="2">名古屋で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        名古屋とその近郊は一戸建ての住まいも多く、「親の家・実家の片付け」が片付け相談の大きなテーマになりやすいエリアです。一戸建てはマンションに比べて収納や部屋数が多く、庭・物置・車庫といった屋外の収納スペースまで含めると、長年の暮らしで物がたまりやすい構造といえます。また、車移動が中心の生活では大きな買い物や持ち帰りがしやすい分、使わなくなった物が家に残りがちという一般的な傾向も指摘されます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        こうした背景から、名古屋では「実家をまるごと片付けたい」「倉庫・物置の中身を処分したい」といった物量の多い依頼が発生しやすく、搬出から処分・買取までまとめて任せられる業者の出番になります。一方、少量の粗大ごみを急がず処分するだけであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは物量と期限を整理して、どちらが向いているかを判断しましょう。
      </p>

      {/* 3｜実家の片付け */}
      <H2 id="jikka" num="3">実家・親の家の片付けは「残す物」を決めてから</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        実家・親の家の片付けが通常の不用品回収と違うのは、「全部捨てる」わけではない点です。権利証・通帳・印鑑などの貴重品、写真や手紙といった思い出の品、今後も使う家具家電を残し、それ以外を処分するという仕分けの作業が中心になります。業者に依頼する前に、残す物の基準を家族で共有しておくと、作業当日の判断がスムーズになり、誤って大切な物を処分してしまうリスクも減らせます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遺品整理・生前整理として進める場合は、貴重品の捜索や供養への対応など、遺品整理に慣れた業者を選ぶと安心です。今回紹介した中では、審査済みの遺品整理業者を最大3社比較できるみんなの遺品整理が入り口として使いやすい選択肢です。遠方から名古屋の実家を片付けるケースでは、立ち会いの日程調整が難しいこともあるため、見積もり時に立ち会いの要否や作業報告の方法もあわせて確認しておきましょう。実家の片付けの進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けガイド</Link>でも詳しく解説しています。
      </p>

      {/* 4｜倉庫・物置 */}
      <H2 id="souko" num="4">倉庫・物置の整理を頼むときのポイント</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一戸建てに多い倉庫・物置・車庫の整理は、部屋の片付けとはまた違った注意点があります。長年開けていない物置からは、工具・タイヤ・農具・古い家電・塗料など、処分方法が品目ごとに分かれる物が出てきがちです。業者に依頼する場合は、中身の写真を撮って見積もり時に共有し、回収できる品目とできない品目、処分費の内訳を確認しておくと当日のトラブルを防げます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        屋外の構造物である物置は、中身だけでなく物置本体の解体・撤去まで頼みたいケースもあります。本体の撤去に対応するかは業者によって異なるため、希望する場合は最初に伝えましょう。くらしのマーケットやミツモアのようなサービスなら、「物置の中身の回収」「物置の解体」といった作業内容から対応業者を探せるため、部分的な依頼とも相性がよい方法です。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        名古屋市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ずお住まいの市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、「実家一軒分など量が多い」「重い物を自分で運び出せない」「片付け・清掃・買取もあわせて頼みたい」という場合は、業者への依頼が向いています。少量は自治体、運び出せない大型品や大量の処分は業者、と使い分けるのが費用と手間のバランスを取りやすい考え方です。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        名古屋で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">名古屋の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜物量の多い名古屋の片付けは比較が肝心</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        名古屋から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。実家の片付けや遺品整理なら審査済み業者を比較できるみんなの遺品整理、ゴミ屋敷の片付けから清掃・消臭までまとめて頼むならゴミ屋敷専門パートナーズ、口コミと料金で地域の業者を選ぶならくらしのマーケット、複数見積もりで相場をつかむならミツモア、業者探しから手配まで任せるなら名古屋に本社を置くシェアリングテクノロジー運営の生活110番と、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        実家一軒分や倉庫・物置まで含む依頼は物量が多く、見積もり金額の差も出やすくなります。残す物の基準を決め、複数社の見積もりで総額と内訳を比較してから依頼することが、失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
