import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import "../src/index.css";
import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
import FAQ from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/dashboard/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import EditProduct from "./pages/dashboard/EditProduct";
import KingofEnvy from "./pages/books/KingOfEnvy";
import Alice from "./pages/books/Alice";
import WhiteFag from "./pages/books/WhiteFag";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  const [changeMode] = useContext(ModeContext);
  return (
    <>
      <a href="#upper">
        <div className={changeMode === "light" ? "up" : "dark-up"}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.32992 17.9998C6.01992 17.9998 4.65992 15.6498 6.31992 12.7798L8.99992 8.15982C10.6599 5.28982 13.3699 5.28982 15.0299 8.15982L17.7099 12.7798C19.3699 15.6498 18.0099 17.9998 14.6999 17.9998H9.32992Z"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/dashboard/edit/:slug" element={<EditProduct />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/products/:slug" element={<ProductDetails />}></Route>
          <Route path="/kingOfEnvy" element={<KingofEnvy />}></Route>
          <Route path="/beauty-ugly" element={<Alice />}></Route>
          <Route path="/white-fang" element={<WhiteFag />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
