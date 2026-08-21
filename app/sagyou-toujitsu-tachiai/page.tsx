import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sagyou-toujitsu-tachiai/";
const TITLE = "片付け作業当日の立ち会いの流れ｜開始前の確認から引き渡しまで";
const DESC =
  "片付けを業者に依頼した当日、依頼者は何をすればよいのか。前日までに済ませておく準備、到着してから作業を始めるまでの確認、作業中に判断を求められる場面、終了時のチェック、そして立ち会えない場合の進め方まで、当日の流れを時系列で整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "立ち会いの役割は「監視」ではなく「判断」",
    body: "当日の立ち会いというと、作業を見張ることのように感じるかもしれません。しかし実際の役割はそこではなく、判断が必要になったときに答えることにあります。これは残すのか運び出すのか、この棚の中はどうするのか、想定より物が多いが範囲をどうするのか。作業を進める過程では、事前の打ち合わせでは決めきれなかった判断が必ず出てきます。その場に答えられる人がいるかどうかで、作業の進み方も、終わったあとの納得感も変わります。ずっと見ている必要はなく、聞かれたときに答えられる状態でいれば十分です。",
  },
  {
    title: "当日の行き違いは、たいてい前日までの準備で防げる",
    body: "当日に起きるトラブルの多くは、その日に発生したものではなく、前日までに決めていなかったことが表面化したものです。残す物を伝えていなかった、貴重品を抜き出していなかった、駐車できる場所を確認していなかった、集合住宅の共用部の使い方を管理会社に確認していなかった。いずれも前日までに一時間もかからず済ませられる準備です。当日を落ち着いて進めたいなら、力を入れるべきは作業日そのものより、その前の数日だと考えてください。",
  },
  {
    title: "終了時の確認を省くと、後から言いにくくなる",
    body: "作業が終わって部屋が空くと、達成感から確認が甘くなりがちです。しかし、運び出してほしくなかった物が含まれていた、収納の奥に物が残っていた、壁や床に傷ができていた、といったことは、その場で確認しなければ後から伝えにくくなります。作業員が帰る前に、部屋と収納の中、共用部、搬出の経路を一緒に見て回ってください。数分で済む確認が、後の気まずさを防ぎます。気になる点があれば、その場で伝えるのが基本です。",
  },
];

const merits = [
  {
    title: "準備1：貴重品と重要書類を、前日までに抜き出す",
    body: "現金、通帳、印鑑、証券、権利に関する書類、保険の書類、身分証、鍵、貴金属、思い出の品。これらは前日までに抜き出し、一つの箱やかばんにまとめて、作業の対象にならない場所へ移してください。当日に探しながら作業を進めると、見落としが起きます。抜き出す作業のなかで、判断に迷う物が出てきた場合は、その物だけを別にまとめておきます。片付けの過程で貴重品が出てきたときの扱いについては関連記事で扱っていますので、あわせてご覧ください。",
  },
  {
    title: "準備2：残す物を隔離し、目印を付けておく",
    body: "運び出さない物は、口頭で伝えるだけでなく、物理的に分けておくのが確実です。一つの部屋にまとめる、養生テープや付箋で目印を付ける、大きな紙に「残す」と書いて貼る、といった方法があります。作業は複数の人が同時に動くため、口頭の指示は全員に届かないことがあります。目に見える形にしておけば、誰が見ても判断できます。逆に、確実に運び出したい物も一か所にまとめておくと、作業が早く進みます。",
  },
  {
    title: "準備3：駐車と共用部の使い方を確認しておく",
    body: "作業には車両が必要です。敷地内に停められるのか、路上に停める場合の可否、近隣の駐車場を使うのかを事前に確認してください。集合住宅では、エレベーターの利用、共用廊下の通行、養生の要否、作業できる時間帯について、管理会社や管理組合の定めがあることがあります。届け出が必要な場合は、日程が決まった時点で連絡しておくと安心です。あわせて、両隣や上下の住戸へ、作業日と時間帯を一声かけておくと、音や人の出入りをめぐる気まずさを減らせます。",
  },
];

