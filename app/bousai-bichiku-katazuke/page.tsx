import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/bousai-bichiku-katazuke/";
const TITLE = "防災備蓄と片付けの両立｜置き場所のつくり方と収納のコツ";
const DESC =
  "「防災備蓄を用意したいが置き場所がない」の答えは、片付けで空間を確保することです。散らかった家が災害時のリスクになる理由、分散備蓄・ローリングストックなど一般に推奨される備蓄の考え方、避難経路の確保から備蓄の定位置化までの自力5ステップ、廊下や玄関に物を置くなどのNG行動、物量が多く自力で進められない場合の業者活用までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "散らかった家は、災害時に「逃げられない・けがをする」リスクになる",
    body: "消防や自治体の防災広報では、避難経路となる廊下・玄関・階段に物を置かないこと、寝室に倒れやすい家具や落ちやすい物を置かないことが一般的に呼びかけられています。床置きの物が多い家は、地震の揺れで物が散乱して通路をふさぎ、停電の暗闇では散乱物が避難の障害になります。つまり、片付いていない状態そのものが防災上のリスクです。備蓄をそろえる前に、まず「安全に逃げられる家」にすることが防災の第一歩になります。",
  },
  {
    title: "備蓄が続かない最大の理由は「置き場所がない」",
    body: "水や食料を備蓄したほうがよいと分かっていても実行できない理由として多いのが、置き場所の問題です。収納が物でいっぱいだと、備蓄品は買っても床置きや廊下置きになり、生活の邪魔になって結局やめてしまいます。国や自治体の防災情報では、家庭の備蓄は最低3日分、できれば1週間分が目安として案内されるのが一般的で、家族分となるとまとまった容積が必要です。この空間は、使っていない物を手放すことでしか生まれません。",
  },
  {
    title: "片付けと防災は「同じ作業の表と裏」",
    body: "防災のための家づくりは、特別な作業ではありません。避難経路の床置きをなくす、倒れそうな物の山を崩す、収納の中の死蔵品を手放して備蓄スペースに変える——これらはすべて、普通の片付けそのものです。「防災のため」という目的があると、家族の協力も得やすく、捨てる判断も進みやすくなります。片付けの仕上げに備蓄の定位置を作る、という流れで進めれば、片付けと防災対策が一度に完了します。",
  },
];

const merits = [
  {
    title: "考え方1：1か所にまとめず「分散備蓄」にする",
    body: "備蓄品を1つの収納にまとめると、その場所が被災（家具の転倒・扉の変形など）で開かなくなったとき、すべてを失うおそれがあります。このため、水は台所と廊下収納、非常食は複数の部屋、持ち出し袋は玄関付近と寝室、というように分けて置く「分散備蓄」が一般的に推奨されています。分散は収納面でも有利で、「各収納の一角を備蓄枠にする」方式なら、大きな空きスペースをまとめて作る必要がなくなります。",
  },
  {
    title: "考え方2：日常の延長で回す「ローリングストック」にする",
    body: "非常食を特別な場所に死蔵すると、気づいたときには期限切れ、というのが典型的な失敗です。普段から食べる缶詰・レトルト・飲料水を少し多めに買い置きし、古い物から消費して補充する「ローリングストック」なら、備蓄が日常の食品管理に組み込まれ、期限切れがほぼなくなります。この方式は「パントリーや食品棚の整理」とセットで導入するのが効果的で、棚の一角を買い置きの定位置にすれば運用が回り始めます。",
  },
  {
    title: "考え方3：デッドスペースは「重い物は下・出しやすさ優先」で使う",
    body: "ベッド下・クローゼットの足元・押し入れの下段などのデッドスペースは、備蓄の置き場所として有効です。ただし原則があり、水など重い物は必ず低い場所に置くこと（高所の重量物は落下・転倒のリスク）、持ち出し袋はしまい込まず玄関や寝室のすぐ取れる位置に置くことが大切です。また、廊下・階段・玄関のような避難経路は、収納家具を置く場所ではなく空けておく場所です。「入る場所」ではなく「安全に取り出せる場所」を基準に選びましょう。",
  },
];

