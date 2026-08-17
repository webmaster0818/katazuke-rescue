import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/genjou-kaifuku-katazuke-senbiki/";
const TITLE = "賃貸の原状回復と片付けの線引き｜退去前に自分でやること・やらないこと";
const DESC =
  "賃貸の退去では「どこまで自分で片付け・掃除をすべきか」「原状回復として何を求められるのか」が分かりにくいものです。原状回復という考え方の一般的な枠組み、借主が必ずやるべき残置物ゼロと日常清掃、自己判断での修繕がすすめられない理由、契約書の確認ポイント、退去立ち会いまでの準備、納得できないときの相談先までを、法的な断定を避けた一般論として解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "原状回復とは「借りたときの状態に完全に戻すこと」ではないとされる",
    body: "原状回復と聞くと「入居時と同じ新品同様の状態に戻さなければならない」と思いがちですが、一般に、普通に暮らしていて生じる程度の傷みや汚れ（経年変化・通常損耗と呼ばれます）まで借主がすべて負担するものではない、という考え方が広く知られています。国土交通省が「原状回復をめぐるトラブルとガイドライン」という指針を公表しており、貸主と借主の負担の考え方の目安として参照されています。ただし、実際の負担範囲は個々の賃貸借契約の内容や物件の状況によって異なるため、この記事では一般的な枠組みの紹介にとどめます。自分のケースの判断は契約書の確認と、貸主・管理会社との協議が前提です。",
  },
  {
    title: "「片付け」は線引き以前の大前提——残置物ゼロは借主の仕事",
    body: "原状回復の負担範囲には解釈の幅がありますが、部屋の中の私物をすべて運び出す「片付け」は、議論の余地なく借主がやるべきことです。家具・家電・日用品はもちろん、自分で取り付けた照明やカーテン、ベランダの物、収納の奥の荷物まで、退去日に残置物ゼロが基本です。私物が残っていると、撤去や処分の費用を請求される可能性があるうえ、立ち会いや敷金精算の話も進みません。「原状回復でどこまで負担するか」を考える前に、まず片付けを完了させる。これが退去準備の第一の線引きです。",
  },
  {
    title: "「日常の清掃」と「専門的な修繕」は分けて考える",
    body: "退去前の作業は、大きく3層に分けると整理しやすくなります。第1層は私物の撤去（必ず自分でやる）、第2層は日常的な範囲の清掃（掃除機がけ・拭き掃除・水回りの清掃など、常識的な範囲で自分でやる）、第3層は壁紙の張り替えや設備の修繕といった専門工事（自分では手を出さない）です。トラブルになりやすいのは、この3層を混同したときです。清掃を全くせずに退去して印象を悪くするケースも、逆に自己判断で壁の穴を埋めるなど修繕に踏み込んで状態を悪化させるケースも、いずれも層の取り違えから起きています。",
  },
];

const merits = [
  {
    title: "考え方1：契約書と入居時の記録が判断の出発点",
    body: "自分がどこまでやるべきかを知る最も確実な方法は、一般論の記事を読むことではなく、自分の賃貸借契約書と重要事項説明書を読み直すことです。清掃やクリーニングに関する特約の有無、退去時の手続き、連絡の期限などが書かれています。あわせて、入居時に撮った写真や物件状況のチェックリストが残っていれば、もともとあった傷・汚れと自分が付けたものを区別する材料になります。契約内容で不明な点は、退去が近づく前の早い段階で管理会社に確認しておくと落ち着いて準備できます。",
  },
  {
    title: "考え方2：清掃は「日常の掃除の丁寧版」までで十分と考える",
    body: "退去前の掃除は、どこまでやるか迷いがちですが、目安は「日常的な掃除を丁寧にやった状態」です。床の掃除機がけと拭き掃除、キッチンの油汚れや水回りの水あかを落とす、ほこりを取る——この範囲は自分でやる価値があります。一方、専門機材が必要なエアコン内部の洗浄や、プロ仕様のクリーニングまで自費で手配する必要があるかは、契約の特約の有無によって変わるため、自己判断で先回りして高額な作業を発注するのは得策ではありません。掃除の具体的な手順はキッチン・コンロ周りの掃除や浴室・水回りの清掃の記事が参考になります。",
  },
  {
    title: "考え方3：傷・汚れは隠すより「記録して伝える」",
    body: "自分が付けてしまった傷や汚れを、退去直前に自己流で補修して隠したくなる気持ちは分かりますが、市販の補修材での修繕は仕上がりの差が出やすく、かえって手直しの範囲を広げてしまう場合があります。おすすめは、傷・汚れの場所を写真で記録し、立ち会いの際に自分から伝えられるよう整理しておくことです。どちらが負担するかの判断は貸主側との確認事項ですが、状況を正直に共有し、記録を持って話せる状態にしておくことが、精算の話し合いを落ち着いて進める土台になります。",
  },
];

const steps = [
  {
    title: "退去を決めたら：契約書を確認し、解約通知の期限を守る",
    body: "退去準備の最初の一歩は、片付けではなく契約書の確認です。解約通知をいつまでに出すか（1か月前・2か月前など契約により異なります）、通知の方法、退去立ち会いの流れ、清掃・クリーニングに関する特約の有無を確認します。通知が遅れるとその分の賃料が発生し得るため、期限の確認は最優先です。このタイミングで、入居時の写真や物件状況の記録が残っていないかも探しておきましょう。記録があるかないかで、立ち会い時の話しやすさが変わります。",
  },
  {
    title: "退去1か月〜2週間前：私物の全量把握と処分の手配",
    body: "次に、部屋の私物を「持っていく物」と「処分する物」に分け、処分する物の手配を始めます。自治体の粗大ごみ収集は日数がかかることがあるため、大型品は早めの申し込みが安全です。冷蔵庫・洗濯機・エアコンなどのリサイクル家電は処分ルートが別になるので、家電リサイクル法対象品の処分の記事を参考にしてください。物量が多く期限に間に合わない場合は不用品回収業者への依頼も選択肢です。退去期限からの逆算は退去片付けの進め方で詳しく解説しています。",
  },
  {
    title: "退去1週間前：自分で取り付けた物を外し、設備は残す",
    body: "自分で設置した照明・カーテン・突っ張り棚・ウォシュレットなどは取り外して持ち出すか処分し、もともと物件に付いていた設備はそのまま残します。取り外しの際に迷いやすいのが、入居時からあったか自分で付けたか記憶が曖昧な物です。誤って設備を処分すると弁償の話になりかねないため、曖昧な物は管理会社に確認してから扱いを決めましょう。エアコンを自分で設置した場合の扱い（残置の相談・撤去）は、エアコンの取り外しと処分の記事も参考になります。",
  },
  {
    title: "退去3日前〜前日：日常清掃の丁寧版で部屋を整える",
    body: "私物が減った部屋を、日常の掃除の丁寧版で仕上げます。床全体の掃除機がけと拭き掃除、キッチン・浴室・トイレ・洗面所の清掃、窓とサッシの汚れ落とし、ベランダのごみ拾いまでやれば十分です。掃除の目的は、部屋を大切に使ってきたことが伝わる状態で返すことであり、専門クリーニング級の仕上がりを目指すことではありません。冷蔵庫の霜取りや洗濯機の水抜きなど、搬出前の家電の準備は冷蔵庫・洗濯機の処分前準備を参考に前日までに済ませておきましょう。",
  },
  {
    title: "退去当日：立ち会いで状態を一緒に確認し、書面の内容を確認してから対応する",
    body: "立ち会いでは、部屋の状態を貸主側の担当者と一緒に確認します。事前に整理した傷・汚れの記録があれば、自分から共有しましょう。その場で修繕や精算の話が出た場合、内容に不明点があれば「持ち帰って確認します」と伝えて構いません。内訳の分からない請求にその場でサインする必要はなく、書面で内容を確認してから対応するのが基本です。精算内容にどうしても納得できない場合は、消費者ホットライン188に電話すると身近な消費生活相談窓口を案内してもらえます。",
  },
];

