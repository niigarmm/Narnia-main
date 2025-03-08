import "animate.css";
import Product from "../component/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const BodySection = () => {
  const [mode] = useContext(ModeContext);
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
        breakpoint:992,
        settings:{
          slidesToShow:2
        }
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <div className={mode=== "light" ? "light-kids" : "dark-kids"}>
      <h3 className="kids">Discover Kids Book</h3>
      <Slider {...settings} className="promo" key={window.innerWidth}>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d1fb0876f941b0001d27ee6/1655147878985-5VSYG4QC446U5X0KRVXE/LetsCelebrate-Playing_3.gif?format=1000w"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d1fb0876f941b0001d27ee6/1655147888889-2ZBSKNQEF1J0DP6G5CE4/LetsCelebrate-Playing_4.gif?format=1000w"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d1fb0876f941b0001d27ee6/1655223891905-U7A616L7NYJ6XBNNEOM5/LetsCelebrate-Helping_2.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d1fb0876f941b0001d27ee6/1655226991923-3V3DEVHH788S12UDPVT8/LetsCelebrate-FavoriteFoods_2.gif?format=1000w"
            alt=""
          />
        </div>
      </Slider>
      <div className="button">
        <button
          className="seeMore"
          onClick={() => {
            navigate("/kids-books");
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default BodySection;
