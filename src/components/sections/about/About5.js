'use client';
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const About5 = () => {
  return (
    <section className="tj-about-section h6-about section-gap section-gap-x" style={{ backgroundColor: "#ffffff" }}>
      <style jsx global>{`
        .tj-about-section .sec-heading .sub-title {
          color: #29B6D8 !important;
        }
        .tj-about-section .sec-heading .sec-title {
          color: #1B3A6B !important;
        }
        .tj-about-section .desc {
          color: #4a5568 !important;
        }
        .tj-about-section .count-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #29B6D8;
          line-height: 1;
        }
        .tj-about-section .count-text {
          color: #1B3A6B;
          font-size: 0.9rem;
          margin-top: 8px;
          display: block;
        }
        .tj-about-section .tj-primary-btn {
          background-color: #1B3A6B !important;
          border-color: #1B3A6B !important;
        }
        .tj-about-section .tj-primary-btn:hover {
          background-color: #29B6D8 !important;
          border-color: #29B6D8 !important;
        }
        .box-area.h6-about-box {
          background: rgba(27, 58, 107, 0.85) !important;
          backdrop-filter: blur(4px);
          border-radius: 24px;
          padding: 20px;
        }
        .customers-box .customer-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #29B6D8;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="about-content-area h6-about-content style-1 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="sec-heading style-2 style-6">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Who We Are
                </span>
                <h2 className="sec-title title-anim">
                  Nigeria’s Trusted Marketplace for <span>Quality & Value</span>
                </h2>
                <p className="desc wow fadeInUp" data-wow-delay=".8s">
                  At 9ja Mart, we connect shoppers with premium stationery, smart gadgets,
                  and office essentials. We believe in making online shopping seamless,
                  secure, and fast – every single order, nationwide.
                </p>
              </div>
              <div className="h6-about-funfact-wrapper" style={{ marginTop: "30px" }}>
                <div className="h6-about-funfact" style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                  <div className="countup-item">
                    <div className="count-number">10K+</div>
                    <span className="count-text">Happy customers served nationwide</span>
                  </div>
                  <div className="countup-item">
                    <div className="count-number">98%</div>
                    <span className="count-text">On‑time delivery across Nigeria</span>
                  </div>
                </div>
                <div className="h6-about-funfact-shape">
                  <img src="/images/shape/about-counter-shape-blur.svg" alt="" />
                </div>
              </div>
              <div className="btn-area wow fadeInUp" data-wow-delay=".8s" style={{ marginTop: "30px" }}>
                <ButtonPrimary text={"Learn More About Us"} url={"/about"} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="about-img-area h6-about-img wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div
                className="about-img overflow-hidden wow fadeInRight"
                data-wow-delay=".8s"
                style={{ borderRadius: "24px", overflow: "hidden" }}
              >
                {/* Working Unsplash image – office desk with stationery & laptop */}
                <img
                  data-speed=".8"
                  src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=500&fit=crop"
                  alt="9ja Mart office and stationery"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div className="box-area h6-about-box" style={{ marginTop: "20px" }}>
                <div className="customers-box wow fadeInUp" data-wow-delay="1s">
                  <div className="customers">
                    <ul style={{ display: "flex", gap: "12px", listStyle: "none", padding: 0, margin: 0 }}>
                      <li>
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="customer"
                          className="customer-avatar"
                        />
                      </li>
                      <li>
                        <img
                          src="https://randomuser.me/api/portraits/women/68.jpg"
                          alt="customer"
                          className="customer-avatar"
                        />
                      </li>
                      <li>
                        <img
                          src="https://randomuser.me/api/portraits/men/45.jpg"
                          alt="customer"
                          className="customer-avatar"
                        />
                      </li>
                      <li>
                        <span style={{ background: "#29B6D8", width: "50px", height: "50px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#1B3A6B", fontWeight: "bold", fontSize: "1.2rem" }}>
                          <i className="tji-plus"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h5 className="customers-text wow fadeInUp" data-wow-delay=".5s" style={{ color: "#ffffff", marginTop: "15px", fontSize: "1rem" }}>
                    10,000+ happy customers and counting.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <img src="/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="bg-shape-2">
        <img src="/images/shape/pattern-3.svg" alt="" />
      </div>
      <div className="bg-shape-3">
        <img src="/images/shape/shape-blur.svg" alt="" />
      </div>
    </section>
  );
};

export default About5;