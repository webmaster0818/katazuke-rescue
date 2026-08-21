import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kichouhin-genkin-hakken/";
const TITLE = "片付け中に貴重品や現金が出てきたら｜保管・記録・相談先の考え方";
const DESC =
  "タンスの奥から現金、押し入れから通帳や権利に関する書類。片付けの途中で貴重品が出てくることは珍しくありません。自分の物・故人や親の物・他人の物で扱いがどう変わるか、その場でやるべき保管と記録、家族間で決めておくこと、そして専門家に相談すべき場面を整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「誰の物か」で、取るべき対応が変わる",
    body: "片付けの途中で出てきた貴重品は、大きく三つに分けて考えると整理できます。一つめは自分自身の物です。しまい忘れていた現金や書類がこれに当たり、扱いは自分の判断で決められます。二つめは、故人や親など家族の物です。相続に関わる可能性があるため、その場の判断で分けたり処分したりせず、いったん保管して家族と共有するのが基本になります。三つめは、他人の物です。賃貸物件に前の入居者の荷物が残っていた場合などが該当し、自己判断で扱わず、管理会社や貸主に相談する必要があります。",
  },
  {
    title: "その場でやるべきことは「保管」と「記録」の二つだけ",
    body: "貴重品が出てきた瞬間に、扱いを決める必要はありません。むしろ、疲れている作業中に判断すると後悔が残ります。やるべきことは二つです。一つは、作業の対象にならない安全な場所へ移して保管すること。もう一つは、何が、どこから、いつ出てきたのかを記録しておくことです。写真を撮り、簡単なメモを添えるだけで十分です。この記録は、家族と共有するときにも、専門家に相談するときにも役立ちます。判断は、作業が一段落してから落ち着いて行ってください。",
  },
  {
    title: "家族が関わる場面では、先に共有することがトラブルを防ぐ",
    body: "実家や故人の家の片付けでは、複数の家族が関わることがほとんどです。そこで出てきた現金や貴金属を、その場にいた人が「後で伝えればいい」と考えて一時的に持ち帰ると、あとから疑いや不信につながることがあります。金額の大小にかかわらず、出てきた時点で写真とメモを残し、その日のうちに家族へ共有するのが確実です。共有の方法は、家族のやり取りに使っている連絡手段で構いません。手順を決めておくと、誰かを責める話にならずに済みます。",
  },
];

const merits = [
  {
    title: "整理1：作業前に「貴重品箱」を用意しておく",
    body: "片付けを始める前に、貴重品を入れるための箱や袋を一つ用意し、置き場所を決めておきます。作業中に出てきた物は、その都度この箱に入れる。これだけで、あちこちに散らばることを防げます。箱は施錠できる場所か、作業の対象にならない部屋に置いてください。業者に依頼する場合は、この箱の存在と場所を作業開始前に伝えておくと、誤って運び出されることがありません。作業当日の段取りについては関連記事で扱っていますので、あわせてご覧ください。",
  },
  {
    title: "整理2：出てきやすい場所を知っておくと、見落としが減る",
    body: "経験上、貴重品が出てくる場所には傾向があります。たんすや引き出しの底、洋服のポケットや裏地、本や封筒の間、仏壇や神棚の周辺、押し入れの天袋、食器棚の奥、冷蔵庫の中、額縁の裏、布団の間。とくに、日常的に使わない収納の奥は要注意です。これらの場所は、運び出す前に一度確認する習慣をつけてください。ざっと見るだけでなく、引き出しを完全に引き抜く、衣類のポケットに手を入れるといった確認が必要です。急いで進めると、この確認が抜けます。",
  },
  {
    title: "整理3：業者に依頼する場合は、扱いを事前に取り決める",
    body: "片付けを業者に依頼する場合、作業中に貴重品が見つかることを想定して、扱いを事前に決めておくと安心です。見つかった場合はどう連絡するのか、その場で依頼者に渡すのか、まとめて終了時に引き渡すのか、記録は残すのか。事業者によって対応の方針は異なりますので、契約の前に確認し、可能であれば書面に反映してもらってください。立ち会えない場合は、この取り決めがより重要になります。あわせて、貴重品を事前に抜き出しておくことも忘れないでください。",
  },
];

