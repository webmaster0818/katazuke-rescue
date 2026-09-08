import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kaigo-youhin-shobun/";
const TITLE = "使い終えた介護用品・福祉用具の整理｜借りた物の返却と購入した物の手放し方";
const DESC =
  "介護が一段落したあと、部屋に残った介護用ベッドや車いす、歩行器などをどう扱えばよいか分からないという相談は少なくありません。借りている物と購入した物で扱いが違う理由、返却の窓口の確認先、購入品を手放すときの考え方、衛生面の注意点を整理して解説します。";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "借りている物は、自分の判断では処分できない",
    body: "介護用ベッドや車いすなどは、借りて使っている場合があります。借りている物は所有者が別にいるため、家庭のごみとして出したり、譲ったり売ったりすることはできません。まずは、その用具が借りている物なのか、購入した物なのかを確認します。契約の書類や、担当のケアマネジャーとのやり取りの記録が手がかりになります。分からない場合は、自己判断で動かさず、後述する窓口に確認してください。",
  },
  {
    title: "購入した物は、家庭の不用品として扱うのが基本",
    body: "自費や補助を受けて購入した用具は、原則として自分の持ち物です。手放す場合は、家庭から出る不用品としての手続きになります。ただし、大きさや素材によって分別の区分が変わり、電動の機能を備えた物は扱いが分かれることもあります。処分の区分は自治体によって異なるため、まとめて出す前に分別案内で確認してください。",
  },
  {
    title: "制度や手続きの詳細は、必ず窓口で確認する",
    body: "介護に関わる制度や、用具の貸与・購入の取り扱いは、状況や地域によって異なります。この記事では、どこに確認すればよいかという道筋を示すにとどめ、個別の判断はお住まいの自治体の介護保険の窓口や、担当のケアマネジャー、地域包括支援センター、契約している事業者にご相談ください。書類が見つからない場合も、これらの窓口に状況を伝えれば、確認の方法を案内してもらえます。",
  },
];

const merits = [
  {
    title: "確認1：どれが借りている物かを一覧にする",
    body: "部屋にある用具を書き出し、それぞれが借りている物か購入した物かを記入します。ベッド、車いす、歩行器、手すり、入浴用の用具など、種類ごとに分けて書くと分かりやすくなります。判断が付かない物は「要確認」として残し、この段階で無理に決めないことが大切です。写真を撮っておくと、窓口に相談するときの説明も早く済みます。",
  },
  {
    title: "確認2：連絡する窓口を整理する",
    body: "借りている物の返却は、担当のケアマネジャーや、契約している貸与事業者への連絡が起点になります。書類に事業者名や連絡先が記載されていることが多いので、まず探してみてください。見つからない場合や、誰に連絡すればよいか分からない場合は、お住まいの自治体の介護保険の窓口、または地域包括支援センターに相談すると、確認の方法を案内してもらえます。",
  },
  {
    title: "確認3：搬出の条件を先に見ておく",
    body: "介護用ベッドのように大きい用具は、部屋から出す作業そのものに人手と手順が必要です。分解が必要か、廊下や階段を通せるか、玄関から外まで運べるかを先に見ておくと、返却でも処分でも段取りが早くなります。集合住宅では、共用部の使用やエレベーターの利用について管理規約で定めがあることがあるため、あわせて確認しておきましょう。",
  },
];

