import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "格安片付け業者ランキング｜費用を安く抑えるおすすめ業者比較",
  description: "料金を抑えて依頼できる片付け・不用品回収業者のランキングです。見積もり無料の業者を中心に、料金目安と特徴を比較して掲載しています。",
  alternates: { canonical: "/ranking/cheap/" },
};

// Sort by price range (approximate - using companies with clear price info)
const cheapRanking = [...companiesData].sort((a, b) => {
  const cheapOrder = ["mitsumoa", "kurashi-market", "sumai-hotline"];
  const aIndex = cheapOrder.indexOf(a.slug);
  const bIndex = cheapOrder.indexOf(b.slug);
  if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
  if (aIndex !== -1) return -1;
  if (bIndex !== -1) return 1;
  return 0;
});

export default function CheapRankingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "ランキング", href: "/ranking/" },
          { label: "格安ランキング" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          格安片付け業者ランキング【2026年最新】
        </h1>
        <p className="text-slate-600 leading-relaxed">
          費用を抑えて依頼できる業者をランキング形式で掲載しています。料金の安さに加え、品質と信頼性も評価の対象としています。
        </p>
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-500 mb-6">
        当ランキングはアフィリエイト広告を含みます。掲載業者から報酬を受け取る場合がありますが、評価・順位は編集部が独自に決定しています。
      </div>

      {/* Tips box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-blue-900 mb-3">費用を抑えるための方法</h2>
        <ul className="space-y-1.5 text-sm text-blue-800">
          {[
            "3社以上の業者から相見積もりを取る",
            "自分で対応できる作業を事前に済ませる",
            "買取サービスを利用して費用を相殺する",
            "自治体の粗大ごみ収集を併用する",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="text-blue-500 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {tip}
            </li>
          ))}
        </ul>
        <Link href="/guide/cost-saving/" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium mt-3 hover:underline">
          費用を抑える方法を詳しく見る
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </Link>
      </div>

      {/* Cheap ranking list */}
      <div className="space-y-4 mb-10">
        {cheapRanking.map((company, index) => (
          <div
            key={company.slug}
            className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0 ${
                index === 0 ? "bg-yellow-100 text-yellow-700" :
                index === 1 ? "bg-slate-100 text-slate-600" :
                index === 2 ? "bg-orange-100 text-orange-700" :
                "bg-slate-50 text-slate-500"
              }`}>
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="font-bold text-slate-900">{company.name}</h2>
                  {index === 0 && (
                    <span className="text-xs bg-yellow-50 text-yellow-800 px-2 py-0.5 rounded-full border border-yellow-300 font-medium">最安値水準</span>
                  )}
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">{company.coverage}</span>
                </div>
                <p className="text-sm text-slate-500 mb-2">{company.tagline}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {company.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200">{f}</span>
                  ))}
                </div>
                <div className="text-sm font-semibold text-green-700">料金目安: {company.priceRange}</div>
              </div>
              <Link
                href={`/company/${company.slug}/`}
                className="hidden sm:inline-flex bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex-shrink-0"
              >
                詳細を見る
              </Link>
            </div>
            <Link
              href={`/company/${company.slug}/`}
              className="sm:hidden mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition-colors text-center block"
            >
              詳細を見る
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-2">無料見積もりでの比較をおすすめします</h2>
        <p className="text-blue-100 text-sm mb-4">複数の業者に同じ条件で見積もりを依頼し、料金と作業内容を比較してください。</p>
        <Link href="/ranking/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
          全業者ランキングを見る
        </Link>
      </div>
    </div>
  );
}
