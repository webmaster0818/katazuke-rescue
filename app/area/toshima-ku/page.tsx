import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "豊島区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13116/", count: 221 },
  curama: { url: "https://curama.jp/disposal/tokyo/16/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/toshima" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "toshima-ku",
  name: "豊島区",
  title: "豊島区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターの申込・地区別の収集曜日と手数料【2026年版】",
  description:
    "豊島区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を比較。粗大ごみ受付センターの申込方法、地区別の収集曜日と日曜収集、品目別の手数料、減免、運び出し、家電4品目・パソコンの出し方を公式ページで確認してまとめています。",
  ogDescription:
    "豊島区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・収集曜日・手数料・減免・運び出し・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "豊島区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "豊島区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["豊島区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "豊島区の粗大ごみは有料・事前申し込み制で、豊島区粗大ごみ受付センターにインターネットか電話で申し込み、区の有料粗大ごみ処理券を貼って、収集日の朝8時までに申し込み時に確認した場所へ出します。収集は地区ごとに月・水・金曜日か火・木・土曜日で、日曜日は全地域が対象です。区による室内からの運び出しは65歳以上の方や障害者のみの世帯で手伝える方がいない場合に限られ、引っ越しやリフォーム、一度に大量に出すとき、緊急のときは区では対応できないと案内されているため、そうした片付けは業者の利用を検討する場面になります。",
    `本記事では、豊島区の公式ページで確認した粗大ごみの申込方法・手数料・収集曜日・減免・運び出し・家電4品目とパソコンの扱い（${CHECKED}確認）と、豊島区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、豊島区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      豊島区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで豊島区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは豊島区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に豊島区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「豊島区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "豊島区の粗大ごみ・収集曜日・家電4品目（区の公式情報）",
  factsLead: (
    <>
      豊島区では、一辺が30センチメートルを超えるものが粗大ごみで、解体・分解した場合も粗大ごみの扱いです。粗大ごみは有料・事前申し込み制で、テレビ・エアコン・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機・パソコンは粗大ごみとして収集しません。事業活動で生じた粗大ごみも区では扱っていません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "豊島区粗大ごみ受付センター。インターネットは24時間受付、電話（03-6633-2211）は月曜〜土曜の8時〜19時（年末年始を除く）。日曜日の収集などの希望は受付時に伝える。休日明け・年末年始・引っ越しシーズンなどは電話がつながりにくいことがある", src: "豊島区「粗大ごみの出し方」（更新日 2026年9月29日）" },
    { k: "手数料の例", v: "品目ごとに設定され、令和5年10月1日に改定。区の品目一覧表（令和8年4月更新）では、布団・扇風機400円、自転車（16インチ以上）900円、ソファー（一人用）900円、シングルベッド（ベッドマットを除く）・ベッドマット（シングル）各1,300円、ソファー（二人用以上）2,300円。品目が見当たらない場合は受付センターに問い合わせる", src: "豊島区「粗大ごみ処理手数料（料金）」（更新日 2026年4月13日）、同「粗大ごみ品目一覧表」（令和8年4月更新）" },
    { k: "支払い", v: "区内の販売協力店・コンビニエンスストア等で、豊島区と書かれた有料粗大ごみ処理券（A券200円・B券300円）を購入し、金額に合わせて組み合わせて貼る。券には氏名（集合住宅は部屋番号も）または受付番号の下4ケタを記入する", src: "豊島区「粗大ごみの出し方」、同「豊島区有料ごみ処理券取扱所」（更新日 2026年7月22日）" },
    { k: "収集曜日", v: "月曜・水曜・金曜は駒込・巣鴨・西巣鴨・北大塚・南大塚・東池袋・南池袋・雑司が谷・高田・目白1〜2丁目、火曜・木曜・土曜は上池袋・西池袋・池袋・池袋本町・目白3〜5丁目・南長崎・長崎・千早・要町・高松・千川。日曜は全地域。収集日の午前8時までに申し込み時に確認した場所に出す", src: "豊島区「粗大ごみの出し方」" },
    { k: "減額・免除", v: "生活保護・児童扶養手当・特別児童扶養手当・国民年金の遺族基礎年金（昭和61年3月31日現在、旧母子・準母子福祉年金を受けていた方に限る）・老齢福祉年金の受給者、天災その他大規模災害や火災等の災害を受けた方、中国残留邦人等支援給付の受給者が対象。インターネットでは申し込めず、受付センターに電話で申し込む", src: "豊島区「粗大ごみの出し方」" },
    { k: "運び出し", v: "65歳以上の高齢者もしくは障害者のみの世帯で、家族や手伝える方がいない場合に限って実施。豊島清掃事務所（03-3984-9681）に問い合わせる（受付センターでは受け付けない）。引っ越しやリフォーム、一度に大量に出すとき、緊急に対応しなければならないときは区では対応できない", src: "豊島区「粗大ごみの出し方」" },
    { k: "リユース", v: "区は株式会社マーケットエンタープライズ（おいくら）、株式会社ジモティーと連携協定を結び、粗大ごみとして出す前のリユースを勧めている。粗大ごみの中から再利用できる家具類を豊島リサイクルセンターで無料提供しており、再利用を希望しない場合は処理券の余白に「再利用不可」と記入する", src: "豊島区「粗大ごみの出し方」" },
    { k: "家電4品目", v: "テレビ・エアコン・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。購入した、または買い替える小売店に問い合わせる。小売店が不明な場合は家電リサイクル受付センター（0570-087200、月曜日〜金曜日の9時〜17時）に申し込む。メーカーの指定引取場所（近隣は東亜物流 板橋営業所、板橋区舟渡1-17-2）に自分で持ち込むこともできる", src: "豊島区「家電（テレビ、エアコン、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）」（更新日 2026年3月16日）" },
    { k: "パソコン", v: "区の連携・協力事業者であるリネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含めば1箱分無料、3辺合計140cm以内・20kg以下）、または各メーカーに申し込む。自作パソコンなどはパソコン3R推進協会が有償で回収する", src: "豊島区「パソコン」（更新日 2026年8月13日）" },
    { k: "区では収集できないもの", v: "ガスボンベ・石油類・塗料・バッテリーなど有害性・危険性・引火性のあるもの、自動車・オートバイ・タイヤ、消火器・金庫・ピアノ、石・土・ブロックなどは、購入した販売店などに問い合わせる", src: "豊島区「区では収集できないもの」（更新日 2026年1月6日）" },
  ],
  sections: [
    {
      id: "shushu-tsukaiwake",
      title: "地区別の収集曜日と、区の収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            豊島区の粗大ごみは、地区ごとに月・水・金曜日か火・木・土曜日に収集され、日曜日は全地域が収集の対象です。日曜日の収集を希望する場合は、申し込みの際に伝えます。手数料は品目ごとに決まっており、区の品目一覧表では布団や扇風機が400円、一人用ソファーが900円、二人用以上のソファーが2,300円です。処理券は豊島区と書かれたものを購入してください。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            区の運び出しは65歳以上の方や障害者のみの世帯で、手伝える方がいない場合に限られ、引っ越しやリフォーム、一度に大量に出すとき、緊急のときは区では対応できないと案内されています。玄関先や集合住宅の指定場所まで出せる物は区の収集、室内からの運び出しが難しい物や点数の多い片付け、日程の決まった退去は業者、と分けるのが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>でまとめています。
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
            豊島区は、粗大ごみとして出す前に、連携協定を結んだ「おいくら」での売却や「ジモティー」での譲渡によるリユースを検討するよう案内しています。どちらも区が運営するサービスではなく、利用時のトラブルについて区は責任を負わないと明記されています。収集した粗大ごみのうち再利用できる家具類は、豊島リサイクルセンターで無料提供されています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目一覧表で、区に出す場合の手数料を調べる", b: "出したい物の品目と点数を書き出し、豊島区の粗大ごみ品目一覧表で手数料を確かめます。箱物家具は大きさで料金が変わるため、寸法を測っておきます。まだ使える物は、区が連携するリユースサービスの利用も検討します。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "豊島区の粗大ごみはどこに申し込みますか？", a: "豊島区粗大ごみ受付センターに、インターネット（24時間）または電話（03-6633-2211、月曜〜土曜の8時〜19時、年末年始を除く）で申し込みます。手数料分の豊島区の有料粗大ごみ処理券を区内の販売協力店やコンビニエンスストアで購入して貼ります（2026年11月1日確認）。" },
    { q: "豊島区の粗大ごみは何曜日に収集されますか？", a: "地区ごとに、月・水・金曜日（駒込、巣鴨、東池袋、南池袋など）か火・木・土曜日（上池袋、西池袋、池袋、長崎など）に収集され、日曜日は全地域が対象です。日曜日の収集を希望する場合は申し込みの際に伝えます。" },
    { q: "豊島区で粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "生活保護・児童扶養手当・特別児童扶養手当・老齢福祉年金などの受給者、天災や火災等の災害を受けた方、中国残留邦人等支援給付の受給者が対象です。インターネットでは申し込めないため、粗大ごみ受付センターに電話で申し込みます。" },
    { q: "豊島区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、豊島区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "豊島区で粗大ごみを室内から運び出してもらえますか？", a: "65歳以上の高齢者もしくは障害者のみの世帯で、家族や手伝える方がいない場合に限って区が運び出しを行います。申し込みは粗大ごみ受付センターではなく、豊島清掃事務所（03-3984-9681）です。引っ越しやリフォーム、一度に大量に出すとき、緊急に対応しなければならないときは区では対応できないと案内されているため、その場合は業者の見積もりを取って検討してください。" },
  ],
  matome: [
    "豊島区の粗大ごみは、受付センターへの事前申し込みのうえ、豊島区の処理券を貼って収集日の朝8時までに出します。収集は地区別の曜日に加えて日曜日も全地域が対象です。家電4品目とパソコンは区では収集せず、小売店・家電リサイクル受付センター・リネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、豊島区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。処分する物の扱いと追加料金の条件は、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "豊島区", url: "https://www.city.toshima.lg.jp/150/kurashi/gomi/shigen/009383.html", updated: "2026年9月29日" },
    { label: "粗大ごみ処理手数料（料金）", org: "豊島区", url: "https://www.city.toshima.lg.jp/151/2012181541.html", updated: "2026年4月13日" },
    { label: "粗大ごみ品目一覧表（PDF、令和8年4月更新）", org: "豊島区", url: "https://www.city.toshima.lg.jp/documents/33533/20260409091637.pdf" },
    { label: "豊島区有料ごみ処理券取扱所", org: "豊島区", url: "https://www.city.toshima.lg.jp/151/kurashi/gomi/shigen/003060.html", updated: "2026年7月22日" },
    { label: "家電（テレビ、エアコン、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）", org: "豊島区", url: "https://www.city.toshima.lg.jp/151/kurashi/gomi/kaden/021091.html", updated: "2026年3月16日" },
    { label: "パソコン", org: "豊島区", url: "https://www.city.toshima.lg.jp/150/kurashi/gomi/shigen/2210241441.html", updated: "2026年8月13日" },
    { label: "区では収集できないもの", org: "豊島区", url: "https://www.city.toshima.lg.jp/151/kurashi/gomi/shigen/009730.html", updated: "2026年1月6日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaToshimaPage() {
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
