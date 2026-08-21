import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/nyuin-taiin-ie-seiri/";
const TITLE = "入院前・退院前に家を整える｜留守中の備えと帰宅後の安全チェック";
const DESC =
  "入院が決まったときの留守中の備えと、退院を控えたときの住まいの整え方をまとめました。生鮮食品や生ごみの処理、郵便物と支払いの段取り、戸締まりと通風、そして帰宅後の動線・転倒対策・水まわりの確認まで、限られた時間で優先順位をつけて進めるための手順を整理します。";
const PUBLISHED = "2026-08-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "準備の時間が短く、体調も万全でないことが多い",
    body: "入院前の片付けは、通常の片付けとは前提が違います。日程が急に決まることもあれば、体調が思わしくない状態で準備しなければならないこともあります。普段なら一日かけてできる作業も、この時期には難しくなります。だからこそ、家全体を整えようとせず、「放っておくと困ることだけ」に絞るのが正解です。優先すべきは、傷む物、止まると困る支払い、防犯や安全に関わる部分。それ以外は後回しにしてよい、と最初に線を引いておくと、限られた時間と体力を無駄なく使えます。",
  },
  {
    title: "留守の期間は長引くことがあり、想定より余裕を持たせたい",
    body: "予定では一週間の入院でも、経過によって延びることがあります。逆に、思ったより早く退院になることもあります。どちらにも対応できるよう、備えは「予定より長めの不在」を想定しておくと安心です。冷蔵庫の中身、ごみ、鉢植えの水やり、郵便物の量、支払いの期日——これらは日数が延びるほど問題が大きくなります。一方で、家の中を過度に空っぽにしてしまうと、帰宅した日に困ることになります。長めの不在を前提にしつつ、帰宅直後に必要な物は残しておく、という組み立てが実用的です。",
  },
  {
    title: "帰宅後は、入院前と同じ動作ができるとは限らない",
    body: "退院前の準備で見落とされがちなのが、退院時の体の状態です。手術や治療の内容によっては、しゃがむ、重い物を持つ、階段を上る、腕を高く上げるといった動作が一時的に制限されることがあります。入院前は問題なく使えていた収納が、帰宅後には手が届かない、取り出せないという状態になっているかもしれません。何がどの程度制限されるかは人によって異なりますので、退院前に医療機関へ生活上の注意点を確認し、それに合わせて家の配置を整えておくと、帰宅後の負担が大きく減ります。",
  },
];

const merits = [
  {
    title: "入院前の優先1：傷む物・においが出る物を先に処理する",
    body: "留守中にもっとも確実に問題になるのが、生鮮食品と生ごみです。冷蔵庫の野菜室や冷蔵室に残った食材は、日数が経てば傷み、においや虫の発生につながります。まず冷蔵庫を開けて、日持ちしない物を取り出し、食べきれない分は処分してください。三角コーナーや排水口の受け皿、ごみ箱の中身も同様です。ごみの日が入院日の前に来るなら、その回で出しきるのが理想的です。間に合わない場合は、袋を二重にして密閉し、直射日光の当たらない涼しい場所にまとめておくと状態の悪化を抑えられます。",
  },
  {
    title: "入院前の優先2：郵便物と支払いを止めない仕組みを作る",
    body: "不在が続くと、郵便受けから郵便物があふれ、外から留守が分かる状態になります。防犯の面でも好ましくありません。家族や信頼できる人に定期的な回収を頼めるとよいのですが、難しい場合は郵便局で一定期間の取り扱いについて相談できる仕組みがあります。あわせて、公共料金や家賃、各種の支払いで期日があるものを書き出し、口座からの引き落としで対応できるか、家族に手続きを頼めるかを確認してください。入院中に対応が必要な連絡先は、一枚の紙にまとめて家族と共有しておくと安心です。",
  },
  {
    title: "退院前の優先：動線と手の届く高さを見直す",
    body: "退院を控えた段階で家族が整えておきたいのは、帰宅した本人が安全に動ける状態です。玄関から寝室、寝室からトイレ、洗面所までの通り道に物が置かれていないか。夜間に足元が見える明るさがあるか。よく使う物が、しゃがまず背伸びせずに取れる高さにあるか。床のマットがめくれていないか。これらを退院日までに確認しておきます。しゃがむ動作が制限される場合は、下段に置いていた日用品を腰の高さに移しておくと、帰宅初日から困りません。必要に応じて手すりや滑りにくいマットの導入も検討してください。",
  },
];

