import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/jikka-shokkidana-butsugu/";
const TITLE = "実家の食器棚と仏具の整理｜中身の仕分けと扱いに迷う物の考え方";
const DESC =
  "実家の片付けでとくに手が止まりやすいのが、来客用の食器がぎっしり詰まった食器棚と、仏壇まわりの仏具です。食器棚の中身を仕分ける基準と割れ物の扱い、家具本体の搬出、そして仏具の扱い（宗派・地域・家の考え方により異なります）と相談先の探し方を、順を追って整理します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "来客用の食器が、使われないまま何十年も残っている",
    body: "実家の食器棚を開けると、箱に入ったままの湯呑みのセット、引き出物の皿、揃いの鉢や大皿が並んでいることがよくあります。かつては親戚や近所の人が集まる機会が多く、人数分の器を備えておくことに意味がありました。しかし住む人数が減り、集まる機会も変わった今、その多くは何年も使われないまま棚を占めています。これは持ち主の判断が悪かったのではなく、暮らし方の変化に収納が追いついていないだけです。まずはその前提を家族で共有すると、責める空気にならずに話を始められます。",
  },
  {
    title: "食器棚そのものが重く、単独では動かせない",
    body: "食器棚は、上下が分かれる二段式、背の高い一体型、引き戸のカップボードなど形がさまざまですが、共通して重量があります。中身が入ったままでは動かせず、空にしても大人二人でやっと、という物も少なくありません。ガラス戸が付いていれば運搬中の破損の危険もありますし、地震対策の固定金具が壁や天井に付いていることもあります。中身の仕分けと家具本体の搬出は別の作業だと考え、それぞれ段取りを分けて進めるのが安全です。",
  },
  {
    title: "仏具は「物として処分してよいか」の判断が家族で割れやすい",
    body: "仏壇、位牌、仏具、掛け軸、神棚といった物は、ほかの家財と同じ物差しでは測れません。扱い方の考え方は宗派・地域・寺社・家の慣習によって異なり、全国共通の正解と呼べるものはありません。だからこそ、家族の間でも意見が分かれ、片付けがそこで止まりやすくなります。急いで結論を出そうとせず、まず「誰に確認すればよいか」を決めることが第一歩です。菩提寺や地域の寺社、宗派の窓口など、その家がこれまで関わってきた先に相談するのが現実的な出発点になります。",
  },
];

const merits = [
  {
    title: "食器の基準：今の暮らしで実際に食卓に出るか",
    body: "食器の仕分けで迷ったときは、「価値があるか」ではなく「今の食卓に出るか」で考えると進みます。親御さんが今も暮らしている家なら、日常で使う枚数は限られています。来客用として取ってあるセットについては、直近で使った記憶があるかを本人に確認してください。何年も出番がない物については、残す枚数の上限を先に決めておくと選びやすくなります。数を減らすことが目的ではなく、使う物が取り出しやすい状態にするのが目的だと伝えると、話が前に進みやすくなります。",
  },
  {
    title: "食器の基準：割れ・欠け・変色は安全と衛生の観点で見る",
    body: "長く使われた食器には、縁の欠け、貫入と呼ばれる細かなひび、金彩のはがれ、プラスチック製品の変色や変形などが見られます。欠けた縁は口や手を切るおそれがありますし、ひびから水分がしみ込んだ器は衛生面でも不安が残ります。こうした物は「もったいない」より「安全に使えるか」を基準に判断してください。持ち主が思い入れを語る物については、無理に処分へ誘導せず、飾る物として残す、写真に残すといった選択肢も一緒に検討すると納得を得やすくなります。",
  },
  {
    title: "仏具の基準：本人と家族の意向を先に確認する",
    body: "仏具に関しては、片付けの手順よりも先に確認すべきことがあります。誰が今後お参りを続けるのか、住まいを移すのか、承継する人がいるのかという点です。これは物の量とは関係のない、家族の話し合いの領域です。そのうえで、扱い方については菩提寺や地域の寺社、宗派の案内に沿って進めるのが基本になります。扱い方や作法、必要な手続きは宗派・地域・寺社によって異なるため、この記事で断定することはできません。相談先が分からない場合は、親族に過去の経緯を聞くところから始めてください。",
  },
];

