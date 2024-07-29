import React from "react";
import check from "@/images/check.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const YevropaDastur: React.FC = () => {
  const t = useTranslations("Yevropa");
  return (
    <section className="container yevropa__dastur">
      <div className="card">
        <h3>{t("title5")}</h3>
        <h2>{t("title6")}</h2>
        <ul>
          <li>
            <Image src={check} alt="check" priority />
            {t("title7")}
          </li>
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
        </ul>
      </div>
      <div className="card">
        <h3>{t("title12")}</h3>
        <h2>{t("title13")}</h2>
        <ul>
          <li>
            <Image src={check} alt="check" priority />
            {t("title14")}
          </li>
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
      <div className="card">
        <h3>{t("title21")}</h3>
        <h2>{t("title22")}</h2>
        <ul>
          <li>
            <Image src={check} alt="check" priority />
            {t("title23")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title24")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title25")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title26")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title27")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title28")}
          </li>
          <li>
            <Image src={check} alt="check" priority />
            {t("title29")}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default YevropaDastur;
