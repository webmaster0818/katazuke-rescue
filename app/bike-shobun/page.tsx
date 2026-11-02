import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Steps, Summary, Toc, FaqList, SourceList, RelatedGrid, RankingCta, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

const PATH = "/bike-shobun/";
const TITLE = "バイクの処分方法｜二輪車リサイクルと廃車手続き";
const DESC =
  "乗らなくなったバイク・原付の処分方法を、自動車リサイクル促進センターの二輪車リサイクルシステムと国土交通省の公式情報（2026年11月1日確認）にもとづき解説します。リサイクル料金が無料になる条件、参加メーカー別の問い合わせ先、指定引取場所と廃棄二輪車取扱店の違い、排気量ごとの廃車手続きの窓口と必要書類をまとめました。";
const PUBLISHED = "2026-11-01";
const UPDATED = "2026-11-01";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const makers: { code: string; name: string; brand: string; tel: string; check?: { label: string; url: string } }[] = [
  { code: "100", name: "本田技研工業（株）", brand: "HONDA", tel: "0120-086-819", check: { label: "リサイクル引取対象車両照会システム", url: "http://www.honda.co.jp/motor-recycle/rmark.html" } },
  { code: "110", name: "ヤマハ発動機（株）", brand: "YAMAHA", tel: "0120-090-819", check: { label: "リサイクル引き取り対象車照会", url: "http://www2.yamaha-motor.co.jp/recycle/mc/index.asp" } },
  { code: "120", name: "スズキ（株）", brand: "SUZUKI", tel: "0120-402-253" },
  { code: "130", name: "カワサキモータース（株）", brand: "Kawasaki、bimota", tel: "0120-400-819", check: { label: "リサイクル引き取り対象車両照会", url: "https://www3.kawasaki-motors.com/for_users/recycle/" } },
  { code: "210", name: "ドゥカティジャパン（株）", brand: "DUCATI", tel: "0120-030-292" },
  { code: "220", name: "ビー・エム・ダブリュー（株）", brand: "BMW", tel: "0120-269-437" },
  { code: "270", name: "ハーレーダビッドソンジャパン（株）", brand: "HARLEY-DAVIDSON", tel: "0800-080-8080" },
];

const haisha: { kind: string; window: string; doc: string }[] = [
  { kind: "原付一種・原付二種（〜125cc）", window: "市区町村", doc: "廃車申告受付書 等" },
  { kind: "軽二輪（126cc〜250cc）", window: "運輸支局", doc: "軽自動車届出済証返納証明書 等" },
  { kind: "小型二輪（251cc〜）", window: "運輸支局", doc: "自動車検査証返納証明書 等" },
];

const basics = [
  {
    title: "国内の主要メーカーと輸入事業者による「二輪車リサイクルシステム」がある",
    body: "公益財団法人自動車リサイクル促進センター（JARC）によると、国内二輪車メーカー4社と輸入事業者が、ユーザーが安心して廃棄できる仕組みとして「二輪車リサイクルシステム」を立ち上げています。JARCの二輪車事業部が、二輪車リサイクルコールセンターや広報などを担っています。乗らなくなったバイクがある場合は、まず廃棄二輪車取扱店に相談するよう案内されています。",
  },
  {
    title: "対象車両ならリサイクル料金は無料",
    body: "JARCの「費用・持込先」のページでは、リサイクル料金は無料で、排出者が直接、指定引取場所に持ち込めば費用はかからないとされています。沿革のページによると、2011年10月から、二輪車リサイクルマークの有無にかかわらず、対象車両は廃棄時に処理費用を徴収せずに再資源化しています。一方、廃棄二輪車取扱店に運搬を頼む場合は、廃車手続きや廃車処理に関わる実費がかかります。",
  },
  {
    title: "対象は参加事業者が国内で販売したバイク本体",
    body: "対象は原動機付自転車、軽二輪、小型二輪のバイク本体で、参加事業者が国内で販売した車両です。参加事業者の取り扱いブランドでも、並行輸入など参加事業者以外が販売した車両は対象外です。自転車（電動アシスト自転車を含む）、ATV・バギー車、部品なども対象外とされています。",
  },
];

