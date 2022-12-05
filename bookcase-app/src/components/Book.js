import React from "react";
function Book({ item }) {
  return <h2>{item.volumeInfo.title}</h2>;
}

export default Book;
