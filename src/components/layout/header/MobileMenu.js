import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const handleClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className={`body-overlay ${isMobileMenuOpen ? "opened" : ""}`}
        onClick={handleClick}
      ></div>
      <div
        className={`hamburger-area d-lg-none ${
          isMobileMenuOpen ? "opened" : ""
        }`}
        style={{ backgroundColor: "#1B3A6B" }}
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
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-thin fa-times"></i>
                </button>
              </div>
            </div>

            <MobileNavbar />

            <div className="hamburger-infos" style={{ marginTop: "30px" }}>
              <h5 className="hamburger-title" style={{ color: "#29B6D8", marginBottom: "15px" }}>
                Contact Info
              </h5>
              <div className="contact-info">
                <div className="contact-item" style={{ marginBottom: "12px" }}>
                  <span
                    className="subtitle"
                    style={{
                      color: "#ffffff",
                      fontWeight: "500",
                      display: "block",
                      fontSize: "0.8rem",
                    }}
                  >
                    Phone
                  </span>
                  <Link
                    className="contact-link"
                    href="tel:+2348023456789"
                    style={{ color: "#29B6D8", textDecoration: "none" }}
                  >
                    +234 802 345 6789
                  </Link>
                </div>
                <div className="contact-item" style={{ marginBottom: "12px" }}>
                  <span
                    className="subtitle"
                    style={{
                      color: "#ffffff",
                      fontWeight: "500",
                      display: "block",
                      fontSize: "0.8rem",
                    }}
                  >
                    Email
                  </span>
                  <Link
                    className="contact-link"
                    href="mailto:hello@9jamart.ng"
                    style={{ color: "#29B6D8", textDecoration: "none" }}
                  >
                    hello@9jamart.ng
                  </Link>
                </div>
                <div className="contact-item" style={{ marginBottom: "12px" }}>
                  <span
                    className="subtitle"
                    style={{
                      color: "#ffffff",
                      fontWeight: "500",
                      display: "block",
                      fontSize: "0.8rem",
                    }}
                  >
                    Location
                  </span>
                  <span className="contact-link" style={{ color: "#e2e8f0" }}>
                    123 Lagos Business District, Victoria Island, Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hamburger-socials"
            style={{
              marginTop: "20px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h5 className="hamburger-title" style={{ color: "#29B6D8", marginBottom: "15px" }}>
              Follow Us
            </h5>
            <div className="social-links style-3">
              <ul style={{ display: "flex", gap: "12px", listStyle: "none", padding: 0 }}>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
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
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
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
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
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
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
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
                      e.currentTarget.style.color = "#1B3A6B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;