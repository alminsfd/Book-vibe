import { Calendar, StickyNote, Users } from 'lucide-react';
import React from 'react';

const Readlist = ({book}) => {
  
    const { image, bookName, author,  yearOfPublishing, publisher, tags, category, rating, totalPages } = book
    return (
        <div className='w-full border border-[#ddd] flex gap-8 rounded-xl p-5 shadow-sm my-5 ' >
            <div className='bg-[#1313130d] p-10 rounded-xl shadow-md '>
                <img className='h-[130px]' src={image} alt="" />
            </div>
            <div>
                <h3 className='text-3xl font-bold text-[#131313] mb-3' >{bookName}</h3>
                <p className='text-[#131313cc] font-medium  mb-2 text-lg ' >By : {author}</p>
                <div className='flex my-3 items-center '>
                    <span className='text-[#131313] font-bold mr-5' >Tag</span>
                    {
                    
                        tags.map((tag,index)=><p key={index}  className='text-[#23BE0A] text-base  font-medium mr-5' >{tag}</p>)
                    }
                    <Calendar className='text-[#131313cc] h-5 mr-2' />
                    <p className='text-[#131313cc] font-medium ' >Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex items-center mb-2' >
                    <Users  className='text-[#131313cc] h-5 mr-2'  />
                    <p className='text-[#13131399] font-medium mr-5' >Publisher: {publisher}</p>
                    <StickyNote className='text-[#131313cc] h-5 mr-2'  />
                    <p className='text-[#13131399] font-medium mr-5' >Page {totalPages}</p>
                </div>
                <div className='border border-t border-[#ddd] my-3' ></div>
                <button className='bg-[#328eff26] rounded-4xl p-3 mr-3 text-[#328EFF] font-medium ' >Category: {category}</button>
                <button className='text-[#FFAC33] rounded-4xl p-3 mr-3 font-medium bg-[#ffac3326]' >Rating: {rating}</button>
            </div>
        </div>
    );
};

export default Readlist;