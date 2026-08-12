import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/bunbetsu-muzukashii-gomi/";
const TITLE = "スプレー缶・電池など分別が難しいごみの捨て方｜迷ったときの考え方";
const DESC =
  "スプレー缶・ライター・電池・刃物・灯油など、捨て方に迷うごみには「発火・発熱などの危険があるため特別な扱いが決められている」という共通点があります。品目別の一般的な注意点、自治体ルールの調べ方、片付けで出たときの対処5ステップ、NG行動、業者に相談する判断基準までを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "分別が難しいごみの多くは「危険物・処理困難物」",
    body: "スプレー缶、カセットボンベ、ライター、乾電池、充電式電池、ボタン電池、刃物、蛍光管、水銀体温計、灯油などの捨て方が複雑なのは、発火・破裂・発熱・有害物質などの危険があり、収集や処理の過程で事故につながるおそれがあるためです。実際に、スプレー缶や充電式電池が原因とみられるごみ収集車や処理施設の火災は各地で問題になっていると報じられています。「なぜ特別な扱いなのか」という理由がわかると、面倒なルールにも納得して従いやすくなります。",
  },
  {
    title: "分別ルールは自治体ごとに異なる。「前に住んでいた町の常識」は通用しない",
    body: "同じスプレー缶でも、「中身を使い切って資源ごみへ」「危険ごみとして別袋で」「穴あけをする・しない」など、出し方の指定は自治体によって異なります。引っ越しをすると以前の自治体のルールが通用しないことも珍しくありません。判断に迷ったら推測で出さず、お住まいの市区町村の公式サイトにある分別一覧・ごみ分別アプリ・ごみ収集カレンダーで確認するのが確実です。",
  },
  {
    title: "「自治体で収集しない物」もある。その場合は指定の回収ルートへ",
    body: "品目によっては、自治体の通常収集では扱わず、販売店やメーカー、回収協力店の回収ボックスなど、別のルートが案内されているものがあります。例えば充電式電池やボタン電池は電器店などの回収拠点、消火器やバイク・タイヤなどは専門の回収ルートが案内されるのが一般的です。家電4品目（テレビ・冷蔵庫・洗濯機・エアコン）が家電リサイクル法のルートで処理されるのと同様に、「自治体のごみに出せない=捨てられない」ではなく、別の正規ルートがあると考えましょう。",
  },
];

const merits = [
  {
    title: "スプレー缶・カセットボンベ・ライターは「使い切る」が共通の基本",
    body: "これらは中身のガスが残ったまま出すと、収集車内での破裂・火災の原因になり得ます。風通しがよく火の気のない屋外で中身を使い切ってから、自治体の指定に従って出すのが共通の基本です。中身が残って出し切れない場合の扱い（穴あけの要否を含む）は自治体により案内が異なるため、必ず確認してください。大量に残っている場合は、メーカーの相談窓口や自治体に問い合わせるのが安全です。",
  },
  {
    title: "電池類は種類で扱いが分かれる。充電式・ボタン電池は回収拠点が基本",
    body: "乾電池は自治体の指定区分（有害ごみ・危険ごみなど）で収集されることが多い一方、モバイルバッテリーなどの充電式電池やボタン電池は、電器店などに設置された回収ボックスへの持ち込みが案内されるのが一般的です。特にリチウムイオン電池は、つぶれたり水に濡れたりすると発火するおそれがあるとされ、普通ごみに混ぜるのは危険です。電極をテープで絶縁してから出す・持ち込むのが基本的な作法とされています。",
  },
  {
    title: "刃物・ガラス・灯油は「収集する人が怪我をしない・事故にならない」配慮を",
    body: "包丁やハサミ、割れたガラス・陶器は、新聞紙などで刃先を包み「キケン」などと表示して出す方法が多くの自治体で案内されています。灯油は普通ごみや排水口に流すのは厳禁で、購入したガソリンスタンドや販売店に処分を相談するのが一般的です。いずれも細かい出し方は自治体の指定に従ってください。「収集員や処理施設の人が安全に扱えるか」という視点で考えると、迷ったときの判断がしやすくなります。",
  },
];