const steps = [
  {
    title: "部屋にある用具を書き出し、由来を確認する",
    body: "ベッド、車いす、歩行器、手すり、入浴や排せつに使っていた用具などを書き出し、借りている物か購入した物かを記入します。契約書類や納品の記録が手がかりになります。判断が付かない物は「要確認」として残します。写真を撮っておくと、窓口へ相談するときの説明が早く済みます。",
  },
  {
    title: "借りている物は、担当のケアマネジャーや事業者に連絡する",
    body: "返却の手順、引き取りの日程、返却までの保管方法は、事業者によって異なります。まずは連絡して、どう進めればよいかを確認してください。連絡先が分からない場合は、お住まいの自治体の介護保険の窓口や地域包括支援センターに相談すると、確認の方法を案内してもらえます。返却前に自分で分解や清掃をしてよいかも、あわせて確認しましょう。",
  },
  {
    title: "購入した物は、自治体の分別案内で区分を確認する",
    body: "購入した用具を手放す場合は、家庭から出る不用品としての手続きになります。大きさや素材、電動の機能の有無によって区分が変わることがあり、扱いは自治体によって異なります。品目を書き出して、まとめて自治体の窓口に問い合わせると一度で確認できます。粗大ごみの申し込みが必要な場合は、収集までの日数も見ておきましょう。",
  },
  {
    title: "搬出の段取りを決める（人手・経路・日程）",
    body: "大きい用具は、分解の可否、廊下や階段を通せるか、玄関から車両まで運べるかを確認します。無理に一人で動かすと、けがや住宅の破損につながります。人手が足りない場合は、返却であれば事業者に相談し、処分であれば運び出しを含めて依頼できる事業者を検討してください。集合住宅では共用部の使用条件も確認しておきます。",
  },
  {
    title: "残す物の置き場所を決めて、住まいの動線を整える",
    body: "手元に残すと決めた物は、置き場所を決めて、通り道をふさがない位置にまとめます。使わないまま部屋の中央に残っていると、生活の動線が狭くなり、転倒の危険にもつながります。空いたスペースをどう使うかを先に決めておくと、次に物が入り込むのを防げます。",
  },
];

const ngActions = [
  {
    title: "借りている物を、自分の判断で処分したり譲ったりする",
    body: "借りている用具は所有者が別にいるため、家庭のごみとして出す、他人に譲る、売るといった扱いはできません。使わなくなったからといって自己判断で動かすと、契約上の問題につながることがあります。まずは借りている物かどうかを確かめ、担当のケアマネジャーや事業者に連絡して手順を確認してください。判断が付かない物は、確認できるまで動かさないのが安全です。",
  },
  {
    title: "大きい用具を、一人で無理に運び出そうとする",
    body: "介護用ベッドや大型の用具は、見た目以上に重く、分解や運搬に手順が必要な場合があります。一人で動かそうとすると、腰を痛める、壁や床を傷つける、階段で転倒するといった事故につながります。人手を確保する、事業者に相談する、運び出しを含めて依頼するなど、無理のない方法を選んでください。",
  },
  {
    title: "片付けを急かされるまま、気持ちの整理を後回しにする",
    body: "手続きの都合で早く片付けなければならない場面もありますが、すべてを同じ日に決める必要はありません。返却の連絡のように期限が関わることを先に済ませ、残すか手放すかの判断は落ち着いてからでも構いません。判断に迷う物は「保留」としてまとめておき、後日あらためて向き合う進め方もあります。",
  },
  {
    title: "使用済みの用具を、状態を確認しないまま人に渡す",
    body: "使用していた用具を知人などに譲りたいと考える場合がありますが、衛生面の手入れや、その人の身体の状態に合っているかという問題があります。合わない用具の使用は、かえって危険につながることもあります。譲渡を考える場合は、担当のケアマネジャーなどに相談し、適切かどうかを確認してから判断してください。",
  },
];

const judgeSigns = [
  "介護用ベッドなど、自分たちでは運び出せない用具が残っている",
  "用具のほかにも家財が多く、部屋全体の整理が必要になっている",
  "遠方に住んでいて、現地で作業できる時間が限られている",
  "退去や引き渡しの期限があり、日程に余裕がない",
  "体調や気持ちの面で、作業を進めるのが難しい",
];

