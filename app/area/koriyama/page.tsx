import Link from "next/link";
import AreaCityPage, { buildAreaMetadata, linkCls, type AreaCityData } from "@/components/AreaCityPage";
import { buildCompareRows, buildVendors, vendorSources, type VendorCity } from "@/components/areaVendors";

const CHECKED = "2026年11月1日";

const vc: VendorCity = {
  name: "郡山市",
  checked: CHECKED,
  minna: { url: "https://m-ihinseiri.jp/partners/pref-7/city-7203/", count: 27 },
  curama: { url: "https://curama.jp/disposal/fukushima/4/" },
  meetsmore: { url: "https://meetsmore.com/services/unwanted-item-pick-up/fukushima/koriyama" },
};

const d: AreaCityData = {
  slug: "koriyama",
  name: "郡山市",
  title: "郡山市のゴミ屋敷片付け・不用品回収業者おすすめ3選｜粗大ごみは無料・1回5点まで、クリーンセンター持ち込みは10kgあたり165円【2026年版】",
  description:
    "郡山市でゴミ屋敷片付け・不用品回収を頼める業者3社（みんなの遺品整理・くらしのマーケット・ミツモア）を、郡山市を対応エリアに含むことを公式で確認して比較。無料の粗大ごみ収集（1回5点まで・金曜16時締切で翌週収集）、富久山・河内クリーンセンターへの持ち込み（家庭廃棄物10kgあたり165円）、家電4品目・パソコンの出し方、市が注意を呼びかける無許可の不用品回収業者について、市の公式ページで確認してまとめています。",
  ogDescription:
    "郡山市を対応エリアに含む片付け・不用品回収業者3社と、無料の粗大ごみ収集、クリーンセンターへの持ち込み、家電4品目・パソコンの出し方、無許可業者への注意を市の公式ページで確認してまとめています。",
  h1: "郡山市のゴミ屋敷片付け・不用品回収業者おすすめ3選",
  breadcrumb: "郡山市の片付け・ゴミ屋敷・不用品回収業者おすすめ",
  tags: ["郡山市", "ゴミ屋敷片付け", "不用品回収", "粗大ごみ", "業者比較"],
  checked: CHECKED,
  checkedIso: "2026-11-01",
  lead: [
    "郡山市の粗大ごみ収集は料金が無料で、インターネットか電話で申し込みます。1回の申込みにつき5点までで、毎週金曜日の16時までに受け付けた分が翌週の収集になります。点数の多い片付けでは、富久山・河内の両クリーンセンターへの自己搬入（家庭廃棄物は10kgあたり165円）や、市が許可している業者への依頼と組み合わせることになります。市は、許可なく家庭の不用品を回収する業者によるトラブルが増えているとして注意を呼びかけています。",
    `本記事では、郡山市の公式ページで確認した粗大ごみの申込方法と出し方、クリーンセンターへの持ち込み、家電4品目・パソコンの扱い、無許可業者への注意（${CHECKED}確認）と、郡山市を対応エリアに含むことを各社の公式ページで確認できた業者3社を紹介します。全国対応をうたうサービスでも、郡山市での対応を公式ページで確認できなかった業者は掲載していません。`,
  ],
  vendorLead: (
    <>
      郡山市で片付け・不用品回収を頼める業者・サービスのうち、各社の公式ページに郡山市の業者一覧・依頼ページがあることを{CHECKED}に確認できた3社を紹介します。運営会社や仕組みの説明は当サイトの各レビューページ掲載値にもとづきます。なお、関東の記事で紹介しているお助けうさぎは、公式の対応エリアに福島県が含まれているものの、対応エリアのページと福島県のページで郡山市を確認できなかったため掲載していません。実際の総額は物量・間取り・搬出条件で変わるため、必ず作業前の見積もりで確認してください。
    </>
  ),
  vendors: buildVendors(vc),
  compareRows: buildCompareRows(vc),
  compareNote: (
    <>
      ※「郡山市の対応」は各社公式ページの記載（{CHECKED}確認）です。みんなの遺品整理の料金は公式の費用相場ページ（2026年10月25日確認）の記載です。物量・間取り・搬出条件・オプションにより総額は変動します。業者名のリンクから各社の口コミ・評判ページに移動できます。
    </>
  ),
  factsTitle: "郡山市の粗大ごみ・持ち込み・家電4品目・無許可業者への注意（市の公式情報）",
  factsLead: (
    <>
      郡山市では、長さ1メートル以上、重さ10キログラム以上、または箱型で横幅・高さ・奥行きの合計が1メートル50センチ以上の、ごみ集積所に出せない家財道具などが粗大ごみです。収集は無料ですが、家電4品目やパソコン、建物に付随する物などは粗大ごみとして収集しません。
    </>
  ),
  facts: [
    { k: "申し込み", v: "インターネット（60品目）、または電話（ごみ減量推進課 024-924-2181、月曜〜金曜の9時〜16時30分、土日・祝日・年末年始は休み）。毎週金曜日の16時までに受け付けたものが翌週の収集、16時01分以降は翌々週の収集になる。曜日や時間の指定はできず、収集日は市が収集を委託した業者から前日までに電話で知らせる", src: "郡山市「「粗大ごみ」の処理方法」（更新日 2026年10月1日）" },
    { k: "料金・点数", v: "料金は無料。1回の申込みにつき5点までで、6点以上の場合は翌週に再度申し込む。申し込めるのは収集日に申込み住所に居住している市内在住の人", src: "同上" },
    { k: "出し方", v: "指定された収集日の朝8時までに、住居敷地内の道路際の申し込んだ位置まで出す（道路には出さない）。それぞれに「粗大ごみ」と排出者の氏名を書いた張り紙をする。立会いは不要で、建物内や敷地の奥からの収集はできない", src: "同上" },
    { k: "粗大ごみで収集しない物", v: "事業活動で生じた粗大ごみ、家電リサイクル法の対象品、パソコン、畳・戸などの建物に付随する物、神棚・仏壇、クリーンセンターで処理できない物（自動車部品・バイク・農機械類・ピアノ・ガスボンベなど）", src: "同上" },
    { k: "収集時の請求への注意", v: "市内で指定業者以外の業者による粗大ごみの持ち去りと、収集時に処分料を徴収する事案が発生。市に申し込んだ粗大ごみは無料で回収し、収集時に運搬料や処分料を請求することはないとしている", src: "同上" },
    { k: "持ち込み", v: "富久山クリーンセンター（電話 024-932-3152）と河内クリーンセンター（電話 024-957-2761）。月曜〜金曜の8時30分〜16時に加え、富久山は第1・3・5土曜、河内は第2・4土曜の8時30分〜11時30分（祝日も開所、日曜は閉所）。資源物（ペットボトル・プラスチック製容器包装・びん・缶・紙）は無料", src: "郡山市「ごみ処理施設へのごみの自己搬入方法」（更新日 2026年4月1日）" },
    { k: "持ち込みの料金", v: "家庭廃棄物は10kgあたり165円（2025年10月1日改定、改定前は10kgあたり55円）", src: "郡山市「クリーンセンターでの「ごみ処理手数料の改定」と「あわせ産廃受入停止」について」（更新日 2025年4月11日）" },
    { k: "持ち込みの無料扱い・本人確認", v: "市内在住の人が家庭のごみを自己搬入する場合、ごみ減量推進課または各行政センターで搬入の確認申請をすると無料となるものもある。郡山市外で発生したごみは受け付けず、搬入時に身分証明書等の提示を求める。市内の実家の片付けなどは、搬入する本人の身分証と、ごみの発生元がわかる証明書等の提示を求める", src: "郡山市「ごみ処理施設へのごみの自己搬入方法」、同「クリーンセンター自己搬入時の身分証明書等の確認について」（更新日 2024年5月16日）" },
    { k: "持ち込めない物", v: "家電リサイクル法対象品目、自動車及び自動車部品（タイヤ・バッテリー等）、バイク、農機械類、消火器、建設廃材、サッシ、電気温水器、ピアノ、ドラム缶、ガスボンベ、塗料など", src: "郡山市「ごみ処理施設へのごみの自己搬入方法」" },
    { k: "引越しなどの多量のごみ", v: "自ら搬入するか、運搬を市が許可している業者（有料）に依頼して、各クリーンセンターへ持ち込める。「燃やしてよいごみ」「燃えないごみ」「資源物」に分けて持ち込む", src: "郡山市「引っ越しなどでの一時的に多量のごみを出す場合はどうしたらいいですか?」（更新日 2026年4月1日）" },
    { k: "家電4品目", v: "市では収集・処理を行わない。買い替える店か過去に購入した販売店に引き取りを依頼するか、郵便局でリサイクル券を購入して指定引取場所（日本通運株式会社 郡山指定取引場所）へ自己搬入するか、廃棄物の収集運搬許可業者に依頼する。一般廃棄物収集運搬業者の事業組合として郡山ダストクリーン協業組合（電話 024-946-1004）を案内（別途収集運搬料金）", src: "郡山市「家電リサイクル、パソコンのリサイクル」（更新日 2026年9月25日）" },
    { k: "パソコン", v: "公共施設21か所の使用済小型家電回収ボックス、市と事業連携するリネットジャパンリサイクル株式会社の宅配便回収（パソコン本体を含むと1箱分の回収料金が無料。3辺合計140cm以内・20kg以下）、またはメーカーによる回収", src: "同上" },
    { k: "無許可業者への注意", v: "無料または格安料金をうたって家庭の家電や粗大ごみを回収する業者による不適正処理やトラブルが増えており、そのほとんどが無許可の業者だとしている。郡山市の一般廃棄物収集運搬業許可や市の委託なく回収する業者が無許可業者で、産業廃棄物収集運搬業許可や古物商許可では家庭から出るごみは回収できない。業者に頼む場合は郡山市の一般廃棄物収集運搬業許可業者に依頼するよう案内", src: "郡山市「「無許可」の不用品回収業者にご注意ください」（更新日 2023年2月16日）" },
    { k: "補助金をうたう有料収集", v: "「領収書を市役所に持っていけば補助金が出る」という口実でテレビや自転車などを有料で収集する事例が発生しているが、市はそのような補助制度を実施していない", src: "郡山市「テレビ、自転車などの有料収集にご注意ください！」（更新日 2026年4月1日）" },
    { k: "戸別収集", v: "自らごみ集積所にごみを出すことが困難で、親族の方等から協力を得られない人を対象に、市がごみを戸別に収集し、あわせて安否確認を行う事業がある", src: "郡山市「郡山市要援護者ごみ戸別収集事業」（更新日 2024年12月16日）" },
  ],
  sections: [
    {
      id: "sodai-mochikomi",
      title: "郡山市の無料の粗大ごみ・持ち込みと業者の使い分け",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            郡山市の粗大ごみ収集は無料ですが、1回の申込みは5点までで、収集は週単位（金曜16時までの受付分が翌週）です。点数が多い場合は翌週に改めて申し込むことになるため、家一軒分の片付けでは数週間かかります。また、建物内や敷地の奥からは収集されないため、住居敷地内の道路際まで自分で運び出す必要があります。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            自家用車で運べるなら、富久山・河内の両クリーンセンターに家庭廃棄物10kgあたり165円で持ち込めます（資源物は無料）。市内在住者は、事前に搬入の確認申請をすると無料となるものもあります。点数の多い片付けは、使える物をリユースに回し、無料の粗大ごみ収集とクリーンセンターへの持ち込みで減らせる分を減らしたうえで、運び出しが難しい物や残りを業者に頼む組み合わせが基本です。申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className={linkCls}>粗大ごみ申し込みの流れ</Link>、持ち込みの段取りは<Link href="/jiko-hannyu-shobun/" className={linkCls}>自己搬入での処分</Link>、買取との併用は<Link href="/recycle-shop-kaitori-heiyou/" className={linkCls}>リサイクルショップの買取との併用</Link>で解説しています。
          </p>
        </>
      ),
    },
    {
      id: "mukyoka",
      title: "市が注意を呼びかける無許可業者と、業者を頼むときの確認",
      body: (
        <>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            郡山市は、家庭から出る家電や粗大ごみ等を、郡山市の一般廃棄物収集運搬業許可や市の委託なく回収する業者を無許可の業者とし、産業廃棄物収集運搬業許可や古物商許可では家庭から出るごみは回収できないと案内しています。作業後に高額な料金を請求された、事前の説明と異なる料金を請求された、といった料金トラブルの事例も挙げられています。また、市に申し込んだ粗大ごみの収集時に運搬料や処分料を請求することはないとして、収集時に料金を求める事案への注意も呼びかけています。
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-4">
            片付け業者に頼むときは、買い取ってもらう物と処分する物を見積もりの段階で分け、処分する物の収集運搬を郡山市の一般廃棄物収集運搬業許可業者が行うかを確認してください。家電4品目はリサイクル料金と運搬費が内訳で分かれているかも確かめておくと安心です。確認の手順は<Link href="/gyousha-kyoka-kakunin/" className={linkCls}>業者の許可の確かめ方</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className={linkCls}>見積書の見方</Link>、家電リサイクル法の全体像は<Link href="/kaden-recycle-shobun/" className={linkCls}>家電リサイクル法の対象品の処分方法</Link>でまとめています。
          </p>
        </>
      ),
    },
  ],
  steps: [
    { t: "① 点数と期限から、粗大ごみ収集で間に合うかを判断する", b: "粗大ごみの品目と点数を書き出し、1回5点まで・週単位の無料収集で間に合うかを確かめます。間に合わない分は、クリーンセンターへの持ち込みか、業者への依頼のどちらで出すかを品物ごとに割り振ります。" },
    { t: "② 写真と品目リストで、複数社に同じ条件の見積もりを取る", b: "部屋と収納の中の写真、品目と点数、階数とエレベーターの有無、作業車を停められる場所を各社に同じ条件で伝えます。家電4品目が含まれる場合は、リサイクル料金と運搬費を分けて見積もってもらいます。" },
    { t: "③ 買取と処分を分けた内訳と、収集運搬の許可を確認する", b: "買取できる物と処分する物を分けた見積もりを受け取り、処分分の収集運搬を行う郡山市の許可業者、搬出時の破損に備えた補償の有無、追加料金が発生する条件を作業前に確認します。" },
  ],
  faqs: [
    { q: "郡山市の粗大ごみはどこに申し込みますか？", a: "市の粗大ごみ収集の申込みページ（インターネット、60品目）か、ごみ減量推進課（電話 024-924-2181、月曜〜金曜の9時〜16時30分）に申し込みます。毎週金曜日の16時までに受け付けたものが翌週の収集になり、収集日は前日までに市の委託業者から電話で知らされます（2026年11月1日確認）。" },
    { q: "郡山市の粗大ごみは有料ですか？", a: "郡山市の粗大ごみ収集は無料です。1回の申込みにつき5点までで、6点以上の場合は翌週に再度申し込みます。市は、市に申し込んだ粗大ごみの収集時に運搬料や処分料を請求することはないとしています。" },
    { q: "郡山市でごみを自分で持ち込むといくらかかりますか？", a: "富久山クリーンセンターと河内クリーンセンターに持ち込む場合、家庭廃棄物は10kgあたり165円で、資源物は無料です。市内在住者が家庭のごみを持ち込む場合、事前にごみ減量推進課または各行政センターで搬入の確認申請をすると無料となるものもあります。搬入時には身分証明書等の提示を求められます。" },
    { q: "郡山市で不用品回収業者に頼むときの注意点は？", a: "郡山市は、郡山市の一般廃棄物収集運搬業許可や市の委託なく家庭のごみを回収する業者を無許可の業者とし、産業廃棄物収集運搬業許可や古物商許可では家庭から出るごみは回収できないと案内しています。業者に頼む場合は、処分する物の収集運搬を許可業者が行うかを見積もりの段階で確認してください。" },
    { q: "関東の記事で見たお助けうさぎは郡山市でも使えますか？", a: "お助けうさぎの公式の対応エリアには福島県が含まれていますが、対応エリアのページと福島県のページで郡山市を確認できなかったため、本記事では掲載していません（2026年11月1日確認）。本記事では、公式ページで郡山市の業者一覧・依頼ページを確認できた3社を紹介しています。" },
  ],
  matome: [
    "郡山市の粗大ごみ収集は無料で、1回5点まで・週単位で申し込みます。点数が多い場合は、富久山・河内クリーンセンターへの持ち込み（家庭廃棄物10kgあたり165円、資源物は無料）や、市が許可している業者への依頼と使い分けるのが基本です。",
    "業者に頼む場合は、郡山市を対応エリアに含むことを確認できた3社から、遺品整理や家一軒分ならみんなの遺品整理、一部の品物だけならくらしのマーケット、条件をそろえて見積もりを比べるならミツモアを目的に合わせて選んでください。市は無許可の不用品回収業者への注意を呼びかけているため、処分する物の収集運搬を行う許可業者と総額の内訳を見積もりの段階で確認しておきましょう。",
  ],
  sources: [
    { label: "「粗大ごみ」の処理方法", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/1046.html", updated: "2026年10月1日" },
    { label: "ごみ処理施設へのごみの自己搬入方法", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/1100.html", updated: "2026年4月1日" },
    { label: "クリーンセンターでの「ごみ処理手数料の改定」と「あわせ産廃受入停止」について", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/224/145960.html", updated: "2025年4月11日" },
    { label: "クリーンセンター自己搬入時の身分証明書等の確認について", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/224/110980.html", updated: "2024年5月16日" },
    { label: "引っ越しなどでの一時的に多量のごみを出す場合はどうしたらいいですか?", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/1082.html", updated: "2026年4月1日" },
    { label: "家電リサイクル、パソコンのリサイクル", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/1041.html", updated: "2026年9月25日" },
    { label: "「無許可」の不用品回収業者にご注意ください", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/65846.html", updated: "2023年2月16日" },
    { label: "テレビ、自転車などの有料収集にご注意ください！", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/1096.html", updated: "2026年4月1日" },
    { label: "郡山市要援護者ごみ戸別収集事業", org: "郡山市", url: "https://www.city.koriyama.lg.jp/soshiki/55/63884.html", updated: "2024年12月16日" },
    { label: "お助けうさぎ「ご利用可能なエリア」（福島県の市区町村一覧が掲載されていないことの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" },
    { label: "お助けうさぎ「福島県の不用品回収」（郡山市の記載がないことの確認）", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/fukushima/" },
    ...vendorSources(vc),
  ],
};

export const metadata = buildAreaMetadata(d);

export default function AreaKoriyamaPage() {
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
