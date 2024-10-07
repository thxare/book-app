import React, { useEffect, useState } from "react";
import styles from "./BooksApp.module.css";
import { BooksAvailable } from "./BooksAvailable";
import { ReadingList } from "./ReadingList";

export const BooksApp = () => {
  const [addBook, setAddBook] = useState([]);
  useEffect(() => {}, [addBook]);
  return (
    <div className={styles.booksContainer}>
      <BooksAvailable addBook={addBook} setAddBook={setAddBook} />
      <ReadingList addBook={addBook} />
    </div>
  );
};
