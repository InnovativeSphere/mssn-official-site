import Image from "next/image";

const TestimonialsCard2 = ({ testimonial }) => {
  const { text, name, role, avatar, rating } = testimonial || {};

  // Helper to display star rating
  const renderStars = (ratingValue = 0) => {
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalfStar) stars.push("½");
    while (stars.length < 5) stars.push("☆");
    return stars.join("");
  };

  return (
    <div
      className="testimonial-item"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        padding: "30px",
        color: "#1B3A6B",
      }}
    >
      {/* Quote icon (reduced size) */}
      <div
        className="quote-icon"
        style={{
          fontSize: "2rem",
          color: "#29B6D8",
          opacity: 0.6,
          marginBottom: "15px",
        }}
      >
        <i className="tji-quote"></i>
      </div>

      {/* Testimonial text - ensure visibility */}
      <div className="desc" style={{ marginBottom: "20px" }}>
        <p style={{ color: "#2d3748", fontSize: "1rem", lineHeight: "1.5" }}>
          {text}
        </p>
      </div>

      {/* Star rating (optional) */}
      {rating && (
        <div
          style={{
            marginBottom: "15px",
            color: "#29B6D8",
            fontSize: "0.9rem",
          }}
        >
          {renderStars(rating)} <span style={{ color: "#1B3A6B" }}>({rating})</span>
        </div>
      )}

      {/* Author info */}
      <div className="testimonial-author">
        <div
          className="author-inner"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div className="author-img">
            <Image
              src={avatar || "/images/avatar-placeholder.jpg"}
              alt={name || "Customer"}
              width={60}
              height={60}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="author-header">
            <h4
              className="title"
              style={{
                color: "#1B3A6B",
                marginBottom: "4px",
                fontSize: "1.1rem",
              }}
            >
              {name || "Anonymous"}
            </h4>
            <span
              className="designation"
              style={{
                color: "#29B6D8",
                fontSize: "0.85rem",
              }}
            >
              {role || "Verified Buyer"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard2;