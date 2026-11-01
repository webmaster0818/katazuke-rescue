import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "中野区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13114/", count: 221 },
  curama: { url: "https://curama.jp/disposal/tokyo/14/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/nakano" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "nakano-ku",
  name: "中野区",
  title: "中野区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターの申込方法と運び出し収集【2026年版】",
  description:
    "中野区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、中野区を対応エリアに含むことを公式で確認して比較。中野区粗大ごみ受付センターの申込方法、品目別の手数料例、運び出し収集、家電4品目の区内の中間集積所への持ち込み、パソコンの出し方、不用品回収業者についての区の案内を区の公式ページで確認してまとめています。",
  ogDescription:
    "中野区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・手数料例・運び出し収集・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "中野区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "中野区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["中野区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "中野区の粗大ごみは、中野区粗大ごみ受付センターに電話かインターネットで事前に申し込み、中野区の有料粗大ごみ処理券を貼って、指定された収集日の朝8時までに指定の場所に出します。中野区は、家庭で不用となった家電製品や粗大ごみは区が指定した方法でしか出せず、それ以外の方法で民間業者が家庭から不用品を回収することは違法行為にあたる、また「産業廃棄物の許可」や「古物商の許可」では家庭から出る不用品を回収できない、と案内しています。業者に片付けを頼む場合も、回収した物がどのように処分されるかを確かめることが大切です。",
    `本記事では、中野区の公式ページで確認した粗大ごみの申込方法・手数料・処理券・運び出し収集・家電4品目とパソコンの扱い（${CHECKED}確認）と、中野区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、中野区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      中野区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで中野区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは中野区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に中野区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「中野区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "中野区の粗大ごみ・運び出し収集・家電4品目（区の公式情報）",
  factsLead: (
    <>
      中野区では、一辺の長さが30センチを超える家具や家電製品などを粗大ごみ（有料）として収集しています。収集は事前申込制で、申し込み先は中野区粗大ごみ受付センターです。事業活動（会社・商店）から出る大型ごみは区で収集しません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "中野区粗大ごみ受付センター（電話 03-5715-2255、月曜〜土曜 8時〜19時、日曜と年末年始を除く。英語・中国語にも対応）。インターネットは24時間（定期メンテナンス時などを除く）だが、インターネットで申し込めない品目がある。事業活動（会社・商店）から出る大型ごみは区で収集しない", src: "中野区「「粗大ごみ」の出し方(事前申し込み制)」（更新日 2026年5月20日）" },
    { k: "手数料の例", v: "令和5年10月1日申し込み分から改定。いす・自転車（16インチ未満）・ふとんなど400円、ソファ（1人用）・自転車（16インチ以上）・ストーブなど900円、畳（一畳）・シングルベッド・ベッドマットなど1,300円、ソファ（2人用以上）・ダブルベッドなど2,300円、両袖机など3,200円。たんす等の家具は解体前の製品・規格で料金が決まる", src: "中野区「令和5年10月1日から廃棄物処理手数料が変わりました」（更新日 2023年10月20日）、同「「粗大ごみ」の出し方(事前申し込み制)」" },
    { k: "支払い・出し方", v: "申し込み後に、中野区内のコンビニエンスストア等で中野区の有料粗大ごみ処理券（処理券A 200円・処理券B 300円）を購入する。必要な枚数・種類は申し込み時に案内される。処理券に収集日とお名前（または4桁の受付番号）を書いて貼り、指定された収集日・収集場所に朝8時までに出す。処理券が不足している場合は収集できない", src: "中野区「「粗大ごみ」の出し方(事前申し込み制)」" },
    { k: "処理券の払い戻し", v: "有料粗大ごみ処理券は原則として払い戻しできないが、購入した方が中野区外へ転出した場合や、粗大ごみの排出を取りやめた場合などは払い戻しができる。手続きは中野区清掃事務所のみで受け付ける", src: "中野区「有料ごみ処理券の払い戻し（還付）と差額精算の手続き」（更新日 2023年11月29日）" },
    { k: "運び出し収集", v: "65歳以上の方、要支援・要介護認定を受けている方、身体障害者手帳（1級または2級）の交付を受けている方だけで構成される世帯で、訪問介護や親族・近隣の方などの協力を得られない場合が対象。事前に下見があり、部屋から出すことが難しい場合は断られることがある。1回の運び出しは粗大ごみ処理手数料3,200円分まで。清掃事務所（03-3387-5353）に相談する", src: "中野区「「粗大ごみ」の出し方(事前申し込み制)」" },
    { k: "多量のごみ", v: "植木の剪定や引越しなどで一度に多量（45リットルのごみ袋で5袋以上）のごみを出す場合は有料（臨時ごみ）で、清掃事務所に相談する。手数料は45リットル袋1袋300円、70リットル袋1袋600円", src: "中野区「一度に多量のごみが出るとき（臨時ごみ）」（更新日 2026年2月4日）、同「令和5年10月1日から廃棄物処理手数料が変わりました」" },
    { k: "家電4品目", v: "家庭用のエアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集できない。購入した、または買い替える販売店に依頼する、家電リサイクル受付センター（インターネットは24時間、電話 0570-087200 は月曜〜金曜 9時〜17時）に依頼する、区内の中間集積所（中野運輸株式会社・丸山一丁目、株式会社小川商会・江原町一丁目）に持ち込む、または指定引取場所に持ち込む。区は、不用となった家電製品は区から家電リサイクル対象品目の許可を受けた民間業者しか回収できない（電気販売店は除く）としている", src: "中野区「家庭のエアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の処分」（更新日 2026年5月20日）" },
    { k: "パソコン", v: "粗大ごみとしては収集しない。区の連携・協力事業者リネットジャパンリサイクル株式会社の宅配便回収（パソコン本体が含まれていれば1箱分無料、3辺合計140cm以内・20kg以下）、またはメーカー等による回収を利用する", src: "中野区「「パソコン」の処理方法」（更新日 2025年10月29日）、同「「粗大ごみ」の出し方(事前申し込み制)」" },
    { k: "区で収集しないもの", v: "ピアノ、タイヤ、バイク、バッテリー、消火器など処理が困難なものは区で収集しない。購入店やメーカー等に問い合わせる", src: "中野区「「粗大ごみ」の出し方(事前申し込み制)」" },
    { k: "不用品回収業者", v: "家庭で不用となった家電製品や粗大ごみは区が指定した方法でしか出せず、それ以外の方法で民間業者が家庭から不用品を回収することは違法行為にあたる、また「産業廃棄物の許可」や「古物商の許可」では家庭から出る不用品を回収できない、と案内。トラックでの街宣、チラシ、空き地の看板、インターネットでの「無料で引き取ります」といった宣伝による回収を例に挙げ、利用しないよう呼びかけている", src: "中野区「違法な不用品回収業者にご注意ください！」（更新日 2023年10月20日）" },
  ],
  sections: [
    {
      id: "hakobidashi",
      title: "運び出し収集の対象と、収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            中野区の粗大ごみは、申し込み時に案内された収集日・収集場所に朝8時までに出す必要があります。65歳以上の方や要支援・要介護認定を受けている方などだけの世帯で、周囲の協力を得られない場合は、清掃事務所の運び出し収集を相談できます。ただし事前に下見があり、部屋から出すことが難しい物は断られる場合があるほか、1回の運び出しは粗大ごみ処理手数料3,200円分までとされています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            指定の場所まで出せる物は区の収集、運び出せない物や点数の多い片付けは、対象世帯なら運び出し収集、それ以外は業者、と分けるのが基本です。たんす等の家具は解体前の製品・規格で料金が決まるため、申し込みの前に寸法を確認しておきます。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "ku-annai-gyousha",
      title: "不用品回収業者についての区の案内と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            中野区は、家庭で不用となった家電製品や粗大ごみは区が指定した方法でしか出せず、それ以外の方法で民間業者が家庭から不用品を回収することは違法行為にあたる、また「産業廃棄物の許可」や「古物商の許可」では家庭から出る不用品を回収できない、と案内しています。家電4品目については、区から家電リサイクル対象品目の許可を受けた民間業者しか回収できない（電気販売店は除く）としています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。区の粗大ごみ収集や家電リサイクルと組み合わせる提案になっているかも判断材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区に出す物の品目と寸法を書き出し、受付センターで手数料を確かめる", b: "出したい物の品目と点数を書き出し、たんす等の家具は寸法を測っておきます。中野区粗大ごみ受付センターに申し込むと、必要な処理券の枚数・種類と収集日・場所が案内されます。インターネットで申し込めない品目は電話で申し込みます。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "中野区の粗大ごみはどこに申し込みますか？", a: "中野区粗大ごみ受付センターに、電話（03-5715-2255、月曜〜土曜の8時〜19時、年末年始を除く）またはインターネット（24時間、申し込めない品目あり）で申し込みます。申し込み後に、案内された枚数・種類の中野区の有料粗大ごみ処理券（A 200円・B 300円）をコンビニエンスストア等で購入します（2026年11月1日確認）。" },
    { q: "中野区の粗大ごみの手数料はいくらですか？", a: "品目によって異なります。区の品目例では、いす・ふとんなど400円、ソファ（1人用）・自転車（16インチ以上）など900円、シングルベッド・畳（一畳）など1,300円、ソファ（2人用以上）・ダブルベッドなど2,300円、両袖机など3,200円です（令和5年10月1日申し込み分から）。" },
    { q: "中野区で不用品回収業者に家庭の不用品を回収してもらってもよいですか？", a: "中野区は、家庭で不用となった家電製品や粗大ごみは区が指定した方法でしか出せず、それ以外の方法で民間業者が家庭から不用品を回収することは違法行為にあたる、また「産業廃棄物の許可」や「古物商の許可」では家庭から出る不用品を回収できない、と案内しています。業者に片付けを頼む場合は、運び出しや買取と処分を分けた見積もりを受け取り、処分する物をどのように処理するのかを作業前に確認してください。" },
    { q: "中野区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、中野区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "中野区で家電4品目を自分で持ち込めますか？", a: "区内の中間集積所（中野運輸株式会社・丸山一丁目、株式会社小川商会・江原町一丁目）に持ち込む方法（リサイクル料金と運搬料金がかかる）と、指定引取場所に持ち込む方法（リサイクル料金がかかる）があります。営業日時や持ち込み方法を事前に確認してから持ち込みます。" },
  ],
  matome: [
    "中野区の粗大ごみは、粗大ごみ受付センターに事前に申し込み、中野区の有料粗大ごみ処理券を貼って、指定された収集日・場所に朝8時までに出します。対象世帯は清掃事務所の運び出し収集を相談できます。家電4品目とパソコンは区では収集せず、販売店・家電リサイクル受付センター・中間集積所やリネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、中野区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は、区が指定した方法以外で民間業者が家庭から不用品を回収することは違法行為にあたると案内しているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの申込み（カテゴリページ）", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/sodaigomi/index.html" },
    { label: "「粗大ごみ」の出し方(事前申し込み制)", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/sodaigomi/jizenmoshikomi.html", updated: "2026年5月20日" },
    { label: "令和5年10月1日から廃棄物処理手数料が変わりました", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/dashikata/haikibutsutesuryo.html", updated: "2023年10月20日" },
    { label: "有料ごみ処理券の払い戻し（還付）と差額精算の手続き", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/dashikata/yuryogomisyoriken.html", updated: "2023年11月29日" },
    { label: "一度に多量のごみが出るとき（臨時ごみ）", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/dashikata/taryonogomi.html", updated: "2026年2月4日" },
    { label: "家庭のエアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の処分", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/dashikata/katei-aircon.html", updated: "2026年5月20日" },
    { label: "「パソコン」の処理方法", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/dashikata/pcsyori.html", updated: "2025年10月29日" },
    { label: "違法な不用品回収業者にご注意ください！", org: "中野区", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/dashikata/0686037120231017140829021.html", updated: "2023年10月20日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaNakanoPage() {
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
