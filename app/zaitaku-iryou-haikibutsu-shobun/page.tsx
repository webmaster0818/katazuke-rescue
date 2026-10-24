import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/zaitaku-iryou-haikibutsu-shobun/";
const TITLE = "在宅医療廃棄物の捨て方｜注射針は医療機関・薬局へ返却、点滴バッグやチューブは自治体の区分で";
const DESC =
  "自宅で使った注射針などの鋭利な物はごみに出さず、処方した医療機関や回収薬局へ返却し、点滴バッグ・チューブ・ガーゼなどは自治体の区分で出すのが基本です。環境省の通知と港区・新宿区・大田区・静岡市・神戸市などの案内をもとに、介護や遺品整理で出てきたときの扱いを解説します。";
const PUBLISHED = "2026-10-24";
const CHECKED = "2026年10月24日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "在宅医療廃棄物は家庭のごみ（一般廃棄物）として扱われます",
    body: "在宅医療に伴って家庭から出る廃棄物は、廃棄物処理法上の一般廃棄物で、市町村が処理する責任を負います。環境省は2005年（平成17年）9月の通知で、検討会の報告として、注射針などの鋭利な物は医療関係者や患者・家族が医療機関へ持ち込み、それ以外の鋭利でない物は市町村が一般廃棄物として処理する方法が現時点で最も望ましいと示し、市町村に地域の状況に応じた処理方法の検討を求めています。",
  },
  {
    title: "注射針などの鋭利な物は、ごみとして出せません",
    body: "港区は、ペン型自己注射針を含む注射針などの鋭利な物を、処方した医療機関（病院・診療所）、使用済み注射針回収薬局、または訪問看護ステーションへ返却するよう案内しています。新宿区は注射針を資源・ごみ集積所に出すことはできないとし、鹿児島市も注射針などが付いている物はごみステーションに出せないとしています。",
  },
  {
    title: "針のない物は、自治体の区分に従って出します",
    body: "港区は、輸液・蓄尿・CAPD（腹膜透析）・栄養剤などのバッグ類、チューブ・カテーテル類、針を取り除いたプラスチック製の注射筒、ガーゼ・脱脂綿・使い捨て手袋などを可燃ごみ、針を取り除いたガラス製の注射筒を不燃ごみとしています。区分の名称や細かな扱いは自治体によって異なります。",
  },
];

const table: [string, string, string][] = [
  ["注射針・ペン型注射器の針・点滴針・血糖測定の針", "ごみに出さず、医療機関・薬局などへ返却", "港区・新宿区・静岡市・神戸市・鹿児島市"],
  ["針が本体に収納できない注射器", "針ごと容器に入れて医療機関などへ返却（本体は可燃ごみとする例）", "静岡市"],
  ["輸液・CAPD・栄養剤などのバッグ類", "中身を空にしてから自治体の区分で出す（可燃ごみとする例）", "港区・新宿区・神戸市"],
  ["チューブ・カテーテル類", "針を外し、自治体の区分で出す（可燃ごみとする例）", "港区・静岡市・神戸市"],
  ["ガーゼ・脱脂綿・使い捨て手袋・紙おむつ", "新聞紙などで包んで自治体の区分で出す（可燃ごみとする例）", "港区・静岡市・神戸市・新宿区"],
  ["ガラス製の注射筒（針を取り除いたもの）", "不燃ごみとする例", "港区"],
];

