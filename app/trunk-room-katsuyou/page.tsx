import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/trunk-room-katsuyou/";
const TITLE = "トランクルームを片付けに活用する方法｜荷物を逃がして部屋を広くする";
const DESC =
  "捨てられない荷物をトランクルームに一時的に逃がしながら部屋を片付ける方法を解説します。トランクルームの種類と向き不向き、片付けに活用するメリットと落とし穴、預ける物の選び方と5ステップ、「物置の引っ越し」で終わらせないためのNG行動、処分や業者依頼と組み合わせる判断までを整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "トランクルームは「捨てる」と「持ち続ける」の中間の選択肢",
    body: "片付けが進まない最大の理由は、「手放す決断ができない物」が場所をふさぐことです。トランクルームは、そうした判断保留の物を家の外へ一時的に逃がすことで、部屋のスペースを先に取り戻せるサービスです。捨てる決断を今すぐしなくても部屋は片付く——これがトランクルーム活用の本質で、判断疲れで片付けが止まっている人にとって有効な回避路になります。",
  },
  {
    title: "屋内型・屋外型・宅配型の3種類がある",
    body: "トランクルームには、建物内の区画を借りる屋内型、コンテナを利用する屋外型、箱単位で預けて配送でやり取りする宅配型があります。空調や立地、収納量、出し入れのしやすさがそれぞれ異なり、料金体系もサービス・地域・広さによってさまざまです。衣類や書籍など環境の影響を受けやすい物は保管環境の確認が特に重要で、具体的な条件・料金は各サービスの公式サイトで確認してください。",
  },
  {
    title: "「一時保管」と割り切ることが成功の条件",
    body: "トランクルームは便利な反面、月額の費用が続く限り発生します。「とりあえず全部預ける」使い方をすると、保管料を払い続けながら物とも向き合わない状態が固定化し、いずれ保管料の合計が中身の価値を超えていきます。片付けに活用するなら、「期限を決めた一時保管」と割り切り、預けた物をいつどう減らすかまで最初に設計しておくことが成功の条件です。",
  },
];

const merits = [
  {
    title: "部屋が先に広くなり、片付けの効果を即実感できる",
    body: "通常の片付けは「捨てる判断」が終わるまで部屋が広くなりませんが、トランクルームを使うと、判断保留の物を運び出した時点で生活空間が回復します。床が見え、動線が通る変化を先に体感できるため、片付けを続けるモチベーションが生まれやすくなります。散らかりの全体量を先に減らす突破口として有効です。",
  },
  {
    title: "季節物・趣味の道具など「使うが今は不要な物」の置き場になる",
    body: "季節家電、スキーやキャンプの道具、ひな人形、来客用の寝具など、確実に使うが使用頻度の低い物は、狭い住まいでは大きな負担になります。こうした「捨てるべきでないが今は不要な物」を外部化するのは、トランクルームの最も合理的な使い方です。部屋には日常で使う物だけが残り、収納に余白が生まれます。",
  },
  {
    title: "引っ越し・退去・リフォームの「仮置き場」として使える",
    body: "退去期限までに荷物を減らしたい、リフォーム中に家財を一時的に移したい、実家の片付けで出た保留品を置く場所がない——といった期限のある場面で、荷物の仮置き場として使う方法です。期限が明確なぶん「借りっぱなし」になりにくく、トランクルームの使い方としては失敗しにくい部類です。退去の段取りは退去前の片付けの進め方の記事で解説しています。",
  },
];

