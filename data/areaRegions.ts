// TOP「エリアから探す」用の一覧。app/area/<slug>/page.tsx が実在する市区だけを並べる（2026-11-04 時点 110ページ）。
// 東京都は別枠（東京都全体・23区・八王子市）。
// 市のまとめページが無く「ゴミ屋敷対策」ページだけがある自治体（蒲郡市・泉佐野市・鎌倉市）は extra として別に並べる。
export type AreaLink = { slug: string; label: string };
export type ExtraLink = { href: string; label: string };
export type Prefecture = { name: string; areas: AreaLink[]; extra?: ExtraLink[] };
export type Region = { name: string; prefectures: Prefecture[] };

const a = (slug: string, label: string): AreaLink => ({ slug, label });
const g = (slug: string, label: string): ExtraLink => ({ href: `/area/${slug}/gomiyashiki-taisaku/`, label: `${label}のゴミ屋敷対策` });

export const tokyo = {
  top: a("tokyo", "東京都"),
  wards: [
    a("chiyoda-ku", "千代田区"), a("chuo-ku", "中央区"), a("minato-ku", "港区"), a("shinjuku-ku", "新宿区"),
    a("bunkyo-ku", "文京区"), a("taito-ku", "台東区"), a("sumida-ku", "墨田区"), a("koto-ku", "江東区"),
    a("shinagawa-ku", "品川区"), a("meguro-ku", "目黒区"), a("ota-ku", "大田区"), a("setagaya-ku", "世田谷区"),
    a("shibuya-ku", "渋谷区"), a("nakano-ku", "中野区"), a("suginami-ku", "杉並区"), a("toshima-ku", "豊島区"),
    a("kita-ku", "北区"), a("arakawa-ku", "荒川区"), a("itabashi-ku", "板橋区"), a("nerima-ku", "練馬区"),
    a("adachi-ku", "足立区"), a("katsushika-ku", "葛飾区"), a("edogawa-ku", "江戸川区"),
  ],
  cities: [a("hachioji", "八王子市")],
};

