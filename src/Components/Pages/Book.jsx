import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const Book = ({book}) => {
    const {bookId, bookName, author, image, rating, category, tags} = book
    return (
        <Link to={`/books/${bookId}`}>
                <div className='flex flex-col gap-4 border border-[rgba(19,19,19,0.15)] p-4 rounded-2xl max-w-[400px] '>
            <div className=' flex justify-center items-center p-4 bg-gray-100 rounded-2xl '><img className='max-w-[20%] w-full min-h-[100px] h-full flex-1' src={image} alt="" /></div>
            <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                {
                    tags.map((tag,index) => {
                        return(
                            <button key={index} className='btn text-[#23BE0A] font-medium text-base rounded-3xl border-none'>{tag}</button>
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-3'>
            <h2 className='text-xl sm:text-2xl font-bold text-[#131313]'>{bookName}</h2>
            <p className='text-base font-medium text-[rgba(19,19,19,0.8)]'>By: {author}</p>
            </div>
            <div className='border border-dashed border-[rgba(19,19,19,0.15)]'></div>
            <div className='flex justify-between'>
                <span className='text-base font-medium text-[rgba(19,19,19,0.8)]'>{category}</span>
                <div className='flex gap-3 items-center'>
                <span className='text-base font-medium text-[rgba(19,19,19,0.8)]'>{rating}</span>
                <Star />
                </div>
            </div>
            </div>

        </div>
        </Link>
    );
};

export default Book;