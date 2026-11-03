import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "いわき市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-7/city-7204/", count: 28 },
  curama: { url: "https://curama.jp/disposal/fukushima/5/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/fukushima/iwaki" },
};

const d: AreaCityData = {
  slug: "iwaki",
  name: "いわき市",
  title: "いわき市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜大型ごみは1点520円〜1,560円、清掃センター等への持ち込みは10kgにつき100円【2026年版】",
  description:
    "いわき市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。大型ごみ受付センター（北部・南部）・LINE申込、1点520円・1,040円・1,560円の納付券、清掃センター等への持ち込み（10kgにつき100円）、家電4品目を公式ページで確認してまとめています。",
  ogDescription:
    "いわき市を対応エリアに含む片付け・不用品回収業者3社と、大型ごみの申込・手数料、処理施設への持ち込み、家電4品目・パソコン、家庭ごみの回収に必要な市の許可を市の公式ページで確認してまとめています。",
  h1: "いわき市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "いわき市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["いわき市", "ゴミ屋敷片付け", "不用品回収", "大型ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "いわき市では、大きさ60cm以上180cm未満、または重さ10kg以上50kg未満のごみが「大型ごみ」で、お住まいの地区の大型ごみ受付センターへの申し込み制の有料収集です。手数料は大きさ・重さにより520円・1,040円・1,560円の3段階で、市公式LINEから申し込む場合は1回3個までです。自家用車で市の処理施設へ運ぶ方法もあり、搬入手数料は10kgにつき100円（資源ごみは無料）です。",
    `市は家庭ごみの回収について、自分で運ぶか、いわき市の一般廃棄物収集運搬業の許可を持つ業者に引き渡すよう案内しています。本記事では、いわき市の公式ページで確認した大型ごみの申込方法と手数料、処理施設への持ち込み、家電4品目・パソコンの扱い、回収業者についての市の案内（${CHECKED}確認）と、いわき市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、いわき市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      いわき市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページにいわき市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリアに福島県が含まれているものの、市区町村ごとの一覧でいわき市を確認できなかったため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「いわき市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "いわき市の大型ごみ・持ち込み・家電4品目・回収業者（市の公式情報）",
  factsLead: (
    <>
      いわき市の大型ごみは、大きさ60cm以上180cm未満、または重さ10kg以上50kg未満のものです（電子レンジ・ファンヒーターなどは大きさにかかわらず大型ごみの指定品目）。電話またはLINEで申し込み、コンビニエンスストア等で買った大型ごみ納付券を貼って出します。
    </>
  ),
  facts: [
    { k: "申し込み（電話）", v: "お住まいの地区の大型ごみ受付センターに事前に申し込む。北部地区大型ごみ受付センター（平、内郷、四倉、小川、好間、三和、川前、久之浜・大久地区）は 0246-34-0053、南部地区大型ごみ受付センター（小名浜、勿来、常磐、遠野、田人地区）は 0246-92-0053。受付は月曜〜金曜の9時30分〜16時（土日・年末年始・祝祭日は休み）", src: "いわき市「LINEを活用した大型ごみ収集の予約について」（更新日 2026年8月31日）" },
    { k: "申し込み（LINE）", v: "令和7年3月1日から、LINE公式アカウント「いわき市」のメニュー「ごみ」からも申し込める。数量は1回の申込みにつき3個まで（自転車・一輪車など品目によって1個または2個まで）。申し込む品目すべてが写った写真1枚の送信が必要。品目リストにない物は電話で申し込む。予約枠に達した場合は電話での申し込みを求められることがある", src: "いわき市「LINEを活用した大型ごみ収集の予約について」、同「LINEによる大型ごみ申込の際の注意事項」（いずれも更新日 2026年8月31日）" },
    { k: "手数料・支払い", v: "大きさ・重さにより520円・1,040円・1,560円の3段階。本受付の後に大型ごみ納付券を市内のセブンイレブン・ファミリーマート・ローソン（田人地区は田人支所、川前地区は川前支所）で購入し、氏名または申請番号を記入して貼る。納付券の払い戻し・再発行はできない", src: "いわき市「家庭ごみの分け方・出し方（ハンドブック）」（更新日 2026年3月19日）掲載の令和8年版ハンドブック20ページ（PDF）、同「LINEを活用した大型ごみ収集の予約について」" },
    { k: "出し方", v: "収集日の朝8時30分までに、自宅前（敷地外）またはごみ集積所の指定の場所に出す。袋小路や道幅が狭い場所はごみ集積所での収集になる。昼間に収集し、立ち会いは不要", src: "いわき市「LINEによる大型ごみ申込の際の注意事項」" },
    { k: "収集できない物", v: "大きさ180cm以上または重さ50kg以上の物（スプリング入りのマットレス・ソファーは210cm未満まで可）、産業廃棄物、医療廃棄物、危険物、処理困難物（タイヤ、バッテリー、耐火金庫、ピアノ、消火器、風呂釜、物置、システムキッチンなど）、家電リサイクル法対象品目、家庭系パソコン、二輪車リサイクル対象二輪車", src: "同上" },
    { k: "持ち込み", v: "家庭から出たごみを分別して、自家用車で処理施設へ運べる（事業用の車両は事業者扱いで搬入不可。レンタカーは可）。燃やすごみ・燃やす大型ごみは北部清掃センター・南部清掃センター、燃やさない大型ごみはクリンピーの丘（少量のみ。量が多い場合はクリンピーの森）など、ごみの種類で搬入先が分かれる。受付は月曜〜土曜の8時30分〜11時30分・13時〜16時30分で事前の電話予約は不要。搬入手数料は10kgにつき100円（資源ごみは無料）", src: "いわき市「家庭ごみの分け方・出し方（ハンドブック）」掲載の令和8年版ハンドブック37〜39ページ（PDF）" },
    { k: "家電4品目", v: "市では家電リサイクル対象機器の収集や処分は行っていない。買い替えにより購入する販売店、以前購入した販売店、または一般廃棄物収集運搬業許可業者に引き取りを依頼する（収集・運搬料金がかかる）。自分で運ぶ場合は郵便局でリサイクル料金を支払い、市内2か所の指定引取場所のどちらかに運ぶ", src: "いわき市「家電リサイクル」（更新日 2026年7月13日）" },
    { k: "パソコン", v: "メーカーの受付窓口に回収を申し込み、送付されるエコゆうパック伝票を貼って郵便局に持ち込むか戸口集荷を依頼する。PCリサイクルマークのない製品はリサイクル料金がかかり、概ねデスクトップ本体・ノート・液晶ディスプレイ等が3,300円/台、CRTディスプレイ等が4,400円/台（税込）。自作パソコンや事業撤退・倒産メーカーの物はパソコン3R推進協会が回収", src: "いわき市「家庭用パソコンのリサイクル」（更新日 2026年7月21日）" },
    { k: "回収業者についての市の案内", v: "個人の家の片づけ・遺品整理等で自宅から出るごみは家庭ごみで、運ぶ場合は自分で行うか、いわき市の一般廃棄物収集運搬業の許可を持つ業者へ引き渡すよう案内。産業廃棄物収集運搬業許可では家庭ごみを回収できないとしている。多くの許可業者は家庭ごみを持ち帰って分別できる許可を持っておらず、分別されていない家庭ごみを一括で搬入できる処分場は市にないため、自分で分別するか、自宅等で事業者等に分別させてから許可業者に運搬させるよう求めている。許可業者の運搬車両には青色ステッカー（一般廃棄物処理業施設確認済証）の貼付を義務付けている", src: "いわき市「無許可の回収業者にご注意を！（リユースできない廃家電、粗大ごみ、引越・片づけごみ等）」（登録日 2026年8月27日）" },
    { k: "リユースの連携", v: "まだ使える家電や家具は、株式会社ジモティーが運営するジモティースポットいわき（内郷高坂町）に持ち込むと無料で引き取られ、店舗で販売される。市とジモティーはリユース活動促進のための連携協定を締結している", src: "いわき市「無許可の回収業者にご注意を！（リユースできない廃家電、粗大ごみ、引越・片づけごみ等）」、同「LINEによる大型ごみ申込の際の注意事項」" },
  ],
  sections: [
    {
      id: "oogata-mochikomi",
      title: "いわき市の大型ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            いわき市の大型ごみは1点ごとに520円・1,040円・1,560円の納付券を貼って出す仕組みで、LINEでの申し込みは1回3個までです。家具の入れ替え程度なら大型ごみの収集で足りますが、大きさ180cm以上や重さ50kg以上の物、家電4品目、パソコン、ピアノや耐火金庫などの処理困難物は市の収集に出せません。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、処理施設への持ち込みは10kgにつき100円（資源ごみは無料）で、事前の電話予約は不要です。ただし、ごみの種類によって北部・南部清掃センター、クリンピーの丘・森などに搬入先が分かれ、集積所に出す場合と同じ分別が必要です。点数の多い片付けは、使える物をリユースに回し、大型ごみの収集と持ち込みで減らせる分を先に減らしたうえで、残りを業者に頼む組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "市が案内する家庭ごみの回収の許可と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            いわき市は、個人の家の片づけや遺品整理で出るごみは家庭ごみであり、自宅から運ぶ場合は自分で行うか、いわき市の一般廃棄物収集運搬業の許可を持つ業者に引き渡すよう案内しています。産業廃棄物収集運搬業許可では家庭ごみを回収できないこと、多くの許可業者は回収した家庭ごみを持ち帰って分別できる許可を持っていないこと、分別されていない家庭ごみを一括で搬入できる処分場は市にないことも示しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を分別したうえで、どの許可業者が収集運搬を行うのかを作業前に確認してください。市は許可業者の運搬車両に青色ステッカーの貼付を義務付けているため、引き渡す前の確認材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目と大きさ・重さを書き出し、市の収集に出せる物を分ける", b: "大きさ180cm以上・重さ50kg以上の物、家電4品目、パソコン、処理困難物は市の大型ごみに出せません。残りの物について、大型ごみの収集、処理施設への持ち込み、業者への依頼のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 分別と収集運搬の許可、買取と処分の内訳を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分する物の分別をどこで行うか、収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "いわき市の大型ごみはどこに申し込みますか？", a: "お住まいの地区の大型ごみ受付センターに電話で申し込みます。平・内郷・四倉・小川・好間・三和・川前・久之浜・大久地区は北部地区（0246-34-0053）、小名浜・勿来・常磐・遠野・田人地区は南部地区（0246-92-0053）で、受付は月曜〜金曜の9時30分〜16時です。市公式LINEのメニュー「ごみ」からも申し込めます（2026年11月1日確認）。" },
    { q: "いわき市の大型ごみの手数料はいくらですか？", a: "大きさ・重さにより1点520円・1,040円・1,560円の3段階です。本受付の後に市内のセブンイレブン・ファミリーマート・ローソンなどで大型ごみ納付券を購入し、氏名または申請番号を記入して貼ります。納付券の払い戻し・再発行はできません。" },
    { q: "いわき市の大型ごみはLINEで何個まで申し込めますか？", a: "LINEでの申し込みは1回につき3個までで、自転車・一輪車など品目によっては1個または2個までです。4個以上の場合は、申し込み（仮受付）の完了後に新たに申し込みます。品目リストにない物は電話で申し込みます。" },
    { q: "いわき市でごみを自分で持ち込むといくらかかりますか？", a: "家庭から出たごみを自家用車で処理施設へ持ち込む場合、搬入手数料は10kgにつき100円（資源ごみは無料）です。受付は月曜〜土曜の8時30分〜11時30分と13時〜16時30分で、事前の電話予約は不要です。事業用の車両での搬入は断られます（レンタカーは可）。" },
    { q: "いわき市で不用品回収業者に片付けごみを回収してもらってもよいですか？", a: "いわき市は、片づけや遺品整理で自宅から出るごみは家庭ごみであり、運ぶ場合は自分で行うか、いわき市の一般廃棄物収集運搬業の許可を持つ業者に引き渡すよう案内しています。産業廃棄物収集運搬業許可では家庭ごみを回収できないとしており、分別してから許可業者に運搬させるよう求めています。" },
    { q: "関東の記事で見たお助けうさぎはいわき市でも使えますか？", a: "お助けうさぎの公式の対応エリアには福島県が含まれていますが、公式ページには市区町村ごとの対応一覧が掲載されておらず、いわき市を確認できませんでした（2026年11月1日確認）。本記事では、公式ページでいわき市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "いわき市の大型ごみは大型ごみ受付センター（北部・南部）またはLINEで申し込み、1点520円・1,040円・1,560円の納付券を貼って出します。自家用車で運べる物は処理施設への持ち込み（10kgにつき100円、資源ごみは無料）も使えます。家電4品目とパソコンは市では収集しません。",
    "業者に頼む場合は、いわき市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。市は家庭ごみをいわき市の許可業者に分別して引き渡すよう案内しているため、処分する物の分別と収集運搬を行う許可業者を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "LINEを活用した大型ごみ収集の予約について", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1722312210664/index.html", updated: "2026年8月31日" },
    { label: "LINEによる大型ごみ申込の際の注意事項", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1722410122743/index.html", updated: "2026年8月31日" },
    { label: "家庭ごみの分け方・出し方（ハンドブック）", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1001000001842/index.html", updated: "2026年3月19日" },
    { label: "家庭ごみの分け方・出し方（ハンドブック）ページ20　大型ごみ（PDF）", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1001000001842/files/2026_020.pdf" },
    { label: "家庭ごみの分け方・出し方（ハンドブック）ページ37～39　処理施設への搬入について（PDF）", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1001000001842/files/2026_037-039.pdf" },
    { label: "家電リサイクル", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1001000001963/index.html", updated: "2026年7月13日" },
    { label: "家庭用パソコンのリサイクル", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1001000001962/index.html", updated: "2026年7月21日" },
    { label: "無許可の回収業者にご注意を！（リユースできない廃家電、粗大ごみ、引越・片づけごみ等）", org: "いわき市", url: "https://www.city.iwaki.lg.jp/www/contents/1785980421066/index.html" },
    { label: "お助けうさぎ「ご利用可能なエリア」（福島県の市区町村一覧が掲載されていないことの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    { label: "お助けうさぎ「福島県の不用品回収」（市区町村ごとの対応一覧が掲載されていないことの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/fukushima/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaIwakiPage() {
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
