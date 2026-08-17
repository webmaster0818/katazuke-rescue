import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/tanshin-funin-taikyo-katazuke/";
const TITLE = "単身赴任先の退去片付け｜1週間で終える段取りと処分の進め方";
const DESC =
  "単身赴任の解除や転勤で赴任先の部屋を引き払うときは、物量こそ少ないものの、仕事を続けながら短期間で退去まで終える段取りが問われます。退去日から逆算した1週間プラン、自治体収集が間に合わない場合の処分ルートの切り替え、備え付け設備と自分の持ち物の区別、残置物を残さないための最終確認までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "単身赴任の退去は「物量は少ないが、使える時間がもっと少ない」",
    body: "単身赴任先の部屋は、家族で暮らす家に比べれば物量はずっと少なく、ワンルーム〜1LDKに家具家電が一通り、という規模が典型です。それでも退去片付けが大変になるのは、平日は仕事があり、作業に使えるのが夜と週末だけだからです。さらに辞令から退去までの期間が短いケースも多く、「気づけば退去日まで1週間しかない」という状況は珍しくありません。物量ではなく時間の制約が主戦場だと認識し、初日に全体の段取りを決めてしまうことが、単身赴任の退去片付けを成功させる最大のポイントです。",
  },
  {
    title: "「家具家電を自分で揃えたか」で難易度が大きく変わる",
    body: "同じ単身赴任の退去でも、家具家電付き物件やレンタル家電を使っていた場合と、冷蔵庫・洗濯機・ベッドを自分で購入した場合とでは、作業量がまったく違います。前者は私物の荷造りと返却手続きが中心で、1週間あれば余裕を持って終えられます。後者は大型家具・家電の処分という時間のかかる工程が加わるため、処分ルートの手配を最優先で動かす必要があります。まず自分の部屋がどちらの型かを整理し、「返す物・送る物・処分する物」の3分類で全体量を把握することから始めましょう。",
  },
  {
    title: "退去日・返却物・立ち会いの条件を最初に確認する",
    body: "段取りを組む前に、賃貸借契約の退去日と、鍵・備え付け設備など返却すべき物、退去立ち会いの有無と日時を確認します。会社契約（社宅扱い）の物件では、解約手続きや原状回復の窓口が会社の総務部門になっていることもあり、自分で判断できる範囲が個人契約と異なります。勤務先の社宅規程や担当部署への確認を先に済ませておくと、「自分がやるべき片付けの範囲」が明確になります。退去時に荷物が残っていると契約上の問題になり得るため、「退去日に残置物ゼロ」を絶対のゴールとして逆算しましょう。",
  },
];

const merits = [
  {
    title: "工夫1：処分ルートは初日に手配する（自治体収集は間に合わないことがある）",
    body: "自治体の粗大ごみ収集は申し込みから収集日まで日数がかかることがあり、退去まで1週間の場合は間に合わない可能性があります。だからこそ、処分が必要な大型品の有無を初日に確定し、その日のうちに申し込みまで済ませるのが鉄則です。自治体収集が間に合わない場合は、処理施設への自己搬入（実施の有無・条件は自治体により異なります）や、不用品回収業者への依頼に切り替えます。粗大ごみの一般的な申し込みの流れは粗大ごみ申し込みの流れの記事で解説しています。",
  },
  {
    title: "工夫2：「自宅に送る物」を最小限に絞る",
    body: "赴任先の荷物を段ボールに詰めて自宅へ送るとき、迷った物を全部送ってしまうと、今度は自宅の収納を圧迫します。単身赴任中しか使わなかった物（単身用の小型家電、赴任先用の日用品、現地で増えた雑貨）は、自宅に持ち帰っても使わない可能性が高い物です。「自宅に同じ物がないか」「帰任後の生活で本当に使うか」を基準に、送る物を厳選しましょう。荷物を減らす考え方は引っ越し前の断捨離の記事が参考になります。送る量が減れば、輸送の手間も費用も片付けの時間も一度に減ります。",
  },
  {
    title: "工夫3：平日の夜は「仕分けと手配」、週末は「搬出と清掃」に割り当てる",
    body: "仕事をしながらの退去片付けは、作業の種類を時間帯で分けると効率が上がります。平日の夜にできるのは、引き出しひとつ・棚ひとつ単位の仕分け、不用品の写真撮影と買取・回収の見積もり依頼、粗大ごみの申し込みといった、短時間で区切れる作業です。体力と時間が必要な大型品の搬出、荷造りの仕上げ、部屋全体の掃除は週末にまとめます。この割り当てを最初にカレンダーへ書き込んでおくと、「今日は何をすべきか」を毎晩考えずに済み、疲れていても手が動きます。",
  },
];

