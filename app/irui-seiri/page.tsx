import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/irui-seiri/";
const TITLE = "服の断捨離のコツ｜増えすぎた衣類を仕分ける基準と処分方法";
const DESC =
  "クローゼットに入り切らないほど増えた衣類を、後悔せずに手放すための仕分け基準と処分方法を解説します。「いつか着るかも」を卒業する判断軸、自力で進める5ステップ、リバウンドしやすいNG行動、自治体・売却・寄付といった処分先の使い分け、業者に相談すべきサインまでを初めての方向けに整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "衣類が減らないのは「判断の回数」が多すぎるから",
    body: "衣類は1枚1枚が小さく安価なぶん、気づかないうちに増えやすい持ち物の代表です。しかも1枚ごとに「着るか・着ないか」を判断する必要があるため、100枚あれば100回の意思決定が必要になります。片付けが進まないのは意志が弱いからではなく、判断の回数が多く疲れてしまう構造だからです。だからこそ、迷わず判断できる「基準」を先に決めることが衣類整理の最大のコツになります。",
  },
  {
    title: "使う基準は「この1年で着たか」「今また買うか」の2つで十分",
    body: "仕分け基準は複雑にするほど手が止まります。実用的なのは「この1年（1シーズン）で着たか」と「今お店で見かけたら、もう一度お金を出して買うか」の2つです。1年着なかった服は、次の1年も着ない可能性が高いと考えられます。「高かったから」「痩せたら着るから」という理由は、着るかどうかとは別の話として切り分けるのがポイントです。",
  },
  {
    title: "手放し方は「捨てる」だけではない",
    body: "衣類は、自治体のごみ収集や資源回収のほか、リサイクルショップやフリマアプリでの売却、店舗の衣類回収サービス、寄付など、手放すルートが比較的多い品目です。「捨てるのはもったいない」という気持ちが仕分けを止めているなら、「誰かに使ってもらうルートに乗せる」と考え方を変えるだけで、手放す心理的ハードルはぐっと下がります。ルートの詳細は本文で解説します。",
  },
];

const merits = [
  {
    title: "毎朝の服選びが速く、楽になる",
    body: "衣類整理の効果が最初に表れるのは収納ではなく毎日の時間です。選択肢が「着る服」だけに絞られると、朝の服選びの迷いが減り、持っているのに見つからないという探し物もなくなります。クローゼットに余白ができると衣類が畳みやすく戻しやすくなり、部屋に脱ぎっぱなしの服がたまる悪循環も断ち切りやすくなります。",
  },
  {
    title: "持っている服を把握でき、無駄な買い物が減る",
    body: "衣類が多すぎる状態では、自分が何を持っているか正確に把握できず、似た服を重複して買ってしまいがちです。総量が見渡せる量まで減ると、「同じような服がある」と買う前に気づけるようになり、結果として衣類が再び増えるスピードそのものが落ちます。整理は一度きりの作業ではなく、増えにくい仕組みづくりでもあります。",
  },
  {
    title: "カビ・湿気・虫食いのリスクが下がる",
    body: "衣類を詰め込んだクローゼットや押し入れは通気が悪く、湿気がこもってカビや虫食いの温床になりやすい場所です。量が減って空気の通り道ができるだけで、衣類の傷みは起こりにくくなります。すでにカビ臭さが気になる場合は、整理とあわせて収納内部の清掃も行いましょう。カビへの対処はカビが広がった部屋の清掃方法の記事で解説しています。",
  },
];

const steps = [
  {
    title: "全部出して総量を一度だけ直視する",
    body: "最初に、クローゼット・タンス・衣装ケースから衣類をすべて出し、1か所に集めます。分散したまま少しずつやると総量がわからず、判断基準もぶれるためです。山になった服を見て多さに驚くこと自体が、「なぜ減らすのか」を実感する大事なステップになります。時間がない場合は「トップスだけ」などカテゴリ単位で全部出す方式でも構いません。",
  },
  {
    title: "「今着ている服」を先に救出する",
    body: "山の中から、この1か月以内に実際に着た服・今のシーズンに確実に着る服を先に抜き出します。これが自分の「現役の服」であり、多くの人にとって想像以上に少ない枚数です。先に残す服を確定させると、残りの山は「現役ではない服」として見られるようになり、その後の判断が一気に楽になります。",
  },
  {
    title: "残りを「手放す・迷う」の2択で高速に仕分ける",
    body: "残った服を1枚ずつ手に取り、「この1年で着たか」「今また買うか」の基準で、手放す袋か迷い箱のどちらかに入れていきます。1枚あたり数秒を目安に、考え込みそうになったら迷い箱へ。迷い箱は1箱までと上限を決め、日付を書いて封をし、半年〜1年開けなかったら中身を見ずに手放す、というルールにすると保留が無限に増えるのを防げます。",
  },
  {
    title: "手放す服を状態でルート分けする",
    body: "手放すと決めた服は、「売れそうな物（状態がよい・ブランド品）」「まだ着られる物（寄付・回収サービス・譲渡）」「傷んだ物（自治体のごみ・資源回収）」の3つに分けます。衣類を資源として回収するか可燃ごみとするかは自治体により扱いが異なるため、お住まいの市区町村の公式サイトで確認してください。売却は手間と時間がかかるため、「売るのは10枚まで」など上限を決めると停滞しません。処分ルート全体の考え方は不用品の処分ルート比較の記事が参考になります。",
  },
  {
    title: "残す服だけを「掛ける収納」中心に戻す",
    body: "最後に、残した服をクローゼットへ戻します。畳む収納より掛ける収納のほうが出し入れと把握が楽なため、可能な範囲でハンガー掛けに寄せるのがおすすめです。ハンガーの本数を決めて「本数を超えたら1枚手放す」というルールにすると、総量が自動的に管理され、リバウンドを防げます。衣装ケースには季節外の服だけを入れ、中身をラベルで見えるようにしておきましょう。",
  },
];

