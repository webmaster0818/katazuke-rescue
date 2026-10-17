import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/lithium-battery-shobun/";
const TITLE = "モバイルバッテリー・リチウムイオン電池の処分方法｜発火を防ぐ出し方と回収先の確認";
const DESC =
  "片付けで出てきたモバイルバッテリーや充電式電池、電池内蔵の小型家電の処分方法として、リチウムイオン電池が発火しやすい理由、自治体のルールとJBRCの協力店回収の使い分け、回収対象・対象外の見分け方、端子の絶縁、膨らんだ・破損した電池の扱い、業者に依頼するときの確認事項を、環境省とJBRCの公式情報をもとに解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "リチウムイオン電池は衝撃と高温に弱く、ごみに混ざると火災の原因になる",
    body: "環境省は、リチウムイオン電池は小型・軽量でエネルギー効率が高い一方、強い衝撃や高温環境に弱く、それが原因で発火に至ることがあり、廃棄物処理施設などで火災が発生していると説明しています。ごみ収集車の中では、ほかのごみと一緒に圧縮されたり、処理施設で破砕されたりする工程があります。そこへ電池が混ざると、押しつぶされた電池から火が出て、周りの紙やプラスチックに燃え移るおそれがあります。片付けで出てきた電池を「小さいから」と普通のごみ袋に入れないことが、出し方を考える前提です。",
  },
  {
    title: "片付けの現場では、電池が製品の中に入ったまま見つかることが多い",
    body: "電池はむき出しの状態で出てくるとは限りません。引き出しの奥のモバイルバッテリー、使わなくなったスマートフォンやタブレット、ハンディクリーナー、電動歯ブラシ、シェーバー、携帯ゲーム機、ワイヤレスイヤホン、電動工具など、充電して使う製品の多くに充電式電池が入っています。JBRCは、こうした機器には小型充電式電池が使われている旨の表示が義務づけられていると案内しています。片付けでは、電池単体だけでなく、充電して使っていた製品をまとめて別に分けておくと、出し方を確認しやすくなります。",
  },
  {
    title: "出し方は「自治体のルール」と「協力店の回収」の二つを確認する",
    body: "環境省は、家庭から出るリチウムイオン電池や電池を使った製品は、お住まいの市区町村のごみ捨てのルールに従って捨てるよう案内しています。市区町村によって、有害ごみ・危険ごみとして集積所で収集する、公共施設の回収ボックスで受け付ける、収集の対象外として販売店での回収を案内する、など扱いが異なります。もう一つの窓口が、小型充電式電池のリサイクルを行う一般社団法人JBRCの協力店・協力自治体です。どちらを使うかは、電池の種類と状態、お住まいの地域の案内によって決まります。",
  },
];

const merits = [
  {
    title: "電池の種類が分かるかどうかを最初に確認する",
    body: "JBRCが回収しているのは、ニカド電池、ニッケル水素電池、リチウムイオン電池の三種類の小型充電式電池です。電池に付いている三つの矢印のリサイクルマークと「Ni-Cd」「Ni-MH」「Li-ion」の表示が見分ける目印になります。一方、乾電池（単1〜単4形など）、リチウム一次電池、ボタン電池・コイン電池はJBRCの回収対象外です。これらは自治体の区分や、ボタン電池であれば販売店の回収など、別のルートを確認する必要があります。種類が分からない電池は、無理に分類せず、自治体の窓口に問い合わせてください。",
  },
  {
    title: "協力店で出せるのは、条件をすべて満たす電池に限られる",
    body: "JBRCは、回収対象かどうかはリサイクルマークの有無ではなく、JBRC会員企業の製品であること、電池の種類が明確であること、破損・水濡れ・膨張などの異常がなく外装のないラミネートタイプの電池ではないこと、という条件をすべて満たすかで判断するよう案内しています。会員企業以外の製品やメーカーが分からない製品は対象外です。通販で購入した安価なモバイルバッテリーなどは、この条件に当てはまらないことがあるため、協力店に持ち込む前に製品の表示や会員企業リストを確認してください。",
  },
  {
    title: "モバイルバッテリーは分解せず、本体のまま扱う",
    body: "JBRCは、携帯電話・スマートフォンへの充電を主な機能とするモバイルバッテリーは本体のまま回収するとしており、分解して電池を取り出さないよう注意を促しています。家電製品に入っている電池も同じで、ねじを外したりケースをこじ開けたりして電池を取り出す作業は、電池を傷つけて発火させるおそれがあります。取り外しが前提の電池パック（電動工具やコードレス掃除機の着脱式バッテリーなど）を除き、電池を内蔵した製品は自治体の案内に沿って製品ごと出す方法を確認してください。",
  },
];

