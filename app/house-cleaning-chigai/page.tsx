import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/house-cleaning-chigai/";
const TITLE = "ハウスクリーニングと片付け業者の違い｜どっちに頼むべきかの判断基準";
const DESC =
  "ハウスクリーニングは「汚れを落とす」専門サービス、片付け業者は「物を仕分けて運び出す」専門サービスです。それぞれの得意分野と対応範囲の違い、部屋の状態別にどちらへ頼むべきかの判断基準、依頼前に自分でやっておく5ステップ、業者選びのNG行動までを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ハウスクリーニングは「汚れを落とす」プロ",
    body: "ハウスクリーニングは、エアコン内部、キッチンの油汚れ、浴室の水あか・カビ、換気扇、床のワックスがけなど、住まいの汚れを専用の機材と洗剤で落とすことを専門とするサービスです。前提となるのは「物がある程度片付いている部屋」で、作業対象は物ではなく設備や建材の汚れです。逆に、大量の物の仕分けや不用品の引き取りは、基本的にハウスクリーニングの守備範囲ではありません。",
  },
  {
    title: "片付け業者は「物を仕分けて運び出す」プロ",
    body: "片付け業者（片付け代行・不用品回収業者）は、部屋にあふれた物の仕分け、袋詰め、搬出、処分までを担うサービスです。ゴミ屋敷・汚部屋の片付け、遺品整理、引っ越し前の不用品処分などが典型的な依頼内容で、物量の多い現場を短時間で空にすることを得意とします。業者によっては簡易清掃や消臭までセットで対応しますが、エアコン分解洗浄のような専門クリーニングは別サービスになるのが一般的です。",
  },
  {
    title: "判断の軸は「いま部屋を困らせているのは物か、汚れか」",
    body: "どちらに頼むべきか迷ったら、「部屋の問題は物の量なのか、汚れなのか」を考えてみてください。床が見えないほど物がある、不用品を運び出せない、という悩みなら片付け業者。物は少ないが水回りの汚れやエアコンの臭いが気になる、というなら、ハウスクリーニングです。両方が問題の場合は、先に片付け、その後にクリーニング、という順番になります。",
  },
];

const merits = [
  {
    title: "状態別の目安：物が多いなら片付け業者が先",
    body: "床に物が積み重なっている、収納に入りきらない物があふれている、という状態では、クリーニングを頼んでも作業スペースがなく、本来の効果を発揮できません。物量が問題の部屋は、まず片付け業者で物を減らし、床や設備が見える状態にすることが先決です。部屋の散らかり度合いの目安は、汚部屋レベルチェックの記事で確認できます。",
  },
  {
    title: "状態別の目安：物は普通でも汚れが落ちないならハウスクリーニング",
    body: "自分で掃除しても落ちない浴室の水あか・カビ、キッチンの焦げ付いた油汚れ、エアコンの内部の臭いなどは、家庭用洗剤では限界があり、専門の機材・洗剤を使うハウスクリーニングの出番です。退去前の清掃や、年末などの節目にまとめて依頼する使い方が一般的です。日常の掃除で対処できる範囲は自力清掃ガイドも参考にしてください。",
  },
  {
    title: "両方必要な現場は「片付け→清掃」の順。一括対応の業者もある",
    body: "ゴミ屋敷状態の部屋や長期間放置された空き家では、物の撤去と本格清掃の両方が必要になることがあります。この場合の順番は必ず「片付けが先、清掃が後」です。ゴミ屋敷の片付けに特化した業者の中には、搬出後の清掃・消臭まで一貫対応するところもあるため、両方必要な場合は見積もり時に対応範囲を確認すると、手配が1回で済みます。",
  },
];

const steps = [
  {
    title: "部屋の写真を撮り、「物の問題」と「汚れの問題」を書き出す",
    body: "まず部屋全体と気になる箇所の写真を撮り、「物が多くて困っていること」と「汚れで困っていること」を分けて書き出します。この整理だけで、どちらの業者に相談すべきかがほぼ決まります。写真は業者への見積もり依頼時にそのまま使えるため、正確な金額を出してもらう材料にもなります。",
  },
  {
    title: "依頼の目的とゴールを決める（誰のため・いつまでに・どの状態に）",
    body: "「退去日までに空にしたい」「来客までに水回りをきれいにしたい」「親が安全に暮らせる部屋にしたい」など、目的と期限を明確にします。ゴールが決まると、必要なサービスの範囲（片付けのみ、清掃のみ、両方、消臭まで）が定まり、見積もりの比較もしやすくなります。",
  },
  {
    title: "自分でできる範囲を先にやり、依頼範囲を絞る",
    body: "貴重品や残したい物の確保、明らかなごみの袋詰めなど、自分でできる範囲を先に進めておくと、業者に依頼する作業量を絞れます。ただし、無理は禁物です。大型家具の移動や高所の作業、体調に影響しそうな汚れへの対応は、業者に任せる前提で構いません。自力で進める場合の手順は部屋を片付ける順番の記事が参考になります。",
  },
  {
    title: "該当するサービスの業者2〜3社から見積もりを取る",
    body: "片付け業者・ハウスクリーニングとも、料金体系や対応範囲は業者ごとに異なります。写真と要望を伝えて2〜3社から見積もりを取り、金額だけでなく「作業範囲に何が含まれるか」「追加料金が発生する条件」を比較しましょう。物量や汚れ具合で金額は大きく変わるため、訪問見積もりや写真見積もりで実態を見てもらうのが確実です。",
  },
  {
    title: "作業内容・追加費用・キャンセル条件を確認して契約する",
    body: "契約前に、作業日時、作業範囲、処分する物の扱い、追加費用の条件、キャンセル料の規定を書面や見積書で確認します。「当日になって追加料金を求められた」というトラブルを避けるには、事前の確認が何よりの防御になります。極端に安い金額を提示して契約を急がせる業者は避け、説明が明確な業者を選びましょう。",
  },
];

