import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/saigai-go-katazuke/";
const TITLE = "災害後の家の片付け｜安全確認から家財の処分までの手順";
const DESC =
  "浸水や地震のあとの家の片付けは、安全確認と記録から始まります。片付ける前に写真を残す理由、感染症や怪我を防ぐ装備、泥や水を含んだ家財の扱い、乾燥とカビ対策、そして災害廃棄物の出し方や支援の枠組み（対象・条件・期限は必ず自治体の窓口で確認）までを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "片付けを始める前に、建物と設備の安全を確かめる",
    body: "被災した住まいに戻ったとき、真っ先にやりたくなるのは片付けです。しかし、その前に確認すべきことがあります。建物が傾いていないか、壁や天井にひび割れや落下しそうな部分がないか、床が抜けそうな箇所はないか。そして電気、ガス、水道の状態です。浸水した住宅では、通電したことで火災が起きる事例が知られており、ブレーカーや配電盤、水に浸かった電気機器の扱いには注意が必要です。ガスのにおいがする場合も同様です。判断に不安があるときは自分で操作せず、電力会社やガス事業者、自治体の窓口に確認してください。",
  },
  {
    title: "片付ける前に記録を残すことが、後の手続きにつながる",
    body: "被害を受けた住宅については、被害の状況を証明する書類として、り災証明書などの仕組みが用意されるのが一般的です。こうした手続きでは、被害の状態が分かる記録が必要になる場面があります。片付けを先に進めてしまうと、その状態を再現できません。したがって、作業に取りかかる前に、建物の外観、被害を受けた部屋の全体、浸水の跡が分かる壁面、壊れた家財を、日付が分かる形で撮影しておいてください。必要な書類や手続きの内容、申請の期限は自治体によって異なりますので、必ずお住まいの市区町村の窓口でご確認ください。",
  },
  {
    title: "水や泥を含んだ家財は、通常の片付けとは扱いが変わる",
    body: "浸水した家財は、見た目以上に状態が悪化していることがあります。泥水には汚水や有害な物質が混ざっている可能性があり、乾いた後もほこりとして舞います。畳、布団、ソファ、じゅうたん、木製家具は水を吸って重くなり、内部まで乾かすのは容易ではありません。家電については、外側が乾いていても内部に水分や泥が残っていることがあり、そのまま電源を入れると危険です。使えるかどうかの判断は自分でせず、メーカーや販売店に相談してください。この分野は「もったいない」より安全を優先すべき場面です。",
  },
];

const merits = [
  {
    title: "備え1：怪我と感染を防ぐ装備を先にそろえる",
    body: "被災後の片付けでは、割れたガラス、露出した釘、崩れた建材、汚水、粉じんなど、平時にはない危険があります。作業前に、厚手のゴム手袋、底の厚い靴（できれば踏み抜きに強いもの）、長袖長ズボン、粉じん用のマスク、必要に応じてゴーグルを用意してください。小さな傷でも汚水に触れると悪化することがあるため、傷がある部分は防水の絆創膏で覆い、作業後は手洗いとうがいを徹底します。体調の変化を感じたら無理をせず、医療機関に相談してください。装備がそろわないうちに素手や普段着で作業を始めるのは避けましょう。",
  },
  {
    title: "備え2：無理をしない時間配分と人手の確保",
    body: "被災後の片付けは、身体的にも精神的にも消耗の大きい作業です。泥を含んだ畳や家具は非常に重く、一人で運べる物ではありません。暑い時期には熱中症の危険も高まります。作業は短い時間で区切り、こまめに休憩と水分補給を挟んでください。人手が足りない場合、地域によっては災害ボランティアの受け入れが行われることがあります。受け入れの有無や依頼の方法は状況と地域によって異なりますので、自治体や社会福祉協議会の案内をご確認ください。無理をして体調を崩せば、その後の生活再建にも影響します。",
  },
  {
    title: "備え3：出し方のルールを確認してから搬出する",
    body: "災害時には、通常のごみ収集とは別に、災害廃棄物の受け入れが行われることがあります。仮置き場が設けられる場合や、分別の区分、搬入できる期間、受け付ける品目が定められる場合があり、その内容は自治体と災害の状況によって異なります。確認しないまま道路脇にまとめて出すと、通行の妨げになったり、回収されずに残ったりすることがあります。作業を始める前に、自治体の広報や公式の案内で、どこへ・いつまで・どのように出すのかを確認してください。分からない場合は市区町村の窓口にお問い合わせください。",
  },
];

