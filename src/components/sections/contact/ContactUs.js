"use client";
import { contactData } from "@/data/content";

const ContactUs = () => {
  return (
    <section className="mssn-contact-section" id="contact">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Get in Touch</span>
            <h2 className="section-title">
              Headquarters & <span className="gradient-text">Contact</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              Reach out to our National or Zonal headquarters. Our dedicated 
              team is ready to assist with inquiries, collaborations, and guidance.
            </p>
          </div>
        </div>

        {/* ================== HQ ADDRESSES (2 Columns) ================== */}
        <div className="row mt-5 gy-4">
          
          {/* National HQ Card */}
          <div className="col-lg-6">
            <div className="contact-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">{contactData.headquarters.label}</h4>
                <p className="card-desc">{contactData.headquarters.address}</p>
              </div>
            </div>
          </div>

          {/* Zone A HQ Card */}
          <div className="col-lg-6">
            <div className="contact-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">{contactData.zoneAHQ.label}</h4>
                <p className="card-desc">{contactData.zoneAHQ.address}</p>
                <span className="card-sub-desc">Postal: {contactData.zoneAHQ.postal}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================== CONTACT DETAILS (Emails & Phones) ================== */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="contact-details-bar">
              <div className="detail-group">
                <span className="detail-label">Email</span>
                <a href={`mailto:${contactData.emails[0]}`} className="detail-link">
                  {contactData.emails[0]}
                </a>
                <span className="detail-sep">|</span>
                <a href={`mailto:${contactData.emails[1]}`} className="detail-link">
                  {contactData.emails[1]}
                </a>
              </div>
              <div className="detail-group">
                <span className="detail-label">Phone</span>
                <span className="detail-text">{contactData.phoneNumbers[0]}</span>
                <span className="detail-sep">|</span>
                <span className="detail-text">{contactData.phoneNumbers[1]}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-contact-section {
          background: var(--mssn-cream, #FDFBF8);
          padding: clamp(60px, 8vw, 100px) 0;
          position: relative;
        }

        /* ==================== HEADING ==================== */
        .section-badge {
          display: inline-block;
          background: rgba(10, 77, 60, 0.08);
          color: var(--mssn-green, #0A4D3C);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 1.2rem;
          border: 1px solid var(--mssn-gold, #C59D5F);
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 3.8vw, 2.8rem);
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 1rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--mssn-gold, #C59D5F), var(--mssn-gold-light, #E8D2A6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .heading-underline {
          width: 60px;
          height: 3px;
          margin: 0 auto 1.5rem;
          background: var(--mssn-gold, #C59D5F);
          border-radius: 3px;
        }

        .section-lead {
          font-size: 1.1rem;
          color: #3a3a3a;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ==================== ADDRESS CARDS ==================== */
        .contact-card {
          background: #ffffff;
          padding: 2rem 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          height: 100%;
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          transition: all 0.3s ease;
          border-left: 4px solid var(--mssn-green, #0A4D3C);
          border-right: 4px solid transparent;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
          border-right: 4px solid var(--mssn-green, #0A4D3C); /* Mirror border */
        }
        
        /* Top Gold accent bar */
        .contact-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          // background: var(--mssn-gold, #C59D5F);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .contact-card:hover::before {
          transform: scaleX(1);
        }

        .card-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(10, 77, 60, 0.08);
          color: var(--mssn-green, #0A4D3C);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content {
          flex: 1;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.2rem;
        }
        .card-desc {
          font-size: 0.95rem;
          color: #3a3a3a;
          line-height: 1.6;
          margin: 0;
        }
        .card-sub-desc {
          display: block;
          font-size: 0.9rem;
          color: #6b6b6b;
          margin-top: 4px;
        }

        /* ==================== CONTACT DETAILS BAR ==================== */
        .contact-details-bar {
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem 3rem;
        }
        .detail-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .detail-label {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--mssn-green, #0A4D3C);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .detail-link {
          color: var(--mssn-gold, #C59D5F);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .detail-link:hover {
          color: var(--mssn-green, #0A4D3C);
          text-decoration: underline;
        }
        .detail-text {
          color: #3a3a3a;
          font-weight: 500;
        }
        .detail-sep {
          color: #c0c0c0;
          font-weight: 300;
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .contact-details-bar {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem 1.5rem;
          }
        }
        @media (max-width: 576px) {
          .contact-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .detail-group {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;