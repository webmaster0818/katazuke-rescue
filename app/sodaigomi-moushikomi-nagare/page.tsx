import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sodaigomi-moushikomi-nagare/";
const TITLE = "粗大ごみ収集の申し込みの流れ｜一般的な手順と出すときの注意点";
const DESC =
  "自治体の粗大ごみ収集は「対象品目の確認→申し込み→手数料の納付→指定日に排出」という流れが一般的です。この記事では、初めて粗大ごみを出す方向けに、申し込みの一般的な流れ、事前に確認しておくべきこと、やってはいけないNG行動、自治体収集が使いにくい場合の代替手段までを解説します。具体的なルールは自治体により異なるため、必ずお住まいの市区町村の公式案内をご確認ください。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "粗大ごみは「申し込み制」が一般的",
    body: "多くの自治体では、粗大ごみは通常のごみ集積所に自由に出せるものではなく、事前に申し込みをして収集日と手数料を確認したうえで排出する「申し込み制」を採用しています。一辺の長さなど大きさの基準で粗大ごみかどうかを区分する自治体が多いですが、基準そのものが自治体ごとに異なります。まずお住まいの市区町村の公式サイトで「粗大ごみ」のページを確認するのが出発点です。",
  },
  {
    title: "収集してもらう方法と持ち込む方法がある",
    body: "自治体の粗大ごみ処分には、指定日に自宅前などへ出して収集してもらう方法のほか、自治体の処理施設へ自分で持ち込む方法を用意しているところもあります。持ち込みは日時の融通や手数料の面で条件が異なる場合がありますが、受け入れの可否・予約の要否・搬入条件は自治体により異なります。車で運べる量なら、持ち込みの制度があるかも確認してみる価値があります。",
  },
  {
    title: "出せない品目がある点に注意",
    body: "エアコン・テレビ・冷蔵庫・洗濯機など家電リサイクル法の対象品目や、パソコン、危険物などは、自治体の粗大ごみ収集では受け付けていないのが一般的です。これらは法律や別の制度に沿ったルートで処分します。何が対象外かも自治体の案内に明記されているので、申し込み前に必ず確認しましょう。",
  },
];

const steps = [
  {
    title: "出したい物が粗大ごみに当たるか確認する",
    body: "まず、お住まいの自治体の公式サイトで、出したい物が粗大ごみの対象かどうかを確認します。多くの自治体が品目別の一覧や検索ページを用意しています。対象外の品目（家電リサイクル対象品など）が混ざっていないかもこの時点でチェックしておくと、後の手戻りがありません。",
  },
  {
    title: "電話またはインターネットで収集を申し込む",
    body: "粗大ごみ受付センターへの電話や、インターネット受付で申し込むのが一般的です。品目・数量・大きさを伝えると、収集日・出す場所・手数料が案内されます。引っ越しシーズンなどは収集日まで日数がかかる場合があるため、期限がある場合は余裕を持って申し込みましょう。受付方法や名称は自治体により異なります。",
  },
  {
    title: "案内された方法で手数料を納付する",
    body: "コンビニやスーパーなどで手数料納付券（シールなど）を購入する方式が広く使われていますが、電子決済に対応する自治体もあります。金額は品目や大きさによって決まり、自治体ごとに異なるため、申し込み時の案内に従ってください。納付券方式の場合は、券に受付番号などを記入して品物に貼るのが一般的です。",
  },
  {
    title: "収集日の朝、指定された場所に出す",
    body: "案内された収集日に、指定の場所（自宅前・集積所など）へ、指定の時刻までに出します。何時までに出すか、前日の夜に出してよいかは自治体のルールによります。マンションなど集合住宅では、排出場所が管理規約で決まっている場合もあるので、管理会社の案内も確認しておくと安心です。",
  },
  {
    title: "出し忘れ・出し損ねがないか最終確認する",
    body: "収集後、申し込んだ品がすべて回収されたか確認します。貼り忘れや場所の間違いで回収されなかった場合は、受付窓口に問い合わせて指示を仰ぎましょう。引っ越しなどで期限があるのに収集が間に合わない場合は、自治体への持ち込み制度や、許可を確認できる回収業者への依頼を検討します。",
  },
];

const ngActions = [
  {
    title: "申し込みせずに集積所へ置いてくる",
    body: "申し込みをしていない粗大ごみを集積所や道端に置く行為は、自治体のルール違反であるだけでなく、状況によっては不法投棄として扱われるおそれがあります。回収もされず近隣の迷惑になるため、必ず正規の手順で申し込みましょう。",
  },
  {
    title: "家電リサイクル対象品を粗大ごみとして出そうとする",
    body: "エアコン・テレビ・冷蔵庫（冷凍庫含む）・洗濯機（衣類乾燥機含む）は家電リサイクル法の対象で、自治体の粗大ごみ収集には出せないのが一般的です。買い替え時の引き取りや指定引取場所への持ち込みなど、法律に沿ったルートで処分してください。詳しくは家電リサイクル法対象品の処分方法の記事で解説しています。",
  },
  {
    title: "収集日ぎりぎりに申し込む",
    body: "申し込みから収集日までは日数がかかる場合があり、3〜4月の引っ越しシーズンは特に混み合う傾向があります。退去日や引っ越し日が決まっているなら、日程が見えた時点で早めに申し込むのが安全です。間に合わないと、残置物の扱いに困ることになります。",
  },
  {
    title: "運び出せない重さの物を無理に一人で運ぶ",
    body: "タンスやベッドなどの重量物を一人で運ぶと、腰を痛めたり、壁や床を傷付けたりするリスクがあります。自治体の収集は家の中からの運び出しには対応していないのが一般的なので、屋外まで出せない場合は、家族や知人の手を借りるか、搬出に対応する業者への依頼を検討しましょう。",
  },
];

