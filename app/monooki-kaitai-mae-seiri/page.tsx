import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/monooki-kaitai-mae-seiri/";
const TITLE = "物置・倉庫の解体前整理の進め方｜中身の片付けと処分の段取り";
const DESC =
  "庭の物置や倉庫を解体・撤去する前には、中身をすべて出して整理しておく必要があります。長年開けていない物置には、劣化した工具や園芸用品、スプレー缶・燃料・薬剤など扱いに注意が必要な物が眠っていることも少なくありません。この記事では、解体前に中身を整理する理由、安全に進める5ステップ、注意が必要な品物の考え方、業者に頼る判断基準までを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "解体は「中身が空」になってから。中身入りのままでは頼めないのが基本",
    body: "物置や倉庫の解体・撤去を業者に依頼する場合、中身が入ったままでは作業できないのが基本です。中身の撤去まで請け負う業者もありますが、その場合は中身の量に応じて費用や日程が変わります。いずれにしても、「中に何がどれだけ入っているか」を把握しておかないと、見積もりも段取りも進みません。解体を思い立ったら、最初にやるべきは中身の棚卸しです。",
  },
  {
    title: "長年閉め切った物置ならではのリスクがある",
    body: "何年も開けていない物置には、独特の注意点があります。ハチやムカデなどの虫、ネズミが住みついていることがあるほか、湿気でカビが発生していたり、上に載せた物が崩れやすくなっていたりします。作業のときは長袖・軍手・マスクを着用し、扉を開けたらすぐ手を入れず、まず換気をして中の様子を確認しましょう。虫の気配が強い場合の対処は害虫が発生した場所の清掃の記事も参考になります。",
  },
  {
    title: "「処分に注意が必要な物」が集まりやすい場所と心得る",
    body: "物置には、スプレー缶、塗料、灯油などの燃料、農薬・除草剤・殺虫剤、乾電池やバッテリー、ガスボンベ式の器具など、通常のごみと同じようには捨てられない物が集まりがちです。これらの処分方法は自治体によって扱いが異なり、出し方を誤ると収集時の火災などの事故につながるおそれがあります。この種の品物が出てきたら、自己判断せず、お住まいの自治体の分別案内や窓口で処分方法を確認するのが原則です。",
  },
];

const steps = [
  {
    title: "解体までのスケジュールを決め、逆算する",
    body: "解体の希望時期が決まっているなら、そこから逆算して整理の予定を立てます。中身の整理は想像より時間がかかるうえ、粗大ごみの収集は申し込みから日数がかかる場合があります。目安として、物置1つでも「仕分けに1〜2日、処分の手配に数週間」を見込んで、余裕のある計画にしましょう。",
  },
  {
    title: "安全対策をして中身をすべて出す",
    body: "長袖・長ズボン・軍手・マスクを着用し、扉を開けて換気してから作業を始めます。中身を庭先などに全部出し、「使う物」「手放す物」「処分に注意が必要な物」の3つに分けます。重い物や高い位置の物は無理をせず、2人以上で作業するのが安全です。刃物や工具は、けが防止のためまとめて箱に入れておきます。",
  },
  {
    title: "注意が必要な物を分けて、自治体の案内を確認する",
    body: "スプレー缶・塗料・燃料・農薬・電池・バッテリーなどが出てきたら、他の物と混ぜずに別置きします。これらの処分方法は自治体により異なり、品物によっては自治体では収集せず販売店や専門ルートを案内される場合もあります。必ずお住まいの自治体の分別案内や廃棄物担当窓口で確認し、案内された方法に従ってください。中身の残ったスプレー缶の穴あけの要否なども、自治体の指示に従うのが安全です。",
  },
  {
    title: "残りの物を処分ルートに振り分ける",
    body: "工具や園芸用品など状態のよい物は、リサイクルショップやフリマアプリでの売却、知人への譲渡も選択肢になります。それ以外は、自治体の分別ルールに沿って普通ごみ・資源・粗大ごみに振り分けます。量が多い場合や運搬手段がない場合は、許可を確認できる不用品回収業者にまとめて依頼する方法もあります。振り分けの考え方は不用品の処分ルート比較の記事で解説しています。",
  },
  {
    title: "空になったことを確認し、解体・撤去の手配へ進む",
    body: "中身がすべて出たら、床や棚に残った物がないか最終確認し、解体・撤去の見積もりへ進みます。物置本体の解体・処分の方法は、大きさ・構造・設置状況によって異なり、小型の物置でも自力での解体には工具とけがのリスクが伴います。無理をせず、解体まで業者に任せるか、自治体に処分方法を確認したうえで進めましょう。アスベストを含む可能性のある古い建材が使われている場合は、自己判断で壊さず専門業者に相談してください。",
  },
];

