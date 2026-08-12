import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/fuyohin-shobun-route/";
const TITLE = "不用品の処分ルート7つの使い分け｜自治体・売却・譲渡・業者の選び方";
const DESC =
  "不用品の処分方法は、自治体の普通ゴミ・粗大ごみ収集、家電リサイクル法ルート、リサイクルショップ・フリマアプリでの売却、譲渡・寄付、不用品回収業者の7つに整理できます。それぞれの向き不向きと使い分けの考え方、品目別の注意点、避けるべきNG行動、業者に頼む判断基準を解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const routes = [
  {
    name: "自治体の普通ゴミ（可燃・不燃・資源）",
    fit: "小型・少量の不用品",
    body: "指定袋などに入るサイズの物は、自治体の可燃ゴミ・不燃ゴミ・資源回収で処分するのが基本です。費用を抑えられる一方、分別区分や収集日は自治体ごとに細かく異なるため、お住まいの市区町村のルールに沿って出す必要があります。量が多い場合は、収集日ごとに少しずつ出す計画性が求められます。",
  },
  {
    name: "自治体の粗大ごみ収集",
    fit: "指定サイズを超える家具など",
    body: "一定サイズを超える家具などは、多くの自治体で事前申し込み制の粗大ごみ収集の対象になります。一般に費用は比較的抑えやすい選択肢ですが、申し込みから収集日まで日数がかかることがあり、指定場所までの搬出は自分で行うのが基本です。料金・申し込み方法・対象品目は自治体により異なるため、必ず公式サイトや案内で確認してください。",
  },
  {
    name: "家電リサイクル法の対象品目ルート",
    fit: "エアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機",
    body: "この4品目は家電リサイクル法の対象で、自治体の粗大ごみには出せません。買い替え時に販売店へ引き取りを依頼する、購入した店に引き取りを依頼する、自治体が案内する方法（指定引取場所への持ち込みなど）を利用するのが正規のルートです。リサイクル料金や収集運搬料金がかかります。具体的な手順は自治体や販売店の案内で確認してください。",
  },
  {
    name: "リサイクルショップ・買取業者への売却",
    fit: "状態のよい家具・家電・ブランド品など",
    body: "まだ使える物は、捨てる前に売却を検討する価値があります。店頭買取のほか、出張買取に対応する業者もあり、大型品でも搬出まで任せられる場合があります。製造年の新しい家電や需要のあるブランド品は値が付きやすい一方、状態や年式によっては買取不可となることもあります。処分費用を減らすどころか収入になる可能性がある、まず検討したいルートです。",
  },
  {
    name: "フリマアプリ・ネットオークション",
    fit: "時間に余裕があり、手間をかけられる人",
    body: "フリマアプリは自分で価格を決められるぶん、撮影・出品・梱包・発送の手間と、売れるまでの時間がかかります。引越しや退去など期限がある場面には不向きですが、時間に余裕があり、少しでも高く手放したい物には有効です。大型品は送料が高くつくため、事前に配送方法と送料を確認しましょう。",
  },
  {
    name: "譲渡・寄付",
    fit: "使える物を無駄にしたくない人",
    body: "友人・知人への譲渡、地域の掲示板サービスでの譲り合い、支援団体への寄付なども選択肢です。費用がかからず、物を活かせる満足感がありますが、相手が見つかるまでの時間と受け渡しの調整が必要です。寄付は団体ごとに受け入れ品目や条件が異なるため、事前確認が必須です。",
  },
  {
    name: "不用品回収業者",
    fit: "量が多い・急ぎ・搬出が難しい場合",
    body: "分別・搬出・処分までまとめて任せられるのが不用品回収業者です。日時を指定でき、即日対応をうたう業者もあるため、引越し前や退去前など期限のある場面、大型品の搬出が難しい場面で力を発揮します。費用は物量・品目・搬出条件により異なるため、複数社の見積もり比較が基本です。依頼先は一般廃棄物収集運搬の許可を持つ業者、または許可業者と提携していることを確認できる業者を選びましょう。",
  },
];

