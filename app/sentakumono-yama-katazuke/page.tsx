import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sentakumono-yama-katazuke/";
const TITLE = "洗濯物・衣類の山の片付け｜床やソファに積まれた服を「洗う」「戻す」「手放す」に分けて崩す手順";
const DESC =
  "ソファの上に積まれた乾いた洗濯物、床に脱ぎっぱなしの服、洗ったのか着たのか分からない山。衣類の山は、洗う・干す・畳む・しまうという工程のどこかが詰まると、毎日少しずつ高くなります。山ができる仕組み、洗う前と洗った後を見分けて分ける手順、放置した服のにおいやカビの扱い、畳まずに戻す仕組み、山を作らない工程の減らし方、業者に相談する目安までを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "洗濯は「洗う・干す・畳む・しまう」の4工程で、どこかが詰まると山になる",
    body: "洗濯は、洗濯機を回すだけでは終わりません。洗う、干す、取り込んで畳む、しまうという四つの工程があり、どれか一つが滞ると、そこに衣類がたまります。多いのは、取り込んだあとに畳む工程が止まり、乾いた洗濯物がソファや椅子の上に積まれるケースです。畳む工程は、一枚ずつ判断と手作業が必要で、疲れているときに後回しにされやすいためです。山は「洗濯ができていない」のではなく、「工程の最後が終わっていない」状態であることがほとんどです。",
  },
  {
    title: "「洗う前」「洗った後」「一度着たがまだ洗わない」が混ざると、手が付けられなくなる",
    body: "衣類の山が厄介なのは、状態の違う服が混ざることです。脱いだままの服、洗って乾いたが畳んでいない服、一度着ただけでまだ洗わなくてよい上着や部屋着が、同じ場所に積まれると、一枚ずつ「これは洗うのか、しまうのか」を判断しなければならなくなります。判断の回数が増えるほど作業は重くなり、「あとでまとめてやろう」と先送りされ、山はさらに高くなります。整理の出発点は、この三つの状態を見分けて分けることです。",
  },
  {
    title: "山の中の服は、時間がたつほど「着られる服」から「洗い直す服」に変わる",
    body: "衣類の山を長く放置すると、湿気や皮脂で、においやカビ、黄ばみが出てくることがあります。乾いていたはずの服も、上に洗う前の服が重なれば湿気を含み、においが移ります。床に直接積まれた山は、ほこりや虫の影響も受けやすくなります。放置の期間が長いほど、「そのまましまえる服」は減り、「洗い直す服」や「手放す服」が増えます。早く崩すほど、残せる服が多くなります。",
  },
];

const merits = [
  {
    title: "決めごと1：山を「洗う」「戻す」「手放す」の3つに分ける基準を決める",
    body: "山を崩すときの分け方は、洗う物、そのまま戻す物、手放す物の三つに絞ります。においや汚れがある物、湿気を含んでいる物、床に直接置かれていた物は「洗う」に入れます。乾いていて清潔な物は、畳まずにそのまま「戻す」に入れます。サイズが合わない、傷んでいる、この一年で着ていない物は「手放す」の候補です。着るか着ないかの細かい判断は、山を崩したあとに別の機会で行い、この段階では三つの分け方だけに集中します。",
  },
  {
    title: "決めごと2：戻す場所は「畳まない」を前提に用意する",
    body: "山ができる原因が畳む工程の停滞なら、畳まなくても戻せる仕組みが必要です。ハンガーに掛けるだけの収納、種類ごとに放り込むだけの箱やかご、家族ごとの引き出しなど、戻す場所を「畳まずに戻せる」形にしておきます。山を崩す前に、クローゼットや引き出しに空きを作っておくことも大切です。戻す場所がいっぱいのままでは、崩した山が別の場所に移動するだけになります。",
  },
  {
    title: "決めごと3：洗う量が多いときは、回す順番と乾かす場所を先に決める",
    body: "山の中の「洗う」に分けた服が多い場合、一度にすべてを洗うことはできません。洗濯機の容量に合わせて、明日着る物、下着やタオル、部屋着、その他の順に回す順番を決めます。乾かす場所も先に考えておかないと、干した洗濯物がまた山になります。部屋干しの場所、浴室の乾燥機能、コインランドリーの利用など、乾かす手段を確保してから洗い始めます。数日かけて回すつもりで計画すると、無理なく進みます。",
  },
];

