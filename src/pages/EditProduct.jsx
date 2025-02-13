import React, { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ModeContext } from "../context/ModeContext";
import { addProduct } from "../tools/action/productAction";
import slugify from "slugify";

const Admin = () => {
  const imgRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const authorRef = useRef();
  const catRef = useRef();
  const dispatch = useDispatch();

  const [mode] = useContext(ModeContext);
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        img: imgRef.current.value,
        title: titleRef.current.value,
        price: priceRef.current.value,
        desc: descRef.current.value,
        author: authorRef.current.value,
        cat: catRef.current.value,
      })
    );
  };
  const { slug } = useParams();
  const data = useSelector((p) => p.product);
  const filteredData = data.find(
    (p) => slugify(p.title, { lower: true }) === slug
  );
  return (
    <div>
      <Header />
      <div className={mode === "light" ? "account admin" : "dark-account"}>
        <div className="account-card">
          <h1>Edit Book</h1>
          <form onSubmit={formSubmit}>
            <div className="information">
              <div className="left-part">
                <div className="name">
                  <p>Book's Name:</p>
                  <input
                    defaultValue={!filteredData ? "" : filteredData.title}
                    ref={titleRef}
                    type="text"
                  />
                </div>
                <div className="name">
                  <p>Book's Image Url:</p>
                  <input
                    defaultValue={!filteredData ? "" : filteredData.img}
                    ref={imgRef}
                    type="text"
                  />
                </div>
                <div className="name">
                  <p>Book's Author:</p>
                  <input
                    defaultValue={!filteredData ? "" : filteredData.author}
                    ref={authorRef}
                    type="text"
                  />
                </div>
                <div className="d-flex">
                  <button>Edit Book</button>
                </div>
              </div>
              <div className="right-part">
                <div className="name">
                  <p>Book's Description:</p>
                  <textarea
                    defaultValue={!filteredData ? "" : filteredData.desc}
                    ref={descRef}
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className="name">
                  <p>Book's Category:</p>
                  <input
                    defaultValue={!filteredData ? "" : filteredData.cat}
                    ref={catRef}
                    type="text"
                  />
                </div>
                <div className="name">
                  <p>Book's Price:</p>
                  <input
                    defaultValue={!filteredData ? "" : filteredData.price}
                    ref={priceRef}
                    type="text"
                  />
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
