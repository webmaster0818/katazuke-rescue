import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/piano-kinko-hanshutsu/";
const TITLE = "ピアノ・金庫など重量物の搬出と処分｜自力搬出がNGな理由と依頼の流れ";
const DESC =
  "ピアノや耐火金庫、マッサージチェアなどの重量物は、床や壁の損傷・腰や指の負傷につながるため自力搬出は原則NGです。重量物ごとの処分ルート（買取査定・専門搬出業者・不用品回収業者・自治体収集の可否）、依頼前に自分でできる準備の5ステップ、絶対に避けたいNG行動、業者選びの注意点までを解説します。";
const PUBLISHED = "2026-08-16";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "重量物の自力搬出は「持てるかどうか」ではなく「安全に運び切れるか」の問題",
    body: "アップライトピアノは200kg超、家庭用の耐火金庫でも50〜100kg級のものが珍しくなく、電子ピアノやマッサージチェアも大人1人では持て余す重さです。重量物の搬出で問題になるのは、持ち上げられるかどうかよりも、廊下の曲がり角・階段・玄関の段差を、バランスを崩さずに通過し続けられるかという点です。途中で支えきれなくなっても下ろす場所がなく、落下すれば床の破損だけでなく、足や指を挟む重大な事故につながります。重量物の搬出は、専用の機材と訓練を受けた作業者が担う専門作業と考えてください。",
  },
  {
    title: "床・壁・共用部の損傷は「運べたとしても」起こる",
    body: "重量物は無事に運び出せたように見えても、フローリングのへこみ、壁紙の擦り傷、エレベーター内や共用廊下の傷といった建物側のダメージを残しがちです。賃貸住宅や分譲マンションの共用部を傷つけた場合、原状回復や修繕の負担が発生することもあります。専門業者は毛布やベニヤ板による養生、キャスター付きの専用台車、階段用の担ぎベルトなどを使って建物を保護しながら作業します。搬出そのものだけでなく「建物を傷つけない技術」に価値があるのが重量物搬出です。",
  },
  {
    title: "処分ルートは「売る・専門業者に運んでもらう・回収業者に任せる」の3系統",
    body: "重量物の手放し方は大きく3つあります。1つ目は買取で、ピアノは製造から年数が経っていても買取対象になる場合があり、査定は無料のことが多いためまず試す価値があります。2つ目はピアノ運送・重量物搬出の専門業者に搬出だけを依頼し、処分先へ運んでもらう方法。3つ目は不用品回収業者に搬出から処分までを一括で任せる方法です。自治体の粗大ごみ収集は、ピアノや耐火金庫を対象外としている地域が多く、収集可否や条件は自治体により異なるため、必ずお住まいの市区町村の案内で確認してください。",
  },
];

const merits = [
  {
    title: "ピアノは「買取査定→搬出込みの引き取り」の順で検討する",
    body: "アップライトピアノやグランドピアノは、メーカー・型番・製造番号がわかれば電話やフォームで概算査定を受けられるのが一般的です。買取が成立すれば搬出も買取業者側が手配するため、自分で運ぶ必要がありません。買取がつかない場合でも、引き取りと搬出をセットで依頼できる業者があります。電子ピアノは重量がアコースティックピアノより軽いものの、それでも数十kgあるため、階段がある住まいでは無理をせず業者に任せるのが安全です。売却の考え方はリサイクルショップ・買取併用の記事も参考になります。",
  },
  {
    title: "金庫は「重量と鍵の状態」で依頼先が変わる",
    body: "手提げ金庫程度なら自治体ルールに沿って処分できる場合がありますが、耐火金庫・防盗金庫は数十kg〜100kg超あり、自治体収集の対象外となる地域が多い品目です。鍵が開く状態なら中身を出して業者に搬出・処分を依頼し、鍵が開かない・暗証番号がわからない金庫は、その旨を正直に伝えたうえで対応可能な業者を探します。開かない金庫を無理にこじ開けようとするのは危険なうえ工具では歯が立たないことがほとんどです。所有者確認を求められる場合があるため、購入時の書類があれば用意しておきましょう。",
  },
  {
    title: "マッサージチェア・大型金庫・石材などは搬出経路の情報が見積もりを左右する",
    body: "マッサージチェアは重量に加えて形状が複雑で持ちにくく、解体できる範囲も機種により異なります。庭石や灯籠のような屋外の重量物は、クレーンや複数人での作業が必要になることもあります。いずれも「何階か・エレベーターの有無・廊下や階段の幅・搬出経路の曲がり角」といった経路情報で作業内容が大きく変わるため、見積もり時に正確に伝えるほど当日の追加費用や作業不能のリスクを減らせます。大型家具全般の処分の考え方は大型家具の処分の記事で解説しています。",
  },
];

