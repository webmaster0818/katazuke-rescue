import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/takamatsu/";
const UPDATED = "2026年8月16日";
const UPDATED_ISO = "2026-08-16";

export const metadata: Metadata = {
  title: "高松のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "高松でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、空き家になった実家を売却・活用する前の家財整理を出口の方針から逆算して進める段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "高松のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "高松でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。空き家の実家を売却・活用する前の家財整理と出口逆算の段取りも解説します。",
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
      "対応エリアは全国47都道府県で、高松からも利用できます。相談・見積もりは無料です。相続した実家の家財を丸ごと整理する依頼は、遺品整理の中心的な相談内容のひとつです。空き家になった家の片付けは物量が多く金額の幅も大きくなりがちなため、審査を通過した業者に絞って最大3社の見積もりを取り、金額と作業範囲を並べて比較できる仕組みは、売却や活用に向けた費用の見通しを立てるうえでも役に立ちます。",
    ],
    recommend: [
      "相続した実家の遺品整理を丸ごと頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "空き家片付けの費用感を複数見積もりでつかみたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（高松対応）" },
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
      "対応エリアは日本全国で、高松の住所に対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。空き家の実家は、家財の運び出しと、その後の室内清掃という性質の違う作業が続きます。不用品回収とハウスクリーニングを別々のカテゴリで比較して、それぞれ評判のよい登録業者に頼み分けられるのは、このサービスならではの使い勝手です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "回収と清掃を別々に頼み分けたい人",
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
      "対応エリアは全国47都道府県です。「売却予定なので残置物が残らない状態まで」「仏壇と位牌は処分せず残してほしい」といった、空き家の片付けならではの条件をチャットで先に伝え、対応できる業者の見積もりだけを集めて比較できるのが強みです。同じ「家一軒」でも、どこまでやるかで金額は大きく変わるため、条件をそろえて比較できる仕組みは空き家案件と特に相性がよいと言えます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "作業範囲の条件を先に伝えてから決めたい人",
      "チャットで自分のペースでやり取りしたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（高松対応）" },
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
      "受付は電話・LINEに対応しています。空き家になった実家の片付けは、遺品整理なのか不用品回収なのか、どのカテゴリで探せばよいか自体が分かりにくいものです。家の状況と「最終的に空にしたい」という目的を電話で伝えれば、対応できる提携業者の手配まで任せられるため、探し方から迷っている段階の相談窓口として使えます。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "どのカテゴリで探せばよいか迷っている人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、高松で利用する場合は、高松に対応する業者をサイト内で検索して選ぶ使い方になります。売却や賃貸に出す前の家は、家財を運び出した後に水回りや床の清掃まで済ませておくと、内覧時の印象や査定の場面で家の状態を伝えやすくなります。搬出後の清掃までを見据えて、回収とクリーニングをまとめて探せるのが便利な場面です。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "高松対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月16日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（高松から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 家の出口（売る・貸す・解体・残す）を家族で仮決めする",
    b: "空き家の片付けで最初に決めるべきは、片付けの順番ではなく家そのものの行き先です。売却か、賃貸か、解体か、当面残すのか。仮でよいので方向を決めると、片付けの範囲・仕上がり・期限がすべて逆算で決まります。決めきれない場合でも、「貴重品と書類の確保」「残す家財の選別」までは方針に関係なく必要な作業なので、そこまでを先に進めましょう。",
  },
  {
    t: "② 出口に合わせて「どこまでやるか」を業者に伝える",
    b: "同じ家一軒でも、売却前提の「残置物なし＋清掃まで」と、解体前提の「残す物の運び出しのみ」では、作業範囲も金額も大きく変わります。見積もりを取る際は、家の出口と希望する仕上がりの状態を先に伝え、各社の見積もりが同じ範囲を指すようにそろえましょう。範囲がばらばらの見積もりを金額だけで比べると、判断を誤るもとになります。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。空き家の作業は依頼者が現地に常駐しない形になりやすいため、賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかは、任せて大丈夫かを見極める重要な手がかりです。",
  },
  {
    t: "④ 同じ条件で複数の見積もりを取り、総額で比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。みんなの遺品整理やミツモアの一括見積もりを使い、出口と作業範囲をそろえた条件で複数社の総額を比較しましょう。買取で差し引ける物があるか、清掃まで含むかどうかも総額に影響するため、内訳まで確認してから依頼を確定するのが失敗しないコツです。",
  },
];

