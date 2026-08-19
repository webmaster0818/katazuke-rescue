import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/furui-kaden-anzen-shobun/";
const TITLE = "古い家電の安全確認と処分｜長く使った家電を見直すポイント";
const DESC =
  "片付けの途中で押し入れや物置から出てきた古い家電、長年使い続けている家電を、どう見直せばよいのか。電源コードやプラグの状態、使用中の異音・異臭・発熱といった安全確認のチェック項目、取扱説明書の標準使用期間の表示やリコール情報の確認先、動かない家電・使わない家電の手放し方の全体像までを、片付けの視点から整理して解説します。";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "片付けで出てくる家電は「使っていない家電」であることが多い",
    body: "押し入れの奥、物置、実家の納戸。片付けを進めると、しまい込まれたまま何年も動かしていない家電が出てきます。羽根の付いた扇風機、季節家電の電気ストーブ、旧型のテレビ、一度しか使わなかった調理家電、予備として取っておいた電子レンジ——どれも「壊れたから片付けた」のではなく、「使わなくなったからしまった」物であることがほとんどです。つまり出てきた時点で、その家電は今の暮らしで役割を持っていません。まずはこの事実を、そのまま受け止めるところから始めます。",
  },
  {
    title: "「何年たったか」だけで判断せず、状態を見る",
    body: "家電の見直しというと使用年数の話になりがちですが、年数だけで一律に良し悪しが決まるわけではありません。同じ年数でも、使用頻度・置き場所の湿気やほこり・電源まわりの扱い方によって、劣化の進み方は大きく変わります。長期間しまい込まれていた家電は、内部にほこりや湿気を抱えていることもあります。大切なのは「何年たったか」ではなく、「今どういう状態か」を自分の目と手で確かめること。次章のチェック項目は、そのための具体的な見方です。",
  },
  {
    title: "取扱説明書や本体表示に書かれた使用期間の目安を確認する",
    body: "家電の中には、取扱説明書や本体の表示に、設計上の標準使用期間や点検時期の目安が記載されているものがあります。これはメーカーが想定した標準的な使用条件のもとでの目安であり、その期間を過ぎた瞬間に使えなくなるという意味ではありません。ただし、経年による部品の劣化を見込んだ数字なので、目安を大きく超えている家電は、点検や買い替えを検討する材料になります。説明書が見当たらない場合は、本体の型番からメーカーの公式サイトで電子版の説明書を探せることがあります。",
  },
];

const merits = [
  {
    title: "観点1：電源コード・プラグ・差し込み口の状態",
    body: "まず電源まわりを確認します。コードの被覆に切れ・つぶれ・硬化・ひび割れがないか、根元が折れ曲がって芯線が透けていないか、家具の脚で踏まれた跡がないかを目で追いましょう。プラグの刃に曲がりや変色、黒ずみ、さびが出ていないか、刃の付け根がぐらついていないかも確認します。コンセントに差し込んだときの手応えが緩い、差し込み口が変色している、といった住宅側の状態も見るポイントです。これらに該当する場合は使用を控え、メーカーや購入した販売店に相談してください。たこ足配線で1つの口に負荷を集めている状態も、この機会に見直しておきたい点です。",
  },
  {
    title: "観点2：使用中の音・におい・発熱・動作の様子",
    body: "実際に動かしてみるときは、短時間そばで見守りながら、いつもと違うところがないかを確かめます。以前は出ていなかった異音やうなり、こげたようなにおいやプラスチックが熱せられたようなにおい、本体や電源コードの過度な発熱、スイッチを入れても動いたり止まったりする不安定な動作、焦げ跡のような変色——こうした様子が見られたら、その場で電源を切り、プラグを抜いて使用を控えます。「もう少し使えそう」と様子を見るのではなく、メーカーの相談窓口や販売店に型番を伝えて相談するのが安全な順番です。",
  },
  {
    title: "観点3：本体の外観・通気口・置かれていた環境",
    body: "本体の変形、割れ、部品の欠け、さびや腐食、水がかかった跡がないかを確認します。長く物置や屋外に近い場所に置かれていた家電は、湿気や結露の影響を受けていることがあります。あわせて、背面や側面の通気口・吸気口にほこりが厚く積もっていないかも見てください。ほこりは放熱を妨げる要因になります。冷蔵庫や洗濯機のように背面や下部にほこりがたまりやすい家電は、動かす前に清掃しておくと状態も確認しやすくなります。分解が必要な清掃は自分で行わず、メーカーや専門の事業者に相談しましょう。",
  },
];