const steps = [
  {
    title: "作業を止め、その場で写真を撮って記録する",
    body: "貴重品らしき物が出てきたら、いったん作業の手を止めます。動かす前に、出てきた場所が分かるように写真を撮ってください。引き出しの中、封筒の状態、置かれていた位置などが分かる形が望ましいです。次に、品物そのものを撮影します。通帳や証券であれば表紙、現金であれば金額が分かる形で。あわせて、日付、場所、立ち会っていた人の名前をメモに残します。この記録は、家族に説明するときにも、専門家に相談するときにも、事実を伝える材料になります。",
  },
  {
    title: "作業の対象にならない場所へ移し、まとめて保管する",
    body: "記録を残したら、あらかじめ用意しておいた貴重品箱に入れ、作業の対象にならない場所へ移します。複数の人が出入りしている場面では、置き場所を一か所に固定し、誰が管理しているのかをはっきりさせておくことが大切です。現金であれば金額を数えて記録し、複数人で確認できる状態にしておくと、後の説明がしやすくなります。その日のうちに家族へ共有し、保管者を決めます。持ち帰る場合も、誰がどこで保管するのかを共有しておいてください。",
  },
  {
    title: "品目ごとに、次に確認する先を書き出す",
    body: "保管した貴重品は、品目によって次の確認先が異なります。通帳や証券、保険の書類であれば金融機関や保険会社。土地や建物の権利に関する書類であれば司法書士など。古い紙幣や硬貨、外国の通貨であれば金融機関。貴金属や骨董品であれば、買取を扱う事業者。年金や公的な手続きに関する書類であれば、該当する窓口。この段階では、問い合わせ先を書き出すところまでで構いません。すぐに動かず、次のステップで家族との共有を済ませてから連絡するほうが安全です。",
  },
  {
    title: "相続が関わる場合は、分けずに家族と専門家へつなぐ",
    body: "故人の家から出てきた財産は、相続の対象になる可能性があります。誰がどれを受け取るかは、その場にいた人だけで決められるものではありません。出てきた物を分けたり、売却したり、処分したりする前に、まず家族全員で共有してください。そのうえで、相続の手続きや財産の扱いについては、弁護士、司法書士、税理士といった専門家に相談することをおすすめします。手続きの期限が定められているものもありますので、判断に迷う段階で早めに相談するほうが選択肢が残ります。",
  },
  {
    title: "他人の物であれば、自己判断で扱わずに相談する",
    body: "賃貸物件に前の入居者の荷物が残っていた、購入した中古の家財の中に持ち主の物が入っていた、といった場合、その物は他人の所有物である可能性があります。勝手に処分したり、自分の物として扱ったりせず、賃貸であれば管理会社や貸主に連絡し、指示を仰いでください。持ち主が分からない金品を拾った場合の取り扱いには法令上の定めがありますので、判断に迷うときは警察や専門家に確認するのが確実です。この記事では法的な判断を示すことはできませんので、必ず個別にご相談ください。",
  },
];

const ngActions = [
  {
    title: "その場にいた人だけで、分け方を決めてしまう",
    body: "故人の家から現金や貴金属が出てきたとき、作業に参加していた人だけで「これは労力の分」と分けてしまうと、後から他の家族との間で問題になることがあります。金額の大小は関係ありません。相続に関わる財産は、家族全員で状況を把握したうえで、必要に応じて専門家を交えて話し合うべきものです。作業に参加した人の負担が大きいのは事実ですが、それは別途話し合うべきことで、その場で精算する性質のものではありません。まずは記録と共有を優先してください。",
  },
  {
    title: "確認せずに、たんすや家具ごと運び出す",
    body: "急いで片付けを進めると、引き出しの中を見ないまま家具を運び出してしまうことがあります。処分の工程に進んだ後では、取り戻すのは難しくなります。運び出す前に、すべての引き出しを引き抜いて底まで確認し、扉のある収納は中を空にしてください。衣類はポケットに手を入れ、書籍はページの間を確認します。時間はかかりますが、この確認を省いて後悔するケースは少なくありません。業者に依頼する場合も、事前の抜き出しは依頼者側で行うのが基本です。",
  },
  {
    title: "古そうな物を、価値を確かめずに処分する",
    body: "古い紙幣や硬貨、記念の硬貨、外国の通貨、商品券や金券、未使用の切手やはがき、貴金属、時計、着物などは、見た目からは扱いが判断しにくい物です。使えないと思って処分したものが、実は金融機関で扱えるものだった、あるいは買取の対象になるものだった、ということがあります。判断に迷う物は、その場で処分せず保管し、金融機関や買取を扱う事業者に確認してください。買取を併用する考え方は関連記事で扱っています。価値の断定は避け、必ず専門の窓口で確認するようにしてください。",
  },
  {
    title: "他人の荷物を、自分の判断で処分または取得する",
    body: "賃貸物件に残された前の入居者の荷物や、他人の所有物である可能性がある金品を、自己判断で処分したり自分の物として扱ったりするのは避けてください。所有権の扱いや、残された物の処理の可否には法令上の定めがあり、状況によって結論が異なります。賃貸であれば管理会社や貸主に連絡し、指示を仰いでください。持ち主が分からない金品については、警察に届け出るなどの対応が必要になる場合があります。判断に迷うときは、弁護士などの専門家にご相談ください。",
  },
];

