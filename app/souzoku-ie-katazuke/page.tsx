import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/souzoku-ie-katazuke/";
const TITLE = "相続した家の片付け｜いつから始める？段取りと専門家に相談すべき論点";
const DESC =
  "相続した家の片付けは、片付け作業そのものより「手を付ける前の確認」が重要です。相続の状況によっては家財の処分が問題になる場合があるため、専門家への確認を先に行いましょう。片付けを始めるタイミング、貴重品・書類の探し方、自力で進める5ステップ、NG行動、業者に任せる判断基準までを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "相続した家の片付けは「作業の前の確認」が最重要",
    body: "相続した家の片付けが通常の片付けと大きく違うのは、家の中の物が「故人の遺産」に関わる可能性がある点です。家財の中には財産的価値のある物や、相続手続きに必要な書類が含まれていることがあります。また、相続の状況（相続放棄を検討している、相続人が複数いる、遺言書があるかもしれない等）によっては、家財の処分が問題になる場合があるとされています。だからこそ、本格的な片付けは、相続の方針がある程度固まってから始めるのが安全です。",
  },
  {
    title: "相続放棄を検討しているなら、片付けの前に専門家へ",
    body: "故人に借金などの債務があり相続放棄を検討している場合、家財の処分などの行為が相続にどう影響するかは、状況によって判断が分かれる難しい論点とされています。当サイトで断定的なことは言えません。相続放棄の可能性が少しでもあるなら、家の物に手を付ける前に、弁護士・司法書士などの専門家や、自治体・法テラスの相談窓口に相談してください。相談してから片付けても遅くはありません。",
  },
  {
    title: "相続人が複数いる場合は、片付け前の合意が必須",
    body: "家財は原則として相続財産の一部であり、相続人の共有に属する状態になっていることがあります。一人の判断で処分を進めると、後から「価値のある物を勝手に処分した」「形見の品を捨てられた」といったトラブルに発展しかねません。片付けを始める前に、相続人全員で「いつ・誰が・どの範囲を片付けるか」「貴重品が見つかったらどうするか」を話し合い、できれば記録に残しておきましょう。",
  },
];

const merits = [
  {
    title: "期限のある手続きが多いため、書類探しは早めに始める価値がある",
    body: "相続に関わる手続きには、期限が設けられているものが複数あるとされています（相続放棄等の申述、相続税の申告、相続登記など。期限や要否は状況により異なります）。手続きに必要な書類や財産の手がかり（通帳・証書・契約書類・権利証など）は家の中から探すことになるため、「貴重品と書類を探す作業」だけは早めに始める価値があります。具体的な期限や必要書類は、専門家や税務署・法務局などの窓口で確認してください。",
  },
  {
    title: "家の今後（住む・売る・貸す・空き家管理）で片付けのゴールが変わる",
    body: "相続した家を自分たちが使うのか、売却・賃貸に出すのか、当面空き家として管理するのかによって、片付けのゴールは大きく変わります。売却・賃貸なら家財の全撤去が基本になり、当面管理するなら貴重品の回収と傷みやすい物の処分が優先になります。方針が決まらないうちは「貴重品・書類の確保」と「腐敗・害虫につながる物の撤去」までに留め、全体の片付けは方針決定後に行うと無駄がありません。",
  },
  {
    title: "放置するほど、家と家財の状態は悪化する",
    body: "人が住まなくなった家は、通気がされないことで湿気がこもり、カビや害虫、家財の傷みが進みやすくなります。管理されていない空き家は、防犯・防災面や近隣への影響の観点からも問題になり得ます。相続の方針決定に時間がかかる場合でも、定期的な換気・通水・郵便物の回収といった最低限の管理は続けましょう。空き家の管理方法は空き家の片付けの記事で詳しく解説しています。",
  },
];

