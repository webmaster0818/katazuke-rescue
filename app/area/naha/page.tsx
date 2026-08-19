import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/area/naha/";
const UPDATED = "2026年8月16日";
const UPDATED_ISO = "2026-08-16";

export const metadata: Metadata = {
  title: "那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
  description:
    "那覇でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を比較。みんなの遺品整理・くらしのマーケット・ミツモア・生活110番・すまいのホットラインの料金目安と特徴、台風シーズン前にベランダ・屋外の物を減らしておく段取りと湿気・カビから家財を守る整理まで編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "那覇でゴミ屋敷片付け・不用品回収を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較。台風シーズン前の屋外・ベランダの片付けと、湿気・カビから家財を守る整理も解説します。",
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
      "対応エリアは全国47都道府県で、那覇からも利用できます。相談・見積もりは無料です。沖縄の実家の整理を、本州へ移り住んだ家族が手配するケースでも、審査を通過した業者に絞って複数の見積もりを取り寄せ、金額と口コミを手元で比較して決められます。物量の多い家は、台風時に屋外の物が飛ばされる心配や、湿気で家財が傷む悩みとも地続きです。遺品整理・生前整理を機に家全体の物を見直す、その入口として使いやすいサービスです。",
    ],
    recommend: [
      "遺品整理・生前整理を伴う片付けを頼みたい人",
      "審査を通過した業者の中から選びたい人",
      "県外から見積もりを取り寄せて比較したい人",
      "相場が分からず、まず無料で相談したい人",
    ],
    table: [
      { k: "料金目安", v: "3万円〜20万円", note: "当サイト掲載の目安。作業量・間取りで変動" },
      { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
      { k: "対応エリア", v: "全国47都道府県（那覇対応）" },
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
      "対応エリアは日本全国で、那覇の住所に対応できる登録業者を検索して選べます。作業前に料金が表示される明朗会計と、万一に備えた損害賠償補償制度が用意されている点が特徴です。「ベランダと庭の不用品だけ」「壊れた物干し台と収納ボックスだけ」といった小さな単位の依頼を選びやすいのがこのサービスの持ち味で、台風シーズン前に屋外の物だけを先に片付けておきたいという使い方と相性がよく、その回の量に合ったプランを口コミを見比べながら予約できます。",
    ],
    recommend: [
      "口コミと評価を見て自分で業者を選びたい人",
      "予約前に料金の目安を把握しておきたい人",
      "屋外・ベランダの物だけなど少量から頼みたい人",
      "オンラインで手配を完結させたい人",
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
      "対応エリアは全国47都道府県です。「台風シーズンが本格化する前に終えたい」「ベランダと物置を優先してほしい」といった希望の時期・範囲をチャットで先に伝えたうえで、対応できる業者の見積もりを集めて比較できるのが強みです。金額だけでなく、返信の早さや段取りの提案の具体性もやり取りの中で見えてくるため、締め切りを決めて計画的に片付けたい人ほど判断材料が増えます。",
    ],
    recommend: [
      "複数社の見積もりを一度に集めて比較したい人",
      "希望の時期・範囲を伝えてから決めたい人",
      "チャットで自分のペースでやり取りしたい人",
      "無料で見積もりだけ取ってみたい人",
    ],
    table: [
      { k: "費用", v: "見積もり依頼は無料" },
      { k: "見積もり", v: "最大5社から届き比較できる" },
      { k: "対応エリア", v: "全国47都道府県（那覇対応）" },
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
      "受付は電話・LINEに対応しています。「ベランダの物と押し入れの中身をまとめて処分したい」「部屋の片付けと屋外の物置の中身を一度に頼みたい」といった状況を電話で伝えれば、対応できる提携業者の手配まで任せられるため、候補を一社ずつ調べて連絡する作業そのものを手放したい人に向いています。生活110番自体は施工を行わないため、実際の作業内容・料金は紹介された提携業者の見積もりで確定します。",
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
      "対応エリア・料金は出店している掲載業者ごとに異なるため、那覇で利用する場合は、那覇に対応する業者をサイト内で検索して選ぶ使い方になります。湿気の多い住まいでは、不用品の処分とあわせて、カビの出やすい浴室や水回りの清掃を頼みたい場面も出てきます。物を減らす作業と、湿気がこもりやすい場所のクリーニングを組み合わせて探せるのが、このサービスが役立つ場面です。",
    ],
    recommend: [
      "不用品回収とクリーニングをまとめて探したい人",
      "出店型マーケットで料金を見ながら業者を選びたい人",
      "口コミを確認してから予約したい人",
      "オンラインで手配を完結させたい人",
    ],
    table: [
      { k: "料金", v: "サービスごとに料金表示" },
      { k: "対応エリア", v: "掲載業者ごとに異なる（出店型プラットフォーム）", note: "那覇対応の業者はサイト内検索で確認" },
      { k: "運営会社", v: "株式会社ハイファイブ（大阪府大阪市）" },
      { k: "特徴", v: "安心取引サポート保証制度あり" },
    ],
    memo:
      "公式サイト（hotlines.shop）で、出張・訪問サービスの検索・予約の仕組みと安心取引サポート保証制度の記載を確認しています（2026年8月16日時点）。不用品回収・片付けはカテゴリ内の一サービスのため、依頼前に候補業者の対応エリア・口コミを個別に確認しましょう。",
  },
];

// 比較表（那覇から利用できるサービス・料金目安は当サイト掲載値）
const compareRows = [
  { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: "全国", price: "3万円〜20万円", point: "審査済み業者を最大3社比較・遺品整理に強い" },
  { slug: "kurashi-market", name: "くらしのマーケット", area: "全国", price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
  { slug: "mitsumoa", name: "ミツモア", area: "全国", price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  { slug: "seikatsu110", name: "生活110番", area: "全国", price: "業者により異なる", point: "提携専門業者を無料紹介・手配" },
  { slug: "sumai-hotline", name: "すまいのホットライン", area: "掲載業者ごとに異なる", price: "業者により異なる", point: "住まい関連サービスの比較・予約" },
];

const steps = [
  {
    t: "① 台風シーズンから逆算して片付けの時期を決める",
    b: "一般に沖縄の台風シーズンは夏から秋にかけてが中心とされます。屋外やベランダの物の片付けは、風が強まる時期に入ってからでは天候による日程変更も起きやすくなるため、シーズン前の落ち着いた時期に終えるつもりで逆算して計画しましょう。室内の片付けは一年中いつでもできますが、屋外・ベランダの片付けは「締め切りのある片付け」と考えるのが現実的です。",
  },
  {
    t: "② 「使っていない・傷んでいる・固定できない」物から仕分ける",
    b: "屋外・ベランダでは、壊れた物干し台、使っていないプランターや鉢、劣化した収納ボックス、置いたままの古い家具など、使っていない物・傷んでいる物・固定しようのない物から仕分けると判断に迷いません。これらは強風のたびに取り込むか心配するかの二択を迫られる物でもあるため、処分してしまえば以後の台風対策そのものが軽くなります。室内は、湿気のこもる押し入れ・クローゼットの詰め込みを減らす方向で仕分けましょう。",
  },
  {
    t: "③ 許可・保険・運営会社の情報を確認する",
    b: "家庭の不用品の扱いには自治体の許可等が関わるため、許可や資格を明示している業者かを確認しましょう。買取を伴う場合は古物商許可の有無も判断材料です。屋外の重量物の搬出では建物や共用部を傷つけるリスクもあるため、賠償保険・補償制度の有無と、運営会社名・所在地が明記されているかを確認してから依頼すると安心です。",
  },
  {
    t: "④ 希望の時期を伝えたうえで複数の見積もりを比較する",
    b: "広告の「◯◯円〜」は最低価格で、実際の金額は物量・間取り・搬出条件で変わります。ミツモアやみんなの遺品整理の一括見積もりで複数社の金額を集め、「この時期までに終えたい」という希望を先に伝えたうえで、対応できる業者の中から金額と説明の丁寧さで選びましょう。時期の希望がある片付けほど、1社の言い値で決めず比較することが大切です。",
  },
];

const faqs = [
  {
    q: "那覇のゴミ屋敷片付け・不用品回収の費用はどのくらいですか？",
    a: "当サイト掲載の料金目安では、遺品整理・生前整理を伴う片付けはみんなの遺品整理経由で3万円〜20万円が目安です。くらしのマーケット・ミツモア・生活110番・すまいのホットラインは業者ごとに料金が異なるため、料金表示や見積もりで確認します。実際の金額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで総額を確認してください。",
  },
  {
    q: "台風が来る前に、ベランダや庭の物はどこまで片付けておくべきですか？",
    a: "一般論として、強風時は屋外に置かれた物を室内へ取り込むか固定するのが基本とされています。裏を返せば、使っていない物や壊れた物を屋外に置いたままにしていると、台風のたびに取り込む手間と飛ばされる心配が発生し続けるということです。日常的に使う物は取り込み・固定で対応し、使っていない物干し台・プランター・劣化した収納ボックスや家具などは、シーズン前に処分してしまうのが合理的です。物が減れば、接近時の対策も短時間で終わるようになります。",
  },
  {
    q: "カビが生えてしまった布団や衣類も回収してもらえますか？",
    a: "家庭から出る布団・衣類の処分は、多くの不用品回収・片付けサービスで対応対象ですが、状態や量によって扱いが変わる場合があるため、見積もりの段階でカビの状態を正直に伝えておくのが確実です。押し入れの奥など湿気のこもる場所でまとめてカビが見つかった場合は、物の処分だけでなく収納内部の清掃もあわせて相談すると、片付け後の再発を抑えやすくなります。処分と清掃を同じ機会にまとめられるかも、業者選びの比較ポイントになります。",
  },
  {
    q: "県外に住んでいます。那覇の実家の片付けを遠隔で手配できますか？",
    a: "全国対応の紹介・比較サービスを使えば、業者の候補集めから見積もり比較・予約までは県外からでも進められます。部屋ごとの写真を送って概算を取り、作業日は現地の親族に立ち会いを頼む、立ち会いなしの場合は鍵の受け渡しと作業前後の写真報告を取り決める、といった段取りが一般的です。取り決めはメッセージなど記録の残る形で行い、貴重品の扱いを事前に伝えておきましょう。",
  },
  {
    q: "自治体の粗大ごみ収集と業者はどう使い分ければいいですか？",
    a: "一般論として、自治体の粗大ごみ収集は費用を抑えやすい一方、事前申し込みが必要で収集まで日数がかかることがあり、指定場所への搬出も自分で行うのが基本です。台風シーズン前に屋外の物をまとめて片付けたい場合、収集日を待つあいだ屋外に物が残る点は考慮が必要です。自分で搬出できる少量は自治体、時期を決めて一度に片付けたい場合や重量物がある場合は業者、と使い分けるのが現実的です。申し込み方法や対象品目は那覇市など自治体ごとに異なるため、お住まいの市区町村の案内をご確認ください。",
  },
  {
    q: "東京の記事で見た粗大ゴミ回収本舗やブルークリーンは那覇でも使えますか？",
    a: "当サイトで確認した対応エリアでは、粗大ゴミ回収本舗は関東一円（東京・神奈川・埼玉・千葉）、ブルークリーン・お部屋片付け日本一・お助けうさぎも関東圏中心、ゴミ屋敷専門パートナーズは関東・東海・関西のため、いずれも那覇（沖縄）は対応エリア外です。本記事では、那覇から利用できる全国対応・検索型のサービスのみを紹介しています。",
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

export default function AreaNahaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選【2026年版】",
    description:
      "那覇でゴミ屋敷片付け・不用品回収・清掃を頼める業者・サービス5社を、当サイト掲載の料金目安・公式サイト確認情報で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc = [
    {
      href: "#naha5",
      label: "1｜那覇のゴミ屋敷片付け・不用品回収業者おすすめ5社",
      sub: [
        { href: "#hikaku", label: "那覇から利用できる片付け・回収サービス5社を一覧比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#naha-jijo", label: "2｜那覇で片付け業者の利用を検討する場面" },
    { href: "#taifu-mae", label: "3｜台風シーズン前に屋外・ベランダの物を減らしておく" },
    { href: "#shikke-kabi", label: "4｜湿気・カビから家財を守る「詰め込まない」整理" },
    { href: "#jichitai", label: "5｜自治体の粗大ごみ収集との使い分け" },
    { href: "#erabikata", label: "6｜失敗しない片付け業者の選び方4ステップ" },
    { href: "#faq", label: "7｜那覇の片付け業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "那覇の片付け・ゴミ屋敷・清掃業者おすすめ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別 業者比較</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選
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
          {["那覇", "ゴミ屋敷片付け", "不用品回収", "台風前の片付け・カビ対策", "業者比較"].map((t) => (
            <li key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-[15px] leading-8 text-text-secondary">
          「ベランダに置いたままの物が、台風のたびに気がかりになる」「使っていない物干し台やプランターをそろそろ処分したい」「押し入れの布団や衣類にカビが出てしまった」——那覇でこうした悩みを抱えたとき、どこに頼めばよいか迷う方は多いはずです。台風の接近が珍しくない土地では、屋外やベランダに残された不要な物は、後回しにした分だけ強風時の心配事として返ってきます。さらに一年を通じて湿度の高い気候は、詰め込まれた収納の中で布団・衣類・紙類を静かに傷めていきます。つまりこの土地では、物を減らすことがそのまま住まいの備えになるのです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          本記事では、那覇から依頼できるゴミ屋敷片付け・不用品回収・清掃の業者・サービス5社を、当サイト掲載の料金目安と公式サイトで確認した情報（2026年8月16日時点）をもとに比較しました。台風シーズン前に屋外・ベランダの物を減らしておく段取りと、湿気・カビから家財を守る整理の考え方もまとめています。業者選びの参考にしてください。
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
      <H2 id="naha5" num="1">那覇のゴミ屋敷片付け・不用品回収業者おすすめ5社</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        那覇から依頼できる片付け・不用品回収の業者・サービスのうち、対応内容の異なる5社を紹介します。掲載している料金・対応エリア・運営会社などの情報は、当サイトの各レビューページ掲載値と、編集部が各社公式サイトで確認した内容（2026年8月16日時点）にもとづきます。なお、東京版で紹介した粗大ゴミ回収本舗・ブルークリーン・お部屋片付け日本一・ゴミ屋敷専門パートナーズ・お助けうさぎは関東〜関西中心の対応エリアで那覇（沖縄）は対応外のため、本記事のカードには含めていません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
      </p>

      <h3 id="hikaku" className="scroll-mt-20 text-lg font-bold text-text-primary mb-4">
        那覇から利用できる片付け・回収サービス5社を一覧比較
      </h3>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全国対応の紹介・比較サービスを中心に、那覇から利用できる5社の一覧です。
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

      {/* 2｜那覇の事情 */}
      <H2 id="naha-jijo" num="2">那覇で片付け業者の利用を検討する場面</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        那覇をはじめ沖縄は、台風の影響を受けやすい地域として知られています。強風への備えとして屋外の物を減らしておくことは、この土地の暮らしでは片付けの域を超えた住まいの管理そのものです。ベランダの物干し台や鉢、屋外の物置に押し込まれたままの古い家財は、使っていないのに毎シーズン「飛ばされないか」という心配の種になり続けます。また、一年を通じて湿度が高い気候では、物を詰め込んだ押し入れやクローゼットの中で布団・衣類・本にカビが出やすく、物量の多さがそのまま家財の傷みにつながります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「屋外の重い物を自力で運び出せない」「カビの出た家財をまとめて処分して収納をやり直したい」「本州に住んでいて那覇の実家の物量が心配」という場面では、搬出を安全に代行してくれる業者・サービスを使うのが現実的です。逆に、自分で指定場所まで運べる少量の粗大ごみであれば、後述する自治体の収集を使う方が費用を抑えやすいのが一般的です。まずは屋外・ベランダに「使っていない物」がどれだけあるかを数えることから始めましょう。
      </p>

      {/* 3｜台風前の屋外・ベランダ */}
      <H2 id="taifu-mae" num="3">台風シーズン前に屋外・ベランダの物を減らしておく</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        台風への備えというと接近直前の対応を思い浮かべがちですが、実際に効くのは「そもそも屋外に物を置きすぎない」ことです。接近のたびに取り込む物が多いほど対策は重労働になり、取り込み忘れた物や固定しきれない物が残るほどリスクは増えます。使っていない物干し台、割れた鉢や空のプランター、劣化してふたの閉まらない収納ボックス、屋外に出したままの古い椅子やラック——こうした「使っていないのに置かれている物」を一度まとめて処分すれば、以後の台風対策は毎回確実に軽くなります。時期は、風の強まる季節に入る前の落ち着いた時期がおすすめです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        マンションのベランダは避難経路を兼ねる場合があり、物を置きすぎると日常の安全にも関わります。ベランダの片付けの手順と注意点は<Link href="/veranda-katazuke/" className="text-primary underline underline-offset-2">ベランダ片付けガイド</Link>で詳しく解説しています。物干し台やラックなど重さのある物の搬出は無理をせず、くらしのマーケットのような単発で頼めるサービスで「屋外の物だけ」を依頼する使い方が向いています。
      </p>

      {/* 4｜湿気・カビ対策の整理 */}
      <H2 id="shikke-kabi" num="4">湿気・カビから家財を守る「詰め込まない」整理</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        湿度の高い気候で家財を守る鍵は、収納に空きをつくって空気の通り道を確保することだと一般に言われます。押し入れやクローゼットに物が隙間なく詰まっていると、湿気がこもって布団・衣類・紙類・革製品にカビが出やすくなり、気づいたときには隣の物へ広がっていることも珍しくありません。使っていない布団や着ていない衣類を減らすことは、見た目の片付けにとどまらず、残した家財を長持ちさせるための環境づくりでもあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        すでにカビが出てしまった物は、無理に残そうとせず処分を軸に考え、収納内部の清掃とセットで仕切り直すのが結果的に早道です。カビが広がった部屋の清掃の考え方は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビ清掃ガイド</Link>で、衣類を手放す基準と手順は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類整理ガイド</Link>で詳しく解説しています。処分・清掃・収納の見直しを同じ機会にまとめると、片付け後の再発を抑えやすくなります。
      </p>

      {/* 5｜自治体との使い分け */}
      <H2 id="jichitai" num="5">自治体の粗大ごみ収集との使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        那覇市をはじめとする自治体には粗大ごみの収集制度があり、費用を抑えて処分したい場合の基本の選択肢です。一般論として、自治体の収集は料金が比較的安い一方で、事前の申し込みが必要で収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。また、家電リサイクル法の対象品目など、粗大ごみとして出せないものもあります。申し込み方法・料金・対象品目は自治体ごとに異なるため、必ずお住まいの市区町村の案内を確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        台風シーズン前に屋外の物を片付ける場合は、収集日までのあいだ処分予定の物が屋外に残る期間も考えに入れておきましょう。自分で搬出できる少量は自治体、日程を決めて一度に運び出したい場合や物干し台のような重さのある物は業者、と使い分けるのが現実的です。費用感の全体像は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場ページ</Link>で解説しています。
      </p>

      {/* 6｜選び方 */}
      <H2 id="erabikata" num="6">失敗しない片付け業者の選び方4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        那覇で片付け・不用品回収の業者選びに後悔しないためには、次の4つのステップを順に踏むのがおすすめです。
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
      <H2 id="faq" num="7">那覇の片付け業者でよくある質問</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* 8｜まとめ */}
      <H2 id="matome" num="8">まとめ｜屋外は「シーズン前」、収納は「詰め込まない」が備えになる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        那覇から依頼できるゴミ屋敷片付け・不用品回収の業者・サービス5社を紹介しました。遺品整理・生前整理を伴うなら審査済み業者を比較できるみんなの遺品整理、屋外・ベランダの物だけを単発で頼むならくらしのマーケット、時期と範囲の希望を伝えて比較するならミツモア、電話で相談から手配まで任せるなら生活110番、カビの出た場所の清掃とあわせて探すならすまいのホットラインと、目的によって向いているサービスは変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        台風と湿気のある土地では、屋外の不要な物をシーズン前に手放しておくことと、収納に空きをつくって家財を守ることが、片付けの効果を暮らしの安心につなげる軸になります。複数の見積もりを比較し、金額と作業内容に納得してから依頼することが失敗しないための共通ルールです。本記事の情報を出発点に、状況に合った依頼先を選んでください。
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
