import "animate.css";
import Product from "../component/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BodySection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <Product />
      <h3 className="kids">Discover Kids Book</h3>
      <Slider {...settings} className="promo">
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3d6de0205254017.66e6e2e018cc3.gif"
            alt=""
          />
        </div>
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
            src="https://commoncircus.com.au/cdn/shop/products/FD43963F-E03E-40C0-A797-C23DCD759350_1_105_c.jpg?v=1662519704&width=2000"
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
        <Link to="/kids-books">
          <button className="seeMore">See More</button>
        </Link>
      </div>
    </>
  );
};

export default BodySection;
