import React, { useContext } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [mode] = useContext(ModeContext);
  return (
    <>
      <Header />
      <div>
        {mode === "light" ? (
          <div className="light-not-found d-flex align-items-center justify-content-center">
            <h1>404</h1>
            <img
              src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
              alt=""
              style={{ width: "70%", height: "100vh" }}
            />
            <h3>Look like you'r lost...</h3>
            <Link to="/">
              <button>Back To Home</button>
            </Link>
          </div>
        ) : (
          <div className="dark-not-found light-not-found d-flex align-items-center justify-content-center">
            <h1>404</h1>
            <img
              src="https://s2.ezgif.com/tmp/ezgif-267f2fa82b94f8.gif"
              alt=""
              style={{ width: "70%", height: "100vh" }}
            />
            <h3>Look like you'r lost...</h3>
            <Link to="/">
              <button>Back To Home</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
