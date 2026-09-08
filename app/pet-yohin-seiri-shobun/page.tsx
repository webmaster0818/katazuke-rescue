import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/pet-yohin-seiri-shobun/";
const TITLE = "ペット用品の整理と処分｜使わなくなったケージ・キャリー・フード・おもちゃを手放す基準と手順";
const DESC =
  "小さいころに使っていたケージやサークル、合わなくて残ったフード、遊ばなくなったおもちゃ、買い替えて余ったトイレやキャリー。ペットと暮らしていると、成長や好みの変化、買い替えのたびに使わなくなった用品が増え、部屋の一角や物置を占領します。ペット用品が増える理由、今の暮らしに必要な物の決め方、譲る・寄付する前に確認すること、フードや薬など消耗品の扱い、ケージや水槽など大きい用品の処分区分を確認する手順までを解説します。見送ったペットの用品の整理は別記事で扱います。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「試して合わなかった物」が、そのまま残りやすい",
    body: "ペット用品は、実際に使ってみないと合うかどうかが分からない物がほとんどです。食べなかったフード、嫌がって入らないベッド、興味を示さなかったおもちゃ、サイズが合わなかった服や首輪など、「買ったけれど使わなかった物」が一定の割合で生まれます。人間の物と違って、飼い主自身が使えるわけではないため、「もったいない」という気持ちだけが残り、手放す判断が先送りにされます。試して合わなかった物は、ペットとの暮らしでは避けられない出費だと割り切ることが、整理の出発点になります。",
  },
  {
    title: "成長や体調の変化で、必要な物が入れ替わる",
    body: "子犬や子猫のころに使っていた小さなケージやサークル、離乳期のフード、噛むためのおもちゃは、成長とともに使わなくなります。高齢になれば、段差を減らすための用品や介護のための用品が必要になり、若いころの用品は役目を終えます。病気や手術のあとには、一時的にしか使わない用品が出ることもあります。ペットの一生の中で必要な物は入れ替わり続けるため、使い終えた物を「いつかまた使うかもしれない」と残していくと、使わない用品が段階ごとに積み重なります。",
  },
  {
    title: "大小・素材が混在し、処分の区分が分かれる",
    body: "ペット用品には、金属製のケージ、プラスチックのトイレやキャリー、布製のベッドや服、ガラスの水槽、木製のキャットタワー、紙や砂のトイレ材、フードや薬など、大きさも素材も異なる物が混ざっています。処分するときの区分は大きさと素材で分かれ、粗大ごみになる物、素材ごとに分別する物、中身と容器を分けて出す物などがあり、扱いは自治体によって異なります。「まとめて捨てられない」ことが手放す負担を大きくし、結果として置いたままになりやすい品目です。",
  },
];

const merits = [
  {
    title: "確認1：今のペットの暮らしに「必要な物の一覧」を先に作る",
    body: "整理を始める前に、今のペットが日常で使っている物と、これから必要になる物を書き出します。フードと食器、水入れ、トイレとトイレ材、寝る場所、首輪やリード、キャリー、爪とぎやおもちゃ、通院のときに使う物、季節の物など、種類ごとに一つずつ挙げます。一覧があると、出てきた用品を「今の暮らしに必要か」という一つの基準で判断でき、迷う時間が減ります。多頭飼いの場合は、頭数分の必要量も合わせて書いておきます。",
  },
  {
    title: "確認2：譲る・寄付する予定の物は、受け入れの条件を先に調べる",
    body: "使わなくなったペット用品を、知人に譲る、保護団体や施設に寄付するという選択肢があります。ただし、受け入れの可否や条件は団体によって異なり、衛生面の理由から、開封済みのフード、使用済みのトイレやベッドは受け付けていないことも少なくありません。譲る、寄付する予定の物は、先に受け入れ先の条件を確認し、条件に合わない物は処分に回します。フードは賞味期限と開封の有無、用品は洗浄できるかどうかが、受け入れの分かれ目になることが一般的です。",
  },
  {
    title: "確認3：大きい用品は、処分の区分と搬出の経路を先に見ておく",
    body: "ケージやサークル、キャットタワー、水槽、大型のキャリー、犬小屋などは、大きさや素材によって処分の区分が変わることがあり、扱いは自治体によって異なります。粗大ごみとして申し込む場合は、収集までの日数と、指定の場所まで運び出す経路を先に見ておきます。分解が必要か、階段やエレベーターを通せるか、水槽であれば水と砂利を先に抜く必要があるかも確認しておくと、当日の作業が止まりません。",
  },
];

