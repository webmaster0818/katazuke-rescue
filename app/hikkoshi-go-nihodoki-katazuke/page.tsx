import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/hikkoshi-go-nihodoki-katazuke/";
const TITLE = "引っ越し後の荷解きが終わらないときの片付け｜開かない段ボールを減らして新居を整える手順";
const DESC =
  "引っ越してから何週間も、何か月も、部屋の隅に段ボールが積まれたまま。開けようと思っても、どこに何を入れたか分からず、置き場所も決まらず、開けた箱の中身がそのまま床に広がる。荷解きが止まる構造、「開いていない箱は使っていない物の候補」という考え方、生活動線の箱から順に開ける決めごと、箱を4つに分けて期限を決める手順、段ボールの出し方を自治体や引っ越し事業者の案内で確認する考え方、収納を買い足す前に総量を減らす順番までを解説します。";
const PUBLISHED = "2026-09-09";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "荷造りは期限があるが、荷解きには期限がない",
    body: "引っ越し前の荷造りは、退去日や搬出日という動かせない期限があるため、間に合わせるために全部を箱に詰めます。ところが、引っ越し後の荷解きには期限がありません。最初の数日で、寝具、食器、着替え、洗面用品など「ないと困る物」だけを出せば生活は始まり、残りの箱は「いつか開ける物」として部屋の隅に置かれます。生活が回ってしまえば、開けなくても困らない箱は開ける理由がなくなり、そのまま数か月、場合によっては次の引っ越しまで残ります。荷解きが止まるのは、意志の問題ではなく、期限がない作業の宿命です。",
  },
  {
    title: "箱を開けても「置き場所」が決まっていないため、中身が床に広がる",
    body: "荷解きは「箱を開ける」作業ではなく、「中身を新しい定位置に置く」作業です。しかし、新居では収納の形や広さが前の家と違い、どこに何を置くかが決まっていません。置き場所が決まらないまま箱を開けると、中身は床やテーブルに広がり、片付けたはずが前より散らかったように見えます。この経験を一度すると、「開けるともっと散らかる」という感覚が残り、箱を開けること自体を避けるようになります。開ける前に置き場所を決める順番にしないと、荷解きは進むほど部屋が乱れます。",
  },
  {
    title: "荷造りのときに「とりあえず詰めた物」が、そのまま新居に持ち込まれている",
    body: "引っ越し前に減らし切れなかった物は、「とりあえず箱に入れて、向こうで考える」という形で運ばれます。中身が混ざった箱、何を入れたか分からない箱、前の家でも使っていなかった物の箱は、新居でも開ける優先度が低く、最後まで残ります。つまり、開かないまま残っている箱の多くは、前の家でも使っていなかった物の集まりです。この事実に気付くと、開かない箱は「片付けが遅れている証拠」ではなく、「手放す候補が箱に入ったまま並んでいる状態」として見ることができます。荷解きの後半は、実は不用品の整理と同じ作業です。",
  },
];

const merits = [
  {
    title: "決めごと1：「開ける順番」は、箱の番号ではなく生活動線で決める",
    body: "荷解きの順番は、箱に書いた番号や部屋名ではなく、毎日の生活動線で決めます。寝る、洗う、食べる、着替える、出かける、という毎日の動作に必要な物の箱を先に開け、それ以外の箱はあとに回します。すでに生活が回っている段階なら、「今週、開けていない箱の中の物を探した場面があったか」を思い出し、探した物の箱を先に開けます。探した場面がない箱は、まだ開けなくてよい箱です。この順番にすると、開けるたびに生活が楽になる実感があり、荷解きが「散らかす作業」から「整える作業」に変わります。",
  },
  {
    title: "決めごと2：箱を開ける前に、その中身の「置き場所」を先に決める",
    body: "箱を開ける前に、中身の置き場所を決めます。箱の外側の表記や、上を少し開けて中身の種類を確認し、「この箱の物は、この棚のこの段に置く」と決めてから、中身を出します。置き場所が決まらない箱は、その場では開けず、置き場所が決まる箱から先に進めます。置き場所を決めるときは、収納を買い足すことを前提にせず、今ある収納に入る量に合わせて中身を減らす方向で考えます。収納を先に買うと、収納に合わせて物が残り、総量が減りません。置き場所を先に決めるだけで、開けた中身が床に広がる状態を防げます。",
  },
  {
    title: "決めごと3：「一定期間開けなかった箱」の扱いを、期限とセットで先に決める",
    body: "開けていない箱の扱いを、期限とセットで決めておきます。「引っ越しから三か月たっても開けていない箱は、中身を見直して手放す候補にする」「半年開けなかった箱は、中身を確認せずに手放すかどうかを考える」のように、自分で期限を決めます。期限を決めておくと、箱をいつまでも「いつか開ける物」として置き続けることがなくなります。期限が来た箱は、一度に全部開ける必要はなく、一箱ずつ上を開けて中身を見て、「探したことがある物」以外は手放す候補にします。この決めごとが、荷解きの終わりを作ります。",
  },
];

