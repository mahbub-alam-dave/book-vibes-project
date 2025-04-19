import React from 'react';

const WishlistBooks = ({wishlistBook}) => {
    return (
        <div className='flex  gap-4 md:gap-6 lg:gap-8 border border-[rgba(19,19,19,0.15)] p-4 md:p-6 rounded-2xl'>
            <div className='max-w-[220px] bg-gray-100 p-4 flex justify-center items-center rounded-2xl'>
                <img className='w-[45%] h-auto' src={wishlistBook.image} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <h2>{wishlistBook.bookName}</h2>
                <span>By: {wishlistBook.author}</span>
                <div className='flex gap-4 items-center'>
                    <span className='font-bold'>Tag</span>
                    {
                        wishlistBook.tags.map((tag, index) => <button className='btn border-none' key={index}>{tag}</button>)
                    }
                    <span>Year of Publishing: {wishlistBook.yearOfPublishing}</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <span>publisher: {wishlistBook.publisher}</span>
                    <span>Page: {wishlistBook.totalPages}</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <button className='btn'>Category: {wishlistBook.category}</button>
                    <button className='btn'>Rating: {wishlistBook.rating}</button>
                    <button className='btn'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistBooks;