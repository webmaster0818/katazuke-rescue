import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/nuigurumi-ningyou-shobun/";
const TITLE = "ぬいぐるみ・人形の処分｜気持ちの整理をつけて手放す方法";
const DESC =
  "ぬいぐるみや人形は、顔があること・贈り主の記憶・子どもの成長の記録が重なって手放しにくい物です。捨てられないのは意志が弱いからではありません。この記事では、気持ちの整理のつけ方、人形供養という選択肢との向き合い方（受け入れの可否や考え方は宗派・地域・寺社により異なります）、譲渡や売却で活かすルート、雛人形・五月人形のように複数素材が混ざる物の分け方、実家や遺品として大量に出てきた場合の進め方を解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "手放せないのは、意志が弱いからではありません",
    body: "ぬいぐるみや人形の前で手が止まってしまう——これは片付けが苦手だからでも、決断力がないからでもありません。人には、顔や目のある物を無意識に「相手」として扱う性質があります。ぬいぐるみを袋に入れるときに向きを気にしたり、人形と目が合った気がして手を止めたりするのは、ごく自然な反応です。まずは「自分は薄情ではない」と受け止めてください。気持ちの負担を認めたうえで進め方を考えるほうが、無理に割り切ろうとするより結果的にずっと前に進みます。",
  },
  {
    title: "3つの重さが同時にかかっている",
    body: "ぬいぐるみ・人形が手放しにくいのは、性質の違う3つの重さが同時にかかるためです。ひとつめは顔があることによる心理的な重さ。ふたつめは贈ってくれた人の記憶で、祖父母や親、友人からの贈り物には相手の気持ちが重なります。みっつめは子どもの成長の記録としての重さで、抱いて眠った日々や写真に一緒に写った時間が結びついています。どれが自分にとって重いのかを分けて眺めるだけでも、「これは思い出の物」「これは単に置き場所に困っている物」と輪郭が見えてきます。",
  },
  {
    title: "対象はぬいぐるみだけではない",
    body: "この記事で扱うのは、ぬいぐるみ、キャラクター人形、雛人形、五月人形、日本人形、市松人形、こけし、フィギュア類まで含みます。柔らかい布製の物から、ガラスケースに入った飾り物、樹脂や陶器でできた物まで幅が広く、気持ちの面でも扱いの面でも一律には語れません。飾ることを前提に作られた人形は、飾り台やケース、小物一式が付属することも多く、量としても大きくなります。まずは家の中にどんな種類がどれだけあるかを把握するところから始めると、後の判断が落ち着いて進みます。",
  },
];

const merits = [
  {
    title: "考え方1：写真に残してから手放す",
    body: "手放す前に写真を撮っておくと、気持ちの区切りがつきやすくなります。物そのものがなくなっても、その子と過ごした時間の記録は残る——そう思えるだけで、判断の重さがずいぶん軽くなります。並べて一枚に収める、子どもと一緒に持って撮る、名前や思い出を短くメモに添える、といった方法があります。撮った写真そのものが増えすぎて困る場合は、写真・アルバムの整理の記事で扱いを整えておくとよいでしょう。写真を撮るという行為自体が、丁寧に見送る時間になります。",
  },
  {
    title: "考え方2：一度に全部決めようとしない",
    body: "「今日で全部決着をつける」と考えると、心が疲れて判断が雑になり、後から後悔しやすくなります。おすすめは、決めきれない物をまとめて入れる保留箱をひとつ用意し、期限だけ決めておく方法です。数か月後に開けてみて、そのときの気持ちで改めて考えます。時間を置くと、不思議と自然に手放せる物と、やはり残したい物がはっきり分かれてきます。全部を一気に判断しないことは先延ばしではなく、後悔を減らすための手順のひとつです。",
  },
  {
    title: "考え方3：家族で一緒に決める",
    body: "ぬいぐるみや人形は、家族それぞれに別の思い入れがあります。ひとりが良かれと思って処分したことが、後から家族のわだかまりになることは少なくありません。特に子どもの物は、たとえ本人がもう遊んでいなくても、本人の同意を得てから進めるのが基本です。子どもの作品や思い出の物の扱いは子どもの作品整理の記事で詳しく解説しています。飾り人形のように親から受け継いだ物は、贈ってくれた側の気持ちにも触れる話題なので、時間を取って落ち着いて話しましょう。",
  },
];

