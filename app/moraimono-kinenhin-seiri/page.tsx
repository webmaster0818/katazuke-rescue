import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/moraimono-kinenhin-seiri/";
const TITLE = "もらい物・記念品の整理｜引き出物・贈答品・表彰の品を手放す基準と進め方";
const DESC =
  "結婚式の引き出物、お中元やお歳暮、旅行のお土産、表彰の盾、記念のタオルや食器など、自分で選んでいない「もらい物」は、捨てにくさから収納の奥にたまります。手放しにくい理由、贈った人と品物を切り離して考える方法、種類別の仕分けの基準、譲る・売る・寄付する順番、家族のもらい物を扱うときの注意点を解説します。";
const PUBLISHED = "2026-09-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "自分で選んでいないので、手放す判断の基準が自分の中にない",
    body: "自分で買った物は「なぜ買ったか」「いつまで使うつもりだったか」を思い出せるため、手放すときの基準も自分の中にあります。もらい物にはそれがありません。好みで選んだわけでも、必要があって手に入れたわけでもないので、「使うか使わないか」で判断しようとすると、どちらとも決まらないまま棚に戻すことになります。基準が自分の中にないというのが、もらい物が減らない最初の理由です。",
  },
  {
    title: "品物を手放すことが、贈ってくれた人を否定することのように感じられる",
    body: "もらい物には、贈ってくれた人の気持ちが重なって見えます。そのため「捨てる」と考えたとたんに、相手の好意を無下にするような感覚が生まれ、判断が止まります。実際には、贈り物は受け取った時点で相手の気持ちが伝わっており、そのあと品物をどう扱うかは受け取った側に委ねられています。品物と気持ちを切り離して考えられるようになると、判断の負担が大きく軽減されます。似た構造は、関連記事のぬいぐるみ・人形の処分でも扱っています。",
  },
  {
    title: "「来客用」「いつか使う」の名目で、使わないまま保管され続ける",
    body: "箱に入ったままの食器、未開封のタオル、詰め合わせの調味料や菓子、記念のグラスなど、もらい物の多くは「来客があったときに使う」「いつか使う機会がある」という名目で棚の奥にしまわれます。ところがその機会は、実際にはほとんど訪れません。使わないまま年月がたつと、状態が変わったり流行が過ぎたりして、譲ることも売ることも難しくなります。保管の期間が長いほど選べる手放し方が減っていく、という点がもらい物の特徴です。",
  },
];

const merits = [
  {
    title: "決めごと1：「気持ちは受け取った」「品物は自分で決める」と切り分ける",
    body: "整理を始める前に、考え方の土台を決めておきます。贈り物は受け取った時点で相手の気持ちが伝わっており、感謝の気持ちは品物を持ち続けることとは別のものです。品物をどうするかは、受け取った側が自分の暮らしに合わせて決めてよい、という前提に立ちます。この切り分けができていないと、一つひとつで判断が止まります。どうしても判断できない物は無理に決めず、「保留」としてまとめ、判断できる物から先に進めてください。",
  },
  {
    title: "決めごと2：種類ごとに判断の観点を変える",
    body: "もらい物は種類によって判断の観点が異なります。食器やタオルなどの日用品は「今の暮らしで使う数を超えていないか」、食品の詰め合わせは「食べられる期間内に消費できるか」、盾やトロフィー、表彰状などの記念の品は「本人にとっての意味」、お土産や小物は「置き場所を占めるだけになっていないか」が観点となります。すべてを同じ基準で判断しようとすると迷うため、種類ごとに観点を決めておくと、判断が速くなります。",
  },
  {
    title: "決めごと3：手放し方の選択肢を先に並べておく",
    body: "もらい物には未使用・箱入りの物が多く含まれるため、そのまま処分する以外の選択肢が取りやすい分野です。家族や知人に譲る、買取に出す、寄付の受け入れ先を探す、地域の譲り合いの仕組みを使う、といった行き先を先に並べておくと、「捨てるしかない」という抵抗感が小さくなります。ただし、行き先を探す作業に時間がかかって整理そのものが止まることもあるため、「いつまでに決める」という期限もあわせて決めておきます。",
  },
];

