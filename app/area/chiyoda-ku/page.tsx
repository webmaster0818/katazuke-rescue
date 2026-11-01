import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "千代田区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13101/", count: 222 },
  curama: { url: "https://curama.jp/disposal/tokyo/1/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/chiyoda" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "chiyoda-ku",
  name: "千代田区",
  title: "千代田区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターの申込・1度に10点まで・ふれあい収集【2026年版】",
  description:
    "千代田区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、千代田区を対応エリアに含むことを公式で確認して比較。粗大ごみ受付センターの申込方法、1度に出せるのは10点までという区の決まり、手数料の例、ふれあい収集、手数料の免除、家電4品目・パソコンの出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "千代田区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・1度に10点までの決まり・ふれあい収集・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "千代田区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "千代田区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["千代田区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "千代田区の粗大ごみは、粗大ごみ受付センターへの事前申し込みが必要な有料の収集です。対象は区民が家庭で不用となった家具・寝具など、おおむね30cm以上で長さ2m以下の物で、1度に出せるのは10点までと区は案内しています。申し込み後に千代田区有料粗大ごみ処理券を貼り、一戸建ては自宅前、マンションはマンション指定の場所に出します。家一軒分の片付けのように点数が多い場合や、室内からの運び出しが難しい場合は、区の収集と業者を組み合わせることになります。",
    `本記事では、千代田区の公式ページで確認した粗大ごみの申込方法・手数料・ふれあい収集・手数料の免除・家電4品目とパソコンの扱い（${CHECKED}確認）と、千代田区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、千代田区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      千代田区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで千代田区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは千代田区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に千代田区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「千代田区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "千代田区の粗大ごみ・ふれあい収集・家電4品目（区の公式情報）",
  factsLead: (
    <>
      千代田区の粗大ごみは、区民が家庭で不用となった家具・寝具など、おおむね30cm以上のもので長さ2m以下のものが対象です。収集は事前申込制で有料、申し込み先は粗大ごみ受付センターです。事業者は申し込みできません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ受付センター（電話 03-6743-0603、月曜〜土曜 8時〜19時、日曜と年末年始を除く）。インターネットとAIチャットボットでも申し込める（インターネットは年末年始の12月29日0時〜1月3日23時59分は休み）。1度に出せるのは10点まで。事業者は申し込みできない", src: "千代田区「粗大ごみの出し方と料金（区民が日常生活で使用したもの）」（更新日 2026年4月1日）" },
    { k: "手数料の例", v: "布団・衣装箱・イス・掃除機・照明器具など300円、自転車（16インチ以上）・1人用ソファなど600円、机（両そで机以外）・シングルベッド・シングルのベッドマットなど900円、2人以上用ソファ・ソファーベッドなど1,600円、最も長い辺と次に長い辺の合計が360cm以上の箱物家具・両そで机など2,200円。その他は区の粗大ごみ品目一覧表で確認する", src: "千代田区「粗大ごみの出し方と料金（区民が日常生活で使用したもの）」" },
    { k: "支払いと出し方", v: "申し込み後、区内の主なコンビニエンスストアか千代田区有料粗大ごみ処理券取扱所でA券（200円）・B券（300円）を購入して貼る。千代田区の処理券は区内での使用に限られる。指定された日に、一戸建ては自宅前、マンションはマンション指定の場所に出す", src: "千代田区「粗大ごみの出し方と料金（区民が日常生活で使用したもの）」" },
    { k: "ふれあい収集（粗大ごみ）", v: "65歳以上の高齢者のみの世帯、障害者のみの世帯で、粗大ごみを自分で運び出すことが困難で身近な人の協力を得られない方は千代田清掃事務所に相談する。事前に職員が訪問して粗大ごみと運び出し方法を確認したうえで収集する（運び出しは無料、粗大ごみの処分費用は有料）", src: "千代田区「ごみ出しでお困りのこと」（更新日 2024年5月24日）" },
    { k: "手数料の免除", v: "児童扶養手当・特別児童扶養手当を受けている世帯、生活保護法による各種扶助を受けている世帯は、申請により粗大ごみの収集にかかる手数料が免除される。収集日までに所定の申請書に受給証書等の写しを添付し、千代田清掃事務所（外神田1-1-6）に申し込む", src: "千代田区「粗大ごみ等廃棄物処理手数料が免除される場合」（更新日 2016年3月17日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機など（ワインセラーも対象）は区で収集しない。買い替える販売店に引き取りを依頼するか、販売店に依頼できない場合は家電リサイクル受付センター（0570-087200、月曜〜金曜 9時〜17時）に申し込む。料金は収集運搬会社に現金で支払い、リサイクル券を受け取る", src: "千代田区「家電リサイクル法対象品目」（更新日 2024年3月18日）" },
    { k: "パソコン", v: "区は収集しない。各メーカーに回収を申し込む（PCリサイクルマーク付きは無料。自作やメーカー不明などはパソコン3R推進協会）か、小型家電リサイクル認定業者のリネットジャパンリサイクルによる宅配回収（パソコンを含む場合は無料になるなどの条件あり）や家電販売店の店頭回収を使う", src: "千代田区「家庭の使用済みパソコンのリサイクル」（更新日 2024年5月29日）" },
    { k: "区で収集できない物", v: "ガスボンベ、自動車などのバッテリー、塗料、消火器、家電リサイクル法対象品目、パソコン、オートバイ、ピアノなどの大型楽器、耐火金庫、土・石・ブロックなどは清掃事務所で収集できない（手提げ金庫は粗大ごみで回収）。メーカーに廃棄方法を問い合わせ、清掃事務所でも回収業者を紹介するとしている", src: "千代田区「清掃事務所で収集できないもの」（更新日 2019年3月5日）" },
  ],
  sections: [
    {
      id: "jukkoten-fureai",
      title: "1度に10点までの収集と、ふれあい収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            千代田区の粗大ごみは、1度に出せるのが10点までです。区の手数料の例では、布団やイスは300円、1人用ソファは600円、シングルベッドは900円で、10点以内の家具の入れ替えや部分的な片付けであれば区の収集で費用を抑えられます。一方で、家一軒分の家財や、長さ2mを超える物、区が収集できない品目（家電4品目、パソコン、ピアノ、耐火金庫など）が混じる片付けでは、区の収集だけでは完結しません。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            高齢者のみの世帯や障害者のみの世帯で運び出しが難しい場合は、区のふれあい収集（運び出しは無料、処分費用は有料）を先に千代田清掃事務所へ相談できます。対象外の世帯や、点数が多く日程の決まっている片付けは業者に任せ、区に出せる物は区の収集に回す、という組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、大きさの基準は<Link href="/sodaigomi-size-kijun/" className={linkCls}>粗大ごみのサイズ基準</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "gyousha-kakunin",
      title: "業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            千代田区は、事業系の粗大ごみは自己処理が原則とし、処理業者については千代田清掃事務所に問い合わせるよう案内しています。家庭の片付けを業者に頼む場合も、処分する物をどの許可業者が収集運搬するのかは、見積もりの段階で確認しておくと安心です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            見積もりは、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた内訳で受け取り、当日に追加料金が発生する条件も確かめてください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区に出せる物と点数を書き出し、手数料を確かめる", b: "出したい物の品目と点数を書き出し、区の粗大ごみ品目一覧表やAIチャットボットで手数料を確かめます。区の収集で1度に出せるのは10点まで、長さは2m以下が対象です。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "10点を超える分、家電4品目やパソコンなど区が収集しない物、室内から運び出せない大型家具を業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどの許可業者が収集運搬するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "千代田区の粗大ごみはどこに申し込みますか？", a: "粗大ごみ受付センターに、電話（03-6743-0603、月曜〜土曜の8時〜19時、日曜と年末年始を除く）、インターネット、AIチャットボットで申し込みます。申し込み後に千代田区有料粗大ごみ処理券をコンビニエンスストアなどで購入して貼り、指定された日に出します（2026年11月1日確認）。" },
    { q: "千代田区の粗大ごみは1回に何点まで出せますか？", a: "区の案内では、1度に出せるのは10点までです。対象はおおむね30cm以上で長さ2m以下の家庭の家具・寝具などです。点数が多い場合は、日を分けて申し込むか、業者との組み合わせを検討してください。" },
    { q: "高齢で粗大ごみを運び出せない場合はどうすればよいですか？", a: "65歳以上の高齢者のみの世帯や障害者のみの世帯で、自分で運び出すことが困難で身近な人の協力を得られない場合は、千代田清掃事務所にふれあい収集を相談できます。職員が事前に訪問して確認したうえで収集し、運び出しは無料ですが粗大ごみの処分費用はかかります。" },
    { q: "千代田区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、千代田区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "千代田区で粗大ごみの手数料が免除になるのはどんな場合ですか？", a: "児童扶養手当・特別児童扶養手当を受けている世帯と、生活保護法による各種扶助を受けている世帯が対象です。収集日までに所定の申請書に受給証書等の写しを添えて、千代田清掃事務所に申し込みます。" },
  ],
  matome: [
    "千代田区の粗大ごみは、受付センターへの事前申し込みのうえ有料で収集してもらう仕組みで、1度に出せるのは10点まで、長さ2m以下の物が対象です。家電4品目とパソコンは区では収集せず、販売店・家電リサイクル受付センター・メーカーや宅配回収などを使います。運び出しが難しい高齢者のみの世帯などは、ふれあい収集を清掃事務所に相談できます。",
    "業者に頼む場合は、千代田区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。処分する物の収集運搬を誰が行うかを、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方と料金（区民が日常生活で使用したもの）", org: "千代田区", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/wakekata/sodaigomi/index.html", updated: "2026年4月1日" },
    { label: "粗大ごみ等廃棄物処理手数料が免除される場合", org: "千代田区", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/wakekata/sodaigomi/menjo.html", updated: "2016年3月17日" },
    { label: "ごみ出しでお困りのこと", org: "千代田区", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/okomari.html", updated: "2024年5月24日" },
    { label: "家電リサイクル法対象品目", org: "千代田区", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/wakekata/kaden.html", updated: "2024年3月18日" },
    { label: "家庭の使用済みパソコンのリサイクル", org: "千代田区", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/wakekata/pc.html", updated: "2024年5月29日" },
    { label: "清掃事務所で収集できないもの", org: "千代田区", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/wakekata/dekinai/index.html", updated: "2019年3月5日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaChiyodaPage() {
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
