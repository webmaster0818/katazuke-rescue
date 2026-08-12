import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/shizuoka/";
const UPDATED = "2026年8月13日";
const UPDATED_ISO = "2026-08-13";

export const metadata: Metadata = {
  title: "静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "静岡でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、帰省に合わせた実家の片付けをきょうだいで分担して進める段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "静岡でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。帰省に合わせた実家の片付けと、きょうだいで分担する段取りも解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/hero-final.png"],
  },
};

// アフィリエイトリンク（提携開始後にURLを設定。nullの間は公式サイトへ）
const AFF: Record<string, string | null> = {
  "minna-ihinseiri": null,
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
      "対応エリアは全国47都道府県で、静岡からも利用できます。相談・見積もりは無料です。きょうだいそれぞれが別の土地に住んでいて、帰省のタイミングでしか実家の片付けを進められない場合、限られた滞在日数で依頼先まで決め切るのは簡単ではありません。審査を通過した業者の見積もりを一度に集めて家族で共有できるため、帰省前に候補を絞り込んでおく使い方に向いています。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う実家の片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "見積もりをきょうだい間で共有して決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（静岡対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料の記載を確認しています（2026年8月13日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "kurashi-market",
    num: "1-2",
    catch: "口コミと料金で地域の業者を選べる",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/hero-c.png",
    imageAlt: "くらしのマーケットの紹介イメージ",
    intro: [
      "くらしのマーケットは、みんなのマーケット株式会社（東京都港区）が運営する、暮らしの出張・訪問サービスのオンラインマーケットプレイスです。不用品回収・粗大ゴミ回収・片付け・ハウスクリーニングなどのカテゴリで、地域の登録業者を料金と口コミを見ながら比較し、そのままオンラインで予約できます。",
      "対応エリアは日本全国で、静岡の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。帰省のたびに少しずつ実家を片付けていく進め方なら、その回の物量に合ったプランを都度選び直せるため、「今回は台所まわりだけ」「次は2階の家具」といった分割依頼とも相性がよいサービスです。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "帰省のたびに少しずつ片付けを進めたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、料金の事前表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月13日時点）。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
  },
  {
    slug: "mitsumoa",
    num: "1-3",
    catch: "最大5社の見積もりを比較",
    name: "ミツモア",
    officialUrl: "https://meetsmore.com/",
    image: "/images/hero-a.png",
    imageAlt: "ミツモアの紹介イメージ",
    intro: [
      "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。不用品回収・片付け・遺品整理のカテゴリがあり、見積もり依頼は無料です。",
      "対応エリアは全国47都道府県です。「作業できるのはこの連休の2日間だけ」「立ち会いは長男、支払いの取りまとめは長女」といった家族側の条件も、チャットで先に伝えたうえで対応できる業者の見積もりだけを集めて比較できます。静岡の実家の片付けで、帰省前に金額と段取りを固めておきたい人に向いています。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "作業日や立ち会いの条件を相談してから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（静岡対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、最大5件の見積もり比較・見積もり依頼無料・チャット相談の仕組みを確認しています（2026年8月13日時点）。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
  },
  {
    slug: "seikatsu110",
    num: "1-4",
    catch: "提携業者を無料で紹介・手配",
    name: "生活110番",
    officialUrl: "https://www.seikatsu110.jp/",
    image: "/images/hero-b.png",
    imageAlt: "生活110番の紹介イメージ",
    intro: [
      "生活110番は、東証グロース上場のシェアリングテクノロジー株式会社（本社：愛知県名古屋市）が運営する、暮らしのお困りごとの業者紹介プラットフォームです。不用品回収・ゴミ屋敷・遺品整理を含む多数のカテゴリで、希望地域に対応できる提携専門業者を無料で紹介・手配します。",
      "受付は電話・LINEに対応しています。きょうだいの誰も静岡の実家の近くに住んでいない場合、業者探しの担当を決めても、地元の業者事情が分からず候補選びで止まりがちです。まず電話やLINEで状況を伝えて手配まで任せられるため、「探す係」の負担を軽くしたい家族に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "公式サイト（seikatsu110.jp）で、提携業者の無料紹介・手配の仕組みと、地域・内容により手配できない場合がある旨の記載を確認しています（2026年8月13日時点）。紹介型サービスのため、費用は紹介先業者の見積もりで必ず確認してください。",
  },
  {
    slug: "sumai-hotline",
    num: "1-5",
    catch: "住まいの出張サービスを検索・予約",
    name: "すまいのホットライン",
    officialUrl: "https://hotlines.shop/",
    image: "/images/hero-c.png",
    imageAlt: "すまいのホットラインの紹介イメージ",
    intro: [
      "すまいのホットラインは、株式会社ハイファイブ（大阪府大阪市）が運営する、暮らしの出張・訪問サービスのマーケットプレイスです。不用品回収・ハウスクリーニングなど住まい関連のサービスを検索し、料金を見ながらオンラインで予約できます。安心取引サポート保証制度が用意されている点も特徴です。",
      "対応エリア・料金は出店している掲載業者ごとに異なるため、静岡で利用する場合は、静岡に対応する業者をサイト内で検索して選ぶ使い方になります。実家の片付けの最終回に、家財の搬出と室内クリーニングをまとめて済ませて区切りを付けたいときなど、住まい関連の作業をあわせて探せるのが便利な場面です。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "静岡対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月13日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（静岡から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 帰省日程を先に確定し、そこから逆算して依頼を組む",
    b: "帰省に合わせて実家を片付ける場合、先に決めるべきは作業内容ではなく「家族がそろえる日」です。訪問見積もりと作業日を同じ滞在期間に収められるか、写真やオンラインの見積もりで金額を先に固めておけるかを業者に確認し、帰省初日に見積もり確定、後半に作業、という形で滞在日程に割り付けていくと、限られた日数でも前に進みます。",
  },
  {
    t: "② きょうだいの役割と費用の分担を先に合意しておく",
    b: "実家の片付けが止まる原因の多くは、作業量よりも「誰が決めるのか」が曖昧なことです。業者とやり取りする窓口役、当日の立ち会い役、費用の取りまとめ役をきょうだい間で先に決め、費用を誰がどう負担するかも見積もりを取る前に合意しておきましょう。決め事をメッセージなど記録の残る形で共有しておくと、後の行き違いを防げます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。搬出時の事故に備えた賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも、信頼できる依頼先を見分けるポイントになります。",
  },
  {
    t: "④ 複数の見積もりを家族全員で見て決める",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。みんなの遺品整理やミツモアの一括見積もりを使えば、複数社の金額と作業範囲を並べてきょうだい全員に共有できます。誰か一人の判断で決めず、総額と内訳を全員が見たうえで依頼先を確定すると、費用分担のもめごとを避けやすくなります。",
  },
];

const faqs = [
  {
    q: "静岡のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "帰省できるのは年に数回、数日ずつです。静岡の実家の片付けを進められますか？",
    a: "進められます。ポイントは、帰省中にやることを「家族にしかできない作業」に絞ることです。貴重品・重要書類の確保や形見の仕分けは帰省中に家族の手で行い、業者探し・見積もり収集・日程調整は帰省前にオンラインで済ませておきます。訪問見積もりと作業を同じ滞在期間に収められるか、仕分け済みなら立ち会いを短時間にできるかを業者に確認しておくと、1回の帰省で進む量が大きく変わります。",
  },
  {
    q: "きょうだいで費用を分担したいのですが、どう進めればもめませんか？",
    a: "見積もりを取る前に「誰がいくら負担するか」の決め方を合意しておくのが先決です。均等割りにするか、立ち会いなど労力を担う人の負担を減らすかは家族ごとの判断ですが、決め方だけは先に固めておきましょう。そのうえで、複数社の見積もりを全員が見られる形で共有し、総額に納得してから依頼を確定します。買取で相殺された金額や当日の追加費用の扱いも、支払い前に全員へ共有すると行き違いを防げます。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは静岡でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心のため、静岡は対応エリア外です。ゴミ屋敷専門パートナーズは関東・東海・関西対応と確認していますが、静岡の個別の対応可否までは当サイトでは確認できていません。本記事では、静岡から利用できる全国対応・検索型のサービスのみを紹介しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。帰省中の限られた日数で申し込みから収集日までを収めるのは難しいことが多いため、自力で運べる少量は帰省時に自治体へ、家一軒分や大型家具は業者へ、と使い分けるのが現実的です。申し込み方法や対象品目は静岡市など自治体ごとに異なるため、実家のある市区町村の案内をご確認ください。",
  },
  {
    q: "お盆や連休の帰省に合わせて作業してもらえますか？",
    a: "多くの業者は連休期間も営業していますが、帰省シーズンは同じように「帰省に合わせて頼みたい」という依頼が集中しやすい時期でもあります。希望日が決まっているなら、帰省日程が固まった時点で早めに見積もりを取り、作業日を押さえておきましょう。日程に余裕がない場合は、ミツモアのように条件を伝えて対応できる業者だけから見積もりを集められるサービスを使うと探す手間を減らせます。",
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

export default function AreaShizuokaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "静岡でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#shizuoka5",
      label: "1｜静岡のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "静岡から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#shizuoka-jijo", label: "2｜静岡で片付け業者の利用を検討する場面" },
    { href: "#kisei-keikaku", label: "3｜帰省に合わせた実家の片付けは「日程の割り付け」から" },
    { href: "#bundan", label: "4｜きょうだいでの分担は「窓口・立ち会い・記録」を決める" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜静岡の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "静岡の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["静岡", "ゴミ屋敷片付け", "不用品回収", "帰省での実家片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「実家の片付けを、帰省できる数日間でどこまで進めればいいのか分からない」「きょうだいそれぞれ別の土地に住んでいて、誰が何を担当するのか決まらないまま時間だけが過ぎている」「一人暮らしの部屋がゴミ屋敷状態になってしまった」——静岡でこうした悩みを抱えたとき、どこに頼めばよいか迷う方は多いはずです。片付け・不用品回収の業者は、料金体系や対応範囲に加えて、短い滞在日程への対応のしやすさもそれぞれ異なるため、比較せずに選ぶと「帰省中に作業日が取れなかった」「思ったより高くついた」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、静岡から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月13日時点）をもとに比較しました。帰省日程に作業を割り付ける計画の立て方と、きょうだいで役割と費用を分担して進める段取りもまとめています。業者選びの参考にしてください。
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
      <H2 id="shizuoka5" num="1">静岡のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        静岡から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月13日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは関東〜関西中心の対応エリアで、静岡での対応が確認できていないため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        静岡から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、静岡から利用できる5社の一覧です。
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
        ※料金は当サイト掲載の目安です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の詳しい口コミ・評判ページに移動できます。
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

          <H4>編集部の一次確認メモ（2026年8月13日時点）</H4>
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

      {/* 2｜静岡の事情 */}
      <H2 id="shizuoka-jijo" num="2">静岡で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        静岡は東海道沿いに市街地が連なり、進学や就職を機に東京方面・名古屋方面へ子世代が移り住む一方、親世代は住み慣れた家に暮らし続けるという家族の形が生まれやすい土地です。親の高齢化や施設への住み替えをきっかけに実家の片付けが必要になったとき、子世代は県外からの帰省に合わせて作業するしかなく、「連休の数日間で、どの部屋の何をどこまで進めるか」という計画の立て方そのものが最初の悩みになります。市街地のマンション・アパートでは、単身世帯の部屋の片付けやゴミ屋敷化した部屋の相談も発生します。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「家族だけでは運び出せない家具がある」「帰省のたびに少しずつ進めてきたが終わりが見えない」「きょうだいの予定が合わず作業がまとまらない」という状況では、搬出から処分までまとめて任せられる片付け業者・サービスを組み込むことで、家族の手を「仕分けと判断」に集中させられます。逆に、自力で指定場所まで運べる少量の粗大ごみであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは帰省日程と家族の分担を固めることから始めましょう。
      </p>

      {/* 3｜帰省に合わせた計画 */}
      <H2 id="kisei-keikaku" num="3">帰省に合わせた実家の片付けは「日程の割り付け」から</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        帰省に合わせて実家を片付ける場合、成否を分けるのは滞在中の頑張りではなく、帰省前の準備です。滞在日数が限られている以上、「帰省中にしかできないこと」と「帰省前に済ませられること」を切り分ける必要があります。業者探し・見積もり収集・作業日の予約・家族間の合意形成はすべてオンラインや電話で帰省前に済ませられる作業です。一方、貴重品や重要書類の確保、形見・思い出の品の仕分け、親との相談は家族が現地でやるべき作業です。帰省初日を見積もり確定に、中日を家族の仕分けに、後半を業者の作業日に、と滞在日程へ役割を割り付けておくと、数日の帰省でも目に見えて前へ進みます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一度の帰省で終わらせようとしないことも大切です。1回目は貴重品の確保と全体量の把握、2回目は仕分けと見積もり、3回目で搬出と清掃、というように複数回の帰省に工程を分けると、1回あたりの負担が現実的になります。親が存命で実家に住み続ける場合は、本人の意思を確認しながら進める生前整理の考え方が基本になります。進め方の全体像は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家片付けガイド</Link>と<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理ガイド</Link>で詳しく解説しています。
      </p>

      {/* 4｜きょうだい分担 */}
      <H2 id="bundan" num="4">きょうだいでの分担は「窓口・立ち会い・記録」を決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        きょうだいがそれぞれ別の土地に住んでいる場合、実家の片付けは「全員で一斉にやる作業」ではなく「役割を分けて回す作業」と考えると進めやすくなります。具体的には、業者とのやり取りを一本化する窓口役、帰省して現地対応する立ち会い役、決定事項と費用を記録して全員に共有する記録役の3つを決めるのが出発点です。窓口が複数いると業者への指示が食い違いやすく、記録がないと「聞いていない」という行き違いのもとになります。全員が同時に帰省できなくても、役割が決まっていれば作業は止まりません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もめごとを防ぐうえで特に大事なのが、費用と形見の扱いを先に合意しておくことです。費用は均等割りか、立ち会いの労力を考慮して調整するか、決め方を見積もり前に固めておきましょう。形見や思い出の品は、処分する前に写真を撮って共有し、希望者を確認してから手放すという手順にしておくと、後から「あれは残してほしかった」という後悔を減らせます。現地に行けないきょうだいには、仕分けの様子や見積もり内容を写真とメッセージで共有し、判断に参加できる状態を保つことが、分担を長続きさせるコツです。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        静岡市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず実家のある市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        帰省に合わせて片付ける場合、申し込みから収集日までの期間を数日の滞在に収めるのは難しいことが多く、収集日に立ち会える人が現地にいないという事情も生まれます。実家に親が住んでいて収集日に対応できるなら少量は自治体へ、家族だけで運べない大型家財や一度に量を出したい場面は業者へ、と使い分けるのが現実的です。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        静岡で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">静岡の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜帰省前の準備と家族の役割分担が片付けを前に進める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        静岡から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、帰省のたびに少しずつ進めるならくらしのマーケット、日程条件を伝えて見積もりを比較するならミツモア、業者探しから手配まで任せるなら生活110番、清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        帰省に合わせた実家の片付けは、「帰省前にオンラインで済ませる準備」と「きょうだいの役割・費用の合意」を先に固めることが、限られた滞在日数を最大限に生かすカギになります。複数の見積もりを家族全員で確認し、納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
        掲載情報は2026年8月13日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