const steps = [
  {
    title: "山を一か所に集め、床が見える状態にする",
    body: "ソファ、椅子、ベッドの上、床、洗濯機の周りなど、衣類の山がある場所をすべて確認し、一か所に集めます。集める場所は、作業しやすい広い床か、大きなシーツを敷いた場所が向いています。この段階では分けずに、まず床を見えるようにすることを優先します。床が見えるだけで、部屋の印象が変わり、次の作業に取りかかる気持ちが生まれます。山の下からごみや別の物が出てきた場合は、衣類とは分けて袋にまとめておきます。",
  },
  {
    title: "一枚ずつ「洗う」「戻す」「手放す」に分ける",
    body: "集めた山を上から一枚ずつ取り、決めごとで定めた基準で三つに分けます。迷ったら「洗う」に入れて構いません。洗えば清潔になり、次の判断がしやすくなるからです。「戻す」に入れる物は、においがなく乾いていて、そのまま着られる物だけにします。「手放す」は、明らかに傷んでいる物、サイズが合わない物、この一年で着ていない物に限り、細かい判断は保留にして山を崩すことを優先します。分けた物はそれぞれ別のかごや袋に入れ、混ざらないようにします。",
  },
  {
    title: "「洗う」を順番に回し、乾かす場所を確保する",
    body: "「洗う」に分けた服を、決めた順番で洗濯機に回します。においやカビが出ている物は、通常の洗濯で落ちない場合があるため、洗剤の表示や衣類の洗濯表示を確認し、無理なら手放す判断をします。乾かす場所は、部屋干し、浴室の乾燥機能、コインランドリーの乾燥機など、確保した手段を使います。洗い終えた物は、畳まずにそのままハンガーに掛けるか、決めた場所に戻します。数日かけて回す場合は、洗う前の物を一か所にまとめて、部屋に広がらないようにします。",
  },
  {
    title: "「戻す」を畳まずに戻し、「手放す」を状態でルート分けする",
    body: "「戻す」に分けた服は、ハンガーに掛ける、種類ごとの箱に入れるなど、畳まずに戻します。畳む必要のある物は、下着や靴下などに限定し、それも仕切りのある箱に放り込むだけの形にします。「手放す」に分けた服は、状態のよい物と傷んでいる物に分け、状態のよい物は譲る、買取に出す、寄付先を探すという選択肢があります。傷んでいる物や汚れが落ちない物は、衣類の出し方が自治体によって異なるため、お住まいの市区町村の分別案内で確認してから出します。",
  },
  {
    title: "山ができた工程を特定し、その工程を減らす",
    body: "山を崩し終えたら、どの工程で詰まっていたのかを振り返ります。畳む工程で止まっていたなら、掛ける収納を増やして畳む量を減らします。しまう場所が遠かったなら、洗濯機の近くや取り込む場所の近くに戻す場所を作ります。脱いだ服の置き場所がなかったなら、洗う前の服を入れるかごを部屋ごとに置きます。一度着た上着や部屋着の置き場所がなかったなら、掛けるフックを決めます。工程を減らすか、工程の距離を縮めるかのどちらかで、山ができにくくなります。",
  },
];

const ngActions = [
  {
    title: "山を全部いっぺんに洗濯機に入れる",
    body: "山の中の服をまとめて洗濯機に入れると、容量を超えて洗い上がりが悪くなり、乾かす場所も足りなくなって、干した洗濯物がまた山になります。洗う物は順番を決めて数日かけて回し、乾かす場所を確保してから洗い始めてください。においやカビが出ている物を他の服と一緒に洗うと、においが移ることもあるため、分けて洗うか、手放す判断をします。",
  },
  {
    title: "畳んでからしまう前提で、完璧な収納を目指す",
    body: "山ができた原因が畳む工程の停滞なら、畳む前提の収納に戻しても、同じことが繰り返されます。掛ける収納や放り込むだけの箱で、畳む量を減らしてください。きれいに畳まれた引き出しは理想ではあっても、続かなければ意味がありません。続けられる形に収納を合わせることが、山を作らないための現実的な方法です。",
  },
  {
    title: "山を「服だから大丈夫」と何か月も放置する",
    body: "衣類の山は、食べ物のごみと違って腐らないため、放置しても問題ないように見えます。しかし、湿気や皮脂でにおいやカビが出て、着られる服が減っていきます。床に積まれた山は、ほこりや虫の影響も受けます。山に気づいたら、全部を片付けなくても、上の数枚を戻すだけで構いません。手を付ける回数を増やすことが、放置を防ぎます。",
  },
  {
    title: "家族の服を、本人に確認せずに手放す",
    body: "山の中に家族の服が混ざっている場合、状態の判断はできても、着るか着ないかの判断は本人にしかできません。確認せずに手放すと、片付けそのものへの協力が得られなくなります。家族の服は「洗う」「戻す」までを行い、手放すかどうかは本人に分けてもらいます。子どもの服はサイズで判断できるため、親が進めて構いませんが、思い出のある物は一度確認します。",
  },
];

