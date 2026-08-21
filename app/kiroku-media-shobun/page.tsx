import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kiroku-media-shobun/";
const TITLE = "写真データと記録メディアの処分｜外付けHDD・SDカード・ディスクの手放し方";
const DESC =
  "引き出しの奥に眠る外付けハードディスク、使わなくなったSDカードやUSBメモリ、焼いたまま忘れたディスクやビデオテープ。中身の写真データを失わずに整理し、メディア本体を安全に手放すための順序と、データを読めなくする方法の選び方、処分ルートの調べ方を整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "記録メディアの処分は「中身」と「本体」を分けて考える",
    body: "外付けハードディスクやメモリーカードを手放すとき、悩みが二重になっていることに気づかないまま止まってしまう人が多くいます。一つは「中に入っている写真や書類をどうするか」、もう一つは「メディア本体をどう捨てるか」です。この二つは別の問題で、順番も決まっています。先に中身を整理してバックアップを確保し、そのうえで本体の処分方法を考える。逆に進めると、必要なデータを失ったまま本体だけが手元に残るという中途半端な状態になります。まずはこの二段構えを意識してください。",
  },
  {
    title: "記録メディアには寿命があり、置いておけば安全とは限らない",
    body: "「とりあえず取っておけば大丈夫」と考えて引き出しにしまい込まれた記録メディアは、時間の経過とともに読み出せなくなることがあります。ハードディスクは駆動する部品を持ち、長期間使わないことによる影響も指摘されています。記録用のディスクは、保存の環境によって劣化が進みます。ビデオテープはカビや伸びが生じ、再生する機器そのものが手元にないという問題も出てきます。片付けを機に中身を確認しておくことは、処分のためだけでなく、記録を残すためにも意味のある作業です。",
  },
  {
    title: "本体を手放す前に、読み出せない状態にする必要がある",
    body: "記録メディアには、写真、書類、住所録、仕事の資料など、他人に見られたくない情報が入っていることがあります。データを削除しただけ、あるいは表面上の初期化をしただけでは、状況によって復元できる可能性が残ると言われています。そのため、手放す前にはデータを読み出せない状態にする対応が必要です。方法は、専用の消去ソフトを使う、消去サービスを利用する、物理的に破壊するといった選択肢がありますが、それぞれ手間と安全性、そして怪我のおそれが異なります。自分に合う方法を選んでください。",
  },
];

const merits = [
  {
    title: "整理1：残すデータは「まとめる」より先に「減らす」",
    body: "写真データは、何も考えずにまとめると、同じ場面を何十枚も抱えたまま容量だけが増えます。整理の順序としては、まず明らかな重複、ぶれてしまった写真、意味の分からない画面の記録などを外し、残す物を絞ってから一か所にまとめるほうが効率的です。全部を一度に判断する必要はなく、年ごと、行事ごとに区切って進めれば十分です。減らしてからまとめると、保存先の容量も小さくて済み、後から探すときにも見つけやすくなります。紙のアルバムの整理と考え方は共通しています。",
  },
  {
    title: "整理2：保存先は一か所にせず、性質の違う場所に分ける",
    body: "大切なデータを一つの機器だけに置いておくと、その機器が壊れたときに失われます。一般的な考え方として、同じデータを複数の場所に持ち、そのうち少なくとも一つは自宅とは別の場所に置くとよいとされています。具体的には、手元の機器に加えて、外付けの記録メディアと、インターネット上の保存サービスを組み合わせる形です。どのサービスを使うか、容量をどうするかは目的によって異なりますので、公式の案内で条件を確認してください。ここでの要点は、一か所にまとめきらないことです。",
  },
  {
    title: "整理3：手放すメディアの一覧を作ってから、方法を決める",
    body: "処分の方法は、メディアの種類によって変わります。外付けハードディスク、内蔵されていた記憶装置、メモリーカード、記録用のディスク、ビデオテープでは、それぞれ扱いが違います。まずは手放す候補を並べ、種類と数を書き出してください。この一覧があると、消去サービスに相談するときも、自治体の案内を調べるときも話が早くなります。あわせて、中身をまだ確認していない物には印を付けておき、確認が済むまでは処分の列に入れないようにしておきます。",
  },
];

