// 家電リサイクル券センター「再商品化等料金一覧（家電リサイクル料金）」https://www.rkc.aeha.or.jp/recycle_price_compact.html を2026-11-01に取得し、製造業者等名・コード・料金を表示どおりに転記（税込）。
// 空欄は「—」、「※指定法人」は「指定法人」、「※承継先をご確認下さい」は「承継先を確認」と表記。
export type KadenFeeRow = { name: string; code: string; aircon: string; btv_s: string; btv_l: string; tv_s: string; tv_l: string; fridge_s: string; fridge_l: string; washer: string };

export const RKC_URL = "https://www.rkc.aeha.or.jp/recycle_price_compact.html";
export const RKC_TITLE = "再商品化等料金一覧（家電リサイクル料金） | RKC 一般財団法人家電製品協会　家電リサイクル券センター";

export const mainMakers: KadenFeeRow[] = [
  { name: "パナソニック（株）", code: "100", aircon: "550円", btv_s: "1,320円", btv_l: "2,420円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "パナソニック HVAC ＆ CC（株）", code: "100", aircon: "550円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "—", fridge_s: "—", fridge_l: "—", washer: "—" },
  { name: "パナソニック（株）（三洋電機）", code: "101", aircon: "550円", btv_s: "1,320円", btv_l: "2,420円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "東芝ライフスタイル（株）", code: "110", aircon: "550円", btv_s: "承継先を確認", btv_l: "承継先を確認", tv_s: "承継先を確認", tv_l: "承継先を確認", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "TVS REGZA（株）", code: "114", aircon: "—", btv_s: "1,320円", btv_l: "2,420円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "—", fridge_l: "—", washer: "—" },
  { name: "ダイキン工業（株）", code: "120", aircon: "550円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "—", fridge_s: "—", fridge_l: "—", washer: "—" },
  { name: "日立グローバルライフソリューションズ（株）", code: "300", aircon: "990円", btv_s: "1,870円", btv_l: "2,970円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "シャープ（株）", code: "310", aircon: "990円", btv_s: "1,870円", btv_l: "2,970円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "三菱電機（株）", code: "320", aircon: "990円", btv_s: "1,870円", btv_l: "2,970円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "ソニー（株）", code: "340", aircon: "指定法人", btv_s: "1,870円", btv_l: "2,970円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "—", fridge_l: "—", washer: "—" },
  { name: "（株）ゼネラル", code: "350", aircon: "990円", btv_s: "1,870円", btv_l: "2,970円", tv_s: "—", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
];

export const otherMakers: KadenFeeRow[] = [
  { name: "アイリスオーヤマ（株）（エアコン・液晶・プラズマ式テレビ）", code: "718", aircon: "2,000円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "3,700円", fridge_s: "—", fridge_l: "—", washer: "—" },
  { name: "アイリスオーヤマ（株）（冷蔵庫・冷凍庫・洗濯機・衣類乾燥機）", code: "395", aircon: "—", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "—", fridge_s: "4,730円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "アクア（株）", code: "393", aircon: "1,034円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "—", fridge_s: "3,784円", fridge_l: "4,774円", washer: "2,574円" },
  { name: "ハイアールジャパンセールス（株）", code: "392", aircon: "1,034円", btv_s: "1,364円", btv_l: "2,464円", tv_s: "1,914円", tv_l: "3,014円", fridge_s: "3,784円", fridge_l: "4,774円", washer: "2,574円" },
  { name: "ハイセンスジャパン（株）", code: "151", aircon: "990円", btv_s: "—", btv_l: "—", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "LG Electronics Japan（株）", code: "180", aircon: "990円", btv_s: "1,320円", btv_l: "2,420円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "サムスン電子ジャパン（株）", code: "191", aircon: "—", btv_s: "1,870円", btv_l: "2,970円", tv_s: "1,870円", tv_l: "2,970円", fridge_s: "3,740円", fridge_l: "4,730円", washer: "2,640円" },
  { name: "（株）TCL JAPAN ELECTRONICS", code: "727", aircon: "2,000円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "（株）コロナ", code: "185", aircon: "550円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "—", fridge_s: "4,730円", fridge_l: "4,730円", washer: "2,530円" },
  { name: "（株）ツインバード", code: "511", aircon: "—", btv_s: "—", btv_l: "—", tv_s: "3,100円", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "（株）ニトリ", code: "735", aircon: "2,000円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "（株）山善", code: "704", aircon: "2,000円", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "マクスゼン（株）", code: "701", aircon: "2,000円", btv_s: "—", btv_l: "—", tv_s: "3,100円", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "（株）ドウシシャ", code: "713", aircon: "—", btv_s: "3,100円", btv_l: "3,700円", tv_s: "3,100円", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "（株）良品計画", code: "387", aircon: "—", btv_s: "1,914円", btv_l: "3,014円", tv_s: "1,914円", tv_l: "3,014円", fridge_s: "3,784円", fridge_l: "4,774円", washer: "2,574円" },
  { name: "（株）ヤマダホールディングス", code: "199", aircon: "1,265円", btv_s: "1,595円", btv_l: "2,695円", tv_s: "2,145円", tv_l: "3,245円", fridge_s: "4,015円", fridge_l: "5,005円", washer: "2,805円" },
  { name: "（株）ノジマ", code: "708", aircon: "2,000円", btv_s: "3,100円", btv_l: "3,700円", tv_s: "3,100円", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "（株）エディオン", code: "913", aircon: "—", btv_s: "—", btv_l: "—", tv_s: "—", tv_l: "—", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
  { name: "船井電機（株）", code: "386", aircon: "指定法人", btv_s: "指定法人", btv_l: "指定法人", tv_s: "指定法人", tv_l: "指定法人", fridge_s: "指定法人", fridge_l: "指定法人", washer: "—" },
  { name: "（株）富士通ゼネラル", code: "", aircon: "承継先を確認", btv_s: "承継先を確認", btv_l: "承継先を確認", tv_s: "—", tv_l: "承継先を確認", fridge_s: "承継先を確認", fridge_l: "承継先を確認", washer: "承継先を確認" },
  { name: "指定法人", code: "999", aircon: "2,000円", btv_s: "3,100円", btv_l: "3,700円", tv_s: "3,100円", tv_l: "3,700円", fridge_s: "5,200円", fridge_l: "5,600円", washer: "3,300円" },
];
