import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/sports-outdoor-seiri/";
const TITLE = "スポーツ用品・アウトドア用品の整理｜かさばる道具の見直しと手放し方";
const DESC =
  "ゴルフバッグ、スキー・スノーボード、釣り具、トレーニング器具、テントや寝袋——スポーツ用品とアウトドア用品は大きくて数が多く、片付けが後回しになりがちです。使用シーズンでの見直し基準、劣化の見分け方、シーズンオフの収納の決め方、カセットガス缶やリチウムイオン電池など燃料・危険物の注意点、買取や粗大ごみを含む手放し方までを整理して解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "使うのが年に数回——「稼働率の低さ」が判断を鈍らせる",
    body: "スキー板やスノーボード、テントやタープ、クーラーボックスといった道具は、そもそも一年のうち限られた季節にしか出番がありません。使用頻度が低いこと自体は道具の性質であって欠点ではないのですが、片付けの場面では「今は使っていない」と「もう使わない」の区別がつきにくくなり、判断が保留されがちです。衣類や食器のように毎日触れる物と違い、シーズンをまたぐと持っていること自体を忘れてしまうこともあります。まずは「頻度が低いから判断しづらいのは当たり前」と前提を置き、季節ではなく回数で見直す仕組みを作ることが出発点になります。",
  },
  {
    title: "一つひとつが大きく、家族の人数分だけ数が増える",
    body: "ゴルフバッグ、スノーボードのケース、釣り竿のロッドケース、テント一式、折りたたみチェアとテーブル。どれも単体で存在感があり、収納の一角ではなく一区画を占めます。さらにやっかいなのは、家族で楽しむ趣味ほど人数分そろえる点です。四人家族ならチェアが四脚、寝袋が四つ、スキーとブーツが四組。個々の物は「まだ使える」ものばかりでも、合計の体積は押し入れや物置の容量をあっさり超えます。片付けの検討は一点ずつではなく、「この趣味の道具一式で、家のどれだけの面積を使っているか」という単位で眺めると全体像がつかみやすくなります。",
  },
  {
    title: "「また始めるかも」が保留を長期化させる",
    body: "スポーツやアウトドアの道具は、単なる物ではなく、そのときの楽しかった記憶や「またやりたい」という気持ちと結び付いています。だからこそ、使っていない自覚があっても手放す決断が重くなります。ここで大切なのは、道具を手放すことと趣味をあきらめることを同じ意味に受け取らないことです。生活の時期によって続けられる趣味は変わりますし、再開するときには体格も好みも、道具の規格も変わっていることがあります。「今の暮らしで出番があるか」という現在形の問いに置き換えると、気持ちを傷つけずに整理を進めやすくなります。",
  },
];

const merits = [
  {
    title: "見直しの基準1：直近2〜3シーズンで何回使ったかを数える",
    body: "年に数回しか使わない道具に「1年使っていないか」という基準を当てはめても、判断はうまくいきません。おすすめは、直近2〜3シーズンをさかのぼって使用回数を思い出す方法です。ゼロ回が2シーズン続いている物、思い出せない物は見直しの候補になります。逆に、回数は少なくても毎シーズン必ず持ち出している物は、迷わず残してよい道具です。家族で使う物は、誰が何回使ったかを一緒に確認すると納得感が出ます。回数を思い出せない物が多いときは、次のシーズンに使った物へ付箋を貼っていく方法にすると、翌年の見直しがぐっと楽になります。",
  },
  {
    title: "見直しの基準2：劣化しているかを手で触って確かめる",
    body: "長く保管された道具は、見た目がきれいでも素材が傷んでいることがあります。ゴムや樹脂のパーツが硬くなっていたり、逆に表面がべたついていたりする、テントやレインウェアの生地の裏側がはがれて粉を吹く、金属部分にさびが浮いている、ゴムボートや浮き輪の空気が抜けやすくなっている——こうした変化は保管中の経年で起こります。安全に関わる部分に不安があるものは、無理に使い続けず、メーカーや販売店に相談してから判断してください。劣化が進んだ物は売却も譲渡も難しいため、処分の対象として整理するのが現実的です。",
  },
  {
    title: "見直しの基準3：再開するときは「借りる・買い直す」も選べる",
    body: "「また始めるかもしれないから」という理由で保留にしている道具は、再開したときの選択肢を思い浮かべてみると判断しやすくなります。現在はスキー場やキャンプ場、ゴルフ場などでの用品レンタルが広く普及していますし、中古市場も活発です。つまり、再開のタイミングで借りる、あるいは今の自分に合う物を選び直すという道があります。何年も出番のない道具を保管し続けるために生活空間を割くのか、必要になったときに調達するのか。どちらが今の暮らしに合うかで決めれば十分で、手放したから二度とできないわけではありません。",
  },
];

