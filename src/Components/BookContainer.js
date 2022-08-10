import React, { useEffect, useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

const styles = {
  containerStyle: {
    display: 'flex',
  },
};

// const books = [
//   {
//     title: 'Normal People',
//     url: 'https://images-na.ssl-images-amazon.com/images/I/812dWt7LgdL.jpg',
//   },
//   {
//     title: 'The Expanse',
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AYV5x94o7kG3sxEftORg_ZCykj47xN_sZw&usqp=CAU',
//   },
//   {
//     title: 'Jane Eyre',
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOqhI66A74McqcqgbgMoukDq_8DILSkw4Nw&usqp=CAU',
//   },
// ];

export default function BookContainer() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    let books = await fetch(`http://localhost:5005/data`).then((response) =>
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
