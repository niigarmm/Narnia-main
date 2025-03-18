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
  const langRef = useRef();
  const pagesRef = useRef();
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
    if (
      !imgRef.current.value ||
      !titleRef.current.value ||
      !priceRef.current.value ||
      !descRef.current.value ||
      !authorRef.current.value ||
      !pagesRef.current.value ||
      !catRef.current.value ||
      !langRef.current.value
    ) {
      alert("Bütün xanalari doldurun!");
      return;
    }

    dispatch(
      addProductToDatabase({
        img: imgRef.current.value,
        title: titleRef.current.value,
        price: priceRef.current.value,
        desc: descRef.current.value,
        author: authorRef.current.value,
        pages: pagesRef.current.value,
        cat: catRef.current.value,
        lang: langRef.current.value,
      })
    );
    navigate("/dashboard");
  };
  return (
    <div>
      <Header />
      <div className={mode === "light" ? "account admin" : "admin dark-account"}>
        <div className="account-card">
          <h1>Add Book</h1>
          <form onSubmit={formSubmit}>
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
            <div className="name">
              <p>Book's Pages:</p>
              <input ref={pagesRef} type="text" />
            </div>
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
            <div className="name">
              <p>Book's Language:</p>
              <input ref={langRef} type="text" />
            </div>
            <div className="button-trio">
              <button className="add-book">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="#FFFFFF"
                >
                  <path d="M16,3C8.832,3,3,8.832,3,16s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z M22.989,16.207c0,1.034-0.741,1.911-1.755,2.11	c-0.419,0.082-0.84,0.154-1.262,0.217c-0.751,0.111-1.328,0.688-1.438,1.439c-0.062,0.422-0.134,0.843-0.217,1.262	c-0.199,1.014-1.077,1.755-2.111,1.755h-0.413c-1.034,0-1.911-0.741-2.111-1.755c-0.082-0.419-0.154-0.84-0.217-1.262	c-0.111-0.751-0.688-1.328-1.438-1.439c-0.422-0.062-0.843-0.134-1.262-0.217c-1.014-0.199-1.755-1.077-1.755-2.174v-0.35	c0-1.034,0.741-1.911,1.755-2.11c0.419-0.082,0.84-0.154,1.262-0.217c0.751-0.111,1.328-0.688,1.438-1.439	c0.062-0.422,0.134-0.843,0.217-1.262c0.199-1.014,1.077-1.755,2.111-1.755h0.413c1.034,0,1.911,0.741,2.111,1.755	c0.082,0.419,0.154,0.84,0.217,1.262c0.111,0.751,0.688,1.328,1.438,1.439c0.422,0.062,0.843,0.134,1.262,0.217	c1.014,0.199,1.755,1.077,1.755,2.174V16.207z"></path>
                </svg>
                Add Book
              </button>
              <button className="dashboard">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/dashboard"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO2Zy2oUQRSGJyEQiC+gEONGclH0OYw+RpJN4kpEGQijy4i6UONbxEtIFEFEI4oyS3dOSHTrMskiurA/OXCEpumqrpqqysyiPmgYmKpT5+8+feqvmVYrk8lkMsMEcA64BlwHbusln68CU61hBLgIPAT2aWYPuA/MDUPis8AmUOCPzHkBzAwi8VFgFfhDOL+BtsQ8qeRPAa+Jz5bEPonkP3sk9UMvVz4lE6Fl43Pn3wNjeu14PonRFAKk5n14VJr72HNuO0W3Mb2wX4Htmk50CCzqJZ9NJfPG8GJPxxSwaUl+RMc89bjDkuANLa8vhjHPYm5Spj6/XRp31zH5b8AlnXPTMu5vlM0OeGBZpNA7L8kfNSReaKxxjXtZn4SNezEEuNiDJn4BV0oxx/VJNLEbmvwU4bwFTlfiim9yZTJEgLjKfpGS6VR7ujwJT+80HyJAbLBpk5LefmBZeLEm3hktpzIHGuuDIc5yiAAxWVXEGozp99Lj6/hu2Mnf1Yxd0O+lpf6Muqk5CFgyCOjVxDK12YWUAlYMi4q3eWLZYYWVUpwlS90fagntpCihkJdY6EkrDIwxP+g2Gspk3wJUhJxhB0UvKHkVIAdwE4W+Cx0HK1HmSOesN+wJazEEXHA0c3c8BHRK815ZzNxssABdRH49iGmn13XOCNA1jNmIkrwuNGNxjl29iz72oNA5XcP3x8D5aAIsm1oqbkVNvmQF5MCdmpf/yzKFiAk9x6bio6yRJPnKb0Nbie78RNLkK+XUdjgSunAsNZ+sbBqETAPPtWf7InM2onebPoXMyQHc0biJwVuLtknFBjgrDlJscOkPjmU9SoYZs0wmk8m0IvMPw8BKMxfbHh0AAAAASUVORK5CYII="
                    alt="dashboard"
                  ></img>
                  Go to dashboard
                </Link>
              </button>
              <button
                style={{ color: "white" }}
                onClick={handleLogout}
                className="exit"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhklEQVR4nO3WwUsVURTH8ZFCbaUGQouWCYK6UyLwD0hq3V/gItxGguAiBAlXrt24spVrRakofEWBhSDownZPXRpBUEniRwaucBlmfDP4XrR4P7ibc37nfGfunTkzSdJWW/+D8AhHOMREgacHQ2kek3iBZWxiDz+xVRWcAi9Vz8mnzUspaTJYq8ATAV7Hw6aCMYadHG/huV4LjE7M4+8V/norwFshloJf4jFeZfwnrQDX8AWjUex5xv+mAngNd7GAs0JwQaP0/Yu1EOIPMJDj/xp5Z6P4fexXAX/OgJ8UXFAtqukLqzvTqxvvyoJ/ZAD3CgZFw0mEG1gvCz6Omp+n47CB/zW+h/Usig/iU5Wtfpq5s6kG/liruBUe0N+ZXD4YM7iNDryP/LsVwJe7lKskFPRiOHx9FkNuKeQG8CuqGa8ALlQSH3hGB+k0y3mfV5oFruXEP+JO1PAmtkPuD/qvDS4rjOA01E3/M3AqzIW6b0mOsNEqcBc+XDUwSv76vK0EbqutpIIuALbvIOuWPKRQAAAAAElFTkSuQmCC"
                  alt="emergency-exit"
                ></img>
                Log out
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
