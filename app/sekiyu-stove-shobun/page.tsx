import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sekiyu-stove-shobun/";
const TITLE = "石油ストーブ・石油ファンヒーターの処分方法｜灯油と電池を抜いて粗大ごみへ、残った灯油の相談先";
const DESC =
  "石油ストーブ・石油ファンヒーターを処分するときは、タンクの灯油と乾電池を抜いてから自治体の粗大ごみに出すのが基本です。灯油は家庭ごみや側溝に捨てず販売店・ガソリンスタンドに相談すること、FF式の扱い、買い替えの目安を、自治体・メーカー・国民生活センターの公式情報をもとに解説します。";
const PUBLISHED = "2026-10-23";
const CHECKED = "2026年10月23日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "石油ストーブは家電リサイクル法の対象ではなく、自治体の粗大ごみとして扱われます",
    body: "家電リサイクル法の施行令で定められた対象は、エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の4品目です。石油ストーブや石油ファンヒーターはこれに含まれないため、家電リサイクル券は使いません。秋田市は、石油ストーブを「金属類」で出すと収集車や処理施設で火災が起きるおそれがあるため、大きさにかかわらず粗大ごみとして扱うと案内しています。仙台市のごみの分け方事典も、ストーブとファンヒーターを粗大ごみの品目に挙げています。",
  },
  {
    title: "出す前に、タンクの灯油と乾電池を抜くことが求められています",
    body: "秋田市は石油ストーブについて「灯油や電池は抜いて出してください」と案内しており、横浜市の粗大ごみ受付の品目一覧も「ストーブ類」に「石油は抜いて搬出」と注記しています。メーカーのコロナも取扱説明書で、廃棄するときはタンクの灯油を抜き取るよう求め、灯油が入ったまま廃棄するとリサイクルの際に思わぬ事故になるおそれがあると説明しています。",
  },
  {
    title: "残った灯油は、自治体のごみとしては収集されません",
    body: "仙台市は、灯油や廃油を市では収集しておらず、不要になった灯油の処分は処理業者に委託するか販売店などに相談するよう案内しています。同市の「市で収集しないものの相談先」でも、廃油（灯油）の相談先は販売店・ガソリンスタンドです。同じ系列のガソリンスタンドでも店舗によって処分できない場合があるため、事前に相談するよう呼びかけています。",
  },
];

const steps = [
  {
    title: "取扱説明書で、灯油の抜き方と自分の機種の種類を確認する",
    body: "持ち運びできる石油ストーブ・石油ファンヒーターか、給排気筒と油タンクを据え付けて使うFF式かで手順が変わります。取扱説明書が見当たらない場合は、本体の銘板に記載された型番をもとに、メーカーの公式サイトで取扱説明書を探せることがあります。",
  },
  {
    title: "火を消して十分に冷めてから、タンクの灯油を抜き取る",
    body: "給油タンクと本体側のタンクに残った灯油を、取扱説明書の手順に従って抜き取ります。コロナの取扱説明書は、廃棄処分するときはタンクの灯油を抜き取るよう求めています。抜き取った灯油は灯油用のポリタンクに移し、こぼした灯油はふき取ってください。",
  },
  {
    title: "乾電池を外し、電池は自治体の区分で別に出す",
    body: "点火用や表示用の乾電池が入っている機種は、本体から外します。外した乾電池の出し方は自治体によって異なり、杉並区は乾電池を不燃ごみとして、電極にビニールテープを貼って絶縁してから出すよう案内しています。",
  },
  {
    title: "自治体の粗大ごみに申し込み、案内に従って出す",
    body: "お住まいの自治体の粗大ごみ受付で品目を「ストーブ」「ファンヒーター」などとして申し込み、案内された手数料の処理券を購入して本体に貼ります。収集日の朝、申し込んだ場所に出します。手数料と申し込み方法は自治体ごとに異なるため、受付の品目一覧で確認してください。",
  },
  {
    title: "抜き取った灯油は、販売店やガソリンスタンドに相談する",
    body: "灯油を購入した販売店や近くのガソリンスタンドに、引き取ってもらえるかを問い合わせます。コロナの取扱説明書も、灯油の廃棄処分は灯油を購入した販売店に相談するよう案内しています。灯油を入れていたポリタンクは、仙台市では20リットルまでのものを家庭ごみの指定袋で出せますが、区分は自治体によって異なります。",
  },
];

