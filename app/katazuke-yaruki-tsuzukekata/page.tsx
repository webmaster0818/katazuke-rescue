import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/katazuke-yaruki-tsuzukekata/";
const TITLE = "片付けのやる気が続かないときの進め方｜小さく始める・時間で区切る・人に頼む判断の基準";
const DESC =
  "始めようと思っても手が動かない、始めても途中で止まる、片付いたと思ったらまた元に戻る。片付けのやる気が続かないのは意志の弱さではなく、やる気を前提にした進め方に原因があります。やる気が切れる場面別の構造、やる気に頼らない進め方の決めごと、今日一か所から再開する手順、途中で止まったときの立て直し方、自分で続けるか第三者に頼むかを判断する基準までを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "始められないのは、頭の中で「全部」を見積もっているから",
    body: "片付けを始めようとして手が動かないとき、頭の中では部屋全体、あるいは家全体の片付けが一つの大きな作業として見積もられています。終わるまでに何時間かかるか、どれだけ疲れるか、どこに何を運ぶか。その全体像が重すぎて、最初の一歩が踏み出せなくなります。やる気がないのではなく、見積もった作業の大きさに対して、今持っている体力と時間が釣り合わないと判断しているだけです。作業の単位を「今日の一か所」まで小さくすると、見積もりも小さくなり、手が動きやすくなります。",
  },
  {
    title: "途中で止まるのは、判断と体力を同時に使い切るから",
    body: "片付けは、物を持ち上げて運ぶ体力の作業と、要るか要らないかを決める判断の作業が同時に進みます。勢いで始めても、判断が重なるにつれて頭が疲れ、体力も落ちてきたところで「もう無理」と手が止まります。止まった場所に出しかけの物が残ると、部屋は始める前より散らかって見え、次に手を付ける気持ちがさらに遠のきます。判断の要らない物から先に手を付け、判断の要る物はあとに回す、という順番にすると、途中で止まりにくくなります。",
  },
  {
    title: "元に戻るのは、「一気にやって終わり」の進め方だから",
    body: "やる気が出た日に一気に片付け、そのあと何もしない、という進め方では、片付いた状態は続きません。片付けは一度の作業ではなく、物が入ってくる量と出ていく量を釣り合わせる暮らしの習慣です。一気に片付けたあとに元に戻ると、「あれだけやったのに」という徒労感が残り、次に取り組む意欲がそがれます。やる気の波に左右されず、短い作業を繰り返す形にすることで、片付いた状態を保ちやすくなります。",
  },
];

const merits = [
  {
    title: "決めごと1：やる気を前提にしない。「気分に関係なくできる大きさ」で決める",
    body: "「やる気が出たらやる」と決めていると、やる気が出ない日は何も進みません。逆に、やる気があってもなくてもできる大きさに作業を区切っておけば、気分に左右されずに進みます。目安は「疲れている日でもできる」大きさで、机の上だけ、引き出し一段だけ、床に落ちている物を拾うだけ、というように具体的な範囲で決めます。小さすぎると感じるくらいがちょうどよく、続いたら範囲を少し広げます。",
  },
  {
    title: "決めごと2：区切りは「時間」か「場所」のどちらかで決める",
    body: "片付けの終わりが見えないことが、やる気を奪います。「今日は短い時間だけ」と時間で区切るか、「今日はこの棚だけ」と場所で区切るか、どちらかを先に決めておきます。時間で区切るならタイマーを使い、鳴ったら途中でもやめます。場所で区切るなら、その場所が終わったらほかに手を出しません。終わりが決まっていると、始めるときの負担が軽くなり、終わったときの達成感が残ります。区切りを守ることが、続ける仕組みの土台になります。",
  },
  {
    title: "決めごと3：「一人で全部やる」を前提から外す",
    body: "片付けを一人で最後までやり切ろうとすると、やる気が続かないときにすべてが止まります。家族や友人に一緒にいてもらう、運び出しだけ手伝ってもらう、判断に迷う物を一緒に見てもらう、片付け業者に一部を任せるなど、自分以外の手を借りる選択肢を最初から持っておきます。誰かがそばにいるだけで作業が進むことも多く、頼ることは片付けの失敗ではありません。特に物量が多い場合や期限がある場合は、早い段階で人に頼む判断をしたほうが、結果として負担が小さくなります。",
  },
];

