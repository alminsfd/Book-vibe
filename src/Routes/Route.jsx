import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorPg/Error';
import Home from '../Pages/Home/Home';
import Listbook from '../Pages/Listbook/Listbook';
import Readbook from '../Pages/readbook/Readbook';
import Bookdetails from '../Pages/Boodetails/Bookdetails';
export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                path:'/',
                loader:()=>fetch('/public/booksData.json'),
                Component:Home

            },
            {
                path:'/list',
                loader:()=>fetch('/public/booksData.json'),
                Component:Listbook
            },
            {
                path:'/read',
                Component:Readbook
            },
            { 
                path:'/details/:bookid',
                loader:()=>fetch('/public/booksData.json'),
                Component:Bookdetails
            }

    ]
    },
]);