import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/compare/curama-vs-meetsmore/";
const TITLE = "くらしのマーケットとミツモアの違い｜不用品回収の頼み方で比べる";
const DESC =
  "不用品回収の業者探しでよく使われるくらしのマーケットとミツモアを、両社の公式ページ（2026年11月1日確認）にもとづいて比べます。料金を見て選ぶか見積もりを待つかという仕組みの違い、利用料、支払い方法、キャンセル料、損害賠償の補償、口コミの仕組み、業者の許可の考え方と、状況別の使い分けを整理しました。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";
const C_DISPOSAL = "https://curama.jp/disposal/";
const M_DISPOSAL = "https://meetsmore.com/services/unwanted-item-pick-up";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const rows: { k: string; c: string; m: string }[] = [
  {
    k: "仕組み",
    c: "出張・訪問サービスの依頼ができる「インターネット商店街」。店舗が事前に料金を提示する「見積もり不要」が前提で、料金・口コミ・プロフィールを見て店舗を選び、予約リクエストを送る",
    m: "簡単な質問に答えると、条件に合う事業者から最大5件の見積もりが届く。届いた見積もりを比べて依頼先を選ぶ",
  },
  {
    k: "不用品回収の料金の見え方",
    c: "カテゴリページに相場を掲載（軽トラック1台 ¥8,000〜¥15,000、2トントラック1台 ¥25,000〜¥39,000）。各店舗の料金は予約前に表示",
    m: "カテゴリページに品目別の相場を掲載（例：シングルベッド（フレーム+マットレス）1,550〜3,300円。直近2年間の見積もり料金より算出、2026年10月31日更新）。実際の金額は届いた見積もりで確認",
  },
  {
    k: "利用者の利用料",
    c: "会員登録料や利用料は無料。サービス料金は店舗へ直接支払う",
    m: "アカウント登録や見積もり依頼で料金は発生しない。支払いが発生するのはプロに仕事を依頼するとき",
  },
  {
    k: "支払い方法",
    c: "オンラインカード決済・後払い決済・現金払いがあり、店舗やカテゴリで異なる",
    m: "特定商取引法に基づく表記ではクレジットカード決済・現地決済・銀行振込・後払い",
  },
  {
    k: "キャンセル料",
    c: "特定商取引法に基づく表記に、役務提供日5日前まで無料、4日前〜2日前は予約金額の25%、前日50%、当日100%などの規定あり",
    m: "役務提供者によってはキャンセル料が発生する場合があるため、契約前に役務提供者に確認するよう案内",
  },
  {
    k: "損害賠償の補償",
    c: "損害賠償補償制度。くらしのマーケット経由の予約全体で年間の補償限度額は最高1億円。保険料はかからず、予約すべてが対象（対象外の条件あり）",
    m: "ミツモア損害賠償補償。最高1億円（預かり品の保管中の事故は1,000万円が限度）。見積もりに「ミツモア損害補償付き」の表示があるものなどが対象",
  },
  {
    k: "その他の保証",
    c: "—",
    m: "事業者と連絡が取れなくなった場合などに作業実施費用を最大10万円まで保証する制度があり、便利屋（不用品回収を含む）が対象カテゴリ（条件あり）",
  },
  {
    k: "口コミ",
    c: "予約のステータスが「完了」になるまで口コミは投稿できない。投稿後の修正・再投稿はできない",
    m: "利用規約で、発注者が受注者と成約した場合に口コミを投稿できると規定",
  },
  {
    k: "業者とのやりとり",
    c: "予約前はサービスページから質問のメッセージを送れる。予約後はメッセージスレッドが作られ、アプリから店舗に無料で電話もできる",
    m: "見積もり依頼から契約までオンラインで完結し、チャットで見積もり内容を相談できる",
  },
  {
    k: "運営会社",
    c: "みんなのマーケット株式会社（東京都港区南青山）",
    m: "株式会社ミツモア（東京都中央区銀座）",
  },
];

const choose = [
  {
    title: "くらしのマーケットが合いやすい人",
    body: "トラックの大きさで料金が決まっている店舗を、口コミや料金を見ながら自分で選びたい人に向いています。予約前に料金が表示されるため、比べる手間は自分でかける必要がありますが、見積もりの連絡を待たずに日程を決めやすい仕組みです。キャンセル料の規定が特定商取引法に基づく表記に明記されているため、予約前に確認できます。",
  },
  {
    title: "ミツモアが合いやすい人",
    body: "品目や量、運び出しの条件を伝えて、複数の事業者から見積もりを集めたい人に向いています。質問に答えるだけで最大5件の見積もりが届き、チャットで内容を詰められます。品目が多くて料金の当たりがつけにくい場合や、自分で店舗を探す時間が取れない場合に使いやすい仕組みです。",
  },
  {
    title: "どちらを使う場合も確認したいこと",
    body: "実際に作業するのは、どちらも登録している各事業者です。家電製品協会は、家庭の廃棄物を回収する業者には自治体の一般廃棄物収集運搬業許可や自治体からの委託が必要だと注意を促しています。ミツモアの不用品回収ページでも、中古品の買取・販売に必要な古物商許可、または一般廃棄物収集運搬許可などの許可が必要だと説明されています。依頼する前に、処分する物をどの許可・ルートで扱うのか、追加料金の条件、キャンセル料を事業者に確認してください。",
  },
];

