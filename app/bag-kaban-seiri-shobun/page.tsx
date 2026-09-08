import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/bag-kaban-seiri-shobun/";
const TITLE = "バッグ・かばんの整理と処分｜使わないバッグを手放す基準と素材別の処分の考え方";
const DESC =
  "クローゼットの上段に積まれた紙袋入りのバッグ、玄関に掛けたままのエコバッグ、旅行のたびに増えたスーツケースやボストンバッグ、もらった記念のトートバッグ。バッグやかばんは一つひとつが場所を取るのに、「高かった」「まだきれい」「いつか使う」という理由で手放しにくい品目です。バッグが増える理由、残す基準の決め方、革・金属・キャスター付きなど素材や構造で分かれる処分の考え方、売る・譲るという選択肢、残すバッグの保管の仕方までを解説します。";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「用途ごとに一つ」が積み重なり、気付くと二桁になる",
    body: "バッグは、通勤用、休日用、冠婚葬祭用、旅行用、買い物用、子どもの送り迎え用、パソコンを持ち歩く用と、用途ごとに「これが必要」という理由で増えていきます。一つひとつの購入には理由があるため、無駄に買ったという感覚がなく、増えていることに気付きにくいのが特徴です。さらに、用途が重なるバッグを買い替えても、古いほうを「予備」として残すため、同じ用途のバッグが二つ三つと重なります。集めてみると、想像していたよりはるかに多いことが珍しくありません。",
  },
  {
    title: "「高かった」「まだきれい」が手放す判断を止める",
    body: "バッグは衣類に比べて一つあたりの価格が高いことが多く、「高かったのに」という気持ちが手放す判断を止めます。また、衣類のように傷みや流行が分かりやすく表れにくいため、「まだきれいだから」という理由で残されます。しかし、使っていないバッグは、使っていない時点で暮らしの中では役目を終えています。買った金額はすでに使った金額であり、残しておいても戻ってきません。状態がよいうちに譲る、売るという選択肢を考えることが、バッグにとっても持ち主にとっても損の少ない判断になります。",
  },
  {
    title: "もらい物・付録・記念品のバッグは、自分で選んでいないのに残る",
    body: "エコバッグ、イベントの記念トートバッグ、雑誌の付録、贈答品に付いてきた袋、旅行先で買った土産物のバッグなどは、自分で選んで買ったわけではないのに、「使えるから」「もらった物だから」という理由で残ります。これらは一つひとつは薄くても、数がまとまると引き出しや棚を占領します。自分で選んでいない物は、暮らしの中で使う理由が薄く、実際にはほとんど使われません。「自分で選んで買ったか」という視点で分けるだけで、残す候補は大きく絞れます。",
  },
];

const merits = [
  {
    title: "決めごと1：用途ごとに「残す数」の上限を決める",
    body: "整理を始める前に、通勤用、休日用、冠婚葬祭用、旅行用、買い物用のように、自分の暮らしで実際にある用途を書き出し、それぞれに残す数の上限を決めます。「通勤用は一つ、休日用は二つ、冠婚葬祭用は一つ、旅行用はスーツケース一つとボストンバッグ一つ、買い物用は二つ」のように具体的な数にします。上限があると、同じ用途のバッグが複数出てきたときに、「どれを残すか」の比較で判断でき、「全部残す」という結論になりません。上限は暮らしの変化に合わせて見直して構いません。",
  },
  {
    title: "決めごと2：「この一年で使ったか」を残す基準の軸にする",
    body: "残すかどうかを判断する軸は、「この一年で使ったかどうか」にします。季節や行事は一年でひと回りするため、一年使わなかったバッグは、次の一年も使わない可能性が高い物です。冠婚葬祭用のように使う頻度が低くても必要な物は、用途の上限の中で例外として残します。「いつか使うかもしれない」という理由は、上限を超えている場合には残す理由にならないと決めておくと、迷う時間が減ります。傷みや汚れ、金具の壊れ、内側のべたつきがある物は、使った頻度に関係なく手放す候補に入れます。",
  },
  {
    title: "決めごと3：売る・譲る物と、処分する物の分け方を先に決める",
    body: "状態がよく、傷や汚れが少ないバッグは、リサイクルショップや買取、知人への譲渡、寄付という選択肢があります。査定の基準や受け入れの条件は店舗や団体によって異なり、ブランドや素材、付属品の有無、状態によって扱いが分かれます。査定に出す前に、内側や底の汚れ、金具の状態、持ち手の傷みを確認し、付属の袋や保証書があればまとめておきます。売れない、譲れない物は処分に回すと先に決めておくと、「売れるかもしれないから残す」という保留が増えません。",
  },
];

