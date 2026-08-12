import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kaden-recycle-shobun/";
const TITLE = "家電リサイクル法対象品の処分方法｜冷蔵庫・洗濯機・テレビ・エアコンの正しい捨て方";
const DESC =
  "冷蔵庫・洗濯機・テレビ・エアコンの4品目は家電リサイクル法の対象で、自治体の粗大ごみには出せません。買い替え時の引き取り・購入店への依頼・指定引取場所への持ち込みなど正しい処分ルートの使い分け、処分までの5ステップ、無許可回収業者に渡してはいけない理由、業者に頼むべきケースまでを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "対象は「エアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機」の4品目",
    body: "家電リサイクル法（特定家庭用機器再商品化法）の対象は、家庭用のエアコン、テレビ（ブラウン管式・液晶式・プラズマ式など）、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の4品目です。これらは鉄・銅・アルミなどの資源を回収して再利用するため、メーカーによるリサイクルが義務づけられており、原則として自治体の粗大ごみ収集には出せません。サイズの大小や壊れているかどうかにかかわらず、家庭用であれば対象です。",
  },
  {
    title: "処分には「リサイクル料金」と「収集運搬料金」がかかる",
    body: "対象4品目を処分する際は、メーカーごと・品目ごとに定められたリサイクル料金と、引き取りを依頼する場合の収集運搬料金を排出者（手放す人）が負担する仕組みです。リサイクル料金はメーカーや品目・サイズ区分によって異なり、各メーカーの公表情報や家電リサイクル券センターの案内で確認できます。収集運搬料金は依頼先の店舗・業者によって異なるため、依頼前に確認しましょう。",
  },
  {
    title: "「無料回収」をうたう無許可業者には渡さない",
    body: "対象4品目を「無料で回収します」と宣伝して巡回するトラックや空き地の回収拠点の中には、廃棄物の処理に必要な許可を確認できない業者があります。こうした業者に渡すと、不法投棄や不適切な処理、積み込み後の高額請求といったトラブルにつながるおそれがあります。正規ルートでは原則として料金がかかるものが「無料」とされている時点で、処理の実態を疑うべきサインです。",
  },
];

const routes = [
  {
    title: "ルート1：買い替えなら購入する店に引き取りを依頼する",
    body: "新しい家電に買い替える場合、購入する小売店には、同種の古い家電の引き取りが義務づけられています。配達と同時に引き取ってもらえることが多く、運搬の手間が少ない方法です。リサイクル料金と収集運搬料金は購入時に案内されるので、内訳を確認しましょう。ネット通販で購入する場合も、引き取りサービスの有無と条件を注文前に確認するのがおすすめです。",
  },
  {
    title: "ルート2：処分だけなら「その製品を買った店」に依頼する",
    body: "買い替えではなく処分だけしたい場合、その製品を購入した小売店に引き取りを依頼するのが基本ルートです。過去に購入した店が分かっているなら、まずその店に相談しましょう。購入店が閉店している・分からない場合は、お住まいの自治体が案内する方法（自治体委託の収集や指定の依頼先など）に従います。案内は市区町村の公式サイトで確認できます。",
  },
  {
    title: "ルート3：自分で運べるなら指定引取場所に持ち込む",
    body: "郵便局でリサイクル券（家電リサイクル券）を購入してリサイクル料金を支払い、最寄りの指定引取場所へ自分で持ち込む方法もあります。収集運搬料金がかからないぶん費用を抑えられますが、冷蔵庫や洗濯機は重量があるため、車両の手配と2人以上での運搬が前提になります。指定引取場所の所在地や受付時間は、家電リサイクル券センターの案内で確認してください。",
  },
  {
    title: "ルート4：状態が良ければ売却・譲渡、まとめて処分なら回収業者",
    body: "製造から年数が浅く動作する製品は、リサイクルショップや買取業者への売却、フリマアプリでの譲渡も選択肢です（買取可否の基準は店舗により異なります）。また、引っ越しや片付けで家電以外の不用品もまとめて手放したい場合は、必要な許可を持つ不用品回収業者に一括で依頼する方法もあります。依頼時は、家電リサイクル法対象品の扱い方と料金の内訳を見積もりで確認しましょう。",
  },
];