const steps = [
  {
    title: "今日やる範囲を「一か所」に絞り、声に出すか書き出す",
    body: "部屋全体を見ず、今日手を付ける一か所だけを決めます。玄関の床、テーブルの上、洗面台の周り、ベッドの脇など、目に入りやすく、終わると変化が分かる場所が向いています。決めたら「今日はテーブルの上だけ」と声に出すか、紙に書いておきます。書き出すことで、頭の中の「全部」の見積もりから切り離され、目の前の一か所に集中できます。ほかの場所が気になっても、今日は手を出さないと決めておきます。",
  },
  {
    title: "時間を区切り、タイマーが鳴ったら途中でもやめる",
    body: "始める前にタイマーをかけ、短い時間だけ作業します。時間の長さは、疲れている日でもできる程度にし、鳴ったら途中でもやめます。「もう少しできそう」と感じても、続けずに終えるのがポイントです。余力を残して終えると、次に始めるときの抵抗が小さくなり、「また明日もできる」という感覚が残ります。時間で区切ることに慣れてきたら、少しずつ長くしたり、一日に二回に分けたりして調整します。",
  },
  {
    title: "判断の要らない物から先に手を付ける",
    body: "一か所の中で、まず判断の要らない物から片付けます。空の容器、食べ終えた物の包み、明らかなごみ、読み終えたチラシ、使えなくなった物などは、考えずに袋に入れられます。次に、置き場所が決まっている物を元の場所に戻します。判断の要る物、つまり要るか要らないか迷う物は、最後に回すか、「迷う」箱に入れて今日は決めないことにします。判断を後回しにすることで、頭の疲れを抑えたまま、目に見える変化を作れます。",
  },
  {
    title: "終わったら変化を記録し、次の一か所を決めて終える",
    body: "区切りの時間か場所が終わったら、片付いた場所を写真に撮るか、「テーブルの上が終わった」と紙に記録します。小さな変化でも記録が積み重なると、進んでいる実感が生まれ、次の作業への抵抗が減ります。そして、次に手を付ける一か所を決めてから作業を終えます。次の場所が決まっていると、始めるときに「どこからやるか」を考える負担がなくなり、再開しやすくなります。この「終わるときに次を決める」を繰り返すことが、続ける仕組みそのものです。",
  },
  {
    title: "止まったら「止まった理由」を見て、大きさを変えるか人に頼む",
    body: "何日か続かなかったとしても、失敗ではありません。止まったときは、自分を責める代わりに、止まった理由を見ます。範囲が大きすぎたなら、もっと小さくします。判断の要る物ばかりだったなら、判断の要らない物だけに絞ります。体調や時間の余裕がなかったなら、その時期は休むと決めて構いません。それでも動けない、物量が多すぎる、期限が迫っている、という場合は、家族や友人、片付け業者など第三者に頼む判断に切り替えます。頼むことは、続けるための手段の一つです。",
  },
];

const ngActions = [
  {
    title: "やる気が出た日に、一気に全部やろうとする",
    body: "やる気が出た日に部屋全体に手を付けると、途中で判断と体力を使い切って止まり、出しかけの物が残って部屋が始める前より散らかることがあります。やる気がある日ほど、範囲を一か所に絞り、時間で区切って余力を残して終えてください。「もっとできそう」と感じたときは、次の一か所を決めておくことに使います。",
  },
  {
    title: "収納グッズや道具をそろえることから始める",
    body: "やる気が出たときに、まず収納ケースや便利な道具を買いに行くと、それだけで時間と気力を使い、肝心の片付けは進みません。買った収納に合わせて物を持ち続けてしまうことも多く、逆効果になりがちです。道具は、今家にある袋や箱で十分です。まず一か所を片付け、残す物の量が分かってから、必要なら考えます。",
  },
  {
    title: "続かなかった自分を責めて、「今度こそ気合いで」と繰り返す",
    body: "片付けが続かないのは、意志の弱さではなく、やる気を前提にした進め方の問題です。自分を責めると、片付けそのものが嫌な体験になり、次に手を付けるまでの時間がさらに長くなります。止まったときは、範囲の大きさや区切り方を見直し、進め方を変えてください。気合いで繰り返すより、仕組みを小さく変えるほうが確実です。",
  },
  {
    title: "「時間ができたら」「気持ちが落ち着いたら」と待ち続ける",
    body: "まとまった時間や気持ちの余裕は、待っていてもなかなか来ません。その間に物は増え、片付けの見積もりは大きくなり、始めるのがさらに難しくなります。時間ができるのを待つのではなく、今日の短い時間で一か所だけ手を付けてください。動けない状態が長く続いているなら、自分だけで抱え込まず、家族や第三者に頼む判断を早めにしてください。",
  },
];

const judgeSigns = [
  "床が見えない、水回りや寝る場所が使えないなど、生活に支障が出ている",
  "退去や引っ越し、入院、来客などの期限が迫っていて、自分のペースでは間に合わない",
  "体調や気力の面で、短い時間の作業でも続けることが難しい",
  "物の量が多く、一か所ずつ進めても終わりが見えず、かえって気持ちが沈む",
  "要る要らないの判断を一人でできず、そばで一緒に見てくれる人がいない",
];

