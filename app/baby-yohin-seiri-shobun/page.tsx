import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/baby-yohin-seiri-shobun/";
const TITLE = "ベビー用品の整理と処分｜チャイルドシート・ベビーカー・ベビーベッドを手放す基準と手順";
const DESC =
  "使わなくなったベビーカー、チャイルドシート、ベビーベッド、抱っこひも、哺乳瓶や離乳食の道具。子どもの成長とともに短期間で役目を終えるベビー用品は、次の子のためにと残しやすく、気付くと押し入れや物置を占領します。残すか手放すかを決める基準、安全に関わる用品を譲るときの注意点、大きい用品の処分区分の確認先、譲る・売る・寄付する選択肢までを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ベビー用品は「使う期間が短く、種類が多い」",
    body: "ベビー用品は、新生児のころに使う物、寝返りやお座りのころに使う物、歩き始めてから使う物と、成長の段階ごとに必要な物が変わります。それぞれの期間は短く、数か月で使わなくなる物も少なくありません。一方で、種類は多く、大きい物から小さい物まで幅があります。使い終えた物を「次の子のために」「まだきれいだから」と残していくと、成長の段階ごとに使い終えた物が積み重なり、家の中で最も物量の多い品目の一つになります。",
  },
  {
    title: "「次の子のため」が最も残す理由になりやすい",
    body: "ベビー用品を残す理由として最も多いのは、「次の子が生まれたときに使うかもしれない」というものです。この考え方自体は自然ですが、次の子の予定が具体的にない場合や、生まれるまでの期間が長い場合、保管の場所と、その間に用品が傷んだり、安全の基準が変わったりすることを考える必要があります。「次の子のため」に残す物は、本当に必要な物に絞り、残す期間の目安を決めておくと、家の中を占領し続けることを防げます。",
  },
  {
    title: "安全に関わる用品は、一般の不用品と分けて考える",
    body: "チャイルドシート、ベビーベッド、ベビーカー、抱っこひもなどは、子どもの安全に直接関わる用品です。使い終えた物を譲る、売る、寄付する場合は、製品の状態、使用期限の有無、リコールの対象になっていないかなどを確認する必要があります。特にチャイルドシートは、事故の衝撃を受けた物や、部品が欠けている物を譲ることは避けるべきです。製品ごとの使用期限や安全の基準はメーカーの案内で確認し、迷う場合は譲らないという判断も選択肢に入れてください。",
  },
];

const merits = [
  {
    title: "確認1：残す用品は「次の子の予定」と「保管期間の上限」で決める",
    body: "次の子の予定が具体的にあるなら、必要な用品を絞って残します。予定がない、または未定の場合は、「二年以内に使わなければ手放す」のように保管期間の上限を決めておきます。上限を決めておくと、期限が来たときに迷わず判断できます。残す物は、ベビーベッドやベビーカーなど買い直すと負担が大きい物を優先し、衣類や小物は必要になったときに改めてそろえるという考え方もあります。",
  },
  {
    title: "確認2：譲る・売る予定の物は、安全に関わる情報を先に調べる",
    body: "チャイルドシート、ベビーベッド、ベビーカー、抱っこひもなどを人に渡す予定がある場合は、製品名や型番を控え、メーカーの案内で使用期限やリコールの有無を確認します。取扱説明書や付属品がそろっているかも確認しておくと、受け取る側が安心して使えます。確認できない物、状態に不安がある物は、譲らずに処分する判断も選択肢です。安全に関わる用品は、「まだ使える」という見た目だけで判断しないようにしてください。",
  },
  {
    title: "確認3：大きい用品は、処分の区分と搬出の経路を先に見ておく",
    body: "ベビーベッド、ベビーカー、ハイチェア、チャイルドシート、バウンサーなどは、大きさや素材によって処分の区分が変わることがあり、扱いは自治体によって異なります。粗大ごみとして申し込む場合は、収集までの日数と、指定の場所まで運び出す経路を先に見ておきます。分解が必要か、階段やエレベーターを通せるかも確認しておくと、当日の作業が止まりません。",
  },
];

