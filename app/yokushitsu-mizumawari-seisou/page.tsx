import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/yokushitsu-mizumawari-seisou/";
const TITLE = "浴室・水回りの徹底清掃｜水あか・カビを落とす手順と業者の使い分け";
const DESC =
  "浴室の汚れは、水あか・皮脂や石けんカス・カビという性質の異なる3種類が混在しており、それぞれ落とし方が違います。汚れ別の洗剤の使い分けと「絶対に混ぜない」原則、排水口・鏡・ゴムパッキン・エプロン内部など部位別の考え方、自力で徹底清掃を進める5ステップ、避けたいNG行動、ハウスクリーニング業者に任せる範囲の見極め方までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "浴室の汚れは3種類。それぞれ性質と落とし方が違う",
    body: "浴室の汚れは大きく分けて3種類あります。1つ目は、水道水に含まれるミネラル分が固まった水あか・うろこ汚れで、アルカリ性の性質を持ちます。2つ目は、体から出る皮脂や石けんカスが混ざった汚れで、酸性寄りの性質です。3つ目は、湿気を好んで繁殖するカビ。この3つは性質が異なるため、1本の洗剤ですべてを落とすことはできません。「どの汚れを落とすのか」を決めてから洗剤を選ぶのが、浴室掃除の出発点です。",
  },
  {
    title: "汚れの性質に合わせた洗剤の使い分けが基本",
    body: "アルカリ性の水あかには酸性タイプの洗剤、酸性寄りの皮脂・石けんカスにはアルカリ性や中性の浴室用洗剤、カビには塩素系のカビ取り剤が使われるのが一般的な考え方です。ここで絶対に守るべき原則が「塩素系と酸性タイプを混ぜない・併用しない」こと。混ざると有毒なガスが発生し、命に関わる危険があります。洗剤は必ず製品の注意表示と用法を確認し、別系統の洗剤は日を分けて使うくらいの慎重さで扱ってください。",
  },
  {
    title: "部位ごとの汚れ方を知る。排水口・鏡・パッキン・エプロン内部",
    body: "排水口は髪の毛と皮脂・石けんカスが絡んだぬめりが主体で、こまめなごみ取りが最大の対策です。鏡のうろこ汚れは水あかの代表格で、固着すると家庭では落としにくくなります。ゴムパッキンや目地は、カビが根を張りやすく、表面をこすっただけでは再発しがちな部位です。浴槽の側面カバー（エプロン）の内部は、普段目に見えないぶん汚れとカビがたまりやすい場所ですが、取り外しの可否や方法は浴槽の機種によって異なります。部位ごとの特性を知っておくと、掃除の優先順位を決めやすくなります。",
  },
];

const merits = [
  {
    title: "徹底清掃の順番は「皮脂汚れ→水あか→カビ」が進めやすい",
    body: "洗剤の系統が違う汚れを扱う以上、作業は分けて進める必要があります。まず浴室用洗剤で全体の皮脂・石けんカスを落とし、すすいでから水あかに酸性タイプで対処し、最後にカビ取りを行って乾燥させる、という流れにすると、洗剤同士が混ざるリスクを抑えながら段階的にきれいにできます。1日で全部やろうとせず、「今日は皮脂汚れと排水口」「別の日に水あか」と日を分けるのも、安全面でも体力面でも現実的な方法です。",
  },
  {
    title: "こする前に「ゆるめる」。パックとつけ置きの活用",
    body: "固着した水あかや石けんカスは、洗剤を含ませたキッチンペーパーを貼り付けてしばらく置く「パック」でゆるめてから落とすと、力を入れずに済みます。イスや洗面器などの小物は、浴槽の残り湯や桶を使ったつけ置きが効率的です。ゴムパッキンのカビには、密着性の高いジェルタイプのカビ取り剤が使われることが多く、いずれも放置時間や使える素材は製品の表示に従ってください。「ゆるめてから落とす」を徹底すると、素材を傷めるリスクも減らせます。",
  },
  {
    title: "浴室の物を減らすことが、汚れとカビの予防になる",
    body: "浴室に置いたボトルや桶の底は、ぬめりと石けんカスがたまりやすく、カビの温床にもなります。使っていないシャンプーの空ボトル、劣化したイスや桶は思い切って処分し、床に直置きする物を減らすことが、掃除のしやすさと汚れの予防に直結します。吊るす収納に切り替える、家族分のボトルを整理するなど、物の量を見直すだけで浴室の清潔は保ちやすくなります。物を手放す基準に迷う場合は、当サイトの片付け記事も参考にしてください。",
  },
];

