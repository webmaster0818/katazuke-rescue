import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/reizouko-sentakuki-shobun-junbi/";
const TITLE = "冷蔵庫・洗濯機を処分する前の準備｜中身整理・霜取り・水抜きの手順";
const DESC =
  "冷蔵庫・洗濯機は家電リサイクル法の対象で、処分には定められたルートと「事前準備」が必要です。中身の計画的な消費、冷蔵庫の電源オフ・霜取り、洗濯機の水抜きという当日までの段取りを5ステップで解説。準備を怠ると起きる水漏れトラブル、無料回収トラックに渡すなどのNG行動、買い替え・購入店・指定引取場所という処分ルートの枠組みまでを整理します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "冷蔵庫・洗濯機は「水を抱えた家電」。準備なしの搬出はトラブルになる",
    body: "冷蔵庫と洗濯機の処分が他の家電と違うのは、内部に水分を抱えていることです。冷蔵庫は冷却部の霜と蒸発皿の水、洗濯機は給水ホース・排水ホース・内部に残った水があり、準備せずに運ぶと搬出中に水が漏れ、床や廊下を濡らしたり、運搬車の他の荷物を汚したりします。引き取り当日に「水抜きがされていない」と作業がやり直しになるケースもあります。処分準備の中心は、この「水の処理」だと覚えておきましょう。",
  },
  {
    title: "家電リサイクル法の対象品目で、粗大ごみには出せないのが原則",
    body: "冷蔵庫（冷凍庫含む）と洗濯機（衣類乾燥機含む）は、エアコン・テレビと並ぶ家電リサイクル法の対象品目です。この法律の枠組みでは、対象品目は自治体の粗大ごみとしては収集せず、小売店の引き取りや指定引取場所への持ち込みなど、定められたルートでリサイクルに回すことになっています。リサイクル料金はメーカー・品目区分ごとに定められています。制度の全体像は家電リサイクル法対象品の処分方法で詳しく解説しています。",
  },
  {
    title: "処分ルートは「買い替え店・購入店・指定引取場所・自治体案内」の枠組みで考える",
    body: "処分の入り口は大きく4つあります。(1)買い替えるなら新しい製品を買う店に引き取りを依頼する、(2)処分だけなら過去にその製品を購入した店に相談する、(3)自分でリサイクル券を用意して指定引取場所に持ち込む、(4)どれも難しければ自治体が案内する方法（許可業者の紹介など）を確認する、という枠組みです。小売店には対象品目の引き取り義務の仕組みがあるため、買い替え時の引き取り依頼が最も手間の少ないルートになるのが一般的です。",
  },
];

const merits = [
  {
    title: "ルート1：買い替えと同時なら「配送時引き取り」が最も手間が少ない",
    body: "新しい冷蔵庫・洗濯機に買い替える場合は、購入店に古い製品の引き取りを依頼するのが基本です。新品の配送と同時に旧品を引き取ってもらえるため、搬出の人手も運搬手段も自分で用意する必要がありません。申し込み時にリサイクル料金等の案内があるので、内容を確認して手続きします。ただし引き取り当日までに中身を空にし、霜取り・水抜きを済ませておくのは自分の仕事です。この準備が済んでいないと引き取りを断られることもあります。",
  },
  {
    title: "ルート2：処分だけなら購入店への相談か、指定引取場所への持ち込み",
    body: "買い替えを伴わない場合は、その製品を購入した店に引き取りを相談するのが一つ。購入店が分からない・遠方の場合は、郵便局でリサイクル券の手続きをして、指定引取場所に自分で持ち込む方法があります。持ち込みは運搬手段と人手が必要ですが、収集運搬の費用がかからない分、負担を抑えられるルートです。指定引取場所の所在地や受付時間は地域により異なるため、事前に確認してから向かいましょう。",
  },
  {
    title: "ルート3：運び出せない場合は、許可等を確認できる回収業者や自治体案内を利用",
    body: "階段しかない住居からの搬出や、他の不用品とまとめて処分したい場合は、不用品回収業者への依頼が現実的です。ただし家電リサイクル法対象品を含む回収では、廃棄物の処理やリサイクルの仕組みに沿って適正に扱う業者を選ぶことが大前提です。自治体のウェブサイトでは、対象品目の処分方法や相談先を案内しているのが一般的なので、迷ったら自治体案内を起点に探しましょう。自治体と業者の使い分けは自治体と業者どっちに頼む？も参考になります。",
  },
];

