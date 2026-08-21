import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/rikon-kazai-wakekata/";
const TITLE = "離婚にともなう家財の整理｜実務的な進め方と専門家に相談すべきこと";
const DESC =
  "離婚が決まったとき、家の中の物をどう扱うかは実務として避けて通れません。この記事では、記録の残し方、話し合いを進めるための整理の手順、住まいを出る側・残る側それぞれの段取りを扱います。財産分与など法的な論点は結論を断定せず、弁護士など専門家への相談を前提とした一般的な考え方をご紹介します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「片付け」と「取り決め」は別のもの。混ぜると進まない",
    body: "離婚に伴う家財の扱いには、二つの異なる作業が含まれています。一つは、どの物を誰が引き継ぐかという取り決め。もう一つは、実際に運び出したり処分したりする片付けです。この二つを同時に進めようとすると、目の前の物一つひとつが交渉の対象になり、作業も話し合いも止まってしまいます。まず全体を把握して記録を残し、取り決めが必要な物と、そうでない日用品を分ける。そのうえで、決まった物から順に動かす。この順番を守ると、感情の消耗をかなり抑えられます。",
  },
  {
    title: "何がどれだけあるかを、双方が把握していないことが多い",
    body: "長く一緒に暮らしていると、家の中にある物の全体像を誰も正確には把握していない状態になりがちです。押し入れの奥、納戸、物置、ベランダの収納庫。どちらが買った物か、いつからあるのか、記憶があいまいな物も少なくありません。この状態のまま話し合いを始めると、「あれはどうなったのか」という不信が生まれやすくなります。取り決めの内容にかかわらず、まず現状を写真と一覧で記録しておくこと。これは双方にとって、後の行き違いを防ぐ実務的な備えになります。",
  },
  {
    title: "法的な扱いは個別の事情で変わるため、自己判断は避ける",
    body: "家財を含む財産をどのように分けるかについては、法律上の考え方があり、婚姻の経緯、取得の時期、名義、資金の出どころなど個別の事情によって結論が変わります。インターネット上の一般論や知人の経験談をそのまま自分の状況に当てはめるのは適切ではありません。とくに、住宅、自動車、預貯金、保険、ローンなど金額の大きいものや、名義や契約が関わるものは、判断を誤ると後戻りが難しくなります。こうした論点は、弁護士など法律の専門家に相談したうえで進めてください。この記事では断定的な結論は示しません。",
  },
];

const merits = [
  {
    title: "実務の軸1：まず記録を残す",
    body: "話し合いの内容や進み方にかかわらず、最初にやっておいて損がないのが記録です。部屋ごとに写真を撮り、大型の家具・家電は品名と設置場所が分かるように残します。あわせて、購入時期や購入した経緯が分かる書類、保証書、取扱説明書、契約に関する書面がどこにあるかを確認しておきます。記録は相手を疑うためのものではなく、後になって「そんな話は聞いていない」という食い違いが起きたときに、双方を守るためのものです。撮影日が残る形で保存し、自分だけがアクセスできる場所にも控えを置いておくと安心です。",
  },
  {
    title: "実務の軸2：取り決めが必要な物と日用品を分ける",
    body: "家の中のすべてを協議の対象にすると、作業量が膨大になります。実務的には、金額や名義が関わる物と、それ以外の日用品を分けて考えると進みやすくなります。前者には住宅、自動車、大型の家電、貴金属や趣味の収集品など、後者には日常の食器、タオル、調理器具、消耗品などが含まれます。ただし、どこに線を引くかは状況によって異なり、法的な位置づけも一律ではありません。線引きに迷う物があれば、その物を保留にしたまま作業を進め、専門家への相談時にあわせて確認するのが安全です。",
  },
  {
    title: "実務の軸3：期限を確認し、逆算して動く",
    body: "住まいを引き払う場合、退去日という動かせない期限があります。賃貸であれば解約の通知から退去までの期間が契約で定められており、物件を売却する場合も引き渡しの期日があります。自治体の粗大ごみは申し込みから収集まで日数がかかり、買取や譲渡にも日程調整が必要です。話し合いが長引くと、片付けの時間が圧迫され、最後に慌てて判断することになります。取り決めの進み具合とは別に、片付けの期限だけは先に確認し、逆算した予定を立てておいてください。",
  },
];