const ngActions = [
  {
    title: "「痩せたら着る」「高かったから」で保留を増やす",
    body: "サイズが合わない服や高価だった服は、着ない期間が長くても手放しにくい代表格です。しかし着ていない事実は変わらず、保留が増えるほど収納は圧迫され、整理は進みません。どうしても迷う服は迷い箱に入れ、期限を決めて向き合いを先送りにする——つまり「保留にも締め切りを付ける」ことが現実的な対処です。",
  },
  {
    title: "全部売ろうとして作業が止まる",
    body: "フリマアプリでの売却は、撮影・出品・やり取り・梱包・発送と1枚ごとに手間がかかります。手放す服をすべて売ろうとすると、出品待ちの服の山が部屋に居座り、整理が数か月単位で停滞しがちです。売るのは価値の高い一部だけに絞り、残りはまとめて回収・寄付・処分に回すほうが、総合的には得になることが多いと考えましょう。",
  },
  {
    title: "家族の服を勝手に処分する",
    body: "自分の勢いのまま、家族の衣類まで無断で手放すのは典型的なトラブルのもとです。本人には本人の思い入れと判断基準があります。家族の服が多いと感じる場合も、処分するのではなく「自分の分を整理した結果」を見せて、やり方と効果を共有するところまでにとどめましょう。実家の衣類整理については実家の片付けの進め方の記事も参考になります。",
  },
  {
    title: "収納グッズを先に買い足す",
    body: "整理の前に衣装ケースや圧縮袋を買い足すのは、順序が逆です。収納が増えるとその分だけ服を持てるようになり、総量はむしろ増えます。まず手放して総量を減らし、残った服が今ある収納に収まるかを確認してから、必要な場合にだけ収納用品を検討してください。原則は「収納に合わせて服を減らす」です。",
  },
];

const judgeSigns = [
  "衣類が部屋やクローゼットからあふれ、床置きの山になっている",
  "衣類以外の物も多く、部屋全体の片付けとして手に負えない",
  "遺品・実家の衣類整理で、量が多すぎて自分たちでは進められない",
  "引っ越し・退去の期限までに衣類を含む家財を片付け切る必要がある",
  "カビ・虫食い・臭いが広がっており、清掃もあわせて必要",
];

