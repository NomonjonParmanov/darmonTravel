import Image from "next/image";
import React from "react";
import parij from "@/images/parij.png";
import img1 from "@/images/img1.png";
import ticket from "@/images/ticket.png";
import { useTranslations } from "next-intl";

const Sale: React.FC = () => {
  const t = useTranslations("Sale");
  return (
    <section className="container sale">
      <div className="sale__text">
        <h2>
          <span>{t("title1")}</span> {t("title2")}
        </h2>
        <p>
          {t("title3")}
          <span> {t("title4")}</span>
        </p>
      </div>
      <div className="sale__image">
        <Image className="ticket" src={ticket} alt="ticket" priority />
        <Image src={parij} alt="parij" priority />
        <Image src={img1} alt="par" priority />
      </div>
    </section>
  );
};

export default Sale;
