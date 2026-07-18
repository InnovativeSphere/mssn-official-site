"use client";
import Link from "next/link";
import { useEffect, useState, useCallback, useMemo } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Updated routes mapped to your page sections
  const navLinks = useMemo(
    () => [
      { label: "Home", id: "hero" },
      { label: "About", id: "about" },
      { label: "Aims & Programs", id: "aims" },
      { label: "Our Structure", id: "structure" },
      { label: "Leadership", id: "leadership" },
      { label: "Impact", id: "stats" },
      { label: "FAQ", id: "faq" },
    ],
    []
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector(".app-header");
      const offset = header ? header.offsetHeight + 20 : 20;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Scroll‑based active section detection
  const handleScroll = useCallback(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    let current = "hero";

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        current = section.id;
      }
    }
    setActiveSection(current);

    // Add scrolled class if page has been scrolled down
    setScrolled(window.scrollY > 20);
  }, [navLinks]);

  // Close mobile menu if window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          {/* Stylized Text Logo – MSSN A-Zone (No Hover Effects) */}
          <Link href="/" className="logo-link">
            <span className="logo-primary">MSSN</span>
            <span className="logo-secondary">A-Zone</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={`desktop-${link.id}`}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Visible CTA Button with Outline */}
          <button className="cta-btn" onClick={() => scrollToSection("contact")}>
            Explore
          </button>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <button
              key={`mobile-${link.id}`}
              className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="mobile-cta-btn" onClick={() => scrollToSection("contact")}>
            Explore
          </button>
        </nav>
      </div>

      <style jsx>{`
        /* Import elegant regal fonts for the logo + clean body text */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        /* MSSN Brand Colors */
        --mssn-green: #0A4D3C;
        --mssn-gold: #C59D5F;
        --mssn-gold-light: #E8D2A6;
        --mssn-cream: #FDFBF8;

        .app-header {
          position: sticky;
          top: 0;
          z-index: 1030;
          background: rgba(253, 251, 248, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(197, 157, 95, 0.15);
          box-shadow: 0 2px 8px rgba(10, 77, 60, 0.04);
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .app-header.scrolled {
          background: rgba(253, 251, 248, 0.96);
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px rgba(10, 77, 60, 0.08);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        /* --- Logo Styling (No Hover) --- */
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: baseline;
          gap: 4px;
          /* Removed any hover transform */
        }

        .logo-primary {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #0A4D3C; /* Hardcoded Emerald Green */
          letter-spacing: 0.5px;
        }
        .logo-secondary {
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #C59D5F; /* Hardcoded Gold */
          letter-spacing: 0.8px;
          margin-left: 4px;
          position: relative;
        }
        .logo-secondary::before {
          content: "|";
          color: #C59D5F;
          margin-right: 5px;
          font-weight: 300;
        }

        /* --- Desktop Navigation --- */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-link {
          position: relative;
          background: none;
          border: none;
          color: #1A1A1A;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          padding: 8px 0;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px; /* Thicker underline */
          border-radius: 3px;
          background: #C59D5F;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .nav-link:hover {
          color: #0A4D3C;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }
        .nav-link.active {
          color: #0A4D3C;
          font-weight: 600;
        }

        /* --- CTA Button (Visible Border by Default) --- */
        .cta-btn {
          display: block;
          text-align: center;
          background: transparent;
          color: #0A4D3C;
          padding: 10px 24px;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          border: 2px solid #C59D5F; /* Gold border visible always */
          cursor: pointer;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-btn::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(25deg);
          transition: all 0.6s ease;
        }
        .cta-btn:hover::after {
          left: 120%;
        }
        .cta-btn:hover {
          background: #0A4D3C;
          color: #fff;
          border-color: #C59D5F;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197, 157, 95, 0.3);
        }
        .cta-btn:active {
          transform: scale(0.96);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #1A1A1A;
          cursor: pointer;
          padding: 8px;
          transition: color 0.2s ease;
        }
        .mobile-toggle:hover {
          color: #C59D5F;
        }

        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          background: rgba(253, 251, 248, 0.99);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(197, 157, 95, 0.15);
        }
        .mobile-menu-open {
          max-height: 500px;
          padding: 20px 0;
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 22px;
          align-items: center;
        }
        .mobile-nav-link {
          background: none;
          border: none;
          color: #1A1A1A;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1.1rem;
          cursor: pointer;
          transition: color 0.2s ease;
          position: relative;
          padding: 4px 0;
        }
        .mobile-nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 2px;
          background: #C59D5F;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: #0A4D3C;
        }
        .mobile-nav-link.active {
          color: #0A4D3C;
        }
        .mobile-nav-link.active::after {
          transform: scaleX(1);
        }

        .mobile-cta-btn {
          display: block;
          text-align: center;
          background: #0A4D3C;
          color: #fff;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          border: 2px solid #C59D5F;
          cursor: pointer;
          transition: all 0.35s ease;
          margin-top: 4px;
        }
        .mobile-cta-btn:hover {
          background: #08382a;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197, 157, 95, 0.3);
        }

        @media (max-width: 991px) {
          .desktop-nav,
          .cta-btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
        @media (max-width: 480px) {
          .logo-primary {
            font-size: 1.5rem;
          }
          .logo-secondary {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;