const steps = [
  {
    title: "親御さんや家族に、進め方と時間を先に伝えて合意を取る",
    body: "実家の片付けでもっとも大切なのは、作業そのものより最初の合意です。突然始めると、持ち主である親御さんは自分の暮らしを否定されたように感じ、以後の協力が得られなくなります。「食器棚の使いやすさを一緒に見直したい」「今日は棚の一段だけ」というように、目的と範囲を小さく具体的に伝えてください。仏具については、その日は触らないと決めて伝えておくほうが安心してもらえます。当日の主役はあくまで持ち主で、こちらは手伝う側だという姿勢を最後まで保ちましょう。",
  },
  {
    title: "食器棚の中身を段ごとに出し、種類別に並べる",
    body: "棚全体を一気に空にすると、床が割れ物で埋まり危険です。上段から一段ずつ、あるいは引き出し一つずつを取り出し、テーブルや床に敷いた毛布の上へ種類別に並べてください。茶碗、湯呑み、皿、鉢、グラス、来客用のセット、保存容器、といった単位でまとめると重複が見えます。並べる過程で、箱に入ったままの未使用品や、二重三重に持っている物が出てくるはずです。手が滑りやすいので軍手より薄手の作業手袋が扱いやすく、足元にはスリッパではなく底のしっかりした靴を用意しておくと安全です。",
  },
  {
    title: "「毎日使う・時々使う・使っていない」に分ける",
    body: "並べた食器を、毎日使う物、行事や来客のときに使う物、何年も使っていない物の三つに分けます。判断するのは持ち主です。手伝う側は「これは最近使いましたか」と事実を尋ねる役に徹してください。使っていない物のなかにも、思い入れのある品や作家物、まだ箱入りの贈答品が混ざります。それらは一度「保留」の箱に入れ、後でまとめて相談する形にすると作業が止まりません。残すと決めた物は、よく使う物ほど取り出しやすい高さの段に戻し、重い大皿は下段に置くと日々の負担が減ります。",
  },
  {
    title: "手放す食器の行き先を分け、割れ物として安全にまとめる",
    body: "手放すと決めた食器は、状態と種類で行き先を分けます。未使用の贈答品や作家物、ブランド食器は買取や譲渡の対象になることがあります。日常使いの器で状態がよい物は、地域の譲渡の仕組みが使える場合もあります。それ以外は自治体のルールに従って処分しますが、陶磁器・ガラス・耐熱ガラス・金属製の保存容器では分別区分が異なることが多く、包み方や袋の指定がある自治体もあります。品目名で自治体の分別案内を確認し、運ぶ際は厚紙や新聞紙で包んで箱にまとめ、外側に中身が割れ物であることを書いておきましょう。",
  },
  {
    title: "仏具は扱いを決めず、まず相談先を確保する",
    body: "仏壇・位牌・仏具・神棚については、その日のうちに結論を出そうとしないでください。手順としては、まず現状を写真で記録し、家族の誰が今後お参りを担うのかを確認します。そのうえで、菩提寺や地域の寺社、宗派の案内窓口へ扱い方を相談します。作法や必要な手順、費用の有無は宗派・地域・寺社により異なるため、複数の考え方があることを前提に聞いてください。相談先が定まるまでは、ほこりを払って現状のまま安置しておけば十分です。家具としての運び出しが必要な段階になってから、業者に対応可否を確認しましょう。",
  },
];

const ngActions = [
  {
    title: "親御さんのいないところで、食器を勝手に処分する",
    body: "手っ取り早く見えますが、実家の片付けでもっとも避けたい行動です。使っていないように見えても、本人にとっては行事のときに必要な物だったり、亡くなった家族との記憶に結び付いていたりします。無断で処分すると強い不信感が残り、以後は棚を開けることすら拒まれるようになります。作業が進まないのはもどかしいものですが、判断の権限は持ち主にあります。時間をかけてでも本人の同意を得て進めるほうが、結果として片付けは早く終わります。",
  },
  {
    title: "食器棚を、中身が入ったまま動かそうとする",
    body: "少しずらすだけのつもりでも、中身の入った食器棚は重心が高く、扉が開いて中の物が飛び出したり、家具ごと傾いたりする危険があります。とくに二段式の食器棚は上下の連結が外れることがあり、上段だけが落ちる事故につながります。動かす前に必ず中身を空にし、上下は分離できるかを確認してください。転倒防止の金具が壁や天井に取り付けられている場合は、外し方を確認してから作業します。二人以上で持てないと感じたら、無理をせず搬出は業者に任せる判断が安全です。",
  },
  {
    title: "仏具の扱いを、家族や寺社に確認せず自己判断で決める",
    body: "仏壇や位牌、仏具の扱いは、宗派・地域・寺社・家の考え方によって大きく異なります。ある家庭で行われている手順が、別の家庭でも同じとは限りません。よく確認しないまま処分してしまうと、後から親族の間で強い反発が生じ、修復の難しい行き違いになることがあります。急いで決めなければならない物ではありませんので、まず家族に意向を聞き、次に菩提寺や地域の寺社に相談してください。相談先が分からない場合でも、親族に過去の経緯をたどると手がかりが見つかることがあります。",
  },
  {
    title: "割れ物を袋にまとめて詰め込む",
    body: "食器をまとめて袋に入れると、運ぶ途中で割れて袋を突き破り、手や足を切るおそれがあります。収集する人が怪我をする危険もあります。陶磁器やガラス製品は、一枚ずつ新聞紙や厚紙で包み、段ボール箱に入れて重くなりすぎない量に分けてください。箱の外側には中身が割れ物であることを書いておきます。出し方の指定は自治体によって異なり、指定袋や品目区分が細かく定められている地域もあります。判断に迷う品目が多いときは、分別の調べ方を扱った記事も参考にしてください。",
  },
];

