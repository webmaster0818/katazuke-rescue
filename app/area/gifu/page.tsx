import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/gifu/";
const UPDATED = "2026年8月16日";
const UPDATED_ISO = "2026-08-16";

export const metadata: Metadata = {
  title: "岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "岐阜でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、蔵や納屋のある広い戸建てをエリア分けと優先順位で段階的に片付けていく計画の立て方まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "岐阜でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。蔵や納屋のある広い戸建てを段階的に片付ける計画の立て方も解説します。",
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
      "対応エリアは全国47都道府県で、岐阜からも利用できます。相談・見積もりは無料です。部屋数の多い戸建てや、納屋・蔵まで含む家の遺品整理は、物量によって金額の振れ幅が特に大きくなる依頼です。審査を通過した業者から最大3社の見積もりを取り、金額だけでなく「どの範囲をどの順でやるか」の提案まで見比べられる仕組みは、物量の多い家ほど効果を発揮します。段階的に進めたい意向も相談の段階で伝えられます。",
    ],
    recommend: [
      "部屋数の多い家の遺品整理・生前整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "物量が多く、複数社の提案を見比べたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（岐阜対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料・全国対応の記載を確認しています（2026年8月16日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
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
      "対応エリアは日本全国で、岐阜の住所に対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。「今回は2階の2部屋だけ」「次は納屋の中身だけ」というように、広い家を区切って進める段階的な片付けでは、段階ごとの量に合ったプランを都度予約できるこのサービスの形が活きます。同じ業者に繰り返し頼めば、家の事情を分かったうえで進めてもらえる利点もあります。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "部屋や建物ごとに区切って段階的に頼みたい人",
      "オンラインで手配を完結させたい人",
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
    num: "1-3",
    catch: "最大5社の見積もりを比較",
    name: "ミツモア",
    officialUrl: "https://meetsmore.com/",
    image: "/images/hero-a.png",
    imageAlt: "ミツモアの紹介イメージ",
    intro: [
      "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。不用品回収・片付け・遺品整理のカテゴリがあり、見積もり依頼は無料です。",
      "対応エリアは全国47都道府県です。「まず母屋の2部屋、様子を見て納屋もお願いするかもしれない」といった段階的な計画をチャットで先に伝え、一括で頼んだ場合と分けて頼んだ場合の考え方まで含めて相談できるのが強みです。物量の多い家では業者ごとの見積もりの差も出やすいため、最大5社の金額と提案を並べて比較できる意味は大きくなります。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "段階的な計画を相談しながら決めたい人",
      "チャットで自分のペースでやり取りしたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（岐阜対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、見積もり依頼無料の記載を確認しています（2026年8月16日時点）。最大5社の見積もり比較・チャット相談の仕組みは当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
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
      "受付は電話・LINEに対応しています。母屋・納屋・蔵と物のある場所が分かれている家では、「そもそも何をどこに頼めばよいのか」の整理から難しいものです。家の構成と物の状況を電話で伝えて、対応できる提携業者の手配まで任せられるため、計画の立て方から迷っている段階の相談先として使えます。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "何をどこに頼むべきか整理がついていない人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、岐阜で利用する場合は、岐阜に対応する業者をサイト内で検索して選ぶ使い方になります。段階的な片付けでは、一区切りついた部屋から順に清掃まで済ませていくと、片付けの成果が目に見えて次の段階への意欲にもつながります。搬出とクリーニングを組み合わせて探せるのが、このサービスが役立つ場面です。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "岐阜対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月16日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（岐阜から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 家全体を「エリア地図」にして優先順位を付ける",
    b: "母屋の各部屋、物置、納屋、蔵、車庫——物のある場所をすべて書き出し、家全体を一枚の地図として眺めることから始めましょう。全体像が見えないまま手を付けると、進んでいる実感が持てずに挫折しがちです。優先順位は「生活や安全への影響が大きい場所」からが基本で、暮らしている家なら生活動線、空き家なら傷みやすい物のある場所が先になります。",
  },
  {
    t: "② 段階ごとに「終わりの状態」を決めてから始める",
    b: "「2階の2部屋を空にする」「納屋の中の家財をゼロにする」のように、段階ごとの完了条件を具体的に決めましょう。終わりが明確なら、1つの段階が終わるたびに達成感が積み上がり、次の段階の見積もりも正確になります。逆に「家全体を何となくきれいに」という始め方は、どこまでやっても終わらない感覚を生み、途中で止まる典型的なパターンです。",
  },
  {
    t: "③ 許可・保険・古物商許可の有無を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。長く使われてきた家の整理では、古い家具や道具類の買取が金額を左右することもあるため、買取を伴う場合は古物商許可の有無が判断材料になります。重量物の搬出では建物を傷つけるリスクもあるため、賠償保険・補償制度の有無と運営会社情報も確認してから依頼すると安心です。",
  },
  {
    t: "④ 一括で頼む場合と分けて頼む場合の両方で見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。段階的に進めたい場合でも、全体を一括で頼んだ場合の総額と、段階ごとに分けた場合の金額の両方を確認して比較しましょう。分けると1回ごとの負担は軽くなる一方、出張費などが回数分かかる場合もあります。みんなの遺品整理やミツモアの一括見積もりで複数社に同じ質問をぶつけるのが近道です。",
  },
];

const faqs = [
  {
    q: "岐阜のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。部屋数の多い戸建てや納屋・蔵を含む家は物量による変動が特に大きいため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "蔵や納屋の中の物も回収してもらえますか？",
    a: "多くの片付け・不用品回収業者は母屋以外の建物の中の物も対応対象としていますが、対応範囲と条件は業者ごとに異なります。長年開けていない蔵や納屋は物量が外から読めず、農機具・工具・古い家具のような重量物が含まれることも多いため、写真だけの概算では金額がぶれやすい場所です。依頼時に建物ごとの状況を伝え、できれば下見をしてもらったうえで、建物単位の内訳が分かる見積もりを出してもらいましょう。",
  },
  {
    q: "何回かに分けて頼むと、一括で頼むより割高になりませんか？",
    a: "一般論として、作業を分けると出張費や車両費が回数分かかる場合があり、総額では一括の方が抑えられるケースもあります。一方で、段階的に進めれば1回ごとの支払いは小さくなり、仕分けの判断に時間をかけられるという利点があります。どちらが合うかは物量と事情次第のため、見積もりの段階で「一括の場合」と「分けた場合」の両方の金額を確認し、差額と進めやすさを天秤にかけて決めるのがおすすめです。",
  },
  {
    q: "蔵から古い食器や道具が出てきました。価値があるか分かりません。",
    a: "長く使われてきた家の蔵や納屋からは、古い食器・道具・家具などが出てくることがあります。価値の判断は自分では難しいため、処分と決めつけて手放す前に、買取対応のある業者に査定してもらう選択肢があります。買取には古物商許可が必要なため、許可の有無を確認したうえで、金額に納得できない場合は複数の査定を比べることもできます。査定額がつかない物でも、処分費と相殺できる場合があるため、見積もり時に買取希望の品があることを伝えておきましょう。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。広い家の段階的な片付けでは、各段階で出る少量の粗大ごみを自治体の収集で処分し、納屋や蔵のようにまとまった量・重量物が出る段階だけ業者に頼む、という組み合わせ方もできます。申し込み方法や対象品目は岐阜市など自治体ごとに異なるため、お住まいの市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは岐阜でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心のため、岐阜は対応エリア外です。ゴミ屋敷専門パートナーズは関東・東海・関西を対応エリアとしていますが、市区町村単位の対応可否は公式サイトでの個別確認が必要です。本記事では、岐阜から確実に利用しやすい全国対応・検索型のサービスに絞って紹介しています。",
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

export default function AreaGifuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "岐阜でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#gifu5",
      label: "1｜岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "岐阜から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#gifu-jijo", label: "2｜岐阜で片付け業者の利用を検討する場面" },
    { href: "#dankai-keikaku", label: "3｜広い家は「エリア分け」して段階的に進める" },
    { href: "#kura-naya", label: "4｜蔵・納屋・物置は「中身が読めない」前提で計画する" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜岐阜の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "岐阜の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["岐阜", "ゴミ屋敷片付け", "不用品回収", "広い家の段階的な片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「部屋数が多く、どこから手を付ければいいのか分からない」「敷地内に納屋や蔵があり、母屋と合わせると物量の見当もつかない」「親の家の片付けを始めたいが、一度にやり切れる気がしない」——岐阜でこうした悩みを抱えたとき、業者選び以前に計画の立て方で迷う方は多いはずです。広い戸建ては物をしまう場所に困らないぶん、物が減る機会のないまま数十年分の家財が積み重なりやすく、「全部を一度に」と考えた瞬間に手が止まってしまうのが最大の壁です。必要なのは大がかりな一斉作業ではなく、家をエリアに分けて一つずつ終わらせていく段階的な計画です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、岐阜から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。広い家をエリア分けして段階的に進める計画の立て方と、蔵・納屋を含む家ならではの見積もりの注意点もまとめています。業者選びの参考にしてください。
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
      <H2 id="gifu5" num="1">岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        岐阜から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・お助けうさぎは関東圏中心の対応エリアで岐阜は対応外、ゴミ屋敷専門パートナーズは関東・東海・関西が対応エリアですが市区町村単位の対応可否は個別確認が必要なため、本記事のカードには岐阜から確実に利用しやすい全国対応・検索型のサービスのみを掲載しています。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        岐阜から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、岐阜から利用できる5社の一覧です。
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

      {/* 2｜岐阜の事情 */}
      <H2 id="gifu-jijo" num="2">岐阜で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        岐阜は戸建て住まいの多い土地柄で、敷地にゆとりのある家では母屋のほかに納屋・車庫・物置、古い家なら蔵を備えていることも珍しくありません。世代をまたいで住み継がれてきた家は、収納場所が多いぶん「捨てなくても困らない」年月が長く続き、気づけば母屋だけでなく敷地内のあらゆる建物に家財が収まっている、という状態になりがちです。名古屋方面に移り住んだ子世代が、親の高齢化や相続をきっかけに実家と向き合うとき、この物量の全体像が見えないことが最初のつまずきになります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「家全体を一度に片付ける時間も体力もない」「納屋や蔵の重量物を運び出せない」「何から手を付けるべきか計画が立たない」という場面では、段階的な依頼に対応できる業者・サービスを、計画の伴走役として使うのが現実的です。逆に、各段階で出る少量の粗大ごみを自分で搬出できるなら、後述する自治体の収集で費用を抑える併用も有効です。まずは家全体の物のある場所を書き出して、全体像を目に見える形にすることから始めましょう。
      </p>

      {/* 3｜段階計画 */}
      <H2 id="dankai-keikaku" num="3">広い家は「エリア分け」して段階的に進める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        部屋数の多い家の片付けを完走させるコツは、家を一つの塊として見ないことです。母屋の1階・2階・使っていない部屋・物置・納屋・蔵というように家をエリアに分け、エリアごとに「いつまでに・どの状態にするか」を決めて、一つずつ順番に終わらせていきます。順番の基本は生活や安全への影響が大きい場所からで、暮らしている家なら毎日使う動線と水回り、その次に使っていない部屋、最後に屋外の建物へと進むと、暮らしの改善を実感しながら進められます。部屋単位の着手順の考え方は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番ガイド</Link>で詳しく解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        段階的に進める方式は、費用と判断の負担を分散できるのが利点です。1回ごとの支払いが小さくなるだけでなく、仕分けの判断に時間をかけられるため、「勢いで捨てて後悔する」ことを防げます。一方で、作業を分けると出張費などが回数分かかる場合もあるため、見積もりの段階で一括の場合と分けた場合の両方の金額を確認し、差額を把握したうえで進め方を決めるのが賢い比べ方です。
      </p>

      {/* 4｜蔵・納屋 */}
      <H2 id="kura-naya" num="4">蔵・納屋・物置は「中身が読めない」前提で計画する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        敷地内の蔵・納屋・物置は、母屋と同じ感覚で計画すると見積もりも日程も外れやすい場所です。長年開けていない収納建物は、外から物量が読めないうえ、農機具・工具・古い家具・保存されたままの道具類など、重量があって搬出に人手のかかる物が集まっているからです。写真だけの概算では金額の振れ幅が大きくなりやすいため、蔵や納屋を含む依頼では下見をしてもらい、建物単位で内訳の分かる見積もりを出してもらうことをおすすめします。中身の事前仕分けの進め方は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>が参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もうひとつの特徴は、古い品の中に買取対象が混ざる可能性があることです。処分と決めつけて一括で手放す前に、買取対応のある業者（古物商許可の有無を確認）に査定してもらえば、処分費と相殺できる場合があります。車庫や物置の工具・タイヤなど品目ごとの扱いは<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">ガレージ片付けガイド</Link>で解説しています。建て替えや解体の予定がある場合は、「中身を空にする期限」から逆算して、蔵・納屋の段階を計画の前半に組み込みましょう。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        岐阜市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ずお住まいの市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        段階的な片付けとの相性で言えば、自治体の収集は「各段階で出る、自分で運べる少量」の受け皿として優秀です。母屋の部屋ごとの整理で出る粗大ごみは自治体へ、納屋・蔵のようにまとまった量と重量物が一度に出る段階は業者へ、と役割を分けると、総費用を抑えながら計画を進められます。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        岐阜で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">岐阜の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜「全部やる」をやめて区切れば、広い家も動き出す</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        岐阜から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。物量の多い家の遺品整理・生前整理なら審査済み業者の提案を見比べられるみんなの遺品整理、エリアごとに区切って都度頼むならくらしのマーケット、段階的な計画を相談しながら比較するならミツモア、何をどこに頼むかの整理から任せるなら生活110番、片付いた部屋の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        蔵や納屋のある広い家の片付けは、家をエリアに分けて段階ごとの終わりを決めることと、中身の読めない建物は下見つきの見積もりで計画することが、途中で止まらないための段取りの軸になります。一括と分割の両方の金額を確認し、複数の見積もりを比較して納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
        掲載情報は2026年8月16日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
