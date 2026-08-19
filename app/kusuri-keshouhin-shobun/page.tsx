import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kusuri-keshouhin-shobun/";
const TITLE = "古い薬・化粧品の処分方法｜安全に手放すための確認先と分け方";
const DESC =
  "薬箱に残った処方薬、洗面所にたまった使いかけの化粧品。どちらも「何ごみか分からない」まま放置されがちな物です。処方薬（残薬）はまず調剤薬局や医療機関に相談するという原則、市販薬の使用期限の確認先、洗面台やトイレに流さない理由、化粧品を中身と容器に分けて考える手順、ガラス瓶・プラスチック容器・金属チューブ・スプレー缶の分別の考え方、故人や介護で残った薬の相談先までを整理して解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "薬箱と洗面所に「判断を保留した物」がたまる理由",
    body: "古い薬や使いかけの化粧品がたまるのは、片付けが苦手だからではありません。どちらも「まだ使えるかもしれない」「捨て方が分からない」という二つの迷いが同時に発生する物だからです。薬は体に関わるものなので自己判断でごみ袋に入れることをためらいますし、化粧品は中身が残っていると容器ごと捨てにくく、分別区分もその場では判断できません。結果として、判断を保留したまま引き出しや棚の奥に押し込まれ、数年分が層になって積み重なっていきます。まずは「判断を保留した物の置き場」になっていると認識するところから始めましょう。",
  },
  {
    title: "薬と化粧品は「聞く先」が違う——最初に確認先を分ける",
    body: "この二つを一緒に片付けようとすると手が止まります。理由は、正しい確認先が異なるからです。処方薬をはじめとする医薬品は、まず調剤薬局やかかりつけの医療機関という医療の窓口に相談する対象です。一方、化粧品の容器やスプレー缶などは、お住まいの自治体のごみ分別案内が確認先になります。同じ引き出しから出てきた物でも、聞く相手が違うということです。作業を始める前に「医療の窓口に相談する物」と「自治体の案内で確認する物」の二つの箱を用意しておくと、迷って手が止まる時間を大きく減らせます。",
  },
  {
    title: "全国共通の正解はない、という前提を持つ",
    body: "インターネットで検索すると、薬や化粧品の捨て方について断定的な手順が出てくることがあります。しかしごみの分別区分や出し方は自治体ごとに定められており、同じ品目でも地域によって扱いが変わります。中身の残った容器の扱い、スプレー缶の出し方、ガラス製の小瓶をどの区分に入れるかなども同様です。ですからこの記事でも、具体的な廃棄手順を全国共通の正解としては示しません。ここで整理するのは「どこに確認すればよいか」と「どう分けて考えれば判断しやすいか」という枠組みです。最終的な出し方は、必ず自治体の分別案内と、薬については医療の窓口でご確認ください。",
  },
];

const merits = [
  {
    title: "考え方1：処方薬（残薬）は自己判断で決めない",
    body: "医療機関で処方された薬が使われずに残っているものを残薬と呼びます。残薬について大切なのは、飲むか飲まないかも、どう手放すかも、自分だけで決めないという姿勢です。症状が似ているからと以前の薬を使うことや、量が多いからと自分で調整することは避け、まずは調剤薬局やかかりつけの医療機関に相談してください。薬局によっては、残った薬を持参して相談できる取り組みを行っている場合があります。ただし対応は薬局や地域によって異なるため、全国どこでも同じ扱いとは限りません。かかりつけの薬局に「残っている薬について相談したい」と伝えるところから始めるのが確実です。",
  },
  {
    title: "考え方2：市販薬は表示を確認し、出し方は自治体で調べる",
    body: "薬局やドラッグストアで購入した市販薬は、外箱や添付文書に使用期限の表示があります。まずは箱と説明書を捨てずに残し、そこに書かれた期限や保管方法の記載を確認しましょう。外箱を処分してしまい期限が分からなくなっている物は、無理に判断せず、購入した薬局や身近な薬剤師に相談するのが安心です。手放すと決めた場合の出し方については、包装のプラスチックや紙、ガラス瓶、中身の扱いなどで区分が分かれることがあり、自治体により扱いが異なります。お住まいの自治体のごみ分別案内で該当する品目を確認してください。",
  },
  {
    title: "考え方3：化粧品は「中身」と「容器」を分けて考える",
    body: (
      <>
        化粧品の処分でつまずく最大の理由は、中身と容器をひとまとめに考えてしまうことです。実際には、容器は素材ごとの分別区分、中身は残っている量や性状によって扱いが変わります。ガラスの小瓶、プラスチックのボトル、金属のチューブ、スプレー缶では、そもそも属する区分が違います。まずは手元の化粧品を素材別に並べ直し、それぞれの品目名で自治体の分別案内を調べるのが近道です。分別に迷う品目が多いときは<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>の記事もあわせて参考にしてください。
      </>
    ),
  },
];

