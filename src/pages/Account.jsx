import React, { act, useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import Aos from "aos";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { ModeContext } from "../context/ModeContext";
import Wishlist from "./Wishlist";
import SingleCard from "../component/SingleCard";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
const Account = ({ email }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const {t} = useTranslation();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const activeUser = JSON.parse(localStorage.getItem("activeUser"));
      if (activeUser) {
        setUser(activeUser);
      }
    }
  }, [navigate]);
  const handleLogout = () => {
    const confirmLogout = Swal.fire({
      title: "Please fill the gap!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
    if (confirmLogout) {
      localStorage.removeItem("login");
      localStorage.removeItem("activeUser");
      setUser({ name: "", email: "" });
      navigate("/login");
      window.location.reload();
    }
  };
  const isAdmin = user.email === "nigar03mahmudova@gmail.com";
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setAvatar(newAvatar);
        localStorage.setItem(`avatar_${user.email}`, newAvatar);
      };
      reader.readAsDataURL(file);
    }
  };

  // profile pic
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.email) {
      const storedAvatar = localStorage.getItem(`avatar_${user.email}`);
      if (storedAvatar) {
        setAvatar(storedAvatar);
      }
    }
  }, [user.email]);

  const [activeSection, setActiveSection] = useState("account-section");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);

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

  return (
    <>
      <Header />
      <div
        className={mode === "light" ? "hesab account" : "hesab dark-account"}
      >
        <div className="account-card">
          <div className="left-part">
            <div className="profil-pic">
              <div className="avatars">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  id="fileInput"
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput" className="avatar-button">
                  {avatar ? (
                    <img src={avatar} alt="Profile Avatar" width="100" />
                  ) : (
                    <img
                      src="https://i.pinimg.com/736x/d4/f7/17/d4f71779dd981d9ce69fe08712805b23.jpg"
                      alt=""
                    />
                  )}
                </label>
              </div>
            </div>
            <div className="sections">
              <button onClick={() => handleSectionChange("account-section")}>
                <h4>{t("Account")}</h4>
              </button>
              <button onClick={() => handleSectionChange("wishlist-section")}>
                <h4>{t("Wishlist")}</h4>
              </button>
              <button onClick={() => handleSectionChange("privacy-section")}>
                <h4>{t("Privacy")}</h4>
              </button>
              <button onClick={() => handleSectionChange("help-section")}>
                <h4>{t("Help")}</h4>
              </button>
              <button
                style={{ color: "white" }}
                onClick={handleLogout}
                className="exit"
              >
                {t("Logout")}
              </button>
            </div>
          </div>
          <div
            id="account-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "account-section" ? "active" : ""
            }`}
          >
            <h2>{t("AccountSetting")}</h2>
            <div className="basic-info animate__animated animate__slideInUp">
              <h4>Basic Info</h4>
              <div className="personal-information">
                <div>
                  <h5>{t("name")}:</h5>
                  <h5>{user.name}</h5>
                </div>
                <div>
                  <h5>Email:</h5>
                  <h5>{user.email}</h5>
                </div>
                <div>
                  <h5>{t("password")}:</h5>
                  <h5>{user.password}</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            id="wishlist-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "wishlist-section" ? "active" : ""
            }`}
          >
            <h2>{t("WishlistSection")}</h2>
            {isWishlistEmpty ? (
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
                <h3
                  className={
                    mode === "light" ? "empty-title" : "dark-empty-title"
                  }
                >
                  {t("empty")}
                </h3>
                <Link to="/">
                  {" "}
                  <button
                    className={
                      mode === "light" ? "back-home" : "dark-back-home"
                    }
                  >
                    {t("back")}
                  </button>
                </Link>{" "}
              </div>
            ) : (
              <div>
                <div
                  className={
                    mode === "light" ? "clear-button" : "dark-clear-button"
                  }
                >
                  <button
                    className="clear"
                    onClick={() =>
                      items.forEach((item) => removeWishlistItem(item.id))
                    }
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
                    <SingleCard allitems={item} key={item.id} />
                  ))}
                </div>
              </div>
            )}
            <div></div>
          </div>
          <div
            id="privacy-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "privacy-section" ? "active" : ""
            }`}
          >
            <h2>{t("PrivacySection")}</h2>
            <div className="personal-information animate__animated animate__slideInUp">
              <p>
                {t("parg5")}
              </p>
            </div>
          </div>
          <div
            id="help-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "help-section" ? "active" : ""
            }`}
          >
            <h2>{t("HelpCenter")}</h2>
            <p className="mt-5">
             {t("parg6")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
