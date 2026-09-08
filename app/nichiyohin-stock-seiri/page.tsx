import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/nichiyohin-stock-seiri/";
const TITLE = "日用品ストックの整理｜洗剤・紙製品・消耗品の買いすぎを止める上限の決め方と置き場所";
const DESC =
  "洗剤やシャンプーの詰め替え、トイレットペーパーやティッシュの束、歯ブラシやスポンジ、ラップやごみ袋。安売りのたびに買い足した日用品のストックは、家のあちこちに分散して、同じ物をまた買う原因になります。日用品のストックが増える理由、家中から集めて総量を見る手順、種類ごとの上限の決め方、置き場所を一か所にまとめる考え方、古くなった物や使い切れない物の手放し方、買い足すときのルールまでを順に解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「安いときに買っておく」が、上限のないまま繰り返される",
    body: "洗剤やトイレットペーパー、ティッシュ、ごみ袋は、いつか必ず使う物です。そのため「安いときに買っておけば損はない」という判断が働きやすく、特売やまとめ買いのたびに買い足されます。問題は、買うときの判断に「今いくつ持っているか」が含まれていないことです。持っている数を確認せずに買い足すと、ストックの量は買い物の回数に比例して増え続け、使う速度を追い越します。日用品のストックが増えるのは、意志の弱さではなく、上限を決めていないという仕組みの問題です。",
  },
  {
    title: "置き場所が分散していて、総量が見えない",
    body: "日用品のストックは、洗面所の下、トイレの棚、押し入れの一角、キッチンのシンク下、玄関の収納、買ってきた袋のままの廊下など、家の複数の場所に分かれて置かれていることがほとんどです。それぞれの場所では「少し」に見えても、集めると想像より多いことが珍しくありません。総量が見えないと、「もうないかもしれない」という不安から同じ物をまた買い、その結果、同じ種類のストックが複数の場所に重なっていきます。",
  },
  {
    title: "「腐らない物」という安心感が、見直しの機会を失わせる",
    body: "食品と違って日用品には賞味期限のような分かりやすい期限がないため、「いつか使えるから置いておけばよい」と考えられ、見直しの対象になりにくい品目です。しかし、洗剤や柔軟剤は時間がたつと分離したり香りが変わったりすることがあり、スポンジや紙製品は湿気やほこりで劣化します。詰め替え用を買ったのに本体の容器を捨ててしまった、機種が変わって使えなくなったフィルター、もう使っていない家電の消耗品など、「使えるはずの物」が実際には使えなくなっていることも多くあります。",
  },
];

const merits = [
  {
    title: "決めごと1：ストックの「上限」を種類ごとに決める",
    body: "整理を始める前に、種類ごとに「いくつまで持つか」の上限を決めます。目安は「次の買い物までに使い切らない程度の予備が一つか二つ」で、家族の人数や買い物の頻度によって調整します。たとえば、洗濯洗剤の詰め替えは一袋、トイレットペーパーは一パック、歯ブラシは家族の人数分、のように具体的な数で決めるのがポイントです。上限が決まると、買い物のときに「まだ上限に達していないか」で判断でき、なんとなく買い足すことが減ります。",
  },
  {
    title: "決めごと2：置き場所を「一種類につき一か所」にまとめる",
    body: "ストックが分散していると総量が見えず、上限を決めても機能しません。「洗剤類は洗面所の下」「紙製品は押し入れの下段」「キッチン用の消耗品はシンク下」のように、種類ごとに置き場所を一か所に決めます。使う場所の近くに置くのが基本ですが、置ききれない場合は、使う場所に一つだけ置き、残りはまとめて別の一か所に置く二段構えにします。大切なのは、どこに何がいくつあるかを、家族の誰もが分かる状態にすることです。",
  },
  {
    title: "決めごと3：「使わない物」を手放す基準を先に決める",
    body: "整理の途中で「これはどうしよう」と一つひとつ迷うと、作業が止まります。始める前に、手放す基準を決めておきます。使っていない家電や機種の消耗品、本体を持っていない詰め替え、においや色が変わった洗剤、湿気を含んだ紙製品、家族の誰も使わない香りのシャンプーなどは、手放す候補です。未開封で状態のよい物は、譲る、寄付の受け入れ先を探すという選択肢もあります。手放し方は種類によって異なるため、迷う物は「保留」の箱に入れて、あとでまとめて確認します。",
  },
];

