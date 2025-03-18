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
        <div
          className={
            mode === "light"
              ? "account admin dashboard-main"
              : "dark-account admin"
          }
        >
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
                          <img
                            src="data:image/png;base64,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"
                            alt="edit--v1"
                          ></img>
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
                        <img
                          src="data:image/png;base64,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"
                          alt="filled-trash"
                        ></img>
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
