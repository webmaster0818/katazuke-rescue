import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "柏市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-12/city-12217/", count: 177 },
  curama: { url: "https://curama.jp/disposal/chiba/15/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/chiba/kashiwa" },
  usagi: { band: "「千葉県で45分～1時間30分程度で即日回収ができるエリア」", short: "公式の即日対応エリア（45分〜1時間30分程度）" },
};

const d: AreaCityData = {
  slug: "kashiwa",
  name: "柏市",
  title: "柏市のゴミ屋敷片付け・不用品回収業者おすすめ4選｜柏地域・沼南地域の粗大ごみの出し方【2026年版】",
  description:
    "柏市でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、柏市を対応エリアに含むことを公式で確認して比較。柏地域と沼南地域で異なる粗大ごみの申込先・手数料（1点1,100円／1点800円＋税）、クリーンセンターへの持ち込み、家電4品目の扱いを市の公式ページで確認してまとめています。",
  ogDescription:
    "柏市を対応エリアに含む片付け・不用品回収業者4社と、柏地域・沼南地域で異なる粗大ごみの申込先・手数料・持ち込み先を、市の公式ページで確認してまとめています。",
  h1: "柏市のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "柏市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["柏市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "柏市でまとまった量の不用品を処分するときに最初に確かめたいのは、家が「柏地域」と「沼南地域」のどちらにあるかです。柏市は二つの地域で資源・ごみの出し方が異なり、粗大ごみの申込先も手数料も、持ち込める施設も別々に案内されています。市の収集を使うのか、業者に頼むのかを決める前提として、地域ごとのルールを押さえておくと見積もりの比較もしやすくなります。",
    `本記事では、柏市の公式ページで確認した粗大ごみ・持ち込み・家電4品目の扱い（${CHECKED}確認）と、柏市を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、柏市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      柏市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで柏市が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは柏市の業者一覧ページ、お助けうさぎは公式の対応エリアページで確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「柏市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "柏市の粗大ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      柏市は「柏地域」と「沼南地域」で粗大ごみの申込先・手数料・持ち込み先が分かれています。沼南地域は、市のごみ・リサイクルのページで大津ヶ丘・高柳・手賀・藤ヶ谷・風早などの町名が列挙されており、それ以外の住所が柏地域です。自宅の住所がどちらに当たるかは、市のページの町名一覧で確認してください。
    </>
  ),
  facts: [
    { k: "地域の区分", v: "柏地域と沼南地域で資源・ごみの出し方が異なる。沼南地域に当たる町名（曙橋、泉、岩井、大井、大津ヶ丘、風早、高南台、高柳、手賀、藤ヶ谷、布瀬、みどり台、南高柳、箕輪、柳戸、若白毛、鷲野谷など）を市が列挙", src: "柏市「ごみ・リサイクル」" },
    { k: "粗大ごみの申込（柏地域）", v: "民間委託先の山本産業株式会社（電話 04-7132-1878）またはインターネット受付で予約。受付は月曜〜土曜の8時30分〜17時。収集は月曜〜土曜の予約制", src: "柏市「粗大ごみ(柏地域)」（ページの更新日 令和8年5月15日）" },
    { k: "手数料（柏地域）", v: "粗大ごみ1点につき1,100円。粗大ごみ処理券取扱店で処理券を購入して貼る。布団は3枚まで、座布団は5枚まで合わせて1点扱い。一戸建ては玄関先、集合住宅は1階入口付近に朝8時30分までに出す", src: "柏市「粗大ごみ(柏地域)」" },
    { k: "粗大ごみの申込（沼南地域）", v: "クリーンセンターしらさぎ（電話 04-7193-5389）に電話で予約。受付は月曜〜土曜の8時30分〜17時15分。収集は祝日を除く月曜〜金曜で、1回の申し込みで原則3点まで", src: "柏市「粗大ごみ(沼南地域)」（ページの更新日 令和8年5月15日）" },
    { k: "手数料（沼南地域）", v: "粗大ごみ1点につき800円＋税。原則として3辺の合計が1m以上のものが粗大ごみ。収集日当日の朝8時までに出し、立ち会いは不要", src: "柏市「粗大ごみ(沼南地域)」" },
    { k: "持ち込み（柏地域）", v: "北部クリーンセンター（柏市船戸山高野538）は可燃ごみ・不燃ごみ・有害ごみ・粗大ごみ全般・資源品全般を受け入れ。月曜〜土曜（祝日・年末年始を除く）8時30分〜正午、13時〜16時。10kgごとに198円で現金払いのみ。持ち込めるのは排出者本人かその家族で、身分証明書の提示が必要。大規模改修工事中のため持ち込み方法が変わる期間がある", src: "柏市「ごみの持ち込み（柏地域）」（ページの更新日 令和8年5月15日）" },
    { k: "持ち込み（沼南地域）", v: "クリーンセンターしらさぎ（柏市藤ケ谷1582）。平日8時30分〜正午・13時〜16時、土曜8時30分〜正午。家庭から出る粗大ごみは1点440円（税込み）", src: "柏市「ごみの持ち込み（沼南地域）」（ページの更新日 令和8年5月15日）" },
    { k: "家電4品目", v: "市のごみ分別便利ガイドでは、エアコン（室内機・室外機とも）は「収集できないごみ」で、家電リサイクル法に基づいて処理する品目。北部・南部クリーンセンターへの直接搬入もできない", src: "柏市「エアコン（室内機・室外機とも）」（ごみ分別便利ガイド 柏地域）" },
    { k: "無許可の回収業者", v: "市の一般廃棄物処理業の許可や委託なく家庭ごみを回収するのは違法と明記。産業廃棄物収集運搬業許可・古物商許可・貨物運送の許可では家庭ごみを回収できないと案内している", src: "柏市「無許可の違法な不用品回収業者への依頼について」（ページの更新日 令和7年2月21日）" },
    { k: "リユースの窓口", v: "ジモティースポット柏豊四季店（柏市豊四季816-13、令和8年5月29日開店）は柏市民限定で家具・生活家電などを無料で引き取る（身分証明書の提示が必要）", src: "柏市「粗大ごみ(柏地域)」" },
  ],
  sections: [
    {
      id: "chiiki-tsukaiwake",
      title: "柏地域・沼南地域それぞれの市の収集と業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            柏地域の粗大ごみは、品目や大きさにかかわらず1点1,100円です。たとえば10点を出せば処理券は11,000円分になります。点数が少なく、自分で玄関先まで運び出せるなら市の収集がもっとも分かりやすい選択肢です。一方で、家一軒分の片付けのように点数が数十点に及ぶ場合や、2階の部屋から大型家具を下ろす必要がある場合は、処理券の合計額と運び出しの手間を、業者の見積もり（運び出し・積み込み込みの総額）と並べて比べると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            沼南地域は1点800円＋税で、1回の申し込みは原則3点までです。収集は平日のみのため、まとまった量を市の収集だけで出そうとすると申し込みを何度も繰り返すことになります。自家用車で運べる物は、クリーンセンターしらさぎへの持ち込み（粗大ごみ1点440円）を組み合わせると費用を抑えられます。柏地域の北部クリーンセンターへの持ち込みは重さで手数料が決まる（10kgごとに198円）ため、軽くてかさばる物が多いときに向いています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            エアコンなど家電リサイクル法の対象品は、市の収集にもクリーンセンターへの持ち込みにも出せません。買い替える販売店か購入した販売店に引き取りを頼むか、指定引取場所へ運ぶのが基本です。片付けの中に家電4品目が含まれる場合は、業者に見積もりを頼む際に、リサイクル料金と運搬費の扱いを内訳で確認してください。家電の出し方は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "muhyoka",
      title: "柏市が注意を呼びかける無許可の回収業者を避ける",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            柏市は、軽トラックで街宣しながら回る回収、「無料・格安で回収します」と書かれたチラシ、インターネット広告、空き地の看板やのぼりによる回収などを、無許可業者による不用品回収の例として挙げています。回収後の不法投棄や、積み込んだあとに高額な料金を請求される料金トラブルの例も市のページに示されています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者を選ぶときは、見積もりの段階で「家庭ごみの収集運搬はどの許可で、どの業者が行うのか」を確認してください。買取を伴う場合は古物商許可の有無も判断材料になりますが、市は古物商許可だけでは家庭ごみを回収できないと明記しています。柏市は事業系ごみのページで一般廃棄物収集運搬の許可業者を柏地域・沼南地域別に公開しているため、業者が名前を挙げた許可業者を照らし合わせることもできます。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、無料回収をうたう業者の注意点は<Link href="/muryou-kaishuu-chuui/" className={linkCls}>無料回収の注意点</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 家が柏地域か沼南地域かを確かめ、市の収集で出せる量を見積もる", b: "市のページの町名一覧で地域を確かめ、柏地域なら1点1,100円、沼南地域なら1点800円＋税（1回原則3点まで）として、粗大ごみの点数から処理券の合計額を出しておきます。業者の見積もりと比べる基準になります。" },
    { t: "② 業者に頼む範囲を決め、写真と品目リストをそろえる", b: "自分で玄関先まで運べない大型家具、家電4品目、点数の多い片付けなど、業者に任せる範囲を決めます。部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えると、金額の差が比べやすくなります。" },
    { t: "③ 許可・補償・総額の内訳を確認する", b: "家庭ごみの収集運搬の許可、買取がある場合の古物商許可、搬出時の破損に備えた補償の有無を確認します。見積もりは作業費・車両費・処分費・家電リサイクル料金・追加料金の条件まで内訳で受け取り、当日に金額が変わる条件を先に聞いておいてください。" },
  ],
  faqs: [
    { q: "柏市の粗大ごみはいくらかかりますか？", a: "柏地域は粗大ごみ1点につき1,100円、沼南地域は1点につき800円＋税です（柏市の公式ページ、2026年11月1日確認）。柏地域では布団は3枚まで、座布団は5枚まで合わせて1点として扱われます。処理券は市の粗大ごみ処理券取扱店で購入します。" },
    { q: "柏市で粗大ごみを自分で持ち込めますか？", a: "柏地域は北部クリーンセンターで粗大ごみを受け入れており、10kgごとに198円（現金のみ）です。沼南地域はクリーンセンターしらさぎで、家庭の粗大ごみは1点440円です。どちらも分別したうえで持ち込み、身分証明書の提示を求められます。北部クリーンセンターは大規模改修工事中で持ち込み方法が変わる期間があるため、出かける前に市の案内を確認してください。" },
    { q: "エアコンや冷蔵庫も柏市の粗大ごみに出せますか？", a: "柏市のごみ分別便利ガイドでは、エアコンは「収集できないごみ」で家電リサイクル法に基づいて処理する品目とされ、北部・南部クリーンセンターへの直接搬入もできません。家電リサイクル法の対象品は、販売店への引き取り依頼か指定引取場所への持ち込みが基本です。業者に片付けを頼む場合は、リサイクル料金と運搬費が見積もりに含まれているかを確認してください。" },
    { q: "柏市で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、柏市は「千葉県で45分～1時間30分程度で即日回収ができるエリア」に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "「無料で回収します」というチラシの業者に頼んでもよいですか？", a: "柏市は、市の一般廃棄物処理業の許可や委託なく家庭ごみを回収するのは違法だとして、無許可業者を利用しないよう呼びかけています。チラシ配布やインターネット広告による回収も、市が挙げる無許可業者の回収例に含まれます。業者に頼む場合は、家庭ごみの収集運搬をどの許可で行うかを見積もりの段階で確認してください。" },
  ],
  matome: [
    "柏市では、家が柏地域か沼南地域かで粗大ごみの申込先・手数料・持ち込み先が変わります。点数が少なく自分で運び出せるなら市の収集や持ち込み、点数が多い片付けや運び出しが難しい大型品、家電4品目を含む片付けは業者、という使い分けが基本です。",
    "業者に頼む場合は、柏市を対応エリアに含むことを確認できた4社から、遺品整理・家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。いずれの場合も、家庭ごみの収集運搬の許可と総額の内訳を見積もりの段階で確認することが、市が注意を呼びかけるトラブルを避ける近道です。",
  ],
  sources: [
    { label: "ごみ・リサイクル（柏地域・沼南地域の区分）", org: "柏市", url: "https://www.city.kashiwa.lg.jp/garbage_environment/index.html" },
    { label: "粗大ごみ(柏地域)", org: "柏市", url: "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/kashiwaarea/guide-k/k_3.html", updated: "令和8年5月15日" },
    { label: "粗大ごみ(沼南地域)", org: "柏市", url: "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/shonanarea/guide/s_3.html", updated: "令和8年5月15日" },
    { label: "ごみの持ち込み（柏地域）", org: "柏市", url: "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/kashiwaarea/mochikomi.html", updated: "令和8年5月15日" },
    { label: "ごみの持ち込み（沼南地域）", org: "柏市", url: "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/shonanarea/mochikomi.html", updated: "令和8年5月15日" },
    { label: "エアコン（室内機・室外機とも）｜ごみ分別便利ガイド（柏地域）", org: "柏市", url: "https://www.city.kashiwa.lg.jp/garbage_environment/kashiwaarea/guide-k/e/0001.html" },
    { label: "「無許可」の違法な不用品回収業者に依頼をしないで！", org: "柏市", url: "https://www.city.kashiwa.lg.jp/haikibutsuseisaku/jigyosha/gomi/2603.html", updated: "令和7年2月21日" },
    { label: "事業系のごみ（柏地域）・一般廃棄物の収集運搬業者一覧表", org: "柏市", url: "https://www.city.kashiwa.lg.jp/haikibutsuseisaku/jigyosha/gomi/kashiwa.html", updated: "令和7年4月1日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKashiwaPage() {
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