const cautions = [
  {
    title: "灯油を側溝や排水口、庭に流してはいけません",
    body: "仙台市は、使い切れずに残った灯油の投棄が原因と思われる河川の水質汚濁事故が春先に多発しているとして、灯油を家庭の外流しや側溝に絶対に捨てないよう呼びかけています。灯油は計画的に購入し、シーズン中に使い切ることが、処分の手間を減らすことにもつながります。",
  },
  {
    title: "昨シーズンから持ち越した灯油は使わずに処分を相談します",
    body: "コロナの取扱説明書は、持ち越した灯油などの変質灯油を使わないよう求め、灯油はシーズン中に使い切るよう案内しています。処分のために本体で燃やし切ろうとせず、残った灯油は販売店やガソリンスタンドに相談してください。",
  },
  {
    title: "FF式は自分で取り外さず、販売店やメーカーの窓口に相談します",
    body: "FF式は、給排気筒や油タンクとともに据え付けて使う暖房機です。コロナのFF式の取扱説明書は、自分での据え付け・移設工事を禁止し、工事は販売店や専門業者に依頼するよう求めており、廃棄の際も販売店またはお客様ご相談窓口に依頼するよう案内しています。仙台市はFF式のファンヒーターも粗大ごみの品目に挙げていますが、取り外しは設置した販売店や業者に依頼してから出してください。",
  },
  {
    title: "許可のない回収業者には渡しません",
    body: "環境省は、家庭の廃棄物を回収するには市区町村の一般廃棄物処理業の許可や委託が必要で、産業廃棄物処理業の許可や古物商の許可では回収できないと説明しています。「無料回収」をうたう巡回車などに渡す前に、許可の有無と見積もりの総額を確認してください。",
  },
];

const replaceSigns = [
  "国民生活センターは、業界団体などが石油ファンヒーターの点検・取替の目安を8年としていると紹介しています",
  "年数が経っていなくても、異常を感じたらただちに使用を中止し、メーカーや販売店に点検・修理を依頼するよう求めています",
  "20年以上前の機種で灯油が漏れ、メーカーから部品がもう製造されていないと言われた相談事例も紹介されています",
  "石油ファンヒーターを含む石油ストーブは消費生活用製品安全法の特定製品で、PSCマークのある製品は給油時消火装置などの設置が義務付けられています",
];

const judgeSigns = [
  "FF式の暖房機と、屋外の灯油タンクをまとめて撤去したい",
  "物置や実家に古いストーブが何台もあり、灯油が残ったまま保管されている",
  "ストーブのほかにも、大型家具や家電がまとめて出ている",
  "高齢の家族だけで、灯油を抜く作業や粗大ごみの運び出しが難しい",
];

const faqs = [
  {
    q: "石油ストーブは何ごみになりますか？",
    a: "多くの自治体で粗大ごみです。秋田市は、金属類として出すと収集車や処理施設で火災が起きるおそれがあるため、大きさにかかわらず粗大ごみとして扱うと案内しています。家電リサイクル法の対象4品目には含まれないため、家電リサイクル券は使いません。区分はお住まいの自治体の分け方一覧でご確認ください。",
  },
  {
    q: "タンクに灯油が残ったまま粗大ごみに出してもよいですか？",
    a: "出せません。秋田市は灯油や電池を抜いて出すよう、横浜市の粗大ごみの品目一覧は「石油は抜いて搬出」と案内しています。メーカーのコロナも、灯油が入ったまま廃棄するとリサイクルの際に思わぬ事故になるおそれがあるとして、タンクの灯油を抜き取るよう求めています。",
  },
  {
    q: "残った灯油はどこで処分できますか？",
    a: "灯油を購入した販売店や、ガソリンスタンドに相談します。仙台市は灯油を市では収集しておらず、処理業者に委託するか販売店などに相談するよう案内しています。同じ系列のガソリンスタンドでも店舗により処分できない場合があるため、持ち込む前に問い合わせてください。",
  },
  {
    q: "古い石油ファンヒーターは、いつ買い替えを考えればよいですか？",
    a: "国民生活センターは、業界団体などが石油ファンヒーターの点検・取替の目安を8年としていることを紹介し、年数が経っていなくても異常を感じたらただちに使用を中止して、メーカーや販売店に点検・修理を依頼するよう呼びかけています。",
  },
];

