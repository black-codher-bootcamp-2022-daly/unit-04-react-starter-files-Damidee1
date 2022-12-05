import React from "react";
import Book from "./Book";
import data from "./models/books.json";

const BookList = () => {
  return (
    <main>
      <h2>Book title</h2>

      {data.items.map((item) => (
        <Book item={item} key={item.id} />
      ))}
    </main>
  );
};

export default BookList;