const steps = [
  {
    title: "薬箱と洗面所の中身をすべて出して並べる",
    body: (
      <>
        最初に、薬箱・救急箱・引き出し・洗面台の下・化粧ポーチなど、薬と化粧品が入っていそうな場所からすべて出して並べます。この段階では何も捨てません。目的は総量と種類を把握することです。並べてみると、同じ用途の物が重複していたり、存在を忘れていた物が出てきたりします。作業は一度に家中をやろうとせず、今日は洗面台の下だけ、と場所を区切るのが続けるコツです。片付け全体をどの順番で進めるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>の記事を参考にしてください。
      </>
    ),
  },
  {
    title: "「医療の窓口に相談する物」を先に分ける",
    body: "並べた物の中から、医療機関で処方された薬、名前や用法が印字された袋や容器に入っている物、注射器や針など医療で使われる器具類を先に取り分けます。これらは自治体のごみ案内ではなく、調剤薬局やかかりつけの医療機関に相談する対象です。取り分けたら袋にまとめ、次に薬局や病院に行く機会に持参して相談できるようにしておきます。処方内容が分かる書類や手帳があれば一緒にしておくと話が早く進みます。この箱に入れた物は、相談が済むまで判断を保留したままで構いません。",
  },
  {
    title: "市販薬は外箱と添付文書の表示を確認する",
    body: "次に市販薬を確認します。外箱に記載された使用期限、開封後の扱いに関する記載、保管方法の注意書きを一つずつ見ていきます。箱がなく期限が分からない物、変色や異臭など明らかに以前と状態が違う物は、無理に自分で判断せず、購入した薬局や薬剤師に相談する箱へ回しましょう。期限内で今後も使う物は、一か所にまとめて中身が見える収納にしておくと、次回の点検が楽になります。ここで「今後使う物」を絞り込んでおくと、残りの処分の判断がぐっと軽くなります。",
  },
  {
    title: "化粧品を素材別に仕分けて分別案内で調べる",
    body: (
      <>
        化粧品はガラス瓶、プラスチック容器、金属チューブ、スプレー缶やエアゾール製品、紙箱やパフなどの付属品、というように素材別のグループに分けます。分けたら、それぞれの品目名でお住まいの自治体の分別案内を検索し、区分と出し方を確認します。中身が残っている場合の扱いも自治体の案内に従ってください。スプレー缶やエアゾール製品は特に注意が必要で、中身を使い切ることや自治体の指示に従うことが求められる場合があります。判断に迷う品目は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>で全体像をつかんでから調べると早いです。
      </>
    ),
  },
  {
    title: "空いた場所に「増やさない仕組み」を作る",
    body: (
      <>
        処分の目処が立ったら、最後に増やさない仕組みを整えます。おすすめは、薬箱を年に一度点検する日を決めること、化粧品は使い切ってから次を買うこと、試供品やサンプルは入れ物一つ分までと上限を決めることの三つです。あわせて、洗面所まわりの物を減らしておくと掃除も楽になります。水まわりの清掃の進め方は<Link href="/yokushitsu-mizumawari-seisou/" className="text-primary underline underline-offset-2">浴室・水まわりの掃除</Link>の記事で解説しています。仕組みを作らないまま片付けだけを繰り返すと、数年後に同じ状態に戻ってしまいます。
      </>
    ),
  },
];

