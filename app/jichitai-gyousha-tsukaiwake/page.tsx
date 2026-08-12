import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/jichitai-gyousha-tsukaiwake/";
const TITLE = "自治体回収と業者回収の使い分け｜どっちに頼む?判断基準をわかりやすく解説";
const DESC =
  "不用品の処分は、自治体の収集と民間の回収業者のどちらにも頼めますが、費用・スピード・手間・対応範囲がそれぞれ異なります。この記事では、自治体回収と業者回収の特徴を比較し、状況別にどちらを選ぶべきかの判断基準、両方を組み合わせる考え方、業者を選ぶときの注意点までを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const features = [
  {
    title: "自治体回収の特徴：費用を抑えやすいが、日程と運び出しは自分次第",
    body: "自治体の粗大ごみ収集や資源回収は、公的な制度として運用されているため、費用を抑えやすく安心感があるのが持ち味です。一方で、収集日は自治体側の日程に合わせる必要があり、申し込みから収集まで日数がかかる場合があります。また、屋外の指定場所まで自分で運び出すのが原則の場合が多く、家の中からの搬出や解体はしてもらえないのが一般的です。出せる品目にも制限があり、家電リサイクル法の対象品などは受け付けていません。",
  },
  {
    title: "業者回収の特徴：早く・楽に・まとめて頼めるが、費用と業者選びに注意",
    body: "民間の不用品回収業者・片付け業者は、日程の融通が利きやすく、家の中からの運び出し、大量の不用品の一括回収、片付け作業そのものまで幅広く対応できるのが持ち味です。その分、自治体の収集より費用がかかるのが一般的で、費用は物量・間取り・搬出条件により大きく変わります。また、家庭の廃棄物の収集運搬には自治体の許可などが必要であり、許可を確認できない業者に頼むと不法投棄や料金トラブルに巻き込まれるおそれがあるため、業者選びが重要になります。",
  },
  {
    title: "「どちらか一方」ではなく組み合わせるのが上手な使い方",
    body: "自治体回収と業者回収は対立するものではなく、組み合わせて使えます。時間に余裕がある物は自治体の収集で計画的に出し、運び出せない大型品や期限が迫った分だけ業者に頼む、といった使い分けをすると、費用と手間のバランスを取りやすくなります。",
  },
];

const criteria = [
  {
    title: "時間に余裕があるか",
    body: "処分を急がないなら、自治体の収集を軸にするのが手堅い選択です。収集日まで日数がかかっても問題ない物は、順番に申し込んで出していけば費用を抑えられます。逆に、退去日や引っ越し日が迫っている、来客までに片付けたいなど期限が近い場合は、日程の融通が利く業者が向いています。",
  },
  {
    title: "自分で運び出せるか",
    body: "自治体の収集は屋外の指定場所まで自分で出すのが原則の場合が多いため、タンス・ベッド・冷蔵庫のような重量物を運び出せるかが分かれ目になります。運び出す人手がない、階段しかない、高齢で持てないといった場合は、搬出まで対応する業者が現実的です。自治体によっては運び出しを支援する制度があるため、まず自治体に確認するのもよいでしょう。",
  },
  {
    title: "量が多いか・品目が混在しているか",
    body: "数点の粗大ごみなら自治体の収集で十分ですが、部屋全体・家全体の片付けで大量の不用品が出る場合や、粗大ごみ・普通ごみ・家電リサイクル対象品・資源が混在している場合は、仕分けから任せられる業者のほうが手間を大きく減らせます。ゴミ屋敷状態の片付けや遺品整理など、作業自体が大変なケースも業者向きです。",
  },
];

