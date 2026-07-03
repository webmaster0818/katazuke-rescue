import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜片付けレスキュー",
  description: "片付けレスキューのプライバシーポリシーです。",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      <h1 className="text-2xl font-bold text-slate-900 mb-6">プライバシーポリシー</h1>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
        <p className="text-sm text-slate-500 mb-6">最終更新日：2026年4月27日</p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">個人情報の収集について</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          片付けレスキュー（以下「当サイト」）は、サービスの改善・運営のために必要最小限の情報を収集する場合があります。収集した個人情報は、適切な安全管理措置を講じた上で取り扱います。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">Cookieおよびアクセス解析について</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトでは、Google Analyticsを利用してアクセス情報を収集・分析しています。Google Analyticsはデータ収集にCookieを使用します。収集されるデータは匿名化されており、個人を特定するものではありません。Google Analyticsの利用規約およびプライバシーポリシーはGoogleのウェブサイトをご確認ください。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">アフィリエイト広告について</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトはアフィリエイト広告プログラム（各業者の自社アフィリエイト、ASP）に参加しています。広告のためにCookieが利用される場合があります。ユーザーのブラウザ設定でCookieを無効にすることができます。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">第三者への提供</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトは、法令に基づく場合を除き、収集した個人情報を第三者に提供することはありません。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">プライバシーポリシーの変更</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更後のポリシーはサイト上に掲示した時点で効力を発生します。
        </p>

        <h2 className="text-lg font-bold text-slate-900 mb-3">お問い合わせ</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせページよりご連絡ください。
        </p>
      </div>
    </div>
  );
}
