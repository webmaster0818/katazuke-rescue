import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/ihin-katamiwake-susumekata/";
const TITLE = "遺品整理と形見分けの進め方｜時期・順番・渡し方の考え方";
const DESC =
  "形見分けは、故人の愛用品を親族やゆかりのある人に分ける慣習ですが、時期ややり方に全国一律の決まりはなく、宗派・地域・家の考え方によって異なります。形見分けの一般的な位置づけ、法要後に行う家が多いといわれる時期の目安、相続に関わる貴重品と形見の区別、誰に何を渡すかの決め方、受け取る側への配慮、遺品整理全体の中での順番までを、当事者の気持ちを尊重する視点で解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "形見分けとは——故人の愛用品を、ゆかりのある人に分ける慣習",
    body: "形見分けは、亡くなった方が使っていた品物や思い出の品を、親族や親しかった人に分けて受け継いでもらう慣習です。腕時計や万年筆、着物やアクセサリー、蔵書など、故人の人柄がしのばれる品が選ばれることが多く、品物を通じて故人を偲び、記憶を受け継ぐという意味合いを持ちます。ただし、形見分けは法律で定められた手続きではなく、やり方・時期・範囲に全国共通の決まりはありません。宗派や地域、そしてそれぞれの家の考え方によって慣習は異なり、行わない選択も含めて、どの形にも正解・不正解はないという前提で臨むことが大切です。",
  },
  {
    title: "時期は「法要後に行う家が多い」といわれるが、決まりはない",
    body: "形見分けの時期については、四十九日などの法要を終えた後に行う家が多いと一般にいわれます。葬儀直後は遺族の心身の負担が大きく、気持ちの整理も付いていないため、少し時間を置いてからという知恵と考えられます。ただしこれも慣習の一般論であり、宗派・地域によって考え方は異なります。遠方の親族が集まる機会に合わせる、遺品整理の進み具合に合わせるなど、実際の時期は家庭の事情で柔軟に決めてよいものです。迷う場合は、菩提寺や親族の年長者に地域・宗派の慣習を確認すると安心です。急ぐ必要はなく、気持ちの整理がつくまで待つことも尊重されるべき選択です。",
  },
  {
    title: "「相続に関わる物」と「形見」は分けて考える",
    body: "形見分けを進める前に知っておきたいのが、財産的な価値のある品物の扱いです。貴金属・宝石・高級時計・美術品・骨董品などは、故人の相続財産の一部として扱われ得るもので、気軽に分けてしまうと後から相続人間のトラブルや税務上の論点につながる可能性が指摘されています。こうした品物は、形見分けの箱に入れる前に相続人全員で共有し、扱いを相談するのが安全です。判断に迷う品がある場合は、税理士など専門家への相談も検討してください。本記事は一般的な慣習の解説であり、相続・税務の個別判断には踏み込みません。日用品や思い出の品と、財産価値のある物を「別のテーブル」に分けることが、形見分けを穏やかに進める土台になります。",
  },
];

const merits = [
  {
    title: "考え方1：「誰に・何を」は故人とのつながりから考える",
    body: "形見の品を誰に渡すかは、品物と受け取る人の間に自然なつながりがあるかどうかで考えると決めやすくなります。釣りが趣味だった故人の道具は釣り仲間へ、愛読書は本好きの孫へ、というように、その品を大切に使ってくれる姿が想像できる相手が、最良の受け取り手です。生前に故人が「これは誰々に」と話していた品があれば、その意向を最優先しましょう。エンディングノートや遺言書に希望が書かれていることもあるため、形見分けの前に確認しておくと、迷いも争いも減ります。",
  },
  {
    title: "考え方2：受け取る側の気持ちと事情に配慮する",
    body: "形見分けは、渡す側の気持ちだけで進めると押し付けになってしまうことがあります。受け取る側にも、住まいの収納事情や好み、そして品物への思いの濃淡があります。「よかったら受け取ってほしい」という打診の形をとり、辞退されても気を悪くしない。この距離感が、形見分けを温かい行事にします。また、目上の方への形見分けは失礼にあたるという考え方が一部にあるといわれますが、これも地域・家によって受け止めは異なります。相手との関係性に応じて、丁寧に意向を確かめながら進めましょう。",
  },
  {
    title: "考え方3：全部は残せないからこそ、「選ぶ」ことに意味がある",
    body: "故人の持ち物すべてを形見として残すことはできません。だからこそ、数を絞って選ぶことに意味があります。選ばれた品は大切に使われ、語り継がれますが、義理で引き取られた大量の品は、受け取った先で死蔵品になりがちです。形見は「少なく、深く」が基本と考えましょう。手元に残し切れない思い出の品は、写真に撮って記録してから手放すという方法もあります。写真・アルバム自体の整理はアルバム・写真の整理の記事で、残す量の考え方も含めて解説しています。",
  },
];

