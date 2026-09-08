import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/jiko-hannyu-shobun/";
const TITLE = "ごみ処理施設への自己搬入とは｜持ち込み処分が向く場面と事前に確認すること";
const DESC =
  "自治体によっては、住民が自分でごみ処理施設へ持ち込む方法が用意されています。収集を待つ方法との違い、受け入れの可否や条件をどこで確認するか、当日までに整えておく準備、積み込みと運搬の注意点、持ち込みが向く場面と向かない場面を、一般的な考え方として整理して解説します。";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "自己搬入は「自分で運んで、自分で下ろす」方法",
    body: "自治体の粗大ごみ収集は、申し込みをしたうえで、決められた日に決められた場所から回収してもらう仕組みです。これに対して自己搬入は、住民が自分の車などで施設まで運び、自分で荷下ろしをする方法を指します。運搬と荷下ろしの手間を自分で負担する代わりに、収集日を待つ必要が小さくなる場合があるのが特徴です。ただし、この方法を用意しているかどうかも含めて、仕組みは自治体によって異なります。",
  },
  {
    title: "受け入れの有無も、条件も、自治体ごとに違う",
    body: "住民の持ち込みを受け付けている自治体もあれば、受け付けていない自治体もあります。受け付けている場合でも、事前の申し込みが必要か、受付できる日と時間はいつか、どの品目を持ち込めるか、身分証などの書類が要るか、車両の大きさに条件があるかといった点は、それぞれ定められています。近隣の市区町村で通用した方法が、そのまま自分の地域でも使えるとは限らないため、必ず自分の住む自治体の案内を確認してください。",
  },
  {
    title: "家庭から出た物か、事業から出た物かで扱いが変わる",
    body: "ごみは、家庭から出たものと、事業活動に伴って出たもので、取り扱いの枠組みが分かれています。店舗・事務所・作業場から出た物は、家庭のごみとは別の扱いになるのが一般的で、持ち込みの可否や手続きも変わります。自宅の一部を仕事に使っている場合など、判断に迷うときは、自己判断で運び込まずに自治体の窓口へ状況を伝えて確認してください。この記事で扱うのは家庭から出た不用品を前提とした一般的な考え方です。",
  },
];

const merits = [
  {
    title: "確認1：受け入れの可否と、事前の申し込みが要るかどうか",
    body: "まず、住民の持ち込みを受け付けているかを調べます。受け付けている場合でも、電話やインターネットでの事前申し込みを前提としている自治体があり、予約のない持ち込みを受け入れないことがあります。受付できる曜日と時間も限られているのが一般的で、年末年始などは取り扱いが変わることもあります。「行けば受け取ってもらえる」と考えず、申し込みの要否と受付の時間帯を先に確認してください。",
  },
  {
    title: "確認2：持ち込める品目と、持ち込めない品目",
    body: "施設で受け入れられる品目は決まっています。法律にもとづく別の仕組みで処理することになっている品目や、性質上受け入れられない品目は、持ち込みの対象外とされるのが一般的です。処分したい物の一覧を作り、それぞれが持ち込みの対象になるかを自治体の案内に照らして確認しましょう。対象外の物が混ざっていると、その分だけ別のルートを用意する必要が出てきます。",
  },
  {
    title: "確認3：必要な書類・料金の扱い・車両の条件",
    body: "住所を確認するための書類の提示を求められることがあるほか、料金の計算方法や支払い方法も自治体によって異なります。また、持ち込みに使える車両の種類や大きさに条件が設けられている場合もあります。当日に慌てないよう、必要な物と手順を事前に控えておきましょう。誰の名義の家から出た物かを尋ねられることもあるため、代理で持ち込む場合はその点も確認しておくと確実です。",
  },
];

