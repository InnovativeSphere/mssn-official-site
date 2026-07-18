"use client";

import { useState } from "react";
import Footer from "@/components/layout/footer/Footer";
import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import Faq3 from "@/components/sections/faq/Faq3";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";
import Footer2 from "@/components/layout/footer/Footer2";

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <BackToTop />
      <Header />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner
              title="Frequently Asked Questions"
              text="Find quick answers about orders, delivery, returns & more"
            />

            {/* Back to home link */}
            <div className="container" style={{ marginTop: "-30px", marginBottom: "20px" }}>
              <Link
                href="/"
                style={{
                  color: "#29B6D8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                ← Back to home
              </Link>
            </div>

            {/* Search FAQ bar (client‑side filtering – optional) */}
            <div className="container" style={{ marginBottom: "40px" }}>
              <div
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  placeholder="Search for a question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: "50px",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    color: "#1B3A6B",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#29B6D8";
                    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(41,182,216,0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <i
                  className="tji-search"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#29B6D8",
                    pointerEvents: "none",
                  }}
                ></i>
              </div>
            </div>

            {/* Main FAQ components */}
            <Faq2 type={4} />
            <Faq3 />

            {/* --- Still have questions? --- */}
            <section style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "40px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>
                    Still need help?
                  </span>
                  <h3 style={{ color: "#1B3A6B", fontSize: "1.8rem", fontWeight: "700" }}>
                    We’re here for you
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "30px",
                  }}
                >
                  {[
                    {
                      icon: "tji-phone",
                      title: "Call us",
                      text: "Speak directly with a support agent",
                      action: "tel:+2348023456789",
                      linkText: "+234 802 345 6789",
                    },
                    {
                      icon: "tji-mail",
                      title: "Email us",
                      text: "We’ll reply within 24 hours",
                      action: "mailto:hello@9jamart.ng",
                      linkText: "hello@9jamart.ng",
                    },
                    {
                      icon: "tji-chat-bubble",
                      title: "Live chat",
                      text: "Chat with our team in real time",
                      action: "#",
                      linkText: "Start chat →",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        minWidth: "220px",
                        background: "#ffffff",
                        borderRadius: "24px",
                        padding: "30px 20px",
                        textAlign: "center",
                        border: "1px solid rgba(27,58,107,0.1)",
                        transition: "all 0.3s ease",
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
                      }}
                    >
                      <i
                        className={item.icon}
                        style={{ fontSize: "2.5rem", color: "#29B6D8", marginBottom: "15px", display: "inline-block" }}
                      ></i>
                      <h4 style={{ color: "#1B3A6B", marginBottom: "8px" }}>{item.title}</h4>
                      <p style={{ color: "#4a5568", marginBottom: "15px" }}>{item.text}</p>
                      <Link
                        href={item.action}
                        style={{
                          color: "#29B6D8",
                          textDecoration: "none",
                          fontWeight: "600",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#1B3A6B")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#29B6D8")}
                      >
                        {item.linkText}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- Helpful links (quick navigation) --- */}
            <section style={{ padding: "40px 0", backgroundColor: "#ffffff" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "30px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>Useful resources</span>
                  <h3 style={{ color: "#1B3A6B", fontSize: "1.6rem", fontWeight: "600" }}>
                    Explore more help topics
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  {[
                    { text: "Shipping policy", link: "/home-02" },
                    { text: "Returns & refunds", link: "/home-02" },
                    { text: "Payment methods", link: "/home-02" },
                    { text: "My account", link: "/home-02" },
                    { text: "Contact support", link: "/home-02" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      style={{
                        color: "#1B3A6B",
                        textDecoration: "none",
                        padding: "8px 20px",
                        borderRadius: "40px",
                        backgroundColor: "#f8fafc",
                        transition: "all 0.2s",
                        fontWeight: "500",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#29B6D8";
                        e.currentTarget.style.color = "#1B3A6B";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8fafc";
                        e.currentTarget.style.color = "#1B3A6B";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* <Cta /> */}
          </main>
          <Footer2 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  );
}