const decideSteps = [
  {
    title: "「売れる物」を先に抜き出す",
    body: "処分を考える前に、状態のよい家電・家具・ブランド品・ホビー用品など、値が付く可能性のある物を抜き出します。売却できれば処分費用が減るだけでなくプラスになることもあります。判断に迷う物は、買取業者の無料査定やフリマアプリの相場検索でおおよその価値を確認できます。",
  },
  {
    title: "期限を確認してルートを絞る",
    body: "引越し・退去などの期限があるかどうかで、使えるルートは大きく変わります。期限まで余裕があれば「売却・譲渡→自治体収集」の組み合わせで費用を抑えられます。期限が2週間を切っているなら、収集日を待つ自治体ルートやフリマアプリは間に合わないことがあり、回収業者の比重が高まります。",
  },
  {
    title: "自治体で出せる物は自治体ルートで出す",
    body: "期限に余裕がある場合、費用面では自治体の収集が基本の選択肢です。普通ゴミ・粗大ごみの区分やルールを市区町村の案内で確認し、収集日から逆算して計画的に出していきます。家電リサイクル法の対象4品目だけは自治体の粗大ごみに出せないため、販売店や自治体案内の正規ルートで処分します。",
  },
  {
    title: "残った物と搬出が難しい物を業者にまとめる",
    body: "自治体ルートで出し切れない量の物、自分で運び出せない大型品、期限までに処分しきれない物は、不用品回収業者にまとめて依頼します。回収品目と量を伝えて複数社から見積もりを取り、総額と内訳（基本料金・品目料金・搬出費など）を比較しましょう。部屋全体の片付けを伴うなら、片付けと回収を一括で頼める業者が効率的です。",
  },
];

const ngActions = [
  {
    title: "スピーカーで巡回する「無料回収」業者に安易に渡す",
    body: "無料をうたって巡回するトラックや突然の訪問営業の中には、廃棄物処理に必要な許可の確認が取れない業者があり、積み込み後の高額請求や不法投棄のトラブルが各地で報告されています。依頼前に、許可の有無・会社の所在地・料金体系を確認できる業者を選びましょう。",
  },
  {
    title: "家電リサイクル法の対象品目を普通ゴミ・粗大ごみに出す",
    body: "エアコン・テレビ・冷蔵庫や冷凍庫・洗濯機や衣類乾燥機の4品目は、自治体の粗大ごみでは収集されません。回収を装った業者による不適正処理も問題になっているため、販売店の引き取りや自治体が案内する正規ルートで処分してください。",
  },
  {
    title: "収集ルールを確認せず一度に大量のゴミを出す",
    body: "引越し前などに大量のゴミを一度に集積所へ出すと、収集されないだけでなく近隣トラブルの原因になります。一時多量ごみの扱いは自治体により異なり、事前連絡や持ち込みが必要な場合もあるため、量が多いときは市区町村に確認しましょう。",
  },
  {
    title: "「全部売れるはず」と売却にこだわって期限に間に合わなくなる",
    body: "フリマアプリは売れるまでの時間が読めません。期限のある場面で売却にこだわると、直前に処分が集中して割高な選択を迫られがちです。「期限の1週間前までに売れなければ処分に切り替える」など、撤退ラインを先に決めておきましょう。",
  },
];

const judgeSigns = [
  "処分したい物が部屋の相当部分を占めるほど量が多い",
  "タンス・ベッド・冷蔵庫など、自分では搬出できない大型品がある",
  "引越し・退去の期限まで2週間を切っている",
  "分別や複数回のゴミ出しに使える時間・体力がない",
  "部屋全体の片付けや清掃もあわせて頼みたい",
];

const faqs = [
  {
    q: "不用品の処分で一番費用を抑えられる方法はどれですか？",
    a: "一般論としては、売却・譲渡できる物を先に手放し、残りを自治体の収集ルールに沿って出す組み合わせが費用を抑えやすい方法です。ただし自治体の粗大ごみの料金や区分は市区町村ごとに異なるため、お住まいの自治体の案内で確認してください。時間や搬出の手間も費用と考えると、量が多い場合は回収業者のほうが総合的な負担が小さいこともあります。",
  },
  {
    q: "冷蔵庫や洗濯機はどうやって処分すればいいですか？",
    a: "冷蔵庫・冷凍庫、洗濯機・衣類乾燥機は、エアコン・テレビと同じく家電リサイクル法の対象品目で、自治体の粗大ごみには出せません。買い替えの場合は新しい製品を購入する販売店に、処分のみの場合は購入した販売店や自治体が案内する方法（指定引取場所など）で引き渡すのが正規ルートです。リサイクル料金等の詳細は販売店・自治体の案内で確認してください。",
  },
  {
    q: "不用品回収業者の料金はどのくらいかかりますか？",
    a: "物量・品目・搬出条件により大きく異なるため、一律の金額は言えません。トラック積載量ベースのパックプランを設ける業者もあります（例として当サイト掲載の粗大ゴミ回収本舗は定額パック9,800円からと公式サイトに記載）。総額は現場条件で変わるため、複数社の見積もりで内訳を比較するのが基本です。詳しくは費用相場ページをご覧ください。",
  },
  {
    q: "悪質な回収業者を避けるにはどこを確認すればいいですか？",
    a: "家庭の廃棄物の収集運搬には一般廃棄物収集運搬業の許可が必要です。会社の所在地・固定電話・料金体系が明示されているか、見積もりが書面で出るか、「無料回収」を強調して巡回していないかを確認しましょう。少しでも不審に感じたらその場で契約せず、複数社を比較することが自衛になります。詳しくは違法業者の見分け方の記事で解説しています。",
  },
];

