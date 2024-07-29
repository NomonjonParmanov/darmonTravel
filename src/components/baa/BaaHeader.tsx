import Image from "next/image";
import baa from "@/images/baaHeader.png";
import { useTranslations } from "next-intl";
const BaaHeader: React.FC = () => {
  const t = useTranslations("Baa");
  return (
    <section className="container baa__header">
      <div className="header__text">
        <h2>{t("title1")}</h2>
        <p>{t("title2")}</p>
        <p>{t("title3")}</p>
        <p>{t("title4")}</p>
      </div>
      <div className="header__image">
        <Image src={baa} alt="BAA Header" priority />
      </div>
    </section>
  );
};

export default BaaHeader;
