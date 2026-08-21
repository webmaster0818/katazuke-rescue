import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/tanshin-koureisha-mimamori/";
const TITLE = "離れて暮らす高齢の親の見守りと片付け｜住まいの安全を整える進め方";
const DESC =
  "遠方で一人暮らしをする親の家が、帰省のたびに物で狭くなっている——そう感じたときにどう向き合うか。転倒や火気などの安全確認のポイント、本人を否定しない話し方、地域包括支援センターや民生委員といった相談先の枠組み、そして片付けを段階的に進める手順を整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "物が増えたのではなく、動かせなくなっていることが多い",
    body: "帰省するたびに廊下や部屋が狭くなっている——その原因は、新しい物を買い込んだことより、これまで当たり前にできていた「片付ける動作」が難しくなっていることにある場合が少なくありません。しゃがむ、持ち上げる、重い物を運ぶ、ごみ袋を集積所まで出す。こうした動作は加齢とともに負担が増します。とくにごみ出しは、決められた曜日の朝に、重い袋を持って一定の距離を歩く必要があり、体力が落ちると滞りやすい家事です。本人の意欲の問題として片付けると原因を見誤ります。まず「何ができなくなっているか」を観察するところから始めてください。",
  },
  {
    title: "変化は少しずつ進み、暮らしている本人には見えにくい",
    body: "住まいの状態は、ある日突然変わるわけではありません。新聞や郵便物が一日ずつ積み重なり、使わない物が少しずつ床に置かれ、通り道が数センチずつ狭くなっていきます。毎日そこで暮らしている本人にとっては、その変化は日常の延長にすぎず、自覚しにくいものです。一方、久しぶりに訪れた家族には変化が一目で分かります。この見え方のずれが、「なぜ気づかないのか」という苛立ちと、「急に来て文句を言われた」という反発の両方を生みます。ずれがあること自体を前提にして話を始めると、対立を避けやすくなります。",
  },
  {
    title: "住まいの状態は、生活全体の変化を映す手がかりになる",
    body: "冷蔵庫に期限切れの食品が残っている、同じ物が何個も買われている、郵便物が開封されないまま積まれている、掃除の頻度が落ちている——これらは単なる片付けの問題ではなく、買い物や調理、金銭管理、健康状態など生活全体の変化の表れであることがあります。片付けを「部屋をきれいにする作業」としてだけ捉えると、本当に必要な支援を見落とすことがあります。気になる変化がある場合は、住まいの安全を整えることと並行して、地域の相談窓口に生活面の相談ができることも知っておくと安心です。",
  },
];

const merits = [
  {
    title: "安全の観点1：転倒につながる床まわりを最優先で見る",
    body: "高齢の方の住まいで最初に確認したいのは、床に何が置かれているかです。玄関からトイレ、寝室から洗面所といった夜間に通る動線に、新聞の束、紙袋、電気コード、めくれたマットがあると、つまずきの原因になります。段差の手前に物が置かれていないか、夜に足元が見える明るさが確保されているかも確認してください。ここは本人の同意も得やすい部分です。「これを捨てよう」ではなく「ここを通れるようにしよう」という提案なら、物を手放す話にならないため受け入れられやすくなります。",
  },
  {
    title: "安全の観点2：火気・電気まわりに燃えやすい物を置かない",
    body: "コンロの周囲に新聞紙や紙袋、布巾が積まれていないか、ストーブの前や周囲に洗濯物や衣類が置かれていないか、電気の配線が家具の下敷きになったりコードが束ねられたまま使われたりしていないかを確認します。テーブルタップにたこ足で機器がつながれている場合や、コンセントの周りにほこりがたまっている場合も、点検しておきたい箇所です。これらは物の量の話ではなく安全の話なので、本人に説明しても納得を得やすい部分です。気になる箇所があれば、その場で移動させるだけでも状態は改善します。",
  },
  {
    title: "安全の観点3：水まわりと食品の状態を確認する",
    body: "冷蔵庫の中身、シンクまわり、浴室の床のぬめり、洗面所の湿気は、体調や生活の変化が表れやすい場所です。同じ調味料がいくつも買われている、期限が大きく過ぎた食品が奥に残っている、浴室の床が滑りやすくなっている——こうした点は、健康や事故のリスクに直結します。ただし冷蔵庫の中身を勝手に捨てるのは避けてください。一緒に開けて、期限を一つずつ確認しながら本人に判断してもらう形にすると、以後も自分で管理しやすくなります。浴室の清掃は負担の大きい作業なので、業者に任せる選択肢も含めて検討しましょう。",
  },
];

