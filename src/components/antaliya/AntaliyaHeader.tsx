import Image from "next/image";
import React from "react";
import check from "@/images/check.svg";
import antaliya from "@/images/turkiya2.png";
import { useTranslations } from "use-intl";
const AntaliyaHeader: React.FC = () => {
  const t = useTranslations("Turkiya");
  return (
    <>
      <section className=" container antaliya__header">
        <div className="header__image">
          <Image src={antaliya} alt="antaliya" priority />
        </div>
        <div className="header__text">
          <h2>{t("title21")}</h2>
          <p>{t("title22")}</p>
        </div>
      </section>
      <section className=" container antaliya__cards">
        <div className="card">
          <h3>{t("title23")}</h3>
          <h2>{t("title24")}</h2>
          <ul>
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
              {t("title29")}{" "}
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>{t("title6")}</h3>
          <h2>{t("title13")}</h2>
          <ul>
            <li>
              <Image src={check} alt="check" priority />
              {t("title29")}
            </li>
            <li>
              <Image src={check} alt="check" priority />
              {t("title30")}
            </li>
            <li>
              <Image src={check} alt="check" priority />
              {t("title31")}
            </li>
            <li>
              <Image src={check} alt="check" priority />
              {t("title32")}
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
    </>
  );
};

export default AntaliyaHeader;
