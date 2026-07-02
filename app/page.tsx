import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { NichesPlans } from "@/components/sections/NichesPlans";
import { Problems } from "@/components/sections/Problems";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Impact />
        <Problems />
        <Services />
        <Projects />
        <Process />
        <About />
        <NichesPlans />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
