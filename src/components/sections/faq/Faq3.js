'use client'; 
import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const Faq3 = () => {
  // E‑commerce focused FAQs for 9ja Mart
  const items = [
    {
      title: "What products does 9ja Mart sell?",
      desc: "We specialize in quality stationery, smart gadgets, office supplies, and everyday essentials – all sourced from trusted brands. No food items, no groceries – just the tools you need for work, school, and home.",
      initActive: true,
    },
    {
      title: "How do I place an order?",
      desc: "Simply browse our product categories, add items to your cart, and proceed to checkout. You can pay via card, bank transfer, or cash on delivery (select areas). We’ll confirm your order via email and SMS.",
      initActive: false,
    },
    {
      title: "What are your delivery timelines?",
      desc: "We process orders within 24 hours. Lagos deliveries take 1‑2 business days; other states take 2‑5 business days. You’ll receive a tracking link once your order ships.",
      initActive: false,
    },
    {
      title: "Can I return a product?",
      desc: "Yes – we offer a 30‑day return policy for unused items in original packaging. Contact our support team within 7 days of delivery to initiate a return.",
      initActive: false,
    },
    {
      title: "Is my payment secure?",
      desc: "Absolutely. We use encrypted payment gateways and never store your card details. You can also choose pay on delivery for extra peace of mind.",
      initActive: false,
    },
  ];

  return (
    <section className="tj-faq-section section-gap section-separator" style={{ backgroundColor: "#ffffff" }}>
      {/* Brand color overrides */}
      <style jsx global>{`
        .tj-faq-section .sub-title {
          color: #29B6D8 !important;
        }
        .tj-faq-section .sec-title {
          color: #1B3A6B !important;
        }
        .tj-faq-section .sec-title span {
          color: #29B6D8 !important;
        }
        /* Override FaqItem2 colors (if using bootstrap accordion) */
        .tj-faq .accordion-button {
          background-color: #f8fafc !important;
          color: #1B3A6B !important;
          font-weight: 600;
        }
        .tj-faq .accordion-button:not(.collapsed) {
          background-color: rgba(41, 182, 216, 0.1) !important;
          color: #29B6D8 !important;
        }
        .tj-faq .accordion-button:focus {
          box-shadow: 0 0 0 0.25rem rgba(41, 182, 216, 0.25) !important;
          border-color: #29B6D8 !important;
        }
        .tj-faq .accordion-body {
          color: #4a5568 !important;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>Frequently Asked Questions
              </span>
              <h2 className="sec-title title-anim">
                Need <span>Help?</span> Start Here...
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <BootstrapWrapper>
                <div className="accordion tj-faq pt-0" id="faqTwo">
                  {items?.length
                    ? items.map((item, idx) => (
                        <FaqItem2 key={idx} item={item} idx={idx} />
                      ))
                    : ""}
                </div>
              </BootstrapWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq3;