const steps = [
  {
    title: "ベビー用品を、大きい物と小さい物に分けて全部出す",
    body: "押し入れ、クローゼット、物置、車の中、実家に預けている物など、ベビー用品がある場所をすべて確認し、一か所に出します。ベビーベッド、ベビーカー、チャイルドシート、ハイチェアなどの大きい物と、衣類、哺乳瓶、離乳食の道具、おもちゃ、絵本、抱っこひも、おむつ関連などの小さい物に分けながら出すと、次の作業が早くなります。成長の段階ごとに分けておくと、「次の子のため」に残す物を絞りやすくなります。",
  },
  {
    title: "「次の子のために残す」「譲る・売る」「手放す」の3つに分ける",
    body: "出した用品を、次の子のために残す物、人に譲るか売る物、処分する物の3つに分けます。汚れや破損がある物、部品が欠けている物、使用期限が過ぎている物、においが取れない物は「手放す」に入れます。残す物は、次の子の予定と保管期間の上限を基準に絞ります。「譲る・売る」に入れた安全に関わる用品は、次のステップで安全に関わる情報を確認してから決めます。",
  },
  {
    title: "安全に関わる用品は、使用期限とリコールの有無を確認してから譲る",
    body: "チャイルドシート、ベビーベッド、ベビーカー、抱っこひもなどを譲る、売る、寄付する場合は、製品名や型番からメーカーの案内で使用期限やリコールの有無を確認します。事故の衝撃を受けたチャイルドシート、部品が欠けている物、取扱説明書がなく正しい使い方を伝えられない物は、譲らないという判断が安全です。寄付や譲渡を受け付けている団体の受け入れ条件も、団体によって異なるため事前に確認してください。",
  },
  {
    title: "手放す物は、自治体の分別区分で出す",
    body: "処分する用品は、大きさや素材によって区分が変わります。ベビーベッドやベビーカー、ハイチェアなどは粗大ごみの対象になることが多い一方、チャイルドシートやバウンサーは自治体によって扱いが分かれることがあります。電池で動くおもちゃやメリー、電動のバウンサーは、電池を外す、電池は別の区分で出すなど、自治体の指示に従ってください。品目を書き出して、お住まいの市区町村の分別案内で確認してから出すと、二度手間になりません。",
  },
  {
    title: "残す用品は、まとめて保管し、期限を書いておく",
    body: "次の子のために残すと決めた用品は、成長の段階ごとに箱にまとめ、中身と保管期間の上限を箱に書いておきます。衣類は洗ってから、哺乳瓶や道具は乾かしてからしまいます。大きい用品は分解できる物は分解し、部品と取扱説明書を一緒にまとめておくと、次に使うときに困りません。期限が来たら改めて見直し、使わなければ手放します。空いた場所は、今の子どもの成長に合わせた収納に使うと、次の物が入り込むのを防げます。",
  },
];

const ngActions = [
  {
    title: "チャイルドシートを、状態や使用期限を確認せずに譲る",
    body: "チャイルドシートは、事故の衝撃を受けると見た目に変化がなくても性能が落ちていることがあり、製品ごとに使用期限が定められていることもあります。譲る、売る、寄付する場合は、メーカーの案内で使用期限やリコールの有無を確認し、事故歴のある物や部品が欠けている物は譲らないでください。確認できない場合は、譲らずに処分する判断が安全です。",
  },
  {
    title: "「次の子のため」と、期限を決めずにすべて残す",
    body: "次の子の予定が具体的にないまま、すべてのベビー用品を残すと、押し入れや物置を長期間占領し、今の暮らしに必要な物の置き場所がなくなります。残す物は買い直す負担が大きい物に絞り、「二年以内に使わなければ手放す」のように期限を決めておきます。衣類や小物は、必要になったときに改めてそろえるという考え方も現実的です。",
  },
  {
    title: "電池の入ったおもちゃやメリーを、電池を外さずにそのまま出す",
    body: "電池で動くおもちゃやメリー、電動のバウンサーなどは、電池を入れたまま出すと、収集や処理の過程で発熱や発火につながることがあります。電池は外して、自治体の区分に従って別に出してください。充電式の電池が内蔵されている物は、外し方や回収方法が自治体や販売店によって異なりますので、案内を確認してから手放してください。",
  },
  {
    title: "大きい用品を、分解せずに無理に運び出そうとする",
    body: "ベビーベッドやハイチェアなどは、分解せずに運ぼうとすると、ドアや階段を通らなかったり、壁や床を傷付けたりすることがあります。分解できる物は分解し、部品をまとめてから運びます。分解の方法が分からない場合は、取扱説明書やメーカーの案内を確認してください。一人で運び出せない場合は、人手を確保するか、搬出を含めて業者に依頼する方法もあります。",
  },
];

