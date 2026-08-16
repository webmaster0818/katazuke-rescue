import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kodomo-sakuhin-seiri/";
const TITLE = "子どもの作品・思い出の品の整理｜残す基準とデジタル化の方法";
const DESC =
  "子どもの絵・工作・賞状・ノートなどの作品は、「全部は残せないのに捨てられない」代表的な思い出の品です。捨てられないのは自然なことという前提に立ち、残す量の枠を決める考え方、写真に撮って残すデジタル化、子どもと一緒に選ぶ自力5ステップ、黙って捨てるなどのNG行動、量が多い場合の保管・整理の選択肢までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "作品が捨てられないのは「物」に思い出が重なっているから",
    body: "子どもの絵や工作が捨てにくいのは、物としての価値ではなく、「その頃の子どもの姿」という思い出が重なっているからです。これは親として自然な感情であり、無理に断ち切る必要はありません。大切なのは、「捨てられない自分はだめだ」と考えるのではなく、思い出を大切にしたまま物の量だけを現実的な範囲に収める方法を知ることです。思い出は物そのものではなく記憶と記録に宿る、という視点が整理の出発点になります。",
  },
  {
    title: "全部残すと「見返せない量」になり、思い出としても機能しなくなる",
    body: "幼稚園・保育園から小学校卒業までに持ち帰る絵・工作・プリント類は、子ども一人でも段ボール数箱分になることが珍しくありません。全部残すと収納を圧迫するだけでなく、量が多すぎて見返すこともなくなり、「しまい込んだまま存在を忘れる」状態になりがちです。思い出の品は、量を絞って取り出しやすい形にしてこそ、折に触れて見返せる「生きた思い出」になります。全部残すことと大切にすることは、同じではないのです。",
  },
  {
    title: "「原本を残す・記録を残す・手放す」の3つに分けて考える",
    body: "作品整理の基本は、すべてを「原本のまま残す物」「写真などの記録に変えて残す物」「役目を終えたとして手放す物」の3つに分けることです。特に大きな立体工作や壊れやすい作品は、原本保管が難しい代表格で、写真に撮って記録として残す方法が向いています。この3分類があれば、「残すか捨てるか」の二択で悩む場面が減り、「どの形で残すか」という前向きな選択に変わります。判断を急ぐ必要はなく、迷う物は保留にして構いません。",
  },
];

const merits = [
  {
    title: "残し方1：厳選した原本を「思い出ボックス」で保管する",
    body: "特に思い入れのある作品は、原本のまま残します。ポイントは、子ども一人につき「思い出ボックス1〜2箱まで」のように物理的な上限を決めることです。枠があることで「この箱に入る分だけ厳選する」という基準が生まれ、総量が増え続けるのを防げます。箱は湿気の少ない場所に保管し、年に一度中身を見返すと、成長に伴って「これはもういいかな」と自然に手放せる物も出てきます。上限は家庭の収納事情に合わせて無理のない量に設定しましょう。",
  },
  {
    title: "残し方2：写真・スキャンでデジタル化して残す",
    body: "原本を残さない作品は、処分する前に写真に撮っておくと、思い出としてはほぼ完全に残せます。平面の絵はスマホでの撮影やスキャンで、立体工作は作品を持った子どもと一緒に撮影すると、その頃の姿もセットで記録できます。撮影データは日付やフォルダで整理し、バックアップを取っておきましょう。写真整理やアルバム化の方法は、写真・アルバムの整理とデジタル化の記事で詳しく解説しています。",
  },
  {
    title: "残し方3：飾って楽しんでから「入れ替え制」で手放す",
    body: "持ち帰ったばかりの作品は、すぐに残すかどうかを決めず、まず一定期間飾って楽しむ方法もあります。リビングや廊下に「作品コーナー」を作り、新しい作品が来たら入れ替える仕組みにすると、作品が主役として活躍する期間を持てます。飾り終えた作品は、写真に残してから手放すか、思い出ボックス行きかを選びます。「十分に楽しんでから手放す」という順番にすると、親子ともに納得感を持ちやすくなります。",
  },
];

