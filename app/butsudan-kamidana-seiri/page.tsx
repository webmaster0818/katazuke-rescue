import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/butsudan-kamidana-seiri/";
const TITLE = "仏壇・神棚の整理と処分の進め方｜供養の考え方と後悔しない手順";
const DESC =
  "仏壇・神棚を整理・処分するときの一般的な流れを解説します。閉眼供養など宗教的な儀式の要否や作法は宗派・地域・家の考え方により異なるため、菩提寺や神社への相談を起点に、家族との合意づくり、中身の確認、本体の処分ルート（引き取り・自治体・業者）の選び方、位牌や遺影など残す物の扱いまで、後悔を残さない手順をまとめました。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "仏壇・神棚は「家具」ではなく、気持ちの区切りが必要な物",
    body: "仏壇や神棚は、サイズだけ見れば大型家具と同じですが、家族が長年手を合わせてきた対象であり、単なる不用品として扱うと本人や親族の心に引っかかりが残りがちです。処分の前に「閉眼供養」「魂抜き」などと呼ばれる儀式を行う家庭が多くありますが、その要否・呼び方・作法は宗派・地域・それぞれの家の考え方によって異なります。正解がひとつある話ではないため、まずは菩提寺や付き合いのある神社に相談し、自分の家としてどうするかを決めることが出発点になります。",
  },
  {
    title: "本体の処分ルートは複数ある：寺社・仏壇店・自治体・専門業者",
    body: "仏壇・神棚本体の行き先には、菩提寺や神社に相談して引き取りや供養の案内を受ける方法、仏壇店の引き取りサービスを利用する方法、自治体の粗大ごみとして出す方法（扱いは自治体により異なります）、供養に対応する遺品整理・片付け業者に依頼する方法などがあります。どのルートでも、儀式を済ませてから手放すかどうかは家の判断です。自治体で出す場合の分別・出し方や、業者・仏壇店の対応範囲は窓口ごとに異なるため、事前の確認が欠かせません。",
  },
  {
    title: "本体よりも先に「中身」の確認が重要",
    body: "仏壇の引き出しや内部には、位牌・過去帳・遺影のほか、印鑑・通帳・権利書・現金といった貴重品がしまわれていることが珍しくありません。本体の処分ばかりに気を取られて中身の確認を飛ばすと、家の記録や大切な物ごと手放してしまう恐れがあります。整理の際は、必ずすべての引き出し・棚を開けて中身を出し、「宗教的に大切な物」「財産・書類」「その他」に分けてから、本体の扱いを考える順番にしましょう。",
  },
];

const merits = [
  {
    title: "住み替え・買い替えの場合：新しい安置先を決めてから手放す",
    body: "引っ越しや住宅事情に合わせて、大きな仏壇から小型の仏壇に買い替える家庭は少なくありません。この場合は、位牌などを移す先を先に決め、古い本体の扱いを寺社や仏壇店に相談する流れが一般的です。買い替えを伴う場合、仏壇店が古い仏壇の引き取りに対応していることもあるため、購入先に確認するとスムーズです。移動の時期や作法に決まりがあるかどうかも、宗派・地域により考え方が異なるため、気になる場合は相談してから進めましょう。",
  },
  {
    title: "実家じまい・遺品整理の場合：親族との合意を最優先に",
    body: "空き家になった実家の片付けや遺品整理では、仏壇を「誰も引き継がない」場合の扱いが最大の論点になります。位牌や供養を今後どうするかは、自分ひとりで決めず、関係する親族と相談して合意を作ってから動くことが、後々のトラブルを防ぐ最善策です。進め方の全体像は実家の片付けや遺品整理の進め方の記事も参考にしてください。物量の多い実家では、供養対応のある遺品整理業者に、仏壇を含めた全体の整理を相談する方法もあります。",
  },
  {
    title: "神棚の場合：神社への相談を起点に、地域の慣習も確認する",
    body: "神棚やお神札の扱いは、仏壇とはまた考え方が異なります。お神札は授かった神社や近くの神社に納める方法が一般的に案内されますが、神棚本体の扱いや、お焚き上げと呼ばれる行事の有無・受け入れ品目は、神社や地域によって異なります。まずは付き合いのある神社に相談し、難しければ自治体のルールに沿って処分する家庭もあります。いずれの場合も「こうしなければならない」という全国一律の決まりがあるわけではないため、家として納得できる形を選ぶことが大切です。",
  },
];

