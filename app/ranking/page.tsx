import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "片付け業者おすすめランキング2026年版｜片付けレスキュー",
  description: "片付け・不用品回収・ゴミ屋敷業者のおすすめランキング。料金・対応エリア・口コミを比較して最適な業者を見つけましょう。",
  alternates: { canonical: "/ranking/" },
};

const medalColors = [
  "bg-yellow-100 text-yellow-700 border-yellow-300",
  "bg-slate-100 text-slate-600 border-slate-300",
  "bg-orange-100 text-orange-700 border-orange-300",
];

export default function RankingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "業者ランキング" }]} />

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          片付け業者おすすめランキング【2026年版】
        </h1>
        <p className="text-slate-600 leading-relaxed">
          全国対応から地域密着型まで、厳選した10社を比較。料金・実績・口コミを総合評価しました。
        </p>
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-500 mb-8">
        当ランキングはアフィリエイト広告を含みます。掲載業者から報酬を受け取る場合がありますが、評価・順位は編集部が独自に決定しています。
      </div>

      {/* Ranking list */}
      <div className="space-y-4 mb-10">
        {companiesData.map((company, index) => (
          <div
            key={company.slug}
            className={`bg-white border rounded-2xl p-5 md:p-6 hover:shadow-md transition-all ${
              index === 0 ? "border-yellow-300 shadow-sm" :
              index === 1 ? "border-slate-300" :
              index === 2 ? "border-orange-300" :
              "border-slate-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg border flex-shrink-0 ${
                index < 3 ? medalColors[index] : "bg-blue-50 text-blue-700 border-blue-200"
              }`}>
                {index + 1}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="font-bold text-slate-900 text-lg">{company.name}</h2>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">{company.coverage}</span>
                  <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">PR</span>
                </div>
                <p className="text-sm text-slate-500 mb-2">{company.tagline}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= Math.floor(company.rating) ? "#F59E0B" : "#E2E8F0"} aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">{company.rating}</span>
                  <span className="text-xs text-slate-400">({company.reviewCount.toLocaleString()}件)</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {company.features.slice(0, 4).map((f) => (
                    <span key={f} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200">{f}</span>
                  ))}
                </div>

                <p className="text-sm font-medium text-blue-700">料金目安: {company.priceRange}</p>
              </div>

              <div className="hidden md:flex flex-col gap-2 flex-shrink-0">
                <Link
                  href={`/company/${company.slug}/`}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                >
                  詳細を見る
                </Link>
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="border border-blue-300 text-blue-700 hover:bg-blue-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                >
                  公式サイト
                </a>
              </div>
            </div>

            <div className="md:hidden mt-3 flex gap-2">
              <Link
                href={`/company/${company.slug}/`}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition-colors text-center"
              >
                詳細を見る
              </Link>
              <a
                href={company.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-1 border border-blue-300 text-blue-700 hover:bg-blue-50 text-sm font-medium py-2 rounded-lg transition-colors text-center"
              >
                公式サイト
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Related links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/ranking/cheap/" className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
          <h2 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1">格安業者ランキング</h2>
          <p className="text-sm text-slate-500">費用を抑えたい方向けの格安片付け業者比較</p>
        </Link>
        <Link href="/cost/price/" className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
          <h2 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1">費用相場を確認する</h2>
          <p className="text-sm text-slate-500">サービス種別・部屋の広さ別の費用目安</p>
        </Link>
      </div>
    </div>
  );
}
