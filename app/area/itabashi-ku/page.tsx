import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "板橋区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13119/", count: 224 },
  curama: { url: "https://curama.jp/disposal/tokyo/19/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/itabashi" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "itabashi-ku",
  name: "板橋区",
  title: "板橋区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターと西台粗大ごみセンターへの持ち込み【2026年版】",
  description:
    "板橋区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、板橋区を対応エリアに含むことを公式で確認して比較。板橋区粗大ごみ受付センターの申込方法、西台粗大ごみセンターへの持ち込み（手数料は収集の半額）、減免、家電4品目・パソコンの出し方、区の条例で許可業者でも家庭廃棄物を収集運搬できない点を区の公式ページで確認してまとめています。",
  ogDescription:
    "板橋区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・西台粗大ごみセンターへの持ち込み・減免・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "板橋区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "板橋区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["板橋区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "板橋区で粗大ごみを出す方法は、自宅前などで区が収集する方法と、西台粗大ごみセンター（板橋区西台2-39-11）へ自分で持ち込む方法の二つで、どちらも板橋区粗大ごみ受付センターへの事前申し込みが必要です。持ち込みの手数料は収集の半額ですが、1回に持ち込めるのは10個までで、荷下ろしも自分で行います。板橋区の廃棄物条例では、一般廃棄物処理業の許可業者であっても家庭廃棄物を収集運搬することはできないと区は案内しているため、業者に片付けを頼む場合も、回収した物がどのように処分されるかを確かめることが大切です。",
    `本記事では、板橋区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・減免・家電4品目とパソコンの扱い（${CHECKED}確認）と、板橋区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、板橋区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      板橋区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで板橋区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは板橋区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に板橋区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「板橋区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "板橋区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      板橋区では、家具や寝具など最大辺がおおむね30cm以上のものが粗大ごみです（ボーリングのボールや鉄アレイなど、30cm未満でも粗大ごみになる物があります）。収集も持ち込みも有料・事前申込制で、申し込み先は板橋区粗大ごみ受付センターです。
    </>
  ),
  facts: [
    { k: "申し込み", v: "板橋区粗大ごみ受付センター（電話 03-6747-9353、月曜〜土曜 8時〜19時、祝日も受付・日曜と年末年始を除く）。インターネットは24時間（システムメンテナンス時を除く、パソコン・スマートフォンから）。電話が難しい方はファクス（03-6856-9715）でも申し込める。会社や店舗で事業用に使っていた物は区で収集しない", src: "板橋区「粗大ごみ（申込制／有料）・料金検索（AIチャットボット）」（更新日 2026年7月1日）" },
    { k: "手数料の決まり方", v: "品目ごとに設定され、令和5年10月1日に改定。料金は「板橋区粗大ごみ品目一覧」またはAIチャットボットで確認できる。区の計算例では、ふとん（収集時400円）、扇風機（同400円）、1人用ソファ（同900円）。タンスや棚などの箱物家具やテーブルは大きさで手数料が異なる。解体、分解した場合も粗大ごみの扱い", src: "板橋区「粗大ごみ処理手数料（料金）」（更新日 2026年4月1日）、同「粗大ごみ（申込制／有料）・料金検索」" },
    { k: "支払い", v: "申し込み後に、区内のコンビニエンスストアなどの「板橋区有料ごみ処理券取扱所」で板橋区の有料粗大ごみ処理券（A券200円・B券300円）を購入する。他区・他市町村の券は使えず、余っても原則として払い戻しはできない", src: "板橋区「有料ごみ処理券のご案内」（更新日 2023年10月31日）、同「粗大ごみ（申込制／有料）・料金検索」" },
    { k: "持ち込み", v: "西台粗大ごみセンター（板橋区西台2-39-11）。月曜〜金曜 13時〜16時、土曜・日曜・祝日 9時〜16時。板橋区民の申込者本人または同一世帯の方のみで、本人確認あり。1回10個まで、車は2トン車まで、荷下ろしは本人。手数料は収集の場合の申込総額の2分の1（100円未満切り捨て）で、処理券は事前に購入して持参する（センターで券の購入・現金払いはできない）", src: "板橋区「粗大ごみ（申込制／有料）・料金検索」、同「粗大ごみ処理手数料（料金）」" },
    { k: "運び出し", v: "65歳以上の方、または身体が不自由な方のみで構成する世帯で、自分で外に運び出せず他の方の協力も得られない場合は、管轄の清掃事務所に相談する", src: "板橋区「粗大ごみ（申込制／有料）・料金検索」" },
    { k: "減免", v: "生活保護、児童扶養手当、特別児童扶養手当、老齢福祉年金、中国残留邦人等支援給付を受けている場合の粗大ごみは減額または免除（粗大ごみ受付センターに電話で申し出る。インターネット申し込みでは減免にならない）。大規模な災害や火災に見舞われた場合は管轄の清掃事務所に問い合わせる", src: "板橋区「粗大ごみ処理手数料（料金）の減免」（更新日 2023年8月24日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。購入した小売店か買い替える小売店に依頼する、家電リサイクル受付センター（0570-087200、月曜〜金曜 9時〜17時）に申し込む、または家電リサイクル券を使って指定引取場所に持ち込む。区内の指定引取場所は東亜物流 板橋営業所（舟渡一丁目）とロジネットジャパン東日本（高島平六丁目）", src: "板橋区「家電リサイクル法対象品目（4品目）について」（更新日 2026年5月19日）" },
    { k: "パソコン", v: "区では回収しない。区の連携・協力事業者リネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含めば1箱分無料）、または各メーカー・パソコン3R推進協会に申し込む", src: "板橋区「パソコンリサイクルについて」（更新日 2026年1月6日）" },
    { k: "不用品回収業者", v: "「無料と思って頼んだが作業後に料金を請求された」「見積もりの2倍以上の金額を請求された」「回収後、不法投棄されていた」などのトラブルを挙げて注意を呼びかけ。板橋区の廃棄物条例では、許可業者であっても家庭廃棄物（家電4品目を除く）を収集運搬することはできないとしている", src: "板橋区「不用品回収業者とのトラブルにご注意ください」（更新日 2023年8月24日）" },
  ],
  sections: [
    {
      id: "nishidai-mochikomi",
      title: "西台粗大ごみセンターへの持ち込みと、収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            板橋区の持ち込みは、平日の午後と土日祝日の日中に受け付けており、手数料は収集の申込総額の半額です。区の計算例では、ふとん（収集400円）1個の持ち込みは200円、扇風機（400円）と1人用ソファ（900円）を合わせて持ち込むと650円の100円未満を切り捨てて600円になります。ただし1回10個まで、荷下ろしは自分で行い、センターでは処理券を買えないため、事前に処理券を用意しておく必要があります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            車で運べる物は持ち込み、玄関先や集合住宅の1階まで出せる物は収集、室内からの運び出しが難しい物や点数の多い片付けは業者、と分けるのが基本です。区の収集では日曜日も含めて原則毎日収集していますが、年末年始や連休明け、3月から5月は申し込みが集中し、希望日に予約できないことがあると区は案内しています。退去日が決まっている場合は早めに申し込むか、業者の日程と組み合わせてください。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "jourei-gyousha",
      title: "区の条例と不用品回収業者のトラブル、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            板橋区は、家庭から出る廃棄物の収集運搬には一般廃棄物処理業の許可が必要であるうえで、区の廃棄物条例では許可業者であっても家庭廃棄物を収集運搬することはできない（家電4品目を除く）と案内しています。あわせて、作業後の料金請求や見積もりの2倍以上の請求、回収後の不法投棄といったトラブルの例を挙げ、区のルールに従って排出するよう呼びかけています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。区の粗大ごみ収集や家電リサイクルと組み合わせる提案になっているかも判断材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目一覧かAIチャットボットで、区に出す場合の手数料を調べる", b: "出したい物の品目と点数を書き出し、板橋区粗大ごみ品目一覧やAIチャットボットで収集の手数料を確かめます。箱物家具やテーブルは大きさで料金が変わるため、寸法を測っておきます。持ち込めば半額になるので、車で運べる10個までの物は持ち込みも検討します。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "板橋区の粗大ごみはどこに申し込みますか？", a: "板橋区粗大ごみ受付センターに、電話（03-6747-9353、月曜〜土曜の8時〜19時、祝日も受付）またはインターネット（24時間）で申し込みます。電話が難しい方はファクス（03-6856-9715）も使えます。手数料分の板橋区有料粗大ごみ処理券を、申し込み後にコンビニエンスストアなどの取扱所で購入します（2026年11月1日確認）。" },
    { q: "板橋区で粗大ごみを持ち込むといくらになりますか？", a: "西台粗大ごみセンターに持ち込む場合の手数料は、収集の場合の申込総額の2分の1（100円未満切り捨て）です。区の例では、ふとん1個（収集400円）が200円になります。持ち込みも事前申し込みが必要で、1回10個まで、荷下ろしは本人が行います。" },
    { q: "板橋区で不用品回収業者に家庭ごみを回収してもらってもよいですか？", a: "板橋区は、区の廃棄物条例では許可業者であっても家庭廃棄物（家電4品目を除く）を収集運搬することはできないと案内し、不用品回収業者とのトラブルに注意を呼びかけています。業者に片付けを頼む場合は、運び出しや買取と処分を分けた見積もりを受け取り、処分する物をどのように処理するのかを作業前に確認してください。" },
    { q: "板橋区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、板橋区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "板橋区で粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "生活保護、児童扶養手当、特別児童扶養手当、老齢福祉年金、中国残留邦人等支援給付を受けている場合の粗大ごみが対象で、粗大ごみ受付センターに電話で申し出ます。インターネット申し込みでは減免になりません。災害や火災に見舞われた場合は管轄の清掃事務所に問い合わせます。" },
  ],
  matome: [
    "板橋区の粗大ごみは、受付センターへの事前申し込みのうえ、区の収集か西台粗大ごみセンターへの持ち込み（手数料は収集の半額、1回10個まで）で出します。家電4品目とパソコンは区では収集せず、小売店・家電リサイクル受付センター・リネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、板橋区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は条例上、許可業者でも家庭廃棄物を収集運搬できないと案内しているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ（カテゴリページ）", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/index.html" },
    { label: "粗大ごみ（申込制／有料）・料金検索（AIチャットボット）", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/1001868.html", updated: "2026年7月1日" },
    { label: "粗大ごみ処理手数料（料金）", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/1001869.html", updated: "2026年4月1日" },
    { label: "粗大ごみ処理手数料（料金）の減免", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/1001870.html", updated: "2023年8月24日" },
    { label: "有料ごみ処理券のご案内", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/1001871.html", updated: "2023年10月31日" },
    { label: "不用品回収業者とのトラブルにご注意ください", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/1001873.html", updated: "2023年8月24日" },
    { label: "家電リサイクル法対象品目（4品目）について", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/kaden/1001875.html", updated: "2026年5月19日" },
    { label: "パソコンリサイクルについて", org: "板橋区", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/kaden/1001876.html", updated: "2026年1月6日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaItabashiPage() {
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
              <Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉のゴミ屋敷片付け・不用品回収業者おすすめ2選</Link>
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
