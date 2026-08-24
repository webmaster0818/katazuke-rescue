import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/fuyohin-list-tsukurikata/";
const TITLE = "不用品リストの作り方｜書き出す項目と見積もり・家族分担への活かし方";
const DESC =
  "不用品リストは、捨てる物を決めるための紙ではなく、家族で話し合い、業者に同じ条件を伝えるための道具です。書き出す項目、紙とスマホの使い分け、写真とのひも付け方、判断を保留する物の置き場所の作り方、そして共有して分担と依頼範囲を決めるまでの手順を、一覧表という道具の使い方に絞って整理します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "リストは「捨てる物を決める紙」ではなく「話し合いと依頼の土台」",
    body: "不用品リストと聞くと、処分する物の名前を並べた紙を思い浮かべる方が多いと思います。ただ、実際に役に立つのは、手放す物だけを並べたリストではありません。どこに何がどれだけあり、それがどんな状態で、誰の物で、いま判断できるのかできないのか。この情報が一枚に並んでいると、家族で同じ画面を見ながら話せますし、業者に見積もりを頼むときも同じ条件を伝えられます。リストは決断の結果を書く紙ではなく、決断するための材料を並べる道具だと考えてください。",
  },
  {
    title: "書き出す前に、粒度と範囲を先に決めておく",
    body: "リスト作りで途中で止まってしまう原因のほとんどは、粒度を決めないまま書き始めることにあります。食器を一枚ずつ書くのか、食器棚の中身をまとめて一行にするのか。この方針が定まっていないと、引き出しひとつで手が止まります。目安としては、自分で運べない物や判断に迷う物は一行ずつ、小物や消耗品は「まとまり」で一行にすると進みます。範囲も同じで、今回は一部屋だけ、今週は押し入れだけ、と区切ってから始めてください。全部を一度に書こうとしないことが、続けるコツです。",
  },
  {
    title: "紙とスマホは、場面で使い分けると手が止まらない",
    body: "現場で書き出すときは紙が速いことが多く、後で共有したり並べ替えたりするときは表計算アプリのほうが便利です。おすすめは、部屋の中では紙かメモアプリに走り書きし、その日のうちに表へ写す二段構えです。表にしておくと、場所で並べ替える、判断保留だけを抜き出す、所有者ごとにまとめる、といった見方の切り替えができます。家族が離れて暮らしている場合は、共有できる形式にしておくと、写真を添えて相談する流れがそのまま作れます。手書きのままでも構いませんが、写真だけは残しておいてください。",
  },
];

const merits = [
  {
    title: "項目1：場所・品目・数量（どこに、何が、どれだけ）",
    body: "最初の三つは、リストの背骨になる情報です。場所は「和室」ではなく「和室の押し入れ上段」まで書くと、後から探し直す手間がなくなります。品目は商品名まで書く必要はなく、「テレビ台」「衣装ケース」「布団」といった呼び方で十分です。数量は正確な数でなくてもよく、「衣装ケース 4」「段ボール 10前後」のような書き方で構いません。この三つがそろっているだけで、部屋全体にどれくらいの量があるのかが見えるようになり、自分で運ぶ範囲と頼む範囲の線引きがしやすくなります。",
  },
  {
    title: "項目2：状態と、持ち出せるかどうか",
    body: "状態の欄には、まだ使えるのか、破損しているのか、汚れや臭いがあるのかを短く書きます。ここが埋まっていると、リサイクルショップに相談する物と処分に回す物を後から仕分けられます。もうひとつ大切なのが「持ち出せるか」という欄です。自分ひとりで運べる、二人なら運べる、分解しないと出せない、そもそも部屋から出せるか分からない。この四段階だけでも書き分けておくと、当日に人手が足りないという事態を避けられます。大型家具や家電は、幅と高さをメモしておくとさらに確実です。",
  },
  {
    title: "項目3：判断保留かどうかと、所有者は誰か",
    body: "リストが途中で止まるもうひとつの理由は、決められない物の前で長く考え込んでしまうことです。そこで「保留」という欄を作り、迷ったらチェックを入れて次へ進みます。判断を後回しにするのではなく、判断する場所を分けるという考え方です。あわせて所有者の欄も設けてください。自分の物、家族の物、すでに亡くなった方の物、いま別居している家族の物では、進め方がまったく違います。自分以外の物であることが分かった時点で、その行は勝手に進めない印になります。",
  },
];

