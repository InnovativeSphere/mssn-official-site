"use client";
import Image from "next/image";
// Swiper imports (same as your Testimonials component)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Mock Data (Replace this with a fetch()/API call later)
const eventsData = [
  {
    id: 1,
    title: "81st National Islamic Vacation Course",
    date: "Dec 24, 2025",
    description: "The flagship annual spiritual retreat held in Dutse, Jigawa State, bringing together thousands of Muslim students.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    isLive: true,
  },
  {
    id: 2,
    title: "PPIP/STP Entrepreneurship Workshop",
    date: "Dec 24, 2025",
    description: "Empowering students to marry educational endeavor with entrepreneurial skills for lasting prosperity.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80",
    isLive: true,
  },
  {
    id: 3,
    title: "Leadership Training Course (LTC)",
    date: "Ongoing",
    description: "Building the next generation of God-fearing, knowledgeable, and united Muslim leaders across Nigeria.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    isLive: false,
  },
  {
    id: 4,
    title: "Jihad / Da'awah Week 2025",
    date: "Upcoming",
    description: "A week dedicated to spiritual reawakening, Islamic propagation, and strengthening the Ummah.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
    isLive: false,
  },
  {
    id: 5,
    title: "National Higher Institution Convention",
    date: "Upcoming",
    description: "A massive convergence of Muslim students from higher institutions across the federation.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    isLive: false,
  },
];

const RecentEvents = () => {
  return (
    <section className="mssn-events-section" id="events">
      <div className="container">
        
        {/* ================== HEADING & STATS ================== */}
        <div className="row align-items-end mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              <span className="live-dot" /> LIVE UPDATES
            </span>
            <h2 className="section-title">
              Recent Events & <span className="gradient-text">Activities</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              Stay up-to-date with our ongoing programs, workshops, and spiritual gatherings across the nation.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="mini-stats-grid">
              <div className="mini-stat">
                <span className="mini-stat-number">12+</span>
                <span className="mini-stat-label">Active Programs</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">5</span>
                <span className="mini-stat-label">Upcoming Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================== EVENTS CAROUSEL ================== */}
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="events-swiper"
            >
              {eventsData.map((event) => (
                <SwiperSlide key={event.id}>
                  <div className="event-card">
                    <div className="event-image-wrapper">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="event-image"
                        unoptimized // ensures external URLs load reliably
                      />
                      {event.isLive && (
                        <span className="live-badge-overlay">
                          <span className="live-dot-sm" /> Live
                        </span>
                      )}
                    </div>
                    <div className="event-content">
                      <span className="event-date">{event.date}</span>
                      <h4 className="event-title">{event.title}</h4>
                      <p className="event-desc">{event.description}</p>
                      <a href="#contact" className="event-link">
                        Learn More →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ================== BOTTOM CTA ================== */}
        <div className="row mt-5 pt-lg-3">
          <div className="col-12 text-center">
            <a href="#contact" className="btn-outline-cta">
              Partner with us for an Event
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-events-section {
          background: var(--mssn-cream, #FDFBF8);
          padding: clamp(60px, 8vw, 100px) 0;
          position: relative;
        }

        /* ==================== HEADING ==================== */
        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(10, 77, 60, 0.08);
          color: var(--mssn-green, #0A4D3C);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 1rem;
          border: 1px solid var(--mssn-gold, #C59D5F);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .live-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          animation: pulseLive 1.5s ease-in-out infinite;
        }
        @keyframes pulseLive {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 3.8vw, 2.8rem);
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.5rem;
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
          margin-bottom: 1rem;
          background: var(--mssn-gold, #C59D5F);
          border-radius: 3px;
        }

        .section-lead {
          font-size: 1.05rem;
          color: #3a3a3a;
          max-width: 600px;
          line-height: 1.6;
          margin: 0;
        }

        /* ==================== MINI STATS ==================== */
        .mini-stats-grid {
          display: flex;
          gap: 2rem;
          justify-content: flex-end;
          border-left: 2px solid var(--mssn-gold, #C59D5F);
          padding-left: 2rem;
        }
        .mini-stat {
          text-align: center;
        }
        .mini-stat-number {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--mssn-green, #0A4D3C);
          line-height: 1;
        }
        .mini-stat-label {
          font-size: 0.85rem;
          color: #6b6b6b;
          font-weight: 500;
        }

        /* ==================== SWIPER OVERRIDES ==================== */
        :global(.events-swiper) {
          padding-bottom: 50px;
        }
        :global(.events-swiper .swiper-pagination-bullet) {
          background: var(--mssn-gold, #C59D5F);
          opacity: 0.5;
        }
        :global(.events-swiper .swiper-pagination-bullet-active) {
          opacity: 1;
          background: var(--mssn-green, #0A4D3C);
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
          border-right: 4px solid var(--mssn-green, #0A4D3C);
        }

        /* Top Gold accent bar */
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

        .event-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .event-card:hover .event-image {
          transform: scale(1.04);
        }

        .live-badge-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(239, 68, 68, 0.9);
          color: #fff;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(4px);
        }
        .live-dot-sm {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: pulseLive 1.5s ease-in-out infinite;
        }

        .event-content {
          padding: 1.5rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .event-date {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--mssn-gold, #C59D5F);
          margin-bottom: 0.3rem;
        }
        .event-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.4rem;
        }
        .event-desc {
          font-size: 0.9rem;
          color: #3a3a3a;
          line-height: 1.6;
          flex: 1;
          margin-bottom: 1rem;
        }
        .event-link {
          color: var(--mssn-green, #0A4D3C);
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .event-link:hover {
          color: var(--mssn-gold, #C59D5F);
        }

        /* ==================== BOTTOM CTA ==================== */
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

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 991px) {
          .mini-stats-grid {
            justify-content: flex-start;
            padding-left: 0;
            border-left: none;
            border-top: 2px solid var(--mssn-gold, #C59D5F);
            padding-top: 1rem;
            gap: 3rem;
          }
          .mini-stat-number {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 767px) {
          .event-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RecentEvents;