import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/garage-katazuke/";
const TITLE = "車庫・ガレージの片付け｜工具・タイヤ・危険物の処分と進め方";
const DESC =
  "車庫・ガレージは「外から見えず、とりあえず置ける」ため物置化しやすい場所です。タイヤ・バッテリー・オイル類など自治体で収集できないことが多い品目の処分の考え方、全出しから定位置づくりまでの自力5ステップ、灯油やオイルを流すなどのNG行動、重量物や物量が多い場合に業者へ依頼する判断基準までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ガレージが物置化するのは「外から見えず、とりあえず置ける」から",
    body: "車庫・ガレージは居住空間と違って来客の目に入らず、多少散らかっても生活に支障が出ないため、片付けの優先順位が最後になりがちです。さらに屋根と広い床があるため、「使わないけれど捨てるか迷う物」の一時置き場として最適で、古いタイヤ、壊れた自転車、使わなくなったレジャー用品などが「とりあえず」で持ち込まれ続けます。一時置きのつもりの物が数年単位で堆積していくのが、ガレージ物置化の典型パターンです。",
  },
  {
    title: "重い物・大きい物の「定位置」になり、動かせなくなる",
    body: "タイヤ、金属ラック、コンプレッサー、古い家具など、一人では動かせない重量物が置かれると、その周囲がデッドスペース化し、手前に軽い物が積み重なっていきます。奥の物を出すには手前を全部どかす必要があるため、「奥に何があるか分からない」状態が生まれます。この状態を放置すると、車の出し入れや歩行スペースが圧迫されるだけでなく、地震の際に重量物が倒れる危険や、可燃物の堆積による防火上のリスクも高まります。",
  },
  {
    title: "処分ルートが特殊な品目が多く、「捨て方が分からない」で止まる",
    body: "ガレージの片付けが居室より厄介なのは、自治体の通常収集に出せない品目が集中しているからです。タイヤ・バッテリー・エンジンオイルなどの自動車関連用品は、多くの自治体で収集対象外とされ、販売店や専門の引き取りルートを案内されるのが一般的です。古い灯油・塗料・スプレー缶なども扱いに注意が必要で、「どう捨てればいいか分からない物」が動かせないまま残り続けます。分別が難しい物の考え方は、スプレー缶・電池など分別が難しい物の処分で解説しています。",
  },
];

const merits = [
  {
    title: "品目別の考え方1：タイヤ・バッテリー・オイル類は販売店・専門ルートが基本",
    body: "タイヤ、カーバッテリー、エンジンオイルなどは、多くの自治体で「収集できない物（適正処理困難物）」に位置づけられており、購入した販売店、カー用品店、ガソリンスタンドなどの引き取りルートを利用するのが一般的です。引き取りの条件や費用の有無は店舗により異なるため、持ち込む前に電話などで確認しましょう。どのルートも使えない場合は、自治体窓口に相談すると地域での扱いを案内してもらえます。",
  },
  {
    title: "品目別の考え方2：工具・園芸用品・レジャー用品は「使う頻度」で仕分ける",
    body: "工具類、園芸用品、キャンプ・スキーなどのレジャー用品は、「この1〜2年で使ったか」を基準に仕分けると判断しやすくなります。状態のよい工具やアウトドア用品は中古市場で需要があるため、処分ではなく売却も選択肢です。売却と片付けの併用はリサイクルショップ・買取の併用で詳しく解説しています。刃物や高圧洗浄機など扱いに注意が要る物は、けが防止のため梱包してから移動させましょう。",
  },
  {
    title: "品目別の考え方3：古い灯油・塗料・スプレー缶は中身の処理が先",
    body: "持ち越した灯油、使いかけの塗料、中身の残ったスプレー缶は、そのままごみに出せないのが一般的です。灯油は購入したガソリンスタンドや販売店に処分の相談をするのが基本で、塗料・スプレー缶は自治体ごとに出し方のルールが定められています。いずれも「排水や土に流す・埋める」は環境汚染や事故につながる絶対NGの行為です。判断に迷う物は、自治体の分別案内や窓口で品目名を挙げて確認するのが確実です。",
  },
];

