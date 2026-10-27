import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kuruma-shanai-seiri/";
const TITLE = "車内・カー用品の整理と処分｜トランク・座席にたまった物と使わなくなったカー用品の手放し方";
const DESC =
  "トランクに入れたままの荷物、座席の下の小物、買い替えて余ったフロアマットなど、車内は降ろす機会がないまま物がたまる場所です。物がたまる理由、すべて降ろして仕分ける手順、常時載せる物の決め方、タイヤ・バッテリー・オイルなど扱いの分かれる品目の確認先、ドライブレコーダーやカーナビの記録を消してから手放す注意点を解説します。";
const PUBLISHED = "2026-09-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "車は「動く収納」になり、降ろすきっかけがない",
    body: "車のトランクや座席の下は、家の収納と違って毎日目に入りません。買い物袋、レジャーの道具、傘、飲み物、子どもの着替え、作業用の手袋など、乗り降りのたびに物を置いても、降りるときに持ち出すのは手荷物だけで、積んだ物はそのまま残ります。家の押し入れなら扉を開けたときに量が見えますが、車内は座って使う場所と物がたまる場所が離れているため、総量に気付く機会がないまま増え続けます。「いつか降ろそう」と思ったまま何年も積まれている物があるのは、片付けの意識の問題ではなく、降ろすきっかけが生活の中にない構造の問題です。",
  },
  {
    title: "買い替えても、古いカー用品が車から出ていかない",
    body: "フロアマット、シートカバー、車内用のクッション、日よけ、充電用のケーブル、ホルダー類は、傷んだり合わなくなったりするたびに新しい物を買い足します。ところが古い方は「予備になるかもしれない」とトランクや座席の下に残され、結果として同じ用途の物が何組も車に載ったままになります。車を乗り換えたあとに前の車用の付属品だけが残る、家族それぞれが自分用に買った充電ケーブルが重なる、といったことも起こりがちです。使う物が新しい方に置き換わっているのに、古い方を降ろす判断だけが先送りされている状態です。",
  },
  {
    title: "家族で共有する空間なので、誰の物かが決まらない",
    body: "車は家族の誰もが使う共有の空間です。トランクに入っているレジャー用品、座席のポケットに差し込まれた書類、後部座席に置かれた紙袋が誰の物か分からないまま、全員が自分の判断で処分できないと考え、手を付けない状態が続きます。持ち主が決まらない物は判断の担当者もいないため、そのまま積み重なります。家の中と同じで、共有の場所ほど「誰が決めるか」を先に決めておかないと片付けが進みません。共有スペースで判断が止まる構造は、関連記事の片付けられない心理と原因でも扱っています。",
  },
];

const merits = [
  {
    title: "整理の単位を「座席まわり」「トランク」「収納部」の三つに分ける",
    body: "車内をひとまとめに考えると、どこから手を付けるか決まりません。座席まわり（足元・座面・シートの背面ポケット）、トランク（荷室・床下の収納）、収納部（グローブボックス・コンソール・ドアポケット・天井の小物入れ）の三つに分けると、一回の作業の範囲が具体的になります。時間が取れないときは、収納部だけ、トランクだけと一か所ずつ進めても構いません。単位を決めておくと、途中で終わっても「どこまで終わったか」が分かり、次に再開しやすくなります。",
  },
  {
    title: "車に常時載せておく物の範囲を先に決める",
    body: "整理のあとで何を戻すかを決めていないと、降ろした物がまた元に戻ります。常時載せる物は「安全と手続きに関わる物」「その車で必ず使う物」に絞るのが基本の考え方です。車検証などの書類や、パンク時の工具類のように車に備え付けられている物は、車両の装備として扱いが決まっているため、勝手に降ろさず、不明な点は販売店や点検を受けている整備業者に確認します。レジャー用品や季節の道具は「その季節だけ載せる物」として、載せる期間を決めておくと、年間を通して積んだままになることを防げます。",
  },
  {
    title: "家に戻す物と手放す物の置き場を、作業前に用意する",
    body: "車から降ろした物をそのまま玄関に置くと、今度は玄関がふさがります。作業を始める前に、家に戻す物の一時置き場（床にレジャーシートや段ボールを広げるだけで十分です）と、手放す物をまとめる袋や箱を用意します。手放す物は「そのまま出せる物」「扱いを確認してから出す物」の二つに分けられるよう、箱を二つ用意しておくと後の作業が容易になります。降ろす作業と、手放し方を調べる作業を同じ日にやろうとすると途中で止まるため、分けて考えることが有効です。",
  },
];

