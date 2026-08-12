import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kabi-seisou/";
const TITLE = "部屋のカビ掃除のやり方｜安全な除去手順と再発させない環境づくり";
const DESC =
  "壁・押し入れ・水回りなどに広がったカビを安全に掃除する手順を解説。カビが発生する条件と部屋の中の発生ポイント、場所別の除去5ステップ、健康リスクを避けるための保護具と洗剤の注意点、やってはいけないNG行動、清掃業者に相談すべきサイン、再発防止の環境づくりまでまとめました。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "カビは「湿度・温度・栄養」の3条件がそろうと繁殖する",
    body: "カビは、高い湿度、適度な温度、ホコリや皮脂・食べかすなどの栄養分という3つの条件がそろった場所で繁殖します。逆に言えば、このうち1つでも断てば繁殖は抑えられます。掃除でカビを除去しても、湿気とホコリがたまる環境が変わらなければ再発するため、「除去」と「環境づくり」はセットで考える必要があります。",
  },
  {
    title: "部屋の中でカビが発生しやすいポイント",
    body: "浴室・洗面所などの水回り、結露しやすい窓まわりとカーテン、壁にぴったり付けた家具の裏、押し入れ・クローゼットの奥、敷きっぱなしの布団の下、エアコン内部などが代表的な発生ポイントです。共通するのは「湿気がこもり、空気が動かず、掃除の手が届きにくい」場所であること。カビ臭がするのに見当たらない場合は、家具の裏や収納の奥を確認してみてください。",
  },
  {
    title: "カビを放置する健康・住環境上のリスク",
    body: "カビの胞子を吸い込む環境は、アレルギー症状など健康面への影響が指摘されています。また、壁紙や木部の奥までカビが入り込むと、掃除では取り切れなくなり、建材の交換など大がかりな対応が必要になることもあります。「見えるカビが小さいうちに取る」ことが、健康面でもコスト面でも負担の少ない対処です。体調への影響が疑われる場合は医療機関に相談してください。",
  },
];

const spots = [
  {
    title: "水回り（浴室・洗面所・キッチン）のカビ",
    body: "ゴムパッキンやタイル目地の黒カビには、市販のカビ取り剤（塩素系が一般的）を製品の説明どおりに使います。使用中は必ず換気し、ゴム手袋・マスク・保護メガネを着用してください。塩素系製品は酸性タイプの洗剤と絶対に混ぜないこと。掃除後は水分を拭き取り、換気扇を回して乾燥させます。",
  },
  {
    title: "壁紙・窓まわり・家具の裏のカビ",
    body: "居室の壁紙は水に弱いことが多く、浴室用の強力なカビ取り剤が使えない場合があります。まず消毒用エタノールを布に含ませて拭き取る方法が一般的です（変色の可能性があるため目立たない場所で試してから）。結露する窓は水分をこまめに拭き、家具は壁から数センチ離して空気の通り道を作ります。広範囲に広がった壁のカビは、表面を拭いても内部に残っている場合があり、専門業者への相談が確実です。",
  },
  {
    title: "布団・衣類・収納内部のカビ",
    body: "布団や衣類に生えたカビは、天日干しやエタノール拭きで表面の対処はできますが、奥まで入り込んだ物は取り切れないことがあります。臭いや変色が取れない寝具・衣類は、健康面を考えると処分・買い替えが現実的です。押し入れは中身を全部出し、エタノールで拭いてから完全に乾かし、物を詰め込みすぎない収納に見直しましょう。処分方法は布団・マットレスの処分の記事も参考にしてください。",
  },
];

const steps = [
  {
    title: "保護具を着け、換気を確保してから始める",
    body: "カビ掃除では胞子や洗剤の飛沫を吸い込まないことが最重要です。マスク（できれば使い捨ての高性能タイプ）、ゴム手袋、保護メガネを着用し、窓を開けるか換気扇を回して空気の流れを作ってから作業を始めます。作業着は洗濯できる長袖にし、終わったらすぐ洗濯しましょう。",
  },
  {
    title: "カビの周りの物をどかし、被害範囲を確認する",
    body: "カビの生えた場所の周辺にある物を移動させ、どこまで広がっているかを確認します。家具の裏や押し入れの奥など、見えていなかった部分に広がっていることも多いためです。カビが付着した不要な物（古い紙類・布類など）は、この段階で袋に入れて処分に回すと、掃除も再発防止も楽になります。",
  },
  {
    title: "場所に合った方法でカビを除去する",
    body: "水回りは市販のカビ取り剤、居室の壁や家具は消毒用エタノール拭き、というように場所と素材に合った方法で除去します。ゴシゴシこすると素材を傷め、カビの胞子を舞い上げることもあるため、「薬剤を浸透させて拭き取る」のが基本です。製品ごとの放置時間・使用方法は必ず説明書きに従ってください。",
  },
  {
    title: "水分を拭き取り、完全に乾燥させる",
    body: "除去後に湿気が残っていると、すぐに再発します。掃除した場所の水分を乾いた布で拭き取り、換気や扇風機・除湿機で完全に乾かします。押し入れやクローゼットは、数時間扉を開け放して内部を乾燥させましょう。この「乾かし切る」工程を省くと、掃除の効果が長持ちしません。",
  },
  {
    title: "湿気とホコリをためない環境に変える",
    body: "仕上げに、再発しにくい環境づくりを行います。家具を壁から離す、収納に物を詰め込みすぎない、布団は敷きっぱなしにしない、結露はこまめに拭く、換気の習慣を作る、必要に応じて除湿機や除湿剤を使う——これらのうち実行しやすいものから取り入れてください。カビは環境が変わらない限り何度でも戻ってくるため、環境づくりこそが本当の対策です。",
  },
];

