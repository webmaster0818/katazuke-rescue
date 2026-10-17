import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kogata-kaden-recycle/";
const TITLE = "小型家電リサイクルの使い方｜回収ボックス・自治体回収・認定事業者の違いと出す前の準備";
const DESC =
  "片付けで出てきたデジタルカメラ、携帯電話、ゲーム機、電子辞書などの小型家電を手放す方法として、小型家電リサイクル法の仕組み、ボックス回収・ピックアップ回収・ステーション回収の違い、家電リサイクル法の4品目との区別、データと電池の扱い、無許可の回収業者を避ける確認事項を、環境省と自治体の公式情報をもとに解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "小型家電は「電気や電池で動く製品」が広く対象になる",
    body: "小型家電リサイクル法（正式名称は「使用済小型電子機器等の再資源化の促進に関する法律」）は、2013年4月1日に施行されました。環境省のパンフレットは、家庭の電気や電池で動く製品が広く対象になると説明し、例としてパソコン、携帯電話、デジタルカメラ、デジタルオーディオプレーヤー、電子辞書、ゲーム機、電源アダプター、電気カミソリなどを挙げています。片付けで出てくる「もう使わない電子機器」の多くが、この仕組みで回収される可能性がある物です。ただし、実際に回収する品目は市区町村によって異なります。",
  },
  {
    title: "使わない電子機器には、資源として回収したい金属が含まれている",
    body: "環境省は、小型家電には鉄、アルミ、金、銀、銅、レアメタルといった有用な金属が含まれていると説明しています。一方で、鉛などの有害な物質を含む物もあるため、適正な処理が必要です。不燃ごみとして埋め立てられてしまうと、こうした資源が活かされません。片付けで出てきた古い携帯電話やデジタルカメラを、ほかの不燃ごみと一緒に出す前に、お住まいの地域で小型家電の回収が行われているかを確認する価値は十分にあります。",
  },
  {
    title: "冷蔵庫・洗濯機などの4品目は、別の法律の対象になる",
    body: "環境省は、テレビ、エアコン、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の4品目は、これまでどおり家電リサイクル法の対象であり、小型家電とは回収方法が異なると案内しています。4品目はリサイクル料金と収集運搬料金が必要で、小売店などを通じて引き渡す仕組みです。片付けで家電がまとめて出た場合は、まず4品目とそれ以外に分けると、出し方を整理しやすくなります。4品目の出し方は家電リサイクル法対象品の処分方法の記事で解説しています。",
  },
];

const merits = [
  {
    title: "ボックス回収は、公共施設や店舗に置かれた箱に自分で入れる方法",
    body: "環境省は、市区町村ごとの回収方法として、公共施設やスーパー、家電小売店などに専用の回収ボックスを置いて回収するボックス回収を挙げています。ボックスの投入口に入る大きさの物が対象になるのが一般的です。たとえば名古屋市は、縦15cm×横40cm×奥行25cm以下の家電製品（ノートパソコン・電話機・ハンディ扇風機など）は、総合スーパー・区役所・環境事業所などの回収ボックスに出すよう案内しています。置き場所と対象の大きさは自治体ごとに決められています。",
  },
  {
    title: "ピックアップ回収とステーション回収は、ごみの収集と一緒に回収する方法",
    body: "環境省のパンフレットでは、粗大ごみや不燃ごみと一緒に回収し、ごみ処理施設で自治体の職員が小型家電を取り出すピックアップ回収と、ごみの区分に新たに「小型家電」を設けて集積所などで回収するステーション回収も紹介されています。この方式の地域では、ボックスまで持ち込まなくても、決められた区分で出せば小型家電として回収されます。どの方式を採っているかは、お住まいの自治体の分別案内で確認できます。",
  },
  {
    title: "国の認定を受けた事業者や、販売店・メーカーの回収も選択肢になる",
    body: "環境省は、市区町村のほか、国の認定を受けた認定事業者が回収からリサイクルまでを管理していると説明しています。認定事業者と連絡先の一覧は環境省のウェブサイトで公開されています。また、携帯電話・PHSは専売店でも、パソコンはメーカーでも回収していると案内されています。自治体の回収日や回収ボックスの場所が合わない場合でも、こうした窓口を組み合わせると、手放す方法を見つけやすくなります。",
  },
];

