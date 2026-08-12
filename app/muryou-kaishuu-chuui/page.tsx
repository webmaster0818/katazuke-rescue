import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/muryou-kaishuu-chuui/";
const TITLE = "「無料回収」をうたう業者の注意点｜なぜ無料？トラブルを避ける確認ポイント";
const DESC =
  "「無料で回収します」という宣伝を見かけたとき、そのまま利用してよいのか不安になる方は多いはずです。この記事では、無料回収という宣伝で知られている一般的なトラブル事例、無料が成り立つ場合とそうでない場合の考え方、依頼前に確認すべきポイント、困ったときの相談先（消費者ホットライン188・自治体の窓口）までを解説します。特定の業者を評価するものではなく、一般的な注意点の解説です。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "家庭の廃棄物の回収は、原則として自治体の許可などが必要",
    body: "家庭から出る廃棄物（一般廃棄物）を業として収集・運搬するには、原則として市区町村の一般廃棄物収集運搬業の許可が必要とされています。買取として引き取る場合や自治体の委託を受けている場合など、形態によって扱いは異なりますが、「どのような立場で、回収した物をどう処理するのか」を説明できることが信頼できる事業者の前提になります。宣伝文句だけでは、この点は判断できません。",
  },
  {
    title: "「無料」が成り立つ場合と、そうでない場合がある",
    body: "リユース品や資源として価値のある物を買取・再販売する事業であれば、引き取りが無料や有償買取になることは自然にあり得ます。一方で、処分にコストがかかる物まで何でも無料で回収できるという説明は、事業として成り立ちにくいのが実情です。「なぜ無料なのか」を具体的に説明できるかどうかが、ひとつの見極めポイントになります。",
  },
  {
    title: "知られている一般的なトラブル事例",
    body: "無料回収という宣伝に関しては、「無料と聞いていたのにトラックへ積み込んだ後で作業費や運搬費を請求された」「回収された物が山中などに不法投棄され、排出者側も対応に追われた」「回収品から個人情報が流出した」といったトラブル事例が、消費生活相談の場などで一般的に知られています。すべての無料回収が問題というわけではありませんが、こうした事例があることを前提に、慎重に確認する姿勢が大切です。",
  },
];

const steps = [
  {
    title: "回収の仕組みと「無料の理由」を確認する",
    body: "依頼を検討する前に、その事業者がどのような立場で回収するのか（買取なのか、廃棄物としての収集なのか）、無料で引き取れる理由は何かを確認します。説明があいまいだったり、「何でも無料」と範囲を限定しない宣伝だったりする場合は、いったん立ち止まりましょう。",
  },
  {
    title: "会社情報を確認する",
    body: "事業者名・所在地・固定の連絡先が確認できるか、ウェブサイトや書面に会社概要が明記されているかを見ます。チラシや車体に社名や所在地の記載がなく、携帯電話番号しか分からないような場合は、トラブルが起きたときに連絡が取れなくなるおそれがあります。",
  },
  {
    title: "料金が発生する条件を書面などの記録に残す",
    body: "「無料なのはどの範囲か」「運搬費・作業費・出張費などが発生する条件はあるか」を事前に確認し、メールや書面など後から見返せる形で残します。口頭のやり取りだけだと、後から言った言わないの争いになりがちです。記録を嫌がる事業者には依頼しないのが安全です。",
  },
  {
    title: "その場で即決せず、他の処分方法と比較する",
    body: "巡回車を呼び止めたり、突然の訪問や電話勧誘を受けたりした場合でも、その場で品物を渡さず、一度時間を置いて検討しましょう。自治体の粗大ごみ収集、リサイクルショップへの売却、許可を確認できる回収業者への依頼など、比較できる選択肢は複数あります。比較の考え方は不用品の処分ルート比較の記事にまとめています。",
  },
  {
    title: "不安を感じたら消費者ホットライン188か自治体窓口に相談する",
    body: "契約や請求について「おかしい」と感じたら、一人で抱え込まず、消費者ホットライン188（いやや）に電話すると、身近な消費生活相談窓口を案内してもらえます。また、廃棄物の収集ルールや許可については、お住まいの自治体の廃棄物担当窓口で確認できます。実際に請求を受けて困っている場合も、支払う前に相談することをおすすめします。",
  },
];

