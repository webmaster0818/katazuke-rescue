import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/oshiire-closet-seiri/";
const TITLE = "押し入れ・クローゼットの整理手順｜全部出すから戻すまでの進め方";
const DESC =
  "扉を閉めれば見えない押し入れとクローゼットは、家の中でいちばん物置化しやすい場所です。奥行きが深く上段・下段・天袋で使い勝手が違う構造、1区画ずつ全部出して仕分ける現実的な段取り、使用頻度によるゾーニング、奥を死蔵させない2列使いのルール、湿気やカビ・虫への備え、戻すときのラベリングと定位置化、出てきた不用品の処分ルートまでを手順に沿って解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "扉を閉めれば見えない——押し入れが物置化する構造",
    body: "押し入れやクローゼットが真っ先に物置化するのは、収納力が高いからではなく「扉を閉めれば見えなくなるから」です。来客前にとりあえず押し込む、季節が変わって使わなくなった物をひとまず放り込む、判断に迷った物を先送りする——その積み重ねが数年分たまり、扉の前に物があふれた段階でようやく問題として認識されます。見えないことは片付けにとって不利な条件で、住んでいる本人でさえ中身の全体像を把握できていないケースが珍しくありません。だからこそ、まず中身を見える状態にすることが整理の出発点になります。",
  },
  {
    title: "奥行きが深く、上段・下段・天袋で使い勝手がまるで違う",
    body: "和室の押し入れは布団を収めることを前提に設計されているため、奥行きが深いのが特徴です。手前の物を出さないと奥に手が届かず、奥に置いた物は自然と使われなくなります。さらに上段・下段・天袋（枕棚）で高さも取り出しやすさも異なり、同じ「押し入れ」でも区画ごとに向いている用途が変わります。洋室のクローゼットはハンガーパイプが主役で、掛ける収納は得意ですが、床面と棚上のデッドスペースが余りがちです。構造の違いを踏まえずに全部を同じように使おうとすると、使いにくさが残ります。",
  },
  {
    title: "中身を全部出さないと、仕分けは前に進まない",
    body: "「奥に何が入っているか分からない」状態のまま手前だけ入れ替えても、総量は変わらず、数か月で元に戻ります。全部出す作業が必要なのは、同じ物がいくつあるかを把握するため、そして奥に眠っていた物を判断の土俵に載せるためです。出してみて初めて、同じ用途の物が三つあった、二度と使わないと分かる物が半分を占めていた、といった事実が見えます。ただし家中の収納を一度に空けるのは非現実的です。区画を区切り、その区画だけを完全に空にする——この小さな全出しを繰り返すのが、挫折しない進め方です。",
  },
];

const merits = [
  {
    title: "考え方1：1区画ずつ区切り、その日のうちに戻し切る",
    body: "押し入れ全体を一日で空にすると、部屋中が物であふれたまま夜を迎え、片付け自体が嫌になります。現実的な単位は「上段の右半分」「クローゼットの床面だけ」といった、1〜2時間で戻し切れる大きさです。着手前に、今日はどこを空けるかを声に出して決め、その区画だけを扱います。区切って進めると、終わったときに必ず「完全に片付いた場所」が一つ増え、達成感が次の区画への燃料になります。家全体をどの部屋から手を付けるかという順序の整理と組み合わせると、進み方はさらに安定します。",
  },
  {
    title: "考え方2：使用頻度で高さを割り当てる（ゾーニング）",
    body: "戻す位置は、好みや見た目ではなく使用頻度で決めます。基本は、毎日から毎週使う物を腰から目線までの取り出しやすい高さに、月に数回の物をその上下に、年に一度しか使わない季節物や行事用品を天袋や上段の奥に、というレイアウトです。重い物は下段に置くのが原則で、頭より高い位置に重量物を上げると出し入れのたびに落下の危険が生じます。使う頻度と置き場所がずれていると、出すのが面倒になって使わなくなるか、戻すのが面倒になって出しっぱなしになります。ゾーニングは片付いた状態を保つための土台です。",
  },
  {
    title: "考え方3：奥行きは2列で使い、奥を死蔵させない仕組みを持つ",
    body: "深い押し入れは、手前列と奥列の2列で使うと容量を活かせます。奥列にはオフシーズンの物、手前列には今の季節に使う物を置き、季節が変わったら列ごと入れ替えます。奥の物を取り出しやすくするには、キャスター付きの台や引き出せる収納にまとめ、ひと動作で手前へ引き出せる状態にしておくことが有効です。加えて「奥列は衣替えのたびに必ず一度全部引き出す」というルールを決めておくと、奥が長期の死蔵スペースに変わるのを防げます。入れ替えの手順そのものを仕組みにする方法は衣替えの記事で詳しく扱っています。",
  },
];

