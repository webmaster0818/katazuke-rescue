import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shugei-nuno-zairyo-seiri/";
const TITLE = "手芸・布・毛糸などの材料の整理｜「いつか作る」を見直して手放す基準と手順";
const DESC =
  "布のはぎれ、毛糸の残り、ビーズやボタン、作りかけの作品。手芸の材料は小さくてかさばらないように見えて、押し入れや引き出しをいつの間にか占領します。材料が増える理由、「いつか作る」を見直す基準、作りかけの物との向き合い方、布や糸の素材ごとの分別の考え方、譲る・寄付するという選択肢、実家や故人の手芸用品を整理する場合の進め方までを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "手芸の材料は「作品より先に増える」",
    body: "手芸は、作品を一つ作るたびに、余った布や糸、使い切らなかったボタンやビーズが残ります。さらに、気に入った柄の布や色の糸を見つけると、作る予定が決まっていなくても買っておきたくなります。材料は「作るための物」ですが、実際には作品の完成より材料の購入のほうが早く進むため、作品の数より材料の量が増え続けるのが普通です。これは手芸を楽しむ人に共通する構造で、だらしないからではありません。まず、この構造を認めたうえで整理を始めます。",
  },
  {
    title: "小さくて軽いから「場所を取っていない」と感じやすい",
    body: "布のはぎれや毛糸の玉、ボタンやビーズの小袋は、一つひとつは小さく軽いため、増えていることに気付きにくい品目です。しかし、袋や箱に小分けにされた材料は、引き出し一段、押し入れの一角、クローゼットの棚と、少しずつ場所を広げていきます。気付いたときには、「どこに何があるか分からないので同じ物をまた買う」という状態になり、さらに増えます。全部を一か所に出して量を目で確かめることが、整理の第一歩です。",
  },
  {
    title: "作りかけの作品は、材料以上に手放しにくい",
    body: "途中で止まっている編み物や縫い物は、そこまでかけた時間と、「いつか仕上げたい」という気持ちがあるため、材料よりも手放しにくい物です。一方で、作りかけのまま数年が過ぎている物は、続きを作る機会が来ないことが多いのも事実です。作りかけの物は、材料とは分けて「続きを作るか」「ほどいて材料に戻すか」「思い出として写真に残して手放すか」の三つで考えると、判断しやすくなります。",
  },
];

const merits = [
  {
    title: "決めごと1：材料を置いてよい「上限の場所」を決める",
    body: "手芸の材料は、置き場所を決めないと家中に広がります。「この引き出し二段まで」「この収納ケース三つまで」のように、材料を置いてよい場所と量の上限を先に決めます。上限を決めておくと、残す物を選ぶ基準が「上限に収まるか」という具体的なものになり、「まだ使える」という理由だけで残す物が減ります。上限を超える分は、譲る、寄付する、手放すのいずれかで減らします。",
  },
  {
    title: "決めごと2：「一年以内に作る予定があるか」で分ける",
    body: "材料を残すかどうかは、「この一年以内に作る予定が具体的にあるか」を基準にします。作る物、使う材料、いつ作るかが思い浮かぶ物は残し、「いつか何かに使えるかもしれない」という物は手放す候補にします。基準を厳しく感じるかもしれませんが、材料は今後も手に入るものがほとんどです。本当に必要になったときに改めて買うほうが、探す時間と保管の場所を考えると負担が小さいことが多いです。",
  },
  {
    title: "決めごと3：家族の物や故人の物は、本人の思いを一度受け止める",
    body: "実家の押し入れや故人の部屋に残された手芸の材料は、本人が長年集めた物であることが多く、整理する側の判断だけで手放すと後悔につながることがあります。本人が元気なら一緒に見ながら進め、故人の物であれば、一部を形見として残す、作品として仕上げてもらえる人に託すなど、気持ちの整理を含めて進めます。急いで決めなくてよいので、まずは全体の量を確かめるところから始めてください。",
  },
];

