import React, { useEffect, useState } from 'react';
import Book from './Book';

const styles = {
  containerStyle: {
    display: 'flex',
  },
};

const api_url = `http://localhost:5005`;

export default function BookContainer() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    let books = await fetch(`${api_url}/books`).then((response) =>
      response.json()
    );
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={styles.containerStyle}>
      {books.map((book, index) => (
        <Book key={index} title={book.title} url={book.url} />
      ))}
    </div>
  );
}