const steps = [
  {
    title: "残された時間と体力を見て、やることを三つに絞る",
    body: "入院の日程が決まったら、まず「やらないこと」を決めます。押し入れの整理も、不要品の処分も、この時期にやる必要はありません。優先するのは、傷む物の処理、支払いと連絡の段取り、戸締まりと安全の確認の三点です。紙に書き出して、上から順に片付けていきましょう。体調が思わしくないときは、無理に自分でやろうとせず、家族に頼める部分を先に切り分けてください。頼む相手には、家のどこに何があるかを含めて具体的に伝えると、行き違いが起きにくくなります。",
  },
  {
    title: "冷蔵庫・ごみ・水まわりを処理する",
    body: "冷蔵庫の冷蔵室と野菜室から、日持ちしない食材を取り出します。食べきれない分は処分し、調味料や冷凍食品は残して構いません。長期の不在で冷蔵庫の電源を落とす場合は、霜取りと水抜きが必要になり、扉を少し開けた状態にしておく必要があります。手順は家電の取扱説明書で確認してください。生ごみ、三角コーナー、排水口の受け皿は空にし、ごみは収集日に出しきります。排水口やトイレの水は、長く使わないと封水が減って下水のにおいが上がることがあるため、帰宅後に水を流す前提で覚えておきましょう。",
  },
  {
    title: "郵便物・支払い・連絡先の段取りをつける",
    body: "郵便受けがあふれないよう、家族や信頼できる人に回収を頼むか、郵便局の窓口で不在時の取り扱いについて相談してください。支払いについては、期日のあるものを書き出し、引き落としで対応できるか、家族に頼めるかを確認します。あわせて、入院中に連絡が必要になりうる先——加入している保険、勤務先、管理会社や大家、契約中のサービスなど——を一枚にまとめておくと、家族が動きやすくなります。この紙は家族に渡すか、分かる場所に置いて、置き場所を伝えておきましょう。",
  },
  {
    title: "戸締まり・電気・水道・通風を確認する",
    body: "出発前の最終確認として、窓とドアの施錠、ガスの元栓、使わない家電のプラグ、暖房や冷房の停止を順に見ていきます。長期の不在では、閉め切ることで湿気がこもり、カビやにおいの原因になることがあります。防犯上問題のない範囲で、換気扇を弱く回し続ける、浴室の扉を開けておくといった工夫が有効です。植物の水やりを頼める人がいない場合は、屋外の日陰にまとめる、思い切って預けるといった判断も必要になります。留守が外から分かりにくいよう、洗濯物を取り込み、玄関まわりを片付けておきましょう。",
  },
  {
    title: "退院前に、帰宅後の生活を想定して配置を整える",
    body: "退院の目処が立ったら、家族が先に家へ入って状態を整えます。まず換気をして、水道の各所に水を流し、冷蔵庫を使える状態に戻します。次に、寝室・トイレ・洗面所・キッチンをつなぐ動線から物をどけ、夜間の明かりを確保します。医療機関から生活上の注意点を聞いている場合は、それに合わせて日用品の高さを調整してください。帰宅当日に必要な食料や日用品を用意しておくと、本人が買い物に出る負担を避けられます。掃除は完璧を目指さず、寝る場所と水まわりを整えることを優先しましょう。",
  },
];

