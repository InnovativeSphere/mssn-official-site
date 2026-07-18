'use client';
import Footer2 from "@/components/layout/footer/Footer2";
import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import WishlistPrimary from "@/components/sections/wishlist/WishlistPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
import WishlistContextProvider from "@/context_api/WshlistContext";
import Link from "next/link";

export default function Wishlist() {
  return (
    <div className="ecommerce">
      <BackToTop />
      <Header />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner title={"Wishlist"} text={"Your saved products"} />

            {/* Subtle back‑to‑shop link */}
            <div className="container" style={{ marginTop: "-30px", marginBottom: "20px" }}>
              <Link
                href="/shop"
                style={{
                  color: "#29B6D8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                ← Back to shop
              </Link>
            </div>

            <CartContextProvider>
              <WishlistContextProvider>
                <WishlistPrimary />
              </WishlistContextProvider>
            </CartContextProvider>

            {/* --- Trust/Safety Banner --- */}
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
                    { icon: "tji-truck", text: "Free delivery on orders over ₦50,000" },
                    { icon: "tji-shield", text: "Secure payments – pay on delivery or card" },
                    { icon: "tji-return", text: "30‑day easy returns" },
                  ].map((item, i) => (
                    <div key={i} style={{ flex: "1", minWidth: "180px" }}>
                      <i
                        className={item.icon}
                        style={{
                          fontSize: "2rem",
                          color: "#29B6D8",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      ></i>
                      <span style={{ color: "#1B3A6B", fontWeight: "500" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- You May Also Like (recommended products) --- */}
            <section style={{ padding: "40px 0", backgroundColor: "#ffffff" }}>
              <div className="container">
                <div className="sec-heading text-center" style={{ marginBottom: "30px" }}>
                  <span className="sub-title" style={{ color: "#29B6D8" }}>
                    You May Also Like
                  </span>
                  <h3 style={{ color: "#1B3A6B", fontSize: "1.6rem", fontWeight: "600" }}>
                    Popular picks from 9ja Mart
                  </h3>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "25px",
                  }}
                >
                  {/* Example recommended products – replace with dynamic product data later */}
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        background: "#ffffff",
                        borderRadius: "20px",
                        border: "1px solid rgba(27,58,107,0.1)",
                        padding: "15px",
                        textAlign: "center",
                        transition: "0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.borderColor = "#29B6D8";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "rgba(27,58,107,0.1)";
                      }}
                    >
                      <img
                        src={`https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop`}
                        alt="Product"
                        style={{ width: "100%", borderRadius: "12px", marginBottom: "12px" }}
                      />
                      <h4 style={{ color: "#1B3A6B", fontSize: "1rem", marginBottom: "6px" }}>
                        Stationery Set
                      </h4>
                      <div style={{ color: "#29B6D8", fontWeight: "bold", marginBottom: "10px" }}>
                        ₦5,000
                      </div>
                      <Link
                        href="/shop"
                        style={{
                          background: "#29B6D8",
                          color: "#1B3A6B",
                          padding: "6px 15px",
                          borderRadius: "30px",
                          textDecoration: "none",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                        }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Optional CTA – you can uncomment if needed */}
            {/* <Cta /> */}
          </main>
          <Footer2 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  );
}