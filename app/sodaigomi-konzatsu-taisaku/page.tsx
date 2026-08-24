import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sodaigomi-konzatsu-taisaku/";
const TITLE = "粗大ごみの予約が取れないときの対処｜混み合う時期の見極めと期限に間に合わせる段取り";
const DESC =
  "粗大ごみの受付は、申し込みが集中する時期になると希望日がなかなか取れないことがあります。混み合いやすい局面の見極め方、受付開始のタイミングの押さえ方、収集日から逆算した申し込みの組み立て、自分で持ち込む方法の確認、粗大ごみに出さずに手放す選択肢、そして退去日が動かせないときの進め方を整理して解説します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「予約が取れない」の正体は、受付の枠と収集日までの間隔",
    body: "粗大ごみの収集は、多くの自治体で事前の申し込みを前提にした仕組みになっています。申し込みを受け付けたうえで収集日を決め、決められた日に決められた場所から回収する流れです。つまり、申し込んだその日にすぐ持っていってもらえるわけではなく、申し込みから収集日までに一定の間隔が空きます。この間隔と、日ごとに回収できる件数の上限が重なると、希望した日が埋まっている状態になります。「予約が取れない」と感じる場面の多くは、この二つが背景にあります。仕組みを理解しておくと、次にどこを動かせばよいかが見えてきます。",
  },
  {
    title: "申し込みが集中しやすい時期は、一般に生活の節目と重なる",
    body: "受付の混み具合は自治体や時期によって変わるため一概には言えませんが、一般に、転居が増える時期や、年度が切り替わる前後、年末の大掃除の時期などは申し込みが増えやすいと言われます。生活の節目に片付けをする人が同じタイミングで動くため、結果として受付が重なりやすくなるという考え方です。ただしこれは傾向の話であり、実際にどの時期がどれくらい混むかは地域によって異なります。統計的な断定はできませんので、自分の住む自治体の受付状況は、公式サイトや窓口で実際に確認するのが確実です。",
  },
  {
    title: "ルールも受付方法も自治体ごとに違うので、まず公式の案内を読む",
    body: "粗大ごみの定義、申し込みの方法、収集までの日数、指定できる日、持ち込みができるかどうか、対象になる品目とならない品目。これらはすべて、自治体によって異なります。近隣の市区町村で通用した方法が、そのまま自分の住む地域でも使えるとは限りません。まずは自治体の公式サイトで粗大ごみの案内ページを開き、受付方法と流れを確認してください。分からない点があれば窓口に問い合わせるのが確実です。この記事で扱うのはあくまで一般的な考え方であり、個別の判断は必ず自治体の案内に従ってください。",
  },
];

const merits = [
  {
    title: "確認1：受付の開始時期と、いつから先の日を予約できるか",
    body: "多くの自治体では、収集日の何日前から申し込みを受け付けるか、どれくらい先まで予約できるかが決まっています。この範囲を知らないまま「まだ先だから」と待っていると、受付が始まった直後に枠が埋まり、結果として希望日を逃すことがあります。逆に、まだ受付期間に入っていない日を取ろうとしても申し込みはできません。自分が希望する収集日に対して、いつから申し込めるのかを先に把握し、その日に合わせて動くのが基本です。受付開始のタイミングは自治体の案内で確認してください。",
  },
  {
    title: "確認2：収集日の間隔と、日付を指定できるかどうか",
    body: "申し込みから収集日までの間隔は、自治体によって、また時期によって変わります。希望日を選べる仕組みのところもあれば、こちらから日付を指定できず、割り当てられた日に出す形のところもあります。日付を指定できない仕組みであれば、そもそも「予約を取り直す」という発想が当てはまりません。自分の自治体がどちらの仕組みなのかを最初に確かめておくと、無駄な調整を減らせます。あわせて、収集当日に出す場所と時間の指定、立ち会いの要否も確認しておくと、当日に慌てずに済みます。",
  },
  {
    title: "確認3：自分で持ち込む方法があるか、その条件はどうか",
    body: "収集を待つ以外に、住民が自分で施設へ持ち込む方法を設けている自治体があります。ただし、受け入れの可否、事前の申し込みの要否、受付日と時間、持ち込める品目、必要な書類、車両の条件などは自治体ごとにまったく異なります。受け入れを行っていない自治体もありますので、「持ち込めるはず」と前提を置かずに、公式サイトや窓口で確認してください。持ち込みができる場合、収集を待つより早く手放せることがあるため、期限が迫っている局面では有力な選択肢になります。",
  },
];

