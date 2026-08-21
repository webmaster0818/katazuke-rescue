import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/fukushima/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

export const metadata: Metadata = {
  title: "福島のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "福島でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、遠方から通って進める家の整理で持ち帰る分と現地で手放す分を切り分ける段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "福島のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "福島でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。二拠点・遠方から通う片付けで、持ち帰る物と現地処分を切り分ける方法も解説します。",
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
      "対応エリアは全国47都道府県で、福島からも利用できます。相談・見積もりは無料です。離れて暮らす家の整理では、現地に行ける日が限られるぶん、一回の訪問で決められることを増やしておく必要があります。作業内容と金額が書面で並ぶ見積もりを複数取っておけば、次に行く前に家族で内容を検討でき、現地では確認と決定だけに時間を使えます。審査を通過した業者に絞って比較できる仕組みは、頻繁に足を運べない状況で依頼先を絞り込みたいときに使いやすい選択肢です。",
    ],
    recommend: [
      "生前整理・遺品整理を伴う家財の整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "訪問前に見積もりを比べて候補を絞りたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（福島対応）" },
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
      "対応エリアは日本全国で、福島の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。通いで進める片付けでは、滞在できる日が決まっているぶん、その日のうちに終わる量に依頼を収めることが大切になります。あらかじめ料金を見ながら日時を指定して予約できる仕組みは、滞在の初日か最終日に作業を合わせたい、といった組み方と相性がよい選択肢です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "滞在日程に合わせて日時を指定したい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月21日時点）。全国の登録業者から選ぶ仕組みのため、福島の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。現地にいられるのはこの日だけ、この部屋の分だけを出したい、といった条件をチャットで先に伝えられるのが強みです。離れて暮らしていると、業者と会えるのが作業当日の一度きり、ということも起こります。日程が動かせないこと、当日は限られた時間しか立ち会えないことを前提に伝えたうえで、受けられる業者だけを候補にできれば、直前の調整で予定が崩れる事態を減らせます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "動かせない日程を先に伝えて調整したい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（福島対応）" },
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
      "受付は電話・LINEに対応しています。人が常時いない家では、久しぶりに行ったときに、家財の問題だけでなく、水まわりの不具合や庭木の伸び、虫の発生といった別種の困りごとがまとめて見つかることがあります。滞在できる日数は限られているため、それぞれの窓口を自分で調べて連絡していると時間が足りません。カテゴリをまたいで対応業者を探せる紹介型のサービスは、電話一本から順に手配していきたいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "限られた滞在中に複数の手配を済ませたい人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、福島で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。人の出入りが少ない家は、家財を出したあとに、締め切っていた部屋のにおいや水まわりの汚れが目立ちます。次に来るときに気持ちよく使える状態にしておきたい、貸すか売るかの相談に入りたい、という段階では、搬出と清掃をまとめて手配できると滞在の回数を減らせます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "福島対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月21日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（福島から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 次の滞在の日数を決め、その日数で終わる範囲に依頼を収める",
    b: "通いで進める片付けでは、作業できる時間が先に決まっています。まず次にいつ何日いられるかを確定させ、その日数で終わる範囲だけを依頼の対象にしましょう。範囲を先に決めておくと、業者に伝える条件がぶれず、見積もりも比べやすくなります。逆に、家全体をなんとかしたいという伝え方をすると、金額の幅が大きくなり、判断の材料になりません。",
  },
  {
    t: "② 持ち帰る物の量を、車に積める分から逆算する",
    b: "持ち帰ると決めた物は、必ず自分たちで運ぶことになります。だからこそ、判断の前に積める量を確認しておきましょう。後部座席まで使ってどれくらい入るか、宅配便で送るならいくつまでにするか。上限を先に決めておけば、迷ったときに持ち帰るという結論に流れ続けるのを防げます。上限を超えた分は、次の滞在に回すか、現地で手放すかのどちらかです。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。離れて暮らしていると、作業の様子をずっと見ていられない場面もあります。賠償保険・補償制度の有無と、運営会社名・所在地が明記されているか、作業後に写真や書面で報告があるかを確認しておくと安心です。",
  },
  {
    t: "④ 写真と間取りをそろえ、遠方からでも比較できる形で見積もりを取る",
    b: "現地を見せられない状態で相談を始めるときは、部屋ごとの写真、家具の大きさ、家の前に車を寄せられるかといった条件を、同じ内容で各社に渡します。前提がそろっていない見積もりを並べても比較になりません。みんなの遺品整理やミツモアの一括見積もりで金額と作業範囲を比べ、当日に追加費用が出る条件を先に確認してから、総額と内訳に納得して依頼を確定します。",
  },
];

const faqs = [
  {
    q: "福島のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、サイト上の料金表示や届いた見積もりで確認します。通いで少しずつ進める場合は、一度にまとめて頼むより回数が増えるぶん、一回あたりの範囲を明確にして見積もりを取るのが比較のこつです。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "持ち帰る物と現地で手放す物は、どう線を引けばいいですか？",
    a: "持ち帰りは自分たちで運ぶ作業になるため、量ではなく運べるかどうかで先に上限を決めます。車に積める分、あるいは宅配便で送る個数を上限にし、その枠に入る物だけを持ち帰る候補にしてください。枠に収まらない物は、次の滞在に回すか、現地で手放すかを選びます。判断に迷いやすいのは、思い出に関わる小さな物です。こうした物は写真に撮って記録を残し、現物は絞るという方法もあります。逆に、大きな家具や家電は、持ち帰る前に自宅に置く場所があるかを確認してください。置き場のないまま運ぶと、片付けの問題が住まいを移して続くことになります。",
  },
  {
    q: "現地で手放す分は、いつ手配しておけばいいですか？",
    a: "滞在の日程が決まった時点で動き始めるのが安全です。回収の予約は希望日に埋まっていることがあり、自治体の収集を使う場合は申し込みから収集日まで日数がかかることがあります。滞在中に運び出しまで終わらせたいなら、日程が確定してすぐに問い合わせ、その日に対応できるかを確認しましょう。手配が間に合わない場合は、次の滞在までの間に立ち会いなしで進められる方法があるかも相談してみてください。鍵の受け渡しや作業後の報告の方法を含めて、事前に取り決めておく必要があります。",
  },
  {
    q: "普段は人が住んでいない家です。作業の前に確認しておくことはありますか？",
    a: "電気と水道が使える状態かを先に確かめてください。照明がつかないと作業の効率が落ち、水が出ないと清掃まで頼めません。止めている場合は、作業日に合わせて使える状態にできるかを確認しましょう。あわせて、鍵をどう渡すか、当日に立ち会えるのは何時間かを業者に伝えておきます。また、長く閉め切っていた家は、床の傷みや雨漏りの跡が見つかることがあります。危ないと感じる場所があれば、無理に自分たちで運ばず、状態を写真で伝えて相談してください。空き家として管理していく段階の考え方は、当サイトの空き家片付けガイドにまとめています。",
  },
  {
    q: "福島市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集日まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。通いで進める場合、この待ち時間が滞在の日程と合うかどうかが分かれ目になります。収集日に立ち会える予定が組めるなら、費用を抑える手段として有力です。一方、滞在中にまとめて運び出したい場合や、収集日まで待てない場合は、日時を指定して依頼できる業者の方が現実的です。申し込み方法・料金・対象品目は福島市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは福島でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも福島の対応は確認できませんでした。本記事では、福島から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaFukushimaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "福島のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "福島でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "福島のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#fukushima5",
      label: "1｜福島のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "福島から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#fukushima-jijo", label: "2｜福島で片付け業者の利用を検討する場面" },
    { href: "#mochikaeri-genchi", label: "3｜滞在ごとに「持ち帰る物」と「現地で手放す物」を分ける" },
    { href: "#taizai-dandori", label: "4｜現地で手放す分は滞在日程に合わせて先に段取る" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜福島の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "福島の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          福島のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["福島", "ゴミ屋敷片付け", "不用品回収", "二拠点・通いの片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「通うたびに少しずつ片付けているのに、家の中の景色が変わらない」「持ち帰るつもりで積んだ荷物が、自宅の部屋を圧迫し始めた」「行ける日が決まっているのに、その日に回収を頼めるか分からない」——福島の家に遠方から通いながら整理を進めている方から、こうした声が聞かれます。通いの片付けが進まない理由は、作業の速さではありません。持ち帰る物と現地で手放す物の線引きがないまま作業を始めるため、判断の多くが持ち帰る側に寄り、荷物が移動しているだけになるからです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、福島から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月21日時点）をもとに比較しました。あわせて、滞在ごとに持ち帰る分と現地で手放す分を切り分ける考え方と、現地処分を滞在日程に合わせて段取る手順もまとめています。業者選びの参考にしてください。
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
      <H2 id="fukushima5" num="1">福島のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        福島から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月21日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで福島の対応を確認できなかったため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        福島から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、福島から利用できる5社の一覧です。いずれも一部屋だけ、この日だけといった範囲を区切った依頼から相談できます。
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

      {/* 2｜福島の事情 */}
      <H2 id="fukushima-jijo" num="2">福島で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        福島の家に、別の土地から通いながら手を入れている方がいます。勤め先の近くに生活の拠点があり、週末や連休に戻って作業を進めるという形です。人が常に住んでいない家は、生活しながら片付ける家とは事情が異なります。作業できる時間が滞在の日数で区切られること、次に来られるのがいつになるか読めないこと、そして家の中の物量を離れた場所からは確かめられないこと。この三つが、計画を立てにくくしています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もう一つの特徴は、荷物が二つの家を行き来しやすい点です。判断に迷った物を「とりあえず持ち帰る」と決めてしまうと、現地の物は確かに減ります。しかし、今度は自分の住まいに置き場が必要になり、そこでも同じ判断を先送りすることになります。片付けが終わらない家に共通するのは、この移し替えが繰り返されている状態です。一度にまとまった量を出したいとき、大型の家具や家電を運ぶ人手がないとき、滞在中に搬出まで終わらせたいときは、業者・サービスが選択肢になります。少量ずつ自分で運べる物は、後述する自治体の収集の方が費用を抑えられます。実家全体の進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けガイド</Link>、住む人がいなくなった家は<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家の片付けガイド</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="mochikaeri-genchi" num="3">滞在ごとに「持ち帰る物」と「現地で手放す物」を分ける</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        通いの片付けで最初に決めるべきなのは、どの部屋から始めるかではなく、持ち帰る物の上限です。持ち帰りは自分たちの手で運ぶ作業なので、車の積載や宅配便の個数という形で、はっきりした限度があります。この限度を先に数として決めてしまえば、迷ったときに持ち帰る側へ流れ続けるという事態を防げます。後部座席まで使って段ボール何箱分か、送るなら何個までか。滞在のたびにこの枠を決め直し、枠に入る物だけを持ち帰る候補として選びます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次に、枠に入らなかった物を、次の滞在に回す物と、現地で手放す物に分けます。ここで基準になるのは、自宅に置き場所があるかどうかです。大きな家具や家電は、運べたとしても置く場所がなければ、住まいを移して同じ問題が続くだけになります。逆に、小さくて数の多い物、たとえば手紙や写真、記念の品は、持ち帰りやすい一方で判断が最も難しいものです。こうした品は、写真に撮って記録を残し、現物は絞るという進め方もあります。写真や書類の扱いは<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理ガイド</Link>と<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理ガイド</Link>、大型家具は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分ガイド</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        現地で手放すと決めた物は、その滞在中に運び出されるところまでを一区切りとします。玄関に寄せただけで帰ると、次に来たときに同じ物をもう一度判断することになり、進んだ実感が残りません。どうしても判断がつかない物は、一か所にまとめて保留の場所をつくり、次の滞在で見直します。ただし、保留の場所が部屋いっぱいに広がらないよう、置ける範囲もあらかじめ決めておいてください。一時的にどこかへ預ける選択肢は<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルーム活用ガイド</Link>にまとめています。
      </p>

      {/* 4 */}
      <H2 id="taizai-dandori" num="4">現地で手放す分は滞在日程に合わせて先に段取る</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        現地で手放すと決めても、その日に運び出せるとは限りません。回収の予約は希望日が埋まっていることがあり、自治体の収集は申し込みから収集日まで日数がかかることがあります。滞在の日程が決まった時点で、まず問い合わせを始めてください。順番としては、いつ何日いられるかを確定する、その日に対応できる方法を確認する、確認が取れた方法に合わせて作業の範囲を決める、という流れになります。作業を始めてから手放し方を考えると、間に合わずに持ち越しになります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        滞在中に手配が収まらない場合は、立ち会いなしで進められるかを相談する方法もあります。その場合は、鍵をどう渡すか、どこまでを対象にするか、作業後にどう報告を受けるかを、必ず事前に取り決めてください。写真での報告に対応している業者であれば、離れていても内容を確かめられます。また、電気や水道を止めている家では、作業日に使える状態にできるかも確認が必要です。照明がつかない、水が出ないという条件では、できる作業が限られます。当日の追加費用が発生する条件を含め、前提を先にそろえておくことが、遠方からの依頼では特に重要になります。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>、手放し方の選択肢は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品処分ルートの比較ガイド</Link>で解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        福島市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。通いで進める場合、この待ち時間と滞在日程が合うかどうかが判断の分かれ目になります。収集日に合わせて滞在を組めるのであれば、費用の面で有利です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、滞在中にまとめて運び出したい場合や、次にいつ来られるか読めない場合は、日時を指定して依頼できる業者の方が確実です。家電リサイクル法の対象品目のように粗大ごみとして出せない物もあるため、対象外品目の処分先は先に調べておきましょう。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れガイド</Link>、家電の扱いは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクルの処分ガイド</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        福島で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">福島の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜持ち帰る枠を先に決めれば、荷物の移し替えが止まる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        福島から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。生前整理・遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、滞在日程に合わせて日時を指定するならくらしのマーケット、動かせない予定を伝えて見積もりを集めるならミツモア、限られた滞在中に複数の手配を済ませるなら生活110番、搬出後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        通いの片付けが進まないのは、作業が遅いからではありません。持ち帰る物の上限を決めないまま始めるため、判断が先送りされ、荷物が二つの家を行き来し続けるからです。滞在ごとに持ち帰る枠を数で決め、枠に入らない物は次に回すか現地で手放すかを選ぶ。手放す分は、日程が決まった時点で手配を始める。この順番にしておけば、一回の滞在で終わる範囲がはっきりし、次に来たときに前回の続きから始められます。作業の範囲と現地の条件をそろえたうえで複数社の見積もりを比べ、総額と内訳に納得してから依頼してください。
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
        掲載情報は2026年8月21日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