const ngActions = [
  {
    title: "薬を洗面台やトイレに流す",
    body: "中身を捨てるつもりで、薬を洗面台やトイレ、台所の排水口に流すのは避けたい方法です。下水に流された成分が処理施設を経て環境中に出ていくことへの懸念があり、国内外で回収や適切な処理を促す考え方が広がっています。液体だから流せばよい、粉だから溶かせばよい、と自己判断で処理する前に、処方薬であれば調剤薬局やかかりつけの医療機関に、市販薬であれば購入した薬局や自治体の分別案内に確認してください。手間はかかりますが、確認先に聞くのが結局いちばん確実です。",
  },
  {
    title: "残った処方薬を自己判断で使う・人に譲る",
    body: "以前処方された薬が残っていると、症状が似ているからと使いたくなることがあります。しかし処方薬はその時の状態に合わせて出されたものであり、時期や体調が変われば適さない場合があります。家族や知人に譲ることも同様に避けてください。もったいないと感じる気持ちは自然なものですが、その判断は薬剤師や医師といった専門職に委ねるのが安全です。残薬が多いこと自体を薬局に相談すると、次回以降の処方量の調整につながる場合もあります。まずは正直に「残っている」と伝えることから始めましょう。",
  },
  {
    title: "スプレー缶を中身が残ったまま何となく出す",
    body: (
      <>
        ヘアスプレーや制汗剤などのスプレー缶・エアゾール製品を、中身が残ったまま普通のごみに混ぜて出すのは避けてください。中身が残った状態での取り扱いについては、自治体ごとに手順や注意事項が定められています。使い切ってから出すよう案内している自治体もあれば、出し方や置き場所を細かく指定している場合もあります。自分の記憶や過去に住んでいた地域のルールで判断せず、現在お住まいの自治体の分別案内で必ず確認してください。品目別の考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>でも整理しています。
      </>
    ),
  },
  {
    title: "肌の状態を理由に自己流の判断を重ねる",
    body: "開封した化粧品をいつまで使えるかは、製品や保管状況によって異なります。メーカーの表示や公式の案内に開封後の使用目安が示されていることがあるため、まずはそちらを確認してください。この記事では、肌への影響や安全性について断定的なことは述べません。使用中に気になる変化があった場合は、使用を続けるかどうかを自分だけで判断せず、必要に応じて医療機関や専門家に相談してください。片付けの目的はあくまで、判断を保留したまま物がたまり続ける状態を解消することです。",
  },
];

const judgeSigns = [
  "薬や化粧品を含む物が家中に散在し、自力での仕分けが追いつかない",
  "故人の部屋にある薬や医療用品の整理を一人で進めるのが難しい",
  "介護で使っていた用具や大量の物を、期限までにまとめて片付けたい",
  "実家の薬箱や洗面所に何年分もたまっていて手が付けられない",
  "仕分けから搬出まで、まとまった時間がどうしても取れない",
];

