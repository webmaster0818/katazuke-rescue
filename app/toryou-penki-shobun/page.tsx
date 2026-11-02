import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/toryou-penki-shobun/";
const TITLE = "ペンキ・塗料の処分方法｜残った塗料と空き缶、スプレー塗料の捨て方";
const DESC =
  "物置や車庫に残ったペンキ・塗料の処分方法を、日本塗料工業会の公式情報（2026年11月1日確認）にもとづき解説します。使い切るのが基本であること、残った塗料を乾かす・固化剤で固める方法、下水に流さない理由、空き缶とスプレー塗料の出し方、塗料を拭いた布の自然発火への注意と、自治体ごとに異なる扱いの確かめ方をまとめました。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";
const JPMA_DIY = "https://www.toryo.or.jp/jp/anzen/DIY/index-DIY.html";
const JPMA_SPRAY = "https://www.toryo.or.jp/jp/anzen/spray/spray2024.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "製品の表示に従い、使い切るのが基本",
    body: "一般社団法人日本塗料工業会（JPMA）の家庭用塗料の案内では、塗料の後始末は製品の表示に従って処理することが原則で、塗料は使い切ることが基本とされています。処分を考える前に、缶のラベルにある注意書きと廃棄方法を確認してください。",
  },
  {
    title: "下水や排水口に流さない",
    body: "同じ案内では、下水等に塗料を流さないよう明記されています。筆やローラーを洗った水の扱いも含め、製品の表示に従ってください。",
  },
  {
    title: "自治体ごとに扱いが違う",
    body: "JPMAは、やむを得ず捨てる場合は乾かしてから可燃ごみとして処分する方法を案内していますが、自治体によっては液体の塗料を収集せず、販売店への相談を求めているところもあります。たとえば横浜市の「ごみと資源物の出し方一覧表」では、ペンキは「販売店へ相談」とされています。出す前に、お住まいの自治体の分別案内を必ず確認してください。",
  },
];

const steps = [
  {
    title: "缶のラベルで種類と廃棄方法を確認する",
    body: "水性か油性か、製品に書かれた注意書きと廃棄方法を確認します。古くて缶の中で固まっている塗料や、業務用の塗料は、専門の産業廃棄物業者に相談するようJPMAは案内しています。",
  },
  {
    title: "お住まいの自治体の分別案内を確認する",
    body: "液体の塗料を収集するか、乾かした物を可燃ごみに出せるか、空き缶をどの区分に出すかは自治体で異なります。分別案内や品目検索で「ペンキ」「塗料」「スプレー缶」を調べてください。",
  },
  {
    title: "残った塗料は乾かすか、固化剤で固める",
    body: "JPMAは、やむを得ず塗料を捨てるときは、火気のない屋外で新聞紙などに塗り広げ、完全に乾かしてから一般ごみ、可燃ごみとして処分するよう案内しています。塗料用固化剤を加えてかき混ぜると簡単に固化できるとも書かれています。自治体がこの出し方を認めている場合に行ってください。",
  },
  {
    title: "空き缶は自治体の区分で出す",
    body: "JPMAによると、空き缶は地域によって不燃物か缶の回収の対象になる場合があり、詳しくは自治体に相談するよう案内されています。",
  },
  {
    title: "スプレー塗料は中身を使い切ってから出す",
    body: "JPMAの「スプレー塗料を捨てる時の適正処理方法」では、缶を振って音で中身が残っていないかを確かめ、ガス抜きキャップを使って、火気のない風通しのよい屋外で風下に向けて中身を出し切り、地域のゴミ出しルールに従って出すよう案内しています。2023年度時点で99.95％の製品にガス抜きキャップが付いているとされますが、二酸化炭素や窒素などの不燃性ガスを使った製品には付いていません。",
  },
];

const ngActions = [
  {
    title: "塗料を拭いた布やウエスをそのままごみ袋に入れる",
    body: "JPMAは、油性塗料や合成樹脂塗料を拭き取った布は自然発火する可能性があるとして、水に浸けたままポリ袋で密閉するなどして処分するよう案内しています。片付けで出た古いウエスもまとめて放置しないでください。",
  },
  {
    title: "液体のまま可燃ごみや不燃ごみに混ぜる",
    body: "液体のまま袋に入れると、収集作業中に漏れたり、他のごみに染み込んだりします。自治体の案内に従い、乾かす・固める・販売店に相談するなどの方法を選んでください。",
  },
  {
    title: "スプレー缶の中身を室内で出し切る",
    body: "スプレー塗料の中身やガスは、必ず火気のない風通しのよい屋外で出し切ります。缶に穴を開けるかどうかは自治体の指示に従ってください。横浜市のように「穴はあけない」と案内している自治体もあります。",
  },
];

