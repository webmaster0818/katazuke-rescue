import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/oheya-checklist/";
const TITLE = "汚部屋レベル診断チェックリスト｜散らかり度合いの目安と次の一手";
const DESC =
  "自分の部屋がどのくらい散らかっているのか、客観的に判定できるチェックリストを掲載。チェック数からレベル1〜5の目安を判定し、レベル別に「自力で戻せるか・何から始めるか・業者を検討すべきか」の次の一手を解説します。自室を客観視したい方、家族の部屋が心配な方向けの記事です。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const checkGroups = [
  {
    title: "床・物の状態",
    items: [
      "床に物が置きっぱなしの場所が3か所以上ある",
      "床の見えない面積が部屋の3分の1を超えている",
      "物が膝より高く積み上がっている場所がある",
      "通販の段ボールが開封されないまま置かれている",
      "同じ物を持っているのに見つからず買い直したことがある",
    ],
  },
  {
    title: "ゴミ・衛生の状態",
    items: [
      "ゴミ袋やペットボトルが部屋の中に3袋以上たまっている",
      "ゴミ収集日に出しそびれることが月に2回以上ある",
      "飲みかけ・食べ残しの容器が室内に放置されている",
      "部屋に入ったときに臭いが気になる（または人に指摘された）",
      "コバエ・ゴキブリなどの虫を室内で見かけるようになった",
    ],
  },
  {
    title: "生活・気持ちの状態",
    items: [
      "水回り（キッチン・浴室・トイレ）のどこかが物で使いにくくなっている",
      "ベッドや布団の上にも物が置かれ、寄せてから寝ている",
      "探し物に1日10分以上使うことがよくある",
      "人を部屋に呼べない、宅配便を玄関先までしか入れられない",
      "片付けようと思いつつ、1か月以上手を付けられていない",
    ],
  },
];

const levels = [
  {
    level: "レベル1（チェック0〜2個）",
    title: "軽度の散らかり——日常のリセットで戻せる",
    body: "物が一時的に散らかっているだけで、生活への支障はほぼない状態です。15分程度の「元に戻す時間」を1日1回作れば十分立て直せます。物の定位置を決める、ゴミ箱を使いやすい場所に置くなど、散らかりにくい仕組みを作る好機でもあります。",
  },
  {
    level: "レベル2（チェック3〜5個）",
    title: "散らかりが定着し始めた状態——週末1〜2日で集中リセット",
    body: "床置きやゴミの出しそびれが習慣化し始めた段階です。この段階なら自力での立て直しが十分可能で、週末を1〜2回使った集中的な片付けで床とテーブルの上を回復できるケースがほとんどです。片付ける順番を決めて着手すれば、挫折のリスクも小さい段階です。",
  },
  {
    level: "レベル3（チェック6〜9個）",
    title: "生活に支障が出始めた状態——計画を立てて数週間がかり",
    body: "ゴミの滞留や探し物の頻発など、生活の質に影響が出ている段階です。物量が増えているため、1日で終わらせようとせず、「今週は水回り、来週は床」のようにエリアを区切った数週間の計画が必要です。ゴミ収集日に合わせて作業日を決め、家族や友人の応援も検討しましょう。",
  },
  {
    level: "レベル4（チェック10〜12個）",
    title: "自力では負担が大きい状態——部分的な業者利用も視野に",
    body: "水回りの機能低下や臭い・虫の発生が重なっている場合、片付けの体力的・精神的負担はかなり大きくなっています。自力で進めるなら明らかなゴミの撤去と水回りの回復を最優先に。まとまった物量の搬出や清掃は、部分的にでも業者に任せると一気に前へ進みます。",
  },
  {
    level: "レベル5（チェック13個以上）",
    title: "生活環境の回復を優先すべき状態——業者への相談を推奨",
    body: "衛生面・安全面のリスクが出ている可能性が高い段階です。自力での完遂にこだわると、時間が経つほど状態が進行しがちです。片付け業者への相談を優先し、必要に応じて害虫駆除や消臭・清掃も組み合わせて、まず安全に暮らせる環境を回復させましょう。誰にでも起こりうることなので、恥ずかしがらずに相談してください。",
  },
];