const ngActions = [
  {
    title: "入院前に、家全体を片付けようとして体力を使い切る",
    body: "この機会にまとめて片付けようと考える方は少なくありませんが、入院前は体調を整えることが最優先です。押し入れの整理や不用品の処分は、退院して落ち着いてからでも間に合います。限られた体力を、放っておくと困ることだけに使ってください。どうしても気になる場所がある場合は、家族に依頼するか、退院後の予定として書き留めておきましょう。無理をして体調を崩せば、入院そのものに影響します。",
  },
  {
    title: "冷蔵庫の中身とごみをそのままにして家を空ける",
    body: "留守中のトラブルでもっとも多いのが、食品の腐敗とごみによるにおい・虫の発生です。数日程度なら問題にならないと考えていても、入院が延びれば状況は変わります。帰宅した日に、においのこもった部屋と虫の出た台所を片付けることになれば、体調が万全でない時期に大きな負担になります。出発前に必ず冷蔵庫を開け、日持ちしない物を取り出し、ごみは出しきる。この二つだけでも状況は大きく変わります。",
  },
  {
    title: "支払いや連絡の情報を、誰とも共有しないまま入院する",
    body: "本人しか把握していない支払いや契約があると、入院が延びたときに家族が対応できません。期日のある支払い、加入している保険、管理会社や大家の連絡先、契約中のサービスなどは、一枚の紙にまとめて家族と共有しておいてください。すべてを開示する必要はありませんが、少なくとも「どこを見れば分かるか」は伝えておくと安心です。あわせて、家の鍵を誰が持っているかも整理しておくと、緊急時の対応が早くなります。",
  },
  {
    title: "退院日に合わせて、家族が一日で大掃除をしようとする",
    body: "退院を迎える家をきれいにしておきたい気持ちは自然ですが、無理な計画は途中で破綻します。優先すべきは、本人が安全に動けること、寝る場所が整っていること、水まわりが使えることの三点です。窓ガラスや細かい場所の掃除は後回しで構いません。もし手が足りないと感じたら、清掃や片付けを業者に依頼する選択肢もあります。家族が疲れきった状態で退院を迎えるより、必要な部分だけを整えて余裕を持って迎えるほうが、本人にとっても安心です。",
  },
];

const judgeSigns = [
  "入院までの日数が少なく、家の状態を整える時間が取れない",
  "床に物が多く、帰宅後の動線を確保するには運び出しから必要になる",
  "水まわりや浴室の汚れが自力の清掃では落ちない状態になっている",
  "退院に合わせて家具の配置換えが必要で、家族だけでは動かせない",
  "長期の不在でにおいや虫が発生し、通常の掃除では対応しきれない",
];

const faqs = [
  {
    q: "入院が急に決まりました。まず何をすればよいですか？",
    a: "やることを三つに絞ってください。第一に、冷蔵庫の日持ちしない食材と生ごみの処理。第二に、郵便物と期日のある支払いの段取り。第三に、戸締まりと電気・ガスの確認です。それ以外の片付けは後回しで構いません。体調が思わしくない場合は、無理に自分でやろうとせず、家族に頼める部分を切り分けて具体的に伝えましょう。入院準備そのものについては、医療機関から案内される持ち物リストに従ってください。",
  },
  {
    q: "長期の不在になります。冷蔵庫の電源は切るべきですか？",
    a: "不在の期間や中身の量によって判断が分かれます。電源を落とす場合は、中身をすべて取り出したうえで、霜取りと水抜きが必要になり、扉を少し開けた状態にしておく必要があります。手順や注意点は機種によって異なるため、取扱説明書を確認してください。数日から一週間程度であれば、日持ちしない物だけを処理して電源はそのままにする方が現実的な場合もあります。冷蔵庫を手放す場合の準備は関連記事で扱っています。",
  },
  {
    q: "退院前に家族が整えておくべきことは何ですか？",
    a: "換気と水道の通水、冷蔵庫を使える状態に戻すこと、そして動線の確保が基本です。玄関から寝室、寝室からトイレ・洗面所までの通り道に物を置かず、夜間の明かりを確保してください。医療機関から生活上の注意点を聞いている場合は、それに合わせて日用品の高さを調整しておくと帰宅後が楽になります。掃除は完璧を目指さず、寝る場所と水まわりを優先しましょう。",
  },
  {
    q: "退院後、しゃがむのが難しいと言われました。収納はどう変えればよいですか？",
    a: "よく使う日用品を、腰から目線までの高さに集めるのが基本です。下段や床置きの物は、当面使わない物と入れ替えてください。踏み台が必要な高さには、頻繁に使う物を置かないようにします。あわせて、床のマットのめくれ、電気コードの位置、通り道の幅も確認しておくと転倒の予防になります。動作の制限の程度は人によって異なりますので、具体的な注意点は医療機関やリハビリの担当者にご確認ください。",
  },
];

