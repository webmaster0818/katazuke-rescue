import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/hamamatsu/";
const UPDATED = "2026年9月8日";
const UPDATED_ISO = "2026-09-08";

export const metadata: Metadata = {
  title: "浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "浜松でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、自家用車で運べる分は自己搬入し運べない大物だけ業者に頼む組み合わせ方、楽器・オーディオ・趣味の道具を買取に回す物と回収に出す物に切り分ける考え方まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "浜松でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。自己搬入と業者の組み合わせ方、趣味の道具の買取と回収の切り分けも解説します。",
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
      "対応エリアは全国47都道府県で、浜松からも利用できます。相談・見積もりは無料です。親の家財を整理する場合、自分たちで運べる物は車で処理施設に持ち込み、家具や楽器のような大物だけを業者に頼みたい、という進め方を考える家族は少なくありません。遺品整理を専門とする審査済み業者の中から、「業者に頼む物」を絞り込んだ範囲で見積もりを比較できるため、自力で減らしたあとの残りをどこに任せるか迷ったときの最初の相談先に向いています。",
    ],
    recommend: [
        "遺品整理・生前整理を伴う実家の家財整理を頼みたい人",
        "審査を通過した業者の中から選びたい人",
        "自分で運べない大物だけに絞って見積もりを比較したい人",
        "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（浜松対応）" },
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
      "対応エリアは日本全国で、浜松の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。自分で運べる物は車で持ち込み、重い家具や大型の家電だけを頼みたい、というように、必要な部分だけを切り出して依頼したい場面と相性のよいサービスです。その回の物量に合ったプランを選べるため、自己搬入で減らしたあとの残りを頼む進め方とも組み合わせやすくなります。",
    ],
    recommend: [
        "口コミと評価を見て自分で業者を選びたい人",
        "予約前に料金の目安を把握しておきたい人",
        "大型家具の搬出だけを切り出して頼みたい人",
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
      "対応エリアは全国47都道府県です。「ピアノや電子オルガンがあるので、回収できるか、買取に回せるか先に知りたい」「オーディオや工作道具のように値が付きそうな物と、処分する物を分けて見積もってほしい」といった依頼内容の事情を、チャットで先に伝えたうえで見積もりを比較できるのが強みです。買取の可否や品目に相談したい点がある片付けで、条件のかみ合う業者を浜松で効率よく絞り込みたい人に向いています。",
    ],
    recommend: [
        "複数社の見積もりを一度に集めて比較したい人",
        "買取の可否や回収できる品目を相談してから決めたい人",
        "費用の相場観を先につかみたい人",
        "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（浜松対応）" },
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
      "受付は電話・LINEに対応しています。自分たちで運べる分を減らしたあと、残った大物の搬出や、空いた部屋の清掃、住まいの手入れが必要になることも少なくありません。まず電話やLINEで状況を伝えて手配まで任せられるため、業者を探して回る時間が取れない人や、何から頼めばよいか整理が付いていない段階の相談先に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、浜松で利用する場合は、浜松に対応する業者をサイト内で検索して選ぶ使い方になります。楽器やオーディオ、工作道具が長く置かれていた部屋は、機材の裏や棚の奥にほこりがたまりやすく、片付けのあとに清掃まで済ませておきたいものです。片付けのあとの清掃まで組み合わせて依頼先を探したいときに、住まい関連の作業をあわせて検索できるのが便利な場面です。",
    ],
    recommend: [
        "不用品回収とクリーニングをまとめて探したい人",
        "出店型マーケットで料金を見ながら業者を選びたい人",
        "口コミを確認してから予約したい人",
        "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "浜松対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月16日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（浜松から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 全体量を書き出し、「自分で運べる物」と「業者に頼む物」に分ける",
    b:
      "片付けの出発点は、部屋ごとに中の様子が分かる写真を撮り、「何がどこにどれくらいあるか」をリスト化したうえで、自家用車で運べる物と、大きさや重さの都合で業者に頼む物を分けることです。自己搬入の受付条件や対象品目は自治体ごとに異なるため、家のある市の公式サイトで確認します。大型の家具・家電・楽器は品名と寸法を控えておくと、業者の見積もりにそのまま使えます。",
  },
  {
    t: "② 楽器・オーディオ・趣味の道具は、買取に回す物と回収に出す物に分ける",
    b:
      "楽器やオーディオ、工作道具、コレクション品のように、人によっては値が付く物は、片付け業者の回収に出す前に買取査定に回せるかを検討します。型番や状態が分かる写真を撮り、付属品や説明書があればまとめておくと、査定の依頼がしやすくなります。値が付かなかった物や、査定を頼むほどではない物は回収のリストに戻し、業者に頼む分を確定させます。",
  },
  {
    t: "③ 許可・保険・古物商許可を確認する",
    b:
      "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無が判断材料になります。ピアノのような重量物や大型の家財を運び出す作業では、搬出時の事故に備えた賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも確認ポイントです。",
  },
  {
    t: "④ 業者に頼む物を確定させたうえで複数の見積もりを同じ条件で比べる",
    b:
      "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。自己搬入と買取で減らしたあとの「業者に頼む物」を確定させ、みんなの遺品整理やミツモアの一括見積もりを使って、同じ写真と同じ品目リストを各社に伝えて比較すると、金額の差が何によるものかが見えます。作業車を停められる場所や搬出経路もこの段階で伝え、金額と内訳に納得してから依頼を確定しましょう。",
  },
];

