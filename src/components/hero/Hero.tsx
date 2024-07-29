import Image from "next/image";
import React from "react";
import hero from "@/images/hero.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero: React.FC = () => {
  const t = useTranslations("Hero");
  return (
    <main className="container hero">
      <div className="hero__text">
        <h1>{t("title")}</h1>
        <Link href={"#tur"}>
          <button>{t("button")}</button>
        </Link>
      </div>
      <div className="hero__image">
        <Image src={hero} alt="hero" priority />
      </div>
    </main>
  );
};

export default Hero;
