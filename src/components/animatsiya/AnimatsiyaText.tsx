"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslations } from "use-intl";

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("Hero");

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: "-100%" },
        { x: "0%", duration: 3, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="animated-container">
      <h1 ref={textRef} className="animated-text">
        {t("title")}
      </h1>
    </div>
  );
};

export default AnimatedText;
