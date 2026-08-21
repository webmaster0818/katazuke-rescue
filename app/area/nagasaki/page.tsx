import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/nagasaki/";
const UPDATED = "2026年8月19日";
const UPDATED_ISO = "2026-08-19";

export const metadata: Metadata = {
  title: "長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "長崎でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、階段や坂の多い住宅地から小分けで運び出すための人手と回数の考え方まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "長崎でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。階段の多い住宅地からの小分け搬出と作業人数の決め方も解説します。",
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
      "対応エリアは全国47都道府県で、長崎からも利用できます。相談・見積もりは無料です。道路から階段を上がる家の片付けは、同じ物量でも運び出しにかかる時間と人手が大きく変わるため、条件を見ずに出された概算と、現地を見たあとの金額が離れやすい依頼です。審査を通過した業者に絞って複数社の見積もりを取り、人数や作業時間の前提まで含めて見比べられることは、条件の重い家ほど価値があります。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "搬出条件を含めた金額を複数社で比べたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（長崎対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料・全国対応の記載を確認しています（2026年8月19日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
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
      "対応エリアは日本全国で、長崎の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。階段の上り下りを伴う家では、一度で全部を出そうとすると作業が長時間に及びます。トラック1台分ずつ、あるいは一部屋ずつというように量を区切って複数回に分ける進め方を取りやすいのは、料金が事前に見えるサービスならではの利点です。地元の業者に依頼した人の口コミから、坂道や階段のある現場に慣れているかを推し量る材料も得られます。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "量を区切って複数回に分けて片付けたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月19日時点）。全国の登録業者から選ぶ仕組みのため、長崎の住所で検索して対応可能な業者を確認します。表示料金に階段や小運搬の追加費用が含まれるかは業者ごとに異なるため、予約前にサービス説明をよく確認しましょう。",
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
      "対応エリアは全国47都道府県です。「車を停められるのは坂下の道路で、そこから階段を数十段上がる」「途中に幅の狭い曲がりがある」といった搬出の前提を、チャットで写真とともに先に伝えられるのが強みです。こうした条件は対応できる業者とできない業者が分かれるところなので、条件を出したうえで見積もりを集める形にすれば、現地を見てから大幅に金額が変わるという事態を避けやすくなります。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "搬出経路の条件を伝えてから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（長崎対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、見積もり依頼無料の記載を確認しています（2026年8月19日時点）。最大5社の見積もり比較・チャット相談の仕組み・全国47都道府県対応は当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
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
      "受付は電話・LINEに対応しています。搬出条件の厳しい家では、そもそも「この立地で作業してくれる業者がいるのか」を確かめるところから始まります。住所と現場の状況を伝えれば、対応できる提携業者の手配まで任せられるため、自分で候補を一つずつ当たって断られる時間を省けます。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "公式サイト（seikatsu110.jp）で、提携業者の無料紹介の記載を確認しています（2026年8月19日時点）。対応カテゴリの詳細は当サイトのレビューページ掲載値にもとづきます。紹介型サービスのため、地域・内容により手配できない場合があり、費用は紹介先業者の見積もりで必ず確認してください。",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、長崎で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。家財を運び出したあとの部屋は、家具の裏の汚れやカビ、日焼けした床が表に出てきます。搬出と室内清掃を同じ時期に手配できると、階段を使う出入りを一つの期間にまとめられ、近隣への影響も短く抑えられます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "長崎対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月19日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（長崎から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 玄関から車を停められる場所までを実際に歩いて記録する",
    b: "見積もりの前に、玄関から車両を停められる地点まで自分で歩き、階段の段数、途中の踊り場の有無、幅がいちばん狭い場所、曲がり角の数を記録しましょう。距離は歩数でかまいません。この記録があるだけで、業者は必要な人数と往復回数を具体的に組めます。途中の写真を数枚撮り、いちばん狭い場所には手を広げた様子を写しておくと、幅の感覚が正確に伝わります。",
  },
  {
    t: "② 大きい物は「そのまま運ぶ・分割する・残す」を先に決める",
    b: "経路の幅を超える家具や家電は、そのままでは外に出せません。分割や解体をして運ぶのか、買い手や引き取り手を探すのか、家に残すのかを見積もり前に決めておくと、当日の判断待ちがなくなります。分割には工具と時間が要るため、対応の可否と追加費用を事前に確認しておきましょう。運び出せない前提で残す物がある場合も、その旨を伝えておけば見積もりの根拠がそろいます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。階段や狭い通路を使う搬出では、壁や手すり、隣家の塀に接触する場面が避けにくくなります。賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかを確認しておくと安心です。",
  },
  {
    t: "④ 同じ搬出条件で複数社の見積もりを取り、人数と時間で比べる",
    b: "広告の「◯◯円〜」は最低価格で、階段や小運搬を伴う現場では条件込みの金額が実質的な比較対象になります。①で記録した経路の情報を全社に同じ内容で伝え、金額だけでなく「何人で何時間」の想定まで見積書に書いてもらいましょう。人数と時間の前提が分かれば、安い見積もりが本当に成立するのかを判断できます。総額と内訳に納得してから依頼を確定してください。",
  },
];

