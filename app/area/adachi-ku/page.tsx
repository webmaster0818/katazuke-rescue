import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "足立区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13121/", count: 226 },
  curama: { url: "https://curama.jp/disposal/tokyo/21/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/adachi" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "adachi-ku",
  name: "足立区",
  title: "足立区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜区のごみ屋敷相談窓口と粗大ごみの無料持ち込み【2026年版】",
  description:
    "足立区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を比較。足立区生活環境の保全に関する条例にもとづくごみ屋敷の相談窓口（生活環境保全課）、粗大ごみの手数料（400円〜2,800円）、年度内20個までの無料持ち込みを公式ページで確認してまとめています。",
  ogDescription:
    "足立区を対応エリアに含む片付け・不用品回収業者4社と、区のごみ屋敷相談窓口、粗大ごみの申込方法・手数料・無料の持ち込み・運び出し収集を区の公式ページで確認してまとめています。",
  h1: "足立区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "足立区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["足立区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "足立区は『足立区生活環境の保全に関する条例』にもとづいて、いわゆるごみ屋敷の改善に取り組んでおり、近隣の住民だけでなく、自宅がごみや荷物であふれて困っている本人からの相談も、環境部 生活環境保全課が受け付けています。区の職員が解決までサポートするとしており、業者に頼む前に区の窓口へ相談するという選択肢があるのが足立区の特徴です。",
    `本記事では、足立区の公式ページで確認したごみ屋敷の相談窓口、粗大ごみの申込方法・手数料・無料の持ち込み・運び出し収集（${CHECKED}確認）と、足立区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、足立区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      足立区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで足立区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは足立区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に足立区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「足立区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "足立区のごみ屋敷相談・粗大ごみ・家電4品目（区の公式情報）",
  factsLead: (
    <>
      足立区では一辺の長さが30cmを超えるものが粗大ごみで、「収集（有料）」と「指定場所への持ち込み（無料）」があります。いずれも粗大ごみ受付センターへの事前申し込みが必要です。ごみ屋敷の相談窓口とあわせてまとめます。
    </>
  ),
  facts: [
    { k: "ごみ屋敷の相談窓口", v: "足立区役所 環境部 生活環境保全課（南館11階）。電話 03-3880-5410（8時30分〜17時15分、土日祝日を除く）、足立区オンライン申請システムでも受け付け。自宅がごみや荷物であふれて困っている本人からの相談も受け付け、区職員が解決までサポートするとしている", src: "足立区「足立区のごみ屋敷対策事業」（更新日 2026年4月2日）" },
    { k: "区の取り組みの例", v: "区の解決事例には、入院中の方の自宅について区が片付け業者の手配と見積もりに協力した例や、生活環境保全審議会に諮問してごみの撤去・処分費用を支援した例が掲載されている", src: "同上" },
    { k: "粗大ごみの申し込み", v: "粗大ごみ受付センター（電話 03-6747-5100、月曜〜土曜 8時〜19時、祝日も受付）。インターネット・チャットボットは24時間。収集・持込希望日の7日前までの受付で、搬出日は申込日の約1週間先が目安", src: "足立区「粗大ごみの出し方」（更新日 2026年5月12日）" },
    { k: "手数料", v: "品目により400円から2,800円までの5段階（例: ふとん 400円、いす 400円、畳1畳 1,200円、ソファー（2人以上用） 1,200円）。箱型のタンスや棚は高さと幅の合計で金額が変わる。有料シールはA券200円とB券300円", src: "同上" },
    { k: "持ち込み（無料）", v: "事前申し込みが必要で区民のみ。本人確認書類を持参。一世帯につき年度内合計20個まで（回数制限なし）。持込場所は白井運輸(株)（鹿浜三丁目28番7号、年中無休・年末年始を除く、9時〜16時）と(株)新井商店（北加平町8番26号、土曜・日曜・祝日のみ、9時〜16時）。荷下ろしは本人", src: "同上" },
    { k: "運び出し収集", v: "65歳以上の高齢者のみの世帯、身体障害者手帳を持つ方のみの世帯で、自分で運び出せず協力も得られない場合が対象（足立清掃事務所 03-3853-2141 に電話で相談）。引っ越しに伴う運び出しや、解体が必要な場合は原則対象外", src: "同上" },
    { k: "減免", v: "生活保護受給者、児童扶養手当・特別児童扶養手当の受給者などは収集の手数料の減免がある（電話で申し込み）。持ち込みは手数料が免除", src: "同上" },
    { k: "家電4品目・パソコン", v: "家電リサイクル法の対象品目（テレビ、エアコン、冷蔵庫、冷凍庫、洗濯機、衣類乾燥機）とパソコンは粗大ごみから除く。家電4品目は区では収集せず、購入店に引き取りを依頼する", src: "同上、足立区「家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）、粗大ごみの出し方に注意しましょう」（更新日 2018年3月26日）" },
    { k: "悪質な回収業者", v: "無料のはずが積み込み後に高額請求された例、頼んでいない家財まで持ち出された例、不法投棄の例を挙げ、産業廃棄物処理業の許可や古物商の許可等があっても家庭の不用品を有料で回収するのは違法としている", src: "足立区「家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）、粗大ごみの出し方に注意しましょう」" },
    { k: "自転車", v: "家庭で不用になった自転車は、自転車移送所等で無料で引き取る", src: "足立区「粗大ごみの出し方」" },
  ],
  sections: [
    {
      id: "soudan-madoguchi",
      title: "ごみ屋敷の片付けは、区の相談窓口と業者を並行して考える",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            足立区のごみ屋敷対策は、要支援者への支援に重点を置き、関係機関と連携して取り組むことを特色としています。区の解決事例には、体調を崩して入院中の方の自宅を退院に向けて片付けるため、区が片付け業者の手配と見積もりに協力した例も掲載されています。本人が片付けを望んでいても手立てがない、家族だけでは話が進まないという場合は、業者を探す前に生活環境保全課へ相談すると、福祉や保健の窓口と連携した進め方を案内してもらえる可能性があります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            一方で、片付けの日程や範囲がすでに決まっている場合は、業者の見積もりを先に取り、区の粗大ごみ収集や無料の持ち込みで減らせる分と比べて総額を判断する進め方になります。ごみ屋敷になる背景は<Link href="/gomiyashiki-genin/" className={linkCls}>ゴミ屋敷になる原因</Link>、各自治体の条例と対策窓口は<Link href="/gomiyashiki-jourei/" className={linkCls}>ゴミ屋敷の条例と自治体の対策</Link>、近所のごみ屋敷の相談先は<Link href="/kinjo-gomiyashiki-soudan/" className={linkCls}>近所のゴミ屋敷の相談先</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "muryou-mochikomi",
      title: "年度内20個までの無料持ち込みを組み合わせて費用を抑える",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            足立区の粗大ごみは、収集なら1点400円から2,800円かかりますが、区が指定する場所へ自分で持ち込めば手数料は免除です。一世帯につき年度内合計20個までで、持ち込みにも事前申し込みと本人確認書類が必要です。車を用意でき、荷下ろしを自分でできる品物は持ち込みで先に減らし、運び出しが難しい大型家具や、袋ごみを含めて量の多い片付けを業者に頼むと、総額を抑えやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            区の運び出し収集は、65歳以上の高齢者のみの世帯などで、引っ越しに伴う運び出しや解体が必要な物は原則対象外です。家族が遠方に住んでいて立ち会いや運搬が難しい実家の片付けでは、業者への依頼が中心になります。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、実家の片付け全体の流れは<Link href="/jikka-katazuke/" className={linkCls}>実家の片付けガイド</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区の相談窓口を使うか、業者に直接頼むかを決める", b: "本人の生活や健康の問題が背景にあって片付けが進まない場合は、生活環境保全課への相談を検討します。日程と範囲が決まっている片付けは、業者の見積もりを取りながら、区の収集・無料の持ち込みで出せる分を割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目やパソコンが含まれる場合は、リサイクル料金と運搬費の扱いも確認してください。" },
    { t: "③ 許可と総額の内訳を確認する", b: "足立区は、産業廃棄物処理業や古物商の許可があっても家庭の不用品を有料で回収するのは違法だとしています。見積もりの段階で、家庭ごみの収集運搬を行う許可業者と、作業費・処分費・追加料金の条件を内訳で確認してから依頼を確定します。" },
  ],
  faqs: [
    { q: "自宅がごみ屋敷状態で困っています。足立区に相談できますか？", a: "足立区の環境部 生活環境保全課（電話 03-3880-5410、平日8時30分〜17時15分）が、自宅がごみや荷物であふれて困っている本人からの相談も受け付けています。足立区オンライン申請システムからも相談でき、区は職員が解決までサポートするとしています（2026年11月1日確認）。" },
    { q: "足立区の粗大ごみはいくらかかりますか？", a: "収集の手数料は品目により400円から2,800円までの5段階で、例としてふとん・いすは400円、畳1畳とソファー（2人以上用）は1,200円です。有料シールはA券（200円）とB券（300円）を組み合わせて貼ります。区の指定場所へ持ち込む場合は手数料が免除されます。" },
    { q: "足立区で粗大ごみを無料で持ち込めるのは何個までですか？", a: "一世帯につき年度内合計20個までで、持ち込みの回数に制限はありません。事前に粗大ごみ受付センターへの申し込みが必要で、区民のみが利用でき、本人確認書類の持参が必要です。持込場所は白井運輸（鹿浜、年中無休）と新井商店（北加平町、土日祝のみ）で、いずれも9時から16時です。" },
    { q: "足立区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、足立区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "「無料で回収します」という業者に頼んでもよいですか？", a: "足立区は、無料のはずが積み込み後に高額な料金を請求された例や、頼んでいない家財まで持ち出された例、不法投棄の例を挙げて注意を呼びかけています。産業廃棄物処理業の許可や古物商の許可等があっても家庭の不用品を有料で回収するのは違法としているため、業者に頼む場合は家庭ごみの収集運搬の許可を確認してください。" },
  ],
  matome: [
    "足立区には、条例にもとづくごみ屋敷の相談窓口（生活環境保全課）があり、自宅のごみで困っている本人の相談も受け付けています。粗大ごみは受付センターへの申し込みで、収集は400円から2,800円、指定場所への持ち込みは年度内20個まで無料です。区の窓口・収集・持ち込みで対応できる分と、業者に頼む分を分けて考えるのが足立区での片付けの基本です。",
    "業者に頼む場合は、足立区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が注意を呼びかける回収業者のトラブルを避けるため、家庭ごみの収集運搬の許可と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "足立区のごみ屋敷対策事業", org: "足立区", url: "https://www.city.adachi.tokyo.jp/kankyo-hozen/241024.html", updated: "2026年4月2日" },
    { label: "粗大ごみの出し方", org: "足立区", url: "https://www.city.adachi.tokyo.jp/seso/kurashi/kankyo/gomi-wakekata/sodai.html", updated: "2026年5月12日" },
    { label: "家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）、粗大ごみの出し方に注意しましょう", org: "足立区", url: "https://www.city.adachi.tokyo.jp/gomi/kaden_sodai.html", updated: "2018年3月26日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaAdachiPage() {
  return (
    <AreaCityPage
      d={d}
      otherAreas={
        <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
          <p className="font-bold text-text-primary mb-3">他エリアの業者比較</p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
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
