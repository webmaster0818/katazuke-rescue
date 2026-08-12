import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/ihinseiri-jibunde/";
const TITLE = "遺品整理の進め方｜自分で行う手順と業者に任せる範囲の決め方";
const DESC =
  "遺品整理を自分で進めるための手順を解説。始める時期の考え方、相続に関わる貴重品・重要書類を最優先で確保する理由、形見分け・供養の進め方、5つの作業ステップ、やってはいけないNG行動、業者に任せたほうがよいケースの判断基準まで。初めての遺品整理の全体像がわかります。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "遺品整理を始める時期に決まりはない",
    body: "遺品整理をいつ始めるかに法律上の決まりはなく、四十九日や一周忌などの法要後、気持ちの整理がついてから、賃貸の退去期限に合わせて、など家庭によってさまざまです。ただし、故人の住まいが賃貸の場合は家賃が発生し続けるため退去期限から逆算する必要があり、相続放棄を検討している場合は遺品の扱いに注意が必要です（後述）。急ぐ事情がなければ、気持ちと相談しながら無理のない時期に始めれば十分です。",
  },
  {
    title: "最優先は「相続に関わる物」の確保",
    body: "遺品整理で最初にやるべきことは、物の処分ではなく、相続や手続きに関わる物の確保です。具体的には、遺言書、通帳・キャッシュカード、印鑑、不動産の権利書、保険証券、年金手帳、契約書類、鍵類、現金・貴金属などです。これらは誤って処分すると再発行が難しかったり、相続手続きに支障が出たりします。作業を始める前に「貴重品・書類はすべて1か所に集める」というルールを関係者で共有しましょう。",
  },
  {
    title: "相続放棄を検討している場合は処分に注意",
    body: "故人に負債がある可能性があり相続放棄を検討している場合、遺品の扱い方によっては相続を承認したとみなされるおそれがあると一般に言われています。判断が必要な状況では、遺品の処分を始める前に弁護士や司法書士など専門家に相談してください。本記事は一般的な手順の紹介であり、法的な判断は専門家への確認が前提です。",
  },
];

const steps = [
  {
    title: "スケジュールと関係者の役割を決める",
    body: "まず、いつまでに・誰が・どこまでやるかを決めます。賃貸なら退去日、持ち家なら法要や売却予定などの節目から逆算し、作業日を複数回に分けて設定しましょう。相続人が複数いる場合は、形見分けや売却の判断で揉めないよう、作業前に「勝手に持ち帰らない・処分しない」というルールを共有しておくことが重要です。",
  },
  {
    title: "貴重品・重要書類を探して1か所に集める",
    body: "遺言書・通帳・印鑑・権利書・保険証券・契約書類・鍵・現金などを最優先で探し、箱などにまとめて安全な場所に保管します。書類は仏壇・タンスの引き出し・金庫・カバンの中など故人の定位置に集中していることが多い一方、思わぬ場所から出てくることもあるため、この段階では「捨てる判断」をせず、紙類はすべて確認してから処分に回すのが安全です。",
  },
  {
    title: "形見分けの品・残す物を仕分ける",
    body: "貴重品の確保が済んだら、遺品を「形見として残す物」「親族に分ける物」「売却・寄付する物」「処分する物」に仕分けます。写真や手紙など判断に迷う物は無理に決めず、保留箱を作って後日ゆっくり向き合えば大丈夫です。人形や仏具など、そのまま捨てることに抵抗がある品は、寺社での供養やお焚き上げという選択肢もあります。",
  },
  {
    title: "不用品を処分ルート別に手放す",
    body: "処分する物は、自治体の収集（可燃・不燃・粗大ごみ）、リサイクルショップや買取業者への売却、不用品回収業者への依頼などのルートで手放します。粗大ごみの申し込み方法・料金・対象品目は自治体により異なるため、故人の住まいがある市区町村の案内を確認してください。家電リサイクル法の対象品目（エアコン・テレビ・冷蔵庫や冷凍庫・洗濯機や衣類乾燥機）は自治体の粗大ごみに出せないため、法律に沿ったルートでの処分が必要です。",
  },
  {
    title: "清掃して住まいを引き渡せる状態にする",
    body: "遺品の搬出が終わったら、掃除機がけ・拭き掃除などの清掃を行い、賃貸なら管理会社の退去立会いへ、持ち家なら次の用途（売却・賃貸・解体など）へつなぎます。長期間閉め切っていた住まいは、換気と水回りの通水も忘れずに行いましょう。汚れや臭いが強い場合は、ハウスクリーニングや特殊清掃の専門業者に任せる判断も必要です。",
  },
];