const judgeSigns = [
  "衣類の山が部屋の大半を占め、床や通路が使えない状態が長く続いている",
  "山の下からごみや食べ物の容器が出てきて、衣類と分けるところから手が付けられない",
  "においやカビが部屋全体に広がっていて、換気や洗濯だけでは改善しない",
  "体調や時間の都合で、集めて分けて洗うまでを一人で進められない",
  "実家や離れて暮らす家族の家で、衣類の山が生活に支障を及ぼしている",
];

const faqs = [
  {
    q: "洗ったのか着たのか分からない服は、どうすればよいですか？",
    a: "迷ったら「洗う」に入れて構いません。洗えば清潔な状態になり、そのあとの判断がしやすくなります。においがなく乾いていて、そのまま着られると判断できる物だけを「戻す」に入れます。判断の回数を減らすことが、山を崩すときの最大のコツです。一枚ずつ長く考えず、迷ったら洗う、という基準で手を止めずに進めてください。",
  },
  {
    q: "長く放置してにおいやカビが出た服は、洗えば着られますか？",
    a: "衣類の素材や状態によって異なります。洗濯表示と洗剤の表示を確認し、通常の洗濯で落ちない場合は、つけ置きなど表示の範囲で試す方法があります。それでも落ちない物、カビが広がっている物は、無理に残さず手放す判断をしたほうが、他の服へのにおい移りを防げます。部屋全体ににおいが染み付いている場合は、衣類だけでなく部屋の消臭も合わせて考えます。",
  },
  {
    q: "畳むのが苦手で、いつも山になります。どうすればよいですか？",
    a: "畳まない収納に切り替えるのが最も確実です。トップスやボトムスはハンガーに掛けるだけ、下着や靴下は仕切りのある箱に放り込むだけ、タオルは一か所のかごにまとめるだけ、というように、畳む工程そのものを減らします。取り込む場所の近くに戻す場所を作り、しまうまでの距離を縮めることも効果があります。きれいに畳むことより、続けられることを優先してください。",
  },
  {
    q: "手放す服は、どう処分すればよいですか？",
    a: "状態のよい物は、譲る、買取や宅配買取に出す、寄付先を探すという選択肢があります。傷んでいる物や汚れが落ちない物は、衣類の分別区分が自治体によって異なるため、お住まいの市区町村の分別案内で確認してから出してください。資源として回収している地域、可燃の区分で出す地域など、扱いは地域ごとに違います。量が多い場合は、ほかの不用品とまとめて業者に依頼する方法もあります。",
  },
];

