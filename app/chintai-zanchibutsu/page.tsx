import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/chintai-zanchibutsu/";
const TITLE = "賃貸の残置物とは｜借りる側・貸す側それぞれの立場での考え方と相談先";
const DESC =
  "賃貸で使われる「残置物」という言葉の一般的な意味と、入居時に前の入居者の物が残っていた場合、退去時に自分の物を残してしまった場合、設備として残されている物との違いを整理します。写真や書面での記録の残し方、まず管理会社・貸主に相談するという順序、専門家への相談の考え方までを解説します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「残置物」は、その場に残された物を指す一般的な言い方",
    body: "残置物とは、文字どおり「残し置かれた物」を指す言葉で、賃貸の場面では、前の入居者が置いていった物や、退去した人が室内に残していった物を指して使われることが多くあります。法律上の厳密な定義があって一律に決まっている言葉というより、実務のなかで使われる呼び方だと考えたほうが実態に近いでしょう。同じ「残置物」でも、誰の物か、どういう経緯で残ったのか、契約でどう扱われているのかによって位置づけは変わります。したがって、言葉だけを頼りに結論を出すことはできません。",
  },
  {
    title: "誰の立場から見ているかで、論点がまったく違う",
    body: "残置物という言葉は、借りる側と貸す側の両方が使いますが、困っている内容は正反対です。借りる側は「入居した部屋に前の人の物が残っていた」「退去のときに置いていってよいか分からない」という場面で使います。貸す側や管理する側は「退去後の室内に物が残っている」「連絡が取れない」という場面で使います。同じ言葉でも、確認すべきことも相談先も異なります。まずは自分がどちらの立場で、何に困っているのかを言葉にしてから、次の行動を考えるのが近道です。",
  },
  {
    title: "個別の扱いは、契約内容と事情によって異なる",
    body: "残置物をめぐっては、誰の物として扱われるのか、どう処理されるのか、誰が対応するのかといった点が問題になります。これらは賃貸借契約の内容、物件ごとの取り決め、残された経緯、当事者間のやり取りなど、個別の事情によって異なります。インターネット上の一般的な説明や、他の物件での事例をそのままあてはめて自己判断で動くと、かえって話がこじれることがあります。本記事も一般的な考え方の整理にとどめます。判断が必要な場面では、まず管理会社・貸主に相談し、必要に応じて弁護士等の専門家にご相談ください。",
  },
];

const merits = [
  {
    title: "場面1：入居した部屋に前の入居者の物が残っていた",
    body: "鍵を受け取って室内に入ったら、収納の奥に物が入っていた、ベランダに使われていない道具が置かれていた、というケースです。この場合にまずやることは、自分で処分することでも、そのまま使い始めることでもありません。現状を写真に撮り、いつ・どこに・何があったかを記録したうえで、管理会社または貸主に連絡してください。それが前の入居者の物なのか、貸主が置いた物なのか、設備として引き継がれている物なのかは、連絡して確認しないと分かりません。判断は自分でせず、確認を先に置きます。",
  },
  {
    title: "場面2：退去のときに自分の物を残しそうになっている",
    body: "退去日までに片付けが終わらず、物を残したまま引き渡すことになりそうな場合です。ここでも、置いていってよいかどうかを自分で判断しないことが大切です。あらかじめ管理会社・貸主に状況を伝え、どう扱うかを相談してください。相談した内容と回答は、メールなど文字が残る形にしておくと、後から双方が確認できます。取り決めのないまま物を残すと、後になって扱いをめぐる話し合いが必要になることがあります。日程が厳しいと分かった時点で、早めに連絡するのが結局は近道です。",
  },
  {
    title: "場面3：設備として置かれている物との違い",
    body: "室内にあるエアコン、給湯器、照明器具、ガスコンロなどは、契約上「設備」として扱われている場合と、前の入居者が置いていった物として扱われている場合があります。両者は見た目では区別がつきません。違いは契約書や重要事項説明書、物件の募集条件に記載されていることが多いため、まず書面を確認してください。それでも分からないときは管理会社・貸主に問い合わせます。故障したときの対応や、退去時に外すかどうかの扱いが変わってくるため、入居の早い段階で確認しておくと安心です。",
  },
];

