import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/monooki-shobun/";
const TITLE = "物置本体の処分方法｜粗大ごみに出す前に解体と大きさの区分を確認";
const DESC =
  "庭の物置本体を処分するときは、自治体によって「解体した状態」で出すことが条件だったり、素材や大きさで区分が分かれたりします。仙台市・名古屋市・大阪市・札幌市・相模原市・広島市の公式ページ（2026年11月8日確認）をもとに、出し方の違いと業者に頼む場合の確認点をまとめました。";
const PUBLISHED = "2026-11-08";
const UPDATED = "2026-11-08";

const SENDAI = "https://www.city.sendai.jp/haiki-shido/kurashi/machi/genryo/gomi/yobi/gojuon-ma.html";
const NAGOYA = "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html";
const OSAKA = "https://www.city.osaka.lg.jp/kankyo/page/0000384507.html";
const SAPPORO = "https://www.city.sapporo.jp/seiso/gomi/oogatagomi_02.html";
const SAGAMIHARA = "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/katei/1008324.html";
const HIROSHIMA = "https://www.city.hiroshima.lg.jp/living/gomi-kankyo/1021277/1003072/1026095/1026097/1003174.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "「解体した状態」で出すことを条件にしている自治体がある",
    body: "名古屋市の「粗大ごみ処理手数料の例」では品目名が「物置（解体した状態にあるもの）」、大阪市の「粗大ごみ処理手数料一覧表」では「物置(スチール製組立式・解体済みのもの)」とされています。仙台市の「五十音で引くワケ方事典」も、物置は粗大ごみで、手数料は「自分で解体したもの」の額として示しています。組み立てたままでは出せない前提で準備してください。",
  },
  {
    title: "素材や大きさで区分が分かれる",
    body: "札幌市の「大型ごみ手数料」と相模原市の「粗大ごみの戸別収集の手数料一覧」は、物置を「プラスチック製のもの」「プラスチック製以外で高さ及び幅が1m未満のもの」「プラスチック製以外で高さ又は幅が1m以上のもの」の3区分に分けています。広島市の「大型ごみ収集運搬料金品目別一覧表」は、幅及び高さの合計が2m未満・2m以上3m未満・3m以上の3区分です。区分ごとに手数料が違うため、申し込む前に幅と高さを測っておきます。",
  },
  {
    title: "重い物置は市で収集しない場合がある",
    body: "仙台市は、物置のうち100kgを超えるものは許可業者に依頼するよう案内しています。名古屋市の手数料の例のページでも、ガレキなど収集または処理が著しく困難な物は収集しないと注記されています。大型の物置や土台まわりの資材は、自治体のごみとして出せるかを先に確認してください。",
  },
];

const steps = [
  {
    title: "中身をすべて出し、物置を空にする",
    body: "粗大ごみとして出すのも業者に頼むのも、中身が残っていると進みません。中身の仕分けと処分の段取りは物置・倉庫の解体前整理の記事にまとめています。",
  },
  {
    title: "素材と幅・高さを確認する",
    body: "スチール製かプラスチック製か、幅と高さが何mかを確認します。札幌市・相模原市・広島市のように、素材や寸法で区分が分かれる自治体があります。",
  },
  {
    title: "お住まいの自治体の分別案内で出し方を確かめる",
    body: "解体が条件か、重さや大きさの上限があるか、収集しない場合の相談先はどこかを、自治体の品目一覧や手数料一覧で確認します。仙台市は粗大ごみ受付センター（022-716-5301）への申し込みを案内しています。",
  },
  {
    title: "自分で解体できない場合は、業者への依頼を検討する",
    body: "解体に工具や人手が要る、重くて運び出せない、土台の撤去も必要といった場合は、解体から運び出しまでを業者に頼む方法があります。家庭のごみを回収できる許可の有無を確認してから依頼してください。",
  },
];

const ngActions = [
  {
    title: "組み立てたまま粗大ごみに出す",
    body: "名古屋市・大阪市・仙台市のように、解体した物置を前提にしている自治体があります。申し込みの際に解体の要否を確認し、指定どおりの状態で出してください。",
  },
  {
    title: "無料回収をうたう業者に確認なしで引き渡す",
    body: "家庭から出たごみを回収するには、市区町村の一般廃棄物収集運搬業の許可などが必要です。許可の確かめ方は片付け業者の許可の確認方法の記事を参考にしてください。",
  },
];

const faqs: Faq[] = [
  {
    q: "物置は組み立てたまま粗大ごみに出せますか。",
    a: "自治体によります。名古屋市は「物置（解体した状態にあるもの）」、大阪市は「物置(スチール製組立式・解体済みのもの)」を品目としており、仙台市も手数料を「自分で解体したもの」の額として示しています（2026年11月8日確認）。お住まいの自治体の案内で確認してください。",
  },
  {
    q: "物置の粗大ごみの手数料はどう決まりますか。",
    a: "札幌市と相模原市は素材（プラスチック製かどうか）と高さ・幅、広島市は幅及び高さの合計で区分しています（2026年11月8日確認）。金額は自治体と区分ごとに異なるため、各自治体の手数料一覧で確認してください。",
  },
  {
    q: "大きな物置で、自治体に出せない場合はどうしますか。",
    a: "仙台市は、物置のうち100kgを超えるものは許可業者に依頼するよう案内しています。自治体が収集しない場合の相談先は、お住まいの自治体の案内で確認してください。解体と運び出しをまとめて頼む場合は、業者の許可を確認してから依頼します。",
  },
  {
    q: "物置の中身も一緒に回収してもらえますか。",
    a: "粗大ごみとして出す場合、中身は物置とは別に分別して出す必要があります。業者に頼む場合は、中身も含めて回収できるか、費用がいくらかを見積もりの段階で確認してください。",
  },
];

const sources: Source[] = [
  { label: "五十音で引くワケ方事典（マ行、ヤ行、ラ行、ワ行）", org: "仙台市（更新日 2026年3月1日）", url: SENDAI },
  { label: "粗大ごみ処理手数料の例", org: "名古屋市（更新日 2026年9月30日）", url: NAGOYA },
  { label: "粗大ごみ処理手数料一覧表", org: "大阪市（2026年10月29日）", url: OSAKA },
  { label: "大型ごみ手数料", org: "札幌市（更新日 2025年4月11日）", url: SAPPORO },
  { label: "粗大ごみの戸別収集の手数料一覧", org: "相模原市（最終更新日 令和7年12月22日）", url: SAGAMIHARA },
  { label: "大型ごみ収集運搬料金品目別一覧表", org: "広島市（更新日 2025年2月19日）", url: HIROSHIMA },
];

