import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "片付け・不用品回収の費用相場2026年版｜サービス別料金比較",
  description: "ゴミ屋敷・遺品整理・不用品回収・引越し片付けなどの費用相場を徹底解説。部屋の広さ別・サービス別の料金目安をご確認ください。",
  alternates: { canonical: "/cost/price/" },
};

const priceData = [
  {
    service: "ゴミ屋敷片付け",
    link: "/service/gomiyashiki/",
    prices: [
      { size: "1K（軽度）", range: "5〜15万円", time: "半日〜1日" },
      { size: "1K（重度）", range: "15〜30万円", time: "1〜2日" },
      { size: "1LDK", range: "20〜50万円", time: "1〜3日" },
      { size: "2LDK以上", range: "40〜100万円+", time: "2〜5日" },
    ],
  },
  {
    service: "不用品回収",
    link: "/service/fuyohin/",
    prices: [
      { size: "軽トラック1台", range: "1.5〜3万円", time: "1〜3時間" },
      { size: "2トントラック", range: "3〜8万円", time: "半日" },
      { size: "大型トラック", range: "8〜15万円+", time: "半日〜1日" },
      { size: "品目別（冷蔵庫）", range: "5,000〜10,000円", time: "30分〜" },
    ],
  },
  {
    service: "遺品整理",
    link: "/service/ihinseiri/",
    prices: [
      { size: "1K・1DK", range: "3〜8万円", time: "1日" },
      { size: "2LDK", range: "10〜20万円", time: "1〜2日" },
      { size: "3LDK", range: "20〜35万円", time: "2〜3日" },
      { size: "一戸建て", range: "20〜50万円+", time: "2〜5日" },
    ],
  },
  {
    service: "片付け代行",
    link: "/service/katazuke-daikou/",
    prices: [
      { size: "1時間（時間制）", range: "3,000〜8,000円", time: "—" },
      { size: "1K・1DK（成果物型）", range: "3〜8万円", time: "1日" },
      { size: "2LDK（成果物型）", range: "8〜20万円", time: "2〜3日" },
      { size: "一戸建て（成果物型）", range: "20〜50万円+", time: "3〜5日" },
    ],
  },
];

const additionalCosts = [
  { item: "消臭・除菌処理", range: "1〜5万円" },
  { item: "特殊清掃（孤独死など）", range: "10〜50万円+" },
  { item: "家電リサイクル料（冷蔵庫）", range: "3,000〜5,000円" },
  { item: "家電リサイクル料（洗濯機）", range: "2,500〜3,500円" },
  { item: "エアコン取り外し", range: "5,000〜10,000円" },
  { item: "遺品供養", range: "5,000〜2万円" },
];

export default function PricePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "費用相場" }]} />

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          片付け・不用品回収の費用相場【2026年最新版】
        </h1>
        <p className="text-slate-600 leading-relaxed">
          サービス種別・部屋の広さ別の料金目安を解説します。見積もりを取る前の参考にご活用ください。
        </p>
      </div>

      {/* Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-2">
          <svg className="text-amber-600 flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <p className="text-sm text-amber-800">
            <strong>ご注意：</strong>下記の料金はあくまでも目安です。実際の費用はゴミの量・種類・地域・業者によって大きく異なります。必ず事前に無料見積もりを取得してください。
          </p>
        </div>
      </div>

      {/* Price tables */}
      <div className="space-y-8 mb-10">
        {priceData.map((category) => (
          <div key={category.service} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="font-bold text-slate-900 text-lg">{category.service}</h2>
              <Link href={category.link} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                詳しく見る
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="text-left px-6 py-3 text-slate-600 font-medium">規模</th>
                    <th className="text-left px-6 py-3 text-slate-600 font-medium">費用目安</th>
                    <th className="text-left px-6 py-3 text-slate-600 font-medium">作業時間目安</th>
                  </tr>
                </thead>
                <tbody>
                  {category.prices.map((row, index) => (
                    <tr key={index} className={`border-b border-slate-50 ${index % 2 === 0 ? "" : "bg-slate-50/30"}`}>
                      <td className="px-6 py-3 text-slate-700">{row.size}</td>
                      <td className="px-6 py-3 font-semibold text-blue-700">{row.range}</td>
                      <td className="px-6 py-3 text-slate-500">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Additional costs */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-10">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h2 className="font-bold text-slate-900 text-lg">よくある追加費用</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="text-left px-6 py-3 text-slate-600 font-medium">オプション・追加サービス</th>
                <th className="text-left px-6 py-3 text-slate-600 font-medium">費用目安</th>
              </tr>
            </thead>
            <tbody>
              {additionalCosts.map((row, index) => (
                <tr key={index} className={`border-b border-slate-50 ${index % 2 === 0 ? "" : "bg-slate-50/30"}`}>
                  <td className="px-6 py-3 text-slate-700">{row.item}</td>
                  <td className="px-6 py-3 font-semibold text-orange-600">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost saving tips */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-green-900 mb-3">費用を安くするためのヒント</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {[
            "3社以上の相見積もりで最安値を探す",
            "平日・閑散期（5〜8月）に依頼すると割引になる場合が多い",
            "リサイクル可能品は買い取りサービスで費用相殺",
            "自治体の粗大ゴミ回収（1点200〜2,000円）を組み合わせる",
            "事前に捨ててよいものをまとめておくと作業時間短縮",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="text-green-600 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {tip}
            </li>
          ))}
        </ul>
        <Link href="/guide/cost-saving/" className="inline-flex items-center gap-1 text-sm text-green-700 font-medium mt-3 hover:underline">
          費用節約の詳しいガイドを見る
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </Link>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-2">正確な費用は無料見積もりで確認</h2>
        <p className="text-blue-100 text-sm mb-4">相場を参考にしながら、実際の費用は複数業者の見積もりで比較しましょう。</p>
        <Link href="/ranking/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
          おすすめ業者ランキングを見る
        </Link>
      </div>
    </div>
  );
}
