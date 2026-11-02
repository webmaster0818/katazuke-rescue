import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "佐世保市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-42/city-42202/", count: 25 },
  curama: { url: "https://curama.jp/disposal/nagasaki/2/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/nagasaki/sasebo" },
};

const K = "https://www.city.sasebo.lg.jp/kankyo";

const d: AreaCityData = {
  slug: "sasebo",
  name: "佐世保市",
  title: "佐世保市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみの戸別有料収集は1回5点まで、屋内からの搬出も相談可【2026年版】",
  description:
    "佐世保市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。粗大ごみの戸別有料収集（1回5点まで、品目別520円〜1,560円、屋内訪問は別途520円）、東部・西部クリーンセンターへの持ち込み（50kg以下450円）、家電5品目を公式ページで確認してまとめています。",
  ogDescription:
    "佐世保市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの戸別有料収集、クリーンセンターへの持ち込み、家電5品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  h1: "佐世保市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "佐世保市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["佐世保市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "佐世保市では、指定ごみ袋（大：45リットル）に入らず60キログラムを超えない物が「粗大ごみ」で、ごみステーションには出せません。粗大ごみ受付センターに申し込んで粗大ごみ処理券を貼る戸別有料収集（1回5点まで）か、東部・西部クリーンセンターへの持ち込みで処分します。自分で屋外に出せず、ほかの人の協力も得られない場合は、別途520円で収集員が屋内から運び出すこともできます。",
    `本記事では、佐世保市の公式ページで確認した粗大ごみの戸別有料収集、品目別の手数料、クリーンセンターへの持ち込み、家電5品目・パソコンの扱い（${CHECKED}確認）と、佐世保市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、佐世保市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      佐世保市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに佐世保市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に長崎県が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「佐世保市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "佐世保市の粗大ごみの戸別有料収集・手数料・持ち込み・家電5品目（市の公式情報）",
  factsLead: (
    <>
      佐世保市の粗大ごみは、申し込み制の戸別有料収集（1回5点まで）か、東部・西部クリーンセンターへの持ち込みで処分します。数が多い場合は、クリーンセンターへの持ち込みか一般廃棄物収集運搬許可業者への依頼となり、家電5品目とパソコンは市の収集・クリーンセンターの対象外です。
    </>
  ),
  facts: [
    { k: "粗大ごみの範囲", v: "家庭から出るごみのうち、指定ごみ袋（大：45リットル）に入らず、60キログラムを超えない物（オルガン、自転車、ソファー、椅子、ベッド、食器棚、机など）。ごみステーションには出せない。パソコン、家電5品目、処理困難物（消火器・耐火金庫など）は市では収集できない", src: "佐世保市「粗大ごみの出し方」（更新日 2026年8月12日）" },
    { k: "戸別有料収集の申し込み", v: "電話は粗大ごみ受付センター（0956-46-5300、月曜〜金曜 8時30分〜17時、祝日を除く）で、収集希望日の1か月前から3日前まで受付。インターネットは粗大ごみ収集予約システムで24時間受付、収集希望日の10日前が締め切り。1回の申し込みにつき5点まで。水曜日以外の原則毎日収集で、日は指定できるが時間は指定できない。予約後の追加・変更・取消は収集日の前日までに電話で連絡", src: "佐世保市「粗大ごみの出し方」（更新日 2026年8月12日）" },
    { k: "処理券と出し方", v: "粗大ごみ処理券を販売登録店舗で購入し、氏名または予約番号を書いて貼り、収集日当日の朝8時30分までに指定された排出場所（家の玄関前など）に出す。原則として立会いは不要だが、屋内収集やオートロックのマンション等では立会いが必要。集合住宅で退去後の収集となる場合は、不動産管理会社の了承と収集場所の確認を事前に行う", src: "佐世保市「粗大ごみの出し方」（更新日 2026年8月12日）" },
    { k: "屋内からの搬出", v: "廃棄する粗大ごみを自分で屋外に出すことができず、ほかの人の協力も得られない場合は、収集員が屋内に入って搬出することもできる。屋内訪問1回につき、別途520円（粗大ごみ処理券1枚）が必要", src: "佐世保市「粗大ごみの出し方」（更新日 2026年8月12日）" },
    { k: "手数料", v: "品目ごとに520円・1,040円・1,560円。例: 自転車・布団・畳（1枚）・スプリングなしのマットレスは520円、タンス・食器棚・テーブル・ソファーは520円〜1,560円、スプリングありのマットは1,040円〜1,560円、二段ベッド・ソファーベッド・オルガンは1,560円", src: "佐世保市「ごみ分類【分類別検索】粗大ごみ」（更新日 2026年9月29日）" },
    { k: "数が多い場合", v: "戸別有料収集で一度に収集できるのは5個まで。会社・事務所など事業所からの粗大ごみは収集しない。数が多い場合は、クリーンセンターへの持ち込みか、一般廃棄物収集運搬許可業者に収集を依頼する", src: "佐世保市「ごみ分類【分類別検索】粗大ごみ」（更新日 2026年9月29日）" },
    { k: "持ち込み", v: "東部クリーンセンター（大塔町1036番地1）と西部クリーンセンター（下本山町2-1）。受付は8時30分〜17時（毎週日曜日、国民の祝日の一部、年末年始は休み）。受付で市の処分依頼書に記入し、計量のうえ、品目ごとに分別して指定場所へ降ろす。手数料は1回の持ち込みにつき50kg以下450円、50kgを超える場合は10kgごとに90円加算。家電5品目や産業廃棄物は持ち込めない", src: "佐世保市「クリーンセンターにごみを持ち込むことができます」（更新日 2026年1月5日）" },
    { k: "家電5品目", v: "テレビ・エアコン・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は市では回収できず、クリーンセンターへの持ち込みもできない。処分方法は、家電販売店への引取依頼、一般廃棄物の収集運搬許可業者への引取（運搬）依頼（原則として事前に家電リサイクル券を準備し、リサイクル料金に加えて運搬料金が必要）、指定引取場所（株式会社山口商店〈佐々町〉、佐世保ダイキュー運輸株式会社〈新行江町〉）への自己搬入の3つ", src: "佐世保市「家電5品目の処分方法等」（更新日 2025年11月19日）" },
    { k: "パソコン", v: "市はパソコンの回収・処理を行っておらず、ごみステーションに出しても回収せず、クリーンセンターでも引き受けない。市と協定を締結したリネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含む回収1回につき1箱無料、パソコンを含まない場合は1箱1,848円）か、パソコンメーカーによる回収を利用する", src: "佐世保市「家庭で不要になったパソコンの処分について」（更新日 2025年4月21日）" },
    { k: "不用品回収業者への注意", v: "市は、住宅街の巡回、空き地での回収、チラシの配布、インターネット広告を行う回収業者の中には「無許可・違法な業者がいることがあります」と案内し、当初は無料と言いながら回収後に料金を請求したり、回収した家電製品を不法投棄したりする事例が全国的に確認されていると注意を呼びかけている", src: "佐世保市「家電5品目の処分方法等」（更新日 2025年11月19日）" },
  ],
  sections: [
    {
      id: "kobetsu-mochikomi",
      title: "佐世保市の戸別有料収集・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            佐世保市の粗大ごみの戸別有料収集は、1回の申し込みにつき5点までです。インターネットは収集希望日の10日前、電話は3日前が締め切りのため、退去日や引き渡し日が決まっている場合は早めに予約しておくと安心です。自分で屋外に出せず、ほかの人の協力も得られない場合は、屋内訪問1回につき別途520円で収集員が屋内から運び出す方法も市が用意しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            数が多い場合は、東部・西部クリーンセンターへの持ち込み（1回50kg以下450円）か、一般廃棄物収集運搬許可業者への依頼となります。使える物をリユースに回し、戸別収集や持ち込みで減らせる分を先に減らしたうえで、残りの運び出しを業者に頼む組み合わせが基本です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、粗大ごみの出し方の全体像は<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電5品目の出し方と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            佐世保市では、家電5品目（テレビ・エアコン・冷蔵庫と冷凍庫・洗濯機・衣類乾燥機）は市の収集もクリーンセンターへの持ち込みもできません。家電販売店への依頼、一般廃棄物の収集運搬許可業者への依頼、指定引取場所への自己搬入のいずれかで、許可業者に頼む場合は原則として事前に家電リサイクル券を準備し、リサイクル料金に加えて運搬料金がかかると市は案内しています。片付け業者に家電もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 量と期限から、戸別収集・持ち込み・業者のどれで出すかを決める", b: "大きなごみを書き出し、1回5点までの戸別有料収集で出し切れるか、締め切り（インターネットは10日前、電話は3日前）に間に合うかを確かめます。出し切れない分は、クリーンセンターへの持ち込みか業者への依頼のどちらで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電5品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "佐世保市で粗大ごみはどう出しますか？", a: "粗大ごみ受付センター（0956-46-5300）に電話するか、粗大ごみ収集予約システムで申し込み、品目ごとの粗大ごみ処理券を貼って、収集日の朝8時30分までに家の玄関前などの指定場所に出します。1回の申し込みにつき5点まで、手数料は品目により520円・1,040円・1,560円です（2026年11月1日確認）。" },
    { q: "粗大ごみを部屋の中から運び出してもらえますか？", a: "自分で屋外に出すことができず、ほかの人の協力も得られない場合は、収集員が屋内に入って搬出することもできます。屋内訪問1回につき別途520円（粗大ごみ処理券1枚）が必要で、立会いも必要です。" },
    { q: "佐世保市でごみを自分で持ち込むといくらかかりますか？", a: "東部・西部クリーンセンターへの持ち込みは、1回につき50kg以下なら450円、50kgを超える場合は10kgごとに90円が加算されます。受付は8時30分〜17時で、毎週日曜日などは休みです。" },
    { q: "佐世保市で冷蔵庫や洗濯機を処分するには？", a: "市では回収できず、クリーンセンターへの持ち込みもできません。家電販売店への引取依頼、一般廃棄物の収集運搬許可業者への依頼、指定引取場所への自己搬入のいずれかで処分し、リサイクル料金がかかります。" },
    { q: "関東の記事で見たお助けうさぎは佐世保市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、長崎県は含まれていません（2026年11月1日確認）。本記事では、公式ページで佐世保市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "佐世保市の粗大ごみは、戸別有料収集（1回5点まで・品目別520円〜1,560円）か、東部・西部クリーンセンターへの持ち込み（1回50kg以下450円）で処分するのが基本です。数が多い場合はクリーンセンターへの持ち込みか一般廃棄物収集運搬許可業者への依頼となり、家電5品目とパソコンは市の収集の対象外です。",
    "業者に頼む場合は、佐世保市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。収集運搬を行う許可業者と総額の内訳は、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "佐世保市", url: `${K}/recycl/sodaigomi.html`, updated: "2026年8月12日" },
    { label: "ごみ分類【分類別検索】粗大ごみ", org: "佐世保市", url: `${K}/recycl/sodai.html`, updated: "2026年9月29日" },
    { label: "クリーンセンターにごみを持ち込むことができます", org: "佐世保市", url: `${K}/sisetu/mochikomi.html`, updated: "2026年1月5日" },
    { label: "家電5品目の処分方法等", org: "佐世保市", url: `${K}/recycl/kaden.html`, updated: "2025年11月19日" },
    { label: "家庭で不要になったパソコンの処分について", org: "佐世保市", url: `${K}/recycl/recycling.html`, updated: "2025年4月21日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（長崎県が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaSaseboPage() {
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