const steps = [
  {
    title: "指摘から入らず、まず現状を落ち着いて観察する",
    body: "帰省して部屋の様子に驚いても、その場で片付けを始めたり、状態を指摘したりするのは避けてください。まずは一泊でも過ごしながら、どこに物がたまっているか、どの動作が難しそうか、通り道の幅は足りているかを観察します。ごみの日に袋が出せているか、郵便物が処理されているか、食事の準備がどうなっているかも手がかりになります。写真を撮っておくと、離れて暮らす兄弟姉妹と状況を共有するときに役立ちます。本人の前で撮ることに抵抗があるなら、メモに残すだけでも構いません。",
  },
  {
    title: "物の量ではなく「安全と使いやすさ」を入口に話す",
    body: "話を切り出すときは、片付けや処分を主語にしないことが大切です。「夜にトイレへ行くとき、ここが暗くて危ないから明かりを足そう」「この通り道を広くしておくと、荷物を持ったときに楽だと思う」といった形で、本人の生活が楽になる提案として伝えます。長年築いてきた暮らしを否定する言葉は、どんな正論でも反発を生みます。相手の判断を待つ姿勢を保ち、その場で結論が出なくても構わないと考えてください。急かさないことが、次の帰省で協力を得られるかどうかを左右します。",
  },
  {
    title: "同意が得られた範囲から、小さく一か所ずつ手を付ける",
    body: "合意ができたら、家全体ではなく一か所に絞って作業します。玄関の靴、廊下の通り道、寝室からトイレまでの動線、コンロまわりといった安全に直結する場所が優先です。所要時間も短く区切り、本人が疲れる前に終えてください。作業中は「これは何に使う物か」を尋ねる役に徹し、判断は本人に委ねます。片付けの順番の考え方は関連記事でも扱っていますが、高齢の方の住まいでは効率よりも本人の負担の少なさを優先するのが原則です。一度で終わらせず、帰省のたびに一か所ずつ進める形でも十分意味があります。",
  },
  {
    title: "住み続けるための配置に整え、日々の負担を減らす",
    body: "片付けの目的は物を減らすことではなく、本人が安全に暮らし続けられる状態にすることです。よく使う物は腰から目線の高さに移し、しゃがまないと取れない場所や踏み台が必要な場所には日用品を置かない。重い鍋や家電は下段の手前に。手すりや明かりを足す、滑りにくいマットに替えるといった住環境の工夫も効果があります。介護に備えた住まいの整え方は関連記事で詳しく扱っています。ごみ出しが負担になっている場合は、自治体によって高齢者や障がいのある方を対象にした収集の仕組みが用意されていることがあるため、窓口で確認してみてください。",
  },
  {
    title: "家族だけで抱えず、地域の相談先とつながっておく",
    body: "離れて暮らしていると、日常的な見守りには限界があります。多くの市区町村には、高齢者の生活相談を受け付ける地域包括支援センターが設置されており、地域の民生委員が見守りに関わっている場合もあります。介護保険や福祉サービスの利用を検討する段階かどうかも含めて、まずは自治体の高齢福祉の担当窓口に相談してみてください。名称や体制、利用できる仕組みは自治体により異なります。片付けの手が足りない部分については業者に依頼する選択肢もあり、家族が担う範囲と外部に任せる範囲を分けて考えると続けやすくなります。",
  },
];