const steps = [
  {
    title: "開始前：到着後に、作業範囲と当日の段取りを口頭で再確認する",
    body: "作業員が到着したら、まず見積もり書を手元に置いて、作業の範囲を口頭で確認します。対象となる部屋、運び出す物の範囲、残す物の場所、含まれない作業。ここで認識をそろえておくと、途中で止まる回数が減ります。あわせて、当日の段取り（おおよその所要時間、休憩、搬出の順番）と、判断が必要になったときに誰に聞くかも決めておきます。責任者にあたる人の名前を聞いておくと、後で連絡するときに話が早くなります。",
  },
  {
    title: "開始直後：養生と搬出経路の確保を確認する",
    body: "作業が始まると、まず玄関や廊下、エレベーターなどの搬出経路に養生が施されるのが一般的です。壁や床、扉の枠を保護するための作業で、建物を傷めないために欠かせません。集合住宅では、共用部の養生が管理規約で求められている場合もあります。この段階で、養生の範囲が十分かを見ておいてください。あわせて、既に傷や汚れがある箇所があれば、作業前に写真を撮っておくと、後から原因をめぐって話がこじれるのを防げます。",
  },
  {
    title: "作業中：判断が必要な場面に答え、無理に手伝わない",
    body: "作業が進むと、収納の奥から想定外の物が出てきたり、残すかどうか迷う物が見つかったりします。その都度、確認を求められますので、答えられる場所にいてください。逆に、依頼者が搬出を手伝う必要はありません。重い物を持って怪我をしたり、作業の動線を妨げたりすると、かえって進みが遅くなります。作業中は、お茶出しなどの気遣いも不要とされることが多いので、事業者の方針に合わせて構いません。長時間になる場合は、休憩の目安を聞いておくと予定を立てやすくなります。",
  },
  {
    title: "追加が必要になったら、その場で内容と扱いを確認する",
    body: "作業中に、事前に伝えていなかった物が見つかる、想定より物量が多いといった理由で、範囲や金額の変更が話題になることがあります。そのときは、何がどう変わるのか、金額に影響するのか、しないのかを、その場で口頭だけでなく書面やメモで確認してください。判断に迷う場合は、その物だけを残して後日対応する選択もできます。説明のないまま作業が進み、後から請求されたという場合は、いったん支払いを保留し、消費者ホットライン188に電話して身近な相談窓口にご相談ください。",
  },
  {
    title: "終了時：部屋・収納・共用部を一緒に見て回り、引き渡す",
    body: "作業が終わったら、作業員と一緒に確認して回ります。見るのは、部屋の各所、押し入れやクローゼットなど収納の中、ベランダや物置、搬出に使った廊下やエレベーター、玄関前です。残すはずの物が運び出されていないか、運び出すはずの物が残っていないか、壁や床、扉に新しい傷がないかを確かめてください。気になる点があれば、その場で伝えます。確認が済んだら、精算の方法と時期、領収書の発行、必要であれば作業報告の受け取りについて確認し、引き渡しとなります。",
  },
];

const ngActions = [
  {
    title: "貴重品を抜き出さないまま、当日を迎える",
    body: "現金、通帳、印鑑、証券、権利に関する書類、鍵、貴金属などが部屋の中に残っている状態で作業を始めると、探しながらの作業になり、見落としが起きます。作業員にとっても、扱いに困る状況です。前日までに抜き出し、作業の対象にならない場所へ移してください。故人や親の家の片付けでは、思わぬ場所から現金や書類が出てくることがあります。その場合の扱いは、作業を始める前に事業者と取り決めておくと、当日のやり取りが明確になります。",
  },
  {
    title: "残す物を口頭だけで伝え、目印を付けない",
    body: "作業は複数の人が同時に動くため、口頭の指示が全員に伝わるとは限りません。「あの棚のものは残してください」と一人に伝えても、別の作業員がその棚を運び出すことがあります。残す物は一か所にまとめ、目印を付け、できれば別の部屋に移してください。見た目で分かる状態にしておくのが基本です。逆に、確実に運び出す物も一か所にまとめておくと、作業の判断が減って進みが早くなります。",
  },
  {
    title: "近隣や管理会社への確認をせずに、当日を迎える",
    body: "集合住宅では、エレベーターの使用、共用廊下の通行、養生の要否、作業できる時間帯について、管理規約や管理会社の定めがあることがあります。確認せずに作業を始めると、途中で中断を求められることもあります。日程が決まった時点で管理会社や管理組合に連絡し、必要な手続きを済ませておいてください。あわせて、両隣や上下の住戸に作業日と時間帯を伝えておくと、音や人の出入りをめぐる気まずさを避けられます。",
  },
  {
    title: "終了の確認をせずに、その場を離れる",
    body: "作業が終わった直後は疲れていて、確認を省きたくなります。しかし、収納の奥に物が残っていた、残すはずの物が運び出されていた、壁に新しい傷ができていた、といったことは、その場で確認しなければ後から伝えにくくなります。作業員が帰る前に、部屋と収納の中、共用部、搬出の経路を一緒に見て回ってください。写真を撮っておくとより確実です。精算の方法と時期、領収書の発行についても、この時点で確認しておきます。",
  },
];

