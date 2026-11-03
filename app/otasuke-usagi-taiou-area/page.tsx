import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, H2, P, A, Cards, Summary, Toc, FaqList, SourceList, RelatedGrid, ArticleHeader, JsonLd, type Source, type Faq, type Related } from "@/components/ArticleParts";

// お助けうさぎの公式「ご利用可能なエリア」（2026-11-03 確認）の対応エリア・即日対応の目安と、
// 各市区の粗大ごみの公式案内（2026-11-03 に開いて表示を確認）を組み合わせたページ。料金相場は載せない。

const PATH = "/otasuke-usagi-taiou-area/";
const TITLE = "お助けうさぎの対応エリアと即日対応の目安｜1都3県の市区別一覧と粗大ごみの公式窓口";
const DESC =
  "お助けうさぎの対応エリア（13都県）と、東京都・神奈川県・埼玉県・千葉県の即日対応の目安（25分程度／45分〜1時間30分程度）を公式の一覧どおりに整理し、当サイトで扱う36市区の粗大ごみの公式案内（2026年11月3日確認）とあわせて掲載します。";
const PUBLISHED = "2026-11-03";
const CHECKED = "2026年11月3日";
const USAGI_AREA = "https://otasukeusagi.jp/area/";

type CityRow = { pref: string; name: string; slug: string; band: string; label: string; url: string; extra?: { href: string; label: string } };

const T25 = "25分程度（東京都は全エリア）";
const K25 = "25分程度";
const K45 = "45分〜1時間30分程度";

