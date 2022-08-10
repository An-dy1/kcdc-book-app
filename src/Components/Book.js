import React from 'react';

const styles = {
    divstyles:{
        display: 'flex',
        flexDirection: 'column',
        height: '150px',
        padding: '10px'
    }
}

function Book() {
    return (
      <div>
        <label 
            htmlFor="Title">
            Title
        </label>
        <img 
            src="https://images-na.ssl-images-amazon.com/images/I/812dWt7LgdL.jpg" 
            alt="Temp Book"
            style={styles.divstyles} />
      </div>
    );
  }

export default Book;