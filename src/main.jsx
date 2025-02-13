import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "../src/assets/sass/style.scss";
import App from "./App.jsx";
import { ModeProvider } from "./context/ModeContext.jsx";
import configureStore from "./tools/store/configureStore.js";
import { getProduct, addProduct } from "./tools/action/productAction.js";
import { Provider } from "react-redux";
const store = configureStore();

store.dispatch(getProduct());
store.dispatch(
  addProduct({
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699602207i/124974359.jpg",
    title: "Ya Baki Entel Baki",
    price: 20,
    desc: "Çıkmazdayım ya Rab… Hangi duygu ile yürüsem kalbimin yollarında sonu karanlık. Sana çıkmayan her yolda kayboldum, her sevdada boğuldum. Ve şimdi kalbimi acıtan, hayatımı zindana çeviren ne varsa hepsini aldım geldim huzuruna. Sen ki yenilenlerin, yorulanların, kırılanların, düşenlerin de Rabbisin! Merhametinle sar yaralarımı… Her şeyin gelip geçici olduğu şu dünyada kalbimi bâkî olana râzı et… Kitapları ve videolarıyla milyonlara ulaşan Mehmet Yıldız, Yâ Bâkî Entel Bâkî’de de akıcı üslubuyla Allah'ı, dini ve peygamberi anlatmaya devam ediyor…",
    author: "Mehmet Yildiz",
    cat: "Drama",
  })
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ModeProvider>
        <App />
      </ModeProvider>
    </Provider>
  </StrictMode>
);
