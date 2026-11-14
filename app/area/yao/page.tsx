import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "八尾市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-27/city-27212/", count: 145 },
  curama: { url: "https://curama.jp/disposal/osaka/13/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/osaka/yao" },
};

const Y = "https://www.city.yao.osaka.jp/kurashi_tetsuzuki/gomi_recycle";

const d: AreaCityData = {
  slug: "yao",
  name: "八尾市",
  title: "八尾市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは1点400円、臨時ごみは2トン車1台20,000円、リサイクルセンター持ち込み【2026年版】",
  description:
    "八尾市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。粗大ごみ（1点400円・3辺合計3メートル超は800円）、臨時ごみ（2トン収集車1台20,000円）、八尾市立リサイクルセンターへの持ち込み（10kgにつき200円）を公式ページで確認してまとめています。",
  ogDescription:
    "八尾市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの出し方、臨時ごみ、リサイクルセンターへの持ち込み、リサイクル家電の出し方を市の公式ページで確認してまとめています。",
  h1: "八尾市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "八尾市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["八尾市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "八尾市の粗大ごみは電話かインターネットで予約する有料収集で、1点400円（3辺の合計が3メートルを超える物は800円）、1世帯1回8点までです。引っ越しなどで一時的にたくさん出るごみは、電話予約制の「臨時ごみ」（2トン収集車1台につき20,000円・立会いが必要）で収集してもらえます。",
    `本記事では、八尾市の公式ページで確認した粗大ごみの出し方、臨時ごみ、八尾市立リサイクルセンターへの持ち込み、リサイクル家電の扱い（${CHECKED}確認）と、八尾市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、八尾市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      八尾市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに八尾市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に大阪府が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「八尾市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "八尾市の粗大ごみ・臨時ごみ・持ち込み・リサイクル家電（市の公式情報）",
  factsLead: (
    <>
      八尾市の大きなごみは、予約制の有料の粗大ごみ（1点400円から・1回8点まで）として出します。引っ越しなどで一時的にたくさん出るごみは臨時ごみ（有料）、自分で運ぶ場合は八尾市立リサイクルセンターへの持ち込み（予約制・有料）となり、リサイクル家電は粗大ごみでは収集されません。
    </>
  ),
  facts: [
    { k: "粗大ごみ", v: "指定袋に入らない大きなごみ（電化製品（リサイクル家電を除く）、家具類等）。事前の申込みが必要で有料。1点につき400円、3辺（高さ・幅・奥行き）の合計が3メートルを超えるものは1点につき800円（一部の例外品目あり）。1世帯から1回につき8点まで、収集後1ヶ月を経過すると再申込みができる。粗大ごみ処理手数料券を使う", src: "八尾市「粗大ごみの出し方」（更新日 令和7年4月10日）" },
    { k: "申し込み", v: "インターネット予約、または八尾市粗大ごみ受付センター（0800-222-9966、携帯電話・一部のIP電話からは072-923-9966、年末年始を除く月曜〜金曜（祝祭日可）午前9時〜午後5時）。電話での申込みができない方はファクス（072-923-0030）", src: "八尾市「粗大ごみの出し方」（更新日 令和7年4月10日）" },
    { k: "臨時ごみ", v: "引越しなどに伴うごみ・一時的にたくさん出るごみ（リサイクル家電を除く）が対象。電話予約制で、収集運搬料金は定額で2トン収集車1台につき20,000円。住居内からの持ち出しはせず、当日立会いが必要。事業所のものは収集しない。手数料は作業終了後に手渡される納付書で、八尾市収納金融機関の窓口で支払う", src: "八尾市「臨時ごみの出し方」（更新日 令和7年1月30日）、同「ペットの死体引取りやリサイクル家電および臨時ごみの収集に関する手数料の支払方法」（更新日 令和7年2月26日）" },
    { k: "持ち込み", v: "八尾市立リサイクルセンター（曙町2-11）。資源物・複雑ごみ・粗大ごみ（一般家庭のみ）は事前予約制（当日の予約不可）で、月曜・火曜・木曜・金曜（水曜日以外の祝日を含む）の9時〜11時45分・13時〜16時。手数料は10キログラムにつき200円（現金のみ）。ごみを排出する本人（もしくは同一世帯の方）が自家用車で持ち込み、本人確認書類を持参する", src: "八尾市「ごみの持ち込みのご案内」（更新日 令和8年9月1日）" },
    { k: "代理の持ち込み", v: "代理の方による持ち込みはできず、排出者本人（もしくは同一世帯の方）以外が持ち込んだ場合は受付しない。市は、ごみの排出者でない人が市の許可なく他人のごみを収集運搬することは違法行為となると案内", src: "八尾市「ごみの持ち込みのご案内」（更新日 令和8年9月1日）" },
    { k: "持ち込めない物", v: "産業廃棄物、建築廃材、廃油・塗料、オートバイ、スプリング入りマットレス、消火器、バッテリー、タイヤ、手提げ以外の金庫、ピアノ、仏壇・神棚、パソコン、家電リサイクル法対象製品など。リフォームや解体で出るたたみ・ふすま・流し台なども粗大ごみとして持ち込めない", src: "八尾市「ごみの持ち込みのご案内」（更新日 令和8年9月1日）" },
    { k: "リサイクル家電", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・乾燥機は粗大ごみでは収集しない。買い替えや購入店が分かる場合は販売店へ。販売店に引き取ってもらえない場合は、市に収集を依頼する（粗大ごみ受付センター、手数料1台につき2,500円＋リサイクル費用、収集日前日までに郵便局でリサイクル費用を支払う）か、自分で指定引取場所に持ち込む", src: "八尾市「リサイクル家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・乾燥機）の適正処理」（更新日 令和8年4月6日）" },
    { k: "無料回収への注意", v: "市は、廃棄物処理法により家庭から排出される一般廃棄物は市の許可を受けた者しか収集・運搬できず、古物営業や産業廃棄物処理業の許可を持っていても違法行為になると案内。「不用家電等の無料回収」をうたうチラシを配布している者には一切許可をしていないとし、利用しないよう呼びかけている", src: "八尾市「不用家電等の無料回収は利用しないでください」（更新日 令和7年1月30日）" },
    { k: "ごみ出しの支援", v: "ふれあい収集: ごみを自ら集積所まで持ち出すことが困難で、身近な人の協力を得られない一人暮らしの人のうち、要介護1以上、身体障がい者手帳1級・2級などに該当する人を対象に、市の収集担当職員が玄関先等で戸別に収集。75歳以上で要支援1以上の人なども対象に、市の職員が敷地内から粗大ごみを持ち出して収集する「粗大ごみもちだし収集事業」もある（排出のたびに申請が必要）", src: "八尾市「ふれあい収集事業」（更新日 令和7年11月11日）" },
  ],
  sections: [
    {
      id: "rinji-mochikomi",
      title: "八尾市の粗大ごみ・臨時ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            八尾市の粗大ごみは1点400円（3辺の合計が3メートルを超える物は800円）で、1回8点まで、収集後1ヶ月を経過すると再び申し込めます。引っ越しなどで一時的にたくさん出る場合は臨時ごみとして電話で予約し、2トン収集車1台につき20,000円の収集運搬料金を納付書で支払います。臨時ごみは住居内からの持ち出しをしないため、収集車が入れる場所までごみを出しておく段取りが必要です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、八尾市立リサイクルセンターへ事前予約のうえ持ち込む方法もあり、手数料は10キログラムにつき200円です。持ち込みは排出者本人か同一世帯の方に限られ、代理の持ち込みはできません。部屋からの運び出しまで頼みたい場合は、使える物をリユースに回し、粗大ごみの収集や持ち込みで減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "リサイクル家電の市の手数料と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            八尾市は、販売店に引き取ってもらえないリサイクル家電を市が収集する場合の手数料を1台につき2,500円（リサイクル費用は別）と公表しています。また、「不用家電等の無料回収」をうたうチラシについて、市は配布している者に一切許可をしていないと案内しています。片付け業者に家電もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、粗大ごみ・臨時ごみ・持ち込みのどれで出すかを決める", b: "大きなごみを書き出し、1回8点までの粗大ごみで出し切れるかを確かめます。間に合わない分は、臨時ごみ（2トン収集車1台20,000円）、八尾市立リサイクルセンターへの持ち込み（事前予約制）、業者への依頼のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。リサイクル家電が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "八尾市で粗大ごみはいくらかかりますか？", a: "1点につき400円で、3辺（高さ・幅・奥行き）の合計が3メートルを超える物は1点につき800円です（一部の例外品目あり）。インターネットか八尾市粗大ごみ受付センターで予約し、1世帯1回8点まで出せます（2026年11月1日確認）。" },
    { q: "引っ越しや片付けで大量に出たごみを八尾市に収集してもらえますか？", a: "臨時ごみとして有料で収集してもらえます。八尾市粗大ごみ受付センターに電話で予約し、収集運搬料金は2トン収集車1台につき20,000円です。住居内からの持ち出しはなく、当日の立会いが必要です。" },
    { q: "八尾市でごみを自分で持ち込むといくらかかりますか？", a: "八尾市立リサイクルセンター（曙町2-11）への資源物・複雑ごみ・粗大ごみの持ち込みは、10キログラムにつき200円（現金のみ）です。事前予約制で、排出者本人か同一世帯の方が自家用車で持ち込みます。" },
    { q: "八尾市で冷蔵庫や洗濯機を処分するには？", a: "買い替えや購入店が分かる場合は販売店に引き取ってもらいます。販売店に引き取ってもらえない場合は、市に収集を依頼する（1台につき手数料2,500円＋リサイクル費用）か、自分で指定引取場所に持ち込みます。" },
    { q: "関東の記事で見たお助けうさぎは八尾市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、大阪府は含まれていません（2026年11月1日確認）。本記事では、公式ページで八尾市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "八尾市の大きなごみは、予約制の粗大ごみ（1点400円、3辺合計3メートル超は800円、1回8点まで）として出します。引っ越しなどで一時的にたくさん出る場合は臨時ごみ（2トン収集車1台20,000円・立会い）、自分で運べる物は八尾市立リサイクルセンターへの持ち込み（10キログラムにつき200円・事前予約制）、と使い分けるのが基本です。",
    "業者に頼む場合は、八尾市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。リサイクル家電は市が示す手数料も参考に、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "八尾市", url: `${Y}/1003102/1003135/1003137.html`, updated: "令和7年4月10日" },
    { label: "臨時ごみの出し方", org: "八尾市", url: `${Y}/1003102/1003109/1003146.html`, updated: "令和7年1月30日" },
    { label: "ペットの死体引取りやリサイクル家電および臨時ごみの収集に関する手数料の支払方法", org: "八尾市", url: `${Y}/1003102/1003150.html`, updated: "令和7年2月26日" },
    { label: "ごみの持ち込みのご案内", org: "八尾市", url: `${Y}/1003156/1024677.html`, updated: "令和8年9月1日" },
    { label: "リサイクル家電（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・乾燥機）の適正処理", org: "八尾市", url: `${Y}/1003087/1003124.html`, updated: "令和8年4月6日" },
    { label: "不用家電等の無料回収は利用しないでください", org: "八尾市", url: `${Y}/1003102/1003109/1003143.html`, updated: "令和7年1月30日" },
    { label: "ふれあい収集事業", org: "八尾市", url: `${Y}/1003102/1013582/1003145.html`, updated: "令和7年11月11日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（大阪府が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaYaoPage() {
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
              <Link href="/area/sakai/" className="text-primary underline underline-offset-2">堺のゴミ屋敷・不用品の片付け業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌のゴミ屋敷・不用品の片付け業者おすすめ5選</Link>
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
