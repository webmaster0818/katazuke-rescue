import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/mitsumorisho-mikata/";
const TITLE = "片付け業者の見積もり書の見方｜総額・作業範囲・追加費用の確認ポイント";
const DESC =
  "見積もり書は、金額を知るための紙ではなく、何をどこまでやってもらうかを決める書類です。記載されているべき項目、「一式」表記の読み解き方、当日に金額が変わる条件、複数社を比べるときにそろえる前提、そして受け取ってから契約するまでに確認したいことを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "見積もり書は「金額の紙」ではなく「約束の範囲を書いた紙」",
    body: "見積もり書を受け取ると、多くの人はまず合計金額に目が行きます。しかし後からトラブルになるのは、金額そのものより「どこまでやってもらえるか」の認識がずれていた場面です。部屋の中の物をすべて運び出すのか、指定した物だけなのか、押し入れや物置の中も含むのか、掃き掃除まで行うのか。こうした範囲が書かれていない見積もり書は、金額が明確でも比較の材料になりません。見積もり書は、作業の範囲を文字にして共有するための書類だと考えて読むと、確認すべき点が見えてきます。",
  },
  {
    title: "書面で受け取ることが、確認と比較の前提になる",
    body: "電話や訪問の場で口頭の金額だけを伝えられ、そのまま契約を促されるケースがあります。しかし口頭のやり取りは記録に残らず、後から内容を確認することができません。見積もりは書面（紙または電子的な書類）で受け取り、事業者名、所在地、連絡先、作業日、作業の範囲、金額の内訳、有効期限が記載されているかを確認してください。書面の交付を渋る、その場での契約を強く求める、といった対応が見られる場合は、いったん持ち帰って判断する姿勢が大切です。急がされるほど、確認の時間を取る必要があります。",
  },
  {
    title: "料金は条件によって変わるため、前提をそろえないと比べられない",
    body: "片付けや不用品回収の料金は、物量、間取り、建物の構造、搬出の経路、作業する人数と時間、処分する品目の種類、地域といった条件で変わります。同じ「一部屋分」でも、家具が多い部屋とそうでない部屋、エレベーターのある建物と階段のみの建物では、必要な作業がまったく違います。したがって、複数社を比べるときは、同じ条件を伝え、同じ範囲で見積もってもらうことが前提になります。前提がそろっていない見積もり書を金額だけで並べても、比較にはなりません。",
  },
];

const merits = [
  {
    title: "確認1：事業者の情報と、必要な許可の記載",
    body: "見積もり書の冒頭には、事業者名、所在地、連絡先が記載されているのが通常です。あわせて確認したいのが、廃棄物の収集運搬に関する許可の記載です。家庭から出る不用品を収集して運ぶには自治体の許可が必要とされており、事業者によっては許可を持つ事業者と連携する形を取っていることもあります。どのような体制で処分まで行うのかを説明してもらい、書面や公式の案内で確認できるかを見てください。買取を伴う場合は、古物の取り扱いに関する許可についても確認しておくと安心です。",
  },
  {
    title: "確認2：作業範囲と、含まれない作業の線引き",
    body: "「どこまでやるか」は、見積もり書のなかで食い違いが生じやすい部分です。対象となる部屋や場所、運び出す物の範囲（すべてか、指定した物か）、家具の解体が必要な場合の扱い、屋外や物置の中を含むか、作業後の掃き掃除や簡易清掃が含まれるか。これらが書かれていなければ、口頭で確認したうえで書面に追記してもらってください。あわせて、含まれない作業も明記されていると安心です。ハウスクリーニングの範囲まで期待していたのに含まれていなかった、という行き違いは実際によく起こります。",
  },
  {
    title: "確認3：金額が変わる条件と、その扱い",
    body: "見積もりは、事前に伝えた条件をもとに作られます。当日になって物量が増えていた、伝えていなかった大型の家具が出てきた、搬出の経路が想定と違った、という場合には、金額が変わる可能性があります。問題になるのは、変わること自体ではなく、変わるときの扱いが決まっていないことです。追加が発生する条件、その場合に事前に説明と同意を得るかどうか、同意しなかった場合はどうなるかを、契約の前に確認してください。書面に一文でも記載があると、当日のやり取りが落ち着いたものになります。",
  },
];