const steps = [
  {
    title: "換気と保護具を準備する（窓開け・換気扇・ゴム手袋）",
    body: "浴室掃除は洗剤を多く使うため、準備が安全を左右します。換気扇を回し、窓やドアを開けて空気の通り道を作り、ゴム手袋を着用します。カビ取り剤を使う日は、マスクや目の保護があるとより安心です。体調がすぐれない日に無理をしないこと、洗剤の飛び散りに備えて服装を整えることも大切です。使う洗剤の注意表示をこの段階で読んでおき、併用できない組み合わせを確認しておきましょう。",
  },
  {
    title: "浴室内の物を仕分けて、不要な物を処分する",
    body: "ボトル類・イス・桶・掃除道具をいったんすべて浴室の外に出し、「使っている物」と「使っていない物・劣化した物」に仕分けます。物がない状態にすると、床や壁の汚れの全体像が見え、掃除の効率が一気に上がります。空ボトルや劣化した小物の分別・出し方は自治体によって異なるため、お住まいの市区町村の案内に従って処分してください。この工程を挟むかどうかで、仕上がりと今後の掃除のしやすさが大きく変わります。",
  },
  {
    title: "浴室用洗剤で皮脂汚れ・石けんカスを全体的に落とす",
    body: "浴室用の中性洗剤やアルカリ性洗剤を使い、浴槽・床・壁・小物の皮脂汚れと石けんカスをスポンジで落とし、しっかりすすぎます。壁は下から上に向かって洗うと液だれの筋を防げます。排水口のごみ受けもこの段階で外して洗い、ぬめりを取り除きます。ここまでで浴室の大部分は見違えるはずです。落ちない汚れが残ったら、それは水あかかカビの可能性が高いため、次のステップで性質に合った洗剤に切り替えます。",
  },
  {
    title: "水あか・鏡のうろこに酸性タイプでパックして対処する",
    body: "前のステップの洗剤を十分にすすぎ流してから、水あかには酸性タイプの洗剤でパックして時間を置き、やわらかいスポンジで落とします。鏡のうろこ汚れは固着が進むと家庭用ではなかなか落ちないため、専用のうろこ取りアイテムを使う方法もありますが、強くこすると傷の原因になります。金属部分や大理石など酸に弱い素材には使えないことがあるため、製品表示の確認と目立たない場所での試し使いを忘れずに行ってください。",
  },
  {
    title: "カビ取りをして、乾燥と予防の習慣で仕上げる",
    body: "最後に、酸性洗剤を完全にすすぎ流して時間を空けてから、ゴムパッキンや目地のカビに塩素系カビ取り剤を使います。表示された時間を置いて洗い流し、換気を続けて浴室全体をしっかり乾燥させます。仕上げに、入浴後に水気を切る・換気扇を回し続ける・物を床に直置きしないといった予防の習慣を決めておくと、徹底清掃の状態を長く保てます。カビが広範囲に再発する場合は、下地まで根を張っている可能性があります。",
  },
];