const steps = [
  {
    title: "処分したい家電が対象4品目かを確認する",
    body: "まず、手放したい物が家電リサイクル法の対象かを確認します。対象はエアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機の4品目です。電子レンジ・掃除機・炊飯器などは対象外で、自治体の粗大ごみや小型家電回収の対象になるのが一般的です（扱いは自治体により異なります）。パソコンは別の仕組み（メーカー回収など）が用意されています。",
  },
  {
    title: "メーカー名と品目・サイズ区分を控える",
    body: "リサイクル料金はメーカーと品目・サイズ区分（テレビの型サイズ、冷蔵庫の容量区分など）で決まります。製品本体のラベルでメーカー名と型番を確認し、控えておきましょう。料金は各メーカーの公表情報や家電リサイクル券センターの案内で確認できます。この情報は、店舗への依頼でも持ち込みでも必要になります。",
  },
  {
    title: "自分に合う処分ルートを選ぶ",
    body: "買い替えるなら購入店の引き取り、処分だけなら購入した店への依頼、自分で運べて費用を抑えたいなら指定引取場所への持ち込み、まとめて片付けたいなら許可のある回収業者、というように、状況に合わせてルートを選びます。購入店が不明な場合の依頼先は自治体の案内に従ってください。ルート全体の比較は不用品の処分ルート比較の記事も参考になります。",
  },
  {
    title: "料金と引き取り条件を確認して申し込む",
    body: "依頼先が決まったら、リサイクル料金・収集運搬料金の合計と、引き取り日・搬出の条件（部屋からの運び出しの可否など）を確認して申し込みます。持ち込みの場合は、郵便局でリサイクル券を購入し、必要事項を記入してから指定引取場所へ向かいます。エアコンは取り外し工事が必要なため、取り外しの手配も忘れずに。",
  },
  {
    title: "引き渡し前の準備をして、リサイクル券の控えを保管する",
    body: "冷蔵庫は前日までに中身を空にして電源を抜き、霜取りと水受けタンクの水抜きをします。洗濯機は給水・排水ホースの水抜きをしておくと搬出がスムーズです。引き渡し後は、家電リサイクル券の排出者控えを受け取り、保管しておきましょう。控えがあれば、自分の家電が正規ルートで引き渡された記録になります。",
  },
];

const ngActions = [
  {
    title: "自治体の粗大ごみ・ごみ集積所に出す",
    body: "対象4品目は原則として自治体の粗大ごみ収集の対象外であり、集積所に置いても収集されません。収集されないまま放置すれば近隣の迷惑になり、場合によっては不法投棄として扱われるおそれもあります。必ず家電リサイクル法の正規ルートで処分してください。",
  },
  {
    title: "「無料回収」の巡回トラックや空き地の回収拠点に持ち込む",
    body: "正規の処分には原則リサイクル料金がかかるため、「無料」をうたう回収は処理の実態が不透明です。不法投棄や不適切な解体による環境への影響、積み込み後に料金を請求されるトラブルなどが報告されています。許可の有無を確認できない相手に家電を渡すのは避けましょう。見分け方は違法業者の見分け方の記事で解説しています。",
  },
  {
    title: "エアコンを自分で取り外そうとする",
    body: "エアコンの取り外しには、冷媒ガスの回収（ポンプダウン）などの専門作業が必要です。手順を誤ると冷媒の放出や感電・怪我のおそれがあり、環境面でも安全面でもリスクがあります。取り外しは購入店・引き取りを依頼する業者・専門の工事業者に任せてください。",
  },
  {
    title: "冷蔵庫の中身や水抜きをせずに引き渡し当日を迎える",
    body: "冷蔵庫に食品が残っていたり、霜取り・水抜きができていなかったりすると、当日引き取ってもらえない場合や、運搬中の水漏れトラブルの原因になります。冷蔵庫は前日までに空にして電源を抜き、洗濯機はホースの水抜きを済ませておきましょう。小さな準備ですが、当日のやり直しを防ぐ重要なポイントです。",
  },
];

