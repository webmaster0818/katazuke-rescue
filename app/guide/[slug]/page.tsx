import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import guidesData from "@/data/guides.json";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return guidesData.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesData.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title}｜片付けレスキュー`,
    description: guide.description,
    alternates: { canonical: `/guide/${slug}/` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guidesData.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "お役立ちガイド" },
          { label: guide.title },
        ]}
      />

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200 font-medium">
            {guide.category}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-600 text-xs px-3 py-1 rounded-full border border-slate-200">
            読了時間: {guide.readTime}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{guide.title}</h1>
        <p className="text-slate-600 leading-relaxed">{guide.description}</p>
      </div>

      {/* Meta info */}
      {(guide.estimatedTime !== "—" || guide.estimatedCost !== "—") && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {guide.difficulty !== "—" && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">難易度</p>
              <p className="font-bold text-slate-900">{guide.difficulty}</p>
            </div>
          )}
          {guide.estimatedTime !== "—" && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">所要時間</p>
              <p className="font-bold text-slate-900">{guide.estimatedTime}</p>
            </div>
          )}
          {guide.estimatedCost !== "—" && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">目安費用</p>
              <p className="font-bold text-slate-900 text-sm">{guide.estimatedCost}</p>
            </div>
          )}
        </div>
      )}

      {/* Sections */}
      <div className="space-y-6 mb-10">
        {guide.sections.map((rawSection, index) => {
          const section = rawSection as { step?: number; title: string; content: string };
          return (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
              {section.step !== undefined ? (
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {section.step}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                </div>
              ) : (
                <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
              )}
              <p className="text-slate-600 leading-relaxed">{section.content}</p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-2">業者に依頼する場合は比較してから決めましょう</h2>
        <p className="text-blue-100 text-sm mb-4">自分での作業が難しい場合は、専門業者への依頼も検討してみてください。</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/ranking/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            業者ランキングを見る
          </Link>
          <Link href="/cost/price/" className="bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium px-8 py-3 rounded-xl transition-colors">
            費用相場を確認する
          </Link>
        </div>
      </div>
    </div>
  );
}
