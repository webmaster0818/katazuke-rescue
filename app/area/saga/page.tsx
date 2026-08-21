import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/saga/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

export const metadata: Metadata = {
  title: "佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "佐賀でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、納屋の解体まで見据えて中身の整理と建物の解体を分けて考える段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "佐賀でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。納屋の解体を見据えた段階的な整理と、農作業用品の仕分け方も解説します。",
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
      "対応エリアは全国47都道府県で、佐賀からも利用できます。相談・見積もりは無料です。代々受け継がれてきた家の整理では、日常の家財のほかに、仏具や古い道具、来歴の分からない品が出てきます。こうした品の扱いに慣れた業者かどうかは、依頼先を選ぶうえで大きな判断材料になります。遺品整理士認定協会と提携し、審査を通過した業者から複数の見積もりを取れる仕組みは、任せる相手を見極めたいときの目安になります。",
    ],
    recommend: [
      "生前整理・遺品整理を伴う家財の整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "古い道具や仏具を含む整理を頼みたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（佐賀対応）" },
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
      "対応エリアは日本全国で、佐賀の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。母屋・納屋・物置と建物が分かれている家では、すべてを一度に頼むより、建物ごとに区切って依頼する方が計画を立てやすくなります。作業の単位ごとに料金を確かめながら予約できる仕組みは、この進め方と相性がよい選択肢です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "建物ごとに区切って依頼したい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月21日時点）。全国の登録業者から選ぶ仕組みのため、佐賀の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。納屋一棟分の中身を出したい、農機具や工具が多いので買取もあわせて相談したい、といった条件をチャットで先に伝えられるのが強みです。敷地内にトラックを入れられるか、建物の中まで台車が入るか、床が抜けそうな箇所はないかといった前提は、業者によって受け方が変わります。受けられる条件に合う業者だけを候補にできれば、作業当日に想定と違ったという事態を避けられます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "納屋や農機具の対応可否を先に確認したい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（佐賀対応）" },
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
      "受付は電話・LINEに対応しています。敷地の広い家では、納屋や物置の中身だけでなく、伸びた庭木、屋根や雨どいの傷み、害虫といった別種の困りごとが同時に見つかることがあります。カテゴリをまたいで対応業者を探せる紹介型のサービスは、見つかった課題を一つの窓口から順に手配していきたいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "不用品回収と敷地まわりの困りごとをまとめて相談したい人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、佐賀で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。長く物を置いていた納屋や部屋は、中身を出したあとに土ぼこりやくもの巣、床や壁の傷みが目に見えるようになります。空いた場所を別の用途で使い直すのであれば、搬出と清掃をまとめて手配できると、次の使い方に移るまでの時間を短くできます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "佐賀対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月21日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（佐賀から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 母屋・納屋・物置を一棟ずつ見て、量と状態を把握する",
    b: "敷地内に建物が複数あるときは、まとめて考えず一棟ずつ確認します。中に入る前に、床の傷みや雨漏りの跡、扉が開くかどうかを見て、安全に入れるかを確かめましょう。中に入れたら、大きな物の点数と、棚や箱がどれだけ積まれているかをおおまかに数えます。写真を撮っておけば、見積もりの相談で口頭では伝わりにくい状態をそのまま見てもらえます。",
  },
  {
    t: "② 残す物の移動先を、片付けを始める前に決める",
    b: "納屋を空にする作業でつまずくのは、出した物の行き先が決まっていない場合です。母屋の空き部屋、新しく置く物置、貸倉庫など、実際に置ける場所を先に決めておきましょう。移し先の広さに収まる分だけを残す、と決めてしまえば、残す物の量にも上限ができます。行き先を決めずに出すと、別の建物が新しい納屋になるだけで終わります。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。納屋や物置の作業では、傷んだ床や梁に人が乗る場面があり、重い機械を敷地内で動かすこともあります。賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかを確認しておくと安心です。",
  },
  {
    t: "④ 建物ごとに範囲を区切って見積もりを取り、比較する",
    b: "母屋と納屋をまとめて依頼するのか、納屋だけを先に空けるのかで、金額も日程も変わります。建物ごとに範囲を区切って見積もりを出してもらえば、どこから手を付けるかを費用で判断できます。敷地内に車を停められるか、搬出に使える通路の幅はどれくらいかも、あわせて伝えておきましょう。みんなの遺品整理やミツモアの一括見積もりで複数社を比べ、総額と内訳に納得してから依頼を確定します。",
  },
];

