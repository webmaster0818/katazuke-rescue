import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "旭川市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-1/city-1204/", count: 48 },
  curama: { url: "https://curama.jp/disposal/hokkaido/4/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/hokkaido/asahikawa" },
};

const d: AreaCityData = {
  slug: "asahikawa",
  name: "旭川市",
  title: "旭川市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは1点300円・650円、多量ごみは市の収集対象外【2026年版】",
  description:
    "旭川市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。粗大ごみ（1回10点まで）と1点300円・650円の手数料（令和9年4月1日から450円・970円）、旭川市廃棄物処分場への自己搬入（10kgまでごとに156円）、家電4品目を公式ページで確認してまとめています。",
  ogDescription:
    "旭川市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの申込・手数料、一時的多量ごみの扱い、廃棄物処分場への自己搬入、許可業者、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "旭川市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "旭川市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["旭川市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "旭川市の粗大ごみは事前申込制の戸別収集で、電話かオンラインで申し込んだあと、1点300円または650円の手数料シールを貼って自宅敷地内の屋外に出します。一方で、引越しや大掃除などで一時的に多量に出るごみは市では収集できないとされており、自分で旭川市廃棄物処分場へ運ぶか、市の許可する業者に依頼する仕組みです。家一軒分や部屋ごとの片付けでは、粗大ごみの収集だけでは足りない前提で計画を立てる必要があります。",
    `本記事では、旭川市の公式ページで確認した粗大ごみの申込方法と手数料（令和9年4月1日からの改定を含む）、一時的多量ごみの出し方、廃棄物処分場への自己搬入、一般廃棄物収集運搬許可業者、家電4品目の扱い（${CHECKED}確認）と、旭川市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、旭川市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      旭川市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに旭川市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に北海道が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「旭川市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "旭川市の粗大ごみ・一時的多量ごみ・自己搬入・家電4品目（市の公式情報）",
  factsLead: (
    <>
      旭川市の粗大ごみは、製品としての形状を有し、一辺または直径がおおむね50cm以上250cm未満で、重量が100kg未満のものです。定期の粗大ごみ収集と、引越しや大掃除で一時的に多量に出るごみとで、出し方が大きく変わります。手数料は令和9年4月1日から改定されます。
    </>
  ),
  facts: [
    { k: "申し込み", v: "事前申込制の戸別収集。粗大ごみ受付専用電話 0166-36-5300（月曜〜金曜の9時〜17時、土日祝日は休み）か、パソコン・スマートフォンからのオンライン申込（24時間365日）。オンラインは収集日の3日前（土日祝日を除く）まで", src: "旭川市「粗大ごみの申込方法」（更新日 2026年5月26日）、同「粗大ごみ、剪定枝・落ち葉の収集受付がオンラインで申し込めます！」（更新日 2026年1月13日）" },
    { k: "点数・時期", v: "オンライン申込では、同一収集日に申し込める粗大ごみは合計10点まで（同じ収集日に申し込めるのは1回のみ）。春・秋など引越しの多い時期は収集までに1週間から2週間程度かかる場合がある", src: "旭川市「粗大ごみ、剪定枝・落ち葉の収集受付がオンラインで申し込めます！」、同「粗大ごみ」（更新日 2026年5月26日）" },
    { k: "手数料", v: "手数料シールは300円と650円の2種類。例: ソファー650円、タンス（1メートル以上）650円、自転車650円、マットレス（スプリング入り）650円、いす（食卓用・パイプ椅子）300円", src: "旭川市「粗大ごみの申込方法」、同「粗大ごみ処理手数料表」（更新日 2023年2月14日）" },
    { k: "手数料の改定", v: "令和9年4月1日から、粗大ごみの手数料シールは300円が450円に、650円が970円に改定。令和9年3月31日までの申し込みは現行のシール、4月1日以降の申し込みは改定後のシールを購入する", src: "旭川市「令和9年4月1日からごみ処理手数料が変わります」（更新日 2026年7月1日）" },
    { k: "支払い・出し方", v: "申し込みを済ませてから、「粗大ごみ処理手数料シール取扱店」の表示があるコンビニエンスストア・スーパー等でシールを購入して貼る（間違えて購入しても払い戻しはできない）。収集当日の午前9時までに電話で打ち合わせた場所（玄関前など）に出す。屋内からの収集はできず、必ず敷地内の屋外に出す", src: "旭川市「粗大ごみの申込方法」" },
    { k: "一時的多量ごみ", v: "引越しや大掃除等で一時的に多量にごみが出る場合は市では収集できないとし、自分で処分場へ運ぶか、市の許可する業者または旭川清掃事業協同組合（電話 0166-36-8003）に依頼するよう案内。分別して4袋から5袋ずつ数回に分けて出す場合は該当しない", src: "旭川市「粗大ごみ」、同「処理困難物」（更新日 2026年8月13日）、同「引越し時に発生するごみの処理について」（更新日 2026年3月28日）" },
    { k: "自己搬入", v: "旭川市廃棄物処分場（江丹別町芳野71番地、電話 0166-59-4646）。月曜〜土曜の9時〜17時（祝日は15時まで）、日曜日と1月1日〜3日は休み。粗大ごみ・燃やせないごみは10kgまでごとに156円の埋立処分手数料、燃やせるごみは黄色の指定ごみ袋（有料）に入れて持ち込み、資源物等は無料。分別が必要で、旭川市内で発生した一般廃棄物に限る", src: "旭川市「家庭ごみの自己搬入」（更新日 2026年4月1日）" },
    { k: "埋立処分手数料の改定", v: "令和9年4月1日搬入分から、10kgまでごとに156円が234円に改定", src: "旭川市「ごみ埋立処分手数料の改定について」（更新日 2026年7月1日）" },
    { k: "許可業者", v: "一般廃棄物（引越しごみも含む）の処理を業者に依頼する場合は、一般廃棄物収集運搬の許可を持つ業者でなければならないとし、旭川市内で排出されたごみを収集運搬できる許可業者9社と旭川清掃事業協同組合を掲載。引越し業者（便利業、運送（引越）等）は多数あるが、掲載の許可業者以外は一般廃棄物収集運搬の許可を持たないことから、ごみの整理までしかできないと案内", src: "旭川市「引越し時に発生するごみの処理について」" },
    { k: "引越し・運送業者", v: "一般家庭から排出される廃棄物の収集・運搬には一般廃棄物収集運搬業の許可が必要で、許可のない業者が収集・運搬した場合は無許可営業として廃棄物処理法違反になると説明。引越し時のやむを得ない場合に限り、定められた要件をすべて満たせば引越し・運送業者が引越しごみを運搬できるとしている", src: "旭川市「引越し・運送業者の皆様へ」（更新日 2026年10月21日）" },
    { k: "家電4品目", v: "粗大ごみとしては回収できず、ごみステーションへの排出や処分場への持ち込みもできない。購入店・買い替え店に依頼するか、購入店に依頼できない場合は、市（クリーンセンター 0166-36-5300）に申し込んでリサイクル料金と収集・運搬手数料シール（2,800円）を支払う、清掃事業協同組合（0166-36-8003）に依頼する、郵便局でリサイクル料金を払って指定引取場所に持ち込む、などの方法を案内", src: "旭川市「家電リサイクル法対象品目の排出方法」（更新日 2025年3月5日）、同「粗大ごみ」" },
    { k: "パソコン", v: "市では回収していない。市の連携・協力事業者であるリネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含む場合は1箱分の回収料金が無料）か、パソコンメーカーによる回収を利用する", src: "旭川市「パソコンの排出方法」（更新日 2025年4月1日）" },
    { k: "減免", v: "生活保護法に基づく保護を受けている世帯等を対象に、粗大ごみ処理手数料の減免を実施（申請が必要）。保護課の担当ケースワーカーに品目・個数を相談したうえで粗大ごみ受付に申し込む。一度の排出個数はおおむね10個まで", src: "旭川市「粗大ごみ処理手数料減免」（更新日 2025年3月25日）" },
  ],
  sections: [
    {
      id: "tajiryou-gomi",
      title: "旭川市で片付けの多量ごみを出す3つの方法",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            旭川市は、引越しや大掃除などで一時的に多量に出るごみは市では収集できないと案内しています。片付けで出るごみは、定期の粗大ごみ収集で出せる分（オンライン申込は同じ収集日に10点まで）、自分で旭川市廃棄物処分場に運ぶ分、市の一般廃棄物収集運搬許可業者に頼む分に分けて考えるのが基本です。自分で運べる場合、処分場の埋立処分手数料は10kgまでごとに156円で、資源物は無料ですが、搬入前の分別が必要です。令和9年4月1日搬入分からは10kgまでごとに234円に改定されます。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            粗大ごみの手数料シールも、令和9年3月31日までの申し込みは300円・650円、4月1日以降の申し込みは450円・970円になります。春・秋の引越しの多い時期は収集まで1週間から2週間程度かかる場合があるため、退去日が決まっている片付けは余裕を持って申し込みましょう。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "市が案内する許可業者と、片付け業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            旭川市は、一般廃棄物（引越しごみも含む）の処理を業者に依頼する場合は一般廃棄物収集運搬の許可を持つ業者でなければならないとして、市内で排出されたごみを収集運搬できる許可業者と旭川清掃事業協同組合を公式ページに掲載しています。あわせて、便利業や運送（引越）などの業者のうち、掲載の許可業者以外は一般廃棄物収集運搬の許可を持たないことから、ごみの整理までしかできないと案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内での仕分け・搬出」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物の収集運搬をどの許可業者が行うのかを作業前に確認してください。家電4品目は、市の収集（収集・運搬手数料シール2,800円とリサイクル料金）でも出せるため、業者の見積もりと比べる材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 粗大ごみの点数と、一時的多量ごみに当たるかを判断する", b: "粗大ごみの品目と点数、袋に入るごみの量を書き出し、定期の粗大ごみ収集で出せる分と、一時的多量ごみとして処分場への自己搬入や許可業者への依頼が必要な分を分けます。手数料の改定日（令和9年4月1日）をまたぐ場合は、申し込み日でシールの金額が変わる点も確認します。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬を行う許可業者を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う市の許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "旭川市の粗大ごみはどこに申し込みますか？", a: "粗大ごみ受付専用電話（0166-36-5300、月曜〜金曜の9時〜17時）か、パソコン・スマートフォンからのオンライン申込（24時間365日、収集日の3日前（土日祝日を除く）まで）で申し込みます。手数料シールは申し込みを済ませてから購入します（2026年11月1日確認）。" },
    { q: "旭川市の粗大ごみの手数料はいくらですか？", a: "手数料シールは1点300円と650円の2種類で、品目ごとに決まっています（例: ソファー650円、いす（食卓用・パイプ椅子）300円）。令和9年4月1日以降の申し込みからは、300円が450円、650円が970円に改定されます。" },
    { q: "引越しや片付けで出る大量のごみを旭川市に収集してもらえますか？", a: "旭川市は、引越しや大掃除等で一時的に多量に出るごみは市では収集できないと案内しています。自分で旭川市廃棄物処分場に運ぶ（粗大ごみ・燃やせないごみは10kgまでごとに156円）か、市の許可する業者または旭川清掃事業協同組合（0166-36-8003）に依頼します。" },
    { q: "旭川市で片付け業者に頼むときの注意点はありますか？", a: "旭川市は、一般廃棄物の処理を業者に依頼する場合は一般廃棄物収集運搬の許可を持つ業者でなければならないとし、許可業者の一覧を公式ページに掲載しています。許可業者以外の業者はごみの整理までしかできないと案内しているため、処分する物の収集運搬をどの許可業者が行うのかを見積もりの段階で確認してください。" },
    { q: "関東の記事で見たお助けうさぎは旭川市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、北海道は含まれていません（2026年11月1日確認）。本記事では、公式ページで旭川市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "旭川市の粗大ごみは電話かオンラインで申し込み、1点300円または650円の手数料シール（令和9年4月1日以降の申し込みは450円・970円）を貼って敷地内の屋外に出します。引越しや大掃除で一時的に多量に出るごみは市では収集しないため、旭川市廃棄物処分場への自己搬入（10kgまでごとに156円）か、市の許可業者への依頼で処分します。",
    "業者に頼む場合は、旭川市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。処分する物の収集運搬を行う許可業者と、買取・処分を分けた総額の内訳を、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの申込方法", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/273/p005894.html", updated: "2026年5月26日" },
    { label: "粗大ごみ", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/273/p005897.html", updated: "2026年5月26日" },
    { label: "粗大ごみ処理手数料表", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/273/p005895.html", updated: "2023年2月14日" },
    { label: "粗大ごみ、剪定枝・落ち葉の収集受付がオンラインで申し込めます！", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/osirasegomi/d079727.html", updated: "2026年1月13日" },
    { label: "令和9年4月1日からごみ処理手数料が変わります", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/osirasegomi/d084258.html", updated: "2026年7月1日" },
    { label: "処理困難物", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/273/p005903.html", updated: "2026年8月13日" },
    { label: "引越し時に発生するごみの処理について", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/800/840/841/p005739.html", updated: "2026年3月28日" },
    { label: "家庭ごみの自己搬入", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/294/297/p002732.html", updated: "2026年4月1日" },
    { label: "ごみ埋立処分手数料の改定について", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/294/297/d084210.html", updated: "2026年7月1日" },
    { label: "引越し・運送業者の皆様へ", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/500/509/516/520/d059575.html", updated: "2026年10月21日" },
    { label: "家電リサイクル法対象品目の排出方法", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/273/p005763.html", updated: "2025年3月5日" },
    { label: "パソコンの排出方法", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/273/d080560.html", updated: "2025年4月1日" },
    { label: "粗大ごみ処理手数料減免", org: "旭川市", url: "https://www.city.asahikawa.hokkaido.jp/kurashi/271/272/277/d054628.html", updated: "2025年3月25日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（北海道が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaAsahikawaPage() {
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
