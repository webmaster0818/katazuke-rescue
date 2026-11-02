import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "港区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13103/", count: 222 },
  curama: { url: "https://curama.jp/disposal/tokyo/3/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/minato" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "minato-ku",
  name: "港区",
  title: "港区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜みなと粗大ごみ受付センターと日曜の直接持ち込み（芝浦清掃作業所）【2026年版】",
  description:
    "港区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を比較。みなと粗大ごみ受付センターの申込、毎週日曜の芝浦清掃作業所への持ち込み、運び出し、減免、良質な木製家具の無料引き取り、家電4品目・パソコン、悪質な業者への注意を公式ページで確認してまとめています。",
  ogDescription:
    "港区を対応エリアに含む片付け・不用品回収業者4社と、みなと粗大ごみ受付センターの申込方法・日曜の直接持ち込み・運び出し収集・減免・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "港区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "港区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["港区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "港区で粗大ごみを出す方法は、みなと粗大ごみ受付センターに申し込んで区に収集してもらう方法と、毎週日曜日に限り芝浦清掃作業所（港南3-1-18）へ自家用車等で持ち込む「直接持ち込み」の二つで、どちらも事前の申し込みが必要です。区は、申し込みから収集まで約2週間かかるとしているため、退去日などが決まっている場合は早めの申し込みが必要です。",
    `本記事では、港区の公式ページで確認した粗大ごみの申込方法・処理券・直接持ち込み・運び出し収集・減免・家電4品目とパソコンの扱い・悪質な業者への注意（${CHECKED}確認）と、港区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、港区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      港区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで港区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは港区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に港区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「港区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "港区の粗大ごみ・直接持ち込み・家電4品目（区の公式情報）",
  factsLead: (
    <>
      港区では、家庭から出る不要となった家具などの大きなごみ（最大辺が30cm以上）が粗大ごみで、有料・事前申込制です。申し込み先はみなと粗大ごみ受付センターです。元の大きさで粗大ごみとなる物は、解体・分解しても可燃ごみや不燃ごみの日には出せません。事業者から出るごみは廃棄物収集運搬業者に依頼するよう区は案内しています。
    </>
  ),
  facts: [
    { k: "申し込み", v: "みなと粗大ごみ受付センター。インターネット（仮申し込みのあと、確認メールのURLから24時間以内に本申し込み）とAIチャットボットは24時間受付（年末年始・メンテナンス時を除く）。電話は03-6747-9253、月曜〜土曜 8時〜19時（日曜・年末年始を除く）。申し込みから収集まで約2週間かかる", src: "港区「粗大ごみの収集」（更新日 2025年3月10日）" },
    { k: "手数料と処理券", v: "申し込み時に品目に応じた手数料が案内され、港区有料粗大ごみ処理券（A券200円・B券300円）を組み合わせて購入する。区の組み合わせ例は400円・900円・1,300円・2,300円・3,200円。港区の処理券でないと収集されない。購入先は港区有料ごみ処理券取扱所、スーパーマーケット、コンビニエンスストア、みなとリサイクル清掃事務所", src: "港区「粗大ごみの収集」" },
    { k: "出し方", v: "処理券に「収集予定日」と「氏名」または「受付番号（5桁）」を記入して貼り、収集日当日の午前8時までに指定の場所に出す。収集日より前に出すと、近隣への迷惑や持ち去りの原因となるおそれがある", src: "港区「粗大ごみの収集」" },
    { k: "直接持ち込み", v: "毎週日曜日（年末年始を除く）9時〜16時、芝浦清掃作業所（港南3-1-18）。事前申込制で、混み合うため15時30分までに来場するよう案内。申し込んだ本人が港区内の居住地を確認できる本人確認書類を持参する。手数料は料金表を読み替え、400円→無料、900円→400円、1,300円→600円、2,300円→1,100円、2,700円→1,300円、3,200円→1,600円。当日の品目・数量の追加はできず、処理券は持ち込み場所では買えない", src: "港区「粗大ごみの直接持ち込み」（更新日 2025年3月10日）" },
    { k: "運び出し収集", v: "65歳以上の方、要介護認定を受けている方、障害者手帳をお持ちの方、指定難病等の方、妊婦、子どもを養育するひとり親世帯の方などのみで構成する世帯で、自力で屋外へ運び出すことが困難で近隣住民等の協力が得られない場合に、職員が部屋または玄関前から運び出す。運び出しは無料（処理券は必要）。みなとリサイクル清掃事務所（03-3450-8025）に電話で申し込み、下見のうえ日時を決める。立ち会えない、建物を損傷させる恐れがある、取り外しや解体が必要などの場合は受けられない", src: "港区「粗大ごみの運び出し収集」（更新日 2024年4月1日）" },
    { k: "減免", v: "生活保護、児童扶養手当、特別児童扶養手当、老齢福祉年金の受給者、中国残留邦人等の支援給付の対象の方は、粗大ごみ処理手数料の減額・免除が受けられる。インターネットでは申し込めず、受付センターに電話で減免対象であることを伝え、郵送される申請書をみなとリサイクル清掃事務所か各地区総合支所区民課に持参するか、収集日の10日前までに届くよう郵送する", src: "港区「粗大ごみの減免申請」（更新日 2024年1月4日）" },
    { k: "家具の無料引き取り", v: "港区内の家庭で使用していた良質な木製家具等を、査定のうえ状態が良ければ無料で引き取る（家具のリサイクル展事務室 03-3472-8186 に電話で査定を申し込む）。3階以上でエレベーターがない場合や、通常の出入り口から搬出できない場合などは断られる。引き取れない家具は粗大ごみとして処分する", src: "港区「家庭で不用になった良質な家具の無料回収」（更新日 2026年5月1日）" },
    { k: "家電4品目", v: "テレビ・エアコン・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は粗大ごみとして区では収集できない。買い替え先や購入した店に引き取りを依頼し、購入した店がわからない場合は家電リサイクル受付センター（0570-087200、月曜〜金曜 8時〜17時、祝祭日を除く）に申し込む。家電リサイクル券を購入して指定引取場所へ直接持ち込むこともできる", src: "港区「テレビ・エアコン・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機（家電リサイクル法対象品）」（更新日 2024年4月1日）" },
    { k: "パソコン", v: "区では収集しない。パソコンメーカーによる回収（PCリサイクルマーク付きは回収料金なし）か、区と協力するリネットジャパンリサイクルによる無料の宅配回収（PCリサイクルマークのないパソコン・自作パソコンも無料）を使う", src: "港区「パソコン（家庭用）」（更新日 2023年1月23日）" },
    { k: "悪質な業者への注意", v: "チラシ・インターネットなどで粗大ごみの処分をうたって高額な処理費用を請求したり、「無料で引き取る」と言いながら処理費用を請求したりする業者がいるとして、許可を受けた廃棄物収集運搬業者に収集を依頼するよう呼びかけている。区内の廃棄物収集運搬業者の一覧も公開している", src: "港区「粗大ごみの収集」" },
  ],
  sections: [
    {
      id: "nichiyou-mochikomi",
      title: "日曜の直接持ち込みと、収集・業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            港区の直接持ち込みは毎週日曜日だけで、場所は芝浦清掃作業所です。手数料は料金表を読み替えて安くなり、区の案内では、収集で400円の物は持ち込みなら無料、900円の物は400円、1,300円の物は600円になります。ただし事前の申し込みと処理券の用意が必要で、当日は申し込んだ以外の品目や数量は追加できません。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            車で運べる物は日曜の持ち込み、玄関先などに出せる物は収集、室内からの運び出しが難しい物や点数の多い片付けは業者、と分けるのが基本です。状態の良い木製家具は、区の無料引き取りの対象にならないかも先に確かめておくと処分費を減らせます。区は申し込みから収集まで約2週間かかるとしているため、退去日が決まっている場合は早めに申し込むか、業者の日程と組み合わせてください。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "akushitsu-gyousha",
      title: "区が注意を呼びかける業者と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            港区は、粗大ごみの処分をうたって高額な処理費用を請求したり、「無料で引き取る」と言いながら処理費用を請求したりする業者がいるとして、許可を受けた廃棄物収集運搬業者に収集を依頼するよう呼びかけています。区内の廃棄物収集運搬業者の一覧も区のホームページで公開されています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物の収集運搬をどの許可業者が行うのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 区に出す場合の手数料と、持ち込み・無料引き取りの可否を確かめる", b: "出したい物の品目と点数を書き出し、受付センターで収集の手数料を確かめます。車で運べる物は日曜の直接持ち込みで安くなり、状態の良い木製家具は区の無料引き取りの対象にならないかも確認します。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 許可と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物の収集運搬を行う許可業者、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "港区の粗大ごみはどこに申し込みますか？", a: "みなと粗大ごみ受付センターに、インターネット（24時間）、AIチャットボット（24時間）、電話（03-6747-9253、月曜〜土曜の8時〜19時）で申し込みます。申し込みから収集まで約2週間かかるため、余裕を持って申し込んでください（2026年11月1日確認）。" },
    { q: "港区で粗大ごみを持ち込むといくらになりますか？", a: "毎週日曜日に芝浦清掃作業所へ直接持ち込む場合は、料金表を読み替え、400円の物は無料、900円は400円、1,300円は600円、2,300円は1,100円、2,700円は1,300円、3,200円は1,600円になります。持ち込みも事前申込制で、処理券は持ち込み場所では買えません。" },
    { q: "港区で業者に粗大ごみの回収を頼むときの注意点は？", a: "港区は、高額な処理費用を請求したり、無料と言いながら処理費用を請求したりする業者がいるとして、許可を受けた廃棄物収集運搬業者に依頼するよう呼びかけています。見積もりの段階で、処分する物の収集運搬を行う許可業者を確認してください。" },
    { q: "港区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、港区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "港区で粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "生活保護、児童扶養手当、特別児童扶養手当、老齢福祉年金の受給者、中国残留邦人等の支援給付の対象の方が対象です。インターネットでは申し込めないため、受付センターに電話で減免対象であることを伝え、郵送される申請書で手続きします。" },
  ],
  matome: [
    "港区の粗大ごみは、みなと粗大ごみ受付センターへの事前申し込みのうえ、区の収集か、毎週日曜日の芝浦清掃作業所への直接持ち込み（手数料は読み替えで安くなる）で出します。申し込みから収集まで約2週間かかり、家電4品目とパソコンは区では収集しません。状態の良い木製家具は区の無料引き取りも使えます。",
    "業者に頼む場合は、港区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は許可を受けた廃棄物収集運搬業者への依頼を呼びかけているため、収集運搬の許可を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの収集", org: "港区", url: "https://www.city.minato.tokyo.jp/gomigenryou/kurashi/gomi/kate/k-wakekata/sodaigomi.html", updated: "2025年3月10日" },
    { label: "粗大ごみの直接持ち込み", org: "港区", url: "https://www.city.minato.tokyo.jp/unei/sodaigomiukeire.html", updated: "2025年3月10日" },
    { label: "粗大ごみの運び出し収集", org: "港区", url: "https://www.city.minato.tokyo.jp/sagyou/sodaihakobidasi.html", updated: "2024年4月1日" },
    { label: "粗大ごみの減免申請", org: "港区", url: "https://www.city.minato.tokyo.jp/sagyou/sodaigomigenmensinsei.html", updated: "2024年1月4日" },
    { label: "家庭で不用になった良質な家具の無料回収", org: "港区", url: "https://www.city.minato.tokyo.jp/gomigenryou/2012_03_20.html", updated: "2026年5月1日" },
    { label: "テレビ・エアコン・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機（家電リサイクル法対象品）", org: "港区", url: "https://www.city.minato.tokyo.jp/unei/kurashi/gomi/kate/dekinai/kaden.html", updated: "2024年4月1日" },
    { label: "パソコン（家庭用）", org: "港区", url: "https://www.city.minato.tokyo.jp/unei/kurashi/gomi/kate/dekinai/pc.html", updated: "2023年1月23日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaMinatoPage() {
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
