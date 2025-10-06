import React from 'react';
import Book from './Book';

const Books = ({ books}) => {
    // console.log(books)
    return (
        <div className=' grid md:grid-cols-3 grid-cols-1' >
            {
              books.map(book=><Book  key={book.bookId}  book={book}  ></Book>)
            }
            
        </div>
    );
};

export default Books;