const steps = [
  {
    title: "家じゅうの記録メディアを集めて、種類ごとに並べる",
    body: "引き出し、机の上、押し入れ、テレビ台の下、カメラのケースなど、心当たりのある場所から記録メディアを集めます。外付けハードディスク、メモリーカード、小型の記録装置、記録用のディスク、ビデオテープ、カセットなど、種類ごとに並べてください。並べると、同じ物が何個もあること、中身が分からない物が多いことに気づきます。この段階で、ラベルが貼られている物と、まったく分からない物に分けておくと、次の確認作業の見通しが立ちます。",
  },
  {
    title: "中身を確認し、残すデータを取り出す",
    body: "接続できる機器がある物から順に中身を確認します。写真、動画、書類、仕事の資料など、残したい物があれば取り出してください。この作業には時間がかかりますので、一日で終わらせようとせず、期間を決めて少しずつ進めるほうが現実的です。接続する機器が手元にない古い形式のメディアについては、変換や読み出しを扱う事業者に相談する方法もあります。対応できる形式や条件は事業者によって異なりますので、公式の案内でご確認ください。読めない物は、無理をせず保留にして構いません。",
  },
  {
    title: "残すデータを整理し、複数の保存先に置く",
    body: "取り出したデータは、そのまま置いておくと再び行方が分からなくなります。年やできごとで分けたフォルダにまとめ、名前の付け方をそろえてください。整理が済んだら、複数の保存先に置きます。手元の機器、外付けの記録メディア、インターネット上の保存サービスというように、性質の違う場所を組み合わせるのが基本です。保存が済んだことを実際に開いて確かめてから、次の処分の工程に進んでください。コピーしたつもりで入っていなかった、という事態は起こり得ます。",
  },
  {
    title: "データを読み出せない状態にする方法を選ぶ",
    body: "保存が確認できたら、手放すメディアのデータを読み出せない状態にします。方法は主に三つあります。専用の消去ソフトを使う方法、事業者の消去サービスを利用する方法、物理的に壊す方法です。物理的に壊す方法は確実性が高い一方で、破片やほこりで怪我をするおそれがあり、機器の構造によっては工具も必要です。安全面を考えると、消去サービスや、回収と消去をあわせて扱う窓口を利用するほうが無難です。どの方法を選ぶかは、入っていた情報の内容と、自分が扱える範囲で判断してください。",
  },
  {
    title: "自治体や回収の窓口を確認し、種類ごとに出す",
    body: "処分のルートは、メディアの種類と自治体によって異なります。小型の電子機器を対象にした回収の仕組みが設けられている場合や、家電量販店に回収の窓口が設けられている場合があります。記録用のディスクやビデオテープの区分は、自治体の分別区分によって扱いが変わります。まずはお住まいの市区町村の案内で、それぞれの品目がどの区分に当たるかを確認してください。分からない品目は、まとめて廃棄物の担当窓口に問い合わせると一度で解決します。判断できない物を残さないことが大切です。",
  },
];

const ngActions = [
  {
    title: "中身を確認しないまま、まとめて処分する",
    body: "ラベルのないメディアには、家族の写真や動画、必要な書類が入っていることがあります。処分してしまえば取り戻せません。時間がかかっても、接続できる物は一度中を確認してください。確認する時間がすぐに取れない場合は、処分の列に入れず、保留の箱にまとめて期限を決めておきます。「一年後に見直す」と書いた紙を貼っておくだけでも、無期限の放置とは違います。紙の写真やアルバムの整理と同じで、判断を保留すること自体は問題ではありません。",
  },
  {
    title: "削除や初期化だけで、安心して手放す",
    body: "データを削除したり、表面上の初期化を行ったりしただけでは、状況によって復元できる可能性が残ると言われています。個人の写真、住所録、仕事の資料などが入っていた場合、そのまま手放すのは避けてください。専用の消去ソフトを使う、消去サービスを利用する、あるいは回収と消去をあわせて扱う窓口を選ぶといった対応が必要です。どの方法がどこまでの効果を持つかは製品やサービスによって異なりますので、公式の案内で確認したうえで選んでください。",
  },
  {
    title: "工具や装備なしで、力任せに壊そうとする",
    body: "確実に読めなくしようとして、ハンマーなどで叩き割る方法が紹介されることがあります。しかし、内部の板が割れて鋭い破片が飛ぶ、細かな粉じんが舞う、金属の縁で手を切るといった危険があり、屋内では周囲を傷めることもあります。どうしても自分で行う場合は、保護めがねと厚手の手袋を着け、屋外の安全な場所で、周囲に人がいないことを確認してください。無理だと感じたら中止し、消去サービスや回収の窓口を利用するほうが安全です。安全を優先して判断してください。",
  },
  {
    title: "分別の区分を確認せず、可燃ごみに混ぜて出す",
    body: "記録メディアには、金属、樹脂、電池を内蔵した機器などが含まれます。区分を確認せずに混ぜて出すと、収集されずに残されたり、処理の工程で不具合の原因になったりすることがあります。とくに、充電式の電池を内蔵した機器は、発火につながるおそれがあるため扱いに注意が必要です。品目ごとの区分は自治体によって異なりますので、お住まいの市区町村の案内で確認し、分からない物は担当窓口に問い合わせてから出してください。",
  },
];

