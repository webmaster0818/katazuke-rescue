import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shoukaki-shobun/";
const TITLE = "家庭の消火器の処分方法｜リサイクル窓口・リサイクルシール・ゆうパック回収の使い分け";
const DESC =
  "期限切れや不要になった家庭の消火器の処分方法として、自治体のごみ収集に出せない理由、消火器リサイクル推進センターの特定窓口・指定引取場所・ゆうパック回収の違い、リサイクルシールの確認と購入、費用の考え方、エアゾール式簡易消火具の扱い、古い消火器を安全に保管・運ぶ手順を、公的機関と公式窓口の情報にもとづいて解説します。";
const PUBLISHED = "2026-10-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "消火器は家庭のごみ収集に出せない物として扱われる",
    body: "総務省消防庁の住宅用消火器に関する案内では、消火器は一般廃棄物として出せないとされ、特定窓口への依頼、指定引取場所への持ち込み、ゆうパックによる回収という方法が示されています。消火器は内部に圧力や薬剤を抱えた容器であり、通常の焼却や破砕の工程にそのまま入れることができないためです。消火器リサイクル推進センターも、廃棄される消火器は自治体が処理困難物として回収しないことが多いと説明しています。片付けの途中で消火器が出てきたら、燃えないごみや粗大ごみの日に出すのではなく、専用の回収ルートに回す物として分けておいてください。",
  },
  {
    title: "国内メーカー製の消火器は全国共通のリサイクルの仕組みで回収される",
    body: "国内メーカーが製造した消火器は、一般社団法人日本消火器工業会が環境大臣の広域認定を受けて運営する廃消火器リサイクルシステムで回収・リサイクルされます。この仕組みの窓口と案内を担っているのが、株式会社消火器リサイクル推進センターです。メーカーを問わず全国で収集・運搬できること、すでに撤退した国内メーカーの消火器も対象になることが特徴とされています。同センターによると、回収された消火器は粉末薬剤や本体容器などの再資源化率が9割以上とされています。家庭の消火器も、この仕組みに乗せるのが基本の処分方法です。",
  },
  {
    title: "住宅用消火器には使用の目安となる年数があり、古い物は早めに手放す",
    body: "消火器リサイクル推進センターの案内では、すべての消火器の本体に製造年が表示されており、各メーカーは設計標準使用期限を業務用で10年、住宅用で5年としています。本体の腐食が進んだ物、へこみや変形がある物、ホースが外れた物など、傷んだ消火器や年数を過ぎた消火器は、使用せずに処分するよう案内されています。実家や空き家の片付けでは、何十年も前の消火器が物置や廊下の隅から見つかることが少なくありません。見つけたら本体の表示で製造年を確かめ、処分の段取りに入ってください。",
  },
];

const merits = [
  {
    title: "方法1 特定窓口に引き取りや持ち込みを依頼する",
    body: "特定窓口は、主に消火器の販売代理店や防災・防犯の業者が担っており、消火器リサイクル推進センターによると全国に約5,000か所あります。廃消火器の引き取り、一時保管、問い合わせへの対応、リサイクルシールの販売を行う窓口ですが、すべての窓口が引き取りに来てくれるわけではないため、可否は窓口に直接確認する必要があります。引き取りを依頼する場合や特定窓口へ持ち込む場合は、リサイクルシール代とは別に収集運搬費や保管費などがかかると案内されています。金額は窓口ごとに異なるため、依頼前に総額を確かめてください。",
  },
  {
    title: "方法2 指定引取場所に自分で持ち込む",
    body: "指定引取場所は、消火器メーカーの営業所や廃棄物処理業者が担う引き取り場所で、全国に約200か所あります。個人も業者も持ち込むことができ、同センターの案内では、指定引取場所へ持ち込んだ場合はリサイクルシール代の負担のみで引き取るとされています。ただし、シールの販売や引き取りの扱いは場所によって異なり、事前の連絡が求められています。近くの特定窓口・指定引取場所は、消火器リサイクル推進センターの「リサイクル窓口検索」で地図から探せます。車で運べる距離に指定引取場所がある場合は、費用を抑えやすい方法です。",
  },
  {
    title: "方法3 ゆうパックによる回収を申し込む",
    body: "持ち込みが難しい家庭向けに、消火器リサイクル推進センターはゆうパックによる回収を案内しています。事前の申し込みが必要で、消防庁の案内では、申し込み後に伝票と消火器を送るための専用箱が届き、梱包して発送する流れとされています。回収を受け付けている初田製作所の案内によると、回収・リサイクル費用は6,270円（税込）で、専用箱が届く際に代金引換で支払います。薬剤量が3kgを超える消火器や据え置き式の消火器はこの方法を利用できず、申し込み後のキャンセルや変更もできないとされています。本体の表示で薬剤量を確かめてから申し込んでください。",
  },
];

