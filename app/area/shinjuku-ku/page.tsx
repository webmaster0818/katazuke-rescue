import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "新宿区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13104/", count: 221 },
  curama: { url: "https://curama.jp/disposal/tokyo/4/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/shinjuku" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "shinjuku-ku",
  name: "新宿区",
  title: "新宿区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみの手数料と多量ごみの出し方【2026年版】",
  description:
    "新宿区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を比較。粗大ごみ受付センターの申込方法、手数料（400円〜3,200円の例）、45リットル袋4袋以上の多量ごみの扱い、区が収集できない品目と家電4品目の出し方を公式ページで確認してまとめています。",
  ogDescription:
    "新宿区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみの申込方法・手数料、多量ごみの扱い、区が収集できない品目を区の公式ページで確認してまとめています。",
  h1: "新宿区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "新宿区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["新宿区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "新宿区では、一辺の長さがおおむね30cmを超える家具・寝具・電気製品などが粗大ごみで、出すには新宿区粗大ごみ受付センターへの有料の事前申し込みが必要です。引越しや部屋の片付けで家庭から一度に45リットル袋4袋以上のごみを出す場合は有料になり、10日位前までに清掃事務所へ問い合わせるよう区は案内しています。集合住宅が多い区では、粗大ごみの出し場所や運び出しの段取りも含めて計画することが大切です。",
    `本記事では、新宿区の公式ページで確認した粗大ごみの申込方法・手数料・多量ごみ・家電4品目の扱い（${CHECKED}確認）と、新宿区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、新宿区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      新宿区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで新宿区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは新宿区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に新宿区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「新宿区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "新宿区の粗大ごみ・多量ごみ・家電4品目（区の公式情報）",
  factsLead: (
    <>
      新宿区の粗大ごみは有料・事前申込制で、手数料は品目ごとに決まっています。区が収集できない品目と、一度に多量のごみを出すときの扱いもあわせて確認しておくと、業者に頼む範囲を決めやすくなります。
    </>
  ),
  facts: [
    { k: "申し込み", v: "新宿区粗大ごみ受付センター（電話 03-5304-8080、月曜〜土曜 8時〜19時）。インターネットは24時間受付。インターネットでの取消し・変更は収集日3日前の23時59分まで", src: "新宿区「粗大ごみの出し方」（最終更新日 2026年7月1日）" },
    { k: "粗大ごみの範囲", v: "日常生活に伴って生じた一辺の長さがおおむね30cmを超える家具、寝具、電気製品（家電リサイクル品以外）、自転車など。解体しても粗大ごみとして出す。箱物家具の中に入れた物は一緒に収集できない", src: "同上" },
    { k: "手数料", v: "品目ごとに決まる（例: 布団（掛・敷・こたつ） 400円、シングルベッド（ベッドマットを除く） 1,300円、ソファ3人掛け用 2,300円、両袖の机 3,200円）。箱物家具は最長辺と2番目に長い辺の合計で400円〜3,200円。処理券はA券200円・B券300円の組み合わせ。令和5年10月1日以降の申込み分から改定後の手数料", src: "新宿区「粗大ごみの処理手数料一覧」（最終更新日 2025年3月4日）" },
    { k: "処理券の購入場所", v: "「有料粗大ごみ処理券及び有料ごみ処理券取扱所」の標識があるコンビニエンスストア等、清掃事務所・清掃センター・各特別出張所・ごみ減量リサイクル課（区役所7階）", src: "新宿区「粗大ごみの出し方」" },
    { k: "出す場所", v: "受付の際に申し込んだ排出場所（一戸建ては玄関先や門前、集合住宅は1階の出口部分など）。粗大ごみを出す場所と資源・ごみを出す場所は異なる。集合住宅の粗大ごみ置き場に前もって出す場合は管理人などと相談する", src: "同上" },
    { k: "運び出し収集", v: "運び出しが困難な65歳以上のひとり暮らしの方や、障害のある方を対象に、粗大ごみの運び出し収集を行っている", src: "同上" },
    { k: "多量のごみ", v: "引越しや部屋の片付けなどで一度に多量のごみを出す場合は有料。家庭から一度に45リットル袋で4袋以上のごみを出す場合は、10日位前までに管轄の清掃事務所・清掃センターへ問い合わせる", src: "新宿区「多量ごみの出し方」（最終更新日 2016年4月1日）" },
    { k: "区が収集できない品目", v: "家電4品目（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）とパソコン。自動車・オートバイ・タイヤ・ピアノ・耐火金庫なども区では収集できず、専門業者を紹介するため管轄の清掃事務所・清掃センターに問い合わせる", src: "新宿区「粗大ごみの出し方」" },
    { k: "家電4品目の出し方", v: "買い替え時は新しい製品を買う販売店、処分のみは購入した販売店へ。販売店に引き渡せない場合は家電リサイクル受付センター（0570-08-7200）に申し込む。自分でメーカーの指定引取場所へ持ち込めば収集運搬料金はかからない", src: "新宿区「家電4品目（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）の出し方」（最終更新日 2024年4月1日）" },
  ],
  sections: [
    {
      id: "taryou-tsukaiwake",
      title: "新宿区で部屋ごと片付けるときの、区の収集と業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            新宿区の粗大ごみ手数料は品目ごとに400円から3,200円まであり、ベッドやソファ、大きな箱物家具が重なると合計額はすぐに数千円から1万円を超えます。粗大ごみの点数が少なく、指定の場所まで自分で運び出せるなら区の収集が費用を抑えやすい方法です。一方で、部屋ごとの片付けでは袋ごみも多くなり、45リットル袋4袋以上を一度に出すと多量ごみとして有料になり、10日位前までの問い合わせが必要です。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            退去日が決まっている部屋の片付けや、エレベーターのない集合住宅の上階からの運び出しが必要な場合は、袋ごみ・粗大ごみ・家電4品目をまとめて業者に頼み、区の収集を使う分と比べて総額で判断してください。ピアノや耐火金庫のように区が収集できない品目は、区が清掃事務所で専門業者を紹介していますが、片付け業者が対応するかどうかは業者ごとに異なるため、見積もりの段階で品目を伝えて確認します。集合住宅の搬出の段取りは<Link href="/mansion-hanshutsu-dandori/" className={linkCls}>マンションからの搬出の段取り</Link>、ピアノ・金庫は<Link href="/piano-kinko-hanshutsu/" className={linkCls}>ピアノ・金庫の搬出</Link>、退去前の片付けは<Link href="/taikyo-katazuke/" className={linkCls}>退去前の片付け</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "dashibasho",
      title: "集合住宅の粗大ごみは出す場所と管理規約を先に確認する",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            新宿区は、粗大ごみを出す場所は資源・ごみの集積所とは異なり、集合住宅では建物の1階入口付近など建物で指定された場所に出すよう案内しています。前もって粗大ごみ置き場に出す場合は、管理人などと相談し、氏名または受付番号の記載や収集日順の整理をするよう求めています。片付けで粗大ごみが多い場合は、出す日と場所を管理会社に先に伝えておくと、近隣とのトラブルを防げます。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼む場合も、作業の時間帯、共用部分の養生、エレベーターの使用、作業車を停める場所について、管理規約に沿って事前に確認しておく必要があります。見積もりの際にこれらの条件を伝え、追加料金の有無を確認してください。作業当日の立ち会いの要点は<Link href="/sagyou-toujitsu-tachiai/" className={linkCls}>作業当日の立ち会いガイド</Link>、業者の許可の確かめ方は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 粗大ごみの品目と袋ごみの量を書き出し、区で出せる分を見積もる", b: "粗大ごみは区の手数料一覧で品目ごとの金額を確かめ、袋ごみが一度に45リットル袋4袋以上になるかも確認します。区の収集で出す分の合計額と手間が、業者の見積もりと比べる基準になります。" },
    { t: "② 管理規約と搬出条件をそろえて、複数社に同じ条件で見積もりを取る", b: "部屋の写真、品目と点数、階数とエレベーターの有無、共用部の養生の要否、作業車を停められる場所を各社に同じ条件で伝えます。区が収集できない品目（ピアノ・耐火金庫など）が含まれる場合は必ず先に伝えてください。" },
    { t: "③ 許可・補償・総額の内訳を確認する", b: "家庭ごみの収集運搬の許可、買取がある場合の古物商許可、搬出時の破損に備えた補償の有無を確認し、作業費・処分費・家電リサイクル料金・追加料金の条件を内訳で受け取ってから依頼を確定します。" },
  ],
  faqs: [
    { q: "新宿区の粗大ごみはどこに申し込みますか？", a: "新宿区粗大ごみ受付センターに、電話（03-5304-8080、月曜〜土曜の8時〜19時）またはインターネット（24時間）で申し込みます。インターネットでの取消し・変更は収集日3日前の23時59分までです（2026年11月1日確認）。" },
    { q: "新宿区の粗大ごみの手数料はいくらですか？", a: "品目ごとに決まっており、例として布団は400円、シングルベッド（ベッドマットを除く）は1,300円、3人掛けのソファは2,300円、両袖の机は3,200円です。たんすや本棚などの箱物家具は、最長辺と2番目に長い辺の合計で400円から3,200円までに分かれます。処理券はA券（200円）とB券（300円）を組み合わせて貼ります。" },
    { q: "引越しで出るごみをまとめて新宿区に出せますか？", a: "新宿区は、引越しや部屋の片付けなどで一度に多量のごみを出す場合は有料になるとし、家庭から一度に45リットル袋で4袋以上のごみを出す場合は10日位前までに管轄の清掃事務所・清掃センターへ問い合わせるよう案内しています。期間に余裕がある場合は、何度かに分けて通常のルールで出すよう求めています。" },
    { q: "ピアノや耐火金庫は新宿区で処分できますか？", a: "新宿区は、自動車・オートバイ・タイヤ・ピアノ・耐火金庫などは区では収集できないとしています。専門業者を紹介するため、管轄の清掃事務所・清掃センターに問い合わせるよう案内しています。" },
    { q: "新宿区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、新宿区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
  ],
  matome: [
    "新宿区の粗大ごみは受付センターへの有料の事前申し込みで出し、手数料は品目ごとに400円から3,200円です。一度に45リットル袋4袋以上のごみは多量ごみとして有料になり、家電4品目・パソコンやピアノ・耐火金庫は区では収集できません。点数の少ない粗大ごみは区の収集、部屋ごとの片付けや運び出しが難しい場合は業者、という使い分けが基本です。",
    "業者に頼む場合は、新宿区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。集合住宅では管理規約に沿った搬出条件を見積もりの段階で伝え、総額の内訳と収集運搬の許可を確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00016.html", updated: "2026年7月1日" },
    { label: "粗大ごみの処理手数料一覧", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_05_00001.html", updated: "2025年3月4日" },
    { label: "多量ごみの出し方", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_04_00004.html", updated: "2016年4月1日" },
    { label: "家電4品目（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）の出し方", org: "新宿区", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00019.html", updated: "2024年4月1日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaShinjukuPage() {
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
