import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/oogata-kagu-shobun/";
const TITLE = "大型家具の処分方法｜運べないタンス・ベッド・ソファの搬出と選択肢";
const DESC =
  "タンス・ベッド・ソファなど、自分では運べない大型家具の処分方法を解説します。自治体の粗大ごみ・売却・譲渡・回収業者といった処分ルートの使い分け、解体や搬出を自力で行う場合の手順と注意点、無理をせず業者に任せるべきサインまで、初めての方向けに順を追って整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "大型家具の処分が難しいのは「運べない」「乗らない」「重い」から",
    body: "タンス・ベッド・ソファ・食器棚・本棚などの大型家具は、通常のごみとして出せないだけでなく、そもそも一人では持ち上げられない、廊下や階段を通らない、車に乗らないという物理的な壁があります。処分方法そのものより、「家の外まで安全に出せるか」が最大の課題になることが多く、搬出の見通しを最初に立てることが失敗しないコツです。",
  },
  {
    title: "多くの自治体では「粗大ごみ」として収集の対象になる",
    body: "一定の大きさを超える家具は、多くの自治体で粗大ごみとして扱われ、事前申込みのうえ収集日に指定場所へ出す方式が一般的です。ただし、対象となるサイズの基準、申込み方法、手数料、収集までの待ち期間、戸別収集か持ち込みかといった条件は自治体によって大きく異なります。必ずお住まいの市区町村の公式サイトで最新の案内を確認してください。",
  },
  {
    title: "「指定場所まで自分で出す」のが原則という点に注意",
    body: "自治体の粗大ごみ収集は、家の前や集積場所など指定の場所まで自分で運び出すことが前提になっているのが一般的です。部屋からの搬出まで頼めるかどうか、高齢者などを対象にした運び出し支援があるかどうかは自治体により異なります。自力での搬出が難しい場合は、後述する回収業者や、搬出に対応するサービスの利用を検討することになります。",
  },
];

const routes = [
  {
    title: "自治体の粗大ごみ収集・処理施設への持ち込み",
    body: "費用を抑えやすい基本のルートです。事前申込み制が一般的で、引っ越しシーズンなどは収集まで日数がかかることもあるため、期限がある場合は早めの申込みが安全です。車と人手を確保できるなら、自治体の処理施設へ直接持ち込む方法を案内している地域もあります。いずれも手続き・手数料・対象品目は自治体ごとに異なるため、公式サイトでの確認が前提です。",
  },
  {
    title: "リサイクルショップ・フリマアプリ・譲渡",
    body: "状態のよい家具、ブランド家具、製造から年数の浅い家具は、売却や譲渡で手放せる可能性があります。出張買取に対応する店舗なら搬出まで任せられる場合もあります。一方、大型家具は需要が限られ、フリマアプリでは梱包・配送の手配が大きなハードルになります。売れるまで待てる時間があるかどうかで判断しましょう。",
  },
  {
    title: "不用品回収業者・片付け業者",
    body: "部屋からの搬出・階段作業・解体まで含めて任せられるのが最大の利点で、日時の融通も利きやすいルートです。費用は品目・量・搬出条件により異なるため、複数社から見積もりを取って比較するのが基本です。家具1点だけでなく、他の不用品もまとめて処分したい場合や、退去期限が迫っている場合に特に向いています。",
  },
];

const steps = [
  {
    title: "処分する家具の寸法と搬出経路を測る",
    body: "最初にメジャーで家具の幅・奥行き・高さを測り、部屋のドア、廊下の曲がり角、階段、エレベーター、玄関の幅と比べます。搬入できたのだから搬出もできるはずと思いがちですが、組立式家具は部屋の中で組み立てられたもので、そのままでは出せないことがあります。通らない場合は解体が必要かどうかをこの段階で判断します。",
  },
  {
    title: "処分ルートを決めて申込み・依頼をする",
    body: "「まだ使える物は売却・譲渡」「使えない物は自治体の粗大ごみ」「搬出できない物・急ぐ物は業者」という基準でルートを決めます。自治体収集は申込みから収集日まで間が空くことがあるため、退去日などの期限から逆算して先に申込みを済ませましょう。処分ルート全体の比較は不用品の処分ルート比較の記事で詳しく解説しています。",
  },
  {
    title: "中身を空にし、外せる部品を外して軽くする",
    body: "タンスや食器棚は、引き出し・棚板・扉を外すだけで大幅に軽くなり、搬出時の事故も減らせます。中身は事前にすべて出し、引き出しの奥に貴重品や書類が残っていないか必ず確認してください。ガラス扉や鏡は割れると危険なので、外せる場合は外し、外せない場合は養生テープや毛布で保護します。",
  },
  {
    title: "解体が必要な場合は無理のない範囲で行う",
    body: "組立式のベッドフレームや棚はドライバーや六角レンチで分解できることが多く、分解すれば運びやすくなります。一方、接着や釘で固定された家具の解体はのこぎり作業になり、時間も体力も想像以上にかかります。スプリング入りマットレスのように個人での解体が難しい物もあります。少しやってみて手に負えないと感じたら、途中でも業者への依頼に切り替えるのが安全です。",
  },
  {
    title: "搬出は2人以上で、養生と足元の確保をしてから",
    body: "搬出は必ず2人以上で行い、軍手・動きやすい靴を着用し、通路の床や壁を毛布や段ボールで養生してから運びます。階段では下側に立つ人に重さが集中するため、体格に合わせて役割を決め、声をかけ合いながら少しずつ進めます。腰を痛める事故が最も多い作業なので、少しでも無理を感じたら中断してください。",
  },
];

