export const salon = {
  name: "GINS",
  fullName: "GINS 金倪斯髮廊｜韓國認證色彩鑑定專門髮廊",
  tagline: "以霧感髮色、韓系線條與個人色彩鑑定，整理出更貼近日常氣質的髮型方向。",
  phone: "(04) 2224-6589",
  address: "台中市民族路195號",
  hours: "預約制服務，營業時間依官方 LINE 公告為準",
  instagramUrl: "https://www.instagram.com/gins_salon_/",
  lineUrl: "https://line.me/R/ti/p/@819rltim",
  menuLineUrl: "https://line.me/R/ti/p/@819rltim",
  googleMapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E4%B8%AD%E5%B8%82%E6%B0%91%E6%97%8F%E8%B7%AF195%E8%99%9F",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=%E5%8F%B0%E4%B8%AD%E5%B8%82%E6%B0%91%E6%97%8F%E8%B7%AF195%E8%99%9F&output=embed"
};

export const navigation = [
  { number: "01", english: "Services", label: "服務", href: "#services" },
  { number: "02", english: "Treatment", label: "護髮", href: "#treatments" },
  { number: "03", english: "Works", label: "作品", href: "#portfolio" },
  { number: "04", english: "Stylists", label: "設計師", href: "#stylists" },
  { number: "05", english: "Menu", label: "價目", href: "#pricing" },
  { number: "06", english: "Visit", label: "預約", href: "#reservation" }
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
    eyebrow: "MILBON Blonde Plus",
    name: "MILBON 哥德式煥金系列護髮",
    image: "/images/treatment-milbon-product.png",
    summary: "適合染燙後想補強柔順度與光澤感的人，作為日常修護或染後保養都很合適。",
    points: ["四劑式修護", "漂染照護", "柔順光澤"]
  },
  {
    eyebrow: "YUNARO Professional Treatment",
    name: "YUNARO 琉光蘊護髮",
    image: "/images/treatment-yunaro-product.png",
    summary: "更高階的四劑式結構護理，適合想提升髮絲支撐度、柔順度與整體光澤的人。",
    points: ["四劑式護理", "結構修護", "高階養護"]
  }
];

export const portfolioItems = [
  {
    title: "柔棕空氣感長髮",
    category: "Color",
    tone: "mist",
    image: "/images/works/salon/soft-brown-air-bangs.png",
    description: "柔和棕調搭配空氣感瀏海，保留乾淨、自然的甜感。"
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
    title: "黑灰色",
    category: "Color",
    tone: "smoke",
    image: "/images/works/salon/manga-bangs-ponytail.png",
    description: "冷調黑灰色，乾淨俐落，帶一點霧面的光感。"
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
    focus: "韓系女髮 / 層次線條 / 色彩鑑定",
    bio: "擅長把臉型修飾、膚色明度與髮色氛圍一起整理，做出自然但有記憶點的女髮質感。",
    tags: [femaleTag],
    instagramUrl: "https://www.instagram.com/carol.gins/",
    lineUrl: "https://line.me/R/ti/p/%40145czzfp",
    works: [
      { title: "大波浪可可棕", category: "Color", image: "/images/works/carol/carol-soft-brown-wave-back.jpg", note: "柔棕髮色與自然層次。" },
      { title: "黑灰色縮毛+法式小顏瀏海", category: "Color", image: "/images/works/carol/carol-soft-black-layer.jpg", note: "乾淨低調的深髮質感。" },
      { title: "粉棕色高層次", category: "Color", image: "/images/works/carol/carol-rose-brown-layer.jpg", note: "帶甜感的顯白髮色。" },
      { title: "莓果色中長髮氣墊", category: "Color", image: "/images/works/carol/carol-rose-brown-face.jpg", note: "瀏海與臉周線條修飾。" },
      { title: "縮毛矯正+大波浪", category: "Color", image: "/images/works/carol/carol-blue-black-side.jpg", note: "冷調深色與側分輪廓。" },
      { title: "藍黑色縮毛矯正+大波浪", category: "Color", image: "/images/works/carol/carol-blue-black-wave.jpg", note: "光澤感深色長髮。" },
      { title: "灰茶棕氣墊大波浪", category: "Color", image: "/images/works/carol/carol-chocolate-layer.jpg", note: "溫柔自然的日常棕調。" },
      { title: "縮毛矯正+大波浪", category: "Color", image: "/images/works/carol/carol-dark-brown-layer.jpg", note: "低調耐看的層次髮色。" },
      { title: "蜜糖茶棕波紋", category: "Color", image: "/images/works/carol/carol-honey-tea-wave.jpg", note: "帶暖感的柔霧棕色。" },
      { title: "奶茶波紋", category: "Color", image: "/images/works/carol/carol-milk-tea-wave.jpg", note: "柔和明度與空氣感。" },
      { title: "橄欖灰波紋", category: "Color", image: "/images/works/carol/carol-olive-ash-wave.jpg", note: "霧面冷棕的自然質感。" },
      { title: "黑髮高馬尾", category: "Cut", image: "/images/works/carol/carol-black-ponytail.jpg", note: "乾淨俐落的黑髮線條。" },
      { title: "灰棕小臉線條", category: "Color", image: "/images/works/carol/carol-taupe-brown-face.jpg", note: "臉周層次與柔和棕灰。" }
    ]
  },
  {
    role: "副店長",
    name: "Penny",
    image: "/images/stylist-penny.jpg",
    imagePosition: "center 34%",
    focus: "男髮設計 / 紋理燙 / 男生染髮",
    bio: "專注男生髮型，擅長乾淨輪廓、自然蓬鬆與不用過度整理也有型的日常線條。",
    tags: [maleTag],
    instagramUrl: "https://www.instagram.com/pnnnn.gins/",
    lineUrl: "https://line.me/R/ti/p/@206odxxx",
    works: [
      { title: "飛感紋理燙", category: "Perm", image: "/images/works/penny/penny-feigan-texture-perm.jpg", note: "輕盈蓬鬆、線條感明顯。" },
      { title: "韓系紋理燙", category: "Perm", image: "/images/works/penny/penny-korean-texture-perm.jpg", note: "自然鬆度與乾淨輪廓。" },
      { title: "韓系側分紋理", category: "Perm", image: "/images/works/penny/penny-korean-texture-side.jpg", note: "側分線條與自然蓬度。" },
      { title: "日常紋理剪", category: "Cut", image: "/images/works/penny/penny-daily-texture-cut.jpg", note: "乾淨好整理的日常男髮。" },
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
    focus: "女髮設計 / 染髮 / 韓系質感",
    bio: "擅長柔和乾淨的女髮設計，喜歡把髮色與線條做得自然、耐看，讓日常整理更輕鬆。",
    tags: [femaleTag],
    instagramUrl: "https://www.instagram.com/gins.su/",
    lineUrl: "https://line.me/R/ti/p/@825zgojz"
  },
  {
    role: "設計師",
    name: "10",
    image: "/images/stylist-10.jpg",
    imagePosition: "center 36%",
    focus: "女髮設計 / 染髮 / 自然層次",
    bio: "擅長清爽自然的層次與髮色，適合想要低調、乾淨，但又希望髮型有一點變化的人。",
    tags: [femaleTag],
    instagramUrl: "https://www.instagram.com/yilinnnnn__/",
    lineUrl: "https://line.me/R/ti/p/@425kxovt"
  },
  {
    role: "設計師",
    name: "有澤",
    image: "/images/stylist-arisawa.jpg",
    imagePosition: "center top",
    focus: "女髮設計 / 染髮 / 層次線條",
    bio: "重視髮型輪廓與髮色質感，擅長整理臉周線條，讓整體看起來更柔和俐落。",
    tags: [femaleTag],
    instagramUrl: "https://www.instagram.com/gins_zee/",
    lineUrl: "https://line.me/R/ti/p/@844atvdd"
  },
  {
    role: "設計師",
    name: "Allen",
    image: "/images/stylist-allen.jpg",
    imagePosition: "center 34%",
    focus: "女髮設計 / 染髮 / 男生剪髮",
    bio: "風格俐落、有型，能處理女髮染剪，也適合需要乾淨輪廓與日常造型感的男生剪髮。",
    tags: [femaleTag, maleTag],
    instagramUrl: "https://www.instagram.com/gins.allen/",
    lineUrl: "https://line.me/R/ti/p/@023wndex"
  },
  {
    role: "設計師",
    name: "布丁",
    image: "/images/stylist-pudding.jpg",
    imagePosition: "center 30%",
    focus: "女髮設計 / 染髮 / 甜美風格",
    bio: "擅長帶甜感的染髮與韓系線條，風格柔和、清新，適合想保留可愛感但不要太誇張的人。",
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
    tags: [femaleTag],
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
    lineUrl: "https://lin.ee/SWSDVMr",
    works: [
      { title: "莓果漸層染", category: "Color", image: "/images/works/peipei/peipei-plum-gradient-color.jpg", note: "顯色又帶柔和光澤。" },
      { title: "兒童線條剪 01", category: "Kids", image: "/images/works/peipei/peipei-kids-line-cut-1.jpg", note: "乾淨俐落的兒童剪髮。" },
      { title: "兒童線條剪 02", category: "Kids", image: "/images/works/peipei/peipei-kids-line-cut-2.jpg", note: "細節線條與乾淨漸層。" },
      { title: "兒童圓弧短髮", category: "Kids", image: "/images/works/peipei/peipei-kids-bowl-cut.jpg", note: "可愛且好整理。" }
    ]
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
    answer: "可以先透過 GINS LINE 諮詢，我們會依照你想做的項目、髮況、預算與喜歡的風格協助整理預約方向。"
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
  { src: "/images/gins-price-1.jpg", alt: "GINS 價目表 1" },
  { src: "/images/gins-price-2.jpg", alt: "GINS 價目表 2" }
];
