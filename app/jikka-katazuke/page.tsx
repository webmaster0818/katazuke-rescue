import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/jikka-katazuke/";
const TITLE = "実家の片付けの進め方｜親と揉めない段取りと始めるタイミング";
const DESC =
  "実家の片付けは「親を説得してから捨てる」のではなく「親と一緒に少しずつ」が基本です。始めるべきタイミング、親と揉めないための声かけと段取り、帰省時に進める5ステップ、やってはいけないNG行動、業者に頼む判断基準までを解説。生前整理・遺品整理との違いも整理します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const timings = [
  {
    title: "親の体力・判断力があるうちに始めるのが基本",
    body: "実家の片付けで一番大切なのは、親自身が元気で、自分の物を自分で判断できるうちに始めることです。物の要不要や思い出の品の行き先を決められるのは本人だけであり、親が判断できなくなってからの片付けは、残された家族が膨大な量の物と向き合う遺品整理に近い作業になります。「まだ早い」と感じる時期こそが、実は始めどきです。",
  },
  {
    title: "きっかけになりやすい場面",
    body: "介護や住み替えの話が出たとき、親が転倒やけがをしたとき、家電や住宅設備の故障・買い替えのとき、お盆や年末年始の帰省時などは、片付けの話を切り出しやすいタイミングです。特に「安全のために床の物を減らそう」という切り口は、親にとっても納得しやすく、物を捨てる話より受け入れられやすい入り方です。",
  },
  {
    title: "生前整理・遺品整理との関係",
    body: "実家の片付けは、親の持ち物を親と一緒に整理するという意味で生前整理と重なる部分が多い作業です。将来の相続や住まいの処分まで見据えるなら、貴重品・重要書類の場所を親子で共有しておくことも大きな目的になります。親が亡くなった後の遺品整理については、遺品整理の進め方の記事で別途解説しています。",
  },
];

const attitudes = [
  {
    title: "「捨てさせる」ではなく「安全に暮らせるようにする」",
    body: "子の目線では不要品に見えても、親にとっては思い出や安心の対象です。「こんなに物をためて」と否定から入ると、親は片付けそのものを拒否するようになります。目的を「物を捨てること」ではなく「転倒しない・災害時に逃げられる・探し物がなくなる暮らしにすること」に置き換えて伝えると、協力を得やすくなります。",
  },
  {
    title: "決定権は親に残す",
    body: "実家の物の持ち主は親です。要不要の判断は必ず親に委ね、子は仕分けの選択肢を用意する係に徹しましょう。「これは捨てていい？」と1つずつ確認するのは大変なので、「使っている物・使っていない物・迷う物に分けよう」と枠組みを提案し、判断は親のペースに合わせるのがコツです。",
  },
  {
    title: "一度で終わらせようとしない",
    body: "実家の片付けは、数十年分の物量を相手にする長期戦です。帰省のたびに1エリアずつ、数か月から数年がかりで進めるくらいの計画が現実的です。1回の帰省で成果を急ぐと親子ともに疲弊し、次の機会が作れなくなります。「今回は玄関と廊下だけ」のように範囲を区切りましょう。",
  },
];

const steps = [
  {
    title: "片付けの目的を親子で共有する",
    body: "最初の帰省では、作業よりも会話を優先します。「転んだら心配だから床の物を減らしたい」「災害のときに避難できるようにしたい」など、親の安全を軸に目的を共有しましょう。親自身が困っていること（探し物が多い、掃除が大変など)を聞き出せると、片付けが「親のための作業」になります。",
  },
  {
    title: "危険箇所と貴重品の場所を確認する",
    body: "廊下や階段に置かれた物、コンロ周りの燃えやすい物など、事故につながる箇所を最優先で解消します。あわせて、通帳・印鑑・保険証券・権利書などの重要書類や貴重品がどこにあるかを親に確認し、親子で場所を共有しておきます。これは相続や災害時にも役立つ、実家の片付けならではの重要ステップです。",
  },
  {
    title: "明らかなゴミと期限切れの物から手放す",
    body: "作業は、壊れた家電、期限切れの食品や薬、古い新聞・チラシなど、親も迷わず手放せる物から始めます。最初に「捨てても困らなかった」という体験を親子で積むことで、その後の仕分けへの抵抗感が下がります。思い出の品や衣類など判断の重い物は、関係ができてから後半に回しましょう。",
  },
  {
    title: "使っていない大型品の処分ルートを決める",
    body: "使っていない家具や家電などの大型品は、自治体の粗大ごみ収集、リサイクルショップ、不用品回収業者などのルートで処分します。申し込み方法や料金、出せる品目は自治体により異なるため、実家のある市区町村の案内を確認してください。搬出が難しい大型品が多い場合は、業者にまとめて依頼するほうが安全です。",
  },
  {
    title: "片付いた状態を保つ仕組みを作って引き継ぐ",
    body: "最後に、よく使う物を取り出しやすい低い位置に集める、物の定位置を親と一緒に決める、ゴミ出しのカレンダーを見える場所に貼るなど、親が1人でも維持できる仕組みを整えます。次回の帰省で状態を確認し、崩れていたら仕組みのほうを見直す、という運用を続けると、実家が徐々に安全な状態へ近づいていきます。",
  },
];

