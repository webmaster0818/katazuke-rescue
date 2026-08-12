import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/seizen-seiri/";
const TITLE = "生前整理のやり方｜何から始める？元気なうちに進める手順と注意点";
const DESC =
  "生前整理は、元気なうちに持ち物・情報・財産まわりを整理し、これからの暮らしと家族の負担を軽くする取り組みです。遺品整理・老前整理との違い、始めるタイミング、自力で進める5ステップ、やってはいけないNG行動、業者に相談すべきサインまで、初めての方向けに順を追って解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "生前整理とは「自分の意思で行う持ち物と情報の整理」",
    body: "生前整理とは、本人が元気なうちに、家の中の持ち物、写真や書類、デジタルデータ、財産に関する情報などを自分の意思で整理しておく取り組みを指します。亡くなったあとに遺族が行う遺品整理と違い、「これは残したい」「これは手放してよい」という判断を本人自身ができることが大きな特徴です。思い入れのある品の行き先を自分で決められるため、家族が後から判断に悩む場面を減らせます。",
  },
  {
    title: "遺品整理・老前整理との違い",
    body: "遺品整理は亡くなったあとに遺族が行う整理で、故人の意思を確認できないぶん、残す・手放すの判断に時間と精神的な負担がかかりがちです。老前整理は、老後の暮らしやすさを目的に体力のあるうちに物を減らしておく考え方で、生前整理とほぼ重なりますが、生前整理は財産や契約情報の整理まで含めて語られることが多い点が異なります。呼び方の違いにこだわる必要はなく、「元気なうちに自分で整理する」という方向性は共通です。",
  },
  {
    title: "生前整理は「終活」の一部として無理なく進める",
    body: "生前整理は死を意識した後ろ向きの作業ではなく、これからの暮らしを軽くし、家族との話し合いのきっかけを作る前向きな活動として捉えられています。一度に完璧を目指す必要はまったくありません。引き出し1つ、押し入れ1段といった小さな単位から始めて、数か月から数年かけて少しずつ進めるのが現実的です。",
  },
];

const merits = [
  {
    title: "家族の将来の負担が大きく減る",
    body: "物の量が多い家の遺品整理は、遺族にとって時間的にも精神的にも大きな負担になります。生前に物量を減らし、重要な物や書類の場所を伝えておくだけで、家族が将来行う作業は格段に楽になります。実家の片付けを経験した人ほど、自分の生前整理の必要性を実感すると言われるのはこのためです。",
  },
  {
    title: "今の暮らしが安全で快適になる",
    body: "床や通路の物が減ると、つまずきや転倒のリスクが下がり、掃除もしやすくなります。特に高齢期は、家の中の段差や床の物が事故につながりやすいため、生前整理は防災・安全対策としての意味も持ちます。探し物が減り、本当に使う物だけに囲まれた暮らしは、日々の快適さにも直結します。",
  },
  {
    title: "財産・契約情報の整理は残された家族への何よりの助けになる",
    body: "預貯金口座、保険、年金、不動産、サブスクリプション契約などの情報が整理されていないと、家族は手続きのたびに手がかりを探すことになります。一覧をエンディングノートなどにまとめ、保管場所を信頼できる家族に伝えておくだけで、将来の手続きの負担は大きく変わります。なお、遺言書の作成や相続の具体的な判断など法律に関わる内容は、弁護士・司法書士などの専門家や自治体の相談窓口を利用してください。",
  },
];

const steps = [
  {
    title: "整理の目的とゴールを決め、家族に一言伝える",
    body: "最初に「転倒しない家にしたい」「子どもに負担を残したくない」など、自分なりの目的を言葉にしておきましょう。目的が決まると、残す・手放すの判断基準がぶれにくくなります。また、家族に「少しずつ整理を始める」と伝えておくと、勝手に捨てた・捨てられたというすれ違いを防げるうえ、貴重品の扱いなども相談しやすくなります。",
  },
  {
    title: "貴重品・重要書類を先に1か所へまとめる",
    body: "通帳、印鑑、権利証、保険証券、年金関係、契約書類などの重要書類を先に探し出し、専用の箱やファイルに1か所へまとめます。これを最初に行うのは、後の作業で誤って処分するリスクをなくすためです。まとめた場所は信頼できる家族に伝えておきましょう。デジタルの契約やアカウント情報も、一覧にして同じ場所に保管しておくと安心です。",
  },
  {
    title: "「明らかに不要な物」から手放して弾みをつける",
    body: "壊れた家電、何年も着ていない衣類、期限切れの食品や薬、空き箱・紙袋の山など、迷わず不要と言い切れる物から手放します。思い出の品から始めると1つ1つの判断に時間がかかり挫折しやすいため、判断が軽い物で「減った」という実感を先に作るのがコツです。手放し方は自治体の収集、リサイクルショップ、フリマアプリ、寄付などを物に応じて使い分けます。処分ルートの選び方は不用品の処分ルート比較の記事で詳しく解説しています。",
  },
  {
    title: "残す物は「使う場所の近く」に収め、思い出の品は最後に",
    body: "残すと決めた物は、使う場所の近くに戻し、取り出しやすい高さに収めます。収納の上段や奥に押し込む物が多いほど、将来の整理が大変になるためです。写真や手紙などの思い出の品は判断に時間がかかるため最後に回し、「アルバム1冊分」「箱1つ分」など残す量の上限を先に決めてから選ぶと進めやすくなります。",
  },
  {
    title: "財産・契約・デジタル情報の一覧を作り、保管場所を共有する",
    body: "口座や保険、不動産、公共料金・通信・サブスクリプションの契約、スマホやパソコンの扱いについて、一覧（エンディングノートなど市販のノートでも普通のノートでも構いません）にまとめます。パスワードそのものの書き方や保管方法は慎重に検討し、少なくとも「どこに情報があるか」を信頼できる家族と共有しておきましょう。年に1回など、見直しの機会を決めておくと情報が古くなりません。",
  },
];

