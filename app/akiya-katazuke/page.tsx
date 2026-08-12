import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/akiya-katazuke/";
const TITLE = "空き家の片付けの進め方｜残置物の処分手順と放置しないための管理";
const DESC =
  "相続などで生じた空き家の中身（残置物）を片付ける手順を解説。片付け前に確認すべき権利関係と貴重品の扱い、自力で進める5ステップ、やってはいけないNG行動、放置した場合のリスク、業者に相談すべきサインまで、遠方在住の方にもわかるよう順を追ってまとめました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const preChecks = [
  {
    title: "誰の持ち物か・誰に処分の権限があるかを先に確認する",
    body: "空き家の中の家財は、家そのものと同じく相続財産に含まれます。相続人が複数いる場合、一人の判断で家財を処分してしまうと、後から他の相続人との間でトラブルになるおそれがあります。片付けを始める前に、相続人同士で「中身を片付けること」「処分してよい物・残す物」の認識を合わせておきましょう。相続手続きそのものに関わる判断は、弁護士・司法書士などの専門家や自治体の相談窓口に相談してください。",
  },
  {
    title: "貴重品・重要書類の捜索を最優先にする",
    body: "空き家の片付けでは、通帳・印鑑・権利証・保険証券・年金関係・契約書類・現金などが家のどこかに残っていることが珍しくありません。これらは相続手続きに必要になる場合があるため、本格的な処分を始める前に、仏壇まわり・タンスの引き出し・押し入れの奥・金庫など、貴重品が保管されがちな場所を集中的に確認しましょう。書類類は「後で確認する箱」に一括で集めておくと、誤って処分するリスクを減らせます。",
  },
  {
    title: "電気・水道の状態とライフラインを確認する",
    body: "長期間閉め切られた空き家は、照明が使えない、水が出ない、換気ができないなど、作業環境が整っていないことがあります。片付け作業には照明・換気・手洗いが必要になるため、電気・水道の契約状態を事前に確認し、必要に応じて一時的に使えるようにしておくと作業が格段に楽になります。夏場や閉め切りの家では熱中症対策も忘れずに。",
  },
];

const risks = [
  {
    title: "建物の傷みと衛生状態は放置するほど悪化する",
    body: "家財が残ったままの空き家は、湿気がこもってカビや悪臭が発生しやすく、害虫・害獣のすみかになることもあります。食品や布類が残っているとその進行はさらに早まります。傷みが進むほど片付けの作業負担や費用も増えるため、「使う予定が決まってから」ではなく、早い段階で中身だけでも減らしておくことが結果的に負担を軽くします。",
  },
  {
    title: "管理が不十分な空き家は行政から指導を受ける場合がある",
    body: "空家等対策特別措置法により、倒壊のおそれや衛生上の問題など周囲に悪影響を及ぼす状態の空き家は、自治体から助言・指導などの対象になる場合があります。具体的な基準や運用は自治体により異なるため、詳細はお住まいの（または空き家所在地の）市区町村の案内を確認してください。家財の片付けと定期的な換気・見回りは、こうした状態悪化を防ぐ第一歩です。",
  },
  {
    title: "遠方の空き家は「行くたびに少し進める」計画が必要",
    body: "空き家が遠方にある場合、往復の時間と交通費がかかるため、無計画に通うと負担ばかりが積み上がります。1回の訪問で何をどこまでやるか（今回は貴重品捜索、次回は衣類と布団、など）を決めてから行くこと、ゴミ収集日と滞在日程を合わせることが重要です。訪問回数を確保できない場合は、業者への一括依頼が現実的な選択肢になります。",
  },
];