const steps = [
  {
    title: "家電を「4品目」「小型家電」「それ以外の大きな家電」に分ける",
    body: "片付けで出てきた家電を一か所に集め、まずテレビ・エアコン・冷蔵庫・洗濯機などの家電リサイクル法の4品目を別にします。残りのうち、手で持てる大きさの電子機器を小型家電の候補にし、それより大きな物は粗大ごみの候補として分けておきます。大きさの基準は自治体によって異なるため、この段階では大まかな分け方で構いません。迷った物は候補の箱にまとめておき、次の手順で自治体の案内と照らし合わせてください。",
  },
  {
    title: "スマートフォンやパソコンなどのデータを消去する",
    body: "携帯電話、スマートフォン、パソコン、デジタルカメラのメモリーカードなど、個人の情報が残る機器は、手放す前にデータの扱いを決めておきます。必要な写真や連絡先は別の場所に移し、残したくない情報は消去してください。環境省は、市区町村や認定事業者が回収からリサイクルまで盗難対策を講じるなど管理していると説明していますが、機器の中の情報は手放す前に自分で整理しておくほうが安心です。データ消去の進め方はパソコン・スマホのデータ消去と処分の記事で解説しています。",
  },
  {
    title: "取り外せる電池と、内蔵された電池の扱いを確認する",
    body: "小型家電の多くは充電式電池や乾電池で動きます。取り外せる乾電池や電池パックは外しておき、内蔵されていて外せない電池は分解せず、製品のまま自治体の案内に従います。自治体によっては、充電式電池が取り外せない小型家電を不燃ごみや回収ボックスとは別の方法で出すよう定めている場合があります。電池の出し方はモバイルバッテリー・リチウムイオン電池の処分方法の記事で詳しく解説しています。",
  },
  {
    title: "自治体の分別案内で、回収方式と対象の大きさを調べる",
    body: "お住まいの市区町村の分別案内やごみ分別アプリで「小型家電」と検索し、回収ボックスの設置場所、ボックスに入れられる大きさ、ステーション回収やピックアップ回収の有無を確認します。回収ボックスに入らない大きさの物は、不燃ごみや粗大ごみの扱いになることがあります。パソコンを収集の対象外としている自治体もあるため、品目ごとに確認してください。回収ボックスは施設の開館時間内しか使えないことが多いため、持ち込む日の予定も立てておくと手間がかかりません。",
  },
  {
    title: "自治体で出せない物は、認定事業者・販売店・メーカーの回収を確認する",
    body: "自治体の回収対象に入らない品目や、回収日まで待てない場合は、環境省が公開している認定事業者の一覧や、販売店・メーカーの回収を確認します。携帯電話は専売店、パソコンはメーカーの回収窓口も選択肢です。認定事業者による回収には、宅配便などで送る方式もあります。利用する前に、その事業者が環境省の一覧に載っているか、費用や送り方の条件はどうなっているかを、事業者の公式案内で確かめてください。",
  },
];

const ngActions = [
  {
    title: "「無料で何でも回収」とうたう巡回車や空き地の回収に出す",
    body: "環境省のパンフレットは、街中を大音量で巡回する、空き地で回収する、チラシを配る、インターネットで広告を出すといった無許可の回収業者の例を示し、こうした業者に出すと法を守った適正な処理が確認できないと注意を促しています。無許可業者が回収した廃家電が不法投棄や不適正処理された事例も報告されています。家庭の廃棄物の処分方法で不明な点は、まずお住まいの市区町村に問い合わせるよう案内されています。",
  },
  {
    title: "産業廃棄物の許可や古物商の許可だけで、家庭の不用品を任せられると考える",
    body: "環境省のパンフレットでは、家庭から廃家電などの廃棄物を回収するには、市区町村の一般廃棄物処理業の許可や委託が必要であり、産業廃棄物処理業の許可や古物商の許可では家庭の廃棄物を回収することはできないと説明しています。業者が許可番号を示していても、それがどの許可なのかを確認しなければ判断できません。片付け業者に依頼する場合の確認方法は、片付け業者の許可・資格の確認方法の記事で解説しています。",
  },
  {
    title: "データが残ったまま、回収ボックスや業者に渡す",
    body: "回収された機器は管理された流れで処理されるとされていますが、手放す側が何もしないまま機器を渡すと、写真や連絡先、アカウントの情報が残った状態になります。とくに古い携帯電話やパソコンは、何が保存されているか本人も覚えていないことがあります。手放す前に、必要なデータの移行と消去、各種サービスからのログアウトを済ませておいてください。家族の遺品として出てきた機器は、ほかの家族にも確認してから扱うことが大切です。",
  },
  {
    title: "回収ボックスに入らない物を、ボックスの周りに置いて帰る",
    body: "回収ボックスの投入口に入らない物や、対象外の品目をボックスの横に置いていくと、施設の管理者に迷惑がかかり、不法投棄と同じ扱いになるおそれがあります。ボックスに入らない大きさの物は、自治体の案内に従って不燃ごみや粗大ごみとして出すか、販売店・メーカー・認定事業者の回収を利用してください。持ち込む前に、対象の大きさと品目を確認しておけば、このような行き違いは防げます。",
  },
];

