import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/matsumoto/";
const UPDATED = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "松本のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "松本でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、上がらなくなった二階の部屋から先に手を付けて暮らしを一階にまとめる段取り、階段の幅・曲がり角・手すりの条件を測って搬出の見通しを立てる進め方まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "松本のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "松本でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。二階に残った家財から手を付けて暮らしを一階にまとめる段取りと、階段を通る搬出の条件を測って業者に伝える進め方も解説します。",
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
      "みんなの遺品整理は、株式会社LIFULL senior（LIFULLグループ）が運営する遺品整理・生前整理業者の紹介サービスです。遺品整理士認定協会と提携し、審査を通過した業者のみを掲載している点が特徴で、最大3社の一括見積もりを取り、支払金額や口コミを確認したうえで業者を選べます。",
      "対応エリアは全国47都道府県で、松本からも利用できます。相談・見積もりは無料です。長く住んだ家の遺品整理・生前整理では、ふだん使っている一階だけでなく、上がらなくなった二階の部屋に残された家具や寝具、本、衣類まで含めて整理する必要があり、それらを階段からどう下ろすかも作業の手間に関わります。審査を通過した業者の中から、間取りと物量、二階に残っている家財の量と階段の条件を伝えて見積もりを比べられるため、「どの業者が信頼できるか分からない」という松本の方の最初の相談先に向いています。",
    ],
    recommend: [
        "遺品整理・生前整理を伴う実家の家財整理を頼みたい人",
        "審査を通過した業者の中から選びたい人",
        "二階に残った家財まで含めて家一軒分をまとめて整理したい人",
        "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（松本対応）" },
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
      "対応エリアは日本全国で、松本の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。二階に家具が残っている家では、家族が自分で運べる衣類や本、小物を先に下ろして足場を作り、箪笥やベッド、学習机のように階段を通しにくい大型品だけを業者に頼む、という進め方が現実的です。その回の物量に合ったプランを料金を見ながら選べるため、階段を通る大型品の搬出だけを切り出して頼む場面と相性のよいサービスです。",
    ],
    recommend: [
        "口コミと評価を見て自分で業者を選びたい人",
        "予約前に料金の目安を把握しておきたい人",
        "二階からの大型家具・家電の搬出だけを切り出して頼みたい人",
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
    num: "1-3",
    catch: "最大5社の見積もりを比較",
    name: "ミツモア",
    officialUrl: "https://meetsmore.com/",
    image: "/images/hero-a.png",
    imageAlt: "ミツモアの紹介イメージ",
    intro: [
      "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。不用品回収・片付け・遺品整理のカテゴリがあり、見積もり依頼は無料です。",
      "対応エリアは全国47都道府県です。「二階に箪笥やベッドが残っていて、階段を通せるか先に相談したい」「階段が急で踊り場が狭く、大型品を立てて運べるか分からない」「家の前に作業車を停められる場所が限られる」といった依頼の事情を、チャットで先に伝えたうえで見積もりを比較できるのが強みです。二階の家財と階段の条件をそろえて複数社を比べたい松本の片付けで、条件のかみ合う業者を効率よく絞り込みたい人に向いています。",
    ],
    recommend: [
        "複数社の見積もりを一度に集めて比較したい人",
        "二階の家財の扱いや階段の搬出条件を相談してから決めたい人",
        "費用の相場観を先につかみたい人",
        "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（松本対応）" },
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
      "受付は電話・LINEに対応しています。通勤や家庭の用事のあいまに実家や自宅の片付けを進める家族にとって、業者を一社ずつ調べて比べる時間が取れないことは珍しくありません。まず電話やLINEで住所と状況を伝えて手配まで任せられるため、業者探しから任せたい人や、何から頼めばよいか整理が付いていない段階の相談先に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、松本で利用する場合は、松本に対応する業者をサイト内で検索して選ぶ使い方になります。家財を下ろしたあとの二階の部屋は、長く風を通していないことで畳や壁にほこりやにおいが残りやすく、部屋を使い直す前や引き渡しの前に清掃まで済ませておきたいという場面も少なくありません。不用品の回収と片付け後の清掃を組み合わせて依頼先を探したいときに、住まい関連の作業をあわせて検索できるのが便利です。",
    ],
    recommend: [
        "不用品回収とクリーニングをまとめて探したい人",
        "出店型マーケットで料金を見ながら業者を選びたい人",
        "口コミを確認してから予約したい人",
        "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "松本対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月16日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（松本から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 一階と二階を分けて写真に撮り、二階に残っている家財を書き出す",
    b:
      "片付けの出発点は、一階だけでなく、二階の各部屋・押し入れ・納戸までひと通り写真に撮り、そこに残っている家財を一階の物とは別にリスト化することです。机・ベッド・本棚・箪笥・押し入れの寝具・段ボール箱のように、長く使われていないまま二階に置かれている物は、家族でも量を把握しきれていないことが珍しくありません。写真とリストがあれば、業者に頼む範囲と自分で減らせる範囲が分かれ、見積もりを取るときの説明もそろいます。",
  },
  {
    t: "② 使い続ける家財と手放す家財を持ち主に確認し、買取・譲渡に回す物を先に決める",
    b:
      "二階に置かれた家財は、家族の誰かが今も持ち主として気にかけている場合があります。家を出た子どもの物、親がまた使うつもりの物、もう何年も触っていない物が混ざったまま処分を進めると、あとから「あれは残しておきたかった」という話になりがちです。持ち主ごとに使い続ける物と手放す物を確認し、手放す物のうち状態のよい物は買取や譲渡に回す候補として先に分けておきます。買取に出す分が決まってから回収を頼む範囲が確定するため、この順番を崩さないことが費用の抑え方にもつながります。",
  },
  {
    t: "③ 許可・保険・古物商許可を確認する",
    b:
      "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無が判断材料になります。二階から大型家具を下ろす作業では、階段の壁や手すり、柱、玄関まわりの養生の有無、搬出時の事故に備えた賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも確認ポイントです。階段や壁を傷付けると補修の話になるため、保険の有無は先に確認しておきましょう。",
  },
  {
    t: "④ 二階の大型品と階段・搬出経路の条件をそろえて複数の見積もりを同じ条件で比べる",
    b:
      "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。みんなの遺品整理やミツモアの一括見積もりを使い、同じ写真と同じ品目リスト、同じ「階段の幅と曲がり角」「部屋の入口の幅」「作業車を停められる場所」を各社に伝えて比較すると、金額の差が何によるものかが見えます。分解して下ろすか、窓から吊り下ろすかといった方法の違いもこの段階で確認し、金額と内訳に納得してから依頼を確定しましょう。",
  },
];

