import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/obeya-dasshutsu-1day-plan/";
const TITLE = "汚部屋脱出の1日プラン｜朝から夜までのタイムスケジュールと進め方";
const DESC =
  "「今日こそ部屋を片付けたい」と思っても、何から始めればいいか分からず1日が終わってしまう——そんな方のために、汚部屋を1日で立て直すための現実的なタイムスケジュールを用意しました。朝の準備から夜の仕上げまでの流れ、挫折しないためのコツ、1日で無理な場合の線引き、業者に頼る判断基準までを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const principles = [
  {
    title: "1日のゴールは「完璧な部屋」ではなく「生活が回る部屋」",
    body: "1日でモデルルームのような部屋を目指すと、ほぼ確実に挫折します。1日プランのゴールは、床が見える、寝る場所と通路が確保できる、ごみがまとまっている、という「生活が回る最低ライン」に置きましょう。ここまで戻せれば、翌日以降の片付けは格段に楽になります。散らかりの程度が重い場合は、1日でどこまでやるかを最初に区切ることが重要です。自分の部屋の状態を客観的に知りたい方は、汚部屋レベルチェックの記事で確認してみてください。",
  },
  {
    title: "判断を減らすことが、スピードを生む",
    body: "片付けが進まない最大の原因は、1つ1つの物について「いるか、いらないか」を深く考え込んでしまうことです。1日プランでは、「明らかなごみ」「明らかに使う物」「迷う物」の3つに機械的に分け、迷う物は箱に入れて後日に回します。当日は判断の重い作業をしない、と決めておくことで手が止まりにくくなります。",
  },
  {
    title: "ごみの出口を先に確保する",
    body: "集めたごみの行き先が決まっていないと、袋の山が部屋に残って達成感が半減します。作業日の前に、お住まいの自治体の収集日と分別ルールを確認し、できれば収集日の前日〜当日を作業日にぶつけるのが理想です。粗大ごみは申し込みが必要な場合が多いため、大型の物は当日出せなくても構いません。まず袋に入る物から片を付けます。",
  },
];

const timeline = [
  {
    title: "前日まで：道具の準備と収集日の確認",
    body: "ごみ袋（多めに）、軍手、マスク、掃除機または、ほうき、雑巾、迷った物を入れる箱を用意します。自治体の分別ルールと収集日を確認し、作業日を決めます。前日は夜更かしせず、体力を残しておきましょう。",
  },
  {
    title: "朝（開始〜2時間）：明らかなごみを一気に回収する",
    body: "ペットボトル、空き容器、包装、期限切れの食品など、誰が見てもごみと分かる物だけを、部屋の入り口から順に袋へ入れていきます。この段階では仕分けを考えず、「ごみだけを拾う」ことに集中します。床が部分的に見えてくるだけで、部屋の印象は大きく変わります。",
  },
  {
    title: "昼前〜午後（2〜5時間目）：物を3分類して定位置へ戻す",
    body: "残った物を「使う物」「手放す物」「迷う物」に分けます。使う物は使う場所の近くへ戻し、手放す物は袋や箱にまとめ、迷う物は保留箱へ。保留箱は1〜2箱までと上限を決めます。昼食と休憩は必ず取り、1時間に1回は水分補給を挟みましょう。",
  },
  {
    title: "夕方（5〜7時間目）：ごみ出しの準備と掃除",
    body: "分別したごみを自治体のルールに沿ってまとめ、出せる物は集積所へ、出せない物は玄関近くに仮置きします。床が見えたら、掃除機がけと水拭きで仕上げます。汚れや臭いが気になる場合は、換気をしながら拭き掃除を丁寧に行いましょう。臭いが取れない場合の対処は部屋の臭いの消し方の記事が参考になります。",
  },
  {
    title: "夜（仕上げ）：翌日以降のタスクをメモして終了",
    body: "粗大ごみの申し込み、保留箱の中身の判断、家電リサイクル対象品の処分など、今日できなかったことをメモに書き出して、今日の作業は終了します。深夜まで続けると疲労で判断力が落ち、翌日に反動が来ます。「今日はここまでやれた」という事実を、次の片付けの燃料にしてください。",
  },
];

const ngActions = [
  {
    title: "収納グッズを先に買いに行く",
    body: "片付けの前に収納ケースを買うと、「物を収める」ことが目的になり、物の総量が減りません。しかも作業時間が買い物で削られます。収納グッズの購入は、物を減らした後に必要な分だけ、が原則です。",
  },
  {
    title: "思い出の品・アルバムを開いてしまう",
    body: "写真や手紙を見始めると、あっという間に1〜2時間が消えます。1日プランの日には、思い出の品は中を見ずに保留箱へ入れるルールにしましょう。じっくり向き合うのは、部屋が片付いてからで遅くありません。",
  },
  {
    title: "最初から完璧な分別・整理をしようとする",
    body: "「この書類はどのファイルに綴じるべきか」のような細かい判断を序盤にやると、体力と気力が尽きます。まず大づかみに片付けて生活を回せる状態に戻し、細部の整理は後日に回すのが1日プランの鉄則です。細かい順番の考え方は片付けの順番の記事で解説しています。",
  },
  {
    title: "疲労を無視して深夜まで続ける",
    body: "片付けは想像以上に体力を使います。無理をすると、けがや体調不良につながるだけでなく、「片付け=つらい」という記憶が残って次に手を付けにくくなります。休憩と終了時刻をあらかじめ決めておき、時間が来たら潔く切り上げましょう。",
  },
];