const steps = [
  {
    title: "持ち込みたい物を書き出し、品目ごとに区分を確認する",
    body: "品名、おおよその大きさ、数を書き出します。そのうえで、自治体の案内に照らして、持ち込みの対象になる物、通常の分別収集で出せる物、別の仕組みで処理する物に分けます。ここで区分を整理しておくと、当日に受け取ってもらえない物が出る事態を防げます。判断に迷う品目は、まとめて窓口に問い合わせると一度で片が付きます。",
  },
  {
    title: "自治体の案内で受付の条件をひととおり確認する",
    body: "受け入れの可否、事前申し込みの要否、受付日と時間、必要な書類、料金の扱い、車両の条件を確認します。公式サイトに記載がない点は窓口に尋ねてください。あわせて、施設の場所と行き方、当日の受付の流れも確認しておくと、初めてでも迷いません。確認した内容はメモに残し、当日持参できるようにしておきます。",
  },
  {
    title: "必要な場合は事前の申し込みを済ませる",
    body: "事前申し込みが必要な自治体では、受付の枠が埋まることもあるため、日程に余裕を持って申し込みます。申し込みの際には、持ち込む品目と数、車両について聞かれることがあるので、書き出した一覧を手元に置いて対応しましょう。受付番号や予約日時は控えておき、当日に確認できる状態にしておきます。",
  },
  {
    title: "積み込みの準備をして、人手と車の大きさを確保する",
    body: "運ぶ物の大きさと重さを見て、一度で積めるかを確認します。無理に詰め込むと、走行中の荷崩れや、荷下ろし時のけがにつながります。重い物を一人で扱わないこと、動きやすい服装と手袋を用意すること、荷台の物が動かないよう固定することが基本です。二回に分けたほうが安全だと判断したら、迷わず分けてください。",
  },
  {
    title: "当日は受付の指示に従って運搬と荷下ろしを行う",
    body: "施設では、受付での手続きのあと、指示された場所へ運んで荷下ろしをする流れが一般的です。現地では作業車両が動いていることもあるため、案内に従って安全に行動してください。荷下ろしは自分で行うのが基本で、時間帯によっては待ち時間が発生することもあります。余裕のある時間に到着できるよう予定を組みましょう。",
  },
];

const ngActions = [
  {
    title: "受け入れの可否を確認せずに、車に積んで出発する",
    body: "持ち込みを受け付けていない自治体もあり、受け付けている場合でも事前申し込みが前提のことがあります。確認しないまま出発すると、往復の時間と労力が無駄になるだけでなく、積んだ物を家に戻す作業まで発生します。出発前に、受け入れの可否、受付の日時、必要な書類を必ず確認してください。電話で確認した内容は、日付とあわせてメモに残しておくと確実です。",
  },
  {
    title: "持ち込めない品目を混ぜて積んでしまう",
    body: "対象外の品目が混ざっていると、その分は受け取ってもらえず、持ち帰ることになります。別の仕組みで処理することが定められている品目や、性質上受け入れられない品目は、あらかじめ分けておきましょう。積み込む前に一覧と照らし合わせて確認する習慣を付けると、現地での戻し作業を避けられます。判断が付かない物は積まずに、先に窓口へ相談してください。",
  },
  {
    title: "積載を無理して、荷崩れやけがの危険をつくる",
    body: "一度で終わらせようとして車に詰め込むと、走行中の荷崩れや、荷下ろし時の事故につながります。視界をふさぐ積み方、後方に大きくはみ出す積み方は危険です。重い物を一人で持ち上げるのも避けてください。二回に分ける、人手を頼む、あるいは持ち込み以外の方法に切り替えるという判断のほうが、結果的に早く安全に終わります。",
  },
  {
    title: "受付の時間や当日の流れを調べずに、間際に到着する",
    body: "受付できる時間は限られているのが一般的で、締め切り間際に到着すると受け付けてもらえないことがあります。また、時間帯によっては待ち時間が発生することもあります。施設の場所、行き方、受付の流れを事前に調べ、余裕を持った時間に到着できるよう予定を組んでください。急いでいる状況ほど、確認を省かないことが大切です。",
  },
];

const judgeSigns = [
  "一人では持ち上げられない大型の家具や家電が中心になっている",
  "積める車がない、または一度で運びきれない量がある",
  "階段のみの建物で、運び出す段階から人手が足りない",
  "期限が迫っていて、複数回に分けて運ぶ余裕がない",
  "体力や体調の面で、積み込みと荷下ろしを続けるのが難しい",
];

