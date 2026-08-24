import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/mansion-hanshutsu-dandori/";
const TITLE = "マンションの不用品搬出の段取り｜共用部の養生・管理規約の確認・作業日の調整";
const DESC =
  "集合住宅から家財を運び出すときは、部屋の中の作業よりも共用部の段取りでつまずきます。管理規約や使用細則の確認、管理組合・管理会社への事前連絡、エレベーターの利用ルールと養生、廊下やエントランスの保護、車両の停車場所、作業時間帯の制限、近隣への配慮までを、集合住宅ならではの手順に絞って整理します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "つまずくのは部屋の中ではなく、玄関から先の共用部",
    body: "集合住宅の搬出でうまくいかない場面の多くは、部屋の中ではなく玄関から外の部分で起きます。エレベーターが使える時間帯が決まっていた、養生をしていないと運搬が認められなかった、車両を停める場所がなくて路上で待たされた、といった具合です。部屋の中の物をどう運ぶかは、当日に人手と道具があれば何とかなります。しかし共用部のルールは、事前に確認して手続きを済ませておかないと、当日その場では動かせません。段取りの重心を、玄関から外に置いて考えてください。",
  },
  {
    title: "ルールは建物ごとに違うため、自分の建物のものを確認する",
    body: "管理規約や使用細則の内容は、建物ごとに大きく異なります。同じ地域の似た規模のマンションでも、エレベーターの養生を管理会社が行うところ、住戸側で用意するところ、そもそも荷物用の扱いが決まっているところとさまざまです。作業時間帯の制限、届出書の要否、駐車できる場所、ゴミ置き場の使い方も同じで、一般論で判断すると行き違いになります。インターネットで見かけた手順をそのまま当てはめず、必ず自分の建物の規約と、管理組合または管理会社の案内で確認してください。",
  },
  {
    title: "賃貸か分譲かで、連絡する相手が変わることがある",
    body: "分譲の住戸であれば、管理組合や管理会社に届け出る流れが一般的です。賃貸の場合は、まず貸主や仲介・管理を担う会社に連絡し、そこから建物の管理側へ話が通る形になることもあります。どちらであっても、連絡先が分からないときは、エントランスの掲示板や郵便受け付近の掲示、契約時の書類に管理会社名と連絡先が記載されていることが多いので、そこから確認できます。誰に連絡すればよいか迷ったら、まず管理会社に電話して、届出が必要かどうかを尋ねるのが早い進め方です。",
  },
];

const merits = [
  {
    title: "確認1：管理規約・使用細則と、届出の要否",
    body: "最初に確認したいのは、引っ越しや大型の荷物の搬出について何が定められているかです。事前の届出書が必要か、何日前までに出すのか、作業できる曜日や時間帯に制限があるか、休日の作業が認められるか。このあたりは建物により異なります。届出が必要な場合、書式が用意されていることが多いので、管理会社に問い合わせて取り寄せてください。業者に依頼する場合は、業者名と車両、作業予定時間を書く欄があることもあるため、依頼先が決まってから提出する流れになる場合があります。",
  },
  {
    title: "確認2：エレベーターの利用ルールと養生の担当",
    body: "エレベーターは、集合住宅の搬出でもっとも調整が必要な設備です。荷物の運搬に使ってよいか、専用に使える時間があるか、養生は誰がどのように行うか、かごの大きさや積載の制限はどうか。これらは建物ごとに定められています。養生シートを管理側が貸し出す建物もあれば、業者が持参した資材で行う建物もあります。長時間占有すると他の居住者の生活に影響しますので、利用できる時間の枠を確認し、その枠に収まる作業計画を業者と共有しておいてください。",
  },
  {
    title: "確認3：車両の停車場所と、作業時間帯の制限",
    body: "搬出作業では、建物のそばに車両を停める必要があります。敷地内に一時的に停められる場所があるか、来客用の区画を使ってよいか、使う場合は事前の予約が要るか、道路に停める場合の扱いはどうか。これらも建物と周辺の道路事情によって変わります。停める場所が決まらないまま当日を迎えると、作業時間が延び、他の居住者の出入りにも影響します。あわせて、作業してよい時間帯も確認してください。早朝や夜間、休日の作業に制限がある建物は少なくありません。",
  },
];

