import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";
import { mainMakers, otherMakers, RKC_URL } from "@/data/kadenRecycleFees";

const PATH = "/terebi-shobun/";
const TITLE = "テレビの処分方法｜リサイクル料金はメーカーとサイズで決まる";
const DESC =
  "テレビは家電リサイクル法の対象で粗大ごみに出せません。液晶・有機EL・プラズマ式とブラウン管式の大小区分（15V型以下が小）、メーカー別のリサイクル料金（家電リサイクル券センターで2026年11月1日確認・税込）、販売店・自治体・指定引取場所への持ち込みの使い分け、対象外になるモニターやデータ消去の注意点を公式情報にもとづいて解説します。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const tvRows = [...mainMakers, ...otherMakers].filter((r) => [r.btv_s, r.btv_l, r.tv_s, r.tv_l].some((v) => v !== "—"));

const basics = [
  {
    title: "テレビは家電リサイクル法の対象で、粗大ごみには出せない",
    body: "家電製品協会の解説「テレビの処分方法を解説！ 知っておきたい正しい方法とは」では、テレビは家電リサイクル法の対象製品のため粗大ごみとして処分できないとされています。対象はブラウン管式テレビと、液晶・有機EL・プラズマ式テレビです。処分するときは、収集・運搬料金とリサイクル料金を支払って、法律にもとづく方法で引き渡します。",
  },
  {
    title: "対象になるテレビ、ならないテレビ",
    body: "家電リサイクル券センターの対象廃棄物一覧では、液晶・有機EL・プラズマ式テレビのほか、HDD・DVD等内蔵テレビ、チューナー分離型テレビ、ラジカセ一体型テレビなどが対象とされ、チューナーレステレビとして販売されているものも含むと注記されています。一方、パソコン用のディスプレイモニターや、病院・旅館などのコインボックス内蔵型テレビ、プロジェクションテレビなどは対象外です。パソコンモニターはパソコンリサイクルの扱いになります。",
  },
  {
    title: "リサイクル料金は「メーカー」と「大小区分」で決まる",
    body: "液晶・有機EL・プラズマ式テレビは15V型以下が小、16V型以上が大、ブラウン管式テレビは15型以下が小、16型以上が大です。型番の最初の2桁が画面サイズになっている場合が多く、小数点で表示されている場合は四捨五入すると案内されています。同じ大きさでもメーカーによって料金が異なるため、本体の表示でメーカー名と画面サイズを確認してください。",
  },
];

const routes = [
  {
    title: "ルート1 買い替える店、または購入した店に引き取ってもらう",
    body: "家電製品協会の解説では、買い替えの場合は購入する販売店に、処分だけの場合も購入した販売店が分かればその販売店に引き取りを依頼するとされています。引っ越しで購入店が遠くなった場合も、引っ越し先に同じ販売店の別店舗があれば引き取ってもらえると説明されています。リサイクル料金と、販売店が定める収集・運搬料金がかかります。",
  },
  {
    title: "ルート2 自治体に問い合わせて案内された方法で出す",
    body: "購入した店が分からない場合は、お住まいの市区町村に相談する方法があります。地域によっては、自治体が提携している収集運搬業者が家庭から家電4品目を引き取ってくれることもあるとされていますが、手続きは市区町村ごとに異なるため、事前に問い合わせてください。",
  },
  {
    title: "ルート3 自分で指定引取場所に持ち込む",
    body: "指定引取場所はメーカーが使用済み製品を引き取る拠点で、排出者が自分で持ち込むこともできます。郵便局で家電リサイクル券（料金郵便局振込方式）を使ってリサイクル料金を払い込み、テレビと一緒に持ち込みます。家電製品協会の解説では、この場合は収集・運搬料金がかからないとされています。",
  },
  {
    title: "ルート4 まだ使えるならリユースショップやフリマで譲る",
    body: "故障しておらず他の人が使える状態なら、リユースショップへの売却や譲渡も可能とされています。家電製品協会は、明らかに中古品として使えない物を「リユース品として引き取る」とうたう業者には注意が必要で、買い取りを頼む場合は古物商の許可を確認するよう呼びかけています。",
  },
];

const steps = [
  {
    title: "本体の表示でメーカー名・型番・画面サイズを確認する",
    body: "テレビ前面の型番か、背面の定格表示で画面サイズを確認します。15V型以下か16V型以上かで料金区分が変わります。",
  },
  {
    title: "録画データや設定などの個人情報を消す",
    body: "家電製品協会の解説では、テレビには個人情報が保存されていることがあるため、処分前に設定などを確認して削除し、内蔵HDDに残ったデータも削除や初期化をしておくことが勧められています。外付けHDDをつないでいた場合は、HDDを外しておきます。",
  },
  {
    title: "リモコンの電池とテレビ台を分けておく",
    body: "対象廃棄物の一覧では、ワイヤレスリモコン（電池を除く）や着脱式の付属専用スピーカー、電源コード・スタンドなどの付属物は一緒に引き取れますが、リモコン用の電池、テレビ台、取扱説明書などの印刷物は一緒に引き取れないとされています。",
  },
  {
    title: "引き渡しのルートを選び、料金を確認する",
    body: "販売店や自治体の案内する業者に頼む場合はリサイクル料金と収集・運搬料金の合計を、自分で指定引取場所に持ち込む場合は下の表のリサイクル料金と郵便局の払込手数料を確認します。",
  },
  {
    title: "家電リサイクル券の控えを保管する",
    body: "家電リサイクル券には、販売店が発行する「料金販売店回収方式」と、郵便局で払い込む「料金郵便局振込方式」があります。控えに書かれたお問合せ管理票番号で、メーカーが指定引取場所で引き取ったかを家電リサイクル券センターのサイトで確認できます。",
  },
];

