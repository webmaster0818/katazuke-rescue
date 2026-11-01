import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "世田谷区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13112/", count: 224 },
  curama: { url: "https://curama.jp/disposal/tokyo/12/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/setagaya" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "setagaya-ku",
  name: "世田谷区",
  title: "世田谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターと持ち込みの手数料【2026年版】",
  description:
    "世田谷区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、世田谷区を対応エリアに含むことを公式で確認して比較。世田谷区粗大ごみ受付センターの申込方法、手数料が解体前の大きさで決まる点、船橋粗大ごみ中継所への持ち込み（収集の半額程度）、減免制度、家電4品目の出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "世田谷区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・持ち込みの手数料・減免制度・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "世田谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "世田谷区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["世田谷区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "世田谷区で粗大ごみを出す方法は、自宅前からの収集と、区が指定する船橋粗大ごみ中継所への持ち込みの二つで、どちらも世田谷区粗大ごみ受付センターへの事前申し込みが必要です。持ち込みの手数料は収集の半額程度ですが、持ち込める日は土曜・日曜のうち指定された日に限られ、1回10個までという条件があります。家一軒分の片付けや運び出しが難しい大型家具がある場合は、業者への依頼と組み合わせて計画することになります。",
    `本記事では、世田谷区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・減免・家電4品目の扱い（${CHECKED}確認）と、世田谷区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、世田谷区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      世田谷区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで世田谷区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは世田谷区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に世田谷区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「世田谷区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "世田谷区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      世田谷区では一辺の長さが30cmを超えるものが粗大ごみです。収集も持ち込みも有料・事前申込制で、申し込み先は世田谷区粗大ごみ受付センターに一本化されています。
    </>
  ),
  facts: [
    { k: "申し込み", v: "世田谷区粗大ごみ受付センター（電話 03-5715-1133、月曜〜土曜 8時〜19時、祝日も受付・日曜と年末年始を除く）。インターネットは24時間（定期メンテナンス時を除く）、チャットボットでも申し込める。事業活動で生じたごみは申し込めない", src: "世田谷区「粗大ごみの出し方」（最終更新日 2026年5月25日）、同「粗大ごみの処理手数料について」" },
    { k: "手数料の決まり方", v: "品目ごとに決まり、申し込み時に案内される。原則として解体前の大きさで決まり、解体が可能なもの（スチール製の棚、ベッド、タンス、テーブル等）を解体しても手数料は変わらない", src: "世田谷区「粗大ごみの処理手数料について」（最終更新日 2025年2月19日）" },
    { k: "支払い", v: "コンビニエンスストア等で世田谷区の有料粗大ごみ処理券を購入して貼る。インターネット・チャットボット、携帯電話・スマートフォンからの電話申し込みではオンライン決済も使える（固定電話は不可）", src: "世田谷区「粗大ごみの出し方」" },
    { k: "持ち込み", v: "船橋粗大ごみ中継所（世田谷区船橋7丁目21番15号）。土曜・日曜のうち申し込み時に指定された日の9時〜正午、13時〜15時30分。1世帯1日1回・1回10個まで、荷下ろしは本人。手数料は収集の半額程度。受け入れ量に限りがあり、希望の日程に添えない場合がある", src: "世田谷区「粗大ごみの持ち込みについて」（最終更新日 2026年7月9日）" },
    { k: "減免制度", v: "児童扶養手当・特別児童扶養手当・老齢福祉年金の受給者、天災や火災等の災害を受けた方などは、粗大ごみと一度に大量（概ね45リットルの袋で4袋以上）または臨時に出すごみの手数料が減額または免除になる。事前申請が必要", src: "世田谷区「粗大ごみ・臨時ごみ処理手数料等の減免」（最終更新日 2026年4月1日）" },
    { k: "家電4品目・パソコン", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・乾燥機は購入店または買い替え店に引き取りを依頼するか、家電リサイクル受付センター（0570-087200）に申し込む。パソコンは各メーカー、メーカー不明のものはパソコン3R推進協会。持ち込みの対象にも含まれない", src: "世田谷区「粗大ごみなどの処分に違法な不用品回収業者を利用しないでください」（最終更新日 2024年9月27日）、同「粗大ごみの持ち込みについて」" },
    { k: "違法な回収業者", v: "「無料で回収」と宣伝しながら積み込み後に料金を請求する例や、不法投棄・有害物質を除去しない海外売却の例を挙げ、利用しないよう呼びかけ。業者とのトラブルは世田谷区消費生活センター（03-3410-6522）が相談先", src: "世田谷区「粗大ごみなどの処分に違法な不用品回収業者を利用しないでください」" },
    { k: "リユース", v: "株式会社ジモティーと提携し、エコプラザ用賀でまだ使えるものを無償で引き取るリユース事業を実施", src: "同上、世田谷区「粗大ごみの出し方」" },
  ],
  sections: [
    {
      id: "mochikomi-tsukaiwake",
      title: "世田谷区の収集・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車があり、土日に時間を取れるなら、船橋粗大ごみ中継所への持ち込みは手数料が収集の半額程度で済む選択肢です。ただし1世帯1日1回・1回10個まで、受け入れ量にも限りがあるため、家一軒分の片付けを持ち込みだけで済ませるのは現実的ではありません。点数の多い片付けは、持ち込みと収集で減らせる分を先に減らし、残る大型家具や運び出しの難しい物を業者に頼む組み合わせが基本になります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            手数料は解体前の大きさで決まるため、ベッドやタンスを解体して小さくしても区の手数料は下がりません。解体に手間をかけるより、区に出す物と業者に任せる物を品目ごとに分けて考えるほうが効率的です。また、一度に大量（概ね45リットルの袋で4袋以上）のごみは臨時ごみとして扱われる場合があるため、片付けで出る袋ごみの量が多いときは、区の案内に沿って出し方を確認してください。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、各自治体の手数料の比べ方は<Link href="/sodaigomi-tesuryou-hikaku/" className={linkCls}>粗大ごみ手数料の比較</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "ihou-gyousha",
      title: "区が注意を呼びかける不用品回収業者と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            世田谷区は、トラックで回りながら「無料で回収」とうたう業者やポストに入るチラシの業者について、積み込み後に料金を請求された例や、回収した物の不法投棄・海外への売却による環境汚染の例を挙げて、利用しないよう呼びかけています。一方で、まだ使える物をリユース目的で譲渡する場合は処理業の許可は不要とし、リユースショップの活用を勧めています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、買い取ってもらう物（リユース）と処分する物（廃棄物）を見積もりの段階で分けて示してもらい、処分する物の収集運搬をどの許可業者が行うかを確認してください。契約や料金でトラブルになったときは、世田谷区消費生活センターが相談先として案内されています。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区の収集・持ち込みで出せる物と、業者に頼む物を分ける", b: "粗大ごみの品目と点数を書き出し、受付センターのインターネット受付で手数料を確かめます。土日に車で運べる10個までなら持ち込み、玄関先まで出せる物は収集、運び出しが難しい物や点数の多い片付けは業者、と割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。住宅街で車両を停めにくい場合は、離れた場所から運ぶ前提の料金になっているかも確認してください。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "世田谷区の粗大ごみはどこに申し込みますか？", a: "世田谷区粗大ごみ受付センターに、電話（03-5715-1133、月曜〜土曜の8時〜19時、祝日も受付）、インターネット（24時間）、チャットボットで申し込みます。手数料は申し込み時に案内され、有料粗大ごみ処理券をコンビニエンスストア等で購入するか、オンライン決済で支払います（2026年11月1日確認）。" },
    { q: "世田谷区で粗大ごみを持ち込むと安くなりますか？", a: "区の案内では、船橋粗大ごみ中継所に持ち込む場合の手数料は収集の半額程度です。持ち込みも事前申し込みが必要で、土曜・日曜のうち指定された日に、1世帯1日1回・1回10個まで持ち込めます。受け入れ量に限りがあり、希望の日程に添えない場合があります。" },
    { q: "ベッドやタンスを解体すれば、区の手数料は安くなりますか？", a: "世田谷区の粗大ごみ手数料は、原則として解体前の大きさで決まります。スチール製の棚、ベッド、タンス、テーブル等を解体しても手数料は変わらないと区は案内しています。" },
    { q: "世田谷区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、世田谷区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "世田谷区では、児童扶養手当・特別児童扶養手当・老齢福祉年金の受給者、天災や火災等の災害を受けた方などが対象です。粗大ごみ受付センターに申し込む際に減免対象であることを申し出ると、必要書類が送付されます。事前申請が必要です。" },
  ],
  matome: [
    "世田谷区の粗大ごみは、受付センターへの事前申し込みのうえ、自宅前での収集か船橋粗大ごみ中継所への持ち込み（手数料は収集の半額程度）で出します。手数料は解体前の大きさで決まり、持ち込みは土日の指定日・1回10個までという条件があるため、点数の多い片付けや運び出しが難しい大型品は業者との組み合わせが基本です。",
    "業者に頼む場合は、世田谷区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区が注意を呼びかける回収業者のトラブルを避けるため、買取と処分を分けた内訳と収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ（カテゴリページ）", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/kurashi/gomi/category/11682.html" },
    { label: "粗大ごみの出し方", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/online_tetsuzuki/380.html", updated: "2026年5月25日" },
    { label: "粗大ごみの持ち込みについて", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/online_tetsuzuki/381.html", updated: "2026年7月9日" },
    { label: "粗大ごみの処理手数料について", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02239/382.html", updated: "2025年2月19日" },
    { label: "粗大ごみ・臨時ごみ処理手数料等の減免", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02239/384.html", updated: "2026年4月1日" },
    { label: "粗大ごみなどの処分に違法な不用品回収業者を利用しないでください", org: "世田谷区", url: "https://www.city.setagaya.lg.jp/02241/385.html", updated: "2024年9月27日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaSetagayaPage() {
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
