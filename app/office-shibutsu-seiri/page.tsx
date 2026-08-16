import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/office-shibutsu-seiri/";
const TITLE = "退職・転勤時のオフィス私物整理｜期限までに持ち帰る段取り";
const DESC =
  "退職・転勤・異動が決まったら、デスクやロッカーにたまった私物を最終出社日までに整理して持ち帰る必要があります。会社の物と私物の線引き、書類・データの扱いで守るべき原則、リストアップから持ち帰り後の処分までの自力5ステップ、会社の情報を持ち出すなどのNG行動、量が多い場合の運搬・処分の考え方までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "オフィスの私物は「気づかないうちに増える」",
    body: "在籍年数が長いほど、デスクの引き出し・ロッカー・足元には私物がたまっていきます。予備の文房具、置き傘、サンダル、カーディガン、マグカップ、健康グッズ、書籍、もらった記念品——一つひとつは小さくても、数年分が積もると紙袋数個から段ボール数箱分になることも珍しくありません。日常的に使っている間は意識されないため、退職や転勤が決まって初めて「こんなにあったのか」と気づくのが典型的なパターンです。",
  },
  {
    title: "「会社の物」と「私物」の線引きが最初の関門",
    body: "整理を始めると、会社支給か自費購入か記憶があいまいな物が必ず出てきます。会社支給の備品（PC・モニター・事務用品・制服・社員証・名刺など）は返却が原則で、自費で買った物が私物です。判断に迷う物は自己判断で持ち帰らず、上司や総務に確認するのが安全です。また、業務で作成した書類やデータは、自分が作った物でも会社の情報資産にあたるのが一般的で、私物とは扱いが根本的に異なる点に注意が必要です。",
  },
  {
    title: "最終出社日という「動かせない期限」がある",
    body: "オフィスの私物整理が自宅の片付けと違うのは、最終出社日という動かせない期限があることです。有給消化に入ると出社の機会自体がなくなるため、実質的な期限はさらに手前になります。最終日に一気に片付けようとすると、挨拶や引き継ぎと重なってバタバタし、忘れ物や持ち帰り切れない荷物が発生しがちです。退職・異動が決まった時点から少しずつ持ち帰る「分割方式」が、もっとも確実で負担の少ない進め方です。",
  },
];

const merits = [
  {
    title: "考え方1：書類・データは「会社の規程」がすべてに優先する",
    body: "業務で作成・入手した書類、顧客情報、営業資料、社内データは、自分が関わった物でも会社の情報資産にあたるのが一般的です。持ち帰らない・私物のUSBメモリなどにコピーしないが大原則で、不要になった書類の廃棄方法（シュレッダー・機密文書回収など）も会社のルールに従います。個人の記録として残したい実績なども、就業規則や情報管理規程の範囲内で扱いを確認しましょう。この線引きを誤ると退職後のトラブルにつながりかねません。",
  },
  {
    title: "考え方2：私物は「持ち帰る・職場で処分・その場で譲る」の3択",
    body: "私物と確認できた物は、「自宅に持ち帰る」「職場のごみ分別ルールに沿って処分する」「同僚に譲る」の3択で仕分けます。ポイントは、全部持ち帰ろうとしないことです。何年も使っていない予備の文房具や古い私物の書籍は、持ち帰っても自宅で不用品になるだけです。職場で処分する場合は、事業所のごみは家庭ごみと分別ルールが異なるため、オフィスの分別区分に従って出しましょう。",
  },
  {
    title: "考え方3：量が多いときは「運搬手段」を先に決める",
    body: "私物が段ボール数箱分になる場合は、持ち帰りの手段を先に決めてから仕分けると計画が立てやすくなります。電車通勤なら1日1袋の分割持ち帰り、車があれば最終週にまとめて、量が多ければ宅配便で自宅に送る方法もあります。宅配便を使う場合は、会社からの発送が認められているか、伝票の差出人や集荷の扱いを総務に確認しましょう。自宅に持ち帰った後の不用品の処分は不用品の処分ルート比較が参考になります。",
  },
];