const steps = [
  {
    title: "手芸の材料と道具を、家中から一か所に集める",
    body: "布、毛糸、刺しゅう糸、ボタン、ビーズ、リボン、レース、型紙、手芸の本、針や糸切りばさみ、編み針やかぎ針、ミシンの付属品など、手芸に関わる物を家中から集めます。引き出し、押し入れ、クローゼット、リビングの棚、かばんの中など、分散している物をすべて出すのがポイントです。量が多い場合は、「布」「糸」「小物」「道具」「作りかけ」と大まかに分けながら出すと、次の作業が早くなります。全体の量を目で確かめると、残す基準が現実的になります。",
  },
  {
    title: "「作る予定がある」「保留」「手放す」の3つに分ける",
    body: "集めた材料を、一年以内に作る予定が具体的にある物、迷う物、使わない物の3つに分けます。色あせや虫食い、においがある布や糸、固まった接着剤、さびた針や金具は使えないので「手放す」に入れます。小さすぎるはぎれや、量が少なくて一つの作品にならない糸も、使う予定がなければ手放す候補です。「保留」は箱一つ分までと決め、期限を付けて置いておき、期限が来ても使わなければ手放します。",
  },
  {
    title: "作りかけの作品は、続ける・戻す・写真に残すのいずれかを選ぶ",
    body: "作りかけの編み物や縫い物は、材料とは分けて判断します。続きを作ると決めた物は、必要な材料と道具を一緒にまとめて、すぐ手に取れる場所に置きます。続ける予定がない物は、ほどいて糸や布に戻せるかを確認し、戻せない物や戻す手間が見合わない物は、写真を撮って記録に残してから手放します。長く止まっている作品を手放すのは、失敗ではなく、次に作る物のための場所を空けることだと考えてください。",
  },
  {
    title: "手放す物は、譲る・寄付する・分別して出すに分ける",
    body: "状態のよい布や糸、未使用の材料は、手芸をする知人、地域の手芸サークル、材料の寄付を受け付けている団体などに譲れることがあります。受け入れの条件は団体によって異なるため、事前に確認してください。譲れない物は、布や糸は繊維、ボタンやビーズは素材ごと、針や刃物は危険物として、自治体の分別区分に従って出します。区分は自治体によって異なりますので、お住まいの市区町村の分別案内で確認してください。",
  },
  {
    title: "残す材料を種類別にまとめ、上限の場所に収める",
    body: "残すと決めた材料は、「布」「糸」「小物」「道具」「作りかけ」のように種類別にまとめ、最初に決めた上限の場所に収めます。中身が見える容器や、ラベルを付けた箱を使うと、次に探すときに同じ物を買い足すことが減ります。新しく材料を買うときは、「作る物が決まっているか」「同じ物を持っていないか」を確認する習慣にすると、増える速度が落ちます。片付けたあとに収納を買い足したくなっても、材料が減ってから考えるようにします。",
  },
];

const ngActions = [
  {
    title: "「まだ使える」という理由だけで、すべてを残す",
    body: "手芸の材料は、劣化していなければ「まだ使える」物がほとんどです。この基準で残すと、結局は何も減りません。「使えるか」ではなく「一年以内に作る予定があるか」で判断し、予定のない物は手放す候補にします。材料は今後も手に入る物が多く、必要になったときに改めて買うほうが、保管の場所と探す時間を考えると負担が小さいことが多いです。",
  },
  {
    title: "作りかけの作品を、罪悪感から見ないままにする",
    body: "途中で止まった作品は、見るたびに「仕上げなければ」という気持ちになり、目に入らない場所にしまい込みがちです。しかし、見ないままにしても場所は取り続けます。続ける、ほどして材料に戻す、写真に残して手放す、のいずれかを選ぶことで、気持ちの負担も軽くなります。長く止まっている作品を手放すことは、失敗ではありません。",
  },
  {
    title: "針や裁ちばさみ、カッターを、他の材料と一緒に袋に入れて出す",
    body: "縫い針、まち針、裁ちばさみ、ロータリーカッターなどは、袋に混ぜて出すと収集する人や家族がけがをする危険があります。針は容器にまとめる、刃物は布や厚紙で包んで品目を明記するなど、出し方は自治体の指示に従ってください。整理の途中でも、針を床やカーペットに落とさないよう、針山や容器に集めながら進めてください。",
  },
  {
    title: "家族や故人の材料を、本人に確認せず一気に処分する",
    body: "実家や故人の手芸の材料は、本人が長年集めた物であることが多く、整理する側の判断だけで一気に手放すと、後で悔やむことがあります。本人が元気なら一緒に見ながら進め、故人の物であれば、形見として残す物を先に選ぶ、作品にしてもらえる人に託すなど、気持ちの整理を含めて進めます。急がなくてよい物は、後回しにして構いません。",
  },
];