const ngActions = [
  {
    title: "壁の穴・フローリングの傷を自己流のDIYで補修する",
    body: "市販の補修グッズで壁紙の破れやフローリングの傷を埋める方法が紹介されていますが、退去前の自己流補修はおすすめできません。色や質感が合わない補修跡は目立ちやすく、部分補修で済んだはずの箇所が広範囲の張り替えになるなど、かえって手直しの範囲を広げるおそれがあります。また、補修の事実を伝えずに退去することは信頼関係の面でも問題です。傷は隠すのではなく記録して伝え、扱いは貸主側と確認する——これが結果的に最も安全な対応です。",
  },
  {
    title: "「敷金があるから」と私物やゴミを残して退去する",
    body: "「処分費は敷金から引いてもらえばいい」という考えで私物を残すのは避けてください。残置物の撤去には手間と費用がかかり、想定より高くつく可能性があるうえ、貸主側にとっても迷惑な行為です。ゴミや不用品は退去日までに自分の責任で処分するのが大前提です。期限までに処分し切れない場合は、即日対応の回収業者に依頼するなど、残さないための手段を先に検討しましょう。自治体回収と業者の使い分けは自治体と業者の使い分けの記事で解説しています。",
  },
  {
    title: "契約書を読まないまま、ネットの一般論だけで判断する",
    body: "原状回復に関する情報はインターネット上に多くありますが、一般論と自分の契約は別物です。契約には物件ごとの特約が定められていることがあり、一般的な解説がそのまま当てはまるとは限りません。「ネットにはこう書いてあった」という主張だけで話を進めると、認識の食い違いからトラブルになりやすくなります。まず自分の契約書を読み、不明点は管理会社に確認する。一般論は、確認すべきポイントを知るための地図として使うのが正しい距離感です。",
  },
  {
    title: "立ち会いで内容を確認しないまま、その場の流れで書類にサインする",
    body: "退去立ち会いの最後に精算関係の書類への署名を求められることがありますが、内容を理解しないままその場の流れでサインするのは避けましょう。金額や負担区分に不明点があれば説明を求め、必要なら持ち帰って検討してからでも遅くありません。誠実な貸主・管理会社であれば、確認の時間を取ることを問題視しないはずです。もし話し合いで解決が難しいと感じたら、消費者ホットライン188を通じて消費生活相談窓口に相談するという選択肢があることも覚えておいてください。",
  },
];

const judgeSigns = [
  "退去期限までに私物の処分が終わりそうにない",
  "大型家具・家電が多く、自力での搬出が難しい",
  "長期間の入居で物量が多く、仕分けから手が回らない",
  "遠方への転居で、退去日までに現地で作業できる日が限られている",
  "清掃してから返したいが、汚れがひどく日常清掃では手に負えない",
];

const faqs = [
  {
    q: "退去前にハウスクリーニングを自分で手配すべきですか？",
    a: "一律には言えません。清掃・クリーニングの扱いは契約の特約によって異なるため、まず契約書を確認し、不明であれば管理会社に「退去前にどこまで清掃すべきか」を直接確認するのが確実です。自己判断で先にプロのクリーニングを発注すると、費用のかけ方として無駄になる可能性もあります。自分でやる範囲の目安は、日常的な掃除を丁寧に行った状態までと考えるのが一般的です。",
  },
  {
    q: "画びょうの穴やポスターを貼った跡は片付けの際にどう扱えばよいですか？",
    a: "壁の穴や跡がどう扱われるかは、状態や契約内容によって異なるため、この記事では断定しません。一般的な考え方として、国土交通省のガイドラインでは通常の使用に伴う損耗と、それを超える損傷を区別する枠組みが示されています。自分でできる準備は、場所を写真で記録し、立ち会いで正直に共有できるようにしておくことです。自己流の補修で隠すことは、かえって状況を悪くするおそれがあるため避けましょう。",
  },
  {
    q: "退去日までに荷物の処分が間に合いません。どうすればよいですか？",
    a: "間に合わないと分かった時点で、対応の早い不用品回収業者への依頼に切り替えるのが現実的です。残置物を残して退去すると、撤去費用の請求やトラブルにつながるおそれがあります。業者に依頼する際は、許可や資格を確認し、作業前に見積もりで総額を確定させましょう。短期間で退去まで終える段取りは、単身赴任先の退去片付けの記事の1週間プランも参考になります。",
  },
  {
    q: "敷金の精算に納得できない場合はどこに相談できますか？",
    a: "まずは貸主・管理会社に内訳の説明を求め、書面で確認するのが第一歩です。それでも解決しない場合は、消費者ホットライン188に電話すると、お住まいの地域の消費生活相談窓口を案内してもらえます。契約書・入居時と退去時の写真・精算書類など、経緯の分かる資料を手元に揃えてから相談するとスムーズです。本記事は一般的な情報提供であり、個別の精算の妥当性を判断するものではありません。",
  },
];