const faqs = [
  {
    q: "高松のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。空き家一軒の片付けは物量・間取り・搬出条件で金額の幅が大きいため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "実家を売却する予定です。家財はどこまで片付けておくべきですか？",
    a: "一般論として、不動産の売却では残置物のない状態で引き渡す形が基本とされており、家財が残ったままだと内覧時の印象にも影響します。まず権利書や通帳などの重要書類と残したい思い出の品を確保し、その後に家財全体の搬出、最後に室内の清掃という順で進めると、売却に向けた準備として過不足がありません。ただし、引き渡し条件は取引ごとに異なるため、どこまで片付けるかは仲介を依頼する不動産会社に確認しながら決めるのが確実です。",
  },
  {
    q: "解体するかもしれない家でも、家財の整理は必要ですか？",
    a: "解体を選ぶ場合でも、貴重品・重要書類・残したい品の回収は必ず事前に必要です。また、家財を残したまま解体できるかどうか、残置物の処分費をどちらが負担するかは解体業者や契約により扱いが異なるため、家財の処分を片付け業者に頼む場合と解体側に任せる場合の両方で見積もりを取り、総額で比較するのが合理的です。方針が未定の段階なら、まず貴重品の確保と残す物の選別だけを先に済ませておくと、どの出口を選んでも無駄になりません。",
  },
  {
    q: "県外に住んでいます。高松の空き家の片付けを現地に行かずに進められますか？",
    a: "全国対応の紹介・比較サービスを使えば、候補集め・見積もり比較・日程調整までは県外からでも進められます。空き家の場合は、鍵の受け渡し方法、作業範囲の書面確認、作業前後の写真報告を事前に取り決めれば、立ち会いなしで作業を進める形も選べます。ただし、貴重品や書類の確保だけは最初に家族の手で済ませておくのが安全です。帰省の機会に確保だけ終わらせ、搬出以降を遠隔で手配する分担が現実的です。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。空き家の片付けでは、申し込みと搬出を行う人が現地に必要になるため、家一軒分の家財をこの方法だけで処分するのは現実的ではありません。通える範囲に住む家族が少量ずつ出せる場合は自治体、まとまった搬出は業者、と使い分けましょう。申し込み方法や対象品目は高松市など自治体ごとに異なるため、実家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは高松でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心、ゴミ屋敷専門パートナーズは関東・東海・関西のため、いずれも高松（香川）は対応エリア外です。本記事では、高松から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaTakamatsuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "高松のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "高松でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "高松のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#takamatsu5",
      label: "1｜高松のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "高松から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#takamatsu-jijo", label: "2｜高松で片付け業者の利用を検討する場面" },
    { href: "#deguchi", label: "3｜「売る・貸す・解体・残す」から片付けの範囲を逆算する" },
    { href: "#kakuho-shiage", label: "4｜先に確保する物と、片付け後に残す家の状態を決める" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜高松の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "高松の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          高松のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["高松", "ゴミ屋敷片付け", "不用品回収", "空き家の家財整理・売却準備", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「親が亡くなり、高松の実家が空き家のままになっている」「売るか貸すか決めていないが、家財だけでも整理したい」「不動産会社に相談する前に、家の中をどこまで空にすべきか分からない」——こうした悩みを抱えたとき、何から手を付ければよいか迷う方は多いはずです。空き家の実家は、置いたままの家財が「まだ決められない」の言い訳になりやすく、方針を先送りにするほど、管理の手間や固定資産税の負担、建物の傷みが静かに積み重なっていきます。実は、片付けの正解は家そのものの行き先——売るのか、貸すのか、解体するのか、残すのか——から逆算しないと決まりません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、高松から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。家の出口から片付けの範囲と期限を逆算する段取りと、先に確保すべき物の考え方もまとめています。業者選びの参考にしてください。
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
      <H2 id="takamatsu5" num="1">高松のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        高松から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは関東〜関西中心の対応エリアで高松（香川）は対応外のため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        高松から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、高松から利用できる5社の一覧です。
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

      {/* 2｜高松の事情 */}
      <H2 id="takamatsu-jijo" num="2">高松で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高松は四国の玄関口にあたる香川県の県庁所在地で、瀬戸大橋を介して岡山・関西方面との行き来が多い土地です。進学や就職を機に子世代が本州へ移り、親世代の住んでいた家が相続や施設への住み替えを機に空き家になる——高松に限らず全国で進む変化ですが、本州との距離が近いぶん「行こうと思えば行ける」ことが、かえって空き家の判断を先送りにしやすい面もあります。家財が残ったままの家は、売却・賃貸・解体のどの検討を始めるにも「まず中身をどうするか」が最初の壁になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「家一軒分の物量を運び出す人手がない」「相続した家財のうち、何を残すべきか判断しながら進めたい」「売却前提で室内を空にして清掃まで済ませたい」という場面では、遺品整理・不用品回収の業者を使うのが現実的です。逆に、通える範囲に住む家族が少量ずつ処分できる状況なら、後述する自治体の収集で費用を抑える選択肢もあります。どちらに進むにしても、出発点は「この家をどうするか」を家族で仮決めすることです。
      </p>

      {/* 3｜出口逆算 */}
      <H2 id="deguchi" num="3">「売る・貸す・解体・残す」から片付けの範囲を逆算する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        空き家の片付けが進まない最大の原因は、物量ではなく「どこまでやれば終わりか」が決まっていないことです。出口を仮決めすると、終わりの状態は自然に定まります。売却なら、残置物のない状態にして室内清掃まで済ませるのが基本形です。賃貸なら、家財の撤去に加えて設備の状態確認が必要になるため、リフォームの要否とあわせて範囲を決めます。解体なら、残す物と貴重品を運び出せば家財の処分は解体と一体で扱える場合があり、どちらに頼むのが安いかは両方の見積もりで比較できます。当面残すなら、傷みやすい物と貴重品だけ引き揚げ、管理しやすい状態に整える片付けになります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        このように、同じ家でも出口によって「やるべき片付け」はまったく別物になります。見積もりを取る段階で出口と希望の仕上がりを伝えれば、各社の金額を同じ土俵で比べられるようになり、余計な作業への支払いも防げます。相続した家の片付けの進め方は<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付けガイド</Link>で、空き家全体の段取りは<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家片付けガイド</Link>で詳しく解説しています。
      </p>

      {/* 4｜確保と仕上がり */}
      <H2 id="kakuho-shiage" num="4">先に確保する物と、片付け後に残す家の状態を決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        出口がどれであっても、業者に依頼する前に家族の手で済ませておきたいのが、貴重品と書類の確保です。不動産の権利書、通帳・印鑑、保険証券、年金関係の書類は、売却や相続の手続きそのものに関わるため最優先で探して確保します。あわせて、アルバムや形見など「後から取り返しのつかない物」も、搬出が始まる前に選び分けておきましょう。書類の探し方と整理の手順は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類整理ガイド</Link>を、写真・アルバムの残し方は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバム整理ガイド</Link>を参考にしてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もうひとつ決めておきたいのが、片付けが終わった後の家の状態です。売却・賃貸に向かうなら、搬出後に床・水回りの清掃まで済ませておくと、内覧や査定の際に家の状態を正しく見てもらえます。当面保有するなら、湿気のこもりやすい布団類や食品を残さないことが、次に訪れたときの状態を保つことにつながります。「搬出して終わり」ではなく「その後の家がどうあるべきか」まで業者に伝えることで、清掃やオプションの要否も見積もり段階で判断できます。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高松市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず実家のある市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        空き家の片付けでこの方法を使えるかどうかは、申し込みと搬出を担える人が現地に通えるかで決まります。近くに住む家族が帰るたびに少しずつ出せるなら費用の節約になりますが、家一軒分をこの形で処分し切るには相応の回数と期間が必要です。期限のある売却・解体を控えているなら、まとめて搬出できる業者との併用や使い分けを検討しましょう。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        高松で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">高松の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜出口を仮決めすれば、片付けの範囲と期限が決まる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高松から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。相続した実家の遺品整理を丸ごと頼むなら審査済み業者を比較できるみんなの遺品整理、回収と清掃を口コミで頼み分けるならくらしのマーケット、作業範囲の条件をそろえて比較するならミツモア、探し方から相談するなら生活110番、売却前の清掃まで見据えて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        空き家になった実家の片付けは、「売る・貸す・解体・残す」の仮決めから範囲と期限を逆算することと、貴重品・書類の確保を家族の手で先に済ませることが、迷いなく進めるための段取りの軸になります。出口と作業範囲をそろえた条件で複数の見積もりを比較し、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
