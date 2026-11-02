import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/pc-shobun-recycle/";
const TITLE = "パソコンの処分方法｜メーカー回収（PCリサイクル）の申込先一覧";
const DESC =
  "パソコンとパソコン用モニターの処分方法を、パソコン3R推進協会（PC3R）と各メーカーの公式情報（2026年11月1日確認）で解説。PCリサイクルマークの有無による料金、メーカー別の申込窓口と回収再資源化料金、倒産・自作パソコンの扱い、エコゆうパック、小型家電リサイクルとの使い分け、データ消去の注意点をまとめました。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";
const PC3R_LIST = "https://www.pc3r.jp/";
const CENTER = "https://www.pc3rsupport.jp/home/pc_recycle_01.html?m_cd=J25";
const PC3R_SELF = "https://www.pc3rsupport.jp/home/pc_recycle_01.html?m_cd=J99";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const feeCols = ["デスクトップ本体", "ノートパソコン", "液晶ディスプレイ", "液晶一体型", "CRTディスプレイ", "CRT一体型"];

const feeRows: { name: string; note: string; fees: string[]; url: string }[] = [
  {
    name: "パソコン3R推進協会内 パソコンリサイクル受付センター（下の一覧のメーカー）",
    note: "振込手数料は別",
    fees: ["3,300円", "3,300円", "3,300円", "3,300円", "4,400円", "4,400円"],
    url: CENTER,
  },
  {
    name: "富士通クライアントコンピューティング（FMV）",
    note: "運送費を含む。本体＋液晶ディスプレイ7,260円、本体＋CRTディスプレイ8,360円",
    fees: ["3,630円", "3,630円", "3,630円", "3,630円", "4,730円", "4,730円"],
    url: "http://azby.fmworld.net/recycle/about_recycle.html?recyclefrom=top",
  },
  {
    name: "レノボ・ジャパン合同会社",
    note: "郵便振替・コンビニ振込とも手数料不要",
    fees: ["3,300円", "3,300円", "3,300円", "3,300円", "4,400円", "4,400円"],
    url: "https://www.lenovo.com/jp/ja/services-warranty/recycle/application",
  },
  {
    name: "サードウェーブ（Prime・Dosparaを含む）",
    note: "CRTの料金は掲載なし",
    fees: ["3,300円", "3,300円", "3,300円", "3,300円", "—", "—"],
    url: "https://www.dospara.co.jp/support/spr_recycle.html",
  },
  {
    name: "パソコン3R推進協会（倒産・撤退したメーカー、自作パソコン）",
    note: "振込手数料は別",
    fees: ["4,400円", "4,400円", "4,400円", "4,400円", "5,500円", "5,500円"],
    url: PC3R_SELF,
  },
];

const centerMakers =
  "アイリスオーヤマ、オーディーエス（SOTEC、オンキヨー、MOLを含む）、沖電気工業、Gateway、KOORUI（HKC JAPAN）、Surface（日本マイクロソフト）、サムスン電子ジャパン、三洋電機、JVCケンウッド（JVCケンウッド／日本ビクター）、JVCケンウッド（東京特殊電線／TOTOKU）、シャープ、アイワマーケティングジャパン、シャープ（旧シャープディスプレイソリューションズ）、Xiaomi（小米技術日本）、Joshin、ソニー、ソニーグループ、TSUKUMO（ヤマダデンキ）、TVS REGZA、TERRA（ヴォーテマン）、DELL、PHILIPS（NX商事）、eMachines、日本エイサー（ACER）、日本HP（COMPAQ、DECを含む）、Verbatim、VAIO、バッファロー、パナソニック コネクト、日立製作所、ビューソニックジャパン、HUAWEI、三菱電機、EIZO、三菱電機デジタルイノベーション、ワコム、HKC、AOC（NX商事）、ASUS、エプソンダイレクト、LG Electronics Japan";