const steps = [
  {
    title: "家中のバッグを一か所に集め、用途ごとに並べる",
    body: "クローゼット、押し入れ、玄関、車の中、実家に置いている物、紙袋や箱に入ったままの物など、バッグがある場所をすべて確認し、一か所に出します。エコバッグ、付録、記念品のトートバッグ、スーツケース、リュック、ポーチも含めます。集めたら、通勤用、休日用、冠婚葬祭用、旅行用、買い物用、その他、というように用途ごとに並べます。並べると、同じ用途のバッグが何個あるか、自分で選んでいない物がどれだけあるかが一目で分かります。この段階で、傷みや汚れ、金具の壊れ、内側のべたつきがある物には目印を付けておきます。",
  },
  {
    title: "「残す」「売る・譲る」「手放す」「保留」の4つに分ける",
    body: "用途ごとの上限と「この一年で使ったか」を基準に、残す物、売るか譲る物、処分する物、迷う物の4つに分けます。傷みや壊れがある物、内側がべたついている物、においが取れない物は、状態を理由に「手放す」に入れます。状態がよく使っていない物は「売る・譲る」に入れます。用途の上限を超えていて、どれを残すか迷う場合は、実際に持ってみて、重さ、持ちやすさ、中身の出し入れのしやすさで比べます。迷う物は「保留」の箱に入れ、期限を決めて見直します。",
  },
  {
    title: "売る・譲る物は、状態を確認して付属品をそろえる",
    body: "「売る・譲る」に分けたバッグは、外側と内側の汚れ、金具の状態、持ち手やファスナーの動きを確認し、乾いた布でほこりを落とします。付属の保存袋、ショルダーストラップ、保証書や購入時の書類があれば一緒にまとめます。買取や査定の基準は店舗や事業者によって異なり、ブランドや素材、状態、付属品の有無で扱いが分かれます。査定に出す前に、受け付けている品目と条件を確認してください。宅配で査定に出す方法もありますが、条件や流れは事業者によって異なります。譲る場合は、状態を正直に伝えたうえで、相手が必要としているかを確認してから渡します。",
  },
  {
    title: "手放す物は、素材と構造を確認して自治体の区分で出す",
    body: "処分するバッグは、素材と構造によって出し方が変わります。布や合成皮革の小さなバッグは可燃ごみになることが多い一方、革製品、金属の金具や芯材が多い物、キャスターや伸縮する持ち手が付いたスーツケースやキャリーバッグは、大きさや素材によって粗大ごみや不燃ごみなど別の区分になることがあり、扱いは自治体によって異なります。品目と大きさを書き出して、お住まいの市区町村の分別案内で確認してから出してください。スーツケースは指定の大きさを超えると粗大ごみとして申し込みが必要なことが一般的です。中身を確認し、ポケットに入ったままの物を取り出してから出します。",
  },
  {
    title: "残すバッグは、型崩れしない置き方で一か所にまとめる",
    body: "残すと決めたバッグは、用途ごとに一か所にまとめて置きます。革のバッグは、中に紙や布を詰めて形を保ち、保存袋に入れて直射日光と湿気を避けた場所に置きます。布のバッグは、たたむと折りじわが付きやすい物は立てて置きます。スーツケースは、中に季節の物や旅行用の小物を入れて収納の一部として使うと、場所を無駄にしません。置き場所が決まると、新しいバッグを買うときに「どれと入れ替えるか」を考える習慣ができ、増え続けることを防げます。保留の箱は期限が来たら見直し、使わなかった物は手放します。",
  },
];

const ngActions = [
  {
    title: "「高かったから」という理由だけで、使っていないバッグを残す",
    body: "買った金額は、残しておいても戻ってきません。使っていないバッグは、その時点で暮らしの中では役目を終えています。状態がよいうちに売る、譲るという選択肢を考えたほうが、長く置いて劣化させるより損が少なくなります。査定の結果に関係なく、自分の暮らしで使わない物は手放すと決めておくと、判断が進みます。",
  },
  {
    title: "スーツケースやキャリーバッグを、確認せずに通常のごみに出す",
    body: "キャスターや金属のフレームが付いたスーツケースやキャリーバッグは、大きさや素材によって粗大ごみなど別の区分になることが多く、通常の収集では回収されないことがあります。出し方は自治体によって異なりますので、品目と大きさを書き出して、お住まいの市区町村の分別案内で確認してから出してください。",
  },
  {
    title: "ポケットの中身を確認せずに手放す",
    body: "バッグのポケットには、現金、カード、鍵、レシート、身分に関わる書類、薬などが入ったままになっていることがあります。売る、譲る、処分するいずれの場合も、すべてのポケットと内袋を確認してから手放してください。実家や故人のバッグを整理する場合は特に、通帳や印鑑、重要な書類が入っていることがあるため、一つずつ丁寧に確認します。",
  },
  {
    title: "減らす前に、バッグ用の収納や仕切りを買い足す",
    body: "バッグが入りきらないからと収納や仕切りを買い足すと、その分だけ残す上限が上がり、結局は減りません。まず家中から集めて数を見て、用途ごとの上限で減らしてから、残す量に合った置き場所を考えてください。多くの場合、今ある収納に収まる量まで減らすことができます。収納を増やすほど片付かなくなる理由は、関連記事で扱っています。",
  },
];

