import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kisetsu-kaden-hokan-shobun/";
const TITLE = "季節家電を保管するか手放すかの判断｜扇風機・ヒーターの保管方法と処分の考え方";
const DESC =
  "扇風機、サーキュレーター、電気ストーブ、オイルヒーター、こたつ、加湿器、除湿機、電気毛布。使う期間が限られる季節家電を、来年も保管し続けるのか、それとも手放すのか。使用回数と置き場所から判断する考え方、しまう前の清掃と乾燥、箱を残すかどうか、湿気と直射日光を避ける置き方までを整理して解説します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "季節家電は「使っていない期間のほうが長い」家電",
    body: "扇風機や電気ストーブ、こたつ、除湿機といった季節家電には、他の家電にはない特徴があります。一年のうち活躍するのは数か月で、残りの期間はしまわれたままだということです。冷蔵庫や洗濯機は毎日使うので、置き場所を占めていても納得できます。しかし季節家電は、使わない期間も同じだけの空間を占め続けます。押し入れやクローゼットが片付かない理由をたどると、この「使っていない期間の置き場所」に行き着くことが少なくありません。まずはこの特徴を意識するところから始めます。",
  },
  {
    title: "置き場所にも見えないコストがかかっているという見方",
    body: "収納は無限にあるわけではなく、限られた空間を何に使うかという選択の結果です。押し入れの下段に扇風機とヒーターが並んでいれば、その分だけ他の物を置く場所が減ります。奥にしまい込んだせいで、手前の物を毎回どかす手間が生まれることもあります。物そのものの価値だけでなく、置き場所を使い続けることと、出し入れの手間を含めて考えると、判断の材料が増えます。使う頻度が高い物ほど取り出しやすい場所に置く、という原則で収納を見直すと、季節家電の置き場所も自然に決まってきます。",
  },
  {
    title: "迷いの正体は、たいてい「まだ使えるか」ではない",
    body: "手放すか迷っているとき、多くの人は「まだ使えるから」と考えます。しかし実際に立ち止まっている理由は、動くかどうかではなく、来年も自分が使うかどうかが分からないことにあります。動作するのに手放すのは気が引ける、という気持ちも判断を止めます。ここで基準にしたいのは、故障の有無ではなく、この一年で実際に何回使ったか、そしてなくても困らなかった期間があったかどうかです。動くかどうかで考え続けると結論が出ませんので、使った実績に目を向けると判断が進みます。",
  },
];

const merits = [
  {
    title: "判断軸1：この一年で、実際に何回使ったか",
    body: "シーズンが終わったタイミングで、その家電を何回使ったかを思い出してみてください。毎日のように使った物、数回だけ出した物、結局一度も出さなかった物に分かれるはずです。一度も使わなかった物が二シーズン続いているなら、来年も使わない可能性が高いと考えられます。逆に毎日使った物は、多少場所を取っても保管する価値があります。回数を書き留めておくと、来年の同じ時期に迷わずに済みます。感覚ではなく実績で判断できるようになるのが、この軸の利点です。",
  },
  {
    title: "判断軸2：しまう場所が、他の物を圧迫していないか",
    body: "同じ「年に数回しか使わない」でも、小さく畳める物と、大きくて形が崩せない物では、置き場所への負担がまったく違います。オイルヒーターやこたつ本体、羽根の大きな扇風機は、収納の一角を丸ごと占めます。その場所に別の物を置きたいと感じているなら、それが手放すことを考える合図です。反対に、隙間に立てて置けるサーキュレーターや、畳んでしまえる電気毛布であれば、使用回数が少なくても保管の負担は小さく済みます。物の大きさと収納の余裕をセットで見てください。",
  },
  {
    title: "判断軸3：来シーズンも、同じ状態で使えそうか",
    body: "しまう前に、動作と外観を確認しておきます。運転音がいつもと違う、焦げたような臭いがする、電源コードに折れ癖や被覆の傷みがある、差込プラグの根元がぐらつく、フィルターやタンクにこびりついた汚れが落ちない。こうした点が見られる場合は、そのまま来シーズンまで保管するかどうかを考え直したほうがよいでしょう。使用を控え、メーカーの相談窓口や購入した販売店に状態を伝えて相談してください。買い替えを検討している家電を、念のため保管しておくという判断は、置き場所を二重に使うことになります。",
  },
];