const ngActions = [
  {
    title: "親に無断で物を捨てる",
    body: "留守中に勝手に処分すると、たとえゴミに見える物でも親の信頼を大きく損ない、以降の片付けが不可能になることさえあります。実家の物の決定権は親にあることを徹底しましょう。",
  },
  {
    title: "正論で説得しようとする",
    body: "「どうせ使わないでしょ」「危ないから捨てて」という正論は、親には自分の暮らしの否定に聞こえがちです。説得ではなく、「安全のため」「探し物をなくすため」といった親の利益から入るほうが結果的に進みます。",
  },
  {
    title: "1回の帰省で全部終わらせようとする",
    body: "数十年分の物量は数日で片付くものではありません。無理に進めると親子関係がぎくしゃくし、中途半端に散らかった状態が残ります。エリアを区切った長期計画で進めましょう。",
  },
  {
    title: "重要書類・貴重品の確認を後回しにする",
    body: "書類の山を「あとでまとめて」と処分すると、権利書や保険証券など再発行が難しい書類を失うおそれがあります。書類関係は必ず親と一緒に中身を確認してから処分の判断をしてください。",
  },
];

const judgeSigns = [
  "実家が遠方で、帰省できる回数が限られている",
  "物量が多く、家族だけでは数年かかっても終わる見込みが立たない",
  "大型家具・家電が多く、高齢の親と自分たちだけでは搬出が危険",
  "空き家になる予定があり、期限までに家を空にする必要がある",
  "ゴミ屋敷と呼べる状態まで進んでおり、衛生面のリスクが出ている",
];

const faqs = [
  {
    q: "実家の片付けはいつから始めるべきですか？",
    a: "親が元気で判断力があるうちに始めるのが基本です。物の要不要を決められるのは持ち主である親だけであり、親が判断できなくなってからでは作業量も心理的負担も大きくなります。介護・住み替えの話が出たときや帰省のタイミングなど、話を切り出せる機会があれば「安全のために少しずつ」という形で早めに着手することをおすすめします。",
  },
  {
    q: "親が「全部いる」と言って片付けが進みません。どうすればいいですか？",
    a: "無理に捨てさせようとせず、目的を「物を減らすこと」から「安全に暮らせること」に切り替えましょう。廊下や階段など危険箇所の物を移動するだけでも前進です。また、要不要の二択ではなく「使っている・使っていない・迷う」の三択にし、迷う物は保留箱に入れて先送りを認めると、親も判断しやすくなります。時間をかけて信頼を積み重ねることが結局は近道です。",
  },
  {
    q: "実家の片付けを業者に頼むと費用はどのくらいかかりますか？",
    a: "物量・間取り・搬出条件によって大きく異なるため、一律の金額は言えません。一軒家の片付けは物量が多くなりやすいため、複数社から訪問見積もりを取り、作業範囲と内訳を比較して判断するのが確実です。当サイトの費用相場ページで考え方を、費用を安く抑えるコツの記事で節約の方法を解説しています。",
  },
  {
    q: "遺品整理と実家の片付けはどう違いますか？",
    a: "実家の片付けは親が存命のうちに親と一緒に進める作業で、判断の主体は親です。遺品整理は亡くなった後に遺族が故人の物を整理する作業で、相続に関わる物の確認も含まれます。親が元気なうちに実家の片付け（生前整理）を進めておくほど、将来の遺品整理の負担は小さくなります。遺品整理の手順は遺品整理の進め方の記事を参照してください。",
  },
];

