import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/hikkoshisaki-mitei-kazai/";
const TITLE = "引っ越し先が決まらないときの家財の扱い｜一時保管と荷物を減らす順番";
const DESC =
  "次の住まいが決まらないまま退去日が近づくと、家財の置き場所から決められなくなります。退去日から逆算する段取り、次が決まるまで持つ物と持たない物の線引き、預ける期間が読めないときの考え方、当面の生活に必要な物の分け方、書類と貴重品の管理、住所変更や郵便物の一般的な扱いまでを順に整理します。";
const PUBLISHED = "2026-08-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "転居先未定の片付けは「量を決める」ことから始まる",
    body: "次の住まいが決まっている引っ越しでは、間取りと収納量という明確な基準があります。入る物は持っていき、入らない物は手放す。判断の軸がはっきりしているので、迷いが少なくて済みます。ところが転居先が未定の場合、この基準そのものが存在しません。基準がないまま一つずつ「要る・要らない」を考えると、判断が止まり、結局すべてを箱に詰めて運ぶことになります。まず決めるべきは個々の物の可否ではなく、家財全体をどのくらいの量に収めるかという上限です。上限を先に置くと、その中に何を入れるかという形で判断が進みます。",
  },
  {
    title: "動かせない日付は退去日。すべてはそこから逆算する",
    body: "転居先が未定でも、退去日はたいてい決まっています。解約の申し出をした時点で明け渡しの期日が定まり、それより後ろにはずらせません。次の住まいを探すことと、家財を片付けることは同時に進みますが、片付けのほうは日付が動かない前提で組む必要があります。退去日から逆算し、いつまでに仕分けを終えるか、いつ搬出するか、預け先はいつまでに決めるかを先に置いてください。住まい探しの結果を待ってから動き出すと、退去日の直前に作業が集中し、選べる選択肢が減ります。",
  },
  {
    title: "「持っていく」「預ける」「手放す」の三つに分ける",
    body: "転居先が未定の期間は、家財を三つの行き先に分けて考えると整理しやすくなります。当面の生活に必要で手元に置く物、次の住まいが決まるまでどこかに置いておく物、この機会に手放す物です。ここで見落とされやすいのが、手元に置く物の量です。仮住まいやホテル、実家などに滞在する場合、置ける量は今の住まいよりかなり少なくなります。手元に置ける量を先に見積もってから、そこに入る物だけを選ぶ。この順番にすると、預ける量と手放す量が自然に決まっていきます。",
  },
];

const merits = [
  {
    title: "軸1：次の住まいが決まるまで持つ物・持たない物の線引き",
    body: "転居先が未定のときに残しやすいのが「新しい家で使うかもしれない物」です。カーテン、照明器具、家具の一部、季節家電などがこれにあたります。しかし、これらは次の住まいの間取りや設備が分からないと使えるかどうか判断できません。判断できない物をすべて保管すると、量が減らないまま費用と手間だけが続きます。今の住まいの寸法に合わせて選んだ物、劣化が進んでいる物、次に住む場所を選ばず使える物、という三つの見方で分けると線引きしやすくなります。",
  },
  {
    title: "軸2：預ける期間が読めないときの考え方",
    body: "転居先が未定である以上、預ける期間も未定になります。ここで「短期で済むはず」と見込んで進めると、想定が外れたときに調整が難しくなります。期間が読めないときは、延長できるか、短縮して途中でやめられるか、いつまでに申し出れば変更できるかという「動かせる余地」を先に確認しておくのが現実的です。料金や補償の内容はサービス・条件により異なるため一律には言えません。契約や解約の条件は必ず各社の書面と約款で確認し、不明な点は契約前に質問してください。",
  },
  {
    title: "軸3：手放す判断は「今の状態」で決める",
    body: "保管するかどうかを迷う物の多くは、いつか使うかもしれないという想定に支えられています。転居先が未定の状況では、この想定を検証する材料がありません。そこで判断の基準を「今の状態」に置き換えます。今この時点で壊れていないか、汚れや劣化はどうか、同じ役割の物を他に持っていないか、手に入れ直せる物か。これらは今すぐ確認できる事実です。事実で判断できる物から先に処理していくと、本当に迷う物だけが残り、そこに時間を使えるようになります。",
  },
];

