import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/recycle-shop-kaitori-heiyou/";
const TITLE = "片付けと買取の併用術｜リサイクルショップ・買取サービスで負担を減らす";
const DESC =
  "片付けにリサイクルショップや買取サービスを組み合わせると、処分する量が減り、手放す罪悪感も軽くなります。売れやすい物の傾向、店頭・出張・宅配買取の使い分け、片付けと並行して進める5ステップ、注意すべきNG行動、業者の買取併用サービスまでを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "買取併用の最大の狙いは「お金」より「処分量と罪悪感を減らすこと」",
    body: "片付けに買取を組み合わせる目的を「高く売ること」に置くと、査定額に一喜一憂して片付けが進まなくなりがちです。買取併用の本質的なメリットは、処分するごみの量が減ること、そして「まだ使える物を捨てる」罪悪感が「誰かに使ってもらう」納得感に変わることにあります。査定額は物の状態・需要・時期によって変わるものなので、「値が付けばプラス」くらいの気持ちで臨むと、片付け全体がスムーズに進みます。",
  },
  {
    title: "売れやすい物には傾向がある。ただし最終判断は査定次第",
    body: "一般的に、製造から年数の浅い家電、状態のよい家具、ブランド品、貴金属、カメラ・オーディオ、ゲーム機・ソフト、工具、未使用の贈答品などは買取の対象になりやすいと言われます。一方、使用感の強い衣類や寝具、古い大型家具などは値が付きにくい傾向があります。ただし、同じ品物でも店や時期によって扱いは異なるため、「売れるかどうか」を自分で悩みすぎず、査定に出して判断してもらうのが早道です。",
  },
  {
    title: "買取方法は「店頭・出張・宅配」の3種類。物量と品物で使い分ける",
    body: "買取には、店舗へ持ち込む店頭買取、査定員が自宅に来る出張買取、箱に詰めて送る宅配買取の3種類があります。少量で運べる物は店頭、大型家具・家電や量が多い場合は出張、本・ゲーム・小物などをまとめて送るなら宅配が向いています。片付けと併用する場合は、大物と大量の物を一度に見てもらえる出張買取が軸になることが多いでしょう。",
  },
];

const merits = [
  {
    title: "処分費用の一部を相殺できる可能性がある",
    body: "不用品の処分には自治体の手数料や業者の回収費用がかかりますが、売れる物を買取に回せば、その分の処分費用がかからないうえ、買取額を片付け全体の出費に充てられます。金額の大小にかかわらず、「処分にお金を払う物」が「引き取ってもらえる物」に変わること自体が負担の軽減になります。",
  },
  {
    title: "「捨てられない」が理由で止まっていた片付けが動き出す",
    body: "片付けが止まる大きな原因の一つが、まだ使える物への「もったいない」という気持ちです。買取やリサイクルという受け皿があると、手放す心理的なハードルが下がり、判断のスピードが上がります。特に、贈答品や高かった物など「捨てるには惜しい物」ほど、買取ルートの活用が効果的です。",
  },
  {
    title: "リユースは環境負荷の軽減にもつながる",
    body: "まだ使える物が廃棄されずに次の使い手へ渡ることは、ごみの減量と資源の有効活用につながります。片付け＝大量廃棄と考えると気が重くなりますが、「使える物は循環させ、使えない物だけを適正に処分する」と整理すると、前向きに取り組みやすくなります。処分ルート全体の考え方は不用品の処分ルート比較の記事で解説しています。",
  },
];

const steps = [
  {
    title: "片付けの仕分けに「売る候補」の箱を1つ追加する",
    body: "通常の「残す・捨てる」の仕分けに、「売る候補」という3つ目の分類を追加します。判断基準は「まだ使える・壊れていない・比較的きれい」程度のざっくりしたもので構いません。ここで悩みすぎないのがコツです。売る候補に迷ったら一旦入れておき、査定で値が付かなければ処分に回す、という流れにすれば判断が止まりません。",
  },
  {
    title: "売る候補を「大物・ブランド品・小物」に分け、売り先を決める",
    body: "売る候補が集まったら、大型家具・家電などの大物、ブランド品・貴金属などの専門性が高い物、本・ゲーム・雑貨などの小物に分けます。大物は出張買取やリサイクルショップ、専門性の高い物は該当ジャンルの専門買取店、小物は宅配買取やフリマアプリ、という振り分けが基本形です。フリマアプリは高く売れる可能性がある一方、出品・発送の手間と時間がかかるため、片付けの期限と相談して使い分けましょう。",
  },
  {
    title: "汚れを落とし、付属品を揃えてから査定に出す",
    body: "同じ品物でも、ホコリを拭いて汚れを落とし、箱・説明書・リモコン・ケーブルなどの付属品を揃えるだけで印象が変わります。家電は動作確認をし、製造年がわかるようにしておくとスムーズです。ただし、修理や過度な手入れに時間とお金をかける必要はありません。あくまで「そのままの状態を少し整える」程度で十分です。",
  },
  {
    title: "複数の買取先に査定を依頼し、条件を比較する",
    body: "買取額や対応品目は店によって差が出ることがあるため、可能なら複数の買取先に査定を依頼して比較しましょう。出張買取は日程調整が必要なため、片付けのスケジュールから逆算して早めに予約するのがポイントです。査定額に納得できなければ断って構いません。その場の雰囲気で即決せず、金額と条件を確認してから決めましょう。",
  },
  {
    title: "売れ残った物は期限を決めて処分ルートへ切り替える",
    body: "査定で値が付かなかった物や、フリマアプリで一定期間売れなかった物は、「いつまでに売れなければ処分」と期限を決めて切り替えます。売ることにこだわりすぎると、片付け自体が終わらなくなるためです。処分は自治体の粗大ごみ収集や、許可を確認できる不用品回収業者を利用します。自治体収集の使い方は粗大ごみ申し込みの流れの記事を参考にしてください。",
  },
];

