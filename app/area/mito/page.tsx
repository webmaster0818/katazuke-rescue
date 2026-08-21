import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/mito/";
const UPDATED = "2026年8月16日";
const UPDATED_ISO = "2026-08-16";

export const metadata: Metadata = {
  title: "水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選【2026年版】",
  description:
    "水戸でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス6社を比較。みんなの遺品整理・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎ・くらしのマーケット・ミツモアの料金目安と特徴、庭付き戸建ての一括整理と、片付けをリバウンドさせない年間の物の流れづくりまで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選【2026年版】",
    description:
      "水戸でゴミ屋敷片付け・不用品回収を頼める業者・サービス6社を、当サイト掲載の料金目安・公式サイト確認情報で比較。庭付き戸建ての一括整理と年間の物の流れづくりの考え方も解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/hero-final.png"],
  },
};

// アフィリエイトリンク（提携開始後にURLを設定。nullの間は公式サイトへ）
const AFF: Record<string, string | null> = {
  "minna-ihinseiri": null,
  "kataduke-nihonichi": null,
  "gomiyashiki-partners": null,
  "otasuke-usagi": null,
  "kurashi-market": null,
  mitsumoa: null,
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
      "対応エリアは全国47都道府県で、水戸からも利用できます。相談・見積もりは無料です。庭付き戸建ての遺品整理・生前整理は、屋内の家財に加えて納戸や庭先の物まで対象が広がり、総量が読みにくくなりがちです。家全体の状況を伝えたうえで、審査を通過した業者の見積もりを比較できるため、実家をまるごと整理したいときの最初の相談先に向いています。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う戸建ての片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "家全体の整理を複数社の見積もりで比較したい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（水戸対応）" },
      { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
      { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
    ],
    memo:
      "公式サイト（m-ihinseiri.jp）で、審査済み業者のみ掲載・最大3社の一括見積もり・相談無料・全国対応の記載を確認しています（2026年8月16日時点）。自社で作業を行う業者ではなく紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。",
  },
  {
    slug: "kataduke-nihonichi",
    num: "1-2",
    catch: "許可・保険を備えた一括対応の専門業者",
    name: "お部屋片付け日本一",
    officialUrl: "https://kataduke-nihonichi.com/",
    image: "/images/hero-b.png",
    imageAlt: "お部屋片付け日本一の紹介イメージ",
    intro: [
      "お部屋片付け日本一は、株式会社アースアラウンド（2006年設立・東京都文京区）が運営する、不用品回収・ゴミ屋敷片付け・遺品整理の専門業者です。実績は26,000件超（公式記載）で、産業廃棄物収集運搬業許可・古物商許可を持ち、最大1億円の賠償保険を完備しています。",
      "対応エリアは関東（東京・埼玉・千葉・神奈川・茨城）と東海・中部の一部で、公式サイトの対応エリアに茨城県・水戸市が含まれることを確認しています（2026年8月16日時点）。庭付き戸建ての一括整理では、家財の搬出で庭先や外構まわりを何度も行き来することになるため、賠償保険を備えた業者に頼めることは安心材料です。回収と買取の併用にも対応し、即日対応・年中無休をうたっています。",
    ],
    recommend: [
      "許可・保険のそろった専門業者に直接頼みたい人",
      "家一軒分の片付けをまとめて任せたい人",
      "買取の併用で費用を少しでも抑えたい人",
      "実績の多い業者を選びたい人",
    ],
    table: [
      { k: "料金目安", v: "1万円〜15万円", note: "当サイト掲載の目安。物量・間取りで変動" },
      { k: "見積もり", v: "無料・即日対応可（公式表記）" },
      { k: "対応エリア", v: "関東（茨城・水戸対応）・東海/中部の一部" },
      { k: "運営会社", v: "株式会社アースアラウンド（2006年設立）" },
      { k: "許可・保険", v: "産廃収集運搬業許可・古物商許可・最大1億円の賠償保険" },
    ],
    memo:
      "公式サイト（kataduke-nihonichi.com）の対応エリアページで、茨城県の対応市町村に水戸市が含まれることを確認しています（2026年8月16日時点）。実績26,000件超・許可・保険の内容は当サイトのレビューページ掲載値（公式サイト確認情報）にもとづきます。実際の総額は物量・搬出条件で変わるため、見積もりで確認してから依頼しましょう。",
  },
  {
    slug: "gomiyashiki-partners",
    num: "1-3",
    catch: "ゴミ屋敷専門・最短到着60分",
    name: "ゴミ屋敷専門パートナーズ",
    officialUrl: "https://gomikaisyu-pro.com/",
    image: "/images/hero-c.png",
    imageAlt: "ゴミ屋敷専門パートナーズの紹介イメージ",
    intro: [
      "ゴミ屋敷専門パートナーズは、TKC株式会社（大阪府大阪市）が運営するゴミ屋敷・汚部屋の片付け専門業者です。ゴミの搬出だけでなく、不用品の回収・買取、生前整理・遺品整理、ハウスクリーニング、害虫駆除・消臭まで対応し、ゴミ屋敷を「片付けたあと住める状態に戻す」ところまで一括で依頼できます。",
      "対応エリアは関東・東海・関西の各府県で、公式サイトの対応エリアに茨城県が含まれることを確認しています（2026年8月16日時点）。見積もりは無料で買取査定にも対応します。長年手を付けていなかった実家がゴミ屋敷状態になっているケースでは、片付け・清掃・消臭までまとめて任せられることが強みです。プライバシーへの配慮を重視する方の相談先としても候補になります。",
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
      { k: "対応エリア", v: "関東・東海・関西の各府県（茨城・水戸対応）" },
      { k: "運営会社", v: "TKC株式会社（大阪府大阪市）" },
    ],
    memo:
      "公式サイト（gomikaisyu-pro.com）で、対応エリアに茨城県が含まれることを確認しています（2026年8月16日時点）。「最短到着60分」の表記・見積もり無料・買取査定あり・料金目安は当サイトのレビューページ掲載値にもとづきます。ゴミ屋敷の片付け費用は物量で大きく変わるため、写真見積もりや訪問見積もりで総額を確定させてから依頼しましょう。",
  },
  {
    slug: "otasuke-usagi",
    num: "1-4",
    catch: "回収・買取・清掃を一括対応",
    name: "お助けうさぎ",
    officialUrl: "https://otasukeusagi.jp/",
    image: "/images/hero-a.png",
    imageAlt: "お助けうさぎの紹介イメージ",
    intro: [
      "お助けうさぎは、株式会社Tabinchuが運営する不用品回収・片付けサービスです。不用品回収・粗大ゴミ回収を中心に、ゴミ屋敷片付け・遺品整理・買取・ハウスクリーニングまで一括対応し、古物商許可・産業廃棄物収集運搬業許可のほか、遺品整理・特殊清掃関連の認定資格の保有をうたっています。",
      "対応エリアは東京・神奈川・埼玉・千葉・茨城・山梨・栃木・群馬・静岡の9都県で、公式サイトの対応エリアに茨城県の市町村が挙げられていることを確認しています（2026年8月16日時点）。電話1本で即日対応をうたい、買取を併設しているため、庭付き戸建ての整理で出やすい家具・家電・趣味の道具などを「回収と買取に分けて一度で片付けたい」場面に向いています。",
    ],
    recommend: [
      "回収と買取をまとめて一度で済ませたい人",
      "急ぎで来てほしい・即日で対応してほしい人",
      "許可・資格を確認できる業者に頼みたい人",
      "家具・家電から細かい物まで幅広く引き取ってほしい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜30万円", note: "当サイト掲載の目安。物量・間取りで変動" },
      { k: "対応スピード", v: "電話1本で即日対応（公式表記）" },
      { k: "対応エリア", v: "首都圏中心の9都県（茨城・水戸対応）" },
      { k: "運営会社", v: "株式会社Tabinchu" },
      { k: "許可・資格", v: "古物商許可・産廃収集運搬業許可・遺品整理/特殊清掃関連の認定資格" },
    ],
    memo:
      "公式サイト（otasukeusagi.jp）で、対応エリア9都県に茨城県が含まれ、県内の対応市町村が記載されていることを確認しています（2026年8月16日時点）。買取併設・許可・資格の内容は当サイトのレビューページ掲載値にもとづきます。実際の総額は物量・搬出条件で変わるため、見積もりで確認してから依頼しましょう。",
  },
  {
    slug: "kurashi-market",
    num: "1-5",
    catch: "口コミと料金で地域の業者を選べる",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/hero-c.png",
    imageAlt: "くらしのマーケットの紹介イメージ",
    intro: [
      "くらしのマーケットは、みんなのマーケット株式会社（東京都港区）が運営する、暮らしの出張・訪問サービスのオンラインマーケットプレイスです。不用品回収・粗大ゴミ回収・片付け・ハウスクリーニングなどのカテゴリで、地域の登録業者を料金と口コミを見ながら比較し、そのままオンラインで予約できます。",
      "対応エリアは日本全国で、水戸の住所から対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。「春は納戸、秋は庭まわり」というように、季節ごとに場所を区切って物の入れ替えと処分を進める使い方と相性がよく、年間の物の流れづくりの実行手段としても使いやすいサービスです。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "季節ごとに場所を区切って少しずつ片付けたい人",
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
    num: "1-6",
    catch: "最大5社の見積もりを比較",
    name: "ミツモア",
    officialUrl: "https://meetsmore.com/",
    image: "/images/hero-a.png",
    imageAlt: "ミツモアの紹介イメージ",
    intro: [
      "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。不用品回収・片付け・遺品整理のカテゴリがあり、見積もり依頼は無料です。",
      "対応エリアは全国47都道府県です。「母屋のほかに納戸と庭の物置があり、植木鉢や庭の道具も処分したい」といった家全体の事情をチャットで先に伝え、対応できる業者の見積もりだけを集めて比較できるのが強みです。庭まわりの品目は業者によって回収範囲が分かれやすいため、条件を伝えたうえで水戸の依頼先を絞り込みたい人に向いています。",
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
      { k: "対応エリア", v: "全国47都道府県（水戸対応）" },
      { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
      { k: "特徴", v: "チャットで業者と直接相談できる" },
    ],
    memo:
      "公式サイト（meetsmore.com）で、見積もり依頼無料の記載を確認しています（2026年8月16日時点）。最大5社の見積もり比較・チャット相談の仕組みは当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認して選びましょう。",
  },
];

// 比較表（水戸から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kataduke-nihonichi", name: "お部屋片付け日本一", area: "関東（茨城対応）・東海/中部", price: "1万円〜15万円", point: "2006年設立・最大1億円の賠償保険完備" },
  { slug: "gomiyashiki-partners", name: "ゴミ屋敷専門パートナーズ", area: "関東・東海・関西（茨城対応）", price: "5万円〜50万円", point: "ゴミ屋敷専門・消臭や害虫駆除まで対応" },
  { slug: "otasuke-usagi", name: "お助けうさぎ", area: "首都圏中心の9都県（茨城対応）", price: "3万円〜30万円", point: "回収・買取・清掃を一括対応" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
];

const steps = [
  {
    t: "① 屋内・納戸・庭まわりに分けて処分品を書き出す",
    b: "庭付き戸建ての片付けは、屋内の家財、納戸・物置の収納品、庭先の植木鉢・園芸用品・物干し台といった屋外の物で、品目の性質がまったく違います。「全部で一式」と伝えるのではなく、場所ごとに処分品を書き出して写真を撮っておくと、見積もりの精度が上がります。庭の物は土や雨ざらしの劣化で扱いが変わることもあるため、状態も書き添えておきましょう。",
  },
  {
    t: "② 回収可否が分かれやすい品目に印を付ける",
    b: "土の入った植木鉢・プランター、灯油の残ったポリタンクやストーブ、剪定枝・土・石などは、業者や自治体によって扱いが分かれやすい品目です。リストの中でこれらに印を付け、見積もりの段階で回収できるかを個別に確認しましょう。当日に「これは積めません」と残されると、その品目のためだけに別の手配が必要になります。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。庭先や外構まわりを通って家財を搬出する戸建ての作業では、万一の破損に備えた賠償保険・補償制度の有無、運営会社名・所在地が明記されているかも確認ポイントになります。",
  },
  {
    t: "④ 敷地の条件を伝えて複数の見積もりを比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・搬出条件で変わります。敷地内に車両を停められるか、庭から搬出口までの動線はどうかといった条件を伝えたうえで、みんなの遺品整理やミツモアの一括見積もりで複数社の金額と作業範囲を比較しましょう。総額と内訳に納得してから依頼を確定するのが失敗を防ぐ基本です。",
  },
];

const faqs = [
  {
    q: "水戸のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、お部屋片付け日本一が1万円〜15万円、みんなの遺品整理経由の遺品整理が3万円〜20万円、お助けうさぎが3万円〜30万円、ゴミ屋敷の片付けはゴミ屋敷専門パートナーズで5万円〜50万円が目安です。くらしのマーケット・ミツモアは業者ごとに料金が異なります。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "庭の植木鉢・プランター・園芸用品も回収してもらえますか？",
    a: "多くの片付け業者が植木鉢や園芸用品の回収に対応しますが、中の土や庭の土・石・砂利は「自然物」として引き受けられないとする業者が少なくありません。土は抜いてから回収という条件が付く場合もあります。庭付きの家が多い水戸の一括整理では庭まわりの品目が交ざりやすいため、見積もりの際に品目と状態を具体的に伝え、回収可否と条件を確認しましょう。回収できない土などは、自治体の案内や園芸店への相談で扱いを確認するのが基本です。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは水戸でも使えますか？",
    a: "編集部が公式サイトで確認した対応エリア（2026年8月16日時点）では、粗大ゴミ回収本舗は東京・神奈川・埼玉・千葉の4都県で茨城は対応エリア外、ブルークリーンも東京・千葉・埼玉・神奈川中心で茨城の対応は確認できませんでした。一方、お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは対応エリアに茨城県が含まれることを確認できたため、本記事のカードで紹介しています。そのほかは水戸から利用できる全国対応・検索型のサービスを掲載しています。",
  },
  {
    q: "水戸市の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。自力で運べる少量なら自治体、家一軒分の一括整理や重量物の搬出を伴う場合は業者への依頼が向いています。申し込み方法・料金・対象品目は水戸市など自治体ごとに異なるため、家のある市区町村の案内をご確認ください。",
  },
  {
    q: "一度片付けた後、また物がたまらないようにするには？",
    a: "一括整理を「一度きりのイベント」で終わらせず、年間の物の流れを作ることをおすすめします。春と秋の衣替えで衣類と季節家電を見直す、庭まわりは使う季節の前に点検して壊れた物を手放す、というように、季節の節目に小さな処分をセットにする方法です。くらしのマーケットのように場所と量を区切って都度依頼できるサービスは、この定期的な見直しと相性がよい使い方ができます。維持の仕組みは当サイトのリバウンド防止の記事でも解説しています。",
  },
  {
    q: "灯油が残ったストーブやポリタンクは引き取ってもらえますか？",
    a: "冬の暖房に灯油を使う家庭が多い北関東では、片付けの際に灯油の残ったストーブやポリタンクが出てきがちです。一般論として、灯油などの液体類は引き受けられないとする業者が多く、「灯油を使い切るか抜いた状態なら本体は回収可」という条件が一般的です。残った灯油は購入したガソリンスタンドや販売店への相談が基本の入口です。見積もり時に状態を正確に伝え、回収の条件を確認しておきましょう。",
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

export default function AreaMitoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選【2026年版】",
    description:
      "水戸でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス6社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#mito6",
      label: "1｜水戸のゴミ屋敷片付け・不用品回収業者おすすめ6社",
      sub: [
        { href: "#hikaku", label: "水戸から利用できる片付け・回収サービス6社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#mito-jijo", label: "2｜水戸で片付け業者の利用を検討する場面" },
    { href: "#ikkatsu-seiri", label: "3｜庭付き戸建ては屋内・納戸・庭まわりを分けて把握し、まとめて依頼する" },
    { href: "#mono-nagare", label: "4｜片付けを一度きりにしない「年間の物の流れ」づくり" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜水戸の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "水戸の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          水戸のゴミ屋敷片付け・不用品回収業者おすすめ6選
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
          {["水戸", "ゴミ屋敷片付け", "不用品回収", "庭付き戸建ての整理", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「実家の家財を屋内も庭まわりもまとめて整理したい」「納戸や庭先の物まで含めると、どこから手を付ければいいのか分からない」「部屋がゴミ屋敷状態になり自力では戻せない」——水戸でこうした悩みを抱えたとき、依頼先に迷う方は多いはずです。庭付き戸建ての多い水戸の片付けは、屋内の家財と庭まわりの物で品目の性質が違ううえ、業者によって回収できる範囲も異なるため、比較せずに選ぶと「庭の分は引き受けてもらえなかった」「思ったより高くついた」といった後悔につながりかねません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、水戸から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス6社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。庭付き戸建てを場所ごとに把握してまとめて依頼する段取りと、片付けを一度きりにしない「年間の物の流れ」のつくり方もまとめています。業者選びの参考にしてください。
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
      <H2 id="mito6" num="1">水戸のゴミ屋敷片付け・不用品回収業者おすすめ6社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        水戸から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる6社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗（東京・神奈川・埼玉・千葉）とブルークリーンは、茨城での対応が公式サイトで確認できなかったため本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        水戸から利用できる片付け・回収サービス6社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        茨城対応を確認できた専門業者と全国対応の紹介・比較サービスを合わせた、水戸から利用できる6社の一覧です。
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

      {/* 2｜水戸の事情 */}
      <H2 id="mito-jijo" num="2">水戸で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水戸は茨城の県庁所在地でありながら、中心市街地を少し離れると庭付きの戸建てが主流で、車での移動が生活の前提になっている土地です。庭のある家では、屋内の家財に加えて、納戸の収納品、庭先の植木鉢や園芸用品、物干し台、外に置いたままの季節用品と、物の置き場が屋内外に分散していきます。長く住んだ家ほど「家の中の不用品」と「庭まわりの不用品」が別々にたまっており、親の家の整理やゴミ屋敷状態の解消となると、その総量は屋内だけを見た印象を大きく超えるのが特徴です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「屋内と庭で物の種類がばらばらで、何をどこに頼めばいいか分からない」「量が多すぎて自分たちでは運び出せない」という状況では、搬出から処分までまとめて任せられる片付け業者・サービスが選択肢になります。逆に、自力で指定場所まで運べる少量の粗大ごみであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは屋内・納戸・庭まわりと場所を分けて処分品を書き出し、全体量を「見える化」することから始めましょう。
      </p>

      {/* 3｜一括整理 */}
      <H2 id="ikkatsu-seiri" num="3">庭付き戸建ては屋内・納戸・庭まわりを分けて把握し、まとめて依頼する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        庭付き戸建ての片付けで効率的なのは、「把握は場所ごとに分け、依頼は一括でまとめる」という組み立てです。把握を分けるのは、場所ごとに品目の性質が違うからです。屋内は家具・家電・衣類が中心、納戸は収納ケースや季節用品、庭まわりは植木鉢・園芸用品・雨ざらしの物と、同じ「不用品」でも扱いが異なります。特に庭の物は、土の入った鉢やプランターのように業者の回収条件が分かれる品目を含むため、場所ごとのリストと写真があると、業者は品目に応じた車両・人員・処分ルートを見積もりに織り込めます。依頼を一括にするのは、トラックと作業員が入る作業を一度で終えられれば、出張・車両のコストも立ち会いの手間も1回で済むからです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        敷地の動線も、見積もり時に伝えておきたい情報です。敷地に車を停められる家が多い水戸では、搬出口の近くまで車両を寄せられれば作業が速く、金額に反映されることもあります。庭の奥や裏手など車両が近づけない場所に重い物がある場合は、運搬距離が費用に影響するため、配置のメモや敷地の写真を添えると見積もりの精度が上がります。庭まわりの不用品の考え方は<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品処分ガイド</Link>で、物置の中身の整理は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置解体前の整理ガイド</Link>で詳しく解説しています。
      </p>

      {/* 4｜年間の物の流れ */}
      <H2 id="mono-nagare" num="4">片付けを一度きりにしない「年間の物の流れ」づくり</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一括整理で家がすっきりしても、物の入れ替えの仕組みがなければ、数年後には同じ状態に戻ります。おすすめは、季節の節目に「入れ替えと手放し」をセットにした年間の流れを作ることです。春と秋の衣替えでは、衣類と一緒に暖房器具・扇風機など季節家電の要不要を判断する。梅雨前には庭まわりを点検し、割れた鉢や使わない園芸用品を手放す。年末の大掃除では納戸を1か所だけ全出しして見直す——このように、季節の行事に小さな処分を組み込むと、物が「たまってから捨てる」のではなく「流れていく」家になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        年間の流れを回すうえでは、都度使える処分手段を決めておくことも大切です。少量なら自治体の粗大ごみや資源回収、まとまった量が出る節目にはくらしのマーケットのように場所と量を区切って頼めるサービス、という使い分けをあらかじめ決めておけば、手放すことへの腰の重さがなくなります。衣替えを軸にした仕組みは<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの収納仕組み化</Link>で、片付いた状態を保つ考え方は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>で詳しく解説しています。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水戸市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目や、土・石・ブロックのような品目は粗大ごみとして出せないとされることが多く、庭まわりの片付けでは対象外品目が交ざりやすい点に注意が必要です。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ず家のある市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車で運べる環境があれば、自治体の処理施設への自己搬入という選択肢を設けている地域もあり、少量なら費用を抑えやすい方法です。一方、屋内・納戸・庭まわりを合わせた家一軒分の片付けでは、対象外品目の仕分けも含めて業者にまとめて任せる方が、結果として手間と時間の節約になることが多いでしょう。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        水戸で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">水戸の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜場所ごとの把握と年間の流れづくりが庭付き戸建て整理のカギ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水戸から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス6社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、許可・保険を備えた専門業者に直接頼むなら茨城対応を確認できたお部屋片付け日本一、ゴミ屋敷の片付けから清掃・消臭まではゴミ屋敷専門パートナーズ、回収と買取の一括対応ならお助けうさぎ、場所を区切って進めるならくらしのマーケット、品目の事情を伝えて見積もりを比較するならミツモアと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        庭付き戸建ての片付けは、屋内・納戸・庭まわりと場所を分けて品目まで書き出して全体を見せることと、土の入った鉢や灯油の残ったポリタンクのような扱いの分かれる品目の回収可否を先に確認することが、見積もりの精度と当日の段取りを決めます。そして、一括整理の後は季節の節目に小さな手放しを組み込む「年間の物の流れ」を作れば、片付いた状態が続きます。複数社の見積もりを比較し、総額と内訳に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
        掲載情報は2026年8月16日時点で編集部が各社公式サイト等を確認した内容および当サイト掲載値にもとづきます。最新の料金・対応エリアは各社公式サイトでご確認ください。
      </p>
    </article>
  );
}
