import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンテンツポリシー｜片付けレスキュー",
  description: "片付けレスキューのコンテンツポリシーです。",
  alternates: { canonical: "/content-policy/" },
};

export default function ContentPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "コンテンツポリシー" }]} />
      <h1 className="text-2xl font-bold text-slate-900 mb-6">コンテンツポリシー</h1>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
        <p className="text-sm text-slate-500 mb-6">最終更新日：2026年4月27日</p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">編集方針</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          片付けレスキューは、ユーザーが信頼できる情報に基づいて片付け業者を選べるよう、正確で有用なコンテンツの提供を目指しています。掲載情報は編集部が独自に調査・評価したものです。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">情報の正確性への取り組み</h2>
        <ul className="text-slate-600 text-sm space-y-2 mb-6 list-disc list-inside">
          <li>掲載業者の情報は定期的に確認・更新しています</li>
          <li>費用相場は複数の情報源を元に算出しています</li>
          <li>誤情報・古い情報を発見した場合は速やかに修正します</li>
          <li>根拠のある情報のみを掲載し、推測は推測として明示します</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 mb-3">アフィリエイト開示</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトは掲載業者のアフィリエイトプログラムに参加しており、ユーザーがリンクを経由して契約・申込みを行った場合に当サイトへ報酬が発生する場合があります。ただし、この報酬は編集内容や業者の評価・順位に影響を与えません。アフィリエイトリンクには「PR」ラベルを付記しています。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">掲載業者の選定基準</h2>
        <ul className="text-slate-600 text-sm space-y-2 mb-6 list-disc list-inside">
          <li>適切な許可（一般廃棄物収集運搬業許可等）を取得していること</li>
          <li>明確な料金体系を持ち、不当な追加請求がないこと</li>
          <li>ユーザーの口コミ・評判が一定水準を満たすこと</li>
          <li>会社情報・連絡先が明記されていること</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 mb-3">禁止コンテンツ</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">当サイトは以下のコンテンツを掲載しません。</p>
        <ul className="text-slate-600 text-sm space-y-2 mb-6 list-disc list-inside">
          <li>虚偽・誤解を招く情報</li>
          <li>無許可・違法業者の紹介</li>
          <li>差別的・侮辱的な表現</li>
          <li>個人情報を含むコンテンツ</li>
          <li>バックボタンハイジャッキングなどの不正なナビゲーション操作</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 mb-3">コンテンツに関するお問い合わせ</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          掲載情報に誤りや問題がある場合は、当サイトのお問い合わせページよりご連絡ください。速やかに確認・対応いたします。
        </p>
      </div>
    </div>
  );
}
