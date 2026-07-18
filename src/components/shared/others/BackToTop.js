"use client";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollTopPos, setScrollTopPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTopPos = document.documentElement.scrollTop;

      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const value = Math.round((scrollTopPos / calcHeight) * 100);
      setScrollTopPos(scrollTopPos);
      setScrollValue(value);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="tj-back-to-top"
      onClick={scrollToTop}
      className={scrollTopPos > 100 ? "active" : ""}
      style={{
        // Green progress bar with a Cream background
        background: `conic-gradient(#0A4D3C ${scrollValue}%, #FDFBF8 ${scrollValue}%)`,
        // Gold border and subtle shadow
        border: "3px solid #C59D5F",
        boxShadow: "0 4px 15px rgba(10, 77, 60, 0.2)",
        cursor: "pointer",
        // Ensure it sits above other elements
        zIndex: 9999,
      }}
    >
      <span
        id="tj-back-to-top-percentage"
        style={{
          // Gold color for the text and icon
          color: "#C59D5F",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {scrollValue < 96 ? (
          `${scrollValue}%`
        ) : (
          <i
            className="tji-arrow-up-long"
            style={{
              color: "#C59D5F", // Forces the icon to be Gold as well
              fontSize: "1.2rem",
            }}
          ></i>
        )}
      </span>
    </div>
  );
};

export default BackToTop;