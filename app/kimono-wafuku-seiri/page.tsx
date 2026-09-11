import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://katazuke-rescue.com";
const PATH = "/kimono-wafuku-seiri/";
const TITLE = "着物・和服の整理と処分｜箪笥に眠る着物を残す基準と譲る・売る・手放すルートの考え方";
const DESC =
  "自分の若い頃の着物、親や祖父母から受け継いだ着物、成人式や結婚式で一度だけ着た振袖や留袖、たとう紙に包まれたまま何十年も開けていない箪笥の引き出し。着物は、高価だったという記憶と、家族の思いがこもっているという事情から、洋服よりもはるかに手放しにくい品目です。着物がたまる構造、状態と着る予定で残す物を決める決めごと、全部出して状態を確かめ4つに分ける手順、譲る・売る・作り替える・寄付する・自治体の区分で出すというルートの考え方、残す着物の保管と桐箪笥の扱いまでを解説します。";
const PUBLISHED = "2026-09-09";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}${PATH}`, type: "article" },
};

const basics = [
  {
    title: "「高価だった」という記憶が、状態や着る予定より先に立つ",
    body: "着物は、仕立てたときや買ったときに、洋服とは桁の違う出費をしていることが多く、その記憶が「捨てるなんてもったいない」という気持ちを強くします。しかし、買ったときの価値と、今の状態や今後着る予定は別の話です。何十年も箪笥に入ったままの着物は、たとう紙の中で変色やシミ、カビ、虫食いが進んでいることもあり、開けてみないと状態は分かりません。「高価だった」という記憶だけで残し続けると、状態が悪くなった着物が箪笥を占め続け、残したい着物の保管場所まで奪うことになります。",
  },
  {
    title: "親や祖父母の思いがこもっているため、自分一人では決められない",
    body: "着物の多くは、親や祖父母が仕立ててくれた物、嫁入りのときに持たされた物、家族から受け継いだ物です。「母が私のために作ってくれた」「祖母が大切にしていた」という背景があると、着る予定がなくても、手放すことが家族の思いを否定するように感じられます。また、自分の着物であっても「これは母が選んだ物だから、勝手に処分してよいのか」と迷い、生前であれば親に確認したい、亡くなっていれば兄弟姉妹に相談したい、という気持ちが決断を先延ばしにします。着物は、本人一人の持ち物という感覚が薄く、家の物として扱われるために、整理が進みにくい品目です。",
  },
  {
    title: "着る機会がほとんどなく、「いつか着る」の期限が来ない",
    body: "日常で着物を着る場面は、多くの家庭ではほとんどありません。結婚式や法事、子どもや孫の行事など、着る可能性がある場面は思い浮かんでも、実際にはその場で洋服を選ぶことが多く、「いつか着る」の「いつか」は何年も来ません。さらに、着物は一人で着るのが難しい、着付けや手入れに手間がかかる、小物がそろっていないと着られない、といった事情があり、「着ようと思えば着られる」状態を保つこと自体が負担になります。着る機会がないまま、着物は「着るための物」から「保管するための物」に変わり、それでも手放す理由が見つからずに残り続けます。",
  },
];

const merits = [
  {
    title: "決めごと1：「状態」と「着る予定」の二つで残す物を決め、「高価だった」は基準に入れない",
    body: "残す着物を決める軸は、「今の状態」と「今後の着る予定」の二つです。状態は、広げて光の下で見て、変色、シミ、カビ、虫食い、においがないかを確かめます。着る予定は、「自分が着る」「家族や親族に着せる」「特定の行事で着る」のように、着る人と場面が具体的に思い浮かぶかどうかで判断します。買ったときの価格や、仕立てたときの事情は、残す基準に入れません。価格の記憶は手放しにくさを増やすだけで、今後着るかどうかとは関係がないためです。この二つの軸で見ると、「状態がよく、着る予定がある物」は残し、それ以外は譲る・売る・作り替える・手放す候補に入ります。",
  },
  {
    title: "決めごと2：家族から受け継いだ着物は、「誰が決めるか」を先に決める",
    body: "親や祖父母の着物、家の着物として受け継いだ物は、自分一人で決めると、あとで兄弟姉妹や親族から「なぜ相談しなかったのか」と言われることがあります。整理を始める前に、「誰が決めるか」を家族で共有しておきます。親が元気なうちであれば、親と一緒に見て、親が残したい物と譲りたい相手を聞きます。親が亡くなっている場合は、兄弟姉妹に整理を始めることを伝え、欲しい物があれば先に選んでもらう機会を作ります。全員で一つひとつ決める必要はなく、「先に選ぶ機会を設けた上で、残りはこの人が決める」と合意しておけば、あとの整理が止まりません。形見分けの進め方は、関連記事で扱っています。",
  },
  {
    title: "決めごと3：手放す着物の「ルート」を種類と状態で先に決めておく",
    body: "着物を手放すルートは一つではありません。着る人に譲る、買取に出す、小物や日用品に作り替える、着物を必要としている団体や施設に寄付する、自治体の区分で出す、といった選択肢があり、着物の種類と状態によって向き不向きがあります。整理を始める前に、「状態がよい物は譲る・売るを先に考える」「シミや傷みがある物は作り替えるか手放す」「小物や帯は着物とセットで扱う」というように、種類と状態ごとの行き先を決めておくと、一枚ごとに迷わずに済みます。買取の可否や条件は事業者によって異なり、金額を前提に残す・残さないを決めると整理が止まるため、「売れなければ次のルートに回す」と先に決めておくことが大切です。",
  },
];

const steps = [
  {
    title: "箪笥や衣装箱の着物と小物を全部出し、種類ごとに並べる",
    body: "箪笥の引き出し、衣装箱、押し入れの奥、実家に置いたままの物など、着物がある場所をすべて確認し、たとう紙ごと一か所に出します。出したら、たとう紙を開けて一枚ずつ広げ、種類ごとに並べます。振袖、留袖、訪問着、小紋、紬、喪服、浴衣、といった着物の種類と、帯、長襦袢、帯締め、帯揚げ、草履、バッグ、肌着や足袋などの小物を分けて並べると、何がどれだけあるかが見えます。全部出す作業は体力と時間を使うため、一日で終えようとせず、「今日はこの箪笥の分だけ」と量を区切ります。出した着物は、床に直接置かず、シーツや大きな布を敷いた上に並べると、ほこりや汚れを防げます。",
  },
  {
    title: "一枚ずつ光の下で状態を確かめ、「残す」「譲る・売る」「作り替える」「手放す」の4つに分ける",
    body: "並べた着物を、一枚ずつ明るい場所で広げて、変色、シミ、カビ、虫食い、においを確かめます。状態がよく、自分や家族が着る予定が具体的に思い浮かぶ物は「残す」に入れます。状態はよいが着る予定がない物は「譲る・売る」に入れます。シミや傷みがあって着物としては着られないが、生地を活かせそうな物は「作り替える」に入れます。状態が悪く、譲る・売る・作り替えるのいずれにも向かない物は「手放す」に入れます。迷った物は「保留」の山を一つだけ作り、その日の終わりに数を数えて、保留が多い場合は「着る人と場面が思い浮かぶか」の基準でもう一度見直します。小物は、着物とセットで着るために必要な物を「残す」に、それ以外を着物と同じ基準で分けます。",
  },
  {
    title: "「譲る・売る」に入れた物は、着る人に声をかけ、買取の可否と条件を確認する",
    body: "「譲る・売る」に入れた着物は、まず着る可能性のある家族や親族、知人に声をかけます。譲るときは、着物の種類、大きさの目安、状態を伝え、写真を送ると相手が判断しやすくなります。譲る相手がいない物は、買取に出すことを検討します。着物の買取の可否、査定の基準、対象となる種類や状態、持ち込みと出張と宅配のいずれに対応しているかは事業者によって異なりますので、事前に確認します。証紙や仕立てのときの控えがあれば、一緒に保管しておきます。本記事では買取の金額を示していません。「売れるかもしれないから残す」という保留が増えないよう、買取に出して引き取られなかった場合は次のルートに回す、と先に決めておきます。",
  },
  {
    title: "「作り替える」「手放す」に入れた物は、寄付や作り替えの先を探し、自治体の区分で出す",
    body: "「作り替える」に入れた着物は、自分で小物や日用品に仕立て直す、仕立て直しを行っている店に相談する、といった方法があります。着物を必要としている団体や施設への寄付は、受け入れの条件や種類が団体によって異なりますので、送る前に確認します。「手放す」に入れた着物や小物は、自治体の区分に従って出します。着物や帯は、素材や大きさによって、衣類の区分になる場合、資源として回収される場合、可燃ごみの区分になる場合があり、扱いは自治体によって異なります。草履やバッグ、金属の付いた小物も区分が分かれることがあります。お住まいの市区町村の分別案内で確認してから出してください。たとう紙や桐の箱、防虫剤の残りも、それぞれの区分を確認します。",
  },
  {
    title: "残す着物を手入れして保管し直し、空いた箪笥の扱いを決める",
    body: "「残す」に入れた着物は、風を通してから、新しいたとう紙に包み直し、湿気の少ない場所に保管します。防虫剤や乾燥剤を使う場合は、製品の案内に従って使います。年に一度程度、たとう紙を開けて風を通し、状態を確かめる予定を決めておくと、次に整理するときに状態の悪化で手放す物が増えることを防げます。残す着物が減って箪笥に空きが出た場合は、箪笥を別の用途に使うか、箪笥そのものを手放すかを決めます。桐箪笥は大型家具として扱われることが多く、運び出しや処分の方法は自治体の粗大ごみの区分や業者の対応によって異なります。大型家具の搬出と処分の考え方は、関連記事で扱っています。",
  },
];

const ngActions = [
  {
    title: "たとう紙を開けずに、「高価だったから」という記憶だけで残し続ける",
    body: "何十年も開けていない着物は、変色やシミ、カビ、虫食いが進んでいることがあります。開けて状態を確かめずに残し続けると、状態が悪くなった着物が箪笥を占め、残したい着物の保管場所まで奪います。残す基準は「今の状態」と「今後着る予定」の二つにし、買ったときの価格は基準に入れないでください。",
  },
  {
    title: "家族から受け継いだ着物を、兄弟姉妹や親族に伝えずに一人で処分する",
    body: "親や祖父母の着物は、家の物として扱われることが多く、一人で決めると、あとで「なぜ相談しなかったのか」と言われることがあります。整理を始める前に家族に伝え、欲しい物を先に選ぶ機会を作ってから、残りを決める人を合意しておいてください。全員で一枚ずつ決める必要はありませんが、機会を設けたかどうかが、あとの関係を左右します。",
  },
  {
    title: "買取の金額を前提に残す・残さないを決め、売れなければまた箪笥に戻す",
    body: "着物の買取の可否や条件は、種類、状態、事業者によって異なり、思っていた通りにならないこともあります。金額を前提にすると、「売れるかもしれないから残す」という保留が増え、整理が止まります。「売れなければ、譲る・作り替える・手放すの次のルートに回す」と先に決めてから、買取に出してください。",
  },
  {
    title: "着物や小物を、自治体の区分を確認せずにまとめて出す",
    body: "着物や帯、草履、バッグ、金属の付いた小物、たとう紙、桐の箱、防虫剤の残りは、素材や大きさによって分別区分が分かれ、扱いは自治体によって異なります。まとめて出す前に、お住まいの市区町村の分別案内で確認してください。分からない場合は、自治体の廃棄物担当の窓口に問い合わせると区分を案内してもらえます。",
  },
];

const judgeSigns = [
  "実家や故人の家に、箪笥ごと大量の着物が残っていて、全部出して状態を確かめる作業を一人では進められない",
  "着物だけでなく家全体に物が多く、着物の整理にたどり着く前に通路や作業場所の確保が必要",
  "空き家の売却や退去、相続の手続きなどの期限があり、着物を含めた家財を短期間で減らす必要がある",
  "桐箪笥や衣装箱など、大きくて重い家具を自分では運び出せない",
  "体調や時間の都合で、状態の確認から出し方の確認までを自分で進める余裕がない",
];

const faqs = [
  {
    q: "親の着物が大量に残っています。全部残すべきですか？",
    a: "全部を残す必要はありません。たとう紙を開けて一枚ずつ状態を確かめ、「今の状態」と「今後着る予定」の二つで残す物を決めることをおすすめします。親が元気であれば、一緒に見て残したい物と譲りたい相手を聞き、亡くなっている場合は兄弟姉妹に整理を始めることを伝えて、欲しい物を先に選ぶ機会を作ります。そのうえで、残りを譲る・売る・作り替える・手放すに分けると、思いを尊重しながら整理が進みます。どうしても手放しにくい物は、写真に撮って残す方法もあります。",
  },
  {
    q: "着物は売れますか？",
    a: "着物の買取の可否や査定の基準、対象となる種類や状態、持ち込み・出張・宅配のいずれに対応しているかは、事業者によって異なります。本記事では買取の金額を示していません。証紙や仕立てのときの控えがあれば一緒に保管し、事前に事業者に条件を確認してください。「売れるかもしれないから残す」という保留が増えないよう、引き取られなかった場合は譲る・作り替える・手放すの次のルートに回す、と先に決めておくことをおすすめします。片付けと買取を組み合わせる考え方は、片付けと買取の併用術の記事で扱っています。",
  },
  {
    q: "シミやカビがある着物は、どうすればよいですか？",
    a: "シミやカビがあって着物としては着られない物でも、生地の状態によっては小物や日用品に作り替える方法があります。自分で仕立て直す、仕立て直しを行っている店に相談する、といった選択肢があります。作り替えにも向かない場合は、自治体の区分に従って出します。着物や帯の分別区分は、素材や大きさによって衣類、資源、可燃ごみのいずれかに分かれ、扱いは自治体によって異なりますので、お住まいの市区町村の分別案内で確認してください。カビが広がっている場合は、他の衣類に移らないよう、別の袋に分けて扱います。",
  },
  {
    q: "着物を減らして空いた桐箪笥は、どう扱えばよいですか？",
    a: "箪笥を別の用途に使うか、手放すかを決めます。手放す場合、桐箪笥は大型家具として扱われることが多く、自治体の粗大ごみとして出す方法、業者に回収を依頼する方法、状態がよければ買取や譲渡という方法があります。粗大ごみの区分や申し込みの方法は自治体によって異なり、買取の可否や条件は事業者によって異なります。重くて運び出せない場合は、無理に自分で動かさず、業者への依頼を検討してください。大型家具の搬出と処分の選択肢は、大型家具の処分方法の記事で扱っています。",
  },
];

const related = [
  { href: "/irui-seiri/", label: "服の断捨離のコツ", desc: "増えすぎた衣類を仕分ける基準と処分方法" },
  { href: "/ihin-katamiwake-susumekata/", label: "遺品整理と形見分けの進め方", desc: "時期・順番・渡し方の考え方" },
  { href: "/jikka-katazuke/", label: "実家の片付けの進め方", desc: "親と揉めない段取りと始めるタイミング" },
  { href: "/oogata-kagu-shobun/", label: "大型家具の処分方法", desc: "運べないタンス・ベッド・ソファの搬出と選択肢" },
  { href: "/recycle-shop-kaitori-heiyou/", label: "片付けと買取の併用術", desc: "買取サービスで負担を減らす考え方" },
  { href: "/seizen-seiri/", label: "生前整理のやり方", desc: "元気なうちに持ち物を整理する手順" },
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
    { "@type": "ListItem", position: 2, name: "着物・和服の整理と処分" },
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
    { href: "#kiso", label: "1｜着物・和服が手放しにくい3つの理由" },
    { href: "#merit", label: "2｜始める前に決めておきたい3つのこと" },
    { href: "#houshin", label: "3｜「状態と着る予定」で残し、ルートを種類と状態で決める" },
    { href: "#steps", label: "4｜箪笥の着物を整理して手放す5ステップ" },
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

      <Breadcrumb items={[{ label: "着物・和服の整理と処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">片付けの基礎知識</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          着物・和服の整理と処分｜箪笥に眠る着物を残す基準と譲る・売る・手放すルートの考え方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={PUBLISHED}>公開：2026年9月9日</time>
          <span className="w-px h-3 bg-border" />
          <span>片付けレスキュー編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          自分の若い頃に仕立てた着物、成人式や結婚式で一度だけ袖を通した振袖や留袖、親や祖父母から受け継いだ着物、嫁入りのときに持たされた一式、たとう紙に包まれたまま何十年も開けていない箪笥の引き出し。着物は、洋服とは桁の違う出費をした記憶と、家族の思いがこもっているという事情から、衣類の中でも特に手放しにくい品目です。着る機会はほとんどないのに、「高価だったから」「母が作ってくれた物だから」という理由で箪笥を占め続け、実家の片付けや遺品整理の場面で、最後まで残る物の代表格になっています。
        </p>
        <p className="mt-4 text-[15px] leading-8 text-text-secondary">
          この記事では、着物が手放しにくい構造を「高価だったという記憶」「家族の思い」「着る機会のなさ」の三つに分けて整理し、「今の状態」と「今後着る予定」の二つで残す物を決める決めごと、家族から受け継いだ着物は誰が決めるかを先に合意する考え方、手放すルートを種類と状態で先に決めておく方法、箪笥から全部出して状態を確かめ4つに分け、譲る・売る・作り替える・寄付する・自治体の区分で出す手順、残す着物の保管と空いた箪笥の扱いを順に解説します。洋服全般の仕分け基準や、形見分けの進め方そのものは別の記事で扱っており、この記事は着物と和装小物に絞っています。
        </p>
      </header>

      {/* 結論先出し */}
      <div className="my-8 rounded-2xl border-2 border-primary bg-blue-50 p-5 sm:p-6">
        <p className="font-bold text-primary mb-2">この記事の結論</p>
        <ul className="space-y-2 text-[15px] leading-8 text-text-secondary list-disc pl-5">
          <li>残す基準は「今の状態」と「今後着る予定」の二つ。「高価だった」という記憶は基準に入れない</li>
          <li>家族から受け継いだ着物は、欲しい物を先に選ぶ機会を作り、残りを誰が決めるかを合意してから整理する</li>
          <li>たとう紙を開けて一枚ずつ光の下で状態を確かめ、「残す」「譲る・売る」「作り替える」「手放す」の4つに分ける</li>
          <li>買取の可否や条件は事業者により異なる。金額を前提にせず「売れなければ次のルートへ」と先に決める</li>
          <li>着物・帯・小物・たとう紙・桐箪笥の分別区分は自治体により異なる。分別案内で確認してから出す</li>
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

      <H2 id="kiso" num="1">着物・和服が手放しにくい3つの理由</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        高価だったという記憶、家族の思い、着る機会のなさ。三つの事情が重なって、着物は箪笥の中に残り続けます。
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
        残す基準、決める人、手放すルート。この三つを先に決めておくと、一枚ごとの判断が止まりません。
      </p>
      <div className="space-y-4 mb-4">
        {merits.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{m.body}</p>
          </div>
        ))}
      </div>

      <H2 id="houshin" num="3">「状態と着る予定」で残し、ルートを種類と状態で決める</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        着物の整理は、「今の状態」と「今後着る予定」という二つの軸で進めると、迷う時間が大きく減ります。状態は、たとう紙を開けて広げ、明るい場所で変色、シミ、カビ、虫食い、においを確かめます。着る予定は、着る人と場面が具体的に思い浮かぶかどうかで判断します。「自分が親族の結婚式で着る」「娘や孫の成人式に着せる」「喪服は法事のために残す」のように、人と場面が言葉にできる物は残す候補です。「いつか着るかもしれない」「誰かが着るかもしれない」のように、人も場面も決まっていない物は、譲る・売る・作り替える・手放すの候補に入ります。買ったときの価格や、仕立てたときの事情は、残す基準に入れません。価格の記憶は手放しにくさを増やすだけで、今後着るかどうかとは関係がないためです。洋服全般の仕分け基準は<Link href="/irui-seiri/" className="text-primary underline underline-offset-2">服の断捨離のコツ</Link>で扱っていますが、着物は「着る人と場面」をより具体的に問うことが、整理を進めるコツになります。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        家族から受け継いだ着物は、整理を始める前に「誰が決めるか」を家族で共有します。親が元気なうちであれば、親と一緒に見て、残したい物と譲りたい相手を聞きます。親の持ち物を親と一緒に整理する進め方は<Link href="/jikka-katazuke/" className="text-primary underline underline-offset-2">実家の片付けの進め方</Link>、親が手放すことに抵抗を示す場合の声のかけ方は<Link href="/oya-settoku-katazuke/" className="text-primary underline underline-offset-2">物を捨てない親への片付けの声かけ</Link>、元気なうちに本人が整理を進める考え方は<Link href="/seizen-seiri/" className="text-primary underline underline-offset-2">生前整理のやり方</Link>で扱っています。親が亡くなっている場合は、兄弟姉妹や親族に整理を始めることを伝え、欲しい物を先に選ぶ機会を作ります。着物は形見分けの品として選ばれることが多く、渡す時期や順番、手入れの考え方は<Link href="/ihin-katamiwake-susumekata/" className="text-primary underline underline-offset-2">遺品整理と形見分けの進め方</Link>、遺品整理全体の進め方は<Link href="/ihinseiri-jibunde/" className="text-primary underline underline-offset-2">遺品整理の進め方</Link>で解説しています。どうしても手放しにくい着物は、広げた状態と柄の細部を写真に撮って残す方法もあります。思い出の品を写真で残す考え方は<Link href="/shashin-album-seiri/" className="text-primary underline underline-offset-2">写真・アルバムの整理とデジタル化</Link>を参考にしてください。
      </p>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        手放すルートは、種類と状態で先に決めておきます。状態がよく着る予定がない物は、まず着る人に譲ることを考え、譲る相手がいなければ買取を検討します。着物の買取の可否、査定の基準、対象となる種類や状態、持ち込み・出張・宅配のいずれに対応しているかは事業者によって異なりますので、この記事では特定の金額を示していません。買取を片付けに組み込む考え方は<Link href="/recycle-shop-kaitori-heiyou/" className="text-primary underline underline-offset-2">片付けと買取の併用術</Link>、衣類を宅配で送る手段の流れと向き不向きは<Link href="/irui-takuhai-kaitori/" className="text-primary underline underline-offset-2">衣類の宅配買取と処分の使い分け</Link>で扱っています。シミや傷みがある物は、小物や日用品に作り替える、着物を必要としている団体や施設に寄付する、という選択肢があり、受け入れの条件は先方によって異なります。いずれにも向かない物は、自治体の区分で出します。「売れるかもしれないから残す」という保留を増やさないために、「売れなければ次のルートに回す」と先に決めておくことが、着物の整理を止めないコツです。
      </p>

      <H2 id="steps" num="4">箪笥の着物を整理して手放す5ステップ</H2>
      <p className="text-[15px] leading-8 text-text-secondary mb-6">
        全部出して種類ごとに並べる→状態を確かめて4つに分ける→譲る相手と買取の条件を確認する→作り替え・寄付・自治体の区分で出す→残す物を保管し直し箪笥の扱いを決める。この順で進めます。
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
        <h3 className="font-bold text-text-primary mb-2">着物・帯・和装小物・たとう紙・桐箪笥の分別区分は、自治体の案内でご確認ください</h3>
        <p className="text-[15px] leading-8 text-text-secondary">
          着物や帯は、素材や大きさによって、衣類の区分になる場合、資源として回収される場合、可燃ごみの区分になる場合があり、扱いは自治体によって異なります。草履やバッグ、金属の付いた帯留めや髪飾り、たとう紙、桐の箱、防虫剤や乾燥剤の残りも、それぞれ区分が分かれることがあります。桐箪笥や衣装箱は、大型家具として粗大ごみの扱いになることが多く、申し込みの方法や区分も自治体によって異なります。本記事は一般的な進め方の整理にとどめており、特定の出し方を示すものではありません。出す前に、必ずお住まいの市区町村の公式案内で分別区分と出し方をご確認ください。粗大ごみの申し込みの一般的な流れは<Link href="/sodaigomi-moushikomi-nagare/" className="text-primary underline underline-offset-2">粗大ごみ収集の申し込みの流れ</Link>、大型家具の搬出と処分の選択肢は<Link href="/oogata-kagu-shobun/" className="text-primary underline underline-offset-2">大型家具の処分方法</Link>、手放す物全体の出し方の全体像は<Link href="/fuyohin-shobun-route/" className="text-primary underline underline-offset-2">不用品の処分ルート</Link>で扱っています。
        </p>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary mb-4">
        残す着物は、風を通してから新しいたとう紙に包み直し、湿気の少ない場所に保管します。押し入れやクローゼットの湿気と動線の考え方は<Link href="/oshiire-closet-seiri/" className="text-primary underline underline-offset-2">押し入れ・クローゼットの整理手順</Link>、カビが出ている場合の扱いは<Link href="/kabi-seisou/" className="text-primary underline underline-offset-2">部屋のカビ掃除のやり方</Link>で扱っています。着物の整理は、実家の食器棚や仏具の整理と同じように、「家の物」として扱われる品目の整理です。扱いに迷う物の考え方は<Link href="/jikka-shokkidana-butsugu/" className="text-primary underline underline-offset-2">実家の食器棚と仏具の整理</Link>も参考になります。整理を始める前に、着物の種類と枚数、小物の内訳、状態の目安を書き出しておくと、家族で分担するときや業者に相談するときに話が早く進みます。書き出し方は<Link href="/fuyohin-list-tsukurikata/" className="text-primary underline underline-offset-2">不用品リストの作り方</Link>を参考にしてください。空き家に箪笥ごと残っている場合の進め方は<Link href="/akiya-katazuke/" className="text-primary underline underline-offset-2">空き家の片付けの進め方</Link>、相続した家の場合は<Link href="/souzoku-ie-katazuke/" className="text-primary underline underline-offset-2">相続した家の片付け</Link>で解説しています。
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
        着物の整理そのものは自分で進められることが多い作業ですが、次のような状況では、片付け業者への相談を検討してよい場面です。対応できる業者は<Link href="/area/tokyo/" className="text-primary underline underline-offset-2">東京の片付け業者</Link>や<Link href="/area/osaka/" className="text-primary underline underline-offset-2">大阪の片付け業者</Link>などエリア別の比較記事から探せます。
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
        業者に依頼する場合も、残す着物と譲る着物は自分や家族で先に取り分けておく必要があります。着物は家族の思いがこもった品目のため、「箪笥の中の着物はまとめて残しておいてほしい」と伝え、判断は作業後に自分で行う形にすると安心です。買取に対応している業者に依頼する場合は、着物が査定の対象になるか、条件はどうかをあらかじめ確認します。依頼先を選ぶ際は、家庭から出る不用品の収集運搬に必要な許可の体制を確認できること、書面で見積もりを出すこと、作業の範囲が明記されていることを基準にしてください。確認の仕方は<Link href="/gyousha-kyoka-kakunin/" className="text-primary underline underline-offset-2">片付け業者の許可・資格の確認方法</Link>、見積書の見方は<Link href="/mitsumorisho-mikata/" className="text-primary underline underline-offset-2">見積書の見方</Link>、当日の流れは<Link href="/sagyou-toujitsu-tachiai/" className="text-primary underline underline-offset-2">作業当日の立ち会いの流れ</Link>でまとめています。料金は物量・作業内容・地域・事業者により異なりますので、同じ条件で複数社に依頼して比べましょう。
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
        本記事は一般的な知識の提供を目的としたものです。着物・帯・和装小物・たとう紙・桐箪笥などの分別区分や出し方は自治体により異なりますので、必ずお住まいの市区町村の公式案内をご確認ください。買取や査定の可否・基準・条件は店舗や事業者により異なりますので、事前にご確認ください。寄付や仕立て直しの受け入れ条件は団体や店舗により異なります。相続に関わる着物の扱いについて判断に迷う場合は、専門家にご相談ください。事業者に依頼する場合の料金および契約の条件は、物量・作業内容・地域・事業者により異なりますので、見積もりと契約書面でご確認ください。廃棄物の収集運搬や古物の取り扱いに必要な許可・届出の要否や範囲については、事業者および自治体の案内でご確認ください。契約や請求をめぐって不安や困りごとがあるときは、消費者ホットライン188に電話すると身近な相談窓口を案内してもらえます。
      </p>
    </article>
  );
}
