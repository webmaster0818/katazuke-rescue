import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/irui-takuhai-kaitori/";
const TITLE = "衣類の宅配買取と処分の使い分け｜送る前に決めておく仕分けの基準";
const DESC =
  "着ない服をまとめて送れる宅配買取は便利ですが、すべての衣類が向いているわけではありません。申し込みから査定・承諾までの一般的な流れ、買取に向く服と向かない服の違い、返送やキャンセルの扱いで確認すべき点、店頭買取やフリマ、寄付、資源回収との使い分けまでを整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "宅配買取は「運ぶ手間」を減らす手段であって、目的ではない",
    body: "宅配買取の利点は、店舗に持ち込まなくても衣類を手放せることにあります。量が多い、近くに店舗がない、外出の時間が取れないといった事情がある場合には、他の方法より現実的です。一方で、集荷を待ち、査定を待ち、結果を確認して承諾するという時間が必ずかかります。片付けを急いでいる場面では、この待ち時間が部屋の中の物量を減らせない期間になります。何を優先するのか、つまり手間を減らしたいのか、早く空間を空けたいのかを先に決めておくと、宅配買取を使うべきかどうかの判断がぶれません。",
  },
  {
    title: "買取に向く服と、そうでない服がある",
    body: "一般に、買取の対象になりやすいのは、状態がよく、季節や流行から大きく外れておらず、需要のある衣類です。逆に、目立つ汚れやほつれがある物、においが強く残っている物、サイズや品質の表示が失われている物、下着や靴下のような衛生上の理由で扱いにくい物は、対象外とされることがあります。どこまでを受け付けるかは事業者ごとに定められており、公式の案内に「取り扱えない品」として一覧が示されているのが一般的です。送る前にこの一覧を読むだけで、無駄な往復を減らせます。",
  },
  {
    title: "査定の結果と返送の扱いは、事業者によって条件が異なる",
    body: "宅配買取では、送った衣類の査定結果を確認したうえで、売るかどうかを決める流れが一般的です。ただし、結果に納得できず返してもらう場合の送料の負担、返送を希望しない場合の扱い、査定の連絡方法や有効期限といった条件は、事業者ごとに定められています。申し込みの前に、この条件を確認しておかないと、思っていた形と違う結果になることがあります。金額や条件をこの記事で断定することはできませんので、必ず利用する事業者の公式の案内と規約でご確認ください。",
  },
];

const merits = [
  {
    title: "整理1：まず「手放す」を決めてから、売り先を考える",
    body: "順番を間違えると片付きません。よくあるのは、売れるかどうかを一着ずつ考えているうちに判断が止まり、結局どれも手放せないという状態です。先に決めるのは「これは着ない」という一点だけにしてください。着ないと決めた服を一か所に集め、その山を後から、売る・譲る・資源として出す・処分する、に振り分けます。この二段構えにすると、判断の負荷が分散し、作業が止まりにくくなります。衣類を仕分ける基準そのものは関連記事で詳しく扱っていますので、迷いが多い方は先にそちらをご覧ください。",
  },
  {
    title: "整理2：送る量と締め切りを、先に見積もっておく",
    body: "宅配買取は、申し込み、梱包資材の受け取り、詰めて発送、査定、結果の確認、承諾または返送という段階を踏みます。それぞれに日数がかかるため、退去日や来客の予定が迫っている場面では間に合わないことがあります。使うと決めたなら、逆算して早めに動くこと、そして間に合わない分は別の方法に回すことを最初から決めておくのが現実的です。段ボールの大きさや箱数の目安が示されている場合もありますので、送る量が多いときは事前に確認しておくと、発送の当日に慌てずに済みます。",
  },
  {
    title: "整理3：状態を整えてから送ると、判断の往復が減る",
    body: "洗濯していない服、しわだらけの服、ボタンが取れたままの服を送ると、状態の評価が下がったり、対象外とされたりすることがあります。手を加えすぎる必要はありませんが、洗ってたたみ、目立つ糸くずを取る程度の準備はしておくと、結果の見通しが立ちやすくなります。付属品がある衣類は、あわせて入れるよう案内されていることもあります。また、ポケットの中身の確認は必ず行ってください。小銭や鍵、カード類が入ったまま送ってしまう例は少なくありません。",
  },
];

