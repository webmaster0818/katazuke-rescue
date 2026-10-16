import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shisetsu-taikyo-kyoshitsu-seiri/";
const TITLE = "施設の居室を引き払うときの整理｜持ち込んだ家財の仕分けと退去までの段取り";
const DESC =
  "高齢者施設や療養型の住まいからの退去では、居室の家具・衣類・日用品・思い出の品を限られた日数で片付ける必要があります。退去が決まってからの確認事項、施設の備品と持ち込んだ物の見分け方、レンタル福祉用具の返却、次の住まいに持っていく物の決め方、運び出す段取り、家族の分担を、退去日から逆算して解説します。";
const PUBLISHED = "2026-09-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "退去までの日数が短く、家族がそろえる日が限られる",
    body: "施設の居室の引き払いは、住み替えや体調の変化、看取りのあとなど、あらかじめ日程を組んでおけない事情で始まることがほとんどです。退去日は施設との取り決めで決まり、その日までに居室を空にすることが求められます。一方で、片付けに関われる家族は仕事や遠方の事情を抱えていて、そろえる日が限られます。日数が短く、動ける人が少ないという二つの条件が重なるため、その場で一つずつ判断していく進め方では間に合いません。退去日から逆算して、いつ何を決めるかを先に割り付けることが出発点になります。",
  },
  {
    title: "居室の物は「持ち込んだ物」「施設の備品」「借りている物」が混ざっている",
    body: "居室に置かれている物は、家から持ち込んだ家具や衣類だけではありません。ベッドや収納、カーテンのように施設が備え付けているもの、福祉用具として貸与を受けているもの、施設で用意された消耗品などが同じ部屋に並んでいます。見た目では区別が付きにくく、持ち込んだ物として運び出してしまったり、逆に返却が必要な物を置いたまま退去してしまったりすると、あとから連絡のやり取りが必要になります。何がどの区分かは施設の担当者や担当のケアマネジャーが把握していることが多いため、片付けを始める前に確認するのが確実です。",
  },
  {
    title: "物の量は多くないのに、判断の重さで手が止まる",
    body: "居室に置ける物の量は、家一軒に比べれば限られています。それでも片付けが進まないのは、一つひとつが本人の暮らしと結び付いているからです。愛用していた衣類、家族の写真、手紙、読みかけの本、施設で作った作品などは、量の問題ではなく判断の重さの問題であるため、「効率よく分ける」という進め方だけでは対応できません。判断が重い物と、事務的に処理できる物を分けて、事務的な物から先に手を付けることが、限られた日数の中で有効な進め方です。",
  },
];

const merits = [
  {
    title: "決めごと1：退去日と、鍵・立ち会いの取り決めを最初に確認する",
    body: "片付けの計画は、退去日がいつか、居室の明け渡しに立ち会いが必要か、鍵や入退館の手続きがどうなるかを確認するところから始まります。搬出のために業者を入れる場合に、事前の連絡や作業できる時間帯、使える出入口やエレベーター、駐車できる場所に決まりがあるかどうかも、同時に確認しておきたい点です。これらは施設ごとに取り決めが異なるため、思い込みで進めず、施設の担当者に一度まとめて聞いておくと、当日の行き違いを防げます。聞いた内容は家族で共有できるようメモに残します。",
  },
  {
    title: "決めごと2：物の区分を「持ち込んだ物」「借りている物」「施設の物」に分ける",
    body: "作業を始める前に、居室の中を三つの区分に整理します。持ち込んだ物は家族が仕分けと運び出しを行う対象、借りている物は返却の手配が必要な対象、施設の物は手を触れずに残す対象です。福祉用具の貸与を受けている場合は、返却の窓口と引き取りの日程を担当のケアマネジャーや貸与している業者に確認します。区分がはっきりすると、「これは持ち帰るのか、置いていくのか」で迷う時間がなくなり、当日の作業が一度に進みます。借りた物と購入した物の扱いの違いは、関連記事の介護用品・福祉用具の整理でも扱っています。",
  },
  {
    title: "決めごと3：誰が何を決めるかを、家族の間で先に割り当てる",
    body: "居室の物には、本人にしか分からない物と、家族で決めてよい物が混ざります。本人が転居先で暮らし続ける場合は、持っていく物の判断は本人に委ね、家族は運び出しと手配を担当するのが基本です。本人に確認できない場合は、誰が最終的に決めるかを家族の間で先に決めておきます。衣類は誰、書類は誰、写真や手紙は誰、というように担当を分けると、同じ物を何度も見返すことがなくなります。決めたことは短くメモに残し、その場にいなかった家族にも共有します。",
  },
];

