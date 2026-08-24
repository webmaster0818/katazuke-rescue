import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/gyousha-kyoka-kakunin/";
const TITLE = "片付け業者の許可・資格の確認方法｜何を見て、どこで確かめるか";
const DESC =
  "片付けや不用品回収を頼むとき、その事業者が必要な許可や届出を備えているかは、依頼する側にとって確認しておきたい点です。どのような枠組みの許可があるのか、公式サイト・見積書・契約書面のどこを見ればよいのか、自治体の公表情報でどう照らし合わせるのか、民間資格と公的な許可は何が違うのか、そして確認できないときにどう判断するかを整理します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "許可の確認は、依頼した側にとっても他人事ではない",
    body: "片付けを頼むと、家の中にあった物は事業者の手に渡り、そこから先の処分は自分の目の届かないところで進みます。もし適切に処理されなかった場合、依頼した経緯について事情を聞かれたり、説明を求められたりする立場になることがあります。だからこそ、運び出した後にどう処分されるのか、その体制が制度に沿ったものかを、依頼する前に確認しておく意味があります。許可の確認は、事業者を疑うための作業ではなく、任せる範囲を自分で納得しておくための作業だと考えると、聞きにくさが減ります。",
  },
  {
    title: "「公的な許可」と「民間の資格」は、性質がまったく違う",
    body: "事業者の紹介ページには、さまざまな名称が並ぶことがあります。その中には、行政が事業者に与える許可や届出に基づくものと、民間の団体が独自に設けている認定や資格が混ざっています。前者は事業を行うために制度上求められるもの、後者は知識や技能を示すために任意で取得するものという違いがあります。どちらにも意味はありますが、役割は同じではありません。表示されている名称を見たときは、それが行政による許可なのか、民間の認定なのかを分けて受け取ることが、確認の第一歩になります。",
  },
  {
    title: "自社で許可を持つ形と、許可を持つ事業者に委託する形がある",
    body: "片付けを行う事業者が、必ず自社ですべての工程を担っているとは限りません。作業や仕分けは自社で行い、廃棄物の収集運搬は許可を持つ事業者に委託するという体制を取っている場合もあります。この形が問題というわけではなく、どのような体制で処分まで進むのかを説明してもらえるかどうかが確認の要点です。「誰がどの工程を担い、最終的にどこへ運ばれるのか」を尋ね、その説明が具体的で、書面や公式の案内と食い違わないかを見てください。",
  },
];

const merits = [
  {
    title: "枠組み1：家庭から出る廃棄物の収集運搬に関する自治体の許可",
    body: "一般家庭から出る不用品のうち廃棄物に当たるものを収集して運ぶ事業については、自治体の許可が必要とされる枠組みがあります。どの行為が許可の対象になるか、区分がどう分かれているか、どの自治体の許可が求められるかといった細かい点は、地域や状況によって扱いが異なります。ここで依頼者ができるのは、事業者に対して「家庭から出る不用品の収集運搬をどのような体制で行っているのか」を尋ね、その説明を確認することです。制度の要否や区分の判断そのものは、所管する自治体の窓口や公式の案内で確認してください。",
  },
  {
    title: "枠組み2：買取を伴う場合の、古物の取り扱いに関する許可",
    body: "処分と同時に、まだ使える家具や家電を買い取ってもらう形の依頼があります。中古品の売買を業として行う場合には、古物の取り扱いに関する許可の枠組みが関わってきます。買取を前面に出している事業者であれば、公式サイトの会社概要などにその旨の記載があることが一般的です。買取と処分を組み合わせて依頼するときは、処分側の体制とあわせて、買取側についても確認しておくと安心です。制度の適用範囲や必要な手続きについては、所管する窓口や公式の案内でご確認ください。",
  },
  {
    title: "枠組み3：許可を持つ事業者に委託する体制かどうか",
    body: "自社では収集運搬の許可を持たず、許可を持つ事業者と連携して処分まで行うという体制も見られます。この場合に確認したいのは、連携先が存在すること自体ではなく、その体制を具体的に説明できるかどうかです。運び出した物がどこへ渡り、最終的にどう処理されるのか。この流れを口頭でも書面でも一貫して説明できる事業者であれば、任せる範囲を判断しやすくなります。逆に、説明を求めても内容が変わる、または答えが得られない場合は、いったん保留にする判断があってよい場面です。",
  },
];

