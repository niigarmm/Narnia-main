import React, { useContext, useEffect, useRef, useState } from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";
import KingOfEnvy from "../assets/images/KingofEnvy.png";
import Beautifulugly from "../assets/images/beautifulUgly.png";
import WhiteFang from "../assets/images/whiteFang.png";
import { ModeContext } from "../context/ModeContext";
import Aos from "aos";
import { Link } from "react-router-dom";
const Product = () => {
  const data = useSelector((p) => p.product);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [mode] = useContext(ModeContext);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);
  const productsRef = useRef(null);
  return (
    <div className="product">
      <div className={mode === "light" ? "body-section" : "dark-body-section"}>
        <div className="hero-section">
          <div className="left-side animate__animated animate__slideInUp animate__slow">
            <div className="left-section">
              <div className="author">
                <h1 className="">King of Envy</h1>
                <span className="">by</span>
              </div>
              <h4 className="">Ana Huag</h4>
              <div className="price">
                <h1 className="">16</h1>
                <svg
                  viewBox="0 0 42 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  classname="dolar "
                >
                  <g clipPath="url(#clip0_10_24)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.1137 5.51718C31.3955 5.51663 32.6684 5.71693 33.88 6.10986C35.419 6.60917 37.0999 5.84708 37.6338 4.4077C38.1678 2.96833 37.3527 1.3967 35.8134 0.897389C33.9514 0.29331 31.9926 -0.0100637 30.0217 0.000254609C29.982 0.000462606 29.9422 0.00141989 29.9026 0.00312611C24.6289 0.230002 19.6657 2.40028 16.0983 6.03944C14.4948 7.67525 13.2319 9.54803 12.3471 11.5622H6.43812C4.80886 11.5622 3.48811 12.7973 3.48811 14.3208C3.48811 15.8443 4.80886 17.0794 6.43812 17.0794H10.9204C10.8534 17.8176 10.8331 18.5625 10.8611 19.3103C10.8331 20.058 10.8534 20.8027 10.9204 21.5407H6.43812C4.80886 21.5407 3.48811 22.7758 3.48811 24.2993C3.48811 25.8228 4.80886 27.0579 6.43812 27.0579H12.3468C13.2317 29.0722 14.4946 30.9453 16.0983 32.5811C19.6657 36.2203 24.6289 38.3907 29.9026 38.6175C29.9444 38.6194 29.9863 38.6203 30.0281 38.6205C32.4628 38.6283 34.8729 38.1662 37.1082 37.2633C38.6038 36.6589 39.2923 35.0355 38.6463 33.6369C38.0002 32.2383 36.2639 31.5941 34.7682 32.1985C33.2973 32.7927 31.7123 33.1006 30.1105 33.1034C26.4183 32.929 22.9468 31.4027 20.4476 28.8532C19.8972 28.2918 19.4038 27.6907 18.9705 27.0579H24.1381C25.7673 27.0579 27.0881 25.8228 27.0881 24.2993C27.0881 22.7758 25.7673 21.5407 24.1381 21.5407H16.8505C16.7603 20.8427 16.7295 20.1347 16.7607 19.4232C16.764 19.348 16.764 19.2727 16.7607 19.1975C16.7295 18.4857 16.7603 17.7776 16.8506 17.0794H24.1381C25.7673 17.0794 27.0881 15.8443 27.0881 14.3208C27.0881 12.7973 25.7673 11.5622 24.1381 11.5622H18.9709C19.4041 10.9296 19.8974 10.3288 20.4476 9.76753C22.9475 7.21727 26.4203 5.69083 30.1137 5.51718Z"
                      fill="#5D5D29"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_24">
                      <rect
                        width="41.3"
                        height="38.6203"
                        fill="#5d5d29"
                        transform="translate(0.538467)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <Link to="/kingOfEnvy">
                <button className="">More Information</button>
              </Link>
            </div>
            <div className="right-section  ">
              <img src={KingOfEnvy} alt="" />
            </div>
          </div>
          <div className="right-side">
            <div className="upper-part left-side animate__animated animate__slideInUp animate__slow">
              <div className="left-section ">
                <div className="author">
                  <h1 className="">Beautiful ugly</h1>
                  <span>by</span>
                </div>
                <h4 className="">Alice Freeney</h4>
                <div className="price">
                  <h1 className="">14.99</h1>
                  <svg
                    width={42}
                    height={39}
                    viewBox="0 0 42 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    classname
                  >
                    <g clipPath="url(#clip0_10_24)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.1137 5.51718C31.3955 5.51663 32.6684 5.71693 33.88 6.10986C35.419 6.60917 37.0999 5.84708 37.6338 4.4077C38.1678 2.96833 37.3527 1.3967 35.8134 0.897389C33.9514 0.29331 31.9926 -0.0100637 30.0217 0.000254609C29.982 0.000462606 29.9422 0.00141989 29.9026 0.00312611C24.6289 0.230002 19.6657 2.40028 16.0983 6.03944C14.4948 7.67525 13.2319 9.54803 12.3471 11.5622H6.43812C4.80886 11.5622 3.48811 12.7973 3.48811 14.3208C3.48811 15.8443 4.80886 17.0794 6.43812 17.0794H10.9204C10.8534 17.8176 10.8331 18.5625 10.8611 19.3103C10.8331 20.058 10.8534 20.8027 10.9204 21.5407H6.43812C4.80886 21.5407 3.48811 22.7758 3.48811 24.2993C3.48811 25.8228 4.80886 27.0579 6.43812 27.0579H12.3468C13.2317 29.0722 14.4946 30.9453 16.0983 32.5811C19.6657 36.2203 24.6289 38.3907 29.9026 38.6175C29.9444 38.6194 29.9863 38.6203 30.0281 38.6205C32.4628 38.6283 34.8729 38.1662 37.1082 37.2633C38.6038 36.6589 39.2923 35.0355 38.6463 33.6369C38.0002 32.2383 36.2639 31.5941 34.7682 32.1985C33.2973 32.7927 31.7123 33.1006 30.1105 33.1034C26.4183 32.929 22.9468 31.4027 20.4476 28.8532C19.8972 28.2918 19.4038 27.6907 18.9705 27.0579H24.1381C25.7673 27.0579 27.0881 25.8228 27.0881 24.2993C27.0881 22.7758 25.7673 21.5407 24.1381 21.5407H16.8505C16.7603 20.8427 16.7295 20.1347 16.7607 19.4232C16.764 19.348 16.764 19.2727 16.7607 19.1975C16.7295 18.4857 16.7603 17.7776 16.8506 17.0794H24.1381C25.7673 17.0794 27.0881 15.8443 27.0881 14.3208C27.0881 12.7973 25.7673 11.5622 24.1381 11.5622H18.9709C19.4041 10.9296 19.8974 10.3288 20.4476 9.76753C22.9475 7.21727 26.4203 5.69083 30.1137 5.51718Z"
                        fill="#5D5D29"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_24">
                        <rect
                          width="41.3"
                          height="38.6203"
                          fill="white"
                          transform="translate(0.538467)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <Link to="/beauty-ugly">
                  <button className="">More Information</button>
                </Link>
              </div>
              <div className="right-section ">
                <img src={Beautifulugly} alt="" />
              </div>
            </div>
            <div className="upper-part left-side animate__animated animate__slideInUp animate__slow">
              <div className="left-section  ">
                <div className="author">
                  <h1 className="">White Fang</h1>
                  <span>by</span>
                </div>
                <h4 className="">Jack London</h4>
                <div className="price">
                  <h1 className="">5.99</h1>
                  <svg
                    classname
                    width={42}
                    height={39}
                    viewBox="0 0 42 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_10_24)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.1137 5.51718C31.3955 5.51663 32.6684 5.71693 33.88 6.10986C35.419 6.60917 37.0999 5.84708 37.6338 4.4077C38.1678 2.96833 37.3527 1.3967 35.8134 0.897389C33.9514 0.29331 31.9926 -0.0100637 30.0217 0.000254609C29.982 0.000462606 29.9422 0.00141989 29.9026 0.00312611C24.6289 0.230002 19.6657 2.40028 16.0983 6.03944C14.4948 7.67525 13.2319 9.54803 12.3471 11.5622H6.43812C4.80886 11.5622 3.48811 12.7973 3.48811 14.3208C3.48811 15.8443 4.80886 17.0794 6.43812 17.0794H10.9204C10.8534 17.8176 10.8331 18.5625 10.8611 19.3103C10.8331 20.058 10.8534 20.8027 10.9204 21.5407H6.43812C4.80886 21.5407 3.48811 22.7758 3.48811 24.2993C3.48811 25.8228 4.80886 27.0579 6.43812 27.0579H12.3468C13.2317 29.0722 14.4946 30.9453 16.0983 32.5811C19.6657 36.2203 24.6289 38.3907 29.9026 38.6175C29.9444 38.6194 29.9863 38.6203 30.0281 38.6205C32.4628 38.6283 34.8729 38.1662 37.1082 37.2633C38.6038 36.6589 39.2923 35.0355 38.6463 33.6369C38.0002 32.2383 36.2639 31.5941 34.7682 32.1985C33.2973 32.7927 31.7123 33.1006 30.1105 33.1034C26.4183 32.929 22.9468 31.4027 20.4476 28.8532C19.8972 28.2918 19.4038 27.6907 18.9705 27.0579H24.1381C25.7673 27.0579 27.0881 25.8228 27.0881 24.2993C27.0881 22.7758 25.7673 21.5407 24.1381 21.5407H16.8505C16.7603 20.8427 16.7295 20.1347 16.7607 19.4232C16.764 19.348 16.764 19.2727 16.7607 19.1975C16.7295 18.4857 16.7603 17.7776 16.8506 17.0794H24.1381C25.7673 17.0794 27.0881 15.8443 27.0881 14.3208C27.0881 12.7973 25.7673 11.5622 24.1381 11.5622H18.9709C19.4041 10.9296 19.8974 10.3288 20.4476 9.76753C22.9475 7.21727 26.4203 5.69083 30.1137 5.51718Z"
                        fill="#5D5D29"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_24">
                        <rect
                          width="41.3"
                          height="38.6203"
                          fill="white"
                          transform="translate(0.538467)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <Link to="/white-fang">
                  <button className="">More Information</button>
                </Link>
              </div>
              <div className="right-section ">
                <img src={WhiteFang} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mode === "light" ?"products" : "dark-products"} ref={productsRef}>
        {currentItems.map((item) => (
          <SingleCard allitems={item} key={item.id} />
        ))}
      </div>
      <div className={mode=== "light" ? "pagination" : "dark-pagination"}>
        {[...Array(totalPages)].map((_, index) => (
          <Link to="#product">
            <button
              key={index + 1}
              onClick={() =>
                setCurrentPage(
                  index + 1,
                  productsRef.current.scrollIntoView({ behavior: "smooth" })
                )
              }
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