const steps = [
  {
    title: "「なぜ預けるか・いつまで預けるか」を先に決める",
    body: "契約の前に、「部屋を広くして片付けを進めるため」「引っ越しまでの仮置きのため」など目的を言葉にし、「半年後に中身を見直す」「1年で解約する」と期限を設定します。カレンダーに見直し日を登録しておきましょう。目的と期限のない契約は、保管料を払い続ける物置を1つ増やすだけの結果になりがちです。",
  },
  {
    title: "預ける物を「使うが今は不要」「判断保留」に絞る",
    body: "預けてよいのは、季節物・趣味の道具などの「使うが今は不要な物」と、思い出の品などの「今は判断できない物」です。逆に、明らかに不要な物を預けるのは保管料の無駄なので、先に処分ルートへ回します。日常的に使う物を預けると出し入れの手間で生活が不便になるため、これも対象外です。仕分けの基準は部屋を片付ける順番の記事の考え方が使えます。",
  },
  {
    title: "サービスと広さを選ぶ。料金は総額で比較する",
    body: "預ける物の量と質（湿気に弱い物の有無）から、屋内型・屋外型・宅配型を選びます。料金は月額だけでなく、初期費用・最低利用期間・出し入れの送料（宅配型）まで含めた総額で比較してください。自宅からの距離も重要で、遠すぎると出し入れが億劫になり「開かずの倉庫」化します。具体的な料金・条件は各サービスの公式サイトで確認しましょう。",
  },
  {
    title: "中身のリストを作ってから運び込む",
    body: "箱に番号を振り、「何をどの箱に入れたか」のリストをスマホのメモや写真で残してから運び込みます。リストがないと、預けた物の存在自体を忘れ、見直しの際に「開けるのが面倒」という壁が生まれます。箱の中身が一覧できる状態は、後で「もう要らない」と判断するための材料にもなります。大型の物の搬入・搬出に人手が要る場合は、運搬サービスの利用も検討しましょう。",
  },
  {
    title: "見直し日に「1年触らなかった物」を手放していく",
    body: "設定した見直し日に、リストを見ながら「この期間、一度も出さなかった物」をチェックします。1年出番のなかった物は、今後も使わない可能性が高い物です。売却・譲渡・処分のルートに回し、荷物が減ったら一回り小さい区画への住み替えや解約を検討します。トランクルームを「物が減っていく中継地点」として運用できれば、活用は成功です。処分ルートは不用品の処分ルート比較の記事を参考にしてください。",
  },
];

const ngActions = [
  {
    title: "目的も期限も決めずに「とりあえず全部」預ける",
    body: "部屋の物を吟味せずに詰めて運ぶと、部屋は片付いたように見えても、問題が場所を変えただけの状態になります。保管料は毎月発生し続け、数年単位では大きな金額になります。預ける前の仕分けこそが片付けの本体であり、トランクルームはその成果を保管する場所だと考えてください。",
  },
  {
    title: "明らかな不用品に保管料を払い続ける",
    body: "壊れた家電、読み返さない雑誌、サイズの合わない衣類など、冷静に見れば手放せる物を預けるのは、不用品に家賃を払うのと同じです。預ける候補の中に「これは本当は処分できるのでは」という物が混ざっていないか、箱詰めの前にもう一度だけ確認しましょう。処分に迷う物だけを預けるのが正しい使い方です。",
  },
  {
    title: "保管環境を確認せずに湿気・温度に弱い物を預ける",
    body: "衣類・布団・書籍・写真・楽器などは、湿気や温度変化でカビや傷みが生じやすい物です。空調のない環境に長期間置いた結果、取り出したときには使えなくなっていた、という失敗は珍しくありません。デリケートな物を預けるなら保管環境の仕様を必ず確認し、条件に合うサービスを選んでください。カビの怖さはカビが広がった部屋の清掃方法の記事でも触れています。",
  },
  {
    title: "禁止されている物を預ける",
    body: "現金や貴重品、生き物、食品、燃料や危険物などは、各サービスの規約で保管が禁止されているのが一般的です。規約違反はトラブルのもとになるだけでなく、他の利用者にも迷惑をかけます。何が預けられないかは契約前に規約で確認し、迷う物は問い合わせてから判断してください。",
  },
];

const judgeSigns = [
  "トランクルームに運ぶ以前に、部屋の物量が多すぎて仕分けが進まない",
  "大型家具・家電の搬出があり、自力ではトランクルームまで運べない",
  "退去・引っ越しの期限が迫っており、保管と処分を同時に進める必要がある",
  "保管料を払い続けている物を、まとめて処分に切り替えたい",
  "実家・遺品の整理で、保留品の保管と不用品の処分が同時に発生している",
];

const faqs = [
  {
    q: "トランクルームの料金はどのくらいかかりますか？",
    a: "料金はサービスの種類（屋内型・屋外型・宅配型）、地域、広さ、空調の有無などによって大きく異なるため、一律にいくらとは言えません。月額料金のほか、初期費用・最低利用期間・出し入れの送料なども含めた総額で、複数のサービスを比較するのが確実です。各サービスの公式サイトで最新の料金・条件を確認してください。",
  },
  {
    q: "トランクルームと物置(自宅用)はどちらがよいですか？",
    a: "庭やベランダに設置スペースがあり、長期的に収納を増やしたいなら自宅用物置、設置場所がない・一時的な保管でよいならトランクルームが向いています。自宅用物置は初期費用がかかる一方で月額は発生せず、トランクルームは初期負担が軽い一方で費用が続きます。保管したい期間と量から逆算して選びましょう。",
  },
  {
    q: "捨てられない思い出の品はずっと預けてよいですか？",
    a: "思い出の品は無理に手放す必要はありませんが、「トランクルームの保管料を払い続けてでも残したい物か」という視点で定期的に見直すことをおすすめします。写真に撮って現物を手放す、量の上限を箱いくつまでと決めるなど、残し方を工夫すると、保管料と気持ちの両方に折り合いを付けやすくなります。",
  },
  {
    q: "トランクルームに預けた物をそのまま処分してもらえますか？",
    a: "サービスによっては買取や処分の仕組みを持つものもありますが、対応の有無・条件はさまざまです。一般的には、不要になった預け荷物は自分で引き取って処分ルートに回すか、不用品回収業者に引き取りを依頼することになります。量が多い場合は、トランクルームからの搬出と処分をまとめて業者に相談する方法もあります。",
  },
];