const steps = [
  {
    title: "家中の「使っていない家電」を1か所に集めて一覧にする",
    body: "最初に、押し入れ・物置・納戸・ベランダ・車庫などから、今使っていない家電をすべて出して一か所に集めます。小さな調理家電やドライヤー、延長コードやアダプター類も対象です。集めたら、品名と設置場所を紙に書き出すだけで構わないので一覧にします。散らばっていると「たいした量ではない」と感じますが、並べると総量が見えて判断が進みます。物置ごと整理したい場合の段取りは、物置の整理の記事もあわせて参考にしてください。",
  },
  {
    title: "型番・メーカー名・製造年を控える",
    body: "次に、一台ずつ本体の背面や側面にある銘板シールを見て、メーカー名・型番・製造年を控えます。スマートフォンで撮影しておくと、あとで調べるときに楽です。型番は次の工程で情報を確認するための鍵になり、処分ルートを判断するときにも使います。シールが色あせて読めない場合は、取扱説明書や保証書、購入時のレシートが残っていないかも探してみてください。この作業を先にまとめてやっておくと、一台ごとに何度も押し入れへ戻る手間がなくなります。",
  },
  {
    title: "リコール・製品事故の情報を公式の窓口で確認する",
    body: "控えた型番をもとに、メーカーの公式サイトにあるお客様サポートやリコール・重要なお知らせのページで、その製品に関する情報が出ていないかを確認します。国が製品の安全に関する情報を公表している窓口でも、製品名や型番から検索できる仕組みが用意されています。個人のまとめサイトや掲示板の情報ではなく、メーカー公式と公的な公表窓口で確かめるのが基本です。該当する情報が見つかった場合は、案内されている連絡先の指示に従って対応してください。",
  },
  {
    title: "「使う・使わない」を、予定を言えるかで判断する",
    body: "安全面の確認と情報の確認が済んだら、残すか手放すかを決めます。判断の基準はシンプルで、「いつ、どこで、誰が使うか」を今この場で具体的に言えるかどうかです。「来客用に」「災害のときに」と言いかけて具体化できないなら、それは使う予定ではなく手放せない理由の後付けです。逆に、季節家電のように使う時期がはっきりしている物は残す判断で構いません。判断に迷う物は「保留」の箱にまとめ、期限を決めて見直すと前に進みます。",
  },
  {
    title: "手放すと決めた家電を、ルートごとに仕分ける",
    body: "手放すと決めた家電は、処分ルートごとに分けます。分け方の軸は、法律で回収の仕組みが定められている品目か、自治体の小型家電の回収に出せる物か、粗大ごみとして申し込む物か、まだ動いて買取や譲渡が期待できる物か、の四つです。個人の情報が記録されている機器は、データを消してから手放す工程が別途必要になります。仕分けが終わったら、それぞれの申し込みや持ち込みの手続きに進みます。運び出しが難しい大型の家電は、搬出の準備を先に確認しておくと当日に慌てません。",
  },
];

const ngActions = [
  {
    title: "異音・異臭・発熱があるのに「もったいない」と使い続ける",
    body: "長く使ってきた家電ほど愛着があり、少しくらいの不調なら使えるうちは使いたくなるものです。しかし、いつもと違う音・におい・熱は、内部で何かが変化しているサインとして受け取るべき情報です。「壊れるまで使う」と決めてしまうと、判断のタイミングを自分で手放すことになります。そうした様子が見られたら、まず電源を切ってプラグを抜き、型番を控えたうえでメーカーの相談窓口や購入した販売店に相談してください。相談は無料で受け付けている窓口もあります。",
  },
  {
    title: "傷んだコードを自己流で補修する・束ねたまま通電する",
    body: "被覆が破れたコードをテープで巻いて使い続ける、断線しかけた部分をねじって直す、といった自己流の補修は避けてください。見た目が元に戻っても、内部の状態は分かりません。また、延長コードやドラム式のコードを巻いたまま使う、家具の下敷きにする、束ねて固定するといった使い方も、コードに負担をかける扱いです。一つのコンセントに複数の電源タップを重ねるたこ足配線も、この機会に整理しましょう。コードに不安がある家電は使用を控え、メーカーや販売店に相談するのが確実です。",
  },
  {
    title: "型番を確認せずに「どうせ壊れている」と分別せず出す",
    body: "動かない家電でも、品目によっては法律に基づく回収の仕組みが定められており、一般の粗大ごみとして出せないものがあります。壊れているかどうかと、どのルートで手放すかは別の話です。確認せずに集積所へ出すと回収されずに残り、結果として近隣の迷惑になります。まず型番と品目を確認し、自治体の案内や指定の窓口でルートを調べてから手続きを進めてください。品目ごとの考え方は、この記事の「手放し方の全体像」で紹介している各記事にまとめています。",
  },
  {
    title: "個人の情報が残ったまま譲渡・売却・処分に回す",
    body: "パソコン・スマートフォン・タブレットはもちろん、テレビの録画機能付き機種、ネットワークにつながる家電、カーナビや通信機能を持つ機器には、写真・連絡先・通信の設定・アカウント情報などが残っていることがあります。初期化の方法は機種により異なり、初期化だけでは十分でない場合もあります。手放す前に、その機器で何を保存していたかを思い出し、必要な手順を確認してから次の工程に進んでください。急いで処分に回すと、あとから取り返せません。",
  },
];

const judgeSigns = [
  "大型の家電が複数あり、階段や通路を通した搬出が自力では難しい",
  "物置や実家に古い家電がまとまってあり、仕分けから手が回らない",
  "退去や引っ越しの期限までに、家電を含めてまとめて処分したい",
  "家電以外の不用品も多く、品目ごとに手続きを分けるのが負担になっている",
  "運び出しの際に体を痛めそうで、家族だけで作業するのが不安",
];

const faqs = [
  {
    q: "何年使ったら家電は買い替えたほうがよいのでしょうか？",
    a: "一律の年数で決まるものではありません。使用頻度や設置環境によって劣化の進み方は変わるため、年数はあくまで参考です。取扱説明書や本体表示に設計上の標準使用期間の記載があれば、そこを目安のひとつにしつつ、電源コードの状態、使用中の音やにおい、動作の安定さといった実際の様子と合わせて判断してください。気になる点があれば、型番を控えてメーカーや販売店に相談するのが確実です。",
  },
  {
    q: "長く使う製品の点検を促す制度があると聞きましたが、どう確認すればよいですか？",
    a: "経年劣化による事故を防ぐ目的で、長期間使用される製品について所有者の登録や点検を促す仕組みが法律に基づいて設けられています。ただし対象となる品目や手続きの内容は制度の運用によって異なり、すべての家電が対象というわけではありません。お手元の製品が該当するかどうかは、取扱説明書の記載やメーカーの公式案内で型番をもとに確認してください。判断に迷う場合はメーカーの相談窓口に問い合わせるのが早道です。",
  },
  {
    q: "動かない家電も、決められた回収ルートに出す必要がありますか？",
    a: "はい、故障の有無と処分ルートは別の問題です。品目によっては法律で回収と再商品化の仕組みが定められており、動かない状態でもそのルートに沿って手続きします。それ以外の家電は、自治体の小型家電の回収や粗大ごみなどの区分に従います。対象品目や受け付け方法は自治体により異なるため、必ずお住まいの自治体の案内や指定の窓口で確認してください。判断がつかない場合は品目名で問い合わせるのが確実です。",
  },
  {
    q: "小型家電の回収ボックスはどこの自治体にもありますか？",
    a: "実施状況は自治体によって異なります。公共施設や店舗に回収ボックスを設置している地域もあれば、拠点回収やイベント回収という形をとる地域、実施していない地域もあります。入れられる大きさや対象の品目も一様ではなく、電池を抜くなどの条件が付く場合もあります。お住まいの自治体の公式案内で、設置場所・対象品目・出し方の条件を確認してから持ち込んでください。製品事故に関する相談は消費者ホットライン188でも受け付けています。",
  },
];

