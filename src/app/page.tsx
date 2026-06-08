import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Instagram from "@/components/Instagram";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Instagram />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