const faqs = [
  {
    q: "松本のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "二階に残った箪笥やベッドも下ろしてもらえますか？",
    a: "二階からの搬出に対応する業者は多くありますが、扱いや費用は業者ごとに異なります。箪笥やベッド、本棚のように分解しにくい大型家具は、階段の幅や曲がり角を通せるかどうかで対応が変わることがあり、作業に人数がかかる場合は一階の家財とは別に数えられることもあります。見積もりの際に、品目と点数、おおよその寸法、置いてある部屋と階段の写真を伝えて、搬出の可否と費用の扱いを確認しましょう。状態のよい物は買取や譲渡に回せる場合があるため、処分を決める前に分けておくと無駄がありません。",
  },
  {
    q: "階段が急で幅が狭い家でも依頼できますか？",
    a: "階段の狭い住宅での作業に慣れた業者は多くありますが、幅や曲がり角の条件によっては、分解して下ろす、窓から吊り下ろすなど方法が変わり、作業の手間も変わります。見積もりの際に、階段の幅、折れ曲がりの有無、手すりの張り出し、踊り場の広さ、部屋の入口の幅を測って伝え、写真もあわせて送ってください。方法によっては現地を見てからでないと判断できない場合があるため、訪問での見積もりに対応しているかも確認しておくと安心です。",
  },
  {
    q: "長く開けていない二階の部屋の布団や衣類は、そのまま処分してよいですか？",
    a: "長く風を通していない部屋に置かれた布団や衣類は、湿気やほこりで状態が変わっていることがあります。まずは取り出して状態を確かめ、使い続けられる物と手放す物に分けてください。手放すと決めた寝具や衣類は、量がまとまると自分では運びにくくなるため、業者に頼む範囲に含めるかどうかを見積もりの段階で決めておくと段取りが早くなります。出し方や分別区分は品目と自治体によって異なるため、お住まいの市区町村の公式案内でご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは松本でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心、ゴミ屋敷専門パートナーズは関東・東海・関西のため、いずれも松本は対応エリア外です。本記事では、松本から利用できる全国対応・検索型のサービスのみを紹介しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。日程に余裕があり自力で運べる少量なら自治体、期限が迫っている場合や自分で運び出せない大型品、家一軒分のようにまとまった量なら業者への依頼が向いています。二階から自分で下ろせない物は、指定場所まで運ぶところが壁になるため、運べるかどうかを先に確かめておきましょう。申し込み方法や対象品目、出し方は松本市など自治体ごとに異なるため、家のある市区町村の公式サイトでご確認ください。",
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

export default function AreaMatsumotoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "松本のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "松本でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "松本のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#matsumoto5",
      label: "1｜松本のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "松本から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#matsumoto-jijo", label: "2｜松本で片付け業者の利用を検討する場面" },
    { href: "#nikai-shukuyaku", label: "3｜使わなくなった二階の部屋から手を付け、暮らしを一階にまとめる" },
    { href: "#kaidan-hanshutsu", label: "4｜階段を通る搬出は、幅・曲がり角・手すりの条件を測って伝える" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜松本の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "松本の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          松本のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["松本", "ゴミ屋敷片付け", "不用品回収", "二階の家財整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「二階の部屋に、使わなくなった机とベッドがそのまま残っている」「親が階段を上がらなくなり、二階が何年も開けられていない」「一階で暮らしが完結しているのに、二階の家財をどう下ろせばよいか分からない」——松本でこうした行き詰まりを感じている方は少なくありません。二階建ての住まいで長く暮らした家では、生活の中心が一階に移ったあとも、二階の部屋に家具や寝具、本、衣類が置かれたままになりやすく、「何をどこまで下ろすか」を決めないまま業者を探しても、見積もりも日程も定まりません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、松本から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。あわせて、使わなくなった二階の部屋から先に手を付けて暮らしを一階にまとめる段取りと、階段の幅・曲がり角・手すりの条件を測って搬出の見通しを立てる進め方もまとめています。業者選びの参考にしてください。
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
      <H2 id="matsumoto5" num="1">松本のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        松本から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは関東〜関西中心の対応エリアで松本は対応外のため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        松本から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、松本から利用できる5社の一覧です。
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

      {/* 2｜松本の事情 */}
      <H2 id="matsumoto-jijo" num="2">松本で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        松本は、長野県の中部にある街で、市街地から周辺の住宅地まで二階建ての戸建てが多く見られます。長く同じ家に暮らす世帯では、子どもが家を出て、親が年を重ねるにつれて生活の場が一階に移っていくことが珍しくありません。二階の部屋はそのまま残され、机やベッド、本棚、押し入れの寝具、季節の衣類が、置かれたときのまま年月を重ねます。階段を上がる機会が減るほど中の様子は分からなくなり、住み替えや引き渡しの予定が決まった、相続で家の扱いを決めることになった、といった場面になって初めて、家族が二階に残った家財の量に気付く、というのが松本でよく起きる片付けの入口です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「一階は片付けられても、二階が手付かずで全体の見通しが立たない」「箪笥やベッドを階段からどうやって下ろせばよいか分からない」「体力的に二階の物を運べず、判断が止まっている」という状況では、仕分けから搬出・処分までまとめて任せられる片付け業者・サービスを検討する場面です。反対に、日程に余裕があり、自力で指定場所まで運べる少量であれば、後述する自治体の粗大ごみ収集を使うほうが費用を抑えやすいのが一般的です。まずは二階の各部屋と押し入れを写真に撮り、一階の家財と分けるところから始めましょう。実家の片付け全体の流れは<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けガイド</Link>、押し入れの中身の整理は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>、相続した家の扱いは<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付け</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="nikai-shukuyaku" num="3">使わなくなった二階の部屋から手を付け、暮らしを一階にまとめる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        二階に家財が残る家の片付けで最初に押さえるべきなのは、「どの部屋に、何が、どれだけあるか」を家族で共有することです。二階は日常の生活動線から外れているため、家族それぞれが別の時期に別の物を置いていき、全体の量を誰も把握していない状態になりがちです。まずは各部屋の扉と押し入れを開けて写真に撮り、家具・寝具・本・衣類・季節家電・段ボール箱といった種類ごとにおおよその点数を書き出します。長く風を通していない部屋や押し入れでは、収納したときのままの状態が保たれているとは限らないため、布団や衣類、紙の箱は取り出して状態を確かめてから残すかどうかを決めましょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        あわせて決めておきたいのが、片付けたあとに二階をどう使うかです。ふだんの暮らしを一階にまとめるのであれば、二階に戻す物は季節ごとに使う物だけに絞り、残りは一階の収納に収まる量まで減らすという線引きができます。使い道を決めずに「とりあえず空ける」だけだと、一階に下ろした物の行き場がなくなり、今度は一階が狭くなります。家族が自分で運べる衣類や本、小物は作業日より前に下ろして足場を作っておくと、当日は大型品の搬出に集中できます。寝具の扱いは<Link href="/futon-mattress-shobun/" className="text-primary underline underline-offset-2">布団・マットレスの処分</Link>、本や書類は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理</Link>、しまい込んだ季節家電は<Link href="/kisetsu-kaden-hokan-shobun/" className="text-primary underline underline-offset-2">季節家電の保管と処分</Link>、大型家具の処分は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>、当日の立ち会いのポイントは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いガイド</Link>でまとめています。
      </p>

      {/* 4 */}
      <H2 id="kaidan-hanshutsu" num="4">階段を通る搬出は、幅・曲がり角・手すりの条件を測って伝える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        二階の家財で費用と段取りを左右するのが、階段の条件です。箪笥、ベッド、本棚、机、大型のテレビのように分解しにくい家具は、「階段の幅に入るか」「曲がり角を回せるか」「踊り場で立てられるか」で扱いが変わります。階段の幅、途中の折れ曲がりの有無、手すりが張り出しているかどうか、天井までの高さ、二階の廊下から部屋の入口までの幅を測っておき、写真とあわせて業者に伝えると、見積もりの精度が上がります。窓から吊り下ろす方法を取る場合もありますが、足場や周囲の空間の条件によって可否が変わるため、現地を見てもらったうえで相談するのが確実です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もうひとつ確認しておきたいのが、家の前の条件です。作業車をどこに停められるか、玄関までの通路の幅、門扉や敷地の入口の大きさは、階段の条件と同じくらい作業の手間に関わります。通路や駐車場所の状態によって当日の段取りが変わることもあるため、日程を決める段階で相談しておくと安心です。大型品を運び出したあとの部屋には、家具の跡や長年のほこり、畳や壁の傷みが残ることが多く、部屋を使い直す前や引き渡しの前に清掃まで頼むかどうかも、見積もりの段階で決めておくとまとめて手配できます。搬出の段取りの考え方は<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">不用品搬出の段取り</Link>、重量物の扱いは<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫など重量物の搬出</Link>、片付け後の清掃の範囲は<Link href="/oosouji-gyousha-hani/" className="text-primary underline underline-offset-2">大掃除を業者に頼む範囲</Link>、見積もりの読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>を参考にしてください。条件を先に伝えておけば、当日に「これは下ろせない」という行き違いを防げます。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        松本市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目のように、粗大ごみとして出せないものもあります。二階から自分で下ろせない大型品は、指定場所まで運ぶところが最初の壁になるため、運べるかどうかを先に確かめておきましょう。申し込み方法・料金・対象品目・出し方は自治体ごとに異なるため、必ず家のある市区町村の公式サイトでご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        日程に余裕があり自力で運べる少量なら自治体の収集、期限が迫っている場合や自分で運び出せない大型品、家一軒分のようにまとまった量なら業者、という使い分けが基本形です。二階から自分で下ろせる衣類や本、小物を自治体の収集で先に減らし、階段を通しにくい大型品を業者にまとめて頼む組み合わせも有効です。申し込みから収集までの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>、自治体の収集と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>、自分で運べる分を持ち込む場合は<Link href="/jiko-hannyu-shobun/" className="text-primary underline underline-offset-2">自己搬入での処分</Link>、ごみ出しのルールに迷ったときの相談先は<Link href="/gomidashi-rule-soudan/" className="text-primary underline underline-offset-2">ごみ出しルールの相談先</Link>で解説しています。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で確認できます。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        松本で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">松本の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜二階の家財を先に下ろせば、暮らしを一階にまとめる見通しが立つ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        松本から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。二階の家財まで含めた家一軒分の遺品整理・生前整理を審査済み業者で比べるならみんなの遺品整理、階段を通しにくい大型品だけを切り出して頼むならくらしのマーケット、二階の家財の扱いや階段の条件を相談しながら見積もりを比べるならミツモア、業者探しから手配まで任せるなら生活110番、片付け後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        二階に家財が残る家の片付けは、まず各部屋の扉と押し入れを開けて写真を撮り、一階の家財と分けるところから始めると、業者に頼む範囲と作業の手間が定まります。片付けたあとに二階をどう使うかを先に決めて戻す量を絞ること、階段の幅・曲がり角・手すりの張り出し、部屋の入口の幅を測って写真とあわせて伝えること、作業車を停められる場所と玄関までの通路の条件を最初から伝えて複数の見積もりを同じ条件で比べ、総額に納得してから依頼することが、後悔を防ぐ共通のポイントです。
      </p>

      {/* 他エリア */}
      <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
        <p className="font-bold text-text-primary mb-3">他エリアの業者比較</p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          <li>
            <Link href="/area/akita/" className="text-primary underline underline-offset-2">秋田のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/amagasaki/" className="text-primary underline underline-offset-2">尼崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/aomori/" className="text-primary underline underline-offset-2">青森のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fujisawa/" className="text-primary underline underline-offset-2">藤沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukui/" className="text-primary underline underline-offset-2">福井のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukushima/" className="text-primary underline underline-offset-2">福島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukuyama/" className="text-primary underline underline-offset-2">福山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/funabashi/" className="text-primary underline underline-offset-2">船橋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/gifu/" className="text-primary underline underline-offset-2">岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hachioji/" className="text-primary underline underline-offset-2">八王子のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hamamatsu/" className="text-primary underline underline-offset-2">浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/higashiosaka/" className="text-primary underline underline-offset-2">東大阪のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/himeji/" className="text-primary underline underline-offset-2">姫路のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2">広島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2">鹿児島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2">金沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kawaguchi/" className="text-primary underline underline-offset-2">川口のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2">川崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2">北九州のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kochi/" className="text-primary underline underline-offset-2">高知のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kofu/" className="text-primary underline underline-offset-2">甲府のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2">熊本のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kurashiki/" className="text-primary underline underline-offset-2">倉敷のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kurume/" className="text-primary underline underline-offset-2">久留米のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/maebashi/" className="text-primary underline underline-offset-2">前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選</Link>
          </li>
          <li>
            <Link href="/area/matsue/" className="text-primary underline underline-offset-2">松江のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/matsuyama/" className="text-primary underline underline-offset-2">松山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/mito/" className="text-primary underline underline-offset-2">水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選</Link>
          </li>
          <li>
            <Link href="/area/miyazaki/" className="text-primary underline underline-offset-2">宮崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/morioka/" className="text-primary underline underline-offset-2">盛岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagano/" className="text-primary underline underline-offset-2">長野のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagasaki/" className="text-primary underline underline-offset-2">長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/naha/" className="text-primary underline underline-offset-2">那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nara/" className="text-primary underline underline-offset-2">奈良のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/niigata/" className="text-primary underline underline-offset-2">新潟のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/oita/" className="text-primary underline underline-offset-2">大分のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/okayama/" className="text-primary underline underline-offset-2">岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/otsu/" className="text-primary underline underline-offset-2">大津のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/saga/" className="text-primary underline underline-offset-2">佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2">相模原のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/saitama/" className="text-primary underline underline-offset-2">さいたまのゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sakai/" className="text-primary underline underline-offset-2">堺のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/takamatsu/" className="text-primary underline underline-offset-2">高松のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/takasaki/" className="text-primary underline underline-offset-2">高崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/tokushima/" className="text-primary underline underline-offset-2">徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/tottori/" className="text-primary underline underline-offset-2">鳥取のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/toyama/" className="text-primary underline underline-offset-2">富山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/tsu/" className="text-primary underline underline-offset-2">津のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/utsunomiya/" className="text-primary underline underline-offset-2">宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/wakayama/" className="text-primary underline underline-offset-2">和歌山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/yamagata/" className="text-primary underline underline-offset-2">山形のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/yamaguchi/" className="text-primary underline underline-offset-2">山口のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
        掲載情報は2026年8月16日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。ごみの分別区分・粗大ごみの申し込み方法・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式案内をご確認ください。
      </p>
    </article>
  );
}
