import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/niwa-fuyohin-shobun/";
const TITLE = "庭の不用品処分｜物干し台・遊具・植木鉢・土の捨て方と進め方";
const DESC =
  "物干し台・子どもの遊具・植木鉢・ブロックなど、庭にたまった不用品は「捨て方が分からない」まま放置されがちです。土や石など自治体で収集できないことが多い品目の考え方、庭全体を見渡してから撤去するまでの自力5ステップ、土を公園に捨てるなどのNG行動、重量物や物量が多い場合に業者へ依頼する判断基準までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "庭は「屋外だから傷んでも気にならない」で放置が進む",
    body: "庭の不用品は、室内と違って生活動線をふさがないため、置きっぱなしでも日々の暮らしに支障が出にくいのが特徴です。使わなくなった物干し台、子どもが成長して使わなくなった遊具、空の植木鉢やプランターなどが「いつか片付けよう」のまま数年単位で残り続けます。しかし屋外は雨風と紫外線で劣化が速く、放置するほどサビ・破損・コケで状態が悪くなり、売却や譲渡の選択肢が消えて処分の負担だけが増えていきます。",
  },
  {
    title: "「重い・大きい・分解できない」が撤去のハードルになる",
    body: "庭の不用品には、コンクリート台つきの物干し台、スチール製の遊具、大型のプランターなど、一人では動かせない重量物が多く含まれます。持ち上げられない、玄関や門を通らない、解体に工具が必要、といった物理的なハードルがあるため、「捨てたい気持ちはあるのに動かせない」状態で止まりがちです。無理に動かそうとすると腰を痛めたり、倒れてけがをしたりする危険もあるため、撤去の段取りを立ててから着手することが大切です。",
  },
  {
    title: "土・石・ブロックなど自治体で収集できないことが多い品目がある",
    body: "庭の片付けを難しくしている最大の要因が、処分ルートが特殊な品目の存在です。土・砂・石・レンガ・コンクリートブロックなどは、多くの自治体で「収集できない物」に位置づけられており、通常のごみにも粗大ごみにも出せないのが一般的です。園芸店やホームセンターの引き取りサービス、専門の処理業者、自治体窓口への相談など、品目ごとに行き先を確認する必要があります。この「どう捨てればいいか分からない物」が、庭の片付け全体を止めてしまうのです。",
  },
];

const merits = [
  {
    title: "品目別の考え方1：物干し台・遊具・自転車などの金属製大型品",
    body: "スチール製の物干し台や遊具、乗らなくなった自転車などは、多くの自治体で粗大ごみとして収集対象になるのが一般的です。ただしサイズの上限や解体の要否は自治体により異なるため、申し込み前に品目名を挙げて確認しましょう。物干し台のコンクリート台は本体と扱いが分かれることが多く、コンクリート部分は収集対象外とされる地域もあります。粗大ごみの一般的な流れは粗大ごみ申し込みの流れの記事も参考にしてください。",
  },
  {
    title: "品目別の考え方2：植木鉢・プランター・土は「容器」と「中身」を分ける",
    body: "植木鉢やプランターは、素材（プラスチック・素焼き・陶器）によって分別区分が変わるのが一般的で、中の土を抜いてから出すのが基本です。問題は土の行き先で、土は「ごみ」として収集しない自治体が多く、園芸店・ホームセンターの回収サービスや土の再生利用、購入店への相談などが現実的な選択肢になります。自治体によっては少量の土の扱いを案内している場合もあるため、まずは分別案内や窓口で確認しましょう。",
  },
  {
    title: "品目別の考え方3：ブロック・レンガ・物置などの構造物は専門ルート",
    body: "コンクリートブロック、レンガ、敷石などは建築資材にあたるため、自治体収集の対象外とされることが多い品目です。少量なら購入したホームセンターの引き取りサービス、量が多い場合は産業廃棄物や不用品回収に対応する業者への相談が現実的です。スチール物置やウッドデッキなど解体が必要な構造物は、中身の整理と解体を分けて考えます。物置の解体前の段取りは物置・倉庫を解体する前の整理で詳しく解説しています。",
  },
];

