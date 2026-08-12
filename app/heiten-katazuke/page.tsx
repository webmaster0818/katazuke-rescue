import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/heiten-katazuke/";
const TITLE = "閉店・オフィス移転の片付け｜什器・備品の処分と原状回復までの進め方";
const DESC =
  "店舗の閉店やオフィスの退去に伴う片付けは、事業ごみの扱い・リース品の返却・原状回復という家庭の片付けにはない論点があります。退去日から逆算したスケジュールの立て方、什器・備品の処分と売却の使い分け、自力で進める5ステップ、NG行動、業者に任せる判断基準までを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "事業活動で出たごみは「家庭ごみ」として出せないのが原則",
    body: "閉店・移転の片付けで最初に押さえるべきなのは、店舗やオフィスなど事業活動に伴って出た廃棄物は、家庭ごみや自治体の粗大ごみ収集には原則として出せないとされている点です。事業系の廃棄物は、自治体の定める方法や、必要な許可を持つ処理業者への委託によって適正に処理する必要があります。具体的なルールや区分は自治体により異なるため、必ず所在地の自治体の案内で確認してください。この前提を知らずに家庭ごみの集積所に出してしまうと、トラブルの原因になります。",
  },
  {
    title: "「自分の物ではない物」が混ざっているのが事業所の特徴",
    body: "店舗・オフィスには、リース契約中のコピー機や厨房機器、レンタルのマットや観葉植物、取引先からの預かり品など、自社の所有物ではない物が混ざっています。これらは処分ではなく返却・引き取り依頼の対象です。誤って処分すると弁償問題になりかねないため、片付けの最初に「所有権のある物」と「返却する物」を仕分けることが、家庭の片付けとの大きな違いです。",
  },
  {
    title: "ゴールは「原状回復して明け渡す」こと。契約書の確認が出発点",
    body: "賃貸物件の閉店・退去では、片付けのゴールは「物を空にすること」ではなく「賃貸借契約で定められた原状回復を済ませて明け渡すこと」です。内装をどこまで戻すのか（スケルトン返しか現状のままか等）は契約によって大きく異なり、原状回復工事が必要なら工事期間も逆算に入れる必要があります。契約書を確認し、不明点は貸主・管理会社に早めに確認しましょう。工事範囲など契約解釈で揉めそうな場合は、専門家への相談も検討してください。",
  },
];

const merits = [
  {
    title: "退去日からの逆算でスケジュールを組むと遅れが防げる",
    body: "閉店の片付けは「営業終了日」ではなく「物件の明け渡し日」から逆算して計画します。明け渡し日までに、原状回復工事、什器・備品の搬出、リース品の返却、廃棄物の処理をすべて終える必要があるためです。特に原状回復工事が入る場合は、工事開始までに室内を空にする必要があり、実質的な片付けの期限は明け渡し日よりかなり手前になります。",
  },
  {
    title: "什器・備品は「売れる物」が多い分野。早く動くほど選択肢が広がる",
    body: "業務用の冷蔵庫・調理機器・棚・テーブル・椅子などの什器は、中古市場で取引されることが多い分野です。リサイクルショップや業務用品の買取業者への売却、同業者への譲渡などを活用できれば、処分費用の圧縮につながります。ただし、買取の可否や条件は品目・状態・時期によって異なります。引き取り手を探すには時間がかかるため、売却を考えるなら閉店決定後の早い段階から動くのが得策です。",
  },
  {
    title: "書類・データの整理は「捨てる物」より「残す物」の確認が重要",
    body: "事業の書類には、法令により一定期間の保存が必要とされるもの（帳簿・決算関係・契約書など）があります。保存期間や対象は書類の種類や事業形態によって異なるため、処分の前に税理士など専門家や税務署の案内で確認しましょう。また、顧客情報を含む書類やデータは、個人情報の観点から復元できない方法での廃棄が求められます。パソコンやハードディスクは初期化だけでなく、データ消去の方法まで検討してください。",
  },
];