const faqs: Faq[] = [
  {
    q: "くらしのマーケットとミツモアの一番の違いは何ですか。",
    a: "くらしのマーケットは、店舗が事前に提示した料金と口コミを見て自分で店舗を選んで予約する仕組みです。ミツモアは、質問に答えると条件に合う事業者から最大5件の見積もりが届き、その中から選ぶ仕組みです。",
  },
  {
    q: "どちらも利用料はかかりますか。",
    a: "両社の公式ページでは、くらしのマーケットは会員登録料や利用料が無料、ミツモアはアカウント登録や見積もり依頼で料金が発生しないとされています。作業の料金は依頼した事業者に支払います。",
  },
  {
    q: "物が壊れた場合の補償はありますか。",
    a: "くらしのマーケットには損害賠償補償制度（年間の補償限度額は最高1億円）、ミツモアにはミツモア損害賠償補償（最高1億円）があります。どちらも対象外になる条件があるため、公式ページで対象と手続きを確認してください。",
  },
  {
    q: "家電リサイクル法の対象品も頼めますか。",
    a: "依頼先の事業者によって対応が異なります。エアコン・テレビ・冷蔵庫・洗濯機は家電リサイクル法にもとづく処分が必要で、リサイクル料金がかかります。見積もりの段階で、どのように処分するか、リサイクル料金を含む総額がいくらかを確認してください。",
  },
];

const sources: Source[] = [
  { label: "不用品回収を料金と口コミで比較！おすすめ事業者ランキング", org: "くらしのマーケット（公式）", url: C_DISPOSAL },
  { label: "はじめての方へ", org: "くらしのマーケット（公式）", url: "https://curama.jp/about/" },
  { label: "損害賠償補償制度", org: "くらしのマーケット（公式）", url: "https://curama.jp/guarantee/" },
  { label: "くらしのマーケットの安心・安全", org: "くらしのマーケット（公式）", url: "https://curama.jp/safety/" },
  { label: "特定商取引法に基づく表記", org: "くらしのマーケット（公式）", url: "https://curama.jp/law/" },
  { label: "くらしのマーケットのご利用全般について", org: "くらしのマーケット FAQ（公式）", url: "https://faq.curama.jp/docs/user/general-service/" },
  { label: "支払いについて", org: "くらしのマーケット FAQ（公式）", url: "https://faq.curama.jp/docs/user/payment/" },
  { label: "口コミについて", org: "くらしのマーケット FAQ（公式）", url: "https://faq.curama.jp/docs/user/reviews/" },
  { label: "店舗への連絡・メッセージについて", org: "くらしのマーケット FAQ（公式）", url: "https://faq.curama.jp/docs/user/contact-and-messages/" },
  { label: "店舗・サービス探しについて", org: "くらしのマーケット FAQ（公式）", url: "https://faq.curama.jp/docs/user/finding-service-providers/" },
  { label: "不用品回収でおすすめ業者を費用や口コミで比較", org: "ミツモア（公式）", url: M_DISPOSAL },
  { label: "ミツモア - くらべて選んで明朗会計", org: "ミツモア（公式）", url: "https://meetsmore.com/" },
  { label: "ミツモア損害賠償補償", org: "ミツモア（公式）", url: "https://meetsmore.com/guarantee" },
  { label: "最大10万円保証", org: "ミツモア（公式）", url: "https://sites.meetsmore.com/assurance" },
  { label: "特定商取引法に基づく表記", org: "ミツモア（公式）", url: "https://meetsmore.com/policies/law" },
  { label: "ミツモア利用規約", org: "ミツモア（公式）", url: "https://meetsmore.com/policies/terms" },
  { label: "ご注意ください！あなたの周りの不法な回収業者", org: "一般財団法人家電製品協会", url: "https://www.aeha-kadenrecycle.com/select/tidbits/tidbits01.html" },
];