const judgeSigns = [
  "自分では運び出せない大型の家具や家電が複数ある",
  "作業量が多く、家族だけでは一日で終わる見通しが立たない",
  "退去や引き渡しの期限が迫っていて、日程に余裕がない",
  "遺品整理や特殊な清掃を伴い、専門的な対応が必要",
  "遠方に住んでいて、現地で作業できる時間が限られている",
];

const faqs = [
  {
    q: "作業当日、依頼者はずっと立ち会う必要がありますか？",
    a: "常に見ている必要はありませんが、判断を求められたときに答えられる状態でいることが望ましいです。開始前の範囲確認と、終了時の確認には立ち会うことをおすすめします。作業中は、収納の奥から出てきた物の扱いなど、その場で決めるべきことが生じます。長時間になる場合は、離れる時間帯と連絡が取れる方法を作業の責任者に伝えておくと、進行が止まりません。",
  },
  {
    q: "どうしても立ち会えない場合はどうすればよいですか？",
    a: "事業者によっては、立ち会いなしでの作業に対応している場合があります。ただし、鍵の受け渡しの方法、作業の記録や写真の共有、残す物の指定の仕方、精算の方法など、決めておくべきことが増えます。対応の可否と条件は事業者によって異なりますので、依頼の段階で確認し、内容を書面に残してもらってください。賃貸物件の場合は、管理会社や貸主への確認も必要になることがあります。",
  },
  {
    q: "作業中にお茶出しや手伝いは必要ですか？",
    a: "多くの場合、必要ありません。飲み物の用意は事業者側で行うのが一般的で、依頼者が搬出を手伝うと動線を妨げたり怪我につながったりすることがあります。依頼者の役割は、判断を求められたときに答えることと、開始前・終了時の確認です。気になる場合は、依頼の段階で事業者の方針を聞いておくと、当日に迷わずに済みます。",
  },
  {
    q: "作業後に、残してほしかった物が運び出されたと気づいたら？",
    a: "気づいた時点で、すぐに事業者へ連絡してください。処分の工程に進む前であれば、対応できる場合があります。連絡は電話などで早めに行い、やり取りの記録を残しておくと後の確認に役立ちます。こうした事態を防ぐには、残す物を一か所にまとめて目印を付けること、終了時に一緒に確認して回ることが効果的です。話し合いで解決しない場合は、消費者ホットライン188に電話して身近な相談窓口にご相談ください。",
  },
];

