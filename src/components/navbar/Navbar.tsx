"use client";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import logo from "@/images/logo.svg";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ru from "@/images/ru.png";
import uz from "@/images/uz.png";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import eng from "@/images/eng.svg";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const t = useTranslations("Navbar");
  const router = useRouter();

  const changeLocale = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <>
      <nav className="container navbar">
        <Link href="/baa" className="logo">
          <Image src={logo} alt="logo" priority />
        </Link>
        <ul>
          <Link href={"#tur"}>
            <li>{t("title1")}</li>
          </Link>
          <Link href={"#about"}>
            <li>{t("title2")}</li>
          </Link>
          <Link href={"#service"}>
            <li>{t("title3")}</li>
          </Link>
          <Link href={"#contact"}>
            <li>{t("title4")}</li>
          </Link>
        </ul>
        <div className="lang__media">
          <div className="lang dropdown">
            <button className="dropbtn">
              <MdLanguage className="icon" />
            </button>
            <div className="dropdown-content">
              <button onClick={() => changeLocale("uz")}>
                Uzb
                <Image src={uz} alt="uz" priority />
              </button>
              <button onClick={() => changeLocale("ru")}>
                Ru
                <Image src={ru} alt="ru" priority />
              </button>
              <button onClick={() => changeLocale("eng")}>
                Eng
                <Image src={eng} alt="eng" priority />
              </button>
            </div>
          </div>
          <button className="btn__media" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>
      <div className={`${toggle ? "show" : "none"}`}>
        <ul>
          <Link href={"#tur"}>
            <li>{t("title1")}</li>
          </Link>
          <Link href={"#about"}>
            <li>{t("title2")}</li>
          </Link>
          <Link href={"#service"}>
            <li>{t("title3")}</li>
          </Link>
          <Link href={"#contact"}>
            <li>{t("title4")}</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
