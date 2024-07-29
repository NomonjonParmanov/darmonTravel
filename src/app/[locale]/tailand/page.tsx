import Button from "@/components/button/Button";
import TailandDastur from "@/components/tailand/TailandDastur";
import TailandHeader from "@/components/tailand/TailandHeader";
import tailand from "@/images/tailand.png";
import Image from "next/image";
const Tailand: React.FC = () => {
  return (
    <div>
      <Image className="tailand" src={tailand} alt="tailand" priority />
      <TailandHeader />
      <TailandDastur />
      <Button />
    </div>
  );
};

export default Tailand;