const judgeSigns = [
  "小型家電だけでなく、4品目の家電や大型家具も含めて家全体の不用品が多い",
  "実家や空き家の片付けで、古い電子機器が押し入れや物置から大量に見つかった",
  "高齢や体調の事情で、回収ボックスのある施設まで運ぶことが難しい",
  "退去や引き渡しの期限が近く、自治体の回収日を待っていられない",
  "家電の中に危険物や電池が混ざっていて、仕分けに自信がない",
];

const faqs = [
  {
    q: "小型家電はどれでも回収ボックスに入れてよいですか？",
    a: "回収ボックスに入れられる品目と大きさは自治体ごとに決められています。環境省も、市区町村によって回収する品目が異なると案内しています。たとえば名古屋市は、縦15cm×横40cm×奥行25cm以下の家電製品を回収ボックスの対象としています。お住まいの自治体の分別案内で「小型家電」の項目を確認し、対象外の物は案内に従って別の方法で出してください。",
  },
  {
    q: "パソコンも小型家電として出せますか？",
    a: "パソコンは小型家電リサイクル法の対象品目に含まれますが、自治体によっては収集の対象外とし、メーカーなどの回収を案内している場合があります。環境省は、パソコンはメーカーにおいても回収していると説明しています。いずれの方法でも、手放す前にデータの移行と消去を済ませてください。進め方はパソコン・スマホのデータ消去と処分の記事で解説しています。",
  },
  {
    q: "テレビや冷蔵庫も小型家電リサイクルで出せますか？",
    a: "出せません。テレビ、エアコン、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機の4品目は家電リサイクル法の対象で、環境省は小型家電とは回収方法が異なると案内しています。4品目はリサイクル料金と収集運搬料金が必要です。購入した店や買い替え先の店、お住まいの自治体の案内を確認してください。詳しくは家電リサイクル法対象品の処分方法の記事をご覧ください。",
  },
  {
    q: "片付け業者に小型家電をまとめて引き取ってもらってもよいですか？",
    a: "家庭から出る廃棄物を回収するには、市区町村の一般廃棄物処理業の許可や委託が必要です。業者に依頼する場合は、その許可を持っているか、または許可を持つ業者と連携しているかを確認してください。見積もりの段階で、小型家電や電池を引き取れるか、どこでどう処理するかを質問しておくと安心です。少量なら自治体の回収を使い、量の多い部分だけを業者に依頼する方法もあります。",
  },
];

