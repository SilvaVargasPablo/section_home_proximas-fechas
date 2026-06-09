import ProximasFechas from "@/components/ProximasFechas";
import FechasPasadas from "@/components/FechasPasadas";
import EquiposSection from "@/components/EquiposSection";
import Contador from "@/components/Contador";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] overflow-x-hidden">
      <Contador />
      <ProximasFechas />
      <FechasPasadas />
      <EquiposSection />
    </main>
  );
}
