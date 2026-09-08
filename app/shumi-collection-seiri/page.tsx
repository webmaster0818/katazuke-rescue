import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shumi-collection-seiri/";
const TITLE = "趣味のコレクションの整理｜集めた物を手放すときの考え方と進め方";
const DESC =
  "長年かけて集めた本・模型・レコード・道具類は、量が多いうえに一つずつに思い入れがあり、片付けが止まりやすい領域です。全部か無かで考えない仕分けの軸、価値の判断を急がない理由、家族に伝えておくこと、査定を受けるときの確認点を手順に沿って解説します。";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "一つずつに理由があるため、まとめて判断できない",
    body: "一般的な不用品は「使っているか」で機械的に分けられますが、コレクションは一つひとつに入手したときの経緯があります。まとめて判断できないぶん、点数が多いほど時間がかかり、途中で疲れて中断しやすくなります。だからこそ、始める前に判断の軸を決めておくこと、そして一度に全部を決めようとしないことが、進めるうえでの前提になります。",
  },
  {
    title: "価値が分かりにくく、手放す判断が怖い",
    body: "自分にとっての価値と、市場での評価は別のものです。「価値があるかもしれない」と思うと手放せず、「もう価値はないだろう」と思い込むと本当は評価される物まで処分してしまいます。どちらの方向にも失敗が起こり得るため、判断が付かない物は処分の前に査定を受けてから決める、という手順を挟むのが安全です。",
  },
  {
    title: "家族と評価が違い、話がかみ合わない",
    body: "集めた本人にとっては大切な物でも、家族には量の多さだけが目に入ることがあります。逆に、家族が価値を知らないまま処分してしまい、取り返しが付かなくなることもあります。どちらの立場でも、「何が、どういう理由で大切なのか」が共有されていないことが対立の原因です。整理と同時に、伝える作業をしておく意味はここにあります。",
  },
];

const merits = [
  {
    title: "範囲：棚一つ、箱一つなど、小さく区切る",
    body: "コレクション全体を一度に見ようとすると、量に圧倒されて手が止まります。棚一段、箱一つのように小さく区切り、そこだけを終わらせる進め方にすると、判断の疲れがたまる前に区切りが付きます。終わった範囲が目に見えると、次に進む力にもなります。時間も「今日は一時間」と決めておくと、切り上げやすくなります。",
  },
  {
    title: "軸：「手に取るか」と「代わりが利くか」で見る",
    body: "残す・手放すの判断は、「この一年で手に取ったか」と「同じ物を後から入手できるか」の二つで見ると整理しやすくなります。手に取っていて、入手も難しい物は残す。手に取っておらず、代わりが利く物は手放す候補。この二つの軸のどちらかで決まらない物は、無理に決めずに保留に回します。",
  },
  {
    title: "保留：迷った物の置き場を先に作る",
    body: "コレクションの整理では、迷う物が必ず出ます。保留の箱を先に用意し、「迷ったらここに入れる」と決めておくと、その場で決めきれなくても作業が止まりません。保留にした物は、いつ見直すかを決めておきます。期限を決めないと、保留の箱がそのまま新しい置き場になってしまいます。",
  },
];

const steps = [
  {
    title: "今日進める範囲を決めて、そこだけを出す",
    body: "棚一段、箱一つなど、終わりが見える範囲を決めて中身を出します。全部を一度に広げると、戻せなくなって生活に支障が出ます。出した物を並べる場所を先に確保し、床に敷物を敷いておくと、傷や汚れを防げます。時間も決めておき、疲れる前に切り上げましょう。",
  },
  {
    title: "同じ分野の物を一か所に集めて重複を見る",
    body: "同じ種類の物が家のあちこちに分かれていると、全体量が分かりません。分野ごとに集めると、同じ物を重ねて持っていること、そろえたはずのものが欠けていることが見えてきます。ここで初めて「どれを残すか」の比較ができる状態になります。集める作業だけで一日を使っても構いません。",
  },
  {
    title: "「残す・査定に回す・手放す」の三つに分ける",
    body: "決めておいた軸に沿って三つに分けます。手に取っていて入手が難しい物は残す、手に取っておらず代わりが利く物は手放す候補、判断が付かない物は査定に回す候補です。二択にしないことで、迷いによる中断を減らせます。分けた物は袋や箱にまとめ、どれがどの区分かを書いておきましょう。",
  },
  {
    title: "査定候補は付属品をそろえて、複数の査定を比べる",
    body: "査定に回す物は、箱・説明書・付属品をそろえ、汚れを軽く落としてからまとめます。買取を依頼する場合は、古物の取り扱いに関する許可を確認できる店を選び、可能であれば複数の査定を比べてください。金額に納得できなければ手放さないという選択もできます。買取金額は品物の状態・種類・時期、各店の方針により異なります。",
  },
  {
    title: "残す物の置き場を決めて、増え方の上限を作る",
    body: "残すと決めた物は、置き場所と収まる量を決めます。「この棚に入る分まで」と上限を決めておくと、これから増える物と入れ替える形になり、量が広がり続けるのを防げます。手放した物の記録を残しておくと、あとで探したときに「手放した」と確認でき、気持ちの整理にもなります。",
  },
];

