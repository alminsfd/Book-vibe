import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router';
import Readlist from './Readlist';
import { getaddcard } from '../../Utilities/Localstorage';

const Listbook = () => {
    const [readlist, setReadlist] = useState([])
    const [sort,setSort]=useState("")
    const data = useLoaderData()
    useEffect(() => {
        const storage = getaddcard()
        const list = data.filter(book => storage.includes(book.bookId))
        setReadlist(list)
    }, [data])

    const handleSort=(type)=>{
        setSort(type)
        if(type==='pages'){
            const sortedBypages=[...readlist].sort((a,b)=>a.totalPages-b.totalPages)
            setReadlist(sortedBypages)
        }
        if(type==="Rating"){
            const sortedByRating=[...readlist].sort((a,b)=>a.rating-b.rating)
            setReadlist(sortedByRating)
        }

    }

    return (
        <div>
            <div className='w-full bg-[#1313130d] font-bold text-3xl text-center p-6 rounded-xl my-10' >Book</div>
            <div  className='flex justify-center items-center' >
                <div className="dropdown rounded-xl bg-[#23BE0A] mb-13 ">
                <div tabIndex={0} role="button" className=" rounded-xl cursor-pointer px-2 py-1 text-white font-bold bg-[#23BE0A] m-1">Sort By:-  {sort?sort:""} </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm  text-[#131313cc] font-medium">
                    <li><a onClick={()=>handleSort('Rating')} >Rating</a></li>
                    <li><a  onClick={()=>handleSort('pages')} >Number of pages</a></li>
                </ul>
            </div>
            </div>
            
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    {
                        readlist.map(book => <Readlist key={book.bookId} book={book}></Readlist>)
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