const steps = [
  {
    title: "家の中にある分を集めて全体量を把握する",
    body: "最初に、押し入れ・クローゼット・子ども部屋・物置・実家の納戸など、思い当たる場所からぬいぐるみと人形を集めて一か所に並べます。点在していると「そんなに多くない」と感じますが、集めると実際の量がはっきりします。並べるときは、布製のぬいぐるみ、キャラクター人形、飾り人形（雛人形・五月人形・日本人形など）、フィギュア類にざっくり分けておくと、後の判断も手放し方の検討もしやすくなります。この段階では捨てる判断はまだしません。",
  },
  {
    title: "残す・迷う・手放すの3つに分ける",
    body: "並べた物を、残す・迷う・手放すの3つに分けます。コツは、いきなり「捨てるかどうか」で考えず、「これからも飾りたいか、そばに置きたいか」で考えることです。飾る場所を思い浮かべられる物は残す、思い浮かばないけれど気持ちが残る物は迷うへ入れます。迷うに入った物は保留箱行きで構いません。分けきれない日は途中でやめて大丈夫です。片付けの進め方全体に迷いがあるときは、片付けの順番の記事も参考にしてください。",
  },
  {
    title: "状態のよい物は譲渡・寄付・売却を検討する",
    body: "きれいな状態で、まだ遊べる・飾れる物は、必要としている人に渡す道があります。知人への譲渡、地域の譲渡掲示板、フリマアプリ、リサイクルショップなどが選択肢です。ただし、寄付を受け付ける団体では衛生上の理由から受け入れ条件が細かく決められていることが多く、団体によって条件は大きく異なります。必ず事前に受け入れ可否と条件を確認してください。買取の使いどころはリサイクルショップ・買取の併用の記事に整理しています。作家物や古い日本人形は価値が分かりにくいため、複数の窓口で見てもらうと判断しやすくなります。",
  },
  {
    title: "供養という選択肢を検討する（必須ではありません）",
    body: "人形供養を受け付けている寺社や神社があります。ただし、受け入れの可否・時期・方法・そもそも供養をどう捉えるかは、宗派・地域・それぞれの寺社によって大きく異なります。持ち込みのみの所、時期が限られる所、対象の種類を限定している所などさまざまなので、行く前に必ず直接問い合わせて確認してください。供養は「しなければならないもの」ではなく、あくまで選択肢のひとつです。感謝の気持ちを心の中で伝えて手放すという選び方も、同じように尊重されるべき方法です。仏壇・神棚まわりの整理は仏壇・神棚の整理の記事で扱っています。",
  },
  {
    title: "処分する物は素材ごとに区分を確認して出す",
    body: "手放すと決めた物は、素材とサイズごとに自治体の分別案内で区分を確認します。布製のぬいぐるみと、樹脂・陶器の人形、ガラスケース、木製の飾り台、金属の小物では区分が変わることがあります。大きな飾り台やケースは粗大ごみの申し込みが必要になる場合があるため、粗大ごみ申し込みの流れを確認しておくと安心です。区分の判断に迷う物が多いときは分別が難しいゴミの出し方の記事も役立ちます。いずれもお住まいの自治体の案内が最終的な基準になります。",
  },
];

const ngActions = [
  {
    title: "気持ちの整理がつかないまま勢いで全部捨てる",
    body: "「考えると進まないから」と一気に処分してしまうと、後から強い後悔が残ることがあります。特に、贈り主が亡くなっている物や、子どもが小さい頃から一緒だった物は、時間が経ってから気持ちが戻ってくることも珍しくありません。急がなくてよい状況なら、迷う物は保留箱に入れて期限を決め、その日が来てから改めて向き合いましょう。引っ越しや退去で期限がある場合も、全部を同じ日に判断せず、優先度の高い場所から順に進めるほうが結果的に早く終わります。",
  },
  {
    title: "家族に相談せずに、他の人の物を処分する",
    body: "子どものぬいぐるみ、配偶者が大切にしているフィギュア、親が飾っていた人形——所有者が自分でない物を、良かれと思って先に処分してしまうのは避けましょう。本人にとっては価値のある物であることが多く、信頼関係に影響します。子どもには「もう使っていないよね」と決めつけず、本人が選べる形で聞くこと。実家の物は親の所有物なので、まず意向を確かめてから進めます。実家の片付けの進め方は実家の片付けの記事にまとめています。",
  },
  {
    title: "雛人形・五月人形を素材ごとに分けずにまとめて出す",
    body: "雛人形や五月人形は、人形本体のほかにガラスケース、木製やプラスチックの飾り台、金属の小道具、屏風、雪洞（ぼんぼり）など、複数の素材が一式に混ざっています。まとめて一袋にすると分別区分が合わなくなり、収集されないことがあります。まず一式を広げて素材ごとに分け、それぞれの区分を自治体の案内で確認しましょう。ガラスケースは割れると危険なので、無理に解体せず、運ぶときは新聞紙や布で覆うなど扱いに気をつけてください。",
  },
  {
    title: "不安をあおる情報に急かされて判断する",
    body: "ぬいぐるみや人形の処分については、根拠のはっきりしない話が広まりやすい分野です。不安をあおる情報に急かされて、必要以上に費用をかけたり、納得できないまま急いで決めたりする必要はありません。宗教的な扱いは宗派・地域・寺社の考え方によって異なり、ひとつの正解があるわけではないという前提で、自分と家族が納得できる形を選べば十分です。判断に迷ったら、期限を決めて保留し、落ち着いたときに考え直すという進め方で構いません。",
  },
];

