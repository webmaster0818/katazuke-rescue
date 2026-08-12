import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/digital-ihin-seiri/";
const TITLE = "デジタル遺品の整理方法｜故人のスマホ・PC・ネット契約の扱い方";
const DESC =
  "故人のスマートフォン・パソコン・ネット上の契約やアカウントといったデジタル遺品の整理方法を解説します。デジタル遺品に含まれるものの全体像、放置した場合に起こり得る問題、自分たちで進める5ステップ、やってはいけないNG行動、専門家や業者に相談すべきケースまで、初めて直面した方向けに順を追って整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "デジタル遺品とは「機器の中と、ネットの向こうにあるもの」",
    body: "デジタル遺品とは、故人が残したスマートフォン・パソコン・タブレットなどの機器そのものと、その中のデータ（写真・連絡先・文書）、さらにネット上のアカウントや契約（メール、SNS、サブスクリプション、ネット銀行・ネット証券、電子マネーなど）を指す言葉です。目に見える機器だけでなく、「ネットの向こう側にある契約と資産」まで含めて考えることが、デジタル遺品整理の出発点になります。",
  },
  {
    title: "最大の壁はパスワードとロック",
    body: "デジタル遺品整理で多くの遺族が最初につまずくのが、スマートフォンのロック解除とアカウントのパスワードです。本人しか知らない情報のため、手がかりがないと中のデータや契約の確認が進められません。紙のメモやエンディングノート、机の引き出しなどにパスワードの記録が残されていないかを探すことが、実務上とても重要になります。",
  },
  {
    title: "「お金に関わるもの」と「思い出に関わるもの」に分けて考える",
    body: "デジタル遺品は、ネット銀行・証券・電子マネー・サブスクリプションといった「お金に関わるもの」と、写真・動画・SNS・メールといった「思い出に関わるもの」に大別できます。優先すべきはお金に関わるものです。資産は相続の手続きに関わり、サブスクリプションは放置すると料金の請求が続くおそれがあるためです。思い出のデータは急ぐ必要がないので、落ち着いてから時間をかけて向き合いましょう。",
  },
];

const risks = [
  {
    title: "ネット上の資産が相続手続きから漏れる",
    body: "ネット銀行・ネット証券・電子マネーなどは紙の通帳や郵送物がないことも多く、存在に気づかれないまま相続手続きが進んでしまうおそれがあります。郵送物・メール・アプリ・カードの利用明細などから、故人がどのサービスを使っていたかを洗い出すことが大切です。相続の具体的な手続きや判断は、弁護士・司法書士・税理士などの専門家や自治体の相談窓口に確認してください。",
  },
  {
    title: "サブスクリプションの請求が続く",
    body: "動画配信・音楽・アプリ・クラウドストレージなどの定額サービスは、解約されない限り請求が続く仕組みです。クレジットカードや口座の明細を確認し、継続課金されているサービスを特定して、各サービスの案内に沿って解約や利用者死亡時の手続きを進めましょう。カード自体の停止手続きとあわせて整理すると漏れを防ぎやすくなります。",
  },
  {
    title: "アカウントの放置が乗っ取りや悪用につながる",
    body: "使われなくなったメールやSNSのアカウントは、不正アクセスや乗っ取りの標的になり得ます。主要なSNSには、遺族からの申請によりアカウントを削除したり追悼アカウントに移行したりする仕組みが用意されていることがあります。各サービスの公式ヘルプで手続き方法を確認し、放置せず順に対応していきましょう。",
  },
];

