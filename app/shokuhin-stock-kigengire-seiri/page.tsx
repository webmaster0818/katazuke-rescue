import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shokuhin-stock-kigengire-seiri/";
const TITLE = "食品ストック・期限切れ食品の整理｜パントリーや棚の奥にたまった食品を見直す手順と手放し方";
const DESC =
  "棚の奥から出てきた何年も前の缶詰、封を開けたまま固まった調味料、賞味期限の切れた乾麺やレトルト、もらったまま忘れていたお菓子や海苔。食品のストックは「食べ物を捨てるのは気が引ける」という気持ちから見直しが先送りされ、棚やパントリーの奥に積み重なります。食品ストックがたまる理由、賞味期限と消費期限の違いを踏まえた分け方、家中から集めて期限と状態で仕分ける手順、中身と容器を分けて出す考え方、買う前に確認する仕組みまでを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「食べ物を捨てるのは気が引ける」が、見直しを先送りにする",
    body: "食品は、他の物と違って「捨てる」ことへの抵抗が特に強い品目です。もったいない、罰が当たりそう、作った人や贈ってくれた人に申し訳ない、という気持ちが働き、期限が切れていることに気付いても、棚に戻してしまいます。しかし、見直しを先送りにするほど、食べられたはずの物が食べられなくなり、結果として捨てる量は増えます。食品を無駄にしないための最も確実な方法は、定期的に棚を見直して、食べられるうちに食べ切ることであり、そのためには一度、今ある量を把握する必要があります。",
  },
  {
    title: "奥に入れた物ほど見えなくなり、同じ物をまた買う",
    body: "食品のストックは、新しく買った物を手前に置き、古い物が奥に押し込まれていく形になりがちです。奥にある物は目に入らないため、「まだあったかどうか思い出せない」状態になり、同じ調味料や乾麺、缶詰をまた買います。買い足した物はさらに手前に置かれ、奥の物はますます見えなくなります。棚の奥、パントリーの下段、冷蔵庫や冷凍庫の奥、床に置いた買い物袋の中など、食品は家の複数の場所に分散していることも多く、家全体でいくつあるのかを把握している人はほとんどいません。",
  },
  {
    title: "もらい物・非常食・まとめ買いは、使う予定がないまま残る",
    body: "贈答品のお菓子や海苔、缶詰の詰め合わせ、旅行の土産、実家から送られてきた食材、災害に備えて買った非常食、特売で買った箱入りの飲料やレトルトなどは、自分で「食べたい」と思って買った物ではないため、日々の食事の中で使われにくく、そのまま残ります。非常食は「いざというときのため」に置いたまま、期限が切れていることに気付かないことも多い品目です。自分で選んで買った物と、それ以外の物を分けて考えるだけで、見直すべき対象がはっきりします。",
  },
];

const merits = [
  {
    title: "決めごと1：賞味期限と消費期限の違いを踏まえて、分ける基準を決める",
    body: "食品の期限には、おいしく食べられる目安を示す期限と、安全に食べられる期限として表示される物があり、製品の表示で区別されています。日持ちのする加工食品に表示されることが多い前者は、期限を過ぎてもすぐに食べられなくなるわけではないと一般に案内されていますが、期限を過ぎた物をどう扱うかは、家庭ごとに基準を決めて構いません。「期限を過ぎた物は手放す」「未開封で期限から間もない物は状態を見て判断する」のように、家族で共有できる基準を先に決めておくと、一つひとつ迷わずに進みます。判断に迷う物や、傷みやすい食品は、安全を優先して手放す側に入れます。",
  },
  {
    title: "決めごと2：食品を置く場所を「パントリー」「冷蔵庫」「非常食」の三つに整理する",
    body: "食品のストックは、常温で保存する物、冷蔵や冷凍で保存する物、災害に備えて置く物の三つに分けて置き場所を決めます。常温の物は棚やパントリーの一か所にまとめ、床置きや買い物袋のままの保管をやめます。非常食は日常のストックと分けて、期限を書いた紙と一緒に一か所に置きます。置き場所を三つに整理すると、それぞれの場所に何がどれだけあるかが見えるようになり、同じ物を二重に買うことが減ります。備蓄の置き方の考え方は防災備蓄と片付けの記事で扱っています。",
  },
  {
    title: "決めごと3：品目ごとに「予備は何個まで」の上限を決める",
    body: "調味料、乾麺、米、缶詰、レトルト、飲料、お菓子など、家で常に置いておく品目を書き出し、それぞれに「使用中のほかに予備は何個まで」という上限を決めます。目安は、買い物の頻度と使い切るまでの期間です。使い切るまでに時間がかかる調味料は予備を持たない、消費の早い米や飲料は予備を一つか二つ、のように品目ごとに決めます。上限は紙に書いて棚に貼るか、スマートフォンのメモに残し、買い物の前に見られるようにしておきます。",
  },
];

