import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/tire-shobun/";
const TITLE = "タイヤの処分方法｜販売店での引き取りと自治体の扱い";
const DESC =
  "物置や車庫に残った自動車タイヤ（ホイール付きを含む）の処分方法を、日本自動車タイヤ協会（JATMA）と環境省の公式情報（2026年11月1日確認）にもとづいて解説します。廃タイヤが適正処理困難物とされている理由、タイヤ販売店に処理費を払って引き取ってもらう流れ、処理費の店頭表示、自治体の扱いの確かめ方をまとめました。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";
const JATMA = "https://www.jatma.or.jp/environment_recycle/aboutscraptyres.php";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "自動車用の廃タイヤは「適正処理困難物」に指定されている",
    body: "環境省の告示「廃棄物の処理及び清掃に関する法律第六条の三の規定に基づく一般廃棄物の指定について」（公布日 平成6年6月20日）では、廃ゴムタイヤ（自動車用のものに限る）が、市町村の処理が難しい一般廃棄物として指定されています。この告示では、新しい製品に買い替える際などに販売店等で引き取ることが求められています。",
  },
  {
    title: "家庭のタイヤは販売店に処理費を払って引き取ってもらうのが一般的",
    body: "日本自動車タイヤ協会（JATMA）の「廃タイヤの取扱い」では、一般消費者がタイヤを購入した際に不要になったタイヤは、そのタイヤ販売店に処理費を支払って引き取ってもらうことが一般的とされています。JATMAの会員企業の販売拠点では、自宅のガレージや物置などに保管していた不要なタイヤも引き取っており、都道府県別に引き取り店舗を検索できます。",
  },
  {
    title: "ホイール付きのタイヤも引き取りの対象",
    body: "同じページでは、ホイール付きの廃タイヤも廃タイヤとして引き取りが可能とされています。一方、ホイール単体は適正処理困難物には該当しないと書かれています。ホイールだけを処分する場合の扱いは、お住まいの自治体の案内を確認してください。対象は自動車用タイヤで、飛行機用タイヤや自転車用タイヤは含まれません。",
  },
];

const steps = [
  {
    title: "本数とホイールの有無を数える",
    body: "物置や車庫から出てきたタイヤの本数と、ホイールが付いているかどうかを確認します。スタッドレスタイヤなど季節用に保管していた物も含め、処分する本数を決めておくと店舗への問い合わせがスムーズです。",
  },
  {
    title: "引き取り店舗を探し、事前に電話する",
    body: "JATMAのページから都道府県別に引き取り店舗を探せます。JATMAは、具体的な処理費と引き取り方法を確認するために、事前に電話するよう求めています。掲載情報は更新日以降に変わることがあるとも注記されています。",
  },
  {
    title: "処理費の表示を確認する",
    body: "JATMAによると、販売店が廃タイヤの処理費を受け取る場合は、業界の公正競争規約により、少なくとも店頭の2か所（店内と店外）に表示することになっています。金額は店舗ごとに異なるため、持ち込む前に確認してください。",
  },
  {
    title: "店舗に持ち込んで引き渡す",
    body: "タイヤは重く、ホイール付きはさらに重くなります。車に積む場合は荷室を養生し、1本ずつ運んでください。販売店が処理費を受け取って引き取ったタイヤを中古品として販売する場合は、一般消費者から事前に了解を得ない限り行うべきではないとJATMAは説明しています。",
  },
];

const ngActions = [
  {
    title: "燃えないごみや粗大ごみの日にそのまま出す",
    body: "自治体によってはタイヤを収集していません。たとえば横浜市の「ごみと資源物の出し方一覧表」では、タイヤ（自動車・バイク）は「販売店へ相談」とされています。出す前に必ずお住まいの自治体の分別案内を確認してください。",
  },
  {
    title: "空き地や山林に置いていく",
    body: "JATMAの「廃タイヤの発生抑制」のページでは、環境省のデータにもとづく不法投棄の状況が紹介されています。タイヤは自分の土地以外に置いていかず、販売店など正規のルートで引き渡してください。",
  },
];

const faqs: Faq[] = [
  {
    q: "タイヤの処理費はいくらですか。",
    a: "JATMAは処理費の金額を公表していません。販売店が処理費を受け取る場合は店頭に表示することになっているため、店舗で確認するか、事前に電話で問い合わせてください。",
  },
  {
    q: "タイヤを交換するときに古いタイヤを引き取ってもらえますか。",
    a: "環境省の告示では、新しい製品への買い替えの際などに販売店等で引き取ることが求められています。交換時の引き取りの条件や費用は店舗ごとに異なるため、交換を依頼する店舗に確認してください。",
  },
  {
    q: "自転車のタイヤも同じように処分できますか。",
    a: "JATMAの廃タイヤの取扱いは自動車用タイヤが対象で、自転車用タイヤは含まれません。自転車のタイヤやチューブは、お住まいの自治体の分別案内に従ってください。",
  },
  {
    q: "片付け業者にタイヤも一緒に頼めますか。",
    a: "業者によって取り扱いの可否が異なります。見積もりの段階でタイヤの本数とホイールの有無を伝え、引き取れるか、どこで処分するか、費用がいくらかを確認してください。",
  },
];

