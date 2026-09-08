import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/dokuritsu-go-kodomobeya/";
const TITLE = "独立後の子ども部屋の整理｜本人の荷物の扱いと部屋の使い直し";
const DESC =
  "子どもが家を出たあと、部屋がそのまま残っているという家庭は少なくありません。本人の荷物を勝手に処分しない理由、離れて暮らす本人と判断を進める方法、残す物と送る物の分け方、部屋を使い直すときの順番を、親側・本人側の両方の視点から解説します。";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "持ち主と、住んでいる人が違う",
    body: "部屋にある物の持ち主は独立した本人で、その部屋を使っているのは親、という状態が生まれます。親は勝手に処分できず、本人は日常的にその部屋を見ないため片付けの必要を感じにくい。この食い違いがあるかぎり、どちらからも作業が始まりません。まずは「誰が何を決めるのか」をはっきりさせることが、動き出すための条件になります。",
  },
  {
    title: "「いつか帰ってくるかもしれない」で保留になる",
    body: "帰省時に泊まる部屋として残しておきたい、いずれ戻るかもしれない、という気持ちから、手を付けないまま置かれることがあります。それ自体は自然な判断ですが、期限がないまま保留にすると、物は増えも減りもしないまま年数だけが過ぎます。使い方を決めるか、決めない期間の上限を決めるか、どちらかを選ぶと前に進みます。",
  },
  {
    title: "捨てにくい物が集中している",
    body: "教科書やノート、部活の道具、賞状やアルバム、手紙。子ども部屋には、思い出と結び付いた物が集まっています。判断には本人の気持ちが関わるため、親が代わりに決めるのは難しく、量の割に時間がかかります。だからこそ、まとめて処分しようとせず、種類ごとに分けて進めるほうが結果的に早く終わります。",
  },
];

const merits = [
  {
    title: "誰が決めるか：本人の物は本人が決めるのが原則",
    body: "本人の荷物については、本人が判断するのが原則です。親が代わりに決めると、たとえ結果が同じでも、あとから不満が残ります。ただし、本人が離れていて時間を取れない場合もあるため、「この範囲は任せてもらう」「この種類だけは確認する」といった線引きを、先に話し合って決めておくと進めやすくなります。",
  },
  {
    title: "いつまでにやるか：帰省など機会に合わせて期限を置く",
    body: "離れて暮らしていると、判断のための時間を確保するのが難しくなります。帰省や連休など、本人が家にいる機会に合わせて「この日に一時間だけ見る」と決めると、動き出しやすくなります。期限がないまま「今度やる」と言い合っていると、何年も同じ状態が続きます。日付を先に決めることが、いちばんの前進です。",
  },
  {
    title: "部屋をどう使うか：使い道を決めると範囲が決まる",
    body: "片付けたあとの部屋をどう使うかを先に決めると、どこまで片付ければよいかが決まります。客間にするのか、収納として使うのか、そのまま帰省時の部屋として残すのか。使い道が決まっていないと、片付けの終わりも決まらず、途中で止まりやすくなります。家族で先に話しておきましょう。",
  },
];

const steps = [
  {
    title: "片付けたあとの部屋の使い道を家族で決める",
    body: "客間にする、収納として使う、帰省時の部屋として残すなど、使い道を先に決めます。使い道が決まると、どこまで空ければよいかが決まり、片付けの終わりが見えます。本人が帰省時に使う前提なら、寝具と最低限の荷物を残す、というように条件を具体的にしておきましょう。",
  },
  {
    title: "持ち主ごと・種類ごとに分けて全体量をつかむ",
    body: "部屋にある物を、本人の物、家族共有の物、すでに家の物になっている物に分けます。そのうえで、本人の物を、衣類、書籍・教科書、思い出の品、道具類のように種類ごとにまとめます。写真を撮っておくと、離れている本人に確認するときの資料になります。この段階では処分の判断をしません。",
  },
  {
    title: "写真を送って「送る・残す・手放す」を選んでもらう",
    body: "範囲を区切って写真を送り、三つのどれかを選んでもらいます。まとめて全部を尋ねると返事が滞るため、一度に送る量は絞ります。返事がない物は保留として残し、次の機会に回します。帰省の予定があるなら、「この箱だけは帰ったときに見る」と決めておくのも有効です。",
  },
  {
    title: "送る物から先に動かし、部屋の物量を減らす",
    body: "本人の手元に送る物が決まったら、先に発送してしまいます。判断が済んだ物を部屋に置いたままにすると、片付いた実感が出ず、作業が止まります。送る物、手放す物、残す物を別々の場所にまとめ、順に処理していきましょう。大きい物の扱いは、運び出しの手段も含めて先に決めておきます。",
  },
  {
    title: "空いた空間の使い方を決めて、物が戻らない形にする",
    body: "空いた部屋をどう使うかを実行に移します。使い道を決めずに空けたままにすると、家の他の場所から物が流れ込み、数年後には別の物置になります。棚や収納を置く場合も、「ここに入る分まで」と上限を決めておくと、増え方を抑えられます。",
  },
];

