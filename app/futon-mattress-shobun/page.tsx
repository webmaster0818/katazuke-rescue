import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/futon-mattress-shobun/";
const TITLE = "布団・マットレスの処分方法｜手間の少ない捨て方とルート別の使い分け";
const DESC =
  "布団・マットレスの処分は、自治体の粗大ごみが基本ルートですが、スプリング入りマットレスは扱いが特殊な場合があります。粗大ごみ・買い替え時の引き取り・回収業者などルート別の使い分け、申し込みから搬出までの5ステップ、やってはいけないNG行動、業者に頼むべきケースまでを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "布団・マットレスは「粗大ごみ」扱いが基本",
    body: "布団・毛布・敷きパッドなどの寝具や、マットレスは、多くの自治体で粗大ごみとして収集されています。一辺の長さなど一定の基準を超えるごみを粗大ごみとする自治体が多く、折り畳んでも布団は基準を超えることがほとんどだからです。ただし、粗大ごみの基準・料金・申し込み方法は自治体によって異なります。「小さく切れば可燃ごみで出せる」とされる自治体もあれば、認められていない自治体もあるため、必ずお住まいの市区町村の公式サイトで確認してください。",
  },
  {
    title: "スプリング入りマットレスは扱いが特殊な場合がある",
    body: "内部に金属のスプリング（ばね）が入ったマットレスは、布と金属の分離処理が難しいため、自治体によっては粗大ごみとして収集していない、あるいは「処理困難物」として別扱いにしている場合があります。この場合、自治体が案内する処理施設への持ち込みや、許可を持つ回収業者への依頼が選択肢になります。スプリングの有無で処分の難易度が大きく変わるため、処分前にマットレスの種類（スプリング入りか、ウレタンなどのノンスプリングか）を確認しましょう。",
  },
  {
    title: "「売る・譲る」が成立しにくいのが寝具の特徴",
    body: "家具や家電と違い、使用済みの布団・マットレスは衛生上の理由から、リサイクルショップなどでの買取が成立しにくい品目です。未使用品や、ブランドマットレスの美品など例外はありますが、基本的には「処分する」前提でルートを考えるのが現実的です。状態のよい物を譲りたい場合は、地域の掲示板サービスや知人への譲渡など、相手が状態を了解したうえで受け取れる方法が向いています。",
  },
];

const routes = [
  {
    title: "ルート1：自治体の粗大ごみ収集に申し込む（基本ルート）",
    body: "標準的で費用を抑えやすいルートです。電話やインターネットで申し込み、案内された料金分の処理券（シールなど）を購入して貼り、指定日に指定場所へ出す、という流れが一般的です。申し込みから収集日まで日数がかかる場合があるため、引っ越しなど期限がある場合は早めの申し込みが重要です。料金・手順・出せる品目は自治体により異なるので、必ず公式サイトで確認してください。",
  },
  {
    title: "ルート2：自治体の処理施設に自分で持ち込む",
    body: "自治体によっては、ごみ処理施設への自己搬入を受け付けている場合があります。収集を待たずに処分でき、費用も抑えられることが多い一方、車両が必要で、受付日時・事前予約の要否・搬入条件が自治体ごとに決まっています。スプリングマットレスの受け入れ可否も施設・自治体によって異なるため、持ち込み前に必ず確認しましょう。",
  },
  {
    title: "ルート3：買い替え時に販売店の引き取りサービスを使う",
    body: "布団やマットレスを新しく購入する際、店舗によっては古い寝具の引き取りサービスを行っている場合があります。配達と同時に引き取ってもらえれば、搬出の手間が最小で済みます。ただし、引き取りの有無・条件・料金は店舗によって異なり、同等品の購入が条件になることが一般的です。購入前に引き取りの可否を確認しておきましょう。",
  },
  {
    title: "ルート4：不用品回収業者にまとめて依頼する",
    body: "日時を指定して部屋からの搬出ごと任せたい場合や、布団・マットレス以外にも処分したい物がある場合は、必要な許可を持つ不用品回収業者への依頼が便利です。特に、階段しかない住居からのダブルサイズのマットレス搬出などは、自力では危険を伴います。費用は物量・搬出条件により異なるため、見積もりで内訳を確認し、複数社を比較するのがおすすめです。",
  },
];