const steps = [
  {
    title: "退去7日前：全体把握と「返す・送る・処分」の3分類",
    body: "初日にやることは、作業ではなく段取りの確定です。部屋の物をざっと見渡し、備え付け・レンタル品など「返す物」、自宅へ「送る物」、赴任先で手放す「処分する物」に頭の中で3分類します。処分する物のうち大型品（ベッド・冷蔵庫・洗濯機・ソファなど）をリスト化し、その日のうちに自治体の粗大ごみ申し込み、または回収業者・買取サービスへの見積もり依頼まで済ませます。冷蔵庫・洗濯機・エアコンなどは家電リサイクル法の対象で自治体の粗大ごみに出せないため、処分ルートの確認は家電リサイクル法対象品の処分の記事も参考にしてください。",
  },
  {
    title: "退去6〜5日前：冷蔵庫の中身と消耗品を計画的に使い切る",
    body: "退去直前に慌てないために、食材・調味料・洗剤などの消耗品は5日前から「買い足さずに使い切る」モードに切り替えます。冷蔵庫は退去前日までに空にし、電源を抜いて霜取りと水抜きをする時間を確保する必要があるため、中身の消費は早めに始めるほど楽になります。冷蔵庫・洗濯機を手放す・運ぶ前の準備は冷蔵庫・洗濯機の処分前準備の記事で詳しく解説しています。並行して、平日の夜に引き出し・棚単位の仕分けを進め、送る物の段ボール詰めを少しずつ始めます。",
  },
  {
    title: "退去4〜3日前：荷造りを仕上げ、配送と大型品の引き取り日を確定する",
    body: "自宅へ送る荷物の荷造りをこの段階でほぼ仕上げ、配送の集荷日を退去2日前までに設定します。当日まで使う物（数日分の着替え・洗面用具・充電器・重要書類）だけを残し、それ以外はすべて箱に入れてしまうのがコツです。大型品の回収・買取の日程も、遅くとも退去前日までに完了するよう最終確定します。この時点で「引き取り手が決まっていない大型品」が残っていたら、対応の早い回収業者への切り替えを判断するタイミングです。判断基準は自治体回収と業者の使い分けの記事が参考になります。",
  },
  {
    title: "退去2日前〜前日：大型品の搬出と部屋の清掃",
    body: "大型品の引き取りと荷物の発送が終わると、部屋は一気に空に近づきます。ここからは清掃です。賃貸の退去では、日常的な掃除の範囲で部屋をきれいにして返すのが基本で、床の掃除機がけと拭き掃除、水回り・キッチンの清掃、ベランダのごみ拾いまでやっておくと立ち会いも気持ちよく進みます。冷蔵庫の霜取り・水抜き、洗濯機の水抜きも前日までに済ませます。掃除をどこまでやるかや原状回復との関係は、賃貸の原状回復と片付けの線引きの記事で詳しく解説しています。",
  },
  {
    title: "退去当日：残置物ゼロの最終確認と鍵の返却",
    body: "当日は、収納の中・ベランダ・玄関周り・郵便受けを含めて「残置物ゼロ」を最終確認します。見落としやすいのは、洗濯機置き場の防水パンの奥、備え付け照明に付けた自分のシーリングライト、ベランダの物干し用品、駐輪場の自転車です。自転車を赴任先で処分する場合は防犯登録の抹消という手続きがあるため、自転車・バイクの処分の記事を参考に前日までに済ませておきましょう。最後に電気・ガス・水道の停止手続きと転送届を確認し、立ち会いを経て鍵を返却すれば完了です。",
  },
];