const steps = [
  {
    title: "家じゅうのもらい物を一か所に集めて、種類ごとに並べる",
    body: "食器棚の奥、押し入れの上段、納戸、玄関の収納、仏間や客間の棚、クローゼットの天袋など、もらい物は家の複数の場所に分かれて保管されていることがほとんどです。まず思い当たる場所をひと通り開けて、一か所に集めます。集めたら「食器・調理用品」「タオル・寝具類」「食品・飲料」「記念の品（盾・トロフィー・表彰状・記念のグラスなど）」「お土産・小物」「その他」のように種類ごとに並べます。量が多い場合は、食器棚だけ、押し入れだけと場所を区切って進めても構いません。並べて総量を見ることが、判断の出発点になります。",
  },
  {
    title: "食品と、期限のある物を最初に確認して分ける",
    body: "詰め合わせの菓子や調味料、乾物、飲料、洗剤などの消耗品は、期限や状態の確認で機械的に判断できます。判断の重い記念の品より先にこちらを片付けると、量が目に見えて減り、作業の勢いが付きます。期限内で食べられる物は、使う予定を決めて手前に出します。期限が過ぎている物、開封して長くたっている物は分けておきます。食品の見直し方は、関連記事の食品ストック・期限切れ食品の整理で詳しく扱っています。",
  },
  {
    title: "日用品は「今の暮らしで使う数」を決めてから、超えた分を分ける",
    body: "食器、タオル、寝具、調理用品は、もらい物として最も残りやすい品目です。これらは「何枚あるか」ではなく「今の暮らしで使う数はいくつか」から決めます。家族の人数、来客の頻度、洗濯や収納の余裕を考えて数を決め、その数に入る物を選び、超えた分を手放す候補にします。選ぶときは、もらい物かどうかではなく「実際に手が伸びるか」で決めるのがこつです。使っていない食器や調理器具の減らし方は、関連記事の食器・調理器具の整理が参考になります。",
  },
  {
    title: "記念の品は、本人に確認し、形を変えて残す方法も検討する",
    body: "盾、トロフィー、表彰状、記念の楯やメダル、卒業や退職の記念品は、本人にとっての意味が判断のすべてです。家族が代わりに決めず、本人に確認するのが原則です。本人が手放してよいと考えていても、「すべてなくすのは忍びない」という場合は、写真に撮って記録として残す、いちばん意味のある一点だけを残す、台座や付属品を外して小さくまとめるといった方法があります。形を変えて残すという選択肢を先に示すと、判断が進みやすくなります。記録として残す方法の考え方は、関連記事の写真・アルバムの整理とデジタル化で扱っています。",
  },
  {
    title: "手放す物を行き先ごとに分け、期限を決めて実行する",
    body: "手放すと決めた物を、行き先ごとに分けます。未使用・箱入りで状態のよい物は、譲る先を探す、買取に出す、寄付の受け入れ先を探すといった選択肢があります。開封済みで使いかけの物、傷みのある物、ブランドや価値の分からない物は、処分の対象として分けます。この段階では、行き先を探す作業に期限を決めておくことが重要です。「今月中に譲り先が決まらなければ処分に回す」と決めておくと、箱ごと押し入れに戻る事態を防げます。買取の使い方は、関連記事の片付けと買取の併用術でまとめています。",
  },
];