const steps = [
  {
    title: "クローゼットの中身を全部出し、着ない服を一か所に集める",
    body: "最初に行うのは、売る・売らないの判断ではなく、着ているかどうかの切り分けです。クローゼットや引き出しの中身を出し、この一年で袖を通した服と、通していない服に分けます。迷った服は「保留」として一つの箱にまとめ、その場で決めなくて構いません。ここで全部を出すのは、量を自分の目で見るためです。同じような服が何着もある、季節が偏っている、といったことは、並べてみて初めて分かります。作業は部屋の一角を空けてから始めると、途中で置き場に困りません。",
  },
  {
    title: "手放すと決めた服を、状態と種類で三つに分ける",
    body: "着ないと決めた服を、状態のよい物、日常使いはできるが売るには向かない物、傷みや汚れが進んだ物の三つに分けます。この分け方が、そのまま売り先の候補につながります。状態のよい物は買取や譲渡の候補、中間の物は寄付や地域の回収の候補、傷んだ物は資源としての回収や処分の候補です。ブランド名やタグの有無、購入からの年数もあわせてメモしておくと、後の判断が早くなります。この段階で厳密に値段を考える必要はありません。分けることが目的です。",
  },
  {
    title: "事業者の取り扱い条件を確認し、送る分を決める",
    body: "宅配買取を利用する場合、事業者の公式の案内で、取り扱う品目と取り扱えない品目、申し込みの方法、梱包資材の有無、査定結果の連絡方法、返送を希望する場合の条件、本人確認に必要な書類を確認します。古物の買取では、本人確認が求められるのが一般的です。条件を読んだうえで、送る分と送らない分を決めてください。ここで「送れない」と分かった服は、その場で別のルートに振り分けます。判断を先送りにすると、また部屋に戻ってしまいます。",
  },
  {
    title: "洗って整え、ポケットを確認してから梱包する",
    body: "送ると決めた服は、洗濯して乾かし、たたんで箱に詰めます。詰める前に、すべてのポケットの中身を確認してください。小銭、鍵、カード、レシート、アクセサリーなどが残っていることがあります。箱の中で衣類が動くと形が崩れるため、隙間ができないように詰め、必要に応じて紙などで埋めます。申し込み時に指定された書類や本人確認の資料がある場合は、案内に従って同封または提出してください。発送の控えや問い合わせ番号は、結果が届くまで保管しておきます。",
  },
  {
    title: "査定結果を確認し、売らない分の行き先を決めておく",
    body: "査定の結果が届いたら、内容を確認して承諾するかどうかを判断します。ここで大切なのは、承諾しない場合の行き先を、あらかじめ決めておくことです。返送してもらうのか、返送を希望しない場合はどう扱われるのか。条件は事業者によって異なるため、申し込みの前に確認しておいてください。返送された服をそのままクローゼットに戻すと、片付けは振り出しに戻ります。戻ってきた服は、寄付や地域の回収、資源としての回収など、次の行き先に回す前提で受け取るとよいでしょう。",
  },
];

const ngActions = [
  {
    title: "取り扱い条件を読まずに、着ない服をまとめて送る",
    body: "衛生上の理由で扱えない品、汚れや傷みが進んだ品、表示が失われた品などは、対象外とされることがあります。条件を読まずに送ると、査定の対象にならないまま返送になったり、返送を希望する場合の条件があとから問題になったりします。事業者の公式の案内には、取り扱う品と取り扱えない品が示されているのが一般的です。数分で読める内容ですので、申し込みの前に必ず確認してください。判断に迷う服は、送らずに手元で別のルートに回すほうが確実です。",
  },
  {
    title: "査定額を期待して、片付けの判断を先送りにする",
    body: "「高く売れるかもしれない」と考えると、手放す判断が止まります。しかし衣類の買取は、状態、季節、需要など複数の要素で決まるもので、送る前に見通すことはできません。片付けを進めたいのであれば、手放すという判断を先に済ませ、その後で売り先を選ぶ順序にしてください。金額を目的にすると、結果が期待と違ったときに服が戻り、また同じ場所を占めることになります。買取はあくまで手放し方の一つで、片付けの成否を決めるものではありません。",
  },
  {
    title: "ポケットの中身を確認しないまま梱包する",
    body: "上着やズボンのポケットには、小銭、鍵、カード、アクセサリー、書類などが残っていることがあります。送ってしまうと取り戻すのに手間がかかり、場合によっては見つからないこともあります。梱包の前に、すべての衣類のポケットを手で確認してください。とくに、長く着ていなかった服やコート類は要注意です。片付けの過程で貴重品が出てきたときの扱いについては、関連記事でも整理しています。あわせて、名前が書かれた衣類やタグにも目を通しておくと安心です。",
  },
  {
    title: "訪問での買取の勧誘に、その場で応じてしまう",
    body: "電話や訪問で「衣類を買い取る」と持ちかけられ、実際には別の品を求められたという相談は珍しくありません。訪問による買取には、法令上のルールが定められており、事業者名や取引の内容を書面で示すことが求められます。急かされてその場で決めない、家に上げる前に事業者名と連絡先を確認する、書面を受け取る、といった対応が基本です。少しでも不安を感じたときや、契約をめぐって困ったときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。",
  },
];

const judgeSigns = [
  "衣類だけで押し入れが埋まり、仕分けの場所すら確保できない",
  "家具や家電など、衣類以外の物も同時に手放す必要がある",
  "退去や施設入居の期限があり、査定を待つ時間がない",
  "故人の衣類が大量にあり、家族だけでは仕分けが進まない",
  "体調や年齢の事情で、詰める・運ぶ作業自体が難しい",
];

const faqs = [
  {
    q: "宅配買取は、どのような流れで進みますか？",
    a: "一般的には、申し込み、梱包資材の受け取りまたは自分での用意、衣類を詰めて発送、事業者による査定、結果の連絡、承諾または返送という流れです。古物の買取では本人確認が求められるのが通常で、必要な書類の種類や提出方法は事業者によって定められています。査定の期間、結果の有効期限、返送を希望する場合の条件は事業者ごとに異なりますので、申し込みの前に公式の案内と規約をご確認ください。",
  },
  {
    q: "買い取ってもらえない服は、どう手放せばよいですか？",
    a: "状態がよく日常的に使えるものは、知人への譲渡、地域の団体による回収、店舗が実施する回収の取り組みなどに回せる場合があります。傷みや汚れが進んだものは、自治体の区分に従って処理します。衣類を資源として集めているか、可燃ごみとして扱うか、雨の日は出せないかといった条件は自治体によって異なりますので、お住まいの市区町村の案内でご確認ください。",
  },
  {
    q: "店頭買取と宅配買取は、どう使い分ければよいですか？",
    a: "その場で結果が分かることを重視するなら店頭、運ぶ手間を減らしたいなら宅配、という整理が基本です。店頭は持ち込みの労力がかかりますが、結果を聞いてすぐ次の判断に移れます。宅配は自宅で完結しますが、発送から結果までに日数がかかります。量が多い場合は、状態のよいものだけを宅配で送り、残りは別のルートに回すという組み合わせも現実的です。",
  },
  {
    q: "家族や故人の衣類も、まとめて送ってよいですか？",
    a: "本人以外の衣類を手放す場合は、事前に持ち主や家族の同意を得ておくことが大切です。故人の衣類については、形見として残したいと考える家族がいることもあるため、送る前に相談してください。相続に関わる財産の扱いに迷う場合は、自己判断で進めず、弁護士や司法書士などの専門家にご相談ください。買取の申し込みにあたっては、本人確認の要件が事業者ごとに定められていますので、あわせてご確認ください。",
  },
];

