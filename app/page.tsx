"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhatsappIcon from "./components/WhatsappIcon";
import ConsultationPopup from "./components/ConsultationPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupStage, setPopupStage] = useState(0); // 0 = not shown yet

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const showPopupWithDelay = (delaySeconds: number, stage: number) => {
      timer = setTimeout(() => {
        setShowPopup(true);
        setPopupStage(stage);
      }, delaySeconds * 1000);
    };

    // 💡 Use smaller numbers while testing (5 → 300 for real)
    if (popupStage === 0) {
      showPopupWithDelay(5, 1); // change to 300 for production
    } else if (popupStage === 1) {
      showPopupWithDelay(20, 2);
    } else if (popupStage === 2) {
      showPopupWithDelay(40, 3);
    }

    return () => clearTimeout(timer);
  }, [popupStage]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupStage((prev) => (prev < 3 ? prev + 1 : prev));
  };

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

      <ConsultationPopup showPopup={showPopup} onClose={handleClosePopup} />
    </main>
  );
}
