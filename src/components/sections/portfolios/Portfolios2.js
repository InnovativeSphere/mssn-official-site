"use client";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolios2 = () => {
  // Featured products – all images verified working, no fashion
  const featuredProducts = [
    {
      id: 1,
      title: "Smartphones & Accessories",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=500&fit=crop",
      price: "₦80,000 - ₦250,000",
      link: "/product/1",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=500&fit=crop",
      price: "₦25,000",
      link: "/product/2",
    },
    {
      id: 3,
      title: "Home Security Cameras",
      category: "Smart Home",
      image: "https://images.unsplash.com/photo-1557322041-3ccca3e24346?w=600&h=500&fit=crop",
      price: "₦45,000",
      link: "/product/3",
    },
    {
      id: 4,
      title: "Kitchen Appliances",
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=600&h=500&fit=crop",
      price: "₦35,000 - ₦120,000",
      link: "/product/4",
    },
    {
      id: 5,
      title: "Organic Beauty Products",
      category: "Beauty & Health",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4ebeacc?w=600&h=500&fit=crop",
      price: "₦8,000 - ₦25,000",
      link: "/product/5",
    },
    {
      id: 6,
      title: "Fitness Trackers",
      category: "Sports & Fitness",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=500&fit=crop",
      price: "₦30,000",
      link: "/product/6",
    },
    {
      id: 7,
      title: "Gaming Laptops",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=500&fit=crop",
      price: "₦450,000",
      link: "/product/7",
    },
  ];

  return (
    <section className="tj-project-section-2 section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx global>{`
        .tj-project-section-2 .sec-heading .sub-title {
          color: #29B6D8 !important;
        }
        .tj-project-section-2 .sec-heading .sec-title {
          color: #1B3A6B !important;
        }
        .tj-project-section-2 .sec-heading .sec-title span {
          color: #29B6D8 !important;
        }
        .featured-product-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          margin-bottom: 20px;
        }
        .featured-product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(27, 58, 107, 0.15);
        }
        .product-image {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .featured-product-card:hover .product-image img {
          transform: scale(1.05);
        }
        .product-category {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #29B6D8;
          color: #1B3A6B;
          padding: 5px 12px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }
        .product-info {
          padding: 20px;
        }
        .product-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1B3A6B;
          margin-bottom: 8px;
        }
        .product-price {
          font-size: 1.1rem;
          font-weight: 600;
          color: #29B6D8;
          margin-bottom: 15px;
        }
        .shop-now-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1B3A6B;
          text-decoration: none;
          font-weight: 500;
          transition: gap 0.3s ease;
        }
        .shop-now-link:hover {
          color: #29B6D8;
          gap: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #29B6D8 !important;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-2 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                Best Sellers
              </span>
              <h2 className="sec-title text-anim">
                Discover Our <span>Top Picks for You</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
              <Swiper
                slidesPerView={1.2}
                spaceBetween={15}
                loop={true}
                speed={1500}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ el: ".swiper-pagination-area", clickable: true }}
                breakpoints={{
                  576: { slidesPerView: 1.7, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 2.2, spaceBetween: 30 },
                  1400: { slidesPerView: 2.4, spaceBetween: 30 },
                }}
                modules={[Pagination, Autoplay]}
                className="project-slider"
              >
                {featuredProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="featured-product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="product-category">{product.category}</span>
                      </div>
                      <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <div className="product-price">{product.price}</div>
                        <Link href={product.link} className="shop-now-link">
                          Shop now <i className="tji-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination-area"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios2;