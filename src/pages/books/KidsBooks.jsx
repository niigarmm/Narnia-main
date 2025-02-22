import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useSelector } from "react-redux";
import SingleCard from "../../component/SingleCard";

const KidsBooks = () => {
  const [kidsBook, setKidsBook] = useState([]);
  const data = useSelector((p) => p.product);
  useEffect(() => {
    const filteredData = data.filter((p) => p.cat === "Kids");
    setKidsBook(filteredData);
  }, [data]);
  return (
    <div>
      <Header />
      <div className="bottom-category">
        {kidsBook.length === 0 ? (
          <div className="not-found">
            <img
              src="https://i.pinimg.com/originals/8a/cb/19/8acb194578c6487798c0bc97e1e0c7b0.gif"
              alt=""
            />
            <h2> Book not found</h2>
          </div>
        ) : (
          <div
            className="products kids-cat"
          >
            {kidsBook.map((item) => (
              <SingleCard allitems={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default KidsBooks;