const steps = [
  {
    title: "退去日から逆算して、作業日と確認事項を書き出す",
    body: "まず退去日を起点に、必要な作業を並べます。施設への確認、福祉用具の返却の手配、運び出しの手段の決定、次の住まいや実家への搬入、手放す物の処分の手配の順に、それぞれ「いつまでに決めるか」「誰が担当するか」を書き出します。家族がそろえる日が一日しかない場合は、その日を「運び出す日」と定め、それまでの平日に電話やメールで済ませられる確認と手配を終わらせておきます。当日の判断をできるだけ減らしておくことが、限られた日数で終えるために最も重要です。書き出し方は、関連記事の不用品リストの作り方が参考になります。",
  },
  {
    title: "居室の写真を撮り、施設の担当者と区分を確認する",
    body: "作業を始める前に、居室全体と収納の中が分かる写真を撮ります。写真があると、家族の間で状況を共有でき、運び出しを頼むときの説明にも使えます。そのうえで、施設の担当者と一緒に、備え付けの物と持ち込んだ物、返却が必要な物の区分を確認します。ベッド、収納家具、カーテン、家電などは判断が分かれやすいため、一つずつ指さして確認しておくと確実です。返却が必要な物については、引き取りの日程と、退去日までに間に合うかどうかもこの時点で確かめます。",
  },
  {
    title: "「次の住まいへ」「家族が引き取る」「手放す」「保留」に分ける",
    body: "持ち込んだ物を四つに分けます。次の住まいへ運ぶ物は、転居先の広さと収納に入る量を先に確かめてから決めます。家族が引き取る物は、誰がどこへ持ち帰るかを決め、その場で名前を書いた袋や箱に入れます。手放す物は、そのまま処分できる物と、扱いの確認が必要な物に分けます。写真、手紙、通帳や証書、印鑑、記念の品などは、その場で判断せず「保留」としてまとめ、持ち帰ってから落ち着いて確認します。居室で判断を急ぐと、あとで見当たらなくなる物が出やすくなります。",
  },
  {
    title: "貴重品・書類・記録の類を先に抜き出し、家族で保管する",
    body: "居室の引き出しや衣類のポケット、本の間には、通帳、印鑑、保険の証書、年金や医療に関する書類、写真、手紙などが入っていることがあります。これらは運び出しの前に、家族の手で抜き出してひとまとめにし、保管する担当を決めておきます。手続きに関わる書類は、退去後の各種の連絡で必要になることがあるため、まとめて一つの箱に入れ、中身の一覧を書いておくことをおすすめします。片付けの途中で現金や貴重品が出てきたときの扱いは、関連記事の片付け中に貴重品や現金が出てきたらでまとめています。",
  },
  {
    title: "運び出しの手段を決め、居室を空にして引き渡す",
    body: "運び出しは、家族の車で運べる量か、業者に頼む必要があるかで手段が変わります。家具や家電を含む場合、エレベーターや通路の幅、駐車できる場所によって作業の段取りが変わるため、施設に確認した条件をそのまま業者に伝えて見積もりを取ります。手放す物の量が多い場合は、不用品回収に対応する業者に、居室からの搬出と処分をまとめて依頼する方法もあります。最後に、施設の物に手が付いていないか、返却が必要な物が残っていないかを確認し、居室を空にして引き渡します。搬出の段取りの考え方は、関連記事のマンションの不用品搬出の段取りが応用できます。",
  },
];

const ngActions = [
  {
    title: "施設の備品や、借りている福祉用具を持ち出す・処分する",
    body: "居室にある物の中には、施設が備え付けている物や、貸与を受けている福祉用具が含まれています。これらを持ち込んだ物と思い込んで運び出したり処分したりすると、返却や弁償の話になることがあります。どれが借りている物かは施設の担当者や担当のケアマネジャー、貸与している業者が把握しているため、作業の前に必ず確認してください。判断が付かない物は動かさず、印を付けて残しておき、担当者の確認を待つのが安全です。",
  },
  {
    title: "本人が使い続ける物を、確認せずに処分する",
    body: "転居先でも暮らしが続く場合、居室の物の多くは本人にとって現役の持ち物です。使いにくそうに見える物や古い物でも、本人にとっては手になじんだ道具であることがあります。家族の判断だけで減らすと、転居後に「あれがない」という不安につながり、新しい環境に慣れるまでの負担が増えます。持っていく物の判断は本人に委ね、家族は量が入るかどうかの確認と運び出しを担うのが基本です。本人に確認しながら進める声のかけ方は、関連記事の親に片付けを促す声かけの考え方が参考になります。",
  },
  {
    title: "写真・手紙・記念の品を、その場で判断して処分する",
    body: "限られた時間の中で作業していると、判断の重い物もその場で決めようとしがちです。しかし写真や手紙、記念の品は、あとから家族の誰かが探すことがあり、一度手放すと戻せません。居室では「保留」の箱にまとめて持ち帰り、日を改めて確認する方が結果的に早く片が付きます。量が多い場合も、まとめて一か所に集めておけば、退去そのものは予定どおり進められます。残す基準の決め方は、関連記事の写真・アルバムの整理とデジタル化で扱っています。",
  },
  {
    title: "退去日の直前になってから、搬出の手段を探し始める",
    body: "家具や家電を含む荷物がある場合、車一台で運び切れないことは珍しくありません。退去日の数日前に業者を探し始めると、希望する日に手配できないことがあります。日程が決まった時点で、運び出す量のおおよその見当を付け、必要なら早めに見積もりを取っておきます。混み合う時期は特に手配が取りにくくなるため、日程の余裕は早い段階でつくっておく方が安全です。期限から逆算して段取りを組む考え方は、関連記事の退去前の片付けの段取りでまとめています。",
  },
];

const judgeSigns = [
  "家具・家電を含む荷物があり、家族の車では運び切れない",
  "退去日までの日数が短く、家族がそろって作業できる日がほとんどない",
  "遠方に住んでいて、居室に通って作業する時間が取れない",
  "手放す物の量が多く、自治体の収集では退去日までに間に合わない",
  "居室の片付けと並行して、実家や自宅の家財整理も進める必要がある",
];

