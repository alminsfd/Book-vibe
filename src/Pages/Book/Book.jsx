import React from 'react';
import boichobi from '../../assets/Vector.png';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, author, image, bookName, category, tags, rating } = book
    return (
        <Link to={`/details/${bookId}`}>
            <div className='border border-[#ddd] rounded-xl p-8 shadow- m-2 mt-10  cursor-pointer' >
                <div className='bg-[#F3F3F3]  rounded-2xl p-8   shadow-sm  '>
                    <img className='h-[160px] w-auto mx-auto' src={image} alt="" />
                </div>
                <div>
                    <div className='flex justify-evenly items-center my-3'>
                        {
                            tags.map((tag, index) => <button key={index} className='text-[#23BE0A] font-medium text-lg bg-green-50 p-3 rounded-2xl' >{tag}</button>)
                        }

                    </div>

                    <h2 className='font-bold text-2xl text-[#131313] mb-3' >{bookName}</h2>
                    <p className='font-medium text-lg text-[#131313cc] ' >By:- {author}</p>
                    <div className='border border-dashed border-t  border-[#ccc] my-3' ></div>
                    <div className='font-medium text-lg text-[#131313cc] flex justify-between items-center mt-4  ' >
                        <p>{category}</p>
                        <div className='flex items-center'>
                            <p className='mx-2'>{rating}</p>
                            <span><img src={boichobi} alt="" /></span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;