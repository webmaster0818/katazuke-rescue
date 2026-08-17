import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/carpet-curtain-shobun/";
const TITLE = "カーペット・カーテンの処分方法｜サイズ・素材別の手放し方と注意点";
const DESC =
  "カーペット・ラグ・カーテンは、サイズや素材、自治体のルールによって粗大ごみになるか普通ごみで出せるかが変わる分かりにくい品目です。自治体ルール確認の考え方、粗大ごみ・裁断して普通ごみ・売却/譲渡・買い替え時の引き取り・業者回収という5つの処分ルート、ホットカーペットを切ってはいけない理由、フック・金具の分別、搬出しやすくする丸め方までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "分別区分は「サイズ×自治体ルール」で決まる",
    body: "カーペットやカーテンが粗大ごみになるか普通ごみで出せるかは、全国一律の決まりではなく、自治体ごとのルールで決まります。多くの自治体では一辺の長さ（30cm・50cmなど）を基準に粗大ごみかどうかを区分しており、大きなカーペットはそのままでは粗大ごみ扱いになるのが一般的です。一方、カーテンは畳めば小さくなるため、布類・可燃ごみとして出せる自治体が多く見られます。ただし基準の寸法も分類名も自治体によって異なるため、必ずお住まいの自治体の分別案内（ウェブサイトや分別アプリ）で「カーペット」「カーテン」を検索して確認することが出発点です。",
  },
  {
    title: "「切って小さくすれば普通ごみ」は、できる場合とできない場合がある",
    body: "大きなカーペットも、規定サイズ以下に裁断すれば普通ごみとして出せるとする自治体があります。手間はかかりますが、収集を待たずに処分でき費用も抑えられる方法です。ただし、これも自治体により可否や条件（一度に出せる量・縛り方など）が異なります。さらに重要なのは、電気コードが内蔵されたホットカーペット（電気カーペット）は裁断してはいけないということです。内部のヒーター線を切断する危険があるうえ、多くの自治体で電化製品として別区分になります。裁断できるのは、あくまで電気を使わない布・繊維素材のカーペットやラグに限られます。",
  },
  {
    title: "状態がよければ「捨てる」以外の出口もある",
    body: "カーペットやカーテンは消耗品と思われがちですが、状態やブランドによっては手放す先があります。ブランド物のラグや高品質なカーテンはリサイクルショップやフリマアプリで取引されることがあり、使用感が少なければ寄付や譲渡の選択肢もあります。また、買い替えを予定している場合は、販売店の引き取りサービスの有無を確認する価値があります。新しい物の配送時に古い物を引き取るサービスを設けている店舗があり、搬出の手間が一度で済みます。実施の有無・条件は店舗により異なるため、購入前に確認しましょう。",
  },
];

const merits = [
  {
    title: "ルート1：自治体の粗大ごみ収集に出す（基本の方法）",
    body: "規定サイズを超えるカーペット・ラグは、自治体の粗大ごみ収集に申し込むのが基本ルートです。申し込み→手数料納付→指定日に指定場所へ出す、という流れが一般的で、費用を抑えやすい方法です。収集日まで日数がかかることがあるため、引っ越しなど期限がある場合は早めに申し込みましょう。丸めて縛った状態で出すよう指定されることが多いので、出し方の指示も確認を。一般的な申し込みの流れは粗大ごみ申し込みの流れの記事で解説しています。自治体によっては処理施設への自己搬入という方法もあります。",
  },
  {
    title: "ルート2：裁断・折り畳みで普通ごみに出す（自治体ルール確認が前提）",
    body: "電気を使わないカーペットは、自治体が認めていれば規定サイズに裁断して可燃ごみ等で出せます。裁断には大きめのはさみかカッターと体力が必要で、厚手のカーペットは想像以上の重労働です。作業する場合は、床を傷つけないよう下に段ボールを敷き、少しずつ切り進めましょう。カーテンは多くの自治体で畳んで布類・可燃ごみに出せますが、こちらも地域のルール確認が前提です。「切れば何でも普通ごみ」ではない点、ホットカーペットは裁断禁止という点は必ず守ってください。",
  },
  {
    title: "ルート3：売却・譲渡・引き取り・業者回収を使い分ける",
    body: "状態のよい物はフリマアプリ・リサイクルショップでの売却や知人への譲渡、買い替え時は販売店の引き取りサービスが候補になります。売却のコツは、サイズ・素材・使用年数を明記し、汚れやほつれも正直に写真で示すことです。一方、引っ越しや大量処分でカーペット・カーテン以外にも処分品が多い場合は、不用品回収業者にまとめて依頼すると搬出まで一度で終わります。買取と処分の併用はリサイクルショップ・買取の併用の記事を、業者と自治体の使い分けは自治体と業者の使い分けの記事を参考にしてください。",
  },
];

