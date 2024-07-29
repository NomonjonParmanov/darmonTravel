"use client";
import { PatternFormat } from "react-number-format";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";

const Button: React.FC = () => {
  const [modal, setModal] = useState(false);
  const t = useTranslations("Button");
  return (
    <section className="container button">
      <button onClick={() => setModal(!modal)} className="btn1">
        {t("button")}{" "}
      </button>
      <div className={`${modal ? "modal" : "none"}`}>
        <div className="modal__content">
          <div className="close">
            <button onClick={() => setModal(false)}>
              <IoMdClose className="icon" />
            </button>
          </div>
          <div className="middle">
            <p>{t("title2")}</p>
            <form action="">
              <input type="text" placeholder={`${t("name")}`} required />
              <PatternFormat
                format="+998 (##) ### ## ##"
                allowEmptyFormatting
                mask="_"
                required
              />
              <button className="btn1 btn"> {t("button")} </button>
            </form>
            <p className="p">{t("title3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Button;