const ngActions = [
  {
    title: "物だらけの部屋にハウスクリーニングだけを頼む",
    body: "床や設備が物で覆われた状態では、クリーニングの作業自体ができず、断られるか、片付け作業の追加が必要になります。物量が問題の部屋は、先に片付け（自力または片付け業者）を済ませてからクリーニングを頼みましょう。順番を間違えると、二度手間と余計な出費につながります。",
  },
  {
    title: "「クリーニング込み」の言葉だけで作業範囲を確認しない",
    body: "片付け業者の「清掃込み」は、掃き掃除・拭き掃除程度の簡易清掃を指す場合が多く、エアコン分解洗浄や浴室の本格クリーニングまで含むとは限りません。逆にハウスクリーニングの「お任せプラン」に不用品処分は含まれないのが普通です。言葉の印象で判断せず、具体的に何をどこまでやるのかを見積もりで確認してください。",
  },
  {
    title: "料金の安さだけで業者を選ぶ",
    body: "相場よりも大幅に安い金額を掲げて集客し、作業後に高額な追加料金を請求する事例は、片付け・清掃の分野でも注意喚起されています。金額の安さだけで飛びつかず、会社情報や許可・実績、料金の内訳、追加費用の条件を確認しましょう。不用品の処分を伴う場合は、廃棄物の処理に必要な許可を確認できる業者であることが大前提です。見分け方は違法業者の見分け方の記事にまとめています。",
  },
  {
    title: "特殊な状況（強い臭い・生き物の痕跡・原状回復）を通常サービスで済ませようとする",
    body: "強い臭いが染み付いた部屋、害虫が発生している部屋、孤独死があった部屋などは、通常のクリーニングや片付けでは対応しきれず、特殊清掃と呼ばれる専門サービスの領域になります。無理に通常サービスで済ませようとせず、状況を正直に伝えて対応可能な業者を探しましょう。特殊清掃の内容は特殊清掃とはの記事で解説しています。",
  },
];

const judgeSigns = [
  "物の量が多く、自力の片付けでは期限に間に合わない",
  "自分で掃除しても落ちない汚れ・臭いがある",
  "片付けと清掃の両方が必要で、一括で任せられる業者を探したい",
  "高齢の家族の家など、体力的に自分たちだけでは作業できない",
  "退去・売却などの期限があり、確実に仕上げる必要がある",
];

const faqs = [
  {
    q: "ハウスクリーニングと片付け業者、迷ったらどちらに相談すればよいですか？",
    a: "「部屋を困らせているのが物なのか汚れなのか」で判断してください。物の量が問題なら片付け業者、物は普通で汚れが問題ならハウスクリーニングです。両方が問題なら、片付け→清掃の順になります。判断がつかない場合は、部屋の写真を撮って片付け業者に相談すると、対応範囲を含めて案内してもらえます。",
  },
  {
    q: "片付け業者に掃除もお願いできますか？",
    a: "多くの片付け業者は、搬出後の掃き掃除・拭き掃除といった簡易清掃に対応しています。ゴミ屋敷専門の業者では、消臭・除菌や本格的な清掃までセットにしているところもあります。ただし、エアコン分解洗浄などの専門クリーニングは対象外の場合が多いため、必要な作業を伝えて対応範囲を確認してください。",
  },
  {
    q: "ハウスクリーニングに不用品の処分は頼めますか？",
    a: "基本的にハウスクリーニングは汚れを落とすサービスで、不用品の引き取り・処分は対象外が一般的です。不用品の処分が必要な場合は、片付け業者・不用品回収業者に依頼するか、自治体の粗大ごみ収集を利用します。処分ルートの選び方は当サイトの不用品処分ルート比較の記事を参考にしてください。",
  },
  {
    q: "費用はどちらが高いですか？",
    a: "サービスの内容が異なるため単純比較はできません。ハウスクリーニングは箇所・メニュー単位、片付けは物量・間取り単位で料金が決まるのが一般的で、いずれも部屋の状態によって大きく変わります。正確な金額は、写真や訪問での見積もりを2〜3社から取って比較するのが確実です。費用の考え方は費用相場ページで解説しています。",
  },
];

