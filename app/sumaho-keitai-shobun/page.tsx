import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/sumaho-keitai-shobun/";
const TITLE = "スマホ・携帯電話の処分方法｜携帯ショップの無償回収（モバイル・リサイクル・ネットワーク）";
const DESC =
  "引き出しに残った古いスマートフォンや携帯電話、電池、充電器の処分方法を、電気通信事業者協会（TCA）の「モバイル・リサイクル・ネットワーク」と環境省の公式情報（2026年11月2日確認）にもとづいて解説します。回収の対象、参加している事業者、回収実績、持ち込む前の準備をまとめました。";
const PUBLISHED = "2026-11-02";
const UPDATED = "2026-11-02";
const MRN = "https://www.tca.or.jp/mobile-recycle/";
const MRN_GAIYO = "https://www.tca.or.jp/mobile-recycle/gaiyo/";
const MRN_LIST = "https://www.tca.or.jp/mobile-recycle/gaiyo/list.html";
const MRN_RESULT = "https://www.tca.or.jp/mobile-recycle/result/";
const MRN_SYUCHI = "https://www.tca.or.jp/mobile-recycle/syuchi/";
const ENV_LIB = "https://lithium.env.go.jp/recycle/waste/lithium_1/index.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "携帯電話事業者を中心とした回収の仕組みがある",
    body: "モバイル・リサイクル・ネットワーク（MRN）は、利用者の協力と携帯電話事業者を中心とした、使用済み携帯電話等の回収・再資源化の取組みです。MRNのページでは、携帯電話の本体、電池、充電器を「無償」で各社ショップ等で回収していると案内されています。",
  },
  {
    title: "機種変更や契約のときでなくても、古い機種でも受け付けている",
    body: "MRNの概要には、機種変や契約時でなくても、いつでもどんなに古い機種でも受け付けていると書かれています。電池や充電器も回収の対象です。",
  },
  {
    title: "端末には希少金属が含まれている",
    body: "使用済みの携帯電話等の端末には、金、銀、銅、パラジウムといった希少金属が含まれ、「都市鉱山」とも呼ばれています。MRNは、回収した端末に使われている資源の71.1％を再資源化し、有効に利活用することを目指すとしています。",
  },
];

const members = [
  { title: "通信事業者", body: "株式会社NTTドコモ、KDDI株式会社／沖縄セルラー電話株式会社、ソフトバンク株式会社、楽天モバイル株式会社。" },
  { title: "販売会社・業界団体", body: "販売会社として株式会社エディオン。業界団体として一般社団法人電気通信事業者協会、一般社団法人情報通信ネットワーク産業協会。（MRN参加社一覧・令和7年12月1日現在）" },
];

const steps = [
  {
    title: "端末・電池・充電器を集める",
    body: "引き出しや箱に残っている古い端末、外した電池、充電器をまとめます。MRNでは本体・電池・充電器のいずれも回収の対象です。",
  },
  {
    title: "必要なデータを移し、アカウントを外す",
    body: "写真や連絡先など残したいデータは、持ち込む前に移しておきます。MRNの概要では、大切な写真やデータの移し替えについても相談に応じ、手伝いもしていると案内されています。データ消去とアカウントの解除の考え方は、別記事で解説しています。",
  },
  {
    title: "参加社のショップに持ち込む",
    body: "各社のショップで回収しています。ショップの検索は、MRNの「回収から再資源化までの取組み」のページから各社のショップ検索に進めます。受付の方法は店舗で確認してください。",
  },
];

const cautions = [
  {
    title: "リチウムイオン電池を一般のごみに混ぜない",
    body: "環境省は、廃棄物処理施設や収集運搬車両でリチウムイオン電池等に起因する火災事故が頻繁に発生しているとして、啓発を進めています。TCAと情報通信ネットワーク産業協会は、同電池を使う携帯電話等の適切な使用や回収を促進するため、環境省主導の「LiBパートナー」に加わっています。",
  },
];

const faqs: Faq[] = [
  {
    q: "古い携帯電話は携帯ショップで引き取ってもらえますか。",
    a: "モバイル・リサイクル・ネットワーク（MRN）では、携帯電話の本体、電池、充電器を各社ショップ等で無償回収しています。機種変や契約時でなくても、どんなに古い機種でも受け付けていると案内されています。",
  },
  {
    q: "契約していない会社のショップにも持ち込めますか。",
    a: "MRNの概要は、全国にある各社の「ショップ」で回収しているとしています。持ち込む店舗での受付の条件は、事前に店舗へ確認してください。",
  },
  {
    q: "回収された端末の個人情報はどうなりますか。",
    a: "MRNの概要には、端末に記録されている様々な個人情報について、確実な漏えい防止措置を講じていると書かれています。自分でできるデータの消去やアカウントの解除も、持ち込む前に済ませておくと安心です。",
  },
  {
    q: "どのくらいの端末が回収されていますか。",
    a: "MRNは、平成13年からの24年間で約1億6000万台の使用済み端末を回収したとしています。令和7年度の回収実績は、本体3,187千台、電池3,420千台、充電器974千台です。",
  },
];

