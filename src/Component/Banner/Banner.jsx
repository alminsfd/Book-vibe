import React from 'react';
import Bannerimg from '../../assets/pngwing 1.png';
const Banner = () => {
    return (
        <>
            <div className='flex items-center justify-between p-15 bg-[#1313130d]' >

                <div> 
                    <h2 className='md:text-5xl text-3xl mb-10 font-bold ' >Books to freshen up
                        <br /> your bookshelf</h2>
                    <button className='btn bg-[#23BE0A] text-white font-medium p-6 rounded-lg ' >View The List</button>
                </div>
                <div>
                    <img src={Bannerimg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;