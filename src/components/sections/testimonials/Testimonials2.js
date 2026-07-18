"use client";

const Testimonials2 = () => {
  // Fixed 4-member leadership team
  const executives = [
    {
      name: "Mal. Ado Garba Yankaji",
      role: "Chairman",
      tenure: "2024 – Till Date",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    },
    {
      name: "Mal. Sabiu Shitu",
      role: "Secretary",
      tenure: "2024 – Till Date",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    },
    {
      name: "Sister Mardiyyah Imam Qasim",
      role: "Amirah (Sisters' Wing)",
      tenure: "2021 – Date",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    },
    {
      name: "Sis. Rakiyah Musa",
      role: "Sisters' Secretary",
      tenure: "2021 – Date",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    },
  ];

  return (
    <section className="mssn-leadership-section" id="leadership">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Leaders</span>
            <h2 className="section-title">
              Current Executive <span className="gradient-text">Council</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              The dedicated leadership steering the MSSN A-Zone, guiding the Ummah 
              with knowledge, unity, and a commitment to Islamic values.
            </p>
          </div>
        </div>

        {/* ================== 4-COLUMN LEADERSHIP GRID ================== */}
        <div className="row mt-5 gy-4 justify-content-center">
          {executives.map((member, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="leadership-card">
                <div className="leader-img-wrapper">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="leader-img"
                  />
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{member.name}</h4>
                  <span className="leader-role">{member.role}</span>
                  <span className="leader-tenure">{member.tenure}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-leadership-section {
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

        /* ==================== LEADERSHIP CARDS ==================== */
        .leadership-card {
          background: #ffffff;
          padding: 1.5rem 1.2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
          border-left: 4px solid var(--mssn-green, #0A4D3C);
          border-right: 4px solid transparent;
        }
        .leadership-card:hover {
          transform: translateY(-6px);
          border-right: 4px solid var(--mssn-green, #0A4D3C);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
        }

        /* Top Gold accent bar */
        .leadership-card::before {
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
        .leadership-card:hover::before {
          transform: scaleX(1);
        }

        .leader-img-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1rem;
          border: 3px solid var(--mssn-gold, #C59D5F);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .leader-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .leadership-card:hover .leader-img-wrapper {
          border-color: var(--mssn-green, #0A4D3C);
          transform: scale(1.03);
        }

        .leader-info {
          flex: 1;
        }
        .leader-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.1rem;
        }
        .leader-role {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--mssn-gold, #C59D5F);
          margin-bottom: 0.2rem;
        }
        .leader-tenure {
          display: block;
          font-size: 0.75rem;
          color: #6b6b6b;
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .leader-img-wrapper {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials2;