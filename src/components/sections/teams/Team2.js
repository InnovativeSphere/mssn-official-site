"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard2 from "@/components/shared/cards/TeamCard2";
import { useCallback, useEffect, useRef, useState } from "react";

// Nigerian team members with matching African faces
const nigerianTeam = [
  {
    id: 1,
    name: "Tunde Bakare",
    role: "Co-founder & CEO",
    img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop",
    imgLarge: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=300&h=300&fit=crop",
    bio: "Former Jumia executive, passionate about local e‑commerce.",
  },
  {
    id: 2,
    name: "Folake Akinola",
    role: "Head of Product",
    img: "https://images.unsplash.com/photo-1581301661886-ec12d84b8f44?w=100&h=100&fit=crop",
    imgLarge: "https://images.unsplash.com/photo-1581301661886-ec12d84b8f44?w=300&h=300&fit=crop",
    bio: "Built multiple award‑winning shopping apps.",
  },
  {
    id: 3,
    name: "Chidi Obi",
    role: "Logistics Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    imgLarge: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "Ensures same‑day delivery across Lagos & Abuja.",
  },
  {
    id: 4,
    name: "Nneka Okonkwo",
    role: "Customer Experience Lead",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    imgLarge: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
    bio: "Former Zendesk trainer, now leading our support team.",
  },
];

const Team2 = () => {
  const items = nigerianTeam;
  const [activeMember, setActiveMember] = useState(items[0]);
  const [fade, setFade] = useState(true);
  const [fade2, setFade2] = useState(true);
  const timeout1 = useRef(null);
  const timeout2 = useRef(null);
  const timeout3 = useRef(null);

  const handleMouseEnter = useCallback((member) => {
    setActiveMember(member);
    setFade(false);
    setFade2(false);
    timeout1.current = setTimeout(() => {
      setFade(true);
      setFade2(true);
      timeout2.current = setTimeout(() => {
        setFade2(false);
        timeout3.current = setTimeout(() => {
          setFade2(true);
        }, 300);
      }, 300);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeout1.current);
      clearTimeout(timeout2.current);
      clearTimeout(timeout3.current);
    };
  }, []);

  return (
    <section className="tj-team-section-2 section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx global>{`
        .tj-team-section-2 .sub-title {
          color: #29B6D8 !important;
        }
        .tj-team-section-2 .sec-title {
          color: #1B3A6B !important;
        }
        .tj-team-section-2 .tj-primary-btn {
          background-color: #1B3A6B !important;
          border-color: #1B3A6B !important;
        }
        .tj-team-section-2 .tj-primary-btn:hover {
          background-color: #29B6D8 !important;
          border-color: #29B6D8 !important;
        }
        /* Make the main image smaller, circular, and centered */
        .team-img {
          text-align: center;
          margin-bottom: 30px;
        }
        .team-img img {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 15px 30px rgba(27, 58, 107, 0.2);
          transition: all 0.3s ease;
        }
        /* Responsive on mobile */
        @media (max-width: 768px) {
          .team-img img {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Meet Our Team
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <h2 className="sec-title title-anim">The People Behind 9ja Mart</h2>
                </div>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".5s">
                  <ButtonPrimary text="Meet the whole team" url="/team" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="team-wrapper">
              <div className="team-img-wrap wow fadeInUp" data-wow-delay=".5s">
                <div
                  id="team-img"
                  className="team-img"
                  style={{
                    transition: "all .3s ease-in-out",
                    opacity: fade ? 1 : 0.3,
                  }}
                >
                  <img
                    key={activeMember.imgLarge}
                    src={activeMember.imgLarge}
                    alt={activeMember.name}
                    style={{
                      transform: `scale(${fade2 ? 1 : 1.05})`,
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              </div>
              <div className="team-item-wrap">
                {items?.length
                  ? items.map((item, idx) => (
                      <TeamCard2
                        key={idx}
                        teamMember={item}
                        activeMember={activeMember}
                        handleMouseEnter={handleMouseEnter}
                      />
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2;