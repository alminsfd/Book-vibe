import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    return (
        <div  className='max-w-7xl mx-auto' >
           <Header></Header> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;