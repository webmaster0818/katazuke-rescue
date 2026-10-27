import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kojin-kuruma-souzoku-haisha/";
const TITLE = "亡くなった家族の車の処分｜相続の名義変更と廃車（抹消登録）の手続き・必要書類";
const DESC =
  "亡くなった家族の車は、車検証の所有者欄が故人なら相続の手続きが必要です。" +
  "乗り続ける・売る場合は相続による移転登録、解体する場合は相続人が永久抹消登録を申請します。" +
  "普通車は運輸支局、軽自動車は軽自動車検査協会が窓口です。必要書類と車検切れの扱いを公的機関の案内で整理しました。";
const PUBLISHED = "2026-10-27";
const CHECKED = "2026年10月27日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/og-default.png?v=20261014"] },
};

const basics = [
  {
    title: "最初に、車検証の「所有者」欄を確認します",
    body:
      "相続の手続きが必要になるのは、車検証の所有者欄に亡くなった方の名前がある場合です。" +
      "関東運輸局は、第三者が所有者である場合は相続は発生しないとしています。" +
      "東北運輸局宮城運輸支局は、所有者が自動車会社やクレジット会社などの場合は相続の手続きにはならず、通常の移転登録（名義変更）の手続きになると案内しています。",
  },
  {
    title: "所有者が変わったら、15日以内に移転登録を申請します",
    body:
      "道路運送車両法第13条は、登録自動車の所有者に変更があったときは、新所有者はその事由があった日から15日以内に移転登録を申請しなければならないと定めています。" +
      "北海道運輸局は、車検証の所有者が亡くなった場合は、その自動車を相続人に名義変更（移転登録）する必要があると案内しています。",
  },
  {
    title: "解体する車は、引取業者に引き渡します",
    body:
      "使用済自動車の再資源化等に関する法律（自動車リサイクル法）第8条は、自動車の所有者は、自動車が使用済自動車となったときは引取業者に引き渡さなければならないと定めています。" +
      "解体した登録自動車は、所有者が永久抹消登録を申請します（道路運送車両法第15条）。",
  },
];

const table: [string, string, string][] = [
  ["普通車を相続人が乗り続ける・売る", "相続による移転登録（名義変更）。売る場合も、関東運輸局は相続と第三者への名義変更を同時に行う手続きを案内している", "運輸支局・自動車検査登録事務所（関東運輸局）"],
  ["普通車をすぐには使わない", "相続と一時抹消登録を同時に手続きし、使うときに中古新規登録をする", "運輸支局・自動車検査登録事務所（関東運輸局）"],
  ["普通車を解体して廃車にする", "相続人が代理で永久抹消登録を申請する（ナンバープレート前後2枚とリサイクル券番号が必要）", "運輸支局・自動車検査登録事務所（関東運輸局）"],
  ["軽自動車の名義を相続人に変える", "名義変更の申請に、亡くなった事実と相続人であることが分かる戸籍謄本等または法定相続情報一覧図を添える", "軽自動車検査協会の事務所・支所"],
];

const steps = [
  {
    title: "車検証で所有者・車検の有効期間・ナンバーを確認する",
    body:
      "所有者欄が故人か、自動車会社やクレジット会社かで手続きが変わります（東北運輸局宮城運輸支局）。" +
      "関東運輸局は、相続の手続きは非常に複雑なため、車検証などを手元に用意したうえで、自動車の使用の本拠の位置を管轄する運輸支局または自動車検査登録事務所に事前に相談するよう案内しています。",
  },
  {
    title: "車を誰が引き継ぐか、乗るか手放すかを相続人で決める",
    body:
      "関東運輸局は、相続人の順位を、第1順位が子、第2順位が父母、第3順位が兄弟姉妹とし、配偶者は常に相続人になると示しています。" +
      "相続人のうち1人が相続する場合は、遺産分割協議書（相続人全員の実印を押印したもの）や遺言書などで新しい所有者を示します（相続人が1名のみの場合は不要）。",
  },
  {
    title: "相続関係を示す書類と、新しい所有者の書類をそろえる",
    body:
      "関東運輸局が示す単独相続の主な書類は、申請書、手数料納付書、有効期間内の車検証、戸籍謄本（戸籍の全部事項証明書）または法定相続情報証明書、" +
      "遺産分割協議書などのいずれか、相続人の印鑑証明書（発行後3か月以内）と実印または委任状です。" +
      "使用の本拠の位置が変わる場合などは車庫証明書も必要です。",
  },
  {
    title: "運輸支局（軽自動車は軽自動車検査協会）で申請する",
    body:
      "普通車は、自動車の使用の本拠の位置を管轄する運輸支局または自動車検査登録事務所で申請します。" +
      "関東運輸局と北海道運輸局は、運輸局の庁舎（関東は横浜第二合同庁舎、北海道は札幌第二合同庁舎）では手続きができないと注意を出しています。" +
      "軽自動車は、新しい使用者が車を使う場所を管轄する軽自動車検査協会の事務所・支所・分室で手続きします。",
  },
  {
    title: "車内の私物を降ろしてから、引き渡しや解体に出す",
    body:
      "売却や解体で車を引き渡すと、車内に残した物は取り戻しにくくなります。" +
      "トランク・座席の下・グローブボックスの書類や私物は、手続きと並行して先に降ろしておきます。",
  },
];

const cautions = [
  {
    title: "車検が切れている車は、相続の移転登録ができません",
    body:
      "北海道運輸局は、車検切れの自動車は相続による移転登録の手続きができないとしています。" +
      "関東運輸局は、すぐに使う場合は車検を受けてから相続の手続きを、すぐに使わない場合は一時抹消登録をしてから使うときに中古新規登録を、" +
      "有効期間が過ぎたまま第三者に名義を変える場合は一時抹消登録の後に所有者変更記録の手続きをするよう案内しています。",
  },
  {
    title: "遺産分割協議成立申立書を使えるのは、車の価格が100万円以下の場合だけです",
    body:
      "関東運輸局は、遺産分割協議成立申立書は、相続する自動車の価格が100万円以下であることを確認できる査定証や資料の写しを添付した場合に限り使えるとしています。" +
      "この場合、相続する人が相続人であることを確認できれば、他の相続人の確認は不要です。",
  },
  {
    title: "相続人に未成年者・相続放棄をした人がいる場合は書類が変わります",
    body:
      "関東運輸局は、未成年者の親権の行使が利益相反行為になるときは特別代理人の選任が必要（家庭裁判所に確認）とし、" +
      "相続を放棄した人がいる場合は家庭裁判所の「相続放棄申述受理証明書」の原本と写しが必要としています。" +
      "相続放棄を検討している間は、車を含む家財を処分しないよう注意が必要です。",
  },
  {
    title: "廃車にするときは、リサイクル券番号と重量税の還付を確認します",
    body:
      "関東運輸局は、永久抹消登録の申請書にリサイクル券番号（移動報告番号）の記入が必要で、自動車リサイクルシステムの車両検索ページで車台番号から確認できるとしています。" +
      "車検の残りが1か月以上ある場合は自動車重量税の還付を受けられ、そのためには申請書に申請する相続人の預金口座を記入します。",
  },
];

const faqs = [
  {
    q: "亡くなった父の車を廃車にしたいのですが、名義変更は必要ですか？",
    a:
      "関東運輸局は、解体した車の永久抹消登録を相続人が代理で申請する手続きを案内しています。" +
      "必要な書類は、申請書、車検証、ナンバープレート前後2枚、死亡の事実と申請する相続人を確認できる戸籍謄本または法定相続情報証明書、相続人の印鑑証明書（発行後3か月以内）と実印または委任状です。" +
      "管轄や状況で異なるため、事前に運輸支局に確認してください。",
  },
  {
    q: "名義変更（移転登録）はいつまでに必要ですか？",
    a:
      "道路運送車両法第13条は、所有者の変更があった日から15日以内に新所有者が移転登録を申請しなければならないと定めています。" +
      "相続の手続きは非常に複雑なため、関東運輸局は事前に管轄の運輸支局または自動車検査登録事務所に相談するよう案内しています。",
  },
  {
    q: "軽自動車の相続の名義変更には、何が必要ですか？",
    a:
      "軽自動車検査協会は、所有者が亡くなった事実と新しい所有者が相続人であることを確認できる書面として、戸籍謄本等または法務局が交付する法定相続情報一覧図のいずれかが必要としています。" +
      "コピーでもよく、複数ページの場合は全ページ分が必要です。死亡診断書は原則として使えません。",
  },
  {
    q: "車検証の所有者がローン会社になっている場合は？",
    a:
      "東北運輸局宮城運輸支局は、所有者が自動車会社やクレジット会社などの場合は相続の手続きにはならず、通常の移転登録（名義変更）の手続きになると案内しています。" +
      "残っている契約の扱いは、所有者になっている会社に確認してください。",
  },
];

const sources = [
  { label: "自動車の相続による手続き（単独相続・一時抹消登録・永久抹消登録）", org: "国土交通省 関東運輸局", url: "https://wwwtb.mlit.go.jp/kanto/jidou_gian/touroku/souzoku.html" },
  { label: "相続による移転登録", org: "国土交通省 北海道運輸局", url: "https://wwwtb.mlit.go.jp/hokkaido/touroku/08_etc/07_souzoku/souzoku2.html" },
  { label: "よくあるお問い合わせ Q4 所有者が死亡しましたが、手続きはどうすればよいですか？", org: "国土交通省 東北運輸局宮城運輸支局", url: "https://wwwtb.mlit.go.jp/tohoku/mg/qa/qa01_04.html" },
  { label: "名義変更（売買・譲渡・その他）", org: "軽自動車検査協会", url: "https://www.keikenkyo.or.jp/procedures/change_name.html" },
  { label: "道路運送車両法（第13条・第15条）", org: "e-Gov法令検索", url: "https://laws.e-gov.go.jp/law/326AC0000000185" },
  { label: "使用済自動車の再資源化等に関する法律（第8条）", org: "e-Gov法令検索", url: "https://laws.e-gov.go.jp/law/414AC0000000087" },
];