const steps = [
  {
    title: "管理規約と使用細則を読み、分からない点を書き出す",
    body: "手元にある管理規約と使用細則、入居時に受け取った案内を広げて、搬出や引っ越しに関する記載を探します。読んでも判断できない点は、そのまま質問リストにしてください。届出は必要か、何日前までか、作業できる時間帯はいつからいつまでか、エレベーターの養生は誰が行うか、車両はどこに停められるか、ゴミ置き場に不用品を置いてよいか。この六つを押さえておけば、最初の問い合わせで大半が片付きます。書類が見当たらない場合は、管理会社に写しをもらえるか聞いてみてください。",
  },
  {
    title: "管理組合・管理会社に連絡し、届出と日程を仮押さえする",
    body: "質問リストを持って、管理組合または管理会社に連絡します。賃貸の場合は貸主や管理を担う会社が窓口になることもあります。届出書が必要であれば書式をもらい、提出の期限を確認してください。あわせて、希望する作業日にエレベーターの利用が重ならないかも尋ねます。引っ越しシーズンには同じ日に複数の住戸が搬出することもあり、早めに相談しておくと調整が利きます。この段階では日程を仮押さえにしておき、業者が決まってから確定させる進め方が安全です。",
  },
  {
    title: "業者に建物の条件を伝えて、同じ前提で見積もりを取る",
    body: "業者に相談するときは、物量だけでなく建物の条件を必ず伝えてください。階数、エレベーターの有無とかごのおおよその大きさ、玄関から乗り場までの距離、共用廊下の幅、エントランスの段差やスロープ、車両を停められる場所、作業してよい時間帯、養生の担当。ここまで伝えておくと、当日に想定と違うという事態を減らせます。複数の事業者に同じ条件を伝えることで、前提のそろった比較ができます。料金は物量・間取り・建物の条件・作業内容・地域・事業者により異なります。",
  },
  {
    title: "作業日を確定し、届出を提出して近隣に配慮の準備をする",
    body: "業者と日程が決まったら、届出書を提出し、管理側に業者名と車両、作業予定時間を伝えます。あわせて、両隣と上下の住戸、同じ階の住戸に、作業日と時間帯を短く伝えておくと、当日の物音への受け止め方が変わります。掲示板への掲示が必要かどうかも、管理会社に確認してください。エレベーターを一定時間使う場合は、その旨をかごの中や掲示板に案内してもらえることがあります。事前のひと言があるかないかで、近隣との関係は大きく変わります。",
  },
  {
    title: "当日は養生の確認から始め、終了時に共用部を点検する",
    body: "当日は、作業を始める前に養生の状態を一緒に確認します。エレベーターのかご内と扉まわり、共用廊下の床と壁の角、エントランスの床、階段を使う場合は手すりと踏み面。ここが保護されているかを目で見て確かめてください。作業中は玄関前に物を長く置かないよう伝えます。終了時には、共用部に傷や汚れが残っていないかを業者と一緒に点検し、養生資材がすべて撤去されたかも確認します。気になる点があれば、その場で写真を撮り、業者と管理会社の双方に伝えてください。",
  },
];

