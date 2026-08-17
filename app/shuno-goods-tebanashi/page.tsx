import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shuno-goods-tebanashi/";
const TITLE = "収納グッズの買いすぎ問題｜収納を増やすほど片付かない理由と手放し方";
const DESC =
  "収納ケースやラックを買い足しているのに部屋が片付かない——それは収納グッズの買いすぎが原因かもしれません。収納が増えるほど物が増える構造、収納グッズを買うのは片付けの最後である理由、中身から減らして空いた収納ごと手放す手順、プラスチックケース・カラーボックス・スチールラックの素材別処分の考え方、買う前に自分に問いかけるルールまでを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "収納が増えると物も増える——「収納の法則」の落とし穴",
    body: "散らかった部屋を見て「収納が足りないからだ」と考え、収納ケースやラックを買い足す。これは多くの人がやりがちな対処ですが、たいてい逆効果に終わります。収納には「空きがあると埋めたくなる」性質があり、新しい収納は数か月で満杯になり、部屋には収納家具の分だけ床面積が減った状態が残ります。片付かない原因のほとんどは収納の不足ではなく、物の量が収納と暮らしの容量を超えていることです。容量を増やす対処は、あふれる速度を一時的に遅らせるだけで、根本の解決を先送りにします。",
  },
  {
    title: "収納グッズ自体が「片付けるべき物」になっていないか",
    body: "収納グッズの買いすぎが進むと、中身の入っていない収納ケース、サイズが合わなくて使っていないファイルボックス、「いつか使うかも」と取ってある空き箱や紙袋などが、押し入れやクローゼットの一角を占領し始めます。物をしまうための道具が、しまう場所を奪っているという逆転現象です。空の収納グッズが3つ以上ある、同じ用途の収納用品が重複している、収納ケースの中身を思い出せない——こうしたサインに心当たりがあれば、収納グッズそのものを片付けの対象にするタイミングです。",
  },
  {
    title: "収納グッズを買うのは「片付けの最後」が正しい順番",
    body: "整理収納の基本の順番は、「全部出す→要不要を分ける→残す物の量を確定する→その量に合う収納を用意する」です。つまり収納グッズの購入は工程の最後であり、最初ではありません。物の量が決まる前に収納を買うと、サイズや数が合わず、使われない収納グッズが増えるだけです。今持っている収納で足りるならそれが最適解で、買い足しは「残す物が確定してなお足りない」と分かってからで遅くありません。この順番を守るだけで、収納グッズの買いすぎはほぼ防げます。",
  },
];

const merits = [
  {
    title: "手順の考え方1：中身を先に減らせば、収納は自然に空く",
    body: "収納グッズを手放す最短ルートは、収納そのものと格闘することではなく、中身を減らすことです。使っていない物・存在を忘れていた物を手放していくと、収納ケースの中身は自然にまばらになり、複数のケースの中身を1つに集約できるようになります。空いたケースが「手放せる収納」です。中身の仕分けの基準や進め方は片付けの順番の記事と、衣類が多い場合は衣類の整理の記事を参考にしてください。中身と収納を同時に考えようとすると手が止まるので、「中身が先、入れ物が後」と割り切るのがコツです。",
  },
  {
    title: "手順の考え方2：素材別に処分ルートを確認する",
    body: "収納グッズの処分は素材とサイズで分かれます。プラスチック製の衣装ケースは、自治体の規定サイズを超えれば粗大ごみ、以下なら区分に従って資源またはごみへ、というのが一般的な整理です。カラーボックスなどの木製・板材の収納は粗大ごみになることが多く、解体すれば普通ごみで出せるかは自治体によります。スチールラックは金属としての区分や粗大ごみ扱いなど、これも自治体ルールの確認が必要です。いずれも必ずお住まいの自治体の分別案内で品目名を検索してください。分別に迷う物が多いときは分別が難しいゴミの出し方の記事も参考になります。",
  },
  {
    title: "手順の考え方3：状態のよい収納グッズは売却・譲渡で活かす",
    body: "無印良品やニトリ・イケアなど定番メーカーの収納用品は中古でも需要があり、フリマアプリやリサイクルショップで取引されることがあります。同じシリーズで数が揃っているとまとめて欲しい人が見つかりやすい傾向もあります。汚れを拭き、パーツの欠品を確認してから出品しましょう。売るほどではない物も、地域の譲渡掲示板や知人への声かけで引き取り手が見つかることがあります。売却・譲渡は処分費を浮かせるだけでなく、「まだ使える物を捨てる」罪悪感を減らして手放しを進めやすくする効果もあります。買取の活用はリサイクルショップ・買取の併用の記事で解説しています。",
  },
];