const steps = [
  {
    title: "引き取り日を決め、1〜2週間前から冷蔵庫の中身を計画的に消費する",
    body: "まず処分ルートと引き取り日を確定させ、そこから逆算して冷蔵庫の中身を減らし始めます。1〜2週間前から「買い足さずに食べ切る」方針に切り替え、冷凍食品・作り置き・調味料を計画的に消費しましょう。食べ切れない物は、クーラーボックスや親族・知人への譲渡でつなぐ方法もあります。引き取り直前に大量の食品を捨てることにならないよう、消費計画は早めに始めるのがポイントです。",
  },
  {
    title: "冷蔵庫は前日までに空にして電源を抜き、霜取りをする",
    body: "冷蔵庫は引き取りの前日までに中身を完全に空にし、電源プラグを抜きます。電源を切ると冷凍室の霜が溶け出すため、扉を開けて庫内にタオルを敷き、溶けた水を受け止めます。霜の量により溶け切るまでの時間は異なるため、遅くとも前日、霜が多い場合はさらに早めに電源を切るのが安全です。溶けた水がたまる蒸発皿（機種により位置が異なります）の水も捨て、庫内を拭き上げておきましょう。詳細な手順は機種の取扱説明書で確認するのが確実です。",
  },
  {
    title: "洗濯機は「給水側→排水側」の順で水抜きをする",
    body: "洗濯機の水抜きは、一般的に次の手順で行います。まず水道の蛇口を閉め、短時間の標準コースなどを回してホース内の水を抜き、給水ホースを外します。次に脱水を1〜2分回して槽内の水を飛ばし、排水ホースを外して残った水を出し切ります。外したホースの水が床にこぼれやすいので、タオルとバケツを用意して作業しましょう。ドラム式は本体下部に糸くずフィルターがあり、ここの水抜きも必要です。手順の詳細は機種により異なるため、取扱説明書の確認をおすすめします。",
  },
  {
    title: "搬出経路を確認し、床・壁を保護する",
    body: "引き取り当日までに、玄関までの搬出経路を確認します。冷蔵庫・洗濯機は大型で重く、廊下の曲がり角・ドア幅・階段がボトルネックになりがちです。経路上の障害物を片付け、床や壁の傷つきが心配な場所には毛布や段ボールを当てておくと安心です。賃貸の場合、共用部を傷つけると退去時の負担につながることもあります。設置場所の裏や下は、ほこりと汚れがたまっているため、搬出後にすぐ掃除できるよう道具を用意しておきましょう。",
  },
  {
    title: "引き取り当日は立ち会い、リサイクル券の控えを保管する",
    body: "当日は立ち会い、搬出の完了と引き渡しを確認します。リサイクル券（家電リサイクル券）を使うルートでは、排出者控えを受け取り、保管しておきましょう。控えがあれば、引き渡した製品が適正にリサイクルルートに乗ったことを後から確認できます。搬出後は、空いたスペースの床の拭き掃除と、水道の蛇口・排水口まわりの確認も忘れずに。買い替えの場合は、新しい製品の設置スペースの採寸・掃除もこのタイミングで済ませると効率的です。",
  },
];

