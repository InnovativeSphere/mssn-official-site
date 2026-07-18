"use client";
import Image from "next/image";

const AppShowcase = () => {
  // Replaced e-commerce flyers with placeholder event/community images
  const events = [
    {
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
      caption: "National Islamic Vacation Course (IVC)",
      sub: "Annual spiritual and educational retreat",
    },
    {
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80",
      caption: "PPIP/STP Workshop",
      sub: "Building economic resilience through entrepreneurship",
    },
    {
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      caption: "Jihad/Da'awah Week",
      sub: "Spiritual reawakening and Islamic propagation",
    },
  ];

  return (
    <section className="mssn-showcase-section" id="gallery">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Events</span>
            <h2 className="section-title">
              MSSN <span className="gradient-text">Programmes & Activities</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              From national vacation courses to leadership workshops, we engage 
              the Ummah through a wide spectrum of educational and spiritual initiatives.
            </p>
          </div>
        </div>

        {/* ================== EVENT CARDS ================== */}
        <div className="row mt-5 gy-4">
          {events.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="event-card">
                <div className="card-image-wrap">
                  <Image
                    src={item.img}
                    alt={item.caption}
                    width={600}
                    height={400}
                    className="card-image"
                    unoptimized
                  />
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
        /* ==================== SECTION ==================== */
        .mssn-showcase-section {
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

        /* ==================== EVENT CARDS ==================== */
        .event-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          border-left: 4px solid var(--mssn-green, #0A4D3C);
          border-right: 4px solid transparent;
        }
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
          border-right: 4px solid var(--mssn-green, #0A4D3C); /* Mirror border on right */
        }

        /* Top Gold accent bar (appears on hover) */
        .event-card::before {
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
        .event-card:hover::before {
          transform: scaleX(1);
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .event-card:hover .card-image {
          transform: scale(1.04);
        }

        .card-content {
          padding: 1.5rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.2rem;
        }
        .card-desc {
          font-size: 0.9rem;
          color: #3a3a3a;
          line-height: 1.5;
          margin: 0;
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .card-content {
            padding: 1.2rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AppShowcase;