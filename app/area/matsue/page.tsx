import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/matsue/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

export const metadata: Metadata = {
  title: "松江のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "松江でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、高齢世帯の生前整理をきょうだいで共有できる記録として残しながら進める段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "松江のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "松江でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。高齢世帯の生前整理を、きょうだい間で共有できる記録を残しながら進める方法も解説します。",
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
      "対応エリアは全国47都道府県で、松江からも利用できます。相談・見積もりは無料です。きょうだいが何人かいる家では、誰か一人が決めて話を進めると、あとから経緯を説明しづらくなります。作業内容と金額が書面で並ぶ見積もりを複数取っておけば、その書面をそのまま全員に見せられ、なぜその業者を選んだかを説明する手間が省けます。審査を通過した業者に絞って比較できる仕組みは、家族の合意を取りながら進めたい場面で使いやすい選択肢です。",
    ],
    recommend: [
      "生前整理・遺品整理を伴う家財の整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "見積もりの書面を家族で共有して決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（松江対応）" },
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
      "対応エリアは日本全国で、松江の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。生前整理を家族で進める場合、一度に家全体を片付けるより、押し入れ一つ、部屋一つと区切って何度かに分ける方が、本人にも家族にも負担が小さくなります。作業の単位ごとに料金を確かめながら予約できる仕組みは、この進め方と相性がよい選択肢です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "部屋単位で区切って少しずつ頼みたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月21日時点）。全国の登録業者から選ぶ仕組みのため、松江の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。高齢の親が同席する、作業は午前中だけにしたい、途中で休憩を入れたい——といった条件をチャットで先に伝えられるのが強みです。やり取りが文字で残るため、遠方のきょうだいにそのまま転送でき、条件を共有する手間が減ります。誰がどんな条件で相談したかが後から追えることは、家族で進める整理では実務的な利点になります。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "やり取りを文字で残して家族に共有したい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（松江対応）" },
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
      "受付は電話・LINEに対応しています。高齢の親が住む家に手を入れていくと、家財を減らす話と同時に、水まわりの不具合や庭木の手入れ、住まいの傷みなど、別の相談も出てきます。誰がどの業者に連絡したかが分からなくなると、きょうだいの間で同じ手配を重ねてしまうこともあります。カテゴリをまたいで対応業者を探せる紹介型のサービスは、窓口を一つにまとめて順に手配していきたいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "手配の窓口を一つにまとめておきたい人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、松江で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。生前整理では、物を減らしたあとの部屋をどう使うかまで決まっていることが多く、寝室を一階へ移す、使っていない部屋を空けるといった話につながります。家具を出したあとの床や窓まわりを整えるところまで手配できると、次の使い方に移るまでの時間を短くできます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "松江対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月21日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（松江から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 誰が何を担当するかを、最初に一度だけ決めて共有する",
    b: "家族で進める整理でこじれやすいのは、役割がはっきりしないまま作業が始まる場合です。業者とやり取りする人、当日に立ち会う人、費用の分担を取りまとめる人を、最初に決めて全員に伝えておきましょう。近くに住む人が実務を担うことが多くなりますが、その分の負担を全員が把握しているかどうかで、あとの受け止め方が変わります。決めた内容は口頭ではなく、文字で残しておくのが要点です。",
  },
  {
    t: "② 部屋ごとに写真を撮り、全員が同じ画面を見られるようにする",
    b: "遠方のきょうだいは、家の中の状況を言葉でしか知りません。押し入れの中、納戸、物置の様子を部屋ごとに撮っておき、家族の共有アルバムやメッセージのやり取りに置いておきましょう。同じ画面を見ながら話せば、量の感覚がそろい、判断も早くなります。あとから何がどこにあったかを確認したいときにも、この記録が役に立ちます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。高齢の親が同席する作業では、休憩の取り方や、本人に確認しながら進める場面の扱いも相談しておきたい点です。賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかを確認しておくと安心です。",
  },
  {
    t: "④ 見積もりと決めたことを、家族が読める形にそろえて比較する",
    b: "見積もりが届いたら、金額だけでなく作業範囲の書かれた部分を家族に共有します。どの範囲でいくらなのかが全員に伝われば、費用の分担の話も進めやすくなります。決定したこと、保留にしたことも、日付とあわせて短く書き残しておきましょう。みんなの遺品整理やミツモアの一括見積もりで複数社を比べ、総額と内訳に納得してから依頼を確定します。",
  },
];

