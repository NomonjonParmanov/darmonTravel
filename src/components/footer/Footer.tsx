"use client";
import Image from "next/image";
import React from "react";
import contact from "@/images/contactI.png";
import { FaPhoneAlt } from "react-icons/fa";
import { PatternFormat } from "react-number-format";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact">
          <div className="contact__text">
            <p>{t("title")}</p>
            <form action="">
              <PatternFormat
                format="+998 (##) ### ## ##"
                allowEmptyFormatting
                mask="_"
                required
              />
              <button>{t("button")}</button>
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
          <div className="icons">
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
    </footer>
  );
};

export default Footer;