const steps = [
  {
    title: "シーズンの終わりに、使った回数を書き留める",
    body: "季節家電の判断がいつまでも決まらないのは、判断する時期を決めていないからです。使い終わったタイミングを、毎年の見直しどきにしてください。扇風機なら秋、ヒーターやこたつなら春が目安です。しまう前に、この夏は何回出したか、この冬は何回使ったかを本体に貼った紙や手帳に書いておきます。翌年の同じ時期に見返すと、二年分の実績が並びます。記録があるだけで、来年の判断がずいぶん楽になります。手間はかかりませんので、しまう作業の一部として組み込んでしまうのがおすすめです。",
  },
  {
    title: "汚れを落とし、完全に乾かしてからしまう",
    body: "保管前の清掃は、来シーズン気持ちよく使うための準備です。扇風機やサーキュレーターは、羽根とカバーに付いたほこりを落とします。加湿器や除湿機は、タンクと受け皿の水を必ず捨て、内部まで乾かしてからしまいます。水が残ったまま密閉すると、臭いやぬめりの原因になります。こたつ布団や電気毛布は、洗える物は洗い、しっかり乾かします。電気毛布は洗える範囲が製品ごとに違いますので、取扱説明書の記載に従ってください。分解が必要な清掃も、説明書に沿った範囲にとどめます。",
  },
  {
    title: "箱を残すかどうかを、置き場所から決める",
    body: "購入時の箱を取っておくべきかは、よく迷うところです。箱があればほこりを防げ、積み重ねもしやすくなりますが、箱そのものが場所を取ります。判断の目安は、箱に入れて置ける場所があるかどうかです。押し入れの上段にちょうど収まるなら残す価値がありますし、置き場所がなくて部屋の隅に立てかけているなら、箱は手放して本体に不織布のカバーをかける方法に切り替えたほうが省スペースです。畳んで保管できる箱だけを残す、という中間の選び方もあります。",
  },
  {
    title: "湿気と直射日光を避けられる場所に置く",
    body: "保管場所は、湿気がこもらず、直射日光が当たらないところを選びます。ベランダや屋外の物置、窓際は、温度差と日差しの影響を受けやすい場所です。押し入れやクローゼットにしまう場合も、床に直接置かず、すのこなどを挟んで風の通り道を作ると湿気がこもりにくくなります。背の高い扇風機は倒れないように壁側に立て、こたつ天板は平らに寝かせるなど、形に合った置き方をしてください。コードは本体に強く巻きつけず、ゆるくまとめておくと傷みにくくなります。",
  },
  {
    title: "出し始めの日に、状態を確認して手放す物を決める",
    body: "しまうときだけでなく、来シーズンに出すときも判断のタイミングです。出してすぐ、動作、音、臭い、コードの状態を確認します。問題なく使えるならそのまま今シーズンも使い、気になる点があれば使用を控えてメーカーや販売店に相談してください。そして、出したのに結局使わなかった物は、そのシーズンの終わりに手放す候補として印を付けておきます。出すときと、しまうときの年二回の確認で、季節家電の入れ替わりは自然に整っていきます。",
  },
];