const judgeSigns = [
  "引っ越しや片付けで、対象家電以外にも処分したい物が多数ある",
  "階段しかない住居からの冷蔵庫・洗濯機の搬出など、自力での運び出しが難しい",
  "購入した店が閉店・不明で、自治体案内のルートも都合が合わない",
  "退去日などの期限が迫っており、引き取り日を待つ余裕がない",
  "遺品整理・実家の片付けなどで、家電を含む家財全体をまとめて任せたい",
];

const faqs = [
  {
    q: "家電リサイクル法の対象品を処分するのにいくらかかりますか？",
    a: "リサイクル料金はメーカー・品目・サイズ区分によって、収集運搬料金は依頼先によって異なるため、一律の金額は言えません。リサイクル料金は各メーカーの公表情報や家電リサイクル券センターの案内で、収集運搬料金は依頼する店舗・業者への確認で、事前に正確な金額を把握できます。指定引取場所への持ち込みなら収集運搬料金はかかりません。",
  },
  {
    q: "壊れて動かない家電も家電リサイクル法のルートで処分するのですか？",
    a: "はい。対象4品目は、故障の有無や製造年にかかわらず家電リサイクル法のルートで処分します。壊れていても資源として回収される部材があるためです。一方、動作品で年式が新しい物は、売却や譲渡でリサイクル料金をかけずに手放せる可能性もあるので、状態に応じて使い分けましょう。",
  },
  {
    q: "電子レンジや掃除機、パソコンも同じルートですか？",
    a: "いいえ。家電リサイクル法の対象はエアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機の4品目のみです。電子レンジや掃除機などは、自治体の粗大ごみや小型家電リサイクルの回収対象になるのが一般的ですが、扱いは自治体により異なるため、お住まいの市区町村の案内を確認してください。パソコンはメーカー回収など別の仕組みが用意されています。",
  },
  {
    q: "不用品回収業者に家電の処分を頼んでも大丈夫ですか？",
    a: "必要な許可を持ち、家電リサイクル法対象品を適切なルートで処理する業者であれば、片付けや引っ越しと合わせて依頼できる便利な選択肢です。依頼前に、許可の有無、対象家電の処理方法、リサイクル料金を含む見積もりの内訳を確認しましょう。「すべて無料」など不自然に安い勧誘は避けるのが安全です。業者選びは当サイトのランキングやレビューも参考にしてください。",
  },
];

