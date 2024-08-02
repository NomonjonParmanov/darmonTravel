import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import about from "@/images/about.png";
const About = () => {
  const t = useTranslations("About");
  return (
    <section id="about" className="container about">
      <h1>{t("title")}</h1>
      <div className="about__content">
        <div className="about__text">
          <p className="p1">{t("title2")}</p>
          <p className="p2">{t("title3")}</p>
          <p className="p3">{t("title4")}</p>
        </div>
        <div className="about__image">
          <Image src={about} alt="about" priority />
        </div>
      </div>
    </section>
  );
};

export default About;
