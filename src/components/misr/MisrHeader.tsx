import Image from "next/image";
import React from "react";
import misrHeader from "@/images/misrHeader.png";
import { useTranslations } from "next-intl";

const MisrHeader: React.FC = () => {
  const t = useTranslations("Misr");
  return (
    <section className="container misr__header">
      <div className="header__text">
        <h2>{t("title1")}</h2>
        <p>{t("title2")}</p>
        <p>{t("title3")}</p>
        <p>{t("title4")}</p>
      </div>
      <div className="header__image">
        <Image src={misrHeader} alt="misr" priority />
      </div>
    </section>
  );
};

export default MisrHeader;
