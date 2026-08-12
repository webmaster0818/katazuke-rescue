import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/heya-shoushuu/";
const TITLE = "部屋の臭いが消えないときの消臭手順｜原因の切り分けと対処法";
const DESC =
  "換気や消臭スプレーでも部屋の臭いが消えないときは、臭いの発生源が残っているサインです。生ゴミ・カビ・皮脂・タバコ・ペットなど原因別の特徴と切り分け方、発生源の除去から始める消臭5ステップ、逆効果になりやすいNG行動、清掃業者に相談すべきサインまでを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const causes = [
  {
    title: "生ゴミ・放置された食品——特に多く、対処しやすい原因",
    body: "台所の生ゴミ、飲み残しのペットボトル、食べ残しの容器などは、腐敗が進むと部屋全体に広がる強い臭いを発します。ゴミ袋の中や冷蔵庫の奥、コンロまわりの油汚れも発生源になります。臭いの元が「物」として存在するため、撤去と清掃で大きく改善しやすいのがこのタイプです。部屋にゴミがたまっている場合は、消臭より先に片付けが必要です。",
  },
  {
    title: "カビ・湿気——閉め切った部屋や水回りにこもる土のような臭い",
    body: "カビ臭は、湿気がこもりやすい浴室・押し入れ・エアコン内部・結露する窓まわり・家具の裏などで発生します。墨汁や土のような臭いが特徴で、換気しても発生源のカビが残っている限り臭いは戻ってきます。カビは臭いだけでなく健康面への影響も指摘されるため、見えるカビがある場合は消臭と並行してカビ取りが必要です。詳しくは部屋のカビ清掃の記事で解説しています。",
  },
  {
    title: "皮脂・汗・寝具——本人は気づきにくい生活臭",
    body: "寝具・カーテン・ソファ・カーペットなどの布製品は、皮脂や汗を吸って生活臭の発生源になります。長期間洗っていない枕や布団、干していないマットレスは特に臭いがこもりやすい場所です。本人は慣れて気づきにくく、来客に指摘されて初めて気づくケースが多いのもこのタイプの特徴です。布製品の洗濯・天日干し・買い替えが基本の対処になります。",
  },
  {
    title: "タバコ・ペット・排水口など、染み付き系・設備系の臭い",
    body: "タバコのヤニは壁紙や天井に染み付き、ペットの臭いはカーペットや床材に蓄積します。これらは表面の拭き掃除だけでは取り切れないことがあり、程度によっては壁紙の張り替えなど原状回復の領域になります。また、排水口の封水切れ（長期間水を流していない部屋で起こりやすい）や排水管の汚れは、下水のような臭いの原因になります。排水口に水を流す・トラップを掃除するだけで改善する場合もあります。",
  },
];

const points = [
  {
    title: "「換気しても戻る臭い」は発生源が残っている",
    body: "換気や消臭スプレーで一時的に薄れても、数時間後に戻ってくる臭いは、発生源が部屋の中に残っている証拠です。空気だけを処理しても解決しないため、「どこから臭うのか」を突き止めることが最優先になります。鼻を近づけて場所を絞り込む、部屋を離れて鼻をリセットしてから戻る、といった地道な方法が意外と有効です。",
  },
  {
    title: "臭いの種類から発生源を推測する",
    body: "腐敗臭なら生ゴミ・食品、土や墨汁のような臭いならカビ、酸っぱい臭いなら皮脂や汗の染みた布製品、下水のような臭いなら排水口、というように、臭いの種類は発生源のヒントになります。複数の臭いが混ざっている部屋では、強い発生源から順に対処すると効率的です。",
  },
  {
    title: "物が多い部屋は「臭いの発生源を探せない」状態にある",
    body: "床が物で覆われた部屋では、こぼれた飲み物や忘れられた食品が物の下に埋もれ、発生源の特定自体ができません。この状態で消臭剤を増やしても効果は限定的です。臭いが気になる部屋の物量が多い場合は、消臭の第一歩は片付けです。片付けの進め方は片付けの順番の記事を参考にしてください。",
  },
];

