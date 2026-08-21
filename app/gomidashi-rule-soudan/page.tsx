import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/gomidashi-rule-soudan/";
const TITLE = "ゴミ出しのルールが守れないときの相談先｜溜め込む前にできること";
const DESC =
  "分別が分からない、収集日に間に合わない、重くて運べない。ゴミを出せない理由は人によって違い、相談すべき窓口も変わります。理由の切り分け方、自治体の廃棄物担当・福祉担当・地域包括支援センターといった相談先の役割、集合住宅で管理会社に確認すべきこと、そして溜め込む前に立て直す手順を整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「出せない」の理由は一つではない",
    body: "ゴミを出せない状態が続くとき、原因はひとまとめにできません。分別の区分が分からず判断が止まっている場合、収集日の朝に間に合わない生活リズムの場合、階段や距離の問題で集積所まで運べない場合、心身の不調で行動を起こす余力がない場合、そもそも量が多すぎて数回の収集では追いつかない場合。どれも「ゴミが出せていない」という同じ結果に見えますが、必要な対応はまったく違います。まずは自分や家族がどの理由に当てはまるのかを言葉にしてみることが、相談先を選ぶ出発点になります。",
  },
  {
    title: "相談先は自治体の中でも部署が分かれている",
    body: "市区町村の窓口といっても、担当は一つではありません。分別の区分や収集日、出し方の質問は、清掃事務所や廃棄物や資源物に関する担当部署が受け付けるのが一般的です。一方、体力や健康の事情で日常の家事が難しくなっている場合は、福祉の担当部署や地域包括支援センターが相談の入口になります。集合住宅なら、集積所の使い方や置き場のルールは管理会社や管理組合の管轄です。同じ「ゴミが出せない」でも、どこに話すかで得られる助けが変わります。",
  },
  {
    title: "溜め込みは早い段階ほど立て直しやすい",
    body: "出せなかったゴミが数日分であれば、次の収集日にまとめて出すだけで元に戻ります。しかしそれが数週間、数か月と積み重なると、袋の数が増え、においや虫が発生し、置き場が居住スペースを圧迫します。そうなると片付けそのものに体力と時間が必要になり、ますます手を付けにくくなります。ゴミが溜まることは、本人の性格や努力の問題として語られがちですが、実際には生活の環境や体調、仕事の時間帯といった条件が重なって起きます。責めるより先に、どこで詰まっているかを見つけて外すほうが早く解決します。",
  },
];

const merits = [
  {
    title: "整理1：分別が分からないなら、判断を自治体に任せる",
    body: "分別の区分は自治体によって異なり、同じ品物でも扱いが違うことがあります。プラスチック製の容器と製品、資源として集める紙とそうでない紙、小型家電の扱いなどは、迷いやすい代表例です。手元で悩み続けると、判断できない物が部屋に残り続けます。自治体の公式サイトには品目別の一覧や検索の仕組みが用意されていることが多く、そこで分からなければ廃棄物の担当窓口に問い合わせれば教えてもらえます。「聞いてよいことなのか」とためらう必要はありません。分別の相談は窓口の日常的な業務です。",
  },
  {
    title: "整理2：時間や体力の問題なら、支援の枠組みを確認する",
    body: "収集は朝の早い時間に行われることが多く、夜勤や早朝勤務、育児や介護の事情がある人にとっては現実的に間に合わないことがあります。また、高齢や障害、けがなどで集積所まで運べない場合もあります。自治体によっては、こうした事情のある世帯を対象に、玄関先などから直接ごみを収集する仕組みが設けられていることがあります。名称や対象となる条件、申し込みの方法は自治体によって異なりますので、お住まいの市区町村の窓口でご確認ください。制度がない場合でも、相談することで別の支援につながることがあります。",
  },
  {
    title: "整理3：心身の不調があるなら、片付けより先に相談を",
    body: "気力が湧かない、部屋に入りたくない、何から手を付ければよいか分からない。そうした状態が続いているときは、ゴミ出しだけを切り出して解決するのは難しいことがあります。地域包括支援センターや自治体の福祉の担当窓口は、生活全般の困りごとを聞いたうえで、必要な支援やサービスにつなぐ役割を担っています。片付けの相談として持ち込んでも構いませんし、家族が代わりに相談することもできます。無理に一人で立て直そうとして体調を崩すより、早い段階で外の力を借りるほうが結果的に負担が小さくなります。",
  },
];

