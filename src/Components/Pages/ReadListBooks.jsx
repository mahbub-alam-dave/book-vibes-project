import React from 'react';

const ReadListBooks = ({readListBook}) => {
    return (
        <div>
                    <div className='flex  gap-4 md:gap-6 lg:gap-8 border border-[rgba(19,19,19,0.15)] p-4 md:p-6 rounded-2xl'>
            <div className='max-w-[220px] bg-gray-100 p-4 flex justify-center items-center rounded-2xl'>
                <img className='w-[45%] h-auto' src={readListBook.image} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <h2>{readListBook.bookName}</h2>
                <span>By: {readListBook.author}</span>
                <div className='flex gap-4 items-center'>
                    <span className='font-bold'>Tag</span>
                    {
                        readListBook.tags.map((tag, index) => <button className='btn border-none' key={index}>{tag}</button>)
                    }
                    <span>Year of Publishing: {readListBook.yearOfPublishing}</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <span>publisher: {readListBook.publisher}</span>
                    <span>Page: {readListBook.totalPages}</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <button className='btn'>Category: {readListBook.category}</button>
                    <button className='btn'>Rating: {readListBook.rating}</button>
                    <button className='btn'>View Details</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReadListBooks;