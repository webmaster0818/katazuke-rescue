import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/koromogae-shunou-shikumika/";
const TITLE = "衣替えの手間を減らす収納の仕組み化｜衣類を増やさない習慣づくり";
const DESC =
  "毎シーズンの衣替えが重労働になるのは、衣類の総量が多く、収納が「詰め込み型」になっているからです。衣替えそのものを減らすワンアクション収納、人別・季節別の定位置管理、ハンガー本数の上限設定という3つの仕組み、全出しから定位置化までの自力5ステップ、圧縮袋への詰め込み先送りなどのNG行動、量が多い場合の処分・買取の使い分けまでを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "衣替えが大変なのは「作業」ではなく「総量」の問題",
    body: "衣替えのたびに半日仕事になる、収納から出した服の山が数日放置される——こうした悩みの根本原因は、衣替えという作業のやり方ではなく、衣類の総量にあります。収納量の限界を超えた服を季節ごとに入れ替えようとするから、出す・しまうが大仕事になるのです。逆に言えば、総量が収納量の8割程度に収まっていれば、衣替えは1〜2時間で終わる軽作業になります。仕組み化の第一歩は、収納テクニックではなく総量の見直しです。",
  },
  {
    title: "「とりあえずしまう」詰め込み収納がリバウンドを生む",
    body: "衣替えのたびに散らかる家に共通するのが、「空いている場所にとりあえず詰める」収納です。どこに何があるか分からなくなるため、同じような服を重複して買ってしまい、総量がさらに増える悪循環に陥ります。また、詰め込まれた服はシワや湿気で傷みやすく、「持っているのに着ない服」を量産します。衣類は「人別・季節別に定位置が決まっていて、開ければ全部見える」状態が理想で、この状態を作ることが仕組み化のゴールです。",
  },
  {
    title: "仕組み化とは「考えなくても回る状態」を作ること",
    body: "収納の仕組み化とは、収納グッズを買いそろえることではなく、「毎回考えなくても衣類の出し入れと入れ替えが回る状態」を作ることです。具体的には、(1)衣類の総量に上限がある、(2)すべての衣類に定位置がある、(3)入れ替えの手順が決まっている、の3条件がそろうと、衣替えは「ケースを入れ替えるだけ」「そもそも入れ替え不要」のレベルまで軽くなります。一度この状態を作れば、維持の手間はごくわずかです。",
  },
];

const merits = [
  {
    title: "仕組み1：衣替え不要の「ワンアクション収納」にする",
    body: "総量を絞れた人に最もおすすめなのが、全シーズンの服を常時アクセスできる場所に収める「衣替えしない収納」です。ハンガーポールの左右で季節を分ける、引き出しの手前と奥を入れ替えるだけにする、といった配置にすれば、季節の変わり目にやることは服の位置を少しずらすだけになります。吊るせる服はできるだけハンガー収納にすると、たたむ手間も消えて日々の管理が一段と楽になります。",
  },
  {
    title: "仕組み2：人別・季節別の「引き出し1つ＝1カテゴリ」で定位置化する",
    body: "収納スペースの都合で入れ替えが必要な場合は、「引き出しやケース1つに1人・1季節・1カテゴリ」の原則で定位置を決めます。「父・冬・ニット」のようにケース単位で完結させれば、衣替えはケースごと入れ替えるだけで終わり、中身を出して仕分け直す作業がなくなります。ケースには中身のラベルを貼り、家族の誰が見ても分かる状態にしておくと、家族それぞれが自分の衣替えを自分でできるようになります。",
  },
  {
    title: "仕組み3：ハンガー本数・ケース数で総量に上限を設ける",
    body: "リバウンドを防ぐ核心が、総量の上限設定です。「ハンガーは一人30本まで」「衣装ケースは一人4箱まで」のように物理的な枠を決め、新しい服を買ったら1枚手放す「一入れ一出し」で総量を保ちます。枠があると、買い物の段階で「これはハンガーを1本空ける価値があるか」という視点が生まれ、衣類が自然に増えなくなります。本数・箱数は暮らしに合わせて設定すればよく、少なさを競う必要はありません。",
  },
];

const steps = [
  {
    title: "全シーズンの衣類を全出しして総量を把握する",
    body: "最初に、クローゼット・タンス・衣装ケース・玄関のコート類まで、家中の自分の衣類を一箇所に集めます。全出しは大変ですが、「自分が何をどれだけ持っているか」を体感することが、その後の判断すべてを楽にします。家族全員分を一度にやると収拾がつかなくなるため、まず自分の分だけ、1日で終わらなければカテゴリ別（トップスだけ等）に分けて進めましょう。",
  },
  {
    title: "「この1年で着たか」で残す服を選ぶ",
    body: "全出しした服を「この1年で着た」「着ていない」で分けます。1年着なかった服は、季節が一巡しても出番がなかった服であり、今後も着る可能性は高くありません。迷う服は「保留ボックス」に入れて期限（半年など）を決め、期限まで着なかったら手放します。思い出の服は無理に判断せず、思い出品として別枠にして構いません。仕分けの詳しい基準は衣類の整理と手放し方で解説しています。",
  },
  {
    title: "手放す服の行き先を決めて手放し切る",
    body: "手放すと決めた服は、状態に応じて「売る・譲る・資源回収・ごみ」に振り分けます。状態のよい服はリサイクルショップやフリマアプリでの売却、自治体や店頭の古着回収も選択肢です。大切なのは、仕分けた袋を「あとで売ろう」と放置しないこと。売る物は1〜2週間以内に持ち込む、と期限を決めて手放し切りましょう。売却との併用のコツはリサイクルショップ・買取の併用の記事が参考になります。",
  },
  {
    title: "人別・季節別に定位置を決めて収納する",
    body: "残した服を、仕組み1〜3のいずれかの方式で収納します。よく着る服ほど取り出しやすい位置（腰から目の高さ）に、オフシーズンの服は上段や奥に配置するのが原則です。引き出しは詰め込まず8割収納を守ると、見渡しやすく出し入れも楽になります。ケースにラベルを貼り、「どこに何があるか」が家族全員に分かる状態にできたら定位置化は完了です。この時点で、収納グッズの買い足しが必要かどうかを初めて判断します。",
  },
  {
    title: "季節の変わり目の「見直しデー」をセットで習慣化する",
    body: "仕組みができたら、年2回の衣替えタイミングを「入れ替え＋見直し」のセットにします。ケースを入れ替えるついでに、「今シーズン一度も着なかった服」を抜き出して手放すのです。この習慣があれば、総量は自然に一定へ収束し、衣替えは毎回1時間程度の軽作業で終わるようになります。しまう前の洗濯・クリーニングも忘れずに。汚れを残したまま収納すると、虫食いや黄ばみの原因になります。",
  },
];

const ngActions = [
  {
    title: "圧縮袋に詰め込んで判断を先送りする",
    body: "着ていない服を圧縮袋や段ボールに詰めてベッド下や押し入れの奥にしまい込むのは、片付いたように見えて総量を増やし続けるだけのNG行動です。しまい込んだ服は存在を忘れられ、次に開けるのは数年後、シワと臭いで着られない状態になっていることも珍しくありません。圧縮袋は「残すと決めた寝具・オフシーズン品を省スペースで保管する」ための道具であり、判断の先送り先ではないと心得ましょう。",
  },
  {
    title: "収納グッズを先に買ってしまう",
    body: "片付けを決意すると、まず収納ケースやハンガーラックを買いたくなりますが、これは順番が逆です。総量を絞る前に収納を増やすと、「収納がある分だけ服が増える」結果になり、根本の問題が悪化します。収納グッズの購入は、全出し・仕分け・定位置決めが終わり、「何をどこに収めるか」が確定した後の最終ステップです。まず今ある収納に8割で収まる総量を目指しましょう。",
  },
  {
    title: "家族の服を本人に無断で処分する",
    body: "衣替えのついでに、家族の「明らかに着ていない服」を勝手に処分するのはトラブルの元です。着ていないように見えても、本人にとっては思い入れのある服かもしれません。家族の衣類整理は、本人に判断を委ねるのが原則です。仕組み（人別の枠・ラベル）を作って渡し、本人のペースで整理してもらいましょう。特に高齢の親の衣類は、本人の気持ちを尊重しながら少しずつ進めることが大切です。",
  },
  {
    title: "汚れたまま・湿気の多い場所に収納する",
    body: "一度でも着た服を洗わずに長期収納すると、皮脂汚れが虫食いや黄ばみの原因になります。オフシーズン服は必ず洗濯・クリーニングしてから収納しましょう。また、湿気のこもる押し入れの床置きや結露しやすい壁際は、カビの温床になります。すのこで床から浮かせる、除湿剤を入れる、季節の変わり目に風を通すといった湿気対策もセットで行うと、服も収納空間も長持ちします。カビが出てしまった場合は部屋のカビ清掃の記事を参考にしてください。",
  },
];

const judgeSigns = [
  "家族全員分の衣類が部屋を占領し、自力の仕分けでは数日かかっても終わらない",
  "クローゼットや押し入れの奥に、何年も開けていない衣装ケースが多数ある",
  "引っ越し・住み替えの期限があり、衣類を含む家全体の片付けを急ぐ必要がある",
  "遺品や実家の衣類整理で、量が多く自分たちだけでは手に負えない",
  "衣類のカビ・虫食いが広がっており、収納空間の清掃もまとめて必要",
];

