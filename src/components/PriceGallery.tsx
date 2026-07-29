"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type PriceImage = {
  src: string;
  alt: string;
};

export function PriceGallery({ images }: { images: PriceImage[] }) {
  const [selected, setSelected] = useState<PriceImage | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;

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
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const priceModal = selected ? (
    <div
      className="stylistModalBackdrop priceModalBackdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setSelected(null);
        }
      }}
      role="presentation"
    >
      <section aria-label={selected.alt} aria-modal="true" className="priceModal" role="dialog">
        <button
          aria-label="關閉價目表"
          className="modalClose"
          onClick={() => setSelected(null)}
          type="button"
        >
          ×
        </button>
        <div className="priceModalImage">
          <Image src={selected.src} alt={selected.alt} width={964} height={1632} />
        </div>
      </section>
    </div>
  ) : null;

  return (
    <>
      <div className="priceImageGrid">
        {images.map((image) => (
          <button
            className="priceImageTrigger"
            data-reveal
            data-image-reveal
            data-tilt
            key={image.src}
            onClick={() => setSelected(image)}
            type="button"
          >
            <Image src={image.src} alt={image.alt} width={964} height={1632} />
          </button>
        ))}
      </div>
      {isMounted && priceModal ? createPortal(priceModal, document.body) : null}
    </>
  );
}
