"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import Link from "next/link";

const Contact2 = () => {
  return (
    <section className="tj-contact-section section-gap section-gap-x" style={{ backgroundColor: "#ffffff" }}>
      <style jsx>{`
        .contact-form .form-input input,
        .contact-form .form-input textarea,
        .tj-nice-select-box .nice-select {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 16px;
          width: 100%;
          transition: 0.2s;
          color: #1B3A6B;
        }
        .contact-form .form-input input:focus,
        .contact-form .form-input textarea:focus,
        .tj-nice-select-box .nice-select.open {
          border-color: #29B6D8;
          outline: none;
          box-shadow: 0 0 0 2px rgba(41,182,216,0.2);
        }
        .tj-nice-select-box .nice-select .option.selected {
          background-color: #29B6D8;
          color: #1B3A6B;
        }
        .tj-nice-select-box .nice-select .option:hover {
          background-color: rgba(41,182,216,0.1);
        }
        .global-map-img {
          position: relative;
        }
        .location-tooltip {
          background: #1B3A6B; /* dark navy background */
          color: #ffffff; /* white text */
          border-radius: 16px;
          padding: 12px;
          min-width: 200px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .location-tooltip span {
          color: #29B6D8; /* cyan for labels */
          font-weight: bold;
        }
        .location-tooltip p {
          color: #ffffff;
          margin: 4px 0;
        }
        .location-tooltip a {
          color: #29B6D8;
          text-decoration: none;
          display: block;
        }
        .location-tooltip a:hover {
          text-decoration: underline;
          color: #ffffff;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="global-map wow fadeInUp" data-wow-delay=".3s">
              <div className="global-map-img" style={{ position: "relative" }}>
                {/* Map image – replace with Nigeria-focused graphic later if needed */}
                <img src="/images/bg/map.svg" alt="Office locations map" style={{ width: "100%", borderRadius: "24px" }} />
                
                {/* Head office - Lagos */}
                <div className="location-indicator loc-1" style={{ position: "absolute", top: "40%", left: "30%" }}>
                  <div className="location-tooltip">
                    <span>Head office:</span>
                    <p>123 Lagos Business District, Victoria Island, Lagos, Nigeria</p>
                    <Link href="tel:+2348023456789">P: +234 802 345 6789</Link>
                    <Link href="mailto:hello@9jamart.ng">M: hello@9jamart.ng</Link>
                  </div>
                </div>
                
                {/* Regional office - Abuja */}
                <div className="location-indicator loc-2" style={{ position: "absolute", top: "25%", left: "55%" }}>
                  <div className="location-tooltip">
                    <span>Abuja office:</span>
                    <p>Central Business District, Abuja, Nigeria</p>
                    <Link href="tel:+2348034567890">P: +234 803 456 7890</Link>
                    <Link href="mailto:abuja@9jamart.ng">M: abuja@9jamart.ng</Link>
                  </div>
                </div>
                
                {/* Regional office - Port Harcourt */}
                <div className="location-indicator loc-3" style={{ position: "absolute", top: "55%", left: "70%" }}>
                  <div className="location-tooltip">
                    <span>Port Harcourt office:</span>
                    <p>Trans Amadi Industrial Layout, Port Harcourt, Nigeria</p>
                    <Link href="tel:+2348045678901">P: +234 804 567 8901</Link>
                    <Link href="mailto:portharcourt@9jamart.ng">M: portharcourt@9jamart.ng</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form style-2 wow fadeInUp" data-wow-delay=".4s">
              <div className="sec-heading">
                <span className="sub-title" style={{ color: "#29B6D8" }}>
                  <i className="tji-box"></i> Get in Touch
                </span>
                <h2 className="sec-title" style={{ color: "#1B3A6B" }}>
                  We'd Love to <span>Hear From You</span>
                </h2>
              </div>
              <form id="contact-form-2">
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="text" name="cfName2" placeholder="Full Name *" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="email" name="cfEmail2" placeholder="Email Address *" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="tel" name="cfPhone2" placeholder="Phone number *" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <ReactNiceSelect
                            selectedIndex={0}
                            options={[
                              { value: "0", optionName: "Select an option" },
                              { value: "1", optionName: "Order Issue" },
                              { value: "2", optionName: "Product Inquiry" },
                              { value: "3", optionName: "Return / Refund" },
                              { value: "4", optionName: "Partnership Inquiry" },
                              { value: "5", optionName: "General Feedback" },
                              { value: "6", optionName: "Bulk Order / Corporate" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-input message-input">
                      <textarea
                        name="cfMessage2"
                        id="message"
                        placeholder="Type your message *"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <ButtonPrimary
                      text={"Send Message"}
                      type={"submit"}
                      style={{
                        backgroundColor: "#29B6D8",
                        borderColor: "#29B6D8",
                        color: "#1B3A6B",
                        fontWeight: "bold",
                      }}
                    />
                  </div>
                </div>
              </form>
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
    </section>
  );
};

export default Contact2;