const steps = [
  {
    title: "契約書を確認し、明け渡し日から逆算した計画を立てる",
    body: "賃貸借契約書で原状回復の範囲と明け渡し条件を確認し、貸主・管理会社と退去の段取りをすり合わせます。そのうえで、明け渡し日→原状回復工事→室内を空にする日、と逆算してスケジュールを組みます。リース品の引き取りや廃棄物処理の手配には日数がかかるため、余裕を持った計画にしましょう。",
  },
  {
    title: "全備品を「返却・売却・譲渡・廃棄・移設」の5つに仕分ける",
    body: "リース・レンタル品はリストアップして各社に返却の連絡を入れます。自社所有の什器・備品は、売却する物、同業者や知人に譲る物、廃棄する物、移転先へ運ぶ物に分けます。この仕分け表を作っておくと、業者への見積もり依頼も正確になり、当日の作業もスムーズです。",
  },
  {
    title: "書類・データを保存義務の観点で整理し、機密は適切に廃棄する",
    body: "帳簿・契約書などの書類は、保存が必要な物を選び出して保管場所を決めます。保存期間の判断に迷う書類は、処分せず税理士などの専門家に確認してください。顧客情報や機密を含む書類は溶解処理やシュレッダーなど復元できない方法で廃棄し、パソコン・記憶媒体はデータ消去を行ってから処分・売却します。",
  },
  {
    title: "売却・譲渡を先に確定させ、廃棄する量を最小化する",
    body: "買取業者への査定依頼や譲渡先への声かけを先に済ませ、引き取られる物を確定させてから、残りを廃棄物として手配します。廃棄する量が減れば処理費用も抑えられます。什器の買取とリサイクルの活用については、片付けと買取の併用の記事の考え方が事業所にも応用できます。",
  },
  {
    title: "廃棄物の処理を適正な方法で手配し、搬出・清掃・明け渡しを完了する",
    body: "廃棄する物は、自治体の案内に従い、事業系廃棄物の処理に対応した許可のある業者へ依頼します。見積もり時には品目リストと量を伝え、処理方法とマニフェスト（産業廃棄物管理票）の扱いなど不明点を確認しましょう。搬出後は清掃を行い、原状回復工事がある場合は工事へ引き継ぎ、明け渡し日に貸主の立ち会い確認を受けて完了です。",
  },
];

