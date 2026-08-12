import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/yokohama/";
const UPDATED = "2026年8月12日";
const UPDATED_ISO = "2026-08-12";

export const metadata: Metadata = {
  title: "横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "横浜でゴミ屋敷片付け・不用品回収・清掃を頼める業者5社を比較。みんなの遺品整理・粗大ゴミ回収本舗（定額パック9,800円〜・公式記載）・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズの料金目安と特徴、坂や階段の多い住宅地・エレベーターなし物件の搬出の注意点まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "横浜でゴミ屋敷片付け・不用品回収を頼める業者5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。坂・階段の多い住宅地やエレベーターなし物件の搬出の注意点も解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/hero-final.png"],
  },
};

// アフィリエイトリンク（提携開始後にURLを設定。nullの間は公式サイトへ）
const AFF: Record<string, string | null> = {
  "minna-ihinseiri": null,
  "sodaigomi-honpo": null,
  "blue-clean": null,
  "kataduke-nihonichi": null,
  "gomiyashiki-partners": null,
  "kurashi-market": null,
  mitsumoa: null,
  seikatsu110: null,
  "sumai-hotline": null,
  "otasuke-usagi": null,
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
      "対応エリアは全国47都道府県で、横浜を含む関東は登録業者が多いエリアです。相談・見積もりは無料のため、実家の片付けや遺品整理を伴うゴミ屋敷の整理で「どの業者が信頼できるか分からない」という横浜・神奈川の方の最初の相談先に向いています。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "複数社の見積もりを比較してから決めたい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（横浜対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料の記載を確認しています（2026年8月12日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "sodaigomi-honpo",
    num: "1-2",
    catch: "定額パック9,800円〜・最短30分",
    name: "粗大ゴミ回収本舗",
    officialUrl: "https://sodaigomi-kaishu.com/",
    image: "/images/hero-a.png",
    imageAlt: "粗大ゴミ回収本舗の紹介イメージ",
    intro: [
      "粗大ゴミ回収本舗は、株式会社ゴン（埼玉県戸田市）が運営する関東一円対応の不用品・粗大ゴミ回収業者です。S/M/L/LLの4段階のパックプランによる定額料金制（9,800円〜・公式記載）を採用しており、積載量ベースで料金の見当を付けやすいのが特徴です。",
      "不用品・粗大ゴミの回収のほか、ゴミ屋敷の大掃除・遺品整理・片付け代行にも対応します。最短30分での駆けつけと8:00〜24:00の受付を掲げており、対応エリアは東京・神奈川・埼玉・千葉の関東圏です。神奈川が対応エリアに含まれるため、横浜からの依頼にも使えます。",
    ],
    recommend: [
      "単品〜トラック積み放題まで料金の目安を先に知りたい人",
      "引越し前などで急いで不用品を処分したい横浜の人",
      "深夜近くまで受付している業者に相談したい人",
      "粗大ゴミの回収とあわせて部屋の片付けも頼みたい人",
    ],
    table: [
      { k: "料金", v: "定額パック9,800円〜（公式記載）", note: "S/M/L/LLのパックプラン制" },
      { k: "対応スピード", v: "最短30分", note: "受付は8:00〜24:00" },
      { k: "対応エリア", v: "関東一円（東京・神奈川・埼玉・千葉）" },
      { k: "運営会社", v: "株式会社ゴン（埼玉県戸田市）" },
      { k: "対応内容", v: "不用品・粗大ゴミ回収、ゴミ屋敷の大掃除、遺品整理、片付け代行" },
    ],
    memo:
      "公式サイト（sodaigomi-kaishu.com）でパックプランの定額料金制（9,800円〜）・最短30分・8:00〜24:00受付の記載を確認しています（2026年8月12日時点）。物量が多い場合はパックのサイズが上がるため、訪問見積もりで総額を確認してから依頼するのがおすすめです。",
  },
  {
    slug: "blue-clean",
    num: "1-3",
    catch: "特殊清掃まで一貫対応",
    name: "ブルークリーン",
    officialUrl: "https://b-clean.jp/",
    image: "/images/hero-b.png",
    imageAlt: "ブルークリーンの紹介イメージ",
    intro: [
      "ブルークリーンは、東京都大田区に本社を置くブルークリーン株式会社が運営する清掃・片付け業者です。孤独死・事故現場などの特殊清掃（清掃・消毒）を主力とし、遺品整理・残置物撤去から原状回復工事まで一貫して対応できるのが強みです。",
      "対応エリアは東京・千葉・埼玉・神奈川が中心で、横浜も対応範囲に含まれます。相談無料・365日24時間対応・即日対応をうたっており、強い汚れや臭いを伴うゴミ屋敷、長期間放置された部屋など、通常の片付け業者では対応が難しいケースの相談先として候補になります。",
    ],
    recommend: [
      "汚れ・臭いが強い部屋の清掃までまとめて頼みたい人",
      "特殊清掃が必要な現場で業者を探している人",
      "退去に向けて原状回復まで相談したい人",
      "深夜・早朝でも受け付けている業者に相談したい人",
    ],
    table: [
      { k: "料金目安", v: "5万円〜100万円", note: "当サイト掲載の目安。特殊清掃の有無・作業範囲で大きく変動" },
      { k: "受付", v: "相談無料・365日24時間対応・即日対応をうたう" },
      { k: "対応エリア", v: "東京・千葉・埼玉・神奈川を中心（横浜対応）" },
      { k: "運営会社", v: "ブルークリーン株式会社（東京都大田区）" },
      { k: "対応内容", v: "特殊清掃、ゴミ屋敷片付け、遺品整理、残置物撤去、原状回復工事" },
    ],
    memo:
      "公式サイト（b-clean.jp）で、特殊清掃を主力に遺品整理・原状回復まで一貫対応する旨と、相談無料・365日24時間対応の記載を確認しています（2026年8月12日時点）。特殊清掃を伴う作業は一般的な片付けより費用が高くなりやすいため、現地見積もりで作業範囲と総額の確認が必要です。",
  },
  {
    slug: "kataduke-nihonichi",
    num: "1-4",
    catch: "2006年設立・賠償保険完備",
    name: "お部屋片付け日本一",
    officialUrl: "https://kataduke-nihonichi.com/",
    image: "/images/hero-b.png",
    imageAlt: "お部屋片付け日本一の紹介イメージ",
    intro: [
      "お部屋片付け日本一は、株式会社アースアラウンド（2006年設立・東京都文京区）が運営する片付け業者です。ゴミ屋敷片付け・不用品回収・遺品整理・引越しに伴う片付けなどを一括で依頼でき、即日対応可・年中無休で受け付けています。対応エリアは関東（東京・埼玉・千葉・神奈川・茨城）と東海・中部の一部で、横浜は対応範囲です。",
      "産業廃棄物収集運搬業許可・古物商許可を持ち、最大1億円の賠償保険を完備しています。階段の上り下りや長い搬出経路で建物・家財に接触するリスクが高くなりがちな横浜の住宅事情では、保険加入業者であることは安心材料の一つです。",
    ],
    recommend: [
      "運営歴の長い業者に頼みたい人",
      "片付け・回収・遺品整理をまとめて依頼したい人",
      "搬出時の万一に備えて保険加入の業者を選びたい人",
      "即日で対応してほしい人",
    ],
    table: [
      { k: "料金目安", v: "1万円〜15万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "受付", v: "即日対応可・年中無休" },
      { k: "対応エリア", v: "関東（東京・埼玉・千葉・神奈川・茨城）、東海・中部の一部" },
      { k: "運営会社", v: "株式会社アースアラウンド（2006年設立・東京都文京区）" },
      { k: "許可・保険", v: "産業廃棄物収集運搬業許可・古物商許可、最大1億円の賠償保険完備" },
    ],
    memo:
      "公式サイト（kataduke-nihonichi.com）で、即日対応可・年中無休、産業廃棄物収集運搬業許可・古物商許可の保有、最大1億円の賠償保険完備の記載を確認しています（2026年8月12日時点）。繁忙期は希望日程が埋まりやすいため、日程に余裕を持った相談がおすすめです。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-5",
    catch: "ゴミ屋敷専門・最短到着60分",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社（大阪府大阪市）が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、ゴミ屋敷を「片付けたあと住める状態に戻す」ところまで一括で依頼できます。",
      "公式サイトでは「業界最安値に挑戦」「最短到着60分」を掲げており、見積もりは無料で買取査定にも対応します。対応エリアは関東・東海・関西の各府県で、横浜を含む神奈川も対応範囲です。プライバシーへの配慮を重視する方の相談先としても候補になります。",
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
      { k: "対応エリア", v: "関東・東海・関西の各府県（横浜対応）" },
      { k: "運営会社", v: "TKC株式会社（大阪府大阪市）" },
    ],
    memo:
      "公式サイト（gomikaisyu-pro.com）で「業界最安値に挑戦」「最短到着60分」の表記と、見積もり無料・買取査定ありの記載を確認しています（2026年8月12日時点）。ゴミ屋敷の片付け費用は物量で大きく変わるため、写真見積もりや訪問見積もりで総額を確定させてから依頼しましょう。",
  },
];

