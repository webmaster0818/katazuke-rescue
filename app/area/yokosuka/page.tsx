import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "横須賀市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-14/city-14201/", count: 189 },
  curama: { url: "https://curama.jp/disposal/kanagawa/4/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/kanagawa/yokosuka" },
  usagi: { band: "「神奈川県で45分～1時間30分程度で即日回収ができるエリア」", short: "公式の即日対応エリア（45分〜1時間30分程度）" },
};

const d: AreaCityData = {
  slug: "yokosuka",
  name: "横須賀市",
  title: "横須賀市のゴミ屋敷片付け・不用品回収業者おすすめ4選｜令和8年10月からの粗大ごみ手数料と前払い制【2026年版】",
  description:
    "横須賀市でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、横須賀市を対応エリアに含むことを公式で確認して比較。令和8年10月1日からの粗大ごみ収集手数料（1個800円・スプリングマットレス7,000円）と申込券による前払い制、エコミルへの持ち込み手数料（10kgまでごとに200円）、家電4品目の出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "横須賀市を対応エリアに含む片付け・不用品回収業者4社と、令和8年10月からの粗大ごみ手数料・前払い制、エコミルへの持ち込み手数料、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "横須賀市のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "横須賀市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["横須賀市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "横須賀市は令和8年10月1日から、粗大ごみの収集手数料と、ごみ処理施設「エコミル」への持ち込み手数料を改定しました。粗大ごみの収集は1個（1組）520円から800円に、スプリングマットレスは4,300円から7,000円になり、電話で申し込む場合の支払いは、後から届く納付書から、事前に「粗大ごみ申込券」を買う前払い制に変わっています。以前の情報のまま費用を見積もると、市に出す分の金額を低く見積もってしまうため注意が必要です。",
    `本記事では、横須賀市の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・家電4品目の扱い（${CHECKED}確認）と、横須賀市を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、横須賀市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      横須賀市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで横須賀市が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは横須賀市の業者一覧ページ、お助けうさぎは公式の対応エリアページ（神奈川県で45分〜1時間30分程度で即日回収ができるエリアに横須賀市を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「横須賀市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "横須賀市の粗大ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      横須賀市の粗大ごみは、一辺の長さがおおむね50cm以上2m以下の家具・遊具類・電化製品などです。戸別収集（有料・申込制）と、横須賀ごみ処理施設「エコミル」への自己搬入の二つの出し方があります。
    </>
  ),
  facts: [
    { k: "申し込み", v: "横須賀市LINE公式アカウント、インターネット（粗大ごみ受付システム）、電話（粗大ごみ受付 046-823-0868、月曜〜金曜 8時30分〜16時、祝日も受付、土日と12月29日〜1月3日を除く）。インターネット受付はPHPの脆弱性への予防措置で停止していたが、10月26日に再開したと市が案内", src: "横須賀市「粗大ごみ（有料）」（更新日 2026年10月26日）" },
    { k: "収集手数料", v: "その他のもの 1個または1組 800円（改定前 520円）、スプリングマットレス 1個 7,000円（改定前 4,300円）。10月1日以降の収集申込から新料金。スプリングマットレスは適正処理困難物のため、なるべく購入した販売店などの引き取りを利用するよう案内", src: "同上" },
    { k: "支払い", v: "LINE・インターネット申込は申込時に電子決済（クレジットカード、auPay、PayPay）。電話申込は令和8年10月1日から前払い制で、申込後に「粗大ごみ申込券」を市役所分館5階廃棄物対策課・各行政センター・市内郵便局・市内セブン-イレブンで購入して貼る。収集時に現金は預からない", src: "同上、横須賀市「粗大ごみ収集等の手数料が「前払い制」に変わります。」（更新日 2026年8月17日）" },
    { k: "出し方・収集日", v: "朝8時までに申込時に確認した場所（敷地の道路側）へ出す。収集の時間指定は不可、収集職員は家の中までは入らない。立ち会い不要。収集日は日曜〜金曜（土曜と12月31日〜1月3日は収集しない）", src: "横須賀市「粗大ごみ（有料）」" },
    { k: "持ち込み（エコミル）", v: "横須賀ごみ処理施設「エコミル」（横須賀市長坂5丁目1番1号、電話 046-854-4153）。受付は月曜〜金曜（家庭のごみは祝日も受付）8時30分〜16時、予約不要。持ち込めるのはごみを発生させた本人または同居の家族で、本人確認書類の提示が必要。横須賀市内で発生したごみに限る", src: "横須賀市「持ち込みごみ」（更新日 2026年9月30日）" },
    { k: "持ち込み手数料", v: "令和8年10月1日から、ごみ重量10kgまでごとに200円（改定前 150円）。スプリングマットレスはこれに加えて1個3,000円（改定前 2,000円）", src: "同上、横須賀市「廃棄物処理手数料（持込手数料）の改定について」（更新日 2026年4月27日）" },
    { k: "家電4品目", v: "エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機は、買い替え時は購入する販売店、または過去に購入した販売店に引き取りを依頼（リサイクル料金と運搬料金が必要）。郵便局でリサイクル料金を振り込み、市内の指定引取場所（株式会社東産業・佐原事業所）へ直接持ち込むこともできる", src: "横須賀市「家電リサイクル法対象品（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）の処分方法」（更新日 2026年10月26日）" },
    { k: "リフォーム等のごみ", v: "リフォーム等に伴って発生するごみは、施工業者等に処理を依頼する", src: "横須賀市「粗大ごみ（有料）」" },
  ],
  sections: [
    {
      id: "kaitei",
      title: "令和8年10月の手数料改定で、市に出す費用はどう変わったか",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            横須賀市の粗大ごみ収集は、品目に関わらず1個（1組）800円です。改定前の520円で計算していた場合、たとえば15点を出すと7,800円から12,000円へ、4,200円の差になります。スプリングマットレスは1個7,000円と高く、市も販売店などの引き取りを勧めています。持ち込みも10kgまでごとに200円に上がり、スプリングマットレスはさらに1個3,000円がかかります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            粗大ごみの点数が多い片付けでは、市に出す場合の合計額を新料金で計算し、運び出し・積み込み込みの業者の見積もりと並べて比べてください。市の収集は家の中に入らず、敷地の道路側まで自分で出す必要があるため、坂や階段の多い住宅地で大型家具を運び出すのが難しい場合は、運び出しを含めて業者に頼む判断も現実的です。自分で運べる物はエコミルへ持ち込み、運び出しが難しい物を業者に任せる組み合わせも有効です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、マットレスの処分は<Link href="/futon-mattress-shobun/" className={linkCls}>布団・マットレスの処分</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden",
      title: "家電4品目は販売店か、市内の指定引取場所へ",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            エアコン・テレビ・冷蔵庫（冷凍庫）・洗濯機（衣類乾燥機）は、家電リサイクル法にもとづいて処分します。横須賀市は、買い替える販売店か過去に購入した販売店に引き取りを依頼する方法と、郵便局でリサイクル料金を振り込んだうえで市内の指定引取場所（株式会社東産業・佐原事業所）へ直接持ち込む方法を案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が見積もりの内訳に分けて書かれているか、どの許可で収集運搬するのかを確認してください。家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>、許可の確かめ方は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 新料金で、市に出す場合の合計額を出す", b: "粗大ごみの点数に1個800円（スプリングマットレスは7,000円）を掛けて合計額を出します。自分でエコミルへ運べる物は10kgまでごとに200円で計算し、業者の見積もりと比べる基準にします。" },
    { t: "② 運び出しの条件をそろえて、複数社に同じ条件で見積もりを取る", b: "部屋の写真、品目と点数、階数、坂や階段の有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目やスプリングマットレスが含まれる場合は先に伝え、処分費の扱いを確認してください。" },
    { t: "③ 許可・補償・総額の内訳を確認する", b: "家庭ごみの収集運搬の許可、買取がある場合の古物商許可、搬出時の破損に備えた補償の有無を確認し、作業費・処分費・家電リサイクル料金・追加料金の条件を内訳で受け取ってから依頼を確定します。" },
  ],
  faqs: [
    { q: "横須賀市の粗大ごみの手数料はいくらですか？", a: "令和8年10月1日以降の収集申込から、1個または1組800円、スプリングマットレスは1個7,000円です（改定前はそれぞれ520円と4,300円）。LINE・インターネット申込は電子決済、電話申込は事前に粗大ごみ申込券を購入して貼る前払い制です（横須賀市の公式ページ、2026年11月1日確認）。" },
    { q: "粗大ごみ申込券はどこで買えますか？", a: "市役所分館5階の廃棄物対策課、各行政センター、市内の郵便局、市内のセブン-イレブン（マルチコピー機）で購入できます。電話で収集を申し込んだあとに購入し、名前または申込番号を記入して品物に貼ります。インターネット申込では申込券は使えず、申込時に電子決済で支払います。" },
    { q: "エコミルへの持ち込みはいくらかかりますか？", a: "令和8年10月1日から、ごみ重量10kgまでごとに200円です。スプリングマットレスを持ち込む場合は、これに加えて1個3,000円がかかります。受付は月曜〜金曜（家庭のごみは祝日も受付）の8時30分〜16時で予約は不要ですが、持ち込めるのはごみを発生させた本人か同居の家族で、本人確認書類の提示が必要です。" },
    { q: "横須賀市で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、横須賀市は「神奈川県で45分～1時間30分程度で即日回収ができるエリア」に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
  ],
  matome: [
    "横須賀市は令和8年10月1日から、粗大ごみの収集手数料を1個800円（スプリングマットレス7,000円）に、エコミルへの持ち込み手数料を10kgまでごとに200円に改定し、電話申込の支払いを申込券による前払い制に変えました。市の収集は敷地の道路側まで自分で出す必要があるため、点数や運び出しの手間に応じて、市の収集・持ち込み・業者を使い分けるのが基本です。",
    "業者に頼む場合は、横須賀市を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。収集運搬の許可と総額の内訳を、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ（有料）", org: "横須賀市", url: "https://www.city.yokosuka.kanagawa.jp/4150/g_info/l100000701.html", updated: "2026年10月26日" },
    { label: "粗大ごみ収集等の手数料が「前払い制」に変わります。", org: "横須賀市", url: "https://www.city.yokosuka.kanagawa.jp/4150/nagekomi/20260724.html", updated: "2026年8月17日" },
    { label: "持ち込みごみ", org: "横須賀市", url: "https://www.city.yokosuka.kanagawa.jp/4170/s-syori/03.html", updated: "2026年9月30日" },
    { label: "廃棄物処理手数料（持込手数料）の改定について", org: "横須賀市", url: "https://www.city.yokosuka.kanagawa.jp/4170/ecomill/youryou_sijou/20261001ryokin_update.html", updated: "2026年4月27日" },
    { label: "家電リサイクル法対象品（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）の処分方法", org: "横須賀市", url: "https://www.city.yokosuka.kanagawa.jp/4150/g_info/l100000700.html", updated: "2026年10月26日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaYokosukaPage() {
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
          </ul>
        </div>
      }
    />
  );
}