const ngActions = [
  {
    title: "事業所のごみを家庭ごみ・自治体の粗大ごみに出す",
    body: "事業活動に伴う廃棄物を家庭ごみの集積所や自治体の粗大ごみ収集に出すことは、原則として認められていないとされています。量が少なくても扱いは変わらないのが基本です。処理方法は自治体により定めが異なるため、所在地の自治体の公式案内を確認し、必要に応じて許可のある処理業者へ委託してください。",
  },
  {
    title: "リース品・レンタル品を自社の物と一緒に処分してしまう",
    body: "リース契約中の機器を誤って処分すると、残債の精算に加えて弁償の問題に発展するおそれがあります。コピー機・厨房機器・観葉植物・マット類・ウォーターサーバーなど、リース・レンタルの可能性がある物は、契約書や請求書で契約先を確認し、必ず各社に返却・引き取りの連絡を入れましょう。",
  },
  {
    title: "許可の確認できない回収業者に一括で引き渡す",
    body: "閉店の片付けはまとまった量になるため、「まとめて安く引き取る」とうたう業者に安易に任せたくなりますが、廃棄物の処理に必要な許可を確認できない業者への委託は、不法投棄や高額請求のトラブルにつながるおそれがあります。許可・実績を確認し、複数社から見積もりを取って比較しましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
  {
    title: "書類・データを未整理のまま廃棄する、または放置する",
    body: "保存義務のある帳簿類を誤って処分すると、後の手続きで困ることになります。逆に、顧客情報を含む書類や記憶媒体を無造作に廃棄すると、情報漏えいのリスクがあります。「残す物の確認」と「機密の適切な廃棄」はどちらも省略せず、判断に迷う物は専門家に確認してから処理してください。",
  },
];

const judgeSigns = [
  "明け渡し日まで時間がなく、営業しながら片付けの準備を進める必要がある",
  "業務用の大型什器・機器が多く、自力での搬出が難しい",
  "事業系廃棄物の処理手配を含めて、一括で任せられる先を探している",
  "買取と処分を組み合わせて、トータルの費用を抑えたい",
  "遠隔地の店舗・事務所で、現地に何度も通えない",
];

const faqs = [
  {
    q: "閉店の片付けはいつから始めればよいですか？",
    a: "閉店を決めた時点で、賃貸借契約の確認とリース品のリストアップだけでも始めることをおすすめします。解約予告の期限、原状回復の範囲、リース品の引き取り日程など、自分だけでは決められない要素が多いためです。什器の売却を考える場合も、早く動くほど選択肢が広がります。",
  },
  {
    q: "店舗の備品は自治体の粗大ごみに出せますか？",
    a: "事業活動に伴って出た廃棄物は、家庭ごみや自治体の粗大ごみ収集には原則として出せないとされています。事業系廃棄物の処理方法は自治体により定めが異なるため、所在地の自治体の公式案内を確認したうえで、必要に応じて許可のある処理業者への委託を検討してください。",
  },
  {
    q: "まだ使える什器や備品はどう手放すのがよいですか？",
    a: "業務用品の買取業者やリサイクルショップへの売却、同業者への譲渡が主な選択肢です。買取の可否や条件は品目・状態・時期により異なるため、複数の買取先に査定を依頼して比較するのが確実です。売却・譲渡で引き取られる量が増えるほど、廃棄の費用を抑えられます。",
  },
  {
    q: "閉店・オフィス移転の片付けを業者に頼むと費用はどのくらいかかりますか？",
    a: "費用は坪数・物量・搬出条件（階数・エレベーターの有無など）・廃棄物の内容・買取の有無によって大きく異なるため、一律にいくらとは言えません。品目リストを作ったうえで複数社から見積もりを取り、作業範囲・処理方法・内訳を比較して判断するのが確実です。",
  },
];

const related = [
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限から逆算する搬出と処分の進め方" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分の選択肢" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用", desc: "売れる物を活かして負担を減らす方法" },
  { href: "/guide/illegal-dumping/", label: "違法業者の見分け方", desc: "許可のない回収業者を避けるポイント" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "定額パック制の関東対応回収業者" },
  { href: "/area/fukuoka/", label: "福岡の片付け業者比較", desc: "福岡で依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "閉店・オフィス移転の片付け" },
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
    { href: "#kiso", label: "1｜閉店・オフィス片付けの基礎知識" },
    { href: "#merit", label: "2｜段取りを左右する3つのポイント" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める閉店片付けの5ステップ" },
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

      <Breadcrumb items={[{ label: "閉店・オフィス移転の片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          閉店・オフィス移転の片付け｜什器・備品の処分と原状回復までの進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「店を閉めることになったが、什器や在庫の処分をどう進めればいいのか」「オフィスの退去日までに片付けが終わるか不安」——閉店・移転の片付けは、事業ごみの扱い、リース品の返却、原状回復という、家庭の片付けにはない論点が絡む作業です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、事業所の片付けで最初に押さえるべき前提を整理したうえで、明け渡し日から逆算する計画の立て方、什器・備品の仕分けと売却の活用、自力で進める5つのステップ、避けるべきNG行動、業者に任せる判断基準までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>事業活動で出たごみは家庭ごみ・自治体の粗大ごみに出せないのが原則。処理方法は自治体の案内で確認する</li>
          <li>計画は「明け渡し日」から逆算。原状回復工事がある場合、片付けの実質期限はさらに手前になる</li>
          <li>最初の仕分けは「返却・売却・譲渡・廃棄・移設」の5分類。リース品の誤処分に注意</li>
          <li>売却・譲渡を先に確定させて廃棄量を減らすと、費用と手間の両方を抑えられる</li>
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

      <H2 id="kiso" num="1">閉店・オフィス片付けの基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、事業所の片付けが家庭の片付けとどう違うのかを押さえておきましょう。この前提を知らないまま進めると、ごみ出し・リース品・原状回復のそれぞれでつまずくことになります。
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
        閉店・移転の片付けをスムーズに終えられるかどうかは、次の3つのポイントで大きく変わります。
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
        閉店・移転の片付けの大原則は、「契約確認が先、仕分けが次、廃棄の手配は最後」という順番です。返却する物と売れる物を先に確定させることで、廃棄物として処理する量を最小限にでき、費用も手間も抑えられます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        期限から逆算して荷物を減らしていく段取りは、住居の<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付け</Link>と共通する部分が多くあります。また、大型の什器・家具の搬出の考え方は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>も参考になります。
      </p>

      <H2 id="steps" num="4">自力で進める閉店片付けの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際の手順を5つのステップで紹介します。ポイントは「契約と返却物の確認が先、売却で量を減らし、廃棄は適正ルートで」です。
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
        次のいずれかに当てはまる場合は、事業所の片付けに対応する業者への相談を検討しましょう。見積もり時には「事業所であること」を必ず伝え、事業系廃棄物の処理に対応できるかを確認するのがポイントです。
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
        依頼先を探す際は、複数業者へ一括で見積もりを依頼できる<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>のようなサービスも活用できます。関東エリアなら定額パックプランのある<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>も候補になります（事業所対応の可否は見積もり時に確認してください）。福岡など各都市の業者は<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡の片付け業者比較</Link>で紹介しています。
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
        本記事は一般的な知識の提供を目的としたもので、法律・税務・契約に関する個別の助言を行うものではありません。事業系廃棄物の処理方法は自治体により異なるため、必ず所在地の自治体の案内をご確認ください。原状回復の範囲や書類の保存義務など個別の判断は、貸主・管理会社、税理士・弁護士などの専門家にご相談ください。
      </p>
    </article>
  );
}