const faqs = [
  {
    q: "借りていた用具は、いつまでに返せばよいですか？",
    a: "返却の期限や手順は、契約の内容や事業者によって異なります。まずは担当のケアマネジャーや契約している事業者に連絡し、返却の日程と、それまでの保管の仕方を確認してください。連絡先が分からない場合は、お住まいの自治体の介護保険の窓口や地域包括支援センターに相談すると、確認の方法を案内してもらえます。",
  },
  {
    q: "購入した介護用ベッドはどう処分すればよいですか？",
    a: "購入した用具は家庭から出る不用品としての手続きになりますが、大きさや素材、電動の機能の有無によって区分が変わることがあり、扱いは自治体によって異なります。粗大ごみの対象になるか、別の扱いになるかを、お住まいの市区町村の分別案内で確認してください。運び出しが難しい場合は、搬出を含めて事業者に依頼する方法もあります。",
  },
  {
    q: "まだ使える用具を知人に譲ってもよいですか？",
    a: "購入した物であれば所有者はご自身ですが、用具はその人の身体の状態に合っていることが前提になります。合わない用具の使用は、かえって危険につながることがあります。譲渡を考える場合は、担当のケアマネジャーなどに相談し、適切かどうかを確認してから判断してください。借りている物は譲渡できません。",
  },
  {
    q: "気持ちの整理が付かず、片付けを進められません。",
    a: "無理に急ぐ必要はありません。返却のように期限が関わるものだけを先に済ませ、残すか手放すかの判断は落ち着いてからでも構いません。判断に迷う物は「保留」としてまとめ、置き場所を決めておくと、生活の動線を確保しながら時間をかけられます。家族が複数いる場合は、保留にした物を共有しておくと行き違いを防げます。",
  },
];

