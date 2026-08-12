import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/gaichu-heya-seisou/";
const TITLE = "害虫が発生した部屋の清掃手順｜原因を断つ片付けと駆除・再発防止";
const DESC =
  "ゴキブリ・コバエなどの害虫が発生した部屋は、駆除剤だけでは解決しません。害虫を呼び寄せる原因（生ゴミ・水分・隠れ場所）を断つ片付けと清掃の手順、安全に作業するための準備、やってはいけないNG行動、業者に頼むべき状態の判断基準、再発防止の習慣までを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "害虫は「エサ・水・隠れ場所」の3条件がそろうと発生する",
    body: "ゴキブリやコバエなどの害虫が発生・繁殖するのは、エサ（生ゴミ、食べ残し、食品くず）、水分（シンクの水気、飲み残し、結露）、隠れ場所（物の隙間、段ボール、放置された袋）の3条件がそろったときです。散らかった部屋で害虫が発生しやすいのは、この3条件がそろいやすいからです。逆に言えば、駆除剤で目の前の害虫を退治しても、3条件が残っている限り再発します。害虫対策の本質は駆除ではなく、条件を断つ片付けと清掃にあります。",
  },
  {
    title: "放置すると健康・住環境・近隣への影響が広がる",
    body: "害虫の発生を放置すると、食品や調理器具への接触による衛生問題、フン・死骸によるアレルギーへの影響が懸念されるほか、集合住宅では配管や壁の隙間を通じて隣室へ移動し、近隣トラブルに発展することもあります。「見かける数が増えてきた」「日中も見かけるようになった」という変化は繁殖が進んでいるサインとされるため、早めの対処が重要です。",
  },
  {
    title: "「駆除→片付け→清掃→再発防止」の順で進める",
    body: "害虫が出ている部屋の立て直しは、大量発生していればまず駆除（または業者による駆除）、次に発生源となっているゴミ・物の撤去、その後に水回りを中心とした清掃、最後に再発防止の習慣づくり、という順で進めます。片付けを先にすると物陰から害虫が這い出して作業が進まないことがあるため、発生量が多い場合は駆除を先行させるのがポイントです。",
  },
];

const steps = [
  {
    title: "装備を整え、換気と安全を確保する",
    body: "作業前に、マスク・ゴム手袋・長袖長ズボン・履き物を用意し、フンやほこりを吸い込まないようにします。窓を開けて換気し、殺虫剤を使う場合は製品の注意書きに従ってください。食品や食器は薬剤がかからないよう袋や別室に避難させます。体調が悪いときは無理をせず、作業を分割しましょう。",
  },
  {
    title: "発生量が多い場合は先に駆除する",
    body: "害虫を頻繁に見かける状態なら、片付けの前にくん煙タイプの殺虫剤や設置型の毒餌剤などで数を減らします。使用方法・使用量・使用後の換気は必ず製品の説明に従ってください。発生量が明らかに多い、天井や壁に常時見えるといった段階では、市販品で粘るより害虫駆除業者に任せるほうが確実です。",
  },
  {
    title: "エサと水分の元（生ゴミ・食品・飲み残し）を撤去する",
    body: "片付けは、害虫のエサになっている物から始めます。生ゴミ、食べ残し、飲みかけの容器、開封済みの食品を優先的に袋に密封し、自治体のルールに沿って処分します。冷蔵庫内の腐敗した食品もこの段階で処分しましょう。エサ源を断つだけで、害虫にとっての部屋の魅力は大きく下がります。",
  },
  {
    title: "隠れ場所になっている物を減らし、床を見える状態にする",
    body: "段ボール、紙袋の山、床に積まれた衣類や雑誌は害虫の隠れ場所や産卵場所になります。特に段ボールは温かく隙間が多いため、ため込まずに資源回収へ出しましょう。床が見える状態まで物を減らすと、隠れ場所が減るうえ、以降の清掃と駆除剤の設置が効果的に行えるようになります。",
  },
  {
    title: "水回りと床を清掃し、毒餌剤・侵入対策で仕上げる",
    body: "シンク・排水口・コンロ周りの油汚れと食品カスを落とし、床の拭き掃除でフンや食べこぼしを除去します。仕上げに、設置型の毒餌剤をシンク下や冷蔵庫裏などに配置し、排水口や配管周りの隙間、換気口など侵入経路をふさぐと再発しにくくなります。生ゴミは蓋付きのゴミ箱に入れ、収集日ごとに必ず出す習慣をセットにしましょう。",
  },
];

