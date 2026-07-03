import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title}｜片付けレスキュー`,
    description: service.description,
    alternates: { canonical: `/service/${slug}/` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const recommended = companiesData.filter((c) =>
    service.recommendedCompanies.includes(c.slug)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "サービスガイド" },
          { label: service.title },
        ]}
      />

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200 mb-3 font-medium">
          サービスガイド
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h1>
        <p className="text-slate-600 leading-relaxed">{service.description}</p>
      </div>

      {/* Cost range */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8 flex flex-wrap items-center gap-4">
        <div>
          <p className="text-sm text-orange-700 font-medium">費用相場</p>
          <p className="text-2xl font-bold text-orange-700">{service.costRange}</p>
        </div>
        <p className="text-sm text-orange-600 flex-1">※状況・業者・地域により異なります。必ず複数業者から見積もりを取得してください。</p>
      </div>

      {/* Sections */}
      <div className="space-y-6 mb-10">
        {service.sections.map((section, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="font-bold text-green-900 mb-4 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          賢い業者選びのポイント
        </h2>
        <ul className="space-y-2">
          {service.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <svg className="text-green-600 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Recommended companies */}
      {recommended.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">このサービスにおすすめの業者</h2>
          <div className="space-y-4">
            {recommended.map((company, index) => (
              <div key={company.slug} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold flex-shrink-0 ${
                    index === 0 ? "bg-yellow-100 text-yellow-700" :
                    index === 1 ? "bg-slate-100 text-slate-600" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{company.name}</h3>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">{company.coverage}</span>
                    </div>
                    <p className="text-sm text-slate-500">{company.tagline}</p>
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
        </div>
      )}

      {/* FAQ */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">Q.</span>
                {faq.question}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">A.</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-2">まずは無料で見積もりを取りましょう</h2>
        <p className="text-blue-100 text-sm mb-4">複数の業者を比較することで、最安値で最適な業者を見つけることができます。</p>
        <Link href="/ranking/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
          業者ランキングを確認する
        </Link>
      </div>
    </div>
  );
}