const ownWindows: { name: string; url: string }[] = [
  { name: "NECパーソナルコンピュータ", url: "https://support.nec-lavie.jp/recyclesel/" },
  { name: "富士通クライアントコンピューティング", url: "http://azby.fmworld.net/recycle/" },
  { name: "Dynabook（東芝ブランドを含む）", url: "http://dynabook.com/pc/eco/recycle.htm" },
  { name: "レノボ・ジャパン合同会社", url: "https://www.lenovo.com/jp/ja/services-warranty/recycle/personal/" },
  { name: "サードウェーブ", url: "https://www.dospara.co.jp/support/spr_recycle.html" },
  { name: "インバースネット（KOUZIRO・FRONTIERを含む）", url: "http://ww2.frontier-direct.jp/support/pc_recycle/" },
  { name: "アイオーデータ", url: "http://www.iodata.jp/company/environment/recycle/display.htm" },
  { name: "グリーンハウス", url: "https://www.green-house.co.jp/eco/recycle/" },
  { name: "プリンストン", url: "http://www.princeton.co.jp/support/recycle_personal.html" },
  { name: "ベンキュージャパン", url: "https://www.benq.com/ja-jp/support/product-recycle/recycle.html" },
  { name: "ロジテックINAソリューションズ", url: "https://www.logitec.co.jp/company/environmental/recycling-individuals/" },
];

const basics = [
  {
    title: "家庭のパソコンはメーカーが回収・リサイクルする",
    body: "パソコン3R推進協会（PC3R）によると、PCリサイクルは「資源有効利用促進法」にもとづいて、家庭で不用になったパソコンをメーカーが回収・リサイクルする仕組みです。申し込みはほとんどのメーカーでインターネットからでき、回収は日本郵便のゆうパック（エコゆうパック）を使うため、全国どこからでも対応できるとされています。",
  },
  {
    title: "対象はパソコン本体とパソコン用ディスプレイ",
    body: "回収の対象機器は、デスクトップパソコン、ノートパソコン、CRTディスプレイ、液晶ディスプレイ、CRTディスプレイ一体型パソコン、液晶ディスプレイ一体型パソコンです。ワークステーション、サーバー、ワープロ、プリンターなどは回収の対象外のため、お住まいの自治体に問い合わせるよう案内されています。家電リサイクル券センターの対象廃棄物一覧でも、パソコンモニターはテレビではなくパソコンリサイクルの扱いとされています。",
  },
  {
    title: "PCリサイクルマークがあれば新たな料金はかからない",
    body: "PCリサイクルマークは、平成15年（2003年）10月以降に販売された家庭向けパソコンに貼られているマークで、このマークの付いたパソコンは廃棄する際に新たな料金を負担せずに廃棄できます。マークのないパソコン（平成15年9月までに購入された製品）は、回収再資源化料金がかかります。マークが付いていても、メーカーが倒産した場合などはパソコン3R推進協会が回収し、所定の料金が必要になると注記されています。",
  },
];

const steps = [
  {
    title: "メーカー名・型番・製品の種類を確認する",
    body: "申し込みの際に、製品カテゴリー（デスクトップ本体、ノートパソコン、液晶ディスプレイなど）や型番の入力を求められます。本体とディスプレイのメーカーが違う場合は、それぞれのメーカーに申し込みが必要です。",
  },
  {
    title: "PCリサイクルマークの有無を確かめる",
    body: "本体の側面や背面、底面などでマークを確認します。レノボのように、マークが付いていない対象製品にマークシールを無償で提供しているメーカーもあります。マークがなければ、下の表の回収再資源化料金を支払います。",
  },
  {
    title: "メーカーの窓口に申し込み、必要なら料金を払う",
    body: "PC3Rの「メーカー窓口一覧」から各メーカーの申込ページに進みます。有償の場合は、メーカーが案内する方法（郵便振込など）で料金を支払うと申し込みが完了します。メーカーが見当たらない場合は、PC3Rの「メーカー名が見当たらない場合」のページで、取り扱いメーカーの変更（例：IBMはレノボ、DEC・コンパックは日本HP）を確認できます。",
  },
  {
    title: "データを消去し、簡易梱包する",
    body: "PC3Rは、データの消去は利用者の責任で行うよう求めています。梱包は利用者が行い、郵送途中で破れない程度の簡易梱包でよいとされています。複数台を出す場合は1台ずつ梱包し、キーボードやマウスなどの標準添付品は同じ箱や袋に入れます。標準添付品以外の物は回収対象になりません。",
  },
  {
    title: "エコゆうパック伝票を貼り、集荷か郵便局への持ち込みで出す",
    body: "申し込み後にメーカーから「エコゆうパック伝票」が届きます。伝票を貼って郵便局に戸口集荷を依頼するか、郵便局に持ち込みます。コンビニエンスストア、郵便切手類販売所、簡易郵便局、郵便局以外のゆうパック取扱所では取り扱いができません。別途の輸送料金はかかりません。",
  },
];