const ngActions = [
  {
    title: "家族がもらった記念の品を、本人に確認せずに処分する",
    body: "盾、トロフィー、表彰状、記念のアルバムなどは、他人から見ればかさばるだけの物でも、本人にとっては人生の節目そのものであることがあります。本人に確認せずに処分すると、片付けそのものへの信頼が失われ、そのあとの作業が進まなくなります。本人が不在の場合や確認が難しい場合は「保留」としてまとめ、判断の機会をつくってください。物を手放したがらない家族への声のかけ方は、関連記事の親に片付けを促す声かけの考え方が応用できます。",
  },
  {
    title: "贈ってくれた相手に、処分することをわざわざ伝える",
    body: "「いただいた物を処分しました」と相手に伝える必要はありません。伝えることで相手を傷つけたり、気を遣わせたりすることがあります。品物をどう扱うかは受け取った側に委ねられており、感謝の気持ちは別の形で伝えられます。同じ相手から同じような物が繰り返し届いて負担になっている場合は、処分の報告ではなく「次の機会からは気を遣わないでほしい」と丁寧に伝える方が、関係と暮らしの双方にとって負担が少なくなります。",
  },
  {
    title: "「いつか使う」で無期限に保管し、状態が変わってから手放す",
    body: "もらい物は、保管している間に選べる手放し方が減っていきます。箱入りの食器は流行が変わり、タオルや寝具は湿気で状態が落ち、食品は期限が過ぎます。未使用のうちなら譲る・売る・寄付するといった選択肢がありますが、状態が変わってしまうと処分するしかなくなります。「いつか使う」と思った時点で、いつまでにその機会が来なければ手放すかを決めておくと、選択肢のあるうちに判断できます。上限を決めて保管する考え方は、関連記事の紙袋・包装材・空き箱のストック整理と共通します。",
  },
  {
    title: "品物の価値を確かめないまま、まとめて処分する",
    body: "もらい物の中には、贈答用の食器や酒類、時計や万年筆、宝飾品、記念の貨幣や切手など、状態によっては買取の対象になる物が混ざっていることがあります。箱や保証書がそろっていれば、そのまま処分するより選択肢が広がります。まとめ袋に入れる前に、箱入り・未使用の物と、ブランド名や刻印のある物は分けておき、必要なら査定を受けてから決めてください。片付けの途中で貴重品が出てきたときの扱いは、関連記事の片付け中に貴重品や現金が出てきたらでまとめています。",
  },
];

const judgeSigns = [
  "箱入りのもらい物が押し入れや納戸を占領し、開けるところから手が回らない",
  "亡くなった家族や実家に、贈答品や記念の品が部屋を埋めるほど残っている",
  "食器・寝具・タオルなど重い物やかさばる物が多く、自分では運び出せない",
  "量が多く、自治体の収集だけでは片付けの期限までに間に合わない",
  "家族の間で残す・手放すの判断が分かれ、作業が止まっている",
];

const faqs = [
  {
    q: "未使用で箱に入ったままのもらい物は、どう手放すのがよいですか？",
    a: "未使用で状態がよい物は、処分する前に選択肢が広く残っています。家族や知人に声をかける、買取に出す、寄付の受け入れ先を探す、地域の譲り合いの仕組みを使うといった方法があり、箱や付属品がそろっているほど話が進みやすくなります。ただし、行き先を探す作業が長引くと整理が止まるため、いつまでに決めるかの期限をあわせて決めておいてください。期限までに決まらなかった物は処分に回す、と最初に決めておくと迷いません。",
  },
  {
    q: "トロフィーや盾、表彰状はどのように処分すればよいですか？",
    a: "トロフィーや盾は、金属、樹脂、石材、木材などが組み合わさっていることが多く、分別の区分が自治体によって異なります。分解できる物は素材ごとに分けられる場合もありますが、無理に壊すとけがのもとになるため、まずお住まいの市区町村の公式案内で扱いを確認してください。処分する前に、本人に確認したうえで写真に撮って記録として残す、いちばん意味のある一点だけを残すといった方法も検討できます。名前や所属が刻まれている物は、そのまま出すことに抵抗がある場合、記載部分が見えないようにしてから出す方もいます。",
  },
  {
    q: "同じ相手から毎年もらい物が届き、使い切れません。どうすればよいですか？",
    a: "受け取った物の量が暮らしに合わなくなっている場合は、処分の工夫よりも、次の機会からの量そのものを見直す方が根本的な対処になります。関係を損なわない伝え方としては、感謝を伝えたうえで「お気遣いは十分いただいたので、今後はどうぞお気遣いなく」と丁寧に伝える方法があります。伝えにくい場合は、届いた物を早めに使い切る、家族や知人と分けるなど、手元に残さない仕組みを作ることをおすすめします。",
  },
  {
    q: "実家にある大量の引き出物や贈答品は、どう進めればよいですか？",
    a: "実家のもらい物は、親にとって「まだ使える物」であり、来客への備えでもあることが多いため、家族の判断だけで減らそうとすると反発を招きやすい分野です。まず一緒に集めて総量を確認し、「今の暮らしで使う数」を一緒に決めるところから始めてください。手放す物も、処分だけでなく、譲る・買取に出すといった選択肢を示すと受け入れられやすくなります。実家の食器棚や仏具まわりの進め方は関連記事で扱っており、親との進め方は実家の片付けの記事が参考になります。",
  },
];