const steps = [
  {
    title: "マットレスの種類と自治体ルールを確認する",
    body: "まず、処分したい物がスプリング入りマットレスかどうかを確認します（重量感やタグの表記、製品情報で判断できます）。次に、お住まいの自治体の公式サイトで、布団・マットレスの扱い（粗大ごみ対象か、スプリング入りの扱い、料金、申し込み方法）を確認します。この2つの確認で、選べるルートが確定します。",
  },
  {
    title: "処分ルートを決めて申し込む",
    body: "確認結果と自分の状況（期限・運搬手段・他の不用品の有無）から、自治体収集・持ち込み・販売店引き取り・回収業者のいずれかを選び、申し込みます。自治体の粗大ごみは収集日まで日数がかかることがあるため、退去日など期限がある場合は逆算して早めに動きましょう。段取りの立て方は退去前の片付けの記事も参考になります。",
  },
  {
    title: "処理券の購入など、指定された手続きを済ませる",
    body: "自治体収集の場合は、コンビニなどで案内された金額の粗大ごみ処理券を購入し、氏名や受付番号など指定された事項を記入して、見えやすい位置に貼ります。持ち込みの場合は予約や必要書類を確認します。手続きの詳細は自治体により異なるため、申し込み時の案内に従ってください。",
  },
  {
    title: "搬出しやすいようにまとめ、指定日時・場所に出す",
    body: "布団は布団袋やひもで縛るとコンパクトになり、運びやすくなります。マットレスは無理に折り曲げず、通路や階段の幅を確認してから搬出経路を決めましょう。大型マットレスの搬出は2人以上で行い、壁や手すりを傷つけないよう注意が必要です。指定の収集日時・場所のルールを守って出せば完了です。",
  },
  {
    title: "期限に間に合わない・運べない場合は回収業者に切り替える",
    body: "「収集日が退去日に間に合わない」「自力で搬出できない」とわかった時点で、無理をせず回収業者への依頼に切り替えましょう。搬出から運搬まで任せられるため、体力面・安全面のリスクを避けられます。依頼時は許可の有無と見積もりの内訳を確認し、極端に安い「無料回収」の勧誘は避けてください。",
  },
];

const ngActions = [
  {
    title: "自治体ルールを確認せずに集積所へ出す",
    body: "布団やマットレスを通常のごみ集積所に出しても、粗大ごみ扱いの自治体では収集されず、放置されて近隣の迷惑になります。ルール違反のごみ出しは、場合によっては不法投棄として扱われるおそれもあります。必ず自治体の案内に沿った方法で出してください。",
  },
  {
    title: "スプリングマットレスを自分で解体しようとする",
    body: "処分費を浮かせる目的でスプリングマットレスを切断・解体する方法が紹介されることがありますが、内部の金属ばねは切断が難しく、工具によるけがのリスクが高い作業です。解体後の金属の処分も自治体ルールの確認が必要になります。安全面を考えると、正規の粗大ごみルートか回収業者への依頼をおすすめします。",
  },
  {
    title: "「無料回収」をうたう許可不明の業者に渡す",
    body: "巡回トラックやチラシの「無料回収」は、処理の実態が不透明で、不法投棄や積み込み後の高額請求といったトラブルにつながるおそれがあります。回収を依頼する場合は、必要な許可と料金の内訳を確認できる業者を選びましょう。見分け方は違法業者の見分け方の記事で解説しています。",
  },
  {
    title: "収集日直前・退去直前まで手続きを先送りする",
    body: "自治体の粗大ごみは申し込みから収集まで日数がかかることがあり、引っ越しシーズンはさらに混み合う場合があります。退去日までに出せず、残置物として扱われると、余計な費用やトラブルの原因になります。処分が決まった時点で、まず申し込みだけでも済ませておくのが確実です。",
  },
];

const judgeSigns = [
  "退去・引っ越しの期限があり、自治体の収集日では間に合わない",
  "階段しかない住居や狭い通路からの搬出で、自力では運び出せない",
  "スプリングマットレスが自治体で収集対象外とされ、持ち込みも難しい",
  "布団・マットレス以外にも、家具や家電などまとめて処分したい物がある",
  "高齢や体調の事情で、重い寝具の搬出作業自体が難しい",
];