const judgeSigns = [
  "物量が多く、収納の中を一つずつ確認しながら進める時間がない",
  "故人の家で、どこに何があるか把握できていない",
  "遠方のため、現地で作業できる日数が限られている",
  "家族間で意見が分かれ、作業そのものが進まない",
  "重い家具の中身を確認するために、動かす人手が足りない",
];

const faqs = [
  {
    q: "片付け中に現金が出てきたら、まず何をすればよいですか？",
    a: "作業をいったん止め、出てきた場所と品物が分かるように写真を撮り、日付・場所・立ち会っていた人をメモに残してください。そのうえで、作業の対象にならない場所へ移して保管します。金額を数えて記録し、可能であれば複数人で確認できる状態にしておくと安心です。自分以外の人の物である可能性がある場合は、その日のうちに家族へ共有し、扱いは後日落ち着いて決めてください。",
  },
  {
    q: "故人の家から出てきた財産は、どう扱えばよいですか？",
    a: "相続の対象になる可能性がありますので、その場にいた人だけで分けたり処分したりせず、まず記録して保管し、家族全員で共有してください。手続きや分け方については、弁護士・司法書士・税理士などの専門家にご相談ください。相続に関する手続きには期限が定められているものもありますので、判断に迷う段階で早めに相談するほうが選択肢が残ります。本記事で法的な判断をお示しすることはできません。",
  },
  {
    q: "賃貸に前の住人の荷物が残っていました。処分してよいですか？",
    a: "自己判断で処分しないでください。残された荷物の所有権や処理の可否は状況によって結論が異なり、法令上の定めもあります。まずは管理会社または貸主に連絡し、指示を仰いでください。持ち主が分からない金品が含まれている場合は、警察への届け出が必要になることもあります。判断に迷うときは、弁護士などの専門家にご相談ください。",
  },
  {
    q: "業者に依頼する場合、貴重品はどう扱われますか？",
    a: "対応の方針は事業者によって異なります。作業中に見つかった場合の連絡方法、引き渡しの時期、記録の有無などを、契約の前に確認し、可能であれば書面に反映してもらってください。あわせて、依頼者側で事前に貴重品を抜き出しておくことが基本です。抜き出した物は、作業の対象にならない場所へ移し、その場所を作業開始前に伝えておくと、誤って運び出されることを防げます。",
  },
];

const related = [
  { href: "/sagyou-toujitsu-tachiai/", label: "作業当日の立ち会いの流れ", desc: "開始前の確認から引き渡しまで" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める", desc: "手順と業者に任せる範囲" },
  { href: "/souzoku-ie-katazuke/", label: "相続した家の片付け", desc: "段取りと専門家に相談する論点" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理", desc: "残すべき重要書類の見分け方" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "元気なうちに持ち物を整える手順" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用術", desc: "売れる物と処分する物の分け方" },
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
    { "@type": "ListItem", position: 2, name: "片付け中に貴重品や現金が出てきたら" },
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
    { href: "#kiso", label: "1｜出てきたときに押さえること" },
    { href: "#merit", label: "2｜作業前にできる3つの整理" },
    { href: "#houshin", label: "3｜品目別の確認先と相談の順番" },
    { href: "#steps", label: "4｜見つかってからの5ステップ" },
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

      <Breadcrumb items={[{ label: "片付け中に貴重品や現金が出てきたら" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          片付け中に貴重品や現金が出てきたら｜保管・記録・相談先の考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          たんすの引き出しの底から封筒に入った現金、押し入れの奥から古い通帳や権利に関する書類、洋服のポケットから指輪。片付けを進めていると、こうした物が出てくることは決して珍しくありません。とくに、長く住んだ家や故人の家では、家族も知らなかった場所から見つかることがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          このとき大切なのは、その場で扱いを決めないことです。この記事では、自分の物・家族や故人の物・他人の物で対応がどう変わるか、見つけた直後にやるべき保管と記録、家族間で共有する手順、品目ごとの確認先、そして専門家に相談すべき場面を整理します。なお、相続や所有権に関する判断は個別の事情によって異なりますので、本記事で結論をお示しすることはできません。必ず弁護士・司法書士・税理士などの専門家にご相談ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>その場でやるのは「安全な場所に保管する」と「写真とメモで記録する」の二つだけ</li>
          <li>故人や親の物は、その場にいた人だけで分けず、家族全員で共有してから専門家へ</li>
          <li>賃貸に残された他人の荷物は自己判断で扱わず、管理会社・貸主へ連絡する</li>
          <li>家具を運び出す前に、引き出しの底・ポケット・本の間まで確認する</li>
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

      <H2 id="kiso" num="1">出てきたときに押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断を急がないことが基本です。まずは、対応を分ける三つの前提を確認します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">作業前にできる3つの整理</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        見つかってから慌てないために、作業を始める前に整えておけることがあります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">品目別の確認先と相談の順番</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        保管と記録が済んだら、品目ごとに確認先を整理します。通帳、キャッシュカード、証券に関する書類、保険の証券などは、発行している金融機関や保険会社が窓口になります。名義人が亡くなっている場合の手続きは、相続の状況によって必要な書類が変わりますので、まず家族で状況を共有したうえで問い合わせてください。土地や建物の権利に関する書類は、司法書士など登記を扱う専門家に相談するのが一般的です。年金や公的な給付に関する書類は、該当する窓口で確認します。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        古い紙幣や硬貨、記念の硬貨、外国の通貨については、そのまま使えるかどうかの判断が難しいことがあります。処分せずに保管し、金融機関に取り扱いを確認してください。商品券や金券、未使用の切手やはがきについては、発行元や取り扱いの窓口で確認できる場合があります。貴金属、時計、着物、骨董品などは、買取を扱う事業者に見てもらう選択肢がありますが、故人の財産に当たる場合は、家族での共有と専門家への相談を先に済ませてから進めてください。買取を組み合わせる考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相談の順番としては、家族への共有、専門家への相談、各窓口への問い合わせ、という流れが安全です。順番を逆にすると、後から家族間で説明が必要になったり、手続きをやり直したりすることがあります。相続した家の片付け全体の段取りは<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付け</Link>、遺品整理として進める場合の手順は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める手順</Link>で扱っています。書類の中で何を残すべきかの判断は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理</Link>、故人のスマートフォンやパソコンに関わる情報の扱いは<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理</Link>をご覧ください。
      </p>

      <H2 id="steps" num="4">見つかってからの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        記録する→保管する→確認先を書き出す→家族と共有して専門家へ→他人の物は相談する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">相続・所有権に関する判断は、必ず専門家へ</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          誰がどの財産を受け取るのか、賃貸物件に残された荷物をどう扱えるのか、持ち主が分からない金品をどう届け出るのかといった論点は、個別の事情や法令上の定めによって結論が異なります。本記事では一般的な考え方の説明にとどめており、法的な判断をお示しすることはできません。弁護士・司法書士・税理士などの専門家、賃貸物件であれば管理会社や貸主にご相談ください。手続きに期限が定められているものもありますので、早めの相談をおすすめします。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、こうした場面を減らすには、元気なうちに持ち物と財産の在りかを整理しておくことが有効です。どこに何があるかを一覧にしておくだけでも、家族が探し回る負担は大きく減ります。取り組み方は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>で扱っています。親の家について進める場合は、本人の気持ちを尊重しながら話を切り出すことが前提になりますので、<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親への声のかけ方</Link>もあわせてご覧ください。作業日の段取りは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>で整理しています。
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
        収納の中を一つずつ確認しながら進めるには、時間と人手が要ります。次のような状況では、片付け・遺品整理の業者への依頼を検討してください。対応できる業者は<Link href="/area/hiroshima/" className="text-primary underline underline-offset-2">広島の片付け業者</Link>や<Link href="/area/niigata/" className="text-primary underline underline-offset-2">新潟の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の収集運搬に必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を書面にしてもらってください。あわせて、作業中に貴重品が見つかった場合の連絡方法と引き渡しの手順を、契約の前に取り決めておくと安心です。料金は物量・間取り・作業内容・地域によって異なるため、複数社を比べるのが確実です。依頼先の候補としては<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/otasuke-usagi/" className="text-primary underline underline-offset-2">おたすけうさぎ</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。相続財産の範囲や分け方、賃貸物件に残された荷物の所有権と処理の可否、持ち主が分からない金品の届け出などの法的な論点は、個別の事情や法令上の定めにより結論が異なりますので、弁護士・司法書士・税理士などの専門家、または管理会社・貸主・警察の窓口にご相談ください。金融機関や保険会社の手続き、古い紙幣・硬貨・金券の取り扱いは、各機関の案内でご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