const steps = [
  {
    title: "本体の表示で、製造年・メーカー・種類を確認する",
    body: "最初に、消火器本体のラベルで製造年、製造メーカー、薬剤の種類や量を確認します。廃消火器リサイクルシステムの対象は国内メーカーが製造した消火器で、外国メーカー製の消火器やエアゾール式簡易消火具は対象外です。消火器リサイクル推進センターのよくある質問では、国家検定合格証（銀色のシール）が貼られた物は回収対象の判断材料の一つになると説明されています。判断に迷う場合は、同センターのウェブサイトにある消火器処分診断や、窓口への問い合わせで確かめてください。",
  },
  {
    title: "リサイクルシールが貼られているかを確かめる",
    body: "2010年以降に製造された消火器には、販売時から新品用リサイクルシールが貼られています。このシールには、引き取り後の運搬や処理の費用が含まれています。一方、2009年以前に製造された消火器にはシールが貼られていないため、処分の際に既販品用リサイクルシールを購入して貼る必要があり、シールのない廃消火器は引き取りできないとされています。リサイクルシールには有効期限があり、発行年によって期限が異なります。貼られているシールの期限が切れていないかも、あわせて確認してください。",
  },
  {
    title: "シールがなければ、窓口かセンターから購入する",
    body: "既販品用リサイクルシールは、特定窓口や指定引取場所で購入できます。価格はオープン価格で、窓口ごとに設定されています。家庭向けには、消火器リサイクル推進センターのウェブサイトからも小型用リサイクルシールを購入でき、同センターの案内では1枚600円、1回の注文は5枚まで、送料と代金引換の手数料が別にかかるとされています。小型用シールの対象は、住宅用消火器やABC粉末消火器20型以下などです。購入後の払い戻しはできないとされているため、本数を確かめてから注文してください。",
  },
  {
    title: "回収の方法を選び、窓口に連絡してから動く",
    body: "持ち込める距離に指定引取場所があれば持ち込み、運ぶ手段がなければ特定窓口への引き取り依頼かゆうパック回収、と状況に合わせて方法を選びます。どの方法でも、事前に窓口へ連絡し、受付時間、引き取りの可否、シール代以外の費用を確認してから動くのが確実です。片付けの日程が決まっている場合は、ゆうパックの専用箱の到着や窓口の受付日を逆算し、作業日より前に処分の手配を済ませておくと、消火器だけが部屋に残ることを防げます。",
  },
  {
    title: "運ぶまでの間は、安全な場所に立てて保管する",
    body: "処分までの間は、直射日光や高温を避け、倒れにくい場所に立てて保管します。消火器リサイクル推進センターの案内では、腐食や変形がある古い消火器は、薬剤の放射や解体を絶対に行わないよう注意喚起されています。運ぶ際は、安全栓が付いていることを確かめ、廃消火器や薬剤が飛散・漏えいしないようにするよう案内されています。車に積むときは転がらないように固定し、レバーに荷物が当たらないよう配慮してください。中身は出さずに、そのままの状態で回収に出せます。",
  },
];

const ngActions = [
  {
    title: "燃えないごみや粗大ごみの日に消火器を出す",
    body: "消火器を通常のごみとして集積所に出すと、収集されずに残されたり、収集車や処理施設で破損して事故につながったりするおそれがあります。消防庁は消火器を一般廃棄物として出せないと案内しており、多くの自治体でも収集の対象外とされています。お住まいの自治体の分別案内で消火器の項目を確認すると、専用の回収ルートが紹介されていることが一般的です。分別に迷う物をまとめて集積所に出すことは、片付けの現場で起きやすいつまずきの一つです。",
  },
  {
    title: "中身を空にしようとして、古い消火器を放射させる",
    body: "処分のために中身を出しておこうと、古い消火器を屋外で放射させるのは避けてください。消火器リサイクル推進センターのよくある質問では、腐食がひどい消火器は作動させた際に破裂することがあり、特に加圧式消火器は経年劣化による破裂のおそれがあると説明されています。消火器は中身が入ったままの状態で回収に出せます。自治体によっては空の消火器を引き取ると案内している場合もありますが、同センターは無理な放出は危険であるとして避けるよう呼びかけています。",
  },
  {
    title: "自分で分解したり、穴を開けたりする",
    body: "金属資源として出すつもりで、本体のキャップを外したり、穴を開けたりする行為も危険です。消火器は圧力容器であり、内部に圧力が残っていると部品が飛ぶおそれがあります。薬剤の粉末が室内に広がると、片付けどころではなくなります。分解や解体は専門の設備で行う工程であり、家庭で行う作業ではありません。そのままの形で窓口に引き渡すことが、最も安全で手間の少ない処分方法です。",
  },
  {
    title: "回収の勧誘をその場で受け、費用を確かめずに引き渡す",
    body: "訪問や電話で消火器の回収や交換を勧められた際に、その場で引き渡したり契約したりするのは避けてください。特定窓口かどうか、シール代以外にどのような費用がかかるかは、消火器リサイクル推進センターのリサイクル窓口検索や窓口への問い合わせで確かめられます。費用の内訳が示されないまま高額な請求を受けた場合や、契約の内容に不安がある場合は、消費者ホットライン188に相談してください。お住まいの地域の消費生活センターなどの相談窓口につながります。",
  },
];

const judgeSigns = [
  "消火器のほかにも、物置や倉庫に処分方法の分からない物が多く残っている",
  "実家や空き家の片付けで、消火器を含む大量の不用品を期限までに処分する必要がある",
  "高齢や体調の事情で、重い消火器を指定引取場所まで運ぶことが難しい",
  "腐食した消火器や灯油、塗料、スプレー缶など、扱いに注意が必要な物がまとまって出てきた",
  "遠方の家の片付けで、現地に何度も通って処分の手配をすることができない",
];

const faqs = [
  {
    q: "消火器は自治体の粗大ごみとして出せますか？",
    a: "一般的には出せません。総務省消防庁の案内では、消火器は一般廃棄物として出せないとされ、特定窓口への依頼、指定引取場所への持ち込み、ゆうパックによる回収が示されています。消火器リサイクル推進センターも、自治体が処理困難物として回収しないことが多いと説明しています。念のため、お住まいの自治体の分別案内で消火器の項目を確認し、案内されている回収ルートを利用してください。",
  },
  {
    q: "消火器の処分にはいくらかかりますか？",
    a: "方法によって異なります。消火器リサイクル推進センターの案内では、指定引取場所へ持ち込む場合はリサイクルシール代のみで引き取るとされ、家庭向けに同センターが販売する小型用シールは1枚600円（送料・代金引換の手数料は別）です。特定窓口への持ち込みや引き取りの依頼では、シール代とは別に収集運搬費や保管費がかかり、金額は窓口ごとに異なります。ゆうパック回収は、受付先の初田製作所の案内で6,270円（税込）です。依頼前に窓口で総額を確認してください。",
  },
  {
    q: "スプレー式の簡易消火具も同じ方法で処分できますか？",
    a: "できません。エアゾール式簡易消火具は消火器ではないため、廃消火器リサイクルシステムでは引き取れないと案内されています。消火器リサイクル推進センターによると、地域の自治体のルールに従ってスプレー缶として処分し、中身の薬剤の出し方は製造元または販売元に問い合わせるよう案内されています。製造元が分からない場合は、同センターの案内に掲載されている日本消防検定協会の消費者相談窓口に相談できます。",
  },
  {
    q: "ホームセンターや購入した店で引き取ってもらえますか？",
    a: "特定窓口として登録されている店であれば引き取りの対象になります。消火器リサイクル推進センターのよくある質問では、特定窓口でない店でも、新しい消火器を購入する際に古い消火器を下取りしてもらえる場合があると説明されています。引き取りの可否や費用は店によって異なるため、持ち込む前に店舗へ確認してください。近くの特定窓口は、同センターのリサイクル窓口検索で探せます。",
  },
  {
    q: "製造したメーカーがすでにない古い消火器も引き取ってもらえますか？",
    a: "引き取りの対象になる場合があります。消火器リサイクル推進センターのよくある質問では、そのメーカーが存在していた当時に日本消火器工業会の会員であった場合は取り扱いの対象になり、国家検定合格証（シール）が貼られた物は回収対象の判断材料の一つになると説明されています。2009年以前に製造された物であれば、既販品用リサイクルシールの購入も必要です。判断できない場合は、窓口に本体の表示を伝えて確認してください。",
  },
];

