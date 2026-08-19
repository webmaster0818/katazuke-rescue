import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shingu-shobun/";
const TITLE = "枕・毛布・シーツの処分方法｜布団以外の寝具を手放す手順";
const DESC =
  "枕、毛布、タオルケット、シーツや布団カバー、敷きパッド、電気毛布——布団本体やマットレス以外の寝具は「捨て時が分からない」まま押し入れにたまりがちです。この記事では寝具が増える理由と見直しの目安、枕の中材や毛布の素材による分別の考え方、電気毛布など電気製品扱いになる寝具の注意点、リユース・ウエス活用・粗大ごみの判断まで、布団以外の寝具を無理なく手放す手順を解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "寝具は「増える理由」がそろっている",
    body: "枕や毛布、シーツ類は、暮らしのなかで自然に増えていく物の代表です。来客用に一式そろえた、季節ごとに薄手と厚手を買い足した、寝心地が合わずに買い替えたが前の物も残してある、家族の人数が変わっても数はそのまま——こうした事情が重なり、押し入れの上段が寝具で埋まっていきます。しかも寝具は毎日使っていても劣化が緩やかで、いつが替え時なのかが分かりにくい物です。増える入り口は多いのに出口がない状態が続くと、収納の圧迫だけでなく、湿気やにおいの温床にもなります。",
  },
  {
    title: "見直しの目安は「へたり・におい・汚れ・使っていない年数」",
    body: "手放すかどうかを迷ったときは、状態と使用実績の二つで見ます。状態の目安は、枕なら中材が偏って高さが出ない・押しても戻らない、毛布なら毛玉や毛抜けが目立つ・洗っても洗剤以外のにおいが残る、シーツ類なら黄ばみや薄くなった生地・ほつれや破れです。使用実績の目安は「この一年で実際に使ったか」。来客用として取ってあるが二年以上出していない寝具は、必要な機会に借りる・買い直すほうが収納の負担が小さい場合もあります。基準を先に決めておくと、一枚ずつ迷わずに判断できます。",
  },
  {
    title: "布団本体・マットレスとは切り離して考える",
    body: "同じ寝具でも、布団本体やマットレスはサイズと重量が大きく、搬出や粗大ごみの手配が別問題になります。一方で枕・毛布・シーツ・パッド類は、軽くて一人でも扱えるぶん判断も処分も進めやすく、先に手を付けると押し入れの空きが目に見えて増えます。まずは布団以外の寝具から片付け、布団本体やマットレスは搬出計画を立てて別枠で進めるのが現実的です。この記事では布団以外の寝具に絞って、種類ごとの考え方と手順を整理します。",
  },
];

const merits = [
  {
    title: "考え方1：枕は「中材」で扱いが変わる",
    body: "枕は見た目が似ていても、中に入っている素材によって自治体の区分が変わることがあります。そば殻、パイプやビーズ、ウレタン、ポリエステルわた、羽根・羽毛など、中材の種類はさまざまです。可燃ごみとして扱う自治体もあれば、素材によって区分が分かれる自治体もあり、サイズが大きい抱き枕や特大クッションは粗大ごみの基準に触れることもあります。中材はタグや品質表示に記載されていることが多いので、まず確認し、そのうえで自治体の分別案内で「枕」「クッション」といった品目名を検索してください。",
  },
  {
    title: "考え方2：毛布は素材で分かれる場合がある",
    body: "毛布はアクリルやポリエステルなどの化学繊維と、ウール・綿・カシミヤなどの天然素材で、自治体の扱いが異なる場合があります。可燃ごみとして出せる地域が多い一方、枚数や大きさによっては指定袋に入らず粗大ごみ扱いになることもあります。タオルケットや肌掛け、毛布とパッドが一体になった製品も同様で、複合素材の物は判断が難しくなります。品質表示のタグで素材を確認したうえで、必ずお住まいの自治体の分別案内で品目名を検索し、迷う場合は窓口に問い合わせるのが確実です。",
  },
  {
    title: "考え方3：状態のよい寝具はリユースの可能性がある",
    body: "未使用や未開封の枕・毛布、洗濯済みで傷みのないシーツやカバー類は、フリマアプリでの出品や知人への譲渡、団体への寄付といった選択肢があります。特に有名メーカーの羽毛枕やブランドの寝具カバーは需要が見込めることもあります。ただし寝具は衛生面の懸念から受け入れ条件が厳しく、使用済みは不可、未開封のみ、季節限定で受付、といった制限があるのが一般的です。持ち込む前に必ず受け入れ条件を確認し、条件に合わない物は無理に押し付けず、通常の処分ルートに回しましょう。",
  },
];

