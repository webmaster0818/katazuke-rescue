import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/jitensha-bike-shobun/";
const TITLE = "自転車・バイクの処分方法｜防犯登録・廃車手続きの一般論と手放すルート";
const DESC =
  "乗らなくなった自転車・バイクは、そのまま捨てられない事情のある品目です。自転車の防犯登録の抹消という手続きの一般的な考え方、バイクの廃車手続き（税・登録関係）の枠組み、自治体の粗大ごみ・売却/譲渡・販売店引き取り・二輪車リサイクルシステムといった手放すルートの使い分け、放置や無許可回収業者に渡すことのリスクまでを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "自転車には「防犯登録」があり、手放す前に抹消の手続きをするのが基本",
    body: "自転車には防犯登録の制度があり、購入時に登録した情報（所有者と車体）が都道府県ごとの仕組みで管理されています。処分や譲渡で自転車を手放すときは、この登録を抹消する手続きを行うのが基本とされています。抹消をしないまま手放すと、登録上は自分の自転車のまま他人の手に渡ることになり、放置自転車として発見された際に連絡が来るなど、思わぬ形で関わりが続く可能性があります。抹消手続きの窓口や必要な物（身分証明書・登録カードなど）は都道府県により異なるため、自転車防犯登録の案内（登録時の販売店や各都道府県の自転車防犯登録の窓口）で確認してください。",
  },
  {
    title: "バイクは「廃車手続き」という登録・税関係の手続きが必要",
    body: "原付やバイクは、ナンバープレートの返納を含む廃車手続きという枠組みがあります。排気量によって手続きの窓口が異なり、原付など小さい区分は市区町村、それ以上の区分は運輸支局などが窓口になる、というのが一般的な整理です。手続きをしないまま車体だけ手放すと、軽自動車税などの課税上の関係が残る場合があるとされています。必要書類や手順は排気量・地域により異なるため、お住まいの市区町村や管轄窓口の案内で確認してください。本記事では制度の枠組みの紹介にとどめ、個別の手続きの詳細は公的な案内を優先してください。",
  },
  {
    title: "「乗らないままの放置」が一番もったいなく、リスクもある",
    body: "自転車もバイクも、屋外に置いたまま放置すると雨ざらしでさびが進み、売却できたはずの物も値が付かなくなっていきます。集合住宅の駐輪場に放置された自転車は管理上の問題になり、公共の場への放置は撤去の対象です。ましてや、処分が面倒だからと道端や空き地に置いてくるのは不法投棄であり、絶対にしてはいけません。「まだ乗るかもしれない」と数年置いたままの1台があるなら、この機会に手放すかどうかを決めましょう。動くうちに手放すことが、経済的にもいちばん合理的です。",
  },
];

const merits = [
  {
    title: "ルート1：自治体の粗大ごみ収集（自転車の基本ルート）",
    body: "壊れた自転車や値の付かない自転車は、自治体の粗大ごみとして処分するのが基本ルートです。申し込み・手数料納付・指定日に出す、という一般的な流れは他の粗大ごみと同じですが、出す前に防犯登録の抹消を済ませておくことと、施錠せずに出すなどの指示に従うことがポイントです。電動アシスト自転車は、バッテリーを別扱い（リサイクル協力店での回収など）とする案内が一般的なので、本体と分けて確認しましょう。一方、バイクは粗大ごみでは収集しないとする自治体が多く、後述の専用ルートを使います。",
  },
  {
    title: "ルート2：売却・譲渡・販売店の引き取り",
    body: "まだ乗れる自転車・バイクは、売却や譲渡の価値があります。自転車はリサイクルショップやフリマアプリ、スポーツバイクなら専門の買取店という選択肢があり、バイクはバイク買取店での査定が一般的です。譲渡・売却の際は、自転車なら防犯登録の抹消（および新所有者の再登録）、バイクなら名義変更や廃車手続きといった登録関係の整理を怠らないことが重要です。手続きを省いた「車体だけの受け渡し」は、後々のトラブルのもとになります。買い替えの場合は、購入店の引き取りサービスの有無も確認しましょう。",
  },
  {
    title: "ルート3：二輪車リサイクルシステム・不用品回収業者",
    body: "バイクには、国内のバイクメーカー等が参加する二輪車リサイクルシステムという廃棄二輪車の引き取り・リサイクルの仕組みがあり、指定の窓口を通じて適正処理につなげられます。利用条件や引き取りの詳細は公式の案内で確認してください。また、実家の片付けや引っ越しなどで、自転車・バイク以外にも処分品が多い場合は、不用品回収業者にまとめて依頼する方法もあります。その場合も、防犯登録の抹消や廃車手続きは所有者自身で済ませておくのが原則です。業者選びでは許可・資格の確認を忘れずに。",
  },
];