const steps = [
  {
    title: "全出しできる日を決め、天候と作業スペースを確保する",
    body: "ガレージの片付けは、中身をいったん外に全部出す「全出し」が基本です。物を出すスペースとして駐車場や庭先を使うため、晴れの日を選び、半日〜1日の作業時間を確保しましょう。車は事前に別の場所へ移動しておくと作業がはかどります。軍手・マスク・長袖は必須で、ほこりや虫が気になる場合は事前に換気と簡単な掃き掃除をしてから始めると負担が減ります。",
  },
  {
    title: "「使う・使わない・危険物」の3つに分類する",
    body: "出した物を「今後も使う」「使わない（処分・売却）」「危険物・処分方法の確認が必要な物」の3グループに分けます。ポイントは、危険物・処分困難物を最初から別枠にしておくことです。灯油・塗料・バッテリー・タイヤなどを通常の不用品と混ぜてしまうと、後の処分段階で仕分け直しになります。判断に迷う物は保留箱を作り、その場で悩まず先へ進みましょう。",
  },
  {
    title: "危険物・処分困難物の引き取り先を確認する",
    body: "分類が済んだら、危険物・処分困難物の行き先を品目ごとに確認します。タイヤ・バッテリー・オイル類はカー用品店や販売店、灯油はガソリンスタンド、塗料・スプレー缶は自治体の分別案内、というように、品目ごとに確認先が異なります。自治体の粗大ごみ受付で扱えるかどうかも品目・地域により異なるため、まとめて自治体窓口に問い合わせると効率的です。粗大ごみの一般的な流れは粗大ごみ申し込みの流れを参考にしてください。",
  },
  {
    title: "ゾーニングを決めて「使う物」だけを戻す",
    body: "空になったガレージに物を戻す前に、「車関連」「工具」「園芸」「季節・レジャー用品」といったゾーンを決めます。重い物は腰の高さより下、使用頻度の高い物は取り出しやすい手前、季節物は奥、と配置の原則を決めて戻すと、リバウンドしにくくなります。床に直置きする物を最小限にし、棚やフックで壁面を活用すると、掃除もしやすく物の増加にも気づきやすくなります。",
  },
  {
    title: "「とりあえず置き」を防ぐ維持ルールを決める",
    body: "最後に、物置化の再発を防ぐルールを決めます。有効なのは「ガレージに新しく置く物は用途と置き場所を決めてから」「1つ増えたら1つ手放す」「年1回、季節の変わり目に見直す」といったシンプルな取り決めです。家族で使う場所なら、ゾーニングを共有してどこに何を置くかを全員が分かる状態にしておきましょう。物が再び増え始めたら、たまる前の小さいうちに処分するのが結局いちばん楽です。",
  },
];

const ngActions = [
  {
    title: "灯油・オイル・塗料を排水や土に流す",
    body: "古い灯油や廃油、塗料を排水口・側溝・庭の土に流すのは絶対にやめてください。環境汚染につながるだけでなく、配管の損傷や引火事故の原因にもなり、地域によっては条例等の問題にもなり得ます。少量であっても、販売店・ガソリンスタンド・自治体窓口に相談し、案内された方法で処分しましょう。処理方法が分からないまま放置するのも劣化・漏れのリスクがあるため、片付けを機に必ず行き先を決めることが大切です。",
  },
  {
    title: "タイヤや家電を「見えないから」と屋外に放置し続ける",
    body: "処分方法が分からないからと、タイヤや古い家電をガレージ脇や敷地の隅に放置するのはNGです。雨水がたまって蚊の発生源になったり、劣化・サビで景観や近隣関係に影響したり、火災時の延焼リスクになったりします。また、敷地外への放置は不法投棄として扱われるおそれがあります。正しい処分ルートの考え方は不法投棄の注意点と正しい処分方法で解説しています。",
  },
  {
    title: "重量棚や大型機材を一人で無理に動かす",
    body: "金属ラック・コンプレッサー・重量工具などを一人で動かそうとすると、腰を痛めたり、倒れてきた物の下敷きになったりする危険があります。特に上段に重い物が載ったままの棚は、動かした瞬間にバランスを崩しがちです。必ず中身を空にしてから、二人以上で運ぶのが原則です。自力で動かせない重量物が複数ある場合は、無理をせず搬出ごと業者に任せることを検討しましょう。大型品の搬出は大型家具の処分の記事も参考になります。",
  },
  {
    title: "巡回する無料回収トラックにまとめて引き渡す",
    body: "「無料で回収します」とアナウンスしながら巡回するトラックに、ガレージの不用品をまとめて渡すのは避けましょう。積み込み後に費用を請求されるトラブルや、回収物の不法投棄事例が消費者庁・自治体から繰り返し注意喚起されています。困ったときの相談先は消費者ホットライン188や自治体窓口です。詳しくは無料回収をうたう業者の注意点にまとめています。不用品の処分は、許可等を確認できる業者か自治体ルートを使うのが原則です。",
  },
];

const judgeSigns = [
  "一人では動かせない重量物（金属ラック・機材・タイヤ多数など）がある",
  "物量が多く、全出し・分別・搬出を自力でやり切る時間が取れない",
  "処分方法の分からない品目が多く、品目ごとの確認・持ち込みが負担",
  "ガレージや物置の解体・撤去まで視野に入れている",
  "実家・空き家のガレージで、遠方のため何度も通えない",
];

