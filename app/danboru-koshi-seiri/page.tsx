import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/danboru-koshi-seiri/";
const TITLE = "段ボール・古紙の整理と出し方｜溜めない仕組みと資源回収の使い分け";
const DESC =
  "通販の段ボール、古い新聞や雑誌、名前の入った書類。紙は一枚ずつが軽いぶん、気づくと部屋の一角を占領します。段ボール・新聞・雑誌・雑がみ・紙パックの区分の考え方、たたみ方とまとめ方、湿気と虫への備え、個人情報が載った紙の扱い、集団回収や拠点回収の使い分けまでを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "紙は「資源として集める物」と「そうでない物」に分かれる",
    body: "古紙は多くの自治体で資源物として集められますが、紙であれば何でも資源になるわけではありません。感熱紙のレシート、においや汚れが付いた紙、防水加工された紙コップ、写真、粘着の付いた封筒など、資源として扱われないものがあります。どこまでを資源として出せるかは自治体によって異なり、同じ品物でも区分が違うことがあります。まずはお住まいの市区町村の案内で、資源として集めている紙の種類と、対象外になる紙の例を確認してください。この線引きが分かるだけで、迷って手元に残る紙が大きく減ります。",
  },
  {
    title: "段ボールは体積が大きく、放置すると場所を奪う",
    body: "通販の利用が増えると、段ボールは一週間で驚くほど溜まります。たたまずに重ねると立体のまま場所を取り、部屋の隅が一つ潰れます。さらに段ボールは湿気を吸いやすく、隙間が虫の住み処になりやすい素材でもあります。届いた荷物の箱をそのまま置いておくと、外から持ち込まれた汚れや虫が室内に留まる原因にもなります。開梱したらその場でたたむ、という一つの動作を習慣にできるかどうかで、部屋の状態はかなり変わります。片付けの中でも、効果が出るまでの時間が短い領域です。",
  },
  {
    title: "名前や住所が載った紙は、分別の前に扱いを決める",
    body: "郵便物の宛名、通販の伝票、明細書、学校や職場からの書類など、紙には個人情報が載っていることがよくあります。資源として出す場合、集積所や回収の拠点でそのまま束ねられるため、他人の目に触れる可能性があります。氏名や住所、口座や契約に関わる番号が見える紙は、そのまま束に混ぜず、別の扱いにしてください。宛名部分を切り取る、専用のスタンプなどで消す、細かく裁断する、といった方法があります。裁断した紙が資源として出せるかどうかも自治体によって異なるため、案内を確認しておくと安心です。",
  },
];

const merits = [
  {
    title: "整理1：発生した場所で、たたむところまでを一続きにする",
    body: "段ボールが溜まる家に共通しているのは、開けた場所とたたむ場所が離れていることです。玄関で開けて中身だけ運び、箱は玄関に残る。その箱を後でたたもうとして、たたまないまま積み上がる。この流れを断つには、開梱・中身の取り出し・箱をたたむ、までを一つの動作として終わらせることです。カッターやはさみを玄関の近くに置いておくと、途中で止まりにくくなります。たたんだ後の置き場所も、同じ動線の上に決めておいてください。移動が発生するほど、後回しになる確率は上がります。",
  },
  {
    title: "整理2：紙の種類ごとに、置き場所を分けておく",
    body: "古紙をまとめて一か所に積むと、出すときに分ける作業が発生します。この「後で分ける」が負担になり、出す日を逃す原因になります。段ボール、新聞、雑誌や雑がみ、紙パックというように、自治体の区分に合わせた置き場所を最初から分けておくと、出す日はそのまま持ち出すだけで済みます。場所が限られている場合は、紙袋を並べて種類ごとに入れる方法が手軽です。区分の名称や数は自治体によって異なりますので、案内に合わせて置き場所を設計してください。",
  },
  {
    title: "整理3：出す日をあらかじめ決めて、量が増える前に回す",
    body: "古紙の収集は、可燃ごみに比べて頻度が少ないことが多く、一度逃すと次まで日数が空きます。その間に量が増え、置き場から溢れ、さらに出しにくくなるという悪循環に陥りがちです。収集日を前もって確認し、前夜に通知が届くよう設定しておくだけでも回転が変わります。地域によっては、町会や子ども会などによる集団回収、スーパーや公共施設に設けられた拠点での回収が利用できることもあります。収集日を逃したときの逃げ道を一つ持っておくと、溜め込みに戻りにくくなります。",
  },
];