const steps = [
  {
    title: "天気と時間を確保し、車内の物をすべて降ろす",
    body: "晴れていて風の強くない日を選び、平らで安全な場所に停めて作業します。座席の下、シートの背面ポケット、ドアポケット、コンソール、グローブボックス、トランク、床下の収納まで、入っている物をすべて降ろします。降ろした物は、地面に広げたシートや段ボールの上に種類ごとに並べます。この段階で分別はせず、すべて出して量を目で確認することが目的です。重い物や大きい物は無理をせず、二人で運ぶか、動かせるところまでで止めて構いません。作業中に飲み物や食べ物の残りが出てくることもあるため、ごみ袋を手元に置いておきます。",
  },
  {
    title: "「車に戻す」「家に戻す」「手放す」「保留」の四つに分ける",
    body: "並べた物を四つに分けます。車に戻すのは、決めごとで定めた範囲に入る物だけです。家に戻すのは、本来は家で使う物や、車に置く必要がなくなった物です。手放すのは、壊れている物、前の車用の付属品、同じ用途で新しい物に置き換わった古い方、期限や状態が変わって使えない物です。誰の物か分からない物や、家族に確認が必要な物は「保留」の箱に入れ、いつまでに確認するかを決めます。保留を無期限にすると、その箱ごとまた車に積まれてしまうため、期限を決めておくことが大切です。",
  },
  {
    title: "車に戻す物は、使う場面ごとに置き場所を決めてから積む",
    body: "戻す物は、使う場面を思い浮かべながら置き場所を決めます。運転中に手を伸ばす物はコンソールやドアポケット、降りてから使う物はトランク、という分け方が基本です。走行中に動くと危ない物を座席や足元に置かない、運転の視界や操作の妨げになる置き方をしない、という点は、どの車でも共通して気を付けたい部分です。トランクに積む物は、袋やケースにまとめて一か所に寄せておくと、荷物を積むときに場所を空けやすくなります。積み方や車内に置いてよい物の条件で迷う場合は、販売店や点検を受けている整備業者に確認してください。",
  },
  {
    title: "手放す物は、品目ごとに扱いの確認先を分ける",
    body: "車まわりの物には、家庭ごみとしてそのまま出せない扱いの品目が含まれます。タイヤやホイール、バッテリー、エンジンオイルや不凍液などの液体、消火器、発炎筒のように、自治体では収集せず販売店や専門の窓口での扱いになることが多い品目があります。これらは自分で判断せず、購入した販売店、ガソリンスタンド、整備業者、またはお住まいの自治体の公式案内で、扱いと引き渡し先を確認してから動かしてください。フロアマットやシートカバー、クッション、プラスチックの小物などの扱いは自治体の分別区分によって分かれるため、こちらもお住まいの市区町村の公式案内で確認します。分別に迷いやすい品目の考え方は、関連記事の分別が難しいごみの捨て方で整理しています。",
  },
  {
    title: "記録と登録情報を消してから電子機器を手放し、清掃して戻す",
    body: "ドライブレコーダー、カーナビ、ETC車載器、車内で使っていたタブレットやスマートフォンのホルダーに差したままの記録メディアには、走行の記録、自宅や訪問先の登録地点、通行の履歴などが残っていることがあります。手放す前に、本体とメモリーカードの両方から記録を消し、登録した地点や連携している機器の設定を解除します。取り外しや解除の方法が分からない機器は、販売店や整備業者に相談してください。手順の考え方は関連記事のパソコン・スマホのデータ消去と処分方法、記録メディアそのものの扱いは写真データと記録メディアの処分が参考になります。最後に、物がなくなった状態で掃除機をかけ、内装を拭いてから戻す物を積むと、片付いた状態が保ちやすくなります。",
  },
];