const steps = [
  {
    title: "家中の収納グッズを数える（総量の見える化）",
    body: "最初に、家にある収納グッズを種類ごとに数えます。衣装ケース、ファイルボックス、カゴ、突っ張りラック、カラーボックス、空き箱・紙袋のストックまで、「物をしまうための物」をすべて対象にします。数えるだけで「こんなにあったのか」という発見があるはずです。この総数が、暮らしの規模に対して多いか少ないかを判断する土台になります。数えながら、中身が空の物・何が入っているか思い出せない物に付箋を貼っておくと、次の工程が楽になります。",
  },
  {
    title: "中身の要不要を仕分けて、物の総量を減らす",
    body: "次に、収納の中身を場所ごとに全部出して仕分けます。1日で家中をやろうとせず、今日はこのケース3つ、と小さく区切るのが挫折しないコツです。「1年以上使っていない」「存在を忘れていた」物は手放し候補です。中身が減ると、残す物を少ない収納に集約できるようになります。仕分けで出た不用品の処分は不用品の処分ルートの使い分けを参考にしてください。この段階では収納グッズを捨てる判断はまだしなくてよく、まず中身に集中します。",
  },
  {
    title: "空になった収納グッズを「残す・手放す」に分ける",
    body: "中身の集約が進むと、空の収納グッズが手元に残ります。ここで「いつか使うかも」と全部取っておくと元に戻ってしまうので、残す基準を決めます。基準の例は「具体的な使い道を今言える物だけ残す」「予備は用途ごとに1つまで」です。サイズが半端で使いにくかった物、壊れかけの物、同じ用途で重複している物は手放し対象です。空き箱・紙袋のストックも、量の上限（例：紙袋は10枚まで）を決めて超過分を手放しましょう。",
  },
  {
    title: "素材・状態に応じて処分・売却する",
    body: "手放すと決めた収納グッズを、状態のよい物（売却・譲渡）と処分する物に分け、処分品は素材とサイズごとに自治体の分別案内で区分を確認します。大型のケースやラックは粗大ごみの申し込みが必要になることが多いため、粗大ごみ申し込みの流れを参考に手配しましょう。スチールラックの解体はボルトのさび付きで手間取ることがあり、軍手と適した工具を用意してください。量が多い場合や運び出しが難しい場合は、不用品回収業者にほかの不用品とまとめて依頼する方法もあります。",
  },
  {
    title: "「買う前ルール」を決めてリバウンドを防ぐ",
    body: "最後に、収納グッズを再び増やさないためのルールを決めます。おすすめは「収納グッズは、しまう物と置き場所を具体的に決めてからでないと買わない」「買うときは採寸してから」「1つ買ったら1つ手放す」の3つです。セールや百円ショップで「便利そうだから」と用途を決めずに買うことが、買いすぎの最大の入り口です。収納に頼らない部屋の維持の仕組みは片付けのリバウンド防止の記事で、物を増やさない暮らし方はミニマリストの始め方の記事で詳しく解説しています。",
  },
];

