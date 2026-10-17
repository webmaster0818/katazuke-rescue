import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/gomiyashiki-jourei/";
const TITLE = "ゴミ屋敷に関する自治体の条例と支援の仕組み｜本人・家族が相談するときの流れ";
const DESC =
  "いわゆるゴミ屋敷について、足立区・横浜市・京都市・大阪市・神戸市が定めている条例の名称と時期、福祉的な支援から指導・勧告・命令・代執行までの流れ、片付け費用の扱い、相談窓口を、各自治体の公式情報をもとに整理します。本人や家族が自治体に相談するときの進め方と、業者に依頼する場合の考え方も解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "いくつかの自治体は、ゴミ屋敷の解消を目的とした条例を設けている",
    body: "物が屋内外に積まれて悪臭や害虫、火災の危険が生じ、本人や近隣の生活環境が損なわれている状態について、独自の条例で対応の仕組みを定めている自治体があります。大阪市は平成25年12月、京都市は平成26年11月に条例を制定し、横浜市は平成28年12月1日から条例を施行しています。条例の名称には「ごみ屋敷」という言葉は使われず、「不良な生活環境」「物品等の堆積」といった表現が使われるのが一般的です。条例がない自治体でも、清掃や福祉の窓口で相談を受け付けている場合があります。",
  },
  {
    title: "条例の多くは、取り締まりより先に本人への支援を置いている",
    body: "条例というと罰則や強制的な撤去を思い浮かべるかもしれませんが、公式情報を見ると、多くの自治体は本人への働きかけと支援を先に置いています。横浜市は、物を積んだ本人が自ら解消することを基本としつつ、加齢や病気、経済的な困窮、孤立などの事情に配慮した福祉的な視点からの支援を行うとしています。大阪市も、行政の強制的な権限をすぐに使うのではなく、福祉的な支援が必要な場合は区役所や関係機関が連携して支援すると説明しています。",
  },
  {
    title: "改善されない場合に備え、指導から代執行までの手続きも定められている",
    body: "一方で、支援や働きかけを重ねても改善されず、近隣への影響が続く場合に備えて、段階的な手続きを定めている自治体もあります。足立区は、調査・指導・勧告を行い、改善に応じない場合は命令と公表を行うことができ、正当な理由なく命令に従わない場合は代執行を行うことができるとしています。神戸市も、助言・指導・勧告・命令などを行い、命令に従わない場合は代執行を行うとし、その費用は居住者の負担としています。",
  },
];

const ordinances = [
  { city: "足立区", name: "足立区生活環境の保全に関する条例", when: "（公式ページに施行時期の記載なし）", point: "調査・指導・勧告→命令・公表→代執行。本人が改善に同意し費用負担が困難で、審議会が必要と認める場合、区が上限100万円で片付け等を行う支援と、協力団体への謝礼金（上限5万円）を定める", desk: "環境部生活環境保全課" },
  { city: "横浜市", name: "横浜市建築物等における不良な生活環境の解消及び発生の防止を図るための支援及び措置に関する条例", when: "平成28年12月1日施行", point: "本人による解消が基本。福祉的な視点からの支援を優先し、改善されない場合は指導・勧告・命令・代執行", desk: "各区の福祉保健課" },
  { city: "京都市", name: "京都市不良な生活環境を解消するための支援及び措置に関する条例", when: "平成26年11月制定", point: "本人による改善が原則。困難な場合は医療・介護・経済的支援など人に寄り添った支援。費用は原則として本人負担", desk: "各区役所・支所の地域力推進室" },
  { city: "大阪市", name: "大阪市住居における物品等の堆積による不良な状態の適正化に関する条例", when: "平成25年12月制定", point: "強制的な権限をすぐに使わず、福祉的な支援が必要な場合は区役所と関係機関が連携。撤去後も再発防止の見守りを続ける", desk: "お住まいの区の区役所" },
  { city: "神戸市", name: "神戸市住居等における廃棄物その他の物の堆積による地域の不良な生活環境の改善に関する条例", when: "（公式ページに施行時期の記載なし）", point: "居住者への働きかけと、介護サービスの導入などの福祉・医療的支援を検討・実施。改善されない場合は助言・指導・勧告・命令、代執行の費用は居住者負担", desk: "各区の地域協働課" },
];