const ngActions = [
  {
    title: "価値を確かめないまま、まとめて処分してしまう",
    body: "量を減らすことを優先して一括で手放すと、後から評価される物が含まれていたと分かっても取り戻せません。判断が付かない物は「査定に回す候補」として分け、処分する物と混ぜないでください。急いでいるときほど、この一手間が効きます。家族が代わりに整理する場合も、同じ扱いを共有しておきましょう。",
  },
  {
    title: "家族が本人に確認せずに処分する",
    body: "本人の同意がないまま趣味の物を処分すると、信頼関係を損ない、その後の片付けも進まなくなります。量の多さが問題であっても、まずは何が大切なのかを聞くところから始めてください。「捨てるかどうか」ではなく「どれを残したいか」を尋ねる形にすると、話が前に進みやすくなります。",
  },
  {
    title: "全部を保留にして、置き場所だけが増えていく",
    body: "迷う物を保留にするのは有効な方法ですが、保留の箱に期限がないと、そのまま新しい収納が増えるだけになります。保留にした物は、いつ見直すかを決めておいてください。見直しの日に手に取らなかった物は、そのときにあらためて判断すると、一度目より決めやすくなります。",
  },
  {
    title: "突然の訪問買取に、その場で応じてしまう",
    body: "自分から依頼していない訪問での買取をめぐるトラブルは、繰り返し注意喚起されています。事業者名・所在地・連絡先が確認できない相手、その場での即決を求める相手には応じないでください。買取品目と金額の書面を必ず確認し、不安を感じたときは契約を進めず、消費者ホットライン188に相談することができます。",
  },
];

const judgeSigns = [
  "点数が多く、自分では搬出も仕分けも終わらない",
  "本や機材が重く、一人では運び出せない",
  "故人が集めた物で、価値の判断が家族には難しい",
  "退去や引き渡しの期限があり、時間が限られている",
  "遠方に住んでいて、現地で作業できる回数が少ない",
];

const faqs = [
  {
    q: "どこから手を付ければよいか分かりません。",
    a: "棚一段、箱一つのように、終わりが見える範囲を決めて始めてください。全体を一度に見ようとすると量に圧倒されます。区切った範囲の中で、同じ分野の物を集め、「残す・査定に回す・手放す」の三つに分ける。この単位を繰り返すのが、途中で止まりにくい進め方です。",
  },
  {
    q: "価値があるかどうか、自分では分かりません。",
    a: "見た目や年代だけで判断するのは難しいため、判断が付かない物は処分の前に査定を受けるのが安全です。査定は無料で受けられる場合もあります。依頼する際は、古物の取り扱いに関する許可を確認できる買取店を選び、可能であれば複数の査定を比べてください。買取の可否や金額は、品物の状態・種類・時期、各店の方針により異なります。",
  },
  {
    q: "家族に「早く減らして」と言われて困っています。",
    a: "量の多さが心配されている場合、まずは通り道や安全に関わる場所から片付けると、話し合いが進みやすくなります。あわせて、自分にとって何が大切なのかを伝えておくと、家族も判断の材料を持てます。残す物のリストを作って共有しておくと、将来の行き違いを防ぐことにもつながります。",
  },
  {
    q: "故人が集めた物をどう扱えばよいですか？",
    a: "急いで結論を出す必要はありません。まずは、明らかに手放してよい物と、価値の判断が必要な物を分け、後者は査定を受けてから決めると後悔が残りにくくなります。相続に関わる物が含まれる場合は、処分の前に相続人どうしで扱いを確認しておくことも大切です。進め方は遺品整理の記事もあわせてご覧ください。",
  },
];

