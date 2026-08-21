import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/rental-souko-jikka-hokan/";
const TITLE = "レンタル倉庫と実家保管の比較｜荷物を預ける前に確認したいこと";
const DESC =
  "捨てられない荷物を有料の保管サービスに預けるか、実家の空き部屋に置かせてもらうか。判断を分けるのは金額だけではありません。契約と同意の性質、保管環境、出し入れのしやすさ、補償の有無、そして将来「誰が片付けるのか」という問題まで、六つの比較軸で整理して解説します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "どちらも「保管」だが、性質はまったく違う",
    body: "有料の保管サービスは、事業者との契約にもとづく取引です。利用できる範囲、預けられない物、解約の手続き、荷物に損害が生じた場合の扱いなどが、契約書や規約という形で定められています。一方、実家に置かせてもらうのは、家族の好意にもとづく取り決めです。書面はなく、条件はあいまいで、事情が変わったときの調整も口頭で行われます。前者は費用がかかりますが条件が明確で、後者は費用がかからない代わりに条件が不明確です。この違いを理解しておくと、後から起きるすれ違いを減らせます。",
  },
  {
    title: "実家保管で見落とされやすいのは「将来の片付け」",
    body: "実家に荷物を置かせてもらうとき、多くの人は「一時的に」と考えています。しかし現実には、置いた荷物はそのまま数年、十数年と残りがちです。やがて親が高齢になり、施設への入居や家の売却、相続といった場面が訪れたとき、その荷物を片付けるのは親自身か、きょうだいを含む家族です。自分が預けたつもりの物が、別の誰かの負担になる可能性がある。この視点を最初に持っておくことが、実家保管を選ぶかどうかの判断で欠かせません。実家の片付けの実務は関連記事で扱っています。",
  },
  {
    title: "保管は「減らす」の代わりにはならない",
    body: "どちらの方法を選んでも、荷物の量そのものは変わりません。部屋から見えなくなるだけで、持ち物としては残り続けます。目的が「部屋を使える状態にすること」であれば保管は有効ですが、「持ち物を減らすこと」であれば保管は先送りにしかなりません。だからこそ、預ける前に一度、本当に残す物なのかを判断する時間を取ることをおすすめします。預ける量が減れば、必要な広さも、実家で占める面積も小さくなります。判断を保留する箱を作るのは構いませんが、期限を決めておいてください。",
  },
];

const merits = [
  {
    title: "比較1：条件の明確さと、同意の取り方",
    body: "有料の保管サービスでは、利用できる期間、預けられない物、料金の支払い方法、解約の手続き、荷物に損害が生じた場合の扱いが、契約書や規約に定められています。読むのは手間ですが、条件が文字になっていることは安心につながります。実家保管の場合、同意は口頭で交わされるのが普通です。「置いていいよ」の一言に、どれくらいの期間、どれくらいの量、どの部屋を使ってよいかまでは含まれていません。実家に置くと決めたなら、せめて場所・量・期限の三点だけは、口頭でも確認しておいてください。",
  },
  {
    title: "比較2：保管の環境と、荷物の傷み方",
    body: "保管サービスには、屋内の空調が管理された形式と、屋外に設置された形式があり、湿度や温度の条件は形式によって異なります。衣類、書類、写真、木製家具、電子機器などは、湿気や高温の影響を受けやすい物の代表です。実家の空き部屋や物置に置く場合も同様で、押し入れの奥、日の当たる部屋、屋外の物置では、傷み方がまったく違います。どちらを選ぶにしても、預ける物の性質に合った環境かどうかを先に確認してください。カビや虫の被害は、気づいたときには手遅れになっていることが多いものです。",
  },
  {
    title: "比較3：出し入れのしやすさと、実際の使用頻度",
    body: "保管サービスは、施設の場所と利用できる時間によって使い勝手が変わります。自宅から遠ければ、取りに行くこと自体が手間になり、結局使わないまま置き続けることになります。実家保管も同じで、実家が遠方であれば、必要になったときにすぐ取り出すことはできません。預ける前に、その荷物を年に何回使うのかを考えてみてください。ほとんど使わないのであれば、保管ではなく手放す判断のほうが合っているかもしれません。季節ごとに使う物であれば、出し入れのしやすさが選択の決め手になります。",
  },
];

