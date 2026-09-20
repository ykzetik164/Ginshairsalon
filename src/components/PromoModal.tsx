"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type PromoModalProps = {
  images: { src: string; alt: string }[];
  startsAt: string;
  endsAt: string;
  lineUrl: string;
  instagramUrl: string;
  storageKey?: string;
};

export function PromoModal({
  images,
  startsAt,
  endsAt,
  lineUrl,
  instagramUrl,
  storageKey = "gins-promo-anniversary-2026"
}: PromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const now = Date.now();
    const start = new Date(startsAt).getTime();
    const end = new Date(endsAt).getTime();
    const isWithinCampaign = now >= start && now <= end;

    if (!isWithinCampaign) return;

    try {
      if (sessionStorage.getItem(storageKey) === "seen") return;
    } catch {
      // sessionStorage unavailable — fall through and show once anyway
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(storageKey, "seen");
      } catch {
        // ignore
      }
    }, 500);

    return () => window.clearTimeout(timer);
  }, [startsAt, endsAt, storageKey]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.body.style.paddingRight = originalPaddingRight;

      const html = document.documentElement;
      const originalScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = originalScrollBehavior;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
      } else if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  if (!isMounted || !isOpen || images.length === 0) return null;

  const activeImage = images[activeIndex];

  const promoModal = (
    <div
      className="stylistModalBackdrop promoModalBackdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
      role="presentation"
    >
      <section aria-label="GINS 一周年慶活動" aria-modal="true" className="promoModal" role="dialog">
        <button aria-label="關閉活動視窗" className="modalClose" onClick={() => setIsOpen(false)} type="button">
          ×
        </button>
        <div className="promoModalImage">
          <Image
            alt={activeImage.alt}
            height={1440}
            key={activeImage.src}
            priority
            src={activeImage.src}
            width={1092}
          />
          {images.length > 1 ? (
            <>
              <button
                aria-label="上一張"
                className="promoModalNav promoModalNavPrev"
                onClick={() => setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1))}
                type="button"
              >
                ‹
              </button>
              <button
                aria-label="下一張"
                className="promoModalNav promoModalNavNext"
                onClick={() => setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1))}
                type="button"
              >
                ›
              </button>
            </>
          ) : null}
        </div>
        {images.length > 1 ? (
          <div className="promoModalDots">
            {images.map((image, index) => (
              <button
                aria-label={`第 ${index + 1} 張`}
                className={index === activeIndex ? "isActive" : ""}
                key={image.src}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        ) : null}
        <div className="promoModalActions">
          <a className="promoModalCta" href={lineUrl} rel="noreferrer" target="_blank">
            加 LINE 預約
          </a>
          <a className="promoModalLink" href={instagramUrl} rel="noreferrer" target="_blank">
            Instagram 完整活動辦法
          </a>
        </div>
      </section>
    </div>
  );

  return createPortal(promoModal, document.body);
}
