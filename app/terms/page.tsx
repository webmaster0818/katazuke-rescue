import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約｜片付けレスキュー",
  description: "片付けレスキューの利用規約です。",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "利用規約" }]} />
      <h1 className="text-2xl font-bold text-slate-900 mb-6">利用規約</h1>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 prose prose-slate max-w-none">
        <p className="text-sm text-slate-500 mb-6">最終更新日：2026年4月27日</p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第1条（適用）</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          本規約は、片付けレスキュー（以下「当サイト」）が提供するサービスの利用条件を定めるものです。ユーザーの皆様は、本規約に同意の上でサービスをご利用ください。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第2条（禁止事項）</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">ユーザーは以下の行為を行ってはなりません。</p>
        <ul className="text-slate-600 text-sm space-y-1 mb-6 list-disc list-inside">
          <li>法令または公序良俗に違反する行為</li>
          <li>当サイトのコンテンツの無断複製・転載・配布</li>
          <li>当サイトのサービス運営を妨害する行為</li>
          <li>他のユーザーまたは第三者に損害を与える行為</li>
          <li>当サイトを通じた商業目的の勧誘行為</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第3条（免責事項）</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトに掲載する情報は、信頼性を確保するよう努めておりますが、情報の正確性・完全性・最新性を保証するものではありません。当サイトの情報に基づく業者の選択・契約によって生じた損害について、当サイトは一切の責任を負いません。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第4条（広告・アフィリエイト）</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトはアフィリエイト広告プログラムに参加しており、掲載業者から収益を受け取る場合があります。ただし、収益は当サイトの運営・コンテンツ制作に充てられ、掲載業者への評価・順位付けに影響を与えません。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第5条（リンク）</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトは各業者の公式サイトへのリンクを掲載しています。リンク先の内容・プライバシーポリシーについては各サイトの責任となります。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第6条（変更）</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトは、必要に応じて本規約を変更することがあります。変更後の利用規約はサイト上に掲示した時点で効力を発生するものとします。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第7条（準拠法）</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          本規約の解釈および適用は、日本国法に準拠するものとします。
        </p>
      </div>
    </div>
  );
}