export const regions: Region[] = [
  {
    name: "北海道・東北",
    prefectures: [
      { name: "北海道", areas: [a("sapporo", "札幌市"), a("asahikawa", "旭川市"), a("hakodate", "函館市")] },
      { name: "青森県", areas: [a("aomori", "青森市"), a("hachinohe", "八戸市")] },
      { name: "岩手県", areas: [a("morioka", "盛岡市")] },
      { name: "宮城県", areas: [a("sendai", "仙台市")] },
      { name: "秋田県", areas: [a("akita", "秋田市")] },
      { name: "山形県", areas: [a("yamagata", "山形市")] },
      { name: "福島県", areas: [a("fukushima", "福島市"), a("koriyama", "郡山市"), a("iwaki", "いわき市")] },
    ],
  },
  {
    name: "関東（東京都を除く）",
    prefectures: [
      { name: "茨城県", areas: [a("mito", "水戸市")] },
      { name: "栃木県", areas: [a("utsunomiya", "宇都宮市")] },
      { name: "群馬県", areas: [a("maebashi", "前橋市"), a("takasaki", "高崎市")] },
      { name: "埼玉県", areas: [a("saitama", "さいたま市"), a("kawaguchi", "川口市"), a("kawagoe", "川越市"), a("koshigaya", "越谷市")] },
      { name: "千葉県", areas: [a("chiba", "千葉市"), a("funabashi", "船橋市"), a("kashiwa", "柏市")] },
      {
        name: "神奈川県",
        areas: [a("yokohama", "横浜市"), a("kawasaki", "川崎市"), a("sagamihara", "相模原市"), a("yokosuka", "横須賀市"), a("fujisawa", "藤沢市")],
        extra: [g("kamakura", "鎌倉市")],
      },
    ],
  },
  {
    name: "中部",
    prefectures: [
      { name: "新潟県", areas: [a("niigata", "新潟市")] },
      { name: "富山県", areas: [a("toyama", "富山市")] },
      { name: "石川県", areas: [a("kanazawa", "金沢市")] },
      { name: "福井県", areas: [a("fukui", "福井市")] },
      { name: "山梨県", areas: [a("kofu", "甲府市")] },
      { name: "長野県", areas: [a("nagano", "長野市"), a("matsumoto", "松本市")] },
      { name: "岐阜県", areas: [a("gifu", "岐阜市")] },
      { name: "静岡県", areas: [a("shizuoka", "静岡市"), a("hamamatsu", "浜松市")] },
      {
        name: "愛知県",
        areas: [a("nagoya", "名古屋市"), a("toyohashi", "豊橋市"), a("toyota", "豊田市"), a("ichinomiya", "一宮市")],
        extra: [g("gamagori", "蒲郡市")],
      },
    ],
  },
  {
    name: "近畿",
    prefectures: [
      { name: "三重県", areas: [a("tsu", "津市")] },
      { name: "滋賀県", areas: [a("otsu", "大津市")] },
      { name: "京都府", areas: [a("kyoto", "京都市")] },
      {
        name: "大阪府",
        areas: [
          a("osaka", "大阪市"), a("sakai", "堺市"), a("higashiosaka", "東大阪市"), a("suita", "吹田市"), a("takatsuki", "高槻市"),
          a("toyonaka", "豊中市"), a("hirakata", "枚方市"), a("neyagawa", "寝屋川市"), a("yao", "八尾市"),
        ],
        extra: [g("izumisano", "泉佐野市")],
      },
      { name: "兵庫県", areas: [a("kobe", "神戸市"), a("himeji", "姫路市"), a("amagasaki", "尼崎市"), a("nishinomiya", "西宮市"), a("akashi", "明石市")] },
      { name: "奈良県", areas: [a("nara", "奈良市")] },
      { name: "和歌山県", areas: [a("wakayama", "和歌山市")] },
    ],
  },
  {
    name: "中国",
    prefectures: [
      { name: "鳥取県", areas: [a("tottori", "鳥取市")] },
      { name: "島根県", areas: [a("matsue", "松江市")] },
      { name: "岡山県", areas: [a("okayama", "岡山市"), a("kurashiki", "倉敷市")] },
      { name: "広島県", areas: [a("hiroshima", "広島市"), a("fukuyama", "福山市"), a("kure", "呉市")] },
      { name: "山口県", areas: [a("yamaguchi", "山口市"), a("shimonoseki", "下関市")] },
    ],
  },
  {
    name: "四国",
    prefectures: [
      { name: "徳島県", areas: [a("tokushima", "徳島市")] },
      { name: "香川県", areas: [a("takamatsu", "高松市")] },
      { name: "愛媛県", areas: [a("matsuyama", "松山市")] },
      { name: "高知県", areas: [a("kochi", "高知市")] },
    ],
  },
  {
    name: "九州・沖縄",
    prefectures: [
      { name: "福岡県", areas: [a("fukuoka", "福岡市"), a("kitakyushu", "北九州市"), a("kurume", "久留米市")] },
      { name: "佐賀県", areas: [a("saga", "佐賀市")] },
      { name: "長崎県", areas: [a("nagasaki", "長崎市"), a("sasebo", "佐世保市")] },
      { name: "熊本県", areas: [a("kumamoto", "熊本市")] },
      { name: "大分県", areas: [a("oita", "大分市")] },
      { name: "宮崎県", areas: [a("miyazaki", "宮崎市")] },
      { name: "鹿児島県", areas: [a("kagoshima", "鹿児島市")] },
      { name: "沖縄県", areas: [a("naha", "那覇市")] },
    ],
  },
];

/** 市区のまとめページの slug 一覧（東京都全体を含む） */
export const allAreaSlugs: string[] = [
  tokyo.top.slug,
  ...tokyo.wards.map((x) => x.slug),
  ...tokyo.cities.map((x) => x.slug),
  ...regions.flatMap((r) => r.prefectures.flatMap((p) => p.areas.map((x) => x.slug))),
];

/** まとめページがある都道府県の数（東京都を含む） */
export const prefectureCount = 1 + regions.reduce((n, r) => n + r.prefectures.length, 0);
