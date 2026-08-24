import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/pet-ihin-seiri/";
const TITLE = "ペットの遺品整理の進め方｜使っていた物の残し方と気持ちの整理";
const DESC =
  "見送ったペットが使っていたケージ・ベッド・食器・首輪・薬やフードを、どう扱えばよいのか迷う方に向けた記事です。急いで片付けなくてよいという前提から、残す物を少数決める考え方、衛生面の配慮、写真や毛のメモリアルの残し方、譲渡や寄付という選択肢、家族で気持ちが違うときの進め方までを整理して解説します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "急いで片付けなくてよい、という前提から始める",
    body: "ペットを見送ったあと、部屋に残った物をどうするかは、誰にとっても簡単に決められることではありません。周囲から「片付けたほうが気持ちの整理がつく」と言われることもありますが、整理の速さと回復の速さは同じものではありません。まだ手をつけられないと感じるなら、その状態のまま時間を置いて構いません。片付けは、期限のある手続きではありません。自分が触れられるようになったときに、触れられる物から少しずつ動かしていく。その進め方でまったく問題ありません。この記事も、急ぐための手順書としてではなく、いつか手をつけるときの見取り図として読んでいただければと思います。",
  },
  {
    title: "物が残っていることは、悲しみが長引く原因ではない",
    body: "使っていたベッドや食器がそのままになっていると、見るたびに思い出してつらい、という声はよく聞かれます。一方で、片付けてしまったら忘れてしまいそうで怖い、という気持ちも同じくらいよくあります。この二つはどちらも自然な感情で、どちらかが正しいわけではありません。物を残すことも、手放すことも、その子を大切に思う気持ちとは矛盾しません。整理の目的は、悲しみを終わらせることではなく、自分と家族が暮らしやすい状態に部屋を戻していくことです。目的をそこに置くと、判断が少し軽くなります。",
  },
  {
    title: "衛生面だけは、時期を問わず確認しておきたい",
    body: "気持ちの面では急ぐ必要がありませんが、衛生の面では早めに見ておきたい物があります。開封したフード、療法食、水を入れたままの食器、トイレシートや猫砂、使用済みのタオルや毛布などは、時間が経つと臭いや虫の発生につながることがあります。これらは思い出の品というより消耗品にあたるものが多く、比較的判断しやすい範囲です。手をつけられる範囲として、まずここだけを片付けるという始め方もあります。ケージや首輪といった、心が動く物はそのまま残しておいて構いません。",
  },
];

const merits = [
  {
    title: "考え方1：全部残すか、全部手放すかで考えない",
    body: "整理が止まってしまう大きな理由は、選択肢が二つしかないと感じてしまうことです。すべて残せば部屋は元に戻りませんし、すべて手放すのは気持ちが追いつきません。実際には、その間にいくつも段階があります。残す、当面そのままにする、写真に撮ってから手放す、洗って人に譲る、思い出として一部だけ切り取って保管する。こうした選択肢を先に並べておくと、一つひとつの物について「どれにするか」を選ぶだけの作業になります。二択で悩み続けるより、選択肢を増やしたほうが前に進みやすくなります。",
  },
  {
    title: "考え方2：残す物は「数を決めてから」選ぶ",
    body: "思い出の品は、選び始めるとどれも大切に思えて、結果的にほとんど手元に残ることがあります。それ自体が悪いわけではありませんが、収納の場所が決まらないまま増えていくと、結局しまい込んで見返せなくなります。おすすめは、先に「この箱に入るだけ」「この棚のこの段だけ」と場所を決めて、その中に収まる数を選ぶ方法です。数を決めてから選ぶと、どれを残すかを比べる作業になり、判断がしやすくなります。入りきらなかった物は、写真に残してから手放すという段階を挟むこともできます。",
  },
  {
    title: "考え方3：手放し方にも順番と段階がある",
    body: "手放すと決めた物も、いきなり捨てる以外の道があります。状態のよい物は洗って人に譲る、受け入れている団体に寄付する、素材によっては通常のごみとして自治体の分別に従って出す、といった方法があります。どの方法を選ぶかで、気持ちの納まり方も変わります。誰かの役に立つと思えるほうが手放しやすい人もいれば、他の子に使われるのは考えたくないという人もいます。どちらの感じ方も尊重されるべきもので、自分がどちらなのかを確かめてから方法を選ぶと、後悔が残りにくくなります。",
  },
];

