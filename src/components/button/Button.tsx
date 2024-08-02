"use client";
import { PatternFormat } from "react-number-format";
import { useState, ChangeEvent, FormEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  phoneNumber: number;
}

const Button: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations("Button");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const phoneNumber = parseInt(number.replace(/\D/g, ""), 10);

    if (isNaN(phoneNumber)) {
      setError("Invalid phone number format.");
      setIsSubmitting(false);
      return;
    }

    const data: FormData = {
      name,
      phoneNumber,
    };

    try {
      const response = await fetch(
        "http://192.168.77.24:3102/tg-bot/requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `Network response was not ok: ${response.statusText} - ${errorData}`
        );
      }
      const result = await response.json();
      console.log("Success:", result);
      setName("");
      setNumber("");
      setModal(false);
      toast.success("Biz siz bilan tez orada bog'lanamiz"), { autoClose: 2000 };
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit data. Please try again.");
      toast.error("Failed to submit data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="button">
      <button onClick={() => setModal(!modal)} className="btn1">
        {t("button")}
      </button>
      <div className={`${modal ? "modal" : "none"}`}>
        <div className="modal__content">
          <div className="top">
            <div onClick={() => setModal(false)} className="close">
              <IoMdClose className="icon" />
            </div>
          </div>
          <div className="middle">
            <p>{t("title2")}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t("name")}
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                required
              />
              <label htmlFor="">{t("aloqa")}</label>
              <PatternFormat
                format="+998 (##) ### ## ##"
                allowEmptyFormatting
                mask="_"
                required
                value={number}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNumber(e.target.value)
                }
              />
              <button
                type="submit"
                className="btn1 btn"
                disabled={isSubmitting}
              >
                {t("button")}
              </button>
              {error && <p className="error">{error}</p>}
            </form>
            <p className="p">{t("title3")}</p>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Button;
