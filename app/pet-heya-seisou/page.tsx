import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/pet-heya-seisou/";
const TITLE = "ペットのいる部屋の掃除と消臭｜抜け毛・臭い・汚れを安全に落とす手順";
const DESC =
  "ペットと暮らす部屋の抜け毛・臭い・汚れは、掃除の順番と道具の使い分けで大きく改善できます。動物に配慮した安全な清掃の基本、自力で進める5ステップ、やってはいけないNG行動、専門業者に相談すべきサインまで、犬・猫と暮らす方に向けて順を追って解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ペットの部屋の汚れは「毛・皮脂・排泄物・食べこぼし」の4種類",
    body: "ペットのいる部屋の汚れは、大きく分けて抜け毛、体から出る皮脂やフケ、トイレまわりの排泄物由来の汚れ、フードや水の食べこぼし・飲みこぼしの4種類です。種類によって効果的な掃除方法が異なるため、「臭いが取れない」「掃除してもすぐ汚れる」と感じるときは、どの汚れに手が回っていないのかを切り分けることが最初の一歩になります。特に臭いは、目に見える汚れよりも、布製品や床材に染み込んだ皮脂・排泄物由来の成分が原因になっていることが多くあります。",
  },
  {
    title: "臭いの主な発生源は「布製品」と「トイレまわり」",
    body: "カーペット、ソファ、クッション、ペット用ベッド、カーテンなどの布製品は、毛や皮脂を抱え込みやすく、部屋の臭いの大きな発生源になります。また、トイレ容器そのものや、その周辺の床・壁に飛び散った尿汚れも、時間が経つほど臭いが強くなります。部屋全体に消臭剤をまく前に、まずこの2か所を重点的に掃除・洗濯するほうが、臭い対策としては近道です。臭いの原因の切り分け方は、部屋の臭いが消えないときの対処の記事でも詳しく解説しています。",
  },
  {
    title: "掃除は「ペットの安全」を最優先に考える",
    body: "人間には問題のない洗剤や芳香剤でも、犬や猫にとっては刺激が強すぎるものがあります。清掃中は、ペットを別の部屋やケージに移して洗剤に直接触れない環境を作り、使用する製品は表示をよく読み、用法用量を守り、使用後は十分に換気と拭き取りを行うのが基本です。ペットの体調に関わる判断（皮膚炎や臭いの変化が病気由来かどうかなど）は、自己判断せず動物病院に相談してください。",
  },
];

const merits = [
  {
    title: "こまめな掃除はペット自身の健康環境づくりでもある",
    body: "抜け毛やホコリがたまった部屋は、人間だけでなくペットにとっても快適とは言えません。毛やダニ・ホコリの少ない環境を保つことは、一緒に暮らす動物の生活環境を整えることでもあります。掃除を「飼い主の負担」ではなく「ペットと快適に暮らすための世話の一部」と捉えると、習慣として続けやすくなります。",
  },
  {
    title: "毎日の5分と週1回の重点掃除の組み合わせが最も効率的",
    body: "ペットの汚れは毎日発生するため、月に1回の大掃除よりも、毎日の短時間の掃除と週1回の重点掃除を組み合わせるほうが効率的です。毎日は床の毛の除去とトイレまわりの拭き取りだけに絞り、週1回で布製品の洗濯や家具の下の掃除を行う、といった役割分担にすると、1回あたりの負担が小さくなり、臭いの蓄積も防げます。",
  },
  {
    title: "換気と除湿が臭い・カビの予防につながる",
    body: "ペットのいる部屋は、飲み水やトイレ、体温の影響で湿度が上がりやすく、湿気は臭いやカビの温床になります。1日数回の換気と、湿度が高い季節の除湿を習慣にするだけで、臭いのこもり方は変わります。すでに壁や窓際にカビが出ている場合は、部屋のカビ掃除の記事も併せて参考にしてください。",
  },
];

