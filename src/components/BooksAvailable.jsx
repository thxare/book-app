import React from "react";
import styles from "./BooksAvailable.module.css";
import books from "../books.json";

export const BooksAvailable = ({ setAddBook }) => {
  const { library } = books;
  const booksAv = 6;
  const booksInList = 2;
  const onClick = (e, book) => {
    e.preventDefault();
    setAddBook((prevBook) => [...prevBook, book]);
  };
  return (
    <div className={styles.content}>
      <div className={styles.quantity}>
        <h1 className={styles.title}>{booksAv} libros disponibles</h1>
        <h2 className={styles.booksInList}>
          {booksInList} en la lista de lectura
        </h2>
        <div className={styles.books}>
          <li className={styles.bookList}>
            {library.map((book) => {
              return (
                <ul className={styles.eachBook} key={book.book.ISBN}>
                  <span className={styles.span}>+</span>
                  <button
                    className={styles.buttonAdd}
                    onClick={(e) => onClick(e, book.book)}
                  >
                    <img
                      alt="libros"
                      src={book.book.cover}
                      width={180}
                      height={250}
                    />
                  </button>
                  <p className={styles.titleBook}>{book.book.title}</p>
                  <span className={styles.year}>{book.book.year}</span>
                </ul>
              );
            })}
          </li>
        </div>
      </div>
    </div>
  );
};
