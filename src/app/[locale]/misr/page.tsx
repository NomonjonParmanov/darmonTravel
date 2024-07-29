import Button from "@/components/button/Button";
import MIsrDastur from "@/components/misr/MIsrDastur";
import MisrHeader from "@/components/misr/MisrHeader";
import Image from "next/image";
import React from "react";
import misr from "@/images/misr.png";
const Misr: React.FC = () => {
  return (
    <>
      <Image className="misrI" src={misr} alt="misr" priority />
      <MisrHeader />
      <MIsrDastur />
      <Button />
    </>
  );
};

export default Misr;