const steps = [
  {
    title: "片付けの最初に、電池と充電式の製品を別の箱に分けておく",
    body: "部屋の片付けを始めたら、早い段階で電池と充電して使う製品を入れる箱を一つ用意し、見つけたらその場で入れていきます。ほかの不用品と同じ袋にまとめてしまうと、後から取り出すのが難しくなり、そのまま捨ててしまう原因になります。箱は金属製の物を避け、直射日光の当たる窓際や暖房器具のそばには置かないでください。電池同士や、電池とクリップ・硬貨などの金属が触れないよう、ある程度の数がたまったら次の手順で端子を絶縁します。",
  },
  {
    title: "電池の表示を確認し、種類と状態で仕分ける",
    body: "集めた電池と製品について、リサイクルマークや「Li-ion」などの表示、メーカー名を確認します。表示がはっきりしていて外見に異常のない物、表示が読めない・メーカーが分からない物、膨らんでいる・へこんでいる・水に濡れた跡がある物の三つに分けておくと、出し先を決めやすくなります。乾電池やボタン電池が混ざっていたら、別に分けます。仕分けの途中で、熱を持っている、焦げたにおいがする、煙が出るといった状態の物を見つけたら、作業を止め、その物には触れず周囲から燃えやすい物を離してください。",
  },
  {
    title: "端子部分を絶縁テープで覆う",
    body: "JBRCは、電池の金属端子部分を絶縁テープで絶縁するよう案内しており、電池の種類やメーカーを確認できるよう、透明なビニールテープの使用を推奨しています（セロハンテープは不可としています）。端子がむき出しのまま他の電池や金属と触れると、ショートして発熱するおそれがあるためです。自治体によっても、出す前の絶縁を求めている場合があります。テープの貼り方や袋の指定は、お住まいの自治体の案内も併せて確認してください。",
  },
  {
    title: "自治体の案内と、JBRCの協力店・協力自治体を調べる",
    body: "お住まいの市区町村の分別案内やごみ分別アプリで「リチウムイオン電池」「モバイルバッテリー」「充電式電池」などの品目名を検索し、出す区分・出す場所・日程を確認します。JBRCの回収対象に当てはまる電池であれば、JBRCのウェブサイトの「協力店・協力自治体検索」で、近くの家電量販店やホームセンターなどの回収場所を探すことができます。協力店では回収ボックスの場所や受付時間が店舗ごとに決まっているため、持ち込む前に確認しておくと手間がかかりません。",
  },
  {
    title: "対象外の電池や、状態に不安がある電池は窓口に相談してから出す",
    body: "協力店の対象外とされた電池や、膨らんだ・破損した電池は、自治体の清掃事務所などの担当窓口に出し方を問い合わせてください。自治体によっては、膨張した電池の受付方法を個別に案内している場合があります。問い合わせの際は、電池の種類、製品名、膨らみや破損の有無を伝えると、案内を受けやすくなります。回答を待つ間は、金属製でない容器に入れて、涼しく燃えやすい物のない場所に置いておき、ほかのごみと一緒に出さないようにしてください。",
  },
];

