import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kaigo-juukankyou-seiri/";
const TITLE = "介護に備える部屋の片付け｜動線・転倒対策を含む住環境の整え方";
const DESC =
  "在宅介護を始める前の住環境整理は、「物を減らすこと」より「安全な動線を作ること」が目的です。介護に備えた片付けの考え方、本人の気持ちを尊重した進め方、自力で進める5ステップ、やってはいけないNG行動、業者やケアマネジャーに相談すべきサインまでを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "介護前の片付けの目的は「安全な動線づくり」",
    body: "介護に備えた住環境整理は、一般的な断捨離とは目的が異なります。ゴールは物を減らすことそのものではなく、本人が安全に移動できる動線と、介助者が動きやすい空間を確保することです。具体的には、ベッドからトイレ・洗面所・リビングまでの通路に物がない状態、夜間でも足元が見える状態、車いすや歩行器を使う可能性があるなら幅に余裕のある通路が目安になります。この目的がはっきりしていると、「何を動かし、何を残すか」の判断がぶれません。",
  },
  {
    title: "家庭内の転倒は身近なリスク。床の物・段差・滑りやすさが三大要因",
    body: "高齢期の転倒は、骨折や入院、その後の生活機能の低下につながりやすいことが広く知られており、その多くは屋外ではなく住み慣れた家の中で起こるとされています。原因としてよく挙げられるのは、床に置かれた物や電気コード、カーペットのめくれ、小さな段差、滑りやすい床や浴室です。つまり、床の物を減らしてコード類を壁沿いにまとめるだけでも、転倒リスクへの対策として意味があります。",
  },
  {
    title: "本人の暮らしの場であることを忘れない",
    body: "介護に備える片付けは、あくまで本人の生活の場を整える作業です。家族から見ると不要に見える物でも、本人にとっては長年の暮らしを支えてきた大切な物かもしれません。安全に関わる場所（通路・足元・火の周り）を優先して整え、それ以外の私物は本人の意思を尊重して急がない、という線引きが、関係を損なわずに進めるコツです。進め方の呼吸は実家の片付けと共通する部分が多くあります。",
  },
];

const merits = [
  {
    title: "転倒・事故の予防は本人の自立した生活を長く保つ",
    body: "動線が整った家は、本人が自分の力で移動しやすい家でもあります。転倒による骨折や入院を避けられれば、それだけ自立した生活を続けやすくなります。片付けは「本人の行動を制限するため」ではなく「本人ができることを減らさないため」の環境づくりと捉えると、本人にも前向きに受け止めてもらいやすくなります。",
  },
  {
    title: "介助者の負担と事故リスクも減る",
    body: "介助が始まると、家の中を1日に何度も行き来することになります。通路が狭い、床に物がある、必要な物がどこにあるかわからない、という状態は、介助者の身体的・精神的負担を大きくします。動線の確保と物の定位置化は、介助を受ける側とする側の両方を守る準備です。",
  },
  {
    title: "介護用ベッドや福祉用具を置くスペースを先に確保できる",
    body: "在宅介護では、介護用ベッド、ポータブルトイレ、車いす、歩行器などの福祉用具を導入する場合があります。これらは想像以上にスペースを必要とするため、導入が決まってから慌てて片付けるのではなく、事前に置き場所と搬入経路を確保しておくとスムーズです。どの用具が必要になり得るかは、担当のケアマネジャーや地域包括支援センターに相談しながら考えると現実的な計画になります。",
  },
];