const steps = [
  {
    title: "車体の状態と登録関係の書類を確認する",
    body: "まず、手放したい自転車・バイクの状態（動くか・さびの程度・年式）と、手元にある書類を確認します。自転車なら防犯登録カード（お客様控え）、バイクなら標識交付証明書や軽自動車届出済証などの登録関係書類が該当します。書類が見当たらない場合でも手続きできるのが一般的ですが、必要な物が増えることがあるため、窓口の案内を確認しましょう。状態の確認は、売却できるか処分するかの判断材料にもなります。タイヤの空気を入れて動作を見るだけでも、査定の土俵に乗るかどうかが分かります。",
  },
  {
    title: "防犯登録の抹消・廃車手続きを済ませる",
    body: "処分・譲渡の方針が決まったら、先に登録関係の手続きを済ませます。自転車の防犯登録の抹消は、都道府県ごとの案内に従って所定の窓口で行います。バイクの廃車手続きは、排気量に応じた窓口（市区町村・運輸支局など）で行い、ナンバープレートの返納を伴うのが一般的です。手続きの順序を先にするのは、車体を手放した後では確認や持ち込みが難しくなる場合があるからです。どの窓口で何が必要かは地域・排気量により異なるため、必ず公的な案内で確認してください。",
  },
  {
    title: "手放すルートを決めて手配する",
    body: "状態がよければ売却・譲渡、値が付かなければ自転車は自治体の粗大ごみ、バイクは二輪車リサイクルシステムや買取店・専門業者、という具合にルートを決めます。売却は査定→成約→引き渡しまで日数がかかることがあるため、引っ越しなどの期限がある場合は逆算して動きましょう。ほかにも処分品があるなら、不用品回収業者への一括依頼も選択肢です。処分ルート全体の考え方は不用品の処分ルートの使い分けの記事で整理しています。",
  },
  {
    title: "付属品・私物・個人情報を整理する",
    body: "引き渡しの前に、カゴの中の私物、サドル下の工具、チャイルドシート、バイクのシート下収納などを空にします。売却するなら、鍵（スペア含む）・取扱説明書・付属品を揃えると査定にプラスに働くことがあります。任意保険に入っている場合は、手放すことに伴う契約の扱い（解約・車両入替など）を保険会社に確認しましょう。バイクのETC車載器や盗難防止用品など、取り外して次に使える物は外しておきます。",
  },
  {
    title: "引き渡して完了。手続きの控えは保管しておく",
    body: "粗大ごみなら指定日に指定場所へ、売却・譲渡なら相手に引き渡して完了です。防犯登録の抹消控えや廃車手続きの書類は、手放した後の問い合わせに備えてしばらく保管しておくと安心です。譲渡の場合は、譲渡証明にあたるメモ（日付・相手・車体番号）を残しておくと、万一の際に経緯を説明できます。駐輪場や物置に空きができたら、そのスペースが再び「とりあえず置き場」にならないよう、使い方を決めておきましょう。ガレージ全体の整理は車庫・ガレージの片付けの記事が参考になります。",
  },
];

