import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUser = localStorage.getItem("activeUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);
  const handleUserClick = () => {
    if (user) {
      if (user.email === "admin@gmail.com") {
        navigate("/admin");
      } else if (user.email) {
        navigate("/account");
      } else {
        navigate("/dashboard");
      }
    } else {
      navigate("/signUp");
    }
  };
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active about"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link active" aria-current="page">
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
                style={{ border: "none", backgroundColor: "transparent" }}
              >
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
                    strokelinecap="round"
                    strokelinejoin="round"
                  />
                </svg>
              </button>
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

              <svg
                width={38}
                height={35}
                viewBox="0 0 38 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                classname="bag"
              >
                <path
                  d="M14.1074 20.7813C14.1074 20.3671 13.7716 20.0313 13.3574 20.0313C12.9431 20.0313 12.6074 20.3671 12.6074 20.7813H14.1074ZM25.1074 20.7813C25.1074 20.3671 24.7716 20.0313 24.3574 20.0313C23.9431 20.0313 23.6074 20.3671 23.6074 20.7813H25.1074ZM14.3554 3.46579C14.6587 3.18361 14.6757 2.70904 14.3935 2.40581C14.1114 2.10259 13.6368 2.08553 13.3336 2.36771L14.3554 3.46579ZM7.64499 7.66146C7.34176 7.94364 7.3247 8.41821 7.60688 8.72143C7.88906 9.02466 8.36363 9.04172 8.66686 8.75954L7.64499 7.66146ZM24.3811 2.36771C24.0779 2.08553 23.6033 2.10259 23.3212 2.40581C23.039 2.70904 23.056 3.18361 23.3593 3.46579L24.3811 2.36771ZM29.0478 8.75954C29.3511 9.04172 29.8256 9.02466 30.1078 8.72143C30.39 8.41821 30.3729 7.94364 30.0697 7.66146L29.0478 8.75954ZM6.23888 14.4535C6.16714 14.0456 5.77827 13.773 5.37031 13.8447C4.96236 13.9165 4.6898 14.3054 4.76154 14.7133L6.23888 14.4535ZM7.71592 27.1834L6.97726 27.3133L6.9775 27.3147L7.71592 27.1834ZM29.5745 27.3584L28.84 27.2066L28.84 27.2069L29.5745 27.3584ZM32.949 14.7352C33.0328 14.3296 32.7719 13.9328 32.3663 13.8489C31.9606 13.7651 31.5638 14.026 31.48 14.4316L32.949 14.7352ZM12.6074 20.7813C12.6074 24.0473 15.4797 26.6355 18.8574 26.6355V25.1355C16.2007 25.1355 14.1074 23.1153 14.1074 20.7813H12.6074ZM18.8574 26.6355C22.235 26.6355 25.1074 24.0473 25.1074 20.7813H23.6074C23.6074 23.1153 21.514 25.1355 18.8574 25.1355V26.6355ZM13.3336 2.36771L7.64499 7.66146L8.66686 8.75954L14.3554 3.46579L13.3336 2.36771ZM23.3593 3.46579L29.0478 8.75954L30.0697 7.66146L24.3811 2.36771L23.3593 3.46579ZM3.89307 11.448C3.89307 10.2436 4.23049 9.81878 4.55846 9.61492C4.98217 9.35156 5.64088 9.28133 6.63164 9.28133V7.78133C5.68954 7.78133 4.60397 7.82048 3.7666 8.34097C2.8335 8.92097 2.39307 9.95444 2.39307 11.448H3.89307ZM6.63164 9.28133H31.0831V7.78133H6.63164V9.28133ZM31.0831 9.28133C32.0738 9.28133 32.7325 9.35156 33.1562 9.61492C33.4842 9.81878 33.8216 10.2436 33.8216 11.448H35.3216C35.3216 9.95444 34.8812 8.92097 33.9481 8.34097C33.1107 7.82048 32.0252 7.78133 31.0831 7.78133V9.28133ZM33.8216 11.448C33.8216 12.9254 33.4558 13.2831 33.1985 13.4208C33.0203 13.516 32.7682 13.576 32.3926 13.6016C32.0089 13.6278 31.5991 13.6147 31.0831 13.6147V15.1147C31.5335 15.1147 32.043 15.1289 32.4946 15.0981C32.9543 15.0668 33.4535 14.9854 33.9059 14.7435C34.9096 14.2066 35.3216 13.106 35.3216 11.448H33.8216ZM31.0831 13.6147H6.63164V15.1147H31.0831V13.6147ZM6.63164 13.6147C6.11561 13.6147 5.70584 13.6278 5.32215 13.6016C4.94653 13.576 4.69437 13.516 4.51625 13.4208C4.25887 13.2831 3.89307 12.9254 3.89307 11.448H2.39307C2.39307 13.106 2.80512 14.2066 3.80881 14.7435C4.26123 14.9854 4.76041 15.0668 5.22009 15.0981C5.67173 15.1289 6.18124 15.1147 6.63164 15.1147V13.6147ZM4.76154 14.7133L6.97726 27.3133L8.45459 27.0535L6.23888 14.4535L4.76154 14.7133ZM6.9775 27.3147C7.23829 28.782 7.70443 30.2027 8.80908 31.2409C9.92576 32.2904 11.5679 32.8334 13.9231 32.8334V31.3334C11.7839 31.3334 10.5739 30.841 9.83634 30.1478C9.0867 29.4433 8.69641 28.414 8.45435 27.0522L6.9775 27.3147ZM13.9231 32.8334H23.3988V31.3334H13.9231V32.8334ZM23.3988 32.8334C25.9237 32.8334 27.5631 32.3243 28.63 31.2867C29.6759 30.2697 30.0286 28.8692 30.309 27.51L28.84 27.2069C28.5547 28.5893 28.2631 29.5513 27.5843 30.2113C26.9266 30.8509 25.7611 31.3334 23.3988 31.3334V32.8334ZM30.309 27.5102L32.949 14.7352L31.48 14.4316L28.84 27.2066L30.309 27.5102Z"
                  fill="#6D692E"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