const steps = [
  {
    title: "家の中にある紙を集めて、量と種類を把握する",
    body: "まずは家じゅうから紙を集めます。玄関の段ボール、リビングの新聞や雑誌、キッチンの紙パック、机の上の郵便物や書類。この段階では細かく分けず、床にまとめて置いてください。集めてみると、思っていた以上の量があること、そして種類が偏っていることが分かります。段ボールばかりが多いのか、書類が中心なのかで、この後の対策が変わります。作業は一度に全部やろうとせず、部屋ごとに区切っても構いません。集める過程で、資源として出せない汚れた紙や、明らかに不要な広告も同時に見つかります。",
  },
  {
    title: "自治体の区分に合わせて、置き場所をつくる",
    body: "お住まいの市区町村の案内で、古紙をどの区分で集めているかを確認します。多くの自治体では、段ボール、新聞と折り込み広告、雑誌や雑がみ、紙パックといった分け方が使われていますが、区分の名称や数は地域によって異なります。確認できたら、その区分と同じ数だけ置き場所を用意してください。紙袋、空き箱、書類ケースなど、家にある物で構いません。置き場所には区分名を書いた紙を貼っておくと、家族の誰が入れても迷いません。この一手間が、出す日の負担を大きく減らします。",
  },
  {
    title: "個人情報が載った紙を抜き出し、別に処理する",
    body: "集めた紙の中から、氏名・住所・電話番号・口座や契約に関する番号が見える物を抜き出します。郵便物の宛名部分、通販の送り状、金融機関や保険会社からの通知、医療機関の書類などが該当します。抜き出した紙は、宛名部分を切り取る、消えるタイプのスタンプで塗りつぶす、細かく裁断するといった方法で読めない状態にしてください。裁断した紙を資源として出せるかどうか、可燃ごみとして扱うのかは自治体によって異なりますので、案内をご確認ください。残すべき重要書類の見分け方は関連記事で扱っています。",
  },
  {
    title: "段ボールと古紙を、出しやすい形にまとめる",
    body: "段ボールは、テープや伝票を外してから平らにたたみます。伝票をはがしにくいときは、その部分だけ切り取って別に処理すると早く済みます。たたんだ段ボールは大きさをそろえて重ね、ひもで十字にしばると崩れません。新聞や雑誌も同様に、そろえてしばります。ひもの結び目は持ち手として使えるよう、少し余裕をもたせておくと運ぶときに楽です。紙パックは、開いて洗い、乾かしてからまとめるよう案内されていることが一般的です。ぬれた紙や汚れた紙は資源に混ぜず、自治体の案内に従って処理してください。",
  },
  {
    title: "収集日か回収拠点に回し、次の一週間分の置き場を空ける",
    body: "まとめた古紙は、収集日に指定された場所へ出します。雨の日は紙が水を吸って重くなり、資源として扱えなくなることがあるため、天候によっては次回に回すか、屋根のある拠点回収を使う判断も必要です。地域によっては、町会や子ども会などによる集団回収、店舗や公共施設に設置された回収の拠点が利用できることがあります。出し終えたら、置き場を空にした状態に戻してください。空になった置き場があることが、次の一週間で発生する紙を溜めずに回す前提になります。",
  },
];

const ngActions = [
  {
    title: "たたまないまま段ボールを積み上げていく",
    body: "たたんでいない段ボールは、たたんだ状態の何倍もの体積を占めます。積み上げた山は途中から崩れやすく、通り道をふさぎ、床の掃除もできなくなります。さらに、箱の中や隙間は湿気がこもりやすく、虫が入り込む場所になります。届いた荷物を開けたら、その場で伝票をはがし、たたむところまでを一続きで終わらせてください。どうしても時間がないときは、少なくとも平らにして壁沿いに立てかけるところまでは済ませておくと、後の作業が軽くなります。",
  },
  {
    title: "汚れた紙やにおいの付いた紙を、資源に混ぜて出す",
    body: "食品の油が染みた紙、生ものが触れた紙、においが強く残った紙は、資源として再生する工程に支障が出るため、資源に混ぜないよう案内されているのが一般的です。混入していると、束ごと回収されずに残ってしまうこともあります。判断に迷う紙は、その一枚だけを別に置き、自治体の案内で確認してから出してください。同様に、粘着テープ、金具、ビニール加工が付いたままの紙も、外せるものは外してから出すよう求められることがあります。区分の詳細は自治体によって異なります。",
  },
  {
    title: "宛名や明細をそのままにして、束の中に入れてしまう",
    body: "資源として出された古紙は、集積所や回収の拠点で束のまま置かれる時間があります。その間、外側に来た紙は誰の目にも触れます。氏名や住所、契約や口座に関わる番号が見える紙を、そのまま束に入れてしまうのは避けてください。宛名部分を切り取る、塗りつぶす、裁断するなど、読めない状態にしてから処理するのが基本です。手間に感じる場合は、郵便物を開けた時点で宛名部分だけを切り取って専用の容器に入れる習慣にすると、後からまとめて対処する必要がなくなります。",
  },
  {
    title: "「まとめて出せばよい」と考えて、何か月分も溜める",
    body: "古紙は一度に大量に出すと、集積所を占領して近隣の迷惑になったり、量が多いという理由で回収されずに残ったりすることがあります。自治体によっては、一度に出せる量の目安が示されていることもあります。溜めてから一気に出すのではなく、収集のたびに少しずつ回すほうが、結果として手間も少なく済みます。すでに大量に溜まってしまっている場合は、数回に分けて出すか、量が多いときの持ち込み方法について自治体の窓口に相談してください。",
  },
];

