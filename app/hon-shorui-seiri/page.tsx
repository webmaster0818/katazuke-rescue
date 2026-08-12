import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/hon-shorui-seiri/";
const TITLE = "本・書類の整理と処分方法｜残すべき重要書類の見分け方";
const DESC =
  "増え続ける本と書類を整理する基準と処分方法を解説します。本を手放す判断軸と売却・資源回収などのルート、契約書・保険・年金関係など捨ててはいけない重要書類の見分け方、個人情報を守る安全な捨て方、自力で進める5ステップ、業者に相談すべきサインまでを初めての方向けに整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "本と書類は「捨てて困る物」が混ざっているから難しい",
    body: "衣類や雑貨と違い、紙類の整理には「捨てると取り返しがつかない物」が一定数混ざっています。契約書や保険証券、年金関係の通知などは、必要になったときに手元にないと手続きに手間がかかります。逆に、大半のチラシ・DM・古い明細は捨てても困りません。紙類の整理とは、この少数の重要書類を確実により分け、残りを一気に手放す作業だと捉えると、全体像がつかみやすくなります。",
  },
  {
    title: "本は「また読むか」ではなく「今の自分に必要か」で判断する",
    body: "本は「いつか読み返すかもしれない」と思うと1冊も手放せなくなります。実際に読み返す本はごく一部で、多くは「読んだ事実」や「買った気持ち」に価値を感じて残しているものです。判断軸は「今の自分の仕事・趣味・関心に必要か」「今書店で見かけたらまた買うか」に置き換えましょう。絶版などで入手困難な本以外は、必要になれば買い直す・図書館や電子書籍で読むという選択肢もあります。",
  },
  {
    title: "書類は「原本が必要な物」と「情報だけ必要な物」に分かれる",
    body: "書類には、契約書や証書のように原本そのものに意味がある物と、取扱説明書や明細のように書かれている情報が手に入れば紙は不要な物があります。後者はメーカーサイトの電子版やスキャンで代替でき、紙で持ち続ける必要はありません。この区別ができると、書類の山の大部分は「情報だけ必要」か「どちらでもない」に分類でき、思い切って減らせるようになります。",
  },
];

const keeps = [
  {
    title: "契約・権利に関わる書類は原本を残す",
    body: "不動産の権利証・登記関係、賃貸借契約書、保険証券、ローンや金融商品の契約書類、年金関係の通知などは、手続きで原本や記載内容が必要になることがある代表的な書類です。判断に迷う書類は捨てずに「重要書類」ファイルへ入れておき、内容ごとの要否は契約先や自治体の窓口、専門家に確認してから判断しましょう。",
  },
  {
    title: "税・確定申告に関わる書類は保存期間を確認して残す",
    body: "領収書や帳簿など税の申告に関わる書類には、法令で保存期間が定められているものがあります。保存が必要な期間や対象は申告の種類や立場（個人・事業者など)によって異なるため、自分で申告をしている方は国税庁の案内や税務署・税理士への確認を優先し、自己判断でまとめて捨てないようにしてください。",
  },
  {
    title: "「最新1通だけ残す」で更新される書類を絞る",
    body: "保険の契約内容のお知らせ、年金定期便のような定期通知は、最新版が届くたびに古い版の役割が終わる書類です。「同じ種類は最新1通だけ残す」というルールにすると、判断に迷わず量を一定に保てます。公共料金の明細や給与明細をどこまで残すかは、家計管理や手続きでの必要性に応じて「直近1年分まで」など期限を自分で決めておくと迷いません。",
  },
];