const steps = [
  {
    title: "ペット用品を、家中から一か所に集めて種類ごとに並べる",
    body: "ペット用品が置いてある場所をすべて確認し、一か所に出します。リビングの一角、玄関、押し入れ、物置、車の中、ベランダなどに分散していることが多く、集めてみると想像より多いことが珍しくありません。集めたら、ケージやキャリーなどの大きい物、ベッドや服などの布製品、食器やトイレなどのプラスチック製品、フードやおやつ、薬やサプリメント、トイレ材、おもちゃ、リードや首輪などの小物、というように種類ごとに並べます。並べることで、同じ物が複数あることや、サイズの違う物が段階ごとに残っていることが見えてきます。",
  },
  {
    title: "「今使う」「譲る・寄付」「手放す」「保留」の4つに分ける",
    body: "並べた用品を、先に作った一覧をもとに分けます。今のペットの暮らしで使っている物は「今使う」、状態がよく受け入れ先の条件に合う物は「譲る・寄付」、壊れている物、汚れやにおいが取れない物、サイズが合わなくなった物、開封済みのフードの余りなどは「手放す」に入れます。判断に迷う物は「保留」の箱にまとめ、期限を決めて見直します。「次のペットのために」と残したい物は、具体的な予定がある場合に限り「今使う」の扱いにし、予定がない場合は保管期間の上限を決めて保留に入れます。",
  },
  {
    title: "フード・薬・トイレ材などの消耗品は、扱いを確認してから手放す",
    body: "未開封で賞味期限内のフードやおやつは、譲る、寄付するという選択肢がありますが、受け入れ先の条件を確認してからにします。開封済みのフードや期限を過ぎた物は、中身と袋や缶を分けて出す必要があるかどうかが自治体によって異なりますので、分別案内で確認してください。動物病院で処方された薬やサプリメントの余りは、一般のごみに混ぜる前に、処方した動物病院に相談する方法があります。トイレ砂やトイレシートは、種類によって出し方が異なり、水に流せると表示されている物でも自治体や住宅の設備によっては流さないよう案内されていることがありますので、案内に従ってください。",
  },
  {
    title: "ケージ・水槽・キャットタワーなど大きい物は、区分を確認して分解する",
    body: "金属製のケージやサークル、木製のキャットタワー、ガラスの水槽、大型のキャリーや犬小屋は、大きさや素材によって粗大ごみになる場合と、分解して素材ごとに出せる場合があり、扱いは自治体によって異なります。品目と大きさを書き出して、お住まいの市区町村の分別案内で確認してください。分解できる物は分解し、ねじや部品をまとめておきます。水槽は水と砂利を抜いてから運び、砂利や底砂の出し方も自治体の案内を確認します。ヒーターやフィルター、ポンプなどの電気を使う用品は、小型家電の区分になることがあるため、本体と分けておきます。",
  },
  {
    title: "残す物の置き場所を一つに決め、買う前に確認する仕組みにする",
    body: "「今使う」と決めた用品は、種類ごとに置き場所を一つに決めて戻します。フードとおやつは一か所、トイレ材の予備は一か所、通院用の物は一つの袋にまとめる、というように決めておくと、残りの量が一目で分かり、同じ物を二重に買うことが減ります。新しい用品を買う前に、置き場所を見て今ある物を確認する習慣にします。試してみたい用品は、まず少量や一つだけ買い、合うことが分かってから買い足すと、合わなかった物が残る量を抑えられます。保留の箱は期限が来たら見直し、使わなかった物は手放します。",
  },
];

const ngActions = [
  {
    title: "開封済みや期限切れのフードを、そのまま人に譲る",
    body: "開封済みのフードは酸化や湿気で状態が変わっていることがあり、期限を過ぎた物と合わせて、譲ったり寄付したりすることは避けてください。受け入れ先の多くは衛生面の理由から未開封で期限内の物に限っており、条件に合わない物は処分に回します。食べ残しや余ったフードの出し方は、中身と容器を分けるかどうかを含めて自治体の案内で確認してください。",
  },
  {
    title: "処方された薬を、一般のごみに混ぜて出す",
    body: "動物病院で処方された薬やサプリメントの余りを、ほかのごみと混ぜて出すのは避けてください。薬の種類によって扱いが異なるため、処方した動物病院に相談するか、自治体の案内で薬の出し方を確認します。注射器や針のような医療に関わる用品が残っている場合は、必ず動物病院に扱いを確認してください。",
  },
  {
    title: "トイレ砂やシートを、表示だけを頼りに排水に流す",
    body: "「流せる」と表示されたトイレ砂やシートでも、自治体や住宅の排水設備によっては流さないよう案内されていることがあり、詰まりの原因になることがあります。出し方は製品の表示だけでなく、自治体の分別案内と、集合住宅であれば管理規約の案内も確認してください。大量に残ったトイレ材を一度に処分する場合は、特に慎重に扱います。",
  },
  {
    title: "ケージや水槽を、分解や水抜きをせずに運び出そうとする",
    body: "金属製のケージや木製のキャットタワーを分解せずに運ぶと、ドアや階段を通らなかったり、壁や床を傷付けたりすることがあります。水槽は水と砂利を入れたままだと重く、割れると危険です。分解できる物は分解し、水槽は水と砂利を抜いてから運んでください。一人で運び出せない場合は、人手を確保するか、搬出を含めて業者に依頼する方法もあります。",
  },
];

const judgeSigns = [
  "ケージや水槽、キャットタワーなど、自分では運び出せない大きい用品が複数ある",
  "多頭飼いや長年の飼育で、用品の量が部屋の一角や物置を埋めるほどになっている",
  "ペット用品のほかにも、部屋全体の片付けや清掃が必要になっている",
  "引っ越しや退去の期限があり、用品の処分と搬出を短期間で済ませる必要がある",
  "実家や親族の家で、飼育をやめたあとの用品がそのまま残っている",
];

const faqs = [
  {
    q: "使わなくなったケージやサークルは、どう処分すればよいですか？",
    a: "金属製のケージやサークルは、大きさや素材によって粗大ごみとして扱う場合と、分解して素材ごとに出せる場合があり、扱いは自治体によって異なります。品目と大きさを書き出して、お住まいの市区町村の分別案内で確認してください。状態がよい物は、知人に譲る、保護団体に寄付するという選択肢もありますが、受け入れの条件は団体によって異なりますので、事前に確認してください。",
  },
  {
    q: "余ったフードやおやつは、寄付できますか？",
    a: "未開封で賞味期限内のフードやおやつは、保護団体や施設で受け入れていることがありますが、受け入れの品目や条件は団体によって異なります。開封済みの物や期限を過ぎた物は、衛生面の理由から受け付けていないことが一般的です。寄付する前に、受け入れの可否と条件を確認してください。寄付できない物は、中身と容器の分け方を自治体の案内で確認して処分します。",
  },
  {
    q: "水槽や砂利、ヒーターなどの飼育用品はどう手放せばよいですか？",
    a: "水槽はガラスや樹脂の素材と大きさによって区分が変わり、砂利や底砂は自治体によって扱いが異なります。ヒーター、フィルター、ポンプなどの電気を使う用品は、小型家電の区分になることがあります。品目ごとに書き出して、お住まいの市区町村の分別案内で確認してください。運ぶ前に水と砂利を抜き、割れやすい物は新聞紙などで包んでおくと安全です。",
  },
  {
    q: "亡くなったペットの用品は、この記事の考え方で整理してよいですか？",
    a: "この記事は、今ペットと暮らしている家庭で使わなくなった用品を整理する考え方をまとめています。見送ったペットが使っていた物は、気持ちの整理を含めて別の進め方が必要になりますので、ペットの遺品整理の記事を参考にしてください。急いで片付ける必要はなく、残す物を少数決めるという考え方を軸に、気持ちに沿って進めることをおすすめします。",
  },
];

const related = [
  { href: "/pet-ihin-seiri/", label: "ペットの遺品整理の進め方", desc: "見送ったペットの用品と気持ちの整理" },
  { href: "/pet-heya-seisou/", label: "ペットのいる部屋の掃除と消臭", desc: "抜け毛・臭い・汚れを落とす手順" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない物の搬出と選択肢" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみの申し込みの流れ", desc: "申し込みから収集までの手順" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの捨て方", desc: "スプレー缶・電池などの考え方" },
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
    { "@type": "ListItem", position: 2, name: "ペット用品の整理と処分" },
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
    { href: "#kiso", label: "1｜ペット用品が増える3つの理由" },
    { href: "#merit", label: "2｜始める前に確認したい3つのこと" },
    { href: "#houshin", label: "3｜「今の暮らしに必要か」と「人に渡せるか」の二つの軸で考える" },
    { href: "#steps", label: "4｜ペット用品を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "ペット用品の整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ペット用品の整理と処分｜使わなくなったケージ・キャリー・フード・おもちゃを手放す基準と手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          子犬や子猫のころに使っていた小さなケージ、食べてくれずに残ったフードの袋、興味を示さなかったおもちゃ、買い替えて余ったトイレやキャリー、着てくれなかった服。ペットと暮らしていると、成長や好みの変化、買い替えのたびに使わなくなった用品が生まれ、「まだ使えるのに」という気持ちから手放せないまま、部屋の一角や押し入れ、物置を占領していきます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ペット用品が増える理由、今のペットの暮らしに必要な物を先に決める考え方、譲る・寄付する前に確認すること、フードや薬、トイレ材などの消耗品の扱い、ケージや水槽など大きい用品の処分区分を確認して手放す手順を順に解説します。今ペットと暮らしている家庭で使わなくなった用品を対象にしており、見送ったペットの用品の整理は別の記事で扱っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「今のペットの暮らしに必要な物の一覧」を先に作り、それを基準に用品を4つに分ける</li>
          <li>譲る・寄付するときは受け入れ先の条件を先に確認する。開封済みのフードや使用済みの用品は受け付けないことが多い</li>
          <li>薬は動物病院に相談、トイレ材は表示だけでなく自治体と住宅の案内を確認してから出す</li>
          <li>ケージ・水槽・キャットタワーの処分区分は自治体により異なる。品目を書き出して分別案内で確認し、分解と水抜きをしてから運ぶ</li>
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

      <H2 id="kiso" num="1">ペット用品が増える3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ペットのために買った物は、飼い主自身が使えるわけではないため、手放す判断が特に難しくなります。増える仕組みを知ると、基準が決めやすくなります。
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
        必要な物の一覧、受け入れ先の条件、大きい物の段取り。この三つを先に整えておくと、当日の判断が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「今の暮らしに必要か」と「人に渡せるか」の二つの軸で考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ペット用品の整理は、「今のペットの暮らしに必要かどうか」と「人に渡してよい状態かどうか」の二つの軸で考えると整理しやすくなります。一つ目の軸は、先に作った必要な物の一覧で判断します。一覧にない物は、今の暮らしでは使っていない物であり、残す理由は「いつか使うかもしれない」だけになります。成長で使わなくなった物は、同じペットが再び使うことはほとんどなく、「次のペットのために」は具体的な予定がある場合に限って残す理由になります。予定がない場合は、保管期間の上限を決めて保留に入れ、期限が来たら手放します。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        二つ目の軸は、譲る、寄付する、売るという選択肢を考えるときの基準です。ペット用品は衛生面の配慮が必要な品目で、受け入れ先の条件は団体や店舗によって異なります。未開封で期限内のフード、洗浄できて状態のよいケージやキャリー、使用感の少ないおもちゃなどは受け入れられることがありますが、開封済みのフード、使用済みのトイレやベッド、におい移りのある布製品は受け付けていないことが一般的です。譲れない物を「もったいない」と残し続けると、部屋の一角が使えないままになります。条件に合わない物は処分に回すと決めておくと、判断が進みます。状態のよい用品を売る場合の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの買取と処分の併用</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この記事は、今ペットと暮らしている家庭で使わなくなった用品を対象にしています。見送ったペットが使っていた物は、気持ちの整理を含めて別の進め方が必要になりますので、<Link href="/pet-ihin-seiri/" className="text-primary underline underline-offset-2">ペットの遺品整理の進め方</Link>を参考にしてください。用品を減らしたあとに、抜け毛やにおい、汚れが気になる場合は<Link href="/pet-heya-seisou/" className="text-primary underline underline-offset-2">ペットのいる部屋の掃除と消臭</Link>で清掃の手順を扱っています。用品の整理と清掃は同じ日に無理に進めず、まず物を減らしてから清掃に入る順番にすると、作業が二度手間になりません。家全体の中でどの順番に進めるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">ペット用品を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集めて並べる→4つに分ける→消耗品の扱いを確認する→大きい物の区分を確認して分解する→置き場所を決めて戻す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">処分区分と受け入れ条件は、自治体・動物病院・受け入れ先の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          ケージ、サークル、キャットタワー、水槽、キャリー、犬小屋などの処分区分、粗大ごみの対象、フードやトイレ材の出し方、砂利や底砂の扱い、ヒーターやポンプなど電気を使う用品の区分は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。処方された薬や医療に関わる用品の扱いは、処方した動物病院にご確認ください。譲渡や寄付の受け入れ条件は団体によって異なりますので、事前にご確認ください。分別に迷いやすい品目の一般的な考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">スプレー缶・電池など分別が難しいごみの捨て方</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大きい用品を粗大ごみとして出す場合の流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみの申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className="text-primary underline underline-offset-2">粗大ごみの混雑対策</Link>、自分では運び出せない物の考え方は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>で扱っています。集合住宅で大きいケージや水槽を運び出す場合は<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの搬出の段取り</Link>、屋外の犬小屋や柵などが残っている場合は<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品の処分</Link>も参考にしてください。
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
        業者に依頼する場合も、今使う用品と譲る物は自分で先に取り分けておく必要があります。取り分けが済んでいれば、残りをまとめて依頼できるので、当日の作業が早く済みます。作業中はペットが驚いたり逃げ出したりしないよう、別の部屋やキャリーに入れておくなど、安全を確保しておきます。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、依頼できる作業の範囲は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収サービスの内容</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。ケージ・水槽・キャットタワーなどの分別区分・粗大ごみの対象、フード・トイレ材・砂利の出し方、電気を使う飼育用品の区分は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。処方された薬や医療に関わる用品の扱いは、処方した動物病院にご確認ください。寄付や譲渡の受け入れ条件は団体により異なりますので、事前にご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