const steps = [
  {
    title: "チェックリストの結果を書き留め、現状を「記録」する",
    body: "まず、今日のチェック数と部屋の写真を記録しておきましょう。散らかった部屋の写真を撮るのは気が進まないものですが、現状の客観視と、片付け後の変化を実感するための確実な材料になります。チェック数が減っていくこと自体が、続けるモチベーションになります。",
  },
  {
    title: "レベルに応じた「最初の1エリア」を決める",
    body: "レベル1〜2なら机の上や床の一角、レベル3以上なら水回りか玄関まわり、というように、最初に手を付ける1エリアだけを決めます。全体を一度にやろうとしないことが、どのレベルでも共通の鉄則です。エリアの選び方と順番の考え方は、片付けの順番の記事で詳しく解説しています。",
  },
  {
    title: "「明らかなゴミ」だけを集める日を作る",
    body: "要不要の判断が必要な物はいったん置いておき、ペットボトル・弁当容器・包装材など、迷わずゴミと言える物だけを袋に集めます。判断のいらない作業は手が止まりにくく、ゴミ袋の数として成果が見えるため、最初の一歩に最適です。集めた袋は自治体の分別ルール・収集日に沿って計画的に出してください。",
  },
  {
    title: "1日15分または週末2時間の「片付け枠」を予定に入れる",
    body: "片付けは「時間ができたらやる」では進みません。1日15分でも、週末の2時間でも、予定として先に確保するのが確実です。タイマーをかけて時間が来たら終わりにする方式は、疲れ切って嫌になるのを防ぎ、習慣として続けやすくなります。",
  },
  {
    title: "1か月後に再チェックし、レベルの変化を確認する",
    body: "1か月後にもう一度このチェックリストを試し、チェック数の変化を確認しましょう。減っていれば進め方は合っています。変わらない・増えている場合は、時間や体力が足りていないサインなので、進め方を変えるか、業者の力を借りる判断材料にしてください。定期的な再チェックはリバウンドの早期発見にも役立ちます。",
  },
];

const ngActions = [
  {
    title: "チェック結果を見て自分を責める・家族を責める",
    body: "散らかりの背景には、多忙・環境の変化・体調など、本人の意思だけではどうにもならない事情が絡んでいることが多くあります。チェックリストは「責める材料」ではなく「次の一手を決める道具」です。家族の部屋が心配な場合も、結果を突きつけるのではなく、本人の困りごとを聞くことから始めてください。",
  },
  {
    title: "レベルが高いのに「全部自力で」にこだわる",
    body: "レベル4〜5の状態を自力だけで戻そうとすると、時間がかかるあいだに衛生状態が悪化し、心も折れやすくなります。全部やるか全部頼むかの二択ではなく、「ゴミの搬出だけ業者、仕分けは自分」といった部分的な依頼も可能です。使えるものは使う柔軟さが、結果的に早い回復につながります。",
  },
  {
    title: "収納グッズを先に買い足す",
    body: "片付けの前に収納グッズを買うと、物が減らないまま「物をしまう物」が増え、かえって部屋が狭くなります。収納を考えるのは、不要な物を手放して物量が確定した後です。順番を守るだけで、出費も手間も減らせます。",
  },
  {
    title: "一夜漬けの徹底片付けで燃え尽きる",
    body: "一気に片付けて数日で元に戻る、を繰り返すと「自分は片付けられない」という誤った自己評価だけが残ります。原因は能力ではなく、リバウンドを防ぐ仕組みがないことです。片付け後に「物の定位置」と「ゴミ出しの習慣」を1つずつ作ることまでをゴールにしましょう。",
  },
];

const judgeSigns = [
  "チェック数が13個以上（レベル5相当）に達している",
  "臭い・害虫・水回りの機能低下など、衛生面の問題がすでに出ている",
  "1か月取り組んでもチェック数が減らない、または増えている",
  "仕事や体調の事情で、片付けに使える時間と体力を確保できない",
  "退去・来客・点検など、期限までに部屋を戻す必要がある",
];

const faqs = [
  {
    q: "汚部屋とゴミ屋敷はどう違うのですか？",
    a: "明確な定義や境界があるわけではありませんが、一般に、物の散らかりが中心で生活は維持できている状態を汚部屋、ゴミの堆積により衛生・安全面の問題が生じている状態をゴミ屋敷と呼び分けることが多いようです。重要なのは呼び方ではなく、衛生面のリスクが出ているかどうかです。ゴミ屋敷化の原因と進行段階は別記事で詳しく解説しています。",
  },
  {
    q: "チェック数が多くてショックです。まず何をすればいいですか？",
    a: "チェック数が多いことは、それだけ改善の余地があるということでもあります。最初の一歩は「明らかなゴミだけを袋に集める」ことです。判断が要らないので手が動きやすく、成果も見えます。次に水回りと玄関の通路を回復させれば、生活の土台が戻ります。自力で難しいと感じたら、業者への相談は早いほど負担が軽く済みます。",
  },
  {
    q: "家族の部屋がレベル4〜5に見えます。どう声をかければいいですか？",
    a: "頭ごなしに「片付けなさい」と言うと、多くの場合は反発か沈黙につながります。まず本人が困っていること（探し物・体調・虫など）を聞き、「ここだけ一緒にやろう」と小さな範囲の提案から始めるのが現実的です。高齢の家族で生活全般の心配がある場合は、自治体の福祉窓口や地域包括支援センターといった相談先もあります。",
  },
  {
    q: "業者に頼む場合、部屋を見られるのが恥ずかしいのですが。",
    a: "片付け業者は散らかった部屋の作業を日常的に行っており、部屋の状態を理由に依頼をためらう必要はありません。多くの業者が、社名の入っていない車両での訪問や近隣への配慮に対応しています。見積もり時に不安な点をそのまま伝えれば、対応可能な範囲を教えてもらえます。費用は物量・間取りにより異なるため、複数社の見積もり比較をおすすめします。",
  },
];

