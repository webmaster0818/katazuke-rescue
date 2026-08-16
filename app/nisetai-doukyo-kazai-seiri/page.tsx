import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/nisetai-doukyo-kazai-seiri/";
const TITLE = "二世帯同居前の家財整理｜双方の荷物を減らして統合する段取り";
const DESC =
  "二世帯同居や親との同居を始めるとき、避けて通れないのが2世帯分の家財の整理・統合です。冷蔵庫や洗濯機など重複する家電・家具の残し方、共有と個人スペースの区分、親世帯の家財を尊重する進め方、収納量の把握から引っ越し当日までの5ステップ、相手世帯の物を勝手に処分するなどのNG行動、物量が多い場合の業者活用までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "同居は「2世帯分の家財」を「1軒分の収納」に収める作業",
    body: "二世帯同居の家財整理が大変なのは、単純な引っ越しと違い、2つの完成した家庭の家財を1つの家に収める必要があるからです。冷蔵庫・洗濯機・食器棚・ソファなど、どの家庭にも一通りそろっている物が丸ごと重複します。完全分離型の二世帯住宅でない限り、収納量は2軒分の合計より確実に少なくなるため、「双方が荷物を減らす」ことが同居成立の物理的な前提になります。この現実を両世帯で早めに共有することが出発点です。",
  },
  {
    title: "「どちらの物を残すか」は感情の問題でもある",
    body: "重複した家電・家具のどちらを残すかは、性能や新しさだけでは決められません。長年使ってきた家財には愛着があり、「自分の物ばかり処分される」と感じれば、同居前から関係にしこりが残ります。特に親世帯にとって、家財は人生とともにあった物です。効率だけで判断を押し切らず、「よく使う人の使いやすさ」「思い入れの強さ」も考慮して、双方が納得できる決め方をすることが、同居後の関係のためにも重要です。",
  },
  {
    title: "期限が明確だからこそ、逆算の計画が効く",
    body: "同居の家財整理には、引っ越し日・リフォーム完了日という明確な期限があります。期限があること自体は、片付けを前に進める追い風です。ただし、2世帯分の仕分け・処分は想像以上に時間がかかり、特に大型家電・家具の処分は引き取りの手配に日数が必要です。直前になって「処分が間に合わない」となるのが典型的な失敗パターンなので、遅くとも引っ越しの2〜3か月前には整理を始め、大型品の行き先を早めに確定させましょう。",
  },
];

const merits = [
  {
    title: "考え方1：重複家電は「新しさ・容量・設置場所」で客観的に選ぶ",
    body: "冷蔵庫・洗濯機・電子レンジなどの重複家電は、(1)製造年が新しいか、(2)同居後の人数に合った容量か、(3)新居の設置スペースに収まるか、の3点で比較すると判断しやすくなります。世帯が合流すると食品や洗濯物の量は増えるため、大きいほうを残すのが合理的なことも多いです。手放す側の家電は、家電リサイクル法の対象品目（冷蔵庫・洗濯機など）の扱いに注意が必要です。処分ルートは家電リサイクル法対象品の処分方法で確認してください。",
  },
  {
    title: "考え方2：新居を「共有・親世帯・子世帯」の3ゾーンに分けて割り当てる",
    body: "家財の行き先を決める前に、新居の間取りを「共有スペース（キッチン・リビングなど）」「親世帯の個人スペース」「子世帯の個人スペース」に区分し、それぞれの収納量を把握します。共有スペースに置く物は両世帯で協議して決め、個人スペースの物は各世帯の裁量に任せる、というルールにすると、もめごとが大幅に減ります。「相手のスペースの物には口を出さない」という取り決めは、同居後の暮らしのルールとしてもそのまま活きます。",
  },
  {
    title: "考え方3：決め切れない物は「一時保管」で先送りする選択肢もある",
    body: "思い出の品や、手放す決心がつかない家具は、無理に引っ越し前に結論を出す必要はありません。トランクルームなどの一時保管を使えば、「処分か持ち込みか」の二択を「保留」にでき、同居開始後に落ち着いて判断できます。ただし保管には費用がかかり続けるため、「半年後に見直す」など期限を決めて使うのがコツです。活用方法はトランクルームを活用した片付けの記事で詳しく解説しています。",
  },
];

