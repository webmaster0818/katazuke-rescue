import Link from "next/link";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "片付けレスキュー｜片付けの悩み、プロが即日解決",
  description: "ゴミ屋敷・遺品整理・不用品回収・引越し片付けなど、あらゆる片付けの悩みをプロが解決。信頼できる業者をランキング形式で比較できます。",
};

const topCompanies = companiesData.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/40 border border-blue-400/50 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-6 font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            全国対応・即日見積もり可能
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            片付けの悩み、<br className="sm:hidden"/>プロが即日解決。
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ゴミ屋敷・遺品整理・不用品回収など、あらゆる片付けに対応。厳選した10社の比較で最適な業者が見つかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ranking/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg">
              おすすめ業者ランキングを見る
            </Link>
            <Link href="/cost/price/" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-4 rounded-xl text-lg transition-colors">
              費用相場を確認する
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "掲載業者数", value: "10社", sub: "厳選比較" },
              { label: "サービスガイド", value: "5種類", sub: "徹底解説" },
              { label: "お役立ち記事", value: "5本+", sub: "随時更新" },
              { label: "費用相場", value: "無料", sub: "確認できる" },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">サービスから探す</h2>
        <p className="text-slate-500 text-center mb-8">お悩みに合ったサービスガイドをご確認ください</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}/`}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{service.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{service.description}</p>
                </div>
                <svg className="text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
              <div className="mt-3 inline-flex items-center text-xs text-blue-600 font-medium">
                費用目安: {service.costRange}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top ranking */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">おすすめ業者ランキング</h2>
              <p className="text-slate-500 text-sm mt-1">編集部が厳選した信頼できる業者</p>
            </div>
            <Link href="/ranking/" className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
              全て見る
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            {topCompanies.map((company, index) => (
              <div key={company.slug} className="border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all bg-white">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                    index === 0 ? "bg-yellow-100 text-yellow-700" :
                    index === 1 ? "bg-slate-100 text-slate-600" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{company.name}</h3>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">{company.coverage}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{company.tagline}</p>
                    <div className="flex flex-wrap gap-1">
                      {company.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200">{f}</span>
                      ))}
                    </div>
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

          <div className="text-center mt-8">
            <Link href="/ranking/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              全10社のランキングを見る
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">片付けレスキューが選ばれる理由</h2>
        <p className="text-slate-500 text-center mb-8">中立的な立場で業者を比較・評価</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "中立・公正な比較",
              description: "広告費で順位を操作しません。実績・料金・口コミを基に公正に評価した情報をお届けします。",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              ),
            },
            {
              title: "許可業者のみ掲載",
              description: "一般廃棄物収集運搬業の許可を確認した業者のみを掲載。悪質業者に当たるリスクを低減します。",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              ),
            },
            {
              title: "最新の費用相場",
              description: "定期的に更新する費用相場データで、適正価格での依頼をサポートします。",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料で見積もりを取りましょう</h2>
          <p className="text-blue-100 mb-8">複数の業者を比較することで、最安値で最適な業者を見つけることができます。</p>
          <Link href="/ranking/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg">
            業者ランキングを見て比較する
          </Link>
        </div>
      </section>
    </>
  );
}