const related: Related[] = [
  { href: "/monooki-kaitai-mae-seiri/", label: "物置・倉庫の解体前整理", desc: "中身の片付けと処分の段取り" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/sodaigomi-size-kijun/", label: "粗大ごみのサイズ基準", desc: "粗大ごみになる大きさの目安" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "申し込みから収集日まで" },
  { href: "/niwa-fuyohin-shobun/", label: "庭の不用品の処分", desc: "庭まわりの物の片付け" },
  { href: "/gyousha-kyoka-kakunin/", label: "片付け業者の許可の確認方法", desc: "依頼前に確かめること" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜物置本体の処分で押さえる前提" },
    { href: "#jichitai", label: "2｜6市の出し方の違い" },
    { href: "#steps", label: "3｜物置本体を処分する4ステップ" },
    { href: "#ng", label: "4｜避けるべき2つの行動" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#shutten", label: "6｜出典・参考にした公式情報" },
    { href: "#related", label: "7｜関連記事" },
  ];
  const rows = [
    { city: "仙台市", rule: "粗大ごみ。手数料は自分で解体したものの額。100kgを超えるものは許可業者に依頼", url: SENDAI },
    { city: "名古屋市", rule: "品目は「物置（解体した状態にあるもの）」", url: NAGOYA },
    { city: "大阪市", rule: "品目は「物置(スチール製組立式・解体済みのもの)」", url: OSAKA },
    { city: "札幌市", rule: "プラスチック製／それ以外で高さ及び幅1m未満／それ以外で高さ又は幅1m以上の3区分", url: SAPPORO },
    { city: "相模原市", rule: "プラスチック製／それ以外で高さおよび幅1m未満／それ以外で高さまたは幅1m以上の3区分", url: SAGAMIHARA },
    { city: "広島市", rule: "幅及び高さの合計 2m未満／2m以上3m未満／3m以上の3区分", url: HIROSHIMA },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="物置本体の処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "物置本体の処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          実家や庭の片付けの最後に残りやすいのが、物置そのものです。中身を出した後の物置本体は、自治体の粗大ごみで出せる場合もありますが、解体した状態であることや、素材・大きさの区分が自治体ごとに決まっています。
        </P>
        <P>
          この記事では、仙台市・名古屋市・大阪市・札幌市・相模原市・広島市の公式ページを2026年11月8日に開いて確認した内容をもとに、物置本体を手放すときの確認点を整理しました。手数料の額は自治体と区分ごとに異なるため、各自治体の一覧で確認してください。
        </P>
      </header>

      <Summary
        points={[
          "名古屋市・大阪市・仙台市は、解体した物置を粗大ごみの前提にしている",
          "札幌市・相模原市は素材と高さ・幅、広島市は幅及び高さの合計で区分が分かれる",
          "仙台市は100kgを超える物置を許可業者に依頼するよう案内している",
          "自分で解体・運び出しができない場合は、許可を確認したうえで業者に相談する",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">物置本体の処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="jichitai" num="2">6市の出し方の違い</H2>
      <P>各市の公式ページに書かれている物置の扱いを並べると、次のとおりです（2026年11月8日確認）。</P>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="border border-border p-2 text-left">自治体</th>
              <th className="border border-border p-2 text-left">物置の扱い</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.city}>
                <td className="border border-border p-2 whitespace-nowrap">
                  <a href={r.url} className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">{r.city}</a>
                </td>
                <td className="border border-border p-2">{r.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>
        ほかの市区町村でも、品目一覧や手数料一覧に物置の扱いが書かれていることがあります。粗大ごみの申し込みの流れは<A href="/sodaigomi-moushikomi-nagare/">粗大ごみ収集の申し込みの流れ</A>、自治体ごとの手数料の調べ方は<A href="/sodaigomi-tesuryou-hikaku/">粗大ごみの手数料比較</A>で解説しています。
      </P>

      <H2 id="steps" num="3">物置本体を処分する4ステップ</H2>
      <Steps items={steps} />
      <P>
        中身の片付けは<A href="/monooki-kaitai-mae-seiri/">物置・倉庫の解体前整理</A>、庭に残った物の扱いは<A href="/niwa-fuyohin-shobun/">庭の不用品の処分</A>をご覧ください。
      </P>

      <H2 id="ng" num="4">避けるべき2つの行動</H2>
      <Cards items={ngActions} tone="warn" />
      <P>
        業者に頼む場合の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>をご覧ください。
      </P>
      <RankingCta />

      <H2 id="faq" num="5">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="6">出典・参考にした公式情報</H2>
      <P>本記事の自治体ごとの記述は、以下の公式ページにもとづいています。6市の案内は、自治体の扱いの例として引用しています。</P>
      <SourceList sources={sources} checked="2026年11月8日" />

      <H2 id="related" num="7">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、仙台市・名古屋市・大阪市・札幌市・相模原市・広島市の公式ページを2026年11月8日に確認した内容にもとづく一般的な情報です。物置の出し方や手数料は自治体ごとに異なり、変更されることがあります。必ずお住まいの自治体の最新の案内をご確認ください。
      </p>
    </article>
  );
}
