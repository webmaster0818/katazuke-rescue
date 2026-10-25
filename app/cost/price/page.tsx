import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "片付け・不用品回収の費用相場｜遺品整理は公式の間取り別相場",
  description: "遺品整理の費用相場を、みんなの遺品整理の公式サイトに掲載された間取り別の金額（1R・1K 3万〜8万円ほか）で掲載しています。ゴミ屋敷片付け・不用品回収は見積もりで確認する際の要点をまとめています。",
  alternates: { canonical: "/cost/price/" },
};

// 料金は公式に記載のあるものだけを掲載（2026-10-25 確認）。根拠の確認できない相場は掲載しない
const IHIN_SOURCE = {
  label: "みんなの遺品整理「遺品整理の費用相場」",
  url: "https://m-ihinseiri.jp/article-1/ihinseiri/cost/",
  checked: "2026年10月25日",
};

const ihinPrices = [
  { size: "1R・1K", range: "3万〜8万円", time: "1〜2時間" },
  { size: "2LDK", range: "12万〜30万円", time: "3〜8時間" },
  { size: "3LDK", range: "17万〜50万円", time: "5〜12時間" },
  { size: "4LDK以上", range: "22万〜60万円", time: "6〜15時間" },
];

const noPriceServices = [
  { service: "ゴミ屋敷片付け", link: "/service/gomiyashiki/" },
  { service: "不用品回収", link: "/service/fuyohin/" },
  { service: "片付け代行", link: "/service/katazuke-daikou/" },
];

export default function PricePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "費用相場" }]} />

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          片付け・不用品回収の費用相場と見積もりの確認点
        </h1>
        <p className="text-slate-600 leading-relaxed">
          遺品整理は、みんなの遺品整理の公式サイトに掲載された間取り別の費用相場を掲載しています。そのほかのサービスは公式に確認できる相場がないため、見積もりで確認する際の要点をまとめています。
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
            <strong>掲載している金額は、公式サイトに記載のある相場だけです。</strong>実際の費用は、ごみの量・種類・地域・業者によって大きく異なります。依頼前に無料見積もりを取得してください。
          </p>
        </div>
      </div>

      {/* 遺品整理（公式の相場） */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="font-bold text-slate-900 text-lg">遺品整理</h2>
          <Link href="/service/ihinseiri/" className="text-sm text-blue-600 hover:underline">詳しく見る</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="text-left px-6 py-3 text-slate-600 font-medium">間取り</th>
                <th className="text-left px-6 py-3 text-slate-600 font-medium">費用相場</th>
                <th className="text-left px-6 py-3 text-slate-600 font-medium">作業時間</th>
              </tr>
            </thead>
            <tbody>
              {ihinPrices.map((row, index) => (
                <tr key={index} className={`border-b border-slate-50 ${index % 2 === 0 ? "" : "bg-slate-50/30"}`}>
                  <td className="px-6 py-3 text-slate-700">{row.size}</td>
                  <td className="px-6 py-3 font-semibold text-blue-700">{row.range}</td>
                  <td className="px-6 py-3 text-slate-500">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="px-6 py-3 text-xs text-slate-500">
          出典：<a href={IHIN_SOURCE.url} target="_blank" rel="noopener noreferrer" className="underline">{IHIN_SOURCE.label}</a>（{IHIN_SOURCE.checked}確認）。同社に掲載されている業者の公式サイトと利用金額のデータから算出された相場で、ゴミ屋敷の状態や特殊清掃が必要な場合は料金が変わるとされています。
        </p>
      </div>

      {/* 公式に相場の記載がないサービス */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-slate-900 text-lg mb-3">ゴミ屋敷片付け・不用品回収・片付け代行・追加費用</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          これらの費用は、公的機関や掲載業者の公式サイトで確認できる相場の記載がないため、当サイトでは金額を掲載していません。金額は業者の見積もりで確認してください。見積もりでは、作業費・車両費・処分費・オプション（消臭、家電リサイクル料金など）の内訳と総額を確認すると比較しやすくなります。
        </p>
        <ul className="mt-3 flex flex-wrap gap-3 text-sm">
          {noPriceServices.map((s) => (
            <li key={s.link}>
              <Link href={s.link} className="text-blue-600 hover:underline">{s.service}の業者の選び方</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Cost saving tips */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-green-900 mb-3">費用を抑えるための方法</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {[
            "3社以上から相見積もりを取り、料金を比較する",
            "再利用できる品物は買取サービスを利用し、費用と相殺する",
            "自治体の粗大ごみ収集を併用する（手数料は自治体・品目ごとに異なる）",
            "処分してよい物を事前にまとめ、作業時間を短縮する",
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
          費用を抑える方法を詳しく見る
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </Link>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-2">正確な費用は無料見積もりでご確認ください</h2>
        <p className="text-blue-100 text-sm mb-4">実際の費用は、相場を参考にしながら複数の業者の見積もりで比較してください。</p>
        <Link href="/ranking/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
          おすすめ業者ランキングを見る
        </Link>
      </div>
    </div>
  );
}