const conditions = [
  {
    title: "主要な5つの部品が組み付いていること",
    body: "引取基準として、フレーム、エンジン、ガソリンタンク、ハンドル、前輪・後輪の5つが残っていて組み付いていることが求められています。壊れて動かなくても自立すればよく、ガソリンやオイルが入ったままでも漏れていなければよいとされています。対象外の車両は持ち帰りになるため、持ち込む前に車台番号でメーカーの窓口や照会ページに確認するよう案内されています。",
  },
  {
    title: "ナンバープレートを外し、廃車手続きを済ませていること",
    body: "JARCの「必要な書類」のページでは、ナンバープレートが付いたままのバイクは引き取れないとされ、所有者名・車台番号・窓口の受付印がある廃車手続きの書類が必要です。持ち込む人の本人確認書類（免許証、保険証、パスポート等）も必要です。",
  },
  {
    title: "電動バイクのリチウムイオンバッテリーには条件がある",
    body: "ホンダ・ヤマハ・スズキ・カワサキが国内で販売した電動バイクのうち、JARCの引取対象一覧（2026年7月2日現在）に掲載された車両の純正バッテリーは、車両に搭載したまま引き取りの対象になります。リチウムイオンバッテリー単体や、純正以外のバッテリーは引き取れないとされています。",
  },
];

const steps = [
  {
    title: "車台番号とメーカーを確認し、対象車両か調べる",
    body: "車台番号をもとに、下の表のメーカーの問い合わせ先か引取対象車両の照会ページで、二輪車リサイクルシステムの対象かを確認します。",
  },
  {
    title: "排気量に応じた窓口で廃車手続きをする",
    body: "125cc以下は市区町村、126cc以上は運輸支局で手続きします。国土交通省のポータルサイトでは、原動機付自転車は道路運送車両法上の届出義務はないものの、条例により市区町村へ届け出ることになっていると説明されています。手続き後に受け取る書類は、バイクの引き渡しに必要です。",
  },
  {
    title: "持ち込むか、廃棄二輪車取扱店に頼むかを決める",
    body: "自分で運べるなら、JARCの「指定引取場所一覧」で最寄りの場所を探して持ち込みます。電話で問い合わせる際は「二輪車リサイクル担当をお願いします」と伝えるよう案内されています。運べない場合は、廃棄二輪車取扱店（環境大臣の指定を受けてバイクを収集・運搬できるバイクショップ）に相談します。",
  },
  {
    title: "二輪車リサイクル管理票に記入し、控えを受け取る",
    body: "引き渡しの際、所有者が二輪車リサイクル管理票に記入し、控えを受け取ります。所有者と持ち込む人が違う場合は、署名した誓約書が必要です。管理票番号で、処理の状況をJARCのサイトから確認できます。",
  },
];

const faqs: Faq[] = [
  {
    q: "バイクの処分にリサイクル料金はかかりますか。",
    a: "二輪車リサイクルシステムの対象車両なら、リサイクル料金は無料です。自分で指定引取場所に持ち込めば費用はかかりません。廃棄二輪車取扱店に運搬を頼む場合は、廃車手続きや廃車処理に関わる実費がかかります。",
  },
  {
    q: "廃車手続きの書類をなくしてしまいました。",
    a: "JARCでは、廃車手続きに関する書類を紛失した車両などについて、二輪車リサイクルコールセンターに申請して「二輪車リサイクルコールセンター確認書」の発行を受ける手続きを案内しています。申請書を郵送し、1週間を目途に発行されるとされています。",
  },
  {
    q: "海外メーカーのバイクも無料で引き取ってもらえますか。",
    a: "参加事業者（ドゥカティジャパン、ビー・エム・ダブリュー、ハーレーダビッドソンジャパンなど）が国内で販売した車両は対象です。参加事業者の取り扱いブランドでも、並行輸入など参加事業者以外が販売した車両は対象外です。対象かどうかは車台番号で各社に確認してください。",
  },
  {
    q: "指定引取場所に行けば、家まで取りに来てもらえますか。",
    a: "来てもらえません。JARCのよくあるご質問では、指定引取場所はリサイクル車両のストックヤードで、収集活動はしていないとされています。運搬を頼みたい場合は、廃棄二輪車取扱店に相談してください。",
  },
  {
    q: "問い合わせ先はどこですか。",
    a: "二輪車リサイクルコールセンター（電話050-3000-0727、受付時間9:30〜17:00、土・日・祝日・年末年始等を除く）です。対象車両かどうかは、各メーカーの問い合わせ先でも確認できます。",
  },
];

