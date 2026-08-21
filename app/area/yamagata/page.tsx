import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/yamagata/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

export const metadata: Metadata = {
  title: "山形のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "山形でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、母屋と蔵で仕分けの基準を分ける考え方と、雪の重みがかかる場所から屋外の物を移す段取りまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "山形のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "山形でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。母屋と蔵で判断の基準を分ける進め方と、雪の重みに備えた屋外の片付けも解説します。",
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
      "対応エリアは全国47都道府県で、山形からも利用できます。相談・見積もりは無料です。母屋と蔵がある家では、日常の家財と、蔵に納められたまま代が替わった品が同じ敷地に並びます。前者は量で見積もれますが、後者は中身を開けてみるまで何が出てくるか分かりません。作業内容と金額が書面で並ぶ見積もりを複数取れば、母屋だけを頼む場合と蔵まで含める場合の差が数字で見えます。審査を通過した業者に絞って比較できる仕組みは、どこまでを任せるかを決める前の段階から相談したいときに使いやすい選択肢です。",
    ],
    recommend: [
      "生前整理・遺品整理を伴う家財の整理を頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "母屋と蔵をまとめて相談したい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（山形対応）" },
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
      "対応エリアは日本全国で、山形の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。母屋と蔵では、判断に必要な時間も、運び出しの手間もまったく違います。全部をまとめて一度に頼むより、母屋の一室だけ、蔵の一階だけ、というように区切って進めた方が、家族の判断が追いつきます。作業の単位ごとに料金を確かめながら予約できる仕組みは、この進め方と相性がよい選択肢です。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "母屋・蔵を区切って少しずつ頼みたい人",
      "オンラインで予約まで完結させたい人",
    ],
    table: [
      { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できる明朗会計" },
      { k: "対応エリア", v: "日本全国（地域の登録業者を検索して依頼）" },
      { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
      { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
    ],
    memo:
      "公式サイト（curama.jp）で、サービスごとの料金表示・口コミ投稿の仕組み・損害賠償補償制度の記載を確認しています（2026年8月21日時点）。全国の登録業者から選ぶ仕組みのため、山形の住所で検索して対応可能な業者を確認します。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認してから予約しましょう。",
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
      "対応エリアは全国47都道府県です。蔵の二階に上がる階段が急で幅が狭い、戸が小さくて大きな物が通らない、床板がたわむ箇所がある——といった条件を、チャットで先に伝えられるのが強みです。蔵や土間のある建物は、一般的な住宅を前提にした見積もりのままでは当日に手が止まることがあります。前提を出したうえで対応できる業者だけを候補にできれば、着いてから作業できないと言われる事態を避けられます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "蔵や土間の作業条件を先に伝えておきたい人",
      "費用の相場観を先につかみたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（山形対応）" },
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
      "受付は電話・LINEに対応しています。長く閉じたままだった蔵や離れを開けると、中身の問題だけでなく、土壁のはがれ、戸の建て付け、虫やねずみの跡といった別種の困りごとが同時に見つかることがあります。どれを誰に頼めばよいかを自分で調べ分けるのは手間がかかります。カテゴリをまたいで対応業者を探せる紹介型のサービスは、見つかった課題を一つの窓口から順に手配していきたいときに向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
    ],
    recommend: [
      "業者探しから手配まで任せたい人",
      "電話やLINEでまず相談したい人",
      "上場企業が運営する紹介サービスを使いたい人",
      "不用品回収と建物まわりの困りごとをまとめて相談したい人",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、山形で利用する場合は、住所に対応する業者をサイト内で検索して選ぶ使い方になります。蔵や納戸は、中身を出したあとに床のほこりと湿った空気が残り、そのままでは次に何を置く気にもなりません。空いた場所を保管庫として使い続けるのか、しばらく空けたままにするのかで、必要な清掃の程度も変わります。搬出と清掃をまとめて手配できると、次の使い方に移るまでの時間を短くできます。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "山形対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月21日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（山形から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 母屋と蔵で「何を基準に決めるか」を先に家族で決める",
    b: "同じ家の中でも、母屋と蔵では物の性格が違います。母屋は今の暮らしで使うかどうかで決められますが、蔵の品は使う予定がなくても引き継ぐ意味を持つことがあります。始める前に、母屋は使用頻度で決める、蔵は引き継ぐ人がいるかどうかで決める、というように基準を分けて言葉にしておきましょう。基準が一つしかないと、蔵の前で判断が止まり、そこから先へ進まなくなります。",
  },
  {
    t: "② 蔵は棚一段・箱一つの単位で区切り、出したものを記録する",
    b: "蔵の中身を一度に全部出すと、床一面に物が広がって収拾がつかなくなります。棚一段、長持ち一つ、というように小さく区切り、出したら写真を撮ってから次に進みます。写真があれば、その場にいない家族にも同じものを見てもらえ、後から何がどこにあったかも追えます。記録を残しながら進める方が、結果として一度で決められる物が増えます。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。蔵の作業では、急な階段や梯子を使う場面があり、古い建具や土壁に触れることもあります。賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかを確認しておくと安心です。",
  },
  {
    t: "④ 雪の時期を外して作業日を確保し、搬出条件を伝えて見積もりを比較する",
    b: "屋外や蔵の作業は天候に左右されるため、雪が積もる前の時期に日程を押さえます。雨や雪で延期になった場合に振り替えができるかも、相談の段階で確認しておきましょう。蔵の戸の大きさ、階段の幅、車を寄せられる位置は費用に直結します。同じ条件を複数社に伝え、みんなの遺品整理やミツモアの一括見積もりで金額と作業範囲を比べ、総額と内訳に納得してから依頼を確定します。",
  },
];

