import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/okayama/";
const UPDATED = "2026年8月13日";
const UPDATED_ISO = "2026-08-13";

export const metadata: Metadata = {
  title: "岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "岡山でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、庭・物置まで含めた戸建ての一括整理と農機具など大型物の扱いまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "岡山でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。庭・物置を含む戸建ての一括整理と農機具など大型物の依頼の考え方も解説します。",
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
      "対応エリアは全国47都道府県で、岡山からも利用できます。相談・見積もりは無料です。庭や物置のある戸建ての遺品整理は、屋内の家財に加えて屋外の物まで作業範囲が広がりやすく、業者によって対応の幅が異なります。屋外まで含めた依頼内容を伝えたうえで、審査を通過した業者の見積もりを比較して選べるため、家全体をまとめて整理したいときの最初の相談先に向いています。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う戸建ての片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "複数社の見積もりを比較してから決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（岡山対応）" },
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
      "対応エリアは日本全国で、岡山の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。不用品回収のほかに草刈り・伐採・庭の手入れといった屋外系のカテゴリもそろっているため、戸建ての「家の中」と「庭まわり」の作業を、それぞれ得意な業者に分けて頼む使い方もできます。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "庭まわりの作業も組み合わせて探したい人",
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
      "対応エリアは全国47都道府県です。「物置の中身ごと処分したい」「古い耕運機があるが対応できるか」といった品目レベルの相談を、チャットで先に伝えたうえで、対応できる業者の見積もりだけを集めて比較できるのが強みです。屋外の大型物は対応の可否が業者によって分かれやすいため、岡山の戸建ての一括整理で依頼先を絞り込みたい人に向いています。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "大型物や屋外品の対応可否を確認してから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（岡山対応）" },
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
      "受付は電話・LINEに対応しています。戸建ての整理では、不用品回収だけでなく庭木の手入れや害虫対策など、家まわりの困りごとが同時に見つかることも珍しくありません。カテゴリの幅が広い紹介プラットフォームなので、家全体の困りごとを一度の相談窓口でまとめて手配したいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "不用品回収と家まわりの困りごとをまとめて相談したい人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、岡山で利用する場合は、岡山に対応する業者をサイト内で検索して選ぶ使い方になります。屋内の家財を運び出したあとの清掃や、住まい関連の作業をあわせて手配したいときに候補になるサービスで、戸建ての整理を「片付けて終わり」ではなく「次に使える状態」まで持っていきたい場面で役立ちます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "岡山対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月13日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（岡山から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 屋内・庭・物置に分けて全体の物量を書き出す",
    b: "戸建ての整理は、屋内の家財だけを見て依頼すると、あとから庭や物置の分が追加になり見積もりが膨らみがちです。最初に「屋内」「庭・外まわり」「物置・納屋」の3か所に分けて、大型の物と量をざっと書き出しましょう。物置は長年開けていないことも多いので、中身を写真に撮っておくと見積もり依頼のときにそのまま使えます。",
  },
  {
    t: "② 対応できない品目の線引きを先に確認する",
    b: "灯油・塗料・農薬などの危険物、土・石・ブロック、タイヤやバッテリーは、回収に対応しない業者があります。農機具や耕運機のような特殊な大型物も対応が分かれるところです。見積もりの段階で品目を具体的に伝え、「回収できる物・できない物」と、できない物の処分先の案内があるかを確認しておくと、作業当日に置き去りになる物を減らせます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。庭先や物置からの搬出は建物や塀を傷つける事故も起こり得るため、賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも確認しておきたいポイントです。",
  },
  {
    t: "④ 屋外分を含めた総額で複数の見積もりを比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。特に戸建ての一括整理は屋外分の扱いで金額差が出やすいため、屋内だけの金額ではなく、庭・物置まで含めた総額で複数社を比較しましょう。ミツモアの一括見積もりやくらしのマーケットの料金比較を使うと、同じ条件で並べて確認できます。",
  },
];