const related = [
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷になる原因と進行段階", desc: "散らかりが進行する仕組みと段階別対処" },
  { href: "/katazuke-junban/", label: "部屋を片付ける順番", desc: "どこから手を付ければ挫折しないか" },
  { href: "/katazukerarenai-shinri/", label: "片付けられない心理と対処法", desc: "片付けが続かない要因と現実的な対策" },
  { href: "/guide/self-cleanup/", label: "ゴミ屋敷を自分で片付ける方法", desc: "自力で戻すための具体的な手順" },
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
    { "@type": "ListItem", position: 2, name: "汚部屋レベル診断チェックリスト" },
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
    { href: "#check", label: "1｜汚部屋レベル診断チェックリスト（15項目）" },
    { href: "#level", label: "2｜チェック数別のレベル判定と次の一手" },
    { href: "#houshin", label: "3｜診断結果の使い方" },
    { href: "#steps", label: "4｜診断後に始める5ステップ" },
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

      <Breadcrumb items={[{ label: "汚部屋レベル診断チェックリスト" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          汚部屋レベル診断チェックリスト｜散らかり度合いの目安と次の一手
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「自分の部屋は汚部屋なのか、普通の散らかりなのか」「どのくらいまずい状態なのか客観的に知りたい」——散らかりは毎日少しずつ進むため、住んでいる本人ほど現状を正確に把握しにくいものです。まず現在地を知ることが、立て直しの出発点になります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、15項目のチェックリストで部屋の状態を客観的に判定し、チェック数に応じたレベル1〜5の目安と、レベル別の「次の一手」を解説します。診断後にすぐ始められる5ステップと、やってはいけないNG行動もあわせて紹介します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>15項目のチェック数で、部屋の状態をレベル1〜5の目安として客観視できる</li>
          <li>チェック5個以下なら自力リセットが十分可能。6〜9個は数週間の計画が必要</li>
          <li>10個以上、特に臭い・虫・水回りの問題が重なる場合は、業者の利用を視野に入れる段階</li>
          <li>診断は自分や家族を責める道具ではなく、次の行動を決めるための道具として使う</li>
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

      <H2 id="check" num="1">汚部屋レベル診断チェックリスト（15項目）</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        次の15項目のうち、当てはまるものを数えてください。「床・物」「ゴミ・衛生」「生活・気持ち」の3つの観点に分かれています。深く考えず、直感で答えるのがコツです。
      </p>
      <div className="space-y-4 mb-4">
        {checkGroups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-3">{g.title}</h3>
            <ul className="space-y-2 text-[15px] leading-8 text-text-secondary">
              {g.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary font-bold shrink-0">□</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        このチェックリストは当サイト編集部が作成した目安であり、医学的・公的な基準ではありません。あくまで現状を客観視し、次の行動を決めるための道具として使ってください。
      </p>

      <H2 id="level" num="2">チェック数別のレベル判定と次の一手</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        チェックの合計数から、部屋の状態の目安と取るべき対処を確認しましょう。衛生に関わる項目（臭い・虫・水回り）に1つでもチェックが付いた場合は、合計数にかかわらず1段階上のレベルとして考えることをおすすめします。
      </p>
      <div className="space-y-4 mb-4">
        {levels.map((l) => (
          <div key={l.level} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">
              <span className="inline-block text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-0.5 mr-2 align-middle">{l.level}</span>
              {l.title}
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary">{l.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">診断結果の使い方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        診断結果の使い方は2つです。1つは「今日の現在地の記録」として。チェック数を書き留めておけば、1か月後の再診断で改善を数字として実感できます。もう1つは「自力か、応援か、業者か」の判断材料として。レベル3までは自力中心、レベル4からは部分的な業者利用、レベル5は業者相談を優先、が大まかな目安です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、散らかりが繰り返される背景には、多忙や環境の変化、片付けそのものへの苦手意識など、さまざまな要因があります。仕組みで解決する考え方は<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理と対処法</Link>で、散らかりが進行する仕組みは<Link href="/gomiyashiki-genin/" className="text-primary underline underline-offset-2">ゴミ屋敷になる原因と進行段階</Link>で詳しく解説しています。
      </p>

      <H2 id="steps" num="4">診断後に始める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        診断で現在地がわかったら、次の5ステップで立て直しを始めましょう。どのレベルでも共通して使える手順です。
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
        エリアごとの具体的な進め方は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋を片付ける順番</Link>、物量が多い場合の手順は<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自分で片付ける方法</Link>を参考にしてください。
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

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力での立て直しにこだわらず、片付け業者への相談を検討しましょう。相談や見積もりを無料で受け付けている業者も多く、現状を伝えて概算を聞くだけでも判断材料になります。
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
        本記事のチェックリストとレベル分けは当サイト編集部が作成した目安であり、医学的・公的な基準ではありません。心身の不調が疑われる場合は、医療機関や自治体の相談窓口をご利用ください。ごみの出し方・分別ルールは自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