// 比較表（10社・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "sodaigomi-honpo", name: "粗大ゴミ回収本舗", area: "関東一円", price: "定額パック9,800円〜（公式記載）", point: "最短30分・8:00〜24:00受付" },
  { slug: "blue-clean", name: "ブルークリーン", area: "東京・千葉・埼玉・神奈川中心", price: "5万円〜100万円", point: "特殊清掃〜原状回復まで一貫対応" },
  { slug: "kataduke-nihonichi", name: "お部屋片付け日本一", area: "関東・東海/中部", price: "1万円〜15万円", point: "2006年設立・最大1億円の賠償保険完備" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西", price: "5万円〜50万円", point: "ゴミ屋敷専門・消臭や害虫駆除まで対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
  { slug: "otasuke-usagi", name: "お助けうさぎ", area: "首都圏中心の9都県", price: "3万円〜30万円", point: "回収・買取・清掃を一括対応（神奈川対応）" },
];

const steps = [
  {
    t: "① 片付けたい範囲と搬出の難易度を整理する",
    b: "不用品を数点回収してほしいのか、部屋・家全体を片付けたいのか、清掃や消臭まで必要なのかを整理しましょう。あわせて横浜では、坂の途中の家か、階段を使う搬出か、エレベーターの有無といった搬出の難易度が費用を左右します。部屋の写真に加えて、建物の入口・階段・前面道路の写真を撮っておくと見積もり精度が上がります。",
  },
  {
    t: "② 複数社の見積もりで「条件込みの総額」を比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。特に階段作業や長距離搬出の追加料金は業者ごとに設定が異なるため、同じ条件を伝えたうえで2〜3社の見積もりを取り、作業費・車両費・階段料金などの内訳と総額を比較しましょう。",
  },
  {
    t: "③ 許可・保険・運営会社を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。階段や狭い通路での搬出は建物・家財に接触するリスクが上がるため、賠償保険の有無は横浜の住宅事情では特に重要な確認ポイントです。運営会社名・所在地が明記されているかも信頼性の判断材料になります。",
  },
  {
    t: "④ 駐車位置・作業時間帯・近隣配慮をすり合わせる",
    b: "坂道や狭い道路ではトラックを停められる場所が限られることがあります。駐車位置と部屋までの距離、作業できる時間帯（マンションの規約や近隣への配慮）を事前に伝えておくと、当日の追加料金やトラブルを防げます。見積もり時に伝えた条件と請求内容が変わらないか、作業前に最終確認しましょう。",
  },
];

