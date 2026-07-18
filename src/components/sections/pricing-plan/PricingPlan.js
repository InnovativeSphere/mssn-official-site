"use client";
import { statsData } from "@/data/content";

const PricingPlan = () => {
  return (
    <section className="mssn-stats-section" id="stats">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Impact</span>
            <h2 className="section-title">
              MSSN A-Zone by <span className="gradient-text">the Numbers</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              From our founding in 1954 to our present-day reach across thousands of institutions, 
              here is the scope of our unified Ummah.
            </p>
          </div>
        </div>

        {/* ================== STATS GRID ================== */}
        <div className="row mt-5 gy-4 justify-content-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-sm-6">
              <div className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-desc">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-stats-section {
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

        /* ==================== STAT CARDS ==================== */
        .stat-card {
          background: #ffffff;
          padding: 2.5rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          height: 100%;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
        }

        /* Subtle top gold accent bar */
        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--mssn-gold, #C59D5F);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-value {
          font-family: 'Cinzel', serif;
          font-size: clamp(3.2rem, 5vw, 4.5rem);
          font-weight: 800;
          color: var(--mssn-green, #0A4D3C);
          line-height: 1.1;
          margin-bottom: 0.2rem;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.2rem;
        }

        .stat-desc {
          font-size: 0.95rem;
          color: #3a3a3a;
          line-height: 1.6;
          margin: 0;
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 767px) {
          .stat-value {
            font-size: 2.8rem;
          }
          .stat-card {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingPlan;