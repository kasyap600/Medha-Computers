import { BackToTop } from "./components/ui/BackToTop";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { StickyCtaBar } from "./components/ui/StickyCtaBar";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { AIHighlight } from "./components/sections/AIHighlight";
import { CampusGallery } from "./components/sections/CampusGallery";
import { Contact } from "./components/sections/Contact";
import { Courses } from "./components/sections/Courses";
import { FAQ } from "./components/sections/FAQ";
import { FeesOffers } from "./components/sections/FeesOffers";
import { Hero } from "./components/sections/Hero";
import { Testimonials } from "./components/sections/Testimonials";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      <StickyCtaBar />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <About />
        <AIHighlight />
        <Courses />
        <WhyChooseUs />
        <Testimonials />
        <FeesOffers />
        <FAQ />
        <CampusGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