const related = [
  { href: "/kaigo-juukankyou-seiri/", label: "介護に備えた住環境の整理", desc: "動線と転倒対策の考え方" },
  { href: "/tanshin-koureisha-mimamori/", label: "高齢の親の見守りと片付け", desc: "離れて暮らす家族の関わり方" },
  { href: "/reizouko-sentakuki-shobun-junbi/", label: "冷蔵庫・洗濯機の準備", desc: "霜取り・水抜きと搬出の手順" },
  { href: "/heya-shoushuu/", label: "部屋の消臭", desc: "においの原因の切り分けと対処" },
  { href: "/yokushitsu-mizumawari-seisou/", label: "浴室・水まわりの清掃", desc: "自力と業者の使い分け" },
  { href: "/shisetsu-nyukyomae-kazai-seiri/", label: "施設入居前の家財整理", desc: "持ち込む物の選定と残す物の整理" },
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
    { "@type": "ListItem", position: 2, name: "入院前・退院前の家の整え方" },
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
    { href: "#kiso", label: "1｜入院前後の片付けが特殊な理由" },
    { href: "#merit", label: "2｜優先順位を決める3つの視点" },
    { href: "#houshin", label: "3｜留守中に備える全体方針" },
    { href: "#steps", label: "4｜準備を進める5ステップ" },
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

      <Breadcrumb items={[{ label: "入院前・退院前の家の整え方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          入院前・退院前に家を整える｜留守中の備えと帰宅後の安全チェック
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月21日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          入院が決まると、体のことに加えて家のことが気になり始めます。冷蔵庫の食材はどうするか、ごみは出せるか、郵便物はたまらないか、支払いは止まらないか。そして退院が近づけば、今度は「帰ってから安全に暮らせる状態か」が課題になります。どちらも準備の時間が限られ、体調も万全ではない時期の作業です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、入院前に必ず押さえたい留守中の備えと、退院前に家族が整えておきたい住まいの確認項目を、優先順位をつけて整理します。全部をやろうとせず、放っておくと困ることから片付ける。そのための手順としてお読みください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>入院前にやることは三つだけ。傷む物の処理、支払いと連絡の段取り、戸締まりと安全確認</li>
          <li>不在は予定より延びる前提で備える。冷蔵庫の日持ちしない物とごみは必ず処理してから家を出る</li>
          <li>退院前は、動線の確保と「手の届く高さ」の見直しが最優先。掃除は完璧を目指さない</li>
          <li>退院後の動作制限の内容は人により異なる。生活上の注意点は医療機関に確認して配置に反映する</li>
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

      <H2 id="kiso" num="1">入院前後の片付けが特殊な理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        通常の片付けは、時間をかけて理想の状態に近づけていく作業です。しかし入院前後の片付けは、期限があり、体力に制約があり、目的も「整える」ではなく「困らないようにする」に変わります。この違いを押さえておくと、やるべきことが絞り込めます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">優先順位を決める3つの視点</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        限られた時間で何を先にやるか。判断の軸は「放っておくと悪化するか」「止まると困るか」「帰宅後に危険か」の三つです。この順で見ていくと、迷いが減ります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">留守中に備える全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        留守中の家で問題になるのは、傷むもの、たまるもの、こもるものの三種類です。傷むものは食品と生ごみ。たまるものは郵便物と請求。こもるものは湿気とにおいです。この三つに対して手当てをしておけば、帰宅した日に困る場面はぐっと減ります。とくに湿気は見落とされがちで、真夏や梅雨の時期に閉め切った家では、カビが広がったり、においが残ったりすることがあります。防犯上問題のない範囲で、換気扇を弱く回し続ける、浴室や押し入れの扉を開けておくといった工夫を検討してください。帰宅後ににおいが気になる場合の対処は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭</Link>、カビが出てしまった場合は<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">カビの清掃</Link>で手順を扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        防犯の面では、留守が外から分かる状態を避けるのが基本です。郵便受けから郵便物があふれる、洗濯物が干しっぱなしになる、夜間ずっと真っ暗になる、といった状況は避けたいところです。郵便物については、家族に回収を頼むか、郵便局の窓口で不在時の取り扱いについて相談する方法があります。制度の内容や条件は変わることがありますので、詳しくは郵便局の窓口や公式の案内でご確認ください。集合住宅の場合は、管理会社や大家に長期不在を伝えておくと、水漏れなどの緊急時に連絡が取りやすくなります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        退院後の暮らしを見据えるなら、この機会に住環境を見直しておくのも一つの考え方です。ただし、入院前にやる必要はありません。家族の手が空いているときに、通り道の幅、手すりの有無、床のマット、明かりの位置を確認しておく程度で十分です。本格的な見直しが必要になった場合の考え方は<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護に備えた住環境の整理</Link>で扱っています。離れて暮らす親御さんの入院に立ち会う立場であれば、<Link href="/tanshin-koureisha-mimamori/" className="text-primary underline underline-offset-2">高齢の親の見守りと片付け</Link>もあわせてご覧ください。
      </p>

      <H2 id="steps" num="4">準備を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の流れは、やることを三つに絞る→冷蔵庫とごみを処理する→郵便と支払いの段取り→戸締まりと通風の確認→退院前の配置調整、の5ステップです。入院前の四つと、退院前の一つに分かれます。
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
        <h3 className="font-bold text-text-primary mb-2">体調と治療に関することは、必ず医療機関に確認を</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          退院後にどの動作がどの程度制限されるか、いつから普段の家事に戻れるかは、治療の内容や経過によって一人ひとり異なります。本記事では住まいの整え方の一般的な考え方をご紹介していますが、個別の判断については主治医やリハビリの担当者、医療相談の窓口にご確認ください。入院中の生活支援や退院後のサービス利用について不安がある場合は、医療機関の相談窓口や、お住まいの自治体の担当窓口に相談できることがあります。制度の内容や利用条件は自治体により異なりますので、窓口でご確認ください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        入院前に手を付けないほうがよい作業もあります。押し入れや納戸の整理、大型家具の移動、不用品の処分などは、体力を大きく使ううえに途中で終わると家が散らかった状態になります。これらは退院して落ち着いてから、あるいは家族の手が空いているときに進めてください。落ち着いてから取りかかる場合の順番は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">片付けの順番</Link>、不用品の処分ルートは<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>が参考になります。長期の不在で冷蔵庫を止める場合の手順は<Link href="/reizouko-sentakuki-shobun-junbi/" className="text-primary underline underline-offset-2">冷蔵庫・洗濯機の準備</Link>で扱っている霜取り・水抜きの考え方が応用できます。
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
        体調が万全でない時期に無理をする必要はありません。次のような状況では、片付けや清掃を業者に任せる選択肢を検討してください。対応できる業者は<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼する際は、作業前の見積もりで総額と作業範囲を確定させてください。料金は物量・間取り・地域により異なるため、複数社を比べるのが確実です。不用品の処分を伴う場合は、廃棄物の扱いに必要な許可や資格を確認できる業者を選びましょう。入院中で立ち会いが難しい場合は、家族が代わりに対応できるかを事前に業者へ確認しておくと当日の混乱を避けられます。依頼先の候補は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で特徴を比較できます。清掃だけを頼みたい場合の考え方は<Link href="/house-cleaning-chigai/" className="text-primary underline underline-offset-2">ハウスクリーニングと片付け業者の違い</Link>で整理しています。
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
        本記事は住まいの整え方に関する一般的な知識の提供を目的としたものです。治療内容や退院後の生活上の注意点は個々の状況により異なりますので、主治医やリハビリの担当者、医療機関の相談窓口にご確認ください。郵便物の取り扱いや自治体の支援制度の内容・条件は変わることがあり、地域によっても異なります。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
