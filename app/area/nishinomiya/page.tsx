import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "西宮市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-28/city-28204/", count: 142 },
  curama: { url: "https://curama.jp/disposal/hyogo/5/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/hyogo/nishinomiya" },
};

const d: AreaCityData = {
  slug: "nishinomiya",
  name: "西宮市",
  title: "西宮市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみの予約と引越しごみの出し方【2026年版】",
  description:
    "西宮市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、西宮市を対応エリアに含むことを公式で確認して比較。粗大ごみの予約（電話・LINE）と処理券300円単位の料金、引越しなど一時的に多量なごみを市が収集しない点、東部総合処理センターへの持ち込み手数料、家電4品目の出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "西宮市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの予約・料金、引越しなど一時的に多量なごみの出し方、持ち込み手数料を市の公式ページで確認してまとめています。",
  h1: "西宮市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "西宮市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["西宮市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "西宮市で片付けを計画するときに押さえておきたいのは、市が「引越しや大掃除などで一時的に多量に出るごみは収集しない」と明記している点です。粗大ごみの収集は予約制で、市の案内では申し込みが集中しているため収集が約2〜3週間先になるとされています。家一軒分の片付けや退去前の片付けでは、市の収集だけで終わらせるのは難しく、持ち込みか許可業者・片付け業者への依頼を組み合わせることになります。",
    `本記事では、西宮市の公式ページで確認した粗大ごみの予約・料金・持ち込み・家電4品目の扱い（${CHECKED}確認）と、西宮市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、西宮市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      西宮市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに西宮市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に兵庫県が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「西宮市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "西宮市の粗大ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      西宮市の粗大ごみは申し込み予約制で、料金は品目ごとに決まっています。市が収集しないごみ（引越し・大掃除などの一時的に多量なごみ、一畳を超える物置など）と、持ち込みの手数料もあわせて確認しておくと、業者に頼む範囲を決めやすくなります。
    </>
  ),
  facts: [
    { k: "申し込み", v: "ごみ電話受付センター（電話 0798-33-6776）。受付は月曜〜金曜（祝日を含む）9時〜17時30分。市の公式LINEでも24時間申し込める（1回5品目まで、大きな物は1〜2品目までのものもある）。受付した当日の収集は行わない", src: "西宮市「粗大ごみの収集には、申し込み予約が必要です。」（ページの更新日 2026年7月24日）" },
    { k: "収集までの日数", v: "市の案内では、申し込みが殺到しているため約2〜3週間先の収集になるとしている", src: "同上" },
    { k: "料金", v: "品目ごとの料金表で決まる（例: 椅子 300円、食卓テーブル 600円、応接椅子大（2人掛以上） 900円）。粗大ごみ処理券（シール）は1枚300円で、申し込んだ料金分を取扱店（コンビニ・スーパー・支所など）で購入。LINE申込は令和7年10月22日からクレジットカード・PayPayで支払える", src: "西宮市「粗大（大型）ごみ料金表」（ページの更新日 2026年4月24日）、同「粗大ごみの収集には、申し込み予約が必要です。」" },
    { k: "粗大ごみの目安・量", v: "重量5kg以上のもの、1枚の指定袋に入らないもの（棒状は1m以上）。一度に申し込める量は学習机2台分程度", src: "同上" },
    { k: "出し方", v: "申し込み時に指定された収集場所へ当日の朝8時までに出す。屋内や敷地内・ガレージからの運び出しは行わない", src: "同上" },
    { k: "市が収集しないごみ", v: "引越し・大掃除・植木剪定などの一時的に多量なごみ、家屋造作・廃材、一畳を超える物置、事業活動に伴うごみ。家電リサイクル対象品目は収集も処分もしない", src: "西宮市「引越しのごみや大掃除のごみはマナーを守って処分しましょう」（ページの更新日 2026年10月16日）" },
    { k: "多量ごみの処理方法", v: "自分で東部総合処理センターへ持ち込む（前日までにごみ電話受付センター 0798-22-6600 に予約、搬入は月曜〜土曜（祝日を含む）、粗大ごみ・もやさないごみは8時〜15時30分）か、許可業者に依頼する（問い合わせ先: にしのみや環境サポート協同組合 0798-36-7806）", src: "同上" },
    { k: "持ち込み手数料", v: "令和8年4月1日から、持ち込み先は東部総合処理センター。手数料は持ち込んだごみの総重量で50kgまで450円、超える場合は10kgまでごとに90円加算。もやすごみを含むすべてのごみ種が有料", src: "西宮市「ごみの持込みについて【一般家庭の方】」（ページの更新日 2026年10月30日）" },
    { k: "家電4品目・パソコン", v: "市の粗大ごみ・もやさないごみでの収集や処理センターへの持ち込みはできない。買い替え時は販売店、処分のみの場合は「西宮電化商組合」の加盟店（義務外品引取協力店）に依頼するか、郵便局でリサイクル料金を払って指定取引場所（株式会社善商）へ直接搬入する", src: "西宮市「エアコン・テレビ・冷蔵（凍）庫・洗濯機・衣類乾燥機の処分」（ページの更新日 2026年7月15日）" },
    { k: "無許可の回収業者", v: "家庭から廃棄物を回収するには一般廃棄物処理業の許可が必要で、無許可業者による不法投棄・高額請求の事例があるとして、利用しないよう呼びかけている", src: "西宮市「引越しのごみや大掃除のごみはマナーを守って処分しましょう」" },
  ],
  sections: [
    {
      id: "taryou-gomi",
      title: "西宮市で家一軒分・引越しの片付けをするときの段取り",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            西宮市の粗大ごみ収集は、1回の申し込みが学習机2台分程度までで、収集は約2〜3週間先です。さらに市は、引越しや大掃除で一時的に多量に出るごみは収集しないと明記しています。退去日や引き渡し日が決まっている片付けでは、粗大ごみの予約だけで間に合わせようとせず、早い段階で次の三つを組み合わせる計画を立ててください。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] leading-8 text-text-secondary mb-4">
            <li>自家用車で運べる物は、前日までに予約して東部総合処理センターへ持ち込む（50kgまで450円、以降10kgまでごとに90円）</li>
            <li>市の許可業者に収集を依頼する（問い合わせ先は市が案内する、にしのみや環境サポート協同組合）</li>
            <li>部屋からの運び出し・仕分け・買取まで任せたい場合は、片付け業者に見積もりを取り、収集運搬を行う許可業者を確認する</li>
          </ul>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            市の収集は屋内や敷地内からの運び出しを行わないため、2階の部屋の大型家具や、玄関先まで出せない物が多い場合は、業者に運び出しを含めて頼むほうが現実的です。費用を抑えたい場合は、軽い物・自分で運べる物は持ち込みで先に減らし、運び出しが必要な大型品だけを業者に頼む組み合わせが有効です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、引越し前の減らし方は<Link href="/hikkoshi-mae-danshari/" className={linkCls}>引越し前の断捨離</Link>、退去前の片付けは<Link href="/taikyo-katazuke/" className={linkCls}>退去前の片付け</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden",
      title: "家電4品目は市に出せない。西宮市が案内する3つの出し先",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            エアコン・テレビ・冷蔵庫（冷凍庫）・洗濯機・衣類乾燥機と家庭用パソコンは、西宮市の収集にも処理センターへの持ち込みにも出せません。市は、買い替えなら販売店、処分のみなら「西宮電化商組合」加盟の義務外品引取協力店、自分で運べるなら郵便局でリサイクル料金を払ったうえで指定取引場所（株式会社善商）へ直接搬入、という出し先を案内しています。指定取引場所へ自分で運ぶ場合は収集運搬料金がかかりません。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が見積もりの内訳に分けて書かれているかを確認してください。冷蔵庫・洗濯機の処分前の準備は<Link href="/reizouko-sentakuki-shobun-junbi/" className={linkCls}>冷蔵庫・洗濯機を処分する前の準備</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 期限と量から、市の収集で間に合うかを判断する", b: "粗大ごみの収集は約2〜3週間先で、1回の申し込みは学習机2台分程度までです。退去日などの期限と粗大ごみの点数を書き出し、市の収集・持ち込み・業者のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 業者に頼む範囲の写真と品目リストをそろえる", b: "運び出しが必要な大型家具、家電4品目、袋に詰めた片付けごみの量などを、部屋の写真と品目リストにまとめます。階数・エレベーターの有無・作業車を停められる場所も同じ条件で各社に伝えると、見積もりの差が比べやすくなります。" },
    { t: "③ 許可と総額の内訳を確認する", b: "西宮市は、家庭の廃棄物の回収には一般廃棄物処理業の許可が必要だとして、無許可業者を利用しないよう呼びかけています。見積もりの段階で収集運搬を行う許可業者を確認し、作業費・処分費・家電リサイクル料金・追加料金の条件を内訳で受け取ってください。" },
  ],
  faqs: [
    { q: "西宮市の粗大ごみはどのくらい先に収集されますか？", a: "西宮市の公式ページでは、申し込みが殺到しているため約2〜3週間先の収集になると案内されています（2026年11月1日確認）。受付した当日の収集は行っていません。期限のある片付けでは、早めに予約するか、持ち込みや業者への依頼を組み合わせてください。" },
    { q: "西宮市の粗大ごみの料金はいくらですか？", a: "品目ごとの料金表で決まり、例として椅子は300円、食卓テーブルは600円、2人掛以上の応接椅子は900円です。粗大ごみ処理券は1枚300円で、申し込んだ料金分の枚数を取扱店で購入して貼ります。LINEで申し込む場合はクレジットカードやPayPayでも支払えます。" },
    { q: "引越しで出るごみをまとめて西宮市に出せますか？", a: "西宮市は、引越しや大掃除などで一時的に多量に出るごみは収集しないと案内しています。自分で東部総合処理センターへ持ち込む（前日までに予約）か、許可業者に依頼する方法が案内されており、許可業者の問い合わせ先として、にしのみや環境サポート協同組合（0798-36-7806）が示されています。" },
    { q: "東部総合処理センターへの持ち込みはいくらかかりますか？", a: "令和8年4月1日から、持ち込んだごみの総重量で50kgまで450円、50kgを超える場合は10kgまでごとに90円が加算されます。粗大ごみ以外のもやすごみなども含め、持ち込むすべてのごみ種が有料です。持ち込みには前日までの予約が必要です。" },
    { q: "関東の記事で見たお助けうさぎは西宮市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、兵庫県は含まれていません（2026年11月1日確認）。本記事では、公式ページで西宮市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "西宮市の粗大ごみは予約制で収集まで約2〜3週間かかり、引越しなどの一時的に多量なごみは市が収集しません。少量なら市の収集、自分で運べる量なら東部総合処理センターへの持ち込み、多量の片付けや運び出しが必要な場合は許可業者や片付け業者、という使い分けが基本です。",
    "業者に頼む場合は、西宮市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。収集運搬を行う許可業者と総額の内訳を、見積もりの段階で確認しておくことが大切です。",
  ],
  sources: [
    { label: "粗大ごみの収集には、申し込み予約が必要です。", org: "西宮市", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/seikatsugomi/moshikomi.html", updated: "2026年7月24日" },
    { label: "粗大（大型）ごみ料金表", org: "西宮市", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/seikatsugomi/ryokinhyo.html", updated: "2026年4月24日" },
    { label: "引越しのごみや大掃除のごみはマナーを守って処分しましょう", org: "西宮市", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/seikatsugomi/hikkoshigomi.html", updated: "2026年10月16日" },
    { label: "ごみの持込みについて【一般家庭の方】", org: "西宮市", url: "https://www.nishi.or.jp/kurashi/gomi/shisetsu/nishi-shori.html", updated: "2026年10月30日" },
    { label: "エアコン・テレビ・冷蔵（凍）庫・洗濯機・衣類乾燥機の処分", org: "西宮市", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/seikatsugomi/eakon-tv-shobun.html", updated: "2026年7月15日" },
    { label: "お助けうさぎ「対応エリア」（兵庫県が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaNishinomiyaPage() {
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
              <Link href="/area/chiba/" className="text-primary underline underline-offset-2">千葉のゴミ屋敷片付け・不用品回収業者おすすめ2選</Link>
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
              <Link href="/area/nara/" className="text-primary underline underline-offset-2">奈良のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/nerima-ku/" className="text-primary underline underline-offset-2">練馬区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/niigata/" className="text-primary underline underline-offset-2">新潟のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