const steps = [
  {
    title: "書き出す範囲を区切り、表の見出しを先に作る",
    body: "いきなり物を見始めると、目についた順に書いてしまい、後で整理できなくなります。先に紙か表計算アプリを開き、場所・品目・数量・状態・持ち出せるか・保留・所有者・メモ、という見出しの行を作ってください。次に、今回書き出す範囲を決めます。一日で終わらせようとせず、「今日は寝室のクローゼットだけ」というくらいに区切るのが現実的です。範囲を決めたら、その部屋の入口に立って、時計回りに見ていく順番も決めておくと、書き漏らしが減ります。",
  },
  {
    title: "場所ごとに、扉を開けた順で埋めていく",
    body: "書き出しは、収納の扉を開けて手前から奥へ、上段から下段へ、という順で進めます。中身を出す必要はありません。開けて見える範囲を、決めた粒度で書いていくだけです。ここで気をつけたいのは、書きながら仕分けを始めないことです。手に取って懐かしくなり、そこで一時間経ってしまう。これはとてもよくある展開です。今日は書くだけと決めて、迷った物には保留の印を付けて先へ進みます。部屋の中を見る順番を決めておくと、書き漏らしも減り、同じ場所を二度見る無駄もなくなります。",
  },
  {
    title: "写真を撮り、行番号とひも付ける",
    body: "文字だけのリストは、他の人に見せたときに伝わりきりません。収納を開けた状態の写真、大型の家具や家電を正面から撮った写真、搬出の通り道になる廊下や玄関の写真を撮っておいてください。撮った写真のファイル名か、写真アプリのメモに行番号を書いておくと、リストと写真が結び付きます。これがあると、遠方に住む家族に状況を説明するときも、業者に相談するときも、言葉で説明し直す手間がなくなります。型番のシールがある家電は、そこも一枚撮っておくと確認が早くなります。",
  },
  {
    title: "判断保留の物に、実際の置き場所を用意する",
    body: "保留という印を付けただけでは、物は部屋の中に散らばったままです。段ボール数箱でも押し入れの一段でも構わないので、保留の物を集めておく場所を決めてください。そして、いつ見直すかを紙に書いて箱に貼っておきます。期限を切ることが目的ではなく、次に考える日を決めておくことで、その日までは考えなくてよくなるのが利点です。保留の箱がいくつも増えていく場合は、粒度が細かすぎるか、判断の基準が決まっていない可能性があります。その場合は、家族と方針を先に話し合ってください。",
  },
  {
    title: "共有して、分担と依頼する範囲を決める",
    body: "リストがある程度そろったら、家族に共有します。全員で同じ表を見ながら、自分で運べる物、誰が引き取る物、判断を保留する物、業者に頼む物に色分けしていきます。ここまで来ると、誰が何をいつまでにやるかという分担が具体的に決まります。そして、業者に頼むと決めた行だけを抜き出せば、それがそのまま見積もり依頼の材料になります。同じ内容を複数の事業者に渡せるので、条件をそろえた比較ができます。金額の水準は物量・間取り・建物の条件・作業内容・地域・事業者により異なります。",
  },
];

const ngActions = [
  {
    title: "家中を一度に書き出そうとして、途中でやめてしまう",
    body: "最初の意気込みで全部屋を対象にすると、たいてい二部屋目で力尽きます。そして書きかけのリストは、次に開くのが億劫になり、そのまま放置されます。範囲を区切って書き終える経験を一度作るほうが、結果的に早く終わります。押し入れひとつ、キッチンの吊り戸棚ひとつでも、書き終えれば「ここは終わった」という区切りができます。区切りが増えていく感覚が、続ける力になります。全体像がどうしても気になる場合は、部屋名だけを先に並べた目次を作り、埋めた部屋に印を付けていく形にしてください。",
  },
  {
    title: "「いる・いらない」の二択だけで分けようとする",
    body: "二択にすると、決められない物の行き場がなくなります。そして決められない物こそ、量が多く、時間を取られる物です。保留という三つ目の受け皿を用意し、そこに入れてよいというルールにしておくと、手が止まりません。また、二択で進めると「今すぐ決めなければ」という圧がかかり、後から悔やむ判断につながることもあります。特に思い出の品や、家族と関わりのある物は、時間を置いたほうがよい判断ができます。急がず、保留の欄を使ってください。",
  },
  {
    title: "所有者を確かめないまま、他人の物を処分してしまう",
    body: "リストを作っていると、自分の判断で進められない物が必ず出てきます。すでに亡くなった方の物、別居している家族の物、賃貸の部屋に残されていた前の入居者の物などです。これらを所有者に確認しないまま処分すると、後から思わぬ行き違いになることがあります。所有者の欄に自分以外の名前が入った行は、いったん手を止めてください。相続に関わる可能性がある場合や、貸主・管理会社との関係がある場合は、当事者や弁護士等の専門家に相談したうえで進めるのが安全です。",
  },
  {
    title: "写真も寸法もないまま、口頭で見積もりを頼む",
    body: "リストがあっても、写真や大きさの情報がないと、事業者側は状況を想像で補うことになります。その結果、当日になって想定と違うという話になりがちです。大型の家具や家電は幅と高さを、搬出の経路になる廊下や玄関、階段やエレベーターの有無を、写真とメモで添えてください。同じ資料を複数の事業者に渡せば、前提のそろった見積もりが得られます。見積もり書のどこを見ればよいかは、関連記事で詳しく扱っています。書面で受け取ることも忘れないでください。",
  },
];