const faqs = [
  {
    q: "使わずに残った処方薬はどうすればよいですか？",
    a: "自己判断で服用したり処分したりせず、まずは調剤薬局やかかりつけの医療機関に相談してください。薬局によっては、残った薬を持参して相談できる取り組みを行っている場合がありますが、対応は薬局や地域によって異なるため全国一律ではありません。次に受診や薬の受け取りに行く機会に、残っている薬をまとめて持参し、相談したい旨を伝えるのが確実です。",
  },
  {
    q: "市販薬の使用期限はどこを見れば分かりますか？",
    a: "多くの場合、外箱や容器、添付文書に使用期限の表示があります。片付けの際は箱と説明書を先に捨てず、記載を確認してから判断してください。外箱がなく期限が分からない物や、以前と状態が違うと感じる物は、無理に自分で判断せず購入した薬局や薬剤師に相談しましょう。手放す場合の出し方は自治体により扱いが異なるため、分別案内での確認が必要です。",
  },
  {
    q: "中身が残った化粧品の容器はそのまま捨ててよいですか？",
    a: "中身が残った状態での扱いは自治体により異なるため、お住まいの自治体のごみ分別案内で確認してください。容器はガラス瓶、プラスチックボトル、金属チューブ、スプレー缶などで区分が分かれるのが一般的です。特にスプレー缶やエアゾール製品は取り扱いに関する指示が定められていることが多いため、自己流で判断せず案内に従ってください。",
  },
  {
    q: "亡くなった家族の薬や介護用品が大量に残っています。",
    a: "処方薬や医療で使われた器具については、調剤薬局や、生前にかかっていた医療機関に相談するのが基本です。介護サービスを利用していた場合は、担当のケアマネジャーに相談すると、用具の返却先や相談先を案内してもらえることがあります。部屋全体の整理をどう進めるかは、遺品整理を自分でやる手順の記事と、生前整理の記事も参考にしてください。",
  },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミの出し方", desc: "区分に迷う品目の調べ方" },
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水まわりの掃除", desc: "洗面所まわりを整える手順" },
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "挫折しない片付けの進め方" },
  { href: "/seizen-seiri/", label: "生前整理の進め方", desc: "元気なうちに整える考え方" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分でやる", desc: "家族だけで進めるときの手順" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "捨てる・売る・譲るの使い分け" },
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
    { "@type": "ListItem", position: 2, name: "古い薬・化粧品の処分方法" },
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
    { href: "#kiso", label: "1｜古い薬と化粧品がたまってしまう理由" },
    { href: "#merit", label: "2｜手放す前に押さえる3つの考え方" },
    { href: "#houshin", label: "3｜確認先を分けるという全体方針" },
    { href: "#steps", label: "4｜安全に手放すための5ステップ" },
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

      <Breadcrumb items={[{ label: "古い薬・化粧品の処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          古い薬・化粧品の処分方法｜安全に手放すための確認先と分け方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          薬箱を開けたら、いつ処方されたか分からない薬が何袋も出てきた。洗面台の下から、数年前に買った使いかけの化粧品がまとめて出てきた——どちらも片付けの現場でよく見かける光景です。捨てにくいのは、体に関わる物だという意識と、分別区分がその場では分からないという二つの理由が重なるからです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、処方薬をまず医療の窓口に相談するという原則、市販薬の表示の確認の仕方、化粧品を中身と容器に分けて考える手順、素材別の分別を自治体案内で調べる流れ、そして同じ状態に戻さないための仕組みまでを整理します。具体的な廃棄手順は地域によって異なるため、この記事では「どこに確認すればよいか」を軸に解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>処方薬（残薬）は服用も処分も自己判断せず、まず調剤薬局やかかりつけの医療機関に相談する</li>
          <li>市販薬は外箱・添付文書の使用期限表示を確認し、出し方は自治体の分別案内で調べる</li>
          <li>薬を洗面台やトイレに流さない。環境への配慮から回収や適切な処理が促されている</li>
          <li>化粧品は中身と容器を分け、ガラス・プラスチック・金属・スプレー缶ごとに区分を確認する</li>
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

      <H2 id="kiso" num="1">古い薬と化粧品がたまってしまう理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜこの二つが特にたまりやすいのかを整理します。原因が分かると、手を付ける順番が見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">手放す前に押さえる3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際に手を動かす前に、判断の土台になる3つの考え方を確認しておきましょう。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">確認先を分けるという全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この片付けで目指すのは、すべてを今日中に捨てきることではありません。目指すのは「判断を保留したまま何年も放置される物をなくす」ことです。そのために有効なのが、物を捨てる基準ではなく、確認先で分けるという方針です。医療機関で処方された薬や医療で使う器具は、調剤薬局やかかりつけの医療機関という医療の窓口へ。市販薬の出し方や、化粧品の容器・スプレー缶などは、自治体のごみ分別案内へ。この二本立てにするだけで、その場で答えが出ない物も「どこに聞けばよいか決まっている物」に変わり、放置され続ける状態から抜け出せます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、ごみの分別区分や粗大ごみの基準、収集の方法は自治体により定められており、同じ品目でも地域によって扱いが異なります。この記事に書かれた分け方はあくまで考え方の整理であり、最終的な出し方は必ずお住まいの自治体の案内でご確認ください。自治体の回収と業者への依頼をどう使い分けるかは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。処分先の選択肢全体を見比べたい場合は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>も参考になります。
      </p>

      <H2 id="steps" num="4">安全に手放すための5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、出して並べる→医療の窓口に相談する物を分ける→市販薬の表示を確認する→化粧品を素材別に調べる→仕組みを作る、の5ステップです。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        薬や化粧品そのものは量が限られることが多く、自力で進められる範囲の作業です。ただし、部屋全体の片付けと一緒に進める必要がある場合は、片付け・不用品回収業者の力を借りるのが現実的です。なお、薬については業者に渡す前に医療の窓口へ相談する対象であることを忘れないでください。対応できる業者は<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        故人の部屋や、介護で使っていた用具が多く残っている場合は、部屋全体の整理として進めるのが効率的です。家族だけで進めるときの手順は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分でやる</Link>の記事に、介護環境の見直しは<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護のための住環境整理</Link>の記事にまとめています。業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で料金・口コミを比較して選ぶ方法が便利です。
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
        本記事は一般的な知識の提供を目的としたものです。医薬品の取り扱いや健康に関する判断については、調剤薬局・かかりつけの医療機関など専門の窓口にご相談ください。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
