import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/tenkinzoku-kazai-azuke/";
const TITLE = "転勤の多い暮らしと家財｜預ける・減らす・持ち歩くの選び方";
const DESC =
  "数年ごとの転勤で家財をどう扱うか。会社の制度で保管が用意される場合と自分で預ける場合の違い、預ける・減らす・持ち歩くの三択を比べる判断軸、預ける前にやっておく仕分けと記録、そして「預けたまま忘れる」状態を防ぐ管理の仕組みまでを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "住まいの条件が数年ごとに変わり、家財が合わなくなる",
    body: "転勤の多い暮らしで難しいのは、次の住まいの間取りや収納が事前に分からないことです。今の家では収まっていた食器棚が、次の部屋では搬入経路を通らない。作り付けの収納が広い家から、収納のほとんどない部屋に移る。カーテンの丈が合わない、洗濯機置き場の防水パンのサイズが違う——こうしたずれが数年ごとに起こります。家財が悪いわけでも、選び方が下手なわけでもありません。前提として「住まいに合わせて家財を調整し続ける暮らし」だと捉えると、その都度の判断がしやすくなります。",
  },
  {
    title: "移動のたびに判断を先送りすると、荷物が層になっていく",
    body: "引っ越しの慌ただしさのなかでは、一つひとつを判断する余裕がありません。結果として「とりあえず段ボールのまま」持っていき、次の家でも開けないまま押し入れへ。これが二回、三回と重なると、開けていない箱が層になって蓄積します。中身が分からない箱は、次の引っ越しでも判断できず、そのまま運ばれます。この構造を断つには、移動の前ではなく、落ち着いた時期に開封と仕分けを済ませておくことが有効です。荷造りの直前に判断しようとしないのがコツです。",
  },
  {
    title: "「預ける」は便利だが、放置すると目的がすり替わる",
    body: "荷物を預けるサービスは、住まいの容量と持ち物のずれを埋める有効な手段です。ただし、預けた荷物は日常の視界から消えるため、存在ごと忘れられやすいという弱点があります。何が入っているか分からないまま保管が続き、次の転勤でも「一応そのまま」となれば、保管そのものが目的化してしまいます。預けること自体が悪いのではなく、期限と中身の記録を持たずに預けることが問題です。預ける前に、何を・いつまで・どうなったら引き取るのかを決めておくと、この落とし穴を避けられます。",
  },
];

const merits = [
  {
    title: "判断軸1：使用頻度と次の住まいで使える見込み",
    body: "まず考えたいのは、その物を今後どのくらい使うかです。日常的に使う物は当然持っていきます。問題は「年に数回だが必要」「今は使わないがいずれ使う」という中間層です。ここで有効なのが、次の住まいで使える見込みがあるかという視点です。サイズが合わなければ使えない家具や、地域の気候によって出番のない物は、持ち歩いても保管場所を占めるだけになります。逆に、住まいを選ばずどこでも使える物は、持っていく価値が高いと判断できます。物そのものの良し悪しではなく、汎用性で見るのがポイントです。",
  },
  {
    title: "判断軸2：手放したときに同等の物を用意し直せるか",
    body: "次に確認したいのが、いま手放しても後で用意し直せる物かどうかです。量販店やインターネットで同種の物が入手できる日用品や汎用の家具は、必要になった時点で調達する選択が取れます。一方、一点物、思い出の品、記録として残しておくべき書類、買い直しが難しい趣味の道具などは、預ける・持ち歩くほうが安心です。この線引きをしておくと、「もったいないから全部持っていく」という判断から抜け出せます。判断に迷う物については、保留の箱を作り、次の移動までに結論を出す形にするとよいでしょう。",
  },
  {
    title: "判断軸3：会社の制度で用意されるものと自費の範囲",
    body: "転勤に伴う引っ越しや荷物の保管について、勤務先が制度として支援を用意している場合があります。どこまでが会社の手配で、どこからが自己負担になるのかは、勤務先の規程によって異なります。制度の対象になる範囲、利用できる期間、申請の手順は必ず勤務先の担当部署に確認してください。制度を前提に段取りを組むと、自分で用意すべき部分がはっきりします。なお、本記事では具体的な費用や制度の内容には触れませんので、金額に関わる判断は勤務先の案内と各サービスの提示条件でご確認ください。",
  },
];

