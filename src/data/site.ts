export const salon = {
  name: "GINS",
  fullName: "GINS 金倪斯髮廊｜韓國認證色彩鑑定專門髮廊",
  tagline: "以霧感髮色、韓系線條與個人色彩鑑定，整理出更貼近日常氣質的髮型方向。",
  phone: "(04) 2224-6589",
  address: "台中市民族路195號",
  hours: "預約制服務，營業時間依官方 LINE 公告為準",
  instagramUrl: "https://www.instagram.com/gins_salon_/",
  lineUrl: "https://line.me/R/ti/p/@819rltim",
  menuLineUrl: "https://line.me/R/ti/p/@507lmjmu",
  googleMapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E4%B8%AD%E5%B8%82%E6%B0%91%E6%97%8F%E8%B7%AF195%E8%99%9F",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=%E5%8F%B0%E4%B8%AD%E5%B8%82%E6%B0%91%E6%97%8F%E8%B7%AF195%E8%99%9F&output=embed"
};

export const navigation = [
  { number: "01", english: "Services", label: "服務", href: "#services" },
  { number: "02", english: "Treatment", label: "護髮", href: "#treatments" },
  { number: "03", english: "Works", label: "作品", href: "#portfolio" },
  { number: "04", english: "Stylists", label: "設計師", href: "#stylists" },
  { number: "05", english: "Menu", label: "價目", href: "#pricing" }
];

export const highlights = [
  { value: "Korea Color", label: "韓國認證色彩鑑定" },
  { value: "9 Stylists", label: "多風格設計師團隊" },
  { value: "MILBON / YUNARO", label: "沙龍級修護系統" }
];

export const services = [
  {
    id: "01",
    title: "Signature Cut",
    label: "剪髮",
    summary: "從臉型、髮流與日常整理方式出發，修出更順眼也更好維持的輪廓。"
  },
  {
    id: "02",
    title: "Color Direction",
    label: "染髮",
    summary: "把膚色明度、穿搭氛圍與退色過程一起考量，規劃耐看且有質感的髮色。"
  },
  {
    id: "03",
    title: "Texture Perm",
    label: "燙髮",
    summary: "重視自然彎度、蓬鬆比例與日常整理難度，讓捲度回到生活裡也好看。"
  },
  {
    id: "04",
    title: "Scalp & Hair Care",
    label: "頭皮與護髮",
    summary: "依髮況選擇合適修護系統，改善乾澀、毛躁與染燙後的髮絲空洞感。"
  }
];

export const treatments = [
  {
    eyebrow: "MILBON BLONDE PLUS",
    name: "MILBON BLONDE PLUS 哥德式煥金系列護髮",
    image: "/images/treatment-milbon-product.png",
    summary: "專為漂色、漂淺受損髮設計，以 MSVK 角蛋白複合修護結合月見草油萃取，從髮芯抑制斷裂，讓漂後髮絲維持透亮明度，也更健康有光澤。",
    points: ["MSVK 角蛋白修護", "抑制斷裂養護", "維持漂色明度"]
  },
  {
    eyebrow: "YUNARO Professional Treatment",
    name: "琉光蘊結構重建護髮",
    image: "/images/treatment-yunaro-product.png",
    summary: "新型態『氣球化』修護成分結合多種水解蛋白分子，由內而外重建結構、包覆修護、鎖水鎖色，如同為髮絲穿上一層隱形鎧甲，找回光澤、柔順與強韌兼具的健康髮質。",
    points: ["氣球化修護科技", "重建結構鎖水", "光澤柔順強韌"]
  }
];

export const portfolioItems = [
  {
    title: "復古捲粉棕色",
    category: "Perm",
    tone: "warm",
    image: "/images/works/salon/vintage-curl-rose-brown.jpg",
    description: "大捲度復古紋理線條，粉棕髮色柔霧顯白，隨性中帶一點復古氣息。"
  },
  {
    title: "高層次燙＆法式小顏瀏海",
    category: "Perm",
    tone: "linen",
    image: "/images/works/salon/french-small-face-bangs.png",
    description: "髮尾以自然大弧度做出層次，臉周碎髮修飾下顎線。"
  },
  {
    title: "中長髮大波浪＆短八字瀏海",
    category: "Perm",
    tone: "fog",
    image: "/images/works/salon/medium-wave-short-bangs.png",
    description: "內層 C 卷與 S 卷自然銜接，讓整體線條更柔和、也更修飾臉型。"
  },
  {
    title: "元瑛同款漫畫瀏海＆低層次內彎",
    category: "Cut",
    tone: "pearl",
    image: "/images/works/salon/wonyoung-manga-bangs-clean.png",
    description: "低層次內彎搭配減齡漫畫瀏海，乾淨、有精神，也更顯年輕。"
  },
  {
    title: "長髮大波浪＆可可灰棕",
    category: "Color",
    tone: "mocha",
    image: "/images/works/salon/cocoa-ash-brown-wave-cat.png",
    description: "室內低調有質感的摩卡灰棕，搭配空氣感瀏海更柔和。"
  },
  {
    title: "蛋蛋捲粉棕色",
    category: "Perm",
    tone: "clay",
    image: "/images/works/salon/egg-curl-rose-brown.jpg",
    description: "齊肩蛋捲弧度圓潤好整理，粉棕髮色襯托氣色，日常也能維持澎鬆感。"
  }
];

