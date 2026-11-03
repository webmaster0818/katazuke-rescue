import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "函館市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-1/city-1202/", count: 45 },
  curama: { url: "https://curama.jp/disposal/hokkaido/2/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/hokkaido/hakodate" },
};

const d: AreaCityData = {
  slug: "hakodate",
  name: "函館市",
  title: "函館市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは電話申込・200円〜600円、七五郎沢処分場は予約制【2026年版】",
  description:
    "函館市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を比較。粗大ごみの電話申込と200円・400円・600円の処理券、一時多量ごみ、七五郎沢廃棄物最終処分場への持ち込み（事前予約制・10kgまでごとに26.4円）、家電4品目・パソコンを公式ページで確認してまとめています。",
  ogDescription:
    "函館市を対応エリアに含む片付け・不用品回収業者3社と、粗大ごみの申込・手数料、一時多量ごみ、七五郎沢廃棄物最終処分場への持ち込み、家電4品目・パソコンの出し方を市の公式ページで確認してまとめています。",
  h1: "函館市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "函館市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["函館市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "函館市の粗大ごみは電話での申し込みが必要で、重さに応じて200円・400円・600円のごみ処理券を貼って出します。木製品と金属製品に分けて収集するため収集日が異なり、それぞれ3点まで申し込める仕組みで、収集まで2週間から3週間かかる場合もあります。引っ越しや家の片づけ（大掃除や遺品整理）で多量のごみを一度に処理する場合は、分別して自分で処理施設に運ぶか、一般廃棄物収集運搬許可業者に依頼するよう市が案内しています。",
    `本記事では、函館市の公式ページで確認した粗大ごみの申込方法と手数料、一時多量ごみの出し方、七五郎沢廃棄物最終処分場への持ち込み、家電4品目・パソコンの扱い（${CHECKED}確認）と、函館市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、函館市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      函館市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに函館市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリア（13都県）に北海道が含まれないため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「函館市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "函館市の粗大ごみ・一時多量ごみ・持ち込み・家電4品目（市の公式情報）",
  factsLead: (
    <>
      函館市の粗大ごみは、大型家具（ベッド・机・タンスなど）・自転車・6畳以上のじゅうたんなどで、重量がおおむね10kg以上100kg以下、辺または径がおおむね2m以下のものです。家電4品目やパソコンは市では収集せず、最終処分場への持ち込みもできません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "電話での申し込みが必要。環境部清掃事業課ごみ収集担当（0138-51-5163）、月曜〜金曜の8時45分〜17時30分（年末年始を除く）。ごみの品目・住所・氏名・電話番号を伝えると、ごみ処理券の種類と収集日が知らされる。収集まで2週間から3週間かかる場合がある", src: "函館市「粗大ごみ（有料）について」（更新日 2026年9月4日）" },
    { k: "収集日・点数", v: "木製品と金属製品に分別して収集しているため収集日が違う。それぞれ3点まで申し込める", src: "同上" },
    { k: "手数料", v: "ごみ処理券は重さで3種類。200円（30kg未満）、400円（30kg以上50kg未満）、600円（50kg以上）。例: 自転車200円、家具類200円〜600円、大型ストーブ（煙突式・FF式、灯油を完全に抜く）200円、じゅうたん（6畳以上）200円", src: "同上" },
    { k: "支払い・出し方", v: "申し込み後、指定された種類のごみ処理券をスーパー・コンビニなどの取扱店で購入し、粗大ごみの見えやすいところに直接貼る。指定された収集日に、電話で打ち合わせた場所（玄関前等）に出す。本庁管内と湯川・銭亀沢・亀田各支所管内は朝8時30分まで、戸井・恵山・椴法華・南茅部各支所管内は朝8時まで", src: "同上" },
    { k: "一時多量ごみ", v: "引っ越し、家の片づけ（大掃除や遺品整理）など一般家庭から出る多量のごみを一度に処理する場合は、きちんと分別してから自分で処理施設に運ぶか、一般廃棄物収集運搬許可業者に依頼するよう案内。収集運搬許可業者は函館清掃事業協同組合（電話 54-3565）が紹介し、料金は自己負担", src: "函館市「市で収集しないごみ」（更新日 2026年10月23日）、同「家庭ごみをご自分で処理する場合」（公開日 2019年4月1日、更新日の記載なし）" },
    { k: "持ち込み", v: "燃やせないごみ・粗大ごみは函館市七五郎沢廃棄物最終処分場（東山町150番地1）。搬入には事前予約が必要で、インターネット（函館市公共施設予約サービス）か予約専用ダイヤル（0138）83-6770で予約する。受入時間は月曜〜土曜と祝日の8時45分〜17時、日曜日と1月1日〜3日は休み", src: "函館市「函館市七五郎沢廃棄物最終処分場」（更新日 2026年10月7日）" },
    { k: "持ち込みの料金・条件", v: "家庭ごみは10kgまでごとに26.4円（税込）で、すべて現金で徴収。搬入前後の車両重量からごみの重量を算出する。受け入れは排出者自ら運搬・搬入するものに限り、容積2立方メートル・重量100kg・最大の辺または径2メートルを超えないもの。荷降ろしは搬入した本人が行う。恵山クリーンセンター・南茅部クリーンセンターは事前予約不要", src: "函館市「廃棄物最終処分場の利用について」（更新日 2026年5月22日）" },
    { k: "施設の受入日", v: "恵山クリーンセンターは月曜・金曜・第2日曜の10時〜15時、南茅部クリーンセンターは火曜・土曜・第3日曜の10時〜15時", src: "函館市「各施設の受入時間（ごみ・リサイクル）について」（更新日 2026年3月23日）" },
    { k: "家電4品目", v: "市では収集せず、最終処分場への持ち込みもできない。購入店・買い替え店に引き取りを依頼するか、購入店がわからない等で自分で運ぶ手段がない場合は、函館清掃事業協同組合（0138-54-3565）から収集運搬許可業者の紹介を受けて依頼する。自分で運べる場合は、郵便局でリサイクル料金を払って指定引取場所（市内2か所）に持ち込むか、中間処理施設に持ち込む", src: "函館市「家電4品目の処理方法（市で収集しないごみ）」（更新日 2025年12月1日）" },
    { k: "パソコン", v: "市では収集せず、最終処分場への持ち込みもできない。PCリサイクルマーク付きはメーカーが新たな料金負担なしで回収。マークのないものは、メーカーの自主回収、中間処理施設への持ち込み、函館清掃事業協同組合から紹介を受けた収集運搬許可業者への依頼のいずれか", src: "函館市「パソコン・ディスプレイの処理方法（市で収集しないごみ）」（更新日 2025年12月1日）" },
  ],
  sections: [
    {
      id: "sodai-mochikomi",
      title: "函館市の粗大ごみ・一時多量ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            函館市の粗大ごみは電話でのみ申し込め、木製品と金属製品で収集日が分かれ、それぞれ3点までです。収集まで2週間から3週間かかる場合もあるため、家具の入れ替え程度なら足りても、部屋ごとや家一軒分の片付けを粗大ごみの収集だけで終えるのは難しくなります。市は、引っ越しや家の片づけ（大掃除や遺品整理）で多量のごみを一度に処理する場合は、分別して自分で処理施設に運ぶか、一般廃棄物収集運搬許可業者に依頼するよう案内しています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、七五郎沢廃棄物最終処分場への持ち込みは家庭ごみ10kgまでごとに26.4円です。ただし事前予約が必要で、受け入れは燃やせないごみ・粗大ごみに限られ、荷降ろしも自分で行います。点数の多い片付けは、使える物をリユースに回し、持ち込みと粗大ごみの収集で減らせる分を先に減らしたうえで、残りの運び出しを業者に頼む組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "kaden-gyousha",
      title: "家電4品目・パソコンの出し方と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            函館市では家電4品目もパソコンも市の収集の対象外で、最終処分場への持ち込みもできません。購入店に依頼できず、自分で運ぶ手段もない場合は、函館清掃事業協同組合から収集運搬許可業者の紹介を受けて依頼するよう案内されています。片付け業者に家電4品目もまとめて頼む場合は、リサイクル料金と運搬費が内訳で分かれているかを確認すると判断しやすくなります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を行う許可業者を確認してください。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 点数と期限から、粗大ごみの収集で間に合うかを判断する", b: "粗大ごみの品目と点数を木製品・金属製品に分けて書き出し、それぞれ3点まで・収集まで2週間から3週間程度という条件で間に合うかを確かめます。間に合わない分は、処分場への持ち込み、許可業者への依頼、片付け業者への依頼のどれで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目やパソコンが含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "函館市の粗大ごみはどこに申し込みますか？", a: "環境部清掃事業課ごみ収集担当（0138-51-5163、月曜〜金曜の8時45分〜17時30分、年末年始を除く）に電話で申し込みます。粗大ごみは電話での申し込みが必要です（2026年11月1日確認）。" },
    { q: "函館市の粗大ごみの手数料はいくらですか？", a: "ごみ処理券は重さで決まり、30kg未満は200円、30kg以上50kg未満は400円、50kg以上は600円です。例えば自転車は200円、家具類は大きさや重さにより200円〜600円です。" },
    { q: "函館市の粗大ごみは一度に何点まで出せますか？", a: "木製品と金属製品に分けて収集しているため収集日が異なり、それぞれ3点まで申し込めます。収集まで2週間から3週間かかる場合があります。" },
    { q: "函館市でごみを自分で持ち込むといくらかかりますか？", a: "燃やせないごみ・粗大ごみを七五郎沢廃棄物最終処分場に持ち込む場合、家庭ごみは10kgまでごとに26.4円（税込、現金払い）です。搬入には事前予約（インターネットまたは予約専用ダイヤル（0138）83-6770）が必要で、荷降ろしは自分で行います。" },
    { q: "関東の記事で見たお助けうさぎは函館市でも使えますか？", a: "お助けうさぎの公式の対応エリアは東京・神奈川・埼玉・千葉などの13都県で、北海道は含まれていません（2026年11月1日確認）。本記事では、公式ページで函館市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "函館市の粗大ごみは電話で申し込み、重さに応じた200円・400円・600円のごみ処理券を貼って出します。木製品と金属製品で収集日が分かれ、それぞれ3点までです。引っ越しや遺品整理などで多量に出る場合は、分別して処理施設へ持ち込む（七五郎沢廃棄物最終処分場は事前予約制・10kgまでごとに26.4円）か、函館清掃事業協同組合の紹介する許可業者に依頼するのが市の案内です。",
    "業者に頼む場合は、函館市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。家電4品目やパソコンは市で収集しないため、収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "粗大ごみ（有料）について", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2014011400153/", updated: "2026年9月4日" },
    { label: "市で収集しないごみ", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2014021000169/", updated: "2026年10月23日" },
    { label: "家庭ごみをご自分で処理する場合", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2014011700772/" },
    { label: "函館市七五郎沢廃棄物最終処分場", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2023091500066/", updated: "2026年10月7日" },
    { label: "廃棄物最終処分場の利用について", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2017033100063/", updated: "2026年5月22日" },
    { label: "各施設の受入時間（ごみ・リサイクル）について", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2014021700304/", updated: "2026年3月23日" },
    { label: "家電4品目の処理方法（市で収集しないごみ）", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2014021000176/", updated: "2025年12月1日" },
    { label: "パソコン・ディスプレイの処理方法（市で収集しないごみ）", org: "函館市", url: "https://www.city.hakodate.hokkaido.jp/docs/2014021000183/", updated: "2025年12月1日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（北海道が対象外であることの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaHakodatePage() {
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
              <Link href="/area/edogawa-ku/" className="text-primary underline underline-offset-2">江戸川区でゴミ屋敷片付け・不用品回収を頼める業者</Link>
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