const steps = [
  {
    title: "避難経路（玄関・廊下・階段）の床置きをゼロにする",
    body: "最初にやるべきは、備蓄の購入ではなく避難経路の確保です。玄関・廊下・階段に置かれた段ボール、ストック品、家具を撤去し、夜間の停電時でも安全に通れる状態にします。ここは家族全員の命に関わる最優先エリアなので、「一時置き」も禁止にするのが原則です。撤去した物は、使う物なら定位置を作り、使わない物はこの機会に手放します。玄関周りがすっきりすると、持ち出し袋の定位置も自然に確保できます。",
  },
  {
    title: "寝室の「倒れる物・落ちる物」を減らす",
    body: "次に、就寝中の被災を想定して寝室を見直します。ベッドや布団の周りに、倒れてくる背の高い家具、落ちてくる重い物、割れるガラス製品がないかを確認し、配置換えや固定、物の削減で対処します。家具の固定器具は自治体の防災情報でも一般的に案内されている対策です。物が多くて配置換えができない場合は、まず物を減らすことが先です。介護や高齢家族の部屋は転倒リスクの観点も含め、介護に備えた住環境整理の記事も参考にしてください。",
  },
  {
    title: "収納の死蔵品を手放し、備蓄スペースを確保する",
    body: "避難経路と寝室が安全になったら、備蓄の置き場所づくりです。押し入れ・クローゼット・パントリーを見直し、何年も使っていない死蔵品を手放して、収納の1〜2割を備蓄枠として空けます。「防災のためのスペースを作る」という明確な目的があると、迷っていた物も判断しやすくなります。仕分けの基本は1年使っていない物から。片付けの進め方全般は自力での片付けガイドが参考になります。",
  },
  {
    title: "備蓄品を分散配置し、定位置を家族で共有する",
    body: "空けたスペースに、水・食料・生活用品・持ち出し袋を分散配置します。重い物は下段、持ち出し袋は玄関・寝室のすぐ取れる位置が原則です。配置したら「どこに何があるか」を家族全員で共有しましょう。災害時に備蓄の場所を知っているのが一人だけでは、その人が不在のときに機能しません。簡単な備蓄マップやリストを作って冷蔵庫などに貼っておくと、家族の誰でも把握できます。",
  },
  {
    title: "年1回の「見直しデー」で備蓄と片付けをセットで点検する",
    body: "最後に、維持の仕組みです。防災の日（9月1日）や年末の大掃除など、覚えやすい日を「見直しデー」に決め、備蓄品の期限チェックと避難経路の点検をセットで行います。ローリングストックを導入していれば、この日の作業は補充と期限確認だけで済みます。あわせて「廊下に物が増えていないか」「収納があふれ始めていないか」も点検すれば、片付いた状態と備蓄が同時に維持できます。",
  },
];

const ngActions = [
  {
    title: "廊下・玄関・階段を収納代わりにする",
    body: "「通れるから大丈夫」と廊下や階段に物を置くのはNGです。地震の揺れで物が倒れ・散乱すれば、通れたはずの通路が一瞬でふさがります。停電の暗闇や火災の煙の中では、わずかな障害物が避難の致命的な遅れにつながります。消防の広報でも、避難経路に物を置かないことは一般的に呼びかけられている基本事項です。廊下に置きたくなるほど物が多いなら、それは収納の問題ではなく総量の問題と考えましょう。",
  },
  {
    title: "高い場所に重い物・水のストックを置く",
    body: "収納の上段や棚の上に、水のケースや重い家電・工具箱を置くのは危険です。地震の揺れで落下すれば、けがの原因になるだけでなく、落下物で通路や扉がふさがれることもあります。重い物は腰より下、軽い物を上へ、が収納の大原則です。既に上段に重い物がある家は、備蓄を買い足す前に、まずこの配置替えから始めてください。それだけで家の中の安全性は大きく変わります。",
  },
  {
    title: "備蓄品を奥にしまい込み、期限切れのまま放置する",
    body: "「備蓄した」という安心感で満足し、押し入れの奥にしまい込むと、数年後に期限切れの山を発見することになります。期限切れの備蓄は、いざというとき役に立たないうえ、処分の手間という新たな片付け問題を生みます。備蓄は「しまい込む物」ではなく「回す物」。ローリングストックで日常の消費サイクルに乗せるか、年1回の見直しデーを必ずセットにして、生きた備蓄を維持しましょう。",
  },
  {
    title: "ベランダの避難ハッチ・隔て板の前に物を置く",
    body: "集合住宅のベランダにある避難ハッチや隣戸との隔て板は、火災時の避難経路です。この前に物置・プランター・不用品を置くと、緊急時に避難できず、自分だけでなく他の住人の避難も妨げるおそれがあります。ベランダを物置化させないことも立派な防災対策です。ベランダにたまった不用品の片付け方は、ベランダの片付けの記事で詳しく解説しています。",
  },
];

const judgeSigns = [
  "物が多すぎて、避難経路の確保や寝室の安全化が自力では進められない",
  "高齢の家族の家の防災対策として、まとまった片付けが必要",
  "重い家具の移動・配置替えを伴う作業を一人ではできない",
  "収納の奥の死蔵品が大量で、仕分け・搬出をやり切る時間が取れない",
  "期限切れ備蓄や古い家財の処分がまとまった量になっている",
];