const steps = [
  {
    title: "押し入れとクローゼットから寝具を全部出す",
    body: "最初に、家じゅうの寝具を一か所に出して総量を把握します。押し入れの上段、クローゼットの枕棚、ベッド下の引き出し、圧縮袋にまとめてある物まで、しまい込まれている寝具をすべて対象にします。出す作業は場所を取るので、床の広い部屋を作業台にして、シーツ類・毛布類・枕とクッション・パッドとシート類のように大きく四つに分けて積み上げていきます。この段階では捨てる判断をせず、数を数えて「何がどれだけあるか」を見えるようにすることに集中してください。",
  },
  {
    title: "状態とにおい・カビをその場で確認する",
    body: "出した寝具は、明るい場所で広げて状態を確認します。長く圧縮袋に入れていた物は、湿気を含んだまま保管されてカビ臭やしみが出ていることがあります。黒い点状のしみ、押し入れの奥にあった物特有のこもったにおい、生地の変色は要注意です。においやカビが疑われる物は、そのまま残しても結局使われないことが多いので、手放し候補に入れます。押し入れそのものにカビが出ている場合は、寝具を戻す前に収納側の対処が必要です。",
  },
  {
    title: "残す・売る・使い切る・処分するの四つに分ける",
    body: "確認が終わったら、寝具を四つの行き先に振り分けます。残す物は「今の家族構成で今シーズン使う物」に限定し、来客用は具体的に何組必要かを決めます。未使用・きれいな物は売却や譲渡の候補へ。古いシーツやタオルケットは切ってウエス（掃除用の布）として使い切る候補へ。それ以外は処分です。四つに分けたら、残す以外の山を元の収納に戻さないことが重要で、いったん戻すと判断がやり直しになってしまいます。",
  },
  {
    title: "品目ごとに自治体の区分を調べ、必要なら粗大ごみを申し込む",
    body: "処分すると決めた寝具は、品目ごとに自治体の分別案内で区分を調べます。「枕」「毛布」「クッション」「敷きパッド」「すのこ」など、製品名ではなく一般的な品目名で検索するのがコツです。指定袋に入るかどうか、切って小さくすれば通常のごみとして出せるかどうかは自治体によって判断が分かれるため、自己判断で切断せず案内を確認してください。粗大ごみに該当する物が出た場合は、収集日と受付の締切に余裕を持って申し込みます。",
  },
  {
    title: "残す寝具を乾かして、定位置を決めて戻す",
    body: "最後に、残すと決めた寝具を収納に戻します。戻す前に風を通し、可能な物は洗濯して完全に乾かすことが、次に出したときのにおいとカビを防ぐ一番の対策です。収納は「季節ごと」「使う人ごと」のどちらかに軸をそろえ、使用頻度の低い来客用を上段の奥、毎シーズン使う物を手前に置きます。枚数の上限を決めておくと、次に買い足したときに古い物を出す判断がしやすくなります。空いたスペースにほかの物を詰め込まないことも、リバウンドを防ぐポイントです。",
  },
];

const ngActions = [
  {
    title: "電気毛布・電気あんかを布団類と同じ袋に入れてしまう",
    body: "電気毛布、電気あんか、電気ひざ掛け、温水式のマットなどは、見た目が寝具でも内部に電熱線やコード、コントローラーを持つ電気製品です。自治体によっては小型家電の回収対象や、金属を含むごみとして布団類とは別の区分になっていることがあります。布のかたまりだからと毛布と一緒に出すと、収集されずに残されたり、処理施設で支障が出たりする原因になります。電気製品が付いた寝具は必ず「電気毛布」など製品名で分別案内を調べ、区分が分からないときは自治体の窓口に確認してください。",
  },
  {
    title: "確認せずに切って小さくする",
    body: "大きな毛布やパッドを「指定袋に入れば出せるはず」と考えて切り刻むのは、必ずしも正解ではありません。切って小さくすれば通常のごみとして扱う自治体もありますが、サイズにかかわらず品目で区分が決まっている自治体や、切断を推奨していない自治体もあります。判断を誤ると、切ったせいで売却も譲渡もできなくなり、結局出せずに部屋に残ることになります。手を入れる前に分別案内を読み、それでも判断がつかないときは問い合わせてからにしましょう。",
  },
  {
    title: "「まだ使える」と来客用を無制限に取っておく",
    body: "来客用の寝具は、手放しづらい物の代表です。ただ、何年も出していない寝具は湿気を吸ってにおいやカビが出ていることが多く、いざというときにそのまま出せないことも少なくありません。必要な組数を具体的に決め、それを超える分は状態のよいうちに手放すほうが、収納にも衛生面にも無理がありません。急な来客が年に一度あるかどうかという頻度なら、寝具一式を常備する以外の対応も含めて考えてみてください。",
  },
  {
    title: "湿ったまま圧縮袋に入れて長期保管する",
    body: "圧縮袋は場所を取らずに保管できる便利な道具ですが、乾ききっていない寝具を入れて長期間放置すると、袋の中で湿気がこもりカビやにおいの原因になります。特に夏を越す保管や、押し入れの下段・壁際など湿気がたまりやすい場所は注意が必要です。しまう前に晴れた日に干して完全に乾かし、除湿剤を併用し、年に一度は袋を開けて状態を確認する。この三つを習慣にするだけで、次に開けたときに「使えないから捨てる」という結末を避けられます。",
  },
];