const steps = [
  {
    title: "建物と電気・ガス・水道の安全を確認する",
    body: "住まいに入る前に、建物の外観を見て、傾き、大きなひび割れ、落下しそうな部分がないかを確認します。中に入ったら、床の抜けや天井の垂れ下がりに注意しながら進んでください。電気については、浸水した場合は通電による火災のおそれがあるため、ブレーカーの操作や水に浸かった機器の使用は自己判断で行わないことが大切です。ガスのにおいがする場合は火気を使わず、窓を開けて事業者に連絡してください。安全に関する判断に迷うときは、電力会社、ガス事業者、自治体の窓口に確認してから作業を始めましょう。",
  },
  {
    title: "片付ける前に、被害の状況を写真で記録する",
    body: "作業に入る前に、被害の状態を撮影します。建物の外観を四方向から、浸水した部屋の全体、浸水の高さが分かる壁面、壊れた家財、水に浸かった家電などを、日付が分かる形で残してください。全体が写る写真と、近づいて撮った写真の両方があると状況が伝わりやすくなります。撮影したデータは、スマートフォンの中だけでなく別の場所にも保存しておくと安心です。り災証明書などの手続きで必要になる書類や、申請の期限、写真の要件は自治体によって異なりますので、市区町村の窓口でご確認ください。",
  },
  {
    title: "水や泥を含んだ家財を運び出し、家の中を空にする",
    body: "記録を残したら、水や泥を含んだ物を屋外へ出します。畳、布団、じゅうたん、ソファ、木製家具などは水を吸って重くなっているため、必ず複数人で運んでください。無理に持ち上げようとすると、腰を痛めたり足元が滑ったりします。運び出す物と残す物を迷ったときは、いったん屋外の分けた場所に出し、後で判断する形にすると作業が止まりません。家の中を空にすることは、この後の泥出しと乾燥のために不可欠な工程です。搬出の際は、出し方のルールを確認したうえで指定された場所へ運びます。",
  },
  {
    title: "泥を取り除き、洗浄と乾燥を進める",
    body: "家財を出したら、床や壁に残った泥をかき出します。乾いてしまうと除去が難しくなるため、可能な範囲で早めに行うのが基本です。泥を取り除いた後は、水で洗い流し、水気を拭き取ります。床下や壁の内部にまで水が入っている場合は、表面だけを乾かしても内部に水分が残り、後からカビやにおいの原因になります。床下の点検口を開ける、壁材の一部を外すといった対応が必要になることもあり、こうした作業は専門の事業者に相談するのが確実です。扇風機や送風機で風を通し、時間をかけて乾かしてください。",
  },
  {
    title: "乾燥後に消毒・カビ対策を行い、住める状態に戻す",
    body: "十分に乾いたことを確認してから、清掃と消毒を行います。使用する薬剤の種類や希釈の方法、使ってよい場所は製品によって異なりますので、必ず製品の表示に従い、換気をしながら作業してください。異なる薬剤を混ぜて使うと有害なガスが発生するおそれがあるため、混ぜての使用は避けてください。乾燥が不十分なまま仕上げると、後からカビが広がることがあります。においが残る場合は、原因が壁の内部や床下にある可能性もあります。カビや悪臭の対処については関連記事で手順を扱っていますが、範囲が広い場合や再発する場合は、専門の事業者に相談することをおすすめします。",
  },
];