const faqs = [
  {
    q: "布団を可燃ごみとして出すことはできますか？",
    a: "自治体によります。小さく切断すれば可燃ごみとして出せるとする自治体もありますが、切断しても粗大ごみ扱いとする自治体もあります。また、布団の切断は想像以上に手間がかかる作業です。お住まいの市区町村の公式サイトでルールを確認し、認められている場合のみ検討してください。基本は粗大ごみとしての処分が確実です。",
  },
  {
    q: "マットレスの処分費用はいくらくらいかかりますか？",
    a: "自治体の粗大ごみ料金は自治体・品目区分により異なり、回収業者の料金は物量・搬出条件により異なるため、一律の金額は言えません。自治体収集は比較的安価に済むことが多く、正確な料金は申し込み時に案内されます。回収業者に依頼する場合は、複数社の見積もりで内訳を比較するのが確実です。費用の考え方は当サイトの費用相場ページも参考にしてください。",
  },
  {
    q: "まだ使える布団やマットレスを寄付・譲渡できますか？",
    a: "使用済み寝具は衛生上の理由から、買取や寄付の受け入れ先が限られる品目です。未使用品であれば寄付を受け付けている団体もありますが、使用済み品は、地域の掲示板サービスや知人への譲渡など、相手が状態を了解して受け取れる方法が現実的です。受け入れ条件は先方によって異なるため、事前確認を忘れずに。",
  },
  {
    q: "カビが生えた布団・マットレスはどう処分すればよいですか？",
    a: "カビが生えていても、処分ルート自体は通常と同じ（自治体の粗大ごみや回収業者への依頼）です。搬出時にカビの胞子を吸い込んだり撒き散らしたりしないよう、袋や布団袋で覆ってから運ぶことをおすすめします。部屋側のカビが残っていると新しい寝具にも再発するため、部屋のカビ掃除の記事を参考に、環境の改善もあわせて行ってください。",
  },
];

const related = [
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "冷蔵庫・洗濯機などの正しい捨て方" },
  { href: "/kabi-seisou/", label: "部屋のカビ掃除と再発防止", desc: "カビの生えた寝具まわりの環境改善" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限から逆算する処分スケジュール" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "粗大ごみ収集の使い方と注意点" },
  { href: "/service/fuyohin/", label: "不用品回収業者の選び方", desc: "搬出ごと任せられる業者の選び方" },
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
    { "@type": "ListItem", position: 2, name: "布団・マットレスの処分方法" },
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
    { href: "#kiso", label: "1｜布団・マットレス処分の基本知識" },
    { href: "#route", label: "2｜処分ルート4つの使い分け" },
    { href: "#houshin", label: "3｜ルート選びの全体方針" },
    { href: "#steps", label: "4｜処分までの5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜回収業者に頼んだほうがよいケース" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "布団・マットレスの処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          布団・マットレスの処分方法｜手間の少ない捨て方とルート別の使い分け
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「古い布団を捨てたいけれど、何ごみになるのかわからない」「マットレスが大きくて運び出せない」——布団・マットレスは、かさばる・重い・売れにくいという三拍子がそろった、処分に迷いやすい代表的な品目です。特にスプリング入りマットレスは、自治体によって扱いが分かれるため注意が必要です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、布団・マットレス処分の基本知識、4つの処分ルートの使い分け、申し込みから搬出までの5ステップ、やってはいけないNG行動、回収業者に頼んだほうがよいケースまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>布団・マットレスは自治体の粗大ごみが基本ルート。料金・手順は自治体により異なる</li>
          <li>スプリング入りマットレスは収集対象外・別扱いの自治体もあるため、種類の確認が最初の一歩</li>
          <li>使用済み寝具は買取が成立しにくく、「処分する」前提でルートを考えるのが現実的</li>
          <li>期限が迫っている・自力で搬出できない場合は、許可のある回収業者への依頼が確実</li>
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

      <H2 id="kiso" num="1">布団・マットレス処分の基本知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ルートを選ぶ前に、布団・マットレスという品目の特徴を3つ押さえておきましょう。この3点を知っているだけで、処分の失敗はほぼ避けられます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="route" num="2">処分ルート4つの使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        布団・マットレスの処分ルートは、大きく次の4つです。費用を抑えたいか、手間を減らしたいか、期限があるかで選び方が変わります。
      </p>
      <div className="space-y-4 mb-4">
        {routes.map((r) => (
          <div key={r.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{r.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{r.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">ルート選びの全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        費用を最優先するなら自治体の粗大ごみ収集または持ち込み、手間を最小にするなら買い替え時の販売店引き取り、期限や搬出の問題があるなら回収業者、という使い分けが基本です。どのルートでも、最初にやることは「スプリングの有無の確認」と「自治体ルールの確認」の2つで変わりません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、引っ越しや退去に伴う処分では、布団・マットレス以外の不用品も一緒に出ることがほとんどです。全体の段取りは<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付け</Link>、品目ごとのルートの使い分けは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">処分までの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の処分は、次の5ステップで進めます。ポイントは「確認を先に、手続きは早めに」です。
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

      <H2 id="gyousha" num="6">回収業者に頼んだほうがよいケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のようなケースでは、自治体ルートにこだわらず、必要な許可を持つ不用品回収業者への依頼を検討しましょう。搬出・運搬・処分まで一括で任せられるのが業者依頼の利点です。
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
            不用品回収業者ランキングを見る
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
        本記事は一般的な知識の提供を目的としたものです。粗大ごみの出し方・料金・対象品目、スプリングマットレスの扱いは自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。販売店の引き取りサービスの有無・条件は各店舗にご確認ください。
      </p>
    </article>
  );
}