const sources = [
  { label: "特定家庭用機器再商品化法施行令（家電リサイクル法の対象4品目）", org: "e-Gov法令検索", url: "https://laws.e-gov.go.jp/law/410CO0000000378" },
  { label: "石油ストーブは何ごみになりますか？", org: "秋田市", url: "https://www.city.akita.lg.jp/faq/recycle/1007430/1007448.html" },
  { label: "粗大ごみの品目一覧（ストーブ類）", org: "横浜市", url: "https://www.sodai.city.yokohama.lg.jp/eco/view/yokohama/dustlistSearch.html" },
  { label: "五十音で引くワケ方事典（さ行：ストーブ）", org: "仙台市", url: "https://www.city.sendai.jp/haiki-shido/kurashi/machi/genryo/gomi/yobi/gojuon-sa.html" },
  { label: "五十音で引くワケ方事典（は行：ファンヒーター・ポリタンク）", org: "仙台市", url: "https://www.city.sendai.jp/haiki-shido/kurashi/machi/genryo/gomi/yobi/gojuon-ha.html" },
  { label: "五十音で引くワケ方事典（た行：灯油・灯油用ポリタンク）", org: "仙台市", url: "https://www.city.sendai.jp/haiki-shido/kurashi/machi/genryo/gomi/yobi/gojuon-ta.html" },
  { label: "市で収集しないものの相談先（その他）", org: "仙台市", url: "https://www.city.sendai.jp/haiki-shido/kurashi/machi/genryo/gomi/wakekata/sonohoka.html" },
  { label: "灯油等の流出事故を防ぎましょう", org: "仙台市", url: "https://www.city.sendai.jp/suishitsu/kurashi/machi/kankyohozen/kogai/taisaku/toyu.html" },
  { label: "不燃ごみの出し方（乾電池の絶縁）", org: "杉並区", url: "https://www.city.suginami.tokyo.jp/s104/717.html" },
  { label: "FF式石油暖房機 FF-AG6823H 取扱説明書（機器を廃棄するときの注意・灯油の廃棄・据付け工事・不良灯油）", org: "コロナ", url: "https://www.corona.co.jp/myff/agratio/manual/ff-ag6823h.pdf" },
  { label: "重大な事故につながるおそれも！長期使用の石油ファンヒーター", org: "国民生活センター", url: "https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen496.html" },
  { label: "廃棄物の処分に「無許可」の回収業者を利用しないでください！（Q&A）", org: "環境省", url: "https://www.env.go.jp/recycle/kaden/tv-recycle/qa.html" },
];

