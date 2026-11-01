import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "北区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13117/", count: 225 },
  curama: { url: "https://curama.jp/disposal/tokyo/17/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/kita" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "kita-ku",
  name: "北区",
  title: "北区でゴミ屋敷片付け・不用品回収を頼める業者｜粗大ごみ受付センターと浮間清掃事業所への持ち込み【2026年版】",
  description:
    "東京都北区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、北区を対応エリアに含むことを公式で確認して比較。粗大ごみ受付センターの申込方法、浮間清掃事業所への持ち込み（手数料はおおむね半額程度）、電子決済、運び出し収集、減免、家電4品目・パソコンの出し方と、区が家庭の不用品を回収できる許可を出していない点を区の公式ページで確認してまとめています。",
  ogDescription:
    "北区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・浮間清掃事業所への持ち込み・運び出し収集・減免・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "北区でゴミ屋敷片付け・不用品回収を頼める業者",
  breadcrumb: "北区で片付け・不用品回収を頼める業者",
  tags: ["北区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "東京都北区で粗大ごみを出す方法は、自宅の玄関前などで区が収集する方法と、浮間清掃事業所（北区浮間5-13-1）へ自分で持ち込む方法の二つで、どちらも粗大ごみ受付センターへの事前申し込みが必要です。持ち込みの手数料は目安としておおむね半額程度ですが、1回に持ち込めるのは10個まで、1世帯あたり年度内3回までで、荷降ろしも自分で行います。北区は、家庭からの不用品を回収できる許可を一切出していない（家電リサイクル法の対象6品目等を除く）と案内しているため、業者に片付けを頼む場合も、回収した物がどのように処分されるかを確かめることが大切です。",
    `本記事では、北区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・運び出し収集・減免・家電4品目とパソコンの扱い（${CHECKED}確認）と、北区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、北区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      北区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで北区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは北区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に北区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「北区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "北区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      北区では、縦・横・高さのいずれかの寸法がおおむね30cmを超える大型のごみが粗大ごみで、通常のごみ収集日には収集されません。収集も持ち込みも粗大ごみ受付センターへの申し込みが必要で、申し込みのない粗大ごみは収集・持ち込みできません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "北区粗大ごみ受付センター（電話 03-6746-5533、ナビダイヤル 0570-075-533、月曜日〜土曜日の8時〜19時、年末年始を除く）。インターネットは24時間受付。箱物家具やテーブルなど大きさで料金が変わる物は、あらかじめ寸法を測っておく", src: "北区「粗大ごみについて」（更新日 2026年8月19日）" },
    { k: "手数料の例", v: "令和5年10月1日の申し込みから改定。区の例では、布団・いす・掃除機・電子レンジ400円、自転車（16インチ以上、電動アシスト式を除く）・敷物900円、机（両そで机を除く）1,300円、ソファー（2人以上用）・オルガン2,300円、箱物家具（特大）3,200円", src: "北区「粗大ごみ料金改定（令和5年10月1日以降）」（更新日 2025年3月10日）" },
    { k: "支払い", v: "区内の販売店・コンビニエンスストア・スーパーマーケットなどで北区の有料粗大ごみ処理券（A券200円・B券300円）を購入して貼る。他の市区町村の券では収集できない。令和8年10月1日から、インターネットで収集を申し込む場合はクレジットカード（Visa・Mastercard・JCB・American Express・Diners Club）またはコード決済（PayPay・au PAY・d払い）でも支払える（電話申し込みと持ち込みは処理券）", src: "北区「粗大ごみについて」、同「粗大ごみ処理手数料の電子決済（キャッシュレス決済）サービスが始まりました」（更新日 2026年10月1日）" },
    { k: "収集", v: "収集日の朝8時までに自宅の玄関前（門前）に出す。集合住宅は粗大ごみ置き場か入口付近。地域のごみ集積所には出さない。8時からおおむね15時までに収集し、立ち会いは不要", src: "北区「粗大ごみについて」" },
    { k: "持ち込み", v: "浮間清掃事業所（北区浮間5-13-1）。月曜日〜土曜日（祝日を含む、年末年始を除く）の9時〜11時・13時〜15時。北区在住の申込者本人に限り、代理の方は不可、身分証明書を確認。2トン車までの自家用車（業務用を除く）またはレンタカー、荷降ろしは本人。1回10個まで、1世帯あたり年度内3回まで。手数料は目安としておおむね半額程度で、処理券を事前に購入して貼って持ち込む（持込場所では販売していない）", src: "北区「粗大ごみについて」" },
    { k: "運び出し収集", v: "65歳以上の方、または障害者の方のみで構成される世帯で、身近な人の協力が得られず運び出しが困難な場合に、作業員が室内からの運び出しを手伝う。1か月に1回・1品もしくは1,300円分まで、重量50kg以下、階段を通らないことなどが要件。要件を満たさない場合は、運び出しサービス（有料）を提供する民間団体（NPO法人 北くるり協議会、03-6903-5757）を利用するよう区は案内している", src: "北区「粗大ごみについて」" },
    { k: "減額・免除", v: "天災その他大規模災害・火災等の被害を受けた方、生活保護、児童扶養手当、特別児童扶養手当、老齢福祉年金、中国残留邦人等支援給付を受けている方が対象。粗大ごみ受付センターに電話で問い合わせる（インターネットでは申し込めない）", src: "北区「粗大ごみについて」" },
    { k: "多量のごみ", v: "引っ越しや部屋の片付けなどで45リットルのごみ袋5袋相当以上を出す場合は有料で、事前に清掃事務所（王子・赤羽地区 03-3913-3141、滝野川地区 03-3800-9191）に相談する。家庭から出たごみを自ら清掃工場や清掃事務所に持ち込むことはできない", src: "北区「一度に多量のごみを出す場合」（更新日 2025年2月7日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。買い替える小売店か購入した小売店に引き取りを依頼する、家電リサイクル受付センター（0570-087-200、月曜日〜金曜日の9時〜17時）に申し込む、またはメーカーの指定引取場所（上昇運輸 足立区南花畑、東亜物流 板橋営業所 板橋区舟渡）に自分で持ち込む", src: "北区「エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機（家電リサイクル法）」（更新日 2025年2月7日）" },
    { k: "パソコン", v: "区ではごみとして収集しない。区と連携協定を締結しているリネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含めば段ボール1箱分無料）、または各メーカー・パソコン3R推進協会に申し込む", src: "北区「家庭用パソコン」（更新日 2026年5月28日）" },
    { k: "不用品回収業者", v: "無料で回収すると言いながら積み込み後に料金を請求された、後から高額な運搬費やリサイクル料金を請求された、といったトラブルの例を挙げて注意を呼びかけ。北区では家庭からの不用品を回収できる許可を一切しておらず（家電リサイクル法の対象6品目等を除く）、産業廃棄物処理業の許可や貨物運送業の許可では家庭から出る不用品の回収は行えないとしている。まだ使える物は古物商の許可を持つ信用できる業者に中古買取を依頼するよう案内", src: "北区「違法な不用品回収業者にご注意ください」（更新日 2025年2月7日）" },
  ],
  guidanceFirst: {
      id: "kyoka-gyousha",
      title: "区が案内する不用品回収の許可と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            北区は、家庭から出る不用品を民間事業者が有料で収集する場合には一般廃棄物処理業の許可が必要であるうえで、区では家庭からの不用品を回収できる許可を一切していない（家電リサイクル法の対象6品目等を除く）と案内しています。産業廃棄物処理業の許可や貨物運送業の許可では家庭の不用品の回収は行えないとし、まだ使える物は古物商の許可を持つ信用できる業者に中古買取を依頼するよう勧めています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。区の粗大ごみ収集や家電リサイクルと組み合わせる提案になっているかも判断材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
  },
  sections: [
    {
      id: "ukima-mochikomi",
      title: "浮間清掃事業所への持ち込みと、収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            北区の持ち込みは、月曜日から土曜日（祝日を含む）の午前と午後に受け付けており、手数料は目安としておおむね半額程度です。正確な持込手数料は予約の時点で案内されます。ただし、持ち込めるのは北区在住の申込者本人だけで、1回10個まで、1世帯あたり年度内（4月から3月まで）3回までです。荷降ろしは自分で行い、持込場所では処理券を買えないため、事前に北区の処理券を用意しておく必要があります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            車で運べる物は持ち込み、玄関前や集合住宅の粗大ごみ置き場まで出せる物は収集、室内からの運び出しが難しい物や点数の多い片付けは業者、と分けるのが基本です。65歳以上の方や障害者の方のみの世帯は、要件を満たせば区の運び出し収集を使えますが、1か月に1品または1,300円分までです。引っ越しや片付けで45リットル袋5袋相当以上のごみを一度に出す場合は有料で、清掃事務所への事前相談が必要です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、自分で運ぶ場合の注意は<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区に出す物の手数料と出し方を確かめる", b: "出したい物の品目と点数を書き出し、粗大ごみ受付センターで収集日と手数料を確かめます。箱物家具やテーブルは大きさで料金が変わるため、寸法を測っておきます。車で運べる10個までの物は、浮間清掃事業所への持ち込みも検討します。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "北区の粗大ごみはどこに申し込みますか？", a: "北区粗大ごみ受付センターに、電話（03-6746-5533またはナビダイヤル0570-075-533、月曜日〜土曜日の8時〜19時）またはインターネット（24時間）で申し込みます。手数料分の北区有料粗大ごみ処理券を区内の販売店やコンビニエンスストアで購入します。2026年10月1日からは、インターネットで収集を申し込む場合に限り、クレジットカードやコード決済でも支払えます（2026年11月1日確認）。" },
    { q: "北区で粗大ごみを持ち込むといくらになりますか？", a: "浮間清掃事業所に持ち込む場合の手数料は、目安としておおむね半額程度で、正確な金額は予約の時点で案内されます。持ち込みも事前予約が必要で、北区在住の申込者本人に限り、1回10個まで、1世帯あたり年度内3回まで、荷降ろしは本人が行います。" },
    { q: "北区で不用品回収業者に家庭ごみを回収してもらってもよいですか？", a: "北区は、家庭からの不用品を回収できる許可を一切していない（家電リサイクル法の対象6品目等を除く）と案内し、違法な不用品回収業者によるトラブルに注意を呼びかけています。業者に片付けを頼む場合は、運び出しや買取と処分を分けた見積もりを受け取り、処分する物をどのように処理するのかを作業前に確認してください。" },
    { q: "北区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、北区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "北区で粗大ごみを室内から運び出してもらえますか？", a: "65歳以上の方、または障害者の方のみで構成される世帯で、身近な人の協力が得られない場合は、要件を満たせば区の作業員が運び出しを手伝います。1か月に1回、1品もしくは1,300円分まで、重量50kg以下、階段を通らないことなどが条件です。要件を満たさない場合、区は有料の運び出しサービスを提供するNPO法人 北くるり協議会を案内しています。" },
  ],
  matome: [
    "北区の粗大ごみは、受付センターへの事前申し込みのうえ、区の収集か浮間清掃事業所への持ち込み（手数料はおおむね半額程度、1回10個まで・年度内3回まで）で出します。家電4品目とパソコンは区では収集せず、小売店・家電リサイクル受付センター・リネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、北区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は家庭からの不用品を回収できる許可を出していないと案内しているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみについて", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002020/1002021.html", updated: "2026年8月19日" },
    { label: "粗大ごみ料金改定（令和5年10月1日以降）", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002020/1002026.html", updated: "2025年3月10日" },
    { label: "粗大ごみ処理手数料の電子決済（キャッシュレス決済）サービスが始まりました", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002020/1026311.html", updated: "2026年10月1日" },
    { label: "一度に多量のごみを出す場合", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002027/1002032.html", updated: "2025年2月7日" },
    { label: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機（家電リサイクル法）", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002040/1002050.html", updated: "2025年2月7日" },
    { label: "家庭用パソコン", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002040/1002051.html", updated: "2026年5月28日" },
    { label: "違法な不用品回収業者にご注意ください", org: "北区", url: "https://www.city.kita.lg.jp/living/bins/1018220/1002058.html", updated: "2025年2月7日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKitaPage() {
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
