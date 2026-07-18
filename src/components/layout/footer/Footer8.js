"use client";
import Link from "next/link";

const Footer8 = () => {
  return (
    <footer className="tj-footer-section footer-2 h5-footer h6-footer h8-footer section-gap-x">
      {/* Global style override for footer colors */}
      <style jsx global>{`
        .tj-footer-section a,
        .tj-footer-section .title,
        .tj-footer-section .footer-text p,
        .tj-footer-section .contact-item span,
        .tj-footer-section .contact-item a,
        .tj-footer-section .widget-nav-menu ul li a,
        .tj-footer-section .copyright-text p,
        .tj-footer-section .copyright-text a {
          color: #fff !important;
          transition: color 0.3s ease;
        }
        .tj-footer-section a:hover,
        .tj-footer-section .widget-nav-menu ul li a:hover,
        .tj-footer-section .copyright-text a:hover {
          color: #29B6D8 !important;
        }
        .tj-footer-section .social-links.style-3 ul li a {
          background-color: #1B3A6B !important;
          color: white !important;
        }
        .tj-footer-section .social-links.style-3 ul li a:hover {
          background-color: #29B6D8 !important;
        }
        .tj-footer-section .subscribe-form button {
          background-color: #1B3A6B !important;
        }
        .tj-footer-section .subscribe-form button:hover {
          background-color: #29B6D8 !important;
        }
        .tj-footer-section input[type="checkbox"]:checked {
          accent-color: #000;
        }
        .h8-footer-logo .brand-text {
          font-size: 2rem;
          font-weight: bold;
          color: #1B3A6B;
          text-decoration: none;
        }
        .badge {
          background-color: #29B6D8;
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.7rem;
          margin-left: 5px;
        }
      `}</style>

      <div className="h6-footer-logo-area ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="h8-footer-logo-wrapper">
                <div className="h6-footer-logo h8-footer-logo">
                  {/* Logo image removed – replaced with text */}
                  <Link
                    href="/"
                    className="brand-text wow fadeInLeftBig"
                    data-wow-delay=".3s"
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#1B3A6B",
                      textDecoration: "none",
                    }}
                  >
                    9ja Mart
                  </Link>
                </div>
                <div
                  className="h8-footer-logo-content wow fadeInRightBig"
                  data-wow-delay=".4s"
                >
                  <div className="footer-text">
                    <p>
                      Your trusted Nigerian marketplace – delivering quality products
                      and exceptional service across the nation. Shop with confidence
                      at 9ja Mart.
                    </p>
                  </div>
                  <div className="social-links style-3">
                    <ul>
                      <li>
                        <Link href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main-area h8-footer-main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div
                className="footer-widget widget-contact h6-footer-contact h8-footer-contact wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="title" style={{ color: "#1B3A6B" }}>
                  Our Office
                </h5>
                <div className="footer-contact-info">
                  <div className="contact-item">
                    <span>123 Lagos Business District, Victoria Island, Lagos, Nigeria</span>
                  </div>
                  <div className="contact-item">
                    <Link href="tel:2348023456789">P: +234 802 345 6789</Link>
                    <Link href="mailto:hello@9jamart.ng">M: hello@9jamart.ng</Link>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="tji-clock"></i> Mon-Fri 9am-8pm, Sat 10am-4pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div
                className="footer-widget footer-col-2 widget-nav-menu h6-footer-col-2 h8-footer-col-2 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h5 className="title" style={{ color: "#1B3A6B" }}>
                  Shop
                </h5>
                <ul>
                  <li><Link href="/shop">All Products</Link></li>
                  <li><Link href="/categories/electronics">Electronics</Link></li>
                  <li><Link href="/categories/fashion">Fashion</Link></li>
                  <li><Link href="/categories/home">Home & Living</Link></li>
                  <li><Link href="/categories/beauty">Beauty & Health</Link></li>
                  <li><Link href="/offers">Deals & Offers</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div
                className="footer-widget footer-col-3 widget-nav-menu h6-footer-col-3 h8-footer-col-3 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h5 className="title" style={{ color: "#1B3A6B" }}>
                  Resources
                </h5>
                <ul>
                  <li><Link href="/contact">Contact us</Link></li>
                  <li><Link href="/about">About 9ja Mart</Link></li>
                  <li><Link href="/faq">FAQs</Link></li>
                  <li>
                    <Link href="/careers">
                      Careers <span className="badge">We’re hiring</span>
                    </Link>
                  </li>
                  <li><Link href="/blog">Blog & News</Link></li>
                  <li><Link href="/feedback">Feedback</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div
                className="footer-widget widget-subscribe h6-footer-subscribe h8-footer-subscribe wow fadeInUp"
                data-wow-delay=".6s"
              >
                <h3 className="title title-anim" style={{ color: "#1B3A6B" }}>
                  Subscribe for exclusive deals
                </h3>
                <div className="subscribe-form">
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      style={{ borderColor: "#1B3A6B" }}
                    />
                    <button type="submit">
                      <i className="tji-plane"></i>
                    </button>
                    <label htmlFor="agree">
                      <input id="agree" type="checkbox" />
                      I agree to the{" "}
                      <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-copyright-area-2 h5-footer-copyright h8-footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="copyright-text">
                  <p>
                    &copy; {new Date().getFullYear()} 9ja Mart. All rights reserved.
                    Crafted with ❤️ for Nigerian shoppers.
                  </p>
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
      <div className="bg-shape-3 wow fadeInUpBig" data-wow-delay="1s">
        <img src="/images/shape/h8-footer-shape-blur-1.svg" alt="" />
      </div>
      <div className="bg-shape-4 wow fadeInDownBig" data-wow-delay=".8s">
        <img src="/images/shape/h8-footer-shape-blur-2.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer8;