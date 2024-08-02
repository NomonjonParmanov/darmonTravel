"use client";
import Image from "next/image";
import contact from "@/images/contactI.png";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PatternFormat } from "react-number-format";
import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

interface FormData {
  phoneNumber: number;
}

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const [number, setNumber] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleNumber = async (e: FormEvent<HTMLFormElement>) => {
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
      setNumber("");
      toast.success("Biz siz bilan tez orada bog'lanamiz"), { autoClose: 2000 };
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact">
          <div className="contact__text">
            <p>{t("title")}</p>
            <form onSubmit={handleNumber}>
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
              <button type="submit" disabled={isSubmitting}>
                {t("button")}
              </button>
              {error && <p className="error">{error}</p>}
            </form>
          </div>
          <div className="contact__image">
            <Image src={contact} alt="contact" priority />
          </div>
        </div>
        <div className="address">
          <div className="icons">
            <FaPhoneAlt className="icon2" />
            <p>+998 77 273 00 17</p>
          </div>
          <div className="icons icons2">
            <FaLocationDot className="icon2" />
            <p>{t("location")}</p>
          </div>
        </div>
        <div className="web__icons">
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
        <hr />
      </div>
      <h1 className="footer__h">DarmonTravel 2024</h1>
    </footer>
  );
};

export default Footer;