const ngActions = [
  {
    title: "駆除剤だけで解決しようとして片付けを後回しにする",
    body: "エサと隠れ場所が残ったままでは、駆除しても外部や卵から再び発生します。殺虫剤は「数を減らす手段」であり、「発生条件を断つ片付け・清掃」とセットで初めて効果が持続します。",
  },
  {
    title: "素手・軽装で片付けを始める",
    body: "害虫のフンや死骸、腐敗した生ゴミには衛生上のリスクがあります。素手や素足での作業は避け、手袋・マスク・長袖を着用してください。作業後の手洗いと着替えも忘れずに行いましょう。",
  },
  {
    title: "くん煙剤を説明書を読まずに多用する",
    body: "くん煙タイプの殺虫剤は、火災報知器への対処や使用後の換気など、製品ごとに決められた手順があります。説明を読まずに使うと、報知器の作動や薬剤の残留といったトラブルの元になります。使用量を増やしても効果が比例するわけではないため、必ず製品の指示に従ってください。",
  },
  {
    title: "近隣への配慮なく大量のゴミを一度に出す",
    body: "害虫が発生していたゴミを収集ルールを無視して一度に出すと、集積所で害虫が広がり近隣トラブルになりかねません。袋を密封し、自治体のルールと収集日に沿って計画的に出しましょう。量が多い場合は回収業者の利用も検討してください。",
  },
];

const judgeSigns = [
  "害虫を毎日・日中にも見かける状態で、市販の駆除剤で減った実感がない",
  "ゴミや物の量が多く、発生源の撤去を自力でやり切れる見込みが立たない",
  "フン・死骸・腐敗した生ゴミによる汚損や臭気が床・壁に及んでいる",
  "集合住宅で、隣室への影響や近隣トラブルがすでに心配な状態",
  "体調や忌避感から、害虫のいる部屋での作業がどうしても難しい",
];