const steps = [
  {
    title: "手をつけられる日を待ち、消耗品から小さく始める",
    body: "最初の一歩は、思い出の品ではなく消耗品からにすると負担が軽くなります。開封済みのフード、使いかけのトイレシートや猫砂、汚れたタオル、期限のあるおやつなど、判断に迷いが少ない物から手を動かします。これだけでも部屋の印象は変わり、臭いの原因が減ります。全部を一日で終わらせようとせず、今日はこの棚だけ、この袋一つ分だけ、と範囲を区切ってください。途中で手が止まったら、そこでやめて構いません。再開できる日はまた来ます。",
  },
  {
    title: "品目ごとに、残す・保留・手放すの三つに分ける",
    body: "ケージ、ベッド、キャリー、食器、トイレ、首輪やハーネス、おもちゃ、洋服、薬、フード。品目ごとにまとめてから、残す・保留・手放すの三つに分けていきます。ここで大切なのは、迷った物を無理に決めないことです。判断できない物は保留の箱に入れて、そのまま置いておきます。保留があることを前提にすると、作業が止まりません。一度に全部を決めなくてよい仕組みにしておくことが、途中で挫折しないための鍵になります。",
  },
  {
    title: "残す物の置き場所を先に用意する",
    body: "残すと決めた物は、しまう場所を決めてから入れます。箱を一つ用意し、そこに首輪や名札、お気に入りだったおもちゃ、写真などを収めていく形が扱いやすいでしょう。箱に日付や名前を書いておくと、後から家族の誰が見てもわかります。大きなケージやベッドをそのまま残す場合は、部屋のどこに置くのかを決め、置き続けることが暮らしの負担にならないかを確かめてください。負担になるようであれば、一部だけを切り取って残すという方法もあります。",
  },
  {
    title: "手放す物は、洗って乾かしてから行き先を考える",
    body: "人に譲る、寄付するといった方法を考えている場合は、洗える物は洗い、しっかり乾かしてからにします。毛や汚れが残ったままだと、受け取る側が扱いに困ります。感染症の治療をしていた場合や、皮膚の症状があった場合は、譲渡や寄付が適さないこともありますので、かかりつけの動物病院に相談してから判断してください。ごみとして出す場合は、素材や大きさによって出し方が変わります。自治体の分別の案内で確認し、大きな物は事前の申し込みが必要なことがあります。",
  },
  {
    title: "保留の箱は、期限を決めずに置いておく",
    body: "保留にした物は、いつまでに決めると期限を切らなくて構いません。半年後にふと見返して、そのときの気持ちで決めれば十分です。ただ、箱がいくつも増えて置き場所が分からなくなると、それ自体が気になり続けてしまいます。保留は一箱、多くても二箱までにして、置く場所を決めておくとよいでしょう。時間が経つと、当時は手放せなかった物が、意外とすんなり決められるようになることがあります。決められるようになったときが、その物の整理どきです。",
  },
];

