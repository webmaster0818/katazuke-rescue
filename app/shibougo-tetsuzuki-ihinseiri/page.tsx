import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/shibougo-tetsuzuki-ihinseiri/";
const TITLE = "家族が亡くなった後の手続きと遺品整理の順番｜期限のある届出と片付けを始める時期";
const DESC =
  "家族が亡くなった後の手続きと遺品整理の順番を、期限の早い順に解説します。死亡届（7日以内）、年金の届出（10日・国民年金は14日以内）、相続の承認・放棄（3か月）、準確定申告（4か月）、相続税の申告（10か月）、相続登記（3年）の期限を公的情報で確認し、遺品整理を始める時期とあわせてまとめました。";
const PUBLISHED = "2026-10-20";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "手続きには法律で期限が定められたものがあり、遺品整理より先に進める",
    body: "家族が亡くなると、死亡届や年金の届出、相続の承認・放棄の判断、税の申告など、期限が定められた手続きが続きます。期限の早いものは死亡を知った日から7日以内と短く、遺品整理に時間を取られているうちに期限が迫ることがあります。遺品整理には法律上の期限がないため、まず期限のある手続きの予定を立て、そのうえで片付けの時期を決める順番で進めてください。",
  },
  {
    title: "相続の判断が済む前の片付けは、相続を承認したとみなされるおそれがある",
    body: "民法921条は、相続人が相続財産の全部または一部を処分したときは、単純承認（財産も債務もすべて受け継ぐこと）をしたものとみなすと定めています。故人に借金があるかもしれない場合など、相続放棄を考える可能性があるうちに家財を捨てる・売る・譲ると、放棄できなくなるおそれがあります。民法915条は、相続人は承認または放棄をする前に相続財産の調査ができるとしているため、最初の段階では「片付け」ではなく「調べて記録する」ことを目的にしてください。",
  },
  {
    title: "書類探しは早めに、家財の処分は相続の方針が決まってから",
    body: "手続きの多くは、故人の年金証書、通帳、保険証券、不動産の権利証や固定資産税の通知書、確定申告の控えなどの書類を必要とします。これらは遺品整理の途中で見つかることが多く、誤って処分すると手続きが滞ります。故人の住まいに入ったら、まず書類を探して一か所に集め、家財の処分は相続の方針が決まってから進めると、手続きと片付けの両方を無理なく進められます。",
  },
];

const deadlines = [
  { when: "7日以内", name: "死亡届", detail: "届出義務者が死亡の事実を知った日から7日以内（国外で死亡したときは3か月以内）。死亡地、故人の本籍地、届出人の所在地のいずれかの市区町村へ。診断書または検案書を添付", basis: "戸籍法86条・87条・88条・25条" },
  { when: "死亡届の受理後", name: "火葬許可", detail: "火葬には市区町村長の許可が必要で、死亡届を受理した市区町村長が許可する。火葬は原則として死亡後24時間を経過した後", basis: "墓地、埋葬等に関する法律3条・5条" },
  { when: "10日以内（国民年金は14日以内）", name: "年金受給権者死亡届", detail: "年金を受けていた方が亡くなった場合。日本年金機構にマイナンバーが収録されている方は原則不要（未支給年金の請求などは必要）。年金事務所または年金相談センターへ", basis: "日本年金機構" },
  { when: "14日以内", name: "世帯主の変更の届出", detail: "世帯または世帯主に変更があった方（政令で定める者を除く）は、変更があった日から14日以内に市区町村へ届け出る", basis: "住民基本台帳法25条" },
  { when: "遅滞なく", name: "遺言書の検認", detail: "自筆の遺言書の保管者または発見した相続人は、家庭裁判所に検認を請求する。公正証書遺言と、法務局に保管されている自筆証書遺言は検認不要", basis: "民法1004条・遺言書保管法11条・裁判所" },
  { when: "3か月以内", name: "相続の承認・放棄", detail: "自己のために相続の開始があったことを知った時から3か月以内に、単純承認・限定承認・相続放棄のいずれかを選ぶ。家庭裁判所に期間の伸長を請求できる", basis: "民法915条・裁判所" },
  { when: "4か月以内", name: "準確定申告", detail: "故人に申告が必要な所得があった場合、相続人が1月1日から死亡日までの所得を、相続の開始があったことを知った日の翌日から4か月以内に申告・納税する", basis: "国税庁 タックスアンサーNo.2022" },
  { when: "10か月以内", name: "相続税の申告", detail: "遺産の額が基礎控除額（3,000万円＋600万円×法定相続人の数）を超える場合など。被相続人が死亡したことを知った日の翌日から10か月以内", basis: "国税庁 タックスアンサーNo.4205・No.4152" },
  { when: "3年以内", name: "相続登記", detail: "不動産を相続で取得したことを知った日から3年以内。正当な理由なく申請しない場合は10万円以下の過料の対象。令和6年4月1日より前の相続で未登記のものは令和9年3月31日まで", basis: "不動産登記法76条の2・164条・法務省" },
];

const steps = [
  {
    title: "亡くなった直後から7日以内に、死亡届と火葬の手続きを済ませる",
    body: "医師から死亡診断書（事故などの場合は死体検案書）を受け取り、死亡届を市区町村に提出します。戸籍法86条により、死亡届は死亡の事実を知った日から7日以内に提出する必要があります。届出をする義務がある方の順序は同居の親族、その他の同居者、家主・地主などと定められていますが、同居していない親族なども届け出ることができます（戸籍法87条）。火葬には市区町村長の許可が必要で、葬儀社が届出を代行する場合も、提出期限と火葬の日程を確認しておいてください。",
  },
  {
    title: "2週間以内を目安に、年金と住民票まわりの届出を確認する",
    body: "年金を受けていた方が亡くなった場合、日本年金機構の案内では、死亡届が必要な場合は10日（国民年金は14日）以内に提出します。日本年金機構にマイナンバーが収録されている方は死亡届が原則不要ですが、未支給年金の請求などは必要です。届出が遅れて亡くなった日の翌日以後に年金を受け取った場合は、後日返還が必要になります。世帯主が亡くなって世帯や世帯主に変更があった場合は、住民基本台帳法25条により14日以内に市区町村へ届け出ます。健康保険や介護保険の資格喪失の手続きは、加入していた制度や自治体によって異なるため、市区町村の窓口でご確認ください。",
  },
  {
    title: "故人の住まいで書類と遺言書を探し、一か所に集める",
    body: "手続きに必要な書類と、財産・債務の手がかりになる書類を探します。通帳、キャッシュカード、年金証書、保険証券、借入の契約書や督促状、クレジットカードの明細、不動産の権利証、固定資産税の通知書、確定申告の控えなどが対象です。この段階では家財を処分せず、書類だけを一か所にまとめます。自筆の遺言書が見つかった場合は、民法1004条により、遅滞なく家庭裁判所に検認を請求します。封印のある遺言書は家庭裁判所で開封するため、その場で開けないでください。",
  },
  {
    title: "3か月以内に、相続を承認するか放棄するかを決める",
    body: "民法915条により、相続人は自己のために相続の開始があったことを知った時から3か月以内に、単純承認・限定承認・相続放棄のいずれかを選ぶ必要があります。期間内に判断できない場合は、家庭裁判所に期間の伸長を請求できます。期間内に限定承認も放棄もしなかった場合は、単純承認をしたものとみなされます（民法921条）。故人の財産と債務の全体が分からない場合や、借金がある可能性がある場合は、片付けより先に弁護士・司法書士などの専門家や法テラスに相談してください。",
  },
  {
    title: "相続の方針が決まってから、遺品整理と形見分けを進める",
    body: "相続することが決まったら、遺品整理と形見分けを具体的に進めます。相続人が複数いる場合は、誰が何を受け取るか、処分してよい物は何かを相続人の間で確認し、書面やメモに残してから作業に入ると、後の行き違いを防げます。賃貸住宅の場合は、管理会社と明け渡しの期日を調整し、その期日から逆算して片付けの予定を立ててください。相続放棄をした場合でも、放棄の時に相続財産を現に占有している方には保存の義務があるため（民法940条）、家財の扱いは専門家の助言に沿って進めてください。",
  },
  {
    title: "4か月・10か月・3年の期限に向けて、税と登記の手続きを進める",
    body: "国税庁の案内では、故人に申告が必要な所得があった場合、相続人は相続の開始があったことを知った日の翌日から4か月以内に準確定申告と納税を行います。遺産の額が基礎控除額（3,000万円＋600万円×法定相続人の数）を超える場合などは、被相続人が死亡したことを知った日の翌日から10か月以内に相続税の申告が必要です。不動産を相続した場合は、取得を知った日から3年以内に相続登記を申請します（不動産登記法76条の2）。遺品整理で見つかった書類は、これらの手続きが済むまで保管してください。",
  },
];

const ngActions = [
  {
    title: "葬儀が済んですぐに、家財をまとめて処分してしまう",
    body: "葬儀の後、親族が集まっているうちに片付けを済ませたいと考えることがあります。しかし、相続の方針が決まる前に家財を処分すると、相続を承認したとみなされるおそれがあるほか、手続きに必要な書類まで一緒に処分してしまうことがあります。親族が集まる機会は、片付けではなく、相続人の確認や書類の所在、今後の予定を共有する場として使ってください。",
  },
  {
    title: "郵便物を確認しないまま捨てる",
    body: "故人宛ての郵便物には、年金や保険、税金、借入などの手続きに関わる通知が含まれていることがあります。死亡後もしばらくは郵便物が届き続けるため、開封して内容を確認し、手続きに関わる物は書類と同じ場所にまとめて保管してください。財産や債務の手がかりが郵便物から見つかることもあります。",
  },
  {
    title: "期限の短い手続きを後回しにして、片付けを優先する",
    body: "遺品整理には法律上の期限がありませんが、死亡届は7日以内、相続の承認・放棄は3か月以内、準確定申告は4か月以内と、手続きには期限があります。片付けの作業に追われて期限を過ぎると、相続放棄ができなくなるなど、取り返しのつかない結果につながることがあります。片付けの予定を立てる前に、期限のある手続きの日程を先に決めてください。",
  },
  {
    title: "故人の預金を引き出して、片付けの費用に充てる",
    body: "故人の口座から預金を引き出して片付けや業者の費用に充てると、相続財産に手を付けることになり、相続の判断に影響するおそれがあります。どのような支払いであれば問題にならないかは個別の事情によるため、当サイトでは断定しません。引き出す前に専門家へ相談し、支払いが生じた場合は領収書とともに記録を残してください。",
  },
];

const judgeSigns = [
  "相続の方針が決まり、家財の量が多く自力では片付けきれない",
  "遠方に住んでいて、故人の住まいに通って作業する時間が取れない",
  "賃貸住宅の明け渡しの期日が決まり、期日までに家財を運び出す必要がある",
  "孤独死などで、通常の清掃では対応できない汚れや臭いがある",
  "相続人の間で処分してよい物の範囲が決まり、書面で確認できている",
];

const faqs = [
  {
    q: "遺品整理はいつから始めるのがよいですか？",
    a: "遺品整理には法律上の期限はありません。ただし、相続の方針が決まる前に家財を処分すると、民法921条により相続を承認したとみなされるおそれがあるため、家財の処分は相続を承認するか放棄するかを決めてから進めるのが基本です。それまでの間は、手続きに必要な書類を探して保管し、家の中の状態を写真などで記録しておいてください。賃貸住宅で明け渡しの期日がある場合は、管理会社と期日を調整したうえで予定を立ててください。",
  },
  {
    q: "死亡届は誰が、どこに出せばよいですか？",
    a: "戸籍法87条は、死亡届を出す義務がある方の順序を、同居の親族、その他の同居者、家主・地主または家屋・土地の管理人と定めており、同居していない親族なども届け出ることができます。提出先は、死亡地、故人の本籍地、届出人の所在地のいずれかの市区町村です（戸籍法88条・25条）。期限は死亡の事実を知った日から7日以内（国外で死亡したときは3か月以内）で、診断書または検案書を添付します。",
  },
  {
    q: "年金の死亡届は必ず出す必要がありますか？",
    a: "日本年金機構の案内では、日本年金機構にマイナンバーが収録されている方は、年金受給権者死亡届が原則不要です。ただし、未支給年金の請求などの手続きは必要です。死亡届が必要な場合は、10日（国民年金は14日）以内に、年金事務所または年金相談センターに提出します。障害基礎年金・遺族基礎年金のみを受けていた方の場合は、市区町村の窓口が提出先です。",
  },
  {
    q: "遺品整理の途中で遺言書が見つかりました。どうすればよいですか？",
    a: "自筆の遺言書の場合、民法1004条により、遺言書の保管者や発見した相続人は、遅滞なく家庭裁判所に提出して検認を請求する必要があります。封印のある遺言書は、家庭裁判所で相続人などの立ち会いのもとで開封するため、その場で開けないでください。公正証書による遺言と、法務局に保管されている自筆証書遺言は検認が不要です。遺言の内容によって形見分けや処分の進め方が変わるため、遺品整理はいったん止めてください。",
  },
  {
    q: "準確定申告と相続税の申告は、誰でも必要ですか？",
    a: "どちらも全員に必要な手続きではありません。準確定申告は、故人に申告が必要な所得があった場合に、相続人が相続の開始があったことを知った日の翌日から4か月以内に行います。相続税の申告は、遺産の額が基礎控除額（3,000万円＋600万円×法定相続人の数）を超える場合などに、被相続人が死亡したことを知った日の翌日から10か月以内に行います。該当するかどうかは、税務署や税理士にご確認ください。",
  },
];

