import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kitchen-shokki-seiri/";
const TITLE = "食器・調理器具の整理｜増えすぎた台所用品を減らす基準と処分方法";
const DESC =
  "食器棚に入りきらない皿、同じサイズの鍋やフライパン、フタの合わない保存容器——キッチンは物が増えやすい場所です。食器が増える経路、家族の人数と食事スタイルから普段使う枚数を逆算する考え方、来客用食器と調理器具の重複の見直し、未使用の引き出物の活かし方、陶磁器・ガラス・金属など素材別の処分区分の確認方法、割れ物や刃物を安全に出す手順、減らした後の収納までを解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "食器は「買っていないのに増える」——増加経路を知る",
    body: "衣類や本と違い、食器は自分で買った覚えがないのに増えていく物の代表です。結婚式や法要の引き出物、景品や粗品、実家や親戚からの持ち込み、来客用にと買い足したセット、子どもの成長で役目を終えたプレート——こうした経路で少しずつ積み上がります。しかも一枚あたりが小さく、増えた実感を持ちにくいのが厄介な点です。まずは「自分の意思とは無関係に入ってくるルートがある」と認識することが、量をコントロールする出発点になります。買わない努力だけでは減らない、という前提に立ちましょう。",
  },
  {
    title: "調理器具は「重複」がたまる——同じ用途の物が並んでいないか",
    body: "調理器具で起きやすいのは、同じ用途の物が複数そろってしまう重複です。ほぼ同じ直径の鍋が二つ、コーティングが劣化したフライパンと買い替えた新しいフライパンが並ぶ、使わなくなった調理家電が棚の一段を占める、保存容器は数はあるのにフタと本体が合わない——どれもよくある光景です。重複した器具は場所を取るだけでなく、探す手間を増やして調理の動線を悪くします。「用途が同じ物は何個あるか」という視点で並べ直すと、減らす対象がはっきり見えてきます。",
  },
  {
    title: "この記事は「量を減らす整理」——油汚れの清掃とは分けて考える",
    body: "キッチンの片付けには、物の量を減らす整理と、コンロや換気扇の油汚れを落とす清掃という二つの作業があります。この二つを同時にやろうとすると、手が止まって一日が終わってしまいがちです。この記事が扱うのは前者、つまり食器と調理器具の量を減らす整理です。油汚れの落とし方や換気扇の手入れについては、キッチン・コンロの掃除の記事で解説しています。順番としては、物を減らして作業面を広げてから清掃に進むほうが、道具も動かしやすく効率的です。",
  },
];

const merits = [
  {
    title: "考え方1：普段使う枚数を、家族の人数と食事スタイルから逆算する",
    body: "残す量を決める土台は「普段の食卓に何枚必要か」です。家族の人数に、一食で使う皿の枚数（大皿・小皿・汁椀・茶碗など種類ごと）を掛け、洗い替えの余裕を一巡分足す、という考え方が扱いやすいでしょう。外食や中食が多い家庭、逆に作り置きを多用する家庭では必要枚数が変わるため、暮らし方に合わせて調整します。この数字を先に出しておくと、「この皿は残す枚数の内側か外側か」という判断ができるようになり、一枚ずつ迷う時間が大きく減ります。",
  },
  {
    title: "考え方2：来客用の食器は「実際の来客頻度」で見直す",
    body: "来客用として取り分けた食器は、見直しの効果が出やすい領域です。ここ数年で来客が何回あったか、そのとき何人分を使ったかを思い出してみてください。年に数回・数人という実態に対して、十客そろいのセットが二組しまわれている、というずれはよくあります。来客時は普段使いの食器で足りることも多く、足りない分は取り皿を兼用する、レンタルや使い捨ての器を活用する、という選択肢もあります。使う予定の見通しが立たないセットは、状態のよいうちに手放したほうが活かせます。",
  },
  {
    title: "考え方3：未使用品や箱入りの引き出物は、売却・譲渡・寄付で活かす",
    body: "箱に入ったままの引き出物の食器や、一度も使っていない未使用の調理器具は、捨てるには惜しく、かといって使う予定もない——という理由で長く滞留しがちです。ブランドや作家物、シリーズでそろっている物は中古でも需要があることがあり、フリマアプリやリサイクルショップで引き取り手が見つかる場合があります。売るほどではない物も、地域の譲渡掲示板や知人への声かけ、団体によっては寄付という選択肢があります。買取の使い方はリサイクルショップ・買取の併用の記事を参考にしてください。",
  },
];

const steps = [
  {
    title: "食器棚と引き出しから全部出し、種類ごとに並べる",
    body: "最初の作業は、食器棚・吊戸棚・シンク下・引き出しから中身をすべて出し、種類ごとに床やテーブルに並べることです。大皿は大皿、汁椀は汁椀、鍋は鍋、と用途でまとめると、重複と総量が一目で分かります。全部を一日でやろうとせず、今日は食器棚の上段だけ、と区切って進めても構いません。並べる場所には敷物を用意し、割れ物を直に置かないようにしてください。この「見える化」の工程を飛ばすと、判断が感覚頼りになり、結局どれも減らせないまま終わりがちです。",
  },
  {
    title: "普段使いの一軍を先に選び、残りを候補に回す",
    body: "並べた中から、まず普段使っている一軍を選び出します。捨てる物を探すのではなく、使っている物を拾い上げる順番のほうが手が進みます。先に出した必要枚数を目安に、よく使う皿・気に入っている器・出番の多い鍋を確保してください。残った物が見直しの候補です。この段階で、欠けやひび、コーティングがはがれたフライパン、取っ手がぐらつく鍋など、状態に不安がある物には印を付けておきます。判断の全体的な進め方は片付けの順番の記事も参考になります。",
  },
  {
    title: "調理器具の重複と、保存容器のフタの組み合わせを点検する",
    body: "次に調理器具です。同じくらいのサイズの鍋やフライパンが複数あるなら、使用頻度と状態で残す物を絞ります。使っていない調理家電は、この一年で何回使ったかを目安にしてください。保存容器は本体とフタを一つずつ突き合わせ、相手のいない本体・フタを取り除くだけでも引き出しに余裕が生まれます。ざる・ボウル・菜箸などの小物も、同じ用途で何個必要かを決めておくと迷いません。ここで出た不用品の行き先は不用品の処分ルートの使い分けの記事で整理しています。",
  },
  {
    title: "素材別に自治体の分別区分を確認し、安全に梱包して出す",
    body: "手放すと決めた物は、素材ごとに区分が分かれます。陶磁器、ガラス、耐熱ガラス、金属の鍋、樹脂製の容器、コーティングが劣化したフライパンなど、それぞれ扱いが異なるため、必ずお住まいの自治体の分別案内で品目名を検索して確認してください。同じガラスでも食器用と耐熱用で区分が分かれる地域があります。割れ物は新聞紙で包む、厚紙で覆う、袋に「危険」「割れ物」と明記するなど、自治体が示す方法に従って出しましょう。区分に迷う物が多いときは分別が難しいゴミの出し方の記事も参考になります。",
  },
  {
    title: "減った量に合わせて収納し直し、戻りやすい状態を作る",
    body: "最後に、残した物を収納し直します。重ねすぎると下の皿が使われなくなるため、一種類あたりの重ねる枚数を抑え、よく使う一軍は腰から目の高さの取り出しやすい位置に置きます。奥行きのある棚は手前を空けて、奥に押し込まない運用にすると出し入れが楽です。鍋やフライパンは立てて仕切ると取り出しやすくなります。収納用品は残す量が決まってから採寸して買うのが順番で、先に買うと合わないことが多くなります。詳しくは収納グッズの買いすぎの記事をご覧ください。",
  },
];

