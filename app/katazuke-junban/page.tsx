import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/katazuke-junban/";
const TITLE = "部屋の片付けはどこから？挫折しない順番と手順を解説";
const DESC =
  "散らかった部屋の片付けは順番で決まります。玄関・水回りから始めて「明らかなゴミ→大きい物→細かい物」の順に進める理由と、エリア別の攻略順、仕分けの4分類、途中で挫折しないコツ、業者に頼む判断基準までを解説。今日から実践できる片付けの段取りがわかります。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const principles = [
  {
    title: "原則1｜「捨てる」を先に、「収納」は後に",
    body: "片付けが失敗する典型は、物の量を減らす前に収納グッズを買い足してしまうことです。物量が多いままでは、どれだけ収納を工夫しても部屋は片付きません。まず不要な物を手放して総量を減らし、残った物に合わせて収納を考える。この順番を守るだけで、片付けの成功率は大きく変わります。",
  },
  {
    title: "原則2｜判断が簡単な物から手を付ける",
    body: "片付けで疲れる最大の要因は、物を1つずつ「要る・要らない」と判断する作業です。思い出の品や書類のように判断が重い物から始めると、序盤で頭が疲れて挫折します。明らかなゴミ、期限切れの食品、壊れた物など、迷わず判断できる物から着手し、判断力が必要な物は最後に回しましょう。",
  },
  {
    title: "原則3｜1回の作業範囲を狭く区切る",
    body: "「今日は部屋全部を片付ける」と決めると、終わらなかったときの挫折感が次の行動を止めてしまいます。「今日は玄関だけ」「この棚の1段だけ」のように、1〜2時間で確実に終わる範囲に区切って完了させるほうが、達成感が積み重なって長続きします。散らかりの度合いが強い部屋ほど、この区切りが重要です。",
  },
];

const areaOrder = [
  {
    step: "玄関・廊下",
    body: "最初に片付けるべきは玄関と廊下です。ゴミ袋や不用品を外へ運び出す動線がここに確保されていないと、以降のすべての作業効率が落ちます。靴や傘、置きっぱなしの荷物を整理し、人と荷物がスムーズに通れる状態を作りましょう。狭い範囲なので短時間で終わり、最初の成功体験としても最適です。",
  },
  {
    step: "キッチン・水回り",
    body: "次はキッチン・浴室・洗面所・トイレです。生ゴミや汚れを放置すると悪臭や害虫の原因になるため、衛生面のリスクが高い場所を早めに処理します。冷蔵庫内の期限切れ食品、シンクの洗い物、空き容器などは判断に迷わない物ばかりなので、作業のリズムも作りやすいエリアです。",
  },
  {
    step: "リビング・寝室",
    body: "生活の中心であるリビングと寝室は、床に置かれた物を「ゴミ・使う物・保留」に仕分けながら、床面を見える状態に戻すことを目標にします。床が見えると部屋の印象が大きく変わり、やる気が維持しやすくなります。衣類や本など量の多い物は、この段階では種類ごとにまとめるだけでも構いません。",
  },
  {
    step: "収納内部・思い出の品",
    body: "押し入れやクローゼットの中身、写真・手紙などの思い出の品は最後に回します。収納内部は生活動線に影響しないため後回しでよく、思い出の品は判断に時間がかかるためです。ここまでに片付けの判断に慣れていれば、思い出の品も「残す基準」を決めて向き合いやすくなっています。",
  },
];

const steps = [
  {
    title: "ゴミ袋・軍手・マスクなど道具を先にそろえる",
    body: "自治体指定のゴミ袋（可燃・不燃）、丈夫な軍手、マスク、掃除用のウェットシート、仕分け用の段ボールか袋を数枚用意します。作業の途中で道具を買いに行くと集中が途切れるため、開始前にそろえておくのが鉄則です。ほこりが多い部屋では換気も忘れずに行いましょう。",
  },
  {
    title: "「明らかなゴミ」だけを集めて袋に入れる",
    body: "最初の作業は仕分けではなくゴミ集めです。ペットボトル、弁当容器、レシート、壊れた物など、誰が見てもゴミと判断できる物だけを部屋中から集めます。この段階で部屋の物量が目に見えて減り、その後の仕分けが一気に楽になります。",
  },
  {
    title: "残った物を「使う・使わない・保留」の3つに仕分ける",
    body: "ゴミを除いた物を、1年以内に使った物（使う）、1年以上使っていない物（使わない）、どうしても迷う物（保留）の3つに分けます。保留は箱1つまでと上限を決め、迷う時間を1つ30秒までと区切ると判断が進みます。「使わない」に分けた物が、次のステップの処分対象です。",
  },
  {
    title: "「使わない物」の処分ルートを決めて手放す",
    body: "使わない物は、自治体の収集（普通ゴミ・粗大ごみ）、リサイクルショップやフリマアプリでの売却、友人・知人への譲渡、不用品回収業者への依頼などのルートで手放します。粗大ごみの申し込み方法や料金は自治体により異なるため、お住まいの市区町村の案内を確認してください。量が多い場合や搬出が難しい場合は業者の利用が現実的です。",
  },
  {
    title: "残す物の定位置を決めて収納する",
    body: "最後に、残した物すべてに「住所」を決めます。使う場所の近くに収納する、よく使う物ほど取り出しやすい位置に置く、収納は8割までにして余白を残す、の3点を意識すると、使った物を戻すだけで部屋が維持できる仕組みになります。収納グッズの購入を検討するのはこの段階です。",
  },
];

