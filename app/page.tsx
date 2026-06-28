import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccreditationStrip from "@/components/AccreditationStrip";
import WhyCompliance from "@/components/WhyCompliance";
import WhatWeDo from "@/components/WhatWeDo";
import StartJourney from "@/components/StartJourney";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Soc2Journey from "@/components/Soc2Journey";
import IndustriesDeliverables from "@/components/IndustriesDeliverables";
import Footer from "@/components/Footer";
import FeedbackTab from "@/components/FeedbackTab";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <TopBar />
      <Header />
      <Hero />
      <AccreditationStrip />
      <WhyCompliance />
      <WhatWeDo />
      <StartJourney />
      <HowWeWork />
      <WhyChooseUs />
      <Soc2Journey />
      <IndustriesDeliverables />
      <Footer />
      <FeedbackTab />
    </main>
  );
}
