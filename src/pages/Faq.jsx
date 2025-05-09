import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";
import { ModeContext } from "../context/ModeContext";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(false);
  const { t } = useTranslation();
  const faqData = [
    {
      id: 1,
      question: "How do I buy an ebook?",
      answer: (
        <>
          <span>App</span> <br />
          {t("faq2")}
          <br />
          <span> {t("web")} </span> <br /> {t("parg3")}
        </>
      ),
    },
    {
      id: 2,
      question: "Can I read my ebooks on my Kindle, Kobo, Nook, etc.?",
      answer: (
        <>
          {t("faq3")}
          <br />
          <br />
          {t("faq32")}
        </>
      ),
    },
    {
      id: 3,
      question: "Why can’t I buy ebooks in the app?",
      answer: <>{t("faq4")}</>,
    },
    {
      id: 4,
      question: "How do I find ebooks to buy?",
      answer: (
        <>
          <span>Webiste</span> <br />
          {t("faq5")}
        </>
      ),
    },
    {
      id: 5,
      question: "Do I need an account to purchase and read ebooks?",
      answer: (
        <>
         {t("faq6")}
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
        <h1 className="animate__animated animate__slideInUp animate__slow">
          {t("top")}
        </h1>
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