const steps = [
  {
    title: "残っている箱を一か所に集め、外側の表記と中身の種類を一覧にする",
    body: "各部屋に散らばっている段ボールを、可能な範囲で一か所に集めます。運べない大きさや量の場合は、集めずに、部屋ごとに箱の数を数えるだけでも構いません。次に、箱の外側に書いた表記を見て、書いていない箱は上を少し開けて中身の種類だけを確認し、「箱の番号」「中身の種類」「開けたい理由の有無」を紙に書き出します。この一覧ができると、「箱が多くて手が付けられない」という漠然とした状態が、「食器が二箱、本が三箱、中身不明が四箱」という具体的な状態に変わります。一覧を作る作業だけなら、判断はほとんど要らず、荷解きが止まっている人でも進めやすい一歩です。",
  },
  {
    title: "「今週探した物の箱」「生活動線の箱」「あとでよい箱」「開ける理由がない箱」の4つに分ける",
    body: "一覧をもとに、箱を4つに分けます。この一週間で「あれはどこの箱に入れたか」と探した物が入っている箱は「今週探した物の箱」、寝る・洗う・食べる・着替える・出かけるという毎日の動作に関わる物の箱は「生活動線の箱」、季節物や書類、趣味の物など、必要な時期が決まっている箱は「あとでよい箱」、中身が混ざっていて前の家でも使っていなかった物や、何を入れたか思い出せない箱は「開ける理由がない箱」に入れます。最初の二つを先に開け、「あとでよい箱」は必要な時期を箱に書き、「開ける理由がない箱」は期限を書いて別の場所にまとめます。分け終えると、今すぐ開ける箱は全体の一部だけになります。",
  },
  {
    title: "先に開ける箱は、置き場所を決めてから一箱ずつ開けて空にする",
    body: "「今週探した物の箱」と「生活動線の箱」を、一箱ずつ進めます。開ける前に中身の置き場所を決め、決まった箱だけを開け、中身をすべて置き場所に移して、箱を空にしてたたみます。一箱を空にしてから次の箱に移ることで、開けかけの箱がいくつも並ぶ状態を防げます。置き場所に入り切らない物が出たら、収納を買い足すのではなく、同じ種類の物の中から手放す物を決めます。食器や衣類、本など、種類ごとの減らし方は関連記事で扱っています。この段階では、一日に開ける箱の数を決め、決めた数で終えます。「今日は二箱」と決めて確実に空にするほうが、一気に開けて途中で止まるより、荷解きは早く終わります。",
  },
  {
    title: "「開ける理由がない箱」は期限が来たら上だけ開け、手放す候補として整理する",
    body: "「開ける理由がない箱」は、決めた期限が来たら、一箱ずつ上を開けて中身を見ます。見た中に「探したことがある物」「使う場面が具体的に思い浮かぶ物」があれば取り出して置き場所を決め、それ以外は手放す候補にします。前の家でも使っておらず、新居でも数か月探さなかった物は、今後も使う場面がほとんどありません。手放す物は、売る、譲る、自治体の区分で出す、業者に回収を頼む、といった出し先を種類ごとに決めます。出し方の全体像は不用品の処分ルートの記事で扱っています。中身が混ざった箱を丸ごと業者に出す場合も、書類や貴重品が混ざっていないかは自分で確認しておきます。",
  },
  {
    title: "空になった段ボールを自治体や引っ越し事業者の案内で確認した方法で出し、荷解きの終わりを決める",
    body: "空になった段ボールは、たたんで一か所にまとめます。段ボールの出し方は、自治体の資源回収に出す、拠点回収に持ち込む、引っ越し事業者が回収する、といった方法があり、自治体の区分や回収の条件、引っ越し事業者の回収の有無や条件は、それぞれ異なります。お住まいの市区町村の分別案内と、契約した引っ越し事業者の案内で確認してから出してください。ガムテープや伝票の扱いも自治体によって案内が異なります。最後に、残った「あとでよい箱」に必要な時期を書き、その時期に開けることを予定に入れて、荷解きの作業をいったん終わりにします。全部の箱が空になるまで終わらないと考えると続きませんので、「今すぐ要る箱が空になった時点で荷解きは終わり、残りは時期が来たら開ける」と決めることが、終わりを作るコツです。",
  },
];

const ngActions = [
  {
    title: "置き場所を決めずに、箱を片端から開けて中身を床に広げる",
    body: "置き場所が決まっていない状態で箱を開けると、中身が床やテーブルに広がり、片付けたはずが前より散らかって見えます。この経験が「開けるともっと散らかる」という感覚を残し、荷解きを止める原因になります。開ける前に中身の置き場所を決め、決まった箱だけを一箱ずつ空にしてください。",
  },
  {
    title: "開かない箱を「まだ片付けが終わっていないだけ」と考えて、いつまでも置き続ける",
    body: "数か月開けていない箱の多くは、前の家でも使っていなかった物の集まりです。「いつか開ける」と考えて置き続けるより、期限を決めて上だけ開け、探したことがある物以外は手放す候補にしてください。開かない箱は片付けの遅れではなく、手放す候補が箱に入ったまま並んでいる状態です。",
  },
  {
    title: "箱の中身を収めるために、先に収納家具や収納グッズを買い足す",
    body: "収納を先に買うと、収納に合わせて物が残り、総量が減らないまま部屋が狭くなります。置き場所に入り切らない物が出たら、まず同じ種類の物の中から手放す物を決め、それでも足りない場合にだけ収納を検討してください。収納を増やすほど片付かない理由は、収納グッズの買いすぎ問題の記事で扱っています。",
  },
  {
    title: "段ボールを、自治体や引っ越し事業者の案内を確認せずにまとめて出す",
    body: "段ボールの出し方は、自治体の資源回収の区分や回収の条件、引っ越し事業者の回収の有無や条件によって異なります。ガムテープや伝票の扱いも案内が分かれます。お住まいの市区町村の分別案内と、契約した引っ越し事業者の案内で確認してから出してください。たたんだ段ボールを部屋に長く置き続けると、湿気やほこりの原因になることもあります。",
  },
];

const judgeSigns = [
  "引っ越しから長い時間がたっても、箱で通路がふさがれていて、寝る場所や食事の場所が確保しにくい",
  "開けない箱の量が多く、手放す候補の物も多くて、自分の手で運び出せる量を超えている",
  "次の引っ越しや退去、来客、同居などの期限が迫っていて、荷解きと不用品の整理を短期間で終える必要がある",
  "仕事や育児、介護、体調の都合で、一箱ずつ進める時間と気力を確保できない",
  "大型の家具や家電が箱と一緒に部屋をふさいでいて、配置換えや搬出を自分ではできない",
];

const faqs = [
  {
    q: "引っ越してから何か月もたっているのに、段ボールが開けられません。何から始めればよいですか？",
    a: "まず、残っている箱の数と中身の種類を紙に書き出すことから始めてください。箱を開ける必要はなく、外側の表記や上を少し開けて種類を確認するだけで構いません。一覧ができたら、この一週間で「どこの箱に入れたか」と探した物がある箱と、寝る・洗う・食べる・着替える・出かけるという毎日の動作に関わる箱を先に開けます。それ以外の箱は、必要な時期や期限を書いて別の場所にまとめておけば、今すぐ開ける箱は全体の一部だけになります。",
  },
  {
    q: "開けていない箱の中身は、確認せずに処分してもよいですか？",
    a: "中身を一切確認せずに丸ごと処分することはおすすめしません。前の家でも使っていなかった物が多いとはいえ、書類や貴重品、家族の物、思い出の品が混ざっている可能性があります。期限が来た箱は、上だけ開けて中身の種類を見て、探したことがある物や使う場面が具体的に思い浮かぶ物を取り出し、それ以外を手放す候補にする、という進め方が現実的です。家族の物が入っている場合は、本人に確認してから決めてください。",
  },
  {
    q: "段ボールの処分はどうすればよいですか？",
    a: "空になった段ボールは、たたんで一か所にまとめ、自治体の資源回収や拠点回収に出す、引っ越し事業者の回収を利用する、といった方法があります。自治体の区分や出し方の条件、引っ越し事業者の回収の有無や条件はそれぞれ異なりますので、お住まいの市区町村の分別案内と、契約した引っ越し事業者の案内で確認してください。ガムテープや伝票をはがす必要があるかどうかも、自治体によって案内が異なります。紙資源の出し方の全体像は、段ボール・古紙の整理と出し方の記事で扱っています。",
  },
  {
    q: "新居の収納が足りません。収納を買い足したほうがよいですか？",
    a: "収納を買い足す前に、置き場所に入り切らない物の中から手放す物を決めることをおすすめします。収納を先に増やすと、収納に合わせて物が残り、総量が減らないまま部屋が狭くなります。開けていない箱の中身は、前の家でも使っていなかった物が多いため、まず総量を減らし、それでも足りない場合にだけ収納を検討する順番が、新居を広く保つ考え方です。荷物を一時的に外に逃がす方法もありますが、保管の条件や費用はサービスによって異なります。",
  },
];

