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
const Login = () => {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode] = useContext(ModeContext);
  const navigate = useNavigate();
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
      Swal.fire({
        title: "Please enter both email and password",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Invalid email or password",
        icon: "error",
        confirmButtonText: "OK",
      });
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
              <h3>Login</h3>
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
                  <input
                    type="password"
                    className="pass"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={hidePassword ? "" : "password"}
                    onFocus={() => setHidePassword(true)}
                    onBlur={() => setHidePassword(false)}
                  />
                  <button class="btn-shine">
                    <span>Login</span>
                  </button>
                  <p className="text">or login with</p>
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
                      Haven't an account? <Link to="/signup">Sign Up</Link>
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
      </div>
      <Footer />
    </>
  );
};

export default Login;