const steps = [
  {
    title: "作品を一箇所に集めて全体量を把握する",
    body: "押し入れ・クローゼット・机の引き出しなどに分散している作品類を、まず一箇所に集めます。全体量が見えると、「思い出ボックス何箱分に絞るか」という現実的な目標を立てられます。学年やおおよその時期ごとにざっくり分けておくと、後の選別と記録がしやすくなります。この段階では捨てる判断はまだしません。量の把握と分類だけに集中し、一度に終わらなければ数回に分けて進めて構いません。",
  },
  {
    title: "残す枠（ボックスの数）を決める",
    body: "次に、原本で残す量の上限を決めます。「子ども一人につきフタつきボックス2箱まで」など、収納事情に合わせた物理的な枠を設定しましょう。枠は少なすぎると選別がつらくなり、多すぎると絞る意味がなくなります。迷ったらやや余裕のある枠から始めて、後から絞っていく方法でも問題ありません。この枠が決まると、以降の選別は「捨てる物を選ぶ」のではなく「箱に入れる物を選ぶ」という前向きな作業に変わります。",
  },
  {
    title: "子どもと一緒に「残す物」を選ぶ",
    body: "作品は子ども自身の物でもあるため、年齢に応じて本人と一緒に選ぶのが基本です。「どれが気に入ってる？」と聞くと、親が残したい物と本人が残したい物が違うこともよくあります。本人が手放してよいと言った物を親が残したい場合は、親の思い出ボックスに入れれば大丈夫です。子どもが小さいうちは親が選び、成長したら本人に委ねる割合を増やしていきます。選ぶ過程そのものが、物との付き合い方を学ぶ機会にもなります。",
  },
  {
    title: "残さない作品を撮影してから手放す",
    body: "原本を残さない作品は、手放す前にまとめて撮影します。平面作品は明るい場所で正面から、立体作品は複数の角度から、可能なら作った本人と一緒に撮ると記録として充実します。データは「年度・名前」などでフォルダ分けし、クラウドや外付けドライブにバックアップしておきましょう。撮影が済んだ作品は、紙・プラスチックなど自治体の分別ルールに沿って処分します。名前が書かれている物は、気になる場合は名前部分を切り取ってから出すと安心です。",
  },
  {
    title: "「持ち帰ったらすぐ仕分け」の習慣で維持する",
    body: "一度整理できたら、今後は「学期末・年度末に持ち帰ったらすぐ仕分け」を習慣にします。飾るコーナーに入れる物、思い出ボックスに入れる物、撮影して手放す物をその場で決めれば、未整理の山は二度とできません。思い出ボックスがいっぱいになったら、追加する分だけ何かを見直す「一入れ一出し」で総量を保ちます。年に一度、家族で箱を開けて見返す時間を作ると、整理が「思い出を楽しむ行事」になります。",
  },
];

const ngActions = [
  {
    title: "子どもに黙って作品を捨てる",
    body: "親から見て価値がなさそうな作品でも、本人にとって大切な物であることがあります。黙って捨てたことが後で分かると、子どもは「自分の物を勝手に捨てられた」と感じ、親への信頼や物を大切にする気持ちに影を落とすことがあります。手放す際は、年齢に応じた言葉で本人に確認するのが原則です。本人が「取っておきたい」と言った物は、たとえ量が増えても、まず本人の気持ちを尊重したうえで、枠の考え方を一緒に話し合いましょう。",
  },
  {
    title: "「全部残す」で先送りし続ける",
    body: "判断を避けて全部を段ボールにしまい込むのは、一見安全に見えて、問題を先送りしているだけです。量が増えるほど後の整理は大変になり、湿気や虫で作品自体が傷んでしまうこともあります。また、しまい込まれた作品は見返されることがなく、思い出としても機能しません。「今は決められない」物があるのは自然なことですが、保留箱を作って期限を緩く決めるなど、少しずつでも前に進む仕組みを持つことが大切です。",
  },
  {
    title: "湿気の多い場所・劣化しやすい状態で保管する",
    body: "残すと決めた作品を、押し入れの床置きや結露しやすい場所にそのまま置くと、カビ・湿気・虫食いで傷んでしまいます。紙の作品は特に湿気に弱いため、フタつきのケースに入れ、風通しのよい場所に保管しましょう。粘土や食品パッケージを使った工作は経年劣化が避けにくいため、原本保管より写真記録が向いています。せっかく残した思い出が傷んでしまわないよう、保管環境まで含めて「残し方」を考えることが大切です。",
  },
  {
    title: "親の基準で「いる・いらない」を一方的に押しつける",
    body: "「こんな落書きはいらないでしょ」「賞を取った物だけ残そう」など、親の価値基準だけで選別するのは避けましょう。本人にとっての大切さは、出来栄えや評価とは別のところにあります。逆に、本人が手放してよいと言っているのに「もったいない」と親が全部残すのも、量が管理できなくなる原因です。選ぶ主体はあくまで本人（成長に応じて）とし、親は枠と仕組みを用意する役割に徹すると、親子ともに納得できる整理になります。",
  },
];

const judgeSigns = [
  "子ども数人分・十数年分の作品が段ボール十数箱など、自力で仕分けし切れない量がある",
  "実家に自分の子ども時代の作品が大量に残っており、実家の片付けと同時に発生している",
  "転居・住み替えの期限があり、思い出品の整理に時間をかけられない",
  "大量の紙類・工作の処分が自治体のごみ出しでは追いつかない",
  "保管環境を整えたいが、収納スペースそのものが足りない",
];