const steps = [
  {
    title: "期限を確認し、逆算スケジュールを立てる",
    body: "まず最終出社日と、有給消化に入る日を確認します。実質的に私物を持ち帰れるのは「最終出社日まで」ではなく「通常出社の最終日まで」と考えるのが安全です。そこから逆算し、「2週間前までに仕分け完了」「1週間前から分割持ち帰り開始」「最終週は残りわずか」という大まかな計画を立てます。引き継ぎ業務が忙しくなる時期と重なるため、私物整理は早い時期に前倒しするほど楽になります。",
  },
  {
    title: "デスク・ロッカー・共用部の私物をすべてリストアップする",
    body: "デスクの引き出し、ロッカー、足元、共用の冷蔵庫や傘立て、更衣室など、私物を置いている場所をすべて回って中身を確認します。長く在籍していると「置いたことを忘れている物」が必ずあるため、場所ごとにチェックするのが確実です。このとき、会社支給か私物か迷う物は付せんを貼るなどして別枠にしておき、後でまとめて上司や総務に確認します。リスト化すると持ち帰りの回数や手段の見積もりもできます。",
  },
  {
    title: "会社の物を返却し、書類は規程に沿って処理する",
    body: "会社支給の備品（PC・周辺機器・社員証・名刺・制服・鍵・文房具など）は、返却リストを作って漏れなく返します。業務書類は、引き継ぎに必要な物を後任者に渡し、不要になった物は会社の廃棄ルール（シュレッダー・機密文書回収）に従って処分します。自分の書類の要不要の判断基準は、書類整理の考え方と共通する部分もあるため、本・書類の整理と捨て方の記事も参考にしてください。",
  },
  {
    title: "私物を分割して持ち帰る",
    body: "仕分けが済んだ私物は、通勤の負担にならない量ずつ、数回に分けて持ち帰ります。壊れ物のマグカップや写真立ては緩衝材に包み、書籍などの重い物は1回の量を少なめにするのがコツです。量が多い場合は、会社の許可を得たうえで宅配便の利用も検討しましょう。最終出社日には「その日使った物だけ」が残っている状態が理想です。忘れがちな共用冷蔵庫の飲食物や置き傘も、最終週の前に回収しておきます。",
  },
  {
    title: "持ち帰った物を自宅で仕分けて処分する",
    body: "持ち帰った私物は、自宅で「使う・使わない」を改めて仕分けます。職場でしか使わなかった物は、自宅では出番がないことが多いため、そのまま押し入れに入れて死蔵させないのがポイントです。使わない物は自治体の分別ルールに沿って処分するか、状態がよければ売却・譲渡も選択肢です。転勤で引っ越しを伴う場合は、引っ越し前に荷物を減らす段取りとあわせて進めると効率的です。",
  },
];

const ngActions = [
  {
    title: "会社の書類・データを持ち帰る",
    body: "業務で作成した資料や顧客情報を「自分が作った物だから」と持ち帰ったり、私物のUSBメモリやクラウドにコピーしたりするのはNGです。会社の情報資産の持ち出しは、就業規則違反にとどまらず、不正競争防止法などの法的な問題に発展するおそれもあります。実績の記録を残したい場合も、自己判断せず会社に確認するのが原則です。「思い出として」の軽い気持ちの持ち出しが、退職後の大きなトラブルの種になり得ます。",
  },
  {
    title: "最終出社日に一気に片付けようとする",
    body: "最終日は挨拶回り・引き継ぎの最終確認・貸与品の返却手続きなどが重なり、想像以上に時間がありません。その日に私物整理を始めると、仕分ける余裕がなく全部を紙袋に詰め込むことになり、持ち帰り切れない・忘れ物をする・ごみの分別が雑になるといった結末になりがちです。私物整理は「最終日にやること」ではなく「最終日までに終えておくこと」と位置づけ、2週間以上前から分割で進めましょう。",
  },
  {
    title: "判断に迷う物を無断で持ち帰る・無断で捨てる",
    body: "会社支給か私物か記憶があいまいな物を、確認せずに持ち帰るのも、勝手に捨てるのもトラブルの元です。備品を持ち帰れば横領を疑われかねず、逆に会社の物を勝手に廃棄すれば備品管理上の問題になります。迷った物は必ず上司や総務に確認し、指示に従いましょう。また、共用スペースに私物を残したまま退職するのも、残された同僚に処分の負担を押しつけることになるため避けるべきです。",
  },
  {
    title: "オフィスの不用品を家庭ごみとして出す",
    body: "職場で処分する私物や、持ち帰った大量の書類・備品類を処分する際、事業所のごみと家庭ごみのルールを混同しないよう注意が必要です。オフィスから出るごみは事業系のルールに従うのが原則で、家庭のごみ集積所に持ち込むのはNGです。逆に自宅に持ち帰った私物は家庭ごみとして自治体の分別ルールに従います。量が多く判断に迷う場合は、自治体と業者どっちに頼む？の記事で処分ルートの使い分けを確認してください。",
  },
];

const judgeSigns = [
  "長年の在籍で私物が段ボール数箱分あり、通勤での持ち帰りが現実的でない",
  "転勤・引っ越しと重なり、自宅側の荷物整理も同時に発生している",
  "持ち帰った私物に大型品・処分に迷う物が多く、自宅の収納に収まらない",
  "退職する家族の代わりに、大量の私物や書籍を整理・処分する必要がある",
  "事務所の閉鎖・移転に伴い、私物整理と什器処分がまとめて発生している",
];