const judgeSigns = [
  "古紙の山が部屋の一角を占め、自力では運び出せない量になっている",
  "湿気を吸って重くなり、束にしても持ち上げられない",
  "紙の下や隙間に虫が発生していて、触りたくない",
  "書類や本と混ざっていて、仕分けだけで何日もかかりそう",
  "退去や来客の期限があり、収集日を待っていると間に合わない",
];

const faqs = [
  {
    q: "段ボールは何を外してから出せばよいですか？",
    a: "一般的には、粘着テープ、送り状や伝票、金具やプラスチックの取っ手など、紙以外の部材を外してからたたんで出すよう案内されています。伝票がはがれにくい場合は、その部分だけを切り取り、個人情報が見えないようにしてから別に処理すると確実です。ただし、外すべき部材の範囲やまとめ方の指定は自治体によって異なりますので、お住まいの市区町村の案内をご確認ください。",
  },
  {
    q: "雑がみとは何を指しますか？",
    a: "包装紙、紙箱、封筒、パンフレット、コピー用紙など、新聞・雑誌・段ボール・紙パック以外の再生できる紙をまとめて指す呼び方として使われることがあります。ただし、この区分を設けているかどうか、どの紙を含めるかは自治体によって異なります。感熱紙のレシート、汚れやにおいの付いた紙、防水加工された紙などは対象外とされることが多いので、市区町村の案内で対象と対象外の例を確認してください。",
  },
  {
    q: "個人情報が載った書類は、どう処分すればよいですか？",
    a: "氏名・住所・契約や口座に関わる番号が見える紙は、そのまま資源に混ぜず、宛名部分を切り取る、塗りつぶす、細かく裁断するなどして読めない状態にしてから処理してください。裁断した紙を資源として出せるか、可燃ごみとして扱うのかは自治体によって異なります。なお、契約書や保険の書類など、保管が必要な書類を誤って処分しないよう、処分前に残すべき書類かどうかを確認することも大切です。",
  },
  {
    q: "収集日に出せなかった古紙は、どうすればよいですか？",
    a: "次の収集日まで、湿気の少ない場所で保管するのが基本です。地域によっては、町会や子ども会などによる集団回収、店舗や公共施設に設けられた回収の拠点が利用できることがあります。利用できるかどうか、受け付けている紙の種類は地域によって異なりますので、自治体の案内でご確認ください。量が多くて保管が難しい場合は、市区町村の窓口に相談すると出し方の案内を受けられます。",
  },
];

