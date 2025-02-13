import React, { useContext, useEffect, useRef } from "react";
import Header from "../layout/Header";
import { ModeContext } from "../context/ModeContext";
import Footer from "../layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "../assets/sass/style.scss";
import "../assets/sass/animation.scss";
import FaberCastell from "../assets/images/faber-castell.png";
import AppleBook from "../assets/images/apple-book.png";
import BarnesNoble from "../assets/images/barnes-noble.png";

const AboutUs = () => {
  const [changeMode] = useContext(ModeContext);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={changeMode === "light" ? "light-con" : "dark-con"}>
        <div className="about">
          <div className="text-side">
            <h1 data-aos="fade-up">About Us</h1>
            <p data-aos="fade-up">
              Welcome to Narnia Bookstore! Established in 2020, we are a
              passionate team dedicated to bringing the magic of reading to
              every book lover. At Narnia, we offer a carefully curated
              selection of books from a wide range of genres, ensuring that
              there's something for everyone. Since our founding, we have built
              strong partnerships with renowned publishers and companies,
              allowing us to provide the latest bestsellers, timeless classics,
              and hidden gems. Whether you're an avid reader or just starting
              your journey, Narnia Bookstore is your ultimate destination for
              all things literature.
            </p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/474x/cb/aa/5e/cbaa5e9b453a6be7d5dc323dd46fe1ad.jpg"
              alt=""
              className="left-img animate__animated animate__pulse animate__slow	2s animate__infinite	infinite"
            />
            <img
              src="https://i.pinimg.com/474x/20/36/3b/20363bb3f3cb8042d7556e6825a3a964.jpg"
              alt=""
              className="right-img animate__animated animate__pulse animate__slow	2s animate__infinite	infinite"
            />
          </div>
        </div>
        <div className="middle-cont">
          Since 2020, we've raised more than <span>  $35 million  </span> for
          independent bookstores.
        </div>
        <div
          className="main-container"
          style={{ overflow: "hidden" }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="inner-cont">
            <div className="about">
              <img
                src="https://i.pinimg.com/474x/9f/15/cb/9f15cb4603cf98e66cb0442610dcf1e6.jpg"
                alt=""
                className="right-img"
                data-aos="fade-up"
              />
              <div className="text-side">
                <h1 data-aos="fade-up-right">What are we selling?</h1>
                <p data-aos="fade-up">
                  At Narnia Bookstore, we pride ourselves on offering a diverse
                  selection of books for all tastes. Whether you’re seeking the
                  thrill of a gripping thriller, the mystery of a detective
                  novel, the emotional depth of a drama, or the enchanting
                  adventures of fantasy, we have something to spark your
                  imagination. Our collection also includes a wide variety of
                  children's books, designed to inspire young readers and
                  nurture their love for stories
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="collaboration">
          <h1
            style={{ textAlign: "center" }}
            className="mt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Our Collaborations:
          </h1>
          <div className="info-section">
            <div
              className="container-sec noselect"
              data-aos="fade-down-right"
              data-aos-duration="3000"
            >
              <div className="canvas">
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div className="tracker tr-10" />
                <div className="tracker tr-11" />
                <div className="tracker tr-12" />
                <div className="tracker tr-13" />
                <div className="tracker tr-14" />
                <div className="tracker tr-15" />
                <div className="tracker tr-16" />
                <div className="tracker tr-17" />
                <div className="tracker tr-18" />
                <div className="tracker tr-19" />
                <div className="tracker tr-20" />
                <div className="tracker tr-21" />
                <div className="tracker tr-22" />
                <div className="tracker tr-23" />
                <div className="tracker tr-24" />
                <div className="tracker tr-25" />
                <div id="card">
                  <p id="prompt">Amazon Kindle</p>
                  <div className="title">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/03/Amazon-Kindle-logo.png"
                      alt=""
                    />
                    <p>
                      By partnering with Amazon Kindle, we are stepping into the
                      world of digital books. Our website aims to provide book
                      lovers with an easy and fast reading experience with its
                      vast collection of books.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container-sec noselect"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <div className="canvas">
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div className="tracker tr-10" />
                <div className="tracker tr-11" />
                <div className="tracker tr-12" />
                <div className="tracker tr-13" />
                <div className="tracker tr-14" />
                <div className="tracker tr-15" />
                <div className="tracker tr-16" />
                <div className="tracker tr-17" />
                <div className="tracker tr-18" />
                <div className="tracker tr-19" />
                <div className="tracker tr-20" />
                <div className="tracker tr-21" />
                <div className="tracker tr-22" />
                <div className="tracker tr-23" />
                <div className="tracker tr-24" />
                <div className="tracker tr-25" />
                <div id="card">
                  <p id="prompt">Faber Castell</p>
                  <div className="title">
                    <img src={FaberCastell} alt="" className="faber" />
                    <p>
                      Faber-Castell and our platform proudly collaborate to
                      bring high-quality stationery products to our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container-sec noselect"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="canvas">
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div className="tracker tr-10" />
                <div className="tracker tr-11" />
                <div className="tracker tr-12" />
                <div className="tracker tr-13" />
                <div className="tracker tr-14" />
                <div className="tracker tr-15" />
                <div className="tracker tr-16" />
                <div className="tracker tr-17" />
                <div className="tracker tr-18" />
                <div className="tracker tr-19" />
                <div className="tracker tr-20" />
                <div className="tracker tr-21" />
                <div className="tracker tr-22" />
                <div className="tracker tr-23" />
                <div className="tracker tr-24" />
                <div className="tracker tr-25" />
                <div id="card">
                  <p id="prompt">Apple Book</p>
                  <div className="title">
                    <img src={AppleBook} className="apple" />
                    <p>
                      Our collaboration with Apple Books brings a new dimension
                      to reading by combining technology and literature.
                      Together, we aim to provide readers with seamless access
                      to a vast collection of digital books
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container-sec noselect"
              data-aos="fade-down-left"
              data-aos-duration="3000"
            >
              <div className="canvas">
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div className="tracker tr-10" />
                <div className="tracker tr-11" />
                <div className="tracker tr-12" />
                <div className="tracker tr-13" />
                <div className="tracker tr-14" />
                <div className="tracker tr-15" />
                <div className="tracker tr-16" />
                <div className="tracker tr-17" />
                <div className="tracker tr-18" />
                <div className="tracker tr-19" />
                <div className="tracker tr-20" />
                <div className="tracker tr-21" />
                <div className="tracker tr-22" />
                <div className="tracker tr-23" />
                <div className="tracker tr-24" />
                <div className="tracker tr-25" />
                <div id="card">
                  <p id="prompt">Barnes & Noblek</p>
                  <div className="title">
                    <img src={BarnesNoble} alt="" className="faber" />
                    <p>
                      Partnering with Barnes & Noble will allow us to offer an
                      extensive collection of digital books to our customers.
                      With Google Books’ vast library and easy accessibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
