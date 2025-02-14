import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";

const ProductDetails = () => {
  const { slug } = useParams();
  const data = useSelector((p) => p.product);
  const filteredData = data.find(
    (p) => slugify(p.title, { lower: true }) === slug
  );
  return (
    <div>
      <Header />
      <div className="detail-card">
        <div className="product-detail">
          <div className="left-part">
            <img src={filteredData.img} alt={filteredData.title} />
          </div>
          <div className="right-part">
            <h1>{filteredData.title}</h1>
            <div className="author">
              <p>
                {" "}
                <span>Author:</span> <Link to="https://leelisa.com/" target="blank"> {filteredData.author}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