const steps = [
  {
    title: "預ける候補の荷物を全部出し、種類ごとに分ける",
    body: "まず、預けようとしている物を一か所に出します。季節家電、衣類、書籍、思い出の品、趣味の道具、書類など、種類ごとに分けてください。分けてみると、性質の違いがはっきりします。湿気に弱い物、重くて運びにくい物、年に一度は必ず使う物、何年も触っていない物。この違いが、保管方法を決める材料になります。この時点で「もう使わない」と分かる物も出てきます。預ける量が減れば、必要な広さも実家で占める面積も小さくなりますので、ここは丁寧に進める価値があります。",
  },
  {
    title: "使用頻度と保管期間の見通しを、荷物ごとに書き出す",
    body: "次に、種類ごとに「年に何回使うか」「いつまで持っておく予定か」を書き出します。年に数回使う物、数年に一度使う物、使う予定はないが手放せない物の三つに分かれるはずです。使う予定のない物については、いつ判断するのかを決めてください。「一年後に見直す」と書いておくだけでも、無期限の保管にはなりません。この一覧は、保管サービスの広さを選ぶときにも、実家の家族に説明するときにも役立ちます。何をどれだけ、どのくらいの期間置くのかを言葉にできる状態にしておきます。",
  },
  {
    title: "有料保管を検討する場合、条件を確認して比較する",
    body: "保管サービスを使うなら、施設の場所と利用できる時間、屋内か屋外か、空調の有無、預けられない物の一覧、契約の期間と解約の手続き、荷物に損害が生じた場合の扱い、支払い方法を確認します。料金は広さ・立地・設備・契約条件によって異なりますので、複数の事業者の公式の案内で比べてください。ここで大切なのは、金額だけで選ばないことです。遠くて取りに行けない、環境が合わずに荷物が傷む、といった結果になれば、支払った分が無駄になります。荷物の性質に合っているかを軸に判断してください。",
  },
  {
    title: "実家に置く場合、場所・量・期限を家族と確認する",
    body: "実家保管を選ぶなら、置かせてもらう部屋または場所、荷物の量、いつまで置くのかの三点を、置く前に家族と確認してください。あわせて、その部屋を親が使う予定はないか、将来的に売却や住み替えの話が出ていないかも聞いておくと安心です。段ボールには中身と自分の名前、置いた日付を書いておきます。誰の何がいつから置かれているのかが分かる状態にしておくと、後で家族が困りません。きょうだいがいる場合は、一人だけが実家を物置のように使う形にならないよう、事前に共有しておくとよいでしょう。",
  },
  {
    title: "期限が来たら必ず見直し、預けっぱなしにしない",
    body: "決めた期限が来たら、預けた荷物を実際に見直します。この一年で一度も使わなかった物は、次の一年でも使わない可能性が高いと考えて構いません。見直しの機会を作らないと、保管は自動的に更新され続けます。有料の保管サービスであれば費用が発生し続け、実家保管であれば家族の負担が続きます。カレンダーに見直しの日を入れておく、あるいは季節の変わり目に合わせるなど、思い出す仕掛けを作っておいてください。手放すと決めた物の処分ルートは、関連記事で整理しています。",
  },
];

const ngActions = [
  {
    title: "判断を保留したまま、量を減らさずに全部預ける",
    body: "片付けの途中で疲れてくると、「とりあえず全部預けて、部屋を空けよう」と考えたくなります。しかしそれは、判断を先送りにしただけで、持ち物は一つも減っていません。有料の保管であれば費用が続き、実家保管であれば家族の空間が減り続けます。預ける前に、明らかに使わない物だけでも取り除いてください。全部を判断する必要はありません。一割でも減れば、必要な広さも実家で占める面積も変わります。手放し方の選択肢は関連記事で整理していますので、迷う場合は先に読んでみてください。",
  },
  {
    title: "実家に「一時的に」と言って置き、期限を決めない",
    body: "期限のない一時保管は、実質的に無期限の保管です。置いた側は忘れ、置かれた側は言い出しにくく、そのまま年月が過ぎます。やがて親が高齢になったとき、あるいは家を手放すことになったとき、その荷物の片付けが家族の負担になります。置かせてもらうなら、いつまでという期限と、期限が来たらどうするかを先に伝えてください。期限を延ばすこと自体は問題ありませんが、そのたびに一言確認する形にしておくと、関係がこじれません。",
  },
  {
    title: "保管サービスの規約を読まずに契約する",
    body: "保管サービスには、預けられない物が定められているのが一般的です。危険物、においの強い物、生き物、現金や貴重品などが挙げられることが多く、内容は事業者によって異なります。また、荷物に損害が生じた場合の扱い、解約の申し出の期限、支払いが滞った場合の対応も規約に定められています。読まずに契約すると、いざというときに想定と違う結果になります。契約前に、預ける予定の物が対象外でないかを必ず確認してください。分からない点は、契約する前に事業者へ問い合わせておきます。",
  },
  {
    title: "湿気や温度を考えずに、傷みやすい物を長期間置く",
    body: "衣類、布団、写真、書類、木製家具、電子機器は、湿気や高温の影響を受けやすい物です。屋外に設置された保管設備や、換気の少ない実家の物置に長期間置くと、カビやにおい、変形、劣化が進むことがあります。取り出したときには使えなくなっていた、という事態は珍しくありません。預ける前に、その物が置かれる環境の条件を確認し、湿気に弱い物は空調のある場所を選ぶか、そもそも預けずに手放すかを検討してください。防湿の資材を使う場合も、定期的な確認は必要です。",
  },
];