const ngActions = [
  {
    title: "巡回トラックを呼び止めて、その場で品物を渡す",
    body: "拡声器などで巡回する回収車は、社名や許可の確認が難しいまま品物を渡すことになりがちです。積み込み後に料金を求められても、品物が相手の車上にある状態では冷静な交渉がしにくくなります。渡す前に確認する、が原則です。",
  },
  {
    title: "「無料」の文字だけを見て範囲や条件を確認しない",
    body: "無料の対象が一部の品目に限られていて、それ以外は有料という場合もあります。条件の確認を怠ると、想定外の請求につながります。どの品目が無料で、何に費用がかかるのかを、依頼前に具体的に確認しましょう。",
  },
  {
    title: "パソコンやスマホをデータ消去せずに引き渡す",
    body: "パソコン・スマートフォン・ハードディスクなどの機器には、個人情報や写真、各種アカウント情報が残っています。回収先での取り扱いを確認できないまま渡すと、情報流出のリスクがあります。引き渡す前に自分でデータを消去するか、消去方法が不安な場合はデータ消去の証明に対応する処分ルートを検討しましょう。",
  },
  {
    title: "納得できない請求をその場で支払ってしまう",
    body: "「聞いていた話と違う」と感じる請求を受けたときに、その場の雰囲気に押されて支払ってしまうと、後からの解決が難しくなる場合があります。まず内訳の説明を求め、納得できなければその場での支払いを保留し、消費者ホットライン188に相談してください。身の危険を感じるような状況であれば、無理に交渉せず警察相談も含めて安全を優先してください。",
  },
];

const judgeSigns = [
  "処分したい物が多く、正規の手順で一括して片付けたい",
  "料金・作業範囲を書面で確認したうえで依頼したい",
  "家の中からの搬出や分別も含めて任せたい",
  "買取できる物とできない物を仕分けながら整理したい",
  "自治体の収集では日程や品目が合わない",
];

const faqs = [
  {
    q: "無料回収はすべて悪質なのですか？",
    a: "いいえ。買取・リユースを事業とする事業者が、再販売できる品を無料で引き取ること自体は自然な仕組みです。問題になるのは、無料と説明しながら後から料金を請求するケースや、廃棄物の処理ルートを説明できないケースです。「無料の理由」と「会社情報」を確認できるかどうかで判断しましょう。",
  },
  {
    q: "すでに料金を請求されて困っています。どこに相談すればよいですか？",
    a: "消費者ホットライン188に電話すると、お住まいの地域の消費生活相談窓口につないでもらえます。契約の経緯やチラシ・領収書などの資料が残っていれば、相談時に用意しておくとスムーズです。廃棄物の収集ルールに関することは、自治体の廃棄物担当窓口でも確認できます。",
  },
  {
    q: "回収を頼んだ物が不法投棄されたら、頼んだ側も責任を問われますか？",
    a: "廃棄物の処理については排出者にも一定の責任があるという考え方があり、依頼した業者が不法投棄した場合に、排出者側が対応を求められる可能性が指摘されています。個別のケースの法的な扱いは状況により異なるため、心配な場合は自治体の廃棄物担当窓口や消費生活相談窓口に相談してください。だからこそ、依頼前に処理ルートを説明できる業者を選ぶことが大切です。",
  },
  {
    q: "安心して頼める回収業者はどう選べばよいですか？",
    a: "会社情報（所在地・固定連絡先）が明確であること、廃棄物の扱いについて説明できること、見積もりと追加料金の条件を書面などで残せることが基本の確認ポイントです。複数社の比較も有効です。詳しくは違法業者の見分け方の記事と、編集部が特徴を比較したランキングページを参考にしてください。",
  },
];

