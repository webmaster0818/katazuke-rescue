import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/hikkoshi-mae-danshari/";
const TITLE = "引っ越し前の断捨離の段取り｜いつから何を減らす？逆算スケジュールと手順";
const DESC =
  "引っ越しは持ち物を見直す絶好の機会です。荷物が減れば梱包・搬出・新居での荷ほどきまで一連の負担が軽くなります。この記事では、引っ越し前の断捨離をいつから始めるか、逆算スケジュールの立て方、自力で進める5ステップ、やりがちなNG行動、業者に頼るべきサインまでを順を追って解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const reasons = [
  {
    title: "荷物の量が、引っ越しの手間と負担を左右する",
    body: "引っ越しの作業量は、運ぶ荷物の量にほぼ比例します。段ボールの数が減れば、梱包にかかる時間も、新居で荷ほどきする時間も短くなります。使っていない物を新居まで運んで、また押し入れの奥にしまう——この無駄を断ち切れるのが、引っ越し前の断捨離の大きな価値です。",
  },
  {
    title: "引っ越しは「全部の持ち物に一度触れる」唯一の機会",
    body: "普段の生活では、押し入れの奥や物置の中の物と向き合う機会はほとんどありません。引っ越しでは、家中の物をすべて箱に詰めるため、強制的に全持ち物と対面することになります。どうせ一つひとつ手に取るのなら、そのタイミングで「新居に持っていくか、ここで手放すか」を判断してしまうのが合理的です。",
  },
  {
    title: "新居の収納量が、残す量の明確な基準になる",
    body: "断捨離が続かない理由の多くは「どこまで減らせばいいか分からない」ことです。引っ越しでは、新居の間取りと収納量という動かしがたい基準があります。「新居のクローゼットに入る分だけ残す」と決めれば、迷いが減り、判断のスピードが上がります。",
  },
];

const schedule = [
  {
    title: "1か月前〜：全体量の把握と粗大ごみの段取り",
    body: "まず家全体を見回して、明らかに持っていかない大型家具・家電に当たりを付けます。自治体の粗大ごみ収集は申し込みから収集日まで日数がかかる場合があるため、早めに自治体の案内を確認して段取りを始めるのが安全です。申し込み方法や日程は自治体により異なるので、必ずお住まいの市区町村の公式サイトで確認してください。",
  },
  {
    title: "3〜2週間前：使っていない部屋・収納から仕分け",
    body: "普段使わない部屋、押し入れの奥、季節外の物など「なくても今日の生活が回る場所」から仕分けを始めます。売却や譲渡に出す物は、この時期までに手放しておくと直前に慌てません。",
  },
  {
    title: "1週間前〜前日：日用品の絞り込みと最終処分",
    body: "日常的に使う物は直前まで使うため、最後に仕分けます。収集日に間に合わないごみが出た場合の扱いも、自治体の案内で確認しておきましょう。前日には「持っていく物だけが箱に入っている」状態が理想です。",
  },
];

const steps = [
  {
    title: "新居の収納量からゴールを決める",
    body: "新居の間取り図を見ながら、クローゼット・押し入れ・キッチン収納の量を把握し、「ここに収まる量まで減らす」というゴールを決めます。今の住まいより収納が減るなら、その分は確実に手放す必要があります。ゴールが数字や面積でイメージできると、個々の判断がぶれにくくなります。",
  },
  {
    title: "処分に時間がかかる物から着手する",
    body: "大型家具・家電、布団・マットレスなど、自治体の粗大ごみ収集や家電リサイクルのルートが必要な物は、手続きに日数がかかることがあります。最初にリストアップし、自治体の案内を確認して段取りを先行させましょう。家電リサイクル法の対象品目は粗大ごみに出せないのが一般的なので、処分ルートを混同しないよう注意が必要です。",
  },
  {
    title: "使っていないエリアから仕分けを進める",
    body: "納戸・押し入れの奥・ベランダ・物置など、使用頻度の低いエリアから「持っていく・手放す・保留」の3つに分けます。保留箱は1〜2箱までと上限を決め、迷った物を無限に増やさないのがコツです。思い出の品は判断に時間がかかるため、時間に余裕のある時期に回します。",
  },
  {
    title: "手放す物を売る・譲る・捨てるに振り分ける",
    body: "状態のよい物はリサイクルショップやフリマアプリ、知人への譲渡を検討し、それ以外は自治体のルールに沿って処分します。売却は値段が付くまで時間がかかることがあるため、「引っ越し1週間前までに売れなければ処分に切り替える」と期限を切っておくと、荷物が宙に浮きません。処分ルートの選び方は不用品の処分ルート比較の記事で詳しく解説しています。",
  },
  {
    title: "前日までに「運ぶ物だけ」の状態に仕上げる",
    body: "梱包が進んだら、残っている物が「すべて新居に持っていく物」になっているかを最終確認します。当日にごみや不要品が残っていると、引っ越し作業と処分が同時進行になり大きく混乱します。収集日に出しきれなかった物が残った場合は、自治体の案内に沿った方法か、許可を確認できる業者への依頼を検討しましょう。",
  },
];

