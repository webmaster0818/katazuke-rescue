import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/minimalist-hajimekata/";
const TITLE = "ミニマリスト志向の始め方｜無理なく物を減らす手順と続けるコツ";
const DESC =
  "ミニマリストに興味はあるけれど、極端な生活には抵抗がある——そんな方に向けて、暮らしを軽くする現実的なミニマリスト志向の始め方を解説します。ミニマリズムの考え方、始める前に決めておくこと、無理なく物を減らす5ステップ、陥りがちな失敗、減らした物の手放し方まで、今日から実践できる形でまとめました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ミニマリズムは「捨てる競争」ではない",
    body: "ミニマリストというと、家具のほとんどない部屋や持ち物数十個の生活を思い浮かべるかもしれませんが、それは一つの表現形にすぎません。本質は「自分にとって大事なことに時間とエネルギーを使うために、そうでない物を減らす」という考え方です。持ち物の数に正解はなく、家族構成や仕事、趣味によって適切な量は人それぞれです。他人と比べる必要はまったくありません。",
  },
  {
    title: "物が減ると、片付け・掃除・探し物の負担が減る",
    body: "物の総量が減ると、散らかる速度が落ち、掃除がしやすくなり、探し物の時間が減ります。収納術で物を上手にしまうよりも、物自体を減らすほうが、部屋を保つ効果が長続きしやすいのです。片付けが苦手な人ほど、収納の工夫より先に総量を減らすアプローチが向いています。",
  },
  {
    title: "「減らす」と「増やさない」はセットで考える",
    body: "一度物を減らしても、入ってくる量が変わらなければ元に戻ります。ミニマリスト志向を続けるコツは、手放す作業と同時に、買い物やもらい物など「物の入り口」を見直すことです。1つ買ったら1つ手放す、迷ったら買わない、といった小さなルールが、リバウンドを防ぎます。",
  },
];

const steps = [
  {
    title: "「何のために減らすのか」を言葉にする",
    body: "最初に、自分がミニマリスト志向に惹かれた理由を書き出してみましょう。「掃除を楽にしたい」「引っ越しを身軽にしたい」「買い物の無駄を減らしたい」「好きなことに時間を使いたい」——目的が明確になると、残す・手放すの基準が定まり、途中でぶれにくくなります。目的は立派である必要はなく、率直なものほど機能します。",
  },
  {
    title: "衣類など判断しやすい1カテゴリから始める",
    body: "最初のターゲットには、思い入れが比較的軽く量の多い「衣類」が向いています。全部を一度に出して、1年着ていない物、サイズや好みが合わない物を手放し候補にします。部屋単位ではなくカテゴリ単位で進めるのは、同じ種類の物を並べると量と重複が一目で分かるからです。衣類の具体的な仕分け基準は衣類の整理と手放し方の記事で詳しく解説しています。",
  },
  {
    title: "「持つ数」を決めて、数で管理する",
    body: "カテゴリごとに「タオルは何枚」「靴は何足」「マグカップは何個」と適正数を決めると、いる・いらないを毎回悩む必要がなくなります。数を超えたら手放す、というシンプルなルールに変わるからです。適正数は暮らしてみて調整して構いません。最初は少し余裕を持たせた数にしておくと、極端になりすぎるのを防げます。",
  },
  {
    title: "物の入り口を絞る仕組みを作る",
    body: "「1つ買ったら1つ手放す」「迷った物は買わずに一晩置く」「無料の配布物やノベルティは受け取らない」など、物が増える入り口を絞るルールを2〜3個だけ決めます。全部を厳格に守ろうとせず、続けられる緩さにしておくのが長続きの秘訣です。買い物の頻度や通販アプリとの付き合い方を見直すのも効果的です。",
  },
  {
    title: "定期的な見直し日を決めて、少しずつ範囲を広げる",
    body: "月に1回、季節の変わり目など、見直しのタイミングを決めて、衣類の次は本・書類、キッチン用品、と範囲を広げていきます。本や書類の整理は本・書類の整理と捨て方の記事が参考になります。一気に家全体をやろうとせず、数か月かけて一巡するイメージで進めると、疲れずに定着します。",
  },
];

const ngActions = [
  {
    title: "家族の物を勝手に処分する",
    body: "自分の変化に手応えを感じると、家族の物まで減らしたくなりがちですが、本人の同意なく処分するのは信頼関係を壊す典型的な失敗です。ミニマリズムはあくまで自分の持ち物から。家族には、片付いた自分のスペースを見せることが、何よりの説得になります。",
  },
  {
    title: "勢いで捨てすぎて生活に支障を出す",
    body: "始めたばかりの時期は「捨てるハイ」とも呼ばれる状態になり、必要な物まで手放してしまうことがあります。書類・証明書類・冠婚葬祭用品・季節用品など、使用頻度は低くても必要な物があります。迷う物は保留箱に入れて時間を置き、数か月使わなかったら手放す、という二段構えが安全です。",
  },
  {
    title: "防災備蓄まで削ってしまう",
    body: "見た目のすっきりさを優先して、飲料水・非常食・防災用品まで減らすのは本末転倒です。ミニマリズムと備えは矛盾しません。必要な備蓄は「意図して持つ物」として定位置を決めて確保したうえで、それ以外を減らしましょう。",
  },
  {
    title: "手放すこと自体が目的化して疲れてしまう",
    body: "物の数を減らすことがゴールになると、常に「まだ減らせるのでは」と考えて落ち着かなくなります。目的は暮らしを軽くすることであり、数字の競争ではありません。「今の量で暮らしやすい」と感じたら、そこがあなたの適正量です。維持に移行して、浮いた時間を本来やりたかったことに使いましょう。",
  },
];

const judgeSigns = [
  "手放すと決めた物が大量にあり、自分で処分ルートを捌き切れない",
  "大型家具・家電を手放したいが、搬出が難しい",
  "実家や独立時の荷物など、まとまった物量を一度に整理したい",
  "売れる物と処分する物の仕分けごと任せたい",
  "引っ越しに合わせて一気に物を減らしたい",
];

const faqs = [
  {
    q: "ミニマリストになるには物を何個まで減らせばいいですか？",
    a: "決まった数はありません。持ち物の数はライフスタイルによって適正が異なり、数を競うものでもありません。「管理できる量」「散らからない量」「自分が心地よい量」を基準に、暮らしながら調整していくのが現実的です。他人の持ち物リストは参考程度に見るのがよいでしょう。",
  },
  {
    q: "何から捨て始めるのがおすすめですか？",
    a: "明らかなごみ・壊れた物・期限切れの物を除けば、衣類から始めるのがおすすめです。量が多く、重複に気付きやすく、思い入れの判断も比較的軽いためです。逆に、写真・手紙・記念品などの思い出の品は判断に時間がかかるため、経験を積んだ最後に回すのが定石です。全体の順番は片付けの順番の記事で解説しています。",
  },
  {
    q: "減らした物はどう手放せばよいですか？",
    a: "状態のよい物はリサイクルショップ・フリマアプリ・寄付・譲渡で誰かに使ってもらい、それ以外は自治体の分別ルールに沿って処分するのが基本です。粗大ごみの出し方・対象品目は自治体により異なるため、お住まいの市区町村の公式サイトで確認してください。処分先の選び方は不用品の処分ルート比較の記事にまとめています。",
  },
  {
    q: "捨てられない物が多くて進みません。どうすればよいですか？",
    a: "無理に捨てる必要はありません。保留箱やトランクルームを使って一時的に生活空間の外へ出し、「なくても困らない」ことを体感してから判断する方法があります。トランクルームの活用方法はトランクルーム活用術の記事で解説しています。それでも進まない場合は、心理的な背景があるかもしれません。片付けられない心理と対処の記事も参考にしてください。",
  },
];

