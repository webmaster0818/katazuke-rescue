import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "大田区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13111/", count: 224 },
  curama: { url: "https://curama.jp/disposal/tokyo/11/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/ota" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "ota-ku",
  name: "大田区",
  title: "大田区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターと京浜島への持ち込み【2026年版】",
  description:
    "大田区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、大田区を対応エリアに含むことを公式で確認して比較。大田区粗大ごみ受付センターの申込方法、品目別の手数料、京浜島への持ち込みの条件、手数料の免除、家電4品目の出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "大田区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・品目別の手数料・京浜島への持ち込み・手数料の免除・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "大田区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "大田区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["大田区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "大田区で粗大ごみを出す方法は、区に自宅前での収集を頼む方法と、区が案内する京浜島の持込場所へ自分で運ぶ方法の二つで、どちらも大田区粗大ごみ受付センターへの事前申し込みが必要です。区の案内では、収集は2週間以上先の日程での受付となる場合があり、持ち込みは1回10個まで・1世帯年度内4回までという条件があります。退去日が決まっている片付けや点数の多い片付けでは、区の収集と業者への依頼を組み合わせて日程を組むことになります。",
    `本記事では、大田区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・手数料の免除・家電4品目の扱い（${CHECKED}確認）と、大田区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、大田区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      大田区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで大田区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは大田区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に大田区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「大田区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "大田区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      大田区では、家庭から出る一辺の長さがおおむね30cm以上の家具・寝具・電気製品などが粗大ごみです。収集も持ち込みも有料・事前申込制で、申し込み先は大田区粗大ごみ受付センターです。粗大ごみは品目で判断されるため、切ったり分解したりしても粗大ごみとして扱われます。
    </>
  ),
  facts: [
    { k: "申し込み", v: "大田区粗大ごみ受付センター（電話 0570-037-530、ナビダイヤルが使えないIP電話などは 03-6631-7050。受付は8時〜19時で、日曜日・祝日も受付）。インターネットは24時間（保守点検日を除く）。電話は1回20個まで、インターネットは1回10個までで収集のみ（持ち込みは電話のみ）。月曜日の午前中と3月・4月は混み合う", src: "大田区「粗大ごみ」（更新日 2026年10月15日）、同「ごみ・リサイクル」" },
    { k: "手数料", v: "品目ごとに決まる（区収集時の例: ソファー2人用1,300円・3人以上用2,300円、シングルサイズのベッド本体1,300円、16インチ以上の自転車900円、たんす・本棚などの箱物家具は一番長い辺とその次に長い辺の合計により300円〜3,200円）。収集日と手数料は申し込みの際に案内される", src: "大田区「粗大ごみ品目一覧」の「粗大ごみ品目・手数料一覧（令和5年10月1日から）」（PDF、ページ更新日 2023年4月1日）、同「粗大ごみ」" },
    { k: "支払い", v: "大田区発行の有料粗大ごみ処理券を区内のスーパーマーケット、コンビニエンスストアなどで購入し、収集日と名前または受付番号を書いて品物ごとに貼る。持込場所とその周辺では処理券を販売しておらず、現金でも支払えない", src: "大田区「粗大ごみ」" },
    { k: "収集", v: "区民が対象で、申込順に月曜日から土曜日に収集。2週間以上先の日程での受付となる場合がある。収集日の朝8時までに玄関先など予約時に決めた場所へ出す（集合住宅は各部屋の玄関先には出せない）", src: "大田区「粗大ごみ」" },
    { k: "持ち込み", v: "区民が対象で、電話での申し込みが必要。持込場所（京浜島）は申し込みの際に案内される。受付は月曜日〜土曜日の13時〜16時、日曜日の9時〜12時と13時〜16時。1回10個まで・1世帯年度内4回まで。申込者本人が自家用自動車または2t車までのレンタカーで持ち込み（事業用自動車は不可）、本人確認書類が必要。手数料は品目によって免除（無料）または減額", src: "大田区「粗大ごみ」" },
    { k: "手数料の免除", v: "生活保護、中国残留邦人等支援給付、児童扶養手当・特別児童扶養手当、老齢福祉年金を受けている方は、粗大ごみの収集にかかる手数料が免除される。受付センターに申し込む際に申し出て、送付される申請書を収集日の3日前までに管轄の清掃事務所へ提出する", src: "大田区「粗大ごみ」" },
    { k: "運び出し収集", v: "65歳以上の方または障害者のみの世帯で、身近な人の協力を得ることが難しく、自ら屋内から運び出せない方が対象。管轄の清掃事務所に電話で相談し、区の担当者の訪問調査で可否が決まる。立ち会えない場合、作業員2人で運べない物、解体作業が必要な場合などは対象外", src: "大田区「粗大ごみ」" },
    { k: "家電4品目・パソコン", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は粗大ごみで出せない。販売店に引き取りを依頼するか、家電リサイクル受付センター（0570-087-200、月曜日〜金曜日の9時〜17時）に申し込むか、区内の指定引取場所（京浜島・平和島の2か所）に自分で持ち込む。家庭用パソコンは各メーカーの受付窓口、メーカーが不明なものはパソコン3R推進協会へ", src: "大田区「家電（エアコン、テレビ、洗濯機・衣類乾燥機、冷蔵・冷凍庫）のリサイクル」（更新日 2026年6月10日）、同「家庭用パーソナルコンピューターのリサイクル」（更新日 2025年4月1日）" },
    { k: "不用品回収業者への注意", v: "「家庭の不用品を無料で引き取ります」と宣伝して高額な料金を請求する業者がいるとして注意を呼びかけ。不用品回収業者は家庭の不用品をごみとして処分することはできず、引き渡しはトラブルや不法投棄の原因になる可能性があると案内", src: "大田区「不用品回収業者にご注意ください」（更新日 2025年4月9日）" },
  ],
  sections: [
    {
      id: "shuushuu-mochikomi",
      title: "大田区の収集・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            大田区の収集は申込順で、区の案内では2週間以上先の日程での受付となる場合があります。退去日や引き渡し日が決まっている片付けでは、まず受付センターに申し込んで収集日を押さえ、その日までに出しきれない物や、収集日より前に部屋を空ける必要がある物を業者に頼む、という順番で考えると日程の見通しが立てやすくなります。3月・4月は申し込みが増えて混み合うため、引っ越しの時期と重なる場合は早めの申し込みが前提です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            京浜島への持ち込みは、品目によって手数料が免除または減額されるため、自家用車か2t車までのレンタカーを用意できる方には有力な選択肢です。ただし1回10個まで・1世帯年度内4回までで、申込者本人が持ち込む必要があり、受付は16時までです。また、区の案内では粗大ごみは品目で判断され、切ったり分解したりしても粗大ごみとして扱われる点にも注意してください。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、自分で運ぶ場合の準備は<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "fuyohin-kaishu-chui",
      title: "区が注意を呼びかける不用品回収業者と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            大田区は「家庭の不用品を無料で引き取ります」と宣伝して高額な料金を請求する業者がいるとして、注意を呼びかけています。区の案内では、不用品回収業者は家庭の不用品をごみとして処分することはできず、こうした業者への引き渡しはトラブルや不法投棄の原因になる可能性があるとされています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、買い取ってもらう物と処分する物を見積もりの段階で分けて示してもらい、処分する物の収集運搬をどの許可業者が行うかを確認してください。高齢の家族だけの世帯で屋内からの運び出しが難しい場合は、区の運び出し収集の対象になるかを先に清掃事務所へ相談する方法もあります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 受付センターに申し込み、区の収集日を確かめる", b: "粗大ごみの名称・大きさ・数量を書き出して受付センターに申し込み、収集日と手数料の案内を受けます。インターネットは10個まで・収集のみなので、点数が多い場合や持ち込みを希望する場合は電話で申し込みます。" },
    { t: "② 収集日に間に合わない物と運び出せない物を業者に見積もってもらう", b: "収集日までに部屋を空ける必要がある物、玄関先まで出せない大型家具、袋ごみの量が多い片付けなどを、写真と品目リストで複数社に同じ条件で伝えて見積もりを取ります。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、追加料金が発生する条件、作業当日の立ち会いの要否を作業前に確認します。" },
  ],
  faqs: [
    { q: "大田区の粗大ごみはどこに申し込みますか？", a: "大田区粗大ごみ受付センターに、電話（0570-037-530、ナビダイヤルが使えない場合は03-6631-7050、受付8時〜19時で日曜日・祝日も受付）またはインターネット（24時間、保守点検日を除く）で申し込みます。インターネットは1回10個まで・収集のみの受付です（2026年11月1日確認）。" },
    { q: "大田区で粗大ごみを持ち込むことはできますか？", a: "できます。電話での事前申し込みが必要で、持込場所（京浜島）は申し込みの際に案内されます。受付は月曜日〜土曜日の13時〜16時、日曜日の9時〜12時と13時〜16時で、1回10個まで・1世帯年度内4回までです。手数料は品目によって免除または減額されます。" },
    { q: "大田区の粗大ごみの手数料はいくらですか？", a: "品目ごとに決まります。区の手数料一覧（令和5年10月1日から）では、ソファー2人用が1,300円、3人以上用が2,300円、シングルサイズのベッド本体が1,300円、16インチ以上の自転車が900円です。正確な金額は申し込みの際に案内されます。" },
    { q: "大田区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、大田区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "大田区で粗大ごみの手数料が免除になるのはどんな場合ですか？", a: "生活保護、中国残留邦人等支援給付、児童扶養手当・特別児童扶養手当、老齢福祉年金を受けている方が対象です。受付センターに申し込む際に受給者であることを申し出ると申請書が送付され、収集日の3日前までに証書の写しなどを添えて管轄の清掃事務所に提出します。" },
  ],
  matome: [
    "大田区の粗大ごみは、受付センターへの事前申し込みのうえ、自宅前での収集か京浜島への持ち込みで出します。収集は2週間以上先になる場合があり、持ち込みは1回10個まで・年度内4回までという条件があるため、日程が決まっている片付けや点数の多い片付けは業者との組み合わせが基本です。",
    "業者に頼む場合は、大田区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が注意を呼びかける回収業者のトラブルを避けるため、買取と処分を分けた内訳と収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "ごみ・リサイクル", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/index.html" },
    { label: "粗大ごみ", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/sodai.html", updated: "2026年10月15日" },
    { label: "粗大ごみ品目一覧（粗大ごみ品目・手数料一覧 令和5年10月1日から）", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/sodaigomi_ichiran.html", updated: "2023年4月1日" },
    { label: "家電（エアコン、テレビ、洗濯機・衣類乾燥機、冷蔵・冷凍庫）のリサイクル", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/kaden.html", updated: "2026年6月10日" },
    { label: "家庭用パーソナルコンピューターのリサイクル", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/katei.html", updated: "2025年4月1日" },
    { label: "不用品回収業者にご注意ください", org: "大田区", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/kaisyuu-gyousya.html", updated: "2025年4月9日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaOtaPage() {
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