const faqs = [
  {
    q: "子どもの作品はどのくらい残すのが適切ですか？",
    a: "決まった正解はなく、家庭の収納事情と気持ちに合わせて決めるものです。目安として「子ども一人につきフタつきボックス1〜2箱」のような物理的な枠を決める方法が管理しやすくおすすめです。枠に収まらない分は写真に撮って記録として残せば、思い出としてはほぼ失われません。量よりも「見返せる状態で残っているか」を基準に考えましょう。",
  },
  {
    q: "子どもが「全部取っておきたい」と言います。どうすればよいですか？",
    a: "まず本人の気持ちを受け止めることが大切です。そのうえで、「この箱に入る分は全部取っておこう」と枠を示し、箱に入れる物を本人に選んでもらう方法が有効です。選別を急がせる必要はありません。時間が経つと本人の中でも優先順位が変わり、自然に手放せる物が出てきます。写真に撮って残す方法を見せると、納得して手放せる子も多いです。",
  },
  {
    q: "立体の工作はかさばります。よい残し方はありますか？",
    a: "立体工作は原本保管が難しい代表格で、写真での記録が現実的です。作品単体だけでなく、作った本人が持っている姿を撮影すると、成長記録としての価値も加わります。特に思い入れのある物だけ厳選して原本を残し、残りは撮影後に手放す形がバランスのよい方法です。粘土や食材パッケージを使った作品は劣化しやすいため、早めの撮影をおすすめします。",
  },
  {
    q: "撮影した作品の写真データはどう管理すればよいですか？",
    a: "「年度・子どもの名前」などのルールでフォルダ分けし、クラウドストレージや外付けドライブにバックアップを取っておくのが基本です。データが一箇所にしかないと、機器の故障で思い出ごと失うリスクがあります。フォトブックにまとめて実物のアルバムにする方法も、見返しやすくおすすめです。写真整理の全体像は写真・アルバムの整理の記事で解説しています。",
  },
];

const related = [
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理", desc: "デジタル化しながら残す方法" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理と捨て方", desc: "紙類の整理基準と処分方法" },
  { href: "/irui-seiri/", label: "衣類の整理と手放し方", desc: "サイズアウト服などの仕分け" },
  { href: "/trunk-room-katsuyou/", label: "トランクルームの活用", desc: "捨てられない物の一時保管" },
  { href: "/review/kurashi-market/", label: "くらしのマーケットの評判", desc: "地域の業者を比較して選べるサービス" },
  { href: "/area/yokohama/", label: "横浜の片付け業者比較", desc: "横浜から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "子どもの作品・思い出の品の整理" },
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
    { href: "#kiso", label: "1｜作品整理の前に知っておきたい3つの前提" },
    { href: "#merit", label: "2｜残し方の3つの選択肢" },
    { href: "#houshin", label: "3｜整理を始める前の全体方針" },
    { href: "#steps", label: "4｜作品・思い出品整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "子どもの作品・思い出の品の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          子どもの作品・思い出の品の整理｜残す基準とデジタル化の方法
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          幼稚園から持ち帰った絵、夏休みの工作、テストやノート——子どもの作品は「全部は残せないのに、どれも捨てられない」思い出の品の代表格です。捨てられないのは、物にその頃の子どもの姿が重なっているからで、ごく自然なことです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、無理に捨てることを目的にせず、「残す枠を決める」「写真で記録に変える」「本人と一緒に選ぶ」という3つの軸で、思い出を大切にしたまま量を現実的な範囲に収める方法を解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>作品整理は「原本で残す・写真で残す・手放す」の3分類で考えると迷いが減る</li>
          <li>原本は「一人につきボックス1〜2箱」など物理的な枠を決めて厳選する</li>
          <li>残さない作品は撮影してから手放せば、思い出としてはほぼ失われない</li>
          <li>選ぶ主体は子ども本人。黙って捨てるのは絶対NG。急がず本人のペースで進める</li>
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

      <H2 id="kiso" num="1">作品整理の前に知っておきたい3つの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「捨てられない」と悩む前に、思い出の品との付き合い方の前提を整理しておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">残し方の3つの選択肢</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「残すか捨てるか」の二択ではなく、「どの形で残すか」で考えると選びやすくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">整理を始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「急がないこと」と「本人の気持ちを尊重すること」です。思い出の品の整理は、期限を切って一気に片付けるタイプの作業ではありません。学期末や年度末などの節目に少しずつ、本人と一緒に進めるのが、親子ともに納得できる唯一の近道です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家全体の片付けの中で作品整理に取り組む場合は、<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しているとおり、思い出品は最後に回すのが鉄則です。判断に時間がかかる思い出品から始めると、片付け全体が止まってしまいます。どうしても今は手放せない物が多い場合は、<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルームの活用</Link>で一時的に保管場所を確保する方法もあります。写真データの整理は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">作品・思い出品整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「集める→枠を決める→本人と選ぶ→撮影して手放す→習慣化」の流れを守ることです。
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
        作品整理は基本的に家庭内で完結する作業ですが、次のような場合は片付け業者や保管サービスの活用が現実的です。
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
        実家の片付けと同時に大量の思い出品整理が発生している場合は、思い出品の扱いに配慮のある片付け業者への相談も選択肢です。<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>のような比較サービスでは、仕分けから対応する業者を探せます。業者選びの基本は<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。作品や思い出の品の残し方に決まった正解はなく、ご家庭の考え方とお子さまの気持ちを最優先にご判断ください。紙類・工作などの分別区分は自治体により異なるため、お住まいの市区町村の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
