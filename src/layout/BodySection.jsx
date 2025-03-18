import "animate.css";
import Product from "../component/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { useTranslation } from "react-i18next";
import historyBook from "../assets/images/historybook.mp4";

const BodySection = () => {
  const [mode] = useContext(ModeContext);
  const { t, i18n } = useTranslation();

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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <div className={mode === "light" ? "light-kids" : "dark-kids"}>
      <h3 className="kids">{t("h1")}</h3>
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
          {t("more")}
        </button>
      </div>
      <div className="video">
        <video
          className="animate__animated animate__slideInLeft"
          autoPlay
          muted
          loop
          width="550"
          height="320"
        >
          <source src={historyBook} type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
      <div className="author-section">
        <h1>{t("author")}:</h1>
        <Slider
          {...settings}
          className="promo authors-slider"
          key={window.innerWidth}
        >
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stephen_King_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg/1200px-Stephen_King_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMkXpILgHZR7LKuGSGnY3zJgLntR4Dk38utUSj3k_k5Nap7U_b"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/666c5494fb1dff8e0e476b0f/Laura-Ingalls-Wilder-signing-a-book-/0x0.jpg?format=jpg&crop=1958,1959,x0,y169,safe&width=1440"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9WqpoFcKJBqZYjy6M6sYrxowXD0gqIrNAZZgiIGOzOHvbyxpt"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/66707f7069f939c0a473c569/Children-s-book-author-illustrator-Theodor-Seuss-Geisel-poses-with-models-of-some-of/0x0.jpg?format=jpg&crop=1919,1919,x0,y71,safe&width=1440"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFKxyupeOq87qCom0DMFubgSlxLfCqlxmtGtZ2iXjXe2Ep-Bmp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQgMy-3ShGA8i71G0syoeimR6hQBAF05RsKiNxog_koURrXyu0o-pr_xEapiSu31189"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i0.wp.com/bucketlistbookshop.com/wp-content/uploads/2018/04/george-orwell-bbc.jpg?resize=300%2C273&ssl=1"
              alt=""
            />
          </div>
        </Slider>
        <div className="button">
          <button
            className="seeMore"
            onClick={() => {
              navigate("/author");
            }}
          >
            {t("more")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