const judgeSigns = [
  "バッグだけでなく、衣類や小物も含めてクローゼットや部屋全体があふれている",
  "実家や故人の家に、バッグや衣類が大量に残っていて、一人では確認しきれない",
  "引っ越しや退去の期限があり、衣類やバッグを含めた家財を短期間で減らす必要がある",
  "スーツケースなど大きい物が複数あり、自分では運び出せない",
  "体調や時間の都合で、集めて分けて出すまでの作業を自分で進める余裕がない",
];

const faqs = [
  {
    q: "革のバッグは、どう処分すればよいですか？",
    a: "革のバッグの分別区分は自治体によって異なり、可燃ごみになる場合と、金具や大きさによって別の区分になる場合があります。お住まいの市区町村の分別案内で確認してください。状態がよい物は、買取や譲渡の対象になることがあります。査定の基準は店舗や事業者によって異なりますので、受け付けている品目と条件を事前に確認してください。",
  },
  {
    q: "古いスーツケースは、どう手放せばよいですか？",
    a: "スーツケースは、大きさや素材によって粗大ごみとして申し込みが必要なことが多く、扱いは自治体によって異なります。品目と大きさを書き出して、お住まいの市区町村の分別案内で確認してください。キャスターや持ち手が壊れていない物は、買取や譲渡の対象になることもあります。運び出せない場合は、搬出を含めて業者に依頼する方法もあります。",
  },
  {
    q: "エコバッグや付録のバッグが大量にあります。どこまで残せばよいですか？",
    a: "買い物用として実際に使う数を上限にし、それを超える分は手放す候補にします。自分で選んで買った物ではないバッグは、暮らしの中で使う理由が薄く、実際にはほとんど使われないことが多いものです。状態がよい物は、知人に譲る、寄付を受け付けている団体に相談する方法もあります。受け入れの条件は団体によって異なりますので、事前に確認してください。",
  },
  {
    q: "ブランドのバッグは、売ったほうがよいですか？",
    a: "使っていないブランドのバッグは、状態がよいうちに査定に出すという選択肢があります。査定の基準や金額は、ブランド、素材、状態、付属品の有無、事業者によって異なり、この記事では特定の金額を示していません。複数の店舗や事業者で比べる、付属品や保証書をそろえておく、汚れを落としておく、といった準備をしてから査定に出してください。売れなかった場合の扱いも先に決めておくと、保留が増えません。",
  },
];

