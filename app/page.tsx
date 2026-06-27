import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccreditationStrip from "@/components/AccreditationStrip";
import EssentialIndustries from "@/components/EssentialIndustries";
import CustomerStories from "@/components/CustomerStories";
import MicrosoftPartner from "@/components/MicrosoftPartner";
import Awards from "@/components/Awards";
import Accreditations from "@/components/Accreditations";
import Industries from "@/components/Industries";
import LatestInsights from "@/components/LatestInsights";
import Careers from "@/components/Careers";
import SpeakToTeam from "@/components/SpeakToTeam";
import Footer from "@/components/Footer";
import FeedbackTab from "@/components/FeedbackTab";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <TopBar />
      <Header />
      <Hero />
      <AccreditationStrip />
      <EssentialIndustries />
      <CustomerStories />
      <MicrosoftPartner />
      <Awards />
      <Accreditations />
      <Industries />
      <LatestInsights />
      <Careers />
      <SpeakToTeam />
      <Footer />
      <FeedbackTab />
    </main>
  );
}