const steps = [
  {
    title: "新居の間取り・収納量を把握し、3ゾーンに区分する",
    body: "最初に、新居（または同居する家）の間取り図を用意し、共有・親世帯・子世帯の3ゾーンに区分して、それぞれの収納量を把握します。リフォームを伴う場合は、完成後の収納の寸法も確認しておきましょう。「入る量」が分かって初めて、「減らすべき量」が見えてきます。このゾーン分けは両世帯で一緒に行い、共有スペースの使い方のイメージをすり合わせておくと、後の判断がスムーズになります。",
  },
  {
    title: "両世帯で家財をリストアップし、重複品を洗い出す",
    body: "次に、両世帯がそれぞれ大型家財（家電・家具）をリストアップし、突き合わせて重複品を洗い出します。冷蔵庫・洗濯機・テレビ・食器棚・ダイニングセット・ソファなどが典型的な重複品です。リストには製造年・サイズ・使用状況をメモしておくと、どちらを残すかの判断材料になります。小物や衣類・食器は各世帯で「新居の自分のスペースに入る量」まで各自で減らす、と分担を決めましょう。",
  },
  {
    title: "残す物を両世帯で協議して決める",
    body: "重複品について、「新しさ・容量・設置可否」の客観基準と「愛着・使い勝手」の感情面の両方を考慮しながら、どちらを残すかを決めていきます。大切なのは、どちらかの世帯に判断を押し付けず、必ず両世帯で話し合うことです。譲れない物がお互いにある場合は、個人スペースに置く・一時保管に回すなどの逃げ道も使いましょう。この協議の過程自体が、同居後の意思決定の練習にもなります。",
  },
  {
    title: "手放す家財の処分・売却を早めに手配する",
    body: "手放すと決めた家財は、引っ越しの1〜2か月前から行き先の手配を始めます。状態のよい家具・家電は買取や譲渡へ、冷蔵庫・洗濯機など家電リサイクル法対象品は販売店の引き取りなど定められたルートへ、その他は自治体の粗大ごみへ、と振り分けます。粗大ごみは申し込みから収集まで日数がかかる地域も多いため、早めの予約が肝心です。物量が多い場合は、不用品回収業者にまとめて依頼する方法も検討しましょう。",
  },
  {
    title: "引っ越し・搬入は「共有スペースから」配置する",
    body: "引っ越し当日は、共有スペースの大型家財から先に配置し、各世帯の個人スペースの荷物は各世帯主導で搬入します。段ボールには「共有／親／子」とゾーン名を書いておくと、搬入が混乱しません。同居開始後は、共有スペースに物を増やすときは両世帯で相談する、というルールを続けると、スペースの取り合いを防げます。開梱しながら「やはり不要だった物」が出てきたら、ため込まずその都度手放しましょう。",
  },
];

const ngActions = [
  {
    title: "相手世帯の物を本人に無断で処分する",
    body: "「どうせ使っていないから」と、相手世帯の家財を無断で処分するのは絶対にやめてください。たとえ子ども側から見て不要な物でも、親世帯には大切な物かもしれません。無断処分は信頼関係を深く傷つけ、同居生活そのものに影を落とします。これから何十年と続くかもしれない同居の入り口だからこそ、「自分の物の判断は自分がする」という原則を双方が守ることが大切です。親が物を手放したがらない場合の向き合い方は、物を捨てない親への声かけの記事を参考にしてください。",
  },
  {
    title: "「とりあえず全部持ち込んで、住みながら整理する」",
    body: "判断を先送りして2世帯分の荷物を全部新居に運び込むと、開かずの段ボールが廊下や空き部屋を占領し、新生活が物置の中で始まることになります。住み始めてからの整理は、日常に追われて確実に停滞します。しかも運搬費は物量に応じてかかるため、不要な物を運ぶだけ費用の無駄です。「減らしてから運ぶ」が大原則。引っ越し前の荷物の減らし方は引っ越し前の断捨離で詳しく解説しています。",
  },
  {
    title: "大型家電・家具の処分手配を引っ越し直前まで放置する",
    body: "冷蔵庫・洗濯機などの家電リサイクル法対象品や大型家具は、処分の手配に日数がかかります。自治体の粗大ごみは予約制で収集日が先になることが多く、販売店の引き取りも日程調整が必要です。直前に慌てると、引っ越し日に処分が間に合わず、旧居に残す・新居に無理やり運ぶという事態になりがちです。大型品の行き先確定と手配は、引っ越しの1〜2か月前までに終えておきましょう。",
  },
  {
    title: "収納の割り当てを曖昧なまま同居を始める",
    body: "「空いているところに適当に入れよう」と収納の割り当てを決めずに同居を始めると、共有スペースの取り合いや「勝手に物を動かされた」という不満の原因になります。物の配置をめぐる小さな摩擦は、同居生活のストレスとして蓄積しがちです。どの収納をどちらが使うか、共有部分に物を置くときのルールはどうするかを、荷物を運び込む前に決めておくこと。物理的な線引きの明確さが、良好な同居関係を支えます。",
  },
];

const judgeSigns = [
  "2世帯分の大型家具・家電の処分が多く、自力の搬出・手配では期限に間に合わない",
  "親世帯の家が遠方にあり、整理のために何度も通うのが難しい",
  "実家側の物量が多く、仕分けから手伝ってほしい",
  "リフォームや解体の日程が決まっており、家財の撤去期限が動かせない",
  "旧居を空き家として残すか売却するかで、残置物の整理も必要になっている",
];

