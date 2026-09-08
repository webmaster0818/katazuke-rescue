import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/mado-amido-sash-seisou/";
const TITLE = "窓・網戸・サッシの掃除手順｜汚れの種類別のやり方と傷めない進め方";
const DESC =
  "窓ガラスの曇り、網戸のほこり、サッシのレールにたまった砂——場所ごとに汚れの性質が違うため、同じやり方では落ちません。汚れの種類の見分け方、上から下への進め方、網戸を外さずに掃除する方法、レールの砂を先に取る理由、傷めないための注意点を手順に沿って解説します。";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "窓ガラスは、外側と内側で汚れの中身が違う",
    body: "外側のガラスに付くのは、砂ぼこり、雨が乾いたあとの跡、排気による汚れなどが中心です。内側は、手あか、調理による油分、たばこの煙などが混ざります。性質が違うため、外側は水で汚れを浮かせてから拭き取る、内側は洗剤を含ませた布で拭いてから乾いた布で仕上げる、というように手順を変えると仕上がりが変わります。乾いた布でいきなりこすると、砂で細かい傷を付けることがあります。",
  },
  {
    title: "網戸は「面」ではなく「網目」に汚れがたまる",
    body: "網戸は網目の一つひとつにほこりや花粉、油分が付着しています。表面をこすっても網目の中の汚れは移動するだけで、力を入れるほど網がたわみ、汚れがガラス側へ飛びます。網戸に向いているのは、汚れを浮かせてから、両面から挟むように押さえて取る方法です。乾いた状態でほこりを落としてから水分を使うと、泥のように広がるのを防げます。",
  },
  {
    title: "サッシのレールは、砂とほこりが湿気で固まる場所",
    body: "レールにたまるのは、外から入った砂とほこりです。ここに雨や結露の水分が加わると、粒が固まって黒い筋のようになります。この状態で水拭きを始めると、泥が広がって余計に落ちにくくなります。レールは、まず乾いた状態で粒を掻き出し、掃除機や刷毛で取り除いてから、必要に応じて水分を使うのが基本の順番です。",
  },
];

const merits = [
  {
    title: "順番：網戸→サッシ→窓ガラスで、汚れを移さない",
    body: "窓ガラスを先に磨いても、そのあとに網戸やレールを触れば、ほこりが舞ってやり直しになります。汚れが多い場所から先に片付け、最後に仕上げとして窓ガラスを拭くと、二度手間が減ります。網戸を外して洗える構造であれば、外して洗ってから乾かし、その間にレールと窓を進めるという組み立ても効率的です。",
  },
  {
    title: "道具：乾いた道具と、湿らせた道具の両方を用意する",
    body: "掃除機やブラシのような乾いた状態で使う道具と、布・スポンジのような水分を含ませて使う道具の両方を、始める前にそろえておきます。途中で道具を取りに行くと集中が切れ、汚れた手であちこちを触ることにもなります。仕上げ用の乾いた布を別に用意しておくと、拭き跡が残りにくくなります。",
  },
  {
    title: "範囲：手が届く範囲と、届かない範囲を先に分ける",
    body: "脚立に乗らないと届かない位置、外側にしか回れない窓、手すりから身を乗り出す必要がある場所は、無理をしない範囲を先に決めておきます。窓の掃除でのけがは、落下や転倒によるものが中心です。届かない場所を残す判断は失敗ではなく、安全のための選択です。届かない範囲は、後述するように依頼を検討します。",
  },
];

