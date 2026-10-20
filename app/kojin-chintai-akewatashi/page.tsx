import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kojin-chintai-akewatashi/";
const TITLE = "亡くなった家族の賃貸住宅の解約・明け渡しと片付け｜管理会社への連絡から退去日までの段取り";
const DESC =
  "一人暮らしの親や家族が賃貸住宅で亡くなったときに、遺族が行う解約・明け渡しと片付けの進め方として、管理会社・貸主への最初の連絡、契約書で確認する項目、退去日の調整、家財の仕分けと搬出の段取り、国土交通省・法務省の「残置物の処理等に関するモデル契約条項」の仕組み、相続放棄を考えている場合の注意点を解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "借りていた本人が亡くなった後も、契約の解除の手続きが必要になる",
    body: "民法896条は、相続人は相続開始の時から被相続人の財産に属した一切の権利義務を承継すると定めています。国土交通省は、単身者が死亡した際の賃貸借契約の解除や残置物の処理への不安から、貸主が高齢者の入居を断ることがあると説明しており、同省と法務省のモデル契約条項も、賃借人の死亡後に契約の解除の事務を行うことを前提にしています。借りていた本人が亡くなっただけで手続きが済むわけではないということです。そのため、遺族の側から管理会社や貸主に連絡し、解約の手続きと部屋の明け渡しの時期を話し合う必要があります。賃借権や敷金の扱いは個別の判断になるため、当サイトでは断定しません。",
  },
  {
    title: "解約までの間は、家賃などの負担が続くことが多い",
    body: "契約が続いている間は、家賃や共益費などの支払いが発生するのが一般的です。契約書には、解約の申し入れから契約が終わるまでの期間（解約予告期間）が定められていることが多く、片付けが遅れるほど負担が長引くことがあります。一方で、相続放棄を考えている場合は、家財の運び出しや解約の手続きが相続の判断に影響するおそれがあります。急ぐべきことと、判断を待つべきことを分けて考えることが、遺族側の段取りの出発点です。",
  },
  {
    title: "単身の高齢者の死亡に備えた「モデル契約条項」という仕組みがある",
    body: "国土交通省と法務省は、単身の高齢者が死亡した際に、契約関係と残置物を円滑に処理できるようにするため、「残置物の処理等に関するモデル契約条項」を策定しています。賃借人が生前に受任者を決め、賃貸借契約の解除の事務と残置物の処理の事務を委任しておく、死後事務委任の仕組みです。国土交通省は、使用は法令で義務づけられているものではないとしつつ、利用を勧めています。故人がこの契約を結んでいた場合は、受任者が手続きを担うことになるため、まず契約の有無を確認します。",
  },
];

const merits = [
  {
    title: "契約書と重要事項説明書で、解約と明け渡しの条件を確認する",
    body: "故人の書類の中から、賃貸借契約書と重要事項説明書を探します。確認したいのは、解約予告期間、解約の申し入れ方法、明け渡しの際の立ち会いの有無、原状回復と敷金の取り決め、連帯保証人や家賃保証会社の有無です。家賃の引き落とし口座や、保証会社の名称も分かると、その後の連絡がスムーズになります。書類が見つからない場合は、管理会社に契約内容の確認を依頼してください。契約書の内容の解釈に迷う点があれば、専門家に相談します。",
  },
  {
    title: "残置物の処理を委任する契約や、受任者がいないかを確認する",
    body: "故人が残置物の処理等に関するモデル契約条項にもとづく契約を結んでいた場合は、受任者が解除の事務と残置物の処理の事務を行います。国土交通省のページでは、居住支援法人が受任者になり得ることも示されています。契約書の特約や、故人の書類、管理会社への問い合わせで、受任者の有無を確認してください。受任者がいる場合、遺族が自己判断で家財を運び出すと、受任者の事務と重なるおそれがあります。まず受任者と連絡を取り、役割を分担します。",
  },
  {
    title: "相続放棄を考えているかどうかで、動いてよい範囲が変わる",
    body: "故人に借金がある可能性があり、相続放棄を考えている場合は、家財の処分や解約の手続きが相続を承認したとみなされるおそれがあります。民法921条は、相続財産の全部または一部を処分したときは単純承認をしたものとみなすと定めています。この場合は、管理会社に事情を伝えたうえで、片付けや解約に入る前に、弁護士・司法書士などの専門家や法テラスに相談してください。判断が済むまでの家財の扱いは、相続放棄を考えているときの遺品整理の注意点の記事で解説しています。",
  },
];