const sources: Source[] = [
  { label: "モバイル・リサイクル・ネットワーク", org: "一般社団法人 電気通信事業者協会（TCA）", url: MRN },
  { label: "MRNの概要｜モバイル・リサイクル・ネットワーク", org: "一般社団法人 電気通信事業者協会（TCA）", url: MRN_GAIYO },
  { label: "参加社一覧｜MRNの概要｜モバイル・リサイクル・ネットワーク", org: "一般社団法人 電気通信事業者協会（TCA）", url: MRN_LIST },
  { label: "これまでの回収実績｜モバイル・リサイクル・ネットワーク", org: "一般社団法人 電気通信事業者協会（TCA）", url: MRN_RESULT },
  { label: "周知・啓発活動｜モバイル・リサイクル・ネットワーク", org: "一般社団法人 電気通信事業者協会（TCA）", url: MRN_SYUCHI },
  { label: "リチウム蓄電池関係 | 環境再生・資源循環", org: "環境省", url: ENV_LIB },
];

const related: Related[] = [
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去", desc: "処分前の消去とアカウント解除" },
  { href: "/pc-shobun-recycle/", label: "パソコンの処分方法", desc: "メーカー回収の申込先" },
  { href: "/kogata-kaden-recycle/", label: "小型家電リサイクル", desc: "回収ボックスと自治体の回収" },
  { href: "/lithium-battery-shobun/", label: "リチウムイオン電池の処分方法", desc: "発火を防ぐ出し方と回収先" },
  { href: "/cable-gadget-haisen-seiri/", label: "ケーブル・ガジェットの整理", desc: "充電器や配線の片付け" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "故人の端末とデータの扱い" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜携帯ショップの回収の仕組み" },
    { href: "#sanka", label: "2｜回収に参加している事業者" },
    { href: "#steps", label: "3｜持ち込むまでの3ステップ" },
    { href: "#chui", label: "4｜電池の扱いの注意点" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#shutten", label: "6｜出典・参考にした公式情報" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="スマホ・携帯電話の処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "スマホ・携帯電話の処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          実家や自宅の片付けでは、機種変更のたびにしまい込んだ古いスマートフォンや携帯電話、充電器が何台分も出てくることがあります。携帯電話には、携帯電話事業者を中心とした回収・再資源化の仕組みがあります。
        </P>
        <P>
          この記事では、電気通信事業者協会（TCA）が公開している「モバイル・リサイクル・ネットワーク」のページと環境省のページを2026年11月2日に開いて確認した内容をもとに、回収の対象、参加している事業者、持ち込む前の準備を整理しました。
        </P>
      </header>

      <Summary
        points={[
          "携帯電話の本体・電池・充電器は、モバイル・リサイクル・ネットワーク（MRN）として各社ショップ等で無償回収している",
          "機種変や契約時でなくても、どんなに古い機種でも受け付けている",
          "参加社は通信事業者4グループ・販売会社1社・業界団体2団体（令和7年12月1日現在）",
          "持ち込む前にデータを移し、消去とアカウントの解除を済ませておく",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">携帯ショップの回収の仕組み</H2>
      <Cards items={basics} />

      <H2 id="sanka" num="2">回収に参加している事業者</H2>
      <Cards items={members} />
      <P>
        令和7年度の回収実績は、本体3,187千台（329トン）、電池3,420千台（128トン）、充電器974千台（65トン）です（MRN「これまでの回収実績」）。
      </P>

      <H2 id="steps" num="3">持ち込むまでの3ステップ</H2>
      <Steps items={steps} />
      <P>
        データの消去とアカウントの解除は<A href="/pc-sumaho-data-shoukyo/">パソコン・スマホのデータ消去</A>、故人の端末の扱いは<A href="/digital-ihin-seiri/">デジタル遺品の整理</A>で解説しています。
      </P>

      <H2 id="chui" num="4">電池の扱いの注意点</H2>
      <Cards items={cautions} tone="warn" />
      <P>
        電池の出し方は<A href="/lithium-battery-shobun/">リチウムイオン電池の処分方法</A>、パソコンは<A href="/pc-shobun-recycle/">パソコンの処分方法</A>をご覧ください。片付け業者にまとめて依頼する場合は、端末にデータが残っていないかを先に確認し、端末を引き取れるか・どこで処分するかを見積もりの段階で確認してください。
      </P>

      <H2 id="faq" num="5">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="6">出典・参考にした公式情報</H2>
      <P>本記事の仕組み・実績の記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={sources} checked="2026年11月2日" />

      <H2 id="related" num="7">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、電気通信事業者協会と環境省の公式ページを2026年11月2日に確認した内容にもとづく一般的な情報です。回収の受付方法は店舗ごとに異なる場合があります。必ず持ち込む店舗とモバイル・リサイクル・ネットワークの最新の案内をご確認ください。
      </p>
    </article>
  );
}
