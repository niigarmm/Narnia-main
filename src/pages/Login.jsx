import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import Footer from "../layout/Footer";
import { ModeContext } from "../context/ModeContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useTranslation } from "react-i18next";
const Login = () => {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode] = useContext(ModeContext);
  const [wrongPop, setWrongPop] = useState(false);
  const [emptySection, setEmptySection] = useState(false);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const adminData = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "123",
    phone: "+000-111-22-33",
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn) {
      navigate("/account");
    }
  }, [navigate]);
  const { t } = useTranslation();
  const loginSubmit = (e) => {
    e.preventDefault();
    const registeredUser =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (email === adminData.email && password === adminData.password) {
      localStorage.setItem("login", "true");
      localStorage.setItem("activeUser", JSON.stringify(adminData));
      navigate("/admin");
      window.location.reload();
      return;
    }
    const user = registeredUser.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("login", "true");
      localStorage.setItem("activeUser", JSON.stringify(user));
      navigate("/account");
      window.location.reload();
    } else if (!email || !password) {
      setEmptySection(true);
    } else {
      setWrongPop(true);
    }
  };
  return (
    <>
      <Header />
      <div
        className={
          mode === "light" ? "login-container" : "dark-login-container"
        }
      >
        <div className="cammon-div">
          <div className="signup-card animate__animated animate__slideInRight">
            <div className="inputs">
              <h3>{t("login")}</h3>
              <form style={{ width: "100%" }} onSubmit={loginSubmit}>
                <div>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="email"
                    placeholder={hidePlaceholder ? "" : "example@gmail.com"}
                    onFocus={() => setHidePlaceholder(true)}
                    onBlur={() => setHidePlaceholder(false)}
                  />
                  <div className="pass">
                    <input
                      type={showPass === false ? "password" : "text"}
                      className="pass"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder={hidePassword ? "" : t("password")}
                      onFocus={() => setHidePassword(true)}
                      onBlur={() => setHidePassword(false)}
                    />
                    <img
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      style={{
                        position: "absolute",
                        right:"0",
                        width: "20px",
                        height: "20px",
                      }}
                      src={
                        showPass === false
                          ? "https://img.icons8.com/ios-glyphs/30/FFFFFF/invisible.png"
                          : "https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                      }
                    />
                  </div>
                  <button class="btn-shine">
                    <span>{t("login")}</span>
                  </button>
                  <p className="text">{t("or")}</p>
                  <div className="social-m">
                    <div className="google">
                      <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div className="git">
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="microsoft">
                      <FontAwesomeIcon icon={faMicrosoft} />
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p className="login">
                      {t("havent")} <Link to="/signup">{t("create")}</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img
            src="https://i.pinimg.com/474x/dd/f0/e4/ddf0e405514c54ff13c888e6d560db89.jpg"
            alt=""
            className="animate__animated animate__slideInLeft"
          />
        </div>
        {wrongPop && (
          <div className="wrong-pop">
            <div className="wrong-card">
              <img
                src="https://i.pinimg.com/originals/ef/9d/d5/ef9dd5f6cd629b5b4d0e17a36103ab97.gif"
                alt=""
              />
              <p>Password or email is incorrect</p>
              <button
                onClick={() => {
                  setWrongPop(false);
                }}
              >
                Ok
              </button>
            </div>
          </div>
        )}
        {emptySection && (
          <div className="wrong-pop">
            <div className="wrong-card">
              <img
                src="https://i.pinimg.com/originals/ea/f6/b7/eaf6b73fc12fa5571ac59e1b325a3ae1.gif"
                alt=""
              />
              <p>Please fill the gap</p>
              <button
                onClick={() => {
                  setEmptySection(false);
                }}
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