const ngActions = [
  {
    title: "一人で無理に運んで体や住まいを傷める",
    body: "大型家具の搬出で最も多い失敗が、一人で動かそうとして腰を痛めたり、床や壁、家具そのものを傷つけたりすることです。賃貸住宅では壁や床の傷が退去時の負担につながるおそれもあります。人手を確保できないときは、搬出ごと業者に任せる判断が結果的に安上がりになることも珍しくありません。",
  },
  {
    title: "自治体ルールを確認せずに集積場所へ出す",
    body: "粗大ごみは事前申込みが必要な自治体が多く、手続きをせずに集積場所へ置くと収集されず、不適正な排出として扱われるおそれがあります。サイズの基準や出し方は地域差が大きいため、思い込みで判断せず、必ずお住まいの市区町村の案内を確認してから出しましょう。",
  },
  {
    title: "「無料回収」をうたう巡回トラックに安易に渡す",
    body: "チラシや拡声器で無料回収をうたう業者の中には、廃棄物の処理に必要な許可を確認できないものがあり、積み込み後に費用を請求されたり、回収品が不法投棄されたりするトラブルが報告されています。依頼する場合は、会社情報や許可、実績を確認できる業者を選びましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
  {
    title: "解体して普通ごみにすれば何でも出せると考える",
    body: "家具を細かく解体して可燃ごみ・不燃ごみとして出せるかどうかは、自治体のルールによります。サイズ制限や材質の条件があり、解体しても粗大ごみ扱いのままとする地域もあります。解体作業自体もけがのリスクが高いため、「解体すれば無料で出せるはず」という前提で始めるのではなく、先にルールを確認してから判断してください。",
  },
];

const judgeSigns = [
  "階段やエレベーターなしの上層階からの搬出が必要",
  "手伝ってくれる人手が確保できず、一人で作業することになる",
  "解体しないと部屋から出せない家具がある",
  "退去や引っ越しの期限までに自治体収集が間に合わない",
  "家具以外にも処分したい不用品がまとまった量ある",
];

const faqs = [
  {
    q: "大型家具の処分費用はどのくらいかかりますか？",
    a: "自治体の粗大ごみ手数料は品目や自治体により異なり、回収業者に依頼する場合の費用も品目・量・搬出条件（階段の有無、解体の要否など）によって大きく変わるため、一律にいくらとは言えません。業者に頼む場合は複数社から見積もりを取り、搬出作業まで含んだ総額と内訳を比較するのが確実です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
  {
    q: "ベッドのマットレスも家具と同じように処分できますか？",
    a: "スプリング入りマットレスは、通常の粗大ごみと扱いが異なる自治体や、処理が難しい品目として別の案内をしている自治体があります。フレームとマットレスで処分ルートが分かれることもあるため、それぞれ確認が必要です。マットレス・布団の処分方法は布団・マットレスの処分方法の記事で詳しく解説しています。",
  },
  {
    q: "家具と一緒に冷蔵庫や洗濯機も処分できますか？",
    a: "冷蔵庫・洗濯機・テレビ・エアコンは家電リサイクル法の対象で、自治体の粗大ごみとしては収集されないのが原則です。家具とは処分ルートが異なるため、リサイクル法対象品目の正しい手放し方は家電リサイクル法対象品の処分方法の記事を参照してください。回収業者に依頼する場合は、対象家電の扱いに対応しているかを見積もり時に確認しましょう。",
  },
  {
    q: "まだ使える家具を無駄にしない手放し方はありますか？",
    a: "状態がよければリサイクルショップの出張買取、フリマアプリ、地域の掲示板やお譲りサービスでの譲渡が候補になります。売却は時間がかかることが多いため、期限がある場合は「いつまでに売れなければ処分に切り替える」と締め切りを決めておくと計画が崩れません。買取に対応する片付け業者に、回収と買取をまとめて相談する方法もあります。",
  },
];

const related = [
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分方法", desc: "処理が難しい寝具類の手放し方" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "冷蔵庫・洗濯機など対象家電のルート" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "粗大ごみ収集の使い方の基本" },
  { href: "/service/fuyohin/", label: "不用品回収業者の選び方", desc: "搬出まで任せられる業者の選び方" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "間取り・作業別の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "大型家具の処分方法" },
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
    { href: "#kiso", label: "1｜大型家具の処分が難しい理由と基本の考え方" },
    { href: "#route", label: "2｜大型家具の処分ルート3つと使い分け" },
    { href: "#houshin", label: "3｜処分計画の立て方" },
    { href: "#steps", label: "4｜自力で搬出・処分する5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に任せたほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "大型家具の処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          大型家具の処分方法｜運べないタンス・ベッド・ソファの搬出と選択肢
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「タンスを処分したいが、重くて部屋から出せない」「ベッドやソファはどこに頼めば引き取ってもらえるのか」——大型家具の処分は、捨て方そのものよりも「どうやって家の外まで運ぶか」でつまずく人が多い作業です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、大型家具の処分ルートの選び方から、自力で搬出・処分する場合の手順、けがやトラブルを避けるための注意点、無理をせず業者に任せるべきサインまでを解説します。1点だけ処分したい方にも、引っ越しや退去でまとめて手放したい方にも役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>大型家具の処分は「搬出経路の確認」が最初の一歩。寸法を測ってから処分ルートを決める</li>
          <li>基本ルートは自治体の粗大ごみ・売却/譲渡・回収業者の3つ。状態と期限で使い分ける</li>
          <li>自治体収集は事前申込み制が一般的で、手続き・手数料は自治体により異なる。必ず公式サイトを確認する</li>
          <li>階段搬出・解体・人手不足のいずれかに当てはまるなら、無理せず業者依頼が安全</li>
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

      <H2 id="kiso" num="1">大型家具の処分が難しい理由と基本の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、大型家具の処分でつまずきやすいポイントと、前提として知っておきたい自治体収集の仕組みを整理します。ここを押さえておくと、後の段取りがスムーズになります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="route" num="2">大型家具の処分ルート3つと使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        大型家具の主な処分ルートは次の3つです。「費用を抑えたいか」「まだ使える状態か」「期限が迫っているか」「搬出を任せたいか」で選び分けるのが基本です。
      </p>
      <div className="space-y-4 mb-4">
        {routes.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">処分計画の立て方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        処分計画の大原則は、「搬出できるかを先に確かめ、期限から逆算してルートを決める」ことです。運び出せるかどうかで取れる選択肢が変わるため、寸法の確認より先に申込みをしてしまうと、収集日に出せないという事態が起こり得ます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、引っ越しや退去にともなう処分では、家具1点ずつ考えるより「家全体で何をいつまでに手放すか」をまとめて設計したほうが効率的です。退去期限がある場合の段取りは<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けの進め方</Link>の記事で、<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の業者比較も参考にしてください。
      </p>

      <H2 id="steps" num="4">自力で搬出・処分する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、自力で大型家具を処分する場合の手順を5つのステップで紹介します。ポイントは「測ってから決める、軽くしてから運ぶ」です。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        処分ルート全体の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で、自治体の粗大ごみ収集の使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>で解説しています。粗大ごみの出し方・手数料・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
      </p>

      <H2 id="ng" num="5">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        回収業者とのトラブルを避けるためのチェックポイントは、<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事にまとめています。
      </p>

      <H2 id="gyousha" num="6">業者に任せたほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力にこだわらず、搬出まで対応する不用品回収業者・片付け業者への依頼を検討しましょう。粗大ごみに強い業者の例としては<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗の口コミ・評判</Link>などのレビュー記事も参考になります。
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
        本記事は一般的な知識の提供を目的としたものです。粗大ごみの出し方・手数料・対象品目は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。業者に依頼する場合の費用は物量・搬出条件により異なるため、複数社の見積もり比較をおすすめします。
      </p>
    </article>
  );
}