const related = [
  { href: "/taikyo-katazuke/", label: "退去片付けの進め方", desc: "退去期限から逆算する段取りの基本" },
  { href: "/tanshin-funin-taikyo-katazuke/", label: "単身赴任先の退去片付け", desc: "1週間で終える逆算プラン" },
  { href: "/kitchen-konro-seisou/", label: "キッチン・コンロ周りの掃除", desc: "油汚れを自力で落とす手順" },
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水回りの徹底清掃", desc: "水あか・カビの落とし方" },
  { href: "/house-cleaning-chigai/", label: "ハウスクリーニングと片付け業者の違い", desc: "どちらに頼むべきかの判断" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "業者に頼む場合の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "賃貸の原状回復と片付けの線引き" },
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
    { href: "#kiso", label: "1｜原状回復と片付けの基本の考え方" },
    { href: "#merit", label: "2｜線引きに迷わないための3つの考え方" },
    { href: "#houshin", label: "3｜退去準備の全体方針" },
    { href: "#steps", label: "4｜退去までの準備5ステップ" },
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

      <Breadcrumb items={[{ label: "賃貸の原状回復と片付けの線引き" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          賃貸の原状回復と片付けの線引き｜退去前に自分でやること・やらないこと
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          賃貸の退去が決まると、「掃除はどこまでやればいいのか」「壁の傷は直してから返すべきなのか」「そもそも原状回復として何を求められるのか」と、片付けの範囲に迷う方は多いはずです。やらなさすぎも、やりすぎも、どちらもトラブルや無駄な出費のもとになります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、原状回復という考え方の一般的な枠組みを紹介したうえで、借主が必ずやるべき「残置物ゼロ」と「日常清掃」、手を出さないほうがよい「専門的な修繕」という3層の線引きと、退去当日までの準備の進め方を解説します。なお、実際の負担範囲は契約内容や物件の状況により異なるため、本記事は一般論であり、個別のケースの判断は契約書の確認と貸主・管理会社への相談を前提としてください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>私物の撤去（残置物ゼロ）と日常的な清掃は自分の仕事。専門的な修繕には手を出さない</li>
          <li>負担範囲の一般的な枠組みとして国土交通省のガイドラインが知られるが、実際は契約による</li>
          <li>判断の出発点は契約書と入居時の記録。不明点は早めに管理会社へ確認する</li>
          <li>傷・汚れは自己流で隠さず、記録して立ち会いで共有。納得できない精算は188へ相談も</li>
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

      <H2 id="kiso" num="1">原状回復と片付けの基本の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、退去前の作業を整理するための基本の枠組みを押さえましょう。ここが曖昧なままだと、やるべきことと不要なことの区別がつきません。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">線引きに迷わないための3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「どこまで自分でやるか」を判断するとき、軸になる3つの考え方を紹介します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">退去準備の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全体方針は、「自分の裁量でできること（片付け・日常清掃）は完璧に、判断が分かれること（修繕・負担区分）は記録と確認で備える」です。片付けと掃除は、やればやっただけ確実に結果につながる領域です。一方、傷や汚れの負担がどうなるかは自分だけでは決められない領域であり、ここで頑張るべきは補修ではなく、記録・共有・確認という準備です。この区別ができると、退去前の限られた時間を無駄なく使えます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        荷物の処分を含む退去全体の段取りは<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去片付けの進め方</Link>を、時間が限られている場合の逆算プランは<Link href="/tanshin-funin-taikyo-katazuke/" className="text-primary underline underline-offset-2">単身赴任先の退去片付け</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">退去までの準備5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、退去を決めてから当日までの準備を時系列で整理します。
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
        原状回復の判断とは別に、「退去日までに私物を出し切る」という片付けの部分は、間に合わなければ業者の力を借りるのが現実的です。次のような状況なら、早めに検討しましょう。
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
        不用品の回収・搬出は片付け業者、退去時の専門的な清掃はハウスクリーニング業者と、依頼先の性質が異なります。違いと選び方は<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングと片付け業者の違い</Link>で解説しています。どちらの場合も、作業前の見積もりで総額を確定させることと、不用品の処分を伴う場合は必要な許可を確認できる業者を選ぶことが基本です。
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
        本記事は一般的な知識の提供を目的としたものであり、法的助言ではありません。原状回復の負担範囲や敷金の精算は、個々の賃貸借契約の内容・物件の状況により異なります。具体的な判断は契約書をご確認のうえ、貸主・管理会社にご相談ください。解決が難しい場合は、消費者ホットライン188などの公的な相談窓口の利用をご検討ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
