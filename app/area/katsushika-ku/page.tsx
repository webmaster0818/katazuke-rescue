import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "葛飾区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13122/", count: 227 },
  curama: { url: "https://curama.jp/disposal/tokyo/22/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/katsushika" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "katsushika-ku",
  name: "葛飾区",
  title: "葛飾区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみの持込ステーション2か所と年度30点の上限【2026年版】",
  description:
    "葛飾区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、葛飾区を対応エリアに含むことを公式で確認して比較。葛飾区粗大ごみ受付センターの申込方法、東水元・奥戸の持込ステーション（手数料は収集の概ね半額、収集300円の品目は無料）、手数料の免除、家電4品目・パソコンの出し方、悪質な回収業者への注意を区の公式ページで確認してまとめています。",
  ogDescription:
    "葛飾区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・持込ステーション・手数料の免除・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "葛飾区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "葛飾区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["葛飾区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "葛飾区の粗大ごみは、区の収集か、区内2か所の粗大ごみ持込ステーション（東水元・奥戸）への持ち込みで出せます。どちらも葛飾区粗大ごみ受付センターへの事前申し込みが必要で、電話受付は土曜・日曜・祝日を含む毎日、収集も日曜日に行っています。持ち込みの手数料は収集の概ね半額で、収集料金が300円の品目は無料になりますが、持ち込めるのは1世帯につき年度内30点までです。片付けで出る物の点数が多い場合は、区の収集・持ち込みと業者への依頼を組み合わせて計画することになります。",
    `本記事では、葛飾区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・免除・家電4品目とパソコンの扱い（${CHECKED}確認）と、葛飾区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、葛飾区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      葛飾区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで葛飾区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは葛飾区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に葛飾区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「葛飾区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "葛飾区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      葛飾区では、高さ・幅・奥行のいずれか一辺が30cmを超えるもの（布団、家具、寝具、自転車など）が粗大ごみです。一日に処理できる量に限りがあるため、収集も持ち込みも事前にインターネットか電話で申し込みます。
    </>
  ),
  facts: [
    { k: "申し込み", v: "葛飾区粗大ごみ受付センター（電話 0570-099-799、土曜・日曜・祝日を含む毎日 8時〜19時、年末年始を除く）またはインターネット受付。申し込み時に収集日・持ち込み日と料金が案内される。粗大ごみは日曜日も収集（持ち込み受け入れ）している。事業系の粗大ごみは収集しない", src: "葛飾区「粗大ごみの出し方」（更新日 2026年6月26日）" },
    { k: "手数料・支払い", v: "料金は「粗大ごみ品目・処理手数料一覧表」で品目ごとに決まり、申し込み時に案内された料金分の葛飾区の粗大ごみ処理券（A券200円・B券300円）を区内のコンビニやスーパー、持込ステーションなどの取扱所で購入して貼る。解体しても原則として解体前の品目・サイズ・料金", src: "同上" },
    { k: "持ち込み", v: "葛飾東（東水元）粗大ごみ持込ステーション（東水元4-5-6）と葛飾西（奥戸）粗大ごみ持込ステーション（奥戸3-23-28）の2か所。8時〜16時、申込者本人に限り身分証明書が必要（原則、家族や代理は不可）。1世帯につき年度内30点まで、車両は自家用車（業務用を除く）またはレンタカーで2トンまで、荷降ろしは本人。手数料は収集料金の概ね半額で、収集料金が300円の品目は無料", src: "同上" },
    { k: "出せない物", v: "家電4品目、パソコン、自動車・二輪車、処理困難物（タイヤ、ピアノ、消火器、耐火金庫、土・石・コンクリート・建築廃材など）、ガスボンベ類・バッテリー・ポータブル電源などの危険物、一辺が180cmを超えるもの、70kgを超える品目は収集できない", src: "同上" },
    { k: "運び出しの支援", v: "65歳以上の高齢者または運び出しに支障がある障がいのある方のみの世帯で、運び出しが困難な場合は清掃事務所（03-3693-6113）に相談。ただし引越しにともなう運び出し、概ね5点を超える粗大ごみ、粗大ごみ以外の運び出し、家の片付けの手伝いなどは対象外", src: "同上" },
    { k: "手数料の免除・減額", v: "生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付、老齢福祉年金の受給者は事前申請で免除（インターネットでは申し込めず、受付センターへの電話で申し出る）。火災や台風などの災害を受けた方は9割減額になる場合があり、清掃事務所に相談する", src: "同上" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。家電小売店に引き取りを依頼する、家電リサイクル受付センター（0570-087200、月曜〜金曜 9時〜17時）に申し込む、または指定引取場所に直接持ち込む（収集運搬料金は不要）。区が近隣の指定引取場所として岡山県貨物運送 江戸川事業所（江戸川区臨海町）と上昇運輸（足立区南花畑）を案内", src: "葛飾区「家電リサイクル法対象品の排出方法」（更新日 2024年4月1日）" },
    { k: "パソコン", v: "区では収集しない。区が協定を結ぶリネットジャパンリサイクル株式会社の宅配回収（パソコン本体を含めば1箱分無料）、または各メーカー・パソコン3R推進協会に申し込む", src: "葛飾区「使用済みパソコンの排出方法」（更新日 2026年10月31日）" },
    { k: "悪質な回収業者", v: "無料で回収するといいながら作業後に高額な料金を請求されたトラブルを挙げ、区の委託や許可を受けずに家庭のごみを業として収集・運搬するのは廃棄物処理法に抵触する違法行為で、産業廃棄物や古物商の許可があっても家庭の不用品を料金を払って引き渡さないよう呼びかけ。被害の相談先は葛飾区消費生活センター（03-5698-2311）", src: "葛飾区「悪質な不用品回収業者とのトラブルが発生しています」（更新日 2021年8月27日）" },
  ],
  sections: [
    {
      id: "mochikomi-30ten",
      title: "持込ステーションの年度30点と、収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            葛飾区の持ち込みは、手数料が収集の概ね半額で、収集料金が300円の品目なら無料になるため、車を使える人には負担の小さい方法です。一方で、持ち込めるのは申込者本人に限られ、1世帯につき年度内30点までという上限があります。実家や家一軒分の片付けのように点数が多い場合は、持ち込みだけで完結させるのは難しく、上限を超える分は区の収集か業者への依頼に回すことになります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            区の運び出し支援も、引越しにともなう運び出しや概ね5点を超える粗大ごみ、家の片付けの手伝いは対象外とされています。また、ピアノ・耐火金庫・タイヤ・消火器などの処理困難物や、一辺180cm超・70kg超の物は区で収集できないため、これらは業者や専門の回収ルートの見積もりに含めて考えます。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、大きさの基準は<Link href="/sodaigomi-size-kijun/" className={linkCls}>粗大ごみのサイズ基準</Link>、自分で運ぶ場合の注意は<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "akushitsu-gyousha",
      title: "区が注意を呼びかける回収業者と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            葛飾区は、無料で回収するといいながら作業後に高額な料金を請求されたトラブルを挙げ、区の委託や許可を受けずに家庭のごみを業として収集・運搬することは廃棄物処理法に抵触する違法行為だと案内しています。業者が産業廃棄物の許可や古物商の許可を持っていても、家庭の不用品を料金を払って引き渡さないよう呼びかけています。一方で、区の収集や家電リサイクル収集を利用するために家の中から玄関先などへ運び出す業務には、区の許可は不要とされています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、運び出し・仕分け、買取、処分を分けた見積もりを受け取り、処分する物をどの許可業者が収集運搬するのか、区の粗大ごみや家電リサイクルの手続きとどう組み合わせるのかを確認してください。高額な請求を受けたときは葛飾区消費生活センターが相談先です。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区で出せる物・出せない物と、持ち込みの点数を数える", b: "粗大ごみの品目と点数を書き出し、ピアノや耐火金庫、180cm超・70kg超の物など区で収集できない物を分けます。持ち込みは年度内30点までなので、今年度にすでに持ち込んだ点数も含めて、持ち込み・収集・業者の分担を決めます。" },
    { t: "② 業者に頼む分を、写真と品目リストで複数社に見積もり依頼する", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と収集運搬料金が分けて示されるかも確認してください。" },
    { t: "③ 処分の許可と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分分の収集運搬を行う許可業者、搬出時の破損への補償、当日に追加料金が発生する条件を契約前に確認します。" },
  ],
  faqs: [
    { q: "葛飾区の粗大ごみはどこに申し込みますか？", a: "葛飾区粗大ごみ受付センターに、電話（0570-099-799、土曜・日曜・祝日を含む毎日8時〜19時、年末年始を除く）またはインターネットで申し込みます。申し込み時に案内された料金分の粗大ごみ処理券（A券200円・B券300円）を、区内のコンビニやスーパーなどの取扱所で購入して貼ります（2026年11月1日確認）。" },
    { q: "葛飾区で粗大ごみを持ち込むと安くなりますか？", a: "持込ステーション（東水元・奥戸の2か所）に持ち込む場合の手数料は収集料金の概ね半額で、収集料金が300円の品目は無料です。持ち込みも事前申し込みが必要で、申込者本人に限り、1世帯につき年度内30点までです。" },
    { q: "葛飾区で区に出せない粗大ごみはありますか？", a: "家電4品目、パソコン、自動車・二輪車のほか、タイヤ・ピアノ・消火器・耐火金庫などの処理困難物、ガスボンベ類やバッテリーなどの危険物、一辺が180cmを超えるもの、70kgを超える品目は区で収集できません。" },
    { q: "葛飾区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、葛飾区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "葛飾区で粗大ごみの手数料が免除になるのはどんな場合ですか？", a: "生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付、老齢福祉年金の受給者は、事前に申請すると免除になります。インターネットでは申し込めないため、受付センターに電話で申し出ます。火災や台風などの災害を受けた方は9割減額になる場合があり、清掃事務所に相談します。" },
  ],
  matome: [
    "葛飾区の粗大ごみは、受付センターへの事前申し込みのうえ、区の収集か東水元・奥戸の持込ステーションへの持ち込み（手数料は収集の概ね半額、収集300円の品目は無料）で出します。持ち込みは年度内30点まで、運び出し支援は引越しや概ね5点超が対象外で、処理困難物や180cm超・70kg超の物は区で収集できないため、点数の多い片付けは業者との組み合わせが基本です。",
    "業者に頼む場合は、葛飾区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が注意を呼びかける回収業者とのトラブルを避けるため、買取と処分を分けた内訳と収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ・家電など（カテゴリページ）", org: "葛飾区", url: "https://www.city.katsushika.lg.jp/kurashi/1000048/1001536/index.html" },
    { label: "粗大ごみの出し方", org: "葛飾区", url: "https://www.city.katsushika.lg.jp/kurashi/1000048/1001536/1016343.html", updated: "2026年6月26日" },
    { label: "家電リサイクル法対象品の排出方法", org: "葛飾区", url: "https://www.city.katsushika.lg.jp/kurashi/1000048/1001536/1001673.html", updated: "2024年4月1日" },
    { label: "使用済みパソコンの排出方法", org: "葛飾区", url: "https://www.city.katsushika.lg.jp/kurashi/1000048/1001536/1001675.html", updated: "2026年10月31日" },
    { label: "悪質な不用品回収業者とのトラブルが発生しています", org: "葛飾区", url: "https://www.city.katsushika.lg.jp/kurashi/1000048/1001536/1001677.html", updated: "2021年8月27日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKatsushikaPage() {
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
