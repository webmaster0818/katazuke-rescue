import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "吹田市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-27/city-27205/", count: 149 },
  curama: { url: "https://curama.jp/disposal/osaka/6/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/osaka/suita" },
};

const S = "https://www.city.suita.osaka.jp/kurashi/1018418";

const d: AreaCityData = {
  slug: "suita",
  name: "吹田市",
  title: "吹田市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜大型複雑ごみは月1回、引越しごみと破砕選別工場への持ち込み【2026年版】",
  description:
    "吹田市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。大型複雑ごみ（月1回・収集日に出すごみは無料）、引越しごみ（事前申込・軽トラック分2,500円から）、破砕選別工場への持ち込み（10kgまでごとに70円）、家電4品目を公式ページで確認してまとめています。",
  ogDescription:
    "吹田市を対応エリアに含む片付け・不用品回収業者3社と、大型複雑ごみの出し方、引越しごみ、破砕選別工場への持ち込み、家電4品目の出し方を市の公式ページで確認してまとめています。",
  h1: "吹田市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "吹田市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["吹田市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "吹田市では、いわゆる粗大ごみにあたる家具やふとんは「大型複雑ごみ」として月1回の収集日に出します。収集日に出したごみは無料で、市は「不用品」と貼り紙をしてそのまま出すよう案内しています。一方、引越しで一度に多くのごみを出す場合は、事前申込制で有料の「引越しごみ」となり、ごみを出す日の1か月前から2週間前までに電話で申し込む必要があります。",
    `本記事では、吹田市の公式ページで確認した大型複雑ごみと引越しごみの出し方、破砕選別工場への持ち込み、家電4品目・パソコンの扱い（${CHECKED}確認）と、吹田市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、吹田市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      吹田市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに吹田市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に大阪府が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「吹田市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "吹田市の大型複雑ごみ・引越しごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      吹田市のごみは12種に分別して出します。1番長い辺が60cm以上の家具などは大型複雑ごみ（月1回）、60cm四方未満の燃えないごみなどは小型複雑ごみ（月1回）です。引越しで出るごみは別の申込制の収集になり、家電4品目とパソコンは市の大型・小型複雑ごみとしては収集されません。
    </>
  ),
  facts: [
    { k: "大型複雑ごみ", v: "タンス、ふとん等、小型複雑ごみの大きさを超えるもの（1番長い辺が60cm以上のもの）。例: 木製家具、じゅうたん、ソファー、学習机、自転車、ベッド、こたつ、石油ストーブ・石油ファンヒーター（大小かかわらず）。月1回の収集日に「不用品」と貼り紙をしてそのまま出す", src: "吹田市「ごみのわけ方12種分別」（更新日 2026年10月9日）" },
    { k: "収集日・料金", v: "収集日は地域により異なり、収集日当日の午前8時までに所定の場所へ出す。収集日に出されたごみは無料（市は、ごみはできる限りごみ収集日（無料）に出すよう案内）", src: "吹田市「ごみの出し方」（更新日 2024年3月13日）、同「破砕選別工場へのごみの持込み」（更新日 2026年8月24日）" },
    { k: "引越しごみ", v: "事前申込制・有料。ごみを出す日の1か月前から2週間前までに事業課（06-6832-0026）へ電話で申し込む（メール・ファクスは原則不可）。吹田市内での転居と市外への転出が対象で、転入の際に持ち込んだ引越しごみは対象外。手数料は軽トラックで運搬できる量以下2,500円、2トン車以下5,000円、3.5トン車以下7,500円（それより多い場合は量に応じて増額）。納入通知書で、ごみを出す日の14日前までに金融機関かコンビニエンスストアで納付する。収集は1回のみで、出した日の翌日から3日間（日曜日を除く）のいずれかの日。立ち会いは不要だが、家の敷地内や屋内からの運び出しは行わない", src: "吹田市「引越しごみ」（更新日 2026年3月5日）" },
    { k: "持ち込み（大型複雑ごみなど）", v: "吹田市破砕選別工場。前日までに電話（06-6877-7515）で予約が必要。吹田市で発生した燃焼ごみ以外のごみ（大型複雑ごみ、小型複雑ごみ、資源ごみ、有害危険ごみ）で事業活動を伴わないものに限る。搬入は平日9時00分〜11時30分・12時45分〜15時30分、処分手数料は10kgまでごとに70円（現金またはPayPay）。吹田市に住民票のある本人が本人確認書類を持参し、荷下ろしも本人が行う。業者に持ち込みを依頼したごみ、家電リサイクル対象品、パソコン、廃バッテリー・廃タイヤ・建材などは持ち込めない", src: "吹田市「破砕選別工場へのごみの持込み」（更新日 2026年8月24日）" },
    { k: "持ち込み（燃焼ごみ）", v: "吹田市資源循環エネルギーセンター。事前に電話連絡（06-6877-3038）のうえ、市内で発生した燃焼ごみに限り受け入れ。一般家庭の燃焼ごみは10kgまでごとに70円。他人の一般廃棄物を市または市が許可した者以外が搬入することは廃棄物処理法に違反するとして、持ち込まないよう案内", src: "吹田市「ごみの臨時持込み(燃焼ごみ）」（更新日 2023年4月10日）" },
    { k: "市で収集できないもの", v: "たたみ、ブロック、バッテリー、消火器、タイヤ、耐火金庫、ピアノ、建具など。販売店または処理業者に問い合わせるよう案内し、処理業者による収集は有料で、業者により収集する品目や費用に違いがあるとしている", src: "吹田市「ごみのわけ方12種分別」" },
    { k: "家電4品目", v: "大型・小型複雑ごみとして収集できない。小売店への引き渡し、リサイクル料金を払って指定引取場所（日本通運 摂津・豊中）へ持ち込み、許可業者への依頼、市への依頼のいずれか。市に頼む場合は事前連絡が必要で、エアコンの取り外しや室内からの持ち出しは行わず、指定日に大型複雑ごみの排出場所まで出し立会いが必要。リサイクル券とは別に収集運搬料金（1台あたりエアコン・テレビ・洗濯機・衣類乾燥機3,500円、冷蔵庫等は250リットル以上5,000円・未満3,500円）がかかる", src: "吹田市「家電リサイクル法」（更新日 2026年5月14日）" },
    { k: "パソコン", v: "ごみとしては収集できない。PCリサイクルマーク付きはメーカーが無償で回収。マークがない場合などは、リネットジャパンの宅配回収（パソコンを含む1箱は無料、CRTモニターを含む場合などは有料）を利用できる", src: "吹田市「パソコンのリサイクル」（更新日 2023年10月25日）、同「パソコンの新しい処分方法」（更新日 2025年4月16日）" },
    { k: "不用品回収業者", v: "無料と思って頼んだら車に積んだ後で高額な料金を請求された、回収した物が不法投棄されていた、といった例を挙げて注意を呼びかけ。家庭から出る不用品を民間事業者が有料で収集するには一般廃棄物収集運搬業の許可が必要と案内", src: "吹田市「違法・悪質な不用品回収業者」（更新日 2022年9月21日）" },
    { k: "許可業者の一覧", v: "市は一般廃棄物収集運搬許可業者10社の一覧を、事業所から出る一般廃棄物の処理の依頼先として掲載。市で収集できないものの相談先としても、この一覧へのリンクを示している", src: "吹田市「吹田市一般廃棄物収集運搬許可業者」（更新日 2024年6月18日）、同「ごみのわけ方12種分別」" },
    { k: "ごみ出しの支援", v: "吹田市安心サポート収集: 65歳以上で要介護2以上の方、身体障がい1級・2級の方などで、ごみを排出場所まで持ち出すことが困難な世帯を対象に、市職員が週1回玄関先までごみを取りに行く。大型複雑ごみは、分解せず安全に玄関口から運び出せるものに限り、別途申し込みと協議が必要", src: "吹田市「吹田市安心サポート収集」（更新日 2024年6月6日）" },
  ],
  sections: [
    {
      id: "oogata-hikkoshi",
      title: "吹田市の大型複雑ごみ・引越しごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            吹田市の大型複雑ごみは、月1回の収集日に出せば無料です。家具の入れ替え程度なら、収集日に合わせて計画的に出すのが最も費用のかからない方法です。引越しで出るごみは、ごみを出す日の1か月前から2週間前までに電話で申し込む有料の引越しごみとなり、手数料は軽トラック分2,500円から量に応じて決まります。市は、引越しまでの分別収集日に計画的に出せれば手数料を抑えられると案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            引越しごみの収集は1回のみで、家の敷地内や屋内からの運び出しは行われません。自家用車で運べる物は、前日までに予約して破砕選別工場（10kgまでごとに70円）へ持ち込めますが、持ち込めるのは住民票のある本人で、業者に持ち込みを依頼したごみは受け入れられません。部屋からの運び出しが難しい大型家具や、収集日までに出し切れない量の片付けは、使える物をリユースに回したうえで、残りを業者に頼む組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、引越し前の片付けは<Link href="/hikkoshi-mae-danshari/" className={linkCls}>引越し前の断捨離</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "市が案内する不用品回収の許可と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            吹田市は、家庭から出る不用品を民間事業者が有料で収集するには一般廃棄物収集運搬業の許可が必要だと案内し、無料と思って頼んだら積み込み後に高額な料金を請求されたといった例を挙げて注意を呼びかけています。家電4品目を市に頼む場合の収集運搬料金（1台3,500円、250リットル以上の冷蔵庫等は5,000円）も公表されているため、業者の見積もりに含まれる家電の運搬費を比べる目安になります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を誰が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 期限と量から、収集日・引越しごみ・持ち込みで間に合うかを判断する", b: "大型複雑ごみの品目と量を書き出し、月1回の収集日で出し切れるかを確かめます。引越しなら引越しごみの申込期限（1か月前から2週間前まで）に間に合うか、自分で運べる物は破砕選別工場への持ち込みで減らせるかも検討します。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "吹田市で粗大ごみはどう出しますか？", a: "1番長い辺が60cm以上の家具やふとんなどは大型複雑ごみとして、地域ごとに決まった月1回の収集日の午前8時までに、「不用品」と貼り紙をして所定の場所に出します。収集日に出したごみは無料です（2026年11月1日確認）。" },
    { q: "吹田市で引越しのごみを一度に出せますか？", a: "引越しごみ（事前申込制・有料）として、ごみを出す日の1か月前から2週間前までに事業課（06-6832-0026）へ電話で申し込みます。手数料は軽トラックで運べる量以下で2,500円、2トン車以下で5,000円、3.5トン車以下で7,500円です。収集は1回のみで、屋内からの運び出しは行われません。" },
    { q: "吹田市でごみを自分で持ち込むといくらかかりますか？", a: "大型複雑ごみなど燃焼ごみ以外は破砕選別工場（前日までに電話予約）、燃焼ごみは資源循環エネルギーセンター（事前に電話連絡）に持ち込み、一般家庭のごみはいずれも10kgまでごとに70円です。破砕選別工場は吹田市に住民票のある本人の持ち込みに限られます。" },
    { q: "吹田市で冷蔵庫や洗濯機を処分するには？", a: "家電4品目は市の大型・小型複雑ごみとしては収集できません。小売店への引き渡し、指定引取場所への持ち込み、許可業者への依頼、市への依頼のいずれかで処分します。市に頼む場合はリサイクル券のほかに1台3,500円（250リットル以上の冷蔵庫等は5,000円）の収集運搬料金がかかります。" },
    { q: "関東の記事で見たお助けうさぎは吹田市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、大阪府は含まれていません（2026年11月1日確認）。本記事では、公式ページで吹田市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "吹田市の大型複雑ごみは月1回の収集日に出せば無料です。引越しで多く出る場合は事前申込制の引越しごみ（軽トラック分2,500円から）、自分で運べる物は破砕選別工場への持ち込み（10kgまでごとに70円）、と使い分けるのが基本です。",
    "業者に頼む場合は、吹田市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。市は家庭の不用品の有料収集には一般廃棄物収集運搬業の許可が必要と案内しているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "ごみのわけ方12種分別", org: "吹田市", url: `${S}/1020112/1015188.html`, updated: "2026年10月9日" },
    { label: "ごみの出し方", org: "吹田市", url: `${S}/1020112/1015183.html`, updated: "2024年3月13日" },
    { label: "引越しごみ", org: "吹田市", url: `${S}/1018419/1015147.html`, updated: "2026年3月5日" },
    { label: "破砕選別工場へのごみの持込み", org: "吹田市", url: `${S}/1018421/1018430/1015127.html`, updated: "2026年8月24日" },
    { label: "ごみの臨時持込み(燃焼ごみ）", org: "吹田市", url: `${S}/1018421/1018429/1015096.html`, updated: "2023年4月10日" },
    { label: "家電リサイクル法", org: "吹田市", url: `${S}/1018421/1015223.html`, updated: "2026年5月14日" },
    { label: "パソコンのリサイクル", org: "吹田市", url: `${S}/1018421/1015231.html`, updated: "2023年10月25日" },
    { label: "パソコンの新しい処分方法", org: "吹田市", url: `${S}/1018421/1002868.html`, updated: "2025年4月16日" },
    { label: "違法・悪質な不用品回収業者", org: "吹田市", url: `${S}/1018419/1018420/1015203.html`, updated: "2022年9月21日" },
    { label: "吹田市一般廃棄物収集運搬許可業者", org: "吹田市", url: "https://www.city.suita.osaka.jp/sangyo/1018079/1018080/1018082/1015224.html", updated: "2024年6月18日" },
    { label: "吹田市安心サポート収集", org: "吹田市", url: `${S}/1018419/1015157.html`, updated: "2024年6月6日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（大阪府が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaSuitaPage() {
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