const faqs = [
  {
    q: "害虫駆除と片付けはどちらを先にやるべきですか？",
    a: "発生量によります。時々見かける程度なら、エサ源の撤去と清掃を先に進めながら設置型の毒餌剤を併用すれば十分なことが多いでしょう。頻繁に見かける・日中も見かける状態なら、くん煙剤や業者による駆除で数を減らしてから片付けに入るほうが作業が進みます。いずれの場合も、発生条件を断つ片付け・清掃まで行わないと再発します。",
  },
  {
    q: "片付けと害虫駆除をまとめて業者に頼めますか？",
    a: "ゴミ屋敷片付けに対応する業者の多くは、片付け・清掃とあわせて害虫駆除や消毒に対応、または駆除業者と連携しています。対応範囲は業者により異なるため、見積もり時に「害虫が発生している」ことを必ず伝え、駆除・消毒まで含んだ作業範囲と総額を確認しましょう。汚損が激しい場合は特殊清掃の領域になることもあります。",
  },
  {
    q: "害虫が出た部屋の清掃を業者に頼むと費用はどのくらいですか？",
    a: "物量・間取り・汚損の程度・駆除や消毒の要否によって大きく異なるため、一律の金額は言えません。現地見積もりで作業範囲と内訳を確認し、複数社を比較するのが基本です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
  {
    q: "賃貸で害虫が発生した場合、管理会社に連絡すべきですか？",
    a: "建物側の要因（配管の隙間、共用部の状況など）が関わる場合や、隣室への影響が考えられる場合は、管理会社・大家に相談することをおすすめします。対応の分担は契約や発生原因により異なりますが、集合住宅では1室だけ対処しても建物側の経路が残ると再発しやすいため、早めに共有しておくほうが解決につながります。",
  },
];

const related = [
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷片付け業者の選び方", desc: "片付けと清掃をまとめて頼むなら" },
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷になる原因と進行段階", desc: "害虫発生は進行段階のサイン" },
  { href: "/tokusou-seisou/", label: "特殊清掃とは", desc: "汚損・臭気が重度の場合の基礎知識" },
  { href: "/guide/self-cleanup/", label: "ゴミ屋敷を自分で片付ける方法", desc: "自力で片付ける場合の手順" },
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
    { "@type": "ListItem", position: 2, name: "害虫が発生した部屋の清掃手順" },
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
    { href: "#kiso", label: "1｜害虫が発生する仕組みと対処の順番" },
    { href: "#steps", label: "2｜害虫が出た部屋の清掃5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜業者に頼んだほうがよい状態" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "害虫が発生した部屋の清掃手順" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">清掃の基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          害虫が発生した部屋の清掃手順｜原因を断つ片付けと駆除・再発防止
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「部屋でゴキブリやコバエを見かける回数が増えた」「ゴミをためてしまった部屋に虫がわいてしまった」——害虫の発生は、部屋の状態が限界に近づいているサインです。しかし、慌てて殺虫剤を撒くだけでは解決しません。害虫が発生する条件が部屋に残っている限り、駆除しても駆除しても再発するからです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、害虫が発生する仕組みから、駆除と片付け・清掃をどの順番で進めるべきか、安全に作業するための具体的な手順、やってはいけないNG行動、自力では難しい状態の見極め方、再発防止の習慣までを解説します。害虫に悩まされない部屋を取り戻すための実践的な手順書として活用してください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>害虫は「エサ・水・隠れ場所」の3条件で発生する。駆除剤だけでは再発する</li>
          <li>進める順番は「駆除→エサ源の撤去→隠れ場所の削減→清掃→再発防止」</li>
          <li>作業はマスク・手袋・長袖の装備と換気を確保してから。薬剤は製品の説明に従う</li>
          <li>毎日・日中も見かける状態や、汚損・臭気が広がった状態は業者への相談が現実的</li>
          <li>再発防止の鍵は、生ゴミを収集日ごとに出す習慣と段ボールをため込まないこと</li>
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

      <H2 id="kiso" num="1">害虫が発生する仕組みと対処の順番</H2>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">害虫が出た部屋の清掃5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        自力で対処する場合の手順です。安全の確保を最優先に、1回2〜3時間程度の作業に分けて進めましょう。
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
        ゴミの分別・収集ルールは自治体により異なります。量が多い場合の出し方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用法</Link>を、部屋全体の片付け手順は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋の片付けの順番と手順</Link>を参考にしてください。
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

      <H2 id="gyousha" num="4">業者に頼んだほうがよい状態</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力での対処にこだわらず、片付け業者・害虫駆除業者への相談を検討してください。発生量が多い部屋の作業は心身の負担も大きいため、無理をしないことも大切です。
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
        ゴミ屋敷片付けに対応する業者なら、片付け・清掃と害虫駆除・消毒をまとめて相談できます。見積もり時に害虫の発生状況を伝え、駆除・消毒を含む作業範囲と総額を確認しましょう。費用は物量・間取り・汚損の程度により異なります。汚損や臭気が重度の場合は<Link href="/tokusou-seisou/" className="text-primary underline underline-offset-2">特殊清掃</Link>の領域になるため、<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>のような対応業者が候補になります。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          片付け・清掃・駆除をまとめて頼める業者の比較は、こちらのページをご活用ください。
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
        本記事は一般的な手順の紹介です。殺虫剤・くん煙剤は必ず製品の使用方法・注意事項に従ってご使用ください。ゴミの分別・収集ルールは自治体により異なるため、お住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
