import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kutsu-collection-seiri/";
const TITLE = "靴・スニーカーのコレクションの整理｜箱ごとたまった靴を残す基準と状態別の手放し方";
const DESC =
  "下駄箱に入りきらず、箱のままクローゼットの上段や押し入れに積まれた靴。限定のスニーカー、履くつもりで買ったまま一度も外に出ていない革靴、サイズが合わなくなったブーツ。靴やスニーカーは、一足ごとに思い入れがあり、箱に入っていると状態も量も見えないため、手放しにくい品目です。靴が増える構造、履く数の上限と「この一年で履いたか」で残す基準、箱から出して状態を確かめる手順、ソールの劣化や黄ばみなど状態別の判断、売る・譲るという選択肢、素材や構造で分かれる処分の考え方、残す靴の保管の仕方までを解説します。";
const PUBLISHED = "2026-09-09";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "箱に入れたまま積むと、量も状態も見えなくなる",
    body: "靴は箱に入れて保管することが多く、箱は積み重ねられるため、下駄箱に入りきらない分がクローゼットの上段や押し入れ、ベッドの下に積まれていきます。箱に入っていると、中の靴がどんな状態か、そもそも何が入っているかが外からは分かりません。積んだ箱を開けるのは手間なので、見ないまま年数がたち、その間に同じような靴を新しく買うことも起こります。「持っている」という記憶はあっても「今どうなっているか」は分からない。この見えない状態が、靴が増え続ける最大の理由です。",
  },
  {
    title: "「限定」「思い入れ」「高かった」が、履かない靴を残す理由になる",
    body: "スニーカーには限定のモデルや手に入れるのに苦労した物があり、革靴やブーツには「大人になったら」「特別な日に」という思い入れが重なります。買った金額が高い物ほど、履かなくても手放す判断が止まります。集めること自体が楽しみだった靴は、履く物というより集めた物として扱われ、暮らしの中の役割から切り離されています。しかし、履かない靴は、履かない時点で暮らしの中では役目を終えています。買った金額はすでに使った金額であり、残しておいても戻ってきません。集めた物としての価値と、暮らしの中で履く価値を分けて考えることが出発点になります。",
  },
  {
    title: "足に合わない靴、履き慣らしが必要な靴が「いつか」のまま残る",
    body: "試着では合ったのに履くと痛い靴、サイズが少し合わないまま買った靴、履き慣らせば馴染むはずの革靴、体型や生活の変化で履かなくなったヒールやブーツ。こうした靴は「いつか慣れる」「いつか履く機会が来る」という理由で残りますが、痛い靴を選んで履く日は来ません。足に合わない靴は、履くたびに苦痛を伴い、結局は下駄箱の奥に戻されます。「いつか」で残した靴が下駄箱の場所を占め、今よく履く靴が玄関に出しっぱなしになる、という逆転が起きているなら、見直しの合図です。",
  },
];

const merits = [
  {
    title: "決めごと1：用途ごとに「履く靴の数」の上限を決める",
    body: "整理を始める前に、通勤や仕事用、休日用、運動用、雨の日用、冠婚葬祭用、季節物のブーツやサンダルというように、自分の暮らしに実際にある用途を書き出し、それぞれに残す数の上限を決めます。「仕事用は二足、休日用は三足、運動用は一足、冠婚葬祭用は一足」のように具体的な数にします。上限があると、同じ用途の靴が複数出てきたときに「どれを残すか」の比較で判断でき、「全部残す」という結論になりません。集める楽しみを続けたい場合は、履く靴とは別に「飾る・保管する靴」の上限を数で決め、その中で入れ替える形にします。",
  },
  {
    title: "決めごと2：「この一年で履いたか」と「今の状態」の二つで残す基準を決める",
    body: "残すかどうかを判断する軸は、「この一年で履いたか」と「今の状態」の二つです。季節と行事は一年でひと回りするため、一年履かなかった靴は次の一年も履かない可能性が高い物です。冠婚葬祭用のように頻度が低くても必要な物は、用途の上限の中で例外として残します。もう一つの軸は状態で、ソールがひび割れている、もろくなってはがれている、内側が黄ばんで硬くなっている、カビやにおいがある、かかとがすり減って傾いている靴は、履いた頻度や思い入れに関係なく手放す候補に入れます。靴は素材によって、履かなくても保管中に劣化が進むことがある品目です。",
  },
  {
    title: "決めごと3：売る・譲る物と、処分する物の分け方を先に決める",
    body: "状態がよく、傷や汚れが少ない靴は、買取や譲渡という選択肢があります。スニーカーには専門の買取があり、革靴やブーツもブランドや状態によって扱いが分かれます。査定の基準や受け入れの条件は店舗や事業者によって異なり、箱や付属品の有無、履いた回数、ソールの状態で扱いが変わります。査定に出す前に、汚れを落とし、箱や替え紐、保証書や購入時の書類があればまとめておきます。売れない、譲れない物は処分に回すと先に決めておくと、「売れるかもしれないから残す」という保留が増えません。",
  },
];

