import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BodySection from "../layout/BodySection";
import SingleCard from "../component/SingleCard";
import Product from "../component/Product";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const data = useSelector((p) => p.product);
  const [filtered, setFiltered] = useState([]);
  const filteredBySearchTerm = (searchTerm) => {
    const filteredProduct = data.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredProduct);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      filteredBySearchTerm(debouncedSearchTerm);
    } else {
      setFiltered(data);
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