const merits = [
  {
    title: "本人や家族の側から相談してよい窓口である",
    body: "ゴミ屋敷の相談というと、近隣の住民が苦情を伝える場面を想像しがちですが、各自治体の窓口は、本人や家族からの相談も受け付けています。京都市は、各区役所・支所の地域力推進室で個別の相談に応じるとしており、横浜市は個別の案件の相談先として各区の福祉保健課を案内しています。「片付けたいのに一人ではどうにもならない」「親の家が手に負えない状態になっている」という段階で相談すれば、命令や代執行に進む前に、支援の選択肢を一緒に考えてもらえる可能性があります。",
  },
  {
    title: "片付けの費用は、原則として本人の負担になる",
    body: "条例があっても、片付けの費用を自治体がすべて負担してくれるわけではありません。京都市は費用を原則として本人の負担としており、神戸市は代執行に要する費用を居住者の負担としています。足立区のように、本人が改善に同意し、費用の負担が困難で、審議会が必要と認める場合に、上限を定めて区が片付けなどを行う支援を設けている例もありますが、対象になるかは個別の判断です。費用の見通しは、相談の際に担当窓口へ確認してください。",
  },
  {
    title: "片付けの後も、再発を防ぐための支援が組み込まれている",
    body: "物を撤去しただけでは、生活上の課題が残っていれば同じ状態に戻ってしまうことがあります。大阪市は撤去後も再発防止のための見守りを続けるとしており、神戸市や京都市も介護・医療・経済的な支援など、生活上の課題の解決を支援の中心に置いています。家族が片付けを業者に依頼する場合でも、自治体や地域包括支援センターなどの支援とつながっておくと、片付けた後の暮らしを支える手立てが増えます。",
  },
];

const steps = [
  {
    title: "お住まいの自治体に条例や相談窓口があるかを調べる",
    body: "まず、本人が住んでいる自治体の公式サイトで「ごみ屋敷」「不良な生活環境」「堆積」などの言葉を検索し、条例や相談窓口の案内があるかを確認します。条例がある自治体では、担当の部署名が案内されていることが多く、清掃の部署ではなく福祉の部署が窓口になっている場合もあります。条例が見当たらない場合でも、清掃事務所や福祉の窓口、高齢の方であれば地域包括支援センターに相談できます。",
  },
  {
    title: "家の状態と、困っていることを整理して伝える",
    body: "相談の前に、どの部屋がどのような状態か、悪臭や害虫、通路がふさがっているなどの困りごとは何か、本人の年齢・健康状態・生活の状況、家族が関われる範囲を書き出しておきます。写真を撮れる場合は記録しておくと説明しやすくなりますが、本人の同意を得ずに室内を撮影したり公開したりすることは避けてください。本人を責める言い方ではなく、「安全に暮らせるようにしたい」という目的を中心に伝えると、相談が進めやすくなります。",
  },
  {
    title: "本人の気持ちと意向を確かめながら、支援の内容を話し合う",
    body: "条例の多くは、本人が自ら解消することを基本にしており、支援も本人の同意を前提にしているものが少なくありません。家族が先に話を進めすぎると、本人が心を閉ざしてしまうことがあります。物を捨てられない背景には、病気や体力の低下、孤立、気持ちの問題が隠れていることもあります。本人と話すときの考え方は、片付けられない心理と原因の記事や、物を捨てない親への片付けの声かけの記事を参考にしてください。",
  },
  {
    title: "片付けの方法と費用の分担を決める",
    body: "自治体の支援、家族による片付け、業者への依頼のどれを、どのように組み合わせるかを決めます。自治体の支援の対象にならない場合や、量が多く家族だけでは難しい場合は、片付け業者への依頼を検討します。費用は原則として本人の負担になることが多いため、誰がどのように負担するかを家族で話し合っておいてください。業者に依頼する場合は、作業前の見積もりで総額と作業範囲を確定させることが大切です。",
  },
  {
    title: "片付けた後の暮らしを支える手立てを整える",
    body: "片付けが終わった後も、ごみ出しが難しい、物の管理が続けられないなどの課題が残る場合は、自治体の福祉の窓口や地域包括支援センター、介護サービスなどとつながっておきます。ごみ出しに困ったときの相談先は、ごみ出しのルールが守れないときの相談先の記事で解説しています。定期的に家族が様子を見に行く、片付けの範囲を小さく決めて習慣にするなど、無理のない仕組みを一緒に考えてください。",
  },
];

