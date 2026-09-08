import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kougu-diy-yohin-shobun/";
const TITLE = "工具・DIY用品・塗料の整理と処分｜刃物・電動工具・使いかけの塗料を安全に手放す手順";
const DESC =
  "押し入れやベランダの工具箱に増えた工具、DIYで余った木材や金物、使いかけの塗料やスプレー。何から手を付ければよいか分からず放置されがちな品目です。工具を残す基準、刃物や電動工具のバッテリーの扱い、塗料やスプレー缶を自治体の区分で出す考え方、端材やネジ類の整理、状態のよい工具を売る選択肢までを手順に沿って解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "工具は「一度買うと減らない」性質の物",
    body: "工具は壊れにくく、消耗品と違って使い切ることがありません。家具の組み立てや棚の取り付けのたびに買い足された六角レンチやドライバー、家電に付属していた小さな工具、DIYを始めたときにそろえた電動工具などが、一度も減ることなく工具箱に積み重なっていきます。同じ種類の工具が何本もあるのは、この性質によるもので、珍しいことではありません。整理の出発点は、「今の暮らしで実際に使う工具はどれか」を見極めることです。",
  },
  {
    title: "DIY用品は「余り」と「途中」が残りやすい",
    body: "DIYでは、必要な量より多めに木材やネジ、塗料を買うことが多く、作業が終わったあとに端材や使いかけの塗料、開封済みのネジや接着剤が残ります。次に使うつもりで取っておいても、同じ規格の物が必要になる機会は少なく、結果として「余り」と「途中でやめたまま」の物が押し入れやベランダを占領します。これらは工具と違って劣化するものも多く、放置するほど扱いが難しくなります。",
  },
  {
    title: "塗料・スプレー・刃物・バッテリーは「普通のごみ」とは分けて考える",
    body: "工具やDIY用品の中には、そのまま家庭のごみとして出せない物が含まれています。中身の残った塗料やスプレー缶、カッターやのこぎりなどの刃物、電動工具の充電式バッテリーは、それぞれ自治体で出し方が決められていることが一般的です。区分は自治体によって異なるため、まとめて袋に入れて出す前に、お住まいの市区町村の分別案内で確認する必要があります。本記事では、どの品目を分けて考えるべきかという整理の道筋を示し、具体的な区分は自治体の案内に委ねます。",
  },
];

const merits = [
  {
    title: "確認1：工具を「使う」「予備」「使わない」に分ける基準を決める",
    body: "工具は「この一年で使ったか」「今後一年で使う予定があるか」を基準にすると判断しやすくなります。ドライバーやハンマー、メジャーなど、家の中の小さな修理で使う基本の工具は残し、同じ種類が複数ある場合は状態のよい一本だけを残します。DIYを続ける予定がないなら、専用性の高い電動工具は手放す候補になります。逆に、今後も作業を続けるなら、使う頻度の高い物だけを取り出しやすい場所にまとめます。",
  },
  {
    title: "確認2：塗料・スプレー・バッテリーを先に取り分ける",
    body: "工具箱や棚を整理するとき、まず中身の残った塗料やスプレー缶、電動工具のバッテリー、接着剤や溶剤の類を先に取り分けます。これらは他の不用品と混ぜると、あとで仕分け直しになるだけでなく、保管中の漏れや破損の原因にもなります。取り分けた物は、日の当たらない風通しのよい場所にまとめて置き、処分の区分を確認するまで動かさないようにします。",
  },
  {
    title: "確認3：刃物や先のとがった工具は、けが防止の準備をしてから触る",
    body: "カッターの替え刃、のこぎり、のみ、きり、ドリルの刃などは、整理中に指を切ったり刺したりしやすい物です。作業用の手袋を用意し、刃を出したまま置かないこと、刃物同士を重ねないことを決めてから始めます。手放す場合の出し方は、刃を布や厚紙で包む、袋に「刃物」と書くなど、自治体の指示に従います。整理の途中で小さな子どもが触れない場所に置くことも忘れないようにしてください。",
  },
];