const judgeSigns = [
  "寝具のほかにも不用品が多く、自力での仕分け・搬出が追いつかない",
  "布団本体やマットレスも同時に処分したいが、運び出しが難しい",
  "引っ越しや退去の期限までに寝具をまとめて処分したい",
  "実家や物置に来客用の寝具が大量にたまっていて手が付けられない",
  "カビやにおいがひどく、寝具と一緒に収納側の清掃も必要な状態",
];

const faqs = [
  {
    q: "枕は何ごみとして出せばよいですか？",
    a: "自治体により異なります。中に入っている素材によって扱いが分かれることがあり、そば殻、パイプ、ウレタン、羽根などで区分が変わる地域もあります。まず品質表示のタグで中材を確認し、お住まいの自治体の分別案内で「枕」を検索してください。抱き枕や特大サイズのクッションは大きさによって粗大ごみの基準に該当する場合があるため、寸法も確認しておくと手続きがスムーズです。",
  },
  {
    q: "毛布とタオルケットは同じ扱いですか？",
    a: "同じ扱いの自治体もあれば、素材やサイズで分かれる自治体もあります。アクリルなどの化学繊維とウールなどの天然素材で区分が異なる場合や、指定袋に入らない大きさだと別の手続きが必要になる場合があります。いずれも品質表示で素材を確認したうえで、自治体の分別案内で「毛布」「タオルケット」をそれぞれ検索するのが確実です。判断に迷うときは自治体の窓口に問い合わせてください。",
  },
  {
    q: "古いシーツやタオルケットの使い道はありますか？",
    a: "掃除用の布、いわゆるウエスとして使い切る方法があります。汚れの目立つ部分を避けて、手のひらに収まる程度の大きさに切り分けておくと、換気扇まわりの油汚れ、窓のさん、洗面台の水はねなど、洗って再利用しづらい場所の掃除に使えて、使い終わったらそのまま処分できます。片付けや大掃除の前にまとめて用意しておくと、雑巾を買い足さずに済みます。切った布の処分区分は自治体の案内で確認してください。",
  },
  {
    q: "電気毛布は寝具として出せますか？",
    a: "電気毛布や電気あんかは、布でできていても電熱線やコード、コントローラーを含む電気製品です。自治体によって小型家電の回収対象になっていたり、毛布とは別の区分が指定されていたりするため、寝具と同じ扱いにはならないことがあります。必ず「電気毛布」「電気あんか」といった製品名で分別案内を検索し、記載が見つからない場合は自治体の窓口に問い合わせて指示に従ってください。",
  },
];

