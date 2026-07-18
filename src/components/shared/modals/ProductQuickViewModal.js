"use client";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import getProducts from "@/libs/getProducts";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuantityInput from "../Inputs/QuantityInput";

const ProductQuickViewModal = ({ item = {}, totalItemsToShow }) => {
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist } = useWishlistContext();
  const [quantity, setQuantity] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const items = getProducts();

  const {
    id,
    title,
    price,
    img,
    status,
    category,
    previousPrice,
    reviews,
    sizes,
    colors,
    stockSize,
    tags,
    description,
  } = item;

  // Fallback image based on product ID (Unsplash, working)
  const getProductImage = (productId) => {
    const imageMap = {
      1: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=520&h=601&fit=crop",
      2: "https://images.unsplash.com/photo-1531297484001-80022131f5a3?w=520&h=601&fit=crop",
      3: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=520&h=601&fit=crop",
      4: "https://images.unsplash.com/photo-1567003223558-0a473e7e2d9d?w=520&h=601&fit=crop",
      5: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=520&h=601&fit=crop",
      6: "https://images.unsplash.com/photo-1585386959984-a4155220b1a8?w=520&h=601&fit=crop",
    };
    const fallback = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=520&h=601&fit=crop";
    return imageMap[productId] || fallback;
  };

  const imageSrc = (img && img !== "/images/product/product-1.webp") ? img : getProductImage(id);
  const isStockOut = status === "Sold" || stockSize === 0;

  // Format price as Nigerian Naira
  const formatPrice = (value) => {
    if (!value && value !== 0) return "0";
    return new Intl.NumberFormat('en-NG').format(value);
  };

  // Use product description if available, otherwise a relevant e‑commerce description
  const productDescription = description || 
    "Shop premium stationery, smart gadgets, and office essentials at 9ja Mart. Quality products, fast delivery, and secure payments. Order now!";

  // Slider items: main product + up to 2 other products (avoid duplicates)
  const sliderItems = [
    { ...item, img: imageSrc },
    ...items.filter(p => p.id !== id).slice(0, 2).map(p => ({
      ...p,
      img: p.img && p.img !== "/images/product/product-1.webp" ? p.img : getProductImage(p.id)
    }))
  ];

  return (
    <div className="tj-modal hidden" data-lenis-prevent>
      <div className="tj-modal-close"></div>
      <button className="tj-modal-close tj-modal-close-btn">
        <i className="fa-thin fa-times"></i>
      </button>
      <div className="tj-modal-content">
        <div className="single-product woosq-product container">
          <div className="product row">
            <div className="col-12 col-md-6 thumbnails">
              <Swiper
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{ delay: 5000 }}
                pagination={{ el: paginationRef.current, clickable: true }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                modules={[Pagination, Autoplay, Navigation]}
                className="images tj-quick-details-slider"
              >
                {sliderItems.length
                  ? sliderItems.map((slideItem, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="thumbnail">
                          <Image
                            src={slideItem.img}
                            className="attachment-woosq size-woosq"
                            alt={slideItem.title || "Product"}
                            width={520}
                            height={601}
                            style={{ objectFit: "cover", borderRadius: "16px" }}
                          />
                        </div>
                      </SwiperSlide>
                    ))
                  : ""}
                <div className="swiper-button-next" ref={nextRef}></div>
                <div className="swiper-button-prev" ref={prevRef}></div>
                <div className="swiper-pagination" ref={paginationRef}></div>
              </Swiper>
            </div>
            <div className="col-12 col-md-6 summary entry-summary">
              <div className="summary-content ps-container ps-theme-wpc">
                <div className="product-stock">
                  <span
                    className={`stock ${isStockOut ? "out-of-stock" : "in-stock"}`}
                    style={{
                      color: isStockOut ? "#1B3A6B" : "#29B6D8",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                    }}
                  >
                    {isStockOut ? "Out of stock" : `${stockSize || "In"} stock`}
                  </span>
                </div>
                <h3 className="tj-product-details-title" style={{ color: "#1B3A6B" }}>
                  {title}
                </h3>
                <p className="price" style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  {previousPrice ? (
                    <del style={{ color: "#888", marginRight: "10px" }}>
                      <span className="price-amount amount">₦{formatPrice(previousPrice)}</span>
                    </del>
                  ) : (
                    ""
                  )}
                  <span className="price-amount amount" style={{ color: "#29B6D8" }}>
                    ₦{formatPrice(price)}
                  </span>
                </p>
                <div className="product-details__short-description">
                  <p style={{ color: "#4a5568" }}>{productDescription}</p>
                </div>
                {!isStockOut && (
                  <div className="tj-product-details-action-wrapper">
                    <form className="cart">
                      <div className="tj-product-details-action-item-wrapper d-flex align-items-center">
                        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
                        <div className="tj-product-details-add-to-cart">
                          <button
                            type="button"
                            name="add-to-cart"
                            className="single_add_to_cart_button tj-cart-btn"
                            onClick={() => {
                              addProductToCart({
                                id,
                                title,
                                price,
                                quantity,
                                img: imageSrc,
                              });
                              setQuantity(1);
                            }}
                            style={{
                              backgroundColor: "#29B6D8",
                              color: "#1B3A6B",
                              border: "none",
                              padding: "10px 20px",
                              borderRadius: "40px",
                              fontWeight: "bold",
                              transition: "0.2s",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#29B6D8")}
                          >
                            <span className="btn-icon">
                              <i className="fal fa-shopping-cart"></i>
                              <i className="fal fa-shopping-cart"></i>
                            </span>
                            <span className="btn-text">
                              <span>Add to cart</span>
                            </span>
                          </button>
                        </div>
                        <div
                          className="tj-product-details-wishlist"
                          onClick={() => addProductToWishlist({ ...item, quantity: 1 })}
                          style={{ cursor: "pointer" }}
                        >
                          <button
                            type="button"
                            className="woosw-btn"
                            style={{
                              backgroundColor: "#1B3A6B",
                              color: "white",
                              border: "none",
                              padding: "10px 20px",
                              borderRadius: "40px",
                              fontWeight: "bold",
                              marginLeft: "10px",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#29B6D8")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B3A6B")}
                          >
                            Add to wishlist
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                <div className="tj-product-details-query-item d-flex align-items-center">
                  <span style={{ fontWeight: "600", color: "#1B3A6B", width: "70px" }}>SKU:</span>
                  <p style={{ color: "#4a5568", margin: 0 }}>{id || "N/A"}</p>
                </div>
                <div className="tj-product-details-query-item d-flex align-items-center">
                  <span style={{ fontWeight: "600", color: "#1B3A6B", width: "70px" }}>Category:</span>
                  <Link
                    href={`/shop?category=${makePath(category)}`}
                    style={{ color: "#29B6D8", textDecoration: "none" }}
                  >
                    {category || "Stationery"}
                  </Link>
                </div>
                {tags?.length ? (
                  <div className="tj-product-details-query-item d-flex align-items-center">
                    <span style={{ fontWeight: "600", color: "#1B3A6B", width: "70px" }}>Tags:</span>
                    <div>
                      {tags.map((tag, idx) => (
                        <React.Fragment key={idx + 20000}>
                          <Link
                            href={`/shop?tag=${makePath(tag)}`}
                            style={{ color: "#29B6D8", textDecoration: "none" }}
                          >
                            {tag}
                          </Link>
                          {idx !== tags.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                  <div className="ps-scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div>
                </div>
                <div className="ps-scrollbar-y-rail" style={{ top: "0px", right: "0px" }}>
                  <div className="ps-scrollbar-y" tabIndex="0" style={{ top: "0px", height: "0px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickViewModal;