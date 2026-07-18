"use client";

import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
  const { title, desc, id, totalProject, img, svg, iconName, features } =
    service || {};

  // Default e‑commerce focused description if none provided
  const cardDesc =
    desc ||
    "We connect you with authentic products, secure payments, and fast delivery across Nigeria. Shop with confidence.";
  // Default e‑commerce focused features
  const cardFeatures =
    features && features.length
      ? features
      : [
          "Wide range of authentic products",
          "Secure online payments",
          "Fast & reliable delivery",
          "24/7 customer support",
        ];

  return (
    <div className="service-item-wrapper tj-fadein-right-on-scroll">
      <style jsx>
        {`
          /* Make everything white by default */
          .service-item.style-2 .title-area .service-icon i,
          .service-item.style-2 .title-area .title a,
          .service-item.style-2 .service-content .desc,
          .service-item.style-2 .list-items li i,
          .service-item.style-2 .list-items li {
            color: #ffffff !important;
          }
          /* Hover effect for title link */
          .service-item.style-2 .title-area .title a:hover {
            color: #29B6D8 !important;
          }
        `}
      </style>
      <div className="service-item style-2">
        <div className="title-area">
          <div className="service-icon">
            <i className={iconName ? iconName : "tji-service-1"}></i>
          </div>
          <h4 className="title">
            <Link href={`/services/${id}`}>{title || "9ja Mart Service"}</Link>
          </h4>
        </div>
        <div className="service-content">
          <p className="desc">{cardDesc}</p>
          <ul className="list-items">
            {cardFeatures.slice(0, 3).map((feature, i) => (
              <li key={i}>
                <i className="tji-list"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;