const judgeSigns = [
  "記録メディアが大量にあり、中身の確認だけで作業が止まっている",
  "故人の機器が多く、家族だけでは扱いを判断できない",
  "部屋全体の片付けと同時に進める必要があり、手が回らない",
  "古い形式のメディアが多く、読み出す手段が手元にない",
  "退去や引き渡しの期限があり、確認の時間を確保できない",
];

const faqs = [
  {
    q: "外付けハードディスクは、そのまま捨ててよいですか？",
    a: "そのまま手放すのは避けてください。削除や表面上の初期化だけでは、状況によってデータが復元できる可能性が残ると言われています。専用の消去ソフトを使う、事業者の消去サービスを利用する、回収と消去をあわせて扱う窓口を選ぶといった対応をおすすめします。処分の区分については、小型の電子機器を対象にした回収の仕組みがある場合もありますので、お住まいの市区町村の案内でご確認ください。",
  },
  {
    q: "SDカードやUSBメモリは、どう処分すればよいですか？",
    a: "小さくても中に情報が残っている可能性がありますので、まず読み出せない状態にする対応を行ってください。専用の消去ソフトを使う方法のほか、消去を扱うサービスを利用する方法があります。処分の区分は自治体によって異なり、小型の電子機器の回収の対象とされる場合もあります。判断に迷う場合は、市区町村の廃棄物の担当窓口に問い合わせてから出してください。",
  },
  {
    q: "古いビデオテープの中身を残したいのですが、どうすればよいですか？",
    a: "再生する機器が手元にない場合、変換や読み出しを扱う事業者に相談する方法があります。対応できる形式、必要な期間、条件は事業者によって異なりますので、公式の案内でご確認ください。テープは保存の環境によって劣化が進みますので、残したい物があるなら早めに確認することをおすすめします。中身を確認できない物は、処分の列に入れず保留にしておき、期限を決めて見直す形にしてください。",
  },
  {
    q: "故人のパソコンや記録メディアは、どう扱えばよいですか？",
    a: "故人の機器には、写真や連絡先のほか、契約やお金に関わる情報が含まれていることがあります。家族で共有したうえで進めるのが基本です。相続に関わる財産や契約の扱いに迷う場合は、弁護士・司法書士・税理士などの専門家にご相談ください。機器の中の情報の扱いについては、契約しているサービスの規約や案内で確認が必要になることもあります。デジタル遺品の考え方は関連記事で扱っています。",
  },
];