const steps = [
  {
    title: "相続の状況を確認し、必要なら片付け前に専門家へ相談する",
    body: "最初に、相続人は誰か、遺言書の有無、故人の債務の有無、相続放棄を検討する可能性があるかを確認します。判断に迷う点がある場合は、家財に手を付ける前に弁護士・司法書士・税理士などの専門家や、自治体の無料相談・法テラスに相談しましょう。問題がないことを確認してから片付けを始めるのが、結果的に一番の近道です。",
  },
  {
    title: "相続人間で片付けの範囲・分担・ルールを合意する",
    body: "相続人が複数いる場合は、片付けを始める前に「作業する日と参加者」「貴重品や思い出の品が見つかったときの扱い」「処分してよい物の範囲」を合意します。作業に参加できない相続人には、写真を共有しながら進めると誤解を防げます。形見分けの希望は先に聞いておくと、処分後のトラブルを避けられます。",
  },
  {
    title: "貴重品・重要書類・財産の手がかりを最優先で探す",
    body: "通帳・キャッシュカード、印鑑、保険証券、年金関係、不動産の権利証や契約書、有価証券、貴金属、そして遺言書やエンディングノートの類を最優先で探します。仏壇の引き出し、タンスの奥、本の間、金庫など、大事な物は意外な場所から見つかることがあります。見つけた物は1か所にまとめてリスト化し、相続人間で共有しましょう。故人のスマホやパソコンの扱いはデジタル遺品の整理の記事も参考になります。",
  },
  {
    title: "形見分け・残す物を確定し、残りを処分ルートへ仕分ける",
    body: "貴重品の確保が済んだら、相続人・親族で形見分けと残す物を確定し、残りを「売却・譲渡・処分」に仕分けます。まだ使える家具・家電はリサイクルショップや買取の活用も選択肢です。財産的価値がありそうな物（骨董品・貴金属・美術品など）は、独断で処分せず相続人間で扱いを確認してから手放しましょう。処分ルートの選び方は不用品の処分ルート比較の記事にまとめています。",
  },
  {
    title: "家の今後の方針に合わせて片付けを完了し、管理体制を決める",
    body: "売却・賃貸に出す場合は家財の全撤去まで進めます。当面空き家として残す場合は、腐敗する物・害虫の原因になる物を撤去したうえで、定期的な換気・通水・見回りの分担を決めます。遠方で通えない場合や物量が多い場合は、業者への依頼を検討するタイミングです。空き家を放置した場合のリスクはゴミ屋敷放置のリスクの記事でも触れています。",
  },
];