const ngActions = [
  {
    title: "「物が少ないから前日でも間に合う」と作業を後ろ倒しにする",
    body: "単身赴任の部屋は物量が少ないため、「週末に一気にやれば終わる」と考えがちです。しかし、処分ルートの手配・配送・清掃には自分の作業以外の待ち時間（収集日・集荷日・引き取り日）が含まれ、これは前日に頑張っても短縮できません。特に自治体の粗大ごみ収集とリサイクル家電の引き取りは日数がかかることがあり、後ろ倒しにするほど選択肢が業者依頼だけに絞られていきます。作業は後半に回せても、手配だけは初日に終える。この一点を守るだけで、退去週の負担は大きく変わります。",
  },
  {
    title: "備え付けの設備・家具を自分の物と混同して処分する",
    body: "家具家電付き物件やレンタル品を利用している場合、備え付けの物を誤って処分すると弁償の問題になりかねません。エアコン・照明・ガスコンロ・カーテンレールなどは物件側の設備であることが多く、逆に自分で取り付けた照明やカーテンは持ち出しか処分が必要です。入居時の設備一覧や契約書、レンタル品の契約内容を確認し、「これは誰の物か」が曖昧な物は管理会社や貸主に確認してから扱いを決めましょう。会社契約の物件では、総務部門への確認も忘れずに。",
  },
  {
    title: "処分し切れなかった物を部屋に残して退去する",
    body: "「少しくらい残しても大丈夫だろう」と家具や家電を部屋に残して退去するのは避けてください。賃貸の部屋に残された私物は貸主が自由に処分できるわけではなく、撤去や処分の費用を後から請求される可能性もあり、トラブルのもとになります。間に合わないと分かった時点で、即日対応をうたう回収業者への依頼や、退去日の調整の相談など、残さないための手を打つのが正解です。退去期限が迫った状況での段取りは退去片付けの記事でも解説しています。",
  },
  {
    title: "疲れからの「全部処分」で、必要な物や思い出の品まで手放す",
    body: "退去期限のプレッシャーと仕事の疲れが重なると、「考えるのが面倒だから全部捨てる」という極端な判断に振れやすくなります。しかし、赴任先の荷物の中には、仕事の書類や契約関係の控え、現地での思い出の品など、後から取り返しのつかない物も交ざっています。迷った物は無理にその場で判断せず、「迷い箱」を1箱だけ作って自宅に送り、帰任後に落ち着いて見直すのが現実的です。1箱に収まらない量を迷うようなら、そもそも仕分けの基準を先に決め直しましょう。",
  },
];

const judgeSigns = [
  "退去まで日数がなく、自治体の粗大ごみ収集や家電の引き取りが間に合わない",
  "ベッド・冷蔵庫・洗濯機など、自力で搬出できない大型品が複数ある",
  "平日は深夜帰宅で、週末1〜2回の作業だけでは物理的に終わらない",
  "赴任先と自宅の往復で、退去日に現地で長時間の作業ができない",
  "エレベーターなし物件の上層階など、搬出の負担が大きい",
];

const faqs = [
  {
    q: "退去まで1週間しかありません。何から手を付ければよいですか？",
    a: "最初にやるべきは作業ではなく手配です。処分が必要な大型品をリスト化し、初日のうちに自治体の粗大ごみ申し込み、または回収業者・買取サービスへの見積もり依頼を済ませてください。収集や引き取りの待ち時間は自分の努力で短縮できないため、手配が1日遅れるとそのまま選択肢が減ります。並行して、平日の夜は小さな仕分け、週末は搬出と清掃という割り当てで進めるのが現実的です。",
  },
  {
    q: "赴任先で使っていた家具・家電は自宅に持ち帰るべきですか？",
    a: "自宅に同じ物がある場合、持ち帰っても置き場所がなく、結局自宅で処分することになりがちです。輸送の手間と費用をかけて持ち帰る価値があるかを、「帰任後の生活で使う場面が具体的に浮かぶか」で判断しましょう。状態のよい物は赴任先で売却・譲渡した方が合理的なことも多く、買取の活用はリサイクルショップ・買取の併用の記事が参考になります。単身赴任者の多い地域では、単身用家電の需要が一定あります。",
  },
  {
    q: "会社契約の社宅です。退去の片付けで注意することはありますか？",
    a: "会社契約（借り上げ社宅）の場合、解約手続き・原状回復・退去立ち会いの窓口が勤務先の総務部門になっていることが多く、個人で判断できる範囲が個人契約と異なります。まず社宅規程と担当部署に、退去日・立ち会い・自分が負担すべき範囲を確認してください。私物の撤去と日常的な清掃は自分の仕事、設備や修繕の話は会社と管理会社の間で進む、という分担が一般的ですが、詳細は契約により異なります。",
  },
  {
    q: "退去日までにどうしても処分が終わりそうにない場合は？",
    a: "間に合わないと分かった時点で、即日〜数日で対応できる不用品回収業者への切り替えを検討してください。物量が少なければ軽トラック規模のプランで収まることが多く、見積もりは無料の業者が一般的です。複数社の見積もりを比較する時間がなくても、許可や資格の確認と、作業前に総額を確定させることの2点は省略しないでください。業者選びの基本は片付け業者ランキングと費用相場のページが参考になります。",
  },
];

