import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "豊中市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-27/city-27203/", count: 148 },
  curama: { url: "https://curama.jp/disposal/osaka/4/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/osaka/toyonaka" },
};

const d: AreaCityData = {
  slug: "toyonaka",
  name: "豊中市",
  title: "豊中市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは月1回・5点まで、臨時ごみとクリーンランド持ち込み【2026年版】",
  description:
    "豊中市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。粗大ごみ（月1回・1回5点まで）と1点400円〜2,700円の手数料、臨時ごみ（割増料金・立会い）、豊中市伊丹市クリーンランドへの持ち込み（10kgまでごとに105円）を公式ページで確認してまとめています。",
  ogDescription:
    "豊中市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの申込・手数料、臨時ごみ、クリーンランドへの持ち込み、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "豊中市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "豊中市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["豊中市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "豊中市の粗大ごみは、地域ごとに月1回の収集日が決まっていて、1回に申し込めるのは5点までです。申し込みが集中して受付件数の上限に達すると翌月回しになるため、片付けで粗大ごみが多く出る場合は早めの計画が欠かせません。引越しや片付けで多量にごみを出すときや、粗大ごみを1回に6点以上出すときは「臨時ごみ」として電話で申し込み、割増の手数料を収集時に現金で支払う仕組みになっています。",
    `本記事では、豊中市の公式ページで確認した粗大ごみ・臨時ごみの申込方法と手数料、クリーンランドへの持ち込み、家電4品目の扱い（${CHECKED}確認）と、豊中市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、豊中市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      豊中市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに豊中市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に大阪府が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「豊中市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "豊中市の粗大ごみ・臨時ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      豊中市では、最大の辺または径が30cm以上の電気機械器具と、市指定ごみ袋に入らない大きな物（電気機械器具以外）が粗大ごみです。定日に出す粗大ごみと、多量・6点以上・収集日以外に出す臨時ごみで、申込方法も手数料も変わります。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ受付センター（電話 0570-666-861、利用できない場合は 06-6486-0530）。受付は月曜〜金曜（祝日を含む）9時〜17時15分で、収集日の3か月前〜7日前まで。インターネットは24時間365日、収集日の3か月前〜14日前まで（申し込める品目に制限あり）。豊中市LINE公式アカウントからも申し込める", src: "豊中市「粗大ごみの出し方」（PDF、「粗大ごみ・リユース」ページに掲載）、同「粗大ごみ・リユース」（更新日 2026年8月5日）" },
    { k: "収集回数・点数", v: "地域ごとに月1回、収集日が決まっている。1回に申し込める点数は5点まで。申し込みが集中して受付件数の上限に達した場合は翌月回しになる", src: "豊中市「粗大ごみの出し方」（PDF）" },
    { k: "手数料", v: "品目ごとに1点400円・900円・1,800円・2,700円（令和5年10月1日改定）。例: たんすは幅と高さの合計で400円〜2,700円、ベッド（マットレス除く）1,800円、自転車900円", src: "豊中市「粗大ごみ、臨時ごみ処理手数料の改定について」（更新日 2024年10月14日）、同「粗大ごみインターネット申込み受付品目一覧及び処理手数料」" },
    { k: "支払い・出し方", v: "粗大ごみ処理券（400円券・900円券の2種類）を市内のスーパー・コンビニエンスストア等で購入し、受付番号と収集日を記入して貼る。処理券の払い戻しはできない。収集日の朝8時30分までに申し込み時に確認した場所に出す", src: "豊中市「粗大ごみ・リユース」、同「粗大ごみの出し方」（PDF）" },
    { k: "臨時ごみ", v: "引越しや片付けなどで多量にごみを出すとき、粗大ごみを1回に6点以上出すとき、収集日以外の収集を希望するときなどが対象。粗大ごみ受付センターへの電話申込のみ（インターネット不可）で、収集日の3か月前〜3日前まで（土日をはさむ場合は5日前まで）。手数料は粗大ごみの品目が1点670円・1,350円・2,700円・4,050円の割増料金、それ以外は10kgまで（市指定ごみ袋1つ）ごとに250円。収集時の立会いが必要で、手数料は現金で支払う（処理券は使えない）", src: "豊中市「臨時ごみの出し方（申込制有料収集・随時）」（更新日 2026年6月16日）" },
    { k: "持ち込み", v: "豊中市伊丹市クリーンランド。予約専用電話 06-6841-4498（月曜〜土曜（祝日を含む）9時〜17時）で、持ち込み希望日の7日前から当日午前中まで予約。搬入は月曜〜金曜14時〜16時30分、土曜10時〜16時（12時〜12時45分を除く）。施設使用料はごみの重さ10kgまでごとに105円。可燃ごみと不燃ごみ（粗大ごみを含む）の分別が必要", src: "豊中市「直接処理施設に持ち込みをする場合（予約制・有料）」（更新日 2026年6月16日）" },
    { k: "持ち込めない物", v: "家電4品目、パソコン（モニター等の標準添付品を含む）、高圧ガスボンベ・消火器などの爆発物・引火物、農薬などの有害物、金庫・ピアノなどの強靭な物、建築廃材・土・瓦などの産業廃棄物など", src: "同上" },
    { k: "家電4品目", v: "買い替える販売店に引取りを依頼するか、郵便局でリサイクル料金を払って指定引取場所（市内は日本通運株式会社 豊中指定取引所）に運ぶ。収集運搬を頼む場合の依頼先として、豊中市収集運搬許可業者（豊中環境事業協同組合 06-6853-4001）と市の臨時ごみ収集（0570-666-861）を案内し、運搬料金の目安は250L以上の冷蔵庫・冷凍庫が5,000円程度、それ以外が3,500円程度", src: "豊中市「家電リサイクル法対象品目(エアコン・テレビ・洗濯機・冷蔵庫等)」（更新日 2026年4月2日）" },
    { k: "パソコン", v: "市の定期収集には出せない。最大の辺が30cm未満のノートパソコン等は市の拠点回収、市と協定を結ぶリネットジャパンリサイクル株式会社の宅配便回収、またはメーカーによる回収を利用する", src: "豊中市「パソコンの処分方法」（更新日 2022年2月1日）" },
    { k: "リユースの連携", v: "粗大ごみに出す前のリユースとして、ジモティースポット豊中服部天神店（2026年4月17日開設、持ち込み可）、おいくら（買取店への一括見積もり）、ジモティー（地域での譲渡）などの連携サービスを紹介。いずれも市の事業ではない", src: "豊中市「粗大ごみ・リユース」" },
  ],
  sections: [
    {
      id: "sodai-rinji",
      title: "豊中市の粗大ごみ・臨時ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            豊中市の粗大ごみは月1回・1回5点までのため、家具の入れ替え程度なら定日の収集で足りますが、家一軒分や部屋ごとの片付けでは収まりません。6点以上をまとめて出す場合や、引越しや片付けで多量に出る場合は臨時ごみとして申し込むことになり、粗大ごみの品目は1点670円〜4,050円と、定日の粗大ごみ（400円〜2,700円）より割高になります。臨時ごみは収集時の立会いと現金払いが必要な点も計画に入れておきましょう。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、豊中市伊丹市クリーンランドへの持ち込みは重さ10kgまでごとに105円です。ただし平日の搬入は午後のみで、家電4品目・パソコン・金庫・ピアノなどは持ち込めません。点数の多い片付けは、使える物をリユースに回し、持ち込みと定日の粗大ごみで減らせる分を先に減らしたうえで、残りの運び出しを業者に頼む組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電4品目の運搬料金の目安と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            豊中市は家電4品目の処分について、販売店に依頼しない場合の収集運搬の依頼先として、市の収集運搬許可業者（豊中環境事業協同組合）と市の臨時ごみ収集を案内し、運搬料金の目安（250L以上の冷蔵庫・冷凍庫は5,000円程度、それ以外は3,500円程度）を示しています。リサイクル料金は別にかかるため、片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているか、市の案内する目安と比べて確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を行う許可業者を確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 点数と期限から、定日の粗大ごみで間に合うかを判断する", b: "粗大ごみの品目と点数を書き出し、月1回・5点までの定日収集で間に合うかを確かめます。間に合わない分は、臨時ごみ、クリーンランドへの持ち込み、業者への依頼のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "豊中市の粗大ごみはどこに申し込みますか？", a: "粗大ごみ受付センター（電話 0570-666-861、利用できない場合は 06-6486-0530、月曜〜金曜の9時〜17時15分、祝日も受付）に、収集日の3か月前から7日前までに申し込みます。インターネット（24時間、収集日の14日前まで）やLINEでも申し込めます（2026年11月1日確認）。" },
    { q: "豊中市の粗大ごみは一度に何点まで出せますか？", a: "定日の粗大ごみは地域ごとに月1回の収集で、1回に申し込めるのは5点までです。6点以上を一度に出す場合は臨時ごみとして電話で申し込み、手数料は割増料金（1点670円・1,350円・2,700円・4,050円）になります。" },
    { q: "引越しで出るごみを豊中市に収集してもらえますか？", a: "引越しや片付けで多量にごみを出す場合は、臨時ごみ（申込制の有料収集）として粗大ごみ受付センターに電話で申し込みます。粗大ごみ以外の物は10kgまで（市指定ごみ袋1つ）ごとに250円で、収集時の立会いと現金での支払いが必要です。インターネットでは申し込めません。" },
    { q: "豊中市でごみを自分で持ち込むといくらかかりますか？", a: "豊中市伊丹市クリーンランドに持ち込む場合、施設使用料はごみの重さ10kgまでごとに105円です。予約専用電話（06-6841-4498）で7日前から当日午前中までに予約し、平日は14時〜16時30分、土曜は10時〜16時（昼休みを除く）に搬入します。" },
    { q: "関東の記事で見たお助けうさぎは豊中市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、大阪府は含まれていません（2026年11月1日確認）。本記事では、公式ページで豊中市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "豊中市の粗大ごみは月1回・1回5点までで、1点400円〜2,700円の処理券を貼って出します。6点以上や引越し・片付けで多量に出る場合は臨時ごみ（割増料金・立会い・現金払い）、自分で運べる物はクリーンランドへの持ち込み（10kgまでごとに105円）、と使い分けるのが基本です。",
    "業者に頼む場合は、豊中市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目は市が示す運搬料金の目安も参考に、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ・リユース", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/sodaigomi_dashikata.html", updated: "2026年8月5日" },
    { label: "粗大ごみの出し方（PDF）", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/sodaigomi_dashikata.files/2026oversized_garbage_instructions.pdf" },
    { label: "粗大ごみインターネット申込み受付品目一覧及び処理手数料", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/sodaigomi_dashikata.files/2026.3sodai.htm" },
    { label: "粗大ごみ、臨時ごみ処理手数料の改定について", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/gomi_recycl_bika_to/tesuryoukaitei.html", updated: "2024年10月14日" },
    { label: "臨時ごみの出し方（申込制有料収集・随時）", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/rinji.html", updated: "2026年6月16日" },
    { label: "直接処理施設に持ち込みをする場合（予約制・有料）", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/mochikomi.html", updated: "2026年6月16日" },
    { label: "家電リサイクル法対象品目(エアコン・テレビ・洗濯機・冷蔵庫等)", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/kaden_rc.html", updated: "2026年4月2日" },
    { label: "パソコンの処分方法", org: "豊中市", url: "https://www.city.toyonaka.osaka.jp/kurashi/gomi_risaikuru_bika/bunbetsu_dashikata/syusyufuka/recy.html", updated: "2022年2月1日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（大阪府が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaToyonakaPage() {
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
              <Link href="/area/edogawa-ku/" className="text-primary underline underline-offset-2">江戸川区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/itabashi-ku/" className="text-primary underline underline-offset-2">板橋区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/kita-ku/" className="text-primary underline underline-offset-2">北区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/nakano-ku/" className="text-primary underline underline-offset-2">中野区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
              <Link href="/area/suginami-ku/" className="text-primary underline underline-offset-2">杉並区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
            </li>
            <li>
              <Link href="/area/suita/" className="text-primary underline underline-offset-2">吹田市のゴミ屋敷片付け・不用品回収業者おすすめ3選</Link>
            </li>
            <li>
              <Link href="/area/sumida-ku/" className="text-primary underline underline-offset-2">墨田区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