const ngActions = [
  {
    title: "欠けた食器を「まだ使える」と棚に戻してしまう",
    body: "縁が欠けた皿やひびの入った器は、口や指を切る心配があり、ひびから水が入って衛生面でも扱いにくくなります。それでも「まだ使えるから」と棚に戻してしまうと、実際には使われないまま場所だけを占め続けます。使わないと分かっている物を残すことが、食器棚が片付かない大きな理由です。思い入れのある器は、小物入れや鉢の受け皿として役割を変える方法もありますが、その用途を今すぐ言えないなら手放す判断のほうが暮らしは軽くなります。",
  },
  {
    title: "割れ物をそのまま袋に入れて出す",
    body: "皿やコップを何も包まずにごみ袋へ入れると、袋が破れて中身が飛び出し、収集作業をする人がけがをする危険があります。割れた破片は特に鋭く、袋越しでは見えません。多くの自治体は、新聞紙や厚紙で包む、丈夫な袋や箱に入れる、外側に「危険」「割れ物」と表示する、といった出し方を案内しています。表示の文言や包み方の指定は地域で異なるため、必ずお住まいの自治体の案内を確認し、その指示に従ってください。安全に関わる部分は自己流にしないことが大切です。",
  },
  {
    title: "包丁やキッチンばさみを普通ごみにそのまま入れる",
    body: "包丁、ペティナイフ、キッチンばさみ、ピーラーの刃、串などの刃物も、そのまま袋に入れるのは避けてください。刃物は自治体ごとに、厚紙で刃を包む、新聞紙でくるむ、「刃物」と明記する、といった出し方が定められていることが一般的です。区分そのものが不燃ごみや金属類、危険物など地域で分かれることもあります。処分の前に必ず自治体の案内で「包丁」「刃物」の項目を確認しましょう。使える状態の包丁は、研ぎ直して使い続ける、譲るという選択肢もあります。",
  },
  {
    title: "減らす前に食器棚や収納用品を買い足す",
    body: "入りきらないからと、先に食器棚やラック、カゴを買い足すのは慎重に考えたいところです。収納が増えると、その分だけしまえてしまい、食器と調理器具はさらに増えます。キッチンは作業スペースの広さが使いやすさを左右する場所なので、家具が増えるほど調理の動線は窮屈になります。順番は「減らす、測る、それでも足りなければ買う」です。既にある大型の食器棚を手放したい場合は、大型家具の処分ガイドで搬出と処分の流れを確認してください。",
  },
];

const judgeSigns = [
  "食器や調理器具に加えて、キッチン全体に不用品がたまり自力では片付かない",
  "大型の食器棚やカップボードの解体・搬出が体力的に難しい",
  "引っ越しや退去の期限までにキッチン一式を処分する必要がある",
  "実家のキッチンに食器が大量にあり、量が多すぎて手が付けられない",
  "割れ物や刃物が多く、安全に仕分け・搬出できる自信がない",
];

const faqs = [
  {
    q: "食器は何枚くらい残すのが目安ですか？",
    a: "一律の正解はなく、家族の人数と食事のスタイルで変わります。考え方としては、種類ごとに「一食で使う枚数×人数」を出し、洗い替えの余裕を一巡分足した枚数が目安になります。外食や中食が多い家庭は少なめ、作り置きや来客が多い家庭は多めと調整してください。数字を先に決めておくと、一枚ずつ迷わずに判断できるようになります。",
  },
  {
    q: "陶磁器の食器は何ごみとして出せばよいですか？",
    a: "自治体により異なります。陶磁器は不燃ごみや埋立ごみとして扱われることが多い一方、ガラスや金属とは別区分になる地域もあり、耐熱ガラスは通常のガラスと分けて案内されることがあります。量が多い場合や大皿の場合は別の扱いになることもあります。必ずお住まいの自治体の分別案内で「食器」「陶磁器」などの品目名を検索し、出し方と包み方を確認してください。",
  },
  {
    q: "使わない引き出物の食器は、捨てるしかないのでしょうか？",
    a: "捨てる以外の道もあります。箱入りの未使用品、ブランド物、シリーズでそろっている物は中古でも需要があることがあり、フリマアプリやリサイクルショップで引き取られる場合があります。売却が難しい物でも、地域の譲渡掲示板や知人への声かけ、受け入れ先によっては寄付という方法があります。買取や譲渡と処分の組み合わせ方は、リサイクルショップ・買取の併用の記事で解説しています。",
  },
  {
    q: "キッチンの油汚れの掃除も同時にやったほうがよいですか？",
    a: "同時進行はおすすめしにくく、まず物を減らしてから掃除に進むほうが進めやすいでしょう。物が載ったままでは作業面を拭けず、途中で手が止まりやすいためです。棚や引き出しが空いた状態なら、内側まで拭き上げられて仕上がりも変わります。コンロや換気扇の油汚れの落とし方は、キッチン・コンロの掃除の記事にまとめています。",
  },
];