const steps = [
  {
    title: "書類を先に、1か所に集めて「重要」だけ抜き出す",
    body: "本より先に書類から始めます。家中の書類を1か所に集め、契約・権利・税・年金・保険に関わる物だけを「重要書類」ボックスへ抜き出してください。この段階では細かく分類せず、「重要かそれ以外か」の2択に絞るのが速く進めるコツです。重要書類を先に確保しておけば、残りの紙は多少雑に処分しても取り返しがつきます。",
  },
  {
    title: "残りの紙類を「情報だけ・期限切れ・不要」に分けて処分する",
    body: "重要書類以外の紙は、取扱説明書やレシピの切り抜きなど「情報だけ必要な物」、期限の過ぎたクーポンや案内など「期限切れ」、チラシ・DMなどの「不要」に分けます。情報だけ必要な物はスマホで撮影するか電子版を確認して紙を手放し、期限切れと不要はまとめて資源回収へ。紙類の分別区分は自治体により異なるため、お住まいの市区町村の案内を確認してください。",
  },
  {
    title: "本を全部出し、「今の自分に必要な本」から棚に戻す",
    body: "本棚の本を一度すべて出し、「今の仕事・趣味・関心に必要」「繰り返し読んでいる」「入手困難で手放すと二度と読めない」本から棚に戻します。棚に戻す量の上限は「本棚に収まる分まで」と決め、床積みや2列収納はしないのが原則です。残りは手放す候補として、次のステップでルート分けします。",
  },
  {
    title: "手放す本を売却・寄付・資源回収にルート分けする",
    body: "状態のよい本や需要のある専門書は古書店・宅配買取・フリマアプリで売却でき、宅配買取なら箱に詰めて送るだけで完結します。買取がつかない本は、図書館や施設への寄付を受け付けている場合もありますが、受け入れ条件は施設ごとに異なるため事前確認が必要です。それ以外は自治体の資源回収(古紙)へ。売却は「1週間以内に出す分だけ」と締め切りを決めると停滞しません。",
  },
  {
    title: "重要書類をファイル1冊にまとめ、置き場所と入口ルールを決める",
    body: "最後に、抜き出しておいた重要書類をジャンル別にファイル1冊(または1箱)へまとめ、家族にも場所を伝えます。あわせて「郵便物はその日のうちに開封し、不要な紙は玄関近くで即処分」「書類の一時置きはトレー1つまで」という入口のルールを決めると、紙が再びたまる流れを断ち切れます。整理は捨てる作業で終わりではなく、たまらない仕組みづくりで完成します。",
  },
];

const ngActions = [
  {
    title: "書類を確認せずに箱ごと・束ごと捨てる",
    body: "紙の山を面倒がって束のまま処分すると、契約書類や現金・商品券などが紛れていた場合に取り返しがつきません。特に実家や遺品の整理では、書類の間から重要な物が見つかることが珍しくないため、紙類は必ず一度は目を通してから手放してください。ざっと1枚ずつめくる程度でも、重大な見落としはほぼ防げます。",
  },
  {
    title: "個人情報付きの書類をそのまま資源回収に出す",
    body: "住所・氏名・口座情報・マイナンバーなどが記載された書類をそのまま出すと、個人情報の漏えいにつながるおそれがあります。シュレッダーにかける、個人情報保護スタンプで塗りつぶす、細かく破るなどの処理をしてから処分しましょう。量が多い場合は、機密文書の溶解処理サービスという選択肢もあります。",
  },
  {
    title: "「いつか読む」の山を別室や実家に移動して終わりにする",
    body: "読んでいない本を段ボールに詰めて押し入れや実家に移すのは、整理ではなく問題の先送りです。移動した本を後から読むことはほとんどなく、量はそのまま将来の自分や家族の負担になります。今読んでいない本は「今の自分には不要」と認め、手放すか、「この箱を半年開けなかったら処分」と期限を付けて保管しましょう。",
  },
  {
    title: "保存期間のある書類を自己判断で処分する",
    body: "事業や確定申告に関わる帳簿・領収書などは、法令上の保存義務がある場合があります。保存期間や対象書類は立場や申告内容によって異なるため、「古いからもう要らないだろう」と自己判断で処分せず、国税庁の案内や税務署・税理士に確認してから手放してください。相続に関わる書類も同様に、専門家への確認が安全です。",
  },
];

const judgeSigns = [
  "本や書類が部屋の床を占領し、生活空間を圧迫している",
  "本棚ごと処分したいが、大型家具の搬出が自力では難しい",
  "実家や遺品の整理で、書類の確認と物の処分を並行して進める必要がある",
  "退去・引っ越しの期限までに蔵書を含む家財を片付け切る必要がある",
  "紙類以外の不用品もまとまった量あり、全体として手に負えない",
];

