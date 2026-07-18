import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React from "react";

const HeroInner = ({ title, text, breadcrums = [] }) => {
  // Business‑related image (office desk with stationery & laptop)
  const backgroundImage = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1920&h=400&fit=crop";

  return (
    <section
      className="tj-page-header section-gap-x"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay for better text readability (navy with transparency) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(27, 58, 107, 0.75)",
          zIndex: 1,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="tj-page-header-content text-center">
              <h1
                className="tj-page-title"
                style={{ color: "#ffffff", fontWeight: "bold" }}
              >
                {title}
              </h1>
              <div
                className="tj-page-link"
                style={{ color: "#ffffff", fontSize: "0.9rem" }}
              >
                <span>
                  <i className="tji-home" style={{ color: "#29B6D8" }}></i>
                </span>
                <span>
                  <Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
                    Home
                  </Link>
                </span>
                <span>
                  <i className="tji-arrow-right" style={{ fontSize: "12px" }}></i>
                </span>
                {breadcrums?.length
                  ? breadcrums.map(({ name, path }, idx) => (
                      <React.Fragment key={idx}>
                        <span>
                          <Link
                            href={path ? path : "/"}
                            style={{ color: "#ffffff", textDecoration: "none" }}
                          >
                            {name}
                          </Link>
                        </span>
                        <span>
                          <i className="tji-arrow-right" style={{ fontSize: "12px" }}></i>
                        </span>
                      </React.Fragment>
                    ))
                  : ""}
                <span>
                  <span style={{ color: "#29B6D8" }}>
                    {sliceText(text, 28, true)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep the original overlay shape if needed (optional) */}
      {/* <div
        className="page-header-overlay"
        style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')` }}
      ></div> */}
    </section>
  );
};

export default HeroInner;