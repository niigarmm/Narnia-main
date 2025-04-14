import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ModeContext } from "../context/ModeContext";
import { filterProps } from "framer-motion";
import { getProduct } from "../tools/action/productAction";
import store from "../tools/store/configureStore";
import supabase from "../../utils/supabase.js";
import { useWishlist } from "react-use-wishlist";
import "animate.css";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
  const [value, setValue] = React.useState(1);
  const navigate = useNavigate();

  const [mode] = useContext(ModeContext);
  const { addItem, removeItem } = useCart();
  const [added, setAdded] = useState("Add to cart");
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const data = useSelector((p) => p.product);
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("narnia-product").select();
      if (!error && data) {
        store.dispatch(getProduct(data));
      }
    };

    if (data.length === 0) {
      fetchProducts();
    }
  }, [data.length]);
  useEffect(() => {
    const loggedUser = localStorage.getItem("activeUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);
  const handleClick = () => {
    if (!data) return;
    if (user) {
      if (added === "Add to cart") {
        setAdded("Added");
        addItem(product);
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
        }, 1200);
      } else {
        removeItem(product.id);
        setAdded("Add to cart");
      }
    } else {
      navigate("/signUp");
    }
  };
  const discountedPrice = (product?.price * product?.discount) / 100;

  useEffect(() => {
    if (data.length > 0) {
      const foundProduct = data.find(
        (p) => slugify(p.title, { lower: true }) === slug
      );
      setProduct(foundProduct || null);
    }
  }, [slug, data]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <div className={mode == "light" ? "detail-card " : "dark-detail-card "}>
        <div className="product-detail">
          <div className="left-part">
            <img
              src={product?.img}
              className="animate__animated animate__flipInY"
              alt={product?.title}
            />
          </div>
          <div className="right-part ">
            <h1>{product?.title}</h1>
            <div className="author animate__animated animate__fadeInUp">
              <p>
                {" "}
                <span>Author:</span> <Link to=""> {product?.author}</Link>
              </p>
            </div>
            <div className="rating">
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="price animate__animated animate__fadeInUp">
              <div className="price-text">
                {product?.discount ? (
                  <div className="d-flex gap-2 align-items-end">
                    <div className="d-flex gap-1 align-items-center discount-item">
                      <h1
                        style={{
                          fontSize: "20px",
                          textDecoration: "line-through",
                        }}
                      >
                        {product?.price}
                      </h1>
                    </div>
                    <h1>{discountedPrice.toString().slice(0, 4)}</h1>
                  </div>
                ) : (
                  <h1>{product?.price}</h1>
                )}
                <div>
                  <svg
                    width="30"
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
            <div className="buttons animate__animated animate__fadeInUp">
              <button
                class="CartBtn"
                onClick={() => {
                  handleClick();
                }}
              >
                <span class="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill=" #76514f"
                    class="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <button className="add-button">{added}</button>
              </button>
              <button
                class="CartBtn wish"
                onClick={() =>
                  inWishlist(product?.id)
                    ? removeWishlistItem(product?.id)
                    : addWishlistItem(product)
                }
              >
                <span class="IconContainer">
                  <svg
                    width="38"
                    height="35"
                    viewBox="0 0 38 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8314 30.3479C19.2971 30.5229 18.4171 30.5229 17.8828 30.3479C13.3257 28.9042 3.14282 22.8813 3.14282 12.6729C3.14282 8.16668 7.05568 4.52084 11.88 4.52084C14.74 4.52084 17.27 5.80418 18.8571 7.78751C20.4443 5.80418 22.99 4.52084 25.8343 4.52084C30.6585 4.52084 34.5714 8.16668 34.5714 12.6729C34.5714 22.8813 24.3885 28.9042 19.8314 30.3479Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p class="text">Add to wishlist</p>
              </button>
            </div>
            <h3 style={{ color: "#76514f", fontSize: "25px" }}>Description:</h3>
            <div className="desc animate__animated animate__fadeInUp">
              <p>{product?.desc}</p>
            </div>
            <h3 style={{ color: "#76514f", fontSize: "25px" }}>Book detail:</h3>
            <div className="detail">
              <p>
                <span>Pages: </span>
                {product?.pages}
              </p>
              <p>
                <span>Language: </span>
                {product?.lang}
              </p>
              <p>
                <span>Category: </span>
                {product?.cat}
              </p>
            </div>
            <div className="back">
              <Link to="/" style={{ textDecoration: "none" }}>
                <button class="CartBtn">
                  <span class="IconContainer">
                    <svg
                      viewBox="0 -0.5 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke=""
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 12C13.3284 12 14 11.3284 14 10.5C14 9.67157 13.3284 9 12.5 9C11.6716 9 11 9.67157 11 10.5C11 11.3284 11.6716 12 12.5 12V12Z"
                          stroke="#76514f"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 5C12.2099 5.00011 11.9235 5.06538 11.662 5.191L6.50001 8.382V14.654C6.45751 16.4575 7.88358 17.9547 9.68701 18H15.313C17.1164 17.9547 18.5425 16.4575 18.5 14.654V8.382L13.338 5.191C13.0765 5.06538 12.7901 5.00011 12.5 5Z"
                          stroke="#76514f"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M11.0411 13.4806C10.7543 13.1818 10.2795 13.172 9.98069 13.4588C9.68183 13.7456 9.67207 14.2204 9.95887 14.5193L11.0411 13.4806ZM15.0411 14.5193C15.3279 14.2204 15.3182 13.7456 15.0193 13.4588C14.7205 13.172 14.2457 13.1818 13.9589 13.4806L15.0411 14.5193ZM6.89428 9.01996C7.24664 8.8022 7.35575 8.34003 7.138 7.98768C6.92024 7.63532 6.45807 7.5262 6.10572 7.74396L6.89428 9.01996ZM5.10572 8.36196C4.75336 8.57972 4.64425 9.04188 4.862 9.39424C5.07976 9.7466 5.54193 9.85571 5.89428 9.63796L5.10572 8.36196ZM18.8943 7.74396C18.5419 7.5262 18.0798 7.63532 17.862 7.98768C17.6442 8.34003 17.7534 8.8022 18.1057 9.01996L18.8943 7.74396ZM19.1057 9.63796C19.4581 9.85571 19.9202 9.7466 20.138 9.39424C20.3558 9.04188 20.2466 8.57972 19.8943 8.36196L19.1057 9.63796ZM9.95887 14.5193C10.6231 15.2113 11.5408 15.6026 12.5 15.6026V14.1026C11.9493 14.1026 11.4224 13.878 11.0411 13.4806L9.95887 14.5193ZM12.5 15.6026C13.4592 15.6026 14.3769 15.2113 15.0411 14.5193L13.9589 13.4806C13.5776 13.878 13.0507 14.1026 12.5 14.1026V15.6026ZM6.10572 7.74396L5.10572 8.36196L5.89428 9.63796L6.89428 9.01996L6.10572 7.74396ZM18.1057 9.01996L19.1057 9.63796L19.8943 8.36196L18.8943 7.74396L18.1057 9.01996Z"
                          fill="#76514f"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <p class="text">Back to home</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