const steps = [
  {
    title: "相続人間の合意と「残す物リスト」を作る",
    body: "片付けに着手する前に、相続人や関係者の間で、処分してよい範囲と残す物（位牌・仏壇・アルバム・形見分けの品・手続き書類など）を確認し、簡単なリストにしておきます。合意を先に作っておくことで、「勝手に捨てた」というトラブルを防ぎ、現地での判断も速くなります。遠方の親族には写真を送って確認してもらう方法が有効です。",
  },
  {
    title: "貴重品・重要書類・思い出の品を回収する",
    body: "最初の訪問では、処分よりも捜索と回収を優先します。貴重品・重要書類は1つの箱にまとめて持ち帰り、アルバムや手紙など思い出の品は別の箱に分けます。この段階を丁寧にやっておくと、以降の処分作業を「残りは基本的に手放してよい物」として迷いなく進められるようになります。",
  },
  {
    title: "自治体ルールを確認し、可燃・資源ごみから減らす",
    body: "空き家所在地の自治体の分別ルールと収集日を確認し、衣類・紙類・布団・台所用品など、袋に入る物から計画的に出していきます。粗大ごみの申し込み方法・料金・対象品目は自治体によって異なるため、必ず市区町村の公式サイトで確認してください。収集日と訪問日程を合わせるのが、遠方の空き家片付けの重要なコツです。自治体サービスの使い方は自治体サービス活用ガイドも参考にしてください。",
  },
  {
    title: "売れる物・譲れる物を分けて物量を減らす",
    body: "家具・家電・骨董品・趣味の道具などの中には、リサイクルショップや買取業者、フリマアプリで手放せる物もあります。売却は処分費用の軽減につながる一方、査定や発送に手間がかかるため、「明らかに価値がありそうな物だけ売却に回し、迷う物は処分」と割り切るのが現実的です。処分ルートの使い分けは不用品の処分ルート比較で詳しく解説しています。",
  },
  {
    title: "大型家具・残った物を搬出し、簡易清掃と防犯・換気の体制を作る",
    body: "タンス・ベッド・大型家電など自力で運べない物は、自治体の粗大ごみ（自己搬出が必要な場合あり）か不用品回収業者を使って搬出します。片付け後は、掃き掃除と換気を行い、戸締まりを確認して終了です。空き家として維持する場合は、月1回程度の換気・通水・見回り（または管理サービスの利用）を続けると、建物の傷みと不法投棄・防犯上のリスクを抑えられます。",
  },
];

const ngActions = [
  {
    title: "相続人間の合意なく家財を処分する",
    body: "家財も相続財産の一部です。良かれと思って処分した物が、他の相続人にとって大切な形見だったというトラブルは少なくありません。処分の前に関係者の合意を取り、判断に迷う物は写真を共有して確認するひと手間が、後々の関係を守ります。",
  },
  {
    title: "書類・郵便物を確認せずにまとめて捨てる",
    body: "空き家に残された郵便物や書類の中には、契約や債務、保険など相続手続きの手がかりになる情報が含まれていることがあります。紙類は面倒でも一度ざっと確認し、判断がつかない物は「保留箱」に入れて持ち帰りましょう。個人情報を含む書類は、シュレッダーにかけるなど処分方法にも注意が必要です。",
  },
  {
    title: "巡回・訪問してくる無許可の回収業者に引き渡す",
    body: "空き家の片付けは物量が多く、「トラックに積み放題」などの勧誘に頼りたくなりますが、廃棄物の処理に必要な許可を確認できない業者に渡すと、不法投棄や高額請求のトラブルにつながるおそれがあります。依頼前に許可・実績・見積内訳を確認できる業者を選びましょう。見分け方は違法業者の見分け方の記事で解説しています。",
  },
  {
    title: "「そのうち使うかもしれない」で家財ごと放置し続ける",
    body: "家財が残ったままの空き家は、カビ・害虫・悪臭の発生源となり、建物の傷みも進みます。売却・賃貸・解体のどれを選ぶにしても中身の片付けは必要になるため、方針が決まっていなくても「貴重品の回収と生ものの撤去だけは先にやる」ことをおすすめします。放置のリスクは進むほど片付けの負担と費用に跳ね返ります。",
  },
];

const judgeSigns = [
  "空き家が遠方にあり、何度も通って作業する時間が取れない",
  "家一軒分の物量があり、自分たちだけでは搬出しきれない",
  "タンス・ベッド・大型家電など、階段や狭い通路からの搬出が必要な大型品が多い",
  "売却・解体・賃貸などの予定があり、期限までに空にする必要がある",
  "カビ・悪臭・害虫が発生しており、作業環境として厳しい状態になっている",
];

const faqs = [
  {
    q: "空き家の片付けはどこから手を付ければよいですか？",
    a: "最初にやるべきは処分ではなく、貴重品・重要書類・思い出の品の捜索と回収です。通帳・印鑑・権利証などは相続手続きに必要になる場合があります。回収が済んだら、残りは「基本的に手放す物」として、自治体の収集・売却・業者依頼を組み合わせて減らしていきます。全体の順序は本文の5ステップを参考にしてください。",
  },
  {
    q: "空き家の家財処分を業者に頼むと費用はどのくらいですか？",
    a: "費用は物量・間取り・搬出条件（階段の有無、トラックを停められるかなど）・作業範囲によって大きく異なるため、一律にいくらとは言えません。家一軒分の片付けは物量の見極めが難しいため、現地見積もりを複数社に依頼し、作業範囲と内訳を比較して判断するのが確実です。費用の考え方は費用相場ページで解説しています。",
  },
  {
    q: "遠方に住んでいて立ち会えません。片付けを任せられますか？",
    a: "多くの片付け・遺品整理業者が、立ち会いなし・鍵の受け渡しによる作業や、ビデオ通話・写真での確認に対応しています。ただし対応範囲や条件は業者により異なるため、見積もり時に「遠方で立ち会えない」ことを伝え、貴重品が見つかった場合の扱い・作業前後の写真報告の有無を確認しておくと安心です。",
  },
  {
    q: "片付けた後の空き家はどう管理すればよいですか？",
    a: "空き家として維持する場合は、月1回程度の換気・通水・郵便物の回収・外回りの確認を続けるのが一般的な目安です。管理が不十分で周囲に悪影響を及ぼす状態になると、自治体から指導等の対象になる場合があります。自分で通えない場合は、空き家管理サービスや、売却・賃貸・解体を含めた活用の検討を。自治体によっては空き家に関する相談窓口を設けているところもあります。",
  },
];

