"use client";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import modal from "@/libs/modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductCard = ({ item, idx, setCurrentItem }) => {
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist } = useWishlistContext();
  const [isAdded, setIsAdded] = useState(false);
  const { id, title, price, previousPrice, status } = item || {};

  useEffect(() => {
    modal();
  }, []);

  // Working Unsplash images (stationery, gadgets, office – no food)
  // Each product gets a unique image based on id
  const getProductImage = (productId) => {
    const imageMap = {
      1: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=520&h=601&fit=crop",   // notebooks
      2: "https://images.unsplash.com/photo-1531297484001-80022131f5a3?w=520&h=601&fit=crop",   // smartwatch
      3: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=520&h=601&fit=crop",   // laptop
      4: "https://images.unsplash.com/photo-1567003223558-0a473e7e2d9d?w=520&h=601&fit=crop",   // pen set
      5: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=520&h=601&fit=crop",   // calculator
      6: "https://images.unsplash.com/photo-1585386959984-a4155220b1a8?w=520&h=601&fit=crop",   // planner
    };
    // Fallback for any id beyond 6
    const fallback = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=520&h=601&fit=crop";
    return imageMap[productId] || fallback;
  };

  const imageSrc = getProductImage(id);

  // Format price in Nigerian Naira (realistic amounts)
  const formatPrice = (value) => {
    return new Intl.NumberFormat('en-NG').format(value);
  };

  const handleAddToCart = () => {
    addProductToCart({
      ...item,
      quantity: 1,
    });
    setIsAdded(true);
  };

  return (
    <div className="tj-product">
      <div className="tj-product-item">
        <div className="tj-product-thumb">
          <Link href={`/shop/${id}`}>
            <Image
              src={imageSrc}
              alt={title || "Product"}
              width={520}
              height={601}
              style={{ height: "auto", borderRadius: "16px", objectFit: "cover" }}
            />
          </Link>

          {status ? (
            <div className="tj-product-badge product-on-sale">
              <span
                className={`onsale ${status === "Sold" ? "sold-out" : ""}`}
                style={{
                  backgroundColor: status === "Sold" ? "#1B3A6B" : "#29B6D8",
                  color: "#ffffff",
                  padding: "4px 12px",
                  borderRadius: "30px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {status}
              </span>
            </div>
          ) : (
            ""
          )}

          <div className="tj-product-action">
            <div className="tj-product-action-item d-flex flex-column">
              <div
                className="tj-product-action-btn product-add-wishlist-btn"
                onClick={() => addProductToWishlist({ ...item, quantity: 1 })}
                style={{ cursor: "pointer" }}
              >
                <button
                  style={{
                    background: "#1B3A6B",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "30px",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#29B6D8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1B3A6B")}
                >
                  Add to wishlist
                </button>
              </div>

              <div
                className="tj-product-action-btn tj-modal-open"
                onMouseEnter={() => setCurrentItem(item)}
                style={{ cursor: "pointer" }}
              >
                <button
                  className="tj-quick-product-details"
                  style={{
                    background: "#1B3A6B",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "30px",
                    marginTop: "8px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#29B6D8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1B3A6B")}
                >
                  <i className="fal fa-eye"></i> Quick view
                </button>
              </div>
            </div>
          </div>

          {status === "Sold" ? (
            ""
          ) : (
            <div className="tj-product-cart-btn">
              <button
                onClick={handleAddToCart}
                className={`cart-button button tj-cart-btn stock-available`}
                style={{
                  display: isAdded ? "none" : "flex",
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
              {isAdded ? (
                <Link
                  href="/cart/"
                  className="added_to_cart wc-forward"
                  title="View cart"
                  style={{
                    backgroundColor: "#1B3A6B",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "40px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View cart
                </Link>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className="tj-product-content" style={{ textAlign: "center", marginTop: "15px" }}>
          <h3 className="tj-product-title" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            <Link href={`/shop/${id}`} style={{ color: "#1B3A6B", textDecoration: "none" }}>
              {title}
            </Link>
          </h3>

          <div className="tj-product-price-wrapper" style={{ marginTop: "5px" }}>
            <span className="price" style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              {previousPrice ? (
                <del style={{ color: "#888", marginRight: "8px" }}>
                  <span>₦{formatPrice(previousPrice)}</span>
                </del>
              ) : (
                ""
              )}
              <ins style={{ textDecoration: "none", color: "#29B6D8" }}>
                <span>₦{price ? formatPrice(price) : "0"}</span>
              </ins>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;