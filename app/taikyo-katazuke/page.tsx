import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/taikyo-katazuke/";
const TITLE = "退去前の片付けの段取り｜賃貸の荷物を期限までに片付け切る方法";
const DESC =
  "賃貸の退去前の片付けは「退去日から逆算した処分スケジュール」がすべてです。残置物を残すとどうなるか、退去1か月前からの逆算スケジュール、片付けの5ステップ、やってはいけないNG行動、業者に頼む判断基準を解説。原状回復と掃除の考え方にも触れます。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "退去時は「借りたときの状態に戻して引き渡す」が原則",
    body: "賃貸住宅では、退去時に自分の荷物をすべて運び出し、室内を明け渡すのが契約上の原則です。荷物を残したまま退去すると残置物として扱われ、撤去費用を請求されたり、敷金の精算でトラブルになったりするおそれがあります。「使わない家具を置いていってあげる」つもりでも、貸主にとっては撤去が必要な荷物です。残してよいか判断に迷う物は、必ず事前に管理会社・大家に確認しましょう。",
  },
  {
    title: "原状回復と掃除の考え方",
    body: "原状回復の範囲については、国土交通省が公表しているガイドラインで、通常の使用による損耗と借主の責任による汚損の考え方が示されています。細かい負担区分は契約内容にもよるため、退去立会い前に契約書を確認しておきましょう。掃除については、荷物を出し切ったあとに掃き掃除・拭き掃除程度を行っておくと、立会いがスムーズになります。ゴミや汚れを残したままにすると、清掃費用の面で不利になりかねません。",
  },
  {
    title: "つまずきの原因は「ゴミの収集日と粗大ごみの予約」",
    body: "退去前の片付けが計画倒れになるいちばんの原因は、ゴミを出すタイミングの見落としです。普通ゴミは収集曜日が決まっており、粗大ごみは多くの自治体で事前申し込み制のため、退去直前に思い立っても収集が間に合わないことがあります。申し込みから収集までの日数や料金は自治体により異なるため、退去日が決まったらまず市区町村の粗大ごみ案内を確認するのが鉄則です。",
  },
];

const steps = [
  {
    title: "退去日から逆算してスケジュールを引く（目安：1か月前開始）",
    body: "退去日・立会い日時を確定させたら、カレンダーに「粗大ごみの申し込み期限」「最後の可燃・不燃ゴミの収集日」「大型品の処分日」「引越し日」を書き込みます。粗大ごみの収集は申し込みから日数がかかる場合があるため、遅くとも退去2〜3週間前には申し込みを済ませたいところです。荷物が多い場合は1か月以上前から着手しましょう。",
  },
  {
    title: "持っていく物と手放す物を仕分ける",
    body: "引越し先に持っていく物を先に決め、それ以外を「売る・譲る・捨てる」に仕分けます。引越しは物量を減らす絶好の機会で、荷物が減れば引越し運賃の見積もりも変わってきます。1年以上使っていない物、引越し先に置き場所がない物は手放す候補です。仕分けの基本は部屋の片付けの順番の記事も参考にしてください。",
  },
  {
    title: "売れる物・譲れる物を早めに手放す",
    body: "リサイクルショップ・出張買取・フリマアプリでの売却や、知人への譲渡は時間がかかるため、スケジュールの前半で動きます。フリマアプリは「退去1週間前までに売れなければ処分に切り替える」など撤退ラインを決めておくと、直前に慌てずに済みます。",
  },
  {
    title: "自治体の収集とリサイクルルートでゴミを出し切る",
    body: "普通ゴミは収集日ごとに計画的に出し、粗大ごみは予約した日に指定場所へ出します。エアコン・テレビ・冷蔵庫や冷凍庫・洗濯機や衣類乾燥機は家電リサイクル法の対象で自治体の粗大ごみに出せないため、販売店の引き取りや自治体が案内する方法で処分します。退去直前に大量のゴミを一度に集積所へ出すのはトラブルの元なので避けましょう。",
  },
  {
    title: "残った物を回収業者に依頼し、掃除をして立会いへ",
    body: "収集日が合わない物や搬出できない大型品が残ったら、不用品回収業者に日時指定でまとめて依頼します。荷物がすべて出たら、掃き掃除・拭き掃除と水回りの簡単な清掃を行い、退去立会いに臨みます。鍵の返却や電気・ガス・水道の停止手続きも忘れずに済ませましょう。",
  },
];

