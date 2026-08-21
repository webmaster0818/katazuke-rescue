import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/kochi/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

export const metadata: Metadata = {
  title: "高知のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "高知でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、大雨や浸水のあとに片付けを進めるときの一般的な順番と注意点まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "高知のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "高知でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。浸水したあとの片付けを、記録を残してから進める一般的な考え方も解説します。",
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
      "対応エリアは全国47都道府県で、高知からも利用できます。相談・見積もりは無料です。水が入った家の片付けでは、残す物と手放す物の線引きを短い期間で決めなければならず、家族だけで判断を重ねるのは負担が大きくなります。作業内容と金額が書面で並ぶ見積もりを複数取れば、どこまでを業者に任せ、どこからを自分たちで進めるかを落ち着いて決められます。審査を通過した業者に絞って比較できる紹介サービスは、急ぎながらも依頼先を確かめたいときに使いやすい選択肢です。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "任せる範囲を家族で相談してから決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（高知対応）" },
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
      "対応エリアは日本全国で、高知の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。片付けと清掃を並行して進めたい時期は、頼みたい内容が一つに収まりません。不用品の回収、ハウスクリーニング、消臭といったカテゴリごとに料金と口コミを見ながら選べる仕組みは、必要な作業を一つずつ手配していきたい場面に向いています。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "回収と清掃を分けて手配したい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月21日時点）。全国の登録業者から選ぶ仕組みのため、高知の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。一階部分の家財を運び出したい、濡れた畳と家具を分けて処理してほしい、といった状況をチャットで先に伝えられるのが強みです。現場の状態によって、必要な人数も作業の手順も変わります。条件を伝えたうえで対応できる業者の見積もりだけを集められれば、当日に作業が止まる事態を避けられます。日中は連絡を取りにくい状況でも、文字でやり取りを進められる点も助けになります。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "現場の状況を伝えてから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（高知対応）" },
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
      "受付は電話・LINEに対応しています。水が入ったあとの家では、家財の片付けだけでなく、清掃、消臭、水まわりの点検など、種類の違う困りごとが同時に出てきます。カテゴリをまたいで対応業者を探せる紹介型のサービスは、何から頼めばよいか整理しきれていない段階で、まず電話で相談したいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。急ぐ場面でも、費用の説明を受けてから決めてください。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "回収と清掃をまとめて相談したい人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、高知で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。濡れた家財を運び出したあとの部屋は、泥やほこりが残り、においが気になる状態になっていることがあります。搬出と清掃を続けて手配できると、乾かす作業に移るまでの時間を短くでき、家の中を落ち着いた状態に戻しやすくなります。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "高知対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月21日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（高知から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 片付けを始める前に、部屋ごとの写真を残す",
    b: "動かしてしまえば元の状況は示せません。部屋の全体、床から水の跡までの高さ、被害を受けた家財が分かる写真を、部屋ごとに撮っておきましょう。外観もあわせて残しておくと、どの家のどこかが伝わりやすくなります。り災証明書の申請や保険の相談で状況を説明する場面があるため、記録は多めにあって困りません。撮影は無理のない範囲で、安全を確かめながら行ってください。",
  },
  {
    t: "② 濡れた物と無事だった物を分け、家を乾かせる状態にする",
    b: "水を含んだ物を室内に置いたままにすると、湿気が家全体に回ります。手放すと決めた物は屋外の風通しのよい場所へ移し、残す物は別の場所で乾かします。窓を開けて風を通し、可能なら扇風機などで空気を動かします。畳や布団のように乾きにくい物は、判断を先延ばしにするほど傷むため、早めに扱いを決められると、そのあとの作業が楽になります。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。急いでいる時期は、訪ねてきた業者にその場で頼んでしまいがちですが、運営会社名・所在地が明記されているか、賠償保険や補償制度があるかを確かめてから決めてください。作業の内容と金額を書面で示さない相手には依頼しないことが基本です。",
  },
  {
    t: "④ 作業範囲と総額を書面で確認してから依頼する",
    b: "見積もりでは、どの部屋のどの物を運び出すのか、清掃はどこまで含むのか、追加になる条件は何かを具体的に確認します。同じ内容を複数社に伝えて比べられれば、金額の妥当さも判断しやすくなります。みんなの遺品整理やミツモアの一括見積もりを使えば、離れた場所からでも複数の見積もりを集められます。総額と内訳に納得してから依頼を確定してください。",
  },
];