const ngActions = [
  {
    title: "相続の方針が決まる前に家財を大量処分する",
    body: "相続放棄の可能性がある場合や相続人間の合意がない状態での大量処分は、後から法的・感情的なトラブルの火種になり得ます。「とにかく早く片付けたい」という気持ちは自然ですが、急いでよいのは貴重品・書類の確保までです。処分を伴う片付けは、専門家への確認と相続人の合意が済んでから進めましょう。",
  },
  {
    title: "書類や郵便物を確認せずにまとめて捨てる",
    body: "故人宛ての郵便物は、取引のあった金融機関や契約中のサービスを知る重要な手がかりです。請求書・通知書の類も、債務や資産の存在を示すことがあります。古い書類の山も、権利証や証書が紛れている可能性があるため、面倒でも一通り確認してから処分してください。重要書類の見分け方は本・書類の整理の記事が参考になります。",
  },
  {
    title: "一人の判断で形見の品や価値のありそうな物を持ち帰る・処分する",
    body: "良かれと思った行動でも、他の相続人から見れば「勝手な持ち出し」に映ることがあります。骨董品・貴金属・美術品など財産的価値がありそうな物はもちろん、写真や手紙などの思い出の品も、扱いは相続人間で共有しながら決めましょう。作業の記録や写真を残しておくと、後の説明がしやすくなります。",
  },
  {
    title: "無許可の回収業者に家財をまとめて引き渡す",
    body: "家一軒分の家財処分はまとまった量になるため、安さをうたう無許可業者に頼んでしまうトラブルに注意が必要です。廃棄物の処理に必要な許可を確認できない業者は、不法投棄や高額請求のリスクがあります。許可や実績を確認できる業者から相見積もりを取りましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "家が遠方にあり、片付けに通える回数が限られている",
  "家一軒分の物量があり、相続人だけでは搬出・処分をやり切れない",
  "売却・賃貸の予定があり、期限までに家財の全撤去を終える必要がある",
  "貴重品・書類の捜索から仕分け・搬出まで一括で任せたい",
  "長期間閉め切っていた家で、臭い・カビ・害虫への対応も必要になっている",
];

const faqs = [
  {
    q: "相続した家の片付けはいつから始めればよいですか？",
    a: "貴重品・重要書類・財産の手がかりを探す作業は、手続きに必要になるため早めに始める価値があります。一方、家財の処分を伴う本格的な片付けは、相続放棄の可能性の有無や相続人間の合意を確認してからが安全です。相続の状況に不安がある場合は、片付けの前に弁護士・司法書士などの専門家に相談してください。",
  },
  {
    q: "相続放棄を考えている場合、家の物に触ってはいけないのですか？",
    a: "家財の処分などの行為が相続放棄にどう影響するかは、状況によって判断が分かれる難しい論点とされており、当サイトで断定的な回答はできません。相続放棄を検討しているなら、家財の処分や持ち出しを行う前に、必ず弁護士・司法書士などの専門家や法テラス・自治体の相談窓口に確認してください。",
  },
  {
    q: "遺言書らしきものが見つかったらどうすればよいですか？",
    a: "遺言書の取り扱いには法律上のルールがあり、種類によっては家庭裁判所の検認という手続きが必要とされています。見つけても自己判断で開封せず、そのままの状態で保管し、速やかに弁護士・司法書士などの専門家や家庭裁判所に確認してください。他の相続人への共有も忘れずに行いましょう。",
  },
  {
    q: "相続した家の片付けを業者に頼むと費用はどのくらいかかりますか？",
    a: "費用は家の広さ・物量・搬出条件・作業範囲（貴重品捜索、買取併用、全撤去かどうかなど）によって大きく異なるため、一律にいくらとは言えません。複数社から見積もりを取り、作業範囲と内訳を比較して判断するのが確実です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
];

const related = [
  { href: "/akiya-katazuke/", label: "空き家の片付けと管理", desc: "残置物の処分と家を空ける際の管理" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "自分で行う範囲と業者に任せる線引き" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "故人のスマホ・PC・ネット契約の扱い" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方", desc: "家財整理に対応する業者の選び方" },
  { href: "/review/minna-ihinseiri/", label: "みんなの遺品整理の評判", desc: "審査を通過した遺品整理業者の紹介サービス" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "間取り・作業別の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "相続した家の片付け" },
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
    { href: "#kiso", label: "1｜相続した家の片付けの基礎知識" },
    { href: "#merit", label: "2｜段取りを左右する3つのポイント" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める片付けの5ステップ" },
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

      <Breadcrumb items={[{ label: "相続した家の片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          相続した家の片付け｜いつから始める？段取りと専門家に相談すべき論点
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「親から相続した実家を片付けたいが、何から手を付けていいのかわからない」「勝手に処分して相続で揉めないか不安」——相続した家の片付けは、物量の多さに加えて、相続という法律の論点が絡むため、通常の片付けとは別の難しさがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、片付けを始める前に確認すべき相続の論点、始めるタイミング、貴重品・書類の探し方、自力で進める5つのステップ、避けるべきNG行動、業者に任せる判断基準までを解説します。なお、本記事は一般的な情報の提供にとどまるため、相続に関わる個別の判断は必ず専門家に相談してください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>相続放棄の可能性があるなら、家財に手を付ける前に弁護士・司法書士へ相談する</li>
          <li>相続人が複数いる場合は、片付けの範囲・貴重品の扱いを先に合意する</li>
          <li>早めに始めてよいのは「貴重品・重要書類・財産の手がかり探し」。大量処分は方針決定後に</li>
          <li>家の今後（住む・売る・貸す・管理する）で片付けのゴールを決めてから動く</li>
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

      <H2 id="kiso" num="1">相続した家の片付けの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、相続した家の片付けがなぜ慎重さを要するのか、手を付ける前に何を確認すべきかを整理しておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">段取りを左右する3つのポイント</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        相続した家の片付けの段取りは、次の3つのポイントを押さえると組み立てやすくなります。
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
        相続した家の片付けの大原則は、「確認が先、貴重品探しが次、大量処分は最後」という順番です。相続の論点を確認し、相続人間で合意し、貴重品と書類を確保する——ここまでを丁寧にやれば、その後の片付け作業自体は通常の家一軒の片付けと同じ要領で進められます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物の仕分けと形見分けの考え方は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める方法</Link>が、片付け後に家を空ける場合の管理は<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家の片付けと管理</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">自力で進める片付けの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際の手順を5つのステップで紹介します。ポイントは「専門家への確認と相続人の合意を済ませてから物を動かす」ことです。
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
        処分の実務では、<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>と<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>が参考になります。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ず家のある市区町村の公式サイトで確認してください。
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
        次のいずれかに当てはまる場合は、遺品整理・家財整理に対応する業者への相談を検討しましょう。貴重品の捜索に対応してくれる業者なら、書類探しの段階から力を借りることもできます。
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
        遺品整理・家財整理の業者を探すなら、審査を通過した業者を紹介する<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>のようなサービスが候補になります。京都など各都市の業者は<Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都の片付け業者比較</Link>で紹介しています。
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
        本記事は一般的な知識の提供を目的としたもので、法律・税務等の個別の助言を行うものではありません。相続放棄・遺産分割・遺言書・相続税など相続に関わる判断は、弁護士・司法書士・税理士などの専門家、法テラス、自治体の相談窓口、税務署・法務局等にご相談ください。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ず該当の市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
