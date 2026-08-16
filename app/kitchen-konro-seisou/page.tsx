import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kitchen-konro-seisou/";
const TITLE = "キッチン・コンロ周りの掃除方法｜油汚れを落とす手順と業者に頼む目安";
const DESC =
  "キッチン・コンロ周りの油汚れは「酸化して固まる前」に落とすのが基本です。軽い汚れは中性洗剤、固着した汚れはアルカリ性洗剤や重曹で対処する一般的な考え方、五徳・グリル・換気扇フィルター・壁面・シンクの部位別の掃除方法、自力で進める5ステップ、混ぜてはいけない洗剤などのNG行動、ハウスクリーニング業者に任せる判断基準までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "油汚れは「酸化して固まる前」に落とすのが大原則",
    body: "調理で飛び散った油は、付着した直後なら台所用の中性洗剤で簡単に拭き取れます。ところが時間が経つと空気に触れて酸化し、樹脂のように固くなって素材に密着します。さらにほこりと混ざり合うと、ベタベタとザラザラが同居した頑固な層になり、家庭用洗剤ではなかなか歯が立ちません。つまりキッチン掃除の効率は「汚れの鮮度」でほぼ決まります。日々の調理後にひと拭きする習慣があるかどうかで、大掃除の負担は大きく変わります。",
  },
  {
    title: "汚れの段階に合わせて洗剤を使い分ける",
    body: "洗剤には液性（酸性・中性・アルカリ性）があり、油汚れは酸性寄りの性質を持つため、アルカリ性の洗剤で中和して落とすのが一般的な考え方です。付着して間もない軽い油汚れは中性洗剤で十分ですが、固着した油汚れにはアルカリ性の洗剤や、重曹・セスキ炭酸ソーダといったアルカリ性の性質を持つ素材が使われます。ただし、洗剤や素材ごとに使える場所・使えない場所があるため、必ず製品の注意表示と用法を確認してから使用してください。",
  },
  {
    title: "部位ごとに汚れ方が違う。五徳・グリル・換気扇・壁面・シンクの特徴",
    body: "コンロの五徳や魚焼きグリルは、油と焦げが層になった「固着汚れ」の代表格で、つけ置きが有効な部位です。換気扇のフィルターやファンは、油とほこりが混ざった汚れが内部まで及びやすく、分解の難易度も高い部位です。コンロ周りの壁面は、飛び散った油が広範囲に薄く付着し、気づいたときには黄ばみとして目立ちます。シンクは油汚れよりも水あか・ぬめりが主体で、使う洗剤の系統が変わります。部位ごとの性質を知ってから取りかかると、力任せにこする無駄がなくなります。",
  },
];

const merits = [
  {
    title: "つけ置きは「洗剤に働いてもらう」基本テクニック",
    body: "五徳・グリルの網・換気扇フィルターのような取り外せる部品は、シンクや大きめの袋にお湯を張り、アルカリ性洗剤や重曹を溶かしてつけ置きするのが定番の方法です。汚れがゆるんでから洗えば、こする時間も力も大幅に減らせます。つけ置きの温度や時間、使える素材は製品や部品によって異なるため、洗剤の用法と部品の取扱説明書を確認してから行ってください。ゴム手袋を着用し、換気しながら作業するのが基本です。",
  },
  {
    title: "外せない場所は「湿布」と「養生」で対処する",
    body: "壁面やコンロ天板のように外して漬けられない場所は、洗剤を含ませたキッチンペーパーを貼り付けてラップで覆う、いわゆる湿布法で汚れをゆるめるのが一般的です。また、掃除の前に床や周囲の家電を新聞紙やビニールで覆う養生をしておくと、垂れた洗剤や飛び散った汚れの二次掃除を防げます。掃除の段取りは「養生→ゆるめる→拭き取る」の順で考えると、作業がスムーズに進みます。",
  },
  {
    title: "物が多いキッチンは、掃除の前に片付けが必要",
    body: "調理器具や食品ストック、使っていない調味料がコンロ周りやシンクに出しっぱなしの状態では、掃除のたびに物をどかす手間が発生し、掃除そのものが億劫になります。賞味期限切れの食品や使っていない調理器具を先に処分し、作業面を広く空けることが、キッチン掃除の実質的な第一歩です。物の仕分けと処分の考え方は、当サイトの片付けの手順記事や不用品処分の記事で詳しく解説しています。",
  },
];