const ngActions = [
  {
    title: "中身が入ったまま解体だけ先に頼もうとする",
    body: "中身の扱いが決まっていないと、解体業者は見積もりも作業もできません。中身の撤去込みで頼むのか、自分で空にしてから頼むのかを先に決めましょう。込みで頼む場合も、貴重品や思い出の品が混ざったまま「全部処分」にしてしまうと取り返しがつきません。仕分けだけは自分で済ませておくのが安全です。",
  },
  {
    title: "燃料・薬剤・スプレー缶を普通ごみに混ぜて出す",
    body: "灯油やガソリンなどの燃料、農薬・塗料、中身の残ったスプレー缶やガス缶を普通ごみに混ぜると、収集車や処理施設での火災・事故につながるおそれがあります。処分方法は品物と自治体によって異なるため、必ず自治体の案内を確認し、案内された方法で処分してください。",
  },
  {
    title: "重い物・高所の物を一人で無理に動かす",
    body: "物置の整理では、タイヤ・コンクリートブロック・工具箱・古い家電など重量物を扱う場面が多くあります。一人で無理をすると、腰を痛めたり、崩れてきた物でけがをしたりするリスクがあります。重い物は2人以上で、高い位置の物は安定した踏み台を使って作業しましょう。",
  },
  {
    title: "出した不用品を敷地の隅にまとめて放置する",
    body: "「とりあえず外に出しただけ」の状態が長引くと、雨ざらしで劣化して処分しにくくなり、虫の発生源や近隣の見た目の問題にもつながります。中身を出す作業と処分の手配はセットで計画し、出した物は決めた期限までに処分し切りましょう。",
  },
];

const judgeSigns = [
  "物置の中身が多く、仕分け・搬出を自力でやり切れない",
  "重量物や大型の農機具・工具など、自分では動かせない物がある",
  "スプレー缶・薬剤・燃料などが大量に出てきて、処分の段取りに不安がある",
  "解体・撤去とあわせて中身の処分まで一括で任せたい",
  "実家や空き家の物置で、現地での作業時間を確保できない",
];

const faqs = [
  {
    q: "物置の解体は自分でできますか？",
    a: "小型のスチール物置などを自分で解体する人もいますが、工具の扱いに慣れていないと、切り口や倒れてくるパネルでけがをするリスクがあります。また、解体後の建材の処分方法は自治体により異なります。大きさや構造によっては業者に任せるほうが安全で、結果的に手間も少なくなります。古い建物に付随する物置などでアスベストを含む建材が心配な場合は、自己判断で壊さず専門業者に相談してください。",
  },
  {
    q: "スプレー缶や灯油はどう処分すればよいですか？",
    a: "スプレー缶・カセットボンベ・灯油などの燃料、農薬・塗料といった品物は、処分方法が自治体によって異なり、品物によっては自治体の収集では扱わず、販売店や専門の処理ルートを案内される場合もあります。本記事で一律の手順をお伝えすることはできないため、必ずお住まいの自治体の分別案内や廃棄物担当窓口で確認してください。中身を使い切れない場合の扱いも、あわせて確認するのが安全です。",
  },
  {
    q: "物置の中の物ごと回収を頼むことはできますか？",
    a: "多くの不用品回収業者・片付け業者は、物置や倉庫の中身の仕分け・搬出・回収に対応しています。物置本体の解体・撤去まで対応する業者もあります。費用は物量や品目、作業条件により異なるため、見積もり時に「中身の量」「注意が必要な品物の有無」「本体の解体の要否」を伝えて確認しましょう。業者選びはランキングページを参考にしてください。",
  },
  {
    q: "空き家の物置も同じ手順で片付けられますか？",
    a: "基本の手順は同じですが、空き家の場合は現地に通える回数が限られることが多いため、1回の訪問でどこまで進めるかの計画がより重要になります。また、所有者や相続に関わる物が出てくる可能性があるため、書類や貴重品の確認は特に丁寧に行いましょう。空き家全体の片付けは空き家の片付けの進め方の記事で詳しく解説しています。",
  },
];