const related = [
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離の段取り", desc: "いつから何を減らす？逆算スケジュール" },
  { href: "/danboru-koshi-seiri/", label: "段ボール・古紙の整理と出し方", desc: "空き箱を溜めない仕組みと資源回収の使い分け" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "収納を増やすほど片付かない理由と手放し方" },
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "どこから・どの順番で進めれば挫折しないか" },
  { href: "/dousei-kekkon-kazai-seiri/", label: "同棲・結婚で家財が重複したときの整理", desc: "どちらを残すかの決め方と段取り" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "自治体・売却・譲渡・業者の使い分け" },
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
    { "@type": "ListItem", position: 2, name: "引っ越し後の荷解きが終わらないときの片付け" },
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
    { href: "#kiso", label: "1｜引っ越し後の荷解きが止まる3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「開かない箱は使っていない物の候補」と考える" },
    { href: "#steps", label: "4｜開かない段ボールを減らして新居を整える5ステップ" },
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

      <Breadcrumb items={[{ label: "引っ越し後の荷解きが終わらないときの片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          引っ越し後の荷解きが終わらないときの片付け｜開かない段ボールを減らして新居を整える手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月9日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          引っ越してから何週間も、場合によっては何か月もたつのに、部屋の隅には段ボールが積まれたまま。開けようと思っても、どこに何を入れたか分からず、新居のどこに置けばよいかも決まらず、試しに開けた箱の中身がそのまま床に広がって、前より散らかったように見える。最初の数日で寝具や食器を出したところで生活は回り始め、残った箱は「いつか開ける物」として景色の一部になっていく。荷解きが終わらない状態は、引っ越しを経験した人の多くが通る、珍しくない状況です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、荷解きが止まる構造を「期限がない」「置き場所が決まっていない」「とりあえず詰めた物が運ばれている」の三つに分けて整理し、開ける順番を生活動線で決める決めごと、箱を開ける前に置き場所を決める考え方、一定期間開けなかった箱の扱いを期限とセットで決める方法、残っている箱を一覧にして4つに分け、先に開ける箱を一箱ずつ空にし、開ける理由がない箱を手放す候補として整理する手順、段ボールの出し方を自治体や引っ越し事業者の案内で確認する考え方を順に解説します。引っ越し前に減らす段取りや、段ボールそのものの出し方の詳細は別の記事で扱っており、この記事は「引っ越したあと、開かない箱が残っている状態」に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>荷解きには期限がない。数か月開いていない箱は「片付けの遅れ」ではなく「使っていない物の候補」と考える</li>
          <li>開ける順番は箱の番号ではなく生活動線。「今週探した物の箱」と「毎日の動作に関わる箱」から開ける</li>
          <li>箱を開ける前に中身の置き場所を決め、一箱ずつ空にする。収納を買い足す前に同じ種類の物を減らす</li>
          <li>「開ける理由がない箱」は期限を書いて別にまとめ、期限が来たら上だけ開けて手放す候補として整理する</li>
          <li>段ボールの出し方は自治体の区分と引っ越し事業者の回収条件により異なる。案内で確認してから出す</li>
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

      <H2 id="kiso" num="1">引っ越し後の荷解きが止まる3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        期限がない、置き場所が決まっていない、とりあえず詰めた物が運ばれている。三つの構造が重なって、箱は開かないまま残ります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">始める前に決めておきたい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        開ける順番、置き場所を先に決める順番、開けなかった箱の期限。この三つを先に決めておくと、箱を開けるたびに部屋が整っていきます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「開かない箱は使っていない物の候補」と考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        荷解きが終わらない状態を抜け出すための考え方は、「全部の箱を開けて収める」から「今すぐ要る箱だけを空にし、残りは使っていない物の候補として扱う」に切り替えることです。引っ越し前に減らし切れなかった物は、「とりあえず詰めて向こうで考える」という形で運ばれています。数か月たっても開けていない箱の多くは、その「とりあえず詰めた物」であり、前の家でも使っていなかった物の集まりです。この見方に立つと、開かない箱は片付けの遅れの証拠ではなく、手放す候補が箱に入ったまま並んでいる、整理しやすい状態と言えます。荷解きの後半は、実質的には不用品の整理と同じ作業です。引っ越し前に減らす段取りを取れなかった場合でも、引っ越し後にこの考え方で進めれば、新居の総量を適正化できます。引っ越し前の逆算の段取りは<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離の段取り</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        先に開ける箱は、生活動線で決めます。寝る、洗う、食べる、着替える、出かけるという毎日の動作に関わる物の箱と、この一週間で「どこに入れたか」と探した物の箱を先に開け、それ以外はあとに回します。開ける前に置き場所を決め、決まった箱だけを一箱ずつ空にすることで、中身が床に広がる状態を防げます。置き場所に入り切らない物が出たら、収納を買い足す前に、同じ種類の物の中から手放す物を決めます。食器や調理器具の減らし方は<Link href="/kitchen-shokki-seiri/" className="text-primary underline underline-offset-2">食器・調理器具の整理</Link>、衣類の仕分け基準は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">服の断捨離のコツ</Link>、本や書類は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理と処分方法</Link>、押し入れやクローゼットへの戻し方は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理手順</Link>で扱っています。収納を先に増やすほど片付かなくなる理由は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        同棲や結婚で二人分の荷物が新居に運ばれた場合は、同じ種類の物が二つずつある状態から始まるため、開ける前にどちらを残すかを決める順番が必要です。その決め方は<Link href="/dousei-kekkon-kazai-seiri/" className="text-primary underline underline-offset-2">同棲・結婚で家財が重複したときの整理</Link>で扱っています。転勤や進学で荷物を減らし切れないまま移動を繰り返している場合は、<Link href="/tenkinzoku-kazai-azuke/" className="text-primary underline underline-offset-2">転勤の多い暮らしと家財</Link>で「預ける・減らす・持ち歩く」の分け方を、荷物を一時的に外に逃がす方法は<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルームを片付けに活用する方法</Link>を参考にしてください。ただし、開けていない箱をそのまま外に預けると、使っていない物を保管し続ける形になるため、預ける前に中身を見直すことをおすすめします。家全体をどの順番で進めるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">開かない段ボールを減らして新居を整える5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        箱を一覧にする→4つに分ける→先に開ける箱を一箱ずつ空にする→開ける理由がない箱を期限が来たら整理する→段ボールを出して終わりを決める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">段ボールの出し方と、手放す物の分別区分は、自治体と引っ越し事業者の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          空になった段ボールは、自治体の資源回収や拠点回収に出す方法と、引っ越し事業者が回収する方法があります。自治体の区分、出し方の条件、ガムテープや伝票の扱い、引っ越し事業者の回収の有無や条件は、それぞれ異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。出す前に、必ずお住まいの市区町村の公式案内と、契約した引っ越し事業者の案内をご確認ください。箱の中から出てきた手放す物についても、家具、家電、衣類、食器、書籍などの分別区分や粗大ごみの扱いは自治体によって異なります。紙資源のまとめ方は<Link href="/danboru-koshi-seiri/" className="text-primary underline underline-offset-2">段ボール・古紙の整理と出し方</Link>、粗大ごみの申し込みの一般的な流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>、手放す物全体の出し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で扱っています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        開ける理由がない箱の中身を手放すときは、種類ごとに出し先を決めます。状態のよい物は売る・譲る、それ以外は自治体の区分で出す、量が多ければ業者に回収を頼む、という分け方です。売る・譲るという手段の使い方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>で扱っています。中身が混ざった箱を丸ごと業者に出す場合も、書類や貴重品、家族の物が混ざっていないかは自分で確認しておきます。片付けの途中で通帳や証書、現金が出てきたときの扱いは<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>を参考にしてください。荷解きの一覧を作るときは、<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>の書き出し方が、そのまま業者に依頼するときの資料にもなります。荷解きが終わったあと、新居で物が増えない仕組みは<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>で解説しています。
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
        荷解きそのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、どの箱を残してどの箱を手放すかの判断は自分で行う必要があります。「開ける理由がない箱」をまとめて回収してもらう形にすると、依頼の範囲が明確になります。箱の中に書類や貴重品が混ざっている可能性がある場合は、作業前に自分で確認するか、見積もりの時点でその扱いを確認してください。引っ越し事業者によっては荷解きの補助を行っている場合もありますが、対応の有無や範囲は事業者によって異なります。片付け業者に任せられる範囲は<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行サービスとは</Link>で扱っています。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の見方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。段ボールをはじめとする紙資源、家具、家電、衣類、食器などの分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。引っ越し事業者による段ボールの回収や荷解きの補助の有無・条件は事業者により異なりますので、契約した事業者の案内でご確認ください。買取や査定の基準・条件は店舗や事業者により異なりますので、事前にご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