const faqs = [
  {
    q: "タイヤやバッテリーは粗大ごみに出せますか？",
    a: "多くの自治体では、タイヤ・バッテリー・エンジンオイルなどの自動車関連用品は収集できない物（適正処理困難物）とされており、粗大ごみには出せないのが一般的です。購入した販売店・カー用品店・ガソリンスタンドの引き取りルートを利用するか、自治体窓口に地域での扱いを確認してください。扱いは自治体・店舗により異なります。",
  },
  {
    q: "古い灯油が残ったままです。どう処分すればよいですか？",
    a: "持ち越した灯油は変質していることがあり、そのまま使うのも捨てるのも危険です。基本は購入したガソリンスタンドや燃料販売店に処分を相談する方法で、対応の可否や条件は店舗により異なります。排水や土に流すのは絶対に避けてください。ポリタンクごと処分する場合の扱いも自治体により異なるため、分別案内で確認しましょう。",
  },
  {
    q: "ガレージの片付けはどのくらい時間がかかりますか？",
    a: "物量によりますが、一般的な戸建てのガレージで全出し・分別まで半日〜1日、処分困難物の持ち込みや引き取り手配を含めると数日〜数週間かかることもあります。処分ルートの確認に時間がかかる品目が多いためです。期限がある場合（売却・解体・引っ越しなど）は、逆算して早めに着手するか、業者への依頼を検討しましょう。",
  },
  {
    q: "ガレージごと解体したい場合はどうすればよいですか？",
    a: "解体を検討している場合も、中身の片付けが先です。解体業者は原則として中の残置物を扱わないか、別料金になることが多いため、事前に中身を空にしておくと話がスムーズです。中身の整理から処分までの段取りは、物置・倉庫を解体する前の整理の記事で詳しく解説しています。解体自体の費用・手続きは業者や自治体により異なるため、見積もりで確認してください。",
  },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しい物の処分", desc: "スプレー缶・電池などの扱い方" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置の解体前の整理", desc: "解体前に中身を空にする段取り" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収をうたう業者の注意点", desc: "巡回トラックのトラブルと相談先" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "不用品の積み放題プランがある業者" },
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
    { "@type": "ListItem", position: 2, name: "車庫・ガレージの片付け" },
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
    { href: "#kiso", label: "1｜ガレージが物置化する3つの構造" },
    { href: "#merit", label: "2｜品目別・処分ルートの考え方" },
    { href: "#houshin", label: "3｜片付けを始める前の全体方針" },
    { href: "#steps", label: "4｜ガレージ片付けの5ステップ" },
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

      <Breadcrumb items={[{ label: "車庫・ガレージの片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          車庫・ガレージの片付け｜工具・タイヤ・危険物の処分と進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          気づけば車が入らないほど物であふれた車庫・ガレージ——古いタイヤ、使わない工具、壊れた自転車、持ち越した灯油。「外から見えないから」と後回しにしているうちに、家の中でいちばん手強い場所になっていた、というのはよくある話です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ガレージが物置化する構造、タイヤ・バッテリー・オイル類など処分ルートが特殊な品目の考え方、全出しから定位置づくりまでの5ステップ、危険なNG行動、業者に任せるべきケースの判断基準までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ガレージ片付けの基本は晴れた日の「全出し」→「使う・使わない・危険物」の3分類</li>
          <li>タイヤ・バッテリー・オイル類は自治体で収集できないことが多く、販売店・専門ルートが基本</li>
          <li>灯油・塗料を排水や土に流すのは絶対NG。販売店・自治体窓口に相談する</li>
          <li>重量物がある・物量が多い・解体予定があるなら、搬出ごと業者に任せるのが安全で速い</li>
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

      <H2 id="kiso" num="1">ガレージが物置化する3つの構造</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        なぜガレージは散らかりやすいのか。構造を知っておくと、片付け後のリバウンド防止にも役立ちます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">品目別・処分ルートの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ガレージ片付けの山場は「処分ルートが特殊な品目」の扱いです。よくある品目別に考え方を整理します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">片付けを始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「危険物・処分困難物を最初から別枠にし、行き先を確認してから動かす」ことです。通常の不用品と混ぜてしまうと、処分段階で必ず手戻りが発生します。また、ガレージは重量物が多いため、無理をしない・一人でやらないことも居室の片付け以上に重要です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        不用品全般の処分ルートの選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>を、自治体回収と業者回収の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者どっちに頼む？</Link>を参考にしてください。屋外スペースの片付けという意味では<Link href="/veranda-katazuke/" className="text-primary underline underline-offset-2">ベランダの片付け</Link>とも共通点がありますが、ガレージは危険物と重量物が多い分、より慎重な段取りが必要です。
      </p>

      <H2 id="steps" num="4">ガレージ片付けの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「全出し→3分類→行き先確認→ゾーニングして戻す→維持ルール」の流れを守ることです。
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
        次のいずれかに当てはまる場合は、自力にこだわらず業者への相談を検討しましょう。ガレージ内の写真があれば、具体的な見積もり相談ができます。
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
        物量が多い場合は、トラック単位で回収に対応する<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような不用品回収業者が候補になります。回収を依頼する際は、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。業者選びの基本は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。タイヤ・バッテリー・灯油・塗料などの処分ルートや分別区分は自治体・店舗により異なるため、必ずお住まいの市区町村の案内や引き取り先にご確認ください。業者へ依頼する際の料金は物量・品目・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