const judgeSigns = [
  "材料が押し入れやクローゼットの大部分を占め、家全体の片付けが必要になっている",
  "実家や故人の部屋に大量の手芸用品があり、遠方で作業できる時間が限られている",
  "ミシンや大きな作業台など、自分では運び出せない物がある",
  "布や糸に虫食いやカビが広がり、周囲の物にも影響が出ている",
  "体調や気持ちの面で、一人で向き合うのが難しい",
];

const faqs = [
  {
    q: "布や毛糸は、どう分別すればよいですか？",
    a: "布や糸の分別区分は自治体によって異なります。可燃ごみとして出せる場合、繊維の資源回収に出せる場合、大きさや素材で区分が分かれる場合があります。ボタンやビーズは素材ごと、針や刃物は危険物として扱いが決められていることが一般的です。まとめて出す前に、お住まいの市区町村の分別案内で確認してください。",
  },
  {
    q: "まだ使える材料を寄付したいのですが、どこに相談すればよいですか？",
    a: "手芸の材料の寄付を受け付けている団体、地域の手芸サークル、福祉施設などがありますが、受け入れの条件や品目は団体によって異なります。事前に受け入れの可否と条件を確認してから持ち込むようにしてください。状態のよい未使用の材料であれば、手芸をする知人に直接譲る方法もあります。",
  },
  {
    q: "作りかけの編み物は、ほどいてよいのでしょうか？",
    a: "続きを作る予定がないのであれば、ほどいて糸に戻す方法があります。ただし、糸の状態によっては戻す手間が見合わないこともあります。その場合は、写真を撮って記録に残してから手放しても構いません。作りかけの物を手放すことは失敗ではなく、次に作る物のための場所を空けることだと考えてください。",
  },
  {
    q: "亡くなった母の手芸用品が大量にあります。どこから手を付ければよいですか？",
    a: "まずは全体の量を確かめることから始め、急いで決めなくてよい物は後回しにして構いません。形見として残す物を先に選び、そのあとで譲れる物と手放す物を分けます。仕上げてもらえる人に作りかけの物を託す方法もあります。量が多く自分たちだけで進めるのが難しい場合は、遺品整理の進め方の記事や、業者への相談も検討してください。",
  },
];

