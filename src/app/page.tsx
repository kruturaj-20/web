import Hero from "@/components/sections/Hero";
// import ClientTrust from "@/components/sections/ClientTrust";
import MetricStats from "@/components/sections/MetricStats";
// import Integrations from "@/components/sections/Integrations";
// import ProblemSolution from "@/components/sections/ProblemSolution";
import PlatformDemo from "@/components/sections/PlatformDemo";
// import GlobalMap from "@/components/sections/GlobalMap";
// import SecurityTrust from "@/components/sections/SecurityTrust";
// import Services from "@/components/sections/Services"; // Renamed to Features visually
// import AutomatedPipeline from "@/components/sections/AutomatedPipeline";
// import VelocityGrid from "@/components/sections/VelocityGrid";
// import ProductLayers from "@/components/sections/ProductLayers";
// import TechnicalBento from "@/components/sections/TechnicalBento";
import CodeToCloud from "@/components/sections/CodeToCloud";
// import PlatformEcosystem from "@/components/sections/PlatformEcosystem";
// import Process from "@/components/sections/Process"; // Renamed to How it Works visually
import WhyChooseUs from "@/components/sections/WhyChooseUs"; // Renamed to Benefits visually
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ClientTrust /> */}
      <MetricStats />
      {/* <Integrations /> */}
      {/* <ProblemSolution /> */}
      <PlatformDemo />
      {/* <GlobalMap /> */}
      {/* <SecurityTrust /> */}
      {/* <Services /> */}
      {/* <AutomatedPipeline /> */}
      {/* <VelocityGrid /> */}
      {/* <ProductLayers /> */}
      {/* <TechnicalBento /> */}
      <CodeToCloud />
      {/* <PlatformEcosystem /> */}
      {/* <Process /> */}
      <WhyChooseUs />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