const faqs = [
  {
    q: "服を捨てるか迷ったときの判断基準はありますか？",
    a: "「この1年で着たか」「今お店で見ても、もう一度買うか」の2つの質問が実用的です。両方ノーなら手放す候補と考えてよいでしょう。それでも迷う服は無理に決めず、迷い箱に入れて期限を書き、期限まで着なかったら手放すというルールにすると、後悔のリスクを抑えながら前に進めます。",
  },
  {
    q: "衣類はごみとして出せますか？資源回収とどちらですか？",
    a: "衣類の扱いは自治体によって異なり、資源（古布・古着）として回収する地域もあれば、可燃ごみとして出す地域、汚れや状態によって分ける地域もあります。出し方や回収日、雨天時の扱いなども地域差があるため、必ずお住まいの市区町村の公式サイトで確認してください。店舗の衣類回収サービスや寄付団体を利用する方法もあります。",
  },
  {
    q: "大量の衣類の処分を業者に頼むと費用はどのくらいですか？",
    a: "費用は衣類の量だけでなく、他の不用品の有無・間取り・搬出条件・仕分け作業の範囲によって大きく異なるため、一律にいくらとは言えません。複数社から見積もりを取り、作業範囲と内訳を比較して判断するのが確実です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
  {
    q: "思い出のある服はどう扱えばよいですか？",
    a: "制服や記念の衣装など、着ることはなくても手放しにくい服は、無理に処分する必要はありません。「思い出の服は箱1つまで」と量の上限を決めて残すのが現実的です。写真に撮ってから手放す方法も、思い出を残しつつ物を減らす手段としてよく使われます。判断に時間がかかるため、仕分けの最初ではなく最後に回しましょう。",
  },
];

const related = [
  { href: "/katazuke-junban/", label: "部屋を片付ける順番", desc: "どこから手を付ければ挫折しないか" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・譲渡・回収業者の使い分け" },
  { href: "/oheya-checklist/", label: "汚部屋レベルチェック", desc: "散らかり度合いの客観的な判定" },
  { href: "/katazukerarenai-shinri/", label: "片付けられない心理と対処", desc: "片付けが続かない要因への向き合い方" },
  { href: "/guide/self-cleanup/", label: "自力で片付ける方法", desc: "部屋全体を自分で片付ける手順" },
  { href: "/service/katazuke-daikou/", label: "片付け代行サービスの選び方", desc: "仕分けから任せられるサービスの比較" },
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
    { "@type": "ListItem", position: 2, name: "服の断捨離のコツ" },
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
    { href: "#kiso", label: "1｜衣類が減らない理由と仕分けの基本" },
    { href: "#merit", label: "2｜衣類を減らすと起こる3つの変化" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める衣類整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "服の断捨離のコツ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          服の断捨離のコツ｜増えすぎた衣類を仕分ける基準と処分方法
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「クローゼットはぱんぱんなのに、着る服がない」「捨てようと広げたものの、結局ほとんど戻してしまった」——衣類の整理は、多くの人が一度は挫折する片付けの定番テーマです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、衣類が減らない構造的な理由から、迷わず仕分けるための基準、自力で進める5つのステップ、リバウンドを招くNG行動、手放した服の処分先の使い分けまでを解説します。読み終えたら、まずクローゼットの一段からで構いません。手を動かせる状態を目指します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>仕分け基準は「この1年で着たか」「今また買うか」の2つだけ。基準を先に決めると判断疲れを防げる</li>
          <li>全部出して総量を直視し、「現役の服」を先に救出すると残りの判断が一気に楽になる</li>
          <li>迷う服は迷い箱1箱まで。期限を書いて、期限まで着なかったら手放す</li>
          <li>手放す服は売却・寄付・自治体回収でルート分けし、全部売ろうとしない。衣類の出し方は自治体により異なるため公式サイトで確認する</li>
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

      <H2 id="kiso" num="1">衣類が減らない理由と仕分けの基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜ衣類の整理はこれほど挫折しやすいのかを構造から理解しておきましょう。理由がわかると、精神論に頼らない現実的な進め方が見えてきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">衣類を減らすと起こる3つの変化</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        衣類整理の効果は、収納がすっきりするだけではありません。日々の時間・お金・住環境に表れる変化を知っておくと、途中で挫折しそうなときのモチベーションになります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        衣類整理の大原則は、「基準を先に決め、全部出して、残す服から確定させる」ことです。1枚ずつ「捨てられるか」と問いかける方式は判断疲れで必ず失速します。「残す服を選び、残りは手放す」という順番に変えるだけで、同じ作業がずっと楽になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、衣類は部屋全体の片付けの中でも「最初に取り組むと効果を実感しやすい」カテゴリです。食品や書類と違って判断基準が単純で、減った変化が目に見えやすいためです。部屋全体をどの順番で片付けるかは<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋を片付ける順番</Link>の記事で解説しています。
      </p>

      <H2 id="steps" num="4">自力で進める衣類整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「全部出す、現役を先に救出、迷いには締め切り」の3点です。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放す服のルート選びは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で、自治体の回収の使い方は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用ガイド</Link>で詳しく解説しています。衣類の分別区分・出し方は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「わかっているのに手が動かない」と感じる場合は、意志の問題ではなく心理的・環境的な要因が関わっていることもあります。<Link href="/katazukerarenai-shinri/" className="text-primary underline underline-offset-2">片付けられない心理と対処</Link>の記事もあわせて読んでみてください。
      </p>

      <H2 id="gyousha" num="6">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        衣類だけなら自力で完結できる人がほとんどですが、次のような状況では、片付け業者・不用品回収業者に部屋ごと相談するほうが現実的です。<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者おすすめ</Link>などエリア別の比較記事から、対応地域の業者を探せます。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
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
        本記事は一般的な知識の提供を目的としたものです。衣類の分別区分・出し方・回収日は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。業者に依頼する場合の費用は物量・作業範囲により異なるため、複数社の見積もり比較をおすすめします。
      </p>
    </article>
  );
}
