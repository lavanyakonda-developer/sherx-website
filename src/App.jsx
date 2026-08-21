import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeProvide from "./components/WhatWeProvide";
import ProgramsGrid from "./components/ProgramsGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeProvide />
        <ProgramsGrid />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