const related = [
  { href: "/shumi-collection-seiri/", label: "趣味のコレクションの整理", desc: "集めた物を手放すときの考え方" },
  { href: "/irui-seiri/", label: "衣類の整理と処分", desc: "服を減らす基準と手放し方" },
  { href: "/oshiire-closet-seiri/", label: "押し入れ・クローゼットの整理", desc: "全部出すから戻すまでの手順" },
  { href: "/kodomo-sakuhin-seiri/", label: "子どもの作品の整理", desc: "残す物と写真に残す物の分け方" },
  { href: "/ihin-katamiwake-susumekata/", label: "遺品の形見分けの進め方", desc: "気持ちの整理と分け方" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "収納を増やすほど片付かない理由" },
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
    { "@type": "ListItem", position: 2, name: "手芸・布・毛糸などの材料の整理" },
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
    { href: "#kiso", label: "1｜手芸の材料が増え続ける3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「いつか作る」を見直すときの考え方" },
    { href: "#steps", label: "4｜手芸の材料を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "手芸・布・毛糸などの材料の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          手芸・布・毛糸などの材料の整理｜「いつか作る」を見直して手放す基準と手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          気に入って買った布のはぎれ、作品を編んだあとに残った毛糸、袋に小分けされたボタンやビーズ、数年前から止まったままの編みかけのセーター。手芸の材料は一つひとつが小さく軽いため、増えていることに気付きにくく、気付いたときには押し入れの一角や引き出しの何段かを占領しています。「まだ使える」「いつか作る」という理由で残しやすく、減らすのが難しい品目です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、手芸の材料が増え続ける理由、置いてよい量の上限を決める考え方、「一年以内に作る予定があるか」で残す物を選ぶ基準、作りかけの作品との向き合い方、譲る・寄付する・分別して出すという手放し方の選択肢、実家や故人の手芸用品を整理する場合の進め方を順に解説します。手芸を続ける人も、やめた人も、それぞれの状況に合わせて読み進めてください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>材料は作品より先に増える。「まだ使える」ではなく「一年以内に作る予定があるか」で判断する</li>
          <li>材料を置いてよい場所と量の上限を先に決め、超える分を減らす</li>
          <li>作りかけの物は「続ける・ほどいて戻す・写真に残して手放す」の三つから選ぶ</li>
          <li>針や刃物は自治体の指示に従って出す。布や糸の区分も自治体の分別案内で確認する</li>
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

      <H2 id="kiso" num="1">手芸の材料が増え続ける3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        手芸を楽しむ人の家で材料が増えるのは、この趣味の構造によるものです。理由を知ると、自分を責めずに整理を始められます。
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
        上限と基準を先に決めておくと、一つひとつの材料を前にして迷う時間が減ります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「いつか作る」を見直すときの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手芸の材料を減らすときに最も多い迷いは、「いつか作るかもしれない」という気持ちです。この気持ちは自然なものですが、「いつか」は具体的な予定ではありません。残すかどうかは、「何を作るか」「いつ作るか」「そのためにこの材料が必要か」の三つが言えるかどうかで判断します。三つとも言える材料は残し、一つでも言えない材料は手放す候補にします。手放す候補を最初から捨てる前提で考える必要はありません。譲る、寄付する、という選択肢を先に用意しておくと、「もったいない」という気持ちに折り合いを付けやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手芸をやめた、あるいは長く離れているという場合は、道具も含めて見直す機会です。今後も続ける見込みが薄いなら、材料と道具をまとめて手芸をする人に譲る方法があります。続けるか迷っているなら、基本の道具と気に入った材料だけを一箱に絞って残し、それ以外を手放すという中間の進め方もあります。集めた物を手放すときの気持ちの整理は<Link href="/shumi-collection-seiri/" className="text-primary underline underline-offset-2">趣味のコレクションの整理</Link>で扱っています。片付けが進まない心理的な背景については<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理</Link>も参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        実家や故人の家に残された手芸の材料は、本人の思いが詰まっている物として扱います。本人が元気なら、一緒に材料を見ながら「これは何を作ろうとしていたのか」を聞くだけでも、残す物と手放す物が自然に分かれていきます。故人の物であれば、形見として残す物を先に選び、作りかけの物は仕上げてもらえる人に託す、写真に残してから手放す、という選択肢があります。気持ちの整理を含めた進め方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">遺品の形見分けの進め方</Link>、実家全体の片付けは<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、親と一緒に進めるときの向き合い方は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親に片付けを納得してもらう方法</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">手芸の材料を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集める→分ける→作りかけを決める→手放し方を分ける→種類別に収める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">布・糸・針・刃物の分別区分は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          布や糸を可燃ごみとして出すのか、繊維の資源回収に出すのか、ボタンやビーズを素材ごとにどう分けるのか、針や裁ちばさみをどう包んで出すのかは、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。寄付や譲渡を考える場合も、受け入れの条件は団体によって異なりますので、事前に確認してから持ち込んでください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        材料と一緒に、手芸で作った作品や、家族が作ってくれた物が出てくることもあります。作品を残すか手放すかの考え方は<Link href="/kodomo-sakuhin-seiri/" className="text-primary underline underline-offset-2">子どもの作品の整理</Link>の「写真に残す」という方法が、大人の作品にも応用できます。材料を減らしたあと、押し入れやクローゼットの空いた場所をどう使うかは<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>、収納を買い足す前に考えたいことは<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>で扱っています。古い布や衣類をまとめて手放す場合は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理と処分</Link>も参考になります。
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
        次のような状況では、自分たちだけで抱え込まず、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        手芸の材料は、業者に依頼する場合でも「残す物」と「手放す物」を自分で分けておく必要があります。分ける作業に時間がかかる場合は、まず形見や気に入った材料だけを先に取り分け、残りをまとめて依頼する進め方もあります。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、故人の物を扱う場合の進め方は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。布・糸・ボタン・ビーズ・針・刃物などの分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。寄付や譲渡の受け入れ条件は団体により異なりますので、事前にご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
