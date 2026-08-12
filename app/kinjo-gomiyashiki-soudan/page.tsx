import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kinjo-gomiyashiki-soudan/";
const TITLE = "近所のゴミ屋敷はどこに相談する？窓口の選び方と角を立てない対応";
const DESC =
  "近隣のゴミ屋敷に悩んだときの相談窓口と対応の進め方を解説します。自治体の担当窓口・地域包括支援センター・管理会社など状況別の相談先、相談前に整理しておくとよい記録の付け方、関係を悪化させないためのNG行動、当事者が家族・親族の場合の片付けの進め方までを整理しました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ゴミ屋敷問題は「本人を責めても解決しない」ことを前提にする",
    body: "家がゴミ屋敷の状態になる背景には、病気やけが、加齢による体力・判断力の低下、孤立、深い喪失体験など、本人だけでは抜け出しにくい事情が重なっていることが少なくありません。近隣にとっては臭いや虫などの実害がある一方で、当事者もまた困難の中にいるケースが多いのです。「だらしない人を正す」ではなく「地域の生活環境の問題として、適切な窓口につなぐ」という捉え方が、結果的に解決への近道になります。",
  },
  {
    title: "個人間の直接交渉より「窓口を通す」ほうが安全",
    body: "臭いや虫に耐えかねて直接苦情を伝えたくなるのは自然な感情ですが、当事者との直接対決は関係の悪化や思わぬトラブルに発展するおそれがあり、状況が改善しないまま近隣関係だけが壊れる結果になりがちです。自治体や管理会社といった第三者の窓口を通すことで、感情的な衝突を避けながら、福祉的な支援も含めた対応につなげられます。",
  },
  {
    title: "多くの自治体に相談を受け付ける窓口がある",
    body: "ゴミ屋敷に関する近隣からの相談は、多くの自治体で受け付けられており、環境・清掃部門や生活衛生部門などが窓口になるのが一般的です。自治体によっては、いわゆるゴミ屋敷対策の条例を設け、調査・指導・支援を組み合わせて対応する仕組みを持つところもあります。どの部署が担当かわからない場合は、市区町村の代表窓口や総合相談窓口に「近隣の住環境について相談したい」と伝えれば、担当部署につないでもらえます。",
  },
];

const contacts = [
  {
    title: "自治体の環境・清掃・生活衛生の担当窓口",
    body: "戸建て・持ち家を含む一般的なケースの基本の相談先です。敷地からあふれた物、臭い、虫・ねずみの発生など、生活環境への影響を具体的に伝えます。自治体は本人への働きかけや関係部署との連携など、条例や制度に基づいた対応を検討します。一度の相談ですぐ解決するとは限りませんが、記録が残ることで継続的な対応につながります。",
  },
  {
    title: "地域包括支援センター（当事者が高齢の場合）",
    body: "当事者が高齢の一人暮らしと思われる場合は、高齢者の生活を支える相談機関である地域包括支援センターが重要な窓口になります。ゴミ屋敷状態の背景に、体力の低下や認知機能の変化、孤立といった福祉的な課題が隠れていることがあるためです。近隣住民からの情報提供をきっかけに、本人への見守りや支援が始まるケースもあります。所在地はお住まいの自治体の公式サイトで確認できます。",
  },
  {
    title: "管理会社・大家・管理組合（集合住宅の場合）",
    body: "賃貸マンション・アパートであれば管理会社や大家、分譲マンションであれば管理組合が窓口になります。共用部への物の放置や臭い・虫の影響は、契約や管理規約に基づいて対応を求められる場合があります。当事者への伝え方も含めて管理側に任せることで、隣人同士の直接対立を避けられます。火災の危険を感じる場合の予防相談は地域の消防署が受け付けています。",
  },
];

const steps = [
  {
    title: "困っている実害を具体的に書き出す",
    body: "「ゴミ屋敷で迷惑」という漠然とした訴えより、「窓を開けられないほどの臭いが続いている」「敷地から物が歩道にはみ出している」「虫やねずみが自宅にも出るようになった」など、生活への具体的な影響を整理して伝えるほうが、窓口は動きやすくなります。いつから・どんな影響が・どのくらいの頻度であるかをメモにまとめることから始めましょう。",
  },
  {
    title: "日付入りの記録を残す",
    body: "気づいたことを日付とともに記録します。「◯月◯日、風向きによって強い臭い」「◯月◯日、敷地外に物が増えた」といった簡単なメモで十分です。相談の際に経過を示せると、状況の深刻さや継続性が伝わりやすくなります。ただし、当事者の敷地内を撮影したり、監視と受け取られる行動をしたりするのはトラブルのもとになるため、記録は自分の生活への影響を中心にとどめましょう。",
  },
  {
    title: "状況に合った窓口を選んで相談する",
    body: "戸建てなら自治体の担当窓口、当事者が高齢なら地域包括支援センター、集合住宅なら管理会社・管理組合が第一候補です。複数に当てはまる場合は、まず自治体に相談すれば関係機関につないでもらえます。相談者の情報の扱いが不安な場合は、「相談したことを本人に知られたくない」と最初に伝えておくとよいでしょう。",
  },
  {
    title: "同じ影響を受けている近隣がいれば情報を共有する",
    body: "臭いや虫の影響が自分だけでなく複数の世帯に及んでいる場合、それぞれが個別に我慢しているだけでは状況が動きにくいことがあります。無理のない範囲で近隣と状況を共有し、複数の声として窓口に伝わると、地域の課題として扱われやすくなります。ただし、当事者を悪者にする噂話や吊るし上げの空気を作らないよう、あくまで「困っている影響」の共有にとどめることが大切です。",
  },
  {
    title: "焦らず経過を見守り、変化があれば追加で相談する",
    body: "行政の対応は、本人との対話や支援の調整を経て進むため、時間がかかるのが普通です。一度相談して変化がなくても諦めず、状況が悪化したときや新しい影響が出たときに、記録を添えて追加で相談を続けましょう。継続した相談の積み重ねが、対応の優先度を上げていきます。危険が差し迫っていると感じる場合（倒壊しそう、火が見えるなど）は、ためらわず消防・警察へ通報してください。",
  },
];