const steps = [
  {
    title: "工具とDIY用品を、置き場所ごとに全部出す",
    body: "押し入れの工具箱、ベランダや物置の棚、玄関の収納、車の中など、工具やDIY用品が分散している場所をすべて確認し、一か所に出します。木材や金属の端材、ネジや釘の小袋、塗料の缶、スプレー、接着剤、テープ類も含めます。分散したまま整理すると、同じ物を別々の場所に残してしまい、結局は減りません。量が多い場合は、「工具」「消耗品」「材料」「塗料類」と大まかに分けながら出すと、次の作業が早くなります。",
  },
  {
    title: "工具を「使う」「予備」「使わない」に分ける",
    body: "取り出した工具を、この一年で使ったか、今後使う予定があるかで分けます。基本の手工具は一式を残し、重複している物は状態のよい一本に絞ります。電動工具は、本体・バッテリー・充電器・付属の刃や先端がそろっているかを確認し、そろっていない物やバッテリーが劣化している物は手放す候補になります。「使わない」に分けた物のうち、状態がよく付属品がそろっている工具は、売るか譲るかを検討できるので、処分する物とは分けておきます。",
  },
  {
    title: "塗料・スプレー・バッテリー・刃物は、自治体の分別区分を確認して出す",
    body: "中身の残った塗料、スプレー缶、電動工具の充電式バッテリー、刃物は、それぞれ出し方が自治体によって決められていることが一般的です。塗料は中身を残したまま出せるか、固めてから出すのか、スプレー缶は穴あけが必要かどうか、バッテリーは回収拠点に持ち込むのか、刃物はどう包むのか。いずれも自治体ごとに異なるため、品目を書き出して、お住まいの市区町村の分別案内で確認してください。自治体で収集しない品目は、購入した販売店やメーカーの案内を確認する方法もあります。",
  },
  {
    title: "端材・ネジ・金物などの材料を、量の上限を決めて整理する",
    body: "木材の端材、余ったネジや釘、金具、テープや接着剤の使いかけは、「次に使うかもしれない」で残りがちです。使う予定が具体的にない物は手放し、残す場合は「箱一つ分まで」のように上限を決めます。端材の出し方は、長さや材質によって区分が変わることがあるため、自治体の案内で確認します。ネジや釘は種類別に小分けにし、ラベルを付けておくと次に探す時間が減ります。固まった接着剤や乾いた塗料は使えないので、残す物には含めません。",
  },
  {
    title: "残す工具の置き場所を一か所に決め、増やすルールを作る",
    body: "残すと決めた工具は、一つの工具箱や棚にまとめ、家の中の複数の場所に分散させないようにします。よく使う基本の工具は取り出しやすい手前に、電動工具や専用工具は奥に置きます。新しく工具を買うときは「同じ種類がないか先に確認する」と決めておくと、重複が減ります。家具に付属してきた小さな工具は、使い終わったらその都度手放すか、一つの袋にまとめる習慣にすると、工具箱の中で迷子になりません。",
  },
];

const ngActions = [
  {
    title: "塗料や溶剤を、排水口や庭の土に流す",
    body: "使いかけの塗料、シンナーなどの溶剤、油性の液体を排水口や庭に流すのは避けてください。配管や環境への影響が大きく、自治体でも出し方が定められているのが一般的です。中身の残った塗料の扱い方は自治体によって異なるため、固める、紙に染み込ませる、回収に出すなどの方法を、お住まいの市区町村の分別案内で確認してから進めてください。",
  },
  {
    title: "スプレー缶を中身の残ったまま、穴あけの要否を確認せずに出す",
    body: "中身の残ったスプレー缶は、収集や処理の過程で破裂や火災の原因になることがあります。中身を使い切る方法、穴あけの要否、出す曜日や区分は自治体によって異なりますので、自己判断で処理せず、自治体の指示に従ってください。中身を出すときは屋外の火気のない場所で行い、室内や車内では作業しないようにします。",
  },
  {
    title: "電動工具のバッテリーを、一般のごみに混ぜる",
    body: "電動工具の充電式バッテリーは、外からの衝撃や圧力で発熱や発火につながることがあります。他のごみに混ぜて出すと、収集車や処理施設での事故の原因になります。バッテリーの回収方法は自治体や販売店によって異なりますので、回収拠点や出し方を確認してから手放してください。膨らんでいる、傷があるなど状態に不安があるバッテリーは、触れずに自治体や販売店に相談する方法もあります。",
  },
  {
    title: "刃物や先のとがった工具を、そのまま袋に入れて出す",
    body: "カッターの刃、のこぎり、のみ、ドリルの刃などをそのまま袋に入れると、収集する人や家族がけがをする危険があります。刃を布や厚紙で包む、袋に品目を明記するなど、出し方は自治体の指示に従ってください。整理の途中でも、刃を出したまま床に置かない、刃物同士を重ねないなど、けがを防ぐ置き方を意識してください。",
  },
];

const judgeSigns = [
  "電動工具や重い機材が多く、自分では運び出せない",
  "塗料や溶剤の缶が大量にあり、区分の確認だけで手が止まっている",
  "ガレージや物置全体の片付けを同時に進める必要がある",
  "実家や故人の作業部屋の工具を、まとめて整理しなければならない",
  "作業する時間がなく、仕分けから搬出まで一度に済ませたい",
];

const faqs = [
  {
    q: "使いかけの塗料は、どう処分すればよいですか？",
    a: "中身の残った塗料の出し方は自治体によって異なります。固めてから出す、新聞紙などに染み込ませて乾かしてから出す、缶は中身と分けて出す、といった方法が案内されていることが一般的ですが、区分や手順は地域ごとに違います。お住まいの市区町村の分別案内で、塗料の缶と中身の扱いを確認してから進めてください。排水口や庭に流すことは避けてください。",
  },
  {
    q: "電動工具は、まだ使えるなら売れますか？",
    a: "状態がよく、本体・バッテリー・充電器・付属品がそろっている電動工具は、買取や譲渡の対象になることがあります。動作するか、バッテリーが劣化していないか、付属品がそろっているかを確認し、写真を撮っておくと相談が早く済みます。売れない場合の処分方法は、大きさや電池の有無で区分が変わることがあるため、自治体の分別案内で確認してください。",
  },
  {
    q: "古いカッターやのこぎりは、そのまま捨ててよいですか？",
    a: "刃物の出し方は自治体によって定められていることが一般的で、刃を布や厚紙で包む、袋に品目を書く、特定の区分で出すなどの方法があります。お住まいの市区町村の分別案内で確認してください。整理の途中では、刃を出したまま置かない、子どもの手の届く場所に置かないなど、けがを防ぐことを優先してください。",
  },
  {
    q: "DIYで余った木材の端材は、どう出せばよいですか？",
    a: "木材の端材は、長さや太さ、塗装や金具の有無によって出し方の区分が変わることがあります。一定の長さに切ってまとめる、粗大ごみとして出す、自己搬入する、など自治体ごとに案内が異なるため、お住まいの市区町村の分別案内で確認してください。量が多い場合は、ほかの不用品とまとめて業者に依頼する方法もあります。",
  },
];

const related = [
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "タイヤ・危険物の処分と進め方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの捨て方", desc: "スプレー缶・電池などの考え方" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置の解体前の整理", desc: "中身を出してから解体するまで" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップの買取と併用", desc: "売れる物と処分する物の分け方" },
  { href: "/jiko-hannyu-shobun/", label: "ごみ処理施設への自己搬入", desc: "持ち込みが向く場面と事前確認" },
  { href: "/veranda-katazuke/", label: "ベランダの片付け", desc: "屋外に置かれた物の見直し方" },
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
    { "@type": "ListItem", position: 2, name: "工具・DIY用品・塗料の整理と処分" },
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
    { href: "#kiso", label: "1｜工具・DIY用品が増え続ける3つの理由" },
    { href: "#merit", label: "2｜始める前に確認したい3つのこと" },
    { href: "#houshin", label: "3｜「残す工具」と「分けて出す物」を先に決める" },
    { href: "#steps", label: "4｜工具・DIY用品を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "工具・DIY用品・塗料の整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          工具・DIY用品・塗料の整理と処分｜刃物・電動工具・使いかけの塗料を安全に手放す手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れの奥の工具箱、ベランダの棚に並んだ塗料の缶、家具の組み立てで増えた六角レンチ、DIYで余った木材やネジの小袋。工具やDIY用品は壊れにくく減らないうえに、塗料やスプレー、刃物、バッテリーといった扱いに注意が必要な物が混ざっているため、「どう捨てればよいか分からない」で手が止まりやすい品目です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、工具やDIY用品が増え続ける理由、残す工具を決める基準、塗料・スプレー・バッテリー・刃物を分けて考える理由、自治体の区分を確認してから出す進め方、端材やネジ類の整理、状態のよい工具を売る選択肢までを順に解説します。ガレージや物置全体の片付けは別の記事で扱っており、本記事は「工具とDIY用品そのもの」の整理に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>工具は「この一年で使ったか」で残す物を決め、重複は状態のよい一本に絞る</li>
          <li>塗料・スプレー・バッテリー・刃物は最初に取り分け、自治体の分別区分を確認してから出す</li>
          <li>塗料や溶剤を排水や土に流さない。スプレー缶の穴あけは自治体の指示に従う</li>
          <li>付属品がそろった状態のよい工具は、処分と分けて売る・譲る選択肢を残す</li>
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

      <H2 id="kiso" num="1">工具・DIY用品が増え続ける3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        なぜ工具箱はいつも満杯なのか。品目の性質を知ると、減らす基準が見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">始める前に確認したい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        基準と安全の準備を先に済ませておくと、当日の作業が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「残す工具」と「分けて出す物」を先に決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        工具とDIY用品の整理は、「何を残すか」と「何を分けて出すか」の二つを先に決めると迷いが減ります。残す工具は、家の中の小さな修理に使う基本の一式と、今後も続ける作業に必要な物だけです。ドライバー、プラスとマイナスの替え先、ハンマー、ペンチ、メジャー、カッター、六角レンチの一組があれば、家庭内の多くの作業に対応できます。同じ種類の工具が複数ある場合は、握りやすく状態のよい一本を残し、残りは手放す候補にします。家具に付属してきた小さな工具は、その家具を組み直す予定がなければ、まとめて手放して構いません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        分けて出す物は、中身の残った塗料と溶剤、スプレー缶、電動工具の充電式バッテリー、刃物の四つです。これらは他の不用品と混ぜると仕分け直しになるだけでなく、保管中や収集中の事故につながることがあります。出し方は自治体によって異なりますので、品目を書き出して、お住まいの市区町村の分別案内で確認してください。自治体で収集しない品目については、購入した販売店やメーカーの案内を確認する方法もあります。分別に迷いやすい品目の一般的な考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">スプレー缶・電池など分別が難しいごみの捨て方</Link>で整理しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        工具やDIY用品がガレージや物置にまとまっている場合は、場所全体の片付けとして進めたほうが早いことがあります。ガレージの物置化の構造と全出しの段取りは<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">車庫・ガレージの片付け</Link>、物置を解体する前に中身を整理する手順は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置の解体前の整理</Link>、ベランダに置かれた物の見直しは<Link href="/veranda-katazuke/" className="text-primary underline underline-offset-2">ベランダの片付け</Link>で扱っています。庭で使う道具や園芸用品が混ざっている場合は<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品の処分</Link>も参考になります。
      </p>

      <H2 id="steps" num="4">工具・DIY用品を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部出す→工具を分ける→危険な物の区分を確認する→材料を減らす→置き場所を固定する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">塗料・スプレー缶・バッテリー・刃物の出し方は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          中身の残った塗料や溶剤の処理方法、スプレー缶の穴あけの要否、電動工具の充電式バッテリーの回収方法、刃物の包み方や区分は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。自治体で収集しない品目は、購入した販売店やメーカーの案内を確認する方法もあります。状態に不安があるバッテリーや、中身の分からない液体は、無理に扱わず窓口に相談してください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「使わない」に分けた工具のうち、状態がよく付属品がそろっている物は、処分と分けて売る、譲るという選択肢があります。売れる物と処分する物の分け方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの買取と処分の併用</Link>で扱っています。端材や大きな工具を自分で処理施設に持ち込む方法は<Link href="/jiko-hannyu-shobun/" className="text-primary underline underline-offset-2">ごみ処理施設への自己搬入</Link>、粗大ごみとして出す場合の流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみの申し込みの流れ</Link>にまとめています。不用品の手放し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>を参考にしてください。
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
        次のような状況では、自分たちだけで抱え込まず、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、塗料や溶剤、バッテリーなどは引き受けられる範囲が事業者によって異なります。見積もりの段階で、扱えない品目があるかどうかを確認しておくと、当日に残されることを防げます。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、街中を巡回する無料回収をうたう車両への注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。塗料・溶剤・スプレー缶・充電式バッテリー・刃物・木材などの分別区分、穴あけの要否、回収方法、出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。自治体で収集しない品目は、購入した販売店やメーカーの案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
