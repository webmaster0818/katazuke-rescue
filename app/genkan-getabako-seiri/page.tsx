import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/genkan-getabako-seiri/";
const TITLE = "玄関・下駄箱の片付け｜靴と外まわり用品を減らす基準と手順";
const DESC =
  "玄関は面積が小さいわりに、靴・傘・外まわりの道具が集まって散らかりやすい場所です。下駄箱に入りきらない靴の見直し方、履かなくなった靴を判断する基準、傘やベビーカーなど大きい物の置き方、家族で使う玄関のルールづくりまで、手順に沿って解説します。";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "外から持ち込んだ物が、いったん置かれる場所",
    body: "宅配で届いた箱、雨に濡れた傘、外で使った道具、資源として出す予定の紙。玄関は、家の中と外の境目にあるため、「あとで片付ける物」が置かれやすい場所です。一つひとつは小さくても、置かれる頻度が高いため、片付けの手が入らないと数日で埋まります。玄関の片付けは、置かれた物を減らすことと、置かれた物の行き先を決めることの両方が必要になります。",
  },
  {
    title: "靴は「使っている数」と「持っている数」が離れやすい",
    body: "履き慣れた靴を繰り返し履く一方で、履かなくなった靴は下駄箱の奥に残ります。傷んでいるわけではないため捨てる理由が見つからず、そのまま数だけが積み上がっていきます。玄関の収納は容量が決まっているので、持っている数が入る数を超えた時点で、あふれた分が三和土に出てくることになります。ここが玄関の散らかりの中心です。",
  },
  {
    title: "家族で使う場所は、ルールがないと元に戻せない",
    body: "自分の物だけなら片付けは自分で完結しますが、玄関は家族全員が使います。誰がどこに何を置くかが決まっていないと、片付けた直後から別の人の物が置かれ、元に戻ります。玄関の片付けは、物を減らす作業と同時に、「誰の物をどこに置くか」を家族で決める作業でもあります。",
  },
];

const merits = [
  {
    title: "時間：玄関は短時間で区切れる。まず一時間を目安に",
    body: "玄関は面積が小さいため、下駄箱ひとつなら短時間で終えられることが多い場所です。時間を区切って始めると、途中で疲れて中断する事態を避けられます。逆に、家全体の片付けの流れで玄関に取りかかると、後回しになりがちです。まず玄関だけを終わらせて、目に見える変化を作るという進め方も有効です。",
  },
  {
    title: "基準：「この一年で履いたか」を先に決めておく",
    body: "靴を前にしてから判断基準を考えると、一足ごとに迷って手が止まります。始める前に「この一年で履いたかどうか」「今の生活で履く機会があるか」といった軸を決めておくと、判断が早くなります。傷みや状態は、その次に見る要素です。迷った靴は保留の箱に入れ、その場で決めきらない逃げ道も用意しておきましょう。",
  },
  {
    title: "戻し方：下駄箱に入る数を上限にする",
    body: "全部出したあとに、どれを戻すかを決める順番で進めます。下駄箱に入る数が上限で、そこに収まらない分は三和土に出るということです。上限を先に意識しておくと、「収納を増やす」ではなく「数を決める」方向に判断が向きます。収納用品を買い足す前に、この工程を済ませてください。",
  },
];

const steps = [
  {
    title: "下駄箱の中身と三和土の靴を全部出す",
    body: "下駄箱の中身をすべて外に出し、三和土に並んでいる靴も一か所に集めます。全部出すと、同じような靴が何足もあること、片方しかない靴が残っていることに気付けます。ほこりがたまっていることが多いため、空になった棚を拭いてから戻すと、仕上がりが変わります。狭い場所なので、玄関の外や廊下に新聞紙を敷いて並べると作業しやすくなります。",
  },
  {
    title: "「履いている・履いていない・保留」に分ける",
    body: "決めておいた基準に沿って、三つに分けます。この一年で履いた靴、履かなかった靴、判断が付かない靴です。片方しかない靴、修理が必要なまま使っていない靴は、この段階で扱いを決めておきます。保留にした靴は箱にまとめ、いつ見直すかを決めておくと、そのまま置き去りになりません。",
  },
  {
    title: "下駄箱に入る数だけを戻し、使う頻度で置き場所を決める",
    body: "戻すのは、下駄箱に無理なく入る数までです。毎日履く靴を取り出しやすい高さに、季節物や来客用を上段や下段に置くと、日々の出し入れが楽になります。詰め込みすぎると通気が悪くなり、出し入れのたびに崩れる原因にもなります。棚板の高さを変えられる場合は、この段階で調整しておきましょう。",
  },
  {
    title: "傘・ベビーカー・外用品の置き場所を決める",
    body: "傘は本数を決め、置き場所を一か所にまとめます。ベビーカーや外で使う道具のように場所を取る物は、通り道をふさがない位置に置き場を決めてください。玄関は災害時の出入り口でもあるため、扉の開閉と人の通り道を妨げないことが優先です。屋外に置ける物は、劣化しにくい形で保管できるかも確認しておきましょう。",
  },
  {
    title: "家族で「どこに何を置くか」を共有する",
    body: "片付けた状態を保つには、家族全員が同じ置き場を使えることが必要です。誰の靴をどの段に置くか、宅配の箱はどこに置いてどのタイミングで出すかを決め、口頭だけでなく分かる形にしておきます。子どもがいる家庭では、手が届く高さに置き場を作ると、自分で戻せるようになります。",
  },
];

