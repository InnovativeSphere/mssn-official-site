"use client";
import { useEffect, useState, useRef } from "react";
import Footer2 from "@/components/layout/footer/Footer2";
import About3 from "@/components/sections/about/About3";
import Hero2 from "@/components/sections/hero/Hero2";
import Services2 from "@/components/sections/services/Services2";
import Process from "@/components/sections/process/Process";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import BackToTop from "@/components/shared/others/BackToTop";
import Header from "@/components/layout/header/Header";
import FAQ from "@/components/faq";
import AppShowcase from "@/components/sections/showcase/AppShowcase";
import ContactUs from "@/components/sections/contact/ContactUs";
import RecentEvents from "@/components/sections/events/RecentEvents";

// ==========================================
// 1. SELF-CONTAINED REVEAL SECTION
// ==========================================
const RevealSection = ({ children, className = "" }) => {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-section ${isVisible ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

// ==========================================
// 2. SCROLL PROGRESS (100% Gold with Diamond Tip)
// ==========================================
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: '#C59D5F', // Inline styles override EVERYTHING
        }}
      >
        {/* Diamond Tip */}
        <div className="scroll-progress-diamond" />
      </div>
    </div>
  );
};

export default function Home2() {
  return (
    <div className="page-wrapper">
      <ScrollProgress />
      <BackToTop />
      <Header />

      <main className="main-content">
        <Hero2 />
        <RevealSection><About3 /></RevealSection>
        <RevealSection><Services2 /></RevealSection>
        <RevealSection><Process /></RevealSection>
        <RevealSection><RecentEvents /></RevealSection>
        <RevealSection><Testimonials2 /></RevealSection>
        <RevealSection><PricingPlan /></RevealSection>
        <RevealSection><AppShowcase /></RevealSection>
        <RevealSection><ContactUs /></RevealSection>
        <RevealSection><FAQ /></RevealSection>
      </main>

      <Footer2 />
    </div>
  );
}