const ngActions = [
  {
    title: "本人に無断で家に入り、物をまとめて処分する",
    body: "家族であっても、本人の同意なく家に入って物を捨てると、深い不信感を生み、その後の支援を受け入れてもらえなくなることがあります。本人の財産を勝手に処分することは、法的なトラブルにつながるおそれもあります。自治体の条例も、本人による解消と本人の同意を基本にしています。急ぐ事情がある場合でも、まず自治体の窓口や専門家に相談し、本人との関係を保ちながら進める方法を選んでください。",
  },
  {
    title: "条例があるから自治体が片付けてくれると考えて待つ",
    body: "条例は、本人への支援と、改善されない場合の手続きを定めたもので、自治体が無償ですぐに片付けを行う仕組みではありません。京都市は費用を原則として本人の負担とし、神戸市は代執行の費用を居住者の負担としています。足立区の支援のように上限や要件が定められている例もあります。状態が悪化する前に相談し、家族や業者による片付けも含めて、現実的な進め方を早めに決めることが大切です。",
  },
  {
    title: "近所に事情を広めたり、本人を責めたりする",
    body: "近隣の目が気になるあまり本人を強く責めたり、事情を周囲に話したりすると、本人が孤立を深め、片付けからさらに遠ざかることがあります。自治体の条例も、加齢や病気、孤立などの背景に配慮した支援を基本方針に掲げています。近隣から苦情を受けている場合は、家族が一人で対応しようとせず、自治体の窓口を通して状況を共有するほうが、関係を悪化させずに済みます。近隣の立場からの相談先は、近所のゴミ屋敷の相談先の記事で解説しています。",
  },
  {
    title: "許可を確認できない回収業者に、家の物をまとめて引き渡す",
    body: "量が多いからと、巡回している回収車やチラシの業者にまとめて引き渡すと、高額な請求を受けたり、回収された物が適正に処理されなかったりするおそれがあります。家庭から出る廃棄物を回収するには、市区町村の許可などが必要です。業者を選ぶときは、許可の有無と見積もりの内訳を確認してください。確認の方法は、片付け業者の許可・資格の確認方法の記事で解説しています。",
  },
];

const judgeSigns = [
  "物の量が多く、家族だけでは何日かけても片付けきれない",
  "悪臭や害虫が発生していて、家族が作業を続けるのが難しい",
  "自治体の支援の対象にならない、または支援だけでは足りない",
  "退去や売却、施設への入居などの期限があり、計画的に進める必要がある",
  "本人の同意を得たうえで、短期間に集中して片付けたい",
];

