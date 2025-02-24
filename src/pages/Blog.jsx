import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="blog">
        <h1>Blog</h1>
        <p>
          Hey, come on, let's take a look at the most-read books of all time!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
