import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/utsunomiya/";
const UPDATED = "2026年8月16日";
const UPDATED_ISO = "2026-08-16";

export const metadata: Metadata = {
  title: "宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "宇都宮でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・ゴミ屋敷専門パートナーズ・くらしのマーケット・ミツモア・生活110番の料金目安と特徴、戸建ての物置・ガレージ・農作業用品まで含めた一括整理の段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "宇都宮でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。物置・ガレージ・農作業用品まで含めた一括整理の考え方も解説します。",
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
      "対応エリアは全国47都道府県で、宇都宮からも利用できます。相談・見積もりは無料です。敷地の広い戸建ての遺品整理・生前整理は、母屋だけでなく物置やガレージにも作業範囲が広がり、家財の総量が見えにくくなりがちです。屋外の建物まで含めた依頼内容を伝えたうえで、審査を通過した業者の見積もりを比較できるため、家全体をまとめて整理したいときの最初の相談先に向いています。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う戸建ての片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "物置・ガレージまで含めた見積もりを比較したい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（宇都宮対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料・全国対応の記載を確認しています（2026年8月16日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-2",
    catch: "ゴミ屋敷専門・最短到着60分",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社（大阪府大阪市）が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、ゴミ屋敷を「片付けたあと住める状態に戻す」ところまで一括で依頼できます。",
      "対応エリアは関東・東海・関西の各府県で、公式サイトの対応エリアに栃木県が含まれることを確認しています（2026年8月16日時点）。見積もりは無料で買取査定にも対応します。戸建てのゴミ屋敷は室内だけでなく物置やガレージ、敷地内にも物が広がっているケースがあり、片付けから清掃・消臭まで一括で任せたいときの候補になります。プライバシーへの配慮を重視する方の相談先としても候補になります。",
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
      { k: "対応エリア", v: "関東・東海・関西の各府県（栃木・宇都宮対応）" },
      { k: "運営会社", v: "TKC株式会社（大阪府大阪市）" },
    ],
    memo:
      "公式サイト（gomikaisyu-pro.com）で、対応エリアに栃木県が含まれることを確認しています（2026年8月16日時点）。「最短到着60分」の表記・見積もり無料・買取査定あり・料金目安は当サイトのレビューページ掲載値にもとづきます。ゴミ屋敷の片付け費用は物量で大きく変わるため、写真見積もりや訪問見積もりで総額を確定させてから依頼しましょう。",
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
      "対応エリアは日本全国で、宇都宮の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。「今回はガレージの不用品だけ」「次は物置の中身」というように、場所を区切って少しずつ整理を進めたい場合、その回の物量に合ったプランを都度選べるため、分割依頼と相性のよいサービスです。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "場所を区切って少しずつ片付けを進めたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月16日時点）。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。「室内のほかに物置とガレージがあり、タイヤや工具、農作業の道具も交ざっている」といった品目の事情をチャットで先に伝え、対応できる業者の見積もりだけを集めて比較できるのが強みです。回収可否が業者によって分かれやすい品目を含む依頼で、宇都宮の依頼先を効率よく絞り込みたい人に向いています。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "回収してほしい品目を伝えてから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（宇都宮対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、見積もり依頼無料の記載を確認しています（2026年8月16日時点）。最大5社の見積もり比較・チャット相談の仕組みは当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
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
      "受付は電話・LINEに対応しています。母屋・物置・ガレージと処分したい物が複数の場所に分かれていると、どのカテゴリの業者に頼めばよいかの判断から迷いがちです。まず電話やLINEで状況をまとめて伝え、対応できる業者の手配まで任せられるため、依頼内容の整理が付いていない段階の相談先に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "公式サイト（seikatsu110.jp）で、提携業者の無料紹介の記載を確認しています（2026年8月16日時点）。対応カテゴリの詳細は当サイトのレビューページ掲載値にもとづきます。紹介型サービスのため、地域・内容により手配できない場合があり、費用は紹介先業者の見積もりで必ず確認してください。",
  },
];

// 比較表（宇都宮から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西（栃木対応）", price: "5万円〜50万円", point: "ゴミ屋敷専門・消臭や害虫駆除まで対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
];

const steps = [
  {
    t: "① 母屋・物置・ガレージごとに処分品を書き出す",
    b: "敷地内に建物や置き場が複数ある戸建ての片付けは、場所ごとの内訳が分からないまま「全部で一式」と伝えても正確な見積もりになりません。母屋の各部屋・物置・ガレージ・軒下と場所を分けて処分品を書き出し、それぞれの写真を撮っておきましょう。ガレージはタイヤや工具など重量のある物が集まりやすいため、量だけでなく品目も書き添えておくと精度が上がります。",
  },
  {
    t: "② 回収可否が分かれやすい品目に印を付ける",
    b: "タイヤ・バッテリー・オイル類・塗料・農薬の残り・ガスボンベなどは、業者や自治体によって扱いが分かれやすい品目です。リストの中でこれらに印を付け、見積もりの段階で回収できるかを個別に確認しましょう。当日に「これは積めません」と残されてしまうと、その品目のためだけに別の手配が必要になり、二度手間になります。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。敷地内でトラックと家財が行き交う戸建ての作業では、搬出時の事故に備えた賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも確認ポイントになります。",
  },
  {
    t: "④ 敷地の条件を伝えて複数の見積もりを比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・搬出条件で変わります。敷地内にトラックを乗り入れられるか、ガレージから搬出口までの動線はどうかといった条件を伝えたうえで、みんなの遺品整理やミツモアの一括見積もりで複数社の金額と作業範囲を比較しましょう。総額と内訳に納得してから依頼を確定するのが失敗を防ぐ基本です。",
  },
];