const steps = [
  {
    title: "退去日を基準に、逆算のスケジュールを紙に書く",
    body: "最初にやることは、退去日を紙の右端に書き、そこから左に向かって日付を並べることです。搬出の作業日、仕分けを終える日、預け先を決める日、自治体の収集に申し込む日を置いていきます。粗大ごみの収集は申し込みから収集日まで日数がかかることがあり、地域や時期によって混み具合も違います。手続きの締め切りは、作業そのものより前に来ると考えてください。日付を紙に出すと、住まい探しの結果を待たずに始められる作業がどれかがはっきりします。",
  },
  {
    title: "当面の生活に必要な物だけを先に抜き出す",
    body: "仕分けの起点は、捨てる物を選ぶことではなく、当面の生活に必要な物を抜き出すことです。数週間から数か月を過ごすと想定して、衣類、洗面や入浴に使う物、常備薬、充電器などの電子機器、仕事や学業に使う道具、健康保険証などの身分証を一か所にまとめます。ここで大切なのは、まとめた物が実際に持ち運べる量に収まっているかを確認することです。収まらなければ量を絞ります。この一群が決まると、残りは「預ける」か「手放す」かの二択になり、判断が速くなります。",
  },
  {
    title: "書類と貴重品を分離し、自分で管理する",
    body: "契約書、保険や年金の書類、通帳や印鑑、権利に関する書類、パスポートなどの身分証は、家財とは別に扱ってください。これらは預け先に入れず、自分が常に所在を把握できる場所で管理するのが基本です。転居先が未定の期間は住所が定まらず、書類が必要になる場面が増えます。まとめて一つのファイルや箱に入れ、中身の一覧を作っておくと探す手間が減ります。デジタル機器に保存された情報の扱いは関連記事で扱っていますので、あわせて確認しておくと安心です。",
  },
  {
    title: "残った家財の量を測り、預け方を検討する",
    body: "手元に置く物と手放す物を除いたあとに残るのが、預ける対象です。ここで段ボールの個数、大型家具の点数と寸法を実際に数えてください。量が分からないままでは、どの預け方が合うかを比べられません。保管の方法には屋内型・屋外型のスペースを借りる形、荷物を預かってもらう形、実家などに置かせてもらう形があります。それぞれ費用の考え方も条件も異なり、サービス・条件により内容が変わるため、複数の候補を同じ荷物量の前提で確認するのが確実です。",
  },
  {
    title: "契約条件を書面で確認してから預け入れる",
    body: "預け先を選ぶ際は、料金の総額だけでなく、契約期間の考え方、延長や解約の申し出の時期、預けた物に生じた損害の扱い、預けられない物の種類、出し入れの可否と方法を確認してください。これらはサービス・条件によって異なるため、他社の説明や一般的な説明をあてはめず、各社の書面と約款で読むことが必要です。口頭の説明だけで進めず、書面を受け取り、分からない箇所は契約前に質問する。この一手間が、期間が延びたときの選択肢を残してくれます。",
  },
];

