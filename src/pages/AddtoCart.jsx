import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useCart } from "react-use-cart";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";
const AddtoCart = () => {
  const {
    isEmpty,
    cartTotal,
    emptyCart,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const [total, setTotal] = useState(cartTotal);

  const handleCheckboxChange = (item, checked) => {
    const itemPrice = item.discount
      ? (item.price * (item.discount)) / 100
      : item.price;

    setTotal((prevTotal) =>
      checked
        ? prevTotal + itemPrice * item.quantity
        : prevTotal - itemPrice * item.quantity
    );
  };

  useEffect(() => {
    const newTotal = items.reduce((acc, item) => {
      const itemPrice = item.discount
        ? (item.price * (item.discount)) / 100
        : item.price;

      return acc + itemPrice * item.quantity;
    }, 0);
    setTotal(newTotal);
  }, [items]);

  const [mode] = useContext(ModeContext);

  if (isEmpty)
    return (
      <>
        <Header />
        <div
          className={
            mode === "light"
              ? "d-flex align-items-center justify-content-center p-4 light-wish"
              : "d-flex align-items-center justify-content-center p-4 dark-wish"
          }
          style={{ flexDirection: "column", gap: "30px" }}
        >
          <img
            src="https://i.pinimg.com/originals/cd/c1/3c/cdc13cf84173bea89e2c4ca16bda5051.gif"
            alt=""
            className="add-img"
          />

          <h3 className={mode === "light" ? "empty-title" : "dark-empty-title"}>
            Your basket is empty
          </h3>
          <Link to="/">
            {" "}
            <button
              className={mode === "light" ? "back-home" : "dark-back-home"}
            >
              Back To Home
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  return (
    <>
      <Header />
      <div className={mode === "light" ? "cart-div" : "dark-cart-div"}>
        <div className="left-part">
          <div className="upper-part">
            <h3>
              Basket <span>({totalItems} product)</span>{" "}
            </h3>
            <button
              onClick={() => {
                emptyCart();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#ffffff"
                  d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                />
              </svg>
              Clear Basket
            </button>
          </div>
          <div className="bottom-part">
            {items.map((item, index) => (
              <div className="bottom-column" key={item.index}>
                <p>
                  <input
                    onChange={(e) =>
                      handleCheckboxChange(item, e.target.checked)
                    }
                    defaultChecked
                    type="checkbox"
                  />
                </p>
                <img src={item.img} alt={item.title} />
                <div
                  className="d-flex align-items-center camm"
                  style={{ gap: "10px" }}
                >
                  <p className="item-title">{item.title.slice(0, 50)}...</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="minus"
                      onClick={() => {
                        updateItemQuantity(item.id, (item.quantity ?? 0) - 1);
                      }}
                    >
                      -
                    </button>
                    <span className="mx-3 quantity">{item.quantity}</span>
                    <button
                      className="plus"
                      onClick={() => {
                        updateItemQuantity(item.id, (item.quantity ?? 0) + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="price">
                    <div className="price-text">
                      <h1>
                        {" "}
                        {(item.discount
                          ? (item.price * item.quantity * item.discount) / 100
                          : item.price * item.quantity
                        ).toFixed(2)}
                      </h1>
                      <div>
                        <svg
                          width="20"
                          height="44"
                          viewBox="0 0 31 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_11_777)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M22.1993 3.71429C23.1614 3.71391 24.1169 3.84876 25.0263 4.11329C26.1815 4.44944 27.4432 3.93638 27.844 2.96736C28.2447 1.99834 27.6329 0.94029 26.4775 0.604142C25.0799 0.197463 23.6096 -0.0067751 22.1302 0.000171408C22.1004 0.000311437 22.0706 0.000955899 22.0408 0.00210457C18.0823 0.154842 14.357 1.61592 11.6793 4.06588C10.4757 5.16715 9.52776 6.42794 8.86358 7.78394H4.42828C3.20535 7.78394 2.21399 8.6154 2.21399 9.64108C2.21399 10.6667 3.20535 11.4982 4.42828 11.4982H7.79271C7.74242 11.9952 7.72721 12.4967 7.74816 13.0001C7.72721 13.5035 7.7424 14.0048 7.79267 14.5017H4.42828C3.20535 14.5017 2.21399 15.3331 2.21399 16.3588C2.21399 17.3845 3.20535 18.216 4.42828 18.216H8.86338C9.52756 19.5721 10.4755 20.8331 11.6793 21.9343C14.357 24.3843 18.0823 25.8455 22.0408 25.9981C22.0722 25.9994 22.1036 26 22.1351 26.0002C23.9625 26.0054 25.7716 25.6943 27.4494 25.0865C28.572 24.6796 29.0888 23.5866 28.6039 22.6451C28.119 21.7035 26.8156 21.2699 25.693 21.6768C24.589 22.0768 23.3992 22.284 22.1969 22.2859C19.4255 22.1685 16.8198 21.141 14.9438 19.4246C14.5308 19.0467 14.1604 18.642 13.8351 18.216H17.714C18.9369 18.216 19.9283 17.3845 19.9283 16.3588C19.9283 15.3331 18.9369 14.5017 17.714 14.5017H12.2439C12.1762 14.0318 12.1531 13.5551 12.1765 13.0761C12.1789 13.0255 12.1789 12.9748 12.1765 12.9242C12.1531 12.445 12.1762 11.9683 12.244 11.4982H17.714C18.9369 11.4982 19.9283 10.6667 19.9283 9.64108C19.9283 8.6154 18.9369 7.78394 17.714 7.78394H13.8354C14.1606 7.35804 14.5309 6.95355 14.9438 6.57572C16.8203 4.85882 19.427 3.83119 22.1993 3.71429Z"
                              fill="#b07e7c"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_777">
                              <rect width={31} height={26} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    removeItem(item.id);
                  }}
                  className="x"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill="#d89f9d"
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="right-part">
          <div className="cammon">
            <p>Product:</p>
            <span>{totalItems} product</span>
          </div>
          {items.map((item, index) => (
            <div className="product-det" key={item.index}>
              <p>{item.title}</p>
              <div className="price">
                <div className="price-text">
                  <h1>
                    {(item.discount
                      ? (item.price * item.quantity * item.discount) / 100
                      : item.price * item.quantity
                    ).toFixed(2)}
                  </h1>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 31 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_11_777)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.1993 3.71429C23.1614 3.71391 24.1169 3.84876 25.0263 4.11329C26.1815 4.44944 27.4432 3.93638 27.844 2.96736C28.2447 1.99834 27.6329 0.94029 26.4775 0.604142C25.0799 0.197463 23.6096 -0.0067751 22.1302 0.000171408C22.1004 0.000311437 22.0706 0.000955899 22.0408 0.00210457C18.0823 0.154842 14.357 1.61592 11.6793 4.06588C10.4757 5.16715 9.52776 6.42794 8.86358 7.78394H4.42828C3.20535 7.78394 2.21399 8.6154 2.21399 9.64108C2.21399 10.6667 3.20535 11.4982 4.42828 11.4982H7.79271C7.74242 11.9952 7.72721 12.4967 7.74816 13.0001C7.72721 13.5035 7.7424 14.0048 7.79267 14.5017H4.42828C3.20535 14.5017 2.21399 15.3331 2.21399 16.3588C2.21399 17.3845 3.20535 18.216 4.42828 18.216H8.86338C9.52756 19.5721 10.4755 20.8331 11.6793 21.9343C14.357 24.3843 18.0823 25.8455 22.0408 25.9981C22.0722 25.9994 22.1036 26 22.1351 26.0002C23.9625 26.0054 25.7716 25.6943 27.4494 25.0865C28.572 24.6796 29.0888 23.5866 28.6039 22.6451C28.119 21.7035 26.8156 21.2699 25.693 21.6768C24.589 22.0768 23.3992 22.284 22.1969 22.2859C19.4255 22.1685 16.8198 21.141 14.9438 19.4246C14.5308 19.0467 14.1604 18.642 13.8351 18.216H17.714C18.9369 18.216 19.9283 17.3845 19.9283 16.3588C19.9283 15.3331 18.9369 14.5017 17.714 14.5017H12.2439C12.1762 14.0318 12.1531 13.5551 12.1765 13.0761C12.1789 13.0255 12.1789 12.9748 12.1765 12.9242C12.1531 12.445 12.1762 11.9683 12.244 11.4982H17.714C18.9369 11.4982 19.9283 10.6667 19.9283 9.64108C19.9283 8.6154 18.9369 7.78394 17.714 7.78394H13.8354C14.1606 7.35804 14.5309 6.95355 14.9438 6.57572C16.8203 4.85882 19.427 3.83119 22.1993 3.71429Z"
                          fill="#b07e7c"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11_777">
                          <rect width={31} height={26} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total Price:</h3>
            <p>{total.toFixed(2)}</p>
          </div>
          <div>
            <Link to="/formalize-order">
              <button className="buy ">Formalize The Order</button>
            </Link>
            <Link to="/">
              <button className="buy back">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddtoCart;
