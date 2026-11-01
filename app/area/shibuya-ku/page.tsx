import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "渋谷区",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-13/city-13113/", count: 222 },
  curama: { url: "https://curama.jp/disposal/tokyo/13/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/tokyo/shibuya" },
  usagi: { band: "東京都の即日対応エリア（公式で「東京都は全エリア25分程度で即日回収できます」）", short: "公式の即日対応エリア（東京都は全エリア25分程度）" },
};

const d: AreaCityData = {
  slug: "shibuya-ku",
  name: "渋谷区",
  title: "渋谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみのLINE申込・キャッシュレス決済と運び出し【2026年版】",
  description:
    "渋谷区でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、渋谷区を対応エリアに含むことを公式で確認して比較。渋谷区粗大ごみ受付センターの電話・LINE・インターネット申込、キャッシュレス決済、品目別の手数料例、高齢者・障がい者の運び出し、減免、家電4品目・パソコンの出し方を区の公式ページで確認してまとめています。",
  ogDescription:
    "渋谷区を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみの申込方法・キャッシュレス決済・手数料例・運び出し・減免・家電4品目の出し方を区の公式ページで確認してまとめています。",
  h1: "渋谷区のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "渋谷区の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["渋谷区", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "渋谷区の粗大ごみは、粗大ごみ受付センターに電話・LINE・インターネットのいずれかで事前に申し込み、収集日の朝8時までに自宅の玄関先などに出します。集合住宅の場合は必ず1階まで降ろす必要があり、収集のために建物内に入ることはしないと区は案内しています。65歳以上の方や障がいのある方だけの世帯で運び出しが難しい場合は、清掃事務所が運び出しを手伝う制度があります。",
    `本記事では、渋谷区の公式ページで確認した粗大ごみの申込方法・手数料・支払い・運び出し・減免・家電4品目とパソコンの扱い（${CHECKED}確認）と、渋谷区を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、渋谷区での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      渋谷区で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで渋谷区が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは渋谷区の業者一覧ページ、お助けうさぎは公式の対応エリアページ（東京都の即日対応エリアの区市町村一覧に渋谷区を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「渋谷区の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "渋谷区の粗大ごみ・支払い・運び出し・家電4品目（区の公式情報）",
  factsLead: (
    <>
      渋谷区では、家庭から出るごみのうち一辺が30センチメートルを超えるものが粗大ごみです。一辺の長さが180センチメートルを超えるものは、180センチメートル以下に切断・解体して出します。収集は事前申込制で、事業所などから出る粗大ごみは区で収集しません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "粗大ごみ受付センター（電話 03-6834-4777、月曜〜土曜 9時〜17時、祝日を含む）、LINE（渋谷区公式LINEアカウントの友だち登録が必要）、インターネットのいずれか。品物の追加はLINE・インターネットではできない。事業所などから出る粗大ごみは区で収集しない", src: "渋谷区「粗大ごみ」（更新日 2026年6月1日）" },
    { k: "手数料の例", v: "品目ごとに設定。布団400円、扇風機400円、ソファー（1人掛け）900円、ソファー（2人掛け）2,300円、自転車（16インチ以上）900円。タンスは幅と高さの合計で分かれ、135cm以下は400円、270cmを超え360cm未満は2,300円", src: "渋谷区「粗大ごみ品目手数料一覧」（更新日 2025年12月10日）" },
    { k: "支払い", v: "コンビニなどの有料ごみ処理券取扱所または清掃事務所で、渋谷区の有料粗大ごみ処理券（A券200円・B券300円）を購入する。他の区市町村の券は使えない。LINE・インターネットで申し込んだ場合のみ、クレジットカード（Visa、Mastercard、JCB、American Express、Diners）またはPayPayで支払える（収集日の7日前まで、領収書の発行なし）。収集日当日以降の品目・数量の変更やキャンセルによる返金はできない", src: "渋谷区「有料ごみ処理手数料」（更新日 2026年4月30日）、同「粗大ごみ処理手数料のキャッシュレス決済について」（更新日 2026年6月1日）" },
    { k: "出し方", v: "収集日の朝8時までに、処理券（キャッシュレス決済の場合は収集日と氏名または申請番号を書いた紙）を1点ずつ貼り、自宅の玄関先などに出す。収集は8時から16時までの間に順次行う。集合住宅は必ず1階まで降ろす（収集のために建物内に入ることはしない）", src: "渋谷区「粗大ごみ」" },
    { k: "運び出し", v: "65歳以上の高齢者もしくは障がい者のみの世帯で、家族や身近な人の協力が困難な場合に限り、清掃事務所（03-5467-4300）が運び出しを手伝う（必要に応じて下見、収集日当日に本人または代理人の立会いのもと室内から運び出す）。このほか、シルバー人材センター（03-5465-1876）による有料の運び出しがあり、玄関から出せる25キログラム以下のものが対象", src: "渋谷区「粗大ごみ」" },
    { k: "減免", v: "火災などの災害を受けた人、生活保護受給者、特別児童扶養手当受給者、児童扶養手当受給者、老齢福祉年金受給者（老齢基礎年金受給者は対象外）は、粗大ごみの手数料が減額または免除になる場合がある。粗大ごみ受付センターに問い合わせる", src: "渋谷区「粗大ごみ」" },
    { k: "多量のごみ", v: "引越し・大掃除などで家庭から一時的に出た多量のごみ（概ね45リットルのごみ袋で4袋（束）以上）を一括して処理する場合は有料（45リットル1袋300円、70リットル1袋600円）。早めに清掃事務所に相談する。粗大ごみ・家電リサイクル対象品目・パソコンは対象外", src: "渋谷区「一度に多量のごみを出す場合（臨時ごみ）」（更新日 2023年10月2日）" },
    { k: "家電4品目", v: "エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機は粗大ごみとして処分できない。買った小売店または新しい製品を購入する小売店などに引き取りを依頼する。小売店がわからない・廃業した・遠くにある場合は、家電リサイクル受付センター（0570-087200）に依頼する。運搬料金とリサイクル料金がかかる", src: "渋谷区「家電」（更新日 2023年9月28日）、同「粗大ごみ」" },
    { k: "パソコン", v: "区では回収しない。メーカーによる回収か、区と協定を結んだリネットジャパンリサイクル株式会社の宅配便回収（パソコンがあれば段ボール1箱分（3辺合計140センチ以内・20キログラム以内）を無料）を利用する。プリンターなど別売りの周辺機器は粗大ごみで扱う", src: "渋谷区「パソコン」（更新日 2025年4月1日）" },
    { k: "不用品回収業者", v: "「不用品を無料・格安で処分します」とうたうチラシやホームページで宣伝し、軽トラックなどで巡回している違法な不用品回収業者について、高額な処分費用などを請求されたという相談が警察や消費生活相談窓口に寄せられているとして注意を呼びかけ。廃家電・粗大ごみなどは区のルールに従って適正に排出するよう求めている", src: "渋谷区「違法な不用品回収業者とのトラブルにご注意ください」（更新日 2024年4月16日）" },
  ],
  sections: [
    {
      id: "moushikomi-shiharai",
      title: "電話・LINE・インターネットの申し込みと、支払い方法の選び方",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            渋谷区の粗大ごみは、電話・LINE・インターネットのいずれかで申し込めます。LINEやインターネットで申し込んだ場合に限り、処理券を買わずにクレジットカードやPayPayで手数料を支払えますが、決済できるのは収集日の7日前までで、領収書は発行されません。領収書が必要な場合や7日前を過ぎた場合は、コンビニなどで有料粗大ごみ処理券を購入します。どちらの方法でも、収集日当日以降の品目・数量の変更やキャンセルによる返金はできないと区は案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            集合住宅では粗大ごみを1階まで降ろす必要があり、区の職員が収集のために建物内に入ることはありません。自分で降ろせる物は区の収集、降ろせない物や点数の多い片付けは、高齢者・障がい者世帯なら清掃事務所の運び出し、それ以外は業者、と分けるのが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、混み合う時期の対策は<Link href="/sodaigomi-konzatsu-taisaku/" className={linkCls}>粗大ごみが混雑する時期の対策</Link>でまとめています。
          </p>
        </>
      ),
    },
    {
      id: "gyousha-chui",
      title: "区が注意を呼びかける不用品回収業者と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            渋谷区は、「不用品を無料・格安で処分します」とうたう業者に処分を依頼して、高額な処分費用などを請求されたという相談が警察や消費生活相談窓口に寄せられているとして、注意を呼びかけています。トラブルの例として、無料と言いながら引き取り後にお金を請求された、後から高額な運搬費やリサイクル料金を請求された、といったケースを挙げています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、作業内容を「室内からの運び出し・仕分け」「買取（リユース）」「処分」に分けた見積もりを受け取り、処分する物を誰がどのルートで処理するのかを作業前に確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 品目手数料一覧で、区に出す場合の手数料を調べる", b: "出したい物の品目と点数を書き出し、渋谷区の粗大ごみ品目手数料一覧で手数料を確かめます。タンスは幅と高さの合計で料金が変わるため、寸法を測っておきます。180センチメートルを超える物は切断・解体が必要です。" },
    { t: "② 区で出せない物・運び出せない物を業者の見積もりにまとめる", b: "1階まで降ろせない大型家具、家電4品目、点数の多い片付けを業者の見積もりにまとめます。部屋の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を、各社に同じ条件で伝えてください。" },
    { t: "③ 処分の方法と追加料金の条件を作業前に確認する", b: "買取する物と処分する物を分けた内訳を受け取り、処分する物をどのルートで処理するのか、搬出時の破損への補償、当日に追加料金が発生する条件を確認してから契約します。" },
  ],
  faqs: [
    { q: "渋谷区の粗大ごみはどこに申し込みますか？", a: "粗大ごみ受付センターに、電話（03-6834-4777、月曜〜土曜の9時〜17時、祝日を含む）、LINE（渋谷区公式LINEアカウントの友だち登録が必要）、インターネットのいずれかで申し込みます（2026年11月1日確認）。" },
    { q: "渋谷区の粗大ごみの手数料はキャッシュレスで払えますか？", a: "LINEまたはインターネットで申し込んだ場合に限り、クレジットカード（Visa、Mastercard、JCB、American Express、Diners）またはPayPayで支払えます。決済できるのは収集日の7日前までで、領収書は発行されません。電話で申し込んだ場合や領収書が必要な場合は、有料粗大ごみ処理券（A券200円・B券300円）を購入します。" },
    { q: "渋谷区で粗大ごみを部屋から運び出してもらえますか？", a: "65歳以上の高齢者もしくは障がい者のみの世帯で、家族などの協力が困難な場合は、清掃事務所（03-5467-4300）が運び出しを手伝います。このほか、シルバー人材センター（03-5465-1876）による有料の運び出しがあり、玄関から出せる25キログラム以下のものが対象です。" },
    { q: "渋谷区で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、東京都は全エリア25分程度で即日回収できるとされ、渋谷区が東京都の区市町村一覧に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
    { q: "渋谷区で粗大ごみの手数料が減免になるのはどんな場合ですか？", a: "火災などの災害を受けた人、生活保護受給者、特別児童扶養手当受給者、児童扶養手当受給者、老齢福祉年金受給者が対象になる場合があります（老齢基礎年金受給者は対象外）。粗大ごみ受付センターに問い合わせます。" },
  ],
  matome: [
    "渋谷区の粗大ごみは、粗大ごみ受付センターに電話・LINE・インターネットで申し込み、処理券を貼るかキャッシュレス決済をしたうえで、収集日の朝8時までに玄関先（集合住宅は1階）に出します。家電4品目とパソコンは区では収集せず、小売店・家電リサイクル受付センター・メーカー回収・リネットジャパンリサイクルの宅配回収などを使います。",
    "業者に頼む場合は、渋谷区を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。区は無料・格安をうたう不用品回収業者とのトラブルに注意を呼びかけているため、処分する物の扱いを見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/kateigomi/gomi_sodai.html", updated: "2026年6月1日" },
    { label: "粗大ごみ品目手数料一覧", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/kateigomi/sibuyaku_sodaitesuuryou.html", updated: "2025年12月10日" },
    { label: "有料ごみ処理手数料", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/gomi-tesuryo/gomi_seal.html", updated: "2026年4月30日" },
    { label: "粗大ごみ処理手数料のキャッシュレス決済について", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/kateigomi/kyasshuresu_sodaigomi.html", updated: "2026年6月1日" },
    { label: "一度に多量のごみを出す場合（臨時ごみ）", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/kateigomi/gomi_tairyo.html", updated: "2023年10月2日" },
    { label: "違法な不用品回収業者とのトラブルにご注意ください", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/kateigomi/huyouhin.html", updated: "2024年4月16日" },
    { label: "家電", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/recycle/elec.html", updated: "2023年9月28日" },
    { label: "パソコン", org: "渋谷区", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/recycle/pc.html", updated: "2025年4月1日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaShibuyaPage() {
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