const faqs = [
  {
    q: "宇都宮のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円が目安です。くらしのマーケット・ミツモア・生活110番は業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "ガレージに残ったタイヤ・バッテリー・オイル缶も回収してもらえますか？",
    a: "業者によって対応が分かれる品目です。タイヤやバッテリーは回収や買取に対応する業者がある一方、エンジンオイルや塗料など液体類は引き受けられないとする業者も多くあります。車社会の宇都宮ではガレージにカー用品がたまりがちなので、見積もりの際に品目を具体的に伝えて回収可否と料金を確認しましょう。回収できない品目は、自治体の案内や購入店・専門店への相談で処分方法を確認するのが基本です。",
  },
  {
    q: "家庭菜園や農作業で使っていた道具・肥料・農薬の残りはどうすればいいですか？",
    a: "くわ・スコップなどの道具類は多くの業者が回収に対応しますが、肥料や農薬の残りは一般の不用品回収では扱えないことが多い品目です。農薬は自治体の案内や購入した販売店・メーカーへの相談で処分方法を確認しましょう。噴霧器などの道具は、中身を使い切って洗浄した状態であれば回収できる場合もあるため、状態とあわせて見積もり時に伝えるのが確実です。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは宇都宮でも使えますか？",
    a: "編集部が公式サイトで確認した対応エリア（2026年8月16日時点）では、粗大ゴミ回収本舗は東京・神奈川・埼玉・千葉の4都県で栃木は対応エリア外、お部屋片付け日本一とブルークリーンも栃木の対応は確認できませんでした。一方、ゴミ屋敷専門パートナーズは対応エリアに栃木県が含まれることを確認できたため、本記事のカードで紹介しています。そのほかは宇都宮から利用できる全国対応・検索型のサービスを掲載しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。自力で運べる少量なら自治体、母屋・物置・ガレージを合わせた大量の処分や重量物は業者への依頼が向いています。申し込み方法や対象品目は宇都宮市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "物置やガレージ本体の解体・撤去まで頼めますか？",
    a: "中身の回収と本体の解体・撤去は別の作業として扱われるのが一般的で、対応可否は業者により分かれます。スチール物置の解体に対応する片付け業者もあれば、解体工事の業者を別に手配する必要がある場合もあるため、本体まで処分したい場合はその旨を見積もり時に明記して確認しましょう。解体前に中身を空にしておく段取りは、当サイトの物置解体前の整理ガイドでも解説しています。",
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

export default function AreaUtsunomiyaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "宇都宮でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#utsunomiya5",
      label: "1｜宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "宇都宮から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#utsunomiya-jijo", label: "2｜宇都宮で片付け業者の利用を検討する場面" },
    { href: "#ikkatsu-seiri", label: "3｜母屋・物置・ガレージは分けて把握し、まとめて依頼する" },
    { href: "#hinmoku-senbiki", label: "4｜タイヤ・工具・農作業用品は回収可否の線引きを確認する" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜宇都宮の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "宇都宮の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["宇都宮", "ゴミ屋敷片付け", "不用品回収", "物置・ガレージ整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「家の中だけでなく、物置とガレージにも処分したい物がたまっている」「使わなくなったタイヤや工具、農作業の道具まであって、どこに頼めばいいのか分からない」「部屋がゴミ屋敷状態になり自力では戻せない」——宇都宮でこうした悩みを抱えたとき、依頼先に迷う方は多いはずです。敷地内に物の置き場が複数ある戸建ての片付けは、場所ごとに品目の性質が違ううえ、業者によって回収できる範囲も異なるため、比較せずに選ぶと「ガレージの分は当日引き受けてもらえなかった」「思ったより高くついた」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、宇都宮から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。母屋・物置・ガレージを分けて把握してまとめて依頼する段取りと、タイヤ・工具・農作業用品のように回収可否が分かれる品目の確認ポイントもまとめています。業者選びの参考にしてください。
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
      <H2 id="utsunomiya5" num="1">宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        宇都宮から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗（東京・神奈川・埼玉・千葉）・ブルークリーン・お部屋片付け日本一は、栃木での対応が公式サイトで確認できなかったため本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        宇都宮から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        栃木対応を確認できた専門業者と全国対応の紹介・比較サービスを合わせた、宇都宮から利用できる5社の一覧です。
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

          <H4>編集部の一次確認メモ（2026年8月16日時点）</H4>
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

      {/* 2｜宇都宮の事情 */}
      <H2 id="utsunomiya-jijo" num="2">宇都宮で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        宇都宮は北関東を代表する都市でありながら、中心部を離れると敷地にゆとりのある戸建てが多く、車での移動が生活の前提になっている土地です。敷地が広い家では、母屋のほかに物置・ガレージ・軒下と物の置き場が分散しやすく、タイヤやカー用品、日曜大工の工具、家庭菜園や田畑を手伝っていた時期の農作業用品など、「家の中の不用品」とは性質の違う物が長年たまっていきます。親の家の整理やゴミ屋敷状態の解消となると、こうした屋外の物まで含めた総量が想像以上に膨らむのが特徴です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「場所ごとに物の種類がばらばらで、何をどこに頼めばいいか分からない」「重量のある物が多く自分では運び出せない」という状況では、搬出から処分までまとめて任せられる片付け業者・サービスが選択肢になります。逆に、自力で指定場所まで運べる少量の粗大ごみであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは母屋・物置・ガレージと場所を分けて処分品を書き出し、全体量を「見える化」することから始めましょう。
      </p>

      {/* 3｜一括整理 */}
      <H2 id="ikkatsu-seiri" num="3">母屋・物置・ガレージは分けて把握し、まとめて依頼する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        置き場が複数ある戸建ての片付けで効率的なのは、「把握は場所ごとに分け、依頼は一括でまとめる」という組み立てです。把握を分けるのは、場所ごとに品目の性質が違うからです。母屋は家具・家電・衣類が中心、物置は収納ケースや季節用品、ガレージはタイヤ・工具・オイル類と、同じ「不用品」でも扱いがまったく異なります。場所ごとにリストと写真を作っておけば、業者は品目に応じた車両・人員・処分ルートを見積もりに織り込めます。一方、依頼を一括にするのは、トラックと作業員が入る作業を一度で終えられれば、出張・車両のコストも家族の立ち会いの手間も1回で済むからです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        敷地内の動線も、見積もり時に伝えておきたい情報です。敷地にトラックを乗り入れられる家が多い宇都宮では、ガレージや物置の近くまで車両を寄せられれば搬出の手間が小さくなり、金額に反映されることもあります。逆に、母屋の裏手など車両が近づけない場所に重量物がある場合は、人力での運搬距離が費用に影響するため、配置図のメモや敷地の写真を添えると見積もりの精度が上がります。物置・ガレージ本体の解体まで視野に入れている場合の段取りは<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>で、大型の家具・家電の処分は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分ガイド</Link>で詳しく解説しています。
      </p>

      {/* 4｜品目の線引き */}
      <H2 id="hinmoku-senbiki" num="4">タイヤ・工具・農作業用品は回収可否の線引きを確認する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ガレージや物置の片付けで必ず確認しておきたいのが、回収できる物とできない物の線引きです。一般論として、タイヤやバッテリーは自治体の粗大ごみでは収集対象外とされることが多く、業者側でも対応が分かれます。エンジンオイル・塗料・農薬などの液体類やガスボンベ・消火器も、一般の不用品回収では扱えないことが多い品目です。一方、スチールラック・工具箱・くわやスコップなどの道具類は多くの業者が回収に対応します。「積んでもらえるつもりだった物が残った」という結果を避けるには、見積もりの段階で品目を具体的に伝え、回収可否を文字で残る形で確認しておくことが大切です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        回収対象外となった品目は、処分ルートを品目ごとに確認します。タイヤやバッテリーは購入店・専門店での引き取り、農薬や塗料は自治体の案内や販売店への相談が一般的な入口です。状態のよい工具や電動工具は買取の対象になることもあるため、処分と買取査定を組み合わせると費用を抑えられる場合があります。分別に迷う物が多いときは、当サイトの<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方ガイド</Link>も参考にしてください。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        宇都宮市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目やタイヤ・バッテリーのような処理困難物など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車で運べる環境があれば、自治体の処理施設への自己搬入という選択肢を設けている地域もあり、少量なら費用を抑えやすい方法です。一方、母屋・物置・ガレージを合わせた家一軒分の片付けでは、対象外品目の仕分けも含めて業者にまとめて任せる方が、結果として手間と時間の節約になることが多いでしょう。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        宇都宮で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">宇都宮の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜場所ごとの把握と品目の線引き確認が一括整理のカギ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        宇都宮から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、ゴミ屋敷の片付けから清掃・消臭までなら栃木対応を確認できたゴミ屋敷専門パートナーズ、場所を区切って進めるならくらしのマーケット、品目の事情を伝えて見積もりを比較するならミツモア、業者探しから手配まで任せるなら生活110番と、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        母屋・物置・ガレージと置き場が分かれる戸建ての片付けは、場所ごとに品目まで書き出して全体を見せることと、タイヤ・オイル類・農作業用品のような扱いの分かれる品目の回収可否を先に確認することが、見積もりの精度と当日の段取りを決めます。複数社の見積もりを比較し、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
            <Link href="/area/okayama/" className="text-primary underline underline-offset-2">岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
            <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2">鹿児島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/matsuyama/" className="text-primary underline underline-offset-2">松山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
        掲載情報は2026年8月16日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
