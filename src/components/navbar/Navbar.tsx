"use client";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import logo from "@/images/logo.svg";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ru from "@/images/ru.png";
import uz from "@/images/uz.png";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import eng from "@/images/eng.svg";
import Link from "next/link";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split("/");
  const city = parts[2];
  console.log(city);
  const changeLocale = (newLocale: string) => {
    router.push(`/${city ? `${newLocale}/${city}` : newLocale}`);
  };

  const localeLang = useLocale();
  return (
    <div className="n__bg">
      <nav className="container navbar">
        <Link href={`/${localeLang}`} className="logo">
          <Image src={logo} alt="logo" priority />
        </Link>
        <ul>
          <Link href={`/${localeLang}#tur`}>
            <li>{t("title1")}</li>
          </Link>
          <Link href={`/${localeLang}#about`}>
            <li>{t("title2")}</li>
          </Link>
          <Link href={`/${localeLang}#service`}>
            <li>{t("title3")}</li>
          </Link>
          <Link href={`/${localeLang}#contact`}>
            <li>{t("title4")}</li>
          </Link>
        </ul>
        <div className="lang__media">
          <div className="lang dropdown">
            <div className="btns">
              <span>{localeLang.toUpperCase()}</span>
              <button className="dropbtn">
                <MdLanguage className="icon" />
              </button>
            </div>
            <div className="dropdown-content">
              <button onClick={() => changeLocale("uz")}>
                Uz
                <Image src={uz} alt="uz" priority />
              </button>
              <button onClick={() => changeLocale("ru")}>
                Ru
                <Image src={ru} alt="ru" priority />
              </button>
              <button onClick={() => changeLocale("en")}>
                En
                <Image src={eng} alt="en" priority />
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
          <Link href={`/${localeLang}#tur`}>
            <li>{t("title1")}</li>
          </Link>
          <Link href={`/${localeLang}#about`}>
            <li>{t("title2")}</li>
          </Link>
          <Link href={`/${localeLang}#service`}>
            <li>{t("title3")}</li>
          </Link>
          <Link href={`/${localeLang}#contact`}>
            <li>{t("title4")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
