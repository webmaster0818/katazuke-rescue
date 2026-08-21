import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/dousei-kekkon-kazai-seiri/";
const TITLE = "同棲・結婚で家財が重複したときの整理｜どちらを残すかの決め方と段取り";
const DESC =
  "二人分の暮らしを一つにまとめると、冷蔵庫も洗濯機も炊飯器も二つ、食器も家具も二人分。どちらを残すか決めるための判断軸、話し合いを揉めさせない進め方、新居の寸法確認、そして余った家財を期限内に手放す段取りまでを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "生活家電と家具が、そのまま二セット分になる",
    body: "それぞれが一人暮らしをしていた場合、冷蔵庫、洗濯機、電子レンジ、炊飯器、テレビ、掃除機、ベッド、テーブル、収納家具が二つずつあることになります。どちらも数年しか使っておらず、まだ十分に動く。だからこそ「片方を手放す」という判断が重くなります。ここで大切なのは、物の良し悪しを競わせないことです。二人分の暮らしを一つの部屋に収めるという条件があり、その条件に合うほうを選ぶ。どちらが優れているかではなく、どちらが新しい住まいに合うか、という問いに置き換えると、話し合いが感情の勝負になりません。",
  },
  {
    title: "「自分の物」の基準が二人で違う",
    body: "何をどれだけ持つか、どこまで残すかの感覚は、育ってきた環境や暮らし方によって大きく異なります。片方が「使っていないなら手放す」と考え、もう片方が「使えるうちは持っておく」と考えていれば、同じ物を前にしても結論が正反対になります。どちらの感覚も間違いではありません。問題は、そのずれを自覚しないまま作業を始めることです。片付けが進まない、意見が合わないというとき、原因は物ではなく前提の違いにあります。最初に互いの考え方を確認しておくと、後の摩擦がかなり減ります。",
  },
  {
    title: "スケジュールが決まっていて、判断を先送りできない",
    body: "同棲や結婚に伴う引っ越しには、契約日、退去日、入居日という動かせない期限があります。粗大ごみの申し込みには日数がかかり、買取や譲渡にも日程調整が必要です。「あとで決める」と保留にした物は、結局そのまま新居へ運ばれ、収納を圧迫することになります。しかも新生活が始まると、片付けの優先順位はどうしても下がります。期限から逆算して、いつまでに何を決めるかをあらかじめ組んでおくことが、この時期の片付けでは何より効きます。",
  },
];

const merits = [
  {
    title: "判断軸1：新居の間取りと寸法に合うのはどちらか",
    body: "重複する家財のどちらを残すかで迷ったら、まず新居の条件に当てはめてください。冷蔵庫なら設置スペースの幅・奥行き・高さと、扉の開く向き。洗濯機なら防水パンのサイズと蛇口の位置。ベッドやソファなら部屋の広さと搬入経路。テーブルなら人数と部屋のバランス。この確認をすると、「両方まだ使える」という状態から「片方は物理的に置けない」という明確な結論に変わることがよくあります。感情ではなく寸法で決まるので、どちらの持ち物であっても納得しやすいのが利点です。",
  },
  {
    title: "判断軸2：使用年数と今後の使い方",
    body: "サイズがどちらも合う場合は、使用年数と今後の使い方で比べます。生活家電は使用年数が長いほど、いずれ買い替えの時期が来ます。二人暮らしになれば、一人暮らし用の容量では足りなくなる家電もあります。冷蔵庫や洗濯機は容量、電子レンジや炊飯器は使う頻度と量が判断の材料です。どちらも近いうちに買い替えることになりそうなら、いったん状態のよいほうを使いながら、買い替えの時期を二人で決めておくという進め方もあります。無理にどちらかを新品に揃える必要はありません。",
  },
  {
    title: "判断軸3：思い入れのある物は別枠として扱う",
    body: "重複する家財のなかには、機能では測れない物が混ざります。家族から譲り受けた物、長く使ってきた道具、趣味に関わる品。これらを「効率」で処理しようとすると、相手にとって大切なものを軽んじる形になり、後々まで残るしこりになります。あらかじめ「思い入れのある物は別枠」と決めておき、互いに数点ずつは理由を問わず残せるようにしておくと、他の判断がむしろ進みます。置き場所については、共有スペースではなく個人のスペースに収めるという線引きにすると現実的です。",
  },
];