const steps = [
  {
    title: "しまってある場所からすべて出し、種目ごとに並べる",
    body: "最初の作業は、押し入れ、クローゼットの上段、ベランダの収納庫、物置、車のトランクなど、点在している道具を一か所に集めることです。スポーツ用品とアウトドア用品は家中に散っていることが多く、集めて初めて総量が見えます。並べるときは「スキー」「釣り」「キャンプ」「トレーニング」のように種目・用途ごとにまとめてください。同じ用途の物が重複していること、消耗品の在庫が余っていることに、この段階で気づけます。屋外の物置にまとめて入っている場合は先に外の整理から手を付ける方法もあります。",
  },
  {
    title: "使用回数と劣化で「残す・迷う・手放す」に分ける",
    body: "並べた道具を、直近2〜3シーズンの使用回数と劣化の状態で三つに分けます。毎シーズン使っていて状態もよい物は残す、ゼロ回が続いていて劣化もある物は手放す、その中間は「迷う」に置きます。迷う箱をあえて作るのは、その場で決め切れない物に時間を取られて作業が止まるのを防ぐためです。全体を分け終えてから、迷う箱をもう一度見直すと、周囲との比較で判断がつきやすくなります。判断が重い物は無理に急がず、期限を決めて再検討する形にしても構いません。",
  },
  {
    title: "燃料・電池を含む物を必ず別にして、出し方を調べる",
    body: "アウトドア用品には、通常のごみに混ぜられない物が含まれます。カセットガス缶やアウトドア用のガスカートリッジ、ホワイトガソリンなどの燃料、着火剤、燃料用アルコール、そしてモバイルバッテリーやリチウムイオン電池を内蔵したランタン・扇風機・ヘッドライトなどです。これらは中身の抜き方や出し方の指示が自治体ごとに大きく異なり、販売店の回収に案内される場合もあります。作業中はまとめて別の場所によけておき、後述の手順で必ず自治体の案内と製品の取扱説明書を確認してください。",
  },
  {
    title: "手放す物をルートごとに仕分ける",
    body: "手放すと決めた物は、状態と大きさでルートを分けます。使用感が少なく人気のある道具は買取やフリマアプリ、知人への譲渡が向きます。売れるほどではないけれど使える物は、地域の譲渡掲示板で引き取り手を探す方法もあります。売却に向かない物は自治体のルールに従って処分し、規定のサイズを超える物は粗大ごみの手続きが必要になることが一般的です。点数が多くて自力の搬出が難しいときは、業者にまとめて依頼する選択肢も検討してください。",
  },
  {
    title: "残す物のシーズンオフの置き場所を先に決める",
    body: "整理の仕上げは、残した道具の「使わない期間の居場所」を決めることです。ここを決めずに戻すと、来シーズンには結局あちこちに散らばります。屋外の物置に置く物と室内に置く物を分け、湿気やさびを避けたい金属パーツ・電子機器・寝袋などは室内側に、汚れても支障のない大型の道具は屋外側に、といった線引きをしておくと管理が楽です。重い物は棚の下段に置き、上段には軽い物を。季節ごとの入れ替えを仕組みにしておくと、翌年の見直しがそのまま定期点検になります。",
  },
];