const judgeSigns = [
  "収集日まで待てない事情があり、処分を急いでいる",
  "家の中からの運び出しを頼みたい大型の家具・家電がある",
  "処分したい物が多く、1回の申し込み点数の上限では足りない",
  "粗大ごみ以外の不用品や大量のごみもまとめて片付けたい",
  "遠方の実家など、自分が現地で立ち会いにくい場所の処分をしたい",
];

const faqs = [
  {
    q: "粗大ごみの手数料はいくらですか？",
    a: "手数料は品目・大きさによって決まり、自治体ごとに異なります。当サイトで一律の金額をお伝えすることはできないため、お住まいの市区町村の公式サイトの品目一覧か、申し込み時の案内で確認してください。手数料納付券をコンビニなどで購入する方式が広く使われています。",
  },
  {
    q: "申し込みから収集までどのくらいかかりますか？",
    a: "自治体や時期によって異なります。混雑する時期は収集日まで日数がかかる場合があるため、引っ越しや退去など期限がある場合は、日程が決まった時点で早めに申し込むことをおすすめします。急ぐ場合は、自治体の処理施設への持ち込み制度の有無も確認してみましょう。",
  },
  {
    q: "自分で外まで運び出せない場合はどうすればよいですか？",
    a: "自治体の粗大ごみ収集は、屋外の指定場所までは自分で出すのが原則の場合が多いです。自治体によっては高齢者・障がいのある方向けに運び出しを支援する制度を設けていることがあるので、まず自治体に相談してください。制度の対象外の場合は、搬出に対応する不用品回収業者への依頼が選択肢になります。",
  },
  {
    q: "粗大ごみ収集と不用品回収業者はどちらを使うべきですか？",
    a: "時間に余裕があり、自分で運び出せる物なら自治体の粗大ごみ収集が手堅い選択です。急いでいる場合、運び出しが難しい場合、量が多い場合は、一般廃棄物の収集運搬の許可などを確認できる業者への依頼が向いています。使い分けの考え方は自治体回収と業者回収の使い分けの記事で詳しく解説しています。",
  },
];

const related = [
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体回収と業者回収の使い分け", desc: "どちらに頼むべきかの判断基準" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "自治体の収集制度を上手に使う方法" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分", desc: "粗大ごみに出せない家電の処分ルート" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない家具の搬出と処分の選択肢" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分方法", desc: "かさばる寝具の手放し方" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "業者に頼む場合の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "粗大ごみ収集の申し込みの流れ" },
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
    { href: "#kiso", label: "1｜粗大ごみ収集の基本" },
    { href: "#steps", label: "2｜申し込みから収集までの一般的な5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "粗大ごみ収集の申し込みの流れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          粗大ごみ収集の申し込みの流れ｜一般的な手順と出すときの注意点
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「粗大ごみってどうやって出すの？」「申し込みが必要と聞いたけれど、何から始めればいい？」——初めて粗大ごみを出すとき、意外と手順が分からず戸惑う方は少なくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、自治体の粗大ごみ収集を利用するときの一般的な流れを、申し込みから収集当日まで順を追って解説します。具体的な基準・手数料・受付方法は自治体ごとに異なるため、本記事は全体像をつかむための一般論として読み、実際の手続きは必ずお住まいの市区町村の公式案内に従ってください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>粗大ごみは「対象確認→申し込み→手数料納付→指定日に排出」の申し込み制が一般的</li>
          <li>大きさの基準・手数料・受付方法は自治体ごとに異なるため、公式サイトの確認が必須</li>
          <li>家電リサイクル法の対象品（エアコン・テレビ・冷蔵庫・洗濯機）は粗大ごみに出せないのが一般的</li>
          <li>収集日まで日数がかかる場合があるため、引っ越し・退去など期限がある場合は早めに申し込む</li>
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

      <H2 id="kiso" num="1">粗大ごみ収集の基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、自治体の粗大ごみ収集という制度の基本的な仕組みを押さえておきましょう。ここが分かると、公式サイトのどこを確認すればよいかが見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">申し込みから収集までの一般的な5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、多くの自治体で共通する大まかな流れを5つのステップで紹介します。各ステップの細かい運用は自治体ごとに違うため、「この順番で確認していけばよい」という道しるべとして使ってください。
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
        自治体の収集制度全般の活用方法は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>で、粗大ごみに出せない家電の処分は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>で詳しく解説しています。
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
        不法投棄やトラブルにつながる処分方法を避けるための知識は、<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事もあわせてご覧ください。
      </p>

      <H2 id="gyousha" num="4">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自治体の粗大ごみ収集は費用を抑えやすい一方、収集日程や運び出しの面で制約があります。次のいずれかに当てはまる場合は、許可や実績を確認できる不用品回収業者・片付け業者への相談を検討しましょう。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        お住まいの地域から依頼できる業者は、<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜</Link>・<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡</Link>など各エリアページで紹介しています。
      </p>

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
        本記事は一般的な知識の提供を目的としたものです。粗大ごみの定義・申し込み方法・手数料・収集日程・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式案内をご確認ください。
      </p>
    </article>
  );
}