const steps = [
  {
    title: "機器と手がかりを集め、勝手に初期化しない体制を作る",
    body: "まず、故人のスマートフォン・パソコン・タブレット・外付けドライブ・スマートウォッチなどの機器と、パスワードのメモ・エンディングノート・契約書類・郵送物を1か所に集めます。この段階で最も大切なのは、家族の誰かが善意で機器を初期化したり解約したりしてしまわないよう、「デジタル関係はまとめて確認してから動く」と共有しておくことです。",
  },
  {
    title: "パスワードの手がかりを探し、ロック解除を試みる",
    body: "紙のメモ、手帳、パスワード管理アプリの記録、家族が知っている誕生日などの情報から、ロック解除の手がかりを探します。スマートフォンは誤ったパスコードを何度も入力するとデータが消去される設定になっている場合があるため、むやみに試行を繰り返すのは危険です。手がかりが尽きた場合は、その機器の扱いをいったん保留にし、他の経路（郵送物・パソコン・メール）から契約の把握を進めます。",
  },
  {
    title: "お金に関わる契約・資産を洗い出す",
    body: "郵送物、メールの受信箱、スマートフォンのアプリ一覧、クレジットカード・口座の明細を手がかりに、ネット銀行・証券・電子マネー・ポイント・サブスクリプションなどを一覧にします。「どのサービスに」「何があるか」をリスト化するだけで、その後の相続手続きや解約作業の全体量が見え、抜け漏れを防げます。資産に関わるものは相続手続きに関わるため、判断に迷ったら専門家に相談してください。",
  },
  {
    title: "各サービスの死亡時手続き・解約を順に進める",
    body: "洗い出した契約について、各サービスの公式サイトで利用者が亡くなった場合の手続きを確認し、必要書類を揃えて順に進めます。携帯電話回線の解約は、その番号でSMS認証を使う他のサービスの確認が終わってから行うのが安全です。回線を先に止めると、認証コードが受け取れず他の手続きが進められなくなることがあります。",
  },
  {
    title: "思い出のデータを保全し、機器を安全に処分する",
    body: "写真や動画など残したいデータは、別の記録媒体やクラウドにコピーして家族で共有できるようにします。データの保全が終わった機器は、初期化(工場出荷状態に戻す)をしたうえで、小型家電リサイクルの回収窓口や購入店の引き取りなど、適切なルートで手放します。回収の仕組みや対象品目は自治体・店舗により異なるため、公式の案内を確認してください。パソコンにはメーカー等による回収の仕組みもあります。",
  },
];

const ngActions = [
  {
    title: "手がかりの確認前に機器を初期化・処分する",
    body: "スマートフォンやパソコンには、契約の手がかりや思い出のデータ、資産に関わる情報が集約されています。中身を確認する前に初期化したり売却・処分したりすると、取り戻す手段がなくなります。遺品整理で機器類が出てきたら、「デジタル機器は最後まで保留」を合言葉に、物の片付けとは別枠で管理してください。",
  },
  {
    title: "パスコードの試行を繰り返してデータを失う",
    body: "スマートフォンの中には、パスコードの誤入力が一定回数続くとデータを自動消去する設定が有効になっているものがあります。思いつく番号を手当たり次第に試すのは、大切なデータを自らの手で消してしまうリスクのある行為です。数回試して開かなければ、それ以上の試行はやめ、他の手がかりや専門の相談先を探しましょう。",
  },
  {
    title: "携帯電話回線を最初に解約してしまう",
    body: "月額料金を止めたい気持ちから携帯電話回線を真っ先に解約すると、その番号あてのSMS認証が使えなくなり、ネット銀行や各種サービスの確認・手続きが極端に難しくなることがあります。回線の解約は、電話番号に紐づく契約の洗い出しが一通り終わってからにするのが安全です。",
  },
  {
    title: "故人のアカウントに無断でログインし続ける",
    body: "故人のアカウントの扱いには、各サービスの利用規約や法律上の論点が関わります。中身の確認が必要な場合も、なりすましのような使い方は避け、各サービスが用意する遺族向けの手続き（追悼アカウント・削除申請・データ開示の仕組みなど）を利用するのが原則です。判断に迷うケースでは弁護士などの専門家に相談してください。",
  },
];

const judgeSigns = [
  "スマートフォンやパソコンのロックがどうしても解除できない",
  "ネット銀行・証券など資産に関わる契約がある可能性が高いが、全容がつかめない",
  "相続の期限が意識される中で、契約の洗い出しに時間をかけられない",
  "遺品全体の量が多く、物の整理とデジタルの整理を並行して進められない",
  "遠方に住んでいて、故人宅での確認作業の時間が取れない",
];

const faqs = [
  {
    q: "故人のスマホのロックが解除できません。どうすればよいですか？",
    a: "まず紙のメモやエンディングノート、手帳などにパスコードの記録がないかを探してください。誤入力を繰り返すとデータが消去される設定の場合があるため、むやみな試行は禁物です。解除できない場合も、郵送物やパソコン、明細類から契約の把握を進められることは多くあります。データ復旧やロック解除をうたう業者も存在しますが、対応可否・費用・信頼性は事業者により大きく異なるため、依頼する場合は実績と契約内容を十分確認してください。",
  },
  {
    q: "デジタル遺品の整理はどこまで自分たちでできますか？",
    a: "機器と手がかりの収集、契約の洗い出し、各サービスの死亡時手続きは、時間をかければ遺族だけでも進められることが多い作業です。一方、相続財産に関わる判断や、ロックされた機器からのデータ取り出しは、専門家や専門業者の領域になります。「一覧化までは自分たちで、判断と技術的な作業は専門家に」という線引きが現実的です。",
  },
  {
    q: "自分のデジタル遺品を家族のために整理しておくには？",
    a: "使っているサービスと契約の一覧、機器のパスワードの扱い方をエンディングノートなどにまとめ、保管場所を信頼できる家族に伝えておくのが基本です。パスワードそのものを書き残すかどうかは慎重に判断し、少なくとも「どこを見れば手がかりがあるか」を共有しておきましょう。詳しくは生前整理のやり方の記事で解説しています。",
  },
  {
    q: "デジタル遺品の整理を業者に頼むと費用はどのくらいですか？",
    a: "作業の範囲（機器のデータ取り出し、契約の調査、遺品整理全体との組み合わせなど）によって費用は大きく異なるため、一律にいくらとは言えません。遺品整理業者の中にはデジタル遺品の対応をうたう業者もあります。複数社から見積もりを取り、作業範囲・成果物・追加費用の条件を比較して判断してください。",
  },
];