const faqs = [
  {
    q: "施設の居室の片付けは、いつから始めればよいですか？",
    a: "退去日が決まった時点で、逆算して計画を立て始めるのが基本です。実際に居室で作業する日は一日か二日で足りることが多いのですが、施設への確認、返却が必要な物の手配、運び出しの手段の決定には日数がかかります。日程が決まったらまず施設の担当者に確認事項をまとめて聞き、返却と搬出の手配を先に進めてください。家族がそろえる日が限られている場合は、その日を「運び出す日」と決め、それまでに電話やメールで済ませられることを終わらせておくと間に合います。",
  },
  {
    q: "居室にある物のうち、どれが施設の物か分からないときはどうすればよいですか？",
    a: "自分で判断せず、施設の担当者に確認してください。ベッド、収納家具、カーテン、家電などは、施設が備え付けている場合と持ち込んだ場合の両方があり、見た目では区別が付きません。福祉用具の貸与を受けている場合は、担当のケアマネジャーや貸与している業者が返却の窓口を把握しています。確認が取れるまでは動かさず、印を付けて居室に残しておくのが安全です。区分がはっきりしてから搬出の計画を立てると、当日の作業がとどこおりません。",
  },
  {
    q: "居室から出た家財を、そのまま処分してもらうことはできますか？",
    a: "不用品回収に対応する業者の中には、居室からの搬出と処分をまとめて引き受けているところがあります。依頼する場合は、施設に確認した作業できる時間帯、使える出入口やエレベーター、駐車できる場所の条件をそのまま伝えて見積もりを取ってください。条件が変わると作業の手間が変わり、金額の前提も変わります。料金は物量・作業内容・地域・業者により異なりますので、同じ条件で複数社から見積もりを取り、総額と作業範囲を書面で確認してから決めてください。",
  },
  {
    q: "本人が亡くなったあとに居室を引き払う場合、進め方は変わりますか？",
    a: "居室を空にして引き渡すという流れは同じですが、持ち物の扱いに関係する人の範囲が広がります。形見として残す物、家族で分ける物、手放す物の判断は、相続に関わる人の間で合意を取りながら進めるのが基本です。通帳・証書・印鑑などの書類は、手続きで必要になるため、処分せずにまとめて保管してください。進め方の全体像は関連記事の遺品整理の進め方、形見分けの考え方は遺品整理と形見分けの進め方で扱っています。判断に迷う論点がある場合は、専門家への相談も検討してください。",
  },
];

const related = [
  { href: "/shisetsu-nyukyomae-kazai-seiri/", label: "施設入居前の家財整理", desc: "持ち込む物の選び方と残す家財の段取り" },
  { href: "/kaigo-youhin-shobun/", label: "介護用品・福祉用具の整理", desc: "借りた物の返却と購入した物の手放し方" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/ihin-katamiwake-susumekata/", label: "遺品整理と形見分けの進め方", desc: "時期・順番・渡し方の考え方" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限までに片付け切る逆算の方法" },
  { href: "/kichouhin-genkin-hakken/", label: "貴重品や現金が出てきたら", desc: "保管・記録・相談先の考え方" },
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
    { "@type": "ListItem", position: 2, name: "施設の居室を引き払うときの整理" },
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
    { href: "#kiso", label: "1｜施設の居室の片付けが難しくなる3つの事情" },
    { href: "#merit", label: "2｜作業前に決めておく3つの事項" },
    { href: "#houshin", label: "3｜「退去日から逆算」「区分を先に確認」が基本" },
    { href: "#steps", label: "4｜居室を引き払う5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への相談を検討すべき状況" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "施設の居室を引き払うときの整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          施設の居室を引き払うときの整理｜持ち込んだ家財の仕分けと退去までの段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          住み替え、体調の変化、看取りの後などに高齢者施設や療養型の住まいの居室を引き払う際は、持ち込んだ家具や衣類、日用品、思い出の品を、限られた日数の中で仕分けて運び出す必要があります。部屋の広さは家一軒に比べれば小さくても、施設の備品と持ち込んだ物が混ざっていたり、返却が必要な物があったり、家族がそろえる日が限られていたりと、家の片付けとは異なる難しさがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、退去が決まってからまず確認すること、居室の物を三つの区分に分ける考え方、退去日から逆算した作業の順番、持ち込んだ物を四つに仕分ける手順、貴重品や書類の扱い、運び出しの手配までを順に解説します。入居する前に自宅の家財を整理する段取りは別の記事で扱っており、本記事は「居室を引き払う側」に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>退去日を起点に、確認・手配・運び出しの順で逆算して日程を割り付ける</li>
          <li>居室の物を「持ち込んだ物」「借りている物」「施設の物」に分け、区分を担当者と確認する</li>
          <li>持ち込んだ物は「次の住まいへ」「家族が引き取る」「手放す」「保留」の四つに分ける</li>
          <li>通帳・証書・印鑑・写真・手紙は運び出しの前に抜き出し、家族で保管の担当を決める</li>
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

      <H2 id="kiso" num="1">施設の居室の片付けが難しくなる3つの事情</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        物の量は多くないのに、家の片付けより手こずることがあります。その理由を先に押さえておきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">作業前に決めておく3つの事項</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        退去日と取り決め、物の区分、家族の担当の三点を先に確認しておくと、当日の判断を円滑に進められます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「退去日から逆算」「区分を先に確認」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        居室の引き払いは、期限のある片付けです。退去日という動かせない終点があるため、「片付いたら運び出す」ではなく「運び出す日を先に決め、そこから必要な作業をさかのぼる」という組み立てになります。そのうえで、居室の物がどの区分に属するかを担当者と確認しておけば、当日は迷わずに手を動かせます。この二つを押さえておくだけで、限られた日数でも予定どおりに終えられます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        期限のある片付けという点では、賃貸住宅の退去と共通する部分が多くあります。逆算して段取りを組む考え方は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けの段取り</Link>、短い日数で終えるための割り付けは<Link href="/tanshin-funin-taikyo-katazuke/" className="text-primary underline underline-offset-2">単身赴任先の退去片付け</Link>が参考になります。共用部を通って家具を運び出す場面の注意点は<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの不用品搬出の段取り</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        居室の引き払いは、多くの場合、自宅や実家の片付けと同時に進むことになります。転居先へ移る場合は次の住まいに入る量から逆算し、自宅が空き家になる場合はその家の扱いも並行して考える必要があります。実家の片付けの段取りは<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、施設に入るときに自宅側で行う整理は<Link href="/shisetsu-nyukyomae-kazai-seiri/" className="text-primary underline underline-offset-2">施設入居前の家財整理</Link>、住む人がいなくなった家の管理は<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家の片付けの進め方</Link>でまとめています。
      </p>

      <H2 id="steps" num="4">居室を引き払う5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「逆算して書き出す→写真を撮って区分を確認する→四つに分ける→貴重品を抜く→運び出して引き渡す」の順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">居室の取り決めは施設ごとに、ごみの出し方は自治体ごとに異なります</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          退去日、立ち会いの要否、鍵や入退館の手続き、業者を入れる場合の事前連絡や作業できる時間帯、使える出入口やエレベーター、駐車できる場所の扱いは、施設ごとに取り決めが異なります。必ず入居している施設の担当者にご確認ください。また、居室から出た家財や日用品の分別区分、粗大ごみの申し込み方法や対象品目は自治体により異なりますので、お住まいの市区町村の公式案内でご確認ください。福祉用具の貸与を受けている場合の返却の手順は、担当のケアマネジャーまたは貸与している業者にご確認ください。本記事は一般的な進め方の整理にとどめており、特定の施設や地域の手続きを示すものではありません。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放す物の量が多い場合は、品目と数を書き出しておくと、見積もりを取るときにも家族で分担するときにも話が早く進みます。書き出し方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>、自治体の収集と業者のどちらに出すかの判断は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体回収と業者回収の使い分け</Link>、衣類がまとまって出る場合の扱いは<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理の進め方</Link>、状態のよい物を買取に回す方法は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>で扱っています。
      </p>

      <H2 id="ng" num="5">避けるべき4つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者への相談を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        居室の物は自分たちで運べる量に収まることもありますが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合は、施設に確認した作業できる時間帯や出入口の条件をそのまま伝え、同じ条件で複数社から見積もりを取ります。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積もり書で見るべき点は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・業者により異なりますので、総額と作業範囲を書面で確認してから決めてください。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
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
        本記事は一般的な知識の提供を目的としたものです。退去日・立ち会い・鍵・搬出の手続きなど居室の取り決めは施設により異なりますので、必ず入居している施設の担当者にご確認ください。福祉用具の貸与・返却の手順は、担当のケアマネジャーまたは貸与している業者にご確認ください。ごみの分別区分・粗大ごみの申し込み方法・対象品目は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。相続・契約・費用の精算など法律や契約に関わる論点については、弁護士・司法書士など該当分野の専門家にご相談ください。業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・業者により異なりますので、見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
