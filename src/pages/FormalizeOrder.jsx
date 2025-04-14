import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { ModeContext } from "../context/ModeContext";
const FormalizeOrder = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const { emptyCart } = useCart();
  const [mode] = useContext(ModeContext);
  const { cartTotal } = useCart();
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [wrongCard, setWrongCard] = useState(false);

  const handleInputChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleFocus = (e) => {
    setCardData({ ...cardData, focus: e.target.name });
  };
  const handleSubmit = () => {
    if (
      !cardData.name ||
      !cardData.number ||
      !cardData.expiry ||
      !cardData.cvc ||
      !cardData.focus
    ) {
      setOpenErrorAlert(!openErrorAlert);
    } else if (
      cardData.number.length !== 16 ||
      cardData.cvc.length !== 3 ||
      cardData.expiry.length !== 4 ||
      isNaN(cardData.number) ||
      isNaN(cardData.cvc) ||
      isNaN(cardData.expiry)
    ) {
      setWrongCard(!wrongCard);
    } else {
      localStorage.setItem("cardData", JSON.stringify(cardData));
      setOpenAlert(!openAlert);
      emptyCart();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  useEffect(() => {
    const storedCardData = localStorage.getItem("cardData");
    if (storedCardData) {
      setCardData(JSON.parse(storedCardData));
    }
  }, []);

  return (
    <div>
      <Header />
      <div className={mode === "light" ? "submit-card" : "dark-submit-card"}>
        {openErrorAlert && (
          <div className="open-error-alert">
            <div className="animate__animated animate__bounceIn">
              <img
                src="https://i.pinimg.com/originals/fe/b6/b6/feb6b68d5ffc34b5f5f03f72b035f04e.gif"
                alt=""
              />
              <p>Please fill the all gap</p>
              <button
                onClick={() => {
                  setOpenErrorAlert(false);
                }}
              >
                Ok
              </button>
            </div>
          </div>
        )}
        {wrongCard && (
          <div className="open-error-alert">
            <div className="animate__animated animate__bounceIn">
              <img
                src="https://i.pinimg.com/originals/fe/b6/b6/feb6b68d5ffc34b5f5f03f72b035f04e.gif"
                alt=""
              />
              <p>The card details are incorrect.</p>
              <button
                onClick={() => {
                  setWrongCard(false);
                }}
              >
                Ok
              </button>
            </div>
          </div>
        )}
        {openAlert && (
          <div className="open-error-alert">
            <div className="animate__animated animate__bounceIn">
              <img
                src="https://i.pinimg.com/originals/10/ce/4b/10ce4b02c6915c8749579655c1672055.gif"
                alt=""
              />
              <p>Payment Successfully</p>
            </div>
          </div>
        )}
        <Cards
          number={cardData.number}
          name={cardData.name}
          expiry={cardData.expiry}
          cvc={cardData.cvc}
          focused={cardData.focus}
          className="visa"
        />
        <div className="form-button">
          <form
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={cardData.number}
              onChange={handleInputChange}
              onFocus={handleFocus}
              maxLength="16"
            />
            <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={cardData.name}
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Expiry (MM/YY)"
              value={cardData.expiry}
              onChange={handleInputChange}
              onFocus={handleFocus}
              maxLength="5"
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cardData.cvc}
              onChange={handleInputChange}
              onFocus={handleFocus}
              maxLength="3"
            />
          </form>
          <button class="pay-btn" onClick={handleSubmit}>
            <span class="btn-text">Pay Now {cartTotal} $</span>
            <div class="icon-container">
              <div>
                <svg viewBox="0 0 24 24" className="icon card-icon">
                  <path
                    d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
                    fill="currentColor"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="icon payment-icon">
                  <path
                    d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
                    fill="currentColor"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="icon dollar-icon">
                  <path
                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="icon wallet-icon default-icon"
                >
                  <path
                    d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
                    fill="currentColor"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="icon check-icon">
                  <path
                    d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormalizeOrder;