const steps = [
  {
    title: "家中の食品ストックを一か所に集め、種類ごとに並べる",
    body: "棚、パントリー、シンク下、吊り戸棚、冷蔵庫と冷凍庫の奥、床に置いた買い物袋、贈答品の箱、非常食の袋など、食品がある場所をすべて確認し、常温の物は一か所に出します。冷蔵や冷凍の物は、一度に全部出すと傷むため、一段ずつ見ていきます。集めたら、調味料、乾物、缶詰、レトルト、麺類、米、粉類、飲料、お菓子、贈答品、非常食のように種類ごとに並べます。並べると、同じ調味料が三本出てきた、缶詰が何年も前の物だった、というように、家にある量と状態が初めて見えます。",
  },
  {
    title: "期限と状態を確認し、「食べる」「早めに食べ切る」「手放す」の3つに分ける",
    body: "一つずつ期限の表示と状態を確認し、期限内で問題なく食べられる物は「食べる」、期限が近い物や開封済みで早く使うべき物は「早めに食べ切る」、期限を過ぎた物、缶が膨らんでいる物、袋が破れている物、変色やにおいの変化がある物、開封したまま固まった物、虫が入っている物は「手放す」に入れます。決めごとで定めた基準に沿って分け、迷う物は安全を優先して手放す側に入れます。「早めに食べ切る」に分けた物は、次の一週間から二週間の献立に組み込む前提で、目につく場所にまとめておきます。",
  },
  {
    title: "手放す食品は、中身と容器を分けて自治体の区分で出す",
    body: "手放すと決めた食品は、中身と容器を分けて出す必要があるかどうかを確認します。缶詰やびん、ペットボトル、紙パック、プラスチックの容器は、中身を出してから容器を資源の区分で出すよう案内されていることが一般的ですが、区分や洗い方の要否は自治体によって異なります。液体の調味料や油は、そのまま排水に流さず、紙や布に吸わせる、固めるなど、自治体の案内に従って処理します。中身の出し方や容器の区分は、お住まいの市区町村の分別案内で確認してください。量が多い場合は、一度に出さず、収集日に合わせて数回に分けて出します。",
  },
  {
    title: "未開封で期限内の食品は、譲る・寄付するという選択肢を考える",
    body: "未開封で期限に余裕があり、食べる予定がない食品は、家族や知人に譲る、食品の寄付を受け付けている団体や活動に持ち込むという選択肢があります。受け入れの品目や期限の条件、常温保存の可否などは団体によって異なり、開封済みや期限が近い物は受け付けていないことが一般的です。持ち込む前に、受け入れの可否と条件を確認してください。贈答品や非常食で、食べる予定がないまま期限が近づいている物は、期限が切れる前に寄付を検討すると、無駄にせずに済みます。",
  },
  {
    title: "残す食品は置き場所を決めて戻し、「古い物を手前」と「買う前に見る」を習慣にする",
    body: "残す食品は、決めごとで整理した三つの置き場所に戻します。棚に戻すときは、期限の古い物や開封済みの物を手前、新しい物を奥に置き、手前から使う流れを作ります。同じ種類の物は一か所にまとめ、上限を書いた紙を棚に貼っておきます。買い物に行く前に棚を見て、上限に空きがある物だけを買う習慣にすると、同じ物を二重に買うことが減ります。非常食は、期限を書いた紙と一緒に置き、期限の前に日常の食事で食べて買い直す、という回し方にすると、期限切れのまま残ることを防げます。見直しは、季節の変わり目など、時期を決めて定期的に行います。",
  },
];

