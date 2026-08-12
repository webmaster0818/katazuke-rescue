import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/tokyo/";
const UPDATED = "2026年8月12日";
const UPDATED_ISO = "2026-08-12";

export const metadata: Metadata = {
  title: "東京のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "東京でゴミ屋敷片付け・不用品回収・清掃を頼める業者5社を比較。みんなの遺品整理・粗大ゴミ回収本舗（定額パック9,800円〜・公式記載）・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズの料金目安と特徴、搬出経路が狭い都内物件の注意点や自治体粗大ごみとの使い分けまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "東京のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "東京でゴミ屋敷片付け・不用品回収を頼める業者5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。都内ならではの搬出・近隣配慮の注意点も解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/hero-final.png"],
  },
};

// アフィリエイトリンク（提携開始後にURLを設定。nullの間は公式サイトへ）
const AFF: Record<string, string | null> = {
  "minna-ihinseiri": null,
  "sodaigomi-honpo": null,
  "blue-clean": null,
  "kataduke-nihonichi": null,
  "gomiyashiki-partners": null,
  "kurashi-market": null,
  mitsumoa: null,
  seikatsu110: null,
  "sumai-hotline": null,
  "otasuke-usagi": null,
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
      "対応エリアは全国47都道府県で、東京を含む関東は登録業者が多いエリアです。相談・見積もりは無料のため、実家の片付けや遺品整理を伴うゴミ屋敷の整理で「どの業者が信頼できるか分からない」という東京の方の最初の相談先に向いています。",
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
      { k: "対応エリア", v: "全国47都道府県（東京対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料の記載を確認しています（2026年8月12日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "sodaigomi-honpo",
    num: "1-2",
    catch: "定額パック9,800円〜・最短30分",
    name: "粗大ゴミ回収本舗",
    officialUrl: "https://sodaigomi-kaishu.com/",
    image: "/images/hero-a.png",
    imageAlt: "粗大ゴミ回収本舗の紹介イメージ",
    intro: [
      "粗大ゴミ回収本舗は、株式会社ゴン（埼玉県戸田市）が運営する関東一円対応の不用品・粗大ゴミ回収業者です。S/M/L/LLの4段階のパックプランによる定額料金制（9,800円〜・公式記載）を採用しており、積載量ベースで料金の見当を付けやすいのが特徴です。",
      "不用品・粗大ゴミの回収のほか、ゴミ屋敷の大掃除・遺品整理・片付け代行にも対応します。最短30分での駆けつけと8:00〜24:00の受付を掲げており、東京・神奈川・埼玉・千葉の関東圏が対応エリアのため、都内からの依頼と相性のよい業者です。",
    ],
    recommend: [
      "単品〜トラック積み放題まで料金の目安を先に知りたい人",
      "引越し前などで急いで不用品を処分したい東京の人",
      "深夜近くまで受付している業者に相談したい人",
      "粗大ゴミの回収とあわせて部屋の片付けも頼みたい人",
    ],
    table: [
      { k: "料金", v: "定額パック9,800円〜（公式記載）", note: "S/M/L/LLのパックプラン制" },
      { k: "対応スピード", v: "最短30分", note: "受付は8:00〜24:00" },
      { k: "対応エリア", v: "関東一円（東京・神奈川・埼玉・千葉）" },
      { k: "運営会社", v: "株式会社ゴン（埼玉県戸田市）" },
      { k: "対応内容", v: "不用品・粗大ゴミ回収、ゴミ屋敷の大掃除、遺品整理、片付け代行" },
    ],
    memo:
      "公式サイト（sodaigomi-kaishu.com）でパックプランの定額料金制（9,800円〜）・最短30分・8:00〜24:00受付の記載を確認しています（2026年8月12日時点）。物量が多い場合はパックのサイズが上がるため、訪問見積もりで総額を確認してから依頼するのがおすすめです。",
  },
  {
    slug: "blue-clean",
    num: "1-3",
    catch: "特殊清掃まで一貫対応",
    name: "ブルークリーン",
    officialUrl: "https://b-clean.jp/",
    image: "/images/hero-b.png",
    imageAlt: "ブルークリーンの紹介イメージ",
    intro: [
      "ブルークリーンは、東京都大田区に本社を置くブルークリーン株式会社が運営する清掃・片付け業者です。孤独死・事故現場などの特殊清掃（清掃・消毒）を主力とし、遺品整理・残置物撤去から原状回復工事まで一貫して対応できるのが強みです。",
      "対応エリアは東京・千葉・埼玉・神奈川が中心で、相談無料・365日24時間対応・即日対応をうたっています。強い汚れや臭いを伴うゴミ屋敷、長期間放置された部屋など、通常の片付け業者では対応が難しいケースの相談先として候補になります。",
    ],
    recommend: [
      "汚れ・臭いが強い部屋の清掃までまとめて頼みたい人",
      "特殊清掃が必要な現場で業者を探している人",
      "退去に向けて原状回復まで相談したい人",
      "深夜・早朝でも受け付けている業者に相談したい人",
    ],
    table: [
      { k: "料金目安", v: "5万円〜100万円", note: "当サイト掲載の目安。特殊清掃の有無・作業範囲で大きく変動" },
      { k: "受付", v: "相談無料・365日24時間対応・即日対応をうたう" },
      { k: "対応エリア", v: "東京・千葉・埼玉・神奈川を中心" },
      { k: "運営会社", v: "ブルークリーン株式会社（東京都大田区）" },
      { k: "対応内容", v: "特殊清掃、ゴミ屋敷片付け、遺品整理、残置物撤去、原状回復工事" },
    ],
    memo:
      "公式サイト（b-clean.jp）で、特殊清掃を主力に遺品整理・原状回復まで一貫対応する旨と、相談無料・365日24時間対応の記載を確認しています（2026年8月12日時点）。特殊清掃を伴う作業は一般的な片付けより費用が高くなりやすいため、現地見積もりで作業範囲と総額の確認が必要です。",
  },
  {
    slug: "kataduke-nihonichi",
    num: "1-4",
    catch: "2006年設立・賠償保険完備",
    name: "お部屋片付け日本一",
    officialUrl: "https://kataduke-nihonichi.com/",
    image: "/images/hero-b.png",
    imageAlt: "お部屋片付け日本一の紹介イメージ",
    intro: [
      "お部屋片付け日本一は、株式会社アースアラウンド（2006年設立・東京都文京区）が運営する片付け業者です。ゴミ屋敷片付け・不用品回収・遺品整理・引越しに伴う片付けなどを一括で依頼でき、即日対応可・年中無休で受け付けています。",
      "産業廃棄物収集運搬業許可・古物商許可を持ち、最大1億円の賠償保険を完備している点は、マンションの共用部を通って搬出することが多い東京の依頼で安心材料になります。対応エリアは関東（東京・埼玉・千葉・神奈川・茨城）と東海・中部の一部です。",
    ],
    recommend: [
      "都内に拠点のある運営歴の長い業者に頼みたい人",
      "片付け・回収・遺品整理をまとめて依頼したい人",
      "搬出時の万一に備えて保険加入の業者を選びたい人",
      "即日で対応してほしい人",
    ],
    table: [
      { k: "料金目安", v: "1万円〜15万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "受付", v: "即日対応可・年中無休" },
      { k: "対応エリア", v: "関東（東京・埼玉・千葉・神奈川・茨城）、東海・中部の一部" },
      { k: "運営会社", v: "株式会社アースアラウンド（2006年設立・東京都文京区）" },
      { k: "許可・保険", v: "産業廃棄物収集運搬業許可・古物商許可、最大1億円の賠償保険完備" },
    ],
    memo:
      "公式サイト（kataduke-nihonichi.com）で、即日対応可・年中無休、産業廃棄物収集運搬業許可・古物商許可の保有、最大1億円の賠償保険完備の記載を確認しています（2026年8月12日時点）。繁忙期は希望日程が埋まりやすいため、日程に余裕を持った相談がおすすめです。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-5",
    catch: "ゴミ屋敷専門・最短到着60分",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、ゴミ屋敷を「片付けたあと住める状態に戻す」ところまで一括で依頼できます。",
      "公式サイトでは「業界最安値に挑戦」「最短到着60分」を掲げており、見積もりは無料で買取査定にも対応します。対応エリアは関東・東海・関西の各府県で、東京も対応範囲です。プライバシーへの配慮を重視する方の相談先としても候補になります。",
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
      { k: "対応エリア", v: "関東・東海・関西の各府県（東京対応）" },
      { k: "運営会社", v: "TKC株式会社（大阪府大阪市）" },
    ],
    memo:
      "公式サイト（gomikaisyu-pro.com）で「業界最安値に挑戦」「最短到着60分」の表記と、見積もり無料・買取査定ありの記載を確認しています（2026年8月12日時点）。ゴミ屋敷の片付け費用は物量で大きく変わるため、写真見積もりや訪問見積もりで総額を確定させてから依頼しましょう。",
  },
];

