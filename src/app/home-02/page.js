import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import Hero2 from "@/components/sections/hero/Hero2";
import Services2 from "@/components/sections/services/Services2";
import Process from "@/components/sections/process/Process";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home2() {
  return (
    <div>
      <BackToTop />
      <Header />
      <main>
        <Hero2 />           {/* Will add download buttons */}
        <About3 />          {/* → What is 9jaMart */}
        <Services2 />       {/* → Features / Benefits */}
        <Process />         {/* → How It Works */}
        <Testimonials2 />   {/* → Social Proof */ }
        <PricingPlan />     {/* → Tier Structure */}
      </main>
      <Footer2 />
      <ClientWrapper />
    </div>
  );
}