const steps = [
  {
    title: "型番・製造番号・製造年を確認して控える",
    body: "ピアノなら天板の裏や内部にメーカー名と製造番号があり、金庫なら扉の内側や側面に型番プレートがあります。これらの情報は買取査定の精度を大きく左右し、搬出業者にとっても重量やサイズを特定する手がかりになります。スマートフォンで銘板を撮影しておけば、問い合わせ時にそのまま送れて確実です。あわせて、鍵や付属品（ピアノの椅子・金庫の鍵一式）の有無も確認しておきましょう。",
  },
  {
    title: "設置場所と搬出経路を採寸し、写真を撮る",
    body: "本体の幅・奥行き・高さに加えて、部屋のドア幅、廊下の幅と曲がり角、階段の幅・天井高、エレベーターの扉幅と奥行きを測ります。搬出経路のどこが最も狭いかがわかると、業者は吊り作業や解体の要否を事前に判断できます。本体全体・設置場所・経路の曲がり角・玄関まわりの写真を数枚撮っておくと、訪問見積もりなしでも精度の高い見積もりを受けやすくなります。",
  },
  {
    title: "買取査定を2〜3社に依頼してみる",
    body: "処分費用を払う前に、まず「売れないか」を確認するのが鉄則です。ピアノ買取の専門業者や総合買取業者に、型番・製造番号・写真を送って査定を依頼します。査定額は業者により差が出るため、2〜3社を比較しましょう。値段がつかない場合でも「引き取り可能か」「搬出費用はどうなるか」を確認しておくと、次の選択肢の判断材料になります。買取と処分を組み合わせる考え方はリサイクルショップ・買取併用の記事にまとめています。",
  },
  {
    title: "本体周辺と搬出経路の物を片付けておく",
    body: "重量物の搬出当日は、作業スペースと通り道の確保が安全性を大きく左右します。本体の周囲と搬出経路にある家具・段ボール・小物を事前にどかしておくと、作業時間が短くなり、他の物を壊されるリスクも減ります。経路の片付け自体が難しいほど物が多い場合は、片付けと重量物搬出をまとめて業者へ依頼する方法もあります。部屋全体の片付け手順は片付けの順番の記事が参考になります。",
  },
  {
    title: "業者に「品目・重量級・経路・階数」を正確に伝えて見積もりを取る",
    body: "問い合わせ時に、品目（例:アップライトピアノ）、わかる範囲の重量やサイズ、設置階、エレベーターの有無、経路の最狭部を伝えます。この情報が曖昧なまま当日を迎えると、作業人数や機材が足りず作業できなかったり、追加費用の交渉になったりしがちです。2〜3社から見積もりを取り、金額だけでなく、養生の範囲・保険加入の有無・建物を傷つけた場合の対応を比較して選びましょう。",
  },
];