const sources: Source[] = [
  { label: "廃タイヤの取扱い", org: "一般社団法人 日本自動車タイヤ協会（JATMA）", url: JATMA },
  { label: "廃タイヤの発生抑制", org: "一般社団法人 日本自動車タイヤ協会（JATMA）", url: "https://www.jatma.or.jp/environment_recycle/reductionscraptyres.html" },
  { label: "廃棄物の処理及び清掃に関する法律第六条の三の規定に基づく一般廃棄物の指定について", org: "環境省", url: "https://www.env.go.jp/hourei/11/000481.html" },
  { label: "ごみの分別を調べる（ごみと資源物の出し方一覧表）", org: "横浜市", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/dashikata.html" },
];

const related: Related[] = [
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/car-battery-shobun/", label: "車のバッテリーの処分方法", desc: "鉛バッテリーの引き取り先" },
  { href: "/bike-shobun/", label: "バイクの処分方法", desc: "二輪車リサイクルと廃車手続き" },
  { href: "/kuruma-shanai-seiri/", label: "車内・カー用品の整理と処分", desc: "車に積んだままの物の片付け" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置・倉庫の解体前整理", desc: "中身の片付けと処分の段取り" },
  { href: "/jitensha-bike-shobun/", label: "自転車・バイクの処分方法", desc: "防犯登録・廃車手続きの一般論" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜タイヤの処分で押さえる前提" },
    { href: "#steps", label: "2｜タイヤを処分する4ステップ" },
    { href: "#ng", label: "3｜避けるべき2つの行動" },
    { href: "#faq", label: "4｜よくある質問" },
    { href: "#shutten", label: "5｜出典・参考にした公式情報" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="タイヤの処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "タイヤの処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          車を手放したあとの実家の車庫や物置に、スタッドレスタイヤや交換前のタイヤが何本も残っていることがあります。自動車のタイヤは、自治体のごみ収集では扱わず販売店への相談を案内している地域もある品目です。
        </P>
        <P>
          この記事では、日本自動車タイヤ協会（JATMA）と環境省の公式ページを2026年11月1日に開いて確認した内容をもとに、家庭のタイヤを手放す流れを整理しました。処理費や引き取りの条件は店舗ごとに異なるため、持ち込む前に店舗へ確認してください。
        </P>
      </header>

      <Summary
        points={[
          "自動車用の廃タイヤは、環境省の告示で市町村の処理が難しい一般廃棄物（適正処理困難物）に指定されている",
          "家庭のタイヤは、タイヤ販売店に処理費を払って引き取ってもらうのが一般的で、ホイール付きも引き取り対象",
          "処理費は店頭に表示することになっており、JATMAは事前の電話確認を求めている",
          "自治体の扱いは地域で異なるため、ごみに出す前に分別案内を確認する",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">タイヤの処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="steps" num="2">タイヤを処分する4ステップ</H2>
      <Steps items={steps} />

      <H2 id="ng" num="3">避けるべき2つの行動</H2>
      <Cards items={ngActions} tone="warn" />
      <P>
        車庫の片付けではタイヤのほか、バッテリー、オイル、塗料なども出てきます。それぞれの扱いは<A href="/car-battery-shobun/">車のバッテリーの処分方法</A>、<A href="/toryou-penki-shobun/">ペンキ・塗料の処分方法</A>、全体の進め方は<A href="/garage-katazuke/">車庫・ガレージの片付け</A>で解説しています。量が多い場合や運び出せない場合は、片付け業者への相談も選択肢です。業者の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>をご覧ください。
      </P>
      <RankingCta />

      <H2 id="faq" num="4">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="5">出典・参考にした公式情報</H2>
      <P>本記事の制度・手順の記述は、以下の公式情報にもとづいています。横浜市の案内は、自治体の扱いの一例として引用しています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="6">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、日本自動車タイヤ協会・環境省・横浜市の公式ページを2026年11月1日に確認した内容にもとづく一般的な情報です。タイヤの引き取りの可否や処理費は店舗ごとに、ごみとしての扱いは自治体ごとに異なります。必ず依頼先とお住まいの自治体の最新の案内をご確認ください。事業活動で出た廃タイヤは産業廃棄物の扱いになります。
      </p>
    </article>
  );
}