const steps = [
  {
    title: "処分したい物と期限を書き出す",
    body: "まず、処分したい物をリストアップし、「いつまでに片付ける必要があるか」を明確にします。期限の有無が、自治体と業者のどちらを軸にするかを決める最初の分かれ道です。物の量が多い場合は、部屋ごとにおおまかに書き出すだけでも構いません。",
  },
  {
    title: "自治体のルールで出せる物・出せない物を確認する",
    body: "お住まいの自治体の公式サイトで、リストの物が粗大ごみ・普通ごみ・資源のどれに当たるか、出せない品目はどれかを確認します。家電リサイクル法の対象品（エアコン・テレビ・冷蔵庫・洗濯機）やパソコンなどは別ルートになるのが一般的です。分別区分や手数料は自治体により異なるため、必ず公式の案内で確認してください。",
  },
  {
    title: "自治体で無理なく出せる分は申し込む",
    body: "自分で運び出せて、収集日程にも間に合う物は、自治体の収集に申し込みます。申し込みの一般的な流れは粗大ごみ収集の申し込みの流れの記事で解説しています。時間に余裕があるなら、この段階でリストの大半を処理できることも多いです。",
  },
  {
    title: "残った物について業者から相見積もりを取る",
    body: "運び出せない物、期限に間に合わない物、量が多すぎる分については、業者への依頼を検討します。1社だけで決めず、2〜3社から見積もりを取り、作業範囲・内訳・追加料金の条件を比較しましょう。訪問見積もりに対応する業者なら、当日の追加請求のリスクを減らせます。",
  },
  {
    title: "許可・実績を確認して依頼先を決める",
    body: "家庭から出る廃棄物の収集運搬を業として行うには、原則として自治体の一般廃棄物収集運搬業の許可が必要です（買取や自治体委託など形態により異なります）。会社情報・許可の有無・実績・口コミを確認し、条件を書面で残してくれる業者を選びましょう。確認ポイントは違法業者の見分け方の記事にまとめています。",
  },
];

const ngActions = [
  {
    title: "「早いから」だけで巡回トラックに頼んでしまう",
    body: "拡声器で巡回するトラックや突然の電話勧誘の業者は、会社情報や許可を確認しにくく、積み込み後に高額な料金を請求されたというトラブル事例が知られています。急いでいるときほど、会社の所在が確認できて見積もりを書面で出す業者を選びましょう。",
  },
  {
    title: "自治体で出せる物まで全部業者に頼む",
    body: "時間と体力に余裕があるのに、すべてを業者に頼むと費用がかさみます。自分で出せる物は自治体の収集を使い、業者には「自分では無理な部分」だけを頼むのが、費用を抑えるうえで合理的です。ただし、期限が迫っている場合や心身の負担が大きい場合は、無理せず一括で任せる判断も間違いではありません。",
  },
  {
    title: "分別を確認せず全部まとめて出そうとする",
    body: "自治体の収集は分別が前提です。粗大ごみに普通ごみや家電リサイクル対象品を混ぜて出すと回収されず、集積所に残って近隣の迷惑になります。品目ごとの区分は自治体により異なるため、迷ったら自治体の分別案内やごみ分別アプリなどで確認しましょう。",
  },
  {
    title: "見積もりの内訳を確認せず口頭だけで契約する",
    body: "業者に頼む場合、「一式いくら」の口頭見積もりだけで作業を始めると、終わってから想定外の請求を受けたときに争いになりがちです。作業範囲・品目・搬出条件・追加料金の発生条件を書面やメールで残してもらい、納得してから契約しましょう。",
  },
];

const judgeSigns = [
  "退去・引っ越し・解体などの期限が迫っている",
  "大型の家具・家電を家の中から運び出せない",
  "不用品の量が多く、分別・搬出を自力でやり切れない",
  "ゴミ屋敷状態・遺品整理など、片付け作業そのものから任せたい",
  "遠方の実家など、現地での立ち会いや作業が難しい",
];

const faqs = [
  {
    q: "自治体回収と業者回収では費用はどのくらい違いますか？",
    a: "自治体の収集は公的制度のため費用を抑えやすく、業者はサービスの分だけ費用がかかるのが一般的な関係です。ただし、具体的な金額は自治体の手数料設定や、業者の場合は物量・間取り・搬出条件によって大きく異なるため、一律の比較はできません。自治体の手数料は公式サイトで、業者の費用は複数社の見積もりで確認してください。費用の考え方は費用相場ページでも解説しています。",
  },
  {
    q: "業者の許可は何を確認すればよいですか？",
    a: "家庭から出る廃棄物の収集運搬を業として行うには、原則として市区町村の一般廃棄物収集運搬業の許可が必要とされています。産業廃棄物の許可や古物商許可は別の制度なので、家庭の不用品処分ではまず一般廃棄物の扱いがどうなっているかを確認しましょう。自治体の委託業者や提携ルートで対応する場合もあるため、見積もり時に処分方法を説明できる業者かどうかが見極めのポイントです。",
  },
  {
    q: "「無料回収」の業者に頼んでも大丈夫ですか？",
    a: "無料をうたっていても、積み込み後に作業費や運搬費の名目で料金を請求されるトラブル事例が知られています。無料の理由を説明できるか、会社情報を確認できるかを見たうえで、少しでも不安があれば利用を避けるのが安全です。困ったときは消費者ホットライン188や自治体の廃棄物担当窓口に相談できます。詳しくは無料回収をうたう業者の注意点の記事で解説しています。",
  },
  {
    q: "急ぎで今週中に処分したい場合はどうすればよいですか？",
    a: "自治体の収集が日程的に間に合わない場合は、自治体の処理施設への持ち込み制度の有無を確認するか、即日・翌日対応をうたう回収業者への依頼を検討します。急ぎの場合でも、会社情報と見積もり内容の確認は省略しないことをおすすめします。焦って業者を選ぶと、料金トラブルのリスクが高まります。",
  },
];

