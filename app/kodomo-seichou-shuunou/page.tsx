import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kodomo-seichou-shuunou/";
const TITLE = "子どもの成長に合わせた収納の見直し｜おもちゃ・学用品を年齢段階で整える";
const DESC =
  "おもちゃ、絵本、学用品、部活道具、サイズアウトした衣類——子どもの持ち物は成長のたびに中身が入れ替わります。未就学期・小学校期・中高生期という段階ごとの見直しの視点、子ども自身に選ばせる声かけ、収納の高さと動線の決め方、増えすぎたときの手放し方までを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "持ち物の中身が、数年単位でまるごと入れ替わる",
    body: "子どもの持ち物がやっかいなのは、量が増えることよりも「中身が入れ替わる速度」にあります。大人の持ち物は数年使い続ける物が多く、収納の形もそう変わりません。ところが子どもの場合、二年前に夢中だった積み木は触られなくなり、去年ぴったりだった上着は袖が足りなくなり、学用品は学年が上がるたびに種類が変わります。つまり、収納の中身は放っておくと自動的に「今は使わない物」で埋まっていきます。片付かない原因が本人のだらしなさではなく、成長という避けられない変化にあると理解しておくと、責める言葉が減り、見直しを定期作業として組み込みやすくなります。",
  },
  {
    title: "所有者が子どもで、判断の権限が親にない",
    body: "衣類や食器なら、持ち主である自分が決めれば整理は進みます。しかし子どもの物は、使うのも決めるのも子ども自身です。親が良かれと思って勝手に処分すると、後から強い抵抗が生まれ、「勝手に捨てられる」という不信感が残ります。そうなると次の見直しでは、本人がすべてを守ろうとするため、かえって作業が難しくなります。整理の主導権を子どもに残しつつ、判断しやすい場を親が用意する——この役割分担ができているかどうかが、子ども部屋の片付けが続くかどうかを大きく分けます。",
  },
  {
    title: "入ってくる経路が家庭の外にもある",
    body: "子どもの持ち物は、親が買った物だけではありません。祖父母からの贈り物、友達との交換、学校や園で作った制作物、イベントでもらったおまけ、地域の行事の記念品。入口が家庭の外に複数あるため、「買わないようにする」だけでは総量が抑えられません。だからこそ、入ってくる量を制御するより、定期的に出す仕組みを作るほうが現実的です。誕生日や進級、長期休みなど、生活の節目に合わせて見直しのタイミングを固定してしまうと、家族の誰にとっても自然な習慣になります。",
  },
];

const merits = [
  {
    title: "未就学期：安全と「片付けやすさ」を最優先にする",
    body: "この時期は、子ども自身に細かい仕分けを求めるより、戻す動作を簡単にすることが優先です。ふたのない箱に放り込むだけ、写真やイラストのラベルで中身が分かる、といった形にすると、字が読めなくても自分で戻せます。分類はおおまかで十分で、細かく分けすぎると本人も大人も維持できません。あわせて、小さな部品の誤飲、背の高い棚の転倒、コード類などの安全面を確認しておきましょう。この段階の見直しでは、壊れた物、部品が足りない物、対象年齢を大きく下回った物を親が中心に抜き出し、判断の負担を子どもにかけすぎないのが現実的です。",
  },
  {
    title: "小学校期：自分で選ぶ経験を積ませる",
    body: "小学校に入ると、学用品という「必ず置き場所が必要な物」が加わり、遊び道具の好みもはっきりしてきます。この時期は、親が決めて減らすのではなく、子ども自身に選ばせる練習の機会にすると効果が続きます。全部を判断させるのは負担が大きいので、「この箱に入る分だけ残す」「三つのうち一つを選ぶ」といった枠のある問いにするとうまくいきます。手放すと決めた物の行き先を一緒に考えるのも大切です。誰かに譲る、寄付を受け付けている場所を調べる、といった選択肢があると、捨てることへの抵抗が和らぎます。",
  },
  {
    title: "中高生期：本人の領域として線を引き直す",
    body: "中学・高校の時期になると、部活の道具、教科書や参考書、趣味の物が一気に増える一方で、プライバシーの意識も高まります。ここでは、親が管理する範囲と本人に任せる範囲の線を引き直すことが重要です。共有スペースにあふれている物については家族のルールとして相談し、本人の部屋の中は原則として本人に委ねる。そのうえで、卒業や進級のタイミングで「もう使わない教科書・道具をまとめて出す日」を家族の予定として決めておくと、干渉ではなく仕組みとして機能します。将来の一人暮らしを見据えて、自分で持ち物を管理する練習期間と考えると位置づけがはっきりします。",
  },
];