const judgeSigns = [
  "預ける前提で仕分けを始めたが、量が多すぎて作業が止まっている",
  "大型の家具や家電が含まれ、自分では運び出せない",
  "実家に長年置かれた荷物があり、家族だけでは判断が進まない",
  "退去や住み替えの期限があり、仕分けと搬出を同時にこなせない",
  "保管をやめると決めたが、引き取り後の処分先が決まらない",
];

const faqs = [
  {
    q: "レンタル倉庫と実家保管、どちらを選ぶべきですか？",
    a: "荷物の性質と保管の期間で考えるのが現実的です。湿気に弱い物や、年に数回使う物であれば、環境と出し入れのしやすさを条件に保管サービスを検討する価値があります。使う予定がなく、置く期間も決まっていない物であれば、実家に置く前に手放すかどうかを判断したほうが、後の負担が小さくなります。実家に置く場合は、場所・量・期限の三点を家族と確認してから運び入れてください。費用や条件はサービス・契約により異なります。",
  },
  {
    q: "実家に置いた荷物が、そのままになっています。どうすればよいですか？",
    a: "まずは中身を確認するところから始めてください。何が入っているか分からないまま置かれている箱は、家族も手を付けられません。帰省の機会に一箱ずつ開け、残す・手放すを判断していきます。一度に終わらせようとせず、回数を分けて構いません。親が高齢で、家の片付けそのものが課題になっている場合は、実家の片付けの進め方や、本人を尊重した声のかけ方についての記事もあわせてご覧ください。",
  },
  {
    q: "保管サービスに預けられない物はありますか？",
    a: "危険物、においの強い物、生き物、現金や貴重品などが対象外とされていることが多いですが、具体的な範囲は事業者によって定められています。契約の前に、預ける予定の物が対象外に当たらないかを公式の案内と規約で確認してください。また、荷物に損害が生じた場合の扱いや、解約の申し出の期限についても、契約前に目を通しておくことをおすすめします。",
  },
  {
    q: "預けるより処分したほうがよいのは、どんな物ですか？",
    a: "この数年一度も使っておらず、今後使う場面も思い浮かばない物、同じ用途の物を別に持っている物、傷みが進んで使用が難しくなっている物は、保管しても状況が変わりにくい物です。判断に迷う場合は、期限付きの保留箱を作り、決めた時期に見直す形にしてください。処分する場合の手放し方は、自治体の区分に従うほか、買取や譲渡といったルートもあります。区分や出し方は自治体により異なりますので、市区町村の案内でご確認ください。",
  },
];