const ngActions = [
  {
    title: "直前の週末にまとめてやろうとする",
    body: "断捨離と梱包を同じ週末に詰め込むと、判断が雑になり「とりあえず全部箱へ」となりがちです。結果として不要な物まで新居に運び込み、荷ほどきの負担も増えます。仕分けは遅くとも2〜3週間前から少しずつ始めましょう。",
  },
  {
    title: "粗大ごみの申し込みを後回しにする",
    body: "自治体の粗大ごみ収集は、申し込みから収集まで日数がかかる場合があり、引っ越し繁忙期は特に余裕を持った段取りが必要です。退去日までに収集が間に合わないと、残置物の扱いに困ることになります。大型の物は最初に段取りを確認するのが鉄則です。",
  },
  {
    title: "「新居で考えよう」と判断を先送りする",
    body: "迷った物を全部持っていくと、運搬の手間が増えるだけでなく、新居でも開かずの段ボールになりがちです。引っ越しは全持ち物に触れる貴重な機会なので、この機会に判断まで済ませるほうが結果的に楽になります。保留は上限を決めて最小限に。",
  },
  {
    title: "巡回トラックなど無許可のおそれがある回収業者に頼む",
    body: "拡声器で巡回するトラックやチラシの業者の中には、廃棄物の処理に必要な許可を確認できないものがあり、料金トラブルや不法投棄につながるおそれがあります。急いでいるときほど注意が必要です。業者に頼む場合は、許可や実績を確認できるところを選びましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "退去日まで時間がなく、自治体の収集では間に合わない",
  "大型家具・家電が多く、自力での搬出が難しい",
  "仕分けから処分まで一括で任せて、引っ越し準備に集中したい",
  "実家からの引っ越しなど、物量が多く家族だけでは手に負えない",
  "エレベーターなし・階段のみなど搬出条件が厳しい",
];

const faqs = [
  {
    q: "引っ越し前の断捨離はいつから始めるべきですか？",
    a: "物量にもよりますが、遅くとも引っ越しの1か月前には大型の物の処分段取りを始め、2〜3週間前から本格的な仕分けに入るのが目安です。自治体の粗大ごみ収集は申し込みから収集日まで日数がかかる場合があるため、大型家具・家電の処分から逆算してスケジュールを組みましょう。",
  },
  {
    q: "断捨離で出た不用品はどう処分すればよいですか？",
    a: "状態のよい物はリサイクルショップ・フリマアプリ・譲渡で手放し、それ以外は自治体のルールに沿って処分するのが基本です。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトを確認してください。量が多い場合や期限が迫っている場合は、許可を確認できる不用品回収業者への依頼も選択肢になります。",
  },
  {
    q: "冷蔵庫や洗濯機は粗大ごみに出せますか？",
    a: "冷蔵庫・洗濯機・テレビ・エアコンなど家電リサイクル法の対象品目は、自治体の粗大ごみ収集には出せないのが一般的です。買い替え時の引き取りや指定引取場所への持ち込みなど、法律に沿ったルートで処分します。詳しくは家電リサイクル法対象品の処分方法の記事で解説しています。",
  },
  {
    q: "引っ越しと不用品処分をまとめて頼むことはできますか？",
    a: "不用品回収に対応する引っ越しプランを用意している事業者や、引っ越し前の片付け・不用品回収をまとめて請け負う業者があります。対応範囲や条件は業者ごとに異なるため、見積もり時に「何をどこまで引き取ってもらえるか」を必ず確認しましょう。業者選びの観点はランキングページと引っ越し前片付けサービスの解説を参考にしてください。",
  },
];

const related = [
  { href: "/service/hikkoshi/", label: "引っ越し前の片付けサービス", desc: "引っ越しに伴う片付けを業者に頼む場合の基礎知識" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない家具の搬出と処分の選択肢" },
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分", desc: "冷蔵庫・洗濯機などの正しい処分ルート" },
  { href: "/irui-seiri/", label: "衣類の整理と手放し方", desc: "増えすぎた服を仕分ける基準" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "退去期限までに片付け切る方法" },
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
    { "@type": "ListItem", position: 2, name: "引っ越し前の断捨離の段取り" },
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
    { href: "#riyuu", label: "1｜引っ越し前が断捨離の絶好のタイミングである理由" },
    { href: "#schedule", label: "2｜逆算スケジュールの立て方" },
    { href: "#steps", label: "3｜自力で進める引っ越し前断捨離の5ステップ" },
    { href: "#ng", label: "4｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "5｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "引っ越し前の断捨離の段取り" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          引っ越し前の断捨離の段取り｜いつから何を減らす？逆算スケジュールと手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「引っ越しを機に物を減らしたいけれど、いつから何をすればいいのか分からない」「気付いたら直前で、全部段ボールに詰めるしかなくなった」——引っ越し前の断捨離は、段取り次第で成果が大きく変わります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、引っ越し前が断捨離に向いている理由、退去日から逆算したスケジュールの立て方、自力で進める5つのステップ、やりがちな失敗、業者に頼るべきサインまでを解説します。初めての引っ越しの方にも、荷物の多さに悩んでいる方にも役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>引っ越し前の断捨離は遅くとも1か月前から。大型の物の処分段取りを最初に確認する</li>
          <li>「新居の収納に入る分だけ残す」と基準を決めると、判断がぶれにくい</li>
          <li>仕分けは使っていないエリアから始め、日用品は直前、保留は上限を決める</li>
          <li>自治体の粗大ごみ収集は日数がかかる場合があるため、申し込み方法を早めに自治体公式サイトで確認する</li>
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

      <H2 id="riyuu" num="1">引っ越し前が断捨離の絶好のタイミングである理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜ「引っ越し前」が持ち物を見直す好機なのかを整理します。理由が腑に落ちると、面倒な仕分けにも前向きに取り組みやすくなります。
      </p>
      <div className="space-y-6 mb-4">
        {reasons.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="schedule" num="2">逆算スケジュールの立て方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        引っ越し前の断捨離は「退去日から逆算」して組み立てます。ポイントは、処分に日数がかかる物ほど早く動くことです。目安となる時期別のやることは次の通りです。
      </p>
      <div className="space-y-4 mb-4">
        {schedule.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        賃貸からの引っ越しで退去期限が迫っている場合は、<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付けの段取り</Link>の記事もあわせて参考にしてください。
      </p>

      <H2 id="steps" num="3">自力で進める引っ越し前断捨離の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。合言葉は「大型が先、日用品はあと、保留は上限付き」です。
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
        不用品の手放し先の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で、自治体の粗大ごみ収集の使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>で解説しています。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
      </p>

      <H2 id="ng" num="4">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        回収業者とのトラブルを避けるためのチェックポイントは、<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>の記事にまとめています。
      </p>

      <H2 id="gyousha" num="5">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力にこだわらず、不用品回収・片付け業者への相談を検討しましょう。引っ越し準備と処分を分業できると、時間の見通しが立てやすくなります。
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
        お住まいの地域から依頼できる業者は、<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪</Link>・<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋</Link>など各エリアページで紹介しています。
      </p>

      <H2 id="faq" num="6">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="7">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。粗大ごみの出し方・料金・対象品目、収集の申し込み方法は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。業者への依頼費用は物量・間取り・搬出条件により異なります。
      </p>
    </article>
  );
}