const ngActions = [
  {
    title: "片付けを始める前に収納グッズを買いに行く",
    body: "「よし片付けるぞ」と決めた日に、まず収納用品の売り場へ向かうのは典型的な失敗パターンです。物の量が確定していない段階で買った収納は、サイズも数も合わない可能性が高く、片付けの途中で「入れ物はあるのに片付かない」という混乱を生みます。買い物は片付けのやる気を消費する行為でもあり、帰宅した頃には作業の気力が減っています。順番は必ず「減らす→測る→買う」。今ある収納で仮置きし、本当に足りない分だけ後から買い足しましょう。",
  },
  {
    title: "空の収納ケースを「いつか使う」と際限なく保管する",
    body: "空になった衣装ケースや空き箱を、使い道のないまま押し入れに積んでおくのは、収納スペースの浪費です。「いつか」は具体的な予定ではなく、多くの場合その日は来ません。空の収納は場所を取るだけでなく、「まだ収納に余裕がある」という錯覚を生み、物を増やす心理的な口実にもなります。予備として残すのは用途を言える物だけに絞り、それ以外は状態のよいうちに売却・譲渡・処分へ回しましょう。",
  },
  {
    title: "収納の中に収納を重ねて「二重収納」にする",
    body: "収納ケースの中に小さな箱を入れ、その箱の中にさらにポーチを入れる——二重三重の入れ子収納は、中身へのアクセスを悪くし、何がどこにあるか分からなくなる原因です。取り出すのに手間がかかる物は使われなくなり、使われない物は死蔵品になります。収納は「開けたら中身が一目で見えて、1アクションで取り出せる」状態が理想です。入れ子になっている収納を見つけたら、中身を平らに並べ直し、余った入れ物は手放し候補に加えましょう。",
  },
  {
    title: "大型の収納家具を「とりあえず」で買い足す",
    body: "床置きの物が増えてきたからと、大型のラックやチェストを安易に買い足すのは慎重に。大型収納家具は部屋の床面積と圧迫感に直結し、処分するときには解体・搬出という大仕事が待っています。買う前に「この家具の中に何をしまうか」を棚板1段単位で言えるか自問してください。言えないなら、それは物を減らすサインです。既にある大型収納家具を手放したい場合は、大型家具の処分ガイドを参考にしてください。",
  },
];

const judgeSigns = [
  "収納グッズを含む不用品が多く、自力での仕分け・搬出が追いつかない",
  "大型のラック・チェストの解体や運び出しが体力的に難しい",
  "引っ越しや退去の期限までに収納家具ごと処分したい",
  "実家や物置に収納グッズが大量にたまっていて手が付けられない",
  "仕分けから処分まで、まとまった時間がどうしても取れない",
];

const faqs = [
  {
    q: "収納グッズはどのくらいの量が適正ですか？",
    a: "一律の正解はありませんが、目安になる考え方は「収納の中身がすべて把握できて、8割程度の量で収まっている」状態です。ぎゅうぎゅうに詰まった収納や、中身を思い出せない収納が複数あるなら、収納グッズではなく物の総量が超過しています。空の収納グッズは、具体的な使い道を言える物だけ残すのが目安です。まず総数を数えて現状を見える化することから始めましょう。",
  },
  {
    q: "プラスチックの衣装ケースは何ごみで出せばよいですか？",
    a: "自治体により異なります。多くの自治体では一辺の長さの基準で粗大ごみかどうかが決まり、基準以下ならプラスチック資源または可燃ごみなど、地域の区分に従います。解体・切断して小さくすれば普通ごみで出せるかどうかも自治体次第です。必ずお住まいの自治体の分別案内で「衣装ケース」「収納ケース」を検索して確認してください。状態がよければフリマアプリや譲渡で手放す選択肢もあります。",
  },
  {
    q: "収納グッズを買ってはいけないということですか？",
    a: "いいえ、収納グッズ自体は暮らしを支える道具です。問題は買う順番と量で、物の量を確定させる前に「便利そうだから」で買うことが買いすぎの原因になります。片付けの最後に、残す物のサイズと量を測ってから必要な分だけ買えば、収納グッズは最大限に機能します。既に持っている収納で足りるならそれが最適で、統一感のためだけの買い替えは急ぐ必要はありません。",
  },
  {
    q: "収納グッズだらけの実家を片付けたいのですが、親が捨てたがりません。",
    a: "収納グッズは「まだ使える物」の代表格で、特に物のない時代を知る世代は空き箱や紙袋も資源として大切にする傾向があります。頭ごなしに「捨てて」と言うのではなく、量の上限を一緒に決める（紙袋は棚1段分までなど）方法が受け入れられやすいでしょう。親の家の片付け全体の進め方は実家の片付けの記事と、物を捨てない親への声かけの記事で詳しく解説しています。",
  },
];