const steps = [
  {
    title: "サイズ・枚数・素材を把握する",
    body: "最初に、処分したいカーペット・ラグ・カーテンのサイズ（縦横の長さ）と枚数、素材を確認します。カーペットは畳数表記（6畳用など）だけでなく実寸を測っておくと、自治体の区分判定や業者への見積もり依頼で正確に伝えられます。ホットカーペットかどうか、カーテンは遮光・レースなどの種別も控えておきましょう。この段階で、状態のよい物（売却・譲渡候補）と傷んだ物（処分候補）をざっくり分けておくと、後の工程がスムーズです。",
  },
  {
    title: "自治体の分別ルールを確認する",
    body: "お住まいの自治体の分別案内で、「カーペット」「ラグ」「カーテン」「ホットカーペット」それぞれの区分を確認します。粗大ごみの基準サイズ、裁断すれば普通ごみで出せるか、ホットカーペットの扱い（小型家電回収の対象かなど）は自治体によって異なります。分別に迷う品目の調べ方は分別が難しいゴミの出し方の記事でも解説しています。確認した結果を踏まえて、粗大ごみ申し込み・裁断・売却・業者依頼のどのルートにするかを品目ごとに決めます。",
  },
  {
    title: "処分ルートを決めて手配する",
    body: "粗大ごみに出すなら申し込みと手数料の手配、売却ならフリマアプリへの出品や買取店への持ち込み、業者依頼なら見積もりの取得を進めます。引っ越しの退去日など期限がある場合は、収集日・売却の成立・引き取り日が期限に間に合うかを必ず確認しましょう。売れるのを待つ時間がないときは、譲渡や処分に早めに切り替える判断も必要です。ほかにも処分したい物があるなら、処分ルート全体の考え方を不用品の処分ルートの使い分けで整理してから手配すると効率的です。",
  },
  {
    title: "取り外し・裁断・梱包の作業をする",
    body: "カーテンはフックを外し、金属製のフックやカーテンレールの部品は布と分けます。金具類の区分（不燃・金属など）も自治体ルールに従ってください。カーペットは家具をどかしてから剥がし、ほこりが舞うので換気しながら作業を。粗大ごみに出す場合は、くるくると固く丸めてひもで2〜3か所縛ると、運びやすく収集時の扱いも楽になります。裁断する場合は、厚手の生地に無理に力をかけず、少しずつ切り進めて手を傷めないよう注意してください。",
  },
  {
    title: "指定日に出す・引き渡して完了",
    body: "粗大ごみは指定日の朝、指定場所に受付番号などの必要事項を表示して出します。前日夜から出すことを禁止している自治体もあるため、出すタイミングもルールに従いましょう。売却・譲渡の場合は、梱包して発送または手渡しで完了です。処分が終わったら、床のカーペット跡の掃除や、カーテンを外した窓周りの掃除まで済ませると部屋の印象が変わります。買い替える場合は、次のカーペット・カーテンのサイズを正確に測ってから購入すると失敗がありません。",
  },
];