const related = [
  { href: "/service/fuyohin/", label: "不用品回収業者の選び方と料金比較", desc: "回収業者に頼む場合の基礎知識" },
  { href: "/guide/municipal-service/", label: "自治体の粗大ゴミ回収サービス活用法", desc: "自治体ルートの使い方を詳しく" },
  { href: "/guide/illegal-dumping/", label: "不用品回収の違法業者の見分け方", desc: "トラブルを避けるチェックポイント" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "定額パック制の関東対応業者" },
  { href: "/area/tokyo/", label: "東京の片付け・不用品回収業者おすすめ", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "不用品の処分ルート7つの使い分け" },
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
    { href: "#routes", label: "1｜不用品の処分ルート7つと向き不向き" },
    { href: "#steps", label: "2｜ルートを決める4ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜回収業者に頼んだほうがよいケース" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "不用品の処分ルート7つの使い分け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          不用品の処分ルート7つの使い分け｜自治体・売却・譲渡・業者の選び方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けや引越しで出た不用品を前に、「これはゴミに出せるのか」「売れるのか」「業者に頼むべきか」と迷った経験はないでしょうか。不用品の処分方法は1つではなく、費用・手間・スピードの異なる複数のルートがあります。ルート選びを間違えると、余計な費用がかかったり、期限に間に合わなかったり、悪質業者のトラブルに巻き込まれたりすることもあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、不用品の処分ルートを7つに整理し、それぞれの向き不向きと使い分けの考え方を解説します。読み終えるころには、手元の不用品ごとに「どのルートで手放すか」を自分で判断できるようになるはずです。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>処分ルートは「自治体の普通ゴミ／粗大ごみ／家電リサイクル法ルート／売却／フリマ／譲渡・寄付／回収業者」の7つ</li>
          <li>基本の考え方は「売れる物を先に抜き、自治体で出せる物を出し、残りを業者にまとめる」</li>
          <li>エアコン・テレビ・冷蔵庫/冷凍庫・洗濯機/衣類乾燥機は自治体の粗大ごみに出せない（家電リサイクル法）</li>
          <li>粗大ごみの料金・手順は自治体により異なるため、必ず市区町村の案内を確認する</li>
          <li>量が多い・急ぎ・搬出困難なら、許可を確認できる回収業者への依頼が現実的</li>
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

      <H2 id="routes" num="1">不用品の処分ルート7つと向き不向き</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、7つのルートの特徴を押さえましょう。それぞれ「向いている物・場面」が異なります。
      </p>
      <div className="space-y-4 mb-4">
        {routes.map((r, i) => (
          <div key={r.name} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-1">
              <span className="mono text-primary mr-2">{String(i + 1).padStart(2, "0")}</span>
              {r.name}
            </h3>
            <p className="text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-full inline-block px-3 py-0.5 mb-2">向いているもの：{r.fit}</p>
            <p className="text-[15px] leading-8 text-text-secondary">{r.body}</p>
          </div>
        ))}
      </div>

      <H2 id="steps" num="2">ルートを決める4ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際に不用品を手放すときは、次の順番で考えると費用と手間のバランスが取りやすくなります。
      </p>
      <div className="space-y-5 mb-4">
        {decideSteps.map((s, i) => (
          <div key={s.title}>
            <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
              <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.body}</p>
          </div>
        ))}
      </div>

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="4">回収業者に頼んだほうがよいケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまるなら、自治体ルートやフリマにこだわらず、不用品回収業者への依頼を検討する段階です。
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
        費用は物量・搬出条件により異なるため、複数社の見積もり比較が基本です。業者ごとの特徴は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方と料金比較</Link>と各社レビュー（<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>、<Link href="/review/otasuke-usagi/" className="text-primary underline underline-offset-2">お助けうさぎ</Link>など）で解説しています。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          信頼できる回収業者選びには、編集部の比較ランキングをご活用ください。
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
        ゴミの分別区分・粗大ごみの料金・申し込み方法は自治体により異なります。必ずお住まいの市区町村の公式サイトや案内をご確認ください。家電リサイクル法対象品目の処分手順・料金は販売店・自治体の案内をご確認ください。
      </p>
    </article>
  );
}
