"use client";
import NoItems from "@/components/shared/others/NoItems";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import Image from "next/image";
import Link from "next/link";

const WishlistPrimary = () => {
  const { wishlistProducts, deleteProductFromWishlist } = useWishlistContext();
  const { addProductToCart } = useCartContext();
  const iswishlistProducts = wishlistProducts?.length ? true : false;

  // Format price as Nigerian Naira
  const formatPrice = (value) => {
    if (!value && value !== 0) return "0";
    return new Intl.NumberFormat('en-NG').format(value);
  };

  // Fallback Unsplash images based on product id (stationery/gadgets)
  const getProductImage = (productId) => {
    const imageMap = {
      1: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop",
      2: "https://images.unsplash.com/photo-1531297484001-80022131f5a3?w=100&h=100&fit=crop",
      3: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&h=100&fit=crop",
      4: "https://images.unsplash.com/photo-1567003223558-0a473e7e2d9d?w=100&h=100&fit=crop",
      5: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop",
      6: "https://images.unsplash.com/photo-1585386959984-a4155220b1a8?w=100&h=100&fit=crop",
    };
    const fallback = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop";
    return imageMap[productId] || fallback;
  };

  // check if image is a local placeholder
  const isValidImage = (src) => {
    return src && src !== "./assets/images/product/product-8.webp" && !src.includes("product-");
  };

  return (
    <section className="full-width tj-page__area section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx>{`
        .woosw-list table {
          width: 100%;
          border-collapse: collapse;
        }
        .woosw-list th, .woosw-list td {
          padding: 15px;
          vertical-align: middle;
          border-bottom: 1px solid #e2e8f0;
        }
        .woosw-item--remove span {
          background-color: #1B3A6B;
          color: white;
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.2s;
          font-size: 1.2rem;
        }
        .woosw-item--remove span:hover {
          background-color: #29B6D8;
          color: #1B3A6B;
        }
        .woosw-item--name a {
          color: #1B3A6B;
          text-decoration: none;
          font-weight: 600;
          transition: 0.2s;
        }
        .woosw-item--name a:hover {
          color: #29B6D8;
        }
        .woosw-item--price .amount {
          color: #29B6D8;
          font-weight: 700;
        }
        .woosw-item--price del .amount {
          color: #888;
          font-weight: normal;
          margin-right: 8px;
        }
        .product-stock .in-stock {
          color: #29B6D8;
          font-weight: 500;
        }
        .product-stock .out-of-stock {
          color: #1B3A6B;
          font-weight: 500;
        }
        .woosw-item--atc button {
          background-color: #29B6D8;
          border: none;
          padding: 8px 16px;
          border-radius: 40px;
          color: #1B3A6B;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        .woosw-item--atc button:hover {
          background-color: #1B3A6B;
          color: white;
        }
        .woosw-item--atc button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {!iswishlistProducts ? (
              <NoItems
                text="Your Wishlist is currently empty!"
                navText="Return to shop"
                navUrl="/shop"
              />
            ) : (
              <div className="tj-page__container">
                <div className="tj-entry__content">
                  <div className="woosw-list">
                    <table className="woosw-items">
                      <tbody>
                        {wishlistProducts.map(
                          (
                            {
                              id,
                              title,
                              price,
                              previousPrice,
                              img,
                              quantity,
                              status,
                              stockSize,
                            },
                            idx,
                          ) => {
                            const imageSrc = isValidImage(img) ? img : getProductImage(id);
                            return (
                              <tr key={idx} className="woosw-item">
                                <td
                                  className="woosw-item--remove"
                                  onClick={() => deleteProductFromWishlist(id, title)}
                                >
                                  <span>×</span>
                                </td>
                                <td className="woosw-item--image">
                                  <Link href={`/shop/${id}`}>
                                    <Image
                                      src={imageSrc}
                                      alt={title || "Product"}
                                      width={80}
                                      height={80}
                                      style={{ borderRadius: "8px", objectFit: "cover" }}
                                    />
                                  </Link>
                                </td>
                                <td className="woosw-item--info">
                                  <div className="woosw-item--name">
                                    <Link href={`/shop/${id}`}>{title}</Link>
                                  </div>
                                  <div className="woosw-item--price">
                                    {previousPrice ? (
                                      <del>
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-currencySymbol">₦</span>
                                          {formatPrice(previousPrice)}
                                        </span>
                                      </del>
                                    ) : (
                                      ""
                                    )}{" "}
                                    <ins>
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">₦</span>
                                        {formatPrice(price)}
                                      </span>
                                    </ins>
                                  </div>
                                </td>
                                <td className="woosw-item--actions">
                                  <div className="woosw-item--stock">
                                    <div className="product-stock">
                                      <span className={`stock ${status === "Sold" ? "out-of-stock" : "in-stock"}`}>
                                        {status === "Sold" ? "Out of stock" : `${stockSize || "In"} stock`}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="woosw-item--atc">
                                    <button
                                      onClick={() =>
                                        addProductToCart({
                                          id,
                                          title,
                                          quantity: quantity || 1,
                                          price,
                                          img: imageSrc,
                                        })
                                      }
                                      disabled={status === "Sold"}
                                      className="cart-button button tj-cart-btn product-add-cart-btn"
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
                                </td>
                              </tr>
                            );
                          },
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistPrimary;