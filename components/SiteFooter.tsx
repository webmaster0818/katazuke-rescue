import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#2563EB"/>
                <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-white">片付けレスキュー</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              片付け・不用品回収業者の信頼できる比較情報を提供するメディアです。
            </p>
          </div>

          {/* Service guides */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">サービスガイド</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service/gomiyashiki/" className="hover:text-white transition-colors">ゴミ屋敷片付け</Link></li>
              <li><Link href="/service/fuyohin/" className="hover:text-white transition-colors">不用品回収</Link></li>
              <li><Link href="/service/ihinseiri/" className="hover:text-white transition-colors">遺品整理</Link></li>
              <li><Link href="/service/hikkoshi/" className="hover:text-white transition-colors">引越し前の片付け</Link></li>
              <li><Link href="/service/katazuke-daikou/" className="hover:text-white transition-colors">片付け代行</Link></li>
            </ul>
          </div>

          {/* Ranking & cost */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">ランキング・費用</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-white transition-colors">業者ランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-white transition-colors">格安業者ランキング</Link></li>
              <li><Link href="/cost/price/" className="hover:text-white transition-colors">費用相場</Link></li>
            </ul>
          </div>

          {/* How-to guides */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">お役立ちガイド</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/self-cleanup/" className="hover:text-white transition-colors">自分で片付ける方法</Link></li>
              <li><Link href="/guide/cost-saving/" className="hover:text-white transition-colors">費用を安くするコツ</Link></li>
              <li><Link href="/guide/illegal-dumping/" className="hover:text-white transition-colors">違法業者の見分け方</Link></li>
              <li><Link href="/guide/municipal-service/" className="hover:text-white transition-colors">自治体サービス活用法</Link></li>
              <li><Link href="/guide/before-after/" className="hover:text-white transition-colors">ビフォーアフター事例</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} 片付けレスキュー. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms/" className="hover:text-white transition-colors">利用規約</Link>
            <Link href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-white transition-colors">コンテンツポリシー</Link>
          </nav>
        </div>

        <p className="mt-4 text-xs text-slate-500 text-center">
          本サイトはプロモーション(PR)を含みます。掲載業者から収益を得る場合がありますが、コンテンツの内容には影響しません。
        </p>
      </div>
    </footer>
  );
}