const faqs = [
  {
    q: "どの自治体でも自分で持ち込めますか？",
    a: "いいえ。住民の持ち込みを受け付けているかどうかは自治体によって異なり、受け付けていない地域もあります。受け付けている場合でも、事前申し込みの要否、受付できる日と時間、持ち込める品目、必要な書類、車両の条件はそれぞれ定められています。近隣の市区町村と同じとは限らないため、必ずお住まいの自治体の公式サイトまたは窓口でご確認ください。",
  },
  {
    q: "収集を待つのと持ち込むのでは、どちらが早いですか？",
    a: "一般に、収集は申し込みから収集日までに一定の間隔が空くのに対し、持ち込みは受付の枠が取れればより早く手放せる場合があります。ただし、受付の日時が限られていることも多く、必ずしも持ち込みのほうが早いとは限りません。期限がある場合は、両方の受付の状況を確認したうえで、間に合うほうを選ぶのが確実です。",
  },
  {
    q: "料金はいくらかかりますか？",
    a: "料金の有無、計算方法、支払い方法は自治体によって異なります。重さで計算する場合、品目ごとに定められている場合など、考え方もさまざまです。金額を前提に計画を立てると行き違いが起きやすいため、自治体の案内で確認してください。事業者に依頼する場合の料金は、物量・間取り・作業内容・地域・事業者により異なりますので、見積もりで確認します。",
  },
  {
    q: "店舗や事務所から出た物も持ち込めますか？",
    a: "事業活動に伴って出た物は、家庭から出た物とは取り扱いの枠組みが異なるのが一般的で、持ち込みの可否や手続きも変わります。自宅の一部を仕事に使っている場合など、区分の判断に迷うときは、自己判断で運び込まず、自治体の窓口に状況を伝えて確認してください。店舗の片付け全体の進め方は、閉店・移転の片付けの記事も参考になります。",
  },
];

