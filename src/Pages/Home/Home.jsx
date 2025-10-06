import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Books from '../Book/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const books=useLoaderData()
    return (
        <>
        <Banner></Banner>
        <Books  books={ books} ></Books>
        </>
    );
};

export default Home;