export const portfolio = portfolioItems;

export type WorkItem = {
  title: string;
  category: string;
  image: string;
  note: string;
};

export type Stylist = {
  role: string;
  name: string;
  image: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  focus: string;
  bio: string;
  tags: string[];
  instagramUrl: string;
  lineUrl: string;
  works?: WorkItem[];
};

const femaleTag = "女髮";
const maleTag = "男髮";
const kidsTag = "兒童剪髮";

export const stylists: Stylist[] = [
  {
    role: "店長",
    name: "Carol 凱洛",
    image: "/images/stylist-carol.jpg",
    imagePosition: "center 30%",
    focus: "韓系大波浪 / 層次線條 / 五角髮根燙 / 質感髮色 / 色彩鑑定",
    bio: "臉型修飾、膚色明度與髮色氛圍，凱洛一次整合到位——不套公式，只為每位客人量身打造獨一無二、最合適的髮型。",
    tags: ["精緻網美", "形象重塑", "輪廓設計", "上班族"],
    instagramUrl: "https://www.instagram.com/carol.gins/",
    lineUrl: "https://line.me/R/ti/p/%40145czzfp",
    works: [
      { title: "大波浪可可棕", category: "Perm", image: "/images/works/carol/carol-soft-brown-wave-back.jpg", note: "自然款燙髮首選，搭配柔棕髮色層次更柔和。" },
      { title: "黑灰色縮毛｜法式小顏瀏海", category: "Perm", image: "/images/works/carol/carol-soft-black-layer.jpg", note: "乾淨低調的深髮質感，自然捲處理，客製化瀏海修飾。" },
      { title: "粉棕色高層次", category: "Perm", image: "/images/works/carol/carol-rose-brown-layer.jpg", note: "帶甜感的顯白髮色。" },
      { title: "莓果色中長髮氣墊", category: "Perm", image: "/images/works/carol/carol-rose-brown-face.jpg", note: "瀏海與臉周線條修飾，中長髮過渡期好整理捲度。" },
      { title: "縮毛矯正＋大波浪", category: "Perm", image: "/images/works/carol/carol-blue-black-side.jpg", note: "自然款燙髮首選，冷調深色與側分輪廓。" },
      { title: "縮毛矯正｜大波浪藍黑色", category: "Perm", image: "/images/works/carol/carol-blue-black-wave.jpg", note: "自然款燙髮首選，光澤感深色長髮。" },
      { title: "氣墊大波浪灰茶棕", category: "Perm", image: "/images/works/carol/carol-chocolate-layer.jpg", note: "自然款線條，溫柔冷棕色調。" },
      { title: "縮毛矯正＋大波浪", category: "Perm", image: "/images/works/carol/carol-dark-brown-layer.jpg", note: "低調耐看的層次大波浪。" },
      { title: "韓系大波浪｜縮毛矯正｜蜜糖茶棕", category: "Perm", image: "/images/works/carol/carol-honey-tea-wave.jpg", note: "自然款燙髮首選，夏季人髮色。" },
      { title: "奶茶波紋", category: "Perm", image: "/images/works/carol/carol-milk-tea-wave.jpg", note: "自然款燙髮首選。" },
      { title: "水霧染灰茶棕", category: "Perm", image: "/images/works/carol/carol-olive-ash-wave.jpg", note: "自然款燙髮首選，夏季人髮色。" },
      { title: "黑灰色縮毛｜法式小顏瀏海", category: "Perm", image: "/images/works/carol/carol-black-ponytail.jpg", note: "冬季人推薦。" },
      { title: "電棒燙｜可可灰棕｜法式小顏瀏海", category: "Perm", image: "/images/works/carol/carol-taupe-brown-face.jpg", note: "秋季人推薦。" }
    ]
  },
  {
    role: "副店長",
    name: "Penny",
    image: "/images/stylist-penny.jpg",
    imagePosition: "center 34%",
    focus: "男性燙染 / 紋理燙 / 萊斯利捲 / 羊毛捲",
    bio: "男性髮型專門，針對各種髮質與頭髮長度問題，打造出屬於個人的獨特髮型風格。",
    tags: ["學生", "上班族", "質感", "大改造"],
    instagramUrl: "https://www.instagram.com/pnnnn.gins/",
    lineUrl: "https://line.me/R/ti/p/@206odxxx",
    works: [
      { title: "飛感紋理燙", category: "Perm", image: "/images/works/penny/penny-feigan-texture-perm.jpg", note: "輕盈蓬鬆、線條感明顯。" },
      { title: "韓系紋理燙", category: "Perm", image: "/images/works/penny/penny-korean-texture-perm.jpg", note: "自然鬆度與乾淨輪廓。" },
      { title: "微分碎蓋", category: "Perm", image: "/images/works/penny/penny-korean-texture-side.jpg", note: "碎分瀏海線條俐落，捲度輕盈自然，維持清爽有型。" },
      { title: "羊毛捲", category: "Perm", image: "/images/works/penny/penny-daily-texture-cut.jpg", note: "捲度均勻蓬鬆，日常只需簡單抓一下就好整理。" },
      { title: "榛果奶棕", category: "Color", image: "/images/works/penny/penny-hazelnut-milk-brown.jpg", note: "柔和男生髮色。" },
      { title: "萊斯利捲", category: "Perm", image: "/images/works/penny/penny-leslie-curl.jpg", note: "捲度明顯但保留鬆感。" },
      { title: "萊斯利奶茶挑染", category: "Color", image: "/images/works/penny/penny-leslie-milk-tea-highlight.jpg", note: "挑染線條增加立體感。" },
      { title: "凌亂紋理", category: "Perm", image: "/images/works/penny/penny-messy-texture.jpg", note: "鬆散自然的紋理感。" },
      { title: "頭頂紋理細節", category: "Perm", image: "/images/works/penny/penny-texture-top-detail.jpg", note: "強調頂部蓬鬆與流向。" },
      { title: "羊毛捲", category: "Perm", image: "/images/works/penny/penny-wool-curl.jpg", note: "捲度蓬鬆、輪廓更明顯。" }
    ]
  },
  {
    role: "設計師",
    name: "SU",
    image: "/images/stylist-su.jpg",
    imagePosition: "center top",
    focus: "女髮染燙 / 韓系層次燙 / 免漂霧感髮色 / 氛圍感小顏瀏海",
    bio: "專門為細軟髮打造韓系自然感，從髮根蓬鬆度、層次線條到霧感髮色都精準拿捏，讓細軟髮也能撐出份量與空氣感，日常整理不費力。",
    tags: ["學生", "韓系", "簡單繞吹", "氛圍感"],
    instagramUrl: "https://www.instagram.com/gins.su/",
    lineUrl: "https://line.me/R/ti/p/@825zgojz",
    works: [
      { title: "韓系電棒燙", category: "Perm", image: "/images/works/su/su-korean-iron-perm-01.jpg", note: "越長越好看的電棒燙，加上無痕髮根燙，整體更蓬鬆有彈性。" },
      { title: "韓系電棒燙", category: "Perm", image: "/images/works/su/su-korean-iron-perm-02.jpg", note: "髮尾電棒燙自然捲度，瀏海線條修飾臉型，日常也好整理。" },
      { title: "氣墊層次燙｜霧感茶棕", category: "Perm", image: "/images/works/su/su-cushion-layer-perm-cold-brown.jpg", note: "層次燙增加蓬鬆感，霧感茶棕髮色更襯膚色，氛圍感十足。" },
      { title: "氣墊層次燙｜燙型不燙捲", category: "Perm", image: "/images/works/su/su-elizabeth-perm-front.jpg", note: "適合喜歡自然線條、捲紋不要太立體的人。維持度因人而異，依整理與保養狀況，約 4–6 個月（含回來修剪層次）。" },
      { title: "氣墊層次燙", category: "Perm", image: "/images/works/su/su-elizabeth-perm-volume.jpg", note: "適合喜歡捲紋多一點的大捲，自然流動的蓬鬆感更有份量。" },
      { title: "水霧染｜青木棕", category: "Color", image: "/images/works/su/su-mist-color-ash-brown.jpg", note: "不容易上色的髮質先進行褪色，再透過染膏上色，製造出霧感與氛圍。" }
    ]
  },
  {
    role: "設計師",
    name: "有澤",
    image: "/images/stylist-arisawa.jpg",
    imagePosition: "center top",
    focus: "女髮染燙 / 韓系大波浪 / 高紋木馬卷 / 層次燙",
    bio: "擅長韓系染燙與高卷紋線條，適合第一次染燙、想要自然好整理，或希望髮型更有韓系氛圍的學生與上班族。",
    tags: ["初次染燙", "韓系", "學生", "上班族", "簡單整理"],
    instagramUrl: "https://www.instagram.com/gins_zee/",
    lineUrl: "https://line.me/R/ti/p/@844atvdd",
    works: [
      { title: "青木灰棕|免漂髮色首選", category: "Color", image: "/images/works/arisawa/arisawa-aoki-ash-brown.jpg", note: "低調灰棕調讓膚色看起來更乾淨，適合想柔和提亮但不漂髮的人。" },
      { title: "復古紅棕|韓系C彎燙|韓系正宗法燙髮|免漂髮色", category: "Perm", image: "/images/works/arisawa/arisawa-vintage-red-brown-c-curl.jpg", note: "復古紅棕搭配韓系 C 彎線條，免漂也能呈現柔和氣色與髮型份量。" },
      { title: "韓系大波浪|喜歡自然首選", category: "Perm", image: "/images/works/arisawa/arisawa-korean-soft-wave.jpg", note: "自然柔和的大波浪，不會過度刻意，適合日常好整理的韓系捲度。" },
      { title: "高卷紋木馬卷|喜歡高卷紋女孩首選", category: "Perm", image: "/images/works/arisawa/arisawa-high-texture-horse-curl.jpg", note: "明顯高卷紋與蓬鬆線條，讓髮尾份量更漂亮，風格感更突出。" },
      { title: "高卷紋大波浪|不想燙太卷喜歡燙高看這個", category: "Perm", image: "/images/works/arisawa/arisawa-high-texture-wave-01.jpg", note: "保留大波浪的柔和感，同時把卷度高度做出來，讓髮型更有存在感。" },
      { title: "高卷紋大波浪|燙完走在路上以為是韓妞", category: "Perm", image: "/images/works/arisawa/arisawa-high-texture-wave-02.jpg", note: "柔霧大波浪搭配自然髮流，走路時線條會更有韓系氛圍。" }
    ]
  },
  {
    role: "設計師",
    name: "10",
    image: "/images/stylist-10.jpg",
    imagePosition: "center 36%",
    focus: "女髮設計 / 染髮 / 自然層次",
    bio: "擅長清爽自然的層次與髮色，適合想要低調、乾淨，但又希望髮型有一點變化的人。",
    tags: [femaleTag, "特殊色漂髮"],
    instagramUrl: "https://www.instagram.com/yilinnnnn__/",
    lineUrl: "https://line.me/R/ti/p/@425kxovt"
  },
  {
    role: "設計師",
    name: "Allen",
    image: "/images/stylist-allen.jpg",
    imagePosition: "center 34%",
    focus: "女髮設計 / 染髮 / 男生剪髮",
    bio: "風格俐落、有型，能處理女髮染剪，也適合需要乾淨輪廓與日常造型感的男生剪髮。",
    tags: [femaleTag, maleTag, "漂髮專門", "男士美式前刺"],
    instagramUrl: "https://www.instagram.com/gins.allen/",
    lineUrl: "https://line.me/R/ti/p/@023wndex",
    works: [
      { title: "奶茶色", category: "Color", image: "/images/works/allen/allen-milk-tea-color.jpg", note: "奶茶棕調柔霧顯白，長髮直順更顯質感光澤。" },
      { title: "灰紫色", category: "Color", image: "/images/works/allen/allen-grey-purple-color.jpg", note: "灰紫特殊色系，冷調氛圍感十足，個性又不失柔和。" },
      { title: "奶茶灰棕", category: "Color", image: "/images/works/allen/allen-milk-tea-ash-brown.jpg", note: "奶茶灰棕消除黃棕感，日常好駕馭又顯白。" },
      { title: "粉橘色", category: "Color", image: "/images/works/allen/allen-peach-orange-color.jpg", note: "粉橘暖調髮色，氣色紅潤有記憶點。" }
    ]
  },
  {
    role: "設計師",
    name: "布丁",
    image: "/images/stylist-pudding.jpg",
    imagePosition: "center 30%",
    focus: "韓系燙髮 / 電棒捲 / 免打理燙 / 質感髮色 / 色彩鑑定",
    bio: "專攻燙髮｜韓系質感髮色，找到最適合你的髮色 x 穿搭色彩。",
    tags: [femaleTag],
    instagramUrl: "https://www.instagram.com/pudding.gins/",
    lineUrl: "https://line.me/R/ti/p/@qru9828n",
    works: [
      { title: "韓系層次燙", category: "Perm", image: "/images/works/pudding/pudding-layered-face-perm-title.jpg", note: "層次剪搭配柔和彎度，修飾臉型並保留輕盈感。" },
      { title: "層次剪髮型＆焦糖棕", category: "Color", image: "/images/works/pudding/pudding-caramel-layer-cut-title.jpg", note: "焦糖棕髮色搭配層次線條，甜感乾淨又日常。" },
      { title: "韓系氛圍大捲", category: "Perm", image: "/images/works/pudding/pudding-korean-volume-curl-title.jpg", note: "明顯捲度與蓬鬆感，呈現柔和的韓系氛圍。" },
      { title: "柔棕大波浪", category: "Perm", image: "/images/works/pudding/pudding-soft-wave-face.jpg", note: "以臉周線條與捲度修飾，甜美但不厚重。" },
      { title: "鬆軟木馬捲", category: "Perm", image: "/images/works/pudding/pudding-cocoa-soft-curl-back.jpg", note: "捲度增加厚度與蓬鬆感，髮尾保留自然流動。" },
      { title: "摩卡波紋背影", category: "Perm", image: "/images/works/pudding/pudding-mocha-wave-back.jpg", note: "深棕摩卡色搭配自然波紋，低調有光澤。" },
      { title: "焦糖棕波紋", category: "Color", image: "/images/works/pudding/pudding-caramel-wave-back.jpg", note: "暖棕髮色與大波浪線條，呈現柔霧甜感。" }
    ]
  },
  {
    role: "設計師",
    name: "Zefi",
    image: "/images/stylist-zefi.jpg",
    imagePosition: "center 25%",
    focus: "女髮設計 / 染髮 / 個性層次",
    bio: "擅長自然帶個性的髮型方向，適合想讓髮型更有辨識度，同時保留日常好整理的人。",
    tags: [femaleTag, "特殊色漂髮"],
    instagramUrl: "https://www.instagram.com/zefi.gins/",
    lineUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=465eujoy"
  },
  {
    role: "新銳設計師",
    name: "佩佩",
    image: "/images/stylist-peipei.jpg",
    imagePosition: "center 30%",
    focus: "染髮 / 女髮設計 / 兒童剪髮",
    bio: "擅長染髮與兒童剪髮，風格親切細膩，適合想先從自然變化開始整理髮型的人。",
    tags: [femaleTag, kidsTag],
    instagramUrl: "https://www.instagram.com/peipei.gins/",
    lineUrl: "https://lin.ee/SWSDVMr"
  }
];

