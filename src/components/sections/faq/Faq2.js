"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
  // E‑commerce focused FAQs for 9ja Mart
  const items = [
    {
      title: "How do I place an order on 9ja Mart?",
      desc: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay via card, bank transfer, or cash on delivery (available in select areas).",
      initActive: true,
    },
    {
      title: "What are your delivery timelines?",
      desc: "We process orders within 24 hours. Lagos deliveries take 1-2 business days, other states 2-5 business days. You'll receive a tracking link once your order ships.",
      initActive: false,
    },
    {
      title: "How can I track my order?",
      desc: "After dispatch, we'll send you a tracking number via SMS and email. You can also log into your account and view order status under 'My Orders'.",
      initActive: false,
    },
    {
      title: "What is your return policy?",
      desc: "We offer a 30‑day return policy for unused items in original packaging. Contact our support team within 7 days of delivery to initiate a return.",
      initActive: false,
    },
    {
      title: "What payment methods do you accept?",
      desc: "We accept card payments (Visa, Mastercard), bank transfers, and pay on delivery (selected areas). All online transactions are secure and encrypted.",
      initActive: false,
    },
  ];

  return (
    <section
      className={`tj-faq-section section-gap ${
        type === 3 || type === 4 ? "" : "tj-arrange-container-2"
      }`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <style jsx>{`
        .sec-heading .sub-title {
          color: #29B6D8 !important;
        }
        .sec-heading .sec-title {
          color: #1B3A6B !important;
        }
        .sec-heading .sec-title span {
          color: #29B6D8 !important;
        }
        .desc {
          color: #4a5568 !important;
        }
        .faq-img-area .title {
          color: #ffffff;
          background: rgba(27,58,107,0.7);
          padding: 15px;
          border-radius: 16px;
          display: inline-block;
        }
        .call-box {
          background: #1B3A6B;
          border-radius: 24px;
          padding: 20px;
          text-align: center;
        }
        .call-box .title {
          color: #ffffff;
          margin-bottom: 10px;
        }
        .call-icon i {
          color: #29B6D8;
          font-size: 2rem;
        }
        .call-box .number {
          color: #29B6D8;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: 8px;
          display: inline-block;
        }
        .call-box .number:hover {
          color: #ffffff;
        }
      `}</style>

      <div className="container">
        <div className="row justify-content-between">
          {type === 3 ? (
            <div className="col-lg-4">
              <div className="content-wrap">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box"></i>Common Questions
                  </span>
                  <h2 className="sec-title title-anim">
                    Need <span>Help?</span> Start Here...
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                  Find quick answers to popular questions about orders, delivery,
                  returns, and more at 9ja Mart.
                </p>
                <div className="wow fadeInUp" data-wow-delay=".8s">
                  <ButtonPrimary text={"Contact Support"} url={"/contact"} />
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-6">
              <div
                className={`faq-img-area ${
                  type === 3 ? "" : "tj-arrange-item-2"
                }`}
              >
                <div className="faq-img overflow-hidden" style={{ position: "relative", borderRadius: "24px" }}>
                  {/* Working Unsplash image – customer support / office supplies */}
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=585&h=629&fit=crop"
                    alt="9ja Mart support team"
                    width={585}
                    height={629}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                  <h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
                    Need Help? Start Here...
                  </h2>
                </div>
                <div className="box-area">
                  <div className="call-box">
                    <h4 className="title">Talk to our support team</h4>
                    <span className="call-icon">
                      <i className="tji-phone"></i>
                    </span>
                    <Link className="number" href="tel:+2348023456789">
                      <span>+234 802 345 6789</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={`col-lg-${type === 3 ? "8" : "6"}`}>
            <BootstrapWrapper>
              <div
                className={`accordion tj-faq ${
                  type === 2 || type === 4 ? "style-2" : ""
                } ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
                id="faqOne"
              >
                {items?.length
                  ? items.map((item, idx) => (
                      <FaqItem key={idx} item={item} idx={idx} />
                    ))
                  : ""}
              </div>
            </BootstrapWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq2;