const steps = [
  {
    title: "公式サイトの会社概要を開き、事業者情報と許可の記載を探す",
    body: "最初に見るのは、事業者の公式サイトにある会社概要や運営者情報のページです。事業者名、所在地、連絡先、事業内容が記載されているかを確認します。許可や届出については、このページ、または「対応業務」「処分の流れ」といったページに記載されていることがあります。記載が見つからない場合でも、それだけで判断は付きません。トップページの下部、よくある質問、料金案内など、複数の場所を見たうえで、それでも見当たらなければ問い合わせの際に尋ねる項目としてメモしておいてください。",
  },
  {
    title: "見積書と契約書面に、事業者情報が記載されているかを確認する",
    body: "見積もりを受け取ったら、そこに事業者名、所在地、連絡先が記載されているかを見ます。事業者によっては、許可や届出に関する記載を書面に入れている場合もあります。書面に何も書かれていない場合は、「この作業で出た物の収集運搬は、どのような体制で行っていますか」と質問し、回答を書面に反映してもらえるか確認してください。書面で見積もりを出すこと、質問への回答を書面に残すことに応じるかどうかは、それ自体が判断の材料になります。見積書の読み方は関連記事で扱っています。",
  },
  {
    title: "問い合わせの場で、処分までの流れを具体的に説明してもらう",
    body: "電話や訪問の場では、「運び出した物はこの後どうなりますか」と尋ねてみてください。自社で運ぶのか、連携先に引き渡すのか、選別してから処理するのか。答えが具体的で、途中で内容が変わらないかを聞きます。同時に、買取を含む依頼であれば、買取分の扱いについても確認します。この質問は事業者を試すためのものではなく、依頼する側が任せる範囲を理解するためのものです。丁寧に説明してくれる事業者であれば、その後のやり取りも進めやすくなります。",
  },
  {
    title: "自治体が公表している情報と照らし合わせる",
    body: "多くの自治体では、家庭から出る廃棄物の収集運搬に関わる事業者について、公式サイトで情報を公表していたり、窓口で案内していたりします。事業者から聞いた名称や体制を、この公表情報や窓口での案内と照らし合わせると、自分だけの判断で終わらせずに済みます。公表の有無、掲載されている項目、確認の方法は自治体によって異なりますので、お住まいの自治体の案内をご確認ください。判断に迷う場合は、事業者から聞いた内容をメモしたうえで、自治体の窓口に相談するのが確実です。",
  },
  {
    title: "確認できないときは、その事業者への依頼を見合わせる",
    body: "ここまでの確認をしても体制が分からない、質問に具体的な答えが返ってこない、書面に事業者情報を記載してもらえないという場合は、依頼を見合わせる判断があってよい場面です。片付けを頼める事業者は他にもありますので、確認できるところを選び直せば済みます。急かされて決めてしまうと、後から確認する手段がなくなります。契約や請求をめぐって不安を感じたときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。判断に迷う段階でも相談して構いません。",
  },
];

const ngActions = [
  {
    title: "「許可を持っています」の一言だけで、確認を終えてしまう",
    body: "問い合わせの場で許可があると言われると、それで安心してしまいがちです。しかし、どの工程を自社で行い、どこから先を委託しているのか、運び出した物が最終的にどう処理されるのかは、その一言からは分かりません。確認したいのは有無の表明ではなく、処分までの流れです。「運び出した後はどうなりますか」「収集運搬はどちらが担当しますか」と具体的に尋ね、その内容が公式サイトや書面の記載と食い違わないかを見てください。丁寧に答えてもらえるかどうかも、あわせて判断材料になります。",
  },
  {
    title: "民間の認定や資格の名称を、公的な許可と同じものとして受け取る",
    body: "紹介ページに並ぶ名称の中には、民間の団体が独自に設けている認定や資格が含まれていることがあります。これらは知識や技能を示すものとして意味を持ちますが、行政が事業者に与える許可や届出とは性質が異なります。名称が並んでいることをもって、必要な許可が備わっていると受け取ってしまうと、確認すべき点が抜け落ちます。表示を見たときは、それが行政によるものか民間によるものかを分け、行政に関わる部分については所管する自治体の窓口や公式の案内で確認してください。",
  },
  {
    title: "事業者名や所在地が書かれていない書面のまま、契約する",
    body: "見積もりや契約の書面に事業者名、所在地、連絡先が記載されていないと、後から内容を確認したいときに連絡を取る手段が限られます。処分の行き先について確認が必要になった場合も同じです。書面を受け取ったら、まずこの三点が記載されているかを見てください。記載がないまま作業日を決めるのは避け、記載を求めても応じてもらえない場合は依頼を見合わせる判断をしてください。訪問を受けて契約する場面で不安を感じたときは、その場で決めず、消費者ホットライン188に相談することができます。",
  },
  {
    title: "処分の行き先を聞かないまま、すべてを任せてしまう",
    body: "運び出してもらえれば終わり、と考えてしまうと、その後の流れを確認する機会がなくなります。適切に処理されなかった場合、依頼した側が事情を説明する立場になることがあります。依頼の前に、収集運搬をどの事業者が担うのか、最終的にどこへ運ばれるのかを尋ね、説明を受けておいてください。無料をうたう回収については確認したい点が別にありますので、関連記事もあわせてご覧ください。不法投棄をめぐる注意点についても、ガイドで整理しています。",
  },
];