const steps = [
  {
    title: "窓辺の物をどけて、床に布や新聞紙を敷く",
    body: "カーテンをまとめ、窓辺に置いている物を移動します。作業中に落ちる砂やほこりで床が汚れるため、窓の下に布か新聞紙を敷いておくと後始末が楽になります。カーテンレールの上のほこりも落ちてくるので、先に軽く払っておくと、あとで拭き直す手間が減ります。窓を開けて換気しながら進めましょう。",
  },
  {
    title: "網戸のほこりを乾いた状態で落とす",
    body: "掃除機のブラシ付きノズルや柔らかい刷毛で、網目のほこりを外側に向けて落とします。強く押し当てると網がたわむため、軽く触れる程度で十分です。取り外して洗える構造であれば、外して立てかけ、水をかけて汚れを流す方法もあります。取り外しに無理がある場合は、外さずに進めて構いません。",
  },
  {
    title: "サッシのレールにたまった砂を掻き出す",
    body: "乾いた状態のまま、細いブラシや使い古しの歯ブラシで粒を掻き出し、掃除機で吸い取ります。角の部分は綿棒や割り箸に布を巻いた物が届きます。ここで水を使うと泥になるため、乾いた粒を取り切ってから次に進むのが要点です。取り切れない黒い固まりは、次の工程で水分を使って柔らかくします。",
  },
  {
    title: "湿らせた布で網戸とレールを仕上げる",
    body: "固く絞った布で、網戸は両面から挟むように押さえて汚れを取ります。こするのではなく、押さえて移すイメージです。レールは、湿らせた布や綿棒で残った汚れを拭き取り、最後に乾いた布で水分を残さないようにします。水分が残ると、そこにほこりが付いて同じ状態に戻りやすくなります。",
  },
  {
    title: "最後に窓ガラスを拭いて仕上げる",
    body: "外側は水で汚れを浮かせてから拭き取り、内側は必要に応じて洗剤を含ませた布で拭いたあと、乾いた布で仕上げます。拭き跡を残さないコツは、一方向に動かすことと、最後に乾いた布で水分を残さないことです。曇りの日や直射日光の当たらない時間帯のほうが、乾きが早すぎず筋になりにくくなります。",
  },
];

const ngActions = [
  {
    title: "乾いた砂が残ったまま、いきなり水拭きを始める",
    body: "レールや網戸に乾いた砂が残った状態で水を使うと、粒が泥になって面に広がり、拭いても筋が残ります。落ちにくくなったぶん力を入れることになり、素材を傷める原因にもなります。乾いた汚れは乾いたうちに、掃除機やブラシで取り切ってから水分を使うという順番を守ってください。",
  },
  {
    title: "網戸を強くこすって、汚れをガラス側へ飛ばす",
    body: "網戸を片面から強くこすると、網がたわんで汚れが反対側へ押し出され、せっかく拭いた窓ガラスに付着します。網は面ではなく網目に汚れがたまるため、力任せの作業は効果が上がりません。両面から挟むように押さえて取る、あるいは外して洗うほうが、結果的に早く仕上がります。",
  },
  {
    title: "洗剤の表示を確認せずに、素材に使ってしまう",
    body: "洗剤には使える素材と使えない素材があり、確認せずに使うと変色や傷みにつながります。金属部分やゴムのパッキン、塗装面は特に注意が必要です。使用前に製品の表示を読み、目立たない場所で試してから広い面に使ってください。種類の異なる洗剤を混ぜて使うのは避けてください。",
  },
  {
    title: "脚立や窓枠に無理な姿勢で乗って作業する",
    body: "高い位置の窓を掃除しようとして、不安定な足場に乗る、窓枠に足をかける、手すりから身を乗り出すといった行動は、落下事故につながります。掃除の仕上がりよりも安全が優先です。届かない場所は無理をせず残し、必要であれば専門の業者に相談してください。一人で作業する日は、特に無理をしないことが大切です。",
  },
];

const judgeSigns = [
  "二階以上の外側の窓など、安全に届かない場所がある",
  "窓の数が多く、一日では手が回らない",
  "長年手を付けておらず、汚れが固着して落ちない",
  "体調や体力の面で、脚立に乗る作業が難しい",
  "退去や引き渡しの期限があり、仕上がりに条件がある",
];

