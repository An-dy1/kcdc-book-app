import React from 'react';
import { useEffect } from 'react';

const styles = {
  divstyles: {
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
    padding: '10px',
  },
  imgStyles: {
    objectFit: 'contain',
    height: '150px',
  },
};

function Book(props) {
  // useEffect(() => {});

  return (
    <div style={styles.divstyles}>
      <label htmlFor='title'>{props.title}</label>
      <img src={props.url} alt='Temp Book' style={styles.imgStyles} />
    </div>
  );
}

export default Book;
