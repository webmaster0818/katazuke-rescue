import type { AreaCompareRow, AreaSource, AreaVendor } from "@/components/AreaCityPage";

// 市区単位のエリアページで使う業者カード。
// 掲載するのは、その市区を公式の対応エリアに含むことを各社公式ページで確認できた業者のみ。
// 運営会社・仕組みの記載は data/companies.json・data/reviews.json（各レビューページ）掲載値の流用。

export interface VendorCity {
  name: string; // 例: 柏市
  checked: string; // 例: 2026年11月1日
  minna: { url: string; count: number };
  curama: { url: string };
  meetsmore: { url: string };
  usagi?: { band: string; short: string }; // band 例: 「千葉県で45分～1時間30分程度で即日回収ができるエリア」（公式の見出しどおり）、short 例: 即日対応エリア（45分〜1時間30分程度）
}

export function buildVendors(c: VendorCity): AreaVendor[] {
  const list: AreaVendor[] = [
    {
      slug: "minna-ihinseiri",
      num: "1-1",
      catch: "審査済み業者を最大3社比較",
      name: "みんなの遺品整理",
      officialUrl: "https://m-ihinseiri.jp/",
      image: "/images/hero-a.png",
      imageAlt: "みんなの遺品整理の紹介イメージ",
      intro: [
        "みんなの遺品整理は、株式会社LIFULL senior（LIFULLグループ）が運営する遺品整理・生前整理業者の紹介サービスです。遺品整理士認定協会と提携し、審査を通過した業者のみを掲載している点が特徴で、最大3社の一括見積もりを取り、支払金額や口コミを確認したうえで業者を選べます。",
        `公式サイトには市区町村ごとの業者一覧があり、${c.name}のページには${c.minna.count}件の業者が掲載されています（${c.checked}確認）。親の家の遺品整理や生前整理のように、家一軒分の家財を仕分けながら片付ける場面で、間取りと物量を伝えて複数社の見積もりを比べたいときの最初の相談先に向いています。`,
      ],
      recommend: [
        "遺品整理・生前整理を伴う家財整理を頼みたい方",
        "審査を通過した業者の中から選びたい方",
        "複数社の見積もりを比較してから決めたい方",
        "費用の相場を確認しながら、無料で相談したい方",
      ],
      table: [
        { k: "料金目安", v: "3万円〜60万円", note: "公式の間取り別の費用相場（1R・1K 3万〜8万円、4LDK以上 22万〜60万円）。出典: https://m-ihinseiri.jp/article-1/ihinseiri/cost/（2026年10月25日確認）" },
        { k: "見積もり", v: "相談・見積もり無料", note: "最大3社の一括見積もりに対応" },
        { k: "対応エリア", v: `全国47都道府県（${c.name}の掲載業者${c.minna.count}件）`, note: `出典: ${c.minna.url}（${c.checked}確認）` },
        { k: "運営会社", v: "株式会社LIFULL senior（LIFULLグループ）" },
        { k: "特徴", v: "遺品整理士認定協会と提携・審査済み業者のみ掲載" },
      ],
      memo: `公式サイトの${c.name}の業者一覧ページ（${c.minna.url}）で、掲載件数${c.minna.count}件を確認しています（${c.checked}）。料金の目安は2026年10月25日に公式の費用相場ページで確認した記載、運営会社・仕組みは当サイトのレビューページ掲載値です。紹介型サービスのため、実際の作業料金は紹介先業者の見積もりで確定します。`,
    },
    {
      slug: "kurashi-market",
      num: "1-2",
      catch: "口コミと料金で地域の業者を選べる",
      name: "くらしのマーケット",
      officialUrl: "https://curama.jp/",
      image: "/images/hero-c.png",
      imageAlt: "くらしのマーケットの紹介イメージ",
      intro: [
        "くらしのマーケットは、みんなのマーケット株式会社（東京都港区）が運営する、暮らしの出張・訪問サービスのオンラインマーケットプレイスです。不用品回収・粗大ごみ回収・片付け・ハウスクリーニングなどのカテゴリで、地域の登録業者を料金と口コミを見ながら比較し、そのままオンラインで予約できます。",
        `公式サイトには${c.name}の不用品回収の事業者一覧ページがあり、${c.name}で依頼できる登録業者を料金と口コミの順に並べ替えて探せます（${c.checked}確認）。市の粗大ごみ収集では運び出してもらえない大型家具や、自分で運べない物だけを切り出して頼む場面と相性のよいサービスです。`,
      ],
      recommend: [
        "口コミと評価を確認して業者を選びたい方",
        "予約前に料金の目安を把握したい方",
        "大型家具など一部の品物だけ搬出を頼みたい方",
        "オンラインで予約までを完了したい方",
      ],
      table: [
        { k: "料金", v: "業者・サービスごとに料金表示", note: "予約前に料金を確認できます" },
        { k: "対応エリア", v: `日本全国（${c.name}の事業者一覧ページあり）`, note: `出典: ${c.curama.url}（${c.checked}確認）` },
        { k: "運営会社", v: "みんなのマーケット株式会社（東京都港区）" },
        { k: "特徴", v: "口コミ投稿制・損害賠償補償制度あり" },
      ],
      memo: `公式サイトの${c.name}の不用品回収ページ（${c.curama.url}）で、${c.name}の登録業者の一覧が表示されることを確認しています（${c.checked}）。料金表示・口コミ・損害賠償補償制度の仕組みは当サイトのレビューページ掲載値です。実際の作業品質は予約する登録業者ごとに異なるため、口コミ件数・評価とサービス内容の説明をよく確認したうえでご予約ください。`,
    },
    {
      slug: "mitsumoa",
      num: "1-3",
      catch: "最大5社の見積もりを比較",
      name: "ミツモア",
      officialUrl: "https://meetsmore.com/",
      image: "/images/hero-a.png",
      imageAlt: "ミツモアの紹介イメージ",
      intro: [
        "ミツモアは、株式会社ミツモア（東京都中央区）が運営する見積もり比較・マッチングサービスです。依頼内容を入力すると最大5社の業者から見積もりが届き、金額・口コミ・チャットでのやり取りを比較して依頼先を選べます。見積もり依頼は無料です。",
        `公式サイトには${c.name}の不用品回収のページがあり、${c.name}を対応地域とする業者に見積もりを依頼できます（${c.checked}確認）。「部屋の中から運び出してほしい」「作業車を停める場所が限られる」といった条件を先にチャットで伝え、同じ条件で複数社の金額を比べたいときに向いています。`,
      ],
      recommend: [
        "複数社の見積もりを一度に集めて比較したい方",
        "搬出条件を相談してから決めたい方",
        "依頼前に費用の相場を把握したい方",
        "見積もりのみを先に依頼したい方",
      ],
      table: [
        { k: "費用", v: "見積もり依頼は無料" },
        { k: "見積もり", v: "最大5社の見積もりを比較可能" },
        { k: "対応エリア", v: `全国47都道府県（${c.name}の不用品回収ページあり）`, note: `出典: ${c.meetsmore.url}（${c.checked}確認）` },
        { k: "運営会社", v: "株式会社ミツモア（東京都中央区）" },
        { k: "特徴", v: "チャットで業者と直接相談可能" },
      ],
      memo: `公式サイトの${c.name}の不用品回収ページ（${c.meetsmore.url}）を確認しています（${c.checked}）。最大5社の見積もり比較・チャット相談の仕組みは当サイトのレビューページ掲載値にもとづきます。実際の作業はマッチングした業者が行うため、金額だけでなく口コミ・対応内容も確認したうえでお選びください。`,
    },
  ];

  if (c.usagi) {
    list.push({
      slug: "otasuke-usagi",
      num: "1-4",
      catch: "即日回収・買取・清掃を一括対応",
      name: "お助けうさぎ",
      officialUrl: "https://otasukeusagi.jp/",
      image: "/images/hero-b.png",
      imageAlt: "お助けうさぎの紹介イメージ",
      intro: [
        "お助けうさぎは、不用品回収・粗大ごみ回収を中心に、ゴミ屋敷片付け・遺品整理・買取まで一括で対応する回収サービスです。対応エリアは東京・神奈川・埼玉・千葉・茨城・山梨・栃木・群馬・静岡・長野・愛知・福島・岐阜の13都県です。",
        `公式の対応エリアページでは、${c.name}が${c.usagi.band}に掲載されています（${c.checked}確認）。市の粗大ごみ収集は申し込みから収集日まで日数がかかるため、退去日や引き渡し日が迫っていて当日中に回収してほしい場面で候補になります。公式の会社概要には、古物商許可・産業廃棄物収集運搬業許可と、一般廃棄物収集運搬許可業者との提携が記載されています。`,
      ],
      recommend: [
        "日程が迫っていて当日や近日中の回収を相談したい方",
        "回収とあわせて買取の査定も頼みたい方",
        "部屋の中からの運び出しまで任せたい方",
        "電話・LINEで先に相談したい方",
      ],
      table: [
        { k: "料金目安", v: "4,980円〜（税込・SS〜Sパック）", note: "LLパック（2トントラック等へ載せ放題）は98,800円〜。出典: https://otasukeusagi.jp/price/（2026年11月1日確認）" },
        { k: "受付", v: "電話 8:00〜24:00（年中無休）、LINE・メールは24時間" },
        { k: "対応エリア", v: `13都県（${c.name}は${c.usagi.short}）`, note: "出典: https://otasukeusagi.jp/area/（2026年11月1日確認）" },
        { k: "許可等", v: "古物商許可・産業廃棄物収集運搬業許可、一般廃棄物収集運搬許可業者と提携", note: "出典: https://otasukeusagi.jp/about/（2026年11月1日確認）" },
      ],
      memo: `公式の対応エリアページ（https://otasukeusagi.jp/area/）で${c.name}の即日対応区分を、料金ページでパック料金を、会社概要で許可・提携の記載を確認しています（${c.checked}）。到着時間の目安は予約状況で変わると公式に記載があるため、当日の回収を希望する場合は時間帯もあわせて問い合わせてください。家庭のごみの回収には一般廃棄物の許可が関わるため、見積もりの際に、どの許可業者が収集運搬を行うかも確認しておくと安心です。`,
    });
  }
  return list;
}

