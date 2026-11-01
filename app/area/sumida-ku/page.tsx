import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "墨田区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13107/", count: 220 },
  curama: { url: "https://curama.jp/disposal/tokyo/7/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/sumida" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "sumida-ku",
  name: "墨田区",
  title: "墨田区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センター・オンライン決済・減免【2026年版】",
  description:
    "墨田区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、墨田区を対応エリアに含むことを公式で確認して比較。墨田区粗大ごみ受付センターの申込方法、手数料、オンライン決済と処理券、減免、運び出し収集、大量ごみ、家電4品目・パソコンの出し方、無許可の回収業者についての区の案内を区の公式ページで確認してまとめています。",
  ogDescription:
    "墨田区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・オンライン決済・減免・運び出し収集・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "墨田区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "墨田区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["墨田区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "墨田区の粗大ごみは事前申込制・有料で、墨田区粗大ごみ受付センターにインターネットか電話で申し込み、収集日当日の朝8時までに自宅前（集合住宅は専用の粗大ごみ置き場など）に出します。インターネットで申し込むとクレジットカードやPayPayで手数料を払え、有料粗大ごみ処理券を買う必要がありません。墨田区は、家庭から出る廃棄物の回収には区の一般廃棄物処理業の許可が必要で、産業廃棄物処理業や古物商、貨物運送事業の許可では回収できないと案内しているため、業者に片付けを頼む場合は、回収した物をどの許可業者がどのように処分するかを確かめることが大切です。",
    `本記事では、墨田区の公式ページで確認した粗大ごみの申込方法・手数料・支払い・減免・運び出し収集・家電4品目とパソコンの扱い（${CHECKED}確認）と、墨田区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、墨田区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      墨田区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで墨田区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは墨田区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に墨田区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「墨田区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "墨田区の粗大ごみ・減免・家電4品目（区の公式情報）",
  factsLead: (
    <>
      墨田区では、家庭から出る一辺の長さが30cmを超える大型のごみが粗大ごみです。収集は事前申込制・有料で、申し込み先は墨田区粗大ごみ受付センターです。お店や事業所、会社などの事業活動に伴って出る大型ごみは区では回収せず、許可のある業者に依頼するよう区は案内しています。
    </>
  ),
  facts: [
    { k: "申し込み", v: "墨田区粗大ごみ受付センター。インターネットは24時間（システムメンテナンス時を除く）、電話は 03-6417-0074（年末年始を除く月曜〜土曜 8時〜19時、祝日も可）。手数料の減額・免除を受けられる方は電話で申し込む（インターネットでは申し込めない）", src: "墨田区「粗大ごみの出し方」（ページに更新日の表示なし）" },
    { k: "手数料", v: "品目ごとに設定。区の粗大ごみ手数料一覧（R8.10.19更新）では、扇風機400円、ソファー（一人用）900円、ソファー（二人〜三人用）1,800円、両そで机3,200円など。品目と手数料は「墨田ごみナビ」でも調べられ、正式には申込時に決まる", src: "墨田区「粗大ごみの出し方」、同「粗大ごみ手数料一覧（R8.10.19更新）」（PDF）" },
    { k: "支払い", v: "インターネット申し込みでは、クレジットカード（Visa、Mastercard、JCB、American Express、Diners）またはPayPayでオンライン決済でき、処理券の購入が不要（原則として領収書は発行されない）。処理券で払う場合は、申込後に墨田区の有料粗大ごみ処理券（A券200円・B券300円）を区内の取扱所（商店、コンビニエンスストア、スーパーマーケットなど）かすみだ清掃事務所で購入する。他区の処理券は使えない。未使用の処理券は、排出をとりやめた場合や区外へ転出する場合などに受付窓口で還付を受けられる（取扱所では払い戻しできない）", src: "墨田区「粗大ごみ処理手数料はオンライン決済（キャッシュレス決済）ができます」（更新日 2026年10月6日）、同「有料ごみ処理券」（更新日 2026年2月3日）、同「粗大ごみの出し方」" },
    { k: "出し方", v: "申込時に指定された収集日当日の朝8時までに、収集日と受付番号を記入した処理券（オンライン決済の場合は任意の用紙）を貼って自宅前に出す。集合住宅は専用の粗大ごみ置き場か敷地内の指定された場所に出し、一般の集積所には出さない", src: "墨田区「粗大ごみの出し方」" },
    { k: "運び出し", v: "65歳以上の高齢者のみの世帯、または障害者のみの世帯で、自ら運び出すことが困難で近隣の方などの協力が得られない場合、下見・調査のうえ職員が運び出す。本人立会いができない場合、建物を損傷させる恐れがある場合、分解が必要な場合（分解済みは可）、引越しに伴う処分、危険を伴う場合は原則として収集できない。申し込みはすみだ清掃事務所（03-5608-6213）で、粗大ごみ受付センターでは申し込めない", src: "墨田区「粗大ごみの運び出し収集」（更新日 2021年4月14日）" },
    { k: "減免", v: "地震等の天災その他大規模な災害を受けた者、生活保護、中国残留邦人等支援給付、児童扶養手当・特別児童扶養手当、遺族基礎年金（旧母子、準母子福祉年金のみ）または老齢福祉年金を受けている者は免除。火災等の災害を受けた者は減額（9割以内）。受付センターへの電話申し込みの際に減免事由に該当する旨を伝えると、手数料減免申請書が自宅に郵送されるので、添付書類を添えてすみだ清掃事務所に郵送または持参する", src: "墨田区「ごみ処理手数料の減免申請受付」（更新日 2024年12月25日）" },
    { k: "大量のごみ", v: "集積所に一度に出せるのは45リットルの袋で5袋まで。引っ越し等で一度に大量に出す場合は、事前にすみだ清掃事務所（03-5608-6922）に相談し、1袋（45リットル）につき300円がかかる", src: "墨田区「臨時ごみ・大量ごみとして出す場合」（更新日 2021年4月26日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区では収集できない。買い換える小売店か購入した小売店に依頼する、家電リサイクル受付センター（0570-087200、9時〜17時、日曜・年末年始を除く）に申し込む、または郵便局などでリサイクル料金を払って指定引取場所に自分で持ち込む（事前に各指定引取場所へ問い合わせる）。最寄りの指定引取場所として、西濃運輸 江東指定引取場所（江東区新木場）、上昇運輸（足立区南花畑）、岡山県貨物運送 江戸川事業所（江戸川区臨海町）を掲載", src: "墨田区「エアコン・テレビ・冷蔵庫等・洗濯機等（家電リサイクル法対象品目）」（更新日 2025年5月23日）" },
    { k: "パソコン", v: "区では回収できない。区と協定を締結したリネットジャパンリサイクル株式会社の宅配便回収では、パソコン本体を含む1箱分の回収料金が無料（インターネットかファックスで申し込み）。各メーカーも回収しており、PCリサイクルマーク付きは無償。自作やメーカーが存在しない場合はパソコン3R推進協会に問い合わせる", src: "墨田区「家庭用パソコン」（更新日 2025年4月1日）" },
    { k: "不用品回収業者", v: "家庭から出る廃棄物を回収するには区の一般廃棄物処理業の許可が必要で、産業廃棄物処理業の許可、古物商の許可、貨物運送事業の許可では家庭から出た廃棄物の回収はできないと案内。区から一般廃棄物処理業の許可を受けていない廃棄物回収業者は違法な業者で、依頼すると高額な料金請求や不法投棄などにつながることがあるとしている", src: "墨田区「無許可の廃棄物回収業者を利用しないでください」（更新日 2023年2月14日）" },
  ],
  sections: [
    {
      id: "shushu-gyousha",
      title: "墨田区の粗大ごみ収集と、業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            墨田区の粗大ごみは、受付センターに申し込み、収集日当日の朝8時までに自宅前や集合住宅の専用置き場に出す流れです。インターネットで申し込めばオンライン決済で手数料を払え、処理券を買いに行く必要がありません。手数料の減額・免除を受ける場合や、65歳以上の方のみの世帯などで区の運び出し収集を使う場合は、申し込み方法が異なる（減免は受付センターへの電話、運び出しはすみだ清掃事務所への電話）ため注意してください。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            玄関先や集合住宅の置き場まで自分で出せる物は区の収集、室内からの運び出しが難しい物や点数の多い片付けは業者、と分けるのが基本です。区の運び出し収集は、引越しに伴う処分や分解が必要な場合は原則として対象外です。引っ越しで袋ごみが大量に出る場合は、すみだ清掃事務所に事前に相談すると45リットル袋1袋300円で出せます。まだ使える物は、区が連携している「おいくら」でのリユースや、<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>も検討できます。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、大きさの基準は<Link href="/sodaigomi-size-kijun/" className={linkCls}>粗大ごみのサイズ基準</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "区が案内する回収業者の許可と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            墨田区は、家庭から出る廃棄物を回収する場合には区の一般廃棄物処理業の許可が必要で、産業廃棄物処理業の許可、古物商の許可、貨物運送事業の許可では家庭から出た廃棄物の回収を行うことはできないと案内しています。そのうえで、区から一般廃棄物処理業の許可を受けていない廃棄物回収業者は違法な業者であり、依頼すると高額な処理料金の請求や不法投棄などにつながることがあるとして、区のルールに従って処理するよう呼びかけています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を、どの許可を持つ業者がどのルートで収集運搬・処理するのかを作業前に確認してください。区の粗大ごみ収集や家電リサイクルと組み合わせる提案になっているかも判断材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 手数料一覧か墨田ごみナビで、区に出す場合の手数料を調べる", b: "出したい物の品目と点数を書き出し、墨田区の粗大ごみ手数料一覧や「墨田ごみナビ」で手数料を確かめます。タンスや棚などの箱物家具は高さと幅、テーブルは天板の縦と横を測っておきます。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどの許可業者がどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "墨田区の粗大ごみはどこに申し込みますか？", a: "墨田区粗大ごみ受付センターに、インターネット（24時間）または電話（03-6417-0074、年末年始を除く月曜〜土曜の8時〜19時、祝日も可）で申し込みます。インターネットで申し込むと、クレジットカードやPayPayで手数料を払えます（2026年11月1日確認）。" },
    { q: "墨田区で粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "生活保護、中国残留邦人等支援給付、児童扶養手当・特別児童扶養手当、遺族基礎年金（旧母子、準母子福祉年金のみ）または老齢福祉年金を受けている方や、地震等の大規模な災害を受けた方は免除、火災等の災害を受けた方は減額（9割以内）です。受付センターに電話で申し込む際に該当する旨を伝えます。インターネットでは申し込めません。" },
    { q: "墨田区で不用品回収業者に家庭ごみを回収してもらってもよいですか？", a: "墨田区は、家庭から出る廃棄物の回収には区の一般廃棄物処理業の許可が必要で、産業廃棄物処理業や古物商、貨物運送事業の許可では回収できないと案内しています。業者に片付けを頼む場合は、処分する物をどの許可業者が収集運搬・処理するのかを作業前に確認してください。" },
    { q: "墨田区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、墨田区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "墨田区で粗大ごみを自分で運び出せない場合はどうすればよいですか？", a: "65歳以上の高齢者のみの世帯や障害者のみの世帯で、近隣の方などの協力が得られない場合は、すみだ清掃事務所（03-5608-6213）に申し込むと、下見のうえ職員が運び出します。引越しに伴う処分や分解が必要な場合などは原則として対象外です。" },
  ],
  matome: [
    "墨田区の粗大ごみは、受付センターに申し込み、オンライン決済か有料粗大ごみ処理券で手数料を払って、収集日当日の朝8時までに自宅前などに出します。減免の申し込みは電話のみで、家電4品目とパソコンは区では収集せず、小売店・家電リサイクル受付センター・リネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、墨田区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は家庭の廃棄物の回収には区の一般廃棄物処理業の許可が必要と案内しているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/gomi_dashikata/sodaidasu/index.html" },
    { label: "粗大ごみ手数料一覧（R8.10.19更新）（PDF）", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/gomi_dashikata/sodaidasu/index.files/hinnmoku_081019.pdf" },
    { label: "粗大ごみ処理手数料はオンライン決済（キャッシュレス決済）ができます", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/gomi_dashikata/sodaidasu/onkessai.html", updated: "2026年10月6日" },
    { label: "有料ごみ処理券", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/jigyoukei/dashikata/gomisyoriken.html", updated: "2026年2月3日" },
    { label: "ごみ処理手数料の減免申請受付", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/oyakudachi/genmensinsei.html", updated: "2024年12月25日" },
    { label: "粗大ごみの運び出し収集", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/oyakudachi/hakobidasi.html", updated: "2021年4月14日" },
    { label: "臨時ごみ・大量ごみとして出す場合", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/oyakudachi/rinji-tairyou-gomi.html", updated: "2021年4月26日" },
    { label: "エアコン・テレビ・冷蔵庫等・洗濯機等（家電リサイクル法対象品目）", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/dekinai/kaden-recycle.html", updated: "2025年5月23日" },
    { label: "家庭用パソコン", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/dekinai/kateiyou-pc.html", updated: "2025年4月1日" },
    { label: "無許可の廃棄物回収業者を利用しないでください", org: "墨田区", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/oshirase/huyouhin2021.html", updated: "2023年2月14日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaSumidaPage() {
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