const steps = [
  {
    title: "庭全体を見渡して不用品をリストアップする",
    body: "最初に庭を一周し、処分したい物をすべて書き出します。写真を撮っておくと、自治体窓口や業者への相談時にそのまま使えて便利です。リストには「品目・素材・大きさ・自力で動かせるか」をメモしておくと、後の分別と処分ルート確認が速くなります。この段階では捨てるかどうか迷う物も含めて全部書き出すのがポイントです。全体量が見えると、自力で終わる規模なのか、業者に頼む規模なのかの判断もつきやすくなります。",
  },
  {
    title: "「使う・手放す・処分方法の確認が必要」の3つに分ける",
    body: "リストアップした物を「今後も使う」「手放す（処分・売却・譲渡）」「土・ブロックなど処分方法の確認が必要な物」の3グループに分けます。ポイントは、処分ルートが特殊な品目を最初から別枠にしておくことです。状態のよいガーデニング用品や遊具は中古市場で需要があることもあり、売却や知人への譲渡も選択肢になります。処分ルート全体の考え方は不用品の処分ルート比較を参考にしてください。",
  },
  {
    title: "自治体・購入店に処分ルートを確認する",
    body: "手放す物のうち、粗大ごみで出せる物とそうでない物を自治体の分別案内で確認します。土・石・ブロックなど収集対象外とされた品目は、購入したホームセンター・園芸店の引き取りサービスや、自治体窓口で案内される処理ルートを確認しましょう。品目ごとに確認先が異なるため、リストを手元に置いてまとめて問い合わせると効率的です。確認結果をリストに書き込んでいけば、そのまま撤去計画になります。",
  },
  {
    title: "搬出日を決めて、軽い物から順に撤去する",
    body: "粗大ごみの収集日や引き取り日が決まったら、それに合わせて撤去作業を行います。順番は「軽い物・小さい物から」が原則です。先に細かい物を片付けて作業スペースを確保してから、重量物に取りかかります。コンクリート台つき物干し台などの重量物は、必ず二人以上で運ぶか、台と本体を分離してから動かしましょう。軍手・長袖・底の厚い靴を着用し、ハチや虫がいないか確認してから物を動かすと安全です。",
  },
  {
    title: "「庭に置きっぱなしにしない」ルールを決めて維持する",
    body: "撤去が終わったら、庭が再び物置化しないためのルールを決めます。有効なのは「庭に置く物は用途と置き場所を決めてから」「使わなくなったガーデニング用品はシーズン終わりに見直す」「劣化する前に手放す」といった取り決めです。屋外の物は傷むのが速いため、「まだ使えるうちに手放す」ほうが売却・譲渡の選択肢が残り、結果的に処分の負担が小さくなります。年1回、庭を見渡す日を決めておくのがおすすめです。",
  },
];

const ngActions = [
  {
    title: "土や石を公園・空き地・道路に捨てる",
    body: "植木鉢の土や庭石を、公園・空き地・川原・道路脇などに捨てるのは絶対にやめてください。たとえ自然由来の土でも、他人の土地や公共の場所に捨てれば不法投棄として扱われるおそれがあります。土は自治体で収集しないことが多い品目だからこそ、園芸店・ホームセンターの回収サービスや自治体窓口への相談など、正規のルートで行き先を決めることが大切です。正しい処分の考え方は不法投棄の注意点と正しい処分方法で解説しています。",
  },
  {
    title: "ブロックやレンガを砕いて通常ごみに混ぜる",
    body: "コンクリートブロックやレンガを細かく砕けば燃えないごみに出せる、と考えるのはNGです。建築資材系の品目は、砕いても収集対象外とする自治体が多く、収集作業員のけがや収集車の故障の原因にもなります。ハンマーで砕く作業自体も破片の飛散でけがをしやすく危険です。量が少なくても自己判断で混ぜず、自治体の分別案内で扱いを確認し、案内されたルートで処分しましょう。",
  },
  {
    title: "コンクリート台つきの物干し台や遊具を一人で動かす",
    body: "コンクリート台は見た目以上に重く、一人で持ち上げようとすると腰を痛めたり、足の上に落として大けがをしたりする危険があります。スチール遊具も、サビて強度が落ちた部分が作業中に折れることがあります。重量物は必ず二人以上で、可能なら分解してから運ぶのが原則です。自力で動かせない重量物が複数ある場合は、無理をせず搬出ごと業者に任せましょう。大型品の搬出の考え方は大型家具の処分の記事も参考になります。",
  },
  {
    title: "巡回する無料回収トラックにまとめて引き渡す",
    body: "「無料で回収します」とアナウンスしながら巡回するトラックに、庭の不用品をまとめて渡すのは避けましょう。積み込み後に費用を請求されるトラブルや、回収物の不法投棄事例が消費者庁・自治体から繰り返し注意喚起されています。困ったときの相談先は消費者ホットライン188や自治体窓口です。詳しくは無料回収をうたう業者の注意点にまとめています。回収を依頼する場合は、廃棄物の処理に必要な許可を確認できる業者を選ぶのが原則です。",
  },
];

const judgeSigns = [
  "コンクリート台・大型遊具・庭石など一人では動かせない重量物がある",
  "土・ブロックなど処分ルートが特殊な品目が多く、確認と持ち込みが負担",
  "物置やウッドデッキの解体・撤去まで視野に入れている",
  "実家・空き家の庭で、遠方のため何度も通えない",
  "草木の伐採・抜根など片付け以外の作業もまとめて頼みたい",
];