const ngActions = [
  {
    title: "本人に確認せずに、まとめて処分してしまう",
    body: "「どうせ使っていない」という判断で処分すると、本人にとって大切だった物が含まれていた場合、取り返しが付きません。物そのものより、勝手に決められたという事実が関係に残ります。時間がかかっても、範囲を区切って確認を取る形にしてください。連絡が取りにくい場合も、まず期限を伝えて相談するところから始めましょう。",
  },
  {
    title: "「いつか使うかも」で、期限を決めずに保留し続ける",
    body: "帰省時に使うかもしれない、いずれ戻るかもしれない、という理由で保留にすること自体は自然です。ただし期限がないと、状態は何年も変わりません。「次の帰省までに決める」「一年後に見直す」と期限を置くだけで、判断のきっかけが生まれます。保留の期間を決めることも、立派な決定です。",
  },
  {
    title: "空けた部屋を、使い道を決めないまま放置する",
    body: "せっかく空けた部屋に使い道がないと、家の他の場所から物が流れ込み、別の物置になります。片付けの前に使い道を決めておくこと、片付けたあとに実際に使い始めることの二つが、元に戻さないための条件です。すぐに使わない場合でも、「何を置かない部屋にするか」だけは決めておきましょう。",
  },
  {
    title: "思い出の品を、その場の勢いで一気に決めようとする",
    body: "アルバムや手紙、作品のような物は、判断に時間がかかります。疲れているときにまとめて決めようとすると、あとで後悔する選択をしがちです。思い出の品は最後に回し、体力と時間に余裕のあるときに向き合ってください。デジタル化を組み合わせると、残しながら量を減らせる場合もあります。",
  },
];

const judgeSigns = [
  "学習机やベッドなど、自分たちでは運び出せない家具が残っている",
  "部屋が複数あり、家全体としての物量が多い",
  "親も本人も遠方にいて、現地で作業できる回数が少ない",
  "売却や引き渡しの期限があり、日程に余裕がない",
  "体力の面で、運び出しや長時間の作業が難しい",
];

const faqs = [
  {
    q: "本人が「あとで見る」と言ったまま、何年も進みません。",
    a: "期限がないと状態は変わりません。「次の帰省のときに、この箱だけ見てほしい」というように、範囲と日付を絞って伝えると動き出しやすくなります。あわせて、部屋をどう使いたいのかという目的を伝えると、本人も判断の必要性を理解しやすくなります。返事のない物は保留として残し、次の機会に回しましょう。",
  },
  {
    q: "学習机やベッドはどう処分すればよいですか？",
    a: "大型の家具は、自治体の粗大ごみとして申し込む方法のほか、状態がよければ買取や譲渡の対象になることもあります。分別の区分や粗大ごみの対象になるかは自治体によって異なるため、公式案内で確認してください。運び出しが難しい場合は、搬出を含めて事業者に依頼する方法もあります。",
  },
  {
    q: "教科書やノートは処分してよいですか？",
    a: "本人の物である以上、判断は本人に確認するのが原則です。そのうえで、資格や仕事で使う予定があるか、記録として残したいかを聞くと決めやすくなります。処分する場合、紙類の出し方や資源としての区分は自治体によって異なりますので、分別案内を確認してください。個人情報が書かれた物は、扱いに注意しましょう。",
  },
  {
    q: "実家に荷物を置いている側です。どう進めればよいですか？",
    a: "まず、絶対に残しておきたい物を先に伝えると、親も他の部分を進めやすくなります。そのうえで、写真を送ってもらって判断する、帰省時に一時間だけ集中して見る、といった形で範囲を区切ると進みます。手元に置きたい物は送ってもらうか持ち帰り、実家に残す量を少しずつ減らしていくのが現実的です。",
  },
];

