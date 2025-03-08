import React, { act, useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import Aos from "aos";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { ModeContext } from "../context/ModeContext";
const Account = ({ email }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const activeUser = JSON.parse(localStorage.getItem("activeUser"));
      if (activeUser) {
        setUser(activeUser);
      }
    }
  }, [navigate]);
  const handleLogout = () => {
    const confirmLogout = Swal.fire({
      title: "Please fill the gap!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
    if (confirmLogout) {
      localStorage.removeItem("login");
      localStorage.removeItem("activeUser");
      setUser({ name: "", email: "" });
      navigate("/login");
      window.location.reload();
    }
  };
  const isAdmin = user.email === "nigar03mahmudova@gmail.com";
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setAvatar(newAvatar);
        localStorage.setItem(`avatar_${user.email}`, newAvatar);
      };
      reader.readAsDataURL(file);
    }
  };

  // profile pic
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.email) {
      const storedAvatar = localStorage.getItem(`avatar_${user.email}`);
      if (storedAvatar) {
        setAvatar(storedAvatar);
      }
    }
  }, [user.email]);

  const [activeSection, setActiveSection] = useState("account-section");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);

  const [mode] = useContext(ModeContext);
  

  return (
    <>
      <Header />
      <div className={mode === "light" ? "account" : "dark-account"}>
        <div className="account-card">
          <div className="left-part">
            <div className="profil-pic">
              <div className="avatars">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  id="fileInput"
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput" className="avatar-button">
                  {avatar ? (
                    <img src={avatar} alt="Profile Avatar" width="100" />
                  ) : (
                    <img
                      src="https://i.pinimg.com/736x/d4/f7/17/d4f71779dd981d9ce69fe08712805b23.jpg"
                      alt=""
                    />
                  )}
                </label>
              </div>
            </div>
            <div className="sections">
              <button onClick={() => handleSectionChange("account-section")}>
                <h4>Account</h4>
              </button>
              <button onClick={() => handleSectionChange("wishlist-section")}>
                <h4>Wishlist</h4>
              </button>
              <button onClick={() => handleSectionChange("privacy-section")}>
                <h4>Privacy</h4>
              </button>
              <button onClick={() => handleSectionChange("help-section")}>
                <h4>Help</h4>
              </button>
              <button
                style={{ color: "white" }}
                onClick={handleLogout}
                className="exit"
              >
                Log out
              </button>
            </div>
          </div>
          <div
            id="account-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "account-section" ? "active" : ""
            }`}
          >
            <h2>Account Setting</h2>
            <div className="basic-info animate__animated animate__slideInUp">
              <h4>Basic Info</h4>
              <div className="personal-information">
                <div>
                  <h5>Name:</h5>
                  <h5>{user.name}</h5>
                </div>
                <div>
                  <h5>Email:</h5>
                  <h5>{user.email}</h5>
                </div>
                <div>
                  <h5>Password:</h5>
                  <h5>{user.password}</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            id="wishlist-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "wishlist-section" ? "active" : ""
            }`}
          >
            <h2>Wishlist Section</h2>
          </div>
          <div
            id="privacy-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "privacy-section" ? "active" : ""
            }`}
          >
            <h2>Privacy Section</h2>
            <div className="personal-information animate__animated animate__slideInUp">
              <p>
                <b>Privacy Policy</b> <br /> At Narnia, we value your privacy
                and are committed to protecting your personal information. This
                policy explains how we collect, use, and safeguard your data
                when you visit our website. <br /> Information We Collect <br />{" "}
                When you browse our website or make a purchase, we may collect
                certain information, including: Your name, email address, and
                contact details Shipping and billing addresses Payment details
                (processed securely through third-party payment gateways)
                Purchase history and preferences IP address and browsing
                behavior for website analytics <br />
                <b>How We Use Your Information </b>
                <br /> We use your data to: Process and fulfill your orders
                Provide customer support and respond to inquiries Improve our
                website, services, and product offerings Send promotional emails
                (only if you subscribe) Prevent fraud and ensure website
                security <br />
                <b> Data Protection & Security </b>
                <br /> We take appropriate security measures to protect your
                personal data from unauthorized access, alteration, or
                disclosure. Our website uses encryption and secure payment
                methods to safeguard your sensitive information. <br />
                <b>Your Rights</b>
                <br /> You have the right to: Access, update, or delete your
                personal information Opt out of marketing emails at any time
                Request information about how we process your data For any
                questions or requests regarding your privacy, please{" "}
                <Link to="/contactUs">contact us</Link>. By using our website,
                you agree to our privacy policy. We may update this policy
                periodically, so we encourage you to review it regularly.
              </p>
            </div>
          </div>
          <div
            id="help-section"
            className={`con animate__animated animate__slideInRight ${
              activeSection === "help-section" ? "active" : ""
            }`}
          >
            <h2>Help Section</h2>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
