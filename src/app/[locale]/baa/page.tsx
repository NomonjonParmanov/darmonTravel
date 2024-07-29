import React from "react";
import Image from "next/image";
import baa from "@/images/baa.png";
import { useTranslations } from "next-intl";
import BaaHeader from "@/components/baa/BaaHeader";
import BaaDastur from "@/components/baa/BaaDastur";
import Button from "@/components/button/Button";
const Baa: React.FC = () => {
  const t = useTranslations("Homepage");
  return (
    <div>
      <Image src={baa} className="baa" alt="baa" priority />
      <BaaHeader />
      <BaaDastur />
      <Button />
    </div>
  );
};

export default Baa;