const faqs = [
  {
    q: "山形のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、サイト上の料金表示や届いた見積もりで確認します。母屋に加えて蔵や離れまで含める場合は、点数も重量も増えるうえ、階段や戸の大きさによって手間が変わります。建物ごとに範囲を区切って見積もりを出してもらうと比較しやすくなります。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "母屋と蔵で、仕分けの基準を変える必要があるのはなぜですか？",
    a: "決め方の材料がまったく違うからです。母屋にある物は、この一年で使ったか、これから使う予定があるかで判断できます。一方、蔵に納められている品は、使う予定がなくても家に残ってきたものが多く、使うかどうかという物差しでは測れません。同じ基準で通そうとすると、母屋では順調に進んでいた作業が、蔵の前で必ず止まります。蔵については、引き継ぐ人がいるか、家の記録として残す意味があるか、手放してもよいか、という別の物差しを用意しておくと判断が進みます。基準を分けること自体を、作業を始める前に家族で確認しておくのが要点です。",
  },
  {
    q: "蔵にある古い器や道具は、そのまま処分してしまってよいですか？",
    a: "判断がつかない物をその場で処分すると、あとから戻せません。まずは、明らかに傷んで使えない物、家族の誰かが引き継ぐ物、判断がつかない物の三つに分け、三つ目だけを一か所にまとめてください。まとめた物については、写真を撮って家族で共有し、必要に応じて買取の査定を挟むかどうかを決めます。査定を頼む場合は、回収と買取の両方に対応できる業者かどうかを先に確認しておくと、搬出を一度で済ませられます。判断がつかない物を無理にその日のうちに決めようとせず、保留の場所を用意しておく方が、結果として作業は早く終わります。",
  },
  {
    q: "雪が積もる前に、屋外の物はどこまで移せばいいですか？",
    a: "基準になるのは、その場所に雪の重みがかかるかどうかです。屋根から雪が落ちてくる範囲、軒やカーポートの下、枝の張った木の下は、上から重さがかかります。塀や建物の際は、積もった雪が横から押してくる場所です。これらにかかっている物は、壊れるだけでなく、春に取り出すまで場所をふさぎ続けます。まずは上から重さがかかる場所の物を屋内や蔵へ移し、次に雪囲いを立てる予定の範囲を空けてください。すべてを片付ける必要はなく、重みがかからない場所に残す物は、そのままで構いません。",
  },
  {
    q: "山形市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集日まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。点数が少なく、指定場所まで運べる人がいるなら、自治体の収集で費用を抑えられます。一方、蔵一棟分をまとめて空けるような作業では、点数も重量も多く、運び出しまで任せられる業者の方が現実的です。雪が降り始める前に終えたい場合は、申し込みから収集日までの待ち時間も計画に入れておく必要があります。申し込み方法・料金・対象品目は山形市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは山形でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーンは東京・千葉・埼玉・神奈川を中心とした地域、お部屋片付け日本一は関東と東海・中部の一部、お助けうさぎは首都圏中心の9都県、ゴミ屋敷専門パートナーズは関東・東海・関西の各府県のため、いずれも山形の対応は確認できませんでした。本記事では、山形から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaYamagataPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "山形のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "山形でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "山形のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#yamagata5",
      label: "1｜山形のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "山形から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#yamagata-jijo", label: "2｜山形で片付け業者の利用を検討する場面" },
    { href: "#omoya-kura", label: "3｜母屋と蔵は仕分けの基準を分けて考える" },
    { href: "#yuki-omomi", label: "4｜雪の重みがかかる場所から屋外の物を移す" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜山形の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "山形の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          山形のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["山形", "ゴミ屋敷片付け", "不用品回収", "母屋と蔵の家財整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「母屋の片付けは進むのに、蔵の戸を開けたところで毎回止まってしまう」「代々納められてきた品が、価値のあるものか要らないものか判断できない」「屋外の物を動かそうと思っているうちに、また雪の季節になってしまう」——山形で古い家を受け継いだ方から、こうした声が聞かれます。母屋と蔵が並ぶ家の片付けが難しいのは、物が多いからというより、同じ敷地の中に性格の違う物が並んでいるからです。判断の物差しが一つしかないと、途中で必ず手が止まります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、山形から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月21日時点）をもとに比較しました。あわせて、母屋と蔵で仕分けの基準を分けて考える理由と、雪の重みがかかる場所から屋外の物を移していく手順もまとめています。業者選びの参考にしてください。
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
      <H2 id="yamagata5" num="1">山形のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        山形から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月21日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは、関東から関西・東海にかけての対応エリアで山形の対応を確認できなかったため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        山形から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、山形から利用できる5社の一覧です。いずれも母屋だけ、蔵だけといった建物単位の依頼から相談できます。
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

      {/* 2｜山形の事情 */}
      <H2 id="yamagata-jijo" num="2">山形で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        山形では、母屋のほかに蔵や離れ、納戸を備えた住まいが受け継がれてきました。母屋の家財は日々使っているので状況が分かりますが、蔵は年に数えるほどしか開けないため、何がどれだけ入っているかを誰も把握していない、という状態になりがちです。中には、器や膳、行事で使った道具、書き付けの入った箱など、一つひとつの扱いを考えなければならない品が並びます。量が読めず、判断にも時間がかかる。片付けの計画が立たない理由の多くは、この二つが重なっている点にあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        さらに、雪の積もる地域では作業できる時期が限られます。屋外や蔵まわりに手を付けられるのは雪のない季節だけで、そこを逃すと次の機会は半年以上先になります。人が集まれる休みと、天候の条件と、判断に必要な時間がそろわないまま年が過ぎていく、というのが典型的な行き詰まり方です。一度にまとまった量を出したいとき、蔵の階段や戸が狭くて大きな物を動かせないとき、建物の状態に不安があるときは、搬出まで任せられる業者・サービスが選択肢になります。少しずつ自分で運べる物は、後述する自治体の収集を使う方が費用は抑えられます。実家全体の進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けガイド</Link>、相続が絡む場合は<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付けガイド</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="omoya-kura" num="3">母屋と蔵は仕分けの基準を分けて考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付けが途中で止まる家には、共通する形があります。母屋を使用頻度で判断して順調に進み、その勢いのまま蔵の戸を開けて、そこで動けなくなるという形です。原因は物の量ではなく、基準が合っていないことにあります。母屋にある物は、この一年で使ったか、これから使う予定があるかで決められます。しかし蔵に納められた品は、そもそも使うために置かれていません。使うかどうかという物差しを当てても、答えが出ないのは当然です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        そこで、始める前に基準を二つ用意します。母屋は使用頻度、蔵は引き継ぐ意味があるかどうかです。蔵の品については、家族の誰かが引き取って使う予定があるか、家の記録として残す意味があるか、どちらでもないか、という三つに振り分けます。三つ目に入った物は手放す候補ですが、この段階では処分を確定させず、判断がつかない物の置き場を一か所つくって集めておきましょう。決めきれない物を無理にその日に決めようとすると、作業全体が止まります。器や膳、仏具など、扱いに迷いやすい品の考え方は<Link href="/jikka-shokkidana-butsugu/" className="text-primary underline underline-offset-2">実家の食器棚・仏具の整理ガイド</Link>と<Link href="/butsudan-kamidana-seiri/" className="text-primary underline underline-offset-2">仏壇・神棚の整理ガイド</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        蔵を開けるときは、棚一段、長持ち一つといった小さな単位で区切るのが要点です。一度に全部を出すと床が埋まり、元に戻すことも進めることもできなくなります。出したら写真を撮り、何が入っていたかを短く書き添えておきます。この記録があると、その場にいなかった家族にも同じものを見てもらえ、判断を持ち帰って相談できます。状態のよい品は買取の対象になることもあるため、査定を挟むかどうかは点数と手間との兼ね合いで決めてください。判断の材料は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ買取併用ガイド</Link>、写真や書類の扱いは<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理ガイド</Link>、<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理ガイド</Link>にまとめています。
      </p>

      {/* 4 */}
      <H2 id="yuki-omomi" num="4">雪の重みがかかる場所から屋外の物を移す</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        屋外の片付けは、物を眺めながら決めようとすると終わりが見えません。基準を、その場所に雪の重みがかかるかどうかに置き換えると、手を付ける順番がはっきりします。上から重さがかかるのは、屋根から雪が落ちてくる範囲、軒下、波板やカーポートの下、枝の張った木の下です。横から圧がかかるのは、建物の壁際や塀の内側など、積もった雪が寄っていく場所です。ここに置いた物は、壊れるだけでなく、春先まで場所をふさぎ続けます。シートをかけただけでは重さは防げません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次に、雪囲いを立てる範囲を空けます。囲いを組む場所に物が残っていると、毎年その物をどかすところから作業が始まり、手間が増え続けます。移す先は、蔵の空いた棚、母屋の使っていない部屋、屋根のある物置のいずれかです。移し先を決めずに動かすと、別の場所が新しい置き場になるだけで終わります。逆に、重みのかからない場所に置いてある物は、無理に手放す必要はありません。すべてを減らすのではなく、重さのかかる場所を空けるという考え方であれば、限られた時期でも作業が収まります。庭まわりの整理は<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品処分ガイド</Link>、車庫まわりは<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">ガレージ・車庫の片付けガイド</Link>、物置ごと空にする場合は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>を参考にしてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        移す途中で、燃料の入った機械や刃のある道具が出てくることがあります。エンジンのついた機械は燃料が残ったままだと回収を断られることがあるため、抜き取りが必要かを依頼の前に確認しましょう。抜いた燃料は家庭のごみとして出せないため、購入した販売店など扱いに慣れた窓口に相談します。刃物は刃を厚紙などで包み、外から見て分かる形にしてから出してください。分別に迷う物は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみのガイド</Link>にまとめています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        山形市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。雪が降り始める前に片付けを終えたい場合は、この待ち時間を計算に入れておく必要があります。申し込みが立て込む時期に重なると、希望どおりの日に収集されるとは限らないためです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、蔵から出てくる物には、家庭のごみとして出せる物とそうでない物が混ざります。大きさや素材によって扱いが変わることもあるため、量の多い品目は先に確認しておくと安心です。点数が少なく指定場所まで運べるなら自治体の収集が有利ですが、蔵一棟分をまとめて空けるような作業では、運び出しまで任せられる業者の方が現実的です。家電リサイクル法の対象品目のように粗大ごみとして出せない物もあるため、対象外品目の処分先は先に調べておきましょう。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。役割分担の考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分けガイド</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れガイド</Link>、費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        山形で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">山形の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜基準を二つ持てば、蔵の前で止まらなくなる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        山形から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。生前整理・遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、母屋の一室や蔵の一階だけを区切って頼むならくらしのマーケット、階段や戸の条件を伝えて見積もりを集めるならミツモア、業者探しから手配まで任せるなら生活110番、搬出後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        母屋は使用頻度で、蔵は引き継ぐ意味があるかどうかで決める。基準を二つ持って始めれば、途中で判断が行き詰まる場面は減ります。蔵は棚一段ずつ区切って記録を残しながら進め、決めきれない物は保留の場所に集めておく。屋外は、雪の重みがかかる場所を空けることだけを目標にする。この段取りにしておけば、限られた季節のなかでも作業が前へ進みます。作業の範囲と現地の条件をそろえたうえで複数社の見積もりを比べ、総額と内訳に納得してから依頼してください。
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
