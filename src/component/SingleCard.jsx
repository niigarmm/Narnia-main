import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import { ModeContext } from "../context/ModeContext";
import { useWishlist } from "react-use-wishlist";
import Aos from "aos";
import { useSelector } from "react-redux";
import { getProduct } from "../tools/action/productAction";
import supabase from "../../utils/supabase";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useCart } from "react-use-cart";

const SingleCard = ({ allitems }) => {
  const [mode] = useContext(ModeContext);
  const { addItem, removeItem } = useCart();
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();
  const navigate = useNavigate();
  const [openPop, setOpenPop] = useState(false);
  const [user, setUser] = useState(null);
  const [value, setValue] = React.useState(1);
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const data = useSelector((p) => p.product);
  const [added, setAdded] = useState("Add to cart");
  const [animation, setAnimation] = useState("animate__zoomIn");
  const [openAlert, setOpenAlert] = useState(false);
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
    if (openPop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openPop]);
  const handleClose = () => {
    setAnimation("animate__zoomOut");
    setTimeout(() => {
      setOpenPop(false);
      setAnimation("animate__zoomIn");
    }, 500);
  };
  useEffect(() => {
    if (data.length > 0) {
      const foundProduct = data.find(
        (p) => slugify(p.title, { lower: true }) === slug
      );
      setProduct(foundProduct || null);
    }
  }, [slug, data]);
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
        addItem(allitems);
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
        }, 1500);
      } else {
        removeItem(allitems.id);
        setAdded("Add to cart");
      }
    } else {
      navigate("/signUp");
    }
  };
  useEffect(() => {
    console.log("openAlert state:", openAlert);
  }, [openAlert]);

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);
  const discountedPrice = (allitems.price * allitems.discount) / 100;

  return (
    <div className={mode === "light" ? "single-card " : "dark-single-card"}>
      <div className="like">
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() =>
            inWishlist(allitems.id)
              ? removeWishlistItem(allitems.id)
              : addWishlistItem(allitems)
          }
        >
          {inWishlist(allitems.id) ? (
            <svg
              width={21}
              height={19}
              viewBox="0 0 21 19"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0942 17.2088C10.7684 17.3138 10.2317 17.3138 9.90585 17.2088C7.12669 16.3425 0.916687 12.7288 0.916687 6.60377C0.916687 3.90002 3.30294 1.71252 6.24502 1.71252C7.98919 1.71252 9.5321 2.48252 10.5 3.67252C11.4679 2.48252 13.0204 1.71252 14.755 1.71252C17.6971 1.71252 20.0834 3.90002 20.0834 6.60377C20.0834 12.7288 13.8734 16.3425 11.0942 17.2088Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width={21}
              height={19}
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0942 17.2088C10.7684 17.3138 10.2317 17.3138 9.90585 17.2088C7.12669 16.3425 0.916687 12.7288 0.916687 6.60377C0.916687 3.90002 3.30294 1.71252 6.24502 1.71252C7.98919 1.71252 9.5321 2.48252 10.5 3.67252C11.4679 2.48252 13.0204 1.71252 14.755 1.71252C17.6971 1.71252 20.0834 3.90002 20.0834 6.60377C20.0834 12.7288 13.8734 16.3425 11.0942 17.2088Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="see">
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            setOpenPop(!openPop);
          }}
        >
          <svg
            width={21}
            height={15}
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4455 6.28354C18.8049 6.61487 18.7165 6.59279 17.9875 5.73121C17.623 5.30046 17.0487 4.77029 16.7063 4.54937L16.0988 4.15179L16.4964 3.77621C17.3248 3.01412 16.5848 2.52812 15.5244 3.12454L14.928 3.45587C14.199 3.19087 12.9287 2.71587 12.1445 2.58337C11.4376 2.46179 11.4818 2.47287 11.4818 2.46179C11.4818 2.47287 11.4818 2.50596 11.526 1.66654C11.548 1.31312 11.283 1.01487 10.9405 0.992788C10.2226 0.937538 9.90229 1.12529 10.0459 1.85429L10.1453 2.32929C10.1453 2.32929 7.91412 2.57229 7.38395 2.63854C6.34562 2.77104 6.26837 2.74895 6.26837 2.32929C6.26837 1.53404 4.19179 1.47879 4.79929 2.63854C4.94295 2.9147 5.03129 3.1577 5.0092 3.19079C4.98712 3.21287 4.61154 3.4117 4.19179 3.62162C3.77212 3.83145 3.08729 4.30637 2.68962 4.65987L1.94962 5.31154L1.20962 4.95804C0.0829526 4.42787 -0.215214 4.83654 0.524786 5.91904C0.911453 6.49337 0.911369 6.49337 0.624203 6.91312C-0.104797 7.95137 0.359036 9.00071 2.41354 10.9778C4.5342 13.0212 9.20645 14.689 10.1564 13.7391C10.4104 13.4851 9.73662 12.6346 9.28379 12.6346C6.1027 12.6346 1.57404 9.63029 2.03795 7.82987C2.60129 5.64287 7.12987 2.7932 12.0893 3.6437C14.9059 4.11862 16.6069 5.47721 17.9102 8.27171C18.1422 8.76871 18.352 9.22162 18.3851 9.26579C18.6502 9.7297 15.1047 11.4638 12.1666 12.3143C11.1725 12.6015 11.051 12.6788 11.051 13.0101C11.051 14.203 13.6688 13.949 15.5244 12.5794C17.6893 10.9889 20.3512 10.039 19.567 8.30479C19.4014 7.92929 19.335 7.63104 19.4234 7.59787C19.9757 7.39912 20.804 6.80262 20.8593 6.5707C20.9698 6.05154 20.2076 5.87487 19.4455 6.28354Z"
              fill="white"
              fillOpacity="0.91"
            />
            <path
              d="M14.1767 7.74143C14.1436 6.50434 13.6023 5.36668 12.9286 5.00218C12.6967 4.88068 12.3652 5.02426 12.4867 5.37768C13.1605 7.4211 10.9073 7.63101 10.2335 7.18918C8.63192 6.11776 9.39408 4.9801 10.3992 4.65976C10.9515 4.48301 10.7416 4.10751 9.40508 4.1296C7.21817 4.17376 5.77117 6.02943 5.78217 7.6531C5.79325 9.78485 7.46108 11.9939 10.3329 11.8393C12.9507 11.7178 14.2319 10.1935 14.1767 7.74143Z"
              fill="white"
              fillOpacity="0.91"
            />
          </svg>
        </button>
      </div>
      {openPop && (
        <div className={mode === "light" ? "pop-up" : "dark-pop-up"}>
          <div className={`pop-cart animate__animated ${animation}`}>
            <div className="left-part">
              <img src={allitems.img} alt={allitems.title} />
            </div>
            <div className="right-part">
              <img src={allitems.img} alt={allitems.title} />
              <h1>{allitems.title}</h1>
              <div className="author animate__animated animate__fadeInUp">
                <p>
                  {" "}
                  <span>Author:</span> <Link to=""> {allitems.author}</Link>
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
              <button onClick={handleClose} className="close">
                X
              </button>
              <div className="desc">
                <p>{allitems.desc}</p>
              </div>

              <div className="pop-price animate__animated animate__fadeInUp">
                <div className="price-text">
                  {allitems.discount ? (
                    <div className="d-flex gap-2 align-items-end">
                      <div className="d-flex gap-1 align-items-center discount-item">
                        <h1
                          style={{
                            fontSize: "20px",
                            margin:" 0",
                            textDecoration: "line-through",
                          }}
                        >
                          {allitems.price}
                        </h1>
                      </div>
                      <h1 style={{margin:" 0"}}>{discountedPrice.toString().slice(0, 4)}</h1>
                    </div>
                  ) : (
                    <h1>{allitems.price}</h1>
                  )}
                
                    <svg
                      width="30"
                      height="32"
                      viewBox="0 0 31 26"
                      className="mt-2"
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
              <Link
                to={`/products/${slugify(allitems.title, { lower: true })}`}
              >
                <button className="detail">More Details</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="main-single">
        <div>
          <Link
            to={`/products/${slugify(allitems.title, { lower: true })}`}
            style={{ textDecoration: "none" }}
          >
            <img src={allitems.img} alt={allitems.title} />
          </Link>
        </div>
        <div className="name">
          <h1>
            {allitems.title} <br />
            <span>by</span>
          </h1>
          <h3>{allitems.author.slice(0, 20)}...</h3>
          <p>{allitems.desc.slice(0, 100)}...</p>
        </div>
        {allitems.discount ? (
          <div className="discount">
            <p>{allitems.discount}%</p>
          </div>
        ) : (
          ""
        )}
        <div className="price">
          <div className="price-text">
            {allitems.discount ? (
              <div className="d-flex gap-2 align-items-end">
                <div className="d-flex gap-1 align-items-center discount-item">
                  <h1
                    style={{
                      fontSize: "20px",
                      textDecoration: "line-through",
                    }}
                  >
                    {allitems.price}
                  </h1>
                </div>
                <h1>{discountedPrice.toString().slice(0, 4)}</h1>
              </div>
            ) : (
              <h1>{allitems.price}</h1>
            )}
            <div>
              <svg
                width={31}
                height={26}
                viewBox="0 0 31 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_11_777)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.1993 3.71429C23.1614 3.71391 24.1169 3.84876 25.0263 4.11329C26.1815 4.44944 27.4432 3.93638 27.844 2.96736C28.2447 1.99834 27.6329 0.94029 26.4775 0.604142C25.0799 0.197463 23.6096 -0.0067751 22.1302 0.000171408C22.1004 0.000311437 22.0706 0.000955899 22.0408 0.00210457C18.0823 0.154842 14.357 1.61592 11.6793 4.06588C10.4757 5.16715 9.52776 6.42794 8.86358 7.78394H4.42828C3.20535 7.78394 2.21399 8.6154 2.21399 9.64108C2.21399 10.6667 3.20535 11.4982 4.42828 11.4982H7.79271C7.74242 11.9952 7.72721 12.4967 7.74816 13.0001C7.72721 13.5035 7.7424 14.0048 7.79267 14.5017H4.42828C3.20535 14.5017 2.21399 15.3331 2.21399 16.3588C2.21399 17.3845 3.20535 18.216 4.42828 18.216H8.86338C9.52756 19.5721 10.4755 20.8331 11.6793 21.9343C14.357 24.3843 18.0823 25.8455 22.0408 25.9981C22.0722 25.9994 22.1036 26 22.1351 26.0002C23.9625 26.0054 25.7716 25.6943 27.4494 25.0865C28.572 24.6796 29.0888 23.5866 28.6039 22.6451C28.119 21.7035 26.8156 21.2699 25.693 21.6768C24.589 22.0768 23.3992 22.284 22.1969 22.2859C19.4255 22.1685 16.8198 21.141 14.9438 19.4246C14.5308 19.0467 14.1604 18.642 13.8351 18.216H17.714C18.9369 18.216 19.9283 17.3845 19.9283 16.3588C19.9283 15.3331 18.9369 14.5017 17.714 14.5017H12.2439C12.1762 14.0318 12.1531 13.5551 12.1765 13.0761C12.1789 13.0255 12.1789 12.9748 12.1765 12.9242C12.1531 12.445 12.1762 11.9683 12.244 11.4982H17.714C18.9369 11.4982 19.9283 10.6667 19.9283 9.64108C19.9283 8.6154 18.9369 7.78394 17.714 7.78394H13.8354C14.1606 7.35804 14.5309 6.95355 14.9438 6.57572C16.8203 4.85882 19.427 3.83119 22.1993 3.71429Z"
                    fill="#7B413F"
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
      <div className="buttons-sec">
        <button onClick={handleClick} className="add-button">
          {added}
        </button>
        <button className="more-information">
          <Link
            style={{ textDecoration: "none", color: "#d77056" }}
            to={`/products/${slugify(allitems.title, { lower: true })}`}
          >
            More Information
          </Link>
        </button>
      </div>
      {openAlert && (
        <div className="show-alert">
          <div>
            <img
              src="https://i.pinimg.com/originals/85/bb/1e/85bb1e0d75c635321f1fd9f5f0d03b0e.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCard;