const ngActions = [
  {
    title: "初期化しただけで手放す",
    body: "PC3Rのデータ消去の案内では、ごみ箱を空にする、初期化（フォーマット）する、リカバリーで工場出荷状態に戻すといった操作では、データが見えなくなっているだけで復元できる場合があるとされています。専用ソフトやサービスで消去するか、物理的・磁気的に破壊して読めなくすることが推奨されています。手順は「パソコン・スマホのデータ消去と処分方法」の記事も参考にしてください。",
  },
  {
    title: "ハードディスクを自分でハンマーで壊す",
    body: "同じ案内では、ハードディスクを取り出してハンマーなどで叩き潰すのは、記録媒体の盤がガラスでできていて粉砕すると危険なため、やめるよう呼びかけています。物理的な破壊は専門業者に依頼することが推奨されています。",
  },
  {
    title: "粗大ごみや不燃ごみに出す前提で考える",
    body: "PC3Rによると、パソコンはメーカー回収が中心で、多くの市区町村はごみとしての収集を停止してきました。現在は小型家電リサイクル法にもとづいて一部の市区町村や家電量販店でも回収していますが、回収する品目や方法は自治体・店舗ごとに異なります。出す前にお住まいの自治体の案内を確認してください。",
  },
];

const faqs: Faq[] = [
  {
    q: "PCリサイクルマークのない古いパソコンはいくらかかりますか。",
    a: "メーカーごとに異なります。2026年11月1日に確認したところ、パソコン3R推進協会内のパソコンリサイクル受付センターで受け付けるメーカーはデスクトップ本体・ノート・液晶ディスプレイが1台3,300円（税込）、CRTディスプレイが4,400円（税込）でした。富士通（FMV）はデスクトップ本体・ノートなどが3,630円（税込）、倒産したメーカーや自作パソコンを協会が回収する場合はデスクトップ本体・ノートが4,400円（税込）です。",
  },
  {
    q: "自作パソコンや、メーカーがなくなったパソコンはどうすればよいですか。",
    a: "倒産したメーカー、事業撤退したメーカーのパソコン、自作のパソコンは、パソコン3R推進協会が回収します。判断がつかない場合はパソコン3R推進協会のパソコンリサイクル受付センター（電話044-540-0576）に問い合わせるよう案内されています。",
  },
  {
    q: "ノートパソコンを家電量販店や自治体の回収ボックスに出してもよいですか。",
    a: "小型家電リサイクル法にもとづいて、パソコンを回収している市区町村や家電量販店もあります。PC3Rは、すべての店舗でパソコンを回収しているとは限らないため、回収の有無・方法・料金は各店舗や自治体で確認するよう案内しています。",
  },
  {
    q: "パソコン用モニターは家電リサイクル（テレビ）として出せますか。",
    a: "出せません。パソコン用のディスプレイはパソコンリサイクルの対象で、ディスプレイのメーカーに申し込みます。本体とディスプレイのメーカーが違う場合は、それぞれに申し込みが必要です。",
  },
  {
    q: "申し込みから回収までどのくらいかかりますか。",
    a: "窓口によって異なります。パソコン3R推進協会の受付ページでは、無償回収の製品のみなら10日前後、有償回収の製品が含まれる場合は14日前後かかるとされています。レノボは申し込みから回収まで2〜3週間程度と案内しています。",
  },
];

