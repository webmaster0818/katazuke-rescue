import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/maebashi/";
const UPDATED = "2026年8月19日";
const UPDATED_ISO = "2026-08-19";

export const metadata: Metadata = {
  title: "前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選【2026年版】",
  description:
    "前橋でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス6社を比較。みんなの遺品整理・ゴミ屋敷専門パートナーズ・お助けうさぎ・くらしのマーケット・ミツモア・生活110番の料金目安と特徴、物置や車庫の中身を使う季節と最後に使った年で仕分ける進め方、農作業用品を処分に出す前の下準備まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選【2026年版】",
    description:
      "前橋でゴミ屋敷片付け・不用品回収を頼める業者・サービス6社を、当サイト掲載の料金目安・公式サイト確認情報で比較。物置・車庫の仕分け方と農作業用品の下準備も解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/hero-final.png"],
  },
};

// アフィリエイトリンク（提携開始後にURLを設定。nullの間は公式サイトへ）
const AFF: Record<string, string | null> = {
  "minna-ihinseiri": null,
  "gomiyashiki-partners": null,
  "otasuke-usagi": null,
  "kurashi-market": null,
  mitsumoa: null,
  seikatsu110: null,
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
      "対応エリアは全国47都道府県で、前橋からも利用できます。相談・見積もりは無料です。親の代から使われてきた物置や車庫がある家では、家財の整理が屋内だけで終わらず、外の収納に残された道具や機械まで対象が広がります。総量が読みにくい依頼ほど、見積もりの根拠を複数社で見比べる価値が大きいため、審査を通過した業者に絞って金額を並べられる紹介サービスは、最初の相談先として使いやすい入口です。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う戸建ての片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "屋内と屋外を合わせた総量を複数社の見積もりで比較したい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（前橋対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料・全国対応の記載を確認しています（2026年8月19日時点）。全国47都道府県対応のため群馬県・前橋市からも利用できます。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-2",
    catch: "ゴミ屋敷専門・最短到着60分",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社（大阪府大阪市）が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、片付けたあと住める状態に戻すところまで一括で依頼できます。",
      "当サイト掲載の対応エリアは関東・東海・関西の各府県で、関東に含まれる群馬県も対応範囲です。見積もりは無料で買取査定にも対応します。屋外の収納に長く物を置いたままの家では、扉を開けた瞬間に虫やカビ、湿気のにおいが出てくることがあり、運び出しだけでは終わらないケースもあります。搬出のあとの清掃・消臭・害虫駆除まで同じ窓口で頼めることは、外の物置や車庫まで含めて片付ける前橋の戸建てでは実用的な強みになります。",
    ],
    recommend: [
      "ゴミ屋敷・汚部屋の片付けに特化した業者に頼みたい人",
      "清掃・消臭・害虫駆除までまとめて依頼したい人",
      "買取で費用を少しでも抑えたい人",
      "近所に知られないよう配慮して作業してほしい人",
    ],
    table: [
      { k: "料金目安", v: "5万円〜50万円", note: "当サイト掲載の目安。物量・作業範囲で変動" },
      { k: "対応スピード", v: "最短到着60分（公式表記）" },
      { k: "見積もり", v: "無料・買取査定あり" },
      { k: "対応エリア", v: "関東・東海・関西の各府県（関東＝群馬を含む）" },
      { k: "運営会社", v: "TKC株式会社（大阪府大阪市）" },
    ],
    memo:
      "公式サイト（gomikaisyu-pro.com）で、最短到着60分の表記・見積もり無料・買取査定ありの記載を確認しています（2026年8月19日時点）。対応エリアは当サイトのレビューページ掲載値（公式サイト確認情報）で関東・東海・関西の各府県とされており、群馬県は関東として対応範囲に含まれます。市町村単位の対応可否は依頼前に必ず住所を伝えて確認してください。ゴミ屋敷の片付け費用は物量で大きく変わるため、写真見積もりや訪問見積もりで総額を確定させてから依頼しましょう。",
  },
  {
    slug: "otasuke-usagi",
    num: "1-3",
    catch: "回収・買取・清掃を一括対応",
    name: "お助けうさぎ",
    officialUrl: "https://otasukeusagi.jp/",
    image: "/images/hero-b.png",
    imageAlt: "お助けうさぎの紹介イメージ",
    intro: [
      "お助けうさぎは、株式会社Tabinchuが運営する不用品回収・片付けサービスです。不用品回収・粗大ゴミ回収を中心に、ゴミ屋敷片付け・遺品整理・買取・ハウスクリーニングまで一括対応し、古物商許可・産業廃棄物収集運搬業許可のほか、遺品整理・特殊清掃関連の認定資格の保有をうたっています。",
      "当サイト掲載の対応エリアは東京・神奈川・埼玉・千葉・茨城・山梨・栃木・群馬・静岡の9都県で、群馬県が対応都県として明記されています。電話1本で即日対応をうたい、買取を併設しているため、車庫に眠る工具や趣味の道具、まだ動く家電といった値の付く可能性がある物と、処分するだけの物を、一度の作業で分けて片付けたい場面に向いています。前橋の戸建てのように屋内と屋外の両方から物が出る依頼では、仕分けと搬出を同じ日にまとめられる利点が大きくなります。",
    ],
    recommend: [
      "回収と買取をまとめて一度で済ませたい人",
      "急ぎで来てほしい・即日で対応してほしい人",
      "許可・資格を確認できる業者に頼みたい人",
      "車庫や物置の道具まで幅広く引き取ってほしい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜30万円", note: "当サイト掲載の目安。物量・間取りで変動" },
      { k: "対応スピード", v: "電話1本で即日対応（公式表記）" },
      { k: "対応エリア", v: "首都圏中心の9都県（群馬を含む）" },
      { k: "運営会社", v: "株式会社Tabinchu" },
      { k: "許可・資格", v: "古物商許可・産廃収集運搬業許可・遺品整理/特殊清掃関連の認定資格" },
    ],
    memo:
      "当サイトのレビューページ掲載値（公式サイト確認情報）で、対応エリアが東京・神奈川・埼玉・千葉・茨城・山梨・栃木・群馬・静岡の9都県とされ、群馬県が明記されていることを確認しています（2026年8月19日時点）。公式サイト（otasukeusagi.jp）では即日対応・買取併設・許可や資格の保有の記載を確認しています。県内でも市町村により対応可否が分かれる場合があるため、前橋市の住所を伝えて確認しましょう。実際の総額は物量・搬出条件で変わるため、見積もりで確認してから依頼してください。",
  },
  {
    slug: "kurashi-market",
    num: "1-4",
    catch: "口コミと料金で地域の業者を選べる",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/hero-c.png",
    imageAlt: "くらしのマーケットの紹介イメージ",
    intro: [
      "くらしのマーケットは、みんなのマーケット株式会社（東京都港区）が運営する、暮らしの出張・訪問サービスのオンラインマーケットプレイスです。不用品回収・粗大ゴミ回収・片付け・ハウスクリーニングなどのカテゴリで、地域の登録業者を料金と口コミを見ながら比較し、そのままオンラインで予約できます。",
      "対応エリアは日本全国で、前橋の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。屋外の収納の片付けは、扉一枚分から少しずつ進める方法も取れます。トラック1台分だけ、物置の左半分だけ、というように量を区切って依頼しやすいサービスなので、一度で全部を決めきれない物量の家でも着手しやすいのが利点です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "物置や車庫を区切って少しずつ片付けたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月19日時点）。全国の登録業者から選ぶ仕組みのため、前橋の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
  },
  {
    slug: "mitsumoa",
    num: "1-5",
    catch: "最大5社の見積もりを比較",
    name: "ミツモア",
    officialUrl: "https://meetsmore.com/",
    image: "/images/hero-a.png",
    imageAlt: "ミツモアの紹介イメージ",
    intro: [
      "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。不用品回収・片付け・遺品整理のカテゴリがあり、見積もり依頼は無料です。",
      "対応エリアは全国47都道府県です。物置に古い刈払機がある、車庫にタイヤと肥料袋が残っている、といった扱いの分かれやすい品目の事情を、チャットで先に伝えられるのが強みです。屋外の道具類は業者によって引き受けられる範囲が違うため、条件を出したうえで対応できる業者だけの見積もりを集められれば、当日に積めない物が残るという行き違いを減らせます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "回収してほしい品目を伝えてから決めたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（前橋対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、見積もり依頼無料の記載を確認しています（2026年8月19日時点）。最大5社の見積もり比較・チャット相談の仕組み・全国47都道府県対応は当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
  },
  {
    slug: "seikatsu110",
    num: "1-6",
    catch: "提携業者を無料で紹介・手配",
    name: "生活110番",
    officialUrl: "https://www.seikatsu110.jp/",
    image: "/images/hero-b.png",
    imageAlt: "生活110番の紹介イメージ",
    intro: [
      "生活110番は、東証グロース上場のシェアリングテクノロジー株式会社（本社：愛知県名古屋市）が運営する、暮らしのお困りごとの業者紹介プラットフォームです。不用品回収・ゴミ屋敷・遺品整理を含む多数のカテゴリで、希望地域に対応できる提携専門業者を無料で紹介・手配します。",
      "受付は電話・LINEに対応しています。屋外の収納の片付けでは、不用品の回収だけでなく、傷んだ物置の解体や庭木の処理など隣接する作業の相談が同時に出てくることがあります。カテゴリをまたいで業者を探せる紹介型のサービスは、こうした複数の困りごとを一本の電話から整理していきたいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
];

// 比較表（前橋から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西（関東＝群馬を含む）", price: "5万円〜50万円", point: "ゴミ屋敷専門・消臭や害虫駆除まで対応" },
  { slug: "otasuke-usagi", name: "お助けうさぎ", area: "首都圏中心の9都県（群馬を含む）", price: "3万円〜30万円", point: "回収・買取・清掃を一括対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
];

const steps = [
  {
    t: "① 屋外の収納の中身を「使う季節」ごとにグループ分けする",
    b: "物置や車庫の片付けで手が止まるのは、目の前の物を一つずつ判断しようとするからです。まずは中身を出さずに、冬に使う物・夏に使う物・季節に関係なく使う物・何年も出していない物の4つに分けて紙に書き出しましょう。分類が決まると、見積もりで伝える内容も「冬物の道具一式」「使っていない農作業用品」といった塊で説明できるようになり、業者側も車両と人員を組みやすくなります。",
  },
  {
    t: "② 燃料・刃物・薬剤など下準備が必要な物を先に抜き出す",
    b: "刈払機や耕運機などのエンジン付き機器、灯油の残った暖房器具、鎌や鉈のような刃物、肥料や農薬の袋は、業者ごとに扱いが分かれる代表的な品目です。リストの中でこれらに印を付け、見積もりの段階で回収可否と必要な下準備を確認しておきましょう。作業日までに燃料を抜く、刃物を包む、袋を閉じ直すといった準備を済ませておけば、その品目だけが敷地に取り残されることを防げます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。物置や車庫の作業では、重量物を敷地内で移動させる場面が多く、外壁やシャッター、車を傷付ける可能性もゼロではありません。賠償保険・補償制度の有無と、運営会社名・所在地の記載を確認しておくと安心です。",
  },
  {
    t: "④ 敷地に入れる車両のサイズを伝えて総額を比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量と搬出条件で変わります。前面道路の幅、車庫前に停められるか、トラックを敷地内に入れられるかといった条件は、作業時間と人員に直結します。同じ条件を伝えたうえで、みんなの遺品整理やミツモアの一括見積もりで複数社の金額と作業範囲を並べ、総額と内訳に納得してから依頼を確定しましょう。",
  },
];

const faqs = [
  {
    q: "前橋のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けがみんなの遺品整理経由で3万円〜20万円、お助けうさぎが3万円〜30万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円が目安です。くらしのマーケット・ミツモア・生活110番は業者ごとに料金が異なります。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "物置や車庫の中身も、家の中の不用品と一緒に片付けてもらえますか？",
    a: "屋内と屋外をまとめて依頼すること自体は多くの業者が対応します。ただし総額は、量に加えて「どこから運び出すか」で変わります。物置や車庫は屋内より一つひとつの物が重く、通路も狭いことが多いため、同じ体積でも作業時間が伸びやすい場所です。見積もりでは、屋内と屋外の量を分けて伝え、屋外分を含めた金額になっているかを確認しましょう。扉が開かないほど詰まっている場合は、扉の前に出せる分だけ先に出しておくと、当日の作業がスムーズになります。",
  },
  {
    q: "使わなくなった刈払機や耕運機など、燃料の入った機械は引き取ってもらえますか？",
    a: "一般論として、機械本体は回収できても、中に残ったガソリン・混合燃料・灯油といった液体は引き受けられないとする業者が多く、「燃料を使い切るか抜いた状態なら本体は回収可」という条件が一般的です。残った燃料は購入した販売店やガソリンスタンドへの相談が基本の入口になります。刈払機の刃や鎌などの刃物は、厚紙で包んで刃物と分かるようにしておくと、作業員が安全に扱えます。肥料・農薬・消石灰などの薬剤も一般の不用品回収では対象外とされることが多いため、販売店や取扱窓口に扱いを確認しましょう。",
  },
  {
    q: "「来年の季節が来たら使うかもしれない」物は、どう判断すればいいですか？",
    a: "判断が止まる物は、使う季節と最後に使った年の2つで見ると決めやすくなります。使う季節が来ているのに直近2シーズン以上出していない物は、次の季節にも使われない可能性が高いと考えられます。逆に、季節が来れば必ず出す物は、使う時期ごとにまとめて置き場所を決め直せば残す価値があります。迷った物は「保留」の箱を一つだけ作って入れ、次に同じ季節が来たときに開けていなければ手放す、という運用にすると、その場で決めきれなくても片付けが止まりません。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やお部屋片付け日本一は前橋でも使えますか？",
    a: "当サイト掲載の対応エリア（2026年8月19日時点）では、粗大ゴミ回収本舗は東京・神奈川・埼玉・千葉の4都県、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東として東京・埼玉・千葉・神奈川・茨城を挙げており、いずれも群馬県の対応を確認できませんでした。一方、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県、お助けうさぎは群馬県を含む9都県が対応エリアとされているため、本記事のカードで紹介しています。そのほかは前橋から利用できる全国対応・検索型のサービスを掲載しています。",
  },
  {
    q: "前橋市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。物置や車庫の物は重量があり、屋外から指定場所まで運ぶ作業自体が負担になりやすいため、自力で運べる少量なら自治体、まとめて出す場合や重量物が多い場合は業者、という分け方が現実的です。また、土・石・ブロック、家電リサイクル法の対象品目などは粗大ごみとして出せないとされることが多く、屋外の片付けでは対象外品目が交ざりやすい点にも注意が必要です。申し込み方法・料金・対象品目は前橋市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
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

export default function AreaMaebashiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選【2026年版】",
    description:
      "前橋でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス6社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#maebashi6",
      label: "1｜前橋のゴミ屋敷片付け・不用品回収業者おすすめ6社",
      sub: [
        { href: "#hikaku", label: "前橋から利用できる片付け・回収サービス6社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#maebashi-jijo", label: "2｜前橋で片付け業者の利用を検討する場面" },
    { href: "#kisetsu-shiwake", label: "3｜物置・車庫の物は「使う季節」と「最後に使った年」で仕分ける" },
    { href: "#nougu-shitajunbi", label: "4｜農作業用品・エンジン付き機器は燃料と刃物の扱いを整えてから出す" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜前橋の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "前橋の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          前橋のゴミ屋敷片付け・不用品回収業者おすすめ6選
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
          {["前橋", "ゴミ屋敷片付け", "不用品回収", "物置・車庫の整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「物置と車庫に何年も置いたままの物が積み上がって、扉が開かない」「使わなくなった農作業の道具や機械をどう処分すればいいのか分からない」「家の中まで物があふれて自力では戻せない」——前橋でこうした悩みを抱えたとき、どこに頼めばよいか迷う方は多いはずです。敷地に物置や車庫がある家では、屋内に置き場のない物が自然と外の収納へ移り、そこが「とりあえず置く場所」になります。一つひとつは壊れていない物なので判断が止まり、気付いたときには手を付けられない量になっている、というのが片付けが後回しになる典型的な流れです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、前橋から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス6社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月19日時点）をもとに比較しました。あわせて、物置・車庫の中身を「使う季節」と「最後に使った年」の2つで仕分ける判断のつくり方と、農作業用品やエンジン付き機器を処分に出す前の下準備もまとめています。業者選びの参考にしてください。
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

      {/* 1｜おすすめ6社 */}
      <H2 id="maebashi6" num="1">前橋のゴミ屋敷片付け・不用品回収業者おすすめ6社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        前橋から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる6社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月19日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗（東京・神奈川・埼玉・千葉）、ブルークリーン（東京・千葉・埼玉・神奈川中心）、お部屋片付け日本一（関東は東京・埼玉・千葉・神奈川・茨城）は、群馬県の対応を確認できなかったため本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        前橋から利用できる片付け・回収サービス6社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        群馬対応を確認できた専門業者と、全国対応の紹介・比較サービスを合わせた、前橋から利用できる6社の一覧です。
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

      {/* 2｜前橋の事情 */}
      <H2 id="maebashi-jijo" num="2">前橋で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        前橋は群馬県の県庁所在地でありながら、中心部を離れると敷地に余裕のある戸建てが並び、車での移動が生活の前提になる土地です。敷地に物置や車庫があると、屋内に置き場のない物は自然と外へ移ります。冬の防寒具や暖房器具、夏の行楽用品、家庭菜園や農作業の道具、古いタイヤや工具、来客用の折りたたみ家具までが同じ場所に同居し、奥に入った物ほど出す機会を失っていきます。屋外の収納は普段の生活動線から外れているため、「使わない物が入っている」という感覚が薄れやすく、親の代から置かれたままの道具が残っている家も珍しくありません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        冬に乾いた強い風が吹くこの地域では、屋外に出したままの物や隙間の多い物置に入れた物ほど傷みが進みやすく、いざ使おうとしたときには使えなくなっていた、ということも起こります。「まだ使えるはずだから残している」つもりの物が、実際には使えない状態のまま場所だけを占めている——この状態に気付いたときが、片付けを動かす一つのきっかけです。屋内までゴミ屋敷状態が広がっている場合や、量が多くて自分たちでは運び出せない場合は、搬出から処分までまとめて任せられる業者・サービスが選択肢になります。逆に、自力で指定場所まで運べる少量の粗大ごみなら、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。
      </p>

      {/* 3｜季節と使用年で仕分ける */}
      <H2 id="kisetsu-shiwake" num="3">物置・車庫の物は「使う季節」と「最後に使った年」で仕分ける</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        屋外の収納が片付かない最大の理由は、判断の基準が「使えるか・壊れているか」になっていることです。壊れていない物は残すという基準だと、置き場所が足りているうちは何も減りません。おすすめは、使う季節と最後に使った年という2つの軸で見る方法です。まず、冬に使う物・夏に使う物・季節を問わず使う物・何年も出していない物の4つに分けます。次に、それぞれについて「最後に出したのはいつか」を思い出します。季節が来ているのに直近2シーズン以上出していない物は、次の季節にも出番が来ない可能性が高いと考えられます。物そのものの状態ではなく、自分の使い方を基準にするので、判断が止まりにくくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この仕分けは、見積もりの伝え方にもそのまま使えます。「物置一式」ではなく「使っていない農作業用品と古いタイヤが中心、冬物の暖房器具は残す」と塊で説明できれば、業者は品目に応じた車両・人員・処分ルートを組みやすくなります。写真も、中身を全部出す必要はなく、扉を開けた状態と手前・奥の様子が分かる数枚があれば十分に役立ちます。残すと決めた物は、次に使う季節が来たときに取り出しやすい位置へ移しておくと、片付けの効果が長続きします。物置の中身をどう扱うかは<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>、車庫まわりの進め方は<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">ガレージ片付けガイド</Link>で詳しく解説しています。
      </p>

      {/* 4｜農作業用品と燃料・刃物 */}
      <H2 id="nougu-shitajunbi" num="4">農作業用品・エンジン付き機器は燃料と刃物の扱いを整えてから出す</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家庭菜園や農作業の道具が混ざる片付けでは、「量」より「品目ごとの下準備」が当日の成否を分けます。刈払機・耕運機・発電機・チェーンソーといったエンジン付きの機器は、本体は回収できても中に残った燃料は引き受けられないとする業者が多く、燃料を抜いた状態にしておくのが基本の前提です。灯油の残った暖房器具も同じで、残った灯油は購入した販売店やガソリンスタンドへの相談が入口になります。バッテリーを積んだ機器は、バッテリー単体の扱いが別になる場合があるため、見積もりの時点で分けて伝えておきましょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        鎌・鉈・刈払機の刃といった刃物類は、厚紙や布で包み、刃物であると分かる状態にまとめておくと、作業員が安全に運び出せます。肥料・農薬・消石灰などの薬剤は、一般の不用品回収では対象外とされることが多い品目です。袋が破れて中身が出ている場合はなおさら扱いが分かれるため、販売店や取扱窓口に処分方法を確認しておきましょう。土の入ったプランターや使い古した培養土、庭石なども自然物として断られやすい品目です。屋外に出る品目ごとの考え方は<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品処分ガイド</Link>、行楽・スポーツ用品の整理は<Link href="/sports-outdoor-seiri/" className="text-primary underline underline-offset-2">スポーツ・アウトドア用品の整理ガイド</Link>で解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        前橋市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。屋外の収納から出る物は重量のある物が多く、この「自分で運ぶ」部分が最大のハードルになります。運べる人手と時間があるかを先に見極めることが、自治体を使うか業者に頼むかの分かれ目です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、家電リサイクル法の対象品目や、土・石・ブロック、燃料や薬剤といった品目は粗大ごみとして出せないとされることが多く、物置・車庫の片付けでは対象外品目が交ざりやすい点に注意が必要です。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。自治体と業者の役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        前橋で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">前橋の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜季節と使用年の2軸が、物置・車庫の片付けを動かす</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        前橋から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス6社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、ゴミ屋敷の片付けから清掃・消臭までなら群馬を含む関東が対応範囲のゴミ屋敷専門パートナーズ、回収と買取を一度でまとめるなら群馬が対応都県に明記されたお助けうさぎ、量を区切って進めるならくらしのマーケット、品目の事情を伝えて見積もりを比較するならミツモア、業者探しから手配まで任せるなら生活110番と、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        物置と車庫の片付けは、物の状態で迷い続けるより、使う季節と最後に使った年という自分の使い方を基準にした方が判断が進みます。そのうえで、燃料の残った機器、刃物、肥料や農薬といった下準備が必要な品目を先に抜き出し、回収可否を見積もりの段階で確認しておけば、当日に積み残しが出る事態を防げます。同じ条件で複数社の見積もりを取り、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
            <Link href="/area/toyama/" className="text-primary underline underline-offset-2">富山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nagasaki/" className="text-primary underline underline-offset-2">長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/wakayama/" className="text-primary underline underline-offset-2">和歌山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