const faqs = [
  {
    q: "長崎のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。階段や坂を使う搬出がある場合は、物量が同じでも作業時間と人数が増えて総額が変わるため、必ず搬出条件を伝えたうえで見積もりを取ってください。",
  },
  {
    q: "家の前まで車が入らず、道路から階段を上がる家です。追加費用はどのくらい見ておくべきですか？",
    a: "金額の付け方は業者ごとに異なり、階段の段数と距離に応じた加算、作業人数を増やすことによる加算、時間制の作業料として扱うなど方式が分かれます。そのため「相場は何円」と一律には言えません。確認すべきなのは、見積書の中で搬出条件の分がどう計上されているかです。基本料金に含まれるのか、別項目なのか、当日に段数が想定と違った場合はどう扱うのかまで聞いておけば、後からの上振れを防げます。複数社に同じ経路情報を渡して比べると、条件込みの妥当な水準が見えてきます。",
  },
  {
    q: "大型の家具や家電が階段を通りません。どうすればいいですか？",
    a: "一般論として、選択肢は分割・解体して運び出す、窓やベランダから吊り下ろす、その場に残す、の三つです。分割は工具と時間が必要で追加費用がかかることがあり、材質によっては割れて運べる形にならない場合もあります。吊り下ろしは足場や機材、周囲の安全確保が要るため、対応できる業者が限られ、費用も大きく変わります。まずは経路の最も狭い箇所の寸法と、家具の幅・高さ・奥行きを測って業者に伝え、どの方法が取れるかを見積もり時に確認しましょう。ピアノや金庫のように特に重い物は、専用の機材や複数人での作業が前提になるため、当サイトのピアノ・金庫の搬出ガイドもあわせてご覧ください。",
  },
  {
    q: "作業員は何人くらい必要ですか。人数が増えると費用も上がりますか？",
    a: "必要な人数は、物量だけでなく「1回に運べる量」と「1往復にかかる時間」で決まります。階段や坂で運搬距離が長い現場では、一人が一度に持てる量が減り、往復の回数が増えるため、同じ物量でも人数を増やして時間を短縮する組み方が取られることがあります。人数が増えれば人件費は上がりますが、作業時間が短くなることで総額が大きくは変わらない場合もあります。見積もりを比べるときは、単価ではなく「何人で何時間、何往復を想定しているか」を聞き、総額で判断するのが確実です。",
  },
  {
    q: "長崎市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。階段を下りて指定場所まで運ぶ必要がある家では、この搬出の負担が大きく、大型品を一人で下ろすのは危険も伴います。自分たちで無理なく運べる小さな物は自治体、階段を使う大型品や量の多い片付けは搬出まで任せられる業者、という分け方が現実的です。申し込み方法・料金・対象品目は長崎市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは長崎でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも長崎は対応エリア外です。本記事では、長崎から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaNagasakiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "長崎でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#nagasaki5",
      label: "1｜長崎のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "長崎から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#nagasaki-jijo", label: "2｜長崎で片付け業者の利用を検討する場面" },
    { href: "#kowake-hanshutsu", label: "3｜階段の多い住宅地は「1回に運べる量」から作業量を組み立てる" },
    { href: "#ninzu-kuruma", label: "4｜作業人数と車両の停め位置は見積もり前にすり合わせる" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜長崎の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "長崎の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["長崎", "ゴミ屋敷片付け", "不用品回収", "階段のある家の搬出", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「家の前まで車が入らず、片付けを頼めるのか分からない」「階段の上の実家に大きな家具が残ったままになっている」「量が多すぎて、自分たちで下まで運ぶのは無理だと感じている」——長崎でこうした悩みを抱えたとき、依頼先に迷う方は多いはずです。斜面に張り付くように家が建ち、車道から石段や細い路地を通って玄関にたどり着く住宅地では、片付けの難しさは物量よりも「どうやって外まで出すか」に集まります。運び出す手段が見えないまま年月が過ぎ、家財がそのまま残っているというのは、この地形の住宅地でよく起こることです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、長崎から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月19日時点）をもとに比較しました。あわせて、一度に運ぶ量ではなく1回に人が持てる量から作業を組み立てる考え方と、作業人数・車両の停め位置を見積もり前にすり合わせる手順もまとめています。業者選びの参考にしてください。
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
      <H2 id="nagasaki5" num="1">長崎のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        長崎から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月19日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで長崎は対応外のため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        長崎から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、長崎から利用できる5社の一覧です。いずれも搬出条件を伝えたうえで見積もりを集められます。
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

          <H4>編集部の一次確認メモ（2026年8月19日時点）</H4>
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

      {/* 2｜長崎の事情 */}
      <H2 id="nagasaki-jijo" num="2">長崎で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        長崎は、海に近い平地が限られ、斜面に沿って住宅地が広がってきた街です。車道から石段や細い路地を上がった先に玄関がある家、車を家の前に着けられない家は珍しくありません。こうした立地では、日々の買い物や家電の買い替えのたびに「運び上げる」手間がかかるため、いったん家に入った物は動かされないまま残りやすくなります。使わなくなった家具や家電が部屋の隅に置かれ続け、年月が経つほど「もう出せない物」として扱われていく——片付けが進まない背景には、この運び出しの重さがあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        親が住んでいた家を片付ける場面では、この条件がそのまま作業量として跳ね返ります。家財の総量が同じでも、玄関先にトラックを着けられる家と、階段を数十段上がる家とでは、必要な人数も時間も変わるからです。「量が多いから高い」のではなく「出すのに手数がかかるから高い」という費用の付き方を理解しておくと、見積もりの読み方が変わります。自分たちで少しずつ下ろせる量なら自治体の収集を使う手もありますが、大型品や量の多い片付けでは、搬出そのものを任せられる業者・サービスが現実的な選択肢になります。
      </p>

      {/* 3｜小分け搬出 */}
      <H2 id="kowake-hanshutsu" num="3">階段の多い住宅地は「1回に運べる量」から作業量を組み立てる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        平地の家では、トラックの荷台に何回分かという単位で作業量を考えます。しかし階段を使う家では、この考え方が実態に合いません。作業の中身は「一人が一度に持てる量を、階段の上から下まで運ぶ」ことの繰り返しになるからです。したがって計画の出発点は、荷台の容量ではなく、1回に運べる量と1往復にかかる時間です。段ボール1箱を抱えて下りて戻ってくるのに何分かかるかが分かれば、必要な往復回数から作業時間の見当が付き、そこから何人で入るべきかが逆算できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この前提に立つと、依頼側の準備も変わります。効くのは、運びやすい形にまとめておくことです。中身を出して軽くする、袋ではなく持ち手のある箱に詰める、床置きの物を一か所に集めておく——こうした下ごしらえは、往復回数そのものを減らします。逆に、階段の途中に物が置かれていたり、玄関前が塞がっていたりすると、運搬以前の片付けから始まって時間が延びます。大型家具の扱い方は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分ガイド</Link>、ピアノや金庫のような重量物は<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫の搬出ガイド</Link>で詳しく解説しています。
      </p>

      {/* 4｜人数と車両 */}
      <H2 id="ninzu-kuruma" num="4">作業人数と車両の停め位置は見積もり前にすり合わせる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        搬出条件の重い現場で見積もりが割れる最大の理由は、業者ごとに想定している人数と停め位置が違うことです。三人で半日と見る業者と、二人で一日と見る業者では、同じ作業でも金額の組み立てが変わります。どちらが適切かは現場の条件で決まるため、依頼側からは「玄関から車まで階段が何段あり、幅の狭い箇所がどこか」「どこに停められそうか」を先に示し、そのうえで何人で何時間を想定するかを見積書に書いてもらうのが有効です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        停め位置は近隣への影響にも直結します。道幅が狭い場所に長時間停めれば通行の妨げになりますし、通学や通勤の時間帯と重なれば作業も進みません。停められる場所と時間帯の見当を家族側でも付けておき、必要なら近所へ一言伝えておくと、当日の進行が落ち着きます。作業日を分けて午前だけにする、量を区切って複数回にするといった調整も、条件の厳しい現場では有効です。退去期限がある場合の段取りは<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けガイド</Link>、実家の片付け全体の進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家片付けガイド</Link>で解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        長崎市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。階段を使って指定場所まで下ろす必要がある家では、この搬出が最大の関門になります。重い物を階段で運ぶ作業は転倒や落下の危険を伴うため、無理をせず、運べる範囲を冷静に見極めることが大切です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家電リサイクル法の対象品目のように粗大ごみとして出せない物もあり、これらは別のルートでの処分が必要です。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。自治体と業者の役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        長崎で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">長崎の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜運び出しの手数を数えることが、条件の重い家の見積もりを読む鍵</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        長崎から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、量を区切って複数回に分けるならくらしのマーケット、搬出条件を伝えて見積もりを集めるならミツモア、対応できる業者探しから任せるなら生活110番、搬出後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        階段や坂を通って運び出す家の片付けは、物量よりも手数で費用が決まります。玄関から車まで歩いて段数と幅を記録し、経路を通らない大型品の扱いを先に決め、同じ条件で複数社に「何人で何時間」まで含めた見積もりを出してもらう。この三つを押さえれば、条件の重い現場でも金額の妥当性を判断できます。あわせて、運びやすい形に荷物をまとめておくことは、依頼側にできる最も効果的な準備です。総額と内訳に納得してから依頼を確定してください。
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
            <Link href="/area/mito/" className="text-primary underline underline-offset-2">水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選</Link>
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
        掲載情報は2026年8月19日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
