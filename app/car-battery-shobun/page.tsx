import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/car-battery-shobun/";
const TITLE = "車のバッテリーの処分方法｜鉛バッテリーの引き取り先と安全な扱い方";
const DESC =
  "車庫や物置に残った自動車・バイク用の鉛バッテリーの処分方法を、電池工業会と鉛蓄電池再資源化協会（SBRA）の公式情報（2026年11月1日確認）にもとづいて解説します。購入した販売会社への相談が基本になる理由、SBRAの回収の仕組みの対象、希硫酸や水素ガスへの注意、自治体のごみに出さない理由をまとめました。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "家庭で使った車・バイクのバッテリーは、購入した販売会社に相談する",
    body: "一般社団法人鉛蓄電池再資源化協会（SBRA）のよくある質問では、個人で使用していた使用済みバッテリーについては、バッテリーを購入した販売会社に問い合わせるよう案内されています。一般社団法人電池工業会の「電池の捨て方ナビ」でも、家庭で自動車や二輪車に使っていた鉛蓄電池にはリサイクル協力店があるため、SBRAに相談するよう書かれています。",
  },
  {
    title: "SBRAの回収の仕組みは事業者向け",
    body: "SBRAは環境省の広域認定を受けて、自動車用・二輪車用の鉛バッテリーを全国で回収しています。SBRAの自主取り組みは無償の引き取りですが、回収は登録した排出事業者が原則として自動車用25個以上、二輪車用50個以上を保管した時点で依頼する仕組みです。個人が直接SBRAに回収を頼む仕組みではないため、まずは購入した販売会社に相談してください。",
  },
  {
    title: "SBRAで扱えるのはエンジン始動用の鉛バッテリー",
    body: "SBRAで処理できるのはエンジン始動用の鉛バッテリーとされ、二輪車用以外の小型密閉鉛蓄電池や産業用鉛蓄電池、鉛蓄電池以外（ニッケル水素電池、リチウムイオン電池など）は対象外です。小型の充電式電池は「リチウムイオン電池の処分」の記事を参考にしてください。",
  },
];

const safety = [
  {
    title: "中の液は濃い硫酸で、皮膚や目に触れると危険",
    body: "電池工業会の「自動車用バッテリーのよくある質問」では、バッテリー液は無色透明の硫酸で、充電されたときの硫酸濃度は約37％、腐食性が強く非常に危険とされています。体や衣服に付いた場合は多量の水で硫酸分を洗い流すよう案内されています。",
  },
  {
    title: "火気や火花で引火・爆発するおそれがある",
    body: "電池工業会の「自動車用バッテリーの点検時のポイント」では、充電時や自己放電時に発生する水素ガスに火花などが引火すると爆発することがあるとされています。たばこの火などを近づけない、端子に金属工具が触れて火花が出ないようにする、乾いた布で拭くと静電気で引火爆発するおそれがある、といった注意が挙げられています。",
  },
  {
    title: "傾けたり倒したりしない",
    body: "同じよくある質問では、傾けたりして電解液をこぼさないよう注意を促しています。車から外したバッテリーを運ぶときは、立てたまま、液口を上にして持ち運んでください。",
  },
];

const steps = [
  {
    title: "種類を確認する",
    body: "本体の表示で、エンジン始動用の鉛バッテリーかどうか、自動車用か二輪車用かを確認します。鉛バッテリー以外の電池は扱いが異なります。",
  },
  {
    title: "購入した販売会社に問い合わせる",
    body: "カー用品店、ガソリンスタンド、整備工場など、バッテリーを購入した販売会社に引き取りの可否と費用を問い合わせます。購入先が分からない場合は、近くの販売店やSBRAに相談してください。SBRAの電話番号は03-5425-2080です（受付は平日9:00〜17:00、土日祝・夏季休暇・年末年始を除く）。",
  },
  {
    title: "立てたまま、火気のない場所に保管する",
    body: "引き渡すまでの間は、直射日光や火気を避け、倒れないように立てて保管します。端子に金属が触れないようにしておくと安全です。",
  },
  {
    title: "立てたまま運んで引き渡す",
    body: "車に積む場合は、倒れないように固定し、液がこぼれても困らないように下に厚手の袋などを敷いて運びます。",
  },
];

const faqs: Faq[] = [
  {
    q: "車のバッテリーは無料で引き取ってもらえますか。",
    a: "公式に「個人のバッテリーは無料」とする案内は確認できませんでした。SBRAの無償回収は登録した排出事業者向けの仕組みです。個人で使っていたバッテリーは、購入した販売会社に引き取りの可否と費用を確認してください。",
  },
  {
    q: "自治体のごみに出せますか。",
    a: "収集しない自治体があります。たとえば横浜市の「ごみと資源物の出し方一覧表」では、バッテリー（防災用・車など）は「販売店へ相談」とされ、収集車の火災の原因になるため集積場所に出さないよう注意されています。お住まいの自治体の案内を確認してください。",
  },
  {
    q: "バイクのバッテリーも同じですか。",
    a: "二輪車用の鉛バッテリーもSBRAの回収の対象に含まれます。家庭で使っていた物は、購入した販売会社に相談してください。電動バイクのリチウムイオンバッテリーは扱いが異なります。",
  },
  {
    q: "液が漏れているバッテリーはどうすればよいですか。",
    a: "素手で触らず、ゴム手袋と保護めがねを着けて扱ってください。電池工業会は、液が体や衣服に付いた場合は多量の水で洗い流すよう案内しています。漏れている物は無理に運ばず、販売会社に状態を伝えて相談してください。",
  },
];