const related = [
  { href: "/irui-seiri/", label: "衣類の整理と処分", desc: "残す服と手放す服の仕分け基準" },
  { href: "/koromogae-shunou-shikumika/", label: "衣替えの仕組み化", desc: "衣替えの手間を減らす収納の考え方" },
  { href: "/irui-takuhai-kaitori/", label: "衣類の宅配買取", desc: "買取に出すか処分するかの線引き" },
  { href: "/heya-shoushuu/", label: "部屋の消臭方法", desc: "染み付いたにおいの原因と対処" },
  { href: "/obeya-dasshutsu-1day-plan/", label: "汚部屋脱出の1日プラン", desc: "1日で部屋を立て直す進め方" },
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
    { "@type": "ListItem", position: 2, name: "洗濯物・衣類の山の片付け" },
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
    { href: "#kiso", label: "1｜洗濯物・衣類の山ができる3つの仕組み" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「迷ったら洗う」「畳まずに戻す」が基本" },
    { href: "#steps", label: "4｜衣類の山を崩す5ステップ" },
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

      <Breadcrumb items={[{ label: "洗濯物・衣類の山の片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          洗濯物・衣類の山の片付け｜床やソファに積まれた服を「洗う」「戻す」「手放す」に分けて崩す手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          ソファの上に積まれたままの乾いた洗濯物、ベッドの脇に脱ぎっぱなしの服、洗ったのか一度着たのか分からなくなった山。衣類の山は、一度できると「どれから手を付けてよいか分からない」状態になり、その上にさらに服が重なって高くなっていきます。ソファに座れない、ベッドの半分が服で埋まっている、という状態は珍しいことではなく、多くの家で起きています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、衣類の山ができる仕組み、洗う前と洗った後を見分けて三つに分ける手順、放置した服のにおいやカビの扱い、畳まずに戻す仕組みの作り方、山を作らないための工程の減らし方、業者に相談する目安までを順に解説します。持っている服の総量を減らす仕分け基準は別の記事で扱っており、本記事は「今ある山を崩し、山を作らない仕組みにする」ことに絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>山は「洗う」「戻す」「手放す」の3つだけに分ける。迷ったら洗う</li>
          <li>洗う物は順番を決めて数日かけて回し、乾かす場所を確保してから洗い始める</li>
          <li>戻すときは畳まない。掛ける収納と放り込むだけの箱で、畳む工程を減らす</li>
          <li>山ができた工程を特定し、工程を減らすか、しまうまでの距離を縮める</li>
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

      <H2 id="kiso" num="1">洗濯物・衣類の山ができる3つの仕組み</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        だらしないからではなく、工程が詰まっているから山になる。仕組みが分かると、崩す順番と防ぐ方法が見えてきます。
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
        分ける基準、戻す場所、洗う順番。この三つを先に用意しておくと、山を崩す作業が途中で止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「迷ったら洗う」「畳まずに戻す」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        衣類の山を崩すときに最も大切なのは、一枚ごとの判断を軽くすることです。山の中の服は状態がばらばらで、一枚ずつ「洗うのか、しまうのか、着るのか」を考えていると、数枚で手が止まります。そこで、分け方を「洗う」「戻す」「手放す」の三つだけにし、迷ったら洗うと決めておきます。洗えば清潔な状態に戻り、そのあとの判断は自然に軽くなります。着るか着ないかという服そのものの見直しは、山を崩したあとに別の機会で行えばよく、この段階では山をなくすことだけに集中します。持っている服の総量を減らす基準は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理と処分</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もう一つの基本は、戻すときに畳まないことです。山ができる原因の多くは、取り込んだあとの畳む工程が止まることにあります。畳む前提の収納に戻しても、同じことが繰り返されるだけです。ハンガーに掛けるだけ、種類ごとの箱に放り込むだけ、という形に収納を変え、畳む量を最小限にします。衣替えの手間を減らす掛ける収納の考え方は<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの仕組み化</Link>、クローゼットに空きを作る手順は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>で解説しています。収納用品を先に買い足すと逆効果になる理由は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>を参考にしてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        衣類の山は、部屋全体の片付けの中では「床を見えるようにする」段階で真っ先に取り組むと効果が見えやすい対象です。山を崩すだけで床が見え、部屋の印象が大きく変わります。家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>、一日で部屋を立て直す進め方は<Link href="/obeya-dasshutsu-1day-plan/" className="text-primary underline underline-offset-2">汚部屋脱出の1日プラン</Link>、今の部屋の状態を客観的に確認したいときは<Link href="/oheya-checklist/" className="text-primary underline underline-offset-2">汚部屋レベルのチェックリスト</Link>で扱っています。山が何度もできてしまうのは意志の問題ではなく、工程と仕組みの問題です。片付けが続かない背景については<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理と原因</Link>で、片付いた状態を続ける仕組みは<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンドを防ぐ方法</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">衣類の山を崩す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集める→3つに分ける→洗う→畳まずに戻す・手放す→工程を減らす。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">手放す衣類の出し方は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          衣類の分別区分は、資源として回収する地域、可燃の区分で出す地域、汚れや傷みの程度で扱いが分かれる地域など、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。状態のよい衣類は、譲る、買取に出す、寄付の受け入れ先を探すという選択肢もあります。宅配買取に出すか処分するかの線引きは<Link href="/irui-takuhai-kaitori/" className="text-primary underline underline-offset-2">衣類の宅配買取</Link>、売れる物と処分する物の分け方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの買取と処分の併用</Link>で扱っています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        山を長く放置していた場合、衣類だけでなく部屋全体ににおいが染み付いていることがあります。においの原因の切り分けと消臭の手順は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋のにおいが消えないときの消臭方法</Link>、山の下や壁際にカビが広がっている場合は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビが広がった部屋の清掃</Link>を参考にしてください。山の下から虫が出てきた場合は、衣類の洗い直しだけでなく部屋の清掃が必要になることがあり、<Link href="/gaichu-heya-seisou/" className="text-primary underline underline-offset-2">害虫が発生した部屋の清掃</Link>で安全な進め方を扱っています。洗濯機の周りや洗面所に洗う前の服がたまりやすい場合は、<Link href="/ofuro-senmenjo-katazuke/" className="text-primary underline underline-offset-2">浴室・洗面所まわりの片付け</Link>も合わせて確認してください。
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
        衣類の山を崩す作業そのものは自分で進められることが多いものですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        衣類の山が部屋の大半を占め、ごみと混ざっている状態は、本人の責任というより、生活の中で工程が止まり続けた結果です。自分を責めるより、外の手を借りて一度リセットするほうが、その後の暮らしが楽になります。業者に依頼する場合も、残したい服や貴重品は自分で先に取り分けておく必要があります。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、片付けとハウスクリーニングのどちらを頼むべきかは<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングと片付け業者の違い</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。衣類の分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。洗濯やにおい・カビへの対処は、衣類の洗濯表示および洗剤の表示に従ってください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