const steps = [
  {
    title: "出せていない物を一か所に集めて量を把握する",
    body: "まずは、部屋の中に散らばっている「出せていないゴミ」を一か所に寄せます。この時点では分別しなくて構いません。目的は、どれくらいの量があるのかを自分の目で確かめることです。袋がいくつ分あるのか、その中に生ゴミのように早く出すべき物が含まれているのか、粗大ごみに当たる大きな物が混ざっているのか。量が分かると、次の収集日で片が付くのか、それとも別の方法が必要なのかを判断できます。作業は換気をしながら、手袋を着けて行ってください。においや虫が気になる場合は、口を縛った袋を二重にして玄関近くにまとめます。",
  },
  {
    title: "自治体のルールを確認し、迷う品目だけ書き出す",
    body: "次に、お住まいの市区町村の公式サイトで、分別の区分と収集日を確認します。多くの自治体では、品目別の一覧や分別を調べる仕組みが公開されています。ここで大切なのは、すべてを完璧に覚えようとしないことです。手元にある物を照らし合わせ、分からなかった品目だけをメモに書き出してください。数は思ったより少ないはずです。書き出した品目は、まとめて廃棄物の担当窓口に問い合わせれば一度で解決します。判断できない物を部屋に残さないことが、溜め込みを止めるうえで効きます。",
  },
  {
    title: "出せない理由を切り分け、該当する窓口に相談する",
    body: "分別が分かっても出せない場合、原因は別のところにあります。収集日の時間に間に合わないのか、集積所まで運べないのか、体調や気力の問題なのか、量が多すぎるのか。理由によって相談先が変わります。分別・収集日・出し方は自治体の廃棄物の担当窓口へ、体調や生活の困りごとは福祉の担当窓口や地域包括支援センターへ、集合住宅の集積所や置き場のルールは管理会社や管理組合へ。複数に当てはまる場合は、まず話しやすいところから相談し、必要に応じて別の窓口を紹介してもらう形で構いません。",
  },
  {
    title: "直近の収集日に出せる分だけを、確実に出す",
    body: "溜まったゴミを一度に片付けようとすると、量が多すぎて挫折しやすくなります。まずは直近の収集日に出せる分だけを確実に出してください。可燃ごみの日には可燃ごみだけ、資源の日には資源だけ。一回で全部出そうとして集積所に大量に置くと、近隣とのトラブルや回収されずに残る原因になります。自治体によっては一度に出せる量の目安が示されていることもありますので、多い場合は事前に窓口へ相談すると安心です。数回に分けて減らしていく形でも、確実に前へ進みます。少しでも量が減ると、部屋の見え方が変わります。",
  },
  {
    title: "同じ状態に戻らない仕組みを一つだけ作る",
    body: "片付いた後に大切なのは、仕組みを増やしすぎないことです。続かない原因は、たいてい手順が多いことにあります。収集日の前夜に通知が届くようスマートフォンのリマインダーを設定する、玄関のそばに分別用の袋を常設する、ゴミ袋を切らさないようまとめて買っておく。この中から自分に合いそうな一つだけを選び、しばらく続けてみてください。うまくいけば次を足せばよく、合わなければ別の方法に変えれば構いません。片付いた状態を保つ考え方は、関連記事でも詳しく扱っています。",
  },
];

