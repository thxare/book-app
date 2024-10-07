import React, { useEffect, useState } from "react";
import styles from "./BooksAvailable.module.css";
import books from "../books.json";
import { FilterBook } from "./FilterBook";

export const BooksAvailable = ({ addBook, setAddBook }) => {
  let { library } = books;
  const getPage = library.map((book) => book.book.pages);
  const maxPage = Math.max(...getPage);
  const [usePages, setUsePages] = useState(maxPage);
  const [useBooks, setUseBooks] = useState(library);
  const onClick = (e, book) => {
    e.preventDefault();
    setAddBook((prevBook) => [...prevBook, book]);
  };
  const eachGenre = new Set(library.map((book) => book.book.genre));

  const filtered =
    useBooks.length > 0 &&
    library.filter((book) => book.book.pages <= usePages);
  useEffect(() => {
    if (filtered.length > 0) {
      setUseBooks(filtered);
    }
  }, [usePages]);

  return (
    <div className={styles.content}>
      <div className={styles.quantity}>
        <h1 className={styles.title}>{useBooks.length} libros disponibles</h1>
        <h2 className={styles.booksInList}>
          {addBook ? addBook.length : ""} en la lista de lectura
        </h2>
        <FilterBook
          genre={eachGenre}
          maxPage={maxPage}
          usePages={usePages}
          setUsePages={setUsePages}
        />
        <ul className={styles.bookList}>
          {useBooks.length < 0 ? (
            <div>No hay libros</div>
          ) : (
            useBooks.map((book) => {
              const theBook = book.book;
              return (
                <li className={styles.eachBook} key={theBook.ISBN}>
                  <span className={styles.span}>+</span>
                  <button
                    className={styles.buttonAdd}
                    onClick={(e) => onClick(e, theBook)}
                  >
                    <img
                      alt="libros"
                      src={theBook.cover}
                      width={180}
                      height={250}
                    />
                  </button>
                  <p className={styles.titleBook}>{theBook.title}</p>
                  <span className={styles.year}>{theBook.year}</span>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
