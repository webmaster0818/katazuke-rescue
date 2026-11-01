import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "川越市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-11/city-11201/", count: 193 },
  curama: { url: "https://curama.jp/disposal/saitama/2/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/saitama/kawagoe" },
  usagi: { band: "「埼玉県で25分程度で即日回収ができるエリア」", short: "公式の即日対応エリア（25分程度）" },
};

const d: AreaCityData = {
  slug: "kawagoe",
  name: "川越市",
  title: "川越市のゴミ屋敷片付け・不用品回収業者おすすめ4選｜粗大ごみの戸別収集と自己搬入の手数料【2026年版】",
  description:
    "川越市でゴミ屋敷片付け・不用品回収を頼める業者4社（みんなの遺品整理・くらしのマーケット・ミツモア・お助けうさぎ）を、川越市を対応エリアに含むことを公式で確認して比較。粗大ごみの戸別収集（電話予約・5点まで・最大1か月先）、品目別の料金、東清掃センター・資源化センターへの自己搬入（10kgにつき50円、40kg以下は無料）、家電4品目の扱いを市の公式ページで確認してまとめています。",
  ogDescription:
    "川越市を対応エリアに含む片付け・不用品回収業者4社と、粗大ごみの戸別収集・料金・自己搬入の手数料・家電4品目の扱いを市の公式ページで確認してまとめています。",
  h1: "川越市のゴミ屋敷片付け・不用品回収業者おすすめ4選",
  breadcrumb: "川越市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["川越市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "川越市の粗大ごみの戸別収集は、平日の電話予約制で、1回の予約は5点までです。収集日は最大1か月先になる場合があると市は案内しており、収集日当日の品目の追加もできません。一方で、市のごみ処理施設への自己搬入は、40kg以下なら無料、それを超えても10kgにつき50円と手数料が抑えられています。家一軒分の片付けでは、戸別収集・自己搬入・業者への依頼をどう組み合わせるかが費用と日程を左右します。",
    `本記事では、川越市の公式ページで確認した粗大ごみの戸別収集・料金・自己搬入・家電4品目の扱い（${CHECKED}確認）と、川越市を対応エリアに含むことを各社の公式ページで確認できた業者4社を紹介します。全国対応をうたうサービスでも、川越市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      川越市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページで川越市が対応エリアに含まれることを{CHECKED}に確認できた4社を紹介します。みんなの遺品整理・くらしのマーケット・ミツモアは川越市の業者一覧ページ、お助けうさぎは公式の対応エリアページ（埼玉県で25分程度で即日回収ができるエリアに川越市を掲載）で確認しました。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「川越市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）、お助けうさぎの料金は公式の料金ページ（{CHECKED}確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "川越市の粗大ごみ・自己搬入・家電4品目（市の公式情報）",
  factsLead: (
    <>
      川越市は家庭から出る粗大ごみの戸別収集を予約制・有料制で行い、事業系ごみの収集は行っていません。市のごみ処理施設への自己搬入とあわせて、確認した内容をまとめます。
    </>
  ),
  facts: [
    { k: "戸別収集の予約", v: "粗大ごみ収集予約電話 049-239-5056。予約・収集とも月曜〜金曜の平日。収集日は最大1か月先になる場合がある。6点以上の予約や、収集前の複数回予約はできない", src: "川越市「粗大ごみの戸別収集」（更新日 2026年6月3日）" },
    { k: "出し方と支払い", v: "予約した収集時間前までに、一戸建ては敷地内の道路に面したところ、集合住宅は集積所まで出す。建物内からの搬出は行わない。収集の時間帯は午前8時30分〜11時30分、午後0時45分〜4時。立ち会いで品目を確認し、収集作業員から受け取った納付書で手数料を支払う。当日の品目追加は不可", src: "同上" },
    { k: "料金の例", v: "椅子 500円、布団（3枚1組） 1,000円、ベッド（S） 1,500円、タンス（大・最大辺150cm以上） 2,000円、机（両袖） 2,000円、マッサージ機（椅子） 1,000円", src: "川越市「粗大ごみ料金表（令和8年6月2日現在）」" },
    { k: "自己搬入の施設", v: "東清掃センター（芳野台2丁目8番地18、電話 049-223-2645）は可燃・不燃・有害・粗大ごみ・ペットボトル、資源化センター（大字鯨井782番地3、電話 049-234-0530）は可燃・不燃・有害・粗大ごみ・その他プラスチック製容器包装・びん・かんを受け付け", src: "川越市「家庭ごみのごみ処理施設への持込み(自己搬入)」（更新日 2025年12月1日）" },
    { k: "自己搬入の受付と手数料", v: "月曜〜金曜（祝日も受付、年末年始を除く）の午前8時40分〜11時50分、午後0時45分〜4時。手数料は10kgにつき50円で、1回の搬入量が40kg以下なら無料。搬入できるのは原則ごみを出した本人で、荷下ろしも本人が行う。住所確認のため身分証明の提示を求めることがある", src: "同上" },
    { k: "搬入できないもの", v: "川越市外で発生したごみ、分別されていないもの、家電リサイクル法対象機器、パソコン、消火器・プロパンガスボンベ・バッテリー、ガソリン・灯油など、自動車のタイヤ・ピアノ・ブロック・土や石など", src: "同上" },
    { k: "家電4品目・パソコン", v: "テレビ・エアコン・冷蔵庫・洗濯機・衣類乾燥機・パソコンは、川越市で収集・処理を行っていない", src: "川越市「粗大ごみの戸別収集」" },
    { k: "許可業者", v: "川越市一般廃棄物収集運搬業許可業者の一覧を公開（令和8年4月1日現在）。取り扱い内容として「ごみ・引越・家電」などが業者ごとに記載されている", src: "川越市「川越市一般廃棄物収集運搬業許可業者」（更新日 2026年4月6日）" },
  ],
  sections: [
    {
      id: "kumiawase",
      title: "戸別収集・自己搬入・業者を組み合わせる川越市での片付けの段取り",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            川越市の戸別収集は1回5点までで、予約は平日の電話のみ、収集日は最大1か月先になることがあります。粗大ごみが数点なら戸別収集で十分ですが、家一軒分の片付けで粗大ごみが十数点を超える場合は、戸別収集だけでは日程が読みにくくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べる物は、東清掃センターか資源化センターへの自己搬入が有力です。1回40kg以下なら無料、40kgを超えても10kgにつき50円のため、たとえば100kg分を1回で運べば500円です。ただし受付は平日のみで、荷下ろしは本人が行う必要があり、少量の自己搬入が多く長時間待つ場合があると市は案内しています。運び出しが難しい大型家具や、平日に時間が取れない片付けは業者に頼み、軽い物・自分で運べる物は自己搬入で先に減らす、という組み合わせが費用を抑えやすい進め方です。持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、自治体と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className={linkCls}>自治体と業者の使い分け</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kyoka-gyousha",
      title: "川越市が公開する許可業者一覧と、業者に頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            川越市は、一般廃棄物収集運搬業の許可業者を一覧で公開しており、業者ごとの取り扱い内容（ごみ・引越・家電など）も記載しています。家電リサイクル法の対象品やパソコンは市が収集・処理しないため、片付けの中にこれらが含まれる場合は、販売店への引き取り依頼か、扱いのある業者に頼むことになります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼む場合は、家庭ごみの収集運搬をどの許可業者が行うのかを見積もりの段階で確認し、市の一覧と照らし合わせておくと安心です。家電4品目の出し方は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>、許可の確かめ方は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 粗大ごみの点数と重さの目安から、市で出せる分を割り振る", b: "5点までなら戸別収集、車で運べて平日に時間が取れる物は自己搬入（40kg以下無料）、それ以外は業者、と品物ごとに割り振ります。戸別収集は最大1か月先になる場合があるため、期限がある片付けでは早めに予約してください。" },
    { t: "② 業者に頼む範囲の写真と品目リストをそろえる", b: "部屋と収納の写真、品目と点数、階数、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目やパソコン、市の施設で処理できないタイヤ・ピアノなどが含まれる場合は先に伝えてください。" },
    { t: "③ 許可と総額の内訳を確認する", b: "家庭ごみの収集運搬を行う許可業者、搬出時の破損に備えた補償の有無を確認し、作業費・処分費・家電リサイクル料金・追加料金の条件を内訳で受け取ってから依頼を確定します。" },
  ],
  faqs: [
    { q: "川越市の粗大ごみの戸別収集はどう申し込みますか？", a: "粗大ごみ収集予約電話（049-239-5056）に、平日に電話で収集日・時間帯を予約します。1回の予約は5点までで、収集日は最大1か月先になる場合があります。収集時は立ち会いで品目を確認し、作業員から受け取る納付書で手数料を支払います（2026年11月1日確認）。" },
    { q: "川越市でごみを自分で持ち込むといくらかかりますか？", a: "東清掃センターまたは資源化センターへの自己搬入は、10kgにつき50円で、1回の搬入量が40kg以下なら無料です。受付は月曜から金曜（祝日も受付）で、搬入できるのは原則ごみを出した本人です。" },
    { q: "家電やパソコンは川越市の粗大ごみに出せますか？", a: "テレビ・エアコン・冷蔵庫・洗濯機・衣類乾燥機・パソコンは、川越市で収集・処理を行っておらず、ごみ処理施設への自己搬入もできません。販売店への引き取り依頼など、家電リサイクル法・パソコンリサイクルの方法で処分します。" },
    { q: "川越市で当日中に不用品を回収してもらえる業者はありますか？", a: "お助けうさぎの公式の対応エリアページでは、川越市は「埼玉県で25分程度で即日回収ができるエリア」に掲載されています（2026年11月1日確認）。到着時間は予約状況で変わるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。" },
  ],
  matome: [
    "川越市の粗大ごみは、平日の電話予約で1回5点まで、収集は最大1か月先になることがある戸別収集と、40kg以下なら無料の自己搬入の二つで出せます。家電4品目とパソコンは市では扱いません。数点なら戸別収集、車で運べる物は自己搬入、運び出しが難しい物や量の多い片付けは業者、という使い分けが基本です。",
    "業者に頼む場合は、川越市を対応エリアに含むことを確認できた4社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモア、日程が迫っているならお助けうさぎ、と目的に合わせて選んでください。市が公開する許可業者一覧も参考に、収集運搬の許可と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみの戸別収集", org: "川越市", url: "https://www.city.kawagoe.saitama.jp/kurashi/gomi/1002469/1002474/1002476.html", updated: "2026年6月3日" },
    { label: "粗大ごみ料金表（令和8年6月2日現在）（PDF）", org: "川越市", url: "https://www.city.kawagoe.saitama.jp/_res/projects/default_project/_page_/001/002/476/sodairyoukinnhyou.pdf" },
    { label: "家庭ごみのごみ処理施設への持込み(自己搬入)", org: "川越市", url: "https://www.city.kawagoe.saitama.jp/kurashi/gomi/1002380/1002397.html", updated: "2025年12月1日" },
    { label: "川越市一般廃棄物収集運搬業許可業者", org: "川越市", url: "https://www.city.kawagoe.saitama.jp/kurashi/gomi/1002455/1002456/1002466.html", updated: "2026年4月6日" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKawagoePage() {
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
              <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2">鹿児島のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2">金沢のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
            </li>
            <li>
              <Link href="/area/kashiwa/" className="text-primary underline underline-offset-2">柏市のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
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
              <Link href="/area/shinjuku-ku/" className="text-primary underline underline-offset-2">新宿区のゴミ屋敷片付け・不用品回収業者おすすめ4選</Link>
            </li>
            <li>
              <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡のゴミ屋敷片付け・不用品回収業者おすすめ5選</Link>
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