const steps = [
  {
    title: "見直しの日をあらかじめ家族の予定に入れる",
    body: "思い立った日に急に始めると、子どもは自分の物を守る姿勢になりやすく、作業が進みません。進級前、長期休みの初日、誕生日の前など、生活の節目に「持ち物を見直す日」を決めて共有しておきましょう。所要時間も先に伝えておくと、子どもも心の準備ができます。一度で家全体を終わらせようとせず、今日はおもちゃ、次は学用品、というように対象を絞るほうが集中力が続きます。作業の途中で中断してもよいと最初に伝えておくと、疲れたときに投げ出さずに済みます。",
  },
  {
    title: "対象の場所から全部出して、種類ごとに並べる",
    body: "おもちゃ箱、本棚、机の引き出し、クローゼットなど、その日の対象と決めた場所から中身をすべて出します。出したら、ブロック、ぬいぐるみ、カードゲーム、文具、教材、衣類といった種類ごとに床へ並べてください。並べると「同じような物がこんなにあった」「部品が欠けている物が多い」といったことが目で分かり、子ども自身も納得しやすくなります。壊れている物、部品が足りない物、対象年齢を大きく下回っている物は、この時点で親が声をかけて別にまとめておくと後の判断が軽くなります。",
  },
  {
    title: "「今使う・迷う・卒業した」の三つに子ども自身が分ける",
    body: "仕分けは、残す・迷う・手放すではなく、子どもに伝わる言葉で行うと進みやすくなります。「今遊んでいる物」「まだ決められない物」「もう卒業した物」の三つです。ここでは親は口を出しすぎず、質問に答える役に回ってください。迷う箱を作るのは、その場で決められない物に時間を取られて全体が止まるのを防ぐためです。すべてを分け終えてから迷う箱をもう一度見ると、周囲との比較で判断がつきやすくなります。それでも決まらない物は、期限を決めて別の場所に一時保管し、次の見直し日に再検討する形にしても構いません。",
  },
  {
    title: "残す物の置き場所を、子どもの背の高さに合わせて決める",
    body: "残すと決めた物は、子ども自身が出し入れできる高さに置くことが前提です。よく使う物は腰から目線までの高さに、たまに使う物は下段に、季節外の物や大人が管理する物は上段に。棚に踏み台が必要な場所ばかりだと、戻す動作が面倒になり、結局は床に置かれます。収納用品を買い足す前に、今ある棚や箱の配置を変えるだけで解決しないかを先に試してください。収納を増やすほど物が増える構図については、収納グッズの手放し方の記事も参考になります。ラベルは、字が読めない年齢なら写真やイラストで示すと機能します。",
  },
  {
    title: "手放す物の行き先を決め、量が多ければまとめて出す",
    body: "卒業したと決まった物は、状態と種類で行き先を分けます。きれいで需要のある物は、親戚や知人へ譲る、フリマアプリや買取を利用するといった方法があります。それ以外は自治体のルールに従って処分し、規定のサイズを超える物は粗大ごみの手続きが必要になるのが一般的です。学習机やベッド、大型の遊具など自力で運べない物が複数あるときは、まとめて業者に依頼したほうが早い場合もあります。作品や思い出の品で判断が重い物は無理に急がず、写真に残す方法も含めて別枠で扱いましょう。",
  },
];

const ngActions = [
  {
    title: "子どもがいない間に、黙って処分する",
    body: "手っ取り早く見えますが、いちばん避けたい方法です。後から気づいたときの喪失感に加えて、「自分の物を勝手に決められる」という不信感が残ります。その結果、次の見直しでは本人がすべてを守ろうとし、作業はかえって難しくなります。壊れて危険な物やあきらかなごみを取り除くのは別として、本人が価値を感じている物については、必ず本人の判断を通してください。時間がかかっても、自分で決めた経験は次の整理をずっと楽にします。",
  },
  {
    title: "「まだこんな物を持っているの」と価値を否定する",
    body: "大人から見れば些細な紙切れやおまけでも、子どもにとっては強い意味を持っていることがあります。価値を否定する言葉は、片付けそのものへの拒否感に直結します。減らしたいときは物の価値を評価するのではなく、「入る量」という枠の話に置き換えてください。この箱に入る分だけ、この棚一段分だけ、という形なら、本人の気持ちを傷つけずに総量を決められます。決めるのは本人、枠を用意するのは大人、という役割分担を意識しましょう。",
  },
  {
    title: "収納用品を先に買いそろえてしまう",
    body: "見直しの前に収納ケースやラックを買うと、中身を減らさないまま入れ物だけが増え、置き場所をさらに圧迫します。しかも子どもの持ち物は数年で中身が入れ替わるため、今の物量に合わせて買った収納が、次の段階では合わなくなることも珍しくありません。まずは全部出して量を確定させ、既存の棚や箱の配置換えで足りるかを試す。それでも不足する分だけを、サイズを測ってから買い足す。この順番を守るだけで、無駄な出費と収納の肥大化を避けられます。",
  },
  {
    title: "一日で子ども部屋のすべてを終わらせようとする",
    body: "おもちゃも本も学用品も衣類も一度に、と決めると、子どもの集中力は途中で切れ、床に物が広がったまま夕方を迎えることになります。散らかった状態で終わると、片付け自体が嫌な記憶になってしまいます。対象を一か所に絞り、短い時間で区切って終える。終わったら結果を一緒に確認する。この積み重ねのほうが、長い目で見て確実です。どうしても期限が迫っていて量が多い場合は、大人が担当する範囲と子どもが決める範囲を分けて並行して進めましょう。",
  },
];

const judgeSigns = [
  "学習机やベッド、大型の遊具など自力で運び出せない家具が複数ある",
  "きょうだいの成長が重なり、不用品の量が自治体の回収だけでは追いつかない",
  "引っ越しや進学の期限が決まっていて、仕分けの時間が確保できない",
  "物が多すぎて床が見えず、まず運び出す作業から始めなければならない",
  "分別の判断が難しい品目が混在し、自分では区分を決めきれない",
];

const faqs = [
  {
    q: "子どもがおもちゃを一つも手放したがりません。どうすればよいですか？",
    a: "減らすことを目的にせず、まず「全部出して並べる」ところまでを一緒にやってみてください。並べると重複や壊れた物が本人にも見え、判断のきっかけが生まれます。それでも手放せない場合は、無理に進めず「この箱に入る分だけ」という枠の話に切り替える方法があります。枠を決めておけば、どれを残すかは本人が選べます。今回は決められなくても、次の見直し日にもう一度考える形で構いません。",
  },
  {
    q: "サイズアウトした子ども服は、どのタイミングで整理すればよいですか？",
    a: "季節の変わり目に衣類を入れ替えるタイミングが分かりやすい目安です。試着して袖丈や着丈を確認し、明らかに合わない物を分けます。下の子に回す予定がある物は、サイズと季節を書いた箱にまとめて別に保管し、保管する量の上限を決めておくと管理が破綻しません。仕分けの基準や処分先の考え方は衣類整理の記事で解説しています。状態のよい物は譲渡や買取の対象になることもあります。",
  },
  {
    q: "学校で作った作品やテスト、プリントはどこまで残すべきですか？",
    a: "残す量を先に決めておくと迷いが減ります。たとえば学年ごとにファイル一冊分、作品は箱一つ分といった枠です。かさばる立体作品は写真に撮って残す方法もあります。プリント類は学期や学年の区切りで一度に見直すと決めておくと、日々ためこまずに済みます。判断が重い思い出の品については、子どもの作品整理の記事で残す基準の考え方を詳しく扱っています。",
  },
  {
    q: "きょうだいで物が混ざってしまい、仕分けが進みません。",
    a: "まず、共有する物と個人の物を分けるところから始めてください。共有の遊び道具は一か所にまとめ、個人の物はそれぞれの置き場所へ。所有者があいまいな物は、その場で「どちらの物か」を本人たちに確認して決めます。決まらない物は共有扱いにしてしまうのも一つの方法です。置き場所が人ごとに決まると、戻す先が明確になり、日々の散らかりも減っていきます。",
  },
];

const related = [
  { href: "/kodomo-sakuhin-seiri/", label: "子どもの作品・思い出品の整理", desc: "残す基準とデジタル化の方法" },
  { href: "/oshiire-closet-seiri/", label: "押し入れ・クローゼットの整理", desc: "出して仕分けて戻すまでの手順" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの手放し方", desc: "収納を増やすほど片付かない理由" },
  { href: "/irui-seiri/", label: "衣類の整理", desc: "手放す基準と処分先の考え方" },
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "どこから手を付ければ挫折しないか" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップ・買取の併用", desc: "売れる物を活かす手放し方" },
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
    { "@type": "ListItem", position: 2, name: "子どもの成長に合わせた収納の見直し" },
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
    { href: "#kiso", label: "1｜子どもの物が片付かない構造的な理由" },
    { href: "#merit", label: "2｜年齢段階ごとの見直しの視点" },
    { href: "#houshin", label: "3｜収納の高さと動線の決め方" },
    { href: "#steps", label: "4｜見直しを進める5ステップ" },
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

      <Breadcrumb items={[{ label: "子どもの成長に合わせた収納の見直し" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          子どもの成長に合わせた収納の見直し｜おもちゃ・学用品を年齢段階で整える
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          遊ばなくなった知育玩具、読まなくなった絵本、去年の教科書とドリル、袖の足りない上着、押し入れの奥で眠る部活の道具。子どもの持ち物は、増えるだけでなく数年ごとに中身がまるごと入れ替わります。だからこそ、一度整えても放っておけばまた「今は使わない物」で収納が埋まっていきます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、子どもの物が片付きにくくなる構造的な理由、未就学期・小学校期・中高生期という段階ごとの見直しの視点、本人に選ばせるための声かけ、収納の高さと動線の決め方、そして量が増えすぎたときの手放し方までを順に整理します。責めずに続けられる仕組みづくりを目指しましょう。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>子どもの物は「増える」より「入れ替わる」。進級や長期休みなど節目に見直す日を決めて仕組み化する</li>
          <li>決めるのは本人、枠を用意するのは大人。「この箱に入る分だけ」という問い方にすると判断が進む</li>
          <li>収納用品を買うのは全部出して量を確定させた後。先に買うと入れ物だけが増える</li>
          <li>置き場所は子どもの背の高さ基準で。よく使う物は腰から目線の高さ、季節外の物は上段へ</li>
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

      <H2 id="kiso" num="1">子どもの物が片付かない構造的な理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        子ども部屋やリビングの一角が片付かないとき、原因を本人の性格に求めてしまいがちです。しかし実際には、子どもの持ち物には大人の物にはない三つの事情があります。ここを押さえておくと、対処の方向が変わります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">年齢段階ごとの見直しの視点</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        同じ「子どもの片付け」でも、年齢によって目指すところは変わります。未就学期は戻しやすさ、小学校期は自分で選ぶ経験、中高生期は本人の領域としての線引き。段階に合わない方法を当てはめると、うまくいかない原因が見えにくくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">収納の高さと動線の決め方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        子どもが自分で片付けられるかどうかは、意識より配置で決まります。基準になるのは大人の使いやすさではなく、その子の背の高さと動線です。よく使う物は腰から目線までの高さに置き、たまにしか使わない物を下段に、季節外の衣類や大人が管理する物を上段に回します。踏み台がないと届かない場所にしまう物は、出すことも戻すこともされなくなり、結果として床に物が置かれます。棚の一段ごとに「誰の何を置くか」を決めておくと、家族の誰が見ても戻す先が分かります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        動線については、その物を使う場所の近くに置き場所を作るのが原則です。リビングで遊ぶおもちゃを子ども部屋にしまうルールにすると、片付けのたびに部屋を移動することになり長続きしません。宿題をダイニングでする家庭なら、教材の置き場所もその近くに用意するほうが自然です。押し入れやクローゼットの中を整える具体的な手順は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>で解説しています。上段下段の使い分けや湿気対策の考え方は、子どもの物の保管にもそのまま応用できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        気をつけたいのは、収納を増やすことで解決しようとする流れです。ケースやラックを買い足すほど、置ける場所ができた分だけ物が残り、部屋の面積は減ります。まずは今ある棚と箱の配置を変えて足りるかを試し、不足分だけをサイズを測って買い足してください。この構図については<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの手放し方</Link>で詳しく扱っています。また、片付けた状態を保つ仕組みづくりは<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">見直しを進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、日を決める→全部出す→本人が三つに分ける→置き場所を決める→手放す物の行き先を決める、の5ステップです。子どもと一緒に進める前提で組み立てています。
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
        <h3 className="font-bold text-text-primary mb-2">思い出の品と学用品は、別枠で扱うと止まりにくい</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          制作物、賞状、手紙、写真といった思い出の品は、量ではなく気持ちで判断する物です。おもちゃや衣類と同じ流れで仕分けようとすると、そこで作業全体が止まってしまいます。あらかじめ「思い出の箱」を用意して一時的にすべて入れ、別の日にまとめて向き合うほうが進みます。残す基準や写真として残す方法は<Link href="/kodomo-sakuhin-seiri/" className="text-primary underline underline-offset-2">子どもの作品・思い出品の整理</Link>で扱っています。教科書やノート、資料集などの学用品も、学年の区切りで一度に見直す日を決めておくと日常的なためこみを防げます。紙類の分け方は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理</Link>もあわせてご覧ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放すと決まった物のうち、状態がよく需要のある物は買取や譲渡が向きます。活用の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>で解説しています。サイズの大きい物は自治体の粗大ごみとして申し込む流れが一般的で、手順の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。ぬいぐるみや人形のように気持ちの整理が必要な物は<Link href="/nuigurumi-ningyou-shobun/" className="text-primary underline underline-offset-2">ぬいぐるみ・人形の手放し方</Link>で扱っています。
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
        仕分けそのものは家族で進められる作業ですが、次のような状況では片付け・不用品回収業者の力を借りるほうが現実的です。対応できる業者は<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者へ依頼する際は、廃棄物の扱いに必要な許可や資格を確認できるかを見て選び、作業前の見積もりで総額を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。依頼先の候補としては<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>の特徴を比較する方法があります。自治体回収と業者のどちらを使うかの判断は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。学習机やベッドなど大型家具の搬出については<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>もあわせてご確認ください。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なりますので、必ずお住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