const sources: Source[] = [
  { label: "二輪車リサイクルの紹介", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/" },
  { label: "対象車両・引取基準", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/object/" },
  { label: "費用・持込先", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/fee/" },
  { label: "沿革", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/history/" },
  { label: "必要な書類", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/documents/" },
  { label: "受付手続き", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/procedure/" },
  { label: "よくあるご質問", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/faq/" },
  { label: "指定引取場所一覧", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/reception/" },
  { label: "廃棄二輪車取扱店", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/dealer/" },
  { label: "お問い合わせ", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/contact/" },
  { label: "「廃車手続きに関する書類を紛失した車両・競技用車両等）の処理に関する申請」をされる方へ", org: "公益財団法人 自動車リサイクル促進センター", url: "https://www.jarc.or.jp/motorcycle/callcenter/" },
  { label: "自動車の種類｜自動車検査登録総合ポータルサイト", org: "国土交通省", url: "https://www.jidoushatouroku-portal.mlit.go.jp/jidousha/kensatoroku/procedure/index.html" },
  { label: "車の使用を一時中止するために必要な書類", org: "国土交通省", url: "https://www.jidoushatouroku-portal.mlit.go.jp/jidousha/kensatoroku/scrapp/document/index.html" },
  { label: "車の使用を一時中止するためには", org: "国土交通省", url: "https://www.jidoushatouroku-portal.mlit.go.jp/jidousha/kensatoroku/scrapp/index.html" },
];

const related: Related[] = [
  { href: "/jitensha-bike-shobun/", label: "自転車・バイクの処分方法", desc: "防犯登録・廃車手続きの一般論" },
  { href: "/kojin-kuruma-souzoku-haisha/", label: "故人の車の相続と廃車", desc: "自動車の名義と手続き" },
  { href: "/car-battery-shobun/", label: "車のバッテリーの処分方法", desc: "鉛バッテリーの引き取り先" },
  { href: "/tire-shobun/", label: "タイヤの処分方法", desc: "販売店での引き取りと注意点" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/lithium-battery-shobun/", label: "リチウムイオン電池の処分", desc: "発火を防ぐ出し方" },
];

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜バイクの処分で押さえる前提" },
    { href: "#maker", label: "2｜参加メーカー別の問い合わせ先" },
    { href: "#jouken", label: "3｜無料で引き取ってもらうための条件" },
    { href: "#haisha", label: "4｜排気量ごとの廃車手続きの窓口" },
    { href: "#steps", label: "5｜バイクを処分する4ステップ" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#shutten", label: "7｜出典・参考にした公式情報" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="バイクの処分方法" faqs={faqs} published={PUBLISHED} updated={UPDATED} />
      <Breadcrumb items={[{ label: "バイクの処分方法" }]} />

      <header className="mt-2">
        <ArticleHeader label="品目別の処分ガイド" title={TITLE} published={PUBLISHED} updated={UPDATED} />
        <P>
          実家の車庫や物置に、長く乗っていない原付やバイクが残っていることがあります。バイクは粗大ごみとして出すものではなく、廃車手続きをしたうえで、メーカーなどが運営する二輪車リサイクルシステムで引き渡すのが基本です。
        </P>
        <P>
          この記事では、公益財団法人自動車リサイクル促進センター（JARC）の二輪車リサイクルのページと国土交通省の自動車検査登録総合ポータルサイトを2026年11月1日に開いて確認した内容をもとに、費用、参加メーカー、引き取りの条件、廃車手続きの窓口を整理しました。受付の条件は変わることがあるため、手続きの前に各窓口の最新の案内をご確認ください。
        </P>
      </header>

      <Summary
        points={[
          "参加事業者が国内で販売したバイクは、二輪車リサイクルシステムでリサイクル料金無料で引き取られる",
          "自分で指定引取場所に持ち込めば費用はかからず、廃棄二輪車取扱店に運搬を頼むと実費がかかる",
          "引き渡しには廃車手続きの書類が必要で、ナンバープレートが付いたままでは引き取れない",
          "廃車手続きは125cc以下が市区町村、126cc以上が運輸支局",
        ]}
      />

      <Toc items={toc} />

      <H2 id="kiso" num="1">バイクの処分で押さえる前提</H2>
      <Cards items={basics} />

      <H2 id="maker" num="2">参加メーカー別の問い合わせ先</H2>
      <P>
        JARCの「対象車両・引取基準」のページに掲載されている参加事業者一覧（2022年10月1日現在の表示）です。コードは二輪車リサイクルマークに表示される事業者コードです。対象車両かどうかは、車台番号を用意して各社の問い合わせ先か照会ページで確認できます。
      </P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[680px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left">コード</th>
              <th className="px-3 py-2.5 text-left">参加事業者名</th>
              <th className="px-3 py-2.5 text-left">ブランド</th>
              <th className="px-3 py-2.5 text-left">お問合せ先</th>
              <th className="px-3 py-2.5 text-left">引取対象車両の照会</th>
            </tr>
          </thead>
          <tbody>
            {makers.map((m, i) => (
              <tr key={m.code} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 border-t border-border align-top">{m.code}</td>
                <td className="px-3 py-2.5 font-bold border-t border-border align-top">{m.name}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{m.brand}</td>
                <td className="px-3 py-2.5 border-t border-border align-top whitespace-nowrap">{m.tel}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">
                  {m.check ? (
                    <a href={m.check.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{m.check.label}</a>
                  ) : (
                    "電話で確認"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典：自動車リサイクル促進センター「対象車両・引取基準」（2026年11月1日確認）。照会ページのリンクはJARCのページに掲載されているもので、2026年11月1日に各社の照会ページが開くことを確認しました。スズキ（株）の照会リンクは同日時点でスズキの二輪車トップページに転送されたため、表では電話での確認としています。JARCの沿革によると、トライアンフモーターサイクルズジャパン（株）は2020年3月に、キムコジャパン（株）は2022年9月に脱退しています。
      </p>

      <H2 id="jouken" num="3">無料で引き取ってもらうための条件</H2>
      <Cards items={conditions} />
      <P>
        持ち込み先の指定引取場所は、JARCの「費用・持込先」のページで全国約160か所とされ、「指定引取場所一覧」（2026年10月1日現在）で都道府県別に探せます。廃棄二輪車取扱店は全国約7,000店で、JARCの「廃棄二輪車取扱店」のページから名簿を検索できます。
      </P>

      <H2 id="haisha" num="4">排気量ごとの廃車手続きの窓口</H2>
      <P>JARCの「必要な書類」のページに掲載されている、引き渡しの際に必要な所有者確認書類と廃車手続きの窓口です。</P>
      <div className="overflow-x-auto mb-3 rounded-2xl border border-border">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-2.5 text-left">種類</th>
              <th className="px-3 py-2.5 text-left">所有者確認書類</th>
              <th className="px-3 py-2.5 text-left">廃車手続窓口</th>
            </tr>
          </thead>
          <tbody>
            {haisha.map((h, i) => (
              <tr key={h.kind} className={i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-3 py-2.5 font-bold border-t border-border align-top">{h.kind}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{h.doc}</td>
                <td className="px-3 py-2.5 border-t border-border align-top">{h.window}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-6">
        出典：自動車リサイクル促進センター「必要な書類」（2026年11月1日確認）。軽二輪の書類名は国土交通省の表記に合わせています。
      </p>
      <P>
        国土交通省の「車の使用を一時中止するために必要な書類」では、運輸支局での手続きに次の書類が挙げられています。小型二輪（自動車検査証返納）は、自動車検査証返納証明書交付申請書、手数料納付書、使用者の委任状（申請書に使用者の記名があれば不要）、自動車検査証、車両番号標（ナンバープレート）です。軽二輪（軽自動車届出済証返納）は、軽自動車届出済証返納証明書交付申請書、軽自動車届出済証、使用者の委任状（同）、車両番号標です。届出済証やナンバープレートをなくした場合は理由書が必要で、ナンバープレートの場合は警察署への届出の内容を記載します。原付の手続きは、お住まいの市区町村にお問い合わせください。
      </P>

      <H2 id="steps" num="5">バイクを処分する4ステップ</H2>
      <Steps items={steps} />
      <P className="mt-6">
        自転車の処分や防犯登録の扱いは<A href="/jitensha-bike-shobun/">自転車・バイクの処分方法</A>、バイクと一緒に出てくることの多いタイヤやバッテリーは<A href="/tire-shobun/">タイヤの処分方法</A>と<A href="/car-battery-shobun/">車のバッテリーの処分方法</A>、車庫全体の片付けは<A href="/garage-katazuke/">車庫・ガレージの片付け</A>で解説しています。
      </P>
      <RankingCta />

      <H2 id="faq" num="6">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="7">出典・参考にした公式情報</H2>
      <P>本記事の制度・費用・手順の記述は、以下の公式情報にもとづいています。</P>
      <SourceList sources={sources} />

      <H2 id="related" num="8">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、自動車リサイクル促進センターと国土交通省の公式ページを2026年11月1日に確認した内容にもとづく一般的な情報です。対象車両や引取基準、手続きの書類・手数料は変更されることがあります。手続きの前に必ず各窓口の最新の案内をご確認ください。
      </p>
    </article>
  );
}
