import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";
const Footer = () => {
  const [changeMode] = useContext(ModeContext);

  return (
    <footer
      className={
        changeMode === "light"
          ? "text-center text-lg-start bg-white text-muted"
          : "text-center text-lg-start text-muted dark"
      }
      style={{ transition: ".5s" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ marginLeft: "25px" }}>
            Get connected with us on social networks:
          </span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355"
                fill="#535333"
              />
            </svg>
          </a>
          <a href="" className="me-4 text-reset">
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clippath="url(#clip0_43_279)">
                <path
                  d="M12.98 2.163C16.184 2.163 16.564 2.175 17.83 2.233C21.082 2.381 22.601 3.924 22.749 7.152C22.807 8.417 22.818 8.797 22.818 12.001C22.818 15.206 22.806 15.585 22.749 16.85C22.6 20.075 21.085 21.621 17.83 21.769C16.564 21.827 16.186 21.839 12.98 21.839C9.77602 21.839 9.39602 21.827 8.13102 21.769C4.87102 21.62 3.36002 20.07 3.21202 16.849C3.15402 15.584 3.14202 15.205 3.14202 12C3.14202 8.796 3.15502 8.417 3.21202 7.151C3.36102 3.924 4.87602 2.38 8.13102 2.232C9.39702 2.175 9.77602 2.163 12.98 2.163ZM12.98 0C9.72102 0 9.31302 0.014 8.03302 0.072C3.67502 0.272 1.25302 2.69 1.05302 7.052C0.994019 8.333 0.980019 8.741 0.980019 12C0.980019 15.259 0.994019 15.668 1.05202 16.948C1.25202 21.306 3.67002 23.728 8.03202 23.928C9.31302 23.986 9.72102 24 12.98 24C16.239 24 16.648 23.986 17.928 23.928C22.282 23.728 24.71 21.31 24.907 16.948C24.966 15.668 24.98 15.259 24.98 12C24.98 8.741 24.966 8.333 24.908 7.053C24.712 2.699 22.291 0.273 17.929 0.073C16.648 0.014 16.239 0 12.98 0ZM12.98 5.838C9.57702 5.838 6.81802 8.597 6.81802 12C6.81802 15.403 9.57702 18.163 12.98 18.163C16.383 18.163 19.142 15.404 19.142 12C19.142 8.597 16.383 5.838 12.98 5.838ZM12.98 16C10.771 16 8.98002 14.21 8.98002 12C8.98002 9.791 10.771 8 12.98 8C15.189 8 16.98 9.791 16.98 12C16.98 14.21 15.189 16 12.98 16ZM19.386 4.155C18.59 4.155 17.945 4.8 17.945 5.595C17.945 6.39 18.59 7.035 19.386 7.035C20.181 7.035 20.825 6.39 20.825 5.595C20.825 4.8 20.181 4.155 19.386 4.155Z"
                  fill="#535333"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_279">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.980019)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="me-4 text-reset">
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clippath="url(#clip0_43_281)">
                <path
                  d="M20.595 3.18413C16.991 2.93813 8.96402 2.93913 5.36502 3.18413C1.46802 3.45013 1.00902 5.80412 0.980019 12.0001C1.00902 18.1851 1.46402 20.5491 5.36502 20.8161C8.96502 21.0611 16.991 21.0621 20.595 20.8161C24.492 20.5501 24.951 18.1961 24.98 12.0001C24.951 5.81512 24.496 3.45113 20.595 3.18413ZM9.98002 16.0001V8.00013L17.98 11.9931L9.98002 16.0001Z"
                  fill="#535333"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_281">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.980019)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="me-4 text-reset">
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clippath="url(#clip0_43_283)">
                <path
                  d="M19.98 0H5.98001C3.21901 0 0.980011 2.239 0.980011 5V19C0.980011 21.761 3.21901 24 5.98001 24H19.98C22.742 24 24.98 21.761 24.98 19V5C24.98 2.239 22.742 0 19.98 0ZM8.98001 19H5.98001V8H8.98001V19ZM7.48001 6.732C6.51401 6.732 5.73001 5.942 5.73001 4.968C5.73001 3.994 6.51401 3.204 7.48001 3.204C8.44601 3.204 9.23001 3.994 9.23001 4.968C9.23001 5.942 8.44701 6.732 7.48001 6.732ZM20.98 19H17.98V13.396C17.98 10.028 13.98 10.283 13.98 13.396V19H10.98V8H13.98V9.765C15.376 7.179 20.98 6.988 20.98 12.241V19Z"
                  fill="#535333"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_283">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.980011)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className=" row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-5 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem" />
                NARNIA
              </h6>
              <p>
                Bookshop.org began as an idea to help support bookstores and
                their communities as more and more people are buying their books
                online.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Category</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link
                  to="/about"
                  className="text-reset"
                  style={{ color: "black" }}
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  FAQ
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home" /> Baku,Azerbaijan
              </p>
              <p>
                <i className="fas fa-envelope" />
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone mt-5" />
                +994 050 741 78 14
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          changeMode === "light"
            ? "text-center p-4 bg-white"
            : "text-center p-4 dark"
        }
        style={{ transition: ".5s" }}
      >
        © 2024 Copyright:
        <Link
          to="/"
          className="text-reset fw-bold"
          style={{ marginLeft: "10px" }}
        >
          Narnia.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