const steps = [
  {
    title: "作業の前に、二人で持ち物の考え方をすり合わせる",
    body: "いきなり物を並べる前に、話しておきたいことがあります。互いにどのくらいの物量が心地よいか、何を手元に置きたいか、共有する物と個人の物をどう分けるか。この確認をしておくと、作業中の「なぜそれを残すのか」というやり取りが減ります。あわせて、思い入れのある物は別枠にすること、判断が割れたときはどうするかも決めておきましょう。たとえば「どちらかが強く残したいと言った物は残す」といった取り決めがあると、その場での言い争いを避けられます。",
  },
  {
    title: "それぞれの家で、重複する物のリストを作る",
    body: "次に、双方の住まいにある物を種類別に書き出します。生活家電、家具、寝具、食器、調理器具、収納用品といった単位で構いません。写真を撮って共有すると、離れていても確認できます。この時点で、どの品目が重複しているかが一覧になります。同時に、それぞれの物のサイズ、購入からの年数、状態もメモしておくと、後の判断が早くなります。ここで大事なのは、まだ決めないことです。全体像が見えないまま個別に決めていくと、後で矛盾が出ます。",
  },
  {
    title: "新居の寸法を測り、置ける物を確定させる",
    body: "新居が決まったら、実際に測りに行きます。玄関の開口部、廊下の幅、部屋の入口、階段の折り返し、エレベーターの寸法。そして冷蔵庫の設置スペース、洗濯機の防水パン、収納の内寸、部屋の広さ。図面の数値と実測が異なることもあるため、可能なら現地で確認してください。測った数値と重複リストを突き合わせると、「置ける物」と「置けない物」が機械的に分かれます。この作業を先にやっておくと、話し合いで決めなければならない範囲がぐっと小さくなります。",
  },
  {
    title: "残す物を決め、余った物の行き先を早めに手配する",
    body: "置ける物が確定したら、重複するもののうちどちらを残すかを判断軸に沿って決めます。決まったら、余った家財の行き先を早めに手配してください。状態のよい生活家電や家具は買取や譲渡の対象になることがあります。譲る相手の心当たりがあるなら早めに声をかけましょう。処分する場合、自治体の粗大ごみは申し込みから収集まで日数がかかることが一般的です。冷蔵庫・洗濯機・エアコン・テレビは家電リサイクル法の対象で、粗大ごみとは別のルートになります。退去日から逆算して、遅くとも数週間前には段取りをつけておくと安心です。",
  },
  {
    title: "新居では、共有と個人のスペースを決めてから物を入れる",
    body: "引っ越しの当日にすべてを収めようとせず、まず「どこに何を置くか」の大枠を二人で決めます。共有で使う物の置き場所、それぞれの個人の物のスペース、来客用や季節物の収納。この線引きが最初にできていると、日々の片付けで「これは誰の物か」「どこに戻すか」で迷いません。個人のスペースは、量の上限も含めて決めておくと後々もめにくくなります。荷解きは一度に終わらせず、使う物から順に開けていき、一定期間開けなかった箱は中身を見直す機会にすると、新生活のうちに総量を適正化できます。",
  },
];

const ngActions = [
  {
    title: "相手の持ち物について、価値を否定する言い方をする",
    body: "「そんな物いらないでしょう」「これ古くない?」といった言葉は、物の話に見えて相手の暮らし方への評価として伝わります。一度そう受け取られると、以後の話し合いは防御的になり、合理的な判断ができなくなります。減らしたいときは、価値の評価ではなく条件の話に置き換えてください。「新居のここには一つしか置けない」「収納がこの広さだから、この量までにしたい」。条件を共有すれば、どちらを残すかは自然と話し合いの対象になります。",
  },
  {
    title: "新居の寸法を測らずに、どちらを残すか決めてしまう",
    body: "感覚や好みだけで先に決めてしまうと、いざ運んでみて入らないことが判明し、当日その場で判断を迫られます。冷蔵庫の扉が壁にぶつかって開かない、洗濯機が防水パンに収まらない、ベッドが部屋の入口を通らない——こうした事態は珍しくありません。搬入経路と設置場所の寸法を測ってから決めるのが原則です。測った数値をもとにすれば、「どちらの物か」ではなく「どちらが入るか」で決まるため、話し合いも進めやすくなります。",
  },
  {
    title: "判断できない物を、とりあえず新居へ運ぶ",
    body: "決めきれない物を保留にして持っていくと、新居の収納が最初から埋まった状態で生活が始まります。新生活が始まれば片付けの優先順位は下がり、その箱は開かれないまま定着します。保留にすること自体は構いませんが、数の上限を決めてください。段ボール何箱までと決め、それを超える分は判断する。持っていった保留の箱については、一定期間開けなかったら見直すと決めておくと、放置を防げます。",
  },
  {
    title: "退去日の直前になってから、処分の手配を始める",
    body: "自治体の粗大ごみは申し込みから収集まで日数がかかるのが一般的で、引っ越しの多い時期はさらに混み合います。買取や譲渡も日程の調整が必要です。直前に動き出すと、間に合わずに新居へ運ぶか、退去時に残置物として問題になるかのどちらかになります。残置物は原状回復のトラブルにつながることもあります。退去日から逆算して、遅くとも数週間前には申し込みや引き取りの手配を済ませておきましょう。日程が読めない場合は業者にまとめて依頼する選択肢もあります。",
  },
];

