import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { ModeContext } from "../context/ModeContext";
import Footer from "../layout/Footer";
const SignUp = () => {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [hideName, setHideName] = useState(false);
  const [mode] = useContext(ModeContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const registerSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      Swal.fire({
        title: "Please fill the gap!",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      const registeredUsers =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];
      const existingUser = registeredUsers.find((u) => u.email === user.email);
      if (existingUser) {
        alert("Email already registered");
      } else {
        registeredUsers.push(user);
        localStorage.setItem(
          "registeredUsers",
          JSON.stringify(registeredUsers)
        );
        if (user.avatar) {
          localStorage.setItem(`avatar_${user.email}`, user.avatar);
        }
        window.location.assign("/login");
      }
    }
    
  };

  return (
    <>
      <Header />
      <div
        className={mode === "light" ? "main-container" : "dark-main-container"}
      >
        <div className="cammon-div">
          <img
            src="https://i.pinimg.com/474x/dd/f0/e4/ddf0e405514c54ff13c888e6d560db89.jpg"
            alt=""
            className="animate__animated animate__slideInRight"
          />
          <div className="signup-card animate__animated animate__slideInLeft">
            <div className="inputs">
              <h3>Create account</h3>
              <form style={{ width: "100%" }} onSubmit={registerSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder={hideName ? "" : "full name"}
                    onFocus={() => setHideName(true)}
                    onBlur={() => setHideName(false)}
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder={hidePlaceholder ? "" : "example@gmail.com"}
                    onFocus={() => setHidePlaceholder(true)}
                    onBlur={() => setHidePlaceholder(false)}
                  />
                  <input
                    type="password"
                    name="password"
                    id=""
                    onChange={handleChange}
                    placeholder={hidePassword ? "" : "password"}
                    onFocus={() => setHidePassword(true)}
                    onBlur={() => setHidePassword(false)}
                  />
                  <button class="btn-shine">
                    <span>Create account</span>
                  </button>
                  <div className="bottom-part">
                    <p>or sign up with</p>
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
                    <p className="login">
                      Have an account? <Link to="/login">Log In</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