const faqs = [
  {
    q: "ゴミ屋敷の条例は、どの自治体にもありますか？",
    a: "すべての自治体にあるわけではありません。本記事で確認した範囲では、足立区・横浜市・京都市・大阪市・神戸市が条例を設けています。条例の名称は「不良な生活環境」「物品等の堆積」などの表現が使われることが多いため、お住まいの自治体の公式サイトでこれらの言葉を検索してください。条例がない自治体でも、清掃や福祉の窓口で相談を受け付けている場合があります。",
  },
  {
    q: "家族が自治体に相談すると、すぐに強制的な撤去になりますか？",
    a: "公式情報を見る限り、多くの自治体は本人への働きかけと福祉的な支援を先に置いています。大阪市は行政の強制的な権限をすぐに使うのではなく、支援が必要な場合は関係機関が連携して支援するとしています。命令や代執行は、支援や指導を重ねても改善されない場合の手続きとして定められています。具体的な対応は、お住まいの自治体の担当窓口に確認してください。",
  },
  {
    q: "片付けの費用を自治体が出してくれることはありますか？",
    a: "原則として本人の負担になる自治体が多くあります。京都市は費用を原則として本人の負担とし、神戸市は代執行の費用を居住者の負担としています。足立区は、本人が改善に同意し、費用の負担が困難で、審議会が必要と認める場合に、上限100万円で区が片付けなどを行う支援を定めています。対象になるかどうかは個別に判断されるため、担当窓口に相談してください。",
  },
  {
    q: "自治体に相談する前に、業者に片付けを頼んでもよいですか？",
    a: "本人が同意していれば、業者に依頼すること自体に問題はありません。ただし、片付けの背景に病気や生活上の課題がある場合は、片付けた後に同じ状態に戻ることがあります。業者への依頼と並行して、自治体の福祉の窓口や地域包括支援センターに相談しておくと、再発を防ぐ支援につながります。業者を選ぶ際は、許可の有無と見積もりの内訳を確認してください。",
  },
];

const sources = [
  { label: "足立区のごみ屋敷対策事業", org: "足立区", url: "https://www.city.adachi.tokyo.jp/kankyo-hozen/241024.html" },
  { label: "不良な生活環境の解消・発生防止", org: "横浜市", url: "https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/fukushi-kaigo/chiikifukushi/yashiki/g-project.html" },
  { label: "不良な生活環境（ごみ屋敷）の解消のために", org: "京都市", url: "https://www.city.kyoto.lg.jp/hokenfukushi/page/0000278733.html" },
  { label: "いわゆる「ごみ屋敷」対策について", org: "大阪市", url: "https://www.city.osaka.lg.jp/fukushi/page/0000511345.html" },
  { label: "ごみ屋敷にお困りの方へ", org: "神戸市", url: "https://www.city.kobe.lg.jp/a84526/kurashi/recycle/gomi/shisaku/gomiyashiki-taisaku.html" },
];

