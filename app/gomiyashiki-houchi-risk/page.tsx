import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/gomiyashiki-houchi-risk/";
const TITLE = "ゴミ屋敷を放置するとどうなる？火災・健康・住環境のリスクと抜け出し方";
const DESC =
  "ゴミ屋敷状態の部屋を放置した場合に起こり得る火災・健康・建物・生活面のリスクを具体的に解説します。リスクが進行する順序、今日からできる最小限のリスク低減策5ステップ、状況を悪化させるNG行動、自力での片付けが難しくなっているサインと業者・相談窓口の使い方まで、当事者と家族の両方に向けて整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "リスクは「ある日突然」ではなく段階的に進行する",
    body: "ゴミ屋敷状態のリスクは、物がたまった瞬間に一気に生じるわけではなく、「床が見えなくなる」「水回りが使えなくなる」「臭い・虫が発生する」「屋外へ影響が広がる」という段階を追って深刻化していきます。裏を返せば、どの段階であっても、そこで手を打てば進行は止められるということです。今がどの段階かを知ることが、リスク対策の第一歩になります。自分の部屋の状態を判定したい方は汚部屋レベルチェックの記事をご覧ください。",
  },
  {
    title: "放置で困るのは本人だけではなくなっていく",
    body: "初期の散らかりは本人の生活の問題ですが、進行すると臭気・害虫・火災リスクという形で隣室や近隣へ影響が広がり、賃貸であれば契約上の問題、持ち家であれば近隣関係や行政対応の問題へと発展していきます。「自分の部屋のことだから」と抱え込んでいた問題が、ある段階から自分だけでは閉じられない問題に変わる——これがゴミ屋敷放置の見えにくい怖さです。",
  },
  {
    title: "放置の背景には片付けられない事情があることが多い",
    body: "長期間の放置は、怠けの結果というより、心身の不調、多忙、孤立、喪失体験など、片付けに向かえない事情が続いた結果であることがほとんどです。だからこそ「意志の力で全部片付ける」という精神論は解決策になりません。リスクを下げる最小限の行動から始め、必要に応じて人の手や制度を借りることが現実的な道筋です。背景については片付けられない心理と対処の記事で詳しく解説しています。",
  },
];

const risks = [
  {
    title: "火災リスク：燃えやすい物の密集と逃げ道の消失",
    body: "紙類や衣類、ほこりが密集した部屋は、コンセント周りにたまったほこりから発火するトラッキング現象や、暖房器具・調理時の引火が起きやすい環境です。しかも一度出火すると燃え広がりが速く、物で通路がふさがれているため避難も消火活動も困難になります。火災は本人の命に関わるだけでなく、隣家を巻き込む、ゴミ屋敷放置の中で最も重大なリスクです。",
  },
  {
    title: "健康リスク：害虫・カビ・ほこり・転倒",
    body: "生ごみや飲み残しはゴキブリやハエ、ねずみの発生源になり、ふん尿や死骸はアレルギーや感染症のリスク要因になります。湿気がこもった部屋ではカビが広がり、呼吸器への影響が懸念されます。また、床の物につまずく転倒や、積み上がった物の崩落によるけがは、特に高齢者にとって深刻です。物量が多い部屋は夏場の熱中症リスクも高まりやすく、健康への影響は多方面に及びます。",
  },
  {
    title: "建物・お金・生活のリスク：資産価値と信頼の毀損",
    body: "水分や重量物の長期放置は床材や壁を傷め、臭気は建材に染み込んで原状回復の負担を増やします。賃貸では契約違反や退去を求められる事態、持ち家では資産価値の低下につながりかねません。さらに、人を呼べない、修理業者を入れられない、水道や電気の点検を断り続ける、といった形で生活の選択肢が狭まり、孤立が深まる悪循環も生まれます。放置期間が長いほど、あらゆる意味で回復のコストが大きくなります。",
  },
];

const steps = [
  {
    title: "火の元と電源まわりの安全を最初に確保する",
    body: "全体の片付けの前に、まず火災リスクだけを下げます。コンセントとプラグの周りの物とほこりを取り除く、暖房器具・コンロの周囲に物を置かない、使っていないプラグを抜く、タバコを吸う場合は吸い殻の管理を徹底する。この1点だけでも、最悪の事態の確率を下げられます。今日、数十分でできる最優先の行動です。",
  },
  {
    title: "生ごみ・飲食物の残りだけを集めて捨てる",
    body: "次に、害虫と臭いの発生源である生ごみ・食べ残し・飲み残し・弁当容器だけを狙って袋に集め、収集日に出します。物全体を減らすのはまだ先で構いません。腐敗する物さえ部屋から出れば、害虫の増加と臭気の進行は大きく抑えられます。ごみの分別・収集日は自治体により異なるため、お住まいの市区町村の案内を確認してください。",
  },
  {
    title: "玄関から室内への「通り道」を1本確保する",
    body: "玄関からベッド・水回りまでの動線を、物を左右に寄せて1本通します。通り道は避難経路であると同時に、片付けを進めるための作業路にもなります。床が一筋でも見えると、部屋の印象と気持ちが変わることを実感できるはずです。全体を片付ける順番は部屋を片付ける順番の記事で解説しています。",
  },
  {
    title: "水回り(トイレ・風呂・キッチン)を使える状態に戻す",
    body: "水回りが物でふさがると、生活の質が急落し、衛生状態の悪化も加速します。トイレ・風呂・キッチンのうち、使えなくなっているものがあれば優先的に物をどかし、最低限使える状態を取り戻しましょう。排水の詰まりや設備の故障が見つかった場合は、放置せず修理の手配を。ここまでできれば、生活の土台は守られます。",
  },
  {
    title: "一人で続かないと感じたら、人と制度を頼る計画に切り替える",
    body: "ステップ1〜4を試みて手が止まる、あるいは物量が多すぎて進まない場合は、自力完結にこだわらず、信頼できる家族・友人に手伝いを頼む、片付け業者に見積もりを取る、心身の不調が背景にあるなら自治体の福祉窓口や(高齢の家族の場合)地域包括支援センターに相談する、という選択肢に切り替えましょう。頼ることは失敗ではなく、リスクを止める確実な手段です。",
  },
];

