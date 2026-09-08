import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/hikidashi-komono-seiri/";
const TITLE = "引き出し・小物の整理｜文房具・ケーブル・充電器がたまる引き出しを片付ける手順";
const DESC =
  "何が入っているか分からない引き出し、用途の分からないケーブルや充電器、書けなくなったペンや切れた電池。引き出しの中の小物は、一つひとつは小さくても、家中の引き出しに分散して積み重なります。引き出しに小物がたまる理由、文房具・ケーブル・充電器・電池を分ける基準、電池や充電式の小物を自治体の区分で出す考え方、一段ずつ進める手順、戻したあとに増やさない仕組みまでを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "引き出しは「とりあえず入れる場所」になりやすい",
    body: "引き出しは、閉めれば中身が見えなくなるため、行き場の決まっていない物を「とりあえず」入れる場所になりがちです。郵便物についてきたクリップ、家電の付属品、もらったボールペン、旅行先の小さな記念品、外した部品など、捨てるほどではないが置き場所もない物が集まります。入れるときは一瞬で済みますが、出すときは中身を確認しなければならないため、入れる速度と出す速度の差で中身が増え続けます。",
  },
  {
    title: "ケーブルや充電器は「何の物か分からなくなる」と手放せない",
    body: "家電やスマートフォンを買い替えるたびに、古いケーブルや充電器、変換の部品が残ります。買い替えた直後は何の物か分かっていても、時間がたつと「どの機器に使う物だったか」が分からなくなり、「必要な物かもしれない」という理由で手放せなくなります。同じ形のケーブルが何本もあるのは、この構造によるもので、珍しいことではありません。今使っている機器と対応させて確認することが、整理の出発点になります。",
  },
  {
    title: "小物は「家中に分散する」ので、一か所だけ片付けても減らない",
    body: "文房具、ケーブル、電池、小さな工具、鍵、印鑑、常備薬などの小物は、リビングの引き出し、寝室のサイドテーブル、玄関の小物入れ、キッチンの端の引き出しと、家の複数の場所に分散しています。一つの引き出しだけを片付けても、別の場所に同じ種類の物が残っていれば、全体としては減りません。種類ごとに家中から集めて、「この種類はここ」と置き場所を一つに決めることで、初めて減らせるようになります。",
  },
];

const merits = [
  {
    title: "決めごと1：引き出しごとに「何を入れる場所か」を決める",
    body: "引き出しの中身が混ざるのは、その引き出しの役割が決まっていないからです。「文房具の引き出し」「充電器とケーブルの引き出し」「薬と衛生用品の引き出し」のように、引き出しごとに入れる物の種類を一つか二つに絞って決めます。役割が決まると、入れるときに「ここではない」と判断でき、混ざりにくくなります。役割を決められない引き出しは、いったん空にして、本当に必要な役割があるかを考え直します。",
  },
  {
    title: "決めごと2：ケーブル・充電器は「今使っている機器」と対応させて残す",
    body: "ケーブルや充電器は、今家にある機器と一つずつ対応させて確認します。対応する機器がある物は残し、機器を手放した物や、何に使うか分からない物は手放す候補にします。同じ規格のケーブルが複数ある場合は、使う場所の数に合わせて残し、残りは手放します。予備として残す場合も、「一種類につき一本まで」のように上限を決めておくと、増え続けることを防げます。",
  },
  {
    title: "決めごと3：電池・充電式の小物は、最初から別にする",
    body: "乾電池、ボタン電池、モバイルバッテリー、充電式の小型機器などは、一般の小物と混ぜて出すと、収集や処理の過程で発熱や発火につながることがあります。整理を始めるときに、電池と充電式の物を入れる容器を一つ用意し、見つけたらそこにまとめます。出し方は自治体によって異なるため、まとめておいて、あとで分別案内を確認してから出します。膨らんでいる、傷があるなど状態に不安がある物は、触れずに自治体や販売店に相談する方法もあります。",
  },
];