const steps = [
  {
    title: "部屋ごとに現状を撮影し、家財の一覧を作る",
    body: "作業の出発点は記録です。各部屋を入口から全体が写るように撮影し、続いて収納の中、大型の家具・家電を個別に撮ります。あわせて、品名・設置場所・購入時期の分かるものは一覧に書き出します。この段階では、誰の物かを決める必要はありません。何がどこにあるかを共有できる形にすることが目的です。保証書や取扱説明書、契約に関する書面の保管場所も確認しておきましょう。撮影日が分かる形で保存し、控えを別の場所にも残しておくと、後の確認が確実になります。",
  },
  {
    title: "取り決めが必要な物を切り分け、専門家に相談する",
    body: "一覧ができたら、金額や名義、契約が関わる物を抜き出します。住宅、自動車、保険、ローンの対象になっている物、名義が明確に一方にある物などです。これらの扱いは個別の事情によって結論が変わるため、弁護士など法律の専門家に相談したうえで判断してください。相談先の探し方が分からない場合は、法律相談を受け付けている公的な窓口や、お住まいの自治体が案内している相談の仕組みを確認する方法があります。相談の際は、作成した一覧と写真が状況説明の材料になります。",
  },
  {
    title: "日用品は、生活に必要な物から順に分けていく",
    body: "取り決めの対象から外れる日用品については、実務的に分けていきます。基準は「これから誰がどこで使うか」です。住まいを出る側は、新しい住まいで必要になる物を優先して持ち出します。調理器具、食器、寝具、タオル、掃除用品といった生活必需品は、一式そろえ直すと負担が大きいため、必要な分を確保しておくと移行が楽になります。残る側も、生活が回る最低限の物が手元に残るように確認してください。ここで細かく争わないことが、全体を早く終わらせるうえでは有効です。",
  },
  {
    title: "思い出の品と子どもに関わる物は、別枠で丁寧に扱う",
    body: "写真、アルバム、記念品、子どもの作品や成長の記録などは、量ではなく意味で扱う物です。これらを処分の流れに巻き込むと、後から取り返しがつかない後悔につながります。とくに子どもに関わる物は、将来子ども自身が見たいと思う可能性があります。どちらが保管するかを決めにくい場合は、写真に撮る、デジタル化して双方が持てる形にするといった方法も検討してください。作品や写真の扱い方については関連記事でも整理しています。この作業だけは、急がず時間をかける価値があります。",
  },
  {
    title: "残った家財の処分・搬出を、期限から逆算して手配する",
    body: "どちらも引き取らないと決まった家財は、期限までに処分します。状態のよい家具・家電は買取や譲渡の対象になることがありますが、日程調整に時間がかかります。自治体の粗大ごみは申し込みから収集まで日数がかかるのが一般的で、繁忙期はさらに余裕が必要です。冷蔵庫・洗濯機・エアコン・テレビは家電リサイクル法の対象で別のルートになります。量が多い場合や搬出が難しい場合は、業者にまとめて依頼したほうが確実です。賃貸から退去する場合、残置物は原状回復のトラブルにつながることがあるため、必ず期限内に片付けてください。",
  },
];

const ngActions = [
  {
    title: "話し合いがつく前に、相手の物を処分する",
    body: "感情が高ぶっている時期には、目の前から物を消してしまいたくなることがあります。しかし、相手に属する物を無断で処分する行為は、後の話し合いを著しく難しくするだけでなく、法的な問題に発展する可能性もあります。取り決めがついていない物、どちらの物か判断がつかない物には手を付けず、そのままの状態で保管してください。どうしても場所を空ける必要がある場合は、処分ではなく別の場所へ移すにとどめ、移した事実と場所を記録しておきましょう。判断に迷うときは、専門家に確認してから動くのが安全です。",
  },
  {
    title: "法的な扱いを、インターネットの情報だけで判断する",
    body: "財産の分け方や名義に関する扱いは、婚姻の経緯、取得の時期、資金の出どころなど、個別の事情によって結論が変わります。似た事例に見えても、前提が一つ違えば結果は異なります。一般論をそのまま自分に当てはめて動いた結果、不利な状況になってから修正するのは容易ではありません。金額の大きいもの、名義や契約が関わるもの、判断に迷うものについては、弁護士など法律の専門家に相談してください。本記事も含め、一般的な情報は相談の前に状況を整理するための材料としてご活用ください。",
  },
  {
    title: "記録を残さないまま、物を動かし始める",
    body: "写真も一覧もない状態で搬出や処分を進めると、後になって「何がなくなったのか」を誰も説明できなくなります。この状態は、双方にとって不利益です。手間に感じても、動かす前に部屋ごとの写真を撮り、大型の物は個別に記録しておいてください。撮影日が残る形で保存し、控えを別の場所にも置いておくと確実です。記録は相手を追及するためのものではなく、話し合いを事実に基づいて進めるための土台になります。",
  },
  {
    title: "退去の期限を確認しないまま、話し合いを長引かせる",
    body: "取り決めの協議と、住まいを空ける期限は別の時計で動いています。協議が続いているうちに退去日が近づき、最後の数日で大量の家財を処分することになる——これはよくある展開です。慌てて動けば、本来なら買取や譲渡ができた物も処分に回り、判断の質も落ちます。賃貸なら契約書で解約の通知期間と退去日を確認し、片付けの予定を先に立ててください。協議の進み方にかかわらず、期限の管理だけは切り離して行うのが実務的です。",
  },
];

