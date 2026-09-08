import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/ofuro-senmenjo-katazuke/";
const TITLE = "浴室・洗面所まわりの片付け｜物を減らしてから掃除に入る順番と収納の考え方";
const DESC =
  "浴室と洗面所は、シャンプーやボディソープのボトル、洗面台下のストック、タオルや洗濯用品が集まり、狭いわりに物が増えやすい場所です。掃除の前に物を減らす理由、置いてよい物の基準、洗面台下と脱衣所の見直し方、家族で守れる置き場所のルール、掃除に進む順番までを手順に沿って解説します。カビや水あかの落とし方は専門記事に分けて案内します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "水まわりは「使いかけ」と「ストック」が同じ場所に混ざりやすい",
    body: "浴室や洗面所に置かれている物の多くは、シャンプー、ボディソープ、洗顔料、歯みがき粉、洗剤といった消耗品です。使いかけの容器と、詰め替え用の袋、まとめ買いした未開封の物が同じ棚に並ぶと、どれが今使っている物なのかが分からなくなります。使いかけが複数本あると、それぞれが少しずつ残ったまま新しい物が開けられ、結果として棚の上や洗面台の下が容器でいっぱいになります。まず「今使っている物」と「予備」を分けて考えるだけで、置く場所の考え方が整理されます。",
  },
  {
    title: "浴室に置いた物は、掃除の妨げになり、汚れの原因にもなる",
    body: "浴室の床や棚に直接置かれたボトルや洗面器は、底の部分に水がたまり、ぬめりやカビの発生源になりやすい場所です。物が多いほど掃除のときに動かす手間が増え、動かすのが面倒で拭き残しが生まれ、汚れが定着するという流れができます。浴室に置く物を減らすことは、見た目を整えるためだけでなく、掃除の回数と時間を減らすためでもあります。カビや水あかを落とす具体的な手順は本記事では扱わず、後述する専門記事に分けています。",
  },
  {
    title: "洗面所は「家族の物」と「家の物」が交差する場所",
    body: "洗面所には、家族それぞれの歯ブラシや化粧品、整髪料といった個人の物と、タオル、洗剤、掃除道具といった家全体で使う物が同居しています。誰の物かはっきりしない物は、片付けるときに誰も判断できず、そのまま残り続けます。洗面所を片付けるときは、個人の物は本人が判断し、家の物は管理する人が判断する、という分担を決めておくと進めやすくなります。同居する家族が多いほど、この分担の効果は大きくなります。",
  },
];

const merits = [
  {
    title: "決めごと1：浴室に「常に置いておく物」の数を決める",
    body: "浴室内に置く物は、家族が毎日使うシャンプー、コンディショナー、ボディソープ、洗顔料など、本当に日常的に使う物に絞ります。試供品や旅行で持ち帰った小さな容器、季節限定の入浴剤、使い切れていない古いボトルは、浴室の中ではなく別の場所で判断します。「浴室に置くのは何個まで」と数で決めておくと、新しい物を増やすときに一つ減らす習慣につながります。",
  },
  {
    title: "決めごと2：洗面台下は「ストック置き場」と割り切る",
    body: "洗面台の下の収納は、配管があって奥行きが使いにくく、湿気もこもりやすい場所です。ここに何でも入れると、奥の物が見えなくなり、同じ物を買い足してしまいます。詰め替え用の洗剤やシャンプー、掃除用品の予備など、用途を「ストック」に限定して、扉を開けたときに何が何個あるかが一目で分かる状態を目指します。",
  },
  {
    title: "決めごと3：脱衣所の床に物を置かないルールを作る",
    body: "脱衣所は洗濯機や洗濯かご、体重計、バスマット、掃除道具などで床がふさがりやすく、物が床に置かれると掃除ができなくなります。床に置いてよい物を「洗濯かごとバスマットだけ」のように決め、それ以外は棚や壁に上げるか、別の場所に移します。床に物がない状態を保てると、拭き掃除がしやすくなり、湿気による床の傷みや黒ずみにも気付きやすくなります。",
  },
];

const steps = [
  {
    title: "浴室と洗面所の物を、いったんすべて出して並べる",
    body: "浴室内のボトル、洗面器、椅子、掃除道具、洗面台まわりの化粧品や整髪料、洗面台下の中身、脱衣所の棚や洗濯機まわりの物を、いったん一か所に出して並べます。全部出すのが難しい場合は、「浴室の中」「洗面台の上」「洗面台の下」「脱衣所の棚」と場所を区切り、一つずつ進めても構いません。並べてみると、同じ種類の物が何本もあることや、使っていない物が奥にあったことが分かります。",
  },
  {
    title: "「今使っている」「予備」「使わない」の3つに分ける",
    body: "出した物を、今使っている物、未開封や詰め替え用の予備、もう使わない物の3つに分けます。使いかけで長く放置されていた物、においや色が変わっている物、誰の物か分からない物は、「使わない」に入れます。同じ種類の使いかけが複数ある場合は、一本にまとめられるかを考え、まとめられない物は使い切る順番を決めます。薬や化粧品が混ざっている場合は、中身と容器を分けて考える必要があるため、別の記事の手順で扱います。",
  },
  {
    title: "使わない物は中身と容器に分け、自治体の分別区分で出す",
    body: "使わないと決めた物は、中身と容器を分けて考えます。液体の中身の扱い、プラスチック容器や金属容器の分別、スプレー缶の出し方は自治体によって異なります。特にヘアスプレーや制汗剤などのスプレー缶は、穴あけの要否を含めて自治体の指示に従ってください。判断に迷う品目は、まとめておいて、お住まいの市区町村の分別案内で確認してから出すと、二度手間になりません。",
  },
  {
    title: "空にした状態で掃除をしてから、残す物を戻す",
    body: "物を出して空になったタイミングは、浴室と洗面所を掃除する一番よい機会です。棚の上、洗面台の下、洗濯機の周囲など、普段は物があって手が届かない場所を先に掃除します。汚れの種類ごとの落とし方や、広がったカビへの対処は、専門の記事に分けているので、そちらの手順で進めてください。掃除が終わってから、残すと決めた物だけを戻します。掃除の途中で物を戻し始めると、戻す物の選別があいまいになります。",
  },
  {
    title: "置き場所を固定し、増やすときのルールを決める",
    body: "戻すときは、浴室内は「毎日使う物だけ」、洗面台の上は「一人一区画」、洗面台の下は「ストックのみ」、脱衣所の床は「洗濯かごとバスマットのみ」のように、場所ごとの役割を固定します。予備は「一種類につき一つまで」と上限を決め、上限を超えて買わないようにします。この段階で決めたルールを家族に共有しておくと、片付けた状態が長く続きます。新しい物を一つ入れたら一つ減らす、という入れ替えの習慣も、この場所では特に効果があります。",
  },
];

const ngActions = [
  {
    title: "浴室の床や棚に、直接ボトルを置いたままにする",
    body: "浴室の床や棚に直接置いた容器は、底に水がたまってぬめりやカビの原因になります。置く物を減らしたうえで、吊るす、水が切れる棚に置く、使うたびに持ち込むなど、底に水がたまらない置き方に変えると、掃除の手間が減ります。置き方を変えても、定期的に容器を動かして底面を確認する習慣は残しておきましょう。",
  },
  {
    title: "中身の残った容器やスプレー缶を、そのままごみに出す",
    body: "中身が残ったままの容器やスプレー缶は、自治体によって出し方が決められていることが一般的です。液体の中身の扱い、容器の分別、スプレー缶の穴あけの要否は自治体ごとに異なりますので、自己判断でまとめて出さず、お住まいの市区町村の分別案内で確認してください。分別に迷いやすい品目の考え方は、後述の関連記事で整理しています。",
  },
  {
    title: "掃除を先にして、物を戻してから片付けを考える",
    body: "物がある状態で掃除をすると、動かす手間で作業が途中で止まりやすく、物の裏側や棚の奥が残ります。先に物を減らし、空にした状態で掃除をして、最後に残す物だけを戻すという順番にすると、同じ時間でも仕上がりが大きく変わります。片付けと掃除を同じ日にやりきれない場合は、物を減らす作業を先に済ませておき、掃除は別の日に回して構いません。",
  },
  {
    title: "家族の物を、本人に確認せず捨てる",
    body: "洗面所には家族それぞれの物が置かれています。使っていないように見えても、本人にとっては必要な物であることがあります。個人の物は本人が判断する、と決めておき、迷う物は一時的にまとめて本人に確認してから手放します。確認を省いて捨てると、その後の片付けに協力してもらえなくなり、結果として片付いた状態が続かなくなります。",
  },
];

const judgeSigns = [
  "洗面台の下や脱衣所の棚から、物があふれて扉が閉まらない",
  "浴室の汚れが物を減らしても落ちず、掃除の範囲が広すぎる",
  "洗濯機まわりや棚の裏など、自分では動かせない物の奥に汚れがある",
  "水まわりだけでなく、家全体の片付けが必要になっている",
  "体調や時間の都合で、物の整理と掃除を自分で進められない",
];

const faqs = [
  {
    q: "浴室に置く物は、どこまで減らせばよいですか？",
    a: "決まった数はありませんが、「家族が毎日使う物だけを置く」という基準にすると判断しやすくなります。試供品、旅行で持ち帰った小さな容器、季節限定の入浴剤、使い切れていない古いボトルは浴室の外で判断します。浴室に置く物の数を決めておくと、新しく買ったときに一つ減らす習慣につながります。",
  },
  {
    q: "使いかけのシャンプーや洗剤の中身は、どう処分すればよいですか？",
    a: "液体の中身の扱いと容器の分別は、自治体によって異なります。排水に流してよいか、紙などに染み込ませて出すか、容器は洗ってから出すかなど、お住まいの市区町村の分別案内で確認してください。スプレー缶は穴あけの要否を含めて自治体の指示に従います。判断に迷う物は、まとめて確認してから出すと二度手間になりません。",
  },
  {
    q: "洗面台の下の収納が使いにくく、物が奥にたまります。",
    a: "洗面台の下は配管があって奥行きが使いにくく、湿気もこもりやすい場所です。用途を「ストック」に限定し、扉を開けたときに何が何個あるかが分かる状態を目指します。奥に物を押し込まず、手前から取れる並べ方にし、一種類につき予備は一つまでと決めておくと、同じ物を買い足すことが減ります。",
  },
  {
    q: "物を減らしても汚れが落ちません。掃除は業者に頼むべきですか？",
    a: "物を減らしたうえでも落ちない汚れは、水あかやカビが定着している可能性があります。まずは汚れの種類ごとの落とし方を確認し、それでも難しい場合はハウスクリーニングの範囲として業者に相談する方法があります。片付けと清掃で依頼先が変わることがあるため、どこまでを誰に頼むかは事前に整理しておきましょう。",
  },
];