const ngActions = [
  {
    title: "防犯登録を抹消しないまま譲渡・処分する",
    body: "「知人にあげるだけだから」と防犯登録をそのままにして自転車を渡すのは避けましょう。登録上の所有者と実際の利用者が食い違った状態になり、相手が防犯登録の確認を受けた際に説明が難しくなったり、放置自転車として扱われた際に自分へ連絡が来たりと、双方にとって不便が生じます。譲渡時は自分の登録を抹消し、相手に新規登録してもらうのが基本の流れです。手続きの詳細は都道府県の自転車防犯登録の案内で確認してください。",
  },
  {
    title: "バイクの廃車手続きをせずに車体だけ手放す",
    body: "バイクを解体業者や知人に「車体だけ」渡して、ナンバープレートや登録の手続きを放置するのはNGです。登録が残ったままだと、課税上の関係が翌年度以降も続く場合があるとされ、車体の行方によっては思わぬトラブルに巻き込まれる可能性もあります。手放す前に、排気量に応じた窓口で廃車（または名義変更）の手続きを済ませ、書類の控えを保管しておきましょう。手続きの詳細は市区町村・管轄窓口の案内をご確認ください。",
  },
  {
    title: "路上・空き地・集積所への放置や無断投棄",
    body: "処分が面倒だからと、自転車を集積所の脇にこっそり置く、河川敷や空き地に放置するといった行為は不法投棄です。自転車は車体番号や防犯登録から所有者をたどれる場合があり、発覚すれば責任を問われます。また、マンションの駐輪場に乗らない自転車を何年も置き続けることも、管理組合や他の住民の迷惑になります。正規の処分ルートは手数料も手間も限られています。「ばれないだろう」の代償は大きすぎると心得てください。",
  },
  {
    title: "許可の確認できない回収業者に安易に渡す",
    body: "「無料で回収します」と巡回する業者に自転車やバイクを渡すのは慎重になるべきです。廃棄物の収集運搬には自治体の許可等が必要であり、許可の確認できない相手に渡した場合、不法投棄や不適正処理につながっても持ち主は経緯を説明できません。防犯登録が残ったままなら、なおさらリスクは大きくなります。回収を依頼するなら、許可・資格を明示する業者を選び、見積もりと引き取りの記録を残しましょう。無料をうたう回収の一般的な注意点は無料回収の注意点の記事で解説しています。",
  },
];

const judgeSigns = [
  "実家の片付けや引っ越しで、自転車・バイク以外にも処分品が多数ある",
  "さびついた自転車が複数台あり、自力で運び出すのが難しい",
  "故人の自転車・バイクの扱いに困っている（登録関係の確認も必要）",
  "マンションの上層階や奥まった物置からの搬出に人手が要る",
  "期限が迫っていて、売却や自治体収集を待つ時間がない",
];

const faqs = [
  {
    q: "防犯登録の抹消はどこでできますか？",
    a: "自転車の防犯登録は都道府県ごとの仕組みで運用されており、抹消の窓口や必要な物も地域により異なります。一般的には、自転車販売店のうち防犯登録を扱う店舗や、都道府県の自転車防犯登録団体が案内する窓口で手続きします。本人確認書類や防犯登録カード、車体の情報が求められるのが一般的です。正確な手続きは、お住まいの都道府県の自転車防犯登録の案内で確認してください。",
  },
  {
    q: "壊れた自転車はどう処分すればよいですか？",
    a: "値が付かない自転車は、自治体の粗大ごみとして処分するのが基本です。申し込みの流れは他の粗大ごみと同様ですが、出す前に防犯登録の抹消を済ませておきましょう。電動アシスト自転車のバッテリーは別扱いとする案内が一般的なので、本体と分けて自治体やリサイクル協力店の案内を確認してください。申し込みの一般的な流れは粗大ごみ申し込みの流れの記事で解説しています。",
  },
  {
    q: "バイクは自治体の粗大ごみで出せますか？",
    a: "バイク（原付を含む）は粗大ごみでは収集しないとする自治体が多く、専用のルートを使うのが一般的です。選択肢としては、バイク買取店での売却、購入店への相談、二輪車リサイクルシステムの利用などがあります。いずれの場合も、ナンバープレートの返納を含む廃車手続きを所有者自身で行うことが前提です。手続きの窓口は排気量により異なるため、市区町村・管轄窓口の案内で確認してください。",
  },
  {
    q: "故人の自転車・バイクを処分したい場合はどうすればよいですか？",
    a: "故人名義の防犯登録や車両登録が残っている場合、手続きに必要な書類が通常と異なることがあります。自転車は防犯登録の窓口に、バイクは市区町村・管轄窓口に、相続人が手続きする場合の必要書類を確認してください。遺品整理全体の中で扱う場合は、登録関係の書類（標識交付証明書など）を捨てずに探し出しておくことが大切です。遺品整理の進め方は遺品整理を自分で進める方法の記事で解説しています。",
  },
];