const related = [
  { href: "/guide/illegal-dumping/", label: "違法業者の見分け方", desc: "許可・会社情報の確認ポイント" },
  { href: "/jichitai-gyousha-tsukaiwake/", label: "自治体回収と業者回収の使い分け", desc: "どちらに頼むべきかの判断基準" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売却・譲渡も含めた処分先の選び方" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "自治体収集を使うときの一般的な手順" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "情報の残る機器の扱い方" },
  { href: "/ranking/", label: "片付け業者ランキング", desc: "編集部が特徴・口コミを比較" },
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
    { "@type": "ListItem", position: 2, name: "無料回収をうたう業者の注意点" },
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
    { href: "#kiso", label: "1｜「無料回収」を考える前に知っておきたい基本" },
    { href: "#steps", label: "2｜トラブルを避けるための確認5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#soudan", label: "4｜困ったときの相談先" },
    { href: "#gyousha", label: "5｜正規の業者に相談したほうがよいサイン" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "無料回収をうたう業者の注意点" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          「無料回収」をうたう業者の注意点｜なぜ無料？トラブルを避ける確認ポイント
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「無料で回収します」というチラシやアナウンス、インターネット広告を見かけたことはないでしょうか。処分にお金がかかると思っていた物を無料で引き取ってもらえるなら魅力的に感じますが、一方で「本当に無料なの？」という不安もつきまといます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、特定の事業者の良し悪しを論じるのではなく、無料回収という宣伝をめぐって一般的に知られている注意点と、依頼前に確認すべきポイント、困ったときの相談先を整理します。落ち着いて確認すれば避けられるトラブルがほとんどです。順番に見ていきましょう。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>家庭の廃棄物の回収は原則として自治体の許可などが必要。宣伝文句だけでは判断できない</li>
          <li>「なぜ無料なのか」を説明できるか、会社情報を確認できるかが見極めの基本</li>
          <li>その場で品物を渡さない・条件を記録に残す、の2点で多くのトラブルは避けられる</li>
          <li>困ったときは消費者ホットライン188と自治体の廃棄物担当窓口に相談できる</li>
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

      <H2 id="kiso" num="1">「無料回収」を考える前に知っておきたい基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、不用品の回収という事業の仕組みと、無料という言葉の背景を整理します。仕組みが分かると、確認すべきポイントが自然に見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">トラブルを避けるための確認5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        無料回収に限らず、不用品の引き取りを頼むときに共通して使える確認手順です。「渡す前に確認、条件は記録に、困ったら188」と覚えてください。
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

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="soudan" num="4">困ったときの相談先</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        無料回収をめぐって不安なことや、実際に請求などのトラブルが起きたときは、次の窓口に相談できます。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-bold text-text-primary mb-2">消費者ホットライン188</h3>
          <p className="text-[15px] leading-8 text-text-secondary">
            局番なしの「188（いやや）」に電話すると、お住まいの地域の消費生活相談窓口を案内してもらえます。契約や請求のトラブル、勧誘への対応に迷ったときの入り口として利用できます。チラシ・見積もり・領収書など、経緯が分かる資料を手元に用意して相談するとスムーズです。
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-bold text-text-primary mb-2">自治体の廃棄物担当窓口</h3>
          <p className="text-[15px] leading-8 text-text-secondary">
            廃棄物の収集ルールや、家庭ごみの収集運搬に関する許可の考え方については、お住まいの市区町村の廃棄物担当部署（環境課・清掃事務所など、名称は自治体により異なります）で確認できます。正規の処分方法が分からない品物についても、まず自治体に確認するのが確実です。
          </p>
        </div>
      </div>

      <H2 id="gyousha" num="5">正規の業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のような状況なら、宣伝の言葉に頼らず、会社情報と条件を確認できる回収業者・片付け業者に正面から相談するほうが、結果的に安心で早いことが多いです。
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
        地域別の依頼先は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸</Link>・<Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台</Link>など各エリアページで紹介しています。
      </p>

      <H2 id="faq" num="6">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="7">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたもので、特定の事業者を評価・批判するものではなく、法律に関する個別の助言を行うものでもありません。個別のトラブルについては消費者ホットライン188から案内される消費生活相談窓口に、廃棄物のルールについてはお住まいの自治体の担当窓口にご相談ください。
      </p>
    </article>
  );
}