const related = [
  { href: "/kaigo-juukankyou-seiri/", label: "介護に備える部屋の片付け", desc: "動線・転倒対策の整え方" },
  { href: "/tanshin-koureisha-mimamori/", label: "高齢の親の見守りと片付け", desc: "住まいの安全を整える進め方" },
  { href: "/shisetsu-nyukyomae-kazai-seiri/", label: "施設入居前の家財整理", desc: "持ち込む物の選び方と段取り" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と任せる範囲" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分", desc: "運べない物の搬出と選択肢" },
  { href: "/kichouhin-genkin-hakken/", label: "貴重品が出てきたら", desc: "保管・記録・相談先の考え方" },
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
    { "@type": "ListItem", position: 2, name: "使い終えた介護用品・福祉用具の整理" },
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
    { href: "#kiso", label: "1｜介護用品は「借りた物」と「買った物」で扱いが違う" },
    { href: "#merit", label: "2｜片付けを始める前に確認したい3つのこと" },
    { href: "#houshin", label: "3｜気持ちの整理と、手続きは分けて進める" },
    { href: "#steps", label: "4｜介護用品を整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "使い終えた介護用品・福祉用具の整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          使い終えた介護用品・福祉用具の整理｜借りた物の返却と購入した物の手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月2日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          介護が一段落したあと、部屋に残された介護用ベッドや車いす、歩行器、入浴に使っていた用具。気持ちの整理が付かないうちに「早く片付けなければ」と迫られる場面もあり、何から手を付ければよいのか分からなくなりがちです。介護用品は、家庭の一般的な家財とは扱いが異なるものが含まれるため、片付けの前に確認しておきたい点があります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、借りている物と購入した物で扱いがどう違うのか、返却や相談の窓口をどこで確認するか、購入した物を手放すときの考え方、衛生面で気を付けること、そして自分たちだけで運び出せない場合の進め方を順に整理します。無理に急ぐ必要はありません。落ち着いて確認できる順番で進めていきましょう。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>介護用品は「借りている物」と「購入した物」で扱いがまったく違う。まず区別する</li>
          <li>借りている物は、担当のケアマネジャーや貸与事業者に連絡して返却の手順を確認する</li>
          <li>購入した物の処分区分は自治体により異なるため、分別案内で確認する</li>
          <li>急いで決めなくてよい。気持ちの整理と、手続きの確認は別のこととして進める</li>
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

      <H2 id="kiso" num="1">介護用品は「借りた物」と「買った物」で扱いが違う</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        同じ部屋に置かれていても、由来が違えば手放し方も違います。まずここを分けることから始めます。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">片付けを始める前に確認したい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        確認の順番を間違えなければ、あとの作業はぐっと楽になります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">気持ちの整理と、手続きは分けて進める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        介護に使っていた用具は、家族が過ごした時間と結び付いていることが多く、目にするだけでつらいという方もいれば、片付けるのをためらう方もいます。手続きの都合で急かされる場面もありますが、気持ちの整理と、返却や処分の手続きは、必ずしも同時に進める必要はありません。まずは、借りている物の返却の連絡だけを先に済ませ、購入した物の扱いは落ち着いてから決める、という順番でも構いません。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        残すか手放すかを決めるとき、「もう使わないから」という理由だけで急いで判断しなくても大丈夫です。今後、家族の誰かが必要になる可能性がある物、思い出として手元に置いておきたい物は、置き場所を決めて残しても構いません。一方で、置いたままにすると場所を取り、住まいの動線を狭くする面もあります。住環境を整える視点は<Link href="/kaigo-juukankyou-seiri/" className="text-primary underline underline-offset-2">介護に備える部屋の片付け</Link>、離れて暮らす家族の住まいの整え方は<Link href="/tanshin-koureisha-mimamori/" className="text-primary underline underline-offset-2">離れて暮らす高齢の親の見守りと片付け</Link>で扱っています。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        介護のあとに家全体の整理へ進む場合は、用具だけでなく衣類や日用品、書類の整理も出てきます。進め方の全体像は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>や<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>でまとめています。施設への入居に伴って家財を整理する場合は<Link href="/shisetsu-nyukyomae-kazai-seiri/" className="text-primary underline underline-offset-2">施設入居前の家財整理</Link>が参考になります。急がず、確認できたところから一つずつ進めてください。
      </p>

      <H2 id="steps" num="4">介護用品を整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        書き出す→借りた物の連絡をする→購入品の区分を調べる→搬出の段取りを決める→残す物の置き場を決める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">制度・手続き・処分区分は、必ず窓口でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          介護保険にもとづく用具の貸与・購入の取り扱い、返却の手順、費用の扱いは、契約の内容や地域によって異なります。本記事は一般的な考え方の整理にとどめており、個別の制度上の判断を示すものではありません。実際の手続きは、担当のケアマネジャー、契約している事業者、地域包括支援センター、またはお住まいの自治体の介護保険の窓口にご確認ください。購入した用具を処分する場合の分別区分・粗大ごみの対象・出し方も自治体によって異なりますので、市区町村の公式案内をご確認ください。使用済みの用具の衛生面の取り扱いについても、事業者や自治体の案内に従ってください。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        用具の整理が済んだあと、部屋全体の片付けに進む場合は、衣類・日用品・書類など、判断が必要な物が続きます。無理のない範囲で区切りながら進めてください。書類や貴重品が出てきた場合の扱いは<Link href="/kichouhin-genkin-hakken/" className="text-primary underline underline-offset-2">片付け中に貴重品や現金が出てきたら</Link>、本や書類の整理は<Link href="/hon-shorui-seiri/" className="text-primary underline underline-offset-2">本・書類の整理と処分方法</Link>、大きい家具の扱いは<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>で解説しています。
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
        次のような状況では、自分たちだけで抱え込まず、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。故人の物を扱う場合の進め方や配慮についても、事前に確認しておくと安心です。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたもので、介護・医療・介護保険制度に関する個別の助言を行うものではありません。福祉用具の貸与・購入の取り扱い、返却の手順、費用の扱いは、契約の内容や地域によって異なりますので、担当のケアマネジャー、契約している事業者、地域包括支援センター、またはお住まいの自治体の介護保険窓口にご確認ください。購入した用具を処分する場合の分別区分・粗大ごみの対象・出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
