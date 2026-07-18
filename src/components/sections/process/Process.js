"use client";
import { orgStructure } from "@/data/content";

const Process = () => {
  return (
    <section className="mssn-structure-section" id="structure">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Foundation</span>
            <h2 className="section-title">
              Organizational <span className="gradient-text">Structure</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              A unified 5-tier hierarchy connecting the National body to every 
              Branch across Nigeria, ensuring efficient governance and coordination.
            </p>
          </div>
        </div>

        {/* ================== STRUCTURE TIMELINE ================== */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="structure-container">
              {orgStructure.map((level, index) => (
                <div key={index} className="structure-group">
                  
                  {/* Hierarchical Card */}
                  <div className="structure-card">
                    <span className="structure-level">
                      {level.level < 10 ? `0${level.level}` : level.level}
                    </span>
                    <div className="structure-content">
                      <h4 className="structure-title">{level.title}</h4>
                      <span className="structure-subtitle">{level.subtitle}</span>
                      <p className="structure-desc">
                        {level.location || level.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Arrow (Hidden for the last item) */}
                  {index < orgStructure.length - 1 && (
                    <div className="structure-connector">
                      <span className="connector-arrow">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-structure-section {
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

        /* ==================== STRUCTURE CONTAINER ==================== */
        .structure-container {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ==================== HIERARCHY CARDS ==================== */
        .structure-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .structure-card {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.5rem 1.5rem;
          background: #ffffff;
          border-radius: 16px;
          border-left: 4px solid var(--mssn-green, #0A4D3C);
          border-right: 4px solid transparent; /* Invisible mirror */
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .structure-card:hover {
          border-right: 4px solid var(--mssn-green, #0A4D3C); /* Mirror appears */
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(10, 77, 60, 0.08);
        }

        .structure-level {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--mssn-gold, #C59D5F);
          background: rgba(197, 157, 95, 0.08);
          padding: 10px 14px;
          border-radius: 12px;
          line-height: 1;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .structure-content {
          flex: 1;
          padding-top: 2px;
        }
        .structure-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--mssn-green, #0A4D3C);
          margin-bottom: 0.1rem;
        }
        .structure-subtitle {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--mssn-gold, #C59D5F);
          margin-bottom: 0.4rem;
        }
        .structure-desc {
          font-size: 0.95rem;
          color: #3a3a3a;
          line-height: 1.6;
          margin: 0;
        }

        /* ==================== CONNECTOR ==================== */
        .structure-connector {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .connector-arrow {
          color: var(--mssn-gold, #C59D5F);
          font-size: 1.2rem;
          opacity: 0.5;
          animation: bounceArrow 1.8s ease-in-out infinite;
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .structure-card {
            padding: 1.2rem 1.2rem;
            gap: 1rem;
          }
          .structure-level {
            font-size: 1rem;
            padding: 8px 12px;
          }
        }
        @media (max-width: 767px) {
          .structure-container {
            max-width: 100%;
          }
          .section-title {
            font-size: 2rem;
          }
          .structure-title {
            font-size: 1rem;
          }
          .structure-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;