const ngActions = [
  {
    title: "塩素系のカビ取り剤と酸性タイプの洗剤を併用する",
    body: "塩素系製品と酸性タイプの製品が混ざると有毒な塩素ガスが発生し、命に関わる危険があります。同じ場所で続けて使うことも避け、必ず「まぜるな危険」の表示と製品の注意書きに従ってください。使用中・使用後の換気も必須です。",
  },
  {
    title: "乾いたままカビを擦る・掃除機で直接吸う",
    body: "乾いたカビをブラシで擦ったり掃除機で吸ったりすると、胞子が空気中に舞い上がり、吸い込んだり別の場所に付着して広がったりするおそれがあります。カビの除去は、薬剤やエタノールで湿らせてから拭き取るのが基本です。",
  },
  {
    title: "表面だけ拭いて「取れた」と判断する",
    body: "壁紙や木部の奥に入り込んだカビは、表面を拭いても内部に残っていることがあります。同じ場所に繰り返し現れる場合は内部に根が残っているサインで、素材の交換や専門的な処理が必要な場合もあります。再発を繰り返す場所は自力対処の限界と考え、業者への相談を検討しましょう。",
  },
  {
    title: "マスクなし・換気なしで長時間作業する",
    body: "カビの胞子や洗剤の成分を吸い込みながらの作業は、体調不良につながるおそれがあります。保護具と換気は「面倒でも必ず」が原則です。広範囲のカビ掃除を一気にやろうとせず、体調に異変を感じたらすぐ中断してください。喘息などの持病がある方は、自力での作業自体を慎重に判断しましょう。",
  },
];

const judgeSigns = [
  "カビが壁一面など広範囲に広がっており、自力で除去し切れる量ではない",
  "掃除しても同じ場所に繰り返しカビが発生する",
  "壁紙の内側・床下・エアコン内部など、手の届かない場所のカビが疑われる",
  "カビ臭が取れず、発生源を特定できない",
  "物が多くてカビの範囲を確認できない、または喘息など健康上の不安があり自力作業を避けたい",
];

const faqs = [
  {
    q: "部屋の壁のカビには何を使えばよいですか？",
    a: "居室の壁紙には、まず消毒用エタノールを布に含ませて拭き取る方法が一般的です。浴室用の塩素系カビ取り剤は壁紙を傷めたり変色させたりする場合があるため、使用可能な素材か製品の説明で確認してください。どの方法でも、目立たない場所で試してから全体に使うのが安全です。広範囲に広がっている場合や繰り返す場合は、内部に入り込んでいる可能性があり、専門業者への相談をおすすめします。",
  },
  {
    q: "カビ掃除を業者に頼むとどこまでやってもらえますか？",
    a: "業者や契約内容によりますが、カビの除去・除菌・防カビ処理に加え、ハウスクリーニングや片付けと組み合わせて依頼できる場合もあります。エアコン内部のカビは専門のエアコンクリーニング、建材内部まで達したカビはリフォームの領域になることもあります。費用は範囲・状態により大きく異なるため、状況を伝えて複数社の見積もりを比較してください。",
  },
  {
    q: "カビだらけの部屋は健康に悪いですか？",
    a: "カビの胞子を日常的に吸い込む環境は、アレルギー症状などへの影響が指摘されています。感じ方には個人差がありますが、咳や鼻炎などの症状が続く場合は、部屋の環境を見直すとともに医療機関に相談してください。小さなお子さんや高齢の方、呼吸器の持病がある方がいる家庭では、特に早めの対処をおすすめします。",
  },
  {
    q: "カビが生えた布団や衣類は捨てるべきですか？",
    a: "表面のわずかなカビであれば、天日干しやエタノール拭きで対処できる場合もありますが、臭いや変色が取れない物、奥まで入り込んだ物は、健康面を考えると処分・買い替えが現実的です。布団やマットレスの処分方法は自治体により異なるため、お住まいの市区町村のルールを確認してください。当サイトの布団・マットレスの処分方法の記事でもルート別に解説しています。",
  },
];

