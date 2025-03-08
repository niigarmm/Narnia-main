import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useSelector } from "react-redux";
import SingleCard from "../../component/SingleCard";
import firstPromo from "../../assets/images/promoVideo1.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "animate.css";
import { ModeContext } from "../../context/ModeContext";
import { Link } from "react-router-dom";

const KidsBooks = () => {
  const [kidsBook, setKidsBook] = useState([]);
  const data = useSelector((p) => p.product);
  const [mode] = useContext(ModeContext);
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
    <div className={mode === "light" ? "kids-book" : "dark-kids-book"}>
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
        <div className="free-pdf">
          <h1>Free Kid's Book Pdf</h1>
          <div className="free-books">
            <div>
              <img
                src="https://api.bookbotkids.workers.dev/books/f60ac1f9-e513-433f-a640-6cbdf028cd98/cover.jpg"
                alt=""
              />
              <div className="hidden-part">
                <p>Magnet Magic!</p>
                <p>Categories: Life</p>
                <p>Pages: 12</p>
                <button>
                  <Link
                    to="https://api.bookbotkids.workers.dev/books/f60ac1f9-e513-433f-a640-6cbdf028cd98/Magnet%20Magic!.pdf"
                    target="blank"
                  >
                    Read Now
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://api.bookbotkids.workers.dev/books/7b866aa0-32dd-11eb-85df-f1b21128a838/cover.jpg"
                alt=""
              />
              <div className="hidden-part">
                <p>A Mess!</p>
                <p>Categories: Life</p>
                <p>Pages: 8</p>
                <button>
                  <Link to="https://api.bookbotkids.workers.dev/books/7b866aa0-32dd-11eb-85df-f1b21128a838/A%20Mess!.pdf" target="blank">
                    Read Now
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://api.bookbotkids.workers.dev/books/3674f6ec-545e-467d-bbae-cc3187b1500b/cover.jpg"
                alt=""
              />
              <div className="hidden-part">
                <p>Ballerina!</p>
                <p>Categories: Life</p>
                <p>Pages: 6</p>
                <button>
                  <Link to="https://api.bookbotkids.workers.dev/books/3674f6ec-545e-467d-bbae-cc3187b1500b/Ballerina.pdf" target="blank">
                    Read Now
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://api.bookbotkids.workers.dev/books/694045ae-d957-4857-84a4-df37c2f78516/cover.jpg"
                alt=""
              />
              <div className="hidden-part">
                <p>Dragon School</p>
                <p>Categories: Adventure</p>
                <p>Pages: 14</p>
                <button>
                  <Link to="https://api.bookbotkids.workers.dev/books/694045ae-d957-4857-84a4-df37c2f78516/Dragon%20School.pdf" target="blank">
                    Read Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <button className="discover">Discover More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KidsBooks;
