import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/pc-sumaho-data-shoukyo/";
const TITLE = "パソコン・スマホのデータ消去と処分方法｜初期化だけで手放さないための手順";
const DESC =
  "パソコン・スマホを処分する前に必要なデータ消去の考え方と一般的な手順、PCリサイクル・小型家電リサイクル法という処分制度の枠組み、買取・下取り・回収ルートの使い分けを解説します。ゴミ箱を空にする・初期化するだけで手放すことの危険性、SIMカードやアカウント連携の解除、処分前チェックリストまでをまとめました。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「初期化した」「ゴミ箱を空にした」だけでは消えていないことがある",
    body: "パソコンでファイルを削除してゴミ箱を空にしても、消えるのは「ファイルの場所を示す情報」だけで、データ本体はディスク上に残っていることがあります。専用ツールを使えば復元できてしまう可能性があるため、住所録・写真・ネットバンキングの記録などが入った端末をそのまま手放すのは危険です。処分・売却の前には、単なる削除ではなく「データ消去」と呼ばれる、復元を困難にする処理を行うことが基本になります。",
  },
  {
    title: "処分ルートは制度で決まっている：PCリサイクルと小型家電リサイクル法",
    body: "家庭のパソコンは、資源有効利用促進法に基づくメーカー回収（いわゆるPCリサイクル）の枠組みで引き取られるのが基本ルートです。また、パソコン・スマホ・タブレットなどは小型家電リサイクル法の対象品目でもあり、自治体の回収ボックスや国の認定事業者による回収を利用できる場合があります。どの窓口が使えるか、対象品目や出し方の条件は自治体・メーカーにより異なるため、お住まいの自治体の案内と各メーカーの公式サイトで確認してください。費用の有無や条件も窓口ごとに異なります。",
  },
  {
    title: "データ消去の基本：スマホは「暗号化＋初期化」、パソコンは「消去機能か物理破壊」",
    body: "近年のスマホは記録データが暗号化されている機種が多く、各種アカウントからサインアウトしたうえで工場出荷状態に初期化するのが一般的な消去手順とされています。パソコンは、OSに搭載された消去オプションや専用の消去ソフトを使う方法のほか、起動しない端末ではストレージを取り出して物理的に破壊する方法もあります。ただし、確実な手順は機種やOSのバージョンによって異なるため、必ずメーカー公式サイトのサポート情報で自分の機種の手順を確認してから実行してください。",
  },
];

const merits = [
  {
    title: "まだ使える端末：買取・下取りに出すなら消去とロック解除をセットで",
    body: "動作する端末は、買取店・下取りプログラム・フリマなどで手放す選択肢があります。その際は、データ消去に加えて「端末を探す」機能などの紐付け解除、各種アカウントからのサインアウトが必須です。解除を忘れると、次の利用者が使えないだけでなく、自分のアカウント情報が残るリスクにもなります。片付けと買取の併用の考え方は、リサイクルショップ・買取の併用の記事も参考になります。",
  },
  {
    title: "古い・不要な端末：メーカー回収や小型家電回収ボックスで処分",
    body: "使い道のない古いパソコンはメーカー回収（PCリサイクル）へ、スマホや小型のデジタル機器は自治体の小型家電回収ボックスや認定事業者の回収サービスが処分の候補になります。自治体によっては役所や家電量販店に回収ボックスが設置されており、投入できるサイズ・品目が決まっています。いずれの場合も、回収に出す前に自分でデータ消去を済ませておくのが原則です。受付条件は窓口により異なるため、事前に公式案内を確認しましょう。",
  },
  {
    title: "故障して起動しない端末：無理に操作せず、消去方法ごと相談する",
    body: "電源が入らない・画面が割れて操作できない端末は、画面上での初期化ができません。パソコンならストレージを取り外して物理破壊する方法がありますが、分解に不安がある場合は、データ消去サービスを提供するメーカーや専門事業者に相談する方法もあります。バッテリーが膨らんでいる端末は発火の危険があるため、自分で分解せず、自治体窓口やメーカーに扱い方を確認してください。大量の機器をまとめて処分したい場合は、不用品回収業者に消去済みの端末の搬出を任せる使い分けも有効です。",
  },
];

