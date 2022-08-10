import React, { useState } from 'react';

export default function AddBook() {
  const [bookInput, setBookInput] = useState('');
  const [bookUrl, setBookUrl] = useState('');

  const addBook = async () => {
    let newBook = await fetch(`http://localhost:5005/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookInput, bookUrl }),
    }).then((response) => response.json());
    // setBooks(books);
    console.log(newBook);
  };

  const handleBookInput = (e) => {
    setBookInput(e.target.value);
  };

  const handleBookUrlInput = (e) => {
    setBookUrl(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // search for book
    console.log(`I will search for ${bookInput} now`);
    // setBookInput('');
    addBook();
  };

  return (
    <div id='book-input'>
      <input
        value={bookInput || ''}
        type='text'
        placeholder='Book title'
        onChange={handleBookInput}
      ></input>
      <input
        value={bookUrl || ''}
        type='text'
        placeholder='Book Url'
        onChange={handleBookUrlInput}
      ></input>
      <input type='submit' onClick={handleBookSubmit}></input>
    </div>
  );
}