const ngActions = [
  {
    title: "電源を入れたまま・霜取りをしないまま当日を迎える",
    body: "冷蔵庫の電源を引き取り直前まで入れたままにすると、霜が残った状態で運ばれることになり、運搬中に溶けた水が漏れて床や他の荷物を濡らします。作業者から「霜取りができていないので引き取れない」と言われ、日程を組み直すことになるケースもあります。電源オフと霜取りは遅くとも前日まで。霜が厚く付いている場合は、さらに余裕を持って電源を切りましょう。無理に霜をヘラなどで剥がすと庫内を傷めるため、自然に溶かすのが基本です。",
  },
  {
    title: "洗濯機の水抜きをせずに運び出す",
    body: "水抜きをしていない洗濯機は、傾けた瞬間にホースや槽内の残り水があふれます。自宅の床が濡れるだけでなく、集合住宅では階下への水漏れ・共用部の汚損につながるおそれもあります。水抜きは給水側・排水側の両方が必要で、片方だけでは不十分です。ドラム式の糸くずフィルターの水も忘れがちなポイントです。作業自体は30分程度で終わるため、引き取り前日までに必ず済ませておきましょう。",
  },
  {
    title: "重い本体を一人で無理に動かす",
    body: "冷蔵庫・洗濯機は重量があるうえ、持ちにくい形状のため、一人で動かすと腰を痛めたり、倒して床や壁を壊したり、足をはさんで大けがをしたりする危険があります。搬出は業者に任せるのが基本で、自分で指定引取場所へ持ち込む場合も、必ず二人以上で作業してください。また、冷蔵庫を大きく傾けたり横倒しにしたりする運び方は故障や液漏れの原因になり得るため、運搬時の扱いにも注意が必要です。",
  },
  {
    title: "巡回する無料回収トラックに引き渡す",
    body: "「無料で回収します」とアナウンスして巡回するトラックに冷蔵庫・洗濯機を渡すのは避けましょう。積み込み後に費用を請求されるトラブルや、回収された家電の不法投棄・不適正な処理の事例が、消費者庁や自治体から繰り返し注意喚起されています。家電リサイクル法対象品は、定められたルートで引き渡すのが原則です。困ったときの相談先は消費者ホットライン188や自治体窓口。詳しくは無料回収をうたう業者の注意点にまとめています。",
  },
];

const judgeSigns = [
  "階段のみの住居・狭い搬出経路で、自力での搬出が危険",
  "冷蔵庫・洗濯機以外にも処分したい不用品がまとまった量ある",
  "引っ越し・退去の期限が迫っており、指定引取場所への持ち込みの時間が取れない",
  "遺品整理・実家の片付けの中で、複数の大型家電をまとめて処分する必要がある",
  "購入店が分からず、運搬手段もなく、持ち込みルートが使えない",
];

const faqs = [
  {
    q: "冷蔵庫の電源はいつ切ればよいですか？",
    a: "遅くとも引き取りの前日までに切るのが目安です。電源を切った後、冷凍室の霜が溶けて水になるため、タオルを敷いて水を受け、蒸発皿の水も捨てておきます。霜が厚く付いている場合は溶け切るまで時間がかかるため、さらに早めに切ると安心です。所要時間は機種や霜の量により異なるため、取扱説明書の案内も確認してください。",
  },
  {
    q: "リサイクル料金はいくらかかりますか？",
    a: "リサイクル料金は、家電リサイクル法の仕組みの中でメーカー・品目区分ごとに定められており、金額は各メーカーの公表情報や家電リサイクル券の案内で確認できます。このほか、引き取りを依頼する場合は収集運搬の費用が別途かかるのが一般的で、こちらは店舗・業者により異なります。合計でいくらになるかは、依頼先への確認・見積もりで把握しましょう。",
  },
  {
    q: "まだ使える冷蔵庫・洗濯機は売れますか？",
    a: "製造年が新しく状態のよい物は、リサイクルショップや買取業者が扱うことがあります。売却できればリサイクル料金の負担もなくなるため、処分の前に買取査定を受けてみる価値はあります。ただし製造から年数が経った物は買取対象外となることが多く、その場合は定められた処分ルートへ。売却との併用のコツはリサイクルショップ・買取の併用の記事で解説しています。",
  },
  {
    q: "引っ越しと同時に処分したい場合はどうすればよいですか？",
    a: "引っ越し業者の中には、家電リサイクル法対象品の引き取りやリサイクル手続きの代行に対応するところもあります（対応可否・条件は業者により異なります）。見積もり時に相談してみましょう。対応していない場合は、引っ越し前に購入店引き取りや指定引取場所への持ち込みを済ませておくか、不用品回収業者に依頼します。退去期限がある場合の段取りは退去前の片付けも参考にしてください。",
  },
];

