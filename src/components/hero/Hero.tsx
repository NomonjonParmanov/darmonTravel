import Image from "next/image";
import React from "react";
import hero from "@/images/hero.png";
import { useTranslations } from "next-intl";
import Button from "../button/Button";
import AnimatedText from "../animatsiya/AnimatsiyaText";

const Hero: React.FC = () => {
  const t = useTranslations("Hero");
  return (
    <main className="container hero">
      <div className="hero__text">
        <AnimatedText />
        <Button />
      </div>
      <div className="hero__image">
        <Image src={hero} alt="hero" priority />
      </div>
    </main>
  );
};

export default Hero;
