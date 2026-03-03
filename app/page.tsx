import Expertise from "@/components/sections/expertise";
import Footer from "@/components/sections/footer.";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/experience";
import { ScrollProgress, CursorGlow } from "@/components/ui/shared";
import IndependentWork from "@/components/sections/independent-work";
import { CommandHUD } from "@/components/ui/common-hud";
import { KernelPreloader } from "@/components/ui/kernel-preloader";

export default function Portfolio() {
  return (
    <main className="bg-[#030303] min-h-screen text-gray-200">
      <KernelPreloader />
      <CommandHUD/>
      <ScrollProgress />
      <CursorGlow />

      <Hero />

      <section aria-label="Technical Expertise">
        <Expertise />
      </section>

     

      <section aria-label="Projects">
        <IndependentWork />
      </section>

    

      <Footer />
    </main>
  );
}