const steps = [
  {
    title: "管理会社・貸主に、亡くなったことと遺族の連絡先を伝える",
    body: "最初に、管理会社または貸主へ、契約者が亡くなったことと、今後の窓口になる遺族の名前と連絡先を伝えます。この段階では、解約日や明け渡し日をすぐに決める必要はありません。相続人が誰になるか、相続放棄を考えているかによって進め方が変わるため、「家族で相談して改めて連絡する」と伝え、次に連絡する時期の目安を決めておきます。部屋の鍵の管理、郵便物の扱い、室内に入る際の立ち会いについても、このときに確認しておくと手間がかかりません。",
  },
  {
    title: "相続人の範囲と、相続放棄の可能性を家族で確認する",
    body: "誰が相続人になるのか、相続放棄を考える人がいるかを家族で確認します。相続放棄を考えている人がいる場合は、片付けや解約の手続きに入る前に専門家へ相談し、誰がどの手続きを担うかを決めます。相続人が複数いる場合は、管理会社とのやり取りを一人に任せ、決まったことを全員で共有しておくと、行き違いが起きにくくなります。故人が死後事務委任の契約を結んでいたかも、この段階で確認してください。",
  },
  {
    title: "解約日と明け渡し日を調整し、片付けの期限を決める",
    body: "方針が決まったら、管理会社と解約日・明け渡し日を調整します。解約予告期間、家賃の発生する期間、片付けに必要な日数を並べて、無理のない日程を組んでください。明け渡しの日までに、家財の運び出し、自治体の粗大ごみの収集日、電気・ガス・水道の停止や精算の手配が必要です。遠方に住んでいて通える日が限られる場合は、作業に使える日を先に決め、そこから逆算して業者への依頼も含めて検討します。",
  },
  {
    title: "貴重品と書類を確保してから、家財の仕分けと搬出を進める",
    body: "部屋の片付けでは、最初に通帳、印鑑、契約書類、保険証券、郵便物、写真などの思い出の品を探して確保します。その後で、形見として残す物、売る・譲る物、処分する物に仕分け、自治体の収集や業者への依頼で搬出します。冷蔵庫・洗濯機などの家電リサイクル法の対象品は、ほかの家財と出し方が異なります。集合住宅では、共用部の養生やエレベーターの使用について管理規約の確認が必要な場合があるため、搬出の日程も管理会社に伝えておきます。",
  },
  {
    title: "明け渡しの立ち会いで、部屋の状態と精算の内容を確認する",
    body: "家財をすべて運び出したら、管理会社や貸主との立ち会いで部屋の状態を確認し、鍵を返却します。原状回復の範囲や費用の負担、敷金の精算は、契約の内容と部屋の状態によって異なるため、立ち会いの場で説明を受け、書面で内容を確認してください。納得できない点があれば、その場で合意せず、後日改めて説明を求めることもできます。原状回復の考え方は、賃貸の原状回復と片付けの線引きの記事で解説しています。",
  },
];

const ngActions = [
  {
    title: "相続の方針を決めないまま、家財をすべて業者に処分してもらう",
    body: "管理会社から早い明け渡しを求められると、すぐに業者を呼んで部屋を空にしたくなります。しかし、相続放棄を考えている人がいる場合、家財の処分は相続の判断に影響するおそれがあり、処分した物は元に戻せません。相続の方針が決まるまでは、家財の処分を見合わせ、管理会社には事情を伝えて日程の相談をしてください。相続することに決まっている場合でも、貴重品と書類を確保する前に業者へ一括で任せるのは避けます。",
  },
  {
    title: "受任者がいるのに、遺族だけで残置物を片付けてしまう",
    body: "故人が残置物の処理等に関するモデル契約条項にもとづく契約を結んでいた場合、解除の事務と残置物の処理の事務は受任者に委任されています。そのことを知らずに遺族が家財を運び出すと、受任者の事務と重なり、何が残っていたのかが分からなくなるおそれがあります。片付けを始める前に、契約書の特約や管理会社への問い合わせで受任者の有無を確認し、いる場合は受任者と役割を分担してください。",
  },
  {
    title: "解約予告期間や家賃の発生を確認せずに、片付けの日程を組む",
    body: "契約書を確認しないまま片付けの日程を決めると、解約予告期間の分だけ家賃が発生し続ける、明け渡しの日までに作業が終わらないといった事態が起こり得ます。片付けの段取りを組む前に、解約予告期間、解約の申し入れ方法、明け渡しの条件を確認し、管理会社と日程を共有してください。片付けに想定以上の日数がかかりそうな場合は、早い段階で業者への依頼を検討すると、全体の日程を守りやすくなります。",
  },
  {
    title: "立ち会いで説明を受けないまま、精算の内容に同意する",
    body: "明け渡しの立ち会いでは、原状回復の範囲や費用の負担、敷金の精算について説明を受けます。遺族は契約の経緯や入居時の状態を知らないことが多く、示された内容をそのまま受け入れてしまいがちです。説明に納得できない点があれば、その場で同意せず、書面で内容を確認したうえで判断してください。判断に迷う場合は、自治体の消費生活センターや専門家に相談することもできます。",
  },
];