const judgeSigns = [
  "退去日までの日数が短く、二人分の仕分けと処分が終わらない",
  "冷蔵庫・洗濯機・ベッドなど大型の家財が重複して複数ある",
  "二か所の住まいから同時に荷物を出す必要がある",
  "不用品の量が多く、自治体の回収だけでは期限に間に合わない",
  "階段のみの物件で、大型家財を自力で運び出せない",
];

const faqs = [
  {
    q: "冷蔵庫や洗濯機が二つあります。どちらを残せばよいですか？",
    a: "まず新居の設置スペースを測り、置ける寸法かどうかを確認してください。冷蔵庫は幅・奥行き・高さに加えて扉の開く向き、洗濯機は防水パンのサイズと蛇口の位置が重要です。どちらも置ける場合は、使用年数と二人暮らしに必要な容量で比べます。一人暮らし向けの容量では足りなくなることもあるため、当面は状態のよいほうを使い、買い替えの時期を二人で決めておくという進め方も現実的です。",
  },
  {
    q: "相手が物を手放したがりません。どう話せばよいですか？",
    a: "手放すかどうかの話ではなく、新居の条件の話から始めてください。「ここには一つしか置けない」「この収納の広さに収めたい」という共有できる事実があると、対立ではなく共同作業になります。それでも決まらない物は、思い入れのある物として別枠に置き、個人のスペースに収める形にするのも一つの方法です。互いに数点ずつは理由を問わず残せるようにしておくと、他の判断がむしろ進みます。",
  },
  {
    q: "余った家電や家具は売れますか？",
    a: "状態や年式によっては買取や譲渡の対象になることがあります。ただし需要は品目や時期によって変わり、査定の結果も一律ではありません。売却を考えるなら、退去日から余裕をもって早めに動くことが大切です。日程が合わない場合は、譲渡の仕組みを使う、あるいは処分に切り替えるといった判断が必要になります。買取と片付けを組み合わせる考え方は関連記事で整理しています。",
  },
  {
    q: "新居に運んだ後、荷解きが進みません。どうすればよいですか？",
    a: "全部を一度に開けようとせず、使う物から順に開けるのが現実的です。そのうえで、一定期間開けなかった箱は中身を見直す機会と考えてください。開けなかったということは、その期間なくても生活できたということです。あわせて、共有で使う物の置き場所と個人のスペースを決めておくと、戻す先が明確になり日々の片付けが楽になります。片付いた状態を保つ仕組みは関連記事で扱っています。",
  },
];

