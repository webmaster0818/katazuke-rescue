import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shisetsu-nyukyomae-kazai-seiri/";
const TITLE = "施設入居前の家財整理｜持ち込む物の選び方と残す家財の整理段取り";
const DESC =
  "老人ホームなどへの施設入居前の家財整理は、「持ち込む物の選定」と「残す家財の扱いの決定」の2段階で考えると迷いません。施設の持ち込みルールの確認方法、本人の気持ちを尊重した仕分けの進め方、自力で進める5ステップ、NG行動、業者に任せる判断基準までを解説します。";
const PUBLISHED = "2026-08-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "施設入居前の整理は「持ち込む物」と「残す家財」の2段階",
    body: "施設入居前の家財整理は、大きく2つの作業に分かれます。1つ目は、施設の居室に持ち込む物を選ぶ作業。2つ目は、これまでの住まいに残る家財をどうするか（保管・譲渡・処分・空き家管理など）を決める作業です。この2つを同時に考えると混乱しやすいため、まず持ち込む物を確定させ、そのうえで残った物の扱いを決める、という順番で進めるのが基本です。",
  },
  {
    title: "持ち込める物・量は施設ごとに大きく異なる",
    body: "居室の広さ、備え付けの家具の有無、持ち込みが認められる家電の種類、火気や刃物の扱いなどのルールは、施設によって大きく異なります。一般論で判断せず、入居予定の施設から居室の間取り図と持ち込みに関する案内を早めに取り寄せ、疑問点は施設に直接確認してください。冷蔵庫やテレビなどの家電、仏壇や大型家具の持ち込み可否は、特に事前確認が必要な項目です。",
  },
  {
    title: "主役は入居するご本人。仕分けの判断は本人中心に",
    body: "施設入居は、本人にとって長年の住まいと持ち物に区切りをつける大きな節目です。家族から見ると「もう使わない物」でも、本人にとっては暮らしの支えだった物かもしれません。持ち込む物の選定は本人の意思を中心に進め、迷う物は無理に処分せず保留にする余裕を持つことが、納得感のある整理につながります。本人が判断に疲れないよう、1日の作業量を区切ることも大切です。",
  },
];

const merits = [
  {
    title: "入居後の暮らしに「なじみの物」があると安心につながる",
    body: "使い慣れた寝具や湯のみ、家族の写真、長年の愛用品など、なじみのある物が身近にあることは、新しい環境で生活を始める本人の安心材料になると言われます。持ち込む量は限られますが、「実用品」だけでなく「本人の心の支えになる物」を選定に含める視点を持つと、入居後の暮らしの質が変わります。",
  },
  {
    title: "早く始めるほど、本人のペースで選べる",
    body: "入居日の直前に慌てて仕分けると、本人が考える時間を持てないまま、家族の判断で物が処分されがちです。入居が決まったら早めに整理を始め、本人が1つ1つ納得しながら選べる時間を確保しましょう。体調や気持ちに波がある場合は、調子のよい時間帯に短時間ずつ進めるのが現実的です。",
  },
  {
    title: "残す家財の方針を先に決めると、後の負担が大きく減る",
    body: "住まいが持ち家か賃貸かで、残る家財への対応は大きく変わります。賃貸なら退去期限までに家財を運び出す必要があり、持ち家なら当面そのまま残す・空き家として管理する・売却や賃貸に向けて片付けるなどの選択肢があります。方針が決まらないまま放置すると、後で家族がまとめて対応することになるため、入居のタイミングで家族と方針だけでも話し合っておくことをおすすめします。",
  },
];