const ngActions = [
  {
    title: "先に収納グッズを買い込む",
    body: "物量を減らす前に収納を増やすと、不要な物ごと収納してしまい、片付いたように見えて総量は変わりません。収納グッズは「残す物が確定してから、サイズを測って」買うのが正しい順番です。",
  },
  {
    title: "思い出の品や書類から手を付ける",
    body: "アルバムや手紙は1つ1つに時間がかかり、作業が止まる典型的な原因です。重要書類の仕分けも集中力を使います。判断の軽い物で勢いを付けてから、最後にまとめて向き合いましょう。",
  },
  {
    title: "家族の物を勝手に捨てる",
    body: "同居家族の物でも、無断で処分するとトラブルの元になり、以降の片付けへの協力が得られなくなります。本人の物は本人に判断してもらうのが原則です。判断を頼めない事情がある場合も、少なくとも保留箱に入れて確認の機会を作りましょう。",
  },
  {
    title: "1日で終わらせようと徹夜レベルの計画を立てる",
    body: "片付けは想像以上に体力と判断力を消耗します。無理な計画は途中放棄につながり、中途半端に広げた物で部屋がかえって悪化することもあります。数回に分けて確実に区切りを付ける計画のほうが結果的に早く終わります。",
  },
];

const judgeSigns = [
  "物が多すぎて、どこから手を付けるか考えるだけで動けなくなっている",
  "大型家具・家電など、自分では運び出せない物が多い",
  "仕事や育児で、まとまった作業時間がどうしても確保できない",
  "引越しや退去の期限が迫っており、自力では間に合わない",
  "ゴミ屋敷と呼べる段階まで進んでおり、害虫や悪臭が発生している",
];

const faqs = [
  {
    q: "片付けはどの部屋から始めるのがよいですか？",
    a: "玄関・廊下から始めるのがおすすめです。ゴミや不用品を外へ運び出す動線が確保でき、以降の作業効率が上がります。次に衛生リスクの高いキッチン・水回り、その後にリビング・寝室、最後に収納内部や思い出の品という順番が、挫折しにくい標準的な進め方です。",
  },
  {
    q: "物が捨てられずに仕分けが進みません。コツはありますか？",
    a: "「1年以内に使ったか」を基準にすること、迷う時間を1つ30秒までに区切ること、迷った物は保留箱（上限1箱）に入れて先へ進むことの3つが有効です。保留箱は日付を書いて封をし、半年など期限を決めて開けずに過ごせたら中身を手放す、という方法もよく使われます。",
  },
  {
    q: "片付けにかかる時間はどのくらい見ておくべきですか？",
    a: "物量と部屋の広さによって大きく異なります。散らかりが軽度のワンルームなら休日1〜2日で目処が付くこともありますが、物が腰の高さまで積み上がった部屋では数日以上かかることも珍しくありません。1回2〜3時間の作業を複数回に分けて計画するのが現実的です。自力では難しいと感じたら、業者への依頼も検討しましょう。",
  },
  {
    q: "自分で片付けるのと業者に頼むのはどちらがよいですか？",
    a: "物量が少なく時間を確保できるなら自力で十分です。一方、大型の物の搬出がある、期限が迫っている、物量が多く数日かけても終わる見込みが立たない場合は、業者への依頼が向いています。費用は物量・間取り・搬出条件により異なるため、複数社の見積もり比較が基本です。費用の考え方は費用相場ページを参考にしてください。",
  },
];