const related = [
  { href: "/irui-seiri/", label: "衣類の仕分けと処分", desc: "残す服と手放す服の基準" },
  { href: "/irui-takuhai-kaitori/", label: "衣類の宅配買取の使い方", desc: "宅配買取の流れと向き不向き" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップの買取と併用", desc: "売れる物と処分する物の分け方" },
  { href: "/oshiire-closet-seiri/", label: "押し入れ・クローゼットの整理", desc: "上段や奥にしまい込んだ物の見直し" },
  { href: "/genkan-getabako-seiri/", label: "玄関・下駄箱の片付け", desc: "靴と外まわり用品を減らす基準" },
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
    { "@type": "ListItem", position: 2, name: "バッグ・かばんの整理と処分" },
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
    { href: "#kiso", label: "1｜バッグ・かばんが増える3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「用途の上限」と「一年使ったか」の二つの軸で考える" },
    { href: "#steps", label: "4｜バッグ・かばんを整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "バッグ・かばんの整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          バッグ・かばんの整理と処分｜使わないバッグを手放す基準と素材別の処分の考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月8日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          クローゼットの上段に紙袋のまま積まれたバッグ、玄関のフックに掛かったままのエコバッグ、旅行のたびに増えたスーツケースとボストンバッグ、イベントでもらった記念のトートバッグ、雑誌の付録のポーチ。バッグやかばんは一つひとつが場所を取るのに、「高かった」「まだきれい」「いつか使う」という理由で手放しにくく、用途ごとに増えた結果、気付くと二桁の数になっていることが珍しくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、バッグが増える理由、用途ごとの上限と「この一年で使ったか」で残す物を決める考え方、家中から集めて4つに分ける手順、革・金属・キャスター付きなど素材や構造で分かれる処分の考え方、売る・譲るという選択肢、残すバッグの保管の仕方を順に解説します。衣類全体の仕分けや靴の整理は別の記事で扱っており、この記事はバッグとかばんに絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>用途ごとに「残す数」の上限を決め、「この一年で使ったか」を軸に残す物を絞る</li>
          <li>「高かった」「まだきれい」は残す理由にならない。状態がよいうちに売る・譲るを考える</li>
          <li>革製・金具の多い物・スーツケースは区分が分かれる。自治体の分別案内で確認してから出す</li>
          <li>手放す前に全部のポケットを確認する。減らす前に収納を買い足さない</li>
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

      <H2 id="kiso" num="1">バッグ・かばんが増える3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        一つひとつの購入には理由があるからこそ、増えていることに気付きにくい品目です。増える構造を知ると、残す基準が決めやすくなります。
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
        上限、基準、行き先。この三つを先に決めておくと、集めたあとの判断が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「用途の上限」と「一年使ったか」の二つの軸で考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        バッグの整理は、「用途ごとに何個まで残すか」という上限と、「この一年で使ったか」という基準の二つの軸で考えると、迷う時間が大きく減ります。上限は、自分の暮らしに実際にある用途を書き出し、それぞれに具体的な数を当てはめて決めます。同じ用途のバッグが上限を超えている場合は、「どれを残すか」を比べて決めます。比べるときは、見た目や買った金額ではなく、重さ、持ちやすさ、中身の出し入れのしやすさ、今の服装との相性など、実際に使う場面での使いやすさで判断します。一年使わなかったバッグは、次の一年も使わない可能性が高く、上限を超えている場合は手放す候補になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        バッグの整理は、衣類の整理と同じ考え方で進められます。衣類の残す基準と手放す基準は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の仕分けと処分方法</Link>で扱っており、バッグも同じ日に合わせて進めると、クローゼット全体の見通しがよくなります。クローゼットの上段や押し入れの奥に紙袋のまましまい込んだバッグが多い場合は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>、玄関に掛けたままのエコバッグや外出用の小物が多い場合は<Link href="/genkan-getabako-seiri/" className="text-primary underline underline-offset-2">玄関・下駄箱の片付け</Link>も参考にしてください。家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        状態のよいバッグは、売る、譲るという選択肢を先に考えます。買取の基準や金額は、ブランド、素材、状態、付属品の有無、事業者によって異なりますので、この記事では特定の金額を示していません。リサイクルショップに持ち込む場合の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの買取と処分の併用</Link>、宅配で査定に出す方法の流れと向き不向きは<Link href="/irui-takuhai-kaitori/" className="text-primary underline underline-offset-2">衣類の宅配買取の使い方</Link>で扱っています。売れるかどうかを理由に残し続けると、保留が増えて減りません。「売れなければ処分する」と先に決めておくことが、バッグの整理を止めないコツです。
      </p>

      <H2 id="steps" num="4">バッグ・かばんを整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集めて並べる→4つに分ける→売る・譲る物を整える→素材と区分を確認して出す→型崩れしない置き方で戻す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">バッグの分別区分と買取の条件は、自治体と事業者の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          革製のバッグ、金具や芯材の多いバッグ、キャスターや金属フレームの付いたスーツケースやキャリーバッグの分別区分、粗大ごみの対象となる大きさは、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。買取や査定の基準、受け付けている品目や条件は店舗や事業者によって異なりますので、事前にご確認ください。寄付や譲渡の受け入れ条件は団体によって異なります。粗大ごみとして申し込む場合の流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみの申し込みの流れ</Link>で扱っています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        バッグのポケットから、現金やカード、鍵、書類が出てくることがあります。特に実家や故人のバッグを整理する場合は、通帳や印鑑、手続きに関わる書類が入っていることがあるため、一つずつ丁寧に確認し、他の物と分けて保管してください。扱いに迷う場合の考え方は<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>、故人の衣類やバッグをまとめて整理する場合の進め方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">遺品の形見分けの進め方</Link>で扱っています。バッグを減らしたあとに置き場所を整えるときは、収納を買い足す前に<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>を参考にしてください。
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
        バッグの整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、残すバッグと売る・譲るバッグは自分で先に取り分けておく必要があります。ポケットの中身の確認も、依頼する前に済ませておきます。買取に対応している業者に依頼する場合は、査定の対象と条件を見積もりの時点で確認してください。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の見方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。革製品・金具の多いバッグ・スーツケースなどの分別区分や粗大ごみの対象は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。買取や査定の基準・条件は店舗や事業者により異なりますので、事前にご確認ください。寄付や譲渡の受け入れ条件は団体により異なります。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
