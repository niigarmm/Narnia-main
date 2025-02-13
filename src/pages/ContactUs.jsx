import React, { useContext } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../assets/sass/contactCard.scss";
import { ModeContext } from "../context/ModeContext";
import "animate.css";

const ContactUs = () => {
  const [mode] = useContext(ModeContext);
  return (
    <div>
      <Header />
      <div
        className={
          mode === "light" ? "contact-container" : "dark-contact-container"
        }
      >
        <h1 className="animate__animated animate__slideInUp animate__slow">
          Contact Us
        </h1>
        <div className={mode === "light" ? "contact" : "dark-contact"}>
          <div className="input">
            <div className="input-side animate__animated animate__slideInUp animate__slow">
              <input
                type="text"
                placeholder="Email"
                className="email animate__animated animate__slideInUp animate__slow"
              />
              <input
                type="text"
                placeholder="Phone"
                className="phone animate__animated animate__slideInUp animate__slow"
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="name animate__animated animate__slideInUp animate__slow"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="message animate__animated animate__slideInUp animate__slow"
            ></textarea>
            <button>Send</button>
          </div>
          <div className="right-side">
            <div className="card animate__animated animate__slideInUp animate__slow">
              <div className="profile-pic">
                <img
                  src="https://i.pinimg.com/474x/e3/a8/b2/e3a8b2012fa7804d64383ae24bb3810b.jpg"
                  alt=""
                />
              </div>
              <div className="bottom">
                <div className="content">
                  <span className="name">Narnia</span>
                  <span className="about-me">+994 50 741 78 14</span>
                  <span className="about-me">narnia.shop@gmail.com</span>
                  <span className="about-me">Azerbaijan,Baku</span>
                </div>
                <div className="bottom-bottom">
                  <div className="social-links-container">
                    <div style={{'display':'flex','gap':'10px'}}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