const sources = [
  { label: "小型家電リサイクル法 法律の概要・関係法令", org: "環境省", url: "https://www.env.go.jp/recycle/recycling/raremetals/law.html" },
  { label: "小型家電リサイクル法 認定事業者および連絡先一覧", org: "環境省", url: "https://www.env.go.jp/recycle/recycling/raremetals/trader.html" },
  { label: "小型家電リサイクル法 解説資料（パンフレット）", org: "環境省", url: "https://www.env.go.jp/recycle/recycling/raremetals/consumer.html" },
  { label: "令和8年10月から、粗大ごみの対象が変わりました", org: "名古屋市", url: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1050522.html" },
];

const related = [
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法対象品の処分方法", desc: "冷蔵庫・洗濯機・テレビ・エアコン" },
  { href: "/lithium-battery-shobun/", label: "モバイルバッテリー・リチウムイオン電池の処分", desc: "発火を防ぐ出し方と回収先" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去と処分", desc: "初期化だけで手放さないための手順" },
  { href: "/cable-gadget-haisen-seiri/", label: "ケーブル・充電器・古いガジェットの整理", desc: "配線まわりと使わない機器" },
  { href: "/furui-kaden-anzen-shobun/", label: "古い家電の安全確認と処分", desc: "長く使った家電の確認事項" },
  { href: "/muryou-kaishuu-chuui/", label: "「無料回収」をうたう業者の注意点", desc: "トラブルを避ける確認事項" },
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
    { "@type": "ListItem", position: 2, name: "小型家電リサイクルの使い方" },
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
    { href: "#kiso", label: "1｜小型家電リサイクルの基本" },
    { href: "#merit", label: "2｜回収方法の3つの種類" },
    { href: "#houshin", label: "3｜片付けで家電を手放す全体方針" },
    { href: "#steps", label: "4｜小型家電を手放す5ステップ" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への依頼を検討すべき状況" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公的情報" },
    { href: "#related", label: "9｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "小型家電リサイクルの使い方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          小型家電リサイクルの使い方｜回収ボックス・自治体回収・認定事業者の違いと出す前の準備
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れや引き出しを片付けると、古い携帯電話、デジタルカメラ、携帯ゲーム機、電子辞書、ACアダプターなど、使わなくなった小さな電子機器がまとめて出てくることがあります。不燃ごみとして出してよいのか、回収ボックスに持ち込むべきなのか、判断に迷う物の代表です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、環境省と自治体の公式情報をもとに、小型家電リサイクル法の仕組み、ボックス回収・ピックアップ回収・ステーション回収の違い、家電リサイクル法の4品目との区別、データと電池の扱い、無許可の回収業者を避けるための確認事項を順に解説します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>小型家電リサイクル法は2013年4月施行。電気や電池で動く製品が広く対象で、回収品目は自治体ごとに異なる</li>
          <li>回収方法にはボックス回収・ピックアップ回収・ステーション回収があり、認定事業者や販売店・メーカーの回収もある</li>
          <li>テレビ・エアコン・冷蔵庫・洗濯機の4品目は家電リサイクル法の対象で、出し方が異なる</li>
          <li>手放す前にデータを消去し、内蔵電池は分解せず、家庭の廃棄物の回収に必要な許可を持たない業者には渡さない</li>
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

      <H2 id="kiso" num="1">小型家電リサイクルの基本</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        回収方法を選ぶ前に、小型家電リサイクルがどのような製品を対象にした仕組みなのか、ほかの家電の出し方とどう違うのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">回収方法の3つの種類</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        小型家電の回収方法は、自治体が採っている方式と、自治体以外の窓口によって変わります。代表的な3つの考え方は次のとおりです。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">片付けで家電を手放す全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家全体を片付ける場面では、大小さまざまな家電が一度に出てきます。この記事の方針は、家電を「4品目」「小型家電」「それ以外の大きな家電」に分け、それぞれに決められた出し方を当てはめることです。最初にすべてを同じ山に積むと、どれが回収ボックスに入り、どれが粗大ごみになるのかを一つずつ考え直すことになります。分けてから調べる順番にすれば、自治体の案内を確認する回数も少なく済みます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        4品目の出し方は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法対象品の処分方法</Link>、長く使った家電を手放す前の確認は<Link href="/furui-kaden-anzen-shobun/" className="text-primary underline underline-offset-2">古い家電の安全確認と処分</Link>を参考にしてください。
      </p>

      <H2 id="steps" num="4">小型家電を手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、家電を3つに分ける→データを消去する→電池の扱いを確認する→自治体の案内を調べる→自治体以外の窓口を確認する、の5ステップです。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4 mt-6">
        データの扱いは<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去と処分</Link>、内蔵電池の扱いは<Link href="/lithium-battery-shobun/" className="text-primary underline underline-offset-2">モバイルバッテリー・リチウムイオン電池の処分方法</Link>、充電器やケーブルの整理は<Link href="/cable-gadget-haisen-seiri/" className="text-primary underline underline-offset-2">ケーブル・充電器・古いガジェットの整理</Link>で解説しています。
      </p>

      <H2 id="ng" num="5">避けるべき4つの行動</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="6">業者への依頼を検討すべき状況</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        小型家電は少量であれば自治体の回収で手放しやすい物ですが、次のような状況では片付け・不用品回収業者への依頼も検討してください。対応できる業者は<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、家庭の廃棄物の回収に必要な市区町村の許可や委託を確認できる業者を選び、作業前の見積もりで総額と引き取れる品目を確定させてください。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          依頼先の業者を検討する際は、編集部が特徴・口コミを比較したランキングと費用相場のページもご参照ください。
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

      <H2 id="shutten" num="8">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・2026年10月17日確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="9">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたものです。小型家電の回収品目・回収方法・対象の大きさは自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。認定事業者や販売店・メーカーの回収を利用する際は、各事業者の公式案内で費用と条件をご確認ください。不用品の処分を伴う依頼では、家庭の廃棄物の回収に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