const ngActions = [
  {
    title: "汚れたまま、湿ったままで袋に入れてしまう",
    body: "急いでしまおうとして、ほこりが付いたまま、あるいはタンクに水が残ったままで袋に入れてしまうと、来シーズン出したときに臭いやカビに悩まされます。加湿器や除湿機は特に水が残りやすく、密閉した状態で長期間置くと内部にぬめりが生じることがあります。しまう前に水を捨て、乾かす時間を取ってください。すぐにしまう必要はありませんので、風の通る場所に一日置いてから収納するくらいの余裕を持たせると安心です。清掃の範囲は取扱説明書の記載に従います。",
  },
  {
    title: "「いつか使う」で、毎年同じ物を出し入れし続ける",
    body: "二年、三年と続けて一度も使っていないのに、毎年しまい直している家電はありませんか。出し入れの手間と置き場所を、使っていない物のために使い続けていることになります。ここで必要なのは、捨てるかどうかを決めることではなく、使う予定があるかを言葉にしてみることです。来年のどの場面で使うのかが具体的に思い浮かばないなら、手放す候補として扱ってよいでしょう。状態がよければ、買い取りや譲渡といった手放し方も検討できます。",
  },
  {
    title: "異音や異臭、コードの傷みがある物を、そのまま来季も使う",
    body: "運転中にいつもと違う音がする、焦げたような臭いがする、電源コードに折れ癖や被覆の傷みがある、差込プラグの根元がぐらつく。こうした状態が見られる場合は、使用を控え、メーカーの相談窓口や購入した販売店に状態を伝えて相談してください。自分で分解して直そうとすることは避けます。長く使っている家電の確認の仕方は関連記事で扱っていますので、しまう前の点検の参考にしてください。判断に迷ったときは、使わずに相談するという選択が確実です。",
  },
  {
    title: "リサイクルの対象かどうかを、自己判断で決めてしまう",
    body: "家電の処分には、家電リサイクル法という制度の枠組みがあり、決められた品目については販売店や自治体の案内する方法で引き渡す仕組みが設けられています。一方で、どの品目がその対象にあたるか、対象外の家電をどう出すかは、住んでいる地域や購入した販売店の案内によって扱いが変わります。見た目や大きさから自己判断で決めず、自治体のごみ分別の案内や販売店の説明で確認してください。回収を依頼する場合は、必要な許可の体制を確認できる事業者を選びます。",
  },
];

const judgeSigns = [
  "こたつやオイルヒーターなど、一人では運び出せない大きさの物がある",
  "使わなくなった季節家電が何台もたまっていて、自力では運べない",
  "引っ越しや退去の期限があり、まとめて手放す必要がある",
  "収納の中に長年しまいっぱなしの物が多く、仕分けから手が回らない",
  "分別や出し方が分からない家電が複数あり、判断に迷っている",
];

const faqs = [
  {
    q: "扇風機は、箱に入れて保管したほうがよいですか？",
    a: "箱に入れるとほこりを防げますが、箱そのものが場所を取ります。判断の目安は、箱ごと収まる置き場所があるかどうかです。置き場所に余裕がなければ、箱は手放して不織布のカバーや大きめの袋をかけ、湿気がこもらないようにしておく方法があります。いずれの場合も、しまう前に羽根とカバーのほこりを落とし、乾いた状態にしておいてください。床に直接置かず、すのこなどを挟むと湿気の影響を受けにくくなります。",
  },
  {
    q: "何年使っていなければ手放してよいですか？",
    a: "一律の年数はありませんが、二シーズン続けて一度も出さなかった物は、来年も使わない可能性が高いと考えられます。年数だけでなく、収納の中でどれだけ場所を占めているか、出し入れの手間がどの程度かも合わせて見てください。大きくて場所を取る物ほど、使っていない期間の負担が大きくなります。反対に、小さく畳めて隙間に収まる物は、使用回数が少なくても保管の負担は限られます。",
  },
  {
    q: "古いヒーターから焦げたような臭いがしました。使い続けても大丈夫ですか？",
    a: "いつもと違う音や臭いがする、電源コードに傷みや折れ癖がある、差込プラグの根元がぐらつくといった状態が見られる場合は、使用を控えてください。そのうえで、メーカーの相談窓口や購入した販売店に状態を伝えて相談することをおすすめします。自分で分解して確かめようとすることは避けます。しまう前と出すときの年二回、動作と外観を確認する習慣をつけておくと、気になる点に早く気づけます。",
  },
  {
    q: "季節家電は、家電リサイクル法の対象になりますか？",
    a: "家電リサイクル法は、決められた品目について、販売店や自治体の案内する方法で引き渡す仕組みを定めた制度です。どの品目が対象にあたるか、また対象外の家電をどのように出すかは、お住まいの地域や購入した販売店の案内によって扱いが異なります。見た目や大きさから自己判断せず、自治体のごみ分別の案内や販売店の説明でご確認ください。事業者に回収を依頼する場合は、必要な許可の体制を説明できるかを確認してから依頼してください。",
  },
];