const related = [
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "挫折しない片付けの進め方" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "散らからない部屋を維持する仕組み" },
  { href: "/koromogae-shunou-shikumika/", label: "衣替えの収納仕組み化", desc: "衣替えの手間を減らす収納の工夫" },
  { href: "/irui-seiri/", label: "衣類の整理・処分", desc: "増えすぎた服を手放す基準" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分ガイド", desc: "運べない家具の搬出と処分" },
  { href: "/minimalist-hajimekata/", label: "ミニマリストの始め方", desc: "物を増やさない暮らしの入り口" },
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
    { "@type": "ListItem", position: 2, name: "収納グッズの買いすぎ問題と手放し方" },
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
    { href: "#kiso", label: "1｜収納グッズを増やしても片付かない理由" },
    { href: "#merit", label: "2｜手放すための3つの考え方" },
    { href: "#houshin", label: "3｜収納との付き合い方の全体方針" },
    { href: "#steps", label: "4｜収納グッズを減らす5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に頼んだほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "収納グッズの買いすぎ問題と手放し方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          収納グッズの買いすぎ問題｜収納を増やすほど片付かない理由と手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          収納ケースを買い足しても買い足しても、部屋は一向に片付かない。それどころか、使っていない収納グッズや空き箱が押し入れを占領し始めている——心当たりはありませんか。「収納が足りないから散らかる」という思い込みは、片付かない部屋で最もよくある勘違いのひとつです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、収納を増やすほど物が増える構造、収納グッズを買うのは片付けの「最後」である理由、中身から減らして空いた収納ごと手放す5ステップ、素材別の処分の考え方、そして二度と買いすぎないためのルールまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>片付かない原因は収納不足ではなく物の量。収納を増やす対処は問題を先送りにするだけ</li>
          <li>収納グッズを買うのは「減らして量を確定させた後」。順番を守れば買いすぎは防げる</li>
          <li>手放すときは中身が先。集約して空いた収納から、売却・譲渡・素材別の処分へ</li>
          <li>「使い道を言えない収納は持たない」「採寸してから買う」でリバウンドを防ぐ</li>
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

      <H2 id="kiso" num="1">収納グッズを増やしても片付かない理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、「収納を買っても片付かない」構造を理解しましょう。ここが腑に落ちると、片付けの方針が変わります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">手放すための3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        増えすぎた収納グッズを手放すときの、基本になる3つの考え方です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">収納との付き合い方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        目指すのは「収納グッズが少ないのに片付いている家」です。収納が少なければ、しまえる量に上限ができ、物の増加に自然と歯止めがかかります。逆に収納が豊富な家は、死蔵品を大量に抱え込めてしまうため、片付けの問題が見えにくくなり、ある日一気にあふれます。収納は「たくさん持つほど便利な道具」ではなく、「少ないほど暮らしが軽くなる道具」と捉え直すこと。これがこの記事で最もお伝えしたい方針です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物そのものを減らす考え方は<Link href="/minimalist-hajimekata/" className="text-primary underline underline-offset-2">ミニマリストの始め方</Link>を、片付け全体の段取りは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">収納グッズを減らす5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、数える→中身を減らす→空きを分ける→処分する→ルールを決める、の5ステップです。
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

      <H2 id="ng" num="5">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        収納グッズの整理は自力でできる範囲が広い作業ですが、次のような状況では片付け・不用品回収業者の力を借りるのが現実的です。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で料金・口コミを比較して選ぶ方法が便利です。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