const steps = [
  {
    title: "ペットを安全な場所に移し、換気してから始める",
    body: "掃除を始める前に、ペットを別室やケージなど洗剤やホコリに触れない場所へ移動させます。掃除中は舞い上がった毛やホコリを吸い込みやすいため、窓を開けて換気しながら進めましょう。洗剤やスプレー類は、ペットが誤ってなめたり触れたりしない場所に置き、使い終わったらすぐ片付けるのが基本です。",
  },
  {
    title: "床とカーペットの毛を「乾いた状態」で先に取る",
    body: "毛の除去は、水拭きより先に乾いた状態で行うのが鉄則です。先に濡らすと毛が床や繊維に張り付いて取りにくくなります。フローリングはフロアワイパーの乾拭きシートや掃除機で、カーペットは掃除機をゆっくり往復させたうえで、粘着クリーナーやゴム手袋でなでるように集めると残った毛が取れます。家具の下や部屋の隅は毛がたまりやすいポイントなので忘れずに。",
  },
  {
    title: "トイレまわりと汚れやすい床を拭き掃除する",
    body: "毛を取り終えたら、トイレ容器の周辺、フードや水の周辺、ペットがよく寝る場所の床を拭き掃除します。尿の飛び散りは時間が経つほど臭いが強くなるため、トイレまわりの壁の下部まで拭くのがポイントです。使用する洗剤は製品表示を確認し、拭いた後は水拭きで洗剤分を残さないようにすると、ペットが床をなめても安心です。",
  },
  {
    title: "布製品を洗濯・天日干しし、洗えない物は掃除機と拭き取りで対応",
    body: "ペット用ベッド、クッションカバー、ブランケットなど洗える布製品は、表示に従って定期的に洗濯します。ソファやカーペットなど洗えない物は、掃除機がけと固く絞った布での拭き取り、天気の良い日の陰干しなどで対応します。臭いが染み付いて自宅では落とせない布製品は、買い替えや専門クリーニングの検討も選択肢です。",
  },
  {
    title: "消臭は「原因を取り除いてから」仕上げに行う",
    body: "消臭スプレーや置き型消臭剤は、汚れという原因を取り除いた後の仕上げとして使うと効果的です。原因が残ったまま香りでごまかすと、臭いが混ざってかえって不快になることもあります。また、香りの強い芳香剤は嗅覚の鋭い動物にとって負担になる場合があるため、無香タイプを選ぶ、ペットの生活スペースの近くに置かないなどの配慮をしましょう。製品はペットのいる環境での使用可否を表示で確認してから使うのが安心です。",
  },
];

const ngActions = [
  {
    title: "ペットがいる空間で強い洗剤やスプレーを大量に使う",
    body: "塩素系漂白剤などの強い洗剤や、殺虫剤・くん煙剤をペットのいる空間でそのまま使うのは危険です。使用する場合は必ずペットや水槽・ケージを部屋から出し、製品の注意書きに従って換気・拭き取りを行い、安全が確認できてから戻すようにしてください。判断に迷う製品は使用を控え、動物病院やメーカーの案内で確認するのが安全です。",
  },
  {
    title: "尿汚れを水拭きだけで済ませて放置する",
    body: "カーペットや床に染みた尿汚れは、表面を水拭きしただけでは成分が残り、時間が経ってから臭いが強くなることがあります。染み込んだ直後に水分を吸い取り、その後に適切な洗剤で拭き取るのが基本です。染み込みが深く自宅で対処しきれない場合は、無理にこすって広げるより、専門クリーニングの検討をおすすめします。",
  },
  {
    title: "臭いの変化を掃除だけで解決しようとする",
    body: "部屋の臭いが急に強くなった、ペットの体臭が変わったと感じる場合、その原因が動物の体調にあることもあります。掃除や消臭でごまかし続けるのではなく、気になる変化があれば動物病院に相談してください。部屋の環境と動物の健康の両面から原因を見ることが大切です。",
  },
  {
    title: "多頭飼育で掃除が追いつかない状態を放置する",
    body: "飼育数が増えて掃除が追いつかなくなると、衛生状態の悪化が人にも動物にも影響します。自力で管理しきれないと感じたら、放置せず、片付け・清掃業者への依頼や、飼育について相談できる動物病院・自治体の窓口の活用を検討してください。部屋の状態が大きく崩れている場合の立て直し方は、汚部屋レベルチェックの記事も参考になります。",
  },
];

const judgeSigns = [
  "床や壁に染み付いた臭いが、掃除と洗濯を繰り返しても取れない",
  "カーペットやソファの奥に毛や汚れがたまり、家庭用の道具では対処しきれない",
  "長期間掃除ができず、部屋全体の汚れが自力で戻せる範囲を超えている",
  "引っ越しや退去を控え、ペットによる汚れ・臭いを短期間でリセットしたい",
  "体力・時間の事情で、定期的な重点掃除を続けるのが難しい",
];

const faqs = [
  {
    q: "ペットの臭いはどこから対策すればよいですか？",
    a: "まず布製品とトイレまわりから対策するのが近道です。カーペット・ソファ・ペット用ベッドなどの布製品は臭いを抱え込みやすいため、洗える物は洗濯し、洗えない物は掃除機と拭き取りでケアします。トイレは容器だけでなく周辺の床や壁の下部まで拭くと効果的です。原因を取り除いた後に、仕上げとして消臭剤を使いましょう。",
  },
  {
    q: "掃除に使う洗剤はペットに安全なものを選ぶべきですか？",
    a: "製品の表示を確認し、用法用量を守って使うことが大前提です。掃除中はペットを別の場所に移し、洗剤分が床に残らないよう水拭きで仕上げ、十分に換気してから戻すと安心です。ペットのいる環境での使用可否が明記された製品を選ぶのも一つの方法です。安全性の判断に迷う場合は、メーカーの案内や動物病院に確認してください。",
  },
  {
    q: "ペットの毛が掃除してもすぐたまります。頻度はどのくらいが目安ですか？",
    a: "毛は毎日発生するため、床の毛取りとトイレまわりの拭き取りは毎日短時間で行い、布製品の洗濯や家具の下の掃除は週1回の重点掃除にまとめる組み合わせが現実的です。換毛期は毛の量が増えるため、ブラッシングの頻度を上げて部屋に落ちる毛自体を減らすと、掃除の負担が軽くなります。",
  },
  {
    q: "ペットの汚れや臭いは片付け・清掃業者に依頼できますか？",
    a: "対応している業者はあります。染み付いた臭いへの対応は、消臭・除菌の設備や技術を持つ業者が候補になります。対応範囲や在宅ペットがいる場合の作業条件は業者により異なるため、見積もり時にペットがいることと汚れの状況を正確に伝えて確認してください。費用は物量・部屋の状態により異なるため、複数社の比較をおすすめします。",
  },
];

