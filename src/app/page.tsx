import Image from "next/image";
import { Header } from "@/components/Header";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { RevealMotion } from "@/components/RevealMotion";
import { StylistGrid } from "@/components/StylistGrid";
import { faqItems, highlights, navigation, priceImages, proofPoints, salon, services, treatments } from "@/data/site";

export default function Home() {
  return (
    <>
      <RevealMotion />
      <Header />
      <main id="top">
        <section className="heroSection compactHero">
          <Image
            className="heroImage"
            src="/images/salon-reception-wide.jpg"
            alt="GINS Hair Salon 店內空間"
            fill
            priority
            sizes="100vw"
          />
          <div className="heroVeil" />
          <div className="heroContent">
            <p className="kicker">Korean Color & Hair Design</p>
            <div className="heroLogo" aria-label="GINS Hair Salon">
              <Image src="/images/gins-logo-transparent.png" alt="" width={560} height={304} priority />
            </div>
            <p>{salon.tagline}</p>
            <div className="heroActions">
              <a className="button primary" href="#reservation" data-magnetic>
                預約諮詢
              </a>
              <a className="button secondary" href="#portfolio" data-magnetic>
                觀看作品
              </a>
            </div>
          </div>
          <div className="heroIndex">
            {highlights.map((highlight) => (
              <span key={highlight.value}>
                <strong>{highlight.value}</strong>
                <small>{highlight.label}</small>
              </span>
            ))}
          </div>
        </section>

        <section className="marqueeBand" aria-label="GINS brand keywords">
          <div className="marqueeTrack">
            {Array.from({ length: 2 }).map((_, groupIndex) => (
              <div className="marqueeGroup" aria-hidden={groupIndex > 0} key={groupIndex}>
                <span>GINS Hair Salon</span>
                <span>Color Design</span>
                <span>Perm Texture</span>
                <span>Gloss Color</span>
                <span>Hair Ritual</span>
                <span>Personal Style</span>
              </div>
            ))}
          </div>
        </section>

        <section className="chapterSection" data-reveal>
          <div className="chapterIntro">
            <p className="kicker">Index</p>
            <h2>從風格、設計師到預約，找到最適合你的入口。</h2>
          </div>
          <div className="chapterGrid">
            {navigation.map((item) => (
              <a href={item.href} key={item.href} data-tilt>
                <span>{item.number}</span>
                <small>{item.english}</small>
                <strong>{item.label}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="statementSection" data-reveal>
          <div>
            <p className="kicker">Philosophy</p>
            <h2>好看的髮型，應該和臉型、膚色與生活狀態一起成立。</h2>
          </div>
          <div className="statementCopy">
            <p>
              GINS 不只完成一個造型，也重視諮詢、髮況判斷與回家後的整理感。從臉型、髮流、膚色明度與日常習慣出發，讓髮型在日常裡也能維持舒服的樣子。
            </p>
            <p>
              如果你還不確定適合哪位設計師，可以先透過 GINS LINE 傳送髮況與喜歡的風格，我們會協助你把需求整理得更清楚。
            </p>
          </div>
        </section>

        <section className="servicesSection" id="services" data-reveal>
          <div className="sectionHead">
            <p className="kicker">Services</p>
            <h2>剪、染、燙與護理</h2>
          </div>
          <div className="serviceRail">
            {services.map((service) => (
              <article data-reveal data-tilt key={service.id}>
                <span>{service.id}</span>
                <small>{service.title}</small>
                <h3>{service.label}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
            <article className="colorServiceCard" data-reveal data-tilt>
              <span>05</span>
              <small>Korea Color Analysis</small>
              <h3>韓國認證色彩鑑定</h3>
              <p>透過韓國個人色彩系統，從膚色、五官明度、穿搭與髮色一起判斷，建立更適合你的形象方向。</p>
            </article>
          </div>
        </section>

        <section className="colorAnalysisSection" id="color-analysis" data-reveal>
          <div className="colorAnalysisIntro">
            <p className="kicker">Korea Color Analysis</p>
            <h2>全台第一間首推，韓國認證色彩鑑定專門髮廊</h2>
            <p>
              色彩鑑定不是單純挑一個漂亮顏色，而是理解你的膚色明度、五官氛圍與穿搭習慣。GINS 以韓國系統化分析協助你找到更顯氣色、也更容易駕馭的髮色與形象方向。
            </p>
            <figure className="certificateFrame" data-image-reveal>
              <Image
                src="/images/color-certificate.png"
                alt="GINS 韓國認證色彩鑑定證書"
                width={1600}
                height={1000}
              />
              <figcaption>韓國 Personal Color Consultant 認證證書</figcaption>
            </figure>
          </div>
          <div className="colorAnalysisPanel" data-tilt>
            <figure className="colorAnalysisPhoto" data-image-reveal>
              <Image
                src="/images/color-analysis-main.png"
                alt="GINS 韓國色彩鑑定服務"
                width={1600}
                height={900}
              />
            </figure>
            <div className="colorAnalysisBadge">
              <span>Taiwan First</span>
              <strong>全台第一間首推</strong>
            </div>
            <div className="colorAnalysisCards">
              <article>
                <span>01</span>
                <h3>膚色與五官明度</h3>
                <p>觀察冷暖、明度與五官輪廓，判斷更能襯托氣色的髮色深淺。</p>
              </article>
              <article>
                <span>02</span>
                <h3>髮色、妝感與穿搭</h3>
                <p>把髮色放進整體造型裡思考，讓妝感、服裝顏色與髮型更協調。</p>
              </article>
              <article>
                <span>03</span>
                <h3>染前風格校準</h3>
                <p>染髮前先確認適合色系，減少選色落差，也讓退色過程更好掌握。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="atelierSection" data-reveal>
          <div className="atelierText">
            <p className="kicker">Atelier</p>
            <h2>霧感留白，讓諮詢與變髮過程慢下來。</h2>
            <p>
              店內以霧感灰白、金屬線條與柔和光源構成乾淨的留白感。從等候、諮詢到染燙護理，希望每一步都安靜、清楚，也更有被好好照顧的感受。
            </p>
          </div>
          <div className="atelierGallery">
            <Image src="/images/salon-lounge-wide.jpg" alt="GINS 等候區" width={960} height={540} />
            <Image src="/images/salon-stations-wide.jpg" alt="GINS 設計座位區" width={960} height={540} />
            <Image src="/images/salon-color-zone.jpg" alt="GINS 色彩鑑定區" width={960} height={540} />
          </div>
        </section>

        <section className="treatmentsSection" id="treatments" data-reveal>
          <div className="sectionHead split">
            <div>
              <p className="kicker">Treatment</p>
              <h2>護髮修護</h2>
            </div>
            <p>護髮可依髮況與預算選擇 MILBON 哥德式煥金系列，或升級更高階的 YUNARO 琉光蘊護髮；從染後修護到結構養護，讓髮絲維持柔順與光澤。</p>
          </div>
          <div className="treatmentGrid">
            {treatments.map((treatment) => (
              <article className="treatmentCard" data-reveal data-tilt key={treatment.name}>
                <Image src={treatment.image} alt={treatment.name} width={900} height={620} />
                <div className="treatmentContent">
                  <p className="kicker">{treatment.eyebrow}</p>
                  <h3>{treatment.name}</h3>
                  <p>{treatment.summary}</p>
                  <div className="treatmentTags">
                    {treatment.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolioSection" id="portfolio" data-reveal>
          <div className="sectionHead split">
            <div>
              <p className="kicker">Salon Works</p>
              <h2>公開作品</h2>
            </div>
            <p>以女髮公開作品呈現 GINS 的髮色、線條與整體氛圍。想看各設計師個人作品，可點擊設計師照片查看。</p>
          </div>
          <PortfolioFilter />
        </section>

        <section className="proofSection" data-reveal>
          <div className="sectionHead split">
            <div>
              <p className="kicker">Before Booking</p>
              <h2>第一次來，也可以先從諮詢開始。</h2>
            </div>
            <p>把目前髮況、喜歡的感覺與預算告訴我們，我們會協助你判斷服務方向與適合的設計師。</p>
          </div>
          <div className="proofGrid">
            {proofPoints.map((item) => (
              <article data-reveal data-tilt key={item.value}>
                <span>{item.value}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stylistsSection" id="stylists" data-reveal>
          <div className="sectionHead split">
            <div>
              <p className="kicker">Stylists</p>
              <h2>設計師團隊</h2>
            </div>
            <p>每位設計師都有不同手感與審美。點擊照片可查看個人介紹、作品與 LINE / Instagram 入口。</p>
          </div>
          <StylistGrid />
        </section>

        <section className="priceImageSection" id="pricing" aria-label="價目表" data-reveal>
          <div className="sectionHead split">
            <div>
              <p className="kicker">Menu</p>
              <h2>價目表</h2>
            </div>
            <p>價目表提供基本參考，實際費用會依髮長、髮量、髮況、技術內容與設計師不同調整，建議先透過 LINE 或現場諮詢確認。</p>
          </div>
          <div className="priceImageGrid">
            {priceImages.map((image) => (
              <a data-reveal data-image-reveal data-tilt href={image.src} target="_blank" rel="noreferrer" key={image.src}>
                <Image src={image.src} alt={image.alt} width={900} height={1273} />
              </a>
            ))}
          </div>
        </section>

        <section className="faqSection" data-reveal>
          <div className="sectionHead split">
            <div>
              <p className="kicker">FAQ</p>
              <h2>預約前常見問題</h2>
            </div>
            <p>第一次預約前最常遇到的疑問，先看完會更清楚該準備哪些資訊。</p>
          </div>
          <div className="faqList">
            {faqItems.map((item, index) => (
              <details data-default-open={index === 0 ? "true" : "false"} key={item.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="reservationSection" id="reservation" data-reveal>
          <div>
            <p className="kicker">Reservation</p>
            <h2>預約與到店資訊</h2>
            <p>
              如果還不確定要找哪位設計師，歡迎先透過 GINS LINE 傳送目前髮況、喜歡的風格與預算。我們會先協助整理方向，再安排更適合的預約方式。
            </p>
            <div className="contactStack">
              <span>{salon.phone}</span>
              <span>{salon.address}</span>
              <span>{salon.hours}</span>
            </div>
            <div className="socialActions">
              <a href={salon.lineUrl} target="_blank" rel="noreferrer" data-magnetic>
                GINS LINE 諮詢
              </a>
              <a href={salon.menuLineUrl} target="_blank" rel="noreferrer" data-magnetic>
                設計師預約入口
              </a>
              <a href={salon.googleMapUrl} target="_blank" rel="noreferrer" data-magnetic>
                Google 地圖
              </a>
              <a href={salon.instagramUrl} target="_blank" rel="noreferrer" data-magnetic>
                Instagram
              </a>
            </div>
          </div>
          <div className="locationPanel" aria-label="GINS 店鋪位置">
            <div className="mapFrame">
              <iframe
                src={salon.googleMapEmbedUrl}
                title="GINS Hair Salon Google 地圖"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="locationDetails">
              <p className="kicker">Location</p>
              <h3>GINS 金倪斯髮廊</h3>
              <span>{salon.address}</span>
              <a href={salon.googleMapUrl} target="_blank" rel="noreferrer">
                開啟 Google 地圖
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="siteFooter">
        <div>
          <strong>GINS 金倪斯髮廊</strong>
          <p>
            {salon.address} / {salon.phone}
          </p>
        </div>
        <a href="#top">Back to top</a>
      </footer>
      <a className="floatingLine" href={salon.lineUrl} target="_blank" rel="noreferrer" aria-label="GINS LINE 諮詢" data-magnetic>
        <span>LINE</span>
        <strong>LINE 諮詢</strong>
      </a>
    </>
  );
}

