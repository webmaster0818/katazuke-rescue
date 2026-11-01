import Link from "next/link";
import type { ReactNode } from "react";

export const SITE = "https://katazuke-rescue.com";

export type Source = { label: string; org: string; url: string };
export type Faq = { q: string; a: string };
export type Related = { href: string; label: string; desc: string };

export function H2({ id, num, children }: { id: string; num: string; children: ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      <span className="mono text-primary mr-2">{num}</span>
      {children}
    </h2>
  );
}

export function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[15px] leading-8 text-text-secondary mb-4 ${className}`}>{children}</p>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className="text-primary underline underline-offset-2">
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
      {children}
    </a>
  );
}

export function Cards({ items, tone = "plain" }: { items: { title: string; body: string }[]; tone?: "plain" | "warn" }) {
  const cls = tone === "warn" ? "rounded-2xl border border-amber-300 bg-amber-50 p-5" : "rounded-2xl border border-border bg-surface p-5";
  return (
    <div className="space-y-4 mb-4">
      {items.map((c) => (
        <div key={c.title} className={cls}>
          <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
          <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="space-y-5 mb-4">
      {items.map((s, i) => (
        <div key={s.title}>
          <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
            <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
            <span>{s.title}</span>
          </h3>
          <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Summary({ points }: { points: string[] }) {
  return (
    <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
      <p className="font-bold text-primary mb-2">この記事の要点</p>
      <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export function Toc({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="目次" className="my-10 rounded-2xl border border-border bg-surface-alt p-5 sm:p-6">
      <p className="font-bold text-primary mb-3">Contents</p>
      <ol className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-primary hover:underline font-medium">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-4 mb-4">
      {faqs.map((f) => (
        <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
          <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function SourceList({ sources, checked = "2026年11月1日" }: { sources: Source[]; checked?: string }) {
  return (
    <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
      {sources.map((s) => (
        <li key={s.url}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 break-all">
            {s.label}
          </a>
          （{s.org}・{checked}確認）
        </li>
      ))}
    </ul>
  );
}

export function RelatedGrid({ items }: { items: Related[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mb-10">
      {items.map((r) => (
        <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
          <p className="font-bold text-primary mb-1">{r.label}</p>
          <p className="text-sm text-text-secondary">{r.desc}</p>
        </Link>
      ))}
    </div>
  );
}

export function RankingCta() {
  return (
    <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
      <p className="text-sm text-text-secondary mb-4">
        依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link href="/ranking/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors">
          片付け業者ランキングを見る
        </Link>
        <Link href="/cost/price/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-700 font-bold hover:bg-blue-50 transition-colors">
          費用相場を確認する
        </Link>
      </div>
    </div>
  );
}

export function ArticleHeader({ label, title, published, updated }: { label: string; title: string; published: string; updated: string }) {
  const fmt = (d: string) => {
    const [y, m, day] = d.split("-").map(Number);
    return `${y}年${m}月${day}日`;
  };
  return (
    <>
      <span className="label inline-block mb-3 text-primary">{label}</span>
      <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{title}</h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-6">
        <time dateTime={published}>公開：{fmt(published)}</time>
        <span className="w-px h-3 bg-border" />
        <time dateTime={updated}>更新：{fmt(updated)}</time>
        <span className="w-px h-3 bg-border" />
        <span>片付けレスキュー編集部</span>
      </div>
    </>
  );
}

export function JsonLd({ title, desc, path, crumb, faqs, published, updated, crumbParent }: { title: string; desc: string; path: string; crumb: string; faqs: Faq[]; published: string; updated: string; crumbParent?: { name: string; path: string } }) {
  const items: Record<string, unknown>[] = [{ "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` }];
  if (crumbParent) items.push({ "@type": "ListItem", position: 2, name: crumbParent.name, item: `${SITE}${crumbParent.path}` });
  items.push({ "@type": "ListItem", position: items.length + 1, name: crumb });
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: desc,
      author: { "@type": "Organization", name: "片付けレスキュー編集部" },
      publisher: { "@type": "Organization", name: "片付けレスキュー" },
      datePublished: published,
      dateModified: updated,
      mainEntityOfPage: `${SITE}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items },
  ];
  return (
    <>
      {data.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