const steps = [
  {
    title: "区画を決め、採寸と仮置きスペースを用意する",
    body: "最初に今日扱う区画を一つ決め、幅・奥行き・高さをメジャーで測って控えます。押し入れは幅や奥行きが住戸ごとに異なり、天袋の高さもまちまちなので、実測の数値があとで効いてきます。次に、出した物を並べる仮置きスペースを床に確保します。新聞紙やレジャーシートを敷いておくとほこりの処理が楽です。掃除機、雑巾、ごみ袋、マスクを手元にそろえてから始めましょう。長く開けていない押し入れはほこりが多く、体質によっては目や喉に負担がかかるため、換気とマスクは省略しないでください。",
  },
  {
    title: "決めた区画を空にして、内部を掃除する",
    body: "区画の中身をすべて出し切り、内部が空になった状態をつくります。空になったら、床板と壁面のほこりを掃除機で吸い、固く絞った雑巾で拭いてから完全に乾かします。この段階で、シミ・黒い点状の汚れ・カビ臭・木部の湿り気がないかを確認してください。カビが見つかった場合の落とし方や再発防止の考え方は、カビの掃除の記事で詳しく解説しています。湿ったまま物を戻すと、次に開けたときに被害が広がっているという事態になりかねません。乾かす時間を工程に組み込んでおきましょう。",
  },
  {
    title: "出した物を「使う・迷う・手放す」の3つに仕分ける",
    body: "床に並べた物を、使っている物、判断に迷う物、手放す物の3つに分けます。基準は「この一年で使ったか」「同じ用途の物が他にないか」「今の暮らしで使う場面を具体的に言えるか」の3点で十分です。迷う物は無理に決めず、ふたのない箱にまとめて保留にし、次の衣替えの時期に再判定すると決めておきます。衣類が大半を占める場合は、残す枚数の考え方を衣類の整理の記事に沿って先に決めておくと判断が速くなります。ここで大切なのは、迷う物を一つひとつ長考しないことです。",
  },
  {
    title: "ゾーニングに沿って戻し、ラベルで定位置を明示する",
    body: "残すと決めた物を、使用頻度のゾーニングに従って戻します。戻す前に採寸した数値と手持ちの収納用品を照らし、寸法が合う物だけを使います。足りないと感じても、その場ですぐ買い足さず、まず段ボールなどで仮置きして一〜二週間使ってみるのが安全です。収納用品を増やしすぎる弊害は収納グッズの手放し方の記事で触れています。最後に、中身が外から見えないケースには内容と季節を書いたラベルを貼ります。家族の誰が見ても中身が分かる状態が、戻す場所に迷わない仕組みになります。",
  },
  {
    title: "出てきた不用品を、処分ルート別に振り分けて片付ける",
    body: "手放すと決めた物は、自治体の分別収集、粗大ごみ、売却、譲渡、業者への依頼に振り分けます。分別区分や粗大ごみの基準は自治体により異なるため、必ずお住まいの自治体の案内で品目名を確認してください。ルートの選び方は不用品の処分ルート、粗大ごみの手配は粗大ごみ申し込みの流れの記事が参考になります。押し入れからは古い布団やマットレスが出てくることが多く、これらは扱いが特殊なので布団・マットレスの処分の記事も確認しましょう。振り分けたら、収集日や発送日を決めて予定表に書き込むところまでを同じ日に済ませます。",
  },
];

const ngActions = [
  {
    title: "全部出さずに、手前の物だけを入れ替える",
    body: "時間がないときにやりがちなのが、手前に見えている物だけを整え、奥はそのままにする対処です。見た目は少し改善しますが、総量は一つも減らず、奥の死蔵品は次の機会まで温存されます。しかも「一度片付けた場所」という記憶が残るため、次に手を付けるまでの期間が延びてしまいます。時間が取れないなら、範囲を狭くして全出しするほうが確実です。上段の右半分だけ、クローゼットの床だけ——狭くてもよいので、決めた区画は必ず空にしてから戻す。これを守るだけで結果が変わります。",
  },
  {
    title: "中身を決める前に、収納ケースを買いに行く",
    body: "片付けを決意した日に、まず収納用品の売り場へ向かうのは典型的な失敗です。残す物の量が確定していない段階で買った収納は、寸法が合わない、数が余る、逆に足りないといったずれを生み、使われない収納用品が押し入れの一角を占める結果になります。押し入れは奥行きが特殊で、一般的なケースがぴったり収まらないことも多い場所です。順番は必ず、減らす、測る、仮置きして試す、それでも足りない分だけ買う。買い物は片付けの最後の工程だと考えてください。",
  },
  {
    title: "壁や床にぴったり詰め込み、風の通り道をふさぐ",
    body: "収納力を最大化しようとして、壁面や床にすき間なく物を詰め込むと、空気が動かない場所ができます。空気がよどんだ場所は湿気がたまりやすく、押し入れの奥やクローゼットの隅は結露やカビの起点になりがちです。壁や床に接する面には、すのこや台を使って数センチのすき間をつくり、上部にも余裕を残します。衣類も詰め込みすぎるとハンガーの間に空気が通らなくなります。収納率の目安は八割程度と考え、残りの二割は通気のための余白として意識的に空けておきましょう。",
  },
  {
    title: "重い物を天袋や上段に上げ、無理な体勢で出し入れする",
    body: "頭より高い天袋に重い物を上げるのは避けてください。踏み台の上で重量物を持ち上げる動作はバランスを崩しやすく、落下や転倒につながります。天袋に向くのは、軽くてかさばる物、たとえば来客用の寝具カバーや季節の装飾品などです。重い書類箱や工具類は下段が定位置です。高い場所の作業では、しっかりした踏み台を使い、家族がいる時間帯に行うのが安全です。体調や体力に不安がある場合、無理をせず日を分けるか、人手を頼む判断も選択肢に入れてください。",
  },
];