const steps = [
  {
    title: "転勤の見込みがある時期に、落ち着いて全体量を把握する",
    body: "荷造りが始まってからでは判断できません。異動の話が出る前でも、年に一度は家全体の持ち物を見渡す機会を作りましょう。押し入れやクローゼットの上段、納戸、ベランダの収納庫など、普段開けない場所を確認します。ここで見つけたいのは、前回の引っ越しから開けていない箱です。中身を確認し、必要な物だけを日常の収納に戻し、不要な物はこの段階で手放します。慌ただしい時期にこの作業を持ち込まないことが、荷物を層にしないための最大のコツです。",
  },
  {
    title: "「持っていく・預ける・手放す」の三つに分ける",
    body: "全体量が把握できたら、物を三つに分けます。日常的に使い、次の住まいでも使える物は持っていく。今は使わないが手放せない物、住まいのサイズによって使えるかどうかが変わる物は預ける候補に。使う見込みがなく、必要になれば用意し直せる物は手放す。この仕分けは、荷造りの前に済ませておくと当日が格段に楽になります。分けきれない物は保留の箱にまとめ、次の移動までに結論を出すと決めておきましょう。判断の基準は前章の三つの軸を使ってください。",
  },
  {
    title: "預ける物は中身を記録し、期限を決めてから預ける",
    body: "預けると決めた物は、箱ごとに中身の一覧を作ります。紙に書いて箱の外側に貼るだけでなく、写真を撮ってスマートフォンに残しておくと、離れた場所からでも確認できます。箱には番号を振り、一覧表と対応させると管理が楽です。同時に「いつまで預けるか」「どうなったら引き取るか」を決めてください。次の転勤まで、あるいは持ち家を構えるまで、といった区切りで構いません。期限を決めておくだけで、目的のない保管が続くのを防げます。預ける先の環境（温度・湿度の管理の有無など）も、預ける物の性質に合っているか確認しましょう。",
  },
  {
    title: "持っていく物は、次の住まいの寸法を確認してから決める",
    body: "赴任先の住まいが決まったら、搬入経路と収納の寸法を確認します。玄関の開口部、廊下の幅、階段の折り返し、エレベーターの寸法、部屋の入口。そして押し入れやクローゼットの内寸、洗濯機置き場、冷蔵庫のスペース。大型の家具や家電は、この確認をしてから持っていくかどうかを決めます。通らない物を運んでから気づくと、当日その場で判断を迫られることになります。カーテンの丈や照明の有無など、部屋ごとに条件が異なる項目も、事前に確認しておくと到着後の買い足しが減ります。",
  },
  {
    title: "手放す物は、期限から逆算してルートを決める",
    body: "手放すと決めた物は、引っ越し日から逆算して段取りを組みます。自治体の粗大ごみは申し込みから収集まで日数がかかることが一般的で、繁忙期はさらに余裕が必要です。買取や譲渡を使う場合も、査定や引き取りの日程調整に時間がかかります。ぎりぎりになって間に合わなければ、置いていくことも運ぶこともできず困ることになります。日程が読めない場合は、点数をまとめて業者に依頼したほうが確実な場面もあります。退去の期限がある賃貸では、原状回復の範囲もあわせて確認しておきましょう。",
  },
];

const ngActions = [
  {
    title: "開けていない箱を、そのまま次の家へ運ぶ",
    body: "前回の引っ越しから一度も開けていない箱を、中身を確認せずに運ぶのは避けたい行動です。運搬の手間と保管場所を使いながら、中身は使われないままになります。しかも次の移動でも同じ判断がされ、箱は層になって増えていきます。忙しい時期に開けるのが難しいなら、落ち着いた時期に一箱ずつでも確認してください。開けてみると、すでに用意し直した物の重複や、使えなくなった物が出てくることが多くあります。",
  },
  {
    title: "次の住まいの寸法を確認せずに大型家具を運ぶ",
    body: "搬入経路や設置場所の寸法を確認しないまま大型の家具・家電を運ぶと、当日その場で入らないことが判明し、返す場所も置く場所もない状態になります。引っ越し当日は時間の余裕がなく、その場での判断は負担が大きいものです。玄関の開口部、廊下の幅、階段の折り返し、エレベーターの寸法、設置場所の内寸を、あらかじめ測っておいてください。二段式の家具や分解できる物は、分けられるかどうかも確認しておくと選択肢が広がります。",
  },
  {
    title: "中身の記録を作らずに荷物を預ける",
    body: "何が入っているか分からない状態で預けると、必要になったときに取り出せず、結局は買い直すことになります。しかも中身が分からない以上、次の転勤でも判断できず、保管が惰性で続きます。箱ごとに中身の一覧を作り、番号を振って写真とあわせて残してください。あわせて、預ける期限と引き取る条件も決めておきます。手間に見えますが、この記録があるかどうかで、預けた荷物が資産になるか負担になるかが分かれます。",
  },
  {
    title: "荷造りの直前に、処分するかどうかを判断しようとする",
    body: "引っ越しの数日前は、時間も気力も足りません。その状態で一つひとつの物と向き合っても、まともな判断はできず、結局は「とりあえず持っていく」に落ち着きます。しかも、そこで処分を決めたとしても、粗大ごみの申し込みや買取の日程が間に合いません。仕分けは移動の直前ではなく、落ち着いた時期に済ませておくもの。この順番を守るだけで、転勤ごとの負担は大きく変わります。",
  },
];

const judgeSigns = [
  "赴任日までの日数が短く、仕分けと処分の時間が取れない",
  "次の住まいに入らない大型家具・家電が複数ある",
  "単身赴任先と自宅の両方で片付けが必要になっている",
  "不用品の量が多く、自治体の回収だけでは期限に間に合わない",
  "退去の期限が決まっていて、残置物を残せない",
];

const faqs = [
  {
    q: "転勤が多い場合、家具は買わずに借りたほうがよいですか？",
    a: "住まいの条件が数年ごとに変わる暮らしでは、汎用性の高い家具を少数持つ、あるいは備え付けの物件を選ぶという考え方があります。家具や家電を借りられるサービスもあり、選択肢の一つになります。ただし、何が向くかは家族構成や赴任の期間、勤務先の制度によって変わります。まずは「次の住まいで使える見込みがあるか」を基準に、手持ちの家具を一つずつ見直すところから始めるとよいでしょう。",
  },
  {
    q: "荷物を預ける場合、何に気をつければよいですか？",
    a: "預ける前に中身の一覧を作り、箱に番号を振って写真と対応させておくことが基本です。あわせて、いつまで預けるか、どうなったら引き取るかを決めておきましょう。預ける先については、温度や湿度の管理があるか、荷物の出し入れの手順、契約の期間や解約の条件を確認してください。衣類や書籍、電子機器など湿気に弱い物を預ける場合は、保管環境の条件が重要になります。条件やサービス内容は事業者により異なりますので、契約前にご確認ください。",
  },
  {
    q: "単身赴任先の荷物と自宅の荷物、どう分ければよいですか？",
    a: "赴任先には、生活に必要な最小限の物を持っていくのが基本です。衣類は季節ごとに入れ替える前提で量を絞り、調理器具や食器は使う分だけに。書類や貴重品は、どちらに置くかを明確に決めておきましょう。赴任先で買い足した物は、期間が終われば処分するか自宅に持ち帰るかを決める必要があります。退去時にまとめて判断すると負担が大きいので、購入時に「終わったらどうするか」を決めておくと後が楽です。",
  },
  {
    q: "引っ越しの前に不用品を処分したいのですが、間に合うか不安です。",
    a: "自治体の粗大ごみは、申し込みから収集まで日数がかかることが一般的で、時期によってはさらに余裕が必要です。買取や譲渡も日程調整に時間がかかります。引っ越し日から逆算して、遅くとも数週間前には申し込みを済ませておくと安心です。日程が読めない場合や点数が多い場合は、まとめて業者に依頼したほうが確実なこともあります。処分ルートの選び方は関連記事で整理しています。",
  },
];