const steps = [
  {
    title: "必要なデータをバックアップし、新しい端末へ移行する",
    body: "消去してから「あの写真が残っていない」と気づいても取り返しがつきません。写真・連絡先・認証アプリ・LINEなどのトーク履歴・有料アプリの引き継ぎ情報を洗い出し、クラウドや新端末、外付けストレージへ移行します。特に二段階認証のアプリは、先に新端末へ移しておかないと各種サービスにログインできなくなるため、最優先で確認してください。",
  },
  {
    title: "各種アカウントをサインアウトし、端末との紐付けを解除する",
    body: "「端末を探す」系の機能やアクティベーションロック、キャリア・メーカーのアカウント連携を解除し、サブスクリプションの端末登録も見直します。SIMカード・SDカードは必ず取り出し、SIMは契約先の案内に従って処分します。この工程を飛ばすと、消去後も端末がロックされたままになったり、カード内の個人情報が残ったまま手放してしまう原因になります。",
  },
  {
    title: "メーカー公式の手順を確認してデータ消去を実行する",
    body: "スマホは設定メニューからの初期化（工場出荷状態に戻す）、パソコンはOS標準の消去オプションや消去ソフトの利用が一般的ですが、確実な方法は機種・OSにより異なります。メーカー公式サイトのサポートページで「廃棄・譲渡時のデータ消去」の案内を確認し、その手順どおりに実行してください。消去後は、初期設定画面になっているかを確認しておくと安心です。",
  },
  {
    title: "端末の状態に合わせて処分ルートを選ぶ",
    body: "動作品は買取・下取り、不要品はメーカー回収や小型家電回収ボックス、故障品はメーカーや専門窓口への相談と、状態でルートを選びます。自治体によって小型家電の回収方法は異なるため、公式サイトで対象品目と回収場所を確認しましょう。街中を巡回する無料回収や、許可の確認できない回収業者に安易に渡すのは避けてください。処分ルート全体の考え方は不用品の処分ルート比較の記事にまとめています。",
  },
  {
    title: "充電器・ケーブル・箱などの周辺機器もまとめて整理する",
    body: "端末を手放すと、専用の充電器・ケーブル・ケース・空き箱が不要品として残ります。売却するなら付属品が揃っているほうが有利なため、先に箱と付属品を確認しましょう。処分する場合、ケーブル類は小型家電回収の対象になることが多い一方、自治体により分別が異なります。モバイルバッテリーや電池は発火リスクから出し方が厳格に決まっていることが多いため、分別が難しいごみの記事を参考に、自治体の案内を確認してください。",
  },
];

