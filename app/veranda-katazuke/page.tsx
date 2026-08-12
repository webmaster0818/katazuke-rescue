import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/veranda-katazuke/";
const TITLE = "ベランダ・バルコニーの片付け方｜避難経路・落下・防水に配慮した手順";
const DESC =
  "物置き場になりがちなベランダ・バルコニーは、避難経路の確保・物の落下や飛散・防水層の保護という住まいならではの注意点がある場所です。この記事では、ベランダを片付けるべき理由、安全に進める5ステップ、やってはいけないNG行動、土や植木鉢など処分に迷う物の扱い、業者に頼る判断基準までを解説します。";
const PUBLISHED = "2026-08-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "ベランダは「避難経路」でもある",
    body: "マンションなど集合住宅のベランダ・バルコニーは、火災などの際に隣戸との仕切り板（隔て板）を破って避難したり、避難ハッチから下の階へ降りたりする避難経路として設計されている場合があります。仕切り板の前や避難ハッチの上に物を置くと、いざというときに避難できなくなるおそれがあります。多くの管理規約でもこれらの周辺に物を置かないよう定められています。片付けの際は、まず避難動線をふさいでいる物がないかの確認から始めましょう。",
  },
  {
    title: "置きっぱなしの物は、落下・飛散のリスクになる",
    body: "台風や強風のとき、ベランダの物干し竿・植木鉢・すのこ・軽い収納ケースなどは、飛ばされて自宅の窓を割ったり、近隣や通行人に被害を与えたりするおそれがあります。日常的には気にならなくても、強風時に飛ぶ可能性がある物をどれだけ置いているかは、ベランダの安全性を測る重要な視点です。",
  },
  {
    title: "物の放置は、排水詰まり・防水の傷み・虫や鳥の住みつきを招く",
    body: "ベランダの床には防水処理が施されており、排水溝や排水口(ドレン)から雨水を逃がす構造になっています。物を置きっぱなしにすると、落ち葉や土埃が排水口に溜まって詰まり、雨水があふれて階下への漏水につながるおそれがあります。また、放置された植木鉢や資材の陰は、虫や鳥が住みつく場所になりがちです。ベランダの片付けは、見た目だけでなく建物を守るメンテナンスでもあります。",
  },
];

const steps = [
  {
    title: "ベランダの物をいったん全部把握する",
    body: "まず、ベランダに置いている物をすべて確認します。可能なら室内に運び込むか、ベランダの片側に寄せて、「何がどれだけあるか」を見える状態にしましょう。長年置きっぱなしの物は、劣化していたり中に虫がいたりすることがあるので、軍手をして慎重に扱ってください。",
  },
  {
    title: "劣化した物・使っていない物を処分に回す",
    body: "割れた植木鉢、ボロボロになったすのこやサンダル、錆びた物干し関連用品、使っていない収納ケースなどは、この機会に手放します。分別区分は自治体により異なるため、迷う物はお住まいの市区町村の分別案内で確認してください。プランターの土は、多くの自治体で通常のごみとして収集していない場合があるため、自治体の案内(回収イベントや指定の処分方法など)を必ず確認しましょう。",
  },
  {
    title: "避難動線を最優先で確保する",
    body: "隣戸との仕切り板の前、避難ハッチの上とその周辺には、何も置かない状態を作ります。エアコンの室外機の位置は動かせないため、それ以外の物の配置で避難経路を確保します。管理規約や使用細則でベランダの使い方が定められている場合は、その内容にも従ってください。",
  },
  {
    title: "残す物は「飛ばない・濡れに強い」形で収める",
    body: "残すと決めた物は、強風時に飛ばされない重さ・固定方法か、簡単に室内へ取り込める量に絞ります。屋外対応の収納ボックスを使う場合も、避難動線と排水を妨げない位置に置き、満杯になるほど詰め込まないのがコツです。物干し竿は強風の予報が出たら下ろす習慣をつけましょう。",
  },
  {
    title: "排水口と床を掃除して、季節ごとの点検日を決める",
    body: "物が減ったら、排水口周りの落ち葉や泥を取り除き、床を掃いてから水拭きなどで仕上げます。大量の水を一気に流すと階下や隣戸に迷惑がかかる場合があるため、集合住宅では管理規約の範囲で控えめに行いましょう。最後に、台風シーズン前と年末などの点検日を決めておくと、きれいな状態を保ちやすくなります。",
  },
];

const ngActions = [
  {
    title: "避難ハッチや仕切り板の前に物を置く",
    body: "避難ハッチの上に植木鉢や収納ボックスを置いたり、仕切り板の前に大型の物を置いたりすると、緊急時に自分や隣戸の住人が避難できなくなるおそれがあります。デッドスペースに見えても、そこは物置き場ではなく避難経路です。真っ先に空けましょう。",
  },
  {
    title: "プランターの土や泥を排水溝・排水口に流す",
    body: "土や泥を排水口に流すと、詰まりや階下への漏水の原因になります。土の処分方法は自治体によって扱いが大きく異なるため、必ずお住まいの自治体の案内を確認してください。園芸店やホームセンターの回収サービスが利用できる場合もあります。",
  },
  {
    title: "重い物を置いたまま引きずって防水層を傷付ける",
    body: "ベランダの床の防水層は、重い物を引きずったり、鋭利な角のある物を直置きしたりすると傷付くことがあります。防水層の破損は雨漏りや建物の劣化につながり、集合住宅では共用部分の修繕問題に発展する場合もあります。重い物を動かすときは持ち上げる、直置きを避けて台を使うなどの配慮をしましょう。",
  },
  {
    title: "不要になった大型品をベランダに放置し続ける",
    body: "使わなくなった物干し台・自転車・家具などをベランダに放置すると、劣化して飛散リスクが増すうえ、鳥や虫の住みつき、景観の悪化につながります。ベランダは室内より「後で捨てよう」が長期化しやすい場所です。大型品の処分は大型家具の処分方法の記事を参考に、早めに手を打ちましょう。",
  },
];

const judgeSigns = [
  "ベランダの物が多く、室内の片付けと合わせて一括で処分したい",
  "大型の物干し台・収納庫・家具などを自力で搬出できない",
  "鳥のフンや虫の発生がひどく、自力での清掃に抵抗がある",
  "高層階で大型品の搬出経路に不安がある",
  "退去・引っ越しまでにベランダを含めて原状に戻す必要がある",
];

const faqs = [
  {
    q: "ベランダの物はどこまで置いてよいのですか？",
    a: "集合住宅では、ベランダは専有部分ではなく共用部分(専用使用権のある部分)とされているのが一般的で、管理規約や使用細則で物の設置に制限が定められている場合があります。避難ハッチ・仕切り板周辺に物を置かないことは共通の原則として、具体的なルールはお住まいの物件の規約と管理会社の案内を確認してください。",
  },
  {
    q: "プランターの土はどうやって処分すればよいですか？",
    a: "土は多くの自治体で通常のごみ収集の対象外とされている場合があり、扱いが自治体によって大きく異なります。自治体の案内で処分方法を確認するのが第一歩です。園芸店・ホームセンターの回収サービスや、購入時の引き取りサービスが使える場合もあります。排水溝に流したり、公園や空き地にまいたりするのは避けてください。",
  },
  {
    q: "ベランダの掃除で水を流しても大丈夫ですか？",
    a: "集合住宅では、大量の水を流すと排水があふれて階下や隣戸に迷惑がかかるおそれがあり、規約で水流し洗いを制限している物件もあります。ほうきで掃いてから、濡らした雑巾やモップで拭く方法なら影響を抑えられます。判断に迷う場合は管理会社に確認しましょう。",
  },
  {
    q: "ベランダに置いていた物の処分だけ業者に頼めますか？",
    a: "多くの不用品回収業者は、ベランダの物だけの回収にも対応しています。搬出経路(エレベーターの有無・階数)や品目によって費用が変わるため、見積もり時にベランダからの搬出であることを伝えて確認しましょう。室内の片付けとまとめて依頼すると効率的な場合もあります。業者選びはランキングページを参考にしてください。",
  },
];

const related = [
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べない大型品の搬出と処分の選択肢" },
  { href: "/gaichu-heya-seisou/", label: "害虫が発生した部屋の清掃", desc: "虫が発生した場所を安全に片付ける方法" },
  { href: "/katazuke-junban/", label: "部屋の片付けの順番", desc: "家全体を片付けるときの基本手順" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート比較", desc: "自治体・売却・回収業者の使い分け" },
  { href: "/guide/municipal-service/", label: "自治体サービス活用ガイド", desc: "自治体の収集制度を上手に使う方法" },
  { href: "/taikyo-katazuke/", label: "退去前の片付けの段取り", desc: "ベランダも含めた退去準備の進め方" },
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
    { "@type": "ListItem", position: 2, name: "ベランダ・バルコニーの片付け方" },
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
    { href: "#kiso", label: "1｜ベランダ片付けの前に知っておきたい3つのこと" },
    { href: "#steps", label: "2｜安全に進めるベランダ片付けの5ステップ" },
    { href: "#ng", label: "3｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "4｜業者に相談したほうがよいサイン" },
    { href: "#faq", label: "5｜よくある質問" },
    { href: "#related", label: "6｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "ベランダ・バルコニーの片付け方" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          ベランダ・バルコニーの片付け方｜避難経路・落下・防水に配慮した手順
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月12日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          「気付けばベランダが物置き状態になっている」「使っていない植木鉢やすのこが何年も置きっぱなし」——ベランダ・バルコニーは、室内から見えにくいぶん、物が溜まりやすい場所です。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          しかもベランダには、避難経路の確保・強風時の落下や飛散・床の防水層の保護という、室内の片付けにはない注意点があります。この記事では、こうした住まい特有のポイントに配慮しながら、ベランダを安全に片付ける手順を解説します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>避難ハッチの上・隣戸との仕切り板の前は「避難経路」。最優先で物をなくす</li>
          <li>強風で飛ぶ可能性のある物は、固定するか室内に取り込める量まで減らす</li>
          <li>プランターの土は自治体により扱いが異なる。排水溝に流さず、必ず自治体の案内を確認する</li>
          <li>排水口の詰まりと防水層の傷は階下トラブルのもと。掃除と点検をセットにする</li>
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

      <H2 id="kiso" num="1">ベランダ片付けの前に知っておきたい3つのこと</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ベランダの片付けは、単なる整理整頓ではなく、安全と建物の維持に関わる作業です。まず、ベランダという場所の特性を押さえましょう。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="steps" num="2">安全に進めるベランダ片付けの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        ここからは実際の手順です。「全部把握→処分→避難動線→残す物の置き方→掃除と点検」の順で進めます。半日あれば多くのベランダは見違えるはずです。
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
        処分に回す物の分別区分・粗大ごみの出し方は自治体により異なるため、必ずお住まいの市区町村の公式サイトで確認してください。処分先の選び方は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート比較</Link>で解説しています。
      </p>

      <H2 id="ng" num="3">やってはいけないNG行動4つ</H2>
      <div className="space-y-4 mb-4">
        {ngActions.map((n) => (
          <div key={n.title} className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="font-bold text-text-primary mb-2">{n.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{n.body}</p>
          </div>
        ))}
      </div>

      <H2 id="gyousha" num="4">業者に相談したほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        次のいずれかに当てはまる場合は、無理をせず不用品回収・片付け業者への相談を検討しましょう。高所からの搬出は、慣れていないと事故につながりやすい作業です。
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
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        地域別の依頼先は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京</Link>・<Link href="/area/fukuoka/" className="text-primary underline underline-offset-2">福岡</Link>・<Link href="/area/kobe/" className="text-primary underline underline-offset-2">神戸</Link>など各エリアページで紹介しています。
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
        本記事は一般的な知識の提供を目的としたものです。ベランダの使用ルールは物件の管理規約・使用細則により、ごみの分別区分・土の処分方法は自治体により異なるため、必ずお住まいの物件・市区町村の案内をご確認ください。
      </p>
    </article>
  );
}