const faqs = [
  {
    q: "佐賀のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、サイト上の料金表示や届いた見積もりで確認します。母屋に加えて納屋や物置まで含める場合は、点数も重量も増えるため、建物ごとに範囲を区切って見積もりを出してもらうと比較しやすくなります。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "納屋を解体する予定です。中の物も解体業者に任せられますか？",
    a: "任せられる場合もありますが、業者によって扱いが異なります。解体工事の見積もりに中の物の処理が含まれているのか、別料金なのか、そもそも扱えない物があるのかを、契約の前に書面で確認してください。中身が入ったままだと解体側も量を見積もりにくく、金額に幅が出やすくなります。先に中身を空にしてから解体を頼む方法と、まとめて任せる方法の両方で見積もりを取り、総額を比べて決めるのが確実です。なお、残す物がある場合は、解体の前に必ず取り出しておきましょう。",
  },
  {
    q: "使わなくなった農作業用品や機械は、まとめて回収してもらえますか？",
    a: "点数が多くても回収に対応する業者はありますが、品目によって扱いが変わります。エンジンのついた機械は燃料の抜き取りが必要かを確認し、刃のある道具は刃を包んでから出します。肥料や薬剤の残った容器は家庭のごみとして自己判断で捨てず、購入した販売店や地域の相談先に扱いを確かめてください。また、事業として使っていた物は家庭の不用品と扱いが異なる場合があります。状態のよい機械や工具は買取の対象になることもあるため、回収と買取の両方に対応できるかを最初に聞いておくと、搬出を一度で済ませられます。",
  },
  {
    q: "母屋と納屋、どちらから手を付けるべきですか？",
    a: "納屋や物置から始めるのが進めやすい順番です。母屋は今も使っている物が多く、判断に時間がかかるうえ、片付けの途中は生活がしにくくなります。納屋は日常の生活に影響しないため、多少散らかった状態が続いても困りません。さらに、納屋を先に空けておくと、母屋から出した物の一時的な置き場としても使えます。ただし、納屋の中に残す物があるなら、その移動先を先に決めておく必要があります。決めないまま始めると、母屋との間で物が行き来するだけになります。",
  },
  {
    q: "佐賀市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集日まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。点数が少なく、軽トラックなどで指定場所まで運べるなら、自治体の収集で費用を抑えられます。一方、納屋一棟分をまとめて空ける場合は、点数も重量も多く、運び出しまで任せられる業者が現実的です。加えて、農業に使っていた機械や事業で使っていた物は、家庭の粗大ごみとして扱えない場合があります。対象品目や申し込み方法は佐賀市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは佐賀でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも佐賀の対応は確認できませんでした。本記事では、佐賀から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaSagaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "佐賀でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#saga5",
      label: "1｜佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "佐賀から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#saga-jijo", label: "2｜佐賀で片付け業者の利用を検討する場面" },
    { href: "#naya-kaitai", label: "3｜納屋の解体を見据えるなら「中身の整理」と「建物の解体」を分けて考える" },
    { href: "#nougu-shiwake", label: "4｜農作業用品は「使う人がいるか」で残す・譲る・手放すに分ける" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜佐賀の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "佐賀の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["佐賀", "ゴミ屋敷片付け", "不用品回収", "納屋・農作業用品の整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「母屋のほかに納屋と物置があって、どこから手を付ければいいのか分からない」「農業をやめてから使わなくなった道具が、そのまま残っている」「いずれ納屋を解体したいが、中身が入ったままで話が進まない」——佐賀で敷地の広い戸建てを受け継いだ方から、こうした相談が聞かれます。母屋だけを片付ける場合と違い、納屋や物置を含む家の整理は、そもそも何がどれだけあるのかが分からないところから始まるのが特徴です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、佐賀から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月21日時点）をもとに比較しました。あわせて、納屋の解体まで見据えたときに中身の整理と建物の解体を分けて考える理由と、農作業に使ってきた道具を残す・譲る・手放すに仕分ける手順もまとめています。業者選びの参考にしてください。
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
      <H2 id="saga5" num="1">佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        佐賀から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月21日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで佐賀の対応を確認できなかったため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        佐賀から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、佐賀から利用できる5社の一覧です。いずれも母屋だけ、納屋だけといった建物単位の依頼から相談できます。
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

      {/* 2｜佐賀の事情 */}
      <H2 id="saga-jijo" num="2">佐賀で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        佐賀では、敷地の中に母屋と納屋、物置、車庫が並ぶ住まいが珍しくありません。世代を越えて使われてきた建物には、農作業に使った道具、季節の行事で使う物、建材の余り、古い家具といった、来歴の分からない物が積み重なっています。母屋の中は日々使っているので状況が分かりますが、納屋や物置は年に数回しか開けないため、何がどれだけ入っているのかを誰も把握していない、という状態になりがちです。片付けの計画が立たない理由の多くは、この量が読めないという点にあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        農業を続けてきた家では、使わなくなった機械や道具が、手放す機会のないまま残ることもあります。大きくて重い物が多く、家族だけで運び出すのは現実的ではありません。また、建物が古くなると、雨漏りや床の傷みで中に入ること自体が危ない場合もあります。量が多いとき、大型の物を動かせないとき、建物の状態に不安があるときは、搬出まで任せられる業者・サービスが選択肢になります。少量ずつ自分で運べる物は、後述する自治体の収集の方が費用を抑えられます。
      </p>

      {/* 3 */}
      <H2 id="naya-kaitai" num="3">納屋の解体を見据えるなら「中身の整理」と「建物の解体」を分けて考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        納屋や物置をいずれ解体したい場合でも、最初から解体の話に進むと段取りが混乱します。建物を壊す工事と、中に入っている物を運び出す作業は、扱う業者も費用の考え方も別だからです。中身が入ったままの建物は、頼む側も引き受ける側も見通しが立てにくく、見積もりの前提を揃えにくくなります。先に中身を空にしておけば、建物そのものの条件だけで比較でき、話が進みやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        順番としては、中に何がどれだけあるかを把握する、残す物の移動先を先に決める、手放す物を回収してもらう、空になった状態で解体の相談をする、という四段階に分けると整理しやすくなります。とくに移動先を決める段階を飛ばすと、納屋から出した物が母屋や別の物置へ移るだけになり、問題が場所を変えて残ります。移し先は、母屋の空いている部屋、新しく置く小さな物置、貸倉庫など、実際に置ける場所を具体的に決めておきましょう。物置や納屋を空にする手順は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>、車庫まわりは<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">ガレージ・車庫の片付けガイド</Link>、一時的に預ける方法は<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルーム活用ガイド</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、解体を請け負う業者が、中に残った物もあわせて処理できるとする場合もあります。ただし、扱える物の種類や費用の含み方は業者によって異なります。どこまでが解体工事の範囲で、どこからが別料金になるのかを、必ず見積もりの段階で書面にして確認してください。中身を先に片付けた方が安くなるのか、まとめた方が安くなるのかは、物の量と種類によって変わるため、両方の見積もりを取って比べるのが確実です。
      </p>

      {/* 4 */}
      <H2 id="nougu-shiwake" num="4">農作業用品は「使う人がいるか」で残す・譲る・手放すに分ける</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        農作業に使ってきた道具は、量が多いだけでなく、まだ使える状態の物が混ざっているところが難しい点です。使えるかどうかで分けようとすると、ほとんどが残す側に入ってしまい、量が減りません。基準をこれから使う人がいるかどうかに置き換えると、判断が進みます。自分の家で使う予定があるか、近くに引き取り手があるか、どちらもなければ手放す、という三つの分け方です。使う予定のある物だけを残すと決めれば、納屋を空にする作業は一気に現実的になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        状態のよい機械や工具は、買取の対象になることがあります。処分を決める前に査定を挟むかどうかは、点数と手間との兼ね合いで判断しましょう。回収と買取を同じ業者に頼めれば、搬出は一度で済みます。一方、燃料の入った機械、刃のある道具、肥料や薬剤の残った容器は、そのままでは扱えないことがあります。燃料は抜き取りが必要かを事前に確認し、刃物は包んでから出します。薬剤の類いは家庭のごみとして自己判断で捨てず、購入した販売店や地域の相談先に扱いを確かめてください。買取の併用は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ買取併用ガイド</Link>、屋外に置いた物の処分は<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品処分ガイド</Link>、分別に迷う物は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみのガイド</Link>で解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        佐賀市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。ただし、納屋から出てくる物には、家庭のごみとして出せる物とそうでない物が混ざります。事業として使っていた物や、農業に使っていた機械などは、家庭の粗大ごみとして扱えない場合があるため、出す前に確認が必要です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        量が少なく、指定場所まで運べるなら、自治体の収集は費用の面で有利です。一方、納屋一棟分をまとめて空けるような作業では、点数も重量も多く、運び出しまで任せられる業者の方が現実的です。家電リサイクル法の対象品目のように粗大ごみとして出せない物もあるため、対象外品目の処分先は先に調べておきましょう。申し込み方法・料金・対象品目、そして家庭ごみとして出せる範囲は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        佐賀で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">佐賀の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜中身を先に空にすれば、納屋のこれからを決められる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        佐賀から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。生前整理・遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、建物ごとに区切って頼むならくらしのマーケット、納屋や農機具の対応可否を先に確かめるならミツモア、業者探しから手配まで任せるなら生活110番、搬出後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        敷地に建物が複数ある家の整理は、全体をまとめて考えるほど動かなくなります。一棟ずつ量と状態を確かめ、残す物の移動先を先に決め、手放す物を運び出す。そのうえで、空になった建物について解体の相談に進む。この順番なら、解体の見積もりも取りやすくなり、費用の比較もできます。農作業用品は、これから使う人がいるかどうかで残す・譲る・手放すに分け、燃料や刃物、薬剤の類いは扱いを確かめてから出しましょう。建物ごとに範囲を区切って複数社の見積もりを比較し、総額と内訳に納得してから依頼してください。
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
        掲載情報は2026年8月21日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