const related = [
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めない段取り" },
  { href: "/kodomo-sakuhin-seiri/", label: "子どもの作品の整理", desc: "残す基準とデジタル化" },
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理", desc: "残す基準と原本の扱い" },
  { href: "/oshiire-closet-seiri/", label: "押し入れ・クローゼットの整理", desc: "全部出すから戻すまで" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "学習机・ベッドの手放し方" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "空いた部屋を保つ仕組み" },
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
    { "@type": "ListItem", position: 2, name: "独立後の子ども部屋の整理" },
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
    { href: "#kiso", label: "1｜独立後の子ども部屋が手つかずになる理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜離れて暮らす本人と、判断を進める方法" },
    { href: "#steps", label: "4｜子ども部屋を整理する5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "独立後の子ども部屋の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          独立後の子ども部屋の整理｜本人の荷物の扱いと部屋の使い直し
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月2日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          子どもが進学や就職で家を出てから何年も経つのに、部屋は当時のまま。教科書や部活の道具、卒業アルバム、着ていた服が残っていて、片付けたい気持ちはあるものの、本人の物なので勝手に触れない——こうした状態のまま時間が過ぎている家庭は珍しくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、独立後の子ども部屋が手つかずになりやすい理由、本人の荷物を扱うときの原則、離れて暮らす本人と判断を進める方法、残す物・送る物・手放す物の分け方、そして部屋を使い直すときの順番を整理します。親の立場からも、実家に荷物を置いたままの本人の立場からも読める内容としてまとめました。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>本人の荷物は本人の物。勝手に処分すると、あとの関係にしこりが残る</li>
          <li>写真を送って選んでもらう形にすると、離れていても判断が進む</li>
          <li>「送る・残す・手放す」の三つに分け、送る物から先に動かす</li>
          <li>部屋の使い道を先に決めると、片付けの範囲と終わりが決まる</li>
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

      <H2 id="kiso" num="1">独立後の子ども部屋が手つかずになる理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        止まっている原因は、量ではなく「決められない立場の重なり」にあります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">始める前に決めておきたい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        誰が決めるか、いつまでにやるか、部屋をどう使うか。この三つを先に共有します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">離れて暮らす本人と、判断を進める方法</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        本人が遠方にいる場合でも、判断を進める方法はあります。基本は、親が現地で物を写真に撮り、本人に送って選んでもらう形です。棚一段、箱一つのように範囲を区切って撮ると、本人も判断しやすくなります。「これは要る？」という聞き方より、「送る・残す・手放す」のどれかを選んでもらう形にすると、返事が返ってきやすくなります。返事のない物は保留として残し、次の機会に回します。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        本人の側から見ると、実家に荷物を置いたままにしていることに引け目を感じている場合もあります。責める形ではなく、「部屋をこう使いたいので、いつまでにこの範囲を決めてほしい」と、目的と期限を伝えるほうが動きやすくなります。反対に、本人が「捨てないでほしい」と考えている物があるなら、それを先に伝えてもらうと、親も安心して他の部分を進められます。家族との進め方は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">片付けの声かけと対話の進め方</Link>も参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        判断を求める物の中には、写真やアルバム、作品のように、そのままでは量が減らせない物もあります。これらはデジタル化を組み合わせると、残しながら量を減らせます。写真の整理は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理とデジタル化</Link>、子どもの作品の扱いは<Link href="/kodomo-sakuhin-seiri/" className="text-primary underline underline-offset-2">子どもの作品・思い出の品の整理</Link>、収納の見直し方は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理手順</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">子ども部屋を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        使い道を決める→種類ごとに分ける→本人に確認する→送る物から動かす→残った空間を使い直す。この順で進めます。
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
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 mb-4">
        <h3 className="font-bold text-text-primary mb-2">本人の持ち物の扱いには、事前の合意が必要です</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          部屋にある物の持ち主が独立した本人である場合、その物をどう扱うかは本人の意思にもとづくのが原則です。連絡が取れない、判断が返ってこないといった事情があっても、勝手に処分すると、あとから関係のこじれにつながることがあります。まずは、どの範囲を任せてもらうのか、いつまでに判断してもらうのかを話し合い、可能であれば形に残る方法で共有しておいてください。処分する場合の分別区分や粗大ごみの扱いは自治体によって異なりますので、お住まいの市区町村の公式案内をご確認ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        子ども部屋の整理をきっかけに、家全体の見直しに進む家庭も多くあります。次に取りかかりやすいのは、押し入れや納戸のように、家族の物が混ざっている収納です。実家全体の整理の進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、将来に備えた整理の考え方は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>、片付いた状態を保つ工夫は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>で解説しています。
      </p>

      <H2 id="ng" num="5">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。買取を伴う依頼では、古物の取り扱いに関する許可もあわせて確認します。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>で整理しています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
      </p>
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
        本記事は一般的な知識の提供を目的としたものです。家具・紙類・寝具などの分別区分、粗大ごみの対象となるかどうか、出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。買取の可否・金額は品物の状態や時期、各店の方針により異なります。他の家族の所有物の取り扱いについては、事前に本人の意思を確認して進めてください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