const judgeSigns = [
  "押し入れや納戸に物が詰まりすぎて、自力では出し切れない量になっている",
  "布団やマットレス、大型の収納家具など、運び出せない物が多く出てきた",
  "カビや虫の被害が広範囲で、掃除だけでは手に負えない状態になっている",
  "退去や引っ越しの期限が迫っていて、仕分けと搬出を同時に進める必要がある",
  "実家や空き家の押し入れが何十年分もの物でふさがっていて、手が付けられない",
];

const faqs = [
  {
    q: "押し入れの整理は、どのくらいの時間を見込めばよいですか？",
    a: "家庭や物量によって大きく異なりますが、1区画（上段の半分程度）を空にして仕分け、掃除して戻すまでで1〜2時間を目安にすると計画が立てやすくなります。押し入れ一間分をまとめてやろうとすると半日以上かかり、途中で力尽きて物が出しっぱなしになりがちです。区画ごとに完結させ、複数の週末に分ける進め方をおすすめします。時間が読めないときは、まず一番小さい区画から試すと感覚がつかめます。",
  },
  {
    q: "押し入れの湿気やカビは、どう防げばよいですか？",
    a: "基本は、風の通り道をつくることと、定期的に開けて空気を入れ替えることです。壁や床に物を密着させず、すのこや台で数センチ浮かせ、収納量は八割程度にとどめます。除湿剤は湿気が下にたまりやすい性質から床に近い位置に置き、交換時期を決めておくと切れたまま放置せずにすみます。晴れて乾燥した日に扉を開けて換気する習慣も有効です。すでにカビが出ている場合の対処は、カビの掃除の記事を参照してください。",
  },
  {
    q: "奥に置いた物が結局使われなくなります。どうすればよいですか？",
    a: "奥列を「取り出しにくい場所」のままにしないことが要点です。キャスター付きの台や引き出せる収納にまとめ、ひと動作で手前に引き出せる状態にしておくと、奥のアクセス性が大きく変わります。あわせて、衣替えの時期に奥列を必ず一度全部引き出して中身を確認するというルールを決めておきましょう。年に二回でも中身を見る機会があれば、忘れられたまま何年も眠る物はほとんど生まれなくなります。",
  },
  {
    q: "整理して出てきた古い布団は、どう処分すればよいですか？",
    a: "布団やマットレスの扱いは自治体によって異なり、粗大ごみとして申し込む地域、指定のサイズまで切って出せる地域などさまざまです。スプリング入りのマットレスは扱いが別になることが多いため、必ずお住まいの自治体の案内で品目名を確認してください。量が多い場合や運び出しが難しい場合は、ほかの不用品とまとめて業者に依頼する方法もあります。具体的な進め方は布団・マットレスの処分の記事で解説しています。",
  },
];