const related = [
  { href: "/ihinseiri-jibunde/", label: "遺品整理を自分で進める手順", desc: "亡くなった後の整理はこちら" },
  { href: "/service/ihinseiri/", label: "遺品整理業者の選び方と費用ガイド", desc: "業者に頼む場合の基礎知識" },
  { href: "/review/minna-ihinseiri/", label: "みんなの遺品整理の評判", desc: "審査済み業者を比較できる紹介サービス" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート7つの使い分け", desc: "実家の不用品を手放す方法" },
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
    { "@type": "ListItem", position: 2, name: "実家の片付けの進め方" },
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
    { href: "#timing", label: "1｜実家の片付けを始めるタイミング" },
    { href: "#kokoroe", label: "2｜親と揉めないための3つの心構え" },
    { href: "#steps", label: "3｜帰省時に進める5ステップ" },
    { href: "#ng", label: "4｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "5｜業者に頼んだほうがよいケース" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "実家の片付けの進め方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          実家の片付けの進め方｜親と揉めない段取りと始めるタイミング
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「帰省するたびに実家の物が増えている気がする」「親が高齢になってきたので、そろそろ実家を片付けたい」——実家の片付けは、多くの人がいつか向き合う課題でありながら、親との関係が絡むぶん、自分の部屋の片付けよりはるかに難しいテーマです。よかれと思って始めた片付けが親子げんかで終わった、という話も珍しくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、実家の片付けを始めるべきタイミング、親と揉めないための心構え、帰省時に実際に進めるためのステップ、避けるべきNG行動、業者に頼む判断基準までを順に解説します。「捨てさせる片付け」ではなく「親の暮らしを安全にする片付け」という視点で読み進めてください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>実家の片付けは、親が元気で判断できるうちに始めるのが基本。「まだ早い」が始めどき</li>
          <li>目的は「捨てること」ではなく「転倒・災害リスクを減らし安全に暮らせること」に置く</li>
          <li>物の決定権は親に残し、子は枠組みと選択肢を用意する係に徹する</li>
          <li>1回の帰省で終わらせず、エリアを区切って数か月〜数年がかりの長期計画で進める</li>
          <li>遠方・物量過多・大型品の搬出がある場合は業者の利用が現実的</li>
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

      <H2 id="timing" num="1">実家の片付けを始めるタイミング</H2>
      <div className="space-y-6 mb-4">
        {timings.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="kokoroe" num="2">親と揉めないための3つの心構え</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実家の片付けの成否は、作業のうまさよりも親との関わり方で決まります。次の3つの心構えを押さえてから作業に入りましょう。
      </p>
      <div className="space-y-6 mb-4">
        {attitudes.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="3">帰省時に進める5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方を、帰省を重ねながら進める前提の5ステップに整理しました。1回の帰省で1〜2ステップ進めば十分です。
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
        部屋ごとの具体的な片付け手順は<Link href="/katazuke-junban/" className="text-primary underline underline-offset-2">部屋の片付けの順番と手順</Link>の記事が参考になります。
      </p>

      <H2 id="ng" num="4">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="5">業者に頼んだほうがよいケース</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家族だけで進めるのが基本の実家の片付けですが、次のような場合は片付け業者・不用品回収業者の利用を検討する段階です。親の同意を得たうえで、複数社の見積もりを比較して依頼しましょう。費用は物量・間取り・搬出条件により異なります。
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
        遺品整理や生前整理に対応する業者を探すなら、審査を通過した業者を最大3社比較できる<Link href="/review/minna-ihinseiri/" className="text-primary underline underline-offset-2">みんなの遺品整理</Link>のような紹介サービスも選択肢です。東京近郊の実家なら<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者比較</Link>も参考にしてください。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          業者選びに迷ったら、編集部が特徴・口コミを比較したランキングをご活用ください。
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

      <H2 id="faq" num="6">よくある質問</H2>
      <div className="space-y-4 mb-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
          </div>
        ))}
      </div>

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
        本記事は一般的な進め方を紹介するものです。粗大ごみの申し込み方法・料金・対象品目は自治体により異なるため、実家のある市区町村の案内をご確認ください。相続に関わる判断は専門家（弁護士・税理士等）への相談をおすすめします。
      </p>
    </article>
  );
}