const judgeSigns = [
  "ベビーベッドやハイチェアなど、自分では運び出せない大きい用品が複数ある",
  "ベビー用品のほかにも子ども部屋や押し入れの整理が必要になっている",
  "引っ越しや退去の期限があり、日程に余裕がない",
  "実家に預けた用品も含めて、まとめて整理しなければならない",
  "育児や仕事で作業する時間が取れず、仕分けから搬出まで一度に済ませたい",
];

const faqs = [
  {
    q: "チャイルドシートは、使わなくなったらどう処分すればよいですか？",
    a: "チャイルドシートの処分区分は自治体によって異なり、粗大ごみとして扱う場合と、別の扱いになる場合があります。お住まいの市区町村の分別案内で確認してください。譲る、売る、寄付する場合は、メーカーの案内で使用期限やリコールの有無を確認し、事故歴のある物や部品が欠けている物は譲らないでください。確認できない場合は処分する判断が安全です。",
  },
  {
    q: "ベビーカーは、まだきれいなら売れますか？",
    a: "状態がよく、付属品や取扱説明書がそろっているベビーカーは、買取や譲渡の対象になることがあります。製品名や型番を控え、リコールの有無を確認したうえで、動作や破損の有無を確認してください。売れない場合の処分区分は、大きさや素材によって変わることがあるため、自治体の分別案内で確認してください。",
  },
  {
    q: "次の子の予定は未定です。どこまで残せばよいですか？",
    a: "決まった答えはありませんが、買い直す負担が大きいベビーベッドやベビーカー、チャイルドシートなどを優先して残し、衣類や小物は必要になったときに改めてそろえるという考え方があります。残す物には「二年以内に使わなければ手放す」のように保管期間の上限を決めておくと、期限が来たときに迷わず判断できます。",
  },
  {
    q: "ベビー用品を寄付したいのですが、どこに相談すればよいですか？",
    a: "ベビー用品の寄付を受け付けている団体や施設がありますが、受け入れの品目や条件は団体によって異なります。特に安全に関わる用品は受け入れていない団体もあります。事前に受け入れの可否と条件を確認してから持ち込んでください。地域の子育て支援の窓口で、譲渡や寄付の情報を案内してもらえることもあります。",
  },
];