const related = [
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分", desc: "対象品目と処分ルートの全体像" },
  { href: "/aircon-torihazushi-shobun/", label: "エアコンの取り外しと処分", desc: "同じ対象品目の取り外しの流れ" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離", desc: "荷物を減らす逆算スケジュール" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "不用品の積み放題プランがある業者" },
  { href: "/area/kobe/", label: "神戸の片付け業者比較", desc: "神戸から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "冷蔵庫・洗濯機の処分前準備" },
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
    { href: "#kiso", label: "1｜処分前に知っておく3つの前提" },
    { href: "#merit", label: "2｜処分ルート別の考え方" },
    { href: "#houshin", label: "3｜準備を始める前の全体方針" },
    { href: "#steps", label: "4｜処分前準備の5ステップ" },
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

      <Breadcrumb items={[{ label: "冷蔵庫・洗濯機の処分前準備" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          冷蔵庫・洗濯機を処分する前の準備｜中身整理・霜取り・水抜きの手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          冷蔵庫・洗濯機の処分は、「引き取りを頼んで終わり」ではありません。中身の整理、電源オフと霜取り、水抜きという事前準備が済んでいないと、当日水漏れを起こしたり、引き取り自体を断られたりすることがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、家電リサイクル法の枠組みと処分ルートの選択肢を整理したうえで、引き取り日から逆算した準備の5ステップ、水漏れ・けがにつながるNG行動、搬出を業者に任せるべきケースまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>冷蔵庫・洗濯機は家電リサイクル法の対象。粗大ごみではなく定められたルートで処分する</li>
          <li>冷蔵庫は1〜2週間前から中身を消費し、前日までに電源オフ・霜取り・蒸発皿の水処理</li>
          <li>洗濯機は給水側・排水側の両方の水抜きを前日までに済ませる</li>
          <li>搬出は無理をせず業者へ。巡回する無料回収トラックには渡さない</li>
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

      <H2 id="kiso" num="1">処分前に知っておく3つの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        準備の手順に入る前に、冷蔵庫・洗濯機の処分ならではの前提を押さえておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">処分ルート別の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        状況別に、どのルートが使いやすいかを整理します。いずれのルートでも事前準備は共通で必要です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">準備を始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「引き取り日から逆算して準備する」ことです。冷蔵庫の中身の消費には1〜2週間、霜取りには半日〜1日かかるため、引き取り日が決まった瞬間から準備は始まっています。水抜き・霜取りの具体的な手順は機種により異なる部分があるため、取扱説明書（メーカーサイトでも閲覧できるのが一般的です）を確認しながら進めると確実です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家電リサイクル法対象品全体の処分ルートは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>で解説しています。同じ対象品目でも取り外し工事が絡むエアコンは<Link href="/aircon-torihazushi-shobun/" className="text-primary underline underline-offset-2">エアコンの取り外しと処分</Link>を参照してください。引っ越しに伴う処分なら<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>で全体の段取りを、処分ルート全般の考え方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>をどうぞ。
      </p>

      <H2 id="steps" num="4">処分前準備の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「中身の消費→冷蔵庫の霜取り→洗濯機の水抜き→経路確保→当日立ち会い」の流れを守ることです。
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

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、搬出・処分を業者に任せるほうが安全で確実です。
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
        他の不用品とまとめて処分したい場合は、<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような不用品回収業者が候補になります。家電リサイクル法対象品を含む回収では、対象品目を適正なリサイクルルートで扱うことを確認できる業者を選ぶことが大前提です。業者選びの基本は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。霜取り・水抜きの具体的な手順は機種により異なるため、必ずお使いの製品の取扱説明書をご確認ください。リサイクル料金・収集運搬費用や引き取りの条件は、メーカー・店舗・業者・地域により異なるため、依頼先への確認・見積もりでご確認ください。家電リサイクル法対象品は、定められたルートで適正に処分してください。
      </p>
    </article>
  );
}