const faqs = [
  {
    q: "何度も片付けを始めては挫折しています。私は片付けに向いていないのでしょうか？",
    a: "向き不向きの問題ではありません。多くの場合、部屋全体を一度に片付けようとする見積もりの大きさと、やる気を前提にした進め方が原因です。範囲を一か所に絞り、短い時間で区切り、判断の要らない物から手を付ける進め方に変えると、続く可能性は大きく上がります。それでも難しいときは、家族や第三者に頼む選択肢も含めて考えてください。片付けが続かない背景については、関連記事の片付けられない心理と原因でも扱っています。",
  },
  {
    q: "短い時間で一か所だけでは、いつまでたっても終わらない気がします。",
    a: "終わりが見えないと感じるのは自然なことですが、一気にやって止まるより、短い作業を繰り返すほうが結果として早く進みます。目に入りやすい場所から始めると、変化が見えて続けやすくなります。記録を残すと、進んだ量が実感できます。物量が多く、一か所ずつでは期限に間に合わない場合は、大きな物や運び出しだけを業者に任せ、判断の要る物を自分で進める分担も考えられます。",
  },
  {
    q: "家族が片付けに協力してくれず、一人で抱え込んでいます。",
    a: "家族全員の協力がなくても、自分の物と共有の場所から進めることはできます。家族の物を勝手に処分すると関係が悪くなるため、本人の物は本人に判断してもらい、共有の場所の「判断の要らない物」から手を付けます。片付いた場所ができると、家族の見方が変わることもあります。それでも一人では難しい場合は、第三者に運び出しや仕分けを頼み、家族にはその日だけ立ち会ってもらう形もあります。",
  },
  {
    q: "業者に頼むのは、片付けをあきらめたことになりますか？",
    a: "なりません。片付けの目的は、自分の手で全部やることではなく、暮らしやすい状態にすることです。物量が多い、期限がある、体調や気力の面で難しい、といった場合に第三者の手を借りるのは、続けるための現実的な手段です。一度外の手を借りて状態をリセットしたあと、短い作業の習慣で保つほうが、無理を重ねるより長く続きます。依頼先を選ぶときは、許可の体制や書面の見積もりを確認し、複数社を比べてください。",
  },
];

