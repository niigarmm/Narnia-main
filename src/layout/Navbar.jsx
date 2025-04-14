import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { ModeContext } from "../context/ModeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "" });
  const [avatar, setAvatar] = useState(null);
  const [mode] = useContext(ModeContext);
  useEffect(() => {
    if (user.email) {
      const storedAvatar = localStorage.getItem(`avatar_${user.email}`);
      if (storedAvatar) {
        setAvatar(storedAvatar);
      }
    }
  }, [user.email, avatar]);
  useEffect(() => {
    const loggedUser = localStorage.getItem("activeUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);
  const { t, i18n } = useTranslation();
  const handleUserClick = () => {
    if (!user.email) {
      navigate("/signUp");
      return;
    }

    if (user.email === "admin@gmail.com") {
      navigate("/admin");
    } else {
      navigate("/account");
    }
  };

  const { totalWishlistItems } = useWishlist();
  const { totalItems } = useCart();
  return (
    <div className="bottom-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21M3 12H21M3 17H21"
                stroke="#556328"
                strokeWidth="1.5"
                strokelinecap="round"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active about"
                  aria-current="page"
                >
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link active" aria-current="page">
                  {t("faq")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactUs"
                  className="nav-link active"
                  aria-current="page"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
            <div className="icons-cat">
              <button
                onClick={handleUserClick}
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                {user.email ? (
                  <div
                    className="avatar-name"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {avatar ? (
                      <img src={avatar} alt="Profile Avatar" />
                    ) : (
                      <img
                        src="https://i.pinimg.com/736x/d4/f7/17/d4f71779dd981d9ce69fe08712805b23.jpg"
                        alt="Default Avatar"
                      />
                    )}
                    <p className={mode === "light" ? "" : "dark-name"}>
                      {user.name}
                    </p>
                  </div>
                ) : (
                  <svg
                    width={38}
                    height={35}
                    viewBox="0 0 38 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.3556 32.0833C32.3556 26.4396 26.3057 21.875 18.8571 21.875C11.4085 21.875 5.35852 26.4396 5.35852 32.0833M26.7142 10.2083C26.7142 14.2354 23.1965 17.5 18.8571 17.5C14.5177 17.5 10.9999 14.2354 10.9999 10.2083C10.9999 6.18126 14.5177 2.91667 18.8571 2.91667C23.1965 2.91667 26.7142 6.18126 26.7142 10.2083Z"
                      stroke="#6D692E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <Link to="/wishlist" className="wishlist-icon">
                <p className="wish-count">{totalWishlistItems}</p>
                <svg
                  width={38}
                  height={35}
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
              <Link to="/add-to-cart" className="wishlist-icon">
                <p className="wish-count">{totalItems}</p>
                <svg
                  width="38"
                  height="35"
                  viewBox="0 0 38 35"
                  fill="none"
                  className="bag"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1071 20.7813C14.1071 20.367 13.7713 20.0313 13.3571 20.0313C12.9429 20.0313 12.6071 20.367 12.6071 20.7813H14.1071ZM25.1071 20.7813C25.1071 20.367 24.7713 20.0313 24.3571 20.0313C23.9429 20.0313 23.6071 20.367 23.6071 20.7813H25.1071ZM14.3552 3.46571C14.6584 3.18353 14.6755 2.70896 14.3933 2.40574C14.1111 2.10251 13.6365 2.08545 13.3333 2.36763L14.3552 3.46571ZM7.64475 7.66138C7.34152 7.94356 7.32446 8.41813 7.60664 8.72136C7.88882 9.02458 8.36339 9.04164 8.66661 8.75946L7.64475 7.66138ZM24.3809 2.36763C24.0777 2.08545 23.6031 2.10251 23.3209 2.40574C23.0387 2.70896 23.0558 3.18353 23.359 3.46571L24.3809 2.36763ZM29.0476 8.75946C29.3508 9.04164 29.8254 9.02458 30.1076 8.72136C30.3898 8.41813 30.3727 7.94356 30.0695 7.66138L29.0476 8.75946ZM6.23863 14.4534C6.16689 14.0455 5.77802 13.7729 5.37007 13.8447C4.96212 13.9164 4.68956 14.3053 4.7613 14.7132L6.23863 14.4534ZM7.71568 27.1833L6.97701 27.3132L6.97725 27.3146L7.71568 27.1833ZM29.5742 27.3583L28.8398 27.2066L28.8397 27.2068L29.5742 27.3583ZM32.9487 14.7351C33.0326 14.3295 32.7717 13.9327 32.366 13.8489C31.9604 13.765 31.5636 14.0259 31.4798 14.4316L32.9487 14.7351ZM12.6071 20.7813C12.6071 24.0472 15.4795 26.6354 18.8571 26.6354V25.1354C16.2004 25.1354 14.1071 23.1153 14.1071 20.7813H12.6071ZM18.8571 26.6354C22.2347 26.6354 25.1071 24.0472 25.1071 20.7813H23.6071C23.6071 23.1153 21.5138 25.1354 18.8571 25.1354V26.6354ZM13.3333 2.36763L7.64475 7.66138L8.66661 8.75946L14.3552 3.46571L13.3333 2.36763ZM23.359 3.46571L29.0476 8.75946L30.0695 7.66138L24.3809 2.36763L23.359 3.46571ZM3.89282 11.4479C3.89282 10.2436 4.23025 9.8187 4.55822 9.61485C4.98192 9.35148 5.64063 9.28125 6.63139 9.28125V7.78125C5.6893 7.78125 4.60372 7.8204 3.76636 8.34089C2.83325 8.92089 2.39282 9.95437 2.39282 11.4479H3.89282ZM6.63139 9.28125H31.0828V7.78125H6.63139V9.28125ZM31.0828 9.28125C32.0736 9.28125 32.7323 9.35148 33.156 9.61485C33.484 9.8187 33.8214 10.2436 33.8214 11.4479H35.3214C35.3214 9.95437 34.881 8.92089 33.9479 8.34089C33.1105 7.8204 32.0249 7.78125 31.0828 7.78125V9.28125ZM33.8214 11.4479C33.8214 12.9253 33.4556 13.283 33.1982 13.4207C33.0201 13.516 32.7679 13.5759 32.3923 13.6015C32.0086 13.6277 31.5988 13.6146 31.0828 13.6146V15.1146C31.5332 15.1146 32.0427 15.1288 32.4944 15.098C32.9541 15.0667 33.4532 14.9854 33.9056 14.7434C34.9093 14.2066 35.3214 13.1059 35.3214 11.4479H33.8214ZM31.0828 13.6146H6.63139V15.1146H31.0828V13.6146ZM6.63139 13.6146C6.11537 13.6146 5.70559 13.6277 5.32191 13.6015C4.94629 13.5759 4.69413 13.516 4.51601 13.4207C4.25863 13.283 3.89282 12.9253 3.89282 11.4479H2.39282C2.39282 13.1059 2.80487 14.2066 3.80857 14.7434C4.26098 14.9854 4.76016 15.0667 5.21985 15.098C5.67148 15.1288 6.18099 15.1146 6.63139 15.1146V13.6146ZM4.7613 14.7132L6.97701 27.3132L8.45435 27.0534L6.23863 14.4534L4.7613 14.7132ZM6.97725 27.3146C7.23805 28.7819 7.70419 30.2026 8.80883 31.2408C9.92552 32.2903 11.5677 32.8333 13.9228 32.8333V31.3333C11.7837 31.3333 10.5737 30.841 9.8361 30.1478C9.08645 29.4432 8.69617 28.414 8.45411 27.0521L6.97725 27.3146ZM13.9228 32.8333H23.3985V31.3333H13.9228V32.8333ZM23.3985 32.8333C25.9234 32.8333 27.5628 32.3242 28.6298 31.2867C29.6756 30.2697 30.0283 28.8691 30.3088 27.5099L28.8397 27.2068C28.5545 28.5892 28.2629 29.5512 27.5841 30.2113C26.9264 30.8508 25.7608 31.3333 23.3985 31.3333V32.8333ZM30.3087 27.5101L32.9487 14.7351L31.4798 14.4316L28.8398 27.2066L30.3087 27.5101Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