const ngActions = [
  {
    title: "高く売ることにこだわって片付けの期限を逃す",
    body: "「もう少し高く売れるはず」と売り先を探し続けているうちに、引っ越しや退去の期限が迫ってしまうのは典型的な失敗です。買取はあくまで片付けを楽にする手段であり、目的ではありません。期限のある片付けでは、「この日までに売れなければ処分」という切り替えルールを最初に決めておきましょう。",
  },
  {
    title: "査定額への期待だけで物を残し続ける",
    body: "「これは価値があるはずだから」と売る候補の山を長期間保管し続けると、部屋が片付かないまま物置化してしまいます。売る候補の箱は「一時保管」であって「保管場所」ではありません。査定に出す日をカレンダーに入れ、行動とセットで管理することが大切です。",
  },
  {
    title: "突然の訪問買取で貴金属などをその場で手放す",
    body: "アポイントなしの訪問で「不用品を買い取る」と言われ、強引に貴金属やブランド品を買い取られたというトラブルは、消費生活相談の場で繰り返し注意喚起されています。訪問購入には法律上のルール（不招請勧誘の禁止やクーリング・オフ制度など）が設けられているとされています。突然の訪問で即決せず、不安を感じたら消費者ホットライン188や自治体の消費生活センターに相談してください。",
  },
  {
    title: "「買取」をうたう無許可の回収業者に処分品まで任せる",
    body: "「買い取れる物は買い取り、残りは無料で回収」といった勧誘には注意が必要です。廃棄物の処理に必要な許可を確認できない業者に処分品を渡すと、不法投棄や後からの高額請求につながるおそれがあります。買取と処分を一括で頼む場合は、許可・実績を確認できる業者を選びましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "大型家具・家電が多く、持ち込みも個別の出張手配も負担が大きい",
  "引っ越し・退去などの期限があり、売却と処分を同時に終わらせたい",
  "実家の片付けや遺品整理で、売れる物と処分する物の判断がつかない物が大量にある",
  "仕分け・搬出・処分に加えて、買取もまとめて1回で済ませたい",
  "売れそうな物はあるが、査定や出品の手間をかける時間がない",
];

const faqs = [
  {
    q: "リサイクルショップで売れやすいのはどんな物ですか？",
    a: "一般的には、製造から年数の浅い家電、状態のよい家具、ブランド品、貴金属、カメラ、ゲーム機、工具、未使用の贈答品などが買取対象になりやすいと言われます。ただし、買取の可否と金額は品物の状態・需要・時期・店の方針によって異なるため、自分で判断しきれない物は査定に出して確認するのが確実です。",
  },
  {
    q: "フリマアプリとリサイクルショップはどちらがよいですか？",
    a: "時間に余裕があり手間をかけられるならフリマアプリ、期限内にまとめて手放したいならリサイクルショップや出張買取、という使い分けが基本です。フリマアプリは自分で価格を決められる一方、出品・やり取り・梱包・発送の手間と、売れるまでの時間がかかります。片付けの期限から逆算して選びましょう。",
  },
  {
    q: "片付け業者に買取も一緒に頼めますか？",
    a: "買取に対応する片付け・不用品回収業者はあります。仕分け・搬出・処分と買取を1回の作業で済ませられるのが利点で、買取額を作業費用から差し引く形を取る業者もあります。対応品目や条件は業者により異なるため、見積もり時に買取の可否と精算方法を確認してください。",
  },
  {
    q: "訪問買取で嫌な思いをしないためにはどうすればよいですか？",
    a: "自分から依頼した業者以外の突然の訪問買取には応じない、その場で即決しない、買取品目と金額の書面を確認する、といった基本を守りましょう。強引な勧誘や契約後の不安があるときは、消費者ホットライン188や自治体の消費生活センターに相談できます。訪問購入にはクーリング・オフ制度が設けられているとされているため、諦める前に早めに相談することが大切です。",
  },
];

const related = [
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離", desc: "期限から逆算して荷物を減らす段取り" },
  { href: "/irui-seiri/", label: "衣類の整理と手放し方", desc: "服の仕分け基準と処分先の選び方" },
  { href: "/guide/cost-saving/", label: "片付け費用の節約ガイド", desc: "費用を抑える工夫と考え方" },
  { href: "/review/kurashi-market/", label: "くらしのマーケットの評判", desc: "口コミで比較できる生活サービス予約" },
  { href: "/review/sumai-hotline/", label: "すまいのホットラインの評判", desc: "住まいのサービスを比較できるプラットフォーム" },
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
    { "@type": "ListItem", position: 2, name: "片付けと買取の併用術" },
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
    { href: "#kiso", label: "1｜片付け×買取併用の基礎知識" },
    { href: "#merit", label: "2｜買取を併用する3つのメリット" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜片付けと並行して進める買取活用5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "片付けと買取の併用術" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          片付けと買取の併用術｜リサイクルショップ・買取サービスで負担を減らす
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「まだ使える物を捨てるのは気が引ける」「処分の費用を少しでも抑えたい」——片付けを進めるうえで多くの人がぶつかるこの悩みは、リサイクルショップや買取サービスを組み合わせることで軽くできます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、買取を併用する狙いと売れやすい物の傾向、店頭・出張・宅配買取の使い分け、片付けの流れに買取を組み込む5つのステップ、訪問買取などで注意すべきNG行動、買取に対応する片付け業者の活用までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>買取併用の狙いは「処分量を減らし、手放す罪悪感を軽くすること」。査定額は「付けばプラス」と考える</li>
          <li>仕分けに「売る候補」の箱を1つ足すだけで始められる。悩んだら査定に出して判断を委ねる</li>
          <li>大物は出張買取、専門品は専門店、小物は宅配・フリマと振り分ける</li>
          <li>「いつまでに売れなければ処分」の期限を決め、片付けを止めない。突然の訪問買取には応じない</li>
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

      <H2 id="kiso" num="1">片付け×買取併用の基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、買取を片付けに組み込むときの考え方と、知っておきたい基本を整理します。この前提があると、査定額に振り回されずに片付けを進められます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">買取を併用する3つのメリット</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        片付けに買取を組み合わせるメリットは、金銭面だけではありません。主なポイントは次の3つです。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        買取併用の大原則は、「片付けが主、買取は従」というバランスを崩さないことです。売ることが目的化すると片付けが止まるため、仕分け→査定→期限が来たら処分へ切り替え、という一方通行の流れを作ります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付け自体の進め方は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋を片付ける順番</Link>を、期限がある場合の段取りは<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>を参考にしてください。衣類・本など品目別の手放し方は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理</Link>と<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理</Link>で詳しく解説しています。
      </p>

      <H2 id="steps" num="4">片付けと並行して進める買取活用5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、片付けの流れに買取を組み込む手順を5つのステップで紹介します。ポイントは「仕分けで悩まない、査定で判断してもらう、期限で切り替える」です。
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

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、買取に対応する片付け・不用品回収業者への相談を検討しましょう。仕分け・買取・搬出・処分を1回の作業で終えられるのが、個別に売るのとの大きな違いです。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ハウスクリーニングや不用品回収の事業者を口コミで比較したいなら<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>、住まいのサービスをまとめて比較したいなら<Link href="/review/sumai-hotline/" className="text-primary underline underline-offset-2">すまいのホットライン</Link>のようなプラットフォームが活用できます。神戸など各都市の業者は<Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸の片付け業者比較</Link>で紹介しています。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          どの業者に相談すべきか迷ったら、編集部が特徴・口コミを比較したランキングと費用相場を参考にしてください。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/ranking/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors">
            片付け業者ランキングを見る
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
        本記事は一般的な知識の提供を目的としたものです。買取の可否・金額は品物の状態や時期、各店の方針により異なります。訪問購入などのトラブルは、消費者ホットライン188や自治体の消費生活センターにご相談ください。ごみの分別・出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
