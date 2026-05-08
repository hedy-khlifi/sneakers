import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Featured from "@/components/Featured";
import SneakersSection from "@/components/SneakersSection";
import NBASection from "@/components/NBASection";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <SneakersSection />
        <NBASection />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