const related = [
  { href: "/heya-shoushuu/", label: "部屋の臭いが消えないときの対処", desc: "臭いの原因の切り分けと消臭の手順" },
  { href: "/kabi-seisou/", label: "部屋のカビ掃除と再発防止", desc: "湿気がこもる部屋のカビ対策" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃", desc: "衛生環境を立て直す手順と依頼判断" },
  { href: "/guide/self-cleanup/", label: "自力での片付け・清掃ガイド", desc: "自分で進めるための基本と道具" },
  { href: "/review/blue-clean/", label: "ブルークリーンの評判", desc: "消臭・除菌を強みとする清掃業者" },
  { href: "/cost/price/", label: "片付け・清掃の費用相場", desc: "間取り・作業別の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "ペットのいる部屋の掃除と消臭" },
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
    { href: "#kiso", label: "1｜ペットの部屋の汚れと臭いの基礎知識" },
    { href: "#merit", label: "2｜掃除を習慣にする3つの考え方" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進めるペット部屋清掃の5ステップ" },
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

      <Breadcrumb items={[{ label: "ペットのいる部屋の掃除と消臭" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ペットのいる部屋の掃除と消臭｜抜け毛・臭い・汚れを安全に落とす手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「掃除してもすぐ毛だらけになる」「来客に臭いを指摘されて気になり始めた」——ペットと暮らす部屋の掃除には、毛・臭い・汚れという独特の悩みがつきものです。しかも、人間だけの部屋と違い、洗剤や消臭剤の使い方には動物への配慮が欠かせません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ペットのいる部屋の汚れと臭いの正体を整理したうえで、動物に配慮した安全な掃除の順番、毎日と週1回の役割分担、避けるべきNG行動、専門業者に相談すべきサインまでを解説します。犬・猫をはじめ、動物と暮らすすべての方に役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>汚れは「毛・皮脂・排泄物・食べこぼし」の4種類。臭いの主因は布製品とトイレまわりに集中する</li>
          <li>毛の除去は水拭きより先に「乾いた状態」で行うのが鉄則</li>
          <li>掃除中はペットを別の場所へ移し、洗剤は表示確認・拭き取り・換気を徹底する</li>
          <li>消臭剤は原因を取り除いた後の仕上げに使う。染み付いた臭いは専門業者への相談も選択肢</li>
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

      <H2 id="kiso" num="1">ペットの部屋の汚れと臭いの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        効率よく掃除するために、まず「何が部屋を汚し、どこから臭いが出ているのか」を整理しておきましょう。原因がわかると、やみくもに掃除するより短い時間で効果を出せます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">掃除を習慣にする3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ペットの汚れは毎日発生するため、「頑張って大掃除する」より「無理なく続ける仕組みを作る」ほうが結果につながります。押さえておきたい考え方は次の3つです。
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
        ペットのいる部屋の掃除の大原則は、「ペットの安全確保が先、毛は乾いた状態で取る、消臭は最後」という順番を守ることです。この順番を守るだけで、掃除の効率と安全性の両方が大きく変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、物が床に多いほど毛と臭いはたまりやすくなります。掃除の前に床の物を減らしておくと、日々の掃除時間が短くなり、清潔な状態を保ちやすくなります。物を減らす手順は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋を片付ける順番</Link>の記事で、掃除道具や進め方の基本は<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自力での片付け・清掃ガイド</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">自力で進めるペット部屋清掃の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際に手を動かす手順を5つのステップで紹介します。ポイントは「安全確保が先、乾いた掃除が先、消臭は最後」です。
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
        古くなったペット用品やケージ・キャットタワーなどの大型品を手放したい場合は、<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>と<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>が参考になります。処分区分や出し方は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
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
        次のいずれかに当てはまる場合は、自力にこだわらず、消臭・清掃に対応する片付け業者・清掃業者への相談を検討しましょう。ペットがいることを事前に伝えれば、作業日の動物の居場所や使用する薬剤について相談できます。
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
        染み付いた臭いへの対応は、消臭・除菌を強みとする<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>のような業者が候補になります。ハウスクリーニング系のサービスを口コミで比較したい場合は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>のようなプラットフォームも活用できます。横浜など各都市の業者は<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者比較</Link>で紹介しています。
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
        本記事は一般的な知識の提供を目的としたもので、動物の健康に関する個別の助言を行うものではありません。ペットの体調や皮膚・臭いの変化が気になる場合は動物病院にご相談ください。洗剤・消臭剤は各製品の表示に従って使用し、ごみの分別・出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
