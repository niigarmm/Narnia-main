import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors, getBooks } from "../tools/action/authorAction";
import supabase from "../../utils/supabase";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Authors = () => {
  const dispatch = useDispatch();
  const [openPop, setOpenPop] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

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

  // Seçilen yazarın verisini getir
  useEffect(() => {
    if (openPop !== null) {
      const fetchAuthorData = async () => {
        const { data } = await supabase.from("authors").select().eq("id", openPop).single();
        setSelectedAuthor(data);
      };
      fetchAuthorData();
    }
  }, [openPop]); // openPop değiştiğinde yeni yazar verisini çek

  return (
    <>
      <Header />
      <div className="authors-div">
        <div className="author-card">
          {authors.map((author) => (
            <div className="flip-card" key={author.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={author.image} alt={author.name} />
                </div>
                {books
                  .filter((book) => book.author_id === author.id)
                  .map((book) => (
                    <button
                      className="flip-card-back"
                      key={book.id}
                      onClick={() => setOpenPop(author.id)} // Direkt olarak state’i değiştiriyoruz
                    >
                      <img src={book.img} alt={book.title} />
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* Popup sadece seçilen yazar için açılır */}
      {openPop !== null && selectedAuthor && (
        <div className="author-pop" onClick={() => setOpenPop(null)}>
          <div className="pop-card">
            <h2>{selectedAuthor.name}</h2>
            <p>{selectedAuthor.bio}</p>
            <img src={selectedAuthor.image} alt={selectedAuthor.name} />
          </div>
        </div>
      )}
    </>
  );
};

export default Authors;