const steps = [
  {
    title: "施設から間取り・持ち込みルールを取り寄せ、リストを作る",
    body: "最初に、入居予定の施設から居室の間取り図と持ち込み品の案内を入手します。そのうえで「必ず持ち込む物（衣類・日用品・服薬関係など）」「持ち込みたい物（愛用品・思い出の品）」「施設に確認が必要な物（家電・仏壇など）」の3つに分けたリストを作ると、その後の仕分けが迷いなく進みます。衣類の量は施設の収納量と洗濯の仕組みに合わせて調整します。",
  },
  {
    title: "貴重品・重要書類を先に1か所へまとめる",
    body: "通帳、印鑑、保険証券、年金関係、不動産の権利証などの重要書類と貴重品を、仕分け作業を始める前に探し出して1か所にまとめます。これを最初に行うのは、後の作業で誤って処分するリスクをなくすためです。施設に持ち込む物と自宅・家族が保管する物に分け、保管場所と管理者を本人と家族で共有しておきましょう。",
  },
  {
    title: "本人と一緒に「持ち込む物」を確定させる",
    body: "リストに沿って、本人と一緒に持ち込む物を選びます。ポイントは、実用品は施設の設備と重複しないよう間取り図と照らして選ぶこと、思い出の品は「写真立て2つ」「箱1つ分」など量の目安を決めて本人に選んでもらうことです。迷った物は「保留箱」に入れて自宅に残し、入居後に必要になったら届ける方式にすると、本人が決断を急がされずに済みます。",
  },
  {
    title: "残す家財を「保管・譲渡・売却・処分」に仕分ける",
    body: "持ち込む物が確定したら、残る家財の扱いを決めます。家族が使う物・引き取る物、親族や知人に譲る物、リサイクルショップや買取で手放す物、処分する物に分けていきます。まだ使える家具・家電は買取やリサイクルの活用も検討しましょう。処分ルートの選び方は不用品の処分ルート比較の記事で詳しく解説しています。",
  },
  {
    title: "住まいの今後（退去・空き家管理・売却）に合わせて片付けを完了させる",
    body: "賃貸の場合は退去日から逆算して搬出と処分を終わらせます。持ち家の場合は、当面残すなら通気や防犯などの管理方法を決め、売却・賃貸に出すなら家財の全撤去まで進めます。退去期限がある場合の段取りは退去前の片付けの記事、家を空ける場合の管理は空き家の片付けの記事が参考になります。物量が多い場合は、この段階で業者の利用を検討すると確実です。",
  },
];