const steps = [
  {
    title: "本人・家族・ケアマネジャーと「どの部屋で過ごすか」を決める",
    body: "最初に、本人が主に過ごす部屋と、トイレ・洗面所・浴室・台所への動線を確認し、どこを重点的に整えるかを決めます。介護保険のサービスを利用している・利用予定の場合は、担当のケアマネジャーに住環境の相談をすると、必要な福祉用具や住宅改修の視点も含めた助言が得られます。まだ相談先がない場合は、お住まいの地域の地域包括支援センターが高齢期の暮らし全般の相談窓口になります。",
  },
  {
    title: "動線上の床の物・コード・マットを撤去する",
    body: "ベッドからトイレまで、リビングから玄関までなど、本人が日常的に通る経路の床に置かれた物を撤去します。電気コードは壁沿いにまとめ、めくれやすいマットや滑りやすい敷物は固定するか思い切って外します。「通路の床には何も置かない」を合言葉にすると、家族全員で状態を維持しやすくなります。",
  },
  {
    title: "よく使う物を「立ったまま・座ったまま届く高さ」に集める",
    body: "毎日使う物ほど、かがんだり踏み台に乗ったりせずに届く高さ（おおよそ腰から目線の間）に集めます。高い棚の上の物を取ろうとする動作や、床の物を拾う動作は転倒につながりやすいためです。逆に、使用頻度の低い物は箱にまとめて別室や収納の奥へ移動し、本人の生活空間から物の絶対量を減らします。",
  },
  {
    title: "夜間の動線に照明を足し、寝室からトイレを最短にする",
    body: "夜間のトイレへの移動は、転倒が起こりやすい場面の一つです。廊下や足元を照らす照明（人感センサー付きの足元灯など）を追加し、可能であれば寝る場所をトイレに近い部屋に変えることも検討します。ベッドの高さや手すりの必要性など住宅改修に関わる内容は、介護保険の住宅改修費の仕組みが使える場合があるため、自己判断で工事する前にケアマネジャーや自治体の窓口に確認しましょう。",
  },
  {
    title: "空いた部屋・不要になった大型家具を整理し、福祉用具の置き場を作る",
    body: "動線の確保とあわせて、使っていない大型家具や大量の不用品を整理すると、介護用ベッドや福祉用具の置き場、介助者が作業できるスペースが生まれます。大型家具の搬出は無理をせず、家族だけで運べない物は業者の利用を検討してください。処分ルートの選び方は不用品の処分ルート比較の記事にまとめています。本人の私物を処分する際は、必ず本人の同意を得てから進めます。",
  },
];

const ngActions = [
  {
    title: "本人に相談せず家族だけで一気に片付ける",
    body: "安全のためであっても、本人の同意なく持ち物を動かしたり処分したりすると、本人の混乱や強い反発を招き、その後の介護の協力関係にも影響します。特に長年の習慣で物の位置を体で覚えている場合、勝手な配置換えはかえって事故のもとになります。目的を説明し、本人と一緒に決めながら進めるのが原則です。",
  },
  {
    title: "「危ないから」と本人の物や活動を必要以上に取り上げる",
    body: "安全を理由に趣味の道具や愛用品まで取り上げてしまうと、本人の生活の張り合いを損ないかねません。介護に備える片付けの目的は、本人ができることを減らすことではなく、安全にできる環境を作ることです。リスクが心配な物は、撤去の前に置き場所や使い方の工夫で対応できないかを検討し、判断に迷う場合はケアマネジャーなど専門職に相談しましょう。",
  },
  {
    title: "通路や出入口に物を戻してしまう生活動線のまま維持しようとする",
    body: "片付けた直後はきれいでも、通路や部屋の出入口が「一時置き場」に戻ってしまうと、転倒リスクも元に戻ります。物が床に戻る原因の多くは、収納の定位置が決まっていないことです。よく使う物の定位置を本人と一緒に決め、家族や介助者も同じルールで戻すようにすると、状態を維持できます。",
  },
  {
    title: "大型家具の移動・搬出を高齢の本人や家族だけで行う",
    body: "タンスやベッドなどの大型家具の移動は、腰を痛めたり家具の転倒で怪我をしたりするリスクの高い作業です。特に高齢のご本人やご家族だけで無理に動かすのは避けてください。運べない大型家具の搬出・処分の選択肢は、大型家具の処分方法の記事で解説しています。搬出を業者に任せ、家族は仕分けの判断に集中する分担が安全です。",
  },
];

const judgeSigns = [
  "動線を作りたいが、大型家具の移動・搬出が家族の手には負えない",
  "退院や介護サービス開始までの期限があり、短期間で環境を整える必要がある",
  "物量が多く、部屋を空ける作業が家族だけでは終わらない",
  "遠方に住んでいて、実家の環境整備に十分な時間を割けない",
  "長年物がたまった部屋を、仕分けから搬出まで一括で整えたい",
];

