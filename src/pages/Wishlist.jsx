import React, { useContext } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useWishlist } from "react-use-wishlist";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";
import slugify from "slugify";
import gif from "../assets/images/gif.png";
import { useCart } from "react-use-cart";
import SingleCard from "../component/SingleCard";
const Wishlist = () => {
  const [mode] = useContext(ModeContext);
  const {
    isWishlistEmpty,
    items,
    removeWishlistItem,
    inWishlist,
    clearWishlist,
    addWishlistItem,
  } = useWishlist();
  const { addItem } = useCart();
  const handleClick = () => {
    if (user) {
      addItem(allitems);
      setAdded(true);
    } else {
      navigate("/signUp");
    }
  };
  if (isWishlistEmpty) {
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
            src="https://i.pinimg.com/originals/93/23/1e/93231e82891d91eb0cf5baa402a9e45a.gif"
            alt=""
          />
          <h3 className={mode === "light" ? "empty-title" : "dark-empty-title"}>
            Your wishlist is empty
          </h3>
          <Link to="/">
            {" "}
            <button
              className={mode === "light" ? "back-home" : "dark-back-home"}
            >
              Back To Home
            </button>
          </Link>{" "}
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <div>
        <div
          className={mode === "light" ? "clear-button" : "dark-clear-button"}
        >
          <button
            className="clear"
            onClick={() => items.forEach((item) => removeWishlistItem(item.id))}
          >
            Clear Wishlist
          </button>
        </div>
        <div
          className={
            mode === "light" ? "products wish-product" : "dark-products"
          }
        >
          {items.map((item) => (
            <SingleCard  allitems={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
