import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useSelector } from "react-redux";
import SingleCard from "../../component/SingleCard";
import firstPromo from "../../assets/images/promoVideo1.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CanvasKid from "../../component/CanvasKid";
import "animate.css";

const KidsBooks = () => {
  const [kidsBook, setKidsBook] = useState([]);
  const data = useSelector((p) => p.product);
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  useEffect(() => {
    const filteredData = data.filter((p) => p.cat === "Kids");
    setKidsBook(filteredData);
  }, [data]);

  return (
    <div className="kids-book">
      <Header />
      <div className="bottom-category">
        <div className="promo-video">
          <video
            className="animate__animated animate__slideInLeft"
            autoPlay
            muted
            loop
            width="600"
            height="320"
            controls
          >
            <source src={firstPromo} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
          <div className="animate__animated animate__slideInRight">
            <h1>A Magical World of Books for Kids!</h1>
            <p>
              Reading is more than just words on a page—it’s a gateway to
              magical adventures, exciting discoveries, and endless imagination!
              Our carefully curated collection of children's books is designed
              to inspire young minds, nurture creativity, and make learning fun.
            </p>
            <br />
            <p>
              Whether your child loves fairy tales, thrilling adventures, or
              fascinating facts, we have the perfect book to spark their
              curiosity. From beautifully illustrated picture books to engaging
              stories that teach important life lessons, each book is crafted to
              entertain, educate, and inspire.
            </p>
          </div>
        </div>
        <Slider {...settings} className="kids-slider">
          {kidsBook.length === 0 ? (
            <div className="not-found">
              <img
                src="https://i.pinimg.com/originals/8a/cb/19/8acb194578c6487798c0bc97e1e0c7b0.gif"
                alt="Not found"
              />
              <h2>Book not found</h2>
            </div>
          ) : (
            kidsBook.map((item) => (
              <div key={item.id} className="kids-card">
                <SingleCard allitems={item} />
              </div>
            ))
          )}
        </Slider>
        <div className="painting">
          <h2
            className="animate__animated animate__pulse animate__infinite"
            style={{ animationDuration: "3s" }}
          >
            Here’s a new challenge for kids! Let’s see how many of you can
            complete this drawing without using an eraser.{" "}
          </h2>
          <CanvasKid />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KidsBooks;
