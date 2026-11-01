import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "品川区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13109/", count: 224 },
  curama: { url: "https://curama.jp/disposal/tokyo/9/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/shinagawa" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "shinagawa-ku",
  name: "品川区",
  title: "品川区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみの日曜持ち込みと電子決済【2026年版】",
  description:
    "品川区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、品川区を対応エリアに含むことを公式で確認して比較。品川区粗大ごみ受付センターの申込方法、収集と持ち込みで異なる手数料、品川区資源化センターへの日曜持ち込み、クレジットカード決済、減免、家電4品目の出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "品川区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・収集と持ち込みの手数料・資源化センターへの日曜持ち込み・減免・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "品川区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "品川区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["品川区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "品川区で粗大ごみを出す方法は、区に自宅前での収集を頼む方法と、八潮の品川区資源化センターへ日曜日に自分で持ち込む方法の二つで、どちらも品川区粗大ごみ受付センターへの事前申し込みが必要です。区の品目手数料検索では、同じ品目でも持ち込みの手数料が収集のおよそ半分に設定されています。家一軒分の片付けや、運び出しが難しい大型家具がある場合は、区の収集・持ち込みと業者への依頼を組み合わせて計画することになります。",
    `本記事では、品川区の公式ページで確認した粗大ごみの申込方法・手数料・支払い・持ち込み・減免・家電4品目の扱い（${CHECKED}確認）と、品川区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、品川区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      品川区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで品川区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは品川区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に品川区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「品川区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "品川区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      品川区では、一辺がおおむね30cm以上のごみが粗大ごみです。収集も持ち込みも有料・事前申込制で、申し込み先は品川区粗大ごみ受付センターです。家電4品目やパソコン、オートバイ、ピアノ・エレクトーン、消火器などは粗大ごみとして収集・持ち込みができません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "品川区粗大ごみ受付センター（電話 03-6733-5374、月曜日〜土曜日・祝日を含む8時〜19時、日曜日と12月29日〜1月3日は休み）。インターネットは24時間受付。電話は年末年始と3月〜4月につながりにくく、10時〜11時台が比較的つながりやすい", src: "品川区「粗大ごみの出し方」（更新日 2026年10月9日）、同「粗大ごみ処理手数料」（更新日 2026年10月1日）" },
    { k: "手数料", v: "品目や大きさによって異なり、申し込み後に案内される。区のインターネット受付の品目手数料検索で収集手数料と持込手数料を確認できる（例: シングルベッドは収集1,200円・持込600円、二人掛け以上のソファーは収集1,700円・持込900円、16インチ以上の自転車は収集700円・持込400円）", src: "品川区「粗大ごみ処理手数料」、品川区粗大ごみインターネット受付「粗大ごみ品目リスト・手数料検索」" },
    { k: "支払い", v: "「品川区ごみ処理券取扱所」の表示がある区内約340店舗で品川区有料粗大ごみ処理券を購入して貼る。インターネットで申し込む場合はクレジットカード（Visa・Mastercard・JCB・American Express・Diners Club）の電子決済も選べ、処理券の代わりに受付番号・収集日・品目・金額を書いた紙を貼る。電子決済では領収書は発行されず、電話申し込みは処理券のみ", src: "品川区「粗大ごみの出し方」、同「令和6年4月から粗大ごみ処理手数料の電子決済を開始」（更新日 2026年10月1日）" },
    { k: "収集", v: "収集日当日の朝8時までに、一戸建ては門や玄関先、集合住宅は1階集合玄関または粗大ごみ置き場に出す。処理券は申し込み後に購入する", src: "品川区「粗大ごみの出し方」" },
    { k: "持ち込み", v: "受付センターに申し込むと持ち込み指定日（日曜日）が案内され、9時〜16時に品川区資源化センター（八潮1-4-1）へ持ち込む。氏名・住所を確認できるもの（運転免許証・健康保険証など）が必要で、運送業者や代理の方は持ち込めない。持ち込みは手数料が割安", src: "品川区「粗大ごみの出し方」" },
    { k: "減額・免除", v: "生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付、老齢福祉年金を受けている方は、処理手数料の減額または免除を受けられる。申し込みは受付センターへの電話のみで、電話のあと品川区電子申請サービスからも申請できる", src: "品川区「粗大ごみの出し方」" },
    { k: "運び出し収集", v: "65歳以上の方や体に障害のある方のみの世帯で、区内に手伝ってもらえる方がいない場合に利用できる。粗大ごみ受付センターに相談する", src: "品川区「粗大ごみの出し方」" },
    { k: "多量ごみ", v: "家庭ごみの収集日に出せる量は45リットル袋で4袋まで。庭木の剪定や引っ越しなどで一度に多量のごみが出る場合は通常の収集日に出せず、手数料がかかるため清掃事務所に相談する", src: "品川区「多量ごみ」（更新日 2026年10月1日）" },
    { k: "家電4品目・パソコン", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。購入店・買い替え店に引き取りを依頼するか、家電リサイクル受付センター（0570-087-200、月曜日〜金曜日の9時〜17時）に申し込むか、指定引取場所（大田区平和島・京浜島）に自分で持ち込む。パソコンは各メーカー（不明・自作はパソコン3R推進協会）か、区と協定を結ぶ国の認定事業者の宅配回収", src: "品川区「家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）の出し方」（更新日 2026年10月1日）、同「家庭用パソコンの出し方」（更新日 2026年10月1日）" },
    { k: "収集運搬の許可業者", v: "区は事業系一般廃棄物の処理業を許可の対象とし、普通ごみの収集運搬許可業者一覧を公開している。事業活動に伴う粗大ごみは区の収集・持ち込みを利用できない", src: "品川区「品川区における一般廃棄物収集運搬許可業者」（更新日 2026年10月1日）、同「粗大ごみの出し方」" },
  ],
  sections: [
    {
      id: "shuushuu-mochikomi",
      title: "品川区の収集・日曜持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            品川区の持ち込みは、指定された日曜日に八潮の品川区資源化センターへ申込者本人が運ぶ方式です。区の品目手数料検索では、シングルベッドが収集1,200円に対して持込600円、二人掛け以上のソファーが収集1,700円に対して持込900円と、持ち込みの手数料はおよそ半分に設定されています。車を用意でき、日曜日に時間を取れるなら費用を抑えやすい方法ですが、運送業者や代理の方は持ち込めないため、家族の片付けを代わりに進める場面では使いにくい点に注意が必要です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            点数の多い片付けでは、区の収集・持ち込みで出せる物を先に減らし、運び出しが難しい大型家具や家電4品目、収集日まで待てない物を業者に頼む組み合わせが基本になります。インターネットで申し込めばクレジットカードで支払えるため、処理券を買いに行く手間も省けます。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、自分で運ぶ場合の準備は<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "taryou-gomi-gyousha",
      title: "多量のごみが出る片付けと、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            品川区では、家庭ごみの収集日に出せる量は45リットル袋で4袋までです。引っ越しや部屋の片付けで一度に多量のごみが出る場合は通常の収集日には出せず、手数料がかかるため、清掃事務所への相談が必要です。袋ごみの量が多い片付けは、粗大ごみの申し込みとは別に、多量ごみとしての出し方を先に確認しておきましょう。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、買い取ってもらう物と処分する物を見積もりの段階で分けて示してもらい、処分する物の収集運搬をどの許可業者が行うかを確認してください。区は普通ごみの収集運搬許可業者一覧を公開しています（事業系一般廃棄物の許可）。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目手数料検索で、収集と持ち込みの手数料を比べる", b: "粗大ごみの品目と点数を書き出し、区のインターネット受付の品目手数料検索で収集手数料と持込手数料を確かめます。日曜日に本人が車で運べる物は持ち込み、玄関先まで出せる物は収集、運び出しが難しい物は業者、と割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、袋ごみのおおよその量、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "品川区の粗大ごみはどこに申し込みますか？", a: "品川区粗大ごみ受付センターに、電話（03-6733-5374、月曜日〜土曜日・祝日を含む8時〜19時）またはインターネット（24時間）で申し込みます。日曜日と12月29日〜1月3日は電話受付が休みです（2026年11月1日確認）。" },
    { q: "品川区で粗大ごみを持ち込むと安くなりますか？", a: "区の案内では、持ち込みの場合は手数料が割安になります。品目手数料検索では、シングルベッドが収集1,200円・持込600円、二人掛け以上のソファーが収集1,700円・持込900円です。持ち込みは申し込み時に案内される日曜日の9時〜16時に、品川区資源化センター（八潮1-4-1）へ申込者本人が運びます。" },
    { q: "品川区の粗大ごみ手数料はクレジットカードで払えますか？", a: "インターネットで申し込む場合は、Visa・Mastercard・JCB・American Express・Diners Clubの電子決済を選べます。電話で申し込む場合は処理券での支払いのみです。電子決済では領収書が発行されないため、領収書が必要な方は処理券を選んでください。" },
    { q: "品川区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、品川区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "品川区で粗大ごみの手数料が減額・免除になるのはどんな場合ですか？", a: "生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付、老齢福祉年金を受けている方が対象です。粗大ごみ受付センター（03-6733-5374）への電話でのみ受け付けており、電話のあと品川区電子申請サービスから申請することもできます。" },
  ],
  matome: [
    "品川区の粗大ごみは、受付センターへの事前申し込みのうえ、自宅前での収集か、日曜日の品川区資源化センターへの持ち込みで出します。持ち込みの手数料は収集のおよそ半分ですが、申込者本人が運ぶ必要があります。家庭ごみの収集日に出せるのは45リットル袋で4袋までのため、袋ごみの多い片付けは多量ごみとしての扱いも確認が必要です。",
    "業者に頼む場合は、品川区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。見積もりの段階で、買取と処分を分けた内訳と収集運搬の許可を確認しておきましょう。",
  ],
  sources: [
    { label: "ごみ・リサイクル", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/index.html", updated: "2026年10月15日" },
    { label: "粗大ごみの出し方", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1004032/1004033.html", updated: "2026年10月9日" },
    { label: "粗大ごみ処理手数料", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1004032/1004034.html", updated: "2026年10月1日" },
    { label: "粗大ごみ品目リスト・手数料検索", org: "品川区粗大ごみインターネット受付", url: "https://shinagawa-sodai.com/items" },
    { label: "令和6年4月から粗大ごみ処理手数料の電子決済を開始", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1004032/1003927.html", updated: "2026年10月1日" },
    { label: "多量ごみ", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1009406/1004027.html", updated: "2026年10月1日" },
    { label: "家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）の出し方", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1003935/1003937.html", updated: "2026年10月1日" },
    { label: "家庭用パソコンの出し方", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1003935/1003938.html", updated: "2026年10月1日" },
    { label: "品川区における一般廃棄物収集運搬許可業者", org: "品川区", url: "https://www.city.shinagawa.tokyo.jp/jigyosha/jigyoshagomi/1004039/1004040.html", updated: "2026年10月1日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaShinagawaPage() {
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
