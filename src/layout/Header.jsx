import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import "animate.css";
import { useTranslation } from "react-i18next";
const Header = ({ searchTerm, setSearchTerm }) => {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [changeMode, setChangeMode] = useContext(ModeContext);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const loggedUser = localStorage.getItem("registeredUsers");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 167) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleUserClick = () => {
    if (user) {
      navigate("/account");
    } else {
      navigate("/signUp");
    }
  };
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);
  const turnDarkMode = () => {
    setChangeMode("dark");
  };
  const turnLightMode = () => {
    setChangeMode("light");
  };

  const handleStop = () => {
    setStopAnimation(true);
  };
  const handleContunie = () => {
    setStopAnimation(false);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className={changeMode === "light" ? "header" : "dark-header"}
      id="upper"
    >
      <div
        className="upper-container"
        onMouseEnter={handleStop}
        onMouseLeave={handleContunie}
      >
        <div className={`scroll-element ${stopAnimation ? "paused" : ""}`}>
          <p>
            <span>20%</span>
            {t("upper-head")}
          </p>
          <p>
            <span>20%</span> {t("upper-head")}
          </p>
          <p>
            <span>20%</span> {t("upper-head")}
          </p>
          <p>
            <span>20%</span> {t("upper-head")}
          </p>
          <p>
            <span>20%</span> {t("upper-head")}
          </p>
          <p>
            <span>20%</span> {t("upper-head")}
          </p>
          <p>
            <span>20%</span> {t("upper-head")}
          </p>
        </div>
      </div>
      {isFixed && <div className="spacer"></div>}
      <div
        className={`middle-container ${
          isFixed ? "fixed animate__animated animate__slideInDown" : ""
        }`}
      >
        <div className="menu-div">
          <div className="menu-container">
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                classname="menu"
              >
                <path
                  d="M3 7H21M3 12H21M3 17H21"
                  stroke="#556328"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openMenu && (
                <div className="openMenu ">
                  <div className="menu-card">
                    <div className="upper-part">
                      <div className="search-part">
                        <input type="text" placeholder="Search..." />
                        <div className="search">
                          <svg
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.75 24.75L22.5 22.5M23.625 12.9375C23.625 18.84 18.84 23.625 12.9375 23.625C7.03496 23.625 2.25 18.84 2.25 12.9375C2.25 7.03496 7.03496 2.25 12.9375 2.25C18.84 2.25 23.625 7.03496 23.625 12.9375Z"
                              stroke="#6D692E"
                              strokeWidth="1.5"
                              strokelinecap="round"
                              stroklinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mode-lang">
                        <div className="mode">
                          <div
                            className={
                              changeMode === "light" ? "lightmode" : "close"
                            }
                            onClick={turnLightMode}
                          >
                            <button
                              onClick={handleUserClick}
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            ></button>
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8021 5.19792L19.9375 5.0625M5.06254 19.9375L5.19796 19.8021M12.5 2.16667V2.08334M12.5 22.9167V22.8333M2.16671 12.5H2.08337M22.9167 12.5H22.8334M5.19796 5.19792L5.06254 5.0625M19.9375 19.9375L19.8021 19.8021M19.2709 12.5C19.2709 16.2394 16.2395 19.2708 12.5 19.2708C8.76061 19.2708 5.72921 16.2394 5.72921 12.5C5.72921 8.76057 8.76061 5.72917 12.5 5.72917C16.2395 5.72917 19.2709 8.76057 19.2709 12.5Z"
                                stroke="#F5BBB9"
                                strokeWidth="1.5"
                                strokelinecap="round"
                                strokelinejoin="round"
                              />
                            </svg>
                          </div>
                          <div
                            className={
                              changeMode === "dark" ? "open" : "darkmode"
                            }
                            onClick={turnDarkMode}
                          >
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.1146 12.9375C2.4896 18.3021 7.04168 22.6667 12.4896 22.9062C16.3333 23.0729 19.7708 21.2812 21.8333 18.4583C22.6875 17.3021 22.2292 16.5312 20.8021 16.7917C20.1042 16.9167 19.3854 16.9687 18.6354 16.9375C13.5417 16.7292 9.37501 12.4687 9.35418 7.4375C9.34376 6.08333 9.62501 4.80208 10.1354 3.63541C10.6979 2.34375 10.0208 1.72916 8.71876 2.28125C4.59376 4.02083 1.77085 8.17708 2.1146 12.9375Z"
                                stroke="#F5BBB9"
                                strokeWidth="1.5"
                                strokelinecap="round"
                                strokelinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="lang">
                          <div className="en">
                            <p>EN</p>
                          </div>
                          <div className="az">
                            <p>AZ</p>
                          </div>
                        </div>
                      </div>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                        }}
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                      >
                        <div className="close-menu">
                          <h3>x</h3>
                        </div>
                      </button>
                    </div>
                    <div className="nav-part">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link
                            to="/"
                            className="nav-link active"
                            aria-current="page"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/about"
                            className="nav-link active"
                            aria-current="page"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/faq"
                            className="nav-link active"
                            aria-current="page"
                          >
                            FAQ
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/contactUs"
                            className="nav-link active"
                            aria-current="page"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                      <div className="icons-cat">
                        <button
                          onClick={handleUserClick}
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <svg
                            width="38"
                            height="35"
                            viewBox="0 0 38 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32.3556 32.0833C32.3556 26.4396 26.3057 21.875 18.8571 21.875C11.4085 21.875 5.35852 26.4396 5.35852 32.0833M26.7142 10.2083C26.7142 14.2354 23.1965 17.5 18.8571 17.5C14.5177 17.5 10.9999 14.2354 10.9999 10.2083C10.9999 6.18126 14.5177 2.91667 18.8571 2.91667C23.1965 2.91667 26.7142 6.18126 26.7142 10.2083Z"
                              stroke="#6D692E"
                              strokeWidth="1.5"
                              strokelinecap="round"
                              strokelinejoin="round"
                            />
                          </svg>
                        </button>
                        <Link to="/wishlist">
                          <svg
                            width="38"
                            height="35"
                            viewBox="0 0 38 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9743 30.3479C19.4401 30.5229 18.5601 30.5229 18.0258 30.3479C13.4686 28.9042 3.28577 22.8812 3.28577 12.6729C3.28577 8.16666 7.19862 4.52083 12.0229 4.52083C14.8829 4.52083 17.4129 5.80416 19.0001 7.7875C20.5872 5.80416 23.1329 4.52083 25.9772 4.52083C30.8015 4.52083 34.7143 8.16666 34.7143 12.6729C34.7143 22.8812 24.5315 28.9042 19.9743 30.3479Z"
                              stroke="#6D692E"
                              strokeWidth="1.5"
                              strokelinecap="round"
                              strokelinejoin="round"
                            />
                          </svg>
                        </Link>
                        <Link to="/add-to-cart">
                          <svg
                            className="bags"
                            width="38"
                            height="35"
                            viewBox="0 0 38 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1071 20.7813C14.1071 20.367 13.7713 20.0313 13.3571 20.0313C12.9429 20.0313 12.6071 20.367 12.6071 20.7813H14.1071ZM25.1071 20.7813C25.1071 20.367 24.7713 20.0313 24.3571 20.0313C23.9429 20.0313 23.6071 20.367 23.6071 20.7813H25.1071ZM14.3552 3.46571C14.6584 3.18353 14.6755 2.70896 14.3933 2.40574C14.1111 2.10251 13.6365 2.08545 13.3333 2.36763L14.3552 3.46571ZM7.64475 7.66138C7.34152 7.94356 7.32446 8.41813 7.60664 8.72136C7.88882 9.02458 8.36339 9.04164 8.66661 8.75946L7.64475 7.66138ZM24.3809 2.36763C24.0777 2.08545 23.6031 2.10251 23.3209 2.40574C23.0387 2.70896 23.0558 3.18353 23.359 3.46571L24.3809 2.36763ZM29.0476 8.75946C29.3508 9.04164 29.8254 9.02458 30.1076 8.72136C30.3898 8.41813 30.3727 7.94356 30.0695 7.66138L29.0476 8.75946ZM6.23863 14.4534C6.16689 14.0455 5.77802 13.7729 5.37007 13.8447C4.96212 13.9164 4.68956 14.3053 4.7613 14.7132L6.23863 14.4534ZM7.71568 27.1833L6.97701 27.3132L6.97725 27.3146L7.71568 27.1833ZM29.5742 27.3583L28.8398 27.2066L28.8397 27.2068L29.5742 27.3583ZM32.9487 14.7351C33.0326 14.3295 32.7717 13.9327 32.366 13.8489C31.9604 13.765 31.5636 14.0259 31.4798 14.4316L32.9487 14.7351ZM12.6071 20.7813C12.6071 24.0472 15.4795 26.6354 18.8571 26.6354V25.1354C16.2004 25.1354 14.1071 23.1153 14.1071 20.7813H12.6071ZM18.8571 26.6354C22.2347 26.6354 25.1071 24.0472 25.1071 20.7813H23.6071C23.6071 23.1153 21.5138 25.1354 18.8571 25.1354V26.6354ZM13.3333 2.36763L7.64475 7.66138L8.66661 8.75946L14.3552 3.46571L13.3333 2.36763ZM23.359 3.46571L29.0476 8.75946L30.0695 7.66138L24.3809 2.36763L23.359 3.46571ZM3.89282 11.4479C3.89282 10.2436 4.23025 9.8187 4.55822 9.61485C4.98192 9.35148 5.64063 9.28125 6.63139 9.28125V7.78125C5.6893 7.78125 4.60372 7.8204 3.76636 8.34089C2.83325 8.92089 2.39282 9.95437 2.39282 11.4479H3.89282ZM6.63139 9.28125H31.0828V7.78125H6.63139V9.28125ZM31.0828 9.28125C32.0736 9.28125 32.7323 9.35148 33.156 9.61485C33.484 9.8187 33.8214 10.2436 33.8214 11.4479H35.3214C35.3214 9.95437 34.881 8.92089 33.9479 8.34089C33.1105 7.8204 32.0249 7.78125 31.0828 7.78125V9.28125ZM33.8214 11.4479C33.8214 12.9253 33.4556 13.283 33.1982 13.4207C33.0201 13.516 32.7679 13.5759 32.3923 13.6015C32.0086 13.6277 31.5988 13.6146 31.0828 13.6146V15.1146C31.5332 15.1146 32.0427 15.1288 32.4944 15.098C32.9541 15.0667 33.4532 14.9854 33.9056 14.7434C34.9093 14.2066 35.3214 13.1059 35.3214 11.4479H33.8214ZM31.0828 13.6146H6.63139V15.1146H31.0828V13.6146ZM6.63139 13.6146C6.11537 13.6146 5.70559 13.6277 5.32191 13.6015C4.94629 13.5759 4.69413 13.516 4.51601 13.4207C4.25863 13.283 3.89282 12.9253 3.89282 11.4479H2.39282C2.39282 13.1059 2.80487 14.2066 3.80857 14.7434C4.26098 14.9854 4.76016 15.0667 5.21985 15.098C5.67148 15.1288 6.18099 15.1146 6.63139 15.1146V13.6146ZM4.7613 14.7132L6.97701 27.3132L8.45435 27.0534L6.23863 14.4534L4.7613 14.7132ZM6.97725 27.3146C7.23805 28.7819 7.70419 30.2026 8.80883 31.2408C9.92552 32.2903 11.5677 32.8333 13.9228 32.8333V31.3333C11.7837 31.3333 10.5737 30.841 9.8361 30.1478C9.08645 29.4432 8.69617 28.414 8.45411 27.0521L6.97725 27.3146ZM13.9228 32.8333H23.3985V31.3333H13.9228V32.8333ZM23.3985 32.8333C25.9234 32.8333 27.5628 32.3242 28.6298 31.2867C29.6756 30.2697 30.0283 28.8691 30.3088 27.5099L28.8397 27.2068C28.5545 28.5892 28.2629 29.5512 27.5841 30.2113C26.9264 30.8508 25.7608 31.3333 23.3985 31.3333V32.8333ZM30.3087 27.5101L32.9487 14.7351L31.4798 14.4316L28.8398 27.2066L30.3087 27.5101Z"
                              fill="#6D692E"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>NARNIA</h1>
          </Link>
        </div>

        <div className="search-part">
          <input
            type="text"
            placeholder={t("search")}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="search">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.75 24.75L22.5 22.5M23.625 12.9375C23.625 18.84 18.84 23.625 12.9375 23.625C7.03496 23.625 2.25 18.84 2.25 12.9375C2.25 7.03496 7.03496 2.25 12.9375 2.25C18.84 2.25 23.625 7.03496 23.625 12.9375Z"
                stroke="#6D692E"
                strokeWidth="1.5"
                strokelinecap="round"
                strokelinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mode-lang">
          <div className="mode">
            <div
              className={changeMode === "light" ? "lightmode" : "close"}
              onClick={turnLightMode}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8021 5.19792L19.9375 5.0625M5.06254 19.9375L5.19796 19.8021M12.5 2.16667V2.08334M12.5 22.9167V22.8333M2.16671 12.5H2.08337M22.9167 12.5H22.8334M5.19796 5.19792L5.06254 5.0625M19.9375 19.9375L19.8021 19.8021M19.2709 12.5C19.2709 16.2394 16.2395 19.2708 12.5 19.2708C8.76061 19.2708 5.72921 16.2394 5.72921 12.5C5.72921 8.76057 8.76061 5.72917 12.5 5.72917C16.2395 5.72917 19.2709 8.76057 19.2709 12.5Z"
                  stroke="#F5BBB9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={changeMode === "dark" ? "open" : "darkmode"}
              onClick={turnDarkMode}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1146 12.9375C2.4896 18.3021 7.04168 22.6667 12.4896 22.9062C16.3333 23.0729 19.7708 21.2812 21.8333 18.4583C22.6875 17.3021 22.2292 16.5312 20.8021 16.7917C20.1042 16.9167 19.3854 16.9687 18.6354 16.9375C13.5417 16.7292 9.37501 12.4687 9.35418 7.4375C9.34376 6.08333 9.62501 4.80208 10.1354 3.63541C10.6979 2.34375 10.0208 1.72916 8.71876 2.28125C4.59376 4.02083 1.77085 8.17708 2.1146 12.9375Z"
                  stroke="#F5BBB9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="lang">
            <div
              className={`lang-btn en ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              <p>EN</p>
            </div>
            <div
              className={`lang-btn az ${i18n.language === "az" ? "active" : ""}`}
              onClick={() => changeLanguage("az")}
            >
              <p>AZ</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