const related = [
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の荷物の見直し", desc: "逆算スケジュールの立て方" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分", desc: "冷蔵庫・洗濯機などのルート" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない家具の搬出と選択肢" },
  { href: "/kitchen-shokki-seiri/", label: "食器・調理器具の整理", desc: "重複しやすい品目の仕分け基準" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップ・買取の併用", desc: "売れる物を活かす手放し方" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "きれいな状態を保つ仕組み" },
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
    { "@type": "ListItem", position: 2, name: "同棲・結婚で家財が重複したときの整理" },
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
    { href: "#kiso", label: "1｜二人分の家財をまとめるときの難しさ" },
    { href: "#merit", label: "2｜どちらを残すか決める3つの判断軸" },
    { href: "#houshin", label: "3｜話し合いを揉めさせない全体方針" },
    { href: "#steps", label: "4｜整理を進める5ステップ" },
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

      <Breadcrumb items={[{ label: "同棲・結婚で家財が重複したときの整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          同棲・結婚で家財が重複したときの整理｜どちらを残すかの決め方と段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          それぞれ一人暮らしをしていた二人が一緒に住むとき、最初にぶつかるのが家財の重複です。冷蔵庫が二つ、洗濯機が二つ、電子レンジも炊飯器もテレビも掃除機も二つ。どちらもまだ十分に使えるからこそ、どちらを手放すかの判断が難しくなります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、重複する家財をどう選ぶかの判断軸、話し合いを感情の勝負にしないための進め方、新居の寸法を測って決める手順、そして退去日から逆算した処分の段取りまでを整理します。新生活を気持ちよく始めるための準備としてお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「どちらの物が良いか」ではなく「新居に置けるのはどちらか」で決める。寸法が最強の判断材料</li>
          <li>作業の前に、二人の持ち物に対する考え方のずれを確認しておく</li>
          <li>思い入れのある物は別枠。互いに数点は理由を問わず残せるようにすると他の判断が進む</li>
          <li>処分の手配は退去日から逆算して早めに。粗大ごみは申し込みから収集まで日数がかかる</li>
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

      <H2 id="kiso" num="1">二人分の家財をまとめるときの難しさ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        引っ越しそのものは経験があっても、二人分の暮らしを一つにまとめる作業は勝手が違います。物の量だけでなく、感覚の違いと期限という三つの要素が同時に重なるためです。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">どちらを残すか決める3つの判断軸</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        重複する家財の選択で揉めるのは、判断の基準が共有されていないときです。次の三つの軸を先に決めておけば、個々の物についての結論はかなり機械的に出せるようになります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">話し合いを揉めさせない全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この時期の片付けでもっとも避けたいのは、物の選定が相手への評価に見えてしまうことです。長く使ってきた道具や、こだわって選んだ家具には、その人の暮らし方が表れています。それを「いらない」「古い」と言われれば、誰でも守りたくなります。だからこそ、判断の主語を物や人ではなく、新居という条件に置くことが有効です。「この壁面には一つしか置けない」「収納はこの内寸だからここまで」。共有された条件のもとでの選択なら、どちらの持ち物が選ばれても、相手を否定したことにはなりません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        あわせて決めておきたいのが、共有する物と個人の物の線引きです。生活家電やダイニングまわりは共有、衣類や趣味の道具、思い出の品は個人。個人のスペースについては、置ける量の上限を決めておくと、後から不公平感が生まれにくくなります。この線引きが最初にできていると、新生活が始まってからの「これは誰の物か」「どこに戻すのか」という日常的なやり取りも減ります。片付いた状態を保つ仕組みづくりについては<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        重複しやすい品目のうち、点数が多くて判断に時間がかかるのが食器と調理器具です。二人分をそのまま合わせると、日常では使いきれない量になることがほとんどです。仕分けの基準は<Link href="/kitchen-shokki-seiri/" className="text-primary underline underline-offset-2">食器・調理器具の整理</Link>で詳しく扱っています。衣類についても、収納の容量を先に決めてから量を合わせる進め方が有効で、<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理</Link>が参考になります。引っ越し全体の逆算スケジュールは<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の荷物の見直し</Link>にまとめています。
      </p>

      <H2 id="steps" num="4">整理を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、考え方をすり合わせる→重複リストを作る→新居の寸法を測る→残す物を決めて手配する→新居で共有と個人の線を引く、の5ステップです。
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
        <h3 className="font-bold text-text-primary mb-2">家電リサイクル法の対象品は、粗大ごみとは別のルートに</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機は家電リサイクル法の対象で、自治体の粗大ごみとしては出せない仕組みになっています。買い替えの際に販売店へ引き取りを依頼する、購入した店に相談する、といった流れが一般的ですが、手続きの詳細は品目や状況によって異なります。制度の枠組みと進め方の考え方は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分</Link>で整理しています。手放す前の準備として、冷蔵庫は中身を出して霜取りを、洗濯機は水抜きが必要です。手順は<Link href="/reizouko-sentakuki-shobun-junbi/" className="text-primary underline underline-offset-2">冷蔵庫・洗濯機の準備</Link>をご確認ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        余った家財のうち、状態がよく需要のある物は買取や譲渡の対象になることがあります。考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>で解説しています。大型の家具は自治体の粗大ごみとして申し込む流れが一般的で、手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。自力で運び出せない家具については<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分</Link>で搬出の選択肢を扱っています。退去時に物を残してしまうと原状回復のトラブルにつながることがあるため、<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">原状回復と片付けの線引き</Link>も確認しておくと安心です。
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
        二か所の住まいから同時に荷物を出す必要がある分、この時期の片付けは負担が大きくなります。次のような状況では、片付け・不用品回収業者への依頼を検討してください。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。引っ越しの多い時期は日程が埋まりやすいので、早めに問い合わせておくと選択肢が広がります。依頼先の候補は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>で特徴を比較できます。自治体回収と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なりますので、必ずお住まいの自治体の案内をご確認ください。家電リサイクル法対象品の手続きは品目や状況により異なります。賃貸の原状回復に関する取り決めは契約内容によって異なりますので、契約書と管理会社にご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
