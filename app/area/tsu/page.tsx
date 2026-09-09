import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/tsu/";
const UPDATED = "2026年9月8日";
const UPDATED_ISO = "2026-09-08";

export const metadata: Metadata = {
  title: "津のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "津でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、社宅・借り上げ住宅の退去で会社の手続きと片付けの手配を並行して進める段取り、赴任先で増えた家財を「次の住まいに入るか」で減らす考え方まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "津のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "津でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。社宅退去の並行段取りと赴任先で増えた家財の減らし方も解説します。",
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
      "対応エリアは全国47都道府県で、津からも利用できます。相談・見積もりは無料です。転勤で津に住んでいた家族が、実家の家財整理を遠くから進めるというケースでは、現地に行ける回数が限られ、一度の訪問で見積もりから作業まで段取りを付けたい場面が出てきます。遺品整理を専門とする審査済み業者の中から、訪問できる日程を伝えて見積もりを比較できるため、離れて暮らす家族の家財整理をどこに任せるか迷ったときの最初の相談先に向いています。",
    ],
    recommend: [
        "遺品整理・生前整理を伴う実家の家財整理を頼みたい人",
        "審査を通過した業者の中から選びたい人",
        "現地に行ける日程を伝えたうえで見積もりを比べたい人",
        "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（津対応）" },
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
      "対応エリアは日本全国で、津の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。引っ越し業者が運ばない大型家具だけ回収してほしい、荷造りは自分で進めたい、というように、必要な部分だけを切り出して依頼したい場面と相性のよいサービスです。退去日が決まっている片付けでは、予約の日程と料金を画面で確認しながら決められる点が使いやすい場面です。",
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
      "対応エリアは全国47都道府県です。「退去日が近く、引っ越しの前日に回収してほしい」「社宅の備え付け設備は残すので、持ち込んだ家財だけ見てほしい」といった依頼内容の事情を、チャットで先に伝えたうえで見積もりを比較できるのが強みです。日程と作業範囲に相談したい点がある片付けで、条件のかみ合う業者を津で効率よく絞り込みたい人に向いています。",
    ],
    recommend: [
        "複数社の見積もりを一度に集めて比較したい人",
        "退去日に合わせた日程や作業範囲を相談してから決めたい人",
        "費用の相場観を先につかみたい人",
        "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（津対応）" },
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
      "受付は電話・LINEに対応しています。退去前の片付けでは、家財の回収と同時に部屋の清掃や設備の手入れが必要になることも少なくありません。まず電話やLINEで状況を伝えて手配まで任せられるため、業者を探して回る時間が取れない人や、何から頼めばよいか整理が付いていない段階の相談先に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、津で利用する場合は、津に対応する業者をサイト内で検索して選ぶ使い方になります。家財を運び出したあとの部屋は、家具の跡やほこりが目立ちやすく、退去の立ち会いを控えている場合は清掃まで済ませておきたいものです。搬出後の清掃まで組み合わせて依頼先を探したいときに、住まい関連の作業をあわせて検索できるのが便利な場面です。",
    ],
    recommend: [
        "不用品回収とクリーニングをまとめて探したい人",
        "出店型マーケットで料金を見ながら業者を選びたい人",
        "口コミを確認してから予約したい人",
        "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "津対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月16日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（津から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 退去日と会社の手続きの期限を一枚にまとめる",
    b:
      "片付けの出発点は、退去日、鍵の返却日、会社への届け出の期限、引っ越しの日程を一枚の表にまとめることです。社宅や借り上げ住宅では、退去の連絡先や立ち会いの担当が会社側にあることが多く、片付けの日程はそれに合わせて決まります。あわせて部屋ごとに中の様子が分かる写真を撮り、持ち込んだ家財と備え付けの設備を区別しておくと、見積もりの精度が上がります。",
  },
  {
    t: "② 「持っていく・送る・手放す」に分けて、手放す分だけをまとめる",
    b:
      "次の住まいに持っていく物、実家などに送る物、手放す物の三つに分け、業者に頼むのは手放す分だけに絞ります。引っ越し業者が運ばない物や、次の住まいに入らない大型家具は手放す側に回します。仕分けの済んだ物は処分ルートごとにまとめ、置き場所を一か所に決めておくと、回収の日に迷いません。",
  },
  {
    t: "③ 許可・保険・古物商許可を確認する",
    b:
      "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無が判断材料になります。借りている住まいから家財を運び出す作業では、建物の破損も含めて搬出時の事故に備えた賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも確認ポイントです。",
  },
  {
    t: "④ 退去日に合わせた日程で複数の見積もりを比べる",
    b:
      "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。みんなの遺品整理やミツモアの一括見積もりを使い、同じ写真と同じ希望日を各社に伝えて比較すると、金額の差が何によるものかが見えます。退去日の直前は予約が取りにくくなることもあるため、日程が決まった時点で早めに見積もりを取り、金額と内訳に納得してから依頼を確定しましょう。",
  },
];

