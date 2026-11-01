import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "文京区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13105/", count: 221 },
  curama: { url: "https://curama.jp/disposal/tokyo/5/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/bunkyo" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "bunkyo-ku",
  name: "文京区",
  title: "文京区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみ受付センターの申込と運び出し収集【2026年版】",
  description:
    "文京区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、文京区を対応エリアに含むことを公式で確認して比較。文京区粗大ごみ受付センターの申込方法（電話・インターネット・チャットボット）、有料粗大ごみ処理券、高齢者などの運び出し収集、家電4品目・パソコンの出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "文京区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみ受付センターの申込方法・有料粗大ごみ処理券・運び出し収集・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "文京区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "文京区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["文京区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "文京区の粗大ごみは有料・申込制で、粗大ごみ受付センターに電話・インターネット・チャットボットのいずれかで申し込み、案内された料金分の有料粗大ごみ処理券を貼って、収集日の朝8時までに自宅前（集合住宅は1階出入り口スペースなど）に出します。区は、年末年始や引越しの多い季節には申し込みから収集日まで2、3週間以上かかる場合があると案内しているため、退去日や引き渡し日が決まっている片付けでは、区の収集と業者の日程を早めに組み合わせることが大切です。",
    `本記事では、文京区の公式ページで確認した粗大ごみの申込方法・手数料の調べ方・処理券・運び出し収集・家電4品目とパソコンの扱い（${CHECKED}確認）と、文京区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、文京区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      文京区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで文京区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは文京区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に文京区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「文京区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "文京区の粗大ごみ・運び出し収集・家電4品目（区の公式情報）",
  factsLead: (
    <>
      文京区では、日常生活に伴って家庭から出た家具・電化製品などのうち、一辺の長さがおおむね30cm以上のものが粗大ごみです。収集は有料・申込制で、申し込み先は粗大ごみ受付センターです。事業者が出す粗大ごみは区の収集の対象外で、許可を受けた専門業者に依頼するよう区は案内しています。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ受付センターに申し込む。電話 03-5296-7000（月曜〜土曜 8時〜19時）、インターネットとチャットボットは24時間。いずれも12月28日〜1月4日は休み。年末年始や引越しの多い季節は、申し込みから収集日まで2、3週間以上かかる場合がある", src: "文京区「粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）」（更新日 2026年6月5日）" },
    { k: "手数料の調べ方", v: "粗大ごみの料金は粗大ごみ受付センター（インターネット）または「文京区粗大ごみ品目一覧」（PDF）で確認する。区の例では、両袖机が3,200円（A券1枚・B券10枚）", src: "文京区「粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）」（更新日 2026年6月5日）" },
    { k: "支払い", v: "申込時に案内された料金分の有料粗大ごみ処理券（A券200円・B券300円の組み合わせ）を、区内の「有料粗大ごみ処理券取扱所」の標識のある店で購入する。取扱所はセブン-イレブン・ファミリーマート・デイリーヤマザキ・ミニストップ・ポプラ・ローソン（小規模な店舗では取り扱いがない場合あり）、文京清掃事務所、区内の商店など。他区の処理券も販売している取扱所があるため、文京区の処理券であることを確認して購入する", src: "文京区「粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）」（更新日 2026年6月5日）、同「有料粗大ごみ処理券取扱所」（更新日 2026年9月25日）" },
    { k: "出し方", v: "収集日の朝8時までに、処理券を貼って自宅の前に出す。マンション等の集合住宅は建物の1階出入り口スペース等の収集できる場所に出す。処理券には収集予定日と、申し込んだ方の氏名（集合住宅は部屋番号も）または受付番号を記入する", src: "文京区「粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）」（更新日 2026年6月5日）" },
    { k: "運び出し", v: "高齢者、障害のある方、妊産婦のみでお住まいの方等を対象に、粗大ごみの運び出しを行っている（条件により対象にならない場合あり）。受付センターへの申し込み時に運び出し希望を伝え、文京本郷粗大センター（03-3815-5310）に出す日付を伝えて相談する", src: "文京区「粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）」（更新日 2026年6月5日）" },
    { k: "減免", v: "手数料の減免を申請する方は、電話（03-5296-7000）での申し込みとなる（対象となる条件は受付センターに確認）", src: "文京区 粗大ごみ受付センター（インターネット申込ページのお知らせ）" },
    { k: "家電4品目", v: "テレビ・エアコン・冷蔵庫（冷凍庫）・洗濯機・衣類乾燥機は粗大ごみとして収集しない。買い替えは新たに購入する電器店、処分のみは過去に購入した電器店に回収を依頼する。購入した電器店がわからない場合は、家電リサイクル受付センター（0570-087200、月曜〜金曜 9時〜17時）に申し込むか、郵便局で家電リサイクル券を購入して指定引取場所に自分で持ち込む（持ち込みの場合は収集運搬料金が不要）", src: "文京区「テレビ・エアコン・冷蔵庫（冷凍庫）・洗濯機・衣類乾燥機」（更新日 2026年10月27日）" },
    { k: "パソコン", v: "区では廃棄パソコンの回収を行っていない。各パソコンメーカーに引き取りを依頼し、自作・個人輸入・メーカーが倒産したパソコンはパソコン3R推進協会に依頼する。PCリサイクルマーク付きは無料で回収される。小型家電リサイクル法の国の認定事業者（リネットジャパンリサイクル株式会社）による宅配便回収（有料）も利用できる", src: "文京区「パソコン」（更新日 2024年6月11日）" },
    { k: "不用品回収業者", v: "家電品などの不用品を無料回収すると宣伝する業者に依頼し、車に積んだ後で高額な料金を請求されるといったトラブルが全国で発生しているとして、適正なルートでの処理を呼びかけ。トラブルになった場合は消費生活センターに相談する", src: "文京区「不用品・廃品回収業者とのトラブルにご注意ください」（更新日 2018年11月8日）" },
  ],
  sections: [
    {
      id: "shushu-gyousha",
      title: "文京区の粗大ごみ収集と、業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            文京区の粗大ごみは、受付センターに申し込んで処理券を購入し、収集日の朝8時までに自宅前や集合住宅の1階出入り口スペースに出す流れです。料金は品目ごとに決まっており、区の例では両袖机が3,200円です。申し込みは電話・インターネット・チャットボットで受け付けていますが、年末年始や引越しの多い季節は収集日まで2、3週間以上かかる場合があると区は案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            玄関先や集合住宅の1階まで自分で出せる物は区の収集、室内からの運び出しが難しい物や点数の多い片付け、日程が迫っている片付けは業者、と分けるのが基本です。高齢者、障害のある方、妊産婦のみの世帯などは区の運び出し収集を相談できますが、条件により対象にならない場合があります。まだ使える物は、区が連携しているジモティーでのリユースや、<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>も検討できます。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対応は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "gyousha-trouble",
      title: "不用品回収業者とのトラブルへの注意と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            文京区は、家電品などの不用品を無料回収すると宣伝する業者に依頼したところ、車に積んだ後で高額な料金を請求されたといったトラブルが全国で発生していると注意を呼びかけています。粗大ごみや不用品の処分は住所地の自治体ごとにルールが決められており、無料だと思って依頼するとトラブルや不法投棄につながる恐れがあるとして、適正なルートでの処理を求めています。トラブルになった場合の相談先は消費生活センターです。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。区の粗大ごみ収集や家電リサイクルと組み合わせる提案になっているかも判断材料になります。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目一覧か受付センターで、区に出す場合の手数料を調べる", b: "出したい物の品目と点数を書き出し、文京区粗大ごみ品目一覧や粗大ごみ受付センターのチャットボットで手数料を確かめます。タンスや棚などは大きさで料金が変わることがあるため、寸法を測っておきます。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "室内から運び出せない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "文京区の粗大ごみはどこに申し込みますか？", a: "粗大ごみ受付センターに、電話（03-5296-7000、月曜〜土曜の8時〜19時）、インターネットまたはチャットボット（24時間）で申し込みます。12月28日〜1月4日は休みです。申し込み後、案内された料金分の有料粗大ごみ処理券を区内の取扱所で購入します（2026年11月1日確認）。" },
    { q: "文京区の粗大ごみの手数料はいくらですか？", a: "品目ごとに決まっており、文京区粗大ごみ品目一覧や粗大ごみ受付センターで確認できます。区の公式ページの例では、両袖机が3,200円（A券200円1枚・B券300円10枚）です。" },
    { q: "文京区で粗大ごみを自分で運び出せない場合はどうすればよいですか？", a: "高齢者、障害のある方、妊産婦のみでお住まいの方等を対象に、区が粗大ごみの運び出しを行っています。受付センターへの申し込み時に運び出し希望を伝え、文京本郷粗大センター（03-3815-5310）に相談します。条件により対象にならない場合があるため、対象外の場合や物量が多い場合は業者への依頼も検討してください。" },
    { q: "文京区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、文京区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "文京区で家電4品目やパソコンを処分するにはどうすればよいですか？", a: "テレビ・エアコン・冷蔵庫（冷凍庫）・洗濯機・衣類乾燥機は区では収集せず、電器店への依頼、家電リサイクル受付センターへの申し込み、指定引取場所への持ち込みのいずれかで処分します。パソコンも区では回収せず、メーカーやパソコン3R推進協会、リネットジャパンリサイクルの宅配便回収（有料）を利用します。" },
  ],
  matome: [
    "文京区の粗大ごみは、受付センターに申し込み、有料粗大ごみ処理券を貼って収集日の朝8時までに自宅前などに出します。年末年始や引越しの多い季節は収集日まで2、3週間以上かかる場合があり、家電4品目とパソコンは区では収集しません。",
    "業者に頼む場合は、文京区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は無料回収をうたう業者とのトラブルに注意を呼びかけているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）", org: "文京区", url: "https://www.city.bunkyo.lg.jp/b039/p000932/index.html", updated: "2026年6月5日" },
    { label: "有料粗大ごみ処理券取扱所", org: "文京区", url: "https://www.city.bunkyo.lg.jp/b039/p000933.html", updated: "2026年9月25日" },
    { label: "粗大ごみ受付センター（インターネット申込）", org: "文京区", url: "https://ecolife.e-tumo.jp/sodai-bunkyo-tokyo-u/" },
    { label: "テレビ・エアコン・冷蔵庫（冷凍庫）・洗濯機・衣類乾燥機", org: "文京区", url: "https://www.city.bunkyo.lg.jp/b039/p000934.html", updated: "2026年10月27日" },
    { label: "パソコン", org: "文京区", url: "https://www.city.bunkyo.lg.jp/b039/p000935.html", updated: "2024年6月11日" },
    { label: "不用品・廃品回収業者とのトラブルにご注意ください", org: "文京区", url: "https://www.city.bunkyo.lg.jp/b038/p000769.html", updated: "2018年11月8日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaBunkyoPage() {
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