const ngActions = [
  {
    title: "バッテリー・オイル・不凍液などを、まとめて家庭ごみに出す",
    body: "車用のバッテリー、エンジンオイルや不凍液などの液体、消火器や発炎筒は、自治体では収集せず、販売店や専門の窓口での扱いになることが多い品目です。中身が残ったまま袋に入れて出すと、収集作業の事故や周囲の汚損につながるおそれがあります。扱いが分からない物は開けたり移し替えたりせず、購入した販売店、ガソリンスタンド、整備業者、またはお住まいの市区町村の公式案内で引き渡し先を確認してから動かしてください。",
  },
  {
    title: "ドライブレコーダーやカーナビを、記録と登録情報を残したまま譲る・売る",
    body: "走行の映像、登録した自宅や職場の地点、連携している機器の情報は、本体を初期化しないと残ったままになることがあります。メモリーカードを抜いただけでは本体側に記録が残る機種もあり、逆に本体を初期化してもカードに映像が残ることがあります。本体とカードの両方を確認し、操作が分からない場合は販売店や整備業者に相談してください。車ごと手放す場合も、車載機器の登録情報の扱いを引き渡し先に確認しておくことをおすすめします。",
  },
  {
    title: "降ろした物を玄関に積んだまま、次の作業日を決めない",
    body: "車内から降ろした物を玄関や廊下に置いたままにすると、家の中が狭くなり、再び車に戻してしまう原因となります。作業を始める前に家に戻す物の置き場を決め、降ろしたその日のうちに定位置まで運ぶところまでを一連の作業として計画します。時間が足りない場合は、作業の範囲を「トランクだけ」に絞り、最後まで終えられる量にしてください。片付けたあとに物が戻ってしまう構造は、関連記事の片付けのリバウンド防止で扱っています。",
  },
  {
    title: "チャイルドシートやジュニアシートを、状態と付属品を確認せずに譲る",
    body: "チャイルドシートやジュニアシートには、製品ごとに使用の目安となる期間や適合する体格の条件が定められており、取扱説明書や本体の表示に記載されています。付属品が欠けていたり、事故の衝撃を受けた履歴があったりする物を、確認しないまま譲るのは避けてください。譲る場合は取扱説明書と付属品をそろえ、本体の表示を相手と一緒に確認します。判断に迷う場合は、製造した業者の案内を確認するのが確実です。ベビー用品全般の手放し方は、関連記事のベビー用品の整理と処分でまとめています。",
  },
];

const judgeSigns = [
  "トランクや後部座席に大型の荷物が積まれていて、一人では降ろせない",
  "使わなくなったタイヤやホイールが、車庫や庭に何本も残っている",
  "家の片付けと並行して、車庫・物置・車内の物をまとめて減らしたい",
  "亡くなった家族や施設に移った家族の車が残り、中身の扱いに迷っている",
  "中身の分からない液体の容器や、扱いの分からない車用品が多く出てきた",
];