const ngActions = [
  {
    title: "一度に家全体を片付けようとする",
    body: "生前整理は物量が多く、体力も判断力も使う作業です。週末2日で家全体を終わらせるような計画は挫折のもとになります。引き出し1つ、押し入れ1段のように範囲を区切り、「今日はここだけ」と決めて進めるほうが、結果として確実に前へ進みます。",
  },
  {
    title: "家族に相談せず重要な物まで処分してしまう",
    body: "本人にとって不要でも、家族にとって思い入れのある品や、将来の手続きに必要な書類である場合があります。特に書類・記録類、家族との思い出の品は、処分前に一声かけるのが安全です。逆に、家族が本人の持ち物を本人の同意なく処分するのも、信頼関係を損なう典型的な失敗です。",
  },
  {
    title: "「もったいない」で判断を全部先送りする",
    body: "まだ使える物を捨てるのはもったいないという気持ちは自然なものですが、すべてを保留にすると整理は進みません。もったいないと感じる物こそ、リサイクルショップやフリマアプリ、寄付など「誰かに使ってもらうルート」に乗せることを検討しましょう。手放す罪悪感が減り、判断が進みやすくなります。",
  },
  {
    title: "無許可の回収業者にまとめて引き渡す",
    body: "チラシや巡回トラックで勧誘してくる業者の中には、廃棄物の処理に必要な許可を確認できないものがあり、不法投棄や高額請求のトラブルにつながるおそれがあります。まとまった量の処分を頼む場合は、許可や実績を確認できる業者を選びましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "物量が多く、自分や家族だけでは搬出・処分をやり切れないと感じる",
  "大型家具・家電の運び出しが体力的に難しい",
  "住み替え・施設入居・同居などの期限が決まっており、間に合わせる必要がある",
  "遠方に住む家族だけでは作業時間を確保できない",
  "仕分けから処分まで一括で任せ、短期間で終わらせたい",
];

const faqs = [
  {
    q: "生前整理は何歳から始めるべきですか？",
    a: "決まった年齢はありません。体力と判断力に余裕がある時期ほど楽に進められるため、「まだ早い」と感じるくらいの時期に始めるのが理想的とよく言われます。定年退職、子どもの独立、住み替えといった生活の節目はよいきっかけになります。年齢にかかわらず、引き出し1つからでも始めれば立派な生前整理です。",
  },
  {
    q: "生前整理と遺品整理はどちらを業者に頼むべきですか？",
    a: "どちらも業者に依頼できます。生前整理は本人が立ち会って残す物を指示できるため、仕分けの精度が高く、後悔の少ない整理がしやすいのが利点です。遺品整理業者の多くは生前整理にも対応しています。自分たちでできる範囲と業者に任せる範囲の線引きは、遺品整理を自分で進める方法の記事の考え方が生前整理にも応用できます。",
  },
  {
    q: "生前整理を業者に頼むと費用はどのくらいかかりますか？",
    a: "費用は物量・間取り・搬出条件・作業内容（仕分けの立ち会い有無、買取の併用など）によって大きく異なるため、一律にいくらとは言えません。複数社から見積もりを取り、作業範囲と内訳を比較して判断するのが確実です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
  {
    q: "エンディングノートには何を書けばよいですか？",
    a: "決まった様式はありませんが、財産や契約の一覧（口座・保険・不動産・サブスクリプションなど）、重要書類の保管場所、医療や介護についての希望、家族へのメッセージなどを書くのが一般的です。遺言書と違って法的効力はないため、相続に関わる意思表示をしたい場合は、遺言書の作成について弁護士・司法書士などの専門家や自治体の相談窓口に相談してください。",
  },
];

const related = [
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "自分で行う範囲と業者に任せる線引き" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方", desc: "生前整理にも対応する業者の選び方" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "間取り・作業別の費用の考え方" },
  { href: "/area/tokyo/", label: "東京の片付け業者おすすめ", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "生前整理のやり方" },
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
    { href: "#kiso", label: "1｜生前整理とは？遺品整理・老前整理との違い" },
    { href: "#merit", label: "2｜生前整理のメリットと始めるタイミング" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める生前整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "生前整理のやり方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          生前整理のやり方｜何から始める？元気なうちに進める手順と注意点
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「生前整理を始めたいけれど、何から手を付ければいいのかわからない」「親に勧めたいが、どう切り出せばいいのか」——生前整理という言葉は広まりましたが、実際の進め方を具体的に知る機会は意外と多くありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、生前整理の基本と遺品整理・老前整理との違いを整理したうえで、始めるタイミング、自力で進める5つのステップ、避けるべきNG行動、業者に相談すべきサインまでを解説します。自分の整理を始めたい方にも、親世代に勧めたい方にも役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>生前整理は「元気なうちに、自分の意思で持ち物と情報を整理する」取り組みで、始める年齢に決まりはない</li>
          <li>最初にやるべきは貴重品・重要書類を1か所にまとめること。物の処分はその後でよい</li>
          <li>「明らかに不要な物」から手放し、思い出の品は最後に回すと挫折しにくい</li>
          <li>財産・契約情報の一覧化と保管場所の共有が、家族の将来の負担を大きく減らす</li>
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

      <H2 id="kiso" num="1">生前整理とは？遺品整理・老前整理との違い</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、生前整理という言葉の意味と、よく混同される遺品整理・老前整理との関係を整理しておきましょう。違いがわかると、自分がやるべき範囲が見えやすくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">生前整理のメリットと始めるタイミング</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        生前整理には、将来の家族のためだけでなく、今の自分の暮らしをよくする効果もあります。主なメリットは次の3つです。始めるタイミングに決まりはありませんが、定年退職・子どもの独立・住み替えといった生活の節目は、物と向き合う自然なきっかけになります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        生前整理の進め方の大原則は、「貴重品を先に確保し、判断の軽い物から手放し、思い出の品は最後」という順番を守ることです。この順番を守るだけで、誤って大事な物を処分するリスクと、途中で挫折するリスクの両方を大きく減らせます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、生前整理は一気に終わらせるものではなく、数か月から数年単位で少しずつ進めるものと考えてください。体力のあるうちは自分のペースで進め、大型家具の搬出や大量の処分が必要になった段階で業者の力を借りる、という組み合わせが現実的です。親の生前整理を手伝う場合は、本人の意思を尊重することが何より大切です。進め方の呼吸は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>の記事も参考になります。
      </p>

      <H2 id="steps" num="4">自力で進める生前整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際に手を動かす手順を5つのステップで紹介します。ポイントは「書類が先、物はあと、思い出は最後」です。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        不用品の具体的な手放し先の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で、粗大ごみなど自治体サービスの使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>で解説しています。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        回収業者とのトラブルを避けるためのチェックポイントは、<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事にまとめています。
      </p>

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力にこだわらず、生前整理に対応する片付け業者・遺品整理業者への相談を検討しましょう。本人が立ち会って指示できる生前整理は、業者に任せる場合でも納得感のある仕分けがしやすいのが利点です。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
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
        本記事は一般的な知識の提供を目的としたもので、法律・税務等の個別の助言を行うものではありません。相続や遺言に関わる判断は弁護士・司法書士などの専門家にご相談ください。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