const faqs = [
  {
    q: "横浜のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、不用品回収は粗大ゴミ回収本舗の定額パック9,800円〜（公式記載）など少量なら1万円前後から、部屋全体の片付けはお部屋片付け日本一で1万円〜15万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円、特殊清掃を伴う場合はブルークリーンで5万円〜100万円が目安です。実際の金額は物量・間取り・搬出条件で変わるため、必ず見積もりで総額を確認してください。",
  },
  {
    q: "坂の上の家や前面道路が狭い家でも回収に来てもらえますか？",
    a: "依頼自体は可能です。ただし、トラックを家の前に停められない場合はスタッフが荷物を運ぶ距離が長くなり、追加料金の対象になることがあります。見積もりの際に「家の前まで車が入れない」「坂の途中にある」「駐車できるのは坂の下の道路」といった条件を具体的に伝え、搬出距離を含めた総額を提示してもらいましょう。現地の写真を送っておくと見積もりのずれを防げます。",
  },
  {
    q: "エレベーターのないマンション・アパートの上層階でも依頼できますか？また料金は上がりますか？",
    a: "本記事で紹介した各社は、部屋の広さや建物の形態を問わず片付け・回収に対応しています。ただし、エレベーターなしの上層階からの搬出は階段作業となるため、階数に応じた階段料金が加算される場合があります。加算の有無・金額は業者ごとに異なるため、見積もり時に建物の階数とエレベーターの有無を必ず伝え、条件込みの総額で比較してください。",
  },
  {
    q: "横浜で即日対応してもらえる業者はありますか？",
    a: "本記事で紹介した中では、粗大ゴミ回収本舗が最短30分の駆けつけ（受付8:00〜24:00）、お部屋片付け日本一が即日対応可・年中無休、ブルークリーンが365日24時間対応・即日対応、ゴミ屋敷専門パートナーズが最短到着60分をそれぞれ公式サイトで掲げています。当日の空き状況によるため、急ぎの場合はまず電話で当日対応の可否を確認しましょう。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、申し込みから収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。坂や階段のある立地で大型家具を自分で運び出すのが難しい場合や、量が多い場合、急いで処分したい場合は、搬出から任せられる業者への依頼が選択肢になります。申し込み方法や対象品目は横浜市など自治体ごとに異なるため、お住まいの市区町村の案内をご確認ください。",
  },
  {
    q: "近所に知られずにゴミ屋敷を片付けてもらえますか？",
    a: "ゴミ屋敷専門パートナーズのように、プライバシーに配慮した対応を掲げる業者があります。作業時間帯の調整や社名の入っていない車両での訪問など、どこまで配慮してもらえるかは業者・状況により異なるため、見積もり相談の際に「近隣に知られたくない」という希望を具体的に伝えて、対応可否を確認するのがおすすめです。",
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

export default function AreaYokohamaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "横浜でゴミ屋敷片付け・不用品回収・清掃を頼める業者5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#yokohama5",
      label: "1｜横浜のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "横浜で使える片付け・回収サービス10社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#yokohama-jijo", label: "2｜横浜で片付け業者の利用を検討する場面" },
    { href: "#saka", label: "3｜坂・階段の多い住宅地では搬出条件が費用を左右する" },
    { href: "#elevator", label: "4｜エレベーターなし物件の搬出で確認すること" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜横浜の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "横浜の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          横浜のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["横浜", "ゴミ屋敷片付け", "不用品回収", "清掃", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「坂の上の実家に家財があふれて自分では運び出せない」「エレベーターのないアパートの上の階からゴミを出したい」「部屋がゴミ屋敷状態になってしまった」——横浜でこうした悩みを抱えたとき、どの業者に頼めばよいか迷う方は多いはずです。片付け・不用品回収の業者は、料金体系や対応範囲（回収のみか、清掃・消臭まで対応するか）、追加料金の設定がそれぞれ異なるため、比較せずに選ぶと「思ったより高くついた」「頼みたい作業に対応していなかった」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、横浜から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月12日時点）をもとに比較しました。坂や階段の多い住宅地・エレベーターなし物件という横浜で起こりがちな搬出条件で、見積もり前に伝えるべきこともまとめています。業者選びの参考にしてください。
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
      <H2 id="yokohama5" num="1">横浜のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        横浜から依頼できる片付け・不用品回収業者のうち、対応内容の異なる5社を紹介します。いずれも神奈川（横浜）が対応エリアに含まれることを確認したうえで掲載しています。料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月12日時点）にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        横浜で使える片付け・回収サービス10社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        下で詳しく紹介する5社に加え、口コミや一括見積もりで地域の業者を探せる比較サービスを含めた10社の一覧です。
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
        ※料金は当サイト掲載の目安（最低価格・幅）です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の詳しい口コミ・評判ページに移動できます。
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

          <H4>編集部の一次確認メモ（2026年8月12日時点）</H4>
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

      {/* 2｜横浜の事情 */}
      <H2 id="yokohama-jijo" num="2">横浜で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        横浜は、駅周辺のマンション・アパートから丘陵地に広がる住宅地まで、住まいの形が幅広い都市です。単身世帯の「気づいたら部屋が物であふれていた」という相談から、長く住んだ一戸建ての家財整理、実家の片付け・遺品整理まで、片付けのニーズも多様です。そして横浜で特徴的なのが、坂道や階段の上に建つ家、前面道路の狭い住宅地が少なくないという地形面の事情です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「量が多い」「期限がある」「自分で運び出せない」という状況では、搬出から処分（業者によっては清掃・消臭）までまとめて任せられる片付け業者が選択肢になります。特に、坂や階段を挟む搬出は自力ではけがのリスクも高いため、大型家具・家電が絡む場合は無理をせず業者に任せるのが現実的です。少量の粗大ごみを急がず処分するだけであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。
      </p>

      {/* 3｜坂・階段 */}
      <H2 id="saka" num="3">坂・階段の多い住宅地では搬出条件が費用を左右する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        横浜の丘陵地の住宅では、「家の前までトラックが入れない」「道路から玄関まで階段を上る」という立地が珍しくありません。こうした物件では、スタッフが家具・家電を人力で運ぶ距離と労力が増えるため、階段作業や長距離搬出の追加料金が設定されている業者が多く、同じ物量でも平坦な立地より総額が高くなることがあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        重要なのは、この条件を見積もりの段階で正確に伝えることです。「トラックはどこに停められるか」「玄関まで階段が何段くらいあるか」「道路から玄関までの距離」を伝え、可能なら現地の写真も送りましょう。条件を伝えずに当日を迎えると、追加料金の交渉が現場で発生し、トラブルの原因になります。逆に、条件込みの見積もりを複数社から取れば、坂・階段のある立地での対応に慣れた業者を金額と説明の丁寧さで見分けやすくなります。
      </p>

      {/* 4｜エレベーターなし物件 */}
      <H2 id="elevator" num="4">エレベーターなし物件の搬出で確認すること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        エレベーターのないマンション・アパートの上層階からの搬出は、階段の往復回数がそのまま作業量になります。多くの業者は階数に応じた階段料金を設定しているため、見積もり時に「何階か」「エレベーターの有無」を必ず伝えましょう。階段の幅が狭い、踊り場で大型家具が回らないといった建物側の制約があると、吊り下ろしなど別の方法が必要になる場合もあり、対応可否も含めて事前確認が必要です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、共用階段・廊下を使う搬出では、他の住人の通行への配慮や共用部の養生も大切です。管理会社・大家への連絡が必要かどうかを確認し、業者には養生の対応と作業時間帯の希望を伝えておくと、近隣トラブルを防げます。搬出が難しい物件ほど、見積もり時の説明が具体的な業者を選ぶことが、当日の安心につながります。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        横浜市など神奈川の自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ずお住まいの市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、「坂や階段があって自分では運び出せない」「引越しが迫っていて収集日を待てない」「部屋全体の片付けや清掃もあわせて頼みたい」という場合は、業者への依頼が向いています。自分で搬出できる少量は自治体、運び出しが難しい大型品や急ぎ・大量の処分は業者、と使い分けるのが費用と手間のバランスを取りやすい考え方です。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        横浜で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">横浜の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜搬出条件まで伝えて比較するのが横浜流</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        横浜から依頼できるゴミ屋敷片付け・不用品回収業者5社を紹介しました。遺品整理を伴うなら審査済み業者を比較できるみんなの遺品整理、不用品・粗大ゴミの処分なら定額パックの粗大ゴミ回収本舗、汚れ・臭いが強い部屋や特殊清掃が必要ならブルークリーン、片付け全般をまとめて頼むなら賠償保険完備のお部屋片付け日本一、ゴミ屋敷に特化した業者を選ぶならゴミ屋敷専門パートナーズと、目的によって向いている業者は変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        坂・階段・エレベーターなしといった搬出条件で費用が変わりやすいのが横浜の特徴です。条件を具体的に伝えたうえで複数社の見積もりを比較し、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った業者を選んでください。
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
            <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
        掲載情報は2026年8月12日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
