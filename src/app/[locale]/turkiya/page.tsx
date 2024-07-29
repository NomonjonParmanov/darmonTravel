"use client";

import AntaliyaHeader from "@/components/antaliya/AntaliyaHeader";
import Button from "@/components/button/Button";
import IstanbulDastur from "@/components/istanbulDastur/IstanbulDastur";
import TurkiyaHeader from "@/components/turkiyaHeader/TurkiyaHeader";
import Image from "next/image";
import turkiya from "@/images/turkey.png";
const Turkiya: React.FC = () => {
  return (
    <>
      <Image className="turkiyaI" src={turkiya} alt="turkiya" priority />
      <TurkiyaHeader />
      <IstanbulDastur />
      <AntaliyaHeader />
      <Button />
    </>
  );
};

export default Turkiya;