export const proofPoints = [
  { value: "01", title: "先理解需求，再安排方向", text: "不確定要找哪位設計師時，可以先傳髮況、喜歡的參考與預算，我們會協助判斷適合的服務與預約方式。" },
  { value: "02", title: "公開作品看風格，個人作品看細節", text: "首頁呈現 GINS 的整體美感，設計師頁面則整理個人作品，方便你找到更接近自己喜好的手感。" },
  { value: "03", title: "把髮色放進整體形象裡", text: "從韓國色彩鑑定、膚色明度到臉周線條一起思考，讓髮型不只是改變，而是更靠近你的氣質。" }
];

export const faqItems = [
  {
    question: "第一次預約需要準備什麼？",
    answer: "建議準備目前髮況照片、喜歡的風格參考、可接受的預算與平常整理習慣。資訊越完整，設計師越能判斷適合的方向。"
  },
  {
    question: "不知道要找哪位設計師怎麼辦？",
    answer: "可以先透過 GINS｜線上諮詢，我們會依照你想做的項目、髮況、預算與喜歡的風格協助整理預約方向。"
  },
  {
    question: "染燙價格會和價目表不同嗎？",
    answer: "有可能。染燙價格會依髮長、髮量、髮況、技術內容與設計師不同調整，實際費用以現場或 LINE 諮詢確認為準。"
  },
  {
    question: "色彩鑑定適合什麼人？",
    answer: "適合想知道自己更適合哪些冷暖色、髮色深淺、妝感與穿搭方向的人。染髮前先做判斷，也能降低選錯色系的機率。"
  }
];

export const priceImages = [
  { src: "/images/gins-price-1.png", alt: "GINS 價目表 1" },
  { src: "/images/gins-price-2.png", alt: "GINS 價目表 2" }
];
