import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/gakki-shobun-kaitori/";
const TITLE = "楽器の処分と買取｜使わなくなった楽器を手放すルートの選び方";
const DESC =
  "押し入れに眠るギター、実家に残る管楽器、使わなくなった電子ピアノやアンプ——楽器は高価だった記憶と思い出が重なり、手放す判断が先送りになりがちです。手放すかどうかの目安、査定前に確認したい状態と付属品、買取・譲渡・処分それぞれのルートの違い、電子楽器を含む自治体区分の確認方法、保管を続ける場合の置き場所の考え方までを解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "楽器が家に残り続ける三つの理由",
    body: "使っていない楽器がいつまでも家にある背景には、だいたい三つの理由が重なっています。ひとつは購入時に高い買い物だったという記憶で、値段の記憶が「捨てるのはもったいない」という感情に直結します。ふたつめは思い出で、部活動やバンド、レッスンに通った日々と結びついた物は、道具というより記録に近い存在になります。みっつめは「いつかまた弾くかもしれない」という保留です。どれも自然な感情で、否定する必要はありません。ただ、この三つが重なると判断そのものが先送りされ、状態だけが静かに悪くなっていきます。",
  },
  {
    title: "手放すかどうかを考えるときの目安",
    body: "感情で決めきれないときは、事実で目安を作ると考えやすくなります。よく使われるのは、直近で音を出したのはいつかという時間軸、弦やパッドの交換など基本のメンテナンスがどれだけ滞っているかという状態の軸、そしてケースや本体が置き場所をどれだけ圧迫しているかという空間の軸です。三つのうち複数が当てはまるなら、少なくとも一度は「どう扱うか」を決める時期に来ています。結論は手放すことに限らず、修理して使う、保管方法を整える、という選択も同じテーブルに乗せて構いません。",
  },
  {
    title: "この記事で扱う楽器の範囲と、ピアノの位置づけ",
    body: "ここで想定しているのは、アコースティックギターやエレキギター、ベースなどの弦楽器、トランペットやフルート、サックスといった管楽器、バイオリンなどの擦弦楽器、電子ピアノ・キーボード・シンセサイザー、ドラムや打楽器、琴や三味線などの和楽器、そしてアンプ・エフェクター・スタンドといった周辺機材です。一方、アップライトピアノやグランドピアノは重量と搬出経路の問題が中心になり、検討する順番が大きく変わります。該当する場合は専門の記事を先に読んでください。",
  },
];

const merits = [
  {
    title: "考え方1：まず「今の状態」を自分の目で確認する",
    body: "手放す方法を決める前に、その楽器が今どういう状態かを把握しておくと、どのルートが向いているかの見当がつきます。弦楽器なら弦の状態、ネックの反り、ボディの割れや剥がれ、金属パーツのさび。管楽器ならパッドの傷み、キーの動き、へこみや当たり。鍵盤楽器や電子機材なら、電源が入るか、音が出るか、各鍵盤やつまみが反応するか。動作しない物でも価値が残る場合はありますが、「動くか動かないか」は伝えるべき重要な情報です。",
  },
  {
    title: "考え方2：付属品が揃っているかで扱いが変わる",
    body: "楽器は本体だけで完結しないことが多く、付属品の有無は査定でも譲渡でも扱いに影響します。確認したいのはハードケースやソフトケース、管楽器のマウスピースやリガチャー、譜面台、電子楽器の電源アダプターやペダル、シールドなどのケーブル類、そして保証書や購入時の書類、取扱説明書です。押し入れの別の場所やクローゼットの奥に散らばっていることも多いので、探すのは本体を出したタイミングでまとめて行うのが効率的です。",
  },
  {
    title: "考え方3：ルートごとに「手間」と「手離れ」が違う",
    body: "手放し方は大きく、買取に出す、人に譲る、処分する、の三つに分かれます。買取のなかでも楽器を専門に扱う買取店、総合的なリサイクルショップ、フリマアプリ、オークションでは、必要な手間と手離れの早さが異なります。自分で写真を撮って説明文を書き、やり取りと梱包発送まで行う方法は手間が増える代わりに納得感を持ちやすく、店舗に持ち込んだり出張査定を依頼したりする方法は手離れが早い傾向です。どちらが優れているかではなく、かけられる時間で選ぶものです。",
  },
];