const faqs = [
  {
    q: "植木鉢の土はどう処分すればよいですか？",
    a: "土は「ごみ」として収集しない自治体が多く、通常ごみ・粗大ごみのどちらにも出せないのが一般的です。園芸店やホームセンターの土の回収サービス、購入店への相談、土の再生利用（ふるいにかけて再利用材と混ぜる）が現実的な選択肢です。自治体によっては少量の扱いを案内している場合もあるため、分別案内や窓口で確認してください。公園や空き地に捨てるのは不法投棄にあたるおそれがあり、絶対に避けましょう。",
  },
  {
    q: "物干し台のコンクリート台はどう捨てればよいですか？",
    a: "物干し竿と支柱部分は粗大ごみとして収集する自治体が多い一方、コンクリート台は収集対象外とされる地域があります。本体と台で扱いが分かれることが多いため、申し込み時に「コンクリート台つき」と伝えて確認するのが確実です。収集対象外とされた場合は、ホームセンターの引き取りサービスや不用品回収業者への依頼が選択肢になります。扱いは自治体により異なります。",
  },
  {
    q: "使わなくなった遊具や自転車は売れますか？",
    a: "状態がよければ、中古の遊具・自転車・ガーデニング用品には一定の需要があります。ただし屋外で長期間雨ざらしになった物はサビや劣化で値がつきにくく、処分費用のほうが現実的になることも多いです。売却を考えるなら、劣化が進む前に早めに手放すのがポイントです。売却と片付けの併用はリサイクルショップ・買取の併用の記事で詳しく解説しています。",
  },
  {
    q: "庭の片付けと草刈り・伐採をまとめて頼めますか？",
    a: "不用品回収業者や片付け業者の中には、庭の不用品撤去と草刈り・伐採・抜根をまとめて請け負うところもあります。対応範囲は業者により異なるため、見積もり時に庭全体の写真を見せて相談するのが確実です。作業内容・物量により料金は異なるため、複数社の見積もりで作業範囲と費用を比較してから依頼しましょう。",
  },
];

const related = [
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置の解体前の整理", desc: "解体前に中身を空にする段取り" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しい物の処分", desc: "スプレー缶・電池などの扱い方" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "不用品の積み放題プランがある業者" },
  { href: "/area/chiba/", label: "千葉の片付け業者比較", desc: "千葉から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "庭の不用品処分" },
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
    { href: "#kiso", label: "1｜庭に不用品がたまる3つの構造" },
    { href: "#merit", label: "2｜品目別・処分ルートの考え方" },
    { href: "#houshin", label: "3｜片付けを始める前の全体方針" },
    { href: "#steps", label: "4｜庭の不用品処分の5ステップ" },
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

      <Breadcrumb items={[{ label: "庭の不用品処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          庭の不用品処分｜物干し台・遊具・植木鉢・土の捨て方と進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          使わなくなった物干し台、子どもが卒業した遊具、空の植木鉢、崩れかけたブロック——庭の隅にたまった不用品は、生活の邪魔にならない分だけ後回しにされ、気づけば何年も置きっぱなしになりがちです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、庭に不用品がたまる構造、土・ブロックなど処分ルートが特殊な品目の考え方、リストアップから撤去までの5ステップ、不法投棄につながるNG行動、業者に任せるべきケースの判断基準までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>庭の片付けは「全体をリストアップ→3分類→処分ルート確認→撤去」の順で進める</li>
          <li>物干し台・遊具などの金属大型品は粗大ごみ対象になることが多い（自治体確認が前提）</li>
          <li>土・石・ブロックは自治体で収集しないことが多く、購入店・専門ルート・窓口相談が基本</li>
          <li>土を公園に捨てる・ブロックをごみに混ぜるのは絶対NG。重量物が多いなら業者が安全で速い</li>
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

      <H2 id="kiso" num="1">庭に不用品がたまる3つの構造</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        なぜ庭の不用品は何年も放置されてしまうのか。構造を知っておくと、片付けの優先順位と再発防止に役立ちます。
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
        庭の片付けの山場は「処分ルートが特殊な品目」の扱いです。よくある品目別に考え方を整理します。
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
        大原則は、「処分ルートが特殊な品目を最初から別枠にし、行き先を確認してから動かす」ことです。土・ブロックなどを通常の不用品と混ぜてしまうと、処分段階で必ず手戻りが発生します。また、庭は重量物が多いため、無理をしない・一人でやらないことも重要です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        不用品全般の処分ルートの選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>を、自治体回収と業者回収の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者どっちに頼む？</Link>を参考にしてください。屋外スペースの片付けという意味では<Link href="/veranda-katazuke/" className="text-primary underline underline-offset-2">ベランダの片付け</Link>や<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">車庫・ガレージの片付け</Link>とも共通しますが、庭は土・構造物という特殊品目が多い分、事前確認の比重が大きくなります。
      </p>

      <H2 id="steps" num="4">庭の不用品処分の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「リストアップ→3分類→ルート確認→撤去→維持ルール」の流れを守ることです。
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
        次のいずれかに当てはまる場合は、自力にこだわらず業者への相談を検討しましょう。庭全体の写真があれば、具体的な見積もり相談ができます。
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
        本記事は一般的な知識の提供を目的としたものです。土・石・ブロック・物干し台などの分別区分や収集の可否は自治体により異なるため、必ずお住まいの市区町村の案内や引き取り先にご確認ください。業者へ依頼する際の料金は物量・品目・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