const sources: Source[] = [
  { label: "PC3R : : 一般社団法人 パソコン3R推進協会（メーカー窓口一覧）", org: "一般社団法人パソコン3R推進協会", url: PC3R_LIST },
  { label: "家庭系リサイクル", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/" },
  { label: "リサイクルの手順", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/recycle_flow.html" },
  { label: "PCリサイクルマークについて", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/pcrecycle_mark.html" },
  { label: "梱包と回収について", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/method.html" },
  { label: "メーカー名が見当たらない場合", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/noname.html" },
  { label: "データ消去について", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/data_erase.html" },
  { label: "小型家電リサイクルによるパソコンの回収", org: "一般社団法人パソコン3R推進協会", url: "https://www.pc3r.jp/home/koden.html" },
  { label: "家庭から排出されるパソコンの回収申込み | ご案内（メーカー窓口）", org: "一般社団法人パソコン3R推進協会 パソコンリサイクル受付センター", url: CENTER },
  { label: "家庭から排出されるパソコンの回収申込み | ご案内（倒産・撤退メーカー、自作パソコン）", org: "一般社団法人パソコン3R推進協会 パソコンリサイクル受付センター", url: PC3R_SELF },
  { label: "FMVパソコンリサイクル［リサイクル料金］", org: "富士通クライアントコンピューティング", url: "http://azby.fmworld.net/recycle/about_recycle.html?recyclefrom=top" },
  { label: "家庭系PC回収リサイクル・サービス", org: "レノボ・ジャパン", url: "https://www.lenovo.com/jp/ja/services-warranty/recycle/personal/" },
  { label: "お申込み（家庭系PC回収リサイクル・サービス）", org: "レノボ・ジャパン", url: "https://www.lenovo.com/jp/ja/services-warranty/recycle/application" },
  { label: "改正リサイクル法によるパソコンの回収について", org: "サードウェーブ（ドスパラ）", url: "https://www.dospara.co.jp/support/spr_recycle.html" },
  { label: "対象廃棄物（家電4品目）一覧（パソコンモニターの扱い）", org: "一般財団法人家電製品協会 家電リサイクル券センター", url: "https://www.rkc.aeha.or.jp/recycleticket/target_items.html" },
];

const related: Related[] = [
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去と処分方法", desc: "初期化だけで手放さないための手順" },
  { href: "/kogata-kaden-recycle/", label: "小型家電リサイクルの使い方", desc: "回収ボックスや自治体回収の考え方" },
  { href: "/terebi-shobun/", label: "テレビの処分方法", desc: "テレビは家電リサイクル法の対象" },
  { href: "/kaden-recycle-ryokin-maker/", label: "家電リサイクル料金のメーカー別一覧", desc: "エアコン・テレビ・冷蔵庫・洗濯機" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "故人のパソコン・スマホの扱い" },
  { href: "/cable-gadget-haisen-seiri/", label: "ケーブル・ガジェットの整理", desc: "周辺機器や配線の片付け" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜パソコンの処分で押さえる前提" },
    { href: "#ryokin", label: "2｜マークがない場合のメーカー別料金" },
    { href: "#madoguchi", label: "3｜メーカー別の申込窓口" },
    { href: "#steps", label: "4｜メーカー回収の5ステップ" },
    { href: "#ng", label: "5｜避けるべき3つの行動" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#shutten", label: "7｜出典・参考にした公式情報" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="パソコンの処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "パソコンの処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          押し入れや実家の書斎から、使わなくなったパソコンやブラウン管のモニターが出てくることは珍しくありません。パソコンは家電リサイクル法の対象ではなく、メーカーが回収する「PCリサイクル」が基本の処分ルートです。
        </P>
        <P>
          この記事では、パソコン3R推進協会（PC3R）と各メーカーの公式ページを2026年11月1日に開いて確認した内容をもとに、PCリサイクルマークの有無による料金の違い、メーカー別の申込窓口と回収再資源化料金、申し込みから発送までの手順をまとめました。料金や受付の条件は変わることがあるため、申し込みの前に各窓口の最新の案内をご確認ください。
        </P>
      </header>

      <Summary
        points={[
          "家庭のパソコンとパソコン用ディスプレイは、資源有効利用促進法にもとづいてメーカーが回収する",
          "2003年10月以降に販売された家庭向けパソコンでPCリサイクルマークがあれば、新たな料金はかからない",
          "マークがない場合の料金は窓口ごとに異なり、PC3Rの受付センター経由のメーカーはデスクトップ・ノートが1台3,300円（税込）",
          "倒産・撤退したメーカーや自作パソコンはパソコン3R推進協会が回収する。データ消去は利用者の責任",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">パソコンの処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="ryokin" num="2">マークがない場合のメーカー別料金</H2>
      <P>
        PCリサイクルマークのないパソコン・ディスプレイを出す場合の回収再資源化料金です。各窓口の公式ページで2026年11月1日に確認した税込金額を、1台あたりで転記しています。スマートフォンでは表を横にスクロールしてご覧ください。
      </P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left">窓口</th>
              {feeCols.map((c) => (
                <th key={c} className="px-3 py-2.5 text-left whitespace-nowrap">{c}</th>
              ))}
              <th className="px-3 py-2.5 text-left">備考</th>
            </tr>
          </thead>
          <tbody>
            {feeRows.map((r, i) => (
              <tr key={r.name} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold border-t border-border align-top">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{r.name}</a>
                </td>
                {r.fees.map((f, j) => (
                  <td key={j} className="px-3 py-2.5 border-t border-border align-top whitespace-nowrap">{f}</td>
                ))}
                <td className="px-3 py-2.5 border-t border-border align-top text-xs">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典：各窓口の公式ページ（2026年11月1日確認・税込・1台あたり）。「—」は公式ページに料金の掲載がない区分です。NECパーソナルコンピュータ、Dynabookなど、表にない自社窓口のメーカーの料金は、各社の窓口でご確認ください。
      </p>

      <H2 id="madoguchi" num="3">メーカー別の申込窓口</H2>
      <h3 className="font-bold text-text-primary mb-2">パソコン3R推進協会内の受付センターで申し込むメーカー</h3>
      <P>
        パソコン3R推進協会内のパソコンリサイクル受付センターの申込ページ（<A href={CENTER}>家庭から排出されるパソコンの回収申込み</A>）には、次のメーカーのパソコンとパソコン用ディスプレイの回収申込みを受け付けると掲載されています（2026年11月1日確認）。各メーカーの公式ページからも、この受付ページに案内されています。
      </P>
      <div className="rounded-2xl border border-border bg-surface p-5 mb-6 text-sm leading-7 text-text-secondary">{centerMakers}</div>

      <h3 className="font-bold text-text-primary mb-2">自社の窓口で申し込むメーカー</h3>
      <P>
        PC3Rの「メーカー窓口一覧」（令和8年10月現在の表示）に掲載されているメーカーのうち、上の受付センターの一覧にないメーカーです。リンク先はPC3Rの一覧に掲載されている各社の窓口です。
      </P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left">メーカー</th>
              <th className="px-3 py-2.5 text-left">申込窓口</th>
            </tr>
          </thead>
          <tbody>
            {ownWindows.map((r, i) => (
              <tr key={r.name} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold border-t border-border align-top">{r.name}</td>
                <td className="px-3 py-2.5 border-t border-border align-top break-all">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{r.url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典：パソコン3R推進協会「メーカー窓口一覧」（2026年11月1日確認）。一覧にはこのほかコナミアミューズメントなども掲載されています。取り扱いメーカーが変わったパソコン（SOTEC・オンキョーはオーディーエス、日本ビクター・東京特殊電線はJVCケンウッド、IBMはレノボなど）は、PC3Rの「メーカー名が見当たらない場合」で確認できます。
      </p>

      <H2 id="steps" num="4">メーカー回収の5ステップ</H2>
      <Steps items={steps} />

      <H2 id="ng" num="5">避けるべき3つの行動</H2>
      <Cards items={ngActions} tone="warn" />
      <P>
        データ消去の具体的な手順は<A href="/pc-sumaho-data-shoukyo/">パソコン・スマホのデータ消去と処分方法</A>、自治体や家電量販店の小型家電回収は<A href="/kogata-kaden-recycle/">小型家電リサイクルの使い方</A>、故人のパソコンを整理する場合は<A href="/digital-ihin-seiri/">デジタル遺品の整理</A>をご覧ください。家全体の片付けを業者に頼む場合も、パソコンをどのルートで処分するか、データ消去を誰がどう行うかを見積もりの段階で確認してください。
      </P>
      <RankingCta />

      <H2 id="faq" num="6">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="7">出典・参考にした公式情報</H2>
      <P>本記事の料金・制度・手順の記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="8">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事の料金は、各窓口の公式ページを2026年11月1日に確認した時点の税込金額です。回収再資源化料金や申し込み方法は各メーカーが定めており、変更されることがあります。申し込みの前に必ず各メーカー・パソコン3R推進協会の最新の案内をご確認ください。事業で使用したパソコンは家庭系の回収の対象外です。
      </p>
    </article>
  );
}
