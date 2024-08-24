
import About from "@/components/About";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Line from "@/components/Line";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <About />
      <Line />
      <Services />
      <Line />
      <Partners />
      <Contact />
      <Line />
    </main>
  );
}