const related = [
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分", desc: "大型寝具の搬出と処分の進め方" },
  { href: "/koromogae-shunou-shikumika/", label: "衣替えの収納仕組み化", desc: "季節の入れ替えを楽にする収納" },
  { href: "/irui-seiri/", label: "衣類の整理・処分", desc: "増えすぎた布物を手放す基準" },
  { href: "/carpet-curtain-shobun/", label: "カーペット・カーテンの処分", desc: "大きな布製品の分別と出し方" },
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいゴミ", desc: "区分に迷う品目の調べ方" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "受付から収集当日までの手順" },
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
    { "@type": "ListItem", position: 2, name: "枕・毛布・シーツの処分方法" },
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
    { href: "#kiso", label: "1｜布団以外の寝具がたまる理由と見直しの目安" },
    { href: "#merit", label: "2｜素材別に考える3つのポイント" },
    { href: "#houshin", label: "3｜寝具の見直しをいつやるかの方針" },
    { href: "#steps", label: "4｜寝具を手放す5ステップ" },
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

      <Breadcrumb items={[{ label: "枕・毛布・シーツの処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          枕・毛布・シーツの処分方法｜布団以外の寝具を手放す手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れの上段を開けると、来客用の毛布、へたった枕、いつ使ったか思い出せないシーツ、圧縮袋に入れたままの肌掛け——布団本体ほど場所は取らないのに、気づけば寝具が収納の大半を占めている。そんな状態に心当たりはないでしょうか。枕や毛布、シーツ類は「まだ使える」と思うと手放す理由が見つかりにくく、捨て時が分からないまま増え続けやすい物です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、布団本体とマットレスを除いた寝具に絞って、増える理由と見直しの目安、枕の中材や毛布の素材による分別の考え方、電気毛布のように電気製品として扱われる寝具の注意点、リユースやウエス活用まで、無理なく手放すための手順を整理します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>判断の目安は「へたり・におい・汚れ・この一年で使ったか」の四つ</li>
          <li>枕は中材、毛布は素材で自治体の区分が変わることがある。品目名で分別案内を検索する</li>
          <li>電気毛布・電気あんかは電気製品として寝具とは別区分になる場合があるので要確認</li>
          <li>未使用や状態のよい物はリユース、古いシーツ類はウエスにして使い切る選択肢もある</li>
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

      <H2 id="kiso" num="1">布団以外の寝具がたまる理由と見直しの目安</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        枕、抱き枕、クッション、毛布、タオルケット、肌掛け、シーツや布団カバー、枕カバー、ベッドパッド、敷きパッド、除湿シート、すのこ。布団本体とマットレスを除いても、寝具の種類はこれだけあります。まずはなぜたまるのか、どこで替え時と判断するのかを押さえましょう。なお布団本体やマットレスの処分は搬出の負担が大きく別の段取りになるため、<Link href="/futon-mattress-shobun/" className="text-primary underline underline-offset-2">布団・マットレスの処分</Link>の記事を参照してください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">素材別に考える3つのポイント</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        寝具の処分でつまずきやすいのが「これは何ごみなのか」という点です。同じ枕でも中材によって、同じ毛布でも素材によって扱いが変わることがあり、全国共通のルールはありません。ここでは判断の土台になる考え方を三つ挙げますが、最終的には必ずお住まいの自治体の分別案内で品目名を検索して確認してください。分別に迷う品目が多い場合は、分別が難しいゴミの記事も参考になります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">寝具の見直しをいつやるかの方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        寝具の見直しは、思い立った日にやろうとすると全部出すだけで一日が終わりかねません。おすすめは、もともと寝具を出し入れするタイミングに合わせることです。季節の入れ替えで押し入れを開ける日、引っ越しや退去で荷物をまとめる日、来客の予定が終わって片付ける日。どれも寝具を手に取る機会なので、そこに「戻す前に一度判断する」という工程を足すだけで済みます。季節ごとの入れ替えを負担なく回す収納の作り方は<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの収納仕組み化</Link>で解説しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        もうひとつの方針は、においやカビの兆候を「後回しにしない」ことです。圧縮袋から出した寝具にこもったにおいがある、押し入れの奥にしみが見える、といった状態は、寝具を入れ替えても収納側が原因なら再発します。カビへの対処は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビの掃除</Link>、部屋にこもったにおいへの対処は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭</Link>の記事にまとめています。寝具を戻すのは、収納側の状態を整えてからにしましょう。
      </p>

      <H2 id="steps" num="4">寝具を手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        進め方は、全部出す→状態を確認する→行き先を四つに分ける→区分を調べて出す→残す物を乾かして戻す、の5ステップです。大きい物が粗大ごみに該当した場合の手続きは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>を確認してください。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        枕やシーツ類だけなら自力で進められる作業ですが、次のような状況では片付け・不用品回収業者の力を借りるのが現実的です。対応できる業者は<Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で料金・口コミを比較して選ぶ方法が便利です。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。寝具の分別区分・粗大ごみの基準・手数料は自治体により異なり、同じ品目でも素材やサイズで扱いが変わる場合があるため、必ずお住まいの自治体の案内をご確認ください。電気毛布など電気製品を含む寝具の区分も自治体ごとに異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
