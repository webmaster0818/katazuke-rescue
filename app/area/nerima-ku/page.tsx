import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "練馬区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13120/", count: 223 },
  curama: { url: "https://curama.jp/disposal/tokyo/20/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/nerima" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "nerima-ku",
  name: "練馬区",
  title: "練馬区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみの申込・資源循環センターへの持ち込み【2026年版】",
  description:
    "練馬区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、練馬区を対応エリアに含むことを公式で確認して比較。練馬区粗大ごみ受付センターの申込方法、オンライン決済、練馬区資源循環センターへの持ち込み（1回15個・年度内3回まで）、減免制度、家電4品目の区内中間集積所を区の公式ページで確認してまとめています。",
  ogDescription:
    "練馬区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・資源循環センターへの持ち込み・減免制度・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "練馬区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "練馬区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["練馬区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "練馬区の粗大ごみは、自宅前からの収集と、谷原の練馬区資源循環センターへの持ち込みの二つの出し方があり、どちらも練馬区粗大ごみ受付センターへの事前申し込みが必要です。持ち込みは土日祝日も利用できますが、1回15個まで、一世帯あたり年度内3回までという上限があります。通常のごみの収集に一度に出せるのは45リットルの袋で3袋までとされており、部屋の片付けで出る大量のごみは別の扱いになる点にも注意が必要です。",
    `本記事では、練馬区の公式ページで確認した粗大ごみの申込方法・支払い・持ち込み・減免・家電4品目の扱い（${CHECKED}確認）と、練馬区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、練馬区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      練馬区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで練馬区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは練馬区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に練馬区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「練馬区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "練馬区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      練馬区では、原則としておおむね30センチメートル角を超えるものが粗大ごみで、分解・切断した場合も粗大ごみとして扱われます。収集も持ち込みも有料・事前申込制で、申し込み先は練馬区粗大ごみ受付センターです。
    </>
  ),
  facts: [
    { k: "申し込み", v: "練馬区粗大ごみ受付センター。インターネットは24時間受付、電話は 03-5703-5399（自動音声応答。月曜〜土曜の8時〜19時、日曜と12月29日〜1月3日を除く）。収集・持ち込みのどちらも申し込みが必要で、料金は申し込み時に案内される。事業として使用したものは出せない", src: "練馬区「粗大ごみ（有料・申込制）・料金検索」（更新日 2026年9月14日）、同「粗大ごみ処理手数料の減免について」（更新日 2026年9月9日）" },
    { k: "手数料の調べ方", v: "品目ごとの手数料は区のページから入れる料金検索（粗大ごみ受付センターのサイト）で確認でき、申し込み時にも案内される。申し込みをしてから手数料を支払う", src: "練馬区「粗大ごみ（有料・申込制）・料金検索」" },
    { k: "支払い", v: "練馬区の有料粗大ごみ処理券（A券200円・B券300円）を区内のコンビニエンスストア、練馬清掃事務所、石神井清掃事務所などで購入して貼る。インターネットで収集を申し込む場合はオンライン決済（クレジットカード・PayPay）も使え、処理券の代わりに任意の紙に収集日と受付番号下5桁を書いて貼る。持ち込みはオンライン決済の対象外", src: "練馬区「粗大ごみ（有料・申込制）・料金検索」" },
    { k: "持ち込み", v: "練馬区資源循環センター（谷原1丁目2番20号）。申し込み時に指定した日時（土・日・祝日も可、9時〜11時、14時〜16時）に、処理券を貼って持ち込む。1回15個まで、一世帯あたり年度内3回まで。本人確認書類が必要で、申し込んだ本人か同一世帯の方のみ。車両は自家用車かレンタカー（2トン車まで）に限る", src: "練馬区「粗大ごみ（有料・申込制）・料金検索」" },
    { k: "運び出し制度", v: "65歳以上のみの世帯、身体に障害のある方のみの世帯が対象（要件あり）。〒176・179地域は練馬清掃事務所（03-3992-7141）、〒177・178地域は石神井清掃事務所（03-3928-1353）に問い合わせる。引っ越しに伴う運び出しは対象外", src: "練馬区「粗大ごみ（有料・申込制）・料金検索」" },
    { k: "減免制度", v: "生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付、老齢福祉年金の受給者が対象。インターネットでは受け付けず、電話で減免対象である旨を伝えて申し込む（老齢福祉年金の受給者は管轄の清掃事務所）。受給を証明する書類が必要", src: "練馬区「粗大ごみ処理手数料の減免について」（更新日 2026年9月9日）" },
    { k: "大量のごみ", v: "通常の収集に1回で出せるのは45リットルの袋で3袋、木の枝は3束まで。引っ越しや部屋の片付けなどでそれを超える量を出す場合は有料となり、管轄の清掃事務所に相談する", src: "練馬区「大量のごみを出す場合」（更新日 2017年12月13日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区では収集しない。購入店・買い替え店に引き取りを依頼するか、家電リサイクル受付センター（0570-087200、インターネットは24時間）に申し込む。自分で運べる場合は区内の中間集積所（成増興業株式会社・北町、大洋運輸株式会社・大泉町）に持ち込むと、引き取りを依頼するより割安になる", src: "練馬区「エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機」（更新日 2026年3月26日）" },
    { k: "パソコン", v: "区では収集しない。各メーカーに回収を申し込むか、区と協定を結ぶリネットジャパンリサイクル株式会社の宅配便回収（一定の条件のもと無料）を使う。メーカーが不明な場合はパソコン3R推進協会に確認する", src: "練馬区「家庭用パソコン」（更新日 2024年6月6日）" },
    { k: "悪質な業者", v: "チラシなどで粗大ごみの処分をうたって高額な処理費用を請求したり、無料で引き取るといいながら処理費用を請求したりする業者がいるとして、決められた処理方法を使うよう呼びかけている", src: "練馬区「粗大ごみ（有料・申込制）・料金検索」" },
  ],
  sections: [
    {
      id: "mochikomi-tairyo",
      title: "練馬区で片付けごみを出すときの上限と、業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            練馬区資源循環センターへの持ち込みは、土日祝日にも利用でき、自家用車やレンタカー（2トン車まで）で運べる人には使いやすい方法です。ただし1回15個まで、一世帯あたり年度内3回までと上限が決まっているため、家一軒分の家具をすべて持ち込みで済ませることはできません。粗大ごみ以外の袋ごみも、通常の収集に一度に出せるのは45リットルの袋で3袋までで、それを超える量は清掃事務所への相談が必要になります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付けの物量が多いときは、区の収集と持ち込みで出せる分を先に計画し、上限を超える分や運び出しが難しい大型家具を業者に頼む組み合わせが現実的です。年末や引っ越しの時期は申し込みが集中すると区が案内しているため、退去日などの期限がある場合は早めに受付センターに申し込んでおきましょう。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、自分で運ぶ場合の準備は<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-akushitsu",
      title: "家電4品目の出し方と、区が注意を呼びかける業者",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区の粗大ごみには出せません。購入店や家電リサイクル受付センターに引き取りを頼む方法のほか、練馬区には北町と大泉町に中間集積所があり、自分で持ち込めば引き取りを依頼するより割安になると区は案内しています。片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と収集運搬料金が見積もりにどう含まれているかを確認してください。詳しくは<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル品目の処分</Link>で解説しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            練馬区は、チラシなどで粗大ごみの処分をうたい、高額な処理費用を請求したり、無料といいながら費用を請求したりする業者に注意するよう呼びかけています。業者に頼む場合は、買い取る物と処分する物を分けた内訳を書面で受け取り、処分する物の収集運搬をどの許可業者が行うかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区で出せる分と、上限を超える分を数える", b: "粗大ごみの品目と点数、袋ごみのおおよその量を書き出します。持ち込みは1回15個・年度内3回まで、袋ごみは1回3袋までが目安のため、それを超える分と運び出しが難しい物を業者に頼む候補にします。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝え、総額と追加料金の条件を比べます。" },
    { t: "③ 家電4品目と処分品の扱いを見積書で確かめる", b: "家電4品目のリサイクル料金と収集運搬料金、買取できる物と処分する物の内訳、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無を作業前に確認します。" },
  ],
  faqs: [
    { q: "練馬区の粗大ごみはどこに申し込みますか？", a: "練馬区粗大ごみ受付センターに、インターネット（24時間）か電話（03-5703-5399、月曜〜土曜の8時〜19時）で申し込みます。収集も持ち込みも事前の申し込みが必要で、料金は申し込み時に案内されます（2026年11月1日確認）。" },
    { q: "練馬区で粗大ごみを持ち込む場合の条件は？", a: "練馬区資源循環センター（谷原1丁目）に、申し込み時に指定した日時（土・日・祝日も可、9時〜11時、14時〜16時）に持ち込みます。1回15個まで、一世帯あたり年度内3回までで、本人確認書類が必要です。車両は自家用車かレンタカー（2トン車まで）に限られます。" },
    { q: "練馬区の粗大ごみはキャッシュレスで払えますか？", a: "インターネットで収集を申し込む場合は、クレジットカードかPayPayのオンライン決済が使えます。この場合は処理券を買わず、任意の紙に収集日と受付番号下5桁を書いて貼ります。持ち込みの場合はオンライン決済を使えず、有料粗大ごみ処理券を貼って持ち込みます。" },
    { q: "練馬区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、練馬区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "練馬区では、生活保護、児童扶養手当、特別児童扶養手当、中国残留邦人等支援給付、老齢福祉年金の受給者が対象です。インターネットでは受け付けておらず、電話で減免対象である旨を伝えて申し込みます。受給を証明する書類が必要です。" },
  ],
  matome: [
    "練馬区の粗大ごみは、受付センターへの事前申し込みのうえ、自宅前での収集か練馬区資源循環センターへの持ち込みで出します。持ち込みは1回15個・年度内3回まで、袋ごみは1回3袋までが目安のため、片付けで物量が多い場合や運び出しが難しい大型品は業者との組み合わせが基本です。",
    "業者に頼む場合は、練馬区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が注意を呼びかける業者とのトラブルを避けるため、買取と処分を分けた内訳と収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ（有料・申込制）・料金検索", org: "練馬区", url: "https://www.city.nerima.tokyo.jp/kurashi/gomi/wakekata/sodai.html", updated: "2026年9月14日" },
    { label: "粗大ごみ処理手数料の減免について", org: "練馬区", url: "https://www.city.nerima.tokyo.jp/kurashi/gomi/oshirase/sodai_genmen.html", updated: "2026年9月9日" },
    { label: "大量のごみを出す場合", org: "練馬区", url: "https://www.city.nerima.tokyo.jp/kurashi/gomi/wakekata/tairyo.html", updated: "2017年12月13日" },
    { label: "エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機", org: "練馬区", url: "https://www.city.nerima.tokyo.jp/kurashi/gomi/wakekata/recycle.html", updated: "2026年3月26日" },
    { label: "家庭用パソコン", org: "練馬区", url: "https://www.city.nerima.tokyo.jp/kurashi/gomi/wakekata/paso.html", updated: "2024年6月6日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaNerimaPage() {
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
