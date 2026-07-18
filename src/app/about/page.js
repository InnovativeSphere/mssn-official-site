"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About5 from "@/components/sections/about/About5";
import Features2 from "@/components/sections/features/Features2";
import Faq3 from "@/components/sections/faq/Faq3";
import Cta2 from "@/components/sections/cta/Cta2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Footer8 from "@/components/layout/footer/Footer8";
import Footer2 from "@/components/layout/footer/Footer2";

export default function About() {
  return (
    <div>
      <BackToTop />
      <Header /> {/* Non-sticky header */}
      <Header isStickyHeader={true} /> {/* Sticky header */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner
              title="About 9ja Mart"
              text="Nigeria’s Trusted Online Marketplace for Quality Stationery, Gadgets & Office Supplies"
            />
            <Features2 type={2} />
            <About5 type={2} />

            {/* --- WHY SHOP WITH US (values) --- */}
            <section style={{ padding: "60px 0", backgroundColor: "#ffffff" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "40px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>Why Choose Us</span>
                  <h2 style={{ color: "#1B3A6B", fontSize: "2rem", fontWeight: "700" }}>
                    We Put You First
                  </h2>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "30px"
                }}>
                  {[
                    { icon: "tji-truck", title: "Fast Delivery", text: "Same‑day dispatch & nationwide shipping. Order by 2pm for next‑day delivery in Lagos." },
                    { icon: "tji-shield", title: "Secure Payments", text: "Encrypted transactions, multiple payment options including pay on delivery." },
                    { icon: "tji-star", title: "Authentic Products", text: "100% genuine stationery, gadgets, and office supplies from trusted brands." },
                    { icon: "tji-support", title: "24/7 Support", text: "Dedicated customer care team ready to assist you anytime, anywhere." }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "#ffffff",
                      padding: "24px",
                      borderRadius: "20px",
                      textAlign: "center",
                      transition: "all 0.3s",
                      border: "1px solid rgba(27,58,107,0.1)",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.borderColor = "#29B6D8";
                      e.currentTarget.style.boxShadow = "0 15px 30px rgba(27,58,107,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(27,58,107,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                      <i className={item.icon} style={{ fontSize: "2.5rem", color: "#29B6D8", marginBottom: "15px", display: "inline-block" }}></i>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1B3A6B", marginBottom: "10px" }}>{item.title}</h3>
                      <p style={{ color: "#4a5568" }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- TRUSTED PARTNERS (brand strip) --- */}
            <section style={{ padding: "40px 0", backgroundColor: "#f8fafc" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "30px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>Trusted By</span>
                  <h3 style={{ color: "#1B3A6B", fontSize: "1.6rem", fontWeight: "600" }}>
                    Leading Brands & Thousands of Shoppers
                  </h3>
                </div>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "40px",
                  opacity: 0.8
                }}>
                  {/* Placeholder brand logos – replace with actual partner logos later */}
                  {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"].map((brand, idx) => (
                    <div key={idx} style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#1B3A6B",
                      background: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: "40px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      transition: "0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Faq3 type={3} />
            <Cta2 />
          </main>
          <Footer2 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  );
}