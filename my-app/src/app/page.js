import Image from "next/image";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Ecosystem_Section from "./components/Ecosystem_Section";
import Products_section from "./components/Products_section";
import Roadmap_Section from "./components/Roadmap_Section";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
    <>
      <div className="bg-[#f4ff52] font-sans text-black">
        <Hero />
        <Newsletter />
        <Ecosystem_Section />
        <Products_section />
        <Roadmap_Section />
        <Fotter />
      </div>
    </>
  );
}