const sources = [
  { label: "戸籍法（第25条・第86条・第87条・第88条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/322AC0000000224" },
  { label: "墓地、埋葬等に関する法律（第3条・第5条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/323AC0000000048" },
  { label: "住民基本台帳法（第25条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/342AC0000000081" },
  { label: "民法（第915条・第921条・第940条・第1004条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/129AC0000000089" },
  { label: "法務局における遺言書の保管等に関する法律（第11条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/430AC0000000073" },
  { label: "不動産登記法（第76条の2・第164条）", org: "e-Gov法令検索（デジタル庁）", url: "https://laws.e-gov.go.jp/law/416AC0000000123" },
  { label: "年金受給者が亡くなりました。何か手続きは必要ですか。", org: "日本年金機構", url: "https://www.nenkin.go.jp/section/faq/jukyu/jukyushatodoke/kyotsu/shibo/20140421.html" },
  { label: "年金を受けている方が亡くなったとき", org: "日本年金機構", url: "https://www.nenkin.go.jp/service/jukyu/tetsuduki/kyotsu/jukyu/20140731-01.html" },
  { label: "No.2022 確定申告を要する人が死亡したとき（準確定申告）", org: "国税庁", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2022.htm" },
  { label: "No.4205 相続税の申告と納税", org: "国税庁", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4205.htm" },
  { label: "No.4152 相続税の計算", org: "国税庁", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm" },
  { label: "相続登記の申請義務化に関するQ＆A", org: "法務省", url: "https://www.moj.go.jp/MINJI/minji05_00565.html" },
  { label: "相続の放棄の申述", org: "裁判所", url: "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html" },
  { label: "遺言書の検認", org: "裁判所", url: "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_17/index.html" },
];

const related = [
  { href: "/souzoku-houki-ihinseiri/", label: "相続放棄を考えているときの遺品整理", desc: "判断が済むまでの家財の扱い" },
  { href: "/kojin-chintai-akewatashi/", label: "亡くなった家族の賃貸住宅の明け渡し", desc: "解約から退去日までの段取り" },
  { href: "/ihinseiri-jibunde/", label: "遺品整理の進め方", desc: "自分で行う手順と業者に任せる範囲" },
  { href: "/ihin-katamiwake-susumekata/", label: "遺品整理と形見分けの進め方", desc: "時期・順番・渡し方の考え方" },
  { href: "/souzoku-ie-katazuke/", label: "相続した家の片付け", desc: "始める時期と専門家に相談すべき論点" },
  { href: "/digital-ihin-seiri/", label: "デジタル遺品の整理方法", desc: "故人のスマホ・PC・ネット契約の扱い" },
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
    { "@type": "ListItem", position: 2, name: "家族が亡くなった後の手続きと遺品整理の順番" },
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
    { href: "#kiso", label: "1｜手続きと遺品整理の関係" },
    { href: "#kigen", label: "2｜期限のある主な手続きの一覧" },
    { href: "#steps", label: "3｜手続きと遺品整理を進める6ステップ" },
    { href: "#jiki", label: "4｜遺品整理を始める時期の考え方" },
    { href: "#ng", label: "5｜避けるべき4つの行動" },
    { href: "#gyousha", label: "6｜業者への依頼を検討する時期" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#shutten", label: "8｜出典・参考にした公的情報" },
    { href: "#related", label: "9｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "家族が亡くなった後の手続きと遺品整理の順番" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          家族が亡くなった後の手続きと遺品整理の順番｜期限のある届出と片付けを始める時期
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月20日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          家族が亡くなった後は、葬儀の準備と並行して、役所への届出や年金、相続、税の手続きが続きます。故人の住まいの片付けも気にかかりますが、手続きには期限があり、片付けを先に進めると、手続きに必要な書類を失ったり、相続の判断に影響したりするおそれがあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、e-Gov法令検索、国税庁、日本年金機構、法務省、裁判所の公式情報をもとに、期限のある主な手続きを早い順に整理し、遺品整理をどの段階で始めればよいかを解説します。個別の判断は、市区町村の窓口、税務署、弁護士・司法書士・税理士などの専門家にご確認ください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>死亡届は死亡の事実を知った日から7日以内、年金の死亡届は10日（国民年金は14日）以内が期限（マイナンバー収録者は年金の死亡届が原則不要）</li>
          <li>相続の承認・放棄は3か月以内、準確定申告は4か月以内、相続税の申告は10か月以内、相続登記は3年以内</li>
          <li>遺品整理には法律上の期限がなく、家財の処分は相続の方針が決まってから進めるのが基本</li>
          <li>最初の段階では、片付けより先に書類と遺言書を探して一か所に集める</li>
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

      <H2 id="kiso" num="1">手続きと遺品整理の関係</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        手続きと遺品整理の順番を考える前に、両者がどのように関わるのかを確認しておいてください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kigen" num="2">期限のある主な手続きの一覧</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        法令と公的機関の案内で期限を確認できた主な手続きを、期限の早い順にまとめました。故人の状況によっては不要な手続きもあります。
      </p>
      <div className="overflow-x-auto mb-4 rounded-2xl border border-border">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">期限</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">手続き</th>
              <th className="px-4 py-3 text-left font-bold">内容・窓口</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">根拠</th>
            </tr>
          </thead>
          <tbody>
            {deadlines.map((d, i) => (
              <tr key={d.name} className={i % 2 ? "bg-surface-alt" : "bg-surface"}>
                <td className="px-4 py-3 font-bold text-primary align-top">{d.when}</td>
                <td className="px-4 py-3 font-medium text-text-primary align-top whitespace-nowrap">{d.name}</td>
                <td className="px-4 py-3 text-text-secondary align-top leading-7">{d.detail}</td>
                <td className="px-4 py-3 text-text-muted align-top text-xs leading-6">{d.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted leading-6 mb-4">
        期限の起算日は手続きごとに異なります（死亡の事実を知った日、相続の開始があったことを知った日の翌日など）。健康保険・介護保険の資格喪失、公共料金や各種契約の名義変更・解約は、加入先や自治体によって手続きと期限が異なるため、表には含めていません。
      </p>

      <H2 id="steps" num="3">手続きと遺品整理を進める6ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        死亡届と火葬の手続き→年金と住民票まわりの届出→書類と遺言書の確認→相続の承認・放棄の判断→遺品整理と形見分け→税と登記の手続き、の順に進めます。
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
        相続放棄を考えている場合の家財の扱いは<Link href="/souzoku-houki-ihinseiri/" className="text-primary underline underline-offset-2">相続放棄を考えているときの遺品整理の注意点</Link>、賃貸住宅の解約と明け渡しは<Link href="/kojin-chintai-akewatashi/" className="text-primary underline underline-offset-2">亡くなった家族の賃貸住宅の解約・明け渡し</Link>で解説しています。故人のスマートフォンやネット上の契約は<Link href="/digital-ihin-seiri/" className="text-primary underline underline-offset-2">デジタル遺品の整理方法</Link>をご覧ください。
      </p>

      <H2 id="jiki" num="4">遺品整理を始める時期の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遺品整理には法律上の期限がないため、始める時期は、期限のある手続きと相続の方針から逆算して決めます。死亡届や年金の届出が済み、書類を集め終えた段階では、まだ家財の処分には進まず、相続を承認するか放棄するかを決めることを優先してください。相続の方針が決まった後は、賃貸住宅の明け渡しの期日、相続人が集まれる日程、四十九日などの法要の予定など、家族の事情に合わせて時期を決めることができます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        相続することに決まった後の遺品整理の具体的な手順は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>、形見分けの時期と渡し方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">遺品整理と形見分けの進め方</Link>、持ち家を相続した場合の片付けは<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付け</Link>で解説しています。
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

      <H2 id="gyousha" num="6">業者への依頼を検討する時期</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        遺品整理業者や不用品回収業者への依頼は、相続の方針が決まり、処分してよい物の範囲が相続人の間で確認できてから検討してください。次のような状況であれば、業者への依頼が選択肢になります。
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
        依頼する際は、残しておく書類や形見分けする品を先に取り分け、作業範囲と処分してよい物を書面で確認してください。廃棄物の扱いに必要な許可を確認できる業者を選び、作業前の見積もりで総額を確定させることも大切です。料金は物量・作業内容・地域により異なるため、複数社を比較すると判断しやすくなります。遺品整理の依頼先は<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>や<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>で比較できます。サービスの内容は<Link href="/service/ihinseiri/" className="text-primary underline underline-offset-2">遺品整理サービスの解説</Link>をご覧ください。
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
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・2026年10月20日確認）
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
        本記事は一般的な知識の提供を目的としたものであり、法律・税務上の助言ではありません。手続きの要否・期限・必要書類は、故人の状況や自治体によって異なります。市区町村の窓口、年金事務所、税務署、家庭裁判所、法務局の案内をご確認のうえ、個別の判断は弁護士・司法書士・税理士などの専門家にご相談ください。
      </p>
    </article>
  );
}
