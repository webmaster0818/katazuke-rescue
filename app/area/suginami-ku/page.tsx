import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "杉並区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13115/", count: 222 },
  curama: { url: "https://curama.jp/disposal/tokyo/15/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/suginami" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "suginami-ku",
  name: "杉並区",
  title: "杉並区でゴミ屋敷片付け・不用品回収を頼める業者｜粗大ごみは収集まで2〜3週間、日曜の持ち込みは1点400円【2026年版】",
  description:
    "杉並区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、杉並区を対応エリアに含むことを公式で確認して比較。粗大ごみ受付センターの申込方法と収集までの日数の目安（2〜3週間程度）、日曜のみの持ち込み（1点一律400円・1回5点まで）、減免制度、無許可の回収業者への注意を区の公式ページで確認してまとめています。",
  ogDescription:
    "杉並区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・収集までの日数・日曜の持ち込み・減免制度・無許可の回収業者への注意を区の公式ページで確認してまとめています。",
  h1: "杉並区でゴミ屋敷片付け・不用品回収を頼める業者",
  breadcrumb: "杉並区で片付け・不用品回収を頼める業者",
  tags: ["杉並区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "杉並区は粗大ごみの申し込みが増えているとして、申し込みから収集・持ち込みまでの日数の目安を2週間から3週間程度と案内しています。持ち込みは区民に限り日曜日のみで、1点につき一律400円、1回5点までです。退去日や引き渡し日が決まっている片付けでは、区の収集が間に合うかを最初に確かめることが計画の出発点になります。",
    `本記事では、杉並区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・減免・家電4品目の扱いと、無許可の回収業者についての区の注意（${CHECKED}確認）、杉並区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、杉並区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      杉並区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで杉並区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは杉並区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に杉並区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「杉並区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "杉並区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      杉並区では、家庭から出る家具・家庭用品などのうち、最大辺がおおむね30センチメートルを超え、220センチメートル以内のものが粗大ごみです。収集は事前申込制・有料で、申し込み先は粗大ごみ受付センターです（清掃事務所やごみ減量対策課では受け付けていません）。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ受付センター。インターネット・チャットボットは24時間、電話は 03-5296-5300（8時〜19時、12月29日〜1月3日を除く）、ファクスは 03-6880-5852（24時間）。電話はつながりにくいため、インターネット等での申し込みを区が呼びかけている", src: "杉並区「粗大ごみの出し方・申し込み方法」（更新日 2026年3月31日）" },
    { k: "収集までの日数", v: "申し込みから収集・持ち込みができるまでの目安は2週間から3週間程度（前後する場合あり）。年末年始、3月〜4月の引っ越しシーズン、5月の連休明けは特に混み合う。収集は土曜・日曜・祝日も行うが、時間の指定はできない", src: "同上" },
    { k: "手数料と支払い", v: "手数料は申し込み時に案内される（区が主な品目の手数料一覧表を目安として公開）。金額を確認してから杉並区の有料粗大ごみ処理券（A券200円・B券300円）を区内の取扱所・コンビニエンスストア・スーパーマーケットなどで購入して貼る。インターネットで申し込む場合は電子決済も使える（チャットボットは不可）", src: "同上" },
    { k: "持ち込み", v: "区民に限り日曜日のみ。事前に電話かファクスで申し込み、指定された日曜日の9時〜16時に持ち込む。手数料は1点につき一律400円、1回5点まで。処理券を貼った状態で持ち込み、現金での支払いは受け付けない。本人確認書類が必要", src: "同上" },
    { k: "運び出しが難しい場合", v: "65歳以上の方や障害のある方のみの世帯で運び出しが困難な場合は、杉並清掃事務所（03-3392-7281）に相談する", src: "同上" },
    { k: "減免制度", v: "生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付の受給者と、天災等の大規模な災害を受けた方は免除、火災等の災害を受けた方は9割減免。電話で粗大ごみ受付センターに申し込み、証明書類が必要", src: "同上" },
    { k: "家電4品目", v: "テレビ・エアコン・冷蔵庫・冷凍庫・保冷庫・冷温庫・洗濯機・衣類乾燥機は区では収集しない。購入店・買い替え店か、家電リサイクル受付センター（0570-087200）に引き取りを依頼する。自分で中間集積所（株式会社小川商会・中野区江原、中野運輸株式会社・中野区丸山）や指定引取場所に持ち込むと収集運搬料金が安くなる", src: "杉並区「家電リサイクル品目の処分」（更新日 2026年4月15日）" },
    { k: "パソコン", v: "区では回収しない。区の連携・協力事業者であるリネットジャパンリサイクル株式会社の宅配便回収（段ボール1箱・3辺の合計140センチ以内・20キログラム以内でパソコン本体を含めば無料）か、メーカーによる回収を使う", src: "杉並区「家庭用パソコンの処分」（更新日 2026年4月1日）" },
    { k: "無許可の回収業者", v: "産業廃棄物処理業や古物商の許可では家庭のごみを収集運搬できず、区が不用品回収業者に業の許可を出すこともないとして、許可のない業者に料金を払って家庭のごみを引き渡すことは廃棄物処理法違反になると注意している。遺品整理や引っ越しなどで大量のごみを出す場合は、事前に管轄の清掃事務所に問い合わせるよう案内", src: "杉並区「無許可の廃棄物回収業者を利用しないでください」（更新日 2025年6月10日）" },
  ],
  guidanceFirst: {
      id: "mukyoka-gyousha",
      title: "杉並区が注意する無許可の回収業者と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            杉並区は、家庭から出るごみは区が回収しているとしたうえで、産業廃棄物処理業や古物商の許可では家庭のごみを収集運搬できないこと、区が不用品回収業者に業の許可を出すことはないことを明記しています。トラックやチラシで「無料で処分」とうたいながら処理費用を請求する例や、回収した物を不法投棄する例も挙げています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            区は、リユースのために不用品回収業者を使う場合でも、依頼前に見積もりなどの書面が出るか、キャンセル料がかかるかを確かめ、引き取り後に引き取り書や領収書を受け取るよう勧めています。片付け業者に頼むときは、買い取る物と処分する物を分けた見積もりを受け取り、処分する物を誰がどのような許可で運ぶのかを作業前に確認してください。大量のごみが出る場合の区の窓口は管轄の清掃事務所です。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>で解説しています。
          </p>
        </>
      ),
  },
  sections: [
    {
      id: "nissuu-keikaku",
      title: "収集まで2〜3週間かかる前提で、期限のある片付けを計画する",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            杉並区は粗大ごみの申し込みから収集・持ち込みまでの目安を2週間から3週間程度としており、引っ越しシーズンや年末年始はさらに混み合うと案内しています。退去日が決まっている場合は、日付から逆算して3週間以上前に申し込むのが安全です。日曜日の持ち込みは1点一律400円と分かりやすい料金ですが、1回5点までのため、大型家具が多い片付けを持ち込みだけで終えるのは難しくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            区の収集が期限に間に合わない分や、自分では玄関先まで運び出せない物は、業者への依頼を組み合わせることになります。売れる家具や家電は、区が連携するリユースの仕組みや買取を先に検討すると、処分する点数そのものを減らせます。混雑時の対処は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみの混雑対策</Link>、退去前の進め方は<Link href="/taikyo-katazuke/" className={linkCls}>退去前の片付け</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 期限から逆算して、区の収集に間に合うかを確かめる", b: "退去日や引き渡し日から3週間以上の余裕があるかを確認し、粗大ごみの品目と大きさ（高さ・幅・奥行き）を測ってインターネットで申し込みます。間に合わない分と運び出しが難しい物を業者に頼む候補にします。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝え、総額と追加料金の条件を比べます。" },
    { t: "③ 書面の見積もりと、処分品の扱いを確認する", b: "区が勧めるとおり、見積書が書面で出るか、キャンセル料の有無、引き取り書や領収書の発行を確認します。買取と処分を分けた内訳と、処分する物の収集運搬を行う許可業者も作業前に確かめます。" },
  ],
  faqs: [
    { q: "杉並区の粗大ごみはどこに申し込みますか？", a: "粗大ごみ受付センターに、インターネットかチャットボット（24時間）、電話（03-5296-5300、8時〜19時）、ファクス（03-6880-5852）で申し込みます。清掃事務所やごみ減量対策課では受け付けていません（2026年11月1日確認）。" },
    { q: "杉並区の粗大ごみは申し込んでから何日で収集されますか？", a: "区の案内では、申し込みから収集・持ち込みができるまでの目安は2週間から3週間程度です（前後する場合があります）。年末年始、3月〜4月の引っ越しシーズン、5月の連休明けは特に混み合うとされています。" },
    { q: "杉並区で粗大ごみを持ち込むといくらですか？", a: "区民に限り日曜日のみ持ち込めます。手数料は1点につき一律400円で、1回5点までです。事前に電話かファクスで申し込み、有料粗大ごみ処理券を貼った状態で持ち込みます。現金での支払いは受け付けていません。" },
    { q: "杉並区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、杉並区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "杉並区では、生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付の受給者と、天災等の大規模な災害を受けた方は免除、火災等の災害を受けた方は9割減免です。電話で粗大ごみ受付センターに申し込み、証明書類が必要です。" },
  ],
  matome: [
    "杉並区の粗大ごみは、受付センターへの事前申し込みのうえで収集されますが、申し込みから収集までの目安は2週間から3週間程度です。日曜日の持ち込みは1点一律400円・1回5点までのため、期限のある片付けや物量の多い片付けでは、区の収集と業者への依頼を組み合わせて計画してください。",
    "業者に頼む場合は、杉並区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が注意を呼びかける無許可の回収業者を避けるため、書面の見積もりと処分品の収集運搬の許可を作業前に確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方・申し込み方法", org: "杉並区", url: "https://www.city.suginami.tokyo.jp/s105/727.html", updated: "2026年3月31日" },
    { label: "家電リサイクル品目の処分", org: "杉並区", url: "https://www.city.suginami.tokyo.jp/s104/738.html", updated: "2026年4月15日" },
    { label: "家庭用パソコンの処分", org: "杉並区", url: "https://www.city.suginami.tokyo.jp/s104/739.html", updated: "2026年4月1日" },
    { label: "無許可の廃棄物回収業者を利用しないでください", org: "杉並区", url: "https://www.city.suginami.tokyo.jp/s104/753.html", updated: "2025年6月10日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaSuginamiPage() {
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