const ngActions = [
  {
    title: "塩素系のカビ取り剤と酸性の洗剤を併用する",
    body: "塩素系の製品と酸性タイプの製品が混ざると、有毒なガスが発生して極めて危険です。同じ日に同じ場所へ続けて使うと、すすぎ残しの成分同士が反応するおそれがあります。水あか対策の酸性洗剤とカビ取りの塩素系洗剤は、十分なすすぎと時間を空けて使うか、日を分けてください。「まぜるな危険」の表示は浴室掃除で最も重要な注意書きです。製品の表示を読まずに複数の洗剤を使うことは絶対に避けてください。",
  },
  {
    title: "換気をせずに閉め切った浴室で作業する",
    body: "浴室は家の中でも特に狭く密閉されやすい空間です。換気をせずに洗剤やカビ取り剤を使うと、気分が悪くなるなど体調に影響するおそれがあります。換気扇を回し、ドアや窓を開けて空気の通り道を確保してから作業を始めてください。作業中に目や喉に刺激を感じたら、すぐに中断して浴室から離れ、換気を続けましょう。無理をして作業を続けないことが、自力掃除の大前提です。",
  },
  {
    title: "鏡や金属・素材を硬いブラシで強くこする",
    body: "落ちない水あかやうろこ汚れに苛立って、硬いブラシや研磨力の強いアイテムで力任せにこすると、鏡やステンレス、浴槽のコーティングに細かい傷がつきます。傷には汚れが入り込みやすく、かえって汚れやすい浴室になってしまいます。落ちない汚れは「こする力」ではなく「洗剤の性質と時間」で対処するのが原則です。素材に合うか不安なときは、目立たない場所で試してから全体に使ってください。",
  },
  {
    title: "エプロン内部や設備を無理に分解する",
    body: "浴槽のエプロン（側面カバー)は、機種によって外せるもの・外せないもの・外し方が異なるものがあります。無理にこじ開けると、破損や水漏れ、元に戻せないトラブルにつながります。取扱説明書で取り外し可否を確認し、記載がない場合は無理をしないでください。エプロン内部の汚れやカビの洗浄は、高圧洗浄の機材を持つハウスクリーニング業者の得意分野です。見えない部分こそ、プロに任せる判断が合理的です。",
  },
];

const judgeSigns = [
  "カビ取りをしてもゴムパッキンや天井のカビがすぐ再発する",
  "鏡のうろこ・浴槽の水あかが固着して、家庭用の方法では落ちない",
  "エプロン内部や排水管の奥など、見えない部分の汚れ・臭いが気になる",
  "退去・売却を控えていて、浴室と水回りを一括で仕上げたい",
  "体力や時間の事情で、浴室の徹底清掃に取り組むのが難しい",
];

const faqs = [
  {
    q: "浴室掃除はどの洗剤を揃えればよいですか？",
    a: "汚れの性質に合わせて、皮脂・石けんカス向けの浴室用洗剤（中性またはアルカリ性）、水あか向けの酸性タイプ、カビ向けの塩素系カビ取り剤が基本の組み合わせです。ただし塩素系と酸性タイプの併用は有毒ガスが発生するため厳禁で、使う日を分けるなど慎重な運用が必要です。必ず製品の注意表示を確認し、使えない素材がないかもチェックしてください。",
  },
  {
    q: "天井や壁一面に広がったカビも自分で落とせますか？",
    a: "手の届く範囲の点在するカビであれば、カビ取り剤で対処できる場合があります。しかし天井のカビは洗剤が垂れて目や体にかかる危険があり、広範囲のカビは下地まで根を張っている可能性があるため、自力での対処はおすすめしません。広がったカビの清掃と再発対策は、当サイトのカビ清掃の記事で解説していますが、範囲が広い場合は専門業者への相談が安全です。",
  },
  {
    q: "浴室クリーニングを業者に頼むと、どこまでやってもらえますか？",
    a: "一般的な浴室クリーニングでは、浴槽・床・壁・天井・鏡・排水口などの洗浄が対象になり、業者やプランによってはエプロン内部の高圧洗浄や防カビの仕上げをオプションで選べます。対応範囲はサービスごとに異なるため、気になる箇所（鏡のうろこ、エプロン内部など）を伝えて、作業内容と追加費用の条件を見積もりで確認してください。",
  },
  {
    q: "浴室クリーニングの費用はどのくらいかかりますか？",
    a: "浴室の広さ・汚れの程度・オプションの有無によって金額は変わるため、一概には言えません。正確な金額を知るには、2〜3社から見積もりを取り、作業範囲と追加費用の条件を比較するのが確実です。口コミで事業者を比較できるマッチングサービスを使うと、条件に合う業者を探しやすくなります。費用の考え方は当サイトの費用相場ページも参考にしてください。",
  },
];