const ngActions = [
  {
    title: "電池や充電式の製品を可燃ごみ・不燃ごみに混ぜて出す",
    body: "電池を普通のごみ袋に入れると、収集車での圧縮や処理施設での破砕の際に電池が壊れ、発火する原因になります。環境省は、廃棄物処理施設などで火災が発生していることを示したうえで、市区町村のルールに従って捨てるよう呼びかけています。小さなワイヤレスイヤホンや電子たばこのような製品も、電池が入っていれば同じです。「一つくらいなら」と混ぜてしまうことが、収集作業をする人や施設の安全を損なうことにつながります。",
  },
  {
    title: "製品を分解して、中の電池を自分で取り出す",
    body: "電池を内蔵した製品のケースを開けて電池を取り出そうとすると、工具で電池を傷つけたり、配線を引きちぎってショートさせたりするおそれがあります。JBRCも、モバイルバッテリーは分解せず本体のまま回収に出すよう案内しています。メーカーが取り外しを想定している電池パック以外は、製品のまま自治体の案内に従って出すか、メーカーや販売店の回収を確認してください。分解は、作業する人の安全の面からも避けるべき行為です。",
  },
  {
    title: "膨らんだ電池を押してへこませたり、袋に詰めて放置したりする",
    body: "膨らんだ電池は内部に異常が起きている状態で、押したり曲げたりすると発火するおそれがあります。JBRCは、破損・水濡れ・膨張などの異常がある電池を回収対象外としています。協力店の回収ボックスに入れずに、自治体の窓口に出し方を問い合わせてください。待っている間に、ほかの不用品と一緒に袋へ詰めて部屋の隅に置いておくと、何かの拍子に圧力がかかり危険です。目に付く場所に単独で置き、燃えやすい物を近くに置かないでください。",
  },
  {
    title: "回収業者に「全部まとめて」と電池を混ぜたまま渡す",
    body: "不用品回収や片付けを業者に依頼するとき、電池や充電式の製品をほかの不用品と区別せずに渡すと、運搬中や積み込み時の事故につながるおそれがあります。また、家庭から出る廃棄物の回収には市区町村の許可などが必要で、無許可の業者に渡した物が適正に処理されないこともあります。依頼する前に、電池や電池内蔵の製品を引き取れるか、どのように処理するかを見積もりの段階で確認してください。許可の確認方法は片付け業者の許可・資格の確認方法の記事で解説しています。",
  },
];

const judgeSigns = [
  "電池や充電式の製品のほかにも、家全体に不用品が多く自力では仕分けきれない",
  "実家や空き家の片付けで、引き出しや押し入れから電池がまとまって見つかった",
  "退去や引き渡しの期限が迫っていて、自治体の収集日を待てない",
  "高齢や体調の事情で、協力店や回収拠点まで持ち込むことが難しい",
  "電池以外にも危険物（スプレー缶・灯油・薬品など）が多く、分別に自信がない",
];