const steps = [
  {
    title: "家中の靴を一か所に集め、箱から出して用途ごとに並べる",
    body: "下駄箱、クローゼットの上段、押し入れ、ベッドの下、車の中、実家に置いている物、箱に入ったままの物など、靴がある場所をすべて確認し、一か所に出します。箱に入っている靴は、必ず箱から出して中身を確認します。集めたら、仕事用、休日用、運動用、雨の日用、冠婚葬祭用、季節物、飾る・保管する靴、というように用途ごとに並べます。並べると、同じ用途の靴が何足あるか、一度も履いていない靴がどれだけあるかが一目で分かります。この段階で、ソールのひび割れ、はがれ、黄ばみ、カビ、においがある物には目印を付けておきます。",
  },
  {
    title: "一足ずつ状態を確かめ、「残す」「売る・譲る」「手放す」「保留」の4つに分ける",
    body: "用途ごとの上限と「この一年で履いたか」を基準に、残す物、売るか譲る物、処分する物、迷う物の4つに分けます。ソールがもろくなってはがれている物、内側が硬く黄ばんでいる物、カビやにおいが取れない物、かかとが傾いている物は、状態を理由に「手放す」に入れます。状態がよく履いていない物は「売る・譲る」に入れます。用途の上限を超えていて迷う場合は、実際に履いてみて、足の痛み、歩きやすさ、今の服装との相性で比べます。足に合わない靴は、思い入れがあっても「手放す」か「売る・譲る」に入れます。迷う物は「保留」の箱に入れ、期限を決めて見直します。",
  },
  {
    title: "売る・譲る物は、汚れを落として箱と付属品をそろえる",
    body: "「売る・譲る」に分けた靴は、外側のほこりを落とし、ソールの溝の土や小石を取り、内側のにおいを確認します。箱、替え紐、シューキーパー、保証書や購入時の書類があれば一緒にまとめます。買取や査定の基準は店舗や事業者によって異なり、ブランドやモデル、状態、箱や付属品の有無、履いた回数で扱いが分かれます。査定に出す前に、受け付けている品目と条件を確認してください。宅配で査定に出す方法もありますが、条件や流れは事業者によって異なります。譲る場合は、サイズと状態を正直に伝えたうえで、相手が必要としているかを確認してから渡します。",
  },
  {
    title: "手放す物は、素材と構造を確認して自治体の区分で出す",
    body: "処分する靴は、素材と構造によって出し方が変わることがあります。布や合成皮革のスニーカーは可燃ごみになることが多い一方、革製品、金属の金具が多いブーツ、厚い底の安全靴、長靴などは、素材や大きさによって別の区分になることがあり、扱いは自治体によって異なります。品目と数を書き出して、お住まいの市区町村の分別案内で確認してから出してください。靴の箱は紙の資源として出せることが多い一方、中の緩衝材や乾燥剤は別の区分になることがあります。中敷きや詰め物を確認し、靴の中に入ったままの物を取り出してから出します。",
  },
  {
    title: "残す靴は、型崩れと劣化を防ぐ置き方で一か所にまとめる",
    body: "残すと決めた靴は、用途ごとに一か所にまとめて置きます。よく履く靴は下駄箱の取り出しやすい段に、季節物や冠婚葬祭用は上段や別の場所に置きます。革靴やブーツは、中に紙やシューキーパーを入れて形を保ち、風通しのよい場所に置きます。飾る・保管する靴も、箱に入れたままにせず、定期的に箱を開けて状態を確かめる日を決めておきます。密閉した箱に長期間入れたままにすると、劣化や黄ばみ、カビに気付くのが遅れます。置き場所と数が決まると、新しい靴を買うときに「どれと入れ替えるか」を考える習慣ができ、増え続けることを防げます。保留の箱は期限が来たら見直し、履かなかった物は手放します。",
  },
];

const ngActions = [
  {
    title: "箱を開けずに「まだきれいなはず」と決めつけて残す",
    body: "箱に入っている靴は、外からは状態が分かりません。ソールの素材によっては、履かずに保管しているだけでもろくなったりはがれたりすることがあり、開けてみたら履けない状態だった、ということが起こります。残すかどうかを決める前に、必ず箱から出して、ソールを軽く曲げ、内側の状態とにおいを確かめてください。",
  },
  {
    title: "足に合わない靴を「いつか慣れる」で残し続ける",
    body: "試着では合ったのに履くと痛い靴、サイズが少し違う靴は、履くたびに苦痛を伴い、結局は選ばれません。「慣れるはず」という理由で残した靴が下駄箱の場所を占め、今よく履く靴が玄関に出しっぱなしになるなら、逆転が起きています。状態がよいうちに売る、譲るを考えたほうが、靴にとっても持ち主にとっても損が少なくなります。",
  },
  {
    title: "革靴やブーツ、安全靴を確認せずに通常のごみに出す",
    body: "革製品、金属の金具が多いブーツ、厚い底の安全靴、長靴などは、素材や大きさによって別の区分になることがあり、扱いは自治体によって異なります。出し方は品目ごとに書き出して、お住まいの市区町村の分別案内で確認してから出してください。靴の箱と中の緩衝材や乾燥剤も、区分が分かれることがあります。",
  },
  {
    title: "減らす前に、靴用の収納や棚を買い足す",
    body: "靴が入りきらないからと収納や棚を買い足すと、その分だけ残す上限が上がり、結局は減りません。まず家中から集めて数を見て、用途ごとの上限で減らしてから、残す量に合った置き場所を考えてください。多くの場合、今ある下駄箱に収まる量まで減らすことができます。収納を増やすほど片付かなくなる理由は、関連記事で扱っています。",
  },
];

const judgeSigns = [
  "靴だけでなく、衣類やバッグも含めて玄関やクローゼット、部屋全体があふれている",
  "実家や故人の家に、靴や衣類が大量に残っていて、一人では確認しきれない",
  "引っ越しや退去の期限があり、靴や衣類を含めた家財を短期間で減らす必要がある",
  "箱に入った靴が何十箱と積まれていて、出して確認する作業だけで何日もかかる",
  "体調や時間の都合で、集めて分けて出すまでの作業を自分で進める余裕がない",
];

const faqs = [
  {
    q: "一度も履いていないスニーカーが箱のまま何足もあります。どうすればよいですか？",
    a: "まず箱から出して、ソールを軽く曲げ、内側の状態とにおいを確かめてください。素材によっては、履かずに保管しているだけで劣化が進むことがあります。状態がよい物は、買取や譲渡の対象になることがあります。査定の基準や条件は店舗や事業者によって異なり、箱や付属品の有無、モデル、状態で扱いが分かれますので、受け付けている品目と条件を事前に確認してください。履く予定がなく、飾る・保管する靴として残す場合は、数の上限を決め、定期的に箱を開けて状態を確かめる日を決めておきます。",
  },
  {
    q: "革靴やブーツは、どう処分すればよいですか？",
    a: "革靴やブーツの分別区分は自治体によって異なり、可燃ごみになる場合と、金具や大きさ、素材によって別の区分になる場合があります。お住まいの市区町村の分別案内で確認してください。状態がよい物は、買取や譲渡の対象になることがあります。査定の基準は店舗や事業者によって異なりますので、受け付けている品目と条件を事前に確認してください。中敷きや詰め物を取り出してから出します。",
  },
  {
    q: "集めるのが楽しみで、手放すと後悔しそうです。全部残してはいけませんか？",
    a: "集めること自体を否定する必要はありません。ただ、履く靴と飾る・保管する靴を分け、それぞれに数の上限を決めることをおすすめします。上限の中で入れ替える形にすると、増え続けることを防ぎながら楽しみを続けられます。箱に入れたまま何年も開けていない靴は、状態が分からないまま劣化していることがあるため、まず箱を開けて今の状態を見てから決めてください。趣味で集めた物の整理の考え方は、関連記事の趣味のコレクションの整理でも扱っています。",
  },
  {
    q: "スニーカーは、売ったほうがよいですか？",
    a: "履いていないスニーカーで状態がよい物は、状態がよいうちに査定に出すという選択肢があります。査定の基準や金額は、モデル、状態、箱や付属品の有無、事業者によって異なり、この記事では特定の金額を示していません。複数の店舗や事業者で比べる、箱や替え紐をそろえておく、汚れを落としておく、といった準備をしてから査定に出してください。売れなかった場合の扱いも先に決めておくと、保留が増えません。",
  },
];

