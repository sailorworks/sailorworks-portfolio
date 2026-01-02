import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] overflow-x-hidden selection:bg-red-900/50 selection:text-white">
      <Hero />
      
      <BentoGrid />

      <TechStack />

      <Footer />
    </main>
  );
}