const steps = [
  {
    title: "まず現状を写真と記録に残す",
    body: "残置物に気づいたら、動かしたり片付けたりする前に、その状態を写真に撮ってください。全体が分かる引きの写真と、物が分かる寄りの写真の両方があると状況が伝わります。撮影の日付が記録されるようにしておき、あわせて、いつ気づいたか、どの部屋のどこにあったか、どのような物がいくつあったかをメモにまとめます。記録は、後から双方が事実を確認するための材料です。急いで動かしてしまうと元の状態が分からなくなるため、記録を先に済ませることを習慣にしてください。",
  },
  {
    title: "契約書と関係する書面を読み返す",
    body: "次に、賃貸借契約書、重要事項説明書、入居時に受け取った案内、物件の募集条件などを読み返します。設備として引き継がれている物の一覧が記載されていることがありますし、退去時の引き渡しに関する取り決めが書かれていることもあります。書面に該当する記載があるかどうかで、次に確認すべき点が変わります。読んでも判断がつかない箇所は、そのまま質問の材料にしてください。書面のどこに何が書かれているかを把握しておくと、相談の際に話が早く進みます。",
  },
  {
    title: "管理会社または貸主に連絡し、事実を伝える",
    body: "相談の最初の窓口は、管理会社または貸主です。ここを飛ばして自分で判断したり、第三者の業者に処理を依頼したりすると、後で説明が難しくなることがあります。連絡の際は、自分の評価や推測を交えず、確認した事実を順に伝えてください。いつ気づいたか、どこに何があったか、写真は残しているか、契約書のどの記載を確認したか。事実を整理して伝えると、先方も状況を把握しやすくなります。可能であれば、電話のあとにメールで内容を送り、記録を残しておきます。",
  },
  {
    title: "回答と取り決めを、文字が残る形で確認する",
    body: "相談の結果として何らかの取り扱いが決まったら、その内容を文字が残る形で残してください。メールでのやり取り、書面での回答、こちらから送った確認のメールなどが該当します。口頭のやり取りだけだと、後になって認識が食い違ったときに確かめる手段がありません。誰が、いつまでに、何をするのかを整理して書き、先方に確認してもらう形にすると、双方にとって分かりやすくなります。決まっていない点が残っている場合は、その点も含めて書き出しておきます。",
  },
  {
    title: "判断が必要な場面では専門家に相談する",
    body: "管理会社・貸主に相談しても話がまとまらない、双方の認識が大きく食い違う、といった場面では、当事者だけで結論を出そうとしないでください。個別の判断は契約内容と事情によって異なり、一般的な説明をあてはめて自己判断で動くと、対応が難しくなることがあります。こうした場合は弁護士等の専門家にご相談ください。自治体や公的機関には無料の相談窓口が設けられていることがあり、契約をめぐる困りごとについては消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
];

const ngActions = [
  {
    title: "自分の判断で物を処分してしまう",
    body: "残っている物が誰の物か分からないまま処分してしまうと、後から扱いをめぐる話し合いが必要になることがあります。持ち主が分からない物、経緯が分からない物については、自分で結論を出さないでください。個別の扱いは契約内容と事情によって異なります。まず現状を写真に残し、管理会社・貸主に連絡して確認する。この順序を守るだけで、避けられるやり取りが多くあります。判断が必要になった場合は弁護士等の専門家にご相談ください。",
  },
  {
    title: "口頭のやり取りだけで済ませ、記録を残さない",
    body: "電話で相談して「大丈夫です」と言われた、その場で口頭の了解を得た、というだけでは、後から内容を確認する手段がありません。時間が経つと、双方の記憶が食い違うことも起こります。相談した日時、相手の名前、伝えた内容、受けた回答をメモに残し、可能であればメールなど文字が残る形で確認してください。写真とあわせて記録があると、話が前に進みやすくなります。記録は誰かを責めるためのものではなく、事実をそろえるための材料です。",
  },
  {
    title: "気づいてから連絡するまでに時間を空けてしまう",
    body: "入居してしばらく経ってから前の入居者の物に気づいた、退去日の直前になって片付けが終わらないと分かった。どちらの場合も、連絡が遅れるほど状況の確認が難しくなります。いつからその状態だったのかが分かりにくくなり、選べる対応も限られます。気づいた時点で、まだ結論が出ていなくても構わないので、事実だけを管理会社・貸主に伝えてください。早い段階で共有しておくことが、双方にとって扱いやすい状況をつくります。",
  },
  {
    title: "インターネットの一般的な説明をそのままあてはめる",
    body: "残置物をめぐる説明は数多くありますが、書かれている内容は前提となる契約や事情が異なることがほとんどです。所有権の帰属、処分してよいかどうか、費用を誰が負担するのか、契約のどの条項がどう適用されるのかといった論点は、いずれも個別の判断が必要な事柄です。他の事例の結論を自分の状況にあてはめて動くと、事実関係が複雑になります。一般的な情報は状況を理解するために使い、判断は管理会社・貸主への相談と、必要に応じた専門家への相談で行ってください。",
  },
];

const judgeSigns = [
  "退去日までに自力で片付け切れる見通しが立たない",
  "大型の家具や家電が残っていて、自分では動かせない",
  "遠方に住んでいて、現地で作業できる時間が確保できない",
  "物量が多く、自治体の収集だけでは期限に間に合わない",
  "室内の汚れや臭いが強く、通常の清掃では対応が難しい",
];

const faqs = [
  {
    q: "入居した部屋に前の入居者の物が残っていました。どうすればよいですか？",
    a: "まず現状を写真に撮り、いつ・どこに・何があったかを記録してください。そのうえで、管理会社または貸主に連絡し、その物がどのような扱いになっているかを確認します。設備として引き継がれている物なのか、前の入居者が残した物なのかは、見た目では判断できません。自分で処分したり移動させたりする前に確認することが大切です。個別の扱いは契約内容と事情によって異なりますので、判断が必要な場合は弁護士等の専門家にご相談ください。",
  },
  {
    q: "退去のときに、使わない家具を置いていってもよいですか？",
    a: "置いていってよいかどうかは、この記事で一律にお答えできる事柄ではありません。個別の判断は契約内容と事情によって異なります。片付けが間に合わないと分かった時点で、まず管理会社・貸主に状況を伝え、どのように扱うかを相談してください。相談の内容と回答は、メールなど文字が残る形にしておくと後から確認できます。取り決めのないまま物を残すと、後になって話し合いが必要になることがあります。",
  },
  {
    q: "エアコンが前の入居者の物か設備か分かりません。どこで確認できますか？",
    a: "賃貸借契約書、重要事項説明書、入居時に受け取った案内、物件の募集条件などに、設備として扱われている物が記載されていることがあります。まずこれらの書面を確認してください。書面を読んでも判断がつかない場合は、管理会社・貸主に問い合わせます。故障したときの対応や、退去時の扱いが変わってくる可能性がありますので、入居の早い段階で確認しておくと安心です。取り外しや処分の判断は、確認を済ませる前に行わないでください。",
  },
  {
    q: "管理会社に相談しても話がまとまりません。次の相談先はありますか？",
    a: "当事者だけで結論を出そうとせず、弁護士等の専門家にご相談ください。個別の判断は契約内容と事情によって異なり、一般的な説明をあてはめて自己判断で動くと対応が難しくなることがあります。自治体や公的機関には無料の法律相談が設けられていることがありますので、お住まいの自治体の窓口で相談先を確認するのも一つの方法です。契約や請求をめぐる困りごとについては、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
];

const related = [
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限までに片付け切る方法" },
  { href: "/genjou-kaifuku-katazuke-senbiki/", label: "原状回復と片付けの線引き", desc: "自分でやること・やらないこと" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運び出せないときの選択肢" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "申し込みから収集までの手順" },
  { href: "/akiya-katazuke/", label: "空き家の片付け", desc: "残された家財への向き合い方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
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
    { "@type": "ListItem", position: 2, name: "賃貸の残置物とは" },
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
    { href: "#kiso", label: "1｜残置物という言葉の一般的な意味" },
    { href: "#merit", label: "2｜立場と場面で変わる3つのパターン" },
    { href: "#houshin", label: "3｜記録を残し、相談の順序を守る" },
    { href: "#steps", label: "4｜残置物に気づいたときの5ステップ" },
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

      <Breadcrumb items={[{ label: "賃貸の残置物とは" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          賃貸の残置物とは｜借りる側・貸す側それぞれの立場での考え方と相談先
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          入居した部屋の収納に前の人の物が残っていた。退去の準備が間に合わず、家具を置いていくことになりそうだ。こうした場面で出てくるのが「残置物」という言葉です。あまり日常では使わない言葉なので、意味がつかみにくく、どう動けばよいのか迷ってしまう方も少なくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、残置物という言葉の一般的な意味、入居時と退去時それぞれの場面での考え方、設備として置かれている物との違い、写真や書面での記録の残し方、そして相談の順序を整理します。なお、所有権の帰属や処分してよいかどうか、費用の負担といった個別の判断は、契約内容と事情によって異なります。判断が必要な場面では、まず管理会社・貸主にご相談のうえ、弁護士等の専門家にご相談ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>残置物はその場に残された物を指す一般的な言い方で、扱いは契約内容と事情によって異なる</li>
          <li>気づいたらまず写真と記録を残し、動かす前に状況を保存する</li>
          <li>相談の順序は、契約書などの書面を確認したうえで、まず管理会社・貸主へ</li>
          <li>判断が必要な場面では自己判断せず、弁護士等の専門家に相談する</li>
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

      <H2 id="kiso" num="1">残置物という言葉の一般的な意味</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず言葉の意味と、この話題を考えるときの前提を押さえておきます。ここを飛ばすと、話が噛み合わなくなりがちです。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">立場と場面で変わる3つのパターン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        残置物という言葉が使われる場面は、大きく三つに分かれます。自分がどの場面にいるかを確かめてから読み進めてください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">記録を残し、相談の順序を守る</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        残置物をめぐるやり取りで最初に効いてくるのは、記録があるかどうかです。いつからその状態だったのか、どこに何があったのか、どのような経緯でそうなったのか。こうした事実がそろっていれば、相談を受ける側も状況を把握しやすくなり、話が早く進みます。逆に記録がないと、双方の記憶に頼るしかなくなり、確認のためのやり取りが増えます。写真は全体と細部の両方を撮り、日付が分かる形で保存してください。メモには気づいた日時と場所、物の内容を書き添えます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次に大切なのが、相談の順序です。まず契約書や重要事項説明書などの書面を確認し、そのうえで管理会社または貸主に連絡する。この順序を守ると、確認すべき点が整理された状態で相談に入れます。書面を読まずに問い合わせると、記載済みの内容を改めて確認することになり、時間がかかります。また、管理会社・貸主を飛ばして第三者に処理を依頼したり、自分で判断して動いたりすると、後から経緯を説明するのが難しくなります。順序を守ることが、結果的にいちばん早い道になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        そのうえで強調しておきたいのは、所有権が誰にあるのか、処分してよいのか、費用を誰が負担するのか、契約のどの条項がどう適用されるのかといった論点について、この記事では結論を示せないということです。これらは個別の判断が必要な事柄で、契約内容と事情によって異なります。まず管理会社・貸主に相談し、判断が必要な場合は弁護士等の専門家に相談してください。退去にあたっての片付けの進め方は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けの段取り</Link>、原状回復との線引きは<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">原状回復と片付けの線引き</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">残置物に気づいたときの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        記録を残す→書面を確認する→管理会社・貸主に連絡する→取り決めを文字で残す→必要に応じて専門家に相談する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">個別の判断は契約内容と事情によって異なります</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          残置物をめぐっては、その物が誰の物として扱われるのか、処分してよいのかどうか、対応にかかる費用を誰が負担するのか、契約のどの条項がどのように適用されるのかといった論点があります。これらは、賃貸借契約の内容、物件ごとの取り決め、残された経緯、当事者間のやり取りなど、個別の事情によって異なるため、本記事では結論を示していません。一般的な説明や他の事例をそのままあてはめて自己判断で動くことは避けてください。まず管理会社・貸主に相談し、判断が必要な場合は弁護士等の専門家にご相談ください。契約や請求をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相談と並行して、自分の物として片付ける対象がはっきりしている場合は、その処理を進めておくと退去日までの余裕が生まれます。大型の家具は運び出しの経路と手順を先に考えておく必要があり、考え方は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>で整理しています。自治体の収集を使う場合の流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>、行き先ごとの選択肢は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で扱っています。次の住まいが決まっていない場合の家財の扱いは<Link href="/hikkoshisaki-mitei-kazai/" className="text-primary underline underline-offset-2">引っ越し先が決まらないときの家財の扱い</Link>もあわせてご覧ください。
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
        管理会社・貸主との確認が済み、自分で片付ける対象がはっきりしたうえで、次のような状況にあたる場合は業者への依頼を検討する場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者</Link>などエリア別の記事から探せます。
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
        依頼する場合も、対象となる物の範囲について管理会社・貸主との確認が済んでいることが前提です。持ち主や扱いがはっきりしない物を業者に渡してしまうと、後から経緯の説明が難しくなります。依頼先を選ぶ際は、廃棄物の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業範囲を明記することを基準にしてください。見積もり書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>で扱っています。依頼先の候補としては<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/sumai-hotline/" className="text-primary underline underline-offset-2">すまいのホットライン</Link>で対応の範囲や特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものであり、法的な助言を行うものではありません。残置物をめぐる所有権の帰属、処分の可否、費用の負担、契約条項の解釈などの個別の判断は、契約内容と事情によって異なります。判断が必要な場面では、まず管理会社・貸主にご相談のうえ、弁護士等の専門家にご相談ください。自治体や公的機関の無料相談窓口を利用できる場合もありますので、お住まいの自治体の案内もご確認ください。片付け・不用品回収の料金は、物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。廃棄物の収集運搬や家電の処分に関する手続きは、自治体・所管の窓口でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