const related = [
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法と処分", desc: "対象品目の考え方と確認先" },
  { href: "/furui-kaden-anzen-shobun/", label: "古い家電の安全確認", desc: "使い続ける前に見るところ" },
  { href: "/reizouko-sentakuki-shobun-junbi/", label: "冷蔵庫・洗濯機の搬出準備", desc: "運び出す前にやること" },
  { href: "/koromogae-shunou-shikumika/", label: "衣替えの収納を仕組み化", desc: "季節ごとの入れ替えを楽に" },
  { href: "/oshiire-closet-seiri/", label: "押し入れ・クローゼットの整理", desc: "奥行きのある収納の使い方" },
  { href: "/aircon-torihazushi-shobun/", label: "エアコンの取り外しと処分", desc: "依頼先と段取りの確認" },
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
    { "@type": "ListItem", position: 2, name: "季節家電を保管するか手放すかの判断" },
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
    { href: "#kiso", label: "1｜季節家電が片付かない理由" },
    { href: "#merit", label: "2｜保管か手放すかを分ける3つの判断軸" },
    { href: "#houshin", label: "3｜品目別の保管の勘所と置き場所" },
    { href: "#steps", label: "4｜季節家電をしまってから見直すまでの5ステップ" },
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

      <Breadcrumb items={[{ label: "季節家電を保管するか手放すかの判断" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          季節家電を保管するか手放すかの判断｜扇風機・ヒーターの保管方法と処分の考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          夏が終わって扇風機をしまおうとしたとき、押し入れの奥からヒーターとこたつが出てきて、置き場所に困る。そんな場面は珍しくありません。壊れているわけではないので捨てる決心もつかず、結局また同じ場所にしまい直す。この繰り返しが、収納が片付かない原因のひとつになっています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、扇風機、サーキュレーター、電気ストーブ、オイルヒーター、こたつ、加湿器、除湿機、電気毛布といった季節家電について、保管を続けるか手放すかを分ける判断軸、しまう前の清掃と乾燥、箱を残すかどうか、湿気と直射日光を避ける置き方を整理します。処分の方法は地域や販売店の案内によって異なりますので、確認先も合わせて示します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>判断の基準は「壊れているか」ではなく「この一年で何回使ったか」</li>
          <li>大きくて場所を取る物ほど、使っていない期間の負担が大きい</li>
          <li>しまう前に汚れを落として完全に乾かす。水の残りは臭いの原因になる</li>
          <li>異音・異臭・コードの傷みがあるときは使用を控え、メーカーや販売店に相談する</li>
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

      <H2 id="kiso" num="1">季節家電が片付かない理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断の話に入る前に、季節家電という物の性質を押さえておきます。ここが分かると、迷いの理由も見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">保管か手放すかを分ける3つの判断軸</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        使った回数、置き場所への負担、来シーズンも同じ状態で使えるか。この三つを順に当てはめると、結論が出やすくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">品目別の保管の勘所と置き場所</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        同じ季節家電でも、しまい方の勘所は品目によって違います。扇風機とサーキュレーターは、羽根とカバーに付いたほこりを落としてからしまいます。分解できる範囲は製品ごとに違いますので、取扱説明書の記載に沿ってください。高さのある扇風機は、支柱を縮められる物は縮めてから、倒れないよう壁側に立てて置きます。電気ストーブは、反射板や吹き出し口のほこりを払い、乾いた状態でカバーをかけます。オイルヒーターは重さがあるため、床に直接置くと出し入れが大変です。キャスターが付いている物は、動かせる場所に置いておくと来シーズンが楽になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        水を扱う家電は、乾燥がいちばん大切です。加湿器と除湿機は、タンクと受け皿の水を必ず捨て、内部まで乾かしてからしまいます。水が残ったまま密閉すると、来シーズン出したときに臭いやぬめりに悩まされます。フィルターの手入れは説明書の範囲で行ってください。こたつは、天板を外して平らに寝かせ、ヒーター部分にほこりが積もらないようにします。こたつ布団と電気毛布は、洗える物は洗ってしっかり乾かしますが、洗える範囲は製品ごとに異なりますので、洗濯表示と説明書を確認してください。布製品の保管は<Link href="/futon-mattress-shobun/" className="text-primary underline underline-offset-2">布団やマットレスの扱い</Link>や<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの収納を仕組み化</Link>の考え方が応用できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        置き場所は、湿気がこもらず直射日光が当たらないところを選びます。ベランダや屋外の物置、窓際は、温度差と日差しの影響を受けやすい場所です。押し入れやクローゼットにしまう場合も、床に直接置かず、すのこなどを挟んで風の通り道を作ると湿気がこもりにくくなります。コードは本体に強く巻きつけず、ゆるくまとめておくと折れ癖が付きにくくなります。収納の奥行きが深い場合は、手前を使用頻度の高い物、奥を季節家電にするなど、位置を決めておくと出し入れの手間が減ります。押し入れの使い方は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>、屋外の物置に置いている場合は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置を片付ける前の整理</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">季節家電をしまってから見直すまでの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        使った回数を記録する→清掃して乾かす→箱の要否を決める→湿気と日光を避けて置く→出すときに状態を確認する。この一年の流れで進めます。
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
        <h3 className="font-bold text-text-primary mb-2">処分の方法は、自治体と販売店の案内で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          家電の処分には家電リサイクル法という制度の枠組みがあり、決められた品目については販売店や自治体の案内する方法で引き渡す仕組みが設けられています。どの品目が対象にあたるか、対象外の家電をどのように出すかは、お住まいの地域や購入した販売店の案内によって扱いが異なりますので、自己判断せず必ず確認してください。また、運転中の異音や異臭、電源コードの傷み、差込プラグのぐらつきが見られる場合は使用を控え、メーカーの相談窓口や購入した販売店に状態を伝えてご相談ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放すと決めた家電にも、いくつかの道があります。自治体の収集で出せる品目かどうかを確認する、販売店の案内する方法で引き渡す、状態のよい物は買い取りに出す、事業者に回収を依頼する。どれを選ぶかは、品目、状態、量、そして急いでいるかどうかで変わります。手放し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で整理しています。自治体の収集と事業者への依頼をどう使い分けるかは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>、買い取りを併用する考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの併用</Link>が参考になります。長年使ってきた家電の状態の見方は<Link href="/furui-kaden-anzen-shobun/" className="text-primary underline underline-offset-2">古い家電の安全確認</Link>にまとめています。
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
        一台ずつなら自分で出せることも多いのですが、次のような状況では事業者への依頼を検討する価値があります。対応できる事業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の記事から探せます。
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
        依頼先を選ぶときは、廃棄物の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、質問に具体的に答えることを基準にしてください。買い取りを伴う場合は、古物の取り扱いに関する許可についても確認しておくと安心です。料金は物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べるのが確実です。見積もり書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、無料をうたう回収への注意点は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">無料回収の注意点</Link>で扱っています。依頼先の候補としては<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>で対応の範囲や特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。家電の清掃や分解ができる範囲は製品ごとに異なりますので、必ず取扱説明書の記載に従ってください。運転中の異音や異臭、電源コードの傷みなど気になる点があるときは使用を控え、メーカーの相談窓口や購入した販売店にご相談ください。家電リサイクル法の対象となる品目や、対象外の家電の出し方は、お住まいの自治体および販売店の案内でご確認ください。片付け・不用品回収の料金は、物量・間取り・建物の条件・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
