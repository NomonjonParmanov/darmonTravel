import React from "react";
import icon1 from "@/images/icon1.png";
import icon2 from "@/images/ico2.png";
import icon3 from "@/images/icon3.png";
import icon4 from "@/images/icon4.png";
import icon5 from "@/images/icon5.png";
import icon6 from "@/images/icon6.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ServicesImgs = [
  {
    id: 1,
    titleKey: "0.card",
    icon: icon1,
  },
  {
    id: 2,
    titleKey: "1.card",
    icon: icon2,
  },
  {
    id: 3,
    titleKey: "2.card",
    icon: icon3,
  },
  {
    id: 4,
    titleKey: "3.card",
    icon: icon4,
  },
];

const additionalServices = [
  {
    id: 5,
    titleKey: "4.card",
    icon: icon5,
  },
  {
    id: 6,
    titleKey: "5.card",
    icon: icon6,
  },
];

const Services: React.FC = () => {
  const t = useTranslations("Services.cards");
  const d = useTranslations("Services");

  const serviceCard = ServicesImgs.map((el) => (
    <div className="card" key={el.id}>
      <Image src={el.icon} alt="icon" priority />
      <p>{t(el.titleKey)}</p>
      <div className="box"></div>
    </div>
  ));

  const additionalServiceCard = additionalServices.map((el) => (
    <div className="card" key={el.id}>
      <Image src={el.icon} alt="icon" priority />
      <p>{t(el.titleKey)}</p>
      <div className="box"></div>
    </div>
  ));

  return (
    <section id="service" className="section">
      <div className="container services">
        <h1>{d("service")}</h1>
        <div className="services1">{serviceCard}</div>
        <div className="services2">{additionalServiceCard}</div>
      </div>
    </section>
  );
};

export default Services;