const ngActions = [
  {
    title: "ホットカーペット（電気カーペット）を裁断する",
    body: "布のカーペットと同じ感覚でホットカーペットをはさみで切るのは危険です。内部には電熱線が張り巡らされており、裁断は発火・感電などの事故につながるおそれがあります。ホットカーペットは電化製品として扱い、自治体の案内に従って粗大ごみや小型家電回収などの適切な区分で処分してください。コントローラーやコード類の扱いも自治体ルールを確認しましょう。「切って小さくして出す」方法が使えるのは、電気を使わない布・繊維素材のカーペットだけです。",
  },
  {
    title: "収集日以外にごみ集積所へ置いてくる",
    body: "大きなカーペットを、申し込みをせずに普通ごみの集積所へ置いてくるのはルール違反であり、収集されずに残されるだけでなく、不法投棄として扱われるおそれもあります。集積所に残されたカーペットは近隣の迷惑になり、原因者の特定につながる場合もあります。粗大ごみは必ず自治体の手続きを踏んで出すか、ほかの正規ルートで処分してください。「面倒だから」の一手間を惜しむと、かえって大きな問題になります。",
  },
  {
    title: "雨の日に布類を出す・濡れたまま梱包する",
    body: "カーテンを布類の資源回収に出す場合、雨の日は避けるよう案内している自治体が多くあります。濡れた布類はリサイクルに回せなくなることがあるためです。また、洗って干し切らないまま袋詰め・梱包すると、カビや臭いの原因になり、売却品なら受け取り手とのトラブルにもつながります。布類は乾いた状態で、透明・半透明の袋など指定の方法で出すのが基本です。カビが生えた布類の扱いと部屋のカビ対策は部屋のカビ清掃の記事も参考にしてください。",
  },
  {
    title: "フック・金具・突っ張り棒を布と一緒に出す",
    body: "カーテンフックには金属製とプラスチック製があり、布と一緒のままだと資源回収や可燃ごみの区分に合わなくなる場合があります。処分前にフックはすべて外し、素材ごとに自治体の区分に従って分けましょう。カーテンレールや突っ張り棒を一緒に処分する場合、長さによっては粗大ごみ扱いになることもあります。細かい作業ですが、この分別を怠ると収集されずに残される原因になります。分別に迷ったら自治体の分別案内で品目名を検索するのが確実です。",
  },
];

const judgeSigns = [
  "引っ越しの退去日が迫っていて、自治体の粗大ごみ収集が間に合わない",
  "大きなカーペットを丸める・運ぶ作業が体力的に難しい",
  "カーペット・カーテン以外にも家具や家電など処分したい物が多い",
  "エレベーターなしの上層階からの搬出が必要",
  "実家の整理などで、複数の部屋分をまとめて処分したい",
];

const faqs = [
  {
    q: "カーペットを切って普通ごみに出すのは、どの自治体でもできますか？",
    a: "いいえ、自治体によって可否も条件も異なります。規定サイズ以下に裁断すれば可燃ごみで出せるとする自治体もあれば、元の大きさで判断するなどの独自ルールを設けている場合もあります。必ずお住まいの自治体の分別案内で確認してください。また、電気コードやヒーター線を内蔵するホットカーペットは、危険なため裁断せず、電化製品としての区分で処分してください。",
  },
  {
    q: "カーテンは何ごみで出せばよいですか？",
    a: "多くの自治体では、カーテンは畳んで布類（資源回収）または可燃ごみとして出せますが、区分は自治体により異なります。金属製フックは外して素材ごとに分別するのが基本です。状態がよければ、リサイクルや寄付、フリマアプリでの売却という選択肢もあります。レースカーテンなど劣化しやすい物は資源回収の対象外とされる場合もあるため、地域の分別案内で「カーテン」を検索して確認しましょう。",
  },
  {
    q: "処分の費用はどのくらいかかりますか？",
    a: "自治体の粗大ごみ収集の手数料は自治体・品目・サイズにより異なるため、申し込み時に案内される金額を確認してください。裁断して普通ごみに出せる場合は、袋代程度で済むこともあります。不用品回収業者に依頼する場合は物量や条件で総額が変わるため、作業前の見積もりで確認しましょう。単品での依頼よりも、ほかの不用品とまとめて依頼するほうが効率的です。費用の考え方は費用相場ページで解説しています。",
  },
  {
    q: "ベッドやソファなど、ほかの大型品と一緒に処分したい場合は？",
    a: "処分品が複数ある場合は、品目ごとにルートを分けるより、自治体の粗大ごみでまとめて申し込むか、不用品回収業者に一括で依頼するほうが手間を減らせます。自力で搬出できるかどうかが分かれ目で、運び出しが難しい大型家具が交ざるなら業者依頼が現実的です。大型家具の処分は大型家具の処分ガイド、布団やマットレスは布団・マットレスの処分の記事でそれぞれ詳しく解説しています。",
  },
];