const steps = [
  {
    title: "臭いの発生源になっている「物」を撤去する",
    body: "生ゴミ、飲み残し、食べ残し、汚れた衣類、湿った布類など、臭いを発している物そのものをゴミ袋にまとめて部屋から出します。ゴミ袋は口をしっかり縛り、収集日まで室内に置く場合はフタ付きの容器に入れると臭い漏れを抑えられます。発生源が埋もれて見つからない場合は、まず床が見える状態まで片付けることが先決です。",
  },
  {
    title: "発生源があった場所を洗剤で清掃する",
    body: "臭いの元を撤去しても、液だれや腐敗した汚れが床や棚に残っていると臭いは続きます。発生源があった場所とその周辺を、住宅用洗剤などで拭き掃除しましょう。台所の油汚れ、冷蔵庫内、ゴミ箱本体も忘れやすいポイントです。洗剤を使う際は製品の注意書きに従い、特に塩素系と酸性タイプの洗剤は絶対に混ぜないでください。有毒ガスが発生し大変危険です。",
  },
  {
    title: "布製品を洗濯・天日干しし、洗えない物は買い替えも検討する",
    body: "カーテン・寝具カバー・クッションカバーなど洗える布製品はまとめて洗濯し、布団やマットレスは天日干しや布団乾燥機で湿気を飛ばします。長年臭いが染み込んだカーペットや古い寝具は、洗っても臭いが取り切れないことがあり、その場合は処分・買い替えが早道です。布団・マットレスの処分方法は布団・マットレスの処分の記事で解説しています。",
  },
  {
    title: "換気の通り道を作り、湿気をためない環境にする",
    body: "対角線上の2か所の窓（または窓と換気扇）を開けて空気の通り道を作り、こもった空気を入れ替えます。家具を壁から少し離す、押し入れやクローゼットを定期的に開放する、結露をこまめに拭くなど、湿気をためない環境づくりはカビ臭の再発防止に直結します。エアコンから臭いがする場合は、フィルター清掃を行い、内部の汚れが疑われる場合は専門のクリーニングを検討しましょう。",
  },
  {
    title: "残った臭いに消臭剤・重曹などを使い、数日単位で様子を見る",
    body: "発生源の除去と清掃・換気を終えた後に残るわずかな臭いには、置き型消臭剤や重曹（小皿に入れて置くと臭いを吸着します）などを使います。消臭剤はあくまで仕上げであり、発生源が残ったまま使っても解決しません。対処後は数日単位で臭いの変化を観察し、それでも戻ってくる場合は、壁紙への染み付きや床下・配管など、自力では対処しにくい原因を疑うタイミングです。",
  },
];

const ngActions = [
  {
    title: "発生源を探さず、芳香剤・消臭スプレーだけで上書きしようとする",
    body: "発生源が残ったまま芳香剤を使うと、臭いが混ざってかえって不快になることがあります。芳香剤・消臭剤は「発生源の除去と清掃が終わった後の仕上げ」と位置づけ、まずは臭いの元を断つことに集中しましょう。",
  },
  {
    title: "塩素系と酸性タイプの洗剤を併用・混合する",
    body: "カビ取りに使われる塩素系洗剤と、水あか取りなどに使われる酸性タイプの洗剤が混ざると、有毒な塩素ガスが発生し、命に関わる危険があります。同じ日に同じ場所で使うことも避け、必ず製品の「まぜるな危険」表示と注意書きに従ってください。使用中の換気も必須です。",
  },
  {
    title: "臭いの染みた寝具・カーペットを「洗えば戻る」と抱え続ける",
    body: "長期間臭いが染み込んだ布製品は、家庭での洗濯では臭いが取り切れないことがあります。何度洗っても戻る臭いに時間を使い続けるより、買い替えたほうが早く確実な場合も多いものです。手放す際の処分方法は自治体ルールの確認を忘れずに。",
  },
  {
    title: "体調不良を我慢しながら作業を続ける",
    body: "強い臭いのする部屋での長時間作業は、頭痛や気分不良につながることがあります。必ず換気しながら作業し、マスクや手袋を着用し、体調に異変を感じたらすぐに中断してください。腐敗が進んだ物やカビが大量にある環境は、無理に自力で対処せず業者に任せる判断も大切です。",
  },
];

const judgeSigns = [
  "発生源の撤去・清掃・換気をしても、数日で同じ臭いが戻ってくる",
  "壁紙や床材に臭いが染み付いており、拭き掃除では取れない",
  "ゴミや物の量が多く、そもそも発生源を特定できる状態ではない",
  "カビや害虫の発生を伴っており、自力での清掃に不安がある",
  "退去・入居者対応などで、期限までに臭いを解消する必要がある",
];

const faqs = [
  {
    q: "換気しても部屋の臭いが取れないのはなぜですか？",
    a: "換気は空気を入れ替えるだけで、臭いの発生源そのものは除去できないためです。生ゴミ・カビ・皮脂の染みた布製品・排水口など、発生源が室内に残っている限り、臭いは繰り返し発生します。まず臭いの種類から発生源を推測し、「撤去→清掃→換気→仕上げの消臭」の順で対処するのが基本です。",
  },
  {
    q: "自分の部屋の臭いに自分では気づけません。確認する方法はありますか？",
    a: "臭いは慣れ（嗅覚の順応）により、住んでいる本人ほど気づきにくくなります。一度外の空気を数分吸ってから部屋に入り直す、外出から帰宅した直後の第一印象を意識する、といった方法である程度確認できます。来客の反応や、衣類に染みた臭いを指摘された経験があるなら、発生源探しから始めてみる価値があります。",
  },
  {
    q: "消臭を業者に頼むとどんな作業をしてもらえますか？",
    a: "業者や状況によりますが、ゴミや不用品の撤去、清掃、消臭・除菌作業などを組み合わせて行うのが一般的です。腐敗物や強い臭いを伴う部屋には、オゾン脱臭機などの専用機材を使う特殊清掃と呼ばれる作業が必要になる場合もあります。費用は部屋の状態・作業範囲により大きく異なるため、複数社の見積もりで内訳を比較してください。特殊清掃の内容は特殊清掃とはの記事で解説しています。",
  },
  {
    q: "賃貸の部屋に臭いが染み付いてしまいました。退去時に問題になりますか？",
    a: "タバコのヤニやペットの臭いなど、通常の使用を超える汚損・臭いの染み付きは、退去時の原状回復費用の負担につながる場合があります。負担の範囲は契約内容や状態によって異なるため、まず賃貸借契約書を確認し、不明点は管理会社・大家に相談してください。退去前の片付け・清掃の段取りは退去前の片付けの記事も参考になります。",
  },
];