const ngActions = [
  {
    title: "1人や素人だけの複数人で搬出を強行する",
    body: "「男手が数人いれば運べるだろう」という判断が、重量物の事故で最も多いパターンです。重量物は持ち上げる瞬間より、階段や段差で誰か1人がバランスを崩した瞬間が危険で、全員が支えきれずに落下すると、足の骨折や指の切断といった重大事故につながりかねません。建物の損傷も高くつきます。訓練された作業者と専用機材を持つ業者に任せてください。",
  },
  {
    title: "階段でロープ吊り下ろしなどの自己流作業をする",
    body: "動画などを参考に、ロープやベルトで階段から吊り下ろす方法を試すのは絶対に避けてください。家庭用のロープは重量物の荷重や摩擦を想定しておらず、破断や結び目の抜けが起きると止める手段がありません。専門業者は荷重に適合した機材と人員配置で作業し、必要ならクレーンや窓からの吊り作業を選択します。吊り作業が必要かどうかの判断自体をプロに委ねるのが安全です。",
  },
  {
    title: "開かない金庫を自力で解錠・解体しようとする",
    body: "耐火金庫は火災から中身を守るために極めて頑丈に作られており、グラインダーやバールで開けようとしても歯が立たないうえ、火花や粉じん、工具の反動による怪我のリスクが高い作業です。鍵の紛失や暗証番号不明の場合は、鍵の専門業者や金庫対応可能な業者に相談してください。また、中身が不明な金庫は相続品などの重要書類が入っている可能性もあるため、処分前に開けて確認することを前提に段取りしましょう。",
  },
  {
    title: "「無料回収」をうたう巡回トラックに引き渡す",
    body: "アナウンスをしながら巡回するトラックや、突然訪問してくる回収業者に重量物を渡すのは避けてください。積み込み後に高額な費用を請求される事例や、回収品が不法投棄される事例が注意喚起されています。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者を選ぶことが大前提です。不安な勧誘を受けた場合は、消費者ホットライン188や自治体の窓口に相談できます。見分け方は違法業者の見分け方の記事にまとめています。",
  },
];

const judgeSigns = [
  "ピアノ・耐火金庫など100kg級の重量物を手放したい",
  "設置場所が2階以上で、エレベーターに載らない可能性がある",
  "搬出経路に狭い廊下・急な階段・曲がり角がある",
  "鍵が開かない金庫や、動かなくなったマッサージチェアの処分に困っている",
  "重量物と一緒に、部屋全体の不用品もまとめて片付けたい",
];

const faqs = [
  {
    q: "古いピアノでも買取してもらえますか？",
    a: "メーカー・型番・保存状態によっては、製造から年数が経ったピアノでも買取対象になる場合があります。まず本体の銘板で製造番号を確認し、写真とあわせて買取業者2〜3社に査定を依頼してみてください。値段がつかない場合でも、引き取りと搬出をセットで対応できる業者があります。査定は無料のことが多いため、処分費用を払う前に試すのが鉄則です。",
  },
  {
    q: "金庫は自治体の粗大ごみに出せますか？",
    a: "手提げ金庫は出せる地域もありますが、耐火金庫・防盗金庫は処理が難しいため収集対象外とする自治体が多くあります。対応は自治体により異なるため、必ずお住まいの市区町村の案内を確認してください。対象外の場合は、購入店・メーカー・金庫対応の回収業者への依頼が選択肢になります。自治体収集の一般的な流れは粗大ごみ申し込みの流れの記事で解説しています。",
  },
  {
    q: "搬出費用はどのくらいかかりますか？",
    a: "品目・重量・設置階・エレベーターの有無・搬出経路・吊り作業の要否によって作業内容が大きく変わるため、一律の金額は示せません。正確な金額を知るには、型番・設置状況・経路の写真を添えて2〜3社から見積もりを取るのが確実です。比較の際は金額だけでなく、養生や保険の有無、追加費用が発生する条件もあわせて確認しましょう。費用の考え方は費用相場ページを参考にしてください。",
  },
  {
    q: "重量物だけでなく部屋全体を片付けたい場合はどうすればよいですか？",
    a: "片付け業者・不用品回収業者の中には、重量物の搬出と部屋全体の片付けを一括で対応できるところがあります。見積もり時に「ピアノ（または金庫）があること」を必ず先に伝えてください。重量物は作業人数や機材の手配に関わるため、当日に伝えると作業できないことがあります。業者選びは片付け業者ランキングや不用品回収業者の選び方が参考になります。",
  },
];