const judgeSigns = [
  "退去の期限が迫っていて、自力では期限内に片付けきれない",
  "大型の家具・家電が多く、搬出に人手が必要になる",
  "住まいを離れた後に残った家財を整理する必要がある",
  "不用品の量が多く、自治体の回収だけでは間に合わない",
  "自分が立ち会える日が限られていて、作業をまとめて終えたい",
];

const faqs = [
  {
    q: "家財はどう分けるのが正しいのですか？",
    a: "財産の分け方には法律上の考え方がありますが、婚姻の経緯、取得の時期、名義、資金の出どころなど個別の事情によって結論が変わるため、一般論として断定することはできません。とくに住宅、自動車、預貯金、保険、ローンが関わるものは影響が大きいため、弁護士など法律の専門家にご相談ください。相談前に、家財の一覧と部屋ごとの写真を用意しておくと、状況を説明しやすくなります。本記事は片付けの実務についての一般的な情報です。",
  },
  {
    q: "相手が家に置いていった物を処分してもよいですか？",
    a: "取り決めがついていない物や、相手に属する物を無断で処分することは避けてください。後の話し合いを難しくするだけでなく、法的な問題に発展する可能性もあります。場所を空ける必要がある場合は、処分ではなく別の場所へ移すにとどめ、移した事実と場所を記録しておきましょう。連絡が取れる状況であれば、期限を示して引き取りを依頼し、そのやり取りも残しておくのが安全です。判断に迷う場合は専門家に確認してください。",
  },
  {
    q: "子どもの物や思い出の品はどう扱えばよいですか？",
    a: "量ではなく意味で扱う物なので、他の家財とは別枠にすることをおすすめします。子どもの作品や成長の記録は、将来子ども自身が見たいと思う可能性があります。どちらが保管するか決めにくい場合は、写真に撮る、デジタル化して双方が持てる形にするといった方法もあります。急いで結論を出さず、保管する場所を確保したうえで、時間をかけて判断してください。写真やアルバムの整理方法は関連記事で扱っています。",
  },
  {
    q: "退去までの時間が足りません。どうすればよいですか？",
    a: "まず契約書で解約の通知期間と退去日を確認し、そこから逆算して予定を立ててください。自治体の粗大ごみは申し込みから収集まで日数がかかるのが一般的です。期限に間に合わない見込みであれば、片付け・不用品回収業者にまとめて依頼する方法があります。残置物を残したまま退去すると原状回復をめぐるトラブルにつながることがあるため、期限内に片付けきることを優先してください。原状回復の範囲については関連記事で整理しています。",
  },
];