const ngActions = [
  {
    title: "届出や事前連絡をせずに、当日いきなり搬出を始める",
    body: "建物によっては、事前の届出がないと共用部での運搬作業が認められないことがあります。当日になって管理人から作業を止められると、業者の時間も無駄になり、日程の取り直しが必要になります。届出の要否と提出の期限は建物ごとに異なりますので、日程を決める前に管理組合または管理会社に確認してください。連絡が要らない建物であっても、作業日と時間帯を伝えておくと、当日の物音や人の出入りについて管理側が説明できる状態になり、話が円滑になります。",
  },
  {
    title: "養生をせずに、共用部で大型の家財を運ぶ",
    body: "共用廊下の壁の角、エレベーターのかご内、エントランスの床は、傷が付きやすく、しかも自分だけの場所ではありません。養生をしないまま大型の家具や家電を運ぶと、わずかな接触で傷が残り、その補修をめぐる話が長引くことがあります。養生を誰がどこまで行うかは建物により定めが異なりますので、事前に管理側と業者の双方に確認してください。自分で運ぶ場合も同じで、毛布や段ボールで角を保護するだけでも違います。重量物の搬出は無理をせず人手を確保してください。",
  },
  {
    title: "ゴミ置き場に、粗大な不用品を勝手に置いていく",
    body: "建物のゴミ置き場に何を出してよいかは、自治体の収集区分と建物の使用細則の両方で決まります。日常のごみは出せても、粗大な家具や家電は対象外という建物は少なくありません。行き場のない物が置かれると、他の居住者や管理側が対応に困ることになります。粗大な物の出し方は自治体の案内で確認し、建物のルールもあわせて管理会社に尋ねてください。家電のうち一部の品目は家電リサイクル法の枠組みで扱われますので、対象や手続きの詳細は自治体や販売店の案内でご確認ください。",
  },
  {
    title: "作業時間帯の制限を確かめず、早朝や夜間に音を出す",
    body: "集合住宅は、床や壁を通して音が伝わります。台車の走行音、家具を床に置く音、人の話し声は、思っている以上に響きます。作業してよい時間帯を確認せずに早朝や夜間に始めると、近隣との関係に影響します。制限の内容は建物により異なりますので、管理規約と管理会社の案内で確認してください。あわせて、当日の朝に両隣と上下の住戸へひと言伝えておくと、受け止め方が変わります。搬出は一日で終わらせようと急ぎがちですが、時間帯の枠に収まる計画を立ててください。",
  },
];

const judgeSigns = [
  "エレベーターに載らない大型の家具や家電があり、階段での搬出になる",
  "階段のみの建物で、上階から重量のある物を下ろす必要がある",
  "共用部の養生や届出の手続きを、自分で段取りする時間がない",
  "エレベーターを使える時間の枠が短く、限られた時間で運び切る必要がある",
  "退去や引き渡しの期限が決まっていて、日程に余裕がない",
];

const faqs = [
  {
    q: "マンションで不用品を搬出するとき、管理組合への届出は必要ですか？",
    a: "必要かどうかは建物により異なります。引っ越しや大型の荷物の搬出について、事前の届出書の提出を求める建物もあれば、口頭の連絡で足りる建物もあります。提出の期限や書式も建物ごとに定められていますので、日程を決める前に管理組合または管理会社に確認してください。賃貸の場合は、貸主や管理を担う会社が窓口になることもあります。連絡先が分からないときは、エントランスの掲示や契約時の書類で確認できることが多いです。",
  },
  {
    q: "エレベーターの養生は、誰が用意するのですか？",
    a: "これも建物により異なります。管理側が養生用の資材を貸し出す建物、業者が持参した資材で行う建物、荷物用として決まった手順が定められている建物があります。業者に依頼する場合は、養生を含めて対応してもらえるかを見積もりの段階で確認し、あわせて管理会社にも誰がどのように行うのが望ましいかを尋ねてください。かごの大きさや積載の制限、利用できる時間の枠も、同じタイミングで確認しておくと段取りが組みやすくなります。",
  },
  {
    q: "搬出の車両は、どこに停めればよいですか？",
    a: "敷地内に一時的に停められる場所があるか、来客用の区画を使えるか、事前の予約が要るかは建物によって変わります。まず管理会社に確認し、使える場所がない場合は、業者にどのように対応するかを相談してください。道路に停める場合の扱いは、周辺の道路事情や交通の状況にも関わります。停める場所が決まらないまま当日を迎えると作業が長引きますので、日程を確定する前に、業者と管理側の双方で認識をそろえておくことをおすすめします。",
  },
  {
    q: "階段しかない建物では、どう段取りすればよいですか？",
    a: "階段のみの建物では、運搬に人手と時間がかかり、踊り場での方向転換ができるかどうかも確認が必要になります。大型の家具は、その場で分解できるか、玄関や階段を通せる大きさかを事前に測っておいてください。手すりや壁の角の養生も、エレベーターのある建物以上に重要になります。無理に運ぶと、けがや共用部の破損につながりますので、重量のある物は自力での搬出にこだわらず、人手を確保するか業者への依頼を検討してください。",
  },
];