const faqs = [
  {
    q: "備蓄はどのくらいの量を用意すればよいですか？",
    a: "国や自治体の防災情報では、水・食料は最低3日分、できれば1週間分が一般的な目安として案内されています。必要量は家族構成（乳幼児・高齢者・ペットの有無など）により変わるため、お住まいの自治体が公開している備蓄品リストを確認するのが確実です。一度にそろえる必要はなく、ローリングストックで少しずつ積み上げる方法が無理なく続きます。",
  },
  {
    q: "収納が少ない家では、どこに備蓄を置けばよいですか？",
    a: "まず収納内の死蔵品を手放して1〜2割の空きを作るのが基本です。そのうえで、ベッド下・クローゼットの足元・家具の隙間などのデッドスペースに分散配置します。重い水は低い場所に、持ち出し袋は玄関・寝室のすぐ取れる位置に置くのが原則です。廊下や階段は避難経路のため、収納スペースとして使わないでください。",
  },
  {
    q: "期限切れの備蓄品はどう処分すればよいですか？",
    a: "未開封でも期限を大きく過ぎた食品は、中身とパッケージを分別して自治体のルールに従って処分するのが基本です。水は生活用水（掃除など）に使い切る方法もあります。カセットボンベや乾電池など備蓄に含まれがちな品目は分別に注意が必要です。扱いに迷う物は、分別が難しい物の処分の記事と自治体の分別案内を確認してください。",
  },
  {
    q: "家具の転倒防止は何から始めればよいですか？",
    a: "一般に効果が大きいとされる順は、(1)寝室・避難経路から背の高い家具を減らす・移す、(2)残す家具を固定する、(3)落下しやすい物を高所から下ろす、です。固定器具の選び方や補助制度の有無は自治体により案内が異なるため、お住まいの自治体の防災ページを確認しましょう。物が多くて配置換えができない場合は、片付けで総量を減らすことが先決です。",
  },
];

const related = [
  { href: "/veranda-katazuke/", label: "ベランダの片付け", desc: "避難経路・防水に配慮した手順" },
  { href: "/kaigo-juukankyou-seiri/", label: "介護に備えた住環境整理", desc: "動線・転倒対策の整え方" },
  { href: "/gomiyashiki-houchi-risk/", label: "ゴミ屋敷放置のリスク", desc: "火災・健康リスクの解説" },
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "挫折しない片付けの進め方" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "不用品の積み放題プランがある業者" },
  { href: "/area/sendai/", label: "仙台の片付け業者比較", desc: "仙台から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "防災備蓄と片付けの両立" },
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
    { href: "#kiso", label: "1｜片付けが防災になる3つの理由" },
    { href: "#merit", label: "2｜備蓄の置き方3つの考え方" },
    { href: "#houshin", label: "3｜始める前の全体方針" },
    { href: "#steps", label: "4｜防災片付けの5ステップ" },
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

      <Breadcrumb items={[{ label: "防災備蓄と片付けの両立" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          防災備蓄と片付けの両立｜置き場所のつくり方と収納のコツ
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「防災備蓄を用意したいけれど、置き場所がない」——この悩みの答えは、備蓄グッズ選びではなく片付けにあります。物であふれた家は備蓄が置けないだけでなく、避難経路の障害や落下物というリスクを抱えた状態でもあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、片付けが防災になる理由、分散備蓄・ローリングストックといった一般に推奨される備蓄の考え方、避難経路の確保から備蓄の定位置化・年1回の見直しまでの5ステップ、防災上危険なNG行動までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>備蓄より先に片付け。最優先は玄関・廊下・階段の床置きゼロと寝室の安全化</li>
          <li>備蓄スペースは収納の死蔵品を手放して確保し、1か所集中でなく分散配置する</li>
          <li>非常食はローリングストックで日常の消費サイクルに乗せると期限切れを防げる</li>
          <li>重い物は低い場所へ。避難経路・ベランダの避難設備の前には何も置かない</li>
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

      <H2 id="kiso" num="1">片付けが防災になる3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        防災対策というとグッズの購入を思い浮かべがちですが、家の状態そのものが防災力を左右します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">備蓄の置き方3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        限られた収納で備蓄を無理なく続けるために、一般に推奨されている考え方を3つ紹介します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「安全確保が先、備蓄は後」です。順番は (1)避難経路の床置きゼロ、(2)寝室の転倒・落下対策、(3)収納を空けて備蓄配置、の3段階。備蓄品を先に買い込むと、置き場所がないまま床置きが増え、かえって危険な家になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付けそのものの進め方は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>と<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自力での片付けガイド</Link>を参考にしてください。物が多い状態を放置するリスクは<Link href="/gomiyashiki-houchi-risk/" className="text-primary underline underline-offset-2">ゴミ屋敷放置のリスク</Link>で解説しているとおり、火災・転倒など防災面のリスクと直結しています。高齢の家族の家であれば<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護に備えた住環境整理</Link>の視点もあわせて確認しましょう。
      </p>

      <H2 id="steps" num="4">防災片付けの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「避難経路→寝室→収納→分散配置→年1回の点検」の順番を守ることです。
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
        次のいずれかに当てはまる場合は、自力にこだわらず片付け業者への相談を検討しましょう。安全に関わる片付けは、先送りするほどリスクが続きます。
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
        物量が多い場合は、仕分けから搬出まで対応する片付け業者や、トラック単位で回収する<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような不用品回収業者が候補になります。回収を依頼する際は、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。業者選びの基本は<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。備蓄量の目安・家具固定の推奨方法・支援制度などは、国・消防・自治体の公表する防災情報の一般的な内容に基づいており、詳細はお住まいの自治体の案内をご確認ください。ごみの分別区分は自治体により異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