const steps = [
  {
    title: "針がある物と、針のない物を分ける",
    body: "注射針、ペン型注射器の針、点滴の針、血糖測定の針など、刺さるおそれのある物を先に取り分けます。神戸市は、輸液ラインは針の部分とライン部分に切り分け、針の部分を医療機関などへ返却するよう案内しています。針が注射器から外せない物は、針ごと返却します（静岡市・神戸市）。",
  },
  {
    title: "針は、ふたの閉まる硬い容器にまとめる",
    body: "返却するまでの間は、針が外に出ない容器に入れて保管します。容器の指定は自治体や返却先によって異なり、神戸市はふた付きで密閉できる丈夫な専用容器を使い、缶・びん・ペットボトルは容器として使わないよう求めています。大田区は専用回収ボトルや空きびんなどの硬い容器を、鹿児島市は空き缶などの容器を例に挙げています。どの容器でよいかは返却先に確認し、子どもやペットが触れない場所に置いてください。",
  },
  {
    title: "返却先に連絡し、針を持ち込む",
    body: "返却先は、薬を処方した医療機関、使用済み注射針回収薬局、訪問看護ステーションなどです（港区）。新宿区では、回収薬局で注射針を購入するときに回収容器を受け取り、いっぱいになったら購入した薬局へ持ち込む仕組みで、未使用の注射針も同じ方法で回収するとしています。家族が亡くなった後に見つかった場合も、まず処方していた医療機関や薬局に相談してください。",
  },
  {
    title: "バッグ類の中身を処理してから、空にして出す",
    body: "港区はCAPDなどのバッグ類は残った液を適切に処理し、空にしてから出すよう案内しています。神戸市は、輸液バッグの液やCAPDの排液、ストーマ袋の汚物をトイレに流したうえで、新聞紙などでくるみ、ポリ袋に二重に入れて出すよう求めています。",
  },
  {
    title: "針のない物を、自治体の区分と出し方で出す",
    body: "チューブ・カテーテル・ガーゼ・脱脂綿・紙おむつなどは、お住まいの自治体の区分に従って出します。静岡市はガーゼや脱脂綿を新聞紙などで包んで指定袋に入れるよう案内しています。区分が分からない物は、自治体の清掃担当や医療機関に確認してください。",
  },
];

const cautions = [
  {
    title: "針の付いた物を、ごみ袋や資源ごみに混ぜない",
    body: "神戸市は、在宅医療廃棄物を誤った方法で捨てると、近隣の人や収集作業員に針刺しの事故などが起きるおそれがあると説明しています。缶やペットボトルに入れた針が資源ごみとして出されると危険なため、同市は缶・びん・ペットボトルを容器にしないよう求めています。",
  },
  {
    title: "血糖測定器のセンサーなど、電池を内蔵する物は相談する",
    body: "静岡市は、持続グルコース測定器のセンサーのうち、針を含まない部分や針が本体に収納される部分は可燃ごみとし、ボタン型電池などを内蔵するセンサー部分はメーカーや医療機関に相談するよう案内しています。",
  },
  {
    title: "片付けを業者に頼む場合も、医療廃棄物は先に取り分ける",
    body: "環境省の通知が示すとおり、注射針などの鋭利な物は医療機関へ持ち込む扱いです。遺品整理や不用品回収を依頼する前に、注射針や使いかけの医療用品を家族で取り分け、返却先に相談してください。見積もりの際には、医療用品が残っていることを業者に伝えておきます。",
  },
  {
    title: "許可のない回収業者には渡さない",
    body: "環境省は、家庭の廃棄物を回収するには市区町村の一般廃棄物処理業の許可や委託が必要で、産業廃棄物処理業の許可や古物商の許可では回収できないと説明しています。",
  },
];

const judgeSigns = [
  "介護用ベッドや車いすなど、医療用品以外の介護用品もまとめて片付けたい",
  "故人の部屋に家財が多く、医療用品の取り分けとあわせて全体の片付けが必要",
  "遠方に住んでいて、自治体の収集日に合わせてごみを出すことが難しい",
  "賃貸住宅の明け渡しの期限が決まっている",
];

const faqs = [
  {
    q: "使い終わった注射針は、どこに捨てればよいですか？",
    a: "ごみには出さず、処方した医療機関、使用済み注射針回収薬局、訪問看護ステーションなどへ返却します（港区）。返却するまでは、ふたの閉まる硬い容器に入れて保管します。容器の指定は自治体や返却先によって異なるため、返却先に確認してください。",
  },
  {
    q: "点滴バッグやチューブは、何ごみになりますか？",
    a: "針を外し、中身を空にしたうえで、自治体の区分に従って出します。港区・新宿区は点滴バッグやCAPDバッグを燃やすごみ・可燃ごみの例に挙げていますが、区分は自治体によって異なります。",
  },
  {
    q: "家族が亡くなった後に、未使用の注射針や医療用品が出てきました。",
    a: "まず処方していた医療機関や、注射針を購入した薬局に相談してください。新宿区は、未使用の注射針も使用済みと同じ方法で回収薬局に持ち込むとしています。針のない物は、自治体の区分に従って出します。",
  },
  {
    q: "在宅医療廃棄物を、片付け業者にまとめて引き取ってもらえますか？",
    a: "環境省の通知では、注射針などの鋭利な物は医療機関へ持ち込む扱いとされています。業者に片付けを依頼する場合も、注射針は先に取り分けて医療機関や薬局へ返却し、残りの医療用品の扱いは見積もりの際に業者へ確認してください。",
  },
];

const sources = [
  { label: "在宅医療に伴い家庭から排出される廃棄物の適正処理について（平成17年9月8日 通知）", org: "環境省", url: "https://www.env.go.jp/hourei/11/000151.html" },
  { label: "在宅医療廃棄物の処理に関する取組推進のための手引き（平成20年3月）", org: "環境省", url: "https://www.env.go.jp/content/900534295.pdf" },
  { label: "在宅医療廃棄物の出し方", org: "港区", url: "https://www.city.minato.tokyo.jp/gomigenryoushigenka/zaitakuiryou.html" },
  { label: "在宅医療廃棄物の出し方", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00022.html" },
  { label: "在宅医療廃棄物について", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/zaitaku-iryou-haikibutsu.html" },
  { label: "在宅医療廃棄物（注射針等）の出し方", org: "静岡市", url: "https://www.city.shizuoka.lg.jp/gomi/s000673.html" },
  { label: "在宅医療廃棄物の安全な処理のお願い", org: "神戸市", url: "https://www.city.kobe.lg.jp/a04164/kurashi/recycle/gomi/dashikata/bunbetsukubun/zaitaku.html" },
  { label: "在宅医療廃棄物の出し方", org: "鹿児島市", url: "https://www.city.kagoshima.lg.jp/shigenseisaku/zaitakuiryu.html" },
  { label: "廃棄物の処分に「無許可」の回収業者を利用しないでください！（Q&A）", org: "環境省", url: "https://www.env.go.jp/recycle/kaden/tv-recycle/qa.html" },
];

const related = [
  { href: "/kaigo-youhin-shobun/", label: "使い終えた介護用品・福祉用具の整理", desc: "借りた物の返却と購入した物の手放し方" },
  { href: "/kusuri-keshouhin-shobun/", label: "古い薬・化粧品の処分方法", desc: "安全に手放すための確認先と分け方" },
  { href: "/nyuin-taiin-ie-seiri/", label: "入院前・退院前に家を整える", desc: "留守中の備えと帰宅後の安全チェック" },
  { href: "/shibougo-tetsuzuki-ihinseiri/", label: "家族が亡くなった後の手続きと遺品整理", desc: "手続きと片付けの順番" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの出し方", desc: "スプレー缶・電池など区分に迷う品目" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体回収と業者回収の使い分け", desc: "どちらに頼むべきかの判断基準" },
  { href: "/muryou-kaishuu-chuui/", label: "「無料回収」をうたう業者の注意点", desc: "トラブルを避ける確認事項" },
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
    { "@type": "ListItem", position: 2, name: "在宅医療廃棄物の捨て方" },
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
    { href: "#kiso", label: "1｜在宅医療廃棄物の扱いで決まっていること" },
    { href: "#kubun", label: "2｜品目ごとの出し方（自治体の例）" },
    { href: "#steps", label: "3｜在宅医療廃棄物を片付ける5ステップ" },
    { href: "#chui", label: "4｜針・センサー・回収業者の注意点" },
    { href: "#gyousha", label: "5｜業者への依頼を検討すべき状況" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#shutten", label: "7｜出典・参考にした公的情報" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "在宅医療廃棄物の捨て方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          在宅医療廃棄物の捨て方｜注射針は医療機関・薬局へ返却、点滴バッグやチューブは自治体の区分で
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          自宅で使った注射針などの鋭利な物は、ごみに出さず、処方した医療機関や使用済み注射針回収薬局などへ返却します。点滴バッグ・チューブ・ガーゼなど針のない物は、中身を空にして自治体の区分に従って出します。環境省の通知が示すこの考え方に沿って、港区・新宿区・静岡市・神戸市などが出し方を案内しています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、介護を終えたときや、家族が亡くなった後の片付けで医療用品が出てきたときに、何をどこへ返し、何をごみとして出すかを、環境省と自治体の公式情報をもとに順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>在宅医療廃棄物は一般廃棄物。鋭利な物は医療機関へ、鋭利でない物は市町村が処理する方法が望ましいとされている（環境省）</li>
          <li>注射針は、処方した医療機関・回収薬局・訪問看護ステーションなどへ返却する（港区）</li>
          <li>針を入れる容器の指定は自治体で異なり、神戸市は缶・びん・ペットボトルを使わないよう求めている</li>
          <li>バッグ類は中身を処理して空にし、チューブ・ガーゼなどとともに自治体の区分で出す</li>
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

      <H2 id="kiso" num="1">在宅医療廃棄物の扱いで決まっていること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        在宅医療廃棄物とは、自宅での注射・点滴・腹膜透析・自己導尿などに伴って家庭から出る廃棄物です。片付けに入る前に、国と自治体が示している扱いを確認してください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kubun" num="2">品目ごとの出し方（自治体の例）</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        主な品目の出し方を、各自治体の案内からまとめました。区分の名称（可燃ごみ・燃やすごみなど）や細かな扱いは自治体ごとに異なるため、お住まいの自治体の案内で確認してください。
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-border">
          <thead className="bg-surface-alt">
            <tr>
              <th className="text-left p-3 border-b border-border">品目</th>
              <th className="text-left p-3 border-b border-border">出し方</th>
              <th className="text-left p-3 border-b border-border">案内している自治体</th>
            </tr>
          </thead>
          <tbody>
            {table.map(([a, b, c]) => (
              <tr key={a} className="border-b border-border align-top">
                <td className="p-3 font-medium text-text-primary">{a}</td>
                <td className="p-3 text-text-secondary">{b}</td>
                <td className="p-3 text-text-secondary">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="steps" num="3">在宅医療廃棄物を片付ける5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        進め方は、針の有無で分ける→針を容器にまとめる→返却先へ持ち込む→バッグ類を空にする→針のない物を自治体の区分で出す、の5ステップです。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4 mt-6">
        飲み薬や塗り薬など使いかけの薬の扱いは<Link href="/kusuri-keshouhin-shobun/" className="text-primary underline underline-offset-2">古い薬・化粧品の処分方法</Link>、介護用ベッドや車いすなど福祉用具の返却と処分は<Link href="/kaigo-youhin-shobun/" className="text-primary underline underline-offset-2">使い終えた介護用品・福祉用具の整理</Link>で解説しています。
      </p>

      <H2 id="chui" num="4">針・センサー・回収業者の注意点</H2>
      <div className="space-y-4 mb-4">
        {cautions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        回収業者とのトラブルを避ける確認事項は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">「無料回収」をうたう業者の注意点</Link>で解説しています。
      </p>

      <H2 id="gyousha" num="5">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        医療用品そのものは医療機関や薬局、自治体の案内に従って手放しますが、次のような状況では、ほかの家財の片付けについて片付け・不用品回収業者への依頼も検討してください。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、家庭の廃棄物の回収に必要な市区町村の許可や委託を確認できる業者を選び、作業前の見積もりで総額と作業の範囲を確定させてください。家族が亡くなった後の手続きと片付けの順番は<Link href="/shibougo-tetsuzuki-ihinseiri/" className="text-primary underline underline-offset-2">家族が亡くなった後の手続きと遺品整理</Link>、自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
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

      <H2 id="faq" num="6">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="shutten" num="7">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・{CHECKED}確認）
          </li>
        ))}
      </ul>

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
        本記事は一般的な知識の提供を目的としたもので、医療上の助言ではありません。在宅医療廃棄物の区分と出し方、注射針の返却先と容器の指定は自治体や医療機関・薬局により異なるため、必ずお住まいの自治体と、処方を受けた医療機関・薬局の案内をご確認ください。
      </p>
    </article>
  );
}