const ngActions = [
  {
    title: "「いつかまとめてやる」と先送りを続ける",
    body: "ゴミ屋敷状態は、時間が経つほど物量・汚れ・心理的ハードルのすべてが増える、放置に利息が付く問題です。「連休に一気にやる」という計画は、当日の心身の負担が大きすぎて実行されないことがほとんどです。完璧な計画より、今日の30分。火の元の確保や生ごみの袋詰めなど、最小の一歩を先に打つことが進行を止めます。",
  },
  {
    title: "臭いや虫を消臭剤・殺虫剤だけでしのぐ",
    body: "発生源である腐敗物やたまった水分を残したまま、消臭剤や殺虫剤で症状だけ抑えても、臭いと虫は必ず再発します。むしろ「対処した気持ち」になることで根本の放置が長引く面もあります。臭い・虫への対応は発生源の除去が原則です。詳しくは部屋の臭いが消えないときの対処と害虫が発生した部屋の清掃の記事を参考にしてください。",
  },
  {
    title: "家族が本人に無断で処分・通報などの強行策を取る",
    body: "家族の部屋がゴミ屋敷状態のとき、見かねて無断で処分を進めるのは、本人との信頼関係を壊し、その後の協力を得られなくする典型的な失敗です。責めるのではなく、本人の体調や気持ちを気にかけながら、小さな範囲の片付けを一緒に行うところから始めましょう。実家・家族のケースは実家の片付けの進め方の記事が参考になります。",
  },
  {
    title: "無許可の格安回収業者に一括で頼んでしまう",
    body: "物量が多いほど「無料回収」「格安」の宣伝は魅力的に見えますが、廃棄物処理の許可を確認できない業者への依頼は、高額請求や不法投棄などのトラブルにつながるおそれがあります。まとまった量の処分は、会社情報・許可・実績を確認できる業者から複数の見積もりを取って選んでください。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "床がほぼ見えず、生ごみや水分を含む物が層になっている",
  "臭い・害虫がすでに発生し、隣室や近隣への影響が心配される",
  "水回りが使えない状態が続いている",
  "自力の片付けを何度か試みたが、途中で止まってしまう",
  "退去や点検などの期限があり、短期間で状態を回復する必要がある",
];

const faqs = [
  {
    q: "ゴミ屋敷を放置すると法律や条例で罰せられますか？",
    a: "自治体によっては、いわゆるゴミ屋敷対策の条例を設け、生活環境に深刻な影響がある場合に調査・指導・支援などを行う仕組みを持つところがあります。枠組みや運用は地域により異なるため一概には言えませんが、行政対応の多くは処罰より本人への働きかけと支援から始まります。詳しくはお住まいの自治体の公式サイトで確認してください。",
  },
  {
    q: "どのレベルから業者に頼むべきですか？",
    a: "明確な境界はありませんが、「床がほぼ見えない」「生ごみ・水分を含む層がある」「臭い・虫が発生している」のいずれかに達していると、自力での回復は時間的にも心理的にも難しくなります。自力を試して止まった経験が複数回あるなら、それ自体が業者依頼のサインです。費用は物量・間取り・状態により大きく異なるため、複数社の見積もり比較で判断してください。",
  },
  {
    q: "片付ける気力がわきません。それでもできることはありますか？",
    a: "あります。この記事のステップ1〜2(火の元の安全確保と生ごみの袋詰め)は、部屋全体を片付ける気力がなくても、数十分で実行できてリスクを大きく下げる行動です。また、気力が長期間わかない状態の背景に心身の不調がある場合は、自治体の福祉窓口などに相談する選択肢もあります。片付けそのものを業者に任せ、自分は判断だけに集中する方法も現実的です。",
  },
  {
    q: "家族の家がゴミ屋敷状態です。本人が片付けを拒否したら？",
    a: "無断での処分や強い叱責は逆効果になりやすいため、まず本人の健康や生活の困りごとを気にかける会話から始め、「玄関だけ」「冷蔵庫だけ」など小さな範囲の合意を取ることを目指しましょう。本人が高齢の場合は、家族から地域包括支援センターに相談し、見守りや支援につなげる方法もあります。時間はかかりますが、本人の同意を積み重ねる進め方が結局は最短です。",
  },
];

const related = [
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷になる原因と進行段階", desc: "なぜ部屋がそうなるのかを理解する" },
  { href: "/oheya-checklist/", label: "汚部屋レベルチェック", desc: "自室の状態を客観的に判定する" },
  { href: "/katazukerarenai-shinri/", label: "片付けられない心理と対処", desc: "片付けが続かない要因への向き合い方" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃", desc: "虫が出た部屋の安全な清掃手順" },
  { href: "/kinjo-gomiyashiki-soudan/", label: "近所のゴミ屋敷の相談先", desc: "近隣の立場で困ったときの窓口" },
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷清掃業者の選び方", desc: "専門業者に頼む場合の選び方" },
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
    { "@type": "ListItem", position: 2, name: "ゴミ屋敷を放置するリスク" },
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
    { href: "#kiso", label: "1｜リスクを考える前に押さえたい3つの前提" },
    { href: "#risk", label: "2｜放置で起こり得る3つのリスク" },
    { href: "#houshin", label: "3｜リスクを止めるための全体方針" },
    { href: "#steps", label: "4｜今日からできるリスク低減の5ステップ" },
    { href: "#ng", label: "5｜状況を悪化させるNG行動4つ" },
    { href: "#gyousha", label: "6｜業者・相談窓口を頼るべきサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "ゴミ屋敷を放置するリスク" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ゴミ屋敷を放置するとどうなる？火災・健康・住環境のリスクと抜け出し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「片付けなければとは思っているが、何年もこのままになっている」「家族の家がゴミ屋敷状態のまま、時間だけが過ぎていく」——放置が続くと何が起こるのかを正確に知ることは、責めるためではなく、どこから手を打つかを決めるために必要です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ゴミ屋敷状態を放置した場合に起こり得る火災・健康・建物・生活面のリスクと、その進行を今日から止めるための最小限の行動、そして自力では難しい段階に来ているサインと頼り先までを解説します。当事者の方にも、家族として心配している方にも役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>最重大のリスクは火災。コンセント・暖房まわりの物とほこりの除去だけでも今日行う価値がある</li>
          <li>健康リスク(害虫・カビ・転倒)は生ごみなど腐敗物の除去で大きく抑えられる</li>
          <li>放置期間が長いほど回復コストが増える。「全部やる」ではなく最小の一歩で進行を止める</li>
          <li>床が見えない・臭いや虫が出ている段階なら、業者や相談窓口を頼るのが現実的</li>
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

      <H2 id="kiso" num="1">リスクを考える前に押さえたい3つの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        リスクの羅列は、ともすれば不安をあおるだけになります。まず、状況を正しく捉えるための前提を3つ共有します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="risk" num="2">放置で起こり得る3つのリスク</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ゴミ屋敷状態の放置で懸念されるリスクは、大きく「火災」「健康」「建物・お金・生活」の3系統に整理できます。
      </p>
      <div className="space-y-4 mb-4">
        {risks.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">リスクを止めるための全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「部屋を綺麗にする」ことではなく「リスクの高い順に潰す」ことです。見た目の改善を目標にすると作業量に圧倒されますが、火の元・腐敗物・避難路・水回りという4つの急所に絞れば、少ない労力で最悪の事態の確率を大きく下げられます。全体の片付けは、その後に取り組めば十分です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        部屋がこの状態に至った経緯を理解しておくことも、再発を防ぐうえで重要です。<Link href="/gomiyashiki-genin/" className="text-primary underline underline-offset-2">ゴミ屋敷になる原因と進行段階</Link>の記事とあわせてお読みください。
      </p>

      <H2 id="steps" num="4">今日からできるリスク低減の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、リスクの高い順に手を打つ具体的な手順です。ポイントは「綺麗にするのではなく、危険を減らす」。1つ実行するだけでも意味があります。
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

      <H2 id="ng" num="5">状況を悪化させるNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者・相談窓口を頼るべきサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自力での回復にこだわらず、ゴミ屋敷清掃に対応する業者への相談を検討しましょう。心身の不調が背景にある場合は、自治体の福祉窓口や(高齢の方の場合)地域包括支援センターという相談先もあります。業者選びは<Link href="/review/gomiyashiki-partners/" className="text-primary underline underline-offset-2">ゴミ屋敷専門パートナーズの口コミ・評判</Link>や<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などの記事も参考にしてください。
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

      <H2 id="faq" num="7">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="8">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。ごみの分別・収集ルールや、ゴミ屋敷に関する条例・支援の枠組みは自治体により異なるため、お住まいの市区町村の公式サイトでご確認ください。業者に依頼する場合の費用は物量・間取り・状態により異なるため、複数社の見積もり比較をおすすめします。
      </p>
    </article>
  );
}