const related = [
  { href: "/irui-seiri/", label: "服の断捨離のコツ", desc: "衣類を仕分ける基準と処分方法" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用術", desc: "売れる物と処分する物の分け方" },
  { href: "/koromogae-shunou-shikumika/", label: "衣替えの仕組み化", desc: "増やさない収納の作り方" },
  { href: "/gakki-shobun-kaitori/", label: "楽器の処分と買取", desc: "買取・譲渡・処分のルート比較" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
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
    { "@type": "ListItem", position: 2, name: "衣類の宅配買取と処分の使い分け" },
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
    { href: "#kiso", label: "1｜宅配買取を使う前に押さえること" },
    { href: "#merit", label: "2｜送る前にやっておく3つの整理" },
    { href: "#houshin", label: "3｜買取・譲渡・回収・処分の使い分け" },
    { href: "#steps", label: "4｜衣類を手放す5ステップ" },
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

      <Breadcrumb items={[{ label: "衣類の宅配買取と処分の使い分け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          衣類の宅配買取と処分の使い分け｜送る前に決めておく仕分けの基準
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          着ていない服が押し入れを占めている。捨てるのは気が引けるけれど、店舗まで運ぶ体力も時間もない。そんなときに候補に挙がるのが、自宅から送るだけで済む宅配買取です。ただし、すべての衣類が対象になるわけではなく、送ってから戻ってきて、また同じ場所に積まれるという結果になることもあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、宅配買取の一般的な流れ、買取に向く服と向かない服の違い、返送や本人確認など申し込み前に確認しておく条件、そして店頭買取・譲渡・地域の回収・資源としての処分との使い分けまでを順に整理します。なお、査定の基準や手数料、返送の条件は事業者によって異なり、衣類の分別区分は自治体によって異なりますので、具体的な内容は必ず各事業者の公式の案内とお住まいの市区町村の案内でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「着ない」を先に決め、売り先の選択はその後。順番を逆にすると片付けが止まる</li>
          <li>取り扱えない品の一覧、返送の条件、本人確認の要件を申し込み前に確認する</li>
          <li>期限がある片付けでは、査定を待つ日数を見込めるかどうかで使うかを決める</li>
          <li>売らないと決めた分の行き先（譲渡・地域の回収・自治体の区分に従った処分）を先に用意しておく</li>
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

      <H2 id="kiso" num="1">宅配買取を使う前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        便利さの裏側には、日数と条件があります。使う前に知っておくと、期待と結果のずれを小さくできます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">送る前にやっておく3つの整理</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断の順番、日数の見積もり、状態の準備。この三つを先に済ませておくと、往復の手間が減ります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">買取・譲渡・回収・処分の使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        衣類を手放すルートは、大きく四つに整理できます。一つめが買取です。宅配で送る方法と、店舗に持ち込む方法があり、どちらも状態や需要によって扱いが変わります。二つめが譲渡です。知人や家族に渡す、地域の交換の場を利用するといった形で、相手が決まっていれば話は早いのですが、押し付けにならないよう相手の意向を先に確認することが前提になります。三つめが回収です。自治体が衣類を資源として集めている場合や、店舗が実施する回収の取り組み、地域の団体による回収などがあります。四つめが処分で、自治体の区分に従って出す形です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        使い分けの目安は、状態と時間です。状態がよく、時間に余裕があるなら買取や譲渡を検討する余地があります。状態は悪くないが時間がないなら、回収や自治体の区分に従った処分に回すほうが片付けは進みます。傷みや汚れが進んでいるものは、最初から処分の前提で考えて構いません。ここで大切なのは、一着ごとに四つのルートを比べないことです。前の章で分けた三つの山に対して、山ごとに行き先を決めるほうが、判断の回数が減って早く終わります。買取と片付けを組み合わせる全体像は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、衣類を資源として集めているかどうか、集めている場合の出し方（袋の指定、ひもでしばる、雨天時は出さないなど）は自治体によって異なります。可燃ごみとして扱う地域もあります。お住まいの市区町村の案内で確認してから出してください。仕分けの基準そのものに迷いがある場合は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">服の断捨離のコツ</Link>、季節ごとの入れ替えを楽にする仕組みは<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの仕組み化</Link>で整理しています。衣類以外も含めた手放し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>をご覧ください。
      </p>

      <H2 id="steps" num="4">衣類を手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部出す→三つに分ける→条件を確認する→整えて送る→戻る分の行き先を決める。この流れで進めます。
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
        <h3 className="font-bold text-text-primary mb-2">買取の条件と衣類の区分は、事業者・自治体ごとに確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          取り扱う品目と取り扱えない品目、査定の基準や期間、結果の有効期限、返送を希望する場合の条件、本人確認に必要な書類は、事業者によって定められています。本記事では一般的な流れの説明にとどめており、金額や個別の条件についてお答えすることはできません。利用する事業者の公式の案内と規約をご確認ください。また、衣類を資源として集めているか、出し方はどうかは自治体によって異なりますので、お住まいの市区町村の案内でご確認ください。訪問での買取をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        送った後にやっておきたいのは、空いた収納をすぐに埋めないことです。空間ができると新しい服を入れたくなりますが、そこで買い足すと元の量に戻ります。しばらく空けたままにして、本当に足りない物だけを補う。この間隔を置く習慣が、次の片付けを不要にします。片付いた状態を保つ考え方は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">リバウンド防止</Link>、収納用品を増やさずに整える方法は<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの手放し方</Link>で扱っています。押し入れやクローゼットそのものの整理手順は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>が参考になります。
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
        衣類だけの問題であれば自力で進められますが、家全体の片付けと重なると話は変わります。次のような状況では、片付け業者への依頼を検討してください。対応できる業者は<Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌の片付け業者</Link>や<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡の片付け業者</Link>などエリア別の比較記事から探せます。
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
        片付け業者の中には、買取を併せて扱う事業者もあります。その場合、買取に必要な許可を持っているか、査定の結果をどのように示すかを確認しておくと安心です。廃棄物の収集運搬に必要な許可とは別のものですので、両方を確認できる事業者を選んでください。料金は物量・間取り・作業内容・地域によって異なるため、作業前の見積もりで総額と作業範囲を書面にしてもらい、複数社を比較するのが確実です。依頼先の候補としては<Link href="/review/otasuke-usagi/" className="text-primary underline underline-offset-2">おたすけうさぎ</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。買取の対象品目・査定の基準・手数料・返送の条件・本人確認の要件は事業者により異なりますので、必ず利用する事業者の公式の案内と規約でご確認ください。衣類を資源として集めているかどうか、出し方の指定は自治体により異なりますので、お住まいの市区町村の案内でご確認ください。故人や家族の衣類を手放す場合は、事前に関係する方の同意を得てください。相続財産の扱いに迷う場合は、弁護士・司法書士などの専門家にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