const steps = [
  {
    title: "家中のストックを一か所に集めて、種類ごとに並べる",
    body: "洗面所、トイレ、押し入れ、キッチン、玄関、廊下の袋、車の中まで、ストックが置かれている場所をすべて確認し、一か所に集めます。集めたら「洗濯用」「浴室用」「トイレ用」「キッチン用」「掃除用」「紙製品」「衛生用品」「その他」のように、種類ごとに並べます。この段階で数を数え、種類ごとの総量を確認します。集めてみると、同じ物が複数の場所から出てくることが多く、それが買いすぎの原因を目で見て理解する機会になります。量が多い場合は、洗面所だけ、キッチンだけと場所を区切って進めても構いません。",
  },
  {
    title: "「使う」「保留」「手放す」に分ける",
    body: "並べたストックを、今の暮らしで使う物、判断に迷う物、手放す物の三つに分けます。使う物は、開封済みの物と未開封の物を分けておくと、次の手順で置き場所を決めやすくなります。手放す物は、決めごとで定めた基準に沿って、迷わず分けます。使っていない家電の消耗品、本体のない詰め替え、状態の変わった洗剤、家族の誰も使わない物が該当します。保留は、いつまでに決めるかを決めて箱にまとめ、期限が来たら「使う」か「手放す」かを判断します。保留のまま置き続けると、それがまた新しいストックの山になります。",
  },
  {
    title: "種類ごとに上限を当てはめ、超えた分の使い切り計画を立てる",
    body: "「使う」に分けた物に、決めごとで定めた上限を当てはめます。上限を超えている種類は、超えた分を使い切るまで買い足さないと決め、買い物のリストから外します。使い切るのに時間がかかる物は、家族で使う場所を分ける、実家や親族に譲るなどの方法もあります。上限を超えている種類が多いほど、しばらくは買い物が減り、家計にも余裕が生まれます。同じ種類でも香りや型が違う物が複数ある場合は、使い切る順番を決め、開封済みの物から先に使います。",
  },
  {
    title: "置き場所を一種類一か所に決め、開封済みを手前に置く",
    body: "残すストックを、決めごとで定めた置き場所に戻します。使う場所の近くに一か所、置ききれない分はまとめて一か所、という二段構えにし、使う場所には開封済みの物と予備を一つだけ置きます。棚に戻すときは、開封済みや古い物を手前、新しい物を奥にして、手前から使う流れを作ります。ラベルや箱の仕切りは、空き箱や紙の箱で十分です。収納用品を新しく買う前に、まず量を減らして、必要な入れ物の大きさが分かってから考えます。",
  },
  {
    title: "手放す物を種類ごとに出し、買い足すときのルールを決める",
    body: "手放すと決めた物は、中身と容器を分けて出す必要があるかどうかを確認します。洗剤や液体の中身の扱い、スプレー缶、電池を使う小型の消耗品などは、出し方が自治体によって異なるため、まとめて出す前にお住まいの市区町村の分別案内で確認してください。未開封の物は、譲る先や寄付の受け入れ先を探す方法もあります。最後に、買い足すときのルールを決めます。「置き場所を見てから買う」「上限に達している物は買わない」「特売でも一つまで」など、家族で共有できる短いルールにしておくと、再び増えることを防げます。",
  },
];

const ngActions = [
  {
    title: "ストックの量を減らす前に、収納ケースを買い足す",
    body: "ストックが多いから収納が足りない、と考えて収納ケースや棚を買い足すと、そこに合わせて物を持ち続けてしまい、結局は減りません。まず家中から集めて総量を見て、上限を決めて減らし、残す量が分かってから入れ物を考えます。空き箱や紙の箱で仕切るだけで十分なことがほとんどです。収納を増やすほど片付かなくなる構造は、関連記事で扱っています。",
  },
  {
    title: "液体の洗剤や漂白剤を、まとめて排水口に流す",
    body: "使わない洗剤や漂白剤、柔軟剤などを一度に大量に排水口へ流すのは避けてください。種類によっては混ぜると有害な気体が発生することがあり、配管や環境への影響もあります。中身の残った洗剤の出し方は自治体によって異なりますので、お住まいの市区町村の分別案内で確認してから進めてください。中身の分からない液体は、無理に扱わず、ラベルの表示や自治体の窓口で確認します。",
  },
  {
    title: "「安いから」で上限を超えて買い足す",
    body: "特売やまとめ買いの割引は、上限を超えて買えば、置き場所と管理の負担に変わります。使い切るまでの期間が長くなるほど、劣化や状態の変化で使えなくなる可能性も高くなります。買うときは「今いくつあるか」「上限に達していないか」を確認してからにし、確認できないときは買わない、と決めておくと迷いません。",
  },
  {
    title: "家族の使っている物を、本人に確認せずに手放す",
    body: "家族それぞれが選んだシャンプーや洗剤、歯ブラシなどは、本人にとっては「使う物」であることが多く、確認せずに手放すと、片付けそのものへの協力が得られなくなります。共有のストックは基準を家族で決め、個人の物は本人に判断してもらいます。実家のストックを整理する場合は、親の生活習慣を尊重し、本人と一緒に確認しながら進めてください。",
  },
];

const judgeSigns = [
  "ストックだけでなく、部屋全体に物があふれて床や通路が使えない",
  "何年も前のストックが大量にあり、状態の確認だけで手が止まっている",
  "実家や故人の家に、開封していない日用品が部屋を埋めるほど残っている",
  "体調や時間の都合で、集めて分けて戻すまでを一人で進められない",
  "液体や中身の分からない容器が多く、出し方の確認に不安がある",
];

const faqs = [
  {
    q: "日用品のストックは、種類ごとにいくつ持てば十分ですか？",
    a: "家族の人数や買い物の頻度によって異なりますが、「次の買い物までに使い切らない程度の予備が一つか二つ」が一つの目安です。数で決めるのがポイントで、洗剤の詰め替えは一袋、トイレットペーパーは一パック、というように種類ごとに上限を定めます。上限は暮らしに合わせて見直して構いません。大切なのは、上限を決めて家族で共有し、買い物の前に置き場所を見る習慣にすることです。",
  },
  {
    q: "古くなった洗剤やシャンプーは、どう手放せばよいですか？",
    a: "中身と容器の扱いは自治体によって異なります。中身を紙に染み込ませて出す、少量ずつ流す、特定の区分で出すなど、案内は地域ごとに違いますので、お住まいの市区町村の分別案内で確認してから進めてください。異なる種類の洗剤や漂白剤を混ぜないこと、一度に大量に排水口へ流さないことは共通の注意点です。未開封で状態のよい物は、譲る、寄付先を探すという方法もあります。",
  },
  {
    q: "実家に日用品のストックが大量にあります。どう進めればよいですか？",
    a: "高齢の親がストックを多く持つのは、買い物に出られなくなる不安や、同じ物を買ったことを忘れるなど、暮らしの事情によることが多くあります。頭ごなしに減らそうとせず、まず一緒に集めて数を確認し、「これだけあれば当分は大丈夫」という安心を共有してから、上限と置き場所を決めます。親の家の片付けの進め方や声かけは、関連記事の実家の片付け、親の説得の記事で扱っています。",
  },
  {
    q: "防災用の備蓄と、日用品のストックは分けて考えるべきですか？",
    a: "分けて考えるのが基本です。防災備蓄は「使わずに置いておく物」、日用品のストックは「日常で使いながら回す物」で、目的が違います。ただし、トイレットペーパーやごみ袋、ウェットティッシュなどは両方に関わるため、日常のストックの上限に「備蓄として持つ分」を含めて考えると、二重に持つことを防げます。備蓄の置き場所の考え方は、防災備蓄と片付けの両立の記事を参考にしてください。",
  },
];

