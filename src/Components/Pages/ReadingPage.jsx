import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getReadBooksData } from '../LsData';


const ReadingPage = () => {

    const allBooks = useLoaderData();
    const [readBookLists, setReadBookList] = useState([]);

    useEffect(()=>{
        const savedReadListData =  getReadBooksData();
        const searchReadListData = savedReadListData.map(readBook => allBooks.find(book => book.bookId === readBook.bookId))
        setReadBookList(searchReadListData)
    },[allBooks]);


    

    return (
        <div className='w-full h-[400px]  flex justify-center items-center bg-gray-100 rounded-2xl max-w-11/12 mx-auto p-12'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={readBookLists}>
            <Tooltip />
            <CartesianGrid />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Legend />
          <Bar dataKey="totalPages" fill="#8884d8" className='w-[50px]' />
        </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default ReadingPage;