const ngActions = [
  {
    title: "下駄箱に入る数を決めずに、収納用品を買い足す",
    body: "あふれた靴を収める目的で棚やラックを買い足すと、置ける数が増えたぶん、持つ数も増えます。玄関は面積が限られているため、収納を増やすほど通り道が狭くなり、かえって使いにくくなります。買い足す前に、全部出して数を決める工程を済ませてください。収納を増やして片付かなくなる仕組みは、収納グッズの記事で扱っています。",
  },
  {
    title: "家族の靴を、本人に確認せずに処分する",
    body: "自分以外の家族の靴を勝手に処分すると、たとえ履いていない物でも強い反発を招き、その後の片付けが進まなくなります。玄関は共有の場所なので、自分の物と家族の物を分け、家族の分は本人に判断してもらうのが原則です。判断を求める際も、「捨てて」ではなく「この一年で履いたか」を聞く形にすると話が進みます。",
  },
  {
    title: "三和土や共用廊下に、置きっぱなしの物を残す",
    body: "玄関先や共用の廊下に物を置いたままにすると、通行の妨げになるだけでなく、避難のさまたげにもなります。集合住宅では、共用部の使い方について定めがあることが多く、置いた物が撤去の対象になることもあります。屋外に出しておく物は、置いてよい場所かどうかを確認し、通り道をふさがない位置に決めてください。",
  },
  {
    title: "濡れたまま、汚れたままの物をしまい込む",
    body: "雨に濡れた傘や、泥の付いた靴をそのまま収納に入れると、においやカビの原因になります。乾かしてから戻す場所を決めておくと、においが残りにくくなります。下駄箱は閉め切ることが多いため、湿気がこもりやすい場所でもあります。掃除のあとは乾いた状態で戻す、時々扉を開けて風を通す、といった手入れも効果があります。",
  },
];

const judgeSigns = [
  "玄関だけでなく、廊下や部屋まで物であふれて通り道がない",
  "ベビーカーや家具など、自分では運び出せない物が置かれている",
  "実家や空き家の玄関で、量が多く自分たちだけでは手が回らない",
  "退去や引き渡しの期限があり、短期間で片付ける必要がある",
  "体調や体力の面で、しゃがむ・持ち上げる作業が難しい",
];

const faqs = [
  {
    q: "履いていないけれど状態のよい靴は、どうすればよいですか？",
    a: "状態がよく需要のある靴は、買取や譲渡の対象になることがあります。ただし、買取の可否や金額は品物の状態・種類・時期、各店の方針により異なります。中古品の売買には古物の取り扱いに関する許可が関わるため、買取を依頼する場合は許可を確認できる店を選びましょう。処分と分けてまとめておくと、判断を先に延ばしても混ざりません。",
  },
  {
    q: "靴や傘は何ごみとして出せばよいですか？",
    a: "分別の区分は素材や大きさによって分かれ、自治体によって異なります。同じ靴でも、素材によって扱いが変わることがあります。まとめて出す前に、お住まいの市区町村の分別案内で区分を確認してください。判断に迷う物は、窓口にまとめて問い合わせると一度で片が付きます。",
  },
  {
    q: "下駄箱が小さくて、どうしても入りきりません。",
    a: "収納を増やす前に、持っている数を見直す工程を済ませてください。それでも入らない場合は、季節で使う靴を別の場所に分けて保管する方法があります。ただし、玄関の外や共用の廊下に置く場合は、通行や避難のさまたげにならないか、置いてよい場所かを確認してください。集合住宅では管理規約の定めも確認が必要です。",
  },
  {
    q: "家族が玄関に物を置いてしまい、すぐ元に戻ります。",
    a: "置き場所が決まっていない物は、いちばん手前に置かれます。宅配の箱、資源として出す紙、外で使う道具など、置かれやすい物ごとに置き場と、出すタイミングを決めると流れが止まりません。家族に片付けを求めるより、置き場所を作って共有するほうが定着しやすい、という考え方で進めてみてください。",
  },
];

