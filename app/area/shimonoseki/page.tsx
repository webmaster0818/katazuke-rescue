import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "下関市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-35/city-35201/", count: 39 },
  curama: { url: "https://curama.jp/disposal/yamaguchi/1/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/yamaguchi/shimonoseki" },
};

const G = "https://www.city.shimonoseki.lg.jp/site/gomi";

const d: AreaCityData = {
  slug: "shimonoseki",
  name: "下関市",
  title: "下関市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみ等の戸別収集は1回15点まで、自己搬入は100kgごとに520円【2026年版】",
  description:
    "下関市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、下関市を対応エリアに含むことを公式で確認して比較。粗大ごみ等の戸別収集（電話・インターネット申込、1回15点まで、粗大ごみ等処理券）、品目別の手数料、引っ越し等で出る大量のごみの扱い、ごみ処理施設への自己搬入（100kgまでごとに520円）、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "下関市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみ等の戸別収集、手数料、大量のごみの扱い、ごみ処理施設への自己搬入、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  h1: "下関市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "下関市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["下関市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "下関市では、家具や寝具などの大きなごみは「粗大ごみ等」として、粗大ごみ等受付センターに電話かインターネットで申し込み、手数料分の粗大ごみ等処理券を貼って戸別収集で出します。一度に収集できるのは15点までで、引っ越し等で出る大量のごみはごみステーションに出せず、市の処理施設への直接搬入か、市の許可業者への収集依頼となります。",
    `本記事では、下関市の公式ページで確認した粗大ごみ等の戸別収集、手数料、ごみ処理施設への自己搬入、家電4品目・パソコンの扱い（${CHECKED}確認）と、下関市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、下関市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      下関市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに下関市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に山口県が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「下関市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "下関市の粗大ごみ等の戸別収集・手数料・自己搬入・家電4品目（市の公式情報）",
  factsLead: (
    <>
      下関市の大きなごみは、申し込み制の戸別収集（有料・1回15点まで）で出すか、自分でごみ処理施設へ持ち込みます（自己搬入・有料）。引っ越し等で出る大量のごみはごみステーションに出せません。家電4品目は販売店での引き取りが基本で、パソコンは市の戸別収集では回収されません。
    </>
  ),
  facts: [
    { k: "戸別収集の申し込み", v: "粗大ごみ等受付センター（電話 083-254-5380）またはインターネットで申し込む。電話の受付時間は休業日の翌業務日 9時〜19時、それ以外の火曜〜金曜 9時〜17時（土日・祝日・年末年始は休み）。一度に収集できるのは15点まで。収集日ごとに収集可能量があり、上限に達した日は選べない。申込内容の変更は収集日の3業務日前まで。家電リサイクル券が必要な特定家庭用機器は電話のみ受付", src: "下関市「下関市粗大ごみ等インターネット受付｜トップページ」（更新日の表示なし）" },
    { k: "受付数の制限", v: "収集体制の維持のため、1日の受付数に制限がある。例年10月から12月は申し込みが集中し、収集希望日が受付上限数に達した場合は受け付けられない。「1世帯1日15点まで」は変わらない", src: "下関市「粗大ごみ等の受付制限について（令和4年10月から）」（更新日 2022年8月22日）" },
    { k: "出し方", v: "収集日当日の朝8時30分までに出す。一戸建ては公道に接する出入口付近（玄関前、門の前など）で、門より2m以上離れた敷地内の玄関や庭には出さない。集合住宅は原則1階出入口付近。ごみステーションには出さない。申込内容と異なる場合は収集できない。概ね50kg以上の物は市では収集できない（自ら市の施設へ持ち込むか、一般廃棄物収集・運搬許可業者へ依頼）", src: "下関市「下関市粗大ごみ等インターネット受付｜トップページ」（更新日の表示なし）" },
    { k: "手数料", v: "令和8年4月1日から改定。手数料額分の粗大ごみ等処理券（100円券・300円券・500円券）を組み合わせて貼る。処理券は市内のスーパー・コンビニ等で取り扱い。例: たんす・棚類は3辺の和が200cm未満300円〜400cm以上1,000円、布団200円、スプリングマットレス（シングル・セミダブル、厚み20cm未満）500円、ソファーは500円〜1,000円、自転車は100円〜500円、子育て用品は一律100円", src: "下関市「粗大ごみ等の手数料について」（更新日 2026年2月19日）" },
    { k: "引っ越し等の大量のごみ", v: "引っ越し等で出る大量のごみはごみステーションに出せない。市の処理施設に直接搬入するか、市の許可業者に収集を依頼する", src: "下関市「令和8年（2026年）度ごみの分け方・出し方ガイド」（更新日 2026年6月25日）" },
    { k: "自己搬入", v: "奥山工場・吉母管理場・クリーンセンター響に有料で持ち込める。月曜〜金曜 午前8時15分〜午後4時（祝日も搬入可、土日・年末年始は休み）。一般廃棄物処理手数料は100kgまでごとに520円。持ち込んだごみは自分で分別して積み降ろす（分別されていない場合は断ることがある）", src: "下関市「ごみの直接自己搬入について」（更新日 2025年3月31日）" },
    { k: "家庭ごみの搬入者", v: "市は、自己搬入する場合はご自身で持ち込むよう案内し、自己搬入が困難な場合は戸別収集を利用するか、一般廃棄物収集運搬許可業者に依頼するよう案内している。あわせて「ご自身のごみ以外を運搬することは法律上できません」と記載している", src: "下関市「ごみの直接自己搬入について」（更新日 2025年3月31日）" },
    { k: "家電4品目", v: "市では処分できない。引き取り義務のある販売店（過去に購入した店、新たに購入する店）での引き取りが基本。難しい場合は郵便局でリサイクル料金を支払い、家電リサイクル券とともに市内2か所の指定引取場所（岡山県貨物運送 下関営業所、日本通運 下関指定引取場所）へ自分で搬入する。自分で搬入できない場合は、収集運搬（50kgまで）を粗大ごみ等受付センターに電話で申し込め、リサイクル料金とは別に処理手数料（エアコン・冷蔵庫等3,500円、テレビ・洗濯機等2,500円）がかかる", src: "下関市「家電4品目の廃棄方法（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）」（更新日 2024年4月1日）、同「粗大ごみ等の手数料について」（更新日 2026年2月19日）" },
    { k: "パソコン", v: "市と協定を締結したリネットジャパンリサイクル株式会社の宅配便回収を利用でき、パソコン本体を含む回収は1回につき1箱まで無料（通常は1箱1,848円）。燃やせないごみ・粗大ごみとしての市の回収はパソコンを除く。このほか、パソコンメーカーのリサイクル制度や、市内の使用済小型家電回収ボックス（投入口40cm×20cm）も利用できる", src: "下関市「不用なパソコン等、小型家電を宅配便で回収しています！」（更新日 2025年4月1日）、同「使用済小型家電無料回収について」（更新日 2026年1月23日）" },
    { k: "不用品回収業者への注意", v: "市は、トラックや空き地での不用品回収、ポストに投函されるチラシの業者について「市の許可を得ずに、不用品の回収を無許可で営業している者がほとんどです」と注意を呼びかけ、無料とうたいながら高額な料金を請求されたトラブルも挙げている。家電4品目で引き取り義務のある販売店がない場合の方法として、市への収集の申し込みと、下関市の許可を持った一般廃棄物収集運搬許可業者への依頼を案内している", src: "下関市「違法な不用品回収業者を利用しないでください！」（更新日 2021年11月29日）" },
    { k: "ごみ出しの支援", v: "ごみ出し困難者支援事業（ふれあい収集）: 65歳以上で要介護2以上の方、身体障害者手帳（肢体不自由・視覚障害）1級・2級の方などで構成され、親族や近隣の協力が得られない世帯を対象に、燃やせるごみを週1回、自宅玄関先などで戸別に収集する。電話で申し込み、訪問調査のうえ可否を通知", src: "下関市「ごみ出し困難者支援事業（ふれあい収集）について」（更新日 2023年6月23日）" },
  ],
  sections: [
    {
      id: "kobetsu-jiko-hannyu",
      title: "下関市の戸別収集・自己搬入と業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            下関市の粗大ごみ等の戸別収集は、一度に15点までで、収集日ごとに上限があります。例年10月から12月は申し込みが集中すると市が案内しているため、退去日や引き渡し日が決まっている場合は早めに申し込んでおくと安心です。出す場所は一戸建てなら公道に接する出入口付近、集合住宅なら原則1階出入口付近で、部屋の中から運び出してもらう仕組みではありません。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            引っ越しや家の片付けで大量に出る場合は、ごみステーションには出せず、奥山工場などへの自己搬入（100kgまでごとに520円）か、市の許可業者への収集依頼となります。市は、自己搬入はご自身で持ち込むよう案内しています。使える物をリユースに回し、戸別収集や自己搬入で減らせる分を先に減らしたうえで、残りの運び出しを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
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
            下関市では、家電4品目は販売店での引き取りが基本で、難しい場合は家電リサイクル券を用意して指定引取場所へ自分で搬入するか、粗大ごみ等受付センターに電話で収集運搬を申し込みます。市に頼む場合は、リサイクル料金とは別に1台2,500円または3,500円の処理手数料がかかります。片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、戸別収集・自己搬入・業者のどれで出すかを決める", b: "大きなごみを書き出し、1回15点までの戸別収集で出し切れるか、収集日の空きがあるかを確かめます。間に合わない分や大量に出る分は、ごみ処理施設への自己搬入か業者への依頼のどちらで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "下関市で粗大ごみはどう出しますか？", a: "粗大ごみ等受付センター（083-254-5380）に電話するか、インターネットで申し込み、手数料分の粗大ごみ等処理券を貼って、収集日の朝8時30分までに一戸建てなら公道に接する出入口付近、集合住宅なら原則1階出入口付近に出します。一度に収集できるのは15点までです（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみはどうすればよいですか？", a: "下関市は、引っ越し等で出る大量のごみはごみステーションに出せず、市の処理施設に直接搬入するか、市の許可業者に収集を依頼するよう案内しています。" },
    { q: "下関市でごみを自分で持ち込むといくらかかりますか？", a: "奥山工場・吉母管理場・クリーンセンター響への自己搬入は、一般廃棄物処理手数料が100kgまでごとに520円です。月曜〜金曜の午前8時15分〜午後4時に搬入でき、持ち込んだごみは自分で分別して積み降ろします。" },
    { q: "下関市で冷蔵庫や洗濯機を処分するには？", a: "引き取り義務のある販売店に依頼するのが基本です。難しい場合は郵便局でリサイクル料金を支払って指定引取場所へ自分で搬入するか、粗大ごみ等受付センターに電話で収集運搬を申し込みます。市に頼む場合はリサイクル料金とは別に処理手数料（エアコン・冷蔵庫等3,500円、テレビ・洗濯機等2,500円）がかかります。" },
    { q: "関東の記事で見たお助けうさぎは下関市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、山口県は含まれていません（2026年11月1日確認）。本記事では、公式ページで下関市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "下関市の大きなごみは、粗大ごみ等の戸別収集（1回15点まで・処理券）で出すか、ごみ処理施設へ自己搬入（100kgまでごとに520円）するのが基本です。引っ越し等で出る大量のごみはごみステーションに出せず、自己搬入か市の許可業者への依頼となります。",
    "業者に頼む場合は、下関市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目は市が示す手数料も参考に、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "下関市粗大ごみ等インターネット受付｜トップページ", org: "下関市", url: "https://www.eco.city.shimonoseki.yamaguchi.jp/eco/view/shimonoseki/top.html" },
    { label: "粗大ごみ等の受付制限について（令和4年10月から）", org: "下関市", url: `${G}/76703.html`, updated: "2022年8月22日" },
    { label: "粗大ごみ等の手数料について", org: "下関市", url: `${G}/144433.html`, updated: "2026年2月19日" },
    { label: "令和8年（2026年）度ごみの分け方・出し方ガイド", org: "下関市", url: `${G}/143543.html`, updated: "2026年6月25日" },
    { label: "ごみの直接自己搬入について", org: "下関市", url: `${G}/131342.html`, updated: "2025年3月31日" },
    { label: "家電4品目の廃棄方法（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）", org: "下関市", url: `${G}/109214.html`, updated: "2024年4月1日" },
    { label: "不用なパソコン等、小型家電を宅配便で回収しています！", org: "下関市", url: `${G}/2193.html`, updated: "2025年4月1日" },
    { label: "使用済小型家電無料回収について", org: "下関市", url: `${G}/2218.html`, updated: "2026年1月23日" },
    { label: "違法な不用品回収業者を利用しないでください！", org: "下関市", url: `${G}/2134.html`, updated: "2021年11月29日" },
    { label: "ごみ出し困難者支援事業（ふれあい収集）について", org: "下関市", url: `${G}/2260.html`, updated: "2023年6月23日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（山口県が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaShimonosekiPage() {
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
