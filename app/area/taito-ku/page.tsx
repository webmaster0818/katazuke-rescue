import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "台東区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13106/", count: 222 },
  curama: { url: "https://curama.jp/disposal/tokyo/6/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/taito" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "taito-ku",
  name: "台東区",
  title: "台東区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターと生活家電ごみ持込窓口【2026年版】",
  description:
    "台東区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、台東区を対応エリアに含むことを公式で確認して比較。台東区粗大ごみ受付センターの申込方法、手数料、処理券と電子決済、生活家電ごみ持込窓口（手数料は収集の半額）、運び出し、家電4品目・パソコンの出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "台東区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・手数料・電子決済・生活家電ごみ持込窓口・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "台東区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "台東区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["台東区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "台東区の粗大ごみは、台東区粗大ごみ受付センターに電話かインターネットで申し込み、収集日当日の朝8時までに出す方法が基本です。令和8年10月1日からはインターネットで申し込む場合に電子決済（クレジットカード・コード決済）も使えるようになりました。電子レンジや扇風機などの一部の生活家電は、区の「生活家電ごみ持込窓口」に予約して自分で持ち込むと、収集の半額の1個200円で出せます。",
    `本記事では、台東区の公式ページで確認した粗大ごみの申込方法・手数料・支払い・持ち込み・運び出し・家電4品目とパソコンの扱い（${CHECKED}確認）と、台東区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、台東区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      台東区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで台東区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは台東区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に台東区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「台東区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "台東区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      台東区では、家庭から出る家具・電化製品（家電4品目とパソコンを除く）などのうち、おおむねいちばん長い部分が30センチを超える大きなごみが粗大ごみです。細かく分解・裁断しても粗大ごみとなります。事業所から出る30センチを超えるごみは、民間の許可業者に収集を依頼するよう区は案内しています。
    </>
  ),
  facts: [
    { k: "申し込み", v: "台東区粗大ごみ受付センター（電話 03-6747-5111、月曜〜土曜 8時〜19時、年末年始12月29日〜1月3日を除く）。インターネットは24時間受付。台東清掃事務所と清掃リサイクル課では申し込みできない", src: "台東区「粗大ごみの出し方」（更新日 2026年10月1日）" },
    { k: "手数料", v: "令和5年10月1日に改定。区の表の主な品目は、400円（布団、いす、掃除機、扇風機、電子レンジ等）、900円（自転車16インチ以上、ソファー1人用等）、1,300円（ベッドマット、シングルベッド、ソファー2人用等）、2,300円（ソファー3人以上用、ダブルベッド等）、3,200円（両そで机、幅と高さの合計が360センチ以上の箱物家具特大）。箱物家具は大きさで料金が異なる。品目と手数料は粗大ごみ品目一覧（PDF）やチャットボット（写真で調べる機能あり）で確認できる", src: "台東区「令和5年10月1日から粗大ごみ処理手数料が変更になります」（更新日 2026年6月12日）、同「粗大ごみの出し方」" },
    { k: "支払い", v: "有料粗大ごみ処理券（A券200円・B券300円）を「有料ごみ処理券取扱所」の標識のある店か台東清掃事務所で購入する。区内のセブン-イレブン・ローソン・ファミリーマート・デイリーヤマザキ・ミニストップで扱う（一部扱わない店舗あり。区境の店舗では他区の券を販売していることがあるため、台東区の券か確認する）。インターネット申し込みでは令和8年10月1日から電子決済（クレジットカード、PayPay・auPay・d払い）も使え、その場合は処理券が不要で、領収書は発行されない。電話・チャットボットでは電子決済はできない", src: "台東区「有料ごみ処理券」（更新日 2026年3月30日）、同「有料ごみ処理券取扱所」（更新日 2026年10月8日）、同「粗大ごみ処理手数料の電子決済（キャッシュレス決済）がご利用いただけます」（更新日 2026年10月1日）" },
    { k: "持ち込み", v: "生活家電ごみ持込窓口。電子レンジ・トースター・炊飯器・プリンター（高さ20センチ以下）・電気掃除機・扇風機・ビデオデッキなど、区の持込可能品目一覧にある生活家電に限り、事前予約制（電話 03-3866-8361、火曜〜日曜 10時〜17時、電話のみ）で持ち込める。手数料は1個200円（A券1枚）で、収集の半額。区内在住の方（事業者を除く）が対象で、1世帯1回5点まで（同一年度内3回まで）、本人確認書類が必要。持込場所は環境ふれあい館ひまわり（蔵前4丁目14番6号、火曜〜日曜 10時〜16時、自家用車可）と台東清掃事務所北上野分室（北上野1丁目11番6号、不定期、自家用車不可）", src: "台東区「粗大ごみの出し方」（更新日 2026年10月1日）" },
    { k: "運び出し", v: "65歳以上の高齢者のみの世帯、または体に障害があるなどの理由で自ら運び出すことが困難で、近隣の方や身近な方の協力が得られない場合は、台東清掃事務所に相談する。一度に運び出せる個数には制限があり、取り外し工事・解体作業・養生が必要な物は運び出しできない", src: "台東区「粗大ごみの出し方」（更新日 2026年10月1日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫（冷凍庫を含む）・洗濯機・衣類乾燥機は区で収集しない。買い換えや購入店がわかる場合は家電販売店に引き取りを依頼する。自分で運ぶ場合は郵便局でリサイクル料金を払い、指定引取場所（区から近いのは上昇運輸株式会社〈足立区南花畑〉と西濃運輸株式会社 江東指定引取場所〈江東区新木場〉）に持ち込む。購入店が遠方・廃業・不明で収集運搬も頼む場合は家電リサイクル受付センター（0570-08-7200、月曜〜金曜 9時〜17時）に申し込む", src: "台東区「家電リサイクル法対象品目」（更新日 2025年12月23日）" },
    { k: "パソコン", v: "区では粗大ごみとして収集しない。購入したメーカーに回収を申し込み、PCリサイクルマーク付きは無料、それ以外は3,000円から5,000円程度。メーカー不明・倒産・自作の場合はパソコン3R推進協会に申し込む。区の連携・協力事業者リネットジャパンリサイクル株式会社の宅配便回収は、パソコン本体を含めば1箱分の回収料金が無料", src: "台東区「パソコンリサイクル」（更新日 2026年6月25日）、同「パソコン等小型家電の宅配便による回収」（更新日 2025年5月12日）" },
    { k: "不用品回収業者", v: "チラシやインターネット広告、巡回する車で宣伝し、処分を依頼した消費者に不当に高額な料金を請求する業者について注意を呼びかけ。回収された廃棄物が不法投棄されたり不適正に処理されたりする恐れもあるとしている。引越しなどで大量のごみが出る場合は台東清掃事務所（03-3876-5771）に相談する。被害にあった場合は台東区消費生活センター（03-5246-1133）へ", src: "台東区「悪質な廃品回収業者にご注意ください」（更新日 2026年6月12日）" },
  ],
  sections: [
    {
      id: "seikatsukaden-mochikomi",
      title: "生活家電ごみ持込窓口と、収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            台東区の持ち込みは、電子レンジ・炊飯器・扇風機・掃除機・ビデオデッキなど、区の一覧にある生活家電に限られます。手数料は1個200円で、収集で出す場合の半額です。電話での事前予約が必要で、1世帯1回5点まで、同じ年度で3回までという上限があり、家具や寝具などの大型の粗大ごみは持ち込みの対象ではありません。自家用車で持ち込めるのは環境ふれあい館ひまわり（蔵前）です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            小さな生活家電は持ち込み、玄関先や集合住宅の1階まで出せる家具や寝具は収集、室内からの運び出しが難しい物や点数の多い片付けは業者、と分けるのが基本です。区の収集はインターネットで申し込めば電子決済も使えます。まだ使える物は、区が連携している「おいくら」でのリユースや、<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>も検討できます。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、大きさの基準は<Link href="/sodaigomi-size-kijun/" className={linkCls}>粗大ごみのサイズ基準</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "akushitsu-gyousha",
      title: "悪質な廃品回収業者への注意と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            台東区は、東京都消費生活総合センターに不用品回収業者とのトラブルに関する相談が数多く寄せられているとして、「ご家庭の不用品を格安で処分します」といったチラシやインターネット広告、巡回する車で宣伝し、依頼した消費者に不当に高額な料金を請求する業者に注意を呼びかけています。引越しなどで大量のごみが出る場合は、台東清掃事務所に相談するよう案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。区の粗大ごみ収集や家電リサイクルと組み合わせる提案になっているかも判断材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目一覧かチャットボットで、区に出す場合の手数料を調べる", b: "出したい物の品目と点数を書き出し、台東区の粗大ごみ品目一覧やチャットボットで手数料を確かめます。箱物家具は大きさで料金が変わるため、寸法を測っておきます。持込窓口の対象になる生活家電は、持ち込めば1個200円で出せます。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "台東区の粗大ごみはどこに申し込みますか？", a: "台東区粗大ごみ受付センターに、電話（03-6747-5111、月曜〜土曜の8時〜19時、年末年始を除く）またはインターネット（24時間）で申し込みます。台東清掃事務所や清掃リサイクル課では申し込めません。インターネットで申し込む場合は電子決済も使えます（2026年11月1日確認）。" },
    { q: "台東区で粗大ごみを持ち込むことはできますか？", a: "電子レンジや扇風機など、区の持込可能品目一覧にある生活家電に限り、生活家電ごみ持込窓口に持ち込めます。電話（03-3866-8361）での事前予約制で、手数料は1個200円（収集の半額）、1世帯1回5点まで（同一年度内3回まで）です。家具などの大型の粗大ごみは収集で出します。" },
    { q: "台東区の粗大ごみの手数料はいくらですか？", a: "品目ごとに決まっており、区の表では布団や扇風機が400円、ソファー1人用が900円、シングルベッドが1,300円、ダブルベッドが2,300円、両そで机が3,200円などです（令和5年10月1日改定）。箱物家具は大きさで料金が変わります。" },
    { q: "台東区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、台東区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "台東区で粗大ごみを自分で運び出せない場合はどうすればよいですか？", a: "65歳以上の高齢者のみの世帯や、体に障害があるなどの理由で自ら運び出すことが難しく、近隣の方などの協力が得られない場合は、台東清掃事務所に相談します。一度に運び出せる個数には制限があり、取り外し工事や解体作業、養生が必要な物は運び出せません。" },
  ],
  matome: [
    "台東区の粗大ごみは、受付センターに申し込み、処理券（インターネット申し込みなら電子決済も可）で手数料を払って、収集日当日の朝8時までに出します。一部の生活家電は持込窓口に予約して持ち込むと1個200円です。家電4品目とパソコンは区では収集せず、販売店・家電リサイクル受付センター・リネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、台東区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は高額請求をする悪質な業者に注意を呼びかけているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/gomiinfo/sodaigomi/sodaigomi.html", updated: "2026年10月1日" },
    { label: "令和5年10月1日から粗大ごみ処理手数料が変更になります", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/gomiinfo/sodaigomi/sodaikaitei.html", updated: "2026年6月12日" },
    { label: "有料ごみ処理券", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/gomiinfo/sodaigomi/yuryogomishoriken.html", updated: "2026年3月30日" },
    { label: "有料ごみ処理券取扱所", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/gomiinfo/sodaigomi/gomikentoriastukaijo.html", updated: "2026年10月8日" },
    { label: "粗大ごみ処理手数料の電子決済（キャッシュレス決済）がご利用いただけます", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/gomiinfo/sodaigomi/sodaikyassyuresu.html", updated: "2026年10月1日" },
    { label: "家電リサイクル法対象品目", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/syuusyuudekinaimono/taishohinmoku.html", updated: "2025年12月23日" },
    { label: "パソコンリサイクル", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/syuusyuudekinaimono/pcrecycle.html", updated: "2026年6月25日" },
    { label: "パソコン等小型家電の宅配便による回収", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/shigenjoho/takuhaikaisyu.html", updated: "2025年5月12日" },
    { label: "悪質な廃品回収業者にご注意ください", org: "台東区", url: "https://www.city.taito.lg.jp/kurashi/gomi/keikaku/oserase/chui.html", updated: "2026年6月12日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaTaitoPage() {
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
              <Link href="/area/sumida-ku/" className="text-primary underline underline-offset-2">墨田区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
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
              <Link href="/area/toshima-ku/" className="text-primary underline underline-offset-2">豊島区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
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