const related = [
  { href: "/tanshin-funin-taikyo-katazuke/", label: "単身赴任先の退去と片付け", desc: "短期間で終える段取り" },
  { href: "/trunk-room-katsuyou/", label: "トランクルームの活用", desc: "預けながら片付けを進める方法" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の荷物の見直し", desc: "逆算スケジュールの立て方" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない家具の搬出と選択肢" },
  { href: "/genjou-kaifuku-katazuke-senbiki/", label: "原状回復と片付けの線引き", desc: "退去時にどこまでやるか" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "自治体・売却・譲渡の使い分け" },
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
    { "@type": "ListItem", position: 2, name: "転勤の多い暮らしと家財" },
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
    { href: "#kiso", label: "1｜転勤の多い暮らしで家財が難しくなる理由" },
    { href: "#merit", label: "2｜預ける・減らす・持ち歩くを比べる3つの軸" },
    { href: "#houshin", label: "3｜家財の総量を決める全体方針" },
    { href: "#steps", label: "4｜段取りを進める5ステップ" },
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

      <Breadcrumb items={[{ label: "転勤の多い暮らしと家財" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          転勤の多い暮らしと家財｜預ける・減らす・持ち歩くの選び方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          数年ごとに住まいが変わる暮らしでは、家財との付き合い方そのものが課題になります。次の部屋に入らない食器棚、丈の合わないカーテン、前回の引っ越しから一度も開けていない段ボール。移動のたびに判断を先送りすると、荷物は層になって増え、引っ越しの負担も年々重くなっていきます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、転勤の多い暮らしで家財を扱う三つの選択肢——預ける、減らす、持ち歩く——を比べる判断軸を整理し、預ける前にやっておく仕分けと記録、次の住まいの寸法確認、そして期限から逆算した処分の段取りまでを順に解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>仕分けは荷造りの直前ではなく、落ち着いた時期に。前回から開けていない箱を先に開ける</li>
          <li>判断軸は「次の住まいで使える見込み」「用意し直せるか」「勤務先の制度の範囲」の三つ</li>
          <li>預けるなら中身の一覧と番号、写真の記録を必ず作り、期限と引き取る条件を決めてから</li>
          <li>大型の家具・家電は、搬入経路と設置場所の寸法を測ってから持っていくかを決める</li>
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

      <H2 id="kiso" num="1">転勤の多い暮らしで家財が難しくなる理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        持ち物が片付かない理由は、家庭ごとに事情が違います。転勤の多い暮らしの場合、原因の多くは「住まいが変わり続けること」と「判断のタイミングを取りにくいこと」に集約されます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">預ける・減らす・持ち歩くを比べる3つの軸</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        三つの選択肢は、どれが優れているというものではありません。物ごとに向き不向きがあるだけです。次の三つの軸に当てはめると、一つひとつの物について答えが出しやすくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">家財の総量を決める全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        転勤の多い暮らしで有効なのは、持ち物の総量そのものに上限を設ける考え方です。たとえば「押し入れ一間分に収まる量」「段ボール何箱分まで」といった枠を家族で決めておくと、新しく買い入れるときにも自然と歯止めがかかります。枠を超えたら、何かを手放すか預けるかを決める。この仕組みがあると、移動のたびに一から悩まずに済みます。汎用性の高い物を少数持つ、家具は備え付けの物件を選ぶ、必要な期間だけ借りるといった選択肢もあり、暮らし方に合わせて組み合わせるとよいでしょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        預ける選択肢を使う場合は、「一時的に逃がす」という位置づけを保つことが大切です。荷物を預けながら片付けを進める方法の考え方は<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルームの活用</Link>で扱っています。預ける先を選ぶときは、温度や湿度の管理があるか、荷物の出し入れがどの程度自由か、契約の期間や解約の条件はどうかを確認してください。衣類、書籍、写真、電子機器などは保管環境の影響を受けやすい物です。サービス内容や条件は事業者により異なりますので、契約の前に提示される条件でご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        減らす選択肢については、引っ越しを機に見直す進め方が<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の荷物の見直し</Link>にまとまっています。単身赴任で二拠点になる場合の考え方は<Link href="/tanshin-funin-taikyo-katazuke/" className="text-primary underline underline-offset-2">単身赴任先の退去と片付け</Link>が参考になります。なお、勤務先が引っ越しや荷物の保管について制度を用意している場合、対象となる範囲や期間、申請の手順は勤務先の規程により異なります。金額や条件に関わることは、必ず勤務先の担当部署と各サービスの提示条件でご確認ください。
      </p>

      <H2 id="steps" num="4">段取りを進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、落ち着いた時期に全体量を把握する→三つに分ける→預ける物を記録する→次の住まいの寸法を確認する→手放す物のルートを決める、の5ステップです。
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
        <h3 className="font-bold text-text-primary mb-2">預けた荷物を「忘れない」ための三つの決めごと</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          預ける荷物が負担にならないようにするには、預ける前に三つを決めておくことです。第一に、箱ごとの中身の一覧と番号。紙に書いて箱に貼り、写真をスマートフォンにも残します。第二に、預ける期限。次の転勤まで、持ち家を構えるまで、といった区切りで構いません。第三に、引き取る条件。期限が来たときに何を基準に判断するかを決めておきます。この三つがあれば、預けたまま存在を忘れる状態を避けられます。年に一度、一覧を見返す日を決めておくとさらに確実です。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放す物のルートについては、状態のよい物は買取や譲渡が向きます。考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>で解説しています。サイズの大きい物は自治体の粗大ごみとして申し込む流れが一般的で、手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。冷蔵庫・洗濯機・エアコン・テレビなどは家電リサイクル法の対象となり、通常の粗大ごみとは別のルートになります。詳しくは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分</Link>で扱っています。賃貸からの退去では、原状回復の範囲を確認しておくと余計な作業を避けられます。<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">原状回復と片付けの線引き</Link>もあわせてご覧ください。
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
        転勤の準備は期限が明確な分、間に合わないリスクも高くなります。次のような状況では、片付け・不用品回収業者への依頼を検討してください。対応できる業者は<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。引っ越しの繁忙期は日程が埋まりやすいので、早めに問い合わせておくと選択肢が広がります。依頼先の候補は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴を比較できます。自治体回収と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。勤務先の転勤に伴う制度の内容・対象範囲・申請手順は勤務先の規程により異なりますので、担当部署にご確認ください。荷物の保管サービスの条件・契約内容は事業者により異なります。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