const ngActions = [
  {
    title: "とりあえず全部を箱に詰めて預ける",
    body: "判断が難しいからと、家財をそのまま箱に詰めて預けてしまうと、量に応じた負担が続き、次の住まいが決まったときに再び同じ仕分けをやり直すことになります。しかも、そのときは新居への搬入と同時進行になり、余裕がありません。転居先が未定の今のほうが、時間の面ではまだ動きやすい局面です。すべてを判断する必要はありませんが、明らかに使わない物、劣化している物、同じ役割の物が重複している物だけでも先に処理しておくと、後の負担が大きく変わります。",
  },
  {
    title: "住まいが決まるまで何もせず待つ",
    body: "次の住まいが決まらないと片付けの基準が決まらない、という気持ちは自然なものです。しかし退去日は動かないため、待っている間にも締め切りは近づきます。自治体の粗大ごみ収集は申し込みから日数がかかることがあり、業者に依頼する場合も日程の調整が必要です。住まいが決まっていなくても進められる作業は多くあります。明らかな不要品の処理、書類の整理、当面必要な物の抜き出し、家財の量の把握。これらは先に済ませておけます。",
  },
  {
    title: "契約や解約の条件を確認せずに預け先を決める",
    body: "転居先が未定ということは、預ける期間も未定だということです。にもかかわらず、期間の考え方や解約の申し出の時期を確認しないまま契約すると、住まいが決まったときに思うように動けなくなることがあります。延長できるのか、途中でやめられるのか、申し出はいつまでに必要か。預けられない物の種類や、損害が生じた場合の扱いも含め、条件はサービスによって異なります。必ず各社の書面と約款で確認し、不明点は契約前に解消しておいてください。",
  },
  {
    title: "郵便物と各種の連絡先を放置する",
    body: "住まいが定まらない期間は、郵便物や連絡が届かなくなりやすい時期です。契約や手続きに関する書類が受け取れないと、後になって困ることがあります。郵便物の転送や住所の届出については、郵便局や自治体の窓口、各契約先で扱いが定められていますので、それぞれの案内で確認してください。実家や勤務先など、一時的に受け取れる場所を決めておくのも一つの方法です。制度や手続きの要件は状況によって異なるため、所管の窓口で確認するのが確実です。",
  },
];

const judgeSigns = [
  "退去日までの日数が短く、自力で搬出まで終える見通しが立たない",
  "大型の家具や家電が複数あり、一人では動かせない",
  "仕事や住まい探しと並行していて、作業に充てられる時間が取れない",
  "遠方への転居で、現地に滞在できる日数が限られている",
  "手放す物の量が多く、自治体の収集だけでは期限に間に合わない",
];

const faqs = [
  {
    q: "引っ越し先が決まらないまま退去日が来そうです。何から手をつければよいですか？",
    a: "まず退去日を起点に逆算のスケジュールを作り、手続きの締め切りを先に押さえてください。そのうえで、当面の生活に必要な物を抜き出し、書類と貴重品を分け、残った家財の量を数えます。この三つは住まいが決まっていなくても進められます。量が分かれば預け方を比べられるようになります。粗大ごみの収集は申し込みから日数がかかることがありますので、地域の案内で早めに確認しておくと安心です。",
  },
  {
    q: "預ける期間が読めないのですが、どう考えればよいですか？",
    a: "期間を正確に見込むより、後から動かせる余地を確保しておくほうが現実的です。延長できるか、途中で解約できるか、変更の申し出はいつまでに必要かを契約前に確認してください。料金や補償の内容はサービス・条件により異なるため、一般的な説明をあてはめず、各社の書面と約款で読むことが必要です。あわせて、預けられない物の種類や出し入れの方法も確認しておくと、後で困りにくくなります。",
  },
  {
    q: "次の住まいで使うか分からない物は、預けるべきでしょうか？",
    a: "今の住まいの寸法に合わせて選んだ物（カーテンや一部の家具など）は、次の間取りで使えるとは限りません。劣化が進んでいる物、同じ役割の物を重複して持っている物も、保管の対象から外しやすい部類です。逆に、場所を選ばず使える物や、手に入れ直すのが難しい物は残す判断になりやすいでしょう。判断できない物をすべて残すと量が減らないため、今の状態で確認できる事実を基準にしてください。",
  },
  {
    q: "住所が定まらない間、郵便物や手続きはどうすればよいですか？",
    a: "郵便物の転送や住所に関する届出は、郵便局や自治体の窓口、契約している各社でそれぞれ扱いが定められています。要件や手続きの方法は状況によって異なりますので、所管の窓口や各社の案内でご確認ください。一時的に受け取れる場所を決めておく、重要な書類は自分で持ち運ぶ、といった備えも有効です。手続きに関する判断が必要な場合は、該当する窓口や専門家にご相談ください。",
  },
];

