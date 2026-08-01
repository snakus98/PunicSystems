import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccreditationStrip from "@/components/AccreditationStrip";
import WhyCompliance from "@/components/WhyCompliance";
import PracticalCompliance from "@/components/PracticalCompliance";
import WhatWeDo from "@/components/WhatWeDo";
import StartJourney from "@/components/StartJourney";
import HowWeWork from "@/components/HowWeWork";
import FaqSection from "@/components/FaqSection";
import LetsTalk from "@/components/LetsTalk";
import WhyChooseUs from "@/components/WhyChooseUs";
import Soc2Journey from "@/components/Soc2Journey";
import IndustriesDeliverables from "@/components/IndustriesDeliverables";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <TopBar />
      <Header />
      <Hero />
      <AccreditationStrip />
      <div>
        <WhyCompliance />
        <PracticalCompliance />
        <WhatWeDo />
        <StartJourney />
        <WhyChooseUs />
        <Soc2Journey />
        <IndustriesDeliverables />
        <HowWeWork />
        <FaqSection />
        <LetsTalk />
      </div>
      <Footer />
    </main>
  );
}