const ngActions = [
  {
    title: "帰省した勢いで、本人の同意なく処分してしまう",
    body: "限られた滞在日数のなかで片付けようとすると、つい黙って袋に詰めたくなります。しかし無断の処分は、本人にとって「自分の暮らしを勝手に変えられた」という経験になり、強い不信感を残します。以後は家に上げてもらえなくなったり、隠して物をためるようになったりすることさえあります。あきらかなごみや危険な物を取り除くのは別として、本人が価値を感じている物については必ず判断を通してください。時間はかかっても、そのほうが結果的に前へ進みます。",
  },
  {
    title: "「だらしない」「なぜこうなるまで放っておいたのか」と責める",
    body: "心配から出た言葉でも、責める形になれば相手は自分を守る姿勢になります。前述のとおり、片付かない背景には体力や生活動作の変化があることが多く、本人の努力不足とは限りません。責める言葉は問題の解決を遠ざけるだけでなく、体調や困りごとを家族に話しにくくさせます。伝えたいことがあるときは、状態の評価ではなく「一緒にここを通りやすくしよう」といった具体的な提案の形にしてください。当事者を尊重する姿勢が、長い付き合いのなかでは何よりも有効です。",
  },
  {
    title: "家全体を一度に片付けようとして、本人を疲れさせる",
    body: "せっかく帰省したのだからと一日中作業を続けると、本人の体力が先に尽きます。判断を求められ続けること自体も大きな負担です。途中で物が床に広がったまま終われば、かえって危険な状態を残すことになります。作業は一か所ずつ、時間を区切って。今日は玄関だけ、次は廊下だけ、という進め方で構いません。終わったら片付いた状態を一緒に確認し、次にどこをやるかを相談しておくと、次回の作業がスムーズになります。",
  },
  {
    title: "困りごとに気づいても、家族だけで抱え込む",
    body: "生活の変化や体調の不安に気づいたとき、家族だけでどうにかしようとすると、離れて暮らす側の負担が急に重くなります。多くの自治体には高齢者の生活相談を受ける窓口があり、地域包括支援センターや高齢福祉の担当課がその役割を担っています。名称や体制は地域によって異なりますが、まず相談してみることで使える仕組みが見つかることがあります。片付けについても、家族が担う範囲と業者に任せる範囲を分けて考えると、無理なく続けられます。",
  },
];

const judgeSigns = [
  "床が物でふさがり、通り道の確保から始めなければならない",
  "帰省できる日数が限られ、期限内に作業を終えられない",
  "大型の家具や家電を動かす必要があり、家族だけでは運べない",
  "浴室や水まわりの汚れが自力の清掃では落ちない状態になっている",
  "不用品の量が多く、自治体の回収だけでは追いつかない",
];

const faqs = [
  {
    q: "遠方に住んでいて、頻繁に帰省できません。何から始めればよいですか？",
    a: "限られた滞在時間では、家全体ではなく安全に直結する場所から手を付けるのが現実的です。玄関、廊下、寝室からトイレまでの動線、コンロまわりを優先してください。あわせて、地域包括支援センターや自治体の高齢福祉の窓口に、離れて暮らしていることを伝えて相談しておくと、日常的な見守りについて使える仕組みが分かる場合があります。名称や体制は自治体によって異なりますので、まずお住まいの地域の窓口でご確認ください。",
  },
  {
    q: "親が片付けを拒み、話し合いになりません。",
    a: "処分を目的にした話し合いを一度止めるのが得策です。「使いやすくする」「通りやすくする」といった安全と利便の話に切り替えると、物を手放す話にならないため受け入れられやすくなります。それでも進まない場合は、無理に説得せず、次の機会に持ち越して構いません。急かさない姿勢そのものが信頼につながります。親御さんへの声かけの工夫については、関連記事で具体例を交えて解説しています。",
  },
  {
    q: "ごみ出しが負担になっているようです。何か方法はありますか？",
    a: "自治体によっては、高齢の方や障がいのある方を対象に、ごみの収集について個別の対応を用意している場合があります。対象となる条件や申し込みの方法は自治体ごとに異なりますので、お住まいの市区町村の担当窓口でご確認ください。あわせて、粗大ごみのように手続きが必要なものは家族が代わりに申し込むこともできます。日常的なごみを減らすために、家の中に一時的に置いておく場所を決めておくのも有効です。",
  },
  {
    q: "詐欺や強引な勧誘が心配です。何に気をつければよいですか？",
    a: "一人暮らしの高齢の方には、突然の訪問や電話による勧誘が届くことがあります。契約や支払いに関して不安を感じたときや、トラブルになりそうなときは、消費者ホットライン188に電話すると、身近な相談窓口を案内してもらえます。番号を電話機のそばに書いて貼っておくと安心です。片付けを業者に頼む場合も、その場で契約せず、書面の見積もりを受け取って家族と確認してから決める習慣をつけておくとよいでしょう。",
  },
];