const ngActions = [
  {
    title: "浸水した家電の電源を入れて、動くかどうか確かめる",
    body: "外側が乾いていても、内部に水分や泥が残っていることがあります。その状態で電源を入れると、故障だけでなく感電や発火につながるおそれがあります。冷蔵庫、洗濯機、エアコン、テレビ、電子レンジ、パソコンなど、水に浸かった可能性のある機器は、自己判断で通電させないでください。使えるかどうかの確認は、メーカーや販売店に相談するのが安全です。あわせて、浸水した住宅では屋内配線やコンセントにも影響が及んでいる可能性があるため、通電の可否は電力会社や専門の事業者に確認しましょう。",
  },
  {
    title: "記録を残さないまま、被害を受けた家財を処分する",
    body: "一刻も早く片付けたい気持ちは自然なものですが、記録がないまま処分すると、後の手続きで状況を説明できなくなることがあります。り災証明書などの申請では、被害の状態が分かる記録が求められる場面があります。撮影は数分で終わる作業です。建物の外観、部屋の全体、浸水の高さが分かる壁面、壊れた家財を、日付が分かる形で残してから運び出してください。必要な書類や写真の要件、申請の期限は自治体によって異なりますので、窓口で確認しておくと確実です。",
  },
  {
    title: "素手や普段の服装のまま、泥や汚水の中で作業する",
    body: "被災後の家屋には、割れたガラス、露出した釘、崩れた建材、汚水、粉じんといった危険があります。素手やサンダル、半袖のまま作業すると、切り傷や刺し傷を負いやすく、汚水に触れることで傷が悪化することもあります。厚手のゴム手袋、底の厚い靴、長袖長ズボン、粉じん用のマスクを必ず着用してください。作業後は手洗いとうがいを行い、傷がある場合は清潔に保ちます。発熱や傷の腫れなど体調の変化があれば、無理をせず医療機関に相談してください。",
  },
  {
    title: "出し方を確認せずに、道路脇へ家財を積み上げる",
    body: "災害時には、通常のごみ収集とは異なる受け入れ方法が案内されることがあります。仮置き場の場所、分別の区分、搬入できる期間、受け付ける品目は、自治体と災害の状況によって異なります。確認しないまま道路脇に積み上げると、通行や復旧作業の妨げになるほか、回収されずに残ってしまうこともあります。作業を始める前に、自治体の広報や公式の案内で、どこへ・いつまで・どのように出すのかを確認してください。近隣で同じ状況の世帯があれば、情報を共有すると効率的です。",
  },
];

const judgeSigns = [
  "水を含んだ畳や大型家具が多く、自力では運び出せない",
  "床下や壁の内部まで水が入っており、乾燥の可否を判断できない",
  "乾燥後もカビやにおいが広範囲に残っている",
  "高齢世帯などで、作業を担える人手が確保できない",
  "搬出の期限が定められていて、自力では間に合わない",
];

const faqs = [
  {
    q: "浸水した家の片付けは、何から始めればよいですか？",
    a: "まず建物と電気・ガス・水道の安全を確認してください。浸水した場合は通電による火災のおそれがあるため、ブレーカーの操作や水に浸かった機器の使用は自己判断で行わず、電力会社や自治体の窓口に確認しましょう。安全が確認できたら、片付けを始める前に被害の状況を写真で記録します。その後、水や泥を含んだ家財を運び出し、泥の除去、洗浄、乾燥、消毒という順に進めます。装備をそろえてから作業を始めてください。",
  },
  {
    q: "り災証明書などの手続きには何が必要ですか？",
    a: "被害を証明する仕組みとして、り災証明書などが用意されるのが一般的です。申請に必要な書類、写真の要件、受付の期間や窓口は、自治体や災害の状況によって異なります。共通して言えるのは、片付ける前に被害の状態を日付が分かる形で撮影しておくと後の説明がしやすくなるということです。制度の対象、条件、期限については必ずお住まいの市区町村の窓口でご確認ください。この記事では個別の制度内容についてはお答えできません。",
  },
  {
    q: "水に浸かった家電はもう使えませんか？",
    a: "外側が乾いていても内部に水分や泥が残っていることがあり、そのまま電源を入れると感電や発火のおそれがあります。使えるかどうかを自分で確かめようとせず、メーカーや販売店に相談してください。処分する場合、冷蔵庫・洗濯機・エアコン・テレビは家電リサイクル法の対象ですが、災害時には受け入れ方法が通常と異なる案内が出ることがあります。出し方は自治体の案内をご確認ください。",
  },
  {
    q: "災害廃棄物はどこに出せばよいですか？",
    a: "災害の規模や地域によって、仮置き場が設けられる場合や、分別の区分・搬入できる期間・受け付ける品目が定められる場合があります。内容は自治体と状況によって異なりますので、市区町村の広報や公式の案内でご確認ください。確認せずに道路脇へ積み上げると、通行や復旧の妨げになったり、回収されずに残ったりすることがあります。判断に迷う品目については、自治体の窓口にお問い合わせください。",
  },
];