const related = [
  { href: "/kaden-recycle-shobun/", label: "家電リサイクル法の対象と処分", desc: "決められた回収ルートの進め方" },
  { href: "/reizouko-sentakuki-shobun-junbi/", label: "冷蔵庫・洗濯機の処分準備", desc: "水抜き・霜取りと搬出の段取り" },
  { href: "/aircon-torihazushi-shobun/", label: "エアコンの取り外しと処分", desc: "取り外し依頼から処分までの流れ" },
  { href: "/pc-sumaho-data-shoukyo/", label: "パソコン・スマホのデータ消去", desc: "手放す前に確認したい手順" },
  { href: "/fuyohin-shobun-route/", label: "不用品の処分ルート", desc: "自治体・買取・業者の使い分け" },
  { href: "/monooki-kaitai-mae-seiri/", label: "物置の解体前の整理", desc: "中身を出す順番と仕分け方" },
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
    { "@type": "ListItem", position: 2, name: "古い家電の安全確認と処分" },
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
    { href: "#kiso", label: "1｜片付けで出てきた古い家電をどう見るか" },
    { href: "#merit", label: "2｜安全確認の3つの観点" },
    { href: "#houshin", label: "3｜手放し方の全体像" },
    { href: "#steps", label: "4｜見直しから処分までの5ステップ" },
    { href: "#ng", label: "5｜やってはいけないNG行動4つ" },
    { href: "#gyousha", label: "6｜業者に頼んだほうがよいサイン" },
    { href: "#faq", label: "7｜よくある質問" },
    { href: "#related", label: "8｜関連記事" },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Breadcrumb items={[{ label: "古い家電の安全確認と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          古い家電の安全確認と処分｜長く使った家電を見直すポイント
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年8月19日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          押し入れの奥から出てきた古い扇風機、物置に立てかけたままの電気ストーブ、和室の隅に残された旧型のテレビ。片付けを進めると、何年も動かしていない家電が次々と出てきます。「まだ動くから」と元の場所に戻してしまうと、また同じ場所で数年が過ぎることになります。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、片付けの過程で出てきた家電・長年使い続けている家電を見直すために、電源コードや動作の様子といった安全確認のチェック項目、取扱説明書やメーカー公式で確認しておきたい情報、そして手放すと決めたあとのルートの分け方までを、順を追って整理します。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>年数だけで判断せず、電源コード・動作の様子・本体の状態という安全確認の観点で見る</li>
          <li>異音・異臭・過度な発熱がある場合は使用を控え、型番を控えてメーカーや販売店に相談する</li>
          <li>型番をもとに、メーカー公式と国の製品安全に関する公表窓口でリコール情報を確認する</li>
          <li>手放すルートは品目で分かれる。壊れていても決められた回収の仕組みに従う品目がある</li>
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

      <H2 id="kiso" num="1">片付けで出てきた古い家電をどう見るか</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        まず、片付けの過程で出てくる家電がどういう存在なのか、そしてどこを見て判断すればよいのかを整理します。
      </p>
      <div className="space-y-6 mb-4">
        {basics.map((c) => (
          <section key={c.title}>
            <h3 className="font-bold text-text-primary mb-2">{c.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.body}</p>
          </section>
        ))}
      </div>

      <H2 id="merit" num="2">安全確認の3つの観点</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        古い家電を動かす前と動かしたときに、確認しておきたい観点は大きく3つです。すべてを専門的に点検する必要はなく、目と耳と手で分かる範囲を丁寧に見ることが出発点になります。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mt-6 mb-4">
        なお、長期間にわたって使用される製品については、経年劣化による事故を防ぐ目的で、所有者の登録や点検を促す仕組みが法律に基づいて設けられています。ただし対象となる品目や手続きの内容は制度の運用によって異なるため、お手元の製品が該当するかどうかは、取扱説明書の記載やメーカーの公式案内で型番をもとに確認してください。あわせて、メーカー公式サイトのリコール情報のページと、国が製品の安全に関する情報を公表している窓口で、型番による検索をしておくと安心です。
      </p>

      <H2 id="houshin" num="3">手放し方の全体像</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        「使わない」と決まった家電の手放し方は、品目によってルートが分かれます。テレビ・エアコン・冷蔵庫・洗濯機など、法律で回収と再商品化の仕組みが定められている品目は、粗大ごみとは別の手続きになります。対象や手続きの詳細は<Link href="/kaden-recycle-shobun/" className="text-primary underline underline-offset-2">家電リサイクル法の対象と処分</Link>で整理しています。冷蔵庫や洗濯機の水抜き・霜取りといった事前準備は<Link href="/reizouko-sentakuki-shobun-junbi/" className="text-primary underline underline-offset-2">冷蔵庫・洗濯機の処分準備</Link>、壁付けのエアコンは取り外しの手配が先に必要になるため<Link href="/aircon-torihazushi-shobun/" className="text-primary underline underline-offset-2">エアコンの取り外しと処分</Link>を参考にしてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        それ以外の小型・中型の家電は、自治体の区分に従います。公共施設や店舗に小型家電の回収ボックスを設置している自治体もありますが、実施状況・対象品目・大きさの条件は地域によって異なります。必ずお住まいの自治体の公式案内で確認してから持ち込んでください。粗大ごみとして出す場合は、受け付け方法や収集日、シールの購入場所なども自治体ごとに決まっているため、申し込みの手順を先に確認しておくと当日に慌てずに済みます。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        個人の情報が記録されている機器は、手放す前にデータの扱いを片付けておく必要があります。手順は<Link href="/pc-sumaho-data-shoukyo/" className="text-primary underline underline-offset-2">パソコン・スマホのデータ消去</Link>で解説しています。まだ動いて状態がよい家電は、リサイクルショップの買取やフリマアプリ、知人への譲渡という選択肢もあります。付属品や説明書が揃っているか、動作を確認できるかで扱いが変わるため、出す前に手元の状態を整理しておきましょう。家電以外も含めた手放し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>をご覧ください。
      </p>

      <H2 id="steps" num="4">見直しから処分までの5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        実際の進め方は、集める→型番を控える→情報を確認する→使うかどうかを決める→ルートごとに分ける、の5ステップです。
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
      <p className="text-[15px] leading-8 text-text-secondary mt-6 mb-4">
        「まだ動くから」という理由は、手放す判断を先送りにする最も強い言葉です。動くこと自体は事実でも、使う予定があることとは別です。使う予定を具体的に言えないまま置かれている家電は、置き場所という資源を消費し続けています。逆に、使う予定を言えるなら堂々と残してよく、そのときは状態の確認と置き場所の見直しをセットで行いましょう。物置ごと整理する場合は、家電だけを先に抜き出すのではなく、中身をいったん外に出して全体量を把握してから仕分けると判断が早くなります。
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

      <H2 id="gyousha" num="6">業者に頼んだほうがよいサイン</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家電の見直しそのものは自力でできますが、量が多い場合や搬出が難しい場合は、片付け・不用品回収業者の力を借りるのが現実的です。対応できる業者は<Link href="/area/yokohama/" className="text-primary underline underline-offset-2">横浜の片付け業者おすすめ</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する際は、廃棄物の扱いに必要な許可や資格を確認できる業者を選び、作業前の見積もりで総額を確定させましょう。依頼先は<Link href="/review/kurashi-market/" className="text-primary underline underline-offset-2">くらしのマーケット</Link>や<Link href="/review/mitsumoa/" className="text-primary underline underline-offset-2">ミツモア</Link>で内容や口コミを比較して選ぶ方法が便利です。自治体回収との使い分けは<Link href="/jichitai-gyousha-tsukaiwake/" className="text-primary underline underline-offset-2">自治体と業者の使い分け</Link>の記事で解説しています。
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
        本記事は一般的な知識の提供を目的としたものです。製品ごとの安全性や点検の要否はメーカーの案内・取扱説明書の記載が優先されるため、気になる点がある場合は型番を控えたうえでメーカーの相談窓口や購入した販売店にご確認ください。ごみの分別区分・回収の対象品目・粗大ごみの基準・手数料は自治体により異なるため、必ずお住まいの自治体の案内をご確認ください。業者へ依頼する際の料金は物量・作業内容により異なるため、見積もりでご確認ください。不用品の処分を伴う依頼では、廃棄物の処理に必要な許可を確認できる業者をお選びください。
      </p>
    </article>
  );
}
