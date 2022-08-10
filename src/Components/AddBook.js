import React, { useState } from 'react';

export default function AddBook() {
  const [bookInput, setBookInput] = useState('');

  const handleBookInput = (e) => {
    setBookInput(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // search for book
    console.log(`I will search for ${bookInput} now`);
    setBookInput('');
  };

  return (
    <div id='book-input'>
      <input
        value={bookInput || ''}
        type='text'
        placeholder='search for a book'
        onChange={handleBookInput}
      ></input>
      <input type='submit' onClick={handleBookSubmit}></input>
    </div>
  );
}