const rows: CityRow[] = [
  { pref: "東京都", name: "千代田区", slug: "chiyoda-ku", band: T25, label: "粗大ごみの出し方と料金（区民が日常生活で使用したもの）", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/gomi/wakekata/sodaigomi/index.html" },
  { pref: "東京都", name: "中央区", slug: "chuo-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.chuo.lg.jp/a0039/kurashi/gomi/bunbetsu/wakekata/sodaigominodasikata.html" },
  { pref: "東京都", name: "港区", slug: "minato-ku", band: T25, label: "粗大ごみの収集", url: "https://www.city.minato.tokyo.jp/gomigenryou/kurashi/gomi/kate/k-wakekata/sodaigomi.html" },
  { pref: "東京都", name: "新宿区", slug: "shinjuku-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00016.html" },
  { pref: "東京都", name: "文京区", slug: "bunkyo-ku", band: T25, label: "粗大ごみの出し方(概ね一辺30cm以上ある大型ごみ）", url: "https://www.city.bunkyo.lg.jp/b039/p000932/index.html" },
  { pref: "東京都", name: "台東区", slug: "taito-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.taito.lg.jp/kurashi/gomi/wakekata/gomiinfo/sodaigomi/sodaigomi.html" },
  { pref: "東京都", name: "墨田区", slug: "sumida-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.sumida.lg.jp/kurashi/gomi_recycle/kateikei/gomi_dashikata/sodaidasu/index.html" },
  { pref: "東京都", name: "江東区", slug: "koto-ku", band: T25, label: "粗大ごみ", url: "https://www.city.koto.lg.jp/kurashi/gomi/kate/sodaigomi/index.html" },
  { pref: "東京都", name: "品川区", slug: "shinagawa-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1004032/1004033.html" },
  { pref: "東京都", name: "目黒区", slug: "meguro-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.meguro.tokyo.jp/kurashi/gomi/bunbetsu/sodaigomi/index.html" },
  { pref: "東京都", name: "大田区", slug: "ota-ku", band: T25, label: "粗大ごみ", url: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/sodai.html" },
  { pref: "東京都", name: "世田谷区", slug: "setagaya-ku", band: T25, label: "粗大ごみ", url: "https://www.city.setagaya.lg.jp/kurashi/gomi/category/11682.html" },
  { pref: "東京都", name: "渋谷区", slug: "shibuya-ku", band: T25, label: "粗大ごみ", url: "https://www.city.shibuya.tokyo.jp/kurashi/gomi/kateigomi/gomi_sodai.html" },
  { pref: "東京都", name: "中野区", slug: "nakano-ku", band: T25, label: "粗大ごみの申込み", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/gomi/sodaigomi/index.html" },
  { pref: "東京都", name: "杉並区", slug: "suginami-ku", band: T25, label: "粗大ごみの出し方・申し込み方法", url: "https://www.city.suginami.tokyo.jp/s105/727.html" },
  { pref: "東京都", name: "豊島区", slug: "toshima-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.toshima.lg.jp/150/kurashi/gomi/shigen/009383.html" },
  { pref: "東京都", name: "北区", slug: "kita-ku", band: T25, label: "粗大ごみについて", url: "https://www.city.kita.lg.jp/living/bins/1002013/1002020/1002021.html" },
  { pref: "東京都", name: "荒川区", slug: "arakawa-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.arakawa.tokyo.jp/a025/recycle/sodaigomi/sodaigomi-2.html" },
  { pref: "東京都", name: "板橋区", slug: "itabashi-ku", band: T25, label: "粗大ごみ", url: "https://www.city.itabashi.tokyo.jp/tetsuduki/gomi/sodai/index.html" },
  { pref: "東京都", name: "練馬区", slug: "nerima-ku", band: T25, label: "粗大ごみ（有料・申込制）・料金検索", url: "https://www.city.nerima.tokyo.jp/kurashi/gomi/wakekata/sodai.html" },
  { pref: "東京都", name: "足立区", slug: "adachi-ku", band: T25, label: "粗大ごみの出し方", url: "https://www.city.adachi.tokyo.jp/seso/kurashi/kankyo/gomi-wakekata/sodai.html" },
  { pref: "東京都", name: "葛飾区", slug: "katsushika-ku", band: T25, label: "粗大ごみ・家電など", url: "https://www.city.katsushika.lg.jp/kurashi/1000048/1001536/index.html" },
  { pref: "東京都", name: "江戸川区", slug: "edogawa-ku", band: T25, label: "粗大ごみ", url: "https://www.city.edogawa.tokyo.jp/e025/kurashi/gomi_recycle/kategomi/sodai_mosikomi.html" },
  { pref: "東京都", name: "八王子市", slug: "hachioji", band: T25, label: "粗大ごみの申込", url: "https://www.city.hachioji.tokyo.jp/kurashi/gomi/kateigomi/sodaigomi/index.html" },
  { pref: "神奈川県", name: "横浜市", slug: "yokohama", band: K25, label: "粗大ごみの申込み", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/sodaigomi/dashikata/sodaigomi.html", extra: { href: "/area/yokohama/sodaigomi/", label: "横浜市の粗大ごみの手数料" } },
  { pref: "神奈川県", name: "川崎市", slug: "kawasaki", band: K25, label: "粗大ごみの出し方", url: "https://www.city.kawasaki.jp/300/page/0000012773.html", extra: { href: "/area/kawasaki/sodaigomi/", label: "川崎市の粗大ごみの手数料" } },
  { pref: "神奈川県", name: "相模原市", slug: "sagamihara", band: K25, label: "粗大ごみの出し方", url: "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/katei/1008322.html" },
  { pref: "神奈川県", name: "横須賀市", slug: "yokosuka", band: K45, label: "粗大ごみ（有料）", url: "https://www.city.yokosuka.kanagawa.jp/4150/g_info/l100000701.html" },
  { pref: "神奈川県", name: "藤沢市", slug: "fujisawa", band: K45, label: "大型ごみ・特別大型ごみの分類と出し方", url: "https://www.city.fujisawa.kanagawa.jp/kankyo-j/kurashi/gomi/wakekata/h30bunrui.html" },
  { pref: "埼玉県", name: "さいたま市", slug: "saitama", band: K25, label: "粗大ごみ・特定適正処理困難物の出し方", url: "https://www.city.saitama.lg.jp/001/006/010/003/p072165.html" },
  { pref: "埼玉県", name: "川口市", slug: "kawaguchi", band: K25, label: "粗大ごみ", url: "https://www.city.kawaguchi.lg.jp/kurashi_tetsuzuki/gomi_risaikuru/2/sodaigomi/index.html" },
  { pref: "埼玉県", name: "川越市", slug: "kawagoe", band: K25, label: "粗大ごみの戸別収集", url: "https://www.city.kawagoe.saitama.jp/kurashi/gomi/1002469/1002474/1002476.html" },
  { pref: "埼玉県", name: "越谷市", slug: "koshigaya", band: K25, label: "粗大ごみの処分方法について", url: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/kateigomi/sodaigomino-shobunnhouhou.html" },
  { pref: "千葉県", name: "船橋市", slug: "funabashi", band: K25, label: "粗大ごみの出し方", url: "https://www.city.funabashi.lg.jp/kurashi/gomi/002/p001549.html" },
  { pref: "千葉県", name: "千葉市", slug: "chiba", band: K45, label: "粗大ごみの出し方", url: "https://www.city.chiba.jp/kankyo/junkan/shushugyomu/sodaigomi.html" },
  { pref: "千葉県", name: "柏市", slug: "kashiwa", band: K45, label: "粗大ごみ(柏地域）", url: "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/kashiwaarea/guide-k/k_3.html" },
];

const otherPrefs = [
  { pref: "茨城県", pages: [{ slug: "mito", name: "水戸市" }] },
  { pref: "栃木県", pages: [{ slug: "utsunomiya", name: "宇都宮市" }] },
  { pref: "群馬県", pages: [{ slug: "maebashi", name: "前橋市" }, { slug: "takasaki", name: "高崎市" }] },
  { pref: "山梨県", pages: [{ slug: "kofu", name: "甲府市" }] },
  { pref: "長野県", pages: [{ slug: "nagano", name: "長野市" }, { slug: "matsumoto", name: "松本市" }] },
  { pref: "静岡県", pages: [{ slug: "shizuoka", name: "静岡市" }, { slug: "hamamatsu", name: "浜松市" }] },
  { pref: "愛知県", pages: [{ slug: "nagoya", name: "名古屋市" }, { slug: "toyohashi", name: "豊橋市" }, { slug: "ichinomiya", name: "一宮市" }, { slug: "toyota", name: "豊田市" }] },
  { pref: "岐阜県", pages: [{ slug: "gifu", name: "岐阜市" }] },
  { pref: "福島県", pages: [{ slug: "fukushima", name: "福島市" }, { slug: "koriyama", name: "郡山市" }, { slug: "iwaki", name: "いわき市" }] },
];

const points = [
  {
    title: "東京都は全域が「25分程度」",
    body: "お助けうさぎの公式ページは、東京都を即日で不用品回収が可能なエリアとし、「東京都は全エリア25分程度で即日回収できます」と記載しています。首都圏に5か所の営業所があり、常時50台以上のトラックと連携しているため最短25分程度で伺えることもある一方、予約状況により45分〜1時間30分程度の到着で調整するとしています。",
  },
  {
    title: "神奈川県・埼玉県・千葉県は市町村ごとに2つの目安",
    body: "神奈川県・埼玉県・千葉県では、市町村ごとに「25分程度で即日回収ができるエリア」と「45分〜1時間30分程度で即日回収ができるエリア」に分けて掲載しています。神奈川県の25分程度の区分は横浜市・川崎市・厚木市・綾瀬市・海老名市・相模原市・座間市・大和市の8市、千葉県の25分程度の区分は市川市・浦安市・鎌ケ谷市・流山市・習志野市・船橋市・松戸市の7市です。埼玉県はさいたま市・川越市・川口市・越谷市・所沢市など28市町が25分程度の区分に入っています。",
  },
  {
    title: "ほかの9県は県単位の掲載",
    body: "対応エリアには、1都3県のほか、茨城県・山梨県・栃木県・群馬県・静岡県・長野県・愛知県・福島県・岐阜県が挙がっています。これらの県は公式ページに市町村ごとの一覧や即日対応の目安がないため、お住まいの市町村が対象かどうかは、依頼前にお助けうさぎに確認してください。",
  },
  {
    title: "目安の時間は到着までの時間で、作業の完了時間ではない",
    body: "公式ページの「25分程度」「45分〜1時間30分程度」は、問い合わせ当日に回収に伺うまでの時間の目安で、回収現場の場所や予約状況により変動するとしています。作業にかかる時間や料金は、品物の量や運び出しの条件で変わるため、見積もりで確認してください。",
  },
];

const howto = [
  {
    title: "市区の粗大ごみは申し込みから収集まで日数がかかる",
    body: "市区の粗大ごみは事前申込制で、申し込みから収集日まで日数がかかります。たとえば横浜市は受付から収集まで2週間程度かかり、1回の収集申し込みは9個までと案内しています。家具1〜2点を手数料で処分できるなら、まず市区の収集や持ち込みを確認するのが基本です。",
  },
  {
    title: "当日中に片付けたい・量が多いときに業者を組み合わせる",
    body: "退去日が迫っている、室内からの運び出しが難しい、家一軒分で量が多いといった場合は、即日対応のエリアに入っている業者への依頼が選択肢になります。その場合も、回収した物をどこで処分するのかを契約前に確認してください。市区によっては、家庭ごみの収集運搬について独自の案内を出しています。",
  },
  {
    title: "市区の案内を先に開いておく",
    body: "下の表の「市区の粗大ごみの公式案内」は、各市区の公式ページを2026年11月3日に開いて表示を確認したものです。手数料、申し込み方法、持ち込みの可否、不用品回収業者への注意喚起の有無は市区ごとに違うため、業者に頼む前に一度目を通しておくと、市区の収集で済む物と業者に頼む物を分けやすくなります。",
  },
];

const faqs: Faq[] = [
  { q: "お助けうさぎはどこの地域に対応していますか。", a: "公式の対応エリアは、東京都・神奈川県・埼玉県・千葉県・茨城県・山梨県・栃木県・群馬県・静岡県・長野県・愛知県・福島県・岐阜県の13都県です（2026年11月3日確認）。" },
  { q: "お助けうさぎに即日で回収してもらえるのはどの地域ですか。", a: "公式ページで即日対応エリアとして市町村が掲載されているのは、東京都・神奈川県・埼玉県・千葉県です。東京都は全エリア25分程度、神奈川県・埼玉県・千葉県は市町村ごとに25分程度または45分〜1時間30分程度の目安が示されています。" },
  { q: "千葉市はお助けうさぎの即日対応の対象ですか。", a: "千葉市は、公式ページの「千葉県で45分～1時間30分程度で即日回収ができるエリア」に含まれています。25分程度の区分には船橋市・市川市・松戸市などが入っています。" },
  { q: "愛知県や静岡県の市町村は対象ですか。", a: "愛知県・静岡県は対応エリアに含まれますが、公式ページには市町村ごとの一覧や即日対応の目安がありません。お住まいの市町村が対象かどうかは、依頼前にお助けうさぎに確認してください。" },
];

const sources: Source[] = [
  { label: "ご利用可能なエリア｜不用品回収・買取・ゴミ屋敷片付け【お助けうさぎ】", org: "お助けうさぎ", url: USAGI_AREA },
  { label: "粗大ごみの申込み", org: "横浜市（最終更新日 2026年10月30日）", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/sodaigomi/dashikata/sodaigomi.html" },
  { label: "粗大ごみの収集をしてほしい", org: "横浜市（最終更新日 2026年10月30日）", url: "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/sodaigomi/dashikata/shuushuu.html" },
];

const related: Related[] = [
  { href: "/review/otasuke-usagi/", label: "お助けうさぎの公式の利用者の声と運営会社", desc: "運営会社と不用品回収の対応" },
  { href: "/area/tokyo/", label: "東京の片付け・不用品回収業者", desc: "東京都で頼める業者" },
  { href: "/area/yokohama/sodaigomi/", label: "横浜市の粗大ごみの手数料と出し方", desc: "品目別の金額と自己搬入ヤード" },
  { href: "/area/kawasaki/sodaigomi/", label: "川崎市の粗大ごみの手数料と出し方", desc: "長さで決まる3つの金額" },
  { href: "/sodaigomi-konzatsu-taisaku/", label: "粗大ごみの予約が取れないときの対処", desc: "期限に間に合わせる段取り" },
  { href: "/gyousha-kyoka-kakunin/", label: "片付け業者の許可の確認方法", desc: "一般廃棄物の許可の見方" },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const linkCls = "text-primary underline underline-offset-2";

export default function Page() {
  const prefs = ["東京都", "神奈川県", "埼玉県", "千葉県"];
  const toc = [
    { href: "#taiou", label: "1｜公式の対応エリアと即日対応の目安" },
    { href: "#ichiran", label: "2｜1都3県の市区別一覧と粗大ごみの公式案内" },
    { href: "#hoka", label: "3｜1都3県以外の9県" },
    { href: "#tsukaiwake", label: "4｜市区の粗大ごみと業者の使い分け" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#shutten", label: "6｜出典・参考にした公式情報" },
    { href: "#related", label: "7｜関連記事" },
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd title={TITLE} desc={DESC} path={PATH} crumb="お助けうさぎの対応エリア" faqs={faqs} published={PUBLISHED} updated={PUBLISHED} />
      <Breadcrumb items={[{ label: "お助けうさぎの対応エリア" }]} />

      <header className="mt-2">
        <ArticleHeader label="業者の対応エリア" title={TITLE} published={PUBLISHED} updated={PUBLISHED} />
        <P>
          不用品回収のお助けうさぎは、公式の「ご利用可能なエリア」のページで、対応する13都県と、東京都・神奈川県・埼玉県・千葉県の即日対応の目安（25分程度／45分〜1時間30分程度）を市町村ごとに掲載しています。
        </P>
        <P>
          この記事では、そのページを{CHECKED}に開いて確認した内容を整理し、当サイトで市区のページを設けている1都3県の36市区について、各市区の粗大ごみの公式案内（同日に開いて表示を確認）と並べて掲載しました。市区の収集で出せる物と、当日中に業者へ頼みたい物を分けて考えるときの参考にしてください。
        </P>
      </header>

      <Summary
        points={[
          "公式の対応エリアは東京都・神奈川県・埼玉県・千葉県・茨城県・山梨県・栃木県・群馬県・静岡県・長野県・愛知県・福島県・岐阜県の13都県",
          "東京都は全エリアが即日対応「25分程度」。神奈川県・埼玉県・千葉県は市町村ごとに25分程度か45分〜1時間30分程度",
          "ほかの9県は県単位の掲載で、市町村ごとの一覧や即日対応の目安はない",
          "市区の粗大ごみは申し込みから収集まで日数がかかる。急ぐ物・量が多い物だけ業者に回すと分けやすい",
        ]}
      />
      <Toc items={toc} />

      <H2 id="taiou" num="1">公式の対応エリアと即日対応の目安</H2>
      <Cards items={points} />

      <H2 id="ichiran" num="2">1都3県の市区別一覧と粗大ごみの公式案内</H2>
      <P>
        即日対応の目安は、お助けうさぎ公式の「ご利用可能なエリア」の区分どおりです。市区の粗大ごみの公式案内は、各市区の公式ページのページ名で掲載しています（いずれも{CHECKED}確認）。
      </P>
      {prefs.map((pref) => (
        <section key={pref} className="mb-8">
          <h3 className="text-lg font-bold text-text-primary mb-3">{pref}</h3>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="text-left p-3 font-bold text-text-primary border-b border-border w-[18%]">市区</th>
                  <th className="text-left p-3 font-bold text-text-primary border-b border-border w-[24%]">即日対応の目安（公式）</th>
                  <th className="text-left p-3 font-bold text-text-primary border-b border-border">市区の粗大ごみの公式案内</th>
                </tr>
              </thead>
              <tbody>
                {rows
                  .filter((r) => r.pref === pref)
                  .map((r) => (
                    <tr key={r.slug} className="border-b border-border align-top">
                      <td className="p-3 leading-7">
                        <A href={`/area/${r.slug}/`}>{r.name}</A>
                      </td>
                      <td className="p-3 leading-7 text-text-secondary">{r.band}</td>
                      <td className="p-3 leading-7 text-text-secondary">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                          {r.name}「{r.label}」
                        </a>
                        {r.extra && (
                          <>
                            <br />
                            <A href={r.extra.href}>{r.extra.label}</A>（当サイト）
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
      <P>
        市区名のリンクは、当サイトのその市区の片付け・不用品回収のページです。表にない市町村が即日対応のどの区分に入るかは、
        <a href={USAGI_AREA} target="_blank" rel="noopener noreferrer" className={linkCls}>
          お助けうさぎ公式の対応エリアのページ
        </a>
        で確認できます。
      </P>

      <H2 id="hoka" num="3">1都3県以外の9県</H2>
      <P>
        茨城県・山梨県・栃木県・群馬県・静岡県・長野県・愛知県・福島県・岐阜県は、公式の対応エリアに県名で挙がっていますが、市町村ごとの一覧や即日対応の目安は掲載されていません。当サイトでは、これらの県の次の市のページで片付け業者と市の案内をまとめています。お助けうさぎに依頼する場合は、お住まいの市町村が対象かどうかを事前に確認してください。
      </P>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary list-disc pl-5">
        {otherPrefs.map((p) => (
          <li key={p.pref}>
            {p.pref}：
            {p.pages.map((x, i) => (
              <span key={x.slug}>
                {i > 0 && "・"}
                <A href={`/area/${x.slug}/`}>{x.name}</A>
              </span>
            ))}
          </li>
        ))}
      </ul>

      <H2 id="tsukaiwake" num="4">市区の粗大ごみと業者の使い分け</H2>
      <Cards items={howto} />
      <P>
        お助けうさぎの運営会社と公式の利用者の声は<A href="/review/otasuke-usagi/">お助けうさぎのページ</A>、業者の許可の確かめ方は<A href="/gyousha-kyoka-kakunin/">片付け業者の許可の確認方法</A>、市区の手数料の違いは<A href="/sodaigomi-tesuryou-hikaku/">粗大ごみの手数料を主な自治体で比較</A>で解説しています。
      </P>

      <H2 id="faq" num="5">よくある質問</H2>
      <FaqList faqs={faqs} />

      <H2 id="shutten" num="6">出典・参考にした公式情報</H2>
      <P>対応エリアと即日対応の目安は、お助けうさぎ公式の対応エリアのページにもとづいています。各市区の粗大ごみの公式案内は、上の表に掲載したページです。</P>
      <SourceList sources={sources} checked={CHECKED} />

      <H2 id="related" num="7">関連記事</H2>
      <RelatedGrid items={related} />

      <p className="text-xs text-text-muted">
        本記事は、お助けうさぎの公式ページと各市区の公式ページを{CHECKED}に確認した内容にもとづきます。対応エリアや即日対応の目安は変わることがあるため、依頼前に公式の最新の案内をご確認ください。
      </p>
    </article>
  );
}