const steps = [
  {
    title: "家にある楽器と機材をすべて出して並べる",
    body: "最初にやることは在庫の把握です。部屋、押し入れ、クローゼット、物置、実家の空き部屋まで含めて、楽器本体と周辺機材を一か所に集めます。アンプ、エフェクター、スタンド、譜面台、ケース、ケーブル類も忘れずに対象にしてください。並べてみると、同じ用途の物が重複していたり、存在を忘れていた機材が出てきたりします。この段階では捨てる判断をせず、「何がいくつあるか」を見えるようにすることだけに集中すると手が止まりません。",
  },
  {
    title: "一台ずつ状態と付属品を記録する",
    body: "次に、楽器ごとに状態と付属品をメモします。メーカー名とモデル名が本体やヘッド、ラベルに書かれていれば控えておき、傷や割れ、さび、動作の可否も書き添えます。電子楽器は実際に電源を入れて音が出るか確かめてください。あわせてスマートフォンで全体と気になる箇所の写真を撮っておくと、複数の買取先に相談するときに同じ情報をそのまま使い回せます。この記録があるかどうかで、後の工程の速さがかなり変わります。",
  },
  {
    title: "買取を検討する物は複数の相談先を比べる",
    body: "値段がつきそうな物は、いきなり一か所に決めず複数に相談するのが基本の考え方です。査定額はモデル・状態・時期によって変わり、どこが高くなるかは一概には言えません。楽器を専門に扱う買取店、総合リサイクルショップ、フリマアプリでの相場感などを見比べ、送料や手数料、出張の可否といった条件も含めて判断します。買取と不用品の回収を組み合わせる進め方は、リサイクルショップと買取の併用の記事で整理しています。",
  },
  {
    title: "譲渡・寄贈の可能性を先に確認する",
    body: "値段がつかない場合でも、まだ音が出る楽器は誰かに使ってもらえることがあります。学校の吹奏楽部や地域の音楽団体、児童施設などが楽器の寄贈を受け付けている場合がありますが、受け入れ可否や対象となる楽器、状態の条件、修理費の負担については団体ごとに方針がまったく異なります。送ってから断られると双方に負担が残るため、必ず事前に問い合わせて条件を確認してください。知人や家族に譲る場合も、状態を正直に伝えたうえで渡すのが基本です。",
  },
  {
    title: "残った物を自治体のルールに沿って処分する",
    body: "破損していて修理の見込みがない物、引き取り手が見つからなかった物は処分に回します。楽器はサイズと素材で区分が変わり、同じギターでもケースの有無や解体の可否で扱いが違うことがあります。電子ピアノやキーボード、アンプなどは電気製品として別の区分になることがあるため、必ずお住まいの自治体の分別案内で品目名を検索してください。大きい物は粗大ごみの申し込みが必要になることが多く、申し込みの流れの記事が参考になります。",
  },
];

const ngActions = [
  {
    title: "状態を確かめずに「どうせ値段はつかない」と決めつける",
    body: "見た目がほこりをかぶっている、弦が切れている、という理由だけで価値がないと判断してしまうのは早計です。表面の汚れと本体の状態は別の話で、専門に扱う相談先では動作しない物や修理が必要な物も含めて見てもらえる場合があります。逆に、値段がつくと思い込んで長く保管し続けるのも状態を悪くします。決めつけずに、まず一度相談してみて、その結果を踏まえて売る・譲る・処分するを選ぶという順番が現実的です。",
  },
  {
    title: "査定前に強く磨いたり、自己流で修理したりする",
    body: "きれいにしたほうがよいだろうと考えて、研磨剤や強い洗剤で塗装を磨いてしまう、接着剤で割れをふさいでしまう、といった手当ては、かえって状態を損なうことがあります。楽器の塗装や木部、金属パーツはデリケートで、元に戻せない変化を与えてしまうと選べるルートが狭まります。基本は乾いた柔らかい布でほこりを落とす程度にとどめ、修理が必要かどうかの判断も含めて、相談先に現状のまま見てもらうほうが無難です。",
  },
  {
    title: "本体より先にケースや付属品を処分してしまう",
    body: "片付けの途中で「かさばるから」とハードケースを先に捨ててしまう、マウスピースや電源アダプターを不用品の袋に入れてしまう、という順番はよくある失敗です。付属品が欠けると搬送の安全性が下がり、譲渡先や買取先で扱いが変わることもあります。楽器を手放すと決めたなら、本体と付属品はセットで最後まで一緒に扱ってください。処分するのは、本体の行き先が確定してからで十分間に合います。",
  },
  {
    title: "重量のある楽器を無理な体勢で運び出そうとする",
    body: "アップライトピアノや大型のドラムセット、重いアンプなどを、階段や狭い廊下を通して自力で運び出そうとするのは、けがや住宅の破損につながりやすい進め方です。特にピアノは重量物専門の搬出手順が必要になるため、判断の流れはピアノ・金庫の搬出の記事を参照してください。大型の家具と同様に、無理をせず経験のある業者に任せる線引きを先に決めておくほうが、結果的に早く安全に片付きます。",
  },
];

const judgeSigns = [
  "楽器と周辺機材の量が多く、自力での仕分けや搬出が追いつかない",
  "大型のドラムセットやアンプ、重量のある楽器の運び出しが体力的に難しい",
  "実家や物置に長年しまわれた楽器がまとまって出てきて手が付けられない",
  "退去や引っ越しの期限までに、楽器を含む荷物をまとめて片付けたい",
  "買取に出す物と処分する物の仕分けから搬出まで、まとまった時間が取れない",
];

const faqs = [
  {
    q: "壊れている楽器でも買取に出せますか？",
    a: "状態や種類によります。動作しない物や修理が必要な物でも見てもらえる場合はありますが、値段がつくかどうかはモデル・状態・時期によって変わるため、事前に断定はできません。問い合わせの段階で「音が出ない」「割れがある」など現状を正直に伝えると、往復の手間を減らせます。引き取り自体を断られた場合は、譲渡や自治体での処分へ切り替える流れになります。",
  },
  {
    q: "電子ピアノやキーボードは何ごみになりますか？",
    a: "自治体により異なります。サイズによって粗大ごみになる場合のほか、電気製品として別の区分で案内されることもあり、スタンドと本体を分けて出すよう求められる地域もあります。必ずお住まいの自治体の分別案内で「電子ピアノ」「キーボード」など品目名を検索し、区分と出し方を確認してください。基準を超える大きさなら、粗大ごみの申し込みが必要になることが一般的です。",
  },
  {
    q: "学校や地域の団体に楽器を寄贈することはできますか？",
    a: "受け入れている団体はありますが、可否や条件は団体ごとに異なります。楽器の種類や状態、メンテナンスの必要性、輸送や修理の費用を誰が負担するかなど、確認すべき点が複数あります。連絡なしに送ると先方の負担になってしまうため、必ず事前に問い合わせ、受け入れ可能かどうかと条件を確かめたうえで進めてください。断られても珍しいことではないので、別の選択肢も並行して考えておくと安心です。",
  },
  {
    q: "しばらく手放さずに保管したい場合、どこに置けばよいですか？",
    a: "楽器は湿度と温度の影響を受けやすく、木部の反りや割れ、金属部のさび、接着部の緩みにつながることがあります。直射日光が当たる窓際、エアコンの風が直接当たる場所、湿気がこもりやすい押し入れの奥や結露しやすい壁際は避け、室内の温湿度が比較的安定した場所にケースへ入れて置くのが基本の考え方です。年に数回は取り出して状態を見ておくと、判断の先送りも防げます。",
  },
];