const related = [
  { href: "/kaimono-fukuro-stock/", label: "紙袋・包装材・空き箱のストック整理", desc: "ためこんだ包装材の上限の決め方" },
  { href: "/bousai-bichiku-katazuke/", label: "防災備蓄と片付けの両立", desc: "備蓄の置き場所を確保する方法" },
  { href: "/kusuri-keshouhin-shobun/", label: "古い薬・化粧品の処分", desc: "使いかけの物を安全に手放す方法" },
  { href: "/ofuro-senmenjo-katazuke/", label: "浴室・洗面所まわりの片付け", desc: "物を減らしてから掃除に入る順番" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "収納を増やすほど片付かない理由" },
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
    { "@type": "ListItem", position: 2, name: "日用品ストックの整理" },
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
    { href: "#kiso", label: "1｜日用品のストックが増え続ける3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「集めて総量を見る」「上限を決める」が基本" },
    { href: "#steps", label: "4｜日用品ストックを整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "日用品ストックの整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          日用品ストックの整理｜洗剤・紙製品・消耗品の買いすぎを止める上限の決め方と置き場所
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          洗面所の下に積まれた洗剤の詰め替え、トイレの棚に入りきらないトイレットペーパー、押し入れの隅のティッシュの束、買ってきた袋のまま廊下に置かれたごみ袋やスポンジ。日用品のストックは、一つひとつは必要な物でも、置き場所が分散したまま買い足され続けると、家の収納を圧迫し、「同じ物をまた買ってしまった」という無駄を生みます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、日用品のストックが増える理由、家中から集めて総量を見る手順、種類ごとの上限の決め方、置き場所を一種類一か所にまとめる考え方、古くなった物や使えなくなった物の手放し方、買い足すときのルールまでを順に解説します。食品や薬、防災備蓄は別の記事で扱っており、本記事は「日常で使いながら回す消耗品」に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>まず家中のストックを一か所に集め、種類ごとに数えて総量を直視する</li>
          <li>種類ごとに「いくつまで持つか」の上限を数で決め、超えた分は使い切るまで買わない</li>
          <li>置き場所は一種類一か所。使う場所に予備を一つ、残りはまとめて一か所の二段構えにする</li>
          <li>洗剤や液体の中身は排水口にまとめて流さず、出し方は自治体の分別案内で確認する</li>
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

      <H2 id="kiso" num="1">日用品のストックが増え続ける3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        必要な物のはずなのに、なぜ収納からあふれるのか。買い方と置き方の構造を知ると、減らす方法が見えてきます。
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
        上限、置き場所、手放す基準。この三つを先に決めておくと、集めたあとの作業で迷いません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「集めて総量を見る」「上限を決める」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        日用品のストックの整理は、「減らす」ことよりも「これ以上増やさない仕組みを作る」ことが目的です。そのために欠かせないのが、家中から集めて総量を目で見ることと、種類ごとに上限を決めることの二つです。分散したまま一か所だけ整理しても、別の場所に同じ物が残っていれば総量は減らず、上限も機能しません。逆に、総量が見えて上限が決まれば、買い物のたびに「まだ上限に達していないか」で判断でき、なんとなく買い足すことが自然に減っていきます。上限は厳密である必要はなく、暮らしの変化に合わせて見直して構いません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        日用品のストックは、家全体の片付けの中では「小物」の段階にあたり、大きい物や床の物が片付いてから取り組むと効果が見えやすくなります。家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>、洗面所や浴室に置かれた物を減らしてから掃除に入る流れは<Link href="/ofuro-senmenjo-katazuke/" className="text-primary underline underline-offset-2">浴室・洗面所まわりの片付け</Link>、押し入れの下段にストックが積まれている場合は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>で扱っています。紙袋や空き箱のように「いつか使う」で増える物の上限の決め方は<Link href="/kaimono-fukuro-stock/" className="text-primary underline underline-offset-2">紙袋・包装材・空き箱のストック整理</Link>と共通する考え方です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        日用品のストックと似ているようで別に考えたい物が二つあります。一つは防災用の備蓄で、こちらは「使わずに置いておく物」なので、日常のストックとは目的が異なります。両立の考え方は<Link href="/bousai-bichiku-katazuke/" className="text-primary underline underline-offset-2">防災備蓄と片付けの両立</Link>で扱っています。もう一つは薬や化粧品で、服用や使用の可否の判断が関わるため、<Link href="/kusuri-keshouhin-shobun/" className="text-primary underline underline-offset-2">古い薬・化粧品の処分方法</Link>を別に参照してください。中身を減らす前に収納ケースを買い足すと逆効果になる理由は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">日用品ストックを整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集める→3つに分ける→上限を当てはめる→置き場所を決める→手放してルールを決める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">洗剤・液体・スプレー缶・容器の出し方は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          中身の残った洗剤や漂白剤、柔軟剤などの液体の扱い、スプレー缶の出し方、プラスチックや紙の容器の分別区分は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。異なる種類の洗剤や漂白剤を混ぜないこと、一度に大量の液体を排水口に流さないことは、地域を問わず共通の注意点です。中身の分からない容器は、ラベルの表示を確認し、分からなければ無理に扱わず窓口に相談してください。分別に迷いやすい品目の一般的な考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">スプレー缶・電池など分別が難しいごみの捨て方</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        実家や離れて暮らす親の家に日用品のストックが大量にある場合は、本人の不安や生活習慣に配慮しながら進める必要があります。親の家の片付けの段取りは<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、物を手放したがらない親への声かけは<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親に片付けを促す声かけ</Link>、離れて暮らす単身の高齢者の住まいの見守りは<Link href="/tanshin-koureisha-mimamori/" className="text-primary underline underline-offset-2">高齢の一人暮らしの見守りと片付け</Link>で扱っています。手放す物の量が多い場合は、品目と数を書き出しておくと、譲る先や業者に相談するときに話が早く進みます。書き出し方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>を参考にしてください。
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
        日用品のストックの整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、液体の洗剤や中身の分からない容器は、引き受けられる範囲が事業者によって異なります。見積もりの段階で、扱えない品目があるかどうかを確認しておくと、当日に残されることを防げます。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。洗剤・漂白剤・柔軟剤などの液体、スプレー缶、プラスチックや紙の容器、電池を使う小型の消耗品の分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。自治体で収集しない品目は、購入した販売店やメーカーの案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