const faqs: Faq[] = [
  {
    q: "32型の液晶テレビは「大」と「小」のどちらですか。",
    a: "液晶・有機EL・プラズマ式テレビは16V型以上が「大」なので、32型は「大」の料金区分です。15V型以下が「小」です。",
  },
  {
    q: "テレビのリサイクル料金はいくらですか。",
    a: "メーカーと大小区分で異なります。2026年11月1日に確認した家電リサイクル券センターの料金一覧では、液晶・有機EL・プラズマ式テレビ（大）はパナソニック（株）・TVS REGZA（株）・シャープ（株）・ソニー（株）などが2,970円、指定法人の料金が3,700円などです。いずれも税込で、収集・運搬料金は含みません。",
  },
  {
    q: "パソコン用のモニターも家電リサイクルで出せますか。",
    a: "出せません。家電リサイクル券センターの対象廃棄物一覧では、ディスプレイモニターは家電リサイクルの対象外で、パソコンモニターはパソコンリサイクルの扱いとされています。メーカーの回収窓口は「パソコンの処分方法」の記事にまとめています。",
  },
  {
    q: "チューナーのないテレビ（チューナーレステレビ）はどうなりますか。",
    a: "家電リサイクル券センターの対象廃棄物一覧では、液晶・有機EL式モニターの注記で、チューナーレステレビとして販売されているものも含むとされています。扱いに迷う場合は、メーカーか家電リサイクル券センターに確認してください。",
  },
  {
    q: "無料で回収してくれる業者に渡してもよいですか。",
    a: "家電製品協会は、家庭の廃棄物を回収する業者には自治体の一般廃棄物収集運搬業許可や委託が必要で、無料をうたいながら後から高額を請求される例があると注意を促しています。業者に頼む場合は許可や処分のルートを確認してください。",
  },
];

const sources: Source[] = [
  { label: "テレビの処分方法を解説！ 知っておきたい正しい方法とは", org: "一般財団法人家電製品協会", url: "https://www.aeha-kadenrecycle.com/select/tidbits/tv-disposal.html" },
  { label: "再商品化等料金一覧（家電リサイクル料金）", org: "一般財団法人家電製品協会 家電リサイクル券センター", url: RKC_URL },
  { label: "対象廃棄物（家電4品目）一覧", org: "一般財団法人家電製品協会 家電リサイクル券センター", url: "https://www.rkc.aeha.or.jp/recycleticket/target_items.html" },
  { label: "料金郵便局振込方式", org: "一般財団法人家電製品協会 家電リサイクル券センター", url: "https://www.rkc.aeha.or.jp/recycleticket/post_office_transfer/" },
  { label: "消費者の方へ（メーカー引取確認）", org: "一般財団法人家電製品協会 家電リサイクル券センター", url: "https://www.rkc.aeha.or.jp/consumer/" },
  { label: "指定引取場所検索", org: "一般財団法人家電製品協会", url: "https://www.aeha-kadenrecycle.com/rkcmap" },
  { label: "ご注意ください！あなたの周りの不法な回収業者", org: "一般財団法人家電製品協会", url: "https://www.aeha-kadenrecycle.com/select/tidbits/tidbits01.html" },
  { label: "「リユース品（中古品）として回収します」にご注意！", org: "一般財団法人家電製品協会", url: "https://www.aeha-kadenrecycle.com/select/tidbits/tidbits02.html" },
];