const steps = [
  {
    title: "家族・親族に声をかけ、処分の方針を共有する",
    body: "仏壇・神棚は家族共有の記憶と結びついた物です。たとえ自分が管理してきた物でも、処分の前に兄弟姉妹や関係する親族へ一声かけ、「手放すこと」「供養をどうするか」の方針を共有しましょう。事後報告は感情的なもつれの原因になりがちです。遠方の親族には写真を送って状況を伝えると、話し合いがスムーズになります。この段階で引き取りたいという親族が現れることもあります。",
  },
  {
    title: "菩提寺・神社に相談し、儀式の要否と段取りを確認する",
    body: "付き合いのある菩提寺や神社があれば、処分を考えている旨を伝え、閉眼供養などの儀式が必要かどうか、行う場合の段取りを確認します。作法や考え方は宗派・地域により異なるため、ここで確認した内容がその家にとっての基準になります。菩提寺がわからない・付き合いがない場合は、仏壇店や供養対応のある専門業者に相談窓口を案内してもらう方法もあります。費用の考え方も窓口により異なるため、依頼前に確認しておきましょう。",
  },
  {
    title: "仏壇・神棚の中身をすべて出し、3つに分けて確認する",
    body: "引き出しや扉の中の物をすべて出し、「位牌・過去帳・遺影など宗教的に大切な物」「通帳・印鑑・書類・現金などの財産」「線香・ろうそく・仏具などの消耗品や道具」に分けます。財産に関わる物が出てきた場合は、相続に関係する可能性があるため勝手に処分せず保管してください。相続が絡む家の片付けの注意点は相続した家の片付けの記事で解説しています。",
  },
  {
    title: "本体の処分ルートを決め、日程を調整する",
    body: "儀式の要否が決まり中身の整理がついたら、本体の行き先を決めます。寺社・仏壇店の引き取り、自治体の粗大ごみ、供養対応の片付け業者への依頼など、選択肢ごとに条件や日程を確認しましょう。自治体で出す場合はサイズや出し方のルールが地域により異なるため、粗大ごみ申し込みの流れを参考に事前確認を。大型で運び出しが難しい場合や、他の家財もまとめて整理する場合は、業者への一括依頼が現実的です。",
  },
  {
    title: "位牌・遺影など残す物の安置場所を決めて移す",
    body: "本体を手放した後も、位牌・遺影・過去帳など「残す」と決めた物の置き場所が必要です。新しい仏壇や小型の祭壇へ移す、寺に預ける・納める形を相談するなど、扱い方は家により様々で、位牌の扱いも宗派により考え方が異なります。移し方に迷う場合は儀式の相談をした寺社に合わせて確認しておくと安心です。残す物の置き場所まで決まって、はじめて仏壇の整理は完了と考えましょう。",
  },
];