const faqs = [
  {
    q: "網戸は外して洗ったほうがよいですか？",
    a: "外して洗えるなら汚れは落としやすくなりますが、取り付け方や設置場所によっては、外す作業自体に危険が伴います。無理なく外せる場合に限って外し、難しい場合は取り付けたまま掃除して構いません。外した網戸を戻す作業も含めて考え、一人で扱えるかどうかを基準に判断してください。",
  },
  {
    q: "レールの黒い汚れが落ちません。",
    a: "乾いた砂とほこりに水分が加わって固まったものであることが多く、いきなり水拭きすると広がります。まず乾いた状態でブラシや掃除機で粒を取り除き、その後に湿らせた布や綿棒で少しずつ緩めていくと落としやすくなります。強くこすると部品を傷めることがあるため、時間をかけて緩める進め方が安全です。",
  },
  {
    q: "窓を拭くと筋が残ってしまいます。",
    a: "水分が残ったまま乾くと筋になりやすいため、最後に乾いた布で拭き上げる工程を入れてください。直射日光が当たる時間帯は乾きが早く、拭き跡が残りやすくなります。曇りの日や日が当たらない時間帯を選ぶ、内側と外側で拭く方向を変えて、どちら側に筋が残っているか分かるようにする、といった工夫もあります。",
  },
  {
    q: "窓掃除だけを業者に頼めますか？",
    a: "窓とサッシ、網戸を対象にした作業を扱う事業者はありますが、対応の範囲や条件は事業者によって異なります。窓の枚数、外側を含むか、高い位置の窓があるかによって作業の内容が変わるため、見積もりの段階で範囲をはっきり伝えてください。料金は建物の条件・作業内容・地域・事業者により異なりますので、複数社で比べるのが確実です。",
  },
];