const ngActions = [
  {
    title: "本人の同意なく家族だけで持ち物を処分する",
    body: "入居準備の時間がないからと、本人に確認せず持ち物を処分してしまうと、本人の喪失感や家族への不信につながります。施設での新生活を前向きに始めるためにも、仕分けの判断は本人中心に進め、本人が疲れているときは作業を止める勇気を持ちましょう。認知機能の低下などで本人の判断が難しい場合も、本人の好みや習慣を知る家族が本人の視点に立って選ぶことが大切です。",
  },
  {
    title: "施設に確認せず家電や大型家具を運び込む",
    body: "居室の広さや設備、安全管理の方針により、持ち込めない家電・家具は珍しくありません。搬入してから持ち帰ることになると、本人にも家族にも余計な負担がかかります。冷蔵庫・電気ポット・仏壇・大型家具など判断が分かれやすい物は、必ず事前に施設へ確認してください。",
  },
  {
    title: "「とりあえず全部残す」で実家をそのままにする",
    body: "残す家財の方針を決めないまま家を閉めると、家財の傷みや住まいの管理問題が後から重くのしかかります。特に賃貸の場合、家賃を払い続けるコストも発生します。すぐに全部を片付ける必要はありませんが、「いつまでに・誰が・どうするか」の方針だけは入居のタイミングで決めておきましょう。",
  },
  {
    title: "無許可の回収業者に家財をまとめて引き渡す",
    body: "家財の一括処分では、まとまった量を安易に無許可の回収業者へ渡してしまうトラブルに注意が必要です。廃棄物の処理に必要な許可を確認できない業者は、不法投棄や高額請求のリスクがあります。許可や実績を確認できる業者を選びましょう。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "入居日や退去日が決まっており、期限までに家財の搬出を終える必要がある",
  "大型家具・家電が多く、家族だけでは運び出せない",
  "遠方に住んでいて、実家の整理に通える回数が限られている",
  "仕分けから搬出・処分まで一括で任せて、本人の見送りと手続きに集中したい",
  "残す家財の量が多く、買取との併用など効率的な手放し方を相談したい",
];

const faqs = [
  {
    q: "施設に持ち込む物はどう選べばよいですか？",
    a: "施設から居室の間取り図と持ち込みの案内を取り寄せ、「必需品」「愛用品」「要確認品」の3分類でリスト化してから選ぶのがおすすめです。実用品は施設の設備と重複しない範囲で、思い出の品は量の目安を決めて本人に選んでもらいます。持ち込み可否のルールは施設ごとに異なるため、迷う物は必ず施設に確認してください。",
  },
  {
    q: "実家に残る大量の家財はいつ片付けるべきですか？",
    a: "決まった正解はありませんが、「いつまでに・誰が・どうするか」の方針だけは入居のタイミングで家族と決めておくことをおすすめします。賃貸なら退去期限までの片付けが必要です。持ち家で当面残す場合も、貴重品と重要書類の回収、傷みやすい物の処分、通気・防犯などの管理方法は先に決めておくと安心です。",
  },
  {
    q: "本人が「全部持って行きたい」と言う場合はどうすればよいですか？",
    a: "気持ちを否定せず、居室の間取り図を一緒に見ながら「置ける量」を具体的に共有するところから始めましょう。持ち込めない物も、処分ではなく自宅で保管する・家族が預かる・写真に残すなどの選択肢を示すと、本人が手放す決断をしやすくなります。迷う物は保留箱に残し、入居後に必要なら届ける方式も有効です。",
  },
  {
    q: "施設入居前の家財整理を業者に頼むと費用はどのくらいかかりますか？",
    a: "費用は物量・間取り・搬出条件・作業範囲（仕分けの立ち会い、買取の併用、全撤去かどうかなど）によって大きく異なるため、一律にいくらとは言えません。複数社から見積もりを取り、作業範囲と内訳を比較して判断するのが確実です。費用の考え方は当サイトの費用相場ページで解説しています。",
  },
];

const related = [
  { href: "/kaigo-juukankyou-seiri/", label: "介護に備える部屋の片付け", desc: "動線・転倒対策を含む住環境の整え方" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "元気なうちに進める持ち物と情報の整理" },
  { href: "/akiya-katazuke/", label: "空き家の片付けと管理", desc: "残置物の処分と家を空ける際の管理" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限から逆算する搬出と処分" },
  { href: "/review/minna-ihinseiri/", label: "みんなの遺品整理の評判", desc: "生前整理・家財整理にも対応する業者紹介" },
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
    { "@type": "ListItem", position: 2, name: "施設入居前の家財整理" },
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
    { href: "#kiso", label: "1｜施設入居前の家財整理の基礎知識" },
    { href: "#merit", label: "2｜早めに始めたい3つの理由" },
    { href: "#houshin", label: "3｜進め方の全体方針" },
    { href: "#steps", label: "4｜自力で進める家財整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "施設入居前の家財整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          施設入居前の家財整理｜持ち込む物の選び方と残す家財の整理段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月13日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「親の施設入居が決まったが、家の荷物をどうすればいいのか」「本人が持って行きたい物と、施設に置ける量が合わない」——施設入居前の家財整理は、限られた期間の中で、持ち物の選定と住まいに残る家財の扱いを同時に考える必要がある、悩みの多い作業です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、施設入居前の整理を「持ち込む物の選定」と「残す家財の方針決め」の2段階に分けて、確認すべきこと、本人の気持ちを尊重した進め方、自力で進める5つのステップ、避けるべきNG行動、業者に任せる判断基準までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>整理は「持ち込む物の選定」→「残す家財の方針決め」の2段階で進めると迷わない</li>
          <li>持ち込める物・量は施設ごとに異なる。間取り図と持ち込みルールを早めに取り寄せる</li>
          <li>仕分けの判断は本人中心。迷う物は保留箱に残し、決断を急がせない</li>
          <li>残す家財は「いつまでに・誰が・どうするか」の方針を入居のタイミングで決めておく</li>
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

      <H2 id="kiso" num="1">施設入居前の家財整理の基礎知識</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、この整理がどのような作業で構成され、何を最初に確認すべきかを整理しておきましょう。全体像がわかると、限られた期間でもやるべきことが明確になります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">早めに始めたい3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        施設入居前の整理は、入居が決まったらできるだけ早く始めることをおすすめします。理由は次の3つです。
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
        施設入居前の整理の大原則は、「施設のルール確認が先、貴重品の確保が次、仕分けは本人中心、残す家財の方針は入居までに」という順番です。この流れを守ると、誤って大事な物を処分するリスクと、本人の気持ちを置き去りにするリスクの両方を減らせます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        物の仕分けそのものの考え方は、本人が主体で進める<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>と共通します。また、介護サービスの利用と並行して住環境を整える場合は<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護に備える部屋の片付け</Link>も参考にしてください。
      </p>

      <H2 id="steps" num="4">自力で進める家財整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際に手を動かす手順を5つのステップで紹介します。ポイントは「ルール確認が先、貴重品が次、持ち込み確定→残す家財の順」です。
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
        家電の処分は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>、布団類は<Link href="/futon-mattress-shobun/" className="text-primary underline underline-offset-2">布団・マットレスの処分方法</Link>で解説しています。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。
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
        次のいずれかに当てはまる場合は、家族だけで抱え込まず、家財整理に対応する業者への相談を検討しましょう。仕分けの判断は本人と家族が行い、搬出・処分を業者に任せる分担が現実的です。
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
        生前整理・家財整理に対応する業者を探すなら、審査を通過した業者を紹介する<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や、複数業者へ一括で見積もりを依頼できる<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>のようなサービスも活用できます。大阪など各都市の業者は<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者比較</Link>で紹介しています。
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
        本記事は一般的な知識の提供を目的としたものです。施設への持ち込み品のルールは施設ごとに異なるため、必ず入居予定の施設にご確認ください。介護保険や入居契約に関わる判断は、担当のケアマネジャーや施設、必要に応じて専門家にご相談ください。粗大ごみの出し方・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