const steps = [
  {
    title: "依頼したい範囲を自分の言葉で書き出す",
    body: "見積もりを取る前に、何をどこまでやってほしいのかを自分でまとめます。対象の部屋、運び出したい物のおおよその内容と量、残しておきたい物、作業を希望する日、建物の階数とエレベーターの有無、駐車できる場所の有無、作業当日に立ち会えるかどうか。これらを箇条書きにしておくと、どの事業者にも同じ条件を伝えられます。写真を数枚撮っておくと、状況が伝わりやすくなります。ここで前提をそろえておくことが、後で見積もり書を比べるときに効いてきます。",
  },
  {
    title: "複数社に同じ条件で見積もりを依頼する",
    body: "料金は条件によって異なるため、一社だけでは高いのか妥当なのか判断できません。二社から三社に、先ほど書き出した同じ条件を伝えて見積もりを依頼してください。可能であれば、実際に部屋を見てもらう形（訪問での見積もり）を選ぶと、当日の追加が起きにくくなります。訪問が難しい場合は、写真や動画で状況を共有する方法もあります。依頼の際は、書面で見積もりを出してもらえるか、有効期限はどれくらいかもあわせて聞いておきましょう。",
  },
  {
    title: "受け取った見積もり書の項目を、同じ表に並べて確認する",
    body: "見積もり書が届いたら、事業者ごとに書式が違うため、そのままでは比べにくいことがあります。事業者名と許可の記載、作業日と所要時間の目安、作業の範囲、人員と車両、処分に関する費用、階段や長い距離の搬出に関する費用、解体などのオプション、合計金額、有効期限、支払い方法、キャンセルの取り扱い。この項目を並べた簡単な表を作り、各社の内容を書き写してみてください。書かれていない項目が浮かび上がり、そこが質問すべき点になります。",
  },
  {
    title: "「一式」や空欄になっている項目を質問する",
    body: "見積もり書には「作業一式」といったまとめた表記が使われることがあります。この表記自体が問題なのではなく、その中身が説明できるかどうかが重要です。何が含まれ、何が含まれないのかを聞き、答えの内容を書面に反映してもらってください。同様に、空欄になっている項目、金額が記載されていない項目についても確認します。質問に対して具体的に答えてくれるか、書面に残すことに応じてくれるかは、事業者を選ぶ判断材料にもなります。遠慮せずに聞いて構いません。",
  },
  {
    title: "内容に納得してから契約し、書面を保管する",
    body: "確認が済み、作業の範囲と金額に納得できたら契約に進みます。契約にあたっては、契約書や注文書などの書面を受け取り、作業が終わるまで保管してください。キャンセルの取り扱い、支払いの時期と方法、当日に追加が発生する場合の手順も、書面で確認しておきます。訪問を受けて契約する場合には、法令上、書面の交付や一定期間内に契約を解除できる仕組みが定められていることがあります。制度の適用や条件については、消費者ホットライン188に電話して身近な相談窓口で確認することができます。",
  },
];

const ngActions = [
  {
    title: "合計金額だけを見て、作業範囲を確認せずに決める",
    body: "同じような金額でも、含まれる作業が違えば実質的な内容は変わります。ある事業者は屋内の物をすべて運び出して掃き掃除まで行い、別の事業者は指定された物だけを運び出す。この差が書面から読み取れないまま契約すると、当日に「そこまでは含まれていません」というやり取りになります。金額を見る前に、作業の範囲がどこまで書かれているかを先に確認してください。範囲がそろって初めて、金額の比較に意味が生まれます。",
  },
  {
    title: "口頭の説明だけで契約し、書面を受け取らない",
    body: "その場で金額を伝えられ、書面がないまま作業日を決めてしまうと、後から内容を確認する手段がありません。作業後に想定と違う請求を受けたとき、口頭のやり取りしか根拠がないと話が進みません。見積もりは書面で受け取り、事業者名、所在地、連絡先、作業日、作業範囲、金額の内訳、有効期限が記載されているかを確認してください。書面の交付に応じない事業者への依頼は避けたほうが無難です。不安を感じたときは消費者ホットライン188に相談できます。",
  },
  {
    title: "その場で決めるよう急かされ、比較せずに契約する",
    body: "「今日だけの金額です」「今決めてもらえれば作業できます」といった形で判断を急がされると、確認の時間が取れません。片付けの依頼は、日程に多少の余裕を持たせられることがほとんどです。急かされたときこそ、いったん持ち帰り、他社の見積もりと並べて比べてください。訪問を受けて契約した場合には、法令上、一定期間内に契約を解除できる仕組みが定められていることがあります。適用の可否や手続きについては、消費者ホットライン188から案内される相談窓口で確認してください。",
  },
  {
    title: "処分の方法や行き先を確認しないまま任せる",
    body: "運び出した後、その物がどう処分されるのかは、依頼した側にとっても無関係ではありません。適切に処理されなかった場合、依頼者が事情を説明する立場になることがあります。家庭から出る不用品の収集運搬には自治体の許可が必要とされており、事業者がその許可を持っているか、あるいは許可を持つ事業者と連携しているかを確認してください。処分の流れを説明できるか、書面や公式の案内で体制を確認できるかは、判断の材料になります。無料をうたう回収の注意点は関連記事で扱っています。",
  },
];

