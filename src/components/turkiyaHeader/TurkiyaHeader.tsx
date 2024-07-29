import React from "react";
import turkiyaHeader from "@/images/turkiyaHeader.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
const TurkiyaHeader: React.FC = () => {
  const t = useTranslations("Turkiya");
  return (
    <section className="container turkiya__header">
      <div className="header__text">
        <h1>{t("title1")}</h1>
        <h3>{t("title2")}</h3>
        <p>{t("title3")}</p>
        <p>{t("title4")}</p>
        <p>{t("title5")}</p>
      </div>
      <div className="header__image">
        <Image src={turkiyaHeader} alt="turkiya" priority />
      </div>
    </section>
  );
};

export default TurkiyaHeader;
