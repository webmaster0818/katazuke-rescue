import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "越谷市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-11/city-11222/", count: 196 },
  curama: { url: "https://curama.jp/disposal/saitama/19/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/saitama/koshigaya" },
  usagi: { band: "「埼玉県で25分程度で即日回収ができるエリア」", short: "公式の即日対応エリア（25分程度）" },
};

const d: AreaCityData = {
  slug: "koshigaya",
  name: "越谷市",
  title: "越谷市のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ手数料と令和9年4月の改定【2026年版】",
  description:
    "越谷市でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、越谷市を対応エリアに含むことを公式で確認して比較。粗大ごみの手数料（一辺の長さで400円〜1,200円）と令和9年4月1日収集分からの改定、リサイクルプラザへの無料の直接搬入、市が許可業者への依頼を案内する場面、家電4品目の出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "越谷市を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみの手数料と令和9年4月の改定、リサイクルプラザへの無料の直接搬入、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "越谷市のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "越谷市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["越谷市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "越谷市の粗大ごみは、一辺の長さで手数料が決まる分かりやすい仕組みで、リサイクルプラザへ自分で持ち込めば手数料は無料です。一方で、市は令和9年4月1日の収集分から粗大ごみの手数料を改定すると発表しており、収集日が4月1日以降なら新料金が適用されます。また市は、引越し等で大量のごみを一度に処分する場合や、家の中から粗大ごみを運び出せない場合は、市の許可業者に依頼するよう案内しています。",
    `本記事では、越谷市の公式ページで確認した粗大ごみの手数料・改定・直接搬入・家電4品目の扱い（${CHECKED}確認）と、越谷市を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、越谷市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      越谷市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで越谷市が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは越谷市の業者一覧ページ、お助けうさぎは公式の対応エリアページ（埼玉県で25分程度で即日回収ができるエリアに越谷市を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「越谷市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "越谷市の粗大ごみ・直接搬入・家電4品目（市の公式情報）",
  factsLead: (
    <>
      越谷市では、一辺が50cm以上または重さが10kg以上のものが粗大ごみです。石油ストーブ・石油ファンヒーター・ガスコンロ・電子レンジは大きさに関わらず粗大ごみになります。市の戸別有料収集と、リサイクルプラザへの直接搬入のどちらも事前予約が必要です。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ予約専用電話 048-973-5300（月曜〜金曜 8時30分〜17時、祝日・年末年始を除く）、電子申請、資源・ごみ分別アプリ「さんあ～る」から申し込める。月曜日や休日の翌日は電話が混み合う", src: "越谷市「粗大ごみの処分方法について」（更新日 2026年1月1日）" },
    { k: "手数料（現行）", v: "一辺の長さ50cm以上120cm未満 400円、120cm以上180cm未満 800円、180cm以上 1,200円、スプリング入りマットレス 2,800円。粗大ごみシールを品物1点ごとに貼る", src: "同上" },
    { k: "手数料の改定", v: "令和9年4月1日から改定。上記以外のもの 600円、120cm以上180cm未満 1,200円、180cm以上 1,800円、スプリング入りマットレス 4,200円。予約受付日ではなく収集日を基準とし、収集日が4月1日以降なら新料金。3月1日以降の予約受付分から新料金が適用される", src: "越谷市「粗大ごみ手数料が令和9年4月1日から改定されます」（更新日 2026年10月28日）" },
    { k: "収集", v: "収集日は地区ごとに異なり、「燃えないごみ」「ペットボトル」の収集曜日。収集時間は8時〜15時で雨天時も収集。収集日の朝8時までに申込時に確認した場所に出す", src: "越谷市「粗大ごみの処分方法について」" },
    { k: "運び出せない場合", v: "家の中から指定の場所まで出せない等の場合は、一般廃棄物収集運搬許可業者に収集を依頼するよう案内", src: "同上" },
    { k: "直接搬入（持ち込み）", v: "越谷市リサイクルプラザへ。手数料は無料で粗大ごみシールは不要。予約は電話で、翌日から5週間先の金曜日まで。搬入は月曜〜金曜（祝日・年末年始を除く）9時〜11時、13時30分〜15時。搬入できるのは越谷市に住む排出者本人で、自身の所有する自家用車に限る（トラック等の貨物自動車や会社名が記載された車両は不可）", src: "同上" },
    { k: "許可業者に依頼する場面", v: "引越し等で大量なごみが出て一度に全部処分する場合、家の中から粗大ごみを運び出せない場合、家電リサイクル法の対象品を販売店での引き取り以外で処分する場合などは、市が許可した一般廃棄物収集運搬業者に依頼する（料金等は各業者に確認）", src: "越谷市「一般廃棄物収集運搬許可業者一覧」（更新日 2026年4月2日）" },
    { k: "家電4品目", v: "エアコン、テレビ、洗濯機・衣類乾燥機、冷蔵庫・冷凍庫は市で収集・処理を行わない。小売店に依頼するか、家電リサイクル法対象品の収集運搬許可業者（市が4社を掲載）に依頼するか、郵便局で家電リサイクル券を購入して指定引取場所に持ち込む", src: "越谷市「エアコン、テレビ、洗濯機・衣類乾燥機、冷蔵庫・冷凍庫の処分方法について」（更新日 2024年11月28日）" },
  ],
  sections: [
    {
      id: "kaitei",
      title: "令和9年4月の手数料改定前後で、片付けの時期をどう考えるか",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            越谷市の粗大ごみ手数料は、令和9年4月1日の収集分から、一辺180cm以上の物が1,200円から1,800円に、スプリング入りマットレスが2,800円から4,200円になるなど、各区分で引き上げられます。基準は予約した日ではなく収集日で、3月1日以降に予約を受け付けた分から新料金が適用されると市は案内しています。たとえば180cm以上の家具を5点出す場合、現行なら6,000円、改定後は9,000円です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            改定前の料金で出したい場合は、令和9年2月中に予約し、収集日が3月31日までになるかを予約の際に確認してください。ただし年度末は引越しの時期とも重なるため、予約が取りにくくなることも考えられます。リサイクルプラザへの直接搬入は、現行の案内では手数料が無料です。自家用車で運べる物は、直接搬入の条件（平日・本人・自家用車）を確認したうえで検討してください。点数が多い片付けや運び出しが難しい物は、市が案内するとおり許可業者や片付け業者に頼み、市の手数料の合計と業者の見積もりを並べて判断します。手数料の比べ方は<Link href="/sodaigomi-tesuryou-hikaku/" className={linkCls}>粗大ごみ手数料の比較</Link>、混雑期の予約の工夫は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混む時期の対策</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "市が許可業者への依頼を案内する場面と、業者選びの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            越谷市は、引越し等で大量なごみを一度に処分する場合、家の中から粗大ごみを運び出せない場合、家電リサイクル法の対象品を販売店以外で処分する場合に、市の許可を受けた一般廃棄物収集運搬業者へ依頼するよう案内し、業者の一覧を公開しています。家電4品目については、リサイクル券を扱う収集運搬許可業者4社も別に掲載しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に依頼する場合も、家庭ごみの収集運搬をどの許可業者が行うのかを見積もりの段階で確認し、市の一覧と照らし合わせておくと安心です。許可の確かめ方は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、家電の出し方は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 収集日が改定の前か後かを確かめ、市で出す分の手数料を出す", b: "粗大ごみの一辺の長さを測って区分ごとの手数料を合計し、収集日が令和9年4月1日以降になる場合は新料金で計算します。車で運べる物はリサイクルプラザへの直接搬入（現行は無料）に回します。" },
    { t: "② 業者に頼む範囲の写真と品目リストをそろえる", b: "家の中から運び出せない物、量の多い片付けごみ、家電4品目など業者に任せる範囲を決め、部屋の写真・品目と点数・階数・作業車を停められる場所を各社に同じ条件で伝えます。" },
    { t: "③ 許可と総額の内訳を確認する", b: "家庭ごみの収集運搬を行う許可業者、買取がある場合の古物商許可、搬出時の破損に備えた補償の有無を確認し、作業費・処分費・家電リサイクル料金・追加料金の条件を内訳で受け取ってから依頼を確定します。" },
  ],
  faqs: [
    { q: "越谷市の粗大ごみの手数料はいくらですか？", a: "現行は、一辺の長さ50cm以上120cm未満が400円、120cm以上180cm未満が800円、180cm以上が1,200円、スプリング入りマットレスが2,800円です。令和9年4月1日以降の収集分からは、それぞれ600円、1,200円、1,800円、4,200円に改定されます（越谷市の公式ページ、2026年11月1日確認）。" },
    { q: "改定前の料金で出すにはいつまでに予約すればよいですか？", a: "越谷市は、改定の基準は予約受付日ではなく収集日で、収集日が4月1日以降なら新料金になると案内しています。そのうえで、3月1日以降の予約受付分から新料金が適用されるとして、早めの予約を呼びかけています。改定前の料金で出したい場合は、2月中に予約し、収集日が3月31日までになるかを予約の際に確認してください。" },
    { q: "越谷市のリサイクルプラザへの持ち込みは有料ですか？", a: "現行の案内では、粗大ごみの直接搬入の手数料は無料で、粗大ごみシールの購入も不要です。電話での事前予約が必要で、搬入は平日の9時〜11時と13時30分〜15時、越谷市に住む排出者本人が自身の自家用車で運ぶ場合に限られます。" },
    { q: "越谷市で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、越谷市は「埼玉県で25分程度で即日回収ができるエリア」に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
  ],
  matome: [
    "越谷市の粗大ごみは一辺の長さで手数料が決まり、令和9年4月1日の収集分から改定されます。リサイクルプラザへの直接搬入は現行では無料で、引越し等の大量のごみや家の中から運び出せない粗大ごみは、市が許可業者への依頼を案内しています。改定の時期と搬入の条件を踏まえ、市で出す分と業者に頼む分を分けて計画するのが基本です。",
    "業者に頼む場合は、越谷市を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。収集運搬の許可と総額の内訳を、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの処分方法について", org: "越谷市", url: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/kateigomi/sodaigomino-shobunnhouhou.html", updated: "2026年1月1日" },
    { label: "粗大ごみ手数料が令和9年4月1日から改定されます", org: "越谷市", url: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/oshirase/sodai_kaitei.html", updated: "2026年10月28日" },
    { label: "一般廃棄物収集運搬許可業者一覧", org: "越谷市", url: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/jgyosyo_gomi/jigyoukei_ippan/zigiyoukeiippannhaikibutukyoka.html", updated: "2026年4月2日" },
    { label: "エアコン、テレビ、洗濯機・衣類乾燥機、冷蔵庫・冷凍庫の処分方法について", org: "越谷市", url: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/kateigomi/kadennrisaikuruhou.html", updated: "2024年11月28日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKoshigayaPage() {
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
              <Link href="/area/hachioji/" className="text-primary underline underline-offset-2">八王子のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
              <Link href="/area/itabashi-ku/" className="text-primary underline underline-offset-2">板橋区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
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
              <Link href="/area/koto-ku/" className="text-primary underline underline-offset-2">江東区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2">熊本のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kurashiki/" className="text-primary underline underline-offset-2">倉敷のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
              <Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/setagaya-ku/" className="text-primary underline underline-offset-2">世田谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/shibuya-ku/" className="text-primary underline underline-offset-2">渋谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
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