const related = [
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ収集の申し込みの流れ", desc: "自治体収集を使うときの一般的な手順" },
  { href: "/muryou-kaishuu-chuui/", label: "無料回収をうたう業者の注意点", desc: "トラブルを避けるための確認ポイント" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売却・譲渡も含めた処分先の選び方" },
  { href: "/guide/illegal-dumping/", label: "違法業者の見分け方", desc: "許可・会社情報の確認ポイント" },
  { href: "/service/fuyohin/", label: "不用品回収サービスの基礎知識", desc: "業者に頼める作業の範囲" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "間取り・作業別の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "自治体回収と業者回収の使い分け" },
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
    { href: "#tokucho", label: "1｜自治体回収と業者回収、それぞれの特徴" },
    { href: "#kijun", label: "2｜どちらを選ぶ？3つの判断基準" },
    { href: "#steps", label: "3｜損しない使い分けの5ステップ" },
    { href: "#ng", label: "4｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "5｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "自治体回収と業者回収の使い分け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          自治体回収と業者回収の使い分け｜どっちに頼む？判断基準をわかりやすく解説
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「不用品を処分したいけれど、自治体の粗大ごみに出すべき？それとも回収業者に頼むべき？」——どちらにも良さがあるだけに、迷ってしまう方は多いはずです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、自治体回収と業者回収それぞれの特徴を整理したうえで、時間・搬出・量という3つの判断基準、両方を組み合わせて損しない使い分けの手順、業者に頼む場合の注意点までを解説します。読み終える頃には、自分のケースでどちらを選べばよいかが判断できるようになります。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>時間に余裕があり、自分で運び出せる物は「自治体回収」が費用を抑えやすい</li>
          <li>急ぎ・運び出し困難・大量・仕分けから任せたい場合は「業者回収」が向く</li>
          <li>二者択一ではなく、自治体で出せる分は自治体、無理な分だけ業者と組み合わせるのが上手な使い方</li>
          <li>業者に頼むときは許可・会社情報・見積もり内訳の確認を省略しない</li>
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

      <H2 id="tokucho" num="1">自治体回収と業者回収、それぞれの特徴</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、2つの処分ルートの性格の違いを押さえましょう。どちらが優れているかではなく、「得意な場面が違う」と理解するのがポイントです。
      </p>
      <div className="space-y-6 mb-4">
        {features.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kijun" num="2">どちらを選ぶ？3つの判断基準</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        使い分けの判断は、次の3つの問いで整理できます。3つとも「自分でできる」なら自治体回収、1つでも難しいものがあるなら、その部分に業者を組み込むイメージです。
      </p>
      <div className="space-y-4 mb-4">
        {criteria.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="steps" num="3">損しない使い分けの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        判断基準が分かったら、実際の段取りに落とし込みます。「自治体で出せる物を先に確定させ、残りを業者に相談する」のが基本の流れです。
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
        自治体収集の申し込み手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>で、売却・譲渡も含めた処分先の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で解説しています。
      </p>

      <H2 id="ng" num="4">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="5">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、自治体回収だけで完結させようとせず、業者への相談を組み込むことを検討しましょう。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        個別の業者の特徴は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>などのレビュー記事で、地域別の依頼先は<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪</Link>・<Link href="/area/sapporo/" className="text-primary underline underline-offset-2">札幌</Link>など各エリアページで紹介しています。
      </p>

      <H2 id="faq" num="6">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="7">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの手数料・収集方法は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。業者への依頼費用は物量・間取り・搬出条件により異なります。
      </p>
    </article>
  );
}
