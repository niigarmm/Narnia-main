import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { ModeContext } from "../../context/ModeContext";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { removeProductToDatabase } from "../../tools/action/productAction";

const Dashboard = () => {
  const [mode] = useContext(ModeContext);
  const data = useSelector((p) => p.product);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Header />
        <div className={mode === "light" ? "account admin" : "dark-account admin"}>
          <div className="account-card">
            <h1>Dashboard</h1>
            <div className="table-section">
              <div className="table-part">
                <div className="head">
                  <div className="count">
                    <p>#</p>
                  </div>
                  <div className="image">
                    <p>Image</p>
                  </div>
                  <div className="title-s first">
                    <p>Title</p>
                  </div>
                  <div className="price">
                    <p>Price</p>
                  </div>
                  <div className="edit">
                    <p>Edit</p>
                  </div>
                  <div className="delete">
                    <p>Delete</p>
                  </div>
                </div>
                {data.map((item, i) => (
                  <div className="body" key={i}>
                    <div className="count">{i + 1}</div>
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="title-s">
                      <p>{item.title.slice(0, 30)}...</p>
                    </div>
                    <div className="price">
                      <p>{item.price}</p>
                    </div>
                    <div className="edit">
                      <button>
                        <Link
                          to={`/dashboard/edit/${slugify(item.title, {
                            lower: true,
                          })}`}
                          style={{ color: "white" }}
                        >
                          Edit
                        </Link>
                      </button>
                    </div>
                    <div className="delete">
                      <button
                        onClick={() => {
                          dispatch(removeProductToDatabase(item.id));
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
