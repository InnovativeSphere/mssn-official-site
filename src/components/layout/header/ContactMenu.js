"use client";
import Link from "next/link";

const ContactMenu = ({ isContactOpen, setIsContactOpen }) => {
  const handleClick = () => {
    setIsContactOpen(false);
  };

  return (
    <>
      <div
        className={`body-overlay ${isContactOpen ? "opened" : ""}`}
        onClick={handleClick}
      ></div>
      <div
        className={`tj-offcanvas-area d-none d-lg-block ${
          isContactOpen ? "opened" : ""
        }`}
        style={{ backgroundColor: "#1B3A6B", color: "#ffffff" }}
      >
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link
                  href="/"
                  className="mobile_logo"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  9ja Mart
                </Link>
              </div>
              <div className="hamburger_close">
                <button
                  className="hamburger_close_btn"
                  onClick={handleClick}
                  style={{ background: "none", border: "none", color: "#ffffff", fontSize: "1.5rem" }}
                >
                  <i className="fa-thin fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p style={{ color: "#e2e8f0" }}>
                Shop quality stationery, smart gadgets, and office essentials at 9ja Mart.
                Fast delivery, secure payments, and 24/7 customer support.
              </p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title" style={{ color: "#29B6D8" }}>Search our store</h5>
              <div className="hamburger_search">
                <form method="get" action="/shop">
                  <button
                    type="submit"
                    style={{
                      background: "#29B6D8",
                      border: "none",
                      borderRadius: "30px 0 0 30px",
                      padding: "10px 15px",
                      color: "#1B3A6B",
                    }}
                  >
                    <i className="tji-search"></i>
                  </button>
                  <input
                    type="search"
                    autoComplete="off"
                    name="s"
                    placeholder="Search for products..."
                    style={{
                      padding: "10px",
                      borderRadius: "0 30px 30px 0",
                      border: "1px solid #29B6D8",
                      outline: "none",
                      width: "80%",
                    }}
                  />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title" style={{ color: "#29B6D8" }}>Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item" style={{ marginBottom: "12px" }}>
                  <span className="subtitle" style={{ color: "#ffffff", fontWeight: "500", display: "block" }}>
                    Phone
                  </span>
                  <Link className="contact-link" href="tel:+2348023456789" style={{ color: "#29B6D8", textDecoration: "none" }}>
                    +234 802 345 6789
                  </Link>
                </div>
                <div className="contact-item" style={{ marginBottom: "12px" }}>
                  <span className="subtitle" style={{ color: "#ffffff", fontWeight: "500", display: "block" }}>
                    Email
                  </span>
                  <Link className="contact-link" href="mailto:hello@9jamart.ng" style={{ color: "#29B6D8", textDecoration: "none" }}>
                    hello@9jamart.ng
                  </Link>
                </div>
                <div className="contact-item" style={{ marginBottom: "12px" }}>
                  <span className="subtitle" style={{ color: "#ffffff", fontWeight: "500", display: "block" }}>
                    Location
                  </span>
                  <span className="contact-link" style={{ color: "#e2e8f0" }}>
                    123 Lagos Business District, Victoria Island, Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials" style={{ marginTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
            <h5 className="hamburger-title" style={{ color: "#29B6D8" }}>Follow Us</h5>
            <div className="social-links style-3">
              <ul style={{ display: "flex", gap: "12px", listStyle: "none", padding: 0 }}>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1B3A6B",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "36px",
                      height: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#29B6D8";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1B3A6B",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "36px",
                      height: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#29B6D8";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1B3A6B",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "36px",
                      height: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#29B6D8";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1B3A6B",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "36px",
                      height: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#29B6D8";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMenu;