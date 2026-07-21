"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { salon, stylists, type Stylist } from "@/data/site";

const filters = ["全部", "女髮", "男髮", "兒童剪髮"];
const workCategoryLabels: Record<string, string> = {
  Color: "染髮",
  Cut: "剪髮",
  Kids: "兒童剪髮",
  Perm: "燙髮"
};

export function StylistGrid() {
  const [active, setActive] = useState("全部");
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);

  const visibleStylists = useMemo(
    () => (active === "全部" ? stylists : stylists.filter((stylist) => stylist.tags.includes(active))),
    [active]
  );

  return (
    <div className="stylistExperience">
      <div className="filterBar stylistFilter" aria-label="設計師分類">
        {filters.map((filter) => (
          <button
            className={active === filter ? "isActive" : ""}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="stylistGrid">
        {visibleStylists.map((stylist) => (
          <article
            className="isVisible"
            data-tilt
            key={stylist.name}
            onClick={() => setSelectedStylist(stylist)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedStylist(stylist);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="portrait" data-image-reveal>
              <Image
                src={stylist.image}
                alt={`${stylist.name} 設計師照片`}
                width={760}
                height={900}
                style={{ objectFit: stylist.imageFit ?? "cover", objectPosition: stylist.imagePosition }}
              />
              <div className="portraitOverlay">
                <p>{stylist.role}</p>
                <h3>{stylist.name}</h3>
              </div>
            </div>
            <div className="stylistMeta">
              <strong>{stylist.focus}</strong>
              <div className="stylistTags">
                {stylist.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="stylistBio">{stylist.bio}</span>
            </div>
          </article>
        ))}
      </div>

      {selectedStylist ? (
        <div className="stylistModalBackdrop" onClick={() => setSelectedStylist(null)} role="presentation">
          <section
            aria-label={`${selectedStylist.name} 設計師介紹`}
            className="stylistModal"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modalClose" onClick={() => setSelectedStylist(null)} type="button" aria-label="關閉">
              ×
            </button>
            <div className="stylistModalHero">
              <Image
                src={selectedStylist.image}
                alt={`${selectedStylist.name} 設計師照片`}
                width={760}
                height={900}
                style={{
                  objectFit: selectedStylist.imageFit ?? "cover",
                  objectPosition: selectedStylist.imagePosition
                }}
              />
            </div>
            <div className="stylistModalContent">
              <p className="kicker">{selectedStylist.role}</p>
              <h3>{selectedStylist.name}</h3>
              <strong>{selectedStylist.focus}</strong>
              <p>{selectedStylist.bio}</p>
              <div className="stylistTags">
                {selectedStylist.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="modalActions">
                <a className="modalLine" href={selectedStylist.lineUrl ?? salon.lineUrl} target="_blank" rel="noreferrer">
                  LINE 預約 / 諮詢
                </a>
                {selectedStylist.instagramUrl ? (
                  <a className="modalInstagram" href={selectedStylist.instagramUrl} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                ) : null}
              </div>

              <div className="modalWorksHead">
                <span>個人作品</span>
                <small>{selectedStylist.works?.length ?? 0} 張作品</small>
              </div>
              {selectedStylist.works?.length ? (
                <div className="modalWorks">
                  {selectedStylist.works.map((work) => (
                    <article className="modalWorkCard" key={work.image}>
                      <Image src={work.image} alt={work.title} width={480} height={600} />
                      <div>
                        <span>{workCategoryLabels[work.category] ?? work.category}</span>
                        <h4>{work.title}</h4>
                        <p>{work.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="modalEmpty">作品陸續整理中</div>
              )}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
