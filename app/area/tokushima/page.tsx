import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/tokushima/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

export const metadata: Metadata = {
  title: "徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "徳島でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、生活道路が狭い家で作業車の停め方と時間帯を先に決めて近隣に配慮する段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "徳島でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。狭い生活道路での作業車の停め方と、時間帯の調整による近隣配慮も解説します。",
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
      "対応エリアは全国47都道府県で、徳島からも利用できます。相談・見積もりは無料です。家の前の道が狭い場所では、同じ物量でも業者によって金額の出し方が変わります。トラックを横付けできる前提の見積もりと、手前で積み替える前提の見積もりでは、必要な人手も時間も違うためです。作業内容と金額が書面で並ぶ見積もりを複数取れば、どの条件で計算されているかを読み比べられます。審査を通過した業者に絞って比較できる仕組みは、条件の難しい家で依頼先を選ぶときの目安になります。",
    ],
    recommend: [
      "生前整理・遺品整理を伴う家財の整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "搬出条件の違いを見積もりで読み比べたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（徳島対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料・全国対応の記載を確認しています（2026年8月21日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
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
      "対応エリアは日本全国で、徳島の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。道が狭く車を長時間停めておけない家では、一度に大量を出すより、回数を分けて短時間で終える方が近隣への負担が小さくなります。作業の単位ごとに料金を確かめながら日時を指定して予約できる仕組みは、この進め方と相性がよい選択肢です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "回数を分けて短時間で終わらせたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月21日時点）。全国の登録業者から選ぶ仕組みのため、徳島の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。家の前の道幅がどれくらいか、車を停められるのは何メートル手前か、といった条件をチャットで先に伝えられるのが強みです。狭い道での作業は、小型車で来られるか、手前から台車で運ぶ体制を組めるかによって、受けられるかどうかが分かれます。写真と数字で前提を渡したうえで見積もりを集めれば、当日になって車を寄せられないという理由で作業が滞る事態を避けられます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "道幅や停車位置を先に伝えて調整したい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（徳島対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、見積もり依頼無料の記載を確認しています（2026年8月21日時点）。最大5社の見積もり比較・チャット相談の仕組み・全国47都道府県対応は当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
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
      "受付は電話・LINEに対応しています。家が密集した地域では、片付けの話が持ち上がる前に、においや虫、敷地からはみ出した植木といった、近隣との間で気になる点が先に出てくることがあります。どの困りごとをどの業者に頼めばよいかを一つずつ調べるのは手間がかかります。カテゴリをまたいで対応業者を探せる紹介型のサービスは、まとまっていない相談を電話一本から始めたいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "近隣とのあいだで気になる点もあわせて相談したい人",
    ],
    table: [
      { k: "費用", v: "紹介・手配は無料", note: "作業料金は提携業者の見積もりで確定" },
      { k: "対応エリア", v: "日本全国", note: "地域・内容により手配不可の場合あり" },
      { k: "受付", v: "電話・LINE相談に対応" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社（東証グロース上場・愛知県名古屋市）" },
      { k: "特徴", v: "不用品回収・ゴミ屋敷・遺品整理など多カテゴリの業者紹介" },
    ],
    memo:
      "公式サイト（seikatsu110.jp）で、提携業者の無料紹介の記載を確認しています（2026年8月21日時点）。対応カテゴリの詳細は当サイトのレビューページ掲載値にもとづきます。紹介型サービスのため、地域・内容により手配できない場合があり、費用は紹介先業者の見積もりで必ず確認してください。",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、徳島で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。搬出のときは、玄関から車までの通路を物が何度も往復するため、家の外まわりにもほこりや汚れが残ります。近くに家が並んでいる場所では、作業のあとに周辺を掃いておくかどうかで印象が変わります。搬出と清掃をまとめて手配できると、作業を終えた日のうちに元の状態へ戻せます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "徳島対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月21日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（徳島から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 家の前の道幅と、車を停められる位置を実際に測る",
    b: "見積もりの前に、家の前の道幅と、そこまで何メートル手前なら車を停められるかを確かめておきましょう。目分量ではなく、歩幅でもよいので数として出しておくと、業者に渡す情報になります。あわせて、道の途中に曲がり角や電柱、側溝があるかも見ておきます。この情報があると、小型車で来られるのか、手前から台車で運ぶ体制が必要なのかを、業者側が事前に判断できます。",
  },
  {
    t: "② 玄関から車までの経路を歩き、段差と曲がり角を数える",
    b: "実際に荷物を持つつもりで歩いてみると、図面では分からない条件が見えます。門扉の幅、段差の数、角を曲がるときに振れる余裕があるか。大きな家具や家電が通らない箇所があれば、分解が必要か、別の経路を使うかを先に相談できます。写真を数枚撮っておけば、口頭では伝わりにくい部分もそのまま見てもらえます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。狭い通路での搬出は、塀や門扉、隣家との境にある物に触れる場面があります。賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかを確認しておくと安心です。",
  },
  {
    t: "④ 停車位置と作業時間帯を条件に入れて見積もりを比較する",
    b: "同じ物量でも、車を横付けできるかどうかで金額は変わります。停められる位置、作業に使える時間帯、通行の多い時間を避けたいといった条件は、最初の相談で全社に同じ内容を伝えてください。前提のそろっていない見積もりを並べても比較になりません。みんなの遺品整理やミツモアの一括見積もりで金額と作業範囲を比べ、追加費用が出る条件を確認してから依頼を確定します。",
  },
];

