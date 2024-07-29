import Button from "@/components/button/Button";
import YevropaDastur from "@/components/yevropa/YevropaDastur";
import YevropaHeader from "@/components/yevropa/YevropaHeader";
import Image from "next/image";
import yevropa from "@/images/yevropa.png";
const Yevropa: React.FC = () => {
  return (
    <>
      <Image className="yevropaI" src={yevropa} alt="yevropa" priority />
      <YevropaHeader />
      <YevropaDastur />
      <Button />
    </>
  );
};

export default Yevropa;