const related = [
  { href: "/kodomo-seichou-shuunou/", label: "子どもの成長に合わせた収納の見直し", desc: "おもちゃ・学用品を年齢段階で整える" },
  { href: "/nuigurumi-ningyou-shobun/", label: "ぬいぐるみ・人形の処分", desc: "気持ちの整理と手放し方" },
  { href: "/kodomo-sakuhin-seiri/", label: "子どもの作品の整理", desc: "残す物と写真に残す物の分け方" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない物の搬出と選択肢" },
  { href: "/genkan-getabako-seiri/", label: "玄関・下駄箱の片付け", desc: "ベビーカーなど大きい物の置き方" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップの買取と併用", desc: "売れる物と処分する物の分け方" },
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
    { "@type": "ListItem", position: 2, name: "ベビー用品の整理と処分" },
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
    { href: "#kiso", label: "1｜ベビー用品が家を占領する3つの理由" },
    { href: "#merit", label: "2｜始める前に確認したい3つのこと" },
    { href: "#houshin", label: "3｜「次の子のため」と「安全」の二つの軸で考える" },
    { href: "#steps", label: "4｜ベビー用品を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "ベビー用品の整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ベビー用品の整理と処分｜チャイルドシート・ベビーカー・ベビーベッドを手放す基準と手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          玄関に置いたままのベビーカー、車から下ろしたチャイルドシート、分解して押し入れに入れたベビーベッド、箱に詰めた哺乳瓶や離乳食の道具。子どもの成長とともに短い期間で役目を終えるベビー用品は、「次の子のために」「まだきれいだから」と残しやすく、成長の段階ごとに使い終えた物が積み重なって、家の中で最も物量の多い品目の一つになります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ベビー用品が家を占領する理由、「次の子のため」に残す物を絞る考え方、チャイルドシートやベビーベッドなど安全に関わる用品を譲るときの注意点、大きい用品の処分区分を確認する進め方、譲る・売る・寄付するという選択肢、残す物の保管の仕方を順に解説します。育児の合間に少しずつ進められるよう、段階を区切って書いています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「次の子のため」に残す物は、買い直す負担が大きい物に絞り、保管期間の上限を決める</li>
          <li>チャイルドシートなど安全に関わる用品は、使用期限とリコールを確認してから譲る。迷ったら譲らない</li>
          <li>大きい用品の処分区分は自治体により異なる。品目を書き出して分別案内で確認する</li>
          <li>電池の入ったおもちゃは電池を外してから出す。電池の区分は自治体の指示に従う</li>
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

      <H2 id="kiso" num="1">ベビー用品が家を占領する3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        使う期間は短いのに、なぜこれほど増えるのか。理由が分かると、残す基準が決めやすくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">始める前に確認したい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        残す基準、安全の確認、搬出の段取り。この三つを先に整えておくと、当日の作業が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「次の子のため」と「安全」の二つの軸で考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ベビー用品の整理は、「残すかどうか」と「人に渡してよいかどうか」の二つの軸で考えると整理しやすくなります。残すかどうかは、次の子の予定と保管期間の上限で決めます。予定が具体的にあるなら必要な物を残し、未定なら買い直す負担の大きい物に絞って、期限を決めて残します。衣類や哺乳瓶、離乳食の道具などの小物は、必要になったときに改めてそろえるという考え方が現実的なことも多く、すべてを残す必要はありません。子どもの成長に合わせて物を入れ替えていく考え方は<Link href="/kodomo-seichou-shuunou/" className="text-primary underline underline-offset-2">子どもの成長に合わせた収納の見直し</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        人に渡してよいかどうかは、安全に関わる用品かどうかで分けます。チャイルドシート、ベビーベッド、ベビーカー、抱っこひもなどは、製品の状態、使用期限の有無、リコールの対象になっていないかを確認してから、譲る、売る、寄付するかを決めます。事故の衝撃を受けたチャイルドシート、部品が欠けている物、取扱説明書がなく正しい使い方を伝えられない物は、見た目がきれいでも譲らないという判断が安全です。確認はメーカーの案内で行い、確認できない物は譲らずに処分する選択肢を残してください。状態のよい用品を売る場合の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの買取と処分の併用</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ベビー用品と一緒に、ぬいぐるみやおもちゃ、子どもが小さいころの作品や写真が出てくることも多く、そちらは気持ちの整理が必要な品目です。ぬいぐるみや人形は<Link href="/nuigurumi-ningyou-shobun/" className="text-primary underline underline-offset-2">ぬいぐるみ・人形の処分</Link>、作品は<Link href="/kodomo-sakuhin-seiri/" className="text-primary underline underline-offset-2">子どもの作品の整理</Link>、写真は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理</Link>で扱っています。ベビー用品の整理と同じ日に無理に進めず、別の機会に分けて向き合うほうが、後悔が少なくなります。
      </p>

      <H2 id="steps" num="4">ベビー用品を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部出す→3つに分ける→安全を確認する→区分を確認して出す→残す物を期限付きで保管する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">処分区分と安全に関わる情報は、自治体とメーカーの案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          ベビーベッド、ベビーカー、チャイルドシート、ハイチェア、バウンサーなどの処分区分、粗大ごみの対象、電池の出し方は自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。使用期限やリコールの有無など、安全に関わる情報は製品のメーカーの案内でご確認ください。寄付や譲渡の受け入れ条件は団体によって異なりますので、事前にご確認ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大きい用品を粗大ごみとして出す場合の流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみの申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの混雑対策</Link>、自分では運び出せない物の考え方は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>で扱っています。ベビーカーを玄関に置く場合の考え方は<Link href="/genkan-getabako-seiri/" className="text-primary underline underline-offset-2">玄関・下駄箱の片付け</Link>、残す用品を一時的に家の外に預ける場合は<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルームの活用</Link>を参考にしてください。
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
        次のような状況では、自分たちだけで抱え込まず、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、「次の子のために残す物」と「譲る物」は自分で先に取り分けておく必要があります。取り分けが済んでいれば、残りをまとめて依頼できるので、当日の作業が早く済みます。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、集合住宅での搬出の段取りは<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの搬出の段取り</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。ベビー用品の分別区分・粗大ごみの対象・電池の出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。チャイルドシートなど安全に関わる用品の使用期限やリコールの有無は、製品のメーカーの案内でご確認ください。寄付や譲渡の受け入れ条件は団体により異なりますので、事前にご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