const faqs = [
  {
    q: "使わなくなったタイヤやホイールは、どこに相談すればよいですか？",
    a: "タイヤやホイールは、自治体では収集しない扱いになっていることが多い品目です。購入したタイヤ販売店やカー用品店、整備業者で引き取りの案内をしている場合があるため、まず購入先に確認するのが基本です。自治体で扱いがあるかどうかは地域によって異なりますので、お住まいの市区町村の公式案内もあわせて確認してください。本数が多い場合や自分で運べない場合は、不用品回収に対応する業者に、タイヤを引き受けられるかどうかを見積もりの段階で確認しておくと、当日に残されることを防げます。",
  },
  {
    q: "車内から出てきた古い書類は、そのまま捨ててよいですか？",
    a: "車検証や自動車保険の証券、整備の記録などは、車両の手続きに関わる書類のため、捨てる前に有効な物かどうかを確認してください。有効期限の切れた古い控えであっても、住所・氏名・車両の情報が記載されているため、そのまま資源として出すのではなく、記載部分が読めない状態にしてから処分する方が安心です。判断に迷う書類は「保留」としてまとめ、販売店や保険の窓口に確認してから決めてください。書類の残す基準の考え方は、本・書類の整理の記事で扱っています。",
  },
  {
    q: "車内の掃除と片付けは、どちらを先にすればよいですか？",
    a: "片付け（物を降ろして減らす）を先にし、そのあとで掃除に入るのが効率的です。物が載ったまま掃除機をかけても、隙間や座席の下に手が入らず、同じ場所をあとからやり直すことになります。すべて降ろした状態なら、シートを動かして足元まで掃除でき、汚れの原因になっていた食べこぼしや砂も一度に取り除けます。家全体でも同じ順番が基本で、物を減らしてから掃除に入る流れは、関連記事の片付けの順番で解説しています。",
  },
  {
    q: "家族の車の中身を、本人に確認せずに整理してもよいですか？",
    a: "共有の車であっても、載っている物には個人の持ち物が混ざっていることがほとんどです。仕事の道具、趣味の物、預かり物などが含まれている場合もあるため、明らかなごみ以外は本人に確認してから判断してください。確認の時間が取れないときは、降ろして「保留」の箱にまとめ、持ち主が見られる場所に置いておく方法をおすすめします。家族の物を扱うときの進め方や声のかけ方は、実家の片付けや親への声かけの記事の考え方が応用できます。",
  },
];

