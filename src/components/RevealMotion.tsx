"use client";

import { useEffect } from "react";

export function RevealMotion() {
  useEffect(() => {
    document.querySelectorAll<HTMLDetailsElement>(".faqList details").forEach((detail) => {
      detail.open = detail.dataset.defaultOpen === "true";
    });

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-image-reveal]"));
    const shouldRevealImmediately =
      window.matchMedia("(hover: none), (pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || shouldRevealImmediately) {
      targets.forEach((target) => target.classList.add("isVisible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("isVisible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.14 }
      );

      targets.forEach((target) => observer.observe(target));

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }

    const interactiveItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const rippleItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-tilt], [data-magnetic], .filterBar button, .faqList summary, .modalClose"
      )
    );

    const handleTiltMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 7;
      const rotateY = (x - 0.5) * 7;

      target.style.setProperty("--pointer-x", `${x * 100}%`);
      target.style.setProperty("--pointer-y", `${y * 100}%`);
      target.style.setProperty("--tilt-x", `${rotateX}deg`);
      target.style.setProperty("--tilt-y", `${rotateY}deg`);
    };

    const resetTilt = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.style.setProperty("--pointer-x", "50%");
      target.style.setProperty("--pointer-y", "50%");
    };

    const handleMagneticMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      target.style.setProperty("--magnet-x", `${x * 0.16}px`);
      target.style.setProperty("--magnet-y", `${y * 0.16}px`);
    };

    const resetMagnet = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--magnet-x", "0px");
      target.style.setProperty("--magnet-y", "0px");
    };

    const createRipple = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);

      ripple.className = "tapRipple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      target.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };

    interactiveItems.forEach((item) => {
      item.addEventListener("pointermove", handleTiltMove);
      item.addEventListener("pointerleave", resetTilt);
    });

    magneticItems.forEach((item) => {
      item.addEventListener("pointermove", handleMagneticMove);
      item.addEventListener("pointerleave", resetMagnet);
    });

    rippleItems.forEach((item) => {
      item.addEventListener("pointerdown", createRipple);
    });

    return () => {
      interactiveItems.forEach((item) => {
        item.removeEventListener("pointermove", handleTiltMove);
        item.removeEventListener("pointerleave", resetTilt);
      });

      magneticItems.forEach((item) => {
        item.removeEventListener("pointermove", handleMagneticMove);
        item.removeEventListener("pointerleave", resetMagnet);
      });

      rippleItems.forEach((item) => {
        item.removeEventListener("pointerdown", createRipple);
      });
    };
  }, []);

  return null;
}