const ngActions = [
  {
    title: "ガス缶や燃料を、中身が残ったまま普通のごみに混ぜる",
    body: "使いかけのカセットガス缶やアウトドア用ガスカートリッジ、ホワイトガソリン、燃料用アルコールなどを、そのまま燃えないごみの袋に入れてしまうのは避けてください。収集車や処理施設での事故につながるおそれがあり、多くの自治体が個別の出し方を定めています。中身の抜き方や、抜いてよいかどうかの考え方も自治体や製品によって異なり、全国共通の手順はありません。必ずお住まいの自治体の分別案内と、製品の取扱説明書の廃棄に関する記載を確認し、判断に迷う場合は自治体の窓口や販売店に相談しましょう。",
  },
  {
    title: "リチウムイオン電池入りの機器をそのまま捨てる",
    body: "充電式のランタンやポータブル電源、モバイルバッテリー、電動の空気入れ、充電式の携帯扇風機など、アウトドア用品にはリチウムイオン電池を内蔵した機器が増えています。これらは強い衝撃や圧迫で発熱・発火するおそれがあるため、通常のごみとは別扱いにしている自治体がほとんどです。回収ボックスや拠点回収、販売店での引き取りなど、地域によって受け入れ先が異なります。分別の判断が難しい物が複数ある場合は、まとめて確認してから出すと二度手間になりません。",
  },
  {
    title: "汚れや湿気が残ったまま物置へ押し込む",
    body: "撤収した直後のテントやタープ、濡れたままの寝袋、砂や泥の付いたクーラーボックスをそのまま収納すると、カビ・においの発生や生地の劣化を早めます。次に開けたときに使えない状態になっていれば、結局は処分品が増えるだけです。手間に感じても、乾かす・汚れを落とす・完全に冷ましてからしまうという流れを守りましょう。屋外の物置は昼夜の温度差で結露しやすいため、湿気に弱い物は室内保管に回す判断も必要です。においが気になる収納スペースは換気と清掃を先に済ませておくと安心です。",
  },
  {
    title: "「また始めるかも」で全点を保留にする",
    body: "見直しの場でいちばん起きやすいのが、すべてを「保留」にして元の場所へ戻してしまうことです。これでは作業時間だけが消え、来年も同じ状況が繰り返されます。全部を決め切る必要はありませんが、「保留にしてよい数の上限」を先に決めておくと歯止めになります。たとえば種目ごとに保留は三点まで、あるいは保留の箱一つ分まで、といった形です。上限を超えた分は、使用回数と劣化の基準に立ち返って順位を付けましょう。決めきれない物こそ、判断の材料を増やすより、枠を決めるほうが前に進みます。",
  },
];

const judgeSigns = [
  "大型の道具が多く、自力での運び出しが体力的に難しい",
  "物置やガレージが道具でふさがっていて、手前から動かせない",
  "家族分の用品がたまり、点数が多くて自治体の回収だけでは追いつかない",
  "引っ越しや退去の期限が決まっていて、仕分けの時間が取れない",
  "分別の判断が難しい物が混在し、自分では区分を決めきれない",
];

