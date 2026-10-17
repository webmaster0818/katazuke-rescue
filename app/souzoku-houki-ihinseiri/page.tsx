import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/souzoku-houki-ihinseiri/";
const TITLE = "相続放棄を考えているときの遺品整理の注意点｜判断が済むまでの家財の扱いと相談先";
const DESC =
  "故人に借金があるかもしれず相続放棄を考えているときの遺品整理について、家庭裁判所への申述の期限と申述先、民法で「処分」と「保存」がどう定められているか、判断が済むまで家財を動かさず記録しておく進め方、賃貸住宅の明け渡しを求められたときの考え方、業者への依頼を待つべき理由を、裁判所と法令の公式情報をもとに解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "相続放棄は、故人の権利も義務も一切受け継がないという選択",
    body: "裁判所は、相続放棄を、相続人が被相続人（亡くなった方）の権利や義務を一切受け継がない選択肢として説明しています。民法896条は、相続人は相続開始の時から被相続人の財産に属した一切の権利義務を承継すると定めており、預貯金や家財だけでなく、借金などの債務も相続の対象になります。故人に借金がある、保証人になっていた可能性がある、財産と債務のどちらが多いか分からないといった場合に、相続放棄が検討されます。遺品整理は、この判断と切り離して進められない作業です。",
  },
  {
    title: "申述には期限があり、期間内に判断できない場合は伸長を申し立てられる",
    body: "裁判所の案内では、相続放棄の申述は、自己のために相続の開始があったことを知ったときから3か月以内に行う必要があります。この期間内に判断できない場合は、家庭裁判所に期間の伸長を申し立てることができます。民法915条も同じ趣旨を定め、相続人は承認または放棄をする前に相続財産の調査をすることができるとしています。期限があるため、遺品整理を急ぐよりも先に、財産と債務の調べ方と相談先を決めることが大切です。",
  },
  {
    title: "相続財産を「処分」すると、相続を承認したとみなされることがある",
    body: "民法921条は、相続人が相続財産の全部または一部を処分したときは、単純承認（すべてを受け継ぐこと）をしたものとみなすと定めています。ただし、保存行為などはこの限りでないとされています。また、放棄をした後であっても、相続財産を隠したり、ひそかに消費したりした場合も単純承認とみなされるとしています。どのような行為が「処分」に当たり、どこまでが「保存行為」として認められるかは、個別の事情によって判断が分かれるため、当サイトでは断定しません。迷う行為は、実行する前に専門家に確認してください。",
  },
];

const merits = [
  {
    title: "判断が済むまでは、家財を減らすより「現状を保つ」ことを優先する",
    body: "相続放棄を考えている段階では、遺品整理の目標を「片付けること」ではなく「現状を保ち、判断に必要な情報を集めること」に置き換えます。家財を捨てる、売る、人に譲るといった行為は、相続財産の処分と受け取られるおそれがあるためです。形見分けや買取の依頼もこの段階では控え、相続するかどうかが決まってから改めて進めます。気持ちの面で何かを手元に置きたい場合も、持ち出す前に専門家へ相談しておくと、後から問題になる余地を減らせます。",
  },
  {
    title: "財産と債務を調べるための書類は、捨てずに一か所に集めておく",
    body: "相続放棄をするかどうかを判断するには、故人の財産と債務の全体像を知る必要があります。通帳、キャッシュカード、証券会社や保険会社からの郵便物、借入の契約書や返済の督促状、クレジットカードの明細、不動産の権利証や固定資産税の通知書などは、判断の材料になる書類です。これらを探すために家の中を確認することはあっても、見つけた書類を処分せず、一か所にまとめて保管しておきます。郵便物は今後も届くため、受け取った物を同じ場所に加えていく運用にすると漏れを防げます。",
  },
  {
    title: "判断と手続きは、弁護士・司法書士・法テラスなどの専門家に相談する",
    body: "相続放棄の申述は、被相続人の最後の住所地を管轄する家庭裁判所に行います。裁判所の案内では、申述には収入印紙800円（申述人1人につき）と、裁判所によって異なる郵便切手が必要で、相続放棄申述書、被相続人の住民票除票または戸籍附票、申述人の戸籍謄本などを提出します。相続人の順位によっては追加の戸籍書類も必要です。どの家財に触れてよいか、賃貸の明け渡しにどう対応するかといった判断も含めて、弁護士・司法書士などの専門家や、法テラスの相談窓口に早めに相談してください。",
  },
];

const steps = [
  {
    title: "相続放棄を考えていることを、家族や関係者で共有する",
    body: "相続人が複数いる場合は、誰が相続放棄を考えているのかを早い段階で共有します。誰か一人が善意で家財を片付けてしまうと、その人だけでなく、ほかの相続人の判断にも影響が出るおそれがあります。故人の家の鍵を誰が持っているか、管理会社や近所の方と誰が連絡を取るかも決めておきます。家族の間で「判断が済むまでは物を動かさない」という方針をそろえておくことが、後のトラブルを防ぐ第一歩になります。",
  },
  {
    title: "家の中の状態を写真で記録し、確認した内容を書き残す",
    body: "家の中の様子は、部屋ごとに全体と主な家具・家電が分かるように写真で記録しておきます。いつ、誰が家に入り、何を確認したか、持ち出した物があればその内容と理由を、メモや一覧表に書き残してください。記録があれば、後から相続人同士や債権者との間で家財の扱いについて説明が必要になったときに、事実を示す材料になります。記録の付け方は不用品リストの作り方の記事の考え方も参考になります。",
  },
  {
    title: "財産と債務に関わる書類を探し、まとめて保管する",
    body: "通帳や郵便物、契約書などの書類を探し、処分せずに一か所へ集めます。民法915条は、承認または放棄をする前に相続財産の調査をすることができると定めています。ただし、預金の引き出しや解約、家財の売却などは調査の範囲を超える行為になり得るため、手続きを進める前に専門家に確認してください。現金や貴重品が見つかった場合の扱いは、片付け中に貴重品や現金が出てきたらの記事で一般的な考え方を解説しています。",
  },
  {
    title: "生ものや水回りなど、放置すると傷みが広がる物の扱いを相談する",
    body: "冷蔵庫の中の食品、生ごみ、水漏れ、窓の破損など、放置すると住まいの傷みや悪臭、害虫の発生につながる物があります。こうした物への対応は、財産の価値を保つための行為と考えられる場合もありますが、どこまでが認められるかは個別の判断になります。実施する前に専門家へ相談し、実施した場合は内容を記録しておいてください。電気・ガス・水道などの契約についても、名義の変更や解約は判断に関わることがあるため、同様に確認してから動きます。",
  },
  {
    title: "相続放棄の判断が済んでから、遺品整理の進め方を決める",
    body: "相続するか放棄するかが決まってから、遺品整理の具体的な進め方を決めます。相続する場合は、通常の遺品整理の手順で、形見分けや処分を進められます。放棄した場合でも、民法940条により、放棄の時に相続財産を現に占有している人は、ほかの相続人や相続財産の清算人に引き渡すまで、自己の財産と同一の注意をもって保存しなければならないとされています。放棄後の家財の扱いは、引き渡し先や手順を含めて専門家の助言に沿って進めてください。",
  },
];

const ngActions = [
  {
    title: "判断が済む前に、家財をまとめて業者に処分してもらう",
    body: "相続放棄を考えているのに、遺品整理業者や不用品回収業者に家財の処分を依頼すると、相続財産を処分したと受け取られるおそれがあります。業者に頼むと短期間で家が空になるため、後から元に戻すこともできません。管理会社や近所から片付けを急かされても、放棄の判断が済むまでは処分の依頼を見合わせ、まず専門家に相談してください。先に見積もりだけを取る場合も、作業の契約や実施は判断が済んでからにしてください。",
  },
  {
    title: "価値がありそうな物を、形見分けや買取に出す",
    body: "腕時計や貴金属、ブランド品、骨とう品などを「形見として」持ち帰ったり、買取に出して現金に換えたりすると、相続財産を処分した、あるいはひそかに消費したと受け取られるおそれがあります。民法921条は、放棄をした後でも、相続財産を隠したり私に消費したりした場合は単純承認とみなすと定めています。気持ちのこもった品であっても、相続の判断が済むまでは家に置いたままにし、扱いを専門家に確認してください。",
  },
  {
    title: "故人の預金を引き出して、片付けや葬儀の費用に充てる",
    body: "故人の口座から預金を引き出して支払いに充てる行為は、相続財産に手を付けることになり、相続放棄の判断に影響するおそれがあります。どのような支払いであれば問題にならないかは個別の事情によるため、当サイトでは断定しません。引き出す前に専門家へ相談し、どうしても必要な支払いが生じたときは、何にいくら使ったかを領収書とともに記録しておいてください。",
  },
  {
    title: "3か月の期限を意識しないまま、片付けだけを先に進める",
    body: "遺品整理に追われているうちに、相続放棄の申述期限が近づいてしまうことがあります。裁判所の案内では、相続放棄の申述は、自己のために相続の開始があったことを知ったときから3か月以内に行う必要があり、期間内に判断できない場合は家庭裁判所に期間の伸長を申し立てることができます。民法921条では、期間内に限定承認または放棄をしなかったときも単純承認とみなすとしています。片付けの予定より先に、申述の期限と相談の日程を決めてください。",
  },
];

const judgeSigns = [
  "相続放棄の判断が済み、専門家から家財の扱いについて助言を受けた",
  "相続することに決まり、家財の量が多く自力では片付けきれない",
  "遠方に住んでいて、故人の家に通って作業する時間が取れない",
  "孤独死などで、通常の清掃では対応できない汚れや臭いがある",
  "賃貸の明け渡しの期日が決まり、期日までに家財を運び出す必要がある",
];

const faqs = [
  {
    q: "相続放棄を考えている場合、故人の家に入ってもよいですか？",
    a: "家に入って財産や債務に関わる書類を確認すること自体は、民法915条が定める相続財産の調査に関わる行為と考えられます。ただし、家財を持ち出す、捨てる、売るといった行為は、相続財産の処分と受け取られるおそれがあります。家に入る場合は、何を確認し、何に触れたかを記録しておき、物を動かす必要があるときは事前に弁護士・司法書士などの専門家へ相談してください。",
  },
  {
    q: "相続放棄の申述はどこに、いつまでに行えばよいですか？",
    a: "裁判所の案内では、被相続人の最後の住所地を管轄する家庭裁判所に、自己のために相続の開始があったことを知ったときから3か月以内に申述します。期間内に判断できない場合は、家庭裁判所に期間の伸長を申し立てることができます。費用は収入印紙800円（申述人1人につき）と、裁判所によって異なる郵便切手が必要です。必要書類は相続人の順位によって変わるため、申立先の家庭裁判所でご確認ください。",
  },
  {
    q: "賃貸住宅の管理会社から、早く部屋を明け渡すよう求められています。",
    a: "家財の運び出しは相続財産の処分に関わるおそれがあるため、すぐに片付けを始める前に専門家へ相談してください。管理会社には、相続放棄を検討中であることと、判断や相談の予定を伝え、明け渡しの時期について話し合う方法もあります。賃貸住宅の解約と明け渡しの一般的な進め方は、亡くなった家族の賃貸住宅の解約・明け渡しの記事で解説しています。",
  },
  {
    q: "相続放棄をした後は、家財の管理をしなくてよいのですか？",
    a: "民法940条は、相続の放棄をした者が、放棄の時に相続財産を現に占有しているときは、相続人または相続財産の清算人に引き渡すまでの間、自己の財産におけるのと同一の注意をもってその財産を保存しなければならないと定めています。故人の家に住んでいた、家財を預かっているなどの事情がある場合は、放棄後の扱いを専門家に確認してください。",
  },
];

const sources = [
  { label: "相続の放棄の申述", org: "裁判所", url: "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html" },
  { label: "民法（第896条・第915条・第921条・第940条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/129AC0000000089" },
];

