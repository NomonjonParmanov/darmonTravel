"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import baa from "@/images/baa.png";
import BaaHeader from "@/components/baa/BaaHeader";
import BaaDastur from "@/components/baa/BaaDastur";
import Button from "@/components/button/Button";
const Baa: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="container">
      <Image src={baa} className="baa" alt="baa" priority />
      <BaaHeader />
      <BaaDastur />
      <Button />
    </div>
  );
};

export default Baa;