const related = [
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の扱いと進め方" },
  { href: "/jitensha-bike-shobun/", label: "自転車・バイクの処分方法", desc: "手続きと手放すルートの考え方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの捨て方", desc: "迷ったときの確認先と考え方" },
  { href: "/baby-yohin-seiri-shobun/", label: "ベビー用品の整理と処分", desc: "チャイルドシートを手放す基準" },
  { href: "/sports-outdoor-seiri/", label: "スポーツ・アウトドア用品の整理", desc: "かさばる道具の見直し方" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去", desc: "記録を残さず機器を手放す手順" },
  { href: "/shoukaki-shobun/", label: "家庭の消火器の処分方法", desc: "リサイクル窓口とゆうパック回収" },
  { href: "/kojin-kuruma-souzoku-haisha/", label: "亡くなった家族の車の処分", desc: "相続の名義変更と廃車（抹消登録）の手続き" },
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
    { "@type": "ListItem", position: 2, name: "車内・カー用品の整理と処分" },
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
    { href: "#kiso", label: "1｜車の中に物がたまり続ける3つの理由" },
    { href: "#merit", label: "2｜作業前に決めておく3つの事項" },
    { href: "#houshin", label: "3｜「すべて降ろす」「戻す範囲を決める」が基本" },
    { href: "#steps", label: "4｜車内・カー用品を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "車内・カー用品の整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          車内・カー用品の整理と処分｜トランク・座席にたまった物と使わなくなったカー用品の手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          トランクの中のいつ入れたか分からない紙袋やレジャーの道具、座席の下のレシートや持ち主の分からない小物、買い替えて余ったフロアマットや以前の車のシートカバーなど、車の中は毎日使っているのに中身を点検する機会がほとんどなく、物がたまりやすい場所です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、車内に物がたまる理由、整理の範囲を三つに分ける考え方、すべて降ろして仕分ける手順、車に常時載せておく物の決め方、タイヤやバッテリーのように扱いの分かれる品目をどこに確認するか、ドライブレコーダーやカーナビの記録を消してから手放す注意点までを順に解説します。車庫や物置に置かれた工具・タイヤの整理は別の記事で扱っており、本記事は「車の中と、車のために買った用品」に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>座席まわり・トランク・収納部の三つに分け、一度すべて降ろして総量を目で見る</li>
          <li>「車に戻す」「家に戻す」「手放す」「保留」の四つに分け、保留には期限を決める</li>
          <li>タイヤ・バッテリー・オイル・消火器などは自己判断で捨てず、販売店や自治体の案内で確認する</li>
          <li>ドライブレコーダーやカーナビは、本体とメモリーカードの両方から記録を消してから手放す</li>
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

      <H2 id="kiso" num="1">車の中に物がたまり続ける3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        毎日乗っているのに片付かないのは、車という空間の使われ方に理由があります。
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
        作業の範囲、車に戻す物の基準、降ろした物の置き場の三点を先に決めておくと、作業を滞りなく進められます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「すべて降ろす」「戻す範囲を決める」が基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車内の整理でいちばん効くのは、一度すべて降ろして平らな場所に並べることです。積まれた状態のまま「これは要る、これは要らない」と判断しようとすると、奥の物が見えないまま手前だけが片付き、総量は変わりません。降ろしてみると、同じ用途の物が重複していることや、前の車用の付属品が残っていることに気付けます。そのうえで「車に常時載せておく物」の範囲を決めておくと、片付いた状態を保ちやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車内の整理は、家全体の片付けの中では取りかかりやすい範囲です。一度で終わりが見えるため、家の片付けが進まないときの最初の一歩にも向いています。小さく始めて勢いを付ける進め方は<Link href="/katazuke-yaruki-tsuzukekata/" className="text-primary underline underline-offset-2">片付けのやる気が続かないときの進め方</Link>、家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>、降ろした物が玄関にたまらないようにする考え方は<Link href="/genkan-getabako-seiri/" className="text-primary underline underline-offset-2">玄関・下駄箱の片付け</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        車まわりの物は、車内だけでなく車庫や物置にも広がっていることがよくあります。タイヤ、洗車の道具、工具、オイルの缶などが車庫側にまとまっている場合は、車内と車庫をあわせて一度に見直すほうが、重複や不要品が見つけやすくなります。車庫側の進め方は<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">車庫・ガレージの片付け</Link>、物置の中身から整理する場合は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置・倉庫の解体前整理</Link>、屋外に置かれた物の扱いは<Link href="/niwa-fuyohin-shobun/" className="text-primary underline underline-offset-2">庭の不用品処分</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">車内・カー用品を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        「すべて降ろす→四つに分ける→置き場所を決めて戻す→手放す物の確認先を分ける→記録を消して清掃する」の順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">タイヤ・バッテリー・オイル・消火器などの扱いは、販売店またはお住まいの自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          タイヤ、ホイール、車用バッテリー、エンジンオイルや不凍液などの液体、消火器、発炎筒は、家庭ごみとしては収集せず、販売店や専門の窓口での扱いになっていることが多い品目です。取り扱いの可否や引き渡し先は、購入した販売店・カー用品店・整備業者と、お住まいの市区町村の公式案内で異なりますので、動かす前に必ず確認してください。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。中身の残った容器は開けたり移し替えたりせず、表示を確認し、分からなければ窓口に相談してください。フロアマットやシートカバー、プラスチックの小物の分別区分も自治体により異なります。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        亡くなった家族の車や、施設に移った家族の車が残っている場合は、車内の物の扱いだけでなく、車両そのものの名義や手続きが関わります。車内から出てきた書類や現金、貴重品の扱いは家族で共有し、勝手に処分しないことが原則です。片付けの途中で貴重品が出てきたときの考え方は<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>、故人の持ち物全体の進め方は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>、手放す物の品目と数を書き出しておく方法は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>で扱っています。
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
        車内の整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合、タイヤやバッテリー、液体類は引き受けられる範囲が業者によって異なります。見積もりの段階で、扱えない品目があるかどうかを品目ごとに確認しておくと、当日に残されることを防げます。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積もり書で見るべき点は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・業者により異なりますので、同じ条件で複数社に見積もりを依頼し、比較してください。
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
        本記事は一般的な知識の提供を目的としたものです。タイヤ・ホイール・車用バッテリー・エンジンオイル・不凍液などの液体、消火器、発炎筒、カー用品の分別区分や引き渡し先は、自治体および販売店により異なりますので、必ずお住まいの市区町村の公式案内および購入した販売店・整備業者の案内をご確認ください。車両そのものの名義変更・抹消登録などの手続きについては、販売店または関係する窓口にご確認ください。チャイルドシートなど安全に関わる製品の使用の可否は、取扱説明書および製造した業者の案内をご確認ください。業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・業者により異なりますので、見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