const related = [
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分", desc: "かさばる寝具の手放し方" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分ガイド", desc: "運べない家具の搬出と処分" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "自治体収集の一般的な手順" },
  { href: "/jitensha-bike-shobun/", label: "自転車・バイクの処分", desc: "防犯登録の一般的な手続きと処分ルート" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミの出し方", desc: "迷いやすい品目の調べ方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "処分方法の選び方を詳しく" },
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
    { "@type": "ListItem", position: 2, name: "カーペット・カーテンの処分方法" },
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
    { href: "#kiso", label: "1｜カーペット・カーテン処分の基礎知識" },
    { href: "#merit", label: "2｜処分ルートの使い分け" },
    { href: "#houshin", label: "3｜処分計画の全体方針" },
    { href: "#steps", label: "4｜処分の進め方5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に頼んだほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "カーペット・カーテンの処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          カーペット・カーテンの処分方法｜サイズ・素材別の手放し方と注意点
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          模様替えや引っ越し、買い替えで不要になったカーペットやカーテン。「これは粗大ごみ？普通ごみ？」「切れば普通ごみで出せると聞いたけど本当？」と、いざ処分しようとすると分別に迷う代表的な品目です。サイズも素材もさまざまで、自治体によってルールが違うため、正解がひとつではありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、分別区分の考え方と自治体ルールの確認方法、粗大ごみ・裁断・売却/譲渡・引き取り・業者回収という処分ルートの使い分け、ホットカーペットを切ってはいけない理由などの注意点を、手順に沿って解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>区分は「サイズ×自治体ルール」で決まる。まず自治体の分別案内で品目名を検索</li>
          <li>大きなカーペットは粗大ごみが基本。裁断して普通ごみに出せるかは自治体による</li>
          <li>ホットカーペットは電熱線内蔵のため裁断厳禁。電化製品としての区分で処分する</li>
          <li>状態がよければ売却・譲渡・買い替え時の引き取りも。大量ならまとめて業者依頼が効率的</li>
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

      <H2 id="kiso" num="1">カーペット・カーテン処分の基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        処分の前に、この品目ならではの「分かりにくさ」の正体を整理しておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">処分ルートの使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        カーペット・カーテンの処分ルートは大きく分けて次の3系統です。状態・量・期限に応じて使い分けましょう。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">処分計画の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        方針はシンプルに、「量が少なく時間があるなら自治体ルート、状態がよければ売却・譲渡、量が多いか期限が迫っているなら業者」です。カーペット1枚・カーテン数枚なら、自治体ルールを確認して粗大ごみか普通ごみで出すのが最も費用を抑えられます。引っ越しに伴う処分で家具・家電も一緒に出したい場合や、退去日まで時間がない場合は、回収業者にまとめて依頼したほうが、手配の手間も搬出の労力も一度で済みます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        引っ越しに伴う処分なら<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>で全体の逆算スケジュールを、退去期限がある場合は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去片付けの進め方</Link>もあわせて確認してください。
      </p>

      <H2 id="steps" num="4">処分の進め方5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の処分は、把握→ルール確認→ルート決定→作業→引き渡しの5ステップで進めます。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のような状況では、不用品回収業者への依頼を検討する価値があります。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。「無料回収」をうたう案内には注意が必要です（<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>参照）。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で料金・口コミを比較して選ぶ方法が便利です。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料・出し方は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。販売店の引き取りサービスの実施有無・条件は各店舗でご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