const faqs = [
  {
    q: "岡山のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "物置や納屋の中身ごと片付けてもらうことはできますか？",
    a: "物置・納屋の中身の整理に対応する業者は多くあります。ただし、古い灯油や塗料・農薬などの危険物、土・石・ブロックといった品目は回収対象外とする業者が多いため、中身を写真に撮って見積もり時に伝え、対応できる物とできない物の線引きを先に確認しましょう。対応外の物は自治体の案内や購入店・専門の処理業者への相談が必要になる場合があります。物置本体の解体まで頼みたい場合は、その旨も最初に伝えると見積もりの手戻りがありません。",
  },
  {
    q: "使わなくなった耕運機や農機具も回収してもらえますか？",
    a: "農機具のような大型・特殊な品目は、対応できる業者とできない業者に分かれます。ミツモアやくらしのマーケットのような検索・見積もり型のサービスで、品目を具体的に伝えて対応可否を確認してから依頼先を絞るのが確実です。状態や年式によっては買取の対象になる場合もあるため、処分費を払う前に査定の可否を聞いてみる価値はあります。燃料やバッテリーが残っている場合の扱いも、見積もり時に必ず確認しましょう。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは岡山でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心、ゴミ屋敷専門パートナーズは関東・東海・関西のため、いずれも岡山は対応エリア外です。本記事では、岡山から利用できる全国対応・検索型のサービスのみを紹介しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。自力で運べる少量なら自治体、家一軒分の家財や物置の中身のように量が多い場合、庭からの搬出に人手が要る場合は業者への依頼が向いています。申し込み方法や対象品目は岡山市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "庭木の伐採や庭石の処分も一緒に頼めますか？",
    a: "庭木の伐採・剪定は、くらしのマーケットのように専用カテゴリを持つサービスで対応業者を探せます。一方、庭石・土・ブロックは一般の不用品回収では対象外とされることが多い品目です。片付けと庭仕事は別の業者に分けて頼む前提で考え、それぞれの見積もりで対応範囲を確認するのが現実的です。生活110番のような紹介型サービスに家全体の状況を伝えて、まとめて相談する方法もあります。",
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

export default function AreaOkayamaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "岡山でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#okayama5",
      label: "1｜岡山のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "岡山から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#okayama-jijo", label: "2｜岡山で片付け業者の利用を検討する場面" },
    { href: "#ikkatsu", label: "3｜戸建ての整理は屋内・庭・物置の3か所で全体像をつかむ" },
    { href: "#oogata", label: "4｜農機具など屋外の大型物は「対応可否」と「買取可否」を確認" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜岡山の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "岡山の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["岡山", "ゴミ屋敷片付け", "不用品回収", "戸建て・物置の整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「家の中だけでなく、庭の物置や納屋の中身までまとめて片付けたい」「親が使っていた耕運機や農機具の処分先が分からない」「一人暮らしの部屋がゴミ屋敷状態になってしまった」——岡山でこうした悩みを抱えたとき、どこに頼めばよいか迷う方は多いはずです。片付け・不用品回収の業者は、料金体系に加えて、屋外の大型物や危険物への対応範囲がそれぞれ異なるため、比較せずに選ぶと「物置の中身は対象外と当日言われた」「思ったより高くついた」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、岡山から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月13日時点）をもとに比較しました。庭・物置を含めた戸建ての一括整理の進め方と、農機具のような大型物を依頼するときの確認ポイントもまとめています。業者選びの参考にしてください。
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
      <H2 id="okayama5" num="1">岡山のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        岡山から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月13日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは関東〜関西中心の対応エリアで岡山は対応外のため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        岡山から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、岡山から利用できる5社の一覧です。
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

      {/* 2｜岡山の事情 */}
      <H2 id="okayama-jijo" num="2">岡山で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        岡山は市街地を少し離れると庭・物置・納屋を備えた戸建てが目立つ住宅事情で、実家の整理となると「家の中の家財」に加えて「外にある物」まで作業範囲が広がりやすいのが特徴です。長年の暮らしで物置に収まった工具や園芸用品、使わなくなった自転車や古タイヤ、家庭菜園や農作業で使っていた道具類は、屋内の家具とは処分の勝手が異なり、家族だけで整理し切るのは骨の折れる作業になります。市街地のマンション・アパートでは、単身世帯の部屋の片付けやゴミ屋敷化した部屋の相談も発生します。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「家の中と外をまとめて一度に整理したい」「物置の中身ごと処分したい」「重くて自分では動かせない物がある」という状況では、搬出から処分までまとめて任せられる片付け業者・サービスが選択肢になります。逆に、自力で指定場所まで運べる少量の粗大ごみであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは屋内・庭・物置の3か所に分けて、全体の物量を把握することから始めましょう。
      </p>

      {/* 3｜戸建ての一括整理 */}
      <H2 id="ikkatsu" num="3">戸建ての整理は屋内・庭・物置の3か所で全体像をつかむ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        庭・物置のある戸建ての整理で失敗しやすいのは、屋内の家財だけで見積もりを取り、あとから「物置の中身もお願いしたい」と追加していくパターンです。追加のたびに金額が積み上がるうえ、危険物や対応外の品目が当日見つかると作業が止まってしまいます。最初から「屋内」「庭・外まわり」「物置・納屋」の3か所に分けて物量を書き出し、全体をまとめて見積もりに出すのが、総額を正しく比較する近道です。長年開けていない物置は中身の記憶が曖昧なことも多いため、扉を開けて中を写真に撮っておくと、見積もり依頼にそのまま使えます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        屋外の物には、一般の不用品回収では扱えない品目が交じりやすい点にも注意が必要です。古い灯油・塗料・農薬などの危険物、土・石・ブロック、タイヤやバッテリーは回収対象外とする業者が多く、それぞれ自治体の案内や購入店・専門の処理業者への相談が必要になる場合があります。「回収できる物・できない物」の線引きを見積もり段階で確認し、対応外の物の処分先まで見通しを立てておくと、作業当日に庭へ置き去りになる物を減らせます。物置そのものの解体・撤去を検討している場合は、<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>もあわせてご覧ください。
      </p>

      {/* 4｜大型物の扱い */}
      <H2 id="oogata" num="4">農機具など屋外の大型物は「対応可否」と「買取可否」を確認</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        耕運機や農機具、大型の物干し台、使わなくなった自転車やバイクといった屋外の大型物は、重量や構造が特殊なため、対応できる業者とできない業者がはっきり分かれる品目です。一般論として、こうした物は「運べるかどうか」だけでなく、燃料やバッテリー、オイルが残っているかどうかで扱いが変わります。見積もりの際は品名・サイズ・状態（動くかどうか、燃料の有無）を具体的に伝え、対応可否と追加費用の有無を先に確認しましょう。写真を添えて相談すれば、電話やチャットだけでも判断してもらいやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もうひとつ確認したいのが買取の可能性です。動く農機具や状態のよい工具類は、品目によっては買取の対象になる場合があり、処分費を払う前に査定を受けてみる価値があります。ただし、買取の可否や金額は品物の状態・年式・相場で変わるため、金額を当てにして計画を立てるのではなく、「値が付けば費用が下がる」くらいの位置づけで考えるのが現実的です。大型の家具・家電の処分方法の全体像は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分ガイド</Link>で詳しく解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        岡山市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目や、土・石・危険物のように粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        戸建ての一括整理では、屋内の家財に庭・物置の分が加わって物量が膨らみやすく、一点ずつ自治体の収集に出す方法では申し込みと搬出の手間が現実的でなくなりがちです。自力で運べる少量は自治体、家全体の整理や重量物・大型物の搬出は業者、と使い分けるのが費用と手間のバランスを取りやすい考え方です。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        岡山で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">岡山の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜屋外まで含めた全体見積もりが戸建て整理のカギ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        岡山から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、庭まわりの作業も組み合わせるならくらしのマーケット、大型物の対応可否を確認しながら見積もりを比較するならミツモア、業者探しから手配まで任せるなら生活110番、清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        庭・物置まで含めた戸建ての整理は、「3か所に分けた物量の把握」と「対応外品目の線引き確認」を先に済ませることが、追加費用と当日のトラブルを防ぐ段取りの軸になります。屋外分まで含めた総額で複数の見積もりを比較し、納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
            <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2">熊本のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/niigata/" className="text-primary underline underline-offset-2">新潟のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2">金沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/utsunomiya/" className="text-primary underline underline-offset-2">宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2">鹿児島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/matsuyama/" className="text-primary underline underline-offset-2">松山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/naha/" className="text-primary underline underline-offset-2">那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/takamatsu/" className="text-primary underline underline-offset-2">高松のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagano/" className="text-primary underline underline-offset-2">長野のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/gifu/" className="text-primary underline underline-offset-2">岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/maebashi/" className="text-primary underline underline-offset-2">前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選</Link>
          </li>
          <li>
            <Link href="/area/toyama/" className="text-primary underline underline-offset-2">富山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagasaki/" className="text-primary underline underline-offset-2">長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/wakayama/" className="text-primary underline underline-offset-2">和歌山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
                  <li>
            <Link href="/area/aomori/" className="text-primary underline underline-offset-2">青森のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/akita/" className="text-primary underline underline-offset-2">秋田のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kochi/" className="text-primary underline underline-offset-2">高知のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/saga/" className="text-primary underline underline-offset-2">佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
                  <li>
            <Link href="/area/yamagata/" className="text-primary underline underline-offset-2">山形のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukushima/" className="text-primary underline underline-offset-2">福島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/tokushima/" className="text-primary underline underline-offset-2">徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/matsue/" className="text-primary underline underline-offset-2">松江のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