const related = [
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水回りの徹底清掃", desc: "水あか・カビを落とす手順" },
  { href: "/kabi-seisou/", label: "部屋のカビ掃除のやり方", desc: "安全な除去と再発防止" },
  { href: "/kitchen-konro-seisou/", label: "キッチン・コンロ周りの掃除", desc: "油汚れを落とす手順" },
  { href: "/veranda-katazuke/", label: "ベランダ・バルコニーの片付け", desc: "屋外まわりの整理の進め方" },
  { href: "/oosouji-gyousha-hani/", label: "大掃除を業者に頼む範囲", desc: "自分でやる場所・任せる場所" },
  { href: "/house-cleaning-chigai/", label: "ハウスクリーニングとの違い", desc: "どちらに頼むかの判断基準" },
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
    { "@type": "ListItem", position: 2, name: "窓・網戸・サッシの掃除手順" },
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
    { href: "#kiso", label: "1｜窓まわりは場所ごとに汚れの性質が違う" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜汚れを移さずに進めるための考え方" },
    { href: "#steps", label: "4｜窓・網戸・サッシを掃除する5ステップ" },
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

      <Breadcrumb items={[{ label: "窓・網戸・サッシの掃除手順" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          窓・網戸・サッシの掃除手順｜汚れの種類別のやり方と傷めない進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月2日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          窓ガラスを拭いたのに、乾いたら筋が残っている。網戸をこすったら、汚れが窓ガラスのほうへ移ってしまった。サッシのレールが黒くなっていて、雑巾では取れない。窓まわりの掃除は、面積のわりに手間がかかり、やり方を間違えると汚れを広げて終わることがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、窓ガラス・網戸・サッシで汚れの性質がどう違うのか、どの順番で進めると汚れを移さずに済むのか、網戸を外さずに掃除する方法、レールの砂を先に取るべき理由、そして素材を傷めないための注意点を順に解説します。住まいの構造や網戸の取り付け方は建物によって異なりますので、無理のない範囲で進めてください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>窓まわりは「網戸→サッシ→窓ガラス」の順に進めると、汚れを移さずに済む</li>
          <li>サッシのレールは、砂やほこりを乾いた状態で取り除いてから水を使う</li>
          <li>網戸は強くこすらず、汚れを浮かせて押さえ取るのが基本</li>
          <li>高い位置や外側の窓は、無理をせず届く範囲にとどめる。危険を感じたら業者に相談</li>
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

      <H2 id="kiso" num="1">窓まわりは場所ごとに汚れの性質が違う</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        同じ窓辺でも、ガラス・網戸・レールでは付いている汚れの種類が違います。ここを分けて考えると、やり方が決まります。
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
        順番、道具、そしてどこまでやるか。この三つを決めておくと、途中で手が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">汚れを移さずに進めるための考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        窓まわりの掃除がうまくいかない原因の多くは、順番と水分の使い方にあります。乾いた汚れを乾いたまま取り除ける段階で取り切らずに、いきなり水を使うと、砂やほこりが泥になって面に広がります。逆に、油分を含む汚れを乾いた布だけで落とそうとすると、伸ばして薄い膜にしてしまいます。「乾いた汚れは乾いたうちに、油を含む汚れは洗剤で浮かせてから」という切り分けを覚えておくと、どの場所でも判断できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もう一つの要点は、力を入れないことです。網はたわみ、ガラスは細かい砂で傷が付き、レールの部品は変形します。強くこするより、汚れを浮かせる時間を取ってから軽く拭き取るほうが、結果的に早く落ちます。洗剤を使う場合は、素材に使えるかを製品の表示で確認し、目立たない場所で試してから広い面に使ってください。カビが出ている場合の考え方は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">部屋のカビ掃除のやり方</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        窓まわりは、掃除だけでなく片付けと関わる場所でもあります。窓辺やベランダに物が置かれていると、レールに砂がたまりやすく、掃除のたびに物をどける手間もかかります。屋外まわりの整理は<Link href="/veranda-katazuke/" className="text-primary underline underline-offset-2">ベランダ・バルコニーの片付け方</Link>、水回りの徹底清掃は<Link href="/yokushitsu-mizumawari-seisou/" className="text-primary underline underline-offset-2">浴室・水回りの徹底清掃</Link>、キッチンまわりの油汚れは<Link href="/kitchen-konro-seisou/" className="text-primary underline underline-offset-2">キッチン・コンロ周りの掃除方法</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">窓・網戸・サッシを掃除する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        物をどける→網戸のほこりを落とす→レールの砂を取る→水分を使って仕上げる→窓ガラスを拭く。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">洗剤と素材、そして高所の作業には注意を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          洗剤は、使える素材が製品ごとに定められています。使用前に表示を確認し、目立たない場所で試してから広い面に使ってください。種類の異なる洗剤を混ぜて使わないこと、換気をしながら作業することも基本です。また、窓まわりの掃除でのけがは、脚立からの落下や、身を乗り出したことによる転落など、高い場所での作業によるものが中心です。二階以上の外側の窓、手すりから体を出す必要がある場所は、無理をせず作業をやめてください。集合住宅では、共用部やベランダの使い方が管理規約で定められていることがありますので、あわせてご確認ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        掃除を終えたあとは、窓辺に物を戻しすぎないことが、次回の負担を軽くします。レールの上に物を置かない、窓辺に細かい物を並べないだけでも、砂のたまり方が変わります。片付いた状態を保つ工夫は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>、部屋のにおいが気になる場合は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の臭いが消えないときの消臭手順</Link>が参考になります。
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
        次のような状況では、自力での作業にこだわらず、ハウスクリーニングなどの依頼を検討したほうが安全です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼する場合は、作業の範囲（窓の枚数、網戸を外すかどうか、外側を含むか）を書面で確認し、同じ条件で複数社の見積もりを比べましょう。片付けとハウスクリーニングでは頼める内容が異なるため、<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングと片付け業者の違い</Link>で違いを確認しておくと選びやすくなります。どこまでを自分でやり、どこから任せるかの線引きは<Link href="/oosouji-gyousha-hani/" className="text-primary underline underline-offset-2">大掃除を業者に頼む範囲の考え方</Link>で整理しています。料金は建物の条件・作業内容・地域・事業者により異なります。
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
        本記事は一般的な知識の提供を目的としたものです。洗剤や道具の使用方法・使用できる素材は製品により異なりますので、必ず製品の表示に従ってご使用ください。住宅の構造、窓や網戸の取り付け方は建物によって異なります。高い場所での作業は落下の危険を伴いますので、安全に届かない範囲は無理に行わないでください。集合住宅では、共用部やベランダの使用について管理規約で定めがある場合がありますので、管理会社や管理組合にご確認ください。事業者に依頼する場合の料金および作業範囲は、建物の条件・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