const related = [
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "物の遺品整理の手順と業者に任せる線引き" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "自分のデジタル情報を元気なうちに整理する" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理と処分方法", desc: "契約書類など重要書類の見分け方" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親の家の片付けを揉めずに進める" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方", desc: "デジタル対応も含めた業者選び" },
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
    { "@type": "ListItem", position: 2, name: "デジタル遺品の整理方法" },
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
    { href: "#kiso", label: "1｜デジタル遺品とは？全体像と考え方" },
    { href: "#risk", label: "2｜放置すると起こり得る3つの問題" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自分たちで進めるデジタル遺品整理の5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜専門家・業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "デジタル遺品の整理方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          デジタル遺品の整理方法｜故人のスマホ・PC・ネット契約の扱い方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「故人のスマホのパスワードがわからない」「ネット銀行やサブスクの契約があるはずだが、どこに何があるのか見当もつかない」——遺品整理の中でも、デジタル遺品は形が見えないぶん、何から手を付ければよいか迷いやすい領域です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、デジタル遺品に含まれるものの全体像、放置した場合に起こり得る問題、自分たちで進める5つのステップ、絶対に避けたいNG行動、専門家に相談すべきケースまでを解説します。物の遺品整理と並行して進める方にも役立つ内容です。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>デジタル遺品は「お金に関わるもの」を優先。ネット資産の把握とサブスクの停止から着手する</li>
          <li>機器の初期化・処分・回線解約は、契約の洗い出しが終わるまで保留にする</li>
          <li>パスコードのむやみな試行はデータ消去のリスクがある。手がかりのメモ探しが先</li>
          <li>相続に関わる判断は弁護士・司法書士などの専門家や自治体の相談窓口へ</li>
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

      <H2 id="kiso" num="1">デジタル遺品とは？全体像と考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、デジタル遺品という言葉が指す範囲と、整理を考えるうえでの基本的な枠組みを押さえましょう。全体像が見えると、優先順位のつけ方が明確になります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="risk" num="2">放置すると起こり得る3つの問題</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        デジタル遺品は目に見えないため、後回しにされがちです。しかし放置すると、次のような実害につながるおそれがあります。
      </p>
      <div className="space-y-4 mb-4">
        {risks.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        デジタル遺品整理の大原則は、「消す・止める前に、洗い出す」です。初期化・解約・処分といった後戻りできない操作は、契約と資産の全体像がつかめてから行う。この順番さえ守れば、大きな失敗はほぼ防げます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、デジタル遺品の整理は、家具や衣類など物の遺品整理と同時並行になることがほとんどです。物の片付けの最中に機器やメモ類が出てくるため、「デジタル関係の物はこの箱に集める」と決めておくと、後の作業がスムーズになります。物の遺品整理の進め方は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理を自分で進める方法</Link>の記事で解説しています。
      </p>

      <H2 id="steps" num="4">自分たちで進めるデジタル遺品整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「集める、洗い出す、止める、残す、の順番を崩さない」ことです。
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
        なお、パソコンやスマートフォンなどの機器を処分する際の回収の仕組みは自治体や店舗・メーカーにより異なります。処分ルート全体の考え方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>の記事も参考にしてください。
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

      <H2 id="gyousha" num="6">専門家・業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のような状況では、遺族だけで抱え込まず、専門家や遺品整理業者への相談を検討しましょう。遺品整理業者の中にはデジタル遺品の対応をうたう業者もあります。業者選びでは<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理の口コミ・評判</Link>などのレビュー記事や、<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者おすすめ</Link>などエリア別の比較も参考にしてください。
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
        本記事は一般的な知識の提供を目的としたもので、法律・税務等の個別の助言を行うものではありません。相続やアカウントの取り扱いに関わる判断は、弁護士・司法書士などの専門家や各サービスの公式窓口にご確認ください。各サービスの手続き方法は変更されることがあるため、必ず最新の公式案内をご確認ください。
      </p>
    </article>
  );
}
