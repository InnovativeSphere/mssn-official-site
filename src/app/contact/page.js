"use client";

import Footer from "@/components/layout/footer/Footer";
import Footer2 from "@/components/layout/footer/Footer2";
import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Contact2 from "@/components/sections/contact/Contact2";
import Contact3 from "@/components/sections/contact/Contact3";
import ContactTop from "@/components/sections/contact/ContactTop";
import Cta from "@/components/sections/cta/Cta";
import Cta2 from "@/components/sections/cta/Cta2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <BackToTop />
      <Header />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner title={"Contact Us"} text={"We’re here to help – reach out anytime"} />

            {/* Subtle back‑to‑home link */}
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
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                ← Back to home
              </Link>
            </div>

            <ContactTop />
            <Contact2 />

            {/* --- Trust & response badges --- */}
            <section style={{ padding: "40px 0", backgroundColor: "#f8fafc" }}>
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "30px",
                    textAlign: "center",
                  }}
                >
                  {[
                    { icon: "tji-chat-bubble", text: "Fast response – within 24 hours" },
                    { icon: "tji-shield", text: "100% secure & confidential" },
                    { icon: "tji-support", text: "Expert support team" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        minWidth: "180px",
                        padding: "20px",
                        borderRadius: "20px",
                        background: "#ffffff",
                        border: "1px solid rgba(27,58,107,0.1)",
                        transition: "all 0.3s ease",
                        cursor: "default",
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
                        style={{
                          fontSize: "2rem",
                          color: "#29B6D8",
                          display: "block",
                          marginBottom: "8px",
                          transition: "transform 0.2s",
                        }}
                      />
                      <span style={{ color: "#1B3A6B", fontWeight: "500" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- Additional contact channels & hours --- */}
            <section style={{ padding: "40px 0", backgroundColor: "#ffffff" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "30px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>Other ways to reach us</span>
                  <h3 style={{ color: "#1B3A6B", fontSize: "1.6rem", fontWeight: "600" }}>
                    We’re available 7 days a week
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "30px",
                    textAlign: "center",
                  }}
                >
                  {[
                    { icon: "tji-phone", title: "Call us", contact: "+234 802 345 6789", hours: "Mon–Fri: 9am–8pm", link: "tel:+2348023456789" },
                    { icon: "tji-chat-bubble", title: "Live chat", contact: "Click the chat icon", hours: "Available 24/7", link: "#" },
                    { icon: "tji-mail", title: "Email us", contact: "hello@9jamart.ng", hours: "Replies within 24h", link: "mailto:hello@9jamart.ng" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        minWidth: "200px",
                        padding: "25px 20px",
                        borderRadius: "20px",
                        border: "1px solid rgba(27,58,107,0.1)",
                        background: "#ffffff",
                        transition: "all 0.3s ease",
                        cursor: "default",
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
                        style={{
                          fontSize: "2rem",
                          color: "#29B6D8",
                          marginBottom: "12px",
                          display: "block",
                          transition: "transform 0.2s",
                        }}
                      />
                      <h4 style={{ color: "#1B3A6B", marginBottom: "8px" }}>{item.title}</h4>
                      <Link
                        href={item.link}
                        style={{
                          color: "#29B6D8",
                          textDecoration: "none",
                          fontWeight: "500",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#1B3A6B")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#29B6D8")}
                      >
                        {item.contact}
                      </Link>
                      <p style={{ fontSize: "0.8rem", color: "#4a5568", marginTop: "8px" }}>{item.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- FAQ teaser (common questions) --- */}
            <section style={{ padding: "40px 0", backgroundColor: "#f8fafc" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "30px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>Quick answers</span>
                  <h3 style={{ color: "#1B3A6B", fontSize: "1.6rem", fontWeight: "600" }}>
                    Frequently asked questions
                  </h3>
                </div>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                  {[
                    { q: "How do I track my order?", a: "You'll receive a tracking link via SMS/email after dispatch." },
                    { q: "What payment methods do you accept?", a: "Card, bank transfer, and pay on delivery (selected areas)." },
                    { q: "Can I return an item?", a: "Yes – 30‑day returns for unused items in original packaging." },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      style={{
                        marginBottom: "15px",
                        padding: "18px 20px",
                        background: "#ffffff",
                        borderRadius: "16px",
                        border: "1px solid rgba(27,58,107,0.05)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateX(6px)";
                        e.currentTarget.style.borderColor = "#29B6D8";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(27,58,107,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.borderColor = "rgba(27,58,107,0.05)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <h4 style={{ color: "#1B3A6B", marginBottom: "8px", fontSize: "1.1rem" }}>{faq.q}</h4>
                      <p style={{ color: "#4a5568", margin: 0 }}>{faq.a}</p>
                    </div>
                  ))}
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <Link
                      href="/faq"
                      style={{
                        color: "#29B6D8",
                        textDecoration: "none",
                        fontWeight: "500",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#1B3A6B";
                        e.currentTarget.style.textDecoration = "underline";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#29B6D8";
                        e.currentTarget.style.textDecoration = "none";
                      }}
                    >
                      View all FAQs →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Optional CTA (commented) – uncomment if needed */}
            {/* <Cta2 /> */}
          </main>
          <Footer2 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  );
}