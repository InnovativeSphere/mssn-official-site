"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import CartProduct from "@/components/shared/cart/CartProduct";
import NoItems from "@/components/shared/others/NoItems";
import { useCartContext } from "@/context_api/CartContext";

import useSweetAlert from "@/hooks/useSweetAlert";
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage";
import countTotalPrice from "@/libs/countTotalPrice";
import { useEffect, useState } from "react";

const CartPrimary = () => {
  const {
    cartProducts: currentProducts,
    setCartProducts,
    addProductToCart,
  } = useCartContext();

  const creteAlert = useSweetAlert();
  const cartProducts = currentProducts;
  const [updatableProduct, setUpdatableProduct] = useState(null);
  const [updatableProducts, setUpdatableProducts] = useState(null);
  const totalPrice = countTotalPrice(cartProducts);
  const isCartProduct = cartProducts?.length || false;

  // Format price as Nigerian Naira
  const formatPrice = (value) => {
    if (!value && value !== 0) return "0";
    return new Intl.NumberFormat('en-NG').format(value);
  };

  // update cart
  const handleUpdateCart = () => {
    if (updatableProducts?.length) {
      addItemsToLocalstorage("cart", [...updatableProducts]);
      setCartProducts([...updatableProducts]);
      creteAlert("success", "Success! Cart updated.");
      setUpdatableProduct(null);
    }
  };

  // clear cart
  const handleClearCart = () => {
    addItemsToLocalstorage("cart", []);
    setCartProducts([]);
    creteAlert("success", "Success! Cart cleared.");
  };

  useEffect(() => {
    setUpdatableProducts([...cartProducts]);
  }, [cartProducts]);

  return (
    <section className="full-width tj-page__area section-gap" style={{ backgroundColor: "#ffffff" }}>
      <style jsx>{`
        .shop_table th {
          color: #1B3A6B;
          font-weight: 600;
          border-bottom: 2px solid #e2e8f0;
        }
        .shop_table td {
          color: #1B3A6B;
          border-bottom: 1px solid #e2e8f0;
        }
        .cart_totals h3 {
          color: #1B3A6B;
          font-weight: 700;
        }
        .cart_totals th {
          color: #1B3A6B;
        }
        .cart_totals td {
          color: #29B6D8;
          font-weight: 700;
        }
        .coupon input.input-text {
          border: 1px solid #e2e8f0;
          border-radius: 40px;
          padding: 10px 16px;
          width: 200px;
          transition: 0.2s;
        }
        .coupon input.input-text:focus {
          border-color: #29B6D8;
          outline: none;
          box-shadow: 0 0 0 2px rgba(41,182,216,0.2);
        }
        .tj-cart-update-btn .tj-primary-btn,
        .wc-proceed-to-checkout .tj-primary-btn {
          background-color: #1B3A6B;
          border-color: #1B3A6B;
          color: white;
          transition: 0.2s;
        }
        .tj-cart-update-btn .tj-primary-btn:hover,
        .wc-proceed-to-checkout .tj-primary-btn:hover {
          background-color: #29B6D8;
          border-color: #29B6D8;
          color: #1B3A6B;
        }
        .tj-cart-update-btn .tj-primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .coupon .tj-primary-btn {
          background-color: #29B6D8;
          border-color: #29B6D8;
          color: #1B3A6B;
        }
        .coupon .tj-primary-btn:hover {
          background-color: #1B3A6B;
          border-color: #1B3A6B;
          color: white;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {!isCartProduct ? (
              <NoItems
                text="Your cart is currently empty!"
                navText="Return to shop"
                navUrl="/shop"
              />
            ) : (
              <div className="tj-page__container">
                <div className="woocommerce">
                  <div className="woocommerce-notices-wrapper"></div>
                  <div className="row cart-wrapper">
                    <div className="col-sm-12">
                      <form className="woocommerce-cart-form section-bottom-gap">
                        <div className="shop_table_wrapper">
                          <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                            <thead>
                              <tr>
                                <th className="product-thumbnail">Product</th>
                                <th className="product-name"></th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Subtotal</th>
                                <th className="product-remove">&nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartProducts?.map((product, idx) => (
                                <CartProduct
                                  key={idx}
                                  product={product}
                                  updatableProducts={updatableProducts}
                                  setUpdatableProducts={setUpdatableProducts}
                                  setUpdatableProduct={setUpdatableProduct}
                                  handleClearCart={handleClearCart}
                                />
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="cart_totals_action_wrap">
                          <div className="actions">
                            {isCartProduct && (
                              <div className="row rg-30 align-items-center">
                                <div className="col-md-8">
                                  <div className="coupon">
                                    <input
                                      type="text"
                                      name="coupon_code"
                                      className="input-text"
                                      id="coupon_code"
                                      placeholder="Coupon code"
                                    />{" "}
                                    <ButtonPrimary
                                      type={"button"}
                                      text={"Apply coupon"}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="tj-cart-update-btn text-md-end">
                                    <button
                                      type="button"
                                      className="update-cart tj-primary-btn"
                                      name="update_cart"
                                      value="Update cart"
                                      disabled={updatableProduct ? false : true}
                                      onClick={handleUpdateCart}
                                    >
                                      <span className="btn-text">
                                        <span>Update cart</span>
                                      </span>
                                      <span className="btn-icon">
                                        <i className="tji-arrow-right-long"></i>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                            <input
                              type="hidden"
                              id="woocommerce-cart-nonce"
                              name="woocommerce-cart-nonce"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-sm-12">
                      <div className="cart-collaterals">
                        <div className="cart_totals">
                          <h3>Cart totals</h3>
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td data-title="Subtotal">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">₦</span>
                                      {formatPrice(totalPrice)}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">₦</span>
                                        {formatPrice(totalPrice)}
                                      </bdi>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="wc-proceed-to-checkout">
                            <ButtonPrimary
                              text={"Proceed to checkout"}
                              url={"/checkout"}
                              className={"checkout-button button alt wc-forward"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default CartPrimary;