const ngActions = [
  {
    title: "不要な家具・家電を「置いていけばいい」と残置する",
    body: "無断で残した荷物は残置物として撤去費用の請求対象になり、敷金精算のトラブルにつながります。エアコンなど設備に見える物でも、自分で設置した物は原則撤去が必要です。残す場合は必ず管理会社・大家の書面での了承を得ましょう。",
  },
  {
    title: "粗大ごみの申し込みを退去直前まで放置する",
    body: "粗大ごみは申し込みから収集まで日数がかかることがあり、直前では退去日に間に合わないおそれがあります。申し込み方法・料金・日数は自治体により異なるため、退去日が決まった時点で市区町村の案内を確認し、早めに予約しましょう。",
  },
  {
    title: "退去日当日に片付けと掃除を詰め込む",
    body: "当日は引越し作業だけでも時間が読めないものです。片付け・処分・掃除まで当日に詰め込むと、立会い時刻に間に合わず、残置物や清掃不足の状態で引き渡すことになりがちです。処分と掃除は前日までに終える計画にしましょう。",
  },
  {
    title: "「無料回収」をうたう巡回業者に直前で駆け込む",
    body: "期限に追われた状態は、悪質業者にとって好都合です。無料をうたって積み込み後に高額請求する手口が報告されているため、急いでいても、許可や料金体系を確認できる業者から見積もりを取って依頼しましょう。",
  },
];

const judgeSigns = [
  "退去日まで2週間を切っているのに、処分する物が大量に残っている",
  "ベッド・冷蔵庫・洗濯機など、自分で搬出できない大型品がある",
  "粗大ごみの収集日が退去日に間に合わない",
  "仕事の都合で、平日の収集日にゴミを出せない",
  "部屋の汚れがひどく、片付けと清掃をまとめて頼みたい",
];

const faqs = [
  {
    q: "退去前の片付けはいつから始めるべきですか？",
    a: "荷物の量にもよりますが、遅くとも退去日の1か月前には仕分けを始めるのがおすすめです。粗大ごみは申し込みから収集まで日数がかかる場合があり、売却や譲渡にも時間が必要です。退去日が決まったら、まずお住まいの自治体の粗大ごみの申し込み方法と日数を確認し、そこから逆算してスケジュールを立ててください。",
  },
  {
    q: "冷蔵庫や洗濯機が退去日までに処分できません。どうすればいいですか？",
    a: "冷蔵庫・洗濯機などの家電リサイクル法対象品目は自治体の粗大ごみに出せないため、販売店の引き取りや自治体が案内する方法で処分するのが正規ルートです。日程が合わない場合は、家電リサイクル法対象品目に対応している不用品回収業者に日時指定で依頼する方法があります。対応可否と費用を見積もり時に確認しましょう。",
  },
  {
    q: "荷物を残して退去したらどうなりますか？",
    a: "残した荷物は残置物として扱われ、撤去・処分の費用を請求されたり、敷金から差し引かれたりするおそれがあります。また、勝手に処分できない荷物が残ると明け渡しが完了せず、賃料相当額の請求につながる場合もあります。「置いていってよいか」は自己判断せず、必ず管理会社・大家に事前確認してください。",
  },
  {
    q: "退去前の片付けを業者に頼むと費用はどのくらいですか？",
    a: "物量・間取り・搬出条件（エレベーターの有無など）により大きく異なるため、一律の金額は言えません。回収量ベースのパックプランを設ける業者もあります。退去日という締め切りがあるため、日時指定ができるか、希望日に対応可能かを含めて、早めに複数社から見積もりを取って比較するのが確実です。費用の考え方は費用相場ページで解説しています。",
  },
];

const related = [
  { href: "/service/hikkoshi/", label: "引越し前の片付け・不用品処分ガイド", desc: "引越しと処分をまとめて進める方法" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート7つの使い分け", desc: "処分方法の選び方を詳しく" },
  { href: "/guide/municipal-service/", label: "自治体の粗大ゴミ回収サービス活用法", desc: "自治体ルートの基礎知識" },
  { href: "/review/sodaigomi-honpo/", label: "粗大ゴミ回収本舗の評判", desc: "定額パック制の関東対応業者" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "業者に頼む場合の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "退去前の片付けの段取り" },
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
    { href: "#kiso", label: "1｜退去前の片付けの基礎知識（残置物・原状回復）" },
    { href: "#steps", label: "2｜退去1か月前からの片付け5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜業者に頼んだほうがよいケース" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "退去前の片付けの段取り" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          退去前の片付けの段取り｜賃貸の荷物を期限までに片付け切る方法
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          賃貸住宅の退去には、明確な締め切りがあります。退去日までに荷物をすべて運び出し、部屋を明け渡さなければならず、「間に合わなかった」では済まされません。ところが実際には、粗大ごみの収集が間に合わない、大型家具が運び出せない、退去日当日に荷物が残っている——といったトラブルが後を絶ちません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、退去前の片付けを期限までに終わらせるための基礎知識と、退去1か月前から逆算した段取り、避けるべきNG行動、業者に頼むべきケースの判断基準を解説します。ポイントはただ1つ、「ゴミの収集日と粗大ごみの予約から逆算すること」です。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>退去時は荷物をすべて運び出すのが原則。無断の残置物は撤去費用請求の原因になる</li>
          <li>退去日が決まったら、まず自治体の粗大ごみの申し込み方法と収集までの日数を確認する</li>
          <li>遅くとも1か月前に仕分け開始、2〜3週間前までに粗大ごみを申し込むのが目安</li>
          <li>家電リサイクル法の対象4品目は自治体の粗大ごみに出せない</li>
          <li>期限2週間前で大量に残っている・大型品が搬出できないなら業者依頼が現実的</li>
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

      <H2 id="kiso" num="1">退去前の片付けの基礎知識（残置物・原状回復）</H2>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">退去1か月前からの片付け5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        退去日から逆算した標準的な段取りを5ステップにまとめました。荷物が多い場合や実家からの退去などでは、さらに前倒しで計画してください。
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

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        悪質業者の手口と見分け方は<Link href="/guide/illegal-dumping/" className="text-primary underline underline-offset-2">違法業者の見分け方</Link>で詳しく解説しています。
      </p>

      <H2 id="gyousha" num="4">業者に頼んだほうがよいケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        退去には締め切りがあるため、「自力で間に合うか」の見極めが何より重要です。次のいずれかに当てはまるなら、早めに不用品回収・片付け業者へ見積もりを依頼しましょう。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        費用は物量・間取り・搬出条件により異なります。関東エリアでは、日時指定に対応する<Link href="/review/sodaigomi-honpo/" className="text-primary underline underline-offset-2">粗大ゴミ回収本舗</Link>のような定額パック制の業者も候補になります。東京での業者選びは<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者比較</Link>を参考にしてください。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          退去期限に間に合わせるなら、早めの見積もり依頼が肝心です。業者比較はこちらから。
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

      <H2 id="faq" num="5">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

      <H2 id="related" num="6">関連記事</H2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <p className="font-bold text-primary mb-1">{r.label}</p>
            <p className="text-sm text-text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-text-muted">
        本記事は一般的な段取りの紹介であり、法的助言ではありません。原状回復の負担区分は契約内容により異なるため、契約書と管理会社への確認を優先してください。粗大ごみの申し込み方法・料金・日数は自治体により異なるため、お住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