const related = [
  { href: "/kisetsu-kaden-hokan-shobun/", label: "季節家電のしまい方と処分", desc: "扇風機・電気ストーブ・こたつ・加湿器" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの出し方", desc: "スプレー缶・カセットボンベ・刃物など" },
  { href: "/furui-kaden-anzen-shobun/", label: "古い家電を安全に処分する", desc: "押し入れや物置から出てきた家電の扱い" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "一般的な手順と出すときの注意点" },
  { href: "/sodaigomi-size-kijun/", label: "粗大ごみになる大きさの基準", desc: "自治体ごとの違いと解体前の確認" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "冷蔵庫・洗濯機・テレビ・エアコン" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分と進め方" },
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
    { "@type": "ListItem", position: 2, name: "石油ストーブ・石油ファンヒーターの処分方法" },
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
    { href: "#kiso", label: "1｜石油ストーブの処分で決まっていること" },
    { href: "#steps", label: "2｜石油ストーブを粗大ごみに出す5ステップ" },
    { href: "#chui", label: "3｜灯油・FF式・回収業者の注意点" },
    { href: "#kaikae", label: "4｜古い石油ファンヒーターの買い替えの目安" },
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

      <Breadcrumb items={[{ label: "石油ストーブ・石油ファンヒーターの処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          石油ストーブ・石油ファンヒーターの処分方法｜灯油と電池を抜いて粗大ごみへ、残った灯油の相談先
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月23日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          石油ストーブ・石油ファンヒーターは、タンクの灯油と乾電池を抜いてから、自治体の粗大ごみとして出すのが基本です。抜き取った灯油は自治体では収集されないため、灯油を買った販売店やガソリンスタンドに引き取りを相談します。秋田市・横浜市・仙台市の案内と、メーカーのコロナの取扱説明書が、いずれもこの手順を示しています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、自治体・メーカー・国民生活センターの公式情報をもとに、石油ストーブの処分で決まっていること、粗大ごみに出すまでの手順、灯油とFF式の注意点、古い機種の買い替えの目安を順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>石油ストーブ・石油ファンヒーターは家電リサイクル法の対象外で、自治体の粗大ごみとして扱われる</li>
          <li>出す前にタンクの灯油と乾電池を抜く（秋田市・横浜市・コロナの取扱説明書）</li>
          <li>残った灯油は自治体では収集しないため、販売店やガソリンスタンドに相談し、側溝や排水口には流さない</li>
          <li>FF式は自分で取り外さず、販売店やメーカーの窓口に相談する</li>
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

      <H2 id="kiso" num="1">石油ストーブの処分で決まっていること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        処分の手順に入る前に、法律上の区分と、自治体・メーカーが求めている準備を確認してください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">石油ストーブを粗大ごみに出す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        進め方は、取扱説明書を確認する→灯油を抜く→乾電池を外す→粗大ごみに申し込む→灯油の引き取りを相談する、の5ステップです。
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
        申し込みの一般的な流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>、主な自治体の手数料は<Link href="/sodaigomi-tesuryou-hikaku/" className="text-primary underline underline-offset-2">粗大ごみの手数料の自治体比較</Link>で解説しています。
      </p>

      <H2 id="chui" num="3">灯油・FF式・回収業者の注意点</H2>
      <div className="space-y-4 mb-4">
        {cautions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        スプレー缶やカセットボンベなど、ほかの危険物の出し方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの出し方</Link>、回収業者とのトラブルを避ける確認事項は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">「無料回収」をうたう業者の注意点</Link>で解説しています。
      </p>

      <H2 id="kaikae" num="4">古い石油ファンヒーターの買い替えの目安</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物置や実家から古い石油ファンヒーターが出てきたときは、使い続けるか処分するかの判断に、国民生活センターの注意喚起が参考になります。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {replaceSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        電気ストーブやこたつなど、ほかの季節家電の扱いは<Link href="/kisetsu-kaden-hokan-shobun/" className="text-primary underline underline-offset-2">季節家電のしまい方と処分</Link>をご覧ください。
      </p>

      <H2 id="gyousha" num="5">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        持ち運びできる石油ストーブは粗大ごみとして出せますが、次のような状況では片付け・不用品回収業者への依頼も検討してください。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、家庭の廃棄物の回収に必要な市区町村の許可や委託を確認できる業者を選び、作業前の見積もりで総額と作業の範囲を確定させてください。灯油が残っている機器があることも、見積もりの段階で伝えておきます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。石油ストーブの分別区分・粗大ごみの手数料・灯油の引き取りの可否は、自治体や店舗により異なるため、必ずお住まいの自治体と販売店の案内をご確認ください。灯油の抜き取りは、お使いの機種の取扱説明書に従って行ってください。
      </p>
    </article>
  );
}