const related = [
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "受付から収集日までの基本" },
  { href: "/sodaigomi-konzatsu-taisaku/", label: "粗大ごみの予約が取れないとき", desc: "混み合う時期の段取り" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体と業者の使い分け", desc: "どちらに頼むかの判断基準" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運び出せない物の手放し方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
  { href: "/heiten-katazuke/", label: "閉店・オフィス移転の片付け", desc: "什器・備品の処分の進め方" },
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
    { "@type": "ListItem", position: 2, name: "ごみ処理施設への自己搬入" },
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
    { href: "#kiso", label: "1｜自己搬入という方法の位置づけを押さえる" },
    { href: "#merit", label: "2｜持ち込む前に確認したい3つのこと" },
    { href: "#houshin", label: "3｜持ち込みが向く場面と、向かない場面を見分ける" },
    { href: "#steps", label: "4｜自己搬入を進める5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜自分で運ばず、依頼を検討したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "ごみ処理施設への自己搬入" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ごみ処理施設への自己搬入とは｜持ち込み処分が向く場面と事前に確認すること
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月2日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          粗大ごみの収集を申し込んだものの、収集日が期限に間に合わない。処分したい物が一度に何点も出た。こうした場面で候補に挙がるのが、自分で車に積んで施設へ持ち込む「自己搬入」という方法です。収集を待たずに手放せる可能性がある一方、そもそも受け入れを行っているかどうかから自治体によって異なるため、思い込みで動くと現地で断られることがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、自己搬入という方法の位置づけ、受け入れの可否や条件をどこで確認するか、当日までに整えておく準備、積み込みと運搬で気を付けること、そして持ち込みが向く場面と向かない場面を順に整理します。なお、受け入れの可否、申し込みの要否、受付日と時間、持ち込める品目、必要な書類、車両の条件はいずれも自治体によって異なりますので、実際の手続きは必ずお住まいの自治体の公式サイトまたは窓口でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>自己搬入は「収集を待たずに手放せる可能性がある方法」。ただし実施の有無から自治体ごとに異なる</li>
          <li>確認するのは、受け入れの可否・事前申し込みの要否・受付日時・対象品目・必要書類・車両の条件</li>
          <li>当日は積み込みと荷下ろしを自分で行うのが基本。人手と車の大きさが現実的な制約になる</li>
          <li>家庭から出た物か、事業から出た物かで扱いが変わるため、自治体の案内で区分を確認する</li>
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

      <H2 id="kiso" num="1">自己搬入という方法の位置づけを押さえる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        収集を待つ方法との違いと、どこまでが一般論として言えるのかを最初に整理しておきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">持ち込む前に確認したい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        現地で断られる、あるいは二度手間になる原因は、たいてい次の三点の確認漏れです。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">持ち込みが向く場面と、向かない場面を見分ける</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自己搬入が力を発揮するのは、収集日を待っていては期限に間に合わない場面、点数が多くて収集の申し込みを何回にも分けることになる場面、そして自分で運べる大きさ・重さの物が中心の場面です。逆に、運び出す人手がない、車に積めない大きさの物がある、体力的に無理があるという状況では、無理に持ち込もうとせず、別の方法を検討したほうが安全です。腰を痛める、指をはさむ、荷崩れを起こすといった事故は、急いでいるときほど起こりやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        判断の軸は「運べるか」と「下ろせるか」の二つです。積み込みができても、現地で自分が荷下ろしをすることになるため、往復のあいだ体力が続くかまで含めて考えてください。大型の家具や家電のように、一人で扱えない物が中心であれば、自治体の収集や事業者への依頼のほうが現実的です。大型の物の扱いは<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>、収集と依頼の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体回収と業者回収の使い分け</Link>で整理しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、持ち込みだけで全部を片付けようとせず、ほかの手放し方と組み合わせる発想も有効です。まだ使える物は買取や譲渡に回せば、運ぶ量そのものが減ります。手放し方の選択肢は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの併用</Link>で解説しています。収集の申し込みが混み合っている時期の考え方は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの予約が取れないときの対処</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">自己搬入を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        品目を洗い出す→自治体の案内を確認する→申し込む→積み込みの準備をする→当日運ぶ。この順で進めます。
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
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 mb-4">
        <h3 className="font-bold text-text-primary mb-2">手続き・料金・受け入れ条件は、必ず自治体の案内で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          住民の持ち込みを受け付けているかどうか、事前申し込みの要否、受付できる日と時間、持ち込める品目、必要な書類、料金の計算方法と支払い方法、使用できる車両の条件は、いずれも自治体によって異なります。本記事は一般的な考え方の整理にとどめており、個別の手続きを示すものではありません。実際の手続きは、お住まいの自治体の公式サイトまたは窓口でご確認ください。家庭から出た物と事業活動に伴って出た物では取り扱いの枠組みが異なりますので、判断に迷う場合も窓口にご相談ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        持ち込みで手放せる量には限りがあるため、家一軒分のように量が多い場合は、ほかの方法と組み合わせるのが現実的です。期限が決まっている片付けの組み立て方は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付け</Link>、収集の申し込みから収集日までの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>でまとめています。運び出しに不安がある集合住宅では<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの搬出の段取り</Link>もあわせて確認しておくと安心です。
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

      <H2 id="gyousha" num="6">自分で運ばず、依頼を検討したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のような状況に当てはまる場合は、無理に持ち込もうとせず、事業者への依頼を含めて検討したほうが安全です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。買取を伴う依頼では、古物の取り扱いに関する許可もあわせて確認します。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>で整理しています。料金は物量・間取り・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。ごみ処理施設への住民の持ち込みを受け付けているかどうか、事前申し込みの要否、受付できる日と時間、持ち込める品目の区分、必要な書類、料金の計算方法と支払い方法、使用できる車両の条件は、いずれも自治体によって異なりますので、必ずお住まいの自治体の公式サイトまたは窓口でご確認ください。家庭から出た物と事業活動に伴って出た物では取り扱いの枠組みが異なります。事業者に依頼する場合の料金および契約の条件は、物量・間取り・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