const related = [
  { href: "/taikyo-katazuke/", label: "退去前の片付け", desc: "期限までに片付け切る段取り" },
  { href: "/genjou-kaifuku-katazuke-senbiki/", label: "原状回復と片付けの線引き", desc: "退去時にどこまでやるか" },
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理", desc: "残す基準とデジタル化の方法" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない家具の搬出と選択肢" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分", desc: "冷蔵庫・洗濯機などのルート" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "自治体・売却・譲渡の使い分け" },
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
    { "@type": "ListItem", position: 2, name: "離婚にともなう家財の整理" },
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
    { href: "#kiso", label: "1｜家財の整理でつまずきやすい理由" },
    { href: "#merit", label: "2｜実務を前に進める3つの軸" },
    { href: "#houshin", label: "3｜専門家に相談すべき論点の切り分け" },
    { href: "#steps", label: "4｜整理を進める5ステップ" },
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

      <Breadcrumb items={[{ label: "離婚にともなう家財の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          離婚にともなう家財の整理｜実務的な進め方と専門家に相談すべきこと
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          離婚が決まると、話し合わなければならないことが数多くある一方で、家の中の物をどうするかという実務も同時に進める必要があります。長く一緒に暮らした家には、二人で選んだ家具、どちらが買ったか分からない日用品、子どもの成長の記録、そして扱いに迷う思い出の品が残されています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、家財の記録の残し方、取り決めが必要な物と日用品の切り分け、住まいを出る側と残る側それぞれの段取り、そして期限から逆算した処分の進め方を整理します。なお、財産の分け方や名義に関する法的な論点は個別の事情によって結論が変わるため、本記事では断定せず、弁護士など専門家への相談を前提とした一般的な考え方をご紹介します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「取り決め」と「片付け」は別作業。まず全体を記録し、対象を切り分けてから動かす</li>
          <li>動かす前に部屋ごとの写真と家財の一覧を残す。記録は双方を守る土台になる</li>
          <li>財産の分け方や名義に関する判断は個別事情で変わる。弁護士など専門家に相談する</li>
          <li>退去の期限は協議とは別の時計で進む。期限の管理だけは切り離して逆算する</li>
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

      <H2 id="kiso" num="1">家財の整理でつまずきやすい理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        この時期の片付けは、通常の引っ越しとは性質が違います。作業の量よりも、判断の構造が複雑であることが負担の大きな原因です。まずはその構造を整理しておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">実務を前に進める3つの軸</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        取り決めの内容がどうなるにせよ、先に進めておいて損のない実務があります。記録、切り分け、期限管理の三つです。この三つは、話し合いの結論を先取りせずに実行できます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">専門家に相談すべき論点の切り分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家の中にある物のうち、日常の食器やタオル、消耗品のような日用品については、実務的に分けていくことができます。一方で、住宅、自動車、預貯金、保険、ローンの対象になっている物、名義や契約が関わる物、金額の大きい物については、扱いが個別の事情に左右されます。婚姻の経緯、取得の時期、資金の出どころといった前提が一つ違えば、結論も変わります。似た事例の一般論をそのまま当てはめて動いた結果、後から修正するのは容易ではありません。こうした論点は、弁護士など法律の専門家に相談したうえで判断してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相談先の探し方が分からない場合は、法律相談を受け付けている公的な窓口や、お住まいの自治体が案内している相談の仕組みを確認する方法があります。利用できる仕組みや条件は地域によって異なりますので、市区町村の窓口でお尋ねください。相談の際は、作成した家財の一覧と部屋ごとの写真、契約に関する書面の所在をまとめておくと、状況の説明がスムーズになります。何を相談すべきか整理しきれない段階でも、まず相談してみることで論点がはっきりすることがあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、片付けの実務については、協議の結論を待たずに進められる部分があります。退去の期限確認、記録の作成、日用品の仕分け、処分ルートの下調べなどです。これらを先に済ませておくと、取り決めがついた時点ですぐ動けます。退去に向けた段取りは<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付け</Link>、原状回復の範囲については<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">原状回復と片付けの線引き</Link>で整理しています。処分の選択肢を先に把握しておきたい場合は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">整理を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、記録を作る→取り決めが必要な物を切り分けて専門家に相談する→日用品を分ける→思い出の品を別枠で扱う→残った家財を期限内に処分する、の5ステップです。
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
        <h3 className="font-bold text-text-primary mb-2">法的な判断は、この記事では結論を示しません</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          財産の分け方、名義の扱い、相手の物の処分の可否といった論点は、個別の事情によって結論が変わります。本記事は片付けという実務についての一般的な情報を提供するものであり、法的な助言を行うものではありません。判断に迷うこと、金額や名義が関わること、相手との間で意見が分かれていることについては、弁護士など法律の専門家にご相談ください。安全に関わる状況や身の危険を感じる状況にある場合は、片付けよりも先に、自治体の相談窓口や警察など適切な機関にご相談ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        処分の実務については、状態のよい家具・家電は買取や譲渡の対象になることがあります。考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>で解説しています。大型の家具は自治体の粗大ごみとして申し込む流れが一般的で、手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。冷蔵庫・洗濯機・エアコン・テレビは家電リサイクル法の対象で別のルートになり、詳細は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分</Link>で扱っています。写真やアルバムの整理は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理</Link>、子どもの作品の扱いは<Link href="/kodomo-sakuhin-seiri/" className="text-primary underline underline-offset-2">子どもの作品・思い出品の整理</Link>が参考になります。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        心身の負担が大きい時期に、一人で家全体を片付けるのは容易ではありません。次のような状況では、片付け・不用品回収業者への依頼を検討してください。対応できる業者は<Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。取り決めがついていない物が残っている場合は、作業の対象範囲を明確に指定し、触れてほしくない物は事前に別室へ移すか、その旨を伝えておくと行き違いを防げます。依頼先の候補は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴を比較できます。自治体回収と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。
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
        本記事は片付けの実務に関する一般的な知識の提供を目的としたものであり、法的な助言を行うものではありません。財産の分け方、名義や契約の扱い、相手の所有物の取り扱いなどの法的な論点は個別の事情により結論が異なりますので、弁護士など法律の専門家にご相談ください。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なります。賃貸の原状回復に関する取り決めは契約内容によって異なりますので、契約書と管理会社にご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
