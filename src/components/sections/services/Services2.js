"use client";
import { aims, programmes } from "@/data/content";

const Services2 = () => {
  return (
    <section className="mssn-aims-section" id="aims">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Foundation</span>
            <h2 className="section-title">
              Core Aims & <span className="gradient-text">Programmes</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              Guided by the Qur'an and Sunnah, our 8 core objectives drive our 
              mission to strengthen the Ummah. These are brought to life through 
              our flagship national programmes.
            </p>
          </div>
        </div>

        {/* ================== AIMS GRID (Green) ================== */}
        <div className="row mt-5 gy-4">
          {aims.map((aim) => (
            <div key={aim.id} className="col-lg-3 col-md-6">
              <div className="unified-card aim-card">
                <span className="number-badge">
                  {aim.id < 10 ? `0${aim.id}` : aim.id}
                </span>
                <div className="card-content">
                  <h4 className="card-title">{aim.title}</h4>
                  <p className="card-desc">{aim.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================== CUSTOM SEPARATOR ================== */}
        <div className="row mt-5 pt-lg-3">
          <div className="col-12">
            <div className="section-divider">
              <span className="divider-line" />
              <span className="divider-icon">✦</span>
              <span className="divider-line" />
            </div>
          </div>
        </div>

        {/* ================== PROGRAMMES GRID (Gold) ================== */}
        <div className="row mt-4 gy-4">
          {programmes.map((prog) => (
            <div key={prog.id} className="col-lg-4 col-md-6">
              <div className="unified-card prog-card">
                <span className="number-badge">
                  {prog.id < 10 ? `0${prog.id}` : prog.id}
                </span>
                <div className="card-content">
                  <h4 className="card-title">{prog.title}</h4>
                  <p className="card-desc">{prog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-aims-section {
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

        /* ==================== CUSTOM SEPARATOR ==================== */
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 16px;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          max-width: 200px;
          background: linear-gradient(to right, transparent, var(--mssn-gold, #C59D5F), transparent);
        }
        .divider-icon {
          color: var(--mssn-gold, #C59D5F);
          font-size: 1.2rem;
          font-weight: 300;
          opacity: 0.7;
        }

        /* ==================== UNIFIED CARDS ==================== */
        .unified-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.5rem 1.5rem;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          height: 100%; /* Forces equal height across columns regardless of text length */
          transition: all 0.3s ease;
        }

        /* --- Aim Cards (Green) --- */
        .aim-card {
          border-left: 4px solid var(--mssn-green, #0A4D3C);
          border-right: 4px solid transparent; /* Invisible mirror */
        }
        .aim-card .number-badge {
          color: var(--mssn-green, #0A4D3C);
          background: rgba(10, 77, 60, 0.08);
        }
        .aim-card:hover {
          border-right: 4px solid var(--mssn-green, #0A4D3C); /* Mirror appears */
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
        }

        /* --- Programme Cards (Gold) --- */
        .prog-card {
          border-left: 4px solid var(--mssn-gold, #C59D5F);
          border-right: 4px solid transparent; /* Invisible mirror */
        }
        .prog-card .number-badge {
          color: var(--mssn-gold, #C59D5F);
          background: rgba(197, 157, 95, 0.08);
        }
        .prog-card:hover {
          border-right: 4px solid var(--mssn-gold, #C59D5F); /* Mirror appears */
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(197, 157, 95, 0.08);
        }

        /* --- Shared Card Components --- */
        .number-badge {
          font-family: 'Cinzel', serif;
          font-size: 1.2rem;
          font-weight: 700;
          padding: 10px 14px;
          border-radius: 12px;
          line-height: 1;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .card-content {
          flex: 1;
          padding-top: 2px; /* Slight alignment tweak */
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.4rem;
        }
        .card-desc {
          font-size: 0.95rem;
          color: #3a3a3a;
          line-height: 1.6;
          margin: 0;
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .unified-card {
            padding: 1.2rem 1.2rem;
            gap: 1rem;
          }
          .number-badge {
            font-size: 1rem;
            padding: 8px 12px;
          }
        }
        @media (max-width: 767px) {
          .section-title {
            font-size: 2rem;
          }
          .card-title {
            font-size: 1rem;
          }
          .card-desc {
            font-size: 0.9rem;
          }
          .divider-line {
            max-width: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services2;