const judgeSigns = [
  "遠方に住んでいて、明け渡しの日までに通って片付ける時間が取れない",
  "家財の量が多く、家族だけでは期限までに運び出せない",
  "大型の家具や家電が多く、集合住宅の階段やエレベーターでの搬出が難しい",
  "孤独死などで、通常の清掃では対応できない汚れや臭いがある",
  "相続の方針が決まり、専門家の助言を受けたうえで片付けを進められる状態になった",
];

const faqs = [
  {
    q: "親が借りていた部屋の解約は、誰が手続きをすればよいですか？",
    a: "契約の内容や相続の状況によって異なります。一般には相続人が管理会社や貸主と話し合いますが、故人が残置物の処理等に関するモデル契約条項にもとづく契約を結んでいた場合は、受任者が解除の事務を担います。相続人が複数いる、相続放棄を考えている人がいるといった事情がある場合は、手続きに入る前に弁護士・司法書士などの専門家に相談してください。",
  },
  {
    q: "残置物の処理等に関するモデル契約条項とは何ですか？",
    a: "国土交通省と法務省が策定した契約条項のひな形で、単身の高齢者が死亡した際に、契約関係と残置物を円滑に処理できるようにすることを目的としています。賃借人が受任者に、賃貸借契約の解除の事務と残置物の処理の事務を委任する死後事務委任の仕組みです。使用は法令で義務づけられているものではありません。詳しくは国土交通省のページをご覧ください。",
  },
  {
    q: "相続放棄を考えている場合、部屋の片付けはどうすればよいですか？",
    a: "家財の運び出しや処分は、相続を承認したとみなされるおそれがあるため、片付けを始める前に専門家へ相談してください。管理会社には、相続放棄を検討していることを伝え、明け渡しの時期について話し合います。判断が済むまでの家財の扱い方は、相続放棄を考えているときの遺品整理の注意点の記事で解説しています。",
  },
  {
    q: "部屋で亡くなっていた場合も、同じ進め方でよいですか？",
    a: "発見直後は警察の対応が優先され、室内に汚れや臭いが残っている場合は、通常の片付けの前に特殊清掃が必要になることがあります。解約と明け渡しの段取りは、この記事の流れが参考になりますが、清掃の手配や管理会社との調整が加わります。発見後の流れは孤独死があった部屋の対応の記事、清掃の内容は特殊清掃とはの記事で解説しています。",
  },
];

const sources = [
  { label: "残置物の処理等に関するモデル契約条項", org: "国土交通省", url: "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000101.html" },
  { label: "民法（第896条・第921条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/129AC0000000089" },
];