const faqs = [
  {
    q: "高知のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、サイト上の料金表示や届いた見積もりで確認します。水を含んだ家財は重くなり、運び出しに人数がかかることもあります。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。急ぐ場面でも、金額の説明を受けてから依頼することをおすすめします。",
  },
  {
    q: "水に浸かった家電は、乾かせばまた使えますか？",
    a: "見た目に問題がなさそうでも、内部の基板や配線が傷んでいることがあります。乾いたように見えても内部に水分や汚れが残っている場合があり、通電させると発熱や発火につながるおそれがあるため、自己判断で電源を入れないでください。使えるかどうかの確認は、メーカーや購入した販売店に相談するのが確実です。手放す場合、冷蔵庫・洗濯機・テレビ・エアコンは家電リサイクル法の対象品目にあたり、通常の粗大ごみとしては出せません。ただし災害で出た物の扱いは通常と異なる案内が出ることもあるため、市町村の案内もあわせて確認してください。",
  },
  {
    q: "片付けを始める前に、写真は撮っておいた方がいいですか？",
    a: "撮っておくことをおすすめします。り災証明書の申請や、保険の相談で被害の状況を説明する場面があり、片付けたあとでは当時の状態を示すことができないためです。部屋の全体、床から水の跡までの高さ、被害を受けた家財が分かる写真を、部屋ごとに残しておくと伝わりやすくなります。家の外観も撮っておくとよいでしょう。必要な書類や手続きの流れは自治体や保険会社によって異なるため、詳しくはそれぞれの窓口でご確認ください。",
  },
  {
    q: "濡れた畳や布団、家具はどう扱えばよいですか？",
    a: "水を含んだ畳や布団は非常に重くなり、乾きにくく、時間が経つほどにおいやカビが出やすくなります。運び出せる場合は、屋外の風通しのよい場所へ早めに移すのが基本です。運ぶのが難しいときは無理をせず、人手を確保するか業者に相談してください。家具は、内部まで水が入っているかどうかで扱いが変わります。木製の家具は乾く過程でゆがむことがあり、合板や集成材の物は水を含むと膨らんで戻らないことがあります。残す物と手放す物を分けたら、残す物は乾かす場所をつくって置き、無事だった物と混ぜないようにします。",
  },
  {
    q: "高知市の粗大ごみ収集と、災害で出たごみの扱いは同じですか？",
    a: "同じとは限りません。ふだんの粗大ごみは、事前申し込みのうえ指定場所へ自分で出すのが基本ですが、災害で出たごみについては、別の受け付け方法や仮置き場が案内されることがあります。分け方や出せる期間も、そのときの状況によって変わります。自己判断で出す前に、高知市などお住まいの市町村が出している案内を必ず確認してください。量が多い場合や、大型の家財を運び出せない場合は、運搬まで任せられる業者に相談する方法もあります。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは高知でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも高知の対応は確認できませんでした。本記事では、高知から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaKochiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "高知のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "高知でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "高知のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#kochi5",
      label: "1｜高知のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "高知から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kochi-jijo", label: "2｜高知で片付け業者の利用を検討する場面" },
    { href: "#kiroku-saki", label: "3｜浸水後の片付けは「記録を残してから動かす」順番で" },
    { href: "#nure-kawaki", label: "4｜濡れた家財と乾いた家財を分け、においとカビの広がりを抑える" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜高知の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "高知の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          高知のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["高知", "ゴミ屋敷片付け", "不用品回収", "浸水後の片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          大雨や台風のあとに家の中まで水が入ってしまうと、片付けなければならない物の量も、考えなければならないことも一度に増えます。「どこから手を付ければいいのか分からない」「濡れた家具や家電をどうすればいいのか」「まず何を残しておけばよいのか」——高知でこうした状況に置かれたとき、すぐに整理がつかないのは当然のことです。無理に急ぐ必要はありません。体調と安全を優先しながら、順番を決めて少しずつ進めていけば大丈夫です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、高知から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月21日時点）をもとに比較しました。あわせて、浸水したあとの片付けを進めるときの一般的な順番と、濡れた物とそうでない物を分けてにおいやカビの広がりを抑える考え方もまとめています。手続きや支援の内容は、状況や自治体によって異なります。詳しくはお住まいの市町村の窓口でご確認ください。
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
      <H2 id="kochi5" num="1">高知のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        高知から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月21日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで高知の対応を確認できなかったため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        高知から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、高知から利用できる5社の一覧です。いずれも回収だけ、清掃だけ、といった単位で相談を始められます。
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

      {/* 2｜高知の事情 */}
      <H2 id="kochi-jijo" num="2">高知で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高知は雨の多い地域として知られ、大雨や台風のあとに、床下や床上まで水が入る、庭や物置に泥が流れ込む、屋外に置いていた物が動いてしまうといったことが起こります。こうしたあとの片付けは、普段の不用品の整理とは性質が異なります。運び出す量が一度に増えるうえ、水を含んだ家財は重く、乾かすための場所も必要になります。作業できる期間も限られがちで、家族だけで抱え込むと負担が大きくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、水に浸かった物は、見た目が同じでも扱いが変わります。家電は内部が傷んでいることがあり、布や紙、木を含む物は乾きにくく、においやカビの原因になります。分け方や出し方について、普段とは異なる案内が出されることもあります。人手が足りないとき、量が多いとき、大型の家財を運び出せないときは、片付けや清掃を請け負う業者・サービスが選択肢になります。急いで決めなければならない場面でも、作業の範囲と料金の説明を受けてから依頼することを基本にしてください。
      </p>

      {/* 3 */}
      <H2 id="kiroku-saki" num="3">浸水後の片付けは「記録を残してから動かす」順番で</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水が引いたあと、まず気持ちが向くのは濡れた物を外に出すことですが、その前に写真を撮っておくと、あとの手続きで役に立つことがあります。部屋の全体が分かる写真、床から水の跡までの高さが分かる写真、被害を受けた家財が写った写真を、部屋ごとに残しておきましょう。家の外観も撮っておくと、どの家のどの部分かが分かりやすくなります。片付けを進めてしまうと、あとから同じ状況を示すことはできません。日付が記録されるかたちで残しておくと、より分かりやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        被害を受けた住まいについては、市町村がり災証明書の申請を受け付ける仕組みがあり、その後の手続きで証明を求められることがあります。あわせて、災害のあとには相談の窓口や、災害で出たごみの受け付けについての案内が出されることがあります。ただし、対象になる範囲、必要な書類、受け付けの時期や場所は、災害の状況や自治体によって異なります。ここで内容を決めつけずに、お住まいの市町村が出している案内や窓口で確認してください。加入している保険がある場合は、保険会社への連絡も早めに済ませておくと、その後の相談を進めやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        作業するときは、手袋と長靴、マスクを身に着け、割れた物や釘で足元をけがしないように気を付けます。水に浸かった家電は、外から見て問題がなさそうでも内部が傷んでいることがあるため、通電させずに扱うのが基本です。使えるかどうかの判断は自分でせず、メーカーや販売店に相談しましょう。暑い時期は休憩と水分を多めに取り、一日で終わらせようとしないことも大切です。人手が足りないときは、家族や地域、支援の窓口に声をかけることをためらわないでください。
      </p>

      {/* 4 */}
      <H2 id="nure-kawaki" num="4">濡れた家財と乾いた家財を分け、においとカビの広がりを抑える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        浸水したあとの家では、水に浸かった物と無事だった物が同じ部屋に混ざっています。濡れた物をそのままにしておくと、湿気が部屋全体に回り、無事だった衣類や書類まで傷んでしまうことがあります。片付けの初期にやることは、まず濡れた物を屋外や別の場所へ移し、家の中を乾かせる状態にすることです。窓を開けて風を通し、可能であれば扇風機などで空気を動かします。床下まで水が入った場合は、表面が乾いたように見えても内部に水分が残っていることがあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        畳や布団、ぬいぐるみ、段ボール、木製の家具などは水を含むと乾きにくく、時間が経つほどにおいやカビが出やすくなります。手放すと決めた物は屋外の風通しのよい場所へ早めに移し、残す物は乾かす場所を分けて確保します。壁の内側や床下の状態は自分では判断しにくいため、気になる場合は専門の業者に見てもらう方が確実です。カビへの対処は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビ清掃ガイド</Link>、においが残るときは<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭ガイド</Link>、水まわりの清掃は<Link href="/yokushitsu-mizumawari-seisou/" className="text-primary underline underline-offset-2">浴室・水まわり清掃ガイド</Link>で解説しています。水に浸かった家電の扱いは<Link href="/furui-kaden-anzen-shobun/" className="text-primary underline underline-offset-2">古い家電の安全な処分ガイド</Link>、リサイクル対象の品目は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクルの処分ガイド</Link>もあわせてご覧ください。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高知市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。ふだんの片付けであれば、出せる量とタイミングが合えば費用を抑えられる手段になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、災害で出たごみについては、通常の粗大ごみとは別の受け付け方法や仮置き場が案内されることがあります。分け方、出せる場所、受け付けの期間も、そのときの状況によって変わります。自己判断で出す前に、お住まいの市町村が出している案内を確認してください。量が多い場合や、大型の家財を自分たちで運び出せない場合は、運搬まで任せられる業者の方が負担は小さくなります。急ぎたい時期ほど、料金の説明を受けないまま依頼してしまいがちですが、総額と内訳を確認してから決めるという原則は変わりません。無料をうたう回収の注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点ガイド</Link>、自治体と業者の役割分担は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        高知で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">高知の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜急がなくていい。記録を残し、順番を決めて進める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        高知から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、回収と清掃を分けて手配するならくらしのマーケット、現場の状況を伝えて見積もりを集めるならミツモア、業者探しから手配まで任せるなら生活110番、搬出と清掃をまとめて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        水が入ったあとの片付けは、量も判断も一度に押し寄せます。それでも、始める前に写真で記録を残し、濡れた物と無事だった物を分けて家を乾かせる状態にする、という順番を守れば、あとの手続きも作業も進めやすくなります。り災証明書や相談の窓口といった仕組みは用意されていますが、内容や時期は自治体によって異なるため、必ずお住まいの市町村の案内をご確認ください。無理をせず、人手が必要なところは業者や周囲の力を借りながら、作業の範囲と総額を確認したうえで依頼してください。
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
        掲載情報は2026年8月21日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