const related = [
  { href: "/kabi-seisou/", label: "部屋のカビ掃除と再発防止", desc: "カビ臭の元を安全に除去する方法" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃手順", desc: "害虫と臭いが併発したときの対処" },
  { href: "/tokusou-seisou/", label: "特殊清掃とは？内容と依頼の流れ", desc: "強い臭い・汚損に対応する専門清掃" },
  { href: "/guide/self-cleanup/", label: "ゴミ屋敷を自分で片付ける方法", desc: "物が多い部屋の片付けの進め方" },
  { href: "/cost/price/", label: "片付け・清掃の費用相場", desc: "間取り・作業別の費用の考え方" },
  { href: "/area/tokyo/", label: "東京の片付け・清掃業者おすすめ", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "部屋の臭いが消えないときの消臭手順" },
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
    { href: "#genin", label: "1｜部屋の臭いの主な原因4タイプ" },
    { href: "#kiriwake", label: "2｜発生源を切り分ける3つのポイント" },
    { href: "#houshin", label: "3｜消臭の全体方針" },
    { href: "#steps", label: "4｜発生源から断つ消臭5ステップ" },
    { href: "#ng", label: "5｜逆効果・危険なNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "部屋の臭いが消えないときの消臭手順" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          部屋の臭いが消えないときの消臭手順｜原因の切り分けと対処法
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「換気しても消臭スプレーを使っても、部屋の臭いが消えない」「どこから臭っているのかわからない」——臭いの悩みが長引くのは、発生源が特定・除去できていないことがほとんどです。空気だけを処理しても、元が残っていれば臭いは必ず戻ってきます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、部屋の臭いの主な原因4タイプと発生源の切り分け方を整理したうえで、発生源の除去から始める消臭の5ステップ、逆効果や危険につながるNG行動、清掃業者に相談すべきサインまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>換気しても戻る臭いは、発生源（生ゴミ・カビ・布製品・排水口など）が室内に残っているサイン</li>
          <li>消臭の正しい順番は「発生源の撤去→清掃→洗濯・乾燥→換気→仕上げの消臭剤」</li>
          <li>芳香剤での上書きは解決にならず、塩素系と酸性タイプの洗剤の併用は危険なので厳禁</li>
          <li>壁紙への染み付きや、物が多くて発生源を探せない部屋は、業者への相談が現実的</li>
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

      <H2 id="genin" num="1">部屋の臭いの主な原因4タイプ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        部屋にこもる臭いの発生源は、大きく次の4タイプに分けられます。臭いの種類と発生しやすい場所を知ることが、切り分けの第一歩です。
      </p>
      <div className="space-y-6 mb-4">
        {causes.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kiriwake" num="2">発生源を切り分ける3つのポイント</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        原因のタイプがわかったら、実際に発生源を絞り込みます。切り分けの考え方は次の3つです。
      </p>
      <div className="space-y-4 mb-4">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{p.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{p.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">消臭の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        消臭の大原則は「発生源を断ってから空気を処理する」ことです。順番としては、①発生源の撤去、②その場所の清掃、③布製品の洗濯・乾燥、④換気と湿気対策、⑤仕上げの消臭剤、となります。多くの人がやりがちな「⑤だけを繰り返す」対処では、臭いは解決しません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、部屋にゴミや物が大量にある場合、消臭は片付けとセットでしか成立しません。物量が多い場合は、<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自分で片付ける方法</Link>や<Link href="/service/gomiyashiki/" className="text-primary underline underline-offset-2">ゴミ屋敷片付け業者の選び方</Link>を参考に、まず発生源を探せる状態を作ることから始めてください。
      </p>

      <H2 id="steps" num="4">発生源から断つ消臭5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の作業は次の5ステップで進めます。作業中は必ず窓を開けて換気し、マスク・ゴム手袋を着用しましょう。
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

      <H2 id="ng" num="5">逆効果・危険なNG行動4つ</H2>
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
        次のいずれかに当てはまる場合は、自力での消臭にこだわらず、片付け・清掃業者への相談を検討しましょう。染み付いた臭いには専用機材による脱臭が必要な場合があり、素人の対処では限界があります。
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
        本記事は一般的な知識の提供を目的としたものです。洗剤・薬剤は必ず製品の注意書きに従って使用し、塩素系と酸性タイプの製品は絶対に混ぜないでください。ごみの出し方・分別ルールは自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