const related = [
  { href: "/hon-shorui-seiri/", label: "本・書類の整理", desc: "残すべき重要書類の見分け方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミ", desc: "判断に迷う品目の調べ方" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "大きな物を出すときの手順" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離", desc: "荷造りと処分の逆算スケジュール" },
  { href: "/katazuke-rebound-boushi/", label: "リバウンド防止", desc: "片付いた状態を保つ仕組み" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの手放し方", desc: "増やさずに片付ける考え方" },
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
    { "@type": "ListItem", position: 2, name: "段ボール・古紙の整理と出し方" },
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
    { href: "#kiso", label: "1｜紙を出すときに押さえること" },
    { href: "#merit", label: "2｜溜めないための3つの整理" },
    { href: "#houshin", label: "3｜資源回収の種類と使い分け" },
    { href: "#steps", label: "4｜段ボール・古紙を片付ける5ステップ" },
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

      <Breadcrumb items={[{ label: "段ボール・古紙の整理と出し方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          段ボール・古紙の整理と出し方｜溜めない仕組みと資源回収の使い分け
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          紙は一枚ずつが軽く、捨てるのに大がかりな作業もいりません。それなのに、気づけば玄関に段ボールの山ができ、リビングの隅に新聞や広告が積まれている。片付けの相談でよく聞く光景です。理由は単純で、紙は「発生する頻度が高いのに、出せる日が限られている」という性質を持っているからです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、段ボール・新聞・雑誌や雑がみ・紙パックといった区分の考え方、たたみ方とまとめ方、湿気や虫への備え、氏名や住所が載った紙の扱い、そして集団回収や拠点回収の使い分けまでを順に整理します。なお、古紙の区分や出し方、一度に出せる量の目安は自治体によって異なりますので、具体的な内容はお住まいの市区町村の案内でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>開梱からたたむまでを一続きにすると、段ボールは溜まらなくなる</li>
          <li>自治体の区分と同じ数だけ置き場所を分けておくと、出す日は持ち出すだけで済む</li>
          <li>氏名・住所・番号が見える紙は、束に混ぜる前に読めない状態にする</li>
          <li>汚れた紙や加工紙は資源に混ぜない。区分と量の目安は自治体により異なるため要確認</li>
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

      <H2 id="kiso" num="1">紙を出すときに押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        古紙の片付けは、分別の知識より先に「どこで詰まっているか」を見つけるほうが効きます。まずは三つの前提を確認します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">溜めないための3つの整理</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        紙が溜まる家には、動線・置き場・タイミングのいずれかに詰まりがあります。三つの観点から順に外していきます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">資源回収の種類と使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        古紙を手放すルートは一つではありません。身近なのは、自治体が行う資源物の収集です。決められた曜日に、指定された場所へ出す形が一般的で、区分やまとめ方の指定は市区町村ごとに定められています。次に、地域の町会や子ども会、学校の保護者会などが行う集団回収があります。実施の有無や回収する紙の種類、日程は地域によって異なりますが、家の前や近くの集積所に出せる場合があり、自治体の収集日を逃したときの受け皿になります。さらに、スーパーやホームセンター、公共施設などに古紙の回収拠点が設けられていることもあります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        使い分けの考え方はシンプルです。日常的に発生する紙は自治体の収集で回す。収集日を逃した分や、量が中途半端に残った分は集団回収や拠点回収で調整する。そして、引っ越しや大掃除で一度に大量の紙が出た場合は、数回に分けるか、量が多いときの扱いについて自治体の窓口に確認する。この三段階で考えておくと、置き場から溢れる前に手が打てます。なお、拠点回収では受け付ける紙の種類が限られていたり、持ち込める時間が決まっていたりすることがありますので、事前に確認してから運んでください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        紙の整理は、書類の整理と切り離せない部分もあります。資源として出す前に、残しておくべき契約書や保証書、税や保険に関わる書類が混ざっていないかを確認してください。判断の基準は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理</Link>で扱っています。また、雑誌や本がまとまった量あるなら、資源として出す前に買取の対象になるかを見てから決めるという順序もあります。その考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>で整理しています。判断に迷う紙製品の調べ方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">段ボール・古紙を片付ける5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集める→区分に合わせた置き場をつくる→個人情報を抜く→まとめる→回す。この順で進めると、途中で判断が止まりません。
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
        <h3 className="font-bold text-text-primary mb-2">古紙の区分・出し方は、必ず自治体の案内で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          資源として集める紙の種類、区分の名称、まとめ方の指定、一度に出せる量の目安、裁断した紙や紙パックの扱い、集団回収や拠点回収の有無は、自治体および地域によって異なります。本記事では一般的な考え方の説明にとどめており、個別の区分についてお答えすることはできません。お住まいの市区町村の公式サイトや窓口で最新の案内をご確認ください。また、古紙の回収を持ちかける訪問や電話をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        紙を減らす取り組みは、発生量そのものを減らす工夫と組み合わせると続きます。明細や通知を紙から電子的な形に切り替える、不要な広告の投函を止める手続きを行う、雑誌の定期購読を見直す、といった方法です。届いた紙をその日のうちに要否判断するというルールを一つ決めるだけでも、机の上に積まれる量は変わります。片付けた状態を保つ考え方は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">リバウンド防止</Link>、収納用品を増やさずに整える考え方は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの手放し方</Link>で扱っています。引っ越しに向けて紙を一気に減らしたい場合は<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>をご覧ください。
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
        紙は軽く見えますが、束になると重く、量が増えると自力で運ぶのが難しくなります。次のような状況では、片付け・不用品回収の業者に相談することを検討してください。対応できる業者は<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者</Link>や<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼する際は、廃棄物の収集運搬に必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を書面にしてもらってください。料金は物量・間取り・作業内容・地域によって異なるため、複数社を比較するのが確実です。書類が含まれる場合は、個人情報が載った紙の扱いをどうするかを事前に伝えておくと安心です。依頼先の候補としては<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で特徴を比較できます。回収をめぐる注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。古紙の区分、まとめ方、収集日、一度に出せる量の目安、裁断した紙や紙パックの扱い、集団回収・拠点回収の有無や受け付ける品目は、自治体および地域により異なりますので、必ずお住まいの市区町村の公式サイトや窓口でご確認ください。保管が必要な書類の取り扱いについては、契約先や関係機関の案内に従ってください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
