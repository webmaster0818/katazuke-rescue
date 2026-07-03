import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return companiesData.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判・料金｜片付けレスキュー`,
    description: `${company.name}の特徴・料金・口コミ・評判を詳しく解説。${company.tagline}`,
    alternates: { canonical: `/company/${slug}/` },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) notFound();

  const rank = companiesData.findIndex((c) => c.slug === slug) + 1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "業者一覧", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      {/* Company header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex flex-wrap items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 ${
            rank === 1 ? "bg-yellow-100 text-yellow-700" :
            rank === 2 ? "bg-slate-100 text-slate-600" :
            rank === 3 ? "bg-orange-100 text-orange-700" :
            "bg-blue-50 text-blue-700"
          }`}>
            {rank}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-slate-900">{company.name}</h1>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">{company.coverage}</span>
              <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">PR</span>
            </div>
            <p className="text-slate-600">{company.tagline}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((star) => (
              <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={star <= Math.floor(company.rating) ? "#F59E0B" : "#E2E8F0"} aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <span className="font-bold text-slate-900">{company.rating}</span>
          <span className="text-sm text-slate-500">({company.reviewCount.toLocaleString()}件の評価)</span>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">{company.description}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-3 rounded-xl transition-colors"
          >
            公式サイトで見積もりを確認する
          </a>
          <Link href="/ranking/" className="flex-1 border border-slate-200 text-slate-700 font-medium text-center py-3 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors">
            他の業者と比較する
          </Link>
        </div>
      </div>

      {/* Price range */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          料金目安
        </h2>
        <p className="text-2xl font-bold text-blue-700">{company.priceRange}</p>
        <p className="text-sm text-blue-600 mt-1">※規模・状況によって異なります。無料見積もりをご確認ください。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Features */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            サービスの特徴
          </h2>
          <ul className="space-y-2">
            {company.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="text-green-500 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pros & Cons */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="font-bold text-slate-900 mb-4">メリット・デメリット</h2>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-green-700 mb-2">メリット</h3>
            <ul className="space-y-1">
              {company.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg className="text-green-500 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-red-700 mb-2">デメリット</h3>
            <ul className="space-y-1">
              {company.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg className="text-red-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-2">{company.name}の無料見積もりを取る</h2>
        <p className="text-blue-100 text-sm mb-4">公式サイトから無料で見積もりを依頼できます。複数業者と比較してから決めましょう。</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            公式サイトへ（無料見積もり）
          </a>
          <Link href="/ranking/" className="bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium px-8 py-3 rounded-xl transition-colors">
            他の業者と比較する
          </Link>
        </div>
      </div>
    </div>
  );
}
