import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "明石市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-28/city-28203/", count: 132 },
  curama: { url: "https://curama.jp/disposal/hyogo/4/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/hyogo/akashi" },
};

const A = "https://www.city.akashi.lg.jp/kankyou";

const d: AreaCityData = {
  slug: "akashi",
  name: "明石市",
  title: "明石市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは1回5点まで・処理券1枚300円、多量ごみはクリーンセンター持ち込みか許可業者【2026年版】",
  description:
    "明石市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、明石市を対応エリアに含むことを公式で確認して比較。粗大ごみの申込（1回5点まで・処理券1枚300円）、引っ越しなどで一時的に多量に出るごみの扱い、明石クリーンセンターへの直接持ち込み（家庭系の可燃ごみ10kgあたり50円・事前予約）、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "明石市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの申込、多量ごみの扱い、明石クリーンセンターへの持ち込み、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "明石市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "明石市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["明石市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "明石市では、45リットルのポリ袋に入らない大きさか約5kgを超える重さの物が粗大ごみで、インターネットか電話で事前に申し込み、受付時に伝えられる枚数の粗大ごみ処理券（1枚300円）を貼って出します。1回の申し込みで出せるのは5点までです。引っ越しなどで一時的に多量に出るごみはごみステーションに出せず、明石クリーンセンターへの直接持ち込みか、一般廃棄物収集運搬許可業者への依頼になると市は案内しています。",
    `本記事では、明石市の公式ページで確認した粗大ごみの申込・手数料、多量ごみの扱い、明石クリーンセンターへの持ち込み、家電4品目・パソコンの扱い（${CHECKED}確認）と、明石市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、明石市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      明石市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに明石市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に兵庫県が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「明石市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "明石市の粗大ごみ・多量ごみ・クリーンセンター持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      明石市の粗大ごみは事前申込制で、1回5点まで、処理券を貼って家の前など受付時に決めた場所に出します。引っ越しなどで一時的に多量に出るごみはごみステーションに出せないため、明石クリーンセンターへの直接持ち込みか一般廃棄物収集運搬許可業者への依頼となり、家電4品目は粗大ごみとして出せません。
    </>
  ),
  facts: [
    { k: "粗大ごみの対象", v: "標準サイズ（45リットル、650mm×800mm）のポリ袋に入らない大きさ、または約5kgを超える重さのもの。事前申込と処分費用が必要", src: "明石市「粗大ごみの出し方」（更新日 2026年8月7日）" },
    { k: "申込", v: "インターネット受付、または粗大ごみ受付センター（078-937-0937、月曜〜金曜（祝日含む）午前9時〜午後5時）。1回の申し込みで出せるのは5点までで、5点を超える場合は複数日に分けて受付。受付日当日と翌日の予約はできず、引越シーズン・夏休み・年末などは予約できる収集日が2週間程度先になる場合がある。引っ越しの場合は引っ越す前に収集が完了するよう早めの申し込みを案内", src: "明石市「粗大ごみの出し方」（更新日 2026年8月7日）、同「粗大ごみの収集申込（電話）」（更新日 2026年10月22日）" },
    { k: "手数料・支払い", v: "受付時に伝えられる枚数の「明石市」の粗大ごみ処理券（1枚300円）をコンビニ・スーパー・市民センターなどで購入して貼る。払い戻しはできない。市の品目一覧は大まかな処分費用を積算するための参考で、似た品物でも受付内容で金額が変わることがあるため、予約確定後に購入する", src: "明石市「粗大ごみの収集申込（電話）」（更新日 2026年10月22日）、同「品目一覧」（更新日 2026年8月24日）" },
    { k: "収集", v: "収集日は月曜〜土曜（祝日含む）で、当日の午前8時までに処理券を貼って家の前など受付時に決めた場所へ出す。立会いは不要で、時間の指定はできない。職員は家の中まで入らない", src: "明石市「粗大ごみの収集申込（電話）」（更新日 2026年10月22日）、同「粗大ごみの出し方」（更新日 2026年8月7日）" },
    { k: "多量ごみ", v: "引っ越しなどで一時的に多量に出るごみはごみステーションに出せない。明石クリーンセンターに直接持ち込むか、一般廃棄物収集運搬許可業者に依頼する", src: "明石市「引っ越しなどでの一時的に多量のごみを出す場合はどうしたらいいですか?」（更新日 2026年3月9日）" },
    { k: "持ち込み", v: "明石クリーンセンター。市内で発生したごみに限り、電話またはインターネットで事前予約（搬入当日の予約は不可）。搬入は月曜〜土曜（祝日含む）の午前9時〜11時30分・午後1時〜3時30分。搬入する人の身分証明書と処理手数料が必要で、ごみは自分で降ろす。家庭系ごみの手数料は10kgあたり可燃50円、不燃破砕60円、埋立60円。搬入車両は4t車以下", src: "明石市「明石クリーンセンターへの直接持ち込みについて」（更新日 2026年10月28日）" },
    { k: "搬入者・搬入できない物", v: "搬入者は、ごみ排出者本人または一般廃棄物収集運搬許可業者に限る。タイヤ、単車、自動車などの部品、消火器、LPガスボンベ、薬剤・薬品類、ピアノ、墓石、強化プラスチック、農機具、塗料入りの缶、家電リサイクル法対象製品などは搬入できない", src: "明石市「明石クリーンセンターへの直接持ち込みについて」（更新日 2026年10月28日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫（冷凍庫）・洗濯機・衣類乾燥機はごみとして出せない。購入した店か買い換える店に引き取ってもらうのが基本で、購入店が分からない・なくなった場合は、市内協力店（リサイクル料金と別に収集運搬料金が必要）、廃家電の回収を行っている一部の一般廃棄物収集運搬許可業者（問い合わせ先は明石廃棄物処理業協同組合）、郵便局でリサイクル料金を振り込んで兵庫県指定引取場所に自分で持ち込む方法がある", src: "明石市「エアコン・テレビ・冷蔵庫・洗濯機など」（更新日 2026年6月30日）" },
    { k: "不用品回収業者について", v: "市は、家庭のごみは市の責任の下で適正に処理する必要があり、市の許可や委託を受けずに回収業者が家庭のごみを収集することは認められていないとして、無許可の回収業者を利用しないよう呼びかけ、一般廃棄物処理業許可業者の一覧を掲載している", src: "明石市「エアコン・テレビ・冷蔵庫・洗濯機など」（更新日 2026年6月30日）" },
    { k: "パソコン", v: "小型家電として市の公共施設や市内各所の拠点回収で無料回収（マウス・キーボード等の周辺機器も対象。デスクトップパソコン等の大きいものは有人拠点回収）。市の回収とは別に、メーカー等による回収（PCリサイクルマークのない製品は回収・リサイクル料金が必要）もある", src: "明石市「家庭系パソコン」（更新日 2026年8月18日）" },
    { k: "ごみ出しの支援", v: "ふれあい収集（要援護者ごみ戸別収集）: ごみを自らステーションに出すことが困難で、ひとり暮らしの65歳以上で要介護2以上かつホームヘルプサービスを受給している人、または居宅介護・生活介護の給付を受けているひとり暮らしの障害者などを対象に、申請・審査により戸別に訪問して収集", src: "明石市「ふれあい収集（要援護者ごみ戸別収集）」（更新日 2024年3月21日）" },
  ],
  sections: [
    {
      id: "tairyou-mochikomi",
      title: "明石市の粗大ごみ・多量ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            明石市の粗大ごみは1回の申し込みで5点までで、受付日当日と翌日の予約はできず、引越シーズンなどは収集日が2週間程度先になる場合があります。収集日は当日の午前8時までに家の前などに出す方式で、職員は家の中まで入りません。退去日が決まっている引っ越しや、家一軒分の片付けのように点数が多い場合は、粗大ごみの収集だけで出し切れるかを先に見積もっておくことが大切です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            引っ越しなどで一時的に多量に出るごみはごみステーションに出せず、市は明石クリーンセンターへの直接持ち込みか、一般廃棄物収集運搬許可業者への依頼を案内しています。持ち込みは事前予約制で、家庭系ごみは10kgあたり50〜60円、荷下ろしは自分で行い、搬入者はごみを出す本人か一般廃棄物収集運搬許可業者に限られます。部屋からの運び出しまで頼みたい場合は、使える物をリユースに回し、粗大ごみの収集や持ち込みで減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電4品目の出し方と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            明石市では家電4品目をごみとして出せず、購入店・買い替え先のほか、市内協力店、廃家電の回収を行っている一部の一般廃棄物収集運搬許可業者、指定引取場所への自己搬入のいずれかで処分します。協力店や許可業者に頼む場合はリサイクル料金と別に収集運搬の料金がかかるため、片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            市は、市の許可や委託を受けずに回収業者が家庭のごみを収集することは認められていないと案内しています。業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 点数と期限から、粗大ごみの収集・持ち込み・業者のどれで出すかを決める", b: "大きなごみを書き出し、1回5点までの粗大ごみ収集で退去日や引き渡し日までに出し切れるかを確かめます。一時的に多量に出る分は、明石クリーンセンターへの持ち込み（事前予約）か、許可業者・片付け業者への依頼に割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "明石市で粗大ごみはどう出しますか？", a: "インターネットか粗大ごみ受付センター（078-937-0937）に事前に申し込み、受付時に伝えられる枚数の粗大ごみ処理券（1枚300円）を購入して貼り、収集日の午前8時までに受付時に決めた場所へ出します。1回の申し込みで出せるのは5点までです（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみを明石市に収集してもらえますか？", a: "引っ越しなどで一時的に多量に出るごみはごみステーションに出せません。市は、明石クリーンセンターに直接持ち込むか、一般廃棄物収集運搬許可業者に依頼するよう案内しています。" },
    { q: "明石クリーンセンターに自分で持ち込むといくらかかりますか？", a: "家庭系ごみは10kgあたり可燃50円、不燃破砕60円、埋立60円です。電話またはインターネットで事前に予約し（当日予約は不可）、月曜〜土曜（祝日含む）の午前9時〜11時30分・午後1時〜3時30分に、身分証明書を持って搬入します。" },
    { q: "明石市で冷蔵庫や洗濯機を処分するには？", a: "購入した店か買い換える店に引き取ってもらうのが基本です。購入店が分からない場合は、市内協力店、廃家電の回収を行っている一部の一般廃棄物収集運搬許可業者、指定引取場所への自己搬入のいずれかで処分します。粗大ごみとしては出せません。" },
    { q: "関東の記事で見たお助けうさぎは明石市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、兵庫県は含まれていません（2026年11月1日確認）。本記事では、公式ページで明石市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "明石市の粗大ごみは事前申込制で1回5点まで、処理券（1枚300円）を貼って出します。引っ越しなどで一時的に多量に出るごみはごみステーションに出せないため、明石クリーンセンターへの持ち込み（事前予約・家庭系は10kgあたり50〜60円）か一般廃棄物収集運搬許可業者への依頼、と使い分けるのが基本です。",
    "業者に頼む場合は、明石市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目を含む場合は、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "明石市", url: `${A}/shuushuu_jigyou_ka/kurashi/gomi/sodai.html`, updated: "2026年8月7日" },
    { label: "粗大ごみの収集申込（電話）", org: "明石市", url: `${A}/shuushuu_jigyou_ka/kurashi/gomi/sodai-dennwademousikomu.html`, updated: "2026年10月22日" },
    { label: "品目一覧", org: "明石市", url: `${A}/shuushuu_jigyou_ka/kurashi/gomi/sodaigomiryoukinnhyouhinnmokuitirann.html`, updated: "2026年8月24日" },
    { label: "引っ越しなどでの一時的に多量のごみを出す場合はどうしたらいいですか?", org: "明石市", url: `${A}/clean_cen/faq/kurashi/gomi/003.html`, updated: "2026年3月9日" },
    { label: "明石クリーンセンターへの直接持ち込みについて", org: "明石市", url: `${A}/clean_cen/kurashi/gomi/dashikata/acc_mochikomi.html`, updated: "2026年10月28日" },
    { label: "エアコン・テレビ・冷蔵庫・洗濯機など", org: "明石市", url: `${A}/shigen_junkan_ka/kurashi/gomi/genryou_r/kaden_r.html`, updated: "2026年6月30日" },
    { label: "家庭系パソコン", org: "明石市", url: `${A}/shigen_junkan_ka/kurashi/gomi/genryou_r/pc_r.html`, updated: "2026年8月18日" },
    { label: "ふれあい収集（要援護者ごみ戸別収集）", org: "明石市", url: `${A}/shuushuu_jigyou_ka/kurashi/gomi/fureai.html`, updated: "2024年3月21日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（兵庫県が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};


export const metadata = buildAreaMetadata(d);

export default function AreaAkashiPage() {
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
              <Link href="/area/hirakata/" className="text-primary underline underline-offset-2">枚方市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
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