const sources: Source[] = [
  { label: "電池の捨て方ナビ（使用済み電池の処分についてのお問合せ）", org: "一般社団法人 電池工業会", url: "https://baj.or.jp/reuse_and_recycle/recycle/disposal.html" },
  { label: "自動車用バッテリーのリサイクル（事業者向け）", org: "一般社団法人 電池工業会", url: "https://baj.or.jp/reuse_and_recycle/recycle_car.html" },
  { label: "自動車用バッテリーのよくある質問", org: "一般社団法人 電池工業会", url: "https://baj.or.jp/safety/car/car06.html" },
  { label: "自動車用バッテリーの点検時のポイント", org: "一般社団法人 電池工業会", url: "https://baj.or.jp/safety/car/10.html" },
  { label: "よくある質問", org: "一般社団法人 鉛蓄電池再資源化協会（SBRA）", url: "https://www.sbra.or.jp/faq/faq01.html" },
  { label: "リサイクルのしくみ", org: "一般社団法人 鉛蓄電池再資源化協会（SBRA）", url: "https://www.sbra.or.jp/recycle/recycle01.html" },
  { label: "取扱いバッテリーについて", org: "一般社団法人 鉛蓄電池再資源化協会（SBRA）", url: "https://www.sbra.or.jp/battery/battery03.html" },
  { label: "ごみの分別を調べる（ごみと資源物の出し方一覧表）", org: "横浜市", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/dashikata.html" },
];

const related: Related[] = [
  { href: "/lithium-battery-shobun/", label: "リチウムイオン電池の処分", desc: "小型の充電式電池の出し方" },
  { href: "/tire-shobun/", label: "タイヤの処分方法", desc: "販売店での引き取りと注意点" },
  { href: "/bike-shobun/", label: "バイクの処分方法", desc: "二輪車リサイクルと廃車手続き" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの出し方", desc: "スプレー缶・電池など" },
  { href: "/kuruma-shanai-seiri/", label: "車内・カー用品の整理と処分", desc: "車に積んだままの物の片付け" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜車のバッテリーの処分で押さえる前提" },
    { href: "#anzen", label: "2｜扱うときの3つの注意" },
    { href: "#steps", label: "3｜バッテリーを処分する4ステップ" },
    { href: "#faq", label: "4｜よくある質問" },
    { href: "#shutten", label: "5｜出典・参考にした公式情報" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="車のバッテリーの処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "車のバッテリーの処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          車やバイクを手放したあと、交換した古いバッテリーが車庫の隅に残っていることがあります。自動車用の鉛バッテリーは重く、中に硫酸が入っているため、自治体のごみ集積場所に出さないよう案内されている地域もあります。
        </P>
        <P>
          この記事では、一般社団法人電池工業会と一般社団法人鉛蓄電池再資源化協会（SBRA）の公式ページを2026年11月1日に開いて確認した内容をもとに、家庭のバッテリーの引き取り先と、運ぶまでの安全な扱い方を整理しました。
        </P>
      </header>

      <Summary
        points={[
          "家庭で使った車・バイクの鉛バッテリーは、購入した販売会社に問い合わせるのが基本",
          "SBRAの無償回収は登録した排出事業者向けの仕組みで、個人が直接頼むものではない",
          "バッテリー液は濃度約37％の硫酸で、水素ガスに引火して爆発するおそれもある",
          "自治体のごみ集積場所には出さず、立てたまま火気を避けて保管・運搬する",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">車のバッテリーの処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="anzen" num="2">扱うときの3つの注意</H2>
      <Cards items={safety} tone="warn" />

      <H2 id="steps" num="3">バッテリーを処分する4ステップ</H2>
      <Steps items={steps} />
      <P className="mt-6">
        車庫の片付けで一緒に出てくることの多いタイヤや塗料は<A href="/tire-shobun/">タイヤの処分方法</A>と<A href="/toryou-penki-shobun/">ペンキ・塗料の処分方法</A>、乾電池やモバイルバッテリーなど分別が難しい物は<A href="/bunbetsu-muzukashii-gomi/">分別が難しいごみの出し方</A>で解説しています。片付け業者に頼む場合は、バッテリーを引き取れるか、どこで処分するかを見積もりの段階で確認してください。
      </P>
      <RankingCta />

      <H2 id="faq" num="4">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="5">出典・参考にした公式情報</H2>
      <P>本記事の制度・注意事項の記述は、以下の公式情報にもとづいています。横浜市の案内は、自治体の扱いの一例として引用しています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="6">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、電池工業会・鉛蓄電池再資源化協会・横浜市の公式ページを2026年11月1日に確認した内容にもとづく一般的な情報です。引き取りの可否や費用は販売会社ごとに、ごみとしての扱いは自治体ごとに異なります。必ず依頼先とお住まいの自治体の最新の案内をご確認ください。事業で使用したバッテリーは特別管理産業廃棄物の扱いになると電池工業会は案内しています。
      </p>
    </article>
  );
}
