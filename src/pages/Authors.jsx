import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors, getBooks } from "../tools/action/authorAction";
import supabase from "../../utils/supabase";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "animate.css";
import { ModeContext } from "../context/ModeContext";
import { useTranslation } from "react-i18next";
const Authors = () => {
  const dispatch = useDispatch();
  const [openPop, setOpenPop] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [mode] = useContext(ModeContext);
  const authors = useSelector((state) => state.authors.authors);
  const books = useSelector((state) => state.authors.books);

  useEffect(() => {
    const fetchAuthors = async () => {
      const { data } = await supabase.from("authors").select();
      dispatch(getAuthors(data));
    };

    const fetchBooks = async () => {
      const { data } = await supabase.from("books").select();
      dispatch(getBooks(data));
    };

    fetchAuthors();
    fetchBooks();
  }, [dispatch]);
  const { t } = useTranslation();

  // Seçilen yazarın verisini getir
  useEffect(() => {
    if (openPop !== null) {
      const fetchAuthorData = async () => {
        const { data } = await supabase
          .from("authors")
          .select()
          .eq("id", openPop)
          .single();
        setSelectedAuthor(data);
      };
      fetchAuthorData();
    }
  }, [openPop]); // openPop değiştiğinde yeni yazar verisini çek
  useEffect(() => {
    if (openPop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openPop]);

  return (
    <>
      <Header />
      <div className={mode === "light" ? "authors-div" : "dark-authors-div"}>
        <div className="author-card">
          {!authors || authors.length === 0 ? (
            <div className="not-found">
              <div className="d-flex">
                <img
                  src="https://i.pinimg.com/originals/8a/cb/19/8acb194578c6487798c0bc97e1e0c7b0.gif"
                  alt=""
                />
                <h2>Author's Not Found</h2>
              </div>
            </div>
          ) : (
            authors.map((author) => (
              <>
                <div className="flip-card" key={author.id}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="first-img"
                        src={author.image}
                        alt={author.name}
                      />
                    </div>
                    {books
                      .filter((book) => book.author_id === author.id)
                      .slice(0, 1)
                      .map((book) => (
                        <button
                          className="flip-card-back"
                          key={book.id}
                          onClick={() => setOpenPop(author.id)}
                        >
                          <img src={book.img} alt={book.title} />
                        </button>
                      ))}
                  </div>
                </div>
                {openPop !== null && selectedAuthor && (
                  <div className="author-pop">
                    <div
                      className={`pop-card animate__animated animate__zoomIn`}
                    >
                      <button
                        onClick={() => setOpenPop(null)}
                        className="close"
                      >
                        x
                      </button>
                      <img
                        src={selectedAuthor.image}
                        className="author-img"
                        alt={selectedAuthor.name}
                      />
                      <div className="right-part">
                        <h1>{selectedAuthor.name}</h1>
                        <p>{selectedAuthor.description}</p>
                        <div className="year">
                          <h3>Born Year:</h3>
                          <p>{selectedAuthor.age}</p>
                        </div>
                        <div className="year">
                          <h3>Country:</h3>
                          <p>{selectedAuthor.country}</p>
                        </div>
                        <div className="fam-book">
                          <h3>The Most Famous Books:</h3>
                          <div className="book-list">
                            {books
                              .filter((book) => book.author_id === openPop)
                              .map((book) => (
                                <div>
                                  <img
                                    src={book.img}
                                    className="first-img"
                                    alt={book.name}
                                  />
                                  <div>
                                    <h3>
                                      {book.title} {book.published_year}
                                    </h3>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authors;