const related = [
  { href: "/guide/self-cleanup/", label: "ゴミ屋敷を自分で片付ける方法", desc: "散らかりが重度の場合の自力手順" },
  { href: "/gomiyashiki-genin/", label: "ゴミ屋敷になる原因と進行段階", desc: "散らかりの段階を客観視する" },
  { href: "/service/katazuke-daikou/", label: "片付け代行サービスの料金と選び方", desc: "片付けを頼める業者の基礎知識" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート7つの使い分け", desc: "手放す方法の選び方を詳しく" },
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
    { "@type": "ListItem", position: 2, name: "部屋の片付けの順番と手順" },
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
    { href: "#gensoku", label: "1｜挫折しない片付けの3原則" },
    { href: "#area", label: "2｜エリア別の攻略順（玄関→水回り→居室→収納）" },
    { href: "#steps", label: "3｜片付けの手順5ステップ" },
    { href: "#ng", label: "4｜やりがちなNG行動4つ" },
    { href: "#gyousha", label: "5｜業者に頼んだほうがよいケース" },
    { href: "#faq", label: "6｜よくある質問" },
    { href: "#related", label: "7｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "部屋の片付けの順番と手順" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          部屋の片付けはどこから？挫折しない順番と手順を解説
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「片付けなきゃとは思っているのに、どこから手を付けていいか分からない」「やる気を出して始めても、途中で疲れて散らかったまま終わる」——片付けの悩みの多くは、実は意志の弱さではなく順番の問題です。判断の重い物から始めれば誰でも挫折しますし、範囲を広げすぎれば誰でも途中で力尽きます。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、散らかった部屋を立て直すための「挫折しない順番」を、原則・エリア別の攻略順・具体的な手順の3層で解説します。あわせて、やりがちなNG行動と、自力より業者に頼んだほうがよいケースの判断基準もまとめました。今日の作業からそのまま使える段取りとして活用してください。
        </p>
      </header>

      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>片付けは「捨てる→仕分ける→収納する」の順。収納グッズの購入は最後</li>
          <li>エリアは「玄関→水回り→リビング・寝室→収納内部・思い出の品」の順に攻略する</li>
          <li>最初の作業は仕分けではなく「明らかなゴミ集め」。判断の軽い作業で勢いを付ける</li>
          <li>1回の作業は1〜2時間で終わる範囲に区切り、完了の達成感を積み重ねる</li>
          <li>大型品の搬出・期限切迫・物量過多のときは業者への依頼が現実的</li>
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

      <H2 id="gensoku" num="1">挫折しない片付けの3原則</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        具体的な手順の前に、片付け全体を貫く3つの原則を押さえておきましょう。この原則から外れた進め方が、挫折のほとんどの原因になっています。
      </p>
      <div className="space-y-6 mb-4">
        {principles.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="area" num="2">エリア別の攻略順（玄関→水回り→居室→収納）</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        部屋単位では、次の順番で進めるのが効率的です。「運び出す動線の確保」と「衛生リスクの処理」を先に済ませ、判断の重いエリアを最後に回す考え方です。
      </p>
      <div className="space-y-4 mb-4">
        {areaOrder.map((a, i) => (
          <div key={a.step} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">
              <span className="mono text-primary mr-2">{String(i + 1).padStart(2, "0")}</span>
              {a.step}
            </h3>
            <p className="text-[15px] leading-8 text-text-secondary">{a.body}</p>
          </div>
        ))}
      </div>

      <H2 id="steps" num="3">片付けの手順5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        各エリアの中では、次の5ステップを繰り返します。どのエリアでも手順は同じなので、一度身に付ければ迷いなく進められます。
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
        不用品を手放すルートの詳しい比較は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート7つの使い分け</Link>を、自治体の粗大ごみ収集の活用方法は<Link href="/guide/municipal-service/" className="text-primary underline underline-offset-2">自治体サービス活用法</Link>を参照してください。
      </p>

      <H2 id="ng" num="4">やりがちなNG行動4つ</H2>
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
        自力の片付けは費用を抑えられる一方、時間と体力を大きく使います。次のいずれかに当てはまる場合は、片付け代行や不用品回収の業者を使うほうが、総合的な負担は小さくなることが多いでしょう。
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
        業者の費用は物量・間取り・搬出条件によって異なるため、必ず複数社で見積もりを取り、総額と内訳を比較してから依頼しましょう。安く抑えるコツは<Link href="/guide/cost-saving/" className="text-primary underline underline-offset-2">費用を安く抑える7つのコツ</Link>で解説しています。
      </p>
      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center mb-6">
        <p className="text-sm text-text-secondary mb-4">
          信頼できる業者選びには、編集部が特徴・口コミを比較したランキングをご活用ください。
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
        本記事は一般的な片付けの手順を紹介するものです。粗大ごみの申し込み方法・料金・対象品目は自治体により異なるため、必ずお住まいの市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