const related = [
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親が存命のうちに進める実家整理" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "遺品の仕分けと業者に任せる線引き" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方", desc: "空き家の家財整理にも対応する業者" },
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
    { "@type": "ListItem", position: 2, name: "空き家の片付けの進め方" },
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
    { href: "#junbi", label: "1｜片付けを始める前に確認すべき3つのこと" },
    { href: "#risk", label: "2｜空き家と残置物を放置するリスク" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜空き家の片付け5ステップ" },
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

      <Breadcrumb items={[{ label: "空き家の片付けの進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          空き家の片付けの進め方｜残置物の処分手順と放置しないための管理
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「親から相続した実家が空き家のままになっている」「家財が丸ごと残っていて、どこから手を付ければいいのかわからない」——空き家の片付けは、通常の部屋の片付けと違い、権利関係の確認や遠方からの作業計画など、始める前に押さえるべきポイントがいくつもあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、空き家の中身（残置物）を片付ける前に確認すべきこと、放置した場合のリスク、自力で進める5つのステップ、避けるべきNG行動、業者に相談すべきサインまでを順に解説します。遠方に住んでいて頻繁に通えない方にも役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>片付けの前に、相続人間の合意と「残す物」の確認を済ませる。家財も相続財産の一部</li>
          <li>最初の作業は処分ではなく、貴重品・重要書類・思い出の品の捜索と回収</li>
          <li>遠方の空き家は、ゴミ収集日と訪問日程を合わせた「行くたびに少し進める」計画が要</li>
          <li>期限がある場合や家一軒分の物量がある場合は、業者への一括依頼が現実的</li>
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

      <H2 id="junbi" num="1">片付けを始める前に確認すべき3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        空き家の片付けで失敗しないためには、手を動かす前の確認が重要です。特に相続が関わる場合は、次の3点を先に押さえておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {preChecks.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="risk" num="2">空き家と残置物を放置するリスク</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「いつか片付けよう」と先送りしたくなるのが空き家の片付けですが、放置には次のようなリスクがあります。方針が決まっていなくても、中身を減らしておくことには意味があります。
      </p>
      <div className="space-y-4 mb-4">
        {risks.map((r) => (
          <div key={r.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{r.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{r.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        空き家の片付けの基本方針は、「合意→回収→処分」の順番を守ることです。相続人間の合意と貴重品の回収を先に済ませてしまえば、残りの家財は「基本的に手放してよい物」として、迷いなくスピーディーに処分を進められます。逆にこの順番を飛ばして処分から始めると、トラブルや後悔のもとになります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自力で進めるか業者に頼むかは、「通える回数×1回あたりの作業量」が物量に見合うかで判断します。近隣に住んでいて時間をかけられるなら自力中心で、遠方在住・期限ありなら業者中心で考えるのが現実的です。故人の家財を扱う場合の心構えや仕分けの考え方は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める方法</Link>も参考にしてください。
      </p>

      <H2 id="steps" num="4">空き家の片付け5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の作業は次の5ステップで進めます。遠方の場合は、1回の訪問に1〜2ステップを割り当てる計画を立てましょう。
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
        自治体の粗大ごみ収集の使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>、処分ルート全体の使い分けは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で詳しく解説しています。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        回収業者選びで失敗しないためのチェックポイントは、<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事にまとめています。
      </p>

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力での片付けにこだわらず、空き家の家財整理に対応する片付け業者・遺品整理業者への相談を検討しましょう。現地見積もりの際に、貴重品捜索や作業報告の対応可否も確認しておくと安心です。
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
        本記事は一般的な知識の提供を目的としたもので、相続・不動産等の個別の助言を行うものではありません。相続に関わる判断は弁護士・司法書士などの専門家にご相談ください。空き家に関する行政の運用や、粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ず該当の市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
