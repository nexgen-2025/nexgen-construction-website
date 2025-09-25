import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhatsappIcon from "./components/WhatsappIcon";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsappIcon />
    </main>
  );
}
