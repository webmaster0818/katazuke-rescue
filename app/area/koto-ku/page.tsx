import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "江東区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13108/", count: 224 },
  curama: { url: "https://curama.jp/disposal/tokyo/8/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/koto" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "koto-ku",
  name: "江東区",
  title: "江東区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみは収集のみで持ち込み不可、申込と手数料【2026年版】",
  description:
    "江東区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、江東区を対応エリアに含むことを公式で確認して比較。粗大ごみ受付センターの申込方法（電話・インターネット・LINE）、家庭の粗大ごみは持ち込みを受け付けていない点、手数料の決まり方、減免、運び出し収集、家電4品目・パソコンの出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "江東区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみの申込方法・手数料・減免・運び出し収集・家電4品目とパソコンの出し方を区の公式ページで確認してまとめています。",
  h1: "江東区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "江東区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["江東区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "江東区では、一辺がおおむね30cm以上の家具・布団・自転車などが粗大ごみで、有料・申し込み制です。区は家庭から出る粗大ごみの持ち込みを受け付けていないため、区の仕組みで出す方法は、粗大ごみ受付センターに申し込んで自宅前などから収集してもらう一つです。屋外まで運び出せない物が多い場合や、収集日まで待てない場合は、業者への依頼と組み合わせて計画することになります。",
    `本記事では、江東区の公式ページで確認した粗大ごみの申込方法・手数料・減免・運び出し収集・家電4品目とパソコンの扱い（${CHECKED}確認）と、江東区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、江東区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      江東区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで江東区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは江東区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に江東区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「江東区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "江東区の粗大ごみ・運び出し・家電4品目（区の公式情報）",
  factsLead: (
    <>
      江東区の粗大ごみは有料・申し込み制で、申し込み先は江東区粗大ごみ受付センターです。事業活動で出た粗大ごみは区では収集しません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "江東区粗大ごみ受付センター。インターネットとLINEミニアプリは24時間受付、電話（03-6431-9997）は月曜〜土曜の8時〜19時（年末年始を除く）。収集予定日の2日前からの変更は江東区粗大ごみ業務センター（03-6666-0562）に連絡する", src: "江東区「粗大ごみの出し方」（更新日 2026年2月18日）" },
    { k: "手数料の決まり方", v: "A券（200円）とB券（300円）の粗大ごみシールを品目ごとに組み合わせて貼る。分解できる箱物家具は分解前の寸法が基準で、箱物家具は高さと幅の合計で料金が決まる。重さが50kgを超えると区で回収できない場合がある", src: "江東区「粗大ごみ手数料・シール組合せ表」（更新日 2025年1月7日）" },
    { k: "支払い", v: "申し込み時に案内された料金分の有料粗大ごみ処理券を、区内の取扱所の標識がある店、区内のコンビニエンスストア（一部を除く）、区役所の清掃リサイクル課、江東区清掃事務所で購入する。区内の出張所・文化センター・スポーツセンターでの販売は令和5年9月末で終了", src: "江東区「粗大ごみの出し方」" },
    { k: "持ち込み", v: "家庭から出る粗大ごみの持ち込みは受け付けておらず、粗大ごみ受付センターへの収集の申し込みとなる", src: "江東区「よくあるご質問」（更新日 2024年3月15日）、同「清掃工場等に自分で持ち込む場合」（更新日 2024年11月29日）" },
    { k: "自転車の持ち込み事業", v: "不要な自転車をリユースする持ち込み事業を2026年11月28日（土曜）9時〜12時に実施（先着200台・一人1台、事前申込は11月9日9時〜11月25日17時）。令和8年度は2027年1月16日・3月20日も予定", src: "江東区「不要になった自転車の持ち込み事業を行います」（更新日 2026年11月1日）" },
    { k: "減免制度", v: "生活保護・児童扶養手当・特別児童扶養手当の受給者などが対象。インターネットでは申請できず、電話で粗大ごみ受付センターに申し込み、申請書と証明書類を回収日の3日前までに清掃事務所へ返送する。天災を受けた方・生活保護受給者などは免除、火災等の災害を受けた方は9割減免", src: "江東区「粗大ごみ等の収集手数料の減免」（更新日 2024年3月21日）" },
    { k: "運び出し収集", v: "要介護2以上の方、65歳以上の方、身体障害者手帳をお持ちの方のみの世帯で、自ら屋内から運び出せない場合に、訪問調査のうえ屋内から運び出して収集する。引っ越しやリフォームで大量に出る場合、取り外しや解体が必要な場合、養生が必要な場合などは対象外", src: "江東区「粗大ごみの運び出し」（更新日 2024年11月29日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は清掃事務所で収集しない。買い替え先または購入した小売店に依頼し、分からない場合は家電リサイクル受付センター（0570-087200）に申し込む（取り外しには対応していない）。区内の指定引取場所は西濃運輸株式会社 江東指定引取場所（新木場1丁目11番15号）", src: "江東区「家電リサイクル法対象品の処分」（更新日 2026年5月12日）" },
    { k: "パソコン", v: "区は収集しない。PCリサイクルマーク付きはメーカーが無料で回収し、メーカー不明などはパソコン3R推進協会が回収する。区の協定事業者による宅配便回収（パソコン本体を含むと1箱分無料）もあり、東京都の補助事業で2026年10月23日〜2027年1月29日は先着8万台のデータ消去が無料", src: "江東区「家庭用パソコンの排出方法」（更新日 2026年10月30日）" },
  ],
  sections: [
    {
      id: "shushu-nomi",
      title: "江東区は粗大ごみの持ち込み不可。収集と業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            近隣の区には、自分で施設に運ぶと手数料が安くなる「持ち込み」の仕組みを設けている区もありますが、江東区は家庭の粗大ごみの持ち込みを受け付けていません。区の仕組みで出す場合は、受付センターに申し込み、収集日の朝8時までに自宅前やマンションの入口付近など申し込んだ場所に出す形になります。屋外まで出すのは原則として自分で行う必要があるため、高層階からの大型家具の搬出や、点数の多い片付けでは負担が大きくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            要介護2以上・65歳以上・身体障害者手帳をお持ちの方のみの世帯には、区の運び出し収集がありますが、引っ越しやリフォームでの大量の排出、解体や養生が必要な場合は対象外です。区の収集で出せる物は区に出し、運び出しの難しい物や量の多い片付けを業者に頼む、という組み合わせが現実的です。箱物家具は分解前の寸法で料金が決まるため、解体しても区の手数料は下がりません。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、大きさの基準は<Link href="/sodaigomi-size-kijun/" className={linkCls}>粗大ごみのサイズ基準</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "reuse-gyousha",
      title: "区が勧めるリユースと、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            江東区は、まだ使える物が粗大ごみとして処分されているとして、出張買取の査定を複数の事業者から受けられるサービスや、地域の掲示板で譲れるサービスの運営事業者と協定を結び、リユースを勧めています。自転車については、リユースを目的とした持ち込み事業も年に数回行っています。処分費を払う前に、売れる物・譲れる物を先に分けておくと、区に出す点数も業者の見積もりも減らせます。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、買い取ってもらう物と処分する物を見積もりの段階で分けて示してもらい、処分する物の収集運搬をどの許可業者が行うかを確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 売れる物・譲れる物を先に分ける", b: "家具や家電のうちまだ使える物は、買取の査定やリユースに回せないかを先に確かめます。不要な自転車は、区の自転車持ち込み事業の日程も確認しておきます。" },
    { t: "② 区の収集で出す物と、業者に頼む物を分ける", b: "自分で屋外まで出せる物は受付センターに申し込んで収集してもらい、運び出しが難しい大型家具や量の多い片付けは業者に回します。収集予定日の2日前からの変更は粗大ごみ業務センターへの連絡になる点にも注意します。" },
    { t: "③ 写真と品目リストで複数社に見積もりを取り、内訳と許可を確認する", b: "部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を同じ条件で伝え、買取と処分を分けた内訳、処分分の収集運搬を行う許可業者、追加料金の条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "江東区の粗大ごみはどこに申し込みますか？", a: "江東区粗大ごみ受付センターに、インターネット（24時間）、LINEミニアプリ（24時間）、電話（03-6431-9997、月曜〜土曜の8時〜19時、年末年始を除く）で申し込みます。申し込み時に料金が案内されるので、その分の有料粗大ごみ処理券を購入して貼ります（2026年11月1日確認）。" },
    { q: "江東区で粗大ごみを自分で持ち込めますか？", a: "江東区は、家庭から出る粗大ごみの持ち込みを受け付けていません。粗大ごみ受付センターに収集を申し込んでください。なお、不要な自転車はリユースを目的とした区の持ち込み事業（事前申込制）で出せる日があります。" },
    { q: "家具を分解すれば粗大ごみの料金は安くなりますか？", a: "江東区の案内では、分解できる箱物家具（棚やラックなど）の寸法は分解前のものが基準です。分解して出すこともできますが、バラバラにならないよう紐などでまとめる必要があります。" },
    { q: "江東区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、江東区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "粗大ごみの手数料の減免はどう申し込みますか？", a: "生活保護・児童扶養手当・特別児童扶養手当の受給者などが対象で、インターネットでは申請できません。電話で粗大ごみ受付センターに減免対象であることを伝えると申請書類が届くので、記入した申請書と証明書類を回収日の3日前までに江東区清掃事務所へ返送します。" },
  ],
  matome: [
    "江東区の粗大ごみは、受付センター（インターネット・LINE・電話）に申し込んで収集してもらう方法のみで、家庭の粗大ごみの持ち込みは受け付けていません。箱物家具は分解前の寸法で料金が決まり、屋外への運び出しは原則として自分で行うため、点数の多い片付けや運び出しが難しい大型品は業者との組み合わせが基本です。",
    "業者に頼む場合は、江東区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が勧めるリユースで先に点数を減らし、買取と処分を分けた内訳と収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ（カテゴリページ）", org: "江東区", url: "https://www.city.koto.lg.jp/kurashi/gomi/kate/sodaigomi/index.html" },
    { label: "粗大ごみの出し方", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/kate/sodaigomi/7367.html", updated: "2026年2月18日" },
    { label: "粗大ごみ手数料・シール組合せ表", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/kate/sodaigomi/7368.html", updated: "2025年1月7日" },
    { label: "粗大ごみ等の収集手数料の減免", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/kate/sodaigomi/7370.html", updated: "2024年3月21日" },
    { label: "粗大ごみの運び出し", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/kate/sodaigomi/7371.html", updated: "2024年11月29日" },
    { label: "よくあるご質問（ごみ）", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/shitumon.html", updated: "2024年3月15日" },
    { label: "清掃工場等に自分で持ち込む場合", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/jigyo/7353.html", updated: "2024年11月29日" },
    { label: "不要になった自転車の持ち込み事業を行います", org: "江東区", url: "https://www.city.koto.lg.jp/388010/zitensyazigyou.html", updated: "2026年11月1日" },
    { label: "家電リサイクル法対象品の処分", org: "江東区", url: "https://www.city.koto.lg.jp/388010/kurashi/gomi/kate/7351.html", updated: "2026年5月12日" },
    { label: "家庭用パソコンの排出方法", org: "江東区", url: "https://www.city.koto.lg.jp/381104/kogatakadentakuhai.html", updated: "2026年10月30日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKotoPage() {
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