const ngActions = [
  {
    title: "貴重品の確認前に処分を始める",
    body: "書類の山や古い衣類の中から、現金・通帳・権利書が見つかることは珍しくありません。「見た目がゴミだから」とまとめて処分すると、相続手続きに必要な物まで失うおそれがあります。処分は必ず貴重品の確保が終わってからにしましょう。",
  },
  {
    title: "相続人の合意なしに売却・形見分けをする",
    body: "遺品は相続財産に含まれるものがあり、相続人の合意なく売却や持ち帰りを進めると、後々の深刻なトラブルにつながります。金銭的価値がありそうな物ほど、処分・売却の前に相続人全員で共有することが大切です。",
  },
  {
    title: "気持ちの整理がつかないまま無理に進める",
    body: "遺品整理は体力だけでなく心にも負担のかかる作業です。無理に進めて後悔するより、保留箱を活用して判断を先送りする、作業日を分ける、一部を業者に任せるなど、負担を減らす選択を取りましょう。",
  },
  {
    title: "無許可の回収業者に遺品をまとめて引き渡す",
    body: "「無料回収」をうたって巡回する業者などの中には、廃棄物処理に必要な許可の確認が取れない業者もあり、不法投棄や高額請求のトラブルが報告されています。遺品を託す相手だからこそ、許可・実績・見積もりの明確さを確認して選びましょう。",
  },
];

const judgeSigns = [
  "故人の住まいが遠方で、何度も通うことが難しい",
  "賃貸の退去期限が迫っており、自分たちの作業では間に合わない",
  "物量が多い、または大型家具・家電の搬出が自分たちでは危険",
  "孤独死などで発見が遅れ、清掃・消臭を伴う作業が必要",
  "気持ちの負担が大きく、遺品と向き合う作業を第三者に支えてほしい",
];

const faqs = [
  {
    q: "遺品整理はいつから始めるべきですか？",
    a: "法律上の決まりはありません。四十九日などの法要後に始める家庭が多いと言われますが、気持ちの整理がついてからで問題ありません。ただし、賃貸住宅は家賃が発生し続けるため退去期限から逆算が必要です。また、相続放棄を検討している場合は遺品の処分が相続の承認とみなされるおそれがあるため、着手前に専門家へ相談してください。",
  },
  {
    q: "遺品整理を自分でやるか業者に頼むか、どう決めればいいですか？",
    a: "物量が少なく、通える距離で、期限に余裕があるなら自分たちでの整理は十分可能です。遠方・物量過多・期限切迫・清掃を伴う状況のいずれかがあれば、業者の利用が現実的です。すべてを任せる以外に、貴重品の捜索と形見分けは自分たちで行い、搬出・処分だけ業者に頼むという分担もできます。",
  },
  {
    q: "遺品整理業者の費用はどのくらいかかりますか？",
    a: "物量・間取り・搬出条件・清掃の有無によって大きく異なるため、一律の金額は言えません。複数社から訪問見積もりを取り、作業範囲（仕分け・搬出・清掃・供養手配など）と総額を比較するのが基本です。当サイトでは遺品整理業者の選び方と費用ガイドで、見積もり時の確認ポイントを解説しています。",
  },
  {
    q: "処分しにくい仏壇や人形はどうすればいいですか？",
    a: "そのまま廃棄することに抵抗がある場合は、寺社での供養やお焚き上げに出す方法があります。遺品整理業者の中には供養の手配に対応するところもあるため、見積もり時に相談するとよいでしょう。対応の有無や方法は業者・寺社により異なるため、事前に確認してください。",
  },
];

