import About from "./components/About";
import Contact from "./components/Contact";
import DataCarousel from "./components/DataCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import MobileNav from "./components/MobileNav";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <Services />
      <About />
      <Journey />
      <Work />
      <DataCarousel />
      <Contact />
      <Footer/>
    </>
  );
}
