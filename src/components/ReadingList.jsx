import React from "react";
import styles from "./ReadingList.module.css";

export const ReadingList = ({ addBook }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Lista de lectura</h2>
      <div className={styles.books}>
        <ul className={styles.bookList}>
          {addBook.length < 1 ? <div>No hay libros en la lista...</div> : ""}
          {addBook.map((book) => {
            return (
              <li key={book.ISBN}>
                <img alt="libros" src={book.cover} width={180} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