const faqs = [
  {
    q: "使っていないゴルフクラブやスノーボードは、まず何から手を付ければよいですか？",
    a: "最初にやるとよいのは、道具を全部出して直近2〜3シーズンの使用回数を確認することです。回数がゼロのまま複数シーズン経っている物は見直しの候補になります。そのうえで、グリップやビンディングなどのゴム・樹脂パーツの状態、金属部分のさびを確かめてください。状態がよければ買取や譲渡の対象になりますし、劣化が進んでいれば処分として整理するほうが現実的です。",
  },
  {
    q: "カセットガス缶や燃料は、どうやって処分すればよいですか？",
    a: "出し方は自治体によって大きく異なり、全国共通の手順はありません。中身が残っている場合の扱い、穴を開けるかどうかの考え方、指定の袋や日程まで地域ごとに定められています。必ずお住まいの自治体の分別案内で品目名を検索し、あわせて製品の取扱説明書の廃棄に関する記載も確認してください。判断に迷うものは、自己流で処理せず自治体の窓口や販売店に相談するのが安全です。",
  },
  {
    q: "テントや寝袋は防災用として残しておくべきでしょうか？",
    a: "使える状態であれば、残す価値のある道具です。ランタン、カセットコンロ、寝袋、折りたたみチェア、クーラーボックスなどは、停電時や避難生活で役立つ場面があります。ただし、防災用として残すなら「押し入れの奥」ではなく、すぐ取り出せる場所に置くことが前提です。数を絞ってすぐ持ち出せる形にまとめておくと、備蓄としての意味が出てきます。生地や電池の状態は年に一度確認しましょう。",
  },
  {
    q: "トレーニング器具が重くて動かせません。どうすればよいですか？",
    a: "ダンベルやベンチ、エアロバイクなどは、重量に加えて形が持ちにくく、階段のある住まいでは搬出が難しくなります。分解できる物は説明書を確認して部品単位に分け、床や壁を傷めないよう養生してから運びましょう。それでも難しい場合は、搬出を含めて対応できる業者への依頼が現実的です。大型の物は自治体の回収でもサイズや重量の制限がある場合があるため、事前に案内を確認してください。",
  },
];

