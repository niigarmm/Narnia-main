import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { ModeContext } from "../../context/ModeContext";
import {
  editProductToDatabase,
  fetchProductsFromDatabase,
} from "../../tools/action/productAction";
import slugify from "slugify";
import { useTranslation } from "react-i18next";

const Admin = () => {
  const imgRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const authorRef = useRef();
  const catRef = useRef();
  const pagesRef = useRef();
  const langRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode] = useContext(ModeContext);
  const { slug } = useParams();
  const data = useSelector((p) => p.product);
  const [filteredData, setFilteredData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchProductsFromDatabase());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (data && data.length > 0) {
      const foundProduct = data.find(
        (p) => slugify(p.title, { lower: true }) === slug
      );
      setFilteredData(foundProduct || null);
    }
  }, [data, slug]);

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editProductToDatabase(filteredData.id, {
        img: imgRef.current.value,
        title: titleRef.current.value,
        price: priceRef.current.value,
        desc: descRef.current.value,
        author: authorRef.current.value,
        cat: catRef.current.value,
        pages: pagesRef.current.value,
        lang: langRef.current.value,
      })
    );
    navigate("/dashboard");
  };

  return (
    <div>
      <Header />
      <div className={mode === "light" ? "account admin" : "dark-admin dark-account"}>
        <div className="account-card">
          <h1>{t("edit")}</h1>
          <div className="form">
            <div className="name">
              <p>{t("bookName")}</p>
              <input
                defaultValue={filteredData?.title || ""}
                ref={titleRef}
                type="text"
              />
            </div>
            <div className="name">
              <p>{t("link")}</p>
              <input
                defaultValue={filteredData?.img || ""}
                ref={imgRef}
                type="text"
              />
            </div>
            <div className="name">
              <p>{t("author")}</p>
              <input
                defaultValue={filteredData?.author || ""}
                ref={authorRef}
                type="text"
              />
            </div>
            <div className="name">
              <p>{t("pages")}</p>
              <input
                defaultValue={filteredData?.pages || ""}
                ref={pagesRef}
                type="text"
              />
            </div>
            <div className="name">
              <p>{t("desc")}</p>
              <textarea
                defaultValue={filteredData?.desc || ""}
                className="textarea"
                ref={descRef}
              ></textarea>
            </div>
            <div className="name">
              <p>{t("cat")}</p>
              <input
                defaultValue={filteredData?.cat || ""}
                ref={catRef}
                type="text"
              />
            </div>
            <div className="name">
              <p>{t("price")}</p>
              <input
                defaultValue={filteredData?.price || ""}
                ref={priceRef}
                type="text"
              />
            </div>
            <div className="name">
              <p>{t("lang2")}</p>
              <input
                defaultValue={filteredData?.lang || ""}
                ref={langRef}
                type="text"
              />
            </div>
            <div className="button-trio">
              <button className="dashboard">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/dashboard"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO2Zy2oUQRSGJyEQiC+gEONGclH0OYw+RpJN4kpEGQijy4i6UONbxEtIFEFEI4oyS3dOSHTrMskiurA/OXCEpumqrpqqysyiPmgYmKpT5+8+feqvmVYrk8lkMsMEcA64BlwHbusln68CU61hBLgIPAT2aWYPuA/MDUPis8AmUOCPzHkBzAwi8VFgFfhDOL+BtsQ8qeRPAa+Jz5bEPonkP3sk9UMvVz4lE6Fl43Pn3wNjeu14PonRFAKk5n14VJr72HNuO0W3Mb2wX4Htmk50CCzqJZ9NJfPG8GJPxxSwaUl+RMc89bjDkuANLa8vhjHPYm5Spj6/XRp31zH5b8AlnXPTMu5vlM0OeGBZpNA7L8kfNSReaKxxjXtZn4SNezEEuNiDJn4BV0oxx/VJNLEbmvwU4bwFTlfiim9yZTJEgLjKfpGS6VR7ujwJT+80HyJAbLBpk5LefmBZeLEm3hktpzIHGuuDIc5yiAAxWVXEGozp99Lj6/hu2Mnf1Yxd0O+lpf6Muqk5CFgyCOjVxDK12YWUAlYMi4q3eWLZYYWVUpwlS90fagntpCihkJdY6EkrDIwxP+g2Gspk3wJUhJxhB0UvKHkVIAdwE4W+Cx0HK1HmSOesN+wJazEEXHA0c3c8BHRK815ZzNxssABdRH49iGmn13XOCNA1jNmIkrwuNGNxjl29iz72oNA5XcP3x8D5aAIsm1oqbkVNvmQF5MCdmpf/yzKFiAk9x6bio6yRJPnKb0Nbie78RNLkK+XUdjgSunAsNZ+sbBqETAPPtWf7InM2onebPoXMyQHc0biJwVuLtknFBjgrDlJscOkPjmU9SoYZs0wmk8m0IvMPw8BKMxfbHh0AAAAASUVORK5CYII="
                    alt="dashboard"
                  ></img>
                  {t("dashboard")}
                </Link>
              </button>
              <button type="submit" onClick={()=>{navigate("/dashboard")}}>
                <img
                  src="data:image/png;base64,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"
                  alt="edit--v1"
                ></img>
                {t("edit")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