const ngActions = [
  {
    title: "初期化やファイル削除だけで「消えた」と思い込んで手放す",
    body: "古いパソコンでは、ファイル削除やフォーマットだけではデータ本体が残り、復元される可能性があります。個人情報・仕事のデータ・写真が入っていた端末は、メーカーが案内する消去手順や消去ソフト、物理破壊など、復元を困難にする方法で消去してから手放すのが原則です。売却時は買取店の消去サービスの有無も確認し、任せる場合でも自分での消去を済ませておくと二重の備えになります。",
  },
  {
    title: "SIMカード・SDカードを入れたまま処分する",
    body: "本体を初期化しても、SDカード内の写真やファイルはそのまま残ります。SIMカードにも契約に関わる情報が含まれるため、取り出し忘れは情報流出の原因になります。手放す前に必ずカードスロットを確認し、SDカードは自分で保管または消去、SIMカードは契約先の案内に従って返却・処分してください。ケースの内側やスタンドの裏にメモを挟んでいないかも合わせて確認しましょう。",
  },
  {
    title: "可燃ごみ・不燃ごみに混ぜて出す",
    body: "パソコンは家庭ごみとしての収集対象外としている自治体が多く、スマホなどの小型家電も分別ルールが定められています。特に内蔵のリチウムイオン電池は、収集車や処理施設での発火事故の原因として全国的に注意喚起されています。通常のごみに混ぜず、小型家電回収ボックスやメーカー回収など、決められたルートで出してください。出し方に迷ったら自治体窓口に確認するのが確実です。",
  },
  {
    title: "許可の確認できない回収業者・無料回収に渡す",
    body: "データの入った機器を、身元や許可の確認できない回収業者に渡すのは、情報面でも廃棄物処理の面でもリスクがあります。回収後の機器がどう扱われるか追跡できず、不法投棄や情報流出につながった事例も注意喚起されています。業者に依頼する場合は、会社情報と必要な許可を確認できる業者を選び、不安があれば契約前に消費者ホットライン188や自治体窓口に相談してください。見分け方は違法業者の見分け方の記事で解説しています。",
  },
];

const judgeSigns = [
  "処分したいパソコン・スマホが複数台あり、他の不用品もまとめて手放したい",
  "故障・画面割れで操作できず、自分ではデータ消去の実行が難しい",
  "遺品や実家の片付けで出てきた端末で、パスワードや契約状況がわからない",
  "引っ越し・退去の期限があり、分別や持ち込みの時間が取れない",
  "バッテリーの膨張など、自分で触るのが不安な状態の端末がある",
];

const faqs = [
  {
    q: "スマホは初期化だけで本当に大丈夫ですか？",
    a: "近年のスマホはデータが暗号化されている機種が多く、アカウントのサインアウトと紐付け解除を済ませたうえで工場出荷状態に初期化するのが、一般的に案内されている消去手順です。ただし機種・OSにより推奨手順は異なるため、必ずメーカー公式サイトの「廃棄・譲渡時」の案内を確認してください。SDカード・SIMカードの取り出しも忘れずに行いましょう。",
  },
  {
    q: "電源が入らないパソコンのデータ消去はどうすればいいですか？",
    a: "画面上での操作ができないため、ストレージ（HDD・SSD）を取り出して物理的に破壊する方法か、メーカーや専門事業者のデータ消去サービスに相談する方法が一般的です。分解に慣れていない場合は無理をせず、メーカー公式サポートに廃棄時の案内を確認するのが安全です。消去後の本体はPCリサイクルの枠組みで回収を依頼できます。",
  },
  {
    q: "バッテリーが膨らんだスマホ・モバイルバッテリーはどう処分しますか？",
    a: "膨張したリチウムイオン電池は発火の危険があるため、自分で分解したり、通常のごみに混ぜて出したりしてはいけません。扱い方や回収窓口は地域により異なるため、自治体窓口やメーカー、購入店に確認してください。回収までの間は、高温になる場所を避けて保管しましょう。電池類の分別の考え方は当サイトの分別が難しいごみの記事でも解説しています。",
  },
  {
    q: "遺品整理で出てきたパソコン・スマホはどう扱えばいいですか？",
    a: "故人の端末は、消去の前に「中に必要な情報がないか」の確認が先です。契約中のサービスや写真・連絡先など、解約や相続に関わる情報が残っていることがあるため、安易に初期化せず、デジタル遺品整理の記事で解説している手順で確認してから処分に進んでください。パスワードがわからない場合の対応や、専門業者への相談の考え方も同記事にまとめています。",
  },
];

