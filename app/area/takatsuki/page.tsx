import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "高槻市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-27/city-27207/", count: 151 },
  curama: { url: "https://curama.jp/disposal/osaka/8/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/osaka/takatsuki" },
};

const T = "https://www.city.takatsuki.osaka.jp";

const d: AreaCityData = {
  slug: "takatsuki",
  name: "高槻市",
  title: "高槻市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜大型可燃ごみ・不燃ごみは月1回、臨時ごみとエネルギーセンター持ち込み【2026年版】",
  description:
    "高槻市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。大型可燃ごみ・不燃ごみ（各月1回）、臨時ごみ（1立方メートル2,720円・立会い）、エネルギーセンターへの持ち込み（10kgにつき40円・事前届出）、家電4品目の収集運搬料金を公式ページで確認してまとめています。",
  ogDescription:
    "高槻市を対応エリアに含む片付け・不用品回収業者3社と、大型可燃ごみ・不燃ごみの出し方、臨時ごみ、エネルギーセンターへの持ち込み、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "高槻市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "高槻市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["高槻市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "高槻市では、木製たんすやふとんなどの大型の可燃物は「大型可燃ごみ」、スプリング入りのマットレスやソファー、自転車などは「不燃ごみ」として、それぞれ月1回の収集日に出します。引っ越しや家の片付けで大量に出るごみは、電話で申し込む有料の「臨時ごみ」（1立方メートルにつき2,720円・立会いが必要）で収集してもらえます。",
    `本記事では、高槻市の公式ページで確認した大型可燃ごみ・不燃ごみの出し方、臨時ごみ、エネルギーセンターへの持ち込み、家電4品目・パソコンの扱い（${CHECKED}確認）と、高槻市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、高槻市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      高槻市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに高槻市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に大阪府が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「高槻市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "高槻市の大型可燃ごみ・不燃ごみ・臨時ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      高槻市の大きなごみは、材質によって大型可燃ごみ（月1回）と不燃ごみ（月1回）に分けて出します。引っ越しや片付けで大量に出るごみは臨時ごみ（有料）、自分で運ぶ場合はエネルギーセンターへの持ち込み（事前届出・有料）となり、家電4品目とパソコンは市の収集やエネルギーセンターの対象外です。
    </>
  ),
  facts: [
    { k: "大型可燃ごみ", v: "月1回。大型の可燃性製品・包装材（木製たんす、食器棚、学習机、いす、下駄箱、書棚など）、カーペット・毛布、ふとん・じゅうたん・カーテン（小さくたたんでひもで十文字にしばる）、たたみ（4分の1以下に切る）、プラスチック製の衣装ケース、ゴルフバッグなど。電気毛布・電気カーペットは不燃ごみへ", src: "高槻市「大型可燃ごみ（毎月1回）」（更新日 2024年8月9日）" },
    { k: "不燃ごみ", v: "月1回。スプリング入りのマットレス及びソファー、自転車（「ごみ」と張り紙をする）、石油ストーブ（燃料を抜く）、金属製物置（分解する）、ガラス製品、家電製品など。エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機とパソコンは出せない。マッサージチェアなどは大きさにより収集できない場合がある", src: "高槻市「不燃ごみ（毎月1回）」（更新日 2024年8月9日）" },
    { k: "臨時ごみ", v: "引っ越しや家の片付けによって大量に出る可燃ごみ・不燃ごみ・大型可燃ごみ・リサイクルごみが対象。電話受付のみ（フォーム・メール・ファクス不可）で、収集希望日（祝日を含む月曜〜金曜）の4日から5日前までに申し込む。予約状況により断る場合がある。手数料は1立方メートルにつき2,720円（45リットルのごみ袋1つにつき120円程度）で、その場で支払うため立会いが必要。車両が進入できる場所までごみを出す必要があり、収集作業員は自宅の中まで入らない", src: "高槻市「臨時ごみの収集を依頼する（有料）」（更新日 2024年8月9日）" },
    { k: "持ち込み", v: "エネルギーセンター（前島三丁目8番1号）。持込希望日の前日の正午（前日が土日祝日の場合は直前の平日の正午）までに、ホームページまたは一般廃棄物運搬届出書で届け出て許可を得る。搬入は午前9時〜正午・午後1時〜4時（土日祝日は休み）。手数料は10キログラムにつき40円（事業系一般廃棄物は80円）。荷下ろしは原則として搬入者自身が行う", src: "高槻市「エネルギーセンターにごみを持ち込むには」（更新日 2025年9月5日）" },
    { k: "第三者による持ち込み", v: "家庭ごみの持ち込みは原則としてごみを出す人自身が行う。自分で持ち込めない場合は第三者に依頼でき、その場合はごみを出す人が自署・捺印した「廃棄物処理依頼書」が必要で、この書類がないと搬入できない", src: "高槻市「エネルギーセンターへのごみの持ち込みの届出方法（「一般廃棄物運搬届出書」を提出する）」（更新日 2025年7月17日）、同「エネルギーセンターへのごみの持ち込みの届出方法（「ホームページ」から申し込む）」（更新日 2025年12月26日）" },
    { k: "持ち込めない物", v: "市外で発生したごみ、産業廃棄物、家電4品目、パソコン、小型充電式電池、バッテリー、タイヤ、消火器、耐火金庫、ピアノ、仏壇、介護用ベッド、事業活動に伴うごみなど", src: "高槻市「エネルギーセンターに持ち込めないごみ」（更新日 2024年4月1日）" },
    { k: "家電4品目", v: "買い替えなら新しい製品を買う小売店、処分のみなら購入した小売店に依頼。購入店が廃業・遠方・不明の場合は、近くの家電量販店への依頼、指定引取場所（市内は大阪センコー運輸 高槻指定引取場所）への搬入、市への収集運搬の依頼のいずれか。市に頼む場合はリサイクル料金を振り込んだうえで収集希望日の4日から5日前までに清掃業務課へ依頼し、収集運搬料金（エアコン・テレビ・洗濯機・衣類乾燥機・250リットル未満の冷蔵庫等3,660円、250リットル以上の冷蔵庫等5,230円）がかかる。市は、通常、市に依頼する方法が最も費用を要すると案内", src: "高槻市「エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機の処分方法」（更新日 2024年3月1日）" },
    { k: "パソコン", v: "エネルギーセンターへの持ち込み不可。市と協定を締結しているリネットジャパンリサイクル株式会社に回収を依頼するか、各パソコンメーカーの受付窓口に問い合わせる。キーボード・マウスなどの付属品やプリンターは不燃ごみの日に出せる", src: "高槻市「パソコン・タブレット」（更新日 2024年4月1日）" },
    { k: "ごみ出しの支援", v: "高齢者等ごみ出し支援: 全ての世帯員が要介護2以上、身体障がい者手帳1級・2級などに該当し、ごみを集積場まで出すことが困難な世帯を対象に、週1回戸別に訪問して収集（無料）。職員による室内からの運び出しは行わない。大型可燃ごみや大きな不燃ごみは改めて相談、片付けや引っ越しで一時的に多量に出る場合は臨時ごみ（有料）として収集", src: "高槻市「高齢者等のごみ出しを支援します」（更新日 2026年8月14日）" },
  ],
  sections: [
    {
      id: "rinji-mochikomi",
      title: "高槻市の大型ごみ・臨時ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            高槻市では、家具やふとんは大型可燃ごみ、マットレスやソファー、自転車は不燃ごみとして、それぞれ月1回の収集日に出します。引っ越しや家の片付けで一度に大量に出る場合は、臨時ごみとして電話で申し込み、1立方メートルにつき2,720円の手数料をその場で支払います。臨時ごみは車両が進入できる場所までごみを出しておく必要があり、収集作業員は自宅の中まで入らない点に注意が必要です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、前日の正午までに届け出てエネルギーセンターへ持ち込む方法もあり、手数料は10キログラムにつき40円です。業者などの第三者に持ち込みを頼む場合は、ごみを出す人が自署・捺印した廃棄物処理依頼書が必要になります。部屋からの運び出しまで頼みたい場合は、使える物をリユースに回し、収集日や持ち込みで減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電4品目の市の収集運搬料金と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            高槻市は、家電4品目を市に収集運搬してもらう場合の料金（1台3,660円、250リットル以上の冷蔵庫・冷凍庫は5,230円）を公表し、通常は市に依頼する方法が最も費用を要すると案内しています。リサイクル料金は別にかかるため、片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、収集日・臨時ごみ・持ち込みのどれで出すかを決める", b: "大きなごみを大型可燃ごみと不燃ごみに分けて書き出し、月1回の収集日で出し切れるかを確かめます。間に合わない分は、臨時ごみ（4日から5日前までに電話）、エネルギーセンターへの持ち込み（前日正午までに届出）、業者への依頼のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "高槻市で粗大ごみはどう出しますか？", a: "木製たんす・食器棚・ふとん・カーペットなどは大型可燃ごみ、スプリング入りのマットレスやソファー・自転車・石油ストーブなどは不燃ごみとして、それぞれ月1回の収集日に出します。家電4品目とパソコンは出せません（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみを高槻市に収集してもらえますか？", a: "臨時ごみとして有料で収集してもらえます。収集希望日（祝日を含む月曜〜金曜）の4日から5日前までに電話で申し込み、手数料は1立方メートルにつき2,720円です。その場で支払うため立会いが必要で、車両が進入できる場所までごみを出しておきます。" },
    { q: "高槻市でごみを自分で持ち込むといくらかかりますか？", a: "エネルギーセンター（前島三丁目8番1号）への持ち込みは、10キログラムにつき40円です。持込希望日の前日の正午までにホームページなどで届け出て、平日の午前9時〜正午・午後1時〜4時に搬入します。" },
    { q: "高槻市で冷蔵庫や洗濯機を処分するには？", a: "購入店や買い替え先の小売店に依頼するのが基本です。難しい場合は家電量販店への依頼、指定引取場所への搬入、市への収集運搬の依頼のいずれかで、市に頼むとリサイクル料金のほかに1台3,660円（250リットル以上の冷蔵庫等は5,230円）がかかります。" },
    { q: "関東の記事で見たお助けうさぎは高槻市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、大阪府は含まれていません（2026年11月1日確認）。本記事では、公式ページで高槻市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "高槻市の大きなごみは、大型可燃ごみと不燃ごみ（各月1回）に分けて出します。引っ越しや片付けで大量に出る場合は臨時ごみ（1立方メートル2,720円・立会い）、自分で運べる物はエネルギーセンターへの持ち込み（10キログラムにつき40円・前日正午までに届出）、と使い分けるのが基本です。",
    "業者に頼む場合は、高槻市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目は市が示す収集運搬料金も参考に、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "大型可燃ごみ（毎月1回）", org: "高槻市", url: `${T}/soshiki/27/2136.html`, updated: "2024年8月9日" },
    { label: "不燃ごみ（毎月1回）", org: "高槻市", url: `${T}/soshiki/27/2133.html`, updated: "2024年8月9日" },
    { label: "臨時ごみの収集を依頼する（有料）", org: "高槻市", url: `${T}/soshiki/27/2138.html`, updated: "2024年8月9日" },
    { label: "エネルギーセンターにごみを持ち込むには", org: "高槻市", url: `${T}/soshiki/28/29023.html`, updated: "2025年9月5日" },
    { label: "エネルギーセンターへのごみの持ち込みの届出方法（「ホームページ」から申し込む）", org: "高槻市", url: `${T}/soshiki/28/2164.html`, updated: "2025年12月26日" },
    { label: "エネルギーセンターへのごみの持ち込みの届出方法（「一般廃棄物運搬届出書」を提出する）", org: "高槻市", url: `${T}/soshiki/28/2162.html`, updated: "2025年7月17日" },
    { label: "エネルギーセンターに持ち込めないごみ", org: "高槻市", url: `${T}/soshiki/28/2165.html`, updated: "2024年4月1日" },
    { label: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機の処分方法", org: "高槻市", url: `${T}/soshiki/27/2141.html`, updated: "2024年3月1日" },
    { label: "パソコン・タブレット", org: "高槻市", url: `${T}/soshiki/27/2115.html`, updated: "2024年4月1日" },
    { label: "高齢者等のごみ出しを支援します", org: "高槻市", url: `${T}/site/waiwai/166846.html`, updated: "2026年8月14日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（大阪府が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaTakatsukiPage() {
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
              <Link href="/area/edogawa-ku/" className="text-primary underline underline-offset-2">江戸川区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/hirakata/" className="text-primary underline underline-offset-2">枚方市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2">広島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/ichinomiya/" className="text-primary underline underline-offset-2">一宮市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/itabashi-ku/" className="text-primary underline underline-offset-2">板橋区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/kita-ku/" className="text-primary underline underline-offset-2">北区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/nakano-ku/" className="text-primary underline underline-offset-2">中野区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/sakai/" className="text-primary underline underline-offset-2">堺のゴミ屋敷・不用品の片付け業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌のゴミ屋敷・不用品の片付け業者おすすめ5選</Link>
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
              <Link href="/area/suginami-ku/" className="text-primary underline underline-offset-2">杉並区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
            </li>
            <li>
              <Link href="/area/suita/" className="text-primary underline underline-offset-2">吹田市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/sumida-ku/" className="text-primary underline underline-offset-2">墨田区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