const faqs = [
  {
    q: "松江のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、サイト上の料金表示や届いた見積もりで確認します。家族で費用を分担する場合は、総額だけでなく作業範囲の内訳が書かれた見積もりを取り、そのまま全員に共有できる形にしておくと話が早く進みます。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "きょうだいが遠方にいて集まれません。どうやって情報を合わせればいいですか？",
    a: "現地にいる人が見たままを共有できる形を、先につくっておくのが早道です。部屋ごとに写真を撮って共有アルバムに置き、そこに短い説明を添えておきます。押し入れや納戸のように普段は見えない場所ほど、写真の効果があります。そのうえで、業者とのやり取りは文字で残るものを選び、届いた見積もりはそのまま転送してください。集まれる日を待って話を進めようとすると、判断が何か月も止まります。同じ情報を見られる状態さえつくれば、実際に集まるのは決定の場面だけで足ります。",
  },
  {
    q: "何をどこまで記録しておけばいいですか？",
    a: "細かく書き残す必要はありません。日付、その日に決めたこと、保留にしたこと、次にやること。この四つを短く残しておけば十分です。家族のメッセージのやり取りに書き込む形でも構いません。重要なのは、決めた内容よりも、なぜそう決めたかが後から分かることです。あとになって話が食い違ったとき、記録があれば経緯をたどれます。また、貴重品や重要な書類が見つかった場合は、どこで見つかり、今どこにあるのかを必ず記録してください。物の移動先が分からなくなることが、家族の間で最も問題になりやすい点です。",
  },
  {
    q: "形見分けの希望や、大切な物の置き場所はどう共有すればよいですか？",
    a: "本人が元気なうちに、誰に何を渡したいかを聞いて書き留めておくのが確実です。すべてを一度に決めようとすると負担が大きいので、片付けを進めるなかで話題に出た物から順に、少しずつ書き足していく形で構いません。書いたものは家族全員が読める場所に置きます。あわせて、通帳や証書、鍵といった大切な物がどこにあるかも、本人と一緒に確認して記録しておきましょう。置き場所を移した場合は、その都度書き換えます。誰か一人だけが知っている状態にしておくと、その人が対応できないときに家族全体が動けなくなります。",
  },
  {
    q: "松江市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集日まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。高齢の親だけで指定場所まで運ぶのは難しいことが多いため、家族が集まれる日と収集日を合わせられるかが判断の目安になります。日程を合わせられるなら、費用を抑える手段として有力です。一方、一度にまとめて出す場合や、重い家具を動かす必要がある場合は、搬出まで任せられる業者の方が現実的です。申し込み方法・料金・対象品目は松江市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは松江でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも松江の対応は確認できませんでした。本記事では、松江から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaMatsuePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "松江のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "松江でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "松江のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#matsue5",
      label: "1｜松江のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "松江から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#matsue-jijo", label: "2｜松江で片付け業者の利用を検討する場面" },
    { href: "#kyodai-kyoyu", label: "3｜きょうだいが同じ情報を見られる状態をつくる" },
    { href: "#kiroku-nokosu", label: "4｜決めたことを記録に残して後から確認できるようにする" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜松江の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "松江の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          松江のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["松江", "ゴミ屋敷片付け", "不用品回収", "生前整理の家族共有", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「近くに住む自分ばかりが動いていて、ほかのきょうだいには状況が伝わっていない」「あとから聞いていないと言われ、話が振り出しに戻った」「大事な物をどこにしまったのか、本人以外は誰も知らない」——松江で親の生前整理を進めている方から、こうした声が聞かれます。家族で進める片付けが止まる原因は、作業の量よりも、情報の持ち方にあります。見た人と見ていない人がいる状態のまま話を進めると、決めたことが後から覆り、そのたびに最初へ戻ります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、松江から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月21日時点）をもとに比較しました。あわせて、きょうだいが同じ情報を見られる状態をつくる方法と、決めたことを記録に残して後から確認できるようにする手順もまとめています。業者選びの参考にしてください。
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
      <H2 id="matsue5" num="1">松江のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        松江から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月21日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで松江の対応を確認できなかったため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        松江から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、松江から利用できる5社の一覧です。いずれも押し入れ一つ、部屋一つといった範囲を区切った依頼から相談できます。
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

      {/* 2｜松江の事情 */}
      <H2 id="matsue-jijo" num="2">松江で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        松江で生前整理の相談が出てくるのは、親だけで暮らす家に手を入れ始めるときです。荷物が増えて動線が狭くなってきた、二階に上がらなくなったので一階だけで暮らせるようにしたい、といったきっかけから話が始まります。このとき、実務を担うのは近くに住む家族になることが多く、ほかのきょうだいは離れた土地で暮らしているという形が一般的です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ここで起きやすいのが、情報の偏りです。現地にいる人は押し入れの中まで見て量を把握していますが、離れている人は電話で聞いた話しか知りません。同じ物について話しているつもりでも、頭の中にある景色が違えば、判断もかみ合いません。結果として、進めた側は勝手に決めたと受け取られ、離れている側は蚊帳の外に置かれたと感じる。作業そのものより、この行き違いが片付けを止めます。物量が多く一度に運び出す必要があるとき、重い家具を動かす人手がないときは、業者・サービスが選択肢になります。少量ずつ運べる物は、後述する自治体の収集の方が費用を抑えられます。生前整理全体の進め方は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理ガイド</Link>、住まいの安全面は<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護しやすい住環境の整理ガイド</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="kyodai-kyoyu" num="3">きょうだいが同じ情報を見られる状態をつくる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家族で進める整理の最初の作業は、物を動かすことではなく、全員が同じものを見られる状態をつくることです。方法は簡単で、部屋ごとに写真を撮り、家族の共有アルバムやメッセージのやり取りに置いておくだけです。撮る場所は、居間や寝室のような目に見える部屋よりも、押し入れの中、納戸、物置、階段下といった、普段は扉が閉まっている場所を優先します。離れて暮らす家族が想像しづらいのは、まさにこうした見えない場所だからです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        写真があると、話の進み方が変わります。多いか少ないかという感覚の話ではなく、この棚の分をどうするかという具体的な相談になり、離れていても判断に参加できます。あわせて、間取りに部屋の名前を書いた簡単な図を用意し、どの部屋から手を付けるかを示しておくと、進み具合が全員に伝わります。押し入れやクローゼットの進め方は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理ガイド</Link>、衣類は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理ガイド</Link>、写真や書類は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理ガイド</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        業者とのやり取りも、共有できる形を選んでおくと後が楽になります。チャットで相談できるサービスであれば、届いた見積もりや条件のやり取りをそのまま転送でき、口頭で伝え直す手間がなくなります。全員が集まれる日を待って話を進めようとすると、判断が何か月も止まります。同じ情報を見られる状態さえつくれば、実際に集まるのは決定の場面だけで足ります。
      </p>

      {/* 4 */}
      <H2 id="kiroku-nokosu" num="4">決めたことを記録に残して後から確認できるようにする</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家族の間で話がこじれるのは、決めた内容そのものより、なぜそう決めたかが分からなくなったときです。記録といっても、細かく書き残す必要はありません。日付、その日に決めたこと、保留にしたこと、次にやること。この四つを短く残すだけで十分です。家族のメッセージのやり取りに書き込む形でも構いません。要点は、あとから読み返せる場所に置いておくことと、全員が読めることの二つです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        とくに記録しておきたいのが、物の移動先です。貴重品や重要な書類、鍵、印章の類いは、見つかった場所と、今どこに置いてあるかを必ず書いておきましょう。誰か一人だけが知っている状態にしておくと、その人が対応できないときに家族全体が動けなくなります。形見分けの希望も、本人から聞けたときに少しずつ書き足していくと、あとで迷いません。すべてを一度に決めようとせず、片付けを進めるなかで話題に出た物から書き留めていく形で構いません。形見分けの進め方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">形見分けの進め方ガイド</Link>、書類の扱いは<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理ガイド</Link>、パソコンや携帯の中の記録は<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理ガイド</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        記録は、家族の間の確認だけでなく、費用の話にも効きます。どの範囲をいくらで頼んだのかが残っていれば、分担の相談は数字の話として進みます。逆に、誰がいつ何を払ったかがあいまいなままだと、金額の大小に関係なく気持ちのしこりが残ります。決めたことを書き残す習慣は、片付けが終わったあとの家の使い方を話し合う段階でも役に立ちます。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        松江市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。高齢の親だけで指定場所まで運ぶのは難しいことが多いため、家族が集まれる日と収集日を合わせられるかどうかが、使えるかどうかの分かれ目になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、一度にまとめて出す場合や、重い家具を動かす必要がある場合は、搬出まで任せられる業者の方が現実的です。家電リサイクル法の対象品目のように粗大ごみとして出せない物もあるため、対象外品目の処分先は先に調べておきましょう。どちらを使ったかも、費用とあわせて記録に残しておくと、次に同じ判断をするときの目安になります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        松江で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">松江の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜同じ情報と記録があれば、家族の判断はかみ合う</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        松江から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。生前整理・遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、押し入れ一つ・部屋一つと区切って頼むならくらしのマーケット、やり取りを文字で残して家族に共有するならミツモア、手配の窓口を一つにまとめるなら生活110番、家具を出したあとの清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        家族で進める片付けが止まるのは、作業が大変だからではなく、見た人と見ていない人がいるからです。押し入れや納戸の中まで写真に撮って共有し、業者とのやり取りは転送できる形にしておく。決めたこと、保留にしたこと、次にやることを日付とあわせて短く書き残し、貴重品の移動先は必ず記録する。この二つを続けていれば、離れて暮らすきょうだいも同じ材料で判断でき、あとから話が振り出しに戻ることはありません。作業の範囲と現地の条件をそろえたうえで複数社の見積もりを比べ、総額と内訳に納得してから依頼してください。
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
            <Link href="/area/tokushima/" className="text-primary underline underline-offset-2">徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