const related = [
  { href: "/shibougo-tetsuzuki-ihinseiri/", label: "家族が亡くなった後の手続きと遺品整理", desc: "手続きと片付けの順番" },
  { href: "/kuruma-shanai-seiri/", label: "車内・カー用品の整理と処分", desc: "トランク・座席にたまった物の手放し方" },
  { href: "/garage-katazuke/", label: "車庫・ガレージの片付け", desc: "工具・タイヤ・危険物の扱いと進め方" },
  { href: "/souzoku-houki-ihinseiri/", label: "相続放棄を考えているときの遺品整理", desc: "判断が済むまでの家財の扱い" },
  { href: "/jitensha-bike-shobun/", label: "自転車・バイクの処分方法", desc: "防犯登録・廃車手続きと手放すルート" },
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
    { "@type": "ListItem", position: 2, name: "亡くなった家族の車の処分" },
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
    { href: "#kiso", label: "1｜故人の車について法律が定めていること" },
    { href: "#kubun", label: "2｜乗る・手放す・廃車にする場合の手続き" },
    { href: "#steps", label: "3｜手続きの5ステップ" },
    { href: "#chui", label: "4｜車検切れ・書類・廃車の注意点" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#shutten", label: "6｜出典・参考にした公的情報" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "亡くなった家族の車の処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          亡くなった家族の車の処分｜相続の名義変更と廃車（抹消登録）の手続き・必要書類
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年10月27日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          亡くなった家族の車は、車検証の所有者欄に故人の名前があれば、相続の手続きが必要です。
          相続人が乗り続ける・売る場合は相続による移転登録（名義変更）を、解体する場合は相続人が永久抹消登録を申請します。
          普通車は運輸支局または自動車検査登録事務所、軽自動車は軽自動車検査協会が窓口です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、道路運送車両法と自動車リサイクル法の条文、関東運輸局・北海道運輸局・東北運輸局宮城運輸支局・軽自動車検査協会の案内をもとに、
          遺品整理の中で故人の車をどう扱うかを、乗る・手放す・廃車にする場合に分けて整理します。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の要点</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>車検証の所有者が故人なら相続の手続き、自動車会社やクレジット会社なら通常の名義変更になる（東北運輸局宮城運輸支局）</li>
          <li>所有者が変わったら15日以内に移転登録を申請する（道路運送車両法第13条）</li>
          <li>解体する場合は、相続人が代理で永久抹消登録を申請できる（関東運輸局）</li>
          <li>車検切れの車は相続の移転登録ができない。すぐに使わないなら一時抹消登録を使う（北海道運輸局・関東運輸局）</li>
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

      <H2 id="kiso" num="1">故人の車について法律が定めていること</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        車は家財の一つですが、ほかの遺品と違い、登録の手続きを経ないと名義を変えることも廃車にすることもできません。先に法律と運輸局の案内を確認してください。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kubun" num="2">乗る・手放す・廃車にする場合の手続き</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        普通車か軽自動車か、相続人が使うか手放すかで手続きが分かれます。必要書類は相続の状況で変わるため、管轄の窓口の案内で確認してください。
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-border">
          <thead className="bg-surface-alt">
            <tr>
              <th className="text-left p-3 border-b border-border">状況</th>
              <th className="text-left p-3 border-b border-border">手続き</th>
              <th className="text-left p-3 border-b border-border">根拠・案内</th>
            </tr>
          </thead>
          <tbody>
            {table.map(([a, b, c]) => (
              <tr key={a} className="border-b border-border align-top">
                <td className="p-3 font-medium text-text-primary">{a}</td>
                <td className="p-3 text-text-secondary">{b}</td>
                <td className="p-3 text-text-secondary">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="steps" num="3">手続きの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        進め方は、車検証の確認→相続人で方針を決める→書類をそろえる→窓口で申請→車内の私物を降ろして引き渡す、の順です。
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
        車内の物の仕分け方は<Link href="/kuruma-shanai-seiri/" className="text-primary underline underline-offset-2">車内・カー用品の整理と処分</Link>、
        相続の手続きと片付けの順番は<Link href="/shibougo-tetsuzuki-ihinseiri/" className="text-primary underline underline-offset-2">家族が亡くなった後の手続きと遺品整理</Link>で解説しています。
      </p>

      <H2 id="chui" num="4">車検切れ・書類・廃車の注意点</H2>
      <div className="space-y-4 mb-4">
        {cautions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        ほかの家財の片付けを業者に依頼する場合は、家庭の廃棄物の回収に必要な市区町村の許可や委託を確認できる業者を選んでください。
        回収業者とのトラブルを避ける確認事項は<Link href="/muryou-kaishuu-chuui/" className="text-primary underline underline-offset-2">「無料回収」をうたう業者の注意点</Link>で解説しています。
      </p>

      <H2 id="faq" num="5">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="shutten" num="6">出典・参考にした公的情報</H2>
      <ul className="space-y-2 mb-8 text-sm leading-7 text-text-secondary list-disc pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{s.label}</a>（{s.org}・{CHECKED}確認）
          </li>
        ))}
      </ul>

      <H2 id="related" num="7">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な知識の提供を目的としたもので、法的な助言ではありません。必要書類は相続の状況や管轄により異なるため、
        必ず自動車の使用の本拠の位置を管轄する運輸支局・自動車検査登録事務所、または軽自動車検査協会の案内をご確認ください。
      </p>
    </article>
  );
}