const related = [
  { href: "/irui-seiri/", label: "衣類の整理と手放し方", desc: "最初の1カテゴリに最適な衣類の仕分け方" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理と捨て方", desc: "残すべき書類の見分け方" },
  { href: "/katazuke-junban/", label: "部屋の片付けの順番", desc: "挫折しない片付けの基本手順" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売却・譲渡・処分の使い分け" },
  { href: "/trunk-room-katsuyou/", label: "トランクルーム活用術", desc: "捨てずに物を逃がす方法" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "人生の節目に持ち物を見直す方法" },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "ミニマリスト志向の始め方" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  author: { "@type": "Organization", name: "片付けレスキュー編集部" },
  publisher: { "@type": "Organization", name: "片付けレスキュー" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: `${SITE}${PATH}`,
};

function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-xl sm:text-2xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5 mt-14">
      <span className="mono text-primary mr-2">{num}</span>
      {children}
    </h2>
  );
}

export default function Page() {
  const toc = [
    { href: "#kiso", label: "1｜ミニマリスト志向の基本の考え方" },
    { href: "#steps", label: "2｜無理なく始めるミニマリスト志向の5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "ミニマリスト志向の始め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ミニマリスト志向の始め方｜無理なく物を減らす手順と続けるコツ
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「物を減らして身軽に暮らしたい。でも、極端なミニマリスト生活は自分には無理そう」——そう感じている方は多いのではないでしょうか。実は、ミニマリズムは全か無かの選択ではなく、自分に合う程度で取り入れられる考え方です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ミニマリスト志向の基本の考え方から、無理なく始める5つのステップ、初心者が陥りがちな失敗、減らした物の手放し方までを解説します。片付けが苦手な方こそ、収納術より先に「物を減らす」アプローチを試してみてください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ミニマリズムの本質は「大事なことに集中するために、そうでない物を減らす」こと。持ち物の数に正解はない</li>
          <li>最初は衣類など判断しやすい1カテゴリから。思い出の品は最後に回す</li>
          <li>「持つ数を決める」「入り口を絞る」の2つでリバウンドを防ぐ</li>
          <li>家族の物には手を出さない。防災備蓄は「意図して持つ物」として確保する</li>
        </ul>
      </div>

      <nav aria-label="目次" className="my-10 rounded-2xl border border-border bg-surface-alt p-5 sm:p-6">
        <p className="font-bold text-primary mb-3">Contents</p>
        <ol className="space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-primary hover:underline font-medium">{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <H2 id="kiso" num="1">ミニマリスト志向の基本の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        手を動かす前に、ミニマリズムの捉え方を整理しておきましょう。ここを誤解すると、極端に走って疲れたり、他人と比べて挫折したりしやすくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">無理なく始めるミニマリスト志向の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実践編です。ポイントは「目的を先に、カテゴリ単位で、数で管理する」の3点です。一気に家全体を変えようとせず、小さく始めて習慣にしていきます。
      </p>
      <div className="space-y-5 mb-4">
        {steps.map((s, i) => (
          <div key={s.title}>
            <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
              <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary pl-7">{s.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放すと決めた物の行き先は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で解説しています。粗大ごみの出し方・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
      </p>

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="4">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ミニマリスト志向は基本的に自分のペースで進めるものですが、まとまった物量を一度に手放す局面では、業者の力を借りると一気に前へ進めます。次のような場合は相談を検討しましょう。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          どの業者に相談すべきか迷ったら、編集部が特徴・口コミを比較したランキングと費用相場を参考にしてください。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        地域別の依頼先は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜</Link>・<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪</Link>など各エリアページで紹介しています。
      </p>

      <H2 id="faq" num="5">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="6">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。物の処分に関する分別区分・粗大ごみの出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。業者への依頼費用は物量・間取り・搬出条件により異なります。
      </p>
    </article>
  );
}