const related = [
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "タイヤ・工具などカー用品の整理" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "自治体収集の一般的な手順" },
  { href: "/carpet-curtain-shobun/", label: "カーペット・カーテンの処分", desc: "サイズ・素材別の手放し方" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収の注意点", desc: "無許可回収の一般的なリスク" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "買取サービスの併用", desc: "売れる物は売って負担を減らす" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "処分方法の選び方を詳しく" },
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
    { "@type": "ListItem", position: 2, name: "自転車・バイクの処分方法" },
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
    { href: "#kiso", label: "1｜自転車・バイク処分の基礎知識" },
    { href: "#merit", label: "2｜手放すルートの使い分け" },
    { href: "#houshin", label: "3｜処分計画の全体方針" },
    { href: "#steps", label: "4｜処分の進め方5ステップ" },
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

      <Breadcrumb items={[{ label: "自転車・バイクの処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          自転車・バイクの処分方法｜防犯登録・廃車手続きの一般論と手放すルート
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          乗らなくなった自転車が駐輪場でさびていく、バイクをガレージに置いたまま何年も経った——自転車・バイクは「捨て方が分からない物」の代表格です。普通のごみと違い、防犯登録や車両の登録という手続きが関わるため、車体だけ手放せば終わり、とはいかないからです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、自転車の防犯登録の抹消とバイクの廃車手続きという2つの手続きの一般的な枠組みを押さえたうえで、自治体の粗大ごみ・売却/譲渡・二輪車リサイクルシステム・業者回収というルートの使い分けと、放置・無断投棄・無許可業者のリスクを解説します。手続きの詳細は地域・排気量により異なるため、必ず公的な案内での確認を前提にお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>自転車は手放す前に防犯登録の抹消を。窓口・必要書類は都道府県の案内で確認</li>
          <li>バイクはナンバー返納を含む廃車手続きが前提。窓口は排気量・地域により異なる</li>
          <li>壊れた自転車は自治体の粗大ごみ、バイクは買取店・二輪車リサイクルシステム等の専用ルート</li>
          <li>放置・投棄・無許可業者への引き渡しはNG。動くうちに手放すのが最も合理的</li>
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

      <H2 id="kiso" num="1">自転車・バイク処分の基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、この品目ならではの「登録」というハードルを理解しましょう。ここを飛ばすと、後からトラブルになります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">手放すルートの使い分け</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        登録関係の手続きを前提に、車体を手放すルートは大きく3系統に分けられます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">処分計画の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        方針の柱は「手続きが先、車体が後」です。防犯登録の抹消や廃車手続きは、車体が手元にあるうちに済ませるのが原則で、この順序を守るだけで処分後のトラブルの多くを防げます。次に「動くうちに決断する」こと。売却できる状態の物を放置してさびさせるのは、価値を自ら手放しているのと同じです。乗らなくなって1年を超えた車体は、再び乗る具体的な予定がなければ手放しを検討するタイミングと考えましょう。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自転車・バイクはガレージや物置の「置きっぱなし重量物」の代表でもあります。ガレージ全体の整理と合わせて進めるなら<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">車庫・ガレージの片付け</Link>を、売却の進め方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップ・買取の併用</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">処分の進め方5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、確認→手続き→ルート決定→整理→引き渡しの5ステップです。
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
        次のような状況では、不用品回収業者への依頼も選択肢になります。ただし登録関係の手続きは所有者自身で行うのが原則です。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。ほかの不用品とまとめて依頼するなら、<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>の一括見積もりや<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>での比較が便利です。買取対応の業者なら、動く車体は査定してもらえる場合もあります。
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
        本記事は一般的な知識の提供を目的としたものです。自転車の防犯登録・バイクの廃車手続きの窓口・必要書類・手順は、都道府県・市区町村・排気量により異なります。必ず各都道府県の自転車防犯登録の案内、お住まいの市区町村・管轄窓口の案内など公的な情報でご確認ください。二輪車リサイクルシステムの利用条件は公式の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
