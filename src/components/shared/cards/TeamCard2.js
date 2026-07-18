"use client";
import Link from "next/link";

const TeamCard2 = ({ teamMember, activeMember, handleMouseEnter }) => {
  const { id, name, desig, role, imgLarge = "/images/team/team-1-big.webp" } =
    teamMember || {};

  // Use role if desig is missing (for compatibility with parent data)
  const designation = desig || role || "Team Member";

  return (
    <div
      className={`team-item ${id === activeMember?.id ? "active" : ""} wow fadeInUp`}
      data-wow-delay=".3s"
      onMouseEnter={() => handleMouseEnter(teamMember)}
      style={{
        border: "1px solid rgba(41, 182, 216, 0.3)",
        borderRadius: "24px",
        transition: "all 0.3s ease",
        background: "#ffffff",
        marginBottom: "20px",
        overflow: "hidden",
      }}
    >
      <style jsx>{`
        .team-item-inner {
          padding: 20px;
        }
        .team-content .title a {
          color: #1B3A6B;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.2s;
        }
        .team-content .title a:hover {
          color: #29B6D8;
        }
        .designation {
          color: #29B6D8;
          font-size: 0.85rem;
          display: block;
          margin-top: 4px;
        }
        .social-links ul {
          display: flex;
          gap: 12px;
          padding: 0;
          margin: 15px 0 0;
          list-style: none;
        }
        .social-links ul li a {
          color: #1B3A6B;
          background: #f0f4f8;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          transition: all 0.2s;
        }
        .social-links ul li a:hover {
          background: #29B6D8;
          color: white;
        }
        .team-link {
          display: inline-block;
          margin-top: 12px;
          color: #29B6D8;
          font-size: 1.2rem;
          transition: transform 0.2s;
        }
        .team-link:hover {
          transform: translateX(5px);
          color: #1B3A6B;
        }
        .team-img img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          transition: transform 0.3s;
        }
        .team-item:hover .team-img img {
          transform: scale(1.02);
        }
        .team-item.active {
          border-color: #29B6D8 !important;
          background: rgba(41, 182, 216, 0.05);
        }
      `}</style>

      <div className="team-item-inner">
        <div className="team-content">
          <h3 className="title">
            <Link href={`/team/${id}`}>{name || "Team Member"}</Link>
          </h3>
          <span className="designation">{designation}</span>
        </div>

        {/* Social links (optional, keep as is but make them brand-aligned) */}
        <div className="social-links">
          <ul>
            <li>
              <Link href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com/" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>

        <Link className="team-link" href={`/team/${id}`}>
          <i className="tji-arrow-right-long"></i>
        </Link>
      </div>

      <div className="team-img-wrap">
        <div className="team-img">
          <img src={imgLarge} alt={name || "Team member"} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard2;