const faqs = [
  {
    q: "私物整理はいつから始めればよいですか？",
    a: "退職・転勤が決まった時点で始めるのが理想です。遅くとも最終出社日の2週間前には仕分けを終え、1週間前から分割で持ち帰り始めると余裕を持てます。有給消化に入ると出社機会がなくなるため、「最終出社日」ではなく「通常出社の最終日」を実質的な期限として逆算しましょう。引き継ぎが忙しくなる前の早い時期ほど、落ち着いて仕分けできます。",
  },
  {
    q: "自分で作った資料やデータは持ち帰ってはいけませんか？",
    a: "業務で作成した資料・データは、作成者が自分でも会社の情報資産にあたるのが一般的で、持ち帰りやコピーはしないのが原則です。無断で持ち出すと就業規則違反や法的な問題に発展するおそれがあります。実績の記録などを残したい場合は、自己判断せず上司や総務に確認し、会社が認めた範囲でのみ扱いましょう。",
  },
  {
    q: "私物が多くて持ち帰り切れません。宅配便で送ってもよいですか？",
    a: "宅配便での発送は有力な選択肢ですが、会社からの発送が認められているか、集荷や伝票の扱いを含めて総務に確認してから利用しましょう。会社によっては発送手続きのルールが決まっている場合があります。梱包資材は自分で用意し、壊れ物は緩衝材で保護してください。発送してよいか判断に迷う物（会社の物か不明な物など）は、送る前に必ず確認を取りましょう。",
  },
  {
    q: "事務所の閉鎖で、私物整理と什器の処分がまとめて必要です。",
    a: "事務所の閉鎖・移転では、各自の私物整理と並行して、デスク・椅子・棚などの什器や備品の処分が発生します。事業所から出る不用品は家庭ごみと扱いが異なるため、事業系の廃棄物に対応できる業者への依頼が現実的です。閉鎖に伴う片付け全体の段取りは、オフィス・店舗の閉店片付けの記事で詳しく解説しています。",
  },
];

const related = [
  { href: "/heiten-katazuke/", label: "オフィス・店舗の閉店片付け", desc: "什器・備品の処分と閉店の段取り" },
  { href: "/hon-shorui-seiri/", label: "本・書類の整理と捨て方", desc: "残すべき書類の見分け方" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去", desc: "処分前のデータ消去の手順" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離", desc: "転勤・引っ越し前に荷物を減らす" },
  { href: "/review/kurashi-market/", label: "くらしのマーケットの評判", desc: "地域の業者を比較して選べるサービス" },
  { href: "/area/tokyo/", label: "東京の片付け業者比較", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "退職・転勤時のオフィス私物整理" },
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
    { href: "#kiso", label: "1｜オフィス私物整理の3つの前提" },
    { href: "#merit", label: "2｜書類・私物・運搬の考え方" },
    { href: "#houshin", label: "3｜整理を始める前の全体方針" },
    { href: "#steps", label: "4｜私物整理の5ステップ" },
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

      <Breadcrumb items={[{ label: "退職・転勤時のオフィス私物整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          退職・転勤時のオフィス私物整理｜期限までに持ち帰る段取り
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          退職や転勤が決まると、引き継ぎや挨拶に気を取られて後回しになりがちなのが、デスクやロッカーにたまった私物の整理です。最終出社日になって「持ち帰り切れない」「会社の物か私物か分からない」と慌てるケースは少なくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、会社の物と私物の線引き、書類・データの扱いで守るべき原則、期限から逆算した5ステップ、退職後のトラブルにつながるNG行動、量が多い場合の運搬・処分の考え方までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>私物整理は最終日にやるのではなく、2週間以上前から分割で持ち帰るのが基本</li>
          <li>業務書類・データは自分が作った物でも会社の情報資産。持ち帰り・コピーはしない</li>
          <li>会社の物か私物か迷う物は、自己判断せず上司・総務に確認する</li>
          <li>量が多い・引っ越しと重なる場合は、宅配便や業者の活用で無理なく運ぶ</li>
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

      <H2 id="kiso" num="1">オフィス私物整理の3つの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        自宅の片付けと同じ感覚で始めると失敗します。オフィスならではの前提を最初に押さえておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">書類・私物・運搬の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        私物整理でつまずきやすい「書類・データの扱い」「私物の行き先」「運搬手段」の3点を整理します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">整理を始める前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        大原則は、「会社の物・書類・データの扱いは会社の規程に従い、迷ったら確認する」ことです。私物の持ち帰りそのものは単純な作業ですが、線引きを誤ると退職後のトラブルにつながります。もう一つの原則は「最終日までに終えておく」ことで、動かせない期限から逆算した分割方式が確実です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        持ち帰った後の自宅側の整理では、<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>の考え方が役立ちます。転勤で引っ越しを伴う場合は<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の断捨離</Link>を、退去期限がある場合は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去前の片付け</Link>をあわせて確認してください。私物のパソコンやスマホを処分する場合は<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">処分前のデータ消去</Link>も忘れずに。
      </p>

      <H2 id="steps" num="4">私物整理の5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。ポイントは「期限逆算→リストアップ→返却・書類処理→分割持ち帰り→自宅で処分」の流れを守ることです。
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
        私物整理そのものは自力で完結することがほとんどですが、次のような場合は運搬や処分を業者に任せるほうが現実的です。
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
        自宅側で持ち帰った不用品の処分が必要な場合は、<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような不用品回収業者が候補になります。回収を依頼する際は、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。業者選びの基本は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方</Link>を参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。備品・書類・データの扱いは勤務先の就業規則・情報管理規程により異なるため、必ず所属先のルールと指示に従ってください。ごみの分別区分は自治体・事業所により異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
