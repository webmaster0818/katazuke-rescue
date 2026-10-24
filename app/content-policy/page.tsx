import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンテンツポリシー",
  description: "片付けレスキューのコンテンツポリシーです。",
  alternates: { canonical: "/content-policy/" },
};

export default function ContentPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "コンテンツポリシー" }]} />
      <h1 className="text-2xl font-bold text-slate-900 mb-6">コンテンツポリシー</h1>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
        <p className="text-sm text-slate-500 mb-6">最終更新日：2026年10月24日</p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">編集方針</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          片付けレスキューは、ユーザーが信頼できる情報に基づいて片付け業者を選べるよう、正確で有用なコンテンツの提供を目指しています。掲載情報は、編集部が各社の公式サイトと公的機関（国・自治体など）の公開情報を確認して記載したものです。独自の調査・アンケートは行っていません。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">情報の正確性への取り組み</h2>
        <ul className="text-slate-600 text-sm space-y-2 mb-6 list-disc list-inside">
          <li>掲載業者の情報は定期的に確認・更新しています</li>
          <li>費用の目安は、各社の公式サイトや自治体の公開情報を確認して掲載します（出典を確認できない料金は確認のうえ修正・削除します）</li>
          <li>誤情報・古い情報を発見した場合は速やかに修正します</li>
          <li>根拠のある情報のみを掲載し、推測は推測として明示します</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 mb-3">アフィリエイト開示</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトは掲載業者のアフィリエイトプログラムに参加しており、ユーザーがリンクを経由して契約・申込みを行った場合に当サイトへ報酬が発生する場合があります。ただし、この報酬は編集内容や業者の評価・順位に影響を与えません。アフィリエイトリンクには「PR」ラベルを付記しています。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">掲載業者の選定基準</h2>
        <ul className="text-slate-600 text-sm space-y-2 mb-6 list-disc list-inside">
          <li>許可・資格は、各社の公式サイトで確認できたものだけを記載すること</li>
          <li>仲介サービスについては、作業する業者ごとに一般廃棄物収集運搬業の許可（または許可業者への委託）の確認が必要である旨を案内すること</li>
          <li>料金・追加料金の扱いは、各社の公式サイトの記載を確認して掲載すること</li>
          <li>口コミは、各社の公式サイトやGoogleマップに掲載されたものを出典リンクつきで引用すること（当サイトでは口コミの募集・集計を行っていません）</li>
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
          掲載情報に誤りや問題がある場合は、<a href="/about/" className="text-blue-600 hover:underline">運営者情報</a>に記載のメールアドレス（webmaster@mediax.biz）までご連絡ください。速やかに確認・対応いたします。
        </p>
      </div>
    </div>
  );
}
