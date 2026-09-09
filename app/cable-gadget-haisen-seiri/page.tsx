import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/cable-gadget-haisen-seiri/";
const TITLE = "ケーブル・充電器・古いガジェットの整理と処分｜配線まわりを片付けて使わない機器を手放す手順";
const DESC =
  "テレビの裏で絡まったコード、机の下のたこ足配線、機種変更のたびに残った古いスマホや充電器、箱のまま眠るルーターやデジタルカメラ。ケーブルや充電器、古いガジェットは、一つひとつは小さくても、家中に分散して確実に増えていく品目です。増える構造、今ある機器と対応させて残す基準、配線まわりを安全に外して整える手順、小型家電の回収や電池の扱いを自治体の案内で確認する考え方、手放す前のデータ消去の一般論、残す機器の置き方までを解説します。";
const PUBLISHED = "2026-09-09";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "機器を買うたびに付属品が付いてきて、機器を手放しても付属品は残る",
    body: "スマホ、タブレット、パソコン、ゲーム機、カメラ、イヤホン、電動歯ブラシ。電気で動く物を買うたびに、充電器、ケーブル、変換アダプタ、説明書、予備の部品が付いてきます。機器そのものは買い替えのときに手放しても、付属品は「まだ使えるかもしれない」という理由で引き出しや箱に残ります。機器と付属品が別々の場所に置かれた時点で、どれがどの機器の物か分からなくなり、対応する機器がもうないケーブルが何本も残ることになります。一つひとつは小さいため増えている自覚がなく、まとめて出したときに初めて量に驚く品目です。",
  },
  {
    title: "規格の移り変わりが速く、「使えなくなった物」がたまり続ける",
    body: "充電端子や接続端子の規格は数年単位で変わり、古い規格のケーブルや充電器は、対応する機器がなくなった時点で役目を終えます。しかし、見た目は壊れていないため、「いつか古い機器を使うときに要る」「誰かにあげられる」と考えて残されます。古いスマホや携帯音楽プレーヤー、使わなくなったルーター、初期の頃のデジタルカメラも同じで、動くかどうかに関係なく、今の暮らしで使う場面はほとんどありません。規格の変化に合わせて手放す習慣がないと、古い規格の物が層のように積み重なります。",
  },
  {
    title: "配線は「一度つないだら触らない」ため、要らない物が混ざったままになる",
    body: "テレビの裏、机の下、ベッドの脇の配線は、一度つないでしまうと、その後ほとんど触りません。機器を買い替えたときも、新しい配線を足すだけで古い配線を外さないことが多く、どこにもつながっていないケーブルや、使っていない機器の電源アダプタがコンセントに挿さったまま残ります。絡まった配線は掃除の邪魔になるうえ、ほこりがたまりやすく、何が何につながっているか分からないため、触ること自体が面倒になります。触らないからこそ、要らない物が混ざったまま固定されてしまうのが配線まわりの特徴です。",
  },
];

const merits = [
  {
    title: "決めごと1：「今ある機器と対応するか」を残す基準の軸にする",
    body: "ケーブルや充電器を残すかどうかは、「今、家にある機器のどれかに使えるか」で決めます。使える機器がない物は、状態がよくても手放す候補です。対応する機器があっても、同じ規格の物が何本もある場合は、「使う場所の数」を上限にして残します。例えば、寝室と居間と職場で充電するなら三本、というように場所に対応させます。予備を残す場合は「一種類につき一本まで」と決めておくと、際限なく残すことを防げます。古い機器本体も同じで、「この一年で電源を入れたか」を基準にし、入れていない物は手放す候補に入れます。",
  },
  {
    title: "決めごと2：機器本体は「データ」「電池」「本体」の三つに分けて考える",
    body: "古いスマホやタブレット、パソコン、カメラ、携帯音楽プレーヤーなどの機器本体は、ケーブルとは違い、手放す前に確認することが三つあります。一つ目は中に残っているデータです。写真や連絡先、アカウントの情報が残っていることがあるため、必要な物を移してから、一般的な方法で初期化やデータ消去を行います。二つ目は電池です。充電式の電池を内蔵している機器は、通常のごみとは別の扱いになることが多く、出し方は自治体によって異なります。三つ目は本体そのものの出し先で、小型家電の回収に出す、買取や下取りに出す、譲る、といった選択肢があります。この三つを機器ごとに確認してから動くと、途中で止まりません。",
  },
  {
    title: "決めごと3：配線は「全部外してから、必要な物だけつなぎ直す」と決める",
    body: "配線を整えるときは、絡まった中から要らない物だけを抜き取ろうとせず、その場所の配線をいったんすべて外してから、必要な物だけをつなぎ直すと決めます。一本ずつ抜き取る方法は、どれがどこにつながっているか確認しながらの作業になり、途中で分からなくなって手が止まります。すべて外すと決めておけば、残った機器に必要な本数だけを数え、それ以外はまとめて手放す候補に回せます。外す前に、今の配線の状態を写真に撮っておくと、つなぎ直すときの手がかりになります。作業の前には、機器の電源を切り、コンセントを抜いてから始めます。",
  },
];

