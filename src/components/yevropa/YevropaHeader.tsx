import React from "react";
import yevropaHeader from "@/images/yevropaHeader.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
const YevropaHeader: React.FC = () => {
  const t = useTranslations("Yevropa");
  return (
    <section className="container yevropa__header">
      <div className="header__text">
        <h2>{t("title1")}</h2>
        <p>{t("title2")}</p>
        <p>{t("title3")}</p>
        <p>{t("title4")}</p>
      </div>
      <div className="header__image">
        <Image src={yevropaHeader} alt="yevropaHeader" priority />
      </div>
    </section>
  );
};

export default YevropaHeader;
