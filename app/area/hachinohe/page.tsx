import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "八戸市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-2/city-2203/", count: 16 },
  curama: { url: "https://curama.jp/disposal/aomori/3/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/aomori/hachinohe" },
};

const d: AreaCityData = {
  slug: "hachinohe",
  name: "八戸市",
  title: "八戸市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは電話予約・処理券1枚520円、リサイクルプラザ持ち込みは50kgごとに150円【2026年版】",
  description:
    "八戸市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、八戸市を対応エリアに含むことを公式で確認して比較。粗大ごみの電話予約（一度に5点まで）と1枚520円の処理券、引越しなどで大量に出るごみの扱い、八戸清掃工場・八戸リサイクルプラザへの持ち込み（家庭系50kgまでごとに150円）、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  ogDescription:
    "八戸市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの予約・処理券、大量ごみの持ち込み、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  h1: "八戸市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "八戸市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["八戸市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "八戸市の粗大ごみは、粗大ごみ予約受付センターに電話で予約し、1個につき1枚の粗大ごみ処理券（520円）を貼って、市が指定した回収日の朝に玄関先などへ出す仕組みです。一度に出す量は5点までで、予約から回収まで1週間ほどかかります。引越しや荷物の整理で一度に大量のごみが出る場合は、ごみ処理施設に自分で持ち込むか、民間のごみ処理業者に運搬を依頼するよう市が案内しています。",
    `本記事では、八戸市の公式ページで確認した粗大ごみの予約方法と処理券、大量ごみの持ち込み先と料金、家電4品目・パソコンの扱い（${CHECKED}確認）と、八戸市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、八戸市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      八戸市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに八戸市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に青森県が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「八戸市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "八戸市の粗大ごみ・大量ごみの持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      八戸市では、タンス・ベッド・自転車などの大型の家具、物干し竿などの長いもの、45リットルの袋に入りきらないもの（ファンヒーター・電子レンジ・布団など）が粗大ごみです。テレビ・冷蔵庫・洗濯機・エアコンの家電4品目は粗大ごみの対象外です。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ予約受付センター（電話 0178-70-7155、ファックス 0178-70-7160）。受付は月曜〜金曜の8時30分〜16時30分（土日・祝日・年末年始は休み）。氏名・住所（回収場所）・粗大ごみの種類を伝えると、市が回収日を指定する。予約から回収まで1週間ほどかかる。令和8年11月から八戸市ごみ収集アプリに粗大ごみ予約受付機能が追加される予定", src: "八戸市「粗大ごみ(家庭から出るもの)」（更新日 2026年10月15日）" },
    { k: "点数・出し方", v: "一度に出す量は5点まで。原則1個につき処理券1枚（応接セットはソファーごと、ベッドはフレームとマットレスで計2枚。布団は2枚で1セットなど、まとめて1枚で出せる品目あり）。2人で運搬可能な重さ（大きさ）にし、回収予約をした日の朝8時までに、予約の際に指定した場所（玄関先など）へ出す。集積所には出さない", src: "八戸市「粗大ごみ(家庭から出るもの)」" },
    { k: "手数料・支払い", v: "八戸市粗大ごみ処理券 1枚520円。市内のスーパー・コンビニエンスストアなどの指定ごみ袋取扱店で購入し、名前を記入して粗大ごみに貼る", src: "八戸市「粗大ごみ(家庭から出るもの)」、同「家庭ごみの有料収集」（更新日 2024年12月6日）" },
    { k: "大量に出るごみ", v: "引越しや荷物の整理などで一度に大量のごみが出る場合は、ごみ処理施設に自分で持ち込むか、民間のごみ処理業者に運搬を依頼する。集積所に出せるのは1回の収集日につき2袋まで", src: "八戸市「引っ越しごみ・大量に出るごみ」（更新日 2026年7月1日）" },
    { k: "持ち込み", v: "燃やせるごみと布団・カーペットは八戸清掃工場（電話 0178-27-1351）、燃やせないごみ・粗大ごみは八戸リサイクルプラザ（電話 0178-70-2396）。いずれも月曜〜金曜の9時〜12時・13時〜17時（土日・祝日・年末年始は休み）。料金は家庭系で50kgまでごとに150円を現金で精算し、荷おろしは持ち込んだ人が行う。リサイクルプラザは粗大ごみと燃やせないごみの受入日が分かれている", src: "八戸市「引っ越しごみ・大量に出るごみ」" },
    { k: "持ち込めない物", v: "八戸リサイクルプラザには資源物・家電4品目・パソコンを持ち込めない。タイヤ・バッテリーなどの自動車部品、ガスボンベ・塗料などの危険物、農機具・除雪機などのエンジン付き機器、耐火金庫・ピアノ・畳などは市および広域事務組合のごみ処理施設で処理できないため、販売店（専門店）・メーカー等に相談する", src: "八戸市「引っ越しごみ・大量に出るごみ」、同「市では処理できないごみ」（更新日 2025年3月28日）" },
    { k: "業者に頼む場合", v: "自分で持ち込めない場合は、民間の一般廃棄物収集運搬業許可業者に運搬を依頼できる（運搬費用は業者に直接問い合わせ）。業者が分からない場合は八戸市一般廃棄物処理業者連絡協議会（電話 0178-20-9377、8時30分〜17時）に相談する。市長の許可を受けている事業者の名簿（令和8年10月5日時点）を市が掲載している", src: "八戸市「引っ越しごみ・大量に出るごみ」、同「一般廃棄物処理業者名簿」（更新日 2026年10月8日）" },
    { k: "家具・自転車の無償引取", v: "八戸リサイクルプラザでは、まだ使える家具と自転車に限り無償で引き取り、定期的な申込受付・抽選で必要としている人へ提供している", src: "八戸市「引っ越しごみ・大量に出るごみ」" },
    { k: "家電4品目", v: "市では収集していない。購入した店・買い替えをした店に引き取りを依頼する（リサイクル料金と引き取り運搬料金を販売店に支払う）か、郵便局でリサイクル料金を払い、市内2か所の指定引取場所（トーテツ資源株式会社、青森三八五流通株式会社 八戸支店）に持ち込む。自分で持ち込めない場合は、民間の廃棄物収集運搬業者に依頼する（別途運搬料金）", src: "八戸市「家電4品目（テレビ、エアコン、冷蔵庫、洗濯機）」（更新日 2025年2月3日）" },
    { k: "パソコン", v: "製造メーカーが自主回収しているため、メーカーに申し込み、送付されるゆうパック伝票で送る。小型家電回収ボックスの投入口（20cm×35cmまたは18cm×35cm）に入る大きさのパソコンは使用済小型家電として出せる", src: "八戸市「廃パソコン」（更新日 2022年5月2日）" },
  ],
  sections: [
    {
      id: "sodai-mochikomi",
      title: "八戸市の粗大ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            八戸市の粗大ごみは一度に5点までで、予約から回収まで1週間ほどかかります。家具の入れ替え程度なら粗大ごみの予約で足りますが、家一軒分や部屋ごとの片付けでは点数も日数も足りません。市は、引越しや荷物の整理で一度に大量のごみが出る場合は集積所に出さず（1回の収集日につき2袋まで）、ごみ処理施設に自分で持ち込むか、民間のごみ処理業者に運搬を依頼するよう案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、燃やせないごみ・粗大ごみは八戸リサイクルプラザ、燃やせるごみと布団・カーペットは八戸清掃工場に、家庭系で50kgまでごとに150円で持ち込めます。受付は平日のみで、荷おろしは自分で行い、家電4品目やパソコンは持ち込めません。まだ使える家具と自転車は八戸リサイクルプラザで無償で引き取ってもらえるため、使える物を先に分け、持ち込みと粗大ごみで減らせる分を減らしたうえで、残りの運び出しを業者に頼む組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "市が案内する許可業者と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            八戸市は、自分で持ち込めない場合の運搬先として民間の一般廃棄物収集運搬業許可業者を案内し、業者が分からない場合の相談先として八戸市一般廃棄物処理業者連絡協議会を挙げています。市長の許可を受けている事業者の名簿も市のページに掲載されています。家電4品目は市では収集しておらず、販売店に引き取りを頼むか、指定引取場所に持ち込むか、廃棄物収集運搬業者に依頼する方法になります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を行う許可業者を確認してください。家電4品目はリサイクル料金と運搬費が内訳で分かれているかも確かめておくと安心です。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 点数と期限から、粗大ごみの予約で間に合うかを判断する", b: "粗大ごみの品目と点数を書き出し、一度に5点まで・予約から回収まで1週間ほどの粗大ごみ収集で間に合うかを確かめます。間に合わない分は、清掃工場・リサイクルプラザへの持ち込みか、業者への依頼のどちらで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "八戸市の粗大ごみはどこに申し込みますか？", a: "粗大ごみ予約受付センター（電話 0178-70-7155、月曜〜金曜の8時30分〜16時30分、土日・祝日・年末年始は休み）に電話で予約します。回収日は市が指定し、予約から回収まで1週間ほどかかります。令和8年11月から八戸市ごみ収集アプリに予約受付機能が追加される予定です（2026年11月1日確認）。" },
    { q: "八戸市の粗大ごみの料金はいくらですか？", a: "原則として粗大ごみ1個につき、1枚520円の八戸市粗大ごみ処理券が1枚必要です。処理券は市内のスーパーやコンビニエンスストアなどの指定ごみ袋取扱店で購入し、名前を記入して貼ります。一度に出す量は5点までです。" },
    { q: "引越しで大量に出るごみはどうすればよいですか？", a: "八戸市は、引越しや荷物の整理などで一度に大量のごみが出る場合は、ごみ処理施設に自分で持ち込むか、民間のごみ処理業者に運搬を依頼するよう案内しています。集積所に出せるのは1回の収集日につき2袋までです。業者が分からない場合は八戸市一般廃棄物処理業者連絡協議会（0178-20-9377）に相談できます。" },
    { q: "八戸市でごみを自分で持ち込むといくらかかりますか？", a: "燃やせないごみ・粗大ごみは八戸リサイクルプラザ、燃やせるごみと布団・カーペットは八戸清掃工場に持ち込み、料金は家庭系で50kgまでごとに150円（現金精算）です。受付は月曜〜金曜の9時〜12時・13時〜17時で、家電4品目とパソコンはリサイクルプラザに持ち込めません。" },
    { q: "関東の記事で見たお助けうさぎは八戸市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、青森県は含まれていません（2026年11月1日確認）。本記事では、公式ページで八戸市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "八戸市の粗大ごみは電話で予約し、1個につき520円の処理券を貼って一度に5点まで出します。予約から回収まで1週間ほどかかるため、大量に出る場合は八戸リサイクルプラザ・八戸清掃工場への持ち込み（家庭系50kgまでごとに150円）や、許可業者への運搬依頼と使い分けるのが基本です。",
    "業者に頼む場合は、八戸市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。処分する物の収集運搬を行う許可業者と総額の内訳を、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ(家庭から出るもの)", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/gomi_recycle/5/8773.html", updated: "2026年10月15日" },
    { label: "家庭ごみの有料収集", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/gomi_recycle/2/9363.html", updated: "2024年12月6日" },
    { label: "引っ越しごみ・大量に出るごみ", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/gomi_recycle/5/8776.html", updated: "2026年7月1日" },
    { label: "市では処理できないごみ", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/gomi_recycle/5/9019.html", updated: "2025年3月28日" },
    { label: "一般廃棄物処理業者名簿", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/kogai_haikibutsu/1/10398.html", updated: "2026年10月8日" },
    { label: "家電4品目（テレビ、エアコン、冷蔵庫、洗濯機）", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/gomi_recycle/5/9017.html", updated: "2025年2月3日" },
    { label: "廃パソコン", org: "八戸市", url: "https://www.city.hachinohe.aomori.jp/kurashi_tetsuzuki/gomi_kankyo_pet/gomi_recycle/5/9016.html", updated: "2022年5月2日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（青森県が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaHachinohePage() {
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
            <li>
              <Link href="/area/yokosuka/" className="text-primary underline underline-offset-2">横須賀市のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
          </ul>
        </div>
      }
    />
  );
}
