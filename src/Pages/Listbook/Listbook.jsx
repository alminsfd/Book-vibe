import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router';
import Readlist from './Readlist';
import { getaddcard } from '../../Utilities/Localstorage';

const Listbook = () => {
    const [readlist,setReadlist]=useState([])
    const data = useLoaderData()
    useEffect(()=>{
        const storage=getaddcard()
        const list=data.filter(book=>storage.includes(book.bookId)) 
        setReadlist(list)

    },[data])
 
    return (
        <div>
            <div className='w-full bg-[#1313130d] font-bold text-3xl text-center p-6 rounded-xl my-10' >Book</div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    {
                        readlist.map(book=><Readlist key={book.bookId} book={book}></Readlist>)
                    }
                   
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Listbook;