const faqs = [
  {
    q: "介護に備える片付けは、何から始めればよいですか？",
    a: "本人が主に過ごす部屋からトイレ・洗面所までの動線の確保から始めるのがおすすめです。床の物・電気コード・めくれやすいマットの撤去は、費用をかけずにすぐでき、転倒対策として効果的です。全体の計画は、担当のケアマネジャーや地域包括支援センターに相談しながら立てると、福祉用具や住宅改修も含めた現実的な内容になります。",
  },
  {
    q: "本人が片付けを嫌がる場合はどうすればよいですか？",
    a: "まず「捨てるための片付け」ではなく「安全に暮らすための環境づくり」であることを伝え、通路と足元など安全に直結する場所に範囲を絞って提案してみてください。本人の物を勝手に動かさない、判断は本人に委ねる、という姿勢が信頼につながります。説得が難しい場合は、ケアマネジャーなど本人が信頼する第三者から話してもらうのも一つの方法です。",
  },
  {
    q: "手すりの設置や段差の解消も自分たちでやるべきですか？",
    a: "手すり設置や段差解消などの住宅改修は、取り付け位置や強度を誤るとかえって危険なため、自己判断で進める前に専門職への相談をおすすめします。介護保険の認定を受けている場合、住宅改修費の支給制度が利用できることがあります。制度の詳細や対象はケアマネジャーまたはお住まいの自治体の介護保険窓口で確認してください。",
  },
  {
    q: "介護前の片付けを業者に依頼すると費用はどのくらいかかりますか？",
    a: "費用は物量・間取り・搬出条件・作業範囲（仕分けの立ち会い、大型家具の搬出、処分の量など）によって大きく異なるため、一律にいくらとは言えません。複数社から見積もりを取り、作業範囲と内訳を比較して判断するのが確実です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
];

const related = [
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "元気なうちに進める持ち物と情報の整理" },
  { href: "/shisetsu-nyukyomae-kazai-seiri/", label: "施設入居前の家財整理", desc: "持ち込む物の選定と残す家財の整理" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない家具の搬出と処分の選択肢" },
  { href: "/service/katazuke-daikou/", label: "片付け代行サービスの選び方", desc: "仕分けから搬出まで任せられる業者" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "間取り・作業別の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "介護に備える部屋の片付け" },
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
    { href: "#kiso", label: "1｜介護に備える片付けの基礎知識" },
    { href: "#merit", label: "2｜住環境を整える3つの意味" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める住環境整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "介護に備える部屋の片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          介護に備える部屋の片付け｜動線・転倒対策を含む住環境の整え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「親の退院までに家を整えたい」「在宅介護が始まる前に、転倒しない部屋にしておきたい」——介護をきっかけにした片付けは、通常の片付けと違い、安全な動線づくりと本人の気持ちへの配慮という2つの視点が欠かせません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、介護に備える住環境整理の目的と考え方を整理したうえで、自力で進める5つのステップ、本人との関係を損なわないための注意点、業者や専門職に相談すべきサインまでを解説します。これから在宅介護に備えるご家族に役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>介護前の片付けの目的は物を減らすことではなく「安全な動線」を作ること</li>
          <li>最優先は通路の床の物・コード・めくれやすいマットの撤去。費用をかけずに転倒対策になる</li>
          <li>本人の同意なく物を動かさない・処分しないのが大原則</li>
          <li>福祉用具や住宅改修が関わる判断は、ケアマネジャー・地域包括支援センターに相談する</li>
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

      <H2 id="kiso" num="1">介護に備える片付けの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、介護に備える片付けが通常の片付け・断捨離とどう違うのかを整理しておきましょう。目的の違いがわかると、優先順位のつけ方が明確になります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">住環境を整える3つの意味</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        介護前の住環境整理には、本人・介助者・これからの介護生活のそれぞれにとって意味があります。主なポイントは次の3つです。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        介護に備える片付けの大原則は、「安全に直結する場所を優先し、本人の同意を得ながら、専門職と連携して進める」ことです。家全体を一度に整えようとせず、本人が過ごす部屋と動線という範囲に絞ることで、短期間でも効果のある環境が作れます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、この片付けは家族だけで抱え込む必要はありません。介護保険を利用している・申請予定の場合はケアマネジャーが、まだの場合は地域包括支援センターが相談窓口になります。物量が多い場合の進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>の記事が、本人が元気なうちの整理は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">自力で進める住環境整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際に手を動かす手順を5つのステップで紹介します。ポイントは「動線が先、収納はあと、大物は無理をしない」です。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        整理で出た不用品の手放し方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で、自治体の粗大ごみ収集の使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>で解説しています。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
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
        次のいずれかに当てはまる場合は、家族だけで無理をせず、片付け業者への相談を検討しましょう。仕分けの判断は家族が行い、搬出・処分という体力仕事を業者に任せる分担が、安全で現実的です。
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
        業者選びでは、立ち会いのもとで仕分けに対応してくれるかを確認しましょう。長年の実績を持つ<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">お部屋片付け日本一</Link>や、丁寧な対応に定評のある<Link href="/review/otasuke-usagi/" className="text-primary underline underline-offset-2">おたすけうさぎ</Link>のような片付け業者が候補になります。名古屋など各都市の業者は<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者比較</Link>で紹介しています。
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
        本記事は一般的な知識の提供を目的としたもので、介護・医療・介護保険制度に関する個別の助言を行うものではありません。福祉用具・住宅改修・介護サービスに関わる判断は、担当のケアマネジャー、地域包括支援センター、またはお住まいの自治体の介護保険窓口にご相談ください。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
