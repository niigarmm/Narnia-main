import React, { useContext, useRef, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { ModeContext } from "../../context/ModeContext";
import { useDispatch } from "react-redux";
import { addProductToDatabase } from "../../tools/action/productAction";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Admin = () => {
  const imgRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const authorRef = useRef();
  const catRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
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
  const [mode] = useContext(ModeContext);
  const formSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard")
    dispatch(
      addProductToDatabase({
        img: imgRef.current.value,
        title: titleRef.current.value,
        price: priceRef.current.value,
        desc: descRef.current.value,
        author: authorRef.current.value,
        cat: catRef.current.value,
      })
    );
  };
  return (
    <div>
      <Header />
      <div className={mode === "light" ? "account admin" : "dark-account"}>
        <div className="account-card">
          <h1>Add Book</h1>
          <form onSubmit={formSubmit}>
            <div className="information">
              <div className="left-part">
                <div className="name">
                  <p>Book's Name:</p>
                  <input ref={titleRef} type="text" />
                </div>
                <div className="name">
                  <p>Book's Image Url:</p>
                  <input ref={imgRef} type="text" />
                </div>
                <div className="name">
                  <p>Book's Author:</p>
                  <input ref={authorRef} type="text" />
                </div>
                <div className="d-flex">
                  <button
                    style={{ color: "white" }}
                    onClick={handleLogout}
                    className="exit"
                  >
                    Log out
                  </button>
                  <button>Add Book</button>
                </div>
              </div>
              <div className="right-part">
                <div className="name">
                  <p>Book's Description:</p>
                  <textarea ref={descRef} name="" id=""></textarea>
                </div>
                <div className="name">
                  <p>Book's Category:</p>
                  <input ref={catRef} type="text" />
                </div>
                <div className="name">
                  <p>Book's Price:</p>
                  <input ref={priceRef} type="text" />
                </div>
                <button className="dashboard">
                  <Link style={{ color: "white" }} to="/dashboard">
                    Go to dashboard
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