const related = [
  { href: "/piano-kinko-hanshutsu/", label: "ピアノ・金庫の搬出", desc: "重量物を運び出すときの注意" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "搬出と手放し方の段取り" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の物の見直し", desc: "運ぶ量を減らす進め方" },
  { href: "/taikyo-katazuke/", label: "退去時の片付け", desc: "引き渡しまでの流れ" },
  { href: "/sagyou-toujitsu-tachiai/", label: "作業当日の立ち会い", desc: "開始前の確認から引き渡しまで" },
  { href: "/mitsumorisho-mikata/", label: "見積もり書の見方", desc: "作業範囲と追加費用の確認点" },
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
    { "@type": "ListItem", position: 2, name: "マンションの不用品搬出の段取り" },
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
    { href: "#kiso", label: "1｜集合住宅の搬出で押さえること" },
    { href: "#merit", label: "2｜事前に確認したい3つの項目" },
    { href: "#houshin", label: "3｜共用部の養生と近隣への配慮" },
    { href: "#steps", label: "4｜搬出を段取りする5ステップ" },
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

      <Breadcrumb items={[{ label: "マンションの不用品搬出の段取り" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          マンションの不用品搬出の段取り｜共用部の養生・管理規約の確認・作業日の調整
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          マンションやアパートから家財を運び出すとき、大変なのは部屋の中の作業だと思われがちです。ところが実際に予定が狂う原因は、玄関から先の共用部にあります。エレベーターが使える時間、養生の担当、車両を停める場所、届出の要否。ここを詰めないまま当日を迎えると、作業が止まってしまいます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、集合住宅ならではの段取りに絞って整理します。管理規約と使用細則の確認、管理組合や管理会社への事前連絡、エレベーターと共用廊下の養生、車両の停車場所、作業時間帯の制限、近隣への配慮、ゴミ置き場の使用可否、階段のみの建物での進め方までを順に見ていきます。なお、規約の内容や手続きは建物ごとに異なりますので、必ずご自身の建物の管理組合・管理会社にご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ルールは建物ごとに違う。一般論ではなく自分の建物の規約と管理会社の案内で確認する</li>
          <li>日程を決める前に、届出の要否・作業時間帯・エレベーターの利用ルールを押さえる</li>
          <li>共用部の養生は誰がどこまで行うかを、管理側と業者の双方で事前にそろえる</li>
          <li>車両の停車場所が決まらないまま当日を迎えないこと。作業が長引く最大の原因になる</li>
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

      <H2 id="kiso" num="1">集合住宅の搬出で押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        戸建てとの違いは、運び出す通り道が自分だけの場所ではないという一点に尽きます。ここから段取りの考え方が変わります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">事前に確認したい3つの項目</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        届出と時間帯、エレベーターと養生、車両の停車場所。この三つは、日程を確定する前に押さえておきたい項目です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">共用部の養生と近隣への配慮</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        養生とは、通り道になる床や壁、設備を保護することです。集合住宅では、保護する範囲が住戸の外まで及びます。具体的には、エレベーターのかご内の壁と床、扉のまわり、乗り場の床、共用廊下の床と壁の角、曲がり角の柱、エントランスの床とガラス面、階段を使う場合は手すりと踏み面と踊り場。このうちどこまでを、誰が、どんな資材で保護するのかは、建物により定めが異なります。管理側が資材を貸し出す建物もあれば、業者が持参する建物もありますので、事前に管理会社と業者の双方に確認し、認識をそろえておいてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        近隣への配慮は、手続きではありませんが、当日の空気を大きく左右します。両隣と上下の住戸、同じ階の住戸に、作業日と時間帯を短く伝えておくだけで、物音の受け止め方が変わります。掲示板への掲示が必要かどうかは管理会社に尋ねてください。また、作業中は玄関前や共用廊下に荷物を長く置かないこと、エレベーターを占有する時間を区切ること、台車を静かに扱うことも大切です。ベランダや玄関まわりに私物を出したままにしないことも、あわせて意識しておきたい点です。<Link href="/veranda-katazuke/" className="text-primary underline underline-offset-2">ベランダの片付け</Link>もご覧ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ゴミ置き場の使い方も、確認しておきたい点のひとつです。日常のごみは出せても、粗大な家具や家電は対象外という建物は少なくありません。自治体の収集区分と建物の使用細則の両方で決まりますので、勝手に置かず、自治体の案内と管理会社の説明を確認してください。粗大ごみの申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>、自治体と業者のどちらに頼むかの線引きは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で扱っています。運び出す物の一覧を先に作っておくと段取りが早くなりますので、<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>もあわせてご覧ください。
      </p>

      <H2 id="steps" num="4">搬出を段取りする5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        規約を読む→管理側に連絡する→業者に建物の条件を伝える→届出と近隣への案内→当日の養生確認と点検。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">規約の内容は建物ごとに異なります。必ず管理側に確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          本記事で挙げた確認項目は、集合住宅で一般に問題になりやすい点をまとめたものです。届出の要否と期限、作業してよい時間帯、エレベーターの利用ルールと養生の担当、車両を停められる場所、ゴミ置き場の使用可否は、建物ごとに定められており、内容は一様ではありません。必ずご自身の建物の管理規約・使用細則を確認し、管理組合または管理会社にお尋ねください。賃貸の場合は貸主や管理を担う会社が窓口になることがあります。共用部の破損など、費用の負担をめぐる話になったときは、管理会社や貸主と話し合い、必要に応じて専門家にご相談ください。契約や請求に不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        当日の流れそのものは、戸建てでも集合住宅でも共通する部分があります。開始前にどんな説明があるのか、作業中に判断が必要になったときはどう連絡するのか、終了時に何を確認するのか。この段取りを知っておくと落ち着いて臨めますので、<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>をご覧ください。ピアノや金庫のような特に重量のある物は、共用部の耐荷重や搬出方法の検討が別に必要になりますので、<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫の搬出</Link>で扱っています。退去に向けた全体の流れは<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去時の片付け</Link>で整理しています。
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
        集合住宅の搬出は、段取りと当日の作業の両方に手間がかかります。次のような状況では、依頼を検討したほうが結果的に無理がありません。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼先を選ぶときは、集合住宅での作業に慣れているか、養生の範囲と資材を説明できるか、届出に必要な情報を出してもらえるかを確認してください。あわせて、廃棄物の収集運搬に必要な許可を確認できること、書面で見積もりを出すこと、質問に具体的に答えることも基準になります。書面の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>で扱っています。依頼先の候補としては<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">お部屋片付け日本一</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。管理規約・使用細則の内容、届出の要否と手続き、作業してよい時間帯、エレベーターの利用ルール、共用部の養生の担当、車両を停められる場所、ゴミ置き場の使用可否は建物ごとに異なりますので、必ずご自身の建物の管理組合・管理会社にご確認ください。賃貸借契約に関わる判断が必要な場合は、貸主や管理を担う会社と話し合い、必要に応じて弁護士等の専門家にご相談ください。廃棄物の分別区分や収集の方法、家電リサイクル法の対象や手続きの詳細は、お住まいの自治体および所管の窓口の案内でご確認ください。片付け・不用品回収の料金および契約の条件は、物量・間取り・建物の構造・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
