"use client";
import getFooterMarqueeItems from "@/libs/getFooterMarqueeItems";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MarqueeSlider1 = () => {
  // Fallback items if the API returns empty – all with working Unsplash images
  const fallbackItems = [
    { title: "Electronics", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop" },
    { title: "Fashion", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=100&h=100&fit=crop" },
    { title: "Home & Living", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=100&h=100&fit=crop" },
    { title: "Beauty", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" },
    { title: "Groceries", img: "https://images.unsplash.com/photo-1595540795992-cc21e9b69c98?w=100&h=100&fit=crop" },
    { title: "Sports", img: "https://images.unsplash.com/photo-1571902943202-507ec2618b23?w=100&h=100&fit=crop" },
    { title: "Gadgets", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
  ];

  let items = getFooterMarqueeItems();
  if (!items || items.length === 0) {
    items = fallbackItems;
  }

  return (
    <div className="marquee-wrapper" style={{ background: "#f8fafc", padding: "20px 0" }}>
      <style jsx>{`
        .marquee-slider .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          margin-right: 40px;
          background: white;
          padding: 10px 20px;
          border-radius: 50px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: all 0.2s ease;
          cursor: default;
        }
        .marquee-slider .marquee-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(27,58,107,0.1);
        }
        .marquee-text {
          font-size: 1rem;
          font-weight: 600;
          color: #1B3A6B;
          margin: 0;
          white-space: nowrap;
        }
        .marquee-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
        }
        .marquee-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        freeMode={true}
        centeredSlides={true}
        loop={true}
        speed={7000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="marquee-slider"
        modules={[Autoplay]}
      >
        {items.map(({ img, title }, idx) => (
          <SwiperSlide key={idx} className="marquee-item">
            <div className="marquee-img">
              <img src={img} alt={title} />
            </div>
            <h4 className="marquee-text">{title}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeSlider1;