const ngActions = [
  {
    title: "当事者を直接責める・貼り紙や投書で圧力をかける",
    body: "本人を問い詰めたり、匿名の貼り紙や投書で「片付けろ」と迫ったりする行為は、当事者を頑なにさせ、状況をむしろ悪化させることが多い対応です。孤立が深まるほど片付けから遠ざかるという悪循環もあります。伝えるべきことは第三者の窓口を通す、が原則です。",
  },
  {
    title: "敷地に無断で入る・物を勝手に処分する",
    body: "どれほど迷惑に感じても、他人の敷地に立ち入ったり、はみ出した物を勝手に撤去・処分したりすることはできません。他人の物の処分は、たとえゴミに見えても法律上の問題に発展するおそれがあります。敷地からのはみ出しや道路への影響は、自治体や警察に相談して対応を委ねましょう。",
  },
  {
    title: "SNSや近所への吊るし上げ的な拡散",
    body: "住所や外観がわかる形でSNSに投稿したり、近所で当事者を貶める噂を広めたりする行為は、名誉毀損などの法的リスクを自分が負いかねないうえ、問題解決には何も寄与しません。当事者にも事情と尊厳があります。発信するエネルギーは、窓口への相談と記録づくりに向けるほうが確実に前進します。",
  },
  {
    title: "「行政は動かない」と決めつけて相談を諦める",
    body: "一度の相談で目に見える変化がないと、「相談しても無駄」と感じてしまいがちです。しかし行政の対応は記録の積み重ねで進むもので、相談をやめると経過が途切れてしまいます。時間を置いて状況を伝え続けること、変化があったときに追加で知らせることが、遠回りに見えて最も確実な方法です。",
  },
];

const judgeSigns = [
  "当事者が自分の家族・親族で、片付けの実行段階に入っている",
  "本人が片付けに同意し、物量が多く自力では進められない",
  "臭い・害虫への対応も含めた清掃が必要な状態になっている",
  "退去や住み替えの期限があり、短期間で片付け切る必要がある",
  "遠方に住んでいて、家族だけでは作業時間を確保できない",
];

const faqs = [
  {
    q: "近所のゴミ屋敷はどこに相談すればよいですか？",
    a: "基本は市区町村の環境・清掃・生活衛生などの担当窓口です。どの部署かわからなければ代表窓口で「近隣の住環境について相談したい」と伝えれば案内してもらえます。当事者が高齢の場合は地域包括支援センター、集合住宅の場合は管理会社・管理組合も有力な窓口です。火災の危険を感じる場合の予防相談は消防署が受け付けています。",
  },
  {
    q: "相談したことが本人に伝わってしまいませんか？",
    a: "相談者が特定される形で本人に伝わることへの不安は、多くの人が感じるところです。相談時に「相談者の情報は本人に伝えないでほしい」と明確に伝えておきましょう。行政や管理会社は、通報者を明かさずに現地確認や本人への働きかけを行うのが一般的です。不安な点は相談の冒頭で確認して構いません。",
  },
  {
    q: "行政はゴミ屋敷を強制的に片付けてくれますか？",
    a: "他人の財産である以上、行政でもすぐに強制的な撤去ができるわけではなく、まず本人への働きかけや支援から始まるのが一般的です。自治体によっては条例に基づく調査・指導・支援の仕組みを持つところもありますが、対応の枠組みは地域により異なります。時間がかかることを前提に、記録を添えて継続的に相談することが現実的な進め方です。",
  },
  {
    q: "ゴミ屋敷の当事者が自分の親・親族の場合はどうすればよいですか？",
    a: "まず本人を責めずに、背景にある体調や気持ちの変化を気にかけるところから始めてください。高齢であれば地域包括支援センターに家族から相談することもできます。片付けの実行段階では、本人の同意を得たうえで、物量に応じて業者の力を借りるのが現実的です。進め方は実家の片付けの進め方やゴミ屋敷になる原因と進行段階の記事が参考になります。",
  },
];

