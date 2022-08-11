import React, { useState } from 'react';

const api_base_url = `http://localhost:5005`;

export default function AddBook() {
  const [bookInput, setBookInput] = useState('');
  const [bookUrl, setBookUrl] = useState('');

  const addBook = async () => {
    let title = bookInput;
    let url = bookUrl;
    await fetch(`${api_base_url}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, url }),
    }).then((response) => response.json());
  };

  const handleBookInput = (e) => {
    setBookInput(e.target.value);
  };

  const handleBookUrlInput = (e) => {
    setBookUrl(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
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