const steps = [
  {
    title: "重要書類・貴重品を最初に確保する",
    body: "遺品整理・形見分けの最初の工程は、形見選びではなく、重要書類と貴重品の確保です。通帳・印鑑・保険証券・不動産関係の書類・契約書類・現金・貴金属類を探し出し、ひとまとめにして相続人で共有します。これらは形見分けの対象ではなく、相続の手続きに関わる物として扱います。スマホやパソコンなどデジタル関係の手がかりも同様に確保しておきましょう。デジタル遺品の扱いはデジタル遺品の整理の記事で詳しく解説しています。この工程を飛ばして片付けを始めると、大切な書類を誤って処分するリスクがあります。",
  },
  {
    title: "親族で方針を共有する（時期・範囲・集まり方）",
    body: "次に、形見分けをいつ・誰の間で・どんな形で行うかを、主な親族の間で共有します。法要のタイミングに合わせるのか、別の機会にするのか。対象は親族だけか、故人の友人にも声をかけるのか。方針がないまま各自が品物を持ち帰り始めると、「あの品はどこへ行った」という行き違いが起こりがちです。取りまとめ役を一人決め、その人を通じて品物と希望を整理すると混乱を防げます。宗派・地域の慣習が気になる場合は、この段階で菩提寺や年長の親族に確認しておきましょう。",
  },
  {
    title: "形見の候補を集めてリストにする",
    body: "遺品整理を進めながら、形見になりそうな品（愛用品・趣味の道具・装身具・写真など）を一か所に集め、簡単なリストと写真を作ります。リスト化する理由は、遠方の親族にも公平に情報を共有できるからです。現物を前にできない親族には、写真を送って希望を聞くとよいでしょう。希望が重なった品は、故人との関係の深さや生前の意向を踏まえて話し合いで決めます。じゃんけんやくじ引きのような偶然に委ねる方法も、角を立てない知恵として使われることがあります。",
  },
  {
    title: "品物を清め、状態を整えて渡す",
    body: "渡すと決まった品は、汚れを拭き、動くものは動作を確かめ、きれいな状態にして渡すのが受け取る側への礼儀とされます。衣類や着物は手入れをしてから、時計などは可能なら簡単な手入れをしてから渡すと丁寧です。包装は、慶事の贈答のような華美な包み方はせず、簡素にするのが一般的といわれますが、これも地域・家により考え方が異なります。手渡しできない遠方の相手には、品物の由来やエピソードを書いた手紙を添えて送ると、品物の意味が伝わります。",
  },
  {
    title: "残った遺品の整理を進める（形見分けの後で）",
    body: "形見分けが一区切りついたら、残った遺品の整理を進めます。順番を「形見分けが先、処分が後」にするのは、処分を先に進めると、後から「あれを形見にしたかった」という後悔が生まれやすいからです。残った品は、売却・寄付・供養・処分などのルートに分けて手放していきます。仏壇や神棚など宗教に関わる品の扱いは仏壇・神棚の整理の記事を、遺品整理全体の段取りは遺品整理を自分で進める方法の記事を参考にしてください。無理に短期間で終わらせず、気持ちの整理と並走するペースで進めましょう。",
  },
];

