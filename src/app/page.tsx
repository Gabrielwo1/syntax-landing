import SiteNav from "@/components/SiteNav";
import SiteHero from "@/components/SiteHero";
import Mentorias from "@/components/Mentorias";
import ComoFunciona from "@/components/ComoFunciona";
import Beneficios from "@/components/Beneficios";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import SiteFooter from "@/components/SiteFooter";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <SiteHero />
        <Mentorias />
        <ComoFunciona />
        <Beneficios />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