const related = [
  { href: "/heya-shoushuu/", label: "部屋の臭いが消えないときの消臭手順", desc: "カビ臭を含む臭いの切り分けと対処" },
  { href: "/futon-mattress-shobun/", label: "布団・マットレスの処分方法", desc: "カビの生えた寝具の手放し方" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃手順", desc: "カビと害虫が併発したときの対処" },
  { href: "/guide/self-cleanup/", label: "ゴミ屋敷を自分で片付ける方法", desc: "物が多い部屋の片付けの進め方" },
  { href: "/cost/price/", label: "片付け・清掃の費用相場", desc: "間取り・作業別の費用の考え方" },
  { href: "/area/tokyo/", label: "東京の片付け・清掃業者おすすめ", desc: "東京から依頼できる業者の比較" },
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
    { "@type": "ListItem", position: 2, name: "部屋のカビ掃除のやり方" },
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
    { href: "#kiso", label: "1｜カビが発生する条件と部屋の中の発生ポイント" },
    { href: "#basho", label: "2｜場所別のカビ除去方法" },
    { href: "#houshin", label: "3｜カビ掃除の全体方針" },
    { href: "#steps", label: "4｜安全に進めるカビ掃除5ステップ" },
    { href: "#ng", label: "5｜危険・逆効果なNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "部屋のカビ掃除のやり方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          部屋のカビ掃除のやり方｜安全な除去手順と再発させない環境づくり
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「気づいたら壁や押し入れにカビが広がっていた」「掃除しても同じ場所にまた生えてくる」——カビの悩みが繰り返されるのは、除去の方法か、部屋の環境か、そのどちらか（または両方）に原因があります。カビ掃除には、安全に関わる注意点も多くあります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、カビが発生する条件と部屋の中の発生ポイントを整理したうえで、場所別の除去方法、安全に進める5つのステップ、危険・逆効果につながるNG行動、清掃業者に相談すべきサイン、そして再発させない環境づくりまでを解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>カビは湿度・温度・栄養の3条件で繁殖する。除去と「環境づくり」をセットで行わないと再発する</li>
          <li>水回りは市販のカビ取り剤、居室の壁や家具は消毒用エタノール拭きが基本。素材に合った方法を選ぶ</li>
          <li>マスク・手袋・換気は必須。塩素系と酸性タイプの洗剤の併用は有毒ガスが発生し厳禁</li>
          <li>広範囲のカビ・繰り返すカビ・手の届かない場所のカビは、自力にこだわらず業者に相談する</li>
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

      <H2 id="kiso" num="1">カビが発生する条件と部屋の中の発生ポイント</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        効果的な対処のために、まずカビが繁殖する仕組みと、部屋の中のどこに発生しやすいかを押さえておきましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="basho" num="2">場所別のカビ除去方法</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        カビ取りは「どこに生えたか」で使える薬剤と方法が変わります。代表的な3つの場所別に整理します。いずれも、製品の注意書きに従うことが大前提です。
      </p>
      <div className="space-y-4 mb-4">
        {spots.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{s.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{s.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">カビ掃除の全体方針</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        カビ掃除の大原則は、「安全第一で除去し、乾燥まで終わらせ、環境を変える」の3点です。除去だけで終わると高い確率で再発します。逆に、換気や家具の配置といった環境の見直しは、一度やれば効果が続く投資です。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        また、物が多い部屋はカビの温床になりやすく、掃除もできません。カビ対策の前提として物量を減らす必要がある場合は、<Link href="/guide/self-cleanup/" className="text-primary underline underline-offset-2">自分で片付ける方法</Link>を参考にしてください。カビ臭が取れない場合は<Link href="/heya-shoushuu/" className="text-primary underline underline-offset-2">部屋の消臭手順</Link>の記事で発生源の切り分け方を解説しています。
      </p>

      <H2 id="steps" num="4">安全に進めるカビ掃除5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の作業は次の5ステップで進めます。「保護具→確認→除去→乾燥→環境づくり」の順番です。
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

      <H2 id="ng" num="5">危険・逆効果なNG行動4つ</H2>
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
        次のいずれかに当てはまる場合は、自力での除去にこだわらず、清掃業者・片付け業者への相談を検討しましょう。建材内部まで達したカビは、掃除ではなくリフォームの領域になることもあります。
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
        本記事は一般的な知識の提供を目的としたもので、健康に関する診断や個別の助言を行うものではありません。症状がある場合は医療機関にご相談ください。洗剤・薬剤は必ず製品の注意書きに従って使用し、塩素系と酸性タイプの製品は絶対に混ぜないでください。
      </p>
    </article>
  );
}