const ngActions = [
  {
    title: "期限を確認せずに、「まだ食べられるはず」で棚に戻す",
    body: "期限や状態を確認せずに棚に戻すと、次に見直すのはさらに先になり、その間に食べられたはずの物が食べられなくなります。缶の膨らみ、袋の破れ、変色、においの変化、開封後の固まりがある物は、期限に関係なく手放してください。判断に迷う物は、安全を優先して手放す側に入れることをおすすめします。",
  },
  {
    title: "油や液体の調味料を、まとめて排水口に流す",
    body: "使い切れない油や液体の調味料を排水口に流すと、配管の詰まりや環境への影響につながることがあります。油は紙や布に吸わせる、固める、自治体の回収に出すなど、液体の調味料は紙に吸わせて出すなど、出し方は自治体によって異なりますので、お住まいの市区町村の分別案内で確認してから処理してください。中身の入った容器をそのまま出さないよう案内されていることも一般的です。",
  },
  {
    title: "非常食を「いざというとき用」と決めたまま、期限を確認しない",
    body: "災害に備えて買った非常食は、置いたまま期限を確認しないと、必要なときに期限が切れていることがあります。非常食は日常のストックと分けて一か所に置き、期限を書いた紙と一緒に管理してください。期限の前に日常の食事で食べて買い直す回し方にすると、期限切れを防げます。備蓄の置き方の考え方は、防災備蓄と片付けの記事で扱っています。",
  },
  {
    title: "家にある量を確認せずに、特売やまとめ買いで買い足す",
    body: "食品は、家にある量を確認せずに買い足すと、使い切る前に期限が来て、結局は捨てることになります。特売で得をした分より、期限切れで捨てた分の損失のほうが大きくなることも珍しくありません。買う前に棚を見て、上限に空きがある物だけを買うようにしてください。まとめ買いをするなら、消費の早い品目に限り、置き場所に入る量までにします。",
  },
];

const judgeSigns = [
  "食品だけでなく、キッチンや部屋全体に物があふれて、床や調理台が使えない",
  "何年も前の食品が大量にあり、虫やにおい、カビが発生している",
  "実家や高齢の親の家で、期限切れの食品が繰り返したまっている",
  "引っ越しや退去の期限があり、食品を含めた家財を短期間で減らす必要がある",
  "体調や時間の都合で、集めて確認して出す作業を自分で進める余裕がない",
];

const faqs = [
  {
    q: "賞味期限が切れた食品は、すぐに捨てなければいけませんか？",
    a: "日持ちのする加工食品に表示される賞味期限は、おいしく食べられる目安として案内されており、期限を過ぎてすぐに食べられなくなるわけではないと一般に説明されています。ただし、期限を過ぎた物をどう扱うかは家庭ごとの判断であり、缶の膨らみ、袋の破れ、変色、においの変化などがある物は期限に関係なく手放してください。判断に迷う物や傷みやすい食品は、安全を優先して手放すことをおすすめします。表示の意味については、製品の表示や公的な案内をご確認ください。",
  },
  {
    q: "中身の入った缶詰やびん、ペットボトルは、どう捨てればよいですか？",
    a: "中身を出してから、容器を資源の区分で出すよう案内されていることが一般的ですが、区分や洗い方の要否、中身の出し方は自治体によって異なります。液体の調味料や油はそのまま排水に流さず、紙や布に吸わせる、固めるなど、自治体の案内に従って処理してください。お住まいの市区町村の分別案内で確認してから出すと、二度手間になりません。",
  },
  {
    q: "食べる予定のない贈答品や非常食は、寄付できますか？",
    a: "未開封で期限に余裕がある常温保存の食品は、食品の寄付を受け付けている団体や活動に持ち込める場合があります。受け入れの品目、期限の条件、持ち込み方法は団体によって異なり、開封済みや期限が近い物は受け付けていないことが一般的です。持ち込む前に、受け入れの可否と条件を確認してください。期限が切れる前に検討することが、無駄にしないためのポイントです。",
  },
  {
    q: "実家の親が同じ食品を何度も買ってしまいます。どう対処すればよいですか？",
    a: "家にある量が見えていないことが原因のことが多く、まず親と一緒に棚から出して量を見ることから始めます。責めるのではなく、「これだけあるから当分は大丈夫」と確認できる状態を作ることが目的です。置き場所を一か所にし、上限を紙に書いて貼っておくと、買い物のときに思い出しやすくなります。買った記憶があいまいになる状態が続く場合は、片付けとは別に、地域の相談窓口に相談する方法もあります。親の家の片付けの進め方は、実家の片付けの記事で扱っています。",
  },
];

