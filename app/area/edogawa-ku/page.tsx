import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "江戸川区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13123/", count: 225 },
  curama: { url: "https://curama.jp/disposal/tokyo/23/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/edogawa" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "edogawa-ku",
  name: "江戸川区",
  title: "江戸川区でゴミ屋敷片付け・不用品回収を頼める業者｜粗大ごみの持込施設と手数料・減免【2026年版】",
  description:
    "江戸川区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を比較。粗大ごみ受付センターの申込、収集と北部・南部粗大ごみ持込施設の手数料、2026年10月からの持込料金の変更、減免、家電4品目・パソコンの出し方を公式ページで確認してまとめています。",
  ogDescription:
    "江戸川区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみの申込方法・持ち込みの手数料・減免・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "江戸川区でゴミ屋敷片付け・不用品回収を頼める業者",
  breadcrumb: "江戸川区で片付け・不用品回収を頼める業者",
  tags: ["江戸川区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "江戸川区の粗大ごみは、自宅前からの収集と、区内2か所の粗大ごみ持込施設（北部・南部）への持ち込みのどちらかで出します。どちらも粗大ごみ受付センターへの事前申し込みが必要で、1回に申し込めるのは10個までです。持ち込みは年中無休（年末年始を除く）で収集より手数料が割安ですが、1世帯につき年度内3回までという回数の上限があります。",
    `本記事では、江戸川区の公式ページで確認した粗大ごみの申込方法・手数料・持ち込み・減免・家電4品目とパソコンの扱い（${CHECKED}確認）と、江戸川区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、江戸川区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      江戸川区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで江戸川区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは江戸川区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に江戸川区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「江戸川区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "江戸川区の粗大ごみ・持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      江戸川区では一辺が30cm以上ある家具・電化製品・寝具・自転車などが粗大ごみです。収集も持ち込みも有料・事前申込制で、申し込み先は粗大ごみ受付センターです。申し込めるのは江戸川区民の、区内の家庭から出た粗大ごみに限られます。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ受付センター（電話 03-6744-5700、月曜〜土曜 8時〜19時・年末年始を除く）。インターネット（メールアドレスの事前登録が必要）とチャットボットでも申し込める。1回10個まで。日曜・祝日も収集する（年末年始を除く）", src: "江戸川区「粗大ごみについて」（更新日 2026年10月28日）" },
    { k: "手数料と処理券", v: "江戸川区有料粗大ごみ処理券のA券（200円）とB券（300円）を組み合わせて貼る。収集の例は布団・いす（ソファー以外）など400円、自転車（電動アシスト除く）・一人用ソファーなど900円、シングルベッド（マットレス除く）・学習机など1,300円、ダブルベッド・二人用以上のソファーなど2,300円、両袖机など3,200円", src: "江戸川区「粗大ごみについて」（主な粗大ごみ処理手数料の表）" },
    { k: "持ち込み", v: "北部粗大ごみ持込施設（篠崎町2丁目62番17号）と南部粗大ごみ持込施設（西葛西1丁目10番16号）。年中無休（年末年始を除く）の9時〜15時30分、申込時に指定した日時に持ち込む。1世帯1回10個まで・年度内3回まで、持ち込めるのは本人または同居の家族のみで、本人確認書類が必要", src: "江戸川区「粗大ごみについて」" },
    { k: "持ち込みの手数料", v: "収集400円の品目は200円、900円は400円、1,300円は900円、2,300円は1,300円、3,200円は2,300円。2026年10月1日申込受付分から、これまで持ち込み無料だった品目が200円になった（収集料金は変更なし）", src: "江戸川区「粗大ごみについて」" },
    { k: "減免制度", v: "火災等の災害を受けた方、生活保護・児童扶養手当・特別児童扶養手当・老齢福祉年金の受給者、中国残留邦人等支援給付を受けている方が対象になる場合がある。インターネットでは申し込めず、証明書類の添付が必要。受け付けから収集まで1か月程度かかる", src: "江戸川区「粗大ごみについて」（粗大ごみ処理手数料の減額・免除）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。購入店か買い替え先の販売店に依頼するほか、家電リサイクル受付センター（0570-087200）への収集依頼、区内の中間集積所への持ち込み、指定引取場所への持ち込みの方法がある", src: "江戸川区「家電リサイクル法対象品の出し方」（更新日 2026年6月23日）" },
    { k: "パソコン", v: "区では収集しない。各メーカーに回収を依頼するか、区の連携・協力事業者による宅配便回収（パソコン本体を含むと1箱分の回収料金が無料）を使う。メーカーがないものはパソコン3R推進協会に問い合わせる", src: "江戸川区「家庭用パソコンの出し方」（更新日 2025年4月1日）" },
    { k: "違法な回収業者", v: "区から委託や許可を受けていない業者が家庭から不用品を回収するのは違法行為とし、利用しないよう呼びかけ。区では現在、許可の有無に関係なく業者に家庭ごみの回収を認めていないと明記している", src: "江戸川区「違法な不用品回収業者にご注意ください！」（更新日 2023年12月20日）" },
    { k: "一度に大量のごみ", v: "集積所に出せるのは一度に45リットル袋3袋まで。引っ越しなどで臨時に大量に出す場合は有料（45リットル袋1袋300円、70リットル袋1袋500円）で、管轄の清掃事務所に相談する", src: "江戸川区「ごみを大量に出す場合」（更新日 2025年11月11日）" },
  ],
  guidanceFirst: {
      id: "ihou-gyousha",
      title: "区が「家庭ごみの回収を業者に認めていない」と明記している点と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            江戸川区は、チラシやホームページの広告、スピーカーでの巡回、電話での勧誘で不用品を戸別に回収する業者について、区が委託や許可をすることはないとしたうえで、許可の有無に関係なく業者に家庭ごみの回収を認めていないと案内しています。多額の料金の請求や、売れる物だけを抜き取ったあとの不法投棄といった手口も挙げられています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に相談する場合は、見積もりの段階で、運び出した物を買取・リユースとして引き取るのか、どのような方法で処分するのかを品目ごとに書面で示してもらってください。説明があいまいな場合や判断に迷う場合は、契約前に区の清掃課（清掃事務所）に確認すると確実です。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
  },
  sections: [
    {
      id: "mochikomi-kaisuu",
      title: "持ち込みは年度内3回まで。片付けの量に合わせた出し方の組み立て",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            江戸川区の持ち込みは、収集より手数料が割安で、北部・南部の2施設とも年末年始を除いて毎日受け付けています。一方で1回10個まで・年度内3回までという上限があるため、1年で持ち込める粗大ごみは最大30個です。実家の片付けや退去前の整理のように粗大ごみが数十点出る場合は、持ち込みで出す物と収集で出す物を分け、それでも出し切れない物や運び出しが難しい物を業者に相談する、という順番で計画すると無駄がありません。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            袋ごみも注意が必要です。集積所に一度に出せるのは45リットル袋3袋までで、それを超える量を臨時に出す場合は1袋300円（45リットル）の手数料がかかり、清掃事務所への相談が必要です。片付けでは袋ごみが想定より多く出やすいため、何回かに分けて出すか、臨時ごみとして出すかを先に決めておきましょう。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、自分で施設に運ぶ場合の注意点は<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 粗大ごみの点数を数え、持ち込み・収集・業者に振り分ける", b: "粗大ごみを品目ごとに書き出し、チャットボットや受付センターで手数料を確かめます。車で運べる物は持ち込み（1回10個・年度内3回まで）、玄関先まで出せる物は収集、運び出しが難しい物や点数の多い片付けは業者、と割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝え、総額と追加料金の条件を比べます。" },
    { t: "③ 引き取った物の行き先と、処分の方法を書面で確認する", b: "買取・リユースとして引き取る物と処分する物を分けた内訳を受け取り、処分する物をどのように扱うかを作業前に確認します。区の案内とあわないと感じたら、契約前に清掃事務所に相談してください。" },
  ],
  faqs: [
    { q: "江戸川区の粗大ごみはどこに申し込みますか？", a: "江戸川区の粗大ごみ受付センターに、電話（03-6744-5700、月曜〜土曜の8時〜19時、年末年始を除く）、インターネット、チャットボットで申し込みます。1回に申し込めるのは10個までで、申し込み時に手数料（有料粗大ごみ処理券の種類と枚数）が案内されます（2026年11月1日確認）。" },
    { q: "江戸川区で粗大ごみを持ち込むといくらになりますか？", a: "区の案内では、収集400円の品目が持ち込みでは200円、900円が400円、1,300円が900円、2,300円が1,300円、3,200円が2,300円です。2026年10月1日申込受付分から、それまで持ち込み無料だった品目は200円になりました。持ち込みも事前申し込みが必要です。" },
    { q: "持ち込みは何回まで使えますか？", a: "1世帯につき1回10個まで、年度内3回までです。同じ日に複数回持ち込むことはできず、持ち込めるのは本人または同居の家族のみで、運転免許証やマイナンバーカードなどの本人確認書類が必要です。" },
    { q: "江戸川区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、江戸川区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、時間帯もあわせて問い合わせ、引き取った物をどう扱うかも確認してください。" },
    { q: "粗大ごみの手数料の減免はインターネットで申し込めますか？", a: "江戸川区では減額・免除はインターネットでは申し込めません。生活保護や児童扶養手当などの受給者は粗大ごみ受付センター、火災等の災害を受けた方は管轄の清掃事務所に問い合わせ、証明書類を添付して申請します。受け付けから収集まで1か月程度かかるため、早めの申し込みが案内されています。" },
  ],
  matome: [
    "江戸川区の粗大ごみは、受付センターへの事前申し込みのうえ、自宅前での収集か、北部・南部の粗大ごみ持込施設への持ち込みで出します。持ち込みは収集より割安ですが年度内3回・1回10個までの上限があり、2026年10月からは無料だった品目も200円になりました。点数の多い片付けは、収集・持ち込みと業者の組み合わせで考えるのが基本です。",
    "業者に頼む場合は、江戸川区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は許可の有無に関係なく業者に家庭ごみの回収を認めていないと案内しているため、引き取った物の行き先と処分の方法を契約前に必ず確認してください。",
  ],
  sources: [
    { label: "粗大ごみについて", org: "江戸川区", url: "https://www.city.edogawa.tokyo.jp/e025/kurashi/gomi_recycle/kategomi/sodai_mosikomi.html", updated: "2026年10月28日" },
    { label: "家電リサイクル法対象品の出し方", org: "江戸川区", url: "https://www.city.edogawa.tokyo.jp/e025/kurashi/gomi_recycle/kategomi/dashikata.html", updated: "2026年6月23日" },
    { label: "家庭用パソコンの出し方", org: "江戸川区", url: "https://www.city.edogawa.tokyo.jp/e025/kurashi/gomi_recycle/kategomi/bunbetsu/computer.html", updated: "2025年4月1日" },
    { label: "違法な不用品回収業者にご注意ください！", org: "江戸川区", url: "https://www.city.edogawa.tokyo.jp/kurashi/gomi_recycle/kategomi/ihogyosha.html", updated: "2023年12月20日" },
    { label: "ごみを大量に出す場合", org: "江戸川区", url: "https://www.city.edogawa.tokyo.jp/e025/kurashi/gomi_recycle/kategomi/tairyou.html", updated: "2025年11月11日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaEdogawaPage() {
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