const related = [
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/oya-settoku-katazuke/", label: "親への声かけと進め方", desc: "本人を尊重しながら促す方法" },
  { href: "/kaigo-juukankyou-seiri/", label: "介護に備えた住環境の整理", desc: "動線と転倒対策の考え方" },
  { href: "/gomiyashiki-houchi-risk/", label: "放置によるリスク", desc: "火災・健康・住環境への影響" },
  { href: "/shisetsu-nyukyomae-kazai-seiri/", label: "施設入居前の家財整理", desc: "持ち込む物の選定と残す物の整理" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収の注意点", desc: "相談先と確認しておきたいこと" },
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
    { "@type": "ListItem", position: 2, name: "離れて暮らす高齢の親の見守りと片付け" },
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
    { href: "#kiso", label: "1｜片付かなくなる背景を理解する" },
    { href: "#merit", label: "2｜住まいの安全を確認する3つの観点" },
    { href: "#houshin", label: "3｜見守りの体制と相談先の考え方" },
    { href: "#steps", label: "4｜片付けを進める5ステップ" },
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

      <Breadcrumb items={[{ label: "離れて暮らす高齢の親の見守りと片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          離れて暮らす高齢の親の見守りと片付け｜住まいの安全を整える進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          久しぶりに実家へ帰ったら、廊下が新聞や紙袋で狭くなっていた。冷蔵庫に期限の切れた食品が残っていた。郵便物が開封されないまま積まれていた——離れて暮らす親の住まいに変化を感じたとき、多くの方が「どう声をかければいいのか」で立ち止まります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、住まいが片付かなくなる背景の理解、転倒や火気といった安全確認のポイント、本人を否定しない話の切り出し方、地域包括支援センターなど相談先の枠組み、そして帰省のたびに少しずつ進める片付けの手順を整理します。急かさず、当事者の判断を尊重しながら進める前提で組み立てています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>片付かない原因は意欲より「動作の負担」。しゃがむ・運ぶ・ごみを出すが難しくなっていないか観察する</li>
          <li>入口は物の量ではなく安全。夜間の動線、コンロまわり、水まわりから手を付ける</li>
          <li>責めずに提案の形で話す。その場で結論が出なくてよい。急かさないことが次につながる</li>
          <li>家族だけで抱えず、自治体の高齢福祉の窓口や地域包括支援センターに相談先を確保しておく</li>
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

      <H2 id="kiso" num="1">片付かなくなる背景を理解する</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        住まいの状態に驚いたとき、まず必要なのは対処より理解です。なぜそうなったのかを取り違えると、かけるべき言葉も、用意すべき手立ても変わってしまいます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">住まいの安全を確認する3つの観点</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        帰省したときにまず見ておきたいのは、物の多さそのものではなく、事故につながりうる状態があるかどうかです。次の三つの観点で確認すると、優先順位が付けやすくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">見守りの体制と相談先の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        離れて暮らしている以上、家族だけで毎日の様子を把握するのには限界があります。無理に自分たちだけで支えようとすると、帰省のたびに疲弊し、親御さんとの関係もぎくしゃくしがちです。多くの市区町村には、高齢の方やその家族からの生活相談を受け付ける地域包括支援センターが設置されています。介護保険の利用を考える段階でなくても、住まいや生活の心配ごとを相談できる窓口として知っておくと心強い存在です。地域によっては民生委員が見守りに関わっていることもあります。名称や体制、利用できる仕組みは自治体によって異なりますので、まずはお住まいの市区町村の高齢福祉の担当窓口にお問い合わせください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        あわせて、家族の側でも役割分担を決めておくと負担が偏りません。兄弟姉妹がいる場合は、誰がどのくらいの頻度で連絡するか、帰省の予定をどう分けるかを話し合っておきましょう。写真やメモで住まいの状態を共有しておくと、次に帰省する人が同じ説明を繰り返さずに済みます。将来的に介護が必要になる可能性を見据えるなら、住環境の整え方は<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護に備えた住環境の整理</Link>が参考になります。施設への入居を検討する段階になった場合は<Link href="/shisetsu-nyukyomae-kazai-seiri/" className="text-primary underline underline-offset-2">施設入居前の家財整理</Link>で持ち込む物の選び方を扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        気をつけたいのは、片付けを急ぐあまり本人の意思を置き去りにしてしまうことです。住まいは長年の暮らしの積み重ねであり、そこにある物には家族が知らない意味が込められていることもあります。物の量を評価するのではなく、安全に暮らし続けられるかという一点に絞って話すこと。そして、今日決まらなくてもよいと構えておくこと。この二つを守るだけで、話し合いの空気は大きく変わります。実家全体の段取りは<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、切り出し方の工夫は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親への声かけと進め方</Link>で詳しく解説しています。
      </p>

      <H2 id="steps" num="4">片付けを進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、観察する→安全を入口に話す→一か所ずつ手を付ける→住み続けるための配置に整える→相談先とつながる、の5ステップです。一度で終わらせない前提で考えます。
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
        <h3 className="font-bold text-text-primary mb-2">訪問販売や強引な勧誘への備えも一緒に</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          一人暮らしの高齢の方のもとには、突然の訪問や電話による勧誘が届くことがあります。契約や支払いのことで不安を感じたとき、トラブルになりそうなときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。番号を電話機のそばに書いて貼っておく、家族の連絡先を並べて書いておく、といった備えをしておくと安心です。片付けや不用品の回収を業者に頼む場面でも、その場で契約せず、書面の見積もりを受け取って家族と相談してから決める習慣をつけておきましょう。回収をめぐる注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        片付けが進まないまま状態が深刻になると、火災や衛生面のリスクが高まります。放置した場合に何が起こりうるかは<Link href="/gomiyashiki-houchi-risk/" className="text-primary underline underline-offset-2">放置によるリスク</Link>で扱っていますが、当事者を責める材料としてではなく、家族が優先順位を判断する材料として読んでください。不用品の量が多い場合の処分ルートは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>、粗大ごみの申し込みは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>が参考になります。手続きは家族が代わりに行える場合が多く、負担の大きい部分だけを引き受けるという分担も有効です。
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
        家族で担える範囲には限りがあります。次のような状況では、片付け・不用品回収業者への依頼を検討してください。対応できる業者は<Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌の片付け業者</Link>などエリア別の比較記事から探せます。実家のある地域で探すと、当日の立ち会いや相談がしやすくなります。
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
        依頼にあたっては、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。高齢の親御さんが一人で対応する形にせず、家族が立ち会うか、少なくとも見積書を共有できる形にしておくと安心です。依頼先の候補は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴を比較できます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。高齢者向けの相談窓口や支援の仕組み、ごみ収集に関する個別対応の有無・条件は自治体により異なりますので、お住まいの市区町村の窓口でご確認ください。健康や介護に関する判断は医療機関や専門の相談窓口にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