const related = [
  { href: "/kitchen-konro-seisou/", label: "キッチン・コンロの掃除", desc: "油汚れと換気扇の手入れ" },
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "挫折しない片付けの進め方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミの出し方", desc: "区分に迷う物の考え方" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップ・買取の併用", desc: "売れる物を活かして手放す" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルートの使い分け", desc: "自治体・買取・業者の選び方" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "収納を増やす前に考えたいこと" },
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
    { "@type": "ListItem", position: 2, name: "食器・調理器具の整理と処分方法" },
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
    { href: "#kiso", label: "1｜キッチンの物が増えていく理由" },
    { href: "#merit", label: "2｜減らす量を決める3つの考え方" },
    { href: "#houshin", label: "3｜整理と清掃を分ける全体方針" },
    { href: "#steps", label: "4｜食器・調理器具を減らす5ステップ" },
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

      <Breadcrumb items={[{ label: "食器・調理器具の整理と処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          食器・調理器具の整理｜増えすぎた台所用品を減らす基準と処分方法
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          食器棚の扉が閉まりにくい、シンク下に同じような鍋が並んでいる、引き出しには相手のいない保存容器のフタばかり——キッチンは、意識して買っていなくても物がたまっていく場所です。引き出物や景品、実家からの持ち込みなど、自分の意思とは別のルートから食器が入ってくるのも、この場所の特徴です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、キッチンの「物の量」を減らすことに絞って、普段使う枚数の逆算のしかた、来客用食器と調理器具の重複の見直し、未使用品の活かし方、素材別の処分区分の確認方法、割れ物や刃物を安全に出す手順、そして減らした後の収納までを順に解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>食器は買わなくても増える。増加経路を知り、残す枚数を先に決めるのが近道</li>
          <li>普段使う枚数は「一食で使う枚数×人数＋洗い替え一巡分」で逆算する</li>
          <li>調理器具は重複を洗い出し、保存容器は本体とフタの組み合わせを点検する</li>
          <li>処分は素材別に自治体の分別案内で確認。割れ物と刃物は指示どおりに包んで出す</li>
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

      <H2 id="kiso" num="1">キッチンの物が増えていく理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        減らす作業に入る前に、なぜキッチンだけ物が増えやすいのかを整理しておきましょう。原因が分かると、どこから手を付けるかが決まります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">減らす量を決める3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「何を捨てるか」で悩む前に、「どれだけ残すか」を決めるほうが判断は速くなります。その土台になる3つの考え方です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">整理と清掃を分ける全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        キッチンの片付けがうまくいかないときは、量を減らす整理と、汚れを落とす清掃を同時にやろうとしていることが少なくありません。棚から食器を出しながら換気扇の油汚れが気になり、洗剤を探しているうちに出した食器が床に広がったまま夕方になる——よくある行き詰まり方です。この記事の方針はシンプルで、まず量を減らし、作業面と棚の内側が空いてから清掃に進むという順番を守ることです。物が減ればふきんも手も動かしやすく、清掃そのものが短時間で終わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        コンロ・換気扇の油汚れの落とし方は<Link href="/kitchen-konro-seisou/" className="text-primary underline underline-offset-2">キッチン・コンロの掃除</Link>の記事にまとめています。家全体の片付けをどの部屋から進めるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">食器・調理器具を減らす5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、全部出す→一軍を選ぶ→調理器具を点検する→素材別に処分する→収納し直す、の5ステップです。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4 mt-6">
        処分先の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルートの使い分け</Link>、区分に迷う物は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>、売れそうな物は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>を参考にしてください。食器棚など大型の家具を一緒に手放す場合は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>も確認しておくと段取りが組みやすくなります。
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
        食器と調理器具の整理は自力で進めやすい作業ですが、次のような状況では片付け・不用品回収業者の力を借りるほうが現実的です。対応できる業者は<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。料金は物量・間取り・地域により異なるため、複数社を比較すると判断しやすくなります。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。食器・調理器具・刃物の分別区分、割れ物の包み方や表示の方法、粗大ごみの基準や手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