const judgeSigns = [
  "食器棚やタンスなど大型の家具が複数あり、自力で運び出せない",
  "食器の点数が多く、自治体の回収だけでは期限までに出しきれない",
  "遠方に住んでいて、実家に通える日数が限られている",
  "親御さんが高齢で、重い物を運ぶ作業を任せられない",
  "住まいの引き渡しや退去の期限が決まっている",
];

const faqs = [
  {
    q: "使っていない来客用の食器が大量にあります。どう判断すればよいですか？",
    a: "まず持ち主である親御さんに、直近でいつ使ったかを尋ねてください。そのうえで「残す枚数の上限」を先に決めると選びやすくなります。たとえば来客用は五客そろいを一組だけ残す、といった形です。未使用の贈答品や作家物は買取や譲渡の対象になることがあるため、処分の前に確認するとよいでしょう。数を減らすこと自体を目的にせず、使う物が取り出しやすくなる状態を目指すと話が進みやすくなります。",
  },
  {
    q: "仏壇や仏具はどのように扱えばよいですか？",
    a: "扱い方や作法は宗派・地域・寺社・家の考え方によって異なるため、一般的な正解を示すことはできません。まずご家族で、今後どなたがお参りを担うのかを確認してください。そのうえで、菩提寺や地域の寺社、宗派の案内窓口に相談し、その家に合った進め方を教えてもらうのが現実的です。相談先が分からない場合は、親族に過去の経緯を聞くところから始めましょう。仏壇・神棚の整理については別記事でも扱っています。",
  },
  {
    q: "食器棚を運び出したいのですが、玄関から出せるか不安です。",
    a: "搬出経路の確認は事前にしておくと安心です。家具の幅・奥行き・高さを測り、廊下の幅、扉の開口部、階段の折り返し、エレベーターの寸法と比べてください。二段式の食器棚は上下に分離できることが多く、分けるだけで通せる場合があります。分解できない一体型で経路が狭い場合は、養生や搬出の方法を含めて業者に相談するのが確実です。大型家具の搬出については関連記事でも解説しています。",
  },
  {
    q: "親が食器を手放すことに強く抵抗します。どうすればよいですか？",
    a: "抵抗があるときは、処分を目的にした話し合いを一度止めるのが得策です。「使いやすくする」「取り出しやすい高さに移す」といった目的に切り替え、量ではなく配置の改善から始めてください。日々の暮らしが楽になる実感が得られると、後から本人の側で判断が動くことがあります。急かさず、一段ずつ、時間をかけて進めるのが結果的に近道です。親御さんへの声かけの工夫は関連記事でも詳しく扱っています。",
  },
];

