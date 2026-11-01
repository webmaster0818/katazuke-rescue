import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "呉市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-34/city-34202/", count: 33 },
  curama: { url: "https://curama.jp/disposal/hiroshima/3/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/hiroshima/kure" },
};

const K = "https://www.city.kure.lg.jp/soshiki";

const d: AreaCityData = {
  slug: "kure",
  name: "呉市",
  title: "呉市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみはシール1枚300円、引っ越し・片付けの多量ごみは持ち込みか許可業者【2026年版】",
  description:
    "呉市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、呉市を対応エリアに含むことを公式で確認して比較。粗大ごみの出し方（指定シール1枚300円）、引っ越しや片付けで出る多量ごみの扱い、クリーンセンターくれ・芸予環境衛生センターへの直接搬入（10kgあたり160円）、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "呉市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの出し方、多量ごみの扱い、市ごみ処理施設への直接搬入、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "呉市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "呉市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["呉市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "呉市では、指定袋に入らない家具・寝具・家電製品・自転車などが粗大ごみで、粗大ごみ指定シール（1枚300円、2mを超える物は2枚）を貼ってごみステーションに出します。引っ越しや片付けで出る多量ごみはステーションで収集しておらず、市のごみ処理施設へ自分で搬入する（10kgあたり160円）か、市の許可を受けた一般廃棄物処理業者に運搬を依頼する方法になります。",
    `本記事では、呉市の公式ページで確認した粗大ごみの出し方、多量ごみの扱い、市ごみ処理施設への直接搬入、家電4品目・パソコンの扱い（${CHECKED}確認）と、呉市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、呉市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      呉市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに呉市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に広島県が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「呉市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "呉市の粗大ごみ・多量ごみ・直接搬入・家電4品目（市の公式情報）",
  factsLead: (
    <>
      呉市の粗大ごみは指定シールを貼ってごみステーションに出す方式です。引っ越しや片付けで出る多量ごみはステーションで収集しないため、クリーンセンターくれ・芸予環境衛生センターへの直接搬入か、市の許可を受けた一般廃棄物処理業者への依頼となり、家電4品目とパソコンはステーションに出せません。
    </>
  ),
  facts: [
    { k: "粗大ごみ", v: "指定袋に入らないもの（じゅうたん・タンスなどの家具類、掛けふとん・敷きふとんなどの寝具類、電子レンジ・掃除機などの家電製品、自転車など）。カーペットや布団はひもでしばり、ストーブは灯油や乾電池を完全に抜く。ごみは決められた日の朝8時30分までにごみステーションへ出す。家電4品目とパソコン・ディスプレイ等は出せない", src: "呉市「ごみ・資源物の出し方」（2026年3月25日更新）" },
    { k: "手数料", v: "粗大ごみ指定シール1枚300円を貼って出す（2mを超えるものはシール2枚で600円）。シールを貼っていない粗大ごみは収集しない", src: "呉市「指定袋・粗大ごみシールの種類と金額」（2026年4月1日更新）、同「ごみ・資源物の出し方」（2026年3月25日更新）" },
    { k: "多量ごみ", v: "引っ越しごみ・片付けごみ・庭木の剪定ごみなどの多量ごみはステーションで収集しない。分別して市のごみ処理施設へ自分で持ち込むか（一般廃棄物に限る）、市の許可を受けた一般廃棄物処理業者へ運搬を依頼する（有料）", src: "呉市「市ごみ処理施設への直接搬入」（2026年8月27日更新）、同「ごみ・資源物の出し方」（2026年3月25日更新）" },
    { k: "直接搬入", v: "クリーンセンターくれ（広多賀谷3丁目9番3号、月〜土曜日 8時30分〜12時・13時〜16時30分、2tトラックまで）、芸予環境衛生センター（豊町大長6329番地1、月〜土曜日 9時〜12時・13時〜15時30分、軽トラックまで）。日・祝日と年末年始は搬入不可。自家用車・トラックで搬入し、荷下ろしは原則自分で行う。手数料は10kgあたり160円（指定袋・指定シールを使っていても必要）。中身が確認できる透明または半透明の袋を使う", src: "呉市「市ごみ処理施設への直接搬入」（2026年8月27日更新）" },
    { k: "搬入の数量制限", v: "畳・建具は1日10枚以内、布団は1日30枚以内、スプリングソファー・マットレスは1日5枚以内、自転車は1日5台以内、がれき類は1日に土のう袋5袋以内。家屋解体・改修等にかかるものは、個人が家屋解体・整理などをした場合でも受け入れない", src: "呉市「市ごみ処理施設への直接搬入」（2026年8月27日更新）" },
    { k: "市で処理しない物", v: "バイク、タイヤ、バッテリー、ガスボンベ、消火器、金庫（手提げ用を除く）、電動ベッド、ピアノ、仏壇、電動マッサージチェア、トレーニングマシン、大型のコピー機・プリンターなど。購入店・販売店等に引き取ってもらうか、呉市環境事業協同組合（旧呉市内のみ）または市の許可を受けた一般廃棄物処理業者に依頼する（有料）", src: "呉市「市ごみ処理施設への直接搬入」（2026年8月27日更新）" },
    { k: "許可業者について", v: "市は「許可のない者（業者）へ運搬を依頼することは、法律違反となります」と案内し、市の許可を受けた一般廃棄物処理業者の名簿を公表している", src: "呉市「市ごみ処理施設への直接搬入」（2026年8月27日更新）、同「一般廃棄物処理業者名簿」（2026年4月1日更新）" },
    { k: "家電4品目", v: "買い替える場合は新しい製品の購入先、処分だけの場合は購入した家電販売店に引取義務があり、リサイクル料金と収集運搬料金がかかる。購入店が近くにない場合は、市内の家電回収協力店（エディオン呉本店・広店・焼山店、ヤマダ電機テックランド呉店）に依頼するか、郵便局でリサイクル料金を払って指定引取場所へ自分で持ち込む", src: "呉市「家電リサイクル法対象品（エアコン・テレビ・冷蔵庫・洗濯機）とパソコンの処分方法」（2025年4月1日更新）" },
    { k: "パソコン", v: "ごみステーションでは回収しない。市の連携事業者リネットジャパンリサイクル株式会社による宅配回収（パソコンを含む場合は1箱分が無料、含まない場合は1箱1,848円）、市役所・市民センター等18か所の小型家電回収ボックス（投入口40cm×20cm）、各製造メーカー等による回収のいずれかで処分する", src: "呉市「家電リサイクル法対象品（エアコン・テレビ・冷蔵庫・洗濯機）とパソコンの処分方法」（2025年4月1日更新）、同「使用済パソコン・小型家電の回収方法について」（2025年4月1日更新）" },
    { k: "減免（り災ごみ）", v: "火災・風水害等の天災でり災した家屋等から出た家庭ごみを市の処理施設に搬入する場合、り災証明書の写しを添えて申請すると処理手数料を減免。申請期間はり災の日から1年間。本人または親族以外に搬入を依頼する場合は、呉市の一般廃棄物収集運搬業許可（固形状）を有する業者に依頼する", src: "呉市「火災等により発生したごみの処理手数料減免」（2026年4月21日更新）" },
    { k: "ごみ出しの支援", v: "すこやかサポート事業: 要介護2以上に認定されている65歳以上の高齢者のみの世帯や、障がい者のみの世帯などで、家庭ごみを最寄りのごみステーションまで運び出すことが困難な人を対象に、職員が声かけ・安否確認を行いながら玄関先等からごみを回収する。民生委員やケアマネージャー等を通じて環境業務課に申し込む", src: "呉市「すこやかサポート事業」（2026年7月31日更新）" },
  ],
  sections: [
    {
      id: "tairyou-hannyuu",
      title: "呉市の粗大ごみ・多量ごみ・直接搬入と業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            呉市の粗大ごみは、指定シール（1枚300円）を貼って収集日の朝8時30分までにごみステーションへ出す方式です。一方で、引っ越しや片付けで出る多量ごみはステーションで収集していないため、家一軒分の家財を片付ける場合は、ステーションに出せる範囲と、それ以外の出し方を最初に分けて考える必要があります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車やトラックで運べるなら、クリーンセンターくれ（2tトラックまで）や芸予環境衛生センター（軽トラックまで）に直接搬入でき、手数料は10kgあたり160円です。布団は1日30枚、スプリングソファー・マットレスは1日5枚などの数量制限があります。部屋からの運び出しまで頼みたい場合は、使える物をリユースに回し、ステーションや直接搬入で減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
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
            呉市では家電4品目とパソコンをごみステーションに出せません。家電4品目は購入店・買い替え先のほか、市内の家電回収協力店か指定引取場所への自己搬入、パソコンは連携事業者の宅配回収や小型家電回収ボックスなどで処分します。片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            市は、許可のない業者へ運搬を依頼することは法律違反になると案内し、許可業者の名簿を公表しています。業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、ステーション・直接搬入・業者のどれで出すかを決める", b: "大きなごみを書き出し、指定シールを貼ってステーションに出せる物と、多量ごみとして直接搬入や業者への依頼が必要な物に分けます。直接搬入では品目ごとの1日の数量制限も確認しておきます。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "呉市で粗大ごみはどう出しますか？", a: "指定袋に入らない家具・寝具・家電製品・自転車などは、粗大ごみ指定シール（1枚300円、2mを超える物は2枚）を貼り、決められた日の朝8時30分までにごみステーションへ出します。家電4品目とパソコンは出せません（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみを呉市に収集してもらえますか？", a: "引っ越しごみや片付けごみなどの多量ごみはステーションで収集していません。分別して市のごみ処理施設へ自分で持ち込むか、市の許可を受けた一般廃棄物処理業者に運搬を依頼します（いずれも有料）。" },
    { q: "呉市でごみを自分で持ち込むといくらかかりますか？", a: "クリーンセンターくれ・芸予環境衛生センターへの直接搬入は10kgあたり160円です。月〜土曜日（日・祝日と年末年始を除く）に自家用車かトラックで搬入し、荷下ろしは原則自分で行います。" },
    { q: "呉市で冷蔵庫や洗濯機を処分するには？", a: "買い替え先か購入した家電販売店に引き取ってもらうのが基本です。購入店が近くにない場合は、市内の家電回収協力店に依頼するか、郵便局でリサイクル料金を払って指定引取場所へ自分で持ち込みます。" },
    { q: "関東の記事で見たお助けうさぎは呉市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、広島県は含まれていません（2026年11月1日確認）。本記事では、公式ページで呉市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "呉市の粗大ごみは指定シール（1枚300円）を貼ってごみステーションに出します。引っ越しや片付けで出る多量ごみはステーションで収集しないため、クリーンセンターくれ・芸予環境衛生センターへの直接搬入（10kgあたり160円）か、市の許可を受けた一般廃棄物処理業者への依頼、と使い分けるのが基本です。",
    "業者に頼む場合は、呉市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "ごみ・資源物の出し方", org: "呉市", url: `${K}/19/gomidashinew-html.html`, updated: "2026年3月25日" },
    { label: "指定袋・粗大ごみシールの種類と金額", org: "呉市", url: `${K}/18/haiki1-sitei01.html`, updated: "2026年4月1日" },
    { label: "市ごみ処理施設への直接搬入", org: "呉市", url: `${K}/20/haiki1-hannyuu.html`, updated: "2026年8月27日" },
    { label: "一般廃棄物処理業者名簿", org: "呉市", url: `${K}/18/haiki2.html`, updated: "2026年4月1日" },
    { label: "家電リサイクル法対象品（エアコン・テレビ・冷蔵庫・洗濯機）とパソコンの処分方法", org: "呉市", url: `${K}/18/haiki4-3r-kaden-pc.html`, updated: "2025年4月1日" },
    { label: "使用済パソコン・小型家電の回収方法について", org: "呉市", url: `${K}/18/kogatakaden-pc.html`, updated: "2025年4月1日" },
    { label: "火災等により発生したごみの処理手数料減免", org: "呉市", url: `${K}/20/kasaitougenmen.html`, updated: "2026年4月21日" },
    { label: "すこやかサポート事業", org: "呉市", url: `${K}/19/sukoyaka.html`, updated: "2026年7月31日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（広島県が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};


export const metadata = buildAreaMetadata(d);

export default function AreaKurePage() {
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