const related = [
  { href: "/piano-kinko-hanshutsu/", label: "ピアノ・金庫の搬出", desc: "重量物を運び出すときの手順と注意点" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップと買取の併用", desc: "売れる物と処分する物の分け方" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "自治体・買取・業者の使い分け" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分ガイド", desc: "運べない家具の搬出と処分" },
  { href: "/sodaigomi-moushikomi-nagare/", label: "粗大ごみ申し込みの流れ", desc: "申し込みから収集日までの手順" },
  { href: "/jikka-katazuke/", label: "実家の片付け", desc: "親の家をまとめて片付ける進め方" },
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
    { "@type": "ListItem", position: 2, name: "楽器の処分と買取" },
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
    { href: "#kiso", label: "1｜楽器が家に残り続ける理由と判断の目安" },
    { href: "#merit", label: "2｜手放す前に押さえる3つの考え方" },
    { href: "#houshin", label: "3｜売る・譲る・処分するの全体方針" },
    { href: "#steps", label: "4｜楽器を手放す5ステップ" },
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

      <Breadcrumb items={[{ label: "楽器の処分と買取" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          楽器の処分と買取｜使わなくなった楽器を手放すルートの選び方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          クローゼットの奥に立てかけたままのギター、実家の押し入れで眠る管楽器、部屋の隅で物置台になっている電子ピアノ。楽器は「高かった」「思い出がある」「いつかまた弾くかも」という気持ちが重なりやすく、片付けのなかでも判断を後回しにされがちな品物です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、手放すかどうかを考えるときの目安、査定や譲渡の前に確認したい状態と付属品、買取・譲渡・処分それぞれのルートの違い、電子楽器を含む自治体区分の確認方法、そして保管を続ける場合の置き場所の考え方までを順に整理します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>判断の目安は「直近で弾いた時期」「メンテナンスの状態」「置き場所の圧迫」の3つ</li>
          <li>動かす前に状態と付属品を記録する。ケース・マウスピース・アダプター・書類はセットで扱う</li>
          <li>買取は複数の相談先を比較する。査定額はモデル・状態・時期で変わるため一律の目安はない</li>
          <li>譲渡・寄贈は団体ごとに条件が違うため事前確認を。処分は自治体の分別案内で品目名を確認する</li>
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

      <H2 id="kiso" num="1">楽器が家に残り続ける理由と判断の目安</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜ楽器は手放しにくいのかを整理します。理由が言葉になると、判断の基準も立てやすくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        アップライトピアノやグランドピアノを手放したい場合は、搬出経路や養生の検討が先に来ます。詳しい手順は<Link href="/piano-kinko-hanshutsu/" className="text-primary underline underline-offset-2">ピアノ・金庫の搬出</Link>の記事にまとめているので、そちらを参照してください。この記事では、一人で持ち運べる範囲の楽器と周辺機材を中心に扱います。
      </p>

      <H2 id="merit" num="2">手放す前に押さえる3つの考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        どのルートを選ぶにしても、先にこの3つを押さえておくと迷いが減ります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">売る・譲る・処分するの全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        楽器の手放し方は、突き詰めれば「売る」「譲る」「処分する」の三択です。おすすめの順番は、まだ音が出る物は売却か譲渡を先に検討し、値段がつかず引き取り手も見つからなかった物を処分に回す、という流れです。逆に処分から入ってしまうと、あとから「相談すればよかった」と感じる余地が残ります。ただし、期限が迫っている片付けでは、すべてを検討する時間が取れないこともあります。その場合は、思い入れの強い一本だけ丁寧に扱い、残りはまとめて処理するという割り切りも現実的な選択です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        すぐに手放さず保管を続けるという選択肢もあります。その場合は置き場所を見直してください。楽器は湿度と温度の変化に弱く、木部の反りや割れ、金属部のさび、接着部の緩みは保管環境の影響を受けます。直射日光の当たる窓際、冷暖房の風が直接当たる場所、湿気がこもる押し入れの奥は避け、ケースに入れて室内の安定した場所へ。全体の片付けの流れに組み込むなら<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>の記事もあわせて読むと、楽器以外の物と一緒に段取りが立てやすくなります。
      </p>

      <H2 id="steps" num="4">楽器を手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、集める→記録する→買取を比べる→譲渡を確認する→処分する、の5ステップです。
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
        まとまった量の機材を一度に手放すときは、売れる物の買取と、残りの回収を組み合わせると往復が減ります。進め方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">リサイクルショップと買取の併用</Link>を、大型の機材やラックが一緒に出る場合は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分ガイド</Link>を参考にしてください。粗大ごみの手配は<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ申し込みの流れ</Link>にまとめています。
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
        楽器一本を手放すだけなら自力で進められますが、次のような状況では片付け・不用品回収業者の力を借りるのが現実的です。対応できる業者は<Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴や口コミを比較して選ぶ方法が便利です。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。ごみの分別区分・粗大ごみの基準・手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。買取の査定額はモデル・状態・時期により異なり、譲渡や寄贈の受け入れ可否も団体ごとに方針が異なるため、事前にご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