const steps = [
  {
    title: "家中のケーブル・充電器・古い機器を一か所に集め、機器と対応させる",
    body: "引き出し、机の周り、テレビの裏、箱に入ったままの付属品、車の中、実家に置いたままの物など、ケーブルと充電器、使っていないガジェットがある場所をすべて確認して一か所に出します。集めたら、今使っている機器を一台ずつ思い浮かべ、その機器に対応するケーブルと充電器を隣に置いていきます。対応する機器がない物、何に使うか分からない物は別の山にします。この段階で、同じ規格のケーブルが何本あるか、古い規格の物がどれだけあるかが見えます。古いスマホやカメラなどの機器本体は、ケーブルとは別に並べ、電源が入るかどうかを確認しておきます。",
  },
  {
    title: "「残す」「売る・譲る」「手放す」「確認してから決める」の4つに分ける",
    body: "対応する機器があり、使う場所の数の範囲に収まる物は「残す」に入れます。対応する機器がない物、同じ規格で上限を超えた物、被膜が破れている物、端子が曲がっている物、発熱したことがある物は「手放す」に入れます。動作する古い機器本体で、状態がよい物は「売る・譲る」の候補です。中にデータが残っている機器、電池が内蔵されている機器、何の機器か分からない充電器は、「確認してから決める」に入れ、次の手順で扱いを確かめます。分けるときに迷った物は、一週間だけ使う場所に置いてみて、実際に使わなければ手放すという期限を決めます。",
  },
  {
    title: "機器本体は、データを移して一般的な方法で初期化してから出し先を決める",
    body: "「確認してから決める」に入れた古いスマホ、タブレット、パソコン、カメラは、まず中のデータを確認します。必要な写真や書類は別の場所に移し、アカウントの連携があれば解除し、SIMカードや記録メディアを抜いたうえで、機器の説明書や製造元の案内に沿った一般的な方法で初期化やデータ消去を行います。消去の方法は機器や製造元によって異なりますので、この記事では特定の手順を示していません。データの扱いが済んだ機器は、動作する物なら買取や下取り、譲渡、動作しない物なら小型家電の回収や自治体の区分での処分、という出し先を決めます。パソコンやスマホのデータ消去の考え方は関連記事で詳しく扱っています。",
  },
  {
    title: "手放す物は、電池の有無と自治体の回収方法を確認してから出す",
    body: "ケーブルや充電器、小型の機器は、自治体によって小型家電として回収拠点や回収ボックスに出せる場合、不燃ごみや金属の区分になる場合、品目や大きさによって扱いが分かれる場合があり、出し方は自治体によって異なります。充電式の電池を内蔵した機器やモバイルバッテリーは、通常のごみとは別の扱いになることが多く、回収の場所や方法も自治体や販売店の案内で確認する必要があります。品目と数を書き出し、お住まいの市区町村の分別案内で確認してから出してください。分からない物は、自治体の廃棄物担当の窓口に問い合わせると、区分を案内してもらえます。",
  },
  {
    title: "配線を全部外して必要な物だけつなぎ直し、残す物に印を付ける",
    body: "テレビの裏や机の下は、電源を切ってコンセントを抜き、今の状態を写真に撮ってから、配線をすべて外します。ほこりを取り、残す機器に必要なケーブルだけを数えてつなぎ直します。つなぎ直したケーブルには、両端に「テレビ」「録画機」のように機器名を書いたテープを巻いておくと、次に触るときに迷いません。残す予備のケーブルと充電器は、種類ごとに束ね、一つの箱か引き出しにまとめて置きます。置き場所が一か所に決まると、新しい機器を買ったときに「どれと入れ替えるか」を考える習慣ができ、付属品が分散して増えることを防げます。",
  },
];