const related = [
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/butsudan-kamidana-seiri/", label: "仏壇・神棚の整理", desc: "宗派・地域により異なる扱いの考え方" },
  { href: "/kitchen-shokki-seiri/", label: "食器・調理器具の整理", desc: "仕分けの基準と割れ物の扱い" },
  { href: "/oya-settoku-katazuke/", label: "親への声かけと進め方", desc: "本人を尊重しながら促す方法" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない家具の搬出と選択肢" },
  { href: "/ihin-katamiwake-susumekata/", label: "形見分けの進め方", desc: "時期・順番・渡し方の考え方" },
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
    { "@type": "ListItem", position: 2, name: "実家の食器棚と仏具の整理" },
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
    { href: "#kiso", label: "1｜食器棚と仏具で手が止まる理由" },
    { href: "#merit", label: "2｜仕分けの判断基準" },
    { href: "#houshin", label: "3｜作業の順番と安全の確保" },
    { href: "#steps", label: "4｜整理を進める5ステップ" },
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

      <Breadcrumb items={[{ label: "実家の食器棚と仏具の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          実家の食器棚と仏具の整理｜中身の仕分けと扱いに迷う物の考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          実家の片付けを進めていると、途中で必ずといってよいほど手が止まる場所があります。一つは、箱入りの湯呑みや引き出物の皿がぎっしり詰まった食器棚。もう一つは、仏壇まわりの仏具や神棚です。どちらも「まだ使える」「勝手に決めてよいのか」という迷いが重なり、判断が先送りになりやすい領域です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、食器棚の中身を安全に仕分ける基準と割れ物の扱い、食器棚本体を動かすときの注意点、そして仏具について家族や寺社に確認しながら進める考え方を整理します。なお仏具の扱いは宗派・地域・寺社・家の慣習により異なりますので、この記事では一般的な進め方と相談先の探し方までを扱います。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>食器の判断基準は「価値があるか」ではなく「今の食卓に出るか」。残す枚数の上限を先に決める</li>
          <li>食器棚は中身を空にしてから動かす。二段式は上下の連結と転倒防止金具を必ず確認</li>
          <li>仏具の扱いは宗派・地域・寺社・家の考え方により異なる。自己判断で決めず家族と相談先に確認する</li>
          <li>割れ物は一枚ずつ包んで箱にまとめ、外側に中身を明記。分別区分は自治体の案内で確認</li>
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

      <H2 id="kiso" num="1">食器棚と仏具で手が止まる理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実家の片付けは、衣類や書類のように基準を作りやすい領域と、そうでない領域に分かれます。食器棚と仏具は後者の代表格で、量の問題と気持ちの問題が同時に現れます。まず、その構造を理解しておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">仕分けの判断基準</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        食器と仏具では、そもそも当てるべき物差しが違います。食器は使用実態と安全性で、仏具は家族の意向と相談先の案内で判断します。混ぜて考えると、どちらも決まらなくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">作業の順番と安全の確保</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        食器棚の作業は、割れ物を扱う点で家の中でも危険度が高い部類に入ります。始める前に、床に毛布や段ボールを敷いて割れた破片が飛び散らないようにし、足元は底のしっかりした靴にしてください。手袋は厚手の軍手よりも、滑り止めの付いた薄手の作業用手袋のほうが器を持ちやすくなります。棚の上段を扱うときは、椅子ではなく踏み台を使い、体をひねって手を伸ばす姿勢は避けましょう。高齢の親御さんが手伝う場合は、上段と重い物は任せず、座って進められる仕分けの役割をお願いすると安全です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        順番としては、食器棚のような判断が重い場所から始めるのではなく、明らかな不用品や賞味期限の切れた保存食など、迷わず決められる物から手を付けると流れが作れます。実家全体の段取りについては<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>で詳しく解説しています。親御さんが手放すことに抵抗を示す場合の声かけは<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親への声かけと進め方</Link>が参考になります。急かさず、本人の意向を確認しながら進めることが、結果的にいちばん早く終わる方法です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        仏具については、作業日とは切り離して考えてください。その日は触らないと決めて家族に伝えておくと、余計な緊張が生まれません。扱い方の考え方や相談の流れは<Link href="/butsudan-kamidana-seiri/" className="text-primary underline underline-offset-2">仏壇・神棚の整理</Link>で扱っていますが、いずれの場合も宗派・地域・寺社・家の慣習によって異なります。故人の遺品として整理する局面であれば、<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">形見分けの進め方</Link>もあわせて確認しておくと、親族間の話し合いを組み立てやすくなります。
      </p>

      <H2 id="steps" num="4">整理を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、合意を取る→段ごとに出す→三つに分ける→手放す物の行き先を決める→仏具は相談先を確保する、の5ステップです。一日で終わらせようとせず、範囲を区切って進めます。
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
        <h3 className="font-bold text-text-primary mb-2">仏具・宗教にまつわる物は、断定せず相談先に確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          仏壇・位牌・仏具・掛け軸・神棚などの扱いは、宗派・地域・寺社・その家の考え方によって異なります。本記事で全国共通の手順や作法を示すことはできません。まずご家族で今後の担い手を確認し、菩提寺や地域の寺社、宗派の案内窓口に相談してください。相談の結果として家財として運び出す段階になったときは、業者側で取り扱えるかどうかも事前に確認が必要です。宗教的な物の取り扱いに対応しない事業者もあるため、見積もりの段階で伝えておくと行き違いを防げます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        食器の分別については、陶磁器・ガラス・耐熱ガラス・金属といった素材ごとに区分が分かれることが多く、自治体によって指定が異なります。判断に迷う品目が複数あるときは<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>で調べ方を整理しています。食器棚そのものは規定のサイズを超えるため粗大ごみの手続きが必要になるのが一般的で、流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。未使用の贈答品や作家物については<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>で扱いを解説しています。
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
        仕分けは家族で進められても、家具の搬出や大量の割れ物の処分は負担が大きい作業です。次のような状況では、片付け・不用品回収業者への依頼を検討してください。対応できる業者は<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼の際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。遺品整理を伴う場合は、その分野の実績がある事業者を選ぶと進めやすくなります。<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で特徴を比較する方法があります。自治体回収と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で整理しています。
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
        本記事は一般的な知識の提供を目的としたものです。仏壇・仏具・神棚の扱いや作法は宗派・地域・寺社・ご家庭の考え方により異なりますので、菩提寺や地域の寺社、ご親族にご確認ください。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