const related = [
  { href: "/kitchen-shokki-seiri/", label: "キッチン・食器の整理", desc: "調理器具と食器を減らす基準" },
  { href: "/kitchen-konro-seisou/", label: "キッチン・コンロまわりの清掃", desc: "物を減らしたあとの油汚れの落とし方" },
  { href: "/bousai-bichiku-katazuke/", label: "防災備蓄と片付けの両立", desc: "非常食の置き場所と回し方" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃", desc: "食品まわりに虫が出たときの対処" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
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
    { "@type": "ListItem", position: 2, name: "食品ストック・期限切れ食品の整理" },
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
    { href: "#kiso", label: "1｜食品ストックがたまる3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「集めて見る」「期限と状態で分ける」が基本" },
    { href: "#steps", label: "4｜食品ストックを整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "食品ストック・期限切れ食品の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          食品ストック・期限切れ食品の整理｜パントリーや棚の奥にたまった食品を見直す手順と手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          棚の奥から出てきた何年も前の缶詰、封を開けたまま固まった調味料、賞味期限の切れた乾麺やレトルト、もらったまま忘れていたお菓子や海苔、災害に備えて買ったまま期限を過ぎた非常食。食品のストックは、「食べ物を捨てるのは気が引ける」という気持ちから見直しが先送りされ、棚やパントリー、冷蔵庫の奥に積み重なり、同じ物をまた買う原因になります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、食品のストックがたまる理由、賞味期限と消費期限の違いを踏まえて分ける基準の決め方、家中から集めて期限と状態で仕分ける手順、中身と容器を分けて自治体の区分で出す考え方、未開封の食品を譲る・寄付する選択肢、買う前に確認する仕組みのつくり方を順に解説します。調理器具や食器の整理、コンロまわりの清掃、洗剤などの日用品は、それぞれ別の記事で扱っており、この記事は食品に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>まず家中から食品を集めて量を見る。奥に押し込まれた物ほど見えていない</li>
          <li>期限と状態で「食べる」「早めに食べ切る」「手放す」に分ける。迷う物は安全を優先して手放す</li>
          <li>手放す食品は中身と容器を分ける。油や液体は排水に流さず、自治体の分別案内に従って出す</li>
          <li>置き場所をパントリー・冷蔵庫・非常食の三つに整理し、古い物を手前、買う前に棚を見る習慣にする</li>
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

      <H2 id="kiso" num="1">食品ストックがたまる3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        食べ物を捨てることへの抵抗と、奥に押し込まれて見えなくなる構造。この二つが重なると、食品は静かにたまり続けます。
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
        分ける基準、置き場所、上限。この三つを先に決めておくと、集めたあとに一つひとつ迷わずに進みます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「集めて見る」「期限と状態で分ける」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        食品ストックの整理は、「捨てる」作業ではなく、「食べられるうちに食べ切る仕組みを作る」作業です。そのために最初にやるべきことは、家中から集めて量を見ることと、期限と状態で分けることの二つです。集めて見ると、同じ物が複数あること、奥に古い物が残っていること、もらい物や非常食が使われないまま残っていることが分かります。期限と状態で分けると、今すぐ食べるべき物、しばらく置いておける物、手放すべき物がはっきりします。食品を無駄にしないという目的からも、「捨てる量を減らす」ためにこそ、定期的な見直しが必要になります。期限の表示の意味については、製品の表示や公的な案内を確認し、迷う物は安全を優先して判断してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        食品の整理は、キッチン全体の片付けの中では、調理器具や食器を減らす作業と合わせて進めると効率がよくなります。調理器具と食器の残す基準は<Link href="/kitchen-shokki-seiri/" className="text-primary underline underline-offset-2">キッチン・食器の整理</Link>、物を減らしたあとの油汚れの落とし方は<Link href="/kitchen-konro-seisou/" className="text-primary underline underline-offset-2">キッチン・コンロまわりの清掃</Link>で扱っています。家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しています。古い食品のまわりに虫が発生している場合は、食品の整理と合わせて<Link href="/gaichu-heya-seisou/" className="text-primary underline underline-offset-2">害虫が発生した部屋の清掃</Link>を参考にし、においが残る場合は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭</Link>で原因の切り分けを扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        非常食は、日常のストックと分けて管理する必要があります。同じ場所に置くと日常で食べ切ってしまい、必要なときに残っていないことがある一方、分けて置いたまま期限を確認しないと、期限切れのまま残ります。期限の前に日常の食事で食べて買い直す回し方と、置き場所の考え方は<Link href="/bousai-bichiku-katazuke/" className="text-primary underline underline-offset-2">防災備蓄と片付けの両立</Link>で扱っています。洗剤やトイレットペーパーなど食品以外の消耗品のストックは、判断の基準が異なるため別に扱い、紙袋や空き箱がたまっている場合は<Link href="/kaimono-fukuro-stock/" className="text-primary underline underline-offset-2">紙袋・包装材・空き箱のストック整理</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">食品ストックを整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集めて並べる→期限と状態で3つに分ける→中身と容器を分けて出す→未開封は譲る・寄付を考える→置き場所を決めて戻す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">食品の中身の出し方と容器の区分は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          缶詰、びん、ペットボトル、紙パック、プラスチック容器の分別区分、中身の出し方や洗い方の要否、油や液体の調味料の処理方法は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。期限の表示の意味や食品の安全に関する判断は、製品の表示や公的な案内をご確認ください。寄付の受け入れ条件は団体によって異なりますので、事前にご確認ください。スプレー式の調理用油など分別に迷いやすい品目の一般的な考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">スプレー缶・電池など分別が難しいごみの捨て方</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放す食品の量が多く、自治体の収集だけでは時間がかかる場合や、ほかの不用品と合わせて一度に手放したい場合は、処分の方法を組み合わせて考えます。処分ルートの全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分方法とルートの使い分け</Link>、自治体の収集の枠組みは<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体の粗大ごみ・収集サービスの使い方</Link>で扱っています。実家や高齢の親の家で食品がたまっている場合は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、親に片付けを切り出すときの声かけは<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親を説得する片付けの進め方</Link>を参考にしてください。
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
        食品ストックの整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、今後食べる食品と手放す食品は自分で先に分けておく必要があります。腐敗した食品や液体が大量にある場合は、見積もりの時点で品目と量を伝え、対応できるかを確認してください。虫やにおい、カビが発生している場合は、片付けと合わせて清掃の範囲も確認します。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、清掃をどこまで依頼できるかは<Link href="/oosouji-gyousha-hani/" className="text-primary underline underline-offset-2">大掃除を業者に頼める範囲</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものであり、食品の安全に関する判断を保証するものではありません。期限の表示の意味や食品の安全については、製品の表示や公的な案内をご確認ください。缶詰・びん・ペットボトル・紙パック・プラスチック容器の分別区分、中身の出し方、油や液体の処理方法は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。寄付の受け入れ条件は団体により異なりますので、事前にご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