const related = [
  { href: "/katazuke-junban/", label: "部屋を片付ける順番", desc: "仕分けの基準とどこから手を付けるか" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの進め方", desc: "期限がある片付けの段取り" },
  { href: "/oheya-checklist/", label: "汚部屋レベルチェック", desc: "散らかり度合いの客観的な判定" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売却・譲渡・回収業者の使い分け" },
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
    { "@type": "ListItem", position: 2, name: "トランクルームを片付けに活用する方法" },
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
    { href: "#kiso", label: "1｜トランクルーム活用の基本と種類" },
    { href: "#merit", label: "2｜片付けに活用するメリット3つ" },
    { href: "#houshin", label: "3｜活用の全体方針" },
    { href: "#steps", label: "4｜トランクルームで片付けを進める5ステップ" },
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

      <Breadcrumb items={[{ label: "トランクルームを片付けに活用する方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          トランクルームを片付けに活用する方法｜荷物を逃がして部屋を広くする
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「捨てられない物が多くて片付けが進まない」「部屋を広くしたいが、思い出の品を手放す決心がつかない」——そんなときの選択肢が、荷物を一時的に家の外へ逃がすトランクルームの活用です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          ただし、使い方を間違えると「保管料を払い続ける物置が増えただけ」という結果にもなります。この記事では、トランクルームの種類と向き不向き、片付けに活かす手順、失敗パターン、処分や業者依頼との組み合わせ方までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>トランクルームは「捨てる」と「持ち続ける」の中間の選択肢。判断保留の物を逃がせば部屋が先に片付く</li>
          <li>成功の条件は「目的と期限を決めた一時保管」。借りっぱなしにしない設計を先に作る</li>
          <li>預けるのは「使うが今は不要な物」と「判断保留の物」だけ。明らかな不用品は先に処分する</li>
          <li>料金・保管環境はサービスにより大きく異なるため、総額と仕様を比較して選ぶ</li>
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

      <H2 id="kiso" num="1">トランクルーム活用の基本と種類</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、トランクルームというサービスの位置づけと種類を押さえましょう。「何のために使うのか」が明確になると、選び方も使い方も定まります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">片付けに活用するメリット3つ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        トランクルームを片付けに組み込むと、通常の「捨てる片付け」にはない次のような利点があります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">活用の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        トランクルーム活用の大原則は、「仕分けてから預け、期限を決めて減らしていく」ことです。トランクルームは片付けの代わりではなく、片付けを進めやすくするための補助輪です。預けた瞬間がゴールではなく、見直しのたびに荷物が減っていく状態を作れて初めて、費用に見合う価値が生まれます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自分の部屋の散らかり具合と物量を客観視してから計画を立てると、必要な広さや預ける量を見誤りません。<Link href="/oheya-checklist/" className="text-primary underline underline-offset-2">汚部屋レベルチェック</Link>の記事で現状を判定してから進めるのがおすすめです。
      </p>

      <H2 id="steps" num="4">トランクルームで片付けを進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「目的と期限が先、契約はあと。リスト化で忘れ物をなくす」です。
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
        トランクルームは自力の片付けを助けるサービスですが、次のような状況では、片付け業者・不用品回収業者との組み合わせや切り替えを検討しましょう。<Link href="/review/otasuke-usagi/" className="text-primary underline underline-offset-2">おたすけうさぎの口コミ・評判</Link>など業者のレビュー記事や、<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較も参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。トランクルームの料金・保管環境・規約はサービスにより異なるため、契約前に必ず各サービスの公式サイトで最新の条件をご確認ください。業者に依頼する場合の費用は物量・作業範囲により異なるため、複数社の見積もり比較をおすすめします。
      </p>
    </article>
  );
}