const ngActions = [
  {
    title: "何に使うか分からないケーブルや充電器を「いつか要る」で残し続ける",
    body: "対応する機器がない物は、今後も使う場面がほとんどありません。規格が変わり続ける以上、古い規格の物は時間がたつほど使い道がなくなります。「いつか」ではなく「今ある機器に使えるか」で判断し、使えない物は手放してください。どうしても迷う場合は、一週間だけ使う場所に置き、使わなければ手放すという期限を決めます。",
  },
  {
    title: "古いスマホやパソコンを、データを確認せずに手放す",
    body: "古い機器には、写真、連絡先、メール、アカウントの情報、支払いに関わる情報が残っていることがあります。売る、譲る、処分するいずれの場合も、必要なデータを移し、アカウントの連携を解除し、記録メディアを抜いたうえで、製造元の案内に沿った一般的な方法で初期化やデータ消去を済ませてから手放してください。初期化だけでは不十分とされる場合があることも、関連記事で扱っています。",
  },
  {
    title: "充電式の電池を内蔵した機器やモバイルバッテリーを、確認せずに通常のごみに出す",
    body: "充電式の電池を内蔵した機器やモバイルバッテリーは、通常のごみとは別の扱いになることが多く、出し方は自治体によって異なります。膨らんでいる物、発熱したことがある物は、扱いに特に注意が必要です。まとめて出す前に、お住まいの市区町村の分別案内や販売店の回収の案内で、出し方を確認してください。分からない場合は、自治体の廃棄物担当の窓口に問い合わせます。",
  },
  {
    title: "被膜が破れたケーブルや、発熱した充電器をそのまま使い続ける",
    body: "被膜が破れて中の線が見えているケーブル、端子が曲がった物、使用中に熱くなったことがある充電器は、状態を理由に手放す候補に入れます。配線を整えるときに、たこ足になったテーブルタップや、ほこりがたまったコンセントの周りもあわせて見直してください。安全面の確認の考え方は、古い家電の安全確認の記事でも扱っています。",
  },
];

const judgeSigns = [
  "ケーブルやガジェットだけでなく、部屋全体に物があふれていて、集めて分ける作業から手が付けられない",
  "実家や故人の家に、古いパソコンや機器、配線が大量に残っていて、一人では確認しきれない",
  "引っ越しや退去の期限があり、機器や家電を含めた家財を短期間で減らす必要がある",
  "テレビやパソコンなど大きい機器が複数あり、自分では運び出せない",
  "体調や時間の都合で、データの確認から出し方の確認までを自分で進める余裕がない",
];

const faqs = [
  {
    q: "古いケーブルや充電器は、どう処分すればよいですか？",
    a: "ケーブルや充電器の分別区分は自治体によって異なり、小型家電の回収拠点や回収ボックスに出せる場合、不燃ごみや金属の区分になる場合、種類によって扱いが分かれる場合があります。お住まいの市区町村の分別案内で確認してください。分からない場合は、自治体の廃棄物担当の窓口に問い合わせると、区分を案内してもらえます。被膜が破れた物や端子が曲がった物は、状態を理由に手放す候補に入れます。",
  },
  {
    q: "古いスマホやタブレットは、初期化すれば手放してよいですか？",
    a: "初期化の前に、必要なデータを移し、アカウントの連携を解除し、SIMカードや記録メディアを抜いておくことが一般的な手順です。初期化やデータ消去の方法は機器や製造元によって異なりますので、説明書や製造元の案内に沿って行ってください。初期化だけでは不十分とされる場合があることや、買取・下取り・回収ルートの使い分けは、パソコン・スマホのデータ消去と処分方法の記事で詳しく扱っています。",
  },
  {
    q: "モバイルバッテリーや充電式の機器は、どこに出せばよいですか？",
    a: "充電式の電池を内蔵した機器やモバイルバッテリーは、通常のごみとは別の扱いになることが多く、回収の場所や方法は自治体や販売店によって異なります。お住まいの市区町村の分別案内や、販売店の回収の案内で確認してください。膨らんでいる物や発熱したことがある物は、扱いに特に注意が必要ですので、出す前に自治体の窓口に問い合わせることをおすすめします。",
  },
  {
    q: "動く古い機器は、売ったほうがよいですか？",
    a: "動作する機器で状態がよい物は、買取や下取り、譲渡という選択肢があります。査定の基準や条件は、機種、状態、付属品の有無、事業者によって異なり、この記事では特定の金額を示していません。出す前にデータの消去を済ませ、付属品や箱があればそろえておきます。売れなかった場合の扱いを先に決めておくと、「売れるかもしれないから残す」という保留が増えません。",
  },
];