const faqs = [
  {
    q: "モバイルバッテリーは家電量販店に持ち込めば引き取ってもらえますか？",
    a: "JBRCの協力店になっている店舗であれば、回収対象の条件を満たすモバイルバッテリーを回収ボックスに出せます。JBRCは、JBRC会員企業の製品であること、電池の種類が明確であること、破損・水濡れ・膨張などの異常がないことを条件にしています。会員企業以外の製品やメーカーが分からない製品は対象外のため、その場合はお住まいの自治体の案内に従ってください。協力店はJBRCのウェブサイトで検索できます。",
  },
  {
    q: "膨らんだスマートフォンやモバイルバッテリーはどうすればよいですか？",
    a: "押したりへこませたりせず、充電もやめて、金属製でない容器に入れ、燃えやすい物のない涼しい場所に置いてください。JBRCは膨張した電池を回収対象外としているため、協力店の回収ボックスには入れられません。お住まいの自治体の清掃担当窓口に、膨張していることを伝えたうえで出し方を問い合わせてください。スマートフォンの場合は、購入した携帯電話会社や販売店の案内も確認すると選択肢が広がります。",
  },
  {
    q: "乾電池やボタン電池も同じ方法で出せますか？",
    a: "JBRCの回収対象は小型充電式電池（ニカド電池・ニッケル水素電池・リチウムイオン電池）で、乾電池、リチウム一次電池、ボタン電池・コイン電池は対象外です。乾電池は自治体の区分に従って出すのが一般的ですが、区分は自治体により異なります。ボタン電池は販売店などで回収している場合があります。いずれも端子の絶縁が求められることがあるため、お住まいの自治体の分別案内でご確認ください。",
  },
  {
    q: "片付け業者に電池内蔵の製品の回収を頼むことはできますか？",
    a: "業者によって対応が異なります。見積もりの段階で、電池や電池内蔵の製品を引き取れるか、引き取った物をどう処理するかを確認してください。家庭から出る廃棄物を回収するには市区町村の許可などが必要なため、許可の有無も併せて確かめることが大切です。少量であれば、自治体の回収やJBRCの協力店を使い、残りの不用品だけを業者に依頼する組み合わせも検討できます。",
  },
];