const related = [
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去", desc: "本体を手放す前の手順" },
  { href: "/shashin-album-seiri/", label: "写真・アルバムの整理", desc: "残す基準と原本の手放し方" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理", desc: "故人の機器や契約の扱い" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理", desc: "残すべき重要書類の見分け方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミ", desc: "判断に迷う品目の調べ方" },
  { href: "/furui-kaden-anzen-shobun/", label: "古い家電の安全確認", desc: "買い替えと処分の進め方" },
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
    { "@type": "ListItem", position: 2, name: "写真データと記録メディアの処分" },
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
    { href: "#kiso", label: "1｜記録メディアを手放す前に押さえること" },
    { href: "#merit", label: "2｜データを守るための3つの整理" },
    { href: "#houshin", label: "3｜読み出せなくする方法の選び方" },
    { href: "#steps", label: "4｜メディアを手放す5ステップ" },
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

      <Breadcrumb items={[{ label: "写真データと記録メディアの処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          写真データと記録メディアの処分｜外付けHDD・SDカード・ディスクの手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          机の引き出しを開けると、いつ使ったか思い出せない外付けハードディスク、何枚あるか分からないメモリーカード、表面に何も書かれていない記録用のディスク。片付けを進めるとき、こうした記録メディアは判断が止まりやすい物の代表です。捨てるには中身が気になり、残すには増え続ける。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、中身のデータと本体を分けて考える順序、写真データを減らしてから複数の場所に保存する考え方、読み出せない状態にする方法の選び方と安全面の注意、そして種類ごとの処分ルートの調べ方を整理します。なお、消去の方法ごとの効果や対応できる機器はサービス・製品によって異なり、記録メディアの分別区分は自治体によって異なりますので、具体的な内容は各公式の案内と市区町村の案内でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>順序は「中身の確認と保存」が先、「本体の処分」は後。逆にするとデータを失う</li>
          <li>写真は減らしてからまとめる。保存先は性質の違う場所を組み合わせて一か所にしない</li>
          <li>削除や表面上の初期化だけで手放さない。消去ソフト・消去サービス・回収窓口から選ぶ</li>
          <li>力任せの破壊は怪我のおそれがある。無理せずサービスや回収の窓口を使う</li>
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

      <H2 id="kiso" num="1">記録メディアを手放す前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断が止まる理由は、二つの問題が重なっているからです。まずは前提を三つ確認します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">データを守るための3つの整理</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        残すデータを減らす、保存先を分ける、手放す物を一覧にする。この三つを済ませてから処分に進みます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">読み出せなくする方法の選び方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放す前にデータを読み出せない状態にする方法は、大きく三つに分けられます。一つめは、専用の消去ソフトを使う方法です。手元で作業でき、費用も抑えられますが、対応している機器の種類や接続の方法、必要な時間は製品によって異なります。二つめは、事業者の消去サービスを利用する方法です。作業の内容や、消去したことを示す書類の発行があるかどうかはサービスによって異なりますので、公式の案内で確認してください。三つめは、物理的に壊す方法です。確実性は高いものの、破片や粉じんによる怪我のおそれがあり、屋内での作業には向きません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        選ぶときの目安は、入っていた情報の内容と、自分が扱える範囲です。仕事の資料や、他人の連絡先を含むデータが入っていた機器であれば、消去サービスや、回収と消去をあわせて扱う窓口を選ぶほうが安心です。家族の写真だけであれば、消去ソフトを使う方法でも実用的でしょう。いずれの場合も、消去を行う前に、残すデータの保存が完了していることを実際に開いて確かめてください。消してから気づいても、取り戻すことはできません。自分の機器本体の扱いについては<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去と処分方法</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        処分のルートについては、自治体によって、小型の電子機器を対象にした回収の仕組みが設けられていることがあります。また、家電量販店などに回収の窓口が設けられている場合もあります。記録用のディスクやビデオテープの区分は、自治体の分別区分によって扱いが変わりますので、市区町村の案内で確認してください。分からない品目の調べ方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>、古い機器の安全面の確認は<Link href="/furui-kaden-anzen-shobun/" className="text-primary underline underline-offset-2">古い家電の安全確認</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">メディアを手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集める→中身を確認する→保存する→読み出せなくする→区分に従って出す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">消去の方法と分別区分は、公式の案内で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          消去ソフトや消去サービスが対応できる機器の種類、作業の内容、書類の発行の有無は、製品・サービスによって異なります。本記事では選び方の考え方の説明にとどめており、個別の効果や条件についてお答えすることはできません。各公式の案内でご確認ください。また、記録メディアの分別区分、小型の電子機器の回収の対象、店頭での回収の可否は、自治体および事業者によって異なりますので、お住まいの市区町村の案内と各店舗の案内をご確認ください。回収を持ちかける訪問や電話をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        データを整理し終えたら、増やさない仕組みも考えておくと、次に同じ悩みを抱えずに済みます。撮った写真をその都度まとめる、年に一度だけ見直す日を決める、使わなくなったメディアはその場で処分の列に入れる。どれか一つで構いません。紙の写真やアルバムをあわせて整理する場合は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理とデジタル化</Link>、故人の機器や契約に関わる情報の扱いは<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理</Link>で扱っています。重要書類の見分け方は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理</Link>をご覧ください。
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
        記録メディアだけであれば自力で進められますが、部屋全体の片付けと重なると手が回らなくなります。次のような状況では、片付け業者への依頼を検討してください。対応できる業者は<Link href="/area/okayama/" className="text-primary underline underline-offset-2">岡山の片付け業者</Link>や<Link href="/area/shizuoka/" className="text-primary underline underline-offset-2">静岡の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼にあたっては、廃棄物の収集運搬に必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を書面にしてもらってください。記録メディアが含まれる場合は、データを読み出せない状態にする対応を自分で済ませてから引き渡すか、消去まで扱えるかを事前に確認しておくと安心です。料金は物量・間取り・作業内容・地域によって異なるため、複数社を比べるのが確実です。依頼先の候補としては<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。データ消去の方法ごとの効果、対応できる機器、サービスの内容や書類の発行の有無は、製品・サービスにより異なりますので、必ず各公式の案内でご確認ください。記録メディアの分別区分、小型の電子機器の回収の対象、店頭での回収の可否は、自治体・事業者により異なりますので、お住まいの市区町村および各店舗の案内でご確認ください。故人の機器や契約に関わる判断が必要な場合は、弁護士・司法書士・税理士などの専門家にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