const related: Related[] = [
  { href: "/kaden-recycle-ryokin-maker/", label: "家電リサイクル料金のメーカー別一覧", desc: "エアコン・冷蔵庫・洗濯機も含む全品目" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "4品目の手放し方の全体像" },
  { href: "/pc-shobun-recycle/", label: "パソコンの処分方法", desc: "パソコンモニターはこちらの扱い" },
  { href: "/kiroku-media-shobun/", label: "記録メディアの処分", desc: "録画ディスクやHDDの片付け" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップ買取との併用", desc: "まだ使える物の手放し方" },
  { href: "/muryou-kaishuu-chuui/", label: "「無料回収」をうたう業者の注意点", desc: "トラブルを避ける確認事項" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜テレビの処分で押さえる前提" },
    { href: "#ryokin", label: "2｜メーカー別のテレビのリサイクル料金" },
    { href: "#route", label: "3｜テレビを手放す4つのルート" },
    { href: "#steps", label: "4｜テレビを処分する5ステップ" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#shutten", label: "6｜出典・参考にした公式情報" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="テレビの処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "テレビの処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          実家の片付けや引っ越しでは、使わなくなった液晶テレビや古いブラウン管テレビが何台も出てくることがあります。テレビは粗大ごみに出せない家電の代表で、メーカーと画面サイズによってリサイクル料金が変わります。
        </P>
        <P>
          この記事では、一般財団法人家電製品協会と家電リサイクル券センターの公式情報をもとに、テレビの大小区分、メーカー別のリサイクル料金、手放し方のルートと手順をまとめました。料金は2026年11月1日に確認した税込金額です。手続きの前に公式の料金一覧で最新の金額をご確認ください。
        </P>
      </header>

      <Summary
        points={[
          "テレビは家電リサイクル法の対象で、粗大ごみではなく販売店・自治体の案内・指定引取場所のいずれかで引き渡す",
          "液晶・有機EL・プラズマ式は15V型以下が小、16V型以上が大で、料金はメーカーごとに異なる",
          "販売店などに頼むと収集・運搬料金が別にかかり、指定引取場所に自分で持ち込めばかからない",
          "パソコン用モニターは対象外でパソコンリサイクルの扱い。処分前に録画データなどを消しておく",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">テレビの処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="ryokin" num="2">メーカー別のテレビのリサイクル料金</H2>
      <P>
        家電リサイクル券センターの料金一覧から、テレビの料金が表示されている主なメーカーを転記しました。スマートフォンでは表を横にスクロールしてご覧ください。エアコン・冷蔵庫・洗濯機を含む全品目の表は<A href="/kaden-recycle-ryokin-maker/">家電リサイクル料金のメーカー別一覧</A>にあります。
      </P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left">製造業者等名（コード）</th>
              <th className="px-3 py-2.5 text-left">液晶・有機EL・プラズマ（小）15V型以下</th>
              <th className="px-3 py-2.5 text-left">液晶・有機EL・プラズマ（大）16V型以上</th>
              <th className="px-3 py-2.5 text-left">ブラウン管（小）15型以下</th>
              <th className="px-3 py-2.5 text-left">ブラウン管（大）16型以上</th>
            </tr>
          </thead>
          <tbody>
            {tvRows.map((r, i) => (
              <tr key={r.name} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold border-t border-border align-top">
                  {r.name}
                  {r.code ? <span className="font-normal text-text-muted">（{r.code}）</span> : null}
                </td>
                <td className="px-3 py-2.5 border-t border-border align-top whitespace-nowrap">{r.tv_s}</td>
                <td className="px-3 py-2.5 border-t border-border align-top whitespace-nowrap">{r.tv_l}</td>
                <td className="px-3 py-2.5 border-t border-border align-top whitespace-nowrap">{r.btv_s}</td>
                <td className="px-3 py-2.5 border-t border-border align-top whitespace-nowrap">{r.btv_l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典：家電リサイクル券センター「再商品化等料金一覧（家電リサイクル料金）」（2026年11月1日確認・税込）。「—」は一覧に料金の表示がない区分、「指定法人」は指定法人の料金（液晶等（小）3,100円・（大）3,700円、ブラウン管（小）3,100円・（大）3,700円）を参照する区分、「承継先を確認」は一覧に「※承継先をご確認下さい」と表示されている区分です。東芝ライフスタイル（株）のテレビは承継先の確認が求められており、テレビの料金はTVS REGZA（株）の行に表示されています。収集・運搬料金は含みません。
      </p>

      <H2 id="route" num="3">テレビを手放す4つのルート</H2>
      <Cards items={routes} />

      <H2 id="steps" num="4">テレビを処分する5ステップ</H2>
      <Steps items={steps} />
      <P className="mt-6">
        録画用のブルーレイディスクや外付けHDDをまとめて処分する場合は<A href="/kiroku-media-shobun/">記録メディアの処分</A>、パソコン用のモニターは<A href="/pc-shobun-recycle/">パソコンの処分方法</A>をご覧ください。家全体の片付けの中で家電がまとまって出る場合は、業者の見積もりの段階で、テレビをどのルートで処分するか、リサイクル料金と収集・運搬料金がいくらかを確認してください。業者の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>にまとめています。
      </P>
      <RankingCta />

      <H2 id="faq" num="5">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="6">出典・参考にした公式情報</H2>
      <P>本記事の料金・制度・手順の記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="7">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事のリサイクル料金は、家電リサイクル券センターの料金一覧を2026年11月1日に確認した時点の税込金額です。料金は製造業者等が定めており、改定されることがあります。収集・運搬料金は販売店などが定めています。手続きの前に必ず公式の料金一覧と、依頼先の最新の案内をご確認ください。
      </p>
    </article>
  );
}