const ngActions = [
  {
    title: "財産価値のある品を、相続人に相談せず独断で分ける",
    body: "貴金属・宝飾品・美術品・高級時計などを、「形見だから」と一部の人の判断で分けてしまうのは避けてください。財産的な価値のある品物は相続財産として扱われ得るもので、独断での持ち出しは、たとえ悪意がなくても相続人間の不信やトラブルの火種になります。価値がありそうな品は必ず相続人全員で共有し、扱いを相談してから決めましょう。判断が難しい場合は、査定や専門家への相談を挟むことで、感情の対立を事実の確認に置き換えられます。",
  },
  {
    title: "受け取りを強要する・辞退を責める",
    body: "「故人の物だから受け取って当然」という態度で品物を押し付けるのは、形見分けの本来の趣旨から外れます。受け取る側には収納や暮らしの事情があり、品物への思いも人それぞれです。辞退は故人への気持ちの薄さではなく、その人なりの誠実な判断として尊重しましょう。逆に、自分が受け取る側で辞退したいときは、「気持ちはとてもうれしい」と感謝を伝えたうえで丁寧に断れば失礼にはあたらない、と考えるのが一般的です。",
  },
  {
    title: "気持ちの整理がつかないうちに、急いで全部を終わらせようとする",
    body: "遺品の片付けと形見分けを、短期間で一気に終わらせようとするのは、心身への負担が大きすぎます。品物一つひとつに思い出が伴う作業は、通常の片付けの何倍も消耗します。期限のある事情（賃貸の退去など）がある場合を除き、数か月単位のゆっくりしたペースで構いません。迷う品は「保留箱」を作って先送りしてよいのです。家族の間でペースが違うことも自然なことで、早く進めたい人と時間が必要な人が互いのペースを尊重することが、後悔を残さないコツです。",
  },
  {
    title: "形見分けの前に遺品をまとめて処分してしまう",
    body: "「早く片付けなければ」と、形見分けの機会を設ける前に遺品を処分・売却してしまうと、他の親族が形見にしたかった品まで失われ、取り返しのつかない行き違いになることがあります。処分は、親族に「欲しい品はないか」を確認してからでも遅くありません。特に写真・手紙・日記などその人にしか価値の分からない品は、判断を急がないでください。業者に遺品整理を依頼する場合も、形見の仕分けを済ませてから、または立ち会いのもとで仕分けながら進める形にしましょう。",
  },
];

const judgeSigns = [
  "遠方の実家の遺品整理で、形見の仕分けに通える回数が限られている",
  "物量が多く、形見の候補を探し出す作業だけでも手に負えない",
  "賃貸の退去期限など、時間の制約の中で整理を進める必要がある",
  "重量物や大型家具の搬出が、親族だけでは難しい",
  "気持ちの負担が大きく、処分の作業を自分たちの手で進めるのがつらい",
];

const faqs = [
  {
    q: "形見分けはいつ行うのが正しいですか？",
    a: "全国一律の決まりはありません。四十九日などの法要を終えた後に行う家が多いと一般にいわれますが、宗派・地域・家の考え方によって異なり、親族が集まれる機会や遺品整理の進み具合に合わせて柔軟に決めて差し支えないと考えられています。迷う場合は菩提寺や親族の年長者に慣習を確認しましょう。気持ちの整理がつくまで時間を置くことも、尊重されるべき選択です。",
  },
  {
    q: "形見分けでもらった品物に相続税はかかりますか？",
    a: "品物の価値や状況によって扱いが異なり得るため、本記事では断定できません。一般論として、財産的な価値のある品物（貴金属・美術品など）は相続財産として扱われ得るとされており、形見分けの前に相続人全員で共有して扱いを相談することが勧められます。具体的な税務上の判断は、税理士や税務署など専門の窓口にご相談ください。日常の愛用品を偲ぶ品として受け継ぐことと、財産の分配は分けて考えるのが安全です。",
  },
  {
    q: "故人の衣類や着物は形見分けに向きますか？",
    a: "着物や上質な衣類は、形見分けの品として選ばれることの多い品目です。受け取る側のサイズや好み、手入れの負担も考慮し、意向を確かめてから渡しましょう。受け継がれなかった衣類は、リメイク（小物への仕立て直し）で形を変えて残す方法や、寄付・リサイクルという手放し方もあります。大量の衣類の仕分け方は衣類の整理・処分の記事を参考にしてください。",
  },
  {
    q: "形見分けを行わないのは薄情でしょうか？",
    a: "そんなことはありません。形見分けは義務ではなく、行うかどうか自体が家庭ごとの選択です。故人の意向、親族の距離感、品物の状況によっては、行わない・ごく身近な範囲だけで行うという形も自然な選択です。品物を分けることだけが偲び方ではなく、写真を整理して共有する、思い出を語り合う機会を持つなど、形はさまざまです。ご家族が納得できる形を選ぶことがいちばん大切です。",
  },
];

const related = [
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "手順と業者に任せる範囲の線引き" },
  { href: "/souzoku-ie-katazuke/", label: "相続した家の片付け", desc: "専門家に相談すべき論点の整理" },
  { href: "/butsudan-kamidana-seiri/", label: "仏壇・神棚の整理", desc: "宗教に関わる品の一般的な扱い" },
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理", desc: "思い出を残しながら量を減らす" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "スマホ・PC・ネット契約の扱い" },
  { href: "/review/minna-ihinseiri/", label: "みんなの遺品整理の評判", desc: "審査済みの遺品整理業者を比較" },
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
    { "@type": "ListItem", position: 2, name: "遺品整理と形見分けの進め方" },
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
    { href: "#kiso", label: "1｜形見分けの基礎知識" },
    { href: "#merit", label: "2｜進め方の3つの考え方" },
    { href: "#houshin", label: "3｜遺品整理全体の中での位置づけ" },
    { href: "#steps", label: "4｜形見分けの進め方5ステップ" },
    { href: "#ng", label: "5｜避けたいNG行動4つ" },
    { href: "#gyousha", label: "6｜業者の力を借りたほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "遺品整理と形見分けの進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          遺品整理と形見分けの進め方｜時期・順番・渡し方の考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          大切な人を見送った後、遺品の整理を進める中で向き合うことになるのが「形見分け」です。誰に、何を、いつ、どんなふうに渡せばよいのか——初めて経験する人がほとんどで、正解が分からず戸惑うのは自然なことです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、形見分けの一般的な位置づけと時期の目安、相続に関わる品物と形見の区別、誰に何を渡すかの決め方、受け取る側への配慮、遺品整理全体の中での順番を解説します。形見分けの慣習は宗派・地域・家の考え方によって異なり、行わない選択も含めてどの形にも優劣はない、という前提でお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>形見分けに全国一律の決まりはない。宗派・地域・家の慣習を尊重し、迷えば菩提寺や年長者に確認</li>
          <li>時期は法要後に行う家が多いといわれるが、気持ちと事情に合わせて柔軟に決めてよい</li>
          <li>貴金属など財産価値のある品は形見と分けて相続人全員で相談。独断で分けない</li>
          <li>順番は「重要書類の確保→方針共有→形見分け→残りの整理」。処分を先行させない</li>
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

      <H2 id="kiso" num="1">形見分けの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、形見分けとは何か、いつ行うものとされているかという基本を押さえましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">進め方の3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        形見分けを穏やかに進めるために、軸になる3つの考え方を紹介します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">遺品整理全体の中での位置づけ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遺品整理の全体は、「重要書類・貴重品の確保→形見分け→残った品の整理・処分」という順で進めるのが、後悔を残さない基本の流れです。形見分けを整理の後半に置くと、その前の処分の段階で形見になり得た品が失われるおそれがあるため、「残す物を決めてから、手放す物を手放す」という順番が大切です。この順番は、遺品整理を業者に依頼する場合も同じで、形見の仕分けを済ませてから、または立ち会いのもとで進める形が安心です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遺品整理そのものの手順（仕分けの基準・処分ルート・供養の考え方）は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める方法</Link>で、実家を相続した場合の論点は<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付け</Link>で詳しく解説しています。
      </p>

      <H2 id="steps" num="4">形見分けの進め方5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の進め方です。確保→共有→リスト→渡す→残りの整理、という流れで進めます。
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

      <H2 id="ng" num="5">避けたいNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者の力を借りたほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        形見分けそのものは家族の手で行うものですが、その前後の遺品整理は、状況によってプロの力を借りたほうが心身の負担を減らせます。
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
        遺品整理業者に依頼する場合は、形見・貴重品の捜索に対応してくれるか、仕分けに立ち会えるかを確認しましょう。<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>のような比較サービスでは、審査を通過した遺品整理業者を地域から探し、複数社の見積もりを比較できます。業者選びの基本は<Link href="/service/ihinseiri/" className="text-primary underline underline-offset-2">遺品整理業者の選び方</Link>も参考にしてください。
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
        本記事は一般的な慣習・知識の紹介を目的としたものです。形見分けの時期・方法は宗派・地域・ご家庭により異なり、本記事の内容が唯一の正解ではありません。相続・税務に関わる判断は、税理士等の専門家や公的な窓口にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
