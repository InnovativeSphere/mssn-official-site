"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import QuantityInput from "@/components/shared/Inputs/QuantityInput";
import ProductDetailsSlider from "@/components/shared/sidebar/widgets/ProductDetailsSlider";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import getProducts from "@/libs/getProducts";
import makePath from "@/libs/makePath";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";

const ProductDetailsPrimary = ({ setCurrentTitle, currentItemId }) => {
  const [quantity, setQuantity] = useState(1);
  const items = getProducts();
  const currentId = currentItemId;
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist } = useWishlistContext();
  const {
    prevId,
    nextId,
    currentItem: item = {},
    isPrevItem,
    isNextItem,
  } = getPreviousNextItem(items, currentId);

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
    tags,
    description,
  } = item;

  // Fallback Unsplash image based on product ID (stationery/gadgets)
  const getProductImage = (productId) => {
    const imageMap = {
      1: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
      2: "https://images.unsplash.com/photo-1531297484001-80022131f5a3?w=600&h=600&fit=crop",
      3: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop",
      4: "https://images.unsplash.com/photo-1567003223558-0a473e7e2d9d?w=600&h=600&fit=crop",
      5: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      6: "https://images.unsplash.com/photo-1585386959984-a4155220b1a8?w=600&h=600&fit=crop",
    };
    const fallback = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop";
    return imageMap[productId] || fallback;
  };

  const productImage = (img && img !== "/images/product/product-1.webp") ? img : getProductImage(id);

  // Format price as Nigerian Naira
  const formatPrice = (value) => {
    if (!value && value !== 0) return "0";
    return new Intl.NumberFormat('en-NG').format(value);
  };

  // Use product description if available, otherwise generate a relevant one
  const productDescription = description || `
    Shop premium ${category || "stationery"} at 9ja Mart. This high-quality product is designed for productivity and reliability. Whether for office, school, or home, you'll love the durability and value. 
    Order now and enjoy fast delivery across Nigeria.
  `;

  // Additional info based on category (fallback)
  const additionalInfo = {
    weight: sizes?.weight || "0.5 kg",
    dimensions: sizes?.dimensions || "20 × 15 × 5 cm",
    material: "Premium materials",
    warranty: "1 year warranty",
  };

  useEffect(() => {
    setCurrentTitle(title);
  }, [currentId]);

  const sliderItems = [
    { ...item, img: productImage },
    ...items?.filter(({ id: id1 }) => id1 !== id).slice(0, 3).map(p => ({
      ...p,
      img: (p.img && p.img !== "/images/product/product-1.webp") ? p.img : getProductImage(p.id)
    }))
  ];

  return (
    <section className="tj-product-area section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx>{`
        .tj-product-details-wrapper .tj-product-details-title {
          color: #1B3A6B;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .price ins {
          color: #29B6D8;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .price del {
          color: #888;
          margin-right: 10px;
        }
        .tj-product-details-query-title {
          color: #1B3A6B;
          font-weight: 600;
          margin-bottom: 15px;
        }
        .tj-product-details-query-item span {
          color: #1B3A6B;
          font-weight: 500;
          width: 90px;
        }
        .tj-product-details-query-item a,
        .tj-product-details-query-item p {
          color: #4a5568;
        }
        .tj-product-details-query-item a:hover {
          color: #29B6D8;
        }
        .tj-product-details-add-to-cart button,
        .tj-product-details-wishlist button {
          background-color: #29B6D8;
          color: #1B3A6B;
          border: none;
          padding: 10px 20px;
          border-radius: 40px;
          font-weight: 600;
          transition: 0.2s;
          cursor: pointer;
        }
        .tj-product-details-add-to-cart button:hover,
        .tj-product-details-wishlist button:hover {
          background-color: #ffffff;
          color: #1B3A6B;
          border: 1px solid #29B6D8;
        }
        .tj-product-details-buy-now-btn {
          display: inline-block;
          background-color: #1B3A6B;
          color: white;
          padding: 12px 20px;
          border-radius: 40px;
          text-align: center;
          font-weight: 600;
          transition: 0.2s;
          margin-top: 10px;
        }
        .tj-product-details-buy-now-btn:hover {
          background-color: #29B6D8;
          color: #1B3A6B;
        }
        .tj-product-details-share h6 {
          color: #1B3A6B;
          font-weight: 600;
        }
        .tj-product-details-share a {
          color: #1B3A6B;
          margin-left: 12px;
          transition: 0.2s;
        }
        .tj-product-details-share a:hover {
          color: #29B6D8;
        }
        .nav-tabs .nav-link {
          color: #1B3A6B;
          font-weight: 500;
        }
        .nav-tabs .nav-link.active {
          color: #29B6D8;
          border-bottom-color: #29B6D8;
        }
        .star-rating span {
          color: #FFB800;
        }
        .comment-form input:focus, 
        .comment-form textarea:focus {
          border-color: #29B6D8;
          outline: none;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row section-bottom-gap product">
              <div className="col-xl-6 col-lg-7">
                <ProductDetailsSlider items={sliderItems} currentItem={item} />
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="tj-product-details-wrapper">
                  <h3 className="tj-product-details-title">{title}</h3>
                  <div className="tj-product-details-price-wrapper">
                    <p className="price">
                      {previousPrice ? (
                        <del>
                          <span>₦{formatPrice(previousPrice)}</span>
                        </del>
                      ) : (
                        ""
                      )}
                      <ins>
                        <span>₦{formatPrice(price)}</span>
                      </ins>
                    </p>
                  </div>

                  <div className="product-details__short-description">
                    <p style={{ color: "#4a5568" }}>
                      {productDescription.substring(0, 180)}...
                    </p>
                  </div>

                  {status !== "Sold" ? (
                    <div className="tj-product-details-action-wrapper">
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
                                    img: productImage,
                                  });
                                  setQuantity(1);
                                }}
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
                              onClick={() =>
                                addProductToWishlist({ ...item, quantity: 1, img: productImage })
                              }
                              style={{ cursor: "pointer" }}
                            >
                              <button type="button" className="woosw-btn">
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <Link
                        href={`/checkout?id=${id}&quantity=${quantity}`}
                        className="tj-product-details-buy-now-btn w-100"
                      >
                        <span className="btn-text">Shop now</span>
                      </Link>
                    </div>
                  ) : (
                    <div className="stock-status" style={{ color: "#1B3A6B", fontWeight: "bold" }}>
                      Out of stock
                    </div>
                  )}

                  <div className="tj-product-details-query">
                    <h6 className="tj-product-details-query-title">Product Info</h6>
                    <div className="tj-product-details-query-item d-flex align-items-center">
                      <span>SKU:</span>
                      <p>{id || "9JM-001"}</p>
                    </div>
                    <div className="tj-product-details-query-item d-flex align-items-center">
                      <span>Category:</span>
                      <Link href={`/shop?category=${makePath(category)}`}>
                        {category || "Stationery"}
                      </Link>
                    </div>
                    {tags?.length ? (
                      <div className="tj-product-details-query-item d-flex align-items-center">
                        <span>Tags:</span>
                        <div>
                          {tags.map((tag, idx) => (
                            <React.Fragment key={idx + 20000}>
                              <Link href={`/shop?tag=${makePath(tag)}`}>
                                {tag}
                              </Link>
                              {idx !== tags.length - 1 ? ", " : ""}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {status !== "Sold" ? (
                    <div className="tj-product-details-share">
                      <h6>Share:</h6>
                      <Link href="https://www.facebook.com/" target="_blank" title="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link href="https://x.com/" target="_blank" title="Twitter">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="https://www.linkedin.com/" target="_blank" title="Linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link href="https://www.pinterest.com/" target="_blank" title="Pinterest">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <BootstrapWrapper>
              <div className="tj-product-details-bottom section-bottom-gap">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tj-product-details-tab-nav tj-tab">
                      <nav>
                        <div className="nav nav-tabs p-relative tj-product-tab" id="navPresentationTab" role="tablist">
                          <button className="nav-link description_tab active" id="nav-desc-tab-description" data-bs-toggle="tab" data-bs-target="#nav-desc-description" type="button" role="tab" aria-controls="nav-desc-description" aria-selected="true">
                            Description
                          </button>
                          <button className="nav-link additional_information_tab" id="nav-desc-tab-additional_information" data-bs-toggle="tab" data-bs-target="#nav-desc-additional_information" type="button" role="tab" aria-controls="nav-desc-additional_information" aria-selected="false">
                            Additional information
                          </button>
                          <button className="nav-link reviews_tab" id="nav-desc-tab-reviews" data-bs-toggle="tab" data-bs-target="#nav-desc-reviews" type="button" role="tab" aria-controls="nav-desc-reviews" aria-selected="false">
                            Reviews
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="navPresentationTabContent">
                        <div className="tab-pane fade active show" id="nav-desc-description" role="tabpanel" aria-labelledby="nav-desc-tab-description">
                          <div className="tj-product-details-description mt-30">
                            <p>{productDescription}</p>
                            <p>At 9ja Mart, we ensure all products are authentic, well‑packaged, and delivered quickly. Order today and experience the best in Nigerian e‑commerce.</p>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-desc-additional_information" role="tabpanel" aria-labelledby="nav-desc-tab-additional_information">
                          <div className="tj-product-details-description mt-30">
                            <table className="woocommerce-product-attributes shop_attributes">
                              <tbody>
                                <tr>
                                  <th>Weight</th>
                                  <td>{additionalInfo.weight}</td>
                                </tr>
                                <tr>
                                  <th>Dimensions</th>
                                  <td>{additionalInfo.dimensions}</td>
                                </tr>
                                <tr>
                                  <th>Material</th>
                                  <td>{additionalInfo.material}</td>
                                </tr>
                                <tr>
                                  <th>Warranty</th>
                                  <td>{additionalInfo.warranty}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-desc-reviews" role="tabpanel" aria-labelledby="nav-desc-tab-reviews">
                          <div className="tj-product-details-description mt-30">
                            <div className="reviews-area">
                              <div className="comments-area">
                                <h3 className="d-none mb-30">1 review for “{title}”</h3>
                                <ol className="commentlist">
                                  <li className="review">
                                    <div className="comment_container">
                                      <img className="avatar" src="https://randomuser.me/api/portraits/women/68.jpg" alt="" width="60" height="60" style={{ borderRadius: "50%" }} />
                                      <div className="comment-text">
                                        <div className="star-rating">
                                          <span style={{ width: "100%" }}></span>
                                        </div>
                                        <p className="meta">
                                          <strong className="review__author">Grace O.</strong>
                                          <span className="review__dash">–</span>
                                          <span className="review__published-date">March 15, 2025</span>
                                        </p>
                                        <div className="description">
                                          <p>“Exactly as described! Fast delivery and great quality. Will definitely shop again at 9ja Mart.”</p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ol>
                              </div>
                              <div id="review_form_wrapper">
                                <div id="review_form">
                                  <div id="respond" className="comment-respond">
                                    <h3>Leave a comment</h3>
                                    <form className="comment-form" id="commentform">
                                      <p className="comment-notes">Your email address will not be published. Required fields are marked <span className="required">*</span></p>
                                      <p className="comment-form-author comment-input">
                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                        <input id="author" name="author" type="text" required />
                                      </p>
                                      <p className="comment-form-email comment-input">
                                        <label htmlFor="semail">Email <span className="required">*</span></label>
                                        <input id="semail" name="semail" type="email" required />
                                      </p>
                                      <div className="comment-form-rating comment-rating d-flex">
                                        <span>Your rating <span className="required">*</span></span>
                                        <div className="star-ratings">
                                          <div className="fill-ratings" style={{ width: "100%" }}>
                                            <span>★★★★★</span>
                                          </div>
                                          <div className="empty-ratings">
                                            <span>★★★★★</span>
                                          </div>
                                        </div>
                                      </div>
                                      <p className="comment-input">
                                        <label htmlFor="comment">Type your review&nbsp;<span className="required">*</span></label>
                                        <textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
                                      </p>
                                      <p className="comment-check">
                                        <input id="comment-check" name="comment-check" type="checkbox" defaultChecked="yes" />
                                        <label htmlFor="comment-check">Save my name, email, and website in this browser for the next time I comment.</label>
                                      </p>
                                      <p className="form-submit">
                                        <ButtonPrimary type={"submit"} text={"Submit review"} className={"mt-0"} />
                                      </p>
                                    </form>
                                  </div>
                                </div>
                                <div className="clear"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BootstrapWrapper>
            <RelatedProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPrimary;