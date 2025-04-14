import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BodySection from "../layout/BodySection";
import Product from "../component/Product";
import { useSelector } from "react-redux";

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const data = useSelector((state) => state.product);
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, 500);

      return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
      if (!debouncedSearchTerm.trim()) {
        setFiltered(data);
      } else {
        const filteredProduct = data.filter(
          (p) =>
            p.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) 
        );
        setFiltered(filteredProduct);
      }
    }, [debouncedSearchTerm, data]);

  return (
    <div className="main-page">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Product filtered={filtered} />
      <BodySection />
      <Footer />
    </div>
  );
};

export default MainPage;