const ngActions = [
  {
    title: "収集日でない日や、住んでいない地区の集積所に出す",
    body: "出せていないゴミを早く手放したい気持ちから、収集日以外に集積所へ置いたり、勤務先の近くや別の地区の集積所に持ち込んだりするのは避けてください。回収されずに残って近隣の迷惑になるほか、地域のルールに反する行為として扱われることがあります。カラスや猫に荒らされて散乱する原因にもなります。出す日が分からない、次の収集日まで置いておく場所がないという場合は、自治体の窓口に事情を伝えて相談してください。事情を説明すれば、出し方や時期について現実的な案内を受けられることがあります。",
  },
  {
    title: "分別が分からない物を、とりあえず混ぜて出す",
    body: "判断に迷った品目を可燃ごみの袋に混ぜてしまうと、収集されずに残されることがあります。とくに電池や充電式の機器、スプレー缶、ライターなどは、収集車や処理施設での発火につながるおそれがあり、混入は危険です。分からないときは無理に判断せず、その品目だけを別にまとめて保管し、自治体の窓口に確認してから出してください。分別が難しい品目の調べ方は関連記事でも扱っています。一つひとつ確認するのは面倒に感じますが、結果としてやり直しが減り、早く片付きます。",
  },
  {
    title: "「そのうちやる」と決めて、置き場所を広げていく",
    body: "出せなかったゴミを部屋の隅に寄せ、そこが埋まったら別の場所へ、というやり方を続けると、居住スペースが少しずつ削られていきます。においや虫が発生してからでは、片付けの負担が何倍にもなります。置き場所を広げるのではなく、置き場所を一か所に固定し、そこから溢れそうになったら相談すると決めておくと、判断の基準が明確になります。溜め込みが進んだ状態のリスクについては関連記事で扱っていますが、早い段階で手を打てば、大がかりな作業をせずに戻せます。",
  },
  {
    title: "訪問してきた業者に、その場でまとめて渡してしまう",
    body: "困っているときに「今なら安く回収します」と訪問や電話で持ちかけられると、判断が鈍りがちです。しかし、廃棄物の収集運搬には許可が必要であり、確認できない相手に渡すと、後から高額な請求を受けたり、不適正に処分されて依頼した側が説明を求められたりすることがあります。急かされてその場で決めないこと、書面の見積もりを受け取ること、事業者名と所在地、許可の有無を確認することが基本です。不安を感じたときや、契約をめぐって困ったときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
];

const judgeSigns = [
  "袋の数が多く、通常の収集で出し切るのに何か月もかかりそう",
  "においや虫が発生していて、自分では手を付けられない",
  "粗大ごみに当たる大きな物が複数あり、運び出せない",
  "体調や年齢の事情で、作業そのものが難しい",
  "退去や来客など、期限が決まっていて間に合わない",
];

const faqs = [
  {
    q: "分別が分からない品物は、どこに聞けばよいですか？",
    a: "お住まいの市区町村の公式サイトに、品目別の分別一覧や検索の仕組みが用意されていることが多いので、まずはそちらをご確認ください。それでも分からない場合は、清掃事務所や廃棄物の担当窓口に問い合わせれば案内してもらえます。分別の区分は自治体によって異なるため、他の地域の情報や一般的な説明をそのまま当てはめないことが大切です。迷う品目は無理に判断せず、別にまとめて保管し、確認してから出してください。",
  },
  {
    q: "収集の時間に間に合わない生活なのですが、方法はありますか？",
    a: "自治体によっては、事情のある世帯を対象に玄関先などから直接収集する仕組みが設けられていることがあります。名称や対象の条件、申し込み方法は自治体によって異なりますので、市区町村の窓口でご確認ください。制度に当てはまらない場合でも、集合住宅であれば管理会社や管理組合に集積所の利用時間について相談できることがあります。まずは事情を伝えて、使える選択肢があるかを確認してみてください。",
  },
  {
    q: "家族がゴミを溜め込んでいます。本人以外でも相談できますか？",
    a: "できます。地域包括支援センターや自治体の福祉の担当窓口は、家族からの相談も受け付けています。ただし、本人の同意がないまま部屋の物を処分すると関係が悪化し、その後の協力が得られなくなることがあります。まずは相談先に状況を伝え、どのような進め方が適しているかを一緒に考えるところから始めてください。本人への声のかけ方については、関連記事でも扱っています。",
  },
  {
    q: "溜まった量が多すぎるとき、業者に頼めますか？",
    a: "片付け・不用品回収の業者に依頼することは可能です。その場合、廃棄物の収集運搬に必要な許可を確認できる事業者を選び、作業前の見積もりで総額と作業範囲を書面で確定させてください。料金は物量や間取り、作業内容、地域によって異なるため、複数社を比べるのが確実です。自治体の収集で出せる分は自分で出し、量の多い物や運べない物だけを依頼するという分け方もできます。",
  },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミ", desc: "判断に迷う品目の調べ方と扱い" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "自治体収集の一般的な手順" },
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷化の原因と段階", desc: "溜め込みが進む仕組みを知る" },
  { href: "/katazukerarenai-shinri/", label: "片付けられない心理", desc: "続かない要因と現実的な対処" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体と業者の使い分け", desc: "どちらに頼むかの判断基準" },
  { href: "/kinjo-gomiyashiki-soudan/", label: "近所のゴミ屋敷の相談先", desc: "近隣で困ったときの窓口" },
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
    { "@type": "ListItem", position: 2, name: "ゴミ出しのルールが守れないときの相談先" },
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
    { href: "#kiso", label: "1｜ゴミが出せないときに押さえること" },
    { href: "#merit", label: "2｜理由別に見る3つの整理" },
    { href: "#houshin", label: "3｜相談先の選び方と伝え方" },
    { href: "#steps", label: "4｜溜め込みを立て直す5ステップ" },
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

      <Breadcrumb items={[{ label: "ゴミ出しのルールが守れないときの相談先" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ゴミ出しのルールが守れないときの相談先｜溜め込む前にできること
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          ゴミが出せない状態が続くと、「自分はだらしないのではないか」と考えてしまう方が少なくありません。しかし実際には、分別の区分が分からない、収集の時間に間に合わない、集積所まで運べない、体調が思わしくないといった、具体的で解決できる理由が隠れていることがほとんどです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、出せない理由の切り分け方、自治体の廃棄物の担当窓口・福祉の担当窓口・地域包括支援センターといった相談先の役割の違い、集合住宅で管理会社に確認できること、そして溜まった状態から立て直す手順を順に整理します。分別の区分や支援の仕組みは自治体によって異なりますので、具体的な内容はお住まいの市区町村の窓口でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「出せない理由」を分別・時間・運搬・体調・量の5つで切り分けると、相談先が決まる</li>
          <li>分別と収集日は自治体の廃棄物担当、生活の困りごとは福祉担当や地域包括支援センターへ</li>
          <li>迷う品目だけを書き出して一度に問い合わせると、判断できない物が部屋に残らない</li>
          <li>訪問回収に急かされてその場で決めない。不安なときは消費者ホットライン188に相談できる</li>
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

      <H2 id="kiso" num="1">ゴミが出せないときに押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ゴミ出しが滞る状況は、意志の弱さではなく条件の問題として見たほうが解決に近づきます。まずは前提となる三つの考え方を確認します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">理由別に見る3つの整理</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        分別が分からない、時間や体力が足りない、心身の不調がある。それぞれで取るべき行動が異なります。当てはまるものから読んでください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">相談先の選び方と伝え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相談先を選ぶときは、「何に困っているか」を一文にしてから考えると迷いません。分別の区分や収集日、出し方に関することであれば、市区町村の清掃事務所や廃棄物の担当窓口が受け付けます。粗大ごみに当たる大きな物の申し込みも同じ系統です。一方、体調や加齢、障害などによって日常の家事が難しくなっている場合は、福祉の担当窓口や地域包括支援センターが入口になります。これらの窓口は、生活全般の困りごとを聞いたうえで、利用できる支援やサービスにつなぐ役割を担っています。片付けの話として持ち込んでも問題ありません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        集合住宅にお住まいであれば、集積所の場所や利用できる時間、置いてよい物の範囲は管理会社や管理組合が定めていることがあります。粗大ごみの一時的な保管の可否や、共用部に置かないよう求められる範囲なども同様です。ルールが分からないまま自己判断で置くとトラブルになりやすいので、掲示や規約を確認し、不明な点は管理会社に問い合わせてください。賃貸で退去が絡む場合は、片付けと原状回復の線引きについて<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">賃貸の原状回復と片付けの線引き</Link>もあわせてご覧ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        窓口に連絡するときは、完璧に説明しようとしなくて構いません。「ゴミを出せない状態が続いていて、どこに相談すればよいか分からない」と伝えるだけで、担当につないでもらえます。伝えられると話が早いのは、いつ頃から出せていないか、おおよその量、出せない理由として思い当たること、住まいの形態（戸建てか集合住宅か）、同居している人がいるかどうかの五点です。メモにしてから電話すると、緊張していても抜けが出ません。なお、自治体によって支援の仕組みの有無や名称、対象となる条件は異なりますので、内容は必ずお住まいの市区町村でご確認ください。
      </p>

      <H2 id="steps" num="4">溜め込みを立て直す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        量を把握する→ルールを確認する→相談する→出せる分を出す→仕組みを一つ作る。この順番で進めると、途中で止まりにくくなります。
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
        <h3 className="font-bold text-text-primary mb-2">分別の区分と支援の仕組みは、必ず自治体の窓口で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          ごみの分別区分、収集日、一度に出せる量の目安、粗大ごみの受付方法、そして事情のある世帯を対象とした収集の仕組みの有無や名称・条件は、自治体によって異なります。本記事では枠組みの一般的な説明にとどめており、個別の内容についてお答えすることはできません。お住まいの市区町村の公式サイトや窓口で最新の案内をご確認ください。また、訪問や電話での回収の勧誘をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        量が多い場合は、自治体の収集で出せる物と、そうでない物を分けて考えると進めやすくなります。日常のごみは収集日に少しずつ出し、大きな家具や家電は別のルートを使う、という形です。粗大ごみの申し込み手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>、冷蔵庫やテレビなど家電リサイクル法の対象品目の扱いは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分</Link>で扱っています。判断に迷う品目の調べ方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>が参考になります。自治体と業者のどちらを使うかで迷うときは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>をご覧ください。
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
        溜まった量が一定を超えると、通常の収集だけで戻すのは難しくなります。次のような状況では、片付け・不用品回収の業者に相談することを検討してください。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼する際は、廃棄物の収集運搬に必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を書面にしてもらってください。料金は物量・間取り・作業内容・地域によって異なるため、複数社を比較するのが確実です。訪問や電話で持ちかけられた回収に急いで応じないこと、その場で契約しないことも大切です。依頼先の候補としては<Link href="/review/gomiyashiki-partners/" className="text-primary underline underline-offset-2">ゴミ屋敷専門パートナーズ</Link>や<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">お部屋片付け日本一</Link>の特徴を比較できます。回収をめぐる注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・収集日・一度に出せる量の目安・粗大ごみの受付方法、および事情のある世帯を対象とした収集の仕組みの有無や名称・条件は、自治体により異なりますので、必ずお住まいの市区町村の公式サイトや窓口でご確認ください。健康や生活に関する困りごとについては、自治体の福祉の担当窓口や地域包括支援センターへご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