const related = [
  { href: "/taikyo-katazuke/", label: "退去片付けの進め方", desc: "退去期限から逆算する段取りの基本" },
  { href: "/genjou-kaifuku-katazuke-senbiki/", label: "原状回復と片付けの線引き", desc: "退去前に自分でやること・任せること" },
  { href: "/hikkoshi-mae-danshari/", label: "引っ越し前の断捨離", desc: "荷物を減らす逆算スケジュール" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "自治体収集の一般的な手順" },
  { href: "/reizouko-sentakuki-shobun-junbi/", label: "冷蔵庫・洗濯機の処分前準備", desc: "霜取り・水抜きの手順" },
  { href: "/office-shibutsu-seiri/", label: "退職・転勤時の私物整理", desc: "オフィスの私物を期限までに整理" },
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
    { "@type": "ListItem", position: 2, name: "単身赴任先の退去片付け" },
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
    { href: "#kiso", label: "1｜単身赴任の退去片付け・3つの前提" },
    { href: "#merit", label: "2｜短期間で終えるための3つの工夫" },
    { href: "#houshin", label: "3｜1週間プランの全体方針" },
    { href: "#steps", label: "4｜退去日から逆算する1週間プラン" },
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

      <Breadcrumb items={[{ label: "単身赴任先の退去片付け" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          単身赴任先の退去片付け｜1週間で終える段取りと処分の進め方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          帰任や転勤の辞令が出て、単身赴任先の部屋を引き払うことになった——引っ越しほどの物量ではないのに、仕事を続けながら退去日までに片付け・処分・清掃を終えるのは想像以上に大変です。使える時間は平日の夜と週末だけ、というのが単身赴任の退去片付けの現実です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、退去日から逆算した1週間プランを軸に、処分ルートの手配を最優先にする理由、自宅に送る物の絞り方、備え付け設備との区別、残置物を残さないための最終確認までを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>単身赴任の退去は物量より時間の制約が主戦場。初日に段取りと処分の手配を終える</li>
          <li>「返す物・送る物・処分する物」の3分類で全体を把握。送る物は最小限に絞る</li>
          <li>平日の夜は仕分けと手配、週末は搬出と清掃。作業の種類を時間帯で分ける</li>
          <li>退去日に残置物ゼロが絶対のゴール。間に合わない見込みなら早めに業者へ切り替える</li>
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

      <H2 id="kiso" num="1">単身赴任の退去片付け・3つの前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        段取りを組む前に、単身赴任の退去ならではの前提を押さえておきましょう。ここを外すと、計画そのものが崩れます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">短期間で終えるための3つの工夫</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        限られた時間で退去まで走り切るために、効果の大きい3つの工夫を紹介します。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">1週間プランの全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        全体方針はシンプルで、「待ち時間のある工程から先に着手する」ことに尽きます。粗大ごみの収集、リサイクル家電の引き取り、配送の集荷、買取の査定——これらは申し込んでから実行日まで待ち時間があり、自分がどれだけ頑張っても短縮できません。逆に、仕分けや荷造りは自分の裁量でいつでも進められます。だから、初日は手を動かすより先に手配を終える。この順序さえ守れば、1週間は決して短くありません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        退去片付け全般の考え方（残置物の扱い・敷金との関係など）は<Link href="/taikyo-katazuke/" className="text-primary underline underline-offset-2">退去片付けの進め方</Link>で、部屋をどこまで掃除して返すかは<Link href="/genjou-kaifuku-katazuke-senbiki/" className="text-primary underline underline-offset-2">原状回復と片付けの線引き</Link>で詳しく解説しています。あわせて参考にしてください。
      </p>

      <H2 id="steps" num="4">退去日から逆算する1週間プラン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、退去7日前から当日までの具体的なプランです。日付はあくまで目安なので、自分の退去日に合わせて読み替えてください。
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
        次のような状況に当てはまる場合は、自力にこだわらず不用品回収・片付け業者への依頼を検討しましょう。単身赴任の退去は「間に合わないこと」が最大のリスクであり、業者費用はそのリスクを消すための投資と考えられます。
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
        業者に依頼する場合は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。物量が少ない単身者の部屋は、複数社の見積もり比較で条件の差が見えやすい規模です。<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>のような一括見積もりサービスや、<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>のように料金と口コミを見て選べるサービスが便利です。
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
        本記事は一般的な知識の提供を目的としたものです。退去時の手続き・負担の範囲は賃貸借契約や社宅規程の内容により異なるため、契約書および貸主・管理会社・勤務先の担当部署にご確認ください。自治体の収集ルールや処理施設の利用条件は自治体により異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
