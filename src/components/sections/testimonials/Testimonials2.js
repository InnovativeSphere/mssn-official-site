"use client";

const Testimonials2 = () => {
  const executives = [
    {
      name: "Mal. Ado Garba Yankaji",
      role: "Chairman",
      tenure: "2024 – Till Date",
      img: "/images/mssn/Ado_Garba_Yankaji.jpeg",
    },
    {
      name: "Mal. Sabiu Shitu",
      role: "Zonal Secretary General",
      tenure: "2024 – Till Date",
      img: "/images/mssn/Zonal_Secretary_General.jpeg",
    },
    {
      name: "Sister Mardiyyah Imam Qasim",
      role: "Amirah (Sisters' Wing)",
      tenure: "2021 – Date",
      img: "/images/mssn/Current_Amirah.jpeg",
    },
    {
      name: "Sis. Rakiyah Musa",
      role: "Sisters' Secretary",
      tenure: "2021 – Date",
      img: null, // No photo provided
    },
  ];

  return (
    <section className="mssn-leadership-section" id="leadership">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Leaders</span>
            <h2 className="section-title">Current Executive <span className="gradient-text">Council</span></h2>
            <div className="heading-underline" />
            <p className="section-lead">The dedicated leadership steering the MSSN A-Zone, guiding the Ummah with knowledge, unity, and a commitment to Islamic values.</p>
          </div>
        </div>
        <div className="row mt-5 gy-4 justify-content-center">
          {executives.map((member, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="leadership-card">
                <div className="leader-img-wrapper">
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="leader-img" />
                  ) : (
                    /* Female Profile Icon */
                    <svg className="profile-icon" viewBox="0 0 24 24" fill="none" stroke="#C59D5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M5 20v-2a7 7 0 0 1 14 0v2" />
                      <path d="M8 18h8" />
                    </svg>
                  )}
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
        .mssn-leadership-section { background: #FDFBF8; padding: clamp(60px, 8vw, 100px) 0; position: relative; }
        .section-badge { display: inline-block; background: rgba(10, 77, 60, 0.08); color: #0A4D3C; font-weight: 600; font-size: 0.85rem; padding: 6px 18px; border-radius: 50px; margin-bottom: 1.2rem; border: 1px solid #C59D5F; }
        .section-title { font-family: 'Cinzel', serif; font-size: clamp(2rem, 3.8vw, 2.8rem); font-weight: 700; color: #1A1A1A; margin-bottom: 1rem; }
        .gradient-text { background: linear-gradient(135deg, #C59D5F, #E8D2A6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .heading-underline { width: 60px; height: 3px; margin: 0 auto 1.5rem; background: #C59D5F; border-radius: 3px; }
        .section-lead { font-size: 1.1rem; color: #3a3a3a; max-width: 700px; margin: 0 auto; line-height: 1.7; }
        .leadership-card { background: #ffffff; padding: 1.5rem 1.2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); text-align: center; height: 100%; display: flex; flex-direction: column; align-items: center; transition: all 0.3s ease; border-left: 4px solid #0A4D3C; border-right: 4px solid transparent; } /* Removed right border active state */
        .leadership-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08); border-right: 4px solid transparent; } /* No gold hover effects */
        /* Removed ::before gold top bar completely */
        .leader-img-wrapper { width: 150px; height: 150px; border-radius: 50%; overflow: hidden; margin: 0 auto 1rem auto; border: 3px solid #C59D5F; transition: border-color 0.3s ease, transform 0.3s ease; display: flex; align-items: center; justify-content: center; background: #FDFBF8; }
        .leader-img { width: 100%; height: 100%; object-fit: cover; }
        .profile-icon { width: 60%; height: 60%; stroke: #C59D5F; } /* Clean female SVG icon */
        .leadership-card:hover .leader-img-wrapper { border-color: #0A4D3C; transform: scale(1.03); }
        .leader-info { flex: 1; }
        .leader-name { font-size: 1.05rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.1rem; }
        .leader-role { display: block; font-size: 0.85rem; font-weight: 600; color: #C59D5F; margin-bottom: 0.2rem; }
        .leader-tenure { display: block; font-size: 0.75rem; color: #6b6b6b; }
        @media (max-width: 991px) { .leader-img-wrapper { width: 130px; height: 130px; } }
      `}</style>
    </section>
  );
};
export default Testimonials2;