const steps = [
  {
    title: "コンロ周り・シンク周りの物をどかして仕分ける",
    body: "まず、コンロ周りと調理台に置かれた物をすべて別の場所に移し、「使っている物」「使っていない物」「期限切れ・劣化した物」に仕分けます。油で汚れた古い調味料ボトルや使っていない調理器具は、この機会に処分を検討しましょう。作業面が空くと掃除の効率が一気に上がり、掃除後の置き場所も見直せます。処分に迷う物が多い場合は、仕分けの基準を先に決めておくと手が止まりません。",
  },
  {
    title: "軽い汚れの場所から中性洗剤で拭き上げる",
    body: "いきなり頑固な汚れに挑むのではなく、調理台・コンロ天板・壁面の軽い油汚れを中性洗剤で拭き上げるところから始めます。軽い汚れを先に処理しておくと、キッチン全体の印象が変わってやる気が続きやすく、頑固な汚れの範囲も正確に把握できます。拭き取りには使い捨てできる布やキッチンペーパーを使うと、雑巾に油が移って汚れを広げる事態を防げます。",
  },
  {
    title: "五徳・グリル・換気扇フィルターを外してつけ置きする",
    body: "取り外せる部品は、お湯にアルカリ性洗剤や重曹を溶かしてつけ置きします。つけている間に他の場所の掃除を進められるため、時間の使い方としても効率的です。つけ置き後はスポンジやブラシで残った汚れを落とし、水気を拭き取ってから戻します。素材によってはアルカリ性洗剤で変色するものがあるため、部品の材質と洗剤の注意表示を必ず確認し、ゴム手袋を着用して作業してください。",
  },
  {
    title: "固着した汚れは温め・湿布でゆるめてから落とす",
    body: "長年たまった固着汚れは、こするだけでは落ちません。洗剤を含ませたペーパーで湿布して時間を置く、ぬるま湯で温めて汚れをやわらかくするなど、「ゆるめてから落とす」工程を挟みます。それでも落ちない焦げ付きには、素材を傷めない範囲でヘラやスクレーパーを使う方法もありますが、力を入れすぎるとコーティングを傷つけるため慎重に。数回に分けて少しずつ薄くしていく気持ちで取り組むのが現実的です。",
  },
  {
    title: "仕上げに水拭き・乾拭きをして、汚れ予防の仕組みをつくる",
    body: "洗剤成分が残ると、ほこりを吸着してかえって汚れやすくなります。最後に水拭きで洗剤を取り除き、乾拭きで水気を残さないのが仕上げの基本です。そのうえで、コンロ周りの壁に汚れ防止シートを貼る、換気扇に市販のフィルターカバーを付ける、調理後にひと拭きする習慣を決めるなど、次の汚れをためない仕組みを作っておくと、この大変な掃除を繰り返さずに済みます。",
  },
];