const related = [
  { href: "/katazuke-junban/", label: "片付けの順番", desc: "部屋全体をどこから片付けるか" },
  { href: "/irui-seiri/", label: "衣類の整理・処分", desc: "増えすぎた服を手放す基準" },
  { href: "/koromogae-shunou-shikumika/", label: "衣替えの収納仕組み化", desc: "季節の入れ替えを楽にする工夫" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの手放し方", desc: "収納を増やすほど片付かない理由" },
  { href: "/kabi-seisou/", label: "カビの掃除", desc: "発生を抑える手入れと再発防止" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分", desc: "かさばる寝具の手放し方" },
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
    { "@type": "ListItem", position: 2, name: "押し入れ・クローゼットの整理手順" },
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
    { href: "#kiso", label: "1｜押し入れ・クローゼットが物置化する理由" },
    { href: "#merit", label: "2｜整理を進める3つの考え方" },
    { href: "#houshin", label: "3｜湿気・カビ・虫への備えと維持の仕組み" },
    { href: "#steps", label: "4｜全部出すから戻すまでの5ステップ" },
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

      <Breadcrumb items={[{ label: "押し入れ・クローゼットの整理手順" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          押し入れ・クローゼットの整理手順｜全部出すから戻すまでの進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          部屋はそれなりに片付いているのに、押し入れやクローゼットの扉を開けると何年も前の物が詰まっている。奥に何が入っているか自分でも分からない——収納庫は、家の中でいちばん物置化しやすい場所です。扉を閉めれば見えなくなるという構造そのものが、判断の先送りを許してしまうからです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、押し入れとクローゼットという「場所」に絞って、1区画ずつ全部出して仕分ける現実的な段取り、使用頻度によるゾーニング、奥行きを2列で使い切る工夫、湿気やカビへの備え、戻すときのラベリングと定位置化、そして出てきた不用品の処分ルートまでを順を追って解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>収納庫は「扉を閉めれば見えない」ため物置化する。まず中身を見える状態にする</li>
          <li>家中を一度にやらず、1〜2時間で戻し切れる1区画を完全に空にして進める</li>
          <li>戻す位置は使用頻度で決める。よく使う物は取り出しやすい高さ、重い物は下段へ</li>
          <li>奥行きは手前・奥の2列使い。奥は衣替えのたびに全部引き出して死蔵を防ぐ</li>
          <li>壁や床に密着させず八割収納で通気を確保し、湿気とカビの発生を抑える</li>
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

      <H2 id="kiso" num="1">押し入れ・クローゼットが物置化する理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜこの場所だけが特別に散らかるのかを整理します。原因が構造にあると分かると、対策の方向も見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mt-6">
        部屋全体をどの順番で片付けるかという大きな段取りは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>で解説しています。この記事は、その中の「収納庫という一つの場所」をどう攻略するかに絞った内容です。
      </p>

      <H2 id="merit" num="2">整理を進める3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        手を動かす前に、押し入れ・クローゼットならではの3つの原則を押さえておきます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mt-6">
        季節ごとの入れ替えを負担にしないための仕組みづくりは<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの収納仕組み化</Link>で詳しく扱っています。服そのものを減らす基準に迷うときは、衣類の整理・処分の記事もあわせて参考にしてください。
      </p>

      <H2 id="houshin" num="3">湿気・カビ・虫への備えと維持の仕組み</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        押し入れやクローゼットは、閉め切られていて空気が動きにくく、外壁に面していれば温度差で結露も起こりやすい場所です。物を詰め込むほど風の通り道がなくなり、湿気がこもります。対策の基本は三つで、壁や床に物を密着させないこと、収納量を八割程度にとどめること、そして定期的に扉を開けて空気を入れ替えることです。すのこや脚付きの台で床から数センチ浮かせるだけでも、空気の流れは大きく変わります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        除湿剤は、湿った空気が下にたまりやすい性質を踏まえて床に近い位置に置き、交換の時期をあらかじめ決めておきましょう。中身が満杯のまま放置された除湿剤は役目を果たしません。衣類の虫害が心配な場合も同様で、防虫剤は成分によって置き方の指定が異なるため、必ず製品の表示に従って使います。しまう前に汚れや汗を落としておくことも、被害を減らす基本的な手当てです。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        そして最も効果が高いのは、点検を習慣にすることです。衣替えの時期に合わせて年に二回、扉を全開にして奥まで目視し、床板や壁面に湿り気やシミがないかを確認します。早い段階で気づけば拭き取りと乾燥で収まることが多く、放置した場合との差は大きくなります。すでにカビが広がっているときの落とし方や再発を防ぐ手入れは<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビの掃除</Link>の記事を参照してください。
      </p>

      <H2 id="steps" num="4">全部出すから戻すまでの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実作業です。区画を決める、空にする、仕分ける、戻す、処分する——この5段階を1区画ごとに繰り返します。
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
      <p className="text-[15px] leading-8 text-text-secondary mt-6">
        最後の工程で迷いやすい振り分けの判断は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>に、粗大ごみの手配の具体的な手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>にまとめています。状態のよい物が多く出てきたときは、リサイクルショップや買取の併用も検討する価値があります。収納用品を買い足したくなったときは、買う前に見直したい点を確認しておくと無駄が減ります。
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
        押し入れ・クローゼットの整理は自分で進められる範囲が広い作業ですが、次のような状況では片付け・不用品回収業者の力を借りるほうが現実的です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額と作業範囲を確定させましょう。料金は物量・間取り・地域により異なるため、複数社に相談して条件をそろえて比べるのが基本です。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>などの比較サービスで特徴や口コミを見比べて選ぶ方法があります。自治体回収と業者依頼の使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。高い場所での作業や重量物の取り扱いは無理をせず、体調や住まいの状況に応じてご判断ください。
      </p>
    </article>
  );
}