const faqs: Faq[] = [
  {
    q: "水性ペンキと油性ペンキで捨て方は違いますか。",
    a: "JPMAの廃棄方法の案内は、水性・油性で分けずに、使い切る、乾かす・固めてから処分する、下水に流さないという考え方を示しています。違いが示されているのは、油性塗料や合成樹脂塗料を拭いた布が自然発火する可能性がある点です。製品ごとの表示も確認してください。",
  },
  {
    q: "缶の中で固まった古いペンキはどうすればよいですか。",
    a: "JPMAは、缶の中で固まっている古い塗料や業務用の塗料の廃棄は、専門の産業廃棄物業者に相談するよう案内しています。家庭の物は、まずお住まいの自治体に出し方を確認してください。",
  },
  {
    q: "スプレー塗料が詰まって中身を出し切れません。",
    a: "JPMAは、スプレーが詰まって出し切れない場合はメーカーのお客様相談室に問い合わせるよう案内しています。無理に穴を開けたり火の近くで作業したりしないでください。",
  },
  {
    q: "片付け業者に塗料も一緒に頼めますか。",
    a: "業者によって取り扱いの可否が異なります。見積もりの段階で塗料の量と状態（液体か固まっているか、スプレー缶か）を伝え、引き取れるか、どこで処分するかを確認してください。",
  },
];

const sources: Source[] = [
  { label: "家庭用塗料のご紹介（8．家庭用塗料の後始末と廃棄方法）", org: "一般社団法人 日本塗料工業会（JPMA）", url: JPMA_DIY },
  { label: "スプレー塗料を捨てる時の適正処理方法", org: "一般社団法人 日本塗料工業会（JPMA）", url: JPMA_SPRAY },
  { label: "ごみの分別を調べる（ごみと資源物の出し方一覧表）", org: "横浜市", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/dashikata.html" },
];

const related: Related[] = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの出し方", desc: "スプレー缶・電池など" },
  { href: "/kougu-diy-yohin-shobun/", label: "工具・DIY用品の処分", desc: "道具と材料の片付け" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置・倉庫の解体前整理", desc: "中身の片付けと処分の段取り" },
  { href: "/sekiyu-stove-shobun/", label: "石油ストーブ・灯油の処分", desc: "残った灯油の扱い" },
  { href: "/car-battery-shobun/", label: "車のバッテリーの処分方法", desc: "鉛バッテリーの引き取り先" },
  { href: "/spray-cassette-bombe-shobun/", label: "スプレー缶・カセットボンベの処分方法", desc: "中身の出し切り方と穴あけの扱い" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜塗料の処分で押さえる前提" },
    { href: "#steps", label: "2｜塗料を処分する5ステップ" },
    { href: "#ng", label: "3｜避けるべき3つの行動" },
    { href: "#faq", label: "4｜よくある質問" },
    { href: "#shutten", label: "5｜出典・参考にした公式情報" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="ペンキ・塗料の処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "ペンキ・塗料の処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          物置や車庫の棚から、使いかけのペンキ缶やスプレー塗料が何本も出てくることがあります。塗料は液体のまま捨てられず、空き缶やスプレー缶の出し方も自治体によって異なるため、片付けの最後まで残りやすい品目です。
        </P>
        <P>
          この記事では、一般社団法人日本塗料工業会（JPMA）の公式ページを2026年11月1日に開いて確認した内容をもとに、家庭の塗料の後始末と処分の手順を整理しました。自治体の扱いの例として横浜市の案内も引用しています。出す前に、必ずお住まいの自治体の案内を確認してください。
        </P>
      </header>

      <Summary
        points={[
          "塗料は製品の表示に従い、使い切るのが基本。下水には流さない",
          "やむを得ず捨てる場合、JPMAは屋外で乾かすか固化剤で固めてから可燃ごみに出す方法を案内している",
          "液体の塗料を収集しない自治体もあるため、出す前に自治体の分別案内を確認する",
          "スプレー塗料は屋外で中身を出し切り、油性塗料を拭いた布は自然発火に注意する",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">塗料の処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="steps" num="2">塗料を処分する5ステップ</H2>
      <Steps items={steps} />

      <H2 id="ng" num="3">避けるべき3つの行動</H2>
      <Cards items={ngActions} tone="warn" />
      <P>
        スプレー缶やカセットボンベ、電池などの考え方は<A href="/bunbetsu-muzukashii-gomi/">分別が難しいごみの出し方</A>、DIYの道具や材料は<A href="/kougu-diy-yohin-shobun/">工具・DIY用品の処分</A>、物置や車庫の全体の進め方は<A href="/monooki-kaitai-mae-seiri/">物置・倉庫の解体前整理</A>と<A href="/garage-katazuke/">車庫・ガレージの片付け</A>で解説しています。量が多い場合は片付け業者への相談も選択肢です。業者の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>をご覧ください。
      </P>
      <RankingCta />

      <H2 id="faq" num="4">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="5">出典・参考にした公式情報</H2>
      <P>本記事の処分方法・注意事項の記述は、以下の公式情報にもとづいています。横浜市の案内は、自治体の扱いの一例として引用しています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="6">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、日本塗料工業会と横浜市の公式ページを2026年11月1日に確認した内容にもとづく一般的な情報です。塗料・空き缶・スプレー缶の出し方は自治体ごとに異なります。必ず製品の表示とお住まいの自治体の最新の案内をご確認ください。
      </p>
    </article>
  );
}