const related = [
  { href: "/kabi-seisou/", label: "カビの清掃", desc: "広がったカビへの対処と再発防止" },
  { href: "/heya-shoushuu/", label: "部屋の消臭", desc: "においの原因の切り分けと対処" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分", desc: "冷蔵庫・洗濯機などのルート" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない家具の搬出と選択肢" },
  { href: "/bousai-bichiku-katazuke/", label: "防災備蓄と片付けの両立", desc: "備えを使える状態で保つ管理法" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミ", desc: "判断に迷う品目の調べ方" },
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
    { "@type": "ListItem", position: 2, name: "災害後の家の片付け" },
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
    { href: "#kiso", label: "1｜片付けを始める前に押さえること" },
    { href: "#merit", label: "2｜安全に作業するための3つの備え" },
    { href: "#houshin", label: "3｜支援の枠組みと相談先の考え方" },
    { href: "#steps", label: "4｜片付けを進める5ステップ" },
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

      <Breadcrumb items={[{ label: "災害後の家の片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          災害後の家の片付け｜安全確認から家財の処分までの手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          浸水や地震のあと、自宅に戻って最初に感じるのは「どこから手を付ければいいのか」という戸惑いだと思います。泥に覆われた床、水を吸って重くなった畳や家具、動くかどうか分からない家電。片付けたい気持ちは強くても、順番を誤ると危険が伴い、後の手続きにも影響します。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、作業を始める前の安全確認、片付ける前に写真を残しておく理由、怪我や感染を防ぐ装備、泥や水を含んだ家財の扱い、乾燥とカビ対策、そして災害廃棄物の出し方や支援の枠組みまでを順に整理します。なお、制度の対象・条件・期限や廃棄物の受け入れ方法は自治体と災害の状況によって異なりますので、必ずお住まいの市区町村の窓口でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>片付けの前に、建物と電気・ガス・水道の安全確認。浸水した機器の通電は自己判断で行わない</li>
          <li>作業前に被害の状況を日付の分かる形で撮影する。り災証明などの手続きで説明の材料になる</li>
          <li>厚手のゴム手袋・底の厚い靴・長袖長ズボン・粉じん用マスクをそろえてから作業を始める</li>
          <li>災害廃棄物の出し方や支援制度の対象・条件・期限は自治体と状況により異なる。必ず窓口で確認</li>
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

      <H2 id="kiso" num="1">片付けを始める前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        被災後の片付けは、平時の片付けとは順番が違います。掃除や整理よりも先に、安全の確認と記録があります。ここを飛ばすと、危険が残ったまま作業することになり、後の手続きでも困ることになります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">安全に作業するための3つの備え</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        被災後の家屋は、平時にはない危険が同時に存在する場所です。装備、時間配分、ルールの確認。この三つを整えてから作業に入ることで、二次的な被害を避けられます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">支援の枠組みと相談先の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        災害後には、被害を受けた住宅や世帯を対象とした支援の仕組みが用意されるのが一般的です。被害の状況を証明するり災証明書のような書類、災害廃棄物の受け入れ、住まいや生活の再建に関する相談の窓口などがその例です。ただし、どの仕組みが利用できるか、対象となる条件は何か、いつまでに申請すればよいかは、災害の規模や地域、そのときの判断によって異なります。この記事では枠組みの一般的な説明にとどめますので、具体的な内容については、必ずお住まいの市区町村の窓口や公式の案内でご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        情報の入手先としては、自治体の広報、公式サイト、避難所や窓口での掲示などがあります。混乱している時期には、真偽の分からない情報が流れることもありますので、手続きに関わることは公式の案内で確認する習慣をつけてください。また、加入している保険がある場合は、契約している保険会社や代理店にも早めに連絡し、必要な手続きや書類を確認しておくとよいでしょう。人手が足りない場合、地域によっては災害ボランティアの受け入れが行われることがあります。受け入れの有無や依頼の方法は、自治体や社会福祉協議会の案内でご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付けの実務については、乾燥とカビ対策が長期的にもっとも影響します。表面だけを拭いて片付いたように見えても、床下や壁の内部に水分が残っていれば、数週間後にカビやにおいとして現れます。カビが広がった場合の対処は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビの清掃</Link>、においが残る場合の切り分けは<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭</Link>で手順を扱っています。ただし、被災住宅の乾燥は範囲が広く、床下や壁の内部の判断には専門的な確認が必要になることが多い作業です。自力での対処に限界を感じたら、早めに専門の事業者へ相談してください。
      </p>

      <H2 id="steps" num="4">片付けを進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、安全確認→記録→運び出し→泥の除去と乾燥→消毒とカビ対策、の5ステップです。順番を入れ替えないことが、安全にも手続きにも効いてきます。
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
        <h3 className="font-bold text-text-primary mb-2">制度・廃棄物の受け入れは、必ず自治体の窓口で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          災害廃棄物の仮置き場の場所、分別の区分、搬入できる期間、受け付ける品目、そしてり災証明書などの手続きの対象・条件・申請期限は、自治体と災害の状況によって異なります。本記事では枠組みの一般的な説明にとどめており、個別の内容についてお答えすることはできません。市区町村の広報や公式サイト、窓口で最新の案内をご確認ください。あわせて、加入している保険がある場合は保険会社や代理店にも早めにご連絡ください。また、災害に便乗した不当な勧誘や契約のトラブルが心配なときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家財の処分については、平時とは異なる案内が出ることがあります。冷蔵庫・洗濯機・エアコン・テレビは通常であれば家電リサイクル法の対象ですが、災害時には受け入れ方法が変わる場合があります。制度の枠組みは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分</Link>で扱っていますが、実際の出し方は自治体の案内に従ってください。大型の家具の搬出については<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>、分別に迷う品目の調べ方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>が参考になります。落ち着いた後の備えの見直しは<Link href="/bousai-bichiku-katazuke/" className="text-primary underline underline-offset-2">防災備蓄と片付けの両立</Link>で扱っています。
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
        被災後の片付けは、体力的にも精神的にも負担が大きく、無理を重ねると体調を崩します。次のような状況では、片付け・清掃業者への依頼を検討してください。対応できる業者は<Link href="/area/hiroshima/" className="text-primary underline underline-offset-2">広島の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・作業内容・地域により異なるため、複数社を比べるのが確実です。災害後は問い合わせが集中し、日程が取りにくくなることがあります。あわせて、災害に便乗した不当な勧誘や、その場での契約を求める働きかけには注意し、書面の見積もりを受け取ってから判断してください。不安を感じたときは消費者ホットライン188に相談できます。依頼先の候補は<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で特徴を比較できます。回収をめぐる注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。り災証明書をはじめとする支援の仕組みの対象・条件・申請期限、災害廃棄物の受け入れ方法・仮置き場・分別区分・搬入期間は、自治体および災害の状況により異なりますので、必ずお住まいの市区町村の窓口や公式の案内でご確認ください。建物の安全性、電気・ガス・水道の復旧、浸水した機器の使用可否については、専門の事業者や各事業者の案内に従ってください。業者へ依頼する際の料金は作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