const steps = [
  {
    title: "一段の引き出しを選び、中身をすべて出す",
    body: "家中の引き出しを一度に片付けようとせず、まず一段だけを選んで中身をすべて出します。テーブルや床に広げると、何が入っていたかを一目で見渡せます。一段ずつ進めるのは、途中でやめても元に戻しやすく、達成感が得られるからです。最初に選ぶのは、よく使うのに開けにくくなっているリビングやキッチンの引き出しが向いています。時間がない日は一段だけ、余裕がある日は二段、三段と進めます。",
  },
  {
    title: "「使う」「別の場所へ」「手放す」「電池・充電式」の4つに分ける",
    body: "出した物を、この引き出しで使う物、別の場所に置くべき物、手放す物、電池と充電式の物の4つに分けます。書けないペン、乾いた修正液、切れた輪ゴム、用途の分からない部品、期限の切れた割引券などは「手放す」に入れます。何に使うか分からないケーブルや充電器は、いったん「別の場所へ」に入れておき、家中の機器と対応させて確認してから決めます。「電池・充電式」は用意した容器にまとめ、あとで自治体の分別案内を確認します。",
  },
  {
    title: "ケーブル・充電器は、家中から集めて機器と対応させる",
    body: "引き出しの整理が何段か進んだら、家中から集まったケーブルと充電器を一か所に並べ、今使っている機器と一つずつ対応させます。対応する機器がある物は、機器のそばか、充電器の引き出しに置きます。機器を手放した物や、何に使うか分からない物は手放します。同じ規格の物は、使う場所の数に合わせて残し、予備は一本までと決めます。手放すケーブルや充電器の分別区分は自治体によって異なるため、小型家電の回収に出すのか、別の区分なのかを分別案内で確認してください。",
  },
  {
    title: "電池・充電式の物は、自治体の区分を確認してから出す",
    body: "乾電池、ボタン電池、モバイルバッテリー、充電式の小型機器は、それぞれ出し方が自治体によって決められていることが一般的です。乾電池は特定の日に出す、ボタン電池や充電式電池は回収拠点に持ち込む、モバイルバッテリーは販売店の回収を利用するなど、区分は地域によって異なります。品目を書き出して、お住まいの市区町村の分別案内で確認してください。電池を出すときに端子部分を絶縁するよう案内されている場合は、その指示に従います。",
  },
  {
    title: "残す物を種類ごとに仕切って戻し、入れるときのルールを決める",
    body: "残すと決めた物は、種類ごとに仕切りや小さな箱で区切って戻します。仕切りは、空き箱や紙の箱で十分で、新しく収納グッズを買う必要はありません。戻したあとは、「この引き出しに入れるのは文房具だけ」「ケーブルは一種類一本まで」のように、入れるときのルールを決めます。もらったペンや家電の付属品など、新しく入ってくる小物は、引き出しに入れる前に「使うか」を一度判断する習慣にすると、再び混ざることを防げます。",
  },
];

const ngActions = [
  {
    title: "家中の引き出しを一度に全部出して、途中で力尽きる",
    body: "引き出しの整理は、一段ずつ進めるのが基本です。家中の引き出しを一度に出すと、床が小物で埋まり、戻す前に疲れてしまいます。戻せなかった小物が床に残ると、かえって散らかった状態が続きます。一段を出して、分けて、戻すまでを一つの区切りにし、時間に応じて段数を増やす進め方にしてください。",
  },
  {
    title: "電池やモバイルバッテリーを、一般の小物と混ぜて出す",
    body: "乾電池、ボタン電池、モバイルバッテリー、充電式の小型機器を一般のごみに混ぜると、収集や処理の過程で発熱や発火につながることがあります。出し方は自治体によって異なりますので、まとめておいて分別案内を確認してから出してください。膨らんでいる、傷があるなど状態に不安がある物は、無理に扱わず自治体や販売店に相談する方法もあります。",
  },
  {
    title: "「何かに使うかもしれない」で、用途の分からないケーブルを残す",
    body: "何に使うか分からないケーブルや充電器を「いつか必要になるかもしれない」と残すと、引き出しは減りません。今使っている機器と対応させて確認し、対応する機器がない物は手放してください。必要になったときに買い直すほうが、探す時間と場所を考えると負担が小さいことがほとんどです。予備は一種類一本までと決めておきます。",
  },
  {
    title: "中身を減らす前に、仕切りや収納グッズを買い足す",
    body: "引き出しの中の物を減らす前に仕切りや小さなケースを買うと、そこに合わせて物を残してしまい、結局は減りません。まず中身を減らし、残す物の量が分かってから仕切りを考えます。仕切りは空き箱や紙の箱で十分なことが多く、新しく買わなくても整えられます。収納を増やすほど片付かなくなる構造は、関連記事で扱っています。",
  },
];

