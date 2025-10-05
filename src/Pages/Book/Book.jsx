import React, { useEffect, useState } from 'react';
const Book = () => {
const  [allBooks,setAllbooks]=useState()
useEffect(()=>{
    fetch('/booksData.json')
    .then(res=>res.json())
    .then(data=>setAllbooks(data))
},[])
console.log(allBooks)
    return (
        <div>
            <h1>I am a book</h1>
        </div>
    );
};

export default Book;