const judgeSigns = [
  "公式サイトに会社概要があり、事業者名・所在地・連絡先を確認できる",
  "書面で見積もりを出し、事業者情報が記載されている",
  "運び出した後の処分の流れを、具体的に説明できる",
  "収集運搬を自社で担うのか委託するのか、体制を説明できる",
  "買取を伴う場合、古物の取り扱いについても説明できる",
];

const faqs = [
  {
    q: "片付け業者に依頼するとき、どんな許可を確認すればよいですか？",
    a: "一般家庭から出る不用品のうち廃棄物に当たるものを収集して運ぶ事業については、自治体の許可が必要とされる枠組みがあります。買取を伴う場合は、古物の取り扱いに関する許可の枠組みも関わります。ただし、どの行為が許可の対象になるか、区分がどう分かれるかは地域や状況によって扱いが異なりますので、要否や範囲の判断は所管する自治体の窓口や公式の案内でご確認ください。依頼者としては、処分までの体制を説明してもらうことが実際的な確認になります。",
  },
  {
    q: "許可を持っているかどうかは、どこで確かめられますか？",
    a: "まずは事業者の公式サイトにある会社概要や運営者情報、見積書や契約書面の記載を確認します。そのうえで、自治体が公表している情報や窓口での案内と照らし合わせる方法があります。公表の有無や確認の方法は自治体によって異なりますので、お住まいの自治体の案内をご確認ください。自分だけで判断が付かない場合は、事業者から聞いた内容をメモして自治体の窓口に相談すると、確認の進め方を案内してもらえます。",
  },
  {
    q: "民間の資格と、行政の許可はどう違いますか？",
    a: "行政の許可や届出は、事業を行うにあたって制度上求められる枠組みです。一方、民間の団体が設ける認定や資格は、知識や技能を示すために任意で取得するもので、性質が異なります。どちらにも意味はありますが、役割が同じではないため、表示されている名称を見たときは行政によるものか民間によるものかを分けて受け取ってください。行政に関わる部分の要否や範囲については、所管する自治体の窓口や公式の案内で確認するのが確実です。",
  },
  {
    q: "確認しても体制がはっきりしないときは、どうすればよいですか？",
    a: "質問に具体的な答えが返ってこない、書面に事業者情報を記載してもらえない、説明の内容が場面によって変わるという場合は、依頼を見合わせる判断があってよい場面です。片付けを頼める事業者は他にもありますので、確認できるところを選び直せば済みます。急かされたときこそ、いったん持ち帰って考えてください。契約や請求をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
];

const related = [
  { href: "/mitsumorisho-mikata/", label: "見積もり書の見方", desc: "総額・作業範囲・追加費用の確認" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収の注意点", desc: "確認すべきポイントと相談先" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体と業者の使い分け", desc: "どちらに頼むかの判断基準" },
  { href: "/guide/illegal-dumping/", label: "不法投棄のリスク", desc: "任せる前に知っておきたいこと" },
  { href: "/sagyou-toujitsu-tachiai/", label: "作業当日の立ち会いの流れ", desc: "開始前の確認から引き渡しまで" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
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
    { "@type": "ListItem", position: 2, name: "片付け業者の許可・資格の確認方法" },
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
    { href: "#kiso", label: "1｜許可を確認する前に押さえること" },
    { href: "#merit", label: "2｜関わってくる3つの枠組み" },
    { href: "#houshin", label: "3｜どこを見れば確認できるか" },
    { href: "#steps", label: "4｜許可・資格を確認する5ステップ" },
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

      <Breadcrumb items={[{ label: "片付け業者の許可・資格の確認方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          片付け業者の許可・資格の確認方法｜何を見て、どこで確かめるか
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けや不用品回収を頼むと決めたとき、「この業者に任せて大丈夫だろうか」という不安が残ることがあります。その不安の中身をほどいていくと、多くは「必要な許可や届出を備えているのか」「運び出した物が適切に処理されるのか」という点に行き着きます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、片付けの依頼に関わってくる許可の枠組みを名称と役割のレベルで整理したうえで、公式サイト・見積書・契約書面のどこを見ればよいか、自治体の公表情報とどう照らし合わせるか、民間の認定と行政の許可は何が違うか、そして確認できないときにどう判断するかを順に説明します。なお、許可の要否や区分、手続きの内容は地域や状況によって扱いが異なりますので、制度に関する判断は所管する自治体の窓口や公式の案内でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>確認したいのは「許可があるか」の一言ではなく、処分までの体制を説明できるかどうか</li>
          <li>見る場所は、公式サイトの会社概要、見積書と契約書面、そして自治体の公表情報や窓口の案内</li>
          <li>民間の認定と行政の許可は性質が違う。名称を見たら分けて受け取る</li>
          <li>確認できない、答えが得られないときは、依頼を見合わせて別の事業者を探す</li>
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

      <H2 id="kiso" num="1">許可を確認する前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        確認の手順に入る前に、なぜ確認するのか、何と何を分けて見るのかを押さえておくと、聞くべきことがはっきりします。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">関わってくる3つの枠組み</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        収集運搬に関する自治体の許可、買取を伴う場合の古物の取り扱い、そして委託による体制。名称と役割を押さえておくと、質問の言葉が出てきます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">どこを見れば確認できるか</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        確認する場所は、大きく三つに分かれます。一つ目は事業者の公式サイトです。会社概要や運営者情報のページに、事業者名、所在地、連絡先、事業内容が記載されているかを見ます。許可や届出については、同じページ、あるいは「対応業務」「処分の流れ」「よくある質問」といったページに書かれていることがあります。二つ目は、見積書や契約書面です。書面に事業者情報が記載されているか、処分に関する記述があるかを確認します。三つ目は、自治体が公表している情報や窓口での案内です。公式サイトや書面で見た内容を、ここで照らし合わせます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この三つを見ても分からない部分は、そのまま質問のリストになります。「収集運搬はどちらが担当しますか」「運び出した物は最終的にどこへ運ばれますか」「買取分はどのような扱いになりますか」といった形で、具体的に尋ねてください。質問に対する答えが具体的で、公式サイトや書面の記載と食い違わないなら、任せる範囲を判断しやすくなります。逆に、聞くたびに説明が変わる、あるいは答えが返ってこないという場合は、依頼を保留にして別の事業者を探す判断があってよい場面です。確認できないことを、こちらが無理に補って解釈する必要はありません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、制度の要否や区分、番号の読み方といった細かい点については、この記事では断定しません。地域や状況によって扱いが異なるためで、判断が必要な場合は所管する自治体の窓口や公式の案内で確認してください。自治体の収集と事業者への依頼をどう組み合わせるかは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>、手放し方全体の選択肢は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で整理しています。書面の読み方については<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>もあわせてご覧ください。
      </p>

      <H2 id="steps" num="4">許可・資格を確認する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        公式サイトを見る→書面を確認する→処分までの流れを聞く→自治体の情報と照らす→確認できなければ見合わせる。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">制度の要否や区分は、所管する窓口で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          廃棄物の収集運搬や古物の取り扱いに関する許可・届出について、どの行為が対象になるか、区分がどう分かれるか、どの範囲まで求められるかは、地域や状況によって扱いが異なります。本記事は名称と枠組みの一般的な整理にとどめており、個別の事案について要否を判断するものではありません。制度に関する判断が必要な場合は、所管する自治体の窓口や公式の案内でご確認ください。また、本記事は特定の事業者について許可の有無を示すものではありません。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        許可の確認と並行して、依頼する内容そのものを整理しておくと、質問もしやすくなります。何をどこまで運び出してもらうのか、買取を含めるのか、清掃まで頼むのか。この範囲が固まっていると、処分の流れについての説明も具体的になります。書面での確認の進め方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、無料をうたう回収について確認したい点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>で扱っています。当日の流れを事前に知っておきたい場合は<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>が参考になります。
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
        依頼先を選ぶときは、次のような点を確認できるかどうかが目安になります。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者</Link>などエリア別の比較記事から探せます。
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
        これらを確認したうえで、料金は物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、同じ条件で複数社に見積もりを依頼して比べてください。粗大ごみの受付が混み合っていて自治体の収集が期限に合わないときの考え方は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの予約が取れないときの対処</Link>で整理しています。依頼先の候補としては<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">お部屋片付け日本一</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出について、要否や区分、手続きの内容は地域や状況によって扱いが異なりますので、所管する自治体の窓口や公式の案内でご確認ください。本記事は特定の事業者について許可の有無を示すものではなく、また個別の事案における制度の適用を判断するものでもありません。片付け・不用品回収の料金および契約の条件は、物量・間取り・建物の構造・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。制度の適用に関する判断が必要な場合は、専門の相談窓口や専門家にご相談ください。
      </p>
    </article>
  );
}