const faqs = [
  {
    q: "服は何枚まで減らせばよいですか？",
    a: "決まった正解はありません。目安になるのは枚数ではなく「今ある収納に8割で収まるか」「1年以内にすべての服に出番があるか」の2点です。この2つを満たしていれば、枚数が多くても仕組みは回ります。逆に収納からあふれている場合は、ハンガー本数やケース数で上限を決め、そこに収まるまで見直すのがおすすめです。",
  },
  {
    q: "衣替えのベストなタイミングはいつですか？",
    a: "地域や気候によりますが、朝晩の気温が変わり始める春と秋の年2回が一般的です。一度に全部入れ替えるのではなく、「まず半分だけ入れ替えて、気温が安定したら残りを入れ替える」二段階方式にすると、寒の戻りや残暑にも対応しやすくなります。ワンアクション収納にすれば、そもそも時期を気にする必要がなくなります。",
  },
  {
    q: "着ないけれど高かった服が手放せません。",
    a: "「支払ったお金」は着ても着なくても戻らない一方、服はクローゼットの空間を占有し続けます。着ていないなら、その服の役目は終わっていると考えるのが現実的です。手放す抵抗が大きい服は、売却して次に使う人へつなぐと納得感を持ちやすくなります。どうしても迷う服は保留ボックスで期限を決め、期限まで着なければ手放すルールにしましょう。",
  },
  {
    q: "大量の衣類をまとめて処分したいときはどうすればよいですか？",
    a: "少量なら自治体の資源回収や可燃ごみ（分別区分は自治体により異なります）、状態のよい物は古着回収や買取が基本です。引っ越しや遺品整理などで袋数十個規模になる場合は、不用品回収業者へ他の不用品とまとめて依頼する方法が現実的です。料金は物量により異なるため、見積もりで確認してください。自治体と業者の使い分けは自治体と業者どっちに頼む？で解説しています。",
  },
];

const related = [
  { href: "/irui-seiri/", label: "衣類の整理と手放し方", desc: "仕分け基準と処分先の選び方" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分", desc: "寝具の入れ替え時の処分方法" },
  { href: "/minimalist-hajimekata/", label: "ミニマリストの始め方", desc: "無理なく物を減らす考え方" },
  { href: "/trunk-room-katsuyou/", label: "トランクルームの活用", desc: "オフシーズン品の預け先" },
  { href: "/review/kurashi-market/", label: "くらしのマーケットの評判", desc: "地域の業者を比較して選べるサービス" },
  { href: "/area/osaka/", label: "大阪の片付け業者比較", desc: "大阪から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "衣替えの収納仕組み化" },
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
    { href: "#kiso", label: "1｜衣替えが大変になる3つの構造" },
    { href: "#merit", label: "2｜手間を減らす3つの仕組み" },
    { href: "#houshin", label: "3｜仕組み化を始める前の全体方針" },
    { href: "#steps", label: "4｜収納仕組み化の5ステップ" },
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

      <Breadcrumb items={[{ label: "衣替えの収納仕組み化" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          衣替えの手間を減らす収納の仕組み化｜衣類を増やさない習慣づくり
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          衣替えのたびに半日つぶれる、出した服の山が数日部屋に居座る、去年しまった服がどこにあるか分からない——毎シーズンこの繰り返しになっているなら、問題は衣替えのやり方ではなく、衣類の総量と収納の仕組みにあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、衣替えそのものを軽くする3つの仕組み（ワンアクション収納・ケース単位の定位置化・総量の上限設定）と、仕組みを作るための5ステップ、リバウンドを招くNG行動までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>衣替えが大変な根本原因は総量。収納の8割に収まれば衣替えは軽作業になる</li>
          <li>仕組みは3つ：ワンアクション収納・ケース単位の定位置化・ハンガー本数の上限</li>
          <li>手順は「全出し→1年基準で仕分け→手放し切る→定位置化→年2回の見直し」</li>
          <li>圧縮袋への詰め込み先送りと、収納グッズの先買いはリバウンドの元</li>
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

      <H2 id="kiso" num="1">衣替えが大変になる3つの構造</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜ衣替えが毎回大仕事になるのかを構造から理解しましょう。原因が分かれば対策は明確です。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">手間を減らす3つの仕組み</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        仕組みは大きく3つ。収納スペースと衣類の量に合わせて、組み合わせて使えます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">仕組み化を始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「収納を増やす前に総量を絞る」ことです。収納グッズの購入は最後の最後。まず全出しで総量と向き合い、1年着ていない服を手放してから、残った服のための仕組みを作ります。この順番を守るだけで、仕組み化の成功率は大きく変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        衣類の仕分け基準そのものは<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の整理と手放し方</Link>で詳しく解説しています。部屋全体が散らかっていて衣類だけの問題ではない場合は、<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>から着手するのがおすすめです。物を増やさない暮らし方の考え方は<Link href="/minimalist-hajimekata/" className="text-primary underline underline-offset-2">ミニマリストの始め方</Link>も参考になります。
      </p>

      <H2 id="steps" num="4">収納仕組み化の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「全出し→仕分け→手放す→定位置化→習慣化」の流れを守ることです。
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
        衣替えの仕組み化は基本的に自力でできますが、次のような場合は片付け業者や回収業者の活用が現実的です。
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
        大量の衣類を他の不用品とまとめて処分したい場合は、<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような不用品回収業者が候補になります。回収を依頼する際は、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。業者選びの基本は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。衣類・布類の分別区分や資源回収の仕組みは自治体により異なるため、お住まいの市区町村の案内をご確認ください。買取の可否・条件は店舗・サービスにより異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