export function buildCompareRows(c: VendorCity): AreaCompareRow[] {
  const rows: AreaCompareRow[] = [
    { slug: "minna-ihinseiri", name: "みんなの遺品整理", area: `${c.name}の掲載業者${c.minna.count}件`, price: "3万円〜60万円（公式の間取り別相場）", point: "審査済み業者を最大3社比較・遺品整理に強い" },
    { slug: "kurashi-market", name: "くらしのマーケット", area: `${c.name}の事業者一覧ページあり`, price: "業者により異なる", point: "口コミと料金を見て地域の業者を選べる" },
    { slug: "mitsumoa", name: "ミツモア", area: `${c.name}の不用品回収ページあり`, price: "業者により異なる", point: "最大5社の一括見積もり比較" },
  ];
  if (c.usagi) {
    rows.push({ slug: "otasuke-usagi", name: "お助けうさぎ", area: c.usagi.short, price: "4,980円〜（税込・パック料金）", point: "即日回収・買取・清掃を一括対応" });
  }
  return rows;
}

export function vendorSources(c: VendorCity): AreaSource[] {
  const s: AreaSource[] = [
    { label: `みんなの遺品整理「${c.name}の遺品整理業者一覧」`, org: "みんなの遺品整理（公式）", url: c.minna.url },
    { label: `くらしのマーケット「${c.name}の不用品回収」`, org: "くらしのマーケット（公式）", url: c.curama.url },
    { label: `ミツモア「${c.name}の不用品回収」`, org: "ミツモア（公式）", url: c.meetsmore.url },
  ];
  if (c.usagi) {
    s.push({ label: "お助けうさぎ「対応エリア」", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/area/" });
    s.push({ label: "お助けうさぎ「料金」", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/price/" });
    s.push({ label: "お助けうさぎ「会社概要」", org: "お助けうさぎ（公式）", url: "https://otasukeusagi.jp/about/" });
  }
  return s;
}