const judgeSigns = [
  "実家や遺品としてぬいぐるみ・人形が大量に出てきて、自力では仕分けが追いつかない",
  "ガラスケース入りの飾り人形など、重くて運び出しが難しい物が複数ある",
  "他の不用品と合わせて量が多く、まとめて引き取ってもらいたい",
  "退去や施設への入居で期限が決まっていて、時間が確保できない",
  "気持ちの負担が大きく、ひとりで向き合い続けるのがつらい",
];

const faqs = [
  {
    q: "ぬいぐるみは必ず供養しないといけませんか？",
    a: "いいえ、供養は必須ではありません。人形供養を受け付けている寺社や神社はありますが、受け入れの可否や時期、方法、そして供養そのものの捉え方は、宗派・地域・各寺社によって大きく異なります。希望する場合は、必ず事前に直接問い合わせて確認してください。供養をせず、感謝の気持ちを伝えてから手放すという選び方も、同じように尊重される方法です。ご自身と家族が納得できる形を選んでください。",
  },
  {
    q: "ぬいぐるみは何ごみになりますか？",
    a: "自治体により異なります。布製の小さなぬいぐるみは可燃ごみの区分になることが多い一方、大型の物はサイズの基準で粗大ごみ扱いになる場合があります。また、目や鼻の樹脂パーツ、内部の金属フレーム、電池で動く仕組みが入っている物は扱いが変わることがあります。必ずお住まいの自治体の分別案内で品目名を調べて確認してください。判断に迷う物が多いときは、分別が難しいゴミの出し方の記事も参考になります。",
  },
  {
    q: "雛人形はどうやって手放せばよいですか？",
    a: "雛人形は人形本体、ガラスケース、飾り台、屏風、金属の小物などが一式になっているため、まず広げて素材ごとに分けてから、それぞれの区分を自治体の案内で確認するのが基本です。状態がよく一式が揃っている物は、譲渡や買取の窓口で相談できる場合もあります。供養を希望する場合は、受け入れの可否や条件が寺社によって異なるため、事前の問い合わせが必要です。ケースは割れると危険なので、扱いには十分注意してください。",
  },
  {
    q: "子どものぬいぐるみを減らしたいのですが、どう話せばよいですか？",
    a: "頭ごなしに「もういらないよね」と決めるのではなく、本人が選べる形にするのが基本です。「棚のこの段に入るぶんだけ残そう」と量の枠を先に決め、どれを残すかは本人に選んでもらう方法が受け入れられやすいでしょう。すぐに決められない物は保留箱に入れ、時間を置いてから改めて聞きます。写真に残してから手放すと納得しやすくなります。子どもの物の扱い方は子どもの作品整理の記事にまとめています。",
  },
];

