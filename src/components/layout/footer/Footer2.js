"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, contactData } from "@/data/content";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mssn-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top-bar">
              <p className="footer-motto">"{siteConfig.motto}"</p>
              <span className="footer-address-line"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>{contactData.zoneAHQ.address}</span>
            </div>
          </div>
        </div>
        <div className="row mt-5 gy-4">
          <div className="col-lg-6 col-md-6">
            <div className="footer-brand">
              <Link href="/" className="footer-logo-link">
                <Image src="/images/mssn/logo.jpeg" alt="MSSN A-Zone Logo" width={60} height={45} className="footer-logo-img" />
              </Link>
              <p className="footer-desc">Uniting Muslim students in Nigeria since 1954. A unified religious organization dedicated to the spiritual, educational, and social development of the Ummah.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <h5 className="footer-title">Contact Us</h5>
            <div className="footer-contact">
              <div className="contact-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>{contactData.zoneAHQ.address}</span></div>
              <div className="contact-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href={`mailto:${contactData.emails[0]}`}>{contactData.emails[0]}</a></div>
              <div className="contact-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>{contactData.phoneNumbers[0]} | {contactData.phoneNumbers[1]}</span></div>
            </div>
            <div className="social-links">
              <a href={contactData.socialLinks.facebook || "#"} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom"><p className="copyright">&copy; {currentYear} {siteConfig.name}. All rights reserved.</p></div>
      </div>
      <style jsx>{`
        .mssn-footer-section { background-color: #08382a; color: #ffffff; padding: clamp(60px, 8vw, 80px) 0 30px; margin-top: 2rem; position: relative; }
        .footer-top-bar { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .footer-motto { font-size: 1rem; font-weight: 500; color: #C59D5F; margin: 0; font-style: italic; }
        .footer-address-line { display: flex; align-items: center; gap: 8px; color: rgba(255, 255, 255, 0.7); font-size: 0.95rem; }
        .footer-logo-link { text-decoration: none; display: flex; margin-bottom: 1rem; }
        .footer-logo-img { object-fit: contain; height: 45px; width: auto; } /* Consistent smaller height */
        .footer-desc { color: rgba(255, 255, 255, 0.7); line-height: 1.6; max-width: 450px; font-size: 0.95rem; margin-bottom: 0; }
        .footer-title { font-size: 1rem; font-weight: 600; color: #ffffff; margin-bottom: 1.2rem; letter-spacing: 0.5px; }
        .footer-contact { margin-bottom: 1.5rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; color: rgba(255, 255, 255, 0.7); font-size: 0.95rem; line-height: 1.5; }
        .contact-item svg { flex-shrink: 0; margin-top: 2px; color: #C59D5F; }
        .contact-item a { color: #e2e8f0; text-decoration: none; transition: color 0.2s ease; }
        .contact-item a:hover { color: #C59D5F; }
        .social-links { display: flex; gap: 12px; }
        .social-links a { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); color: #ffffff; transition: all 0.3s ease; }
        .social-links a:hover { background: #C59D5F; color: #08382a; transform: translateY(-2px); box-shadow: 0 6px 15px rgba(197, 157, 95, 0.3); }
        .footer-bottom { display: flex; justify-content: center; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.08); margin-top: 40px; padding-top: 20px; }
        .copyright { color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin: 0; text-align: center; }
        @media (max-width: 991px) { .footer-address-line { width: 100%; justify-content: flex-start; } }
        @media (max-width: 767px) { .footer-top-bar { flex-direction: column; align-items: flex-start; gap: 10px; } .footer-bottom { flex-direction: column; text-align: center; } .footer-desc { max-width: 100%; } }
      `}</style>
    </footer>
  );
};
export default Footer2;