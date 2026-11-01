import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "中央区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13102/", count: 220 },
  curama: { url: "https://curama.jp/disposal/tokyo/2/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/chuo" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "chuo-ku",
  name: "中央区",
  title: "中央区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみは収集のみで持込制度なし、申込と処理券【2026年版】",
  description:
    "中央区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、中央区を対応エリアに含むことを公式で確認して比較。中央区粗大ごみ受付センターの申込方法、持込制度がない点、有料粗大ごみ処理券、ふれあい収集、大量のごみが出る場合の扱い、家電4品目・パソコンの出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "中央区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・持込制度がない点・ふれあい収集・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "中央区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "中央区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["中央区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "中央区の粗大ごみは、中央区粗大ごみ受付センターに申し込み、有料粗大ごみ処理券を貼って収集日の朝8時までに出す方法で処分します。区は粗大ごみの持込制度はないと案内しており、マンションにお住まいの場合は1階部分の収集しやすい場所まで自分で出す必要があります。引っ越しや自宅整理で一度に大量のごみが出る場合は、1日あたり10kgを超える家庭ごみは有料で、清掃事務所と協議して収集日を決める扱いです。",
    `本記事では、中央区の公式ページで確認した粗大ごみの申込方法・処理券・持ち込み・ふれあい収集・大量のごみの扱い・家電4品目とパソコンの扱い（${CHECKED}確認）と、中央区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、中央区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      中央区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで中央区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは中央区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に中央区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「中央区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "中央区の粗大ごみ・ふれあい収集・家電4品目（区の公式情報）",
  factsLead: (
    <>
      中央区では、家庭から出る家具や電化製品などで一辺の長さが最長30cmを超えるものが粗大ごみです（解体しても粗大ごみ）。事前に中央区粗大ごみ受付センターへ申し込み、有料粗大ごみ処理券を貼って出します。事業系の粗大ごみは区では収集できません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "中央区粗大ごみ受付センター。インターネットと粗大ごみ専用チャットボットのほか、電話（03-6833-2525、月曜〜土曜 8時〜19時）。令和6年3月2日から申込先が変わっている。年末年始・3月下旬・月曜日や祝日の翌日は電話が集中する。インターネットやチャットボットで申し込むと、収集日前日メールと収集完了メールが届く", src: "中央区「粗大ごみの出し方」（掲載日 2026年10月9日）" },
    { k: "手数料", v: "品物によって異なり、申し込みの際に確認する（受付センターのホームページや区の手数料表でも確認できる）。令和5年10月1日に改定され、たとえば800円→900円、1,600円→1,800円、2,400円→2,700円、2,800円→3,200円になった（200円・400円・600円は変更なし）。区の一覧表では、窓に取り付けるウインドファン（ウインドエアコン）は600円", src: "中央区「粗大ごみの出し方」、同「ごみの分け方・出し方一覧表-え-」（掲載日 2026年7月21日）" },
    { k: "支払いと出し方", v: "区内の主なコンビニエンスストアや小売店（ごみ処理券取扱所ステッカーのある店）、中央清掃事務所で、中央区の有料粗大ごみ処理券（A券200円・B券300円）を購入する。他区との境の販売店では「中央区」の処理券であることを伝える。「収集予定日」「氏名または受付番号」を記入して貼り、収集日の午前8時までに玄関先や敷地の入口など、マンションは1階部分の収集しやすい場所に出す", src: "中央区「粗大ごみの出し方」、同「有料粗大ごみ処理券はどこで購入したらよいですか。」（掲載日 2023年1月18日）" },
    { k: "持ち込み", v: "持込制度はない。区は年末年始を除く月曜日から土曜日まで、収集予約された粗大ごみを収集している", src: "中央区「粗大ごみを自分で持ち込めますか。」（掲載日 2023年1月18日）" },
    { k: "ふれあい収集", v: "粗大ごみを自ら持ち出すことが困難で、身近な人の協力が得られない障害のある方や65歳以上の高齢者のみの世帯を対象に、収集作業員が室内から運び出して収集する。事前の申し込みが必要で、中央清掃事務所に問い合わせる", src: "中央区「高齢者なので(障害があるので)粗大ごみを運び出せないのですが、どうすればいいですか。」（掲載日 2023年1月18日）、同「ごみ出しで困ったら・よくある質問について」（掲載日 2023年1月18日）" },
    { k: "大量のごみ", v: "引越し準備や自宅整理で家庭から大量のごみが出た場合、1日あたり10kgを超える量の家庭ごみはすべて有料。ごみの出し方等を清掃事務所と協議のうえ収集日を決めて収集し、収集希望日まで時間的余裕がない場合は希望に添えないことがある", src: "中央区「引越し準備や自宅整理で家庭から大量のごみが出た場合の処理を教えてください。」（掲載日 2023年1月18日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機は家電リサイクル法によりリサイクルされるので、粗大ごみでは出せない。詳細は家電リサイクル受付センター（0570-087200）に問い合わせる", src: "中央区「ごみの分け方・出し方一覧表」（-え-：掲載日 2026年7月21日、-て-・-せ-・-れ-：掲載日 2026年7月22日）" },
    { k: "パソコン", v: "連携・協力事業者のリネットジャパンリサイクルによる宅配便回収（パソコンが含まれていれば1箱分の回収料金 税込1,650円が無料）、またはメーカーによる回収（メーカーがない場合はパソコン3R推進協会）。PCリサイクルマークの付いていないパソコンは回収再資源化料金が必要", src: "中央区「パソコンリサイクル」（掲載日 2023年1月18日）" },
  ],
  sections: [
    {
      id: "shushu-nomi",
      title: "中央区は粗大ごみの持込制度なし。収集と業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            中央区には粗大ごみの持込制度がなく、区の仕組みで出す場合は、受付センターに申し込み、収集日の午前8時までに玄関先や敷地の入口、マンションなら1階部分の収集しやすい場所に出す形になります。屋外まで出すのは原則として自分で行うため、高層階からの大型家具の搬出や、点数の多い片付けでは負担が大きくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            障害のある方や65歳以上の高齢者のみの世帯で運び出しが難しい場合は、区のふれあい収集を中央清掃事務所に相談できます。引っ越しや自宅整理で大量のごみが出る場合、区は1日あたり10kgを超える家庭ごみを有料とし、清掃事務所と協議して収集日を決めるとしているため、日程が迫っているときは業者との組み合わせも検討してください。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "reuse-gyousha",
      title: "区が勧めるリユースと、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            中央区は、まだ使える物は粗大ごみとして出す前にリユースするよう呼びかけ、区の不用品交換システムのほか、協定を結んだ事業者の買取一括見積もりサービスや地域の掲示板サイトを紹介しています（これらの事業者のサービスを利用した際のトラブルについて、区は責任を負わないとしています）。売れる物・譲れる物を先に分けておくと、区に出す点数も業者の見積もりも減らせます。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、買い取ってもらう物と処分する物を見積もりの段階で分けて示してもらい、処分する物の収集運搬をどの許可業者が行うかを確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 売れる物・譲れる物を先に分ける", b: "家具や家電のうちまだ使える物は、買取の査定や区の不用品交換システムなどのリユースに回せないかを先に確かめます。" },
    { t: "② 区の収集で出す物と、業者に頼む物を分ける", b: "自分で1階や玄関先まで出せる物は受付センターに申し込んで収集してもらい、運び出しが難しい大型家具や量の多い片付け、家電4品目は業者や家電リサイクルの窓口に回します。" },
    { t: "③ 写真と品目リストで複数社に見積もりを取り、内訳と許可を確認する", b: "部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を同じ条件で伝え、買取と処分を分けた内訳、処分分の収集運搬を行う許可業者、追加料金の条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "中央区の粗大ごみはどこに申し込みますか？", a: "中央区粗大ごみ受付センターに、インターネット、粗大ごみ専用チャットボット、電話（03-6833-2525、月曜〜土曜の8時〜19時）で申し込みます。申し込み後に中央区の有料粗大ごみ処理券を購入し、収集予定日と氏名または受付番号を記入して貼ります（2026年11月1日確認）。" },
    { q: "中央区で粗大ごみを自分で持ち込めますか？", a: "中央区は持込制度はないと案内しています。区は年末年始を除く月曜日から土曜日まで、収集予約された粗大ごみを収集しています。" },
    { q: "引っ越しで大量のごみが出る場合はどうなりますか？", a: "中央区の案内では、1日あたり10kgを超える量の家庭ごみはすべて有料で、ごみの出し方等を清掃事務所と協議のうえ収集日を決めて収集します。収集希望日まで時間的余裕がない場合は希望に添えないことがあるため、早めに中央清掃事務所に相談してください。" },
    { q: "中央区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、中央区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "高齢で粗大ごみを運び出せない場合はどうすればよいですか？", a: "障害のある方や65歳以上の高齢者のみの世帯で、自ら持ち出すことが困難で身近な人の協力が得られない場合は、収集作業員が室内から運び出して収集するふれあい収集があります。事前の申し込みが必要なため、中央清掃事務所に問い合わせてください。" },
  ],
  matome: [
    "中央区の粗大ごみは、受付センター（インターネット・チャットボット・電話）に申し込んで収集してもらう方法のみで、持込制度はありません。収集日の午前8時までに玄関先やマンションの1階部分まで自分で出す必要があり、家電4品目とパソコンは粗大ごみでは出せません。大量のごみは1日10kgを超える分が有料で、清掃事務所との協議が必要です。",
    "業者に頼む場合は、中央区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が勧めるリユースで先に点数を減らし、買取と処分を分けた内訳と収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方（掲載日 2026年10月9日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/kurashi/gomi/bunbetsu/wakekata/sodaigominodasikata.html" },
    { label: "粗大ごみを自分で持ち込めますか。（掲載日 2023年1月18日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/faq/kurashi/gomi/sodaigomi/0002.html" },
    { label: "高齢者なので(障害があるので)粗大ごみを運び出せないのですが、どうすればいいですか。（掲載日 2023年1月18日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/faq/kurashi/gomi/sodaigomi/0004.html" },
    { label: "有料粗大ごみ処理券はどこで購入したらよいですか。（掲載日 2023年1月18日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/faq/kurashi/gomi/sodaigomi/0006.html" },
    { label: "ごみ出しで困ったら・よくある質問について（掲載日 2023年1月18日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/kurashi/gomi/bunbetsu/gomidasidekomattara.html" },
    { label: "引越し準備や自宅整理で家庭から大量のごみが出た場合の処理を教えてください。（掲載日 2023年1月18日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/faq/kurashi/gomi/bunbetsu/0010.html" },
    { label: "ごみの分け方・出し方一覧表-え-（掲載日 2026年7月21日）", org: "中央区", url: "https://www.city.chuo.lg.jp/kurashi/gomi/bunbetsu/wakekata/ichiran/agyou/e.html" },
    { label: "ごみの分け方・出し方一覧表-て-（掲載日 2026年7月22日）", org: "中央区", url: "https://www.city.chuo.lg.jp/kurashi/gomi/bunbetsu/wakekata/ichiran/tagyou/te.html" },
    { label: "ごみの分け方・出し方一覧表-せ-（掲載日 2026年7月22日）", org: "中央区", url: "https://www.city.chuo.lg.jp/kurashi/gomi/bunbetsu/wakekata/ichiran/sagyou/se.html" },
    { label: "ごみの分け方・出し方一覧表-れ-（掲載日 2026年7月22日）", org: "中央区", url: "https://www.city.chuo.lg.jp/kurashi/gomi/bunbetsu/wakekata/ichiran/ragyou/re.html" },
    { label: "パソコンリサイクル（掲載日 2023年1月18日）", org: "中央区", url: "https://www.city.chuo.lg.jp/a0039/kurashi/gomi/bunbetsu/wakekata/pasocon.html" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaChuoPage() {
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
              <Link href="/area/taito-ku/" className="text-primary underline underline-offset-2">台東区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
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
