"use client";
import Image from "next/image";

const AppShowcase = () => {
  const events = [
    {
      img: "/images/mssn/Public_Lecture_flyer.jpeg",
      caption: "Public Lecture on Economic Resilience",
      sub: "Building economic resilience through entrepreneurship",
    },
    ,
    {
      img: "/images/mssn/Crowd.jpeg",
      caption: "National Islamic Vacation Course (IVC)",
      sub: "Massive spiritual gathering in Dutse, Jigawa State",
    },
    {
      img: "/images/mssn/PPIP_STP.jpeg",
      caption: "PPIP/STP Workshop",
      sub: "Marrying educational endeavor with entrepreneurial skill",
    }
  ];

  return (
    <section className="mssn-showcase-section" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Events</span>
            <h2 className="section-title">MSSN <span className="gradient-text">Programmes & Activities</span></h2>
            <div className="heading-underline" />
            <p className="section-lead">From national vacation courses to leadership workshops, we engage the Ummah through a wide spectrum of educational and spiritual initiatives.</p>
          </div>
        </div>
        <div className="row mt-5 gy-4">
          {events.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="event-card">
                <div className="card-image-wrap">
                  <Image src={item.img} alt={item.caption} width={600} height={400} className="card-image" unoptimized />
                </div>
                <div className="card-content">
                  <h4 className="card-title">{item.caption}</h4>
                  <p className="card-desc">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mssn-showcase-section { background: #FDFBF8; padding: clamp(60px, 8vw, 100px) 0; position: relative; }
        .section-badge { display: inline-block; background: rgba(10, 77, 60, 0.08); color: #0A4D3C; font-weight: 600; font-size: 0.85rem; padding: 6px 18px; border-radius: 50px; margin-bottom: 1.2rem; border: 1px solid #C59D5F; }
        .section-title { font-family: 'Cinzel', serif; font-size: clamp(2rem, 3.8vw, 2.8rem); font-weight: 700; color: #1A1A1A; margin-bottom: 1rem; }
        .gradient-text { background: linear-gradient(135deg, #C59D5F, #E8D2A6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .heading-underline { width: 60px; height: 3px; margin: 0 auto 1.5rem; background: #C59D5F; border-radius: 3px; }
        .section-lead { font-size: 1.1rem; color: #3a3a3a; max-width: 700px; margin: 0 auto; line-height: 1.7; }
        .event-card { background: #ffffff; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); overflow: hidden; height: 100%; display: flex; flex-direction: column; transition: all 0.3s ease; border-left: 4px solid #0A4D3C; border-right: 4px solid transparent; }
        .event-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08); border-right: 4px solid #0A4D3C; }
        .event-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #C59D5F; transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
        .event-card:hover::before { transform: scaleX(1); }
        .card-image-wrap { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; }
        .card-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .event-card:hover .card-image { transform: scale(1.04); }
        .card-content { padding: 1.5rem 1.5rem; flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .card-title { font-size: 1.1rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.2rem; }
        .card-desc { font-size: 0.9rem; color: #3a3a3a; line-height: 1.5; margin: 0; }
        @media (max-width: 991px) { .card-content { padding: 1.2rem 1.2rem; } }
      `}</style>
    </section>
  );
};
export default AppShowcase;