import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "寝屋川市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-27/city-27215/", count: 146 },
  curama: { url: "https://curama.jp/disposal/osaka/16/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/osaka/neyagawa" },
};

const N = "https://www.city.neyagawa.osaka.jp/organization_list/kankyo";

const d: AreaCityData = {
  slug: "neyagawa",
  name: "寝屋川市",
  title: "寝屋川市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜大きいごみ・引っ越しごみは臨時ごみ（10kgまでごとに270円）、クリーンセンター持ち込み【2026年版】",
  description:
    "寝屋川市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。臨時ごみ（10キログラムまでごとに270円・立会い）、クリーンセンター持ち込み（10キログラムまでごとに130円）、家電リサイクル法対象品の市の手数料、パソコンの無料回収を公式ページで確認してまとめています。",
  ogDescription:
    "寝屋川市を対応エリアに含む片付け・不用品回収業者3社と、臨時ごみ（大きいごみ・引っ越しごみ）の出し方、クリーンセンターへの持ち込み、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  h1: "寝屋川市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "寝屋川市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["寝屋川市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "寝屋川市では、1つの寸法が40センチメートル×100センチメートル×40センチメートルを超えるか重さが10キログラムを超える大きいごみと、引っ越しなどで一度に大量（45リットルポリ袋で3袋以上）に出るごみを「臨時ごみ」として扱います。臨時ごみ受付センターに電話で予約し、料金は10キログラムまでごとに270円で、収集日当日に立会いのもとで支払います。",
    `本記事では、寝屋川市の公式ページで確認した臨時ごみの出し方、クリーンセンターへの持ち込み、家電4品目・パソコンの扱い（${CHECKED}確認）と、寝屋川市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、寝屋川市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      寝屋川市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに寝屋川市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に大阪府が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「寝屋川市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "寝屋川市の臨時ごみ・持ち込み・家電4品目・パソコン（市の公式情報）",
  factsLead: (
    <>
      寝屋川市の大きいごみや引っ越しで大量に出るごみは、重さに応じた料金の臨時ごみ（収集）か、クリーンセンターへの持ち込みで処理します。家電4品目はリサイクル券を購入したうえで臨時ごみに申し込むか指定引取場所に持ち込み、パソコンは市の連携事業者による宅配回収などを使います。
    </>
  ),
  facts: [
    { k: "臨時ごみ（収集）", v: "1つの寸法が40センチメートル×100センチメートル×40センチメートルを超えるもの、重量が10キログラムを超えるもの（タンス等の家具を分解した場合も同じ）と、引っ越しなどで一度に大量（45リットルポリ袋で3袋以上）に出るごみが対象。臨時ごみ受付センター（072-868-5374、月曜〜金曜 午前8時30分〜午後5時、祝日含む）に電話で予約。繁忙期（年末年始・3月・4月上旬など）は3週間前までに予約", src: "寝屋川市「収集を希望する場合」（更新日 2025年04月01日）" },
    { k: "臨時ごみの料金", v: "10キログラムまでごとに270円。収集日当日に立会いのもと支払う。午前は9時〜11時、午後は1時〜3時の間に収集し、ごみは屋外の収集車両が入れる場所に出す", src: "寝屋川市「収集を希望する場合」（更新日 2025年04月01日）、同「引越しごみ・大型ごみの処理」（更新日 2025年04月01日）" },
    { k: "持ち込み", v: "クリーンセンターに持ち込めるのは、寝屋川市内の家庭から発生する臨時ごみに限る。料金は10キログラムまでごとに130円。持込み可能な車両は2トン車まで、荷下ろしは本人が行う。受付は9時〜16時（祝・休日を含む月曜〜金曜、原則第2土曜日・第4日曜日）。分別した古紙・古着は無料（他のごみと混載の場合は有料）", src: "寝屋川市「持込む場合」（更新日 2025年04月01日）" },
    { k: "本人以外の持ち込み", v: "ごみは本人以外持込めず、市民と確認できるもの（免許証、健康保険証など）を提示する。事業活動に伴って発生するごみは引き取らない", src: "寝屋川市「持込む場合」（更新日 2025年04月01日）" },
    { k: "市では処理できない物", v: "産業廃棄物、畳、瓦、木材（直径5センチメートル・長さ1メートル以上）、金庫、廃ゴムタイヤ、エンジン付きの草刈機、発電機、ピアノ、コンクリートブロック、原動機付き自転車、バッテリー、風呂釜、プロパンガスボンベ、電気温水器、建築物の改築・改装等で出る建築廃材など", src: "寝屋川市「持込む場合」（更新日 2025年04月01日）" },
    { k: "家電4品目", v: "不燃ごみでは収集しない。以前購入した小売店か買替購入する小売店に引き取りを依頼し、近くにない場合は、郵便局又はゆうちょ銀行で家電リサイクル券を購入して市の臨時ごみに申し込むか、指定引取場所に直接持ち込む。市の収集運搬手数料（リサイクル料金は別）は、引き取り時がエアコン1,200円、テレビ1,100円、冷蔵庫・冷凍庫1,700円、洗濯機・乾燥機1,000円、クリーンセンターへの持ち込み時はそれぞれ700円・700円・1,000円・600円", src: "寝屋川市「家電リサイクル法」（更新日 2025年04月01日）" },
    { k: "パソコン", v: "市内公共施設の小型家電回収ボックス（投入口 横31センチメートル・縦15センチメートル以内）、市の連携・協力事業者であるリネットジャパンリサイクル株式会社による宅配回収（パソコン本体を含む1箱分は無料、3辺合計140センチメートル以内・20キログラム以下）、または販売店・製造メーカー・パソコン3R推進協会への相談のいずれか。リネットジャパンの回収は市による回収ではない", src: "寝屋川市「パソコンの廃棄(リサイクル)」（更新日 2025年04月01日）、同「不要なパソコンの無料回収」（更新日 2025年04月01日）" },
    { k: "無許可業者への注意", v: "市は、一般廃棄物を収集するにはその市町村の一般廃棄物収集運搬業の許可が必要で、許可なく、または市町村の委託を受けずにごみを回収している業者を無許可の回収業者と説明。トラックで市内を回る無料回収やポストへのチラシ配布などを挙げ、無許可の回収業者は利用しないよう案内している", src: "寝屋川市「「無許可」の回収業者にご注意ください！」（更新日 2025年04月01日）" },
    { k: "手数料の免除", v: "一般廃棄物処理手数料免除申請書の様式では、免除の理由として、天災その他これに類する災害を受けた者、生活保護法による生活扶助を受けている者（生活保護受給証明書を添付）、その他市長が特別の理由があると認める者などが挙げられている", src: "寝屋川市「一般廃棄物処理手数料免除申請書」（更新日 2025年04月01日）掲載の申請書（PDF）" },
    { k: "ごみ出しの支援", v: "ふれあい訪問収集: 要介護3以上または認知症に該当すると認められた満65歳以上の高齢者のみの世帯、身体障害者手帳（1・2級）・療育手帳（A）の方のみの世帯などで、何らかの福祉サービスを受けている世帯を対象に、家庭用一般ごみなどを玄関等まで訪問して収集。近所の人、親族、ホームヘルパー等の協力でごみ出しが可能な方は対象外", src: "寝屋川市「ふれあい訪問収集」（更新日 2025年04月01日）" },
  ],
  sections: [
    {
      id: "rinji-mochikomi",
      title: "寝屋川市の臨時ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            寝屋川市では、大きいごみ（40センチメートル×100センチメートル×40センチメートル超、または10キログラム超）と、引っ越しなどで45リットルポリ袋3袋以上まとめて出るごみは、どちらも臨時ごみとして扱われます。臨時ごみ受付センターに電話で予約し、10キログラムまでごとに270円を収集日当日に立会いのもとで支払います。ごみは屋外の収集車両が入れる場所に出しておく必要があり、繁忙期は3週間前までの予約が求められます。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自分で運べるなら、クリーンセンターへの持ち込みは10キログラムまでごとに130円で、収集より割安です。ただし持ち込みは本人に限られ、2トン車まで、荷下ろしも本人が行います。部屋からの運び出しまで頼みたい場合は、使える物をリユースに回し、臨時ごみや持ち込みで減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電4品目の市の収集運搬手数料と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            寝屋川市は、家電4品目を臨時ごみとして引き取る場合と、クリーンセンターに持ち込む場合の収集運搬手数料を公表しています（リサイクル料金は別）。また市は、無料回収などをうたう無許可の回収業者について、回収後に高額な処理料金を請求された事例もあるとして、利用しないよう案内しています。片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、臨時ごみ・持ち込みのどちらで出すかを決める", b: "大きいごみとまとめて出るごみのおおよその重さを見積もり、臨時ごみ（10キログラムまでごとに270円・電話予約）で出すか、自分でクリーンセンターへ持ち込む（10キログラムまでごとに130円・本人のみ）かを品物ごとに割り振ります。運び出しが難しい物は業者への依頼に回します。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "寝屋川市で粗大ごみはどう出しますか？", a: "1つの寸法が40センチメートル×100センチメートル×40センチメートルを超えるか、重さが10キログラムを超える大きいごみは臨時ごみとして扱われます。臨時ごみ受付センター（072-868-5374）に電話で予約し、10キログラムまでごとに270円を収集日当日に支払います（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみを寝屋川市に収集してもらえますか？", a: "引っ越しなどで一度に大量（45リットルポリ袋で3袋以上）に出るごみも臨時ごみとして収集してもらえます。料金は10キログラムまでごとに270円で、立会いが必要です。繁忙期（年末年始・3月・4月上旬など）は3週間前までに予約します。" },
    { q: "寝屋川市でごみを自分で持ち込むといくらかかりますか？", a: "クリーンセンターへの持ち込みは10キログラムまでごとに130円です。市内の家庭から出る臨時ごみに限られ、本人以外は持ち込めず、免許証などの提示が必要です。" },
    { q: "寝屋川市で冷蔵庫や洗濯機を処分するには？", a: "以前購入した小売店か買替購入する小売店に引き取りを依頼します。近くにない場合は、郵便局などで家電リサイクル券を購入したうえで市の臨時ごみに申し込む（冷蔵庫・冷凍庫1,700円、洗濯機・乾燥機1,000円の収集運搬手数料）か、指定引取場所に直接持ち込みます。" },
    { q: "関東の記事で見たお助けうさぎは寝屋川市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、大阪府は含まれていません（2026年11月1日確認）。本記事では、公式ページで寝屋川市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "寝屋川市の大きいごみや引っ越しで大量に出るごみは臨時ごみとして扱われ、収集は10キログラムまでごとに270円（電話予約・立会い）、本人がクリーンセンターへ持ち込む場合は10キログラムまでごとに130円です。パソコンは小型家電回収ボックスや市の連携事業者の宅配回収などを使います。",
    "業者に頼む場合は、寝屋川市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目は市が示す収集運搬手数料も参考に、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "収集を希望する場合", org: "寝屋川市", url: `${N}/kankyoujigyou/moti/1590626319945.html`, updated: "2025年04月01日" },
    { label: "引越しごみ・大型ごみの処理", org: "寝屋川市", url: `${N}/kankou_soumu/gomi_no_bunbetsu/1406092207342.html`, updated: "2025年04月01日" },
    { label: "持込む場合", org: "寝屋川市", url: `${N}/kankyoujigyou/moti/1377161140758.html`, updated: "2025年04月01日" },
    { label: "家電リサイクル法", org: "寝屋川市", url: `${N}/kankou_soumu/gomigennryou/recycle/1376888651733.html`, updated: "2025年04月01日" },
    { label: "パソコンの廃棄(リサイクル)", org: "寝屋川市", url: `${N}/kankou_soumu/situmonn/1377847766353.html`, updated: "2025年04月01日" },
    { label: "不要なパソコンの無料回収", org: "寝屋川市", url: `${N}/kankou_soumu/gomi_no_bunbetsu/19528.html`, updated: "2025年04月01日" },
    { label: "「無許可」の回収業者にご注意ください！", org: "寝屋川市", url: `${N}/kankou_soumu/sakujoyotei/1376896296478.html`, updated: "2025年04月01日" },
    { label: "一般廃棄物処理手数料免除申請書", org: "寝屋川市", url: `${N}/kankyoujigyou/shinnseisyodownro_do/1377843801492.html`, updated: "2025年04月01日" },
    { label: "ふれあい訪問収集", org: "寝屋川市", url: `${N}/kankyoujigyou/syu/1557468434646.html`, updated: "2025年04月01日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（大阪府が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaNeyagawaPage() {
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
