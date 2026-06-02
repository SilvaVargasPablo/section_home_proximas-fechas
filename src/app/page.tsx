import ProximasFechas from "@/components/ProximasFechas";
import FechasPasadas from "@/components/FechasPasadas";
import EquiposSection from "@/components/EquiposSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <ProximasFechas />
      <FechasPasadas />
      <EquiposSection />
    </main>
  );
}