const judgeSigns = [
  "リストに書いた大型の家具や家電を、自分では運び出せない",
  "書き出してみて、部屋数と物量が想像より多いことが分かった",
  "退去や引き渡しの期限が決まっていて、書き出す時間も限られている",
  "遠方に住んでいて、現地で作業できる日が数日しかない",
  "遺品整理を伴い、判断保留の物が多く残っている",
];

const faqs = [
  {
    q: "不用品リストには、どこまで細かく書けばよいですか？",
    a: "すべてを一点ずつ書く必要はありません。自分で運べない物、判断に迷う物、家族と相談が必要な物は一行ずつ書き、小物や消耗品は「食器棚の中身」「本棚二段分」のようにまとめて一行にすると進みます。目的は完全な目録を作ることではなく、家族で話し合い、業者に同じ条件を伝えられる状態にすることです。細かく書きすぎて途中で止まるより、粗くても最後まで埋まったリストのほうが役に立ちます。",
  },
  {
    q: "紙で作るのと、スマホやパソコンで作るのはどちらがよいですか？",
    a: "現場で書き出すときは紙やメモアプリが速く、共有したり並べ替えたりするときは表計算アプリが便利です。両方を使い、その日のうちに紙から表へ写す形が現実的です。表にしておくと、場所で並べ替える、保留だけを抜き出す、所有者ごとにまとめるといった見方ができます。家族が離れて暮らしている場合は、共有できる形式にしておくと、写真を添えて相談する流れがそのまま作れます。",
  },
  {
    q: "亡くなった家族の物や、別居している家族の物はどう扱えばよいですか？",
    a: "リストには記録しておき、所有者の欄に誰の物かを書いたうえで、判断は保留にしてください。自分の判断だけで処分を進めると、後から行き違いになることがあります。相続に関わる可能性がある場合や、賃貸の部屋に残された物である場合は、関係する方や貸主・管理会社と話し、必要に応じて弁護士等の専門家に相談したうえで進めてください。記録として写真を残しておくことも役に立ちます。",
  },
  {
    q: "作ったリストは、見積もりのときにどう使えばよいですか？",
    a: "業者に頼むと決めた行だけを抜き出し、写真と、搬出の経路に関するメモを添えて渡してください。同じ資料を複数の事業者に渡すことで、前提のそろった見積もりが得られます。あわせて、作業を希望する日、建物の階数とエレベーターの有無、駐車できる場所、当日立ち会えるかどうかも伝えます。金額は物量・間取り・建物の条件・作業内容・地域・事業者により異なるため、書面の見積もりで確認してください。",
  },
];