const ngActions = [
  {
    title: "親族に相談せず、独断で処分してしまう",
    body: "仏壇・神棚の処分をめぐる後悔やトラブルで最も多いのが、「相談してくれれば引き取ったのに」「供養もせずに捨てたのか」という親族との行き違いです。物としては自宅にある家財でも、気持ちの上では親族全員に関わる物と考え、方針の共有を省略しないでください。急ぐ事情がある場合でも、電話一本・写真一枚の共有だけで防げるもつれは多くあります。",
  },
  {
    title: "中身を確認しないまま本体ごと運び出す",
    body: "仏壇の引き出しは、通帳・印鑑・現金・貴金属の保管場所として使われていることが多く、遺品整理の現場でも貴重品の発見場所として知られています。中身を確認せず本体ごと処分すると、財産や重要書類を失うだけでなく、相続の手続きに支障が出る恐れもあります。すべての引き出し・棚・裏側までを確認してから搬出に進みましょう。",
  },
  {
    title: "儀式の要否を確認しないまま慌てて処分し、後から悔やむ",
    body: "閉眼供養などの儀式を行うかどうかは家の判断ですが、「よくわからないまま処分し、後になってやっておけばよかったと引きずる」ケースは少なくありません。処分自体は急いでできても、気持ちの区切りは後からやり直せません。退去期限などで時間がない場合でも、菩提寺や仏壇店への相談は電話でも可能です。数日の確認を惜しまず、家として納得できる形を選んでください。",
  },
  {
    title: "許可の確認できない回収業者に安易に引き渡す",
    body: "仏壇の処分でも、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。「供養します」とうたいながら実態が確認できない業者や、極端に安い金額で契約を急がせる業者には注意が必要です。供養の実施方法や証明の有無、処分の流れを具体的に説明できるかを確認し、不安があれば契約前に消費者ホットライン188や自治体窓口に相談してください。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "仏壇が大型で、自分たちでは安全に運び出せない",
  "実家じまい・遺品整理で、仏壇以外の家財もまとめて整理する必要がある",
  "菩提寺との付き合いがなく、供養の相談先から探す必要がある",
  "退去・売却などの期限があり、確実に段取りを進めたい",
  "遠方の実家にある仏壇で、現地での作業や立ち会いが難しい",
];

const faqs = [
  {
    q: "仏壇を処分するとき、供養は必ず必要ですか？",
    a: "全国一律の決まりはなく、閉眼供養などの儀式を行うかどうか、どのような作法で行うかは、宗派・地域・それぞれの家の考え方により異なります。行う家庭が多いのは事実ですが、最終的には家の判断です。迷う場合は菩提寺や付き合いのある寺社に相談し、家族が納得できる形を選ぶことをおすすめします。後から気持ちの引っかかりを残さないことが何より大切です。",
  },
  {
    q: "菩提寺がない・わからない場合はどこに相談すればいいですか？",
    a: "仏壇店や、供養に対応する遺品整理・片付け業者が相談窓口になり得ます。仏壇店は買い替え・引き取りの相談と合わせて供養の案内をしてくれることが多く、遺品整理業者にも供養の手配に対応するところがあります。いずれも対応範囲や費用の考え方は窓口により異なるため、依頼前に「何をどこまでやってもらえるのか」を確認してください。",
  },
  {
    q: "位牌や遺影はどう扱えばいいですか？",
    a: "位牌の扱いは宗派により考え方が異なり、新しい仏壇へ移す、寺に相談して預ける・納めるなど、選択肢も家庭によって様々です。自己判断で迷うより、供養の相談をした寺社に合わせて確認するのが確実です。遺影や思い出の写真は、残す枚数を決めてデジタル化する方法もあります。写真の整理の進め方は写真・アルバムの整理の記事を参考にしてください。",
  },
  {
    q: "神棚やお神札の処分はどうすればいいですか？",
    a: "お神札は授かった神社や近くの神社に納める方法が一般的に案内されますが、受け入れの可否や行事の有無は神社・地域により異なります。神棚本体についても、神社に相談する方法と、自治体のルールに沿って処分する方法があり、どちらを選ぶかは家の考え方次第です。まずは付き合いのある神社か、地域の神社に確認してみてください。",
  },
];

const related = [
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "自分でやる範囲と業者に任せる線引き" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/souzoku-ie-katazuke/", label: "相続した家の片付け", desc: "財産・書類が絡む片付けの注意点" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方", desc: "供養対応を含む業者選びの基準" },
  { href: "/review/minna-ihinseiri/", label: "みんなの遺品整理の評判", desc: "遺品整理業者を比較・紹介するサービス" },
  { href: "/area/osaka/", label: "大阪の片付け業者比較", desc: "大阪から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "仏壇・神棚の整理と処分の進め方" },
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
    { href: "#kiso", label: "1｜仏壇・神棚の処分で最初に知っておくこと" },
    { href: "#merit", label: "2｜状況別・整理の進め方の目安" },
    { href: "#houshin", label: "3｜整理を始める前の全体方針" },
    { href: "#steps", label: "4｜後悔しない整理・処分の5ステップ" },
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

      <Breadcrumb items={[{ label: "仏壇・神棚の整理と処分の進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          仏壇・神棚の整理と処分の進め方｜供養の考え方と後悔しない手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          実家じまいや遺品整理、住み替えの片付けで、多くの人が最後まで手を付けられないのが仏壇・神棚です。「粗大ごみに出していいのか」「供養は必要なのか」「親族に何と言われるか」——判断材料がわからないまま、空き家に仏壇だけが残っている、というケースも珍しくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、仏壇・神棚を整理・処分するときの一般的な流れを、相談先・家族との合意づくり・中身の確認・本体の処分ルート・残す物の扱いの順で解説します。供養などの宗教的な扱いは宗派・地域・家の考え方により異なるため、断定的な「正解」ではなく、家として納得できる形を選ぶための手順としてお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>供養（閉眼供養など）の要否・作法は宗派・地域・家の考え方により異なる。菩提寺や神社への相談が出発点</li>
          <li>本体より先に中身の確認。位牌・過去帳と、通帳・印鑑などの貴重品を分けてから処分を考える</li>
          <li>処分ルートは寺社・仏壇店・自治体・供養対応の業者の4系統。条件は窓口ごとに異なる</li>
          <li>独断で進めない。親族との方針共有が、後悔とトラブルを防ぐ一番の近道</li>
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

      <H2 id="kiso" num="1">仏壇・神棚の処分で最初に知っておくこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、仏壇・神棚の整理が普通の片付けと違う点を3つに整理します。この前提を押さえると、何から手を付けるべきかが見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">状況別・整理の進め方の目安</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        仏壇・神棚を手放す事情は家庭により様々です。代表的な3つの状況別に、進め方の目安を整理します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">整理を始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「相談→合意→中身→本体」の順番を守ることです。処分の手段（どのルートで出すか）から考え始めると、供養や親族への配慮が後回しになり、後悔の残る片付けになりがちです。逆に、相談と合意さえ先に済ませておけば、本体の処分自体は他の大型家財と同じ段取りで進められます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        仏壇の整理が単独で発生することは少なく、多くは実家じまいや遺品整理の一部です。全体の進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>と<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める方法</Link>を、空き家になった家の場合は<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家の片付け</Link>を参考に、仏壇はその中の「最初に方針を決める項目」として扱うのがおすすめです。
      </p>

      <H2 id="steps" num="4">後悔しない整理・処分の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際の手順を5つのステップで解説します。ポイントは、本体の搬出は最後で、それまでは「相談と確認」に時間を使うことです。
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

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、供養対応のある遺品整理・片付け業者への相談を検討しましょう。供養の手配・搬出・他の家財の整理までを一括で任せられるかどうかが、業者選びの確認ポイントです。
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
        遺品整理業者を探すなら、全国の業者を比較・紹介する<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>が候補になります。業者選びの基準は<Link href="/service/ihinseiri/" className="text-primary underline underline-offset-2">遺品整理業者の選び方</Link>で解説しています。見積もりの際は、供養の対応方法と、廃棄物の処理に必要な許可の有無を必ず確認してください。
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
        本記事は一般的な知識の提供を目的としたものです。供養などの宗教的な扱いは宗派・地域・各家庭の考え方により異なるため、菩提寺・神社など信頼できる相談先にご確認ください。粗大ごみの出し方は自治体により異なります。処分を業者に依頼する場合は、対応範囲を見積もりで確認し、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
