import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "荒川区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13118/", count: 224 },
  curama: { url: "https://curama.jp/disposal/tokyo/18/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/arakawa" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "arakawa-ku",
  name: "荒川区",
  title: "荒川区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターの申込・手数料の例と減免【2026年版】",
  description:
    "荒川区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を比較。粗大ごみ受付センターの申込（インターネットは1回10個まで）、手数料の例、減免と必要書類、運び出し、引っ越し等の大量ごみ、家電4品目・パソコンの出し方を公式ページで確認してまとめています。",
  ogDescription:
    "荒川区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・手数料の例・減免・運び出し・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "荒川区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "荒川区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["荒川区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "荒川区の粗大ごみは有料で、粗大ごみ受付センターへの事前申し込みが必要です。インターネットは24時間受け付けていますが、一度に申し込めるのは10個までで、11個以上や手数料の減免を受ける場合は電話で申し込みます。引っ越しなどで一度に大量のごみを出す場合も有料で、清掃リサイクル推進課への事前の問い合わせが必要です。家一軒分の片付けのように点数が多い場合は、区の収集と業者を組み合わせて考えることになります。",
    `本記事では、荒川区の公式ページで確認した粗大ごみの申込方法・手数料・減免・運び出し・家電4品目とパソコンの扱い（${CHECKED}確認）と、荒川区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、荒川区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      荒川区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで荒川区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは荒川区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に荒川区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「荒川区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "荒川区の粗大ごみ・減免・家電4品目（区の公式情報）",
  factsLead: (
    <>
      荒川区では、家庭から出るごみのうち一辺が30cmを超える家具や家電製品等が粗大ごみです。収集は有料で、粗大ごみ受付センターへの事前申し込みが必要です。エアコン・テレビ・冷蔵庫・冷凍庫・保冷庫・冷温庫・洗濯機・衣類乾燥機とパソコンは取り扱いが異なります。
    </>
  ),
  facts: [
    { k: "申し込み", v: "荒川区粗大ごみ受付センター。電話（03-6420-3353）は月曜〜土曜の8時〜19時（日曜・年末年始を除く、祝日も受け付け）。インターネットは24時間受付で、一度に申し込めるのは10個まで（11個以上は電話）。インターネットは仮申し込み後に届くメールのURLから24時間以内に本申し込みをしないと自動的にキャンセルになる", src: "荒川区「粗大ごみの出し方」（更新日 2026年10月13日）、同「ごみ手数料案内（粗大ごみ・事業系ごみ）」（更新日 2026年10月1日）" },
    { k: "手数料の例", v: "区の「粗大ごみ処理料金の一例（令和5年10月1日から）」では、布団・扇風機・マットレス300円、電子レンジ・こたつ・自転車（16インチ未満）400円、ソファー（一人用）・自転車（16インチ以上）900円、ソファー（二人用）・シングルベッド（ベッドマットを除く）・ベッドマット・学習机1,300円、ソファー（三人以上用）・ダブルベッド・マッサージチェア2,300円、2段ベッド・両袖机3,200円。各品目の手数料は区が案内する排出品目一覧でも確認できる", src: "荒川区「粗大ごみ処理料金の一例」（エクセル、「粗大ごみの出し方」に掲載）、同「ごみ手数料案内（粗大ごみ・事業系ごみ）」" },
    { k: "支払い", v: "「荒川区有料粗大ごみ処理券取扱所」の標識のある商店・コンビニエンスストア・スーパーストアで、荒川区の有料粗大ごみ処理券（A券200円・B券300円）を購入する。他区の券は使えない", src: "荒川区「ごみ手数料案内（粗大ごみ・事業系ごみ）」、同「粗大ごみの出し方」" },
    { k: "収集", v: "処理券に申込者の名前または受付番号の下4けたと収集予定日を書いて貼り、収集日の朝8時までに自宅前（集合住宅は粗大ごみ置き場または集合玄関前等）に出す。処理券が貼られていない物や手数料が不足している物は収集できない", src: "荒川区「粗大ごみの出し方」" },
    { k: "減額・免除", v: "天災その他大規模な災害を受けた方、生活保護・児童扶養手当・特別児童扶養手当・老齢福祉年金・中国残留邦人等支援給付を受けている方は免除、火災等の災害を受けた方は9割減額。罹災証明書や受給の証明書類などが必要。インターネットでは申し込めず、電話で申し込む", src: "荒川区「粗大ごみの出し方」" },
    { k: "運び出し", v: "65歳以上の方または身体障がい者のみの世帯で、自ら運び出すことが難しく、区内に65歳未満の親族がいないなど他の方の協力が得られない場合は、清掃リサイクル推進課に相談する。長尺物・50kg以上の重量物、出入り口から持ち出せない物、取り外し工事や解体作業が必要な物などは対象外", src: "荒川区「粗大ごみの出し方」" },
    { k: "大量のごみ", v: "引っ越しなどでごみを出す場合は何回かに分けて集積所に出す（1回に2、3袋程度）。一度に大量のごみを出す場合は有料で、事前に清掃リサイクル推進課作業係（03-3892-4671）に問い合わせる", src: "荒川区「ごみ手数料案内（粗大ごみ・事業系ごみ）」" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は区で収集しない。買い替え先や購入した家電販売店に引き取りを依頼する、メーカーの指定引取場所に自分で持ち込む（事前に郵便局でリサイクル料金を支払う）、または購入店が遠方・廃業・不明の場合は家電リサイクル受付センター（0570-087200、月曜〜金曜の9時〜17時）に申し込む", src: "荒川区「家電4品目（エアコン、テレビ、冷蔵庫及び冷凍庫、洗濯機及び衣類乾燥機）の処分の仕方」（更新日 2026年10月1日）" },
    { k: "パソコン", v: "区では収集しない。PCリサイクルマーク付きはメーカーが無料で回収し、メーカー不明や自作パソコンなどはパソコン3R推進協会が有料で回収する。区と協定を締結しているリネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含めば1箱分無料、3辺合計140cm以内・20kg以下）もある", src: "荒川区「家庭用パソコン」（更新日 2026年10月1日）" },
  ],
  sections: [
    {
      id: "moushikomi-tsukaiwake",
      title: "インターネット申し込みの上限と、区の収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            荒川区の粗大ごみは、インターネットで一度に申し込めるのが10個までで、11個以上は電話での申し込みになります。電話は月曜や休日明けの午前に集中してつながりにくいと区は案内しています。手数料は品目ごとに決まっており、区の料金の一例では布団や扇風機が300円、一人用ソファーが900円、二人用ソファーやシングルベッドが1,300円です。処理券は荒川区のものを購入してください。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自宅前や集合住宅の粗大ごみ置き場まで出せる物は区の収集、室内からの運び出しが難しい物や点数の多い片付けは業者、と分けるのが基本です。区の運び出しは、65歳以上の方や身体障がい者のみの世帯で他の方の協力が得られない場合に限られます。引っ越しなどで一度に大量のごみを出す場合は有料で、清掃リサイクル推進課への事前の問い合わせが必要です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、手数料の比べ方は<Link href="/sodaigomi-tesuryou-hikaku/" className={linkCls}>粗大ごみ手数料の比較</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "gyousha-kakunin",
      title: "大量の片付けを業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            家一軒分の片付けや退去前の片付けは、粗大ごみの点数が多く、家電4品目やパソコンなど区で収集しない物も混ざりやすくなります。区の収集に出せる物、家電リサイクルやパソコンの回収に回す物、業者に任せる物を先に仕分けておくと、見積もりの比較がしやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区に出す場合の手数料と申し込み方法を確かめる", b: "出したい物の品目と点数を書き出し、区の料金の一例や排出品目一覧で手数料を確かめます。11個以上や減免を受ける場合は電話で申し込みます。箱物家具は高さと幅の合計で料金が変わるため、寸法を測っておきます。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "荒川区の粗大ごみはどこに申し込みますか？", a: "荒川区粗大ごみ受付センターに、電話（03-6420-3353、月曜〜土曜の8時〜19時、祝日も受付）またはインターネット（24時間）で申し込みます。インターネットで一度に申し込めるのは10個までです。手数料分の荒川区有料粗大ごみ処理券を区内の取扱所で購入して貼ります（2026年11月1日確認）。" },
    { q: "荒川区の粗大ごみの手数料はいくらですか？", a: "品目ごとに決まっています。区の料金の一例（令和5年10月1日から）では、布団・扇風機300円、ソファー（一人用）900円、ソファー（二人用）・シングルベッド1,300円、ソファー（三人以上用）2,300円などです。正確な手数料は申し込みの際に案内されます。" },
    { q: "荒川区で粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "天災その他大規模な災害を受けた方、生活保護・児童扶養手当・特別児童扶養手当・老齢福祉年金・中国残留邦人等支援給付を受けている方は免除、火災等の災害を受けた方は9割減額です。証明書類が必要で、インターネットでは申し込めないため電話で申し込みます。" },
    { q: "荒川区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、荒川区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "荒川区で引っ越しのごみを一度にたくさん出せますか？", a: "荒川区は、引っ越しなどでごみを出す場合は何回かに分けて集積所に出すよう案内しています（1回に2、3袋程度）。一度に大量のごみを出す場合は有料で、事前に清掃リサイクル推進課作業係（03-3892-4671）に問い合わせます。粗大ごみは別途、粗大ごみ受付センターへの申し込みが必要です。" },
  ],
  matome: [
    "荒川区の粗大ごみは、受付センターへの事前申し込みのうえ、荒川区の処理券を貼って収集日の朝8時までに自宅前に出します。インターネットは1回10個までで、11個以上や減免は電話です。家電4品目とパソコンは区では収集せず、家電販売店・家電リサイクル受付センター・メーカーやリネットジャパンリサイクルの回収を使います。",
    "業者に頼む場合は、荒川区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。処分する物の扱いと追加料金の条件は、見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方", org: "荒川区", url: "https://www.city.arakawa.tokyo.jp/a025/recycle/sodaigomi/sodaigomi-2.html", updated: "2026年10月13日" },
    { label: "粗大ごみ処理料金の一例（エクセル、令和5年10月1日から）", org: "荒川区", url: "https://www.city.arakawa.tokyo.jp/documents/16320/sodaigomiryoukin2023.xls" },
    { label: "ごみ手数料案内（粗大ごみ・事業系ごみ）", org: "荒川区", url: "https://www.city.arakawa.tokyo.jp/a025/recycle/sodaigomi/tesuryo.html", updated: "2026年10月1日" },
    { label: "家電4品目（エアコン、テレビ、冷蔵庫及び冷凍庫、洗濯機及び衣類乾燥機）の処分の仕方", org: "荒川区", url: "https://www.city.arakawa.tokyo.jp/a025/recycle/bunbetsu/shobun.html", updated: "2026年10月1日" },
    { label: "家庭用パソコン", org: "荒川区", url: "https://www.city.arakawa.tokyo.jp/a025/recycle/bunbetsu/home-pc.html", updated: "2026年10月1日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaArakawaPage() {
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