const related = [
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分方法", desc: "処分に迷いやすい寝具の捨て方" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "粗大ごみ収集の使い方と注意点" },
  { href: "/guide/illegal-dumping/", label: "違法業者の見分け方", desc: "無許可回収のトラブルを避ける" },
  { href: "/service/fuyohin/", label: "不用品回収業者の選び方", desc: "家電を含む一括回収の依頼方法" },
  { href: "/area/tokyo/", label: "東京の不用品回収業者おすすめ", desc: "東京から依頼できる業者の比較" },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "家電リサイクル法対象品の処分方法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  author: { "@type": "Organization", name: "片付けレスキュー編集部" },
  publisher: { "@type": "Organization", name: "片付けレスキュー" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: `${SITE}${PATH}`,
};

function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      <span className="mono text-primary mr-2">{num}</span>
      {children}
    </h2>
  );
}

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜家電リサイクル法の基本——対象4品目と料金の仕組み" },
    { href: "#route", label: "2｜処分ルート4つの使い分け" },
    { href: "#houshin", label: "3｜ルート選びの全体方針" },
    { href: "#steps", label: "4｜処分までの5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者にまとめて頼んだほうがよいケース" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "家電リサイクル法対象品の処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          家電リサイクル法対象品の処分方法｜冷蔵庫・洗濯機・テレビ・エアコンの正しい捨て方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「冷蔵庫を処分したいのに、粗大ごみで出せないと言われた」「テレビの正しい捨て方がわからない」——エアコン・テレビ・冷蔵庫・洗濯機の4品目は、家電リサイクル法によりリサイクルが義務づけられており、通常の粗大ごみとは処分のルートが異なります。仕組みを知らないと、収集されない・トラブルに巻き込まれるといった失敗につながります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、家電リサイクル法の基本、4つの処分ルートの使い分け、処分までの具体的な5ステップ、無許可回収業者に渡してはいけない理由、片付け業者にまとめて依頼したほうがよいケースまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>エアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機の4品目は、自治体の粗大ごみには出せない</li>
          <li>基本ルートは「買い替え時は購入店」「処分だけなら購入した店」「自分で運べるなら指定引取場所へ持ち込み」</li>
          <li>リサイクル料金はメーカー・品目で異なり、収集運搬料金は依頼先で異なる。事前確認が確実</li>
          <li>「無料回収」をうたう無許可業者はトラブルのもと。許可を確認できる相手にしか渡さない</li>
        </ul>
      </div>

      <nav aria-label="目次" className="my-10 rounded-2xl border border-border bg-surface-alt p-5 sm:p-6">
        <p className="font-bold text-primary mb-3">Contents</p>
        <ol className="space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-primary hover:underline font-medium">{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <H2 id="kiso" num="1">家電リサイクル法の基本——対象4品目と料金の仕組み</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜこの4品目だけ特別なルートなのか、費用は誰がどう負担するのかという基本を押さえましょう。ここを理解すると、後のルート選びで迷わなくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="route" num="2">処分ルート4つの使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        対象4品目の処分ルートは、大きく次の4つです。自分の状況（買い替えか処分だけか、運べるか、他にも処分したい物があるか）に合わせて選びましょう。
      </p>
      <div className="space-y-4 mb-4">
        {routes.map((r) => (
          <div key={r.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{r.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{r.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">ルート選びの全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        迷ったときの考え方はシンプルです。買い替えを伴うなら購入店の引き取りが手間なし。処分だけなら購入した店へ、購入店が不明なら自治体の案内に従う。体力と車両があり費用を抑えたいなら指定引取場所への持ち込み。そして、家電以外にも手放したい物が多いなら、許可のある回収業者への一括依頼が結果的に効率的です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        どのルートでも共通するのは、「リサイクル料金＋収集運搬料金の内訳を事前に確認する」ことと、「許可を確認できない相手に渡さない」ことの2点です。家電以外も含めた処分ルート全体の考え方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">処分までの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の処分は、次の5ステップで進めるとスムーズです。特にステップ5の事前準備は、当日のトラブル防止に直結します。
      </p>
      <div className="space-y-5 mb-4">
        {steps.map((s, i) => (
          <div key={s.title}>
            <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
              <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.body}</p>
          </div>
        ))}
      </div>

      <H2 id="ng" num="5">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者にまとめて頼んだほうがよいケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家電1台だけなら正規の基本ルートで十分ですが、次のようなケースでは、必要な許可を持つ不用品回収業者・片付け業者への一括依頼を検討する価値があります。見積もり時には、家電リサイクル法対象品の処理方法と料金の内訳を必ず確認しましょう。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          どの業者に相談すべきか迷ったら、編集部が特徴・口コミを比較したランキングと費用相場を参考にしてください。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/ranking/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors">
            不用品回収業者ランキングを見る
          </Link>
          <Link href="/cost/price/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors">
            費用相場を確認する
          </Link>
        </div>
      </div>

      <H2 id="faq" num="7">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="8">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。リサイクル料金・収集運搬料金・引き取り条件は、メーカー・依頼先・時期により異なるため、必ず依頼前に公式の案内でご確認ください。対象外品目のごみの出し方は自治体により異なるため、お住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
