import React, { useState } from "react";
import styles from "./ReadingList.module.css";

export const ReadingList = ({ addBook }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Lista de lectura</h2>
      <div className={styles.books}>
        <li className={styles.bookList}>
          {addBook.map((book) => {
            return (
              <ul>
                <img alt="libros" src={book.cover} width={180} />
              </ul>
            );
          })}
        </li>
      </div>
    </div>
  );
};