const related: Related[] = [
  { href: "/review/kurashi-market/", label: "くらしのマーケットの口コミ・評判", desc: "当サイトのレビュー" },
  { href: "/review/mitsumoa/", label: "ミツモアの口コミ・評判", desc: "当サイトのレビュー" },
  { href: "/mitsumorisho-mikata/", label: "見積書の見方", desc: "追加料金を防ぐ確認ポイント" },
  { href: "/gyousha-kyoka-kakunin/", label: "片付け業者の許可の確認方法", desc: "一般廃棄物収集運搬業許可など" },
  { href: "/muryou-kaishuu-chuui/", label: "「無料回収」をうたう業者の注意点", desc: "トラブルを避ける確認事項" },
  { href: "/kaden-recycle-ryokin-maker/", label: "家電リサイクル料金のメーカー別一覧", desc: "見積もりの前に確認" },
];

export default function Page() {
  const toc = [
    { href: "#hikaku", label: "1｜仕組みと条件の比較表" },
    { href: "#tsukaiwake", label: "2｜どちらを使うかの目安" },
    { href: "#faq", label: "3｜よくある質問" },
    { href: "#shutten", label: "4｜出典・参考にした公式情報" },
    { href: "#related", label: "5｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="くらしのマーケットとミツモアの違い" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "くらしのマーケットとミツモアの違い" }]} />

      <header className="mt-2">
        <ArticleHeader label="サービス比較" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          不用品回収の業者を探すとき、くらしのマーケットとミツモアはどちらも候補に挙がりやすいサービスです。どちらも地域の事業者に作業を頼むための仕組みですが、料金を見て自分で選ぶか、見積もりが届くのを待って選ぶかという点が大きく違います。
        </P>
        <P>
          この記事では、両社の公式ページとFAQ、特定商取引法に基づく表記、利用規約を2026年11月1日に開いて確認した内容だけをもとに、不用品回収を頼む場面で違いが出るポイントを整理しました。料金・補償・規定は変わることがあるため、依頼の前に各社の最新の案内をご確認ください。
        </P>
      </header>

      <Summary
        points={[
          "くらしのマーケットは、店舗が事前に提示した料金と口コミを見て自分で選んで予約する仕組み",
          "ミツモアは、質問に答えると条件に合う事業者から最大5件の見積もりが届く仕組み",
          "利用者の利用料はどちらも無料で、作業料金は依頼した事業者に支払う",
          "どちらも最高1億円の損害賠償の補償制度があるが、対象外の条件がある",
        ]}
      />

      <Toc items={toc} />

      <H2 id="hikaku" num="1">仕組みと条件の比較表</H2>
      <P>両社の公式ページで2026年11月1日に確認した内容です。スマートフォンでは表を横にスクロールしてご覧ください。</P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left whitespace-nowrap">項目</th>
              <th className="px-3 py-2.5 text-left">くらしのマーケット</th>
              <th className="px-3 py-2.5 text-left">ミツモア</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.k} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold border-t border-border align-top whitespace-nowrap">{r.k}</td>
                <td className="px-3 py-2.5 border-t border-border align-top leading-6">{r.c}</td>
                <td className="px-3 py-2.5 border-t border-border align-top leading-6">{r.m}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典：各社の公式ページ・FAQ・特定商取引法に基づく表記・利用規約（2026年11月1日確認）。各ページのURLは「出典・参考にした公式情報」に掲載しています。相場や件数の表示は日々変わります。ミツモアのヘルプセンターの詳細なキャンセル・支払いの案内は、同日に閲覧できなかったため掲載していません。
      </p>

      <H2 id="tsukaiwake" num="2">どちらを使うかの目安</H2>
      <Cards items={choose} />
      <P>
        当サイトでの評価や利用者の声は<A href="/review/kurashi-market/">くらしのマーケットの口コミ・評判</A>と<A href="/review/mitsumoa/">ミツモアの口コミ・評判</A>にまとめています。見積もりを受け取ったら<A href="/mitsumorisho-mikata/">見積書の見方</A>で追加料金の条件を確認し、業者の許可は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>で確かめてください。家電4品目が含まれる場合は、<A href="/kaden-recycle-ryokin-maker/">家電リサイクル料金のメーカー別一覧</A>でリサイクル料金の目安を確認できます。
      </P>
      <RankingCta />

      <H2 id="faq" num="3">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="4">出典・参考にした公式情報</H2>
      <P>本記事の比較は、以下の公式情報にもとづいています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="5">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、くらしのマーケットとミツモアの公式ページを2026年11月1日に確認した内容にもとづく比較です。両サービスとも、実際の作業は登録している各事業者が行い、料金・対応範囲・品質は事業者ごとに異なります。料金・補償・キャンセル規定は変更されることがあるため、依頼の前に必ず各社の最新の案内と事業者の説明をご確認ください。
      </p>
    </article>
  );
}