const faqs = [
  {
    q: "浜松のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "自分の車でごみ処理施設に持ち込むことはできますか？",
    a: "一般論として、自治体によっては家庭のごみや粗大ごみを処理施設に自分で持ち込める仕組みが用意されていますが、受付の有無・事前申し込みの要否・対象品目・受付時間・費用は自治体ごとに異なります。当サイトでは個別の条件を断定できないため、家のある市の公式サイトや窓口で確認してから計画を立ててください。自分で運べる物は持ち込み、運べない大物だけを業者に頼む組み合わせは、費用を抑えながら片付けを進める現実的な方法のひとつです。",
  },
  {
    q: "ピアノや電子オルガン、オーディオ機器も回収してもらえますか？",
    a: "ピアノのような重量物は、通常の不用品回収とは別に専門の搬出や運搬が必要になることがあり、対応の可否や料金の考え方は業者ごとに異なります。楽器やオーディオ機器は状態や型番によっては買取の対象になることもあるため、回収に出す前に買取査定に回せるかを検討するのが基本です。見積もりの際に品名・型番・設置場所を具体的に伝え、回収できる物とできない物、買取に回せる物の線引きを確認しておきましょう。",
  },
  {
    q: "趣味の道具やコレクションは、買取と回収のどちらに出せばよいですか？",
    a: "一般に、楽器・オーディオ・カメラ・工作道具・模型などは、状態や需要によって値が付くことがあり、まず買取査定に回して、値が付かなかった物を回収に出す順番が基本です。ただし査定の依頼には時間と手間がかかるため、量が多い場合は「値が付きそうな物だけ」を選んで査定に回し、それ以外は回収にまとめると全体の段取りが崩れません。買取と回収を同じ業者に頼む場合は、古物商許可の有無を確認しましょう。",
  },
  {
    q: "東京や名古屋の記事で見たゴミ屋敷専門パートナーズは浜松でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心のため、浜松は対応エリア外です。ゴミ屋敷専門パートナーズは関東・東海・関西対応と確認していますが、浜松の個別の対応可否までは当サイトでは確認できていません。本記事では、浜松から利用できる全国対応・検索型のサービスのみを紹介しています。市内の住所ごとの対応可否や出張費の扱いは、各社公式サイトまたは見積もりの際にご確認ください。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。自力で運べる少量なら自治体の収集や持ち込み、部屋ひとつ分のようにまとまった量や重量物なら業者への依頼が向いています。申し込み方法や対象品目は浜松市など自治体ごとに異なり、市域の広い自治体では区によって案内が分かれることもあるため、家のある市区町村の公式サイトでご確認ください。",
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

export default function AreaHamamatsuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "浜松でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#hamamatsu5",
      label: "1｜浜松のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "浜松から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#hamamatsu-jijo", label: "2｜浜松で片付け業者の利用を検討する場面" },
    { href: "#jiko-hannyu-kumiawase", label: "3｜自家用車で運べる分は自己搬入し、運べない大物だけを業者に頼む" },
    { href: "#gakki-shumi-kiriwake", label: "4｜楽器・オーディオ・趣味の道具は、買取に回す物と回収に出す物を切り分ける" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜浜松の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "浜松の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["浜松", "ゴミ屋敷片付け", "不用品回収", "自己搬入と業者の併用", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「車があるので小さい物は自分で運べるが、家具や楽器のような大物はどうにもならない」「親の趣味だったオーディオや工作道具が部屋を占めていて、捨ててよいのか売れるのか判断が付かない」「全部を業者に頼むと費用がかさみそうで、自分でできる部分は自分でやりたい」——浜松でこうした行き詰まりを感じている方は少なくありません。自家用車での移動が生活の前提になっている地域では、片付けも「自分で運ぶ」選択肢が現実的なぶん、どこまでを自力で減らし、どこからを業者に頼むかの線引きがあいまいなまま始めると、労力だけかかって大物が残る結果になりがちです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、浜松から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。あわせて、自家用車で運べる分は自己搬入し、運べない大物だけを業者に頼む組み合わせ方と、楽器・オーディオ・趣味の道具を買取に回す物と回収に出す物に切り分ける考え方もまとめています。業者選びの参考にしてください。
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
      <H2 id="hamamatsu5" num="1">浜松のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        浜松から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・お助けうさぎは関東圏が中心の対応エリアで浜松は対応外、名古屋版で紹介したゴミ屋敷専門パートナーズは関東・東海・関西が対応エリアですが浜松での個別の対応可否は当サイトでは確認できていないため、本記事のカードには浜松から確実に利用しやすい全国対応・検索型のサービスのみを掲載しています。各社の詳細は<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋版</Link>・<Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡版</Link>もあわせてご覧ください。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        浜松から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、浜松から利用できる5社の一覧です。
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

      {/* 2｜浜松の事情 */}
      <H2 id="hamamatsu-jijo" num="2">浜松で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        浜松は、静岡県の政令指定都市で、市域が複数の区に分かれ、中心市街地から郊外の住宅地、山あいの地域まで広い範囲を持つ街です。自家用車での移動が生活の前提になっている世帯が多く、一戸建てには駐車スペースや物置を備えた家が多いため、片付けの場面でも「自分の車で運ぶ」という選択肢が現実的に取れるのが特徴です。一方で、車で運べる物には限りがあり、婚礼家具やピアノ、大型の家電のような大物は結局残ってしまいます。また、楽器やオーディオ、工作道具、模型のような趣味の物が多い家では、「捨てる」以外の出口があるかどうかで、片付けの段取りと費用が大きく変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「小さい物は自分で運べるが、大物は家族では動かせない」「楽器やオーディオが値の付く物かどうか分からない」「全部を業者に頼むと費用がかさむので、自力で減らしてから頼みたい」という状況では、業者に頼む範囲を絞り込んだうえで、搬出から処分までまとめて任せられる片付け業者・サービスを検討する場面です。反対に、自力で指定場所まで運べる少量であれば、後述する自治体の粗大ごみ収集や持ち込みを使うほうが費用を抑えやすいのが一般的です。まずは全体量をつかみ、自分で運ぶ物と業者に頼む物の線を引くところから始めましょう。不用品のリストの作り方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>、処分ルートの全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="jiko-hannyu-kumiawase" num="3">自家用車で運べる分は自己搬入し、運べない大物だけを業者に頼む</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一般論として、自治体によっては家庭のごみや粗大ごみを処理施設に自分で持ち込める仕組みがあり、自家用車が使える世帯にとっては費用を抑える有力な選択肢です。ただし、受付の有無、事前申し込みの要否、対象品目、受付時間、費用、一度に持ち込める量などは自治体ごとに異なり、当サイトでは個別の条件を断定できません。家のある市の公式サイトや窓口で確認したうえで、「自分で持ち込む物」を決めるのが出発点です。自己搬入の考え方は<Link href="/jiko-hannyu-shobun/" className="text-primary underline underline-offset-2">ごみ処理施設への自己搬入</Link>で詳しく解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自己搬入と業者を組み合わせるコツは、最初に「業者に頼む物」を確定させることです。婚礼家具・ピアノ・大型の家電のように、車に積めない物や家族で動かせない物を先にリストにし、それ以外を自己搬入や自治体の収集に回します。業者に頼む分が確定すれば、見積もりの依頼内容も明確になり、金額の比較がしやすくなります。自力で減らす作業は体力を使うため、持ち込みの回数と日程に余裕を持たせ、業者の作業日はその後に設定しましょう。大型家具の処分の考え方は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>、自治体の収集と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>でまとめています。
      </p>

      {/* 4 */}
      <H2 id="gakki-shumi-kiriwake" num="4">楽器・オーディオ・趣味の道具は、買取に回す物と回収に出す物を切り分ける</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        楽器・オーディオ・カメラ・工作道具・模型のような趣味の物は、状態や需要によっては値が付くことがあり、「全部まとめて回収」に出してしまうと、手放したあとに惜しい思いをすることがあります。基本の順番は、まず買取査定に回せそうな物を選び出し、値が付かなかった物や査定を頼むほどではない物を回収のリストに戻す、という流れです。型番や状態が分かる写真を撮り、付属品や説明書があればまとめておくと、査定の依頼がしやすくなります。量が多い場合は「値が付きそうな物だけ」に絞って査定に回し、それ以外は回収にまとめると、全体の段取りが崩れません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ピアノのような重量物は、通常の不用品回収とは別に専門の搬出や運搬が必要になることがあり、対応の可否や料金の考え方が業者ごとに異なります。見積もりの際に品名・型番・設置場所（階数や搬出経路）を具体的に伝え、回収できる物とできない物、買取に回せる物の線引きを確認しておきましょう。楽器の処分と買取は<Link href="/gakki-shobun-kaitori/" className="text-primary underline underline-offset-2">楽器の処分・買取</Link>、ピアノや金庫の搬出は<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫の搬出</Link>、趣味のコレクションの整理は<Link href="/shumi-collection-seiri/" className="text-primary underline underline-offset-2">趣味・コレクションの整理</Link>、工具やDIY用品の扱いは<Link href="/kougu-diy-yohin-shobun/" className="text-primary underline underline-offset-2">工具・DIY用品の処分</Link>、買取と回収を併用する考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ買取の併用</Link>で解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        浜松市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目のように、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目・出し方は自治体ごとに異なり、市域の広い自治体では区によって案内が分かれることもあるため、必ずお住まいの市区町村の公式サイトでご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自力で運べる少量なら自治体の収集や持ち込み、ピアノや婚礼家具のような重量物や部屋ひとつ分のようにまとまった量なら業者、という使い分けが基本形です。申し込みから収集までの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>、希望日が取れないときの対処は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの予約が取れないときの対処</Link>、ごみ出しのルールに迷ったときの相談先は<Link href="/gomidashi-rule-soudan/" className="text-primary underline underline-offset-2">ごみ出しルールの相談先</Link>で解説しています。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で確認できます。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        浜松で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">浜松の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜自分で運ぶ物と業者に頼む物を分ければ、費用も労力も無駄にならない</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        浜松から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。大物に絞った遺品整理を審査済み業者で比べるならみんなの遺品整理、重い家具や家電だけを切り出して頼むならくらしのマーケット、買取の可否や品目を相談しながら見積もりを比べるならミツモア、業者探しから手配まで任せるなら生活110番、片付け後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        自家用車が使える地域の片付けは、自己搬入の条件を市の公式サイトで確認したうえで、「自分で運ぶ物」と「業者に頼む物」を先に分けるところから始めると、費用と労力の両方を抑えられます。楽器・オーディオ・趣味の道具は買取に回す物を先に選び出してから回収のリストを確定させること、ピアノのような重量物は搬出条件を具体的に伝えること、複数の見積もりを同じ条件で比べて総額に納得してから依頼することが、後悔を防ぐ共通のポイントです。
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
            <Link href="/area/funabashi/" className="text-primary underline underline-offset-2">船橋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/gifu/" className="text-primary underline underline-offset-2">岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hachioji/" className="text-primary underline underline-offset-2">八王子のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
