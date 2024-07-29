import Image from "next/image";
import React from "react";
import tailandHeader from "@/images/tailandHeader.png";
import { useTranslations } from "next-intl";
const TailandHeader = () => {
  const t = useTranslations("Tailand");
  return (
    <section className="container tailand__header">
      <div className="header__text">
        <h2>{t("title1")}</h2>
        <p>{t("title2")}</p>
        <p>{t("title3")}</p>
        <p>{t("title4")}</p>
      </div>
      <div className="header__image">
        <Image src={tailandHeader} alt="tailand" priority />
      </div>
    </section>
  );
};

export default TailandHeader;