const sources = [
  { label: "住宅用消火器（住宅用消火器Q&A・エアゾール式簡易消火具）", org: "総務省消防庁", url: "https://www.fdma.go.jp/relocation/html/life/yobou_contents/fire_extinguisher/" },
  { label: "消火器の処分方法 処分の手順", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/disposal/help/" },
  { label: "回収窓口の種類（特定窓口と指定引取場所）", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/disposal/type/" },
  { label: "注意事項（老朽化消火器・耐用年数）", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/disposal/note/" },
  { label: "リサイクルシールとは", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/recycleseal/kind/" },
  { label: "リサイクルシールの購入方法", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/recycleseal/buy/" },
  { label: "回収できないもの（対象外品目）", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/object/about/" },
  { label: "よくあるご質問", org: "消火器リサイクル推進センター", url: "https://www.ferpc.jp/disposal/qa/" },
  { label: "家庭用廃消火器 回収・リサイクル（引き取り回収ゆうパック）", org: "初田製作所", url: "https://www.ferecycle.jp/" },
  { label: "消費者ホットライン", org: "消費者庁", url: "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/" },
];

const related = [
  { href: "/bunbetsu-muzukashii-gomi/", label: "分別が難しいごみの出し方", desc: "スプレー缶・電池など危険物の考え方" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の処分" },
  { href: "/kuruma-shanai-seiri/", label: "車内・カー用品の整理と処分", desc: "車載の消火器や発炎筒の扱い" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置・倉庫の解体前整理", desc: "中身の片付けと処分の段取り" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めない段取り" },
  { href: "/suigin-keikoutou-shobun/", label: "蛍光灯・水銀体温計の処分", desc: "水銀を使った製品の手放し方" },
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
    { "@type": "ListItem", position: 2, name: "家庭の消火器の処分方法" },
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
    { href: "#kiso", label: "1｜消火器の処分で押さえる前提" },
    { href: "#merit", label: "2｜消火器を手放す3つの方法" },
    { href: "#houshin", label: "3｜片付けの中で消火器を扱う全体方針" },
    { href: "#steps", label: "4｜消火器を処分する5ステップ" },
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

      <Breadcrumb items={[{ label: "家庭の消火器の処分方法" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          家庭の消火器の処分方法｜リサイクル窓口・リサイクルシール・ゆうパック回収の使い分け
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月17日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          実家の廊下や物置、台所の隅から、いつ買ったか分からない消火器が出てくることは、片付けの現場でよくあります。消火器は燃えないごみや粗大ごみとして出せない物の代表で、処分の方法を知らないまま後回しにされ、片付けの最後まで残りやすい品目です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、総務省消防庁と消火器リサイクル推進センターの公式情報にもとづいて、家庭の消火器を手放す3つの方法、リサイクルシールの確認と購入、費用の考え方、スプレー式の簡易消火具の扱い、処分までの安全な保管と運び方を順に解説します。料金や受付の条件は変わることがあるため、依頼の前に各窓口の最新の案内をご確認ください。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>消火器は一般廃棄物として出せず、消火器リサイクル推進センターが案内する回収ルートで処分する</li>
          <li>方法は特定窓口への依頼、指定引取場所への持ち込み、ゆうパック回収の3つで、費用のかかり方が異なる</li>
          <li>2009年以前に製造された消火器は、既販品用リサイクルシールを購入して貼る必要がある</li>
          <li>古い消火器は放射・分解をせず、中身が入ったまま安全に保管して窓口に引き渡す</li>
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

      <H2 id="kiso" num="1">消火器の処分で押さえる前提</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        処分の方法を選ぶ前に、消火器がほかの不用品と違う扱いになる理由を整理しておいてください。理由が分かると、どの窓口に何を確認すればよいかが明確になります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">消火器を手放す3つの方法</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        消火器リサイクル推進センターが案内する処分方法は、次の3つです。費用と手間のかかり方が異なるため、運ぶ手段と日程に合わせて選んでください。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">片付けの中で消火器を扱う全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家全体の片付けでは、消火器のように専用の回収ルートが必要な物を、仕分けの早い段階で別の場所に集めておくことが大切です。燃えないごみや粗大ごみと一緒に積んでおくと、収集日に誤って出してしまったり、最後に処分先が決まらず残ったりするためです。消火器は、物置や車庫から出てくる灯油、塗料、スプレー缶、バッテリーなどと同じく「自治体の通常の収集に出せない可能性がある物」の置き場所にまとめ、本数と製造年をメモしておくと、窓口への問い合わせがスムーズになります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        スプレー缶や電池など、ほかの分別が難しい物の考え方は<Link href="/bunbetsu-muzukashii-gomi/" className="text-primary underline underline-offset-2">分別が難しいごみの出し方</Link>にまとめています。車庫や物置にまとめて残っている場合は<Link href="/garage-katazuke/" className="text-primary underline underline-offset-2">車庫・ガレージの片付け</Link>、車に積んだままの消火器や発炎筒は<Link href="/kuruma-shanai-seiri/" className="text-primary underline underline-offset-2">車内・カー用品の整理と処分</Link>も参考にしてください。
      </p>

      <H2 id="steps" num="4">消火器を処分する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、本体の表示を確認する→リサイクルシールを確かめる→必要ならシールを購入する→回収の方法を選ぶ→安全に保管して引き渡す、の5ステップです。
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
        消火器と一緒に、水銀を使った体温計や蛍光灯が見つかることもあります。それらの扱いは<Link href="/suigin-keikoutou-shobun/" className="text-primary underline underline-offset-2">蛍光灯・水銀体温計の処分</Link>で解説しています。物置そのものを解体する予定がある場合は<Link href="/monooki-kaitai-mae-seiri/" className="text-primary underline underline-offset-2">物置・倉庫の解体前整理</Link>、処分先全体の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルートの使い分け</Link>を参考にしてください。
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
        消火器が1本だけであれば、窓口への持ち込みやゆうパック回収で自力でも処分できます。ただし、次のような状況では、片付け・不用品回収業者に家全体の片付けをまとめて相談することも選択肢になります。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        消火器は業者によって取り扱いの可否が異なるため、見積もりの段階で消火器が含まれることを伝え、引き取れるか、どのルートで処分するかを確認してください。廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させることも大切です。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で比較して選べます。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        本記事の制度・費用・手順の記述は、以下の公的機関と公式窓口の情報にもとづいています。
      </p>
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
        本記事は一般的な知識の提供を目的としたものです。消火器の回収方法、リサイクルシールの価格や有効期限、ゆうパック回収の費用と条件は変更されることがあるため、必ず消火器リサイクル推進センターおよび各窓口の最新の案内をご確認ください。消火器の分別区分や自治体での取り扱いは、お住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