const related = [
  { href: "/katazuke-junban/", label: "片付けはどこから？", desc: "挫折しない順番と手順" },
  { href: "/oshiire-closet-seiri/", label: "押し入れ・クローゼットの整理", desc: "全部出すから戻すまで" },
  { href: "/irui-seiri/", label: "服の断捨離のコツ", desc: "仕分けの基準と処分方法" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "増やすほど片付かない理由" },
  { href: "/bousai-bichiku-katazuke/", label: "防災備蓄と片付けの両立", desc: "避難経路と置き場所のつくり方" },
  { href: "/katazuke-rebound-boushi/", label: "片付けのリバウンド防止", desc: "散らからない状態を保つ仕組み" },
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
    { "@type": "ListItem", position: 2, name: "玄関・下駄箱の片付け" },
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
    { href: "#kiso", label: "1｜玄関が散らかるのは「通過点」だから" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜靴と外まわり用品を減らすときの考え方" },
    { href: "#steps", label: "4｜玄関・下駄箱を片付ける5ステップ" },
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

      <Breadcrumb items={[{ label: "玄関・下駄箱の片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          玄関・下駄箱の片付け｜靴と外まわり用品を減らす基準と手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月2日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          下駄箱に入りきらない靴が三和土（たたき）に並んでいる。何年も使っていない傘が傘立てにささったままになっている。玄関は家の中でいちばん面積の小さい場所のひとつですが、外から持ち込む物が集まるため、気を抜くとすぐに足の踏み場が狭くなります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、玄関が散らかる仕組み、靴を減らすときの判断基準、下駄箱の中身を見直す手順、傘やベビーカーのような大きい物の扱い、そして家族で使う玄関を散らからない状態に保つルールづくりまでを順に解説します。玄関は短時間で目に見える変化が出るため、片付けの最初の一歩としても向いている場所です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>玄関が散らかるのは、外から持ち込む物の「一時置き場」になっているから</li>
          <li>靴は「まだ履けるか」ではなく「この一年で履いたか」で判断すると迷いが減る</li>
          <li>下駄箱は全部出してから戻す。入る数を先に決めると、増え方が止まる</li>
          <li>傘・ベビーカーなど大きい物は、置き場所を決めて通り道をふさがない</li>
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

      <H2 id="kiso" num="1">玄関が散らかるのは「通過点」だから</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        玄関の散らかりは、物の量より流れの問題です。仕組みを押さえると、対処の順番が決まります。
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
        所要時間、判断の基準、そして戻す場所。この三つを先に決めておくと、途中で止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">靴と外まわり用品を減らすときの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        靴を手放す判断でつまずく理由は、「傷んでいないから捨てられない」という点にあります。しかし、玄関の収納には限りがあるため、判断の軸を状態ではなく使用頻度に置き換えたほうが前に進みます。この一年で履いていない靴は、来年も履かない可能性が高い、という考え方です。冠婚葬祭用や特定の季節にしか使わない靴は例外として残し、それ以外を頻度で見ていくと、残す数が自然に決まります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        傘、レインコート、外で使う道具、園芸用品なども同じ考え方で見直せます。傘は本数を家族の人数分＋予備という形で決めると、増え方が止まります。状態のよい靴やバッグは、買取や譲渡の対象になることもあるため、処分と分けておくと選択肢が残ります。買取との組み合わせは<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップの併用</Link>、衣類まわりの判断基準は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">服の断捨離のコツ</Link>が参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        処分する場合、靴や傘の分別区分は自治体によって異なります。素材ごとに区分が分かれていることもあるため、まとめて出す前にお住まいの市区町村の分別案内を確認してください。手放し方全体の選択肢は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>、ベビーカーのように大きい物の扱いは<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>で解説しています。玄関からどの順番で家全体に進めるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番ガイド</Link>でまとめています。
      </p>

      <H2 id="steps" num="4">玄関・下駄箱を片付ける5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部出す→分ける→戻す数を決める→大きい物の置き場を決める→家族と共有する。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">分別区分と、避難経路への配慮を確認しましょう</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          靴・傘・レインコートなどの分別区分や、粗大ごみの対象になるかどうかは、素材や大きさによって扱いが分かれ、自治体によって異なります。まとめて出す前に、お住まいの市区町村の分別案内をご確認ください。また、玄関や共用の廊下は、災害時の避難経路にあたる場所です。集合住宅では、共用廊下や階段に物を置くことについて管理規約や法令上の定めがある場合がありますので、置き場所を決める際は管理会社や管理組合にご確認ください。屋内でも、扉の開閉や人の通り道をふさぐ置き方は避けてください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        玄関が片付くと、家全体の片付けの入り口ができます。次に取りかかる場所として、動線でつながる廊下や、収納があふれている押し入れが挙げられます。押し入れの整理手順は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理手順</Link>、防災の備えと置き場所の関係は<Link href="/bousai-bichiku-katazuke/" className="text-primary underline underline-offset-2">防災備蓄と片付けの両立</Link>、片付いた状態を保つ工夫は<Link href="/katazuke-rebound-boushi/" className="text-primary underline underline-offset-2">片付けのリバウンド防止</Link>で解説しています。
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
        次のような状況では、自力での作業にこだわらず、片付け業者への相談を検討したほうが進みます。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        本記事は一般的な知識の提供を目的としたものです。靴・傘・レインコートなどの分別区分、粗大ごみの対象となるかどうか、出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。集合住宅の共用廊下・階段・玄関前への物の設置については、管理規約や法令上の定めがある場合がありますので、管理会社や管理組合にご確認ください。買取の可否・金額は品物の状態や時期、各店の方針により異なります。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