const related = [
  { href: "/garage-katazuke/", label: "ガレージの片付け", desc: "車まわりにたまった物の整理" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置の解体前整理", desc: "撤去の前にやるべき中身の整理" },
  { href: "/bousai-bichiku-katazuke/", label: "防災備蓄の片付け", desc: "備えを使える状態で保つ管理法" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミ", desc: "判断に迷う品目の調べ方" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップ・買取の併用", desc: "売れる物を活かす手放し方" },
  { href: "/jitensha-bike-shobun/", label: "自転車・バイクの処分", desc: "防犯登録と手続きの進め方" },
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
    { "@type": "ListItem", position: 2, name: "スポーツ用品・アウトドア用品の整理" },
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
    { href: "#kiso", label: "1｜スポーツ・アウトドア用品が片付かない理由" },
    { href: "#merit", label: "2｜見直しの3つの基準" },
    { href: "#houshin", label: "3｜収納と保管の全体方針" },
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

      <Breadcrumb items={[{ label: "スポーツ用品・アウトドア用品の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          スポーツ用品・アウトドア用品の整理｜かさばる道具の見直しと手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れの奥のゴルフバッグ、物置に立てかけたままのスキー板、ベランダに積まれた釣り具のケース、部屋の隅で物置台になっているエアロバイク。スポーツ用品とアウトドア用品は、一つひとつが大きく、家族の分だけ数が増え、しかも出番は年に数回。片付けの検討がいちばん後回しになりやすいジャンルです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、こうした道具が片付けを難しくする理由、シーズン単位で判断する見直しの基準、劣化の見分け方、シーズンオフの収納の決め方、そしてカセットガス缶やリチウムイオン電池を含む機器など、扱いに注意が必要な物の考え方までを順に整理します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>判断の物差しは「1年」ではなく「直近2〜3シーズンで何回使ったか」</li>
          <li>ゴム・樹脂の硬化やべたつき、生地のはがれ、さびは保管中に進む。手で触って確認する</li>
          <li>燃料・ガス缶・リチウムイオン電池を含む物は通常のごみに混ぜない。自治体案内と取扱説明書を必ず確認</li>
          <li>残す物はシーズンオフの置き場所を先に決める。屋外と室内、重い物と軽い物で分ける</li>
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

      <H2 id="kiso" num="1">スポーツ・アウトドア用品が片付かない理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ゴルフクラブとバッグ、スキーやスノーボードの板とブーツ、釣り具、ラケット類、ダンベルやベンチなどのトレーニング器具、テント・タープ・寝袋・チェア・テーブル・クーラーボックス・ランタン、キャンプ用の調理器具。これらが手強い理由は、物そのものよりも「持ち方の構造」にあります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">見直しの3つの基準</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        シーズン用品を判断するときの物差しは、日用品とは分けて考えます。回数・劣化・再開時の選択肢という3つの基準を用意しておくと、迷いが減ります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">収納と保管の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        残すと決めた道具は、置き場所を先に決めてから戻します。ここで意識したいのは、屋外に置いてよい物と室内に置くべき物を分けることです。屋外の物置やガレージは温度差で結露しやすく、金属部分のさび、電子機器の故障、寝袋やダウンの湿気による劣化が起きやすい環境です。逆に、汚れても支障のない大型の道具や、屋外で使う前提の物は外側にまとめると、室内の収納が軽くなります。重い物は棚の下段に置き、持ち上げる動作が少なくて済むようにしておくと、出し入れの負担も減ります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物置やガレージに一式まとめて入っている場合は、<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">ガレージの片付け</Link>や<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置の解体前整理</Link>の記事が参考になります。自宅の収納だけで足りない場合は屋外用の保管サービスを借りる選択肢もありますが、預けたまま存在を忘れると保管そのものが目的になってしまうため、預ける物と期間を決めてから使うのがおすすめです。季節ごとの入れ替えを年に一度の点検日として決めておくと、道具の状態確認と見直しを同じタイミングで済ませられます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        なお、ランタン、カセットコンロ、寝袋、折りたたみチェア、クーラーボックスなど、防災用品として兼用できる道具は、点数を絞ったうえで残す価値があります。停電時や避難生活で実際に役立つ場面があるためです。ただし「奥にしまってあるが取り出せない」状態では意味がないので、すぐ持ち出せる場所にまとめておきましょう。備えとしての管理の考え方は<Link href="/bousai-bichiku-katazuke/" className="text-primary underline underline-offset-2">防災備蓄の片付け</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">整理を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、集める→分ける→注意が必要な物を分離する→ルートを決める→置き場所を決める、の5ステップです。
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
        <h3 className="font-bold text-text-primary mb-2">燃料・危険物の扱いは、必ず自治体の案内と取扱説明書で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          カセットガス缶やアウトドア用のガスカートリッジ、ホワイトガソリン、着火剤、燃料用アルコール、そしてモバイルバッテリーやリチウムイオン電池を内蔵した機器は、通常のごみに混ぜられないことが多い品目です。中身の抜き方や出し方の指示は自治体によって異なり、販売店や専用の回収拠点に案内される場合もあります。この記事で全国共通の手順を示すことはできません。必ずお住まいの自治体の分別案内で品目名を確認し、あわせて製品の取扱説明書の廃棄に関する記載を読んでください。判断に迷う品目が複数あるときは、<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいゴミの出し方</Link>の記事で調べ方を整理しています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放すルートについては、状態のよい道具は買取やフリマアプリ、譲渡が向きます。活用の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>で解説しています。サイズが大きい物は自治体の粗大ごみとして申し込む流れが一般的で、手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を参考にしてください。自転車やバイクに関する道具・車体そのものは手続きが別になるため、<Link href="/jitensha-bike-shobun/" className="text-primary underline underline-offset-2">自転車・バイクの処分</Link>で確認しましょう。
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
        道具の仕分け自体は自力でできる範囲が広い作業ですが、次のような状況では片付け・不用品回収業者の力を借りるほうが現実的です。対応できる業者は<Link href="/area/saitama/" className="text-primary underline underline-offset-2">さいたまの片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。料金は物量・間取り・地域により異なるため、複数社の見積もりで比べるのが確実です。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴や口コミを比較して選ぶ方法が便利です。自治体回収と業者の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。なお、燃料や電池を含む品目は業者でも取り扱えない場合があるため、依頼前に対応可否を確認してください。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なり、特にガス缶や燃料、リチウムイオン電池を含む機器の出し方は地域や製品ごとに指示が異なります。必ずお住まいの自治体の案内と製品の取扱説明書をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