const related = [
  { href: "/service/katazuke-daikou/", label: "片付け代行サービスの選び方", desc: "仕分けから搬出まで任せられる業者" },
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷清掃業者の選び方", desc: "片付けと清掃を一貫対応する業者" },
  { href: "/tokusou-seisou/", label: "特殊清掃とは", desc: "通常清掃との違いと必要になる場面" },
  { href: "/guide/self-cleanup/", label: "自力での片付け・清掃ガイド", desc: "自分で進めるための基本と道具" },
  { href: "/review/gomiyashiki-partners/", label: "ゴミ屋敷専門パートナーズの評判", desc: "消臭・清掃まで対応する専門業者" },
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
    { "@type": "ListItem", position: 2, name: "ハウスクリーニングと片付け業者の違い" },
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
    { href: "#kiso", label: "1｜ハウスクリーニングと片付け業者の違い" },
    { href: "#merit", label: "2｜部屋の状態別・どちらに頼むかの目安" },
    { href: "#houshin", label: "3｜依頼を決める前の全体方針" },
    { href: "#steps", label: "4｜失敗しない依頼準備の5ステップ" },
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

      <Breadcrumb items={[{ label: "ハウスクリーニングと片付け業者の違い" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ハウスクリーニングと片付け業者の違い｜どっちに頼むべきかの判断基準
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「部屋をきれいにしたいが、ハウスクリーニングと片付け業者のどちらに頼めばいいのかわからない」——名前が似ているうえに対応範囲が一部重なるため、この2つのサービスは混同されがちです。しかし得意分野は明確に異なり、選び間違えると二度手間や余計な出費につながります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ハウスクリーニングと片付け業者それぞれの守備範囲、部屋の状態別にどちらへ頼むべきかの判断基準、依頼前に自分でやっておくべき準備、業者選びで避けたいNG行動までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ハウスクリーニングは「汚れを落とす」プロ、片付け業者は「物を仕分けて運び出す」プロ</li>
          <li>判断の軸は「部屋を困らせているのは物か、汚れか」。物なら片付け業者、汚れならクリーニング</li>
          <li>両方必要な部屋は必ず「片付け→清掃」の順。一貫対応の業者なら手配は1回で済む</li>
          <li>「清掃込み」「お任せ」の言葉で判断せず、作業範囲と追加費用の条件を見積もりで確認する</li>
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

      <H2 id="kiso" num="1">ハウスクリーニングと片付け業者の違い</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、2つのサービスの守備範囲を整理しておきましょう。この違いがわかれば、選び間違いはほぼ防げます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">部屋の状態別・どちらに頼むかの目安</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        自分の部屋の状態に当てはめて、どちらのサービスが合うかを確認してみましょう。目安は次の3パターンです。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">依頼を決める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        依頼の大原則は、「物の問題と汚れの問題を切り分け、必要なサービスを必要な順番で頼む」ことです。切り分けができていれば、不要なサービスにお金を払うことも、対応外の作業を期待して失望することもなくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物量が多い部屋の片付けサービスの詳細は<Link href="/service/katazuke-daikou/" className="text-primary underline underline-offset-2">片付け代行サービスの選び方</Link>を、片付けと清掃の一貫対応が必要なケースは<Link href="/service/gomiyashiki/" className="text-primary underline underline-offset-2">ゴミ屋敷清掃業者の選び方</Link>を参考にしてください。強い臭いや衛生上の問題がある部屋は<Link href="/tokusou-seisou/" className="text-primary underline underline-offset-2">特殊清掃とは</Link>で解説する専門領域になります。
      </p>

      <H2 id="steps" num="4">失敗しない依頼準備の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、業者選びで失敗しないための準備を5つのステップで紹介します。ポイントは「切り分け→ゴール設定→範囲を絞って相見積もり」です。
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
        次のいずれかに当てはまる場合は、自力にこだわらず業者への相談を検討しましょう。部屋の写真があれば、電話やフォームからでも具体的な相談ができます。
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
        片付けと清掃の一貫対応なら、消臭・清掃まで対応する<Link href="/review/gomiyashiki-partners/" className="text-primary underline underline-offset-2">ゴミ屋敷専門パートナーズ</Link>のような専門業者が候補になります。ハウスクリーニングの事業者を口コミで比較したい場合は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>が活用できます。東京での業者選びは<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者比較</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。各サービスの対応範囲・料金は業者により異なるため、依頼前に必ず見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。ごみの分別・出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