const related = [
  { href: "/genkan-getabako-seiri/", label: "玄関・下駄箱の片付け", desc: "靴と外まわり用品を減らす基準と手順" },
  { href: "/shumi-collection-seiri/", label: "趣味のコレクションの整理", desc: "集めた物を手放すときの考え方" },
  { href: "/bag-kaban-seiri-shobun/", label: "バッグ・かばんの整理と処分", desc: "使わないバッグを手放す基準" },
  { href: "/irui-seiri/", label: "衣類の仕分けと処分", desc: "残す服と手放す服の基準" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "リサイクルショップの買取と併用", desc: "売れる物と処分する物の分け方" },
  { href: "/shuno-goods-tebanashi/", label: "収納グッズの買いすぎ問題", desc: "収納を増やすほど片付かない理由" },
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
    { "@type": "ListItem", position: 2, name: "靴・スニーカーのコレクションの整理" },
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
    { href: "#kiso", label: "1｜靴・スニーカーが増える3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「用途の上限」と「一年履いたか・今の状態」で考える" },
    { href: "#steps", label: "4｜靴・スニーカーを整理する5ステップ" },
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

      <Breadcrumb items={[{ label: "靴・スニーカーのコレクションの整理" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          靴・スニーカーのコレクションの整理｜箱ごとたまった靴を残す基準と状態別の手放し方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月9日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          下駄箱に入りきらず、箱のままクローゼットの上段や押し入れ、ベッドの下に積まれた靴。手に入れるのに苦労した限定のスニーカー、履くつもりで買ったまま一度も外に出ていない革靴、体型や生活の変化で履かなくなったヒールやブーツ。靴やスニーカーは、一足ごとに思い入れがあり、箱に入っていると状態も量も見えないため、「高かった」「限定だから」「いつか履く」という理由で手放しにくく、気付くと箱の山になっていることが珍しくありません。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、靴が増える構造、用途ごとの上限と「この一年で履いたか」「今の状態」で残す物を決める考え方、家中から集めて箱から出し、一足ずつ状態を確かめて4つに分ける手順、ソールの劣化や黄ばみなど状態別の判断、売る・譲るという選択肢、革・金具・厚底など素材や構造で分かれる処分の考え方、残す靴の保管の仕方を順に解説します。玄関と下駄箱という場所の片付けや、衣類やバッグの整理は別の記事で扱っており、この記事は靴とスニーカー、特に箱ごとたまったコレクションに絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>用途ごとに「履く靴の数」の上限を決め、「この一年で履いたか」と「今の状態」で残す物を絞る</li>
          <li>箱に入った靴は必ず箱から出して確かめる。ソールの劣化・黄ばみ・カビは思い入れに関係なく手放す候補</li>
          <li>集める楽しみは否定しない。履く靴と飾る・保管する靴を分け、それぞれに数の上限を決めて入れ替える</li>
          <li>革・金具・厚底の靴は区分が分かれる。自治体の分別案内で確認してから出す。減らす前に収納を買い足さない</li>
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

      <H2 id="kiso" num="1">靴・スニーカーが増える3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        箱に入って見えない、思い入れが残す理由になる、足に合わない靴が「いつか」で残る。三つの構造を知ると、残す基準が決めやすくなります。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">始める前に決めておきたい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        上限、基準、行き先。この三つを先に決めておくと、箱を開けたあとの判断が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「用途の上限」と「一年履いたか・今の状態」で考える</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        靴の整理は、「用途ごとに何足まで残すか」という上限と、「この一年で履いたか」「今の状態はどうか」という基準で考えると、迷う時間が大きく減ります。上限は、自分の暮らしに実際にある用途を書き出し、それぞれに具体的な数を当てはめて決めます。同じ用途の靴が上限を超えている場合は、「どれを残すか」を比べて決めます。比べるときは、見た目や買った金額、手に入れた苦労ではなく、足の痛みの有無、歩きやすさ、今の服装との相性など、実際に履く場面での使いやすさで判断します。一年履かなかった靴は次の一年も履かない可能性が高く、上限を超えている場合は手放す候補になります。もう一つの軸である状態は、靴に特有の判断です。素材によっては、履かずに保管しているだけでソールがもろくなったり、内側が黄ばんで硬くなったりすることがあります。箱を開けて初めて分かることが多いため、「箱から出して確かめる」を手順に必ず入れます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        集めること自体を否定する必要はありません。履く靴と飾る・保管する靴を分け、それぞれに数の上限を決め、その中で入れ替える形にすると、楽しみを続けながら増え続けることを防げます。集めた物を手放すときの気持ちの整理は<Link href="/shumi-collection-seiri/" className="text-primary underline underline-offset-2">趣味のコレクションの整理</Link>で扱っています。下駄箱に入りきらない靴の見直しや、傘や外まわりの道具を含めた玄関という場所の片付けは<Link href="/genkan-getabako-seiri/" className="text-primary underline underline-offset-2">玄関・下駄箱の片付け</Link>、靴と同じ考え方で進められるバッグの整理は<Link href="/bag-kaban-seiri-shobun/" className="text-primary underline underline-offset-2">バッグ・かばんの整理と処分</Link>、衣類全体の残す基準と手放す基準は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">衣類の仕分けと処分方法</Link>を参考にしてください。クローゼットの上段や押し入れに箱のまましまい込んだ靴が多い場合は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理</Link>、運動用の靴が道具と一緒にたまっている場合は<Link href="/sports-outdoor-seiri/" className="text-primary underline underline-offset-2">スポーツ用品・アウトドア用品の整理</Link>も参考になります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        状態のよい靴は、売る、譲るという選択肢を先に考えます。買取の基準や金額は、ブランドやモデル、状態、箱や付属品の有無、事業者によって異なりますので、この記事では特定の金額を示していません。リサイクルショップに持ち込む場合の考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>、宅配で査定に出す方法の流れと向き不向きは<Link href="/irui-takuhai-kaitori/" className="text-primary underline underline-offset-2">衣類の宅配買取の使い方</Link>で扱っています。売れるかどうかを理由に残し続けると、保留が増えて減りません。「売れなければ処分する」と先に決めておくことが、靴の整理を止めないコツです。靴の箱がたまっている場合は、箱そのものも「残す靴の分だけ」と上限を決めます。空き箱がたまる構造は<Link href="/kaimono-fukuro-stock/" className="text-primary underline underline-offset-2">紙袋・包装材・空き箱のストック整理</Link>で解説しています。
      </p>

      <H2 id="steps" num="4">靴・スニーカーを整理する5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        集めて箱から出す→状態を確かめて4つに分ける→売る・譲る物を整える→素材と区分を確認して出す→劣化を防ぐ置き方で戻す。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">靴の分別区分と買取の条件は、自治体と事業者の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          革靴、金具の多いブーツ、厚い底の安全靴、長靴、靴の箱と中の緩衝材や乾燥剤の分別区分は、自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。出す前に、必ずお住まいの市区町村の公式案内で分別区分をご確認ください。買取や査定の基準、受け付けている品目や条件は店舗や事業者によって異なりますので、事前にご確認ください。寄付や譲渡の受け入れ条件は団体によって異なります。まとめて出す量が多く、自治体の区分で出しにくい場合の考え方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で扱っています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        実家や故人の靴を整理する場合は、本人の思い入れが分からないまま判断することになります。箱に入っている靴は状態を確かめ、明らかに履けない状態の物から先に手放し、状態のよい物や本人が大切にしていたと分かる物は家族で相談してから決めます。故人の物をまとめて整理する場合の進め方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">遺品の形見分けの進め方</Link>、親が住む実家で本人と一緒に進める場合の声のかけ方は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">物を捨てない親への片付けの声かけ</Link>で扱っています。靴を減らしたあとに置き場所を整えるときは、収納を買い足す前に<Link href="/shuno-goods-tebanashi/" className="text-primary underline underline-offset-2">収納グッズの買いすぎ問題</Link>、季節ごとの入れ替えを仕組みにする方法は<Link href="/koromogae-shunou-shikumika/" className="text-primary underline underline-offset-2">衣替えの収納の仕組み化</Link>を参考にしてください。
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
        靴の整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、残す靴と売る・譲る靴は自分で先に取り分けておく必要があります。飾る・保管する靴として残す物は、作業の対象から外すことを依頼時に伝えておきます。買取に対応している業者に依頼する場合は、査定の対象と条件を見積もりの時点で確認してください。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の見方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。革靴・金具の多いブーツ・安全靴・長靴・靴の箱や緩衝材などの分別区分は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。買取や査定の基準・条件は店舗や事業者により異なりますので、事前にご確認ください。寄付や譲渡の受け入れ条件は団体により異なります。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