const related = [
  { href: "/oheya-checklist/", label: "部屋別の片付けチェックリスト", desc: "場所ごとに見落としを防ぐ" },
  { href: "/katazuke-junban/", label: "片付けを進める順番", desc: "どこから手を付けるかの考え方" },
  { href: "/mitsumorisho-mikata/", label: "見積もり書の見方", desc: "作業範囲と追加費用の確認点" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
  { href: "/ihin-katamiwake-susumekata/", label: "形見分けの進め方", desc: "家族で話し合うときの順序" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "搬出と手放し方の段取り" },
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
    { "@type": "ListItem", position: 2, name: "不用品リストの作り方" },
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
    { href: "#kiso", label: "1｜リストを作る前に押さえること" },
    { href: "#merit", label: "2｜書き出す項目は3グループに分かれる" },
    { href: "#houshin", label: "3｜家族で共有して分担を決める使い方" },
    { href: "#steps", label: "4｜不用品リストを作る5ステップ" },
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

      <Breadcrumb items={[{ label: "不用品リストの作り方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          不用品リストの作り方｜書き出す項目と見積もり・家族分担への活かし方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          片付けを始めようとして、まず何をすればいいのか分からない。家族に手伝ってほしいけれど、何をどう頼めばいいのか説明できない。業者に相談したいけれど、伝えるべきことが整理できていない。こうした行き詰まりは、多くの場合、頭の中にある情報が紙の上に出ていないことから起きています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、不用品リストという一覧表を、どう作り、どう使うかに絞って整理します。書き出す項目、紙とスマホの使い分け、写真とのひも付け方、判断を保留する物の置き場所の作り方、そして家族で共有して分担を決め、見積もり依頼の材料にするまでの流れを順に見ていきます。なお、料金は物量・間取り・建物の条件・作業内容・地域によって異なりますので、具体的な金額は必ず見積もりでご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>リストの列は「場所・品目・数量・状態・持ち出せるか・保留・所有者」の7つを基本にする</li>
          <li>範囲を区切り、書きながら仕分けをしない。迷ったら保留の印を付けて先へ進む</li>
          <li>保留の物には実際の置き場所を用意し、次に考える日を書いて貼っておく</li>
          <li>業者に頼む行だけを抜き出せば、複数社に同じ条件を伝える材料になる</li>
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

      <H2 id="kiso" num="1">リストを作る前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        書き始める前に、リストという道具が何のためにあるのかを押さえておくと、途中で手が止まりにくくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">書き出す項目は3グループに分かれる</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        場所と品目と数量、状態と搬出のしやすさ、判断の保留と所有者。この三つのグループがそろうと、リストは話し合いにも見積もりにも使えるようになります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">家族で共有して分担を決める使い方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        リストがいちばん力を発揮するのは、家族で話し合う場面です。口頭で「まだ物が多い」「思ったより片付いていない」と言い合っていると、話が感覚のぶつかり合いになりがちです。ところが同じ表を見ながら「この行はどうする」と一行ずつ確認していくと、話題が具体的になり、感情の応酬になりにくくなります。おすすめは、リストの行に色を付けていく方法です。自分で運べる物、誰かが引き取る物、判断を保留する物、業者に頼む物の四色に塗り分けると、その場で分担が見えてきます。実家の片付けのように意見が分かれやすい場面ほど、この効果は大きくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遠方に住む家族がいる場合は、共有できる形式にしておくと相談が進みます。写真をひも付けておけば、現地にいない人でも状況が分かり、「これは自分が引き取る」といった判断ができます。逆に、リストがないまま電話で相談すると、説明する側の負担が大きく、話が前に進みません。なお、亡くなった方の物や別居している家族の物が含まれる場合は、記録として残したうえで判断は保留にし、関係する方や必要に応じて専門家に相談してから進めてください。<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親を説得するときの伝え方</Link>や<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付け</Link>も参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もうひとつの使い道が、見積もり依頼です。業者に頼むと決めた行だけを抜き出し、写真と搬出経路のメモを添えて渡せば、複数の事業者に同じ条件を伝えられます。前提がそろっていない見積もりを金額だけで並べても比較になりませんので、この一手間が効いてきます。どの部屋から手を付けるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けを進める順番</Link>、場所ごとの見落としを防ぐには<Link href="/oheya-checklist/" className="text-primary underline underline-offset-2">部屋別チェックリスト</Link>、手放し方の選択肢は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で扱っています。
      </p>

      <H2 id="steps" num="4">不用品リストを作る5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        見出しを作る→場所ごとに埋める→写真をひも付ける→保留の置き場所を用意する→共有して分担を決める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">自分以外の物が含まれるときは、書き留めて判断は保留に</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          リストを作っていると、亡くなった方の物、別居している家族の物、賃貸の部屋に残されていた物など、自分の判断だけでは進められない物が出てきます。これらは所有者の欄に誰の物かを書き、写真を残したうえで、判断は保留にしてください。相続に関わる可能性がある場合や、貸主・管理会社との関係がある場合は、関係する方に確認し、必要に応じて弁護士等の専門家に相談してから進めるのが安全です。契約や請求をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        リストが埋まったら、次は手放し方の割り振りです。自治体の収集で出せる物を先に減らしておくと、業者に頼む範囲そのものが小さくなります。その線引きは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>、粗大ごみの申し込みの流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>で扱っています。集合住宅で搬出する場合は、共用部の養生や管理規約の確認といった段取りが別に必要になりますので、<Link href="/mansion-hanshutsu-dandori/" className="text-primary underline underline-offset-2">マンションの不用品搬出の段取り</Link>もあわせてご覧ください。まだ使える物を売る選択肢は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの併用</Link>で整理しています。
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
        リストを書き終えて全体量が見えたとき、自力では難しいと分かることがあります。次のような状況が判断の目安です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼するときは、作ったリストと写真を渡し、同じ条件で複数の事業者に見積もりを出してもらってください。廃棄物の収集運搬に必要な許可を確認できること、書面で見積もりを出すこと、質問に具体的に答えることが選ぶときの基準になります。書面のどこを見ればよいかは<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>で詳しく扱っています。依頼先の候補としては<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。片付け・不用品回収の料金および契約の条件は、物量・間取り・建物の構造・作業内容・地域・事業者により異なりますので、必ず見積もりと契約書面でご確認ください。廃棄物の分別区分や収集の方法は自治体により異なりますので、お住まいの自治体の案内でご確認ください。所有権や相続、賃貸借契約に関わる判断が必要な場合は、関係する方や貸主・管理会社と話し合い、必要に応じて弁護士等の専門家にご相談ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