const ngActions = [
  {
    title: "塩素系の洗剤と酸性の洗剤を混ぜる・併用する",
    body: "塩素系の洗剤と酸性タイプの洗剤が混ざると、有毒なガスが発生して大変危険です。製品に「まぜるな危険」と表示されているのはこのためです。同じ日に別系統の洗剤を同じ場所へ使うと、残留成分同士が反応するおそれもあります。系統の異なる洗剤を使う場合は、十分にすすいで時間を空け、必ず換気しながら作業してください。洗剤の表示を読まずに使うことが、キッチン掃除で最も避けるべき行動です。",
  },
  {
    title: "コンロの火が着いた状態・熱い状態で掃除する",
    body: "調理直後の温かいうちは汚れが落ちやすいのは事実ですが、火が着いたままの掃除や、高温の天板・グリルに触れる作業はやけどの危険があります。また、可燃性のスプレー類を火気の近くで使うのは厳禁です。掃除は必ず火を消し、天板や五徳が手で触れられる温度まで下がってから行ってください。ガスの元栓を閉めておくと、掃除中に誤ってスイッチに触れる事故も防げます。",
  },
  {
    title: "アルミや塗装面に強いアルカリ性洗剤を使う",
    body: "アルカリ性の強い洗剤は油汚れに効果的な一方、アルミ素材を黒く変色させたり、塗装面やコーティングを傷めたりすることがあります。五徳や換気扇部品の材質を確認せずに強い洗剤へ漬け込むと、汚れは落ちても部品が変色してしまう失敗につながります。目立たない場所で試してから使う、材質がわからない部品は中性洗剤から試すなど、段階を踏んで洗剤を選んでください。",
  },
  {
    title: "換気扇の内部を無理に分解する",
    body: "換気扇はフィルターの取り外しまでは想定されていても、ファンや内部部品の分解は機種によって難易度が大きく異なります。無理に分解すると、元に戻せない、部品を破損する、動作不良を起こすといったトラブルにつながります。取扱説明書に記載された範囲までを自力の限界とし、内部の油汚れが気になる場合は、分解洗浄に対応するハウスクリーニング業者への依頼を検討してください。",
  },
];

const judgeSigns = [
  "換気扇の内部から油が垂れる・異音がするなど、フィルター掃除では追いつかない",
  "何年分も蓄積した固着汚れで、自力の掃除では表面しか落ちない",
  "賃貸の退去前で、原状回復を見据えてしっかり仕上げたい",
  "共働きや体力面の事情で、キッチン掃除にまとまった時間を取れない",
  "キッチンの物があふれていて、掃除の前の片付けから手が回らない",
];

const faqs = [
  {
    q: "キッチンの油汚れには何の洗剤を使えばよいですか？",
    a: "付着して間もない軽い油汚れなら台所用の中性洗剤で十分です。時間が経って固着した油汚れには、アルカリ性の洗剤や重曹・セスキ炭酸ソーダなどが使われるのが一般的です。ただし素材によっては変色・傷みの原因になるため、製品の注意表示で使える場所を確認し、目立たない箇所で試してから使ってください。塩素系と酸性タイプの併用は有毒ガスが発生するため厳禁です。",
  },
  {
    q: "換気扇の掃除はどこまで自分でやれますか？",
    a: "一般的には、フィルターの取り外しとつけ置き洗いまでが自力の目安です。ファンや内部部品の分解は機種により難易度が大きく異なり、破損や動作不良のリスクがあるため、取扱説明書に記載のない分解は避けてください。内部の油汚れやモーター付近の汚れが気になる場合は、分解洗浄に対応するハウスクリーニング業者への依頼が現実的です。",
  },
  {
    q: "掃除とキッチンの片付け、どちらを先にやるべきですか？",
    a: "片付けが先です。コンロ周りや調理台に物が多い状態では、掃除のたびに物をどかす手間がかかり、汚れの全体像も見えません。期限切れの食品や使っていない調理器具を先に処分して作業面を空けてから掃除に入ると、効率が大きく変わります。物の量が多くて手に負えない場合は、片付け業者に仕分け・搬出から任せる方法もあります。",
  },
  {
    q: "キッチンクリーニングを業者に頼むと費用はどのくらいかかりますか？",
    a: "作業範囲（コンロのみ、換気扇の分解洗浄込みなど）や汚れの程度によって金額は大きく変わるため、一概には言えません。正確な金額を知るには、依頼したい範囲を伝えて2〜3社から見積もりを取り、作業内容と追加費用の条件を比較するのが確実です。事業者の比較には口コミを確認できるマッチングサービスも活用できます。",
  },
];

const related = [
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水回りの徹底清掃", desc: "水あか・カビ・皮脂汚れの落とし方" },
  { href: "/house-cleaning-chigai/", label: "ハウスクリーニングと片付け業者の違い", desc: "どちらに頼むべきかの判断基準" },
  { href: "/guide/self-cleanup/", label: "自力での片付け・清掃ガイド", desc: "自分で進めるための基本と道具" },
  { href: "/katazuke-junban/", label: "部屋を片付ける順番", desc: "挫折しない片付けの手順" },
  { href: "/review/kurashi-market/", label: "くらしのマーケットの評判", desc: "クリーニング事業者を口コミで比較" },
  { href: "/area/tokyo/", label: "東京の片付け業者比較", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "キッチン・コンロ周りの掃除方法" },
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
    { href: "#kiso", label: "1｜キッチンの油汚れの基礎知識" },
    { href: "#merit", label: "2｜つけ置き・湿布・片付けの基本テクニック" },
    { href: "#houshin", label: "3｜掃除を始める前の全体方針" },
    { href: "#steps", label: "4｜自力で進めるキッチン掃除の5ステップ" },
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

      <Breadcrumb items={[{ label: "キッチン・コンロ周りの掃除方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          キッチン・コンロ周りの掃除方法｜油汚れを落とす手順と業者に頼む目安
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「コンロ周りのベタベタが何をしても落ちない」「換気扇の掃除を何年も先送りにしている」——キッチンの油汚れは、時間が経つほど固着して落としにくくなる、家の中でも特に手ごわい汚れです。しかし、汚れの性質と洗剤の使い分けを知れば、力任せにこすらなくても段階的に落としていけます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、油汚れの基礎知識と部位別の掃除の考え方、自力で進める5ステップ、洗剤の誤用など絶対に避けたいNG行動、そしてハウスクリーニング業者に任せたほうがよい状態の見極め方までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>油汚れは酸化して固まる前が勝負。軽い汚れは中性洗剤、固着汚れはアルカリ性洗剤・重曹が一般的</li>
          <li>五徳・グリル・換気扇フィルターは「つけ置き」、外せない場所は「湿布」でゆるめてから落とす</li>
          <li>塩素系と酸性洗剤の併用は有毒ガスが発生するため厳禁。洗剤は必ず製品表示を確認して使う</li>
          <li>換気扇内部の分解洗浄や長年の固着汚れは、無理をせずハウスクリーニング業者へ</li>
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

      <H2 id="kiso" num="1">キッチンの油汚れの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        やみくもにこすり始める前に、油汚れの性質を押さえておきましょう。仕組みがわかれば、洗剤選びも段取りも迷わなくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">つけ置き・湿布・片付けの基本テクニック</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        キッチン掃除の負担を減らすコツは、「洗剤と時間に働いてもらう」ことです。次の3つの考え方を押さえておきましょう。
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
        キッチン掃除の大原則は、「片付けてから、軽い汚れから、ゆるめてから」の3つです。物をどかしてから始める、簡単な場所で勢いをつける、固着汚れは洗剤と時間でゆるめてから落とす——この順番を守るだけで、挫折の確率は大きく下がります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        キッチンに限らず部屋全体の掃除・片付けの進め方は<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自力での片付け・清掃ガイド</Link>で、物の仕分けの順番は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋を片付ける順番</Link>で解説しています。また、「汚れを落とす」作業を業者に任せる選択肢については<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングと片付け業者の違い</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">自力で進めるキッチン掃除の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際の作業手順を5つのステップで紹介します。換気を確保し、ゴム手袋を着用してから始めてください。
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
        次のいずれかに当てはまる場合は、自力にこだわらず専門業者への相談を検討しましょう。汚れの状態がわかる写真があれば、見積もりの相談がスムーズです。
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
        キッチンや換気扇のクリーニング事業者を口コミで比較するなら<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>のようなマッチングサービスが活用できます。掃除の前の片付け・不用品の処分から手が回らない場合は、<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行サービス</Link>に仕分け・搬出から任せる方法もあります。
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
        本記事は一般的な知識の提供を目的としたものです。洗剤・掃除用品は必ず製品の注意表示・用法に従ってお使いください。特に塩素系と酸性タイプの併用は有毒ガスが発生するため厳禁です。設備の分解は取扱説明書の範囲内に留め、無理な作業はお控えください。クリーニング・片付けの料金は作業範囲・汚れ具合により異なるため、依頼前に必ず見積もりでご確認ください。
      </p>
    </article>
  );
}