const faqs = [
  {
    q: "家財の整理はいつから始めればよいですか？",
    a: "遅くとも引っ越し（同居開始）の2〜3か月前には始めるのがおすすめです。2世帯分の仕分けは想像以上に時間がかかり、大型家電・家具の処分は引き取り手配に日数が必要です。リフォームを伴う場合は、着工前に親世帯の家財移動が必要になることもあるため、工事日程と合わせて逆算しましょう。早く始めるほど、話し合いの時間に余裕が生まれます。",
  },
  {
    q: "冷蔵庫や洗濯機が2台ずつあります。両方持ち込むべきですか？",
    a: "設置スペースと使い方次第です。完全分離型の二世帯住宅なら2台ずつ使う選択もありますが、キッチン・水回りを共有する場合は1台に絞るのが一般的です。残す1台は「新しさ・容量・設置可否」で選び、世帯合流後の人数に合った容量かも確認しましょう。手放す側は家電リサイクル法の対象のため、販売店の引き取りなど定められたルートで処分します。",
  },
  {
    q: "親が家財を手放したがらず、整理が進みません。",
    a: "親世帯にとって家財は人生とともにあった物であり、手放しがたいのは自然なことです。効率で押し切らず、「新居のこのスペースに入る分は全部持っていける」と枠を示して、何を持っていくかを本人に選んでもらう形にすると進みやすくなります。決め切れない物は一時保管で保留にする方法もあります。声かけの工夫は物を捨てない親への片付けの声かけで詳しく解説しています。",
  },
  {
    q: "同居で空き家になる実家（旧居）はどうすればよいですか？",
    a: "売却・賃貸・保有のいずれの場合も、中の残置物の整理が必要になります。使う予定のない家に家財を残したままにすると、劣化や管理の負担が増すため、同居の家財整理と同じタイミングで方針を決めるのが効率的です。空き家の片付けと管理の進め方は、空き家の片付けの記事で詳しく解説しています。相続が絡む場合は相続した家の片付けも参考にしてください。",
  },
];

const related = [
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/oya-settoku-katazuke/", label: "物を捨てない親への声かけ", desc: "本人を尊重した進め方のコツ" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離", desc: "荷物を減らす逆算スケジュール" },
  { href: "/review/kataduke-nihonichi/", label: "片付け日本一の評判", desc: "物量の多い片付けに対応する業者" },
  { href: "/area/saitama/", label: "埼玉の片付け業者比較", desc: "埼玉から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "二世帯同居前の家財整理" },
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
    { href: "#kiso", label: "1｜二世帯の家財整理が難しい3つの理由" },
    { href: "#merit", label: "2｜家財統合の3つの考え方" },
    { href: "#houshin", label: "3｜始める前の全体方針" },
    { href: "#steps", label: "4｜家財整理・統合の5ステップ" },
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

      <Breadcrumb items={[{ label: "二世帯同居前の家財整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          二世帯同居前の家財整理｜双方の荷物を減らして統合する段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          親との同居や二世帯住宅への住み替えが決まったとき、最初に立ちはだかるのが「2世帯分の家財をどう1つの家に収めるか」という問題です。冷蔵庫も洗濯機も食器棚も2つずつ。どちらを残すかには、性能だけでなく愛着という感情も絡みます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、二世帯の家財整理が難しい理由、重複品の選び方と新居のゾーン分けという統合の考え方、収納量の把握から引っ越し当日までの5ステップ、両世帯の関係を損なうNG行動、業者に任せる判断基準までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>先に新居を「共有・親世帯・子世帯」の3ゾーンに分け、収納量から逆算して減らす</li>
          <li>重複家電は「新しさ・容量・設置可否」で客観的に、感情面にも配慮して両世帯で決める</li>
          <li>大型品の処分手配は引っ越し1〜2か月前まで。「減らしてから運ぶ」が大原則</li>
          <li>相手世帯の物の無断処分は絶対NG。決め切れない物は一時保管で保留も可</li>
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

      <H2 id="kiso" num="1">二世帯の家財整理が難しい3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        通常の引っ越しとは何が違うのか。難しさの正体を最初に押さえておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">家財統合の3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「どちらの物を残すか」でもめないために、判断の枠組みを先に用意しておきます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「自分の物の判断は自分の世帯がする」「共有部分は必ず両世帯で決める」の2つです。効率を優先して一方が主導しすぎると、片付けは進んでも関係にしこりが残ります。同居は片付けのゴールではなくスタートです。家財整理の進め方そのものが、同居後の関係づくりの第一歩と考えましょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        各世帯での荷物の減らし方は<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>を、不用品の行き先の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>を参考にしてください。親世帯の整理が進まない場合は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">物を捨てない親への声かけ</Link>で解説している「本人に決定権を残す」進め方が有効です。介護を見据えた同居であれば<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護に備えた住環境整理</Link>もあわせてどうぞ。
      </p>

      <H2 id="steps" num="4">家財整理・統合の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「収納量の把握→リスト化→協議→早めの処分手配→ゾーン別搬入」の流れを守ることです。
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
        次のいずれかに当てはまる場合は、自力にこだわらず業者への相談を検討しましょう。期限のある片付けは、早めの相談が選択肢を広げます。
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
        物量が多い場合は、仕分けから搬出・処分まで対応する<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">片付け日本一</Link>のような片付け業者や、トラック単位で回収する不用品回収業者が候補になります。回収を依頼する際は、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。業者選びの基本は<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。家電リサイクル法対象品の引き取り方法や粗大ごみのルールは、店舗・自治体により異なるため、必ず引き取り先・お住まいの市区町村の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