const related = [
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "故人のスマホ・PC・ネット契約の扱い方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの処分", desc: "電池・スプレー缶などの出し方の考え方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・回収業者の使い分け" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用", desc: "売れる物を活かして負担を減らす" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "不用品をまとめて回収依頼する場合" },
  { href: "/area/tokyo/", label: "東京の片付け業者比較", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "パソコン・スマホのデータ消去と処分方法" },
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
    { href: "#kiso", label: "1｜処分前に知っておくデータ消去と処分制度の基礎" },
    { href: "#merit", label: "2｜端末の状態別・処分ルートの選び方" },
    { href: "#houshin", label: "3｜処分を進める前の全体方針" },
    { href: "#steps", label: "4｜手放す前にやることの5ステップ" },
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

      <Breadcrumb items={[{ label: "パソコン・スマホのデータ消去と処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          パソコン・スマホのデータ消去と処分方法｜初期化だけで手放さないための手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          部屋の片付けを進めると、必ずといっていいほど出てくるのが「使わなくなったパソコンとスマホ」です。写真・連絡先・ネットバンキングの記録など、暮らしの情報がまるごと入った機器だけに、雑に捨てると情報流出のリスクがあり、かといって手順がわからず引き出しに溜まり続けている、という方も多いはずです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、パソコン・スマホを手放す前に必要なデータ消去の一般的な考え方と手順、PCリサイクル・小型家電リサイクル法という処分制度の枠組み、端末の状態別の処分ルート、やってはいけないNG行動までを解説します。機種ごとの具体的な操作は、必ずメーカー公式サイトの案内で確認しながら進めてください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ファイル削除やゴミ箱を空にするだけではデータは残り得る。手放す前に「データ消去」を行うのが原則</li>
          <li>スマホはサインアウト＋初期化、パソコンは消去機能や物理破壊が一般的。確実な手順はメーカー公式で確認</li>
          <li>処分はPCリサイクル（メーカー回収）や小型家電リサイクル法のルートが基本。通常のごみには混ぜない</li>
          <li>SIM・SDカードの取り出しとアカウント紐付けの解除を忘れない。許可不明の回収業者には渡さない</li>
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

      <H2 id="kiso" num="1">処分前に知っておくデータ消去と処分制度の基礎</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、「なぜ普通に捨ててはいけないのか」を、データと制度の2つの面から整理します。ここを押さえれば、あとの手順は迷いません。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">端末の状態別・処分ルートの選び方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        処分ルートは端末の状態で決まります。「まだ使える」「もう使えない」「故障している」の3パターンで考えると選びやすくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">処分を進める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「バックアップ→紐付け解除→データ消去→処分ルート選び」という順番を崩さないことです。順番さえ守れば、情報流出のリスクを抑えながら、買取や制度回収など自分に合ったルートを落ち着いて選べます。逆に、処分を急いで消去を後回しにすると、取り返しのつかない見落としが生まれます。
        </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、この記事は「自分の端末」を手放す場合の解説です。亡くなった家族の端末は、消去の前に契約や資産の確認が必要になるため、<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理</Link>の手順を先に確認してください。パソコン・スマホ以外の不用品もまとめて手放したい場合は、<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で全体の段取りを立てるとスムーズです。
      </p>

      <H2 id="steps" num="4">手放す前にやることの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際に端末を手放すまでの手順を5つのステップで解説します。1台あたりの作業は難しくありませんが、順番どおりに進めることが重要です。
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
        次のいずれかに当てはまる場合は、自力にこだわらず、専門の窓口や片付け業者への相談を検討しましょう。データ消去はメーカー・専門事業者、搬出や他の不用品との一括処分は片付け業者、という分担で考えると整理しやすくなります。
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
        パソコン・スマホ以外の不用品もまとめて手放すなら、<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような回収業者に、消去を済ませた端末ごと搬出を任せる方法もあります。地域の事業者を口コミで比較したい場合は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>が活用できます。業者選びで避けるべき特徴は<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>にまとめています。
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
        本記事は一般的な知識の提供を目的としたものです。データ消去の確実な手順は機種・OSにより異なるため、必ず各メーカーの公式サポート情報をご確認ください。パソコン・小型家電の回収方法や対象品目は自治体・メーカーにより異なります。回収を業者に依頼する場合は、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
