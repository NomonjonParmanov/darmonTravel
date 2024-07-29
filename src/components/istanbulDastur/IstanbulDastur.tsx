import React from "react";
import check from "@/images/check.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const IstanbulDastur: React.FC = () => {
  const t = useTranslations("Turkiya");
  return (
    <section className="container istanbul__dastur">
      <div className="card">
        <h3>{t("title6")}</h3>
        <h2>{t("title7")}</h2>
        <ul>
          <li>
            <Image src={check} alt="check" priority />
            {t("title8")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title9")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title10")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title11")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title12")}
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>{t("title13")}</h3>
        <h2>{t("title14")}</h2>
        <ul>
          <li>
            <Image src={check} alt="check" priority />
            {t("title15")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title16")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title17")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title18")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title19")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title20")}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IstanbulDastur;
