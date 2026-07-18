"use client";
import Link from "next/link";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate your newsletter API here
    alert(`Thanks! You'll receive 10% off on your first order.`);
    setEmail("");
  };

  return (
    <section className="cta-section section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx>{`
        .cta-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          background: linear-gradient(135deg, #1B3A6B 0%, #1e3e72 100%);
          border-radius: 32px;
          padding: 50px 40px;
          box-shadow: 0 20px 35px rgba(27, 58, 107, 0.2);
        }
        .cta-box {
          color: white;
        }
        .cta-box h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .cta-box p {
          opacity: 0.9;
          margin-bottom: 25px;
          line-height: 1.5;
        }
        .newsletter-form {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .newsletter-form input {
          flex: 1;
          padding: 14px 20px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          outline: none;
        }
        .newsletter-form button {
          background: #29B6D8;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          color: #1B3A6B;
          cursor: pointer;
          transition: all 0.2s;
        }
        .newsletter-form button:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }
        .support-links {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .support-links a {
          color: white;
          background: rgba(255,255,255,0.15);
          padding: 10px 20px;
          border-radius: 40px;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .support-links a:hover {
          background: #29B6D8;
          color: #1B3A6B;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .cta-wrapper {
            grid-template-columns: 1fr;
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="cta-wrapper">
          {/* Left: Newsletter */}
          <div className="cta-box">
            <h3>Get 10% off your first order</h3>
            <p>Subscribe to our newsletter and receive exclusive deals, early access to sales, and a 10% discount coupon.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Right: Customer support */}
          <div className="cta-box">
            <h3>Need help? We're here 24/7</h3>
            <p>Our customer support team is ready to assist you with orders, deliveries, or any questions.</p>
            <div className="support-links">
              <Link href="/contact">
                <i className="tji-chat-bubble"></i> Live Chat
              </Link>
              <Link href="tel:+2348023456789">
                <i className="tji-phone"></i> Call Us
              </Link>
              <Link href="/faq">
                <i className="tji-question"></i> FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;