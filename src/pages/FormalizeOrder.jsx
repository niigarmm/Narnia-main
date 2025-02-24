import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import "animate.css";
const FormalizeOrder = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const { cartTotal } = useCart();
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

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
    } else {
      localStorage.setItem("cardData", JSON.stringify(cardData));
      setOpenAlert(!openAlert);
      setTimeout(() => {
        navigate("/add-to-cart");
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
      <div className="submit-card">
        {openErrorAlert && (
          <div className="open-error-alert">
            <div className="animate__animated animate__bounceIn">
              <button
                onClick={() => {
                  setOpenErrorAlert(false);
                }}
              >
                x
              </button>
              <img
                src="https://i.pinimg.com/originals/fe/b6/b6/feb6b68d5ffc34b5f5f03f72b035f04e.gif"
                alt=""
              />
              <p>Please fill the all gap</p>
            </div>
          </div>
        )}
        {openAlert && (
          <div className="open-error-alert">
            <div className="animate__animated animate__bounceIn">
              <button
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                x
              </button>
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
          <button onClick={handleSubmit}>Submit {cartTotal}$</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormalizeOrder;
