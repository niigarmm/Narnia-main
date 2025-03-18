import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "../src/assets/sass/style.scss";
import App from "./App.jsx";
import { ModeProvider } from "./context/ModeContext.jsx";
import configureStore from "./tools/store/configureStore.js";
import { getProduct } from "./tools/action/productAction.js";
import { Provider } from "react-redux";
import supabase from "../utils/supabase.js";
import store from "./tools/store/configureStore.js";
import { WishlistProvider } from "react-use-wishlist";
import { CartProvider } from "react-use-cart";
import "./i18n"; // i18n faylını daxil et
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { getAuthors } from "./tools/action/authorAction.js";

const fetchProducts = async () => {
  const { data } = await supabase.from("narnia-product").select();
  store.dispatch(getProduct(data));
};

fetchProducts();


createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <CartProvider>
      <WishlistProvider>
        <Provider store={store}>
          <ModeProvider>
            <App />
          </ModeProvider>
        </Provider>
      </WishlistProvider>
    </CartProvider>
  </I18nextProvider>
);