const related = [
  { href: "/kinjo-gomiyashiki-soudan/", label: "近所のゴミ屋敷の相談先", desc: "近隣の立場からの窓口の選び方" },
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷になる原因と進行段階", desc: "片付けを再開するきっかけの作り方" },
  { href: "/gomiyashiki-houchi-risk/", label: "ゴミ屋敷を放置した場合のリスク", desc: "火災・健康・住環境への影響" },
  { href: "/gomidashi-rule-soudan/", label: "ごみ出しのルールが守れないときの相談先", desc: "溜め込む前にできること" },
  { href: "/oya-settoku-katazuke/", label: "物を捨てない親への片付けの声かけ", desc: "説得ではなく対話で進める方法" },
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷片付けサービス", desc: "業者に依頼する場合の流れ" },
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
    { "@type": "ListItem", position: 2, name: "ゴミ屋敷に関する自治体の条例と支援" },
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
    { href: "#kiso", label: "1｜ゴミ屋敷に関する条例の基本" },
    { href: "#hikaku", label: "2｜自治体ごとの条例と相談窓口" },
    { href: "#merit", label: "3｜本人・家族が知っておくべき3つの点" },
    { href: "#steps", label: "4｜本人・家族が相談して進める5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への依頼を検討すべき状況" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公的情報" },
    { href: "#related", label: "9｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "ゴミ屋敷に関する自治体の条例と支援" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ゴミ屋敷に関する自治体の条例と支援の仕組み｜本人・家族が相談するときの流れ
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          物があふれて自分では片付けられなくなった、離れて暮らす親の家がいわゆるゴミ屋敷の状態になっている、といった状況で、自治体に相談してよいのか、相談すると強制的に撤去されてしまうのではないかと迷う方は少なくありません。いくつかの自治体は、こうした状態の解消を目的とした条例を設け、本人への支援から段階的な手続きまでを定めています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、足立区・横浜市・京都市・大阪市・神戸市の公式情報をもとに、条例の名称と時期、支援と指導・勧告・命令・代執行の流れ、片付け費用の扱い、相談窓口を整理し、本人や家族が相談するときの進め方を解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>大阪市（平成25年12月制定）・京都市（平成26年11月制定）・横浜市（平成28年12月施行）などが、ゴミ屋敷の解消を目的とした条例を設けている</li>
          <li>多くの条例は本人への福祉的な支援を先に置き、改善されない場合に指導・勧告・命令・代執行の手続きを定めている</li>
          <li>片付けの費用は原則として本人の負担。足立区のように要件と上限を定めた支援を設けている例もある</li>
          <li>本人や家族からの相談も受け付けており、状態が悪化する前に窓口へ相談するのが近道</li>
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

      <H2 id="kiso" num="1">ゴミ屋敷に関する条例の基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        個別の自治体の内容を見る前に、条例がどのような考え方で作られているのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="hikaku" num="2">自治体ごとの条例と相談窓口</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        各自治体の公式サイトで2026年10月17日に確認した内容です。制度の内容や窓口は変更されることがあるため、相談の前に各自治体の最新の案内をご確認ください。
      </p>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">自治体</th>
              <th className="px-3 py-2.5 text-left">条例の名称・時期</th>
              <th className="px-3 py-2.5 text-left">支援と手続きの特徴</th>
              <th className="px-3 py-2.5 text-left whitespace-nowrap">相談窓口</th>
            </tr>
          </thead>
          <tbody>
            {ordinances.map((r, i) => (
              <tr key={r.city} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold whitespace-nowrap border-t border-border align-top">{r.city}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.name}<br /><span className="text-text-muted">{r.when}</span></td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.point}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{r.desk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典は各自治体の公式ページ（本記事の「出典・参考にした公的情報」に掲載）。電話番号は各自治体の公式ページでご確認ください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        各地域の片付け業者は、<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜</Link>・<Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都</Link>・<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪</Link>・<Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸</Link>の各エリアページで紹介しています。
      </p>

      <H2 id="merit" num="3">本人・家族が知っておくべき3つの点</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        自治体に相談するかどうかを決める前に、相談の対象、費用、片付けた後の支援について、次の3点を確認してください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="steps" num="4">本人・家族が相談して進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、窓口を調べる→状況を整理する→本人の意向を確かめる→片付けの方法と費用を決める→片付けた後の支えを整える、の5ステップです。
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
        本人の気持ちへの向き合い方は<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理と原因</Link>、親への声かけは<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">物を捨てない親への片付けの声かけ</Link>、離れて暮らす親の住まいは<Link href="/tanshin-koureisha-mimamori/" className="text-primary underline underline-offset-2">離れて暮らす高齢の親の見守りと片付け</Link>、ごみ出しの相談先は<Link href="/gomidashi-rule-soudan/" className="text-primary underline underline-offset-2">ごみ出しのルールが守れないときの相談先</Link>を参考にしてください。
      </p>

      <H2 id="ng" num="5">避けるべき4つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自治体の支援は本人の生活上の課題に寄り添うものですが、物の量によっては、搬出と処分を専門の業者に任せるほうが現実的な場合があります。本人の同意を得たうえで、次のような状況では片付け業者への依頼を検討してください。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比較すると判断しやすくなります。ゴミ屋敷の片付けに対応する業者は<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や、一括で見積もりを比べられる<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>・<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>などで探せます。依頼の流れは<Link href="/service/gomiyashiki/" className="text-primary underline underline-offset-2">ゴミ屋敷片付けサービス</Link>のページで解説しています。
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

      <H2 id="faq" num="7">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="shutten" num="8">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・2026年10月17日確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="9">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。条例の有無・内容、支援の要件、費用の扱い、相談窓口は自治体により異なり、変更されることがあるため、必ずお住まいの自治体の最新の案内をご確認ください。本人の財産の処分や法的な判断が関わる場合は、弁護士などの専門家にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
