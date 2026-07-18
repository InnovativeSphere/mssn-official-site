"use client";
import Image from "next/image";

const About3 = () => {
  return (
    <section className="mssn-about-section" id="about">
      {/* Soft, static floating shapes */}
      <div className="about-shapes">
        <div className="ashape shape-1" />
        <div className="ashape shape-2" />
      </div>

      <div className="container">
        
        {/* === ROW 1: IMAGE & HISTORY === */}
        <div className="row align-items-stretch gy-5">
          {/* Left Column: Image */}
          <div className="col-lg-6 d-flex flex-column">
            <div className="about-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
                alt="MSSN A-Zone Community Gathering"
                fill
                className="about-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized // Ensures reliable loading for external URLs
              />
            </div>
          </div>

          {/* Right Column: History Text */}
          <div className="col-lg-6 d-flex flex-column justify-content-start">
            <div className="about-content">
              <span className="section-badge">✦ Established 1954</span>
              
              <h2 className="section-title">
                A Revolution That <br />
                <span className="gradient-text">Quietly Crept Into Nigeria</span>
              </h2>

              <div className="history-text">
                <p>
                  In an era where Muslim students were forced to renounce their faith or adopt 
                  baptized names to gain admission into schools, a spark of defiance ignited in Lagos. 
                  On <strong>April 18th, 1954</strong>, 14 visionary students from Methodist Boys' 
                  High School and other secondary schools gathered at Ansar-ud-Deen Primary School, Alakoro, 
                  to draft a constitution. 
                </p>
                <p>
                  Their efforts culminated on <strong>Sunday, May 30th, 1954</strong>, with the official 
                  birth of the Muslim Students' Society of Nigeria (MSSN). By 1955, the movement had 
                  spread nationally, culminating in its formal incorporation with the Federal Ministry of 
                  Internal Affairs on <strong>October 14th, 1982</strong>. Today, the MSSN stands as 
                  a unified force for Islamic propagation, student welfare, and the liberation of the Ummah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === ROW 2: FOUNDATION (VISION & MISSION) === */}
        <div className="row mt-5 pt-lg-4">
          <div className="col-12">
            <div className="base-container d-flex flex-wrap justify-content-center align-items-stretch gap-4">
              
              {/* Vision Card */}
              <div className="base-card">
                <span className="vm-label">Vision</span>
                <p className="vm-text">
                  To establish an Ummah governed by the principles and rules of the Shari'ah.
                </p>
              </div>

              {/* Mission Card */}
              <div className="base-card">
                <span className="vm-label">Mission</span>
                <p className="vm-text">
                  To work relentlessly towards the establishment of a society that fosters all-round 
                  human development by strengthening the Ummah educationally, spiritually, and politically.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* === ROW 3: CTA CENTERED UNDERNEATH VISION & MISSION === */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <a href="#aims" className="btn-outline-cta">
              Discover Our Aims
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-about-section {
          background: var(--mssn-cream, #FDFBF8);
          padding: clamp(60px, 8vw, 100px) 0;
          position: relative;
          overflow: hidden;
        }

        /* Floating shapes (slow, subtle, no interactivity) */
        .about-shapes .ashape {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }
        .shape-1 {
          width: 300px; height: 300px;
          top: -80px; left: -80px;
          background: radial-gradient(circle, rgba(197, 157, 95, 0.15) 0%, transparent 70%);
          animation: floatStatic 15s ease-in-out infinite alternate;
        }
        .shape-2 {
          width: 250px; height: 250px;
          bottom: -60px; right: -60px;
          background: radial-gradient(circle, rgba(10, 77, 60, 0.08) 0%, transparent 70%);
          animation: floatStatic 12s ease-in-out infinite alternate-reverse;
        }
        @keyframes floatStatic {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -30px) scale(1.05); }
        }

        /* ==================== LEFT COLUMN (IMAGE) ==================== */
        .about-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%; /* Forces image to stretch and match the exact height of the right text column */
          min-height: 300px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(10, 77, 60, 0.2);
          border: 4px solid var(--mssn-gold, #C59D5F);
          transition: box-shadow 0.3s ease;
        }
        .about-image-wrapper:hover {
          box-shadow: 0 20px 40px -10px rgba(10, 77, 60, 0.3);
        }
        .about-image {
          object-fit: cover;
          object-position: center;
        }

        /* ==================== RIGHT COLUMN (CONTENT) ==================== */
        .about-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

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
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 1.5rem;
          line-height: 1.15;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--mssn-gold, #C59D5F), var(--mssn-gold-light, #E8D2A6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .history-text {
          margin-bottom: 0;
        }
        .history-text p {
          font-size: 1.05rem;
          color: #3a3a3a;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .history-text strong {
          color: var(--mssn-green, #0A4D3C);
        }

        /* ==================== BASE FOUNDATION (VISION & MISSION) ==================== */
        .base-container {
          margin: 0 auto;
          width: 100%;
        }
        .base-card {
          flex: 1 1 260px;
          max-width: 450px; /* Slightly wider to accommodate longer text */
          background: #ffffff;
          padding: 1.5rem 2rem;
          border-radius: 16px;
          border-left: 6px solid var(--mssn-gold, #C59D5F);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: background 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .base-card:hover {
          background: rgba(197, 157, 95, 0.04);
          transform: translateY(-2px);
        }

        .vm-label {
          display: block;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          color: var(--mssn-green, #0A4D3C);
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          margin-bottom: 0.3rem;
          text-transform: uppercase;
        }
        .vm-text {
          font-size: 1rem;
          color: #3a3a3a;
          line-height: 1.6;
          margin: 0;
        }

        /* ==================== BOTTOM CTA (CENTERED) ==================== */
        .btn-outline-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--mssn-green, #0A4D3C);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          padding: 14px 36px;
          border: 2px solid var(--mssn-green, #0A4D3C);
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .btn-outline-cta:hover {
          background: var(--mssn-green, #0A4D3C);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(10, 77, 60, 0.2);
        }
        .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .btn-outline-cta:hover .arrow {
          transform: translateX(4px);
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .about-content {
            text-align: center;
          }
          .section-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .about-image-wrapper {
            min-height: 250px;
          }
        }
        @media (max-width: 767px) {
          .section-title {
            font-size: 2rem;
          }
          .history-text p {
            font-size: 0.95rem;
          }
          .base-card {
            padding: 1.2rem 1.5rem;
            flex: 1 1 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default About3;