const steps = [
  {
    title: "手放したい物を書き出し、粗大ごみに当たるかを仕分ける",
    body: "最初にやるのは、手放したい物の一覧を作ることです。品名、おおよその大きさ、数を書き出します。そのうえで、自治体の案内に照らして、粗大ごみとして申し込む物、通常の分別収集で出せる物、自治体では扱わない物に分けます。品目の区分は自治体によって異なり、同じ物でも扱いが違うことがあります。判断に迷う物は、まとめて窓口に問い合わせると一度で片が付きます。この仕分けができると、実際に申し込む点数が絞られ、混み合う時期でも調整がしやすくなります。",
  },
  {
    title: "自治体の受付方法と、受付開始のタイミングを確認する",
    body: "次に、自分の自治体がどのような方法で申し込みを受け付けているかを確認します。受付の窓口、受付できる曜日と時間、収集日の何日前から申し込めるか、どれくらい先まで予約できるか、変更やキャンセルの取り扱い。これらを公式サイトで確認し、分からなければ窓口に尋ねてください。混み合う時期は、受付が始まる時点から動けるかどうかで結果が変わります。受付開始日を手帳やカレンダーに書き込み、その日に申し込めるよう準備を整えておくと確実です。",
  },
  {
    title: "収集日から逆算して、期限までの日程を組み立てる",
    body: "退去日や引き渡し日などの期限が決まっているなら、そこから逆算します。期限の何日前までに家の中を空にする必要があるか、そのためにはいつまでに収集してもらう必要があるか、その収集日を取るにはいつ申し込めばよいか。この順に遡ると、動くべき日が具体的になります。逆算した結果、期限に間に合わないことが分かった場合も、早い段階で気付けば別の手段を検討する時間が残ります。日程の見通しを紙に書いておくと、家族や関係者とも共有しやすくなります。",
  },
  {
    title: "希望日が取れないときは、持ち込みや別ルートを並行して検討する",
    body: "申し込もうとした日が埋まっていた場合、まずは前後の日で空きがないかを確認します。それでも期限に間に合わないなら、自治体が持ち込みを受け付けているかを調べます。持ち込みができる場合は、事前の申し込みが必要か、どの品目が対象か、必要な書類は何かを確認してください。同時に、粗大ごみとして出す以外の手放し方も並行して探します。ここで選択肢を一つに絞らず、複数のルートを同時に走らせておくことが、期限に間に合わせるうえで効いてきます。",
  },
  {
    title: "それでも間に合わないときは、事業者への依頼を検討する",
    body: "自治体の収集も持ち込みも期限に合わない場合、片付けや不用品回収を行う事業者に依頼する方法があります。依頼する場合は、家庭から出る不用品の収集運搬に必要な許可を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。料金は物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、同じ条件で複数社に見積もりを依頼して比べます。契約をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
];

const ngActions = [
  {
    title: "予約が取れないまま何もせず、期限の直前まで待つ",
    body: "希望日が埋まっていたときに、そのまま何もせず時間が過ぎるのが、いちばん選択肢を狭めるパターンです。混み合う時期は、待っていても空きが出るとは限りません。日が近づくほど、持ち込みの申し込みも、事業者の日程調整も難しくなります。予約が取れなかったと分かった時点で、前後の日の確認、持ち込みの可否の確認、別の手放し方の検討を同時に始めてください。早い段階なら選べた手段が、直前になると使えなくなるという事態は避けられます。",
  },
  {
    title: "申し込みをせずに、収集場所へ勝手に出してしまう",
    body: "期限が迫って焦ると、申し込みをしないまま集積所に大きな物を置いてしまいたくなることがあります。しかし、事前の申し込みを前提とする仕組みのもとでは、これは回収されないだけでなく、近隣の迷惑になり、結局は自分で引き取ることになります。置かれたままの大型の物は、その場所を使う人全員に影響します。ルールから外れた出し方は、時間の節約にはなりません。手続きに沿って進められない事情があるなら、自治体の窓口に状況を伝えて相談するほうが、結果的に早く解決します。",
  },
  {
    title: "急いでいるからと、確認をしないまま回収の誘いに応じる",
    body: "期限が迫っている時期は、判断が急ぎがちになります。そうしたときに、事業者の情報や許可の体制を確認しないまま依頼を決めてしまうと、後から処分の行き先や請求の内容をめぐって困ることがあります。急いでいるときこそ、事業者名と所在地と連絡先が確認できるか、家庭から出る不用品の収集運搬に必要な許可の体制を説明できるか、書面で見積もりを出すかを確かめてください。不安を感じたときは、その場で決めずに消費者ホットライン188に相談することができます。",
  },
  {
    title: "収集の予約が取れる前提で、退去日や引き渡し日を決めてしまう",
    body: "退去や引き渡しの日を先に確定させ、その後で粗大ごみの申し込みをしようとすると、日程が合わなかったときに逃げ場がなくなります。可能であれば、日付を決める前に、自治体の受付の流れと収集までにかかる期間の目安を確認しておいてください。すでに日程が動かせない場合は、その前提で逆算し、間に合わない部分を持ち込みや事業者への依頼で埋める組み立てに切り替えます。賃貸の退去に関する取り決めそのものについては、管理会社や貸主に確認してください。",
  },
];

const judgeSigns = [
  "退去や引き渡しの期限が決まっていて、収集日を待つ余裕がない",
  "自分では運び出せない大型の家具や家電が複数ある",
  "点数が多く、何回かに分けて申し込むと期限に収まらない",
  "遠方に住んでいて、収集日に合わせて現地にいることが難しい",
  "自治体では扱えない品目が含まれていて、別のルートが必要",
];

const faqs = [
  {
    q: "粗大ごみの予約はいつから申し込めますか？",
    a: "収集日の何日前から申し込めるか、どれくらい先まで予約できるかは自治体によって異なります。受付の窓口や受付時間もそれぞれ違いますので、まずは自治体の公式サイトにある粗大ごみの案内を確認し、分からない点は窓口に問い合わせてください。混み合いやすい時期に希望日を取りたい場合は、受付が始まるタイミングを事前に把握し、その日に合わせて申し込めるよう準備しておくと動きやすくなります。",
  },
  {
    q: "自分で施設に持ち込むことはできますか？",
    a: "住民が自分で持ち込む方法を設けている自治体もありますが、受け入れの可否、事前の申し込みの要否、受付日と時間、持ち込める品目、必要な書類、車両の条件はいずれも自治体ごとに異なります。持ち込みを受け付けていない場合もありますので、必ず自治体の公式サイトや窓口で確認してください。持ち込みができる地域では、収集を待つより早く手放せることがあり、期限が迫っている場面の選択肢になります。",
  },
  {
    q: "どの時期が混み合いますか？",
    a: "一般に、転居が増える時期、年度の切り替わりの前後、年末の大掃除の時期などは申し込みが集中しやすいと言われます。ただしこれは傾向の話で、実際の混み具合は地域や年によって異なります。統計として断定できるものではありませんので、自分の住む自治体の受付状況は公式サイトや窓口で確認してください。期限がある場合は、混み合うかどうかにかかわらず、早めに受付の流れを調べて動くのが確実です。",
  },
  {
    q: "収集が期限に間に合わないときは、どうすればよいですか？",
    a: "まず、希望日の前後で空きがないか、自治体が持ち込みを受け付けていないかを確認します。あわせて、買取や譲渡など粗大ごみとして出す以外の手放し方も検討してください。それでも間に合わない場合は、片付けや不用品回収を行う事業者への依頼が選択肢になります。依頼する際は、必要な許可の体制を確認できること、書面で見積もりを出すことを基準にしてください。料金は物量・間取り・作業内容・地域により異なります。",
  },
];

const related = [
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "受付から収集日までの基本" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体と業者の使い分け", desc: "どちらに頼むかの判断基準" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運び出せない物の手放し方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップの併用", desc: "買取と処分の組み合わせ方" },
  { href: "/taikyo-katazuke/", label: "退去前の片付け", desc: "期限から逆算する進め方" },
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
    { "@type": "ListItem", position: 2, name: "粗大ごみの予約が取れないときの対処" },
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
    { href: "#kiso", label: "1｜予約が取れない仕組みを押さえる" },
    { href: "#merit", label: "2｜混み合う局面で先に確認したい3つのこと" },
    { href: "#houshin", label: "3｜期限から逆算して段取りを組む" },
    { href: "#steps", label: "4｜期限に間に合わせる5ステップ" },
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

      <Breadcrumb items={[{ label: "粗大ごみの予約が取れないときの対処" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          粗大ごみの予約が取れないときの対処｜混み合う時期の見極めと期限に間に合わせる段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          手放したい家具が決まり、自治体の粗大ごみに申し込もうとしたところ、希望していた日がすでに埋まっていた。退去の日は動かせないのに、収集日は先まで空いていない。片付けの現場でよく起きるのが、この「予約が取れない」という足止めです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、そもそもなぜ予約が取りにくくなるのかという仕組み、申し込みが集中しやすい時期の一般的な傾向、受付が始まるタイミングの押さえ方、収集日から逆算した申し込みの組み立て方、自分で持ち込む方法の確認、粗大ごみに出さずに手放す選択肢、そして期限が動かせないときの進め方を順に整理します。なお、粗大ごみのルール・受付方法・持ち込みの可否・品目の区分はいずれも自治体によって異なりますので、実際の手続きは必ずお住まいの自治体の公式サイトや窓口でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>予約が取りにくいのは、受付の枠と収集日までの間隔が重なるため。仕組みを知ると動く順番が決まる</li>
          <li>受付がいつから始まり、どこまで先を予約できるかを先に確認する。混む時期は出足で差がつく</li>
          <li>期限がある場合は収集日から逆算し、持ち込みや別の手放し方を並行して検討する</li>
          <li>ルール・受付方法・持ち込みの可否・品目区分は自治体により異なるため、公式サイトや窓口で確認する</li>
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

      <H2 id="kiso" num="1">予約が取れない仕組みを押さえる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        対処を考える前に、なぜ希望日が埋まるのかを押さえておくと、どこを動かせば間に合うのかが見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">混み合う局面で先に確認したい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        受付が始まるタイミング、収集日の間隔と指定の可否、自分で持ち込む方法の有無。この三つは、動き出す前に確認しておきたい点です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">期限から逆算して段取りを組む</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        期限が決まっている片付けでは、「早めに申し込む」という心構えだけでは足りません。必要なのは、期限から日付を遡って、いつ何をするかを具体的に決めることです。まず、家の中を空にしなければならない日を確定させます。次に、その日までに大きな物を運び出し終えるには、いつ収集してもらう必要があるかを置きます。さらに、その収集日を取るにはいつ申し込めばよいのかを、自治体の案内にある受付の流れに照らして遡ります。この三つの日付が並んだ時点で、自分が動くべき日が決まります。逆算の結果、間に合わないと分かった場合も、早く気付けるほど打てる手が残ります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        逆算するときに見落としがちなのが、収集の対象にならない物の存在です。自治体では扱えない品目、あるいは別の仕組みで処理することになっている品目が混ざっていると、そこだけ別のルートが必要になります。品目の区分は自治体によって異なりますので、手放したい物の一覧を作った段階で、まとめて確認しておくと二度手間になりません。また、点数が多い場合、一度の申し込みで出せる数に上限があることもあります。上限があるなら、何回に分ける必要があるのか、その回数で期限に収まるのかも、逆算の材料になります。この整理は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>とあわせて読むと進めやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        逆算して余裕がないと分かったら、粗大ごみとして出す物そのものを減らす方向でも考えます。まだ使える家具や家電は買取や譲渡で手放せることがあり、その分だけ申し込む点数が減ります。この考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの併用</Link>で扱っています。手放し方全体の選択肢を見渡したいときは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>が参考になります。自治体の収集と事業者への依頼をどう組み合わせるかは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。
      </p>

      <H2 id="steps" num="4">期限に間に合わせる5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        物を書き出す→受付の流れを確認する→期限から逆算する→取れないときは別ルートを並行して探す→間に合わなければ依頼を検討する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">手続きと手数料は、必ず自治体の案内で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          粗大ごみの定義、申し込みの方法、受付できる期間、収集までの日数、一度に出せる点数、持ち込みの可否とその条件、対象になる品目とならない品目、手数料の取り扱いは、いずれも自治体によって異なります。本記事は一般的な考え方の整理にとどめており、個別の手続きを示すものではありません。実際の手続きは、お住まいの自治体の公式サイトまたは窓口でご確認ください。また、事業者に依頼する場合の料金は、物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。契約や請求について不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        退去の期限が絡む場合は、粗大ごみの日程だけを見ていると全体が回りません。荷物の梱包、引っ越しの搬出、掃除、鍵の返却まで含めた流れの中に、収集日を置く必要があります。全体の組み立て方は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付け</Link>で扱っています。運び出せない大型の家具をどう扱うかは<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>、集合住宅で搬出の経路に不安がある場合は<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの搬出の段取り</Link>もあわせて確認しておくと、当日に慌てずに済みます。
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
        自治体の収集だけでは期限に収まらないと感じたら、次のような状況が判断の目安になります。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。買取を伴う依頼では、古物の取り扱いに関する許可もあわせて確認します。許可や届出をどこで確かめるかは<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>で整理しています。依頼先の候補としては<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。粗大ごみのルール、受付方法、申し込みから収集までの期間、持ち込みの可否とその条件、対象となる品目の区分、手数料の取り扱いは、いずれも自治体によって異なりますので、必ずお住まいの自治体の公式サイトまたは窓口でご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・間取り・建物の構造・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。賃貸の退去に関する取り決めについては、管理会社や貸主にご確認ください。
      </p>
    </article>
  );
}