const related = [
  { href: "/hikidashi-komono-seiri/", label: "引き出し・小物の整理", desc: "文房具・電池・小物がたまる引き出しの手順" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去と処分", desc: "初期化だけで手放さないための手順" },
  { href: "/kiroku-media-shobun/", label: "記録メディアの処分", desc: "外付けHDD・SDカード・ディスクの手放し方" },
  { href: "/furui-kaden-anzen-shobun/", label: "古い家電の安全確認と処分", desc: "コード・発熱・異音の見直しポイント" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの捨て方", desc: "スプレー缶・電池など迷ったときの考え方" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理方法", desc: "故人のスマホ・PC・ネット契約の扱い方" },
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
    { "@type": "ListItem", position: 2, name: "ケーブル・充電器・古いガジェットの整理と処分" },
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
    { href: "#kiso", label: "1｜ケーブル・充電器・古いガジェットが増える3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「今ある機器と対応するか」と「データ・電池・本体」で考える" },
    { href: "#steps", label: "4｜配線まわりと古い機器を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "ケーブル・充電器・古いガジェットの整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ケーブル・充電器・古いガジェットの整理と処分｜配線まわりを片付けて使わない機器を手放す手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月9日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          テレビの裏で絡まったコード、机の下でたこ足になったテーブルタップ、機種変更のたびに残った古いスマホと充電器、箱に入ったまま何年も動かしていないルーターやデジタルカメラ、規格が変わって使い道のなくなったケーブルの束。ケーブルや充電器、古いガジェットは、一つひとつは小さく、壊れているようにも見えないため、「いつか使う」「誰かにあげられる」という理由で残され、家中に分散したまま確実に増えていきます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、ケーブルや古い機器が増える構造、「今ある機器と対応するか」で残す物を決める考え方、機器本体を「データ」「電池」「本体」の三つに分けて確認する決めごと、家中から集めて4つに分け、配線を全部外してつなぎ直す手順、小型家電の回収や充電式の電池の扱いを自治体の案内で確認する考え方、残す物の置き方を順に解説します。引き出しの中の文房具や電池を含めた小物の整理、パソコンやスマホのデータ消去そのものは別の記事で扱っており、この記事は配線まわりと使わなくなった機器に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ケーブルと充電器は「今ある機器に使えるか」で残し、同じ規格は「使う場所の数」を上限にする</li>
          <li>古い機器本体は「データ」「電池」「本体の出し先」の三つを機器ごとに確認してから動く</li>
          <li>配線は一本ずつ抜かず、写真を撮って全部外し、必要な本数だけつなぎ直して機器名を付ける</li>
          <li>小型家電の回収方法と充電式電池の出し方は自治体により異なる。分別案内で確認してから出す</li>
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

      <H2 id="kiso" num="1">ケーブル・充電器・古いガジェットが増える3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        買うたびに付属品が付いてきて、規格が変わり、配線は触らない。三つの構造が重なって、気付かないうちに増えていきます。
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
        残す基準、機器本体の確認項目、配線の扱い方。この三つを先に決めておくと、集めたあとの判断が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「今ある機器と対応するか」と「データ・電池・本体」で考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ケーブルと充電器の整理は、「今ある機器に使えるか」という一つの軸で進めると、迷う時間が大きく減ります。使える機器がない物は、見た目がきれいでも役目を終えています。同じ規格が複数ある場合は、充電や接続をする場所の数を上限にし、予備は一種類につき一本までと決めます。古い機器本体は、「この一年で電源を入れたか」を基準にし、入れていない物は手放す候補にします。そのうえで、機器本体は「データ」「電池」「本体の出し先」の三つを確認してから動くと決めておくと、途中でデータの心配や出し方の疑問で手が止まることがありません。順番としては、まず家中から集めて機器と対応させ、次に分け、それから機器本体の確認と出し方の確認に進みます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ケーブルや充電器が引き出しの中で文房具や電池と混ざっている場合は、引き出しの整理と同じ日に進めると効率がよくなります。引き出しごとの役割の決め方や電池の扱いは<Link href="/hikidashi-komono-seiri/" className="text-primary underline underline-offset-2">引き出し・小物の整理</Link>で扱っています。古いスマホやパソコンを手放す前のデータ消去の考え方と処分制度の枠組みは<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去と処分方法</Link>、外付けの記録装置やメモリーカード、ディスクの手放し方は<Link href="/kiroku-media-shobun/" className="text-primary underline underline-offset-2">記録メディアの処分</Link>、故人の機器やネット契約の扱いは<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理方法</Link>を参考にしてください。家全体の中でどの順番に取り組むかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        動作する古い機器で状態がよい物は、買取や下取り、譲渡という選択肢を先に考えます。査定の基準や条件は、機種、状態、付属品の有無、事業者によって異なりますので、この記事では特定の金額を示していません。リサイクルショップに持ち込む場合の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>で扱っています。「売れるかもしれない」を理由に残し続けると保留が増えて減りませんので、「売れなければ処分する」と先に決めておくことが、機器の整理を止めないコツです。機器の空き箱や付属の説明書も、機器を手放すときに一緒に手放す物として扱います。空き箱がたまる構造と上限の決め方は<Link href="/kaimono-fukuro-stock/" className="text-primary underline underline-offset-2">紙袋・包装材・空き箱のストック整理</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">配線まわりと古い機器を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集めて機器と対応させる→4つに分ける→機器本体はデータを移して初期化→電池と回収方法を確認して出す→配線を全部外してつなぎ直す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">小型家電の回収方法と充電式電池の出し方は、自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          ケーブル、充電器、電源アダプタ、古いスマホやカメラなどの小型の機器は、自治体によって小型家電の回収拠点や回収ボックスに出せる場合、不燃ごみや金属の区分になる場合、品目や大きさによって扱いが分かれる場合があり、回収の方法は自治体によって異なります。充電式の電池を内蔵した機器やモバイルバッテリーは、通常のごみとは別の扱いになることが多く、回収の場所や方法も自治体や販売店の案内で確認が必要です。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。出す前に、必ずお住まいの市区町村の公式案内で分別区分と回収方法をご確認ください。テレビやパソコンなど、別の制度の対象になる機器の扱いは<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>、電池やスプレー缶など迷いやすい品目の考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの捨て方</Link>で扱っています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        配線を整えるときは、被膜が破れたケーブル、端子が曲がった物、使用中に熱くなったことがある充電器、ほこりがたまったコンセントの周り、たこ足になったテーブルタップもあわせて見直します。長く使った機器の安全面の確認の考え方は<Link href="/furui-kaden-anzen-shobun/" className="text-primary underline underline-offset-2">古い家電の安全確認と処分</Link>で扱っています。実家や故人の家で古いパソコンや機器、配線が大量に出てきた場合は、機器ごとにデータの確認が必要になるため、品目と数を書き出してから進めると、家族で分担するときや業者に相談するときに話が早く進みます。書き出し方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>、手放す物の出し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>を参考にしてください。残す物の置き場所を整えるときは、収納を買い足す前に<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>も参考にしてください。
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
        ケーブルや小型の機器の整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、残す機器とケーブルは自分で先に取り分けておく必要があります。古いスマホやパソコンのデータの確認と消去も、依頼する前に済ませておくか、データの扱いをどうするかを見積もりの時点で確認してください。買取に対応している業者に依頼する場合は、査定の対象と条件をあらかじめ確認します。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の見方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。ケーブル・充電器・電源アダプタ・小型の電子機器・充電式電池・モバイルバッテリーの分別区分や回収方法は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。機器のデータ消去や初期化の方法は機器や製造元により異なりますので、説明書や製造元の案内に沿って行ってください。買取や査定の基準・条件は店舗や事業者により異なりますので、事前にご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
