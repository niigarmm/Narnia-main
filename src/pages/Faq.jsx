import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";
import { ModeContext } from "../context/ModeContext";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(false);
  const faqData = [
    {
      id: 1,
      question: "How do I buy an ebook?",
      answer: (
        <>
          <span>App</span> <br />
          You can read ebooks from <Link to="/">Narnia.com</Link> on our
          dedicated mobile app by first logging in, then tapping the library
          icon in the menu bar at the bottom of the screen. From there you can
          tap on an ebook to start reading.
          <br />
          <span> Using a web browser </span> <br /> You can read ebooks from{" "}
          <Link to="/">Narnia.com</Link> on a web browser by
          <Link to=""> logging</Link> in to your Narnia.com account and
          navigating to My Ebook Library via the main account menu. From there,
          click on an ebook to start reading.
        </>
      ),
    },
    {
      id: 2,
      question: "Can I read my ebooks on my Kindle, Kobo, Nook, etc.?",
      answer: (
        <>
          Ebooks from <Link to="/">Narnia.com</Link> must be read on either our
          Apple or Android app, or via a web browser, with the exception of
          DRM-free titles that can be downloaded and transferred to your reader
          app or device of choice.
          <br />
          <br />
          Users of Android based e ink devices, that have regular access to the
          Google Play app store (Boox, Meebook, etc), should be able to download
          and read from our Android app. Mileage may vary depending on the
          device.
        </>
      ),
    },
    {
      id: 3,
      question: "Why can’t I buy ebooks in the app?",
      answer: (
        <>
          Both Apple and Google require app developers who use in-app purchasing
          to pay around 30% of their earnings from those purchases in fees. We
          want that money to be used to support local bookstores instead, so
          this extra step is required.
        </>
      ),
    },
    {
      id: 4,
      question: "How do I find ebooks to buy?",
      answer: (
        <>
          <span>Webiste</span> <br />
          To find ebooks on our website, use our search filters to display
          ebooks only, or visit our dedicated ebooks page to shop from one of
          the featured book lists
          <br />
          <span> In the app </span> <br /> To find ebooks on our website, use
          our search filters to display ebooks only, or visit our dedicated
          ebooks page to shop from one of the featured book lists
        </>
      ),
    },
    {
      id: 5,
      question: "Do I need an account to purchase and read ebooks?",
      answer: (
        <>
          Yes, purchasing ebooks requires an active account. Any purchased
          ebooks will appear in that account’s My Ebook Library, accessible via
          the website or in the Android or Apple apps.
          <br />
          You can create an account on the website here:
          https://bookshop.org/signup.
        </>
      ),
    },
    {
      id: 6,
      question: "Why not just link out to my wishlist from the app, then?",
      answer: (
        <>
          Apple has thought of that, and rejects apps with direct links to the
          developer's website and even rejects explicit language instructing
          folks how to make purchases outside of the app.
          <br />
          <br />
          Google is less strict about this, so folks using our Android app will
          be able to see specific purchasing instructions and even be linked
          directly to their Ebook Wishlist from their app.
        </>
      ),
    },
    {
      id: 7,
      question: "Can I send someone an ebook as a gift?",
      answer: <>Gifting ebooks is not currently supported.</>,
    },
    {
      id: 8,
      question: "Why don’t you have the book I want?",
      answer: (
        <>
          If you are unable to find the ebook you want, it’s possible we are
          still in the process of onboarding that ebook’s publisher. We are
          constantly adding new books and new publishers, so stay tuned!
        </>
      ),
    },
    {
      id: 9,
      question: "Do you sell self-published books?",
      answer: (
        <>
          We will sell self-published titles for authors publishing through
          Draft2Digital or IngramSpark.
        </>
      ),
    },
    {
      id: 10,
      question: "What type of payment do you take?",
      answer: (
        <>
          Bookshop.org accepts all major credit cards as methods of payment.
          Store credit is currently unsupported as a payment method for ebooks.
        </>
      ),
    },
  ];
  const [mode] = useContext(ModeContext);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);

  const toggleQuestion = (id) => {
    setOpenFaq((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div>
      <Header />
      <div className={mode === "light" ? "faq" : "dark-faq"}>
        <h1 className="animate__animated animate__slideInUp animate__slow">Top Question</h1>
        <div className="cards">
          {faqData.map((item) => (
            <button
              style={{ width: "100%" }}
              onClick={() => {
                toggleQuestion(item.id);
              }}
              data-aos="flip-up"
            >
              <div className="question-cart">
                <div key={item.id}>
                  <h3>{item.question}</h3>
                  {openFaq[item.id] && <p>{item.answer}</p>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
