import { useTranslations } from "next-intl";
import About from "@/components/about/About";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Sale from "@/components/sale/Sale";
import Services from "@/components/services/Services";
export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Hero />
      <Carousel />
      <Sale />
      <About />
      <Services />
    </div>
  );
}