const related = [
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない家具の搬出と処分の選択肢" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用", desc: "売れる物を活かして負担を減らす" },
  { href: "/service/fuyohin/", label: "不用品回収業者の選び方", desc: "搬出から処分まで任せられる業者" },
  { href: "/guide/illegal-dumping/", label: "違法業者の見分け方", desc: "無許可回収のリスクと確認ポイント" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "大型・重量物に対応する回収業者" },
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
    { "@type": "ListItem", position: 2, name: "ピアノ・金庫など重量物の搬出と処分" },
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
    { href: "#kiso", label: "1｜重量物の搬出が自力NGな理由" },
    { href: "#merit", label: "2｜品目別・処分ルートの選び方" },
    { href: "#houshin", label: "3｜手放す前の全体方針" },
    { href: "#steps", label: "4｜依頼前に自分でできる準備5ステップ" },
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

      <Breadcrumb items={[{ label: "ピアノ・金庫など重量物の搬出と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ピアノ・金庫など重量物の搬出と処分｜自力搬出がNGな理由と依頼の流れ
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月16日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「使わなくなったピアノを処分したいが、重すぎて動かせない」「親の家に開かずの金庫が残っている」——ピアノや耐火金庫、マッサージチェアといった重量物は、通常の不用品と違って「運び出すこと」自体が最大のハードルです。無理に自力で動かそうとすると、床や壁の損傷だけでなく、腰や指の重大な負傷につながります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、重量物の自力搬出を避けるべき理由、品目別の処分ルートの選び方、依頼前に自分でできる準備の5ステップ、絶対に避けたいNG行動、業者選びで確認すべきポイントまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>ピアノ・耐火金庫などの重量物は、事故と建物損傷のリスクが高く自力搬出は原則NG</li>
          <li>手放す順番は「買取査定→搬出込みの引き取り→回収業者への依頼」。自治体収集は対象外の場合がある</li>
          <li>自分でやるのは搬出ではなく準備。型番の確認・経路の採寸・写真撮影が見積もりの精度を上げる</li>
          <li>無料回収の巡回トラックには渡さない。許可を確認できる業者に依頼する</li>
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

      <H2 id="kiso" num="1">重量物の搬出が自力NGな理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、なぜ重量物の搬出を自力で行うべきでないのかを整理します。「人手を集めれば何とかなる」という考えが最も危険です。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">品目別・処分ルートの選び方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        重量物といっても、ピアノ・金庫・マッサージチェアでは適した手放し方が異なります。品目別の考え方を確認しましょう。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">手放す前の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        重量物処分の大原則は、「まず売れるかを確認し、売れなければ搬出と処分をプロに任せる。自分は情報集めと準備に徹する」ことです。処分ルート全体の比較は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で整理しています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        自治体の粗大ごみ収集を検討する場合は、ピアノ・耐火金庫が対象外となっている地域が多い点に注意が必要です。可否や条件は自治体により異なるため、<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービスの活用ガイド</Link>を参考に、必ずお住まいの市区町村の案内を確認してください。重量物以外の不用品もまとめて手放したい場合は<Link href="/service/fuyohin/" className="text-primary underline underline-offset-2">不用品回収業者の選び方</Link>が参考になります。
      </p>

      <H2 id="steps" num="4">依頼前に自分でできる準備5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        自分でやるべきことは搬出そのものではなく、見積もりの精度を上げ、当日の作業をスムーズにする準備です。次の5ステップで進めましょう。
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
        次のいずれかに当てはまる場合は、迷わず業者への相談を検討してください。型番と経路の写真があれば、電話やフォームからでも具体的な相談ができます。
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
        大型・重量物の回収に対応する業者としては<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような専門業者が候補になります。複数の業者を比較して選びたい場合は、見積もりを比較できる<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>も活用できます。お住まいの地域の業者選びは<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者比較</Link>など各エリアページを参考にしてください。
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
        本記事は一般的な知識の提供を目的としたものです。搬出・処分の可否や作業内容は品目・設置状況・建物の条件により異なるため、依頼前に必ず見積もりでご確認ください。粗大ごみの収集可否・出し方は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