const related = [
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷になる原因と進行段階", desc: "背景を理解して適切に向き合う" },
  { href: "/gomiyashiki-houchi-risk/", label: "ゴミ屋敷を放置するリスク", desc: "火災・健康・住環境への影響" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "家族として関わる場合の段取り" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃", desc: "虫の影響への対処と依頼判断" },
  { href: "/service/gomiyashiki/", label: "ゴミ屋敷清掃業者の選び方", desc: "片付けの実行段階での業者選び" },
  { href: "/cost/price/", label: "片付け・不用品回収の費用相場", desc: "間取り・作業別の費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "近所のゴミ屋敷の相談先" },
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
    { href: "#kiso", label: "1｜相談の前に知っておきたい基本の考え方" },
    { href: "#contact", label: "2｜状況別の相談窓口3つ" },
    { href: "#houshin", label: "3｜対応の全体方針" },
    { href: "#steps", label: "4｜角を立てずに相談を進める5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜片付け業者の出番になるケース" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "近所のゴミ屋敷の相談先" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          近所のゴミ屋敷はどこに相談する？窓口の選び方と角を立てない対応
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「隣の家の臭いと虫に悩まされているが、どこに相談すればいいのかわからない」「本人に直接言うのは角が立ちそうで怖い」——近隣のゴミ屋敷は、実害があるのに動き方が見えにくい、悩ましい問題です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、状況別の相談窓口の選び方、相談前に整理しておくとよい記録の付け方、関係を悪化させないための注意点、そして当事者が家族・親族だった場合の片付けの進め方までを解説します。感情的な対立ではなく、解決に向かう動き方を整理しました。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>直接交渉は避け、第三者の窓口を通すのが原則。基本の相談先は市区町村の担当窓口</li>
          <li>当事者が高齢なら地域包括支援センター、集合住宅なら管理会社・管理組合が有力な窓口</li>
          <li>「いつから・どんな影響が」の記録を添えると相談が動きやすい。対応には時間がかかる前提で継続する</li>
          <li>勝手な処分・貼り紙・SNS拡散は自分が法的リスクを負いかねないNG行動</li>
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

      <H2 id="kiso" num="1">相談の前に知っておきたい基本の考え方</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        具体的な窓口の前に、この問題に向き合ううえでの前提を3つ共有します。ここを押さえておくと、遠回りに見えて最短の道筋が選べるようになります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="contact" num="2">状況別の相談窓口3つ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        相談先は「住まいの形態」と「当事者の状況」で選びます。代表的な窓口は次の3つです。いずれも所在地・連絡先はお住まいの自治体の公式サイトで確認してください。
      </p>
      <div className="space-y-4 mb-4">
        {contacts.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">対応の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        近隣のゴミ屋敷への対応の大原則は、「記録を残し、窓口を通し、時間がかかる前提で続ける」ことです。個人の抗議は一度で関係を壊すリスクがありますが、窓口への相談は積み重なるほど対応の優先度を押し上げます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、ゴミ屋敷状態の背景を知っておくことは、無用な憎悪を避けるうえでも役立ちます。家がそうなっていく経緯や段階については<Link href="/gomiyashiki-genin/" className="text-primary underline underline-offset-2">ゴミ屋敷になる原因と進行段階</Link>の記事で、放置された場合に何が起こるかは<Link href="/gomiyashiki-houchi-risk/" className="text-primary underline underline-offset-2">ゴミ屋敷を放置するリスク</Link>の記事で解説しています。
      </p>

      <H2 id="steps" num="4">角を立てずに相談を進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは、実際に相談を進める手順です。ポイントは「感情ではなく影響を、単発ではなく記録で伝える」ことです。
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

      <H2 id="gyousha" num="6">片付け業者の出番になるケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        近隣住民の立場で業者を手配することは通常ありませんが、当事者が自分の家族・親族である場合や、本人が片付けに同意した場合には、片付け業者への依頼が解決の実行手段になります。次のような状況が業者相談の目安です。ゴミ屋敷清掃の業者選びは<Link href="/review/gomiyashiki-partners/" className="text-primary underline underline-offset-2">ゴミ屋敷専門パートナーズの口コミ・評判</Link>や<Link href="/area/nagoya/" className="text-primary underline underline-offset-2">名古屋の片付け業者おすすめ</Link>などエリア別の比較も参考にしてください。
      </p>
      <ul className="space-y-2 mb-6 text-[15px] leading-8 text-text-secondary">
        {judgeSigns.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-primary font-bold shrink-0">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
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
        本記事は一般的な知識の提供を目的としたもので、法律等の個別の助言を行うものではありません。自治体の相談窓口・条例の有無・対応の枠組みは地域により異なるため、お住まいの市区町村の公式サイトでご確認ください。差し迫った危険を感じる場合は、ためらわず消防・警察へ通報してください。
      </p>
    </article>
  );
}
