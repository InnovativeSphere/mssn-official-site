"use client";

import BrandSlider1 from "@/components/shared/brands/BrandSlider1";

const Brands2 = () => {
  return (
    <section className="tj-client-section section-top-gap">
      {/* Brand color overrides */}
      <style jsx global>{`
        .tj-client-section .sec-title {
          color: #1B3A6B !important;
        }
        .tj-client-section .sec-title .client-numbers,
        .tj-client-section .sec-title .client-text {
          color: #29B6D8 !important;
          font-weight: 700;
        }
        .tj-client-section .sec-title .client-text {
          background: none;
          padding: 0;
        }
      `}</style>

      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div
              className="client-content style-2 wow fadeIn"
              data-wow-delay=".3s"
            >
              <h5 className="sec-title">
                Trusted by{" "}
                <span className="client-numbers">1000+</span> happy shoppers
                <br />
                at <span className="client-text">9ja Mart</span>
              </h5>
            </div>
            <BrandSlider1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands2;