const related = [
  { href: "/kabi-seisou/", label: "カビが広がった部屋の清掃", desc: "カビの安全な落とし方と再発防止" },
  { href: "/kitchen-konro-seisou/", label: "キッチン・コンロ周りの掃除方法", desc: "油汚れを落とす手順と業者の目安" },
  { href: "/heya-shoushuu/", label: "部屋の臭いが消えないときの消臭", desc: "臭いの原因の切り分けと対処" },
  { href: "/house-cleaning-chigai/", label: "ハウスクリーニングと片付け業者の違い", desc: "どちらに頼むべきかの判断基準" },
  { href: "/review/mitsumoa/", label: "ミツモアの評判", desc: "見積もり比較でクリーニング業者を探す" },
  { href: "/area/osaka/", label: "大阪の片付け業者比較", desc: "大阪から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "浴室・水回りの徹底清掃" },
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
    { href: "#kiso", label: "1｜浴室の汚れ3種類と洗剤の使い分け" },
    { href: "#merit", label: "2｜徹底清掃を効率化する考え方" },
    { href: "#houshin", label: "3｜掃除を始める前の全体方針" },
    { href: "#steps", label: "4｜自力で進める徹底清掃の5ステップ" },
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

      <Breadcrumb items={[{ label: "浴室・水回りの徹底清掃" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          浴室・水回りの徹底清掃｜水あか・カビを落とす手順と業者の使い分け
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「毎日掃除しているのに鏡のうろこが取れない」「パッキンのカビが何度も再発する」——浴室・水回りの汚れが手ごわいのは、性質の違う汚れが同じ空間に混在しているからです。汚れごとに合った洗剤と手順を選べば、力任せにこすらなくても着実にきれいにできます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、浴室の汚れ3種類の見分け方と洗剤の使い分け、自力で徹底清掃を進める5ステップ、洗剤の併用など絶対に避けたいNG行動、そしてハウスクリーニング業者に任せたほうがよい範囲の見極め方までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>浴室の汚れは「水あか」「皮脂・石けんカス」「カビ」の3種類。性質が違うので洗剤も別</li>
          <li>作業順は皮脂汚れ→水あか→カビ取りが進めやすい。塩素系と酸性タイプの併用は厳禁</li>
          <li>落ちない汚れは、こする力ではなく「洗剤の性質×パック・つけ置きの時間」で対処する</li>
          <li>エプロン内部・広範囲のカビ・固着したうろこは、機材を持つ専門業者に任せるのが合理的</li>
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

      <H2 id="kiso" num="1">浴室の汚れ3種類と洗剤の使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        浴室掃除で成果を出す近道は、洗剤を増やすことではなく、汚れの正体を知ることです。まず基礎知識を整理します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">徹底清掃を効率化する考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        性質の違う汚れを安全に、無理なく落とすには、順番と時間の使い方がポイントになります。次の3つの考え方を押さえましょう。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">掃除を始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        浴室・水回り掃除の大原則は、「換気と保護を整えてから、汚れの性質ごとに、洗剤を混ぜずに」の3つです。特に洗剤の安全は最優先で、迷ったら製品表示に立ち返ってください。1日で完璧を目指さず、日を分けて進める計画も立派な方針です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        カビが広範囲に及んでいる場合は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビが広がった部屋の清掃</Link>を、排水口やカビ以外の臭いが気になる場合は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭の記事</Link>を参考にしてください。また、「自分でやる範囲」と「業者に任せる範囲」の線引きに迷ったら<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングと片付け業者の違い</Link>が判断の助けになります。
      </p>

      <H2 id="steps" num="4">自力で進める徹底清掃の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、浴室を徹底的にきれいにする手順を5つのステップで紹介します。安全の準備が最初のステップです。
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
        次のいずれかに当てはまる場合は、自力にこだわらず専門業者への相談を検討しましょう。気になる箇所の写真があれば、見積もりの相談がスムーズです。
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
        浴室・水回りのクリーニング事業者を口コミや見積もりで比較するなら<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>が活用できます。浴室以前に部屋全体の物があふれていて掃除に入れない場合は、<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行サービス</Link>で物の仕分け・搬出から進める方法もあります。
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
        本記事は一般的な知識の提供を目的としたものです。洗剤・カビ取り剤は必ず製品の注意表示・用法に従い、換気を確保してお使いください。特に塩素系と酸性タイプの併用は有毒ガスが発生するため厳禁です。設備の分解は取扱説明書の範囲内に留め、体調に異変を感じたらすぐに作業を中止してください。クリーニングの料金は作業範囲・汚れ具合により異なるため、依頼前に必ず見積もりでご確認ください。
      </p>
    </article>
  );
}
