"use client";
import FeatureCard from "@/components/shared/cards/FeatureCard";
import FeatureCard2 from "@/components/shared/cards/FeatureCard2";
import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import FeatureCard4 from "@/components/shared/cards/FeatureCard4";

const Features2 = () => {
  // E‑commerce focused features for 9ja Mart (stationery, gadgets, office supplies)
  const features = [
    {
      id: 1,
      title: "Wide Product Range",
      icon: "tji-box", // or tji-grid
      desc: "From premium stationery to smart gadgets and office essentials – we offer thousands of quality products under one roof.",
    },
    {
      id: 2,
      title: "Fast Delivery",
      icon: "tji-truck",
      desc: "Enjoy same‑day dispatch and nationwide delivery. Order by 2pm for next‑day shipping in Lagos.",
    },
    {
      id: 3,
      title: "Secure Payments",
      icon: "tji-shield",
      desc: "Multiple payment options including card, bank transfer, and pay on delivery – all secured with encryption.",
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      icon: "tji-support",
      desc: "Our dedicated support team is always available to answer your questions and resolve issues quickly.",
    },
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx global>{`
        .tj-choose-section .sec-heading .sub-title {
          color: #29B6D8 !important;
        }
        .tj-choose-section .sec-heading .sec-title {
          color: #1B3A6B !important;
        }
        .tj-choose-section .sec-heading .sec-title span {
          color: #29B6D8 !important;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Why Shop With Us
              </span>
              <h2 className="sec-title title-anim">
                We Make Shopping <span>Easy & Reliable</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features?.length
            ? features.map((feature, idx) => (
                <div key={idx} className="col-xl-3 col-md-6">
                  <FeatureCard2 feature={feature} idx={idx} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Features2;