const faqs = [
  {
    q: "本を大量に処分したいときは何から始めればよいですか？",
    a: "まず「残す本」を先に選び、本棚に収まる量まで絞るのが基本です。手放す本は宅配買取なら箱に詰めて送るだけで済むため、量が多い場合に向いています。買取がつかない本は自治体の資源回収(古紙)へ出します。縛って運べないほどの量で、他の不用品もある場合は、回収業者にまとめて依頼する方法もあります。",
  },
  {
    q: "どの書類を残せばよいかわからず、全部保管しています。",
    a: "「契約・権利・税・年金・保険に関わる書類だけ原本を残し、それ以外は情報を確認したら手放す」が基本方針です。迷う書類は無理に判断せず「重要書類」ファイルに入れておき、契約先や自治体窓口、専門家に確認してから決めましょう。全部保管は一見安全ですが、本当に重要な書類が埋もれて探せなくなるリスクがあります。",
  },
  {
    q: "個人情報の入った書類が大量にあります。安全な捨て方は？",
    a: "シュレッダー処理が基本ですが、量が多い場合は機密文書を未開封のまま溶解処理するサービスを利用する方法もあります。家庭用シュレッダーで少しずつ進める場合は「1日1袋」など小分けにすると現実的です。資源回収に出す際は、個人情報部分だけでも塗りつぶすか切り取ってから出しましょう。",
  },
  {
    q: "故人の書類や本はどう整理すればよいですか？",
    a: "故人の書類には、相続手続きに必要な物が含まれている可能性があるため、一般の紙類と同じ感覚で処分するのは危険です。まず契約・金融・不動産・保険に関わる書類をすべて抜き出して保管し、手続きの要否を確認してから他の紙類を整理してください。進め方の全体像は遺品整理を自分で進める方法の記事で解説しています。",
  },
];

const related = [
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "書類と財産情報を元気なうちに整理する" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める方法", desc: "故人の書類・蔵書の扱い方" },
  { href: "/katazuke-junban/", label: "部屋を片付ける順番", desc: "どこから手を付ければ挫折しないか" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "売却・譲渡・回収業者の使い分け" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "資源回収・粗大ごみの使い方" },
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
    { "@type": "ListItem", position: 2, name: "本・書類の整理と処分方法" },
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
    { href: "#kiso", label: "1｜本・書類の整理が難しい理由と判断の基本" },
    { href: "#keep", label: "2｜捨ててはいけない書類の見分け方" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める本・書類整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "本・書類の整理と処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          本・書類の整理と処分方法｜残すべき重要書類の見分け方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「本棚に入り切らない本が床に積み上がっている」「書類はどれを捨てていいかわからず、全部取ってある」——本と書類は、量が増えやすいうえに「捨てて困る物」が混ざっているため、片付けの中でも判断が難しいカテゴリです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、本を手放す判断軸、残すべき重要書類の見分け方、個人情報を守る安全な処分方法、自力で進める5つのステップ、避けるべきNG行動までを解説します。書類の山に手を付けられずにいる方が、今日から動き出せる内容にまとめました。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>書類が先、本はあと。契約・権利・税・年金・保険の書類だけ先に抜き出せば、残りの紙は安心して減らせる</li>
          <li>本は「今の自分に必要か」「今また買うか」で判断し、本棚に収まる量を上限にする</li>
          <li>個人情報付きの書類はシュレッダー等で処理してから処分する</li>
          <li>保存義務のある書類や故人の書類は自己判断で捨てず、窓口・専門家に確認する</li>
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

      <H2 id="kiso" num="1">本・書類の整理が難しい理由と判断の基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、紙類の整理でつまずく原因と、迷わないための判断の枠組みを整理します。ここが腑に落ちると、山のような紙類も「実は大半が手放せる物」だとわかります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="keep" num="2">捨ててはいけない書類の見分け方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        書類整理で最も重要なのは、「残すべき少数派」を確実に見分けることです。次の3つの考え方を押さえておけば、大きな失敗は避けられます。
      </p>
      <div className="space-y-4 mb-4">
        {keeps.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">進め方の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        紙類整理の大原則は、「重要書類を先に確保し、残りは思い切って減らす」ことです。重要な物さえ抜き出してあれば、残りの判断を多少間違えても実害はほとんどありません。この安心感が、判断のスピードを大きく上げてくれます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、書類の整理は生前整理や実家の片付けの中核でもあります。財産や契約に関わる情報を整理してファイル1冊にまとめておくことは、将来の自分と家族への何よりの備えになります。全体像は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>、親の家の紙類に向き合う場合は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>の記事もあわせて参考にしてください。
      </p>

      <H2 id="steps" num="4">自力で進める本・書類整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「書類が先、本はあと。重要を抜けば残りは速い」です。
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
        手放す本や紙類の処分ルートの全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で解説しています。古紙・雑がみの分別区分や回収日は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
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
        本と書類だけなら自力で進められることが多いものの、次のような状況では片付け業者への相談が現実的です。書類の仕分けに配慮しながら作業する業者もあるため、見積もり時に「書類は確認しながら進めたい」と伝えましょう。業者選びでは<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケットの口コミ・評判</Link>などのレビュー記事も参考になります。
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
        本記事は一般的な知識の提供を目的としたもので、税務・法律等の個別の助言を行うものではありません。書類の保存期間や要否は個々の状況により異なるため、税務署・自治体窓口・専門家にご確認ください。古紙の分別区分・回収日は自治体により異なるため、お住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