const related = [
  { href: "/trunk-room-katsuyou/", label: "トランクルームの活用", desc: "荷物を逃がして部屋を広くする" },
  { href: "/rental-souko-jikka-hokan/", label: "レンタル倉庫と実家保管", desc: "預ける前に確認したいこと" },
  { href: "/tenkinzoku-kazai-azuke/", label: "転勤の多い暮らしと家財", desc: "預ける・減らす・持ち歩く" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "期限までに片付け切る方法" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の持ち物整理", desc: "運ぶ前に量を減らす考え方" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "申し込みから収集までの手順" },
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
    { "@type": "ListItem", position: 2, name: "引っ越し先が決まらないときの家財の扱い" },
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
    { href: "#kiso", label: "1｜転居先が未定のまま退去するときの前提" },
    { href: "#merit", label: "2｜迷いを減らす3つの軸" },
    { href: "#houshin", label: "3｜退去日から逆算する全体方針" },
    { href: "#steps", label: "4｜転居先未定で家財を片付ける5ステップ" },
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

      <Breadcrumb items={[{ label: "引っ越し先が決まらないときの家財の扱い" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          引っ越し先が決まらないときの家財の扱い｜一時保管と荷物を減らす順番
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月24日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          転勤の内示が急に出た、家庭の事情で今の住まいを離れることになった、建て替えや売却の都合で退去日が先に決まった。理由はさまざまですが、次の住まいが決まらないまま退去日だけが近づく状況は、けっして珍しいものではありません。困るのは、家財をどこに置くかが決まらないと、何を残すかも決められないという行き詰まりです。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、転居先が未定という状況に絞って、退去日から逆算する段取り、次の住まいが決まるまで持つ物と持たない物の線引き、預ける期間が読めないときの考え方、当面の生活に必要な物の分け方、書類と貴重品の管理、住所や郵便物の一般的な扱いを順に整理します。なお、保管サービスの料金や補償の内容はサービス・条件により異なりますので、契約や解約の条件は必ず各社の書面でご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>住まい探しの結果を待たず、動かない退去日から逆算して段取りを組む</li>
          <li>家財は「手元に置く」「預ける」「手放す」の三つに分け、手元の量から先に決める</li>
          <li>今の住まいの寸法に合わせた物・劣化した物・重複する物は保管の対象から外しやすい</li>
          <li>期間が読めないときは、延長・解約・変更の申し出時期を契約前に書面で確認する</li>
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

      <H2 id="kiso" num="1">転居先が未定のまま退去するときの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        通常の引っ越しと違い、判断の基準になる新居の情報がありません。まずはこの状況の特徴を押さえておきます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">迷いを減らす3つの軸</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        新居の情報がない状態でも、次の三つの軸を使うと判断を進められます。物ごとに迷うのではなく、軸に当てはめていく形です。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">退去日から逆算する全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        転居先が未定の片付けでいちばん起こりやすいのは、住まいが決まるまで判断を保留し続けることです。気持ちとしては自然ですが、退去日は動かないため、保留した分だけ後半に作業が集中します。そこで、住まい探しの進み具合とは切り離して進められる作業を先に洗い出してください。明らかに使わない物の処理、書類の整理、当面必要な物の抜き出し、家財の量の把握。この四つは新居の情報がなくても進みます。逆に、新居が決まらないと決められない判断はごくわずかで、多くは今の状態を見れば結論が出ます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次に、手続きの締め切りが作業の締め切りより前に来ることを意識してください。自治体の粗大ごみは申し込んでから収集日までに日数がかかることがあり、時期によっては混み合います。業者に依頼する場合も、見積もりと日程調整の時間が必要です。退去日の直前になってから動くと、選べる方法が限られ、条件を比べる余裕もなくなります。逆算のスケジュールを紙に書き出し、締め切りの順に並べておくと、今日やるべきことが自然に決まります。粗大ごみの手順は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>で確認できます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        そのうえで、預ける量をできるだけ小さくすることを目標に置きます。預ける量は、そのまま次の住まいが決まったときの搬入量になり、費用と手間の両方に影響します。運ぶ前に量を減らす考え方は<Link href="/hikkoshi-mae-danshari/" className="text-primary underline underline-offset-2">引っ越し前の持ち物整理</Link>が参考になります。預け先の種類ごとの違いは<Link href="/trunk-room-katsuyou/" className="text-primary underline underline-offset-2">トランクルームの活用</Link>と<Link href="/rental-souko-jikka-hokan/" className="text-primary underline underline-offset-2">レンタル倉庫と実家保管の比較</Link>で整理していますので、量を数えたあとに読み比べてみてください。
      </p>

      <H2 id="steps" num="4">転居先未定で家財を片付ける5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        逆算する→当面必要な物を抜く→書類と貴重品を分ける→残りの量を測る→条件を書面で確認して預ける。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">保管の料金・補償・契約条件は各社の書面で確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          荷物を預けるサービスは、屋内型や屋外型のスペースを借りる形、荷物を預かってもらう形など複数の方式があり、料金の考え方、預けた物に生じた損害の扱い、預けられない物の種類、出し入れの可否と方法、契約期間や解約の申し出時期は、サービス・条件により異なります。本記事は一般的な考え方の整理にとどめており、特定のサービスの内容を示すものではありません。契約や解約の条件は必ず各社の書面と約款でご確認いただき、不明な点は契約前にご質問ください。契約をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放すと決めた物は、行き先を分けて処理していきます。自治体の収集に出せる物、家電リサイクル法の対象とされる品目、まだ使える状態で買い取りや譲渡に回せる物では、手順も窓口も異なります。行き先ごとの整理は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>、自治体と業者の役割の違いは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>で扱っています。パソコンやスマートフォンを手放す場合は、データの取り扱いを先に済ませておく必要があります。手順は<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去</Link>を参照してください。
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
        自力で進めるか依頼するかで迷ったときは、次のような状況が判断の目安になります。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の記事から探せます。
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
        依頼先を選ぶ際は、廃棄物の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲を明記することを基準にしてください。転居先が未定の場合は、搬出したあとの行き先が分かれること、日程が動く可能性があることも事前に伝えておくと、行き違いが減ります。見積もり書の読み方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積もり書の見方</Link>、引っ越しに伴う片付けの依頼先は<Link href="/service/hikkoshi/" className="text-primary underline underline-offset-2">引っ越し時の片付けサービス</Link>で整理しています。依頼先の候補としては<Link href="/review/blue-clean/" className="text-primary underline underline-offset-2">ブルークリーン</Link>や<Link href="/review/kataduke-nihonichi/" className="text-primary underline underline-offset-2">お部屋片付け日本一</Link>で対応の範囲や特徴を比較できます。
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
        本記事は一般的な知識の提供を目的としたものです。保管サービスの料金・補償の内容・契約や解約の条件は、サービス・条件により異なりますので、必ず各社の書面と約款でご確認ください。片付け・不用品回収の料金についても、物量・間取り・建物の条件・作業内容・地域・事業者により異なります。廃棄物の収集運搬や家電の処分に関する手続き、住所の届出や郵便物の取り扱いについては、自治体・所管の窓口および各社の案内でご確認ください。賃貸借契約の解約や明け渡しに関する個別の判断は、契約内容と事情によって異なりますので、まず管理会社・貸主にご相談のうえ、判断が必要な場合は弁護士等の専門家にご相談ください。契約や請求をめぐって不安があるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