const related = [
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方と費用ガイド", desc: "業者に依頼する場合の基礎知識" },
  { href: "/review/minna-ihinseiri/", label: "みんなの遺品整理の評判", desc: "審査済み業者を最大3社比較できる" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親が元気なうちの生前整理はこちら" },
  { href: "/tokusou-seisou/", label: "特殊清掃とは", desc: "清掃・消臭を伴う場合の基礎知識" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "費用の考え方と見積もりのポイント" },
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
    { "@type": "ListItem", position: 2, name: "遺品整理の進め方" },
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
    { href: "#kiso", label: "1｜遺品整理の基礎知識（時期・優先順位・注意点）" },
    { href: "#steps", label: "2｜自分で進める遺品整理の5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜業者に任せたほうがよいケース" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "遺品整理の進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          遺品整理の進め方｜自分で行う手順と業者に任せる範囲の決め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          家族が亡くなったあとの遺品整理は、多くの人にとって初めての経験です。「何から手を付ければいいのか」「勝手に捨てていい物と、残すべき物の区別がつかない」「自分たちでやるべきか、業者に頼むべきか」——悲しみの中でこうした判断を迫られるのは、想像以上に大きな負担です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、遺品整理を自分たちで進めるための手順を、始める時期の考え方から、貴重品・重要書類の確保、形見分け、不用品の処分、清掃までの流れで解説します。あわせて、やってはいけないNG行動と、業者に任せたほうがよいケースの判断基準もまとめました。全体像をつかんでから着手することで、後悔やトラブルを避けやすくなります。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>始める時期に決まりはないが、賃貸の退去期限がある場合は逆算して計画する</li>
          <li>最優先は処分ではなく、遺言書・通帳・権利書など相続に関わる物の確保</li>
          <li>相続放棄を検討中なら、遺品の処分前に必ず専門家へ相談する</li>
          <li>迷う遺品は保留箱で先送りしてよい。無理に一度で判断しない</li>
          <li>遠方・物量過多・期限切迫・清掃が必要な場合は業者への依頼が現実的</li>
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

      <H2 id="kiso" num="1">遺品整理の基礎知識（時期・優先順位・注意点）</H2>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">自分で進める遺品整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        遺品整理の作業は、次の5ステップの順で進めます。ポイントは「貴重品の確保が終わるまで、処分の判断をしない」ことです。
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
        不用品を手放すルートの詳しい比較は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート7つの使い分け</Link>を参照してください。
      </p>

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        悪質な回収業者の見分け方は<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事で詳しく解説しています。
      </p>

      <H2 id="gyousha" num="4">業者に任せたほうがよいケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、遺品整理業者への依頼、または「貴重品捜索と形見分けは自分たち・搬出処分は業者」という分担を検討しましょう。費用は物量・間取り・作業範囲によって異なるため、複数社の訪問見積もりの比較が基本です。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        業者選びでは、遺品整理の実績、貴重品捜索への対応、見積もりの内訳の明確さを確認しましょう。審査を通過した業者を最大3社比較できる<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>のような紹介サービスから探す方法もあります。清掃・消臭を伴う場合は<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>のような特殊清掃対応業者が候補になります。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          遺品整理に対応する業者の比較は、こちらのページをご活用ください。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/service/ihinseiri/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors">
            遺品整理業者の選び方を見る
          </Link>
          <Link href="/cost/price/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors">
            費用相場を確認する
          </Link>
        </div>
      </div>

      <H2 id="faq" num="5">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="6">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な手順の紹介であり、法的助言ではありません。相続放棄・遺産分割など法律に関わる判断は、弁護士・司法書士等の専門家にご相談ください。粗大ごみのルールは自治体により異なるため、該当する市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