const related = [
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップの併用", desc: "買取と処分の組み合わせ方" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理と処分方法", desc: "残す書類の見分け方" },
  { href: "/gakki-shobun-kaitori/", label: "楽器の処分と買取", desc: "手放すルートの選び方" },
  { href: "/kiroku-media-shobun/", label: "記録メディアの処分", desc: "ディスク・HDDの手放し方" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "元気なうちに進める手順" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と任せる範囲" },
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
    { "@type": "ListItem", position: 2, name: "趣味のコレクションの整理" },
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
    { href: "#kiso", label: "1｜コレクションの片付けが止まりやすい理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜価値の判断は急がず、処分の前に確かめる" },
    { href: "#steps", label: "4｜コレクションを整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "趣味のコレクションの整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          趣味のコレクションの整理｜集めた物を手放すときの考え方と進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月2日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          棚を埋めている本や雑誌、箱に入ったままの模型、聴かなくなったレコードやディスク、使わなくなった趣味の道具。長年かけて集めた物は、量が多いだけでなく、一つひとつに集めたときの記憶が結び付いています。「片付けたいが手が止まる」「家族には価値が分からないと言われる」——コレクションの整理は、一般的な不用品の処分とは進み方が違います。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、コレクションの片付けが難しくなる理由、全部残すか全部手放すかで考えないための仕分けの軸、価値の判断を急がないほうがよい理由、家族に伝えておきたいこと、そして査定を受けるときに確認したい点を順に整理します。無理に手放すことを勧める記事ではありません。今の暮らしに合う持ち方を決めるための考え方としてお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>コレクションは「全部残す・全部手放す」の二択で考えると手が止まる。段階を作る</li>
          <li>仕分けの軸は「今の暮らしで手に取るか」と「代わりが利くか」の二つ</li>
          <li>価値の判断が付かない物は、処分の前に査定を受けてから決める</li>
          <li>何をどう扱ってほしいかを家族に伝えておくと、あとの行き違いを防げる</li>
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

      <H2 id="kiso" num="1">コレクションの片付けが止まりやすい理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        止まる原因は、意志の弱さではなく、判断の構造にあります。まずそこを整理します。
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
        範囲、軸、そして保留の置き場。この三つを決めておくと、途中で止まりにくくなります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">価値の判断は急がず、処分の前に確かめる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        コレクションの整理でいちばん避けたいのは、価値が分からないまま一括で手放してしまうことです。見た目や年代だけでは評価は分かりにくく、一度手放すと取り戻せません。判断が付かない物は「査定に回す候補」としてまとめ、処分する物とは別にしておきましょう。査定を受けたうえで手放すか残すかを決めれば、後から悔いが残りにくくなります。反対に、すべてを保留にすると整理は進まないため、明らかに手放してよい物は先に分けて構いません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        査定を依頼する場合は、中古品の売買に必要な古物の取り扱いに関する許可を確認できる買取店・事業者を選びましょう。可能であれば複数の査定を比べると、判断の材料が増えます。箱や説明書、付属品がそろっていると評価が変わる物もあるため、仕分けの段階で本体と付属品を離さないようにしておくと確実です。買取と処分の組み合わせ方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの併用</Link>、宅配で送る場合の考え方は<Link href="/irui-takuhai-kaitori/" className="text-primary underline underline-offset-2">衣類の宅配買取と処分の使い分け</Link>が参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        分野ごとに扱いが違う点も押さえておきたいところです。本や雑誌は量が増えやすく、資源として出す区分も自治体によって異なります。楽器や機材は保管状態が評価に関わります。記録メディアやデータが入った機器は、処分の前にデータの扱いを考える必要があります。それぞれ<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理と処分方法</Link>、<Link href="/gakki-shobun-kaitori/" className="text-primary underline underline-offset-2">楽器の処分と買取</Link>、<Link href="/kiroku-media-shobun/" className="text-primary underline underline-offset-2">写真データと記録メディアの処分</Link>で詳しく扱っています。
      </p>

      <H2 id="steps" num="4">コレクションを整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        範囲を区切る→分野ごとに集める→三つに分ける→査定候補を確認する→残す物の置き場を決める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">買取・処分の扱いは、品物と地域によって異なります</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          買取の可否や金額は、品物の状態・種類・時期、そして各店の方針によって異なり、一律の目安を示せるものではありません。本記事は一般的な考え方の整理にとどめています。中古品の売買には古物の取り扱いに関する許可が関わりますので、買取を依頼する場合は、事業者名・所在地・連絡先と許可の体制を確認できる相手を選んでください。自分から依頼していない突然の訪問買取には応じない、その場で即決しない、買取品目と金額の書面を確認するといった基本も大切です。また、本や雑誌、記録メディア、電気を使う機器などの処分の区分は自治体によって異なりますので、お住まいの市区町村の分別案内をご確認ください。契約や請求について不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        整理が一段落したら、何をどう扱ってほしいかを家族に伝えておくと、将来の行き違いを防げます。手元に残す物のリストと、査定に出すなら相談したい先を一枚の紙にまとめておくだけでも十分です。元気なうちに進める整理の考え方は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>、家族と進めるときの伝え方は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">物を捨てない親への片付けの声かけ</Link>で扱っています。
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
        次のような状況では、片付け業者や買取の窓口への相談を検討したほうが進みます。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。買取を伴う依頼では、古物の取り扱いに関する許可もあわせて確認します。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>で整理しています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。買取の可否・金額は品物の状態や時期、各店の方針により異なります。中古品の売買や買取に必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。本・雑誌・記録メディア・電気を使う機器などの分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。相続に関わる財産の取り扱いについては、相続人の間での確認や、必要に応じて専門家へのご相談をおすすめします。訪問買取などの契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