const steps = [
  {
    title: "迷うごみを1か所に集め、品目リストを作る",
    body: "片付け中に出てきた「捨て方のわからない物」は、その場で悩まず専用の箱にまとめておき、片付けの手を止めないのがコツです。作業が一段落したら、箱の中身をスプレー缶・電池・刃物・薬品類などの品目ごとに分けてリスト化します。まとめて調べたほうが効率がよく、同じ品目の出し忘れも防げます。",
  },
  {
    title: "自治体の分別一覧・アプリで品目ごとの出し方を調べる",
    body: "お住まいの市区町村の公式サイトには、五十音順の分別一覧やごみ分別アプリ、チャットボットなどが用意されていることが多く、品目名で検索すれば出し方がわかります。見つからない品目や判断に迷う物は、自治体のごみ担当窓口に電話やメールで問い合わせましょう。「たぶんこれでいいだろう」という推測での投棄が、収集事故や回収されないトラブルのもとになります。",
  },
  {
    title: "スプレー缶・ライターは屋外で使い切り、指定の区分で出す",
    body: "火の気のない風通しのよい屋外で中身を出し切り、自治体の指定（別袋・表示・穴あけの要否など）に従って出します。ガスが多く残っていて出し切れない物、さびて開けられない物は、無理をせずメーカーの相談窓口や自治体に問い合わせてください。無理に穴を開けようとして怪我やガス噴出につながるのが典型的な事故パターンです。",
  },
  {
    title: "電池類は絶縁してから、指定区分または回収拠点へ",
    body: "乾電池・ボタン電池・充電式電池は、電極部分にセロハンテープなどを貼って絶縁します。乾電池は自治体の指定区分へ、充電式電池・ボタン電池は電器店などの回収ボックスへというのが一般的な振り分けです。膨らんだモバイルバッテリーなど状態に不安のある物は、自己判断で分解せず、自治体または回収拠点に相談してください。",
  },
  {
    title: "自治体で扱わない品目は、販売店・メーカー・専門ルートに引き渡す",
    body: "消火器・タイヤ・バッテリー・灯油・薬品類など、自治体の収集対象外とされることが多い品目は、購入した販売店やメーカー、案内されている専門の回収ルートに相談します。処理困難物の扱いは自治体のサイトに案内があることが多いので、まずそこで正規ルートを確認しましょう。どうしても対応しきれない量や種類がある場合は、許可のある不用品回収業者への相談も選択肢です。",
  },
];

const ngActions = [
  {
    title: "スプレー缶や電池を普通ごみに混ぜて出す",
    body: "中身の残ったスプレー缶やリチウムイオン電池を可燃ごみ・不燃ごみに混ぜると、収集車や処理施設での火災の原因になり得ます。実際に火災事例が各地で報告されていると報じられており、多くの自治体が分けて出すよう呼びかけています。手間でも、指定の区分・ルートに従って出してください。",
  },
  {
    title: "灯油・薬品類を排水口や土に流して処分する",
    body: "灯油や薬品類を排水口・川・土に流すのは、環境汚染や事故につながる危険な行為です。灯油は購入したガソリンスタンドや販売店へ、薬品類は品目に応じて自治体や販売元に相談してください。家庭の残薬については、薬局で回収に応じている場合もあるため、かかりつけの薬局に相談するのも一つの方法です。",
  },
  {
    title: "「面倒だから」と不明な物をまとめて回収業者の車に投げ込む",
    body: "巡回している無料回収をうたう業者に、分別の面倒な物をまとめて渡してしまうのは避けましょう。廃棄物の処理に必要な許可を確認できない業者では、不法投棄や後からの高額請求といったトラブルのおそれがあります。心配な勧誘を受けた場合や料金トラブルになった場合は、消費者ホットライン188や自治体の消費生活センターに相談できます。詳しくは無料回収業者の注意点の記事にまとめています。",
  },
  {
    title: "危険物の分解・穴あけ・焼却を自己流で行う",
    body: "ガスの残ったスプレー缶への穴あけ、膨らんだバッテリーの分解、ごみの野外焼却などの自己流の処理は、怪我・火災につながる危険な行為です。廃棄物の焼却は法律で原則禁止とされています。安全に処理できない物は、無理に自分で解決せず、自治体・販売店・メーカー・許可のある業者といった適切な相手に委ねてください。",
  },
];

const judgeSigns = [
  "実家の片付けや遺品整理で、スプレー缶・薬品・灯油などの危険物が大量に出てきた",
  "さびた缶や中身不明の容器など、自分で扱うのが不安な物がある",
  "引っ越しの期限までに、分別を調べながら出し切る時間がない",
  "分別が必要な物を含めて、家全体の不用品をまとめて処分したい",
  "自治体の収集対象外の品目が多く、個別に持ち込む手間をかけられない",
];

const faqs = [
  {
    q: "スプレー缶は穴を開けてから捨てるべきですか？",
    a: "自治体によって「穴を開けずに出す」「穴を開けて出す」と案内が分かれており、全国共通の正解はありません。近年は事故防止の観点から穴あけ不要とする自治体が増えているとされますが、必ずお住まいの市区町村の案内に従ってください。いずれの場合も、火の気のない屋外で中身を使い切ってから出すのが共通の基本です。",
  },
  {
    q: "モバイルバッテリーはどこに捨てればよいですか？",
    a: "多くの場合、普通ごみには出せず、電器店などに設置された小型充電式電池の回収ボックスや、自治体の指定する回収方法が案内されています。電極をテープで絶縁してから持ち込むのが基本です。膨らんでいる・破損しているなど状態に不安がある物は、回収ボックスに入れる前に自治体や回収拠点に相談してください。",
  },
  {
    q: "中身のわからない瓶や薬品が出てきた場合はどうすればよいですか？",
    a: "中身が特定できない液体・薬品類は、自己判断で流したり混ぜたりせず、そのままの状態で自治体のごみ担当窓口に相談してください。ラベルや購入時期など、わかる情報を伝えると案内を受けやすくなります。量が多い場合や取り扱いが不安な場合は、危険物の扱いに対応できる業者への相談も選択肢です。",
  },
  {
    q: "分別が難しい物も不用品回収業者に頼めますか？",
    a: "対応できる品目は業者によって異なります。スプレー缶や電池程度なら対応できる業者が多い一方、灯油・薬品・消火器などは対応外だったり、専門ルートを案内されたりする場合があります。見積もり時に品目を正確に伝えて対応可否を確認し、廃棄物の処理に必要な許可や実績を確認できる業者を選んでください。",
  },
];

