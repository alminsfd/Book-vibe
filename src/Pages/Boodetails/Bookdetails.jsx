import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Bookdetails = () => {

    const { bookid } = useParams()
    const Bookid = parseInt(bookid)
    const data = useLoaderData()
    const bookfind = data.find(book => book.bookId === Bookid)
    const { image, bookName, author, review, yearOfPublishing, publisher, tags, category, rating, totalPages } = bookfind

    return (

        <div className='flex w-full mt-10 gap-10' >
            <div className='bg-[#1313130d] w-1/2 p-13 rounded-xl shadow-lg border border-[#ddd] ' ><img className='h-[500px] mx-auto' src={image} alt="" /></div>
            <div className='w-1/2' >
                <h2 className='font-bold text-4xl mb-3' >{bookName}</h2>
                <p className='font-medium text-xl text-[#131313cc] mb-3' >By : {author}</p>
                <div className='border border-t border-[#ddd] mb-3' ></div>
                <p className='font-medium text-xl text-[#131313cc] mb-3' >{category}</p>
                <div className='border border-t border-[#ddd] mb-3' ></div>
                <p className='text-base text-gray-600 mb-3' ><span className='font-black text-base text-black' >Review :</span> {review}</p>
                <div className='flex items-center mb-3' >
                    <span className='font-black text-base text-black  mx-5' >Tag</span>
                    {
                        tags.map((tag,index)=><p  key={tag+index} className='text-[#23BE0A] text-base  font-medium  mx-5' >{tag}</p>)
                    }
                    
                </div>
                <div className='border border-t border-[#ddd] mb-3' ></div>
                <div className='grid grid-cols-2 gap-2 text-justify mb-3' >
                    <p className='text-gray-700 font-bold' > Number of Pages:</p>
                    <p className='text-black font-medium' >{totalPages}</p>
                    <p className='text-gray-700 font-bold' >Publisher:</p>
                    <p className='text-black font-medium' >{publisher}</p>
                    <p className='text-gray-700 font-bold' >Year of Publishing:</p>
                    <p className='text-black font-medium' >{yearOfPublishing}</p>
                    <p className='text-gray-700 font-bold' >Rating</p>
                    <p className='text-black font-medium' >{rating}</p>
                </div>
                <div className='mt-5' >
                    <button className='btn mx-3 text-black' >Read</button>
                    <button className='btn mx-3 bg-[#50B1C9] text-white px-6' >Wishlist</button>
                </div>
            </div>
        </div>

    );
};

export default Bookdetails;