const related = [
  { href: "/butsudan-kamidana-seiri/", label: "仏壇・神棚の整理", desc: "宗教にかかわる物の扱いの考え方" },
  { href: "/kodomo-sakuhin-seiri/", label: "子どもの作品整理", desc: "本人の気持ちを尊重した進め方" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で行う", desc: "自力で進めるときの手順と注意点" },
  { href: "/jikka-katazuke/", label: "実家の片付け", desc: "親と一緒に進めるための段取り" },
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理", desc: "思い出を残しながら量を減らす" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "売る・譲る・出すの使い分け" },
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
    { "@type": "ListItem", position: 2, name: "ぬいぐるみ・人形の処分と気持ちの整理" },
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
    { href: "#kiso", label: "1｜ぬいぐるみ・人形が手放しにくい理由" },
    { href: "#merit", label: "2｜気持ちの整理をつける3つの考え方" },
    { href: "#houshin", label: "3｜供養という選択肢との向き合い方" },
    { href: "#steps", label: "4｜手放すまでの5ステップ" },
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

      <Breadcrumb items={[{ label: "ぬいぐるみ・人形の処分と気持ちの整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ぬいぐるみ・人形の処分｜気持ちの整理をつけて手放す方法
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けを進めていて、ぬいぐるみや人形の前で手が止まる。袋に入れようとして、なぜか向きを直してしまう。そんな経験はありませんか。ぬいぐるみや人形が手放しにくいのは、意志が弱いからでも、片付けが下手だからでもありません。顔があること、贈り主の記憶、子どもの成長の記録——性質の違う重さが同時にかかっているためです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、その重さを認めたうえで、気持ちの整理のつけ方、人形供養という選択肢との向き合い方、譲渡や売却で活かすルート、雛人形・五月人形のように複数素材が混ざる物の分け方、そして実家や遺品として大量に出てきた場合の進め方までを、急かさずに順を追って解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>手放せないのは自然な反応。まず「意志が弱いからではない」と受け止めるところから</li>
          <li>写真に残す・保留箱に期限を決める・家族で一緒に決める、の3つで判断が軽くなる</li>
          <li>供養は選択肢のひとつ。受け入れの可否や考え方は宗派・地域・寺社により大きく異なるため事前に確認を</li>
          <li>処分は素材別。雛人形・五月人形は一式を分けてから自治体の分別案内で区分を確認する</li>
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

      <H2 id="kiso" num="1">ぬいぐるみ・人形が手放しにくい理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜ手が止まるのかを言葉にしておきましょう。理由が見えると、自分を責めずに進められます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">気持ちの整理をつける3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断を軽くするための、無理のない3つの考え方です。どれか一つだけでも効果があります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[15px] leading-8 text-text-secondary mb-4">
        思い出の写真そのものが増えて困っている場合は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理</Link>を、子どもの物の扱いは<Link href="/kodomo-sakuhin-seiri/" className="text-primary underline underline-offset-2">子どもの作品整理</Link>を参考にしてください。
      </p>

      <H2 id="houshin" num="3">供養という選択肢との向き合い方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ぬいぐるみや人形を手放すとき、供養を思い浮かべる方は多いと思います。実際に、人形供養を受け付けている寺社や神社があります。ただし大切なのは、受け入れの可否・実施の時期・持ち込みや郵送といった方法・対象とする物の範囲、そして供養をどう意味づけるかまで、宗派・地域・それぞれの寺社によって大きく異なるということです。ひとつの決まった作法があるわけではありません。希望する場合は、必ず事前に直接問い合わせ、受け入れてもらえるか、どのような形になるかを確認してください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        同時に、供養は必須ではないということも申し添えます。長く一緒にいてくれたことへの感謝を心の中で伝えて、丁寧に包んで手放す——それも十分に誠実な見送り方です。周囲の言葉や不確かな情報に急かされる必要はありません。ご自身と家族が納得できる形を、落ち着いて選んでください。仏壇や神棚など、宗教にかかわる物全般の整理の考え方は<Link href="/butsudan-kamidana-seiri/" className="text-primary underline underline-offset-2">仏壇・神棚の整理</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、家族が亡くなったあとに人形類が大量に出てきた場合は、他の遺品と合わせて全体の段取りを立てたほうが進めやすくなります。自力で進めるときの手順は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で行う</Link>、実家全体の片付けは<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付け</Link>にまとめています。
      </p>

      <H2 id="steps" num="4">手放すまでの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集める→3つに分ける→活かせる物を回す→供養を検討する→素材別に出す、の5ステップです。一度に全部やる必要はありません。
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
      <p className="mt-4 text-[15px] leading-8 text-text-secondary mb-4">
        処分するときは、ほこりを払い、他のごみと分けて袋や紙に包んでから出すと気持ちの区切りがつきやすくなります。売る・譲る・出すの使い分けは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>に整理しています。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ぬいぐるみ・人形の整理は自分の手で進められる範囲が広い作業ですが、次のような状況では片付け・不用品回収業者の力を借りるのが現実的です。対応できる業者は<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。人形類の扱いについて希望がある場合は、依頼前にその点も伝えて対応の可否を確認しておくと安心です。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選ぶ方法が便利です。自治体の回収と業者への依頼は、量と運び出しの手間で使い分けるとよいでしょう。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。人形供養の受け入れの可否・時期・方法・考え方は宗派や地域、それぞれの寺社により大きく異なるため、希望される場合は事前に直接お問い合わせください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