const related = [
  { href: "/katazukerarenai-shinri/", label: "片付けられない心理と原因", desc: "意志の弱さではない理由と対処" },
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "どこから手を付ければ挫折しないか" },
  { href: "/obeya-dasshutsu-1day-plan/", label: "汚部屋脱出の1日プラン", desc: "1日で部屋を立て直す進め方" },
  { href: "/oheya-checklist/", label: "汚部屋レベルのチェックリスト", desc: "今の状態を客観的に確認する" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "片付いた状態を続ける仕組み" },
  { href: "/service/katazuke-daikou/", label: "片付け代行サービスとは", desc: "任せられる範囲と選び方" },
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
    { "@type": "ListItem", position: 2, name: "片付けのやる気が続かないときの進め方" },
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
    { href: "#kiso", label: "1｜片付けのやる気が続かない3つの構造" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「やる気に頼らない」「区切って終える」が基本" },
    { href: "#steps", label: "4｜今日一か所から再開する5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜第三者や業者に頼んだほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "片付けのやる気が続かないときの進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          片付けのやる気が続かないときの進め方｜小さく始める・時間で区切る・人に頼む判断の基準
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          休みの日に片付けようと決めていたのに、当日になると手が動かない。始めてはみたものの、途中で疲れて出しかけの物が残ったまま止まる。一度は片付いたのに、気づけばまた元の状態に戻っている。片付けのやる気が続かないことに悩む人は多く、「自分はだらしない」「意志が弱い」と自分を責めてしまいがちです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、片付けのやる気が切れる場面を「始められない」「途中で止まる」「元に戻る」の三つに分けて構造を整理し、やる気を前提にしない進め方の決めごと、今日一か所から再開する手順、途中で止まったときの立て直し方、自分で続けるか家族や業者などの第三者に頼むかを判断する基準を順に解説します。片付けが続かない心理的な背景そのものは別の記事で扱っており、本記事は「今日からどう動くか」という実務に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>やる気を前提にしない。疲れている日でもできる大きさ（一か所・短い時間）で作業を決める</li>
          <li>時間か場所で区切り、区切りが来たら途中でもやめる。余力を残して終える</li>
          <li>判断の要らない物から手を付け、迷う物は「迷う」箱に入れて今日は決めない</li>
          <li>止まったら自分を責めず、大きさを変えるか、家族や業者など第三者に頼む判断に切り替える</li>
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

      <H2 id="kiso" num="1">片付けのやる気が続かない3つの構造</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        始められない、途中で止まる、元に戻る。三つの場面はそれぞれ原因が違い、対処も違います。
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
        大きさ、区切り、頼る選択肢。この三つを先に決めておくと、やる気の波に左右されなくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「やる気に頼らない」「区切って終える」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        やる気は、あるときとないときの差が大きく、当てにできるものではありません。片付けを続けるためには、やる気があるかどうかに関係なく動ける形に、作業そのものを作り替える必要があります。具体的には、作業の大きさを「疲れている日でもできる」程度まで小さくし、時間か場所で区切り、区切りが来たら途中でもやめる、という三つです。小さく区切った作業を終えるたびに「できた」という経験が残り、それが次の作業への抵抗を減らします。やる気が続かない人ほど、作業を大きく見積もる傾向があり、見積もりを小さくすることが最初の対処になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付けが続かない背景には、判断疲れや完璧主義、損失回避の心理など、意志の弱さとは別の要因があります。その構造の理解は<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理と原因</Link>で扱っており、本記事はそれを踏まえて「今日からどう動くか」に絞っています。どこから手を付ければ挫折しにくいかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>、まとまった一日が取れるときの進め方は<Link href="/obeya-dasshutsu-1day-plan/" className="text-primary underline underline-offset-2">汚部屋脱出の1日プラン</Link>、今の部屋の状態を客観的に確認したいときは<Link href="/oheya-checklist/" className="text-primary underline underline-offset-2">汚部屋レベルのチェックリスト</Link>を参考にしてください。部屋が散らかっていく過程と段階については<Link href="/gomiyashiki-genin/" className="text-primary underline underline-offset-2">ゴミ屋敷になる原因と進行段階</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もう一つ大切なのは、「一人で全部やる」を前提から外すことです。家族や友人にそばにいてもらう、運び出しだけ手伝ってもらう、片付け業者に一部を任せるなど、自分以外の手を借りる選択肢は、片付けの失敗ではなく、続けるための手段です。物量が多い、期限がある、体調や気力の面で難しい、という場合は、早い段階で頼む判断をしたほうが、結果として負担が小さくなります。片付け代行サービスに任せられる範囲は<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行サービスとは</Link>、自分で片付ける場合の全体の流れは<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自分で片付けるためのガイド</Link>で扱っています。片付いたあとに元に戻らない仕組みは<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンドを防ぐ方法</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">今日一か所から再開する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        一か所に絞る→時間で区切る→判断の要らない物から→記録して次を決める→止まったら大きさを変えるか頼む。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">動けない状態が長く続いているときは、自分だけで抱え込まないでください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けに手が付けられない状態が長く続き、ごみを出せない、食事や睡眠の場所が確保できないなど生活に支障が出ている場合、それは本人の怠慢ではなく、体調や気力、生活の変化などが重なった結果であることがほとんどです。責める必要はありません。家族や友人に状況を伝える、片付け業者に一度リセットを任せる、という方法のほかに、お住まいの自治体の福祉窓口や地域包括支援センターなど、暮らしの相談に応じる窓口もあります。ごみを出せないときの相談先は<Link href="/gomidashi-rule-soudan/" className="text-primary underline underline-offset-2">ごみを出せないときの相談先</Link>で扱っています。まず誰か一人に状況を伝えることが、次の一歩になります。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一か所ずつ進める中で、手放す物の量が多くなってきたら、品目と数を書き出しておくと、家族に分担を頼むときや業者に見積もりを依頼するときに話が早く進みます。書き出し方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>、手放す物の出し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>を参考にしてください。収納グッズを先に買い足すと進まなくなる理由は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>、物を増やさない暮らしへの移り方は<Link href="/minimalist-hajimekata/" className="text-primary underline underline-offset-2">ミニマリストの始め方</Link>で扱っています。
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

      <H2 id="gyousha" num="6">第三者や業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        短い作業を繰り返す進め方でも難しい場合、次のような状況では、家族や友人、片付け業者など第三者の手を借りることを検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に頼む場合も、すべてを任せる必要はありません。大きな物の運び出しやごみの搬出だけを任せ、要る要らないの判断は自分で進める、という分担もできます。一度外の手を借りて状態をリセットし、そのあとを短い作業の習慣で保つ形は、無理を重ねるより長く続きます。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積もりの見方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">片付け業者の見積書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものであり、医療や心理的な支援に代わるものではありません。体調や気力の面で日常生活に支障が続いている場合は、かかりつけの医療機関やお住まいの自治体の相談窓口にご相談ください。不用品の分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