const related = [
  { href: "/kitchen-shokki-seiri/", label: "食器・調理器具の整理", desc: "増えすぎた台所用品を減らす基準" },
  { href: "/kaimono-fukuro-stock/", label: "紙袋・包装材・空き箱のストック整理", desc: "「いつか使う」を上限で区切る考え方" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用術", desc: "処分量と負担を減らす進め方" },
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理とデジタル化", desc: "形を変えて思い出を残す方法" },
  { href: "/jikka-shokkidana-butsugu/", label: "実家の食器棚と仏具の整理", desc: "来客用の食器と扱いに迷う物" },
  { href: "/nuigurumi-ningyou-shobun/", label: "ぬいぐるみ・人形の処分", desc: "気持ちの整理をつけて手放す方法" },
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
    { "@type": "ListItem", position: 2, name: "もらい物・記念品の整理" },
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
    { href: "#kiso", label: "1｜もらい物が手放しにくい3つの理由" },
    { href: "#merit", label: "2｜作業前に決めておく3つの事項" },
    { href: "#houshin", label: "3｜「気持ちと品物を切り離す」「種類ごとに見る」が基本" },
    { href: "#steps", label: "4｜もらい物・記念品を整理する5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への相談を検討すべき状況" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "もらい物・記念品の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          もらい物・記念品の整理｜引き出物・贈答品・表彰の品を手放す基準と進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れの上段に積まれた引き出物の箱、開けないままの詰め合わせ、旅行のたびに増えたお土産の置物、棚に並んだ盾やトロフィー、包装のままのタオルなど、自分で選んで購入した物ではないにもかかわらず、家の収納の多くを占めていることがあります。もらい物は、使わないのに捨てにくいという、片付けの中でも特に判断の難しい分野です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、もらい物が手放しにくくなる理由、贈ってくれた人の気持ちと品物を切り離して考える方法、種類ごとに判断の観点を変える仕分けの基準、譲る・売る・寄付するときの順番と期限の決め方、家族の記念の品を扱うときの注意点までを順に解説します。食器そのものの減らし方や紙袋・包装材の上限の決め方は別の記事で扱っており、本記事は「人からもらって家に残っている物」に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>「気持ちは受け取った」「品物の扱いは自分で決める」と切り分けてから始める</li>
          <li>家じゅうから集めて種類ごとに並べ、期限のある食品から機械的に片付ける</li>
          <li>日用品は「今の暮らしで使う数」を先に決め、超えた分を手放す候補にする</li>
          <li>記念の品は本人に確認し、写真で残す・一点だけ残すなど形を変える方法も検討する</li>
          <li>譲る・売る・寄付するといった行き先探しには期限を決め、決まらなければ処分に回す</li>
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

      <H2 id="kiso" num="1">もらい物が手放しにくい3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        使わないと分かっているのに減らせないのは、性格の問題ではありません。もらい物という物の性質に理由があります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">作業前に決めておく3つの事項</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        考え方の土台、種類ごとの見方、手放し方の選択肢の三点を先に整理しておくと、作業を滞りなく進められます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「気持ちと品物を切り離す」「種類ごとに見る」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もらい物の整理でつまずくのは、ほとんどの場合、品物の要不要ではなく気持ちの部分です。贈り物は受け取った時点で相手の気持ちが伝わっており、そのあと品物をどう扱うかは受け取った側に委ねられています。この前提に立てるかどうかで、作業の速さがまったく変わります。そのうえで、食品、日用品、記念の品というように種類ごとに判断の観点を変えると、迷いが減り、判断できる物から順に片付いていきます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        判断の重い物が多い分野なので、最初からすべてを決めようとしないことも大切です。期限のある食品、数で決められる日用品のように機械的に判断できる物から先に手を付け、記念の品は最後に回します。判断が続かないときの進め方は<Link href="/katazuke-yaruki-tsuzukekata/" className="text-primary underline underline-offset-2">片付けのやる気が続かないときの進め方</Link>、決めきれない心理の背景は<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理と原因</Link>、家全体でどの順に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もらい物は、押し入れやクローゼットの上段、納戸、客間の棚といった「ふだん開けない場所」に集まる傾向があります。その場所を開けること自体が負担となるため、場所ごとに区切って進める方法も有効です。押し入れの中身をすべて出して戻すまでの流れは<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理手順</Link>、実家の食器棚や仏間まわりに残った物の扱いは<Link href="/jikka-shokkidana-butsugu/" className="text-primary underline underline-offset-2">実家の食器棚と仏具の整理</Link>、食器そのものを減らす基準は<Link href="/kitchen-shokki-seiri/" className="text-primary underline underline-offset-2">食器・調理器具の整理</Link>、寝具やタオル類は<Link href="/shingu-shobun/" className="text-primary underline underline-offset-2">枕・毛布・シーツの処分方法</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">もらい物・記念品を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「集めて並べる→食品から片付ける→日用品は数で決める→記念の品は本人に確認→行き先ごとに分けて期限を決める」の順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">トロフィー・盾・陶器・ガラス製品などの分別は、お住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          トロフィーや盾は金属・樹脂・石材・木材が組み合わさっていることが多く、陶器やガラスの食器、桐箱、包装材なども含めて、分別の区分は自治体によって異なります。大きさによって粗大ごみの扱いになる場合もあります。まとめて出す前に、必ずお住まいの市区町村の公式案内で分別区分と出し方をご確認ください。無理に分解すると割れやけがのもとになるため、分解が必要かどうかも案内で確認してから判断してください。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。分別に迷いやすい品目の考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの捨て方</Link>で整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        亡くなった家族のもらい物や記念の品を整理する場合は、形見として残す物を家族で話し合ってから進めます。進め方の全体像は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>、誰に何を渡すかの考え方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">遺品整理と形見分けの進め方</Link>、手放す物の品目と数を書き出す方法は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>、自治体の収集と業者のどちらに出すかの判断は<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体回収と業者回収の使い分け</Link>で扱っています。
      </p>

      <H2 id="ng" num="5">避けるべき4つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者への相談を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もらい物の整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合は、買取を併せて相談できるかどうかも確認しておくと、未使用の贈答品が多いときに選択肢が広がります。買取を伴う場合は古物商許可の有無が判断材料になります。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積もり書で見るべき点は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・業者により異なりますので、同じ条件で複数社に見積もりを依頼し、比較してください。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
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
        本記事は一般的な知識の提供を目的としたものです。トロフィー・盾・陶器・ガラス製品・桐箱・包装材などの分別区分、粗大ごみの申し込み方法や対象品目は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。食品の消費期限・賞味期限の判断は、製造した業者の表示および案内をご確認ください。買取の可否・査定額は品物の状態および買取業者により異なります。業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