const ngActions = [
  {
    title: "周囲に促されて、気持ちが追いつかないまま一度に処分する",
    body: "「いつまでも置いておくとよくない」「早く忘れたほうがいい」といった言葉は、多くの場合、心配から出たものです。ただ、その言葉に押されて一気に処分してしまうと、あとになって「あれだけは残しておけばよかった」という思いが残ることがあります。手放すかどうかを決めるのは、一緒に暮らしていた本人と家族です。周囲の助言は参考にとどめ、自分たちの気持ちが決まってから動いてください。急いで決めなければならない事情は、通常ありません。",
  },
  {
    title: "残った薬や療法食を、自己判断で他の動物に使う",
    body: "処方された薬や療法食は、その子の体重や状態、診断に合わせて出されたものです。見た目が同じでも、他の動物にそのまま使ってよいとは限りません。まだ残っているからと自己判断で与えることは避け、処方を受けた動物病院に相談してください。使わない薬の扱いについても、病院に持参してよいのか、自治体の案内に従って処分するのかを確認するのが確実です。フードについては、未開封で期限内であれば受け入れている団体もありますが、条件は団体によって異なります。",
  },
  {
    title: "洗浄も確認もせずに、譲渡や寄付に回す",
    body: "使っていたケージやベッド、毛布を必要としている団体や個人はありますが、どの団体でも受け入れているわけではありません。品目、状態、洗浄の有無、持ち込みの方法、受け入れの時期など、条件は団体によって大きく異なります。まず連絡して、いま必要としている物と条件を確認してから持ち込んでください。感染症の治療歴がある場合は、受け入れの可否が変わることがありますので、その点も伝えたうえで判断を仰ぐと行き違いが起きません。",
  },
  {
    title: "家族の誰かの「残したい」を確認せずに手放す",
    body: "同じ家で暮らしていても、その子との関わり方は一人ひとり違います。片方はもう見たくないと感じ、もう片方はそのままにしておきたいと思う。この違いは珍しいことではありません。どちらかの気持ちだけで進めると、後から強いわだかまりが残ることがあります。手放す前に、家族それぞれに「残したい物はあるか」を一度尋ねてください。子どもがいる場合も同じで、大人が知らないうちに大切にしていた物があることがあります。",
  },
];

const judgeSigns = [
  "大型のケージやサークルが自分では運び出せない",
  "飼育していた頭数が多く、用具の量が一人では扱いきれない",
  "退去や引き渡しの期限があり、日程に余裕がない",
  "遠方に住んでいて、現地で作業できる時間が限られている",
  "臭いや汚れが残っており、清掃まで含めた対応が必要",
];

const faqs = [
  {
    q: "ペットの物は、いつから整理し始めるのがよいですか？",
    a: "決まった時期はありません。手をつけられると感じたときからで構いません。ただし、開封済みのフードや使用済みのトイレ用品、濡れたままのタオルなどは、時間が経つと臭いや虫の原因になることがあるため、その範囲だけ先に片付けるという始め方もあります。思い出の品はそのまま残しておいて問題ありません。周囲に促されても、自分と家族の気持ちが決まってから進めてください。",
  },
  {
    q: "ケージやベッドは寄付できますか？",
    a: "受け入れている団体や施設もありますが、条件は団体によって大きく異なります。品目、サイズ、状態、洗浄の有無、持ち込みの方法、受け入れている時期などが定められていることが一般的です。まず連絡し、いま必要としている物を確認してから持ち込んでください。感染症の治療歴がある場合は受け入れの可否が変わることがありますので、その点も伝えて判断を仰ぎます。受け入れ先が見つからない場合は、自治体の分別の案内に従って処分する方法もあります。",
  },
  {
    q: "残った薬やフードはどうすればよいですか？",
    a: "処方された薬は、その子の状態に合わせて出されたものです。他の動物に自己判断で使うことは避け、処方を受けた動物病院に相談してください。残った薬の扱い方についても病院に確認するのが確実です。フードは、未開封で期限内であれば受け入れている団体がある一方、開封済みは受け付けていないところもあります。処分する場合は、中身と容器で分別が変わることがありますので、自治体の分別の案内でご確認ください。",
  },
  {
    q: "供養や火葬について、どこに相談すればよいですか？",
    a: "供養や埋葬、火葬の考え方や進め方は、地域、施設、そしてご家庭の考え方によって異なります。この記事では作法や手続きを一律に示すことはできません。お住まいの自治体の窓口に問い合わせると、地域での取り扱いや相談先を案内してもらえることがあります。民間の施設を利用する場合は、その施設に直接、対応している内容と流れを確認してください。決め方に正解はありませんので、家族が納得できる形を選んでいただければと思います。",
  },
];

const related = [
  { href: "/pet-heya-seisou/", label: "ペットのいる部屋の清掃", desc: "臭い・毛・汚れへの対処" },
  { href: "/ihin-katamiwake-susumekata/", label: "形見分けの進め方", desc: "残す物の決め方と伝え方" },
  { href: "/shashin-album-seiri/", label: "写真とアルバムの整理", desc: "残し方とデータ化の考え方" },
  { href: "/nuigurumi-ningyou-shobun/", label: "ぬいぐるみ・人形の手放し方", desc: "気持ちが残る物の扱い" },
  { href: "/kusuri-keshouhin-shobun/", label: "薬や化粧品の処分", desc: "分別と相談先の確認" },
  { href: "/irui-takuhai-kaitori/", label: "衣類の宅配買取", desc: "布製品を手放す選択肢" },
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
    { "@type": "ListItem", position: 2, name: "ペットの遺品整理の進め方" },
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
    { href: "#kiso", label: "1｜整理を始める前に知っておきたいこと" },
    { href: "#merit", label: "2｜気持ちに沿って進めるための3つの考え方" },
    { href: "#houshin", label: "3｜品目ごとの扱いとメモリアルの残し方" },
    { href: "#steps", label: "4｜ペットの遺品整理を進める5ステップ" },
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

      <Breadcrumb items={[{ label: "ペットの遺品整理の進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ペットの遺品整理の進め方｜使っていた物の残し方と気持ちの整理
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          一緒に暮らしていた子を見送ったあと、部屋にはケージやベッド、食器、首輪、飲みかけの薬、袋の残ったフードが、そのままの形で残ります。見るたびに思い出してつらいのに、片付けようとすると手が止まる。多くの方が、この行ったり来たりのなかにいます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、急いで片付けなくてよいという前提を出発点に、残す物を少数決める考え方、品目ごとの扱い、衛生面で早めに見ておきたいところ、写真や毛をどう残すか、譲渡や寄付という選択肢、そして家族で気持ちが違うときの進め方までを整理します。手をつけられる日が来たときの見取り図として読んでいただければ十分です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>整理に期限はない。手をつけられる日まで、そのままにしておいてよい</li>
          <li>衛生面に関わる消耗品だけは、時期を問わず先に見ておきたい</li>
          <li>残す物は「箱一つ分」など数を決めてから選ぶと判断しやすい</li>
          <li>手放すときは洗って乾かし、譲渡や寄付の条件は団体ごとに確認する</li>
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

      <H2 id="kiso" num="1">整理を始める前に知っておきたいこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        手順に入る前に、進め方の前提を三つ確認しておきます。ここが決まっていると、途中で立ち止まっても戻ってこられます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">気持ちに沿って進めるための3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部か手放すかで考えない、残す数を先に決める、手放し方にも段階がある。この三つを持っておくと、判断が軽くなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">品目ごとの扱いとメモリアルの残し方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        品目によって、判断のしやすさはかなり違います。ケージやサークル、キャリーは場所を取るため、置き続けるかどうかを早めに考えたくなる一方、思い入れも強い物です。使う予定がないのであれば、写真を撮ってから手放す、あるいは扉のプレートや名札だけを残すという方法があります。ベッドや毛布は洗える物が多く、洗ってから残すか手放すかを決めると扱いやすくなります。食器や給水器は消耗品に近く、比較的判断しやすい部類です。トイレ本体や砂、シートは衛生面から早めに整理したい物にあたります。首輪やハーネス、名札は小さくて場所を取らないため、残す物として最初に選ばれることが多い品目です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        薬とフードは、他の物とは扱いを分けて考えてください。処方された薬は、その子の体重や状態に合わせて出されたものですので、残っていても他の動物に自己判断で使わず、処方を受けた動物病院に相談します。未開封で期限内のフードは、受け入れている団体があることもありますが、条件は団体によって異なります。開封済みのフードやおやつは、時間が経つと臭いや虫の原因になりやすいため、早めに扱いを決めたい物です。処分する場合は、中身と容器で分別が変わることがありますので、<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの考え方</Link>や、お住まいの自治体の案内で確認してください。似た判断が必要になる薬の扱いは<Link href="/kusuri-keshouhin-shobun/" className="text-primary underline underline-offset-2">薬や化粧品の処分</Link>でも整理しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物そのものを残さなくても、思い出を手元に置く方法はいくつもあります。よく使っていた場所や寝ていた姿を撮った写真をまとめる、抜けた毛を小さな袋や容器に入れて保管する、足跡や鼻の形を型として残す、名札や首輪を額に収める、といった形です。写真は枚数が多くなりがちなので、選び方や保管の考え方は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真とアルバムの整理</Link>が参考になります。なお、供養や埋葬、火葬の作法や進め方は、地域、施設、そしてご家庭の考え方によって異なります。詳しくは自治体の窓口や、実際に取り扱う施設にご確認ください。部屋に残った毛や臭いへの対処は<Link href="/pet-heya-seisou/" className="text-primary underline underline-offset-2">ペットのいる部屋の清掃</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">ペットの遺品整理を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        消耗品から始める→品目ごとに三つに分ける→残す物の置き場所を決める→手放す物は洗って行き先を考える→保留は期限を切らずに置く。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">供養や譲渡の進め方は、地域と団体によって異なります</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          供養、埋葬、火葬の作法や手続きは、地域、施設、そしてご家庭の考え方によって異なります。本記事では一律の進め方を示すことはできませんので、お住まいの自治体の窓口や、実際に取り扱う施設にご確認ください。用具の譲渡や寄付についても、受け入れている品目、状態、時期といった条件は団体ごとに異なります。持ち込む前に必ず連絡し、いま必要としている物を確認してください。薬や療法食の扱いは、処方を受けた動物病院にご相談ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        整理の途中で、家族それぞれの気持ちの違いが表に出てくることがあります。残したい人と、見たくない人。どちらの感じ方も自然なもので、どちらかを説得する話ではありません。まずはお互いに残したい物を挙げてもらい、それだけは手をつけないと決めてから、残りをどうするか話す順番にすると進みやすくなります。似た場面での話の進め方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">形見分けの進め方</Link>が参考になります。手が止まってしまう時期が長く続く場合の考え方は<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられないときの心理</Link>で整理しています。大型のケージや複数頭分の用具を運び出す必要があるときは、<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>で搬出の考え方を確認できます。
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
        自分たちの手で進めるのが基本ですが、次のような状況では、搬出や清掃だけを依頼するという選び方もあります。対応できる事業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者</Link>などエリア別の記事から探せます。
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
        依頼する場合も、残す物と手放す物を先に自分たちで分けておくと、当日に迷わずに済みます。残す物は別の部屋にまとめておく、あるいは箱に入れて「これは残す」と書いておくと確実です。依頼先を選ぶときは、廃棄物の収集運搬に必要な許可を確認できること、書面で見積もりを出すこと、質問に具体的に答えることを基準にしてください。料金は物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、同じ条件で複数社に見積もりを依頼して比べるのが確実です。候補の比較は<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>のレビューが参考になります。
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
        本記事は一般的な知識の提供を目的としたものです。供養、埋葬、火葬の作法や手続きは、地域・施設・ご家庭の考え方により異なりますので、自治体の窓口や取り扱う施設にご確認ください。薬や療法食の扱いは、処方を受けた動物病院にご相談ください。用具の譲渡や寄付の受け入れ条件は団体ごとに異なりますので、持ち込む前に各団体へご確認ください。ごみとしての出し方や分別は自治体により異なります。片付け・不用品回収の料金は、物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
