import Hero from "@/components/Hero";
import ProximasFechas from "@/components/ProximasFechas";
import FechasPasadas from "@/components/FechasPasadas";
import EquiposSection from "@/components/EquiposSection";
import Contador from "@/components/Contador";
import NewsSection from "@/components/NewsSection";
import SubNewsletter from "@/components/SubNewsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] overflow-x-hidden">
      <Hero />
      <Contador />
      <ProximasFechas />
      <FechasPasadas />
      <EquiposSection />
      <NewsSection />
      <SubNewsletter />
      <Footer />
    </main>
  );
}
