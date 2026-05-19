import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-poppins">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
