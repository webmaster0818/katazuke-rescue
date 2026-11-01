import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "枚方市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-27/city-27210/", count: 149 },
  curama: { url: "https://curama.jp/disposal/osaka/11/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/osaka/hirakata" },
};

const H = "https://www.city.hirakata.osaka.jp";

const d: AreaCityData = {
  slug: "hirakata",
  name: "枚方市",
  title: "枚方市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗ごみ・大型ごみは月1回6点まで、臨時ごみと穂谷川清掃工場への持ち込み【2026年版】",
  description:
    "枚方市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、枚方市を対応エリアに含むことを公式で確認して比較。粗ごみ（無料）・大型ごみ（有料）の出し方（各月1回6点まで）、引っ越しや片付けで多量に出る臨時ごみ（基本手数料1,200円＋品目ごとの手数料）、穂谷川清掃工場への持ち込み（予約制・枚方市証紙）、家電4品目・パソコンの扱いを市の公式ページで確認してまとめています。",
  ogDescription:
    "枚方市を対応エリアに含む片付け・不用品回収業者3社と、粗ごみ・大型ごみの出し方、臨時ごみ、穂谷川清掃工場への持ち込み、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  h1: "枚方市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "枚方市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["枚方市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "枚方市の粗大ごみは、1メートル未満の「粗ごみ」（無料）と、1辺が1メートル以上の物や自転車・スプリングマットレスなどの指定品目の「大型ごみ」（有料）に分かれ、どちらも申し込み制で月1回6点までです。引っ越しや片付けで多量に出る場合や6点を超える場合は「臨時ごみ」の扱いになり、基本手数料1,200円に品目ごとの手数料を加えた額を枚方市証紙で支払います。",
    `本記事では、枚方市の公式ページで確認した粗ごみ・大型ごみの出し方、臨時ごみ、穂谷川清掃工場への持ち込み、家電4品目・パソコンの扱い（${CHECKED}確認）と、枚方市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、枚方市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      枚方市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに枚方市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に大阪府が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「枚方市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "枚方市の粗ごみ・大型ごみ・臨時ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      枚方市の大きなごみは、粗ごみ（無料）と大型ごみ（有料）に分けて申し込み、それぞれ月1回6点まで収集されます。引っ越しや片付けで多量に出る場合は臨時ごみ、自分で運ぶ場合は穂谷川清掃工場への持ち込み（予約制・有料）となり、家電4品目とパソコンは市が収集・処理しないごみです。
    </>
  ),
  facts: [
    { k: "粗ごみ・大型ごみ", v: "申し込み制。幅・奥行き・高さが1メートル未満の「粗ごみ」は無料、1辺が1メートル以上の「サイズ判断品目」と、自転車・電子レンジ・スプリングマットレスなど市が指定する「指定品目」の「大型ごみ」は有料。それぞれ月1回6点までで、収集日は申し込みした週の翌週の水曜日。大型ごみは受付番号と氏名を記入した枚方市証紙（ごみ処理券）を貼る", src: "枚方市「家庭から出るごみ・粗大ごみ」（更新日 2026年7月8日）" },
    { k: "申し込み", v: "粗大ごみ予約センター（フリーダイヤル 0120-66-8153、月曜〜金曜（祝日含む）午前9時〜午後7時）。インターネットは24時間受付で、今までに粗大ごみを申し込みしたことがある方のみ。ファクスは聴覚障害・言語障害の方のみ", src: "枚方市「家庭から出るごみ・粗大ごみ」（更新日 2026年7月8日）" },
    { k: "臨時ごみ", v: "引っ越しや片付けに伴って多量に出る粗ごみ・大型ごみが対象。月1回の申し込みでそれぞれ6点を超える場合や、同一月に2回以上申し込む場合も臨時ごみの扱い。手数料は1回の申し込みにつき基本手数料1,200円に、粗ごみ5点ごとに300円、大型ごみは品目ごとの手数料を加えた額で、枚方市証紙で支払う（現金不可）。粗大ごみ予約センターへ収集希望日の1カ月前から3日前までに申し込む（インターネット不可）。収集時は立合いが必要", src: "枚方市「臨時ごみ（有料）の出し方」（更新日 2026年6月19日）" },
    { k: "持ち込み", v: "粗ごみ・大型ごみを穂谷川清掃工場（田口5丁目1番1号）へ自分で持ち込む。粗大ごみ予約センターへの事前予約が必要。月・火・木・金曜日の午後1時〜3時30分（祝日も受付、水・土・日曜日は不可）。手数料は粗ごみ5点ごとに300円、大型ごみは品目ごとの手数料（300円〜1,800円）で、枚方市証紙を貼る。運転免許証などで本人確認を行う", src: "枚方市「「持込みごみ」についてのご注意事項」（更新日 2026年9月2日）、同「粗大ごみの持ち込みのご予約は粗大ごみ予約センター（0120-66-8153）へお申し込みください」（更新日 2026年7月14日）" },
    { k: "持ち込みを断る場合", v: "市は、他人の廃棄物を一般廃棄物収集運搬業の許可なく持ち込むことはできない（許可を得た場合でも業としての持ち込みはできない）と案内。同一世帯の方は住所確認書類の提示で持ち込める。病気等の理由で申し込み者・同一世帯以外の方が持ち込む場合は、事前に穂谷川資源循環センターに相談する。市外のごみ、産業廃棄物、点数確認ができないバラバラの状態のごみも不可", src: "枚方市「「持込みごみ」についてのご注意事項」（更新日 2026年9月2日）、同「粗大ごみの持ち込みのご予約は粗大ごみ予約センター（0120-66-8153）へお申し込みください」（更新日 2026年7月14日）" },
    { k: "家電4品目", v: "市が収集・処理しないごみ。買い替えの場合は購入する際に引き取りを依頼し、引き取りのみの場合は購入した販売店かお近くの家電販売店へ相談する。自分で運ぶ場合は郵便局でリサイクル料金を払い込み、指定引取場所（コフジ物流（株）、枚方市春日西町3丁目）へ持ち込む。市は特定の事業者を紹介できないとし、市が掲載する引き取り協力店一覧などを参考に選ぶよう案内", src: "枚方市「テレビ・洗濯機・冷蔵庫・エアコン(家電リサイクル法対象品目)の処理方法」（更新日 2026年5月19日）と同ページ掲載のPDF「家電リサイクル法対象品の回収・処理方法」、同「家庭から出るごみ・粗大ごみ」（更新日 2026年7月8日）" },
    { k: "パソコン", v: "市が収集・処理しないごみ。パソコン本体・ディスプレイはメーカー等のリサイクルルートに出す（PCリサイクルマーク付きは新たな料金不要、マークなしは回収再資源化料金が必要、メーカー不存在の物はパソコン3R推進協会へ）。市内17箇所の小型家電回収ボックス（投入口20cm×30cm）に入る物はボックスに出せる", src: "枚方市「パソコンのリサイクルについて」（更新日 2024年9月17日）、同「使用済小型家電の拠点回収について」（更新日 2026年4月27日）" },
    { k: "ごみ出しの支援", v: "大型ごみ持出しサポート収集: 65歳以上、要支援1以上、要介護1以上、身体障害者手帳1級・2級などに該当する者のみの世帯を対象に、市の職員が大型ごみを屋内から搬出して収集。取り外しや解体を伴う場合や、臨時ごみ（引越し・片づけに伴う多量ごみ）は対象外。ホームヘルプサービスを利用している世帯向けには、玄関先まで戸別に収集する「ふれあいサポート収集」もある", src: "枚方市「大型ごみ持出しサポート収集」（更新日 2026年4月6日）、同「ふれあいサポート収集」（更新日 2026年6月23日）" },
  ],
  sections: [
    {
      id: "rinji-mochikomi",
      title: "枚方市の粗ごみ・大型ごみ・臨時ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            枚方市では、1メートル未満の粗ごみは無料、1メートル以上の物や指定品目の大型ごみは有料で、どちらも粗大ごみ予約センターに申し込み、月1回6点まで収集日に出します。引っ越しや家の片付けで6点を超える場合は臨時ごみとなり、1回の申し込みにつき基本手数料1,200円に、粗ごみ5点ごとの300円と大型ごみの品目ごとの手数料を加えた額を枚方市証紙で支払います。臨時ごみは自宅前などの指定場所に出し、収集時には立合いが必要です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、予約したうえで穂谷川清掃工場へ持ち込む方法もあります。市は、他人の廃棄物を一般廃棄物収集運搬業の許可なく持ち込むことはできないと案内しているため、業者に頼む場合は持ち込みの代行ではなく、収集運搬の許可の有無を確認したうえで依頼する形になります。部屋からの運び出しまで頼みたい場合は、使える物をリユースに回し、収集日や持ち込みで減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電4品目は市が収集しないごみ、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            枚方市は、家電4品目とパソコンを市が収集・処理しないごみとしています。家電4品目は買い替え先や購入した販売店への依頼、または郵便局でリサイクル料金を払い込んで指定引取場所へ持ち込む方法で、市は特定の事業者を紹介できないとして、市が掲載する引き取り協力店一覧などを参考にするよう案内しています。片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、収集日・臨時ごみ・持ち込みのどれで出すかを決める", b: "大きなごみを粗ごみと大型ごみに分けて書き出し、月1回6点までの収集で出し切れるかを確かめます。間に合わない分は、臨時ごみ（収集希望日の1カ月前から3日前までに電話）、穂谷川清掃工場への持ち込み（予約制）、業者への依頼のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "枚方市で粗大ごみはどう出しますか？", a: "粗大ごみ予約センター（0120-66-8153）かインターネット（過去に申し込みしたことがある方のみ）で申し込みます。1メートル未満の粗ごみは無料、1メートル以上の物や指定品目の大型ごみは有料で、それぞれ月1回6点まで、申し込みした週の翌週の水曜日に収集されます（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみを枚方市に収集してもらえますか？", a: "臨時ごみとして有料で収集してもらえます。収集希望日の1カ月前から3日前までに粗大ごみ予約センターへ電話で申し込み、1回の申し込みにつき基本手数料1,200円に粗ごみ5点ごとの300円と大型ごみの品目ごとの手数料を加えた額を枚方市証紙で支払います。収集時には立合いが必要です。" },
    { q: "枚方市でごみを自分で持ち込むことはできますか？", a: "粗ごみ・大型ごみは、粗大ごみ予約センターに予約したうえで穂谷川清掃工場（田口5丁目1番1号）に持ち込めます。月・火・木・金曜日の午後1時〜3時30分で、手数料は粗ごみ5点ごとに300円、大型ごみは品目ごとの手数料（300円〜1,800円）を枚方市証紙で支払います。" },
    { q: "枚方市で冷蔵庫や洗濯機を処分するには？", a: "家電4品目は市が収集・処理しないごみです。買い替え先や購入した販売店に引き取りを依頼するか、郵便局でリサイクル料金を払い込んで指定引取場所に持ち込みます。" },
    { q: "関東の記事で見たお助けうさぎは枚方市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、大阪府は含まれていません（2026年11月1日確認）。本記事では、公式ページで枚方市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "枚方市の大きなごみは、粗ごみ（無料）と大型ごみ（有料）に分けて申し込み、それぞれ月1回6点までです。引っ越しや片付けで多量に出る場合は臨時ごみ（基本手数料1,200円＋品目ごとの手数料・立合い）、自分で運べる物は穂谷川清掃工場への持ち込み（予約制・枚方市証紙）、と使い分けるのが基本です。",
    "業者に頼む場合は、枚方市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目は市が収集しないため、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "家庭から出るごみ・粗大ごみ", org: "枚方市", url: `${H}/0000002820.html`, updated: "2026年7月8日" },
    { label: "臨時ごみ（有料）の出し方", org: "枚方市", url: `${H}/0000046952.html`, updated: "2026年6月19日" },
    { label: "粗大ごみの持ち込みのご予約は粗大ごみ予約センター（0120-66-8153）へお申し込みください", org: "枚方市", url: `${H}/0000037685.html`, updated: "2026年7月14日" },
    { label: "「持込みごみ」についてのご注意事項", org: "枚方市", url: `${H}/0000007087.html`, updated: "2026年9月2日" },
    { label: "テレビ・洗濯機・冷蔵庫・エアコン(家電リサイクル法対象品目)の処理方法", org: "枚方市", url: `${H}/0000007880.html`, updated: "2026年5月19日" },
    { label: "パソコンのリサイクルについて", org: "枚方市", url: `${H}/0000046916.html`, updated: "2024年9月17日" },
    { label: "使用済小型家電の拠点回収について", org: "枚方市", url: `${H}/0000010718.html`, updated: "2026年4月27日" },
    { label: "大型ごみ持出しサポート収集", org: "枚方市", url: `${H}/0000002814.html`, updated: "2026年4月6日" },
    { label: "ふれあいサポート収集", org: "枚方市", url: `${H}/0000002896.html`, updated: "2026年6月23日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（大阪府が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaHirakataPage() {
  return (
    <AreaCityPage
      d={d}
      otherAreas={
        <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
          <p className="font-bold text-text-primary mb-3">他エリアの業者比較</p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            <li>
              <Link href="/area/adachi-ku/" className="text-primary underline underline-offset-2">足立区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/akashi/" className="text-primary underline underline-offset-2">明石市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/akita/" className="text-primary underline underline-offset-2">秋田のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/amagasaki/" className="text-primary underline underline-offset-2">尼崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/aomori/" className="text-primary underline underline-offset-2">青森のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/arakawa-ku/" className="text-primary underline underline-offset-2">荒川区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/asahikawa/" className="text-primary underline underline-offset-2">旭川市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/bunkyo-ku/" className="text-primary underline underline-offset-2">文京区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉のゴミ屋敷片付け・不用品回収業者おすすめ2選</Link>
            </li>
            <li>
              <Link href="/area/chiyoda-ku/" className="text-primary underline underline-offset-2">千代田区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/chuo-ku/" className="text-primary underline underline-offset-2">中央区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/edogawa-ku/" className="text-primary underline underline-offset-2">江戸川区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/fujisawa/" className="text-primary underline underline-offset-2">藤沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/fukui/" className="text-primary underline underline-offset-2">福井のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/fukushima/" className="text-primary underline underline-offset-2">福島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/fukuyama/" className="text-primary underline underline-offset-2">福山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/funabashi/" className="text-primary underline underline-offset-2">船橋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/gifu/" className="text-primary underline underline-offset-2">岐阜のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/hachinohe/" className="text-primary underline underline-offset-2">八戸市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/hachioji/" className="text-primary underline underline-offset-2">八王子のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/hakodate/" className="text-primary underline underline-offset-2">函館市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/hamamatsu/" className="text-primary underline underline-offset-2">浜松のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/higashiosaka/" className="text-primary underline underline-offset-2">東大阪のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/himeji/" className="text-primary underline underline-offset-2">姫路のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2">広島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/ichinomiya/" className="text-primary underline underline-offset-2">一宮市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/itabashi-ku/" className="text-primary underline underline-offset-2">板橋区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/iwaki/" className="text-primary underline underline-offset-2">いわき市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2">鹿児島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2">金沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kashiwa/" className="text-primary underline underline-offset-2">柏市のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/katsushika-ku/" className="text-primary underline underline-offset-2">葛飾区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/kawagoe/" className="text-primary underline underline-offset-2">川越市のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/kawaguchi/" className="text-primary underline underline-offset-2">川口のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2">川崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kita-ku/" className="text-primary underline underline-offset-2">北区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2">北九州のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/kochi/" className="text-primary underline underline-offset-2">高知のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kofu/" className="text-primary underline underline-offset-2">甲府のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/koriyama/" className="text-primary underline underline-offset-2">郡山市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/koshigaya/" className="text-primary underline underline-offset-2">越谷市のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/koto-ku/" className="text-primary underline underline-offset-2">江東区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2">熊本のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kurashiki/" className="text-primary underline underline-offset-2">倉敷のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kure/" className="text-primary underline underline-offset-2">呉市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/kurume/" className="text-primary underline underline-offset-2">久留米のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/maebashi/" className="text-primary underline underline-offset-2">前橋のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/matsue/" className="text-primary underline underline-offset-2">松江のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/matsumoto/" className="text-primary underline underline-offset-2">松本のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/matsuyama/" className="text-primary underline underline-offset-2">松山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/meguro-ku/" className="text-primary underline underline-offset-2">目黒区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/minato-ku/" className="text-primary underline underline-offset-2">港区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/mito/" className="text-primary underline underline-offset-2">水戸のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/miyazaki/" className="text-primary underline underline-offset-2">宮崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/morioka/" className="text-primary underline underline-offset-2">盛岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nagano/" className="text-primary underline underline-offset-2">長野のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nagasaki/" className="text-primary underline underline-offset-2">長崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/naha/" className="text-primary underline underline-offset-2">那覇のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nakano-ku/" className="text-primary underline underline-offset-2">中野区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/nara/" className="text-primary underline underline-offset-2">奈良のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nerima-ku/" className="text-primary underline underline-offset-2">練馬区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/neyagawa/" className="text-primary underline underline-offset-2">寝屋川市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/niigata/" className="text-primary underline underline-offset-2">新潟のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nishinomiya/" className="text-primary underline underline-offset-2">西宮市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/oita/" className="text-primary underline underline-offset-2">大分のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/okayama/" className="text-primary underline underline-offset-2">岡山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/ota-ku/" className="text-primary underline underline-offset-2">大田区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/otsu/" className="text-primary underline underline-offset-2">大津のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/saga/" className="text-primary underline underline-offset-2">佐賀のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2">相模原のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/saitama/" className="text-primary underline underline-offset-2">さいたまのゴミ屋敷片付け・不用品回収業者おすすめ2選</Link>
            </li>
            <li>
              <Link href="/area/sakai/" className="text-primary underline underline-offset-2">堺のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/sasebo/" className="text-primary underline underline-offset-2">佐世保市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/setagaya-ku/" className="text-primary underline underline-offset-2">世田谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/shibuya-ku/" className="text-primary underline underline-offset-2">渋谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/shimonoseki/" className="text-primary underline underline-offset-2">下関市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/shinagawa-ku/" className="text-primary underline underline-offset-2">品川区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/shinjuku-ku/" className="text-primary underline underline-offset-2">新宿区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/suginami-ku/" className="text-primary underline underline-offset-2">杉並区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/suita/" className="text-primary underline underline-offset-2">吹田市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/sumida-ku/" className="text-primary underline underline-offset-2">墨田区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/taito-ku/" className="text-primary underline underline-offset-2">台東区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/takamatsu/" className="text-primary underline underline-offset-2">高松のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/takasaki/" className="text-primary underline underline-offset-2">高崎のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/takatsuki/" className="text-primary underline underline-offset-2">高槻市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/tokushima/" className="text-primary underline underline-offset-2">徳島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京のゴミ屋敷片付け・不用品回収業者おすすめ2選</Link>
            </li>
            <li>
              <Link href="/area/toshima-ku/" className="text-primary underline underline-offset-2">豊島区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/tottori/" className="text-primary underline underline-offset-2">鳥取のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/toyama/" className="text-primary underline underline-offset-2">富山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/toyohashi/" className="text-primary underline underline-offset-2">豊橋市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/toyonaka/" className="text-primary underline underline-offset-2">豊中市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/toyota/" className="text-primary underline underline-offset-2">豊田市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/tsu/" className="text-primary underline underline-offset-2">津のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/utsunomiya/" className="text-primary underline underline-offset-2">宇都宮のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/wakayama/" className="text-primary underline underline-offset-2">和歌山のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/yamagata/" className="text-primary underline underline-offset-2">山形のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/yamaguchi/" className="text-primary underline underline-offset-2">山口のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/yao/" className="text-primary underline underline-offset-2">八尾市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜のゴミ屋敷片付け・不用品回収業者おすすめ2選</Link>
            </li>
            <li>
              <Link href="/area/yokosuka/" className="text-primary underline underline-offset-2">横須賀市のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
          </ul>
        </div>
      }
    />
  );
}