const related = [
  { href: "/shibougo-tetsuzuki-ihinseiri/", label: "家族が亡くなった後の手続きと遺品整理の順番", desc: "期限のある届出と片付けを始める時期" },
  { href: "/souzoku-houki-ihinseiri/", label: "相続放棄を考えているときの遺品整理の注意点", desc: "判断が済むまでの家財の扱い" },
  { href: "/chintai-zanchibutsu/", label: "賃貸の残置物とは", desc: "借りる側・貸す側の考え方と相談先" },
  { href: "/genjou-kaifuku-katazuke-senbiki/", label: "賃貸の原状回復と片付けの線引き", desc: "退去前に借主が行うこと" },
  { href: "/kodokushi-heya-taiou/", label: "孤独死があった部屋の対応", desc: "発見後の流れと清掃・片付け" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/mansion-hanshutsu-dandori/", label: "マンションの不用品搬出の段取り", desc: "共用部の養生と管理規約の確認" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限までに片付け切る方法" },
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
    { "@type": "ListItem", position: 2, name: "亡くなった家族の賃貸住宅の解約・明け渡しと片付け" },
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
    { href: "#kiso", label: "1｜故人の賃貸住宅で遺族が向き合うこと" },
    { href: "#merit", label: "2｜片付けの前に確認する3つの事項" },
    { href: "#houshin", label: "3｜急ぐことと待つことを分ける全体方針" },
    { href: "#steps", label: "4｜解約・明け渡しまでの5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への依頼を検討すべき状況" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公的情報" },
    { href: "#related", label: "9｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "亡くなった家族の賃貸住宅の解約・明け渡しと片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          亡くなった家族の賃貸住宅の解約・明け渡しと片付け｜管理会社への連絡から退去日までの段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          一人暮らしをしていた親や家族が賃貸住宅で亡くなると、遺族は葬儀や役所の手続きと並行して、部屋の解約と明け渡し、家財の片付けに向き合うことになります。解約までの間は家賃などの負担が続くことが多く、管理会社から日程の相談を受けて、急いで片付けなければと考える方も少なくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、遺族の立場から、管理会社・貸主への最初の連絡、契約書で確認する項目、国土交通省と法務省の「残置物の処理等に関するモデル契約条項」の仕組み、相続放棄を考えている場合の注意点、退去日までの片付けと明け渡しの段取りを順に解説します。賃借権や敷金の扱いなど個別の判断は、専門家にご相談ください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>契約者が亡くなった後も契約の解除の手続きが必要になるため、遺族から管理会社・貸主に連絡して解約と明け渡しを話し合う</li>
          <li>契約書で解約予告期間・明け渡しの条件・保証人や保証会社の有無を確認し、片付けの期限を決める</li>
          <li>故人が残置物の処理を委任する契約（国土交通省・法務省のモデル契約条項）を結んでいた場合は、受任者と役割を分担する</li>
          <li>相続放棄を考えている場合は、家財の処分や解約に入る前に専門家へ相談する</li>
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

      <H2 id="kiso" num="1">故人の賃貸住宅で遺族が向き合うこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        片付けの段取りを考える前に、契約者が亡くなった後の賃貸住宅の契約がどのような状態にあるのか、遺族が何を考える必要があるのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">片付けの前に確認する3つの事項</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        部屋の片付けに手を付ける前に、次の3つを確認しておくと、管理会社とのやり取りと片付けの日程を無理なく組めます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">急ぐことと待つことを分ける全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        故人の賃貸住宅の片付けでは、家賃の負担を抑えるために急ぎたい気持ちと、相続の判断や家族の合意を待たなければならない事情がぶつかります。この記事の方針は、管理会社への連絡と契約内容の確認は早く行い、家財の処分と解約の確定は相続の方針が決まってから行うという順番を守ることです。連絡を早めに入れておけば、管理会社も事情を理解したうえで日程の相談に応じやすくなり、遺族は落ち着いて判断する時間を確保できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        賃貸住宅に残された物の一般的な考え方は<Link href="/chintai-zanchibutsu/" className="text-primary underline underline-offset-2">賃貸の残置物とは</Link>、遺品整理全体の流れは<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">解約・明け渡しまでの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        進め方は、管理会社に連絡する→相続の方針を確認する→解約日と明け渡し日を調整する→貴重品を確保して家財を搬出する→立ち会いで精算を確認する、の5ステップです。
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
        相続放棄を考えている場合は<Link href="/souzoku-houki-ihinseiri/" className="text-primary underline underline-offset-2">相続放棄を考えているときの遺品整理の注意点</Link>、原状回復の範囲は<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">賃貸の原状回復と片付けの線引き</Link>、集合住宅での搬出は<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの不用品搬出の段取り</Link>、部屋で亡くなっていた場合は<Link href="/kodokushi-heya-taiou/" className="text-primary underline underline-offset-2">孤独死があった部屋の対応</Link>を参考にしてください。
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

      <H2 id="gyousha" num="6">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相続の方針が決まり、家財を運び出せる状態になった後は、次のような状況であれば遺品整理業者や片付け業者への依頼を検討してください。相続放棄を考えている間は、処分を伴う依頼は見合わせます。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        依頼する際は、明け渡しの日程と作業範囲を業者に伝え、残す物と処分する物を事前に書面で確認してください。廃棄物の扱いに必要な許可を確認できる業者を選び、作業前の見積もりで総額を確定させることも大切です。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。遺品整理の依頼先は<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で比較できます。サービスの内容は<Link href="/service/ihinseiri/" className="text-primary underline underline-offset-2">遺品整理サービスの解説</Link>をご覧ください。
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
        本記事は一般的な知識の提供を目的としたものであり、法律上の助言ではありません。賃貸借契約の扱い、賃借権の相続、敷金の精算、原状回復の範囲、相続放棄との関係は、契約の内容と個別の事情によって判断が異なるため、管理会社・貸主にご確認のうえ、必要に応じて弁護士・司法書士などの専門家や法テラスにご相談ください。
      </p>
    </article>
  );
}