const related = [
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/souzoku-ie-katazuke/", label: "相続した家の片付け", desc: "始める時期と専門家に相談すべき論点" },
  { href: "/kojin-chintai-akewatashi/", label: "亡くなった家族の賃貸住宅の解約・明け渡し", desc: "管理会社への連絡と退去日の調整" },
  { href: "/kichouhin-genkin-hakken/", label: "片付け中に貴重品や現金が出てきたら", desc: "保管・記録・相談先の考え方" },
  { href: "/fuyohin-list-tsukurikata/", label: "不用品リストの作り方", desc: "書き出す項目と記録の付け方" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理方法", desc: "故人のスマホ・PC・ネット契約の扱い" },
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
    { "@type": "ListItem", position: 2, name: "相続放棄を考えているときの遺品整理の注意点" },
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
    { href: "#kiso", label: "1｜相続放棄と遺品整理の関係" },
    { href: "#merit", label: "2｜判断が済むまでの3つの基本方針" },
    { href: "#houshin", label: "3｜片付けより相談を先にする理由" },
    { href: "#steps", label: "4｜判断が済むまでの5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への依頼を検討する時期" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公的情報" },
    { href: "#related", label: "9｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "相続放棄を考えているときの遺品整理の注意点" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          相続放棄を考えているときの遺品整理の注意点｜判断が済むまでの家財の扱いと相談先
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          亡くなった家族に借金があるかもしれない、財産と債務のどちらが多いか分からないといった事情から、相続放棄を考えることがあります。一方で、故人の住まいには家財が残り、賃貸であれば管理会社から明け渡しを求められることもあり、早く片付けなければと焦りが生まれやすい場面です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、裁判所とe-Gov法令検索で確認できる公式情報をもとに、相続放棄の申述の期限と申述先、民法で定められている「処分」と「保存」の考え方、判断が済むまで家財を動かさずに記録しておく進め方、業者への依頼を待つべき理由を解説します。個別の判断は、必ず弁護士・司法書士などの専門家や法テラスにご相談ください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>相続放棄の申述は、相続の開始を知ったときから3か月以内に、被相続人の最後の住所地の家庭裁判所へ行う（期間の伸長の申立ても可能）</li>
          <li>民法921条は、相続財産の処分を単純承認とみなすと定めており、判断が済むまでは家財を捨てる・売る・譲ることを控える</li>
          <li>家の中は写真と記録で残し、財産と債務に関わる書類は捨てずに一か所に集める</li>
          <li>どの行為が「処分」や「保存」に当たるかは個別の判断となるため、動く前に専門家へ相談する</li>
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

      <H2 id="kiso" num="1">相続放棄と遺品整理の関係</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        遺品の扱いを考える前に、相続放棄がどのような選択で、遺品整理とどう関わるのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">判断が済むまでの3つの基本方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        相続放棄を考えている間の遺品整理は、通常の片付けとは目的が異なります。判断が済むまでは、次の3つの方針で進めてください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">片付けより相談を先にする理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        故人の家を前にすると、まず片付けなければという気持ちが先に立ちます。しかし、相続放棄を考えている場合、片付けの作業そのものが相続の判断に影響するおそれがあり、一度処分した家財は元に戻せません。この記事の方針は、片付けの手を止め、期限と相談先を先に決めることです。専門家に相談したうえで、触れてよい物、記録しておくべき物、判断が済むまで待つ物を分けておけば、相続放棄の判断がどちらになっても、その後の遺品整理を落ち着いて進められます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相続することになった場合の遺品整理の流れは<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>、相続した家の片付けで確認すべき論点は<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付け</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">判断が済むまでの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断が済むまでの進め方は、方針を共有する→現状を記録する→書類を集める→傷みが広がる物の扱いを相談する→判断の後に遺品整理を決める、の5ステップです。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4 mt-6">
        記録の付け方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>、現金や貴重品が見つかった場合は<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>、故人のスマートフォンやネット上の契約は<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理方法</Link>を参考にしてください。賃貸住宅の場合は<Link href="/kojin-chintai-akewatashi/" className="text-primary underline underline-offset-2">亡くなった家族の賃貸住宅の解約・明け渡し</Link>も併せてご覧ください。
      </p>

      <H2 id="ng" num="5">避けるべき4つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者への依頼を検討する時期</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相続放棄を考えている間は、遺品整理業者や不用品回収業者に家財の処分を依頼しないでください。業者への依頼を検討するのは、相続放棄の判断が済み、家財の扱いについて専門家の助言を受けた後です。そのうえで、次のような状況であれば業者への依頼が選択肢になります。
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
        依頼する際は、相続の状況を業者に伝え、作業範囲と処分してよい物を書面で確認してください。廃棄物の扱いに必要な許可を確認できる業者を選び、作業前の見積もりで総額を確定させることも大切です。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。遺品整理の依頼先は<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で比較できます。サービスの内容は<Link href="/service/ihinseiri/" className="text-primary underline underline-offset-2">遺品整理サービスの解説</Link>をご覧ください。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
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

      <H2 id="shutten" num="8">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・2026年10月17日確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="9">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものであり、法律上の助言ではありません。相続放棄の可否、どの行為が相続財産の処分や保存行為に当たるか、賃貸住宅の明け渡しへの対応などは個別の事情によって判断が異なるため、必ず弁護士・司法書士などの専門家や法テラスにご相談ください。申述の手続き・費用・必要書類は、申立先の家庭裁判所の案内をご確認ください。
      </p>
    </article>
  );
}