const related = [
  { href: "/trunk-room-katsuyou/", label: "トランクルームの活用", desc: "荷物を逃がして部屋を広くする方法" },
  { href: "/tenkinzoku-kazai-azuke/", label: "転勤の多い暮らしと家財", desc: "預ける・減らす・持ち歩くの選び方" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めずに進める段取り" },
  { href: "/oya-settoku-katazuke/", label: "親への声のかけ方", desc: "物を手放したがらないときの対応" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "元気なうちに持ち物を整える手順" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "手放し方の選択肢と使い分け" },
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
    { "@type": "ListItem", position: 2, name: "レンタル倉庫と実家保管の比較" },
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
    { href: "#kiso", label: "1｜預ける前に押さえること" },
    { href: "#merit", label: "2｜比べるべき3つの軸" },
    { href: "#houshin", label: "3｜費用と将来の負担をどう考えるか" },
    { href: "#steps", label: "4｜預け先を決める5ステップ" },
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

      <Breadcrumb items={[{ label: "レンタル倉庫と実家保管の比較" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          レンタル倉庫と実家保管の比較｜荷物を預ける前に確認したいこと
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          部屋が狭くなってきたけれど、捨てるのはためらわれる。そんなとき候補に挙がるのが、有料の保管サービスを借りることと、実家の空き部屋に置かせてもらうことです。費用の面だけを見れば実家保管が有利に思えます。しかし、実際に相談の場でよく聞くのは、「実家に置いた荷物が十年そのままで、親の片付けのときに困った」という話です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、契約と同意の性質の違い、保管環境と荷物の傷み方、出し入れのしやすさ、預けられない物の扱い、そして将来「誰が片付けるのか」という問題まで、比較の軸を順に整理します。なお、保管サービスの料金や条件はサービスや契約によって異なりますので、具体的な内容は各事業者の公式の案内と規約でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>有料保管は条件が書面で明確、実家保管は費用がかからない代わりに条件があいまい</li>
          <li>実家に置くなら「場所・量・期限」の三点を、運び入れる前に家族と確認する</li>
          <li>湿気や温度に弱い物は、置かれる環境の条件を先に確認する</li>
          <li>保管は量を減らさない。預ける前に一度、残すかどうかを判断する時間を取る</li>
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

      <H2 id="kiso" num="1">預ける前に押さえること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        比べる前に、二つの方法がそもそもどう違うのかを整理しておきます。ここを飛ばすと、費用の比較だけで決めてしまいがちです。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">比べるべき3つの軸</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        条件の明確さ、保管の環境、出し入れのしやすさ。この三つを比べると、どちらが自分の荷物に合っているかが見えてきます。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">費用と将来の負担をどう考えるか</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        有料の保管サービスには費用がかかります。金額は広さ、立地、屋内か屋外か、空調の有無、契約の条件によって異なりますので、複数の事業者の公式の案内で比べてください。ここで考えたいのは、その費用が何に対して払われているのかということです。空間を借りているだけでなく、条件が明確であること、環境が管理されていること、必要なときに取り出せる仕組みがあることに対して払っている、と捉えると比較しやすくなります。逆に言えば、遠くて取りに行かない、環境が荷物に合っていない、という状態であれば、その費用は目的を果たしていません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        一方、実家保管には金銭的な費用が発生しません。ただし、費用がゼロであることと、負担がゼロであることは違います。実家の一部屋が使えなくなること、親が掃除や管理に気を遣うこと、そして将来その荷物を誰かが片付けることは、いずれも実際の負担です。とくに、親が施設に入居する、家を売却する、相続が発生するといった場面では、置かれた荷物の扱いが問題になります。実家の片付けの実務は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、施設入居に備える場合は<Link href="/shisetsu-nyukyomae-kazai-seiri/" className="text-primary underline underline-offset-2">施設入居前の家財整理</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        現実的な折衷案としては、「使う頻度がある物は自宅で持つ、数年に一度の物だけを保管に回す、使う予定のない物は手放す」という三分割です。この形にすると、保管する量そのものが小さくなり、有料でも実家でも負担が抑えられます。保管サービスを使いこなす考え方は<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルームの活用</Link>、転居が多い暮らしでの家財の持ち方は<Link href="/tenkinzoku-kazai-azuke/" className="text-primary underline underline-offset-2">転勤の多い暮らしと家財</Link>で整理しています。手放すと決めた物のルートは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>をご覧ください。
      </p>

      <H2 id="steps" num="4">預け先を決める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部出す→使用頻度と期限を書き出す→条件を確認する→家族と確認する→期限に見直す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">契約条件と預けられない物は、事業者ごとに確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          保管サービスの料金、利用できる時間、空調や設備の条件、預けられない物の範囲、契約期間と解約の手続き、荷物に損害が生じた場合の扱いは、事業者および契約内容によって異なります。本記事では比較の考え方の説明にとどめており、個別の金額や条件についてお答えすることはできません。利用を検討する事業者の公式の案内と規約でご確認ください。契約をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        実家に置く場合の実務としては、箱に中身と自分の名前、置いた日付を書いておくことが役立ちます。何がいつから置かれているのかが分かれば、家族が中を開けずに状況を把握できますし、期限の管理もしやすくなります。あわせて、置いた物の一覧を家族と共有しておくと、万一のときにも困りません。親の持ち物と自分の荷物が混ざらないようにしておくことも大切です。持ち物の整理を家族全体で進める場合は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>、親が手放すことに抵抗を示す場合は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">親への声のかけ方</Link>が参考になります。
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
        保管するか手放すかを決める前に、そもそも仕分けと搬出が進まないという状況もあります。次のような場合は、片付け業者への依頼を検討してください。対応できる業者は<Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸の片付け業者</Link>や<Link href="/area/sendai/" className="text-primary underline underline-offset-2">仙台の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼する際は、廃棄物の収集運搬に必要な許可を確認できる業者を選び、作業前の見積もりで総額と作業範囲を書面にしてもらってください。保管に回す物と処分する物が混在する場合は、その線引きを事前に伝えておくと、当日の判断が早くなります。料金は物量・間取り・作業内容・地域によって異なるため、複数社を比較するのが確実です。依頼先の候補としては<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">お部屋片付け日本一</Link>や<Link href="/review/seikatsu110/" className="text-primary underline underline-offset-2">生活110番</Link>で特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。保管サービスの料金・設備・利用条件・預けられない物の範囲・契約期間・解約の手続き・荷物に損害が生じた場合の扱いは、事業者および契約内容により異なりますので、必ず各事業者の公式の案内と規約でご確認ください。家族の住まいに荷物を置く場合は、事前に所有者・居住者の同意を得てください。相続や財産の扱いに関わる判断が必要な場合は、弁護士・司法書士・税理士などの専門家にご相談ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。
      </p>
    </article>
  );
}