const judgeSigns = [
  "ごみ袋が数十袋規模になりそうで、1日ではごみ出しまで到底終わらない",
  "腐敗した物や害虫が発生していて、自力での作業に抵抗がある",
  "大型家具・家電の搬出が必要だが、運び出せる人手がない",
  "体調・体力面の不安があり、長時間の作業が難しい",
  "何度も自力で挑戦したが、途中で挫折を繰り返している",
];

const faqs = [
  {
    q: "本当に1日で汚部屋から脱出できますか？",
    a: "部屋の広さと物量によります。ワンルームで床の一部が見えている程度なら、1日で「生活が回る状態」まで戻せる可能性は十分あります。床がほぼ見えない、複数の部屋に及ぶ、といった場合は、1日で全部ではなく「今日はこの部屋のごみ回収まで」と区切って複数日に分けるのが現実的です。無理な計画はリバウンドのもとになります。",
  },
  {
    q: "どうしてもやる気が出ないときはどうすればよいですか？",
    a: "やる気を待つより、「ごみ袋を1枚持って、目に付いたごみを10個だけ拾う」のように、始めるハードルを極端に下げるのが有効です。片付けが続かない背景には心理的な要因があることも多いため、片付けられない心理と対処の記事もあわせて読んでみてください。自分を責めることは、解決には役立ちません。",
  },
  {
    q: "片付けの途中で出た粗大ごみはどうすればよいですか？",
    a: "自治体の粗大ごみ収集は事前の申し込みが必要な場合が多く、当日すぐには出せないのが一般的です。作業当日は玄関近くにまとめておき、後日、自治体の案内に沿って申し込みましょう。申し込みの一般的な流れは粗大ごみ収集の申し込みの流れの記事で解説しています。急ぐ場合は回収業者への依頼も選択肢です。",
  },
  {
    q: "リバウンドしないためにはどうすればよいですか？",
    a: "1日で片付けた後、「物の定位置を決める」「床に物を直置きしない」「ごみ袋を常設して収集日に必ず出す」という3つの習慣を作るのが基本です。物が増える入り口（買い物・もらい物）を絞ることも効果的です。散らかりの兆候を早めに察知するために、定期的に汚部屋レベルチェックで自己点検するのもおすすめです。",
  },
];

const related = [
  { href: "/oheya-checklist/", label: "汚部屋レベルチェック", desc: "散らかり度合いを客観的に判定する" },
  { href: "/katazuke-junban/", label: "部屋の片付けの順番", desc: "どこから手を付けるべきかの基本" },
  { href: "/katazukerarenai-shinri/", label: "片付けられない心理と対処", desc: "続かない原因への現実的な向き合い方" },
  { href: "/guide/self-cleanup/", label: "自力での片付けガイド", desc: "自分で片付けるときの基礎知識" },
  { href: "/heya-shoushuu/", label: "部屋の臭いの消し方", desc: "染み付いた臭いの原因と対処" },
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷清掃サービスの基礎知識", desc: "業者に頼める作業の範囲" },
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
    { "@type": "ListItem", position: 2, name: "汚部屋脱出の1日プラン" },
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
    { href: "#gensoku", label: "1｜1日プランを成功させる3つの原則" },
    { href: "#timeline", label: "2｜朝から夜までのタイムスケジュール5ステップ" },
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

      <Breadcrumb items={[{ label: "汚部屋脱出の1日プラン" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          汚部屋脱出の1日プラン｜朝から夜までのタイムスケジュールと進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「週末こそ片付ける」と決めたのに、どこから手を付ければいいか分からないまま夕方になってしまった——汚部屋の片付けで多くの人がつまずくのは、やる気ではなく「段取り」です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、休みの1日を使って部屋を立て直すための、朝から夜までの具体的なタイムスケジュールを紹介します。あわせて、挫折を招くNG行動、1日で無理な場合の区切り方、業者に頼るべきサインも解説します。読みながらそのまま実行できる構成にしてあります。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>1日のゴールは「完璧」ではなく「床が見えて生活が回る」状態に置く</li>
          <li>午前は「明らかなごみの回収」だけに集中し、仕分けは午後に回す</li>
          <li>迷う物は保留箱へ。当日は判断の重い作業（思い出の品など）をしない</li>
          <li>ごみの収集日と分別ルールを前日までに確認し、出口を確保してから始める</li>
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

      <H2 id="gensoku" num="1">1日プランを成功させる3つの原則</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        タイムスケジュールに入る前に、1日プランの成否を分ける3つの原則を押さえてください。この原則を守るだけで、途中で手が止まる確率がぐっと下がります。
      </p>
      <div className="space-y-6 mb-4">
        {principles.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="timeline" num="2">朝から夜までのタイムスケジュール5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからが本編です。時間はあくまで目安なので、自分のペースに合わせて伸縮させてください。大事なのは順番です。「ごみ→分類→ごみ出し→掃除→締め」の流れは崩さないようにしましょう。
      </p>
      <div className="space-y-5 mb-4">
        {timeline.map((s, i) => (
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
        ごみの分別区分・収集日・粗大ごみの出し方は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。自治体の収集制度の使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>にまとめています。
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
        次のいずれかに当てはまる場合は、1日プランでの自力片付けにこだわらず、片付け業者・清掃業者への相談を検討しましょう。プロに一度リセットしてもらってから自分で維持する、という選択は決して逃げではありません。
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
        地域別の依頼先は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋</Link>・<Link href="/area/kyoto/" className="text-primary underline underline-offset-2">京都</Link>など各エリアページで紹介しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・収集日・粗大ごみの出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。体調に不安がある場合は無理をせず、周囲や専門業者の力を借りてください。
      </p>
    </article>
  );
}
