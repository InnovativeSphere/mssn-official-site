"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const beliefsData = [
    {
      question: "What is the Motto of the MSSN?",
      answer:
        "There is no deity worthy of worship except ALLAH and Muhammad (SAW) is His messenger. This is the guiding declaration of the Society.",
    },
    {
      question: "What is the Basis of the Society?",
      answer:
        "The Society believes firmly in the Glorious Qur'an and the Sunnah of the noble Prophet Muhammad (SAW) as its cardinal basis and guide. It recognizes the rules and principles of the Shari'ah as binding on all its members.",
    },
    {
      question: "What is the lifelong principle of a Muslim?",
      answer:
        "The acquisition of knowledge is a life-long process from cradle to the grave. In line with this, every Muslim is essentially considered a student for life.",
    },
    {
      question: "What are the Core Aims of the MSSN?",
      answer:
        "To unite all Muslims in Islamic brotherhood, establish Shari'ah governance, propagate the message of Islam, champion the oppressed, encourage quality education, and promote the general welfare of the Ummah.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mssn-faq-section" id="faq">
      <div className="container">
        
        {/* ================== HEADING ================== */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-badge">✦ Our Basis</span>
            <h2 className="section-title">
              Core Beliefs & <span className="gradient-text">Foundation</span>
            </h2>
            <div className="heading-underline" />
            <p className="section-lead">
              Rooted in the Qur'an and the Sunnah, the MSSN is guided by timeless 
              principles of faith, knowledge, and social welfare.
            </p>
          </div>
        </div>

        {/* ================== ACCORDION ================== */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="accordion-wrapper">
              {beliefsData.map((item, idx) => (
                <div
                  key={idx}
                  className={`accordion-item ${openIndex === idx ? "open" : ""}`}
                >
                  <button
                    className="accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`belief-panel-${idx}`}
                  >
                    <span className="accordion-number">
                      {(idx + 1).toString().padStart(2, "0")}.
                    </span>
                    <span className="accordion-title">{item.question}</span>
                    <span
                      className={`accordion-icon ${openIndex === idx ? "rotate" : ""}`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <div
                    id={`belief-panel-${idx}`}
                    className={`accordion-panel ${openIndex === idx ? "panel-open" : ""}`}
                    role="region"
                    aria-labelledby={`belief-trigger-${idx}`}
                  >
                    <div className="accordion-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ==================== SECTION ==================== */
        .mssn-faq-section {
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

        /* ==================== ACCORDION ==================== */
        .accordion-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .accordion-item {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          border-left: 4px solid var(--mssn-green, #0A4D3C);
          border-right: 4px solid transparent;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .accordion-item:hover {
          transform: translateY(-3px);
          border-right: 4px solid var(--mssn-green, #0A4D3C);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
        }
        .accordion-item.open {
          border-right: 4px solid var(--mssn-green, #0A4D3C);
          box-shadow: 0 12px 24px rgba(10, 77, 60, 0.08);
        }

        /* Top Gold accent bar */
        .accordion-item::before {
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
        .accordion-item:hover::before,
        .accordion-item.open::before {
          transform: scaleX(1);
        }

        .accordion-trigger {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 20px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          color: #1A1A1A;
          font-weight: 600;
          font-size: 1.05rem;
          transition: color 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .accordion-trigger:hover {
          color: var(--mssn-green, #0A4D3C);
        }
        .accordion-item.open .accordion-trigger {
          color: var(--mssn-green, #0A4D3C);
        }

        .accordion-number {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--mssn-gold, #C59D5F);
          transition: transform 0.3s ease;
        }
        .accordion-item.open .accordion-number {
          transform: scale(1.1);
        }

        .accordion-title {
          flex: 1;
          padding-right: 16px;
        }

        .accordion-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(197, 157, 95, 0.1);
          color: var(--mssn-gold, #C59D5F);
          transition: all 0.4s ease;
        }
        .accordion-icon.rotate {
          transform: rotate(180deg);
          background: var(--mssn-green, #0A4D3C);
          color: #fff;
          box-shadow: 0 4px 15px rgba(10, 77, 60, 0.3);
        }

        .accordion-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, padding 0.5s ease;
        }
        .accordion-panel.panel-open {
          max-height: 600px;
          padding: 0 24px 22px;
        }
        .accordion-content p {
          margin: 0;
          color: #3a3a3a;
          line-height: 1.8;
          font-size: 0.95rem;
          animation: fadeInUp 0.5s ease;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 767px) {
          .accordion-trigger {
            padding: 16px 18px;
            font-size: 1rem;
            gap: 10px;
          }
          .accordion-icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;