const judgeSigns = [
  "引き出しだけでなく、部屋全体に小物があふれて床が見えない",
  "何年も開けていない引き出しが多く、中身の判断を一人で進められない",
  "実家や故人の家の引き出しを、まとめて整理しなければならない",
  "引き出しの中から書類や貴重品が出てきて、扱いに迷っている",
  "体調や時間の都合で、少しずつ進める余裕がない",
];

const faqs = [
  {
    q: "使わないケーブルや充電器は、どう処分すればよいですか？",
    a: "ケーブルや充電器の分別区分は自治体によって異なります。小型家電の回収拠点に出せる場合、金属や不燃の区分になる場合、充電器の種類によって扱いが分かれる場合があります。まとめて出す前に、お住まいの市区町村の分別案内で確認してください。充電式の電池が内蔵された物は、電池の扱いも合わせて確認します。",
  },
  {
    q: "ボタン電池やモバイルバッテリーは、普通のごみに出せますか？",
    a: "ボタン電池やモバイルバッテリー、充電式電池は、一般のごみと混ぜると発熱や発火につながることがあり、自治体や販売店の回収に出すよう案内されていることが一般的です。出し方は地域によって異なりますので、お住まいの市区町村の分別案内で確認してください。端子部分を絶縁するよう案内されている場合は、その指示に従ってください。",
  },
  {
    q: "引き出しの中から、古い通帳や印鑑が出てきました。",
    a: "通帳、印鑑、鍵、保険や年金の書類、現金などが出てきた場合は、他の小物と分けて保管し、家族と共有してから扱いを決めてください。故人の物であれば、相続や解約の手続きに関わることがあるため、勝手に処分しないようにします。扱いに迷う場合の考え方は、貴重品が出てきたときの記事や、本・書類の整理の記事で扱っています。",
  },
  {
    q: "片付けても、しばらくするとまた引き出しがいっぱいになります。",
    a: "引き出しの役割が決まっていないと、行き場のない物が再び入ってきます。引き出しごとに入れる物の種類を決め、新しく入れる前に「使うか」を一度判断する習慣にしてください。ケーブルや予備の文房具には「一種類一本まで」のような上限を決めておくと、増える速度が落ちます。それでも続かない場合は、片付けの仕組みそのものを見直す記事も参考になります。",
  },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの捨て方", desc: "スプレー缶・電池などの考え方" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去", desc: "手放す前に確認したいこと" },
  { href: "/kiroku-media-shobun/", label: "記録メディアの処分", desc: "古いメディアの扱いと確認先" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理と処分", desc: "残す書類と手放す書類の分け方" },
  { href: "/kichouhin-genkin-hakken/", label: "貴重品が出てきたら", desc: "保管・記録・相談先の考え方" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "片付いた状態を続ける仕組み" },
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
    { "@type": "ListItem", position: 2, name: "引き出し・小物の整理" },
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
    { href: "#kiso", label: "1｜引き出しに小物がたまる3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「一段ずつ」「種類ごとに集める」が基本" },
    { href: "#steps", label: "4｜引き出し・小物を整理する5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "引き出し・小物の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          引き出し・小物の整理｜文房具・ケーブル・充電器がたまる引き出しを片付ける手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          開けると何が入っているか分からない引き出し、どの機器の物か思い出せないケーブルと充電器、書けなくなったペン、切れた電池、家電の付属品、もらったまま使っていない小さな物。引き出しの中の小物は、一つひとつは小さくても、家中の引き出しに分散して積み重なり、「探し物が見つからない」「同じ物をまた買う」という状態を作ります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、引き出しに小物がたまる理由、引き出しごとに役割を決める考え方、文房具・ケーブル・充電器・電池を分ける基準、電池や充電式の小物を自治体の区分で出す考え方、一段ずつ進める手順、戻したあとに増やさない仕組みを順に解説します。大がかりな片付けではなく、短い時間で一段ずつ進められるように書いています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>引き出しは一段ずつ。出す→4つに分ける→戻すまでを一区切りにする</li>
          <li>ケーブル・充電器は「今使っている機器」と対応させ、対応がない物は手放す。予備は一種類一本まで</li>
          <li>電池・モバイルバッテリー・充電式の小物は最初から別にし、自治体の区分を確認してから出す</li>
          <li>引き出しごとに「何を入れる場所か」を決め、入れる前に「使うか」を一度判断する</li>
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

      <H2 id="kiso" num="1">引き出しに小物がたまる3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        小さな物ほど、なぜ減らないのか。引き出しの性質を知ると、進め方が見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">始める前に決めておきたい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        役割、対応、分ける容器。この三つを先に用意しておくと、一段ずつの作業が短時間で済みます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「一段ずつ」「種類ごとに集める」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        引き出しの整理でつまずきやすいのは、家中の引き出しを一度に出して途中で力尽きることと、一段だけ片付けても別の場所に同じ物が残っていて全体が減らないことの二つです。この二つは矛盾しているように見えますが、進め方を分ければ両立します。作業の単位は「一段ずつ」にして、出す、分ける、戻すまでを一区切りとします。一方で、ケーブルや充電器、電池、文房具のように家中に分散している種類の物は、何段か進んだところで「種類ごとに家中から集めて一か所に置く」という作業を挟みます。一段ずつ進める中で見つけた分散している小物は、いったん「別の場所へ」に分けておき、あとでまとめて対応させます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        引き出しの整理は、家全体の片付けの中では「小物」の段階にあたり、大きい物や床の物が片付いてから取り組むと効果が見えやすくなります。家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>、短い時間で一つの場所を片付ける進め方は<Link href="/obeya-dasshutsu-1day-plan/" className="text-primary underline underline-offset-2">汚部屋脱出の1日プラン</Link>で扱っています。片付けたあとに引き出しが再びいっぱいになる場合は、引き出しの役割が決まっていないことが原因のことが多く、続ける仕組みは<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンドを防ぐ方法</Link>で解説しています。中身を減らす前に仕切りやケースを買い足すと逆効果になる理由は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>を参考にしてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        引き出しの中からは、小物と一緒に書類や貴重品が出てくることがあります。通帳、印鑑、鍵、保険や年金の書類、現金、古い記録メディアなどは、他の小物と分けて保管し、家族と共有してから扱いを決めてください。特に実家や故人の家の引き出しでは、手続きに関わる物が混ざっていることが多いため、勝手に処分しないようにします。扱いに迷う場合の考え方は<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>、書類の残し方は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理と処分方法</Link>、古い記録メディアは<Link href="/kiroku-media-shobun/" className="text-primary underline underline-offset-2">記録メディアの処分</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">引き出し・小物を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        一段出す→4つに分ける→ケーブルを機器と対応させる→電池の区分を確認する→仕切って戻す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">電池・充電器・ケーブルの分別区分は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          乾電池、ボタン電池、充電式電池、モバイルバッテリー、充電式の小型機器、ケーブル、充電器の出し方は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。自治体で収集しない品目は、購入した販売店やメーカーの回収の案内を確認する方法もあります。端子の絶縁など、出すときの指示がある場合はそれに従ってください。分別に迷いやすい品目の一般的な考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">スプレー缶・電池など分別が難しいごみの捨て方</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        引き出しから古いスマートフォンや小型の記録機器が出てきた場合は、手放す前にデータの扱いを確認する必要があります。考え方は<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去</Link>で扱っています。薬や化粧品の試供品が引き出しに混ざっている場合は<Link href="/kusuri-keshouhin-shobun/" className="text-primary underline underline-offset-2">古い薬・化粧品の処分方法</Link>、職場から持ち帰った文房具や私物が多い場合は<Link href="/office-shibutsu-seiri/" className="text-primary underline underline-offset-2">オフィスの私物整理</Link>も参考になります。
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

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        引き出しの整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、貴重品や書類、思い出の品は自分で先に取り分けておく必要があります。引き出しの中身は特に、手続きに関わる物が混ざりやすいため、依頼する前に一度目を通しておくと安心です。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。乾電池・ボタン電池・充電式電池・モバイルバッテリー・ケーブル・充電器・小型機器の分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。自治体で収集しない品目は、購入した販売店やメーカーの案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