// 比較表（10社・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "sodaigomi-honpo", name: "粗大ゴミ回収本舗", area: "関東一円", price: "定額パック9,800円〜（公式記載）", point: "最短30分・8:00〜24:00受付" },
  { slug: "blue-clean", name: "ブルークリーン", area: "東京・千葉・埼玉・神奈川中心", price: "5万円〜100万円", point: "特殊清掃〜原状回復まで一貫対応" },
  { slug: "kataduke-nihonichi", name: "お部屋片付け日本一", area: "関東・東海/中部", price: "1万円〜15万円", point: "2006年設立・最大1億円の賠償保険完備" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西", price: "5万円〜50万円", point: "ゴミ屋敷専門・消臭や害虫駆除まで対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
  { slug: "otasuke-usagi", name: "お助けうさぎ", area: "首都圏中心の9都県", price: "3万円〜30万円", point: "回収・買取・清掃を一括対応" },
];

const steps = [
  {
    t: "① 片付けたい範囲と物量を整理する",
    b: "「不用品を数点回収してほしい」のか「部屋全体・家全体を片付けたい」のか、清掃や消臭まで必要なのかで、向いている業者と費用は大きく変わります。部屋の間取りと物の量が分かる写真を撮っておくと、電話やLINEでの見積もり精度が上がります。",
  },
  {
    t: "② 複数社から見積もりを取り、総額と内訳を確認する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。急ぎでなければ2〜3社から見積もりを取り、作業費・車両費・階段料金などの内訳と総額を比較しましょう。見積もり無料の業者なら、金額を見てから断ることもできます。",
  },
  {
    t: "③ 許可・保険・運営会社を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。また、搬出時に共用部や家財を傷つけた場合に備え、賠償保険の有無も確認ポイントです。運営会社名・所在地が明記されているかも信頼性の判断材料になります。",
  },
  {
    t: "④ 作業日・搬出条件を事前にすり合わせる",
    b: "エレベーターの有無、トラックを停められる場所、作業できる時間帯（マンションの規約や近隣への配慮）を事前に伝えておくと、当日の追加料金やトラブルを防げます。見積もり時に伝えた条件と請求内容が変わらないか、作業前に最終確認しましょう。",
  },
];