const faqs = [
  {
    q: "徳島のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、サイト上の料金表示や届いた見積もりで確認します。家の前まで車を寄せられない場合は、手前まで人が運ぶ距離のぶん人手と時間がかかり、金額の前提が変わります。停車位置を伝えたうえで見積もりを取らないと、当日に条件が変わって金額が動くことがあります。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "家の前の道が狭くてトラックが入れません。それでも依頼できますか？",
    a: "対応している業者はあります。方法としては、小型のトラックや軽車両で来てもらう、入れる場所まで手前に停めて台車や人手で運ぶ、いったん小さい車に積んで大きい車へ積み替える、といったやり方があります。ただし、どこまで対応できるかは業者ごとに異なり、いずれの方法でも通常より人手と時間がかかります。相談の段階で、道幅、停められる位置、そこから玄関までの距離を伝えてください。この三つが分かれば、受けられるかどうかと、追加費用が発生するかどうかを事前に判断してもらえます。当日に現地を見て初めて分かる、という進め方は避けた方が安全です。",
  },
  {
    q: "作業車を道路に停めることになりそうです。何を確認すればいいですか？",
    a: "まず、停める予定の場所が通行の妨げにならないかを確認してください。そのうえで、道路上に車を停めて作業する場合に手続きが必要かどうかは、場所や停め方によって扱いが変わります。手続きが要る場合、業者側で対応するのか依頼者が行うのかも業者によって異なるため、見積もりの段階で誰が何を行うのかをはっきりさせておきましょう。あわせて、近くに月ぎめの駐車場や空き地があり、一時的に借りられるかどうかも調べておくと選択肢が増えます。停める場所が決まらないまま日程だけ先に決めると、当日の段取りが崩れやすくなります。",
  },
  {
    q: "作業の日、近隣にはどう伝えておけばいいですか？",
    a: "作業の数日前までに、両隣と向かい、車が通る側の家に、日にちと時間帯、車を停めるおおよその位置を伝えておくのが基本です。伝える相手は多くありません。要点は、いつ、どれくらいの時間、どこに車が停まるか、の三つだけです。事前に一言あるだけで、当日に車を出したい家は時間をずらせますし、音が続いても理由が分かります。集合住宅であれば、管理を担当する窓口にも同じ内容を伝えておきましょう。近隣との関係が気になっている場合の相談先や進め方は、当サイトの近所のゴミ屋敷相談ガイドでも解説しています。",
  },
  {
    q: "徳島市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集日まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。狭い道の家では、この指定場所まで自分で運べるかどうかが分かれ目になります。運べる大きさの物が少量なら、自治体の収集で費用を抑えられます。一方、一人では動かせない家具や家電が多い場合や、通路の条件が厳しい場合は、搬出まで任せられる業者の方が現実的です。指定場所に長時間置いておくと通行の妨げになることもあるため、出す時間の決まりもあわせて確認してください。申し込み方法・料金・対象品目は徳島市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは徳島でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも徳島の対応は確認できませんでした。本記事では、徳島から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaTokushimaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "徳島でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#tokushima5",
      label: "1｜徳島のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "徳島から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#tokushima-jijo", label: "2｜徳島で片付け業者の利用を検討する場面" },
    { href: "#teisha-ichi", label: "3｜作業車をどこに停めるかを見積もりの前に決める" },
    { href: "#jikantai-kinjo", label: "4｜作業の時間帯と近隣への一声を先に決める" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜徳島の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "徳島の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["徳島", "ゴミ屋敷片付け", "不用品回収", "狭い道からの搬出", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「家の前の道が狭くて、大きな車が入って来られない」「車を停めておくと、後ろから来た車が通れなくなる」「隣も向かいもすぐ近くなので、朝から作業の音を立てるのが気になる」——徳島で片付けを頼もうとした方から、こうした相談が寄せられます。生活道路に面した家では、物量よりも先に、どうやって外へ出すかが問題になります。そして、その答えは家の中を見ても出てきません。決めるべきなのは、車をどこに停めるか、どの時間帯に作業するか、という家の外側の条件です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、徳島から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月21日時点）をもとに比較しました。あわせて、作業車の停め方を見積もりの前に決めておく理由と、時間帯の調整で近隣への負担を小さくする手順もまとめています。業者選びの参考にしてください。
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
      <H2 id="tokushima5" num="1">徳島のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        徳島から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月21日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで徳島の対応を確認できなかったため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        徳島から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、徳島から利用できる5社の一覧です。いずれも一部屋だけ、一回の作業だけといった範囲を区切った依頼から相談できます。
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

          <H4>編集部の一次確認メモ（2026年8月21日時点）</H4>
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

      {/* 2｜徳島の事情 */}
      <H2 id="tokushima-jijo" num="2">徳島で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        徳島で片付けの相談が持ち上がるとき、家の中の状態と同じくらい問題になるのが、家の外側の条件です。古くからの住宅が並ぶ通りでは、車がすれ違えない幅の道に面した家が珍しくありません。こうした場所では、大きなトラックを家の前まで入れられないだけでなく、停めているあいだ後続の車が通れなくなるため、長時間の作業そのものが難しくなります。物量が少なくても、条件によっては家族だけでは搬出しきれない、という状況が生まれます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もう一つは、隣家との距離が近いことです。搬出の日は、人の出入りと荷物を運ぶ音が続き、車の出し入れも増えます。何も伝えないまま作業を始めると、事情を知らない近隣にとっては、急に道がふさがれ、音が続くという状況になります。片付けそのものは家の問題ですが、当日の段取りは周囲との関係に影響します。大きな家具や家電を動かせないとき、限られた時間で搬出まで終わらせたいときは、人手と車両を用意できる業者・サービスが選択肢になります。少量ずつ自分で運べる物は、後述する自治体の収集の方が費用を抑えられます。片付けの順番は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番ガイド</Link>、一日で進める場合の組み立ては<Link href="/obeya-dasshutsu-1day-plan/" className="text-primary underline underline-offset-2">1日で進める片付けプラン</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="teisha-ichi" num="3">作業車をどこに停めるかを見積もりの前に決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        狭い道に面した家では、車の停め方が費用と当日の進み方を大きく左右します。家の前に横付けできるなら、荷物を運ぶ距離は数歩で済みます。手前に停めることになれば、そこから玄関までを何度も往復することになり、人手も時間も増えます。この違いは見積もりの金額に直結するため、条件を伝えずに集めた見積もりを並べても、比較の意味がありません。まず、家の前の道幅、そして何メートル手前なら停められるかを、自分で確かめておきましょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        確認する項目は多くありません。道幅、停車できる位置、そこから玄関までの距離、途中の段差と曲がり角、この四つです。歩幅で数えた概算で構わないので、数として書き出しておきます。あわせて、門扉の幅と、家の中で一番大きな家具の寸法を測っておくと、通らない箇所が事前に分かります。写真を数枚撮っておけば、口頭では伝わりにくい部分もそのまま見てもらえます。大型の家具や家電の扱いは<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分ガイド</Link>、重量物の搬出は<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫の搬出ガイド</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車を停める場所が家の前に確保できない場合は、近くの月ぎめ駐車場や空き地を一時的に借りられないかも調べておくと、選択肢が増えます。また、道路上に停めて作業する場合の手続きが必要かどうかは、場所や停め方によって扱いが変わります。必要になるとき、業者側で対応するのか依頼者が行うのかも業者ごとに違うため、見積もりの段階で誰が何をするのかをはっきりさせておきましょう。停める場所が決まらないまま日程だけ先に決めると、当日の段取りが崩れやすくなります。
      </p>

      {/* 4 */}
      <H2 id="jikantai-kinjo" num="4">作業の時間帯と近隣への一声を先に決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車を停める位置が決まったら、次は時間帯です。生活道路は、朝と夕方に人と車の通行が集中します。この時間に車をふさぐ形になると、通勤や送り迎えの妨げになり、作業する側も気を使い続けることになります。逆に、通行の落ち着く時間帯に合わせれば、同じ作業でも周囲への影響は小さくなります。何時から何時までなら停めていられるかを、家の前の様子を見て決め、その枠を業者に伝えてください。作業の開始時刻を業者任せにすると、この調整ができません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        そのうえで、作業の数日前までに近隣へ一声かけておきます。伝えるのは、日にち、おおよその時間帯、車を停める位置の三つで十分です。事前に分かっていれば、車を出す予定のある家は時間をずらせますし、音が続いても理由が伝わります。集合住宅であれば、管理を担当する窓口にも同じ内容を伝えておきましょう。近隣との関係がすでに気まずくなっている場合は、片付けを進めること自体が状況を変えるきっかけになります。相談先の考え方は<Link href="/kinjo-gomiyashiki-soudan/" className="text-primary underline underline-offset-2">近所のゴミ屋敷相談ガイド</Link>、においが気になる場合は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭ガイド</Link>で解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        徳島市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。狭い道に面した家では、この指定場所まで運べるかどうかが判断の分かれ目になります。運べる大きさの物が少量なら、費用の面で有利です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、一人では動かせない家具や家電が多い場合や、通路の条件が厳しい場合は、搬出まで任せられる業者の方が現実的です。出す場所と時間の決まりも確認しておきましょう。前夜から道端に置いておくと、通行の妨げになったり、雨で傷んだりすることがあります。家電リサイクル法の対象品目のように粗大ごみとして出せない物もあるため、対象外品目の処分先は先に調べておきましょう。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        徳島で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">徳島の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜停める場所と時間帯が決まれば、狭い道でも作業は進む</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        徳島から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。生前整理・遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、回数を分けて短時間で終えるならくらしのマーケット、道幅や停車位置を伝えて見積もりを集めるならミツモア、業者探しから手配まで任せるなら生活110番、搬出後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        狭い道に面した家の片付けは、物量よりも搬出の条件で決まります。道幅、停められる位置、そこから玄関までの距離、途中の段差と曲がり角。この四つを数として出し、同じ内容を各社に伝えれば、見積もりは比較できる形になります。そのうえで、通行の落ち着く時間帯を選び、数日前に近隣へ一声かけておく。当日の段取りが整っていれば、条件の厳しい家でも作業は滞りません。作業の範囲と現地の条件をそろえたうえで複数社の見積もりを比べ、総額と内訳に納得してから依頼してください。
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
        掲載情報は2026年8月21日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