const judgeSigns = [
  "自分では運び出せない大型の家具や家電が複数ある",
  "部屋数が多く、仕分けから搬出までを自力で終える見通しが立たない",
  "退去や引き渡しの期限が決まっていて、日程に余裕がない",
  "遠方に住んでいて、現地で作業できる時間が限られている",
  "遺品整理や特殊な清掃を伴い、専門的な対応が必要",
];

const faqs = [
  {
    q: "見積もり書には、どんな項目が書かれているべきですか？",
    a: "一般的には、事業者名・所在地・連絡先、作業日、作業の範囲、人員や車両、処分に関する費用、階段作業や長距離の搬出など条件による費用、オプション、合計金額、有効期限、支払い方法、キャンセルの取り扱いが記載されます。書式は事業者によって異なりますが、これらが読み取れない場合は質問し、内容を書面に反映してもらってください。金額の水準は条件によって異なるため、同じ条件で複数社を比べることが前提になります。",
  },
  {
    q: "「作業一式」と書かれているのは問題ですか？",
    a: "まとめた表記そのものが問題というより、中身を説明してもらえるかどうかが判断の分かれ目です。何が含まれ、何が含まれないのかを具体的に聞き、その内容を書面に反映してもらってください。説明を求めても具体的な回答が得られない、書面に残すことに応じないという場合は、依頼を見合わせる判断も必要です。契約をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
  {
    q: "当日に金額が上がることはありますか？",
    a: "事前に伝えた条件と実際の状況が違う場合、追加の作業が必要になることがあります。大切なのは、追加が発生する条件と、その場合に事前に説明と同意を得る手順が決まっているかどうかです。契約の前にこの点を確認し、可能であれば書面に記載してもらってください。当日、説明のないまま作業が進み、後から請求されたという場合は、いったん支払いを保留し、消費者ホットライン188から案内される相談窓口にご相談ください。",
  },
  {
    q: "見積もりは何社くらい取ればよいですか？",
    a: "二社から三社に同じ条件で依頼するのが現実的です。多すぎると比較の手間が増え、日程の調整も難しくなります。比べる際は金額だけでなく、作業範囲の書き方、質問への回答の具体性、許可や処分の体制を説明できるか、書面の交付に応じるかといった点も見てください。料金は物量・間取り・作業内容・地域によって異なるため、条件をそろえずに金額だけを並べても判断材料にはなりません。",
  },
];

const related = [
  { href: "/sagyou-toujitsu-tachiai/", label: "作業当日の立ち会いの流れ", desc: "開始前の確認から引き渡しまで" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収の注意点", desc: "確認すべきポイントと相談先" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体と業者の使い分け", desc: "どちらに頼むかの判断基準" },
  { href: "/house-cleaning-chigai/", label: "ハウスクリーニングとの違い", desc: "依頼先の選び方" },
  { href: "/oosouji-gyousha-hani/", label: "大掃除を頼む範囲", desc: "自分でやる場所との分け方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
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
    { "@type": "ListItem", position: 2, name: "片付け業者の見積もり書の見方" },
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
    { href: "#kiso", label: "1｜見積もり書を読む前に押さえること" },
    { href: "#merit", label: "2｜必ず確認したい3つの項目" },
    { href: "#houshin", label: "3｜複数社を比べるときの並べ方" },
    { href: "#steps", label: "4｜見積もりを取って契約するまでの5ステップ" },
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

      <Breadcrumb items={[{ label: "片付け業者の見積もり書の見方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          片付け業者の見積もり書の見方｜総額・作業範囲・追加費用の確認ポイント
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けを業者に頼むと決めたあと、多くの人がつまずくのが見積もり書の読み方です。複数社から届いた書面を並べても、書式が違い、項目の数も表現もばらばらで、結局いちばん下の合計金額だけを見比べてしまう。これが、当日の行き違いにつながる典型的な流れです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、見積もり書に記載されているべき項目、「一式」というまとめた表記の読み解き方、当日に金額が変わる条件の確認の仕方、複数社を比べるときにそろえるべき前提、そして契約するまでに済ませておきたい確認を順に整理します。なお、料金は物量・間取り・建物の条件・作業内容・地域によって異なりますので、具体的な金額は必ず見積もりでご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>見積もり書は金額より先に「作業範囲」を読む。範囲がそろって初めて比較できる</li>
          <li>事業者名・所在地・連絡先・許可の体制・有効期限・キャンセルの扱いが書面にあるか確認する</li>
          <li>「一式」表記は中身を質問し、答えを書面に反映してもらう</li>
          <li>当日に追加が生じる条件と、その際に事前の説明と同意を得る手順を契約前に決めておく</li>
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

      <H2 id="kiso" num="1">見積もり書を読む前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        読み方のコツを知る前に、見積もり書という書類の役割を押さえておくと、確認すべき点が自然に見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">必ず確認したい3つの項目</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        事業者の情報と許可の体制、作業範囲の線引き、金額が変わる条件。この三つは、書面から読み取れるかどうかを必ず確かめてください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">複数社を比べるときの並べ方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        比較でつまずく理由の多くは、書式の違いにあります。ある事業者は作業費・処分費・車両費と細かく分け、別の事業者は「作業一式」とまとめる。この二つを並べても、そのままでは中身が対応しません。おすすめは、自分で確認したい項目を縦に並べた簡単な表を作り、各社の見積もり書からその項目に当たる内容を書き写す方法です。項目は、事業者名と許可の体制、作業日と所要時間の目安、対象となる部屋や場所、運び出す物の範囲、含まれない作業、人員と車両、処分に関する費用、階段や長距離の搬出に関する費用、オプション、合計金額、有効期限、支払い方法、キャンセルの取り扱いといったところです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        この表を埋めていくと、書かれていない項目がそのまま空欄として残ります。空欄は、そのまま質問のリストになります。「この見積もりに掃き掃除は含まれますか」「押し入れの中の物も対象ですか」「階段での搬出になりますが、その分は含まれていますか」というように、具体的に尋ねてください。回答が具体的で、書面への反映にも応じてもらえるなら、当日の行き違いはかなり減ります。逆に、質問に対して曖昧な返答が続く場合は、その事業者への依頼は慎重に考えたほうがよいでしょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、料金の水準そのものは、物量・間取り・建物の構造・搬出の経路・作業する人数と時間・処分する品目・地域といった条件によって変わります。同じ条件で見積もっていない書面を金額だけで比べても、判断材料にはなりません。相場の考え方は<Link href="/cost/price/" className="text-primary underline underline-offset-2">費用相場のページ</Link>で扱っています。自治体の収集で出せる物を先に減らしておくと、依頼する範囲そのものを小さくできます。その考え方は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>、清掃まで含めて頼むかどうかは<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングとの違い</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">見積もりを取って契約するまでの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        範囲を書き出す→同じ条件で複数社に依頼する→表に並べる→空欄を質問する→納得してから契約する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">金額と条件は、必ず見積もりと契約書面で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付け・不用品回収の料金は、物量、間取り、建物の構造、搬出の経路、作業する人数と時間、処分する品目、地域によって異なります。本記事では確認すべき項目の説明にとどめており、具体的な金額の目安を示すものではありません。実際の金額と条件は、各事業者の見積もりと契約書面でご確認ください。訪問を受けて契約した場合の書面の交付や契約解除の仕組みについては、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。請求の内容に納得できないときも同様にご相談ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        契約が決まったら、当日の流れも事前に確認しておくと安心です。開始前にどのような説明があるのか、作業中に判断が必要になったときはどう連絡するのか、終了時に何を確認するのか。この段取りを知っておくと、当日に慌てずに済みます。詳しくは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>で扱っています。また、作業中に貴重品や現金が出てきた場合の扱いを事前に取り決めておくことも大切です。その考え方は<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>で整理しています。無料をうたう回収への注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>をご覧ください。
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
        そもそも業者に頼むべきかどうかで迷っている場合は、次のような状況が判断の目安になります。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼先を選ぶ際は、廃棄物の収集運搬に必要な許可を確認できること、書面で見積もりを出すこと、質問に具体的に答えることを基準にしてください。買取を伴う依頼では、古物の取り扱いに関する許可もあわせて確認します。料金は条件によって異なるため、同じ前提で複数社を比べるのが確実です。依頼先の候補としては<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/sumai-hotline/" className="text-primary underline underline-offset-2">すまいのホットライン</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。片付け・不用品回収の料金および契約の条件は、物量・間取り・建物の構造・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。制度の適用に関する判断が必要な場合は、専門の相談窓口や専門家にご相談ください。
      </p>
    </article>
  );
}