const related = [
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "自治体収集を申し込む一般的な手順" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "テレビ・冷蔵庫などの正しい処分ルート" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体回収と業者回収の使い分け", desc: "どちらに頼むべきかの判断基準" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収業者の注意点", desc: "トラブルの典型例と相談先" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "自治体のごみ収集サービスの使い方" },
  { href: "/area/sapporo/", label: "札幌の片付け業者比較", desc: "札幌で依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "分別が難しいごみの捨て方" },
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
    { href: "#kiso", label: "1｜分別が難しいごみの基礎知識" },
    { href: "#merit", label: "2｜品目グループ別の一般的な考え方" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜片付けで出たときの対処5ステップ" },
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

      <Breadcrumb items={[{ label: "分別が難しいごみの捨て方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          スプレー缶・電池など分別が難しいごみの捨て方｜迷ったときの考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「スプレー缶は穴を開けるの？開けないの？」「モバイルバッテリーはどのごみ？」——片付けを進めると必ず出てくるのが、捨て方のわからない物たちです。調べても自治体によって答えが違うため、余計に混乱しがちです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、分別が難しいごみに共通する「危険だから特別扱い」という考え方を軸に、品目グループ別の一般的な注意点、自治体ルールの調べ方、片付け中に出てきたときの対処手順、やってはいけないNG行動までを解説します。個別の出し方は自治体により異なるため、最終的には必ずお住まいの市区町村の案内で確認してください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>分別が難しいごみの多くは発火・破裂などの危険がある物。特別扱いには理由がある</li>
          <li>出し方は自治体ごとに異なる。推測で出さず、市区町村の分別一覧・アプリ・窓口で確認する</li>
          <li>スプレー缶・ライターは「屋外で使い切る」、電池類は「絶縁して指定ルートへ」が共通の基本</li>
          <li>自治体で収集しない品目は、販売店・メーカー・回収拠点など別の正規ルートに引き渡す</li>
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

      <H2 id="kiso" num="1">分別が難しいごみの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜこれらのごみの捨て方が複雑なのかを理解しておきましょう。理由がわかると、初めて出会う品目でも「危険性がありそうだから確認しよう」という正しい判断ができるようになります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">品目グループ別の一般的な考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        代表的な品目を3つのグループに分けて、一般的な扱いの考え方を紹介します。繰り返しになりますが、具体的な出し方は自治体の案内が優先です。
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
        分別が難しいごみへの向き合い方の大原則は、「その場で悩まず集めておき、まとめて調べ、正規ルートで出す」ことです。片付けの最中に1つ1つ調べていると作業が止まってしまうため、「わからない物ボックス」を作って片付けを進め、後から一括で処理するのが効率的です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        通常の粗大ごみの出し方は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>で、テレビ・冷蔵庫など家電4品目の扱いは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>で解説しています。処分ルート全体の使い分けは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">片付けで出たときの対処5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、片付け中に分別の難しい物が出てきたときの対処を5つのステップで紹介します。ポイントは「集める→調べる→安全に準備して→正規ルートへ」です。
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
        次のいずれかに当てはまる場合は、許可や実績を確認できる不用品回収業者への相談を検討しましょう。見積もり時に品目を正確に伝え、対応可否と処理方法を確認するのがポイントです。
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
        家全体の片付けと合わせて依頼するなら、関東エリアで定額パックプランのある<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような回収業者が候補になります。生活まわりのトラブル対応をまとめて相談したい場合は<Link href="/review/seikatsu110/" className="text-primary underline underline-offset-2">生活110番</Link>のようなサービスもあります。札幌など各都市の業者は<Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌の片付け業者比較</Link>で紹介しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・出し方・収集対象は自治体により異なるため、必ずお住まいの市区町村の公式案内をご確認ください。取り扱いに危険を感じる物は無理に自分で処理せず、自治体・販売店・メーカーなどの適切な窓口にご相談ください。回収業者との契約トラブルは、消費者ホットライン188や自治体の消費生活センターに相談できます。
      </p>
    </article>
  );
}