const related = [
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水回りの徹底清掃", desc: "水あか・カビを落とす手順と使い分け" },
  { href: "/kabi-seisou/", label: "カビの掃除と再発防止", desc: "広がったカビへの向き合い方" },
  { href: "/kusuri-keshouhin-shobun/", label: "古い薬・化粧品の処分", desc: "中身と容器の分け方と確認先" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの捨て方", desc: "スプレー缶・電池などの考え方" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "収納を増やすほど片付かない理由" },
  { href: "/house-cleaning-chigai/", label: "片付けとハウスクリーニングの違い", desc: "依頼先を分ける考え方" },
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
    { "@type": "ListItem", position: 2, name: "浴室・洗面所まわりの片付け" },
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
    { href: "#kiso", label: "1｜浴室・洗面所が散らかる3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「減らしてから掃除する」順番が大切な理由" },
    { href: "#steps", label: "4｜浴室・洗面所を片付ける5ステップ" },
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

      <Breadcrumb items={[{ label: "浴室・洗面所まわりの片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          浴室・洗面所まわりの片付け｜物を減らしてから掃除に入る順番と収納の考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          浴室の棚に並んだ何本ものボトル、洗面台の上に置かれた家族それぞれの化粧品や整髪料、扉を開けると詰め替え用の袋があふれてくる洗面台の下。浴室と洗面所は面積が小さいわりに消耗品が集まりやすく、気付くと物が増えて掃除がしにくくなっている場所です。掃除をしても物が多いままだと、動かす手間で拭き残しが生まれ、汚れが定着していきます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、浴室と洗面所に物がたまりやすい理由、置いてよい物の基準の決め方、洗面台下や脱衣所の見直し方、物を減らしてから掃除に入る順番、片付けた状態を保つための置き場所のルールを順に解説します。カビや水あかそのものの落とし方は、別の専門記事で扱っており、本記事では「物を減らして掃除しやすい状態を作る」ところまでを扱います。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>浴室・洗面所は「使いかけ」と「予備」が混ざるのが散らかる原因。まず分ける</li>
          <li>浴室に置くのは毎日使う物だけ。洗面台の下はストック専用、脱衣所の床には物を置かない</li>
          <li>順番は「物を出す→分ける→空にして掃除→残す物だけ戻す」。掃除を先にしない</li>
          <li>中身の残った容器やスプレー缶の出し方は自治体により異なる。分別案内で確認する</li>
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

      <H2 id="kiso" num="1">浴室・洗面所が散らかる3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        狭い場所なのに物が増えるのには、この場所ならではの理由があります。原因が分かると、減らす基準も決めやすくなります。
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
        場所ごとに「何を置く場所か」を先に決めておくと、迷う時間が減り、戻すときも早くなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「減らしてから掃除する」順番が大切な理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水まわりの片付けで多いつまずきは、物がある状態で掃除を始めてしまうことです。ボトルをどかしながら棚を拭き、洗面台の下の中身を一つずつ出しながら底を拭くという進め方は、途中で疲れて手が止まり、結局は物の裏側や奥が残ります。物を先にすべて出してしまえば、空になった棚や床をまとめて掃除でき、掃除が終わった状態で「本当に戻す物」だけを選べます。物を減らす作業と掃除の作業は、同じ日にやりきれなくても構いません。物を減らして空にするところまでを先に済ませ、掃除は別の日に回す進め方でも、順番が守られていれば仕上がりは変わりません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        減らす基準は「毎日使うか」「予備が何個あるか」「誰の物か」の三つです。毎日使う物は浴室や洗面台の上に置き、予備は洗面台の下や脱衣所の棚にまとめ、誰の物か分からない物は本人に確認してから決めます。減らしたあとに収納グッズを買い足したくなりますが、先にグッズを買うと、そこに合わせて物を残してしまいがちです。収納を増やすほど片付かなくなる構造は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>で解説しています。物を減らした結果として棚が余るなら、それが正しい状態です。薬や化粧品が混ざっている場合は、中身と容器を分けて考える必要があるため、<Link href="/kusuri-keshouhin-shobun/" className="text-primary underline underline-offset-2">古い薬・化粧品の処分方法</Link>の手順で扱ってください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        汚れの落とし方そのものは、汚れの種類によって方法が異なります。水あか、皮脂や石けんカス、カビの三つを見分けて対処する手順は<Link href="/yokushitsu-mizumawari-seisou/" className="text-primary underline underline-offset-2">浴室・水回りの徹底清掃</Link>、天井やパッキンに広がったカビへの向き合い方は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビの掃除と再発防止</Link>で扱っています。本記事の手順で物を減らしてから、これらの記事の手順で掃除に進むと、動かす物がない分だけ作業が進みます。家全体の片付けの中で水まわりをどの順番で扱うかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">浴室・洗面所を片付ける5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        出す→分ける→使わない物を出す→空にして掃除→戻して固定する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">中身の処理と分別区分は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          使いかけの液体の扱い、プラスチック容器や金属容器の分別、スプレー缶の出し方や穴あけの要否は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。中身の残った容器やスプレー缶をまとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。判断に迷う品目は、分別案内に記載の窓口へ問い合わせると一度で確認できます。分別に迷いやすい品目の一般的な考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">スプレー缶・電池など分別が難しいごみの捨て方</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水まわりの片付けが済むと、次はキッチンやトイレ、玄関など、同じように消耗品が集まる場所に進むと効果が続きます。キッチンの食器や調理器具の見直しは<Link href="/kitchen-shokki-seiri/" className="text-primary underline underline-offset-2">食器・調理器具の整理</Link>、玄関の靴や外まわり用品は<Link href="/genkan-getabako-seiri/" className="text-primary underline underline-offset-2">玄関・下駄箱の片付け</Link>、家全体を見直す前のチェックは<Link href="/oheya-checklist/" className="text-primary underline underline-offset-2">部屋の片付けチェックリスト</Link>で扱っています。片付けた状態が続かないときの考え方は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンドを防ぐ方法</Link>にまとめています。
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
        次のような状況では、自分たちだけで抱え込まず、片付け業者やハウスクリーニング業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        物を減らす作業と、定着した汚れを落とす作業は、依頼先が分かれることがあります。片付け業者は不用品の運び出しや仕分けが中心で、ハウスクリーニング業者は清掃が中心です。どこまでを誰に頼むかを整理する考え方は<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">片付けとハウスクリーニングの違い</Link>、大掃除として業者に任せる範囲の考え方は<Link href="/oosouji-gyousha-hani/" className="text-primary underline underline-offset-2">大掃除を業者に頼む範囲</Link>で扱っています。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。使いかけの液体の扱い、容器やスプレー缶の分別区分、穴あけの要否、出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