const related = [
  { href: "/akiya-katazuke/", label: "空き家の片付けの進め方", desc: "空き家の残置物整理と管理の段取り" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分の選択肢" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売却・譲渡・処分の使い分け" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した場所の清掃", desc: "虫が住みついた場所を安全に片付ける" },
  { href: "/guide/illegal-dumping/", label: "違法業者の見分け方", desc: "回収業者に頼む前の確認ポイント" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "実家の物置整理にも役立つ段取り" },
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
    { "@type": "ListItem", position: 2, name: "物置・倉庫の解体前整理" },
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
    { href: "#kiso", label: "1｜解体前整理の前に知っておきたい3つのこと" },
    { href: "#steps", label: "2｜物置・倉庫の解体前整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "物置・倉庫の解体前整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          物置・倉庫の解体前整理の進め方｜中身の片付けと処分の段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「古い物置を撤去したいが、中身がぎっしりで手が付けられない」「実家の倉庫を片付けたいけれど、何が入っているかも分からない」——物置・倉庫の解体は、本体の撤去より「中身の整理」のほうがはるかに大変です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、解体前に中身を整理しておくべき理由と、安全に進めるための手順を解説します。物置特有の、スプレー缶・燃料・薬剤といった扱いに注意が必要な品物の考え方も整理しました。庭の小型物置から実家の大きな倉庫まで、共通して使える内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>解体・撤去は中身が空になってから。最初にやるべきは中身の棚卸し</li>
          <li>スプレー缶・燃料・薬剤・電池などは他の物と混ぜず、処分方法を必ず自治体に確認する</li>
          <li>長年閉め切った物置は虫・カビ・崩れに注意。装備を整え、無理せず2人以上で作業する</li>
          <li>量が多い・重量物がある・時間がない場合は、仕分けから撤去まで業者に任せる選択肢もある</li>
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

      <H2 id="kiso" num="1">解体前整理の前に知っておきたい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、物置・倉庫の整理が室内の片付けと違う点を押さえましょう。段取りと安全対策の重要度が、室内よりも一段高い場所です。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">物置・倉庫の解体前整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。「逆算計画→全出し→注意品の分離→振り分け→空の確認」の順に進めます。
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
        粗大ごみの申し込みの一般的な流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>で、自治体と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体回収と業者回収の使い分け</Link>で解説しています。分別区分・処分方法は自治体により異なるため、必ずお住まいの市区町村の案内を確認してください。
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

      <H2 id="gyousha" num="4">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力にこだわらず、片付け業者・不用品回収業者への相談を検討しましょう。物置の整理は屋外の重労働であり、無理はけがのもとです。
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
        地域別の依頼先は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌</Link>・<Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台</Link>など各エリアページで紹介しています。
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
        本記事は一般的な知識の提供を目的としたものです。スプレー缶・燃料・薬剤・電池などの処分方法、ごみの分別区分・粗大ごみの出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。解体作業には危険が伴うため、無理をせず専門業者への相談もご検討ください。
      </p>
    </article>
  );
}