const faqs = [
  {
    q: "東京のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、不用品回収は粗大ゴミ回収本舗の定額パック9,800円〜（公式記載）など少量なら1万円前後から、部屋全体の片付けはお部屋片付け日本一で1万円〜15万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円、特殊清掃を伴う場合はブルークリーンで5万円〜100万円が目安です。実際の金額は物量・間取り・搬出条件で変わるため、必ず見積もりで総額を確認してください。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、申し込みから収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。急いで処分したい場合、量が多い場合、大型家具を自分で運び出せない場合は、搬出から任せられる業者への依頼が選択肢になります。収集の申し込み方法や対象品目は自治体ごとに異なるため、お住まいの区市町村の案内をご確認ください。",
  },
  {
    q: "エレベーターのない物件やワンルームでも依頼できますか？",
    a: "本記事で紹介した各社は、部屋の広さを問わず片付け・回収に対応しています。ただし、エレベーターなしの上層階や搬出経路が狭い物件は作業の手間が増えるため、階段作業の料金が加算される場合があります。見積もりの段階で建物の階数・エレベーターの有無・道幅などの搬出条件を伝えておくと、当日の追加請求を防ぎやすくなります。",
  },
  {
    q: "近所に知られずにゴミ屋敷を片付けてもらえますか？",
    a: "ゴミ屋敷専門パートナーズのように、プライバシーに配慮した対応を掲げる業者があります。作業時間帯の調整や社名の入っていない車両での訪問など、どこまで配慮してもらえるかは業者・状況により異なるため、見積もり相談の際に「近隣に知られたくない」という希望を具体的に伝えて、対応可否を確認するのがおすすめです。",
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

export default function AreaTokyoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "東京のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "東京でゴミ屋敷片付け・不用品回収・清掃を頼める業者5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "東京のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#tokyo5",
      label: "1｜東京のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "東京で使える片付け・回収サービス10社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#tokyo-jijo", label: "2｜東京で片付け業者の利用を検討する場面" },
    { href: "#hanshutsu", label: "3｜搬出経路が狭い都内物件で見積もり前に伝えること" },
    { href: "#kinjo", label: "4｜近隣への配慮とプライバシー" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜東京の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "東京の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          東京のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["東京", "ゴミ屋敷片付け", "不用品回収", "清掃", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「部屋がゴミ屋敷状態になってしまい自力では戻せない」「引越しまでに大量の不用品を処分したい」——東京でこうした悩みを抱えたとき、どの業者に頼めばよいか迷う方は多いはずです。片付け・不用品回収の業者は、料金体系や対応範囲（回収のみか、清掃・消臭まで対応するか）、対応エリアがそれぞれ異なるため、比較せずに選ぶと「思ったより高くついた」「頼みたい作業に対応していなかった」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、東京から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月12日時点）をもとに比較しました。搬出経路が狭い都内の物件で見積もり前に伝えるべきことや、自治体の粗大ごみ収集との使い分けの考え方もまとめています。業者選びの参考にしてください。
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
      <H2 id="tokyo5" num="1">東京のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        東京から依頼できる片付け・不用品回収業者のうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月12日時点）にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        東京で使える片付け・回収サービス10社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        下で詳しく紹介する5社に加え、口コミや一括見積もりで地域の業者を探せる比較サービスを含めた10社の一覧です。
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

      {/* 2｜東京の事情 */}
      <H2 id="tokyo-jijo" num="2">東京で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        東京は単身世帯やワンルーム・1Kなどのコンパクトな住まいが多いエリアです。一人暮らしで仕事が忙しいと片付けが後回しになりやすく、「気づいたら物があふれて自力では戻せない」という相談は珍しくありません。また、転勤・住み替えなどの引越しに伴い、短期間で大量の不用品を処分しなければならない場面も、人の移動が多い東京では起こりがちです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        こうした「量が多い」「期限がある」「自分で運び出せない」という状況では、搬出から処分（業者によっては清掃・消臭）までまとめて任せられる片付け業者が選択肢になります。逆に、少量の粗大ごみを急がず処分するだけであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは自分の状況がどちらに近いかを整理しましょう。
      </p>

      {/* 3｜搬出経路 */}
      <H2 id="hanshutsu" num="3">搬出経路が狭い都内物件では見積もり前に条件を伝える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        都内の住宅で片付け・回収を依頼する際に見落としがちなのが搬出経路です。エレベーターのないアパート・マンションの上層階、廊下や階段が狭い物件、前面道路が狭くトラックを近くに停められない立地では、スタッフが家具・家電を人力で運ぶ距離や手間が増えるため、階段作業などの追加料金が設定されている場合があります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「見積もりより高くなった」というトラブルの一因はここにあります。見積もりを依頼する時点で、建物の階数、エレベーターの有無、部屋から道路までの経路、車を停められる場所を具体的に伝えておけば、条件込みの金額を最初から提示してもらえます。写真を送れる業者なら、部屋の様子とあわせて建物の入口や階段の写真も送っておくと確実です。
      </p>

      {/* 4｜近隣配慮 */}
      <H2 id="kinjo" num="4">近隣への配慮とプライバシーも業者選びのポイント</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        住宅が密集し、集合住宅の多い東京では、作業中の音や共用部の使い方が近隣トラブルにつながることがあります。マンションによっては、引越しや大型搬出の際に管理組合・管理会社への事前届け出や養生が必要な場合もあるため、規約を確認したうえで、業者にも「共用部の養生をしてほしい」「作業時間帯を昼間にしてほしい」といった希望を伝えておきましょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ゴミ屋敷の片付けでは「近所に知られたくない」という悩みもよく聞かれます。今回紹介した中では、ゴミ屋敷専門パートナーズがプライバシーに配慮した対応を掲げています。どの業者に頼む場合でも、作業時間帯の調整や車両・服装の配慮がどこまで可能かは状況により異なるため、見積もり相談の際に希望を具体的に伝えて確認するのがおすすめです。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        東京の区市町村には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ずお住まいの区市町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、「引越しが迫っていて収集日を待てない」「量が多く自分で運び出せない」「部屋全体の片付けや清掃もあわせて頼みたい」という場合は、業者への依頼が向いています。少量は自治体、運び出せない大型品や急ぎ・大量の処分は業者、と使い分けるのが費用と手間のバランスを取りやすい考え方です。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        片付け・不用品回収の業者選びで後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">東京の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜目的に合わせて業者を使い分けよう</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        東京から依頼できるゴミ屋敷片付け・不用品回収業者5社を紹介しました。遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、不用品・粗大ゴミの処分なら定額パックの粗大ゴミ回収本舗、汚れ・臭いが強い部屋や特殊清掃が必要ならブルークリーン、片付け全般をまとめて頼むならお部屋片付け日本一、ゴミ屋敷に特化した業者を選ぶならゴミ屋敷専門パートナーズと、目的によって向いている業者は変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        どの業者を選ぶ場合も、搬出条件まで伝えたうえで複数社の見積もりを比較し、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った業者を選んでください。
      </p>

      {/* 他エリア */}
      <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
        <p className="font-bold text-text-primary mb-3">他エリアの業者比較</p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
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
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