const related = [
  { href: "/mitsumorisho-mikata/", label: "見積もり書の見方", desc: "作業範囲と追加費用の確認ポイント" },
  { href: "/kichouhin-genkin-hakken/", label: "貴重品・現金が出てきたら", desc: "保管と相談先の考え方" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限までに片付け切る方法" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める", desc: "手順と業者に任せる範囲" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない家具の搬出と選択肢" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収の注意点", desc: "確認すべきポイントと相談先" },
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
    { "@type": "ListItem", position: 2, name: "片付け作業当日の立ち会いの流れ" },
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
    { href: "#kiso", label: "1｜当日を迎える前に押さえること" },
    { href: "#merit", label: "2｜前日までに済ませる3つの準備" },
    { href: "#houshin", label: "3｜立ち会えない場合の進め方" },
    { href: "#steps", label: "4｜当日の流れ5ステップ" },
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

      <Breadcrumb items={[{ label: "片付け作業当日の立ち会いの流れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          片付け作業当日の立ち会いの流れ｜開始前の確認から引き渡しまで
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          見積もりを取り、依頼先を決め、作業日が確定した。あとは当日を待つだけ、と思っていると、朝になって「何をしていればいいのだろう」と戸惑うことがあります。ずっと見ているべきなのか、手伝うべきなのか、飲み物を用意すべきなのか。判断の材料がないまま迎えると、落ち着かないまま一日が過ぎてしまいます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、前日までに済ませておきたい準備、到着から作業開始までの確認、作業中に判断を求められる場面、終了時のチェック、そして立ち会えない場合の進め方までを時系列で整理します。なお、当日の具体的な進め方や対応の範囲は事業者によって異なりますので、詳細は依頼先の説明と契約書面でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>立ち会いの役割は監視ではなく、判断を求められたときに答えること</li>
          <li>貴重品の抜き出し・残す物の隔離と目印・駐車と共用部の確認は前日までに済ませる</li>
          <li>開始前に作業範囲を口頭で再確認し、既存の傷は写真に残しておく</li>
          <li>終了時は部屋・収納の中・共用部・搬出経路を一緒に見て回ってから引き渡す</li>
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

      <H2 id="kiso" num="1">当日を迎える前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        当日の過ごし方を考える前に、立ち会いという行為が何のためにあるのかを整理しておきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">前日までに済ませる3つの準備</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        貴重品、残す物、そして建物まわりの調整。この三つを済ませておけば、当日は判断に集中できます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">立ち会えない場合の進め方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遠方に住んでいる、仕事の都合がつかない、体調が思わしくないなど、当日に立ち会えない事情はさまざまです。事業者によっては、立ち会いなしでの作業に対応していることがあります。ただしその場合、決めておくべきことが増えます。鍵をどう渡し、いつ返してもらうのか。残す物をどのように指定するのか。作業の状況をどう共有してもらうのか。想定外の物が出てきたときに誰に連絡し、どう判断するのか。精算はどの方法で行うのか。これらを事前に取り決め、書面に残しておくことが前提になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        残す物の指定は、立ち会う場合以上に丁寧に行う必要があります。残す物は一つの部屋にまとめて扉を閉め、「この部屋は対象外」と貼り紙をしておく。写真を撮って事業者と共有しておく。この二つを行えば、口頭の説明よりずっと確実です。また、作業の前後の状態を写真で記録してもらえるかを確認しておくと、離れていても状況を把握できます。賃貸物件の場合は、管理会社や貸主に鍵の扱いについて確認が必要になることもありますので、日程が決まった時点で相談しておいてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、立ち会いなしの対応が可能かどうか、その場合の条件は事業者によって異なります。依頼の段階で確認し、内容を見積もり書や契約書面に反映してもらってください。見積もり書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>で扱っています。遠方から実家や空き家の片付けを進める場合の段取りは<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家の片付け</Link>、退去の期限がある場合は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けの段取り</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">当日の流れ5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        範囲の再確認→養生と経路の確認→作業中の判断→追加が出たときの確認→終了時の点検。この順に進みます。
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
        <h3 className="font-bold text-text-primary mb-2">当日の対応範囲と条件は、事業者ごとに確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          養生の範囲、作業時間、立ち会いなしでの対応の可否、鍵の取り扱い、作業記録や写真の共有、精算の方法と時期、追加が発生する場合の手順は、事業者および契約内容によって異なります。本記事では一般的な流れの説明にとどめており、個別の条件についてお答えすることはできません。依頼先の説明と契約書面でご確認ください。説明のないまま作業が進み、後から請求を受けた場合など、契約や請求をめぐって困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        作業中に想定外の物が出てくることは珍しくありません。とくに、長く住んだ家や故人の家では、収納の奥や家具の裏から現金、通帳、権利に関する書類などが出てくることがあります。こうした場合の扱いは、作業を始める前に事業者と取り決めておいてください。詳しくは<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>で整理しています。遺品整理として依頼する場合の全体像は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める手順</Link>、形見分けの進め方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">形見分けの進め方</Link>をご覧ください。
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
        自力で進めるか依頼するかで迷っている場合は、次の状況が判断の目安になります。対応できる業者は<Link href="/area/saitama/" className="text-primary underline underline-offset-2">埼玉の片付け業者</Link>や<Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の収集運搬に必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を書面にしてもらってください。当日の進め方、立ち会いの要否、追加が生じる場合の手順についても、契約の前に確認しておくと安心です。料金は物量・間取り・作業内容・地域によって異なるため、複数社を比べるのが確実です。依頼先の候補としては<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/gomiyashiki-partners/" className="text-primary underline underline-offset-2">ゴミ屋敷専門パートナーズ</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。当日の作業の進め方、養生の範囲、立ち会いなしでの対応の可否、鍵の取り扱い、精算の方法、追加が発生する場合の手順は、事業者および契約内容により異なりますので、必ず依頼先の説明と契約書面でご確認ください。集合住宅での共用部の使用や作業時間については、管理会社・管理組合の定めをご確認ください。賃貸物件では貸主・管理会社への確認が必要になる場合があります。契約や請求をめぐって困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