const sources = [
  { label: "リチウムイオン電池関係", org: "環境省", url: "https://www.env.go.jp/recycle/waste/lithium_1/index.html" },
  { label: "リチウムイオン電池等に関する特設サイト", org: "環境省", url: "https://lithium.env.go.jp/recycle/waste/lithium_1/index.html" },
  { label: "不要電池の出し方（回収対象／対象外説明）", org: "一般社団法人JBRC", url: "https://www.jbrc.com/general/recycle_flow/" },
  { label: "協力店・協力自治体検索", org: "一般社団法人JBRC", url: "https://www.jbrc.com/general/recycle_kensaku/" },
  { label: "充電式電池は不燃ごみの日にお出しください", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/25227.html" },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "スプレー缶・電池など分別が難しいごみ", desc: "危険物・処理困難物の考え方" },
  { href: "/kogata-kaden-recycle/", label: "小型家電リサイクルの使い方", desc: "回収ボックスと認定事業者の回収" },
  { href: "/cable-gadget-haisen-seiri/", label: "ケーブル・充電器・古いガジェットの整理", desc: "配線まわりと使わない機器の手放し方" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去と処分", desc: "初期化だけで手放さないための手順" },
  { href: "/kougu-diy-yohin-shobun/", label: "工具・DIY用品・塗料の整理と処分", desc: "電動工具のバッテリーの扱い" },
  { href: "/gyousha-kyoka-kakunin/", label: "片付け業者の許可・資格の確認方法", desc: "依頼前に確かめること" },
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
    { "@type": "ListItem", position: 2, name: "モバイルバッテリー・リチウムイオン電池の処分方法" },
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
    { href: "#kiso", label: "1｜電池の処分に注意が必要な理由" },
    { href: "#merit", label: "2｜出し先を決める3つの確認事項" },
    { href: "#houshin", label: "3｜片付けの中で電池を扱う全体方針" },
    { href: "#steps", label: "4｜電池を安全に手放す5ステップ" },
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

      <Breadcrumb items={[{ label: "モバイルバッテリー・リチウムイオン電池の処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          モバイルバッテリー・リチウムイオン電池の処分方法｜発火を防ぐ出し方と回収先の確認
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          部屋や実家を片付けていると、引き出しの奥から使わなくなったモバイルバッテリーや古いスマートフォン、充電式の電動歯ブラシやハンディファンなどが次々に見つかることがあります。いずれもリチウムイオン電池などの充電式電池が入っており、ほかのごみと同じように出すと、収集車や処理施設での火災の原因になるおそれがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、環境省と小型充電式電池のリサイクルを行う一般社団法人JBRCの公式情報をもとに、電池の種類と状態の見分け方、自治体のルールと協力店回収の使い分け、端子の絶縁、膨らんだ電池の扱い、片付け業者に依頼するときの確認事項を順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>リチウムイオン電池は衝撃や高温で発火することがあり、普通のごみに混ぜない</li>
          <li>家庭の電池はお住まいの市区町村のルールに従って出すのが基本（環境省）</li>
          <li>JBRCの協力店で出せるのは、会員企業製で種類が明確、異常のない小型充電式電池に限られる</li>
          <li>端子は透明なビニールテープで絶縁し、膨らんだ電池や製品は分解せず自治体に相談する</li>
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

      <H2 id="kiso" num="1">電池の処分に注意が必要な理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        出し方の手順に入る前に、なぜ電池だけを別に扱う必要があるのか、片付けの現場で電池がどのような形で見つかるのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">出し先を決める3つの確認事項</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        同じ「電池」でも、種類・製造元・状態によって出せる場所が変わります。出し先を決める前に、次の3点を確認してください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">片付けの中で電池を扱う全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付けの作業中は、目の前の物を「残す」「手放す」に分けることに意識が向き、電池のような小さな物は見落とされがちです。この記事の方針は、電池と充電式の製品は見つけた時点でほかの不用品から切り離し、最後にまとめて出し先を確認するという順番を守ることです。仕分けの途中でごみ袋に入ってしまうと、後から探し出すことは難しくなります。専用の箱を一つ決めておくだけで、収集日に慌てて袋を開け直す手間がなくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        スプレー缶やカセットボンベなど、ほかの危険物の出し方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの出し方</Link>にまとめています。電池を内蔵した小型の電子機器そのものを手放す方法は<Link href="/kogata-kaden-recycle/" className="text-primary underline underline-offset-2">小型家電リサイクルの使い方</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">電池を安全に手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、分けて集める→表示と状態で仕分ける→端子を絶縁する→出し先を調べる→対象外の物は窓口に相談する、の5ステップです。
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
        自治体の扱いの一例として、世田谷区は2025年10月1日から、充電式電池（リチウムイオン電池・ニッケル水素電池・ニカド電池）と、充電式電池が取り外せないモバイルバッテリー・電動歯ブラシ・ワイヤレスイヤホンなどの小型家電を不燃ごみの日に収集しています。電極をテープで絶縁し、別の袋に入れて「充電式電池」と書いて出す方法で、膨張・破損した物は清掃事務所などの窓口へ持ち込むよう案内しています。このように、同じ電池でも出し方は自治体ごとに決められているため、お住まいの自治体の案内を必ず確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        スマートフォンやパソコンを手放す前のデータの扱いは<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去と処分</Link>、充電器やケーブル類の整理は<Link href="/cable-gadget-haisen-seiri/" className="text-primary underline underline-offset-2">ケーブル・充電器・古いガジェットの整理</Link>、電動工具の着脱式バッテリーは<Link href="/kougu-diy-yohin-shobun/" className="text-primary underline underline-offset-2">工具・DIY用品・塗料の整理と処分</Link>を参考にしてください。
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
        電池そのものは自治体や協力店で出せることが多いものの、電池は家全体の片付けの中で見つかることがほとんどです。次のような状況では、片付け・不用品回収業者への依頼も検討してください。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可を確認できる業者を選び、電池や電池内蔵の製品を引き取れるかを見積もりの段階で確認してください。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。電池・電池内蔵製品の分別区分、出す場所や日程、絶縁の方法は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。JBRCの回収対象・協力店の情報は変更されることがあるため、持ち込む前にJBRCの公式サイトをご確認ください。発熱・発煙など異常がある場合は、無理に触れず、状況に応じて消防や自治体の窓口にご相談ください。
      </p>
    </article>
  );
}