const faqs = [
  {
    q: "津のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "社宅の退去で、備え付けの家具や設備はどう扱えばよいですか？",
    a: "社宅や借り上げ住宅には、会社や貸主が用意した備え付けの設備が含まれていることがあり、持ち込んだ家財とは扱いが分かれます。どれが備え付けで、どれが自分の物かを入居時の書類や会社の担当窓口で確認し、業者に依頼する範囲を持ち込んだ家財に限定して伝えましょう。判断が付かない物は、勝手に処分せず先に確認しておくことが大切です。",
  },
  {
    q: "退去日まで日数がないのですが、間に合いますか？",
    a: "対応の可否は業者と日程によって異なります。急ぎの場合は、複数の業者に希望日を伝えて空きを確認し、対応できる業者から選ぶ進め方が現実的です。あわせて、手放す物を先に一か所にまとめておくと、作業の見積もりと当日の進行が早くなります。日程に余裕がある段階で相談を始めるほど選択肢は増えるため、退去日が決まった時点で動き出すのがおすすめです。",
  },
  {
    q: "次の赴任先に持っていくか迷う家財は、いったん預けることはできますか？",
    a: "トランクルームやレンタル収納を利用して、次の住まいが決まるまで家財を預ける方法があります。預ける費用と期間、取り出す手間を考えると、次の住まいに入る見込みがない物は手放したほうが結果的に楽になることも多いため、預ける物は「必ず使う物」に絞るのが基本です。預け先の選び方は当サイトの関連ページも参考にしてください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは津でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お助けうさぎも関東圏が中心のため、津は対応エリア外です。お部屋片付け日本一は関東と東海・中部の一部、ゴミ屋敷専門パートナーズは関東・東海・関西とされていますが、三重県内の対応可否は住所ごとに確認が必要です。本記事では、津から確実に利用できる全国対応・検索型のサービスを紹介しています。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。自力で運べる少量で日程に余裕があるなら自治体、退去日が迫っている場合や大型家具がある場合は業者への依頼が向いています。申し込み方法や対象品目は津市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
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

export default function AreaTsuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "津のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "津でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "津のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#tsu5",
      label: "1｜津のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "津から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#tsu-jijo", label: "2｜津で片付け業者の利用を検討する場面" },
    { href: "#shataku-heikou", label: "3｜社宅・借り上げ住宅の退去は「会社の手続き」と「片付けの手配」を並行で進める" },
    { href: "#tsugi-sumai", label: "4｜赴任先で増えた家財は「次の住まいに入るか」で残す量を決める" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜津の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "津の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          津のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["津", "ゴミ屋敷片付け", "不用品回収", "社宅退去の片付け", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「転勤が決まり、社宅の退去まで日数がないのに、荷物が思ったより増えている」「会社への届け出と引っ越しの手配で手一杯で、不用品の処分まで手が回らない」「次の住まいの間取りが分からず、何を持っていけばよいのか決められない」——津でこうした行き詰まりを感じている方は少なくありません。転勤に伴う退去は、会社の手続き、引っ越し、片付けの三つが同時に走るため、順番を決めずに始めると、退去日の直前に手放す物だけが残ってしまいがちです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、津から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。あわせて、社宅・借り上げ住宅の退去で会社の手続きと片付けの手配を並行して進める段取り、赴任先で増えた家財を「次の住まいに入るか」で減らす考え方もまとめています。業者選びの参考にしてください。
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
      <H2 id="tsu5" num="1">津のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        津から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お助けうさぎは関東圏が中心の対応エリアで津は対応外、お部屋片付け日本一・ゴミ屋敷専門パートナーズは東海を対応エリアに含みますが三重県内の対応可否は住所ごとの確認が必要なため、本記事のカードには津から確実に利用しやすい全国対応・検索型のサービスのみを掲載しています。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        津から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、津から利用できる5社の一覧です。
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

      {/* 2｜津の事情 */}
      <H2 id="tsu-jijo" num="2">津で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        津は、三重県の県庁所在地で、県の行政機関や企業の拠点が置かれ、転勤で数年単位の暮らしをする人も多い街です。社宅や借り上げ住宅、単身赴任向けの賃貸に住む世帯では、入居時は身軽でも、数年のあいだに家具や家電、趣味の道具が増え、退去が決まってはじめて物量に気付くという流れが起きやすくなります。転勤に伴う退去は日程が会社の都合で決まるため、片付けに使える期間が短く、会社の手続きと引っ越しの手配に追われるうちに、不用品の処分が後回しになりがちです。市街地の集合住宅では、単身世帯の部屋の片付けや実家の家財整理といった相談も発生します。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「退去日までに自力では終わらない」「引っ越し業者が運ばない大型家具の行き先が決まらない」「備え付けの設備と自分の物の区別が付かない」という状況では、搬出から処分までまとめて任せられる片付け業者・サービスを検討する場面です。反対に、自力で指定場所まで運べる少量であれば、後述する自治体の粗大ごみ収集を使うほうが費用を抑えやすいのが一般的です。まずは退去日と手続きの期限を一枚にまとめ、どこを自分でやり、どこを任せるかの線を引くところから始めましょう。単身赴任の退去に特有の段取りは<Link href="/tanshin-funin-taikyo-katazuke/" className="text-primary underline underline-offset-2">単身赴任の退去片付け</Link>で解説しています。
      </p>

      {/* 3 */}
      <H2 id="shataku-heikou" num="3">社宅・借り上げ住宅の退去は「会社の手続き」と「片付けの手配」を並行で進める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        社宅や借り上げ住宅の退去では、退去の連絡先、立ち会いの担当、鍵の返却先が会社側にあることが多く、一般の賃貸とは手続きの流れが異なります。まず会社の担当窓口に、退去日、立ち会いの有無と担当者、原状回復の範囲、備え付け設備の扱いを確認し、その結果を片付けの計画に反映させます。会社の手続きが確定するのを待ってから片付けを始めると期間が足りなくなるため、確認と並行して、手放す物の仕分けと業者への見積もり依頼を進めるのが現実的な段取りです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        並行して進めるときは、「会社に確認すること」「引っ越し業者に頼むこと」「片付け業者に頼むこと」の三つを紙に分けて書き出し、期限を並べておくと、抜けが見つけやすくなります。備え付け設備と持ち込んだ家財の区別が付かない物は、勝手に処分せず先に確認しておきましょう。一般の賃貸退去との違いを含めた確認事項は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けガイド</Link>、原状回復との切り分けは<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">原状回復と片付けの線引き</Link>、部屋に物を残してしまった場合の扱いは<Link href="/chintai-zanchibutsu/" className="text-primary underline underline-offset-2">賃貸の残置物の扱い</Link>で解説しています。
      </p>

      {/* 4 */}
      <H2 id="tsugi-sumai" num="4">赴任先で増えた家財は「次の住まいに入るか」で残す量を決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        赴任先で買い足した家具や家電は、「まだ使える」という理由で次の住まいに運ばれがちですが、間取りや収納が変われば、入らない物・置き場のない物が出てきます。判断の軸を「使えるか」ではなく「次の住まいに入るか、そこで使うか」に置き換えると、持っていく量が減り、引っ越しの荷物も片付けの物量も同時に軽くなります。次の住まいが決まっていない段階では、間取りに関係なく使う物、迷う物、手放す物の三つに分け、迷う物の扱いを最後に決める進め方が有効です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        迷う物を一時的に預ける方法もありますが、預ける期間と費用、取り出す手間を考えると、次の住まいで使う見込みがない物は手放したほうが結果的に楽になることが多いものです。預ける物は「必ず使う物」に絞り、残りは買取や譲渡も含めて手放す先を決めます。転勤族の家財の預け方は<Link href="/tenkinzoku-kazai-azuke/" className="text-primary underline underline-offset-2">転勤族の家財の預け方</Link>、引っ越し先が未定のときの考え方は<Link href="/hikkoshisaki-mitei-kazai/" className="text-primary underline underline-offset-2">引っ越し先未定の家財整理</Link>、引っ越し前に減らす手順は<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>でまとめています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        津市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目のように、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目・出し方は自治体ごとに異なるため、必ずお住まいの市区町村の公式案内をご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自力で運べる少量なら自治体の収集、大型家具や物置ひとつ分のようにまとまった量なら業者、という使い分けが基本形です。申し込みから収集までの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>、希望日が取れないときの対処は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの予約が取れないときの対処</Link>で解説しています。自治体で受け付けている場合の持ち込みについては<Link href="/jiko-hannyu-shobun/" className="text-primary underline underline-offset-2">ごみ処理施設への自己搬入</Link>も参考にしてください。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で確認できます。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        津で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">津の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜手続きと片付けを並行させれば、短い退去期間でも間に合う</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        津から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。現地に行ける日程を伝えて比べるならみんなの遺品整理、必要な部分だけを切り出して頼むならくらしのマーケット、退去日に合わせた日程を相談しながら見積もりを比べるならミツモア、業者探しから手配まで任せるなら生活110番、搬出後の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        転勤に伴う退去の片付けは、会社の手続きの確認を待たずに、手放す物の仕分けと見積もりの依頼を並行して進めるところから始めると、短い期間でも段取りが組めます。赴任先で増えた家財は「次の住まいに入るか」で残す量を決めること、複数の見積もりを同じ条件で比べて総額に納得してから依頼することが、後悔を防ぐ共通のポイントです。
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
            <Link href="/area/mito/" className="text-primary underline underline-offset-2">水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選</Link>
          </li>
          <li>
            <Link href="/area/toyama/" className="text-primary underline underline-offset-2">富山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2">金沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
          <li>
            <Link href="/area/matsue/" className="text-primary underline underline-offset-2">松江のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/fukui/" className="text-primary underline underline-offset-2">福井のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/tottori/" className="text-primary underline underline-offset-2">鳥取のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/yamaguchi/" className="text-primary underline underline-offset-2">山口のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/oita/" className="text-primary underline underline-offset-2">大分のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/miyazaki/" className="text-primary underline underline-offset-2">宮崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kofu/" className="text-primary underline underline-offset-2">甲府のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/nara/" className="text-primary underline underline-offset-2">奈良のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/otsu/" className="text-primary underline underline-offset-2">大津のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2">川崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2">相模原のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/morioka/" className="text-primary underline underline-offset-2">盛岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hamamatsu/" className="text-primary underline underline-offset-2">浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/himeji/" className="text-primary underline underline-offset-2">姫路のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kurashiki/" className="text-primary underline underline-offset-2">倉敷のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/sakai/" className="text-primary underline underline-offset-2">堺のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/takasaki/" className="text-primary underline underline-offset-2">高崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/funabashi/" className="text-primary underline underline-offset-2">船橋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/hachioji/" className="text-primary underline underline-offset-2">八王子のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
          </li>
          <li>
            <Link href="/area/kawaguchi/" className="text-primary underline underline-offset-2">川口のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
