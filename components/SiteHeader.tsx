"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#2563EB"/>
            <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-lg text-slate-900">片付けレスキュー</span>
          <span className="hidden sm:inline-block text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">PR</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/ranking/" className="hover:text-blue-600 transition-colors">ランキング</Link>
          <Link href="/ranking/cheap/" className="hover:text-blue-600 transition-colors">格安ランキング</Link>
          <Link href="/service/gomiyashiki/" className="hover:text-blue-600 transition-colors">ゴミ屋敷</Link>
          <Link href="/service/ihinseiri/" className="hover:text-blue-600 transition-colors">遺品整理</Link>
          <Link href="/cost/price/" className="hover:text-blue-600 transition-colors">費用相場</Link>
          <Link href="/ranking/" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            無料見積もり
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2 text-sm font-medium text-slate-700">
            <Link href="/ranking/" className="py-2 px-3 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>ランキング</Link>
            <Link href="/ranking/cheap/" className="py-2 px-3 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>格安ランキング</Link>
            <Link href="/service/gomiyashiki/" className="py-2 px-3 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>ゴミ屋敷片付け</Link>
            <Link href="/service/ihinseiri/" className="py-2 px-3 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>遺品整理</Link>
            <Link href="/service/fuyohin/" className="py-2 px-3 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>不用品回収</Link>
            <Link href="/cost/price/" className="py-2 px-3 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>費用相場</Link>
            <Link href="/ranking/" className="mt-2 bg-orange-500 text-white text-center py-2 px-3 rounded-lg hover:bg-orange-600" onClick={() => setMenuOpen(false)}>無料見積もりを取る</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
