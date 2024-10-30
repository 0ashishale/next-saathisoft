
import About from "@/components/About";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Line from "@/components/Line";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-16 gap-8">
      <Hero />
      <Services />
      <Line />
      <About />
      <Line />
      <Partners />
      <Contact />
      <Line />
    </main>
  );
}
