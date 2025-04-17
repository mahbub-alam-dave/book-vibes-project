import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[rgba(19,19,19,0.05)] rounded-2xl flex flex-col sm:flex-row justify-around items-center p-4 md:p-8 lg:p-12'>
           <div className='flex flex-col gap-4 md:gap-6 items-start'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-[54px] sm:leading-[70px] lg:leading-[84px]'>Books to freshen up <br /> your bookshelf</h1>
            <button className='btn'>View The List</button>
            </div> 
            <div>
            <img className='w-full' src="src/assets/banner-book.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;