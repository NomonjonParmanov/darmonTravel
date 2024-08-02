"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import turkiya from "@/images/card1.png";
import misr from "@/images/card2.png";
import baa from "@/images/card3.png";
import yevropa from "@/images/card4.png";
import tailand from "@/images/tailandC.jpg";
import { useLocale, useTranslations } from "next-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const IMGS = [
  {
    id: 1,
    title: "Turkiya",
    paragh: "Toshkent-Istanbul",
    img: turkiya,
    link: "turkiya",
  },
  {
    id: 2,
    title: "Misr",
    paragh: "Toshkent-Qohira",
    img: misr,
    link: "misr",
  },
  {
    id: 3,
    title: "BAA",
    paragh: "Toshkent-Dubay",
    link: "baa",
    img: baa,
  },
  {
    id: 4,
    paragh: "Toshkent-Parij",
    title: "Yevropa",
    link: "yevropa",
    img: yevropa,
  },
  {
    id: 9,
    paragh: "Toshkent-Tailand",
    title: "Tailand",
    link: "tailand",
    img: tailand,
  },
  {
    id: 5,
    title: "Turkiya",
    paragh: "Toshkent-Istanbul",
    link: "turkiya",
    img: turkiya,
  },
  {
    id: 6,
    title: "Misr",
    paragh: "Toshkent-Qohira",
    link: "misr",
    img: misr,
  },
  {
    id: 7,
    title: "BAA",
    paragh: "Toshkent-Dubay",
    link: "baa",
    img: baa,
  },
  {
    id: 8,
    paragh: "Toshkent-Parij",
    title: "Yevropa",
    link: "yevropa",
    img: yevropa,
  },
  {
    id: 10,
    paragh: "Toshkent-Tailand",
    title: "Tailand",
    link: "tailand",
    img: tailand,
  },
];

const Carousel: React.FC = () => {
  const t = useTranslations("Carousel");
  const sliderRef = useRef<Slider>(null);
  const [isMounted, setIsMounted] = useState(false);
  const locale = useLocale();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <BsArrowLeft className="icon" />,
    nextArrow: <BsArrowRight className="icon" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = IMGS.map((el, index) => (
    <div key={el.id} className="slider__card">
      <Link href={`/${locale}/${el.link}`}>
        <Image src={el.img} alt={el.title} priority />
        <div className="text">
          <h2>{t(`city.${index}.title`)}</h2>
          <p>{t(`way.${index}.title`)}</p>
        </div>
      </Link>
    </div>
  ));

  if (!isMounted) {
    return null;
  }

  return (
    <section className="bg">
      <div id="tur" className="container carousel">
        <h1>{t("turlar")}</h1>
        <Slider ref={sliderRef} {...settings}>
          {cards}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
